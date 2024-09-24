import type { Meta, StoryObj } from '@storybook/react';

import {
  ButtonArgs,
  decoratorButton,
  SATButton,
} from './Button.global.storybook';

import { Button as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Actions/Button',
  component: Component,
  argTypes: {
    ...SATButton,
    disabled: {
      table: {
        category: 'Data',
      },
    },
    isLoading: {
      table: {
        category: 'Data',
      },
    },
  },
  decorators: decoratorButton,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Button: Story = {
  args: ButtonArgs,
};

export const ButtonDisabled: Story = {
  args: {
    ...ButtonArgs,
    disabled: true,
  },
};

export const ButtonIsLoading: Story = {
  args: {
    ...ButtonArgs,
    isLoading: true,
  },
};
