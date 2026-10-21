import { useEffect, useState, type JSX } from 'react';
import { Pause, Play } from 'lucide-react';
import { lifeCycleCaveat, scyphozoanLifeCycle } from '../../data/cnidaria';
import { MoreToggle } from '../MoreToggle';
import './LifeCycle.css';

const STEP_MS = 2600;
const N = scyphozoanLifeCycle.length;

/* Ícones das etapas (viewBox 0 0 60 60) */
const bell = (x: number, y: number, s: number) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M-16 0 C-16 -20, 16 -20, 16 0 C10 -2, -10 -2, -16 0 Z" fill="#ffd2c6" />
    <path d="M-10 0 C-8 8, -12 14, -9 20 M0 0 C2 8, -2 14, 1 20 M10 0 C12 8, 8 14, 11 20" fill="none" stroke="#8be9f0" strokeWidth="1.6" strokeLinecap="round" />
  </g>
);
const ground = <path d="M8 50 L52 50" stroke="#4a6d80" strokeWidth="3" strokeLinecap="round" />;
const egg = (x: number, y: number) => (
  <g>
    <circle cx={x} cy={y} r="9" fill="#ffd2c6" />
    <circle cx={x} cy={y} r="3" fill="#ff8066" />
  </g>
);
const sperm = (x: number, y: number) => (
  <g>
    <ellipse cx={x} cy={y} rx="3.4" ry="2.6" fill="#8be9f0" />
    <path d={`M${x + 3} ${y} C${x + 7} ${y - 4}, ${x + 9} ${y + 4}, ${x + 13} ${y}`} fill="none" stroke="#8be9f0" strokeWidth="1.4" strokeLinecap="round" />
  </g>
);

const icons: (() => JSX.Element)[] = [
  () => bell(30, 30, 1),
  () => (
    <>
      {egg(22, 30)}
      {sperm(38, 24)}
      {sperm(38, 38)}
    </>
  ),
  () => (
    <>
      {egg(28, 30)}
      {sperm(37, 26)}
    </>
  ),
  () => (
    <>
      <path d="M14 30 L46 30" stroke="none" />
      {Array.from({ length: 12 }, (_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return <line key={i} x1={30 + Math.cos(a) * 12} y1={30 + Math.sin(a) * 7} x2={30 + Math.cos(a) * 16} y2={30 + Math.sin(a) * 10} stroke="#8be9f0" strokeWidth="1.3" />;
      })}
      <ellipse cx="30" cy="30" rx="12" ry="7" fill="#f6d6ac" />
    </>
  ),
  () => (
    <>
      {ground}
      <ellipse cx="30" cy="40" rx="7" ry="10" fill="#f6d6ac" />
    </>
  ),
  () => (
    <>
      {ground}
      <path d="M25 50 C24 42, 23 34, 22 28 L38 28 C37 34, 36 42, 35 50 Z" fill="#6fcfb8" />
      <path d="M23 28 C18 22, 16 18, 14 12 M28 27 C27 20, 26 16, 26 10 M33 27 C34 20, 35 16, 35 10 M37 28 C42 22, 44 18, 46 12" fill="none" stroke="#6fcfb8" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  () => (
    <>
      {ground}
      <path d="M27 50 L27 42 L33 42 L33 50 Z" fill="#6fcfb8" />
      {[38, 32, 26, 20, 14].map((y, i) => (
        <path key={y} d={`M${20 - i * 0.3} ${y + 4} Q30 ${y - 2} ${40 + i * 0.3} ${y + 4} Q30 ${y + 1} ${20 - i * 0.3} ${y + 4} Z`} fill="#ffd2c6" stroke="#ff8066" strokeWidth="0.8" />
      ))}
    </>
  ),
  () => (
    <>
      {[
        [22, 22],
        [40, 34],
      ].map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          {Array.from({ length: 8 }, (_, i) => {
            const a = (i / 8) * Math.PI * 2;
            return <ellipse key={i} cx={Math.cos(a) * 6} cy={Math.sin(a) * 6} rx="3.6" ry="2" transform={`rotate(${(a * 180) / Math.PI} ${Math.cos(a) * 6} ${Math.sin(a) * 6})`} fill="#ffd2c6" />;
          })}
          <circle r="4" fill="#ffb3a2" />
        </g>
      ))}
    </>
  ),
  () => bell(30, 32, 0.75),
];

