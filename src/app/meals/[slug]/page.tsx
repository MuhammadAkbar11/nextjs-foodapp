import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import Link from "next/link";

export default async function MealDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Dummy data lookup
  const mealsData: Record<string, { title: string; creator: string; summary: string; instructions: string }> = {
    "juicy-cheese-burger": {
      title: "Juicy Cheese Burger",
      creator: "John Doe",
      summary: "A delicious burger with a juicy beef patty and melted cheese.",
      instructions: "1. Grill the patty.\n2. Melt the cheese on top.\n3. Assemble with buns and sauce.",
    },
    "spicy-curry": {
      title: "Spicy Curry",
      creator: "Jane Doe",
      summary: "A rich and spicy curry with chicken and vegetables.",
      instructions: "1. Fry the spices.\n2. Add chicken and vegetables.\n3. Simmer with coconut milk.",
    },
    "fresh-tomato-pasta": {
      title: "Fresh Tomato Pasta",
      creator: "Mario Rossi",
      summary: "Classic Italian pasta with fresh tomatoes and basil.",
      instructions: "1. Boil the pasta.\n2. Cook tomatoes with garlic and olive oil.\n3. Mix together with basil.",
    },
  };

  const meal = mealsData[slug] || {
    title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    creator: "Anonymous",
    summary: "A delicious meal created by our community.",
    instructions: "Instructions not provided.",
  };

  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-start">
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link href="/meals">
            <ArrowLeft className="mr-2 size-4" /> Back to Meals
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tight">{meal.title}</h1>
        <p className="text-muted-foreground text-lg">by {meal.creator}</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-6">
          <div className="aspect-square bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
            [ Meal Image Placeholder ]
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" />
              <span>Prep time: 20 mins</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="size-4" />
              <span>Serves: 2 people</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ChefHat className="size-4" />
              <span>Difficulty: Easy</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{meal.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line text-muted-foreground">
                {meal.instructions}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
