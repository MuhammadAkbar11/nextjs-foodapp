/**
 * PostgreSQL database connection.
 *
 * This module is intended for server-side use only (Server Components, Server
 * Actions, and API routes). It must never be imported by client components or
 * page components that render in the browser.
 *
 * The connection is configured exclusively through environment variables via
 * `src/lib/env.ts` so that credentials never live in source code.
 *
 * Note: this issue only establishes the database foundation. Table creation,
 * migrations, ORM schemas, and application queries will be added by later
 * issues.
 */

import { Pool } from "pg";
import { env } from "@/lib/env";

const globalForDb = globalThis as unknown as {
  __pgPool?: Pool;
};

export const pool: Pool =
  globalForDb.__pgPool ??
  new Pool({
    connectionString: env.databaseUrl,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__pgPool = pool;
}
