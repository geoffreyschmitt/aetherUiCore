import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './MultiColumnLayout.stories';

const { MultiColumnLayout } = composeStories(stories);

describe('MultiColumnLayout Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<MultiColumnLayout />);

    const componentElement = getByTestId('MultiColumnLayout');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`multi-column-layout`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(
      <MultiColumnLayout className={customClassName} />,
    );
    const componentElement = getByTestId('MultiColumnLayout');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(
      `multi-column-layout ${customClassName}`,
    );
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<MultiColumnLayout />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
