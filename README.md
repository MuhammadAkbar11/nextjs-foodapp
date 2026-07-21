# FoodApp

A community-driven food-sharing platform where food lovers discover recipes, share their own creations, and connect with fellow foodies from around the world.

## About

FoodApp (NextLevel Food) is a Next.js application built with the App Router. It lets visitors browse a collection of meals, view detailed cooking instructions, and submit their own recipes to share with the community.

### Current Features

| Feature             | Route           | Status                  |
| ------------------- | --------------- | ----------------------- |
| Home / Landing Page | `/`             | ✅ Implemented          |
| Meals Grid          | `/meals`        | ✅ Implemented          |
| Meal Detail         | `/meals/[slug]` | ✅ Implemented          |
| Share Meal Form     | `/meals/share`  | 🟡 UI only (no backend) |
| Community Page      | `/community`    | ✅ Implemented          |
| Dark Mode           | All routes      | ✅ Implemented          |
| Global Navigation   | All routes      | ✅ Implemented          |

### Planned Features

- Backend / database integration
- Meal image upload
- Form validation and submission
- Authentication (user accounts)

## Tech Stack

| Layer            | Technology                           |
| ---------------- | ------------------------------------ |
| Framework        | Next.js 15.5 (App Router, Turbopack) |
| Language         | TypeScript 5 (strict mode)           |
| Styling          | Tailwind CSS v4 + `tw-animate-css`   |
| Components       | shadcn/ui (radix-nova), Radix UI     |
| Icons            | lucide-react                         |
| Theming          | next-themes (dark / light / system)  |
| Validation       | Zod                                  |
| Database (setup) | PostgreSQL 14+                       |
| ORM              | Drizzle ORM                          |
| Package Manager  | pnpm 11.13                           |
| Linting          | ESLint 9 (next/core-web-vitals)      |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 11+
- PostgreSQL 14+ (for database features)

### Setup

1. **Clone and install dependencies:**

   ```bash
   git clone <repo-url> foodapp
   cd foodapp
   pnpm install
   ```

2. **Configure environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in real values. See the table below for available variables.

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

Configuration values are stored in `.env.local` (gitignored). `.env.example` is committed as a template and contains no secrets.

| Variable              | Required | Description                                                |
| --------------------- | -------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | No       | Base URL of the app (defaults to `http://localhost:3000`). |
| `DATABASE_URL`        | Yes      | PostgreSQL connection URL. See PostgreSQL setup below.     |

Access configuration in code through `src/lib/env.ts` rather than reading `process.env` directly.

## Development

### Available Scripts

| Script             | Command                | Description                          |
| ------------------ | ---------------------- | ------------------------------------ |
| `pnpm dev`         | `next dev --turbopack` | Start development server             |
| `pnpm lint`        | `eslint`               | Run ESLint                           |
| `pnpm db:generate` | `drizzle-kit generate` | Generate SQL migrations from schemas |
| `pnpm db:migrate`  | `drizzle-kit migrate`  | Run pending migrations               |
| `pnpm db:push`     | `drizzle-kit push`     | Push schema changes directly         |
| `pnpm db:studio`   | `drizzle-kit studio`   | Open Drizzle Studio                  |
| `pnpm db:seed`     | `tsx scripts/seed.ts`  | Seed the database with sample meals  |

All database scripts use `DATABASE_URL` from `.env.local` via `drizzle.config.ts`.

### PostgreSQL Setup

FoodApp uses PostgreSQL for persistent data storage.

**Local development:**

1. Make sure PostgreSQL 14+ is installed and running.
2. Create a database and user:

   ```bash
   psql -U postgres -c "CREATE USER foodapp_user WITH PASSWORD 'foodapp_password';"
   psql -U postgres -c "CREATE DATABASE foodapp OWNER foodapp_user;"
   psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE foodapp TO foodapp_user;"
   ```

3. Set `DATABASE_URL` in `.env.local`:

   ```
   DATABASE_URL=postgresql://foodapp_user:foodapp_password@localhost:5432/foodapp
   ```

4. Verify the connection:

   ```bash
   pnpm exec tsx --env-file=.env.local scripts/verify-db.ts
   ```

**Production / hosted databases:**

Use the connection string from your hosting provider (e.g., Vercel Postgres, Supabase, AWS RDS). Set it as `DATABASE_URL` in your deployment environment. Never commit production credentials.

### Drizzle ORM

