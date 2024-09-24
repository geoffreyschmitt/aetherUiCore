'use client';
import styled from 'styled-components';

export const RootElement = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--radio-gap, 8px);

  .radio__input {
    appearance: none;
    position: absolute;
  }

  .radio__input-visual {
    position: relative;
    display: inline-block;
    border-radius: 100%;
    top: 0;
    left: 0;
    width: var(--radio-size, 18px);
    height: var(--radio-size, 18px);
    background: var(--radio-default-background, white);
    border: var(--radio-border, 1px solid black);
    transition: all ease-in-out 0.3s;
  }

  .radio__input-visual::after {
    content: '';
    position: absolute;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    width: var(--radio-check-size, 8px);
    height: var(--radio-check-size, 8px);
    background: var(--radio-check-color, black);
    transform: translate(-50%, -50%) scale(0);
    transform-origin: center;
    transition: all ease-in-out 0.3s;
  }

  .radio__input:checked + .radio__input-visual:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;
