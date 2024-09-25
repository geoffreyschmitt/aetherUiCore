import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui/utils';

import { Container as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Layouts/Container',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
    tag: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Container: Story = {
  args: {
    children: (
      <div
        style={{
          background: 'tan',
          minHeight: '300px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Container children
      </div>
    ),
  },
};
