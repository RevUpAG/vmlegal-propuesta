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

  /* ===================  Carruseles  =================================== */
  /* El desplazamiento real lo hace el navegador (scroll-snap). Aquí solo se
     sincronizan los puntos y las flechas con la posición actual. */
  document.querySelectorAll('[data-carousel]').forEach(function (car) {
    var track = car.querySelector('.carousel__track');
    var items = Array.prototype.slice.call(track.children);
    var dots  = car.querySelector('.carousel__dots');
    var arrows = Array.prototype.slice.call(car.querySelectorAll('.carousel__arrow'));
    if (!track || !items.length) return;

    function step() {
      var cs = getComputedStyle(track);
      return items[0].getBoundingClientRect().width + (parseFloat(cs.gap) || 0);
    }

    // Cuántas tarjetas caben a la vez: define cuántas "páginas" hay.
    // clientWidth incluye el padding lateral del track, que es sangrado y no
    // espacio útil: hay que descontarlo o se cuenta una tarjeta de más.
    function perView() {
      var cs = getComputedStyle(track);
      var util = track.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
      return Math.max(1, Math.round(util / step()));
    }

    function buildDots() {
      if (!dots) return;
      var pages = Math.max(1, items.length - perView() + 1);
      dots.innerHTML = '';
      for (var i = 0; i < pages; i++) dots.appendChild(document.createElement('i'));
      sync();
    }

    function current() {
      return Math.round(track.scrollLeft / step());
    }

    function sync() {
      var i = current();
      var max = track.scrollWidth - track.clientWidth;
      if (dots) {
        Array.prototype.forEach.call(dots.children, function (d, n) {
          d.classList.toggle('is-on', n === Math.min(i, dots.children.length - 1));
        });
      }
      arrows.forEach(function (b) {
        var dir = +b.dataset.dir;
        b.disabled = dir < 0 ? track.scrollLeft <= 2 : track.scrollLeft >= max - 2;
      });
    }

    arrows.forEach(function (b) {
      b.addEventListener('click', function () {
        track.scrollBy({ left: step() * +b.dataset.dir, behavior: reduced ? 'auto' : 'smooth' });
      });
    });

    var tick;
    track.addEventListener('scroll', function () {
      clearTimeout(tick);
      tick = setTimeout(sync, 60);
    }, { passive: true });

    window.addEventListener('resize', function () {
      clearTimeout(tick);
      tick = setTimeout(buildDots, 150);
    });

    buildDots();
  });

  /* ===================  Desplegables  ================================= */
  document.querySelectorAll('.disclose__trigger').forEach(function (btn) {
    var label = btn.querySelector('span');
    var abrir = label ? label.textContent : '';
    var cerrar = abrir.replace(/^Ver/, 'Ocultar');

    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (label) label.textContent = open ? abrir : cerrar;
    });
  });

  /* ===================  Filtro de circulares  ========================= */
  /* Arranca sin nada seleccionado: se muestran las opciones y el buscador,
     y la lista solo aparece cuando el visitante elige un área o escribe.
     Así la sección no alarga la página de entrada. */
  var list  = document.getElementById('circulars');
  var input = document.getElementById('q');
  var empty = document.getElementById('circularsEmpty');
  var start = document.getElementById('circularsStart');
  var verTodas = document.getElementById('verTodas');
  var chips = document.querySelectorAll('.chip');

  if (list) {
    var items  = Array.prototype.slice.call(list.querySelectorAll('.circular'));
    var area   = null;   // null = ningún área elegida
    var needle = '';

    function normalize(s) {
      return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function setChip(value) {
      area = value;
      chips.forEach(function (c) {
        var on = c.dataset.filter === value;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
    }

    function apply() {
      // Sin área ni búsqueda: no se lista nada, solo la invitación.
      if (!area && !needle) {
        items.forEach(function (li) { li.hidden = true; });
        list.hidden = true;
        if (start) start.hidden = false;
        if (empty) empty.hidden = true;
        return;
      }

      if (start) start.hidden = true;
      list.hidden = false;

      var shown = 0;
      items.forEach(function (li) {
        var matchArea = !area || area === 'todas' || li.dataset.area === area;
        var matchText = !needle || normalize(li.textContent).indexOf(needle) !== -1;
        var show = matchArea && matchText;
        li.hidden = !show;
        if (show) shown++;
      });

      if (empty) empty.hidden = shown !== 0;
      list.hidden = shown === 0;
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        // Volver a tocar el área activa la deselecciona.
        setChip(chip.classList.contains('is-active') ? null : chip.dataset.filter);
        apply();
      });
    });

    if (verTodas) {
      verTodas.addEventListener('click', function () {
        setChip('todas');
        if (input) { input.value = ''; needle = ''; }
        apply();
        list.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      });
    }

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

    apply();
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
