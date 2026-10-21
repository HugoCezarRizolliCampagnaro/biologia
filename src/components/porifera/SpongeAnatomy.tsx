import { spongeParts } from '../../data/porifera';
import { AnatomyExplorer } from '../AnatomyExplorer';
import { SpongeDiagram } from './SpongeDiagram';
import { markers, markerTargets } from './spongeGeometry';

export function SpongeAnatomy() {
  return (
    <AnatomyExplorer
      parts={spongeParts}
      markers={markers}
      targets={markerTargets}
      caption="Modelo simplificado de uma esponja asconoide. Nem toda esponja tem essa anatomia."
      renderDiagram={(activeId, overlay) => {
        const part = spongeParts.find((p) => p.id === activeId)!;
        return (
          <SpongeDiagram highlight={[activeId]} title={`Esponja em corte. Estrutura destacada: ${part.name}`}>
            {overlay}
          </SpongeDiagram>
        );
      }}
    />
  );
}
