import { useId, type HTMLAttributes, type ReactNode } from 'react';
import { BoltIcon } from '../../../icons';
import { ArrowIcon } from '../../atoms/Button';
import { Gauge, type GaugeProps } from '../../atoms/Gauge';
import { IconButton } from '../../atoms/IconButton';
import { ProgressBar, type ProgressBarProps } from '../../atoms/ProgressBar';
import { Slider, type SliderProps } from '../../atoms/Slider';
import type { DeviceStatus } from '../../atoms/StatusDot';
import { useControllableState } from '../../../hooks/useControllableState';
import { toRatio } from '../../../utils/math';
import { resolveTone, type Tone } from '../../../utils/tone';
import DeviceCardTitle, { type HeadingLevel } from './DeviceCardTitle';
import { deviceCardDefaults, resolvePart } from './DeviceCard.defaults';
import { DeviceCardBody, DeviceCardCollapse, DeviceCardControls, DeviceCardHeader, DeviceCardRoot, GaugeSlot, ToggleArrow } from './DeviceCard.styles';

export type DeviceCardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  title?: string;
  icon?: ReactNode;
  status?: DeviceStatus;
  statusText?: ReactNode;
  gauge?: Partial<GaugeProps> | false;
  slider?: SliderProps | false;
  progress?: Partial<ProgressBarProps> | false;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  collapsible?: boolean;
  headingLevel?: HeadingLevel;
  tone?: Tone;
  loading?: boolean;
};
type CardParts = { tone?: Tone; gauge?: GaugeProps; slider?: SliderProps; progress?: ProgressBarProps };
const getCardTone = ({ tone, gauge, slider, progress }: CardParts): Tone => {
  if (tone) return tone;
  if (gauge?.tone) return resolveTone(gauge.tone, toRatio(gauge.value, gauge.min ?? 0, gauge.max ?? 100));
  if (slider?.tone) {
    const min = slider.min ?? 0;
    const value = slider.value ?? slider.defaultValue ?? min;
    return resolveTone(slider.tone, toRatio(value, min, slider.max ?? 100));
  }
  if (progress?.tone) {
    return resolveTone(progress.tone, toRatio(progress.value, progress.min ?? 0, progress.max ?? 100));
  }
  return 'yellow';
};
const DeviceCard = ({
  loading = false,
  tone,
  title = deviceCardDefaults.title,
  icon = <BoltIcon size={20} />,
  status = deviceCardDefaults.status,
  statusText = deviceCardDefaults.statusText,
  gauge: gaugeProp,
  slider: sliderProp,
  progress: progressProp,
  children,
  open: openProp,
  defaultOpen = true,
  onOpenChange,
  collapsible = true,
  headingLevel,
  ...rest
}: DeviceCardProps) => {
  const gauge = resolvePart(gaugeProp, deviceCardDefaults.gauge, { value: deviceCardDefaults.gauge.value });
  const slider = resolvePart(sliderProp, deviceCardDefaults.slider, {});
  const progress = resolvePart(progressProp, deviceCardDefaults.progress, { value: deviceCardDefaults.progress.value });
  const id = useId();
  const headingId = `${id}-title`;
  const bodyId = `${id}-body`;
  const [open, setOpen] = useControllableState(openProp, defaultOpen);
  const isOpen = collapsible ? open : true;
  const hasControls = Boolean(slider || progress || children);

  const toggle = () => {
    setOpen(!open);
    onOpenChange?.(!open);
  };
  return (
    <DeviceCardRoot
      $open={isOpen}
      $tone={getCardTone({ tone, gauge, slider, progress })}
      aria-labelledby={headingId}
      aria-busy={loading || undefined}
      {...rest}
    >
      <DeviceCardHeader>
        <DeviceCardTitle
          title={title}
          icon={icon}
          status={status}
          statusText={statusText}
          headingId={headingId}
          headingLevel={headingLevel}
          loading={loading}
        />
        {collapsible && (
          <IconButton
            variant="secondary"
            aria-label={isOpen ? `Sbalit ${title}` : `Rozbalit ${title}`}
            aria-expanded={isOpen}
            aria-controls={bodyId}
            onClick={toggle}
            loading={loading}
            icon={
              <ToggleArrow $open={isOpen}>
                <ArrowIcon direction="down" size={24} />
              </ToggleArrow>
            }
          />
        )}
      </DeviceCardHeader>
      <DeviceCardCollapse id={bodyId} $open={isOpen} inert={!isOpen}>
        <div>
          <DeviceCardBody>
            {gauge && (
              <GaugeSlot>
                <Gauge size="100%" {...gauge} loading={loading} />
              </GaugeSlot>
            )}
            {hasControls && (
              <DeviceCardControls>
                {slider && <Slider {...slider} loading={loading} />}
                {progress && <ProgressBar {...progress} loading={loading} />}
                {children}
              </DeviceCardControls>
            )}
          </DeviceCardBody>
        </div>
      </DeviceCardCollapse>
    </DeviceCardRoot>
  );
};
export default DeviceCard;