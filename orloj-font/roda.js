(function(){
  // =====================================================================
  // RODA DE FULLS de l'Orloj: calendari, on som, temps, avisos, avui,
  // distàncies, ràdio, podcasts i notícies; llengües, veu i modes.
  // Moltes peces vénen del rellotge República, adaptades a l'Orloj.
  // =====================================================================
  const $ = id => document.getElementById(id);
  const dosD = n => String(n).padStart(2, '0');
  const neteja = s => (s || '').replace(/\s+/g, ' ').trim();
  function ambTemps(prom, ms){
    return new Promise((res, rej) => {
      const t = setTimeout(() => rej(new Error('temps')), ms);
      prom.then(v => { clearTimeout(t); res(v); }, e => { clearTimeout(t); rej(e); });
    });
  }
  const llegeix = (k, d) => { try { const v = localStorage.getItem('orloj.' + k); return v === null ? d : v; } catch(e){ return d; } };
  const desa = (k, v) => { try { localStorage.setItem('orloj.' + k, v); } catch(e){} };

/*@ORLOJ_I18N@*/

  // ---------- Llengües: ca, oc, gl, fr, en, de, it, cs ----------
  const I18N = {};
  ['ca','oc','gl','fr','en','de','it','cs'].forEach(k => { I18N[k] = Object.assign({}, I18N_BASE[k] || I18N_BASE.ca, I18N_EXTRA[k] || {}); });
  Object.keys(FESTES_CS).forEach(k => { if (FESTES[k]) FESTES[k].cs = FESTES_CS[k]; });
  Object.keys(AMBITS_CS).forEach(k => { if (AMBITS[k]) AMBITS[k].cs = AMBITS_CS[k]; });
  let LLENGUA = llegeix('llengua', 'ca'); if (!I18N[LLENGUA]) LLENGUA = 'ca';
  let L = I18N[LLENGUA], MESOS = L.mesos, DIES = L.dies;
  const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  const locale = () => L.nums || L.veu;

  // Allà on surti Espanya (en qualsevol llengua): Ñórdor
  const NORDOR = [
    [/\b([dD])['’](Espanya|Espagne|Espanha)\b/g, '$1e Ñórdor'],
    [/\b([dD])['’](ESPANYA|ESPAGNE)\b/g, (m, d) => (d === 'D' ? 'DE' : 'de') + ' ÑÓRDOR'],
    [/\b([dD]e) l['’]Espagne\b/g, '$1 Ñórdor'],
    [/\b([lL])['’]Espagne\b/g, (m, l) => (l === 'L' ? 'Le' : 'le') + ' Ñórdor'],
    [/\ben Espagne\b/g, 'au Ñórdor'],
    [/\b([dD])a Espanha\b/g, '$1e Ñórdor'],
    [/\b([dD])ella Spagna\b/g, '$1i Ñórdor'],
    [/\b(nella|alla|dalla|sulla) Spagna\b/g, (m, p) => ({ nella: 'in', alla: 'a', dalla: 'da', sulla: 'su' })[p] + ' Ñórdor'],
    [/\bla Spagna\b/g, 'Ñórdor'],
    [/Španělsk(o|a|u|em)(?![a-zá-ž])/g, (m, s) => 'Ñórdor' + ({ o: '', a: 'u', u: 'u', em: 'em' }[s])],
    [/\bSpaniens\b/g, 'Ñórdors'],
    [/Espanya|España|Espanha|Espagne|Spanien|Spagna|\bSpain\b/g, 'Ñórdor'],
    [/ESPANYA|ESPAÑA|ESPANHA|ESPAGNE|SPANIEN|SPAGNA|\bSPAIN\b/g, 'ÑÓRDOR'],
    [/Constituci[óo]n?|Constitution|Verfassung|Costituzione|Constitución|Ústav[ay]/g, 'Constituta']
  ];
  const nordor = s => NORDOR.reduce((txt, [re, nou]) => txt.replace(re, nou), String(s == null ? '' : s));
  const nomFesta = fe => !fe ? '' : nordor(LLENGUA === 'ca' ? fe.nom : ((FESTES[fe.nom] && FESTES[fe.nom][LLENGUA]) || fe.nomEn || fe.nom));
  const nomAmbit = a => LLENGUA === 'ca' ? a : ((AMBITS[a] && AMBITS[a][LLENGUA]) || a);
  const CODIS_CEL = [0,1,2,3,45,48,51,53,55,56,57,61,63,65,66,67,71,73,75,77,80,81,82,85,86,95,96,99];
  const descCel = codi => { const i = CODIS_CEL.indexOf(codi); return i < 0 ? '—' : L.cel[i]; };
  const mesGen = i => L.mesosGen ? L.mesosGen[i] : L.mesos[i];
  const dataLlarga = d => L.data(cap(DIES[d.getDay()]), d.getDate(), mesGen(d.getMonth()), d.getFullYear());

  // ---------- Avís breu en pantalla ----------
  const avisEl = $('orlojAvis'); let tempsAvis = null;
  function avisa(txt, ms){
    if (!avisEl) return;
    avisEl.textContent = txt; avisEl.classList.add('visible');
    clearTimeout(tempsAvis); tempsAvis = setTimeout(() => avisEl.classList.remove('visible'), ms || 4000);
  }

  // =====================================================================
  // RODA: fulls en cercle; l'esfera és el primer. Lliscar amunt/avall.
  // =====================================================================
  const roda = $('roda'), pista = $('rodaPista'), punts = $('rodaPunts');
  const SEP = 40, TORNADA_MS = 2 * 60 * 1000;
  let pag = 0, fulls = [], N = 0, previ = [], tornada = null;
  function recompte(){
    const actual = fulls[pag];
    fulls = [...pista.children].filter(f => !f.classList.contains('ocult'));
    N = fulls.length; previ = [];
    punts.replaceChildren(...fulls.map(f => { const s = document.createElement('span'); if (f.dataset.full === 'avisos') s.className = 'avis'; return s; }));
    const i = fulls.indexOf(actual); pag = i >= 0 ? i : 0;
  }
  const rel = i => { let o = ((i - pag) % N + N) % N; if (o > N / 2) o -= N; return o; };
  function posa(dy, anim){
    fulls.forEach((f, i) => {
      const o = rel(i);
      const salt = previ[i] !== undefined && Math.abs(o - previ[i]) > 1;
      f.style.transition = (anim && !salt) ? 'transform .55s cubic-bezier(.22,.9,.3,1)' : 'none';
      f.style.transform = `translate3d(0, calc(${o} * (100% + ${SEP}px) + ${dy.toFixed(1)}px), 0)`;
      f.style.visibility = Math.abs(o) > 1 ? 'hidden' : '';
      f.inert = o !== 0;
      previ[i] = o;
    });
    [...punts.children].forEach((p, i) => p.classList.toggle('actiu', i === pag));
    window.__rodaEsferaVisible = fulls[pag] && fulls[pag].dataset.full === 'esfera';
  }
  function reprogramaTornada(){ clearTimeout(tornada); if (pag !== 0) tornada = setTimeout(() => vesA(0), TORNADA_MS); }
  function vesA(i, anim = true){
    pag = ((i % N) + N) % N;
    const et = $('calEtiqueta'); if (et) et.classList.remove('visible');
    posa(0, anim);
    reprogramaTornada();
  }
  ['pointerdown', 'wheel', 'keydown'].forEach(ev => roda.addEventListener(ev, reprogramaTornada, { passive: true }));
  document.addEventListener('keydown', reprogramaTornada);
  // Una roda de ratolí o un trackpad: un sol pas per gest (s'espera una pausa de 200 ms)
  function nouGestRoda(estat){ const ara = performance.now(), nou = ara - estat.ultim > 200; estat.ultim = ara; return nou; }
  function refrescaRoda(){ recompte(); posa(0, false); }
  window.__rodaInici = () => { if (pag !== 0) vesA(0); };
  (function gestos(){
    let ini = null, vertical = false;
    roda.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      ini = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId }; vertical = false;
    });
    roda.addEventListener('pointermove', e => {
      if (!ini || e.pointerId !== ini.id) return;
      const dx = e.clientX - ini.x, dy = e.clientY - ini.y;
      if (!vertical){
        if (Math.abs(dx) > 8 && Math.abs(dx) >= Math.abs(dy)){ ini = null; return; } // gest lateral: és del full
        if (Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)){ vertical = true; try { roda.setPointerCapture(e.pointerId); } catch(_){} }
        else return;
      }
      posa(dy, false);
    });
    function acaba(e){
      if (!ini) return;
      if (vertical){
        const dy = e.clientY - ini.y, v = dy / Math.max(1, performance.now() - ini.t), alt = roda.clientHeight;
        // lliscar avall (dit cap avall) fa avançar la roda
        if (dy > alt * 0.16 || v > 0.45) vesA(pag + 1);
        else if (dy < -alt * 0.16 || v < -0.45) vesA(pag - 1);
        else posa(0, true);
        if (e.pointerType === 'mouse'){
          const bloca = ev => { ev.stopPropagation(); ev.preventDefault(); };
          window.addEventListener('click', bloca, { capture: true, once: true });
          setTimeout(() => window.removeEventListener('click', bloca, { capture: true }), 350);
        }
      }
      ini = null; vertical = false;
    }
    roda.addEventListener('pointerup', acaba);
    roda.addEventListener('pointercancel', () => { if (vertical) posa(0, true); ini = null; vertical = false; });
    const estatRoda = { ultim: 0 };
    roda.addEventListener('wheel', e => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      if (!nouGestRoda(estatRoda) || Math.abs(e.deltaY) < 4) return;
      vesA(pag + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });
    document.addEventListener('keydown', e => {
      if (e.target.closest && e.target.closest('input,textarea')) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown'){ e.preventDefault(); vesA(pag + 1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp'){ e.preventDefault(); vesA(pag - 1); }
      else if (e.key === 'Escape') vesA(0);
    });
    window.addEventListener('resize', () => posa(0, false));
  })();
  recompte(); posa(0, false);

  // ---------- Panells laterals dins d'un full ----------
  function lliscador(arrel){
    const pistaL = arrel.querySelector('.ll-pista'), puntsL = arrel.querySelector('.ll-punts');
    let i = 0, ini = null;
    const estatL = { ultim: 0 };
    const panes = () => [...pistaL.children];
    function pintaPunts(){
      puntsL.replaceChildren(...panes().map((_, k) => { const s = document.createElement('span'); s.addEventListener('click', e => { e.stopPropagation(); ves(k); }); return s; }));
    }
    function posaL(dx, anim){
      pistaL.style.transition = anim ? 'transform .45s cubic-bezier(.22,.9,.3,1)' : 'none';
      pistaL.style.transform = `translate3d(calc(${-i * 100}% + ${dx.toFixed(1)}px), 0, 0)`;
      [...puntsL.children].forEach((p, k) => p.classList.toggle('actiu', k === i));
      panes().forEach((p, k) => { p.inert = k !== i; });
    }
    function ves(k){ i = Math.max(0, Math.min(panes().length - 1, k)); posaL(0, true); }
    arrel.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse' && e.button !== 0) return; ini = { x: e.clientX, y: e.clientY, id: e.pointerId, h: false }; });
    arrel.addEventListener('pointermove', e => {
      if (!ini || e.pointerId !== ini.id) return;
      const dx = e.clientX - ini.x, dy = e.clientY - ini.y;
      if (!ini.h){
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)){ ini.h = true; try { arrel.setPointerCapture(e.pointerId); } catch(_){} }
        else if (Math.abs(dy) > 10){ ini = null; return; }
        else return;
      }
      e.stopPropagation();
      const n = panes().length, fre = (i === 0 && dx > 0) || (i === n - 1 && dx < 0) ? 0.3 : 1;
      posaL(dx * fre, false);
    });
    function acabaL(e){
      if (!ini) return;
      if (ini.h){
        e.stopPropagation();
        const dx = e.clientX - ini.x, w = arrel.clientWidth;
        if (dx < -w * 0.18) ves(i + 1); else if (dx > w * 0.18) ves(i - 1); else posaL(0, true);
        if (e.pointerType === 'mouse'){
          const bloca = ev => { ev.stopPropagation(); ev.preventDefault(); };
          window.addEventListener('click', bloca, { capture: true, once: true });
          setTimeout(() => window.removeEventListener('click', bloca, { capture: true }), 350);
        }
      }
      ini = null;
    }
    arrel.addEventListener('pointerup', acabaL);
    arrel.addEventListener('pointercancel', () => { ini = null; posaL(0, true); });
    arrel.addEventListener('lostpointercapture', () => { if (ini && ini.h){ ini = null; posaL(0, true); } });
    arrel.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 15) return;
      e.preventDefault(); e.stopPropagation();
      if (!nouGestRoda(estatL)) return;
      ves(i + (e.deltaX > 0 ? 1 : -1));
    }, { passive: false });
    document.addEventListener('keydown', e => {
      if (arrel.closest('.full').inert) return;
      if (e.key === 'ArrowRight') ves(i + 1); else if (e.key === 'ArrowLeft') ves(i - 1);
    });
    pintaPunts(); posaL(0, false);
    return { ves, refresca(){ pintaPunts(); i = Math.min(i, panes().length - 1); posaL(0, false); } };
  }
  const llTemps = lliscador($('llTemps')), llAvui = lliscador($('llAvui')), llDist = lliscador($('llDist')), llNot = lliscador($('llNot'));

  // =====================================================================
  // FESTIUS i CALENDARI
  // =====================================================================
  function pasqua(any){
    const a=any%19, b=Math.floor(any/100), c=any%100, d=Math.floor(b/4), e=b%4,
      f=Math.floor((b+8)/25), g=Math.floor((b-f+1)/3), h=(19*a+b-d-g+15)%30,
      i=Math.floor(c/4), k=c%4, l=(32+2*e+2*i-h-k)%7, m=Math.floor((a+11*h+22*l)/451),
      mes=Math.floor((h+l-7*m+114)/31), dia=((h+l-7*m+114)%31)+1;
    return new Date(any, mes-1, dia);
  }
  const clauData = d => `${d.getFullYear()}-${dosD(d.getMonth()+1)}-${dosD(d.getDate())}`;
  const sumaDies = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  function festiusBase(any){
    const P = pasqua(any);
    const f = (m, d, nom, ambit) => [clauData(new Date(any, m-1, d)), { nom, ambit }];
    return new Map([
      f(1,1,"Cap d'Any",'Estatal'), f(1,6,'Reis','Estatal'),
      [clauData(sumaDies(P,-2)), { nom:'Divendres Sant', ambit:'Estatal' }],
      [clauData(sumaDies(P,1)), { nom:'Dilluns de Pasqua Florida', ambit:'Catalunya' }],
      f(5,1,'Festa del Treball','Estatal'),
      [clauData(sumaDies(P,50)), { nom:'Dilluns de Pasqua Granada', ambit:'Festa local de Barcelona' }],
      f(6,24,'Sant Joan','Catalunya'), f(8,15,"L'Assumpció",'Estatal'),
      f(9,11,'Diada Nacional de Catalunya','Catalunya'), f(9,24,'La Mercè','Festa local de Barcelona'),
      f(10,1,'Dia de la República',"Commemoració · 1 d'octubre de 2017"),
      f(10,12,"Festa Nacional d'Espanya",'Estatal'), f(11,1,'Tots Sants','Estatal'),
      f(12,6,'Dia de la Constituta','Estatal'), f(12,8,'La Immaculada','Estatal'),
      f(12,25,'Nadal','Estatal'), f(12,26,'Sant Esteve','Catalunya')
    ]);
  }
  const festiusAPI = {};
  function festiusAny(any){
    const base = festiusBase(any), api = festiusAPI[any];
    if (!api) return base;
    const res = new Map();
    api.forEach((v, k) => { res.set(k, base.has(k) ? base.get(k) : v); });
    base.forEach((v, k) => { if (v.ambit.startsWith('Festa local') || v.ambit.startsWith('Commemoració')) res.set(k, v); });
    return res;
  }
  const festiu = d => festiusAny(d.getFullYear()).get(clauData(d)) || null;
  const consultats = {};
  function consultaAny(any){
    const ara = Date.now();
    if (consultats[any] && ara - consultats[any] < 6*60*60*1000) return;
    consultats[any] = ara;
    fetch(`https://date.nager.at/api/v3/PublicHolidays/${any}/ES`)
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(llista => {
        const m = new Map();
        llista.forEach(h => { if (!h.counties || h.counties.includes('ES-CT')) m.set(h.date, { nom: h.localName || h.name, nomEn: h.name, ambit: h.counties ? 'Catalunya' : 'Estatal' }); });
        if (m.size){ festiusAPI[any] = m; calendari.refresca(true); }
      })
      .catch(() => { consultats[any] = ara - 5.5*60*60*1000; });
  }

  const calendari = (function(){
    const pistaEl = $('calPista'), finestra = $('calFinestra'), titol = $('calTitol'), etiqueta = $('calEtiqueta');
    let desplac = 0, amplada = 0, animant = false;
    const mesDe = k => { const a = new Date(); return new Date(a.getFullYear(), a.getMonth() + k, 1); };
    function panellMes(d0){
      const avui = new Date();
      consultaAny(d0.getFullYear());
      const panell = document.createElement('div'); panell.className = 'cal-mes';
      const g = document.createElement('div'); g.className = 'cal-graella';
      L.curts.forEach((n, i) => { const c = document.createElement('div'); c.className = 'cap-dia' + (i >= 5 ? ' cs' : ''); c.textContent = n; g.appendChild(c); });
      const offset = (d0.getDay() + 6) % 7;
      for (let i = 0; i < offset; i++){ const b = document.createElement('div'); b.className = 'dia buit'; g.appendChild(b); }
      const dies = new Date(d0.getFullYear(), d0.getMonth() + 1, 0).getDate();
      for (let dd = 1; dd <= dies; dd++){
        const data = new Date(d0.getFullYear(), d0.getMonth(), dd);
        const c = document.createElement('div');
        let cls = 'dia';
        if (data.getDay() === 0 || data.getDay() === 6) cls += ' cs';
        const fe = festiu(data);
        if (fe){
          cls += fe.ambit.startsWith('Commemoració') ? ' commemora' : ' festiu';
          c.dataset.festa = nomFesta(fe); c.dataset.ambit = nomAmbit(fe.ambit);
          c.setAttribute('aria-label', `${dd}: ${nomFesta(fe)}`);
        }
        if (data.toDateString() === avui.toDateString()) cls += ' avui';
        c.className = cls; c.dataset.data = clauData(data); c.textContent = dd;
        g.appendChild(c);
      }
      const total = offset + dies; for (let i = total; i < 42; i++){ const b = document.createElement('div'); b.className = 'dia buit'; g.appendChild(b); }
      panell.appendChild(g);
      return panell;
    }
    const titolMes = d => `${cap(MESOS[d.getMonth()])}<small>${d.getFullYear()}</small>`;
    function pinta(){
      pistaEl.innerHTML = '';
      [-1, 0, 1].forEach(k => pistaEl.appendChild(panellMes(mesDe(desplac + k))));
      titol.innerHTML = titolMes(mesDe(desplac));
      posaC(0, false); amagaEtiqueta();
    }
    const mesura = () => { amplada = finestra.clientWidth; };
    function posaC(dx, anim){
      pistaEl.style.transition = anim ? 'transform .42s cubic-bezier(.25,.9,.3,1)' : 'none';
      pistaEl.style.transform = `translate3d(calc(-100% + ${dx.toFixed(1)}px),0,0)`;
    }
    function llisca(dir){
      if (animant) return;
      animant = true; amagaEtiqueta(); mesura(); posaC(-dir * amplada, true);
      titol.innerHTML = titolMes(mesDe(desplac + dir));
      setTimeout(() => { desplac += dir; animant = false; pinta(); }, 440);
    }
    function tornaAvui(){
      if (desplac === 0 || animant) return;
      if (Math.abs(desplac) === 1){ llisca(-desplac); return; }
      desplac = 0; pinta();
    }
    $('calAnt').addEventListener('click', e => { e.stopPropagation(); llisca(-1); });
    $('calSeg').addEventListener('click', e => { e.stopPropagation(); llisca(1); });
    let darrerToc = 0;
    titol.addEventListener('pointerup', () => { const ara = performance.now(); if (ara - darrerToc < 380){ darrerToc = 0; tornaAvui(); } else darrerToc = ara; });
    let ini = null, arr = false, suprimeix = false;
    finestra.addEventListener('pointerdown', e => { if (animant || (e.pointerType === 'mouse' && e.button !== 0)) return; ini = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId }; arr = false; suprimeix = false; });
    finestra.addEventListener('pointermove', e => {
      if (!ini || e.pointerId !== ini.id) return;
      const dx = e.clientX - ini.x, dy = e.clientY - ini.y;
      if (!arr){
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)){ mesura(); arr = true; suprimeix = true; try { finestra.setPointerCapture(e.pointerId); } catch(_){} amagaEtiqueta(); }
        else if (Math.abs(dy) > 10){ ini = null; return; }
      }
      if (arr){ e.stopPropagation(); posaC(Math.max(-amplada, Math.min(amplada, dx)), false); }
    });
    finestra.addEventListener('pointerup', e => {
      if (!ini) return;
      if (arr){
        e.stopPropagation();
        const dx = e.clientX - ini.x, v = dx / Math.max(1, performance.now() - ini.t);
        if (dx < -amplada * 0.22 || v < -0.45) llisca(1); else if (dx > amplada * 0.22 || v > 0.45) llisca(-1); else posaC(0, true);
      }
      ini = null; arr = false;
    });
    finestra.addEventListener('pointercancel', () => { if (arr) posaC(0, true); ini = null; arr = false; });
    finestra.addEventListener('lostpointercapture', () => { if (arr){ posaC(0, true); ini = null; arr = false; } });
    const estatC = { ultim: 0 };
    finestra.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 15) return;
      e.preventDefault(); e.stopPropagation();
      if (!nouGestRoda(estatC)) return;
      llisca(e.deltaX > 0 ? 1 : -1);
    }, { passive: false });
    document.addEventListener('keydown', e => {
      if (finestra.closest('.full').inert) return;
      if (e.key === 'ArrowLeft') llisca(-1); else if (e.key === 'ArrowRight') llisca(1); else if (e.key === 'Home') tornaAvui();
    });
    let tEt = null;
    function amagaEtiqueta(){ etiqueta.classList.remove('visible'); clearTimeout(tEt); }
    finestra.addEventListener('click', e => {
      if (suprimeix){ suprimeix = false; return; }
      const c = e.target.closest('.dia');
      if (!c || !c.dataset.festa){ amagaEtiqueta(); return; }
      const [a, m, d] = c.dataset.data.split('-').map(Number);
      etiqueta.innerHTML = '';
      const b = document.createElement('b'); b.textContent = c.dataset.festa;
      const em = document.createElement('em'); em.textContent = c.dataset.ambit;
      etiqueta.append(b, document.createTextNode(dataLlarga(new Date(a, m - 1, d))), em);
      etiqueta.classList.add('visible');
      clearTimeout(tEt); tEt = setTimeout(amagaEtiqueta, 4500);
    });
    if ('ResizeObserver' in window) new ResizeObserver(() => { mesura(); if (!animant) posaC(0, false); }).observe(finestra);
    mesura(); pinta();
    return { refresca(nomesFestius){ if (animant) return setTimeout(() => this.refresca(nomesFestius), 500); if (!nomesFestius) desplac = 0; pinta(); } };
  })();

  // =====================================================================
  // ASTRONOMIA: Sol, Lluna, planetes (sense internet)
  // =====================================================================
  const RD = Math.PI / 180, DIA = 864e5, J1970 = 2440588, J2000 = 2451545, OBL = RD * 23.4397;
  const toDays = dt => dt.valueOf() / DIA - 0.5 + J1970 - J2000;
  const fromJ = j => new Date((j + 0.5 - J1970) * DIA);
  const ascensio = (l, b) => Math.atan2(Math.sin(l) * Math.cos(OBL) - Math.tan(b) * Math.sin(OBL), Math.cos(l));
  const declinacio = (l, b) => Math.asin(Math.sin(b) * Math.cos(OBL) + Math.cos(b) * Math.sin(OBL) * Math.sin(l));
  const anomaliaSol = d => RD * (357.5291 + 0.98560028 * d);
  const longEcl = M => M + RD * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2*M) + 0.0003 * Math.sin(3*M)) + RD * 102.9372 + Math.PI;
  function horesSol(dt, lat, lon){
    const lw = RD * -lon, phi = RD * lat, d = toDays(dt), J0 = 0.0009;
    const n = Math.round(d - J0 - lw / (2 * Math.PI));
    const ds = J0 + lw / (2 * Math.PI) + n, M = anomaliaSol(ds), Lg = longEcl(M), dec = declinacio(Lg, 0);
    const Jnoon = J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * Lg);
    const w = Math.acos((Math.sin(-0.833 * RD) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));
    const a = J0 + (w + lw) / (2 * Math.PI) + n, Jset = J2000 + a + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * Lg);
    return { surt: fromJ(Jnoon - (Jset - Jnoon)), pon: fromJ(Jset), migdia: fromJ(Jnoon) };
  }
  function alturaLluna(dt, lat, lon){
    const lw = RD * -lon, phi = RD * lat, d = toDays(dt);
    const Lm = RD * (218.316 + 13.176396 * d), Mm = RD * (134.963 + 13.064993 * d), F = RD * (93.272 + 13.229350 * d);
    const l = Lm + RD * 6.289 * Math.sin(Mm), b = RD * 5.128 * Math.sin(F);
    const ra = ascensio(l, b), dec = declinacio(l, b);
    const H = RD * (280.16 + 360.9856235 * d) - lw - ra;
    let h = Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
    const hh = Math.max(h, 0); h += 0.0002967 / Math.tan(hh + 0.00312536 / (hh + 0.08901179));
    return h;
  }
  function horesLluna(dt, lat, lon){
    const t0 = new Date(dt); t0.setHours(0, 0, 0, 0);
    const mes = hh => new Date(t0.valueOf() + hh * 36e5), hc = 0.133 * RD;
    let h0 = alturaLluna(t0, lat, lon) - hc, surt = null, pon = null;
    for (let i = 1; i <= 24; i += 2){
      const h1 = alturaLluna(mes(i), lat, lon) - hc, h2 = alturaLluna(mes(i + 1), lat, lon) - hc;
      const a = (h0 + h2) / 2 - h1, b = (h2 - h0) / 2, xe = -b / (2 * a), ye = (a * xe + b) * xe + h1, disc = b * b - 4 * a * h1;
      let arrels = 0, x1 = 0, x2 = 0;
      if (disc >= 0){ const dx = Math.sqrt(disc) / (Math.abs(a) * 2); x1 = xe - dx; x2 = xe + dx; if (Math.abs(x1) <= 1) arrels++; if (Math.abs(x2) <= 1) arrels++; if (x1 < -1) x1 = x2; }
      if (arrels === 1){ if (h0 < 0) surt = i + x1; else pon = i + x1; }
      else if (arrels === 2){ surt = i + (ye < 0 ? x2 : x1); pon = i + (ye < 0 ? x1 : x2); }
      if (surt != null && pon != null) break;
      h0 = h2;
    }
    return { surt: surt != null ? mes(surt) : null, pon: pon != null ? mes(pon) : null };
  }
  const hm = dt => dt && !isNaN(dt) ? `${dosD(dt.getHours())}:${dosD(dt.getMinutes())}` : '--:--';
  // Longitud eclíptica aparent del Sol (Meeus, cap. 25), en graus
  function longitudSol(dt){
    const T = (toDays(dt)) / 36525;
    const L0 = 280.46646 + 36000.76983 * T, M = (357.52911 + 35999.05029 * T) * RD;
    const C = (1.914602 - 0.004817 * T) * Math.sin(M) + 0.019993 * Math.sin(2 * M) + 0.000289 * Math.sin(3 * M);
    const om = (125.04 - 1934.136 * T) * RD;
    return (((L0 + C - 0.00569 - 0.00478 * Math.sin(om)) % 360) + 360) % 360;
  }
  function zodiac(ara){
    const s = Math.floor(longitudSol(ara) / 30);
    for (let k = 0; k < 40; k++){
      const d = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate() + k, 23, 59, 59);
      if (Math.floor(longitudSol(d) / 30) !== s) return { s, seg: (s + 1) % 12, dia: d.getDate() };
    }
    return { s, seg: (s + 1) % 12, dia: null };
  }
  // Elements orbitals aproximats (JPL, vàlids 1800–2050): a, e, I, L, ϖ, Ω i variació per segle
  const ELEMENTS = {
    mercuri: [0.38709927,0.20563593,7.00497902,252.25032350,77.45779628,48.33076593, 0.00000037,0.00001906,-0.00594749,149472.67411175,0.16047689,-0.12534081],
    venus:   [0.72333566,0.00677672,3.39467605,181.97909950,131.60246718,76.67984255, 0.00000390,-0.00004107,-0.00078890,58517.81538729,0.00268329,-0.27769418],
    terra:   [1.00000261,0.01671123,-0.00001531,100.46457166,102.93768193,0, 0.00000562,-0.00004392,-0.01294668,35999.37244981,0.32327364,0],
    mart:    [1.52371034,0.09339410,1.84969142,-4.55343205,-23.94362959,49.55953891, 0.00001847,0.00007882,-0.00813131,19140.30268499,0.44441088,-0.29257343],
    jupiter: [5.20288700,0.04838624,1.30439695,34.39644051,14.72847983,100.47390909, -0.00011607,-0.00013253,-0.00183714,3034.74612775,0.21252668,0.20469106],
    saturn:  [9.53667594,0.05386179,2.48599187,49.95424423,92.59887831,113.66242448, -0.00125060,-0.00050991,0.00193609,1222.49362201,-0.41897216,-0.28867794],
    ura:     [19.18916464,0.04725744,0.77263783,313.23810451,170.95427630,74.01692503, -0.00196176,-0.00004397,-0.00242939,428.48202785,0.40805281,0.04240589],
    neptu:   [30.06992276,0.00859048,1.77004347,-55.12002969,44.96476227,131.78422574, 0.00026291,0.00005105,0.00035372,218.45945325,-0.32241464,-0.00508664]
  };
  function posicioHelio(nom, dt){
    const E0 = ELEMENTS[nom], T = toDays(dt) / 36525;
    const [a, e, I, Lm, w, O] = [0,1,2,3,4,5].map(k => E0[k] + E0[k + 6] * T);
    const M = ((Lm - w) % 360 + 540) % 360 - 180, om = w - O;
    let E = M * RD + e * Math.sin(M * RD);
    for (let k = 0; k < 8; k++) E -= (E - e * Math.sin(E) - M * RD) / (1 - e * Math.cos(E));
    const xp = a * (Math.cos(E) - e), yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
    const co = Math.cos(om * RD), so = Math.sin(om * RD), cO = Math.cos(O * RD), sO = Math.sin(O * RD), cI = Math.cos(I * RD), sI = Math.sin(I * RD);
    return [ (co*cO - so*sO*cI) * xp + (-so*cO - co*sO*cI) * yp,
             (co*sO + so*cO*cI) * xp + (-so*sO + co*cO*cI) * yp,
             (so*sI) * xp + (co*sI) * yp ];
  }
  const UA = 149597870.7, C_LLUM = 299792.458;
  function distanciaLluna(dt){ // Meeus cap. 47, termes principals (km)
    const T = toDays(dt) / 36525;
    const D = (297.8501921 + 445267.1114034 * T) * RD, M = (357.5291092 + 35999.0502909 * T) * RD, Mp = (134.9633964 + 477198.8675055 * T) * RD, F = (93.2720950 + 483202.0175233 * T) * RD;
    return 385000.56 + (-20905355 * Math.cos(Mp) - 3699111 * Math.cos(2*D - Mp) - 2955968 * Math.cos(2*D) - 569925 * Math.cos(2*Mp)
      + 48888 * Math.cos(M) - 3149 * Math.cos(2*F) + 246158 * Math.cos(2*D - 2*Mp) - 152138 * Math.cos(2*D - M - Mp)
      - 170733 * Math.cos(2*D + Mp) - 204586 * Math.cos(2*D - M) - 129620 * Math.cos(M - Mp) + 108743 * Math.cos(D) + 104755 * Math.cos(M + Mp)) / 1000;
  }
  // Voyager 1: direcció fixa (eclíptica λ≈255,5°, β≈+35°) i 3,57 UA/any; un dia llum de la Terra cap al 15/11/2026
  function distanciaVoyager(dt){
    const lam = 255.5 * RD, bet = 35.0 * RD, u = [Math.cos(bet) * Math.cos(lam), Math.cos(bet) * Math.sin(lam), Math.sin(bet)];
    const anys = (dt - Date.UTC(2026, 10, 15)) / (365.25 * DIA);
    const r = 172.40 + 3.57 * anys;
    const t = posicioHelio('terra', dt);
    return Math.hypot(r * u[0] - t[0], r * u[1] - t[1], r * u[2] - t[2]) * UA;
  }

  // =====================================================================
  // DADES EN LÍNIA: lloc, temps i avisos
  // =====================================================================
  let coords = null, darrerMeteo = null, darrerLloc = null;
  const graus = v => v == null ? '--°' : (Math.round(v * 10) / 10).toLocaleString(locale()) + '°';
  const SOL_IC = `<g><circle cx="32" cy="32" r="11" fill="url(#gSol)" stroke="#8a5536" stroke-width="1.4"/>${[...Array(8)].map((_, i) => { const a = i * 45 * Math.PI / 180; return `<line x1="${32+16*Math.cos(a)}" y1="${32+16*Math.sin(a)}" x2="${32+23*Math.cos(a)}" y2="${32+23*Math.sin(a)}" stroke="#b97752" stroke-width="2.6" stroke-linecap="round"/>`; }).join('')}</g>`;
  const LLUNA_IC = `<path d="M38 12a20 20 0 1 0 14 30A16 16 0 0 1 38 12z" fill="url(#gSol)" stroke="#8a5536" stroke-width="1.4"/>`;
  const NUVOL = (dx = 0, dy = 0, s = 1) => `<path transform="translate(${dx} ${dy}) scale(${s})" d="M18 48h28a10 10 0 0 0 0-20 14 14 0 0 0-27-3A11 11 0 0 0 18 48z" fill="#f8f0de" stroke="#5c4c32" stroke-width="1.8" stroke-linejoin="round"/>`;
  const GOTES = n => [...Array(n)].map((_, i) => `<line x1="${22+i*9}" y1="52" x2="${19+i*9}" y2="60" stroke="#2b4486" stroke-width="2.4" stroke-linecap="round"/>`).join('');
  const FLOCS = `<g stroke="#2b4486" stroke-width="1.6" stroke-linecap="round">${[22,32,42].map(x => `<path d="M${x} 52v8M${x-3.5} 54l7 4M${x-3.5} 58l7-4"/>`).join('')}</g>`;
  const LLAMP = `<path d="M33 46l-6 9h6l-4 8 10-11h-6l4-6z" fill="#7a1a16" stroke="#4e0f12" stroke-width="1" stroke-linejoin="round"/>`;
  const BOIRA = `<g stroke="#7a6646" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="50" x2="52" y2="50"/><line x1="16" y1="56" x2="48" y2="56"/></g>`;
  const DEFS = `<defs><radialGradient id="gSol" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff0de"/><stop offset="50%" stop-color="#e3a983"/><stop offset="100%" stop-color="#9a5e3c"/></radialGradient></defs>`;
  function icona(codi, dia){
    const astre = dia ? SOL_IC : LLUNA_IC;
    if (codi === 0) return DEFS + astre;
    if (codi <= 2) return DEFS + `<g transform="translate(-8 -8) scale(.85)">${astre}</g>` + NUVOL(4, 4, .9);
    if (codi === 3) return DEFS + NUVOL(-6, -6, .8) + NUVOL(2, 2, 1);
    if (codi === 45 || codi === 48) return DEFS + NUVOL(0, -8, 1) + BOIRA;
    if (codi >= 95) return DEFS + NUVOL(0, -6, 1) + LLAMP;
    if ((codi >= 71 && codi <= 77) || codi === 85 || codi === 86) return DEFS + NUVOL(0, -8, 1) + FLOCS;
    if (codi >= 51) return DEFS + (codi >= 80 ? `<g transform="translate(-8 -10) scale(.8)">${astre}</g>` : '') + NUVOL(0, -8, 1) + GOTES(codi === 65 || codi === 82 ? 4 : 3);
    return DEFS + astre;
  }
  const IC_AV = {
    pluja:'<svg viewBox="0 0 24 24"><path d="M6 13a5 5 0 1 1 3-9 6 6 0 0 1 11 3 4 4 0 0 1-1 6"/><path d="M8 16l-1.5 4M12 16l-1.5 4M16 16l-1.5 4"/></svg>',
    vent:'<svg viewBox="0 0 24 24"><path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5"/><path d="M3 12h15a3 3 0 1 1-3 3"/><path d="M3 16h7"/></svg>',
    calor:'<svg viewBox="0 0 24 24"><path d="M10 14.5V5a2 2 0 0 1 4 0v9.5a4 4 0 1 1-4 0z"/><path d="M12 8v8"/></svg>',
    fred:'<svg viewBox="0 0 24 24"><path d="M12 2v20M4 6l16 12M20 6L4 18"/></svg>',
    tempesta:'<svg viewBox="0 0 24 24"><path d="M6 15a5 5 0 1 1 3-9 6 6 0 0 1 11 3 4 4 0 0 1-1 6"/><path d="M13 12l-3 5h4l-2 5"/></svg>',
    neu:'<svg viewBox="0 0 24 24"><path d="M12 2v20M3.5 7l17 10M20.5 7l-17 10"/><path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5"/></svg>'
  };
  // Avisos: només situacions extremes a les properes 12 hores; si no n'hi ha, el full no surt
  function pintaAvisos(){
    const m = darrerMeteo, llista = [];
    if (m){
      const h = m.hourly || {}, dd = m.daily || {}, c = m.current || {};
      const codis = [c.weather_code, ...((h.weather_code || []).slice(0, 12))];
      const ratxa = Math.max(c.wind_gusts_10m || 0, ...((h.wind_gusts_10m || []).slice(0, 12).map(v => v || 0)));
      const prec = Math.max(0, ...((h.precipitation || []).slice(0, 12).map(v => v || 0)));
      const tmax = dd.temperature_2m_max && dd.temperature_2m_max[0], tmin = dd.temperature_2m_min && dd.temperature_2m_min[0];
      if (codis.some(k => k >= 95)) llista.push(['vermell', IC_AV.tempesta, L.a.tempesta]);
      if (prec >= 10 || codis.some(k => k === 65 || k === 82)) llista.push(['', IC_AV.pluja, L.x.pluja]);
      if (codis.some(k => (k >= 71 && k <= 77) || k === 85 || k === 86)) llista.push(['', IC_AV.neu, L.x.neu]);
      if (codis.some(k => k === 56 || k === 57 || k === 66 || k === 67)) llista.push(['', IC_AV.fred, L.x.glac]);
      if (ratxa >= 70) llista.push([ratxa >= 90 ? 'vermell' : '', IC_AV.vent, L.a.ventFort(Math.round(ratxa))]);
      if (tmax != null && tmax >= 35) llista.push([tmax >= 39 ? 'vermell' : '', IC_AV.calor, L.a.calorInt(graus(tmax))]);
      if (tmin != null && tmin <= 0) llista.push(['', IC_AV.fred, L.a.glacada(graus(tmin))]);
    }
    const full = $('fullAvisos');
    const hiHa = llista.length > 0;
    $('fAvisos').innerHTML = llista.slice(0, 4).map(([cls, ic, txt]) => `<li class="${cls}">${ic}<span></span></li>`).join('');
    [...$('fAvisos').querySelectorAll('li span')].forEach((s, i) => { s.textContent = llista[i][2]; });
    if (full.classList.contains('ocult') === hiHa){ full.classList.toggle('ocult', !hiHa); refrescaRoda(); }
  }
  function pintaTemps(){
    const m = darrerMeteo; if (!m) return;
    const c = m.current || {}, d = m.daily || {}, h = m.hourly || {};
    $('fTemp').textContent = graus(c.temperature_2m);
    $('fDesc').textContent = descCel(c.weather_code);
    $('fIcona').innerHTML = icona(c.weather_code ?? 0, c.is_day !== 0);
    $('fSens').textContent = graus(c.apparent_temperature);
    $('fHum').textContent = c.relative_humidity_2m != null ? Math.round(c.relative_humidity_2m) + '%' : '--%';
    $('fMax').textContent = graus(d.temperature_2m_max && d.temperature_2m_max[0]);
    $('fMin').textContent = graus(d.temperature_2m_min && d.temperature_2m_min[0]);
    const box = $('fH12'); box.innerHTML = '';
    (h.time || []).slice(0, 12).forEach((t, k) => {
      const el = document.createElement('div');
      el.innerHTML = `<span class="hh">${t.slice(11, 13)}h</span><svg viewBox="0 0 64 64" aria-hidden="true">${icona(h.weather_code ? h.weather_code[k] : 0, h.is_day ? h.is_day[k] !== 0 : true)}</svg><span class="tt">${h.temperature_2m ? Math.round(h.temperature_2m[k]) + '°' : '--'}</span>`;
      box.appendChild(el);
    });
    const d5 = $('fD5'); d5.innerHTML = '';
    const dies = (d.time || []).slice(1, 6);
    if (!dies.length){ d5.innerHTML = `<div class="m-estat">${L.senseDades}</div>`; return; }
    const mins = d.temperature_2m_min.slice(1, 6), maxs = d.temperature_2m_max.slice(1, 6);
    const lo = Math.min(...mins), hi = Math.max(...maxs), amp = Math.max(1, hi - lo);
    dies.forEach((t, k) => {
      const dt = new Date(t + 'T12:00:00'), f = document.createElement('div');
      const a = (mins[k] - lo) / amp * 100, b = (maxs[k] - lo) / amp * 100;
      f.innerHTML = `<span class="dd">${L.curts[(dt.getDay() + 6) % 7]}</span><svg viewBox="0 0 64 64" aria-hidden="true">${icona(d.weather_code ? d.weather_code[k + 1] : 0, true)}</svg>` +
        `<span class="mn">${Math.round(mins[k])}°</span><span class="barra"><i style="left:${a.toFixed(1)}%;right:${(100 - b).toFixed(1)}%"></i></span><span class="mx">${Math.round(maxs[k])}°</span>`;
      f.title = `${cap(DIES[dt.getDay()])}: ${descCel(d.weather_code ? d.weather_code[k + 1] : 0)}`;
      d5.appendChild(f);
    });
  }
  // Territoris de parla catalana: s'hi diu el nom del país (com al República)
  const PAISOS_CAT = { 'ES-CT':'Catalunya', 'ES-VC':'País Valencià', 'ES-IB':'Illes Balears' };
  const textAdm = d => ((d.localityInfo && d.localityInfo.administrative) || []).map(a => `${a.name || ''} ${a.isoCode || ''}`).join(' | ');
  function territoriCat(d){
    const sub = d.principalSubdivision || '', adm = textAdm(d), cc = d.countryCode, ll = d._ll || [0, 0];
    if (PAISOS_CAT[d.principalSubdivisionCode]) return { regio: PAISOS_CAT[d.principalSubdivisionCode] };
    if (cc === 'ES'){
      if (/^(Catalunya|Cataluña|Catalonia|Catalogne|Katalonien|Catalogna|Catalunha|Katalánsko)/i.test(sub)) return { regio:'Catalunya' };
      if (/valencia/i.test(sub)) return { regio:'País Valencià' };
      if (/balear/i.test(sub)) return { regio:'Illes Balears' };
      if ((d.principalSubdivisionCode === 'ES-AR' || /arag/i.test(sub)) && /Ribagor|Litera|Llitera|Bajo Cinca|Baix Cinca|Behe Cinca|Matarra|Caspe|Casp\b/i.test(adm)) return { regio:'Franja de Ponent' };
    }
    if (cc === 'FR' && (/FR-66|Pyr[ée]n[ée]es[- ]Orientales|Pirineus Orientals/i.test(adm) || (ll[0] > 42.33 && ll[0] < 42.93 && ll[1] > 1.72 && ll[1] < 3.18))) return { regio:'Catalunya Nord' };
    if (cc === 'IT' && /alghero|alguer/i.test(`${d.city || ''} ${d.locality || ''} ${adm}`)) return { nom:"L'Alguer", regio:'Sardenya' };
    return null;
  }
  function pintaLloc(){
    const d = darrerLloc; if (!d) return;
    const tc = territoriCat(d);
    const nom = (tc && tc.nom) || d.city || d.locality || d.principalSubdivision;
    if (nom) $('fLloc').textContent = nordor(nom);
    const local = d.locality && d.locality !== nom && !(tc && tc.nom) ? d.locality : null;
    const regio = (tc ? [local, tc.regio] : [local, d.principalSubdivision, d.countryName]).filter(x => x && x !== nom).map(nordor);
    $('fRegio').textContent = [...new Set(regio)].join(' · ') || '—';
  }
  function pintaCoords(){
    const [lat, lon] = coords ? [coords.lat, coords.lon] : [41.4966, 2.1580];
    const gms = (v, p, n) => { const a = Math.abs(v), g = Math.floor(a), mi = Math.floor((a - g) * 60); return `${g}°${dosD(mi)}′ ${v >= 0 ? p : n}`; };
    $('fCoord').textContent = `${gms(lat, 'N', 'S')} · ${gms(lon, 'E', (LLENGUA === 'en' || LLENGUA === 'de' || LLENGUA === 'cs') ? 'W' : 'O')}`;
    $('fMigdia').textContent = hm(horesSol(new Date(), lat, lon).migdia);
  }
  function geocodifica(lat, lon){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}&localityLanguage=${L.geo || LLENGUA}`)
      .then(r => r.json()).then(d => { if (!d) return; d._ll = [lat, lon]; darrerLloc = d; pintaLloc(); }).catch(() => {});
  }
  function carregaAmbient(lat, lon){
    pintaCoords(); geocodifica(lat, lon);
    const qs = `latitude=${lat.toFixed(4)}&longitude=${lon.toFixed(4)}`;
    fetch(`https://api.open-meteo.com/v1/forecast?${qs}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_gusts_10m&hourly=precipitation,wind_gusts_10m,weather_code,temperature_2m,is_day&forecast_hours=12&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=6&timezone=auto`)
      .then(r => r.json()).then(m => {
        if (!m || !m.current) return;
        darrerMeteo = m; pintaTemps(); pintaAvisos();
        if (m.elevation != null) $('fAlt').textContent = Math.round(m.elevation) + ' m';
      }).catch(() => {});
  }
  function actualitzaAmbient(){
    const perDefecte = () => { const c = coords || { lat: 41.4966, lon: 2.1580 }; if (!coords){ $('fLloc').textContent = 'Ripollet'; } carregaAmbient(c.lat, c.lon); };
    if (!('geolocation' in navigator)) return perDefecte();
    navigator.geolocation.getCurrentPosition(p => { coords = { lat: p.coords.latitude, lon: p.coords.longitude }; carregaAmbient(coords.lat, coords.lon); pintaSolLluna(new Date()); },
      perDefecte, { enableHighAccuracy: false, timeout: 9000, maximumAge: 600000 });
  }
  let darrerAmbient = 0;
  const ambientSiCal = () => { if (!document.hidden && Date.now() - darrerAmbient > 9.5 * 60 * 1000){ darrerAmbient = Date.now(); actualitzaAmbient(); } };

  // =====================================================================
  // AVUI: data, zodíac, sant (o svátek), curiositat, sol i lluna
  // =====================================================================
  function setmanaISO(d){
    const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    const dia = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - dia);
    return Math.ceil(((t - Date.UTC(t.getUTCFullYear(), 0, 1)) / 864e5 + 1) / 7);
  }
  function faseLluna(f, creixent){
    const cx = 24, cy = 24, r = 15, x = Math.abs(r * (1 - 2 * f));
    const s = creixent ? 1 : 0, s2 = creixent ? (f < 0.5 ? 0 : 1) : (f < 0.5 ? 1 : 0);
    return `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${s} ${cx} ${cy + r} A ${x.toFixed(2)} ${r} 0 0 ${s2} ${cx} ${cy - r} Z`;
  }
  const SIN = 29.530588853, edatLluna = d => (((d.getTime() - Date.UTC(2000, 0, 6, 18, 14)) / DIA) % SIN + SIN) % SIN;
  function pintaData(ara){
    const any = ara.getFullYear();
    const diaAny = Math.round((new Date(any, ara.getMonth(), ara.getDate()) - new Date(any, 0, 1)) / DIA) + 1;
    $('fDiaNum').textContent = ara.getDate();
    $('fDiaSet').textContent = cap(DIES[ara.getDay()]);
    $('fMes').textContent = LLENGUA === 'cs' ? mesGen(ara.getMonth()) : L.deMes(MESOS[ara.getMonth()]);
    $('fAny').textContent = any;
    const fe = festiu(ara);
    $('fDiaNum').style.color = (ara.getDay() === 0 || (fe && !fe.ambit.startsWith('Commemoració'))) ? 'var(--festiu)' : '';
    $('fDiaAny').textContent = L.diaAnyCurt(diaAny, setmanaISO(ara));
    $('fFase').textContent = L.fases[Math.floor((edatLluna(ara) / SIN) * 8 + 0.5) % 8];
    const z = zodiac(ara), S = SIGNES[LLENGUA] || SIGNES.ca;
    $('fZodiac').textContent = z.dia ? L.zod(S[z.s], S[z.seg], z.dia) : S[z.s];
  }
  function pintaSolLluna(ara){
    const [lat, lon] = coords ? [coords.lat, coords.lon] : [41.4966, 2.1580];
    const s = horesSol(ara, lat, lon), ahir = horesSol(new Date(ara.valueOf() - DIA), lat, lon);
    const llum = Math.round((s.pon - s.surt) / 60000), llumAhir = Math.round((ahir.pon - ahir.surt) / 60000);
    $('slSolS').textContent = hm(s.surt); $('slSolP').textContent = hm(s.pon);
    $('slLlum').textContent = L.llum(Math.floor(llum / 60), llum % 60);
    $('slDif').textContent = L.dif(llum - llumAhir);
    const ll = horesLluna(ara, lat, lon);
    $('slLlS').textContent = hm(ll.surt); $('slLlP').textContent = hm(ll.pon);
    const edat = edatLluna(ara), f = (1 - Math.cos(2 * Math.PI * edat / SIN)) / 2;
    $('slFase').setAttribute('d', faseLluna(f, edat < SIN / 2));
    $('slIl').textContent = L.il(Math.round(f * 100));
    const aPlena = Math.round(((SIN / 2 - edat) % SIN + SIN) % SIN), aNova = Math.round((SIN - edat) % SIN);
    $('slProp').textContent = aPlena <= aNova ? L.plena(aPlena % 30) : L.nova(aNova % 30);
    pintaCoords();
  }
  // Curiositat: la de la data més propera a avui
  function pintaCuriositat(ara){
    const avui = new Date(2024, ara.getMonth(), ara.getDate());
    let millor = null, dmin = 999;
    CURIOSITATS.forEach(c => {
      const d = new Date(2024, c[0] - 1, c[1]);
      let dd = Math.round((avui - d) / DIA); if (dd > 183) dd -= 366; if (dd < -183) dd += 366;
      const pes = Math.abs(dd) + (dd < 0 ? 0.5 : 0); // a igualtat, millor la que ja ha passat
      if (pes < dmin){ dmin = pes; millor = c; }
    });
    if (!millor) return;
    const [m, d, a, txt] = millor;
    const anyTxt = a < 0 ? `${-a} ${L.aC}` : a;
    $('fCurioEtq').textContent = (m === ara.getMonth() + 1 && d === ara.getDate()) ? `${L.tdc} · ${anyTxt}` : L.dataEv(d, m - 1, anyTxt, L);
    $('fCurio').textContent = txt[LLENGUA] || txt.ca;
  }
  // Sant del dia: de la Viquipèdia de cada llengua; en txec, l'onomàstica (svátek) del calendari
  const MESOS_OC = ['genièr','febrièr','març','abril','mai','junh','julhet','agost','setembre','octòbre','novembre','decembre'];
  const MESOS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const MESOS_DE = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  const WIKI = {
    ca: dt => { const m = I18N.ca.mesos[dt.getMonth()]; return ['ca', `${dt.getDate()} ${/^[aeiou]/.test(m) ? "d'" : 'de '}${m}`]; },
    oc: dt => { const m = MESOS_OC[dt.getMonth()]; return ['oc', `${dt.getDate()} ${/^[aeiouò]/.test(m) ? "d'" : 'de '}${m}`]; },
    gl: dt => ['gl', `${dt.getDate()} de ${I18N.gl.mesos[dt.getMonth()]}`],
    fr: dt => ['fr', `${dt.getDate() === 1 ? '1er' : dt.getDate()} ${I18N.fr.mesos[dt.getMonth()]}`],
    en: dt => ['en', `${MESOS_EN[dt.getMonth()]} ${dt.getDate()}`],
    de: dt => ['de', `${dt.getDate()}. ${MESOS_DE[dt.getMonth()]}`],
    it: dt => ['it', `${dt.getDate() === 1 ? '1º' : dt.getDate()} ${I18N.it.mesos[dt.getMonth()]}`]
  };
  const RE_FESTES = /(sant|commemora|festes|festas|fèstas|celebra|fêtes|saints|holidays|observances|feier|gedenk|namens|feste|ricorrenze|onom)/i;
  const RE_SANT = /(\bsant[ae]?s?\b|\bsaint|\bsanto|\bsanta|\bsan\b|\bheilige|\bonom)/i;
  function netejaWiki(s){
    let x = s.replace(/<ref[^>]*\/>/g, '').replace(/<ref[\s\S]*?<\/ref>/g, '');
    for (let k = 0; k < 3; k++) x = x.replace(/\{\{[^{}]*\}\}/g, '');
    x = x.replace(/\[\[(?:Fitxer|File|Imatge|Image|Archivo|Ficheiro|Fichier|Datei|Imagem):[^\]]*\]\]/gi, '')
         .replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, '$1').replace(/\[\[([^\]]*)\]\]/g, '$1')
         .replace(/\[https?:\S+\s([^\]]*)\]/g, '$1').replace(/'{2,3}/g, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ');
    return x.replace(/\s+/g, ' ').trim();
  }
  function seccions(wt){
    const out = []; let actual = null;
    wt.split('\n').forEach(ln => { const m = /^==\s*([^=].*?)\s*==\s*$/.exec(ln); if (m){ actual = { titol: netejaWiki(m[1]), linies: [] }; out.push(actual); } else if (actual) actual.linies.push(ln); });
    return out;
  }
  const memoriaWiki = {};
  function wikitext(lang, titol){
    const clau = lang + '|' + titol;
    if (memoriaWiki[clau]) return memoriaWiki[clau];
    const url = `https://${lang}.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(titol)}&prop=wikitext&redirects=1&format=json&formatversion=2&origin=*`;
    return memoriaWiki[clau] = fetch(url).then(r => r.json()).then(j => (j && j.parse && j.parse.wikitext) || '').catch(() => { delete memoriaWiki[clau]; return ''; });
  }
  function santDe(wt){
    const linies = seccions(wt).filter(s => RE_FESTES.test(s.titol)).flatMap(s => s.linies).map(l => netejaWiki(l.replace(/^[*:#]+\s*/, ''))).filter(l => RE_SANT.test(l) && l.length > 4);
    let sant = linies.length ? linies.slice(0, 2).join(' · ') : '';
    sant = sant.replace(/^(santoral|onomàstica|onomástica|santos|santi|saints|namenstage?|heilige)\s*:\s*/i, '');
    if (sant.length > 130) sant = sant.slice(0, 127).replace(/\s\S*$/, '') + '…';
    return sant ? sant.charAt(0).toUpperCase() + sant.slice(1) : '';
  }
  let santToken = 0;
  function pintaSant(ara){
    const tok = ++santToken, llengua = LLENGUA;
    $('fSantEtq').textContent = L.sant;
    if (llengua === 'cs'){
      const i = Math.round((new Date(2024, ara.getMonth(), ara.getDate()) - new Date(2024, 0, 1)) / DIA);
      $('fSant').textContent = JMENINY[i] || '—';
      $('fSantEtq').hidden = $('fSant').hidden = !JMENINY[i];
      return;
    }
    $('fSant').textContent = L.carregant; $('fSantEtq').hidden = $('fSant').hidden = false;
    const [lang, titol] = (WIKI[llengua] || WIKI.ca)(ara);
    wikitext(lang, titol).then(wt => santDe(wt)).then(s => (!s && llengua === 'oc') ? wikitext(...WIKI.ca(ara)).then(santDe) : s).then(s => {
      if (tok !== santToken) return;
      $('fSant').textContent = nordor(s);
      $('fSantEtq').hidden = $('fSant').hidden = !s;
    }).catch(() => { if (tok === santToken) $('fSantEtq').hidden = $('fSant').hidden = true; });
  }

  // =====================================================================
  // DISTÀNCIES
  // =====================================================================
  function tempsLlum(s){
    if (s < 60) return `${s.toLocaleString(locale(), { maximumFractionDigits: 1 })} s`;
    const m = Math.floor(s / 60), h = Math.floor(m / 60);
    if (h === 0) return `${m} min ${Math.round(s - m * 60)} s`;
    return `${h} h ${m - h * 60} min`;
  }
  function km(v){
    if (v < 1e6) return `${Math.round(v).toLocaleString(locale())} km`;
    return `${(v / 1e6).toLocaleString(locale(), { maximumFractionDigits: v < 1e9 ? 1 : 0 })} ${L.milions}`;
  }
  function pintaDistancies(){
    const ara = new Date(), A = ASTRES[LLENGUA] || ASTRES.ca;
    const terra = posicioHelio('terra', ara);
    const dist = nom => { const p = posicioHelio(nom, ara); return Math.hypot(p[0] - terra[0], p[1] - terra[1], p[2] - terra[2]) * UA; };
    const files = [
      [A[0], distanciaLluna(ara)], [A[1], Math.hypot(...terra) * UA],
      [A[2], dist('mercuri')], [A[3], dist('venus')], [A[4], dist('mart')],
      [A[5], dist('jupiter')], [A[6], dist('saturn')], [A[7], dist('ura')], [A[8], dist('neptu')],
      ['Voyager 1', distanciaVoyager(ara)]
    ];
    const planetes = files.slice(2, 9), proper = planetes.reduce((a, b) => b[1] < a[1] ? b : a)[0];
    const fila = ([nom, d]) => `<div class="ds-fila${nom === proper ? ' proper' : ''}"><span class="ds-nom"></span><span class="ds-km">${km(d)}</span><span class="ds-llum"></span></div>`;
    [[$('dist1'), files.slice(0, 4)], [$('dist2'), files.slice(4, 8)], [$('dist3'), files.slice(8)]].forEach(([box, ff]) => {
      box.innerHTML = ff.map(fila).join('');
      [...box.children].forEach((el, i) => { el.querySelector('.ds-nom').textContent = ff[i][0]; el.querySelector('.ds-llum').textContent = L.llumTriga(tempsLlum(ff[i][1] / C_LLUM)); });
    });
  }

  // =====================================================================
  // RÀDIO, PODCASTS I NOTÍCIES (com al República)
  // =====================================================================
  const media = (function(){
    const ICON_EXT = '';
    const IC_PLAY = '<svg viewBox="0 0 10 10" class="ic-play"><path d="M2.4 1l6.6 4-6.6 4z" fill="currentColor"/></svg>';
    const IC_PAUSA = '<svg viewBox="0 0 10 10" class="ic-pausa"><path d="M2 1h2.2v8H2zM5.8 1H8v8H5.8z" fill="currentColor"/></svg>';
    const PL_PAUSA = '<path d="M9 6v12M15 6v12"/>', PL_PLAY = '<path d="M8 5.5v13l10.5-6.5z"/>';
    const player = new Audio(); player.preload = 'none';
    let sona = null; const placa = $('araSona');
    function pintaEstat(){
      const enMarxa = !!(sona && !player.paused);
      document.querySelectorAll('[data-audio-id]').forEach(b => {
        const meu = !!(sona && b.dataset.audioId === sona.id);
        b.classList.toggle('sonant', meu && enMarxa); b.classList.toggle('triat', meu);
        const barra = b.querySelector('.p-barra'); if (barra && !meu) barra.style.width = '0';
      });
      placa.hidden = !sona;
      if (sona){ $('icSona').innerHTML = enMarxa ? PL_PAUSA : PL_PLAY; $('vSona').textContent = sona.titol + (sona.sub ? ' · ' + sona.sub : ''); }
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = sona ? (enMarxa ? 'playing' : 'paused') : 'none';
    }
    let hls = null, hlsLib = null;
    const esHls = u => /\.m3u8(\?|$)/i.test(u || '');
    function aturaHls(){ if (hls){ try { hls.destroy(); } catch(e){} hls = null; } }
    function carregaHls(){
      if (window.Hls) return Promise.resolve(window.Hls);
      if (!hlsLib) hlsLib = new Promise((res, rej) => {
        const s = document.createElement('script'); s.src = 'https://cdn.jsdelivr.net/npm/hls.js@1.5.17/dist/hls.min.js';
        s.onload = () => window.Hls ? res(window.Hls) : rej(new Error('hls')); s.onerror = () => { hlsLib = null; rej(new Error('hls')); };
        document.head.appendChild(s);
      });
      return hlsLib;
    }
    const resolts = {}, RB = ['de1', 'nl1', 'at1', 'all'];
    function radioBrowser(rb, i = 0){
      if (i >= RB.length) return Promise.reject(new Error('rb'));
      return ambTemps(fetch(`https://${RB[i]}.api.radio-browser.info/json/stations/search?name=${encodeURIComponent(rb.name)}&countrycode=${rb.cc}&hidebroken=true&order=clickcount&reverse=true&limit=20`), 7000)
        .then(r => { if (!r.ok) throw new Error('http'); return r.json(); })
        .then(llista => {
          const ok = llista.filter(st => /^https:/i.test(st.url_resolved || ''));
          const exactes = ok.filter(st => (st.name || '').trim().toLowerCase() === rb.name.toLowerCase());
          const pou = exactes.length ? exactes : ok, millor = pou.find(st => !esHls(st.url_resolved)) || pou[0];
          if (!millor) throw new Error('cap'); return millor.url_resolved;
        }).catch(() => radioBrowser(rb, i + 1));
    }
    function engega(item, url){
      aturaHls(); item.url = url;
      const intent = item.intent = (item.intent || 0) + 1;
      if (esHls(url) && !player.canPlayType('application/vnd.apple.mpegurl')){
        player.removeAttribute('src'); try { player.load(); } catch(e){}
        carregaHls().then(Hls => {
          if (sona !== item || item.intent !== intent) return;
          if (!Hls.isSupported()) throw new Error('hls');
          hls = new Hls(); hls.on(Hls.Events.ERROR, (ev, d) => { if (d && d.fatal && sona === item && item.intent === intent) falla(item); });
          hls.loadSource(url); hls.attachMedia(player); player.play().catch(() => {});
        }).catch(() => { if (sona === item && item.intent === intent) falla(item); });
        pintaEstat(); return;
      }
      player.src = url; player.play().catch(() => {});
    }
    function falla(item){
      if (item.fallant) return;
      if (item.rb && !item.rbProvat){
        item.rbProvat = true; item.fallant = true;
        radioBrowser(item.rb).then(url => { item.fallant = false; if (sona !== item) return; if (url && url !== item.url){ resolts[item.id] = url; engega(item, url); } else rendeix(item); })
          .catch(() => { item.fallant = false; if (sona === item) rendeix(item); });
        return;
      }
      rendeix(item);
    }
    function rendeix(item){
      aturaHls(); player.removeAttribute('src'); try { player.load(); } catch(e){}
      sona = null; delete resolts[item.id]; pintaEstat();
      if (item.tipus === 'radio'){ const b = document.querySelector(`[data-audio-id="${item.id}"]`); if (b) b.dataset.nomesWeb = '1'; avisa(L.toastRadio(item.titol), 6000); }
      else avisa(L.toastPodcast, 6000);
    }
    function reprodueix(item){
      if (sona && sona.id === item.id){ if (player.paused) player.play().catch(() => {}); else player.pause(); return; }
      sona = item;
      const conegut = resolts[item.id] || item.audio;
      if (conegut) engega(item, conegut);
      else if (item.rb){ item.rbProvat = true; player.pause(); radioBrowser(item.rb).then(url => { if (sona !== item) return; resolts[item.id] = url; engega(item, url); }).catch(() => { if (sona === item) rendeix(item); }); }
      if ('mediaSession' in navigator && window.MediaMetadata){ try { navigator.mediaSession.metadata = new MediaMetadata({ title: item.titol, artist: item.sub || '', album: 'Orloj', artwork: [{ src: 'orloj-icona-512.png', sizes: '512x512', type: 'image/png' }] }); } catch(e){} }
      pintaEstat();
    }
    let tempsPausa = null;
    function atura(){
      clearTimeout(tempsPausa); aturaHls(); try { player.pause(); } catch(e){}
      player.removeAttribute('src'); try { player.load(); } catch(e){}
      sona = null; if ('mediaSession' in navigator) try { navigator.mediaSession.metadata = null; } catch(e){}
      pintaEstat();
    }
    ['play','playing','pause','waiting','canplay','ended'].forEach(ev => player.addEventListener(ev, pintaEstat));
    player.addEventListener('timeupdate', () => {
      if (!sona || sona.tipus !== 'podcast' || !player.duration) return;
      const barra = document.querySelector(`[data-audio-id="${sona.id}"] .p-barra`); if (barra) barra.style.width = (player.currentTime / player.duration * 100) + '%';
    });
    player.addEventListener('error', () => { if (sona && !hls && player.getAttribute('src')) falla(sona); });
    const commuta = e => { e.stopPropagation(); if (!sona) return; if (player.paused) player.play().catch(() => {}); else player.pause(); };
    $('sonaTanca').addEventListener('click', e => { e.stopPropagation(); atura(); });
    player.addEventListener('ended', () => { if (sona && sona.tipus === 'podcast') atura(); });
    player.addEventListener('pause', () => { clearTimeout(tempsPausa); tempsPausa = setTimeout(() => { if (sona && player.paused) atura(); }, 10 * 60 * 1000); });
    player.addEventListener('play', () => clearTimeout(tempsPausa));
    placa.addEventListener('click', commuta);
    placa.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); commuta(e); } });
    if ('mediaSession' in navigator){ try { navigator.mediaSession.setActionHandler('play', () => player.play().catch(() => {})); navigator.mediaSession.setActionHandler('pause', () => player.pause()); navigator.mediaSession.setActionHandler('stop', () => atura()); } catch(e){} }

    const R = (id, nom, sub, audio, web, rbName, cc) => ({ id, nom, sub, audio, web, rb: { name: rbName || nom, cc } });
    const RADIOS = {
      ca: [ R('ca-catradio','Catalunya Ràdio','3Cat','https://shoutcast.ccma.cat/ccma/catalunyaradioHD.mp3','https://www.3cat.cat/3cat/directes/catalunya-radio/',null,'ES'),
            R('ca-rac1','RAC1','Generalista','https://playerservices.streamtheworld.com/api/livestream-redirect/RAC_1.mp3','https://www.rac1.cat/',null,'ES'),
            R('ca-catinfo','Catalunya Informació','Notícies · 3Cat','https://shoutcast.ccma.cat/ccma/catalunyainformacioHD.mp3','https://www.3cat.cat/3cat/directes/catalunya-informacio/',null,'ES'),
            R('ca-catmusica','Catalunya Música','Clàssica · 3Cat','https://shoutcast.ccma.cat/ccma/catalunyamusicaHD.mp3','https://www.3cat.cat/3cat/directes/catalunya-musica/',null,'ES'),
            R('ca-icat','iCat','Cultura · 3Cat','https://shoutcast.ccma.cat/ccma/icatHD.mp3','https://www.3cat.cat/3cat/directes/icat/',null,'ES'),
            R('ca-rac105','RAC105','Música','https://playerservices.streamtheworld.com/api/livestream-redirect/RAC105.mp3','https://www.rac105.cat/',null,'ES'),
            R('ca-clasica','Radio Clásica','Clàssica · RNE','https://rtvelivestream.rtve.es/rtvesec/rne/rne_r2_main.m3u8','https://www.rtve.es/radio/radioclasica/',null,'ES'),
            R('ca-bbc','BBC World Service','Món · anglès','https://stream.live.vc.bbcmedia.co.uk/bbc_world_service','https://www.bbc.com/audio',null,'GB') ],
      oc: [ R('oc-rlo',"Ràdio Lenga d'Òc",'Montpelhièr','https://stream-ssl.radios-arra.fr:8443/rlo','http://radiolengadoc.com/',"Radio lenga d'Oc",'FR'),
            R('oc-pais','Ràdio País','Pau · Biarn','https://stunnel2.cyber-streaming.com:9272/stream','https://www.radiopais.fr/','Radio Pais','FR'),
            R('oc-occitania','Ràdio Occitania','Tolosa',null,'https://www.radio-occitania.com/','Radio Occitania','FR'),
            R('oc-nissa','Ràdio Nissa Pantai','Niça','https://listen.radioking.com/radio/79270/stream/117373','http://www.nissapantai.com/',null,'FR'),
            R('oc-catradio','Catalunya Ràdio','3Cat','https://shoutcast.ccma.cat/ccma/catalunyaradioHD.mp3','https://www.3cat.cat/3cat/directes/catalunya-radio/',null,'ES'),
            R('oc-catinfo','Catalunya Informació','Notícies · 3Cat','https://shoutcast.ccma.cat/ccma/catalunyainformacioHD.mp3','https://www.3cat.cat/3cat/directes/catalunya-informacio/',null,'ES'),
            R('oc-rac1','RAC1','Generalista','https://playerservices.streamtheworld.com/api/livestream-redirect/RAC_1.mp3','https://www.rac1.cat/',null,'ES'),
            R('oc-ici','ici Occitanie','Tolosa · Radio France','https://icecast.radiofrance.fr/fbtoulouse-midfi.mp3?id=radiofrance','https://www.francebleu.fr/occitanie',null,'FR') ],
      gl: [ R('gl-rg','Radio Galega','Xeneralista · CRTVG','https://crtvg-radiogalega-hls.flumotion.cloud/playlist.m3u8','https://www.agalegaaudio.gal/',null,'ES'),
            R('gl-rgm','Radio Galega Música','Música · CRTVG','https://crtvg-radiogalega-musica-hls.flumotion.cloud/playlist.m3u8','https://www.agalegaaudio.gal/',null,'ES'),
            R('gl-ser','SER Galicia','Xeneralista',null,'https://cadenaser.com/galicia/','Cadena Ser Radio Galicia','ES'),
            R('gl-rne1','RNE Galicia','Radio 1 · RNE','https://dispatcher.rndfnk.com/crtve/rne1/gal/mp3/high','https://www.rtve.es/play/audios/programa/rne_gal-live/3893549/','RNE Radio 1 Galicia','ES'),
            R('gl-voz','Radio Voz','Xeneralista',null,'https://www.radiovoz.com/','Radio Voz (A Coruña)','ES'),
            R('gl-cuac','Cuac FM','Comunitaria · A Coruña','https://streaming.cuacfm.org/cuacfm-128k.mp3','https://cuacfm.org/',null,'ES'),
            R('gl-clasica','Radio Clásica','Clásica · RNE','https://rtvelivestream.rtve.es/rtvesec/rne/rne_r2_main.m3u8','https://www.rtve.es/radio/radioclasica/',null,'ES'),
            R('gl-r5','Radio 5 Galicia','Información · RNE',null,'https://www.rtve.es/radio/radio5/','RNE Radio 5 Galicia','ES') ],
      fr: [ R('fr-franceinfo','franceinfo','Info · Radio France','https://icecast.radiofrance.fr/franceinfo-midfi.mp3?id=radiofrance','https://www.radiofrance.fr/franceinfo',null,'FR'),
            R('fr-inter','France Inter','Généraliste','https://icecast.radiofrance.fr/franceinter-midfi.mp3?id=radiofrance','https://www.radiofrance.fr/franceinter',null,'FR'),
            R('fr-rtl','RTL','Généraliste',null,'https://www.rtl.fr/ecouter',null,'FR'),
            R('fr-nrj','NRJ','Hits','https://scdn.nrjaudio.fm/adwz2/fr/30001/mp3_128.mp3?origine=fluxradios','https://www.nrj.fr/',null,'FR'),
            R('fr-musique','France Musique','Classique','https://icecast.radiofrance.fr/francemusique-midfi.mp3?id=radiofrance','https://www.radiofrance.fr/francemusique',null,'FR'),
            R('fr-classique','Radio Classique','Classique','https://str0.creacast.com/classique1','https://www.radioclassique.fr/',null,'FR'),
            R('fr-rmc','RMC','Sport · talk','https://audio.bfmtv.com/rmcradio_128.mp3','https://rmc.bfmtv.com/',null,'FR'),
            R('fr-nostalgie','Nostalgie','Années 60 70 80','https://streaming.nrjaudio.fm/oug7girb92oc?origine=fluxradios','https://www.nostalgie.fr/',null,'FR') ],
      en: [ R('en-r4','BBC Radio 4','News · BBC','https://lsn.lv/bbcradio.m3u8?station=bbc_radio_fourfm&bitrate=96000','https://www.bbc.co.uk/sounds/play/live:bbc_radio_fourfm',null,'GB'),
            R('en-lbc','LBC','Talk · news','https://ice-sov.musicradio.com/LBCLondonHD?hdauth=:2000000000:a290d4b39a16153061d4c743008b9fe8d424a7e5ec6469d40acf51fdcd336e80','https://www.lbc.co.uk/',null,'GB'),
            R('en-r2','BBC Radio 2','Pop · BBC','https://lsn.lv/bbcradio.m3u8?station=bbc_radio_two&bitrate=96000','https://www.bbc.co.uk/sounds/play/live:bbc_radio_two',null,'GB'),
            R('en-heart','Heart UK','Pop','https://media-ssl.musicradio.com/HeartUKMP3','https://www.heart.co.uk/',null,'GB'),
            R('en-r3','BBC Radio 3','Classical · BBC','https://lsn.lv/bbcradio.m3u8?station=bbc_radio_three&bitrate=96000','https://www.bbc.co.uk/sounds/play/live:bbc_radio_three',null,'GB'),
            R('en-classicfm','Classic FM','Classical','https://media-ssl.musicradio.com/ClassicFM','https://www.classicfm.com/',null,'GB'),
            R('en-talksport','talkSPORT','Sport','https://radio.talksport.com/stream','https://talksport.com/',null,'GB'),
            R('en-r5','BBC Radio 5 Live','Sport · BBC','https://lsn.lv/bbcradio.m3u8?station=bbc_radio_five_live&bitrate=96000','https://www.bbc.co.uk/sounds/play/live:bbc_radio_five_live',null,'GB') ],
      de: [ R('de-dlf','Deutschlandfunk','Nachrichten','https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3','https://www.deutschlandfunk.de/',null,'DE'),
            R('de-br24','BR24','Nachrichten · BR','https://dispatcher.rndfnk.com/br/br24/live/mp3/mid','https://www.br.de/radio/live/br24/',null,'DE'),
            R('de-wdr2','WDR 2','Pop · WDR','https://wdr-wdr2-rheinland.icecastssl.wdr.de/wdr/wdr2/rheinland/mp3/128/stream.mp3','https://www1.wdr.de/radio/wdr2/',null,'DE'),
            R('de-swr3','SWR3','Pop · SWR','https://liveradio.swr.de/sw282p3/swr3/play.mp3','https://www.swr3.de/',null,'DE'),
            R('de-brklassik','BR-Klassik','Klassik · BR','https://dispatcher.rndfnk.com/br/brklassik/live/mp3/high','https://www.br-klassik.de/',null,'DE'),
            R('de-klassik','Klassik Radio','Klassik','https://klassikr.streamabc.net/klr-krdnational-mp3-192-4099384','https://www.klassikradio.de/',null,'DE'),
            R('de-sportschau','Sportschau','Sport · ARD','https://wdr-sportschau-liga1konferenz.icecastssl.wdr.de/wdr/sportschau/liga1konferenz/mp3/128/stream.mp3','https://www.sportschau.de/audio/',null,'DE'),
            R('de-harmony','harmony.fm','70er & 80er','https://mp3.harmonyfm.de/harmonyfm/hqlivestream.mp3','https://www.harmonyfm.de/','harmony','DE') ],
      it: [ R('it-rai1','Rai Radio 1','Notizie · Rai','https://icecdn-19d24861e90342cc8decb03c24c8a419.msvdn.net/icecastRelay/S16355530/Q4zh3NTu28Rx/icecast','https://www.raiplaysound.it/radio1',null,'IT'),
            R('it-rtl','RTL 102.5','Generalista','https://StreamCdnF43-dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/tbbP8T1ZRPBL/playlist_audio.m3u8','https://www.rtl.it/',null,'IT'),
            R('it-rds','RDS','Hit','https://stream.rds.radio/audio/rds.stream_aac64/chunklist.m3u8','https://www.rds.it/',null,'IT'),
            R('it-italia','Radio Italia','Pop italiano','https://radioitaliasmi.akamaized.net/hls/live/2093120/RISMI/stream01/streamPlaylist.m3u8','https://www.radioitalia.it/',null,'IT'),
            R('it-rai3c','Rai Radio 3 Classica','Classica · Rai','https://radiotreclassica-live.akamaized.net/hls/live/2032595/radiotreclassica/radiotreclassica/playlist.m3u8','https://www.raiplaysound.it/radio3classica',null,'IT'),
            R('it-classica','Radio Classica','Classica','https://stream10.xdevel.com/audio0s978096-2470/stream/icecast.audio','https://www.radioclassica.fm/',null,'IT'),
            R('it-sportiva','Radio Sportiva','Sport','https://sportiva.inmystream.it/stream/sportiva','https://www.radiosportiva.com/',null,'IT'),
            R('it-nostalgia','Radio Nostalgia','Successi di ieri','https://rn1.fluidstream.eu/nostalgia_li.mp3','https://www.nostalgia.it/',null,'IT') ],
      cs: [ R('cs-rzk','Radiožurnál','Zprávy · ČRo','https://rozhlas.stream/radiozurnal.mp3','https://radiozurnal.rozhlas.cz/','ČRo Radiožurnál','CZ'),
            R('cs-dvojka','Dvojka','Rodinné rádio · ČRo','https://rozhlas.stream/dvojka.mp3','https://dvojka.rozhlas.cz/','ČRo Dvojka','CZ'),
            R('cs-vltava','Vltava','Kultura · ČRo','https://rozhlas.stream/vltava.mp3','https://vltava.rozhlas.cz/','ČRo Vltava','CZ'),
            R('cs-plus','Plus','Publicistika · ČRo','https://rozhlas.stream/plus.mp3','https://plus.rozhlas.cz/','ČRo Plus','CZ'),
            R('cs-ddur','D-dur','Klasika · ČRo','https://rozhlas.stream/ddur.mp3','https://d-dur.rozhlas.cz/','ČRo D-dur','CZ'),
            R('cs-jazz','Jazz','Jazz · ČRo','https://rozhlas.stream/jazz.mp3','https://jazz.rozhlas.cz/','ČRo Jazz','CZ'),
            R('cs-wave','Radio Wave','Hudba · ČRo','https://rozhlas.stream/radio_wave.mp3','https://wave.rozhlas.cz/','ČRo Radio Wave','CZ'),
            R('cs-pohoda','Pohoda','Hudba · ČRo','https://rozhlas.stream/pohoda.mp3','https://pohoda.rozhlas.cz/','ČRo Pohoda','CZ') ]
    };
    function pintaRadios(){
      const caixa = $('mRadios'); caixa.innerHTML = '';
      (RADIOS[LLENGUA] || RADIOS.ca).forEach(r => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'r-boto'; b.dataset.audioId = r.id;
        b.setAttribute('aria-label', `${r.nom} · ${L.directe}`);
        b.innerHTML = '<span class="r-punt"></span><span class="r-txt"><span class="r-nom"></span><span class="r-sub"></span></span>';
        b.querySelector('.r-nom').textContent = r.nom; b.querySelector('.r-sub').textContent = r.sub;
        b.addEventListener('click', () => { if (b.dataset.nomesWeb){ window.open(r.web, '_blank', 'noopener'); return; } reprodueix({ id: r.id, titol: r.nom, sub: L.directe, audio: r.audio, web: r.web, rb: r.rb, tipus: 'radio' }); });
        caixa.appendChild(b);
      });
      pintaEstat();
    }
    // Podcasts de RAC1 (només en català i occità)
    const OMNY_ORG = '47dc05c7-7279-4c6f-9b31-ae74013297d9';
    const PROGRAMES = {
      competencia: { omny: 'e38e0ded-b456-40ef-a8da-af1000eff5fc', apple: '330984064', n: 25, web: 'https://omny.fm/shows/la-competencia-programa-sencer' },
      via: { omny: '48f190bf-f9df-4d37-961b-af0300af6177', apple: '395147618', n: 80, web: 'https://omny.fm/shows/via-lliure-programa-sencer' }
    };
    const NUM_DIA = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const fmtMadrid = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', weekday: 'short', day: 'numeric', month: 'numeric', hour: '2-digit', hourCycle: 'h23' });
    function madrid(d){ const o = {}; fmtMadrid.formatToParts(d).forEach(p => { o[p.type] = p.value; }); return { dow: NUM_DIA[o.weekday], dia: +o.day, mes: +o.month, hora: parseInt(o.hour, 10) % 24 }; }
    function clipsOmny(p){
      return ambTemps(fetch(`https://api.omny.fm/orgs/${OMNY_ORG}/programs/${p.omny}/clips?pageSize=${p.n}`), 12000)
        .then(r => { if (!r.ok) throw new Error('omny'); return r.json(); })
        .then(j => (j.Clips || []).map(c => ({ id: c.Id, titol: neteja(c.Title), data: new Date(c.PublishedUtc), audio: c.AudioUrl, web: c.PublishedUrl })));
    }
    function clipsApple(p){
      return new Promise((res, rej) => {
        const cb = '__orlojApple' + Date.now() + Math.floor(Math.random() * 1e5), s = document.createElement('script');
        const t = setTimeout(() => { neta(); rej(new Error('apple')); }, 12000);
        function neta(){ clearTimeout(t); try { delete window[cb]; } catch(e){ window[cb] = undefined; } s.remove(); }
        window[cb] = j => { neta(); res((j.results || []).filter(r => r.wrapperType === 'podcastEpisode').map(r => ({ id: String(r.trackId), titol: neteja(r.trackName), data: new Date(r.releaseDate), audio: r.episodeUrl, web: r.trackViewUrl }))); };
        s.onerror = () => { neta(); rej(new Error('apple')); };
        s.src = `https://itunes.apple.com/lookup?id=${p.apple}&entity=podcastEpisode&limit=${p.n}&callback=${cb}`;
        document.head.appendChild(s);
      });
    }
    const clips = p => clipsOmny(p).catch(() => clipsApple(p));
    function darrerPerDia(llista, dies, hora){
      const ara = Date.now(), perDia = {};
      llista.forEach(c => {
        if (!c.audio || isNaN(c.data) || c.data.getTime() > ara) return;
        const m = madrid(c.data); if (!dies.includes(m.dow)) return; if (hora != null && m.hora !== hora) return;
        if (!perDia[m.dow] || c.data > perDia[m.dow].data){ c.m = m; perDia[m.dow] = c; }
      });
      return Object.values(perDia).sort((a, b) => a.data - b.data);
    }
    const memoria = { competencia: null, via: null };
    let progCarregats = 0, progOcupat = false;
    function botoPrograma(c, darrer, programa){
      const b = document.createElement('button'); b.type = 'button'; b.className = 'p-boto' + (darrer ? ' darrer' : ''); b.dataset.audioId = c.id;
      const nomDia = cap(L.dies[c.m.dow]);
      b.innerHTML = `<span class="p-dia"></span><span class="p-data"></span><span class="p-ic">${IC_PLAY}${IC_PAUSA}</span><span class="p-barra"></span>`;
      b.querySelector('.p-dia').textContent = L.curts[(c.m.dow + 6) % 7]; b.querySelector('.p-data').textContent = `${c.m.dia}/${c.m.mes}`;
      b.setAttribute('aria-label', `${programa}, ${nomDia} ${c.m.dia}/${c.m.mes}`); b.title = c.titol || '';
      b.addEventListener('click', () => reprodueix({ id: c.id, titol: programa, sub: `${nomDia} ${c.m.dia}/${c.m.mes}`, audio: c.audio, web: c.web, tipus: 'podcast', clip: c }));
      return b;
    }
    function pintaProgrames(){
      [[memoria.competencia, $('pCompetencia'), PROGRAMES.competencia, 'La Competència'], [memoria.via, $('pVia'), PROGRAMES.via, 'Via lliure']].forEach(([llista, caixa, p, nom]) => {
        if (!llista){ caixa.innerHTML = `<div class="m-estat">${L.carregant}</div>`; return; }
        if (llista === 'error'){ caixa.innerHTML = '<div class="m-estat"><span></span> <a target="_blank" rel="noopener"></a></div>'; caixa.querySelector('span').textContent = L.errProgrames; const a = caixa.querySelector('a'); a.textContent = L.obreWeb; a.href = p.web; return; }
        caixa.innerHTML = ''; llista.forEach((c, i) => caixa.appendChild(botoPrograma(c, i === llista.length - 1, nom)));
      });
      pintaEstat();
    }
    function carregaProgrames(força){
      if (progOcupat || !LLENGUES_PODCAST.includes(LLENGUA)) return;
      if (!força && Date.now() - progCarregats < 10 * 60 * 1000) return;
      progOcupat = true;
      const p1 = clips(PROGRAMES.competencia).then(ll => { const l = darrerPerDia(ll, [1,2,3,4,5], null); if (!l.length) throw new Error('buit'); memoria.competencia = l; }).catch(() => { if (!Array.isArray(memoria.competencia)) memoria.competencia = 'error'; });
      const p2 = clips(PROGRAMES.via).then(ll => { const l = darrerPerDia(ll, [6, 0], 7); if (!l.length) throw new Error('buit'); memoria.via = l; }).catch(() => { if (!Array.isArray(memoria.via)) memoria.via = 'error'; });
      Promise.all([p1, p2]).then(() => { progOcupat = false; progCarregats = Date.now(); pintaProgrames(); });
    }
    // Notícies
    const MAX_N = 12;
    const INTERMEDIARIS = [ u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u), u => 'https://api.codetabs.com/v1/proxy/?quest=' + encodeURIComponent(u), u => 'https://corsproxy.io/?url=' + encodeURIComponent(u) ];
    function itemsRss(xml){
      const doc = new DOMParser().parseFromString(xml, 'text/xml');
      return [...doc.querySelectorAll('item')].map(it => ({ title: (it.querySelector('title') || {}).textContent || '', link: (it.querySelector('link') || {}).textContent || '', pubDate: (it.querySelector('pubDate') || {}).textContent || '' }));
    }
    function rssIntermediari(rss, i){
      if (i >= INTERMEDIARIS.length) return Promise.reject(new Error('cap'));
      return ambTemps(fetch(INTERMEDIARIS[i](rss), { cache: 'no-store' }), 9000).then(r => { if (!r.ok) throw new Error('http'); return r.text(); })
        .then(x => { const it = itemsRss(x); if (!it.length) throw new Error('buit'); return it; }).catch(() => rssIntermediari(rss, i + 1));
    }
    function rss2json(rss){
      return ambTemps(fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(rss)), 9000).then(r => r.json())
        .then(j => { const it = (j && j.items) || []; if (!it.length) throw new Error('buit'); return it; });
    }
    function fil(rss){
      return rssIntermediari(rss, 0).catch(() => rss2json(rss)).then(items => items.map(it => ({ titol: neteja(it.title), url: neteja(it.link), d: Date.parse(it.pubDate || '') || 0 }))
        .filter(it => it.titol && it.url).sort((x, y) => y.d - x.d).slice(0, MAX_N));
    }
    function google(q, hl, gl, treu){
      const rss = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q) + `&hl=${hl}&gl=${gl}&ceid=${gl}:${hl.slice(0, 2)}`;
      return rss2json(rss).catch(() => rssIntermediari(rss, 0)).then(items => items.slice(0, MAX_N).map(it => { let titol = neteja(it.title); titol = treu ? titol.replace(treu, '') : titol.replace(/\s+-\s+([^-]+)$/, ' · $1'); return { titol, url: it.link }; }));
    }
    function acn(i = 0){
      if (i >= INTERMEDIARIS.length) return Promise.reject(new Error('cap'));
      return ambTemps(fetch(INTERMEDIARIS[i]('https://www.acn.cat/'), { cache: 'no-store' }), 9000).then(r => { if (!r.ok) throw new Error('http'); return r.text(); })
        .then(html => {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const enllacos = [...doc.querySelectorAll('a[href*="/new/"]')];
          const capS = [...doc.querySelectorAll('h1,h2,h3,h4,span,div,p')].find(e => neteja(e.textContent).toLowerCase() === 'al minut');
          const triats = capS ? enllacos.filter(a => capS.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING) : enllacos;
          const vist = {}, ordre = [];
          triats.forEach(a => { let h = a.getAttribute('href') || ''; if (h.indexOf('http') !== 0) h = 'https://www.acn.cat' + (h.charAt(0) === '/' ? '' : '/') + h; const t = neteja(a.textContent); if (t.length < 20) return; if (!vist[h]){ vist[h] = t; ordre.push(h); } else if (t.length > vist[h].length) vist[h] = t; });
          const r = ordre.slice(0, MAX_N).map(h => ({ titol: vist[h], url: h })); if (!r.length) throw new Error('buit'); return r;
        }).catch(() => acn(i + 1));
    }
    const FONTS = {
      ca: [ { peu: 'Agència Catalana de Notícies', web: 'https://www.acn.cat/', load: () => acn() }, { peu: 'Agència Catalana de Notícies', web: 'https://www.acn.cat/', load: () => google('site:acn.cat when:1d', 'ca', 'ES', /\s+-\s+(ACN|acn\.cat|Agència Catalana de Notícies)\s*$/i) } ],
      oc: [ { peu: 'Jornalet', web: 'https://www.jornalet.com/', load: () => google('site:jornalet.com', 'fr', 'FR', /\s+-\s+(Jornalet|jornalet\.com)\s*$/i) }, { peu: 'Agència Catalana de Notícies', web: 'https://www.acn.cat/', load: () => acn() } ],
      gl: [ { peu: 'Nós Diario', web: 'https://www.nosdiario.gal/', load: () => fil('https://www.nosdiario.gal/rss') }, { peu: 'Europa Press Galicia', web: 'https://www.europapress.es/galicia/', load: () => google('site:europapress.es/galicia when:1d', 'gl', 'ES', /\s+-\s+(Europa Press|europapress\.es).*$/i) }, { peu: 'Google Noticias', web: 'https://news.google.com/?hl=gl&gl=ES&ceid=ES:gl', load: () => google('Galicia when:1d', 'gl', 'ES') } ],
      fr: [ { peu: 'France 24', web: 'https://www.france24.com/fr/', load: () => fil('https://www.france24.com/fr/rss') }, { peu: 'AFP (Google Actualités)', web: 'https://www.afp.com/fr', load: () => google('site:afp.com when:2d', 'fr', 'FR', /\s+-\s+(AFP|afp\.com).*$/i) } ],
      en: [ { peu: 'Reuters (Google News)', web: 'https://www.reuters.com/world/uk/', load: () => google('site:reuters.com when:1d', 'en-GB', 'GB', /\s+-\s+Reuters\s*$/i) }, { peu: 'The Independent', web: 'https://www.independent.co.uk/news/uk', load: () => fil('https://www.independent.co.uk/news/uk/rss') } ],
      de: [ { peu: 'dpa (ZEIT ONLINE)', web: 'https://www.zeit.de/news/index', load: () => fil('https://newsfeed.zeit.de/news/index') }, { peu: 'stern', web: 'https://www.stern.de/', load: () => fil('https://www.stern.de/feed/standard/all/') } ],
      it: [ { peu: 'ANSA · Ultima ora', web: 'https://www.ansa.it/', load: () => fil('https://www.ansa.it/sito/notizie/topnews/topnews_rss.xml') }, { peu: 'Adnkronos', web: 'https://www.adnkronos.com/', load: () => fil('https://www.adnkronos.com/RSS_Ultimora.xml') } ],
      cs: [ { peu: 'iROZHLAS', web: 'https://www.irozhlas.cz/', load: () => fil('https://www.irozhlas.cz/rss/irozhlas') }, { peu: 'ČT24', web: 'https://ct24.ceskatelevize.cz/', load: () => fil('https://ct24.ceskatelevize.cz/rss/hlavni-zpravy') }, { peu: 'Google Zprávy', web: 'https://news.google.com/?hl=cs&gl=CZ&ceid=CZ:cs', load: () => google('Česko when:1d', 'cs', 'CZ') } ]
    };
    function provaFonts(fonts, i = 0){
      if (i >= fonts.length) return Promise.reject(new Error('cap'));
      return fonts[i].load().then(l => { if (!l || !l.length) throw new Error('buit'); return { font: fonts[i], titulars: l }; }).catch(() => provaFonts(fonts, i + 1));
    }
    // Reparteix els titulars en panells (mai no en queda cap a mitges)
    let notDarrer = null, notToken = 0, notCarregades = 0, notLlengua = '';
    // Deixa un sol panell (amb títol) i en retorna la llista buida
    function primeraLlista(){
      const pistaN = $('nPista'); pistaN.innerHTML = '';
      const p = document.createElement('div'); p.className = 'll-pane n-pane';
      const t = document.createElement('div'); t.className = 't-titol'; t.textContent = L.noticies;
      const l = document.createElement('div'); l.className = 'n-llista'; p.append(t, l); pistaN.appendChild(p);
      return l;
    }
    function pintaNoticies(){
      const pistaN = $('nPista');
      if (!notDarrer || notDarrer.llengua !== LLENGUA) return;
      const nouPane = primer => { const p = document.createElement('div'); p.className = 'll-pane n-pane'; if (primer){ const t = document.createElement('div'); t.className = 't-titol'; t.textContent = L.noticies; p.appendChild(t); } const l = document.createElement('div'); l.className = 'n-llista'; p.appendChild(l); pistaN.appendChild(p); return l; };
      pistaN.innerHTML = '';
      let llista = nouPane(true), panells = 1;
      notDarrer.titulars.forEach((n, i) => {
        const a = document.createElement('a'); a.className = 'n-item'; a.draggable = false; a.href = n.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = '<span class="n-num"></span><span class="n-txt"></span>';
        a.querySelector('.n-num').textContent = i + 1; a.querySelector('.n-txt').textContent = n.titol;
        llista.appendChild(a);
        if (llista.clientHeight && a.offsetTop + a.offsetHeight > llista.clientHeight + 1){
          if (panells >= 4){ a.remove(); return; }
          llista = nouPane(false); panells++; llista.appendChild(a);
        }
      });
      [...pistaN.querySelectorAll('.n-llista')].forEach(l => { const v = [...l.children]; if (v.length) v[v.length - 1].classList.add('ultim'); });
      $('nPeu').textContent = `${notDarrer.font.peu} · ${L.actualitzat(notDarrer.hora)}`;
      llNot.refresca();
    }
    function carregaNoticies(força){
      if (!força && notLlengua === LLENGUA && Date.now() - notCarregades < 5 * 60 * 1000) return;
      const token = ++notToken, llengua = LLENGUA, fonts = FONTS[llengua] || FONTS.ca;
      if (notLlengua !== llengua){ primeraLlista().innerHTML = `<div class="m-estat">${L.carregant}</div>`; $('nPeu').textContent = ''; llNot.refresca(); }
      provaFonts(fonts).then(({ font, titulars }) => {
        if (token !== notToken) return;
        const ara = new Date();
        notDarrer = { llengua, font, titulars, hora: `${dosD(ara.getHours())}:${dosD(ara.getMinutes())}` };
        notCarregades = Date.now(); notLlengua = llengua;
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(pintaNoticies); else pintaNoticies();
      }).catch(() => {
        if (token !== notToken) return;
        const ll = primeraLlista(); $('nPeu').textContent = '';
        ll.innerHTML = '<div class="m-estat"><span></span> <a target="_blank" rel="noopener"></a></div>';
        ll.querySelector('span').textContent = L.errNoticies; const a = ll.querySelector('a'); a.textContent = L.obreWeb; a.href = fonts[0].web;
      });
    }
    let tRes = null;
    window.addEventListener('resize', () => { clearTimeout(tRes); tRes = setTimeout(pintaNoticies, 200); });
    pintaRadios(); pintaProgrames();
    setTimeout(() => { carregaProgrames(true); carregaNoticies(true); }, 1200);
    setInterval(() => { if (document.visibilityState === 'visible') carregaProgrames(true); }, 20 * 60 * 1000);
    setInterval(() => { if (document.visibilityState === 'visible') carregaNoticies(true); }, 10 * 60 * 1000);
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible'){ carregaNoticies(false); carregaProgrames(false); } });
    return { llengua(){ pintaRadios(); pintaProgrames(); carregaProgrames(false); carregaNoticies(true); }, noticies: pintaNoticies };
  })();
  const LLENGUES_PODCAST = ['ca', 'oc'];
  function mostraPodcasts(){ $('fullPodcasts').classList.toggle('ocult', !LLENGUES_PODCAST.includes(LLENGUA)); refrescaRoda(); }

  // =====================================================================
  // VEU: diu l'hora (amb quarts)
  // =====================================================================
  const FEMENINES = /montserrat|laia|amélie|amelie|audrey|aurélie|aurelie|marie|virginie|julie|céline|celine|samantha|karen|moira|tessa|serena|victoria|kate|fiona|susan|allison|ava|zoe|zira|aria|jenny|libby|sonia|hazel|anna|petra|helena|marlene|vicki|katja|hedda|alice|federica|elsa|paola|isabella|zuzana|iveta|vlasta|female|femme|weiblich|femminile/i;
  const MASCULINES = /jordi|thomas|daniel|alex|fred|luca|markus|yannick|diego|reed|rocko|eddy|grandpa|ralph|albert|bruce|junior|aaron|arthur|oliver|martin|nicolas|guy|david|mark|george|stefan|cosimo|pablo|jorge|jakub/i;
  function triaVeu(){
    if (!('speechSynthesis' in window)) return null;
    const veus = speechSynthesis.getVoices(), pref = L.veu.toLowerCase(), base = pref.slice(0, 2);
    let delIdioma = veus.filter(v => (v.lang || '').toLowerCase().replace('_', '-').startsWith(base));
    for (const alt of (L.reserva || [])){ if (delIdioma.length) break; delIdioma = veus.filter(v => (v.lang || '').toLowerCase().startsWith(alt)); }
    const puntua = v => (FEMENINES.test(v.name) ? 4 : 0) - (MASCULINES.test(v.name) ? 5 : 0) + ((v.lang || '').toLowerCase().replace('_', '-') === pref ? 2 : 0) + (v.localService ? 1 : 0);
    return delIdioma.sort((a, b) => puntua(b) - puntua(a))[0] || null;
  }
  if ('speechSynthesis' in window){ speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices(); }
  const botoVeu = $('orlojBotoVeu');
  botoVeu.addEventListener('click', e => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    const ara = new Date(), frase = L.hora(ara.getHours(), ara.getMinutes());
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(frase); u.lang = L.veu;
    const v = triaVeu(); if (v) u.voice = v;
    u.rate = 0.92; u.pitch = 1.05; u.volume = 1;
    u.onstart = () => botoVeu.classList.add('parlant');
    u.onend = u.onerror = () => botoVeu.classList.remove('parlant');
    speechSynthesis.speak(u);
    avisa(frase, 4500);
  });

  // =====================================================================
  // MODES: dia · nocturn (enfosquit) · Zz (verd i taronja, pantalla encesa)
  // =====================================================================
  const MODES = ['dia', 'nit', 'zz'];
  let mode = llegeix('mode', 'dia'); if (!MODES.includes(mode)) mode = 'dia';
  function aplicaMode(mostra){
    const html = document.documentElement;
    html.classList.toggle('mode-nit', mode === 'nit');
    html.classList.toggle('mode-zz', mode === 'zz');
    const meta = document.querySelector('meta[name="theme-color"]'); if (meta) meta.setAttribute('content', mode === 'dia' ? '#16110c' : '#000000');
    if (window.__orlojPantalla) window.__orlojPantalla();
    const txt = mode === 'dia' ? L.modeDia : mode === 'nit' ? L.modeNit : L.modeZz;
    const bm = $('orlojBotoMode'); bm.setAttribute('aria-label', txt); bm.title = txt;
    if (mostra) avisa(txt, 2200);
  }
  $('orlojBotoMode').addEventListener('click', e => { e.stopPropagation(); mode = MODES[(MODES.indexOf(mode) + 1) % MODES.length]; desa('mode', mode); aplicaMode(true); });

  // =====================================================================
  // CANVI DE LLENGUA
  // =====================================================================
  const menu = $('orlojMenuIdioma'), botoIdioma = $('orlojBotoIdioma');
  function pintaTextos(){
    document.documentElement.lang = LLENGUA;
    document.querySelectorAll('[data-i18n]').forEach(n => { const v = L[n.dataset.i18n]; if (typeof v === 'string') n.textContent = v; });
    document.querySelectorAll('[data-i18n-aria]').forEach(n => { const v = L[n.dataset.i18nAria]; if (typeof v === 'string') n.setAttribute('aria-label', v); });
    document.querySelectorAll('[data-i18n-title]').forEach(n => { const v = L[n.dataset.i18nTitle]; if (typeof v === 'string') n.title = v; });
    $('orlojCodiIdioma').textContent = LLENGUA.toUpperCase();
    botoVeu.setAttribute('aria-label', L.parla); botoVeu.title = L.parla;
    botoIdioma.setAttribute('aria-label', L.idioma); botoIdioma.title = L.idioma;
    window.__orlojTextos = { soOn: L.soOn, soOff: L.soOff, soBloq: L.soBloq };
    if (window.__orlojControls) window.__orlojControls();
    if (window.__orlojEsfera) window.__orlojEsfera.llengua(L.mesosCurts, DIES.map(d => d.toLocaleUpperCase(L.veu)));
  }
  function pintaMenu(){ menu.innerHTML = Object.keys(I18N).map(k => `<li role="menuitem" data-codi="${k}" class="${k === LLENGUA ? 'actiu' : ''}"><b>${k.toUpperCase()}</b>${I18N[k].nom}</li>`).join(''); }
  function pintaTot(){
    const ara = new Date();
    pintaTextos(); pintaMenu();
    calendari.refresca(true);
    pintaData(ara); pintaSolLluna(ara); pintaSant(ara); pintaCuriositat(ara); pintaDistancies();
    pintaTemps(); pintaAvisos(); pintaLloc(); pintaCoords();
    mostraPodcasts(); aplicaMode(false);
  }
  function posaLlengua(codi){
    if (!I18N[codi]) return;
    LLENGUA = codi; L = I18N[codi]; MESOS = L.mesos; DIES = L.dies; desa('llengua', codi);
    pintaTot(); media.llengua();
    if (coords) geocodifica(coords.lat, coords.lon); else if (darrerLloc) geocodifica(41.4966, 2.1580);
  }
  function obreMenu(obre){ menu.hidden = !obre; botoIdioma.setAttribute('aria-expanded', obre ? 'true' : 'false'); }
  botoIdioma.addEventListener('click', e => { e.stopPropagation(); obreMenu(menu.hidden); });
  menu.addEventListener('click', e => { const li = e.target.closest('li'); if (!li) return; e.stopPropagation(); posaLlengua(li.dataset.codi); obreMenu(false); });
  document.addEventListener('pointerdown', e => { if (!menu.hidden && !e.target.closest('.orloj-controls.esq')) obreMenu(false); });

  // ---------- Inici i rellotge de cada minut ----------
  let diaActual = new Date().toDateString();
  pintaTot();
  ambientSiCal();
  setInterval(() => {
    ambientSiCal();
    const ara = new Date();
    if (ara.toDateString() !== diaActual){ diaActual = ara.toDateString(); calendari.refresca(false); pintaData(ara); pintaSant(ara); pintaCuriositat(ara); }
    pintaSolLluna(ara); pintaDistancies();
  }, 60 * 1000);
  document.addEventListener('visibilitychange', ambientSiCal);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (window.__orlojEsfera) window.__orlojEsfera.llengua(null, null); });
})();
