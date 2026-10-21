/** Ícones pequenos dos organismos (viewBox 0 0 48 48). */
export function OrganismIcon({ kind, size = 40 }: { kind: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {kind === 'esponja' || kind === 'porifero' ? (
        <>
          <path d="M14 44 C10 30, 10 18, 15 8 L33 8 C38 18, 38 30, 34 44 Z" fill="#d9965c" />
          <ellipse cx="24" cy="8.5" rx="8" ry="2.4" fill="#3b2213" />
          {[
            [19, 18],
            [28, 22],
            [21, 30],
            [29, 34],
            [24, 39],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="#5c3418" />
          ))}
        </>
      ) : kind === 'hidra' ? (
        <>
          <path d="M20 44 C20 36, 19 26, 19 20 L29 20 C29 26, 28 36, 28 44 Z" fill="#6fcfb8" />
          <path d="M20 20 C14 14, 10 10, 6 4 M23 19 C22 12, 21 8, 21 2 M26 19 C28 12, 30 8, 32 2 M28 20 C34 14, 38 10, 42 6" fill="none" stroke="#6fcfb8" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M28 34 C32 32, 35 29, 36 26" stroke="#6fcfb8" strokeWidth="4" strokeLinecap="round" />
        </>
      ) : kind === 'coral' ? (
        <>
          <path d="M24 46 L24 30 L14 18 L12 8 M24 32 L34 18 L34 10 M24 30 L25 14" fill="none" stroke="#ff8066" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {[
            [12, 8],
            [34, 10],
            [25, 14],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" fill="#ffd2c6" />
          ))}
        </>
      ) : kind === 'anemona' ? (
        <>
          {[-4, -2, 0, 2, 4].map((i) => (
            <path key={i} d={`M${24 + i} 22 Q${24 + i * 4} 14 ${24 + i * 5} ${6 + Math.abs(i) * 2}`} fill="none" stroke="#8be9f0" strokeWidth="2.6" strokeLinecap="round" />
          ))}
          <path d="M16 46 C17 38, 15 30, 17 22 L31 22 C33 30, 31 38, 32 46 Z" fill="#20c5c7" />
        </>
      ) : (
        <>
          <path d="M8 24 C8 6, 40 6, 40 24 C34 22, 14 22, 8 24 Z" fill="#ffd2c6" />
          <path d="M14 24 C13 32, 16 38, 13 46 M24 23 C26 32, 22 38, 25 46 M34 24 C35 32, 32 38, 35 46" fill="none" stroke="#8be9f0" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 23 C18 30, 22 34, 20 40 M28 23 C30 30, 26 34, 28 40" fill="none" stroke="#ff8066" strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
