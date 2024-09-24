import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Container.stories';

const { Container } = composeStories(stories);

describe('Container Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Container />);

    const componentElement = getByTestId('Container');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement.tagName).toBe('DIV');
    expect(componentElement).toHaveClass(`container`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Container className={customClassName} />);
    const componentElement = getByTestId('Container');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`container ${customClassName}`);
  });

  it('renders product label with provided props', () => {
    const tag = 'h2';
    const { getByTestId } = render(<Container tag={tag} />);

    const componentElement = getByTestId('Container');
    expect(componentElement.tagName).toBe('H2');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Container />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
