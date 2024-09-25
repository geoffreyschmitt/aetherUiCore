import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { BadgeList as Component } from './BadgeList';
import { badgeListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Lists/BadgeList',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    itemList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const BadgeList: Story = {
  args: {
    itemList: badgeListMock,
  },
};
