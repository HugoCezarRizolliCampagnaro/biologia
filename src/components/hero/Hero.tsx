import { ChevronDown } from 'lucide-react';
import { HeroArt } from './HeroArt';
import { hero } from '../../data/home';
import './Hero.css';

const bubbles = [
  { left: 8, size: 10, dur: 11, delay: 0 },
  { left: 18, size: 6, dur: 9, delay: 3 },
  { left: 27, size: 14, dur: 14, delay: 6 },
  { left: 41, size: 7, dur: 10, delay: 1.5 },
  { left: 52, size: 11, dur: 13, delay: 8 },
  { left: 61, size: 5, dur: 8, delay: 4 },
  { left: 70, size: 9, dur: 12, delay: 2 },
  { left: 79, size: 13, dur: 15, delay: 7 },
  { left: 88, size: 6, dur: 9.5, delay: 5 },
  { left: 94, size: 8, dur: 11.5, delay: 9 },
];

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <HeroArt />
      <div className="hero-bubbles" aria-hidden="true">
        {bubbles.map((b, i) => (
          <span
            key={i}
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <p className="eyebrow">{hero.kicker}</p>
        <h1 id="hero-title" className="hero-title">
          Do fundo do mar <span>à ciência da vida</span>
        </h1>
        <p className="hero-sub">{hero.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#introducao">
            Começar exploração
          </a>
          <a className="btn btn-ghost" href="#quiz">
            Testar meus conhecimentos
          </a>
        </div>
      </div>

      <a className="hero-scroll" href="#introducao">
        <span>Role para mergulhar</span>
        <ChevronDown size={20} aria-hidden="true" />
      </a>
    </section>
  );
}
