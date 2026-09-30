import styled from 'styled-components';

export const Caption = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.colorDisabled};
`;

export const Variant = styled.div`
  display: grid;
  align-content: start;
  gap: 10px;
  padding-top: 20px;
  border-top: ${({ theme }) => theme.borderWidths.hairline} dashed ${({ theme }) => theme.colors.colorDisabled};
`;