import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from "react";
import { InputControl, InputLabel, InputMessage, InputRoot } from "./Input.styles";
import { useReveal } from "../../../hooks/useReveal";
import { Skeleton } from "../Skeleton";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
}
export const Input = ({
  label,
  hint,
  error,
  loading = false,
  id,
  ref,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-input`;
  const message = error || hint;
  const reveal = useReveal(loading);

  if (loading) {
    return (
      <InputRoot aria-busy>
        {label && (
          <InputLabel as="span" $skeleton aria-hidden>
            {label}
          </InputLabel>
        )}
        <Skeleton height={41} radius="none" />
        {message && (
          <InputMessage $skeleton aria-hidden>
            {message}
          </InputMessage>
        )}
      </InputRoot>
    );
  }
  return (
    <InputRoot $reveal={reveal}>
      {label && <InputLabel htmlFor={inputId}>{label}</InputLabel>}
      <InputControl
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {message && (
        <InputMessage $error={Boolean(error)}>{message}</InputMessage>
      )}
    </InputRoot>
  );
};