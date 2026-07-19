/**
 * Drizzle ORM connection verification script.
 *
 * Run with:
 *   pnpm exec tsx --env-file=.env.local scripts/verify-drizzle.ts
 *
 * This script only checks that the application can reach PostgreSQL through
 * the Drizzle ORM client. It does not create tables, run migrations, or
 * execute any application queries.
 */

import { sql } from "drizzle-orm";
import { db } from "@/db";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }

  try {
    const result = await db.execute<{ now: string }>(sql`SELECT NOW() AS now`);
    const row = Array.isArray(result) ? result[0] : result.rows[0];
    console.log("✅ Connected to PostgreSQL via Drizzle ORM");
    console.log("   Server time:", row?.now);
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL via Drizzle ORM:");
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    await db.$client.end();
  }
}

main();
