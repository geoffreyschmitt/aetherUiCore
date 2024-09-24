'use client';
import styled from 'styled-components';
import { TReadMoreTextStyled } from './ReadMoreText.types';

export const RootElement = styled.div<TReadMoreTextStyled>`
  .read-more-text__content--is-truncated {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${({ $numberOfLineToDisplayWhenTruncate }) =>
      $numberOfLineToDisplayWhenTruncate ?? '3'};
    overflow: hidden;
  }
`;
