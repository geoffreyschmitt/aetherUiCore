import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui/utils';

import { EIconVariant, Icon as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Miscellaneous/Icon',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    variant: {
      options: Object.values(EIconVariant),
      control: { type: 'select' },
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Icon: Story = {
  args: {
    variant: EIconVariant.CHEVRON,
  },
};
