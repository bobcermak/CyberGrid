<p align="center">
  <strong>Cyberpunk UI kit pro energetický dashboard</strong><br />
  <sub><code>npm install remiho-klubik-cyber-components</code> · React 19 · styled-components · světlý i tmavý režim</sub>
</p>

<p align="center">
  <a href="https://DOPLNIT-URL-DOKUMENTACE"><strong>🌐 Živá dokumentace</strong></a>
  &nbsp;·&nbsp;
  <a href="https://www.figma.com/design/din8h5ZRqVictS0beOSx8Y/Styled-Components?node-id=34-90&p=f&t=Ny375qpCWwesjBYa-0"><strong>🎨 Figma</strong></a>
  &nbsp;·&nbsp;
  <a href="#-instalace">Instalace</a>
  &nbsp;·&nbsp;
  <a href="#-komponenty">Komponenty</a>
  &nbsp;·&nbsp;
  <a href="#-architektura">Architektura</a>
</p>

<p align="center">
  <img alt="React 19" src="https://img.shields.io/badge/React-19-0A0A12?style=flat-square&logo=react&logoColor=00F0FF&labelColor=0A0A12" />
  <img alt="styled-components 6" src="https://img.shields.io/badge/styled--components-6-0A0A12?style=flat-square&logo=styledcomponents&logoColor=FF00C8&labelColor=0A0A12" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-0A0A12?style=flat-square&logo=typescript&logoColor=FCEE0A&labelColor=0A0A12" />
  <img alt="Vite 8" src="https://img.shields.io/badge/Vite-8-0A0A12?style=flat-square&logo=vite&logoColor=FCEE0A&labelColor=0A0A12" />
  <a href="https://DOPLNIT-URL-DOKUMENTACE"><img alt="Dokumentace" src="https://img.shields.io/badge/docs-online-FCEE0A?style=flat-square&labelColor=0A0A12" /></a>
</p>

---

## ⚡ O projektu

**CyberGrid** je cyberpunková sdílená knihovna komponent skupiny 7 pro aplikaci typu **dashboard chytré domácnosti** – cena elektřiny, ovládání bojleru, osvětlení a klimatizace. Je postavená na **styled-components** podle metodiky **atomic design**.

- 🎨 **Styl** – cyberpunk / neon: fonty Orbitron + Rajdhani, žlutá / cyan / magenta akcenty, ostré hrany, 0.5px linky a glow.
- 🌗 **Světlý i tmavý režim** – všechny barvy jsou z palety tématu (odpovídá Figma proměnným s módy Light / Dark).
- 📦 **Container queries** – komponenty se přizpůsobují svému kontejneru, ne oknu.
- 🧬 **Dědičnost** – `Box → ButtonBase → Button → AnimatedButton`, sdílené props se neopakují.
- ♿ **Přístupnost** – nativní prvky, ARIA role `meter` / `progressbar`, fokus, `prefers-reduced-motion`.

## 📦 Instalace

```bash
npm install remiho-klubik-cyber-components
```

To je jediný balíček, který potřebujete – ikony, graf i styled-components jsou součástí knihovny. `ThemeProvider`, `styled` a `css` se importují přímo z `remiho-klubik-cyber-components`. Jako peer dependency zůstává jen React (`react`, `react-dom`), který má každá React aplikace.

Do `index.html` přidejte fonty:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

## 🚀 Použití

```tsx
import { useState } from 'react';
import { ThemeProvider, GlobalStyle, themes, type ThemeMode, DeviceCard } from 'remiho-klubik-cyber-components';

export const App = () => {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [threshold, setThreshold] = useState(2);

  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <DeviceCard
        title="Bojler"
        status="on"
        statusText="Topí · 2.4 Kč/kWh"
        gauge={{ value: 45, max: 60, label: 'voda', formatValue: (v) => `${v}°` }}
        slider={{ label: 'Ohřívat pod', value: threshold, onChange: setThreshold, max: 6, step: 0.1 }}
        progress={{ label: 'Aktuálně vs cíl', value: 45, max: 60, valueLabel: '45 z 60°C' }}
      />
    </ThemeProvider>
  );
};
```

`theme.colors.*`, `theme.space.*`, `theme.fonts.*` … jsou plně typované (augmentace `DefaultTheme` je součástí balíčku).

## 🧩 Komponenty

| Vrstva | Komponenty |
| --- | --- |
| **Primitives** | `Box` |
| **Atomy** | `Button`, `AnimatedButton`, `IconButton`, `Slider`, `Gauge`, `ProgressBar`, `StatusDot`, `Skeleton`, `MenuItem`, `Input`, `CheckBox`, `Radio`, `Toggle` |
| **Molekuly** | `DeviceCard`, `Sidebar`, `InvestmentChart`, `SettingsForm` |
| **Utility** | `themes`, `lightTheme`, `darkTheme`, `GlobalStyle`, `toneScales`, `alpha`, `clamp`, `toRatio`, `useControllableState` |

