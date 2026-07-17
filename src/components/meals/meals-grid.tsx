import type { Meal } from "@/types/meal";
import MealItem from "@/components/meals/meal-item";

interface MealsGridProps {
  meals: Meal[];
}

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </main>
  );
}
