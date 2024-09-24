import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './BadgeList.stories';

const { BadgeList } = composeStories(stories);
describe('BadgeList Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<BadgeList />);
    const componentElement = getByTestId('BadgeList');

    expect(componentElement).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<BadgeList />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
