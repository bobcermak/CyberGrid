export type ComponentLevel = 'atom' | 'molecule';

export interface TeamComponent {
  name: string;
  level: ComponentLevel;
  description: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  student: number;
  area: string;
  figmaPage: string;
  extras?: string[];
  highlight?: string;
  components: TeamComponent[];
}

export const team: TeamMember[] = [
  {
    slug: 'vit-provaznik',
    name: 'Vít Provazník',
    student: 1,
    area: 'Graf, menu + základ projektu',
    figmaPage: 'Vít Provazník',
    extras: ['SideMenu (Sidebar)'],
    components: [
      { name: 'MenuItem', level: 'atom', description: 'Položka menu s ikonou, aktivním a disabled stavem.' },
      { name: 'ChartLine', level: 'atom', description: 'Křivka grafu s gradientovou výplní pod čarou.' },
      { name: 'ChartAxis', level: 'atom', description: 'Osa grafu s popisky a mřížkou.' },
      { name: 'ChartMarker', level: 'atom', description: 'Zářící bod aktuální hodnoty.' },
      { name: 'Sidebar', level: 'molecule', description: 'Sbalitelné boční menu složené z MenuItem.' },
      { name: 'InvestmentChart', level: 'molecule', description: 'Plošný graf s přepínačem období složený z ChartLine a ChartAxis.' },
    ],
  },
  {
    slug: 'filip-patrman',
    name: 'Filip Patrman',
    student: 2,
    area: 'Formulář nastavení',
    figmaPage: 'Filip Patrman',
    extras: ['Založení projektu', 'ThemeProvider a tokeny'],
    components: [
      { name: 'CheckBox', level: 'atom', description: 'Zaškrtávací pole.' },
      { name: 'Radio', level: 'atom', description: 'Přepínač jedné volby ze skupiny.' },
      { name: 'Toggle', level: 'atom', description: 'Vypínač zapnuto / vypnuto.' },
      { name: 'Input', level: 'atom', description: 'Textové pole s popiskem a žlutým fokusem.' },
      { name: 'SettingsForm', level: 'molecule', description: 'Formulář Místo, Ceny, Režim.' },
    ],
  },
  {
    slug: 'vit-dobrovsky',
    name: 'Vít Dobrovský',
    student: 3,
    area: 'Tabulka',
    figmaPage: 'Vít Dobrovský',
    components: [
      { name: 'TableCell', level: 'atom', description: 'Buňka tabulky.' },
      { name: 'TableRow', level: 'atom', description: 'Řádek tabulky.' },
      { name: 'TableHeader', level: 'atom', description: 'Záhlaví sloupce.' },
      { name: 'DataTable', level: 'molecule', description: 'Tabulka s hlavičkou, řádky a sloupci.' },
    ],
  },
  {
    slug: 'bob-cermak',
    name: 'Bob Čermák',
    student: 4,
    area: 'Ovládání a měření',
    figmaPage: 'Bob Čermák',
    extras: ['AnimatedButton', 'StatusDot', 'Web s dokumentací pro prezentaci'],
    highlight: '+ prezentační web',
    components: [
      { name: 'Slider', level: 'atom', description: 'Posuvník nad nativním range inputem.' },
      { name: 'Gauge', level: 'atom', description: 'Kruhový ukazatel 270° s tónem podle hodnoty.' },
      { name: 'ProgressBar', level: 'atom', description: 'Lineární ukazatel průběhu vůči cíli.' },
      { name: 'Button', level: 'atom', description: 'Tlačítko v pěti variantách s volitelnou šipkou.' },
      { name: 'IconButton', level: 'atom', description: 'Čtvercové tlačítko se šipkou.' },
      { name: 'DeviceCard', level: 'molecule', description: 'Karta zařízení - Bojler, Osvětlení, Klíma.' },
    ],
  },
];
export const findMember = (slug: string) => team.find((member) => member.slug === slug);