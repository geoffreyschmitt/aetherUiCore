import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui-core/src/utils';
import { TButton, TButtonLink } from '@/aether-ui-core/src/components/actions/Button';

export type TButtonListItem = TButton | TButtonLink;
export type TButtonListItemList = TButtonListItem[];

export type TButtonList = TComponentProps &
  Readonly<{
    itemList?: TButtonListItemList;
    componentFallBack?: ReactNode;
    ButtonComponent?: ComponentType<TButton>;
    ButtonLinkComponent?: ComponentType<TButtonLink>;
  }>;
