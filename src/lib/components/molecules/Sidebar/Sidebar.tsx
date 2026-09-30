import type { HTMLAttributes, ReactNode } from 'react';
import { MenuIcon } from '../../../icons';
import { MenuItem } from '../../atoms/MenuItem';
import { Skeleton } from '../../atoms/Skeleton';
import { useControllableState } from '../../../hooks/useControllableState';
import { SidebarBrand, type SidebarBrandProps } from './SidebarBrand';
import { SidebarFooter, SidebarHeader, SidebarHeaderContent, SidebarList, SidebarRoot, SidebarToggle } from './Sidebar.styles';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}
export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  items: SidebarItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  brand?: SidebarBrandProps;
  header?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
}
export const Sidebar = ({
  items,
  activeId,
  onSelect,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onCollapsedChange,
  brand,
  header,
  footer,
  loading = false,
  'aria-label': ariaLabel = 'Hlavní navigace',
  ...rest
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useControllableState(collapsedProp, defaultCollapsed);

  const toggle = () => {
    setCollapsed(!collapsed);
    onCollapsedChange?.(!collapsed);
  };
  return (
    <SidebarRoot $collapsed={collapsed} aria-label={ariaLabel} aria-busy={loading || undefined} {...rest}>
      <SidebarHeader>
        <SidebarToggle
          type="button"
          onClick={toggle}
          disabled={loading}
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Rozbalit menu' : 'Sbalit menu'}
        >
          <MenuIcon size={24} />
        </SidebarToggle>
        {(header || brand) && (
          <SidebarHeaderContent $hidden={collapsed}>
            {loading ? <Skeleton width="60%" height={20} /> : (header ?? (brand && <SidebarBrand {...brand} />))}
          </SidebarHeaderContent>
        )}
      </SidebarHeader>
      <SidebarList>
        {items.map((item) => (
          <li key={item.id}>
            <MenuItem
              icon={item.icon}
              isActive={item.id === activeId}
              collapsed={collapsed}
              loading={loading}
              disabled={item.disabled}
              onClick={() => onSelect?.(item.id)}
            >
              {item.label}
            </MenuItem>
          </li>
        ))}
      </SidebarList>
      {footer && <SidebarFooter>{footer}</SidebarFooter>}
    </SidebarRoot>
  );
};