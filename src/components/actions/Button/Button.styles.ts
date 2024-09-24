'use client';
import styled from 'styled-components';

import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled.button`
  ${ButtonGlobalStyle}

  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
  }
`;
