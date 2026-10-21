import type { ReactNode } from 'react';
import {
  CX,
  WALL,
  Y_BOT,
  Y_TOP,
  amebocytes,
  atriumPath,
  choanocytes,
  outerPath,
  pores,
  spicules,
  wInner,
} from './spongeGeometry';
import './SpongeDiagram.css';

const OUTER = outerPath();
const ATRIUM = atriumPath();

const f = (n: number) => n.toFixed(1);

function amebaPath(x: number, y: number, seed: number) {
  const r = 6.5;
  const pts: string[] = [];
  const lobes = 5;
  for (let i = 0; i <= 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const rr = r + Math.sin(a * lobes + seed) * 2.4 + Math.cos(a * 2 + seed) * 1.2;
    pts.push(`${f(x + Math.cos(a) * rr * 1.25)} ${f(y + Math.sin(a) * rr * 0.85)}`);
  }
  return `M${pts.join(' L')} Z`;
}

function triradiate(x: number, y: number, rot: number) {
  const L = 6.5;
  return [0, 120, 240]
    .map((a) => {
      const r = ((a + rot) * Math.PI) / 180;
      return `M${f(x)} ${f(y)} L${f(x + Math.cos(r) * L)} ${f(y + Math.sin(r) * L)}`;
    })
    .join(' ');
}

const SPICULES = spicules.map((s) => triradiate(s.p.x, s.p.y, s.rot)).join(' ');

/**
 * Esponja de organização simples (asconoide) em corte.
 * `highlight` acende algumas estruturas e esmaece as outras.
 */
