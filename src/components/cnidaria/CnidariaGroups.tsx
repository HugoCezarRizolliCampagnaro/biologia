import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { cnidariaGroups, otherGroupsNote } from '../../data/cnidaria';
import { GroupArt } from './GroupArt';
import { MoreToggle } from '../MoreToggle';
import './CnidariaGroups.css';

export function CnidariaGroups() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="groups-wrap">
      <ul className="groups">
        {cnidariaGroups.map((g) => {
          const isOpen = open === g.id;
          return (
            <li key={g.id} className={`group${isOpen ? ' is-open' : ''}`}>
              <div className="group-art">
                <GroupArt id={g.id} />
              </div>
              <div className="group-body">
                <h4 className="group-name">{g.name}</h4>
                <p className="group-sci sci">{g.scientific}</p>
                <p className="group-short">{g.short}</p>
                <p className="group-examples">{g.examples}</p>
                {g.badge && (
                  <p className="group-badge">
                    <AlertTriangle size={15} aria-hidden="true" />
                    {g.badge}
                  </p>
                )}
                <button
                  type="button"
                  className="more-btn"
                  aria-expanded={isOpen}
                  aria-controls={`group-${g.id}`}
                  onClick={() => setOpen(isOpen ? null : g.id)}
                >
                  {isOpen ? 'Ver menos' : 'Ver mais'}
                </button>
                <div id={`group-${g.id}`} className="group-more" hidden={!isOpen}>
                  <p>{g.text}</p>
                  {g.highlight && <p className="group-highlight">{g.highlight}</p>}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <MoreToggle label="Outros grupos" closeLabel="Esconder">
        <p>{otherGroupsNote}</p>
      </MoreToggle>
    </div>
  );
}
