'use strict';

// 이벤트 → state 변경 → render 함수 호출 순서로 화면을 갱신합니다.
const USERNAME = 'cauchy-P';
const API_URL = `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`;
const THEME_KEY = 'cauchy-p-theme';
const NAV_THRESHOLD = 60;
const TOP_THRESHOLD = 300;
const REVEAL_THRESHOLD = 0.2;
const state = {
  theme: 'light', menuOpen: false,
  projects: { status: 'idle', items: [], language: '전체', error: '' },
  form: { values: { name: '', email: '', message: '' }, errors: {}, touched: new Set(), success: false },
};
const $ = (selector) => document.querySelector(selector);
const fields = [...document.querySelectorAll('#contact-form input, #contact-form textarea')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let userChoseTheme = false;

const renderTheme = () => {
  const dark = state.theme === 'dark';
  document.documentElement.dataset.theme = state.theme;
  $('#theme-toggle').setAttribute('aria-pressed', String(dark));
  $('#theme-toggle').setAttribute('aria-label', dark ? '라이트 모드 켜기' : '다크 모드 켜기');
  $('meta[name="theme-color"]').content = dark ? '#17221d' : '#f5f3ec';
};
try {
  const saved = localStorage.getItem(THEME_KEY);
  userChoseTheme = saved === 'dark' || saved === 'light';
  state.theme = userChoseTheme ? saved : systemTheme.matches ? 'dark' : 'light';
} catch { state.theme = systemTheme.matches ? 'dark' : 'light'; }
renderTheme();
$('#theme-toggle').addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  userChoseTheme = true;
  renderTheme();
  try { localStorage.setItem(THEME_KEY, state.theme); } catch { /* 저장이 차단돼도 화면 전환은 유지 */ }
});
systemTheme.addEventListener('change', ({ matches }) => {
  if (!userChoseTheme) { state.theme = matches ? 'dark' : 'light'; renderTheme(); }
});

const renderMenu = () => {
  $('#menu').classList.toggle('active', state.menuOpen);
  $('#menu-toggle').setAttribute('aria-expanded', String(state.menuOpen));
  $('#menu-toggle').setAttribute('aria-label', state.menuOpen ? '메뉴 닫기' : '메뉴 열기');
};
const closeMenu = () => { state.menuOpen = false; renderMenu(); };
$('#menu-toggle').addEventListener('click', () => { state.menuOpen = !state.menuOpen; renderMenu(); });
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', closeMenu); // 앵커 이동과 smooth scroll은 HTML/CSS가 담당
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.menuOpen) { closeMenu(); $('#menu-toggle').focus(); }
});
document.addEventListener('click', (event) => { if (!event.target.closest('.nav')) closeMenu(); });
window.matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
const renderScroll = () => {
  if (window.scrollY >= NAV_THRESHOLD) $('#header').classList.add('scrolled');
  else $('#header').classList.remove('scrolled');
  $('#to-top').hidden = window.scrollY < TOP_THRESHOLD;
};
window.addEventListener('scroll', renderScroll, { passive: true });
$('#to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  $('#hero .eyebrow').setAttribute('tabindex', '-1');
  $('#hero .eyebrow').focus({ preventScroll: true });
});
renderScroll();
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.classList.remove('reveal-pending');
      observer.unobserve(target);
    });
  }, { threshold: REVEAL_THRESHOLD });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('reveal-pending'); observer.observe(element);
  });
}

