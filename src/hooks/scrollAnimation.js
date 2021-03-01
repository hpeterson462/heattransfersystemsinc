import { useState, useRef, useLayoutEffect } from 'react';
import 'intersection-observer';

export const useScrollAnimation = () => {

  const [isVisible, setVisible] = useState(true);
  const animationRef = useRef();

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(animationRef.current);
    return () => observer.unobserve(animationRef.current);
  }, []);

  return {
    isVisible,
    animationRef
  };
};
