/* VM Legal · Sitio — interacciones sin dependencias. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===================  Menú móvil  =================================== */
  var burger = document.getElementById('burger');
  var nav    = document.getElementById('nav');
  var scrim  = document.getElementById('navScrim');

  function setMenu(open) {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-locked', open);
    if (open) {
      scrim.hidden = false;
      requestAnimationFrame(function () { scrim.classList.add('is-on'); });
    } else {
      scrim.classList.remove('is-on');
      setTimeout(function () { scrim.hidden = true; }, 350);
    }
  }

  if (burger && nav && scrim) {
    burger.addEventListener('click', function () {
      setMenu(burger.getAttribute('aria-expanded') !== 'true');
    });
    scrim.addEventListener('click', function () { setMenu(false); });

    // Al elegir una sección el cajón se cierra solo.
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        burger.focus();
      }
    });
  }

  /* ===================  Sombra de la cabecera  ======================== */
  var header = document.getElementById('siteHeader');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ===================  Sección activa en el menú  ==================== */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-current', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ===================  Revelado al hacer scroll  ===================== */
  var reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 5, 4) * 55) + 'ms';
      io.observe(el);
    });
  }

  /* ===================  Filtro de circulares  ========================= */
  var list  = document.getElementById('circulars');
  var input = document.getElementById('q');
  var empty = document.getElementById('circularsEmpty');
  var chips = document.querySelectorAll('.chip');

  if (list) {
    var items  = Array.prototype.slice.call(list.querySelectorAll('.circular'));
    var area   = 'todas';
    var needle = '';

    function normalize(s) {
      return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    }

    function apply() {
      var shown = 0;
      items.forEach(function (li) {
        var matchArea = area === 'todas' || li.dataset.area === area;
        var matchText = !needle || normalize(li.textContent).indexOf(needle) !== -1;
        var show = matchArea && matchText;
        li.hidden = !show;
        if (show) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          c.classList.remove('is-active');
          c.setAttribute('aria-pressed', 'false');
        });
        chip.classList.add('is-active');
        chip.setAttribute('aria-pressed', 'true');
        area = chip.dataset.filter;
        apply();
      });
    });

    if (input) {
      var t;
      input.addEventListener('input', function () {
        clearTimeout(t);
        t = setTimeout(function () {
          needle = normalize(input.value.trim());
          apply();
        }, 140);
      });
    }
  }

  /* ===================  Validación del formulario  ==================== */
  var form = document.getElementById('contactForm');
  if (form) {
    var ok = document.getElementById('formOk');

    var messages = {
      'f-nombre': 'Por favor indíquenos su nombre.',
      'f-email':  'Necesitamos un correo válido para responderle.',
      'f-msg':    'Cuéntenos brevemente en qué podemos ayudarle.',
      'f-hab':    'Necesitamos su autorización para tratar los datos.'
    };

    function showError(field, msg) {
      var box = form.querySelector('[data-error-for="' + field.id + '"]');
      if (box) box.textContent = msg || '';
      field.classList.toggle('is-invalid', Boolean(msg));
      if (msg) field.setAttribute('aria-invalid', 'true');
      else field.removeAttribute('aria-invalid');
    }

    function validate(field) {
      var value = field.type === 'checkbox' ? field.checked : field.value.trim();
      var msg = '';
      if (field.required && !value) {
        msg = messages[field.id] || 'Este campo es obligatorio.';
      } else if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        msg = messages['f-email'];
      }
      showError(field, msg);
      return !msg;
    }

    var fields = Array.prototype.slice.call(form.querySelectorAll('[required]'));
    fields.forEach(function (field) {
      field.addEventListener('blur', function () { validate(field); });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) validate(field);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var first = null;
      fields.forEach(function (field) {
        if (!validate(field)) {
          valid = false;
          if (!first) first = field;
        }
      });
      if (!valid) { first.focus(); return; }

      // Demostración: no se envía información a ningún servidor.
      if (ok) ok.hidden = false;
      form.querySelector('button[type="submit"]').textContent = 'Solicitud enviada';
      fields.forEach(function (f) { f.disabled = true; });
    });
  }

  /* ===================  Selector de idioma (demo)  ==================== */
  document.querySelectorAll('.topbar__lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.topbar__lang button').forEach(function (x) {
        x.classList.remove('is-active');
        x.setAttribute('aria-pressed', 'false');
      });
      b.classList.add('is-active');
      b.setAttribute('aria-pressed', 'true');
    });
  });
})();
