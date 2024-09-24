import React, { forwardRef } from 'react';

import { classNames } from '@/aether-ui-core/src/utils/classNames';

import { RootElement } from './ButtonLink.styles';
import { TButtonLink } from './ButtonLink.types';

export const ButtonLink = forwardRef<HTMLAnchorElement, TButtonLink>(
  ({ className, children, ...props }, ref) => {
    return (
      <RootElement
        ref={ref}
        data-testid={'ButtonLink'}
        {...props}
        className={classNames('button', className)}
      >
        {children}
      </RootElement>
    );
  },
);
