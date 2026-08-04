const demoMessage = 'Это демонстрационная версия. Звонки, письма и отправка заявки владельцу отключены.';
const demoNotice = document.createElement('div');
demoNotice.className = 'portfolio-demo-notice';
demoNotice.setAttribute('role', 'status');
demoNotice.setAttribute('aria-live', 'polite');
demoNotice.textContent = demoMessage;
document.body.append(demoNotice);

let demoNoticeTimer = 0;
const showDemoNotice = () => {
  clearTimeout(demoNoticeTimer);
  demoNotice.classList.add('is-visible');
  demoNoticeTimer = setTimeout(() => demoNotice.classList.remove('is-visible'), 3600);
};

document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !/^(tel:|mailto:|https:\/\/(?:wa\.me|t\.me)\/)/i.test(link.href)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  showDemoNotice();
}, true);

document.addEventListener('submit', event => {
  if (!event.target.matches('#tour-form')) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  showDemoNotice();
}, true);
