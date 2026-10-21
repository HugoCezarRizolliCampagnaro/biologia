import { ArrowUp } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScroll';
import './BackToTop.css';

export function BackToTop() {
  const progress = useScrollProgress();
  return (
    <a href="#inicio" className={`totop${progress > 0.08 ? ' is-visible' : ''}`} aria-label="Voltar ao topo">
      <ArrowUp size={20} aria-hidden="true" />
    </a>
  );
}
