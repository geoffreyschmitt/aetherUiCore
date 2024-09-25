import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Checkbox.stories';

const { Checkbox, CheckboxWithCustomColor, CheckboxWithNoChildren } =
  composeStories(stories);

describe('Checkbox Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Checkbox />);
    const componentElement = getByTestId('Checkbox');
    const checkboxInput = componentElement.querySelector(`.checkbox__input`);
    const checkboxLabel = componentElement.querySelector(`.checkbox__label`);
    const checkboxVisualElement = componentElement.querySelector(
      '.checkbox__input-visual',
    );
    const checkboxChildren = componentElement.querySelector(
      `.checkbox__input-content`,
    );

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('checkbox');

    expect(checkboxInput).toBeInTheDocument();
    expect(checkboxInput).toHaveAttribute('type', 'checkbox');

    expect(checkboxLabel).toBeInTheDocument();

    expect(checkboxVisualElement).toBeInTheDocument();
    expect(checkboxVisualElement).toHaveStyle('background: white');

    expect(checkboxChildren).toBeInTheDocument();
    expect(checkboxChildren).toHaveTextContent(
      Checkbox.args.children as string,
    );
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Checkbox className={customClassName} />);
    const componentElement = getByTestId('Checkbox');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`checkbox ${customClassName}`);
  });

  it('triggers onChange function when clicked', async () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(<Checkbox onChange={onChangeMock} />);
    const componentElement = getByTestId('Checkbox');
    const checkboxLabel = componentElement.querySelector(
      `.checkbox__label`,
    ) as HTMLElement;

    await userEvent.click(checkboxLabel);

    expect(onChangeMock).toHaveBeenCalled();
  });

  it('applies custom color styles', () => {
    const id = 'id';
    const { getByTestId } = render(<CheckboxWithCustomColor />);

    const componentElement = getByTestId('Checkbox');
    const checkboxVisualElement = componentElement.querySelector(
      '.checkbox__input-visual',
    );

    expect(checkboxVisualElement).toHaveStyle(
      `background-color: ${CheckboxWithCustomColor.args.color}`,
    );
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Checkbox />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
