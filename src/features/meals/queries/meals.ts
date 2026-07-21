/**
 * Meals feature queries.
 *
 * Provides data access functions for retrieving meal records from the
 * database. All queries run server-side and return types consumed by
 * the meals feature UI components.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db";
import { meals } from "@/db/schema/meals";
import { delayAsync } from "@/lib/utils/delay-async";
import type { Meal } from "@/types/meal";

/**
 * Transforms a database meal row into the UI-facing Meal type.
 * Maps database columns to the expected interface fields.
 */
function toMeal(row: typeof meals.$inferSelect): Meal {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.summary,
    creator: row.creator,
    creator_email: row.creatorEmail,
    image: row.image,
    instructions: row.instructions,
  };
}

/**
 * Fetches all meals from the database for the recipe listing page.
 * Returns meals ordered by creation date (newest first).
 */
export async function getMeals(): Promise<Meal[]> {
  await delayAsync(2000);

  const rows = await db.select().from(meals).orderBy(meals.createdAt);

  return rows.map(toMeal);
}

/**
 * Fetches a single meal by its URL-friendly slug identifier.
 * Returns null when no matching meal exists.
 */
export async function getMealBySlug(slug: string): Promise<Meal | null> {
  await delayAsync(2000);

  const [row] = await db
    .select()
    .from(meals)
    .where(eq(meals.slug, slug))
    .limit(1);

  return row ? toMeal(row) : null;
}
