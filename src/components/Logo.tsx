/** Logotipo original: uma escotilha de submarino com uma medusa dentro. */
export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="logo-water" cx="50%" cy="30%" r="70%">
          <stop offset="0" stopColor="#14628a" />
          <stop offset="1" stopColor="#061b2b" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#logo-water)" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="#20c5c7" strokeWidth="2.5" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <circle
          key={a}
          cx={24 + 22 * Math.cos((a * Math.PI) / 180)}
          cy={24 + 22 * Math.sin((a * Math.PI) / 180)}
          r="1.6"
          fill="#8be9f0"
        />
      ))}
      <path d="M14 23 C14 13, 34 13, 34 23 C30 21.5, 18 21.5, 14 23 Z" fill="#ff8066" />
      <path
        d="M18 23 C17 27, 19 29, 18 33 M22 22.5 C21 27, 23 30, 22 35 M26 22.5 C27 27, 25 30, 26 35 M30 23 C31 27, 29 29, 30 33"
        fill="none"
        stroke="#f4fafc"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M9 37 Q14 34 19 37 T29 37 T39 37" fill="none" stroke="#8be9f0" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
