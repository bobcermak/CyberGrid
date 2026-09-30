import type { DefaultTheme } from 'styled-components';
import type { ColorToken } from '../theme/theme';

export type Tone = 'yellow' | 'cyan' | 'magenta' | 'success' | 'warning' | 'error';
export type ToneProp = Tone | ((ratio: number) => Tone);
const toneTokens: Record<Tone, ColorToken> = {
  yellow: 'colorYellow',
  cyan: 'colorCyan',
  magenta: 'colorMagenta',
  success: 'colorSuccess',
  warning: 'colorWarning',
  error: 'colorError',
};
export const getToneColor = (theme: DefaultTheme, tone: Tone): string =>
  theme.colors[toneTokens[tone]];
export const resolveTone = (tone: ToneProp, ratio: number): Tone =>
  typeof tone === 'function' ? tone(ratio) : tone;
export const toneScales = {
  ascending: (ratio: number): Tone =>
    ratio < 1 / 3 ? 'error' : ratio < 2 / 3 ? 'warning' : 'success',
  descending: (ratio: number): Tone =>
    ratio < 1 / 3 ? 'success' : ratio < 2 / 3 ? 'warning' : 'error',
};