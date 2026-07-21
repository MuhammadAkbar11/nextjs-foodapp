CREATE TABLE "meals" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"image" text NOT NULL,
	"summary" text NOT NULL,
	"instructions" text NOT NULL,
	"creator" varchar(255) NOT NULL,
	"creator_email" varchar(255) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "meals_slug_unique" UNIQUE("slug")
);
