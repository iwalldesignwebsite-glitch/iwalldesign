"use client";

import * as React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";

export type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  once?: boolean;
  amount?: number; 
};

const easing: Transition["ease"] = [0.22, 1, 0.36, 1];

export default function RevealOnScroll({
  children,
  className,
  style,
  delay = 0,
  once = true,
  amount = 0.3,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  const { initial, animate, transition } = React.useMemo(() => {
    const distance = 12; 
    const init: TargetAndTransition = prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: distance };

    const anim: TargetAndTransition = { opacity: 1, y: 0 };

    const trans: Transition = {
      duration: 0.6,
      ease: easing,
      delay,
    };

    return { initial: init, animate: anim, transition: trans };
  }, [prefersReducedMotion, delay]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        style={style}
        initial={initial}
        whileInView={animate}
        viewport={{ once, amount }}
        transition={transition}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
