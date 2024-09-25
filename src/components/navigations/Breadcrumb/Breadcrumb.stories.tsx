import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui/utils';

import { Breadcrumb as Component } from './Breadcrumb';
import { breadcrumbItemListMock } from '@/aether-ui/components/navigations/Breadcrumb/mocks/breadcrumbItemList';

const meta: Meta<typeof Component> = {
  title: 'Components/Navigations/Breadcrumb',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    breadcrumbList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Breadcrumb: Story = {
  args: {
    breadcrumbList: breadcrumbItemListMock,
  },
};
export const BreadcrumbWithEmptyItemList: Story = {
  args: {
    breadcrumbList: [],
  },
};
