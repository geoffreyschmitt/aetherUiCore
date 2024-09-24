import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './TextArea.stories';

const { TextArea, TextAreaWithDefaultValue } = composeStories(stories);

describe('TextArea Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<TextArea />);
    const componentElement = getByTestId('TextArea');
    const TextAreaElement = componentElement.querySelector(
      '.TextArea__TextArea',
    );
    const labelElement = componentElement.querySelector('.TextArea__label');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('TextArea');
    expect(componentElement).not.toHaveClass('TextArea--is-filled');
    expect(componentElement).not.toHaveClass('TextArea--has-error');

    expect(TextAreaElement).toBeInTheDocument();
    expect(TextAreaElement).toHaveClass('TextArea__TextArea');
    expect(TextAreaElement).toHaveAttribute('type', 'text');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(TextArea.args.label as string);
  });

  it('render with customClassName', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<TextArea className={customClassName} />);
    const componentElement = getByTestId('TextArea');
    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('TextArea test-class');
  });
  it('render with default value when provided', () => {
    const { getByTestId } = render(<TextAreaWithDefaultValue />);
    const componentElement = getByTestId('TextArea');
    const TextAreaElement = componentElement.querySelector(
      '.TextArea__TextArea',
    );
    expect(componentElement).toHaveClass('TextArea--is-filled');
    expect(TextAreaElement).toBeInTheDocument();
    expect(TextAreaElement).toHaveAttribute(
      'value',
      TextAreaWithDefaultValue.args.defaultValue,
    );
  });

  it('render correctly when TextArea is filled', async () => {
    const { getByTestId } = render(<TextArea />);
    const componentElement = getByTestId('TextArea');
    const TextAreaElement = componentElement.querySelector(
      '.TextArea__TextArea',
    ) as HTMLElement;

    if (!TextAreaElement) {
      fail('No TextArea element to test');
    }

    expect(componentElement).not.toHaveClass('TextArea--is-filled');
    expect(TextAreaElement).toBeInTheDocument();
    expect(TextAreaElement).toHaveAttribute('value', '');

    TextAreaElement.focus();

    await act(async () => {
      await userEvent.keyboard('New Value');
    });

    expect(TextAreaElement).toHaveAttribute('value', 'New Value');
    expect(componentElement).toHaveClass('TextArea--is-filled');
  });

  it('render correctly when TextArea has error', async () => {
    const { getByTestId } = render(<TextArea hasError />);
    const componentElement = getByTestId('TextArea');

    expect(componentElement).toHaveClass('TextArea--has-error');
  });

  it('triggers onChange function correctly', async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextArea onChange={onChange} />);
    const componentElement = getByTestId('TextArea');
    const TextAreaElement = componentElement.querySelector(
      '.TextArea__TextArea',
    ) as HTMLElement;

    if (!TextAreaElement) {
      fail('No TextArea element to test');
    }

    TextAreaElement.focus();

    await act(async () => {
      await userEvent.keyboard('New Value');
    });

    expect(onChange).toHaveBeenCalledWith('New Value');
  });

  it('should have no accessibility violations', async () => {
    const { container } = render(<TextArea />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
