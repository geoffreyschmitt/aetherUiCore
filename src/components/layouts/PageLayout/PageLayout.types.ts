import { TComponentPropsWithRequiredChildren } from '@/utils';
import { ComponentType } from 'react';
import { THeader } from '@/components/navigations/Header';
import { TFooter } from '@/components/navigations/Footer';

export type TPageLayout = TComponentPropsWithRequiredChildren &
  Readonly<{
    HeaderComponent?: ComponentType<THeader>;
    FooterComponent?: ComponentType<TFooter>;
    headerProps?: THeader;
    footerProps?: TFooter;
  }>;
