import type { ReactNode } from 'react';
import { Root, Hint } from './Preview.styles';

export interface PreviewProps {
  children: ReactNode;
  resizable?: boolean;
  column?: boolean;
  minHeight?: string;
}
export const Preview = ({ children, resizable = false, column = false, minHeight }: PreviewProps) => (
  <div>
    <Root $resizable={resizable} $column={column} $minHeight={minHeight}>
      {children}
    </Root>
    {resizable && <Hint>↘ Chyť pravý dolní roh a měň šířku – komponenta reaguje na svůj kontejner.</Hint>}
  </div>
);