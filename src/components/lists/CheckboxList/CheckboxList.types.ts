import { ComponentType, ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui-core/src/utils';
import { TCheckbox } from '@/aether-ui-core/src/components/actions/Checkbox';

type TCheckboxListItemList = TCheckbox[];

export type TCheckboxList = TComponentProps &
  Readonly<{
    itemList?: TCheckboxListItemList;
    componentFallBack?: ReactNode;
    CheckboxComponent?: ComponentType<TCheckbox>;
  }>;
