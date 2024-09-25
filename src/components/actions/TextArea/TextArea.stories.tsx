import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentProps } from '@/utils';

import { TextArea as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/TextArea',
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
    TextAreaProps: {
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

export const TextArea: Story = {
  args: {
    label: 'label',
    onChange: fn() as () => void,
  },
};
export const TextAreaWithDefaultValue: Story = {
  args: {
    ...TextArea.args,
    defaultValue: 'default-value',
  },
};
