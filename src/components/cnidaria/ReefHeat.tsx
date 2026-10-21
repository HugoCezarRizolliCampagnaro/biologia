import { useState } from 'react';
import { Thermometer } from 'lucide-react';
import { reefStates } from '../../data/cnidaria';
import './ReefHeat.css';

const algae = Array.from({ length: 18 }, (_, i) => {
  const a = i * 2.39996;
  const r = 8 + (i % 6) * 4.2;
  return { x: 520 + Math.cos(a) * r * 0.95, y: 82 + Math.sin(a) * r * 0.45, th: 0.28 + (i / 18) * 0.62 };
});

/** Recife interativo: aqueça a água e veja o branqueamento dos corais. */
export function ReefHeat() {
  const [v, setV] = useState(0);
  const t = v / 100;
  const stateIdx = t < 0.34 ? 0 : t < 0.67 ? 1 : 2;
  const state = reefStates[stateIdx];
  const coralFilter = `grayscale(${t}) brightness(${1 + 0.75 * t}) saturate(${1 - 0.5 * t})`;
  const fishOpacity = Math.max(0, 1 - Math.max(0, t - 0.45) * 1.8);

  return (
    <div className="reef">
      <svg className="reef-svg" viewBox="0 0 600 320" role="img" aria-label={`Recife de coral. Estado: ${state.label}`}>
        <defs>
          <linearGradient id="reef-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1a6d93" />
            <stop offset="1" stopColor="#0b3954" />
          </linearGradient>
        </defs>
        <rect width="600" height="320" rx="18" fill="url(#reef-water)" />
        <rect width="600" height="320" rx="18" fill="#ff8066" opacity={0.16 * t} />
        <path d="M0 268 C120 254, 240 276, 360 262 S520 252, 600 266 L600 320 L0 320 Z" fill="#7d6d4f" />

        <g className="reef-corals" style={{ filter: coralFilter }}>
          {/* Coral ramificado */}
          <g fill="none" stroke="#ff8066" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round">
            <path d="M110 268 L110 200 L84 160 L80 130 M110 214 L140 176 L138 146 M110 200 L114 150 L106 118 M84 160 L64 144" />
          </g>
          {/* Coral-cérebro */}
          <ellipse cx="250" cy="250" rx="62" ry="40" fill="#c9d46a" />
          <g fill="none" stroke="#8f9a3a" strokeWidth="3" strokeLinecap="round">
            <path d="M200 248 C214 236, 226 258, 240 244 S266 232, 280 248 S300 256, 304 246" />
            <path d="M208 262 C222 252, 236 272, 252 260 S278 252, 296 264" />
            <path d="M216 232 C230 222, 246 238, 262 226 S284 224, 292 232" />
          </g>
          {/* Coral-mesa */}
          <path d="M392 268 L394 214 L406 214 L408 268 Z" fill="#9b7fd0" />
          <ellipse cx="400" cy="210" rx="66" ry="14" fill="#b48ae6" />
          {/* Coral mole */}
          <g fill="#20c5c7">
            <path d="M500 268 C496 240, 492 220, 500 206 C508 220, 506 240, 512 268 Z" />
            <path d="M516 268 C514 236, 520 214, 530 200 C536 216, 530 240, 530 268 Z" />
            <path d="M532 268 C536 246, 546 232, 556 228 C556 244, 548 256, 546 268 Z" />
          </g>
        </g>

        {/* Peixes */}
        <g className="reef-fish" opacity={fishOpacity}>
          <g className="fish f1">
            <path d="M0 0 C10 -8, 26 -6, 32 0 C26 6, 10 8, 0 0 Z M0 0 L-8 -6 L-8 6 Z" fill="#ffd166" />
          </g>
          <g className="fish f2">
            <path d="M0 0 C8 -6, 20 -5, 26 0 C20 5, 8 6, 0 0 Z M0 0 L-7 -5 L-7 5 Z" fill="#4cc9f0" />
          </g>
          <g className="fish f3">
            <path d="M0 0 C8 -6, 20 -5, 26 0 C20 5, 8 6, 0 0 Z M0 0 L-7 -5 L-7 5 Z" fill="#ffd166" />
          </g>
        </g>

        {/* Zoom no pólipo */}
        <path d="M264 212 L480 104" stroke="#f4fafc" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
        <circle cx="520" cy="82" r="56" fill="#0b3954" stroke="#f4fafc" strokeWidth="1.5" strokeDasharray="5 4" />
        <g style={{ filter: `brightness(${1 + 0.4 * t})` }}>
          <path d="M486 118 C488 98, 494 84, 500 76 L540 76 C546 84, 552 98, 554 118 Z" fill="#e9e2c8" opacity={0.9} />
          <g stroke="#e9e2c8" strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M502 76 C496 64, 490 58, 484 54 M512 74 C510 62, 508 56, 506 48 M528 74 C530 62, 532 56, 534 48 M538 76 C544 64, 550 58, 556 54" />
          </g>
        </g>
        {algae.map((a, i) => (
          <circle key={i} cx={a.x} cy={a.y + 14} r="3.2" fill="#b07f2c" opacity={t < a.th ? 1 : 0} className="alga" />
        ))}
        <text x="520" y="156" textAnchor="middle" className="reef-zoom-label">
          algas dentro do coral
        </text>
      </svg>

      <div className="reef-panel">
        <label className="reef-label" htmlFor="reef-slider">
          <Thermometer size={18} aria-hidden="true" />
          Temperatura da água
        </label>
        <input id="reef-slider" type="range" min={0} max={100} value={v} onChange={(e) => setV(Number(e.target.value))} aria-valuetext={state.label} />
        <div className="reef-scale" aria-hidden="true">
          <span>Normal</span>
          <span>Quente demais por semanas</span>
        </div>
        <div className={`reef-state reef-${state.id}`} aria-live="polite">
          <span className="reef-chip">{state.label}</span>
          <p>{state.text}</p>
        </div>
      </div>
    </div>
  );
}
