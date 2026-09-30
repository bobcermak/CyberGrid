import styled from 'styled-components';
import { COMPACT_QUERY, SIDEBAR_WIDTH } from '../../../lib';

export const Shell = styled.div`
  display: flex;
  min-height: 100vh;
  min-height: 100dvh;
  overflow-x: clip;
  background-color: ${({ theme }) => theme.colors.bgApp};
`;

export const SkipLink = styled.a`
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 10;
  padding: 10px 16px;
  background: ${({ theme }) => theme.colors.colorYellow};
  color: ${({ theme }) => theme.colors.colorPrimaryDark};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &:not(:focus) {
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Main = styled.main`
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  outline: none;
`;

export const TopBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px clamp(16px, 4vw, 48px);
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background: color-mix(in srgb, ${({ theme }) => theme.colors.bgApp} 82%, transparent);
  backdrop-filter: blur(10px);
`;

export const Breadcrumb = styled.p`
  overflow: hidden;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.08em;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.colorDisabled};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(48px, 8vw, 72px);
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: clamp(24px, 5vw, 56px) clamp(16px, 4vw, 48px) 96px;
`;

export const Version = styled.p`
  position: absolute;
  right: clamp(16px, 4vw, 48px);
  bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;

export const SidebarSpacer = styled.div<{ $collapsed: boolean }>`
  flex-shrink: 0;
  width: ${({ $collapsed }) => ($collapsed ? SIDEBAR_WIDTH.collapsed : SIDEBAR_WIDTH.expanded)};
  transition: width ${({ theme }) => theme.transitions.slow};

  @media ${COMPACT_QUERY} {
    width: ${({ $collapsed }) => ($collapsed ? SIDEBAR_WIDTH.compact : SIDEBAR_WIDTH.expanded)};
  }
`;