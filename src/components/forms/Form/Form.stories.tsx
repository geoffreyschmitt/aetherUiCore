import type { Meta, StoryObj } from '@storybook/react';

import { SATComponentProps } from '@/aether-ui-core/src/utils';

import { Form as Component } from './Form';
import { formEntryListMock } from './mocks';
import { formEventChannel } from '@/aether-ui-core/src/eventChannels';
import { expect, userEvent, fn, within } from '@storybook/test';

const meta: Meta<typeof Component> = {
  title: 'Components/Forms/Form',
  component: Component,
  argTypes: {
    ...SATComponentProps,
    formEntryList: {
      table: {
        category: 'Data',
      },
    },
    InputComponent: {
      table: {
        category: 'Component',
      },
    },
    RadioComponent: {
      table: {
        category: 'Component',
      },
    },
    CheckboxComponent: {
      table: {
        category: 'Component',
      },
    },
    SelectComponent: {
      table: {
        category: 'Component',
      },
    },
    RadioListComponent: {
      table: {
        category: 'Component',
      },
    },
    buttonCtaProps: {
      table: {
        category: 'Component',
      },
    },
    beforeFormContentSlots: {
      table: {
        category: 'Slots',
      },
    },
    beforeFormSubmitCtaSlots: {
      table: {
        category: 'Slots',
      },
    },
    afterFormContentSlots: {
      table: {
        category: 'Slots',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Form: Story = {
  args: {
    id: 'formId',
    formEntryList: formEntryListMock,
    buttonCtaProps: { children: 'Submit form' },
  },
};
export const FormWithInteraction: Story = {
  args: Form.args,
  play: async ({ canvasElement }) => {
    const onSubmitSpy = fn();

    formEventChannel.on('submitForm', onSubmitSpy);

    const canvas = within(canvasElement);

    const componentElement = canvas.getByTestId('Form');
    const firstNameInputElement = componentElement.querySelector(
      '.form-entry--first-name',
    ) as HTMLElement;
    const lastNameInputElement = componentElement.querySelector(
      '.form-entry--last-name',
    ) as HTMLElement;
    const privacyCheckboxElement = componentElement.querySelector(
      '.form-entry--privacy-policy',
    ) as HTMLElement;
    const singleRadio2Element = componentElement.querySelector(
      '.form-entry--single-radio-2',
    ) as HTMLElement;
    const optOutCheckboxElement = componentElement.querySelector(
      '.form-entry--opt-out',
    ) as HTMLElement;
    const submitButtonElement = canvas.getByTestId('Button') as HTMLElement;

    await userEvent.type(firstNameInputElement, 'firstName', {
      delay: 100,
    });
    await userEvent.type(lastNameInputElement, 'lastName', {
      delay: 100,
    });
    await userEvent.click(privacyCheckboxElement, {
      delay: 100,
    });
    await userEvent.click(singleRadio2Element, {
      delay: 100,
    });
    await userEvent.click(optOutCheckboxElement, {
      delay: 100,
    });

    await userEvent.click(submitButtonElement);

    let formData = new FormData(componentElement as HTMLFormElement);

    expect(onSubmitSpy).toHaveBeenCalledWith({
      id: 'formId',
      formData,
    });

    expect(formData.get('first-name')).toBe('firstName');
    expect(formData.get('last-name')).toBe('lastName');
    expect(formData.get('terms-and-conditions')).toBeFalsy;
    expect(formData.get('privacy-policy')).toBeTruthy;
    expect(formData.get('single-radio-1')).toBeFalsy;
    expect(formData.get('select-time-segment')).toBe('value');
    expect(formData.get('single-radio-2')).toBeTruthy;
    expect(formData.get('select-music-genre')).toBe('value 3');
    expect(formData.get('updates')).toBe('opt-out');
  },
};
