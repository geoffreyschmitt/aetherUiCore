import React from 'react';
import { TFooter } from './Footer.types';
import { RootElement } from './Footer.styles';
import { classNames } from '@/aether-ui-core/src/utils';

export const Footer = ({ className, children, ...props }: TFooter) => {
  if (!children) {
    return null;
  }
  return (
    <RootElement
      data-testid={'Footer'}
      {...props}
      className={classNames('footer', className)}
    >
      {children}
    </RootElement>
  );
};
