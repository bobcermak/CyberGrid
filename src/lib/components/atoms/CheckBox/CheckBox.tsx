import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from "react";
import { CheckBoxBox, CheckBoxInput, CheckBoxLabel, CheckBoxSkeletonText } from "./CheckBox.styles";
import { useReveal } from "../../../hooks/useReveal";
import { Skeleton } from "../Skeleton";

export interface CheckBoxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
}
export const CheckBox = ({ label, id, loading = false, ref, ...props }: CheckBoxProps) => {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-checkbox`;
  const reveal = useReveal(loading);

  if (loading) {
    return (
      <CheckBoxLabel as="span" aria-busy>
        <Skeleton width={24} height={24} />
        <CheckBoxSkeletonText aria-hidden>{label}</CheckBoxSkeletonText>
      </CheckBoxLabel>
    );
  }
  return (
    <CheckBoxLabel htmlFor={inputId} $reveal={reveal}>
      <CheckBoxInput ref={ref} id={inputId} type="checkbox" {...props} />
      <CheckBoxBox aria-hidden />
      <span>{label}</span>
    </CheckBoxLabel>
  );
};