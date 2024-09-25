import { TComponentProps } from '@/aether-ui/utils';

export type TPagination = TComponentProps &
  Readonly<{
    /**
     * Current page index
     */
    currentPageIndex: number;
    /**
     * List of link displayed by the component.
     */
    totalPages: number;
    /**
     * Callback on page change
     */
    onPageChange: (pageNumber: number) => void;
  }>;
