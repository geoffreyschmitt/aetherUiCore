import React from 'react';
import { RootElement } from './Drawer.styles';
import { classNames } from '@/aether-ui-core/src/utils';
import { TDrawer } from './Drawer.types';

export const Drawer = ({
  className,
  children,
  position,
  DialogComponent = RootElement,
  ...props
}: TDrawer) => {
  return (
    <RootElement
      as={DialogComponent}
      data-testid={'Drawer'}
      {...props}
      className={classNames('drawer', className)}
      isModal
      $position={position}
    >
      {children}
    </RootElement>
  );
};
