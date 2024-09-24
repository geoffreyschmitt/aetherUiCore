'use client';
import styled from 'styled-components';
import { TMultiColumnLayoutStyled } from './MultiColumnLayout.types';

export const RootElement = styled.div<TMultiColumnLayoutStyled>`
  width: 100%;
  container-type: inline-size;

  .multi-column-layout__inner {
    display: flex;
    gap: var(--multi-column-layout, 0);
    .multi-column-layout__column {
      flex: 1 0 0;
    }
  }

  @container (width < ${({ $mobileThreshold }) =>
    $mobileThreshold ?? '960px'}) {
    .multi-column-layout__inner {
      flex-direction: column;
    }
  } ;;
`;
