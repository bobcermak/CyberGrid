import React from 'react';
import { useTheme } from '../../../theme/styled';
import { AreaChart, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartAxis } from '../../atoms/ChartAxis';
import { ChartLine } from '../../atoms/ChartLine';
import { Skeleton } from '../../atoms/Skeleton';
import { useReveal } from '../../../hooks/useReveal';
import { useControllableState } from '../../../hooks/useControllableState';
import { ChartTooltip } from './ChartTooltip';
import { dataByPeriod, type ChartPoint } from './data';
import { Amount, ChartCard, ChartHeader, FilterButton, FilterGroup, Title, TitleArea } from './InvestmentChart.styles';

const formatUsd = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
export interface InvestmentChartSeries {
  total: number;
  points: ChartPoint[];
}
export interface InvestmentChartProps<P extends string = string> {
  title?: React.ReactNode;
  data?: Record<P, InvestmentChartSeries>;
  periods?: P[];
  period?: P;
  defaultPeriod?: P;
  onPeriodChange?: (period: P) => void;
  formatTotal?: (value: number) => string;
  height?: number;
  hideFilters?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
export const InvestmentChart = <P extends string = string>({
  title = 'Total Investment',
  data = dataByPeriod as unknown as Record<P, InvestmentChartSeries>,
  periods = Object.keys(data) as P[],
  period: periodProp,
  defaultPeriod,
  onPeriodChange,
  formatTotal = formatUsd,
  height = 300,
  hideFilters = false,
  loading = false,
  className,
  style,
}: InvestmentChartProps<P>) => {
  const [filter, setFilter] = useControllableState<P>(
    periodProp,
    defaultPeriod ?? (periods.includes('Month' as P) ? ('Month' as P) : periods[0]),
  );
  const theme = useTheme();
  const reveal = useReveal(loading);
  const { total, points } = data[filter] ?? { total: 0, points: [] };

  const selectPeriod = (next: P) => {
    setFilter(next);
    onPeriodChange?.(next);
  };

  if (loading) {
    return (
      <ChartCard aria-busy className={className} style={style}>
        <ChartHeader>
          <TitleArea>
            <Title>
              <Skeleton width={120} height="0.9em" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </Title>
            <Amount>
              <Skeleton width={220} height="0.8em" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </Amount>
          </TitleArea>
          {!hideFilters && (
            <FilterGroup $loading aria-hidden>
              {periods.map((f) => (
                <FilterButton key={f} tabIndex={-1}>
                  {f}
                </FilterButton>
              ))}
            </FilterGroup>
          )}
        </ChartHeader>
        <Skeleton height={height} radius="md" />
      </ChartCard>
    );
  }
  return (
    <ChartCard $reveal={reveal} className={className} style={style}>
      <ChartHeader>
        <TitleArea>
          <Title>{title}</Title>
          <Amount>{formatTotal(total)}</Amount>
        </TitleArea>
        {!hideFilters && (
          <FilterGroup>
            {periods.map((f) => (
              <FilterButton
                key={f}
                type="button"
                $active={filter === f}
                aria-pressed={filter === f}
                onClick={() => selectPeriod(f)}
              >
                {f}
              </FilterButton>
            ))}
          </FilterGroup>
        )}
      </ChartHeader>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          <AreaChart data={points} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
            <ChartAxis dataKey="name" />
            <Tooltip content={ChartTooltip} cursor={{ stroke: theme.colors.colorYellow, strokeWidth: 1 }} />
            <ChartLine dataKey="value" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
};