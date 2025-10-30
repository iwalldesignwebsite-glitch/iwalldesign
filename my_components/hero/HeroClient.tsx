// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// type Slide = {
//   label: string;
//   image: string;
//   alt: string;
// };

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

// export default function HeroClient() {
//   const [i, setI] = useState(0);
//   const s = slides[i];
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
//     intervalRef.current = setInterval(() => {
//       setI((x) => (x + 1) % slides.length);
//     }, 5000);
//   };

//   useEffect(() => {
//     startTimer();
//     return clearTimer;
//   }, [prefersReducedMotion]);

//   const next = () => {
//     setI((x) => (x + 1) % slides.length);
//     startTimer();
//   };
//   const prev = () => {
//     setI((x) => (x - 1 + slides.length) % slides.length);
//     startTimer();
//   };

//   const variants = {
//     initial: { opacity: 0, x: "-5%" },
//     enter: { opacity: 1, x: "0%" },
//     exit: { opacity: 0, x: "5%" },
//   };

//   return (
//     <>
//       <div
//         className="hidden md:block absolute inset-0 -z-10"
//         aria-hidden="true"
//       >
//         <div className="absolute inset-y-0 right-0 w-svw">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={s.image}
//               className="absolute inset-0"
//               initial="initial"
//               animate="enter"
//               exit="exit"
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               variants={variants}
//             >
//               <Image
//                 src={s.image}
//                 alt={s.alt}
//                 fill
//                 priority={i === 0}
//                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
//                 quality={70}
//                 placeholder="empty"
//                 draggable={false}
//                 className="object-cover"
//               />
//             </motion.div>
//           </AnimatePresence>

//           <div
//             className="absolute inset-0 pointer-events-none w-full
//                        bg-[linear-gradient(to_right,white_0%,white_35%,rgba(255,255,255,0.1)_75%,transparent_100%)]"
//           />
//         </div>
//       </div>

//       <div
//         className="md:hidden absolute inset-x-0 bottom-0 h-full -z-10"
//         aria-hidden="true"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={s.image}
//             className="absolute inset-0"
//             initial="initial"
//             animate="enter"
//             exit="exit"
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             variants={variants}
//           >
//             <Image
//               src={s.image}
//               alt={s.alt}
//               fill
//               priority={i === 0}
//               sizes="100vw"
//               quality={70}
//               placeholder="empty"
//               draggable={false}
//               className="object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
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
//               key={s.label}
//               initial={{ opacity: 0, x: "-5%" }}
//               animate={{ opacity: 1, x: "0%" }}
//               exit={{ opacity: 0, x: "5%" }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 shadow"
//             >
//               {s.label}
//             </motion.span>
//           </AnimatePresence>
//         </div>
//       </div>

//       <div className="w-full h-full flex items-end justify-center mb-5">
//         <div
//           className="z-20 flex items-center gap-2"
//           role="group"
//           aria-label="Sterowanie slajdami (mobile)"
//         >
//           <button
//             onClick={prev}
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
//                   idx === i ? "bg-emerald-500 w-4" : "bg-zinc-400"
//                 }`}
//               />
//             ))}
//           </div>
//           <button
//             onClick={next}
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

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  label: string;
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    label: "Ściany",
    image: "/assets/images/hero/wall_1.jpg",
    alt: "nadruk UV naścienny",
  },
  {
    label: "Ściany",
    image: "/assets/images/hero/wall_2.jpg",
    alt: "nadruk UV naścienny",
  },
  {
    label: "Odzież",
    image: "/assets/images/hero/clothing.jpg",
    alt: "Nadruk uv na białej koszulce",
  },
  {
    label: "Ściany",
    image: "/assets/images/hero/wall_3.jpg",
    alt: "nadruk UV naścienny",
  },
  {
    label: "Naklejki",
    image: "/assets/images/hero/stickers.jpg",
    alt: "naklejki",
  },
  {
    label: "Plakaty",
    image: "/assets/images/hero/posters.jpg",
    alt: "plakaty",
  },
];

export default function HeroClient() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    if (prefersReducedMotion) return;
    clearTimer();
    intervalRef.current = setInterval(() => {
      setI((x) => (x + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [prefersReducedMotion]);

  const next = () => {
    setI((x) => (x + 1) % slides.length);
    startTimer();
  };
  const prev = () => {
    setI((x) => (x - 1 + slides.length) % slides.length);
    startTimer();
  };

  const variants = {
    initial: { opacity: 0, x: "-5%" },
    enter: { opacity: 1, x: "0%" },
    exit: { opacity: 0, x: "5%" },
  };

  return (
    <>
      {/* ===== DESKTOP ===== */}
      <div
        className="hidden md:block absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 right-0 w-svw">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.image}
              className="absolute inset-0"
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={variants}
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                // LCP boost – tylko pierwszy slajd
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                quality={70}
                placeholder="empty"
                draggable={false}
                className="object-cover"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>

          <div
            className="absolute inset-0 pointer-events-none w-full
                       bg-[linear-gradient(to_right,white_0%,white_35%,rgba(255,255,255,0.1)_75%,transparent_100%)]"
          />
        </div>
      </div>

      {/* ===== MOBILE/TABLET ===== */}
      <div
        className="md:hidden absolute inset-x-0 bottom-0 h-full -z-10"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={s.image}
            className="absolute inset-0"
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeOut" }}
            variants={variants}
          >
            <Image
              src={s.image}
              alt={s.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              sizes="100vw"
              quality={70}
              placeholder="empty"
              draggable={false}
              className="object-cover"
              decoding="async"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="md:hidden absolute inset-0 pointer-events-none -z-10 
                   bg-[linear-gradient(to_bottom,white_0%,white_25%,rgba(255,255,255,0.7),transparent_100%)]"
        aria-hidden="true"
      />

      {/* ===== LABEL ===== */}
      <div className="w-fit mx-auto items-end justify-center">
        <div
          className="absolute right-3 bottom-3 md:right-6 md:top-6 pointer-events-none"
          role="status"
          aria-live="polite"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={s.label}
              initial={{ opacity: 0, x: "-5%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "5%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 shadow"
            >
              {s.label}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* ===== CONTROLS ===== */}
      <div className="w-full h-full flex items-end justify-center mb-5">
        <div
          className="z-20 flex items-center gap-2"
          role="group"
          aria-label="Sterowanie slajdami (mobile)"
        >
          <button
            onClick={prev}
            aria-label="Poprzedni"
            className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-700" aria-hidden="true" />
          </button>

          <div className="flex gap-2 bg-white/75 px-3 py-2 rounded-full">
            {slides.map((_, idx) => (
              <div
                key={idx}
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === i ? "bg-emerald-500 w-4" : "bg-zinc-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Następny"
            className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
          >
            <ChevronRight
              className="w-5 h-5 text-zinc-700"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </>
  );
}
