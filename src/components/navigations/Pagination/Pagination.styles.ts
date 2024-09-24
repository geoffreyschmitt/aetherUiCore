'use client';
import styled from 'styled-components';

export const RootElement = styled.nav`
  .pagination__item-list {
    display: flex;
    list-style: none;
  }
  .pagination__link {
    cursor: pointer;
    &.pagination__link--current {
    }
    &:focus {
    }
    &:hover {
    }
    &:disabled {
      cursor: default;
    }
  }
  .pagination__link--prev {
  }
  .pagination__link--next {
  }
  .pagination__link--page {
  }
`;
