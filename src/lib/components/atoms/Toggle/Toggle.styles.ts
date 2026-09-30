import { styled } from 'styled-components';
import { revealStyles, skeletonText } from '../../../utils/skeleton';
import { alpha } from '../../../utils/color';

export const ToggleLabel = styled.label<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  min-height: 32px;
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
  line-height: ${({ theme }) => theme.textStyles.baseText.lineHeight};
  cursor: pointer;
  user-select: none;

  &:has(input:disabled) {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const ToggleInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;

  &:focus-visible + span {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 3px;
  }
`;

export const ToggleTrack = styled.span`
  position: relative;
  display: inline-flex;
  width: 72px;
  height: 40px;
  flex: 0 0 72px;
  align-items: center;
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.colors.colorYellow};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.bgSurface};
  box-shadow: 0 0 12px ${({ theme }) => alpha(theme.colors.colorYellow, 0.5)};

  &::after {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.colorGray};
    content: '';
    transform: translateX(0);
    transition: background-color ${({ theme }) => theme.transitions.base}, transform ${({ theme }) => theme.transitions.base};
  }

  ${ToggleInput}:checked + & {
    background: ${({ theme }) => theme.colors.colorYellow};
  }

  ${ToggleInput}:checked + &::after {
    background: ${({ theme }) => theme.colors.colorPrimaryLight};
    transform: translateX(32px);
  }
`;

export const ToggleSkeletonText = styled.span`
  ${skeletonText}
`;