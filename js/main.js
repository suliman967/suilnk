(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const frame = fn => { let t = 0; return () => { if (!t) t = requestAnimationFrame(() => { t = 0; fn(); }); }; };
  const watch = (el, fn, opt) => new IntersectionObserver(([e]) => fn(e.isIntersecting), opt).observe(el);

  // Reduced motion: stop SVG (SMIL) animations too
  if (reduce) $$('svg').forEach(s => s.pauseAnimations && s.pauseAnimations());

  // Navigation (full-screen menu on small screens)
  const nav = $('.nav'), menu = $('.nav__links'), burger = $('.burger');
  const stick = () => nav.classList.toggle('is-stuck', scrollY > 24);
  stick(); addEventListener('scroll', stick, { passive: true });
  const toggle = open => {
    menu.classList.toggle('open', open); nav.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => toggle(!menu.classList.contains('open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggle(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  matchMedia('(min-width:1001px)').addEventListener('change', e => { if (e.matches) toggle(false); });

  // Entrance reveals (CSS animates; JS only flags elements once)
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal],[data-split]').forEach(el => io.observe(el));

  // Headlines reveal line by line (measured, so it works at any width). "|" marks optional or explicit breaks.
  const heads = $$('[data-split]');
  const build = el => {
    const t = el.dataset.t ||= el.textContent.trim().replace(/\s+/g, ' '), was = el.classList.contains('in'), mob = innerWidth <= 640;
    let lines;
    if (el.hasAttribute('data-hard-breaks')) lines = t.split('|').map(line => line.trim().split(/\s+/));
    else {
      el.innerHTML = t.split(' ').map(w => w === '|' ? (mob ? '<br>' : '') : `<span class="wd">${w}</span>`).join(' ');
      lines = []; let top = null;
      $$('.wd', el).forEach(w => { if (top === null || Math.abs(w.offsetTop - top) > 4) { lines.push([]); top = w.offsetTop; } lines.at(-1).push(w.textContent); });
    }
    el.innerHTML = lines.map((l, i) => `<span class="ln"><span style="--i:${i}">${l.join(' ')}</span></span>`).join('');
    el.setAttribute('aria-label', t.replace(/ \| /g, ' ')); el.classList.add('sp');
    if (was) { el.classList.add('nt'); requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('nt'))); }
  };
  if (reduce) heads.forEach(el => el.classList.add('sp', 'in'));
  else {
    let w = innerWidth, rt;
    document.fonts.ready.then(() => heads.forEach(build));
    addEventListener('resize', () => { if (innerWidth === w) return; w = innerWidth; clearTimeout(rt); rt = setTimeout(() => heads.forEach(build), 200); });
  }

  // Selected paragraphs: words brighten as they scroll through the viewport
  if (!reduce) {
    const sc = $$('[data-scrub]').map(el => {
      el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="sw">${w}</span>`).join(' ');
      return { el, w: $$('.sw', el), on: false, last: [] };
    });
    const run = () => sc.forEach(s => {
      if (!s.on) return;
      const r = s.el.getBoundingClientRect(), p = clamp((innerHeight * .88 - r.top) / (r.height + innerHeight * .3)), n = s.w.length;
      s.w.forEach((w, i) => { const o = (.22 + .78 * clamp((p * (n + 5) - i) / 5)).toFixed(2); if (s.last[i] !== o) { w.style.opacity = o; s.last[i] = o; } });
    });
    const tick = frame(run);
    sc.forEach(s => watch(s.el, v => { s.on = v; tick(); }, { rootMargin: '10% 0px' }));
    addEventListener('scroll', tick, { passive: true }); addEventListener('resize', tick);
  }

  // Pointer drift on mockups (desktop pointers only)
  if (fine && !reduce) $$('.mock').forEach(m => {
    m.addEventListener('pointermove', e => { const r = m.getBoundingClientRect(); m.style.setProperty('--dx', ((e.clientX - r.left) / r.width - .5) * 10 + 'px'); m.style.setProperty('--dy', ((e.clientY - r.top) / r.height - .5) * 10 + 'px'); });
    m.addEventListener('pointerleave', () => { m.style.removeProperty('--dx'); m.style.removeProperty('--dy'); });
  });

  // Ownership journey. One state machine (7 nodes A-G) drives both layouts:
  // desktop shows all seven nodes; mobile shows six stage segments where stage 6 covers F and G.
  const J = $('#journey');
  if (J) {
    const grid = $('.how__grid'), list = $('.steps'), steps = $$('.step'), nodes = $$('.node', J), links = $$('.link', J), dots = $$('.dots i', J);
    const cap = $('.cap', J), ml = $('.ml', J), owner = $('.owner', J), gate = $('.gate', J), bar = $('.jbar i', J), zW = $('.zone--work', J), zC = $('.zone--client', J);
    const text = [
      'My Shopify Partner account is only the workspace where I build. It is never the owner.',
      'A transfer store is created for you inside that workspace.',
      'The store, products and Printful connection are developed here.',
      'You review everything. Nothing transfers until you approve it.',
      'I send the official Shopify ownership transfer invitation.',
      'You accept the invitation and become the store owner.',
      'You keep ownership; I manage the agreed operations through your authorized collaborator access.',
      'The store launches and I manage the agreed operations.'
    ];
    const names = ['My Shopify Partner account', 'Client transfer store created', 'Store and products developed', 'Ownership transfer invitation sent', 'You become the store owner', 'Collaborator access granted', 'Launch and management begin'];
    const nodeFor = (s, p) => [0, 1, 2, 2, 3 + Math.min(2, Math.floor(p * 3)), 6][s];
    const textFor = (s, a) => s === 3 ? text[3] : text[a < 3 ? a : a + 1];
    let near = false, last = '';
    const update = () => {
      if (!near) return;
      const mid = innerHeight * .5; let s = 0;
      steps.forEach((el, i) => { if (el.getBoundingClientRect().top < mid) s = i; });
      const r = steps[s].getBoundingClientRect(), p = clamp((mid - r.top) / r.height, 0, .999), a = nodeFor(s, p), all = clamp((s + p) / 6);
      bar.style.transform = `scaleX(${all})`; list.style.setProperty('--sp', all);
      const key = s + ':' + a; if (key === last) return; last = key;
      steps.forEach((el, i) => { el.classList.toggle('is-active', i === s); el.classList.toggle('is-past', i < s); });
      nodes.forEach((n, i) => { n.classList.toggle('is-active', i === a); n.classList.toggle('is-done', i < a); });
      links.forEach(l => { const t = +l.dataset.to; l.classList.toggle('is-done', t < a); l.classList.toggle('is-on', t === a); });
      const seg = Math.min(a, 5); dots.forEach((d, i) => d.classList.toggle('on', i <= seg));
      J.dataset.step = s + 1; gate.classList.toggle('is-open', a >= 3);
      zW.classList.toggle('is-dim', a >= 3); zC.classList.toggle('is-owned', a >= 4);
      owner.classList.toggle('is-you', a >= 4); owner.textContent = a >= 4 ? 'Owner: you' : 'Owner: my workspace';
      ml.textContent = `Stage ${seg + 1} of 6 · ${names[a]}`;
      cap.innerHTML = `<b>${'ABCDEFG'[a]}</b> ${textFor(s, a)}`;
      if (!reduce) { cap.classList.remove('sw2'); void cap.offsetWidth; cap.classList.add('sw2'); }
    };
    const tick = frame(update);
    watch(grid, v => { near = v; tick(); }, { rootMargin: '200px 0px' });
    addEventListener('scroll', tick, { passive: true }); addEventListener('resize', tick);
  }

  // Logo strip only animates while visible
  const marq = $('.marq'); if (marq) watch(marq, v => marq.classList.toggle('off', !v));

  // Concept rail: arrows + progress
  const rail = $('#rail');
  if (rail) {
    const bar = $('#rbar i'), step = () => rail.firstElementChild.offsetWidth + 24;
    $$('[data-dir]').forEach(b => b.addEventListener('click', () => rail.scrollBy({ left: step() * b.dataset.dir, behavior: reduce ? 'auto' : 'smooth' })));
    const prog = () => { const m = rail.scrollWidth - rail.clientWidth; bar.style.width = (25 + (m ? rail.scrollLeft / m : 0) * 75) + '%'; };
    rail.addEventListener('scroll', prog, { passive: true }); prog();
  }
})();
