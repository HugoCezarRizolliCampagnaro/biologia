import { useState } from 'react';
import { Check, Eye, EyeOff, X } from 'lucide-react';
import { comparisonKeyPoints, comparisonRows, differenceItems, versusRows } from '../../data/comparison';
import { BlockHead } from '../BlockHead';
import { MoreToggle } from '../MoreToggle';
import { OrganismIcon } from '../OrganismIcon';
import { ChoiceGame, type GameItem } from '../games/ChoiceGame';
import './ComparisonSection.css';

const diffItems: GameItem[] = differenceItems.map((d) => ({ id: d.id, prompt: d.trait, answer: d.answer, explanation: d.explanation }));
const diffOptions = [
  { value: 'porifero', label: 'Porífero', icon: <OrganismIcon kind="esponja" size={36} /> },
  { value: 'cnidario', label: 'Cnidário', icon: <OrganismIcon kind="agua-viva" size={36} /> },
  { value: 'ambos', label: 'Ambos', icon: <span className="both-icon"><OrganismIcon kind="esponja" size={28} /><OrganismIcon kind="agua-viva" size={28} /></span> },
];

function Cell({ text, flag, hidden, onReveal }: { text: string; flag?: boolean; hidden: boolean; onReveal: () => void }) {
  if (hidden) {
    return (
      <button type="button" className="vs-cell vs-hidden" onClick={onReveal} aria-label="Mostrar resposta">
        ?
      </button>
    );
  }
  return (
    <div className="vs-cell">
      {flag !== undefined && (flag ? <Check className="vs-yes" size={18} aria-label="sim" /> : <X className="vs-no" size={18} aria-label="não" />)}
      <span>{text}</span>
    </div>
  );
}

function Versus() {
  const [challenge, setChallenge] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const reveal = (key: string) => setRevealed((r) => new Set(r).add(key));

  return (
    <div className="vs-wrap">
      <div className="vs-toolbar">
        <button
          type="button"
          className="chip"
          aria-pressed={challenge}
          onClick={() => {
            setChallenge((c) => !c);
            setRevealed(new Set());
          }}
        >
          {challenge ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
          {challenge ? 'Mostrar tudo' : 'Esconder respostas'}
        </button>
        {challenge && <span className="block-hint">Toque no "?" para revelar.</span>}
      </div>

      <div className="vs" role="table" aria-label="Comparação entre poríferos e cnidários">
        <div className="vs-head" role="row">
          <div className="vs-side vs-p" role="columnheader">
            <OrganismIcon kind="esponja" size={44} />
            <span>Poríferos</span>
          </div>
          <div className="vs-x" aria-hidden="true">×</div>
          <div className="vs-side vs-c" role="columnheader">
            <OrganismIcon kind="agua-viva" size={44} />
            <span>Cnidários</span>
          </div>
        </div>
        {versusRows.map((r) => (
          <div key={r.aspect} className="vs-row" role="row">
            <div className="vs-aspect" role="rowheader">
              {r.aspect}
            </div>
            <div role="cell" className="vs-cell-wrap vs-p">
              <Cell text={r.porifera} flag={r.p} hidden={challenge && !revealed.has(`${r.aspect}-p`)} onReveal={() => reveal(`${r.aspect}-p`)} />
            </div>
            <div role="cell" className="vs-cell-wrap vs-c">
              <Cell text={r.cnidaria} flag={r.c} hidden={challenge && !revealed.has(`${r.aspect}-c`)} onReveal={() => reveal(`${r.aspect}-c`)} />
            </div>
          </div>
        ))}
      </div>

      <MoreToggle label="Comparação completa" closeLabel="Esconder">
        <div className="vs-full">
          <table>
            <thead>
              <tr>
                <th scope="col">Aspecto</th>
                <th scope="col">Poríferos</th>
                <th scope="col">Cnidários</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((r) => (
                <tr key={r.aspect}>
                  <th scope="row">{r.aspect}</th>
                  <td>{r.porifera}</td>
                  <td>{r.cnidaria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="vs-points">
          {comparisonKeyPoints.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </MoreToggle>
    </div>
  );
}

export function ComparisonSection() {
  return (
    <section id="comparacao" className="section comparison" aria-labelledby="comparacao-title">
      <div className="container">
        <header className="sh">
          <p className="eyebrow">Comparação</p>
          <h2 id="comparacao-title" className="sh-title">
            Poríferos × Cnidários
          </h2>
          <p className="sh-tagline">Coanócito ou cnidócito? Veja as diferenças lado a lado.</p>
        </header>

        <div className="block">
          <BlockHead title="Lado a lado" />
          <Versus />
        </div>

        <div className="block">
          <BlockHead title="Encontrar as diferenças" hint="Essa característica é de porífero, de cnidário ou dos dois?" />
          <ChoiceGame id="diff" items={diffItems} options={diffOptions} layout="buttons" shuffle />
        </div>
      </div>
    </section>
  );
}
