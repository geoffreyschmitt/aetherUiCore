'use client';
import styled from 'styled-components';

import { LinkGlobalStyle } from './Link.global.styles';
import { TLinkCommonProps } from './Link.global.types';

export const RootElement = styled.button<TLinkCommonProps>`
  background: transparent;
  border: none;

  ${LinkGlobalStyle}

  &[disabled] {
    pointer-events: none;
  }
`;
