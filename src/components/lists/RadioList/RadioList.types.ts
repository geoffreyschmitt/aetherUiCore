import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui/utils';
import { TRadio } from '@/aether-ui/components/actions/Radio';

type TRadioListItemList = TRadio[];

export type TRadioList = TComponentProps &
  Readonly<{
    itemList?: TRadioListItemList;
    radioName: string;
    componentFallBack?: ReactNode;
    RadioComponent?: ComponentType<TRadio>;
  }>;
