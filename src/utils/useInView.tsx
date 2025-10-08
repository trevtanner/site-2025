import { useState, useEffect, useRef, RefObject } from "react";

export const useInView = <T extends HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] => {
  const ref = useRef<T | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // We check if the ref's current value exists and is an instance of a DOM element
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => {
      // We also check for element existence in the cleanup function
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options, hasAnimated]);

  return [ref, hasAnimated];
};
