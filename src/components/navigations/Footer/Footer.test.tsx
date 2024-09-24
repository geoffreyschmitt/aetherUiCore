import React, { act } from 'react';
import { render } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Footer.stories';
import { axe } from 'jest-axe';

const { Footer } = composeStories(stories);

describe('Footer', () => {
  it('render without crash', () => {
    const { getByTestId } = render(<Footer />);
    const componentElement = getByTestId('Footer');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('footer');
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Footer className={customClassName} />);
    const componentElement = getByTestId(`Footer`);

    expect(componentElement).toHaveClass('footer test-class');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Footer />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
