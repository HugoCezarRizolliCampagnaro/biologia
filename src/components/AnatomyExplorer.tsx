import { useState, type ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AnatomyPart } from '../data/types';
import { MoreToggle } from './MoreToggle';
import './AnatomyExplorer.css';

export interface Pt {
  x: number;
  y: number;
}

/**
 * Diagrama clicável: marcadores numerados no desenho + painel com o nome
 * e uma linha. A explicação completa fica no "ver mais".
 */
export function AnatomyExplorer({
  parts,
  markers,
  targets,
  renderDiagram,
  caption,
  accent = 'coral',
}: {
  parts: AnatomyPart[];
  markers: Record<string, Pt>;
  targets: Record<string, Pt>;
  renderDiagram: (activeId: string, overlay: ReactNode) => ReactNode;
  caption: ReactNode;
  accent?: 'coral' | 'cyan';
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const part = parts[activeIdx];
  const go = (d: number) => setActiveIdx((i) => (i + d + parts.length) % parts.length);

  const overlay = parts.map((p, i) => {
    const m = markers[p.id];
    const t = targets[p.id];
    if (!m) return null;
    const on = i === activeIdx;
    return (
      <g
        key={p.id}
        className={`marker${on ? ' is-on' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`${i + 1}. ${p.name}`}
        aria-pressed={on}
        onClick={() => setActiveIdx(i)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveIdx(i);
          }
        }}
      >
        {t && (Math.abs(m.x - t.x) > 1 || Math.abs(m.y - t.y) > 1) && <line x1={m.x} y1={m.y} x2={t.x} y2={t.y} className="marker-line" />}
        <circle cx={m.x} cy={m.y} r="20" fill="transparent" />
        <circle cx={m.x} cy={m.y} r="12" className="marker-dot" />
        <text x={m.x} y={m.y + 4.5} textAnchor="middle" className="marker-num">
          {i + 1}
        </text>
      </g>
    );
  });

  return (
    <div className={`anatomy anatomy-${accent}`}>
      <figure className="anatomy-figure">
        {renderDiagram(part.id, overlay)}
        <figcaption className="anatomy-caption">{caption}</figcaption>
      </figure>

      <div className="anatomy-panel">
        <div className="anatomy-card" aria-live="polite">
          <div className="anatomy-card-top">
            <span className="eyebrow">
              Estrutura {activeIdx + 1}/{parts.length}
            </span>
            <div className="anatomy-nav">
              <button type="button" onClick={() => go(-1)} aria-label="Estrutura anterior">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label="Próxima estrutura">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
          <h4 className="anatomy-name">{part.name}</h4>
          <p className="anatomy-short">{part.short}</p>
          <MoreToggle key={part.id}>
            <p>{part.text}</p>
            {part.note && <p className="anatomy-note">{part.note}</p>}
          </MoreToggle>
        </div>

        <div className="chips" role="group" aria-label="Escolha uma estrutura">
          {parts.map((p, i) => (
            <button key={p.id} type="button" className="chip" aria-pressed={i === activeIdx} onClick={() => setActiveIdx(i)}>
              <span className="chip-num">{i + 1}</span>
              {p.name.replace(' (espongiocele)', '')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
