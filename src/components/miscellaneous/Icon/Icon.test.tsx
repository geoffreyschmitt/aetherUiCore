import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import { EIconVariant, TIcon } from './index';
import { Icon } from './index';

import '@testing-library/jest-dom';

expect.extend(toHaveNoViolations);

describe('Icon Component', () => {
  const renderComponent = (props: Partial<TIcon> = {}) => {
    const defaultProps: TIcon = {
      variant: EIconVariant.CHEVRON,
    };

    return render(<Icon {...defaultProps} {...props} />);
  };

  it('should render with required props', () => {
    renderComponent();
    const iconElement = screen.getByTestId('Icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    renderComponent({ className: 'custom-class' });
    const iconElement = screen.getByTestId('Icon');
    expect(iconElement).toHaveClass('custom-class');
  });

  it('should have no accessibility violations', async () => {
    const { container } = renderComponent();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
