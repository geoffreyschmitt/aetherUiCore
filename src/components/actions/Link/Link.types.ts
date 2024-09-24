import { AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';

import { TLinkCommonProps } from './Link.global.types';

export type TLink = AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  TLinkCommonProps;
