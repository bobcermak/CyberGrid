import { AnimatedButton, Button, DeviceCard, IconButton, StatusDot } from '../../../../lib';
import { ComponentDoc } from '../../../components/ComponentDoc';
import { PageHeader } from '../../../components/PageHeader';
import { Row } from '../../../components/Typography';
import { findMember } from '../../../content/team';
import { useInitialLoading } from '../../../hooks/useInitialLoading';
import { CURRENT_PRICE, DeviceGrid, useDeviceDemo } from '../../../demos';
import { code } from './code';
import { Caption, GaugeDemo, ProgressDemo, SliderDemo, Variant } from './demos';

const member = findMember('bob-cermak')!;
export const BobCermakPage = () => {
  const { boiler, light, climate } = useDeviceDemo();
  const loading = useInitialLoading();

  return (
  <>
    <PageHeader
      eyebrow={`Student ${member.student} · ${member.area}`}
      title={member.name}
      description="Ovládání a měření zařízení – tři atomy a karta, která je skládá dohromady."
    />
    <ComponentDoc
      id="device-card"
      name="DeviceCard"
      level="molecule"
      column
      description={
        <>
          Karta zařízení z Gauge, Slider a ProgressBar. Zkus posuvník – u Bojleru se při ceně {CURRENT_PRICE} Kč
          přepne stav. Na úzké šířce se karta sama přeskládá (container query).
        </>
      }
      preview={
        <>
        <DeviceGrid>
          <DeviceCard {...boiler} loading={loading} />
          <DeviceCard {...light} loading={loading} />
          <DeviceCard {...climate} loading={loading} />
        </DeviceGrid>
        <Variant>
          <Caption>loading</Caption>
          <DeviceGrid style={{ maxWidth: 480 }}>
            <DeviceCard {...boiler} loading />
          </DeviceGrid>
        </Variant>
        </>
      }
      code={code.card}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'title', type: 'string', description: 'Název zařízení.' },
        { name: 'status', type: "'on' | 'eco' | 'off'", description: 'Barva stavové tečky.' },
        { name: 'statusText', type: 'ReactNode', description: 'Věta pod názvem.' },
        { name: 'gauge / slider / progress', type: 'GaugeProps / SliderProps / ProgressBarProps', description: 'Props pro atomy uvnitř.' },
        { name: 'defaultOpen', type: 'boolean', default: 'true', description: 'Rozbalená / sbalená karta.' },
        { name: 'tone', type: 'Tone', default: 'z gauge', description: 'Barva rámečku a glow – jinak sleduje barvu atomů.' },
      ]}
    />
    <ComponentDoc
      id="slider"
      name="Slider"
      level="atom"
      description="Posuvník nad nativním range inputem – funguje i z klávesnice a se čtečkou."
      preview={<SliderDemo loading={loading} />}
      code={code.slider}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'label', type: 'ReactNode', description: 'Popisek.' },
        { name: 'value / onChange', type: 'number / (value) => void', description: 'Řízená hodnota.' },
        { name: 'min / max / step', type: 'number', default: '0 / 100 / 1', description: 'Rozsah.' },
        { name: 'formatValue', type: '(value) => string', description: 'Text hodnoty vpravo.' },
      ]}
    />
    <ComponentDoc
      id="gauge"
      name="Gauge"
      level="atom"
      description={<>Kruhový ukazatel 270°. S <code>tone={'{toneScales.descending}'}</code> mění barvu podle hodnoty.</>}
      preview={<GaugeDemo loading={loading} />}
      code={code.gauge}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'value', type: 'number', description: 'Hodnota.' },
        { name: 'min / max', type: 'number', default: '0 / 100', description: 'Rozsah.' },
        { name: 'label', type: 'ReactNode', description: 'Popisek pod hodnotou.' },
        { name: 'tone', type: 'Tone | (ratio) => Tone', default: "'yellow'", description: 'Barva oblouku.' },
        { name: 'size', type: 'number | string', default: '150', description: 'Průměr.' },
      ]}
    />
    <ComponentDoc
      id="progress-bar"
      name="ProgressBar"
      level="atom"
      description="Lineární ukazatel „aktuálně vs cíl“, barva se mění s postupem."
      preview={<ProgressDemo loading={loading} />}
      code={code.progress}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'value / max', type: 'number', default: '— / 100', description: 'Hodnota a cíl.' },
        { name: 'label', type: 'ReactNode', description: 'Popisek.' },
        { name: 'valueLabel', type: 'string | (value, ratio) => string', description: 'Text vpravo.' },
        { name: 'tone', type: 'Tone | (ratio) => Tone', default: "'yellow'", description: 'Barva výplně.' },
      ]}
    />
    <ComponentDoc
      id="button"
      name="Button"
      level="atom"
      description={<>Pět variant z Figmy, volitelná šipka. <code>AnimatedButton</code> je jen <code>styled(Button)</code> s animací.</>}
      column
      preview={
        <>
          <Row>
            <Button loading={loading} arrow>Button</Button>
            <Button loading={loading} variant="secondary">Button</Button>
            <Button loading={loading} variant="tertiary">Button</Button>
            <Button loading={loading} variant="cyan">Button</Button>
            <Button loading={loading} variant="magenta">Button</Button>
          </Row>
          <Row>
            <AnimatedButton loading={loading} arrow>Animated</AnimatedButton>
            <Button loading={loading} arrow disabled>Disabled</Button>
          </Row>
          <Variant>
            <Caption>loading</Caption>
            <Row>
              <Button arrow loading>Button</Button>
              <Button variant="secondary" loading>Button</Button>
              <AnimatedButton variant="cyan" loading>Animated</AnimatedButton>
            </Row>
          </Variant>
        </>
      }
      code={code.button}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'variant', type: "'primary' | 'secondary' | 'tertiary' | 'cyan' | 'magenta'", default: "'primary'", description: 'Barva.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Velikost.' },
        { name: 'arrow', type: "boolean | 'up-right' | 'down-right' | 'up' | 'down'", default: 'false', description: 'Šipka vpravo.' },
        { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Na celou šířku.' },
      ]}
    />
    <ComponentDoc
      id="icon-button"
      name="IconButton"
      level="atom"
      description="Čtvercové tlačítko se šipkou – ta samá základna jako Button."
      column
      preview={
        <>
        <Row>
          <IconButton loading={loading} aria-label="Detail" />
          <IconButton loading={loading} aria-label="Nahoru" direction="up" />
          <IconButton loading={loading} aria-label="Dolů" direction="down" variant="secondary" />
          <IconButton loading={loading} aria-label="Detail" variant="cyan" />
        </Row>
        <Variant>
          <Caption>loading</Caption>
          <Row>
            <IconButton aria-label="Detail" loading />
            <IconButton aria-label="Dolů" direction="down" variant="secondary" loading />
          </Row>
        </Variant>
        </>
      }
      code={code.iconButton}
      props={[
        { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' },
        { name: 'aria-label', type: 'string', description: 'Povinný popis.' },
        { name: 'direction', type: "'up-right' | 'down-right' | 'up' | 'down'", default: "'up-right'", description: 'Směr šipky.' },
        { name: 'icon', type: 'ReactNode', description: 'Vlastní ikona.' },
      ]}
    />
    <ComponentDoc
      id="status-dot"
      name="StatusDot"
      level="atom"
      description="Stavová tečka: zapnuto (pulzuje), úsporný režim, vypnuto."
      preview={
        <Row $gap="24px">
          <Row $gap="8px"><StatusDot loading={loading} status="on" label="Zapnuto" /><Caption>on</Caption></Row>
          <Row $gap="8px"><StatusDot loading={loading} status="eco" label="Úsporný režim" /><Caption>eco</Caption></Row>
          <Row $gap="8px"><StatusDot loading={loading} status="off" label="Vypnuto" /><Caption>off</Caption></Row>
          <Row $gap="8px"><StatusDot status="on" size={10} loading /><Caption>loading</Caption></Row>
        </Row>
      }
      code={code.status}
    />
  </>
  );
};