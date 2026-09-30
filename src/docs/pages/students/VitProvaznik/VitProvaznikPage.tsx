import { HouseIcon } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { ChartAxis, ChartLine, ChartMarker, InvestmentChart, MenuItem, Skeleton } from '../../../../lib';
import { ComponentDoc } from '../../../components/ComponentDoc';
import { ComponentList } from '../../../components/ComponentList';
import { MemberIntro } from '../../../components/MemberIntro';
import { Row } from '../../../components/Typography';
import { Caption, Variant } from '../../../components/Variant';
import { findMember } from '../../../content/team';
import { useInitialLoading } from '../../../hooks/useInitialLoading';
import { ChartDemo } from './ChartDemo';
import { code } from './code';
import { SidebarDemo } from './SidebarDemo';

const member = findMember('vit-provaznik')!;
const loadingRow = { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' };
export const VitProvaznikPage = () => {
  const loading = useInitialLoading();
  const theme = useTheme();

  return (
    <>
      <MemberIntro member={member} description="Navigace dashboardu a graf ceny elektřiny." />
      <ComponentDoc
        id="sidebar"
        name="Sidebar"
        level="molecule"
        description="Sbalitelné boční menu z položek MenuItem - pohání i navigaci téhle dokumentace."
        preview={
          <Row $align="flex-start" $gap="32px">
            <SidebarDemo loading={loading} />
            <Variant style={{ paddingTop: 0, borderTop: 0 }}>
              <Caption>loading</Caption>
              <SidebarDemo loading />
            </Variant>
          </Row>
        }
        code={code.sidebar}
        props={[
          loadingRow,
          { name: 'items', type: 'SidebarItem[]', description: '{ id, label, icon?, disabled? }' },
          { name: 'brand', type: '{ logo?, label?, href? }', description: 'Logo a název nahoře – obojí přes props, s href je to odkaz.' },
          { name: 'activeId / onSelect', type: 'string / (id) => void', description: 'Aktivní položka.' },
          { name: 'defaultCollapsed', type: 'boolean', default: 'false', description: 'Sbalené menu.' },
        ]}
      />
      <ComponentDoc
        id="menu-item"
        name="MenuItem"
        level="atom"
        description="Položka menu - výchozí, aktivní a disabled stav."
        column
        preview={
          <>
            <Row>
              <MenuItem loading={loading} icon={<HouseIcon size={18} />} style={{ width: 'auto' }}>Domů</MenuItem>
              <MenuItem loading={loading} icon={<HouseIcon size={18} />} isActive style={{ width: 'auto' }}>Domů</MenuItem>
              <MenuItem loading={loading} icon={<HouseIcon size={18} />} disabled style={{ width: 'auto' }}>Domů</MenuItem>
            </Row>
            <Variant>
              <Caption>loading</Caption>
              <Row>
                <div style={{ width: 160 }}>
                  <MenuItem icon={<HouseIcon size={18} />} loading>Domů</MenuItem>
                </div>
              </Row>
            </Variant>
          </>
        }
        code={code.menuItem}
        props={[
          loadingRow,
          { name: 'icon', type: 'ReactNode', description: 'Ikona.' },
          { name: 'isActive', type: 'boolean', default: 'false', description: 'Aktivní položka.' },
          { name: 'collapsed', type: 'boolean', default: 'false', description: 'Jen ikona.' },
        ]}
      />
      <ComponentDoc
        id="investment-chart"
        name="InvestmentChart"
        level="molecule"
        description="Plošný graf s přepínačem období a vlastním tooltipem."
        column
        preview={
          <>
            <InvestmentChart loading={loading} />
            <Variant>
              <Caption>loading</Caption>
              <InvestmentChart loading />
            </Variant>
          </>
        }
        code={code.chart}
        props={[loadingRow]}
      />
      <ComponentDoc
        id="chart-line"
        name="ChartLine"
        level="atom"
        description="Křivka grafu s gradientovou výplní pod čarou. Při najetí ukáže ChartMarker."
        column
        preview={
          <ChartDemo loading={loading}>
            <ChartLine />
          </ChartDemo>
        }
        code={code.chartLine}
        props={[
          { name: 'dataKey', type: 'string', default: "'value'", description: 'Klíč hodnoty v datech grafu.' },
          { name: 'color', type: 'string', default: 'colorYellow', description: 'Barva čáry, výplně i markeru.' },
        ]}
      />
      <ComponentDoc
        id="chart-axis"
        name="ChartAxis"
        level="atom"
        description="Vodorovná osa s popisky a jemnou mřížkou."
        column
        preview={
          <ChartDemo loading={loading}>
            <ChartAxis />
          </ChartDemo>
        }
        code={code.chartAxis}
        props={[
          { name: 'dataKey', type: 'string', default: "'name'", description: 'Klíč popisků v datech grafu.' },
          { name: 'grid', type: 'boolean', default: 'true', description: 'Vodorovné linky mřížky.' },
        ]}
      />
      <ComponentDoc
        id="chart-marker"
        name="ChartMarker"
        level="atom"
        description="Bod aktuální hodnoty se září – ChartLine ho použije jako aktivní bod."
        preview={
          loading ? (
            <Skeleton width={160} height={48} radius="md" />
          ) : (
            <svg width="160" height="48" viewBox="0 0 160 48" role="img" aria-label="Ukázka ChartMarker">
              <ChartMarker cx={24} cy={24} r={4} />
              <ChartMarker cx={80} cy={24} />
              <ChartMarker cx={136} cy={24} r={6} color={theme.colors.colorCyan} />
            </svg>
          )
        }
        code={code.chartMarker}
        props={[
          { name: 'cx / cy', type: 'number', description: 'Pozice středu (recharts je doplní sám).' },
          { name: 'r', type: 'number', default: '6', description: 'Poloměr bodu, záře má dvojnásobek.' },
          { name: 'color', type: 'string', default: 'colorYellow', description: 'Barva bodu i záře.' },
        ]}
      />
      <ComponentList components={member.components} loading={loading} />
    </>
  );
};