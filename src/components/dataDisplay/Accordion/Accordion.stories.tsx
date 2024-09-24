import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { Accordion as Component } from './Accordion';
import { accordionItemListMock } from './mocks';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Component> = {
  title: 'Components/DataDisplay/Accordion',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    accordionItemList: {
      table: {
        category: 'Data',
      },
    },
    accordionId: {
      table: {
        category: 'Data',
      },
    },
    allowOnlyOneOpenElement: {
      table: {
        category: 'Data',
      },
    },
    componentFallBack: {
      table: {
        category: 'Slots',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const defaultComponentFallBack = (
  <div className={'fallback-component'}>This is the fallback component</div>
);

export const Accordion: Story = {
  args: {
    accordionId: 'accordionId',
    accordionItemList: accordionItemListMock,
  },
};

export const AccordionWithAllowOnlyOneOpenElement: Story = {
  args: {
    ...Accordion.args,
    allowOnlyOneOpenElement: true,
  },
};

export const EmptyAccordionWithFallback: Story = {
  args: {
    accordionItemList: [],
    componentFallBack: defaultComponentFallBack,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentElement = canvas.queryByTestId('Accordion');
    const fallbackComponent = canvasElement.querySelector(
      '.fallback-component',
    );
    await expect(componentElement).toBeFalsy();
    await expect(fallbackComponent).toBeInTheDocument();
  },
};

export const EmptyAccordionWithoutFallback: Story = {
  args: {
    accordionItemList: [],
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeEmptyDOMElement();
  },
};
