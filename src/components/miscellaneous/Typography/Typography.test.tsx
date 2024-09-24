import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Typography.stories';

const { Typography } = composeStories(stories);

describe('Typography Component', () => {
  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(<Typography />);

    const componentElement = getByTestId('Typography');

    expect(componentElement).toBeInTheDocument();
    expect(getByText(Typography.args.children)).toBeInTheDocument();
    expect(componentElement.tagName).toBe('SPAN');
    expect(componentElement).toHaveClass(`typography`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Typography className={customClassName} />);
    const componentElement = getByTestId('Typography');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`typography ${customClassName}`);
  });

  it('renders product label with provided props', () => {
    const tag = 'h2';
    const { getByTestId } = render(<Typography tag={tag} />);

    const componentElement = getByTestId('Typography');
    expect(componentElement.tagName).toBe('H2');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Typography />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
