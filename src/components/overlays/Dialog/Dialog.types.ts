import { TComponentPropsWithRequiredChildren } from '@/utils';
import { ComponentType, ReactNode } from 'react';
import { TButton } from '@/components/actions';

export type TDialog = TComponentPropsWithRequiredChildren &
  Readonly<{
    id: string;
    closeButtonContentSlot?: ReactNode;
    closeButtonAriaLabel?: string;
    isModal?: boolean;
    ButtonComponent?: ComponentType<TButton> | 'button';
  }>;
