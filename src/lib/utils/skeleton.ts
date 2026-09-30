import { css, keyframes } from 'styled-components';
import { alpha } from './color';

const shimmer = keyframes`
  from { background-position: 133.333% 0; }
  to   { background-position: 0% 0; }
`;

export const skeletonPulse = keyframes`
  0%, 100% { opacity: 0.55; }
  50%      { opacity: 1; }
`;

const reveal = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

export const skeletonSurface = css`
  background-color: ${({ theme }) => alpha(theme.colors.colorPrimary, 0.08)};
  background-image: linear-gradient(
    90deg,
    transparent 25%,
    ${({ theme }) => alpha(theme.colors.colorPrimary, 0.1)} 37%,
    transparent 63%
  );
  background-repeat: repeat;
  background-size: 400% 100%;
  animation: ${shimmer} 1.6s linear infinite;
`;

export const revealStyles = css`
  animation: ${reveal} 400ms ease-out backwards;
`;

export const skeletonText = css`
  display: inline-block;
  width: fit-content;
  max-width: 100%;
  border-radius: ${({ theme }) => theme.radii.xs};
  color: transparent;
  user-select: none;
  ${skeletonSurface}
`;