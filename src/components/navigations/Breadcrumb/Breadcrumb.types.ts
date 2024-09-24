import { TComponentProps } from '@/aether-ui-core/src/utils';

export type TBreadcrumb = TComponentProps &
  Readonly<{
    breadcrumbList: {
      name: string;
      url: string;
    }[];
  }>;
