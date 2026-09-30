import type { DataTableColumn } from '../../lib';

export interface UsageRow {
  device: string;
  power: string;
  today: string;
  cost: string;
}

export const usageColumns: DataTableColumn<UsageRow>[] = [
  { key: 'device', label: 'Zařízení' },
  { key: 'power', label: 'Příkon', align: 'end' },
  { key: 'today', label: 'Dnes', align: 'end' },
  { key: 'cost', label: 'Cena', align: 'end' },
];

export const usageRows: UsageRow[] = [
  { device: 'Bojler', power: '2.1 kW', today: '4.8 kWh', cost: '11,50 Kč' },
  { device: 'Osvětlení', power: '0.3 kW', today: '1.2 kWh', cost: '2,90 Kč' },
  { device: 'Klíma', power: '1.4 kW', today: '3.6 kWh', cost: '8,60 Kč' },
];