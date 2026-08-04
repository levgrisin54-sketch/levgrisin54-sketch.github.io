const input = document.querySelector('#copy-input');
const characterCount = document.querySelector('#character-count');
const scoreValue = document.querySelector('#score-value');
const scoreLabel = document.querySelector('#score-label');
const scoreRing = document.querySelector('#score-ring');
const wordCount = document.querySelector('#word-count');
const sentenceCount = document.querySelector('#sentence-count');
const issueCount = document.querySelector('#issue-count');
const highlightedCopy = document.querySelector('#highlighted-copy');
const issueList = document.querySelector('#issue-list');
const emptyState = document.querySelector('#empty-state');
const toast = document.querySelector('#toast');

const samples = {
  landing: 'С помощью платформы можно управлять проектами и задачами в одном окне. В рамках раздела осуществляется настройка уведомлений. Для изменения параметров необходимо произвести нажатие на кнопку!!!',
  interface: 'В рамках данного раздела осуществляется управление настройками пользователя. Для осуществления изменения необходимо произвести нажатие на соответствующую кнопку.',
  clean: 'Соберём первую версию личного кабинета за три недели. Покажем её пяти пользователям, исправим основные сбои и только потом добавим оплату.'
};

const phraseRules = [
  {
    kind: 'Пустое обещание', severity: 'high',
    phrases: ['уникальн', 'инновационн', 'новый уровень', 'безупречн', 'лучший на рынке', 'революционн', 'передов'],
    title: 'Обещанию не хватает доказательства',
    suggestion: 'Замените оценку фактом: сроком, числом, ограничением или конкретным результатом.'
  },
  {
    kind: 'Общая формула', severity: 'medium',
    phrases: ['комплексный подход', 'эффективные решения', 'команда экспертов', 'индивидуальный подход', 'помогаем бизнесу расти', 'широкий спектр'],
    title: 'Фраза подходит почти любой компании',
    suggestion: 'Напишите, что именно вы делаете, для кого и в какой ситуации это полезно.'
  },
  {
    kind: 'Канцелярит', severity: 'medium',
    phrases: ['в рамках', 'данного', 'осуществля', 'произвести нажатие', 'является', 'с целью', 'на сегодняшний день', 'предоставляет возможность'],
    title: 'Действие спряталось за канцеляритом',
    suggestion: 'Верните действующее лицо и простой глагол: «нажмите», «выберите», «мы проверим».'
  }
];

const escapeRegExp = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordsIn = text => text.match(/[А-ЯЁа-яёA-Za-z0-9-]+/g) || [];

const makeIssue = ({ kind, title, suggestion, severity, start, end, phrase }) => ({
  kind, title, suggestion, severity, start, end, phrase
});

function inspect(text) {
  const issues = [];

  phraseRules.forEach(rule => {
    rule.phrases.forEach(phrase => {
      const expression = new RegExp(escapeRegExp(phrase) + '[А-ЯЁа-яёA-Za-z-]*', 'giu');
      for (const match of text.matchAll(expression)) {
        issues.push(makeIssue({ ...rule, start: match.index, end: match.index + match[0].length, phrase: match[0] }));
      }
    });
  });

  const urlRanges = [...text.matchAll(/https?:\/\/\S+/giu)].map(match => [match.index, match.index + match[0].length]);
  for (const match of text.matchAll(/\b[A-Za-z][A-Za-z-]{1,}\b/g)) {
    const insideUrl = urlRanges.some(([start, end]) => match.index >= start && match.index < end);
    if (insideUrl) continue;
    issues.push(makeIssue({
      kind: 'Термин без опоры', severity: 'low', start: match.index, end: match.index + match[0].length, phrase: match[0],
      title: 'Латиницу стоит проверить',
      suggestion: 'Если термин нужен, сначала объясните смысл по-русски или убедитесь, что аудитория его уже знает.'
    }));
  }

  for (const match of text.matchAll(/[!?]{2,}|\.{3,}/g)) {
    issues.push(makeIssue({
      kind: 'Пунктуация', severity: 'medium', start: match.index, end: match.index + match[0].length, phrase: match[0],
      title: 'Знаки усиливают громкость, но не аргумент',
      suggestion: 'Оставьте один знак и проверьте, достаточно ли убедительна сама фраза.'
    }));
  }

  const sentences = [...text.matchAll(/[^.!?]+(?:[.!?]+|$)/g)].filter(match => match[0].trim());
  sentences.forEach(match => {
    const sentence = match[0].trim();
    const count = wordsIn(sentence).length;
    if (count <= 24) return;
    const leadingSpace = match[0].indexOf(sentence);
    issues.push(makeIssue({
      kind: 'Длинная фраза', severity: 'low', start: match.index + leadingSpace, end: match.index + leadingSpace + sentence.length, phrase: `${count} слов`,
      title: `В предложении ${count} слов`,
      suggestion: 'Проверьте, можно ли вынести условие, пример или вторую мысль в отдельное предложение.'
    }));
  });

  const sentenceStarts = new Map();
  sentences.forEach(match => {
    const clean = match[0].trim();
    const first = wordsIn(clean)[0]?.toLocaleLowerCase('ru');
    if (!first) return;
    const entries = sentenceStarts.get(first) || [];
    entries.push({ index: match.index + match[0].indexOf(clean), word: wordsIn(clean)[0] });
    sentenceStarts.set(first, entries);
  });
  sentenceStarts.forEach((entries, first) => {
    if (entries.length < 3) return;
    entries.slice(2).forEach(entry => issues.push(makeIssue({
      kind: 'Повтор начала', severity: 'low', start: entry.index, end: entry.index + entry.word.length, phrase: entry.word,
      title: `Несколько предложений начинаются со слова «${first}»`,
      suggestion: 'Поменяйте ритм или соедините близкие мысли. Повтор можно оставить, если он намеренный.'
    })));
  });

  return { issues: issues.sort((a, b) => a.start - b.start || b.end - a.end), sentences };
}

