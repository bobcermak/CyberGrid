import { styled, css, keyframes } from 'styled-components';
import type { ColorToken } from '../../../theme/theme';
import { revealStyles } from '../../../utils/skeleton';

export type DeviceStatus = 'on' | 'eco' | 'off';
export const statusColor: Record<DeviceStatus, ColorToken> = {
  on: 'colorSuccess',
  eco: 'colorYellow',
  off: 'colorError',
};
const pulse = keyframes`
  from { transform: scale(1); opacity: 0.6; }
  to   { transform: scale(2.8); opacity: 0; }
`;
export const StatusDotRoot = styled.span<{ $status: DeviceStatus; $size: number; $pulse: boolean; $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ theme, $status }) => theme.colors[statusColor[$status]]};
  transition: background-color ${({ theme }) => theme.transitions.base};
  ${({ $pulse }) =>
    $pulse &&
    css`
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        background: inherit;
        animation: ${pulse} 1.6s ease-out infinite;
      }
    `}
`;