import Link from "next/link";

import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b vv-line bg-black/20 backdrop-blur">
      <div className="vv-container flex h-16 items-center justify-between">
        <Link href="/#top" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <img
              alt="Headshot placeholder"
              src="https://ik.imagekit.io/i6kon7cps/image%20(1).png"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Sam Meske, MS, MBA
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="vv-link" href="/about">
            About
          </Link>
          <Link className="vv-link" href="/#positioning">
            Positioning
          </Link>
          <Link className="vv-link" href="/case-studies">
            Case studies
          </Link>
          <Link className="vv-link" href="/#expertise">
            Expertise
          </Link>

          <Link
            className="vv-focus-ring rounded-xl vv-panel px-3 py-2 text-sm hover:opacity-95"
            href="/#audit"
          >
            Get an AI Ops audit
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

