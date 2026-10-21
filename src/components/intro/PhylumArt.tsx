/** Ilustrações dos cards dos filos. */

export function SpongeArt() {
  return (
    <svg viewBox="0 0 200 160" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pa-sponge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2ad73" />
          <stop offset="1" stopColor="#a65f37" />
        </linearGradient>
      </defs>
      <path d="M40 150 C30 150, 160 150, 160 150" stroke="#123247" strokeWidth="10" strokeLinecap="round" />
      <path d="M72 148 C62 110, 58 70, 70 34 L130 34 C142 70, 138 110, 128 148 Z" fill="url(#pa-sponge)" />
      <ellipse cx="100" cy="35" rx="28" ry="7" fill="#3b2213" />
      {[
        [82, 60], [112, 66], [92, 86], [120, 96], [80, 110], [106, 120], [92, 136], [118, 132], [100, 104], [86, 74],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.4" fill="#5c3418" />
      ))}
      <g fill="none" stroke="#8be9f0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 76 L58 82 M52 77 L58 82 L52 87" />
        <path d="M28 112 L58 112 M52 107 L58 112 L52 117" />
        <path d="M170 76 L142 82 M148 77 L142 82 L148 87" />
        <path d="M100 26 L100 6 M94 12 L100 6 L106 12" />
      </g>
    </svg>
  );
}

export function JellyArt() {
  return (
    <svg viewBox="0 0 200 160" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="pa-jelly" cx="50%" cy="25%" r="80%">
          <stop offset="0" stopColor="#ffd8cd" />
          <stop offset="0.6" stopColor="#ff8066" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ff8066" stopOpacity="0.35" />
        </radialGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        {[60, 76, 92, 108, 124, 140].map((x, i) => (
          <path key={x} d={`M${x} 74 C${x + 10} 100, ${x - 10} 124, ${x + 4} ${146 - (i % 2) * 10}`} stroke="#8be9f0" strokeWidth="2" opacity="0.8" />
        ))}
        {[88, 100, 112].map((x) => (
          <path key={x} d={`M${x} 72 C${x - 10} 96, ${x + 10} 112, ${x - 2} 132`} stroke="#ffb3a2" strokeWidth="6" opacity="0.7" />
        ))}
      </g>
      <path d="M48 76 C48 18, 152 18, 152 76 C130 68, 70 68, 48 76 Z" fill="url(#pa-jelly)" stroke="#8be9f0" strokeWidth="2" />
      {[78, 94, 110, 126].map((x) => (
        <path key={x} d={`M${x - 7} 50 Q${x} 40 ${x + 7} 50`} fill="none" stroke="#ff8066" strokeWidth="3.5" strokeLinecap="round" />
      ))}
      <g fill="#f4fafc">
        <circle cx="160" cy="36" r="3" />
        <circle cx="168" cy="22" r="2" />
        <circle cx="38" cy="40" r="2.5" />
      </g>
    </svg>
  );
}
