import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getMealBySlug } from "@/features/meals/queries/meals";

interface MealDetailProps {
  slug: string;
}

/**
 * Fetches and renders a single meal detail page.
 *
 * Renders a 404 response when no meal matches the provided slug. All rendered
 * content comes from the database record, including the meal image.
 */
export default async function MealDetail({ slug }: MealDetailProps) {
  const meal = await getMealBySlug(slug);

  if (!meal) {
    notFound();
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-start">
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link href="/meals">
            <ArrowLeft className="mr-2 size-4" /> Back to Meals
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tight">{meal.title}</h1>
        <p className="text-muted-foreground text-lg">
          by {meal.creator} ({meal.creator_email})
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="relative aspect-square bg-muted rounded-xl overflow-hidden">
            <Image
              src={meal.image}
              alt={meal.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{meal.description}</p>
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
