import { styled, css } from 'styled-components';
import { alpha } from '../../../utils/color';
import { revealStyles, skeletonText } from '../../../utils/skeleton';

export type TableCellAlign = 'start' | 'center' | 'end';
export type TableCellVariant = 'body' | 'rowLabel';

const alignMap: Record<TableCellAlign, string> = {
  start: 'left',
  center: 'center',
  end: 'right',
};

const rowLabelStyles = css`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

export const TableCellRoot = styled.td<{
  $variant?: TableCellVariant;
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
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
  line-height: ${({ theme }) => theme.textStyles.baseText.lineHeight};
  text-align: ${({ $align = 'start' }) => alignMap[$align]};
  vertical-align: middle;

  &:last-child {
    border-right: 0;
  }

  ${({ $variant }) => $variant === 'rowLabel' && rowLabelStyles}

  ${({ $skeleton }) =>
    $skeleton &&
    css`
      & > * {
        ${skeletonText}
      }
    `}
`;