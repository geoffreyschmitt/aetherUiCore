'use client';
import React, { ChangeEvent, forwardRef, useEffect, useState } from 'react';

import { classNames } from '@/utils';

import { RootElement } from './TextArea.styles';
import { TTextArea } from './TextArea.types';

export const TextArea = forwardRef<HTMLLabelElement, TTextArea>(
  (
    {
      className,
      name,
      label,
      defaultValue,
      onChange,
      TextAreaProps,
      hasError,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue ?? '');

    useEffect(() => {
      setValue(defaultValue ?? '');
    }, [defaultValue]);

    const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event?.currentTarget?.value);
      if (onChange) {
        onChange(event?.currentTarget?.value);
      }
    };

    return (
      <RootElement
        data-testid={'TextArea'}
        {...props}
        ref={ref}
        className={classNames(
          'text-area',
          {
            'text-area--is-filled': value as string,
            'text-area--has-error': hasError,
          },
          className,
        )}
      >
        <span className={'text-area__label'}>{label}</span>
        <textarea
          {...TextAreaProps}
          value={value}
          className={classNames(
            'text-area__text-area',
            TextAreaProps?.className,
          )}
          onChange={handleTextAreaChange}
          name={name}
        />
      </RootElement>
    );
  },
);
