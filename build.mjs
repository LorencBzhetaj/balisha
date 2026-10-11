// Gjeneratori: një shabllon → të gjitha faqet e llojit, në çdo gjuhë.
// node build.mjs         → staging (vend-mbajtës dhe pyetje të dukshme, noindex)
// node build.mjs --prod  → refuzon nëse ka ende të dhëna që mungojnë ose pyetje pa përgjigje
import { mkdir, writeFile, rm, cp, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  site, langs, routes, t, cta, companies, experts, home, servicesHub, teamPage, team, aboutPage, contactPage, legal, notFound,
  services, related, M,
} from './src/content/site.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const PROD = process.argv.includes('--prod');
const LANGS = Object.keys(langs);

/* ---------- Ndihmës ---------- */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
let log; // { missing:Set, questions:Map } për faqen aktuale

// Vlerë → HTML. Pranon string, numër, {sq,en}, M(), Q(), PHONE/EMAIL, {link}, ose listë të tyre.
function tx(v, lang) {
  if (v == null) return '';
  if (Array.isArray(v)) return v.map((x) => tx(x, lang)).join('');
  if (typeof v !== 'object') return esc(v);
  if (v.missing) {
    log.missing.add(v.missing.sq);
    return `<span class="ls-missing" title="${lang === 'sq' ? 'Mungon nga klienti' : 'Missing from client'}">[${esc(v.missing[lang])}]</span>`;
  }
  if (v.question) {
    log.questions.set(v.question.sq, v.question.note);
    return PROD ? esc(v.question[lang]) : `<mark class="ls-question" title="${esc(v.question.note)}">${esc(v.question[lang])}</mark>`;
  }
  if (v.ref === 'phone') return `<a href="tel:${site.phone.tel}">${esc(site.phone.display)}</a>`;
  if (v.ref === 'email') return site.email.missing ? tx(site.email, lang) : `<a href="mailto:${esc(site.email)}">${esc(site.email)}</a>`;
  if (v.link) return `<a href="${routes[v.link][lang]}">${esc(v.label)}</a>`;
  if (lang in v) return tx(v[lang], lang);
  return '';
}
// Vlerë → tekst i thjeshtë (meta, JSON-LD); të dhënat që mungojnë hiqen
function plain(v, lang) {
  if (v == null) return '';
  if (Array.isArray(v)) return v.map((x) => plain(x, lang)).join('').replace(/\s+/g, ' ').trim();
  if (typeof v !== 'object') return String(v);
  if (v.missing) return '';
  if (v.question) return v.question[lang];
  if (v.ref === 'phone') return site.phone.display;
  if (v.ref === 'email') return site.email.missing ? '' : site.email;
  if (v.link) return v.label;
  return lang in v ? plain(v[lang], lang) : '';
}
const has = (v) => v != null && !(typeof v === 'object' && v.missing);
const other = (lang) => (lang === 'sq' ? 'en' : 'sq');
const svc = (id) => services.find((s) => s.id === id);
const svcPath = (s, lang) => routes.services[lang] + s.slug[lang] + '/';

const ICONS = {
  logo: '<path d="M16 4v24M8 28h16M6 10h20M6 10l-3 8h6zM26 10l-3 8h6z"/>',
  stop: '<path d="M8 3h8l5 5v8l-5 5H8l-5-5V8z"/><path d="M12 7.5v5.5M12 16.5v.01"/>',
  person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 12h18"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.6-4.5M4 3v4h4M4 13a8 8 0 0 0 14.6 4.5M20 21v-4h-4"/>',
  chart: '<path d="M3 21h18M6 21V11M11 21V5M16 21v-7M21 21V9"/>',
  scale: '<path d="M12 3v18M7 21h10M4 7h16M4 7l-2.5 6h5zM20 7l-2.5 6h5z"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8.5 7h2M13.5 7h2M8.5 11h2M13.5 11h2M8.5 15h2M13.5 15h2M10 21v-3h4v3"/>',
  shield: '<path d="M12 3 4 7v5c0 4.4 3.4 8 8 9 4.6-1 8-4.6 8-9V7z"/><path d="m8.5 12 2.5 2.5 4.5-4.5"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
};
const icon = (name, cls = '') => `<svg class="${cls}" viewBox="${name === 'logo' ? '0 0 32 32' : '0 0 24 24'}" fill="none" stroke="currentColor" stroke-width="${name === 'logo' ? 2 : 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

/* ---------- Blloqet e përbashkëta ---------- */
function header(lang, key, altPath) {
  const items = ['services', 'team', 'about', 'contact']
    .map((k) => `<li><a class="ls-nav__link" href="${routes[k][lang]}"${k === key ? ' aria-current="page"' : ''}>${tx(t.nav[k], lang)}</a></li>`)
    .join('');
  return `<a class="ls-skip" href="#main">${tx(t.skip, lang)}</a>
