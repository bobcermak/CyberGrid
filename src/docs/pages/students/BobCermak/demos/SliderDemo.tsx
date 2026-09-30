import { useState } from 'react';
import { Slider } from '../../../../../lib';
import { Stack } from '../../../../components/Typography';
import { Caption, Narrow, Variant } from './demos.styles';

export const SliderDemo = ({ loading = false }: { loading?: boolean }) => {
  const [price, setPrice] = useState<number>(2);

  return (
    <Narrow>
      <Stack $gap="28px">
        <Slider
          loading={loading}
          label="Ohřívat pod"
          value={price}
          onChange={setPrice}
          max={6}
          step={0.1}
          formatValue={(value) => `${value.toFixed(1)} Kč`}
        />
        <Slider loading={loading} label="Vypnuto" defaultValue={40} disabled />
        <Variant>
          <Caption>loading</Caption>
          <Slider label="Ohřívat pod" defaultValue={2} loading />
        </Variant>
      </Stack>
    </Narrow>
  );
};