import type { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  // Conceitos básicos
  {
    id: 'q1',
    category: 'Conceitos básicos',
    question: 'O nome Porifera significa "portador de poros". Por que esse nome combina com as esponjas?',
    options: [
      'Porque elas têm células que disparam filamentos venenosos.',
      'Porque o corpo delas é cheio de poros por onde a água entra.',
      'Porque todas têm esqueleto de calcário cheio de furos.',
      'Porque vivem apenas dentro de rochas porosas.',
    ],
    answer: 1,
    explanation:
      'A água entra no corpo da esponja por muitos poros, circula por canais e câmaras e sai pelo ósculo. Nem todas têm esqueleto de calcário: há espículas de sílica e fibras de espongina.',
  },
  {
    id: 'q2',
    category: 'Conceitos básicos',
    question: 'O nome Cnidaria vem do grego knide, "urtiga". A que esse nome se refere?',
    options: [
      'À cor avermelhada de muitas águas-vivas.',
      'Ao hábito de viver presos a plantas aquáticas.',
      'Aos cnidócitos, células com estruturas que podem "queimar" ao toque.',
      'À capacidade de filtrar grandes volumes de água.',
    ],
    answer: 2,
    explanation:
      'Assim como a urtiga causa ardência, os cnidócitos disparam nematocistos que podem injetar toxinas. Essas células são características do filo.',
  },
  {
    id: 'q3',
    category: 'Conceitos básicos',
    question: 'Qual afirmação sobre a caravela-portuguesa está correta?',
    options: [
      'É uma colônia de indivíduos especializados, e não uma água-viva verdadeira.',
      'É uma esponja que flutua graças ao ar preso nos poros.',
      'É uma água-viva verdadeira do grupo dos cifozoários.',
      'É um molusco parente das lulas.',
    ],
    answer: 0,
    explanation:
      'A caravela é um hidrozoário colonial: cada zooide tem uma função, como flutuar, capturar presas, digerir ou se reproduzir. Águas-vivas verdadeiras são os cifozoários.',
  },
  // Anatomia
  {
    id: 'q4',
    category: 'Anatomia',
    question: 'Por qual estrutura a água geralmente sai do corpo de uma esponja?',
    options: ['Óstio', 'Coanócito', 'Cnidócito', 'Ósculo'],
    answer: 3,
    explanation:
      'A água entra pelos óstios (poros) e sai principalmente pelo ósculo, uma abertura maior. Coanócitos são células que movimentam a água; cnidócitos são dos cnidários.',
  },
  {
    id: 'q5',
    category: 'Anatomia',
    question: 'Nos cnidários, o que é a mesogleia?',
    options: [
      'Um órgão responsável pela respiração.',
      'Uma camada gelatinosa entre a epiderme e a gastroderme.',
      'A célula que dispara o nematocisto.',
      'A abertura por onde os restos de alimento saem.',
    ],
    answer: 1,
    explanation:
      'A mesogleia fica entre as duas camadas de tecido. Na hidra ela é fina; nas águas-vivas é espessa e forma a maior parte do corpo.',
  },
  {
    id: 'q6',
    category: 'Anatomia',
    question: 'Na maioria das formas típicas, a cavidade gastrovascular dos cnidários possui:',
    options: [
      'duas aberturas, uma boca e um ânus.',
      'várias aberturas chamadas óstios.',
      'uma única abertura, que serve de entrada do alimento e saída dos restos.',
      'nenhuma abertura, pois a digestão acontece fora do corpo.',
    ],
    answer: 2,
    explanation:
      'Pela boca entra o alimento e saem os restos não digeridos. Ter boca e ânus separados (sistema digestório completo) é característica de outros grupos de animais.',
  },
  // Alimentação
  {
    id: 'q7',
    category: 'Alimentação',
    question: 'Qual célula da esponja movimenta a água com seu flagelo e captura partículas de alimento?',
    options: ['Coanócito', 'Cnidócito', 'Amebócito', 'Porócito'],
    answer: 0,
    explanation:
      'O coanócito tem um flagelo cercado por um colarinho: o flagelo cria a corrente e o colarinho retém as partículas. O amebócito transporta nutrientes; o porócito forma poros.',
  },
  {
    id: 'q8',
    category: 'Alimentação',
    question: 'Como ocorre a digestão nos cnidários?',
    options: [
      'Apenas dentro das células, como nas esponjas.',
      'Apenas fora do corpo, por enzimas lançadas na água.',
      'Em um sistema digestório completo, com estômago e intestino.',
      'Começa na cavidade gastrovascular, fora das células, e termina dentro delas.',
    ],
    answer: 3,
    explanation:
      'Enzimas da gastroderme quebram o alimento na cavidade (digestão extracelular), e depois as células englobam os fragmentos e completam a digestão (intracelular).',
  },
  {
    id: 'q9',
    category: 'Alimentação',
    question: 'O que são os nematocistos?',
    options: [
      'Pequenos parasitas que vivem nos tentáculos dos cnidários.',
      'Estruturas dentro dos cnidócitos que disparam um filamento.',
      'Glândulas que produzem o esqueleto dos corais.',
      'Células das esponjas que filtram a água.',
    ],
    answer: 1,
    explanation:
      'O nematocisto é uma organela produzida pelo cnidócito, e não um animal independente. Ele dispara um filamento que pode perfurar, enroscar ou injetar toxinas na presa.',
  },
  // Reprodução
  {
    id: 'q10',
    category: 'Reprodução',
    question: 'O que são as gêmulas?',
    options: [
      'Larvas nadadoras dos cnidários.',
      'Gametas masculinos das esponjas.',
      'Pacotes de células protegidos por um envoltório, formados por algumas esponjas, principalmente de água doce.',
      'Brotos de hidra que já nascem com tentáculos.',
    ],
    answer: 2,
    explanation:
      'As gêmulas resistem ao frio e à seca. Quando as condições melhoram, dão origem a uma nova esponja — uma forma de reprodução assexuada.',
  },
  {
    id: 'q11',
    category: 'Reprodução',
    question:
      'No ciclo típico de uma água-viva cifozoária, como se chama o processo em que o pólipo se divide em discos que se soltam como éfiras?',
    options: ['Fragmentação', 'Estrobilização', 'Gemulação', 'Fecundação'],
    answer: 1,
    explanation:
      'Na estrobilização, o pólipo se divide transversalmente em uma pilha de discos. Cada disco se solta como uma éfira, que cresce até virar medusa.',
  },
  {
    id: 'q12',
    category: 'Reprodução',
    question: 'Muitas esponjas são hermafroditas. Isso significa que:',
    options: [
      'um mesmo indivíduo pode produzir gametas masculinos e femininos.',
      'elas só se reproduzem de forma assexuada.',
      'todas as esponjas se reproduzem exatamente da mesma maneira.',
      'elas trocam de espécie ao longo da vida.',
    ],
    answer: 0,
    explanation:
      'Muitas produzem os dois tipos de gameta, frequentemente em momentos diferentes. Mas há espécies com sexos separados e muita variação entre os grupos.',
  },
  // Ecologia
  {
    id: 'q13',
    category: 'Ecologia',
    question: 'Que relação existe entre muitos corais e as algas que vivem dentro de suas células?',
    options: [
      'Parasitismo: as algas consomem o coral aos poucos.',
      'Predação: o coral digere as algas assim que elas entram.',
      'Competição: os dois disputam a mesma presa.',
      'Mutualismo: as algas fornecem alimento da fotossíntese e o coral oferece abrigo.',
    ],
    answer: 3,
    explanation:
      'As zooxantelas fazem fotossíntese e repassam parte do alimento ao coral, que oferece abrigo e substâncias como gás carbônico. As duas partes se beneficiam.',
  },
  {
    id: 'q14',
    category: 'Ecologia',
    question: 'O branqueamento dos corais acontece principalmente quando:',
    options: [
      'o coral, estressado por água quente demais, expulsa as algas simbiontes.',
      'o coral envelhece e o esqueleto perde a cor naturalmente.',
      'a água esfria e os corais entram em hibernação.',
      'os corais acumulam sal em excesso no esqueleto.',
    ],
    answer: 0,
    explanation:
      'Sem as algas, o esqueleto branco aparece através dos tecidos transparentes. Se o estresse durar muito, o coral pode morrer, porque perde boa parte do alimento que as algas forneciam.',
  },
  {
    id: 'q15',
    category: 'Ecologia',
    question: 'Por que as esponjas são importantes para os ambientes aquáticos?',
    options: [
      'Produzem a maior parte do oxigênio dos oceanos.',
      'Constroem os recifes de coral.',
      'Filtram grandes volumes de água e servem de abrigo para outros organismos.',
      'Controlam a população de tubarões.',
    ],
    answer: 2,
    explanation:
      'Uma esponja pode filtrar, em um dia, milhares de vezes o volume do próprio corpo. Quem constrói os recifes são os corais, que são cnidários.',
  },
  // Comparação
  {
    id: 'q16',
    category: 'Comparação',
    question: 'Qual destas características aparece nos cnidários, mas não nos poríferos?',
    options: ['Coanócitos', 'Espículas', 'Ósculo', 'Rede nervosa'],
    answer: 3,
    explanation:
      'Cnidários têm uma rede nervosa difusa; esponjas não têm sistema nervoso. Coanócitos, espículas e ósculo são estruturas das esponjas.',
  },
  {
    id: 'q17',
    category: 'Comparação',
    question: 'Complete: coanócitos estão para os poríferos assim como ______ estão para os cnidários.',
    options: ['amebócitos', 'cnidócitos', 'espículas', 'gêmulas'],
    answer: 1,
    explanation:
      'Cada filo tem sua célula característica: os coanócitos filtram a água nas esponjas, e os cnidócitos capturam presas e defendem os cnidários.',
  },
  {
    id: 'q18',
    category: 'Comparação',
    question: 'Qual afirmação compara corretamente os dois filos?',
    options: [
      'Os dois possuem tecidos verdadeiros e sistema nervoso.',
      'Poríferos não formam tecidos verdadeiros; cnidários possuem tecidos verdadeiros.',
      'Poríferos fazem digestão extracelular; cnidários, apenas intracelular.',
      'Os dois capturam presas usando tentáculos.',
    ],
    answer: 1,
    explanation:
      'Essa é a principal diferença entre os filos. Além disso, esponjas fazem só digestão intracelular e filtram a água; cnidários fazem digestão extra e intracelular e capturam presas.',
  },
];
