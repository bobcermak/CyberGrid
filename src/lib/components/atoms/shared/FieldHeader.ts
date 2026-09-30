import { css } from 'styled-components';
import { styled } from '../../../theme/styled';

export const labelText = css`
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.colorPrimary};
`;

export const FieldHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.sm};
  ${labelText}
`;

export const FieldValue = styled.span`
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
`;