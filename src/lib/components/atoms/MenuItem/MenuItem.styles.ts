import { styled, css } from 'styled-components';
import { revealStyles, skeletonSurface } from '../../../utils/skeleton';

export interface MenuItemRootProps {
  $isActive?: boolean;
  $collapsed?: boolean;
  $reveal?: boolean;
}

const activeStyles = css`
  border-color: ${({ theme }) => theme.colors.colorPrimaryDark};
  background: ${({ theme }) => theme.colors.colorYellow};
  color: ${({ theme }) => theme.colors.colorPrimaryDark};
`;

export const MenuItemRoot = styled.button<MenuItemRootProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  gap: ${({ theme }) => theme.space.xs};
  width: 100%;
  min-height: 42px;
  padding: ${({ theme, $collapsed }) =>
    $collapsed ? theme.space.sm : `${theme.space.sm} ${theme.space.xl}`};
  border: ${({ theme }) => theme.borderWidths.hairline} solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.textStyles.baseText.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color ${({ theme }) => theme.transitions.base},
    color ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base};

  ${({ $isActive }) => $isActive && activeStyles}
  ${({ $reveal }) => $reveal && revealStyles}

  &:hover:not(:disabled) {
    ${({ $isActive, theme }) =>
      !$isActive &&
      css`
        background-color: ${theme.colors.bgApp};
      `}
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 2px;
  }

  &:disabled {
    ${activeStyles}
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const MenuItemIcon = styled.span`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const MenuItemLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const MenuItemSkeletonLabel = styled(MenuItemLabel)`
  border-radius: ${({ theme }) => theme.radii.xs};
  color: transparent;
  ${skeletonSurface}
`;