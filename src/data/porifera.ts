import type { AnatomyPart, Curiosity, Example, InfoCard, Step } from './types';

export const poriferaTagline = 'Animais que comem filtrando a água.';

export const poriferaIntro = [
  'Os poríferos, conhecidos popularmente como esponjas, são animais aquáticos. A grande maioria vive no mar, mas também existem espécies de água doce, em rios e lagos. Na fase adulta, quase todas vivem presas a rochas, conchas, raízes ou outras superfícies — por isso são chamadas de sésseis.',
  'O nome Porifera significa "portador de poros". O corpo de uma esponja é atravessado por poros, canais e câmaras por onde a água circula o tempo todo. É dessa corrente que a esponja retira alimento e oxigênio, e é nela que lança seus resíduos.',
  'Apesar de serem animais, as esponjas não possuem tecidos nem órgãos verdadeiros. Suas células se especializam em funções diferentes e trabalham com bastante independência — algumas podem até se transformar em outros tipos de célula quando necessário.',
];

export const poriferaCards: InfoCard[] = [
  {
    id: 'celular',
    icon: 'Grid2x2',
    label: 'Sem tecidos',
    title: 'Organização celular',
    text: 'As células trabalham juntas, mas não formam tecidos verdadeiros nem órgãos.',
    details:
      'Há camadas de células — como a pinacoderme, que reveste o corpo, e a camada de coanócitos — e, entre elas, uma matriz gelatinosa chamada mesoílo. Mesmo assim, essas camadas não são consideradas tecidos verdadeiros: as células têm muita independência e várias podem se transformar em outros tipos.',
  },
  {
    id: 'sistemas',
    icon: 'Ban',
    label: 'Sem órgãos',
    title: 'Sem sistemas de órgãos',
    text: 'Não possuem sistemas digestório, nervoso, circulatório nem respiratório.',
    details:
      'As trocas de gases e a eliminação de resíduos acontecem diretamente entre as células e a água que passa pelos canais. A circulação constante de água cumpre o papel que, em outros animais, é feito por sistemas especializados.',
  },
  {
    id: 'filtracao',
    icon: 'Filter',
    label: 'Filtram a água',
    title: 'Alimentação por filtração',
    text: 'Retiram da água bactérias, algas microscópicas e partículas de matéria orgânica.',
    details:
      'A corrente de água é criada pelo batimento dos flagelos dos coanócitos. Há raras exceções: as esponjas carnívoras da família Cladorhizidae capturam pequenos crustáceos com espículas e digerem as presas.',
  },
  {
    id: 'digestao',
    icon: 'CircleDot',
    label: 'Digestão nas células',
    title: 'Digestão intracelular',
    text: 'Toda a digestão acontece dentro das células.',
    details:
      'Os coanócitos englobam as partículas de alimento por fagocitose. A digestão pode continuar nos próprios coanócitos ou nos amebócitos, que depois distribuem os nutrientes pelo corpo.',
  },
  {
    id: 'reproducao',
    icon: 'Sprout',
    label: 'Sexuada e assexuada',
    title: 'Reprodução sexuada e assexuada',
    text: 'Formam novos indivíduos a partir de pedaços do corpo, de brotos, de gêmulas ou de gametas.',
    details:
      'Na reprodução sexuada surge uma larva ciliada que nada até encontrar onde se fixar. Na assexuada, não há gametas: o novo indivíduo vem de parte do corpo da esponja. Veja os detalhes na seção de reprodução.',
  },
  {
    id: 'habitat',
    icon: 'Waves',
    label: 'Maioria no mar',
    title: 'Maioria marinha',
    text: 'Vivem do litoral até grandes profundidades. Uma minoria vive em água doce.',
    details:
      'As esponjas de água doce pertencem principalmente à família Spongillidae. Na Amazônia, elas são chamadas de cauxi.',
  },
  {
    id: 'esqueleto',
    icon: 'Asterisk',
    label: 'Espículas ou espongina',
    title: 'Esqueleto de espículas ou espongina',
    text: 'A sustentação vem de espículas, de fibras de espongina ou das duas juntas, conforme a espécie.',
    details:
      'As espículas podem ser de carbonato de cálcio (nas esponjas calcárias) ou de sílica (nas esponjas-de-vidro e em muitas outras). A espongina é uma proteína parecida com o colágeno que forma fibras flexíveis. Algumas esponjas não têm esqueleto mineral.',
  },
  {
    id: 'sesseis',
    icon: 'Anchor',
    label: 'Vivem fixas',
    title: 'Adultos fixos ao substrato',
    text: 'As larvas nadam, mas os adultos geralmente vivem presos a uma superfície.',
    details:
      'Algumas espécies conseguem se deslocar muito lentamente, mas isso é exceção. Ficar parado não é problema: a esponja traz o alimento até ela movimentando a água.',
  },
];

