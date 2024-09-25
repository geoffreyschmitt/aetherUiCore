import React, { ForwardedRef, forwardRef } from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './Link.styles';
import { TLink } from './Link.types';

export const Link = forwardRef<
  HTMLAnchorElement,
  TLink & { ref?: ForwardedRef<HTMLAnchorElement> }
>(({ className, children, ...props }, ref) => {
  return (
    <RootElement
      data-testid={'Link'}
      {...props}
      className={classNames('link', className)}
      ref={ref}
    >
      {children}
    </RootElement>
  );
});
