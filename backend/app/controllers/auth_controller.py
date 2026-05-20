"""Compatibility shim — re-export moved auth controller implementation.

This file previously contained the controller implementation. The implementation was
moved to ``app.controllers.auth.controller`` to better group auth code. To remain
backwards-compatible during a staged reorg, we re-export the public symbols here.
"""

from app.controllers.auth.controller import *

__all__ = [
    "create_staff_account",
    "sign_in_staff_account",
    "change_authenticated_password",
    "request_staff_password_reset",
    "confirm_staff_password_reset",
    "delete_authenticated_account",
    "refresh_staff_session",
]
