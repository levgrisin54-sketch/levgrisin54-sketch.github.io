const trips = [
  {
    id: 'ng-phaselis-bay', country: 'Турция', tag: 'turkey', city: 'Кемер',
    title: 'NG Phaselis Bay 5*', badge: 'Семьям', image: 'media/resort-pool.jpg', position: 'center 58%',
    desc: 'Современный курорт между морем и горами. Подойдёт семьям, которым важны большая территория, рестораны и занятия на месте.',
    tags: ['первая линия', 'детский клуб', 'горы'],
    source: 'https://ngphaselisbay.com/en/'
  },
  {
    id: 'liberty-fabay', country: 'Турция', tag: 'turkey', city: 'Фетхие',
    title: 'Liberty Fabay 5*', badge: 'Активный отдых', image: 'media/resort-terrace.jpg', position: 'center 52%',
    desc: 'Пляжный комплекс в районе Фетхие с просторной территорией. Смотрим для семей и пар, которым нужен отдых с занятиями на месте.',
    tags: ['пляж', 'бассейны', 'для двоих'],
    source: 'https://www.libertyhotels.com/en/hotels/liberty-fabay/'
  },
  {
    id: 'maxx-royal-kemer', country: 'Турция', tag: 'turkey', city: 'Кемер',
    title: 'Maxx Royal Kemer Resort 5*', badge: 'Бухты и виллы', image: 'media/resort-garden.jpg', position: 'center 48%',
    desc: 'Курорт с бухтами, сьютами и виллами. Ориентир для поездки, где особенно важны приватность, гастрономия и высокий уровень сервиса.',
    tags: ['бухты', 'виллы', 'гастрономия'],
    source: 'https://www.maxxroyal.com/maxx-royal-kemer'
  },
  {
    id: 'steigenberger-alcazar', country: 'Египет', tag: 'egypt', city: 'Шарм-эль-Шейх',
    title: 'Steigenberger Alcazar 5*', badge: 'Спокойный ритм', image: 'media/hero-sea.jpg', position: 'center 62%',
    desc: 'Курорт в районе Набк с большой пляжной зоной и бассейнами. Проверяем, если нужен размеренный отдых и понятная территория.',
    tags: ['Набк', 'пляж', 'бассейны'],
    source: 'https://hrewards.com/en/steigenberger-alcazar-el-sheikh'
  },
  {
    id: 'rixos-magawish', country: 'Египет', tag: 'egypt', city: 'Хургада',
    title: 'Rixos Premium Magawish 5*', badge: 'Всё включено', image: 'media/resort-pool.jpg', position: 'center 44%',
    desc: 'Отель с просторными номерами и виллами на побережье Красного моря. Рассматриваем, когда важны пляж и много услуг на территории.',
    tags: ['просторные номера', 'виллы', 'Красное море'],
    source: 'https://www.rixos.com/en/hotel-resort/rixos-premium-magawish-suites-villas'
  },
  {
    id: 'white-beach-hurghada', country: 'Египет', tag: 'egypt', city: 'Хургада',
    title: 'Pickalbatros White Beach 5*', badge: 'С детьми', image: 'media/tropical-water.jpg', position: 'center 61%',
    desc: 'Семейный вариант в Хургаде с водными зонами и активной инфраструктурой. Детали пляжа и номера сверим под возраст детей.',
    tags: ['семейный', 'водные зоны', 'активно'],
    source: 'https://www.pickalbatros.com/white-beach-resort-hurghada'
  },
  {
    id: 'saii-laguna', country: 'Таиланд', tag: 'thailand', city: 'Пхукет · Банг Тао',
    title: 'SAii Laguna Phuket 5*', badge: 'Пляж и лагуна', image: 'media/thailand-coast.jpg', position: 'center 52%',
    desc: 'Курорт у длинного пляжа Банг Тао и лагуны. Удобная отправная точка для спокойного отдыха с возможностью выезжать по острову.',
    tags: ['Банг Тао', 'лагуна', 'семьям'],
    source: 'https://www.saiihotels.com/laguna-phuket/'
  },
  {
    id: 'katathani-phuket', country: 'Таиланд', tag: 'thailand', city: 'Пхукет · Ката Ной',
    title: 'Katathani Phuket Beach Resort 5*', badge: 'У моря', image: 'media/tropical-water.jpg', position: 'center 48%',
    desc: 'Большой пляжный курорт на Ката Ной. Смотрим, если хочется жить у моря, но иметь выбор бассейнов и зон внутри отеля.',
    tags: ['Ката Ной', 'пляж', 'бассейны'],
    source: 'https://www.katathani.com/'
  },
  {
    id: 'anantara-layan', country: 'Таиланд', tag: 'thailand', city: 'Пхукет · Лаян',
    title: 'Anantara Layan Phuket 5*', badge: 'Для двоих', image: 'media/resort-garden.jpg', position: 'center 42%',
    desc: 'Уединённый курорт у бухты Лаян с виллами и приватным настроением. Хороший ориентир для неспешной поездки вдвоём.',
    tags: ['бухта', 'виллы', 'приватность'],
    source: 'https://www.anantara.com/en/layan-phuket'
  },
  {
    id: 'swissotel-kamelia', country: 'Россия', tag: 'russia', city: 'Сочи',
    title: 'Swissôtel Resort Sochi Kamelia 5*', badge: 'Море и город', image: 'media/russia-coast.jpg', position: 'center 55%',
    desc: 'Курортный отель в зелёном парке Сочи. Подойдёт, если хочется сочетать пляжный отдых, прогулки и городскую инфраструктуру.',
    tags: ['парк', 'пляж', 'Сочи'],
    source: 'https://accor.ru/en/sochi/swissotel-resort-sochi-kamelia/'
  },
  {
    id: 'mantera-supreme', country: 'Россия', tag: 'russia', city: 'Сириус',
    title: 'Mantera Supreme 5*', badge: 'Первая линия', image: 'media/resort-terrace.jpg', position: 'center 50%',
    desc: 'Современный приморский отель в Сириусе. Рассматриваем для комфортного отдыха у моря с доступом к событиям и прогулкам.',
    tags: ['Сириус', 'современный', 'набережная'],
    source: 'https://manterasupreme.ru/'
  },
  {
    id: 'metropol-gelendzhik', country: 'Россия', tag: 'russia', city: 'Геленджик',
    title: 'Metropol Grand Hotel Gelendzhik 5*', badge: 'Круглый год', image: 'media/resort-room.jpg', position: 'center 48%',
    desc: 'Большой курортный отель в Геленджике со спа-зоной. Можно рассматривать не только для летнего отпуска.',
    tags: ['Геленджик', 'спа', 'семьям'],
    source: 'https://metropol-gelendzhik.ru/en'
  },
  {
    id: 'atlantis-royal', country: 'ОАЭ', tag: 'uae', city: 'Дубай · Palm Jumeirah',
    title: 'Atlantis The Royal 5*', badge: 'Отель-событие', image: 'media/dubai.jpg', position: 'center 54%',
    desc: 'Знаковый курорт на Palm Jumeirah с яркой архитектурой, ресторанами и бассейнами. Вариант, когда сам отель — часть путешествия.',
    tags: ['Palm Jumeirah', 'рестораны', 'событие'],
    source: 'https://www.atlantis.com/dubai/atlantis-the-royal'
  },
  {
    id: 'jumeirah-al-naseem', country: 'ОАЭ', tag: 'uae', city: 'Дубай · Madinat Jumeirah',
    title: 'Jumeirah Al Naseem 5*', badge: 'Пляж и город', image: 'media/resort-pool.jpg', position: 'center 46%',
    desc: 'Пляжный отель в комплексе Madinat Jumeirah. Подойдёт тем, кто хочет курортную среду и удобный доступ к Дубаю.',
    tags: ['пляж', 'Madinat', 'для двоих'],
    source: 'https://www.jumeirah.com/en/stay/dubai/jumeirah-al-naseem'
  },
  {
    id: 'qasr-al-sarab', country: 'ОАЭ', tag: 'uae', city: 'Абу-Даби · пустыня Лива',
    title: 'Anantara Qasr Al Sarab 5*', badge: 'Пустыня', image: 'media/desert.jpg', position: 'center 58%',
    desc: 'Курорт среди дюн пустыни Лива. Сильный вариант для нескольких особенных дней в маршруте по ОАЭ.',
    tags: ['пустыня', 'тишина', 'маршрут'],
    source: 'https://www.anantara.com/en/qasr-al-sarab-abu-dhabi'
  }
];

