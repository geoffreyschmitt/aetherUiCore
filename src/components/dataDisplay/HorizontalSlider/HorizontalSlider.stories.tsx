import type { Meta, StoryObj } from '@storybook/react';

import { HorizontalSlider as Component } from './HorizontalSlider';
import { expect, within } from '@storybook/test';
import { SATComponentPropsWithChildren } from '@/aether-ui-core/src/utils';

const meta: Meta = {
  title: 'Components/dataDisplay/HorizontalSlider',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithChildren,
    itemList: {
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

export const HorizontalSlider: Story = {
  args: {
    children: Array.from({ length: 10 }, (_, index) => (
      <div
        key={index}
        style={{
          backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          minWidth: '300px',
          minHeight: '200px',
        }}
      >
        item {index}
      </div>
    )),
  },
};

export const EmptyHorizontalSliderWithFallback: Story = {
  args: {
    children: null,
    componentFallBack: defaultComponentFallBack,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const componentElement = canvas.queryByTestId('HorizontalSlider');
    const fallbackComponent = canvasElement.querySelector(
      '.fallback-component',
    );
    await expect(componentElement).toBeFalsy();
    await expect(fallbackComponent).toBeInTheDocument();
  },
};
