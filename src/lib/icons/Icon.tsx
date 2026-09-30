import type { ReactNode, SVGProps } from 'react';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  size?: number | string;
  weight?: number;
}
export const Icon = ({ size = 24, weight = 1, children, ...rest }: IconProps & { children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={weight}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    focusable="false"
    {...rest}
  >
    {children}
  </svg>
);