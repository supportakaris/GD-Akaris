(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerPolicy&&(e.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?e.credentials="include":a.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(a){if(a.ep)return;a.ep=!0;const e=o(a);fetch(a.href,e)}})();const c=[["01","Adopción","Tu equipo tiene HubSpot, pero no lo utiliza correctamente."],["02","Visibilidad","No confías completamente en tu pipeline o forecast."],["03","Alineación","Marketing y ventas trabajan con información diferente."],["04","Eficiencia","Existen demasiadas tareas manuales y seguimientos pendientes."],["05","Datos","Tus datos están duplicados, incompletos o desorganizados."],["06","Automatización","Necesitas automatizar procesos comerciales o de servicio."],["07","Integraciones","Quieres integrar HubSpot con otras herramientas de tu operación."],["08","IA aplicada","Estás evaluando cómo incorporar IA sin perder control sobre procesos y datos."],["09","Escalabilidad","Tu empresa está creciendo y el sistema actual ya no escala."]],l=[["Más trazabilidad.","Saber de dónde vienen las oportunidades, quién las atiende y qué está pasando con ellas."],["Más control.","Procesos claros, responsabilidades definidas y datos en los que puedas confiar."],["Menos trabajo manual.","Automatización aplicada donde realmente libera tiempo y reduce errores."],["Mejores decisiones.","Pipeline, forecast y reportes que reflejen lo que está ocurriendo en el negocio."],["Una operación preparada para crecer.","Un sistema que pueda evolucionar con tu empresa sin multiplicar el caos."]];document.querySelector("#app").innerHTML=`
  <header class="nav">
    <a class="brand" href="#inicio" aria-label="AKARIS Digital — inicio"><img src="/akaris-logo.svg" alt="AKARIS Digital" /></a>
    <nav class="nav-pill" aria-label="Navegación principal">
      <a class="active" href="#inicio">Inicio</a>
      <a href="#operacion">Operación</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a class="nav-cta" href="#contacto">Hablemos <span>↗</span></a>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-noise" aria-hidden="true"></div>
      <div class="eyebrow"><span></span> Contacto — AKARIS Digital</div>
      <h1>Hablemos de lo que está <em>frenando</em> tu operación comercial</h1>
      <div class="hero-visual" aria-hidden="true">
        <div class="visual-card card-a"><i></i><b></b><b></b><b></b></div>
        <div class="visual-card card-b"><span></span><span></span><span></span><span></span><span></span></div>
        <div class="visual-card card-c"><i></i><i></i><i></i></div>
      </div>
      <div class="hero-bottom">
        <p>Si tu CRM no refleja lo que realmente pasa en ventas, tu equipo depende demasiado de procesos manuales o sabes que HubSpot podría estar funcionando mucho mejor, conversemos.</p>
        <a class="button button-light" href="#contacto">Agendar una conversación <span>↘</span></a>
      </div>
      <div class="capabilities" aria-label="Servicios">HubSpot <i>·</i> RevOps <i>·</i> Automatización <i>·</i> IA <i>·</i> Integraciones</div>
    </section>

    <section class="intro section-pad" id="operacion">
      <div class="section-label">01 / El punto de partida</div>
      <div class="intro-copy">
        <h2>Cuéntanos qué está pasando</h2>
        <p class="lead">No necesitas tener la solución clara antes de contactarnos.</p>
        <p>Puedes llegar con un problema específico, una implementación pendiente o simplemente con la sensación de que tu operación comercial se volvió más compleja de lo que debería.</p>
      </div>
    </section>

    <section class="scenarios section-pad">
      <div class="section-label">Escenarios que podemos revisar contigo</div>
      <div class="scenario-list">
        ${c.map(([i,s,o])=>`<article class="scenario"><span class="number">${i}</span><span class="tag">${s}</span><p>${o}</p><span class="arrow">↗</span></article>`).join("")}
      </div>
    </section>

    <section class="contact section-pad" id="contacto">
      <div class="contact-copy">
        <div class="section-label light">02 / Primera conversación</div>
        <h2>Empecemos por entender tu operación</h2>
        <p>Completa el formulario y cuéntanos brevemente qué quieres resolver.</p>
        <div class="contact-note"><span>01</span><p>Sin discursos comerciales innecesarios.<br><strong>Primero entendemos el problema.</strong></p></div>
      </div>
      <div class="form-shell">
        <div class="form-top"><span>Formulario de contacto</span><span class="status"><i></i> Disponible</span></div>
        <div id="hubspot-form" class="hubspot-form"><p class="loading">Cargando formulario…</p></div>
      </div>
    </section>

    <section class="systems section-pad">
      <div class="section-label">03 / Nuestra forma de trabajar</div>
      <div class="systems-head">
        <h2>No vendemos configuraciones aisladas. <em>Diseñamos sistemas que funcionan.</em></h2>
        <p>Tener un CRM no significa tener una operación comercial bajo control.</p>
      </div>
      <p class="systems-statement">AKARIS conecta <strong>personas, procesos, datos y tecnología</strong> para construir un sistema donde marketing, ventas y servicio puedan trabajar sobre una misma realidad.</p>
      <div class="outcome-intro">El objetivo no es agregar más herramientas. Es ayudarte a tener:</div>
      <div class="outcomes">
        ${l.map(([i,s],o)=>`<article><span>0${o+1}</span><h3>${i}</h3><p>${s}</p></article>`).join("")}
      </div>
    </section>

    <section class="partner section-pad">
      <div class="partner-mark"><span class="orbit"></span><span>H</span></div>
      <div>
        <div class="section-label light">HubSpot Solutions Partner</div>
        <h2>Una visión que va más allá de configurar el software.</h2>
        <p>Analizamos cómo está diseñada tu operación comercial, cómo fluye la información entre equipos, qué procesos deberían automatizarse y qué necesita cambiar para que HubSpot se convierta en una herramienta real de ejecución y crecimiento.</p>
      </div>
    </section>

    <section class="closing section-pad">
      <div class="section-label">04 / Una pregunta para empezar</div>
      <h2>¿Tu HubSpot realmente está ayudando a tu empresa a <em>vender, automatizar y crecer?</em></h2>
      <p>Si la respuesta no es completamente clara, probablemente vale la pena revisarlo.</p>
      <a class="button button-dark" href="#contacto">Hablemos de tu operación <span>↗</span></a>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-main">
      <div class="footer-brand">
        <img src="/akaris-logo.svg" alt="AKARIS Digital" />
        <p>Get Revenue Systems Insights in Your Inbox</p>
      </div>
      <nav class="footer-links" aria-label="Footer navigation">
        <div><strong>Main Pages</strong><a href="#inicio">Home</a><a href="https://akarisdigital.com/features">Services</a><a href="https://akarisdigital.com/contact">Contact</a></div>
        <div><strong>Other</strong><a href="https://akarisdigital.com/about">About</a><a href="https://akarisdigital.com/team-member/david-de-la-cruz">Team</a><a href="https://akarisdigital.com/articles">Blog</a></div>
        <div><strong>Legal &amp; Utilities</strong><a href="https://akarisdigital.com/integration">Integration</a><a href="https://akarisdigital.com/download">Download</a><a href="https://akarisdigital.com/changelog">Changelog</a></div>
      </nav>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Akaris Digital. All rights reserved.</p>
      <div class="footer-socials"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://x.com/madebykota" aria-label="X">X</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a></div>
      <a class="footer-cta" href="https://madebykota.com/buy/5bfe6c88-c4c2-4e5d-a5a3-d36f5107ad77">Let's Connect</a>
    </div>
  </footer>
`;const t=document.createElement("script");t.src="https://js-na2.hsforms.net/forms/embed/v2.js";t.charset="utf-8";t.onload=()=>{document.querySelector(".loading")?.remove(),window.hbspt?.forms.create({portalId:"245688389",formId:"39527036-95e2-4d08-9738-436bb42cca85",region:"na2",target:"#hubspot-form"})};document.body.appendChild(t);const d=new IntersectionObserver(i=>{i.forEach(s=>s.isIntersecting&&s.target.classList.add("visible"))},{threshold:.08});document.querySelectorAll("section:not(.hero), .scenario, .outcomes article").forEach(i=>d.observe(i));
