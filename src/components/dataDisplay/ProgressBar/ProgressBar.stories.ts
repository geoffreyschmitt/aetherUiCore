import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { ProgressBar as Component } from './ProgressBar';

const meta: Meta<typeof Component> = {
  title: 'Components/dataDisplay/ProgressBar',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    widthPercentageOfProgressBar: {
      table: {
        category: 'Styles',
      },
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ProgressBar: Story = {
  args: {
    widthPercentageOfProgressBar: 30,
  },
};
