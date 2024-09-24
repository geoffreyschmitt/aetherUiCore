'use client';
import styled from 'styled-components';

export const RootElement = styled.nav`
  .breadcrumb__item-list {
    display: flex;
  }

  .breadcrumb__item {
    list-style-type: none;
    display: flex;
    align-items: center;

    &:after {
      content: ' > ';
      display: inline-block;
    }
    &--is-home {
    }
    &--is-current {
      &:after {
        content: unset;
      }
    }
  }

  .breadcrumb__link {
    &--is-current {
      pointer-events: none;
      cursor: default;
    }
  }
`;
