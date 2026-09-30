import { useState } from 'react';
import { ProgressBar, Slider, toneScales } from '../../../../../lib';
import { Stack } from '../../../../components/Typography';
import { Caption, Narrow, Variant } from './demos.styles';

export const ProgressDemo = ({ loading = false }: { loading?: boolean }) => {
  const [current, setCurrent] = useState<number>(16);

  return (
    <Narrow>
      <Stack $gap="28px">
        <ProgressBar
          loading={loading}
          label="Aktuálně vs cíl"
          value={current}
          max={21}
          valueLabel={`${current} z 21°C`}
          tone={toneScales.ascending}
        />
        <Slider
          loading={loading}
          label="Teplota"
          value={current}
          onChange={setCurrent}
          max={21}
          formatValue={(v) => `${v}°C`}
        />
        <Variant>
          <Caption>loading</Caption>
          <ProgressBar label="Aktuálně vs cíl" value={16} max={21} loading />
        </Variant>
      </Stack>
    </Narrow>
  );
};