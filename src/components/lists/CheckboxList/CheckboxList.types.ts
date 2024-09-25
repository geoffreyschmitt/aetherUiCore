import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui/utils';
import { TCheckbox } from '@/aether-ui/components/actions/Checkbox';

type TCheckboxListItemList = TCheckbox[];

export type TCheckboxList = TComponentProps &
  Readonly<{
    itemList?: TCheckboxListItemList;
    componentFallBack?: ReactNode;
    CheckboxComponent?: ComponentType<TCheckbox>;
  }>;
