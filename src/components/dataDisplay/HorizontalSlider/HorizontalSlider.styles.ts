'use client';
import styled from 'styled-components';

export const RootElement = styled.div`
  .horizontal-slider__item-list {
    display: flex;
    overflow-x: auto;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }
`;
