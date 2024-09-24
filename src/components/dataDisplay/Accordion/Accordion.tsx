import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { Icon } from '@/aether-ui-core/src/components/miscellaneous/Icon/Icon';
import { EIconVariant } from '@/aether-ui-core/src/components/miscellaneous/Icon/Icon.types';
import { RootElement } from './Accordion.styles';
import { TAccordion } from './Accordion.types';

export const Accordion = ({
  className,
  accordionItemList = [],
  accordionId,
  allowOnlyOneOpenElement,
  componentFallBack,
  ...props
}: TAccordion) => {
  if (!accordionItemList.length) {
    return componentFallBack ?? null;
  }

  return (
    <RootElement
      data-testid={`Accordion`}
      {...props}
      id={accordionId}
      className={classNames('accordion', className)}
    >
      {accordionItemList.map((accordionItem, index) => {
        return (
          <details
            open={accordionItem.initialOpen}
            key={index}
            name={
              allowOnlyOneOpenElement
                ? `Accordion-${accordionId}_item`
                : undefined
            }
            className={'accordion-item'}
          >
            <summary className={'accordion-item__title'}>
              <span className={'accordion-item__title-text'}>
                {accordionItem.title}
              </span>
              <Icon
                className={'accordion-item__title-Icon'}
                variant={EIconVariant.CHEVRON}
              />
            </summary>
            <div className={'accordion-item__content'}>
              {accordionItem.content}
            </div>
          </details>
        );
      })}
    </RootElement>
  );
};
