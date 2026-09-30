import { css, type DefaultTheme } from 'styled-components';
import { styled } from '../../theme/styled';
import type { ColorToken, RadiusToken, SpaceToken } from '../../theme/theme';

type CssLength = number | string;
export type ColorValue = ColorToken | (string & {});
export interface BoxStyleProps {
  $color?: ColorValue;
  $bg?: ColorValue;
  $borderColor?: ColorValue;
  $borderWidth?: CssLength;
  $width?: CssLength;
  $height?: CssLength;
  $p?: SpaceToken | CssLength;
  $radius?: RadiusToken | CssLength;
}
const toLength = (value: CssLength): string =>
  typeof value === 'number' ? `${value}px` : value;
const resolveColor = (theme: DefaultTheme, value: ColorValue): string =>
  value in theme.colors ? theme.colors[value as ColorToken] : value;
const resolveSpace = (theme: DefaultTheme, value: SpaceToken | CssLength): string =>
  typeof value === 'string' && value in theme.space
    ? theme.space[value as SpaceToken]
    : toLength(value);
const resolveRadius = (theme: DefaultTheme, value: RadiusToken | CssLength): string =>
  typeof value === 'string' && value in theme.radii
    ? theme.radii[value as RadiusToken]
    : toLength(value);
export const boxStyles = css<BoxStyleProps>`
  box-sizing: border-box;

  ${({ theme, $color }) => $color && css`color: ${resolveColor(theme, $color)};`}
  ${({ theme, $bg }) => $bg && css`background-color: ${resolveColor(theme, $bg)};`}
  ${({ theme, $borderColor, $borderWidth = 1 }) =>
    $borderColor &&
    css`border: ${toLength($borderWidth)} solid ${resolveColor(theme, $borderColor)};`}
  ${({ $width }) => $width !== undefined && css`width: ${toLength($width)};`}
  ${({ $height }) => $height !== undefined && css`height: ${toLength($height)};`}
  ${({ theme, $p }) => $p !== undefined && css`padding: ${resolveSpace(theme, $p)};`}
  ${({ theme, $radius }) =>
    $radius !== undefined && css`border-radius: ${resolveRadius(theme, $radius)};`}
`;
export const Box = styled.div<BoxStyleProps>`
  ${boxStyles}
`;