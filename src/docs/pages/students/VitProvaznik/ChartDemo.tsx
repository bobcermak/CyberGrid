import type { ReactNode } from 'react';
import { AreaChart, ResponsiveContainer } from 'recharts';
import { Skeleton } from '../../../../lib';
import { FadeIn } from '../../../components/FadeIn';

const HEIGHT = 180;
const demoData = [
  { name: 'Po', value: 2.1 },
  { name: 'Út', value: 3.4 },
  { name: 'St', value: 2.8 },
  { name: 'Čt', value: 4.6 },
  { name: 'Pá', value: 3.9 },
  { name: 'So', value: 5.2 },
  { name: 'Ne', value: 4.4 },
];
export const ChartDemo = ({ children, loading = false }: { children: ReactNode; loading?: boolean }) =>
  loading ? (
    <Skeleton height={HEIGHT} radius="md" />
  ) : (
    <FadeIn style={{ width: '100%', height: HEIGHT }}>
      <ResponsiveContainer>
        <AreaChart data={demoData} margin={{ top: 16, right: 16, left: 16, bottom: 8 }}>
          {children}
        </AreaChart>
      </ResponsiveContainer>
    </FadeIn>
  );