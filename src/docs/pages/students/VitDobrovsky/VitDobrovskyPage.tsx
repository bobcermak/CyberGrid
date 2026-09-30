import { DataTable, TableCell, TableHeader, TableRow } from '../../../../lib';
import { ComponentDoc } from '../../../components/ComponentDoc';
import { ComponentList } from '../../../components/ComponentList';
import { MemberIntro } from '../../../components/MemberIntro';
import { Caption, Variant } from '../../../components/Variant';
import { findMember } from '../../../content/team';
import { usageColumns, usageRows, type UsageRow } from '../../../demos';
import { useInitialLoading } from '../../../hooks/useInitialLoading';
import { code } from './code';

const member = findMember('vit-dobrovsky')!;
const loadingRow = {
  name: 'loading',
  type: 'boolean',
  default: 'false',
  description: 'Skeleton místo obsahu, stejný rozměr.',
};
export const VitDobrovskyPage = () => {
  const loading = useInitialLoading();

  return (
    <>
      <MemberIntro
        member={member}
        description="Datová tabulka pro přehled spotřeby a cen. Žlutý accent nahoře a vlevo, uvnitř tenké linky – atomic design z Buňky, Řádku a Záhlaví."
      />
      <ComponentDoc
        id="data-table"
        name="DataTable"
        level="molecule"
        column
        description="Data-driven tabulka. Přes rowLabelKey označíš sloupec, který se v tělu vyrenderuje cyberpunkovým fontem jako label řádku (jako první sloupec v ukázce)."
        preview={
          <>
            <DataTable<UsageRow>
              columns={usageColumns}
              rows={usageRows}
              rowLabelKey="device"
              loading={loading}
            />
            <Variant>
              <Caption>loading</Caption>
              <DataTable<UsageRow>
                columns={usageColumns}
                rows={usageRows}
                rowLabelKey="device"
                loading
              />
            </Variant>
          </>
        }
        code={code.dataTable}
        props={[
          loadingRow,
          {
            name: 'columns',
            type: 'DataTableColumn<Row>[]',
            description: 'key (klíč do Row), label, volitelně align a render.',
          },
          {
            name: 'rows',
            type: 'Row[]',
            description: 'Data řádků, generický typ.',
          },
          {
            name: 'rowLabelKey',
            type: 'keyof Row',
            description: 'Sloupec, jehož hodnoty se v tělu vyrenderují jako label (Orbitron uppercase).',
          },
          {
            name: 'getRowKey',
            type: '(row, index) => key',
            default: 'index',
            description: 'Klíč pro React – doporučeno u dynamických dat.',
          },
          {
            name: 'caption',
            type: 'ReactNode',
            description: 'Titulek tabulky nad hlavičkou.',
          },
          {
            name: 'skeletonRows',
            type: 'number',
            default: '3',
            description: 'Kolik prázdných řádků ukázat v loading stavu.',
          },
        ]}
      />
      <ComponentDoc
        id="table-header"
        name="TableHeader"
        level="atom"
        description="Záhlaví sloupce (<th>). Cyberpunk font Orbitron, uppercase, žlutý accent přes DataTable."
        preview={
          <table style={{ borderCollapse: 'collapse' }}>
            <thead>
              <TableRow>
                <TableHeader loading={loading}>Zařízení</TableHeader>
                <TableHeader loading={loading} align="end">
                  Cena
                </TableHeader>
              </TableRow>
            </thead>
          </table>
        }
        code={code.tableHeader}
        props={[
          loadingRow,
          {
            name: 'align',
            type: "'start' | 'center' | 'end'",
            default: "'start'",
            description: 'Zarovnání obsahu.',
          },
        ]}
      />
      <ComponentDoc
        id="table-cell"
        name="TableCell"
        level="atom"
        description="Buňka těla (<td>). Varianta rowLabel použije Orbitron a uppercase – hodí se pro první sloupec."
        preview={
          <table style={{ borderCollapse: 'collapse' }}>
            <tbody>
              <TableRow>
                <TableCell variant="rowLabel" loading={loading}>
                  Bojler
                </TableCell>
                <TableCell loading={loading} align="end">
                  2.1 kW
                </TableCell>
                <TableCell loading={loading} align="end">
                  11,50 Kč
                </TableCell>
              </TableRow>
            </tbody>
          </table>
        }
        code={code.tableCell}
        props={[
          loadingRow,
          {
            name: 'variant',
            type: "'body' | 'rowLabel'",
            default: "'body'",
            description: "rowLabel = cyberpunk font pro první sloupec.",
          },
          {
            name: 'align',
            type: "'start' | 'center' | 'end'",
            default: "'start'",
            description: 'Zarovnání obsahu.',
          },
        ]}
      />
      <ComponentDoc
        id="table-row"
        name="TableRow"
        level="atom"
        description="Řádek (<tr>) – tenký oddělovač spodní hairline linkou (poslední řádek ji nemá)."
        preview={
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              <TableRow>
                <TableCell variant="rowLabel" loading={loading}>Bojler</TableCell>
                <TableCell align="end" loading={loading}>2.1 kW</TableCell>
              </TableRow>
              <TableRow>
                <TableCell variant="rowLabel" loading={loading}>Klíma</TableCell>
                <TableCell align="end" loading={loading}>1.4 kW</TableCell>
              </TableRow>
            </tbody>
          </table>
        }
        code={code.tableRow}
      />
      <ComponentList components={member.components} loading={loading} />
    </>
  );
};