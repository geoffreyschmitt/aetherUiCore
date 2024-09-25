import { TComponentPropsWithRequiredChildren } from '@/aether-ui/utils';

export type TBadge = TComponentPropsWithRequiredChildren &
  Readonly<{
    /**
     * Tag of the root element of the component in case there is a customisation need.
     */
    tag?: keyof HTMLElementTagNameMap;
  }>;