const grid = document.querySelector('#trip-grid');
const loadMore = document.querySelector('#load-more');
const catalogStatus = document.querySelector('#catalog-status');
const modal = document.querySelector('#tour-modal');
const form = document.querySelector('#tour-form');
const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');
const mobileCta = document.querySelector('.mobile-cta');
const shortlistDock = document.querySelector('#shortlist-dock');
const shortlistCount = document.querySelector('#shortlist-count');

let active = 'all';
let visible = 6;
let shortlist = new Set();
let lastFormTrigger = null;

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const knownTripIds = new Set(trips.map(trip => trip.id));

try {
  shortlist = new Set(JSON.parse(localStorage.getItem('hottour-shortlist') || '[]').filter(id => knownTripIds.has(id)));
} catch (error) {
  shortlist = new Set();
}

const filteredTrips = () => trips.filter(trip => active === 'all' || trip.tag === active);

const variantWord = count => {
  const lastTwo = count % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return 'вариантов';
  if (count % 10 === 1) return 'вариант';
  if (count % 10 >= 2 && count % 10 <= 4) return 'варианта';
  return 'вариантов';
};

const saveShortlist = () => {
  try {
    localStorage.setItem('hottour-shortlist', JSON.stringify([...shortlist]));
  } catch (error) {
    // The shortlist still works for the current page when storage is unavailable.
  }
};

