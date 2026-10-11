// Menuja në celular, dritarja e shërbimeve, filtri dhe formulari i kontaktit.
(function () {
  /* ---- Menuja: hap/mbyll, Escape, klik jashtë, mbyllje kur kalon në desktop ---- */
  var btn = document.querySelector('.ls-burger');
  var nav = document.getElementById('ls-nav');
  if (btn && nav) {
    var label = btn.querySelector('.ls-sr');
    var setNav = function (open) {
      nav.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = btn.getAttribute(open ? 'data-close' : 'data-open');
    };
    btn.addEventListener('click', function () { setNav(btn.getAttribute('aria-expanded') !== 'true'); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); btn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !btn.contains(e.target)) setNav(false);
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setNav(false); });
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (m) { if (m.matches) setNav(false); });
  }

  /* ---- Dritarja: karta hap tekstin e plotë; pa JS (ose me Ctrl/Cmd-klik) hapet faqja e shërbimit ---- */
  var dlg = document.getElementById('ls-dialog');
  if (dlg && typeof dlg.showModal === 'function') {
    var body = dlg.querySelector('.ls-dialog__body');
    var opener = null;
    document.addEventListener('click', function (e) {
      var card = e.target.closest('[data-dialog]');
      if (!card || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
      var tpl = document.getElementById(card.getAttribute('data-dialog'));
      if (!tpl) return;
      e.preventDefault();
      opener = card;
      body.replaceChildren(tpl.content.cloneNode(true));
      body.scrollTop = 0;
      dlg.showModal();
      document.documentElement.style.overflow = 'hidden';
    });
    dlg.querySelector('[data-close-dialog]').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); }); // klik në sfond
    dlg.addEventListener('close', function () {
      document.documentElement.style.overflow = '';
      if (opener) opener.focus();
    });
  }

  /* ---- Filtri i shërbimeve ---- */
  var list = document.querySelector('[data-filterable]');
  var fbtns = document.querySelectorAll('[data-filter]');
  if (list && fbtns.length) {
    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var f = b.getAttribute('data-filter');
        fbtns.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        list.querySelectorAll('[data-audience]').forEach(function (li) {
          li.hidden = f !== 'all' && li.getAttribute('data-audience').split(' ').indexOf(f) < 0;
        });
      });
    });
  }

  /* ---- Formulari: kontroll në shfletues; në staging nuk dërgohet asgjë ---- */
  var form = document.querySelector('.ls-form');
  if (form) {
    var status = form.querySelector('.ls-form__status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      ['name', 'message'].forEach(function (n) {
        var el = form.elements[n];
        var bad = !el.value.trim();
        el.setAttribute('aria-invalid', String(bad));
        if (bad) ok = false;
      });
      var phone = form.elements.phone, email = form.elements.email;
      var reach = phone.value.trim() || (email.value.trim() && email.checkValidity());
      phone.setAttribute('aria-invalid', String(!reach));
      email.setAttribute('aria-invalid', String(!reach || (email.value && !email.checkValidity())));
      if (!reach) ok = false;
      var consent = form.elements.consent;
      consent.closest('.ls-consent').toggleAttribute('data-invalid', !consent.checked);
      if (!consent.checked) ok = false;

      status.classList.toggle('is-error', !ok);
      if (!ok) {
        status.textContent = form.getAttribute('data-msg-required');
        var first = form.querySelector('[aria-invalid="true"]') || consent;
        first.focus();
        return;
      }
      if (form.getAttribute('data-staging') === 'true') {
        status.textContent = form.getAttribute('data-msg-staging');
      }
    });
  }
})();
