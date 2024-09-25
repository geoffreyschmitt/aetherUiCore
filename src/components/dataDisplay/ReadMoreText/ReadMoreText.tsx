import React, { useEffect, useRef, useState } from 'react';

import { classNames } from '@/utils';

import { RootElement } from './ReadMoreText.styles';
import { TReadMoreText } from './ReadMoreText.types';
import { useResizeHandler } from '@/hooks/useResizeHandler';

const isEllipsisActive = (e: HTMLElement) => {
  return e.offsetHeight < e.scrollHeight;
};

export const ReadMoreText = ({
  className,
  id,
  text,
  buttonContentWhenOpenSlot,
  buttonContentWhenCloseSlot,
  numberOfLineToDisplayWhenTruncate,
  ButtonComponent = 'button',
  ...props
}: TReadMoreText) => {
  const textRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { addResizeCallback, removeResizeCallback } = useResizeHandler();

  const checkIfButtonShouldBeDisplay = () => {
    if (textRef.current) {
      return isEllipsisActive(textRef.current);
    }
    return false;
  };
  const [showButton, setShowButton] = useState(checkIfButtonShouldBeDisplay());

  useEffect(() => {
    addResizeCallback(updateButtonVisibility);
    return () => {
      removeResizeCallback(updateButtonVisibility);
    };
  }, []);

  useEffect(() => {
    updateButtonVisibility();
  }, [text]);

  const updateButtonVisibility = () => {
    setShowButton(checkIfButtonShouldBeDisplay());
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!text) {
    return null;
  }

  return (
    <RootElement
      data-testid="ReadMoreText"
      {...props}
      className={classNames('read-more-text', className)}
      $numberOfLineToDisplayWhenTruncate={numberOfLineToDisplayWhenTruncate}
    >
      <span
        className={classNames('read-more__content', {
          'read-more-text__content--is-truncated': !isOpen,
        })}
        ref={textRef}
        id={`read-more-text-content--${id}`}
      >
        {text}
      </span>
      {showButton &&
        buttonContentWhenOpenSlot &&
        buttonContentWhenCloseSlot && (
          <ButtonComponent
            aria-controls={`read-more-text-content--${id}`}
            aria-expanded={isOpen}
            onClick={handleClick}
            className={'read-more__button'}
          >
            {isOpen ? buttonContentWhenOpenSlot : buttonContentWhenCloseSlot}
          </ButtonComponent>
        )}
    </RootElement>
  );
};
