import styled from 'styled-components';
import { skeletonSurface } from '../../../lib/utils/skeleton';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  list-style: none;
`;

export const Card = styled.li`
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 20px;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background: ${({ theme }) => theme.colors.bgSurface};
`;

export const Name = styled.h3`
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Description = styled.p`
  line-height: 1.45;
  opacity: 0.8;
`;
export const SkeletonContent = styled.div`
  display: grid;
  gap: 10px;

  & > * {
    width: fit-content;
    max-width: 100%;
    border-color: transparent;
    border-radius: ${({ theme }) => theme.radii.xs};
    color: transparent;
    opacity: 1;
    ${skeletonSurface}
  }

  & > * * {
    visibility: hidden;
  }
`;