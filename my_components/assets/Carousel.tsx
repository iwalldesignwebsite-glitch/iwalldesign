"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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

function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrefers(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
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
}: Props) {
  const [i, setI] = useState(0);
  const s = items[i];

  const prefersReduced = usePrefersReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [inView, setInView] = useState(true);

  const next = () => setI((x) => (x + 1) % items.length);
  const prev = () => setI((x) => (x - 1 + items.length) % items.length);
  const clear = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // 1) Obserwacja widoczności karuzeli w viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // 2) Autoplay + klawiatura + visibilitychange (wszystko w jednym)
  useEffect(() => {
    const canAutoplay =
      autoRotate && !prefersReduced && inView && items.length > 1;
    if (canAutoplay) {
      clear();
      timerRef.current = window.setInterval(next, Math.max(2000, interval));
    }

    const onVis = () => {
      if (document.hidden) clear();
      else if (canAutoplay && !timerRef.current) {
        timerRef.current = window.setInterval(next, Math.max(2000, interval));
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        clear();
        next();
      } else if (e.key === "ArrowLeft") {
        clear();
        prev();
      }
    };

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("keydown", onKey);
      clear();
    };
  }, [autoRotate, prefersReduced, inView, interval, items.length]); // pojedynczy efekt sterujący

  // Swipe
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
  };

  return (
    <div
      ref={containerRef}
      className={clsx("group relative select-none", className)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label="Karuzela zdjęć"
    >
      {/* Status dla czytników ekranowych */}
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Slajd {i + 1} z {items.length}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.src}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes={sizes}
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={() => {
              clear();
              prev();
            }}
            aria-label="Poprzedni slajd"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow bg-white/70 backdrop-blur-sm hover:bg-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <ChevronLeft className="h-5 w-5 text-zinc-800" />
          </button>
          <button
            onClick={() => {
              clear();
              next();
            }}
            aria-label="Następny slajd"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 rounded-full p-3 shadow bg-white/70 backdrop-blur-sm hover:bg-white/80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <ChevronRight className="h-5 w-5 text-zinc-800" />
          </button>
        </>
      )}

      {/* Kropki – dekoracyjne, nieklikalne */}
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
