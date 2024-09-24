import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { Select as Component } from './index';
import { selectOptionListMock } from './mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Select',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    id: 'select',
    optionList: selectOptionListMock,
  },
};
export const SelectWithLabel: Story = {
  args: {
    ...Select.args,
    label: 'label of the component',
  },
};
export const SelectWithAutoSelectFirstOption: Story = {
  args: {
    ...Select.args,
    autoSelectFirstOption: true,
  },
};
