import React from 'react';

import { classNames } from '@/utils';

import { EIconVariant, TIcon } from './Icon.types';
import * as IconVariants from './variants';

export const Icon = ({ className, variant, ...props }: TIcon) => {
  let IconToDisplay = null;
  switch (variant) {
    case EIconVariant.CHEVRON:
      IconToDisplay = <IconVariants.Chevron />;
      break;
  }

  if (!IconToDisplay) {
    return null;
  }

  return (
    <div
      data-testid={'Icon'}
      {...props}
      className={classNames('icon', className)}
    >
      {IconToDisplay}
    </div>
  );
};
