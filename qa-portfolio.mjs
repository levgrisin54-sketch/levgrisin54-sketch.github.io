import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(root, '.qa');
const profileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'portfolio-qa-'));
const port = 9900 + Math.floor(Math.random() * 90);
const debugUrl = `http://127.0.0.1:${port}`;
const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
const publicRoot = process.env.QA_BASE_URL ? new URL('./', process.env.QA_BASE_URL).href : null;
const pageUrl = (relativePath, search = '') => publicRoot
  ? `${new URL(relativePath, publicRoot).href}${search}`
  : `${pathToFileURL(path.join(root, ...relativePath.split('/'))).href}${search}`;

const pages = [
  { name: 'portfolio', url: pageUrl('index.html'), revealSelector: '[data-reveal]', interaction: 'portfolio' },
  { name: 'second-look', url: pageUrl('second-look/index.html'), revealSelector: null, interaction: 'second-look' },
  { name: 'course-demo', url: pageUrl('projects/course/index.html'), revealSelector: null, interaction: 'course', viewportNames: ['desktop', 'mobile320'] },
  { name: 'course-lesson-demo', url: pageUrl('projects/course/lesson.html', '?module=industry&lesson=ecosystem'), revealSelector: null, interaction: 'course-lesson', viewportNames: ['desktop', 'mobile320'] },
  { name: 'hottour-demo', url: pageUrl('projects/hottour/index.html'), revealSelector: '.reveal', interaction: 'hottour', viewportNames: ['desktop', 'mobile320'] }
];
const auditedPages = process.env.QA_PAGE ? pages.filter(page => page.name === process.env.QA_PAGE) : pages;
const viewports = [
  { name: 'desktop', width: 1440, height: 1000, mobile: false },
  { name: 'tablet', width: 820, height: 1180, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true },
  { name: 'mobile320', width: 320, height: 720, mobile: true }
];

const chromeCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
].filter(Boolean);
const chromePath = chromeCandidates.find(candidate => fs.existsSync(candidate));
if (!chromePath) throw new Error('Chrome или Edge не найден. Укажи путь в CHROME_PATH.');

fs.mkdirSync(outputDir, { recursive: true });
const browser = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  '--remote-allow-origins=*',
  `--user-data-dir=${profileDir}`,
  'about:blank'
], { stdio: 'ignore', windowsHide: true });

async function readJson(url, attempts = 100) {
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {}
    await wait(75);
  }
  throw new Error(`Не удалось подключиться к Chrome: ${url}`);
}

class CdpClient {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.pending = new Map();
    this.listeners = new Map();
    this.id = 0;
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener('open', resolve, { once: true });
      this.socket.addEventListener('error', reject, { once: true });
    });
    this.socket.addEventListener('message', event => {
      const message = JSON.parse(event.data);
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result ?? {});
        return;
      }
      for (const listener of this.listeners.get(message.method) ?? []) listener(message.params ?? {});
    });
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.id;
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) ?? [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  once(method) {
    return new Promise(resolve => {
      const listener = params => {
        const listeners = this.listeners.get(method) ?? [];
        this.listeners.set(method, listeners.filter(candidate => candidate !== listener));
        resolve(params);
      };
      this.on(method, listener);
    });
  }

  close() { this.socket.close(); }
}

let client;
const issues = [];
const runtimeErrors = [];
const requestFailures = [];
const report = { checkedAt: new Date().toISOString(), pages: {} };
const addIssue = (page, viewport, type, detail) => issues.push({ page, viewport, type, detail });

async function evaluate(expression) {
  const response = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
    userGesture: true
  });
  if (response.exceptionDetails) {
    const description = response.exceptionDetails.exception?.description ?? response.exceptionDetails.text;
    throw new Error(description || 'Ошибка Runtime.evaluate');
  }
  return response.result.value;
}

async function navigate(url) {
  const loaded = client.once('Page.loadEventFired');
  await client.send('Page.navigate', { url });
  await loaded;
  await evaluate(`(async () => {
    await Promise.race([document.fonts.ready, new Promise(resolve => setTimeout(resolve, 5000))]);
    await Promise.race([Promise.all([...document.images].map(image => image.complete ? null : new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    }))), new Promise(resolve => setTimeout(resolve, 5000))]);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  })()`);
}

