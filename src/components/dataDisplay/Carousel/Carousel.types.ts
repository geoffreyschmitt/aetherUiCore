import { ReactNode } from 'react';
import { TComponentProps } from '@/aether-ui-core/src/utils';

export type TCarousel = TComponentProps &
  Readonly<{
    /**
     * list of slide to display
     */
    itemList: ReactNode[];
    /**
     * Previous button content
     */
    previousButtonContentSlot: ReactNode;
    /**
     * Next button content
     */
    nextButtonContentSlot: ReactNode;
    /**
     * fallback displayed when itemList is empty
     */
    componentFallBack?: ReactNode;
  }>;
