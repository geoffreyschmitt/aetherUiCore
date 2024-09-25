import { TextareaHTMLAttributes, ReactNode, HTMLAttributes } from 'react';

import { TComponentProps } from '@/aether-ui/utils';

export type TTextArea = TComponentProps &
  HTMLAttributes<HTMLLabelElement> &
  Readonly<{
    name: string;
    label: ReactNode;
    defaultValue?: TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
    hasError?: boolean;
    onChange?: (value: string) => void;
    TextAreaProps?: Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      'onChange'
    >;
  }>;
