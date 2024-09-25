import React from 'react';
import { LinkProps } from 'next/link';
import { toHaveNoViolations } from 'jest-axe';

import '@testing-library/jest-dom';

expect.extend(toHaveNoViolations);

jest.mock('next/link', () => {
  return ({
    children,
    shallow,
    scroll,
    href,
    ...rest
  }: LinkProps & { children: React.ReactNode }) => {
    return (
      <a {...rest} href={href as string}>
        {children}
      </a>
    );
  };
});

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      useRouter: jest.fn(() => ({
        push: jest.fn(),
        replace: jest.fn(),
      })),
      useSearchParams: jest.fn(() => ({})),
      usePathname: jest.fn(),
    };
  },
  useSearchParams: jest.fn(() => ({
    get: jest.fn(),
  })),
  usePathname: jest.fn(() => '/mocked-path'),
}));

jest.mock(
  'next/image',
  () =>
    function Image({
      src,
      alt,
      className,
      'data-testid': dataTestid,
    }: {
      src: string;
      alt?: string;
      className?: string;
      'data-testid'?: string;
    }) {
      return (
        <img
          src={src}
          alt={alt}
          className={className}
          data-testid={dataTestid}
        />
      );
    },
);

const intersectionObserverMock = () => ({
  observe: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);
