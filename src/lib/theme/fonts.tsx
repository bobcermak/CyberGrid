import { ensureFonts } from '../utils/fonts';
import { useTheme } from './styled';

export const CyberFonts = ({ url }: { url?: string | null }) => {
  const theme = useTheme();
  ensureFonts(url === undefined ? theme.fontsUrl : url);
  return null;
};