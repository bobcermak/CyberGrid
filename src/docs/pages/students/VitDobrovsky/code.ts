export const code = {
  dataTable: `
import { DataTable } from 'remiho-klubik-cyber-components';

const columns = [
  { key: 'device', label: 'Zařízení' },
  { key: 'power',  label: 'Příkon', align: 'end' },
  { key: 'today',  label: 'Dnes',   align: 'end' },
  { key: 'cost',   label: 'Cena',   align: 'end' },
];

const rows = [
  { device: 'Bojler',    power: '2.1 kW', today: '4.8 kWh', cost: '11,50 Kč' },
  { device: 'Osvětlení', power: '0.3 kW', today: '1.2 kWh', cost: '2,90 Kč'  },
  { device: 'Klíma',     power: '1.4 kW', today: '3.6 kWh', cost: '8,60 Kč'  },
];

<DataTable columns={columns} rows={rows} rowLabelKey="device" />
<DataTable columns={columns} rows={rows} rowLabelKey="device" loading />
`,
  tableHeader: `
import { TableHeader } from 'remiho-klubik-cyber-components';

<TableHeader>Zařízení</TableHeader>
<TableHeader align="end">Cena</TableHeader>
<TableHeader loading>Zařízení</TableHeader>
`,
  tableCell: `
import { TableCell } from 'remiho-klubik-cyber-components';

<TableCell variant="rowLabel">Bojler</TableCell>
<TableCell align="end">2.1 kW</TableCell>
<TableCell loading>2.1 kW</TableCell>
`,
  tableRow: `
import { TableRow, TableHeader, TableCell } from 'remiho-klubik-cyber-components';

<TableRow>
  <TableHeader>Zařízení</TableHeader>
  <TableHeader align="end">Cena</TableHeader>
</TableRow>
<TableRow>
  <TableCell variant="rowLabel">Bojler</TableCell>
  <TableCell align="end">11,50 Kč</TableCell>
</TableRow>
`,
};