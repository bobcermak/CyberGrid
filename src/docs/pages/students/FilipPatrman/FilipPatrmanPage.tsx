import { useState } from 'react';
import { CheckBox, Input, Radio, SettingsForm, Toggle } from '../../../../lib';
import { ComponentDoc } from '../../../components/ComponentDoc';
import { ComponentList } from '../../../components/ComponentList';
import { MemberIntro } from '../../../components/MemberIntro';
import { Row, Stack } from '../../../components/Typography';
import { Caption, Variant } from '../../../components/Variant';
import { findMember } from '../../../content/team';
import { useInitialLoading } from '../../../hooks/useInitialLoading';
import { code } from './code';

const member = findMember('filip-patrman')!;
const loadingRow = { name: 'loading', type: 'boolean', default: 'false', description: 'Skeleton místo obsahu, stejný rozměr.' };
export const FilipPatrmanPage = () => {
  const loading = useInitialLoading();
  const [place, setPlace] = useState('Praha');

  return (
    <>
      <MemberIntro
        member={member}
        description="Formulář nastavení (Místo, Ceny, Režim) a základ projektu - ThemeProvider a tokeny."
      />
      <ComponentDoc
        id="settings-form"
        name="SettingsForm"
        level="molecule"
        description="Formulář nastavení z atomů Input, Toggle, CheckBox a Radio. Vypnutý přepínač cen zablokuje volby cen."
        column
        preview={
          <>
            <SettingsForm loading={loading} />
            <Variant>
              <Caption>loading</Caption>
              <SettingsForm loading />
            </Variant>
          </>
        }
        code={code.form}
        props={[
          loadingRow,
          { name: 'title / description', type: 'ReactNode', default: "'Nastavení' / —", description: 'Nadpis a popis formuláře.' },
          { name: 'defaultValues', type: 'Partial<SettingsFormValues>', description: 'location, pricesEnabled, showKwhPrice, showTotalPrice, mode.' },
          { name: 'onChange', type: '(values) => void', description: 'Každá změna pole.' },
          { name: 'onSubmit', type: '(values, event) => void', description: 'Odeslání tlačítkem Uložit.' },
        ]}
      />
      <ComponentDoc
        id="input"
        name="Input"
        level="atom"
        description="Textové pole s popiskem, nápovědou a chybovou hláškou."
        column
        preview={
          <Stack $gap="24px" style={{ width: 'min(100%, 320px)' }}>
            <Input
              loading={loading}
              label="Místo"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
              hint="Město pro ceny elektřiny"
            />
            <Input loading={loading} label="E-mail" defaultValue="bob@" error="Neplatný e-mail" />
            <Variant>
              <Caption>loading</Caption>
              <Input label="Místo" hint="Město pro ceny elektřiny" loading />
            </Variant>
          </Stack>
        }
        code={code.input}
        props={[
          loadingRow,
          { name: 'label', type: 'ReactNode', description: 'Popisek nad polem.' },
          { name: 'hint / error', type: 'ReactNode', description: 'Nápověda nebo chyba pod polem (error nastaví aria-invalid).' },
          { name: '...rest', type: 'InputHTMLAttributes', description: 'value, onChange, placeholder, disabled…' },
        ]}
      />
      <ComponentDoc
        id="checkbox"
        name="CheckBox"
        level="atom"
        description="Zaškrtávací pole nad nativním checkboxem."
        column
        preview={
          <>
            <Row>
              <CheckBox loading={loading} label="Cena za kWh" defaultChecked />
              <CheckBox loading={loading} label="Celková cena" />
              <CheckBox loading={loading} label="Vypnuto" disabled />
            </Row>
            <Variant>
              <Caption>loading</Caption>
              <CheckBox label="Cena za kWh" loading />
            </Variant>
          </>
        }
        code={code.checkBox}
        props={[
          loadingRow,
          { name: 'label', type: 'ReactNode', description: 'Text vedle pole (povinný).' },
          { name: '...rest', type: 'InputHTMLAttributes', description: 'checked, defaultChecked, onChange, disabled…' },
        ]}
      />
      <ComponentDoc
        id="radio"
        name="Radio"
        level="atom"
        description="Přepínač jedné volby ze skupiny (stejné name)."
        column
        preview={
          <>
            <Row>
              <Radio loading={loading} name="demo-mode" label="Automatický" defaultChecked />
              <Radio loading={loading} name="demo-mode" label="Úsporný" />
              <Radio loading={loading} name="demo-mode" label="Komfortní" />
            </Row>
            <Variant>
              <Caption>loading</Caption>
              <Radio name="demo-mode-loading" label="Automatický" loading />
            </Variant>
          </>
        }
        code={code.radio}
        props={[
          loadingRow,
          { name: 'label', type: 'ReactNode', description: 'Text vedle přepínače (povinný).' },
          { name: 'name / value', type: 'string', description: 'Skupina a hodnota volby.' },
        ]}
      />
      <ComponentDoc
        id="toggle"
        name="Toggle"
        level="atom"
        description="Vypínač zapnuto / vypnuto s rolí switch."
        column
        preview={
          <>
            <Row>
              <Toggle loading={loading} label="Zobrazovat ceny" defaultChecked />
              <Toggle loading={loading} label="Vypnuto" disabled />
            </Row>
            <Variant>
              <Caption>loading</Caption>
              <Toggle label="Zobrazovat ceny" loading />
            </Variant>
          </>
        }
        code={code.toggle}
        props={[
          loadingRow,
          { name: 'label', type: 'ReactNode', description: 'Text vedle vypínače.' },
          { name: '...rest', type: 'InputHTMLAttributes', description: 'checked, defaultChecked, onChange, disabled…' },
        ]}
      />
      <ComponentList components={member.components} loading={loading} />
    </>
  );
};