'use client';
import NextLink from 'next/link';
import styled from 'styled-components';

import { ButtonGlobalStyle } from './Button.global.styles';

export const RootElement = styled(NextLink)`
  text-decoration: none;
  ${ButtonGlobalStyle}
`;
