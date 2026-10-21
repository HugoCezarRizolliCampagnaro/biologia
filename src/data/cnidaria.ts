import type { AnatomyPart, Curiosity, Group, InfoCard, Step } from './types';

export const cnidariaTagline = 'Animais com tecidos e células que disparam.';

export const cnidariaIntro = [
  'Os cnidários são animais aquáticos, em sua maioria marinhos. O grupo inclui águas-vivas, caravelas, corais, anêmonas-do-mar e as hidras, que vivem em água doce.',
  'O nome Cnidaria vem do grego knide, que significa "urtiga". Ele se refere aos cnidócitos, células especializadas características do filo, usadas principalmente na captura de presas e na defesa.',
  'Diferentemente das esponjas, os cnidários possuem tecidos verdadeiros: uma camada externa (epiderme), uma interna (gastroderme) e, entre elas, a mesogleia. Também têm células nervosas organizadas em uma rede espalhada pelo corpo.',
];

export const cnidariaCards: InfoCard[] = [
  {
    id: 'simetria',
    icon: 'Sun',
    label: 'Simetria radial',
    title: 'Simetria radial',
    text: 'O corpo se organiza ao redor de um eixo central, como os raios de uma roda.',
    details:
      'Isso ajuda a perceber estímulos e capturar presas que chegam de qualquer direção. Há variações entre os grupos: em corais e anêmonas, a organização interna pode ser birradial.',
  },
  {
    id: 'tecidos',
    icon: 'Layers',
    label: 'Tecidos verdadeiros',
    title: 'Tecidos verdadeiros',
    text: 'Epiderme por fora, gastroderme por dentro e a mesogleia entre as duas.',
    details:
      'Por terem duas camadas de tecido formadas no embrião, os cnidários são chamados de diblásticos. A mesogleia pode ser fina, como na hidra, ou espessa e gelatinosa, como nas águas-vivas.',
  },
  {
    id: 'cavidade',
    icon: 'Circle',
    label: 'Uma só abertura',
    title: 'Cavidade gastrovascular',
    text: 'Uma cavidade digestiva com uma única abertura, na maioria das formas típicas.',
    details:
      'A boca serve tanto para a entrada do alimento quanto para a saída dos restos não digeridos. A cavidade também ajuda a distribuir os nutrientes — daí o nome: "gastro" (digestão) + "vascular" (distribuição).',
  },
  {
    id: 'digestao',
    icon: 'GitMerge',
    label: 'Digestão em 2 etapas',
    title: 'Digestão extra e intracelular',
    text: 'A digestão começa na cavidade e termina dentro das células.',
    details:
      'Células glandulares da gastroderme liberam enzimas que quebram o alimento dentro da cavidade (digestão extracelular). Depois, células da gastroderme englobam os fragmentos e completam a digestão (intracelular).',
  },
  {
    id: 'nervos',
    icon: 'Share2',
    label: 'Rede nervosa',
    title: 'Rede nervosa difusa',
    text: 'Neurônios espalhados pelo corpo, sem um cérebro centralizado.',
    details:
      'Nas medusas, há anéis nervosos na borda do sino e estruturas sensoriais que detectam luz e equilíbrio. As cubomedusas têm olhos complexos, com lente, córnea e retina.',
  },
  {
    id: 'tentaculos',
    icon: 'GitBranch',
    label: 'Tentáculos',
    title: 'Tentáculos',
    text: 'Ficam ao redor da boca e são usados para capturar presas.',
    details: 'São cheios de cnidócitos e dobram-se para levar o alimento até a boca.',
  },
  {
    id: 'cnidocitos',
    icon: 'Zap',
    label: 'Cnidócitos',
    title: 'Cnidócitos',
    text: 'Células que guardam estruturas especializadas, como os nematocistos.',
    details:
      'Cada cnidócito dispara uma única vez e depois é substituído por uma célula nova. Além dos nematocistos, que podem injetar toxinas, existem outros tipos de cnida, como os adesivos encontrados em anêmonas e corais.',
  },
  {
    id: 'reproducao',
    icon: 'Sprout',
    label: 'Sexuada e assexuada',
    title: 'Reprodução sexuada e assexuada',
    text: 'Gametas e larva plânula; muitas espécies também se reproduzem assexuadamente.',
    details:
      'Brotamento, fragmentação e estrobilização são formas assexuadas comuns. Na reprodução sexuada, geralmente surge uma larva ciliada chamada plânula.',
  },
  {
    id: 'formas',
    icon: 'Repeat',
    label: 'Pólipo e medusa',
    title: 'Pólipo e medusa',
    text: 'Duas formas corporais básicas, cuja presença varia entre os grupos.',
    details:
      'Algumas espécies alternam entre as duas formas ao longo da vida; outras têm só uma delas. Hidras, corais e anêmonas, por exemplo, não têm fase medusa.',
  },
];

