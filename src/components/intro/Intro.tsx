import { ArrowRight } from 'lucide-react';
import { introLine, introTitle, phylumCards } from '../../data/home';
import { JellyArt, SpongeArt } from './PhylumArt';
import './Intro.css';

export function Intro() {
  return (
    <section id="introducao" className="section intro" aria-labelledby="intro-title">
      <div className="container">
        <div className="intro-head">
          <p className="eyebrow">Introdução</p>
          <h2 id="intro-title" className="intro-title">{introTitle}</h2>
          <p className="intro-line muted">{introLine}</p>
        </div>

        <div className="phylum-grid">
          {phylumCards.map((card) => (
            <article key={card.id} className={`phylum phylum-${card.id}`}>
              <div className="phylum-art">{card.id === 'poriferos' ? <SpongeArt /> : <JellyArt />}</div>
              <div className="phylum-body">
                <h3 className="phylum-name">{card.name}</h3>
                <p className="phylum-sci sci">{card.scientific}</p>
                <p className="phylum-short">{card.short}</p>
                <ul className="phylum-tags" aria-label="Palavras-chave">
                  {card.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="btn btn-ghost phylum-cta" href={`#${card.id}`}>
                  {card.cta}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
