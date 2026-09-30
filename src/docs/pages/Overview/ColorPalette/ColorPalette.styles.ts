import styled from 'styled-components';

export const Swatches = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  list-style: none;
`;

export const Swatch = styled.li`
  display: grid;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 11.5px;

  span:last-child {
    color: ${({ theme }) => theme.colors.colorDisabled};
  }
`;

export const Chip = styled.span<{ $color: string }>`
  height: 40px;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
  background: ${({ $color }) => $color};
`;