export const hydraOrganism =
  'Organismo representado: hidra (gênero Hydra), um pólipo de água doce que geralmente mede menos de 2 cm. Águas-vivas, anêmonas e corais têm a mesma organização básica em camadas, mas formas e detalhes bem diferentes.';

export const hydraParts: AnatomyPart[] = [
  {
    id: 'tentaculos',
    name: 'Tentáculos',
    short: 'Capturam presas e levam o alimento à boca.',
    text: 'Extensões ao redor da boca, cobertas de cnidócitos. Capturam pequenos animais, como pulgas-d’água, e levam o alimento até a boca.',
    note: 'Na hidra, os tentáculos são ocos: a cavidade gastrovascular continua dentro deles.',
  },
  {
    id: 'boca',
    name: 'Boca',
    short: 'Única abertura: entra alimento e saem os restos.',
    text: 'Única abertura da cavidade gastrovascular, no topo de uma elevação chamada hipóstomo. Por ela entra o alimento e saem os restos não digeridos.',
  },
  {
    id: 'cavidade',
    name: 'Cavidade gastrovascular',
    short: 'Onde o alimento é digerido.',
    text: 'Espaço interno onde o alimento é digerido. A digestão começa aqui, fora das células, e termina dentro das células da gastroderme.',
  },
  {
    id: 'epiderme',
    name: 'Epiderme',
    short: 'Camada externa que protege o corpo.',
    text: 'Camada externa de células. Protege o corpo e contém células musculares, sensoriais e nervosas, além dos cnidócitos.',
  },
  {
    id: 'gastroderme',
    name: 'Gastroderme',
    short: 'Camada interna que digere o alimento.',
    text: 'Camada interna que reveste a cavidade. Tem células glandulares, que liberam enzimas digestivas, e células que englobam e terminam de digerir o alimento.',
  },
  {
    id: 'mesogleia',
    name: 'Mesogleia',
    short: 'Camada gelatinosa entre as duas.',
    text: 'Camada gelatinosa entre a epiderme e a gastroderme. Na hidra é muito fina; nas águas-vivas é espessa e forma a maior parte do corpo.',
  },
  {
    id: 'cnidocitos',
    name: 'Cnidócitos',
    short: 'Células que disparam o nematocisto.',
    text: 'Concentram-se principalmente nos tentáculos. Cada um guarda uma cápsula, o nematocisto, com um filamento enrolado que é disparado quando estimulado.',
  },
  {
    id: 'disco',
    name: 'Disco basal',
    short: 'Base que prende a hidra no lugar.',
    text: 'Base do corpo que produz uma substância adesiva e prende a hidra a uma superfície. A hidra pode se soltar e se deslocar, inclusive dando "cambalhotas".',
    note: 'Medusas não têm disco basal: elas nadam livremente.',
  },
  {
    id: 'broto',
    name: 'Broto',
    short: 'Filhote que nasce por brotamento.',
    text: 'Novo indivíduo que se forma na parede do corpo por brotamento, uma forma de reprodução assexuada. Quando está completo, se solta e passa a viver sozinho.',
  },
];

export const cnidocyteSteps: Step[] = [
  {
    title: 'Contato',
    label: 'Contato',
    short: 'Uma presa encosta no tentáculo.',
    text: 'Um pequeno animal, como uma pulga-d’água, encosta em um tentáculo.',
  },
  {
    title: 'Estímulo',
    label: 'Estímulo',
    short: 'Toque e substâncias da presa ativam o gatilho.',
    text: 'O toque, somado a substâncias químicas da presa, estimula o cnidócito. Em muitos cnidários, um "gatilho" chamado cnidocílio participa da detecção.',
  },
  {
    title: 'Disparo',
    label: 'Disparo',
    short: 'O filamento sai em menos de 1 milionésimo de segundo.',
    text: 'A cápsula do nematocisto se abre e o filamento enrolado é lançado para fora em menos de um milionésimo de segundo.',
  },
  {
    title: 'Captura',
    label: 'Captura',
    short: 'O filamento prende a presa e pode injetar toxinas.',
    text: 'Conforme o tipo de nematocisto, o filamento perfura, enrosca ou gruda na presa, e muitos injetam toxinas que a imobilizam. O efeito depende da espécie.',
  },
  {
    title: 'Ingestão',
    label: 'Ingestão',
    short: 'Os tentáculos levam a presa até a boca.',
    text: 'Os tentáculos levam a presa até a boca, e ela passa para a cavidade gastrovascular, onde começa a digestão.',
  },
];

