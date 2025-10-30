"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealOnScroll from "../assets/RevealWrapper";

export type Card = {
  id: number;
  content: string;
  thumbnail: string;
  className?: string;
  alt: string;
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-flow-dense ">
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
              alt={card.alt}
              loading="lazy" 
              decoding="async" 
              fetchPriority="low"
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-16"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <div
                ref={contentRef}
                className="relative max-w-[92vw] max-h-[86vh] "
              >
                <img
                  src={selected.thumbnail}
                  alt={selected.alt}
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
// "use client";

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";
// import RevealOnScroll from "../assets/RevealWrapper";

// export type Card = {
//   id: number;
//   content: string;
//   thumbnail: string; // ścieżka z /public lub dozwolona domena w next.config.js
//   className?: string;
//   alt: string;
// };

// type Props = { cards: Card[] };

// export default function GalleryGrid({ cards }: Props) {
//   const [selected, setSelected] = useState<Card | null>(null);
//   const isMdUp = useMediaQuery("(min-width: 768px)");

//   // ESC zamyka podgląd
//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // blokada scrolla, gdy modal otwarty
//   useLockBodyScroll(Boolean(selected) && isMdUp);

//   const contentRef = useRef<HTMLDivElement | null>(null);
//   useOnClickOutside(contentRef, Boolean(selected) && isMdUp, () =>
//     setSelected(null)
//   );

//   return (
//     <div className="w-full mx-auto">
//       <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-flow-dense">
//         {cards.map((card, idx) => (
//           <RevealOnScroll
//             key={card.id}
//             delay={0.5 * Math.random()}
//             className={cn(
//               "relative rounded-xl overflow-hidden shadow-sm bg-white",
//               "aspect-square md:aspect-[4/2]",
//               card.className
//             )}
//           >
//             {/* Obrazek – Next/Image, animacja na wrapperze */}
//             <motion.div
//               whileHover={isMdUp ? { scale: 1.02 } : undefined}
//               transition={{ duration: 0.25 }}
//               className="absolute inset-0"
//               onClick={() => {
//                 if (!isMdUp) return;
//                 setSelected(card);
//               }}
//               role="button"
//               aria-label={`Otwórz ${card.content}`}
//             >
//               <Image
//                 src={card.thumbnail}
//                 alt={card.alt}
//                 fill
//                 className="object-cover hover:cursor-pointer select-none"
//                 // 1 kolumna: ~100vw, 2 kolumny: ~50vw, 3 kolumny: ~33vw
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                 quality={65}
//                 priority={idx < 3 ? true : undefined} // tylko pierwsze kafelki nad foldem
//                 draggable={false}
//               />
//             </motion.div>

//             <div className="absolute left-3 bottom-3">
//               <span className="rounded-md px-3 py-1 text-xs font-medium text-white shadow-md bg-gradient-to-r from-blue-500 to-violet-500">
//                 {card.content}
//               </span>
//             </div>
//           </RevealOnScroll>
//         ))}
//       </div>

//       {/* Modal podglądu */}
//       <AnimatePresence>
//         {selected && isMdUp && (
//           <>
//             {/* Backdrop */}
//             <motion.button
//               aria-label="Zamknij podgląd"
//               className="fixed inset-0 bg-black/80 z-40"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setSelected(null)}
//             />
//             <motion.div
//               role="dialog"
//               aria-modal="true"
//               className="fixed inset-0 z-50 grid place-items-center p-4 mt-16"
//               initial={{ opacity: 0, scale: 0.98 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ type: "tween", duration: 0.2 }}
//             >
//               <div
//                 ref={contentRef}
//                 className="relative w-[92vw]  h-[86vh] bg-red-500"
//               >
//                 {/* Wrapper z tłem i ringiem – znika „poświata” */}
//                 <div className="absolute inset-0 rounded-lg bg-red-200  ">
//                 <Image
//                   src={selected.thumbnail}
//                   alt={selected.alt}
//                   fill
//                   className="object-contain rounded-lg select-none h-[86vh]"
//                   sizes="92vw"
//                   quality={70}
//                   draggable={false}
//                   priority
//                 />
//                 <button
//                   aria-label="Zamknij"
//                   onClick={() => setSelected(null)}
//                   className="absolute -top-3 -right-3 rounded-full bg-white/90 hover:bg-white shadow-md p-2"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// /* ================= helpers (bez zmian) ================= */

// function useMediaQuery(query: string) {
//   const mql = useMemo(
//     () => (typeof window !== "undefined" ? window.matchMedia(query) : null),
//     [query]
//   );
//   const [matches, setMatches] = useState<boolean>(!!mql?.matches);

//   useEffect(() => {
//     if (!mql) return;
//     const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
//     // @ts-ignore
//     mql.addEventListener
//       ? mql.addEventListener("change", handler)
//       : mql.addListener(handler);
//     return () => {
//       // @ts-ignore
//       mql.removeEventListener
//         ? mql.removeEventListener("change", handler)
//         : mql.removeListener(handler);
//     };
//   }, [mql]);

//   return matches;
// }

// function useLockBodyScroll(active: boolean) {
//   useEffect(() => {
//     if (!active) return;
//     const originalHtml = document.documentElement.style.overflow;
//     const originalBody = document.body.style.overflow;
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.documentElement.style.overflow = originalHtml;
//       document.body.style.overflow = originalBody;
//     };
//   }, [active]);
// }

// function useOnClickOutside<T extends HTMLElement>(
//   ref: React.RefObject<T | null>,
//   active: boolean,
//   onOutside: () => void
// ) {
//   useEffect(() => {
//     if (!active) return;

//     const handler = (e: MouseEvent | TouchEvent | PointerEvent) => {
//       const el = ref.current;
//       if (!el) return;
//       if (el.contains(e.target as Node)) return;
//       onOutside();
//     };

//     document.addEventListener("pointerdown", handler, true);
//     return () => document.removeEventListener("pointerdown", handler, true);
//   }, [ref, active, onOutside]);
// }
