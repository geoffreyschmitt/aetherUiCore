import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Accordion.stories';
import userEvent from '@testing-library/user-event';

const { Accordion, AccordionWithAllowOnlyOneOpenElement } =
  composeStories(stories);
describe('Accordion Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Accordion />);
    const accordionElement = getByTestId('Accordion');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');

    expect(accordionElement).toBeInTheDocument();

    expect(accordionItemElementList.length).toBe(
      Accordion.args.accordionItemList?.length,
    );

    accordionItemElementList.forEach(accordionItemElement => {
      expect(accordionItemElement.tagName).toBe('DETAILS');
      expect(accordionItemElement).toHaveClass('accordion-item');
      const accordionItemElementTitle =
        accordionItemElementList[0].querySelector('.accordion-item__title');
      expect(accordionItemElementTitle?.tagName).toBe('SUMMARY');
    });
  });

  it('renders initialOpen accordion items correctly', () => {
    const { getByTestId } = render(<Accordion />);
    const openedAccordionIndex = Accordion.args.accordionItemList?.findIndex(
      accordionItem => accordionItem.initialOpen === true,
    );
    if (!openedAccordionIndex) {
      fail('No opened accordion item find in data');
    }
    const accordionElement = getByTestId('Accordion');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');
    const openedAccordionElement =
      accordionItemElementList[openedAccordionIndex];

    expect(openedAccordionElement).toHaveAttribute('open');
  });

  it('can open multiple accordion item at the same time', async () => {
    const { getByTestId } = render(<Accordion />);
    const accordionElement = getByTestId('Accordion');
    const accordionItemElementList =
      accordionElement.querySelectorAll('.accordion-item');
    const firstElement = accordionItemElementList[0];
    const secondElement = accordionItemElementList[1];
    const firstElementTitle = firstElement.querySelector(
      '.accordion-item__title',
    );
    const secondElementTitle = secondElement.querySelector(
      '.accordion-item__title',
    );

    if (!firstElementTitle || !secondElementTitle) {
      fail('Not enough element to test');
    }

    await userEvent.click(firstElementTitle);

    expect(firstElement).toHaveAttribute('open');
    expect(secondElement).not.toHaveAttribute('open');

    await userEvent.click(secondElementTitle);

    expect(firstElement).toHaveAttribute('open');
    expect(secondElement).toHaveAttribute('open');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Accordion />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
