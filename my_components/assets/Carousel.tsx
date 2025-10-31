"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type CarouselItem = { src: string; alt: string };

type Props = {
  items: CarouselItem[];
  className?: string;
  sizes?: string;
  autoRotate?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
};

export function SimpleCarousel({
  items,
  className = "relative w-full max-w-[600px] mx-auto aspect-square overflow-hidden rounded-md shadow-lg",
  sizes = "(max-width: 768px) 600px, 800px",
  autoRotate = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
}: Props) {
  const [i, setI] = useState(0);
  const s = items[i];

  const prefersReduced = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const inViewRef = useRef(true); 

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    setI((x) => (x + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setI((x) => (x - 1 + items.length) % items.length);
  }, [items.length]);

 
  useEffect(() => {
    const canAutoplay =
      autoRotate && !prefersReduced && inViewRef.current && items.length > 1;

    clearTimer();
    if (canAutoplay) {
      const delay = Math.max(2000, interval);
      timerRef.current = setTimeout(next, delay);
    }

    return clearTimer;
  }, [i, autoRotate, prefersReduced, interval, items.length, next, clearTimer]);

  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
       
        if (entry.isIntersecting) {
       
          setI((x) => x);
        } else {
          clearTimer();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);

    const onVis = () => {
      if (document.hidden) clearTimer();
      else setI((x) => x); 
    };

    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [clearTimer]);

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      clearTimer();
    },
    [clearTimer]
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const start = touchStartX.current;
      if (start == null) return;
      const dx = e.changedTouches[0].clientX - start;
      const THRESHOLD = 30;
      if (dx > THRESHOLD) prev();
      else if (dx < -THRESHOLD) next();
      touchStartX.current = null;
    },
    [next, prev]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") {
        clearTimer();
        next();
      } else if (e.key === "ArrowLeft") {
        clearTimer();
        prev();
      }
    },
    [next, prev, clearTimer]
  );

  const duration = prefersReduced ? 0 : 0.45;

  return (
    <div
      ref={containerRef}
      className={clsx("group relative select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Karuzela zdjęć"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slajd {i + 1} z {items.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.src}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes={sizes}
            priority={i === 0}
            fetchPriority={i === 0 ? "high" : "auto"}
            decoding="async"
            draggable={false}
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={() => {
              clearTimer();
              prev();
            }}
            aria-label="Poprzedni slajd"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow bg-white/70 backdrop-blur-sm hover:bg-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5 text-zinc-800" />
          </button>

          <button
            onClick={() => {
              clearTimer();
              next();
            }}
            aria-label="Następny slajd"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow bg-white/70 backdrop-blur-sm hover:bg-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5 text-zinc-800" />
          </button>
        </>
      )}

      {showDots && items.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
          aria-hidden="true"
        >
          {items.map((_, idx) => (
            <span
              key={idx}
              className={clsx(
                "block h-2 rounded-full transition-all",
                idx === i ? "w-4 bg-emerald-500" : "w-2 bg-white/70"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
