import React, { FormEvent, ReactNode } from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { RootElement } from './Form.styles';
import {
  TCheckboxFormEntry,
  TForm,
  TFormEntry,
  TInputFormEntry,
  TRadioFormEntry,
  TRadioListFormEntry,
  TSelectFormEntry,
  TTextAreaFormEntry,
} from './Form.types';
import { Input } from '@/aether-ui-core/src/components/actions/Input';
import { Radio } from '@/aether-ui-core/src/components/actions/Radio';
import { Checkbox } from '@/aether-ui-core/src/components/actions/Checkbox';
import { Select } from '@/aether-ui-core/src/components/actions/Select';
import { RadioList } from '@/aether-ui-core/src/components/lists/RadioList';
import { formEventChannel } from '@/aether-ui-core/src/eventChannels';
import { Button } from '@/aether-ui-core/src/components/actions';
import { TextArea } from '@/aether-ui-core/src/components/actions/TextArea';

export const Form = ({
  className,
  id,
  formEntryList,
  InputComponent = Input,
  TextAreaComponent = TextArea,
  RadioComponent = Radio,
  CheckboxComponent = Checkbox,
  SelectComponent = Select,
  RadioListComponent = RadioList,
  ButtonComponent = Button,
  buttonCtaProps,
  beforeFormContentSlots,
  beforeFormSubmitCtaSlots,
  afterFormContentSlots,
  ...props
}: TForm) => {
  const renderFormEntry: (formEntry: TFormEntry) => ReactNode = ({
    componentType,
    ...formEntryProps
  }: TFormEntry) => {
    switch (componentType) {
      case 'input':
        return (
          <InputComponent
            {...(formEntryProps as TInputFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--input',
              formEntryProps.className,
            )}
          />
        );
      case 'textArea':
        return (
          <TextAreaComponent
            {...(formEntryProps as TTextAreaFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--text-area',
              formEntryProps.className,
            )}
          />
        );
      case 'radio':
        return (
          <RadioComponent
            {...(formEntryProps as TRadioFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--radio',
              formEntryProps.className,
            )}
          />
        );
      case 'checkbox':
        return (
          <CheckboxComponent
            {...(formEntryProps as TCheckboxFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--checkbox',
              formEntryProps.className,
            )}
          />
        );
      case 'select':
        return (
          <SelectComponent
            {...(formEntryProps as TSelectFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--select',
              formEntryProps.className,
            )}
          />
        );
      case 'radioList':
        return (
          <RadioListComponent
            {...(formEntryProps as TRadioListFormEntry)}
            className={classNames(
              'form__form-entry',
              'form__form-entry--radio-list',
              formEntryProps.className,
            )}
          />
        );
      default:
        return null;
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formEventChannel.emit('submitForm', { id, formData });
  };

  return (
    <RootElement
      data-testid={`Form`}
      {...props}
      id={id}
      className={classNames('form', className)}
      onSubmit={handleSubmit}
    >
      {beforeFormContentSlots}
      <div className="form__form-entry-list">
        {formEntryList.map(formEntry => renderFormEntry(formEntry))}
      </div>
      {beforeFormSubmitCtaSlots}
      <ButtonComponent
        {...buttonCtaProps}
        className={'form__submit-cta'}
        type={'submit'}
      />
      {afterFormContentSlots}
    </RootElement>
  );
};
