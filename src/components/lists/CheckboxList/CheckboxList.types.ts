import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/utils';
import { TCheckbox } from '@/components/actions/Checkbox';

type TCheckboxListItemList = TCheckbox[];

export type TCheckboxList = TComponentProps &
  Readonly<{
    itemList?: TCheckboxListItemList;
    componentFallBack?: ReactNode;
    CheckboxComponent?: ComponentType<TCheckbox>;
  }>;
