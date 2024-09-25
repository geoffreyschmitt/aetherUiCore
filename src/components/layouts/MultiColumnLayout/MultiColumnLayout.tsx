import React from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './MultiColumnLayout.styles';
import { TMultiColumnLayout } from './MultiColumnLayout.types';

export const MultiColumnLayout = ({
  className,
  mobileThreshold,
  columnList = [],
  ...props
}: TMultiColumnLayout) => {
  if (!columnList.length) {
    return null;
  }

  return (
    <RootElement
      data-testid="MultiColumnLayout"
      {...props}
      className={classNames('multi-column-layout', className)}
      $mobileThreshold={mobileThreshold}
    >
      <div className="multi-column-layout__inner">
        {columnList.map((column, index) => (
          <div key={index} className="multi-column-layout__column">
            {column}
          </div>
        ))}
      </div>
    </RootElement>
  );
};
