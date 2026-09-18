# ROMANO PROPERTY CARE — Zero

New production architecture built from zero.

## Principles
- No dependency on legacy app code.
- Supabase/PostgreSQL is the source of truth.
- Server-side authorization and Row Level Security are mandatory.
- Client isolation and employee assignment isolation are enforced in the database.
- Supervisor has operational access only; finance is admin-only.
- Multiple administrators, supervisors, employees and clients are supported.
- Soft archive/versioning/audit instead of destructive deletion for business records.
- Offline operations use an explicit sync queue with conflict handling.
- Production is separated from development/staging.

## Initial roles
- ADMIN
- SUPERVISOR
- FUNCIONÁRIO
- CLIENTE

## UI direction
Premium ROMANO PROPERTY CARE identity: ivory/champagne, warm gold, charcoal/black, refined typography, generous spacing, elegant navigation, responsive desktop/tablet/mobile.

## Important
This directory is the new project foundation. Existing applications are references only and are not runtime dependencies.
## Current build state — 18/09/2026
- Production Supabase project is active and contains the real PostgreSQL/RLS architecture.
- The dashboard RPC was corrected to use `assigned_employee_id` and now exposes today's services, open services, in-progress services, completed-today, incidents and urgent incidents while preserving finance metrics for ADMIN.
- The zero frontend now starts behind Supabase Auth and retrieves the authenticated profile/context before showing the application.
- MFA/AAL2 verification is wired when a verified TOTP factor is required.
- The zero frontend dashboard reads real backend metrics and real `rpc_jobs` rows; it does not seed demo data.
- Anonymous execution of SECURITY DEFINER functions in the public API surface has been removed. Authenticated execution remains for controlled application RPCs and must be reviewed function-by-function before final production sign-off.

