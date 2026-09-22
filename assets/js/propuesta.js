/* VM Legal · Propuesta — interacciones mínimas, sin dependencias. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Revelado progresivo al hacer scroll ------------------------------ */
  var targets = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    targets.forEach(function (el, i) {
      // Escalonado suave dentro de cada grilla.
      el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
      io.observe(el);
    });
  }

  /* --- CTA fijo en móvil: aparece al dejar atrás el hero ---------------- */
  var sticky = document.getElementById('stickyCta');
  var hero = document.querySelector('.hero');

  if (sticky && hero && 'IntersectionObserver' in window) {
    sticky.hidden = false;
    var ctaFinal = document.getElementById('cta');

    var heroWatcher = new IntersectionObserver(function (entries) {
      var pastHero = !entries[0].isIntersecting;
      sticky.classList.toggle('is-on', pastHero && !atFinalCta);
    }, { threshold: 0 });
    heroWatcher.observe(hero);

    // Se oculta cuando el CTA grande ya está a la vista: no compiten.
    var atFinalCta = false;
    if (ctaFinal) {
      new IntersectionObserver(function (entries) {
        atFinalCta = entries[0].isIntersecting;
        if (atFinalCta) sticky.classList.remove('is-on');
      }, { threshold: 0.25 }).observe(ctaFinal);
    }
  }
})();
