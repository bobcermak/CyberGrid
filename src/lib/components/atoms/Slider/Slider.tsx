import { useId, type ChangeEvent, type CSSProperties, type InputHTMLAttributes, type ReactNode, type Ref } from 'react';
import { useControllableState } from '../../../hooks/useControllableState';
import { toRatio } from '../../../utils/math';
import { resolveTone, type ToneProp } from '../../../utils/tone';
import { FieldHeader, FieldValue } from '../shared/FieldHeader';
import { Skeleton } from '../Skeleton';
import { SliderInput, SliderRoot } from './Slider.styles';
import { useReveal } from '../../../hooks/useReveal';

export type SliderProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'defaultValue' | 'onChange' | 'size' | 'min' | 'max' | 'step'
> & {
  label?: ReactNode;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
  formatValue?: (value: number) => string;
  showValue?: boolean;
  tone?: ToneProp;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
};
const Slider = ({
  label,
  value,
  defaultValue,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  formatValue = String,
  showValue = true,
  tone = 'yellow',
  loading = false,
  id,
  className,
  style,
  ref,
  ...inputProps
}: SliderProps) => {
  const autoId = useId();
  const inputId = id ?? `${autoId}-slider`;
  const [current, setCurrent] = useControllableState(value, defaultValue ?? min);
  const ratio = toRatio(current, min, max);
  const formatted = formatValue(current);
  const reveal = useReveal(loading);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = Number(event.target.value);
    setCurrent(next);
    onChange?.(next, event);
  };
  if (loading) {
    return (
      <SliderRoot className={className} style={style} aria-busy>
        {(label || showValue) && (
          <FieldHeader>
            {label && <Skeleton width="45%" height={12} style={{ margin: '2px 0' }} />}
            {showValue && <Skeleton width={36} height={12} style={{ margin: '2px 0' }} />}
          </FieldHeader>
        )}
        <Skeleton height={16} radius="track" style={{ margin: '2px 0' }} />
      </SliderRoot>
    );
  }
  return (
    <SliderRoot className={className} style={style} $reveal={reveal}>
      {(label || showValue) && (
        <FieldHeader>
          {label && <label htmlFor={inputId}>{label}</label>}
          {showValue && <FieldValue aria-hidden>{formatted}</FieldValue>}
        </FieldHeader>
      )}
      <SliderInput
        ref={ref}
        id={inputId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={handleChange}
        aria-valuetext={formatted}
        $tone={resolveTone(tone, ratio)}
        style={{ '--slider-ratio': ratio } as CSSProperties}
        {...inputProps}
      />
    </SliderRoot>
  );
};
export default Slider;