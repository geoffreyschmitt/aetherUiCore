import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui/utils';

import { Typography as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Miscellaneous/Typography',
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

export const Typography: Story = {
  args: {
    children: 'Typography children',
  },
};
