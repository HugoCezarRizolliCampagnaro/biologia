/** Ilustração original do fundo do mar (SVG), com esponjas, corais, anêmona e medusas. */

function tube(x: number, w: number, h: number, base = 600) {
  const l = x - w / 2;
  const r = x + w / 2;
  const top = base - h;
  return `M${l} ${base} C${l - 5} ${base - h * 0.5}, ${l + 2} ${top + 12}, ${l + 4} ${top} Q${x} ${top - 6} ${r - 4} ${top} C${r - 2} ${top + 12}, ${r + 5} ${base - h * 0.5}, ${r} ${base} Z`;
}

const tubes = [
  { x: 402, w: 48, h: 176 },
  { x: 452, w: 38, h: 124 },
  { x: 360, w: 34, h: 104 },
];

const anemoneTentacles = Array.from({ length: 13 }, (_, k) => {
  const i = k - 6;
  const sx = 820 + i * 2.6;
  const ex = 820 + i * 10;
  const ey = 518 - (34 - Math.abs(i) * 4);
  return `M${sx} 553 Q${sx + i * 7} ${(553 + ey) / 2 - 6} ${ex} ${ey}`;
});

const fanLines = (() => {
  const lines: string[] = [];
  const bx = 1230;
  const by = 604;
  for (let k = 0; k <= 10; k++) {
    const a = Math.PI * (0.18 + (k / 10) * 0.64);
    const ex = bx - Math.cos(a) * 150;
    const ey = by - Math.sin(a) * 150;
    lines.push(`M${bx} ${by} Q${(bx + ex) / 2 + (k - 5) * 3} ${(by + ey) / 2} ${ex.toFixed(1)} ${ey.toFixed(1)}`);
  }
  for (let ring = 1; ring <= 4; ring++) {
    const rr = ring * 34;
    const a0 = Math.PI * 0.18;
    const a1 = Math.PI * 0.82;
    const p0 = [bx - Math.cos(a0) * rr, by - Math.sin(a0) * rr];
    const p1 = [bx - Math.cos(a1) * rr, by - Math.sin(a1) * rr];
    lines.push(`M${p0[0].toFixed(1)} ${p0[1].toFixed(1)} A${rr} ${rr} 0 0 0 ${p1[0].toFixed(1)} ${p1[1].toFixed(1)}`);
  }
  return lines;
})();

function Jelly({ x, y, scale = 1, opacity = 1, className = '' }: { x: number; y: number; scale?: number; opacity?: number; className?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
      <g className={`jelly ${className}`}>
        <g className="jelly-tentacles">
          {[-52, -36, -20, -6, 8, 22, 38, 52].map((tx, i) => (
            <path
              key={tx}
              d={`M${tx} -2 C${tx + 10} 40, ${tx - 12} 80, ${tx + 4} ${120 + (i % 3) * 22}`}
              fill="none"
              stroke="#8be9f0"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.55"
            />
          ))}
          {[-16, -5, 6, 17].map((tx) => (
            <path
              key={tx}
              d={`M${tx} -4 C${tx - 14} 30, ${tx + 14} 60, ${tx - 4} 96`}
              fill="none"
              stroke="#ffb3a2"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.5"
            />
          ))}
        </g>
        <path className="jelly-bell" d="M-62 0 C-62 -74, 62 -74, 62 0 C42 -9, -42 -9, -62 0 Z" fill="url(#hero-jelly)" stroke="#8be9f0" strokeWidth="1.5" strokeOpacity="0.7" />
        {[-24, -8, 8, 24].map((gx) => (
          <path key={gx} d={`M${gx - 7} -26 Q${gx} -36 ${gx + 7} -26`} fill="none" stroke="#ff8066" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        ))}
      </g>
    </g>
  );
}

