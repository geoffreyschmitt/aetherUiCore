import { TComponentPropsWithRequiredChildren } from '@/aether-ui/utils';
import { ComponentType, ReactNode } from 'react';
import { TButton } from '@/aether-ui/components/actions';

export type TDialog = TComponentPropsWithRequiredChildren &
  Readonly<{
    id: string;
    closeButtonContentSlot?: ReactNode;
    closeButtonAriaLabel?: string;
    isModal?: boolean;
    ButtonComponent?: ComponentType<TButton> | 'button';
  }>;
