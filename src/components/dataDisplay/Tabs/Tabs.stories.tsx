import type { Meta, StoryObj } from '@storybook/react';
import { SATComponentProps } from '@/aether-ui/utils';

import { Tabs as Component } from './index';
import {
  tabListMock,
  tabListWithEmptyContentMock,
} from '@/aether-ui/components/dataDisplay/Tabs/mocks';
import { expect, within } from '@storybook/test';

const meta: Meta<typeof Component> = {
  title: 'Components/DataDisplay/Tabs',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    tabList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const defaultComponentFallBack = (
  <div className={'fallback-component'}>This is the fallback component</div>
);

export const Tabs: Story = {
  args: {
    initialSelectedTabIndex: 0,
    tabList: tabListMock,
  },
};
export const TabsListWithEmptyContent: Story = {
  args: {
    ...Tabs.args,
    tabList: tabListWithEmptyContentMock,
  },
};

export const EmptyTabsWithFallback: Story = {
  args: {
    tabList: [],
    componentFallBack: defaultComponentFallBack,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentElement = canvas.queryByTestId('Tabs');
    const fallbackComponent = canvasElement.querySelector(
      '.fallback-component',
    );
    await expect(componentElement).toBeFalsy();
    await expect(fallbackComponent).toBeInTheDocument();
  },
};

export const EmptyTabsWithoutFallback: Story = {
  args: {
    tabList: [],
  },
  play: async ({ canvasElement }) => {
    await expect(canvasElement).toBeEmptyDOMElement();
  },
};
