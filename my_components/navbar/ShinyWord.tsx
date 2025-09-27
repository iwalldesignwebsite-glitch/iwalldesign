"use client";

import { motion } from "framer-motion";

export function ShinyWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block align-baseline leading-[1.1]">
      <span className="bg-gradient-to-tr from-[#41dfa9] via-[#16b1c2] to-[#05282c] text-transparent bg-clip-text">
        {children}
      </span>

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none text-transparent bg-clip-text blur-xl"
        style={{
          backgroundImage:
            "linear-gradient(110deg, transparent 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,.75) 50%, rgba(255,255,255,0) 70%, transparent 100%)",
          backgroundSize: "200% 100%",
          mixBlendMode: "screen",
        }}
        initial={{ backgroundPositionX: "0%" }}
        animate={{ backgroundPositionX: "200%" }}
        transition={{ duration: 2.6, ease: "easeInOut", repeat: Infinity }}
      >
        {children}
      </motion.span>
    </span>
  );
}
