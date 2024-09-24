import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Image.stories';

const { Image } = composeStories(stories);

describe('Image Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Image />);

    const componentElement = getByTestId('Image');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`image`);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Image className={customClassName} />);
    const componentElement = getByTestId('Image');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`image ${customClassName}`);
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Image />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