function tagOf(i: number) {
  return scyphozoanLifeCycle[i].tag as 'sexuada' | 'assexuada' | undefined;
}

export function LifeCycle() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % N), STEP_MS);
    return () => window.clearTimeout(id);
  }, [playing, active]);

  const stage = scyphozoanLifeCycle[active];
  const pos = (i: number) => {
    const a = -Math.PI / 2 + (i / N) * Math.PI * 2;
    return { x: 50 + 39 * Math.cos(a), y: 50 + 39 * Math.sin(a), a };
  };

  const arcs = scyphozoanLifeCycle.map((_, i) => {
    const a0 = -Math.PI / 2 + (i / N) * Math.PI * 2 + 0.24;
    const a1 = -Math.PI / 2 + ((i + 1) / N) * Math.PI * 2 - 0.24;
    const r = 39;
    return `M${(50 + r * Math.cos(a0)).toFixed(2)} ${(50 + r * Math.sin(a0)).toFixed(2)} A${r} ${r} 0 0 1 ${(50 + r * Math.cos(a1)).toFixed(2)} ${(50 + r * Math.sin(a1)).toFixed(2)}`;
  });

  return (
    <div className="cycle">
      <div className="cycle-ring">
        <svg className="cycle-arrows" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <marker id="cyc-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill="var(--ink-3)" />
            </marker>
          </defs>
          {arcs.map((d, i) => (
            <path key={i} d={d} className={`cycle-arc${i === active ? ' is-on' : ''}`} markerEnd="url(#cyc-head)" />
          ))}
        </svg>

        {scyphozoanLifeCycle.map((s, i) => {
          const p = pos(i);
          const tag = tagOf(i);
          const Icon = icons[i];
          return (
            <button
              key={s.title}
              type="button"
              className={`cycle-node${i === active ? ' is-on' : ''}${tag ? ` tag-${tag}` : ''}`}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              aria-pressed={i === active}
              aria-label={`${i + 1}. ${s.title}`}
              onClick={() => {
                setPlaying(false);
                setActive(i);
              }}
            >
              <svg viewBox="0 0 60 60" aria-hidden="true">
                <Icon />
              </svg>
              <span className="cycle-node-label">{s.label}</span>
            </button>
          );
        })}

        <div className="cycle-center" aria-live="polite">
          <span className="cycle-num">
            {active + 1}/{N}
          </span>
          <h4 className="cycle-title">{stage.title}</h4>
          {stage.tag && <span className={`cycle-tag tag-${stage.tag}`}>Reprodução {stage.tag}</span>}
          <p className="cycle-text">{stage.short}</p>
        </div>
      </div>

      <div className="cycle-side">
        <button type="button" className="btn btn-ghost" onClick={() => setPlaying((p) => !p)}>
          {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
          {playing ? 'Pausar' : 'Reproduzir o ciclo'}
        </button>
        <div className="cycle-legend" aria-hidden="true">
          <span>
            <i className="tag-sexuada" /> sexuada
          </span>
          <span>
            <i className="tag-assexuada" /> assexuada
          </span>
        </div>
        <p className="cycle-caveat">Exemplo típico de água-viva cifozoária, como Aurelia. Não vale para todos os cnidários.</p>
        <MoreToggle>
          <ol className="feeding-text">
            {scyphozoanLifeCycle.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>
          <p>{lifeCycleCaveat}</p>
        </MoreToggle>
      </div>
    </div>
  );
}
