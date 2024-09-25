import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Badge.stories';

const { Badge } = composeStories(stories);

describe('Badge Component', () => {
  it('renders without crashing', () => {
    const { getByTestId, getByText } = render(<Badge />);

    const componentElement = getByTestId('Badge');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveTextContent(Badge.args.children as string);
    expect(componentElement.tagName).toBe('SPAN');
    expect(componentElement).toHaveClass(`badge`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Badge className={customClassName} />);
    const componentElement = getByTestId('Badge');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`badge ${customClassName}`);
  });

  it('renders product label with provided props', () => {
    const tag = 'h2';
    const { getByTestId } = render(<Badge tag={tag} />);

    const componentElement = getByTestId('Badge');
    expect(componentElement.tagName).toBe('H2');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Badge />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
