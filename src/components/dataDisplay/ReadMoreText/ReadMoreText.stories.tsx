import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/utils';

import { ReadMoreText as Component } from './ReadMoreText';

const meta: Meta<typeof Component> = {
  title: 'Components/dataDisplay/ReadMoreText',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    id: {
      table: {
        category: 'Data',
      },
    },
    text: {
      table: {
        category: 'Data',
      },
    },
    numberOfLineToDisplayWhenTruncate: {
      table: {
        category: 'Styles',
      },
    },
    buttonContentWhenOpenSlot: {
      table: {
        category: 'Slots',
      },
    },
    buttonContentWhenCloseSlot: {
      table: {
        category: 'Slots',
      },
    },
    ButtonComponent: {
      table: {
        category: 'Components',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const ReadMoreText: Story = {
  args: {
    id: 'readMoreText',
    text: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          fringilla leo, non dictum arcu. Praesent ac consequat erat. Praesent
          nec blandit libero. Vestibulum lacinia porttitor nunc, et luctus nisl
          posuere id. Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt,
          elit et pretium elementum, ipsum est ullamcorper lectus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla leo,
          non dictum arcu. Praesent ac consequat erat. Praesent nec blandit
          libero. Vestibulum lacinia porttitor nunc, et luctus nisl posuere id.
          Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt, elit et
          pretium elementum, ipsum est ullamcorper lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          fringilla leo, non dictum arcu. Praesent ac consequat erat. Praesent
          nec blandit libero. Vestibulum lacinia porttitor nunc, et luctus nisl
          posuere id. Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt,
          elit et pretium elementum, ipsum est ullamcorper lectus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla leo,
          non dictum arcu. Praesent ac consequat erat. Praesent nec blandit
          libero. Vestibulum lacinia porttitor nunc, et luctus nisl posuere id.
          Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt, elit et
          pretium elementum, ipsum est ullamcorper lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          fringilla leo, non dictum arcu. Praesent ac consequat erat. Praesent
          nec blandit libero. Vestibulum lacinia porttitor nunc, et luctus nisl
          posuere id. Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt,
          elit et pretium elementum, ipsum est ullamcorper lectus. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed vitae fringilla leo,
          non dictum arcu. Praesent ac consequat erat. Praesent nec blandit
          libero. Vestibulum lacinia porttitor nunc, et luctus nisl posuere id.
          Nulla facilisi. Quisque ac nunc metus. Vivamus tincidunt, elit et
          pretium elementum, ipsum est ullamcorper lectus.
        </p>
      </div>
    ),
    buttonContentWhenOpenSlot: 'Read less',
    buttonContentWhenCloseSlot: 'Read more',
  },
};
