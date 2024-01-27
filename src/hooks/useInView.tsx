import { useEffect, useState, RefObject, useCallback } from "react";

const useInView = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit = {},
  triggerOnce = true
): boolean => {
  const [inView, setInView] = useState(false);
  const handleObserver: any = useCallback(() => {
    const targetElement = ref.current;
    if (!targetElement) return;
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
      if (triggerOnce && entry.isIntersecting) {
        observer.unobserve(targetElement);
      }
    }, options);
    observer.observe(targetElement);
    return { observer, targetElement };
  }, [options, ref, triggerOnce]);
  useEffect(() => {
    const { observer, targetElement } = handleObserver() ?? {};
    return () => {
      observer?.unobserve(targetElement);
    };
  }, [handleObserver]);
  return inView;
};

export default useInView;
