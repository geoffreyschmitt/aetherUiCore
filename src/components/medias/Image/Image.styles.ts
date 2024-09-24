'use client';
import styled from 'styled-components';
import { TImageStyles } from './Image.types';

export const RootElement = styled.div<TImageStyles>`
  position: relative;
  width: 100%;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio ?? '3/4'};
  .image__element {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  ${({ $imageUrl }) => `
  .image__background-image {
    background: url(${$imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  `}
`;