export const spongeAnatomyNote =
  'O diagrama mostra uma esponja de organização simples (tipo asconoide), como a calcária Leucosolenia. Em esponjas mais complexas, os coanócitos ficam em canais ou câmaras e o átrio é reduzido ou nem existe — nem toda esponja tem exatamente essa anatomia.';

export const spongeParts: AnatomyPart[] = [
  {
    id: 'ostios',
    name: 'Óstios',
    short: 'Poros por onde a água entra.',
    text: 'Pequenas aberturas na superfície por onde a água entra em muitas esponjas. São tantos que o corpo funciona como uma peneira.',
    note: 'Dependendo do grupo, os óstios são formados por porócitos ou são espaços entre outras células da superfície.',
  },
  {
    id: 'porocitos',
    name: 'Porócitos',
    short: 'Células em tubo que formam poros em algumas esponjas.',
    text: 'Células em forma de tubo que formam poros em determinados grupos, como algumas esponjas calcárias de organização simples. Podem se contrair e controlar a entrada de água.',
  },
  {
    id: 'pinacocitos',
    name: 'Pinacócitos',
    short: 'Células achatadas que revestem o corpo.',
    text: 'Células achatadas que revestem a superfície externa do corpo (a pinacoderme), funcionando como uma "pele". Também podem se contrair e mudar um pouco a forma da esponja.',
  },
  {
    id: 'coanocitos',
    name: 'Coanócitos',
    short: 'Movem a água com o flagelo e capturam o alimento.',
    text: 'Células com um flagelo cercado por um colarinho. O batimento do flagelo cria a corrente de água, e as partículas de alimento ficam presas no colarinho e são englobadas pela célula.',
    note: 'São o "motor" e o "filtro" da esponja — e são característicos dos poríferos.',
  },
  {
    id: 'atrio',
    name: 'Átrio (espongiocele)',
    short: 'Cavidade central por onde a água passa antes de sair.',
    text: 'Cavidade central por onde a água passa antes de sair. Aparece em esponjas de organização mais simples; em muitas esponjas complexas é reduzida ou ausente.',
    note: 'O átrio não é um estômago: a digestão não acontece nele, e sim dentro das células.',
  },
  {
    id: 'osculo',
    name: 'Ósculo',
    short: 'Abertura por onde a água sai.',
    text: 'Abertura maior, geralmente no topo, por onde a água costuma sair levando resíduos. Uma esponja pode ter um ou vários ósculos.',
  },
  {
    id: 'amebocitos',
    name: 'Amebócitos',
    short: 'Células móveis que levam nutrientes pelo corpo.',
    text: 'Células móveis que circulam pelo mesoílo, a camada gelatinosa entre as camadas de células. Transportam nutrientes, ajudam na digestão e algumas, os arqueócitos, podem se transformar em outros tipos de célula, inclusive em gametas.',
  },
  {
    id: 'espiculas',
    name: 'Espículas e espongina',
    short: 'Peças e fibras que sustentam o corpo.',
    text: 'Formam o esqueleto de sustentação, quando presentes. As espículas são pequenas peças de calcário ou de sílica produzidas por células especializadas; a espongina forma fibras flexíveis de proteína.',
    note: 'A esponja-de-banho natural é o esqueleto de espongina de esponjas marinhas do gênero Spongia.',
  },
];

