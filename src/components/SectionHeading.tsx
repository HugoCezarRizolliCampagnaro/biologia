import type { ReactNode } from 'react';
import './SectionHeading.css';

export function SectionHeading({
  id,
  phylum,
  title,
  subtitle,
  tagline,
  accent = 'cyan',
  children,
}: {
  id: string;
  phylum: string;
  title: string;
  subtitle: string;
  tagline: string;
  accent?: 'cyan' | 'coral';
  children?: ReactNode;
}) {
  return (
    <header className={`sh sh-${accent}`}>
      <p className="eyebrow">
        Filo <span className="sci">{phylum}</span>
      </p>
      <h2 id={id} className="sh-title">
        {title}
        <span>{subtitle}</span>
      </h2>
      <p className="sh-tagline">{tagline}</p>
      {children}
    </header>
  );
}
