import styled from 'styled-components';

export const Eyebrow = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorCyan};
`;

export const PageTitle = styled.h1`
  font-size: clamp(24px, 5vw, ${({ theme }) => theme.textStyles.h1Text.fontSize});
  overflow-wrap: anywhere;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  outline: none;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(18px, 5vw, ${({ theme }) => theme.textStyles.h2Text.fontSize});
  overflow-wrap: anywhere;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
`;

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.textStyles.baseText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
`;

export const Lead = styled.p`
  max-width: 68ch;
  font-size: clamp(16px, 4vw, 18px);
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.colorPrimary};
  opacity: 0.85;
`;

export const Text = styled.p`
  max-width: 72ch;
  line-height: 1.6;

  code {
    padding: 1px 6px;
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.85em;
    background: ${({ theme }) => theme.colors.bgApp};
    border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  }
`;

export const List = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
  max-width: 72ch;
  padding-left: 1.2em;
  line-height: 1.5;

  li::marker {
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.85em;
  }
`;

export const Stack = styled.div<{ $gap?: string }>`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: ${({ $gap = '16px' }) => $gap};
`;

export const Row = styled.div<{ $gap?: string; $align?: string }>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ $align = 'center' }) => $align};
  gap: ${({ $gap = '16px' }) => $gap};
`;