// API로 받은 문자열을 HTML에 삽입할 때 마크업으로 해석되지 않도록 처리합니다.
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);
const renderFilters = () => {
  const { items, language } = state.projects;
  const languages = ['전체', ...new Set(items.map((repo) => repo.language || '미지정'))];
  $('#filters').innerHTML = languages.map((item) => `<button type="button" class="filter-button" data-language="${escapeHTML(item)}" aria-pressed="${language === item}">${escapeHTML(item)}</button>`).join('');
};
const renderProjects = () => {
  const { status, items, language, error } = state.projects;
  $('#projects-list').setAttribute('aria-busy', String(status === 'loading'));
  $('#retry').hidden = status !== 'error';
  $('#filters').hidden = status !== 'success';
  const messages = {
    idle: '프로젝트를 불러올 준비 중입니다.', loading: '프로젝트 로딩 중...',
    error: `프로젝트를 불러올 수 없습니다. ${error}`, empty: '표시할 프로젝트가 없습니다.',
  };
  if (status !== 'success') {
    $('#projects-status').textContent = messages[status];
    $('#projects-list').innerHTML = '';
    return;
  }
  const filtered = language === '전체' ? items : items.filter((repo) => (repo.language || '미지정') === language);
  $('#projects-status').textContent = filtered.length ? `${language} · 공개 저장소 ${filtered.length}개` : '표시할 프로젝트가 없습니다.';
  $('#projects-list').innerHTML = filtered.map(({ name, description, language: repoLanguage, stargazers_count = 0, fork }) => {
    const url = `https://github.com/${USERNAME}/${encodeURIComponent(name)}`;
    return `<article class="repo-card"><h4><a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(name)} ↗</a></h4><p>${escapeHTML(description || 'GitHub에 등록된 설명이 없습니다.')}</p><div class="repo-meta"><span>${escapeHTML(repoLanguage || '언어 미지정')}${fork ? ' · Fork' : ''}</span><span>★ ${escapeHTML(stargazers_count)}</span></div></article>`;
  }).join('');
};
async function loadProjects() {
  if (state.projects.status === 'loading') return;
  state.projects = { status: 'loading', items: [], language: '전체', error: '' };
  renderProjects();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    // 한 페이지 100개, 마지막 페이지까지 읽습니다. 공개 저장소만 반환됩니다.
    let page = 1;
    let items = [];
    while (true) {
      const response = await fetch(`${API_URL}&page=${page}`, {
        headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal,
      });
      if (!response.ok) {
        if (response.status === 403 || response.status === 429) throw new Error('GitHub 요청이 제한되었습니다. 잠시 후 다시 시도해 주세요.');
        if (response.status === 404) throw new Error('GitHub 사용자를 찾을 수 없습니다.');
        throw new Error(`HTTP ${response.status} 오류가 발생했습니다.`);
      }
      const batch = await response.json();
      if (!Array.isArray(batch) || batch.some((repo) => !repo || typeof repo.name !== 'string')) throw new Error('저장소 응답 형식이 올바르지 않습니다.');
      items = items.concat(batch);
      if (batch.length < 100) break;
      page += 1;
    }
    state.projects.items = items;
    state.projects.status = items.length ? 'success' : 'empty';
    renderFilters();
  } catch (error) {
    state.projects.status = 'error';
    state.projects.error = error.name === 'AbortError' ? '응답 시간이 초과되었습니다.' : error instanceof TypeError ? '인터넷 연결을 확인해 주세요.' : error.message;
  } finally { clearTimeout(timeout); renderProjects(); }
}
$('#retry').addEventListener('click', loadProjects);
$('#filters').addEventListener('click', (event) => {
  const button = event.target.closest('button[data-language]');
  if (!button || state.projects.status !== 'success') return;
  state.projects.language = button.dataset.language;
  // 버튼을 재생성하지 않아 키보드 포커스를 보존합니다.
  document.querySelectorAll('.filter-button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  renderProjects();
});

const getFieldError = (name, value) => {
  if (!value.trim()) return ({ name: '이름을 입력해 주세요.', email: '이메일을 입력해 주세요.', message: '메시지를 입력해 주세요.' })[name];
  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return '올바른 이메일 형식을 입력해 주세요.';
  return '';
};
const renderForm = () => {
  fields.forEach(({ name }) => {
    const error = state.form.errors[name] || '';
    $(`#${name}-error`).textContent = error;
    $(`#${name}`).setAttribute('aria-invalid', String(Boolean(error)));
  });
  $('#form-status').textContent = state.form.success ? '입력 검증에 성공했습니다. 이 데모는 메시지를 실제로 전송하지 않습니다.' : '';
};
fields.forEach((field) => {
  field.addEventListener('input', () => {
    state.form.values[field.name] = field.value;
    state.form.success = false;
    state.form.touched.add(field.name);
    state.form.errors[field.name] = getFieldError(field.name, field.value);
    renderForm();
  });
});
$('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  fields.forEach(({ name, value }) => {
    state.form.values[name] = value; // 자동완성으로 input 이벤트가 빠진 경우도 반영
    state.form.touched.add(name);
    state.form.errors[name] = getFieldError(name, value);
  });
  const firstInvalid = fields.find(({ name }) => state.form.errors[name]);
  state.form.success = !firstInvalid;
  renderForm();
  if (firstInvalid) firstInvalid.focus();
});
renderForm();
$('#year').textContent = String(new Date().getFullYear());
loadProjects();
