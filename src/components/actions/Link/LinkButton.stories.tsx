import type { Meta, StoryObj } from '@storybook/react';

import { LinkArgs, SATLink } from './Link.global.storybook';
import { LinkButton as Component } from './index';

const meta: Meta = {
  title: 'Components/Actions/LinkButton',
  component: Component,
  argTypes: {
    ...SATLink,
    disabled: {
      table: {
        category: 'Data',
      },
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const LinkButton: Story = {
  args: LinkArgs,
};
