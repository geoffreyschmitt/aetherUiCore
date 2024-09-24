import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { RootElement } from './Breadcrumb.styles';
import { TBreadcrumb } from './Breadcrumb.types';
import { Link } from '@/aether-ui-core/src/components/actions/Link';

export const Breadcrumb = ({
  className,
  breadcrumbList,
  ...props
}: TBreadcrumb) => {
  if (!breadcrumbList?.length) {
    return null;
  }
  return (
    <RootElement
      data-testid="Breadcrumb"
      {...props}
      aria-label="Breadcrumb"
      className={classNames('breadcrumb', className)}
    >
      <ol className="breadcrumb__item-list">
        {breadcrumbList.map(({ name, url }, index) => {
          const isCurrentPage = index === breadcrumbList.length - 1;
          return (
            <li
              key={`${url}-${name}-${index}`}
              className={classNames('breadcrumb__item', {
                'breadcrumb__item--is-current': isCurrentPage,
              })}
            >
              <Link
                href={isCurrentPage ? '' : url}
                tabIndex={isCurrentPage ? -1 : undefined}
                aria-current={isCurrentPage ? 'page' : undefined}
                role={isCurrentPage ? 'button' : undefined}
                aria-disabled={isCurrentPage ? 'true' : undefined}
                className={classNames('breadcrumb__link', {
                  'breadcrumb__link--is-current': isCurrentPage,
                })}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ol>
    </RootElement>
  );
};
