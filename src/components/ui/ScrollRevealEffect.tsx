// Si este es tu componente ScrollRevealEffect, necesitas modificarlo así:
import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, Transition } from "framer-motion";

interface ScrollRevealEffectProps {
  children: ReactNode;
  rootMargin?: string;
  transition?: Transition;
  direction?: "left" | "right" | "top" | "bottom";
}

export function ScrollRevealEffect({
  children,
  rootMargin = "0px",
  transition = { duration: 0.5 },
  direction = "bottom",
}: ScrollRevealEffectProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls, rootMargin]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, x: 0, y: 0 },
        hidden: {
          opacity: 0,
          x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
          y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
        },
      }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
