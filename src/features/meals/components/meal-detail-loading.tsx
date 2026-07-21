/**
 * Loading placeholder for the meal detail page.
 *
 * Renders skeleton sections that mirror the detail page layout while the
 * requested meal record is being fetched.
 */
export default function MealDetailLoading() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <header className="flex flex-col gap-4 items-start">
        <div className="h-10 w-2/3 bg-muted rounded animate-pulse" />
        <div className="h-5 w-1/3 bg-muted rounded animate-pulse" />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="aspect-square bg-muted rounded-xl animate-pulse" />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-4">
            <div className="h-6 w-1/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
          </div>

          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-4">
            <div className="h-6 w-1/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  );
}
