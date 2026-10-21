import { cnidariaCards, cnidariaCuriosities, cnidariaIntro, cnidariaTagline, cnidocyteNotes, ecology, hydraParts } from '../../data/cnidaria';
import { SectionHeading } from '../SectionHeading';
import { MoreToggle } from '../MoreToggle';
import { TraitGrid } from '../TraitGrid';
import { DidYouKnow } from '../DidYouKnow';
import { BlockHead } from '../BlockHead';
import { BigStat } from '../BigStat';
import { AnatomyExplorer } from '../AnatomyExplorer';
import { HydraDiagram, hydraMarkers, hydraTargets } from './HydraDiagram';
import { CnidocyteDemo } from './CnidocyteDemo';
import { PolypMedusa } from './PolypMedusa';
import { CnidariaGroups } from './CnidariaGroups';
import { LifeCycle } from './LifeCycle';
import { ReefHeat } from './ReefHeat';

export function CnidariaSection() {
  return (
    <section id="cnidarios" className="section cnidaria" aria-labelledby="cnidarios-title">
      <div className="container">
        <SectionHeading
          id="cnidarios-title"
          phylum="Cnidaria"
          title="Cnidários"
          subtitle="a beleza e a defesa dos oceanos"
          tagline={cnidariaTagline}
          accent="coral"
        >
          <MoreToggle label="Saiba mais sobre os cnidários" closeLabel="Mostrar menos">
            {cnidariaIntro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </MoreToggle>
        </SectionHeading>

        <div className="block">
          <BlockHead title="Características principais" hint="Toque em uma carta para ver a explicação." />
          <TraitGrid items={cnidariaCards} accent="coral" columns={3} />
        </div>

        <div className="block">
          <BlockHead title="Anatomia da hidra" hint="Toque nos números ou nos nomes." />
          <AnatomyExplorer
            parts={hydraParts}
            markers={hydraMarkers}
            targets={hydraTargets}
            caption="Organismo: hidra (Hydra), pólipo de água doce com menos de 2 cm, em corte. Águas-vivas, anêmonas e corais têm formas diferentes."
            renderDiagram={(activeId, overlay) => {
              const part = hydraParts.find((p) => p.id === activeId)!;
              return (
                <HydraDiagram highlight={[activeId]} title={`Hidra em corte. Estrutura destacada: ${part.name}`}>
                  {overlay}
                </HydraDiagram>
              );
            }}
          />
        </div>

        <div className="block">
          <BlockHead title="Como funciona o cnidócito?" />
          <CnidocyteDemo />
        </div>

        <BigStat value="700 ns" label="é o tempo do disparo do nematocisto na hidra: menos de 1 milionésimo de segundo" source={cnidocyteNotes.speed.source} accent="coral" />

        <div className="block">
          <BlockHead title="Pólipo e medusa" />
          <PolypMedusa />
        </div>

        <div className="block">
          <BlockHead title="Principais grupos" />
          <CnidariaGroups />
        </div>

        <div className="block">
          <BlockHead title="Ciclo de vida de uma água-viva" hint="Toque em uma etapa." />
          <LifeCycle />
        </div>

        <div className="block">
          <BlockHead title="Importância ecológica" hint="Aqueça a água e veja o que acontece com os corais." />
          <ReefHeat />
          <div className="block-sub">
            <TraitGrid items={ecology} accent="coral" columns={5} />
          </div>
        </div>

        <div className="block">
          <BlockHead title="Você sabia?" />
          <DidYouKnow items={cnidariaCuriosities} />
        </div>
      </div>
    </section>
  );
}
