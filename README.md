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

| Variable              | Required | Description                                                |
| --------------------- | -------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | No       | Base URL of the app (defaults to `http://localhost:3000`). |

Future features will add variables documented (as commented placeholders) in `.env.example`, such as `DATABASE_URL` and `AUTH_SECRET`. Add their real values to `.env.local` when those features land. Access configuration in code through `src/lib/env.ts` rather than reading `process.env` directly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
