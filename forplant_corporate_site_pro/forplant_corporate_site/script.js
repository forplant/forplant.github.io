const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const inquiryForm = document.querySelector('#inquiryForm');
inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;

  const data = new FormData(inquiryForm);
  const subject = `[홈페이지 문의] ${data.get('name')} - ${data.get('location') || '지역 미입력'}`;
  const body = [
    '포플랜트 홈페이지 프로젝트 문의',
    '',
    `회사명 / 담당자: ${data.get('name')}`,
    `연락처: ${data.get('phone')}`,
    `이메일: ${data.get('email')}`,
    `공사 지역: ${data.get('location') || '-'}`,
    '',
    '문의 내용:',
    data.get('message')
  ].join('\n');

  window.location.href = `mailto:forplant2024@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
