import { alpha } from '../utils/color';

const lightColors = {
  bgApp: '#EEF0F6',
  bgSurface: '#FFFFFF',
  colorPrimary: '#0D0D1A',
  colorPrimaryDark: '#0D0D1A',
  colorPrimaryLight: '#FFFFFF',
  colorPrimaryReverse: '#E6E6F0',
  colorCyan: '#007F99',
  colorMagenta: '#B3007F',
  colorYellow: '#E6D300',
  colorSuccess: '#00875A',
  colorWarning: '#A86400',
  colorError: '#D0004A',
  colorDisabled: '#9FA0B0',
  colorGray: '#E5E5E5',
  colorGrayLight: '#E5E5E5',
  colorYellowGraph: '#E6D30008',
};
export type ThemeColors = typeof lightColors;
export type ColorToken = keyof ThemeColors;
const darkColors: ThemeColors = {
  bgApp: '#0A0A12',
  bgSurface: '#12121F',
  colorPrimary: '#E6E6F0',
  colorPrimaryDark: '#0D0D1A',
  colorPrimaryLight: '#FFFFFF',
  colorPrimaryReverse: '#0D0D1A',
  colorCyan: '#00F0FF',
  colorMagenta: '#FF00C8',
  colorYellow: '#FCEE0A',
  colorSuccess: '#00FF9F',
  colorWarning: '#FFB800',
  colorError: '#FF2A6D',
  colorDisabled: '#525266',
  colorGray: '#919191',
  colorGrayLight: '#E5E5E5',
  colorYellowGraph: '#FCEE0A08',
};
export const typography = {
  fonts: {
    headings: '"Orbitron", sans-serif',
    base: '"Rajdhani", sans-serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    normal: '0',
    wide: '0.1em',
  },
  textStyles: {
    microText: {
      fontSize: '10px',
      lineHeight: '12px',
    },
    smallText: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    baseText: {
      fontSize: '16px',
      lineHeight: '16px',
    },
    h3Text: {
      fontSize: '20px',
      lineHeight: '25px',
    },
    h2Text: {
      fontSize: '25px',
      lineHeight: '31.3px',
    },
    h1Text: {
      fontSize: '39px',
      lineHeight: '48.8px',
    },
  },
};
export const foundations = {
  space: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '44px',
  },
  radii: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    track: '10px',
    pill: '999px',
  },
  borderWidths: {
    hairline: '0.5px',
    thin: '1px',
  },
  transitions: {
    fast: '150ms ease',
    base: '200ms ease-in-out',
    slow: '400ms cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
};
export type SpaceToken = keyof typeof foundations.space;
export type RadiusToken = keyof typeof foundations.radii;
const createShadows = (colors: ThemeColors) => ({
  surface: '0 4px 12px rgba(0, 0, 0, 0.05)',
  card: `0 4px 12px ${alpha('#FFB800', 0.25)}, inset 0 3px 3px ${alpha(colors.colorYellow, 0.25)}`,
  buttonPrimary: `0 1px 12px ${alpha(colors.colorYellow, 0.5)}, inset 0 3px 3px ${alpha(colors.colorPrimaryDark, 0.25)}`,
  buttonPrimaryHover: `0 2px 20px ${alpha(colors.colorYellow, 0.75)}, inset 0 3px 3px ${alpha(colors.colorPrimaryDark, 0.25)}`,
  pressed: `inset 0 3px 6px ${alpha(colors.colorPrimaryDark, 0.35)}`,
  track: `inset 0 2px 2px ${alpha('#0A0A12', 0.08)}, inset 0 -2px 2px ${alpha('#0A0A12', 0.05)}`,
  raised: `0 0 4px ${alpha('#0A0A12', 0.25)}`,
});
export type ThemeShadows = ReturnType<typeof createShadows>;
export type ThemeMode = 'light' | 'dark';
export type Theme = {
  mode: ThemeMode;
  colors: ThemeColors;
  shadows: ThemeShadows;
} & typeof typography &
  typeof foundations;
export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  shadows: createShadows(lightColors),
  ...typography,
  ...foundations,
};
export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  shadows: createShadows(darkColors),
  ...typography,
  ...foundations,
};
export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};