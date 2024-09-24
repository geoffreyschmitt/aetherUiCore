import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { RadioList as Component } from './RadioList';
import { radioListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Lists/RadioList',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    itemList: {
      table: {
        category: 'Data',
      },
    },
    radioName: {
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

export const RadioList: Story = {
  args: {
    itemList: radioListMock,
    radioName: 'radioName',
  },
};

export const RadioListWithEmptyItemList: Story = {
  args: {
    itemList: [],
    componentFallBack: defaultComponentFallBack,
  },
};
