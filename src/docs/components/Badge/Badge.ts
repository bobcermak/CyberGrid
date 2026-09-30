import styled, { type DefaultTheme } from 'styled-components';
import { alpha } from '../../../lib';

export type BadgeTone = 'atom' | 'molecule' | 'neutral';
const toneColor = (theme: DefaultTheme, tone: BadgeTone) =>
  ({
    atom: theme.colors.colorCyan,
    molecule: theme.colors.colorMagenta,
    neutral: theme.colors.colorPrimary,
  })[tone];
export const Badge = styled.span<{ $tone?: BadgeTone }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  border: ${({ theme }) => theme.borderWidths.hairline} solid
    ${({ theme, $tone = 'neutral' }) => toneColor(theme, $tone)};
  background: ${({ theme, $tone = 'neutral' }) => alpha(toneColor(theme, $tone), 0.08)};
  color: ${({ theme, $tone = 'neutral' }) => toneColor(theme, $tone)};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  line-height: 1.2;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
`;
export const levelLabel = { atom: 'Atom', molecule: 'Molekula' } as const;