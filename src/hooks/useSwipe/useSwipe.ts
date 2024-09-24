import { RefObject, useEffect, useState } from 'react';

interface Coordinates {
  x: number | null;
  y: number | null;
}

export const useSwipe = (ref: RefObject<HTMLElement>) => {
  const [swipe, setSwipe] = useState<Coordinates>({ x: 0, y: 0 });

  const swipeStart: Coordinates = { x: null, y: null };
  const swipeEnd: Coordinates = { x: null, y: null };

  const handleSwipeStart = (event: PointerEvent) => {
    swipeStart.x = event.clientX;
    swipeStart.y = event.clientY;
  };

  const handleSwipeEnd = (event: PointerEvent) => {
    swipeEnd.x = event.clientX;
    swipeEnd.y = event.clientY;
    if (
      swipeStart.x !== null &&
      swipeEnd.x !== null &&
      swipeStart.y !== null &&
      swipeEnd.y !== null
    ) {
      setSwipe({ x: swipeEnd.x - swipeStart.x, y: swipeEnd.y - swipeStart.y });
    }
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('pointerdown', handleSwipeStart);
      element.addEventListener('pointerup', handleSwipeEnd);
    }
    return () => {
      if (element) {
        element.removeEventListener('pointerdown', handleSwipeStart);
        element.removeEventListener('pointerup', handleSwipeEnd);
      }
    };
  }, [ref]);

  return swipe;
};
