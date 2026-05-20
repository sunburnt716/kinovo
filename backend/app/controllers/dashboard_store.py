"""Compatibility shim — re-export moved dashboard store implementation."""

from app.controllers.dashboard.store import *

__all__ = [
    "get_waiting_room_snapshot",
    "get_device_health_snapshot",
    "add_patient",
    "list_available_wearables",
    "run_wearable_precheck",
    "bind_wearable",
    "unbind_wearable",
    "release_patient",
    "get_critical_moments_history",
    "get_pairing_status",
    "get_patient_detail",
]
