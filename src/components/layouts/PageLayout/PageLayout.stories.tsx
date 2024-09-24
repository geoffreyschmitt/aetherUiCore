import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';

import { PageLayout as Component } from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Layouts/PageLayout',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
    headerProps: {
      table: {
        category: 'Data',
      },
    },
    footerProps: {
      table: {
        category: 'Slots',
      },
    },
    HeaderComponent: {
      table: {
        category: 'Components',
      },
    },
    FooterComponent: {
      table: {
        category: 'Components',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const PageLayout: Story = {
  args: {
    headerProps: {
      children: (
        <div
          style={{
            background: 'tan',
            minHeight: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          PageLayout Header
        </div>
      ),
    },
    children: (
      <div
        style={{
          background: 'lightblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        PageLayout children
      </div>
    ),
    footerProps: {
      children: (
        <div
          style={{
            background: 'tan',
            minHeight: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          PageLayout footer
        </div>
      ),
    },
  },
};
