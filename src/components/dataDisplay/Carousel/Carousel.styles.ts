'use client';
import styled from 'styled-components';

export const RootElement = styled.div`
  width: 100%;
  container-type: inline-size;
  display: flex;
  align-items: center;

  .carousel__additional-content {
    margin-top: var(--spacing-300-px);
    display: flex;
    align-items: center;
    gap: var(--spacing-300-px);
  }

  .carousel__scroll-button {
    cursor: pointer;
  }

  .carousel__scroll-button--next {
    order: 3;
  }

  .carousel__item-list {
    flex: 1 0 0;
    margin: 0;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    .carousel__item {
      scroll-snap-align: start;
      flex: 0 0 100%;
    }
  }
`;
