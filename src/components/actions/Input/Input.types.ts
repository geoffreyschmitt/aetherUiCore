import { InputHTMLAttributes, ReactNode } from 'react';

import { TComponentProps } from '@/utils';

export type TInput = TComponentProps &
  InputHTMLAttributes<HTMLLabelElement> &
  Readonly<{
    name: string;
    label: ReactNode;
    defaultValue?: InputHTMLAttributes<HTMLInputElement>['value'];
    hasError?: boolean;
    onChange?: (value: string) => void;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;
  }>;
