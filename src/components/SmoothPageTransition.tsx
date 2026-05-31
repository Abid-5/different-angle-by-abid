import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { pageTransition } from "../utils/motion";

type SmoothPageTransitionProps = {
  children: ReactNode;
};

export function SmoothPageTransition({ children }: SmoothPageTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      variants={reduceMotion ? undefined : pageTransition}
      initial={reduceMotion ? false : "initial"}
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.main>
  );
}
