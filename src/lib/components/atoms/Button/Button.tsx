import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import ArrowIcon, { type ArrowDirection } from './ArrowIcon';
import { ButtonBase, ButtonIcon, ButtonSegment, buttonSizes, type ButtonSize, type ButtonVariant } from './Button.styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean | ArrowDirection;
  icon?: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  ref?: Ref<HTMLButtonElement>;
};
const Button = ({
  variant = 'primary',
  size = 'md',
  arrow = false,
  icon,
  fullWidth = false,
  loading = false,
  disabled,
  type = 'button',
  children,
  ref,
  ...rest
}: ButtonProps) => {
  const direction: ArrowDirection | null = arrow === true ? 'down-right' : arrow || null;
  return (
    <ButtonBase
      as="button"
      ref={ref}
      type={type}
      $variant={variant}
      $size={size}
      $width={fullWidth ? '100%' : undefined}
      $loading={loading}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      <ButtonSegment as="span">
        {icon && <ButtonIcon aria-hidden>{icon}</ButtonIcon>}
        <span>{children}</span>
      </ButtonSegment>
      {direction && (
        <ButtonSegment as="span" $square>
          <ArrowIcon direction={direction} size={buttonSizes[size].iconSize} />
        </ButtonSegment>
      )}
    </ButtonBase>
  );
};
export default Button;