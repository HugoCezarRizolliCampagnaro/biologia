import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { navItems, MAX_DEPTH } from '../data/nav';
import { useActiveSection, useScrollProgress } from '../hooks/useScroll';
import { useSectionDepths } from '../hooks/useSectionDepths';
import './Header.css';

const ids = navItems.map((n) => n.id);

export function Header() {
  const active = useActiveSection(ids);
  const progress = useScrollProgress();
  const depths = useSectionDepths(ids);
  const [open, setOpen] = useState(false);
  const depth = Math.round(progress * MAX_DEPTH);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header${progress > 0.005 ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="Biologia Interativa, voltar ao início">
          <Logo size={38} />
          <span className="brand-name">
            <span>Biologia</span>
            <span>Interativa</span>
          </span>
        </a>

        <nav className="nav" aria-label="Seções">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? 'is-active' : undefined}
                  aria-current={active === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-depth" aria-label={`Profundidade simbólica: ${depth} metros`}>
          <span className="header-depth-num">−{depth}</span>
          <span className="header-depth-unit">m</span>
        </div>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      <div className="header-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>

      <nav id="menu-mobile" className="menu-mobile" hidden={!open} aria-label="Seções">
        <ul className="container">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : undefined}
                aria-current={active === item.id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <span className="menu-depth">−{depths[item.id] ?? item.depth} m</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
