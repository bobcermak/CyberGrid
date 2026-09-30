import { useId, type InputHTMLAttributes, type ReactNode, type Ref } from "react";
import { RadioCircle, RadioInput, RadioLabel, RadioSkeletonText } from "./Radio.styles";
import { useReveal } from "../../../hooks/useReveal";
import { Skeleton } from "../Skeleton";

export interface RadioProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: ReactNode;
  loading?: boolean;
  ref?: Ref<HTMLInputElement>;
}
export const Radio = ({ label, id, loading = false, ref, ...props }: RadioProps) => {
  const generatedId = useId();
  const inputId = id ?? `${generatedId}-radio`;
  const reveal = useReveal(loading);

  if (loading) {
    return (
      <RadioLabel as="span" aria-busy>
        <Skeleton circle width={24} />
        <RadioSkeletonText aria-hidden>{label}</RadioSkeletonText>
      </RadioLabel>
    );
  }
  return (
    <RadioLabel htmlFor={inputId} $reveal={reveal}>
      <RadioInput ref={ref} id={inputId} type="radio" {...props} />
      <RadioCircle aria-hidden />
      <span>{label}</span>
    </RadioLabel>
  );
};