/**
 * Database connection verification script.
 *
 * Run with:
 *   pnpm exec tsx --env-file=.env.local scripts/verify-db.ts
 *
 * This script only checks that the application can reach PostgreSQL using the
 * configured DATABASE_URL. It does not create tables, run migrations, or
 * execute any application queries.
 */

import { pool } from "@/lib/db";

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set.");
    process.exit(1);
  }

  try {
    const result = await pool.query<{ now: Date }>("SELECT NOW() AS now");
    console.log("✅ Connected to PostgreSQL");
    console.log("   Server time:", result.rows[0].now.toISOString());
  } catch (error) {
    console.error("❌ Failed to connect to PostgreSQL:");
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

main();
