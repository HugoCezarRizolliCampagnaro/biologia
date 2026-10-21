import type { ComparisonRow, DifferenceItem } from './types';

export const comparisonRows: ComparisonRow[] = [
  {
    aspect: 'Tecidos verdadeiros',
    porifera: 'Não possuem',
    cnidaria: 'Possuem: epiderme e gastroderme, com a mesogleia entre elas',
  },
  {
    aspect: 'Organização corporal',
    porifera: 'Nível celular; sem simetria definida em muitas espécies',
    cnidaria: 'Nível de tecidos; simetria radial, com variações',
  },
  {
    aspect: 'Tipo de alimentação',
    porifera: 'Filtração da água (raras espécies carnívoras)',
    cnidaria: 'Captura de presas com tentáculos; muitos corais também recebem alimento de algas simbiontes',
  },
  {
    aspect: 'Digestão',
    porifera: 'Apenas intracelular',
    cnidaria: 'Extracelular na cavidade gastrovascular, depois intracelular',
  },
  {
    aspect: 'Sistema nervoso',
    porifera: 'Ausente',
    cnidaria: 'Rede nervosa difusa, sem cérebro',
  },
  {
    aspect: 'Estrutura corporal',
    porifera: 'Poros, canais e câmaras; água sai pelo ósculo',
    cnidaria: 'Pólipo e/ou medusa; tentáculos ao redor de uma única abertura',
  },
  {
    aspect: 'Células especializadas',
    porifera: 'Coanócitos, pinacócitos, porócitos e amebócitos',
    cnidaria: 'Cnidócitos, células glandulares, musculares e nervosas',
  },
  {
    aspect: 'Reprodução',
    porifera: 'Assexuada (brotamento, fragmentação, gêmulas) e sexuada, com larva ciliada; muitas são hermafroditas',
    cnidaria: 'Assexuada (brotamento, fragmentação, estrobilização) e sexuada, com larva plânula; ciclos variados',
  },
  {
    aspect: 'Exemplos',
    porifera: 'Esponja-de-banho, cesto-de-vênus, Spongilla, cauxi',
    cnidaria: 'Hidra, caravela, Aurelia, cubomedusas, corais, anêmonas',
  },
  {
    aspect: 'Importância ecológica',
    porifera: 'Filtram a água, reciclam nutrientes e abrigam pequenos animais',
    cnidaria: 'Formam recifes, abrigam muitas espécies e participam das cadeias alimentares',
  },
];

export const comparisonKeyPoints = [
  'Poríferos não possuem tecidos verdadeiros; cnidários possuem.',
  'Poríferos se alimentam principalmente por filtração e fazem só digestão intracelular.',
  'Cnidários geralmente capturam presas e fazem digestão extracelular seguida de intracelular.',
  'Poríferos não têm sistema nervoso; cnidários têm uma rede nervosa difusa.',
  'Coanócitos são característicos dos poríferos; cnidócitos caracterizam os cnidários.',
];

export const differenceItems: DifferenceItem[] = [
  {
    id: 'd1',
    trait: 'Possui coanócitos',
    answer: 'porifero',
    explanation: 'Coanócitos são as células com flagelo e colarinho que movimentam e filtram a água nas esponjas.',
  },
  {
    id: 'd2',
    trait: 'Possui cnidócitos',
    answer: 'cnidario',
    explanation: 'Os cnidócitos dão nome ao filo Cnidaria e são usados na captura de presas e na defesa.',
  },
  {
    id: 'd3',
    trait: 'Tem tecidos verdadeiros',
    answer: 'cnidario',
    explanation: 'Cnidários têm epiderme e gastroderme. As esponjas não formam tecidos verdadeiros.',
  },
  {
    id: 'd4',
    trait: 'Digestão apenas intracelular',
    answer: 'porifero',
    explanation: 'Nas esponjas, o alimento é englobado e digerido dentro das células. Nos cnidários, a digestão começa na cavidade.',
  },
  {
    id: 'd5',
    trait: 'Rede nervosa difusa',
    answer: 'cnidario',
    explanation: 'Cnidários têm neurônios espalhados pelo corpo. As esponjas não têm sistema nervoso.',
  },
  {
    id: 'd6',
    trait: 'Ósculo por onde a água sai',
    answer: 'porifero',
    explanation: 'O ósculo é a abertura de saída da corrente de água das esponjas.',
  },
  {
    id: 'd7',
    trait: 'Cavidade gastrovascular',
    answer: 'cnidario',
    explanation: 'É a cavidade digestiva dos cnidários, com uma única abertura na maioria das formas típicas.',
  },
  {
    id: 'd8',
    trait: 'Vive em ambiente aquático',
    answer: 'ambos',
    explanation: 'Os dois filos são aquáticos, com a maioria das espécies no mar e algumas em água doce.',
  },
  {
    id: 'd9',
    trait: 'Pode se reproduzir de forma assexuada',
    answer: 'ambos',
    explanation: 'Esponjas fazem brotamento, fragmentação e gêmulas; cnidários fazem brotamento, fragmentação e estrobilização.',
  },
  {
    id: 'd10',
    trait: 'Esqueleto de espículas',
    answer: 'porifero',
    explanation: 'Espículas de calcário ou sílica sustentam o corpo de muitas esponjas. Corais têm esqueleto de calcário, mas não de espículas.',
  },
  {
    id: 'd11',
    trait: 'Formas de pólipo e medusa',
    answer: 'cnidario',
    explanation: 'Pólipo e medusa são as formas corporais dos cnidários. Nem todas as espécies têm as duas.',
  },
  {
    id: 'd12',
    trait: 'Larva coberta de cílios que nada',
    answer: 'ambos',
    explanation: 'As esponjas têm larvas ciliadas nadadoras, e a plânula dos cnidários também é ciliada.',
  },
  {
    id: 'd13',
    trait: 'Tentáculos ao redor da boca',
    answer: 'cnidario',
    explanation: 'Esponjas não têm boca nem tentáculos; o alimento entra pelos poros.',
  },
  {
    id: 'd14',
    trait: 'Maioria das espécies é marinha',
    answer: 'ambos',
    explanation: 'Nos dois filos, a maior parte das espécies vive no mar.',
  },
];

/** Versão curta da comparação, para o "versus" lado a lado. */
export const versusRows: { aspect: string; porifera: string; cnidaria: string; p?: boolean; c?: boolean }[] = [
  { aspect: 'Tecidos verdadeiros', porifera: 'Não têm', cnidaria: 'Têm', p: false, c: true },
  { aspect: 'Organização', porifera: 'Nível celular', cnidaria: 'Nível de tecidos' },
  { aspect: 'Alimentação', porifera: 'Filtração', cnidaria: 'Captura de presas' },
  { aspect: 'Digestão', porifera: 'Só intracelular', cnidaria: 'Extra + intracelular' },
  { aspect: 'Sistema nervoso', porifera: 'Ausente', cnidaria: 'Rede difusa', p: false, c: true },
  { aspect: 'Corpo', porifera: 'Poros, canais e ósculo', cnidaria: 'Pólipo e/ou medusa' },
  { aspect: 'Célula típica', porifera: 'Coanócito', cnidaria: 'Cnidócito' },
  { aspect: 'Reprodução', porifera: 'Brotos, gêmulas, larva', cnidaria: 'Brotos, estróbilo, plânula' },
  { aspect: 'Exemplos', porifera: 'Esponjas', cnidaria: 'Águas-vivas, corais, anêmonas' },
  { aspect: 'Ecologia', porifera: 'Filtram a água', cnidaria: 'Formam recifes' },
];
