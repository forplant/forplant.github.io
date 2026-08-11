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
  const submitButton = form.querySelector('.form-submit');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = '전송 중...';

    if (formStatus) {
      formStatus.textContent = '문의 내용을 전송하고 있습니다.';
    }

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        form.reset();

        if (formStatus) {
          formStatus.textContent =
            '문의가 정상적으로 접수되었습니다. 확인 후 담당자가 연락드리겠습니다.';
        }

        alert('문의가 정상적으로 접수되었습니다.');
      } else {
        throw new Error('전송 실패');
      }

    } catch (error) {
      if (formStatus) {
        formStatus.textContent =
          '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.';
      }

      alert('문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.');

    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
}
})();
const searchForm = document.getElementById("site-search");
const searchInput = document.getElementById("site-search-input");

if (searchForm && searchInput) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const searchWord = searchInput.value.trim();

        if (!searchWord) {
            alert("검색어를 입력해 주세요.");
            searchInput.focus();
            return;
        }

        const found = window.find(searchWord);

        if (!found) {
            alert("검색 결과가 없습니다.");
        }
    });
}
