import React from 'react';

import { classNames } from '@/aether-ui/utils';
import { RootElement } from './ButtonList.styles';
import { TButtonList, TButtonListItem } from './ButtonList.types';
import { Button, ButtonLink } from '@/aether-ui/components/actions/Button';

export const ButtonList = ({
  className,
  itemList = [],
  componentFallBack,
  ButtonComponent = Button,
  ButtonLinkComponent = ButtonLink,
  ...props
}: TButtonList) => {
  if (!itemList.length) {
    return componentFallBack ?? null;
  }

  const renderButtonItem = (item: TButtonListItem, index: number) => {
    if ('href' in item && item.href) {
      return <ButtonLinkComponent key={index} {...item} />;
    }
    return <ButtonComponent key={index} {...item} />;
  };

  return (
    <RootElement
      data-testid={`ButtonList`}
      {...props}
      className={classNames('button-list', className)}
    >
      {itemList.map(renderButtonItem)}
    </RootElement>
  );
};
