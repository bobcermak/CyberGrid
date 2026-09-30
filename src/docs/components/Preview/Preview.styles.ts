import styled, { css } from 'styled-components';
import { alpha } from '../../../lib';

export const Root = styled.div<{ $resizable: boolean; $column: boolean; $minHeight?: string }>`
  position: relative;
  display: flex;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  flex-wrap: wrap;
  align-items: ${({ $column }) => ($column ? 'stretch' : 'center')};
  gap: 24px;
  min-height: ${({ $minHeight = '0' }) => $minHeight};
  padding: 32px;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background-color: ${({ theme }) => theme.colors.bgSurface};
  background-image:
    linear-gradient(${({ theme }) => alpha(theme.colors.colorPrimary, 0.045)} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => alpha(theme.colors.colorPrimary, 0.045)} 1px, transparent 1px);
  background-size: 24px 24px;

  ${({ $resizable }) =>
    $resizable &&
    css`
      min-width: 260px;
      max-width: 100%;
      overflow: auto;
      resize: horizontal;
    `}

  @media (max-width: 640px) {
    padding: 20px 16px;
  }
`;

export const Hint = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;