import { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';
import { Header as Component } from './index';

const meta: Meta = {
  title: 'Components/Navigations/Header',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Header: Story = {
  args: {
    children: 'Header children',
  },
};
