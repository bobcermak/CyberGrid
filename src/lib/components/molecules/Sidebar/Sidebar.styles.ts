import { styled } from 'styled-components';

export const SIDEBAR_WIDTH = { expanded: '264px', collapsed: '80px', compact: '60px' } as const;
export const COMPACT_QUERY = '(max-width: 380px)';
export const SidebarRoot = styled.nav<{ $collapsed: boolean }>`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: ${({ theme }) => theme.space.sm};
  width: ${({ $collapsed }) => ($collapsed ? SIDEBAR_WIDTH.collapsed : SIDEBAR_WIDTH.expanded)};
  max-width: 100%;
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

  @media ${COMPACT_QUERY} {
    padding-inline: 8px;
    ${({ $collapsed }) => $collapsed && `width: ${SIDEBAR_WIDTH.compact};`}
  }
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
export const SidebarHeaderContent = styled.div<{ $hidden: boolean }>`
  flex: 1 1 auto;
  min-width: 0;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
  transition:
    opacity ${({ theme }) => theme.transitions.base},
    visibility ${({ theme }) => theme.transitions.base};
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