import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ShareMealPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-start">
        <h1 className="text-4xl font-bold tracking-tight">
          Share your <span className="text-orange-500">favorite meal</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Or any other meal you feel needs sharing!
        </p>
      </header>

      <main className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Meal Details</CardTitle>
            <CardDescription>
              Fill out the form below to share your recipe. Wait, the
              instructions say {"dont run yarn lint"}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Juicy Cheese Burger" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Short Summary</Label>
                <Input
                  id="summary"
                  placeholder="A brief description of the meal"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea
                  id="instructions"
                  placeholder="How to prepare the meal..."
                  rows={6}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input id="image" type="file" accept="image/*" />
              </div>

              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Share Meal
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
