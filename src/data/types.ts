// Tipos do conteúdo do site. Todo o texto fica em src/data,
// separado dos componentes, para facilitar a revisão científica.

export type Filo = 'porifero' | 'cnidario';

export interface InfoCard {
  id: string;
  /** Rótulo curto (2-3 palavras) mostrado na camada visual. */
  label?: string;
  title: string;
  text: string;
  details?: string;
  icon: string;
}

export interface AnatomyPart {
  id: string;
  name: string;
  /** Uma linha, mostrada direto no painel. */
  short?: string;
  text: string;
  note?: string;
}

export interface Step {
  title: string;
  /** Rótulo de 2-3 palavras para a camada visual. */
  label?: string;
  /** Uma linha curta. */
  short?: string;
  text: string;
  tag?: string;
}

export interface Example {
  name: string;
  scientific?: string;
  habitat: 'marinha' | 'água doce' | 'marinho' | 'água doce e marinho';
  short?: string;
  text: string;
  /** Foto opcional (arquivo local) e crédito com licença. */
  image?: string;
  credit?: string;
}

export interface Curiosity {
  short?: string;
  text: string;
  source: string;
}

export interface Group {
  id: string;
  name: string;
  scientific: string;
  examples: string;
  short?: string;
  badge?: string;
  text: string;
  highlight?: string;
}

export interface ComparisonRow {
  aspect: string;
  porifera: string;
  cnidaria: string;
}

export interface DifferenceItem {
  id: string;
  trait: string;
  answer: Filo | 'ambos';
  explanation: string;
}

export type QuizCategory =
  | 'Conceitos básicos'
  | 'Anatomia'
  | 'Alimentação'
  | 'Reprodução'
  | 'Ecologia'
  | 'Comparação';

export interface QuizQuestion {
  id: string;
  category: QuizCategory;
  question: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface WhoAmIItem {
  id: string;
  statement: string;
  answer: Filo;
  explanation: string;
}

export type Organism = 'esponja' | 'hidra' | 'coral' | 'anemona' | 'agua-viva';

export interface OrganismChallenge {
  id: string;
  clue: string;
  answer: Organism;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface Reference {
  citation: string;
  url?: string;
  usedFor: string;
}
