import type { ReactNode } from 'react';
import { Badge, levelLabel } from '../Badge';
import { CodeBlock } from '../CodeBlock';
import { Preview } from '../Preview';
import { PropsTable, type PropRow } from '../PropsTable';
import { Tabs, type TabItem } from '../Tabs';
import { SectionTitle } from '../Typography';
import type { ComponentLevel } from '../../content/team';
import { Section, Head, TitleRow, Description } from './ComponentDoc.styles';

export interface ComponentDocProps {
  id: string;
  name: string;
  level: ComponentLevel;
  description: ReactNode;
  preview: ReactNode;
  code: string;
  props?: PropRow[];
  resizable?: boolean;
  column?: boolean;
}
export const ComponentDoc = ({
  id,
  name,
  level,
  description,
  preview,
  code,
  props,
  resizable,
  column,
}: ComponentDocProps) => {
  const tabs: TabItem[] = [
    {
      id: 'preview',
      label: 'Náhled',
      content: (
        <Preview resizable={resizable} column={column}>
          {preview}
        </Preview>
      ),
    },
    { id: 'code', label: 'Kód', content: <CodeBlock code={code} /> },
  ];
  if (props) tabs.push({ id: 'props', label: 'Props', content: <PropsTable rows={props} /> });

  return (
    <Section id={id} aria-labelledby={`${id}-title`}>
      <Head>
        <TitleRow>
          <SectionTitle id={`${id}-title`}>{name}</SectionTitle>
          <Badge $tone={level}>{levelLabel[level]}</Badge>
        </TitleRow>
        <Description>{description}</Description>
      </Head>
      <Tabs items={tabs} label={name} />
    </Section>
  );
};