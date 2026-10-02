(function(){
  // Configuració de cada variant (la injecta build.py abans d'aquest codi).
  const CONFIG = Object.assign({
    selectorTitol: 'h1',            // element que també desbloqueja l'àudio en prémer-lo
    textDaurat: 'original',         // 'clar' = daurat més lluminós (tema pàtina)
    pantallaEncesaPerDefecte: false // mantenir la pantalla encesa si l'usuari no ha triat res
  }, window.ORLOJ_CONFIG || {});
  const COLORS_TEXT = CONFIG.textDaurat === 'clar'
    ? { anellAntic:'#ffe9ab', mesos:'#ffe487', diaSetmana:'#ffd873', diaNum:'#ffe487' }
    : { anellAntic:'#f5ecd6', mesos:'#f2d98a', diaSetmana:'#f0c65c', diaNum:'#f2d98a' };

  // Preferències de l'usuari, recordades al navegador (si està permès).
  function llegeixPref(clau, perDefecte){
    try { const v = localStorage.getItem('orloj.' + clau); return v === null ? perDefecte : v; }
    catch(e){ return perDefecte; }
  }
  function desaPref(clau, valor){
    try { localStorage.setItem('orloj.' + clau, valor); } catch(e){}
  }

  const NS = "http://www.w3.org/2000/svg";
  const CX = 300, CY = 300;

  function el(tag, attrs){
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function polarX(cx, r, angDeg){ return cx + r * Math.sin(angDeg * Math.PI/180); }
  function polarY(cy, r, angDeg){ return cy - r * Math.cos(angDeg * Math.PI/180); }

  // Forma d'estel de quatre puntes (centelleig), centrada a l'origen
  function pathEstel(r){
    const rInner = r * 0.28;
    let punts = [];
    for (let i=0;i<8;i++){
      const ang = i*45 - 90;
      const radi = (i%2===0) ? r : rInner;
      const x = radi*Math.cos(ang*Math.PI/180);
      const y = radi*Math.sin(ang*Math.PI/180);
      punts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return 'M' + punts.join('L') + 'Z';
  }

  // ==================== El cos del cilindre amb volum ====================
  (function generaVolumCilindre(){
    const contenidor = document.getElementById('cosCilindre');
    if (!contenidor) return;

    const totalCapes = 24;
    const gruixTotal = 28;

    for (let i = 0; i < totalCapes; i++) {
      const capa = document.createElement('div');
      capa.className = 'capa-volum';

      const zPos = -gruixTotal/2 + (i * (gruixTotal / (totalCapes - 1)));

      capa.style.position = 'absolute';
      capa.style.inset = '0';
      capa.style.borderRadius = '50%';
      capa.style.transform = `translateZ(${zPos.toFixed(2)}px)`;

      contenidor.appendChild(capa);
    }
  })();

  // ==================== El cos del cilindre de l'esfera interior (astrolabi) ====================
  (function generaVolumCilindreAstrolabi(){
    const contenidor = document.getElementById('cosCilindreAst');
    if (!contenidor) return;

    const totalCapes = 24;
    // Una mica menys que la profunditat de les cares (14px), per evitar que
    // la capa més externa de la pila coincideixi exactament amb la cara
    // frontal (conflicte de renderització "z-fighting" que feia que el
    // daurat es filtrés per les zones transparents fins i tot en repòs).
    const gruixTotal = 25.2;

    for (let i = 0; i < totalCapes; i++) {
      const capa = document.createElement('div');
      capa.className = 'capa-volum-ast';

      const zPos = -gruixTotal/2 + (i * (gruixTotal / (totalCapes - 1)));

      capa.style.position = 'absolute';
      capa.style.inset = '0';
      capa.style.borderRadius = '50%';
      capa.style.transform = `translateZ(${zPos.toFixed(2)}px)`;

      contenidor.appendChild(capa);
    }
  })();

  // Fletxa/punxa de relleu (inspirada en una punta de tanca de ferro forjat), amb la punta a l'origen (0,0)
  const fletxaFerroPath = "M 0,0 L -4.5,-13 C -4.5,-16 -3,-17 -2,-18 C -6,-17 -11,-18 -13,-22 C -14,-24 -13,-25.5 -11,-25 C -8,-24.3 -5,-23 -3,-24.5 C -2.5,-27 -1,-29 0,-31 C 1,-29 2.5,-27 3,-24.5 C 5,-23 8,-24.3 11,-25 C 13,-25.5 14,-24 13,-22 C 11,-18 6,-17 2,-18 C 3,-17 4.5,-16 4.5,-13 L 0,0 Z";

  const svg = document.getElementById('astrolabi');
  svg.setAttribute('overflow','visible');
  const svgExt = document.getElementById('astrolabiExt');
  svgExt.setAttribute('overflow','visible');

  // ---------- DEFS ----------
  const defs = el('defs', {});
  const skyGrad = el('radialGradient', {id:'ceil', cx:'50%', cy:'42%', r:'75%'});
  skyGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#1c2f66'}));
  skyGrad.appendChild(el('stop', {offset:'55%', 'stop-color':'#101c45'}));
  skyGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#060b1f'}));
  defs.appendChild(skyGrad);

  const goldGrad = el('linearGradient', {id:'orBanda', x1:'0%', y1:'0%', x2:'0%', y2:'100%'});
  goldGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#f3de9a'}));
  goldGrad.appendChild(el('stop', {offset:'50%', 'stop-color':'#c9a227'}));
  goldGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#8a6d1f'}));
  defs.appendChild(goldGrad);

  const ivoriGrad = el('linearGradient', {id:'ivoriBanda', x1:'0%', y1:'0%', x2:'0%', y2:'100%'});
  ivoriGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#fbf6e6'}));
  ivoriGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#e4d6ac'}));
  defs.appendChild(ivoriGrad);

  const hubGrad = el('radialGradient', {id:'nucli', cx:'35%', cy:'30%', r:'70%'});
  hubGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#f6e6a6'}));
  hubGrad.appendChild(el('stop', {offset:'60%', 'stop-color':'#c9a227'}));
  hubGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#6e5416'}));
  defs.appendChild(hubGrad);

  const lunaGranGrad = el('radialGradient', {id:'lunaGranBanda', cx:'38%', cy:'32%', r:'75%'});
  lunaGranGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#faf3d9'}));
  lunaGranGrad.appendChild(el('stop', {offset:'60%', 'stop-color':'#e6d19f'}));
  lunaGranGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#b99a5c'}));
  defs.appendChild(lunaGranGrad);

  const perlaGrad = el('radialGradient', {id:'perlaBanda', cx:'32%', cy:'28%', r:'75%'});
  perlaGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#eafcfa'}));
  perlaGrad.appendChild(el('stop', {offset:'30%', 'stop-color':'#4dd0c4'}));
  perlaGrad.appendChild(el('stop', {offset:'70%', 'stop-color':'#159084'}));
  perlaGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#063f38'}));
  defs.appendChild(perlaGrad);

  const ferroGrad = el('radialGradient', {id:'ferroBanda', cx:'32%', cy:'26%', r:'80%'});
  ferroGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#ffb3c0'}));
  ferroGrad.appendChild(el('stop', {offset:'30%', 'stop-color':'#c8102e'}));
  ferroGrad.appendChild(el('stop', {offset:'65%', 'stop-color':'#7a0a1f'}));
  ferroGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#2b0510'}));
  defs.appendChild(ferroGrad);

  const solGrad = el('radialGradient', {id:'solBanda', cx:'35%', cy:'32%', r:'70%'});
  solGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#fffadd'}));
  solGrad.appendChild(el('stop', {offset:'45%', 'stop-color':'#f6d76a'}));
  solGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#c9861a'}));
  defs.appendChild(solGrad);

  const lunaLitGrad = el('radialGradient', {id:'lunaLitBanda', cx:'32%', cy:'30%', r:'75%'});
  lunaLitGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#fffdf6'}));
  lunaLitGrad.appendChild(el('stop', {offset:'55%', 'stop-color':'#e8e2c8'}));
  lunaLitGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#b8ae8e'}));
  defs.appendChild(lunaLitGrad);

  const lunaDarkGrad = el('radialGradient', {id:'lunaDarkBanda', cx:'62%', cy:'68%', r:'75%'});
  lunaDarkGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#3a4258'}));
  lunaDarkGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#1a1e2c'}));
  defs.appendChild(lunaDarkGrad);

  const rebloGrad = el('radialGradient', {id:'rebloBanda', cx:'35%', cy:'30%', r:'70%'});
  rebloGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#fff8e0'}));
  rebloGrad.appendChild(el('stop', {offset:'45%', 'stop-color':'#c9a227'}));
  rebloGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#5c4416'}));
  defs.appendChild(rebloGrad);

  // ---------- Relleu metàl·lic envellit (textura + llum especular) ----------
  const filtreTextura = el('filter', {id:'texturaMetall', x:'-20%', y:'-20%', width:'140%', height:'140%'});
  filtreTextura.appendChild(el('feTurbulence', {type:'fractalNoise', baseFrequency:'0.7', numOctaves:'3', seed:'12', result:'soroll'}));
  filtreTextura.appendChild(el('feColorMatrix', {in:'soroll', type:'matrix', values:'0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.5 0.5 0.5 0 0', result:'sorollAlpha'}));
  const fCompTransfer = el('feComponentTransfer', {in:'sorollAlpha', result:'sorollSuau'});
  fCompTransfer.appendChild(el('feFuncA', {type:'linear', slope:'0.18', intercept:'0'}));
  filtreTextura.appendChild(fCompTransfer);
  filtreTextura.appendChild(el('feComposite', {in:'sorollSuau', in2:'SourceGraphic', operator:'in', result:'sorollRetallat'}));
  filtreTextura.appendChild(el('feBlend', {in:'SourceGraphic', in2:'sorollRetallat', mode:'multiply'}));
  defs.appendChild(filtreTextura);

  const filtreRelleu = el('filter', {id:'relleuAnell', x:'-20%', y:'-20%', width:'140%', height:'140%'});
  filtreRelleu.appendChild(el('feGaussianBlur', {in:'SourceAlpha', stdDeviation:'2.5', result:'blur'}));
  const fSpec = el('feSpecularLighting', {in:'blur', surfaceScale:'3', specularConstant:'0.9', specularExponent:'12', 'lighting-color':'#fff6db', result:'spec'});
  fSpec.appendChild(el('fePointLight', {x:'150', y:'80', z:'180'}));
  filtreRelleu.appendChild(fSpec);
  filtreRelleu.appendChild(el('feComposite', {in:'spec', in2:'SourceAlpha', operator:'in', result:'specClip'}));
  filtreRelleu.appendChild(el('feComposite', {in:'SourceGraphic', in2:'specClip', operator:'arithmetic', k1:'0', k2:'1', k3:'1', k4:'0'}));
  defs.appendChild(filtreRelleu);

  const filtreRelleuPetit = el('filter', {id:'relleuPetit', x:'-60%', y:'-60%', width:'220%', height:'220%'});
  filtreRelleuPetit.appendChild(el('feGaussianBlur', {in:'SourceAlpha', stdDeviation:'0.8', result:'blur'}));
  const fSpec2 = el('feSpecularLighting', {in:'blur', surfaceScale:'2', specularConstant:'0.9', specularExponent:'10', 'lighting-color':'#fff6db', result:'spec'});
  fSpec2.appendChild(el('fePointLight', {x:'150', y:'80', z:'120'}));
  filtreRelleuPetit.appendChild(fSpec2);
  filtreRelleuPetit.appendChild(el('feComposite', {in:'spec', in2:'SourceAlpha', operator:'in', result:'specClip'}));
  filtreRelleuPetit.appendChild(el('feComposite', {in:'SourceGraphic', in2:'specClip', operator:'arithmetic', k1:'0', k2:'1', k3:'1', k4:'0'}));
  defs.appendChild(filtreRelleuPetit);

  // ---------- Fusta noble mate (bisell exterior) ----------
  const fustaGrad = el('linearGradient', {id:'fustaBanda', x1:'0%', y1:'0%', x2:'100%', y2:'100%'});
  fustaGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#8a6239'}));
  fustaGrad.appendChild(el('stop', {offset:'45%', 'stop-color':'#6b4423'}));
  fustaGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#432a15'}));
  defs.appendChild(fustaGrad);

  const filtreFusta = el('filter', {id:'texturaFusta', x:'-20%', y:'-20%', width:'140%', height:'140%'});
  filtreFusta.appendChild(el('feTurbulence', {type:'turbulence', baseFrequency:'0.006 0.22', numOctaves:'4', seed:'4', result:'veta'}));
  filtreFusta.appendChild(el('feColorMatrix', {in:'veta', type:'matrix', values:'0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.6 0.6 0.6 0 0', result:'vetaAlpha'}));
  const fCompTransferFusta = el('feComponentTransfer', {in:'vetaAlpha', result:'vetaSuau'});
  fCompTransferFusta.appendChild(el('feFuncA', {type:'linear', slope:'0.45', intercept:'0'}));
  filtreFusta.appendChild(fCompTransferFusta);
  filtreFusta.appendChild(el('feComposite', {in:'vetaSuau', in2:'SourceGraphic', operator:'in', result:'vetaRetallada'}));
  filtreFusta.appendChild(el('feBlend', {in:'SourceGraphic', in2:'vetaRetallada', mode:'multiply'}));
  defs.appendChild(filtreFusta);

  svgExt.appendChild(defs);

  // ---------- Anells de fons (ara integrats al disc giratori: tot l'esfera
  // gira sencera, sense deixar cap anell estàtic enrere) ----------
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:298, fill:'none', stroke:'#5c4a1c', 'stroke-width':2}));
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:293, fill:'url(#fustaBanda)', filter:'url(#texturaFusta)'}));

  // Reblons al voltant de la vora exterior
  const reblonsGrup = el('g', {});
  for(let i=0;i<36;i++){
    const a = i*10;
    const rx = polarX(CX,295,a), ry = polarY(CY,295,a);
    reblonsGrup.appendChild(el('circle', {
      cx:rx, cy:ry, r:2.2, fill:'url(#rebloBanda)', stroke:'#3a2a08', 'stroke-width':0.4, filter:'url(#relleuPetit)'
    }));
  }
  svg.appendChild(reblonsGrup);

  // Anell "temps antic" (numeració romana daurada sobre negre, ornamental)
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:286, fill:'#0c0c0c'}));
  const anticGrup = el('g', {});
  const numeralsAntics = ['I','II','III','IIII','V','VI','VII','VIII','IX','X','XI','XII',
    'XIII','XIIII','XV','XVI','XVII','XVIII','XIX','XX','XXI','XXII','XXIII','XXIIII'];
  const RADI_ANELL_ANTIC = 271; // ancoratge; el centre visible del glif queda ~4.5px més enfora (baseline), a mig camí de la banda fosca (265-286)
  for (let i=1;i<=24;i++){
    const ang = i*15;
    const t = el('text', {
      x: polarX(CX,RADI_ANELL_ANTIC,ang), y: polarY(CY,RADI_ANELL_ANTIC,ang),
      fill:COLORS_TEXT.anellAntic, 'font-family':'Cinzel, serif', 'font-size':'12', 'font-weight':'700', 'letter-spacing':'-0.2', 'text-anchor':'middle',
      transform:`rotate(${ang}, ${polarX(CX,RADI_ANELL_ANTIC,ang)}, ${polarY(CY,RADI_ANELL_ANTIC,ang)})`
    });
    t.textContent = numeralsAntics[i-1];
    anticGrup.appendChild(t);
  }
  svg.appendChild(anticGrup);

  // Anell romà (funcional — hores)
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:265, fill:'url(#ivoriBanda)', stroke:'#8a6d1f', 'stroke-width':1, filter:'url(#texturaMetall)'}));
  const romans = ['XII','I','II','III','IIII','V','VI','VII','VIII','IX','X','XI'];
  const romGrup = el('g', {});
  const estiramentRoman = 1.45;
  romans.forEach((r,i)=>{
    const ang = i*30;
    const rx = polarX(CX,228,ang), ry = polarY(CY,228,ang);
    const g = el('g', {transform: `translate(${rx}, ${ry}) rotate(${ang}) scale(1, ${estiramentRoman})`});
    // Ombra (dona efecte de gravat/relleu sobre la banda de vori)
    const ombra = el('text', {
      x: 0.6, y: 5.5,
      fill:'#5c4416', opacity:'0.45', 'font-size':'23', 'font-weight':'600', 'letter-spacing':'1.2',
      'text-anchor':'middle'
    });
    ombra.textContent = r;
    g.appendChild(ombra);
    const t = el('text', {
      x: 0, y: 5,
      fill:'#241a08', 'font-size':'23', 'font-weight':'600', 'letter-spacing':'1.2',
      'text-anchor':'middle'
    });
    t.textContent = r;
    g.appendChild(t);
    romGrup.appendChild(g);
  });
  svg.appendChild(romGrup);

  // Perla articulada ("el planeta"): viatja per la vora marcant l'hora en
  // format 24h. Ara és una esfera pròpia -no contingut pla del disc gran-
  // construïda en un SVG independent dins #planetaEsfera (vegeu el
  // contenidor a l'HTML); la seva posició es manté sincronitzada amb el
  // disc a posicionaPerla24(). Mides x1.5 respecte a l'original (50% més
  // gran, com ja s'havia demanat).
  const svgPlaneta = document.querySelector('#planetaEsfera svg');
  if (svgPlaneta){
    svgPlaneta.appendChild(el('ellipse', {cx:2.1, cy:3.45, rx:15, ry:11.4, fill:'#000000', opacity:'0.35'}));
    svgPlaneta.appendChild(el('ellipse', {
      cx:0, cy:0, rx:28.5, ry:8.4, fill:'none', stroke:'#bfe8e2', 'stroke-width':2.4, opacity:'0.55',
      transform:'rotate(-18)'
    }));
    svgPlaneta.appendChild(el('circle', {cx:0, cy:0, r:16.5, fill:'none', stroke:'#8a6d1f', 'stroke-width':2.25}));
    svgPlaneta.appendChild(el('circle', {cx:0, cy:0, r:15.75, fill:'url(#perlaBanda)', stroke:'#0a2e29', 'stroke-width':0.9, filter:'url(#relleuPetit)'}));
    svgPlaneta.appendChild(el('circle', {cx:-4.5, cy:-4.95, r:3.45, fill:'#ffffff', opacity:'0.8'}));
    svgPlaneta.appendChild(el('path', {
      d:'M -28.5,0 A 28.5,8.4 0 0,1 28.5,0', fill:'none', stroke:'#eafcfa', 'stroke-width':2.7, opacity:'0.9',
      transform:'rotate(-18)'
    }));
  }

  // Marques de minut
  const ticksGrup = el('g', {stroke:'#3a2c10'});
  for(let i=0;i<60;i++){
    const ang = i*6;
    const major = (i%5===0);
    const r1 = 260, r2 = major? 250 : 254;
    ticksGrup.appendChild(el('line', {
      x1: polarX(CX,r1,ang), y1: polarY(CY,r1,ang),
      x2: polarX(CX,r2,ang), y2: polarY(CY,r2,ang),
      'stroke-width': major? 2 : 1
    }));
  }
  svg.appendChild(ticksGrup);

  svg.appendChild(el('circle', {cx:CX, cy:CY, r:195, fill:'none', stroke:'#6e5416', 'stroke-width':2}));

  // ---------- Anell zodiacal (gira segons l'època de l'any) ----------
  const zodiGrup = el('g', {id:'zodiGrup'});
  zodiGrup.appendChild(el('circle', {cx:CX, cy:CY, r:195, fill:'url(#orBanda)', filter:'url(#relleuAnell)'}));
  zodiGrup.appendChild(el('circle', {cx:CX, cy:CY, r:165, fill:'var(--pedra)', style:'fill:#100c08'}));
  // Icones pròpies dels signes (traç vectorial, no emoticones) — Àries..Peixos, mateix ordre que les constel·lacions
  const iconesZodiac = [
    [ {d:"M -6,-7 C -8,-5 -7,-2 -5,-3 L -1,6"},
      {d:"M 6,-7 C 8,-5 7,-2 5,-3 L 1,6"} ], // Àries
    [ {d:"M -4,-1 C -6,-6 -2,-8 0,-4"}, {d:"M 4,-1 C 6,-6 2,-8 0,-4"},
      {circ:true, cx:0, cy:4, r:4} ], // Taure
    [ {d:"M -6,-7 L 6,-7"}, {d:"M -6,7 L 6,7"}, {d:"M -3,-7 L -3,7"}, {d:"M 3,-7 L 3,7"} ], // Bessons
    [ {circ:true, cx:-3.2, cy:-3.2, r:3}, {circ:true, cx:3.2, cy:3.2, r:3},
      {d:"M -0.4,-2.4 Q 2,-1 1.6,2.2"}, {d:"M 0.4,2.4 Q -2,1 -1.6,-2.2"} ], // Cranc
    [ {circ:true, cx:-4, cy:2, r:3.2}, {d:"M -1,3 C 3,3 3,8 7,8.5"} ], // Lleó
    [ {d:"M -8,-7 L -8,7"}, {d:"M -8,-7 C -8,-7 -5.5,7 -3,-7"}, {d:"M -3,-7 C -3,-7 -0.5,7 2,-7"},
      {d:"M 2,-7 L 2,5"}, {circ:true, cx:4.3, cy:5, r:2.3} ], // Verge
    [ {d:"M 0,-9 L 0,7"}, {circ:true, cx:0, cy:-9, r:1.1},
      {d:"M -8,-6.5 L 8,-6.5"},
      {d:"M -8,-6.5 L -10,1"}, {d:"M -8,-6.5 L -6,1"}, {d:"M -10,1 Q -8,3.3 -6,1"},
      {d:"M 8,-6.5 L 10,1"}, {d:"M 8,-6.5 L 6,1"}, {d:"M 10,1 Q 8,3.3 6,1"},
      {d:"M -5,9 L 5,9"} ], // Balança
    [ {d:"M -8,-7 L -8,7"}, {d:"M -8,-7 C -8,-7 -5.5,7 -3,-7"}, {d:"M -3,-7 C -3,-7 -0.5,7 2,-7"},
      {d:"M 2,-7 L 2,4 L 6,4"}, {d:"M 6,4 L 4,1"}, {d:"M 6,4 L 4,7"} ], // Escorpí
    [ {d:"M -6,7 L 7,-6"}, {d:"M 7,-6 L 1,-6"}, {d:"M 7,-6 L 7,0"}, {d:"M -2,4 L 3,-1"} ], // Sagitari
    [ {d:"M -6,-7 L -1,4 C 0,6 2,6.5 3,5.5 C 4,4.5 3.5,3 2.3,3.3 C 1.5,3.5 1.6,4.5 2.5,4.5"} ], // Capricorn
    [ {d:"M -8,-2 L -5,-5 L -2,-2 L 1,-5 L 4,-2 L 7,-5"}, {d:"M -8,4 L -5,1 L -2,4 L 1,1 L 4,4 L 7,1"} ], // Aquari
    [ {d:"M -3,-7 Q -9,0 -3,7"}, {d:"M 3,-7 Q 9,0 3,7"}, {d:"M -6,0 L 6,0"} ] // Peixos
  ];
  iconesZodiac.forEach((icona,i)=>{
    const ang = i*30;
    // separadors
    zodiGrup.appendChild(el('line', {
      x1: polarX(CX,195,ang-15), y1: polarY(CY,195,ang-15),
      x2: polarX(CX,165,ang-15), y2: polarY(CY,165,ang-15),
      stroke:'#5c4a1c', 'stroke-width':1
    }));
    const tx = polarX(CX,180,ang), ty = polarY(CY,180,ang);
    const g = el('g', {
      transform: `translate(${tx}, ${ty}) rotate(${ang})`,
      stroke:'#2a2005', 'stroke-width':1.7, fill:'none',
      'stroke-linecap':'round', 'stroke-linejoin':'round'
    });
    icona.forEach(part=>{
      if (part.circ){
        g.appendChild(el('circle', {cx:part.cx, cy:part.cy, r:part.r}));
      } else {
        g.appendChild(el('path', {d:part.d}));
      }
    });
    zodiGrup.appendChild(g);
  });
  svg.appendChild(zodiGrup);

  // punter fix del zodíac (marca "sol actual")
  const puntaZodiac = el('g', {transform: `translate(${CX}, ${CY-180}) scale(0.9, 1.1)`});
  puntaZodiac.appendChild(el('path', {
    d: fletxaFerroPath,
    fill:'url(#ferroBanda)', stroke:'#360814', 'stroke-width':1, filter:'url(#relleuPetit)'
  }));
  puntaZodiac.appendChild(el('path', {
    d: 'M 0,-2 L 0,-17',
    fill:'none', stroke:'#ffe3ea', 'stroke-width':0.7, opacity:'0.7', 'stroke-linecap':'round'
  }));
  puntaZodiac.appendChild(el('path', {
    d: 'M -3,-12 L 3,-12',
    fill:'none', stroke:'#360814', 'stroke-width':0.6, opacity:'0.55', 'stroke-linecap':'round'
  }));
  svg.appendChild(puntaZodiac);

  // ---------- Disc central: la fase lunar real, a mida completa ----------
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:165, fill:'url(#ceil)'}));

  // estrelles (es veuen a la banda fosca de la lluna)
  const estels = el('g', {fill:'#f2d98a'});
  const rngSeed = 42;
  function pseudoRand(seed){ let x = Math.sin(seed)*10000; return x - Math.floor(x); }
  for(let i=0;i<40;i++){
    const a = pseudoRand(i*3.1+1)*360;
    const r = 20 + pseudoRand(i*7.7+2)*135;
    const rad = 0.6 + pseudoRand(i*5.3+3)*1;
    estels.appendChild(el('circle', {
      cx: polarX(CX,r,a), cy: polarY(CY,r,a), r: rad.toFixed(2), opacity: (0.4+pseudoRand(i*2.1)*0.6).toFixed(2)
    }));
  }
  svg.appendChild(estels);

  // Cometa Halley: travessa l'interior d'aquesta esfera (per darrere de la part il·luminada
  // de la lluna) cada 76 segons, en homenatge als 76 anys del seu període orbital.
  const cometaLlunaGrad = el('linearGradient', {id:'cometaCuaBanda', x1:'100%', y1:'0%', x2:'0%', y2:'0%'});
  cometaLlunaGrad.appendChild(el('stop', {offset:'0%', 'stop-color':'#fff8ea', 'stop-opacity':'0.95'}));
  cometaLlunaGrad.appendChild(el('stop', {offset:'45%', 'stop-color':'#fff8ea', 'stop-opacity':'0.5'}));
  cometaLlunaGrad.appendChild(el('stop', {offset:'100%', 'stop-color':'#fff8ea', 'stop-opacity':'0'}));
  defs.appendChild(cometaLlunaGrad);

  const filtreCometa = el('filter', {id:'cometaBorrositat', x:'-80%', y:'-80%', width:'260%', height:'260%'});
  filtreCometa.appendChild(el('feGaussianBlur', {in:'SourceGraphic', stdDeviation:'2.4'}));
  defs.appendChild(filtreCometa);

  const cometaLluna = el('g', {id:'cometaLluna', style:'opacity:0;'});
  const cometaOrient = el('g', {id:'cometaOrient'});
  // Núvol nebulós cònic: diverses capes ovalades desenfocades que s'aprimen i s'esvaeixen,
  // sense vores dures, imitant l'aspecte difús real de la cua d'un cometa
  const cometaNuvol = el('g', {filter:'url(#cometaBorrositat)'});
  cometaNuvol.appendChild(el('ellipse', {cx:-10, cy:0, rx:16, ry:6.5, fill:'url(#cometaCuaBanda)', opacity:'0.8'}));
  cometaNuvol.appendChild(el('ellipse', {cx:-28, cy:-1.5, rx:26, ry:5, fill:'url(#cometaCuaBanda)', opacity:'0.55', transform:'rotate(-5, -28, -1.5)'}));
  cometaNuvol.appendChild(el('ellipse', {cx:-46, cy:2, rx:30, ry:3.6, fill:'url(#cometaCuaBanda)', opacity:'0.35', transform:'rotate(6, -46, 2)'}));
  cometaNuvol.appendChild(el('ellipse', {cx:-58, cy:-3, rx:26, ry:2.2, fill:'url(#cometaCuaBanda)', opacity:'0.2', transform:'rotate(-8, -58, -3)'}));
  cometaOrient.appendChild(cometaNuvol);
  cometaOrient.appendChild(el('circle', {cx:'0', cy:'0', r:'6', fill:'#fff8ea', opacity:'0.3', filter:'url(#cometaBorrositat)'}));
  cometaOrient.appendChild(el('circle', {cx:'0', cy:'0', r:'3.2', fill:'#fff8ea'}));
  cometaLluna.appendChild(cometaOrient);
  svg.appendChild(cometaLluna);

  const lunaGranGrup = el('g', {id:'lunaGranGrup', transform:`translate(${CX}, ${CY})`});
  const lunaGranLit = el('path', {id:'lunaGranLit', fill:'url(#lunaGranBanda)', stroke:'#8a6d1f', 'stroke-width':1.5, 'stroke-opacity':0.85});
  lunaGranGrup.appendChild(lunaGranLit);
  svg.appendChild(lunaGranGrup);

  svg.appendChild(el('circle', {cx:CX, cy:CY, r:165, fill:'none', stroke:'#8a6d1f', 'stroke-width':1.5}));

  // ---------- Busques ----------
  function fletxa(id, longitud, amplada, color){
    const p = el('path', {
      id:id,
      d:`M ${CX},${CY+amplada*2.4} L ${CX-amplada/2},${CY} L ${CX-amplada/4},${CY-longitud} L ${CX+amplada/4},${CY-longitud} L ${CX+amplada/2},${CY} Z`,
      fill:color, stroke:'#000', 'stroke-width':0.4, 'stroke-linejoin':'round'
    });
    return p;
  }

  // busca de les hores (sol)
  const busquaHora = fletxa('busquaHora', 172, 9, 'url(#orBanda)');
  svg.appendChild(busquaHora);
  const solPunta = el('g', {id:'solPunta'});
  solPunta.appendChild(el('circle', {cx:0.9, cy:1.1, r:9.5, fill:'#5c3d0a', opacity:'0.4'}));
  // Raigs ondulats (com flames), alternant llargada per a un aire més orgànic
  for(let i=0;i<14;i++){
    const a = i*(360/14);
    const llarg = (i%2===0) ? 17 : 14;
    solPunta.appendChild(el('path', {
      d:`M -1.2,-7 C -2.8,-10.5 -0.4,-12.5 -1.6,-${llarg} L 0,-${llarg-1.5} C 1.6,-12 2.8,-10 1.2,-7 Z`,
      transform:`rotate(${a})`,
      fill:'#f0c65c', stroke:'#c9861a', 'stroke-width':0.6, 'stroke-linejoin':'round'
    }));
  }
  solPunta.appendChild(el('circle', {cx:0, cy:0, r:9.5, fill:'url(#solBanda)', stroke:'#8a6d1f', 'stroke-width':1, filter:'url(#relleuPetit)'}));
  // Rostre
  const solCara = el('g', {stroke:'#5c3d0a', 'stroke-width':0.6, fill:'none', 'stroke-linecap':'round'});
  solCara.appendChild(el('path', {d:'M -3.6,-1.2 Q -2.8,-2.4 -1.6,-1.4'}));
  solCara.appendChild(el('path', {d:'M 3.6,-1.2 Q 2.8,-2.4 1.6,-1.4'}));
  solCara.appendChild(el('circle', {cx:-2.4, cy:-0.4, r:0.4, fill:'#5c3d0a', stroke:'none'}));
  solCara.appendChild(el('circle', {cx:2.4, cy:-0.4, r:0.4, fill:'#5c3d0a', stroke:'none'}));
  solCara.appendChild(el('path', {d:'M 0,0 L -0.5,1.8 L 0.3,2.1'}));
  solCara.appendChild(el('path', {d:'M -2.1,3.7 Q 0,5 2.1,3.7'}));
  solPunta.appendChild(solCara);
  svg.appendChild(solPunta);

  // busca dels minuts (lluna)
  const busquaMinut = fletxa('busquaMinut', 236, 7, '#cdd6e6');
  svg.appendChild(busquaMinut);
  const lunaPunta = el('g', {id:'lunaPunta'});
  lunaPunta.appendChild(el('circle', {cx:0, cy:0, r:12, fill:'url(#lunaDarkBanda)', stroke:'#8a97b8', 'stroke-width':1}));
  const lunaLit = el('path', {id:'lunaLit', fill:'url(#lunaLitBanda)'});
  lunaPunta.appendChild(lunaLit);
  svg.appendChild(lunaPunta);

  // busca dels segons
  const busquaSegon = el('line', {
    id:'busquaSegon', x1:CX, y1:CY+22, x2:CX, y2:CY-258,
    stroke:'#8a1f1f', 'stroke-width':1.6, 'stroke-linecap':'round'
  });
  svg.appendChild(busquaSegon);

  // eix central
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:14, fill:'url(#nucli)', stroke:'#4a3a10', 'stroke-width':1.5, filter:'url(#relleuPetit)'}));
  svg.appendChild(el('circle', {cx:CX, cy:CY, r:4, fill:'#5c1616'}));

  // ==================== CALENDARI ====================
  const cal = document.getElementById('calendari');
  const CCX=150, CCY=150;
  cal.appendChild(el('circle', {cx:CCX, cy:CCY, r:148, fill:'url(#orBanda)', filter:'url(#relleuAnell)'}));

  // Reblons al voltant de la vora del calendari
  const reblonsCalGrup = el('g', {});
  for(let i=0;i<24;i++){
    const a = i*15;
    const rx = polarX(CCX,145,a), ry = polarY(CCY,145,a);
    reblonsCalGrup.appendChild(el('circle', {
      cx:rx, cy:ry, r:1.6, fill:'url(#rebloBanda)', stroke:'#3a2a08', 'stroke-width':0.3, filter:'url(#relleuPetit)'
    }));
  }
  cal.appendChild(reblonsCalGrup);

  // Banda fosca només al segment on hi ha els mesos (entre el cel estelat i l'anell
  // daurat ribetejat), sense arribar a tocar la zona dels reblons: recupera el
  // contrast per als mesos sense fer sobresortir cap capa negra per sota del daurat.
  cal.appendChild(el('circle', {cx:CCX, cy:CCY, r:134, fill:'#0c0c0c'}));

  const calGrup = el('g', {id:'calGrup'});
  const mesos = ['GEN','FEB','MAR','ABR','MAI','JUN','JUL','AGO','SET','OCT','NOV','DES'];
  mesos.forEach((m,i)=>{
    const ang = i*30;
    calGrup.appendChild(el('line', {
      x1: polarX(CCX,138,ang-15), y1: polarY(CCY,138,ang-15),
      x2: polarX(CCX,96,ang-15), y2: polarY(CCY,96,ang-15),
      stroke:'#5c4a1c', 'stroke-width':0.8
    }));
    const tx = polarX(CCX,117,ang), ty = polarY(CCY,117,ang);
    const t = el('text', {
      x: tx, y: ty+4,
      fill:COLORS_TEXT.mesos, 'font-size':'11', 'font-weight':'700', 'text-anchor':'middle', 'letter-spacing':'1',
      transform: `rotate(${ang}, ${tx}, ${ty})`
    });
    t.textContent = m;
    calGrup.appendChild(t);
  });
  calGrup.appendChild(el('circle', {cx:CCX, cy:CCY, r:96, fill:'url(#ceil)'}));
  const estelsAmbientCal = el('g', {fill:'#f2d98a'});
  for(let i=0;i<18;i++){
    const a = pseudoRand(i*11.7+31)*360;
    const r = 10 + pseudoRand(i*5.3+17)*82;
    estelsAmbientCal.appendChild(el('circle', {
      cx: polarX(CCX,r,a), cy: polarY(CCY,r,a), r: 0.5, opacity: (0.2+pseudoRand(i*3.7)*0.2).toFixed(2)
    }));
  }
  calGrup.appendChild(estelsAmbientCal);
  const estelsCal = el('g', {id:'estelsCal'});
  calGrup.appendChild(estelsCal);
  const diaSetmanaText = el('text', {id:'diaSetmanaAbrev', x:CCX, y:CCY+51, 'text-anchor':'middle', 'font-size':'14', 'font-weight':'700', 'letter-spacing':'2', fill:COLORS_TEXT.diaSetmana});
  calGrup.appendChild(diaSetmanaText);
  const diaText = el('text', {id:'diaNum', x:CCX, y:CCY+87, 'text-anchor':'middle', 'font-size':'38', fill:COLORS_TEXT.diaNum});
  calGrup.appendChild(diaText);
  cal.appendChild(calGrup);

  cal.appendChild(el('circle', {cx:CCX, cy:CCY, r:138, fill:'none', stroke:'#8a6d1f', 'stroke-width':1}));
  const puntaMes = el('g', {transform: `translate(${CCX}, ${CCY-117}) scale(0.55, 1.0)`});
  puntaMes.appendChild(el('path', {
    d: fletxaFerroPath,
    fill:'url(#ferroBanda)', stroke:'#360814', 'stroke-width':1, filter:'url(#relleuPetit)'
  }));
  puntaMes.appendChild(el('path', {
    d: 'M 0,-2 L 0,-17',
    fill:'none', stroke:'#ffe3ea', 'stroke-width':0.7, opacity:'0.7', 'stroke-linecap':'round'
  }));
  puntaMes.appendChild(el('path', {
    d: 'M -3,-12 L 3,-12',
    fill:'none', stroke:'#360814', 'stroke-width':0.6, opacity:'0.55', 'stroke-linecap':'round'
  }));
  cal.appendChild(puntaMes);

  // ==================== LÒGICA ====================
  const diesSetmana = ['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'];
  const abrevSetmana = ['DG','DL','DT','DC','DJ','DV','DS'];
  const nomsMesos = ['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'];

  function diesDelMes(any, mes){ return new Date(any, mes + 1, 0).getDate(); }

  // Dona amplada fixa a cada xifra (evita que l'hora "balancegi" segons quins dígits surten)
  function formataHoraAmplaFixa(text){
    return text.split('').map(ch=>{
      if (ch === ':') return `<span class="separador-hora">:</span>`;
      return `<span class="xifra">${ch}</span>`;
    }).join('');
  }

  // ---------- Astronomia (algorismes de Jean Meeus, "Astronomical Algorithms") ----------
  // Longitud eclíptica aparent del Sol i de la Lluna (precisió de centèsimes
  // de grau), a partir de les quals surten la fase lunar real -no la mitjana,
  // que es desvia fins a ±14 h- i el signe zodiacal on és el Sol.
  const RAD = Math.PI / 180;
  function norm360(x){ x %= 360; return x < 0 ? x + 360 : x; }
  function segleJulia(d){
    const jd = d.getTime() / 86400000 + 2440587.5;
    return (jd - 2451545.0) / 36525;
  }
  function longitudSol(d){
    const T = segleJulia(d);
    const L0 = 280.46646 + 36000.76983*T + 0.0003032*T*T;
    const M = (357.52911 + 35999.05029*T - 0.0001537*T*T) * RAD;
    const C = (1.914602 - 0.004817*T - 0.000014*T*T) * Math.sin(M)
            + (0.019993 - 0.000101*T) * Math.sin(2*M)
            + 0.000289 * Math.sin(3*M);
    const omega = (125.04 - 1934.136*T) * RAD;
    return norm360(L0 + C - 0.00569 - 0.00478 * Math.sin(omega));
  }
  // Termes principals de la longitud lunar: [coef. D, M, M', F, amplitud en graus]
  const TERMES_LLUNA = [
    [0,0,1,0, 6.288774],[2,0,-1,0, 1.274027],[2,0,0,0, 0.658314],[0,0,2,0, 0.213618],
    [0,1,0,0,-0.185116],[0,0,0,2,-0.114332],[2,0,-2,0, 0.058793],[2,-1,-1,0, 0.057066],
    [2,0,1,0, 0.053322],[2,-1,0,0, 0.045758],[0,1,-1,0,-0.040923],[1,0,0,0,-0.034720],
    [0,1,1,0,-0.030383],[2,0,0,-2, 0.015327],[0,0,1,2,-0.012528],[0,0,1,-2, 0.010980],
    [4,0,-1,0, 0.010675],[0,0,3,0, 0.010034],[4,0,-2,0, 0.008548],[2,1,-1,0,-0.007888],
    [2,1,0,0,-0.006766],[1,0,-1,0,-0.005163],[1,1,0,0, 0.004987],[2,-1,1,0, 0.004036]
  ];
  function longitudLluna(d){
    const T = segleJulia(d);
    const Lp = 218.3164477 + 481267.88123421*T;
    const D  = 297.8501921 + 445267.1114034*T;
    const M  = 357.5291092 + 35999.0502909*T;
    const Mp = 134.9633964 + 477198.8675055*T;
    const F  = 93.2720950 + 483202.0175233*T;
    const E  = 1 - 0.002516*T;
    let suma = 0;
    for (const [cD, cM, cMp, cF, amp] of TERMES_LLUNA){
      const factorE = Math.abs(cM) === 1 ? E : 1;
      suma += amp * factorE * Math.sin((cD*D + cM*M + cMp*Mp + cF*F) * RAD);
    }
    return norm360(Lp + suma);
  }
  // Fase lunar com a fracció del cicle: 0 = nova, 0.25 = quart creixent,
  // 0.5 = plena, 0.75 = quart minvant (elongació Lluna-Sol / 360°).
  function faseLunar(d){
    return norm360(longitudLluna(d) - longitudSol(d)) / 360;
  }
  // Nom de la fase per a tot el dia civil: si el moment exacte d'una fase
  // principal (nova, quarts, plena) cau dins d'avui, el dia porta aquell nom;
  // si no, el del tram en què es troba.
  function nomFaseLunarDelDia(dia){
    const inici = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate());
    const fi = new Date(dia.getFullYear(), dia.getMonth(), dia.getDate() + 1);
    const f0 = faseLunar(inici);
    let f1 = faseLunar(fi);
    if (f1 < f0) f1 += 1;
    const fites = [[0.25,'Quart creixent'],[0.5,'Lluna plena'],[0.75,'Quart minvant'],[1,'Lluna nova']];
    if (f0 === 0) return 'Lluna nova';
    for (const [valor, nom] of fites){
      if (f0 < valor && valor <= f1) return nom;
    }
    if (f0 < 0.25) return 'Lluna creixent';
    if (f0 < 0.5) return 'Gibosa creixent';
    if (f0 < 0.75) return 'Gibosa minvant';
    return 'Lluna minvant';
  }

  function pathLluna(r, fase){
    // fase 0..1, 0=nova, 0.5=plena — retorna la part il·luminada.
    // El sentit del traç del terminador ha de dependre de si estem al tram
    // falcat (creixent/minvant, resta àrea) o gibós (afegeix àrea cap a plena),
    // no només de si fase<0.5 — altrament la forma "rebota" cap enrere en
    // lloc de seguir creixent fins a plena.
    const theta = fase * 2 * Math.PI;
    const rx = r * Math.cos(theta);
    const sweepOuter = fase < 0.5 ? 1 : 0;
    const sweepInner = rx < 0 ? sweepOuter : (1 - sweepOuter);
    return `M 0,${-r} A ${r},${r} 0 0,${sweepOuter} 0,${r} A ${Math.abs(rx).toFixed(2)},${r} 0 0,${sweepInner} 0,${-r} Z`;
  }

  // Signe zodiacal a partir de la longitud real del Sol (0° = inici d'Àries),
  // així no depèn de dates fixes ni dels anys de traspàs.
  function angleZodiacActual(d){ return longitudSol(d) - 15; }
  function indexZodiacActual(d){ return Math.floor(longitudSol(d) / 30) % 12; }

  // Patrons estilitzats (no astromètricament exactes) de les 12 constel·lacions zodiacals,
  // en coordenades locals relatives al centre del disc del calendari.
  const constelacions = [
    [[-30.0,-9.1,1.42],[0.5,-3.0,1.6],[13.5,3.5,0.7],[16.0,8.6,1.06]], // Àries
    [[-13.0,-25.1,1.06],[-22.6,-14.9,0.7],[-4.2,-11.9,1.06],[-1.4,-3.2,1.42],[-0.3,-0.5,1.6],[-5.7,0.8,1.6],[-3.1,2.2,1.06],[0.7,3.6,1.06],[6.6,9.5,1.24],[20.5,18.7,1.6],[22.5,20.9,1.06]], // Taure
    [[-16.6,-12.7,1.15],[-12.8,-13.1,1.6],[-7.7,-12.0,0.92],[-22.5,-4.6,0.92],[10.1,-3.2,0.92],[-21.4,-0.6,0.92],[23.5,-0.8,0.7],[19.3,0.2,1.6],[-11.0,3.9,0.7],[17.6,4.7,0.92],[-3.0,6.7,1.15],[13.7,12.0,1.38],[10.8,19.7,0.92]], // Bessons
    [[-17.1,-23.1,1.15],[-5.7,-8.3,1.15],[-2.6,-1.3,1.6],[28.9,11.8,1.38],[-3.5,21.0,0.7]], // Cranc
    [[4.5,-19.5,1.3],[-0.6,-18.8,1.3],[-1.3,-8.8,1.3],[9.1,-4.8,1.6],[3.0,-4.4,1.3],[15.4,-0.4,1.0],[-11.3,11.9,0.7],[-5.9,18.4,1.3],[-12.8,26.5,1.6]], // Lleó
    [[7.4,-26.1,1.34],[6.7,-17.2,0.96],[-10.5,-12.2,1.09],[4.5,-10.9,1.6],[-1.5,-9.6,1.21],[5.5,-1.3,0.83],[-2.0,1.7,1.09],[9.4,4.9,0.96],[-7.5,6.1,1.47],[0.5,14.0,1.34],[3.3,15.0,0.7],[-13.0,15.8,1.21],[-3.1,19.9,1.09]], // Verge
    [[-0.1,-22.9,1.24],[15.9,-11.7,1.6],[-5.7,-9.6,0.88],[-10.5,-5.9,1.24],[-15.4,-2.6,1.42],[13.2,10.6,1.24],[1.3,19.0,0.88],[1.3,23.1,0.7]], // Balança
    [[20.0,-21.1,1.15],[21.8,-16.2,1.45],[10.9,-12.5,1.15],[21.4,-11.0,1.6],[8.3,-10.5,1.45],[5.0,-8.4,0.85],[21.1,-5.3,1.0],[-2.0,1.9,1.45],[-19.1,4.9,1.15],[-22.9,8.5,1.0],[-3.1,8.8,0.85],[-24.2,11.6,1.0],[-5.0,15.2,0.7],[-20.1,16.8,1.45],[-12.0,17.4,1.15]], // Escorpí
    [[-12.3,-14.1,1.15],[13.5,-12.8,0.92],[-0.9,-11.9,1.15],[-6.2,-10.7,1.04],[-3.6,-10.6,1.04],[10.3,-5.5,1.26],[-13.4,-4.2,1.04],[0.2,-3.9,1.15],[25.4,-3.9,1.26],[4.1,-3.6,1.15],[-3.2,-2.3,1.26],[12.9,-0.3,1.6],[-0.9,0.1,0.7],[18.0,0.7,1.38],[-19.0,1.5,1.15],[-20.6,3.1,1.15],[12.1,5.4,1.26],[14.4,7.8,0.81],[-13.9,12.3,1.04],[-4.0,15.3,0.92],[-10.1,18.1,1.26],[-2.9,19.4,0.92]], // Sagitari
    [[6.4,-31.6,0.7],[7.4,-27.0,1.0],[-2.6,-1.5,0.8],[18.1,0.7,1.6],[-7.9,4.5,0.75],[11.3,5.7,0.85],[-12.9,11.2,0.8],[1.8,11.0,0.75],[-7.5,12.8,0.95],[-14.1,14.4,0.95]], // Capricorn
    [[18.6,-28.9,1.21],[2.8,-17.8,1.21],[-11.8,-8.9,1.34],[11.8,-4.2,0.96],[0.7,-3.3,1.34],[-12.5,-2.2,0.96],[-15.7,-0.6,1.09],[-16.9,2.3,1.21],[6.4,9.7,1.34],[-3.1,10.2,0.7],[8.8,10.9,1.6],[16.3,15.8,1.34],[-5.4,17.1,1.34]], // Aquari
    [[-2.2,-23.5,0.92],[2.4,-22.0,1.15],[-5.0,-21.5,1.6],[-5.9,-18.1,0.92],[3.2,-17.2,1.15],[-2.7,-14.8,1.6],[1.1,-14.5,0.7],[-1.6,-9.4,0.92],[4.1,3.5,1.15],[6.9,7.8,0.92],[14.0,15.2,0.7],[-11.2,17.1,0.7],[1.4,17.1,1.38],[9.6,18.3,0.7],[-19.4,19.9,1.38],[19.4,19.7,0.7],[-14.0,22.5,1.15]] // Peixos
  ];

  // Posició de l'agulla del mes amb la durada real de cada mes (també febrer
  // de 29 dies).
  function angleMesActual(d){
    const m = d.getMonth();
    const fraccio = (d.getDate() - 1) / diesDelMes(d.getFullYear(), m);
    return (m - 0.5 + fraccio) * 30;
  }

  let darreraDataDibuixada = null;
  let nomFaseAvui = '';

  // Radi base de la perla (perla24). #planetaOrbita viu al mateix espai 3D
  // que el disc (translateZ fix, sense rotació pròpia -vegeu el CSS), així
  // que només cal mantenir la seva posició (angle 24h) en percentatges
  // perquè segueixi girant amb el disc igual que la resta de l'esfera;
  // l'esfera pròpia (#planetaEsfera) es contraro­ta sola via CSS.
  const RADI_PERLA24 = 294;
  function posicionaPerla24(){
    const araP = new Date();
    const m = araP.getMinutes(), s = araP.getSeconds();
    const ang24 = (araP.getHours() + m/60 + s/3600) * 15;
    const px = polarX(CX,RADI_PERLA24,ang24);
    const py = polarY(CY,RADI_PERLA24,ang24);
    const elOrbita = document.getElementById('planetaOrbita');
    if (elOrbita){
      elOrbita.style.left = (px/600*100).toFixed(3) + '%';
      elOrbita.style.top = (py/600*100).toFixed(3) + '%';
    }
  }

  function actualitza(){
    const ara = new Date();
    const h = ara.getHours() % 12;
    const m = ara.getMinutes();
    const s = ara.getSeconds();

    const angHora = h*30 + m*0.5;
    const angMinut = m*6 + s*0.1;
    const angSegon = s*6;

    busquaHora.setAttribute('transform', `rotate(${angHora}, ${CX}, ${CY})`);
    document.getElementById('solPunta').setAttribute('transform',
      `translate(${polarX(CX,172,angHora)}, ${polarY(CY,172,angHora)})`);

    busquaMinut.setAttribute('transform', `rotate(${angMinut}, ${CX}, ${CY})`);
    document.getElementById('lunaPunta').setAttribute('transform',
      `translate(${polarX(CX,236,angMinut)}, ${polarY(CY,236,angMinut)})`);

    busquaSegon.setAttribute('transform', `rotate(${angSegon}, ${CX}, ${CY})`);

    // Perla 24h: cavalca la vora exterior del rellotge, l'anell antic té el "24" (=0h) a dalt i avança 15° per hora
    posicionaPerla24();

    const hh = String(ara.getHours()).padStart(2,'0');
    const mm = String(m).padStart(2,'0');
    const ss = String(s).padStart(2,'0');
    document.getElementById('lecturaHora').innerHTML = formataHoraAmplaFixa(`${hh}:${mm}:${ss}`);

    const fase = faseLunar(ara);
    lunaLit.setAttribute('d', pathLluna(12, fase));
    lunaGranLit.setAttribute('d', pathLluna(165, fase));

    // Tot el que només canvia d'un dia per l'altre es redibuixa en canviar
    // la data, també si la pàgina està oberta des d'ahir.
    const claudia = ara.getFullYear() + '-' + ara.getMonth() + '-' + ara.getDate();
    if (claudia !== darreraDataDibuixada){
      darreraDataDibuixada = claudia;
      actualitzaElementsDiaris(ara);
    }
  }

  function actualitzaElementsDiaris(ara){
    const diaSetmana = diesSetmana[ara.getDay()];
    const diaMes = ara.getDate();
    const mes = nomsMesos[ara.getMonth()];
    const any = ara.getFullYear();
    const diaCap = diaSetmana.charAt(0).toUpperCase()+diaSetmana.slice(1);
    const prep = /^[aeiou]/.test(mes) ? 'd\u2019' : 'de ';
    document.getElementById('lecturaData').textContent = `${diaCap}, ${diaMes} ${prep}${mes} de ${any}`;

    // Diada: l'1 d'octubre, el revers de les dues esferes mostra un lema
    // especial en lloc del de sempre.
    const esDiada = (ara.getMonth() === 9 && diaMes === 1);
    const lemaAstEl = document.getElementById('lemaAst');
    const lemaCalEl = document.getElementById('lemaCal');
    if (lemaAstEl) lemaAstEl.innerHTML = esDiada ? 'Dia de la<br>República' : 'Astra manent,<br>sed\u2026';
    if (lemaCalEl) lemaCalEl.innerHTML = esDiada ? '1er<br>d\u2019octubre' : 'tempus<br>fugit\u2026';

    nomFaseAvui = nomFaseLunarDelDia(ara);
    document.getElementById('lecturaLluna').textContent = nomFaseAvui;

    // Sol al zodíac: es calcula al migdia local perquè el valor sigui el mateix tot el dia.
    const migdia = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate(), 12);
    zodiGrup.setAttribute('transform', `rotate(${-angleZodiacActual(migdia)}, ${CX}, ${CY})`);

    const angleM = angleMesActual(ara);
    calGrup.setAttribute('transform', `rotate(${-angleM}, ${CCX}, ${CCY})`);
    diaText.setAttribute('transform', `rotate(${angleM}, ${CCX}, ${CCY})`);
    diaText.textContent = diaMes;
    diaSetmanaText.setAttribute('transform', `rotate(${angleM}, ${CCX}, ${CCY})`);
    diaSetmanaText.textContent = abrevSetmana[ara.getDay()];
    estelsCal.setAttribute('transform', `rotate(${angleM}, ${CCX}, ${CCY})`);

    // Constel·lació zodiacal del moment, simulada amb estels, darrere la xifra de la data
    while (estelsCal.firstChild) estelsCal.removeChild(estelsCal.firstChild);
    const idxSigne = indexZodiacActual(migdia);
    const desplacY = -32;
    const escalaConstelacio = 1.33;
    constelacions[idxSigne].forEach(estrella=>{
      const ex = CCX + estrella[0]*escalaConstelacio, ey = CCY + estrella[1]*escalaConstelacio + desplacY;
      const mida = estrella[2] * 1.6 * escalaConstelacio;
      estelsCal.appendChild(el('circle', {cx:ex, cy:ey, r: mida*1.8, fill:'#fff6db', opacity:'0.15'}));
      estelsCal.appendChild(el('path', {
        d: pathEstel(mida*1.3),
        transform: `translate(${ex}, ${ey})`,
        fill:'#fff6db', opacity:'0.9'
      }));
    });
  }

  actualitza(); // primer dibuix; el ritme per segons el porta tic() (més avall)

  // ---------- Gir de la 2a esfera (com un rellotge de butxaca) cada hora en punt ----------
  let audioCtxOrloj = null;
  function obtenirAudioCtx(){
    if (!audioCtxOrloj){
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      audioCtxOrloj = new AC();
      audioCtxOrloj.addEventListener('statechange', () => actualitzaControls());
    }
    if (audioCtxOrloj.state === 'suspended' || audioCtxOrloj.state === 'interrupted'){
      audioCtxOrloj.resume().then(() => actualitzaControls(), () => {});
    }
    return audioCtxOrloj;
  }
  function audioActiu(){
    return !!(audioCtxOrloj && audioCtxOrloj.state === 'running');
  }

  // Silenci nocturn: de 23:00 a 7:00 no sona res (si l'usuari l'activa).
  const HORA_INICI_SILENCI = 23, HORA_FI_SILENCI = 7;
  function esHoraDeSilenci(ara){
    const h = ara.getHours();
    return h >= HORA_INICI_SILENCI || h < HORA_FI_SILENCI;
  }
  // Pot sonar ara? (so activat per l'usuari i fora del silenci nocturn)
  function soPermes(ara){
    if (llegeixPref('so', 'on') !== 'on') return false;
    if (llegeixPref('silenciNocturn', 'off') === 'on' && esHoraDeSilenci(ara || new Date())) return false;
    return true;
  }
  ['click','touchstart'].forEach(ev=>{
    document.addEventListener(ev, ()=>{ obtenirAudioCtx(); }, {once:true, passive:true});
  });
  // Quan la pestanya torna a primer pla (per exemple després d'estar la pantalla
  // apagada o en segon pla), intentem reprendre l'àudio si s'hagués suspès.
  document.addEventListener('visibilitychange', ()=>{
    if (document.visibilityState === 'visible') obtenirAudioCtx();
  });

  // Timbre de campana compartit: cinc parcials en proporció fixa respecte
  // al fonamental (aproximació habitual del so d'una campana), amb els
  // guanys relatius de cada un. S'usa tant per a les notes dels quarts
  // (Westminster) com per a la campana greu de les hores.
  const RATIS_CAMPANA = [1, 1.5, 2.0, 2.52, 3.0];
  const GUANYS_QUART  = [0.45, 0.28, 0.16, 0.09, 0.05];
  const GUANYS_HORA   = [0.55, 0.32, 0.20, 0.12, 0.07];

  // "quan" és un instant del rellotge d'àudio (ctx.currentTime): així totes
  // les notes d'una melodia es programen d'una sola vegada amb precisió de
  // mostra, encara que la pestanya estigui en segon pla i el navegador
  // alenteixi els temporitzadors.
  function reprodueixCampana(freqBase, guanys, durada, quan){
    const ctx = obtenirAudioCtx();
    if (!ctx) return;
    const ara = (quan === undefined) ? ctx.currentTime : quan;
    RATIS_CAMPANA.forEach((ratio, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freqBase * ratio;
      gain.gain.setValueAtTime(0.0001, ara);
      gain.gain.linearRampToValueAtTime(guanys[i], ara + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0008, ara + durada);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ara);
      osc.stop(ara + durada + 0.1);
    });
  }

  // Freqüències de les campanes (afinació igual, A4 = 440Hz): les quatre
  // campanes dels quarts de Westminster més la campana greu de les hores.
  const NOTA_SOLS4 = 415.305; // Sol#4 - 1a campana
  const NOTA_FA_S4 = 369.994; // Fa#4  - 2a campana
  const NOTA_MI4   = 329.628; // Mi4   - 3a campana
  const NOTA_SI3   = 246.942; // Si3   - 4a campana
  const NOTA_MI3   = 164.814; // Mi3   - campana greu de les hores

  function reprodueixCampanaGreu(quan){
    reprodueixCampana(NOTA_MI3, GUANYS_HORA, 1.8, quan);
  }

  // Els coneguts "quarts de Westminster": la melodia es construeix amb
  // cinc frases de 4 notes ("mudes"), combinació de les quatre campanes,
  // que es van encadenant a mesura que avancen els quarts.
  const CANVI_1 = [NOTA_SOLS4, NOTA_FA_S4, NOTA_MI4, NOTA_SI3];
  const CANVI_2 = [NOTA_MI4, NOTA_SOLS4, NOTA_FA_S4, NOTA_SI3];
  const CANVI_3 = [NOTA_MI4, NOTA_FA_S4, NOTA_SOLS4, NOTA_MI4];
  const CANVI_4 = [NOTA_SOLS4, NOTA_MI4, NOTA_FA_S4, NOTA_SI3];
  const CANVI_5 = [NOTA_SI3, NOTA_FA_S4, NOTA_SOLS4, NOTA_MI4];
  // Les notes DINS d'un mateix grup de 4 (una "muda") sonen seguides,
  // solapant-se lleugerament amb la ressonància natural de la campana
  // (com un carilló real), sense cap silenci artificial entre elles.
  // Només DESPRÉS de cada grup de 4 notes hi ha una petita pausa abans
  // que comenci el següent grup -mai enmig d'un grup, ni entre notes
  // individuals.
  const INTERVAL_NOTA_QUART = 0.6; // segons entre l'inici de cada nota, dins un mateix grup
  const DURADA_NOTA_QUART = 1.5; // segons de ressonància natural de cada nota
  const INTERVAL_ENTRE_GRUPS = 3.6; // segons entre l'inici d'un grup de 4 notes i el següent (inclou la pausa)

  // Programa la seqüència de "mudes" indicada a partir de l'instant d'àudio
  // t0, grup a grup, amb una petita pausa després de cada grup de 4 notes, i
  // retorna la durada total en segons (incloent la pausa final), perquè les
  // campanades de l'hora s'hi encadenin exactament al mateix ritme.
  function reprodueixMelodiaQuarts(canvis, t0){
    canvis.forEach((canvi, g) => {
      const iniciGrup = t0 + g * INTERVAL_ENTRE_GRUPS;
      canvi.forEach((freq, i) => {
        reprodueixCampana(freq, GUANYS_QUART, DURADA_NOTA_QUART, iniciGrup + i * INTERVAL_NOTA_QUART);
      });
    });
    return canvis.length * INTERVAL_ENTRE_GRUPS;
  }

  // Campanades de l'hora: el mateix ritme pausat que entre grups de notes
  // dels quarts, prou llarg perquè la campana greu s'apagui (1.8s) abans
  // que soni la següent.
  function reprodueixSequencia(n, funcCampana, t0){
    for (let i=0;i<n;i++){
      funcCampana(t0 + i * INTERVAL_ENTRE_GRUPS);
    }
  }

  // So mecànic d'engranatge: una sèrie de "clics" (dents de la roda) més un
  // brunziment greu de fons, durant tot el temps que dura el gir del disc.
  // So real d'engranatge (mostra d'àudio incrustada en base64, repetida en bucle
  // durant tot el gir) seguit d'un "cloc" sintetitzat just al final.
  const SO_ENGRANATGE_B64 = "@ENGRANATGE_B64@";
  let bufferEngranatge = null;
  function carregaBufferEngranatge(ctx){
    if (bufferEngranatge) return Promise.resolve(bufferEngranatge);
    const binari = atob(SO_ENGRANATGE_B64);
    const bytes = new Uint8Array(binari.length);
    for (let i=0;i<binari.length;i++) bytes[i] = binari.charCodeAt(i);
    return ctx.decodeAudioData(bytes.buffer).then(buf => { bufferEngranatge = buf; return buf; });
  }

  function reprodueixCloc(quan){
    const ctx = obtenirAudioCtx();
    if (!ctx) return;
    const midaBufer = Math.max(1, Math.floor(ctx.sampleRate * 0.015));
    const buffer = ctx.createBuffer(1, midaBufer, ctx.sampleRate);
    const dades = buffer.getChannelData(0);
    for (let i=0;i<midaBufer;i++){ dades[i] = (Math.random()*2-1) * Math.pow(1 - i/midaBufer, 1.5); }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    const filtre = ctx.createBiquadFilter();
    filtre.type = 'lowpass';
    filtre.frequency.value = 1800;
    const gainClic = ctx.createGain();
    gainClic.gain.value = 0.5;
    src.connect(filtre);
    filtre.connect(gainClic);
    gainClic.connect(ctx.destination);
    src.start(quan);
    src.stop(quan + 0.02);

    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, quan);
    osc.frequency.exponentialRampToValueAtTime(60, quan + 0.12);
    const gainThump = ctx.createGain();
    gainThump.gain.setValueAtTime(0.0001, quan);
    gainThump.gain.linearRampToValueAtTime(0.5, quan + 0.008);
    gainThump.gain.exponentialRampToValueAtTime(0.0008, quan + 0.22);
    osc.connect(gainThump);
    gainThump.connect(ctx.destination);
    osc.start(quan);
    osc.stop(quan + 0.25);
  }

  function reprodueixSoEngranatge(durataS, pausaS){
    if (!soPermes()) return;
    const ctx = obtenirAudioCtx();
    if (!ctx) return;
    pausaS = pausaS || 0;
    carregaBufferEngranatge(ctx).then(buffer => {
      const ara = ctx.currentTime;
      // Tic-tac accelerat, una mica més lent que la versió anterior (2.88
      // -> 2.4) però encara prou ràpid perquè els tics individuals es
      // fonguin en un brunzit continu.
      const ratioVelocitat = 2.4;
      // Velocitat mínima durant el frenatge/l'arrencada de l'engranatge
      // (mai s'atura del tot: només s'esmorteeix fins gairebé parar-se).
      const ratioVelocitatFre = 0.2;
      // El clip original té un silenci real d'uns 0.598s abans del primer
      // tic. El fem servir per a la primera còpia de cada tram quan aquest
      // comença de cop (entrada suau: false), però la resta de còpies -i el
      // tram que represa després de l'aturada- en salten l'inici amb un
      // "offset" perquè el tic-tac continuï immediatament, sense el buit de
      // silenci que abans es notava com una interrupció.
      const silenciInicial = 0.598;
      const durataBuffer = buffer.duration / ratioVelocitat;
      const durataRepeticio = (buffer.duration - silenciInicial) / ratioVelocitat;
      // El clip té silenci real tant a l'inici com al final, així que hi
      // apliquem un encreuament suau (entrada i sortida) per encadenar les
      // repeticions sense costura audible.
      const creuament = 0.03;
      // Durada del frenatge/arrencada gradual de l'engranatge: durant
      // l'últim segon abans d'aturar-se al revers, i durant el primer segon
      // en represa, la velocitat de reproducció (no el volum) puja o baixa
      // gradualment, imitant un mecanisme real que perd o guanya impuls.
      const esvaimentFinal = 1.0;
      const gainGeneral = ctx.createGain();
      gainGeneral.gain.value = 0.4;
      // Compressor lleuger només per contenir els pics quan s'encavalquen
      // còpies durant l'encreuament, sense apagar la nitidesa del tic-tac.
      const compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -28;
      compressor.knee.value = 8;
      compressor.ratio.value = 6;
      compressor.attack.value = 0.002;
      compressor.release.value = 0.12;
      gainGeneral.connect(compressor);
      compressor.connect(ctx.destination);

      // Omple un tram de temps [iniciTram, iniciTram+durataTram) amb
      // còpies del tic-tac. Si entradaSuau és cert, la primera còpia del
      // tram també salta el silenci inicial i entra amb un esvaïment (per
      // represa després d'una aturada); si no, comença de cop (l'inici
      // mateix del gir).
      function reprodueixTram(iniciTram, durataTram, entradaSuau){
        const finalTram = iniciTram + durataTram;
        let t = iniciTram;
        let primera = true;
        while (t < finalTram){
          const salta = entradaSuau || !primera;
          const offset = salta ? silenciInicial : 0;
          const durataCopia = salta ? durataRepeticio : durataBuffer;
          const src = ctx.createBufferSource();
          src.buffer = buffer;
          const gain = ctx.createGain();
          src.connect(gain);
          gain.connect(gainGeneral);

          // Si aquesta còpia, tocada sencera, s'allargaria més enllà del
          // final d'aquest tram, l'escurcem perquè acabi exactament al
          // final (aturada neta abans de la pausa o del "cloc").
          const finalNatural = t + durataCopia;
          const finalEfectiu = Math.min(finalNatural, finalTram);
          const esLaDarrera = finalNatural >= finalTram;

          // Velocitat de reproducció: en comptes de tallar el volum, fem
          // que l'engranatge freni o arrenqui de debò. Si aquesta còpia és
          // la que arrenca en represa (just després d'una aturada), la
          // velocitat puja gradualment des de gairebé aturada fins a la
          // normal durant el primer segon. Si és la que ha d'aturar-se
          // (l'última del tram), la velocitat baixa gradualment fins a
          // gairebé aturar-se durant l'últim segon.
          if (primera && entradaSuau){
            const durArrencada = Math.min(esvaimentFinal, finalEfectiu - t);
            src.playbackRate.setValueAtTime(ratioVelocitatFre, t);
            src.playbackRate.exponentialRampToValueAtTime(ratioVelocitat, t + durArrencada);
          } else {
            src.playbackRate.setValueAtTime(ratioVelocitat, t);
          }
          if (esLaDarrera){
            const durFrenat = Math.min(esvaimentFinal, finalEfectiu - t);
            const iniciFrenat = Math.max(t, finalEfectiu - durFrenat);
            src.playbackRate.setValueAtTime(ratioVelocitat, iniciFrenat);
            src.playbackRate.exponentialRampToValueAtTime(ratioVelocitatFre, finalEfectiu);
          }

          // El guany es manté ple durant tota la còpia; només hi ha un
          // esvaïment curt just al principi o al final per evitar un clic
          // en arrencar/aturar la font (l'efecte de frenatge/arrencada el
          // fa la velocitat, no el volum).
          if (primera && !entradaSuau){
            gain.gain.setValueAtTime(1, t);
          } else {
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(1, t + creuament);
          }
          const iniciEsvaiment = Math.max(t, finalEfectiu - creuament);
          gain.gain.setValueAtTime(1, iniciEsvaiment);
          gain.gain.linearRampToValueAtTime(0, finalEfectiu);

          src.start(t, offset);
          src.stop(finalEfectiu + 0.05);

          t += durataCopia - creuament;
          primera = false;
        }
      }

      if (pausaS > 0 && pausaS < durataS){
        // Dos trams de moviment amb silenci real durant l'aturada del mig,
        // igual que fa l'animació visual.
        const meitat = (durataS - pausaS) / 2;
        reprodueixTram(ara, meitat, false);
        reprodueixTram(ara + durataS - meitat, meitat, true);
      } else {
        reprodueixTram(ara, durataS, false);
      }

      const marge = 0.05;
      reprodueixCloc(ara + durataS - marge);
    }).catch(err=>{ console.warn('Orloj: no s\'ha pogut carregar el so d\'engranatge', err); });
  }

  const calendariFlipEl = document.getElementById('calendariFlip');
  let girEnCurs = false;
  if (calendariFlipEl){
    calendariFlipEl.addEventListener('animationend', () => {
      girEnCurs = false;
    });
  }

  function llancaGirCalendari(){
    if (!calendariFlipEl || girEnCurs) return;
    girEnCurs = true;
    calendariFlipEl.classList.remove('girant');
    void calendariFlipEl.offsetWidth;
    calendariFlipEl.classList.add('girant');
    reprodueixSoEngranatge(10.5, 1.5);
  }

  const inicPaginaMs = performance.now();
  let primerGirFet = false;
  let darrerCodiGir = -1;
  function comprovaGirCalendari(ara){
    if (!primerGirFet && performance.now() - inicPaginaMs >= 7000){
      primerGirFet = true;
      llancaGirCalendari();
    }
    const s = ara.getSeconds();
    const m = ara.getMinutes();
    const h = ara.getHours();
    // Finestra de tolerància curta (igual que a les campanades) per si el
    // rellotge va endarrerit, però sense allargar-se massa perquè el gir
    // (9s) ha d'acabar abans que comencin els quarts a l'hora en punt.
    if (m === 59 && s >= 50 && s <= 52){
      const codi = h*100 + 59;
      if (darrerCodiGir !== codi){
        darrerCodiGir = codi;
        llancaGirCalendari();
      }
    }
  }

  // ---------- Gir de l'esfera interior (astrolabi): a les 12 del migdia i del
  // vespre (migdia = després de les 11:59; vespre/mitjanit = després de les
  // 23:59), en sentit contrari al del calendari. ----------
  const astrolabiFlipEl = document.getElementById('astrolabiFlip');
  let girEnCursAst = false;
  if (astrolabiFlipEl){
    astrolabiFlipEl.addEventListener('animationend', () => {
      girEnCursAst = false;
      astrolabiFlipEl.classList.remove('girant');
    });
  }

  function llancaGirAstrolabi(){
    if (!astrolabiFlipEl || girEnCursAst) return;
    girEnCursAst = true;
    astrolabiFlipEl.classList.remove('girant');
    void astrolabiFlipEl.offsetWidth;
    astrolabiFlipEl.classList.add('girant');
  }

  let primerGirAstFet = false;
  let darrerCodiGirAst = -1;
  function comprovaGirAstrolabi(ara){
    if (!primerGirAstFet && performance.now() - inicPaginaMs >= 7000){
      primerGirAstFet = true;
      llancaGirAstrolabi();
    }
    const s = ara.getSeconds();
    const m = ara.getMinutes();
    const h = ara.getHours();
    if (m === 59 && s >= 50 && s <= 52 && (h === 11 || h === 23)){
      const codi = h*100 + 59;
      if (darrerCodiGirAst !== codi){
        darrerCodiGirAst = codi;
        llancaGirAstrolabi();
      }
    }
  }

  // Coneguts quarts de Westminster: a cada quart sona la "muda" (frase de
  // 4 notes) que li correspon, encadenant les que ja han sonat abans dins
  // la mateixa hora, fins que a l'hora en punt sonen les 4 mudes senceres
  // (16 notes) i, tot seguit, tantes campanades greus com marca l'hora
  // (format 12h).
  function tocaQuart(h, m, ara){
    if (!soPermes(ara)) return;
    const ctx = obtenirAudioCtx();
    if (!ctx || ctx.state !== 'running') return; // sense desbloquejar, no es pot sonar
    const t0 = ctx.currentTime + 0.05;
    if (m === 15){
      reprodueixMelodiaQuarts([CANVI_1], t0);
    } else if (m === 30){
      reprodueixMelodiaQuarts([CANVI_2, CANVI_3], t0);
    } else if (m === 45){
      reprodueixMelodiaQuarts([CANVI_4, CANVI_5, CANVI_1], t0);
    } else if (m === 0){
      const durMelodia = reprodueixMelodiaQuarts([CANVI_2, CANVI_3, CANVI_4, CANVI_5], t0);
      const h12 = h % 12;
      reprodueixSequencia(h12 === 0 ? 12 : h12, reprodueixCampanaGreu, t0 + durMelodia);
    }
  }

  // Detecta quan s'ha travessat un quart d'hora des de l'última comprovació.
  // No depèn d'encertar un segon concret: si el navegador ha alentit els
  // temporitzadors (pestanya en segon pla), el quart encara sona, sempre que
  // no faci més d'un minut i mig que ha passat (desbloquejar el mòbil a les 10:07
  // no ha de fer sonar les 10:00).
  const QUART_MS = 15 * 60 * 1000;
  const RETARD_MAXIM_QUART_MS = 90 * 1000;
  let darreraComprovacioQuartMs = Date.now() - 4000; // en carregar: marge de 4s com abans
  function comprovaCampanades(ara){
    const araMs = ara.getTime();
    const anteriorMs = darreraComprovacioQuartMs;
    darreraComprovacioQuartMs = araMs;
    const fitaMs = Math.floor(araMs / QUART_MS) * QUART_MS;
    if (fitaMs > anteriorMs && araMs - fitaMs <= RETARD_MAXIM_QUART_MS){
      const fita = new Date(fitaMs);
      tocaQuart(fita.getHours(), fita.getMinutes(), fita);
    }
  }

  // Un únic "tic" per segon, alineat amb el canvi de segon del rellotge del
  // sistema (abans s'actualitzava en un moment qualsevol dins del segon).
  function tic(){
    // Primer es programa el següent tic: així, encara que alguna part falli,
    // el rellotge no s'atura.
    setTimeout(tic, 1000 - (Date.now() % 1000) + 5);
    const ara = new Date();
    actualitza();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      comprovaGirCalendari(ara);
      comprovaGirAstrolabi(ara);
    }
    comprovaCampanades(ara);
  }
  setTimeout(tic, 1000 - (Date.now() % 1000) + 5);

  // ---------- Títol "Orloj" com a botó per desbloquejar l'àudio ----------
  // Els navegadors bloquegen qualsevol so fins que l'usuari interactua directament
  // amb la pàgina. En prémer el títol, desbloquegem l'àudio (sense tocs de prova).
  const titolEl = document.querySelector(CONFIG.selectorTitol);
  if (titolEl){
    titolEl.addEventListener('click', () => {
      const ctx = obtenirAudioCtx();
      if (ctx) carregaBufferEngranatge(ctx); // precarreguem el so d'engranatge d'entrada
    });
  }

  // ---------- Controls: so, silenci nocturn i pantalla encesa ----------
  const botoSo = document.getElementById('orlojBotoSo');
  const botoNit = document.getElementById('orlojBotoNit');
  const botoPantalla = document.getElementById('orlojBotoPantalla');
  const potMantenirPantalla = ('wakeLock' in navigator);
  if (botoPantalla && !potMantenirPantalla) botoPantalla.hidden = true;

  function actualitzaControls(){
    const soOn = llegeixPref('so', 'on') === 'on';
    if (botoSo){
      const bloquejat = soOn && !audioActiu();
      botoSo.classList.toggle('actiu', soOn && !bloquejat);
      botoSo.classList.toggle('bloquejat', bloquejat);
      botoSo.setAttribute('aria-pressed', soOn ? 'true' : 'false');
      const etiqueta = !soOn ? 'So desactivat. Toca per activar les campanades'
        : bloquejat ? 'Toca per activar el so (el navegador el bloqueja fins que hi interactues)'
        : 'So activat. Toca per silenciar';
      botoSo.setAttribute('aria-label', etiqueta);
      botoSo.title = etiqueta;
    }
    if (botoNit){
      const nitOn = llegeixPref('silenciNocturn', 'off') === 'on';
      botoNit.classList.toggle('actiu', nitOn);
      botoNit.setAttribute('aria-pressed', nitOn ? 'true' : 'false');
      const etiqueta = nitOn ? `Silenci nocturn activat (${HORA_INICI_SILENCI}:00 a ${HORA_FI_SILENCI}:00)` : 'Silenci nocturn desactivat';
      botoNit.setAttribute('aria-label', etiqueta);
      botoNit.title = etiqueta;
    }
    if (botoPantalla && potMantenirPantalla){
      const vol = prefPantallaEncesa();
      botoPantalla.classList.toggle('actiu', vol && !!sentinellaPantalla);
      botoPantalla.setAttribute('aria-pressed', vol ? 'true' : 'false');
      const etiqueta = vol ? 'Pantalla sempre encesa' : 'La pantalla es pot apagar sola';
      botoPantalla.setAttribute('aria-label', etiqueta);
      botoPantalla.title = etiqueta;
    }
  }

  if (botoSo){
    botoSo.addEventListener('click', (e) => {
      e.stopPropagation();
      const soOn = llegeixPref('so', 'on') === 'on';
      if (soOn && audioActiu()){
        desaPref('so', 'off');
      } else {
        desaPref('so', 'on');
        const ctx = obtenirAudioCtx();
        if (ctx) carregaBufferEngranatge(ctx);
      }
      actualitzaControls();
    });
  }
  if (botoNit){
    botoNit.addEventListener('click', (e) => {
      e.stopPropagation();
      desaPref('silenciNocturn', llegeixPref('silenciNocturn', 'off') === 'on' ? 'off' : 'on');
      actualitzaControls();
    });
  }

  // Pantalla sempre encesa (Screen Wake Lock): útil si el rellotge es fa
  // servir com a rellotge de taula. El navegador l'allibera quan la pestanya
  // passa a segon pla; la tornem a demanar en tornar.
  let sentinellaPantalla = null;
  let peticioPantallaEnCurs = false;
  function prefPantallaEncesa(){
    return llegeixPref('pantallaEncesa', CONFIG.pantallaEncesaPerDefecte ? 'on' : 'off') === 'on';
  }
  async function aplicaPantallaEncesa(){
    if (!potMantenirPantalla) return;
    if (prefPantallaEncesa()){
      if (!sentinellaPantalla && !peticioPantallaEnCurs && document.visibilityState === 'visible'){
        peticioPantallaEnCurs = true;
        try {
          const nova = await navigator.wakeLock.request('screen');
          if (prefPantallaEncesa() && !sentinellaPantalla){
            sentinellaPantalla = nova;
            nova.addEventListener('release', () => {
              if (sentinellaPantalla === nova) sentinellaPantalla = null;
              actualitzaControls();
            });
          } else {
            nova.release(); // mentrestant l'usuari l'ha desactivada
          }
        } catch(e){ /* el navegador l'ha denegada (p. ex. sense gest de l'usuari) */ }
        peticioPantallaEnCurs = false;
      }
    } else if (sentinellaPantalla){
      try { await sentinellaPantalla.release(); } catch(e){}
      sentinellaPantalla = null;
    }
    actualitzaControls();
  }
  if (botoPantalla){
    botoPantalla.addEventListener('click', (e) => {
      e.stopPropagation();
      desaPref('pantallaEncesa', prefPantallaEncesa() ? 'off' : 'on');
      aplicaPantallaEncesa();
    });
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') aplicaPantallaEncesa();
  });
  // Alguns navegadors (Safari) només la concedeixen després d'un gest de l'usuari.
  document.addEventListener('click', () => {
    if (!sentinellaPantalla) aplicaPantallaEncesa();
    actualitzaControls();
  }, {passive:true});
  aplicaPantallaEncesa();
  actualitzaControls();

  // ---------- Cometa Halley: creua l'interior de l'esfera lunar cada 76s ----------
  function llancaCometaLluna(){
    const cometaEl = document.getElementById('cometaLluna');
    const orientEl = document.getElementById('cometaOrient');
    if (!cometaEl || !orientEl) return;
    const angle1 = Math.random()*360;
    const angle2 = angle1 + 100 + Math.random()*160; // corda aleatòria, no sempre un diàmetre
    const r = 163; // dins del disc lunar (r=165), evitant l'anell zodiacal que es dibuixa per sobre
    const x0 = polarX(CX, r, angle1), y0 = polarY(CY, r, angle1);
    const x1 = polarX(CX, r, angle2), y1 = polarY(CY, r, angle2);
    const angleViatge = Math.atan2(y1-y0, x1-x0) * 180/Math.PI;
    const durada = 3200 + Math.random()*1400; // ms

    orientEl.setAttribute('transform', `rotate(${angleViatge})`);
    cometaEl.style.opacity = '0';

    const inici = performance.now();
    function pas(araMs){
      const t = Math.min(1, (araMs - inici) / durada);
      const x = x0 + (x1 - x0) * t;
      const y = y0 + (y1 - y0) * t;
      cometaEl.setAttribute('transform', `translate(${x}, ${y})`);
      let opacitat = 1;
      if (t < 0.08) opacitat = t / 0.08;
      else if (t > 0.9) opacitat = (1 - t) / 0.1;
      cometaEl.style.opacity = opacitat.toFixed(2);
      if (t < 1) requestAnimationFrame(pas);
    }
    requestAnimationFrame(pas);
  }

  function programaCometaLluna(){
    const espera = 76000 + (Math.random()*2000 - 1000); // ~76s (±1s perquè no sigui robòtic)
    setTimeout(()=>{ llancaCometaLluna(); programaCometaLluna(); }, espera);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const primeraEspera = 4000 + Math.random()*1000; // primera aparició als 4-5s de carregar
    setTimeout(()=>{ llancaCometaLluna(); programaCometaLluna(); }, primeraEspera);
  }

  // ---------- Ambient: temperatura, humitat, altitud i població (Open-Meteo, BigDataCloud) ----------
  // Si no es pot fer servir la ubicació (permís denegat, sense GPS...), es
  // mostren les dades de Ripollet. Els últims valors es recorden perquè en
  // obrir la pàgina es vegin de seguida, abans que arribin els nous.
  const UBICACIO_PER_DEFECTE = { latitude: 41.4966, longitude: 2.1580, nom: 'Ripollet' };
  const VALIDESA_TEMPERATURA_MS = 3 * 60 * 60 * 1000; // no mostrar temperatures de fa més de 3 h

  function formataGraus(v){ return `${v.toFixed(1).replace('.', ',')}°C`; }
  function pintaAmbient(d){
    if (!d) return;
    const recent = d.t && (Date.now() - d.t) < VALIDESA_TEMPERATURA_MS;
    // Si les dades són velles (p. ex. la pàgina oberta tota la nit sense
    // connexió), es tornen a mostrar els guions en lloc d'un valor caducat.
    document.getElementById('lecturaTemp').textContent = (recent && typeof d.temp === 'number') ? formataGraus(d.temp) : '--°C';
    document.getElementById('lecturaHum').textContent = (recent && typeof d.hum === 'number') ? `${Math.round(d.hum)}%` : '--%';
    document.getElementById('lecturaSensacio').textContent = (recent && typeof d.sensacio === 'number') ? formataGraus(d.sensacio) : '--°C';
    if (typeof d.alt === 'number') document.getElementById('lecturaAlt').textContent = `${Math.round(d.alt)} m`;
    if (d.lloc) document.getElementById('lecturaLloc').textContent = d.lloc;
  }
  function llegeixAmbientDesat(){
    try { return JSON.parse(localStorage.getItem('orloj.ambient') || 'null'); } catch(e){ return null; }
  }
  function desaAmbient(d){
    try { localStorage.setItem('orloj.ambient', JSON.stringify(d)); } catch(e){}
  }

  async function carregaAmbient(latitude, longitude, nomPerDefecte){
    const dades = Object.assign({}, llegeixAmbientDesat() || {});
    // Promise.allSettled: si un dels tres serveis falla o triga, els altres
    // dos segueixen actualitzant-se amb normalitat.
    const [rTemp, rElev, rLloc] = await Promise.allSettled([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature`).then(r => r.json()),
      fetch(`https://api.open-meteo.com/v1/elevation?latitude=${latitude}&longitude=${longitude}`).then(r => r.json()),
      nomPerDefecte ? Promise.resolve(null) :
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=ca`).then(r => r.json())
    ]);
    if (rTemp.status === 'fulfilled' && rTemp.value && rTemp.value.current){
      const c = rTemp.value.current;
      if (typeof c.temperature_2m === 'number'){
        dades.temp = c.temperature_2m;
        dades.hum = c.relative_humidity_2m;
        dades.sensacio = c.apparent_temperature;
        dades.t = Date.now();
      }
    } else if (rTemp.status === 'rejected'){
      console.warn("Orloj: no s'ha pogut obtenir la temperatura/humitat", rTemp.reason);
    }
    if (rElev.status === 'fulfilled' && rElev.value && rElev.value.elevation){
      dades.alt = rElev.value.elevation[0];
    } else if (rElev.status === 'rejected'){
      console.warn("Orloj: no s'ha pogut obtenir l'altitud", rElev.reason);
    }
    if (nomPerDefecte){
      dades.lloc = nomPerDefecte;
    } else if (rLloc.status === 'fulfilled' && rLloc.value){
      const v = rLloc.value;
      const poblacio = v.city || v.locality || v.principalSubdivision;
      if (poblacio) dades.lloc = poblacio;
    } else if (rLloc.status === 'rejected'){
      console.warn("Orloj: no s'ha pogut obtenir la població", rLloc.reason);
    }
    desaAmbient(dades);
    pintaAmbient(dades);
  }

  function actualitzaAmbient(){
    const perDefecte = () => carregaAmbient(UBICACIO_PER_DEFECTE.latitude, UBICACIO_PER_DEFECTE.longitude, UBICACIO_PER_DEFECTE.nom);
    if (!('geolocation' in navigator)){ perDefecte(); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => carregaAmbient(pos.coords.latitude, pos.coords.longitude, null),
      (err) => { console.warn('Orloj: geolocalització no disponible, es fa servir Ripollet', err); perDefecte(); },
      { enableHighAccuracy:false, timeout:8000, maximumAge:600000 }
    );
  }

  pintaAmbient(llegeixAmbientDesat());
  actualitzaAmbient();
  setInterval(() => { pintaAmbient(llegeixAmbientDesat()); actualitzaAmbient(); }, 15*60*1000);

  // ---------- Instal·lació com a aplicació i funcionament sense connexió ----------
  if ('serviceWorker' in navigator && location.protocol === 'https:'){
    navigator.serviceWorker.register('orloj-sw.js').catch(() => {});
    // Demanem que es desin aquesta pàgina i els seus fulls d'estil (tipografies),
    // perquè funcioni sense connexió des de la primera visita.
    navigator.serviceWorker.ready.then((reg) => {
      const urls = [location.href.split('#')[0]]
        .concat(Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href));
      if (reg.active) reg.active.postMessage({ tipus: 'desa', urls });
    }).catch(() => {});
  }
})();
