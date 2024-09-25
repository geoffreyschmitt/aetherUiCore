import { TComponentProps } from '@/utils';
import { ComponentType, ReactNode } from 'react';
import { TInput } from '@/components/actions/Input';
import { TCheckbox } from '@/components/actions/Checkbox';
import { TRadio } from '@/components/actions/Radio';
import { TSelect } from '@/components/actions/Select';
import { TRadioList } from '@/components/lists/RadioList';
import { TButton } from '@/components/actions';
import { TTextArea } from '@/components/actions/TextArea';

export type TInputFormEntry = { componentType: 'input' } & TInput;
export type TTextAreaFormEntry = { componentType: 'textArea' } & TTextArea;
export type TCheckboxFormEntry = { componentType: 'checkbox' } & TCheckbox;
export type TRadioFormEntry = { componentType: 'radio' } & TRadio;
export type TRadioListFormEntry = { componentType: 'radioList' } & TRadioList;
export type TSelectFormEntry = { componentType: 'select' } & TSelect;

export type TFormEntry =
  | TInputFormEntry
  | TTextAreaFormEntry
  | TCheckboxFormEntry
  | TRadioFormEntry
  | TRadioListFormEntry
  | TSelectFormEntry;

export type TForm = TComponentProps &
  Readonly<{
    id: string;
    formEntryList: TFormEntry[];
    InputComponent?: ComponentType<TInput>;
    TextAreaComponent?: ComponentType<TTextArea>;
    CheckboxComponent?: ComponentType<TCheckbox>;
    RadioComponent?: ComponentType<TRadio>;
    RadioListComponent?: ComponentType<TRadioList>;
    SelectComponent?: ComponentType<TSelect>;
    ButtonComponent?: ComponentType<TButton>;
    buttonCtaProps: TButton;
    beforeFormContentSlots?: ReactNode;
    beforeFormSubmitCtaSlots?: ReactNode;
    afterFormContentSlots?: ReactNode;
  }>;
