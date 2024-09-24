import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils/classNames';

import { RootElement } from './Badge.styles';
import { TBadge } from './Badge.types';

export const Badge = ({ className, children, tag: Tag, ...props }: TBadge) => (
  <RootElement
    as={Tag}
    data-testid={'Badge'}
    {...props}
    className={classNames('badge', className)}
  >
    {children}
  </RootElement>
);
