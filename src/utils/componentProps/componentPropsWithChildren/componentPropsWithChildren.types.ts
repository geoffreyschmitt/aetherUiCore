import type { ReactNode } from 'react';

import type { TComponentProps } from '../componentProps';

export type TComponentPropsWithChildren = TComponentProps &
  Readonly<{
    /**
     * Children of the component
     */
    children?: ReactNode;
  }>;
