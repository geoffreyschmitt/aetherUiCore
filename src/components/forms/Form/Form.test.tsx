import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Form.stories';

const { Form } = composeStories(stories);
describe('Form Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Form />);
    const formElement = getByTestId('Form');

    expect(formElement).toBeInTheDocument();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Form />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
