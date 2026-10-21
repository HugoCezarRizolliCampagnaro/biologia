// Geometria da esponja asconoide desenhada em corte (viewBox 0 0 400 480).

export const CX = 200;
export const Y_TOP = 96;
export const Y_BOT = 432;
export const H = Y_BOT - Y_TOP;
export const WALL = 30;
const T_IN_END = 0.86;

export const wOuter = (t: number) => 52 + 54 * Math.sin(Math.PI * Math.pow(Math.min(1, Math.max(0, t)), 0.85));
export const wInner = (t: number) => wOuter(t) - WALL;
export const yAt = (t: number) => Y_TOP + t * H;

const f = (n: number) => n.toFixed(1);

export function outerPath() {
  const N = 48;
  const left: string[] = [];
  const right: string[] = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N;
    left.push(`${f(CX - wOuter(t))} ${f(yAt(t))}`);
    right.unshift(`${f(CX + wOuter(t))} ${f(yAt(t))}`);
  }
  return `M${left.join(' L')} L${right.join(' L')} Z`;
}

export function atriumPath() {
  const N = 40;
  const left: string[] = [];
  const right: string[] = [];
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * T_IN_END;
    left.push(`${f(CX - wInner(t))} ${f(yAt(t))}`);
    right.unshift(`${f(CX + wInner(t))} ${f(yAt(t))}`);
  }
  const yb = yAt(T_IN_END);
  const ctrl = yb + wInner(T_IN_END) * 0.9;
  const top = Y_TOP - 2;
  return `M${f(CX - wInner(0))} ${top} L${left.join(' L')} Q${CX} ${f(ctrl)} ${f(CX + wInner(T_IN_END))} ${f(yb)} L${right.join(' L')} L${f(CX + wInner(0))} ${top} Z`;
}

/** Inclinação da parede interna (dx/dy) para um lado (-1 esquerda, 1 direita). */
function innerSlope(t: number, side: number) {
  const d = 0.002;
  return (side * (wInner(t + d) - wInner(t - d))) / (2 * d * H);
}

export interface Pt {
  x: number;
  y: number;
}

export const PORE_T = [0.24, 0.44, 0.64, 0.8];

export interface Pore {
  side: -1 | 1;
  t: number;
  y: number;
  xOuter: number;
  xInner: number;
}

export const pores: Pore[] = PORE_T.flatMap((t) =>
  ([-1, 1] as const).map((side) => ({
    side,
    t,
    y: yAt(t),
    xOuter: CX + side * wOuter(t),
    xInner: CX + side * wInner(t),
  })),
);

export interface Choanocyte {
  p: Pt;
  n: Pt; // normal apontando para o átrio
  tg: Pt; // tangente
}

export const choanocytes: Choanocyte[] = (() => {
  const list: Choanocyte[] = [];
  for (const side of [-1, 1] as const) {
    for (let y = Y_TOP + 16; y < yAt(T_IN_END) - 4; y += 12.5) {
      if (pores.some((p) => Math.abs(p.y - y) < 9)) continue;
      const t = (y - Y_TOP) / H;
      const x = CX + side * wInner(t);
      const s = innerSlope(t, side);
      const nx = -side;
      const ny = side * s;
      const len = Math.hypot(nx, ny);
      const n = { x: nx / len, y: ny / len };
      list.push({ p: { x, y }, n, tg: { x: -n.y, y: n.x } });
    }
  }
  return list;
})();

export const amebocytes: Pt[] = [
  { t: 0.34, side: -1 },
  { t: 0.72, side: -1 },
  { t: 0.18, side: 1 },
  { t: 0.54, side: 1 },
  { t: 0.92, side: 1 },
].map(({ t, side }) => ({ x: CX + side * (wInner(t) + WALL / 2), y: yAt(t) }));

