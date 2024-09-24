import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils';
import { RootElement } from './CheckboxList.styles';
import { TCheckboxList } from './CheckboxList.types';
import { Checkbox } from '@/aether-ui-core/src/components/actions/Checkbox';

export const CheckboxList = ({
  className,
  itemList = [],
  componentFallBack,
  CheckboxComponent = Checkbox,
  ...props
}: TCheckboxList) => {
  if (!itemList.length) {
    return componentFallBack ?? null;
  }

  return (
    <RootElement
      data-testid={`CheckboxList`}
      {...props}
      className={classNames('checkbox-list', className)}
    >
      {itemList.map((item, index) => {
        return <CheckboxComponent key={index} {...item} />;
      })}
    </RootElement>
  );
};
