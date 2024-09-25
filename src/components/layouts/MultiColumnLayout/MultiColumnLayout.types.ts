import { TComponentPropsWithRequiredChildren } from '@/utils';
import { ReactNode } from 'react';

export type TMultiColumnLayout = TComponentPropsWithRequiredChildren &
  Readonly<{
    /**
     * Mobile display threshold value
     */
    mobileThreshold?: number;
    /**
     * An array of ReactNode elements that represents the columns to be rendered.
     *
     * This variable is typically used in table or grid components to specify which columns
     * should be displayed. Each element in the array corresponds to a column and can contain
     * any valid ReactNode, such as header labels, data cells, or custom column content.
     *
     * Note that the order of the elements in the array determines the order in which the columns
     * will appear in the rendered output.
     *
     * @type {ReactNode[]}
     */
    columnList: ReactNode[];
  }>;

export type TMultiColumnLayoutStyled = Readonly<{
  $mobileThreshold?: number;
}>;