export const spicules: { p: Pt; rot: number }[] = (() => {
  const list: { p: Pt; rot: number }[] = [];
  let k = 0;
  for (let t = 0.06; t < 0.97; t += 0.055) {
    for (const side of [-1, 1] as const) {
      k++;
      const near = (q: Pt) => Math.hypot(q.x - (CX + side * (wInner(t) + WALL / 2)), q.y - yAt(t)) < 12;
      if (pores.some((p) => p.side === side && Math.abs(p.y - yAt(t)) < 10)) continue;
      if (amebocytes.some(near)) continue;
      const off = ((k * 37) % 9) - 4;
      list.push({ p: { x: CX + side * (wInner(t) + WALL / 2 + off), y: yAt(t) + ((k * 13) % 7) - 3 }, rot: (k * 47) % 120 });
    }
  }
  return list;
})();

/** Caminhos das partículas de água: de fora, pelo poro, pelo átrio e para fora pelo ósculo. */
export const waterPaths: Pt[][] = pores.map((p, i) => [
  { x: p.xOuter + p.side * 46, y: p.y + ((i * 7) % 11) - 5 },
  { x: p.xOuter + p.side * 2, y: p.y },
  { x: p.xInner - p.side * 3, y: p.y },
  { x: CX + p.side * wInner(p.t) * 0.35, y: p.y - 18 },
  { x: CX + p.side * 4, y: Y_TOP + 36 },
  { x: CX, y: Y_TOP - 12 },
  { x: CX + p.side * 14, y: Y_TOP - 84 },
]);

/** Partículas de alimento: entram pelo poro e são capturadas por um coanócito. */
export const foodPaths: Pt[][] = pores
  .filter((_, i) => i % 2 === 0 || i === 5)
  .map((p) => [
    { x: p.xOuter + p.side * 46, y: p.y - 6 },
    { x: p.xOuter + p.side * 2, y: p.y },
    { x: p.xInner - p.side * 6, y: p.y },
    { x: CX + p.side * (wInner(p.t + 0.035) - 7), y: p.y + 12 },
  ]);

export function pathLength(pts: Pt[]) {
  let len = 0;
  for (let i = 1; i < pts.length; i++) len += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
  return len;
}

export function pointAt(pts: Pt[], u: number): Pt {
  const total = pathLength(pts);
  let target = u * total;
  for (let i = 1; i < pts.length; i++) {
    const seg = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
    if (target <= seg) {
      const k = seg === 0 ? 0 : target / seg;
      return { x: pts[i - 1].x + (pts[i].x - pts[i - 1].x) * k, y: pts[i - 1].y + (pts[i].y - pts[i - 1].y) * k };
    }
    target -= seg;
  }
  return pts[pts.length - 1];
}

export const toPath = (pts: Pt[]) => `M${pts.map((p) => `${f(p.x)} ${f(p.y)}`).join(' L')}`;

/** Onde ficam os marcadores numerados de cada estrutura. */
export const markers: Record<string, Pt> = {
  ostios: { x: CX - wOuter(0.44) - 22, y: yAt(0.44) },
  porocitos: { x: CX + wOuter(0.64) + 22, y: yAt(0.64) },
  pinacocitos: { x: CX + wOuter(0.32) + 20, y: yAt(0.32) },
  coanocitos: { x: CX - wInner(0.56) + 26, y: yAt(0.56) },
  atrio: { x: CX + 6, y: yAt(0.4) },
  osculo: { x: CX, y: Y_TOP - 30 },
  amebocitos: { x: CX - wOuter(0.72) - 20, y: yAt(0.72) },
  espiculas: { x: CX + wOuter(0.88) + 22, y: yAt(0.88) },
};

/** Ponto de cada estrutura ao qual o marcador aponta. */
export const markerTargets: Record<string, Pt> = {
  ostios: { x: CX - wOuter(0.44), y: yAt(0.44) },
  porocitos: { x: CX + wOuter(0.64) - 6, y: yAt(0.64) },
  pinacocitos: { x: CX + wOuter(0.32), y: yAt(0.32) },
  coanocitos: { x: CX - wInner(0.56) + 6, y: yAt(0.56) },
  atrio: { x: CX + 6, y: yAt(0.4) },
  osculo: { x: CX, y: Y_TOP - 2 },
  amebocitos: amebocytes[1],
  espiculas: { x: CX + wInner(0.88) + WALL / 2, y: yAt(0.88) },
};
