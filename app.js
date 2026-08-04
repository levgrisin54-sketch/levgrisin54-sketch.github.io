const body = document.body;
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const progress = document.querySelector('.scroll-progress span');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

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

matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeNav();
});

let progressFrame = 0;
const updateProgress = () => {
  progressFrame = 0;
  const available = document.documentElement.scrollHeight - innerHeight;
  const value = available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0;
  progress.style.transform = `scaleX(${value})`;
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
const demoWidth = document.querySelector('#demo-width');
const viewportLabels = { desktop: '1440 px', tablet: '820 px', mobile: '320 px' };

document.querySelectorAll('[data-viewport]').forEach(button => {
  button.addEventListener('click', () => {
    const viewport = button.dataset.viewport;
    document.querySelector('[data-viewport].is-active')?.classList.remove('is-active');
    document.querySelectorAll('[data-viewport]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    button.classList.add('is-active');
    demo.className = `lab-window mode-${viewport}`;
    demoWidth.textContent = viewportLabels[viewport];
  });
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());
