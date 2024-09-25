import React from 'react';

import { classNames } from '@/aether-ui/utils';
import { RootElement } from './RadioList.styles';
import { TRadioList } from './RadioList.types';
import { Radio } from '@/aether-ui/components/actions/Radio';

export const RadioList = ({
  className,
  itemList = [],
  radioName,
  componentFallBack,
  RadioComponent = Radio,
  ...props
}: TRadioList) => {
  if (!itemList.length) {
    return componentFallBack ?? null;
  }
  return (
    <RootElement
      data-testid={`RadioList`}
      {...props}
      className={classNames('radio-list', className)}
    >
      {itemList.map((item, index) => {
        return (
          <RadioComponent
            key={index}
            {...item}
            radioProps={{
              ...item.radioProps,
              name: radioName,
            }}
          />
        );
      })}
    </RootElement>
  );
};
