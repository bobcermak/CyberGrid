import { Scroll, Table, Name, Type } from './PropsTable.styles';

export interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
}

export const PropsTable = ({ rows }: { rows: PropRow[] }) => (
  <Scroll>
    <Table>
      <thead>
        <tr>
          <th scope="col">Prop</th>
          <th scope="col">Typ</th>
          <th scope="col">Výchozí</th>
          <th scope="col">Popis</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>
              <Name>{row.name}</Name>
            </td>
            <td>
              <Type>{row.type}</Type>
            </td>
            <td>{row.default ? <code>{row.default}</code> : '—'}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Scroll>
);
