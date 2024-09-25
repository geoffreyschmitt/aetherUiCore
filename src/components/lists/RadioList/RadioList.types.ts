import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/utils';
import { TRadio } from '@/components/actions/Radio';

type TRadioListItemList = TRadio[];

export type TRadioList = TComponentProps &
  Readonly<{
    itemList?: TRadioListItemList;
    radioName: string;
    componentFallBack?: ReactNode;
    RadioComponent?: ComponentType<TRadio>;
  }>;
