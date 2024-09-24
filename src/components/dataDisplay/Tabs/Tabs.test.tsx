import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { tabListMock, tabListWithEmptyContentMock } from './mocks';

import { composeStories } from '@storybook/react';

import * as stories from './Tabs.stories';

const { Tabs, TabsListWithEmptyContent } = composeStories(stories);

describe('Tabs Component', () => {
  it('renders when tabList is provided', () => {
    const { getByTestId } = render(<Tabs />);
    const tabsElement = getByTestId('Tabs');

    expect(tabsElement).toBeInTheDocument();
    expect(tabsElement).toHaveClass('tabs');
    const renderedTitleList = tabsElement.querySelectorAll('.tabs__title');
    const renderedContentList = tabsElement.querySelectorAll('.tabs__content');
    expect(renderedTitleList.length).toBe(tabListMock.length);
    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList.length).toBe(tabListMock.length);
    expect(renderedContentList[0]).toHaveClass('tabs__content--is-current');
  });

  it("doesn't render the title when content is empty", () => {
    const { getByTestId } = render(<TabsListWithEmptyContent />);
    const tabsElement = getByTestId('Tabs');

    const renderedTitleList = tabsElement.querySelectorAll('.tabs__title');
    const renderedContentList = tabsElement.querySelectorAll('.tabs__content');
    expect(renderedTitleList.length).toBe(
      tabListWithEmptyContentMock.length - 1,
    );
    expect(renderedContentList.length).toBe(
      tabListWithEmptyContentMock.length - 1,
    );
  });

  it('render with the correct index selected when provided', () => {
    const initialSelectedTabIndexMock = 2;
    const { getByTestId } = render(
      <Tabs initialSelectedTabIndex={initialSelectedTabIndexMock} />,
    );
    const tabsElement = getByTestId('Tabs');
    const renderedTitleList = tabsElement.querySelectorAll('.tabs__title');
    const renderedContentList = tabsElement.querySelectorAll('.tabs__content');

    expect(renderedTitleList[2]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).toHaveClass('tabs__content--is-current');
  });

  it('Display the correct content after clicking the title', async () => {
    const { getByTestId } = render(<Tabs />);
    const tabsElement = getByTestId('Tabs');
    const renderedTitleList = tabsElement.querySelectorAll('.tabs__title');
    const renderedContentList = tabsElement.querySelectorAll('.tabs__content');

    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).toHaveClass('tabs__content--is-current');

    await act(async () => {
      await userEvent.click(renderedTitleList[1]);
    });

    expect(renderedTitleList[1]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[1]).toHaveClass('tabs__content--is-current');
    expect(renderedContentList[0]).not.toHaveClass('tabs__content--is-current');

    await act(async () => {
      await userEvent.click(renderedTitleList[2]);
    });

    expect(renderedTitleList[2]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).toHaveClass('tabs__content--is-current');
    expect(renderedContentList[1]).not.toHaveClass('tabs__content--is-current');

    await act(async () => {
      await userEvent.click(renderedTitleList[0]);
    });

    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).toHaveClass('tabs__content--is-current');
    expect(renderedContentList[2]).not.toHaveClass('tabs__content--is-current');
  });

  it('Navigate correctly for keyboard user', async () => {
    const { getByTestId } = render(<Tabs />);
    const tabsElement = getByTestId('Tabs');
    const renderedTitleList = tabsElement.querySelectorAll(
      '.tabs__title',
    ) as unknown as HTMLElement[];
    const renderedContentList = tabsElement.querySelectorAll(
      '.tabs__content',
    ) as unknown as HTMLElement[];

    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');

    await act(async () => {
      await userEvent.tab();
    });
    expect(renderedTitleList[0]).toHaveFocus();
    await act(async () => {
      await userEvent.tab();
    });
    expect(renderedTitleList[1]).not.toHaveFocus();
    await act(async () => {
      renderedTitleList[0].focus();
    });
    expect(renderedTitleList[0]).toHaveFocus();
    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).toHaveClass('tabs__content--is-current');
    await act(async () => {
      await userEvent.keyboard('{arrowright}');
    });
    expect(renderedTitleList[1]).toHaveFocus();
    expect(renderedTitleList[1]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[1]).toHaveClass('tabs__content--is-current');
    expect(renderedTitleList[0]).not.toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).not.toHaveClass('tabs__content--is-current');
    await act(async () => {
      await userEvent.keyboard('{arrowright}');
    });
    expect(renderedTitleList[2]).toHaveFocus();
    expect(renderedTitleList[2]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).toHaveClass('tabs__content--is-current');
    expect(renderedTitleList[1]).not.toHaveClass('tabs__title--is-current');
    expect(renderedContentList[1]).not.toHaveClass('tabs__content--is-current');
    await act(async () => {
      await userEvent.keyboard('{arrowright}');
    });
    expect(renderedTitleList[0]).toHaveFocus();
    expect(renderedTitleList[0]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).toHaveClass('tabs__content--is-current');
    expect(renderedTitleList[2]).not.toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).not.toHaveClass('tabs__content--is-current');
    await act(async () => {
      await userEvent.keyboard('{arrowleft}');
    });
    expect(renderedTitleList[2]).toHaveFocus();
    expect(renderedTitleList[2]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).toHaveClass('tabs__content--is-current');
    expect(renderedTitleList[0]).not.toHaveClass('tabs__title--is-current');
    expect(renderedContentList[0]).not.toHaveClass('tabs__content--is-current');
    await act(async () => {
      await userEvent.keyboard('{arrowleft}');
    });
    expect(renderedTitleList[1]).toHaveFocus();
    expect(renderedTitleList[1]).toHaveClass('tabs__title--is-current');
    expect(renderedContentList[1]).toHaveClass('tabs__content--is-current');
    expect(renderedTitleList[2]).not.toHaveClass('tabs__title--is-current');
    expect(renderedContentList[2]).not.toHaveClass('tabs__content--is-current');
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Tabs />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