export const cnidocyteShortNotes = {
  organelle: 'O nematocisto é uma organela da célula, não um animal.',
  safety: 'A maioria dos cnidários não é perigosa para nós.',
};

export const cnidocyteNotes = {
  organelle:
    'O nematocisto é uma estrutura produzida dentro do cnidócito — uma organela, e não um animal independente. Depois do disparo, o cnidócito não é reaproveitado: é substituído por uma célula nova.',
  safety:
    'A maioria dos cnidários não representa perigo para nós: em muitas espécies, os nematocistos nem conseguem atravessar a pele humana. Algumas, como caravelas e certas cubomedusas, causam queimaduras dolorosas e, em casos raros, graves. Em caso de contato, não esfregue o local e procure um salva-vidas ou atendimento de saúde.',
  speed: {
    text: 'Em hidras, o disparo do nematocisto leva cerca de 700 nanossegundos, com aceleração de até 5,4 milhões de vezes a gravidade — um dos movimentos mais rápidos já medidos em seres vivos.',
    source: 'Nüchter et al., Current Biology (2006)',
  } satisfies Curiosity,
};

export const polypShort = ['Corpo cilíndrico', 'Boca para cima', 'Geralmente fixo', 'Assexuada comum'];
export const medusaShort = ['Forma de sino', 'Boca para baixo', 'Nada livremente', 'Sexuada comum'];

export const polypTraits = [
  'Geralmente tem corpo cilíndrico.',
  'Na forma típica, boca e tentáculos ficam voltados para cima.',
  'Geralmente vive fixo ao substrato, embora existam exceções.',
  'Em muitas espécies, se reproduz de forma assexuada.',
];

export const medusaTraits = [
  'Geralmente tem corpo em forma de sino ou guarda-chuva (umbrela).',
  'Na forma típica, a boca fica voltada para baixo.',
  'Geralmente nada livremente.',
  'Em diversas espécies, é a fase da reprodução sexuada.',
];

export const polypMedusaNotes = {
  examples: {
    polyp: 'Exemplos: hidra, corais, anêmonas e os pólipos de muitas águas-vivas.',
    medusa: 'Exemplos: águas-vivas como Aurelia e as medusas de muitos hidrozoários.',
  },
  sameplan:
    'Pólipo e medusa têm a mesma organização básica: uma medusa é como um pólipo "de cabeça para baixo", achatado e com a mesogleia muito mais espessa.',
  caveat:
    'Os ciclos de vida variam bastante. Alguns cnidários alternam entre pólipo e medusa, outros vivem só como pólipo (como hidras, corais e anêmonas) e outros passam quase a vida inteira como medusa.',
};

