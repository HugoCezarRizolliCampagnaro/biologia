import { useState, type KeyboardEvent } from 'react';
import { spongeAsexual, spongeHermaphroditeLabel, spongeHermaphroditeNote, spongeSexual } from '../../data/porifera';
import { ReproArt } from './ReproArt';
import { MoreToggle } from '../MoreToggle';
import './SpongeReproduction.css';

const tabs = [
  { id: 'assexuada', label: 'Assexuada', steps: spongeAsexual, hint: 'Sem gametas: parte do corpo vira um novo indivíduo.' },
  { id: 'sexuada', label: 'Sexuada', steps: spongeSexual, hint: 'Com gametas e uma larva que nada.' },
] as const;

export function SpongeReproduction() {
  const [tab, setTab] = useState<(typeof tabs)[number]['id']>('assexuada');
  const current = tabs.find((t) => t.id === tab)!;

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const next = tab === 'assexuada' ? 'sexuada' : 'assexuada';
      setTab(next);
      document.getElementById(`tab-${next}`)?.focus();
    }
  };

  return (
    <div className="repro">
      <div className="repro-tabs" role="tablist" aria-label="Tipo de reprodução" onKeyDown={onKey}>
        {tabs.map((t) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            type="button"
            role="tab"
            className="repro-tab"
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div id={`panel-${current.id}`} role="tabpanel" aria-labelledby={`tab-${current.id}`} className="repro-panel">
        <p className="repro-hint muted">{current.hint}</p>
        <ol className={`repro-steps${current.id === 'sexuada' ? ' is-sequence' : ''}`}>
          {current.steps.map((s) => (
            <li key={s.title} className="repro-step">
              <div className="repro-art">
                <ReproArt title={s.title} />
              </div>
              <h4 className="repro-label">{s.label ?? s.title}</h4>
              <p className="repro-short">{s.short}</p>
            </li>
          ))}
        </ol>

        {current.id === 'sexuada' && (
          <div className="repro-herm">
            <span className="repro-badge">{spongeHermaphroditeLabel}</span>
          </div>
        )}

        <MoreToggle key={current.id}>
          {current.steps.map((s) => (
            <p key={s.title}>
              <strong>{s.title}:</strong> {s.text}
            </p>
          ))}
          {current.id === 'sexuada' && <p>{spongeHermaphroditeNote}</p>}
        </MoreToggle>
      </div>
    </div>
  );
}
