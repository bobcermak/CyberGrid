import type { ReactNode } from 'react';
import { Eyebrow, Lead, PageTitle } from '../Typography';
import { Root } from './PageHeader.styles';

export interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}
export const PageHeader = ({ eyebrow, title, description, children }: PageHeaderProps) => (
  <Root>
    <Eyebrow>{eyebrow}</Eyebrow>
    <PageTitle tabIndex={-1} data-page-title>
      {title}
    </PageTitle>
    {description && <Lead>{description}</Lead>}
    {children}
  </Root>
);