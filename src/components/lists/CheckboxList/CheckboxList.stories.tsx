import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { CheckboxList as Component } from './CheckboxList';
import { checkboxListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Lists/CheckboxList',
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

export const CheckboxList: Story = {
  args: {
    itemList: checkboxListMock,
  },
};
