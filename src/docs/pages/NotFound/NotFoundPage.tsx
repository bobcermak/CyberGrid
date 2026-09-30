import { Button } from '../../../lib';
import { PageHeader } from '../../components/PageHeader';
import { toPath } from '../../hooks/useRoute';

export const NotFoundPage = () => (
  <PageHeader eyebrow="404" title="Stránka nenalezena" description="Tahle stránka v dokumentaci neexistuje.">
    <div>
      <Button arrow="up-right" onClick={() => {
        window.history.pushState(null, '', toPath(''));
        window.dispatchEvent(new PopStateEvent('popstate'));
      }}>
        Zpět na přehled
      </Button>
    </div>
  </PageHeader>
);