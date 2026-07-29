(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.main-nav');

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`[홈페이지 문의] ${data.get('company') || '회사명 미입력'} / ${data.get('name') || ''}`);
      const body = encodeURIComponent([
        `회사명: ${data.get('company') || ''}`,
        `담당자: ${data.get('name') || ''}`,
        `연락처: ${data.get('phone') || ''}`,
        `이메일: ${data.get('email') || ''}`,
        '',
        '문의내용:',
        data.get('message') || ''
      ].join('\n'));
      window.location.href = `mailto:forplant2024@naver.com?subject=${subject}&body=${body}`;
    });
  }
})();