export function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 1440 640" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hero-ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8be9f0" stopOpacity="0.22" />
          <stop offset="1" stopColor="#8be9f0" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hero-jelly" cx="50%" cy="20%" r="80%">
          <stop offset="0" stopColor="#ffd2c6" stopOpacity="0.9" />
          <stop offset="0.6" stopColor="#ff8066" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ff8066" stopOpacity="0.15" />
        </radialGradient>
        <linearGradient id="hero-sponge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#efa56a" />
          <stop offset="1" stopColor="#a35d36" />
        </linearGradient>
        <linearGradient id="hero-vase" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b79be6" />
          <stop offset="1" stopColor="#6c4fa8" />
        </linearGradient>
      </defs>

      <g className="rays">
        <polygon points="300,0 420,0 700,640 420,640" fill="url(#hero-ray)" />
        <polygon points="640,0 710,0 960,640 790,640" fill="url(#hero-ray)" />
        <polygon points="920,0 1030,0 1250,640 1030,640" fill="url(#hero-ray)" />
        <polygon points="1170,0 1230,0 1430,640 1310,640" fill="url(#hero-ray)" />
      </g>

      <Jelly x={772} y={150} scale={0.42} opacity={0.45} className="jelly-slow" />
      <Jelly x={1030} y={210} />

      <path d="M0 500 C180 470, 300 520, 480 492 S820 455, 1000 488 S1300 470, 1440 490 L1440 640 L0 640Z" fill="#0f4566" opacity="0.85" />
      <path d="M0 560 C200 530, 360 575, 560 548 S900 520, 1100 552 S1340 540, 1440 548 L1440 640 L0 640Z" fill="#0b3652" />

      {/* Esponjas incrustantes (lado esquerdo) */}
      <path d="M70 604 C70 580, 110 572, 132 582 C150 566, 196 570, 204 590 C222 588, 240 598, 238 606 Z" fill="#e3bf57" opacity="0.9" />
      {[96, 120, 150, 178, 206].map((cx, i) => (
        <circle key={cx} cx={cx} cy={590 + (i % 2) * 6} r="3" fill="#6e5a1f" opacity="0.7" />
      ))}
      <path d={tube(262, 28, 92)} fill="url(#hero-sponge)" opacity="0.85" />
      <ellipse cx="262" cy="508" rx="9" ry="3.5" fill="#3b2213" />

      {/* Esponjas tubulares */}
      {tubes.map((t) => (
        <g key={t.x}>
          <path d={tube(t.x, t.w, t.h)} fill="url(#hero-sponge)" />
          <ellipse cx={t.x} cy={600 - t.h} rx={t.w / 2 - 7} ry="5" fill="#3b2213" />
          {[0.3, 0.5, 0.7].map((f) => (
            <circle key={f} cx={t.x + (f - 0.5) * t.w * 0.6} cy={600 - t.h * f} r="2.4" fill="#5c3418" opacity="0.7" />
          ))}
        </g>
      ))}

      {/* Coral ramificado */}
      <g fill="none" stroke="#ff8066" strokeLinecap="round" strokeLinejoin="round">
        <path d="M600 600 L600 540 M600 562 L574 522 L566 488 M574 522 L592 496 M600 546 L632 506 L630 478 M632 506 L654 488 M600 540 L603 498 L596 466" strokeWidth="10" />
      </g>
      <g fill="#ffc2b3">
        {[[566, 488], [592, 496], [630, 478], [654, 488], [596, 466]].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="6" />
        ))}
      </g>

      {/* Anêmona */}
      <g className="anemone">
        {anemoneTentacles.map((d) => (
          <path key={d} d={d} fill="none" stroke="#8be9f0" strokeWidth="4.5" strokeLinecap="round" />
        ))}
      </g>
      <path d="M800 602 C803 582, 797 566, 804 553 L836 553 C843 566, 837 582, 840 602 Z" fill="#20c5c7" />

      {/* Esponja em vaso */}
      <path d="M968 602 C958 560, 948 500, 962 458 L1038 458 C1052 500, 1042 560, 1032 602 Z" fill="url(#hero-vase)" />
      <ellipse cx="1000" cy="459" rx="36" ry="8" fill="#2e1f4d" />
      {[[982, 500], [1012, 520], [990, 548], [1020, 568], [976, 578]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" fill="#3d2a66" />
      ))}

      {/* Gorgônia (leque-do-mar) */}
      <g fill="none" stroke="#ff8066" strokeWidth="3" strokeLinecap="round" opacity="0.6">
        {fanLines.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      <path d="M0 612 C240 592, 480 622, 720 606 S1140 592, 1440 608 L1440 640 L0 640Z" fill="#082c44" />
    </svg>
  );
}
