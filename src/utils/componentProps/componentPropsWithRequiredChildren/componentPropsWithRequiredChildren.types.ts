import type { ReactNode } from 'react';

import type { TComponentProps } from '../componentProps';

export type TComponentPropsWithRequiredChildren = TComponentProps & {
  /**
   * Children of the component
   */
  children: ReactNode;
};
