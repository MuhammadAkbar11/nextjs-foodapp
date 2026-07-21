/**
 * Centralized environment configuration access.
 *
 * All `process.env` reads for application configuration should go through
 * this module so that:
 *  - reads are not scattered across the codebase
 *  - future backend features have a single, predictable location to add config
 *  - sensitive values are never documented or hardcoded here
 *
 * Server-only secrets (e.g. `DATABASE_URL`) are added here as required by
 * later issues. Values are read from `.env.local` (gitignored) or the
 * runtime environment — never from source code.
 *
 * Next.js loads `.env.local` automatically, but standalone scripts such as
 * drizzle-kit and `tsx` seed scripts do not. `dotenv` loads `.env.local`
 * here so that the same configuration works in both contexts. It is safe to
 * call in the Next.js runtime because dotenv will not overwrite variables
 * that are already set.
 */

import { config } from "dotenv";

config({ path: ".env.local" });

export const env = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  databaseUrl: process.env.DATABASE_URL ?? "",
} as const;
