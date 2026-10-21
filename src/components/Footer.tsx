import { Logo } from './Logo';
import { navItems } from '../data/nav';
import { references } from '../data/references';
import { MoreToggle } from './MoreToggle';
import './Footer.css';

const extraLinks = [
  { id: 'jogos', label: 'Quem sou eu?' },
  { id: 'glossario', label: 'Glossário' },
  { id: 'resumo', label: 'Resumo' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={34} />
          <div>
            <p className="footer-name">Biologia Interativa</p>
            <p className="footer-desc">Um mergulho pelos poríferos e cnidários para estudantes do Ensino Médio.</p>
          </div>
        </div>
        <nav aria-label="Rodapé">
          <ul className="footer-links">
            {[...navItems, ...extraLinks].map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`}>{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-refs" id="referencias">
          <h2 className="footer-refs-title">Referências</h2>
          <MoreToggle label={`Ver as ${references.length} referências`} closeLabel="Esconder referências">
            <ol className="refs">
              {references.map((r) => (
                <li key={r.citation}>
                  {r.citation}
                  {r.url && (
                    <>
                      {' '}
                      Disponível em:{' '}
                      <a href={r.url} target="_blank" rel="noreferrer">
                        {r.url}
                      </a>
                      .
                    </>
                  )}
                </li>
              ))}
            </ol>
          </MoreToggle>
        </div>

        <p className="footer-note">
          Conteúdo com finalidade educacional. Ilustrações originais do projeto. Referências consultadas em outubro de 2026.
        </p>
      </div>
    </footer>
  );
}
