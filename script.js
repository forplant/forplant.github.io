const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = `[홈페이지 문의] ${data.get('company') || '개인 고객'} / ${data.get('name')}`;
  const body = [
    `회사명: ${data.get('company') || '-'}`,
    `담당자: ${data.get('name') || '-'}`,
    `연락처: ${data.get('phone') || '-'}`,
    `이메일: ${data.get('email') || '-'}`,
    '',
    '문의내용:',
    data.get('message') || '-'
  ].join('\n');
  window.location.href = `mailto:forplant2024@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
