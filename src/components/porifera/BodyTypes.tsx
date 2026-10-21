import { spongeBodyTypes } from '../../data/porifera';
import { MoreToggle } from '../MoreToggle';
import './BodyTypes.css';

const GEL = '#c98d58';
const WATER = '#0f4565';
const CHOANO = '#ff8066';

function Arrow({ x, y }: { x: number; y: number }) {
  return (
    <path d={`M${x} ${y} L${x} ${y - 16} M${x - 5} ${y - 11} L${x} ${y - 16} L${x + 5} ${y - 11}`} fill="none" stroke="#8be9f0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  );
}

function Ascon() {
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true" focusable="false">
      <path d="M32 142 C27 100, 26 52, 36 22 L84 22 C94 52, 93 100, 88 142 Z" fill={GEL} />
      <path d="M48 22 C45 54, 45 100, 52 124 Q60 131 68 124 C75 100, 75 54, 72 22 Z" fill={WATER} />
      {[48, 76, 104].map((y) => (
        <g key={y}>
          <rect x="28" y={y - 3} width="21" height="6" fill={WATER} />
          <rect x="71" y={y - 3} width="21" height="6" fill={WATER} />
        </g>
      ))}
      <g fill={CHOANO}>
        {[30, 40, 60, 66, 88, 94, 114].flatMap((y) => [
          <circle key={`l${y}`} cx={46.5 + (y > 100 ? 2 : 0)} cy={y} r="2.6" />,
          <circle key={`r${y}`} cx={73.5 - (y > 100 ? 2 : 0)} cy={y} r="2.6" />,
        ])}
      </g>
      <Arrow x={60} y={18} />
    </svg>
  );
}

function Sycon() {
  const ys = [36, 52, 68, 84, 100, 116];
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true" focusable="false">
      <path d="M24 142 C18 100, 18 52, 28 22 L92 22 C102 52, 102 100, 96 142 Z" fill={GEL} />
      <path d="M52 22 C50 54, 50 100, 54 128 Q60 133 66 128 C70 100, 70 54, 68 22 Z" fill={WATER} />
      {ys.map((y) => (
        <g key={y}>
          <rect x="27" y={y - 4} width="27" height="8" rx="4" fill={WATER} stroke={CHOANO} strokeWidth="2" />
          <rect x="66" y={y - 4} width="27" height="8" rx="4" fill={WATER} stroke={CHOANO} strokeWidth="2" />
        </g>
      ))}
      {ys.slice(0, 5).map((y) => (
        <g key={`c${y}`} stroke={WATER} strokeWidth="2">
          <line x1="21" y1={y + 8} x2="40" y2={y + 8} />
          <line x1="80" y1={y + 8} x2="99" y2={y + 8} />
        </g>
      ))}
      <Arrow x={60} y={18} />
    </svg>
  );
}

function Leucon() {
  const chambers = [
    [36, 60], [56, 52], [82, 58], [30, 86], [50, 80], [72, 84], [92, 88], [40, 110], [62, 108], [84, 114], [28, 128], [52, 132], [76, 134], [96, 124],
  ];
  return (
    <svg viewBox="0 0 120 150" aria-hidden="true" focusable="false">
      <path d="M16 144 C8 112, 10 72, 22 44 C30 28, 40 30, 46 34 C52 22, 66 22, 74 34 C82 26, 98 30, 102 48 C112 76, 112 116, 104 144 Z" fill={GEL} />
      <g fill="none" stroke={WATER} strokeWidth="4" strokeLinecap="round">
        <path d="M46 34 C46 60, 40 90, 40 110 M46 60 L36 60 M46 80 L30 86 M46 80 L50 80 M42 108 L62 108 M40 110 L28 128 M42 120 L52 132" />
        <path d="M74 34 C76 60, 80 90, 84 114 M76 56 L82 58 M76 56 L56 52 M78 84 L72 84 M80 86 L92 88 M84 114 L96 124 M84 120 L76 134" />
      </g>
      {chambers.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5.5" fill={WATER} stroke={CHOANO} strokeWidth="2" />
      ))}
      <ellipse cx="46" cy="34" rx="7" ry="3" fill="#0a3149" />
      <ellipse cx="74" cy="34" rx="7" ry="3" fill="#0a3149" />
      <Arrow x={46} y={28} />
      <Arrow x={74} y={28} />
    </svg>
  );
}

const arts = [Ascon, Sycon, Leucon];

export function BodyTypes() {
  return (
    <div className="bodytypes">
      <ul className="bodytypes-grid">
        {spongeBodyTypes.map((b, i) => {
          const Art = arts[i];
          return (
            <li key={b.title} className="bodytype">
              <div className="bodytype-art">
                <Art />
              </div>
              <h4 className="bodytype-name">{b.title}</h4>
              <p className="bodytype-short">{b.short}</p>
            </li>
          );
        })}
      </ul>
      <div className="bodytypes-legend" aria-hidden="true">
        <span>
          <i style={{ background: CHOANO }} /> coanócitos
        </span>
        <span>
          <i style={{ background: WATER, outline: '1px solid var(--line-strong)' }} /> caminho da água
        </span>
      </div>
      <MoreToggle>
        {spongeBodyTypes.map((b) => (
          <p key={b.title}>
            <strong>{b.title}:</strong> {b.text}
          </p>
        ))}
      </MoreToggle>
    </div>
  );
}
