"use client";

import { useId, useState } from "react";

export interface PracticeAccordionItem {
  title: string;
  content: string;
}

export function PracticeAccordion({ items }: { items: PracticeAccordionItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="vv-card rounded-3xl p-4 md:p-6">
      <div className="divide-y divide-white/10">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${baseId}-btn-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <div key={item.title} className="py-2 first:pt-0 last:pb-0">
              <button
                type="button"
                id={buttonId}
                className="vv-focus-ring flex w-full items-start justify-between gap-4 rounded-2xl px-3 py-3 text-left hover:bg-white/5"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span className="text-sm font-semibold leading-6">
                  {item.title}
                </span>
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/5 text-sm font-semibold ring-1 ring-white/10">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="px-3 pb-3"
                >
                  <p className="vv-muted text-sm leading-7">{item.content}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

