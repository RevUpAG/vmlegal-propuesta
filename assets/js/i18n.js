/* ==========================================================================
   VM Legal · Español ⇄ Inglés
   El sitio se escribe en español. Este diccionario traduce cada cadena visible
   al inglés y el intercambio ocurre sobre los nodos de texto ya renderizados:
   no hay segunda página que mantener ni recarga al cambiar de idioma.
   Los nombres propios, siglas (DIAN, ICA, M&A) y la dirección no se traducen.
   ========================================================================== */
window.VMi18n = (function () {
  'use strict';

  var EN = {
    /* --- Navegación y barra superior --- */
    "Saltar al contenido": "Skip to content",
    "Medellín, Colombia": "Medellín, Colombia",
    "Idioma del sitio": "Site language",
    "VM Legal — inicio": "VM Legal — home",
    "Navegación principal": "Main navigation",
    "Abrir menú": "Open menu",
    "Cerrar menú": "Close menu",
    "Inicio": "Home",
    "La firma": "The firm",
    "Áreas": "Areas",
    "Equipo": "Team",
    "Actualidad": "Insights",
    "Contacto": "Contact",
    "Agendar asesoría": "Book a consultation",

    /* --- Hero --- */
    "Firma de abogados · Medellín · Desde 2012": "Law firm · Medellín · Since 2012",
    "Asesoría legal": "Legal counsel",
    "con criterio": "with business",
    "de negocio.": "judgment.",
    "Derecho tributario, comercial, corporativo y cambiario para compañías nacionales e internacionales, familias y transacciones de compra y venta.": "Tax, commercial, corporate and foreign exchange law for domestic and international companies, families, and purchase and sale transactions.",
    "Agendar una asesoría": "Book a consultation",
    "Ver áreas de práctica": "See practice areas",
    "Año de fundación": "Year founded",
    "Años de experiencia de los socios": "Years of partner experience",
    "Áreas de práctica": "Practice areas",
    "Circulares publicadas": "Circulars published",

    /* --- La firma --- */
    "Nuestra firma": "Our firm",
    "Cercanos, analíticos": "Close, analytical",
    "y orientados al negocio": "and business-minded",
    "Firma fundada en 2012, reconocida por el servicio que presta a compañías nacionales e internacionales y a familias en derecho tributario, comercial y cambiario, y en la compra y venta de negocios.": "A firm founded in 2012, recognized for the service it provides to domestic and international companies and to families in tax, commercial and foreign exchange law, and in the purchase and sale of businesses.",
    "Un acompañamiento oportuno, cercano y personal, con alto componente analítico y un equipo interdisciplinario que permite una asesoría integral.": "Timely, close and personal support, with a strong analytical component and an interdisciplinary team that makes comprehensive counsel possible.",
    "Conocer al equipo": "Meet the team",
    "Cercano y personal": "Close and personal",
    "El socio que conoce el caso es el que responde. Sin intermediarios.": "The partner who knows the case is the one who answers. No intermediaries.",
    "Rigor analítico": "Analytical rigor",
    "Cada concepto se sustenta en doctrina y jurisprudencia vigente.": "Every opinion is grounded in current doctrine and case law.",
    "Equipo interdisciplinario": "Interdisciplinary team",
    "Tributario, corporativo y cambiario sobre el mismo expediente.": "Tax, corporate and foreign exchange on the same file.",

    /* --- Áreas de práctica --- */
    "En qué acompañamos": "How we help",
    "Cuatro frentes que casi siempre se cruzan. Por eso los atendemos como uno solo.": "Four areas that almost always overlap. That is why we handle them as one.",
    "Áreas de práctica, deslice para ver más": "Practice areas, swipe to see more",
    "Área anterior": "Previous area",
    "Área siguiente": "Next area",
    "Ver detalle": "See details",
    "Ocultar detalle": "Hide details",

    "Derecho tributario": "Tax law",
    "Planeación fiscal y defensa ante la DIAN y las secretarías de hacienda.": "Tax planning and defense before the DIAN and municipal revenue authorities.",
    "Atención de requerimientos y fiscalizaciones, precios de transferencia, beneficios tributarios y defensa en discusiones administrativas.": "Response to information requests and audits, transfer pricing, tax incentives, and defense in administrative disputes.",
    "Planeación fiscal": "Tax planning",
    "Renta e IVA": "Income tax & VAT",

    "Derecho comercial": "Commercial law",
    "Contratos y acompañamiento en la operación diaria de la compañía.": "Contracts and support for the company's day-to-day operations.",
    "Estructuración y negociación de contratos, distribución y agencia comercial, garantías mobiliarias y títulos valores.": "Structuring and negotiation of contracts, distribution and commercial agency, secured transactions and negotiable instruments.",
    "Contratos": "Contracts",
    "Distribución": "Distribution",
    "Garantías": "Collateral",
    "Títulos valores": "Negotiable instruments",

    "Derecho corporativo": "Corporate law",
    "Sociedades, gobierno corporativo y compra y venta de negocios.": "Companies, corporate governance, and the purchase and sale of businesses.",
    "Constitución y reorganización de sociedades, acuerdos de accionistas, y estructuración e implementación de transacciones de principio a fin.": "Incorporation and reorganization of companies, shareholders' agreements, and the structuring and execution of transactions end to end.",
    "Acuerdos de accionistas": "Shareholders' agreements",

    "Derecho cambiario": "Foreign exchange law",
    "Inversión extranjera y régimen cambiario ante el Banco de la República.": "Foreign investment and the exchange regime before the Banco de la República.",
    "Registro de inversión, endeudamiento externo, cuentas de compensación y régimen sancionatorio cambiario.": "Investment registration, external debt, compensation accounts, and the foreign exchange penalty regime.",
    "Inversión extranjera": "Foreign investment",
    "Cuentas de compensación": "Compensation accounts",

    /* --- Equipo --- */
    "Quiénes lo atienden": "Who you'll work with",
    "Formados en las mejores universidades del país, con posgrados en España y Francia.": "Trained at the country's leading universities, with graduate degrees in Spain and France.",
    "Equipo de la firma, deslice para ver más": "The firm's team, swipe to see more",
    "Perfil anterior": "Previous profile",
    "Perfil siguiente": "Next profile",
    "Ver perfil": "See profile",
    "Ocultar perfil": "Hide profile",
    "Abogada · Socia": "Attorney · Partner",
    "Abogada": "Attorney",
    "Abogado": "Attorney",
    "Estudiante de Derecho": "Law student",

    "Máster en Asesoría Fiscal y Dirección Tributaria, Politécnica de Cataluña. Experiencia desde 2000.": "Master's in Tax Advisory and Tax Management, Polytechnic University of Catalonia. Practicing since 2000.",
    "Abogada de la Universidad Pontificia Bolivariana, con postgrado en Legislación Tributaria de la misma universidad y Máster en Asesoría Fiscal y Dirección Tributaria de la Universidad Politécnica de Cataluña, España. Ha laborado, entre otros, en Contabler S.A. y en González de Guevara & Abogados. Su práctica se ha enfocado en la asesoría en materia fiscal, corporativa y cambiaria, y en la estructuración e implementación de compra y venta de negocios.": "Attorney from Universidad Pontificia Bolivariana, with a postgraduate degree in Tax Legislation from the same university and a Master's in Tax Advisory and Tax Management from the Polytechnic University of Catalonia, Spain. She has worked at Contabler S.A. and González de Guevara & Abogados, among others. Her practice focuses on tax, corporate and foreign exchange counsel, and on structuring and executing the purchase and sale of businesses.",

    "Máster en Derecho Fiscal de los Negocios, Panthéon-Sorbonne. Experiencia desde 2000.": "Master's in Business Tax Law, Panthéon-Sorbonne. Practicing since 2000.",
    "Abogada de la Universidad Pontificia Bolivariana, con postgrado en Legislación Tributaria de la misma universidad y Máster en Derecho Fiscal de los Negocios de la Universidad Panthéon-Sorbonne, Francia. Ha laborado, entre otros, en Ignacio Sanín Bernal & Cía. S.A. Abogados y en González de Guevara & Abogados. Su práctica se ha enfocado en la asesoría en materia fiscal, corporativa y cambiaria, y en la estructuración e implementación de compra y venta de negocios.": "Attorney from Universidad Pontificia Bolivariana, with a postgraduate degree in Tax Legislation from the same university and a Master's in Business Tax Law from Panthéon-Sorbonne University, France. She has worked at Ignacio Sanín Bernal & Cía. S.A. Abogados and González de Guevara & Abogados, among others. Her practice focuses on tax, corporate and foreign exchange counsel, and on structuring and executing the purchase and sale of businesses.",

    "Especialista en Derecho de la Empresa, Universidad de los Andes. Más de ocho años de experiencia.": "Specialist in Business Law, Universidad de los Andes. More than eight years of experience.",
    "Abogada de la Universidad EAFIT, especialista en Derecho de la Empresa de la Universidad de los Andes. Cuenta con más de ocho años de experiencia en Derecho Empresarial, con énfasis en Derecho Tributario, Aduanero y Cambiario. Hace parte de la firma desde 2025.": "Attorney from Universidad EAFIT and a specialist in Business Law from Universidad de los Andes. She has more than eight years of experience in business law, with an emphasis on tax, customs and foreign exchange law. She joined the firm in 2025.",

    "Especialista en Derecho Tributario y Procesal Civil, Externado de Colombia. Enfocado en litigios.": "Specialist in Tax Law and Civil Procedure, Universidad Externado de Colombia. Focused on litigation.",
    "Abogado con especialización en Derecho Tributario y en Derecho Procesal Civil de la Universidad Externado de Colombia. Fue coordinador del área de litigios en una firma dedicada a la defensa del sector de infraestructura y asesor de la Secretaría de Hacienda de una entidad territorial. Hace parte de la firma desde 2025.": "Attorney with specializations in Tax Law and Civil Procedure from Universidad Externado de Colombia. He led the litigation practice at a firm devoted to defending the infrastructure sector and advised the treasury department of a regional government. He joined the firm in 2025.",

    "Universidad EAFIT, énfasis en Derecho Financiero y Bursátil. En la firma desde 2023.": "Universidad EAFIT, with an emphasis on financial and securities law. At the firm since 2023.",
    "Abogada de la Universidad EAFIT. Realizó su énfasis en Derecho Financiero y Bursátil. Su práctica se ha enfocado en acompañamiento corporativo y tributario. Hace parte de la firma desde el año 2023.": "Attorney from Universidad EAFIT, with an emphasis on financial and securities law. Her practice focuses on corporate and tax support. She joined the firm in 2023.",

    "Universidad EAFIT, énfasis en Derecho Financiero y Bursátil e Internacional. En la firma desde 2024.": "Universidad EAFIT, with an emphasis on financial, securities and international law. At the firm since 2024.",
    "Abogada de la Universidad EAFIT. Hizo su énfasis en Derecho Financiero y Bursátil, y Derecho Internacional. Hace parte de la firma desde el año 2024.": "Attorney from Universidad EAFIT, with an emphasis on financial and securities law and on international law. She joined the firm in 2024.",

    "Universidad EAFIT, con énfasis en Derecho Tributario. En la firma desde 2025.": "Universidad EAFIT, with an emphasis on tax law. At the firm since 2025.",
    "Estudiante de Derecho de la Universidad EAFIT. Se encuentra realizando su énfasis en Derecho Tributario. Hace parte de la firma desde el año 2025.": "Law student at Universidad EAFIT, currently pursuing an emphasis on tax law. He joined the firm in 2025.",

    /* --- Actualidad --- */
    "Circulares VM Legal": "VM Legal Circulars",
    "Los cambios normativos y jurisprudenciales que afectan a nuestros clientes. Filtre por área o busque por palabra clave.": "The regulatory and case-law changes that affect our clients. Filter by area or search by keyword.",
    "Buscar en las circulares": "Search the circulars",
    "Buscar: renta, DIAN, patrimonio…": "Search: income tax, DIAN, wealth tax…",
    "Filtrar por área": "Filter by area",
    "Todas": "All",
    "Tributario": "Tax",
    "Societario": "Corporate",
    "Cambiario": "Foreign exchange",
    "Aduanero": "Customs",
    "Ver circular (PDF)": "View circular (PDF)",

    "25 de febrero de 2026": "February 25, 2026",
    "29 de abril de 2024": "April 29, 2024",
    "15 de abril de 2024": "April 15, 2024",
    "8 de abril de 2024": "April 8, 2024",
    "2 de abril de 2024": "April 2, 2024",
    "22 de enero de 2024": "January 22, 2024",
    "10 de enero de 2024": "January 10, 2024",
    "20 de diciembre de 2023": "December 20, 2023",
    "15 de noviembre de 2023": "November 15, 2023",

    "Circular N.º 7 de 2026 — Impuesto al patrimonio de personas jurídicas": "Circular No. 7 of 2026 — Wealth tax on legal entities",
    "El Decreto 0173, dictado dentro del estado de emergencia del Decreto 0150, tiene efectos directos sobre el impuesto al patrimonio de las personas jurídicas.": "Decree 0173, issued under the state of emergency declared by Decree 0150, has direct effects on the wealth tax applicable to legal entities.",
    "Circular N.º 7 de 2024": "Circular No. 7 of 2024",
    "Formulario 330 disponible para el impuesto a los plásticos de un solo uso, nuevos requisitos para actuar como autorretenedor de renta y deducibilidad del castigo de cartera.": "Form 330 is available for the single-use plastics tax, new requirements to act as an income tax self-withholding agent, and deductibility of bad debt write-offs.",
    "Circular N.º 6 de 2024": "Circular No. 6 of 2024",
    "Precisiones de la DIAN sobre el impuesto de renta y la procedencia de costos y deducciones del año gravable.": "DIAN guidance on income tax and on the admissibility of costs and deductions for the taxable year.",
    "Circular N.º 5 de 2024": "Circular No. 5 of 2024",
    "Recomendaciones para las asambleas ordinarias de accionistas y los deberes de reporte ante la Superintendencia de Sociedades.": "Recommendations for annual shareholders' meetings and reporting duties before the Superintendence of Companies.",
    "Circular N.º 4 de 2024": "Circular No. 4 of 2024",
    "Alcance de la Resolución 000008 de 2024 y sus efectos sobre las obligaciones formales de los contribuyentes.": "Scope of Resolution 000008 of 2024 and its effects on taxpayers' formal obligations.",
    "Circular N.º 2 de 2024 — Acuerdo 093 de Medellín": "Circular No. 2 of 2024 — Medellín Agreement 093",
    "Cambios en el régimen tributario de Medellín y su impacto sobre el impuesto de industria y comercio.": "Changes to Medellín's tax regime and their impact on the industry and commerce tax.",
    "Circular N.º 27 de 2023": "Circular No. 27 of 2023",
    "Doctrina de la DIAN del último trimestre y novedades del calendario tributario del año siguiente.": "DIAN doctrine from the last quarter and updates to the following year's tax calendar.",
    "Circular N.º 26 de 2023": "Circular No. 26 of 2023",
    "Aplicación de la reforma tributaria y tratamiento de las deducciones especiales para el cierre del año.": "Application of the tax reform and treatment of special deductions at year-end.",
    "Circular N.º 22 de 2023": "Circular No. 22 of 2023",
    "Reglamentación de las operaciones de comercio exterior y sus obligaciones cambiarias asociadas.": "Rules for foreign trade transactions and their related foreign exchange obligations.",

    "Elija un área o escriba una palabra clave para ver las circulares.": "Choose an area or type a keyword to see the circulars.",
    "No encontramos circulares con ese criterio. Pruebe con otra palabra o área.": "No circulars match that search. Try another keyword or area.",
    "Ver todas las circulares": "View all circulars",
    "Archivo completo desde 2017 · más de 150 publicaciones": "Full archive since 2017 · more than 150 publications",

    /* --- Contacto --- */
    "Hablemos de su caso": "Let's talk about your case",
    "Un socio revisa cada solicitud. Respondemos dentro del siguiente día hábil.": "A partner reviews every request. We reply within the next business day.",
    "Oficina": "Office",
    "Edificio DHL · Medellín, Colombia": "DHL Building · Medellín, Colombia",
    "Edificio DHL · Medellín": "DHL Building · Medellín",
    "Teléfono": "Phone",
    "Correo": "Email",
    "Horario": "Hours",
    "Lunes a viernes · 8:00 a. m. – 6:00 p. m.": "Monday to Friday · 8:00 a.m. – 6:00 p.m.",
    "Solicitar una asesoría": "Request a consultation",
    "Nombre completo": "Full name",
    "Empresa": "Company",
    "Correo electrónico": "Email address",
    "Área de consulta": "Area of inquiry",
    "Seleccione un área…": "Select an area…",
    "Compra o venta de negocios": "Purchase or sale of a business",
    "Otro": "Other",
    "Cuéntenos su caso": "Tell us about your case",
    "Autorizo el tratamiento de mis datos conforme a la": "I authorize the processing of my data under the",
    "Política de Tratamiento de Datos": "Data Processing Policy",
    "Enviar solicitud": "Send request",
    "Solicitud enviada": "Request sent",
    "Gracias. Su solicitud fue registrada y le responderemos dentro del siguiente día hábil.": "Thank you. Your request was recorded and we will reply within the next business day.",
    "Demostración: el formulario valida los campos pero no envía datos reales.": "Demo: the form validates the fields but does not send real data.",

    /* --- Mensajes de validación --- */
    "Por favor indíquenos su nombre.": "Please tell us your name.",
    "Necesitamos un correo válido para responderle.": "We need a valid email address to reply.",
    "Cuéntenos brevemente en qué podemos ayudarle.": "Tell us briefly how we can help.",
    "Necesitamos su autorización para tratar los datos.": "We need your authorization to process the data.",
    "Este campo es obligatorio.": "This field is required.",

    /* --- Pie --- */
    "Firma de abogados fundada en 2012 en Medellín. Derecho tributario, comercial, corporativo y cambiario.": "Law firm founded in 2012 in Medellín. Tax, commercial, corporate and foreign exchange law.",
    "Firma": "Firm",
    "Navegación del pie": "Footer navigation",
    "© 2026 VM Legal S.A.S. Todos los derechos reservados.": "© 2026 VM Legal S.A.S. All rights reserved.",
    "Volver a la propuesta": "Back to the proposal",
    "Escribir por WhatsApp": "Message us on WhatsApp",

    /* --- Metadatos del documento --- */
    "__title": "VM Legal · Tax, commercial, corporate and foreign exchange lawyers — Medellín",
    "__description": "VM Legal is a law firm founded in 2012 in Medellín. We advise domestic and international companies and families on tax, commercial, corporate and foreign exchange law, and on the purchase and sale of businesses."
  };

  var ATTRS = ['placeholder', 'aria-label', 'title', 'alt'];
  var lang = 'es';
  var listeners = [];
  var originals = new WeakMap();   // nodo → texto original en español
  var attrOriginals = new WeakMap();

  function store(key) {
    try { localStorage.setItem('vm-lang', key); } catch (e) { /* modo privado */ }
  }
  function restore() {
    try { return localStorage.getItem('vm-lang'); } catch (e) { return null; }
  }

  /* Traduce una cadena suelta (lo usan los textos que genera el JS). */
  function t(es) {
    return lang === 'en' && EN[es] ? EN[es] : es;
  }

  function walkText(toEnglish) {
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var n;
    while ((n = w.nextNode())) {
      var p = n.parentElement;
      if (!p || p.closest('script, style')) continue;
      // Nodos que reescribe sitio.js: los traduce él con t(), o los dos
      // sistemas se pisarían y restaurarían el texto equivocado.
      if (p.closest('[data-i18n-skip]')) continue;

      if (!originals.has(n)) {
        var raw = n.textContent;
        var key = raw.replace(/\s+/g, ' ').trim();
        if (key.length < 2 || !EN[key]) continue;
        originals.set(n, { raw: raw, key: key });
      }
      var o = originals.get(n);
      // Se conserva el espaciado original alrededor del texto.
      var lead = o.raw.match(/^\s*/)[0];
      var tail = o.raw.match(/\s*$/)[0];
      n.textContent = toEnglish ? lead + EN[o.key] + tail : o.raw;
    }
  }

  function walkAttrs(toEnglish) {
    ATTRS.forEach(function (attr) {
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var map = attrOriginals.get(el) || {};
        if (!(attr in map)) {
          var v = el.getAttribute(attr);
          if (!v || !EN[v.trim()]) return;
          map[attr] = v;
          attrOriginals.set(el, map);
        }
        var orig = map[attr];
        el.setAttribute(attr, toEnglish ? EN[orig.trim()] : orig);
      });
    });
  }

  function apply(next) {
    lang = next === 'en' ? 'en' : 'es';
    var en = lang === 'en';

    walkText(en);
    walkAttrs(en);

    document.documentElement.lang = lang;
    document.title = en ? EN.__title : (originals.__title || document.title);

    var desc = document.querySelector('meta[name="description"]');
    if (desc) {
      if (!originals.__desc) originals.__desc = desc.content;
      desc.content = en ? EN.__description : originals.__desc;
    }

    document.querySelectorAll('.topbar__lang button').forEach(function (b) {
      var on = b.getAttribute('lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });

    store(lang);
    listeners.forEach(function (fn) { fn(lang); });
  }

  function init() {
    originals.__title = document.title;
    document.querySelectorAll('.topbar__lang button').forEach(function (b) {
      b.addEventListener('click', function () { apply(b.getAttribute('lang')); });
    });
    var saved = restore();
    if (saved === 'en') apply('en');
    else apply('es');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    t: t,
    apply: apply,
    get lang() { return lang; },
    onChange: function (fn) { listeners.push(fn); }
  };
})();
