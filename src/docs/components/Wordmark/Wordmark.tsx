import { BrandMark } from '../BrandMark';
import { Accent, Hidden, Mark } from './Wordmark.styles';

export const Wordmark = ({ accent = false }: { accent?: boolean }) => (
  <>
    <Hidden>CyberGrid</Hidden>
    <Mark aria-hidden>
      <BrandMark size="1.2em" />
      YBER{accent ? <Accent>GRID</Accent> : 'GRID'}
    </Mark>
  </>
);