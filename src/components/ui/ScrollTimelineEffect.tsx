import { motion, useAnimation, Transition } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollTimelineEffectProps {
  children: ReactNode;
  rootMargin?: string;
  transition?: Transition;
}

export function ScrollTimelineEffect({
  children,
  rootMargin = "-20% 0px",
  transition = { duration: 0.5 },
}: ScrollTimelineEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection ratio:", entry.intersectionRatio);

        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: 0.5,
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
        visible: {
          color: "oklch(35.9% 0.144 278.697)",
          transition: { ...transition, ease: "easeOut" },
        },
        hidden: {
          color: "oklch(89.4% 0.057 293.283)",
          transition,
        },
      }}
      style={{
        willChange: "background-color color",
        transition: "background-color color 0.5s ease-out",
      }}
    >
      {children}
    </motion.div>
  );
}