async function settlePage() {
  await evaluate(`(async () => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    const step = Math.max(380, Math.floor(innerHeight * .7));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      scrollTo(0, y);
      await new Promise(resolve => setTimeout(resolve, 55));
    }
    scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previous;
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  })()`);
  await wait(850);
}

async function collectLayout(revealSelector) {
  return evaluate(`(() => {
    const visible = element => {
      const style = getComputedStyle(element);
      const box = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && box.width > 0 && box.height > 0;
    };
    const selector = element => {
      if (element.id) return '#' + CSS.escape(element.id);
      const classes = [...element.classList].slice(0, 2).map(CSS.escape).join('.');
      return element.tagName.toLowerCase() + (classes ? '.' + classes : '');
    };
    const accessibleName = element => (element.getAttribute('aria-label') || element.innerText || element.textContent || element.value || '').trim();
    const elements = [...document.querySelectorAll('body *')].filter(visible);
    const controls = elements.filter(element => element.matches('a, button, textarea, input, select, summary'));
    const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')].map(element => ({ level: Number(element.tagName.slice(1)), text: element.textContent.trim().replace(/\\s+/g, ' ') }));
    const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
    const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    const headingJumps = headings.slice(1).filter((heading, index) => heading.level > headings[index].level + 1);
    const overflow = elements.filter(element => {
      const box = element.getBoundingClientRect();
      if (!(box.left < -1 || box.right > innerWidth + 1)) return false;
      for (let ancestor = element.parentElement; ancestor; ancestor = ancestor.parentElement) {
        const overflowX = getComputedStyle(ancestor).overflowX;
        if (['auto', 'scroll'].includes(overflowX) && ancestor.scrollWidth > ancestor.clientWidth + 1) return false;
      }
      return true;
    }).slice(0, 25).map(element => {
      const box = element.getBoundingClientRect();
      return { selector: selector(element), left: Math.round(box.left), right: Math.round(box.right), width: Math.round(box.width) };
    });
    const clippedText = elements.filter(element => {
      if (element.matches('.sr-only') || element.children.length || !element.textContent.trim()) return false;
      const style = getComputedStyle(element);
      const clips = ['hidden', 'clip'].includes(style.overflowX) || ['hidden', 'clip'].includes(style.overflowY);
      return clips && (element.scrollWidth > element.clientWidth + 1 || element.scrollHeight > element.clientHeight + 1);
    }).slice(0, 25).map(selector);
    const tinyText = elements.filter(element => {
      if (element.matches('.sr-only') || element.children.length || !element.textContent.trim()) return false;
      const size = Number.parseFloat(getComputedStyle(element).fontSize);
      return size > 0 && size < 12;
    }).slice(0, 30).map(element => ({ selector: selector(element), size: getComputedStyle(element).fontSize, text: element.textContent.trim().slice(0, 60) }));
    const smallTargets = controls.filter(element => {
      if (element.matches('textarea, input, select')) return false;
      const box = element.getBoundingClientRect();
      return box.width < 40 || box.height < 40;
    }).slice(0, 30).map(element => {
      const box = element.getBoundingClientRect();
      return { selector: selector(element), width: Math.round(box.width), height: Math.round(box.height), name: accessibleName(element).slice(0, 60) };
    });
    const namelessControls = controls.filter(element => {
      if (element.matches('input, textarea, select')) return !element.labels?.length && !element.getAttribute('aria-label') && !element.getAttribute('aria-labelledby');
      return !accessibleName(element);
    }).map(element => ({ selector: selector(element), html: element.outerHTML.slice(0, 240) }));
    const blankLinkProblems = [...document.querySelectorAll('a[target="_blank"]')].filter(link => !/\\bnoopener\\b|\\bnoreferrer\\b/.test(link.rel)).map(selector);
    const missingAlts = [...document.images].filter(image => !image.hasAttribute('alt')).map(selector);
    const brokenImages = [...document.images].filter(image => image.complete && image.naturalWidth === 0).map(image => image.currentSrc || image.src);
    const distortedProjectImages = [...document.querySelectorAll('.project-window img')].filter(image => {
      if (!image.naturalWidth || !image.naturalHeight) return false;
      const box = image.getBoundingClientRect();
      const naturalRatio = image.naturalWidth / image.naturalHeight;
      const renderedRatio = box.width / box.height;
      return Math.abs(naturalRatio - renderedRatio) > .03;
    }).map(image => {
      const box = image.getBoundingClientRect();
      return {
        selector: selector(image),
        natural: image.naturalWidth + 'x' + image.naturalHeight,
        rendered: Math.round(box.width) + 'x' + Math.round(box.height)
      };
    });
    const durations = elements.flatMap(element => {
      const style = getComputedStyle(element);
      return [...style.transitionDuration.split(','), ...style.animationDuration.split(',')].map(value => value.trim().endsWith('ms') ? Number.parseFloat(value) : Number.parseFloat(value) * 1000).filter(Number.isFinite);
    });
    return {
      viewport: { width: innerWidth, height: innerHeight },
      page: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight },
      overflow, clippedText, tinyText, smallTargets, brokenImages, distortedProjectImages,
      semantics: { h1Count: headings.filter(item => item.level === 1).length, headings, duplicateIds, headingJumps, namelessControls, blankLinkProblems, missingAlts },
      hiddenReveals: ${JSON.stringify(revealSelector)} ? [...document.querySelectorAll(${JSON.stringify(revealSelector)})].filter(element => Number.parseFloat(getComputedStyle(element).opacity) < .99).length : 0,
      runningAnimations: document.getAnimations().filter(animation => animation.playState === 'running').length,
      longestMotionMs: Math.max(0, ...durations),
      layoutShift: (window.__qaLayoutShifts || []).reduce((sum, value) => sum + value, 0),
      bodyFont: getComputedStyle(document.body).fontFamily,
      fontsReady: document.fonts.status
    };
  })()`);
}

