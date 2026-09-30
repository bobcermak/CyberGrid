import styled from 'styled-components';
import { alpha } from '../../../lib';
import { visuallyHidden } from '../../../lib/utils/a11y';

export const Mark = styled.span`
  white-space: nowrap;

  svg {
    display: inline-block;
    /* Čtverec 1,2em vycentrovaný na výšku verzálek (0,72em): přesah 0,24em nahoře i dole. */
    vertical-align: -0.24em;
    margin-right: 0.1em;
  }
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.colorYellow};
  text-shadow: 0 0 24px ${({ theme }) => alpha(theme.colors.colorYellow, 0.5)};
`;

export const Hidden = styled.span`
  ${visuallyHidden}
`;