<header class="ls-head">
  <div class="ls-head__in">
    ${logo(lang)}
    <nav class="ls-nav" id="ls-nav" aria-label="${lang === 'sq' ? 'Kryesore' : 'Main'}">
      <ul class="ls-nav__list">${items}</ul>
      <a class="ls-btn ls-nav__cta" href="${routes.contact[lang]}">${tx(t.book, lang)}</a>
      <a class="ls-btn ls-btn--ghost ls-nav__cta" href="tel:${site.phone.tel}">${icon('phone', 'ls-ic')}${esc(site.phone.display)}</a>
    </nav>
    <a class="ls-lang" href="${altPath}" hreflang="${other(lang)}" lang="${other(lang)}" title="${tx(t.switchLang, lang)}"><span${lang === 'sq' ? ' class="is-on"' : ''}>SQ</span> · <span${lang === 'en' ? ' class="is-on"' : ''}>EN</span></a>
    <a class="ls-btn ls-head__cta" href="${routes.contact[lang]}">${tx(t.book, lang)}</a>
    <button class="ls-burger" type="button" aria-controls="ls-nav" aria-expanded="false" data-open="${tx(t.menu, lang)}" data-close="${tx(t.close, lang)}">
      <span class="ls-burger__bars" aria-hidden="true"></span><span class="ls-sr">${tx(t.menu, lang)}</span>
    </button>
  </div>
</header>`;
}

const logo = (lang, light) =>
  `<a class="ls-logo${light ? ' ls-logo--light' : ''}" href="${routes.home[lang]}" aria-label="${esc(plain(site.name, lang))}">${icon('logo')}<span class="ls-logo__txt"><b>${site.short}</b><small>Studio Legale</small></span></a>`;

function footer(lang) {
  const li = (href, label) => `<li><a href="${href}">${label}</a></li>`;
  return `<footer class="ls-foot">
  <div class="ls-wrap">
    <div class="ls-foot__grid">
      <div>
        ${logo(lang, true)}
        <p class="ls-foot__addr">${tx(site.address, lang)}<br><a href="tel:${site.phone.tel}">${esc(site.phone.display)}</a> · ${tx({ ref: 'email' }, lang)}<br>${tx(site.hours, lang)}</p>
      </div>
      <div><h2 class="ls-foot__h">${tx(t.footer.services, lang)}</h2><ul>${services.map((s) => li(svcPath(s, lang), tx(s.name, lang))).join('')}</ul></div>
      <div><h2 class="ls-foot__h">${tx(t.footer.studio, lang)}</h2><ul>${['services', 'team', 'about', 'contact'].map((k) => li(routes[k][lang], tx(t.nav[k], lang))).join('')}</ul></div>
      <div><h2 class="ls-foot__h">${tx(t.footer.legal, lang)}</h2><ul>${['privacy', 'cookies', 'terms'].map((k) => li(routes[k][lang], tx(t.footer[k], lang))).join('')}</ul></div>
    </div>
    <div class="ls-foot__bottom"><span>© ${site.year} ${tx(site.name, lang)} · ${tx(site.nipt, lang)}</span><a href="${routes.home[other(lang)]}" hreflang="${other(lang)}">${tx(t.switchLang, lang)}</a></div>
  </div>
