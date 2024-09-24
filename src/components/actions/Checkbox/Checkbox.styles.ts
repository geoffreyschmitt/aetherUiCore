'use client';
import styled from 'styled-components';

import { TCheckboxStyled } from './Checkbox.types';

export const RootElement = styled.label<TCheckboxStyled>`
  position: relative;
  cursor: pointer;
  display: flex;
  gap: var(--checkbox-gap, 8px);

  .checkbox__input {
    appearance: none;
    position: absolute;
  }

  .checkbox__input-visual {
    position: relative;
    display: inline-block;
    top: 0;
    left: 0;
    width: var(--checkbox-size, 18px);
    height: var(--checkbox-size, 18px);
    background: ${({ $backgroundColor }) =>
      $backgroundColor ?? 'var(--checkbox-default-background, white)'};
    border: var(--checkbox-border, 1px solid black);
    transition: all ease-in-out 0.3s;
  }

  .checkbox__input-visual::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 11px;
    border: solid
      ${({ $checkColor }) =>
        $checkColor ?? 'var(--checkbox-default-check-color, black)'};
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    display: none;
  }

  &.checkbox--is-checked {
    .checkbox__input-visual {
      background: ${({ $backgroundColor }) =>
        $backgroundColor ?? 'transparent'};
      &::after {
        display: block;
      }
    }
  }
`;
