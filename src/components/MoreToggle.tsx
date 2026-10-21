import { useId, useState, type ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';
import './MoreToggle.css';

/** Botão "ver mais": guarda a explicação completa fora da camada visual. */
export function MoreToggle({
  children,
  label = 'Ver mais',
  closeLabel = 'Ver menos',
}: {
  children: ReactNode;
  label?: string;
  closeLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="more">
      <button
        type="button"
        className="more-btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
        {open ? closeLabel : label}
      </button>
      <div id={id} className="more-body" hidden={!open}>
        {children}
      </div>
    </div>
  );
}
