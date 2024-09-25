import React from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './Container.styles';
import { TContainer } from './Container.types';

export const Container = ({
  className,
  children,
  tag: Tag,
  ...props
}: TContainer) => (
  <RootElement
    as={Tag}
    data-testid={'Container'}
    {...props}
    className={classNames('container', className)}
  >
    {children}
  </RootElement>
);