Komponenty, které mění vzhled podle props: `Gauge` a `ProgressBar` (`tone={toneScales.descending}` – barva podle hodnoty), `Button` (varianty), `DeviceCard` (Opened / Closed, stav zařízení).

**Skeleton loading:** všechny komponenty (`Button`, `AnimatedButton`, `IconButton`, `Slider`, `Gauge`, `ProgressBar`, `StatusDot`, `MenuItem`, `Input`, `CheckBox`, `Radio`, `Toggle`, `DeviceCard`, `Sidebar`, `InvestmentChart`, `SettingsForm`) mají prop `loading` – místo obsahu ukážou placeholder ve stejném rozměru (`<DeviceCard {...props} loading />`). Samostatně jde použít `<Skeleton width="60%" height={16} />`.

**Napojení na API** – stačí předat stav načítání, komponenta si skeleton i plynulé objevení obsahu vyřeší sama:

```tsx
const [boiler, setBoiler] = useState<Boiler | null>(null);

useEffect(() => {
  fetch('/api/boiler').then((res) => res.json()).then(setBoiler);
}, []);

<DeviceCard
  loading={!boiler}
  title="Bojler"
  gauge={{ value: boiler?.power ?? 0, label: 'výkon' }}
  progress={{ label: 'Voda', value: boiler?.temperature ?? 0, max: 60 }}
/>
```

## 🧬 Architektura

```
Box ──▶ ButtonBase ──▶ Button ──▶ AnimatedButton
            └────────▶ IconButton
```

```tsx
export const Box = styled.div<BoxStyleProps>`${boxStyles}`;       // barva, pozadí, rámeček, rozměry
export const ButtonBase = styled(Box)<ButtonBaseProps>`...`;      // varianty, velikosti, stavy
export const AnimatedButton = styled(Button)`...`;                // jen animace
```

**Pravidla**

- Veřejné props bez `$`, interní styled props s `$` (transient – nepropadnou do DOM).
- Hodnoty měnící se při každém pohybu (šířka výplně, oblouk) jdou přes inline `style` / CSS proměnné → negenerují se nové třídy.
- Rozložení podle kontejneru (`@container`, `cqi`), ne podle okna.
- **Jedna komponenta = jeden soubor.** Každá má vlastní složku: `Name.tsx` (komponenta), `Name.styles.ts` (styly), `index.ts` (export). Platí pro knihovnu i dokumentaci.

## 🛠️ Vývoj

```bash
npm install
npm run dev        # dokumentace na http://localhost:5173
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run build      # build dokumentace → dist-docs/
npm run build:lib  # build knihovny → dist/ (ESM + CJS + .d.ts)
```

### Přidání komponenty

1. Vytvořte `src/lib/components/atoms/<Name>/` s `Name.tsx`, `Name.styles.ts` a `index.ts`.
2. Exportujte ji v `src/lib/index.ts`.
3. Přidejte ukázku na svou stránku v `src/docs/pages/students/`.

### Publikace na npm

Jednorázově: účet na [npmjs.com](https://www.npmjs.com/signup) se zapnutým 2FA, pak se přihlaste.

```bash
npm login          # otevře prohlížeč, ověřte přes `npm whoami`
```

Každé vydání:

```bash
git status                 # čistý strom, jste na main
npm version patch          # 0.1.0 → 0.1.1 (minor/major podle změn), vytvoří commit + tag
npm publish --dry-run      # kontrola obsahu balíčku (jen dist/, README, package.json)
npm publish                # prepublishOnly spustí typecheck, lint a build:lib
git push --follow-tags     # pošle commit i tag verze
npm run deploy             # aktualizuje dokumentaci na GitHub Pages
```

Stejnou verzi nejde nahrát dvakrát – vždy nejdřív `npm version`.


## 🎨 Design

Návrh je ve sdíleném Figma souboru [**Styled Components**](https://www.figma.com/design/din8h5ZRqVictS0beOSx8Y/Styled-Components?node-id=34-90&p=f&t=Ny375qpCWwesjBYa-0) – každý člen má vlastní stránku (Vít Provazník, Filip Patrman, Vít Dobrovský, Bob Čermák). Paleta barev odpovídá Figma proměnným `Main-veriables` s módy Light / Dark.

---

<p align="center"><sub>⚡ Skupina 7 · P4A 2026</sub></p>