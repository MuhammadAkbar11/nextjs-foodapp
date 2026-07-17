import Link from "next/link";
import { Button } from "@/components/ui/button";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/data/meals";

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold tracking-tight">
          Delicious meals, created{" "}
          <span className="text-orange-500">by you</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <Button asChild size="xl" className="bg-orange-500 hover:bg-orange-600">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </Button>
      </header>

      <MealsGrid meals={meals} />
    </div>
  );
}
