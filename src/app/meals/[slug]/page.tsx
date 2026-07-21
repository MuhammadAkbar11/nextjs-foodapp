import { Suspense } from "react";
import MealDetail from "@/features/meals/components/meal-detail";
import MealDetailLoading from "@/features/meals/components/meal-detail-loading";

interface MealDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MealDetailsPage({
  params,
}: MealDetailsPageProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<MealDetailLoading />}>
      <MealDetail slug={slug} />
    </Suspense>
  );
}

