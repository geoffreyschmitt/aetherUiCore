import { TForm } from '@/components/forms/Form';
import { selectOptionListMock } from '@/components/actions/Select/mocks';

export const formEntryListMock: TForm['formEntryList'] = [
  {
    componentType: 'input',
    label: 'First name',
    className: 'form-entry--first-name',
    name: 'first-name',
  },
  {
    componentType: 'input',
    label: 'Last name',
    className: 'form-entry--last-name',
    name: 'last-name',
  },
  {
    componentType: 'checkbox',
    className: 'form-entry--terms-and-conditions',
    children: 'I agree to the terms and conditions',
    name: 'terms-and-conditions',
  },
  {
    componentType: 'checkbox',
    className: 'form-entry--privacy-policy',
    children: 'I agree to the privacy policy',
    name: 'privacy-policy',
  },
  {
    componentType: 'radio',
    className: 'form-entry--single-radio-1',
    children: 'Single radio 1',
    name: 'single-radio-1',
  },
  {
    id: 'select-1',
    name: 'select-time-segment',
    componentType: 'select',
    optionList: selectOptionListMock,
    defaultValue: selectOptionListMock[0].value,
    className: 'form-entry--select-time-segment',
    optionListAriaLabel: 'Select Time Segment',
  },
  {
    componentType: 'radio',
    children: 'Single radio 2',
    className: 'form-entry--single-radio-2',
    name: 'single-radio-2',
  },
  {
    id: 'select-2',
    name: 'select-music-genre',
    componentType: 'select',
    optionList: selectOptionListMock,
    defaultValue: selectOptionListMock[2].value,
    className: 'form-entry--select-music-genre',
    optionListAriaLabel: 'Select Music Genre',
  },
  {
    componentType: 'radioList',
    radioName: 'updates',
    className: 'form-entry--radio-list',
    itemList: [
      {
        children: 'Opt in for updates',
        defaultChecked: true,
        value: 'opt-in',
        className: 'form-entry--opt-in',
      },
      {
        children: 'Opt out for updates',
        value: 'opt-out',
        className: 'form-entry--opt-out',
      },
    ],
  },
  {
    componentType: 'textArea',
    label: 'Message',
    className: 'form-entry--message',
    name: 'message',
  },
];
