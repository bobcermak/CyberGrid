import { styled } from 'styled-components';
import { alpha } from '../../../utils/color';
import { revealStyles, skeletonText } from '../../../utils/skeleton';

export const SettingsFormRoot = styled.form<{ $reveal?: boolean }>`
  ${({ $reveal }) => $reveal && revealStyles}
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
  width: min(100%, 560px);
  padding: ${({ theme }) => theme.space.xxl} ${({ theme }) => theme.space.xl};
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorPrimary};
  background: ${({ theme }) => theme.colors.bgSurface};
  color: ${({ theme }) => theme.colors.colorPrimary};
  box-shadow: 0 4px 16px ${({ theme }) => alpha(theme.colors.colorPrimaryDark, 0.2)};
`;

export const SettingsFormHeader = styled.header`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
  padding-bottom: ${({ theme }) => theme.space.lg};
  border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorPrimary};
`;

export const SettingsFormTitle = styled.h3<{ $skeleton?: boolean }>`
  color: ${({ theme }) => theme.colors.colorYellow};
  font-size: ${({ theme }) => theme.textStyles.h3Text.fontSize};
  line-height: ${({ theme }) => theme.textStyles.h3Text.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  text-transform: uppercase;
  ${({ $skeleton }) => $skeleton && skeletonText}
`;

export const SettingsFormDescription = styled.p<{ $skeleton?: boolean }>`
  color: ${({ theme }) => theme.colors.colorGray};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  ${({ $skeleton }) => $skeleton && skeletonText}
`;

export const SettingsFormFields = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
`;

export const SettingsField = styled.fieldset`
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  min-width: 0;
  padding: 0;
  border: 0;
`;

export const SettingsLegend = styled.legend<{ $skeleton?: boolean }>`
  margin-bottom: ${({ theme }) => theme.space.xs};
  color: ${({ theme }) => theme.colors.colorPrimary};
  font-size: ${({ theme }) => theme.textStyles.smallText.fontSize};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.wide};
  line-height: ${({ theme }) => theme.textStyles.smallText.lineHeight};
  text-transform: uppercase;
  ${({ $skeleton }) => $skeleton && skeletonText}
`;

export const SettingsOptions = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xs};
`;

export const SettingsPriceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
`;

export const SettingsFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${({ theme }) => theme.space.sm};
  border-top: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorPrimary};
`;