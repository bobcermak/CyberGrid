export const code = {
  card: `
import { DeviceCard } from 'remiho-klubik-cyber-components';

<DeviceCard
  title="Bojler"
  icon={<Drop size={20} weight="light" />}
  status={heating ? 'on' : 'eco'}
  statusText={heating ? \`Topí · \${price} Kč/kWh\` : \`Pauza · limit \${threshold} Kč\`}
  gauge={{ value: power, label: 'výkon' }}
  slider={{ label: 'Ohřívat pod', value: threshold, onChange: setThreshold, max: 6 }}
  progress={{ label: 'Aktuálně vs cíl', value: 45, max: 60, valueLabel: '45 z 60°C' }}
/>

<DeviceCard title="Bojler" gauge={{ value: 0 }} slider={{}} progress={{ value: 0 }} loading />
`,
  slider: `
import { Slider } from 'remiho-klubik-cyber-components';

<Slider
  label="Ohřívat pod"
  value={price}
  onChange={setPrice}
  max={6}
  step={0.1}
  formatValue={(value) => \`\${value.toFixed(1)} Kč\`}
/>
`,
  gauge: `
import { Gauge, toneScales } from 'remiho-klubik-cyber-components';

<Gauge value={50} label="vlhkost" />
<Gauge value={load} label="zátěž" tone={toneScales.descending} />  {/* barva podle hodnoty */}
`,
  progress: `
import { ProgressBar, toneScales } from 'remiho-klubik-cyber-components';

<ProgressBar
  label="Aktuálně vs cíl"
  value={16}
  max={21}
  valueLabel="16 z 21°C"
  tone={toneScales.ascending}
/>
`,
  button: `
import { Button, AnimatedButton } from 'remiho-klubik-cyber-components';

<Button arrow>Button</Button>
<Button variant="secondary">Button</Button>
<AnimatedButton arrow>Spustit</AnimatedButton>  {/* styled(Button) + animace */}
<Button arrow loading>Ukládám</Button>
`,
  iconButton: `
import { IconButton } from 'remiho-klubik-cyber-components';

<IconButton aria-label="Detail" />
<IconButton aria-label="Dolů" direction="down" variant="secondary" />
`,
  status: `
import { StatusDot } from 'remiho-klubik-cyber-components';

<StatusDot status="on" label="Zapnuto" />
`,
};