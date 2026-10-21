import type { JSX } from 'react';
/** Ilustrações originais dos quatro grandes grupos de cnidários (viewBox 200 x 140). */

function Hydrozoa() {
  const tent = [70, 82, 94, 106, 118, 130];
  return (
    <>
      <defs>
        <linearGradient id="g-float" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b9c9ff" />
          <stop offset="1" stopColor="#9b6fe0" />
        </linearGradient>
      </defs>
      <path d="M0 52 Q50 44 100 52 T200 52" stroke="#8be9f0" strokeWidth="1.5" fill="none" opacity="0.5" />
      <g fill="none" strokeLinecap="round">
        {tent.map((x, i) => (
          <path key={x} d={`M${x} 66 C${x + 6} 88, ${x - 6} 108, ${x + 2} ${126 + (i % 3) * 4}`} stroke="#6fa8ff" strokeWidth="1.6" />
        ))}
        {[78, 98, 118].map((x) => (
          <path key={x} d={`M${x} 64 C${x - 4} 72, ${x + 4} 78, ${x} 84`} stroke="#ff9fd0" strokeWidth="5" />
        ))}
      </g>
      <path d="M52 60 C48 40, 86 26, 136 36 C160 41, 164 58, 146 66 C116 74, 70 74, 52 60 Z" fill="url(#g-float)" opacity="0.92" />
      <path d="M66 46 C80 30, 104 26, 130 34" fill="none" stroke="#ff9fd0" strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function Scyphozoa() {
  return (
    <>
      <g fill="none" strokeLinecap="round">
        {[60, 72, 84, 116, 128, 140].map((x, i) => (
          <path key={x} d={`M${x} 70 C${x + 3} 82, ${x - 3} 90, ${x + 1} ${100 + (i % 2) * 6}`} stroke="#8be9f0" strokeWidth="1.2" opacity="0.7" />
        ))}
        {[88, 100, 112].map((x) => (
          <path key={x} d={`M${x} 70 C${x - 10} 92, ${x + 10} 108, ${x - 2} 128`} stroke="#ffd2c6" strokeWidth="5" opacity="0.7" />
        ))}
      </g>
      <path d="M40 72 C40 26, 160 26, 160 72 C130 64, 70 64, 40 72 Z" fill="rgba(255, 210, 198, 0.55)" stroke="#ffd2c6" strokeWidth="1.5" />
      {[
        [80, 50],
        [100, 44],
        [120, 50],
        [100, 60],
      ].map(([cx, cy]) => (
        <path key={`${cx}-${cy}`} d={`M${cx - 9} ${cy + 3} A9 7 0 1 1 ${cx + 9} ${cy + 3}`} fill="none" stroke="#ff8066" strokeWidth="3.5" strokeLinecap="round" />
      ))}
    </>
  );
}

function Cubozoa() {
  return (
    <>
      <g fill="none" stroke="#8be9f0" strokeWidth="1.4" strokeLinecap="round" opacity="0.8">
        {[62, 66, 70].map((x, i) => (
          <path key={`l${x}`} d={`M${x} 96 C${x - 4} 110, ${x + 4} 120, ${x - 2} ${136 - i * 3}`} />
        ))}
        {[130, 134, 138].map((x, i) => (
          <path key={`r${x}`} d={`M${x} 96 C${x + 4} 110, ${x - 4} 120, ${x + 2} ${136 - i * 3}`} />
        ))}
        {[92, 100, 108].map((x, i) => (
          <path key={`m${x}`} d={`M${x} 98 C${x + 3} 110, ${x - 3} 118, ${x} ${130 - i * 2}`} />
        ))}
      </g>
      <path d="M66 96 L60 44 C60 26, 140 26, 140 44 L134 96 C112 90, 88 90, 66 96 Z" fill="rgba(139, 233, 240, 0.28)" stroke="#8be9f0" strokeWidth="1.8" />
      <path d="M100 32 L100 92" stroke="#8be9f0" strokeWidth="1" opacity="0.5" />
      {[
        [68, 78],
        [132, 78],
        [100, 84],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill="#061b2b" stroke="#f4fafc" strokeWidth="1" />
      ))}
    </>
  );
}

function Anthozoa() {
  const polyp = (x: number, y: number, c: string) => (
    <g key={`${x}-${y}`}>
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <line key={i} x1={x} y1={y} x2={x + Math.cos(a) * 8} y2={y + Math.sin(a) * 8} stroke={c} strokeWidth="2.2" strokeLinecap="round" />;
      })}
      <circle cx={x} cy={y} r="3" fill="#fff3e8" />
    </g>
  );
  return (
    <>
      <path d="M10 130 C60 122, 140 122, 190 130 L190 140 L10 140 Z" fill="#123247" />
      <g fill="none" stroke="#e38a5a" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M70 128 L70 96 L52 70 M70 104 L88 72 M70 96 L72 56" />
      </g>
      {polyp(52, 66, '#ffd2c6')}
      {polyp(88, 68, '#ffd2c6')}
      {polyp(72, 52, '#ffd2c6')}
      <g fill="none" stroke="#8be9f0" strokeWidth="4" strokeLinecap="round">
        {[-4, -2, 0, 2, 4].map((i) => (
          <path key={i} d={`M${144 + i * 2} 98 Q${144 + i * 6} 84 ${144 + i * 9} ${74 + Math.abs(i) * 3}`} />
        ))}
      </g>
      <path d="M134 128 C136 116, 132 108, 136 98 L152 98 C156 108, 152 116, 154 128 Z" fill="#20c5c7" />
    </>
  );
}

const arts: Record<string, () => JSX.Element> = { hydrozoa: Hydrozoa, scyphozoa: Scyphozoa, cubozoa: Cubozoa, anthozoa: Anthozoa };

export function GroupArt({ id }: { id: string }) {
  const Cmp = arts[id];
  return (
    <svg viewBox="0 0 200 140" aria-hidden="true" focusable="false">
      {Cmp ? <Cmp /> : null}
    </svg>
  );
}
