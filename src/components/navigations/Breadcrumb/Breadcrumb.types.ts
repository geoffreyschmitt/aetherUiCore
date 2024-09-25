import { TComponentProps } from '@/aether-ui/utils';

export type TBreadcrumb = TComponentProps &
  Readonly<{
    breadcrumbList: {
      name: string;
      url: string;
    }[];
  }>;
