import { useEffect, useRef, useState } from 'react';
import { RotateCcw, Zap } from 'lucide-react';
import { cnidocyteNotes, cnidocyteShortNotes, cnidocyteSteps } from '../../data/cnidaria';
import { MoreToggle } from '../MoreToggle';
import './CnidocyteDemo.css';

const STEP_MS = 1500;

/** Pequeno crustáceo (presa) desenhado na origem. */
function Prey() {
  return (
    <g className="prey-body">
      <path d="M-14 0 C-14 -9, 10 -11, 16 -3 C18 2, 10 8, -2 8 C-10 8, -14 5, -14 0 Z" fill="#f2d6a2" stroke="#c7a46a" strokeWidth="1.2" />
      <circle cx="10" cy="-3" r="2" fill="#061b2b" />
      <path d="M14 -6 C24 -16, 34 -18, 44 -16 M14 -4 C26 -8, 36 -6, 44 -2" fill="none" stroke="#f2d6a2" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M-14 2 L-24 8 M-14 4 L-22 12" stroke="#f2d6a2" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M-2 8 L-4 14 M3 8 L2 14 M8 7 L8 13" stroke="#c7a46a" strokeWidth="1.2" strokeLinecap="round" />
    </g>
  );
}

export function CnidocyteDemo() {
  const [step, setStep] = useState(-1);
  const [auto, setAuto] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!auto) return;
    timer.current = window.setTimeout(
      () => {
        setStep(step + 1);
        if (step + 1 >= cnidocyteSteps.length - 1) setAuto(false);
      },
      step < 0 ? 50 : STEP_MS,
    );
    return () => window.clearTimeout(timer.current);
  }, [auto, step]);

  const fire = () => {
    setStep(-1);
    setAuto(true);
  };
  const reset = () => {
    setAuto(false);
    setStep(-1);
  };

  const current = step >= 0 ? cnidocyteSteps[step] : null;

  return (
    <div className="cnido">
      <figure className="cnido-figure">
        <svg viewBox="0 0 420 340" className={`cnido-svg s${step}`} role="img" aria-label={current ? `Cnidócito, etapa ${step + 1}: ${current.label}` : 'Cnidócito pronto para disparar'}>
          <defs>
            <linearGradient id="cn-water" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0f4565" />
              <stop offset="1" stopColor="#0b3954" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="420" height="340" rx="18" fill="url(#cn-water)" />
          <text x="18" y="30" className="cn-label">ÁGUA</text>

          {/* Tentáculo: faixa de epiderme */}
          <path d="M0 214 C80 206, 140 216, 210 210 S340 204, 420 214 L420 340 L0 340 Z" fill="var(--hy-epi)" />
          <g stroke="#4fae9a" strokeWidth="1.5" fill="none">
            <path d="M60 212 L60 340 M110 212 L110 340 M290 210 L290 340 M350 210 L350 340" />
          </g>
          <text x="18" y="326" className="cn-label cn-label-dark">TENTÁCULO</text>

          {/* Cnidócito */}
          <ellipse cx="196" cy="276" rx="62" ry="66" fill="#a8e6d8" stroke="#3f9c8a" strokeWidth="2" />
          <ellipse cx="166" cy="318" rx="13" ry="9" fill="#2d7f70" />

          {/* Cápsula do nematocisto */}
          <ellipse className="capsule" cx="196" cy="262" rx="22" ry="40" />
          <path className="coil" d="M196 232 C212 238, 180 246, 196 252 S212 266, 196 272 S180 286, 196 292" fill="none" />
          <path className="operculum" d="M184 223 Q196 213 208 223" fill="none" />

          {/* Cnidocílio (gatilho) */}
          <g className="trigger">
            <circle className="ripple r1" cx="236" cy="168" r="10" />
            <circle className="ripple r2" cx="236" cy="168" r="10" />
            <path className="cnidocil" d="M228 214 C230 196, 232 184, 236 168" fill="none" />
          </g>

          {/* Filamento disparado */}
          <path className="thread" d="M196 222 C192 192, 222 168, 250 152" pathLength={1} fill="none" />
          <g className="toxins">
            {[
              [214, 180],
              [230, 166],
              [244, 156],
            ].map(([cx, cy]) => (
              <circle key={cx} cx={cx} cy={cy} r="3" />
            ))}
          </g>

          {/* Presa */}
          <g className="prey">
            <Prey />
          </g>

          {/* Para a boca */}
          <g className="to-mouth">
            <path d="M232 132 C190 92, 140 70, 84 60" fill="none" strokeDasharray="5 5" markerEnd="url(#cn-head)" />
            <text x="40" y="48" className="cn-label">PARA A BOCA</text>
          </g>
          <defs>
            <marker id="cn-head" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0 0 L10 5 L0 10 Z" fill="var(--cyan)" />
            </marker>
          </defs>

          {/* Rótulos fixos */}
          <text x="270" y="262" className="cn-tag">nematocisto</text>
          <path d="M268 258 L222 258" className="cn-tag-line" />
          <text x="276" y="196" className="cn-tag cn-tag-light">cnidocílio</text>
          <path d="M274 192 L238 186" className="cn-tag-line cn-tag-line-light" />
        </svg>
      </figure>

      <div className="cnido-side">
        <div className="cnido-caption" aria-live="polite">
          {current ? (
            <>
              <span className="eyebrow">
                Etapa {step + 1}/{cnidocyteSteps.length}
              </span>
              <h4 className="cnido-step-title">{current.label}</h4>
              <p className="cnido-step-short">{current.short}</p>
            </>
          ) : (
            <>
              <span className="eyebrow">Pronto</span>
              <h4 className="cnido-step-title">Dispare o cnidócito</h4>
              <p className="cnido-step-short">Aperte o botão e veja a captura da presa.</p>
            </>
          )}
        </div>

        <div className="cnido-actions">
          <button type="button" className="btn btn-primary" onClick={fire} disabled={auto}>
            <Zap size={18} aria-hidden="true" />
            {step >= 0 ? 'Disparar de novo' : 'Disparar'}
          </button>
          <button type="button" className="btn btn-ghost" onClick={reset} disabled={step < 0}>
            <RotateCcw size={18} aria-hidden="true" />
            Recomeçar
          </button>
        </div>

        <ol className="cnido-dots" aria-label="Etapas">
          {cnidocyteSteps.map((s, i) => (
            <li key={s.title}>
              <button
                type="button"
                className={`cnido-dot${i === step ? ' is-on' : ''}${i < step ? ' is-done' : ''}`}
                aria-current={i === step ? 'step' : undefined}
                onClick={() => {
                  setAuto(false);
                  setStep(i);
                }}
              >
                <span className="cnido-dot-num">{i + 1}</span>
                <span className="cnido-dot-label">{s.label}</span>
              </button>
            </li>
          ))}
        </ol>

        <ul className="cnido-notes">
          <li>{cnidocyteShortNotes.organelle}</li>
          <li>{cnidocyteShortNotes.safety}</li>
        </ul>

        <MoreToggle label="Explicação completa" closeLabel="Esconder explicação">
          <ol className="feeding-text">
            {cnidocyteSteps.map((s) => (
              <li key={s.title}>
                <strong>{s.title}.</strong> {s.text}
              </li>
            ))}
          </ol>
          <p>{cnidocyteNotes.organelle}</p>
          <p>{cnidocyteNotes.safety}</p>
        </MoreToggle>
      </div>
    </div>
  );
}
