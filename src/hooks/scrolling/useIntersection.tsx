import { useRef, useEffect, useState } from "react";

type UseIntersectionProps = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const useIntersection = (props: UseIntersectionProps = {}) => {
  const { root, rootMargin = "0px", threshold = 0 } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const { current } = ref;

    if (!current) return;

    const handleIntersection: IntersectionObserverCallback = ([entry]) => {
      console.log(entry);
      setIsIntersecting(entry.isIntersecting);
    };

    const options = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(current);
    return () => current && observer.unobserve(current);
  }, [ref, root, rootMargin, threshold]);

  return { ref, isIntersecting };
};