export const cnidariaGroups: Group[] = [
  {
    id: 'hydrozoa',
    short: 'Muitas formas e ciclos de vida.',
    badge: 'Caravela: colônia, não é água-viva',
    name: 'Hidrozoários',
    scientific: 'Hydrozoa',
    examples: 'Hidras, caravela-portuguesa, Obelia',
    text: 'Um grupo muito diverso em formas e ciclos de vida. Há espécies que vivem só como pólipo (como a hidra), espécies que alternam pólipo e medusa (como Obelia) e colônias que flutuam na superfície (como a caravela).',
    highlight:
      'A caravela-portuguesa (Physalia physalis) não é uma água-viva verdadeira: é uma colônia de indivíduos geneticamente idênticos, os zooides, cada um especializado em uma função — flutuar, capturar presas, digerir ou se reproduzir. Mesmo encalhada na areia, ela ainda pode queimar.',
  },
  {
    id: 'scyphozoa',
    short: 'As águas-vivas verdadeiras.',
    name: 'Cifozoários',
    scientific: 'Scyphozoa',
    examples: 'Águas-vivas verdadeiras, como Aurelia (água-viva-da-lua)',
    text: 'São as chamadas águas-vivas verdadeiras, com pelo menos 200 espécies. Em muitas delas, a medusa é a fase dominante e mais visível; o pólipo é pequeno e forma as medusas jovens por estrobilização. A mesogleia espessa dá ao corpo a consistência gelatinosa.',
  },
  {
    id: 'cubozoa',
    short: 'Sino em forma de cubo e olhos complexos.',
    badge: 'Algumas são muito venenosas',
    name: 'Cubozoários',
    scientific: 'Cubozoa',
    examples: 'Águas-vivas-caixa (cubomedusas)',
    text: 'O sino tem formato de cubo, com tentáculos nos quatro cantos. Nadam ativamente e têm olhos complexos, com lente, córnea e retina, mesmo sem um cérebro para processar as imagens.',
    highlight:
      'Algumas espécies, como Chironex fleckeri, do norte da Austrália, têm um dos venenos mais potentes que se conhecem e podem ser perigosas para humanos. Isso não vale para todas as cubomedusas.',
  },
  {
    id: 'anthozoa',
    short: 'Só pólipos: não têm fase medusa.',
    name: 'Antozoários',
    scientific: 'Anthozoa',
    examples: 'Corais, anêmonas-do-mar, gorgônias',
    text: 'Vivem apenas na forma de pólipo: não têm fase medusa no ciclo de vida. A cavidade gastrovascular é dividida por septos. Muitos corais vivem em colônias e produzem esqueleto de carbonato de cálcio; as anêmonas costumam ser solitárias e sem esqueleto. A larva plânula se fixa e vira diretamente um pólipo.',
  },
];

export const otherGroupsNote =
  'Além desses quatro, os cientistas reconhecem grupos menores, como os estaurozoários (águas-vivas que vivem presas ao substrato por um pedúnculo) e os mixozoários, parasitas microscópicos que são cnidários extremamente modificados.';

export const scyphozoanLifeCycle: Step[] = [
  {
    title: 'Medusa adulta',
    label: 'Adulta',
    short: 'Há medusas machos e fêmeas.',
    tag: 'sexuada',
    text: 'Na maioria dos cifozoários, há medusas machos e fêmeas.',
  },
  {
    title: 'Produção de gametas',
    label: 'Gametas',
    short: 'As gônadas produzem espermatozoides ou óvulos.',
    tag: 'sexuada',
    text: 'As gônadas produzem espermatozoides ou óvulos.',
  },
  {
    title: 'Fecundação',
    label: 'Fecundação',
    short: 'Na água ou junto ao corpo da fêmea.',
    tag: 'sexuada',
    text: 'Pode acontecer na água ou junto ao corpo da fêmea. Em Aurelia, os embriões ficam presos aos braços orais da fêmea por um tempo.',
  },
  {
    title: 'Larva plânula',
    label: 'Plânula',
    short: 'Larva coberta de cílios que nada.',
    text: 'Forma-se uma pequena larva coberta de cílios, que nada livremente.',
  },
  {
    title: 'Fixação',
    label: 'Fixação',
    short: 'A plânula se prende a uma rocha.',
    text: 'A plânula se prende a uma superfície firme, como uma rocha.',
  },
  {
    title: 'Pólipo',
    label: 'Pólipo',
    short: 'Pequeno pólipo que se alimenta e pode brotar.',
    tag: 'assexuada',
    text: 'Desenvolve-se um pequeno pólipo, que se alimenta e pode formar novos pólipos por brotamento.',
  },
  {
    title: 'Estrobilização',
    label: 'Estróbilo',
    short: 'O pólipo se divide em uma pilha de discos.',
    tag: 'assexuada',
    text: 'O pólipo se divide transversalmente, formando uma pilha de discos — como uma pilha de pratos.',
  },
  {
    title: 'Éfiras',
    label: 'Éfiras',
    short: 'Os discos se soltam como medusas jovens.',
    text: 'Os discos se soltam um a um e nadam como pequenas medusas jovens, chamadas éfiras.',
  },
  {
    title: 'Medusa jovem',
    label: 'Medusa jovem',
    short: 'A éfira cresce e vira adulta.',
    text: 'A éfira cresce e se torna uma medusa adulta, fechando o ciclo.',
  },
];

export const lifeCycleCaveat =
  'Este é um ciclo típico de muitas águas-vivas cifozoárias, como Aurelia — não é um ciclo universal. Antozoários e hidras não têm fase medusa, nos cubozoários cada pólipo se transforma em uma única medusa (sem estrobilização) e algumas águas-vivas, como Pelagia, se desenvolvem sem passar pela fase de pólipo.';

