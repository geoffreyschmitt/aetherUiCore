import { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import { SATComponentProps } from '@/utils';
import { Pagination as Component } from './index';
import { useState } from 'react';

const meta: Meta = {
  title: 'Components/Navigations/Pagination',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    totalPages: {
      table: {
        category: 'Data',
      },
    },
    currentPageIndex: {
      table: {
        category: 'Data',
      },
    },
    onPageChange: {
      table: {
        category: 'Events',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Pagination: Story = {
  args: {
    totalPages: 20,
    currentPageIndex: 2,
    onPageChange: fn(),
  },
  render: args => {
    const [currentPaginationPage, setCurrentPaginationPage] = useState(
      args.currentPageIndex,
    );

    return (
      <Component
        {...args}
        onPageChange={value => {
          args.onPageChange(value);
          setCurrentPaginationPage(value);
        }}
        currentPageIndex={currentPaginationPage}
      />
    );
  },
};
