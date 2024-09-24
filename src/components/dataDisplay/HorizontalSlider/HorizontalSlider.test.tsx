import { act } from 'react';
import { render } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { composeStories } from '@storybook/react';

import * as stories from './HorizontalSlider.stories';

const { HorizontalSlider } = composeStories(stories);

describe('HorizontalSlider', () => {
  it('renders without crashes', () => {
    const { container, getByTestId } = render(<HorizontalSlider />);
    expect(container).toBeDefined();
    const componentElement = getByTestId('HorizontalSlider');
    expect(componentElement).toBeInTheDocument();
    const productCardElementList =
      componentElement.querySelectorAll('.product-card');

    expect(productCardElementList.length).toBe([]?.length);
  });

  it('navigates to the slide when buttons are clicked', async () => {
    //TODO NEED TO FIND A WAY TO TEST IT, Require some research
    /**
    const { getByTestId } = renderComponent({
      itemList: productCardListMock,
    });
    const productHorizontalSliderElement = getByTestId('HorizontalSlider');
    const previousButton = getByTestId(
      'HorizontalSlider_scroll-button-previous',
    );
    const nextButton = getByTestId('HorizontalSlider_scroll-button-next');

    await act(async () => {
      await userEvent.click(nextButton);
    });
    await act(async () => {
      await userEvent.click(previousButton);
    });
    **/
  });

  it('pass accessibility tests', async () => {
    const { container } = render(<HorizontalSlider />);

    await act(async () => {
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
