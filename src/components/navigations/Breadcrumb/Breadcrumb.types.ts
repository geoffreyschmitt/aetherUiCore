import { TComponentProps } from '@/utils';

export type TBreadcrumb = TComponentProps &
  Readonly<{
    breadcrumbList: {
      name: string;
      url: string;
    }[];
  }>;
