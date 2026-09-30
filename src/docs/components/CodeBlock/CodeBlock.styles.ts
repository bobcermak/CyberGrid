import styled, { type DefaultTheme } from 'styled-components';
import type { TokenKind } from './highlight';

const tokenColor = (theme: DefaultTheme, kind: TokenKind) =>
  ({
    comment: theme.colors.colorDisabled,
    string: theme.colors.colorWarning,
    tag: theme.colors.colorCyan,
    keyword: theme.colors.colorMagenta,
    number: theme.colors.colorSuccess,
    plain: 'inherit',
  })[kind];

export const Root = styled.figure`
  min-width: 0;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background: ${({ theme }) => theme.colors.bgApp};
`;

export const Bar = styled.figcaption`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 6px 6px 16px;
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;

export const Pre = styled.pre`
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  line-height: 1.65;
  tab-size: 2;
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

export const Token = styled.span<{ $kind: TokenKind }>`
  color: ${({ theme, $kind }) => tokenColor(theme, $kind)};
  font-style: ${({ $kind }) => ($kind === 'comment' ? 'italic' : 'normal')};
`;