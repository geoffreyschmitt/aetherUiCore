import { TComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';
import { TDialog } from '@/aether-ui-core/src/components/overlays/Dialog';
import { ComponentType } from 'react';

export enum EDrawerPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export type TDrawer = TComponentPropsWithRequiredChildren &
  Omit<TDialog, 'isModal'> &
  Readonly<{
    /**
     * Represents the dialog component used by the drawer
     * It need to be based of the core Dialog component
     */
    DialogComponent?: ComponentType<TDialog & TDrawerStyled>;
    /**
     * Position of the Drawer
     */
    position: EDrawerPosition;
  }>;

export type TDrawerStyled = Readonly<{
  $position: TDrawer['position'];
}>;
