import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Button.stories';

const { Button, ButtonDisabled, ButtonIsLoading } = composeStories(stories);

describe('Button component', () => {
  it('renders a button with text content', () => {
    const { getByTestId } = render(<Button />);
    const componentElement = getByTestId('Button');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement.tagName).toBe('BUTTON');
  });

  it('renders a disabled button when disabled is provided', () => {
    const { getByTestId } = render(<ButtonDisabled />);
    const componentElement = getByTestId('Button');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toBeDisabled();
    expect(componentElement).toHaveClass('button--is-disabled');
  });

  it('renders a disabled button when isLoading is provided', () => {
    const { getByTestId } = render(<ButtonIsLoading />);
    const componentElement = getByTestId('Button');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toBeDisabled();
  });

  it('calls onClick function when button is clicked', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickSpy} />);
    const componentElement = getByTestId('Button');

    componentElement.click();

    expect(onClickSpy).toHaveBeenCalled();
  });

  it('can be focused using tab key', async () => {
    const { getByTestId } = render(<Button />);
    const componentElement = getByTestId('Button');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();
  });

  it('should be usable by enter key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickSpy} />);
    const componentElement = getByTestId('Button');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();

    await userEvent.keyboard('{enter}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should be usable by space key', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<Button onClick={onClickSpy} />);
    const componentElement = getByTestId('Button');

    await userEvent.tab();

    expect(componentElement).toHaveFocus();

    //Didn't use keyboard function here because there seems to be a bug with keyboard function in userEvent@14.X
    await userEvent.type(componentElement, '{space}');

    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not be usable by enter key when button is disabled', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<ButtonDisabled onClick={onClickSpy} />);
    const componentElement = getByTestId('Button');

    await userEvent.tab();

    expect(componentElement).not.toHaveFocus();

    componentElement.focus();

    await userEvent.keyboard('{enter}');

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('should not be usable by space key when button is disabled', async () => {
    const onClickSpy = jest.fn();
    const { getByTestId } = render(<ButtonDisabled onClick={onClickSpy} />);
    const componentElement = getByTestId('Button');

    await userEvent.tab();

    expect(componentElement).not.toHaveFocus();

    componentElement.focus();

    await userEvent.type(componentElement, '{space}');

    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Button />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
