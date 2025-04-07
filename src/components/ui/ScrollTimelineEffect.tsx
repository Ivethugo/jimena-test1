import { motion, useAnimation, Transition } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface ScrollTimelineEffectProps {
  children: ReactNode;
  rootMargin?: string;
  transition?: Transition;
}

export function ScrollTimelineEffect({
  children,
  rootMargin = "-40% 0px",
  transition = { duration: 0.5 },
}: ScrollTimelineEffectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const isScrollingDown = currentScrollY > lastScrollY.current;

        if (entry.isIntersecting && isScrollingDown) {
          controls.start("visible");
        } else if (!entry.isIntersecting || !isScrollingDown) {
          controls.start("hidden");
        }

        lastScrollY.current = currentScrollY;
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: 0.9,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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
