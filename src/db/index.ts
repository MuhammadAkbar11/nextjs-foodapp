/**
 * Drizzle ORM database client.
 *
 * This module is server-side only and must never be imported by client
 * components. It wraps the existing PostgreSQL pool from `src/lib/db.ts` with
 * Drizzle ORM, providing a type-safe query builder for future data access
 * layers.
 *
 * queries will be added by later issues.
 */

import { drizzle } from "drizzle-orm/node-postgres";
import { pool } from "@/lib/db";

const globalForDb = globalThis as unknown as {
  __drizzleDb?: ReturnType<typeof drizzle>;
};

export const db = globalForDb.__drizzleDb ?? drizzle({ client: pool });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__drizzleDb = db;
}

export type Database = typeof db;
