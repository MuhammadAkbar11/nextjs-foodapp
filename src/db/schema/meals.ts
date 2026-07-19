/**
 * Meals table schema.
 *
 * Represents the core recipe entity in FoodApp. All columns are required
 * except where noted, and the table is designed to support future features
 * such as search, filtering, and recipe ownership without changing the
 * initial structure.
 */

import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const meals = pgTable("meals", {
  id: uuid("id").primaryKey().defaultRandom(),

  // URL-friendly identifier used for recipe routes and sharing.
  slug: varchar("slug", { length: 255 }).notNull().unique(),

  title: varchar("title", { length: 255 }).notNull(),

  // Image path or URL. Stored as text to support long CDN URLs.
  image: text("image").notNull(),

  // Short recipe overview displayed in cards and listings.
  summary: text("summary").notNull(),

  // Full preparation instructions.
  instructions: text("instructions").notNull(),

  creator: varchar("creator", { length: 255 }).notNull(),

  creatorEmail: varchar("creator_email", { length: 255 }).notNull(),

  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type MealRow = typeof meals.$inferSelect;
export type MealInsert = typeof meals.$inferInsert;
