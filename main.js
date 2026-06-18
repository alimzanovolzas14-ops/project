/* DDC Portal — js/main.js */

// ── Scroll reveal ──────────────────────────────────────────────
let revObs;
function initReveal() {
  if (revObs) revObs.disconnect();
  revObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el) { revObs.observe(el); });
}

// ── Counter animation ──────────────────────────────────────────
function initCounters() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      var target = +el.getAttribute('data-count');
      var suffix = el.textContent.replace(/\d/g,'').trim();
      var cur = 0, step = target / 60;
      var t = setInterval(function() {
        cur = Math.min(cur + step, target);
        el.textContent = Math.round(cur).toLocaleString() + (suffix || '');
        if (cur >= target) clearInterval(t);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(function(el) { obs.observe(el); });
}

// ── DOMContentLoaded ───────────────────────────────────────────
window.addEventListener('DOMContentLoaded', function() {
  // 1. Sidebar
  if (typeof buildSidebar === 'function') buildSidebar();

  // 2. Canvas animation (только на главной)
  if (typeof initCanvas === 'function') initCanvas();

  // 3. Reveal
  if (typeof initReveal === 'function') initReveal();

  // 4. Язык
  if (typeof applyLang === 'function') applyLang();

  // 5. Погода
  if (typeof loadWeather === 'function') loadWeather();

  // 6. Навигация по хэшу или загрузка home
  var hash = location.hash.replace('#/','').replace('#','');
  var validPages = Object.keys(window.MENU_DATA || {
    home:1,about:1,board:1,org:1,cybersecurity:1,fintech:1,ai:1,smartcity:1,
    projects:1,services:1,technology:1,infrastructure:1,team:1,careers:1,partners:1,
    news:1,analytics:1,knowledge:1,faq:1,contact:1
  });
  var startPage = (hash && validPages.indexOf(hash) >= 0) ? hash : 'home';
  if (typeof navigate === 'function') navigate(startPage);
});
