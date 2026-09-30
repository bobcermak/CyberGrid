import React, { useState } from 'react';
import { useTheme } from '../../../theme/styled';
import { AreaChart, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartAxis } from '../../atoms/ChartAxis';
import { ChartLine } from '../../atoms/ChartLine';
import { Skeleton } from '../../atoms/Skeleton';
import { useReveal } from '../../../hooks/useReveal';
import { ChartTooltip } from './ChartTooltip';
import { dataByPeriod, periods, type ChartPeriod } from './data';
import { Amount, ChartCard, ChartHeader, FilterButton, FilterGroup, Title, TitleArea } from './InvestmentChart.styles';

const formatUsd = (value: number) =>
  value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export interface InvestmentChartProps {
  loading?: boolean;
}
export const InvestmentChart: React.FC<InvestmentChartProps> = ({ loading = false }) => {
  const [filter, setFilter] = useState<ChartPeriod>('Month');
  const theme = useTheme();
  const reveal = useReveal(loading);
  const { total, points } = dataByPeriod[filter];

  if (loading) {
    return (
      <ChartCard aria-busy>
        <ChartHeader>
          <TitleArea>
            <Title>
              <Skeleton width={120} height="0.9em" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </Title>
            <Amount>
              <Skeleton width={220} height="0.8em" style={{ display: 'inline-block', verticalAlign: 'middle' }} />
            </Amount>
          </TitleArea>
          <FilterGroup $loading aria-hidden>
            {periods.map((f) => (
              <FilterButton key={f} tabIndex={-1}>
                {f}
              </FilterButton>
            ))}
          </FilterGroup>
        </ChartHeader>
        <Skeleton height={300} radius="md" />
      </ChartCard>
    );
  }
  return (
    <ChartCard $reveal={reveal}>
      <ChartHeader>
        <TitleArea>
          <Title>Total Investment</Title>
          <Amount>{formatUsd(total)}</Amount>
        </TitleArea>
        <FilterGroup>
          {periods.map((f) => (
            <FilterButton
              key={f}
              type="button"
              $active={filter === f}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </FilterButton>
          ))}
        </FilterGroup>
      </ChartHeader>
      <div style={{ width: '100%', height: 300 }}>
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