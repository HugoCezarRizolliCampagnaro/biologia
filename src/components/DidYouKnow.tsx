import { Lightbulb } from 'lucide-react';
import type { Curiosity } from '../data/types';
import './DidYouKnow.css';

export function DidYouKnow({ items }: { items: Curiosity[] }) {
  return (
    <ul className={`dyk${items.length === 3 ? ' dyk-3' : ''}`} aria-label="Curiosidades">
      {items.map((c) => (
        <li key={c.text} className="dyk-card">
          <Lightbulb className="dyk-icon" size={22} aria-hidden="true" />
          <p className="dyk-text">{c.short ?? c.text}</p>
          <p className="dyk-source">Fonte: {c.source}</p>
        </li>
      ))}
    </ul>
  );
}
