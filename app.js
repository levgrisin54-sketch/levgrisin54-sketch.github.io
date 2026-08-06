const body = document.body;
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const progress = document.querySelector('.scroll-progress span');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
const desktopViewport = matchMedia('(min-width: 761px)');

const closeNav = () => {
  body.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.querySelector('.sr-only').textContent = 'Открыть меню';
};

navToggle.addEventListener('click', () => {
  const isOpen = body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

document.addEventListener('click', event => {
  if (body.classList.contains('nav-open') && !header.contains(event.target)) closeNav();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNav();
});

desktopViewport.addEventListener('change', event => {
  if (event.matches) closeNav();
});

let progressFrame = 0;
const updateProgress = () => {
  progressFrame = 0;
  const available = document.documentElement.scrollHeight - innerHeight;
  const value = available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0;
  progress.style.transform = `scaleX(${value})`;
  header.classList.toggle('is-scrolled', scrollY > 12);
};

addEventListener('scroll', () => {
  if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
}, { passive: true });
updateProgress();

const revealItems = [...document.querySelectorAll('[data-reveal]')];
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.06 });
  revealItems.forEach(item => revealObserver.observe(item));
}

const demo = document.querySelector('#responsive-demo');
const labStage = document.querySelector('#lab-stage');
const labGrip = document.querySelector('#lab-grip');
const demoWidth = document.querySelector('#demo-width');
const viewportValues = { desktop: 1440, tablet: 820, mobile: 320 };
const viewportButtons = [...document.querySelectorAll('[data-viewport]')];