const updateShortlist = () => {
  shortlistCount.textContent = String(shortlist.size);
  shortlistDock.hidden = shortlist.size === 0;
};

const cardTemplate = trip => `
  <article class="trip">
    <div class="trip-visual">
      <img src="${trip.image}" alt="Атмосфера отдыха в направлении ${trip.country}" width="1200" height="800" loading="lazy" decoding="async" style="object-position:${trip.position}" />
      <span class="trip-badge">${trip.badge}</span>
      <span class="trip-photo-note">фото направления</span>
      <button class="trip-save" type="button" data-save="${trip.id}" aria-pressed="${shortlist.has(trip.id)}" aria-label="${shortlist.has(trip.id) ? 'Убрать из избранного' : 'Добавить в избранное'}: ${trip.title}">${shortlist.has(trip.id) ? '♥' : '♡'}</button>
    </div>
    <div class="trip-body">
      <div class="trip-meta">${trip.country} · ${trip.city}</div>
      <h3>${trip.title}</h3>
      <p class="trip-desc">${trip.desc}</p>
      <div class="trip-tags">${trip.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
      <div class="trip-bottom">
        <div class="trip-price"><small>проверим рейс и номер</small><b>Расчёт под даты</b></div>
        <div class="trip-links">
          <a class="trip-source" href="${trip.source}" target="_blank" rel="noopener noreferrer" aria-label="Официальный сайт ${trip.title}">Сайт отеля ↗</a>
          <button class="trip-request" type="button" data-open-form data-hotel="${trip.title}" data-direction="${trip.country}" aria-label="Запросить расчёт: ${trip.title}">↗</button>
        </div>
      </div>
    </div>
  </article>`;

const render = () => {
  const pool = filteredTrips();
  const shown = pool.slice(0, visible);
  grid.innerHTML = shown.map(cardTemplate).join('');
  catalogStatus.textContent = `Показано ${shown.length} из ${pool.length} ${variantWord(pool.length)}`;
  loadMore.hidden = shown.length >= pool.length;
  document.querySelectorAll('.filter').forEach(button => {
    const selected = button.dataset.filter === active;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  updateShortlist();
};

const closeNav = () => {
  header.classList.remove('nav-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.querySelector('.sr-only').textContent = 'Открыть меню';
  document.body.classList.remove('nav-locked');
};

const openForm = trigger => {
  if (modal.open) return;
  const direction = trigger?.dataset.direction;
  const hotel = trigger?.dataset.hotel;
  const directionField = form.elements.direction;
  const wishField = form.elements.wish;

  if (direction && [...directionField.options].some(option => option.value === direction)) {
    directionField.value = direction;
  }
  if (hotel) {
    wishField.value = `Хочу узнать подробнее про ${hotel}. `;
  }
  lastFormTrigger = trigger ?? document.activeElement;
  document.body.classList.add('modal-open');
  modal.showModal();
  requestAnimationFrame(() => form.elements.name.focus());
};

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    const update = () => {
      active = button.dataset.filter;
      visible = 6;
      render();
    };
    if (document.startViewTransition && !reduceMotion.matches) document.startViewTransition(update);
    else update();
  });
});

