export interface Meal {
  id: string;
  slug: string;
  title: string;
  description: string;
  creator: string;
  image: string;
  instructions: string;
}

// Storage shape returned by the data layer (e.g. a future database).
// Currently identical to Meal but kept distinct so the data layer
// can evolve independently of the UI-facing Meal type.
export type MealData = Meal;

// Subset of Meal used for list/card previews.
export interface MealSummary {
  id: string;
  slug: string;
  title: string;
  description: string;
  creator: string;
  image: string;
}

// Shape submitted by the share-meal form, before a stable id/slug
// are assigned by the data layer.
export interface MealInput {
  title: string;
  description: string;
  creator: string;
  creator_email: string;
  image: string;
  instructions: string;
}
