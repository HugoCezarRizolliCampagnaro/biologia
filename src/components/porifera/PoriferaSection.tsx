import {
  poriferaCards,
  poriferaIntro,
  poriferaTagline,
  spongeCuriosities,
  spongeFeedingFact,
} from '../../data/porifera';
import { SectionHeading } from '../SectionHeading';
import { MoreToggle } from '../MoreToggle';
import { TraitGrid } from '../TraitGrid';
import { DidYouKnow } from '../DidYouKnow';
import { SpongeAnatomy } from './SpongeAnatomy';
import { SpongeFeeding } from './SpongeFeeding';
import { BodyTypes } from './BodyTypes';
import { SpongeReproduction } from './SpongeReproduction';
import { SpongeExamples } from './SpongeExamples';
import { BlockHead } from '../BlockHead';
import { BigStat } from '../BigStat';

export function PoriferaSection() {
  return (
    <section id="poriferos" className="section porifera" aria-labelledby="poriferos-title">
      <div className="container">
        <SectionHeading id="poriferos-title" phylum="Porifera" title="Poríferos" subtitle="os filtradores do oceano" tagline={poriferaTagline}>
          <MoreToggle label="Saiba mais sobre as esponjas" closeLabel="Mostrar menos">
            {poriferaIntro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </MoreToggle>
        </SectionHeading>

        <div className="block">
          <BlockHead title="Características principais" hint="Toque em uma carta para ver a explicação." />
          <TraitGrid items={poriferaCards} />
        </div>

        <div className="block">
          <BlockHead title="Estrutura do corpo" hint="Toque nos números ou nos nomes." />
          <SpongeAnatomy />
        </div>

        <div className="block">
          <BlockHead title="Como a esponja se alimenta" />
          <SpongeFeeding />
        </div>

        <BigStat pre="até" value="20.000×" label="o volume do próprio corpo em água filtrada por dia" source={spongeFeedingFact.source} />

        <div className="block">
          <BlockHead title="Três formas de corpo" hint="Do mais simples ao mais complexo." />
          <BodyTypes />
        </div>

        <div className="block">
          <BlockHead title="Reprodução" />
          <SpongeReproduction />
        </div>

        <div className="block">
          <BlockHead title="Exemplos" />
          <SpongeExamples />
        </div>

        <div className="block">
          <BlockHead title="Você sabia?" />
          <DidYouKnow items={spongeCuriosities} />
        </div>
      </div>
    </section>
  );
}
