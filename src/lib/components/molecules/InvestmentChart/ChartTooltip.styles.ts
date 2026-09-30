import { styled } from '../../../theme/styled';

export const CustomTooltipContainer = styled.div`
  font-family: ${({ theme }) => theme.fonts.base};
  background-color: ${({ theme }) => theme.colors.colorPrimaryDark};
  color: #E6E6F0;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const TooltipDate = styled.span`
  font-size: 0.75rem;
  color: #9FA0B0;
`;

export const TooltipValue = styled.span`
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.125rem;
`;