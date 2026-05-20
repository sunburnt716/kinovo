import uuid
from sqlalchemy.types import TypeDecorator, BINARY, CHAR


class GUID(TypeDecorator):
    """Platform-independent GUID type.

    - Uses native Postgres UUID type when available.
    - Uses BINARY(16) on MySQL for compact storage.
    - Falls back to CHAR(36) for other dialects.

    Accepts `as_uuid=True` to return/accept uuid.UUID objects, matching
    SQLAlchemy's postgres UUID behaviour.
    """

    cache_ok = True

    def __init__(self, as_uuid: bool = True):
        super().__init__()
        self.as_uuid = as_uuid

    def load_dialect_impl(self, dialect):
        name = dialect.name if hasattr(dialect, "name") else None
        if name == "postgresql":
            from sqlalchemy.dialects.postgresql import UUID as PG_UUID

            return dialect.type_descriptor(PG_UUID(as_uuid=self.as_uuid))
        if name == "mysql":
            return dialect.type_descriptor(BINARY(16))
        return dialect.type_descriptor(CHAR(36))

    def process_bind_param(self, value, dialect):
        if value is None:
            return None

        name = dialect.name if hasattr(dialect, "name") else None
        # Postgres driver will accept str/UUID directly
        if name == "postgresql":
            return str(value) if not isinstance(value, str) else value

        # MySQL: store as 16-byte binary
        if name == "mysql":
            if isinstance(value, uuid.UUID):
                return value.bytes
            if isinstance(value, str):
                return uuid.UUID(value).bytes
            # assume already bytes
            return value

        # Fallback: CHAR(36)
        if self.as_uuid and isinstance(value, uuid.UUID):
            return str(value)
        return str(value)

    def process_result_value(self, value, dialect):
        if value is None:
            return None

        name = dialect.name if hasattr(dialect, "name") else None
        if name == "postgresql":
            return value if not self.as_uuid else uuid.UUID(value)

        if name == "mysql":
            # value is 16-byte binary
            if isinstance(value, (bytes, bytearray)):
                return uuid.UUID(bytes=bytes(value)) if self.as_uuid else value
            # unexpected string
            return uuid.UUID(value) if self.as_uuid else value

        # Fallback: CHAR(36)
        return uuid.UUID(value) if self.as_uuid else value
