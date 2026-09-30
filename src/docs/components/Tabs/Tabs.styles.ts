import styled from 'styled-components';

export const TabList = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
`;

export const Tab = styled.button`
  position: relative;
  padding: 10px 0;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.colorDisabled};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.colorYellow};
    transform: scaleX(0);
    transition: transform ${({ theme }) => theme.transitions.base};
  }

  &:hover,
  &[aria-selected='true'] {
    color: ${({ theme }) => theme.colors.colorPrimary};
  }

  &[aria-selected='true']::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.colorCyan};
    outline-offset: 2px;
  }
`;

export const Panel = styled.div`
  padding-top: 20px;
  outline: none;
`;