//See this for the basic of the select accessibility: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
import React, { act } from 'react';
import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import * as stories from './Select.stories';

const { Select } = composeStories(stories);
describe('Select Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector('.select__trigger');
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');
    expect(buttonElement).toBeInTheDocument();
    expect(optionListElement).toBeInTheDocument();
    expect(optionElementList?.length).toBe(Select.args.optionList?.length);
  });

  it('renders with custom className', () => {
    const customClassName = 'test-class';
    const { getByTestId } = render(<Select className={customClassName} />);
    const componentElement = getByTestId('Select');

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass(`select ${customClassName}`);
  });

  it('open on button click', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(buttonElement);
    });

    expect(componentElement).toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(buttonElement);
    });

    expect(componentElement).not.toHaveClass('select__is-open');
  });

  it('open on button keyboard usage', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');

    await userEvent.tab();

    expect(buttonElement).toHaveFocus();

    await act(async () => {
      await userEvent.keyboard('{enter}');
    });

    expect(componentElement).toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.keyboard('{enter}');
    });

    expect(componentElement).not.toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.keyboard(' ');
    });

    expect(componentElement).toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.keyboard(' ');
    });

    expect(componentElement).not.toHaveClass('select__is-open');
  });

  it('change selected address on address option click', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    if (!Select.args.optionList?.length) {
      fail('optionList is empty or false');
    }
    if (!optionElementList?.length) {
      fail('optionElementList is empty or false');
    }

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(buttonElement);
    });

    expect(componentElement).toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(optionElementList[2]);
    });

    expect(buttonElement).toHaveTextContent(Select.args.optionList[2].label);

    expect(componentElement).not.toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(buttonElement);
    });

    expect(componentElement).toHaveClass('select__is-open');

    await act(async () => {
      await userEvent.click(optionElementList[1]);
    });

    expect(buttonElement).toHaveTextContent(Select.args.optionList[1].label);
    expect(componentElement).not.toHaveClass('select__is-open');
  });

  it('work properly for the ArrowDown key', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    if (!Select.args.optionList?.length) {
      fail('optionList is empty or false');
    }
    if (!optionElementList?.length) {
      fail('optionElementList is empty or false');
    }

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');

    await userEvent.tab();
    expect(buttonElement).toHaveFocus();

    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');

    optionElementList.forEach(optionElement => {
      expect(optionElement).not.toHaveClass('select__option--focused');
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');
    optionElementList.forEach((optionElement, index) => {
      if (index === 0) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');
    optionElementList.forEach((optionElement, index) => {
      if (index === 1) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');
    optionElementList.forEach((optionElement, index) => {
      if (index === 2) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
  });

  it('work properly for the ArrowUp key', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    if (!Select.args.optionList?.length) {
      fail('optionList is empty or false');
    }
    if (!optionElementList?.length) {
      fail('optionElementList is empty or false');
    }

    expect(componentElement).toBeInTheDocument();
    expect(componentElement).toHaveClass('select');
    expect(componentElement).not.toHaveClass('select__is-open');

    await userEvent.tab();
    expect(buttonElement).toHaveFocus();

    await act(async () => {
      await userEvent.keyboard('{ArrowUp}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');

    optionElementList.forEach((optionElement, index) => {
      if (index === optionElementList.length - 1) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowUp}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');
    optionElementList.forEach((optionElement, index) => {
      if (index === optionElementList.length - 2) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowUp}');
    });

    expect(buttonElement).toHaveFocus();
    expect(componentElement).toHaveClass('select__is-open');
    optionElementList.forEach((optionElement, index) => {
      if (index === optionElementList.length - 3) {
        expect(optionElement).toHaveClass('select__option--focused');
      } else {
        expect(optionElement).not.toHaveClass('select__option--focused');
      }
    });
  });

  it('can select an address properly for keyboard usage', async () => {
    const { getByTestId } = render(<Select />);
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    if (!Select.args.optionList?.length) {
      fail('optionList is empty or false');
    }
    if (!optionElementList?.length) {
      fail('optionElementList is empty or false');
    }

    await userEvent.tab();

    await act(async () => {
      await userEvent.keyboard('{enter}');
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });
    await act(async () => {
      await userEvent.keyboard('{ArrowDown}');
    });

    expect(optionElementList[1]).toHaveClass('select__option--focused');

    await act(async () => {
      await userEvent.keyboard('{enter}');
    });

    expect(buttonElement).toHaveTextContent(Select.args.optionList[1].label);
    expect(componentElement).not.toHaveClass('select__is-open');
  });

  it('calls onSelectedValueChange function when value of the select change', async () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Select onSelectedValueChange={mockCallBack} />,
    );
    const componentElement = getByTestId('Select');
    const buttonElement = componentElement.querySelector(
      '.select__trigger',
    ) as HTMLButtonElement;
    const optionListElement = componentElement.querySelector(
      '.select__option-list',
    );
    const optionElementList =
      optionListElement?.querySelectorAll('.select__option');

    if (!Select.args.optionList?.length) {
      fail('optionList is empty or false');
    }
    if (!optionElementList?.length) {
      fail('optionElementList is empty or false');
    }

    await act(async () => {
      await userEvent.click(buttonElement);
    });

    //Called one time on render
    mockCallBack.mockClear();

    await act(async () => {
      await userEvent.click(optionElementList[2]);
    });

    expect(mockCallBack).toHaveBeenCalledWith(Select.args.optionList[2].value);
  });

  it('passes accessibility tests', async () => {
    const { container } = render(<Select />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
