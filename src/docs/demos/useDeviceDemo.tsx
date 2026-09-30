import { useState } from 'react';
import { DropIcon, LightbulbIcon, SnowflakeIcon } from '@phosphor-icons/react';
import { toneScales, type DeviceCardProps } from '../../lib';
import { CURRENT_PRICE } from './constants';

export const useDeviceDemo = () => {
  const [threshold, setThreshold] = useState(3);
  const [brightness, setBrightness] = useState(70);
  const [target, setTarget] = useState(21);

  const heating = threshold > CURRENT_PRICE;
  const power = heating ? Math.round((100 * (threshold - CURRENT_PRICE)) / (6 - CURRENT_PRICE)) : 0;
  const lightOff = brightness === 0;
  const currentTemp = 16;
  const reached = currentTemp >= target;

  const boiler: DeviceCardProps = {
    title: 'Bojler',
    icon: <DropIcon size={20} weight="light" />,
    status: heating ? 'on' : 'eco',
    statusText: heating ? `Topí · ${CURRENT_PRICE} Kč/kWh` : `Pauza · limit ${threshold.toFixed(1)} Kč`,
    gauge: { value: power, label: 'výkon', tone: heating ? 'yellow' : 'cyan' },
    slider: {
      label: 'Ohřívat pod',
      value: threshold,
      onChange: setThreshold,
      min: 0,
      max: 6,
      step: 0.1,
      formatValue: (value) => `${value.toFixed(1)} Kč`,
      tone: toneScales.descending,
    },
    progress: { label: 'Aktuálně vs cíl', value: 45, max: 60, valueLabel: '45 z 60°C' },
  };

  const light: DeviceCardProps = {
    title: 'Osvětlení',
    icon: <LightbulbIcon size={20} weight="light" />,
    status: lightOff ? 'off' : 'on',
    statusText: lightOff ? 'Zhasnuto' : `Obývák · ${Math.round(brightness * 0.12)} W`,
    gauge: { value: brightness, label: 'jas', tone: 'cyan' },
    slider: {
      label: 'Jas',
      value: brightness,
      onChange: setBrightness,
      formatValue: (value) => `${value} %`,
      tone: 'cyan',
    },
    progress: {
      label: 'Spotřeba dnes',
      value: (brightness / 100) * 1.5,
      max: 1.5,
      valueLabel: (value) => `${value.toFixed(1).replace('.', ',')} z 1,5 kWh`,
      tone: toneScales.descending,
    },
  };

  const climate: DeviceCardProps = {
    title: 'Klima',
    icon: <SnowflakeIcon size={20} weight="light" />,
    status: reached ? 'eco' : 'on',
    statusText: reached
      ? `Drží ${currentTemp} °C`
      : `${currentTemp} → ${target} °C · ~${Math.ceil((target - currentTemp) * 6)} min`,
    gauge: { value: target, min: 12, max: 28, label: 'cíl', formatValue: (value) => `${value}°` },
    slider: {
      label: 'Cílová teplota',
      value: target,
      onChange: setTarget,
      min: 12,
      max: 28,
      step: 0.5,
      formatValue: (value) => `${value}°C`,
    },
    progress: {
      label: 'Aktuálně vs cíl',
      value: currentTemp,
      max: target,
      valueLabel: `${currentTemp} z ${target}°C`,
      tone: toneScales.ascending,
    },
  };

  return { boiler, light, climate };
};