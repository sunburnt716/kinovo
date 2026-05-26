# Page composition layer

This folder is organized by experience so route-level files stay easy to find.

## Structure

- `public/landing/` — website landing experience.
- `public/auth/` — public authentication pages such as log-in, sign-up, and password recovery.
- `portal/triage/` — signed-in waiting-room triage pages.
- `portal/history/` — signed-in patient history review.
- `portal/devices/` — signed-in wearable/device health pages.
- `portal/settings/` — signed-in profile and theme settings.

## Responsibilities

1. Compose component trees for each route.
2. Wire context and service outputs into presentation components.
3. Keep route-specific orchestration readable.

## Design reasoning

Pages coordinate behavior while reusable components stay focused. This keeps each file understandable to new contributors.
