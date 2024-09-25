import { TComponentProps } from '@/aether-ui/utils';

export type TProgressBar = TComponentProps &
  Readonly<{
    widthPercentageOfProgressBar?: number;
  }>;

export type TProgressBarStyled = Readonly<{
  $widthPercentageOfProgressBar?: string;
}>;
