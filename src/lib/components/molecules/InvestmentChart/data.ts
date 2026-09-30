export type ChartPeriod = 'Day' | 'Week' | 'Month';
export interface ChartPoint {
  name: string;
  value: number;
}
export const periods: ChartPeriod[] = ['Day', 'Week', 'Month'];
export const dataByPeriod: Record<ChartPeriod, { total: number; points: ChartPoint[] }> = {
  Day: {
    total: 412.8,
    points: [
      { name: '00:00', value: 120 },
      { name: '03:00', value: 95 },
      { name: '06:00', value: 180 },
      { name: '09:00', value: 340 },
      { name: '12:00', value: 290 },
      { name: '15:00', value: 412.8 },
      { name: '18:00', value: 380 },
      { name: '21:00', value: 210 },
    ],
  },
  Week: {
    total: 2384.15,
    points: [
      { name: 'Mon', value: 1800 },
      { name: 'Tue', value: 2100 },
      { name: 'Wed', value: 1650 },
      { name: 'Thu', value: 2384.15 },
      { name: 'Fri', value: 2200 },
      { name: 'Sat', value: 1400 },
      { name: 'Sun', value: 1950 },
    ],
  },
  Month: {
    total: 10216.53,
    points: [
      { name: 'Jan', value: 4000 },
      { name: 'Feb', value: 3000 },
      { name: 'Mar', value: 5000 },
      { name: 'Apr', value: 4500 },
      { name: 'May', value: 6000 },
      { name: 'Jun', value: 4000 },
      { name: 'Jul', value: 3000 },
      { name: 'Aug', value: 9239.12 },
      { name: 'Sep', value: 8000 },
      { name: 'Oct', value: 6500 },
      { name: 'Nov', value: 8500 },
      { name: 'Dec', value: 7500 },
    ],
  },
};