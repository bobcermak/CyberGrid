import type { CSSProperties } from 'react';
import { ArrowDownIcon, ArrowDownRightIcon, ArrowUpIcon, ArrowUpRightIcon } from '../../../icons';
import { ArrowSlot } from './ArrowIcon.styles';

export type ArrowDirection = 'up-right' | 'down-right' | 'up' | 'down';
const icons = {
  'up-right': ArrowUpRightIcon,
  'down-right': ArrowDownRightIcon,
  up: ArrowUpIcon,
  down: ArrowDownIcon,
} as const;
const nudge: Record<ArrowDirection, [string, string]> = {
  'up-right': ['2px', '-2px'],
  'down-right': ['2px', '2px'],
  up: ['0px', '-2px'],
  down: ['0px', '2px'],
};
export type ArrowIconProps = {
  direction: ArrowDirection;
  size: number;
};
const ArrowIcon = ({ direction, size }: ArrowIconProps) => {
  const Icon = icons[direction];
  const [x, y] = nudge[direction];

  return (
    <ArrowSlot
      aria-hidden
      style={{ '--arrow-nudge-x': x, '--arrow-nudge-y': y } as CSSProperties}
    >
      <Icon size={size} />
    </ArrowSlot>
  );
};
export default ArrowIcon;