import type { JSX } from 'react';

/** Ilustrações originais dos exemplos de esponjas (viewBox 160 x 120). */

function Floor({ color = '#123247' }: { color?: string }) {
  return <path d="M8 112 C40 104, 120 104, 152 112 L152 120 L8 120 Z" fill={color} />;
}

function Bath() {
  const pores = [
    [52, 58], [70, 48], [92, 50], [112, 62], [60, 78], [82, 70], [104, 82], [46, 94], [72, 96], [96, 98], [120, 90], [86, 86], [66, 62], [124, 76],
  ];
  return (
    <>
      <Floor />
      <path d="M30 108 C18 80, 36 38, 78 36 C122 34, 146 70, 132 108 Z" fill="url(#ex-bath)" />
      {pores.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 2.6} fill="#5a3517" />
      ))}
    </>
  );
}

function Basket() {
  const lines: string[] = [];
  for (let i = -6; i <= 10; i++) {
    lines.push(`M${52 + i * 8} 14 L${52 + i * 8 + 40} 106`);
    lines.push(`M${108 - i * 8} 14 L${108 - i * 8 - 40} 106`);
  }
  for (let y = 22; y < 104; y += 12) lines.push(`M50 ${y} L110 ${y}`);
  return (
    <>
      <Floor />
      <defs>
        <clipPath id="ex-basket-clip">
          <path d="M66 106 C60 80, 58 40, 64 14 L96 14 C102 40, 100 80, 94 106 Z" />
        </clipPath>
      </defs>
      <path d="M66 106 C60 80, 58 40, 64 14 L96 14 C102 40, 100 80, 94 106 Z" fill="rgba(244,250,252,0.12)" />
      <g clipPath="url(#ex-basket-clip)">
        <path d={lines.join(' ')} stroke="#f4fafc" strokeWidth="1.2" opacity="0.85" />
      </g>
      <path d="M66 106 C60 80, 58 40, 64 14 L96 14 C102 40, 100 80, 94 106 Z" fill="none" stroke="#f4fafc" strokeWidth="2" />
      <path d="M64 14 L96 14" stroke="#f4fafc" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 106 L64 116 M76 106 L74 116 M84 106 L86 116 M90 106 L96 116" stroke="#f4fafc" strokeWidth="1.4" opacity="0.7" />
    </>
  );
}

function Leucosolenia() {
  const tubes = [
    'M80 110 C78 90, 70 70, 56 46',
    'M80 110 C82 86, 84 60, 82 30',
    'M80 110 C88 92, 100 74, 112 52',
    'M70 76 C62 70, 48 66, 38 64',
    'M88 84 C98 80, 112 80, 124 84',
    'M82 70 C90 62, 96 50, 98 40',
  ];
  const tips = [[56, 46], [82, 30], [112, 52], [38, 64], [124, 84], [98, 40]];
  return (
    <>
      <Floor />
      <g fill="none" stroke="#efe6d8" strokeWidth="8" strokeLinecap="round">
        {tubes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {tips.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="#5a4a36" />
      ))}
    </>
  );
}

function Cliona() {
  const ribs = Array.from({ length: 9 }, (_, i) => {
    const a = Math.PI * (0.15 + (i / 8) * 0.7);
    return `M80 104 L${80 - Math.cos(a) * 62} ${104 - Math.sin(a) * 62}`;
  }).join(' ');
  const pap = [
    [56, 70], [72, 60], [92, 62], [106, 76], [66, 84], [84, 78], [98, 90], [50, 88], [78, 94], [114, 92],
  ];
  return (
    <>
      <Floor />
      <path d="M80 106 L24 84 C26 52, 52 38, 80 38 C108 38, 134 52, 136 84 Z" fill="#d8c8ae" />
      <path d={ribs} stroke="#b3a184" strokeWidth="2" />
      {pap.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={i % 2 ? 4.5 : 6} fill="#f2c94c" />
          <circle cx={cx} cy={cy} r="1.6" fill="#8a6a10" />
        </g>
      ))}
    </>
  );
}

function Spongilla() {
  return (
    <>
      <path d="M8 104 C50 96, 110 100, 152 94 L152 110 C110 114, 50 112, 8 116 Z" fill="#5b3b22" />
      <g fill="none" stroke="#69b85a" strokeWidth="9" strokeLinecap="round">
        <path d="M44 100 C42 80, 36 64, 30 48" />
        <path d="M44 92 C52 80, 60 66, 62 50" />
        <path d="M86 98 C86 76, 90 56, 96 34" />
        <path d="M90 74 C100 66, 110 60, 120 56" />
        <path d="M120 96 C122 82, 128 70, 134 62" />
      </g>
      <g fill="#b9e3a6">
        {[[31, 60], [58, 62], [93, 50], [110, 60], [128, 72], [40, 80]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" />
        ))}
      </g>
    </>
  );
}

function Cauxi() {
  const bumps = [
    [30, 66], [44, 60], [58, 56], [72, 54], [86, 54], [100, 56], [114, 60], [128, 66],
  ];
  return (
    <>
      <path d="M8 76 C50 58, 110 58, 152 76" fill="none" stroke="#4a2f1b" strokeWidth="14" strokeLinecap="round" />
      {bumps.map(([cx, cy], i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy - 2} rx="9" ry="7" fill="#c9b78e" />
          <path d={`M${cx - 4} ${cy - 8} L${cx - 6} ${cy - 13} M${cx + 2} ${cy - 9} L${cx + 3} ${cy - 15} M${cx + 6} ${cy - 6} L${cx + 10} ${cy - 10}`} stroke="#f4fafc" strokeWidth="1" opacity="0.8" />
        </g>
      ))}
      <g fill="none" stroke="#8be9f0" strokeWidth="1.2" opacity="0.4">
        <path d="M10 100 Q40 94 70 100 T130 100" />
        <path d="M24 110 Q54 104 84 110 T144 110" />
      </g>
    </>
  );
}

const arts: Record<string, () => JSX.Element> = {
  'Esponja-de-banho': Bath,
  'Cesto-de-vênus': Basket,
  Leucosolenia,
  'Esponja perfurante': Cliona,
  'Esponja de lago': Spongilla,
  Cauxi,
};

export function ExampleArt({ name }: { name: string }) {
  const Cmp = arts[name];
  return (
    <svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ex-bath" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c8915a" />
          <stop offset="1" stopColor="#7d4f2a" />
        </linearGradient>
      </defs>
      {Cmp ? <Cmp /> : null}
    </svg>
  );
}
