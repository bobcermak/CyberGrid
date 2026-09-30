import { css } from 'styled-components';
import { styled } from '../../../theme/styled';
import { getToneColor, type Tone } from '../../../utils/tone';
import { revealStyles } from '../../../utils/skeleton';

const THUMB_WIDTH = 40;
const THUMB_HEIGHT = 20;
const TRACK_HEIGHT = 16;
export const SliderRoot = styled.div<{ $reveal?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.base};
  ${({ $reveal }) => $reveal && revealStyles}
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  width: 100%;
  min-width: 0;
`;
const thumbStyles = css`
  box-sizing: border-box;
  width: ${THUMB_WIDTH}px;
  height: ${THUMB_HEIGHT}px;
  border: solid ${({ theme }) => theme.colors.colorPrimaryLight};
  border-width: 2px 4px;
  border-radius: ${({ theme }) => theme.radii.track};
  background: ${({ theme }) => theme.colors.colorGrayLight};
  box-shadow:
    ${({ theme }) => theme.shadows.raised},
    inset 0 0 2.8px 1.5px ${({ theme }) => theme.colors.colorPrimaryLight};
  cursor: grab;
  transition: transform ${({ theme }) => theme.transitions.fast};
`;

const trackStyles = css`
  height: ${TRACK_HEIGHT}px;
  border-radius: ${({ theme }) => theme.radii.track};
  box-shadow: ${({ theme }) => theme.shadows.track};
`;

const focusRing = css`
  outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
  outline-offset: 2px;
`;

export const SliderInput = styled.input<{ $tone: Tone }>`
  --slider-fill: calc(${THUMB_WIDTH / 2}px + var(--slider-ratio, 0) * (100% - ${THUMB_WIDTH}px));

  display: block;
  width: 100%;
  height: ${THUMB_HEIGHT}px;
  margin: 0;
  background: transparent;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    ${trackStyles}
    background: linear-gradient(
      to right,
      ${({ theme, $tone }) => getToneColor(theme, $tone)} 0 var(--slider-fill),
      ${({ theme }) => theme.colors.colorGray} var(--slider-fill) 100%
    );
  }

  &::-webkit-slider-thumb {
    ${thumbStyles}
    margin-top: ${(TRACK_HEIGHT - THUMB_HEIGHT) / 2}px;
    appearance: none;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    ${trackStyles}
    background: ${({ theme }) => theme.colors.colorGray};
  }

  &::-moz-range-progress {
    height: ${TRACK_HEIGHT}px;
    border-radius: ${({ theme }) => theme.radii.track};
    background: ${({ theme, $tone }) => getToneColor(theme, $tone)};
  }

  &::-moz-range-thumb {
    ${thumbStyles}
  }

  &:hover:not(:disabled)::-webkit-slider-thumb {
    transform: scale(1.06);
  }

  &:hover:not(:disabled)::-moz-range-thumb {
    transform: scale(1.06);
  }

  &:active:not(:disabled)::-webkit-slider-thumb {
    cursor: grabbing;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::-webkit-slider-thumb {
    ${focusRing}
  }

  &:focus-visible::-moz-range-thumb {
    ${focusRing}
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }
`;