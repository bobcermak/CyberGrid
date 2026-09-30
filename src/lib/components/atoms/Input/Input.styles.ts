import { styled } from '../../../theme/styled';
import { revealStyles, skeletonText } from '../../../utils/skeleton';
import { alpha } from '../../../utils/color';

export const InputRoot = styled.div<{ $reveal?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.base};
  ${({ $reveal }) => $reveal && revealStyles}
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
  width: 100%;
`;

export const InputLabel = styled.label<{ $skeleton?: boolean }>`
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  text-transform: uppercase;
  ${({ $skeleton }) => $skeleton && skeletonText}
`;

export const InputControl = styled.input`
  font-family: ${({ theme }) => theme.fonts.base};
  width: 100%;
  min-height: 41px;
  padding: 0 ${({ theme }) => theme.space.md};
  border: ${({ theme }) => theme.borderWidths.thin} solid ${({ theme }) => theme.colors.colorYellow};
  border-radius: ${({ theme }) => theme.radii.none};
  background: ${({ theme }) => theme.colors.bgApp};
  color: ${({ theme }) => theme.colors.colorPrimary};
  outline: none;
  box-shadow: 0 0 12px ${({ theme }) => alpha(theme.colors.colorYellow, 0.4)};
  transition: border-color ${({ theme }) => theme.transitions.base}, box-shadow ${({ theme }) => theme.transitions.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.colorGray};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.colorYellow};
    box-shadow: 0 0 12px ${({ theme }) => alpha(theme.colors.colorYellow, 0.4)};
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

export const InputMessage = styled.span<{ $error?: boolean; $skeleton?: boolean }>`
  color: ${({ theme, $error }) => ($error ? theme.colors.colorError : theme.colors.colorGray)};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  ${({ $skeleton }) => $skeleton && skeletonText}
`;