import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Radio.stories';

const { Radio, RadioDefaultChecked } = composeStories(stories);

describe('Radio Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Radio />);
    const componentElement = getByTestId(`Radio`);
    const inputElement = componentElement.querySelector('.radio__input');
    const RadioLabelElement = componentElement.querySelector(`.radio__text`);

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('radio');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'radio');
    expect(inputElement).not.toBeChecked();

    expect(RadioLabelElement).toBeInTheDocument();
    expect(RadioLabelElement?.textContent).toBe(Radio.args.children);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Radio className={customClassName} />);
    const componentElement = getByTestId(`Radio`);

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('radio test-class');
  });

  it('renders as default checked when checked is true', () => {
    const { getByTestId } = render(<RadioDefaultChecked />);
    const componentElement = getByTestId(`Radio`);
    const inputElement = componentElement.querySelector('.radio__input');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('radio radio--is-checked');

    expect(inputElement).toBeChecked();
  });

  it('triggers onChange function when clicked', async () => {
    const onChangeSpy = jest.fn();
    const { getByTestId } = render(<Radio onChange={onChangeSpy} />);
    const componentElement = getByTestId(`Radio`);
    const inputElement = componentElement.querySelector(
      '.radio__input',
    ) as HTMLElement;

    await userEvent.click(inputElement);

    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Radio />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
