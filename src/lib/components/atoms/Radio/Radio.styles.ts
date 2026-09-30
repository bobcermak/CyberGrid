import { styled } from '../../../theme/styled';
import { revealStyles, skeletonText } from '../../../utils/skeleton';
import { alpha } from '../../../utils/color';

export const RadioLabel = styled.label<{ $reveal?: boolean }>`
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

export const RadioInput = styled.input`
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

export const RadioCircle = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border: 2px solid ${({ theme }) => theme.colors.colorYellow};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.bgSurface};
  box-shadow: 0 0 12px ${({ theme }) => alpha(theme.colors.colorYellow, 0.5)};

  &::after {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.colorYellow};
    content: '';
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  ${RadioInput}:checked + &::after {
    opacity: 1;
  }
`;

export const RadioSkeletonText = styled.span`
  ${skeletonText}
`;