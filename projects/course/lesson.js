const curriculum = window.AFF0_CURRICULUM || [];
const lessonDetails = window.AFF0_LESSON_DETAILS || {};
const sourceLibrary = window.AFF0_SOURCE_LIBRARY || {};
const termGuide = window.AFF0_TERM_GUIDE || {};

const catalog = [];
curriculum.forEach((course, moduleIndex) => {
  const details = lessonDetails[course.id] || [];
  course.lessons.forEach((title, index) => {
    const detail = details[index];
    if (!detail) return;
    catalog.push({
      ...detail,
      id: `${course.id}-${String(index + 1).padStart(2, "0")}`,
      moduleId: course.id,
      moduleNo: course.no,
      modulePosition: moduleIndex + 1,
      moduleTitle: course.title,
      lessonNo: index + 1,
      title
    });
  });
});

const $ = (id) => document.getElementById(id);
const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function renderInlineText(value = "") {
  return String(value)
    .split(/(`[^`]+`)/g)
    .map((part) => (
      part.startsWith("`") && part.endsWith("`")
        ? `<code>${escapeHtml(part.slice(1, -1))}</code>`
        : escapeHtml(part)
    ))
    .join("");
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem("aff0-progress") || "{}");
    return {
      courses: parsed.courses && typeof parsed.courses === "object" ? parsed.courses : {},
      labs: parsed.labs && typeof parsed.labs === "object" ? parsed.labs : {},
      lessons: parsed.lessons && typeof parsed.lessons === "object" ? parsed.lessons : {}
    };
  } catch {
    return { courses: {}, labs: {}, lessons: {} };
  }
}

const state = loadState();
const params = new URLSearchParams(window.location.search);
const requestedModule = params.get("module");
const requestedLesson = params.get("lesson");
let activeIndex = catalog.findIndex((item) => (
  item.moduleId === requestedModule
  && [item.slug, item.id, String(item.lessonNo)].includes(requestedLesson)
));
if (activeIndex < 0) activeIndex = 0;
const lesson = catalog[activeIndex];
const moduleLessons = catalog.filter((item) => item.moduleId === lesson.moduleId);

function lessonUrl(item) {
  return `lesson.html?module=${encodeURIComponent(item.moduleId)}&lesson=${encodeURIComponent(item.slug)}`;
}

function saveState() {
  localStorage.setItem("aff0-progress", JSON.stringify(state));
}

function moduleDoneCount() {
  return moduleLessons.filter((item) => state.lessons[item.id]).length;
}

function pluralize(number, forms) {
  const mod100 = number % 100;
  const mod10 = number % 10;
  if (mod100 >= 11 && mod100 <= 14) return forms[2];
  if (mod10 === 1) return forms[0];
  if (mod10 >= 2 && mod10 <= 4) return forms[1];
  return forms[2];
}

function renderModuleNavigation() {
  const completed = moduleDoneCount();
  const percent = Math.round((completed / moduleLessons.length) * 100);
  $("sidebarModuleNo").textContent = `МОДУЛЬ ${String(lesson.modulePosition).padStart(2, "0")}`;
  $("sidebarModuleTitle").textContent = lesson.moduleTitle;
  $("sidebarModuleProgress").textContent = `${completed} из ${moduleLessons.length} уроков пройдено`;
  $("sidebarModulePercent").textContent = `${percent}%`;
  $("sidebarProgressBar").style.width = `${percent}%`;
  document.querySelector(".lesson-topic-head span:last-child").textContent = `${moduleLessons.length} уроков`;
  $("lessonNav").innerHTML = moduleLessons.map((item) => {
    const active = item.id === lesson.id;
    const done = Boolean(state.lessons[item.id]);
    return `
      <a class="${active ? "active" : ""} ${done ? "done" : ""}" href="${lessonUrl(item)}" ${active ? 'aria-current="page"' : ""}>
        <span>${done ? "✓" : String(item.lessonNo).padStart(2, "0")}</span>
        <b>${escapeHtml(item.title)}</b>
      </a>`;
  }).join("");
}

function renderCompleteButtons() {
  const done = Boolean(state.lessons[lesson.id]);
  const topControl = $("completeLesson");
  const bottomControl = $("completeLessonBottom");

  topControl.classList.toggle("done", done);
  topControl.setAttribute("aria-checked", String(done));
  bottomControl.classList.toggle("done", done);
  bottomControl.querySelector("small").textContent = done ? "Статус сохранён" : "Завершить этап";
  bottomControl.querySelector("b").textContent = done ? "Урок пройден" : "Отметить урок пройденным";
}

function toggleComplete() {
  if (state.lessons[lesson.id]) delete state.lessons[lesson.id];
  else state.lessons[lesson.id] = true;
  saveState();
  renderCompleteButtons();
  renderModuleNavigation();
}

function renderPaginationLink(element, target) {
  if (!target) {
    element.hidden = true;
    return;
  }
  element.hidden = false;
  element.href = lessonUrl(target);
  element.querySelector("b").textContent = target.title;
}

const lessonIcons = [
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.2"></circle><path d="M5.8 19c.6-4 2.7-6 6.2-6s5.6 2 6.2 6"></path></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 20V7.2L12 3.8l7.5 3.4V20"></path><path d="M2.8 20h18.4M8 9.2v1.5M12 9.2v1.5M16 9.2v1.5M8 14v1.5M12 14v1.5M16 14v1.5"></path></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8.4 12.7 2.2 2.1c.8.8 2 .8 2.8 0l3.5-3.5"></path><path d="m3.5 10 4.2-4 3.1 2.6M20.5 10l-4.2-4-2.8 2.1"></path><path d="m3.5 10-1.7 1.7 5.8 5.8c.8.8 2 .8 2.8 0l.6-.6M20.5 10l1.7 1.7-5.8 5.8c-.8.8-2 .8-2.8 0l-.7-.7"></path></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.2 19 6v5.4c0 4.4-2.7 7.6-7 9.4-4.3-1.8-7-5-7-9.4V6l7-2.8Z"></path><path d="m9 12 2 2 4-4"></path></svg>`
];

const conceptIcons = [
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7.5"></circle><circle cx="12" cy="12" r="3"></circle></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4V20H6Z"></path><path d="M14 3.5V8h4M9 12h6M9 15.5h6"></path></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2"></circle><circle cx="19" cy="6" r="2"></circle><circle cx="19" cy="18" r="2"></circle><path d="M7 12h4c3 0 3-6 6-6M11 12c3 0 3 6 6 6"></path></svg>`,
  `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 9.2 17 19 7"></path></svg>`
];

function theoryCardParts(item, index) {
  const custom = lesson.theoryCards?.[index];
  if (custom) return custom;

  const dashIndex = item.indexOf(" — ");
  if (dashIndex > 0) {
    return { title: item.slice(0, dashIndex), body: item.slice(dashIndex + 3) };
  }

  const colonIndex = item.indexOf(": ");
  if (colonIndex >= 8 && colonIndex <= 64) {
    return { title: item.slice(0, colonIndex), body: item.slice(colonIndex + 2) };
  }

  return {
    title: "",
    body: item
  };
}

function renderTheory() {
  const icons = lesson.theoryCards?.length ? lessonIcons : conceptIcons;
  $("theoryList").innerHTML = lesson.theory.map((item, index) => {
    const card = theoryCardParts(item, index);
    const hasTitle = Boolean(card.title);
    return `
      <article${hasTitle ? "" : ` class="lesson-card-statement" aria-label="Ключевой пункт ${index + 1}"`}>
        <div class="lesson-card-top">
          <span class="lesson-card-icon">${icons[index % icons.length]}</span>
          ${hasTitle ? `<h3>${escapeHtml(card.title)}</h3>` : `<span class="lesson-card-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>`}
        </div>
        <p>${renderInlineText(card.body)}</p>
      </article>`;
  }).join("");
}

function renderWorkflow() {
  const items = lesson.workflow.map((item) => `<li>${renderInlineText(item)}</li>`).join("");
  $("workflowList").innerHTML = items;
  $("workflowRecap").innerHTML = items;
  $("workflowCount").textContent = `${lesson.workflow.length} ${pluralize(lesson.workflow.length, ["действие", "действия", "действий"])}`;
}

function emphasizeEntities(text, entities = []) {
  let html = renderInlineText(text);
  entities
    .slice()
    .sort((a, b) => b.length - a.length)
    .forEach((entity) => {
      const safeEntity = escapeHtml(entity);
      const expression = new RegExp(safeEntity.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
      html = html.replace(expression, `<strong>${safeEntity}</strong>`);
    });
  return html;
}

function renderExample() {
  const timeline = $("exampleTimeline");
  const steps = Array.isArray(lesson.exampleSteps) ? lesson.exampleSteps : [];
  if (!steps.length) {
    timeline.className = "example-case";
    timeline.innerHTML = `
      <article class="example-case-note">
        <span>Рабочая ситуация</span>
        <p>${renderInlineText(lesson.example)}</p>
      </article>`;
  } else {
    timeline.className = `example-timeline timeline-count-${Math.min(steps.length, 4)}`;
    timeline.innerHTML = steps.map((step, index) => `
      <article class="timeline-step">
        <span class="timeline-dot">${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${emphasizeEntities(step.body, step.entities || [])}</p>
      </article>`).join("");
  }
  const caption = $("exampleText");
  caption.hidden = !lesson.exampleSummary;
  caption.textContent = lesson.exampleSummary || "";
}

function highlightPracticeTerms(text) {
  const guidedTerms = termGuide[lesson.moduleId]?.[lesson.lessonNo - 1] || [];
  const terms = [
    ...guidedTerms.map((term) => term.name),
    "технический поставщик",
    "игровая компания",
    "регулятор",
    "партнёр",
    "игрок"
  ]
    .filter((term) => term.length >= 3)
    .sort((a, b) => b.length - a.length);
  const uniqueTerms = [...new Set(terms.map((term) => term.toLowerCase()))];
  if (!uniqueTerms.length) return escapeHtml(text);
  const expression = new RegExp(`(${uniqueTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return escapeHtml(text).replace(expression, "<strong>$1</strong>");
}

function renderNodeMap(target, nodes) {
  if (!nodes?.length) {
    target.innerHTML = "";
    target.hidden = true;
    return false;
  }
  target.hidden = false;
  target.innerHTML = nodes.map((node, index) => {
    const item = `<span>${escapeHtml(node.label)}${node.note ? `<small>${escapeHtml(node.note)}</small>` : ""}</span>`;
    return `${index ? '<i aria-hidden="true">→</i>' : ""}${item}`;
  }).join("");
  return true;
}

function renderPractice() {
  $("practiceText").innerHTML = highlightPracticeTerms(lesson.practice);
  $("practiceHintText").textContent = lesson.practiceHintText || "Раздели работу на три части: исходные данные, проверка и вывод.";
  $("workspaceLabel").textContent = lesson.workspaceLabel || "Твой черновик ответа";
  $("deliverableTitle").textContent = lesson.resultTitle || "Ожидаемый результат";
  $("deliverableText").textContent = lesson.deliverable;
  const hasHintMap = renderNodeMap($("practiceHint"), lesson.practiceHint);
  const hasResultPreview = renderNodeMap($("deliverablePreview"), lesson.resultPreview);
  document.querySelector(".practice-hint").classList.toggle("text-only", !hasHintMap);
  document.querySelector(".deliverable").classList.toggle("text-only", !hasResultPreview);

  const draftKey = `aff0-practice-draft:${lesson.id}`;
  const workspace = $("practiceWorkspace");
  const status = $("workspaceStatus");
  workspace.placeholder = lesson.practicePlaceholder || "Запиши здесь факты, проверку и итоговый вывод.";
  workspace.value = localStorage.getItem(draftKey) || "";
  workspace.addEventListener("input", () => {
    localStorage.setItem(draftKey, workspace.value);
    status.textContent = "Сохранено";
    window.clearTimeout(renderPractice.statusTimer);
    renderPractice.statusTimer = window.setTimeout(() => {
      status.textContent = "Сохраняется локально";
    }, 1400);
  });
}

function renderSources() {
  $("sourcesList").innerHTML = lesson.sources.map((key) => {
    const source = sourceLibrary[key];
    if (!source) return "";
    return `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}<span>↗</span></a></li>`;
  }).join("");
  $("sources").hidden = lesson.sources.length === 0;
}

function renderLesson() {
  document.title = `${lesson.title} · iGaming: понятный старт`;
  $("breadcrumbs").innerHTML = `
    <a href="index.html">Главная</a><span>→</span>
    <a href="index.html#syllabus">Курс</a><span>→</span>
    <b>Урок ${lesson.lessonNo}</b>`;
  $("lessonPosition").textContent = `Урок ${String(activeIndex + 1).padStart(2, "0")} / ${catalog.length}`;
  $("lessonDuration").textContent = `${lesson.minutes} мин`;
  $("lessonTitle").textContent = lesson.title;
  $("lessonTitle").classList.toggle("is-long", lesson.title.length >= 40);

  const lessonTerms = termGuide[lesson.moduleId]?.[lesson.lessonNo - 1] || [];
  const learnedTerms = new Set(
    catalog
      .slice(0, activeIndex + 1)
      .flatMap((item) => termGuide[item.moduleId]?.[item.lessonNo - 1] || [])
      .map((term) => term.name.toLowerCase())
  ).size;
  const termWord = pluralize(lessonTerms.length, ["термин", "термина", "терминов"]);
  $("termProgress").textContent = `${lessonTerms.length} ${termWord} · ${learnedTerms} в словаре`;
  $("termList").innerHTML = lessonTerms.map((term) => `
    <div>
      <dt><span>Рабочее название</span><b>${escapeHtml(term.name)}</b></dt>
      <dd>${escapeHtml(term.meaning)}</dd>
    </div>`).join("");
  $("termPrimer").hidden = lessonTerms.length === 0;

  $("lessonWhy").textContent = lesson.why;
  renderTheory();
  renderWorkflow();
  renderExample();
  renderPractice();
  $("pitfallsList").innerHTML = lesson.pitfalls.map((item) => `<li>${renderInlineText(item)}</li>`).join("");
  $("checkpointQuestion").textContent = lesson.checkpoint.question;
  $("checkpointAnswer").textContent = lesson.checkpoint.answer;
  renderSources();
  renderPaginationLink($("prevLesson"), catalog[activeIndex - 1]);
  renderPaginationLink($("nextLesson"), catalog[activeIndex + 1]);
  renderCompleteButtons();
  renderModuleNavigation();
}

const lessonScreens = Array.from(document.querySelectorAll(".lesson-screen[data-step]"));
const stepLinks = Array.from(document.querySelectorAll("[data-step-link]"));
let activeStep = 1;
let scrollFrame = 0;
let navigationFrame = 0;
const reducedMotionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");

function prefersReducedMotion() {
  return Boolean(reducedMotionQuery?.matches);
}

function stopNavigationScroll() {
  if (!navigationFrame) return;
  window.cancelAnimationFrame(navigationFrame);
  navigationFrame = 0;
}

function scrollToLessonScreen(target) {
  stopNavigationScroll();
  const scrollMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop) || 0;
  const startY = window.scrollY;
  const targetY = Math.max(0, target.getBoundingClientRect().top + startY - scrollMargin);
  const distance = targetY - startY;

  if (prefersReducedMotion() || Math.abs(distance) < 2) {
    window.scrollTo(0, targetY);
    return;
  }

  const startedAt = window.performance.now();
  const duration = 320;
  const tick = (now) => {
    const progress = Math.min(1, (now - startedAt) / duration);
    const eased = progress < .5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) navigationFrame = window.requestAnimationFrame(tick);
    else navigationFrame = 0;
  };
  navigationFrame = window.requestAnimationFrame(tick);
}

function setActiveStep(step) {
  if (step === activeStep && $("topStep").textContent === `Шаг ${step} из 4`) return;
  activeStep = step;
  $("topStep").textContent = `Шаг ${step} из 4`;
  stepLinks.forEach((link) => {
    const linkStep = Number(link.dataset.stepLink);
    const isActive = linkStep === step;
    link.classList.toggle("active", isActive);
    link.classList.toggle("passed", linkStep < step);
    if (isActive) link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  });
}

function readScrollUiState() {
  const doc = document.documentElement;
  const available = doc.scrollHeight - window.innerHeight;
  const progress = available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 100;
  const marker = window.innerWidth <= 900 ? 155 : 170;
  let step = 1;
  lessonScreens.forEach((screen) => {
    if (screen.getBoundingClientRect().top <= marker) {
      step = Number(screen.dataset.step);
    }
  });
  return { progress, step };
}

function updateScrollUi() {
  scrollFrame = 0;
  const { progress, step } = readScrollUiState();
  $("readingProgress").style.transform = `scaleX(${progress / 100})`;
  setActiveStep(step);
}

function scheduleScrollUiUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(updateScrollUi);
}

function toggleTopics() {
  const nav = $("lessonNav");
  const expanded = !nav.classList.contains("expanded");
  nav.classList.toggle("expanded", expanded);
  $("toggleTopics").setAttribute("aria-expanded", String(expanded));
  $("toggleTopics").querySelector("span").textContent = expanded ? "Скрыть остальные темы" : "Показать все темы";
}

function toggleCheckpoint() {
  const body = $("checkpointBody");
  const button = $("startCheckpoint");
  const willOpen = body.hidden;
  body.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
  button.innerHTML = willOpen
    ? 'Скрыть вопрос <span aria-hidden="true">↑</span>'
    : 'Начать самопроверку <span aria-hidden="true">→</span>';
  if (willOpen) $("checkpointQuestion").focus?.({ preventScroll: true });
}

$("completeLesson").addEventListener("click", toggleComplete);
$("completeLessonBottom").addEventListener("click", toggleComplete);
$("toggleTopics").addEventListener("click", toggleTopics);
$("startCheckpoint").addEventListener("click", toggleCheckpoint);
stepLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    window.history.replaceState({}, "", `${window.location.pathname}${window.location.search}${link.hash}`);
    scrollToLessonScreen(target);
  });
});
window.addEventListener("wheel", stopNavigationScroll, { passive: true });
window.addEventListener("touchstart", stopNavigationScroll, { passive: true });
window.addEventListener("scroll", scheduleScrollUiUpdate, { passive: true });
window.addEventListener("resize", scheduleScrollUiUpdate, { passive: true });

renderLesson();
document.body.classList.add("is-ready");
updateScrollUi();
