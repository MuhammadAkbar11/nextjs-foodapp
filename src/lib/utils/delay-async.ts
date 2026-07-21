/**
 * Development-only async delay helper.
 *
 * Suspends execution for the given number of milliseconds so developers can
 * test loading states during local development. The delay is bypassed in
 * production to avoid artificial latency for real users.
 */
export async function delayAsync(ms: number): Promise<void> {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  await new Promise((resolve) => setTimeout(resolve, ms));
}
