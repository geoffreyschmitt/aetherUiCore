import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils/classNames';

import { RootElement } from './ProgressBar.styles';
import { TProgressBar } from './ProgressBar.types';

export const ProgressBar = ({
  className,
  widthPercentageOfProgressBar,
  ...props
}: TProgressBar) => {
  return (
    <RootElement
      data-testid={'ProgressBar'}
      {...props}
      className={classNames('progress-bar', className)}
      $widthPercentageOfProgressBar={`${widthPercentageOfProgressBar}%`}
    />
  );
};
