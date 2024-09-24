import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './CheckboxList.stories';

const { CheckboxList } = composeStories(stories);
describe('CheckboxList Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<CheckboxList />);
    const componentElement = getByTestId('CheckboxList');

    expect(componentElement).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<CheckboxList />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