export const spongeBodyTypes: Step[] = [
  {
    title: 'Asconoide',
    short: 'Tubo simples',
    text: 'Um tubo simples. A água entra pelos poros, chega direto ao átrio — que é revestido por coanócitos — e sai pelo ósculo. Só aparece em esponjas pequenas.',
  },
  {
    title: 'Siconoide',
    short: 'Parede dobrada em canais',
    text: 'A parede do corpo é dobrada, formando canais. Os coanócitos ficam nesses canais, e o átrio não é mais revestido por eles.',
  },
  {
    title: 'Leuconoide',
    short: 'Câmaras espalhadas',
    text: 'A organização mais complexa e a mais comum. Os coanócitos ficam em pequenas câmaras espalhadas pelo corpo, ligadas por canais. Permite esponjas grandes e uma filtração mais eficiente.',
  },
];

export const spongeFeedingSteps: Step[] = [
  {
    title: 'A água entra',
    label: 'Água entra pelos poros',
    text: 'O batimento dos flagelos dos coanócitos puxa a água para dentro pelos óstios, os poros da superfície.',
  },
  {
    title: 'A água percorre o corpo',
    label: 'Circula pelos canais',
    text: 'A água circula pelos canais e pelas câmaras internas, sempre no mesmo sentido.',
  },
  {
    title: 'Os coanócitos capturam o alimento',
    label: 'Coanócitos capturam',
    text: 'Bactérias e outras partículas ficam presas no colarinho dos coanócitos e são englobadas por fagocitose.',
  },
  {
    title: 'Digestão e distribuição',
    label: 'Células digerem',
    text: 'A digestão acontece dentro das células. Os amebócitos recebem os nutrientes e os levam para outras partes da esponja. No caminho, as células também retiram oxigênio da água.',
  },
  {
    title: 'A água sai',
    label: 'Sai pelo ósculo',
    text: 'A água, agora com resíduos e gás carbônico, sai principalmente pelo ósculo, em um jato que a afasta da esponja.',
  },
];

export const spongeFeedingStat = {
  value: '20.000×',
  label: 'o volume do próprio corpo: é quanta água uma esponja pode filtrar em um dia',
};

export const spongeFeedingFact: Curiosity = {
  text: 'Em 24 horas, o volume de água que atravessa uma esponja pode chegar a 20 mil vezes o volume do próprio corpo, e muitas esponjas retêm cerca de 90% das bactérias que filtram.',
  source: 'UCMP — Universidade da Califórnia, Berkeley',
};

export const spongeAsexual: Step[] = [
  {
    title: 'Brotamento',
    short: 'Um broto cresce e pode se soltar.',
    text: 'Um broto se forma na esponja e pode se soltar e se fixar em outro lugar, ou continuar preso, formando um agrupamento.',
  },
  {
    title: 'Fragmentação e regeneração',
    label: 'Fragmentação',
    short: 'Um pedaço vira uma esponja nova.',
    text: 'Em espécies com essa capacidade, um pedaço que se separa — por ondas, tempestades ou predadores — pode regenerar e formar uma nova esponja.',
  },
  {
    title: 'Gêmulas',
    short: 'Cápsulas que resistem ao frio e à seca.',
    text: 'Algumas esponjas, principalmente de água doce, formam gêmulas: pacotes de células protegidos por um envoltório resistente, muitas vezes reforçado por espículas. Elas sobrevivem ao frio ou à seca e, quando as condições melhoram, dão origem a uma nova esponja.',
  },
];

export const spongeSexual: Step[] = [
  {
    title: 'Produção de gametas',
    label: 'Gametas',
    short: 'Formados a partir de células do corpo.',
    text: 'Os gametas se formam a partir de células como coanócitos e amebócitos, conforme a espécie.',
  },
  {
    title: 'Fecundação',
    short: 'Dentro ou fora do corpo, conforme a espécie.',
    text: 'Os espermatozoides são liberados na água e captados por outra esponja da mesma espécie. Em muitas espécies a fecundação acontece dentro do corpo, no mesoílo; em outras, os óvulos também são liberados e a fecundação ocorre na água.',
  },
  {
    title: 'Larva nadadora',
    short: 'Nada, se fixa e vira esponja.',
    text: 'Forma-se uma larva coberta de cílios, que geralmente nada por um tempo, se fixa em uma superfície e se desenvolve em uma nova esponja.',
  },
];

