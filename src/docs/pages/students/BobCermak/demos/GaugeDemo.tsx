import { useState } from 'react';
import { Gauge, Slider, toneScales } from '../../../../../lib';
import { Row, Stack } from '../../../../components/Typography';
import { Caption, Narrow, Variant } from './demos.styles';

export const GaugeDemo = ({ loading = false }: { loading?: boolean }) => {
  const [load, setLoad] = useState<number>(64);

  return (
    <Stack $gap="28px">
      <Row $gap="32px">
        <Gauge loading={loading} value={50} label="vlhkost" />
        <Gauge loading={loading} value={load} label="zátěž" tone={toneScales.descending} />
      </Row>
      <Narrow>
        <Slider
          loading={loading}
          label="Zátěž"
          value={load}
          onChange={setLoad}
          formatValue={(v) => `${v} %`}
          tone={toneScales.descending}
        />
      </Narrow>
      <Variant>
        <Caption>loading</Caption>
        <Gauge value={50} label="vlhkost" loading />
      </Variant>
    </Stack>
  );
};