import { HTMLAttributes } from 'react';

export type TComponentProps = HTMLAttributes<HTMLElement> &
  Readonly<{
    /**
     * Custom classname of the component
     */
    className?: string;
  }>;
