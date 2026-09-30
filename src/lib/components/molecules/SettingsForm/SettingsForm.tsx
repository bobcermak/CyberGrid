import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "../../atoms/Button";
import { CheckBox } from "../../atoms/CheckBox";
import { Input } from "../../atoms/Input";
import { Radio } from "../../atoms/Radio";
import { Toggle } from "../../atoms/Toggle";
import { SettingsField, SettingsFormDescription, SettingsFormFields, SettingsFormFooter, SettingsFormHeader, SettingsFormRoot, SettingsFormTitle, SettingsLegend, SettingsOptions, SettingsPriceHeader } from "./SettingsForm.styles";
import { useReveal } from "../../../hooks/useReveal";

export type SettingsMode = "automatic" | "eco" | "comfort";
export interface SettingsFormValues {
  location: string;
  pricesEnabled: boolean;
  showKwhPrice: boolean;
  showTotalPrice: boolean;
  mode: SettingsMode;
}
export interface SettingsFormProps {
  title?: ReactNode;
  description?: ReactNode;
  defaultValues?: Partial<SettingsFormValues>;
  onChange?: (values: SettingsFormValues) => void;
  loading?: boolean;
  onSubmit?: (
    values: SettingsFormValues,
    event: FormEvent<HTMLFormElement>,
  ) => void;
}
export const SettingsForm = ({
  title = "Nastavení",
  description,
  defaultValues,
  onChange,
  onSubmit,
  loading = false,
}: SettingsFormProps) => {
  const reveal = useReveal(loading);
  const [values, setValues] = useState<SettingsFormValues>({
    location: "Praha",
    pricesEnabled: true,
    showKwhPrice: true,
    showTotalPrice: false,
    mode: "automatic",
    ...defaultValues,
  });
  const updateValue = <Key extends keyof SettingsFormValues>(
    key: Key,
    value: SettingsFormValues[Key],
  ) => {
    const nextValues = { ...values, [key]: value };
    setValues(nextValues);
    onChange?.(nextValues);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(values, event);
  };
  return (
    <SettingsFormRoot
      onSubmit={handleSubmit}
      $reveal={reveal}
      aria-busy={loading || undefined}
    >
      <SettingsFormHeader>
        <SettingsFormTitle $skeleton={loading}>{title}</SettingsFormTitle>
        {description && (
          <SettingsFormDescription $skeleton={loading}>
            {description}
          </SettingsFormDescription>
        )}
      </SettingsFormHeader>
      <SettingsFormFields>
        <SettingsField>
          <SettingsLegend $skeleton={loading}>Místo</SettingsLegend>
          <Input
            loading={loading}
            aria-label="Místo"
            value={values.location}
            onChange={(event) => updateValue("location", event.target.value)}
            placeholder="Například Praha"
          />
        </SettingsField>
        <SettingsField>
          <SettingsPriceHeader>
            <SettingsLegend $skeleton={loading}>Ceny</SettingsLegend>
            <Toggle
            loading={loading}
              aria-label="Zapnout zobrazování cen"
              checked={values.pricesEnabled}
              onChange={(event) =>
                updateValue("pricesEnabled", event.target.checked)
              }
            />
          </SettingsPriceHeader>
          <SettingsOptions>
            <CheckBox
            loading={loading}
              label="Cena za kWh"
              checked={values.showKwhPrice}
              disabled={!values.pricesEnabled}
              onChange={(event) =>
                updateValue("showKwhPrice", event.target.checked)
              }
            />
            <CheckBox
            loading={loading}
              label="Celková cena"
              checked={values.showTotalPrice}
              disabled={!values.pricesEnabled}
              onChange={(event) =>
                updateValue("showTotalPrice", event.target.checked)
              }
            />
          </SettingsOptions>
        </SettingsField>
        <SettingsField>
          <SettingsLegend $skeleton={loading}>Režim</SettingsLegend>
          <SettingsOptions>
            <Radio
            loading={loading}
              name="settings-mode"
              label="Automatický"
              value="automatic"
              checked={values.mode === "automatic"}
              onChange={() => updateValue("mode", "automatic")}
            />
            <Radio
            loading={loading}
              name="settings-mode"
              label="Úsporný"
              value="eco"
              checked={values.mode === "eco"}
              onChange={() => updateValue("mode", "eco")}
            />
            <Radio
            loading={loading}
              name="settings-mode"
              label="Komfortní"
              value="comfort"
              checked={values.mode === "comfort"}
              onChange={() => updateValue("mode", "comfort")}
            />
          </SettingsOptions>
        </SettingsField>
      </SettingsFormFields>
      <SettingsFormFooter>
        <Button type="submit" arrow loading={loading}>
          Uložit
        </Button>
      </SettingsFormFooter>
    </SettingsFormRoot>
  );
};