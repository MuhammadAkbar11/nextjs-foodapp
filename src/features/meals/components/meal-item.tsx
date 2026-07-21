import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Meal } from "@/types/meal";

interface MealItemProps {
  meal: Meal;
}

export default function MealItem({ meal }: MealItemProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full bg-muted">
        <Image
          src={meal.image}
          alt={meal.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{meal.title}</CardTitle>
        <CardDescription>by {meal.creator}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{meal.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={`/meals/${meal.slug}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
