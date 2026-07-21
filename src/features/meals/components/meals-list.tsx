import MealsGrid from "@/features/meals/components/meals-grid";
import { getMeals } from "@/features/meals/queries/meals";

/**
 * Fetches and renders the full meals grid for the listing page.
 *
 * This component is designed to be rendered inside a React Suspense boundary
 * so the page shell can be streamed while meal data is being retrieved.
 */
export default async function MealsList() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}