const setViewportButtons = activeViewport => {
  viewportButtons.forEach(item => {
    const selected = item.dataset.viewport === activeViewport;
    item.classList.toggle('is-active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
};

const updateDemoLabel = value => {
  const rounded = Math.round(value);
  demoWidth.textContent = `${rounded} px`;
  labGrip?.setAttribute('aria-valuenow', String(rounded));
  labGrip?.setAttribute('aria-valuetext', `${rounded} пикселей`);
};

const setDemoPreset = viewport => {
  demo.classList.remove('mode-desktop', 'mode-tablet', 'mode-mobile', 'mode-custom', 'is-dragging');
  demo.classList.add(`mode-${viewport}`);
  demo.style.removeProperty('--window-width');
  setViewportButtons(viewport);
  updateDemoLabel(viewportValues[viewport]);
};

viewportButtons.forEach(button => {
  button.addEventListener('click', () => {
    setDemoPreset(button.dataset.viewport);
  });
});

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const getLabWidths = () => {
  const stageWidth = Math.max(220, labStage.clientWidth - 36);
  return { min: Math.min(220, stageWidth), max: Math.min(720, stageWidth) };
};
const virtualToPhysical = value => {
  const widths = getLabWidths();
  const ratio = (clamp(value, 320, 1440) - 320) / 1120;
  return widths.min + (widths.max - widths.min) * ratio;
};
const physicalToVirtual = value => {
  const widths = getLabWidths();
  if (widths.max === widths.min) return 320;
  const ratio = (clamp(value, widths.min, widths.max) - widths.min) / (widths.max - widths.min);
  return 320 + ratio * 1120;
};
const closestViewport = (value, threshold = 36) => Object.entries(viewportValues)
  .find(([, preset]) => Math.abs(preset - value) <= threshold)?.[0] || null;

const setCustomDemoWidth = (value, dragging = false) => {
  const bounded = clamp(value, 320, 1440);
  demo.classList.remove('mode-desktop', 'mode-tablet', 'mode-mobile');
  demo.classList.add('mode-custom');
  demo.classList.toggle('is-dragging', dragging);
  demo.style.setProperty('--window-width', `${virtualToPhysical(bounded)}px`);
  setViewportButtons(closestViewport(bounded, 0));
  updateDemoLabel(bounded);
};

let dragPointerId = null;
const updateDemoFromPointer = clientX => {
  const stageRect = labStage.getBoundingClientRect();
  const center = stageRect.left + stageRect.width / 2;
  setCustomDemoWidth(physicalToVirtual((clientX - center) * 2), true);
};

labGrip?.addEventListener('pointerdown', event => {
  if (event.button !== 0) return;
  event.preventDefault();
  dragPointerId = event.pointerId;
  labGrip.setPointerCapture(event.pointerId);
  updateDemoFromPointer(event.clientX);
});

labGrip?.addEventListener('pointermove', event => {
  if (event.pointerId !== dragPointerId) return;
  updateDemoFromPointer(event.clientX);
});

const finishDemoDrag = event => {
  if (event.pointerId !== dragPointerId) return;
  dragPointerId = null;
  const value = Number(labGrip.getAttribute('aria-valuenow'));
  const snap = closestViewport(value, 52);
  if (snap) setDemoPreset(snap);
  else setCustomDemoWidth(value);
};

labGrip?.addEventListener('pointerup', finishDemoDrag);
labGrip?.addEventListener('pointercancel', finishDemoDrag);
labGrip?.addEventListener('keydown', event => {
  const current = Number(labGrip.getAttribute('aria-valuenow')) || 1440;
  const changes = {
    ArrowLeft: current - 20,
    ArrowDown: current - 20,
    ArrowRight: current + 20,
    ArrowUp: current + 20,
    PageDown: current - 100,
    PageUp: current + 100,
    Home: 320,
    End: 1440
  };
  if (!(event.key in changes)) return;
  event.preventDefault();
  const next = clamp(changes[event.key], 320, 1440);
  const preset = closestViewport(next, 0);
  if (preset) setDemoPreset(preset);
  else setCustomDemoWidth(next);
});

let labResizeFrame = 0;
addEventListener('resize', () => {
  if (labResizeFrame || !demo.classList.contains('mode-custom')) return;
  labResizeFrame = requestAnimationFrame(() => {
    labResizeFrame = 0;
    setCustomDemoWidth(Number(labGrip.getAttribute('aria-valuenow')) || 1440);
  });
});

const hero = document.querySelector('.hero');
if (hero && finePointer.matches && !reduceMotion.matches) {
  let heroFrame = 0;
  let heroPoint = null;
  hero.addEventListener('pointermove', event => {
    heroPoint = { x: event.clientX, y: event.clientY };
    if (heroFrame) return;
    heroFrame = requestAnimationFrame(() => {
      heroFrame = 0;
      const rect = hero.getBoundingClientRect();
      hero.style.setProperty('--hero-x', `${((heroPoint.x - rect.left) / rect.width) * 100}%`);
      hero.style.setProperty('--hero-y', `${((heroPoint.y - rect.top) / rect.height) * 100}%`);
    });
  });
  hero.addEventListener('pointerleave', () => {
    hero.style.setProperty('--hero-x', '72%');
    hero.style.setProperty('--hero-y', '18%');
  });
}

const cardCursor = document.querySelector('.card-cursor');
const projectWipe = document.querySelector('.project-wipe');
const projectCards = [...document.querySelectorAll('[data-project-card]')];
let cursorFrame = 0;
let cursorTarget = { x: -120, y: -120 };
let cursorPosition = { x: -120, y: -120 };
let activeCard = null;

const animateCardCursor = () => {
  cursorPosition.x += (cursorTarget.x - cursorPosition.x) * .2;
  cursorPosition.y += (cursorTarget.y - cursorPosition.y) * .2;
  cardCursor.style.transform = `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`;
  const moving = Math.abs(cursorTarget.x - cursorPosition.x) + Math.abs(cursorTarget.y - cursorPosition.y) > .2;
  if (activeCard || moving) cursorFrame = requestAnimationFrame(animateCardCursor);
  else cursorFrame = 0;
};

const hideCardCursor = () => {
  activeCard?.classList.remove('is-pointer-active');
  activeCard = null;
  cardCursor?.classList.remove('is-visible');
};

if (cardCursor && finePointer.matches && !reduceMotion.matches) {
  projectCards.forEach(card => {
    card.addEventListener('pointerenter', event => {
      activeCard = card;
      card.classList.add('is-pointer-active');
      const styles = getComputedStyle(card);
      cardCursor.style.setProperty('--cursor-bg', styles.getPropertyValue('--cursor-card-bg'));
      cardCursor.style.setProperty('--cursor-fg', styles.getPropertyValue('--cursor-card-fg'));
      cursorTarget = { x: event.clientX, y: event.clientY };
      if (cursorPosition.x < -100) cursorPosition = { ...cursorTarget };
      cardCursor.classList.add('is-visible');
      if (!cursorFrame) cursorFrame = requestAnimationFrame(animateCardCursor);
    });
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
      const y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
      card.style.setProperty('--pointer-x', `${x * 100}%`);
      card.style.setProperty('--pointer-y', `${y * 100}%`);
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 4.4}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 5.2}deg`);
      card.style.setProperty('--image-x', `${(0.5 - x) * 7}px`);
      card.style.setProperty('--image-y', `${(0.5 - y) * 5}px`);
      cursorTarget = { x: event.clientX, y: event.clientY };
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--pointer-x', '50%');
      card.style.setProperty('--pointer-y', '50%');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--image-x', '0px');
      card.style.setProperty('--image-y', '0px');
      hideCardCursor();
    });
  });
  addEventListener('blur', hideCardCursor);
}

let wipeBusy = false;
projectCards.forEach(card => {
  card.addEventListener('click', event => {
    if (reduceMotion.matches || !projectWipe || wipeBusy || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.querySelector(card.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    wipeBusy = true;
    hideCardCursor();
    const rect = card.getBoundingClientRect();
    const originX = event.detail ? event.clientX : rect.left + rect.width / 2;
    const originY = event.detail ? event.clientY : rect.top + rect.height / 2;
    const styles = getComputedStyle(card);
    projectWipe.style.setProperty('--wipe-x', `${originX}px`);
    projectWipe.style.setProperty('--wipe-y', `${originY}px`);
    projectWipe.style.setProperty('--wipe-color', styles.getPropertyValue('--wipe-card-color'));
    projectWipe.classList.remove('is-revealing');
    projectWipe.classList.add('is-covering');

    setTimeout(() => {
      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      target.scrollIntoView({ block: 'start' });
      if (location.hash !== card.hash) history.pushState(null, '', card.hash);
      document.documentElement.style.scrollBehavior = previousBehavior;
      projectWipe.classList.remove('is-covering');
      projectWipe.classList.add('is-revealing');
    }, 430);

    setTimeout(() => {
      projectWipe.classList.remove('is-revealing');
      wipeBusy = false;
    }, 940);
  });
});

const projectScrollStages = [...document.querySelectorAll('[data-project-scroll]')];
let projectScrollMetrics = [];
let projectScrollFrame = 0;
let projectMeasureFrame = 0;
let projectScenesActive = false;

const updateProjectScrollScenes = () => {
  projectScrollFrame = 0;
  if (!projectScenesActive) return;

  projectScrollMetrics.forEach(({ stage, scene, image, top, travel, imageShift, stickyTop }) => {
    const sceneProgress = clamp((scrollY + stickyTop - top) / travel, 0, 1);
    image.style.setProperty('--page-shift', `${(-imageShift * sceneProgress).toFixed(1)}px`);
    scene.style.setProperty('--scene-progress', sceneProgress.toFixed(4));
    scene.style.setProperty('--notes-shift', `${((.5 - sceneProgress) * 10).toFixed(1)}px`);
    stage.dataset.scrollProgress = sceneProgress.toFixed(3);
  });
};

const measureProjectScrollScenes = () => {
  projectMeasureFrame = 0;
  if (!projectScenesActive) return;

  const measurements = projectScrollStages.map(stage => {
    const scene = stage.querySelector('.project-scene');
    const viewport = stage.querySelector('.project-page-viewport');
    const image = stage.querySelector('.project-page-shot');
    const imageShift = Math.max(0, image.offsetHeight - viewport.clientHeight);
    const travel = Math.round(clamp(imageShift * .72, 980, 1750));
    stage.style.setProperty('--stage-height', `${Math.ceil(scene.offsetHeight + travel)}px`);
    return { stage, scene, image, travel, imageShift };
  });

  projectScrollMetrics = measurements.map(measurement => ({
    ...measurement,
    top: measurement.stage.getBoundingClientRect().top + scrollY,
    stickyTop: parseFloat(getComputedStyle(measurement.scene).top) || 88
  }));
  updateProjectScrollScenes();
};

const scheduleProjectMeasure = () => {
  if (!projectScenesActive || projectMeasureFrame) return;
  projectMeasureFrame = requestAnimationFrame(measureProjectScrollScenes);
};

const configureProjectScrollScenes = () => {
  projectScenesActive = desktopViewport.matches && !reduceMotion.matches;
  body.classList.toggle('scroll-scenes-ready', projectScenesActive);
  projectScrollMetrics = [];

  projectScrollStages.forEach(stage => {
    const image = stage.querySelector('.project-page-shot');
    const scene = stage.querySelector('.project-scene');
    image.dataset.posterSrc ||= image.getAttribute('src');
    image.decoding = 'async';

    if (projectScenesActive) {
      if (image.getAttribute('src') !== image.dataset.scrollSrc) image.setAttribute('src', image.dataset.scrollSrc);
    } else {
      if (image.getAttribute('src') !== image.dataset.posterSrc) image.setAttribute('src', image.dataset.posterSrc);
      stage.style.removeProperty('--stage-height');
      stage.removeAttribute('data-scroll-progress');
      image.style.removeProperty('--page-shift');
      scene.style.removeProperty('--scene-progress');
      scene.style.removeProperty('--notes-shift');
    }
  });

  if (projectScenesActive) scheduleProjectMeasure();
};

projectScrollStages.forEach(stage => {
  stage.querySelector('.project-page-shot')?.addEventListener('load', scheduleProjectMeasure);
});

addEventListener('scroll', () => {
  if (!projectScenesActive || projectScrollFrame) return;
  projectScrollFrame = requestAnimationFrame(updateProjectScrollScenes);
}, { passive: true });

addEventListener('resize', scheduleProjectMeasure);
desktopViewport.addEventListener('change', configureProjectScrollScenes);
reduceMotion.addEventListener('change', configureProjectScrollScenes);
configureProjectScrollScenes();

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
