import type { MouseEvent, ReactNode } from 'react';
import { BrandLink, BrandStatic, Hidden } from './SidebarBrand.styles';

export interface SidebarBrandProps {
  logo?: ReactNode;
  label?: ReactNode;
  href?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  'aria-label'?: string;
}
export const SidebarBrand = ({ logo, label, href, onClick, 'aria-label': ariaLabel }: SidebarBrandProps) => {
  const content = (
    <>
      {ariaLabel && <Hidden>{ariaLabel}</Hidden>}
      {logo && (
        <span data-brand-logo aria-hidden>
          {logo}
        </span>
      )}
      {label && <span aria-hidden={ariaLabel ? true : undefined}>{label}</span>}
    </>
  );
  return href ? (
    <BrandLink href={href} onClick={onClick}>
      {content}
    </BrandLink>
  ) : (
    <BrandStatic onClick={onClick}>{content}</BrandStatic>
  );
};