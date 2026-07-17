import Link from "next/link";
import { Button } from "@/components/ui/button";
import MealsGrid from "@/components/meals/meals-grid";
import type { Meal } from "@/components/meals/meal-item";

export default function MealsPage() {
  const dummyMeals: Meal[] = [
    {
      id: "m1",
      slug: "juicy-cheese-burger",
      title: "Juicy Cheese Burger",
      description:
        "A delicious burger with a juicy beef patty and melted cheese.",
      creator: "John Doe",
      image: "/images/burger.jpg",
    },
    {
      id: "m2",
      slug: "spicy-curry",
      title: "Spicy Curry",
      description: "A rich and spicy curry with chicken and vegetables.",
      creator: "Jane Doe",
      image: "/images/curry.jpg",
    },
    {
      id: "m3",
      slug: "fresh-tomato-pasta",
      title: "Fresh Tomato Pasta",
      description: "Classic Italian pasta with fresh tomatoes and basil.",
      creator: "Mario Rossi",
      image: "/images/tomato-salad.jpg",
    },
  ];

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

      <MealsGrid meals={dummyMeals} />
    </div>
  );
}
