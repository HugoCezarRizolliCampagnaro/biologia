import { spongeExamples } from '../../data/porifera';
import { ExampleArt } from './ExampleArt';
import './SpongeExamples.css';

export function SpongeExamples() {
  return (
    <ul className="examples">
      {spongeExamples.map((ex) => (
        <li key={ex.name} className="example">
          <div className={`example-art${ex.habitat === 'água doce' ? ' is-fresh' : ''}`}>
            {ex.image ? <img src={ex.image} alt={ex.name} loading="lazy" /> : <ExampleArt name={ex.name} />}
            <span className="example-habitat">{ex.habitat === 'água doce' ? 'Água doce' : 'Marinha'}</span>
          </div>
          <div className="example-body">
            <h4 className="example-name">{ex.name}</h4>
            {ex.scientific && <p className="example-sci sci">{ex.scientific}</p>}
            <p className="example-short">{ex.short}</p>
            {ex.credit && <p className="example-credit">{ex.credit}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
