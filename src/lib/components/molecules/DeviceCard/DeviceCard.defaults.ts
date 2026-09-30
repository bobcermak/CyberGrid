import type { GaugeProps } from '../../atoms/Gauge';
import type { ProgressBarProps } from '../../atoms/ProgressBar';
import type { SliderProps } from '../../atoms/Slider';
import type { DeviceStatus } from '../../atoms/StatusDot';

export const deviceCardDefaults: {
  title: string;
  status: DeviceStatus;
  statusText: string;
  gauge: GaugeProps;
  slider: SliderProps;
  progress: ProgressBarProps;
} = {
  title: 'Zařízení',
  status: 'on',
  statusText: 'Připojeno',
  gauge: { value: 50, label: 'výkon' },
  slider: { label: 'Výkon', defaultValue: 50, formatValue: (value) => `${value} %` },
  progress: { label: 'Spotřeba dnes', value: 50 },
};
export const resolvePart = <T extends object>(
  props: Partial<T> | false | undefined,
  defaults: T,
  fallback: Partial<T>,
): T | undefined => {
  if (props === false) return undefined;
  if (props === undefined) return defaults;
  return { ...fallback, ...props } as T;
};