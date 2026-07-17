import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SlideshowImage } from "@/components/slideshow-image";
import { ArrowRight, Utensils, Users, Share2 } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center p-8 bg-background">
      <main className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <span className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
            Welcome to FoodApp
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            NextLevel Food for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              NextLevel Foodies
            </span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Taste & share food from all over the world. Join our community of
            food lovers today!
          </p>
        </div>
        <SlideshowImage className="aspect-[16/9] shadow-xs" />

        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row mt-10 ">
          <Button
            asChild
            size="xl"
            className="bg-orange-500 hover:bg-orange-600 px-8"
          >
            <Link href="/meals">
              Explore Meals <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="px-8">
            <Link href="/community">Join the Community</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-left">
          <div className="p-6 bg-card rounded-xl border shadow-xs space-y-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-950 w-fit rounded-lg">
              <Utensils className="size-5 text-orange-500" />
            </div>
            <h3 className="font-semibold text-lg">Delicious Recipes</h3>
            <p className="text-sm text-muted-foreground">
              Discover a wide variety of recipes from different cuisines.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl border shadow-xs space-y-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-950 w-fit rounded-lg">
              <Users className="size-5 text-orange-500" />
            </div>
            <h3 className="font-semibold text-lg">Active Community</h3>
            <p className="text-sm text-muted-foreground">
              Connect with other food lovers and share your passion.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl border shadow-xs space-y-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-950 w-fit rounded-lg">
              <Share2 className="size-5 text-orange-500" />
            </div>
            <h3 className="font-semibold text-lg">Share Your Own</h3>
            <p className="text-sm text-muted-foreground">
              Upload your own recipes and show off your cooking skills.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
