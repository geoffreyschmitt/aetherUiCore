import { InputHTMLAttributes } from 'react';

import { TComponentPropsWithChildren } from '@/utils';

export type TRadio = TComponentPropsWithChildren &
  Readonly<{
    /**
     * The value of the radio
     */
    value?: string;
    /**
     * The name of the radio
     */
    name?: string;
    /**
     * Props that can be passed to a checkbox html element
     */
    radioProps?: InputHTMLAttributes<HTMLInputElement>;
  }>;
