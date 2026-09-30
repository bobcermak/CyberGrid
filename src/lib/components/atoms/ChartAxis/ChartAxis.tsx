import { useTheme } from 'styled-components';
import { CartesianGrid, XAxis } from 'recharts';

export interface ChartAxisProps {
  dataKey?: string;
  grid?: boolean;
}
export const ChartAxis = ({ dataKey = 'name', grid = true }: ChartAxisProps) => {
  const theme = useTheme();

  return (
    <>
      {grid && <CartesianGrid vertical={false} stroke={theme.colors.colorDisabled} opacity={0.2} />}
      <XAxis
        dataKey={dataKey}
        axisLine={false}
        tickLine={false}
        tick={{ fill: theme.colors.colorDisabled, fontSize: 12, fontFamily: theme.fonts.base, dy: 10 }}
      />
    </>
  );
};