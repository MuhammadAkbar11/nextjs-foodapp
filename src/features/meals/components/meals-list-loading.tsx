/**
 * Loading placeholder for the meals listing page.
 *
 * Renders a grid of skeleton cards that mirror the layout of MealsGrid while
 * meal data is being fetched.
 */
export default function MealsListLoading() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden"
        >
          <div className="relative h-48 w-full bg-muted animate-pulse" />
          <div className="p-6 space-y-4">
            <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
            <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
          </div>
        </div>
      ))}
    </main>
  );
}

