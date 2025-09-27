"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type Testimonial = { name: string; src: string };

function hashToRange(str: string, min: number, max: number) {
  // prosty stabilny hash -> [min, max]
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  const n = Math.abs(h % (max - min + 1));
  return min + n;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const rotations = useMemo(
    () =>
      testimonials.map((t, i) =>
        // deterministycznie: z nazwy + indeksu
        hashToRange(`${t.name}-${i}`, -10, 10)
      ),
    [testimonials]
  );

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [autoplay, testimonials.length]);

  const isActive = (i: number) => i === active;

  return (
    <div className="mx-auto max-w-sm px-4 antialiased md:max-w-4xl md:px-8">
      <div className="relative grid items-center gap-5">
        <div className="relative h-86 w-full">
          <AnimatePresence>
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: rotations[i], // ← już nie losowe
                }}
                animate={{
                  opacity: isActive(i) ? 1 : 0.7,
                  scale: isActive(i) ? 1 : 0.95,
                  z: isActive(i) ? 0 : -100,
                  rotate: isActive(i) ? 0 : rotations[i],
                  zIndex: isActive(i) ? 40 : testimonials.length + 2 - i,
                  y: isActive(i) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: rotations[i],
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={t.src}
                  alt={t.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          />
          <div className="flex items-center justify-center gap-4 ">
            <button
              onClick={() =>
                setActive(
                  (p) => (p - 1 + testimonials.length) % testimonials.length
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
            >
              <IconArrowLeft className="h-7 w-7 text-black/50 transition-transform duration-300" />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % testimonials.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-transform duration-75 hover:scale-110 hover:cursor-pointer"
            >
              <IconArrowRight className="h-7 w-7 text-black/50 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
