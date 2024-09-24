import { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';
import { Footer as Component } from './index';

const meta: Meta = {
  title: 'Components/Navigations/Footer',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Footer: Story = {
  args: {
    children: 'Footer children',
  },
};
