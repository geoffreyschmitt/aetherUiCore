import { Meta, StoryObj } from '@storybook/react';
import { Drawer as Component, EDrawerPosition } from './index';
import { Dialog } from '@/aether-ui-core/src/components/overlays/Dialog/Dialog.stories';
import { dialogEventChannel } from '@/aether-ui-core/src/eventChannels';

const meta: Meta = {
  title: 'Components/Overlays/Drawer',
  component: Component,
  argTypes: {
    ...Dialog.argTypes,
    position: {
      options: Object.values(EDrawerPosition),
      control: { type: 'select' as const },
      table: {
        category: 'Data',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const drawerId = 'drawerId';
const openDrawer = () => {
  dialogEventChannel.emit('openDialog', { id: drawerId });
};

export const Drawer: Story = {
  args: {
    id: drawerId,
    children: 'drawerContent',
    closeButtonContentSlot: 'Close here',
  },
  render: args => {
    return (
      <>
        <button onClick={openDrawer}>Open drawer</button>
        <Component {...args} />
      </>
    );
  },
};
