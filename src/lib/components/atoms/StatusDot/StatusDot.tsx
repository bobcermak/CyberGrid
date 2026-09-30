import type { HTMLAttributes } from 'react';
import { Skeleton } from '../Skeleton';
import { StatusDotRoot, type DeviceStatus } from './StatusDot.styles';
import { useReveal } from '../../../hooks/useReveal';

export type StatusDotProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  status: DeviceStatus;
  size?: number;
  pulse?: boolean;
  label?: string;
  loading?: boolean;
};
const StatusDot = ({ status, size = 6, pulse, label, loading = false, ...rest }: StatusDotProps) => {
  const reveal = useReveal(loading);
  if (loading) {
    return <Skeleton circle width={size} style={{ display: 'inline-block' }} {...rest} />;
  }
  return (
    <StatusDotRoot
      $status={status}
      $size={size}
      $pulse={pulse ?? status === 'on'}
      $reveal={reveal}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...rest}
    />
  );
};
export default StatusDot;