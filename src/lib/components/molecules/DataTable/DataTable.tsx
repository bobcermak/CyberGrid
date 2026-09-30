import type { ReactNode } from 'react';
import { TableCell } from '../../atoms/TableCell';
import type { TableCellAlign } from '../../atoms/TableCell';
import { TableHeader } from '../../atoms/TableHeader';
import { TableRow } from '../../atoms/TableRow';
import { useReveal } from '../../../hooks/useReveal';
import { DataTableCaption, DataTableCaptionText, DataTableElement, DataTableRoot } from './DataTable.styles';

export interface DataTableColumn<Row> {
  key: keyof Row & string;
  label: ReactNode;
  align?: TableCellAlign;
  render?: (row: Row) => ReactNode;
}
export interface DataTableProps<Row> {
  columns: DataTableColumn<Row>[];
  rows: Row[];
  rowLabelKey?: keyof Row & string;
  getRowKey?: (row: Row, index: number) => string | number;
  caption?: ReactNode;
  loading?: boolean;
  skeletonRows?: number;
  className?: string;
}
const defaultRowKey = <Row,>(_: Row, index: number) => index;
export const DataTable = <Row,>({
  columns,
  rows,
  rowLabelKey,
  getRowKey = defaultRowKey,
  caption,
  loading = false,
  skeletonRows = 3,
  className,
}: DataTableProps<Row>) => {
  const reveal = useReveal(loading);

  const bodyRows = loading
    ? Array.from({ length: skeletonRows }, (_, i) => i)
    : rows;

  return (
    <DataTableRoot
      $reveal={reveal}
      aria-busy={loading || undefined}
      className={className}
    >
      <DataTableElement>
        {caption && (
          <DataTableCaption>
            <DataTableCaptionText $skeleton={loading}>{caption}</DataTableCaptionText>
          </DataTableCaption>
        )}
        <thead>
          <TableRow>
            {columns.map((column) => (
              <TableHeader
                key={column.key}
                align={column.align}
                loading={loading}
              >
                {column.label}
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {bodyRows.map((row, rowIndex) => {
            const key = loading ? rowIndex : getRowKey(row as Row, rowIndex);
            return (
              <TableRow key={key}>
                {columns.map((column) => {
                  const isRowLabel = column.key === rowLabelKey;
                  const value = loading
                    ? 'placeholder'
                    : column.render
                      ? column.render(row as Row)
                      : ((row as Row)[column.key] as ReactNode);
                  return (
                    <TableCell
                      key={column.key}
                      variant={isRowLabel ? 'rowLabel' : 'body'}
                      align={column.align}
                      loading={loading}
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </DataTableElement>
    </DataTableRoot>
  );
};