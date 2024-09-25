import { TComponentProps } from '@/aether-ui/utils';
import { ComponentType, ReactNode } from 'react';
import { TInput } from '@/aether-ui/components/actions/Input';
import { TCheckbox } from '@/aether-ui/components/actions/Checkbox';
import { TRadio } from '@/aether-ui/components/actions/Radio';
import { TSelect } from '@/aether-ui/components/actions/Select';
import { TRadioList } from '@/aether-ui/components/lists/RadioList';
import { TButton } from '@/aether-ui/components/actions';
import { TTextArea } from '@/aether-ui/components/actions/TextArea';

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
