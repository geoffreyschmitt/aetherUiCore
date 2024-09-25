import React from 'react';
import { classNames } from '@/aether-ui/utils';
import { THeader } from './Header.types';
import { RootElement } from './Header.styles';

export const Header = ({ className, children, ...props }: THeader) => {
  if (!children) {
    return null;
  }
  return (
    <RootElement
      data-testid={'Header'}
      {...props}
      className={classNames('header', className)}
    >
      {children}
    </RootElement>
  );
};
