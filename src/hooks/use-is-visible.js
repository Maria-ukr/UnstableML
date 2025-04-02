import { useEffect, useRef, useState } from 'react';

export const useIsVisible = (props) => {
  const {
    options: { root = null, rootMargin = '', threshold = 0.1 } = {},
    once = false,
  } = props;
  const options = { root, rootMargin, threshold };
  const optionsRef = useRef(options);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(() => true);
          if (once) {
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        } else {
          setIsVisible(() => false);
        }
      });
    }, optionsRef.current);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
      observer.disconnect(); // Clean up the IntersectionObserver
    };
  }, [once]);

  return { isVisible, targetRef };
};
