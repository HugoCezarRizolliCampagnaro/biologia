// Gera uma página HTML com todo o conteúdo de src/data para revisão.
// Uso: npx tsx scripts/review.ts
import { writeFileSync, mkdirSync } from 'node:fs';
import * as P from '../src/data/porifera';
import * as C from '../src/data/cnidaria';
import * as K from '../src/data/comparison';
import { quizQuestions } from '../src/data/quiz';
import { whoAmIItems, organismChallenges, organismLabels } from '../src/data/games';
import { glossary } from '../src/data/glossary';
import { summary } from '../src/data/summary';
import { references } from '../src/data/references';
import { hero, homeIntro, phylumCards } from '../src/data/home';
import type { InfoCard, Step, AnatomyPart } from '../src/data/types';

const e = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ps = (arr: string[]) => arr.map((p) => `<p>${e(p)}</p>`).join('');
const cards = (arr: InfoCard[]) =>
  `<ul class="cards">${arr
    .map((c) => `<li><b>${e(c.title)}</b> — ${e(c.text)}${c.details ? `<details><summary>ver mais</summary>${e(c.details)}</details>` : ''}</li>`)
    .join('')}</ul>`;
const steps = (arr: Step[]) =>
  `<ol>${arr.map((s) => `<li><b>${e(s.title)}</b>${s.tag ? ` <span class="tag">${s.tag}</span>` : ''} — ${e(s.text)}</li>`).join('')}</ol>`;
const parts = (arr: AnatomyPart[]) =>
  `<ul class="cards">${arr.map((p) => `<li><b>${e(p.name)}</b> — ${e(p.text)}${p.note ? `<div class="note">${e(p.note)}</div>` : ''}</li>`).join('')}</ul>`;
const note = (s: string) => `<div class="note">${e(s)}</div>`;
const label = { porifero: 'Porífero', cnidario: 'Cnidário', ambos: 'Ambos' } as const;
const letters = ['A', 'B', 'C', 'D'];

