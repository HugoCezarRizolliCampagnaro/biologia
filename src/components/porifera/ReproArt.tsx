import type { JSX } from 'react';
/** Mini-ilustrações das etapas de reprodução das esponjas (viewBox 120 x 90). */

const SPONGE = '#d9965c';
const DARK = '#3b2213';
const CY = '#8be9f0';
const CO = '#ff8066';

const vase = (x: number, y: number, w: number, h: number) =>
  `M${x - w / 2} ${y} C${x - w / 2 - 3} ${y - h * 0.5}, ${x - w / 2 + 1} ${y - h + 6}, ${x - w / 2 + 3} ${y - h} L${x + w / 2 - 3} ${y - h} C${x + w / 2 - 1} ${y - h + 6}, ${x + w / 2 + 3} ${y - h * 0.5}, ${x + w / 2} ${y} Z`;

function Base() {
  return <path d="M10 84 L110 84" stroke="#123247" strokeWidth="6" strokeLinecap="round" />;
}

function Budding() {
  return (
    <>
      <Base />
      <path d={vase(48, 82, 34, 64)} fill={SPONGE} />
      <ellipse cx="48" cy="18" rx="12" ry="3" fill={DARK} />
      <path d="M64 62 C72 60, 80 54, 82 44 L94 44 C94 56, 86 66, 66 72 Z" fill={SPONGE} />
      <ellipse cx="88" cy="44" rx="6" ry="2" fill={DARK} />
      <circle cx="88" cy="40" r="11" fill="none" stroke={CY} strokeWidth="1.5" strokeDasharray="3 3" />
    </>
  );
}

function Fragmentation() {
  return (
    <>
      <Base />
      <path d="M22 82 C18 60, 22 38, 30 26 L46 26 L42 40 L50 50 L44 62 L50 82 Z" fill={SPONGE} />
      <path d="M62 82 L58 64 L66 52 L58 42 L64 30 L78 30 C88 44, 92 64, 88 82 Z" fill={SPONGE} />
      <path d="M50 52 L58 50" stroke={CY} strokeWidth="2" strokeLinecap="round" />
      <path d="M96 40 C104 46, 106 56, 102 66 M98 62 L102 67 L106 62" fill="none" stroke={CY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  );
}

function Gemmule() {
  const ticks = Array.from({ length: 22 }, (_, i) => {
    const a = (i / 22) * Math.PI * 2;
    return `M${60 + Math.cos(a) * 24} ${46 + Math.sin(a) * 24} L${60 + Math.cos(a) * 31} ${46 + Math.sin(a) * 31}`;
  }).join(' ');
  return (
    <>
      <path d={ticks} stroke="#f4fafc" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="46" r="24" fill="#a77a4a" stroke="#f6d6ac" strokeWidth="3" />
      {[
        [52, 40], [64, 38], [56, 52], [68, 50], [60, 45], [48, 50], [70, 42],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill={CY} />
      ))}
      <circle cx="60" cy="22" r="3" fill="#0b3954" />
    </>
  );
}

function Gametes() {
  return (
    <>
      <circle cx="44" cy="46" r="22" fill="#ffd2c6" />
      <circle cx="44" cy="46" r="7" fill={CO} />
      <ellipse cx="88" cy="40" rx="6" ry="4.5" fill={CY} />
      <path d="M94 40 C100 34, 104 46, 110 40" fill="none" stroke={CY} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="84" cy="62" rx="6" ry="4.5" fill={CY} />
      <path d="M90 62 C96 56, 100 68, 106 62" fill="none" stroke={CY} strokeWidth="2" strokeLinecap="round" />
    </>
  );
}

function Fertilization() {
  return (
    <>
      <circle cx="60" cy="46" r="24" fill="#ffd2c6" />
      <circle cx="60" cy="46" r="8" fill={CO} />
      <ellipse cx="88" cy="38" rx="5" ry="4" fill={CY} transform="rotate(-25 88 38)" />
      <path d="M92 35 C98 28, 102 36, 108 28" fill="none" stroke={CY} strokeWidth="2" strokeLinecap="round" />
      <g stroke={CY} strokeWidth="1.5" opacity="0.6" fill="none">
        <path d="M18 30 C24 26, 28 34, 34 30" />
        <path d="M14 60 C20 56, 24 64, 30 60" />
      </g>
    </>
  );
}

function Larva() {
  const cilia = Array.from({ length: 16 }, (_, i) => {
    const a = (i / 16) * Math.PI * 2;
    const x = 34 + Math.cos(a) * 18;
    const y = 40 + Math.sin(a) * 12;
    return `M${x} ${y} L${34 + Math.cos(a) * 24} ${40 + Math.sin(a) * 17}`;
  }).join(' ');
  return (
    <>
      <Base />
      <path d={cilia} stroke={CY} strokeWidth="1.5" strokeLinecap="round" />
      <ellipse cx="34" cy="40" rx="18" ry="12" fill="#f6d6ac" />
      <path d="M62 40 L76 40 M71 35 L76 40 L71 45" fill="none" stroke={CY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d={vase(94, 82, 20, 36)} fill={SPONGE} />
      <ellipse cx="94" cy="46" rx="7" ry="2" fill={DARK} />
    </>
  );
}

const map: Record<string, () => JSX.Element> = {
  Brotamento: Budding,
  'Fragmentação e regeneração': Fragmentation,
  Gêmulas: Gemmule,
  'Produção de gametas': Gametes,
  Fecundação: Fertilization,
  'Larva nadadora': Larva,
};

export function ReproArt({ title }: { title: string }) {
  const Cmp = map[title];
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true" focusable="false">
      {Cmp ? <Cmp /> : null}
    </svg>
  );
}
