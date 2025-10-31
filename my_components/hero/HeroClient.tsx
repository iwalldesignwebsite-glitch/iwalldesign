// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import {
//   AnimatePresence,
//   motion,
//   type TargetAndTransition,
// } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = { label: string; image: string; alt: string };

// const slides: Slide[] = [
//   {
//     label: "Ściany",
//     image: "/assets/images/hero/wall_1.jpg",
//     alt: "nadruk UV naścienny",
//   },
//   {
//     label: "Ściany",
//     image: "/assets/images/hero/wall_2.jpg",
//     alt: "nadruk UV naścienny",
//   },
//   {
//     label: "Odzież",
//     image: "/assets/images/hero/clothing.jpg",
//     alt: "Nadruk uv na białej koszulce",
//   },
//   {
//     label: "Ściany",
//     image: "/assets/images/hero/wall_3.jpg",
//     alt: "nadruk UV naścienny",
//   },
//   {
//     label: "Naklejki",
//     image: "/assets/images/hero/stickers.jpg",
//     alt: "naklejki",
//   },
//   {
//     label: "Plakaty",
//     image: "/assets/images/hero/posters.jpg",
//     alt: "plakaty",
//   },
// ];

// type Dir = 1 | -1;
// type Dyn = (d: Dir) => TargetAndTransition;
// const variants: Record<"enter" | "center" | "exit", Dyn> = {
//   enter: (d) => ({ opacity: 0, x: `${-5 * d}%` }),
//   center: () => ({
//     opacity: 1,
//     x: "0%",
//     transition: { duration: 0.8, ease: "easeOut" },
//   }),
//   exit: (d) => ({
//     opacity: 0,
//     x: `${5 * d}%`,
//     transition: { duration: 0.8, ease: "easeOut" },
//   }),
// };

// export default function HeroClient() {
//   const [index, setIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const [dir, setDir] = useState<Dir>(1);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const prefersReducedMotion = useMemo(
//     () =>
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches,
//     []
//   );

//   const clearTimer = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };
//   const startTimer = () => {
//     if (prefersReducedMotion) return;
//     clearTimer();
//     intervalRef.current = setInterval(() => goNext(), 5000);
//   };

//   useEffect(() => {
//     startTimer();
//     return clearTimer;
//   }, [prefersReducedMotion]);

//   const goNext = () => {
//     setDir(1);
//     setPrevIndex(index);
//     setIndex((x) => (x + 1) % slides.length);
//     startTimer();
//   };
//   const goPrev = () => {
//     setDir(-1);
//     setPrevIndex(index);
//     setIndex((x) => (x - 1 + slides.length) % slides.length);
//     startTimer();
//   };

//   useEffect(() => {
//     const nextIdx = (index + 1) % slides.length;
//     const prevIdx = (index - 1 + slides.length) % slides.length;
//     [slides[nextIdx].image, slides[prevIdx].image].forEach((src) => {
//       const img = new window.Image();
//       img.src = src;
//     });
//   }, [index]);

//   const desktopSizes = "(max-width: 1280px) 1280px, 1920px";
//   const mobileSizes = "(max-width: 768px) 250px";

//   const Current = slides[index];
//   const Prev = slides[prevIndex];

//   return (
//     <>
//       <div
//         className="hidden md:block absolute inset-0 -z-10"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-y-0 right-0 w-svw">
//           <div className="absolute inset-0">
//             <AnimatePresence custom={dir} mode="sync" initial={false}>
//               <motion.div
//                 key={`prev-${prevIndex}`}
//                 className="absolute inset-0"
//                 custom={dir}
//                 initial="center"
//                 animate="exit"
//                 exit="exit"
//                 variants={variants}
//               >
//                 <Image
//                   src={Prev.image}
//                   alt={Prev.alt}
//                   fill
//                   sizes={desktopSizes}
//                   className="object-cover"
//                   draggable={false}
//                   decoding="async"
//                   priority={false}
//                   fetchPriority="auto"
//                   placeholder="empty"
//                 />
//               </motion.div>

//               <motion.div
//                 key={`cur-${index}`}
//                 className="absolute inset-0"
//                 custom={dir}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 variants={variants}
//               >
//                 <Image
//                   src={Current.image}
//                   alt={Current.alt}
//                   fill
//                   sizes={desktopSizes}
//                   quality={70}
//                   className="object-cover"
//                   draggable={false}
//                   decoding="async"
//                   priority={index === 0}
//                   fetchPriority={index === 0 ? "high" : "auto"}
//                   placeholder="empty"
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           <div className="absolute inset-0 pointer-events-none w-full bg-[linear-gradient(to_right,white_0%,white_35%,rgba(255,255,255,0.1)_75%,transparent_100%)]" />
//         </div>
//       </div>

//       <div
//         className="md:hidden absolute inset-x-0 bottom-0 h-full -z-10"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-0">
//           <AnimatePresence custom={dir} mode="sync" initial={false}>
//             <motion.div
//               key={`m-prev-${prevIndex}`}
//               className="absolute inset-0"
//               custom={dir}
//               initial="center"
//               animate="exit"
//               exit="exit"
//               variants={variants}
//             >
//               <Image
//                 src={Prev.image}
//                 alt={Prev.alt}
//                 fill
//                 sizes={mobileSizes}
//                 quality={70}
//                 className="object-cover"
//                 draggable={false}
//                 decoding="async"
//                 priority={false}
//                 fetchPriority="auto"
//                 placeholder="empty"
//               />
//             </motion.div>

