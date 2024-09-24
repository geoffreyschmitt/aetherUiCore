'use client';
import { useEffect, useRef, useState } from 'react';

export const useResizeHandler = () => {
  // Ref to track whether the event listener is already added
  const isFirstRun = useRef(true);

  const [callbacks, setCallbacks] = useState<(() => void)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      callbacks.forEach(callback => callback());
    };

    if (isFirstRun.current) {
      window.addEventListener('resize', handleResize);
      isFirstRun.current = false;
    }

    return () => {
      // Remove the event listener only when all components using the hook have been unmounted
      if (callbacks.length === 0) {
        window.removeEventListener('resize', handleResize);
        isFirstRun.current = true;
      }
    };
  }, [callbacks]);

  const addResizeCallback = (callback: () => void) => {
    setCallbacks(prevCallbacks => [...prevCallbacks, callback]);
  };

  const removeResizeCallback = (callback: () => void) => {
    setCallbacks(prevCallbacks => prevCallbacks.filter(cb => cb !== callback));
  };

  return { addResizeCallback, removeResizeCallback };
};