[Drizzle ORM](https://orm.drizzle.team/) is used with PostgreSQL. The client is defined in `src/db/index.ts`. Database schemas live in `src/db/schema/` and are exported through `src/db/schema/index.ts`. Migration output is written to the `drizzle/` directory.

#### Migration Workflow

Database schema changes follow a repeatable, version-controlled migration process:

1. **Update the schema** — Edit the Drizzle table definitions in `src/db/schema/`.
2. **Generate a migration** — Run `pnpm db:generate` to produce SQL migration files in `drizzle/`.
3. **Review the migration** — Inspect the generated `.sql` file and snapshot diff before applying.
4. **Apply the migration** — Run `pnpm db:migrate` to execute pending migrations against the database.

```
Schema Changes
        ↓
Generate Migration (pnpm db:generate)
        ↓
Review Migration Files (drizzle/*.sql)
        ↓
Apply Migration (pnpm db:migrate)
        ↓
Updated Database
```

All migration files are committed to version control so that every developer and environment can reproduce the same database structure. Never modify the database manually without a migration.

### Zod Validation

[Zod](https://zod.dev/) is the application validation library. Import it from `src/validation`:

```ts
import { z } from "@/validation";
```

## Project Structure

```
├── drizzle/                    # Generated migration files (version controlled)
├── scripts/                    # Utility scripts (DB verification, etc.)
├── src/
│   ├── app/                    # Next.js App Router pages & layouts
│   │   ├── layout.tsx          # Root layout (fonts, ThemeProvider, metadata)
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles + Tailwind + theme variables
│   │   ├── community/
│   │   │   └── page.tsx        # /community
│   │   └── meals/
│   │       ├── layout.tsx      # Meals section layout
│   │       ├── page.tsx        # /meals (grid listing)
│   │       ├── [slug]/
│   │       │   └── page.tsx    # /meals/[slug] (detail view)
│   │       └── share/
│   │           └── page.tsx    # /meals/share (submission form)
│   │
│   ├── components/             # Shared / global UI components
│   │   ├── main-header.tsx     # Global navigation header
│   │   ├── nav-link.tsx        # Active-aware navigation link
│   │   ├── slideshow-image.tsx # Auto-rotating image slideshow
│   │   ├── theme-provider.tsx  # next-themes wrapper
│   │   └── ui/                 # shadcn/ui primitives
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   │
│   ├── db/                     # Database layer
│   │   ├── index.ts            # Drizzle ORM client
│   │   └── schema/             # Database schemas
│   │
│   ├── features/               # Feature-based modules
│   │   └── meals/              # Meals feature
│   │       ├── components/     # Meal UI components
│   │       │   ├── meal-detail.tsx
│   │       │   ├── meal-detail-loading.tsx
│   │       │   ├── meal-item.tsx
│   │       │   ├── meals-grid.tsx
│   │       │   ├── meals-list.tsx
│   │       │   └── meals-list-loading.tsx
│   │       ├── queries/        # Meal data access (queries)
│   │       │   └── meals.ts
│   │       ├── mutations/      # Future meal mutations
│   │       └── validation/     # Future meal validation
│   │
│   ├── lib/                    # Utility modules
│   │   ├── db.ts               # Database connection (server-only)
│   │   ├── env.ts              # Environment config
│   │   ├── utils.ts            # Utility functions
│   │   └── utils/              # Additional utilities
│   │       └── delay-async.ts  # Development-only async delay helper
│   │
│   ├── types/                  # Shared type definitions
│   │   └── meal.ts             # Meal type definitions
│   │
│   └── validation/             # Zod validation setup
│       └── index.ts
```

## Documentation

Detailed project documentation lives in the `.agents/` directory:

| Document             | Path                        | Description                                 |
| -------------------- | --------------------------- | ------------------------------------------- |
| Product Requirements | `.agents/PRD.md`            | Product vision, features, and roadmap       |
| Architecture         | `.agents/ARCHITECTURE.md`   | Tech stack, structure, and design decisions |
| Issue Tracker        | `.agents/ISSUES_LIST.md`    | Tracked issues and progress                 |
| Issue Template       | `.agents/ISSUE_TEMPLATE.md` | Template for creating new issues            |

## Contributing

1. Keep documentation accurate — document only existing functionality.
2. Use `pnpm` for all package management commands.
3. Follow the project structure conventions: place shared types in `src/types/`, components in `src/components/`, and data accessors in `src/data/`.
4. Sensitive values (credentials, secrets) must never be committed.
5. For new features, create an issue using the template in `.agents/ISSUE_TEMPLATE.md`.
