import styled from 'styled-components';

export const RootElement = styled.div`
  position: relative;
  width: 100%;

  .select__select {
    display: none;
  }

  .select__trigger {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .select__value-icon {
    margin-left: auto;
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }

  .select__option-list,
  .select__option {
    width: 100%;
  }

  .select__option-list {
    display: none;
  }

  .select__option {
    background-color: var(--select-option-background-color, white);
    &:hover,
    &--focused {
      background-color: var(
        --select-option-background-interacting-color,
        lightblue
      );
    }
  }

  &.select__is-open {
    .select__option-list {
      display: block;
      position: absolute;
      top: 100%;
      z-index: 10;
    }

    .select__value-icon {
      transform: rotate(0deg);
    }
  }
`;
