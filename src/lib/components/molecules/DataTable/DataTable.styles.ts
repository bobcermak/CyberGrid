import { css } from 'styled-components';
import { styled } from '../../../theme/styled';
import { revealStyles, skeletonText } from '../../../utils/skeleton';

export const DataTableRoot = styled.div<{ $reveal?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.base};
  ${({ $reveal }) => $reveal && revealStyles}
  width: 100%;
  background: ${({ theme }) => theme.colors.bgSurface};
  border-top: 2px solid ${({ theme }) => theme.colors.colorYellow};
  border-left: 2px solid ${({ theme }) => theme.colors.colorYellow};
  overflow-x: auto;
  contain: inline-size;
`;

export const DataTableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
`;

export const DataTableCaption = styled.caption`
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  color: ${({ theme }) => theme.colors.colorYellow};
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-align: left;
  text-transform: uppercase;
`;

export const DataTableCaptionText = styled.span<{ $skeleton?: boolean }>`
  ${({ $skeleton }) =>
    $skeleton &&
    css`
      ${skeletonText}
    `}
`;