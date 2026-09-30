import type { HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import type { RadiusToken } from '../../../theme/theme';
import { SkeletonRoot } from './Skeleton.styles';

type Length = number | string;
export type SkeletonProps = Omit<HTMLAttributes<HTMLSpanElement>, 'children'> & {
  width?: Length;
  height?: Length;
  radius?: RadiusToken | Length;
  circle?: boolean;
};
const toLength = (value: Length) => (typeof value === 'number' ? `${value}px` : value);
const Skeleton = ({ width = '100%', height = 16, radius = 'xs', circle = false, style, ...rest }: SkeletonProps) => {
  const theme = useTheme();
  const resolvedRadius = circle
    ? '50%'
    : typeof radius === 'string' && radius in theme.radii
      ? theme.radii[radius as RadiusToken]
      : toLength(radius);

  return (
    <SkeletonRoot
      aria-hidden
      $radius={resolvedRadius}
      style={{ width: toLength(width), height: toLength(circle ? width : height), ...style }}
      {...rest}
    />
  );
};
export default Skeleton;