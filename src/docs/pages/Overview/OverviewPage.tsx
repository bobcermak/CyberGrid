import { lazy, Suspense, useState } from 'react';
import { ChartBarIcon, GearIcon, HouseIcon, WrenchIcon } from '@phosphor-icons/react';
import { Badge } from '../../components/Badge';
import { BrandMark } from '../../components/BrandMark';
import { CodeBlock } from '../../components/CodeBlock';
import { FadeIn } from '../../components/FadeIn';
import { Tabs } from '../../components/Tabs';
import { SectionTitle, Stack, Text } from '../../components/Typography';
import { Wordmark } from '../../components/Wordmark';
import { team } from '../../content/team';
import { toPath } from '../../hooks/useRoute';
import { useInitialLoading } from '../../hooks/useInitialLoading';
import { DataTable, DeviceCard, SettingsForm, Sidebar, Skeleton } from '../../../lib';
import { DeviceGrid, usageColumns, usageRows, useDeviceDemo, type UsageRow } from '../../demos';
import { code } from './code';
import { ColorPalette } from './ColorPalette';
import { Chain, ComponentBlock, ComponentHead, ComponentHint, ComponentName, Dashboard, Intro, Kicker, Lead, MemberCard, MemberComponents, MemberHighlight, MemberMeta, TeamGrid, Title } from './OverviewPage.styles';

const InvestmentChart = lazy(() =>
  import('../../../lib/components/molecules/InvestmentChart').then((module) => ({
    default: module.InvestmentChart,
  })),
);
const sidebarItems = [
  { id: 'domu', label: 'Domů', icon: <HouseIcon size={18} /> },
  { id: 'spotreba', label: 'Spotřeba', icon: <ChartBarIcon size={18} /> },
  { id: 'zarizeni', label: 'Zařízení', icon: <WrenchIcon size={18} /> },
  { id: 'nastaveni', label: 'Nastavení', icon: <GearIcon size={18} /> },
];
export const OverviewPage = () => {
  const { boiler, light, climate } = useDeviceDemo();
  const loading = useInitialLoading();
  const [activeItem, setActiveItem] = useState('domu');
  const chartSkeleton = <Skeleton height={478} radius="lg" />;
  return (
  <>
    <Intro>
      <Kicker>Cyberpunk UI kit · Skupina 7</Kicker>
      <Title tabIndex={-1} data-page-title>
        <Wordmark accent />
      </Title>
      <Lead>Knihovna komponent pro energetický dashboard. Styled-components, světlý i tmavý režim, container queries.</Lead>
    </Intro>
    <Stack $gap="16px">
      <SectionTitle>Dashboard</SectionTitle>
      <Dashboard>
        <ComponentBlock>
          <ComponentHead>
            <ComponentName>&lt;InvestmentChart /&gt;</ComponentName>
            <ComponentHint>Graf s přepínačem období</ComponentHint>
          </ComponentHead>
          <Suspense fallback={chartSkeleton}>
            <FadeIn>
              <InvestmentChart loading={loading} />
            </FadeIn>
          </Suspense>
        </ComponentBlock>
        <ComponentBlock>
          <ComponentHead>
            <ComponentName>&lt;DeviceCard /&gt;</ComponentName>
            <ComponentHint>Bojler, Osvětlení a Klima – posuvníky jsou živé</ComponentHint>
          </ComponentHead>
          <DeviceGrid>
            <DeviceCard {...boiler} loading={loading} />
            <DeviceCard {...light} loading={loading} />
            <DeviceCard {...climate} loading={loading} />
          </DeviceGrid>
        </ComponentBlock>
        <ComponentBlock>
          <ComponentHead>
            <ComponentName>&lt;Sidebar /&gt;</ComponentName>
            <ComponentHint>Sbalitelné boční menu – položky i sbalení jsou živé</ComponentHint>
          </ComponentHead>
          <Sidebar
            items={sidebarItems}
            activeId={activeItem}
            onSelect={setActiveItem}
            loading={loading}
            brand={{ logo: <BrandMark size="1.2em" />, label: 'DASHBOARD' }}
            aria-label="Ukázka Sidebaru"
            style={{ position: 'static', height: 400 }}
          />
        </ComponentBlock>
        <ComponentBlock>
          <ComponentHead>
            <ComponentName>&lt;SettingsForm /&gt;</ComponentName>
            <ComponentHint>Nastavení místa, cen a režimu – pole jsou živá</ComponentHint>
          </ComponentHead>
          <SettingsForm loading={loading} />
        </ComponentBlock>
        <ComponentBlock>
          <ComponentHead>
            <ComponentName>&lt;DataTable /&gt;</ComponentName>
            <ComponentHint>Přehled spotřeby a cen zařízení</ComponentHint>
          </ComponentHead>
          <DataTable<UsageRow>
            columns={usageColumns}
            rows={usageRows}
            rowLabelKey="device"
            caption="Spotřeba dnes"
            loading={loading}
          />
        </ComponentBlock>
      </Dashboard>
    </Stack>
    <Stack id="start" $gap="16px">
      <SectionTitle>Rychlý start</SectionTitle>
      <Tabs
        label="Rychlý start"
        items={[
          { id: 'install', label: 'Instalace', content: <CodeBlock code={code.install} language="bash" /> },
          { id: 'setup', label: 'Použití', content: <CodeBlock code={code.setup} title="App.tsx" /> },
          { id: 'palette', label: 'Paleta barev', content: <ColorPalette /> },
        ]}
      />
    </Stack>
    <Stack $gap="16px">
      <SectionTitle>Architektura</SectionTitle>
      <Text>Sdílené vlastnosti se dědí přes <code>styled(Component)</code> - každá úroveň přidá jen to svoje.</Text>
      <Chain aria-label="Box, ButtonBase, Button, AnimatedButton">
        <code>Box</code>
        <span>→</span>
        <code>ButtonBase</code>
        <span>→</span>
        <code>Button</code>
        <span>→</span>
        <code>AnimatedButton</code>
      </Chain>
    </Stack>
    <Stack $gap="16px">
      <SectionTitle>Tým</SectionTitle>
      <TeamGrid>
        {team.map((member) => (
          <MemberCard key={member.slug} href={toPath(member.slug)}>
            <MemberMeta>Student {member.student} · {member.area}</MemberMeta>
            <h3>{member.name}</h3>
            {member.highlight && <MemberHighlight>{member.highlight}</MemberHighlight>}
            <MemberComponents>
              {member.components.map((component) => (
                <Badge key={component.name} $tone={component.level}>
                  {component.name}
                </Badge>
              ))}
            </MemberComponents>
          </MemberCard>
        ))}
      </TeamGrid>
    </Stack>
  </>
  );
};