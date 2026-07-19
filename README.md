This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Configuration

Configuration values are stored in environment variables, kept separate from application code. Sensitive values must never be committed.

1. Copy the example template to a local env file:

   ```bash
   cp .env.example .env.local
   ```

2. Fill in real values in `.env.local` as needed. `.env.local` is gitignored.

| Variable              | Required | Description                                                      |
| --------------------- | -------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | No       | Base URL of the app (defaults to `http://localhost:3000`).       |
| `DATABASE_URL`        | Yes      | PostgreSQL connection URL. See PostgreSQL setup below.           |

Future features will add variables documented (as commented placeholders) in `.env.example`, such as `AUTH_SECRET`. Add their real values to `.env.local` when those features land. Access configuration in code through `src/lib/env.ts` rather than reading `process.env` directly.

## PostgreSQL Setup

FoodApp uses PostgreSQL for persistent data storage.

### Local development

1. Make sure PostgreSQL 14+ is installed and running.
2. Create a database and user for the project:

   ```bash
   # Run these as a PostgreSQL superuser (e.g. postgres)
   psql -U postgres -c "CREATE USER foodapp_user WITH PASSWORD 'foodapp_password';"
   psql -U postgres -c "CREATE DATABASE foodapp OWNER foodapp_user;"
   psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE foodapp TO foodapp_user;"
   ```

3. Ensure `DATABASE_URL` in `.env.local` matches your local database:

   ```bash
   DATABASE_URL=postgresql://foodapp_user:foodapp_password@localhost:5432/foodapp
   ```

4. Verify the application can connect:

   ```bash
   pnpm exec tsx --env-file=.env.local scripts/verify-db.ts
   ```

### Production / hosted databases

Use the connection string provided by your hosting provider (e.g. Vercel Postgres, Supabase, AWS RDS). Set it as `DATABASE_URL` in your deployment environment. Never commit production credentials.

## Database Architecture

- Connection logic lives in `src/lib/db.ts` and is server-only.
- The Drizzle ORM client is defined in `src/db/index.ts` and wraps the PostgreSQL pool.
- Database schemas will live in `src/db/schema/` and be exported through `src/db/schema/index.ts`.
- Migration output is written to the `drizzle/` directory by `drizzle-kit`.
- Environment-specific configuration is centralized in `src/lib/env.ts`.
- Validation is built on Zod and will live in `src/validation/`.
- No database tables, migrations, ORM schemas, or application queries are added yet. Those will be introduced by later issues.

## Drizzle ORM

FoodApp uses [Drizzle ORM](https://orm.drizzle.team/) with PostgreSQL.

### Available scripts

| Script             | Command                     | Description                          |
| ------------------ | --------------------------- | ------------------------------------ |
| `pnpm db:generate` | `drizzle-kit generate`      | Generate SQL migrations from schemas |
| `pnpm db:migrate`  | `drizzle-kit migrate`       | Run pending migrations               |
| `pnpm db:push`     | `drizzle-kit push`          | Push schema changes directly         |
| `pnpm db:studio`   | `drizzle-kit studio`        | Open Drizzle Studio                  |

All scripts use `DATABASE_URL` from `.env.local` via `drizzle.config.ts`.

## Zod Validation

[Zod](https://zod.dev/) is available as the application validation library. Import it from `src/validation`:

```ts
import { z } from "@/validation";
```

Domain-specific schemas will be added by later feature issues.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
