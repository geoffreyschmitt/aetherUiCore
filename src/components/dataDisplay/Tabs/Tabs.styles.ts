import styled from 'styled-components';

export const RootElement = styled.div`
  .tabs__title-list {
    padding-left: 0;
    display: flex;
    width: 100%;
  }

  .tabs__title {
    cursor: pointer;
    background: transparent;
    transition: all 0.3s ease-in-out;
  }

  .tabs__content:not(.tabs__content--is-current) {
    display: none;
  }
`;
