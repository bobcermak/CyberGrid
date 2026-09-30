import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from "react";
import { ToggleInput, ToggleLabel, ToggleTrack, ToggleSkeletonText } from "./Toggle.styles";
import { useReveal } from "../../../hooks/useReveal";
import { Skeleton } from "../Skeleton";

export interface ToggleProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: ReactNode;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
}
export const Toggle = ({ label, id, loading = false, ref, ...props }: ToggleProps) => {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-toggle`;
  const reveal = useReveal(loading);

  if (loading) {
    return (
      <ToggleLabel as="span" aria-busy>
        <Skeleton width={72} height={40} radius="pill" />
        {label && <ToggleSkeletonText aria-hidden>{label}</ToggleSkeletonText>}
      </ToggleLabel>
    );
  }
  return (
    <ToggleLabel htmlFor={inputId} $reveal={reveal}>
      <ToggleInput
        ref={ref}
        id={inputId}
        type="checkbox"
        role="switch"
        {...props}
      />
      <ToggleTrack aria-hidden />
      {label && <span>{label}</span>}
    </ToggleLabel>
  );
};