</footer>`;
}

function crumbs(lang, trail) {
  const items = [[t.home, routes.home[lang]], ...trail];
  return `<nav class="ls-crumbs" aria-label="Breadcrumb"><ol>${items
    .map(([label, href], i) => (i === items.length - 1 ? `<li><span aria-current="page">${tx(label, lang)}</span></li>` : `<li><a href="${href}">${tx(label, lang)}</a></li>`))
    .join('')}</ol></nav>`;
}
const crumbsLd = (lang, trail) => {
  const items = [[t.home, routes.home[lang]], ...trail];
  return { '@type': 'BreadcrumbList', itemListElement: items.map(([label, href], i) => ({ '@type': 'ListItem', position: i + 1, name: plain(label, lang), item: site.domain + href })) };
};

function pageHero(lang, trail, title, lead, extra = '') {
  return `<section class="ls-phero"><div class="ls-wrap">
  ${crumbs(lang, trail)}
  <h1 class="ls-phero__t">${tx(title, lang)}</h1>
  ${lead ? `<p class="ls-phero__lead">${tx(lead, lang)}</p>` : ''}${extra}
</div></section>`;
}

const ctaBand = (lang) => `<section class="ls-sec ls-sec--tight"><div class="ls-wrap">
  <div class="ls-cta"><div><h2 class="ls-cta__t">${tx(cta.title, lang)}</h2><p>${tx(cta.text, lang)}</p></div>
  <div class="ls-cta__row"><a class="ls-btn ls-btn--light" href="${routes.contact[lang]}">${tx(t.book, lang)}</a><a class="ls-btn ls-btn--ghost-light" href="tel:${site.phone.tel}">${icon('phone', 'ls-ic')}${esc(site.phone.display)}</a></div></div>
</div></section>`;

// Teksti i plotë: paragrafë, nëntituj, lista
function blocks(list, lang) {
  return list
    .map((b) => {
      if (typeof b === 'string' || Array.isArray(b)) return `<p>${tx(b, lang)}</p>`;
      if (b.h) return `<h2>${tx(b.h, lang)}</h2>`;
      if (b.ul) return `<ul class="ls-checks">${b.ul.map((i) => `<li>${tx(i, lang)}</li>`).join('')}</ul>`;
      if (b.ol) return `<ol class="ls-olist"${b.type ? ` type="${b.type}"` : ''}>${b.ol.map((i) => `<li>${tx(i, lang)}</li>`).join('')}</ol>`;
      return '';
    })
    .join('\n');
}

/* ---------- Kartat e shërbimeve + dritarja me tekstin e plotë ---------- */
function serviceCard(s, lang) {
  const name = tx(s.name, lang);
  const title = s.alert ? name.replace(/^(Ndal!|Stop!)/, '<span class="ls-card__stop">$1</span>') : name;
  return `<li class="ls-cards__item" data-audience="${s.audience.join(' ')}"><a class="ls-card${s.alert ? ' ls-card--alert' : ''}" href="${svcPath(s, lang)}" data-dialog="tpl-${s.id}">
  <span class="ls-card__ic">${icon(s.icon)}</span>
  <h3 class="ls-card__t">${title}</h3>
  <p class="ls-card__p">${tx(s.short, lang)}</p>
  <span class="ls-card__more">${tx(t.readMore, lang)} ${icon('arrow', 'ls-ic')}</span>
</a></li>`;
}

function dialogs(lang) {
  const tpls = services
    .map(
      (s) => `<template id="tpl-${s.id}">
  <div class="ls-dialog__head"><span class="ls-card__ic">${icon(s.icon)}</span><h2 class="ls-dialog__t" id="ls-dialog-title">${tx(s.name, lang)}</h2></div>
  <div class="ls-prose">${blocks(s.body[lang], lang)}</div>
  <div class="ls-dialog__foot"><a class="ls-btn" href="${routes.contact[lang]}">${tx(t.book, lang)}</a><a class="ls-btn ls-btn--ghost" href="tel:${site.phone.tel}">${icon('phone', 'ls-ic')}${esc(site.phone.display)}</a><a class="ls-dialog__page" href="${svcPath(s, lang)}">${tx(t.openPage, lang)} ${icon('arrow', 'ls-ic')}</a></div>
</template>`,
    )
    .join('\n');
  return `${tpls}
<dialog class="ls-dialog" id="ls-dialog" aria-labelledby="ls-dialog-title">
  <button class="ls-dialog__close" type="button" data-close-dialog><span class="ls-sr">${tx(t.close, lang)}</span>${icon('close')}</button>
  <div class="ls-dialog__body"></div>
</dialog>`;
}

/* ---------- Shablloni i faqes ---------- */
function layout({ lang, key, title, desc, path, altPath, body, ld, noindex }) {
  const L = langs[lang];
  const alts = { [lang]: path, [other(lang)]: altPath };
  const robots = PROD && !noindex ? 'index,follow' : 'noindex,nofollow';
  return `<!doctype html>
