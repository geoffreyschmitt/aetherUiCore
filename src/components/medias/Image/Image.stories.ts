import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui/utils';

import { Image as Component } from './index';
import {
  imageMock,
  imageWithAltMock,
  imageWithSourcesMock,
} from '@/aether-ui/components/medias/Image/mocks';

const meta: Meta<typeof Component> = {
  title: 'Components/Medias/Image',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    image: {
      table: {
        category: 'Data',
      },
    },
    imageAlt: {
      table: {
        category: 'Accessibility',
      },
    },
    imageSources: {
      table: {
        category: 'Data',
      },
    },
    aspectRatio: {
      control: 'text',
      table: {
        category: 'Styles',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Image: Story = {
  args: imageMock,
};
export const ImageWithAlt: Story = {
  args: imageWithAltMock,
};
export const ImageWithSources: Story = {
  args: imageWithSourcesMock,
};
