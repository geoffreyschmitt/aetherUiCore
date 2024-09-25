import type { ReactNode } from 'react';

import { TComponentProps } from '@/utils';

export type TTab = Readonly<{
  /**
   * Title of the tab
   */
  id: string | number;
  /**
   * Title of the tab
   */
  title: ReactNode;
  /**
   * content of the tab
   */
  content?: ReactNode;
}>;

export type TTabs = TComponentProps &
  Readonly<{
    /**
     * Tab list data
     */
    tabList?: TTab[];
    /**
     * Current open tab index
     */
    initialSelectedTabIndex?: number;
    /**
     * Callback function on tab change.
     */
    onTabChange?: (newSelectedTabIndex: number) => void;
    /**
     * fallback displayed when tablist is empty
     */
    componentFallBack?: ReactNode;
  }>;
