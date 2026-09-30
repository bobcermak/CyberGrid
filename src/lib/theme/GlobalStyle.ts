import { createGlobalStyle } from 'styled-components';
import { THEME_SWITCHING_ATTR } from '../utils/switchTheme';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    color-scheme: ${({ theme }) => theme.mode};
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgApp};
    color: ${({ theme }) => theme.colors.colorPrimary};
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
    line-height: ${({ theme }) => theme.textStyles.baseText.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Přepnutí tématu přes switchTheme() – všechno se přebarví v jednom snímku. */
  :root[${THEME_SWITCHING_ATTR}] *,
  :root[${THEME_SWITCHING_ATTR}] *::before,
  :root[${THEME_SWITCHING_ATTR}] *::after {
    transition: none !important;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.headings};
  }

  h1 {
    font-size: ${({ theme }) => theme.textStyles.h1Text.fontSize};
    line-height: ${({ theme }) => theme.textStyles.h1Text.lineHeight};
  }

  h2 {
    font-size: ${({ theme }) => theme.textStyles.h2Text.fontSize};
    line-height: ${({ theme }) => theme.textStyles.h2Text.lineHeight};
  }

  h3 {
    font-size: ${({ theme }) => theme.textStyles.h3Text.fontSize};
    line-height: ${({ theme }) => theme.textStyles.h3Text.lineHeight};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;