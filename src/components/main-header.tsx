import Link from "next/link";
import Image from "next/image";
// The logo lives in the project's /assets folder (outside /public),
// so we import it here and let next/image bundle/optimize it.
import logo from "../../assets/logo.png";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border bg-background px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={logo}
          alt="NextLevel Food logo"
          className="h-10 w-auto"
          priority
        />
        <span className="text-lg font-bold text-orange-500">NextLevel Food</span>
      </Link>

      <nav>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/meals"
              className="text-foreground transition-colors hover:text-orange-500"
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="text-foreground transition-colors hover:text-orange-500"
            >
              Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
