import { defineConfig } from "drizzle-kit";
import { env } from "@/lib/env";

/**
 * Drizzle ORM configuration.
 *
 * This file tells drizzle-kit where to find database schemas and how to
 * connect to PostgreSQL. Connection credentials are read from environment
 * variables via src/lib/env.ts so they are never committed to source control.
 *
 * Note: this issue only establishes the Drizzle foundation. Actual tables and
 * migrations will be created by later schema issues.
 */
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema/*",
  out: "./drizzle",
  dbCredentials: {
    url: env.databaseUrl,
  },
});
