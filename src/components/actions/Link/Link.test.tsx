import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Link.stories';

const { Link } = composeStories(stories);

describe('Link component', () => {
  it('should render a next link', () => {
    const { getByTestId } = render(<Link />);
    const componentElement = getByTestId('Link');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('link');
    expect(componentElement.tagName).toBe('A');
    expect(componentElement).toHaveAttribute('href', Link.args.href);
  });

  it('should accept next link props', () => {
    const { getByTestId } = render(<Link shallow={true} />);
    const componentElement = getByTestId('Link');

    expect(componentElement).toBeInTheDocument();
  });

  it('calls onClick function when Link is clicked', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(
      <Link
        onClick={e => {
          e.preventDefault();
          onClickSpy();
        }}
      />,
    );
    const componentElement = getByTestId('Link');

    await userEvent.click(componentElement);

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('can be focused using tab key', async () => {
    const { getByTestId } = render(<Link />);
    const componentElement = getByTestId('Link');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();
  });

  it('should be usable by enter key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(
      <Link
        onClick={e => {
          e.preventDefault();
          onClickSpy();
        }}
      />,
    );
    const componentElement = getByTestId('Link');

    componentElement.focus();

    expect(componentElement).toHaveFocus();

    await userEvent.keyboard('{enter}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should be usable by space key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(
      <Link
        onClick={e => {
          e.preventDefault();
          onClickSpy();
        }}
      />,
    );
    const componentElement = getByTestId('Link');

    //Didn't use keyboard function here because there seems to be a bug with keyboard function in userEvent@14.X
    await userEvent.type(componentElement, '{space}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Link />);
    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
