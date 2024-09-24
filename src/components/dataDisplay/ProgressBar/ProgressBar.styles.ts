'use client';
import styled from 'styled-components';

import { TProgressBarStyled } from './ProgressBar.types';

export const RootElement = styled.div<TProgressBarStyled>`
  position: relative;
  width: 100%;
  height: var(--progress-bar-height, 4px);
  background: var(--progress-bar-background, hsla(240 5.9% 10% / 0.2));
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: ${({ $widthPercentageOfProgressBar }) =>
      $widthPercentageOfProgressBar ?? '0%'};
    max-width: 100%;
    background: var(--progress-bar-current-progress-background, black);
    transition: all 0.3s ease-in-out;
  }
`;
