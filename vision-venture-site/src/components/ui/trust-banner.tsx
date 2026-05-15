"use client";

import { useEffect, useMemo, useRef } from "react";

import { TrustBadge } from "@/components/ui/trust-badge";

const ITEMS = [
  "25+ production AI agents",
  "8+ years in AI & research",
  "MS, MBA",
  "Published Researcher",
  "Next.js + React",
  "SQL + Python + AWS",
] as const;

export function TrustBanner() {
  const stripRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const loop = useMemo(() => [...ITEMS, ...ITEMS, ...ITEMS], []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced || !stripRef.current || !outerRef.current) return;

    const tick = () => {
      const outer = outerRef.current!;
      const strip = stripRef.current!;
      const { left, width } = outer.getBoundingClientRect();
      const vcx = left + width / 2;

      const data: Array<{ el: HTMLElement; cx: number; w: number }> = [];
      for (const child of Array.from(strip.children)) {
        const el = child as HTMLElement;
        const r = el.getBoundingClientRect();
        data.push({ el, cx: r.left + r.width / 2, w: r.width });
      }

      for (const { el, cx, w } of data) {
        const t = Math.max(0, 1 - Math.abs(cx - vcx) / (w * 2.2));
        el.style.transform = `scale(${(0.82 + 0.18 * t).toFixed(4)})`;
        el.style.opacity = (0.18 + 0.82 * t).toFixed(4);
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, []);

  // Reduced-motion / SSR-friendly fallback
  const shouldReduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (shouldReduceMotion) {
    return (
      <section className="border-y vv-line bg-black/10 dark:bg-black/20">
        <div className="vv-container py-3 md:py-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-3 sm:gap-y-2 sm:text-sm">
            {ITEMS.map((item) => (
              <TrustBadge key={item} text={item} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y vv-line bg-black/10 dark:bg-black/20 py-3 md:py-8">
      <div
        ref={outerRef}
        className="overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 16%, black 84%, transparent 100%)",
        }}
      >
        <div
          ref={stripRef}
          className="flex w-max gap-3 md:gap-4 [animation:trust-marquee_28s_linear_infinite] hover:[animation-play-state:paused]"
        >
          {loop.map((item, i) => (
            <div key={`${item}-${i}`}>
              <TrustBadge text={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

