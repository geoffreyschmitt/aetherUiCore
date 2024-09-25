import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { MultiColumnLayout as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Layouts/MultiColumnLayout',
  component: Component,
  argTypes: {
    ...SATComponentProps,
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MultiColumnLayout: Story = {
  args: {
    columnList: [
      <span>column one</span>,
      <div
        style={{
          background: 'tan',
        }}
      >
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
        <p>column two</p>
      </div>,
      <span>column three</span>,
    ],
  },
};
