import { styled, css } from 'styled-components';
import { revealStyles, skeletonSurface } from '../../../utils/skeleton';

export const ChartCard = styled.div<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  background-color: ${({ theme }) => theme.colors.bgSurface};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
`;
export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;
export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.colorDisabled};
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
  font-weight: 500;
  text-transform: capitalize;
`;
export const Amount = styled.h1`
  color: ${({ theme }) => theme.colors.colorPrimary};
`;
export const FilterGroup = styled.div<{ $loading?: boolean }>`
  display: flex;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bgApp};
  padding: 0.25rem;
  border-radius: 6px;

  ${({ $loading }) =>
    $loading &&
    css`
      ${skeletonSurface}

      & > * {
        visibility: hidden;
      }
    `}
`;
export const FilterButton = styled.button<{ $active?: boolean }>`
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.colorPrimaryDark : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? '#E6E6F0' : theme.colors.colorPrimary};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $active, theme }) =>
      !$active && theme.colors.colorDisabled};
  }
`;