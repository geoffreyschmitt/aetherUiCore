import { TComponentProps } from '@/aether-ui-core/src/utils';

export type TProgressBar = TComponentProps &
  Readonly<{
    widthPercentageOfProgressBar?: number;
  }>;

export type TProgressBarStyled = Readonly<{
  $widthPercentageOfProgressBar?: string;
}>;
