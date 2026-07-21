/**
 * Database seed script for meals.
 *
 * Populates the meals table with realistic development data so that
 * database-backed features can be tested without manual data entry.
 *
 * Usage:  pnpm db:seed
 *
 * The script deletes all existing meals before inserting new ones,
 * making it safe to run repeatedly during development.
 */

import { db } from "@/db";
import { meals } from "@/db/schema";

const seedMeals = [
  {
    slug: "juicy-cheese-burger",
    title: "Juicy Cheese Burger",
    image: "/images/burger.jpg",
    summary:
      "A classic American cheeseburger with a juicy beef patty, melted cheddar, crisp lettuce, and a toasted brioche bun.",
    instructions:
      "1. Form ground beef into a patty and season generously with salt and pepper.\n2. Grill over high heat for 4 minutes per side.\n3. Place a slice of cheddar on the patty in the last minute and close the lid to melt.\n4. Toast the brioche bun halves lightly.\n5. Assemble with lettuce, tomato, onion, and your favorite sauce.\n6. Serve immediately with fries or a side salad.",
    creator: "John Doe",
    creatorEmail: "john@example.com",
  },
  {
    slug: "spicy-curry",
    title: "Spicy Curry",
    image: "/images/curry.jpg",
    summary:
      "A rich and aromatic chicken curry with warm spices, coconut milk, and fresh vegetables.",
    instructions:
      "1. Heat oil in a heavy pot and toast whole spices (cumin, coriander, cinnamon) until fragrant.\n2. Sauté diced onion, garlic, and ginger until softened.\n3. Add chicken pieces and brown lightly.\n4. Stir in curry paste, turmeric, and garam masala.\n5. Pour in coconut milk and simmer for 25 minutes.\n6. Add diced tomatoes and vegetables in the final 10 minutes.\n7. Season to taste and serve over basmati rice.",
    creator: "Jane Doe",
    creatorEmail: "jane@example.com",
  },
  {
    slug: "dumplings",
    title: "Steamed Pork Dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Delicate steamed dumplings filled with seasoned pork, ginger, and scallions, served with a soy-vinegar dipping sauce.",
    instructions:
      "1. Combine ground pork with finely chopped scallions, grated ginger, soy sauce, and sesame oil.\n2. Place a spoonful of filling in the center of each round dumpling wrapper.\n3. Fold and pleat the edges to seal.\n4. Arrange dumplings in a bamboo steamer lined with parchment.\n5. Steam over boiling water for 12–15 minutes.\n6. Serve with a dipping sauce of soy sauce, rice vinegar, and chili oil.",
    creator: "Lin Chen",
    creatorEmail: "lin@example.com",
  },
  {
    slug: "mac-and-cheese",
    title: "Creamy Mac and Cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Comfort-food classic with elbow pasta baked in a velvety three-cheese béchamel sauce.",
    instructions:
      "1. Cook elbow macaroni in salted water until al dente, then drain.\n2. In the same pot, melt butter and whisk in flour to form a roux.\n3. Slowly add warm milk, whisking until smooth and thick.\n4. Stir in shredded cheddar, gruyère, and parmesan until melted.\n5. Fold in the cooked pasta and transfer to a baking dish.\n6. Top with breadcrumbs and broil for 5 minutes until golden.\n7. Rest 5 minutes before serving.",
    creator: "Sarah Miller",
    creatorEmail: "sarah@example.com",
  },
  {
    slug: "classic-pizza",
    title: "Classic Margherita Pizza",
    image: "/images/pizza.jpg",
    summary:
      "A simple Neapolitan-style pizza with San Marzano tomato sauce, fresh mozzarella, and basil on a thin, crispy crust.",
    instructions:
      "1. Preheat your oven to the highest setting (250 °C / 480 °F) with a pizza stone or steel.\n2. Stretch the dough into a thin round on a floured surface.\n3. Spread a thin layer of crushed San Marzano tomatoes.\n4. Tear fresh mozzarella and distribute evenly.\n5. Bake for 8–10 minutes until the crust is charred in spots.\n6. Finish with fresh basil leaves and a drizzle of extra-virgin olive oil.",
    creator: "Marco Rossi",
    creatorEmail: "marco@example.com",
  },
  {
    slug: "schnitzel",
    title: "Crispy Pork Schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Golden, crispy breaded pork cutlet served with lemon wedges and a warm potato salad.",
    instructions:
      "1. Pound pork loin cutlets to an even 5 mm thickness between plastic wrap.\n2. Dredge each cutlet in flour, then beaten egg, then fine breadcrumbs.\n3. Heat a generous amount of oil and butter in a heavy skillet.\n4. Fry schnitzels for 2–3 minutes per side until deep golden.\n5. Drain on a wire rack and season with salt immediately.\n6. Serve with lemon wedges and a potato-caper salad.",
    creator: "Klaus Müller",
    creatorEmail: "klaus@example.com",
  },
  {
    slug: "tomato-salad",
    title: "Heirloom Tomato Salad",
    image: "/images/tomato-salad.jpg",
    summary:
      "A vibrant salad of sliced heirloom tomatoes with fresh basil, red onion, and a bright balsamic vinaigrette.",
    instructions:
      "1. Slice ripe heirloom tomatoes into thick rounds.\n2. Thinly slice red onion and soak in cold water for 10 minutes.\n3. Arrange tomatoes on a platter, alternating colors.\n4. Scatter fresh basil leaves and drained onion slices on top.\n5. Whisk together olive oil, balsamic vinegar, salt, and pepper.\n6. Drizzle the vinaigrette over the salad and finish with flaky sea salt.",
    creator: "Maria Costa",
    creatorEmail: "maria@example.com",
  },
];

async function seed() {
  console.log("Clearing existing meals…");
  await db.delete(meals);

  console.log(`Inserting ${seedMeals.length} seed meals…`);
  await db.insert(meals).values(seedMeals);

  console.log("Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
