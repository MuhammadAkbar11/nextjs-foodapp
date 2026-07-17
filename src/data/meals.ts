import type { Meal } from "@/types/meal";

export const meals: Meal[] = [
  {
    id: "m1",
    slug: "juicy-cheese-burger",
    title: "Juicy Cheese Burger",
    description:
      "A delicious burger with a juicy beef patty and melted cheese.",
    creator: "John Doe",
    image: "/images/burger.jpg",
    instructions:
      "1. Grill the patty.\n2. Melt the cheese on top.\n3. Assemble with buns and sauce.",
  },
  {
    id: "m2",
    slug: "spicy-curry",
    title: "Spicy Curry",
    description: "A rich and spicy curry with chicken and vegetables.",
    creator: "Jane Doe",
    image: "/images/curry.jpg",
    instructions:
      "1. Fry the spices.\n2. Add chicken and vegetables.\n3. Simmer with coconut milk.",
  },
  {
    id: "m3",
    slug: "fresh-tomato-pasta",
    title: "Fresh Tomato Pasta",
    description: "Classic Italian pasta with fresh tomatoes and basil.",
    creator: "Mario Rossi",
    image: "/images/tomato-salad.jpg",
    instructions:
      "1. Boil the pasta.\n2. Cook tomatoes with garlic and olive oil.\n3. Mix together with basil.",
  },
];

export async function getMeals(): Promise<Meal[]> {
  return meals;
}

export async function getMealBySlug(slug: string): Promise<Meal | null> {
  return meals.find((meal) => meal.slug === slug) ?? null;
}
