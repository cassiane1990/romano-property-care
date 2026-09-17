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
