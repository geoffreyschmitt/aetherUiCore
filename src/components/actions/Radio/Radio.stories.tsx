import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SATComponentProps } from '@/utils';

import { Radio as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Radio',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Radio: Story = {
  args: {
    children: 'Couleur Nectarine',
    defaultChecked: false,
    onChange: fn(),
  },
};

export const RadioDefaultChecked: Story = {
  args: {
    ...Radio.args,
    defaultChecked: true,
  },
};