export const spongeHermaphroditeLabel = 'Muitas são hermafroditas';

export const spongeHermaphroditeNote =
  'Muitas esponjas são hermafroditas: o mesmo indivíduo produz gametas masculinos e femininos, muitas vezes em momentos diferentes, o que favorece a fecundação entre indivíduos diferentes. Isso não quer dizer que todas se reproduzam da mesma maneira — há espécies com sexos separados e muita variação entre os grupos.';

export const spongeExamples: Example[] = [
  {
    name: 'Esponja-de-banho',
    scientific: 'Spongia',
    habitat: 'marinha',
    short: 'Esqueleto macio de espongina.',
    text: 'Esqueleto de fibras de espongina, macio e absorvente. Foi muito usada no banho antes das esponjas sintéticas.',
  },
  {
    name: 'Cesto-de-vênus',
    scientific: 'Euplectella aspergillum',
    habitat: 'marinha',
    short: 'Esqueleto de vidro (sílica) que parece renda.',
    text: 'Esponja-de-vidro de águas profundas, com esqueleto de espículas de sílica entrelaçadas que lembra uma renda.',
  },
  {
    name: 'Leucosolenia',
    scientific: 'Leucosolenia',
    habitat: 'marinha',
    short: 'Tubinhos calcários de organização simples.',
    text: 'Esponja calcária pequena, formada por tubos finos, com a organização simples do tipo asconoide.',
  },
  {
    name: 'Esponja perfurante',
    scientific: 'Cliona',
    habitat: 'marinha',
    short: 'Perfura conchas e corais.',
    text: 'Perfura conchas e esqueletos de coral, ajudando a reciclar o calcário nos recifes.',
  },
  {
    name: 'Esponja de lago',
    scientific: 'Spongilla lacustris',
    habitat: 'água doce',
    short: 'Fica verde por causa de algas associadas.',
    text: 'Vive em lagos e rios e muitas vezes fica verde por causa de algas que vivem associadas a ela.',
  },
  {
    name: 'Cauxi',
    habitat: 'água doce',
    short: 'Esponja amazônica usada na cerâmica indígena.',
    text: 'Nome dado na Amazônia às esponjas de água doce. Suas espículas de sílica irritam a pele, e povos indígenas misturam essas esponjas à argila para fazer cerâmica.',
  },
];

export const spongeCuriosities: Curiosity[] = [
  {
    short: 'Em 1907, células de uma esponja passadas por uma peneira se juntaram de novo e formaram esponjas novas.',
    text: 'Em 1907, o biólogo H. V. Wilson passou uma esponja marinha por uma peneira fina, separando suas células. Com o tempo, as células se reagruparam e formaram pequenas esponjas funcionais.',
    source: 'Linda Hall Library',
  },
  {
    short: 'Substâncias de uma esponja caribenha serviram de modelo para o AZT, remédio usado contra o HIV.',
    text: 'Substâncias isoladas da esponja caribenha Tectitethya crypta serviram de modelo para medicamentos antivirais e anticâncer, entre eles o AZT, usado no tratamento do HIV.',
    source: 'Smithsonian Ocean',
  },
  {
    short: 'Existem esponjas carnívoras: elas prendem pequenos crustáceos com espículas.',
    text: 'Existem esponjas carnívoras: as da família Cladorhizidae capturam pequenos crustáceos com espículas e digerem as presas.',
    source: 'UCMP — Universidade da Califórnia, Berkeley',
  },
  {
    short: 'Muitas esponjas abrigam algas, bactérias e pequenos animais nos seus canais.',
    text: 'Muitas esponjas abrigam algas e bactérias que fornecem nutrientes a elas, e o corpo cheio de canais serve de esconderijo para pequenos animais.',
    source: 'UCMP — Universidade da Califórnia, Berkeley',
  },
];