const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Revisão do conteúdo</title>
<style>
:root{--bg:#F4FAFC;--ink:#061B2B;--muted:#40596b;--line:#d5e6ec;--accent:#0B3954;--teal:#0e8e90;--coral:#c4472f;--card:#fff}
@media (prefers-color-scheme:dark){:root{--bg:#061B2B;--ink:#F4FAFC;--muted:#a9c4d0;--line:#163e55;--accent:#8BE9F0;--teal:#20C5C7;--coral:#FF8066;--card:#0b2a3f}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
main{max-width:760px;margin:0 auto;padding:24px 16px 64px}
h1{font-size:1.6rem;line-height:1.2;margin:0 0 4px}h2{font-size:1.25rem;margin:40px 0 8px;padding-top:16px;border-top:2px solid var(--line);color:var(--accent)}h3{font-size:1.02rem;margin:22px 0 6px}
.lead{color:var(--muted);margin:0 0 16px}
nav{display:flex;flex-wrap:wrap;gap:6px;margin:16px 0}nav a{font-size:.85rem;padding:4px 10px;border:1px solid var(--line);border-radius:99px;color:var(--ink);text-decoration:none;background:var(--card)}
ul,ol{padding-left:20px}li{margin:6px 0}.cards{list-style:none;padding:0}.cards li{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 12px}
details{margin-top:4px;color:var(--muted)}summary{cursor:pointer;color:var(--teal);font-size:.9rem}
.note{margin:8px 0;padding:8px 12px;border-left:3px solid var(--coral);background:var(--card);border-radius:0 8px 8px 0;font-size:.95rem}
.tag{font-size:.72rem;text-transform:uppercase;letter-spacing:.04em;padding:1px 6px;border-radius:4px;background:var(--line)}
.q{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px;margin:10px 0}.q .cat{font-size:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.q ol{list-style:none;padding:0}.q li{padding:2px 0}.ok{color:var(--teal);font-weight:600}.exp{font-size:.93rem;color:var(--muted)}
table{width:100%;border-collapse:collapse;font-size:.92rem}td,th{border:1px solid var(--line);padding:6px 8px;vertical-align:top;text-align:left}th{background:var(--card)}
.ref{font-size:.92rem;word-break:break-word}a{color:var(--teal)}
</style></head><body><main>
<h1>Revisão do conteúdo científico</h1>
<p class="lead">Tudo o que vai aparecer no site Biologia Interativa. Confira os textos, as perguntas e as respostas antes de montarmos o visual. Respostas corretas aparecem em verde.</p>
<nav><a href="#inicio">Início</a><a href="#poriferos">Poríferos</a><a href="#cnidarios">Cnidários</a><a href="#comparacao">Comparação</a><a href="#quiz">Quiz</a><a href="#jogos">Jogos</a><a href="#glossario">Glossário</a><a href="#resumo">Resumo</a><a href="#referencias">Referências</a></nav>

<h2 id="inicio">Página inicial</h2>
<h3>${e(hero.title)}</h3><p>${e(hero.subtitle)}</p>
${ps(homeIntro)}
<ul class="cards">${phylumCards.map((c) => `<li><b>${c.name} (${c.scientific})</b> — ${e(c.text)}</li>`).join('')}</ul>

<h2 id="poriferos">Poríferos — os filtradores do oceano</h2>
${ps(P.poriferaIntro)}
<h3>Características principais</h3>${cards(P.poriferaCards)}
<h3>Estrutura corporal (diagrama clicável)</h3>${note(P.spongeAnatomyNote)}${parts(P.spongeParts)}
<h3>Tipos de organização do corpo</h3>${steps(P.spongeBodyTypes)}
<h3>Como a alimentação funciona</h3>${steps(P.spongeFeedingSteps)}${note(P.spongeFeedingFact.text + ' (' + P.spongeFeedingFact.source + ')')}
<h3>Reprodução assexuada</h3>${steps(P.spongeAsexual)}
<h3>Reprodução sexuada</h3>${steps(P.spongeSexual)}${note(P.spongeHermaphroditeNote)}
<h3>Exemplos</h3><ul class="cards">${P.spongeExamples.map((x) => `<li><b>${e(x.name)}</b>${x.scientific ? ` <i>(${e(x.scientific)})</i>` : ''} <span class="tag">${x.habitat}</span> — ${e(x.text)}</li>`).join('')}</ul>
<h3>Curiosidades</h3><ul>${P.spongeCuriosities.map((c) => `<li>${e(c.text)} <span class="exp">— ${e(c.source)}</span></li>`).join('')}</ul>

<h2 id="cnidarios">Cnidários — a beleza e a defesa dos oceanos</h2>
${ps(C.cnidariaIntro)}
<h3>Características principais</h3>${cards(C.cnidariaCards)}
<h3>Anatomia (diagrama clicável)</h3>${note(C.hydraOrganism)}${parts(C.hydraParts)}
<h3>Como funciona o cnidócito</h3>${steps(C.cnidocyteSteps)}${note(C.cnidocyteNotes.organelle)}${note(C.cnidocyteNotes.safety)}${note(C.cnidocyteNotes.speed.text + ' (' + C.cnidocyteNotes.speed.source + ')')}
<h3>Pólipo e medusa</h3>
<p><b>Pólipo</b></p><ul>${C.polypTraits.map((t) => `<li>${e(t)}</li>`).join('')}</ul><p class="exp">${e(C.polypMedusaNotes.examples.polyp)}</p>
<p><b>Medusa</b></p><ul>${C.medusaTraits.map((t) => `<li>${e(t)}</li>`).join('')}</ul><p class="exp">${e(C.polypMedusaNotes.examples.medusa)}</p>
${note(C.polypMedusaNotes.sameplan)}${note(C.polypMedusaNotes.caveat)}
<h3>Principais grupos</h3><ul class="cards">${C.cnidariaGroups.map((g) => `<li><b>${e(g.name)}</b> <i>(${g.scientific})</i><br><span class="exp">Exemplos: ${e(g.examples)}</span><br>${e(g.text)}${g.highlight ? `<div class="note">${e(g.highlight)}</div>` : ''}</li>`).join('')}</ul>${note(C.otherGroupsNote)}
<h3>Ciclo de vida de uma água-viva cifozoária</h3>${steps(C.scyphozoanLifeCycle)}${note(C.lifeCycleCaveat)}
<h3>Importância ecológica</h3>${cards(C.ecology)}
<h3>Curiosidades</h3><ul>${C.cnidariaCuriosities.map((c) => `<li>${e(c.text)} <span class="exp">— ${e(c.source)}</span></li>`).join('')}</ul>

<h2 id="comparacao">Poríferos x Cnidários</h2>
<table><thead><tr><th></th><th>Poríferos</th><th>Cnidários</th></tr></thead><tbody>${K.comparisonRows.map((r) => `<tr><th>${e(r.aspect)}</th><td>${e(r.porifera)}</td><td>${e(r.cnidaria)}</td></tr>`).join('')}</tbody></table>
<h3>Pontos principais</h3><ul>${K.comparisonKeyPoints.map((t) => `<li>${e(t)}</li>`).join('')}</ul>
<h3>Encontrar as diferenças (porífero, cnidário ou ambos)</h3><ul>${K.differenceItems.map((d) => `<li>${e(d.trait)} → <span class="ok">${label[d.answer]}</span><br><span class="exp">${e(d.explanation)}</span></li>`).join('')}</ul>

<h2 id="quiz">Desafio do Oceano (${quizQuestions.length} perguntas)</h2>
${quizQuestions.map((q, i) => `<div class="q"><div class="cat">${i + 1}. ${q.category}</div><b>${e(q.question)}</b><ol>${q.options.map((o, j) => `<li class="${j === q.answer ? 'ok' : ''}">${letters[j]}) ${e(o)}${j === q.answer ? ' ✓' : ''}</li>`).join('')}</ol><div class="exp">${e(q.explanation)}</div></div>`).join('')}

<h2 id="jogos">Quem sou eu?</h2>
<h3>Modo 1 — Porífero ou cnidário</h3><ul>${whoAmIItems.map((w) => `<li>"${e(w.statement)}" → <span class="ok">${label[w.answer]}</span></li>`).join('')}</ul>
<h3>Modo 2 — Qual organismo?</h3><ul>${organismChallenges.map((o) => `<li>"${e(o.clue)}" → <span class="ok">${organismLabels[o.answer]}</span></li>`).join('')}</ul>

<h2 id="glossario">Glossário (${glossary.length} termos)</h2>
<ul>${glossary.map((g) => `<li><b>${e(g.term)}</b>: ${e(g.definition)}</li>`).join('')}</ul>

<h2 id="resumo">Resumo para a prova</h2>
<h3>Poríferos</h3><ul>${summary.porifera.map((t) => `<li>${e(t)}</li>`).join('')}</ul>
<h3>Cnidários</h3><ul>${summary.cnidaria.map((t) => `<li>${e(t)}</li>`).join('')}</ul>
<h3>Não confunda</h3><ul>${summary.remember.map((t) => `<li>${e(t)}</li>`).join('')}</ul>

<h2 id="referencias">Referências (todas conferidas)</h2>
<ol class="ref">${references.map((r) => `<li>${e(r.citation)}${r.url ? ` <a href="${r.url}">${e(r.url)}</a>` : ''}<br><span class="exp">Usada para: ${e(r.usedFor)}</span></li>`).join('')}</ol>
</main></body></html>`;

mkdirSync('review', { recursive: true });
writeFileSync('review/conteudo-revisao.html', html);
console.log('ok', html.length);
