import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { toRatio } from '../../../utils/math';
import { resolveTone, type ToneProp } from '../../../utils/tone';
import { Skeleton } from '../Skeleton';
import { GaugeContent, GaugeLabel, GaugeNumber, GaugeRoot, GaugeSkeletonTrack, GaugeSvg, GaugeTrack, GaugeValue } from './Gauge.styles';
import { useReveal } from '../../../hooks/useReveal';

const VIEWBOX = 150;
const CENTER = VIEWBOX / 2;
const STROKE = (VIEWBOX / 2) * (1 - 0.767);
const RADIUS = CENTER - STROKE / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const ARC = CIRCUMFERENCE * 0.75;
const ROTATION = `rotate(135 ${CENTER} ${CENTER})`;
export type GaugeProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  value: number;
  min?: number;
  max?: number;
  label?: ReactNode;
  formatValue?: (value: number, ratio: number) => string;
  size?: number | string;
  tone?: ToneProp;
  loading?: boolean;
};
const Gauge = ({
  value,
  min = 0,
  max = 100,
  label,
  formatValue = (_value, ratio) => `${Math.round(ratio * 100)}%`,
  size = 150,
  tone = 'yellow',
  loading = false,
  style,
  'aria-label': ariaLabel,
  ...rest
}: GaugeProps) => {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const ratio = toRatio(value, min, max);
  const text = formatValue(value, ratio);
  const filterId = `${id}-inset`;
  const labelId = `${id}-label`;
  const reveal = useReveal(loading);
  const width = typeof size === 'number' ? `${size}px` : size;
  if (loading) {
    return (
      <GaugeRoot aria-busy style={{ width, ...style }} {...rest}>
        <GaugeSvg viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`} aria-hidden focusable="false">
          <GaugeSkeletonTrack
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={`${ARC} ${CIRCUMFERENCE}`}
            transform={ROTATION}
          />
        </GaugeSvg>
        <GaugeContent aria-hidden>
          <Skeleton width="38%" height="14cqi" />
          {label && <Skeleton width="30%" height="7cqi" />}
        </GaugeContent>
      </GaugeRoot>
    );
  }

  return (
    <GaugeRoot
      $reveal={reveal}
      role="meter"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={text}
      aria-label={ariaLabel}
      aria-labelledby={label && !ariaLabel ? labelId : undefined}
      style={{ width, ...style }}
      {...rest}
    >
      <GaugeSvg viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`} aria-hidden focusable="false">
        <defs>
          <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
            <feComponentTransfer in="SourceAlpha" result="inverse">
              <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
            <feGaussianBlur in="inverse" stdDeviation="2" result="blur" />
            <feOffset in="blur" dy="3" result="offset" />
            <feFlood floodColor="#0A0A12" floodOpacity="0.12" />
            <feComposite in2="offset" operator="in" />
            <feComposite in2="SourceAlpha" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="shadow" />
            </feMerge>
          </filter>
        </defs>
        <GaugeTrack
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={`${ARC} ${CIRCUMFERENCE}`}
          transform={ROTATION}
          filter={`url(#${filterId})`}
        />
        <GaugeValue
          $tone={resolveTone(tone, ratio)}
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeDasharray={`${ARC * ratio} ${CIRCUMFERENCE}`}
          transform={ROTATION}
          style={{ opacity: ratio > 0 ? 1 : 0 }}
        />
      </GaugeSvg>
      <GaugeContent aria-hidden>
        <GaugeNumber>{text}</GaugeNumber>
        {label && <GaugeLabel id={labelId}>{label}</GaugeLabel>}
      </GaugeContent>
    </GaugeRoot>
  );
};
export default Gauge;