"use client";

import { Menu } from "lucide-react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/about" },
  { label: "Positioning", href: "/#positioning" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Expertise", href: "/expertise" },
];

export function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {NAV_LINKS.map((l) => (
          <DropdownMenuItem key={l.href} asChild>
            <a className="vv-link block w-full" href={l.href}>
              {l.label}
            </a>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <a
            className="vv-focus-ring block w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-2 text-sm font-semibold text-black hover:opacity-95"
            href="/#audit"
          >
            Get an AI Ops audit
          </a>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="justify-between"
          onSelect={(e) => e.preventDefault()}
        >
          <span className="text-sm font-medium">Theme</span>
          <ThemeToggle />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
