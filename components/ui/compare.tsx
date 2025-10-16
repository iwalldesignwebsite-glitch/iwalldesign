"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { UnfoldHorizontal } from "lucide-react";

interface CompareProps {
  firstImage?: string;
  secondImage?: string;
  className?: string; // <- pozwala użyć absolute inset-0
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: "hover" | "drag";
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // ----- autoplay -----
  const startAutoplay = useCallback(() => {
    if (!autoplay) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;
      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };
    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  // ----- events -----
  const handleStart = useCallback(() => {
    if (slideMode === "drag") setIsDragging(true);
    stopAutoplay();
  }, [slideMode, stopAutoplay]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") setIsDragging(false);
    startAutoplay();
  }, [slideMode, startAutoplay]);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return;
      if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = (x / rect.width) * 100;
        requestAnimationFrame(() =>
          setSliderXPercent(Math.max(0, Math.min(100, percent)))
        );
      }
    },
    [slideMode, isDragging]
  );

  return (
    <div
      ref={sliderRef}
      // UWAGA: NIE ustawiamy position w inline style!
      className={cn("w-[650px] h-full overflow-hidden", className)}
      style={{
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseEnter={handleStart}
      onMouseLeave={handleEnd}
      onMouseDown={(e) => handleStart()}
      onMouseUp={handleEnd}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={(e) => handleStart()}
      onTouchEnd={handleEnd}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* vertical handle */}
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-[5px] absolute top-0 m-auto z-30 bg-white"
          style={{ left: `${sliderXPercent}%`, top: 0, zIndex: 40 }}
          transition={{ duration: 0 }}
        >
          {showHandlebar && (
            <div className="h-6 w-6 rounded-md top-1/2 -translate-y-1/2 bg-white z-30 -right-2.5 absolute flex items-center justify-center shadow">
              <UnfoldHorizontal className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* first image (left) */}
      <div className="overflow-hidden w-full aspect-square relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage && (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 shrink-0 w-full aspect-square select-none overflow-hidden",
                firstImageClassName
              )}
              style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
              transition={{ duration: 0 }}
            >
              <span className="absolute z-30 left-0 m-3 py-1 px-5 bg-gradient-to-tr from-gray-600/50 via-gray-500/50 to-gray-400/50 rounded-sm font-medium text-white">
                Gładka ściana
              </span>
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  "absolute inset-0 z-20 shrink-0 w-full aspect-square select-none object-cover",
                  firstImageClassName
                )}
                draggable={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* second image (right) */}
      <AnimatePresence initial={false}>
        {secondImage && (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[18] w-full aspect-square select-none object-cover",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// const MemoizedSparklesCore = React.memo(SparklesCore);
