import { useTheme } from '../../../theme/styled';

export interface ChartMarkerProps {
  cx?: number;
  cy?: number;
  r?: number;
  color?: string;
}
export const ChartMarker = ({ cx = 0, cy = 0, r = 6, color }: ChartMarkerProps) => {
  const theme = useTheme();
  const fill = color ?? theme.colors.colorYellow;

  return (
    <g aria-hidden>
      <circle cx={cx} cy={cy} r={r * 2} fill={fill} opacity={0.2} />
      <circle cx={cx} cy={cy} r={r} fill={fill} />
    </g>
  );
};