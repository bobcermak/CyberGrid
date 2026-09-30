import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { TabList, Tab, Panel } from './Tabs.styles';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}
export const Tabs = ({ items, label }: { items: TabItem[]; label: string }) => {
  const baseId = useId();
  const [active, setActive] = useState(items[0]?.id);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const item = items[(index + items.length) % items.length];
    setActive(item.id);
    tabs.current[items.indexOf(item)]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const moves: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: items.length - 1,
    };
    if (event.key in moves) {
      event.preventDefault();
      select(moves[event.key]);
    }
  };

  return (
    <div>
      <TabList role="tablist" aria-label={label}>
        {items.map((item, index) => (
          <Tab
            key={item.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${item.id}`}
            aria-selected={item.id === active}
            aria-controls={`${baseId}-panel-${item.id}`}
            tabIndex={item.id === active ? 0 : -1}
            onClick={() => setActive(item.id)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            {item.label}
          </Tab>
        ))}
      </TabList>
      {items.map((item) => (
        <Panel
          key={item.id}
          role="tabpanel"
          id={`${baseId}-panel-${item.id}`}
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={item.id !== active}
          tabIndex={0}
        >
          {item.content}
        </Panel>
      ))}
    </div>
  );
};