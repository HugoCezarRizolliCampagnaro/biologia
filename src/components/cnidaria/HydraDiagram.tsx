import type { ReactNode } from 'react';
import type { Pt } from '../AnatomyExplorer';
import './HydraDiagram.css';

// Hidra em corte longitudinal (viewBox 0 0 400 520).
// As camadas são desenhadas como faixas ao redor da cavidade:
// epiderme (externa), mesogleia (fina) e gastroderme (interna).

const CX = 200;
const EPI = 21;
const MESO = 14;
const GASTRO = 10;
const Y_MOUTH = 128;

const halfPts: [number, number][] = [
  [128, 4],
  [150, 11],
  [190, 17],
  [250, 18],
  [300, 14],
  [345, 6],
  [400, 3.5],
  [418, 0.5],
];

export function cavityHalf(y: number) {
  if (y <= halfPts[0][0]) return halfPts[0][1];
  for (let i = 1; i < halfPts.length; i++) {
    const [y0, c0] = halfPts[i - 1];
    const [y1, c1] = halfPts[i];
    if (y <= y1) {
      const k = (1 - Math.cos(((y - y0) / (y1 - y0)) * Math.PI)) / 2;
      return c0 + (c1 - c0) * k;
    }
  }
  return halfPts[halfPts.length - 1][1];
}

const f = (n: number) => n.toFixed(1);

function sideSamples() {
  const ys: number[] = [];
  for (let y = Y_MOUTH; y <= 418; y += 4) ys.push(y);
  return ys;
}

/** Contorno da cavidade como "U" aberto (para traçar as camadas). */
const U_PATH = (() => {
  const ys = sideSamples();
  const left = ys.map((y) => `${f(CX - cavityHalf(y))} ${f(y)}`);
  const right = [...ys].reverse().map((y) => `${f(CX + cavityHalf(y))} ${f(y)}`);
  return `M${left.join(' L')} L${right.join(' L')}`;
})();

/** Cavidade fechada, com o canal da boca atravessando o topo. */
const CAVITY = (() => {
  const ys = sideSamples();
  const left = ys.map((y) => `${f(CX - cavityHalf(y))} ${f(y)}`);
  const right = [...ys].reverse().map((y) => `${f(CX + cavityHalf(y))} ${f(y)}`);
  return `M${CX - 3} 100 L${left.join(' L')} L${right.join(' L')} L${CX + 3} 100 Z`;
})();

type Cubic = [Pt, Pt, Pt, Pt];

export function bez(c: Cubic, u: number): Pt {
  const m = 1 - u;
  return {
    x: m * m * m * c[0].x + 3 * m * m * u * c[1].x + 3 * m * u * u * c[2].x + u * u * u * c[3].x,
    y: m * m * m * c[0].y + 3 * m * m * u * c[1].y + 3 * m * u * u * c[2].y + u * u * u * c[3].y,
  };
}
function bezNormal(c: Cubic, u: number): Pt {
  const a = bez(c, Math.max(0, u - 0.01));
  const b = bez(c, Math.min(1, u + 0.01));
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const l = Math.hypot(dx, dy) || 1;
  return { x: -dy / l, y: dx / l };
}
const cubicPath = (c: Cubic) => `M${c[0].x} ${c[0].y} C${c[1].x} ${c[1].y}, ${c[2].x} ${c[2].y}, ${c[3].x} ${c[3].y}`;

const P = (x: number, y: number): Pt => ({ x, y });

export const tentFront: Cubic[] = [
  [P(184, 140), P(160, 112), P(130, 92), P(92, 40)],
  [P(216, 140), P(240, 112), P(272, 90), P(312, 44)],
];
export const tentBack: Cubic[] = [
  [P(186, 148), P(150, 152), P(110, 142), P(56, 116)],
  [P(214, 148), P(252, 152), P(292, 142), P(346, 118)],
];

const BUD: Cubic = [P(214, 334), P(236, 318), P(256, 296), P(272, 268)];
const budTentacles = ['M272 268 C268 252, 266 244, 268 232', 'M272 268 C284 262, 292 256, 302 254', 'M272 268 C260 262, 252 258, 242 256'];

export const cnidoPoints: Pt[] = [...tentFront, ...tentBack].flatMap((c) =>
  [0.32, 0.47, 0.62, 0.77, 0.92].map((u, i) => {
    const p = bez(c, u);
    const n = bezNormal(c, u);
    const s = i % 2 ? 5.5 : -5.5;
    return { x: p.x + n.x * s, y: p.y + n.y * s };
  }),
);

export const hydraMarkers: Record<string, Pt> = {
  tentaculos: P(352, 60),
  boca: P(CX, 64),
  cavidade: P(CX, 246),
  epiderme: P(124, 268),
  gastroderme: P(124, 204),
  mesogleia: P(272, 214),
  cnidocitos: P(64, 72),
  disco: P(128, 446),
  broto: P(330, 318),
};

