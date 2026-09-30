import { css } from 'styled-components';
import { styled } from '../../../theme/styled';
import { alpha } from '../../../utils/color';
import { revealStyles, skeletonText } from '../../../utils/skeleton';
import type { TableCellAlign } from '../TableCell/TableCell.styles';

const alignMap: Record<TableCellAlign, string> = {
  start: 'left',
  center: 'center',
  end: 'right',
};

export const TableHeaderRoot = styled.th<{
  $align?: TableCellAlign;
  $skeleton?: boolean;
  $reveal?: boolean;
}>`
  ${({ $reveal }) => $reveal && revealStyles}
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-right: ${({ theme }) => theme.borderWidths.hairline} solid
    ${({ theme }) => alpha(theme.colors.colorPrimary, 0.15)};
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid
    ${({ theme }) => alpha(theme.colors.colorPrimary, 0.15)};
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  text-align: ${({ $align = 'start' }) => alignMap[$align]};
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;

  &:last-child {
    border-right: 0;
  }

  ${({ $skeleton }) =>
    $skeleton &&
    css`
      & > * {
        ${skeletonText}
      }
    `}
`;