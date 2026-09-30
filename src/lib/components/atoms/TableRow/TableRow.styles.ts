import { styled } from '../../../theme/styled';

export const TableRowRoot = styled.tr`
  &:last-child > td,
  &:last-child > th {
    border-bottom: 0;
  }
`;