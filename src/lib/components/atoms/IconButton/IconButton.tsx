import type { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import ArrowIcon, { type ArrowDirection } from '../Button/ArrowIcon';
import { ButtonBase, ButtonSegment, buttonSizes, type ButtonSize, type ButtonVariant } from '../Button/Button.styles';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  'aria-label': string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  direction?: ArrowDirection;
  icon?: ReactNode;
  loading?: boolean;
  ref?: Ref<HTMLButtonElement>;
};
const IconButton = ({
  variant = 'primary',
  size = 'md',
  direction = 'up-right',
  icon,
  loading = false,
  disabled,
  type = 'button',
  ref,
  ...rest
}: IconButtonProps) => (
  <ButtonBase
    as="button"
    ref={ref}
    type={type}
    $variant={variant}
    $size={size}
    $loading={loading}
    disabled={disabled || loading}
    aria-busy={loading || undefined}
    {...rest}
  >
    <ButtonSegment as="span" $square>
      {icon ?? <ArrowIcon direction={direction} size={buttonSizes[size].iconSize} />}
    </ButtonSegment>
  </ButtonBase>
);
export default IconButton;