import React from 'react';

import { classNames } from '@/aether-ui-core/src/utils';

import { RootElement } from './Table.styles';
import { TTable } from './Table.types';

export const Table = ({ className, headerList, rowList, ...props }: TTable) => {
  if (!headerList.length) {
    return null;
  }

  return (
    <RootElement
      data-testid={`Table`}
      {...props}
      className={classNames('table', className)}
      $columnNumber={headerList.length}
    >
      <tbody className={'table__body'}>
        <tr className={'table__row table__row--header'}>
          {headerList.map((header, i) => (
            <th
              scope="column"
              key={`header-${i}`}
              className={'table__cell table__cell--header'}
            >
              {header}
            </th>
          ))}
        </tr>
        {rowList?.map((row, i) => (
          <tr key={`row-${row.id}`} className={'table__row'}>
            {headerList.map(
              key =>
                row[key] && (
                  <td
                    key={`row-value-${key}-${row[key]}`}
                    className={'table__cell table__cell--body'}
                  >
                    {row[key]}
                  </td>
                ),
            )}
          </tr>
        ))}
      </tbody>
    </RootElement>
  );
};
