"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
  amount?: number;
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]; 

export function RevealOnScroll({
  children,
  className,
  style,
  delay = 0,
  once = true,
  amount = 0.6,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  const distance = 12;  

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: distance };

  const animate = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={animate}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: easing, delay }}
    >
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;
