import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Utensils } from "lucide-react";

export default function CommunityPage() {
  const perks = [
    {
      icon: <Utensils className="size-8 text-orange-500" />,
      title: "Share Recipes",
      description:
        "Share your favorite recipes with the world and get feedback.",
    },
    {
      icon: <Users className="size-8 text-orange-500" />,
      title: "Connect with Foodies",
      description: "Meet other people who share your passion for cooking.",
    },
    {
      icon: <Heart className="size-8 text-orange-500" />,
      title: "Get Inspired",
      description: "Discover new recipes and ideas for your next meal.",
    },
  ];

  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          One shared passion: <span className="text-orange-500">Food</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Join our community and share your favorite recipes with the world!
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {perks.map((perk, index) => (
          <Card key={index} className="p-6">
            <CardHeader className="flex flex-col items-center gap-4 mb-2">
              <div className="p-3 bg-orange-100 dark:bg-orange-950 rounded-full shrink-0">
                {perk.icon}
              </div>
              <CardTitle>{perk.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-center text-muted-foreground">
                {perk.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
