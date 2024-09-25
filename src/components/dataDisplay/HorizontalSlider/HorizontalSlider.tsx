'use client';
import React, { useRef, useState } from 'react';
import { classNames } from '@/utils';

import { RootElement } from './HorizontalSlider.styles';
import { THorizontalSlider } from './HorizontalSlider.types';

export const HorizontalSlider = ({
  className,
  children,
  componentFallBack,
  ...props
}: THorizontalSlider) => {
  const horizontalSliderItemListRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const startDragging = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsDragging(true);
    setStartX(event.pageX - horizontalSliderItemListRef.current!.offsetLeft);
    event.preventDefault(); // Prevent text selection and image drag
  };

  const dragging = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return;
    event.preventDefault(); // Prevent text selection and image drag
    const x = event.pageX - horizontalSliderItemListRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    const currentScroll = horizontalSliderItemListRef.current!.scrollLeft;
    horizontalSliderItemListRef.current!.scrollLeft = currentScroll - walk;
    setStartX(x);
  };

  const endDragging = () => {
    setIsDragging(false);
  };

  if (!children) {
    return componentFallBack ?? null;
  }

  return (
    <RootElement
      data-testid={'HorizontalSlider'}
      {...props}
      className={classNames('horizontal-slider', className)}
      onMouseDown={startDragging}
      onMouseMove={dragging}
      onMouseUp={endDragging}
      onMouseLeave={endDragging}
    >
      <div
        className="horizontal-slider__item-list"
        ref={horizontalSliderItemListRef}
      >
        {children}
      </div>
    </RootElement>
  );
};
