import type { Organism, OrganismChallenge, WhoAmIItem } from './types';

export const whoAmIItems: WhoAmIItem[] = [
  {
    id: 'w1',
    statement: 'Possuo coanócitos e me alimento filtrando a água.',
    answer: 'porifero',
    explanation: 'Coanócitos são as células filtradoras das esponjas.',
  },
  {
    id: 'w2',
    statement: 'Possuo cnidócitos, usados na defesa e na captura de presas.',
    answer: 'cnidario',
    explanation: 'Os cnidócitos são característicos dos cnidários e dão nome ao filo.',
  },
  {
    id: 'w3',
    statement: 'Meu grupo inclui corais e anêmonas-do-mar.',
    answer: 'cnidario',
    explanation: 'Corais e anêmonas são cnidários do grupo dos antozoários.',
  },
  {
    id: 'w4',
    statement: 'Não possuo tecidos verdadeiros.',
    answer: 'porifero',
    explanation: 'As células das esponjas não se organizam em tecidos verdadeiros.',
  },
  {
    id: 'w5',
    statement: 'A água sai do meu corpo principalmente pelo ósculo.',
    answer: 'porifero',
    explanation: 'O ósculo é a abertura de saída da água nas esponjas.',
  },
  {
    id: 'w6',
    statement: 'Tenho uma rede nervosa difusa, sem cérebro.',
    answer: 'cnidario',
    explanation: 'Cnidários têm neurônios espalhados pelo corpo; esponjas não têm sistema nervoso.',
  },
  {
    id: 'w7',
    statement: 'Meu esqueleto pode ser formado por espículas ou por fibras de espongina.',
    answer: 'porifero',
    explanation: 'Espículas e espongina são os componentes do esqueleto das esponjas.',
  },
  {
    id: 'w8',
    statement: 'Minha cavidade digestiva tem uma única abertura, que funciona como entrada e saída.',
    answer: 'cnidario',
    explanation: 'É a cavidade gastrovascular, típica dos cnidários.',
  },
  {
    id: 'w9',
    statement: 'Algumas espécies do meu grupo formam gêmulas para sobreviver ao frio ou à seca.',
    answer: 'porifero',
    explanation: 'Gêmulas são formadas por algumas esponjas, principalmente de água doce.',
  },
  {
    id: 'w10',
    statement: 'Posso ter as formas de pólipo e de medusa ao longo da vida.',
    answer: 'cnidario',
    explanation: 'Pólipo e medusa são as formas corporais dos cnidários — nem todas as espécies têm as duas.',
  },
  {
    id: 'w11',
    statement: 'Toda a minha digestão acontece dentro das células.',
    answer: 'porifero',
    explanation: 'A digestão das esponjas é apenas intracelular.',
  },
  {
    id: 'w12',
    statement: 'Minha larva típica é chamada de plânula.',
    answer: 'cnidario',
    explanation: 'A plânula é a larva ciliada da maioria dos cnidários.',
  },
  {
    id: 'w13',
    statement: 'Tenho epiderme e gastroderme, com a mesogleia entre elas.',
    answer: 'cnidario',
    explanation: 'Essas são as camadas do corpo dos cnidários.',
  },
  {
    id: 'w14',
    statement: 'Não tenho boca: o alimento entra pelos poros com a água.',
    answer: 'porifero',
    explanation: 'Esponjas não têm boca; a água com alimento entra pelos óstios.',
  },
];

export const organismLabels: Record<Organism, string> = {
  esponja: 'Esponja',
  hidra: 'Hidra',
  coral: 'Coral',
  anemona: 'Anêmona',
  'agua-viva': 'Água-viva',
};

export const organismChallenges: OrganismChallenge[] = [
  {
    id: 'o1',
    clue: 'Pólipo de água doce, com menos de 2 cm, que se reproduz por brotamento e se prende com o disco basal.',
    answer: 'hidra',
    explanation: 'A hidra é um hidrozoário de água doce que vive só como pólipo.',
  },
  {
    id: 'o2',
    clue: 'Sino gelatinoso que nada pulsando, com a boca voltada para baixo.',
    answer: 'agua-viva',
    explanation: 'Essa é a forma de medusa, a fase mais visível das águas-vivas.',
  },
  {
    id: 'o3',
    clue: 'Pólipos que vivem em colônias, produzem esqueleto de calcário e formam recifes.',
    answer: 'coral',
    explanation: 'Corais construtores são antozoários que formam os recifes.',
  },
  {
    id: 'o4',
    clue: 'Pólipo marinho, geralmente solitário e sem esqueleto, que pode abrigar o peixe-palhaço entre os tentáculos.',
    answer: 'anemona',
    explanation: 'As anêmonas-do-mar são antozoários solitários e sem esqueleto.',
  },
  {
    id: 'o5',
    clue: 'Corpo cheio de poros, sem tecidos verdadeiros, que filtra a água o tempo todo.',
    answer: 'esponja',
    explanation: 'Esponjas são poríferos filtradores.',
  },
  {
    id: 'o6',
    clue: 'Na fase jovem, fui uma éfira liberada por um pequeno pólipo.',
    answer: 'agua-viva',
    explanation: 'Éfiras são as medusas jovens formadas na estrobilização dos cifozoários.',
  },
  {
    id: 'o7',
    clue: 'Consigo me deslocar dando "cambalhotas", apoiando ora os tentáculos, ora o disco basal.',
    answer: 'hidra',
    explanation: 'A hidra pode se soltar do substrato e se mover dessa forma.',
  },
  {
    id: 'o8',
    clue: 'Meu esqueleto pode ser de espículas de sílica entrelaçadas, como no cesto-de-vênus.',
    answer: 'esponja',
    explanation: 'O cesto-de-vênus é uma esponja-de-vidro.',
  },
  {
    id: 'o9',
    clue: 'Vivemos em colônias, construímos recifes e ficamos brancos quando a água esquenta demais por muito tempo.',
    answer: 'coral',
    explanation: 'É o branqueamento dos corais, causado pela perda das algas simbiontes.',
  },
  {
    id: 'o10',
    clue: 'Sou um pólipo marinho solitário, sem esqueleto, e consigo me dividir ao meio para formar dois indivíduos.',
    answer: 'anemona',
    explanation: 'Muitas anêmonas se reproduzem assexuadamente por divisão do corpo.',
  },
];
