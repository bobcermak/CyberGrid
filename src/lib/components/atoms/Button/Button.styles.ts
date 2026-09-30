import { css, type DefaultTheme } from 'styled-components';
import { styled } from '../../../theme/styled';
import { Box } from '../../../primitives/Box';
import { alpha } from '../../../utils/color';
import { skeletonSurface } from '../../../utils/skeleton';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'cyan' | 'magenta';
export type ButtonSize = 'sm' | 'md' | 'lg';
export const buttonSizes = {
  sm: { height: '33px', paddingX: '16px', fontSize: '14px', iconSize: 20 },
  md: { height: '41px', paddingX: '24px', fontSize: '16px', iconSize: 24 },
  lg: { height: '49px', paddingX: '32px', fontSize: '18px', iconSize: 28 },
} as const;
type VariantTokens = {
  fg: string;
  bg: string;
  border: string;
  shadow: string;
  hoverBg: string;
  hoverShadow: string;
  joinFilter: string;
  joinImage: string;
};
const getVariantTokens = (theme: DefaultTheme, variant: ButtonVariant): VariantTokens => {
  const { colors, shadows } = theme;
  if (variant === 'primary') {
    return {
      fg: colors.colorPrimaryDark,
      bg: colors.colorYellow,
      border: colors.colorPrimaryDark,
      shadow: shadows.buttonPrimary,
      hoverBg: colors.colorYellow,
      hoverShadow: shadows.buttonPrimaryHover,
      joinFilter: `drop-shadow(0 2px 10px ${alpha(colors.colorYellow, 0.6)})`,
      joinImage: `linear-gradient(to bottom, ${alpha(colors.colorPrimaryDark, 0.22)}, transparent 6px)`,
    };
  }
  const accent = {
    secondary: colors.colorPrimary,
    tertiary: colors.colorYellow,
    cyan: colors.colorCyan,
    magenta: colors.colorMagenta,
  }[variant];
  return {
    fg: accent,
    bg: 'transparent',
    border: accent,
    shadow: 'none',
    hoverBg: alpha(accent, 0.08),
    hoverShadow: `0 0 12px ${alpha(accent, 0.35)}`,
    joinFilter: `drop-shadow(0 0 6px ${alpha(accent, 0.35)})`,
    joinImage: 'none',
  };
};
export const ButtonSegment = styled(Box)<{ $square?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.xs};
  min-height: var(--btn-height);
  border: ${({ theme }) => theme.borderWidths.hairline} solid var(--btn-border);
  background-color: var(--btn-bg);
  box-shadow: var(--btn-shadow);
  transform: translate(var(--btn-join-x, 0px), var(--btn-lift, 0px)) scale(var(--btn-press, 1));
  transition:
    color ${({ theme }) => theme.transitions.slow},
    background-color ${({ theme }) => theme.transitions.base},
    border-color ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base};
  ${({ $square }) =>
    $square
      ? css`
          flex: 0 0 auto;
          width: var(--btn-height);
          padding: 0;
        `
      : css`
          flex: 1 1 auto;
          padding: 0 var(--btn-px);
        `}
`;

export const ButtonIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
`;

export type ButtonBaseProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $loading?: boolean;
};

const loadingStyles = css`
  &,
  &:disabled {
    opacity: 1;
    cursor: progress;
  }

  ${ButtonSegment} {
    color: transparent;
    border-color: transparent;
    box-shadow: none;
    ${skeletonSurface}
  }

  ${ButtonSegment} * {
    visibility: hidden;
  }
`;

export const ButtonBase = styled(Box)<ButtonBaseProps>`
  ${({ theme, $variant, $size }) => {
    const variant = getVariantTokens(theme, $variant);
    const size = buttonSizes[$size];

    return css`
      --btn-fg: ${variant.fg};
      --btn-bg: ${variant.bg};
      --btn-border: ${variant.border};
      --btn-shadow: ${variant.shadow};
      --btn-hover-bg: ${variant.hoverBg};
      --btn-hover-shadow: ${variant.hoverShadow};
      --btn-join-filter: ${variant.joinFilter};
      --btn-join-image: ${variant.joinImage};
      --btn-height: ${size.height};
      --btn-px: ${size.paddingX};
      font-size: ${size.fontSize};
    `;
  }}

  position: relative;
  display: inline-flex;
  align-items: stretch;
  gap: ${({ theme }) => theme.space.xs};
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: none;
  color: var(--btn-fg);
  font-family: ${({ theme }) => theme.fonts.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: filter ${({ theme }) => theme.transitions.base};

  &:hover:not(:disabled) ${ButtonSegment} {
    background-color: var(--btn-hover-bg);
    box-shadow: var(--btn-hover-shadow);
  }

  &:is(:hover, :focus-visible):not(:disabled) ${ButtonSegment} + ${ButtonSegment} {
    --btn-join-x: calc(-1 * (${({ theme }) => theme.space.xs} + 2px));
    border-left-color: transparent;
    background-clip: padding-box;
  }

  &:is(:hover, :focus-visible):not(:disabled) ${ButtonSegment}:has(+ ${ButtonSegment}),
  &:is(:hover, :focus-visible):not(:disabled) ${ButtonSegment} + ${ButtonSegment} {
    box-shadow: none;
    background-image: var(--btn-join-image);
  }

  &:is(:hover, :focus-visible):not(:disabled):has(${ButtonSegment} + ${ButtonSegment}) {
    filter: var(--btn-join-filter);
  }

  &:active:not(:disabled) ${ButtonSegment} {
    box-shadow: ${({ theme }) => theme.shadows.pressed};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${({ $loading }) => $loading && loadingStyles}
`;