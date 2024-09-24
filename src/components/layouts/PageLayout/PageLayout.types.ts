import { TComponentPropsWithRequiredChildren } from '@/aether-ui-core/src/utils';
import { ComponentType } from 'react';
import { THeader } from '@/aether-ui-core/src/components/navigations/Header';
import { TFooter } from '@/aether-ui-core/src/components/navigations/Footer';

export type TPageLayout = TComponentPropsWithRequiredChildren &
  Readonly<{
    HeaderComponent?: ComponentType<THeader>;
    FooterComponent?: ComponentType<TFooter>;
    headerProps?: THeader;
    footerProps?: TFooter;
  }>;
