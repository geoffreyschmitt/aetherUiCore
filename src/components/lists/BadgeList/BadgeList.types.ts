import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui-core/src/utils';
import { TBadge } from '@/aether-ui-core/src/components/dataDisplay/Badge';

type TBadgeListItemList = TBadge[];

export type TBadgeList = TComponentProps &
  Readonly<{
    itemList?: TBadgeListItemList;
    componentFallBack?: ReactNode;
    BadgeComponent?: ComponentType<TBadge>;
  }>;
