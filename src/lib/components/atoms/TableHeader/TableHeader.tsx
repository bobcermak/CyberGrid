import type { ReactNode, ThHTMLAttributes } from 'react';
import { useReveal } from '../../../hooks/useReveal';
import { TableHeaderRoot } from './TableHeader.styles';
import type { TableCellAlign } from '../TableCell/TableCell.styles';

export interface TableHeaderProps extends Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> {
  children?: ReactNode;
  align?: TableCellAlign;
  loading?: boolean;
}

export const TableHeader = ({
  children,
  align = 'start',
  loading = false,
  ...props
}: TableHeaderProps) => {
  const reveal = useReveal(loading);

  return (
    <TableHeaderRoot
      scope="col"
      $align={align}
      $skeleton={loading}
      $reveal={reveal}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span aria-hidden>{children ?? 'placeholder'}</span> : children}
    </TableHeaderRoot>
  );
};