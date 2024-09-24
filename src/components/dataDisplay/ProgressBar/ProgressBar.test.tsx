import React from 'react';
import { act, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './ProgressBar.stories';

const { ProgressBar } = composeStories(stories);

describe('ProgressBar component', () => {
  it('renders with the default style when no variant is given', () => {
    const { getByTestId } = render(<ProgressBar />);
    const progressBarElement = getByTestId('ProgressBar');

    expect(progressBarElement).toBeInTheDocument();
    expect(progressBarElement).toHaveClass('progress-bar');
  });

  it('renders with custom classname', () => {
    const { getByTestId } = render(<ProgressBar className={'test-class'} />);

    const progressBarElement = getByTestId('ProgressBar');

    expect(progressBarElement).toHaveClass('progress-bar test-class');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<ProgressBar />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
