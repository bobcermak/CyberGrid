import { useTheme } from 'styled-components';
import { Chip, Swatch, Swatches } from './ColorPalette.styles';

export const ColorPalette = () => {
  const { colors } = useTheme();

  return (
    <Swatches>
      {Object.entries(colors).map(([name, value]) => (
        <Swatch key={name}>
          <Chip $color={value} />
          <span>{name}</span>
          <span>{value}</span>
        </Swatch>
      ))}
    </Swatches>
  );
};