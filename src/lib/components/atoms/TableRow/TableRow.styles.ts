import { styled } from 'styled-components';

export const TableRowRoot = styled.tr`
  &:last-child > td,
  &:last-child > th {
    border-bottom: 0;
  }
`;