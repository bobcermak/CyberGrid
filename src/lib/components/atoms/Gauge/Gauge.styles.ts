import { styled } from '../../../theme/styled';
import { alpha } from '../../../utils/color';
import { revealStyles, skeletonPulse } from '../../../utils/skeleton';
import { getToneColor, type Tone } from '../../../utils/tone';

export const GaugeRoot = styled.div<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  container-type: inline-size;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  aspect-ratio: 1;
`;

export const GaugeSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

export const GaugeTrack = styled.circle`
  fill: none;
  stroke: ${({ theme }) => theme.colors.colorGray};
`;

export const GaugeSkeletonTrack = styled.circle`
  fill: none;
  stroke: ${({ theme }) => alpha(theme.colors.colorPrimary, 0.1)};
  animation: ${skeletonPulse} 1.4s ease-in-out infinite;
`;

export const GaugeValue = styled.circle<{ $tone: Tone }>`
  fill: none;
  stroke: ${({ theme, $tone }) => getToneColor(theme, $tone)};
  filter: drop-shadow(0 0 4px rgba(10, 10, 18, 0.25));
  transition:
    opacity ${({ theme }) => theme.transitions.base},
    stroke ${({ theme }) => theme.transitions.base};
`;

export const GaugeContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5cqi;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  color: ${({ theme }) => theme.colors.colorPrimary};
  pointer-events: none;
`;

export const GaugeNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: clamp(12px, 16.7cqi, 48px);
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: 1;
  font-variant-numeric: tabular-nums;
`;

export const GaugeLabel = styled.span`
  max-width: 62%;
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: clamp(9px, 8cqi, 18px);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 1;
`;