import type { ReactNode, TdHTMLAttributes } from 'react';
import { useReveal } from '../../../hooks/useReveal';
import { TableCellRoot, type TableCellAlign, type TableCellVariant } from './TableCell.styles';

export interface TableCellProps extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> {
  children?: ReactNode;
  variant?: TableCellVariant;
  align?: TableCellAlign;
  loading?: boolean;
}

export const TableCell = ({
  children,
  variant = 'body',
  align = 'start',
  loading = false,
  ...props
}: TableCellProps) => {
  const reveal = useReveal(loading);

  return (
    <TableCellRoot
      $variant={variant}
      $align={align}
      $skeleton={loading}
      $reveal={reveal}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span aria-hidden>{children ?? 'placeholder'}</span> : children}
    </TableCellRoot>
  );
};