export const code = {
  install: `
npm install remiho-klubik-cyber-components
`,
  setup: `
import { useState } from 'react';
import { ThemeProvider, GlobalStyle, themes, switchTheme, DeviceCard } from 'remiho-klubik-cyber-components';

export const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const toggle = () => switchTheme(() => setMode(mode === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <DeviceCard title="Bojler" status="on" gauge={{ value: 72, label: 'voda' }} />
    </ThemeProvider>
  );
};
`,
};