import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

import { TButtonCommonProps } from './Button.global.types';

export type TButtonLink = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  TButtonCommonProps;
