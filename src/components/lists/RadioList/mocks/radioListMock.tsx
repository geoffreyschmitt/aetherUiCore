import { TRadioList } from '@/components/lists/RadioList';

export const radioListMock: TRadioList['itemList'] = [
  {
    children: <div>Radio 1</div>,
    value: 'radio-1',
  },
  {
    children: <div>Radio 2 </div>,
    defaultChecked: true,
    value: 'radio-2',
  },
  {
    children: <div>Radio 3 </div>,
    value: 'radio-3',
  },
  {
    children: <div>Radio 4 </div>,
    value: 'radio-4',
  },
  {
    children: <div>Radio 5 </div>,
    value: 'radio-5',
  },
];
