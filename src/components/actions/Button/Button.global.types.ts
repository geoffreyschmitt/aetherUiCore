import { TComponentPropsWithRequiredChildren } from '@/aether-ui/utils';

export type TButtonCommonProps = TComponentPropsWithRequiredChildren &
  Readonly<{
    /**
     * Flag to indicate that the button is loading
     */
    isLoading?: boolean;
  }>;
