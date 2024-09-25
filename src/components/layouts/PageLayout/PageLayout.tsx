import React from 'react';

import { classNames } from '@/aether-ui/utils';

import { RootElement } from './PageLayout.styles';
import { TPageLayout } from './PageLayout.types';
import { Header } from '@/aether-ui/components/navigations/Header';
import { Footer } from '@/aether-ui/components/navigations/Footer';

export const PageLayout = ({
  className,
  children,
  HeaderComponent = Header,
  FooterComponent = Footer,
  headerProps,
  footerProps,
  ...props
}: TPageLayout) => (
  <RootElement
    data-testid={'PageLayout'}
    {...props}
    className={classNames('page-layout', className)}
  >
    <HeaderComponent
      {...headerProps}
      className={classNames('page-layout__header', headerProps?.className)}
    />
    <main className={'page-layout__main'}>{children}</main>
    <FooterComponent
      {...footerProps}
      className={classNames('page-layout__footer', footerProps?.className)}
    />
  </RootElement>
);