export function SpongeDiagram({
  highlight = [],
  children,
  title,
  className = '',
}: {
  highlight?: string[];
  children?: ReactNode;
  title: string;
  className?: string;
}) {
  const state = (id: string) =>
    highlight.length === 0 ? '' : highlight.includes(id) ? ' is-active' : ' is-dim';

  return (
    <svg className={`sponge ${className}`} viewBox="0 0 400 480" role="img" aria-label={title}>
      <defs>
        <linearGradient id="sp-atrium" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#13506f" />
          <stop offset="1" stopColor="#0a3149" />
        </linearGradient>
        <linearGradient id="sp-gel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d49a63" />
          <stop offset="0.5" stopColor="#c48650" />
          <stop offset="1" stopColor="#d49a63" />
        </linearGradient>
      </defs>

      {/* Rocha (substrato) */}
      <path d={`M60 ${Y_BOT + 6} C110 ${Y_BOT - 10}, 290 ${Y_BOT - 12}, 340 ${Y_BOT + 6} L350 470 L50 470 Z`} fill="var(--rock)" />

      {/* Mesoílo (camada gelatinosa) */}
      <path d={OUTER} fill="url(#sp-gel)" />

      {/* Espículas */}
      <g className={`part part-espiculas${state('espiculas')}`}>
        <path d={SPICULES} stroke="var(--sp-spicule)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.9" />
      </g>

      {/* Átrio */}
      <g className={`part part-atrio${state('atrio')}`}>
        <path d={ATRIUM} fill="url(#sp-atrium)" />
        <path d={ATRIUM} fill="none" className="part-outline" />
      </g>

      {/* Pinacócitos: revestimento externo */}
      <g className={`part part-pinacocitos${state('pinacocitos')}`}>
        <path d={OUTER} fill="none" stroke="var(--sp-skin)" strokeWidth="4" strokeDasharray="15 3" strokeLinejoin="round" />
      </g>

      {/* Canais dos poros (sempre visíveis) */}
      {pores.map((p, i) => {
        const x0 = Math.min(p.xOuter, p.xInner) - 3;
        const w = Math.abs(p.xOuter - p.xInner) + 6;
        return <rect key={i} x={x0} y={p.y - 4.5} width={w} height="9" fill="#11496a" />;
      })}

      {/* Óstios: as aberturas externas */}
      <g className={`part part-ostios${state('ostios')}`}>
        {pores.map((p, i) => {
          const x0 = Math.min(p.xOuter, p.xInner) - 3;
          const w = Math.abs(p.xOuter - p.xInner) + 6;
          return <rect key={`h${i}`} className="pore-glow" x={x0} y={p.y - 4.5} width={w} height="9" />;
        })}
        {pores.map((p, i) => (
          <ellipse key={`o${i}`} className="ostium" cx={p.xOuter} cy={p.y} rx="2.6" ry="5" />
        ))}
      </g>

      {/* Porócitos: células em tubo ao redor de cada poro */}
      <g className={`part part-porocitos${state('porocitos')}`}>
        {pores.map((p, i) => {
          const x0 = Math.min(p.xOuter, p.xInner) + 1;
          const w = Math.abs(p.xOuter - p.xInner) - 2;
          return <rect key={i} x={x0} y={p.y - 7.5} width={w} height="15" rx="7" fill="none" stroke="var(--sp-poro)" strokeWidth="3" />;
        })}
      </g>

      {/* Amebócitos */}
      <g className={`part part-amebocitos${state('amebocitos')}`}>
        {amebocytes.map((a, i) => (
          <g key={i}>
            <path d={amebaPath(a.x, a.y, i * 1.7)} fill="var(--sp-ameba)" />
            <circle cx={a.x + 1} cy={a.y} r="2.2" fill="#0b3954" />
          </g>
        ))}
      </g>

      {/* Coanócitos */}
      <g className={`part part-coanocitos${state('coanocitos')}`}>
        {choanocytes.map((c, i) => {
          const { p, n, tg } = c;
          const body = { x: p.x - n.x * 1, y: p.y - n.y * 1 };
          const cb = { x: p.x + n.x * 4, y: p.y + n.y * 4 };
          const ce = { x: p.x + n.x * 10, y: p.y + n.y * 10 };
          const fl = [4, 9, 14, 19].map((d, k) => ({
            x: p.x + n.x * (5 + d) + tg.x * (k % 2 ? 2.5 : -2.5),
            y: p.y + n.y * (5 + d) + tg.y * (k % 2 ? 2.5 : -2.5),
          }));
          const angle = (Math.atan2(n.y, n.x) * 180) / Math.PI;
          return (
            <g key={i}>
              <ellipse cx={body.x} cy={body.y} rx="5" ry="4.3" transform={`rotate(${angle} ${body.x} ${body.y})`} fill="var(--sp-choano)" />
              <path
                d={`M${f(cb.x + tg.x * 2)} ${f(cb.y + tg.y * 2)} L${f(ce.x + tg.x * 3.6)} ${f(ce.y + tg.y * 3.6)} M${f(cb.x - tg.x * 2)} ${f(cb.y - tg.y * 2)} L${f(ce.x - tg.x * 3.6)} ${f(ce.y - tg.y * 3.6)}`}
                stroke="#ffc7b8"
                strokeWidth="1.3"
                fill="none"
              />
              <path
                className="flagellum"
                d={`M${f(cb.x)} ${f(cb.y)} Q${f(fl[0].x)} ${f(fl[0].y)} ${f((fl[0].x + fl[1].x) / 2)} ${f((fl[0].y + fl[1].y) / 2)} T${f((fl[2].x + fl[3].x) / 2)} ${f((fl[2].y + fl[3].y) / 2)}`}
                stroke="#ffe0d6"
                strokeWidth="1.1"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          );
        })}
      </g>

      {/* Ósculo */}
      <g className={`part part-osculo${state('osculo')}`}>
        <ellipse cx={CX} cy={Y_TOP - 1} rx={wInner(0)} ry="5" fill="none" className="osculum-ring" />
      </g>

      {/* Borda superior da parede (lábio do ósculo) */}
      <path
        d={`M${f(CX - wInner(0) - WALL)} ${Y_TOP} L${f(CX - wInner(0))} ${Y_TOP} M${f(CX + wInner(0))} ${Y_TOP} L${f(CX + wInner(0) + WALL)} ${Y_TOP}`}
        stroke="var(--sp-skin)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {children}
    </svg>
  );
}