//             <motion.div
//               key={`m-cur-${index}`}
//               className="absolute inset-0"
//               custom={dir}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               variants={variants}
//             >
//               <Image
//                 src={Current.image}
//                 alt={Current.alt}
//                 fill
//                 sizes={mobileSizes}
//                 quality={70}
//                 className="object-cover"
//                 draggable={false}
//                 decoding="async"
//                 priority={index === 0}
//                 fetchPriority={index === 0 ? "high" : "auto"}
//                 placeholder="empty"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       <div
//         className="md:hidden absolute inset-0 pointer-events-none -z-10
//                    bg-[linear-gradient(to_bottom,white_0%,white_25%,rgba(255,255,255,0.7),transparent_100%)]"
//         aria-hidden="true"
//       />

//       <div className="w-fit mx-auto items-end justify-center">
//         <div
//           className="absolute right-3 bottom-3 md:right-6 md:top-6 pointer-events-none"
//           role="status"
//           aria-live="polite"
//         >
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={slides[index].label}
//               initial={{ opacity: 0, x: "-5%" }}
//               animate={{ opacity: 1, x: "0%" }}
//               exit={{ opacity: 0, x: "5%" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 shadow"
//             >
//               {slides[index].label}
//             </motion.span>
//           </AnimatePresence>
//         </div>
//       </div>

//       <div className="w-full h-full flex items-end justify-center mb-5">
//         <div
//           className="z-20 flex items-center gap-2"
//           role="group"
//           aria-label="Sterowanie slajdami"
//         >
//           <button
//             onClick={goPrev}
//             aria-label="Poprzedni"
//             className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
//           >
//             <ChevronLeft className="w-5 h-5 text-zinc-700" aria-hidden="true" />
//           </button>

//           <div className="flex gap-2 bg-white/75 px-3 py-2 rounded-full">
//             {slides.map((_, idx) => (
//               <div
//                 key={idx}
//                 aria-hidden="true"
//                 className={`h-2 w-2 rounded-full transition-all ${
//                   idx === index ? "bg-emerald-500 w-4" : "bg-zinc-400"
//                 }`}
//               />
//             ))}
//           </div>

//           <button
//             onClick={goNext}
//             aria-label="Następny"
//             className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
//           >
//             <ChevronRight
//               className="w-5 h-5 text-zinc-700"
//               aria-hidden="true"
//             />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { label: string; image: string; alt: string };

const slides: Slide[] = [
  { label: "Ściany",  image: "/assets/images/hero/wall_1.jpg",  alt: "nadruk UV naścienny" },
  { label: "Ściany",  image: "/assets/images/hero/wall_2.jpg",  alt: "nadruk UV naścienny" },
  { label: "Odzież",  image: "/assets/images/hero/clothing.jpg", alt: "Nadruk uv na białej koszulce" },
  { label: "Ściany",  image: "/assets/images/hero/wall_3.jpg",  alt: "nadruk UV naścienny" },
  { label: "Naklejki",image: "/assets/images/hero/stickers.jpg", alt: "naklejki" },
  { label: "Plakaty", image: "/assets/images/hero/posters.jpg",  alt: "plakaty" },
];

type Dir = 1 | -1;

// helper: initial/animate/exit – bez variants (TS-friendly w Motion One)
const slideIn = (dir: Dir) => ({
  initial: { opacity: 0, x: `${-5 * dir}%` as const },
  animate: { opacity: 1, x: "0%", transition: { duration: 0.8, ease: "easeOut" as const } },
  exit:    { opacity: 0, x: `${5 * dir}%`  as const, transition: { duration: 0.8, ease: "easeOut" as const } },
});

export default function HeroClient() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<Dir>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  }, []);
  const prev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }, []);

  // Autoplay – setTimeout (lżejszy niż setInterval)
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, 5000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, next]);

  const slide = slides[index];
  const sizesDesktop = "(max-width: 1280px) 1280px, 1920px";
  const sizesMobile  = "(max-width: 768px) 500px";

  return (
    <LazyMotion features={domAnimation}>
      {/* DESKTOP / TABLET */}
      <div className="hidden md:block absolute inset-0 -z-10" aria-hidden="true">
        <m.div key={`desk-${slide.image}`} className="absolute inset-0" {...slideIn(dir)}>
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes={sizesDesktop}
            quality={70}
            className="object-cover"
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        </m.div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,white_0%,white_35%,rgba(255,255,255,0.1)_75%,transparent_100%)]" />
      </div>

      {/* MOBILE */}
      <div className="md:hidden absolute inset-0 -z-10" aria-hidden="true">
        <m.div key={`mob-${slide.image}`} className="absolute inset-0" {...slideIn(dir)}>
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes={sizesMobile}
            quality={70}
            className="object-cover"
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
          />
        </m.div>
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,white_0%,white_25%,rgba(255,255,255,0.7),transparent_100%)]" />
      </div>

      {/* LABEL */}
      <div className="absolute right-3 bottom-3 md:right-6 md:top-6 pointer-events-none" role="status" aria-live="polite">
        <m.span
          key={`label-${slide.label}`}
          initial={{ opacity: 0, x: "-5%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "5%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 shadow"
        >
          {slide.label}
        </m.span>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Poprzedni"
          className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-700" />
        </button>

        <div className="flex gap-2 bg-white/75 px-3 py-2 rounded-full">
          {slides.map((_, i) => (
            <div
              key={i}
              aria-hidden="true"
              className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-emerald-500 w-4" : "bg-zinc-400"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Następny"
          className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <ChevronRight className="w-5 h-5 text-zinc-700" />
        </button>
      </div>
    </LazyMotion>
  );
}