loadMore.addEventListener('click', () => {
  visible += 6;
  render();
});

document.addEventListener('click', event => {
  const saveButton = event.target.closest('[data-save]');
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (shortlist.has(id)) shortlist.delete(id);
    else shortlist.add(id);
    saveShortlist();
    const trip = trips.find(item => item.id === id);
    const isSaved = shortlist.has(id);
    saveButton.setAttribute('aria-pressed', String(isSaved));
    saveButton.setAttribute('aria-label', `${isSaved ? 'Убрать из избранного' : 'Добавить в избранное'}: ${trip?.title ?? 'отель'}`);
    saveButton.textContent = isSaved ? '♥' : '♡';
    updateShortlist();
    return;
  }

  const formTrigger = event.target.closest('[data-open-form]');
  if (formTrigger) {
    event.preventDefault();
    closeNav();
    openForm(formTrigger);
    return;
  }

  if (header.classList.contains('nav-open') && !header.contains(event.target)) closeNav();
});

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Закрыть меню' : 'Открыть меню';
  document.body.classList.toggle('nav-locked', isOpen);
});

document.querySelectorAll('#site-nav a').forEach(link => link.addEventListener('click', closeNav));
matchMedia('(min-width: 821px)').addEventListener('change', event => {
  if (event.matches) closeNav();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNav();
});

document.querySelector('[data-close-form]').addEventListener('click', () => modal.close());

modal.addEventListener('click', event => {
  if (event.target === modal) modal.close();
});

modal.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  if (lastFormTrigger instanceof HTMLElement && document.contains(lastFormTrigger)) lastFormTrigger.focus({ preventScroll: true });
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const savedNames = trips.filter(trip => shortlist.has(trip.id)).map(trip => trip.title);
  const lines = [
    'Здравствуйте, Ульяна! Хочу подобрать путешествие.',
    `Имя: ${data.get('name')}`,
    `Телефон: ${data.get('phone')}`,
    `Направление: ${data.get('direction')}`,
    `Пожелания: ${data.get('wish') || 'уточним вместе'}`
  ];
  if (savedNames.length) lines.push(`Избранное на сайте: ${savedNames.join(', ')}`);
  window.open(`https://wa.me/79525189757?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  modal.close();
  form.reset();
});

const revealItems = document.querySelectorAll('.reveal');
if (reduceMotion.matches || !('IntersectionObserver' in window)) {
  revealItems.forEach(item => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealItems.forEach(item => revealObserver.observe(item));
}

const hero = document.querySelector('.hero');
const contact = document.querySelector('.contact');
let heroVisible = true;
let contactVisible = false;
const updateMobileCta = () => mobileCta.classList.toggle('is-visible', !heroVisible && !contactVisible);

if ('IntersectionObserver' in window) {
  const ctaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === hero) heroVisible = entry.isIntersecting;
      if (entry.target === contact) contactVisible = entry.isIntersecting;
    });
    updateMobileCta();
  }, { threshold: 0.08 });
  ctaObserver.observe(hero);
  ctaObserver.observe(contact);
} else {
  const updateFromScroll = () => {
    const heroBox = hero.getBoundingClientRect();
    const contactBox = contact.getBoundingClientRect();
    heroVisible = heroBox.bottom > 0 && heroBox.top < innerHeight;
    contactVisible = contactBox.bottom > 0 && contactBox.top < innerHeight;
    updateMobileCta();
  };
  addEventListener('scroll', updateFromScroll, { passive: true });
  updateFromScroll();
}

updateShortlist();
render();