export const hydraTargets: Record<string, Pt> = {
  tentaculos: bez(tentFront[1], 0.85),
  boca: P(CX, 102),
  cavidade: P(CX, 246),
  epiderme: P(CX - cavityHalf(268) - 18, 268),
  gastroderme: P(CX - cavityHalf(204) - 5, 204),
  mesogleia: P(CX + cavityHalf(214) + 12, 214),
  cnidocitos: cnidoPoints[3],
  disco: P(170, 444),
  broto: P(266, 278),
};

export function HydraDiagram({ highlight = [], children, title }: { highlight?: string[]; children?: ReactNode; title: string }) {
  const st = (id: string) => (highlight.length === 0 ? '' : highlight.includes(id) ? ' is-active' : ' is-dim');

  return (
    <svg className="hydra" viewBox="0 0 400 520" role="img" aria-label={title}>
      {/* Substrato: um galho submerso */}
      <path d="M40 470 C120 452, 280 452, 360 470 L360 490 C280 474, 120 474, 40 490 Z" fill="#4a2f1b" />

      {/* Tentáculos de trás */}
      <g className={`part${st('tentaculos')}`}>
        {tentBack.map((c, i) => (
          <path key={i} d={cubicPath(c)} fill="none" stroke="var(--hy-epi-back)" strokeWidth="12" strokeLinecap="round" />
        ))}
      </g>

      {/* Broto */}
      <g className={`part${st('broto')}`}>
        <path d={cubicPath(BUD)} fill="none" stroke="var(--hy-epi)" strokeWidth="30" strokeLinecap="round" />
        {budTentacles.map((d) => (
          <path key={d} d={d} fill="none" stroke="var(--hy-epi)" strokeWidth="6" strokeLinecap="round" />
        ))}
        <path d={cubicPath(BUD)} fill="none" stroke="var(--hy-meso)" strokeWidth="20" strokeLinecap="round" />
        <path d={cubicPath(BUD)} fill="none" stroke="var(--hy-gastro)" strokeWidth="16" strokeLinecap="round" />
      </g>

      {/* Tentáculos da frente (em corte, ocos) */}
      <g className={`part${st('tentaculos')}`}>
        {tentFront.map((c, i) => (
          <g key={i}>
            <path d={cubicPath(c)} fill="none" stroke="var(--hy-epi)" strokeWidth="15" strokeLinecap="round" />
            <path d={cubicPath(c)} fill="none" stroke="var(--hy-meso)" strokeWidth="8.5" strokeLinecap="round" />
            <path d={cubicPath(c)} fill="none" stroke="var(--hy-gastro)" strokeWidth="7" strokeLinecap="round" />
          </g>
        ))}
      </g>

      {/* Disco basal */}
      <g className={`part part-disco${st('disco')}`}>
        <path d="M166 430 C150 432, 140 446, 146 456 L254 456 C260 446, 250 432, 234 430 Z" fill="var(--hy-disc)" />
        {[160, 176, 192, 208, 224, 240].map((x) => (
          <circle key={x} cx={x} cy="451" r="2.4" fill="#5f9c8d" />
        ))}
      </g>

      {/* Camadas do corpo */}
      <g className={`part${st('epiderme')}`}>
        <path d={U_PATH} fill="none" stroke="var(--hy-epi)" strokeWidth={EPI * 2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className={`part${st('mesogleia')}`}>
        <path d={U_PATH} fill="none" stroke="var(--hy-meso)" strokeWidth={MESO * 2} strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className={`part${st('gastroderme')}`}>
        <path d={U_PATH} fill="none" stroke="var(--hy-gastro)" strokeWidth={GASTRO * 2} strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* Cavidade gastrovascular (continua dentro dos tentáculos e do broto) */}
      <g className={`part part-cavidade${st('cavidade')}`}>
        <path d={CAVITY} fill="var(--hy-cavity)" />
        {tentFront.map((c, i) => (
          <path key={i} d={cubicPath([P(c[0].x + (i ? -10 : 10), c[0].y + 4), c[1], c[2], bez(c, 0.97)])} fill="none" stroke="var(--hy-cavity)" strokeWidth="3" strokeLinecap="round" />
        ))}
        <path d={cubicPath([P(204, 338), BUD[1], BUD[2], bez(BUD, 0.9)])} fill="none" stroke="var(--hy-cavity)" strokeWidth="6" strokeLinecap="round" />
        <path d={CAVITY} fill="none" className="cavity-outline" />
      </g>

      {/* Boca */}
      <g className={`part part-boca${st('boca')}`}>
        <ellipse cx={CX} cy="104" rx="9" ry="4" className="mouth-ring" />
      </g>

      {/* Cnidócitos (baterias nos tentáculos) */}
      <g className={`part${st('cnidocitos')}`}>
        {cnidoPoints.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3.6" fill="var(--hy-cnido)" />
            <circle cx={p.x} cy={p.y} r="1.3" fill="#ffe0d6" />
          </g>
        ))}
      </g>

      {children}
    </svg>
  );
}
