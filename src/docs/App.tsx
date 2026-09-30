import { lazy, Suspense, useEffect, useRef, type ComponentType } from 'react';
import { ThemeProvider } from 'styled-components';
import { ChartLineIcon, GaugeIcon, HouseIcon, SlidersHorizontalIcon, TableIcon } from '@phosphor-icons/react';
import { GlobalStyle, themes, type SidebarItem } from '../lib';
import { DocsLayout } from './components/DocsLayout';
import { team } from './content/team';
import { useRoute } from './hooks/useRoute';
import { useThemeMode } from './hooks/useThemeMode';
import { OverviewPage } from './pages/Overview';
import { NotFoundPage } from './pages/NotFound';
import { FilipPatrmanPage } from './pages/students/FilipPatrman';
import { VitDobrovskyPage } from './pages/students/VitDobrovsky';
import { BobCermakPage } from './pages/students/BobCermak';

const VitProvaznikPage = lazy(() =>
  import('./pages/students/VitProvaznik').then((module) => ({ default: module.VitProvaznikPage })),
);
const pages: Record<string, ComponentType> = {
  '': OverviewPage,
  'vit-provaznik': VitProvaznikPage,
  'filip-patrman': FilipPatrmanPage,
  'vit-dobrovsky': VitDobrovskyPage,
  'bob-cermak': BobCermakPage,
};
const memberIcons: Record<string, SidebarItem['icon']> = {
  'vit-provaznik': <ChartLineIcon size={18} />,
  'filip-patrman': <SlidersHorizontalIcon size={18} />,
  'vit-dobrovsky': <TableIcon size={18} />,
  'bob-cermak': <GaugeIcon size={18} />,
};
const navItems: SidebarItem[] = [
  { id: '', label: 'Přehled', icon: <HouseIcon size={18} /> },
  ...team.map((member) => ({ id: member.slug, label: member.name, icon: memberIcons[member.slug] })),
];
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const App = () => {
  const { mode, toggle } = useThemeMode();
  const { route, navigate } = useRoute();
  const previousPage = useRef(route.page);

  const Page = pages[route.page] ?? NotFoundPage;
  const pageTitle = navItems.find((item) => item.id === route.page)?.label ?? 'Nenalezeno';

  useEffect(() => {
    document.title = `${pageTitle} · CyberGrid`;
  }, [pageTitle]);
  useEffect(() => {
    const behavior: ScrollBehavior = prefersReducedMotion() ? 'auto' : 'smooth';

    if (route.section) {
      document.getElementById(route.section)?.scrollIntoView({ behavior, block: 'start' });
    } else if (previousPage.current !== route.page) {
      window.scrollTo({ top: 0 });
      document.querySelector<HTMLElement>('[data-page-title]')?.focus({ preventScroll: true });
    }
    previousPage.current = route.page;
  }, [route]);
  return (
    <ThemeProvider theme={themes[mode]}>
      <GlobalStyle />
      <DocsLayout
        items={navItems}
        activeId={route.page}
        onNavigate={(id) => navigate(id)}
        pageTitle={pageTitle}
        mode={mode}
        onToggleMode={toggle}
      >
        <Suspense fallback={null}>
          <Page />
        </Suspense>
      </DocsLayout>
    </ThemeProvider>
  );
};