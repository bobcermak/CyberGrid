import styled from 'styled-components';
import { alpha } from '../../../lib';

export const Intro = styled.header`
  display: grid;
  gap: 12px;
`;

export const Kicker = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorCyan};
`;

export const Title = styled.h1`
  font-size: clamp(36px, 7vw, 64px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  outline: none;
`;

export const Lead = styled.p`
  max-width: 56ch;
  font-size: 18px;
  line-height: 1.5;
  opacity: 0.8;
`;

export const Dashboard = styled.div`
  display: grid;
  gap: 24px;
  padding: clamp(16px, 3vw, 32px);
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background-color: ${({ theme }) => theme.colors.bgApp};
  background-image:
    linear-gradient(${({ theme }) => alpha(theme.colors.colorPrimary, 0.04)} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => alpha(theme.colors.colorPrimary, 0.04)} 1px, transparent 1px);
  background-size: 24px 24px;
`;

export const ComponentBlock = styled.section`
  display: grid;
  gap: 16px;

  & + & {
    padding-top: 24px;
    border-top: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  }
`;

export const ComponentHead = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 8px 16px;
`;

export const ComponentName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.colorCyan};
`;

export const ComponentHint = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;

export const Chain = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;

  code {
    padding: 8px 12px;
    border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorPrimary};
  }

  code:last-of-type {
    border-color: ${({ theme }) => theme.colors.colorYellow};
    background: ${({ theme }) => alpha(theme.colors.colorYellow, 0.12)};
  }

  span {
    color: ${({ theme }) => theme.colors.colorDisabled};
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 16px;
`;

export const MemberCard = styled.a`
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 20px;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background: ${({ theme }) => theme.colors.bgSurface};
  color: inherit;
  text-decoration: none;
  transition: border-color ${({ theme }) => theme.transitions.base};

  &:hover {
    border-color: ${({ theme }) => theme.colors.colorYellow};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 2px;
  }

  h3 {
    font-size: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

export const MemberMeta = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;

export const MemberHighlight = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: -4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.colorDisabled};

  &::before {
    content: '';
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.colorYellow};
  }
`;

export const MemberComponents = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;