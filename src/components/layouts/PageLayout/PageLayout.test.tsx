import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './PageLayout.stories';

const { PageLayout } = composeStories(stories);

describe('PageLayout Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<PageLayout />);

    const componentElement = getByTestId('PageLayout');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement.tagName).toBe('DIV');
    expect(componentElement).toHaveClass(`page-layout`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<PageLayout className={customClassName} />);
    const componentElement = getByTestId('PageLayout');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`page-layout ${customClassName}`);
  });

  it('renders product label with provided props', () => {
    const tag = 'h2';
    const { getByTestId } = render(<PageLayout tag={tag} />);

    const componentElement = getByTestId('PageLayout');
    expect(componentElement.tagName).toBe('H2');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<PageLayout />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
