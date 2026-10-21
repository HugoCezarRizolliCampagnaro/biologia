import { useState } from 'react';
import { Plus } from 'lucide-react';
import type { InfoCard } from '../data/types';
import { Icon } from './Icon';
import './TraitGrid.css';

/** Cartas de características: ícone + rótulo curto; o toque revela a explicação. */
export function TraitGrid({ items, accent = 'cyan', columns = 4 }: { items: InfoCard[]; accent?: 'cyan' | 'coral'; columns?: 3 | 4 | 5 }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <ul className={`traits traits-${accent} traits-cols-${columns}`}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <li key={item.id} className={`trait${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="trait-btn"
              aria-expanded={isOpen}
              aria-controls={`trait-${item.id}`}
              onClick={() => setOpen(isOpen ? null : item.id)}
            >
              <span className="trait-icon">
                <Icon name={item.icon} size={26} />
              </span>
              <span className="trait-label">{item.label ?? item.title}</span>
              <Plus className="trait-plus" size={18} aria-hidden="true" />
            </button>
            <div id={`trait-${item.id}`} className="trait-body" hidden={!isOpen}>
              <p>{item.text}</p>
              {item.details && <p className="trait-details">{item.details}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
