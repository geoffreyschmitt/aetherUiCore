import { TComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';
import { ComponentType, ReactNode } from 'react';
import { TButton } from '@/aether-ui-core/src/components/actions';

export type TDialog = TComponentPropsWithRequiredChildren &
  Readonly<{
    id: string;
    closeButtonContentSlot?: ReactNode;
    closeButtonAriaLabel?: string;
    isModal?: boolean;
    ButtonComponent?: ComponentType<TButton> | 'button';
  }>;
