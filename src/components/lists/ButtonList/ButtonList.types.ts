import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/utils';
import { TButton, TButtonLink } from '@/components/actions/Button';

export type TButtonListItem = TButton | TButtonLink;
export type TButtonListItemList = TButtonListItem[];

export type TButtonList = TComponentProps &
  Readonly<{
    itemList?: TButtonListItemList;
    componentFallBack?: ReactNode;
    ButtonComponent?: ComponentType<TButton>;
    ButtonLinkComponent?: ComponentType<TButtonLink>;
  }>;
