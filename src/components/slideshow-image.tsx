"use client";

import * as React from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

import burger from "../../assets/burger.jpg";
import curry from "../../assets/curry.jpg";
import dumplings from "../../assets/dumplings.jpg";
import macncheese from "../../assets/macncheese.jpg";
import pizza from "../../assets/pizza.jpg";
import schnitzel from "../../assets/schnitzel.jpg";
import tomatoSalad from "../../assets/tomato-salad.jpg";

const SLIDE_IMAGES: { src: StaticImageData; alt: string }[] = [
  { src: burger, alt: "Juicy cheese burger" },
  { src: curry, alt: "Spicy curry" },
  { src: dumplings, alt: "Dumplings" },
  { src: macncheese, alt: "Mac and cheese" },
  { src: pizza, alt: "Pizza" },
  { src: schnitzel, alt: "Schnitzel" },
  { src: tomatoSalad, alt: "Tomato salad" },
];

const AUTO_SLIDE_INTERVAL = 4000;

export function SlideshowImage({
  className,
  interval = AUTO_SLIDE_INTERVAL,
}: {
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div
      className={cn("relative w-full overflow-hidden rounded-xl", className)}
    >
      {SLIDE_IMAGES.map((image, i) => (
        <Image
          key={image.alt}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          className={cn(
            "object-cover transition-transform duration-700 ease-in-out",
            i === index
              ? "translate-x-0"
              : i < index
                ? "-translate-x-full"
                : "translate-x-full",
          )}
        />
      ))}
    </div>
  );
}
