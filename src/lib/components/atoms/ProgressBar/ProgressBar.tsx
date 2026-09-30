import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { toRatio } from '../../../utils/math';
import { resolveTone, type ToneProp } from '../../../utils/tone';
import { FieldHeader, FieldValue } from '../shared/FieldHeader';
import { Skeleton } from '../Skeleton';
import { ProgressFill, ProgressRoot, ProgressTrack } from './ProgressBar.styles';
import { useReveal } from '../../../hooks/useReveal';

export type ProgressBarProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  value: number;
  min?: number;
  max?: number;
  label?: ReactNode;
  valueLabel?: string | ((value: number, ratio: number) => string);
  showValue?: boolean;
  tone?: ToneProp;
  loading?: boolean;
};
const ProgressBar = ({
  value,
  min = 0,
  max = 100,
  label,
  valueLabel,
  showValue = true,
  tone = 'yellow',
  loading = false,
  'aria-label': ariaLabel,
  ...rest
}: ProgressBarProps) => {
  const labelId = useId();
  const reveal = useReveal(loading);
  const ratio = toRatio(value, min, max);
  const text =
    typeof valueLabel === 'function'
      ? valueLabel(value, ratio)
      : (valueLabel ?? `${Math.round(ratio * 100)} %`);
  if (loading) {
    return (
      <ProgressRoot {...rest} aria-busy>
        {(label || showValue) && (
          <FieldHeader>
            {label && <Skeleton width="50%" height={12} style={{ margin: '2px 0' }} />}
            {showValue && <Skeleton width={48} height={12} style={{ margin: '2px 0' }} />}
          </FieldHeader>
        )}
        <Skeleton height={8} radius="track" style={{ margin: '1px 0' }} />
      </ProgressRoot>
    );
  }
  return (
    <ProgressRoot {...rest} $reveal={reveal}>
      {(label || showValue) && (
        <FieldHeader>
          {label && <span id={labelId}>{label}</span>}
          {showValue && <FieldValue aria-hidden>{text}</FieldValue>}
        </FieldHeader>
      )}
      <ProgressTrack
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={text}
        aria-label={ariaLabel}
        aria-labelledby={label && !ariaLabel ? labelId : undefined}
      >
        <ProgressFill $tone={resolveTone(tone, ratio)} style={{ width: `${ratio * 100}%` }} />
      </ProgressTrack>
    </ProgressRoot>
  );
};
export default ProgressBar;