import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { Table as Component } from './Table';

const meta: Meta<typeof Component> = {
  title: 'Components/DataDisplay/Table',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    headerList: {
      table: {
        category: 'Data',
      },
    },
    rowList: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Table: Story = {
  args: {
    headerList: ['ID', 'Name', 'Email', 'Role'],
    rowList: [
      {
        ID: '1',
        Name: 'Jon Doe',
        Email: 'jon@example.com',
        Role: 'Admin',
      },
      {
        ID: '2',
        Name: 'Jane Doe',
        Email: 'jane@example.com',
        Role: 'User',
      },
      {
        ID: '3',
        Name: 'Jimmy Doe',
        Email: 'jimmy@example.com',
        Role: 'Guest',
      },
    ],
  },
};
