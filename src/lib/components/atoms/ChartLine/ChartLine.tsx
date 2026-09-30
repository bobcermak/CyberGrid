import { useId } from 'react';
import { useTheme } from 'styled-components';
import { Area } from 'recharts';
import { ChartMarker } from '../ChartMarker';

export interface ChartLineProps {
  dataKey?: string;
  color?: string;
}
export const ChartLine = ({ dataKey = 'value', color }: ChartLineProps) => {
  const theme = useTheme();
  const gradientId = `chart-line-${useId().replace(/:/g, '')}`;
  const stroke = color ?? theme.colors.colorYellow;

  return (
    <>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={stroke} stopOpacity={0.15} />
          <stop offset="95%" stopColor={stroke} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="linear"
        dataKey={dataKey}
        stroke={stroke}
        strokeWidth={2}
        fillOpacity={1}
        fill={`url(#${gradientId})`}
        activeDot={<ChartMarker color={stroke} />}
      />
    </>
  );
};