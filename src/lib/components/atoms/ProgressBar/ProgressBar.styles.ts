import { styled } from '../../../theme/styled';
import { getToneColor, type Tone } from '../../../utils/tone';
import { revealStyles } from '../../../utils/skeleton';

export const ProgressRoot = styled.div<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  display: grid;
  gap: ${({ theme }) => theme.space.xxs};
  width: 100%;
  min-width: 0;
`;

export const ProgressTrack = styled.div`
  position: relative;
  height: 8px;
  margin: 1px 0;
  border-radius: ${({ theme }) => theme.radii.track};
  background: ${({ theme }) => theme.colors.colorGray};
  box-shadow: ${({ theme }) => theme.shadows.track};
`;

export const ProgressFill = styled.div<{ $tone: Tone }>`
  position: absolute;
  top: -1px;
  left: 0;
  height: 10px;
  border-radius: ${({ theme }) => theme.radii.track};
  background: ${({ theme, $tone }) => getToneColor(theme, $tone)};
  box-shadow: ${({ theme }) => theme.shadows.raised};
  transition:
    width ${({ theme }) => theme.transitions.slow},
    background-color ${({ theme }) => theme.transitions.base};
`;