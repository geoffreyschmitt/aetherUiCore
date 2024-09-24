import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { ButtonLink as Component } from './index';
import { TButtonLink as TComponent } from './index';

import { composeStories } from '@storybook/react';

import * as stories from './ButtonLink.stories';

const { ButtonLink } = composeStories(stories);

describe('ButtonLink component', () => {
  it('should render a next link', () => {
    const { getByTestId } = render(<ButtonLink />);
    const componentElement = getByTestId('ButtonLink');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement.tagName).toBe('A');
    expect(componentElement).toHaveAttribute('href', ButtonLink.args.href);
  });

  it('can be focused using tab key', async () => {
    const { getByTestId } = render(<ButtonLink />);
    const componentElement = getByTestId('ButtonLink');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();
  });

  it('passes accessibility tests', async () => {
    await act(async () => {
      const { container } = render(<ButtonLink />);

      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
