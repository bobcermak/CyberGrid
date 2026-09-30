import type { HTMLAttributes, ReactNode } from 'react';
import { TableRowRoot } from './TableRow.styles';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode;
}

export const TableRow = ({ children, ...props }: TableRowProps) => (
  <TableRowRoot {...props}>{children}</TableRowRoot>
);
