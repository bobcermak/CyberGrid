import { styled, type DefaultTheme } from 'styled-components';
import { visuallyHidden } from '../../../utils/a11y';
import { alpha } from '../../../utils/color';
import { getToneColor, type Tone } from '../../../utils/tone';
import { revealStyles } from '../../../utils/skeleton';

const cardBorder = (theme: DefaultTheme, tone: Tone) =>
  tone === 'yellow' ? theme.colors.colorWarning : getToneColor(theme, tone);
const cardShadow = (theme: DefaultTheme, tone: Tone) => {
  if (tone === 'yellow') return theme.shadows.card;
  const color = getToneColor(theme, tone);
  return `0 4px 12px ${alpha(color, 0.25)}, inset 0 3px 3px ${alpha(color, 0.25)}`;
};
export const DeviceCardRoot = styled.article<{ $open: boolean; $tone: Tone }>`
  container: device-card / inline-size;
  display: flex;
  flex-direction: column;
  align-self: start;
  min-width: 0;
  padding: ${({ theme, $open }) =>
    `${theme.space.xxl} ${theme.space.md} ${$open ? theme.space.xxl : theme.space.md}`};
  border: 0.25px solid ${({ theme, $tone }) => cardBorder(theme, $tone)};
  background-color: ${({ theme }) => theme.colors.bgSurface};
  box-shadow: ${({ theme, $tone }) => cardShadow(theme, $tone)};
  color: ${({ theme }) => theme.colors.colorPrimary};
  transition:
    padding ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.slow},
    background-color ${({ theme }) => theme.transitions.base};
`;
export const DeviceCardHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: ${({ theme }) => theme.space.lg};
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid
    ${({ theme }) => theme.colors.colorPrimary};
`;
export const ToggleArrow = styled.span<{ $open: boolean }>`
  display: inline-flex;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
  transition: transform ${({ theme }) => theme.transitions.slow};
`;
export const DeviceCardCollapse = styled.div<{ $open: boolean }>`
  display: grid;
  grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
  transition: grid-template-rows ${({ theme }) => theme.transitions.slow};

  > * {
    min-height: 0;
    overflow: hidden;
  }
`;
export const DeviceCardBody = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => `${theme.space.lg} ${theme.space.md} ${theme.space.xxs}`};

  @container device-card (max-width: 380px) {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: ${({ theme }) => theme.space.lg};
  }
`;
export const GaugeSlot = styled.div`
  width: clamp(104px, 30cqi, 168px);

  @container device-card (max-width: 380px) {
    width: clamp(120px, 48cqi, 180px);
  }
`;
export const DeviceCardControls = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  width: 100%;
  min-width: 0;
`;
export const TitleRoot = styled.div<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  min-width: 0;
`;
export const TitleIcon = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.xs};
  background-color: ${({ theme }) => theme.colors.bgApp};
  color: ${({ theme }) => theme.colors.colorPrimary};
`;
export const TitleText = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xxs};
  min-width: 0;
`;
export const TitleHeading = styled.h3`
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: clamp(16px, 4.4cqi, ${({ theme }) => theme.textStyles.h3Text.fontSize});
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  line-height: ${({ theme }) => theme.textStyles.h3Text.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
export const TitleStatus = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  font-size: ${({ theme }) => theme.textStyles.microText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.textStyles.microText.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
`;

export const TitleHidden = styled.span`
  ${visuallyHidden}
`;