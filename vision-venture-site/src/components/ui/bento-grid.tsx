"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  href?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto",
        className
      )}
    >
      {items.map((item, index) => {
        const Wrapper = item.href ? "a" : "div";
        const wrapperProps = item.href
          ? ({
              href: item.href,
              className: "block",
            } as const)
          : ({} as const);

        return (
          <Wrapper key={index} {...wrapperProps}>
            <div
              className={cn(
                "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                "border border-[color:var(--card-border)] bg-[color:var(--card)]",
                "hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.35)]",
                "hover:-translate-y-0.5 will-change-transform",
                item.colSpan || "col-span-1",
                item.colSpan === 2 ? "md:col-span-2" : "",
                {
                  "shadow-[0_2px_12px_rgba(0,0,0,0.06)] -translate-y-0.5":
                    item.hasPersistentHover,
                  "dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)]":
                    item.hasPersistentHover,
                }
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-300",
                  item.hasPersistentHover
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
              </div>

              <div className="relative flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[color:var(--tint-1)] ring-1 ring-[color:var(--line)] group-hover:bg-gradient-to-br transition-all duration-300">
                    {item.icon}
                  </div>
                  <span
                    className={cn(
                      "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                      "bg-[color:var(--tint-1)] text-[color:var(--muted)] ring-1 ring-[color:var(--line)]",
                      "transition-colors duration-300 group-hover:bg-[color:var(--tint-2)]"
                    )}
                  >
                    {item.status || "Active"}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium tracking-tight text-[15px]">
                    {item.title}
                    {item.meta ? (
                      <span className="ml-2 text-xs vv-muted font-normal">
                        {item.meta}
                      </span>
                    ) : null}
                  </h3>
                  <p className="text-sm vv-muted leading-snug font-[425]">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs vv-muted">
                    {item.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-md bg-[color:var(--tint-1)] ring-1 ring-[color:var(--line)] transition-all duration-200 hover:bg-[color:var(--tint-2)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs vv-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.cta || "Explore →"}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-[color:var(--line)] to-transparent transition-opacity duration-300",
                  item.hasPersistentHover
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                )}
              />
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

export { BentoGrid };
