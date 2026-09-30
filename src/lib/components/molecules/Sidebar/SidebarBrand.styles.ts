import { styled, css } from 'styled-components';
import { visuallyHidden } from '../../../utils/a11y';

export const brandStyles = css`
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  min-width: 0;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 1;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.colorPrimary};
  text-decoration: none;

  > [data-brand-logo] {
    display: inline-flex;
    flex-shrink: 0;
  }
`;
export const BrandLink = styled.a`
  ${brandStyles}
  border-radius: ${({ theme }) => theme.radii.xs};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.colorYellow};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 4px;
  }
`;
export const BrandStatic = styled.span`
  ${brandStyles}
`;
export const Hidden = styled.span`
  ${visuallyHidden}
`;