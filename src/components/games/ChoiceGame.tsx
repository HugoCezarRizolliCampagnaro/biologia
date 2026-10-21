import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { ArrowRight, Check, RotateCcw, Trophy, X } from 'lucide-react';
import './ChoiceGame.css';

export interface GameOption {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface GameItem {
  id: string;
  prompt: string;
  category?: string;
  options?: GameOption[];
  answer: string;
  explanation: string;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function shuffled<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function messageFor(pct: number) {
  if (pct >= 90) return 'Mergulhador expert! Você domina os dois filos.';
  if (pct >= 70) return 'Muito bem! Só alguns detalhes para revisar.';
  if (pct >= 50) return 'Bom começo. Revise os pontos abaixo e tente de novo.';
  return 'Volte às seções de poríferos e cnidários e tente de novo.';
}

/**
 * Jogo de perguntas com uma resposta certa: mostra uma pergunta por vez,
 * dá retorno imediato, soma pontos e mostra o resultado no final.
 */
export function ChoiceGame({
  id,
  items,
  options,
  layout = 'list',
  shuffle = false,
  showReview = false,
}: {
  id: string;
  items: GameItem[];
  options?: GameOption[];
  layout?: 'list' | 'buttons';
  shuffle?: boolean;
  showReview?: boolean;
}) {
  const [round, setRound] = useState(0);
  // `round` muda a cada "jogar de novo" para sortear uma nova ordem.
  const order = useMemo(() => (shuffle && round >= 0 ? shuffled(items) : items), [items, shuffle, round]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const nextRef = useRef<HTMLButtonElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const total = order.length;
  const done = idx >= total;
  const item = order[Math.min(idx, total - 1)];
  const opts = item.options ?? options ?? [];
  const score = order.filter((it) => answers[it.id] === it.answer).length;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    if (picked !== null) nextRef.current?.focus({ preventScroll: true });
  }, [picked]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    headRef.current?.focus({ preventScroll: true });
  }, [idx, round]);

  const choose = (value: string) => {
    if (picked !== null) return;
    setPicked(value);
    setAnswers((a) => ({ ...a, [item.id]: value }));
  };
  const next = () => {
    setPicked(null);
    setIdx((i) => i + 1);
  };
  const restart = () => {
    setPicked(null);
    setAnswers({});
    setIdx(0);
    setRound((r) => r + 1);
  };

  if (done) {
    const pct = Math.round((score / total) * 100);
    const wrong = order.filter((it) => answers[it.id] !== it.answer);
    return (
      <div className="game game-result" ref={headRef} tabIndex={-1}>
        <Trophy className="result-icon" size={40} aria-hidden="true" />
        <p className="result-score">
          {score}
          <span>/{total}</span>
        </p>
        <p className="result-pct">{pct}% de acertos</p>
        <p className="result-msg">{messageFor(pct)}</p>
        {showReview && wrong.length > 0 && (
          <div className="result-review">
            <h4>Para revisar</h4>
            <ul>
              {wrong.map((it) => {
                const o = (it.options ?? options ?? []).find((x) => x.value === it.answer);
                return (
                  <li key={it.id}>
                    <p className="review-q">{it.prompt}</p>
                    <p className="review-a">
                      <Check size={16} aria-hidden="true" /> {o?.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <button type="button" className="btn btn-primary" onClick={restart}>
          <RotateCcw size={18} aria-hidden="true" />
          Jogar de novo
        </button>
      </div>
    );
  }

  const isRight = picked !== null && picked === item.answer;

  return (
    <div className="game">
      <div className="game-top">
        <span className="game-count">
          {idx + 1} de {total}
        </span>
        {item.category && <span className="game-cat">{item.category}</span>}
        <span className="game-score">
          Pontos: <strong>{score}</strong>
          {answeredCount > 0 && <span className="game-score-of">/{answeredCount}</span>}
        </span>
      </div>
      <div className="game-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={idx} aria-label="Progresso">
        <span style={{ transform: `scaleX(${idx / total})` }} />
      </div>

      <div className="game-prompt" ref={headRef} tabIndex={-1}>
        <h4 id={`${id}-q`}>{item.prompt}</h4>
      </div>

      <div className={`game-options game-options-${layout}${opts.length === 5 ? ' has-5' : ''}`} role="group" aria-labelledby={`${id}-q`}>
        {opts.map((o, i) => {
          const state =
            picked === null ? '' : o.value === item.answer ? ' is-right' : o.value === picked ? ' is-wrong' : ' is-muted';
          return (
            <button key={o.value} type="button" className={`game-opt${state}`} onClick={() => choose(o.value)} disabled={picked !== null} aria-pressed={picked === o.value}>
              {layout === 'list' && <span className="game-letter">{LETTERS[i]}</span>}
              {o.icon && <span className="game-opt-icon">{o.icon}</span>}
              <span className="game-opt-label">{o.label}</span>
              {picked !== null && o.value === item.answer && <Check className="game-mark" size={20} aria-label="resposta correta" />}
              {picked !== null && o.value === picked && o.value !== item.answer && <X className="game-mark" size={20} aria-label="sua resposta" />}
            </button>
          );
        })}
      </div>

      <div className="game-feedback" aria-live="polite">
        {picked !== null && (
          <div className={`feedback ${isRight ? 'is-right' : 'is-wrong'}`}>
            <p className="feedback-title">{isRight ? 'Isso mesmo!' : 'Quase!'}</p>
            <p>{item.explanation}</p>
          </div>
        )}
      </div>

      <div className="game-actions">
        {picked === null ? (
          <p className="game-hint">Escolha uma resposta para continuar.</p>
        ) : (
          <button ref={nextRef} type="button" className="btn btn-primary" onClick={next}>
            {idx + 1 < total ? 'Próxima' : 'Ver resultado'}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