export const ecology: InfoCard[] = [
  {
    id: 'recifes',
    icon: 'Mountain',
    label: 'Constroem recifes',
    title: 'Construção de recifes',
    text: 'Corais construtores produzem esqueletos de carbonato de cálcio. Colônias de muitas gerações formam os recifes, as maiores estruturas de origem biológica da Terra.',
    details:
      'No Brasil, o Banco dos Abrolhos, na Bahia, é o maior conjunto de recifes do Atlântico Sul. Metade das espécies de coral de Abrolhos só existe no Brasil, e o principal construtor dos recifes é o coral-cérebro Mussismilia braziliensis.',
  },
  {
    id: 'simbiose',
    icon: 'Handshake',
    label: 'Parceria com algas',
    title: 'Parceria com algas',
    text: 'Muitos corais abrigam algas microscópicas (zooxantelas) dentro de suas células. É um mutualismo: as duas partes se beneficiam.',
    details:
      'As algas fazem fotossíntese e repassam ao coral parte do alimento que produzem. Em troca, recebem abrigo e substâncias de que precisam, como gás carbônico. Por isso, muitos corais de recife vivem em águas rasas e claras, onde há bastante luz.',
  },
  {
    id: 'abrigo',
    icon: 'House',
    label: 'Abrigo e alimento',
    title: 'Abrigo e alimento',
    text: 'Os recifes de coral abrigam mais espécies do que qualquer outro ambiente marinho: peixes, crustáceos, moluscos, esponjas e muitos outros.',
    details:
      'Um exemplo famoso é o peixe-palhaço, que vive entre os tentáculos de anêmonas protegido por uma camada de muco, e afasta peixes que se alimentariam delas.',
  },
  {
    id: 'cadeias',
    icon: 'Fish',
    label: 'Cadeias alimentares',
    title: 'Cadeias alimentares',
    text: 'Cnidários são predadores de zooplâncton, larvas e pequenos peixes, e servem de alimento para outros animais.',
    details:
      'Águas-vivas fazem parte da dieta de tartarugas marinhas, como a tartaruga-de-couro, de peixes como o peixe-lua e de alguns moluscos.',
  },
  {
    id: 'ameacas',
    icon: 'Thermometer',
    label: 'Ameaças',
    title: 'Ameaças',
    text: 'Aquecimento dos oceanos, acidificação, poluição e degradação dos habitats colocam os recifes em risco.',
    details:
      'Com a água quente demais, os corais se estressam, expulsam as algas e ficam brancos — é o branqueamento. Se o estresse durar muito, eles podem morrer. Em abril de 2024, a NOAA confirmou o quarto evento global de branqueamento já registrado. A acidificação, causada pela absorção de gás carbônico pelo oceano, dificulta a formação dos esqueletos; a poluição e os sedimentos turvam a água e reduzem a luz para as algas.',
  },
];

export const cnidariaCuriosities: Curiosity[] = [
  {
    short: 'Uma caravela encalhada na areia ainda pode queimar, mesmo semanas depois.',
    text: 'Uma caravela-portuguesa encalhada na areia ainda pode queimar, mesmo semanas depois de chegar à praia.',
    source: 'NOAA Ocean Service',
  },
  {
    short: 'A água-viva Turritopsis consegue voltar a ser pólipo depois de adulta.',
    text: 'A pequena água-viva Turritopsis consegue voltar ao estágio de pólipo depois de adulta, recomeçando o ciclo de vida.',
    source: 'Smithsonian Ocean',
  },
  {
    short: 'Cubomedusas têm olhos com lente e retina, mas nenhum cérebro.',
    text: 'As cubomedusas têm olhos com lente, córnea e retina, mas nenhum cérebro. Os cientistas ainda investigam como elas interpretam o que veem.',
    source: 'Smithsonian Ocean',
  },
];

export const reefStates = [
  {
    id: 'saudavel',
    label: 'Saudável',
    text: 'As algas dentro do coral fazem fotossíntese e ajudam a alimentá-lo.',
  },
  {
    id: 'estresse',
    label: 'Estressado',
    text: 'A água quente demais por muito tempo estressa o coral.',
  },
  {
    id: 'branqueado',
    label: 'Branqueado',
    text: 'O coral expulsa as algas e fica branco. Se durar muito, ele pode morrer.',
  },
] as const;
