import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function MealsPage() {
  const dummyMeals = [
    {
      id: "m1",
      slug: "juicy-cheese-burger",
      title: "Juicy Cheese Burger",
      description: "A delicious burger with a juicy beef patty and melted cheese.",
      creator: "John Doe",
    },
    {
      id: "m2",
      slug: "spicy-curry",
      title: "Spicy Curry",
      description: "A rich and spicy curry with chicken and vegetables.",
      creator: "Jane Doe",
    },
    {
      id: "m3",
      slug: "fresh-tomato-pasta",
      title: "Fresh Tomato Pasta",
      description: "Classic Italian pasta with fresh tomatoes and basil.",
      creator: "Mario Rossi",
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
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </Button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyMeals.map((meal) => (
          <Card key={meal.id} className="overflow-hidden">
            <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground">
              [ Meal Image Placeholder ]
            </div>
            <CardHeader>
              <CardTitle>{meal.title}</CardTitle>
              <CardDescription>by {meal.creator}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {meal.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/meals/${meal.slug}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
