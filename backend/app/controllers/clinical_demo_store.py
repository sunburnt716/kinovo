"""Compatibility shim — re-export moved clinical demo store implementation."""

from app.controllers.clinical_demo.store import *

__all__ = ["load_dashboard_snapshot", "load_device_snapshot"]
