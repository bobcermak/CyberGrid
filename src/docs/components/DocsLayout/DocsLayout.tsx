import { useState, type ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { BrandMark } from '../BrandMark';
import { toPath } from '../../hooks/useRoute';
import { IconButton, Sidebar, type SidebarItem, type ThemeMode } from '../../../lib';
import pkg from '../../../../package.json';
import { Shell, SkipLink, Main, TopBar, Breadcrumb, Content, Version, SidebarSpacer } from './DocsLayout.styles';

const brand = {
  logo: <BrandMark size="1.2em" />,
  label: 'YBERGRID',
  href: toPath(''),
  'aria-label': 'CyberGrid – přehled',
};
export interface DocsLayoutProps {
  items: SidebarItem[];
  activeId: string;
  onNavigate: (id: string) => void;
  pageTitle: string;
  mode: ThemeMode;
  onToggleMode: () => void;
  children: ReactNode;
}
const fixedSidebar = { position: 'fixed', top: 0, left: 0, zIndex: 6 } as const;
const isNarrow = () => window.matchMedia('(max-width: 768px)').matches;
export const DocsLayout = ({
  items,
  activeId,
  onNavigate,
  pageTitle,
  mode,
  onToggleMode,
  children,
}: DocsLayoutProps) => {
  const [collapsed, setCollapsed] = useState(isNarrow);

  return (
    <Shell>
      <SkipLink href="#main" onClick={(event) => {
        event.preventDefault();
        document.getElementById('main')?.focus();
      }}>
        Přeskočit na obsah
      </SkipLink>
      <SidebarSpacer $collapsed={collapsed} aria-hidden />
      <Sidebar
        style={fixedSidebar}
        items={items}
        activeId={activeId}
        onSelect={onNavigate}
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        aria-label="Navigace dokumentace"
        brand={brand}
        footer={<Version $collapsed={collapsed}>v{pkg.version}</Version>}
      />
      <Main id="main" tabIndex={-1}>
        <TopBar>
          <Breadcrumb>
            <span>CyberGrid / </span>
            {pageTitle}
          </Breadcrumb>
          <IconButton
            variant="secondary"
            size="sm"
            aria-label={mode === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
            onClick={onToggleMode}
            icon={mode === 'dark' ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          />
        </TopBar>
        <Content>{children}</Content>
      </Main>
    </Shell>
  );
};