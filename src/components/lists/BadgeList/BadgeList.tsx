import React from 'react';

import { classNames } from '@/aether-ui/utils';
import { RootElement } from './BadgeList.styles';
import { TBadgeList } from './BadgeList.types';
import { Badge } from '@/aether-ui/components/dataDisplay/Badge';

export const BadgeList = ({
  className,
  itemList = [],
  componentFallBack,
  BadgeComponent = Badge,
  ...props
}: TBadgeList) => {
  if (!itemList.length) {
    return componentFallBack ?? null;
  }

  return (
    <RootElement
      data-testid={`BadgeList`}
      {...props}
      className={classNames('badge-list', className)}
    >
      {itemList.map((item, index) => {
        return <BadgeComponent key={index} {...item} />;
      })}
    </RootElement>
  );
};
