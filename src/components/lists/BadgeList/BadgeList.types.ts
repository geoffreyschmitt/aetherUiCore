import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui/utils';
import { TBadge } from '@/aether-ui/components/dataDisplay/Badge';

type TBadgeListItemList = TBadge[];

export type TBadgeList = TComponentProps &
  Readonly<{
    itemList?: TBadgeListItemList;
    componentFallBack?: ReactNode;
    BadgeComponent?: ComponentType<TBadge>;
  }>;
