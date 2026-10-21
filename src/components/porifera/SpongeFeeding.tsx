import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { spongeFeedingSteps } from '../../data/porifera';
import { SpongeDiagram } from './SpongeDiagram';
import { foodPaths, pathLength, pointAt, toPath, waterPaths, type Pt } from './spongeGeometry';
import { MoreToggle } from '../MoreToggle';
import { usePrefersReducedMotion } from '../../hooks/useScroll';
import './SpongeFeeding.css';

const STEP_MS = 3600;
const stepHighlight = [['ostios', 'porocitos'], ['atrio', 'ostios'], ['coanocitos'], ['amebocitos'], ['osculo']];

interface Particle {
  path: Pt[];
  len: number;
  offset: number;
  speed: number;
  food: boolean;
}

const particles: Particle[] = [
  ...waterPaths.flatMap((path, i) =>
    [0, 0.5].map((o) => ({ path, len: pathLength(path), offset: (o + i * 0.137) % 1, speed: 34 + (i % 3) * 5, food: false })),
  ),
  ...foodPaths.map((path, i) => ({ path, len: pathLength(path), offset: (i * 0.29) % 1, speed: 22, food: true })),
];

function FlowParticles({ running }: { running: boolean }) {
  const refs = useRef<(SVGCircleElement | null)[]>([]);
  const groupRef = useRef<SVGGElement>(null);
  const tRef = useRef(0);
  const visible = useRef(true);

  // Só anima quando o diagrama está na tela (economiza bateria no celular).
  useEffect(() => {
    const svg = groupRef.current?.ownerSVGElement;
    if (!svg) return;
    const io = new IntersectionObserver(([e]) => {
      visible.current = e.isIntersecting;
    });
    io.observe(svg);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!visible.current) {
        frame = requestAnimationFrame(draw);
        return;
      }
      if (running) tRef.current += dt;
      particles.forEach((p, i) => {
        const el = refs.current[i];
        if (!el) return;
        const u = (p.offset + (tRef.current * p.speed) / p.len) % 1;
        const pt = pointAt(p.path, u);
        el.setAttribute('cx', pt.x.toFixed(1));
        el.setAttribute('cy', pt.y.toFixed(1));
        const fadeIn = Math.min(1, u / 0.08);
        const fadeOut = p.food ? Math.min(1, (1 - u) / 0.18) : Math.min(1, (1 - u) / 0.12);
        el.setAttribute('opacity', (Math.min(fadeIn, fadeOut) * (p.food ? 1 : 0.85)).toFixed(2));
        if (p.food) el.setAttribute('r', (3.6 * (0.4 + 0.6 * fadeOut)).toFixed(2));
      });
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [running]);

  return (
    <g className="particles" aria-hidden="true" ref={groupRef}>
      {particles.map((p, i) => (
        <circle
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          r={p.food ? 3.6 : 2.6}
          className={p.food ? 'p-food' : 'p-water'}
          opacity="0"
        />
      ))}
    </g>
  );
}

function FlowArrows() {
  return (
    <g className="flow-arrows" aria-hidden="true">
      <defs>
        <marker id="flow-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--cyan)" />
        </marker>
      </defs>
      {[waterPaths[2], waterPaths[5]].map((path, i) => (
        <path key={i} d={toPath(path.slice(0, 3))} markerEnd="url(#flow-head)" />
      ))}
      <path d="M200 300 L200 120" markerEnd="url(#flow-head)" />
      <path d="M200 86 L200 26" markerEnd="url(#flow-head)" />
    </g>
  );
}

export function SpongeFeeding() {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(!reduced);

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => setStep((s) => (s + 1) % spongeFeedingSteps.length), STEP_MS);
    return () => window.clearTimeout(id);
  }, [playing, step]);

  const current = spongeFeedingSteps[step];

  return (
    <div className="feeding">
      <figure className="feeding-figure">
        <SpongeDiagram highlight={stepHighlight[step]} title={`Fluxo de água na esponja. Etapa ${step + 1}: ${current.label}`} className="sponge-flow">
          <FlowArrows />
          {!reduced && <FlowParticles running={playing} />}
        </SpongeDiagram>
        <div className="feeding-legend" aria-hidden="true">
          <span>
            <i className="dot dot-water" /> água
          </span>
          <span>
            <i className="dot dot-food" /> alimento
          </span>
        </div>
      </figure>

      <div className="feeding-side">
        <ol className="feeding-steps">
          {spongeFeedingSteps.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                className={`feeding-step${i === step ? ' is-on' : ''}${i < step ? ' is-done' : ''}`}
                aria-current={i === step ? 'step' : undefined}
                onClick={() => {
                  setStep(i);
                  setPlaying(false);
                }}
              >
                <span className="feeding-num">{i + 1}</span>
                <span className="feeding-label">{s.label}</span>
                {i === step && playing && <span key={step} className="feeding-bar" style={{ animationDuration: `${STEP_MS}ms` }} />}
              </button>
            </li>
          ))}
        </ol>

        <div className="feeding-controls">
          <button type="button" className="btn btn-ghost" onClick={() => setPlaying((p) => !p)}>
            {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
            {playing ? 'Pausar' : 'Reproduzir'}
          </button>
        </div>

        <MoreToggle label="Explicação completa" closeLabel="Esconder explicação">
          <ol className="feeding-text">
            {spongeFeedingSteps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>
        </MoreToggle>
      </div>
    </div>
  );
}
