import React, { act } from 'react';
import { fireEvent, render } from '@testing-library/react';

import { composeStories } from '@storybook/react';

import * as stories from './Pagination.stories';
import { axe } from 'jest-axe';

const { Pagination } = composeStories(stories);

describe('Pagination', () => {
  it('render without crash', () => {
    const { getByTestId } = render(<Pagination />);
    const componentElement = getByTestId('Pagination');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('pagination');
  });

  it('calls onPageChange with correct argument when previous/next page clicked', () => {
    const onPageChangeSpy = jest.fn();
    const { getByTestId } = render(
      <Pagination onPageChange={onPageChangeSpy} />,
    );
    const componentElement = getByTestId('Pagination');
    const previousBtn = componentElement.querySelector(
      '.pagination__link--previous',
    );
    const nextBtn = componentElement.querySelector('.pagination__link--next');

    if (!previousBtn || !nextBtn) {
      fail('No previous or next btn to test');
    }

    fireEvent.click(previousBtn);
    let expectedValue = (Pagination.args.currentPageIndex as number) - 1;
    expect(onPageChangeSpy).toHaveBeenCalledWith(expectedValue);
    onPageChangeSpy.mockClear();

    fireEvent.click(nextBtn);
    expectedValue = expectedValue + 1;
    expect(onPageChangeSpy).toHaveBeenCalledWith(expectedValue);
    onPageChangeSpy.mockClear();

    fireEvent.click(nextBtn);
    expectedValue = expectedValue + 1;
    expect(onPageChangeSpy).toHaveBeenCalledWith(expectedValue);
  });

  it('calls onPageChange with correct argument when a specific page item clicked', () => {
    const onPageChangeSpy = jest.fn();
    const { getByText } = render(<Pagination onPageChange={onPageChangeSpy} />);
    fireEvent.click(getByText('3'));
    expect(onPageChangeSpy).toHaveBeenCalledWith(3);
  });

  it('renders with custom classname', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Pagination className={customClassName} />);
    const componentElement = getByTestId(`Pagination`);

    expect(componentElement).toHaveClass('pagination test-class');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Pagination />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
