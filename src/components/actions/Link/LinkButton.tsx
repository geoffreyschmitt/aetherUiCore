import React, { ForwardedRef, forwardRef } from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { RootElement } from './LinkButton.styles';
import { TLinkButton } from './LinkButton.types';

export const LinkButton = forwardRef<
  HTMLButtonElement,
  TLinkButton & { ref?: ForwardedRef<HTMLButtonElement> }
>(({ className, children, disabled, ...props }, ref) => {
  return (
    <RootElement
      data-testid={'LinkButton'}
      {...props}
      className={classNames(
        'link',
        { 'link--is-disabled': disabled },
        className,
      )}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </RootElement>
  );
});
