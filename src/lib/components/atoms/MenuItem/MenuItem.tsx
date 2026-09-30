import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { useReveal } from '../../../hooks/useReveal';
import { Skeleton } from '../Skeleton';
import { MenuItemIcon, MenuItemLabel, MenuItemRoot, MenuItemSkeletonLabel } from './MenuItem.styles';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  isActive?: boolean;
  collapsed?: boolean;
  loading?: boolean;
  ref?: Ref<HTMLButtonElement>;
}
export const MenuItem = ({
  children,
  icon,
  isActive = false,
  collapsed = false,
  loading = false,
  type = 'button',
  ref,
  className,
  style,
  ...rest
}: MenuItemProps) => {
  const reveal = useReveal(loading);
  if (loading) {
    return (
      <MenuItemRoot as="div" $collapsed={collapsed} className={className} style={style} aria-busy>
        <Skeleton width={18} height={18} />
        {!collapsed && <MenuItemSkeletonLabel aria-hidden>{children}</MenuItemSkeletonLabel>}
      </MenuItemRoot>
    );
  }
  return (
  <MenuItemRoot
    ref={ref}
    type={type}
    $isActive={isActive}
    $collapsed={collapsed}
    $reveal={reveal}
    aria-current={isActive ? 'page' : undefined}
    aria-label={collapsed && typeof children === 'string' ? children : undefined}
    title={collapsed && typeof children === 'string' ? children : undefined}
    className={className}
    style={style}
    {...rest}
  >
    {icon && <MenuItemIcon aria-hidden>{icon}</MenuItemIcon>}
    {!collapsed && <MenuItemLabel>{children}</MenuItemLabel>}
  </MenuItemRoot>
  );
};