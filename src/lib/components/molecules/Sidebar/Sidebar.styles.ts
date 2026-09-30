import { styled } from 'styled-components';

export const SIDEBAR_WIDTH = { expanded: '264px', collapsed: '80px' } as const;
export const SidebarRoot = styled.nav<{ $collapsed: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: ${({ theme, $collapsed }) => ($collapsed ? theme.space.xs : theme.space.sm)};
  width: ${({ $collapsed }) => ($collapsed ? SIDEBAR_WIDTH.collapsed : SIDEBAR_WIDTH.expanded)};
  height: 100vh;
  height: 100dvh;
  padding: ${({ theme }) => `${theme.space.xxxl} 18px`};
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.bgSurface};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  transition:
    width ${({ theme }) => theme.transitions.slow},
    background-color ${({ theme }) => theme.transitions.base};
`;
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.space.sm};
  min-height: 44px;
  margin-bottom: ${({ theme }) => theme.space.md};
  white-space: nowrap;
`;
export const SidebarToggle = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.colorPrimary};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.colorCyan};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 2px;
  }
`;
export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: inherit;
  list-style: none;
`;
export const SidebarFooter = styled.div`
  margin-top: auto;
`;