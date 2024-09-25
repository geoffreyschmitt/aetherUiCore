'use client';
import React, { useEffect, useRef, useState } from 'react';

import { useSwipe } from '@/aether-ui/hooks/useSwipe';
import { classNames } from '@/aether-ui/utils';

import { RootElement } from './Carousel.styles';
import { TCarousel } from './Carousel.types';

export const Carousel = ({
  className,
  itemList,
  componentFallBack,
  previousButtonContentSlot,
  nextButtonContentSlot,
  ...props
}: TCarousel) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselItemListRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideList, setSlideList] = useState<HTMLElement[]>([]);
  const swipe = useSwipe(carouselItemListRef);

  useEffect(() => {
    if (!swipe.x) {
      return;
    }
    if (swipe.x >= 40) {
      goPrevious();
    } else if (swipe.x <= -40) {
      goNext();
    }
  }, [swipe]);

  useEffect(() => {
    setSlideList([
      ...Array.from(
        (carouselItemListRef.current?.querySelectorAll(
          '.carousel__item',
        ) as unknown as HTMLElement[]) ?? [],
      ),
    ]);
  }, [itemList]);

  useEffect(() => {
    let newActiveIndex: number | null = null;
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const index = slideList.findIndex(
          slideElement => slideElement === entry.target,
        );
        if (entry.isIntersecting) {
          console.log(entry);
          newActiveIndex = index;
        }
      });
      if (newActiveIndex !== null) {
        setActiveIndex(newActiveIndex);
      }
    };
    const observer = new IntersectionObserver(handleIntersect, {
      root: carouselItemListRef.current,
      rootMargin: '0px',
      threshold: 0.6,
    });

    slideList.forEach(el => {
      observer.observe(el);
    });
  }, [slideList]);

  const goToSlide = (index: number) => {
    if (!slideList.length) {
      return null;
    }
    let indexToScroll = index;
    if (index > slideList.length) {
      indexToScroll = slideList.length;
    }
    if (index <= 0) {
      indexToScroll = 0;
    }

    const carouselElement = carouselItemListRef.current;
    const targetElement = slideList[indexToScroll];
    if (carouselElement && targetElement) {
      carouselElement.scrollLeft =
        targetElement.offsetLeft - carouselElement.offsetLeft;
    }
  };

  const goPrevious = () => {
    goToSlide(getPreviousSlideElementNotInScreen());
  };

  const getPreviousSlideElementNotInScreen = () => {
    return activeIndex - 1;
  };

  const getNextSlideElementNotInScreen = () => {
    return activeIndex + 1;
  };

  const goNext = () => {
    goToSlide(getNextSlideElementNotInScreen());
  };

  if (!itemList.length) {
    return componentFallBack ?? null;
  }

  return (
    <RootElement
      data-testid={'Carousel'}
      {...props}
      className={classNames('carousel', className)}
      ref={carouselRef}
    >
      {previousButtonContentSlot && (
        <button
          className="carousel__scroll-button carousel__scroll-button--previous"
          onClick={goPrevious}
          disabled={activeIndex === 0}
          aria-label={'Previous slides'}
        >
          {previousButtonContentSlot}
        </button>
      )}

      {nextButtonContentSlot && (
        <button
          className="carousel__scroll-button carousel__scroll-button--next"
          onClick={goNext}
          disabled={activeIndex >= itemList.length - 1}
          aria-label={'Next slides'}
        >
          {nextButtonContentSlot}
        </button>
      )}
      <div className="carousel__item-list" ref={carouselItemListRef}>
        {itemList.map((item, index) => {
          return (
            <div
              className={classNames('carousel__item', {
                'carousel__item--is-visible': activeIndex === index,
              })}
              aria-hidden={activeIndex !== index}
              // @ts-expect-error inert in this case only worked if passed as "true" even if it should be a boolean
              inert={activeIndex !== index ? 'true' : undefined}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </RootElement>
  );
};
