"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealOnScroll from "../assets/RevealWrapper";

export type Card = {
  id: number;
  content: string; // podpis na badge
  thumbnail: string; // src obrazka
  className?: string; // dodatkowe custom klasy (np. xl:col-span-8)
};

type Props = { cards: Card[] };

export default function GalleryGrid({ cards }: Props) {
  const [selected, setSelected] = useState<Card | null>(null);
  const isMdUp = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useLockBodyScroll(Boolean(selected) && isMdUp);

  const contentRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(contentRef, Boolean(selected) && isMdUp, () =>
    setSelected(null)
  );

  return (
    <div className="w-full mx-auto">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 xl:grid-flow-dense ">
        {cards.map((card) => (
          <RevealOnScroll
            key={card.id}
            delay={0.5 * Math.random()}
            className={cn(
              "relative rounded-xl overflow-hidden shadow-sm bg-white",
              "aspect-square md:aspect-[4/2]",
              card.className
            )}
          >
           
            <motion.img
              src={card.thumbnail}
              alt={card.content}
              className="absolute inset-0 h-full w-full object-cover hover:cursor-pointer"
              whileHover={isMdUp ? { scale: 1.02 } : undefined}
              transition={{ duration: 0.25 }}
              onClick={() => {
                if (!isMdUp) return;
                setSelected(card);
              }}
            />

            <div className="absolute left-3 bottom-3">
              <span className="rounded-md px-3 py-1 text-xs font-medium text-white shadow-md bg-gradient-to-r from-blue-500 to-violet-500">
                {card.content}
              </span>
            </div>
            {/* </div> */}
          </RevealOnScroll>
        ))}
      </div>

      <AnimatePresence>
        {selected && isMdUp && (
          <>
            <motion.button
              aria-label="Zamknij podgląd"
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div
                ref={contentRef}
                className="relative max-w-[92vw] max-h-[86vh]"
              >
                <img
                  src={selected.thumbnail}
                  alt={selected.content}
                  className="max-w-full max-h-[86vh] object-contain rounded-lg shadow-2xl"
                />

                <button
                  aria-label="Zamknij"
                  onClick={() => setSelected(null)}
                  className="absolute -top-3 -right-3 rounded-full bg-white/90 hover:bg-white shadow-md p-2 hover:cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="absolute left-3 bottom-3">
                  <span className="rounded-md px-3 py-1 text-xs font-medium text-white shadow bg-gradient-to-r from-blue-500 to-violet-500">
                    {selected.content}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function useMediaQuery(query: string) {
  const mql = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia(query) : null),
    [query]
  );
  const [matches, setMatches] = useState<boolean>(!!mql?.matches);

  useEffect(() => {
    if (!mql) return;
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    // @ts-ignore
    mql.addEventListener
      ? mql.addEventListener("change", handler)
      : mql.addListener(handler);
    return () => {
      // @ts-ignore
      mql.removeEventListener
        ? mql.removeEventListener("change", handler)
        : mql.removeListener(handler);
    };
  }, [mql]);

  return matches;
}

function useLockBodyScroll(active: boolean) {
  useEffect(() => {
    if (!active) return;
    const originalHtml = document.documentElement.style.overflow;
    const originalBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = originalHtml;
      document.body.style.overflow = originalBody;
    };
  }, [active]);
}

function useOnClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  active: boolean,
  onOutside: () => void
) {
  useEffect(() => {
    if (!active) return;

    const handler = (e: MouseEvent | TouchEvent | PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      if (el.contains(e.target as Node)) return;
      onOutside();
    };

    document.addEventListener("pointerdown", handler, true);
    return () => document.removeEventListener("pointerdown", handler, true);
  }, [ref, active, onOutside]);
}
