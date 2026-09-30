import { useState } from 'react';
import { ChartBarIcon, GearIcon, HouseIcon, WrenchIcon } from '@phosphor-icons/react';
import { Sidebar } from '../../../../lib';
import { BrandMark } from '../../../components/BrandMark';
import { toPath } from '../../../hooks/useRoute';

const items = [
  { id: 'domu', label: 'Domů', icon: <HouseIcon size={18} /> },
  { id: 'nastaveni', label: 'Nastavení', icon: <GearIcon size={18} /> },
  { id: 'vysledky', label: 'Výsledky', icon: <ChartBarIcon size={18} /> },
  { id: 'konfigurace', label: 'Konfigurace', icon: <WrenchIcon size={18} /> },
];
export const SidebarDemo = ({ loading = false }: { loading?: boolean }) => {
  const [active, setActive] = useState('vysledky');

  return (
    <Sidebar
      items={items}
      activeId={active}
      onSelect={setActive}
      loading={loading}
      brand={{ logo: <BrandMark size="1.2em" />, label: 'DASHBOARD', href: toPath('vit-provaznik') }}
      aria-label={loading ? 'Ukázková navigace – načítání' : 'Ukázková navigace'}
      style={{ position: 'static', height: 400 }}
    />
  );
};