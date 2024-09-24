import React, { act } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './Breadcrumb.stories';

const { Breadcrumb } = composeStories(stories);

describe('Breadcrumb Component', () => {
  it('renders breadcrumbs correctly', () => {
    const { getByTestId } = render(<Breadcrumb />);
    if (!Breadcrumb.args.breadcrumbList?.length) {
      fail('Nothing to test, badly rendered');
    }

    const componentElement = getByTestId('Breadcrumb');
    const breadcrumbList = componentElement.querySelector(
      '.breadcrumb__item-list',
    );

    expect(breadcrumbList).toBeInTheDocument();

    const breadcrumbItemList =
      componentElement.querySelectorAll('.breadcrumb__item');

    expect(breadcrumbItemList).toHaveLength(
      Breadcrumb.args.breadcrumbList.length,
    );

    Breadcrumb.args.breadcrumbList.forEach((_breadcrumbItem, index) => {
      expect(breadcrumbItemList[index]).toBeInTheDocument();
    });
  });

  it('handles accessibility properly', () => {
    const { getByTestId } = render(<Breadcrumb />);
    if (!Breadcrumb.args.breadcrumbList?.length) {
      fail('Nothing to test, badly rendered');
    }

    // Ensure that the breadcrumb container has the appropriate ARIA attributes.
    const componentElement = getByTestId('Breadcrumb');
    expect(componentElement).toHaveAttribute('aria-label', 'Breadcrumb');

    // Check each breadcrumb item for proper ARIA attributes.
    const breadcrumbLinkList =
      componentElement.querySelectorAll('.breadcrumb__link');
    breadcrumbLinkList.forEach((breadcrumbLink, index) => {
      if (index === (Breadcrumb.args.breadcrumbList ?? [])?.length - 1) {
        expect(breadcrumbLink).toHaveAttribute('href', '');
        expect(breadcrumbLink).toHaveAttribute('role', 'button');
        expect(breadcrumbLink).toHaveAttribute('tabindex', '-1');
        expect(breadcrumbLink).toHaveAttribute('aria-current', 'page');
        expect(breadcrumbLink).toHaveAttribute('aria-disabled', 'true');
      } else {
        expect(breadcrumbLink).not.toHaveAttribute('aria-current');
      }
    });
  });

  it('can be navigate with keyboard', async () => {
    const { getByTestId } = render(<Breadcrumb />);
    if (!Breadcrumb.args.breadcrumbList?.length) {
      fail('Nothing to test, badly rendered');
    }

    const componentElement = getByTestId('Breadcrumb');
    const breadcrumbLinkList = componentElement.querySelectorAll(
      '.breadcrumb__link',
    ) as unknown as HTMLElement[];

    await userEvent.tab();
    expect(breadcrumbLinkList[0]).toHaveFocus();

    await userEvent.tab();
    expect(breadcrumbLinkList[1]).toHaveFocus();

    await userEvent.tab();
    expect(breadcrumbLinkList[2]).toHaveFocus();

    await userEvent.tab();
    expect(breadcrumbLinkList[3]).not.toHaveFocus();
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Breadcrumb />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
