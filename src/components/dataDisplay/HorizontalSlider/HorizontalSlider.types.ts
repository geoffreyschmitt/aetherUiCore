import { ReactNode } from 'react';
import { TComponentPropsWithChildren } from '@/utils';

export type THorizontalSlider = TComponentPropsWithChildren &
  Readonly<{
    /**
     * fallback displayed when itemList is empty
     */
    componentFallBack?: ReactNode;
  }>;
