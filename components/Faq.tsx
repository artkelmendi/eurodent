"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Faq({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-brand-100 overflow-hidden rounded-2xl border border-brand-100 bg-white/80 shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-50/60"
              aria-expanded={isOpen}
            >
              <span className="text-base font-bold text-ink">{item.q}</span>
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-brand-200 text-brand-600 transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-brand-500 text-white" : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink-muted">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
