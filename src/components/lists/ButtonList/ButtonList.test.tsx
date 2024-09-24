import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './ButtonList.stories';

const { ButtonList } = composeStories(stories);
describe('ButtonList Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<ButtonList />);
    const componentElement = getByTestId('ButtonList');

    expect(componentElement).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<ButtonList />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
