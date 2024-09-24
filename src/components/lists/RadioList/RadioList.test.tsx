import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './RadioList.stories';

const { RadioList } = composeStories(stories);
describe('RadioList Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<RadioList />);
    const componentElement = getByTestId('RadioList');

    expect(componentElement).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<RadioList />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
