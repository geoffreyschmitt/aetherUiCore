import { Meta, StoryObj } from '@storybook/react';

import { SATComponentPropsWithRequiredChildren } from '@/aether-ui/utils';
import { Dialog as Component } from './index';
import { dialogEventChannel } from '@/aether-ui/eventChannels';

const meta: Meta = {
  title: 'Components/Overlays/Dialog',
  component: Component,
  argTypes: {
    ...SATComponentPropsWithRequiredChildren,
    id: {
      table: {
        category: 'Data',
      },
    },
    closeButtonContentSlot: {
      table: {
        category: 'Slots',
      },
    },
    closeButtonAriaLabel: {
      table: {
        category: 'Accessibility',
      },
    },
    isModal: {
      table: {
        category: 'Data',
      },
    },
    ButtonComponent: {
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const dialogId = 'dialogId';
const openDialog = () => {
  dialogEventChannel.emit('openDialog', { id: dialogId });
};

export const Dialog: Story = {
  args: {
    id: dialogId,
    children: 'dialogContent',
    closeButtonContentSlot: 'Close here',
  },
  render: args => {
    return (
      <>
        <button onClick={openDialog}>Open dialog</button>
        <Component {...args} />
      </>
    );
  },
};

export const DialogAsModal: Story = {
  args: {
    ...Dialog.args,
    isModal: true,
  },
  render: args => {
    return (
      <>
        <button onClick={openDialog}>Open modal</button>
        <Component {...args} />
      </>
    );
  },
};
