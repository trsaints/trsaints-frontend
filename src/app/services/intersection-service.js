import { useEffect, useRef } from "react";

// Cria um contexto global para o observador
const observerContext = new Map();

// Cria um Hook personalizado para usar o observador
function useIntersectionObserver(threshold, animationName) {
  const ref = useRef();

  useEffect(() => {
    if (!observerContext.has(threshold)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(animationName);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: threshold,
        }
      );
      observerContext.set(threshold, observer);
    }

    const observer = observerContext.get(threshold);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, animationName]);

  return ref;
}

export const intersectionService = {
  useIntersectionObserver,
};
