import { ButtonHTMLAttributes } from 'react';

import { TLinkCommonProps } from './Link.global.types';

export type TLinkButton = ButtonHTMLAttributes<HTMLButtonElement> &
  TLinkCommonProps;
