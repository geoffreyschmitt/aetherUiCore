import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentPropsWithChildren } from '@/aether-ui/utils';

import { Checkbox as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Checkbox',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithChildren,
    id: {
      table: {
        category: 'Data',
      },
    },
    backgroundColor: {
      table: {
        category: 'Styles',
      },
    },
    checkColor: {
      table: {
        category: 'Styles',
      },
    },
    checkboxProps: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Checkbox: Story = {
  args: {
    children: 'Checkbox children',
    onChange: fn() as () => void,
  },
};

export const CheckboxWithCustomColor: Story = {
  args: {
    ...Checkbox.args,
    backgroundColor: '#F2A93B',
    checkColor: '#78a185',
  },
};

export const CheckboxWithNoChildren: Story = {
  args: {
    ...Checkbox.args,
    children: undefined,
  },
};
