import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Input.stories';

const { Input, InputWithDefaultValue } = composeStories(stories);

describe('Input Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Input />);
    const componentElement = getByTestId('Input');
    const inputElement = componentElement.querySelector('.input__input');
    const labelElement = componentElement.querySelector('.input__label');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('input');
    expect(componentElement).not.toHaveClass('input--is-filled');
    expect(componentElement).not.toHaveClass('input--has-error');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('input__input');
    expect(inputElement).toHaveAttribute('type', 'text');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(Input.args.label as string);
  });

  it('render with customClassName', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Input className={customClassName} />);
    const componentElement = getByTestId('Input');
    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('input test-class');
  });

  it('render with default value when provided', () => {
    const { getByTestId } = render(<InputWithDefaultValue />);
    const componentElement = getByTestId('Input');
    const inputElement = componentElement.querySelector('.input__input');
    expect(componentElement).toHaveClass('input--is-filled');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute(
      'value',
      InputWithDefaultValue.args.defaultValue,
    );
  });

  it('render correctly when input is filled', async () => {
    const { getByTestId } = render(<Input />);
    const componentElement = getByTestId('Input');
    const inputElement = componentElement.querySelector(
      '.input__input',
    ) as HTMLElement;

    if (!inputElement) {
      fail('No input element to test');
    }

    expect(componentElement).not.toHaveClass('input--is-filled');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('value', '');

    inputElement.focus();

    await act(async () => {
      await userEvent.keyboard('New Value');
    });

    expect(inputElement).toHaveAttribute('value', 'New Value');
    expect(componentElement).toHaveClass('input--is-filled');
  });

  it('render correctly when input has error', async () => {
    const { getByTestId } = render(<Input hasError />);
    const componentElement = getByTestId('Input');

    expect(componentElement).toHaveClass('input--has-error');
  });

  it('triggers onChange function correctly', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input onChange={onChange} />);
    const componentElement = getByTestId('Input');
    const inputElement = componentElement.querySelector(
      '.input__input',
    ) as HTMLElement;

    if (!inputElement) {
      fail('No input element to test');
    }

    inputElement.focus();

    await act(async () => {
      await userEvent.keyboard('New Value');
    });

    expect(onChange).toHaveBeenCalledWith('New Value');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<Input />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
