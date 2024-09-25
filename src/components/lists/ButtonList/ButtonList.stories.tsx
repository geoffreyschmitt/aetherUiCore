import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui/utils';

import { ButtonList as Component } from './ButtonList';
import { buttonListMock } from './mocks';
import { fn } from '@storybook/test';

const meta: Meta<typeof Component> = {
  title: 'Components/Lists/ButtonList',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    itemList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const defaultComponentFallBack = (
  <div className={'fallback-component'}>This is the fallback component</div>
);

export const ButtonList: Story = {
  args: {
    itemList: buttonListMock?.map(button => {
      return {
        ...button,
        onClick: fn(),
      };
    }),
  },
};

export const ButtonListWithEmptyItemList: Story = {
  args: {
    itemList: [],
    componentFallBack: defaultComponentFallBack,
  },
};
