import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { Input as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Input',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    label: {
      table: {
        category: 'Data',
      },
    },
    defaultValue: {
      table: {
        category: 'Data',
      },
      control: 'text',
    },
    inputProps: {
      table: {
        category: 'Data',
      },
    },
    hasError: {
      table: {
        category: 'Data',
      },
      control: 'boolean',
    },
    onChange: {
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Input: Story = {
  args: {
    label: 'label',
    onChange: fn() as () => void,
  },
};
export const InputWithDefaultValue: Story = {
  args: {
    ...Input.args,
    defaultValue: 'default-value',
  },
};
