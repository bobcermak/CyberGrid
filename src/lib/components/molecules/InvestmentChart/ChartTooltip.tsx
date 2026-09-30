import type { TooltipContentProps } from 'recharts';
import { CustomTooltipContainer, TooltipDate, TooltipValue } from './ChartTooltip.styles';

export interface ChartTooltipProps extends TooltipContentProps {
  formatValue: (value: number) => string;
}
export const ChartTooltip = ({ active, payload, label, formatValue }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <TooltipDate>{label}</TooltipDate>
        <TooltipValue>{formatValue(Number(payload[0].value))}</TooltipValue>
      </CustomTooltipContainer>
    );
  }
  return null;
};