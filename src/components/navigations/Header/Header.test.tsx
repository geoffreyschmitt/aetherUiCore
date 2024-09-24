import React, { act } from 'react';
import { render } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Header.stories';
import { axe } from 'jest-axe';

const { Header } = composeStories(stories);

describe('Header', () => {
  it('render without crash', () => {
    const { getByTestId } = render(<Header />);
    const componentElement = getByTestId('Header');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('header');
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Header className={customClassName} />);
    const componentElement = getByTestId(`Header`);

    expect(componentElement).toHaveClass('header test-class');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Header />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
