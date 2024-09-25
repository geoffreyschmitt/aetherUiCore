import { TComponentProps } from '@/aether-ui/utils';

type TTableHeader = Readonly<string[]>;

type TTableRow = { [K: string]: string | undefined };

type TTableRowList = Readonly<TTableRow[]>;

export type TTable = TComponentProps &
  Readonly<{
    headerList: TTableHeader;
    rowList?: TTableRowList;
  }>;

export type TTableStyled = Readonly<{
  $columnNumber?: number;
}>;
