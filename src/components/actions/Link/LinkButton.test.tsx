import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './LinkButton.stories';

const { LinkButton } = composeStories(stories);

describe('LinkButton component', () => {
  it('renders a LinkButton with text content', () => {
    const { getByTestId } = render(<LinkButton />);
    const componentElement = getByTestId('LinkButton');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('link');
    expect(componentElement.tagName).toBe('BUTTON');
  });

  it('renders a disabled LinkButton when disabled is provided', () => {
    const { getByTestId } = render(<LinkButton disabled />);
    const componentElement = getByTestId('LinkButton');

    expect(componentElement).toBeDisabled();
    expect(componentElement).toHaveClass('link--is-disabled');
  });

  it('calls onClick function when LinkButton is clicked', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<LinkButton onClick={onClickSpy} />);
    const componentElement = getByTestId('LinkButton');

    await userEvent.click(componentElement); // Use userEvent.click

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('can be focused using tab key', async () => {
    const { getByTestId } = render(<LinkButton />);
    const componentElement = getByTestId('LinkButton');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();
  });

  it('should be usable by enter key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<LinkButton onClick={onClickSpy} />);
    const componentElement = getByTestId('LinkButton');

    componentElement.focus();

    expect(componentElement).toHaveFocus();

    await userEvent.keyboard('{enter}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should be usable by space key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<LinkButton onClick={onClickSpy} />);
    const componentElement = getByTestId('LinkButton');

    //Didn't use keyboard function here because there seems to be a bug with keyboard function in userEvent@14.X
    await userEvent.type(componentElement, '{space}');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not be usable by enter key when LinkButton is disabled', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(
      <LinkButton onClick={onClickSpy} disabled />,
    );
    const componentElement = getByTestId('LinkButton');

    componentElement.focus();

    expect(componentElement).not.toHaveFocus();

    await userEvent.keyboard('{enter}');

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('should not be usable by space key when LinkButton is disabled', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(
      <LinkButton onClick={onClickSpy} disabled />,
    );
    const componentElement = getByTestId('LinkButton');

    await userEvent.type(componentElement, '{space}');

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<LinkButton />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
