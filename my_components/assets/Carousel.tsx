"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type CarouselItem = {
  src: string;
  alt: string;
};

type SimpleCarouselProps = {
  items: CarouselItem[];
  className?: string;

  sizes?: string;
  autoRotate?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  quality?: number;
};

function useReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefers(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return prefers;
}

export function SimpleCarousel({
  items,
  className = "relative w-full max-w-[600px] mx-auto aspect-square overflow-hidden rounded-md shadow-lg",
  sizes = "(max-width: 1024px) 100vw, 500px",
  autoRotate = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  quality = 90,
}: SimpleCarouselProps) {
  const [i, setI] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  const next = () => setI((x) => (x + 1) % items.length);
  const prev = () => setI((x) => (x - 1 + items.length) % items.length);

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const start = () => {
    if (!autoRotate || prefersReduced || !visible || items.length <= 1) return;
    clear();
    timerRef.current = setInterval(next, Math.max(2000, interval));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => (document.hidden ? clear() : start());
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRotate, prefersReduced, visible, interval, items.length]);

  useEffect(() => {
    start();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRotate, prefersReduced, visible, interval, items.length]);

  const resetAnd = (fn: () => void) => {
    clear();
    fn();
    start();
  };

  // klawiatura
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") resetAnd(next);
      if (e.key === "ArrowLeft") resetAnd(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    clear();
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const THRESHOLD = 30;
    if (dx > THRESHOLD) prev();
    else if (dx < -THRESHOLD) next();
    touchStartX.current = null;
    start();
  };

  const s = items[i];

  return (
    <div
      ref={containerRef}
      className={clsx("group relative select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Karuzela zdjęć"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.src}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0 will-change-transform will-change-opacity"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            quality={quality}
            sizes={sizes}
            className="object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={() => resetAnd(prev)}
            aria-label="Poprzedni slajd"
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-20
              rounded-full p-2 shadow
              bg-white/70 backdrop-blur-sm hover:bg-white/80 transition
              focus:outline-none focus:ring-2 focus:ring-emerald-500
            "
          >
            <ChevronLeft className="h-5 w-5 text-zinc-800" />
          </button>

          <button
            onClick={() => resetAnd(next)}
            aria-label="Następny slajd"
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-20
              rounded-full p-2 shadow
              bg-white/70 backdrop-blur-sm hover:bg-white/80 transition
              focus:outline-none focus:ring-2 focus:ring-emerald-500
            "
          >
            <ChevronRight className="h-5 w-5 text-zinc-800" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.src + idx}
              onClick={() => resetAnd(() => setI(idx))}
              aria-label={`Przejdź do slajdu ${idx + 1}`}
              className={clsx(
                "h-2 rounded-full transition-all",
                idx === i
                  ? "w-4 bg-emerald-500"
                  : "w-2 bg-white/70 hover:bg-white"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
