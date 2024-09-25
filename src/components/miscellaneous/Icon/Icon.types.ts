import { TComponentProps } from '@/aether-ui/utils';

export enum EIconVariant {
  CHEVRON = 'chevron',
}

export type TIcon = TComponentProps &
  Readonly<{
    /**
     * Available variant of the icon.
     */
    variant: EIconVariant;
  }>;
