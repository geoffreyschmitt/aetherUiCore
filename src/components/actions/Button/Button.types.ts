import { ButtonHTMLAttributes } from 'react';

import { TButtonCommonProps } from './Button.global.types';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement> &
  TButtonCommonProps;
