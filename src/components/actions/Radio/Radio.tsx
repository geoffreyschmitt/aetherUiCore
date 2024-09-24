'use client';
import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { RootElement } from './Radio.styles';
import { TRadio } from './Radio.types';

export const Radio = ({
  className,
  children,
  defaultChecked,
  radioProps,
  value,
  name,
  ...props
}: TRadio) => {
  return (
    <RootElement
      data-testid={`Radio`}
      {...props}
      className={classNames('radio', className)}
    >
      <input
        {...radioProps}
        type="radio"
        className={classNames('radio__input', radioProps?.className)}
        value={value}
        defaultChecked={defaultChecked}
        name={name ?? radioProps?.name}
      />
      <div className="radio__input-visual" />
      <span className="radio__text">{children}</span>
    </RootElement>
  );
};
