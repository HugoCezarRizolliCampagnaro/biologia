import { useState } from 'react';
import { quizQuestions } from '../../data/quiz';
import { organismChallenges, organismLabels, whoAmIItems } from '../../data/games';
import { BlockHead } from '../BlockHead';
import { OrganismIcon } from '../OrganismIcon';
import { ChoiceGame, type GameItem } from './ChoiceGame';
import './QuizSection.css';

const quizItems: GameItem[] = quizQuestions.map((q) => ({
  id: q.id,
  prompt: q.question,
  category: q.category,
  options: q.options.map((label, i) => ({ value: String(i), label })),
  answer: String(q.answer),
  explanation: q.explanation,
}));

const phylumItems: GameItem[] = whoAmIItems.map((w) => ({ id: w.id, prompt: `“${w.statement}”`, answer: w.answer, explanation: w.explanation }));
const phylumOptions = [
  { value: 'porifero', label: 'Porífero', icon: <OrganismIcon kind="esponja" size={40} /> },
  { value: 'cnidario', label: 'Cnidário', icon: <OrganismIcon kind="agua-viva" size={40} /> },
];

const organismItems: GameItem[] = organismChallenges.map((o) => ({ id: o.id, prompt: `“${o.clue}”`, answer: o.answer, explanation: o.explanation }));
const organismOptions = (Object.keys(organismLabels) as (keyof typeof organismLabels)[]).map((k) => ({
  value: k,
  label: organismLabels[k],
  icon: <OrganismIcon kind={k} size={40} />,
}));

const modes = [
  { id: 'filo', label: 'Porífero ou cnidário?' },
  { id: 'organismo', label: 'Qual organismo?' },
] as const;

export function QuizSection() {
  const [mode, setMode] = useState<(typeof modes)[number]['id']>('filo');

  return (
    <section id="quiz" className="section quiz" aria-labelledby="quiz-title">
      <div className="container">
        <header className="sh">
          <p className="eyebrow">Teste seus conhecimentos</p>
          <h2 id="quiz-title" className="sh-title">
            Desafio do Oceano
          </h2>
          <p className="sh-tagline">{quizQuestions.length} perguntas sobre os dois filos. Uma de cada vez.</p>
        </header>

        <div className="block">
          <ChoiceGame id="quiz" items={quizItems} showReview />
        </div>

        <div className="block" id="jogos">
          <BlockHead title="Quem sou eu?" hint="Leia a pista e descubra quem está falando." />
          <div className="repro-tabs quiz-tabs" role="tablist" aria-label="Modo de jogo">
            {modes.map((m) => (
              <button
                key={m.id}
                type="button"
                role="tab"
                className="repro-tab"
                aria-selected={mode === m.id}
                aria-controls={`jogo-${m.id}`}
                onClick={() => setMode(m.id)}
              >
                {m.label}
              </button>
            ))}
          </div>
          <div id={`jogo-${mode}`} role="tabpanel" className="quiz-panel">
            {mode === 'filo' ? (
              <ChoiceGame key="filo" id="whoami" items={phylumItems} options={phylumOptions} layout="buttons" shuffle />
            ) : (
              <ChoiceGame key="org" id="organism" items={organismItems} options={organismOptions} layout="buttons" shuffle />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
