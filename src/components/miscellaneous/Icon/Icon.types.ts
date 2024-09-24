import { TComponentProps } from '@/aether-ui-core/src/utils';

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