async function capture(filename) {
  const metrics = await client.send('Page.getLayoutMetrics');
  const content = metrics.cssContentSize ?? metrics.contentSize;
  const captureHeight = Math.min(Math.ceil(content.height), 12000);
  console.log(`qa:capture ${filename} ${Math.ceil(content.width)}x${captureHeight}`);
  const screenshot = await client.send('Page.captureScreenshot', {
    format: 'jpeg', quality: 84, fromSurface: true, captureBeyondViewport: true,
    clip: { x: 0, y: 0, width: Math.ceil(content.width), height: captureHeight, scale: 1 }
  });
  fs.writeFileSync(path.join(outputDir, `${filename}.jpg`), Buffer.from(screenshot.data, 'base64'));
}

async function portfolioInteractions(viewport) {
  return evaluate(`(async () => {
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const mobileButton = document.querySelector('[data-viewport="mobile"]');
    mobileButton.click();
    await wait(700);
    const demo = {
      mode: document.querySelector('#responsive-demo').className,
      label: document.querySelector('#demo-width').textContent,
      pressed: mobileButton.getAttribute('aria-pressed'),
      activeCount: document.querySelectorAll('[data-viewport].is-active').length
    };
    document.querySelector('[data-viewport="desktop"]').click();
    const result = { demo };
    if (${viewport.mobile}) {
      const toggle = document.querySelector('.nav-toggle');
      toggle.click();
      await wait(30);
      const nav = document.querySelector('#site-nav');
      const box = nav.getBoundingClientRect();
      result.menu = {
        open: document.body.classList.contains('nav-open'),
        expanded: toggle.getAttribute('aria-expanded'),
        insideViewport: box.left >= 0 && box.right <= innerWidth && box.top >= 0 && box.bottom <= innerHeight
      };
      document.querySelector('main').click();
      await wait(20);
      result.menu.outsideClickCloses = !document.body.classList.contains('nav-open');
    }
    return result;
  })()`);
}

async function secondLookInteractions() {
  return evaluate(`(async () => {
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const initial = {
      score: Number(document.querySelector('#score-value').textContent),
      issues: Number(document.querySelector('#issue-count').textContent),
      renderedIssues: document.querySelectorAll('#issue-list li').length,
      highlighted: document.querySelectorAll('#highlighted-copy mark').length
    };
    document.querySelector('[data-sample="clean"]').click();
    await wait(40);
    const clean = {
      score: Number(document.querySelector('#score-value').textContent),
      issues: Number(document.querySelector('#issue-count').textContent),
      emptyVisible: !document.querySelector('#empty-state').hidden
    };
    document.querySelector('[data-sample="interface"]').click();
    await wait(40);
    const bureaucratic = {
      score: Number(document.querySelector('#score-value').textContent),
      issues: Number(document.querySelector('#issue-count').textContent),
      renderedIssues: document.querySelectorAll('#issue-list li').length
    };
    const input = document.querySelector('#copy-input');
    input.value = 'Короткий текст.';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await wait(180);
    const liveUpdate = {
      words: Number(document.querySelector('#word-count').textContent),
      characters: document.querySelector('#character-count').textContent,
      highlightedText: document.querySelector('#highlighted-copy').textContent
    };
    return { initial, clean, bureaucratic, liveUpdate };
  })()`);
}

