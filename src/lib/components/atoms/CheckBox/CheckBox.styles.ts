import { styled } from '../../../theme/styled';
import { revealStyles, skeletonText } from '../../../utils/skeleton';
import { alpha } from '../../../utils/color';

export const CheckBoxLabel = styled.label<{ $reveal?: boolean }>`
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

export const CheckBoxInput = styled.input`
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

export const CheckBoxBox = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex: 0 0 24px;
  border: 2px solid ${({ theme }) => theme.colors.colorYellow};
  background: ${({ theme }) => theme.colors.bgSurface};
  color: ${({ theme }) => theme.colors.colorPrimaryDark};
  box-shadow: 0 0 12px ${({ theme }) => alpha(theme.colors.colorYellow, 0.5)};

  &::after {
    width: 11px;
    height: 6px;
    border-bottom: 2px solid currentColor;
    border-left: 2px solid currentColor;
    content: '';
    opacity: 0;
    transform: rotate(-45deg) translate(1px, -1px);
    transition: opacity ${({ theme }) => theme.transitions.fast};
  }

  ${CheckBoxInput}:checked + & {
    background: ${({ theme }) => theme.colors.colorYellow};
  }

  ${CheckBoxInput}:checked + &::after {
    opacity: 1;
  }
`;

export const CheckBoxSkeletonText = styled.span`
  ${skeletonText}
`;