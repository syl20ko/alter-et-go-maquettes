/* Maquette ALTER ET GO ! - (c) Sylvain Caron 2026 - proposition non contractuelle */
(function () {
  var params = new URLSearchParams(location.search);
  var pop = document.getElementById('popup-actu');
  if (!pop) return;
  var open = function () { pop.classList.add('is-open'); document.body.classList.add('popup-open'); var b = pop.querySelector('.popup-close'); if (b) b.focus(); };
  var close = function () { pop.classList.remove('is-open'); document.body.classList.remove('popup-open'); };
  pop.querySelectorAll('[data-close]').forEach(function (el) { el.addEventListener('click', close); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.querySelectorAll('[data-open-popup]').forEach(function (el) { el.addEventListener('click', function (e) { e.preventDefault(); open(); }); });
  if (!params.has('nopop')) { setTimeout(open, 900); }
  if (params.has('nobar')) { document.body.classList.add('barre-cachee'); }
  /* reveal au scroll */
  if ('IntersectionObserver' in window && !params.has('static') && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }); }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else { document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); }); }
  /* menu mobile */
  var burger = document.querySelector('.burger'); var nav = document.querySelector('.nav');
  if (burger && nav) { burger.addEventListener('click', function () { var o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o ? 'true' : 'false'); }); }
})();