function renderHighlights(text, issues) {
  highlightedCopy.replaceChildren();
  if (!text) return;
  const ranges = [];
  issues.forEach(issue => {
    const overlapping = ranges.find(range => issue.start < range.end && issue.end > range.start);
    if (overlapping) {
      if (issue.severity === 'high') overlapping.severity = 'high';
      return;
    }
    ranges.push({ start: issue.start, end: issue.end, severity: issue.severity });
  });
  ranges.sort((a, b) => a.start - b.start);

  let cursor = 0;
  ranges.forEach(range => {
    if (range.start > cursor) highlightedCopy.append(document.createTextNode(text.slice(cursor, range.start)));
    const mark = document.createElement('mark');
    mark.className = range.severity;
    mark.textContent = text.slice(range.start, range.end);
    highlightedCopy.append(mark);
    cursor = range.end;
  });
  if (cursor < text.length) highlightedCopy.append(document.createTextNode(text.slice(cursor)));
}

function scoreFor(issues, text) {
  if (wordsIn(text).length < 4) return 0;
  const costs = { high: 12, medium: 7, low: 4 };
  return Math.max(0, 100 - issues.reduce((sum, issue) => sum + costs[issue.severity], 0));
}

function labelFor(score) {
  if (score >= 90) return ['Замечаний мало', 'Проверьте точность фактов и тон перед публикацией.'];
  if (score >= 75) return ['Есть замечания', 'Несколько формулировок стоит уточнить перед публикацией.'];
  if (score >= 55) return ['Нужна редактура', 'Общие слова уже мешают увидеть действие и пользу. Начните с сигналов выше по списку.'];
  if (score > 0) return ['Нужно упростить', 'Сначала добавьте факты и простые глаголы, затем проверьте длину фраз.'];
  return ['Добавьте текст', 'Для проверки нужно хотя бы несколько слов.'];
}

function render() {
  const text = input.value.trim();
  const { issues, sentences } = inspect(text);
  const score = scoreFor(issues, text);
  const words = wordsIn(text);
  const [label, note] = labelFor(score);

  characterCount.textContent = `${input.value.length} ${input.value.length % 10 === 1 && input.value.length % 100 !== 11 ? 'знак' : 'знаков'}`;
  scoreValue.textContent = String(score);
  scoreLabel.textContent = label;
  scoreRing.style.setProperty('--score', `${score * 3.6}deg`);
  wordCount.textContent = String(words.length);
  sentenceCount.textContent = String(sentences.length);
  issueCount.textContent = String(issues.length);
  document.querySelector('#score-note').textContent = note;
  renderHighlights(text, issues);

  issueList.replaceChildren();
  issues.forEach(issue => {
    const item = document.createElement('li');
    const kind = document.createElement('span');
    kind.className = 'issue-kind';
    kind.textContent = issue.kind;
    const title = document.createElement('b');
    title.textContent = issue.phrase ? `«${issue.phrase}» — ${issue.title.toLocaleLowerCase('ru')}` : issue.title;
    const suggestion = document.createElement('p');
    suggestion.textContent = issue.suggestion;
    item.append(kind, title, suggestion);
    issueList.append(item);
  });
  emptyState.hidden = issues.length !== 0 || !text;
}

let inputTimer = 0;
input.addEventListener('input', () => {
  clearTimeout(inputTimer);
  inputTimer = setTimeout(render, 120);
});
document.querySelector('#analyze-button').addEventListener('click', render);

document.querySelectorAll('[data-sample]').forEach(button => {
  button.addEventListener('click', () => {
    input.value = samples[button.dataset.sample];
    render();
    input.focus();
  });
});

document.querySelector('#copy-button').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(input.value);
    toast.textContent = 'Текст скопирован';
  } catch {
    input.focus();
    input.select();
    toast.textContent = 'Текст выделен — нажмите Ctrl+C';
  }
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 1800);
});

render();
