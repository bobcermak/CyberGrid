import type { TooltipContentProps } from 'recharts';
import { CustomTooltipContainer, TooltipDate, TooltipValue } from './ChartTooltip.styles';

export const ChartTooltip = ({ active, payload, label }: TooltipContentProps) => {
  if (active && payload && payload.length) {
    return (
      <CustomTooltipContainer>
        <TooltipDate>{label} 12</TooltipDate>
        <TooltipValue>
          ${Number(payload[0].value).toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </TooltipValue>
      </CustomTooltipContainer>
    );
  }
  return null;
};