import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/utils';

import { Badge as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/DataDisplay/Badge',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
    tag: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Badge: Story = {
  args: {
    children: '20% OFF',
  },
};
