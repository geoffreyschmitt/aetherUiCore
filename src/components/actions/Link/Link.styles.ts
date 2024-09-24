'use client';
import NextLink from 'next/link';
import styled from 'styled-components';

import { LinkGlobalStyle } from './Link.global.styles';

export const RootElement = styled(NextLink)`
  text-decoration: none;
  ${LinkGlobalStyle}
`;
