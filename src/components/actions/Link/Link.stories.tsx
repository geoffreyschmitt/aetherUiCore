import type { Meta, StoryObj } from '@storybook/react';

import { LinkArgs, SATLink } from './Link.global.storybook';
import { Link as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Link',
  component: Component,
  argTypes: {
    ...SATLink,
    href: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Link: Story = {
  args: {
    ...LinkArgs,
    href: 'LinkHref',
  },
};
