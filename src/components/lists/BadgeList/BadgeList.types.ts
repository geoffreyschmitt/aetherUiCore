import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/utils';
import { TBadge } from '@/components/dataDisplay/Badge';

type TBadgeListItemList = TBadge[];

export type TBadgeList = TComponentProps &
  Readonly<{
    itemList?: TBadgeListItemList;
    componentFallBack?: ReactNode;
    BadgeComponent?: ComponentType<TBadge>;
  }>;
