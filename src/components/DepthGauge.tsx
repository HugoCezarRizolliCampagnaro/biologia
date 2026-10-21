import { navItems, MAX_DEPTH } from '../data/nav';
import { useScrollProgress } from '../hooks/useScroll';
import { useSectionDepths } from '../hooks/useSectionDepths';
import './DepthGauge.css';

const ids = navItems.map((n) => n.id);

/** Medidor de profundidade: mostra o progresso da leitura como um mergulho. */
export function DepthGauge() {
  const progress = useScrollProgress();
  const depths = useSectionDepths(ids);
  const depth = Math.round(progress * MAX_DEPTH);

  return (
    <aside className="gauge" aria-label="Indicador de progresso">
      <span className="gauge-title">Profundidade</span>
      <div className="gauge-track">
        {navItems.map((item) => {
          const d = depths[item.id] ?? item.depth;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="gauge-tick"
              style={{ top: `${(d / MAX_DEPTH) * 100}%` }}
            >
              <span className="gauge-tick-label">{item.label}</span>
            </a>
          );
        })}
        <div className="gauge-marker" style={{ top: `${progress * 100}%` }} aria-hidden="true">
          <span>−{depth} m</span>
        </div>
      </div>
    </aside>
  );
}