async function courseInteractions() {
  return evaluate(`(() => ({
    title: document.querySelector('h1')?.textContent.trim() || '',
    modules: document.querySelector('#syllabusGrid')?.children.length || 0,
    lessons: document.querySelectorAll('#syllabusGrid a[href*="lesson.html"]').length,
    firstLesson: document.querySelector('#heroPrimaryAction')?.getAttribute('href') || '',
    backLink: document.querySelector('.portfolio-demo-bar a')?.getAttribute('href') || ''
  }))()`);
}

async function courseLessonInteractions() {
  return evaluate(`(() => ({
    url: location.href,
    title: document.querySelector('#lessonTitle')?.textContent.trim() || '',
    navItems: document.querySelectorAll('#lessonNav a').length,
    theoryCards: document.querySelectorAll('#theoryList article').length,
    nextLesson: document.querySelector('#nextLesson')?.getAttribute('href') || '',
    backLink: document.querySelector('.portfolio-demo-bar a')?.getAttribute('href') || '',
    curriculumItems: window.AFF0_CURRICULUM?.length || 0,
    lessonDetailGroups: Object.keys(window.AFF0_LESSON_DETAILS || {}).length,
    loadedScripts: [...document.scripts].map(script => ({ src: script.src, loaded: performance.getEntriesByName(script.src).length > 0 }))
  }))()`);
}

async function hottourInteractions() {
  return evaluate(`(async () => {
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const initialCards = document.querySelectorAll('.trip').length;
    const turkey = document.querySelector('[data-filter="turkey"]');
    turkey.click();
    await wait(30);
    const filteredCards = document.querySelectorAll('.trip').length;
    const filterPressed = turkey.getAttribute('aria-pressed');
    document.querySelector('[data-filter="all"]').click();

    document.querySelector('[data-open-form]').click();
    await wait(20);
    const modal = document.querySelector('#tour-modal');
    const form = document.querySelector('#tour-form');
    const submitPrevented = !form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    const tel = document.querySelector('a[href^="tel:"]');
    const contactPrevented = !tel.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    const noticeVisible = document.querySelector('.portfolio-demo-notice')?.classList.contains('is-visible') || false;
    return {
      initialCards, filteredCards, filterPressed,
      modalOpen: modal.open,
      submitPrevented, contactPrevented, noticeVisible,
      backLink: document.querySelector('.portfolio-demo-bar a')?.getAttribute('href') || ''
    };
  })()`);
}

async function runInteractions(page, viewport) {
  if (page.interaction === 'portfolio') return portfolioInteractions(viewport);
  if (page.interaction === 'second-look') return secondLookInteractions();
  if (page.interaction === 'course') return courseInteractions();
  if (page.interaction === 'course-lesson') return courseLessonInteractions();
  if (page.interaction === 'hottour') return hottourInteractions();
  return {};
}

function auditLayout(page, viewport, layout) {
  if (layout.page.width > viewport.width + 1) addIssue(page.name, viewport.name, 'page-overflow', layout.page);
  if (layout.overflow.length) addIssue(page.name, viewport.name, 'element-overflow', layout.overflow);
  if (layout.clippedText.length) addIssue(page.name, viewport.name, 'clipped-text', layout.clippedText);
  if (layout.tinyText.length) addIssue(page.name, viewport.name, 'tiny-text', layout.tinyText);
  if (viewport.mobile && layout.smallTargets.length) addIssue(page.name, viewport.name, 'small-targets', layout.smallTargets);
  if (layout.brokenImages.length) addIssue(page.name, viewport.name, 'broken-images', layout.brokenImages);
  if (layout.distortedProjectImages.length) addIssue(page.name, viewport.name, 'distorted-project-images', layout.distortedProjectImages);
  if (layout.semantics.h1Count !== 1) addIssue(page.name, viewport.name, 'h1-count', layout.semantics.h1Count);
  if (layout.semantics.duplicateIds.length) addIssue(page.name, viewport.name, 'duplicate-ids', layout.semantics.duplicateIds);
  if (layout.semantics.headingJumps.length) addIssue(page.name, viewport.name, 'heading-jumps', layout.semantics.headingJumps);
  if (layout.semantics.namelessControls.length) addIssue(page.name, viewport.name, 'nameless-controls', layout.semantics.namelessControls);
  if (layout.semantics.blankLinkProblems.length) addIssue(page.name, viewport.name, 'unsafe-blank-links', layout.semantics.blankLinkProblems);
  if (layout.semantics.missingAlts.length) addIssue(page.name, viewport.name, 'missing-alts', layout.semantics.missingAlts);
  if (layout.hiddenReveals) addIssue(page.name, viewport.name, 'hidden-reveals', layout.hiddenReveals);
  if (layout.runningAnimations) addIssue(page.name, viewport.name, 'running-animations', layout.runningAnimations);
  if (layout.longestMotionMs > 800) addIssue(page.name, viewport.name, 'slow-motion', layout.longestMotionMs);
  if (layout.layoutShift > .1) addIssue(page.name, viewport.name, 'layout-shift', layout.layoutShift);
  if (layout.fontsReady !== 'loaded') addIssue(page.name, viewport.name, 'fonts-not-ready', layout.fontsReady);
}

