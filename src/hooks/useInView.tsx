import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /**
   * The threshold that should trigger the callback.
   * A value of 0 means as soon as even one pixel is visible, the callback will be run.
   * A value of 1.0 means the entire element must be visible.
   */
  threshold?: number;
  
  /**
   * The root element to use for intersection.
   * By default it's the viewport.
   */
  root?: Element | null;
  
  /**
   * Margin around the root element.
   */
  rootMargin?: string;
  
  /**
   * Whether the observer should only trigger once.
   */
  triggerOnce?: boolean;
}

/**
 * Hook that tracks whether an element is in the viewport, using IntersectionObserver API.
 */
export function useInView({ 
  threshold = 0, 
  root = null, 
  rootMargin = '0px', 
  triggerOnce = false 
}: UseInViewOptions = {}) {
  const [inView, setInView] = useState(false);
  const [wasTriggered, setWasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isIntersecting = entry.isIntersecting;
        
        if (triggerOnce) {
          if (isIntersecting && !wasTriggered) {
            setInView(true);
            setWasTriggered(true);
          }
        } else {
          setInView(isIntersecting);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce, wasTriggered]);

  return { ref, inView };
}