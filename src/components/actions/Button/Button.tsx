import React, { forwardRef } from 'react';

import { classNames } from '@/aether-ui/utils';

//import { EButtonColor, EButtonSize, EButtonStyle } from './Button.global.types';
import { RootElement } from './Button.styles';
import { TButton } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, TButton>(
  ({ className, children, isLoading, disabled, ...props }, ref) => {
    return (
      <RootElement
        ref={ref}
        data-testid={'Button'}
        {...props}
        className={classNames(
          'button',
          {
            'button--is-loading': isLoading,
            'button--is-disabled': disabled,
          },
          className,
        )}
        disabled={isLoading || disabled}
      >
        {children}
      </RootElement>
    );
  },
);
