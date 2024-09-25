import { TComponentProps } from '@/aether-ui/utils';
import { ComponentType, ReactNode } from 'react';
import { TButton } from '@/aether-ui/components/actions';

export type TReadMoreText = TComponentProps & {
  text: ReactNode;
  buttonContentWhenOpenSlot: ReactNode;
  buttonContentWhenCloseSlot: ReactNode;
  numberOfLineToDisplayWhenTruncate: number;
  ButtonComponent: ComponentType<TButton> | 'button';
};

export type TReadMoreTextStyled = Readonly<{
  $numberOfLineToDisplayWhenTruncate: TReadMoreText['numberOfLineToDisplayWhenTruncate'];
}>;
