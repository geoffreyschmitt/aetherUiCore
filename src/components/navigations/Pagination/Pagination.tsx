import React from 'react';
import { TPagination } from './Pagination.types';
import { RootElement } from './Pagination.styles';
import { classNames } from '@/aether-ui/utils';

export const Pagination = ({
  className,
  currentPageIndex,
  totalPages,
  onPageChange,
  ...props
}: TPagination) => {
  const getPageListTODisplay = (): (number | string | null)[] => {
    if (totalPages <= 5) {
      let pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    if (currentPageIndex <= 2) {
      return [1, 2, 3, '...', totalPages];
    }

    if (currentPageIndex >= totalPages - 1) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    const prevPage = currentPageIndex - 1;
    const nextPage = currentPageIndex + 1;
    const isFirstPageGapNeeded = prevPage > 2;
    const isLastPageGapNeeded = nextPage < totalPages - 1;
    return [
      1,
      isFirstPageGapNeeded ? '...' : null,
      prevPage,
      currentPageIndex,
      nextPage,
      isLastPageGapNeeded ? '...' : null,
      totalPages,
    ];
  };

  return (
    <RootElement
      data-testid={'Pagination'}
      {...props}
      className={classNames('pagination', className)}
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <ul className={'pagination__item-list'}>
        <li className={'pagination__item'}>
          <button
            disabled={currentPageIndex === 1}
            onClick={() => onPageChange(currentPageIndex - 1)}
            className={classNames(
              'pagination__link',
              'pagination__link--previous',
            )}
            aria-label={'Previous page'}
          >
            Previous
          </button>
        </li>
        {getPageListTODisplay().map((page, i) =>
          typeof page === 'number' ? (
            <li className={'pagination__item'} key={i}>
              <button
                className={classNames(
                  'pagination__link',
                  `pagination__link--page`,
                  {
                    'pagination__link--is-current': currentPageIndex === page,
                  },
                )}
                onClick={() => onPageChange(page)}
                aria-label={`${currentPageIndex === page ? 'Current Page,' : 'Goto'} Page ${page} ${page === 1 ? '(first page)' : ''} ${page === totalPages ? '(last page)' : ''}`}
                aria-current={currentPageIndex === page ? 'page' : undefined}
              >
                {page}
              </button>
            </li>
          ) : (
            <li key={i} className={'pagination__divider-wrapper'}>
              <span className={'pagination__divider'}>{page}</span>
            </li>
          ),
        )}
        <li className={'pagination__item'}>
          <button
            disabled={currentPageIndex === totalPages}
            onClick={() => onPageChange(currentPageIndex + 1)}
            className={classNames('pagination__link', 'pagination__link--next')}
            aria-label={'Next page'}
          >
            Next
          </button>
        </li>
      </ul>
    </RootElement>
  );
};
