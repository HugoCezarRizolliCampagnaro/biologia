import { useEffect, useRef, useState } from 'react';
import { medusaShort, medusaTraits, polypMedusaNotes, polypShort, polypTraits } from '../../data/cnidaria';
import { MoreToggle } from '../MoreToggle';
import './PolypMedusa.css';

// As duas formas são desenhadas com a boca para cima (a medusa "de cabeça
// para baixo"). O controle mistura os pontos e gira o conjunto 180°.

type P = [number, number];
const NA = 40;
const NB = 24;
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpP = (a: P, b: P, t: number): P => [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
const bump = (v: number, w: number) => Math.exp(-(((v - 0.5) / w) ** 2));

function uShape(top: number, bottom: number, wTop: number, wBot: number) {
  return (u: number): P => {
    const side = bottom - top;
    const base = 2 * wBot;
    const total = 2 * side + base;
    const d = u * total;
    if (d <= side) {
      const k = d / side;
      return [-lerp(wTop, wBot, k), lerp(top, bottom, k)];
    }
    if (d <= side + base) return [-wBot + (d - side), bottom];
    const k = (d - side - base) / side;
    return [lerp(wBot, wTop, k), lerp(bottom, top, k)];
  };
}

const shapes = {
  outer: {
    polypA: uShape(-52, 70, 30, 28),
    polypB: (v: number): P => [30 - 60 * v, -52 - 14 * Math.sin(Math.PI * v)],
    medA: (u: number): P => [-78 * Math.cos(Math.PI * u), -8 + 56 * Math.sin(Math.PI * u)],
    medB: (v: number): P => [78 - 156 * v, -8 + 8 * Math.sin(Math.PI * v) - 24 * bump(v, 0.09)],
  },
  meso: {
    polypA: uShape(-48, 65, 25, 23),
    polypB: (v: number): P => [25 - 50 * v, -48 - 12 * Math.sin(Math.PI * v)],
    medA: (u: number): P => [-73 * Math.cos(Math.PI * u), -6 + 50 * Math.sin(Math.PI * u)],
    medB: (v: number): P => [73 - 146 * v, -6 + 7 * Math.sin(Math.PI * v) - 22 * bump(v, 0.08)],
  },
  inner: {
    polypA: uShape(-44, 60, 20, 18),
    polypB: (v: number): P => [20 - 40 * v, -44 - 10 * Math.sin(Math.PI * v)],
    medA: (u: number): P => [-68 * Math.cos(Math.PI * u), -3 + 12 * Math.sin(Math.PI * u)],
    medB: (v: number): P => [68 - 136 * v, -4 + 4 * Math.sin(Math.PI * v) - 19 * bump(v, 0.06)],
  },
};

function contour(s: (typeof shapes)['outer'], t: number) {
  const pts: P[] = [];
  for (let i = 0; i <= NA; i++) pts.push(lerpP(s.polypA(i / NA), s.medA(i / NA), t));
  for (let i = 1; i < NB; i++) pts.push(lerpP(s.polypB(i / NB), s.medB(i / NB), t));
  return `M${pts.map((p) => `${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' L')} Z`;
}

const polypTentV = [0.06, 0.22, 0.38, 0.62, 0.78, 0.94];
const medTentV = [0.0, 0.1, 0.2, 0.8, 0.9, 1.0];

function tentacles(t: number) {
  return polypTentV.map((pv, i) => {
    const sp = shapes.outer.polypB(pv);
    const sm = shapes.outer.medB(medTentV[i]);
    const s = lerpP(sp, sm, t);
    const ep: P = [sp[0] * 2.1, sp[1] - 66 + Math.abs(sp[0]) * 0.4];
    const em: P = [sm[0] * 1.05 + (i % 2 ? 6 : -6), sm[1] - 92];
    const e = lerpP(ep, em, t);
    const cp: P = [sp[0] * 1.2, sp[1] - 44];
    const cm: P = [sm[0] * 1.15 + (i % 2 ? -10 : 10), sm[1] - 46];
    const c = lerpP(cp, cm, t);
    return `M${s[0].toFixed(1)} ${s[1].toFixed(1)} Q${c[0].toFixed(1)} ${c[1].toFixed(1)} ${e[0].toFixed(1)} ${e[1].toFixed(1)}`;
  });
}

export function PolypMedusa() {
  const [t, setT] = useState(0);
  const anim = useRef(0);

  const animateTo = (target: number) => {
    cancelAnimationFrame(anim.current);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setT(target);
      return;
    }
    const start = performance.now();
    const from = t;
    const dur = 1100;
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / dur);
      const e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
      setT(from + (target - from) * e);
      if (k < 1) anim.current = requestAnimationFrame(tick);
    };
    anim.current = requestAnimationFrame(tick);
  };
  useEffect(() => () => cancelAnimationFrame(anim.current), []);

  const isMedusa = t >= 0.5;
  const mouth = lerpP(shapes.outer.polypB(0.5), shapes.outer.medB(0.5), t);

  return (
    <div className="pm">
      <div className="pm-stage">
        <ul className={`pm-list${!isMedusa ? ' is-on' : ''}`} aria-label="Pólipo">
          <li className="pm-list-title">Pólipo</li>
          {polypShort.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <svg className="pm-svg" viewBox="0 0 400 340" role="img" aria-label={isMedusa ? 'Forma de medusa' : 'Forma de pólipo'}>
          <path d="M100 278 C160 266, 240 266, 300 278 L310 296 L90 296 Z" fill="var(--rock)" opacity={1 - t} />
          <g transform={`translate(200 ${lerp(196, 150, t).toFixed(1)}) rotate(${(180 * t).toFixed(1)})`}>
            <g fill="none" stroke="var(--hy-epi)" strokeWidth="4.5" strokeLinecap="round">
              {tentacles(t).map((d, i) => (
                <path key={i} d={d} />
              ))}
            </g>
            <ellipse cx="0" cy="72" rx="34" ry="7" fill="var(--hy-disc)" opacity={Math.max(0, 1 - t * 2.5)} />
            <path d={contour(shapes.outer, t)} fill="var(--hy-epi)" />
            <path d={contour(shapes.meso, t)} fill="var(--hy-meso)" />
            <path d={contour(shapes.inner, t)} fill="var(--hy-cavity)" stroke="var(--hy-gastro)" strokeWidth="4" />
            <ellipse cx={mouth[0]} cy={mouth[1] + 2} rx="5" ry="3" fill="#061b2b" />
          </g>
          <g className="pm-legend" transform="translate(16 22)">
            <rect width="10" height="10" rx="2" fill="var(--hy-meso)" />
            <text x="16" y="9">mesogleia</text>
          </g>
        </svg>

        <ul className={`pm-list pm-list-right${isMedusa ? ' is-on' : ''}`} aria-label="Medusa">
          <li className="pm-list-title">Medusa</li>
          {medusaShort.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <div className="pm-controls">
        <button type="button" className="chip" aria-pressed={!isMedusa} onClick={() => animateTo(0)}>
          Pólipo
        </button>
        <label className="pm-slider-wrap" htmlFor="pm-slider">
          <span className="sr-only">Transformar pólipo em medusa</span>
          <input
            id="pm-slider"
            type="range"
            min={0}
            max={100}
            value={Math.round(t * 100)}
            onChange={(e) => {
              cancelAnimationFrame(anim.current);
              setT(Number(e.target.value) / 100);
            }}
          />
        </label>
        <button type="button" className="chip" aria-pressed={isMedusa} onClick={() => animateTo(1)}>
          Medusa
        </button>
      </div>
      <p className="pm-hint">Arraste para virar o pólipo de cabeça para baixo.</p>

      <p className="pm-note">Nem todo cnidário tem as duas formas.</p>
      <MoreToggle>
        <p>{polypMedusaNotes.sameplan}</p>
        <p>
          <strong>Pólipo:</strong> {polypTraits.join(' ')} {polypMedusaNotes.examples.polyp}
        </p>
        <p>
          <strong>Medusa:</strong> {medusaTraits.join(' ')} {polypMedusaNotes.examples.medusa}
        </p>
        <p>{polypMedusaNotes.caveat}</p>
      </MoreToggle>
    </div>
  );
}
