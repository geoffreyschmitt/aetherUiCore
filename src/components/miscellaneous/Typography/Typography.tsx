import React from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './Typography.styles';
import { TTypography } from './Typography.types';

export const Typography = ({
  className,
  children,
  tag: Tag,
  ...props
}: TTypography) => (
  <RootElement
    data-testid={'Typography'}
    {...props}
    as={Tag}
    className={classNames('typography', className)}
  >
    {children}
  </RootElement>
);
