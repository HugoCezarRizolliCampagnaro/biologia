import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { glossary } from '../../data/glossary';
import { summary } from '../../data/summary';
import { BlockHead } from '../BlockHead';
import './ReviewSection.css';

const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function Glossary() {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);
  const list = useMemo(() => {
    const n = norm(q.trim());
    const sorted = [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'pt-BR'));
    return n ? sorted.filter((g) => norm(g.term).includes(n) || norm(g.definition).includes(n)) : sorted;
  }, [q]);

  return (
    <div className="gloss">
      <label className="gloss-search" htmlFor="gloss-q">
        <Search size={18} aria-hidden="true" />
        <span className="sr-only">Buscar termo</span>
        <input id="gloss-q" type="search" placeholder="Buscar termo (ex.: medusa)" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
      </label>
      <p className="block-hint" aria-live="polite">
        {list.length} {list.length === 1 ? 'termo' : 'termos'}. Toque em um termo para ver o significado.
      </p>
      {list.length === 0 ? (
        <p className="gloss-empty">Nenhum termo encontrado. Tente outra palavra.</p>
      ) : (
        <ul className="gloss-list">
          {list.map((g) => {
            const isOpen = open === g.term;
            const id = `gl-${norm(g.term).replace(/[^a-z]/g, '')}`;
            return (
              <li key={g.term} className={`gloss-item${isOpen ? ' is-open' : ''}`}>
                <button type="button" aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? null : g.term)}>
                  {g.term}
                </button>
                <p id={id} hidden={!isOpen}>
                  {g.definition}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Summary() {
  const cols = [
    { title: 'Poríferos', items: summary.porifera, cls: 'sum-p' },
    { title: 'Cnidários', items: summary.cnidaria, cls: 'sum-c' },
    { title: 'Não confunda', items: summary.remember, cls: 'sum-r' },
  ];
  return (
    <div className="sum">
      {cols.map((c) => (
        <article key={c.title} className={`sum-card ${c.cls}`}>
          <h4>{c.title}</h4>
          <ul>
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export function ReviewSection() {
  return (
    <section id="revisao" className="section review" aria-labelledby="revisao-title">
      <div className="container">
        <header className="sh">
          <p className="eyebrow">Para estudar</p>
          <h2 id="revisao-title" className="sh-title">
            Revisão
          </h2>
          <p className="sh-tagline">Glossário e resumo para a prova.</p>
        </header>

        <div className="block" id="glossario">
          <BlockHead title="Glossário" />
          <Glossary />
        </div>

        <div className="block" id="resumo">
          <BlockHead title="Resumo para a prova" />
          <Summary />
        </div>
      </div>
    </section>
  );
}
