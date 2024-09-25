import { TComponentPropsWithRequiredChildren } from '@/aether-ui/utils';
import { ComponentType } from 'react';
import { THeader } from '@/aether-ui/components/navigations/Header';
import { TFooter } from '@/aether-ui/components/navigations/Footer';

export type TPageLayout = TComponentPropsWithRequiredChildren &
  Readonly<{
    HeaderComponent?: ComponentType<THeader>;
    FooterComponent?: ComponentType<TFooter>;
    headerProps?: THeader;
    footerProps?: TFooter;
  }>;
