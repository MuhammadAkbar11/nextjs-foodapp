/**
 * Centralized environment configuration access.
 *
 * All `process.env` reads for application configuration should go through
 * this module so that:
 *  - reads are not scattered across the codebase
 *  - future backend features have a single, predictable location to add config
 *  - sensitive values are never documented or hardcoded here
 *
 * Server-only secrets (e.g. `DATABASE_URL`) should be added here as they
 * become required by later issues (see .env.example for the planned set).
 */

export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
} as const;
