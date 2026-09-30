export const code = {
  menuItem: `
import { MenuItem } from 'remiho-klubik-cyber-components';

<MenuItem icon={<House />}>Domů</MenuItem>
<MenuItem icon={<House />} isActive>Domů</MenuItem>
<MenuItem icon={<House />} disabled>Domů</MenuItem>
`,
  sidebar: `
import { Sidebar } from 'remiho-klubik-cyber-components';

const items = [
  { id: 'domu', label: 'Domů', icon: <House size={18} /> },
  { id: 'nastaveni', label: 'Nastavení', icon: <Gear size={18} /> },
];

<Sidebar
  items={items}
  activeId={active}
  onSelect={setActive}
  brand={{ logo: <Logo />, label: 'DASHBOARD', href: '/' }}  {/* logo i text přes props */}
/>
`,
  chart: `
import { InvestmentChart } from 'remiho-klubik-cyber-components';

<InvestmentChart />
`,
  chartLine: `
import { AreaChart } from 'recharts';
import { ChartLine } from 'remiho-klubik-cyber-components';

<AreaChart data={data}>
  <ChartLine dataKey="value" />
</AreaChart>
`,
  chartAxis: `
import { AreaChart } from 'recharts';
import { ChartAxis, ChartLine } from 'remiho-klubik-cyber-components';

<AreaChart data={data}>
  <ChartAxis dataKey="name" />
  <ChartLine dataKey="value" />
</AreaChart>
`,
  chartMarker: `
import { ChartMarker } from 'remiho-klubik-cyber-components';

<svg width="160" height="48">
  <ChartMarker cx={80} cy={24} />
</svg>
`,
};