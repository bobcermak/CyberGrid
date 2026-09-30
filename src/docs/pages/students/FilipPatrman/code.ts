export const code = {
  form: `
import { SettingsForm } from 'remiho-klubik-cyber-components';

<SettingsForm
  title="Nastavení"
  defaultValues={{ location: 'Brno', mode: 'eco' }}
  onChange={(values) => console.log(values)}
  onSubmit={(values) => save(values)}
/>

<SettingsForm loading />
`,
  input: `
import { Input } from 'remiho-klubik-cyber-components';

<Input label="Místo" value={place} onChange={(e) => setPlace(e.target.value)} hint="Město pro ceny elektřiny" />
<Input label="E-mail" error="Neplatný e-mail" />
<Input label="Místo" loading />
`,
  checkBox: `
import { CheckBox } from 'remiho-klubik-cyber-components';

<CheckBox label="Cena za kWh" defaultChecked />
<CheckBox label="Celková cena" disabled />
<CheckBox label="Cena za kWh" loading />
`,
  radio: `
import { Radio } from 'remiho-klubik-cyber-components';

<Radio name="mode" label="Automatický" defaultChecked />
<Radio name="mode" label="Úsporný" />
<Radio name="mode" label="Automatický" loading />
`,
  toggle: `
import { Toggle } from 'remiho-klubik-cyber-components';

<Toggle label="Zobrazovat ceny" defaultChecked />
<Toggle label="Zobrazovat ceny" loading />
`,
};