<html lang="${L.code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="${robots}">
<link rel="canonical" href="${site.domain + path}">
<link rel="alternate" hreflang="sq" href="${site.domain + alts.sq}">
<link rel="alternate" hreflang="en" href="${site.domain + alts.en}">
<link rel="alternate" hreflang="x-default" href="${site.domain + alts.sq}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(plain(site.name, lang))}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${site.domain + path}">
<meta property="og:locale" content="${L.locale}">
<meta property="og:locale:alternate" content="${langs[other(lang)].locale}">
<meta name="theme-color" content="#0d2a33">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="/assets/css/site.css">
${ld ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': ld })}</script>\n` : ''}<script src="/assets/js/site.js" defer></script>
</head>
<body class="ls${PROD ? '' : ' ls--staging'}">
${header(lang, key, altPath)}
<main id="main">
${body}
</main>
${footer(lang)}
</body>
</html>
`;
}

const orgLd = (lang) => {
  const o = {
    '@type': 'LegalService',
    '@id': site.domain + '/#org',
    name: plain(site.name, lang),
    url: site.domain + routes.home[lang],
    telephone: site.phone.tel,
    areaServed: { '@type': 'Country', name: 'Albania' },
    knowsAbout: services.map((s) => plain(s.name, lang)),
  };
  if (has(site.email)) o.email = site.email;
  if (has(site.address)) o.address = plain(site.address, lang);
  return o;
};

/* ---------- Faqet ---------- */
function pageHome(lang) {
  const facts = [
    [String(site.experienceYears), { sq: 'vjet përvojë', en: 'years of experience' }],
    [String(services.length), { sq: 'fusha shërbimi', en: 'practice areas' }],
    [`<a href="tel:${site.phone.tel}">${esc(site.phone.display)}</a>`, { sq: 'telefon', en: 'phone' }],
    [tx(site.hours, lang), { sq: 'orari', en: 'hours' }],
  ];
  const body = `<section class="ls-hero" aria-labelledby="h-hero"><div class="ls-hero__in">
  <div>
    <p class="ls-eye ls-eye--light">${tx(home.eyebrow, lang)}</p>
    <h1 class="ls-hero__title" id="h-hero">${tx(home.title, lang)}</h1>
    <p class="ls-hero__lead">${tx(home.lead, lang)} ${tx(t.service.sideText, lang)}</p>
    <div class="ls-hero__row"><a class="ls-btn" href="${routes.contact[lang]}">${tx(t.book, lang)}</a><a class="ls-btn ls-btn--ghost-light" href="#sherbimet">${tx(t.seeServices, lang)}</a></div>
  </div>
  <dl class="ls-facts">${facts.map(([v, l]) => `<div><dt>${tx(l, lang)}</dt><dd>${v}</dd></div>`).join('')}</dl>
</div></section>

<section class="ls-sec" id="sherbimet" aria-labelledby="h-services"><div class="ls-wrap">
  <div class="ls-sec__head"><div><p class="ls-eye">${tx(home.servicesEyebrow, lang)}</p><h2 class="ls-h2" id="h-services">${tx(home.servicesTitle, lang)}</h2><p class="ls-sub">${tx(home.servicesSub, lang)}</p></div><a class="ls-btn ls-btn--ghost" href="${routes.services[lang]}">${tx(t.allServices, lang)} ${icon('arrow', 'ls-ic')}</a></div>
  <ul class="ls-cards">${services.map((s) => serviceCard(s, lang)).join('')}</ul>
</div></section>

${proof(lang)}
${ctaBand(lang)}
${dialogs(lang)}`;

  return {
    path: routes.home[lang],
    html: layout({
      lang, key: 'home',
      title: `${plain(site.name, lang)} · ${plain(home.title, lang).replace(/\.$/, '')}`,
      desc: plain(home.meta, lang),
      path: routes.home[lang], altPath: routes.home[other(lang)], body,
      ld: [orgLd(lang), { '@type': 'WebSite', url: site.domain + routes.home[lang], name: plain(site.name, lang), inLanguage: lang }],
    }),
  };
}

function proof(lang) {
  return `<section class="ls-sec ls-sec--stone" aria-labelledby="h-proof"><div class="ls-wrap">
  <p class="ls-eye">${tx(home.proofEyebrow, lang)}</p><h2 class="ls-h2" id="h-proof">${tx(home.proofTitle, lang)}</h2><p class="ls-sub">${tx(home.proofSub, lang)}</p>
  <ul class="ls-cos">${companies
    .map((c) => `<li class="ls-co"><span class="ls-co__field">${tx(c.field, lang)}</span><h3 class="ls-co__name">${esc(c.name)}</h3>${c.now ? `<span class="ls-co__now">${tx(home.today, lang)}: <b>${esc(c.now)}</b></span>` : ''}<span class="ls-co__role">${tx(c.role, lang)}</span></li>`)
    .join('')}</ul>
  <h3 class="ls-h3">${tx(home.expertsTitle, lang)}</h3>
  <ul class="ls-chips">${experts.types[lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
</div></section>`;
}

function pageServicesHub(lang) {
  const count = (a) => services.filter((s) => s.audience.includes(a)).length;
  const filters = [['all', services.length], ['individ', count('individ')], ['biznes', count('biznes')]]
    .map(([k, n], i) => `<button type="button" class="ls-filter__btn" data-filter="${k}" aria-pressed="${i === 0}">${tx(t.audience[k], lang)} <span class="ls-filter__n">${n}</span></button>`)
    .join('');
  const trail = [[t.nav.services, routes.services[lang]]];
  const body = `${pageHero(lang, trail, servicesHub.title, servicesHub.lead, `<div class="ls-filter" role="group" aria-label="${lang === 'sq' ? 'Filtro shërbimet' : 'Filter services'}">${filters}</div>`)}
<section class="ls-sec"><div class="ls-wrap">
  <p class="ls-sub ls-sub--top">${tx(home.servicesSub, lang)}</p>
  <ul class="ls-cards" data-filterable>${services.map((s) => serviceCard(s, lang)).join('')}</ul>
</div></section>
${ctaBand(lang)}
${dialogs(lang)}`;
  return {
    path: routes.services[lang],
    html: layout({
      lang, key: 'services',
      title: `${plain(servicesHub.title, lang)} · ${plain(site.name, lang)}`,
      desc: plain(servicesHub.meta, lang),
      path: routes.services[lang], altPath: routes.services[other(lang)], body,
      ld: [orgLd(lang), crumbsLd(lang, trail), { '@type': 'ItemList', itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: plain(s.name, lang), url: site.domain + svcPath(s, lang) })) }],
    }),
  };
}

function pageService(s, lang) {
  const path = svcPath(s, lang);
  const trail = [[t.nav.services, routes.services[lang]], [s.name, path]];
  const body = `${pageHero(lang, trail, s.name, s.short)}
<div class="ls-wrap"><div class="ls-split">
  <article class="ls-prose ls-split__main">
    ${blocks(s.body[lang], lang)}
    <h2>${tx(t.service.related, lang)}</h2>
    <ul class="ls-rel">${related[s.id].map((id) => `<li><a href="${svcPath(svc(id), lang)}">${tx(svc(id).name, lang)}</a></li>`).join('')}</ul>
  </article>
  <aside class="ls-side" aria-labelledby="h-side">
    <h2 class="ls-side__t" id="h-side">${tx(t.service.sideTitle, lang)}</h2>
    <p>${tx(t.service.sideText, lang)}</p>
    <a class="ls-btn ls-btn--block" href="${routes.contact[lang]}">${tx(t.book, lang)}</a>
    <a class="ls-btn ls-btn--ghost ls-btn--block" href="tel:${site.phone.tel}">${icon('phone', 'ls-ic')}${esc(site.phone.display)}</a>
    <div class="ls-side__kv"><b>${tx(t.email, lang)}</b><span>${tx({ ref: 'email' }, lang)}</span></div>
    <div class="ls-side__kv"><b>${tx(t.hours, lang)}</b><span>${tx(site.hours, lang)}</span></div>
  </aside>
</div></div>
${ctaBand(lang)}`;
  return {
    path,
    html: layout({
      lang, key: 'services',
      title: `${plain(s.name, lang)} · ${plain(site.name, lang)}`,
      desc: plain(s.short, lang),
      path, altPath: svcPath(s, other(lang)), body,
      ld: [orgLd(lang), crumbsLd(lang, trail), { '@type': 'Service', name: plain(s.name, lang), description: plain(s.short, lang), provider: { '@id': site.domain + '/#org' }, areaServed: 'AL', url: site.domain + path }],
    }),
  };
}

function pageTeam(lang) {
  const trail = [[t.nav.team, routes.team[lang]]];
  const body = `${pageHero(lang, trail, teamPage.title, teamPage.lead)}
<section class="ls-sec"><div class="ls-wrap">
  <h2 class="ls-h2">${tx(teamPage.peopleTitle, lang)}</h2>
  <ul class="ls-team">${team
    .map((p) => `<li class="ls-person"><div class="ls-person__photo" role="img" aria-label="${lang === 'sq' ? 'Foto në pritje' : 'Photo pending'}"></div><h3 class="ls-person__name">${tx(p.name, lang)}</h3><p class="ls-person__role">${tx(p.role, lang)} · ${tx(p.area, lang)}</p></li>`)
    .join('')}</ul>
</div></section>
<section class="ls-sec ls-sec--stone"><div class="ls-wrap ls-two">
  <div><h2 class="ls-h2">${tx(teamPage.profilesTitle, lang)}</h2><ul class="ls-chips">${experts.types[lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
  <div><h2 class="ls-h2">${tx(teamPage.focusTitle, lang)}</h2><ul class="ls-chips">${experts.focus[lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
</div></section>
${ctaBand(lang)}`;
  return {
    path: routes.team[lang],
    html: layout({ lang, key: 'team', title: `${plain(teamPage.title, lang)} · ${plain(site.name, lang)}`, desc: plain(teamPage.meta, lang), path: routes.team[lang], altPath: routes.team[other(lang)], body, ld: [orgLd(lang), crumbsLd(lang, trail)] }),
  };
}

function pageAbout(lang) {
  const trail = [[t.nav.about, routes.about[lang]]];
  const body = `${pageHero(lang, trail, aboutPage.title, aboutPage.lead)}
<section class="ls-sec"><div class="ls-wrap ls-two">
  <div><h2 class="ls-h2">${tx(aboutPage.approachTitle, lang)}</h2><ul class="ls-quotes">${aboutPage.approach[lang].map((q) => `<li>${esc(q)}</li>`).join('')}</ul></div>
  <div><h2 class="ls-h2">${tx(aboutPage.representTitle, lang)}</h2><p class="ls-p">${tx(aboutPage.represent, lang)}</p>
    <h3 class="ls-h3">${tx(teamPage.focusTitle, lang)}</h3><ul class="ls-chips">${experts.focus[lang].map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
</div></section>
${proof(lang)}
${ctaBand(lang)}`;
  return {
    path: routes.about[lang],
    html: layout({ lang, key: 'about', title: `${plain(aboutPage.title, lang)} · ${plain(site.name, lang)}`, desc: plain(aboutPage.meta, lang), path: routes.about[lang], altPath: routes.about[other(lang)], body, ld: [orgLd(lang), crumbsLd(lang, trail), { '@type': 'AboutPage', url: site.domain + routes.about[lang] }] }),
  };
}

function pageContact(lang) {
  const f = contactPage.form;
  const trail = [[t.nav.contact, routes.contact[lang]]];
  const body = `${pageHero(lang, trail, contactPage.title, contactPage.lead)}
<div class="ls-wrap"><div class="ls-contact">
  <form class="ls-form" novalidate data-staging="${PROD ? 'false' : 'true'}" data-msg-required="${esc(plain(f.required, lang))}" data-msg-staging="${esc(plain(f.staging, lang))}">
    <div class="ls-form__two">
      <label class="ls-field"><span>${tx(f.name, lang)} *</span><input name="name" autocomplete="name" required></label>
      <label class="ls-field"><span>${tx(f.phone, lang)}</span><input name="phone" type="tel" autocomplete="tel" inputmode="tel"></label>
    </div>
    <label class="ls-field"><span>${tx(f.email, lang)}</span><input name="email" type="email" autocomplete="email"></label>
    <p class="ls-form__hint">${tx(f.phoneOrEmail, lang)}</p>
    <label class="ls-field"><span>${tx(f.service, lang)}</span><select name="service"><option value="">${tx(f.choose, lang)}</option>${services.map((s) => `<option value="${s.id}">${tx(s.name, lang)}</option>`).join('')}</select></label>
    <label class="ls-field"><span>${tx(f.message, lang)} *</span><textarea name="message" rows="5" required></textarea></label>
    <label class="ls-consent"><input type="checkbox" name="consent" required><span>${tx(f.consent[lang], lang)}</span></label>
    <div class="ls-form__row"><button class="ls-btn" type="submit">${tx(f.send, lang)}</button><p class="ls-form__status" role="status" aria-live="polite"></p></div>
    ${PROD ? '' : `<p class="ls-form__note">${tx(M('Adresa ku dërgohen kërkesat e formularit', 'Where form requests are delivered'), lang)}</p>`}
  </form>
  <div class="ls-office">
    <div class="ls-box"><h2 class="ls-box__t">${tx(t.phone, lang)}</h2><p><a class="ls-big" href="tel:${site.phone.tel}">${esc(site.phone.display)}</a></p></div>
    <div class="ls-box"><h2 class="ls-box__t">${tx(t.email, lang)}</h2><p>${tx({ ref: 'email' }, lang)}</p></div>
    <div class="ls-box"><h2 class="ls-box__t">${tx(t.address, lang)} · ${tx(t.hours, lang)}</h2><p>${tx(site.address, lang)}<br>${tx(site.hours, lang)}</p></div>
    <div class="ls-map" role="img" aria-label="${tx(contactPage.mapTitle, lang)}"><span>${tx(contactPage.mapPending, lang)}</span></div>
  </div>
</div></div>`;
  return {
    path: routes.contact[lang],
    html: layout({ lang, key: 'contact', title: `${plain(t.nav.contact, lang)} · ${plain(site.name, lang)}`, desc: plain(contactPage.meta, lang), path: routes.contact[lang], altPath: routes.contact[other(lang)], body, ld: [orgLd(lang), crumbsLd(lang, trail), { '@type': 'ContactPage', url: site.domain + routes.contact[lang] }] }),
  };
}

function pageLegal(key, lang) {
  const L = legal[key];
  const trail = [[L.title, routes[key][lang]]];
  const id = (i) => `s${i + 1}`;
  const table = (sec) =>
    sec.table
      ? `<div class="ls-table"><table><thead><tr>${L.table.head[lang].map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody><tr><td colspan="3">${tx(L.table.empty, lang)}</td></tr></tbody></table></div>`
      : '';
  const body = `${pageHero(lang, trail, L.title, null, `<p class="ls-tag">${tx(t.updated, lang)} ${tx(site.updated, lang)}${PROD ? '' : ` · <mark class="ls-question">${tx(t.draft, lang)}</mark>`}</p>`)}
<div class="ls-wrap"><div class="ls-legal">
  <nav class="ls-legal__nav" aria-label="${tx(t.sections, lang)}"><ol>${L.sections.map((s, i) => `<li><a href="#${id(i)}">${i + 1}. ${tx(s.h, lang)}</a></li>`).join('')}</ol></nav>
  <div class="ls-prose">${L.sections.map((s, i) => `<h2 id="${id(i)}">${i + 1}. ${tx(s.h, lang)}</h2>${blocks(s.body[lang], lang)}${table(s)}`).join('\n')}</div>
</div></div>`;
  if (!L.approved) log.questions.set(`Faqja ${plain(L.title, 'sq')}`, 'Draft i hartuar nga ne — duhet rishikuar dhe miratuar nga studioja.');
  return {
    path: routes[key][lang],
    html: layout({ lang, key, title: `${plain(L.title, lang)} · ${plain(site.name, lang)}`, desc: plain(L.meta, lang), path: routes[key][lang], altPath: routes[key][other(lang)], body, ld: [crumbsLd(lang, trail)] }),
  };
}

function page404() {
  const lang = 'sq';
  const links = (l) =>
    [['home', t.home], ['services', t.nav.services], ['about', t.nav.about], ['contact', t.nav.contact]]
      .map(([k, label]) => `<li><a class="ls-btn ls-btn--ghost" href="${routes[k][l]}">${tx(label, l)}</a></li>`)
      .join('');
  const body = `<section class="ls-404"><div class="ls-wrap">
  <p class="ls-404__code">404</p>
  <h1 class="ls-phero__t">${tx(notFound.title, 'sq')}</h1>
  <p class="ls-phero__lead">${tx(notFound.lead, 'sq')}</p>
  <ul class="ls-404__links">${links('sq')}</ul>
  <div lang="en" class="ls-404__en">
    <h2 class="ls-h3">${tx(notFound.title, 'en')}</h2>
    <p class="ls-p">${tx(notFound.lead, 'en')}</p>
    <ul class="ls-404__links">${links('en')}</ul>
  </div>
</div></section>`;
  return { path: '/404.html', file: '404.html', html: layout({ lang, key: '', title: `404 · ${plain(site.name, lang)}`, desc: plain(notFound.lead, lang), path: '/404.html', altPath: '/404.html', body, noindex: true }) };
}

/* ---------- Ndërtimi ---------- */
async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await cp(join(ROOT, 'src', 'assets'), join(OUT, 'assets'), { recursive: true });

  const jobs = [];
  for (const lang of LANGS) {
    jobs.push(() => pageHome(lang), () => pageServicesHub(lang));
    for (const s of services) jobs.push(() => pageService(s, lang));
    jobs.push(() => pageTeam(lang), () => pageAbout(lang), () => pageContact(lang));
    for (const k of ['privacy', 'cookies', 'terms']) jobs.push(() => pageLegal(k, lang));
  }
  jobs.push(page404);

  const report = [];
  const built = new Set();
  for (const job of jobs) {
    log = { missing: new Set(), questions: new Map() };
    const { path, html, file } = job();
    const out = file ? join(OUT, file) : join(OUT, path, 'index.html');
    await mkdir(dirname(out), { recursive: true });
    await writeFile(out, html);
    built.add(path);
    report.push({ path, html, ...log });
  }

  const pages = [...built].filter((p) => p !== '/404.html');
  await writeFile(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map((p) => `  <url><loc>${site.domain}${p}</loc></url>`).join('\n')}\n</urlset>\n`);
  await writeFile(join(OUT, 'robots.txt'), PROD ? `User-agent: *\nAllow: /\nSitemap: ${site.domain}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');

  // Kontrolli i lidhjeve dhe ID-ve të brendshme
  const assets = new Set();
  async function walk(dir, base = '/assets/') {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      if (e.isDirectory()) await walk(join(dir, e.name), base + e.name + '/');
      else assets.add(base + e.name);
    }
  }
  await walk(join(OUT, 'assets'));

  let broken = 0;
  console.log(`\nBuild ${PROD ? 'PROD' : 'STAGING'} → dist/  (${built.size} faqe)\n`);
  for (const r of report) {
    const bad = [];
    for (const [, h] of r.html.matchAll(/(?:href|src)="(\/[^"#]*)/g)) if (!built.has(h) && !assets.has(h)) bad.push(h);
    const ids = new Set([...r.html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
    for (const [, h] of r.html.matchAll(/href="#([^"]+)"/g)) if (!ids.has(h)) bad.push('#' + h);
    for (const [, h] of r.html.matchAll(/data-dialog="([^"]+)"/g)) if (!ids.has(h)) bad.push('dialog:' + h);
    const h1 = (r.html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) bad.push(`H1×${h1}`);
    broken += bad.length;
    console.log(`  ${r.path.padEnd(44)} mungojnë: ${String(r.missing.size).padStart(2)}  pyetje: ${String(r.questions.size).padStart(2)}${bad.length ? `  ✖ ${[...new Set(bad)].join(', ')}` : ''}`);
  }
  const allMissing = new Set(report.flatMap((r) => [...r.missing]));
  const allQ = new Map(report.flatMap((r) => [...r.questions]));
  if (!site.domainConfirmed) allQ.set(`Domeni ${site.domain}`, 'A është ky domeni i saktë?');
  console.log(`\n  Të dhëna që mungojnë nga klienti: ${allMissing.size}`);
  for (const m of allMissing) console.log(`    - ${m}`);
  console.log(`  Pyetje për klientin: ${allQ.size}`);
  for (const [q, n] of allQ) console.log(`    - "${q}": ${n}`);

  if (broken) {
    console.error(`\n✖ ${broken} probleme (lidhje të prishura / H1).`);
    process.exit(1);
  }
  if (PROD && (allMissing.size || allQ.size)) {
    console.error('\n✖ Build-i prod refuzohet: ka të dhëna që mungojnë ose pyetje pa përgjigje.');
    process.exit(1);
  }
  console.log('\n✔ Gati.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