try {
  const tabs = await readJson(`${debugUrl}/json/list`);
  const tab = tabs.find(candidate => candidate.type === 'page');
  if (!tab) throw new Error('Не найдена вкладка Chrome для QA.');
  client = new CdpClient(tab.webSocketDebuggerUrl);
  await client.open();
  await client.send('Page.enable');
  await client.send('Runtime.enable');
  await client.send('Network.enable');
  await client.send('Network.setCacheDisabled', { cacheDisabled: true });
  await client.send('Page.addScriptToEvaluateOnNewDocument', { source: `
    window.__qaLayoutShifts = [];
    try {
      new PerformanceObserver(list => {
        for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__qaLayoutShifts.push(entry.value);
      }).observe({ type: 'layout-shift', buffered: true });
    } catch {}
  ` });
  client.on('Runtime.exceptionThrown', ({ exceptionDetails }) => {
    runtimeErrors.push(exceptionDetails.exception?.description ?? exceptionDetails.text ?? 'Unknown runtime error');
  });
  client.on('Network.loadingFailed', ({ errorText, blockedReason, canceled }) => {
    if (!canceled && errorText !== 'net::ERR_ABORTED') requestFailures.push({ errorText, blockedReason });
  });

  for (const page of auditedPages) {
    report.pages[page.name] = { viewports: {} };
    const configuredViewports = page.viewportNames ? viewports.filter(viewport => page.viewportNames.includes(viewport.name)) : viewports;
    const pageViewports = process.env.QA_VIEWPORT ? configuredViewports.filter(viewport => viewport.name === process.env.QA_VIEWPORT) : configuredViewports;
    for (const viewport of pageViewports) {
      console.log(`qa:start ${page.name} ${viewport.name}`);
      await client.send('Emulation.setDeviceMetricsOverride', {
        width: viewport.width, height: viewport.height, deviceScaleFactor: 1, mobile: viewport.mobile,
        screenWidth: viewport.width, screenHeight: viewport.height
      });
      await client.send('Emulation.setEmulatedMedia', { media: '', features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
      await navigate(page.url);
      await settlePage();
      const layout = await collectLayout(page.revealSelector);
      await capture(`${page.name}-${viewport.name}`);
      const interactions = await runInteractions(page, viewport);
      console.log(`qa:done ${page.name} ${viewport.name}`);
      report.pages[page.name].viewports[viewport.name] = { layout, interactions };
      auditLayout(page, viewport, layout);

      if (page.interaction === 'portfolio') {
        if (!interactions.demo.mode.includes('mode-mobile') || interactions.demo.label !== '320 px' || interactions.demo.pressed !== 'true' || interactions.demo.activeCount !== 1) addIssue(page.name, viewport.name, 'responsive-demo', interactions.demo);
        if (viewport.mobile && (!interactions.menu.open || interactions.menu.expanded !== 'true' || !interactions.menu.insideViewport || !interactions.menu.outsideClickCloses)) addIssue(page.name, viewport.name, 'mobile-menu', interactions.menu);
      } else if (page.interaction === 'second-look') {
        if (interactions.initial.score >= 90 || interactions.initial.issues < 3 || interactions.initial.renderedIssues !== interactions.initial.issues || interactions.initial.highlighted < 1) addIssue(page.name, viewport.name, 'initial-analysis', interactions.initial);
        if (interactions.clean.score < 90 || interactions.clean.issues !== 0 || !interactions.clean.emptyVisible) addIssue(page.name, viewport.name, 'clean-analysis', interactions.clean);
        if (interactions.bureaucratic.score >= 90 || interactions.bureaucratic.issues < 2 || interactions.bureaucratic.renderedIssues !== interactions.bureaucratic.issues) addIssue(page.name, viewport.name, 'bureaucratic-analysis', interactions.bureaucratic);
        if (interactions.liveUpdate.words !== 2 || !interactions.liveUpdate.characters.startsWith('15 ') || interactions.liveUpdate.highlightedText !== 'Короткий текст.') addIssue(page.name, viewport.name, 'live-analysis', interactions.liveUpdate);
      } else if (page.interaction === 'course') {
        if (!interactions.title || interactions.modules < 8 || !interactions.firstLesson.includes('lesson.html') || interactions.backLink !== '../../index.html#work') addIssue(page.name, viewport.name, 'course-demo', interactions);
      } else if (page.interaction === 'course-lesson') {
        if (!interactions.title || interactions.title.includes('Загрузка') || interactions.navItems < 8 || interactions.theoryCards < 1 || !interactions.nextLesson.includes('lesson.html') || interactions.backLink !== '../../index.html#work') addIssue(page.name, viewport.name, 'course-lesson-demo', interactions);
      } else if (page.interaction === 'hottour') {
        if (interactions.initialCards < 6 || interactions.filteredCards !== 3 || interactions.filterPressed !== 'true' || !interactions.modalOpen || !interactions.submitPrevented || !interactions.contactPrevented || !interactions.noticeVisible || interactions.backLink !== '../../index.html#work') addIssue(page.name, viewport.name, 'hottour-safe-demo', interactions);
      }
    }

    await client.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true, screenWidth: 390, screenHeight: 844 });
    console.log(`qa:start ${page.name} reduced-motion`);
    await client.send('Emulation.setEmulatedMedia', { media: '', features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
    await navigate(page.url);
    await settlePage();
    const reduced = await evaluate(`(() => ({
      preference: matchMedia('(prefers-reduced-motion: reduce)').matches,
      runningAnimations: document.getAnimations().filter(animation => animation.playState === 'running').length,
      hiddenReveals: ${JSON.stringify(page.revealSelector)} ? [...document.querySelectorAll(${JSON.stringify(page.revealSelector)})].filter(element => Number.parseFloat(getComputedStyle(element).opacity) < .99).length : 0,
      overflowX: Math.max(0, document.documentElement.scrollWidth - innerWidth)
    }))()`);
    report.pages[page.name].reducedMotion = reduced;
    console.log(`qa:done ${page.name} reduced-motion`);
    if (!reduced.preference || reduced.runningAnimations || reduced.hiddenReveals || reduced.overflowX) addIssue(page.name, 'reduced-motion', 'reduced-motion', reduced);
  }

  report.runtimeErrors = [...new Set(runtimeErrors)];
  report.requestFailures = requestFailures;
  if (report.runtimeErrors.length) addIssue('all', 'all', 'runtime-errors', report.runtimeErrors);
  if (report.requestFailures.length) addIssue('all', 'all', 'request-failures', report.requestFailures);
  report.issues = issues;
  fs.writeFileSync(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));

  const summary = {
    checkedStates: auditedPages.reduce((sum, page) => {
      const configured = page.viewportNames ? viewports.filter(viewport => page.viewportNames.includes(viewport.name)) : viewports;
      const selected = process.env.QA_VIEWPORT ? configured.filter(viewport => viewport.name === process.env.QA_VIEWPORT) : configured;
      return sum + selected.length + 1;
    }, 0),
    screenshots: auditedPages.reduce((sum, page) => {
      const configured = page.viewportNames ? viewports.filter(viewport => page.viewportNames.includes(viewport.name)) : viewports;
      return sum + (process.env.QA_VIEWPORT ? configured.filter(viewport => viewport.name === process.env.QA_VIEWPORT).length : configured.length);
    }, 0),
    runtimeErrors: report.runtimeErrors.length,
    requestFailures: report.requestFailures.length,
    issues: issues.length,
    issueTypes: [...new Set(issues.map(issue => issue.type))]
  };
  console.log(JSON.stringify(summary, null, 2));
  if (issues.length) process.exitCode = 1;
} finally {
  client?.close();
  browser.kill();
}
