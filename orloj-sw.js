<!DOCTYPE html>
<html lang="ca">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Orloj — Rellotge astronòmic</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Grenze+Gotisch:wght@500;600;700&family=Alegreya:ital,wght@0,500;0,700;1,500&family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
<style>
  :root{
    --nit: #0a1330;
    --nit2: #142452;
    --pedra: #211a13;
    --pedra2: #16110c;
    --or: #d4af37;
    --or-clar: #f2d98a;
    --or-fosc: #8a6d1f;
    --or-viu: #f0c65c;
    --ivori: #f2e8d0;
    --vermell: #7a1f1f;
    --arg: #c9d2e0;
    --textura-patina: url("data:image/webp;base64,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");
  }

  *{ box-sizing: border-box; }

  html,body{
    margin:0;
    min-height:100%;
    background:
      radial-gradient(ellipse at 12% 8%, rgba(255,140,45,0.16) 0%, transparent 28%),
      radial-gradient(ellipse at 88% 8%, rgba(255,140,45,0.16) 0%, transparent 28%),
      radial-gradient(ellipse at 50% -10%, #4a3c28 0%, transparent 55%),
      linear-gradient(160deg, #574c3d 0%, #382f24 55%, #211c15 100%);
    color: var(--ivori);
    font-family: 'Cormorant Garamond', serif;
  }

  body{
    height: 100dvh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:
      max(16px, env(safe-area-inset-top))
      max(20px, env(safe-area-inset-right))
      max(16px, env(safe-area-inset-bottom))
      max(20px, env(safe-area-inset-left));
  }

  .banderolaTitol{
    display:block;
    width: min(72%, 340px);
    margin: 0 auto;
    overflow: visible;
    cursor: pointer;
  }
  .banderolaTitol:active{
    filter: brightness(0.92);
  }

  .marc{
    width:100%;
    max-width: 1260px;
    border-radius: 14px;
    border: 3px solid #8a6d1f;
    background:
      radial-gradient(ellipse 260px 340px at 18% 12%, rgba(190,60,80,0.20), transparent 60%),
      radial-gradient(ellipse 300px 380px at 78% 22%, rgba(160,50,75,0.17), transparent 58%),
      radial-gradient(ellipse 280px 340px at 38% 62%, rgba(150,45,65,0.16), transparent 58%),
      radial-gradient(ellipse 320px 400px at 88% 78%, rgba(175,55,75,0.14), transparent 58%),
      radial-gradient(ellipse 220px 300px at 8% 88%, rgba(140,40,60,0.15), transparent 58%),
      radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07), transparent 60%),
      linear-gradient(160deg, #3a0f18 0%, #240a12 55%, #120508 100%);
    box-shadow:
      0 0 0 1px #4a3510,
      0 0 0 7px #241a10,
      0 0 0 8px #6b5228,
      inset 0 0 50px rgba(0,0,0,0.55),
      0 25px 70px rgba(0,0,0,0.65);
    padding: clamp(18px, 2.6vw, 34px) clamp(24px, 3.4vw, 46px);
    position: relative;
  }

  .contingut{
    display:flex;
    align-items:center;
    gap: clamp(20px, 3.5vw, 48px);
  }
  .columna-esq{
    flex: 1 1 58%;
    min-width: 0;
    text-align:center;
  }
  .columna-dre{
    flex: 1 1 38%;
    min-width: 0;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  @media (max-width: 780px){
    .contingut{ flex-direction:column; }
    .columna-esq, .columna-dre{ flex: 1 1 auto; width:100%; }
  }

  header{
    text-align:center;
    margin-bottom: 4px;
  }
  h1{
    font-family: 'UnifrakturMaguntia', cursive;
    font-weight: 400;
    font-size: clamp(32px, 4.4vw, 52px);
    margin: 4px 0 2px;
    color: var(--or-clar);
    text-shadow: 0 0 18px rgba(212,175,55,0.35), -1.5px -1.5px 0px rgba(255,250,230,0.45), 1.5px 1.5px 2px rgba(0,0,0,0.7);
    letter-spacing: 1px;
  }
  .subtitol{
    font-family: 'Cinzel', serif;
    font-size: clamp(10px, 1.3vw, 13px);
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--or-viu);
    font-weight: 600;
    text-shadow: 0 0 6px rgba(240,198,92,0.35), -1px -1px 0 rgba(255,250,230,0.4), 1px 1px 1.5px rgba(0,0,0,0.65);
  }
  .subtitol-secundari{
    font-family: 'Cinzel', serif;
    font-size: clamp(7px, 0.85vw, 9px);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--or-fosc);
    font-weight: 600;
    text-shadow: -1px -1px 0 rgba(255,250,230,0.35), 1px 1px 1.5px rgba(0,0,0,0.6);
  }

  .disc-wrap{
    width: min(100%, 660px, 58vh);
    margin: 14px auto 0;
    position: relative;
    aspect-ratio: 1 / 1;
  }
  .disc-wrap svg{ width:100%; height:100%; display:block; overflow:visible; }
  #astrolabiExt{ position:absolute; inset:0; }

  /* Gir de l'esfera interior (zodíac, lluna, busques): a les 12 del migdia i del
     vespre, en sentit contrari al de l'esfera del calendari, amb el mateix
     efecte de volum cilíndric daurat. La mida (87,3%) i el requadre retallat
     (viewBox) del SVG interior arriben fins radi 262, prou per cobrir la busca
     dels segons, que és la que arriba més lluny (radi 258) cap a l'anella blanca. */
  .astrolabi-flip-wrap{
    position: absolute;
    top: 50%; left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    perspective: 1600px;
  }
  .astrolabi-flip{
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .astrolabi-flip.girant{
    animation: orlojGirAstrolabi 10.5s;
  }
  @keyframes orlojGirAstrolabi{
    0%      { transform: rotateY(0deg);    animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    42.857% { transform: rotateY(-180deg); animation-timing-function: linear; }
    57.143% { transform: rotateY(-180deg); animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    100%    { transform: rotateY(-360deg); }
  }
  .cos-cilindre-ast{
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    pointer-events: none;
    /* Invisible en repòs: com que la cara frontal té zones transparents
       (fora del disc del zodíac), aquesta pila daurada només s'ha de veure
       mentre dura el gir; en repòs quedaria tapant l'anella de les hores. */
    opacity: 0;
  }
  .astrolabi-flip.girant .cos-cilindre-ast{
    opacity: 1;
  }
  .cos-cilindre-ast .capa-volum-ast{
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-image: var(--textura-patina);
    background-size: 230% 230%;
    background-position: 32% 38%;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.7);
  }
  /* El planeta és sempre una esfera -no un cilindre pla apilat, que donava un
     reflex/costura artificial a mig gir. La perla viu al mateix espai 3D que
     el disc (com a fill directe de .astrolabi-flip) però amb dues peces:
     - #planetaOrbita: sense rotació pròpia, només la posició (segueix el
       disc en girar, exactament com fa cara-davant-ast) i backface-visibility
       hidden, perquè quan el disc ensenya el revers la perla quedi eclipsada
       -oculta- igual que la cara frontal, com si el propi rellotge la tapés.
     - #planetaEsfera: una animació que contrarota exactament el mateix
       angle que el disc, perquè la bola es vegi sempre rodona (mai
       aixafada en el·lipse) mentre estigui visible -continguda amb la
       posició de la perla en tot moment. */
  .planeta-orbita{
    position: absolute;
    width: 5.5%;
    aspect-ratio: 1 / 1;
    transform: translate(-50%, -50%) translateZ(14px);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    pointer-events: none;
  }
  .planeta-esfera{
    position: absolute;
    inset: 0;
  }
  .planeta-esfera svg{ width:100%; height:100%; display:block; overflow:visible; }
  .astrolabi-flip.girant .planeta-esfera{
    animation: orlojContrarotacioPlaneta 10.5s;
  }
  @keyframes orlojContrarotacioPlaneta{
    0%      { transform: rotateY(0deg);   animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    42.857% { transform: rotateY(180deg); animation-timing-function: linear; }
    57.143% { transform: rotateY(180deg); animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    100%    { transform: rotateY(360deg); }
  }
  .cara-davant-ast, .cara-darrere-ast{
    position: absolute;
    inset: 0;
    border-radius: 50%;
    backface-visibility: hidden;
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
  }
  .cara-davant-ast{
    transform: translateZ(14px);
    background: transparent;
  }
  .cara-davant-ast svg{ width:100%; height:100%; display:block; overflow:visible; }
  .cara-darrere-ast{
    transform: rotateY(180deg) translateZ(14px);
    background-image: var(--textura-patina);
    background-size: 175% 175%;
    background-position: 40% 30%;
    background-repeat: no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .lema-gravat-ast{
    font-family:'UnifrakturMaguntia', cursive;
    font-weight:400;
    font-size: clamp(24px, 5vw, 44px);
    letter-spacing: 0.5px;
    text-align:center;
    color: #9c7a1f;
    text-shadow:
      -1px -1px 1px rgba(60,40,5,0.65),
      1px 1.5px 1.5px rgba(255,244,200,0.7);
    padding: 0 6%;
  }

  .calendari-wrap{
    width: min(85%, 400px, 34vh);
    margin: 4px auto 0;
    position: relative;
    z-index: 2;
    perspective: 1600px;
  }
  .calendari-wrap svg{ width:100%; height:auto; display:block; }

  .calendari-flip{
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    transform-style: preserve-3d;
  }
  .calendari-flip.girant{
    animation: orlojGirCalendari 10.5s;
  }
  @keyframes orlojGirCalendari{
    0%      { transform: rotateY(0deg);   animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    42.857% { transform: rotateY(180deg); animation-timing-function: linear; }
    57.143% { transform: rotateY(180deg); animation-timing-function: cubic-bezier(.45,.05,.55,.95); }
    100%    { transform: rotateY(360deg); }
  }

  .cos-cilindre{
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    pointer-events: none;
  }
  .cos-cilindre .capa-volum{
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-image: var(--textura-patina);
    background-size: 230% 230%;
    background-position: 68% 60%;
    background-repeat: no-repeat;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.7);
  }

  /* ===== CARES SENSE ANELLS FOSCOS EXTERIORS ===== */
  /* He eliminat els dos anells daurats del box-shadow. 
     Ara només hi ha una ombra subtil per donar profunditat, sense cap vora afegida. */
  .cara-davant, .cara-darrere{
    position: absolute;
    inset: 0;
    border-radius: 50%;
    backface-visibility: hidden;
    /* Només una ombra suau, sense anells daurats al voltant */
    filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
  }
  .cara-davant{
    transform: translateZ(14px);
  }
  .cara-davant svg{ width:100%; height:100%; }
  .cara-darrere{
    transform: rotateY(180deg) translateZ(14px);
    background-image: var(--textura-patina);
    background-size: 175% 175%;
    background-position: 62% 58%;
    background-repeat: no-repeat;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .lema-gravat{
    font-family:'UnifrakturMaguntia', cursive;
    font-weight:400;
    font-size: clamp(24px, 5vw, 44px);
    letter-spacing: 0.5px;
    text-align:center;
    color: #9c7a1f;
    text-shadow:
      -1px -1px 1px rgba(60,40,5,0.65),
      1px 1.5px 1.5px rgba(255,244,200,0.7);
  }

  .lectura{
    text-align:center;
    margin-top: 22px;
    font-family:'Cinzel', serif;
  }
  .hora-digital{
    font-size: clamp(32px, 3.8vw, 46px);
    letter-spacing: 0;
    color: var(--or-clar);
    text-shadow: 0 0 12px rgba(212,175,55,0.3), -1.5px -1.5px 0 rgba(255,250,230,0.4), 1.5px 1.5px 2px rgba(0,0,0,0.7);
  }
  .hora-digital .xifra{
    display: inline-block;
    width: 0.62em;
    text-align: center;
  }
  .hora-digital .separador-hora{
    display: inline-block;
    width: 0.32em;
    text-align: center;
  }
  .data-digital{
    font-family:'Cormorant Garamond', serif;
    font-style: italic;
    font-size: clamp(17px, 1.9vw, 22px);
    color: var(--arg);
    margin-top: 3px;
    text-shadow: -1px -1px 0 rgba(255,250,230,0.3), 1px 1px 1.5px rgba(0,0,0,0.5);
  }
  .luna-linia{
    margin-top: 9px;
    font-size: clamp(13px, 1.5vw, 16px);
    letter-spacing: 1.5px;
    color: var(--or-viu);
    font-weight: 600;
    text-transform: uppercase;
    text-shadow: -1px -1px 0 rgba(255,250,230,0.35), 1px 1px 1.5px rgba(0,0,0,0.6);
  }

  .ambient-linia{
    margin-top: 5px;
    font-size: clamp(11px, 1.3vw, 14px);
    letter-spacing: 1.2px;
    color: var(--or-viu);
    text-transform: uppercase;
    opacity: 0.9;
    text-shadow: -0.8px -0.8px 0 rgba(255,250,230,0.3), 0.8px 0.8px 1.2px rgba(0,0,0,0.55);
  }
  .ambient-linia .separador-punt{
    color: var(--or-fosc);
    margin: 0 5px;
  }

  .separador{
    width: 70%;
    max-width: 260px;
    height: 1px;
    margin: 20px auto;
    background: linear-gradient(90deg, transparent, var(--or-fosc), transparent);
  }

  .lema{
    text-align:center;
    font-family:'Cormorant Garamond', serif;
    font-style: italic;
    font-size: clamp(14px, 1.5vw, 17px);
    color: #8b7a5e;
    letter-spacing: 0.5px;
    margin-top: 4px;
  }

  text{ font-family:'Cinzel', serif; user-select:none; }
  .num-antic{ font-family:'UnifrakturMaguntia', cursive; }

  @media (prefers-reduced-motion: reduce){
    * { transition: none !important; }
  }
  /* =====================================================================
     DISSENY COMÚ: títol, dues esferes gairebé iguals i la roda de fulls
     ===================================================================== */
  :root{
    --S: min(84vw, 37svh);
    --pergami: radial-gradient(ellipse at 28% 18%, rgba(255,255,244,.55), transparent 60%),
               radial-gradient(ellipse at 82% 92%, rgba(130,90,35,.16), transparent 55%),
               linear-gradient(160deg, #f6ecd2 0%, #ecdcb4 58%, #e2cd9c 100%);
    --tinta: #34210f; --tinta2: #6a4b28; --accent: #7a1f12; --ratlla: rgba(100,64,22,.22);
    --festiu: #8a2414; --festiu-txt: #fff6e2; --cs: #9a4a1a;
    --serif: 'Alegreya', 'Cormorant Garamond', Georgia, serif;
  }
  @media (orientation: landscape){
    :root{ --S: min(42vw, calc(100svh - 84px)); }
    /* En horitzontal: marc ample, títol al centre de dalt (a la fila dels botons) i esferes grans */
    body{ padding: max(6px, env(safe-area-inset-top)) max(10px, env(safe-area-inset-right)) max(6px, env(safe-area-inset-bottom)) max(10px, env(safe-area-inset-left)) !important; }
    body .marc{ width: calc(100vw - 2 * max(10px, env(safe-area-inset-left))) !important; padding: 4px 3vw 10px !important; }
    .orloj-cap{ margin: 0 0 4px; }
    .orloj-cap h1{ font-size: clamp(32px, 11svh, 60px) !important; line-height:1.05 !important; }
    .orloj-cap .banderolaTitol{ width: clamp(150px, 30svh, 250px) !important; }
  }
  .marc{ width:auto !important; max-width:none !important; }
  .orloj-cap{ text-align:center; margin: 0 0 1.6svh; }
  .orloj-cap h1{ margin:0 !important; font-size: clamp(38px, 6.4svh, 64px) !important; }
  .orloj-cap .banderolaTitol{ width: clamp(170px, 26svh, 260px) !important; margin:0 auto; }
  .contingut{ display:flex !important; flex-direction:column !important; align-items:center !important;
    justify-content:center !important; gap: 2.2svh !important; }
  @media (orientation: landscape){ .contingut{ flex-direction:row !important; gap: 4.5vw !important; } }
  .columna-esq, .columna-dre{ flex:0 0 auto !important; width:auto !important; min-width:0; display:block !important; }
  .disc-wrap{ width: var(--S) !important; margin: 0 auto !important; }
  /* Títol medieval sense la placa de fusta: només el mot «Orloj» */
  .orloj-medieval .banderolaTitol > path, .orloj-medieval .banderolaTitol > g{ display:none; }
  .orloj-medieval .banderolaTitol{ overflow:visible; }
  /* Cap requadre de focus en tocar el títol (sí amb el teclat) */
  .orloj-cap h1, .orloj-cap .banderolaTitol{ outline:none !important; -webkit-tap-highlight-color: transparent; }
  .orloj-cap h1:focus-visible, .orloj-cap .banderolaTitol:focus-visible{ outline:2px solid rgba(242,217,138,.6) !important; outline-offset:4px; }
  /* Lemes del revers més grans, proporcionals a cada esfera */
  .lema-gravat-ast{ font-size: calc(var(--S) * .125) !important; line-height:1.15; }
  .lema-gravat{ font-size: calc(var(--S) * .135) !important; line-height:1.15; }

  /* ---------- La roda ---------- */
  .roda{ position:relative; height: calc(var(--S) * .96); width: min(calc(100vw - 56px), calc(var(--S) * 1.2)); margin:0 auto; touch-action:none; }
  @media (orientation: landscape){ .roda{ width: min(calc(var(--S) * 1.3), calc(92vw - var(--S) - 7vw)); } }
  .full-esfera .calendari-wrap{ width: calc(var(--S) * .96) !important; margin: 0 auto !important; }
  .roda-finestra{ position:absolute; inset:-14px -30px; overflow:hidden; }
  .roda-pista{ position:absolute; inset:14px 30px; }
  .full{ position:absolute; inset:0; will-change:transform; }
  .full.ocult{ display:none; }
  .roda-punts{ position:absolute; top:50%; right:-17px; transform:translateY(-50%); display:flex; flex-direction:column; gap:7px; }
  .roda-punts span{ display:block; width:6px; height:6px; border-radius:50%; background:#8a6d1f; opacity:.6; transition:all .3s; }
  .roda-punts span.actiu{ background:#f2d98a; opacity:1; transform:scale(1.4); }
  .roda-punts span.avis{ background:#e0803a; opacity:1; }
  @media (orientation: landscape){ .roda-punts{ right:-26px; } }

  /* ---------- Targetes: finestra rectangular de pergamí marfil, marc daurat (normal) o de ferro (medieval) ----------
     Les mides de lletra són fixes i un ajust automàtic (--k, de 1 a 0,8) les redueix una mica
     només si el contingut no cap a la finestra. */
  .targeta{ position:absolute; inset:0; filter: drop-shadow(0 6px 14px rgba(0,0,0,.5)); }
  .t-marc{ position:absolute; inset:0; padding:3px; border-radius:12px;
    background: linear-gradient(160deg, #f2d98a, #b8860b 35%, #6b4c05 60%, #d4af37); }
  .orloj-medieval .t-marc{ padding:4px; background: linear-gradient(180deg, #d8d8d8, #9a9a9a 45%, #5c5c5c); }
  .t-fons{ position:relative; height:100%; overflow:hidden; container-type:size; border-radius:9px;
    background: var(--pergami); color: var(--tinta);
    box-shadow: inset 0 0 22px rgba(110,70,20,.28);
    display:flex; flex-direction:column; align-items:center; text-align:center;
    padding: 10px 14px 12px; --k:1; }
  .t-fons.amb-ll{ padding:0; }
  .t-fons{ padding: calc(10px * var(--k)) calc(14px * var(--k)) calc(12px * var(--k)); }
  .ll-pane{ padding: calc(10px * var(--k)) calc(14px * var(--k)) max(24px, calc(20px * var(--k))) !important; }
  .t-fons, .ll-pane{ --f-titol: calc(16px * var(--k)); --f-text: calc(16px * var(--k)); --f-etq: calc(12.5px * var(--k)); --f-gran: calc(56px * var(--k)); }

  .t-titol{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-titol); letter-spacing:.14em; text-transform:uppercase; line-height:1.15;
    color: var(--accent); display:flex; align-items:center; justify-content:center; gap:10px; margin: 0 0 calc(6px * var(--k)); white-space:nowrap; flex:0 0 auto; }
  .t-titol::before, .t-titol::after{ content:''; width:22px; height:1px; background:currentColor; opacity:.5; }
  .orloj-medieval .t-titol{ font-family:'Grenze Gotisch', serif; font-weight:600; letter-spacing:.02em; text-transform:none; font-size: calc(var(--f-titol) * 1.3); }
  .t-files{ width:100%; margin-top:auto; }
  .t-fila{ display:flex; justify-content:space-between; align-items:baseline; gap:10px; padding: calc(5px * var(--k)) 0; border-bottom:1px solid var(--ratlla); }
  .t-fila:last-child{ border-bottom:0; }
  .t-fila span{ font-family:'Cinzel', serif; font-weight:600; font-size: var(--f-etq); letter-spacing:.06em; text-transform:uppercase; color: var(--tinta2); text-align:left; white-space:nowrap; }
  .t-fila b{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); text-align:right; }
  .t-peu{ margin-top:auto; font-family:'Cormorant Garamond', serif; font-style:italic; font-size: var(--f-etq); color: var(--tinta2); padding-top:4px; }
  .m-estat{ margin:auto; font-family:'Cormorant Garamond', serif; font-style:italic; font-size: var(--f-text); color: var(--tinta2); }
  .m-estat a{ color: var(--accent); }

  /* Panells laterals dins d'una finestra */
  .lliscador{ position:relative; width:100%; height:100%; overflow:hidden; }
  .ll-pista{ display:flex; height:100%; will-change:transform; }
  .ll-pane{ flex:0 0 100%; height:100%; overflow:hidden; display:flex; flex-direction:column; align-items:center; padding: 10px 14px 20px; min-width:0; --k:1; }
  .ll-punts{ position:absolute; left:0; right:0; bottom:6px; display:flex; justify-content:center; gap:9px; }
  .ll-punts span{ width:7px; height:7px; border-radius:50%; background: var(--tinta2); opacity:.3; cursor:pointer; }
  .ll-punts span.actiu{ opacity:.9; background: var(--accent); }
  .ll-punts:has(span:only-child){ display:none; }

  /* Calendari */
  .cal-cap{ display:flex; align-items:center; justify-content:space-between; width:100%; margin-bottom: calc(4px * var(--k)); flex:0 0 auto; }
  .cal-titol{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-titol); letter-spacing:.1em; text-transform:uppercase; color: var(--accent); cursor:pointer; white-space:nowrap; }
  .cal-titol small{ font-weight:600; letter-spacing:.06em; margin-left:.4em; color: var(--tinta2); }
  .orloj-medieval .cal-titol{ font-family:'Grenze Gotisch', serif; font-weight:600; text-transform:none; letter-spacing:.02em; font-size: calc(var(--f-titol) * 1.3); }
  .cal-b{ flex:0 0 auto; width: calc(30px * var(--k)); height: calc(30px * var(--k)); border-radius:50%; border:1.5px solid var(--accent); background:transparent; color: var(--accent);
    font: 700 calc(17px * var(--k)) 'Cinzel', serif; line-height:1; display:grid; place-items:center; cursor:pointer; padding:0 0 2px; }
  .cal-finestra{ position:relative; width:100%; flex:1 1 auto; min-height:0; overflow:hidden; }
  .cal-pista{ display:flex; height:100%; transform: translate3d(-100%,0,0); }
  .cal-mes{ flex:0 0 100%; height:100%; }
  .cal-graella{ display:grid; grid-template-columns: repeat(7, 1fr); grid-template-rows: auto repeat(6, 1fr); height:100%; align-items:center; justify-items:center; }
  .cap-dia{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); color: var(--tinta2); letter-spacing:.03em; padding-bottom:2px; }
  .cap-dia.cs{ color: var(--cs); }
  .dia{ position:relative; height:92%; max-height: calc(40px * var(--k)); aspect-ratio:1; display:grid; place-items:center; border-radius:50%;
    font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); font-variant-numeric: lining-nums; color: var(--tinta); cursor:default; }
  .dia.cs{ color: var(--cs); }
  .dia.festiu{ background: var(--festiu); color: var(--festiu-txt); cursor:pointer; }
  .dia.commemora{ box-shadow: inset 0 0 0 2px var(--festiu); cursor:pointer; }
  .dia.avui{ box-shadow: 0 0 0 2px var(--tinta); }
  .dia.festiu.avui{ box-shadow: 0 0 0 2px var(--tinta), inset 0 0 0 2px var(--festiu-txt); }
  .dia.buit{ visibility:hidden; }
  .cal-etiqueta{ position:absolute; left:10px; right:10px; bottom:10px; padding: 8px 12px; border-radius:10px; background: rgba(52,33,15,.94); color:#f6ecd2;
    font-family:'Cormorant Garamond', serif; font-size: 16px; line-height:1.2; opacity:0; transform: translateY(8px); transition: all .25s; pointer-events:none; }
  .cal-etiqueta.visible{ opacity:1; transform:none; }
  .cal-etiqueta b{ display:block; font-weight:700; }
  .cal-etiqueta em{ display:block; font-family:'Cinzel', serif; font-style:normal; font-size: 12px; letter-spacing:.08em; opacity:.8; }

  /* On som */
  .l-nom{ font-family:'Cinzel', serif; font-weight:700; font-size: calc(26px * var(--k)); line-height:1.1; color: var(--tinta); margin-top:auto; }
  .orloj-medieval .l-nom{ font-family:'Grenze Gotisch', serif; font-weight:600; font-size: calc(32px * var(--k)); }
  .l-regio{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: var(--f-text); color: var(--tinta2); margin: 2px 0 auto; }

  /* El temps */
  .tm-fila{ display:flex; align-items:center; justify-content:center; gap:10px; margin-top:auto; }
  .tm-icona{ width: calc(64px * var(--k)); height: calc(64px * var(--k)); }
  .tm-gran{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-gran); line-height:.95; font-variant-numeric: lining-nums; }
  .tm-desc{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: calc(var(--f-text) * 1.05); color: var(--tinta2); margin: 2px 0 auto; }
  .tm-detall{ display:grid; grid-template-columns: repeat(2, 1fr); width:100%; gap: 0 18px; }
  .tm-detall > div{ display:flex; justify-content:space-between; align-items:baseline; border-bottom:1px solid var(--ratlla); padding: calc(4px * var(--k)) 0; }
  .tm-detall span{ font-family:'Cinzel', serif; font-weight:600; font-size: var(--f-etq); letter-spacing:.03em; color: var(--tinta2); }
  .tm-detall b{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); }
  .h12{ display:grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 1fr; width:100%; flex:1; min-height:0; gap: 4px 8px; }
  .h12 > div{ display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:0; }
  .h12 .hh{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); color: var(--tinta2); }
  .h12 svg{ width: calc(38px * var(--k)); height: calc(38px * var(--k)); }
  .h12 .tt{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); }
  .d5{ display:flex; flex-direction:column; width:100%; flex:1; min-height:0; justify-content:space-evenly; }
  .d5 > div{ display:grid; grid-template-columns: 2.4em calc(32px * var(--k)) 2.4em 1fr 2.4em; align-items:center; gap:8px; }
  .d5 .dd{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); text-align:left; }
  .d5 svg{ width: calc(30px * var(--k)); height: calc(30px * var(--k)); }
  .d5 .mn, .d5 .mx{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); }
  .d5 .mn{ color: var(--tinta2); }
  .d5 .barra{ position:relative; height:6px; border-radius:3px; background: var(--ratlla); }
  .d5 .barra i{ position:absolute; top:0; bottom:0; border-radius:3px; background: linear-gradient(90deg, #6f8fb8, #c98a3a); }

  /* Avisos: color d'alerta */
  .full-avisos .t-fons{ background: radial-gradient(ellipse at 50% 0%, rgba(255,240,200,.6), transparent 60%), linear-gradient(160deg, #f8dcb0, #f0bf86 60%, #e6a86a); }
  .full-avisos .t-marc{ background: linear-gradient(160deg, #ffb070, #c2410c 50%, #ff8a3d) !important; }
  .full-avisos .t-titol{ color:#8a1c0c; }
  .avisos{ list-style:none; margin:auto 0; padding:0; width:100%; display:flex; flex-direction:column; gap: calc(6px * var(--k)); }
  .avisos li{ display:flex; align-items:center; gap:10px; text-align:left; padding: calc(6px * var(--k)) 10px; border-radius:9px; background: rgba(255,255,255,.45); border-left: 5px solid #c2410c;
    font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); line-height:1.15; color:#3a1508; }
  .avisos li.vermell{ border-left-color:#9b1c1c; background: rgba(255,225,215,.6); }
  .avisos svg{ flex:0 0 auto; width: calc(28px * var(--k)); height: calc(28px * var(--k)); fill:none; stroke:#8a1c0c; stroke-width:1.8; stroke-linecap:round; stroke-linejoin:round; }

  /* Avui */
  .av-fila{ display:flex; align-items:center; justify-content:center; gap:12px; margin: auto 0; }
  .av-num{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: calc(64px * var(--k)); line-height:.85; font-variant-numeric: lining-nums; }
  .av-text{ text-align:left; line-height:1.15; }
  .av-set{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: calc(var(--f-text) * 1.2); }
  .av-mes{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-text); letter-spacing:.05em; }
  .av-any{ font-family:'Cinzel', serif; font-size: var(--f-etq); letter-spacing:.2em; color: var(--tinta2); }
  .ll-text{ align-items:stretch; text-align:left; justify-content:flex-start; }
  .ef-etq{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); letter-spacing:.12em; text-transform:uppercase; color: var(--accent); margin-top: calc(8px * var(--k)); }
  .ef-etq:first-child{ margin-top:0; }
  .ef-sant{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: var(--f-text); line-height:1.18; margin-top:2px; }
  .ef-text{ font-family:'Cormorant Garamond', serif; font-weight:500; font-size: var(--f-text); line-height:1.2; margin-top:2px; }
  .sl-graella{ display:grid; grid-template-columns:1fr 1fr; gap:14px; width:100%; flex:1; min-height:0; align-content:center; }
  .sl-col{ display:flex; flex-direction:column; align-items:center; gap: calc(2px * var(--k)); }
  .sl-ic{ width: calc(52px * var(--k)); height: calc(52px * var(--k)); flex:0 0 auto; margin: auto 0 calc(4px * var(--k)); }
  .ll-pane .sl-nota{ margin-top: 2px; }
  .sl-fila{ display:flex; gap:6px; align-items:baseline; font-family:'Cinzel', serif; font-weight:600; font-size: var(--f-etq); color: var(--tinta2); text-transform:uppercase; }
  .sl-fila b{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); color: var(--tinta); text-transform:none; }
  .sl-nota{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: calc(var(--f-etq) * 1.1); color: var(--tinta2); line-height:1.15; text-align:center; }

  /* Distàncies: una fila per astre (nom · distància · temps de la llum) */
  .ds-llista{ width:100%; flex:1; min-height:0; display:flex; flex-direction:column; justify-content:space-evenly; }
  .ds-fila{ display:grid; grid-template-columns: 1fr auto; align-items:baseline; column-gap:10px; border-bottom:1px solid var(--ratlla); padding: calc(3px * var(--k)) 0; text-align:left; }
  .ds-fila:last-child{ border-bottom:0; }
  .ds-nom{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); letter-spacing:.05em; text-transform:uppercase; }
  .ds-km{ font-family:'Cormorant Garamond', serif; font-weight:700; font-size: var(--f-text); text-align:right; font-variant-numeric: lining-nums; }
  .ds-llum{ grid-column: 1 / -1; font-family:'Cormorant Garamond', serif; font-style:italic; font-size: calc(var(--f-etq) * 1.08); color: var(--tinta2); line-height:1.1; }
  .ds-fila.proper .ds-nom::after{ content:' ★'; color: var(--accent); }

  /* Ràdio: quatre emissores per panell */
  .r-graella{ display:grid; grid-template-columns:1fr 1fr; grid-template-rows: 1fr 1fr; gap: 8px; width:100%; flex:1; min-height:0; }
  .r-boto{ display:flex; align-items:center; gap:8px; text-align:left; border:1.5px solid var(--ratlla); border-radius:10px; background: rgba(255,255,255,.3);
    padding: 4px 10px; cursor:pointer; color: var(--tinta); min-width:0; font:inherit; }
  .r-boto.triat{ border-color: var(--accent); background: rgba(122,31,18,.1); }
  .r-punt{ flex:0 0 auto; width:9px; height:9px; border-radius:50%; background: var(--ratlla); }
  .r-boto.sonant .r-punt{ background: var(--accent); box-shadow: 0 0 6px rgba(122,31,18,.6); animation: orlojPolsBoto 1.6s infinite; }
  .r-txt{ min-width:0; }
  .r-nom{ display:block; font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); line-height:1.15; }
  .r-sub{ display:block; font-family:'Cormorant Garamond', serif; font-style:italic; font-size: calc(var(--f-etq) * 1.08); color: var(--tinta2); line-height:1.15; }

  /* Podcasts */
  .p-sub{ font-family:'Cormorant Garamond', serif; font-style:italic; font-size: var(--f-etq); color: var(--tinta2); margin-top: -2px; }
  .p-cap-vell{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); letter-spacing:.1em; text-transform:uppercase; color: var(--accent); text-align:left; margin-bottom: calc(5px * var(--k)); }
  .p-cap-vell small{ font-family:'Cormorant Garamond', serif; font-style:italic; font-weight:400; letter-spacing:0; text-transform:none; color: var(--tinta2); font-size:1.1em; }
  .p-fila{ display:grid; grid-template-columns: repeat(auto-fit, minmax(46px, 1fr)); gap:8px; width:100%; margin: auto 0; }
  .p-boto{ position:relative; min-width:0; border:1.5px solid var(--ratlla); border-radius:10px; background: rgba(255,255,255,.3); padding: calc(10px * var(--k)) 2px calc(10px * var(--k)); cursor:pointer; color: var(--tinta); overflow:hidden; font:inherit; line-height:1.1; }
  .p-boto.triat{ border-color: var(--accent); }
  .p-boto.darrer{ box-shadow: inset 0 -3px 0 var(--accent); }
  .p-dia{ display:block; font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-text); }
  .p-data{ display:block; font-family:'Cormorant Garamond', serif; font-size: var(--f-text); color: var(--tinta2); }
  .p-ic{ position:absolute; top:3px; right:4px; color: var(--accent); line-height:0; }
  .p-ic svg{ width: 10px; height: 10px; }
  .p-boto .ic-pausa, .p-boto.sonant .ic-play{ display:none; } .p-boto.sonant .ic-pausa{ display:inline; }
  .p-barra{ position:absolute; left:0; bottom:0; height:3px; width:0; background: var(--accent); }

  /* Notícies */
  .n-pane{ align-items:stretch; }
  .n-llista{ position:relative; flex:1; min-height:0; display:flex; flex-direction:column; overflow:hidden; text-align:left; }
  .n-item{ display:flex; gap:8px; padding: calc(5px * var(--k)) 0; border-bottom:1px solid var(--ratlla); color: var(--tinta); text-decoration:none; -webkit-touch-callout:none; -webkit-user-drag:none; }
  .n-item.ultim{ border-bottom:0; }
  .n-num{ flex:0 0 auto; min-width:1.2em; font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); color: var(--accent); line-height:1.5; }
  .n-txt{ font-family:'Cormorant Garamond', serif; font-weight:600; font-size: var(--f-text); line-height:1.15; }
  #nPeu{ position:absolute; left:0; right:0; bottom:20px; text-align:center; padding:0; font-size: 12px; }
  .full[data-full="noticies"] .ll-pane{ padding-bottom: calc(36px * var(--k)) !important; }

  /* ---------- Botons ---------- */
  .orloj-controls{ position:fixed; top: max(12px, env(safe-area-inset-top)); display:flex; gap:10px; z-index:50; }
  .orloj-controls.esq{ left: max(12px, env(safe-area-inset-left)); }
  .orloj-controls.dre{ right: max(12px, env(safe-area-inset-right)); }
  .orloj-boto{ width:44px; height:44px; border-radius:50%; border:1.5px solid rgba(212,175,55,.7); background: rgba(14,10,6,.6); color:#f2d98a;
    display:grid; place-items:center; padding:0; cursor:pointer; -webkit-tap-highlight-color:transparent; transition: box-shadow .2s, opacity .2s; }
  .orloj-boto svg{ width:22px; height:22px; display:block; }
  .orloj-boto:focus-visible{ outline:2px solid #f2d98a; outline-offset:2px; }
  .boto-idioma{ font: 700 13px 'Cinzel', serif; letter-spacing:1px; }
  #orlojBotoSo .barra{ display:none; }
  #orlojBotoSo.mut{ opacity:.6; } #orlojBotoSo.mut .barra{ display:inline; }
  #orlojBotoSo.bloquejat{ animation: orlojPolsBoto 2s ease-in-out infinite; }
  #orlojBotoVeu.parlant .ona1, #orlojBotoVeu.parlant .ona2{ animation: orlojOna 1s ease-in-out infinite; }
  @keyframes orlojOna{ 50%{ opacity:.25; } }
  #orlojBotoMode .ic-nit, #orlojBotoMode .ic-zz{ display:none; }
  .mode-nit #orlojBotoMode .ic-dia{ display:none; } .mode-nit #orlojBotoMode .ic-nit{ display:block; }
  .mode-zz #orlojBotoMode .ic-dia{ display:none; } .mode-zz #orlojBotoMode .ic-zz{ display:block; font: 700 15px 'Cinzel', serif; }
  @keyframes orlojPolsBoto{ 0%,100%{ box-shadow:0 0 0 0 rgba(240,198,92,.55); } 50%{ box-shadow:0 0 0 7px rgba(240,198,92,0); } }
  .orloj-menu-idioma{ position:absolute; top:52px; left:0; margin:0; padding:6px; list-style:none; min-width:190px; border-radius:12px;
    background: var(--pergami); border:1.5px solid #b8860b; box-shadow: 0 10px 28px rgba(0,0,0,.5); }
  .orloj-menu-idioma li{ display:flex; gap:12px; align-items:center; padding:9px 12px; border-radius:8px; cursor:pointer;
    font: 500 19px var(--serif); color: var(--tinta); }
  .orloj-menu-idioma li b{ font: 700 12px 'Cinzel', serif; letter-spacing:1px; color: var(--accent); width:24px; }
  .orloj-menu-idioma li.actiu{ background: rgba(122,31,18,.12); }
  .ara-sona{ position:fixed; left:50%; bottom: max(14px, env(safe-area-inset-bottom)); transform:translateX(-50%); z-index:50; display:flex; align-items:center; gap:10px;
    padding: 8px 10px 8px 14px; border-radius:24px; background: var(--pergami); border:1.5px solid #b8860b; color: var(--tinta); box-shadow:0 8px 22px rgba(0,0,0,.5); cursor:pointer; max-width: 90vw; }
  .ara-sona[hidden]{ display:none; }
  .ara-sona > svg{ width:22px; height:22px; flex:0 0 auto; color: var(--accent); }
  .as-txt{ display:flex; flex-direction:column; min-width:0; text-align:left; }
  .as-etq{ font: 700 11px 'Cinzel', serif; letter-spacing:1.4px; text-transform:uppercase; color: var(--tinta2); }
  .as-val{ font: 700 18px var(--serif); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .as-tanca{ width:30px; height:30px; border-radius:50%; border:0; background: rgba(122,31,18,.12); color: var(--accent); display:grid; place-items:center; padding:0; cursor:pointer; }
  .as-tanca svg{ width:16px; height:16px; }
  .orloj-avis{ position:fixed; left:50%; top: calc(max(12px, env(safe-area-inset-top)) + 56px); transform: translate(-50%, -6px); z-index:55; opacity:0; pointer-events:none;
    padding: 8px 16px; border-radius:18px; background: rgba(20,14,8,.9); color:#f2d98a; font: 600 14px 'Cinzel', serif; letter-spacing:1px; transition: all .3s; text-align:center; max-width: 90vw; }
  .orloj-avis.visible{ opacity:1; transform: translate(-50%, 0); }
  .orloj-vel{ display:none; }

  /* =====================================================================
     MODE NOCTURN: el rellotge de sempre, enfosquit, i targetes fosques
     ===================================================================== */
  .mode-nit .orloj-vel{ display:block; position:fixed; inset:0; z-index:40; pointer-events:none; background: rgba(0,0,0,.5); }
  .mode-nit, .mode-nit body{ background:#050403 !important; }
  .mode-nit .t-fons, .mode-zz .t-fons{ --tinta:#e9dcc0; --tinta2:#b9a47e; --accent:#e0a85a; --ratlla: rgba(224,168,90,.22); --festiu:#a8402a; --festiu-txt:#fff1dc; --cs:#d08a5a;
    background: radial-gradient(ellipse at 50% 0%, rgba(212,175,55,.08), transparent 65%), linear-gradient(180deg, #17110b, #0b0805) !important; box-shadow:none; }
  .mode-nit .orloj-menu-idioma, .mode-nit .ara-sona{ background:#17110b; --tinta:#e9dcc0; --tinta2:#b9a47e; --accent:#e0a85a; }

  /* =====================================================================
     MODE Zz: verd fosforescent i taronja vermellós, tènues; la pantalla no s'apaga
     ===================================================================== */
  .mode-zz{ --lume: rgba(125,255,143,.62); --lume-tenue: rgba(125,255,143,.3); --brasa: rgba(255,90,31,.78); }
  .mode-zz, .mode-zz body{ background:#000 !important; }
  .mode-zz .marc{ background:#000 !important; box-shadow:none !important; border-color:transparent !important; }
  .mode-zz .disc-wrap svg *, .mode-zz .calendari-wrap svg *{ fill:none !important; stroke: var(--lume-tenue) !important; filter:none !important; }
  .mode-zz .disc-wrap svg defs *, .mode-zz .calendari-wrap svg defs *{ stroke:none !important; }
  .mode-zz .disc-wrap svg text, .mode-zz .calendari-wrap svg text{ fill: var(--lume) !important; stroke:none !important; }
  .mode-zz #lunaGranLit, .mode-zz #lunaLit{ fill: rgba(125,255,143,.26) !important; stroke: var(--lume) !important; }
  .mode-zz #busquaHora *, .mode-zz #busquaMinut *, .mode-zz #busquaHora, .mode-zz #busquaMinut{ fill: rgba(125,255,143,.45) !important; }
  .mode-zz #diaNum, .mode-zz #diaSetmanaAbrev{ fill: var(--brasa) !important; }
  .mode-zz .cara-davant, .mode-zz .cara-davant-ast{ filter:none !important; }
  .mode-zz .cos-cilindre, .mode-zz .cos-cilindre-ast, .mode-zz .cara-darrere, .mode-zz .cara-darrere-ast, .mode-zz .planeta-orbita{ display:none !important; }
  .mode-zz .orloj-cap h1{ color: var(--brasa) !important; text-shadow:none !important; }
  .mode-zz .banderolaTitol path, .mode-zz .banderolaTitol circle{ fill:#000 !important; stroke: var(--brasa) !important; filter:none !important; }
  .mode-zz .banderolaTitol text{ fill: var(--brasa) !important; text-shadow:none !important; }
  .mode-zz .orloj-boto{ background:transparent !important; border-color: var(--brasa) !important; color: var(--brasa) !important; }
  .mode-zz .roda-punts span{ background: rgba(255,90,31,.3) !important; } .mode-zz .roda-punts span.actiu{ background: var(--brasa) !important; }
  .mode-zz .t-marc{ background: rgba(255,90,31,.45) !important; padding:1.5px !important; }
  .mode-zz .t-fons{ --tinta: rgba(255,120,60,.85); --tinta2: rgba(255,120,60,.6); --accent: rgba(125,255,143,.7); --ratlla: rgba(255,90,31,.22); --festiu: rgba(255,90,31,.55); --festiu-txt:#000; --cs: rgba(255,120,60,.7);
    background:#000 !important; }
  .mode-zz .targeta{ filter:none; }
  .mode-zz .tm-icona, .mode-zz .h12 svg, .mode-zz .d5 svg, .mode-zz .sl-ic{ filter: grayscale(1) sepia(1) saturate(6) hue-rotate(-30deg) brightness(.75); }
  .mode-zz .orloj-menu-idioma, .mode-zz .ara-sona{ background:#000; border-color: var(--brasa); --tinta: rgba(255,120,60,.9); --tinta2: rgba(255,120,60,.6); --accent: rgba(125,255,143,.8); }

  @media (prefers-reduced-motion: reduce){ .full, .ll-pista, .cal-pista{ transition:none !important; } }
  @media print{ .orloj-controls, .ara-sona{ display:none; } }

  /* Sol i lluna en dues columnes; títol secundari dins d'un panell */
  .sl-graella{ display:grid; grid-template-columns: 1fr 1fr; gap: 0 18px; width:100%; flex:1; min-height:0; align-items:center; }
  .sl-col{ display:flex; flex-direction:column; align-items:stretch; min-width:0; }
  .sl-col .sl-ic{ align-self:center; margin: 2px 0; }
  .sl-col .sl-nota{ text-align:center; }
  .sl-nom{ font-family:'Cinzel', serif; font-weight:700; font-size: var(--f-etq); letter-spacing:.1em; text-transform:uppercase; color: var(--tinta2); text-align:center; }
  .t-titol-2{ margin-top: calc(14px * var(--k)); }

  /* Mentre una esfera gira, la meitat que s'acosta sobresurt uns píxels de la
     pàgina; sense això el navegador hi posa una barra de desplaçament efímera. */
  html:has(.girant), html:has(.girant) body{ overflow:hidden; }

  /* Les paraules no es tallen mai per la meitat: si no hi caben, la lletra
     s'encongeix (vegeu ajustaCaixa a roda.js). */
  .t-fons, .t-fons *{ overflow-wrap:normal; word-break:normal; hyphens:manual; -webkit-hyphens:manual; }
</style>
<link rel="manifest" href="orloj.webmanifest">
<link rel="apple-touch-icon" href="orloj-icona-180.png">
<link rel="icon" type="image/png" sizes="192x192" href="orloj-icona-192.png">
<meta name="theme-color" content="#16110c">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Orloj">
</head>
<body class="orloj-medieval">

  <div class="marc">
    <header class="orloj-cap">
          <svg class="banderolaTitol" viewBox="0 0 440 140">
            <defs>
              <linearGradient id="fustaPlaca" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9c7548"/>
                <stop offset="45%" stop-color="#7a5a35"/>
                <stop offset="100%" stop-color="#543d20"/>
              </linearGradient>
              <linearGradient id="metallPlaca" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#d8d8d8"/>
                <stop offset="45%" stop-color="#9a9a9a"/>
                <stop offset="100%" stop-color="#5c5c5c"/>
              </linearGradient>
              <radialGradient id="rebloPlaca" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#e8e8e8"/>
                <stop offset="45%" stop-color="#9a9a9a"/>
                <stop offset="100%" stop-color="#4a4a4a"/>
              </radialGradient>
              <filter id="texturaFustaPlaca" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="turbulence" baseFrequency="0.008 0.22" numOctaves="4" seed="4" result="veta"/>
                <feColorMatrix in="veta" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.6 0.6 0.6 0 0" result="vetaAlpha"/>
                <feComponentTransfer in="vetaAlpha" result="vetaSuau"><feFuncA type="linear" slope="0.45"/></feComponentTransfer>
                <feComposite in="vetaSuau" in2="SourceGraphic" operator="in" result="vetaRetallada"/>
                <feBlend in="SourceGraphic" in2="vetaRetallada" mode="multiply"/>
              </filter>
            </defs>
            <path d="M 30,4 L 410,4 A 22,22 0 0,0 432,26 L 432,114 A 22,22 0 0,0 410,136 L 30,136 A 22,22 0 0,0 8,114 L 8,26 A 22,22 0 0,0 30,4 Z"
              fill="url(#metallPlaca)" stroke="#3a3a3a" stroke-width="1.5"/>
            <path d="M 32,12 L 408,12 A 18,18 0 0,0 426,28 L 426,112 A 18,18 0 0,0 408,128 L 32,128 A 18,18 0 0,0 14,112 L 14,28 A 18,18 0 0,0 32,12 Z"
              fill="url(#fustaPlaca)" filter="url(#texturaFustaPlaca)"/>
            <g fill="url(#rebloPlaca)" stroke="#2a2a2a" stroke-width="0.5">
              <circle cx="30" cy="4" r="3.4"/><circle cx="130" cy="4" r="3.4"/><circle cx="220" cy="4" r="3.4"/><circle cx="310" cy="4" r="3.4"/><circle cx="410" cy="4" r="3.4"/>
              <circle cx="30" cy="136" r="3.4"/><circle cx="130" cy="136" r="3.4"/><circle cx="220" cy="136" r="3.4"/><circle cx="310" cy="136" r="3.4"/><circle cx="410" cy="136" r="3.4"/>
              <circle cx="8" cy="26" r="3.4"/><circle cx="8" cy="114" r="3.4"/><circle cx="432" cy="26" r="3.4"/><circle cx="432" cy="114" r="3.4"/>
            </g>
            <text x="220" y="96" text-anchor="middle" font-size="76" fill="#f2d98a"
              style="font-family:'UnifrakturMaguntia', cursive; text-shadow: 0 0 18px rgba(212,175,55,0.35), -1.5px -1.5px 0px rgba(255,250,230,0.45), 1.5px 1.5px 2px rgba(0,0,0,0.7);">Orloj</text>
          </svg>
        </header>
    <div class="contingut">
      <div class="columna-esq">
        

        <div class="disc-wrap">
          <div class="astrolabi-flip-wrap">
            <div class="astrolabi-flip" id="astrolabiFlip">
              <div class="cos-cilindre-ast" id="cosCilindreAst"></div>
              <div class="cara-davant-ast">
                <svg id="astrolabi" viewBox="0 0 600 600"></svg>
              </div>
              <div class="cara-darrere-ast"><span class="lema-gravat-ast" id="lemaAst">Astra manent,<br>sed…</span></div>
              <div class="planeta-orbita" id="planetaOrbita">
                <div class="planeta-esfera" id="planetaEsfera">
                  <svg viewBox="-16.5 -16.5 33 33" overflow="visible"></svg>
                </div>
              </div>
            </div>
          </div>
          <svg id="astrolabiExt" viewBox="0 0 600 600" style="pointer-events:none;"></svg>
        </div>
      </div>

      <div class="columna-dre">
        <div class="roda" id="roda" aria-roledescription="roda"><div class="roda-finestra"><div class="roda-pista" id="rodaPista"><section class="full full-esfera" data-full="esfera"><div class="calendari-wrap">
          <div class="calendari-flip" id="calendariFlip">
            <div class="cos-cilindre" id="cosCilindre"></div>

            <div class="cara-davant">
              <svg id="calendari" viewBox="0 0 300 300"></svg>
            </div>
            <div class="cara-darrere"><span class="lema-gravat" id="lemaCal">tempus<br>fugit…</span></div>
          </div>
        </div></section>
          <section class="full" data-full="calendari"><div class="targeta"><div class="t-marc"><div class="t-fons">
            <div class="cal-cap">
              <button type="button" class="cal-b" id="calAnt" data-i18n-aria="mesAnt">‹</button>
              <div class="cal-titol" id="calTitol" data-i18n-title="dobleToc">—</div>
              <button type="button" class="cal-b" id="calSeg" data-i18n-aria="mesSeg">›</button>
            </div>
            <div class="cal-finestra" id="calFinestra"><div class="cal-pista" id="calPista"></div></div>
            <div class="cal-etiqueta" id="calEtiqueta" role="status"></div>
          </div></div></div></section>

          <section class="full" data-full="lloc"><div class="targeta"><div class="t-marc"><div class="t-fons">
            <div class="t-titol" data-i18n="onSom">On som</div>
            <div class="l-nom" id="fLloc">—</div>
            <div class="l-regio" id="fRegio">—</div>
            <div class="t-files">
              <div class="t-fila"><span data-i18n="altitud">Altitud</span><b id="fAlt">-- m</b></div>
              <div class="t-fila"><span data-i18n="coordenades">Coordenades</span><b id="fCoord">—</b></div>
              <div class="t-fila"><span data-i18n="migdiaSolar">Migdia solar</span><b id="fMigdia">--:--</b></div>
            </div>
          </div></div></div></section>

          <section class="full" data-full="temps"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llTemps"><div class="ll-pista">
              <div class="ll-pane">
                <div class="t-titol" data-i18n="elTemps">El temps</div>
                <div class="tm-fila"><svg class="tm-icona" id="fIcona" viewBox="0 0 64 64" aria-hidden="true"></svg><div class="tm-gran" id="fTemp">--°</div></div>
                <div class="tm-desc" id="fDesc" data-i18n="esperantDades">Esperant dades…</div>
                <div class="tm-detall">
                  <div><span data-i18n="max">Màx</span><b id="fMax">--°</b></div>
                  <div><span data-i18n="min">Mín</span><b id="fMin">--°</b></div>
                  <div><span data-i18n="sensacio">Sensació</span><b id="fSens">--°</b></div>
                  <div><span data-i18n="humitat">Humitat</span><b id="fHum">--%</b></div>
                </div>
              </div>
              <div class="ll-pane">
                <div class="t-titol" data-i18n="t12">Properes hores</div>
                <div class="h12" id="fH12a"></div>
              </div>
              <div class="ll-pane">
                <div class="t-titol" data-i18n="t12">Properes hores</div>
                <div class="h12" id="fH12b"></div>
              </div>
              <div class="ll-pane">
                <div class="t-titol" data-i18n="t5">Propers 5 dies</div>
                <div class="d5" id="fD5"></div>
              </div>
            </div><div class="ll-punts"></div></div>
          </div></div></div></section>

          <section class="full full-avisos ocult" data-full="avisos" id="fullAvisos"><div class="targeta"><div class="t-marc"><div class="t-fons">
            <div class="t-titol"><span class="av-signe" aria-hidden="true">⚠</span> <span data-i18n="avisos">Avisos</span></div>
            <ul class="avisos" id="fAvisos"></ul>
          </div></div></div></section>

          <section class="full" data-full="avui"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llAvui"><div class="ll-pista">
              <div class="ll-pane">
                <div class="t-titol" data-i18n="titolAvui">Avui</div>
                <div class="av-fila">
                  <div class="av-num" id="fDiaNum">–</div>
                  <div class="av-text"><div class="av-set" id="fDiaSet">—</div><div class="av-mes" id="fMes">—</div><div class="av-any" id="fAny">—</div></div>
                </div>
                <div class="t-files">
                  <div class="t-fila"><span data-i18n="diaAnyEtq">Dia de l'any</span><b id="fDiaAny">—</b></div>
                  <div class="t-fila"><span data-i18n="llunaT">Lluna</span><b id="fFase">—</b></div>
                  <div class="t-fila"><span data-i18n="zodiac">Zodíac</span><b id="fZodiac">—</b></div>
                </div>
              </div>
              <div class="ll-pane ll-text">
                <div class="t-titol" id="fSantEtq" data-i18n="sant">Sant del dia</div>
                <div class="ef-sant" id="fSant">—</div>
                <div class="t-titol t-titol-2" data-i18n="tdc">Tal dia com avui</div>
                <div class="ef-etq" id="fCurioEtq">—</div>
                <div class="ef-text" id="fCurio">—</div>
              </div>
              <div class="ll-pane">
                <div class="t-titol" data-i18n="tsl">Sol i lluna</div>
                <div class="sl-graella">
                  <div class="sl-col"><div class="sl-nom" data-i18n="solT">Sol</div><svg class="sl-ic" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="9" fill="url(#gSolSL)" stroke="#8a5536" stroke-width="1.4"/><g stroke="#b97752" stroke-width="2.4" stroke-linecap="round"><path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2"/></g><defs><radialGradient id="gSolSL" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff0de"/><stop offset="50%" stop-color="#e3a983"/><stop offset="100%" stop-color="#9a5e3c"/></radialGradient></defs></svg>
                <div class="t-files">
                  <div class="t-fila"><span data-i18n="surt">Surt</span><b id="slSolS">--:--</b></div>
                  <div class="t-fila"><span data-i18n="pon">Es pon</span><b id="slSolP">--:--</b></div>
                </div>
                <div class="sl-nota" id="slLlum">—</div>
                <div class="sl-nota" id="slDif">—</div></div>
                  <div class="sl-col"><div class="sl-nom" data-i18n="llunaT">Lluna</div><svg class="sl-ic" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="15" fill="#5c4c32" opacity=".35"/><path id="slFase" d="" fill="#f8f0de" stroke="#8a5536" stroke-width="1"/><circle cx="24" cy="24" r="15" fill="none" stroke="#8a5536" stroke-width="1.2"/></svg>
                <div class="t-files">
                  <div class="t-fila"><span data-i18n="surt">Surt</span><b id="slLlS">--:--</b></div>
                  <div class="t-fila"><span data-i18n="pon">Es pon</span><b id="slLlP">--:--</b></div>
                </div>
                <div class="sl-nota" id="slIl">—</div>
                <div class="sl-nota" id="slProp">—</div></div>
                </div>
              </div>
            </div><div class="ll-punts"></div></div>
          </div></div></div></section>

          <section class="full" data-full="distancies"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llDist"><div class="ll-pista" id="dPista"></div><div class="ll-punts"></div></div>
          </div></div></div></section>

          <section class="full" data-full="radio"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llRadio"><div class="ll-pista" id="rPista"></div><div class="ll-punts"></div></div>
          </div></div></div></section>

          <section class="full ocult" data-full="podcasts" id="fullPodcasts"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llPod"><div class="ll-pista">
              <div class="ll-pane"><div class="t-titol">La Competència</div><div class="p-sub">RAC1 · <span data-i18n="podcasts">Podcasts</span></div><div class="p-fila" id="pCompetencia"></div></div>
              <div class="ll-pane"><div class="t-titol">Via lliure</div><div class="p-sub">RAC1 · <span data-i18n="podcasts">Podcasts</span></div><div class="p-fila" id="pVia"></div></div>
            </div><div class="ll-punts"></div></div>
          </div></div></div></section>

          <section class="full" data-full="noticies"><div class="targeta"><div class="t-marc"><div class="t-fons amb-ll">
            <div class="lliscador" id="llNot"><div class="ll-pista" id="nPista">
              <div class="ll-pane n-pane"><div class="t-titol" data-i18n="noticies">Notícies</div><div class="n-llista" id="mNoticies"></div></div>
            </div><div class="ll-punts"></div></div>
            <div class="t-peu" id="nPeu"></div>
          </div></div></div></section>
        </div></div><div class="roda-punts" id="rodaPunts" aria-hidden="true"></div></div>



      </div>
    </div>
  </div>

<div class="orloj-controls esq" role="group">
  <button type="button" class="orloj-boto boto-idioma" id="orlojBotoIdioma" aria-haspopup="true" aria-expanded="false"><span id="orlojCodiIdioma">CA</span></button>
  <button type="button" class="orloj-boto" id="orlojBotoVeu">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path class="ona1" d="M15.5 9a4 4 0 0 1 0 6"/><path class="ona2" d="M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>
  </button>
  <ul class="orloj-menu-idioma" id="orlojMenuIdioma" role="menu" hidden></ul>
</div>
<div class="orloj-controls dre" role="group">
  <button type="button" class="orloj-boto" id="orlojBotoMode">
    <svg class="ic-dia" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>
    <svg class="ic-nit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 14.5A7.5 7.5 0 0 1 9.5 4.5a7.5 7.5 0 1 0 10 10z"/></svg>
    <span class="ic-zz" aria-hidden="true">Zz</span>
  </button>
  <button type="button" class="orloj-boto" id="orlojBotoSo" aria-pressed="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 3.5c-3 0-5 2.3-5 5.3v3.4c0 1.5-.7 2.7-1.8 3.6h13.6c-1.1-.9-1.8-2.1-1.8-3.6V8.8c0-3-2-5.3-5-5.3z"/>
      <path d="M10 18.8a2.2 2.2 0 0 0 4 0"/>
      <path class="barra" d="M4 4l16 16"/>
    </svg>
  </button>
</div>
<div class="ara-sona" id="araSona" role="button" tabindex="0" hidden>
  <svg viewBox="0 0 24 24" id="icSona" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>
  <span class="as-txt"><span class="as-etq" data-i18n="araSona">Ara sona</span><span class="as-val" id="vSona">—</span></span>
  <button type="button" class="as-tanca" id="sonaTanca" data-i18n-aria="tanca"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>
</div>
<div class="orloj-avis" id="orlojAvis" role="status" aria-live="polite"></div>
<div class="orloj-vel" aria-hidden="true"></div>
<script>
window.ORLOJ_CONFIG = {"selectorTitol": ".banderolaTitol", "textDaurat": "clar", "placa": "fusta"};
(function(){
  // Configuració de cada variant (la injecta build.py abans d'aquest codi).
  const CONFIG = Object.assign({
    selectorTitol: 'h1',            // element que també desbloqueja l'àudio en prémer-lo
    textDaurat: 'original',         // 'clar' = daurat més lluminós (tema pàtina)
    placa: 'daurada'                // estil de la placa de la llegenda: 'daurada' o 'fusta'
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

  // ==================== El gruix de les esferes ====================
  // Abans eren 24 discs daurats apilats per esfera (48 capes de la mida de
  // l'esfera). A escriptori, amb esferes grans i pantalla Retina, això
  // esgotava la memòria gràfica del navegador i en girar deixava el fons en
  // blanc i les cares buides. Ara: un sol disc al mig (per l'interior) i una
  // vora feta de tires estretes al voltant, que ocupen molt poca memòria.
  function generaGruix(contenidor, classeDisc, gruix){
    if (!contenidor) return;
    const N = 72, medieval = document.body.classList.contains('orloj-medieval');
    const disc = document.createElement('div');
    disc.className = classeDisc;
    Object.assign(disc.style, { position:'absolute', inset:'0', borderRadius:'50%', transform:'translateZ(0px)' });
    contenidor.appendChild(disc);
    const tires = [];
    for (let k = 0; k < N; k++){
      const a = k * 360 / N, t = document.createElement('div');
      // llum des de dalt a l'esquerra, com el reflex de les cares
      const llum = Math.max(0, Math.cos((a - (-35)) * Math.PI / 180));
      const f = 0.35 + 0.65 * llum;
      const c = (x0, x1) => Math.round(x0 + (x1 - x0) * f);
      const col = `rgb(${c(90,246)},${c(62,206)},${c(6,110)})`, fosc = `rgb(${c(50,150)},${c(34,110)},${c(3,20)})`;
      const ombra = `linear-gradient(to bottom, ${fosc}, ${col} 45%, ${col} 55%, ${fosc})`;
      Object.assign(t.style, { position:'absolute', left:'50%', top:'50%', height: gruix + 'px',
        backfaceVisibility:'visible', pointerEvents:'none',
        background: medieval ? `linear-gradient(to bottom, rgba(0,0,0,${(0.55 - 0.4*f).toFixed(2)}), rgba(0,0,0,${(0.35 - 0.3*f).toFixed(2)})), var(--textura-patina) ${(k*7)%100}% 50% / 900% 900%` : ombra });
      contenidor.appendChild(t); tires.push([t, a]);
    }
    function situa(){
      const R = contenidor.clientWidth / 2;
      if (!R) return;
      const w = (2 * R * Math.sin(Math.PI / N) + 1.5).toFixed(2);
      tires.forEach(([t, a]) => {
        t.style.width = w + 'px';
        t.style.marginLeft = (-w / 2) + 'px'; t.style.marginTop = (-gruix / 2) + 'px';
        t.style.transform = `rotateZ(${a}deg) translateY(${(-R + 0.5).toFixed(2)}px) rotateX(90deg)`;
      });
    }
    situa();
    if (window.ResizeObserver) new ResizeObserver(situa).observe(contenidor);
    else window.addEventListener('resize', situa);
  }
  generaGruix(document.getElementById('cosCilindre'), 'capa-volum', 28);
  generaGruix(document.getElementById('cosCilindreAst'), 'capa-volum-ast', 25.2);

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
  const textosMesosEsfera = [];
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
    textosMesosEsfera.push(t);
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
  const diaSetmanaText = el('text', {id:'diaSetmanaAbrev', x:CCX, y:CCY+40, 'text-anchor':'middle', 'font-size':'15', 'font-weight':'700', 'letter-spacing':'1.6', fill:COLORS_TEXT.diaSetmana});
  calGrup.appendChild(diaSetmanaText);
  const diaText = el('text', {id:'diaNum', x:CCX, y:CCY+78, 'text-anchor':'middle', 'font-size':'40', fill:COLORS_TEXT.diaNum});
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
  // Noms sencers dels dies a l'esfera del calendari (la llengua la canvia roda.js)
  let nomsDiesEsfera = ['DIUMENGE','DILLUNS','DIMARTS','DIMECRES','DIJOUS','DIVENDRES','DISSABTE'];
  const AMPLE_MAX_DIA = 150; // dins del cel estelat, sense tocar l'anell dels mesos
  function posaNomDiaEsfera(ara){
    diaSetmanaText.removeAttribute('textLength');
    diaSetmanaText.removeAttribute('lengthAdjust');
    diaSetmanaText.textContent = nomsDiesEsfera[ara.getDay()];
    try {
      if (diaSetmanaText.getComputedTextLength() > AMPLE_MAX_DIA){
        diaSetmanaText.setAttribute('textLength', AMPLE_MAX_DIA);
        diaSetmanaText.setAttribute('lengthAdjust', 'spacingAndGlyphs');
      }
    } catch(e){}
  }
  window.__orlojEsfera = {
    llengua(mesosCurts, diesSencers){
      if (mesosCurts) textosMesosEsfera.forEach((t, i) => { t.textContent = mesosCurts[i]; });
      if (diesSencers) nomsDiesEsfera = diesSencers;
      posaNomDiaEsfera(new Date());
    }
  };
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

    // Diada: l'1 d'octubre, el revers de les dues esferes mostra un lema
    // especial en lloc del de sempre.
    const esDiada = (ara.getMonth() === 9 && diaMes === 1);
    const lemaAstEl = document.getElementById('lemaAst');
    const lemaCalEl = document.getElementById('lemaCal');
    if (lemaAstEl) lemaAstEl.innerHTML = esDiada ? 'Dia de la<br>República' : 'Astra manent,<br>sed\u2026';
    if (lemaCalEl) lemaCalEl.innerHTML = esDiada ? '1er<br>d\u2019octubre' : 'tempus<br>fugit\u2026';

    nomFaseAvui = nomFaseLunarDelDia(ara);


    // Sol al zodíac: es calcula al migdia local perquè el valor sigui el mateix tot el dia.
    const migdia = new Date(ara.getFullYear(), ara.getMonth(), ara.getDate(), 12);
    zodiGrup.setAttribute('transform', `rotate(${-angleZodiacActual(migdia)}, ${CX}, ${CY})`);

    const angleM = angleMesActual(ara);
    calGrup.setAttribute('transform', `rotate(${-angleM}, ${CCX}, ${CCY})`);
    diaText.setAttribute('transform', `rotate(${angleM}, ${CCX}, ${CCY})`);
    diaText.textContent = diaMes;
    diaSetmanaText.setAttribute('transform', `rotate(${angleM}, ${CCX}, ${CCY})`);
    posaNomDiaEsfera(ara);
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
  const SO_ENGRANATGE_B64 = "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";
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
    calendariFlipEl.addEventListener('animationend', e => {
      if (e.target !== calendariFlipEl) return;
      girEnCurs = false;
      calendariFlipEl.classList.remove('girant');
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
    if (window.__rodaEsferaVisible === false) return; // la roda mostra un altre full
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
    astrolabiFlipEl.addEventListener('animationend', e => {
      if (e.target !== astrolabiFlipEl) return;
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

  // ---------- Títol "Orloj": desbloqueja l'àudio i torna la roda a l'esfera ----------
  // Els navegadors bloquegen qualsevol so fins que l'usuari interactua directament amb la pàgina.
  const titolEl = document.querySelector(CONFIG.selectorTitol);
  if (titolEl){
    titolEl.setAttribute('role', 'button');
    titolEl.setAttribute('tabindex', '0');
    titolEl.setAttribute('aria-label', 'Orloj');
    const enPremerTitol = () => {
      const ctx = obtenirAudioCtx();
      if (ctx) carregaBufferEngranatge(ctx);
      if (window.__rodaInici) window.__rodaInici();
    };
    titolEl.addEventListener('click', enPremerTitol);
    titolEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); enPremerTitol(); } });
  }

  // ---------- Controls: so i pantalla encesa (aquesta, només en mode Zz) ----------
  const botoSo = document.getElementById('orlojBotoSo');
  const potMantenirPantalla = ('wakeLock' in navigator);

  function actualitzaControls(){
    const soOn = llegeixPref('so', 'on') === 'on';
    if (botoSo){
      const bloquejat = soOn && !audioActiu();
      const T = window.__orlojTextos || {};
      botoSo.classList.toggle('mut', !soOn);
      botoSo.classList.toggle('bloquejat', bloquejat);
      botoSo.setAttribute('aria-pressed', soOn ? 'true' : 'false');
      const etiqueta = !soOn ? (T.soOff || 'So desactivat. Toca per activar les campanades')
        : bloquejat ? (T.soBloq || 'Toca per activar el so')
        : (T.soOn || 'So activat. Toca per silenciar');
      botoSo.setAttribute('aria-label', etiqueta);
      botoSo.title = etiqueta;
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
  // Pantalla sempre encesa (Screen Wake Lock): útil si el rellotge es fa
  // servir com a rellotge de taula. El navegador l'allibera quan la pestanya
  // passa a segon pla; la tornem a demanar en tornar.
  let sentinellaPantalla = null;
  let peticioPantallaEnCurs = false;
  function prefPantallaEncesa(){
    return document.documentElement.classList.contains('mode-zz');
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
  window.__orlojPantalla = aplicaPantallaEncesa;
  window.__orlojControls = actualitzaControls;
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

  // Textos base de cada llengua, presos del rellotge República (sense basc ni portuguès)
  const I18N_BASE = {
    ca: {
      modeDia:'Mode diürn', modeNit:'Mode nocturn', modeNitFix:'Mode nocturn · pantalla sempre encesa', modeEtq:'Mode', tanca:'Tanca', midaNormal:'Mida normal',
      aniv:'Aniversari', anivSub:'Opcional · només es desa en aquest aparell', anivNom:'Nom', anivNaix:'Data de naixement', anivAny:'Any', anivDesa:'Desa', anivEsborra:'Esborra', pma:'Per molts anys', tocaPastis:'Toca el pastís per continuar', anys:'anys',
      t12:'Properes 12 hores', t5:'Propers 5 dies', tdc:'Tal dia com avui', tsl:'Sol i lluna', tfe:'Properament', sant:'Sant del dia', efem:'Efemèride', curio:'Curiositat', solT:'Sol', llunaT:'Lluna', surt:'Surt', pon:'Es pon',
      llum:(h,m)=>`${h} h ${m} min de llum`, dif:m=> m===0?'Igual que ahir': m>0?`${m} min més que ahir`:`${-m} min menys que ahir`,
      plena:n=> n===0?'Lluna plena avui': n===1?'Plena demà':`Plena d'aquí a ${n} dies`, nova:n=> n===0?'Lluna nova avui': n===1?'Nova demà':`Nova d'aquí a ${n} dies`,
      il:p=>`${p}% il·luminada`, falten:n=> n===0?'Avui': n===1?'Demà':`${n}`, diesEtq:'dies', senseDades:'Sense dades ara mateix',
      curios:["A Barcelona, el rellotge va gairebé una hora per davant del sol a l'hivern, i gairebé dues a l'estiu.","La Lluna sempre ens mostra la mateixa cara: tarda el mateix a girar sobre si mateixa que a fer la volta a la Terra.","Per culpa de les marees, el dia terrestre s'allarga uns dos mil·lisegons cada segle.","El calendari gregorià va començar el 1582: aquell any, després del 4 d'octubre va venir directament el 15.","Molts rellotges antics escriuen el 4 com a IIII i no com a IV.","La Terra és més a prop del Sol al gener que al juliol: les estacions depenen de la inclinació de l'eix, no de la distància.","La llum de la Lluna tarda poc més d'un segon a arribar-nos; la del Sol, uns vuit minuts i vint segons.","Una «lluna blava» és la segona lluna plena d'un mateix mes; passa, de mitjana, cada dos anys i mig.","De tant en tant s'afegeix un segon al temps oficial perquè els rellotges no s'avancin a la rotació de la Terra.","Les 24 hores del dia vénen de l'antic Egipte, que dividia el dia i la nit en dotze parts cadascun."],
      alMobil:"Posa-la al rellotge del mòbil", drTitol:"Alarmes al rellotge de l'iPhone", drPassos:["Obre l'app Dreceres i crea una drecera nova (+).", "Afegeix-hi l'acció «Crear alarma» i, a «Hora», tria «Entrada de la drecera».", "Posa-li el nom exacte «Alarma República» i desa-la."], drObre:"Obre Dreceres", drFeta:"Ja la tinc: crea l'alarma", drNota:"Només cal fer-ho un cop. La repetició (feiners, cap de setmana…) es tria al rellotge del mòbil.",
      alarmes:'Alarmes', alarma:'Alarma', aturaAl:'Atura', posposa:'5 min més', repet:['Cada dia','Feiners','Cap de setmana','Un cop'], alPeu:"Sonen amb l'app oberta", alPropera:(d,h)=>`Propera: ${d} a les ${h}`, alCap:'Cap alarma activa', alActiva:'Activa',
      mesAnt:'Mes anterior', mesSeg:'Mes següent', campanades:'Campanades de les hores i els quarts', girar:"Rellotge: prem per girar l'esfera", condicions:'Condicions actuals', calInfo:'Calendari i informació', dobleToc:'Doble toc: tornar al mes actual',
      radio:'Ràdio', podcasts:'Podcasts', noticies:'Notícies', araSona:'Ara sona', directe:'en directe', carregant:'Carregant…',
      errNoticies:"No s'han pogut carregar les notícies.", errProgrames:"No s'han pogut carregar els programes.", obreWeb:'Obre el web',
      actualitzat:h=>`actualitzat a les ${h}`, toastRadio:n=>`${n} no respon ara. Torna-la a tocar per obrir-ne el web.`, toastPodcast:'Aquest programa no es pot reproduir ara.',
      nom:'Català', veu:'ca-ES',
      mesos:['gener','febrer','març','abril','maig','juny','juliol','agost','setembre','octubre','novembre','desembre'],
      dies:['diumenge','dilluns','dimarts','dimecres','dijous','divendres','dissabte'],
      curts:['Dl','Dt','Dc','Dj','Dv','Ds','Dg'],
      deMes: m => (/^[aeiouà]/.test(m) ? "d'" : 'de ') + m,
      data: (ds, d, mes, a) => `${ds}, ${d} ${/^[aeiouà]/.test(mes) ? "d'" : 'de '}${mes} de ${a}`,
      poblacio:'Població', avis:'Avís', temperatura:'Temperatura', humitat:'Humitat', sensacio:'Sensació', pluja6:'Pluja · 6 h', altitud:'Altitud',
      capSetmana:'Cap de setmana', festiu:'Festiu', avui:'Avui',
      elTemps:'El temps', titolAvui:'Avui', onSom:'On som', avisos:'Avisos', max:'Màx', min:'Mín', coordenades:'Coordenades',
      esperantDades:'Esperant dades…', esperantPrev:'Esperant la previsió…', capAvis:'Cap avís per a les properes hores', avisosPeu:'Segons la previsió per a les properes hores',
      tocaEsfera:"Toca l'esfera", republica:'Dia de la República',
      diaAny:(n,s) => `Dia ${n} de l'any · Setmana ${s}`, sol:(a,p) => `Sortida del sol ${a} · Posta ${p}`,
      fases:['Lluna nova','Lluna creixent','Quart creixent','Gibosa creixent','Lluna plena','Gibosa minvant','Quart minvant','Lluna minvant'],
      cel:['Cel serè','Gairebé serè','Parcialment ennuvolat','Cel cobert','Boira','Boira gebradora','Plugim feble','Plugim','Plugim intens','Plugim gelat','Plugim gelat','Pluja feble','Pluja','Pluja forta','Pluja gelada','Pluja gelada','Neu feble','Neu','Neu forta','Neu granulada','Ruixats febles','Ruixats','Ruixats forts','Ruixats de neu','Ruixats de neu','Tempesta','Tempesta amb calamarsa','Tempesta amb calamarsa'],
      a:{ tempesta:'Risc de tempesta a les properes hores', pluja:p=>`Pluja probable (${p}%) en 6 hores: agafa el paraigua`, ventFort:v=>`Vent fort: ratxes de fins a ${v} km/h`, ratxes:v=>`Ratxes de vent de fins a ${v} km/h`,
          calorInt:t=>`Calor intensa: màxima de ${t}`, calor:t=>`Fa calor: màxima de ${t}`, glacada:t=>`Glaçada: mínima de ${t}`, fred:t=>`Fred: mínima de ${t}`,
          uvMolt:u=>`Índex UV molt alt (${u}): protegeix-te del sol`, uv:u=>`Índex UV alt (${u}): protecció solar`, boira:'Boira: visibilitat reduïda',
          avuiFestiu:n=>`Avui és festiu: ${n}`, demaFestiu:n=>`Demà és festiu: ${n}` },
      x:{ tempesta:'Tempesta', pluja:'Pluja forta', vent:v=>`Vent ${v} km/h`, neu:'Neu', glac:'Glaç' },
      parla:'Digues l\'hora', idioma:'Llengua',
      // Hora a la manera tradicional catalana, amb quarts: «un quart de deu», «dos quarts i cinc de vuit»,
      // «falten cinc minuts per a tres quarts de nou», «són les set en punt»...
      hora:(h,m) => {
        const NOMS = ['dotze','una','dues','tres','quatre','cinc','sis','set','vuit','nou','deu','onze'];
        const QUARTS = ['','un quart','dos quarts','tres quarts'];
        const franja = h24 => { h24 = (h24+24)%24; return h24===0 ? 'de la nit' : h24<6 ? 'de la matinada' : h24<12 ? 'del matí' : h24<15 ? 'del migdia' : h24<20 ? 'de la tarda' : h24<22 ? 'del vespre' : 'de la nit'; };
        const nom = h24 => NOMS[((h24%12)+12)%12];
        const lesN = h24 => (((h24%12)+12)%12)===1 ? 'la una' : 'les ' + nom(h24);   // la una / les set
        const deN  = h24 => { const n = nom(h24); return /^[aeiou]/.test(n) ? "d'" + n : 'de ' + n; }; // d'una, d'onze, de vuit
        const verb = h24 => (((h24%12)+12)%12)===1 ? 'És' : 'Són';
        const minuts = n => n===1 ? '1 minut' : `${n} minuts`;
        const q = Math.floor(m/15), r = m%15, seg = h+1;
        // punt exacte d'un quart
        if (r===0){
          if (q===0) return `${verb(h)} ${lesN(h)} en punt ${franja(h)}`;
          return `${q===1 ? 'És' : 'Són'} ${QUARTS[q]} ${deN(seg)} ${franja(seg)}`;
        }
        // primera meitat del quart: «i cinc»
        if (r<=7){
          if (q===0) return `${verb(h)} ${lesN(h)} i ${r} ${franja(h)}`;
          return `${q===1 ? 'És' : 'Són'} ${QUARTS[q]} i ${r} ${deN(seg)} ${franja(seg)}`;
        }
        // segona meitat: «falten X minuts per a...»
        const falten = 15 - r, qn = q+1;
        if (qn===4) return `Falten ${minuts(falten)} per a ${lesN(seg)} ${franja(seg)}`;
        return `Falten ${minuts(falten)} per a ${QUARTS[qn]} ${deN(seg)} ${franja(seg)}`;
      }
    },
    oc: {
      modeDia:'Mòde de dia', modeNit:'Mòde de nuet', modeNitFix:'Mòde de nuet · pantalha tostemp alugada', modeEtq:'Mòde', tanca:'Barra', midaNormal:'Mida normau',
      aniv:'Anniversari', anivSub:'Opcionau · sonque se guarde en aguest aparelh', anivNom:'Nòm', anivNaix:'Data de naishença', anivAny:'An', anivDesa:'Enregistra', anivEsborra:'Esborra', pma:'Bon anniversari', tocaPastis:'Toca eth pastís entà contunhar', anys:'ans',
      t12:'Es 12 ores que vien', t5:'Es 5 dies que vien', tdc:'Un dia com uei', tsl:'Solei e lua', tfe:'Lèu', sant:'Sant deth dia', efem:'Efemèride', curio:'Curiositat', solT:'Solei', llunaT:'Lua', surt:'Gess', pon:'Se pon',
      llum:(h,m)=>`${h} h ${m} min de lum`, dif:m=> m===0?"Parièr qu'ager": m>0?`${m} min mès qu'ager`:`${-m} min mens qu'ager`,
      plena:n=> n===0?'Lua plea uei': n===1?'Plea deman':`Plea d'aciu a ${n} dies`, nova:n=> n===0?'Lua nava uei': n===1?'Nava deman':`Nava d'aciu a ${n} dies`,
      il:p=>`${p}% iluminada`, falten:n=> n===0?'Uei': n===1?'Deman':`${n}`, diesEtq:'dies', senseDades:'Sense donades ara',
      curios:["A Barcelona, eth relòtge va quasi ua ora per dauant deth solei er iuèrn, e quasi dues er estiu.","Era Lua mos mòstre tostemp era madeisha cara: tarde eth madeish temps a virar sus era que a hèr eth torn dera Tèrra.","Per mor des marèes, eth dia terrèstre s'alonge un parelh de milisegons cada sègle.","Eth calendari gregorian comencèc en 1582: aqueth an, dempús deth 4 d'octòbre vengue dirèctament eth 15.","Fòrça relòtges antics escriuen eth 4 coma IIII e non coma IV.","Era Tèrra ei mès a prèp deth Solei en gèr qu'en julhet: es sasons depenen dera inclinacion der aishèu, non dera distància.","Era lum dera Lua tarde pòc mès d'un segon a arribar-mos; era deth Solei, uns ueit minuts e vint segons.","Ua «lua blava» ei era dusau lua plea d'un madeish mes; arribe, de mejana, cada dus ans e mieg.","De quan en quan s'ajuste un segon ath temps oficiau entà qu'es relòtges non s'avancen ara rotacion dera Tèrra.","Es 24 ores deth dia vien der Egipte antic, que dividie eth dia e era nuet en dotze parts cada un."],
      alMobil:"Botar-la en relòtge deth mobil", drTitol:"Alarmes en relòtge der iPhone", drPassos:["Daurís era aplicacion Dreceres e cree ua drecera naua (+).", "Ajusta-i era accion «Crear alarma» e, en «Ora», tria «Entrada dera drecera».", "Botar-li eth nòm exacte «Alarma República» e guarda-la."], drObre:"Daurís Dreceres", drFeta:"Ja la è: crea era alarma", drNota:"Sonque cau hèr-ho un còp. Era repeticion se tria en relòtge deth mobil.",
      alarmes:'Alarmes', alarma:'Alarma', aturaAl:'Arrèsta', posposa:'5 min mès', repet:['Cada dia','Dies de trabalh','Fin de setmana','Un còp'], alPeu:'Sonen damb era aplicacion dubèrta', alPropera:(d,h)=>`Seguenta: ${d} a ${h}`, alCap:"Cap d'alarma activa", alActiva:'Activa',
      mesAnt:'Mes anterior', mesSeg:'Mes seguent', campanades:'Campanades des ores e des quarts', girar:'Relòtge: tòca entà virar era esfèra', condicions:'Condicions actuaus', calInfo:'Calendari e informacion', dobleToc:'Dobla tòca: tornar ath mes actuau',
      radio:'Ràdio', podcasts:'Podcasts', noticies:'Actualitat', araSona:'Ara sone', directe:'en dirècte', carregant:'Cargant…',
      errNoticies:"Non s'an podut cargar es notícies.", errProgrames:"Non s'an podut cargar es programes.", obreWeb:'Dubrir eth web',
      actualitzat:h=>`actualizat a ${h}`, toastRadio:n=>`${n} non respon ara. Tòca-la un aute còp entà dubrir eth sòn web.`, toastPodcast:'Aguest programa non se pòt escotar ara.',
      nom:'Aranés', veu:'oc-ES', reserva:['ca','fr','es'], nums:'ca-ES', geo:'ca',
      mesos:['gèr','hereuèr','març','abriu','mai','junh','julhet','agost','seteme','octòbre','noveme','deseme'],
      dies:['dimenge','deluns','dimars','dimèrcles','dijaus','diuendres','dissabte'],
      curts:['Dl','Dm','Dc','Dj','Dv','Ds','Dg'],
      deMes: m => (/^[aeiouàèòáéíóú]/.test(m) ? "d'" : 'de ') + m,
      data: (ds, d, mes, a) => `${ds}, ${d} ${/^[aeiouàèòáéíóú]/.test(mes) ? "d'" : 'de '}${mes} de ${a}`,
      poblacio:'Pòble', avis:'Avís', temperatura:'Temperatura', humitat:'Umiditat', sensacio:'Sensacion', pluja6:'Ploja · 6 h', altitud:'Altitud',
      capSetmana:'Fin de setmana', festiu:'Hèsta', avui:'Uei',
      elTemps:'Eth temps', titolAvui:'Uei', onSom:'A on èm', avisos:'Avisi', max:'Màx', min:'Mín', coordenades:'Coordenades',
      esperantDades:'Demorant donades…', esperantPrev:'Demorant era prevision…', capAvis:"Cap d'avís entàs ores que vien", avisosPeu:'Segontes era prevision entàs ores que vien',
      tocaEsfera:'Tòca era esfèra', republica:'Dia dera Republica',
      diaAny:(n,s) => `Dia ${n} der an · Setmana ${s}`, sol:(a,p) => `Gessuda deth solei ${a} · Pòsta ${p}`,
      fases:['Lua nava','Lua creishenta','Quart creishent','Gibosa creishenta','Lua plea','Gibosa minvanta','Quart minvant','Lua minvanta'],
      cel:['Cèu seren','Quasi seren','Parciaument ennivolat','Cèu cubèrt','Bromassa','Bromassa gelada','Plovina leugèra','Plovina','Plovina fòrta','Plovina gelada','Plovina gelada','Ploja leugèra','Ploja','Ploja fòrta','Ploja gelada','Ploja gelada','Nhèu leugèra','Nhèu','Nhèu fòrta','Nhèu granulada','Plojades leugères','Plojades','Plojades fòrtes','Plojades de nhèu','Plojades de nhèu','Tempèsta','Tempèsta damb pedregada','Tempèsta damb pedregada'],
      a:{ tempesta:'Risc de tempèsta enes ores que vien', pluja:p=>`Ploja probabla (${p}%) en 6 ores: prèn eth paraploja`, ventFort:v=>`Vent fòrt: rufades enquia ${v} km/h`, ratxes:v=>`Rufades de vent enquia ${v} km/h`,
          calorInt:t=>`Calor intensa: maximau de ${t}`, calor:t=>`Hè calor: maximau de ${t}`, glacada:t=>`Gelada: minimau de ${t}`, fred:t=>`Hred: minimau de ${t}`,
          uvMolt:u=>`Indici UV fòrça naut (${u}): protegís-te deth solei`, uv:u=>`Indici UV naut (${u}): proteccion solara`, boira:'Bromassa: visibilitat redusida',
          avuiFestiu:n=>`Uei ei hèsta: ${n}`, demaFestiu:n=>`Deman ei hèsta: ${n}` },
      x:{ tempesta:'Tempèsta', pluja:'Ploja fòrta', vent:v=>`Vent ${v} km/h`, neu:'Nhèu', glac:'Glaç' },
      parla:'Di-me era ora', idioma:'Lengua',
      // «Son es dètz e quart», «Ei era ua e mieja», «Son es onze mens quart»
      hora:(h,m) => {
        const NOMS = ['dotze','ua','dues','tres','quate','cinc','sies','sèt','ueit','nau','dètz','onze'];
        const franja = x => { x = (x+24)%24; return x<6 ? 'dera nuet' : x<12 ? 'deth maitin' : x<15 ? 'de meddia' : x<20 ? 'dera tarde' : 'dera nuet'; };
        const es = x => (((x%12)+12)%12)===1 ? 'Ei era ua' : `Son es ${NOMS[((x%12)+12)%12]}`;
        if (m===0) return `${es(h)} en punt ${franja(h)}`;
        if (m<=30){ const r = m===15 ? 'quart' : m===30 ? 'mieja' : m; return `${es(h)} e ${r} ${franja(h)}`; }
        const f = 60-m, r = f===15 ? 'quart' : f;
        return `${es(h+1)} mens ${r} ${franja(h+1)}`;
      }
    },
    gl: {
      modeDia:'Modo diúrno', modeNit:'Modo nocturno', modeNitFix:'Modo nocturno · pantalla sempre acesa', modeEtq:'Modo', tanca:'Pechar', midaNormal:'Tamaño normal',
      aniv:'Aniversario', anivSub:'Opcional · só se garda neste dispositivo', anivNom:'Nome', anivNaix:'Data de nacemento', anivAny:'Ano', anivDesa:'Gardar', anivEsborra:'Borrar', pma:'Parabéns', tocaPastis:'Toca o bolo para continuar', anys:'anos',
      t12:'Próximas 12 horas', t5:'Próximos 5 días', tdc:'Tal día coma hoxe', tsl:'Sol e lúa', tfe:'Proximamente', sant:'Santo do día', efem:'Efeméride', curio:'Curiosidade', solT:'Sol', llunaT:'Lúa', surt:'Sae', pon:'Ponse',
      llum:(h,m)=>`${h} h ${m} min de luz`, dif:m=> m===0?'Igual ca onte': m>0?`${m} min máis ca onte`:`${-m} min menos ca onte`,
      plena:n=> n===0?'Lúa chea hoxe': n===1?'Chea mañá':`Chea en ${n} días`, nova:n=> n===0?'Lúa nova hoxe': n===1?'Nova mañá':`Nova en ${n} días`,
      il:p=>`${p}% iluminada`, falten:n=> n===0?'Hoxe': n===1?'Mañá':`${n}`, diesEtq:'días', senseDades:'Sen datos agora',
      curios:["En Galicia, o reloxo vai hora e media por diante do sol no inverno, e dúas horas e media no verán.","A Lúa sempre nos amosa a mesma cara: tarda o mesmo en xirar sobre si que en dar a volta á Terra.","Por culpa das mareas, o día terrestre alóngase uns dous milisegundos cada século.","O calendario gregoriano comezou en 1582: aquel ano, despois do 4 de outubro veu directamente o 15.","Moitos reloxos antigos escriben o 4 como IIII e non como IV.","A Terra está máis preto do Sol en xaneiro ca en xullo: as estacións dependen da inclinación do eixe, non da distancia.","A luz da Lúa tarda pouco máis dun segundo en chegarnos; a do Sol, uns oito minutos e vinte segundos.","Unha «lúa azul» é a segunda lúa chea dun mesmo mes; pasa, de media, cada dous anos e medio.","De cando en vez engádese un segundo á hora oficial para que os reloxos non se adianten á rotación da Terra.","As 24 horas do día veñen do antigo Exipto, que dividía o día e a noite en doce partes cada un."],
      alMobil:"Pola no reloxo do móbil", drTitol:"Alarmas no reloxo do iPhone", drPassos:["Abre a app Atallos e crea un atallo novo (+).", "Engade a acción «Crear alarma» e, en «Hora», escolle «Entrada do atallo».", "Ponlle o nome exacto «Alarma República» e gárdao."], drObre:"Abrir Atallos", drFeta:"Xa o teño: crear a alarma", drNota:"Só cómpre facelo unha vez. A repetición escóllese no reloxo do móbil.",
      alarmes:'Alarmas', alarma:'Alarma', aturaAl:'Parar', posposa:'5 min máis', repet:['Todos os días','Laborables','Fin de semana','Unha vez'], alPeu:'Soan coa app aberta', alPropera:(d,h)=>`Seguinte: ${d} ás ${h}`, alCap:'Ningunha alarma activa', alActiva:'Activa',
      mesAnt:'Mes anterior', mesSeg:'Mes seguinte', campanades:'Badaladas das horas e dos cuartos', girar:'Reloxo: preme para xirar a esfera', condicions:'Condicións actuais', calInfo:'Calendario e información', dobleToc:'Dobre toque: volver ao mes actual',
      radio:'Radio', podcasts:'Podcasts', noticies:'Novas', araSona:'Agora soa', directe:'en directo', carregant:'Cargando…',
      errNoticies:'Non se puideron cargar as novas.', errProgrames:'Non se puideron cargar os programas.', obreWeb:'Abrir a web',
      actualitzat:h=>`actualizado ás ${h}`, toastRadio:n=>`${n} non responde agora. Tócaa de novo para abrir a súa web.`, toastPodcast:'Este programa non se pode reproducir agora.',
      nom:'Galego', veu:'gl-ES', reserva:['es','pt'],
      mesos:['xaneiro','febreiro','marzo','abril','maio','xuño','xullo','agosto','setembro','outubro','novembro','decembro'],
      dies:['domingo','luns','martes','mércores','xoves','venres','sábado'],
      curts:['Lu','Ma','Mé','Xo','Ve','Sá','Do'],
      deMes: m => 'de ' + m,
      data: (ds, d, mes, a) => `${ds}, ${d} de ${mes} de ${a}`,
      poblacio:'Localidade', avis:'Aviso', temperatura:'Temperatura', humitat:'Humidade', sensacio:'Sensación', pluja6:'Choiva · 6 h', altitud:'Altitude',
      capSetmana:'Fin de semana', festiu:'Festivo', avui:'Hoxe',
      elTemps:'O tempo', titolAvui:'Hoxe', onSom:'Onde estamos', avisos:'Avisos', max:'Máx', min:'Mín', coordenades:'Coordenadas',
      esperantDades:'Agardando datos…', esperantPrev:'Agardando a previsión…', capAvis:'Sen avisos para as próximas horas', avisosPeu:'Segundo a previsión para as próximas horas',
      tocaEsfera:'Toca a esfera', republica:'Día da República',
      diaAny:(n,s) => `Día ${n} do ano · Semana ${s}`, sol:(a,p) => `Saída do sol ${a} · Solpor ${p}`,
      fases:['Lúa nova','Lúa crecente','Cuarto crecente','Crecente xibosa','Lúa chea','Minguante xibosa','Cuarto minguante','Lúa minguante'],
      cel:['Ceo despexado','Case despexado','Parcialmente anubrado','Cuberto','Néboa','Néboa xeada','Babuxa feble','Babuxa','Babuxa intensa','Babuxa xeada','Babuxa xeada','Choiva feble','Choiva','Choiva forte','Choiva xeada','Choiva xeada','Neve feble','Neve','Neve forte','Neve granulada','Chuvascos febles','Chuvascos','Chuvascos fortes','Chuvascos de neve','Chuvascos de neve','Treboada','Treboada con sarabia','Treboada con sarabia'],
      a:{ tempesta:'Risco de treboada nas próximas horas', pluja:p=>`Choiva probable (${p}%) en 6 horas: colle o paraugas`, ventFort:v=>`Vento forte: refachos de ata ${v} km/h`, ratxes:v=>`Refachos de vento de ata ${v} km/h`,
          calorInt:t=>`Calor intensa: máxima de ${t}`, calor:t=>`Vai calor: máxima de ${t}`, glacada:t=>`Xeada: mínima de ${t}`, fred:t=>`Frío: mínima de ${t}`,
          uvMolt:u=>`Índice UV moi alto (${u}): protéxete do sol`, uv:u=>`Índice UV alto (${u}): protección solar`, boira:'Néboa: visibilidade reducida',
          avuiFestiu:n=>`Hoxe é festivo: ${n}`, demaFestiu:n=>`Mañá é festivo: ${n}` },
      x:{ tempesta:'Treboada', pluja:'Choiva forte', vent:v=>`Vento ${v} km/h`, neu:'Neve', glac:'Xeo' },
      parla:'Dime a hora', idioma:'Lingua',
      // «Son as dez e cuarto», «É a unha e media», «Son as once menos cuarto»
      hora:(h,m) => {
        const NOMES = ['doce','unha','dúas','tres','catro','cinco','seis','sete','oito','nove','dez','once'];
        const franxa = x => { x = (x+24)%24; return x===0 ? 'da noite' : x<6 ? 'da madrugada' : x<12 ? 'da mañá' : x<13 ? 'do mediodía' : x<21 ? 'da tarde' : 'da noite'; };
        const as = x => (((x%12)+12)%12)===1 ? 'É a unha' : `Son as ${NOMES[((x%12)+12)%12]}`;
        if (m===0) return `${as(h)} en punto ${franxa(h)}`;
        if (m<=30){ const r = m===15 ? 'cuarto' : m===30 ? 'media' : m; return `${as(h)} e ${r} ${franxa(h)}`; }
        const f = 60-m, r = f===15 ? 'cuarto' : f;
        return `${as(h+1)} menos ${r} ${franxa(h+1)}`;
      }
    },
    fr: {
      modeDia:'Mode jour', modeNit:'Mode nuit', modeNitFix:'Mode nuit · écran toujours allumé', modeEtq:'Mode', tanca:'Fermer', midaNormal:'Taille normale',
      aniv:'Anniversaire', anivSub:'Facultatif · enregistré uniquement sur cet appareil', anivNom:'Prénom', anivNaix:'Date de naissance', anivAny:'Année', anivDesa:'Enregistrer', anivEsborra:'Effacer', pma:'Joyeux anniversaire', tocaPastis:'Touchez le gâteau pour continuer', anys:'ans',
      t12:'Les 12 prochaines heures', t5:'Les 5 prochains jours', tdc:"Un jour comme aujourd'hui", tsl:'Soleil et lune', tfe:'Prochainement', sant:'Saint du jour', efem:'Éphéméride', curio:'Curiosité', solT:'Soleil', llunaT:'Lune', surt:'Lever', pon:'Coucher',
      llum:(h,m)=>`${h} h ${m} min de jour`, dif:m=> m===0?'Comme hier': m>0?`${m} min de plus qu'hier`:`${-m} min de moins qu'hier`,
      plena:n=> n===0?"Pleine lune aujourd'hui": n===1?'Pleine lune demain':`Pleine lune dans ${n} jours`, nova:n=> n===0?"Nouvelle lune aujourd'hui": n===1?'Nouvelle lune demain':`Nouvelle lune dans ${n} jours`,
      il:p=>`${p} % éclairée`, falten:n=> n===0?"Aujourd'hui": n===1?'Demain':`${n}`, diesEtq:'jours', senseDades:'Pas de données pour le moment',
      curios:["À Barcelone, l'horloge avance de presque une heure sur le soleil en hiver, et de presque deux en été.","La Lune nous montre toujours la même face : elle met autant de temps à tourner sur elle-même qu'à faire le tour de la Terre.","À cause des marées, le jour terrestre s'allonge d'environ deux millisecondes par siècle.","Le calendrier grégorien a commencé en 1582 : cette année-là, le 4 octobre fut directement suivi du 15.","Beaucoup d'horloges anciennes écrivent le 4 IIII et non IV.","La Terre est plus proche du Soleil en janvier qu'en juillet : les saisons dépendent de l'inclinaison de l'axe, pas de la distance.","La lumière de la Lune met un peu plus d'une seconde à nous parvenir ; celle du Soleil, environ huit minutes et vingt secondes.","Une « lune bleue » est la deuxième pleine lune d'un même mois ; cela arrive en moyenne tous les deux ans et demi.","De temps en temps, on ajoute une seconde à l'heure officielle pour que les horloges ne devancent pas la rotation de la Terre.","Les 24 heures du jour viennent de l'Égypte ancienne, qui divisait le jour et la nuit en douze parties chacun."],
      alMobil:"L'ajouter à l'horloge du téléphone", drTitol:"Alarmes dans l'horloge de l'iPhone", drPassos:["Ouvrez l'app Raccourcis et créez un nouveau raccourci (+).", "Ajoutez l'action « Créer une alarme » et, pour « Heure », choisissez « Entrée du raccourci ».", "Nommez-le exactement « Alarma República » et enregistrez-le."], drObre:"Ouvrir Raccourcis", drFeta:"C'est fait : créer l'alarme", drNota:"À faire une seule fois. La répétition se règle dans l'horloge du téléphone.",
      alarmes:'Alarmes', alarma:'Alarme', aturaAl:'Arrêter', posposa:'5 min de plus', repet:['Tous les jours','En semaine','Le week-end','Une fois'], alPeu:"Elles sonnent quand l'app est ouverte", alPropera:(d,h)=>`Prochaine : ${d} à ${h}`, alCap:'Aucune alarme active', alActiva:'Active',
      mesAnt:'Mois précédent', mesSeg:'Mois suivant', campanades:'Carillon des heures et des quarts', girar:'Horloge : touchez pour tourner le cadran', condicions:'Conditions actuelles', calInfo:'Calendrier et informations', dobleToc:'Double touche : revenir au mois en cours',
      radio:'Radio', podcasts:'Podcasts', noticies:'Actualités', araSona:'En écoute', directe:'en direct', carregant:'Chargement…',
      errNoticies:'Impossible de charger les actualités.', errProgrames:'Impossible de charger les émissions.', obreWeb:'Ouvrir le site',
      actualitzat:h=>`mis à jour à ${h}`, toastRadio:n=>`${n} ne répond pas. Touchez-la de nouveau pour ouvrir son site.`, toastPodcast:'Cette émission ne peut pas être lue pour le moment.',
      nom:'Français', veu:'fr-FR',
      mesos:['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'],
      dies:['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'],
      curts:['Lu','Ma','Me','Je','Ve','Sa','Di'],
      deMes: m => m,
      data: (ds, d, mes, a) => `${ds} ${d === 1 ? '1er' : d} ${mes} ${a}`,
      poblacio:'Localité', avis:'Alerte', temperatura:'Température', humitat:'Humidité', sensacio:'Ressenti', pluja6:'Pluie · 6 h', altitud:'Altitude',
      capSetmana:'Week-end', festiu:'Férié', avui:"Aujourd'hui",
      elTemps:'La météo', titolAvui:"Aujourd'hui", onSom:'Où sommes-nous', avisos:'Alertes', max:'Max', min:'Min', coordenades:'Coordonnées',
      esperantDades:'En attente des données…', esperantPrev:'En attente des prévisions…', capAvis:'Aucune alerte pour les prochaines heures', avisosPeu:'Selon les prévisions des prochaines heures',
      tocaEsfera:'Touchez le cadran', republica:'Jour de la République',
      diaAny:(n,s) => `${n}e jour de l'année · Semaine ${s}`, sol:(a,p) => `Lever du soleil ${a} · Coucher ${p}`,
      fases:['Nouvelle lune','Premier croissant','Premier quartier','Gibbeuse croissante','Pleine lune','Gibbeuse décroissante','Dernier quartier','Dernier croissant'],
      cel:['Ciel dégagé','Peu nuageux','Partiellement nuageux','Couvert','Brouillard','Brouillard givrant','Bruine légère','Bruine','Bruine dense','Bruine verglaçante','Bruine verglaçante','Pluie faible','Pluie','Forte pluie','Pluie verglaçante','Pluie verglaçante','Neige faible','Neige','Forte neige','Grésil','Averses faibles','Averses','Fortes averses','Averses de neige','Averses de neige','Orage','Orage avec grêle','Orage avec grêle'],
      a:{ tempesta:'Risque d\'orage dans les prochaines heures', pluja:p=>`Pluie probable (${p} %) dans les 6 heures : prenez un parapluie`, ventFort:v=>`Vent fort : rafales jusqu'à ${v} km/h`, ratxes:v=>`Rafales de vent jusqu'à ${v} km/h`,
          calorInt:t=>`Forte chaleur : maximale de ${t}`, calor:t=>`Il fait chaud : maximale de ${t}`, glacada:t=>`Gel : minimale de ${t}`, fred:t=>`Froid : minimale de ${t}`,
          uvMolt:u=>`Indice UV très élevé (${u}) : protégez-vous du soleil`, uv:u=>`Indice UV élevé (${u}) : protection solaire`, boira:'Brouillard : visibilité réduite',
          avuiFestiu:n=>`Aujourd'hui est férié : ${n}`, demaFestiu:n=>`Demain est férié : ${n}` },
      x:{ tempesta:'Orage', pluja:'Forte pluie', vent:v=>`Vent ${v} km/h`, neu:'Neige', glac:'Verglas' },
      parla:"Dire l'heure", idioma:'Langue',
      hora:(h,m) => {
        if (h===0 && m===0) return 'Il est minuit';
        if (h===12 && m===0) return 'Il est midi';
        const hh = h===0 ? 'minuit' : h===12 ? 'midi' : `${h} heure${h>1?'s':''}`;
        return m===0 ? `Il est ${hh} pile` : `Il est ${hh} ${m}`;
      }
    },
    en: {
      modeDia:'Day mode', modeNit:'Night mode', modeNitFix:'Night mode · screen always on', modeEtq:'Mode', tanca:'Close', midaNormal:'Normal size',
      aniv:'Birthday', anivSub:'Optional · saved only on this device', anivNom:'Name', anivNaix:'Date of birth', anivAny:'Year', anivDesa:'Save', anivEsborra:'Delete', pma:'Happy birthday', tocaPastis:'Tap the cake to continue', anys:'years',
      t12:'Next 12 hours', t5:'Next 5 days', tdc:'On this day', tsl:'Sun and moon', tfe:'Coming up', sant:'Saint of the day', efem:'On this day', curio:'Did you know?', solT:'Sun', llunaT:'Moon', surt:'Rise', pon:'Set',
      llum:(h,m)=>`${h} h ${m} min of daylight`, dif:m=> m===0?'Same as yesterday': m>0?`${m} min more than yesterday`:`${-m} min less than yesterday`,
      plena:n=> n===0?'Full moon today': n===1?'Full moon tomorrow':`Full moon in ${n} days`, nova:n=> n===0?'New moon today': n===1?'New moon tomorrow':`New moon in ${n} days`,
      il:p=>`${p}% illuminated`, falten:n=> n===0?'Today': n===1?'Tomorrow':`${n}`, diesEtq:'days', senseDades:'No data right now',
      curios:["In Barcelona, clocks run almost an hour ahead of the sun in winter, and almost two in summer.","The Moon always shows us the same face: it takes as long to spin on its axis as to orbit the Earth.","Because of the tides, the Earth's day grows about two milliseconds longer every century.","The Gregorian calendar began in 1582: that year, 4 October was followed directly by the 15th.","Many old clocks write the number 4 as IIII rather than IV.","The Earth is closer to the Sun in January than in July: seasons depend on the tilt of its axis, not on distance.","Moonlight takes just over a second to reach us; sunlight, about eight minutes and twenty seconds.","A 'blue moon' is the second full moon in the same month; on average it happens every two and a half years.","Now and then a leap second is added to official time so clocks don't run ahead of the Earth's rotation.","The 24-hour day comes from ancient Egypt, which divided both day and night into twelve parts."],
      alMobil:"Add it to the phone's clock", drTitol:"Alarms in the iPhone Clock", drPassos:["Open the Shortcuts app and create a new shortcut (+).", "Add the “Create Alarm” action and set “Time” to “Shortcut Input”.", "Name it exactly “Alarma República” and save it."], drObre:"Open Shortcuts", drFeta:"Done: create the alarm", drNota:"You only need to do this once. Repeat days are set in the phone's Clock.",
      alarmes:'Alarms', alarma:'Alarm', aturaAl:'Stop', posposa:'5 more min', repet:['Every day','Weekdays','Weekends','Once'], alPeu:'They ring while the app is open', alPropera:(d,h)=>`Next: ${d} at ${h}`, alCap:'No alarm set', alActiva:'On',
      mesAnt:'Previous month', mesSeg:'Next month', campanades:'Hour and quarter chimes', girar:'Clock: tap to turn the dial', condicions:'Current conditions', calInfo:'Calendar and information', dobleToc:'Double tap: back to the current month',
      radio:'Radio', podcasts:'Podcasts', noticies:'News', araSona:'Now playing', directe:'live', carregant:'Loading…',
      errNoticies:"Couldn't load the news.", errProgrames:"Couldn't load the shows.", obreWeb:'Open website',
      actualitzat:h=>`updated at ${h}`, toastRadio:n=>`${n} isn't responding. Tap it again to open its website.`, toastPodcast:"This show can't be played right now.",
      nom:'English', veu:'en-GB',
      mesos:['January','February','March','April','May','June','July','August','September','October','November','December'],
      dies:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      curts:['Mo','Tu','We','Th','Fr','Sa','Su'],
      deMes: m => m,
      data: (ds, d, mes, a) => `${ds}, ${d} ${mes} ${a}`,
      poblacio:'Town', avis:'Warning', temperatura:'Temperature', humitat:'Humidity', sensacio:'Feels like', pluja6:'Rain · 6 h', altitud:'Altitude',
      capSetmana:'Weekend', festiu:'Holiday', avui:'Today',
      elTemps:'The weather', titolAvui:'Today', onSom:'Where we are', avisos:'Warnings', max:'Max', min:'Min', coordenades:'Coordinates',
      esperantDades:'Waiting for data…', esperantPrev:'Waiting for the forecast…', capAvis:'No warnings for the coming hours', avisosPeu:'Based on the forecast for the coming hours',
      tocaEsfera:'Touch the dial', republica:'Republic Day',
      diaAny:(n,s) => `Day ${n} of the year · Week ${s}`, sol:(a,p) => `Sunrise ${a} · Sunset ${p}`,
      fases:['New moon','Waxing crescent','First quarter','Waxing gibbous','Full moon','Waning gibbous','Last quarter','Waning crescent'],
      cel:['Clear sky','Mainly clear','Partly cloudy','Overcast','Fog','Freezing fog','Light drizzle','Drizzle','Heavy drizzle','Freezing drizzle','Freezing drizzle','Light rain','Rain','Heavy rain','Freezing rain','Freezing rain','Light snow','Snow','Heavy snow','Snow grains','Light showers','Showers','Heavy showers','Snow showers','Snow showers','Thunderstorm','Thunderstorm with hail','Thunderstorm with hail'],
      a:{ tempesta:'Risk of thunderstorms in the coming hours', pluja:p=>`Rain likely (${p}%) within 6 hours: take an umbrella`, ventFort:v=>`Strong wind: gusts up to ${v} km/h`, ratxes:v=>`Wind gusts up to ${v} km/h`,
          calorInt:t=>`Intense heat: high of ${t}`, calor:t=>`Hot: high of ${t}`, glacada:t=>`Frost: low of ${t}`, fred:t=>`Cold: low of ${t}`,
          uvMolt:u=>`Very high UV index (${u}): protect yourself from the sun`, uv:u=>`High UV index (${u}): use sun protection`, boira:'Fog: reduced visibility',
          avuiFestiu:n=>`Today is a holiday: ${n}`, demaFestiu:n=>`Tomorrow is a holiday: ${n}` },
      x:{ tempesta:'Thunderstorm', pluja:'Heavy rain', vent:v=>`Wind ${v} km/h`, neu:'Snow', glac:'Ice' },
      parla:'Say the time', idioma:'Language',
      hora:(h,m) => {
        const h12 = h%12 || 12, p = h<12 ? 'in the morning' : h<18 ? 'in the afternoon' : 'in the evening';
        if (h===0 && m===0) return "It's midnight";
        if (h===12 && m===0) return "It's noon";
        return m===0 ? `It's ${h12} o'clock ${p}` : `It's ${h12} ${m<10 ? 'oh ' + m : m} ${p}`;
      }
    },
    de: {
      modeDia:'Tagmodus', modeNit:'Nachtmodus', modeNitFix:'Nachtmodus · Bildschirm bleibt an', modeEtq:'Modus', tanca:'Schließen', midaNormal:'Normalgröße',
      aniv:'Geburtstag', anivSub:'Optional · nur auf diesem Gerät gespeichert', anivNom:'Name', anivNaix:'Geburtsdatum', anivAny:'Jahr', anivDesa:'Speichern', anivEsborra:'Löschen', pma:'Alles Gute zum Geburtstag', tocaPastis:'Tippe auf den Kuchen, um fortzufahren', anys:'Jahre',
      t12:'Nächste 12 Stunden', t5:'Nächste 5 Tage', tdc:'An diesem Tag', tsl:'Sonne und Mond', tfe:'Demnächst', sant:'Tagesheilige', efem:'Ereignis', curio:'Wussten Sie?', solT:'Sonne', llunaT:'Mond', surt:'Aufgang', pon:'Untergang',
      llum:(h,m)=>`${h} Std. ${m} Min. Tageslicht`, dif:m=> m===0?'Wie gestern': m>0?`${m} Min. länger als gestern`:`${-m} Min. kürzer als gestern`,
      plena:n=> n===0?'Heute Vollmond': n===1?'Morgen Vollmond':`Vollmond in ${n} Tagen`, nova:n=> n===0?'Heute Neumond': n===1?'Morgen Neumond':`Neumond in ${n} Tagen`,
      il:p=>`${p} % beleuchtet`, falten:n=> n===0?'Heute': n===1?'Morgen':`${n}`, diesEtq:'Tage', senseDades:'Gerade keine Daten',
      curios:["In Barcelona geht die Uhr im Winter fast eine Stunde und im Sommer fast zwei Stunden der Sonne voraus.","Der Mond zeigt uns immer dieselbe Seite: Er dreht sich in derselben Zeit um sich selbst, in der er die Erde umrundet.","Wegen der Gezeiten wird ein Erdentag pro Jahrhundert etwa zwei Millisekunden länger.","Der gregorianische Kalender begann 1582: Damals folgte auf den 4. Oktober direkt der 15.","Viele alte Uhren schreiben die 4 als IIII und nicht als IV.","Die Erde ist im Januar näher an der Sonne als im Juli: Die Jahreszeiten hängen von der Neigung der Achse ab, nicht vom Abstand.","Mondlicht braucht gut eine Sekunde bis zu uns, Sonnenlicht etwa acht Minuten und zwanzig Sekunden.","Ein „blauer Mond“ ist der zweite Vollmond in einem Monat; im Schnitt alle zweieinhalb Jahre.","Ab und zu wird eine Schaltsekunde eingefügt, damit die Uhren der Erddrehung nicht vorauslaufen.","Die 24 Stunden des Tages stammen aus dem alten Ägypten, das Tag und Nacht in je zwölf Teile teilte."],
      alMobil:"In die Uhr des Handys übernehmen", drTitol:"Wecker in der iPhone-Uhr", drPassos:["Öffne die App Kurzbefehle und erstelle einen neuen Kurzbefehl (+).", "Füge die Aktion „Wecker erstellen“ hinzu und wähle bei „Uhrzeit“ die „Kurzbefehleingabe“.", "Nenne ihn genau „Alarma República“ und sichere ihn."], drObre:"Kurzbefehle öffnen", drFeta:"Erledigt: Wecker erstellen", drNota:"Nur einmal nötig. Wiederholungen stellst du in der Uhr des Handys ein.",
      alarmes:'Wecker', alarma:'Wecker', aturaAl:'Stopp', posposa:'5 Min. später', repet:['Täglich','Werktags','Wochenende','Einmal'], alPeu:'Klingeln, solange die App geöffnet ist', alPropera:(d,h)=>`Nächster: ${d}, ${h}`, alCap:'Kein Wecker aktiv', alActiva:'Aktiv',
      mesAnt:'Vorheriger Monat', mesSeg:'Nächster Monat', campanades:'Stunden- und Viertelstundenschlag', girar:'Uhr: tippen, um das Zifferblatt zu drehen', condicions:'Aktuelle Bedingungen', calInfo:'Kalender und Informationen', dobleToc:'Doppeltippen: zurück zum aktuellen Monat',
      radio:'Radio', podcasts:'Podcasts', noticies:'Nachrichten', araSona:'Jetzt läuft', directe:'live', carregant:'Wird geladen…',
      errNoticies:'Die Nachrichten konnten nicht geladen werden.', errProgrames:'Die Sendungen konnten nicht geladen werden.', obreWeb:'Website öffnen',
      actualitzat:h=>`aktualisiert um ${h}`, toastRadio:n=>`${n} antwortet nicht. Erneut tippen, um die Website zu öffnen.`, toastPodcast:'Diese Sendung kann gerade nicht abgespielt werden.',
      nom:'Deutsch', veu:'de-DE',
      mesos:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
      dies:['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
      curts:['Mo','Di','Mi','Do','Fr','Sa','So'],
      deMes: m => m,
      data: (ds, d, mes, a) => `${ds}, ${d}. ${mes} ${a}`,
      poblacio:'Ort', avis:'Warnung', temperatura:'Temperatur', humitat:'Feuchte', sensacio:'Gefühlt', pluja6:'Regen · 6 Std.', altitud:'Höhe',
      capSetmana:'Wochenende', festiu:'Feiertag', avui:'Heute',
      elTemps:'Das Wetter', titolAvui:'Heute', onSom:'Wo wir sind', avisos:'Warnungen', max:'Max', min:'Min', coordenades:'Koordinaten',
      esperantDades:'Warte auf Daten…', esperantPrev:'Warte auf die Vorhersage…', capAvis:'Keine Warnungen für die nächsten Stunden', avisosPeu:'Laut Vorhersage für die nächsten Stunden',
      tocaEsfera:'Zifferblatt berühren', republica:'Tag der Republik',
      diaAny:(n,s) => `${n}. Tag des Jahres · Woche ${s}`, sol:(a,p) => `Sonnenaufgang ${a} · Untergang ${p}`,
      fases:['Neumond','Zunehmende Sichel','Erstes Viertel','Zunehmender Mond','Vollmond','Abnehmender Mond','Letztes Viertel','Abnehmende Sichel'],
      cel:['Klarer Himmel','Überwiegend klar','Teilweise bewölkt','Bedeckt','Nebel','Gefrierender Nebel','Leichter Nieselregen','Nieselregen','Starker Nieselregen','Gefrierender Niesel','Gefrierender Niesel','Leichter Regen','Regen','Starker Regen','Gefrierender Regen','Gefrierender Regen','Leichter Schnee','Schnee','Starker Schnee','Schneegriesel','Leichte Schauer','Schauer','Starke Schauer','Schneeschauer','Schneeschauer','Gewitter','Gewitter mit Hagel','Gewitter mit Hagel'],
      a:{ tempesta:'Gewittergefahr in den nächsten Stunden', pluja:p=>`Regen wahrscheinlich (${p} %) in 6 Stunden: Regenschirm mitnehmen`, ventFort:v=>`Starker Wind: Böen bis ${v} km/h`, ratxes:v=>`Windböen bis ${v} km/h`,
          calorInt:t=>`Große Hitze: Höchstwert ${t}`, calor:t=>`Heiß: Höchstwert ${t}`, glacada:t=>`Frost: Tiefstwert ${t}`, fred:t=>`Kalt: Tiefstwert ${t}`,
          uvMolt:u=>`Sehr hoher UV-Index (${u}): vor der Sonne schützen`, uv:u=>`Hoher UV-Index (${u}): Sonnenschutz`, boira:'Nebel: eingeschränkte Sicht',
          avuiFestiu:n=>`Heute ist Feiertag: ${n}`, demaFestiu:n=>`Morgen ist Feiertag: ${n}` },
      x:{ tempesta:'Gewitter', pluja:'Starkregen', vent:v=>`Wind ${v} km/h`, neu:'Schnee', glac:'Glätte' },
      parla:'Uhrzeit ansagen', idioma:'Sprache',
      hora:(h,m) => m===0 ? `Es ist ${h} Uhr` : `Es ist ${h} Uhr ${m}`
    },
    it: {
      modeDia:'Modalità giorno', modeNit:'Modalità notte', modeNitFix:'Modalità notte · schermo sempre acceso', modeEtq:'Modalità', tanca:'Chiudi', midaNormal:'Dimensione normale',
      aniv:'Compleanno', anivSub:'Facoltativo · salvato solo su questo dispositivo', anivNom:'Nome', anivNaix:'Data di nascita', anivAny:'Anno', anivDesa:'Salva', anivEsborra:'Cancella', pma:'Buon compleanno', tocaPastis:'Tocca la torta per continuare', anys:'anni',
      t12:'Prossime 12 ore', t5:'Prossimi 5 giorni', tdc:'Accadde oggi', tsl:'Sole e luna', tfe:'Prossimamente', sant:'Santo del giorno', efem:'Ricorrenza', curio:'Curiosità', solT:'Sole', llunaT:'Luna', surt:'Sorge', pon:'Tramonta',
      llum:(h,m)=>`${h} h ${m} min di luce`, dif:m=> m===0?'Come ieri': m>0?`${m} min in più di ieri`:`${-m} min in meno di ieri`,
      plena:n=> n===0?'Luna piena oggi': n===1?'Luna piena domani':`Luna piena tra ${n} giorni`, nova:n=> n===0?'Luna nuova oggi': n===1?'Luna nuova domani':`Luna nuova tra ${n} giorni`,
      il:p=>`${p}% illuminata`, falten:n=> n===0?'Oggi': n===1?'Domani':`${n}`, diesEtq:'giorni', senseDades:'Nessun dato al momento',
      curios:["A Barcellona l'orologio è quasi un'ora avanti rispetto al sole d'inverno, e quasi due d'estate.","La Luna ci mostra sempre la stessa faccia: impiega lo stesso tempo a ruotare su se stessa e a girare attorno alla Terra.","A causa delle maree, il giorno terrestre si allunga di circa due millisecondi ogni secolo.","Il calendario gregoriano iniziò nel 1582: quell'anno, dopo il 4 ottobre venne direttamente il 15.","Molti orologi antichi scrivono il 4 come IIII e non come IV.","La Terra è più vicina al Sole a gennaio che a luglio: le stagioni dipendono dall'inclinazione dell'asse, non dalla distanza.","La luce della Luna impiega poco più di un secondo ad arrivare a noi; quella del Sole, circa otto minuti e venti secondi.","Una «luna blu» è la seconda luna piena dello stesso mese; capita in media ogni due anni e mezzo.","Ogni tanto si aggiunge un secondo all'ora ufficiale perché gli orologi non anticipino la rotazione terrestre.","Le 24 ore del giorno vengono dall'antico Egitto, che divideva il giorno e la notte in dodici parti ciascuno."],
      alMobil:"Aggiungila all'orologio del telefono", drTitol:"Sveglie nell'Orologio dell'iPhone", drPassos:["Apri l'app Comandi e crea un nuovo comando (+).", "Aggiungi l'azione «Crea sveglia» e, in «Ora», scegli «Input comando».", "Chiamalo esattamente «Alarma República» e salvalo."], drObre:"Apri Comandi", drFeta:"Fatto: crea la sveglia", drNota:"Basta farlo una volta. La ripetizione si sceglie nell'orologio del telefono.",
      alarmes:'Sveglie', alarma:'Sveglia', aturaAl:'Ferma', posposa:'5 min ancora', repet:['Ogni giorno','Feriali','Fine settimana','Una volta'], alPeu:"Suonano con l'app aperta", alPropera:(d,h)=>`Prossima: ${d} alle ${h}`, alCap:'Nessuna sveglia attiva', alActiva:'Attiva',
      mesAnt:'Mese precedente', mesSeg:'Mese successivo', campanades:'Rintocchi delle ore e dei quarti', girar:'Orologio: tocca per girare il quadrante', condicions:'Condizioni attuali', calInfo:'Calendario e informazioni', dobleToc:'Doppio tocco: torna al mese corrente',
      radio:'Radio', podcasts:'Podcast', noticies:'Notizie', araSona:'In ascolto', directe:'in diretta', carregant:'Caricamento…',
      errNoticies:'Impossibile caricare le notizie.', errProgrames:'Impossibile caricare i programmi.', obreWeb:'Apri il sito',
      actualitzat:h=>`aggiornato alle ${h}`, toastRadio:n=>`${n} non risponde. Toccala di nuovo per aprire il sito.`, toastPodcast:'Questo programma non si può ascoltare ora.',
      nom:'Italiano', veu:'it-IT',
      mesos:['gennaio','febbraio','marzo','aprile','maggio','giugno','luglio','agosto','settembre','ottobre','novembre','dicembre'],
      dies:['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'],
      curts:['Lu','Ma','Me','Gi','Ve','Sa','Do'],
      deMes: m => m,
      data: (ds, d, mes, a) => `${ds} ${d} ${mes} ${a}`,
      poblacio:'Località', avis:'Allerta', temperatura:'Temperatura', humitat:'Umidità', sensacio:'Percepita', pluja6:'Pioggia · 6 h', altitud:'Altitudine',
      capSetmana:'Fine settimana', festiu:'Festivo', avui:'Oggi',
      elTemps:'Il tempo', titolAvui:'Oggi', onSom:'Dove siamo', avisos:'Allerte', max:'Max', min:'Min', coordenades:'Coordinate',
      esperantDades:'In attesa dei dati…', esperantPrev:'In attesa delle previsioni…', capAvis:'Nessuna allerta per le prossime ore', avisosPeu:'Secondo le previsioni per le prossime ore',
      tocaEsfera:'Tocca il quadrante', republica:'Giorno della Repubblica',
      diaAny:(n,s) => `Giorno ${n} dell'anno · Settimana ${s}`, sol:(a,p) => `Alba ${a} · Tramonto ${p}`,
      fases:['Luna nuova','Luna crescente','Primo quarto','Gibbosa crescente','Luna piena','Gibbosa calante','Ultimo quarto','Luna calante'],
      cel:['Cielo sereno','Poco nuvoloso','Parzialmente nuvoloso','Coperto','Nebbia','Nebbia gelata','Pioviggine leggera','Pioviggine','Pioviggine intensa','Pioviggine gelata','Pioviggine gelata','Pioggia debole','Pioggia','Pioggia forte','Pioggia gelata','Pioggia gelata','Neve debole','Neve','Neve forte','Neve granulosa','Rovesci deboli','Rovesci','Rovesci forti','Rovesci di neve','Rovesci di neve','Temporale','Temporale con grandine','Temporale con grandine'],
      a:{ tempesta:'Rischio di temporali nelle prossime ore', pluja:p=>`Pioggia probabile (${p}%) entro 6 ore: prendi l'ombrello`, ventFort:v=>`Vento forte: raffiche fino a ${v} km/h`, ratxes:v=>`Raffiche di vento fino a ${v} km/h`,
          calorInt:t=>`Caldo intenso: massima di ${t}`, calor:t=>`Fa caldo: massima di ${t}`, glacada:t=>`Gelata: minima di ${t}`, fred:t=>`Freddo: minima di ${t}`,
          uvMolt:u=>`Indice UV molto alto (${u}): proteggiti dal sole`, uv:u=>`Indice UV alto (${u}): protezione solare`, boira:'Nebbia: visibilità ridotta',
          avuiFestiu:n=>`Oggi è festivo: ${n}`, demaFestiu:n=>`Domani è festivo: ${n}` },
      x:{ tempesta:'Temporale', pluja:'Pioggia forte', vent:v=>`Vento ${v} km/h`, neu:'Neve', glac:'Ghiaccio' },
      parla:"Dimmi l'ora", idioma:'Lingua',
      hora:(h,m) => {
        if (h===0) return m===0 ? 'È mezzanotte' : `È mezzanotte e ${m}`;
        if (h===12) return m===0 ? 'È mezzogiorno' : `È mezzogiorno e ${m}`;
        const base = h===1 ? "È l'una" : `Sono le ${h}`;
        return m===0 ? `${base} in punto` : `${base} e ${m}`;
      }
    }
  };
  // Noms dels festius (la llista base és en català i fa de clau)
  const FESTES = {
    "Cap d'Any":{oc:"Cap d'An",gl:'Aninovo',eu:'Urteberri eguna',fr:"Jour de l'An",en:"New Year's Day",de:'Neujahr',it:'Capodanno',pt:'Ano Novo'},
    'Reis':{oc:'Reis',gl:'Reis',eu:'Errege eguna',fr:'Épiphanie',en:'Epiphany',de:'Heilige Drei Könige',it:'Epifania',pt:'Dia de Reis'},
    'Divendres Sant':{oc:'Diuendres Sant',gl:'Venres Santo',eu:'Ostiral Santua',fr:'Vendredi saint',en:'Good Friday',de:'Karfreitag',it:'Venerdì santo',pt:'Sexta-feira Santa'},
    'Dilluns de Pasqua Florida':{oc:'Deluns de Pasco',gl:'Luns de Pascua',eu:'Pazko astelehena',fr:'Lundi de Pâques',en:'Easter Monday',de:'Ostermontag',it:'Lunedì dell\'Angelo',pt:'Segunda-feira de Páscoa'},
    'Festa del Treball':{oc:'Hèsta deth Trabalh',gl:'Día do Traballo',eu:'Langileen eguna',fr:'Fête du Travail',en:'Labour Day',de:'Tag der Arbeit',it:'Festa dei lavoratori',pt:'Dia do Trabalhador'},
    'Dilluns de Pasqua Granada':{oc:'Deluns de Pentacosta',gl:'Luns de Pentecoste',eu:'Mendekoste astelehena',fr:'Lundi de Pentecôte',en:'Whit Monday',de:'Pfingstmontag',it:'Lunedì di Pentecoste',pt:'Segunda-feira de Pentecostes'},
    'Sant Joan':{oc:'Sant Joan',gl:'San Xoán',eu:'San Joan',fr:'Saint-Jean',en:'Saint John\'s Day',de:'Johannistag',it:'San Giovanni',pt:'São João'},
    "L'Assumpció":{oc:'Era Assumpcion',gl:'A Asunción',eu:'Andre Mariaren jasokundea',fr:'Assomption',en:'Assumption Day',de:'Mariä Himmelfahrt',it:'Ferragosto',pt:'Assunção de Nossa Senhora'},
    'Diada Nacional de Catalunya':{oc:'Dia Nacionau de Catalonha',gl:'Día Nacional de Cataluña',eu:'Kataluniako Egun Nazionala',fr:'Fête nationale de la Catalogne',en:'National Day of Catalonia',de:'Nationalfeiertag Kataloniens',it:'Festa nazionale della Catalogna',pt:'Dia Nacional da Catalunha'},
    'La Mercè':{oc:'La Mercè',gl:'La Mercè',eu:'La Mercè',fr:'La Mercè',en:'La Mercè',de:'La Mercè',it:'La Mercè',pt:'La Mercè'},
    'Dia de la República':{oc:'Dia dera Republica',gl:'Día da República',eu:'Errepublikaren Eguna',fr:'Jour de la République',en:'Republic Day',de:'Tag der Republik',it:'Giorno della Repubblica',pt:'Dia da República'},
    "Festa Nacional d'Espanya":{oc:"Hèsta Nacionau d'Espanha",gl:'Festa Nacional de España',eu:'Espainiako Jai Nazionala',fr:"Fête nationale de l'Espagne",en:'National Day of Spain',de:'Nationalfeiertag von Spanien',it:'Festa nazionale della Spagna',pt:'Dia Nacional de Espanha'},
    'Tots Sants':{oc:'Totsants',gl:'Día de Todos os Santos',eu:'Santu Guztien eguna',fr:'Toussaint',en:"All Saints' Day",de:'Allerheiligen',it:'Ognissanti',pt:'Dia de Todos os Santos'},
    'Dia de la Constituta':{oc:'Dia dera Constituta',gl:'Día da Constituta',eu:'Konstitutaren eguna',fr:'Jour de la Constituta',en:'Constituta Day',de:'Tag der Constituta',it:'Giorno della Constituta',pt:'Dia da Constituta'},
    'La Immaculada':{oc:'Era Immaculada',gl:'A Inmaculada',eu:'Sortzez Garbiaren eguna',fr:'Immaculée Conception',en:'Immaculate Conception',de:'Mariä Empfängnis',it:'Immacolata Concezione',pt:'Imaculada Conceição'},
    'Nadal':{oc:'Nadau',gl:'Nadal',eu:'Eguberri eguna',fr:'Noël',en:'Christmas Day',de:'Weihnachten',it:'Natale',pt:'Natal'},
    'Sant Esteve':{oc:'Sant Estève',gl:'Santo Estevo',eu:'San Esteban eguna',fr:'Saint-Étienne',en:"Saint Stephen's Day",de:'Stephanstag',it:'Santo Stefano',pt:'Santo Estêvão'}
  };
  const AMBITS = {
    'Estatal':{oc:'Estatau',gl:'Estatal',eu:'Estatukoa',fr:'National',en:'National',de:'Landesweit',it:'Nazionale',pt:'Nacional'},
    'Catalunya':{oc:'Catalonha',gl:'Cataluña',eu:'Katalunia',fr:'Catalogne',en:'Catalonia',de:'Katalonien',it:'Catalogna',pt:'Catalunha'},
    'Festa local de Barcelona':{oc:'Hèsta locau de Barcelona',gl:'Festa local de Barcelona',eu:'Bartzelonako tokiko jaia',fr:'Fête locale de Barcelone',en:'Barcelona local holiday',de:'Lokaler Feiertag in Barcelona',it:'Festa locale di Barcellona',pt:'Feriado local de Barcelona'},
    "Commemoració · 1 d'octubre de 2017":{oc:"Commemoracion · 1 d'octòbre de 2017",gl:'Conmemoración · 1 de outubro de 2017',eu:'Oroimena · 2017ko urriaren 1a',fr:'Commémoration · 1er octobre 2017',en:'Commemoration · 1 October 2017',de:'Gedenktag · 1. Oktober 2017',it:'Commemorazione · 1 ottobre 2017',pt:'Comemoração · 1 de outubro de 2017'}
  };

  // ===== Textos propis de l'Orloj (s'afegeixen als de base) i la llengua txeca sencera =====
  const SIGNES = {
    ca:['Àries','Taure','Bessons','Cranc','Lleó','Verge','Balança','Escorpí','Sagitari','Capricorn','Aquari','Peixos'],
    oc:['Aret','Taur','Bessons','Cranc','Leon','Vèrge','Balança','Escorpion','Sagitari','Capricòrn','Aquari','Peishes'],
    gl:['Aries','Tauro','Xémini','Cancro','Leo','Virxe','Libra','Escorpión','Saxitario','Capricornio','Acuario','Peixes'],
    fr:['Bélier','Taureau','Gémeaux','Cancer','Lion','Vierge','Balance','Scorpion','Sagittaire','Capricorne','Verseau','Poissons'],
    en:['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'],
    de:['Widder','Stier','Zwillinge','Krebs','Löwe','Jungfrau','Waage','Skorpion','Schütze','Steinbock','Wassermann','Fische'],
    it:['Ariete','Toro','Gemelli','Cancro','Leone','Vergine','Bilancia','Scorpione','Sagittario','Capricorno','Acquario','Pesci'],
    cs:['Beran','Býk','Blíženci','Rak','Lev','Panna','Váhy','Štír','Střelec','Kozoroh','Vodnář','Ryby']
  };
  const ASTRES = {
    ca:['Lluna','Sol','Mercuri','Venus','Mart','Júpiter','Saturn','Urà','Neptú'],
    oc:['Lua','Solei','Mercuri','Venus','Mart','Jupitèr','Saturne','Uranus','Neptun'],
    gl:['Lúa','Sol','Mercurio','Venus','Marte','Xúpiter','Saturno','Urano','Neptuno'],
    fr:['Lune','Soleil','Mercure','Vénus','Mars','Jupiter','Saturne','Uranus','Neptune'],
    en:['Moon','Sun','Mercury','Venus','Mars','Jupiter','Saturn','Uranus','Neptune'],
    de:['Mond','Sonne','Merkur','Venus','Mars','Jupiter','Saturn','Uranus','Neptun'],
    it:['Luna','Sole','Mercurio','Venere','Marte','Giove','Saturno','Urano','Nettuno'],
    cs:['Měsíc','Slunce','Merkur','Venuše','Mars','Jupiter','Saturn','Uran','Neptun']
  };
  const enOrdinal = d => d + (d % 10 === 1 && d !== 11 ? 'st' : d % 10 === 2 && d !== 12 ? 'nd' : d % 10 === 3 && d !== 13 ? 'rd' : 'th');

  // Hores amb quarts en francès, anglès i alemany
  function horaFr(h, m){
    const N = ['minuit','une','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze'];
    const x = hh => ((hh % 24) + 24) % 24;
    const nomH = hh => x(hh) === 0 ? 'minuit' : x(hh) === 12 ? 'midi' : (x(hh) % 12 === 1 ? 'une heure' : `${N[x(hh) % 12]} heures`);
    const per = hh => (x(hh) === 0 || x(hh) === 12) ? '' : x(hh) < 12 ? ' du matin' : x(hh) < 18 ? " de l'après-midi" : ' du soir';
    const migF = hh => (x(hh) === 0 || x(hh) === 12) ? ' et demi' : ' et demie';
    if (m === 0) return `Il est ${nomH(h)}${per(h)}`;
    if (m === 15) return `Il est ${nomH(h)} et quart${per(h)}`;
    if (m === 30) return `Il est ${nomH(h)}${migF(h)}${per(h)}`;
    if (m === 45) return `Il est ${nomH(h + 1)} moins le quart${per(h + 1)}`;
    if (m < 30) return `Il est ${nomH(h)} ${m}${per(h)}`;
    return `Il est ${nomH(h + 1)} moins ${60 - m}${per(h + 1)}`;
  }
  function horaEn(h, m){
    const W = ['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
    const MW = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','quarter','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine','half'];
    const x = hh => ((hh % 24) + 24) % 24;
    const nom = hh => W[x(hh) % 12];
    const per = hh => x(hh) < 5 ? ' at night' : x(hh) < 12 ? ' in the morning' : x(hh) < 18 ? ' in the afternoon' : x(hh) < 22 ? ' in the evening' : ' at night';
    const min = n => (n === 15 || n === 30 || n % 5 === 0) ? MW[n] : (n === 1 ? 'one minute' : `${MW[n]} minutes`);
    if (m === 0) return x(h) === 0 ? "It's midnight" : x(h) === 12 ? "It's noon" : `It's ${nom(h)} o'clock${per(h)}`;
    if (m <= 30) return `It's ${min(m)} past ${nom(h)}${per(h)}`;
    return `It's ${min(60 - m)} to ${nom(h + 1)}${per(h)}`;
  }
  function horaDe(h, m){
    const Z = ['zwölf','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf'];
    const N = ['','eine Minute','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechzehn','siebzehn','achtzehn','neunzehn','zwanzig'];
    const x = hh => ((hh % 24) + 24) % 24;
    const st = hh => Z[x(hh) % 12];
    const per = hh => { const v = x(hh); return v < 5 ? ' nachts' : v < 10 ? ' morgens' : v < 12 ? ' vormittags' : v < 14 ? ' mittags' : v < 18 ? ' nachmittags' : v < 22 ? ' abends' : ' nachts'; };
    if (m === 0){ if (x(h) === 0) return 'Es ist Mitternacht'; const s = st(h); return `Es ist ${s === 'eins' ? 'ein' : s} Uhr${per(h)}`; }
    if (m === 15) return `Es ist Viertel nach ${st(h)}${per(h)}`;
    if (m === 30) return `Es ist halb ${st(h + 1)}${per(h)}`;
    if (m === 45) return `Es ist Viertel vor ${st(h + 1)}${per(h)}`;
    if (m <= 20) return `Es ist ${N[m]} nach ${st(h)}${per(h)}`;
    if (m < 30) return `Es ist ${N[30 - m]} vor halb ${st(h + 1)}${per(h)}`;
    if (m < 40) return `Es ist ${N[m - 30]} nach halb ${st(h + 1)}${per(h)}`;
    return `Es ist ${N[60 - m]} vor ${st(h + 1)}${per(h)}`;
  }
  // Txec: també per quarts («čtvrt na deset», «půl desáté», «tři čtvrtě na deset»)
  function horaCs(h, m){
    const ORD = ['','jedna','dvě','tři','čtyři','pět','šest','sedm','osm','devět','deset','jedenáct','dvanáct','třináct','čtrnáct'];
    const NA = ['dvanáct','jednu','dvě','tři','čtyři','pět','šest','sedm','osm','devět','deset','jedenáct'];
    const PUL = ['dvanácté','jedné','druhé','třetí','čtvrté','páté','šesté','sedmé','osmé','deváté','desáté','jedenácté'];
    const x = hh => ((hh % 24) + 24) % 24;
    const dob = hh => { const v = x(hh); return v < 5 ? 'v noci' : v < 9 ? 'ráno' : v < 12 ? 'dopoledne' : v < 13 ? 'v poledne' : v < 18 ? 'odpoledne' : v < 22 ? 'večer' : 'v noci'; };
    const celaH = hh => { const n = x(hh) % 12 || 12; return n === 1 ? 'Je jedna hodina' : n < 5 ? `Jsou ${ORD[n]} hodiny` : `Je ${ORD[n]} hodin`; };
    const ctvrt = (q, nx) => q === 1 ? `čtvrt na ${NA[nx]}` : q === 2 ? `půl ${PUL[nx]}` : `tři čtvrtě na ${NA[nx]}`;
    const po = n => n === 1 ? 'Je jedna minuta' : n < 5 ? `Jsou ${ORD[n]} minuty` : `Je ${ORD[n]} minut`;
    const za = n => n === 1 ? 'minutu' : n < 5 ? `${ORD[n]} minuty` : `${ORD[n]} minut`;
    const q = Math.floor(m / 15), r = m % 15, h12 = x(h) % 12, seg = (h12 + 1) % 12;
    if (r === 0) return q === 0 ? `${celaH(h)} ${dob(h)}` : `${q === 3 ? 'Jsou' : 'Je'} ${ctvrt(q, seg)} ${dob(h)}`;
    if (r <= 7) return `${po(r)} po ${q === 0 ? PUL[h12] : ctvrt(q, seg)} ${dob(h)}`;
    const qn = q + 1;
    return qn === 4 ? `Je za ${za(15 - r)} ${NA[seg]} ${dob(h + 1)}` : `Je za ${za(15 - r)} ${ctvrt(qn, seg)} ${dob(h)}`;
  }

  const I18N_EXTRA = {
    ca: { modeZz:'Mode Zz · pantalla sempre encesa', soOn:'So activat. Toca per silenciar', soOff:'So desactivat. Toca per activar les campanades', soBloq:'Toca per activar el so',
      migdiaSolar:'Migdia solar', diaAnyEtq:"Dia de l'any", diaAnyCurt:(n,s)=>`${n} · setmana ${s}`, zodiac:'Zodíac', zod:(s,g,d)=>`${s} · ${g} el ${d}`,
      distancies:'Distàncies', llumTriga:t=>`la llum triga ${t}`, milions:'M km', aC:'aC',
      mesosCurts:['GEN','FEB','MAR','ABR','MAI','JUN','JUL','AGO','SET','OCT','NOV','DES'],
      dataEv:(d,i,a,L)=>`${d} ${L.deMes(L.mesos[i])} de ${a}`, avisosPeu:'Segons la previsió per a les properes hores' },
    oc: { modeZz:'Mòde Zz · pantalha tostemp alugada', soOn:'Son activat. Tòca entà silenciar', soOff:'Son desactivat. Tòca entà activar es campanades', soBloq:'Tòca entà activar eth son',
      migdiaSolar:'Mieijorn solar', diaAnyEtq:"Dia der an", diaAnyCurt:(n,s)=>`${n} · setmana ${s}`, zodiac:'Zodiac', zod:(s,g,d)=>`${s} · ${g} eth ${d}`,
      distancies:'Distàncias', llumTriga:t=>`era lutz i met ${t}`, milions:'M km', aC:'aC',
      mesosCurts:['GEN','FEB','MAR','ABR','MAI','JUN','JUL','AGO','SET','OCT','NOV','DEC'],
      dataEv:(d,i,a,L)=>`${d} ${L.deMes(L.mesos[i])} de ${a}` },
    gl: { modeZz:'Modo Zz · pantalla sempre acesa', soOn:'Son activado. Toca para silenciar', soOff:'Son desactivado. Toca para activar as badaladas', soBloq:'Toca para activar o son',
      migdiaSolar:'Mediodía solar', diaAnyEtq:'Día do ano', diaAnyCurt:(n,s)=>`${n} · semana ${s}`, zodiac:'Zodíaco', zod:(s,g,d)=>`${s} · ${g} o ${d}`,
      distancies:'Distancias', llumTriga:t=>`a luz tarda ${t}`, milions:'M km', aC:'a.C.',
      mesosCurts:['XAN','FEB','MAR','ABR','MAI','XUÑ','XUL','AGO','SET','OUT','NOV','DEC'],
      dataEv:(d,i,a,L)=>`${d} de ${L.mesos[i]} de ${a}` },
    fr: { modeZz:'Mode Zz · écran toujours allumé', soOn:'Son activé. Touchez pour couper', soOff:'Son coupé. Touchez pour activer les carillons', soBloq:'Touchez pour activer le son',
      migdiaSolar:'Midi solaire', diaAnyEtq:"Jour de l'année", diaAnyCurt:(n,s)=>`${n} · semaine ${s}`, zodiac:'Zodiaque', zod:(s,g,d)=>`${s} · ${g} le ${d === 1 ? '1er' : d}`,
      distancies:'Distances', llumTriga:t=>`la lumière met ${t}`, milions:'M km', aC:'av. J.-C.',
      mesosCurts:['JAN','FÉV','MAR','AVR','MAI','JUN','JUL','AOÛ','SEP','OCT','NOV','DÉC'],
      dataEv:(d,i,a,L)=>`${d === 1 ? '1er' : d} ${L.mesos[i]} ${a}`, hora: horaFr },
    en: { modeZz:'Zz mode · screen always on', soOn:'Sound on. Tap to mute', soOff:'Sound off. Tap to turn the chimes on', soBloq:'Tap to enable sound',
      migdiaSolar:'Solar noon', diaAnyEtq:'Day of the year', diaAnyCurt:(n,s)=>`${n} · week ${s}`, zodiac:'Zodiac', zod:(s,g,d)=>`${s} · ${g} from the ${enOrdinal(d)}`,
      distancies:'Distances', llumTriga:t=>`light takes ${t}`, milions:'M km', aC:'BC',
      mesosCurts:['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
      dataEv:(d,i,a,L)=>`${d} ${L.mesos[i]} ${a}`, hora: horaEn },
    de: { modeZz:'Zz-Modus · Bildschirm bleibt an', soOn:'Ton an. Tippen zum Stummschalten', soOff:'Ton aus. Tippen, um das Glockenspiel einzuschalten', soBloq:'Tippen, um den Ton zu aktivieren',
      migdiaSolar:'Wahrer Mittag', diaAnyEtq:'Tag des Jahres', diaAnyCurt:(n,s)=>`${n} · Woche ${s}`, zodiac:'Tierkreis', zod:(s,g,d)=>`${s} · ${g} ab ${d}.`,
      distancies:'Entfernungen', llumTriga:t=>`Licht braucht ${t}`, milions:'Mio. km', aC:'v. Chr.',
      mesosCurts:['JAN','FEB','MÄR','APR','MAI','JUN','JUL','AUG','SEP','OKT','NOV','DEZ'],
      dataEv:(d,i,a,L)=>`${d}. ${L.mesos[i]} ${a}`, hora: horaDe },
    it: { modeZz:'Modalità Zz · schermo sempre acceso', soOn:'Suono attivo. Tocca per silenziare', soOff:'Suono disattivato. Tocca per attivare i rintocchi', soBloq:'Tocca per attivare il suono',
      migdiaSolar:'Mezzogiorno solare', diaAnyEtq:"Giorno dell'anno", diaAnyCurt:(n,s)=>`${n} · settimana ${s}`, zodiac:'Zodiaco', zod:(s,g,d)=>`${s} · ${g} dal ${d}`,
      distancies:'Distanze', llumTriga:t=>`la luce impiega ${t}`, milions:'mln km', aC:'a.C.',
      mesosCurts:['GEN','FEB','MAR','APR','MAG','GIU','LUG','AGO','SET','OTT','NOV','DIC'],
      dataEv:(d,i,a,L)=>`${d === 1 ? '1º' : d} ${L.mesos[i]} ${a}` },
    cs: {
      modeDia:'Denní režim', modeNit:'Noční režim', modeZz:'Režim Zz · obrazovka stále zapnutá', modeEtq:'Režim', tanca:'Zavřít',
      soOn:'Zvuk zapnut. Klepnutím ztlumíte', soOff:'Zvuk vypnut. Klepnutím zapnete zvonění', soBloq:'Klepnutím povolíte zvuk',
      t12:'Příštích 12 hodin', t5:'Příštích 5 dní', tdc:'V tento den', tsl:'Slunce a Měsíc', sant:'Svátek má', curio:'Zajímavost', solT:'Slunce', llunaT:'Měsíc', surt:'Východ', pon:'Západ',
      llum:(h,m)=>`${h} h ${m} min světla`, dif:m=> m===0?'Stejně jako včera': m>0?`o ${m} min více než včera`:`o ${-m} min méně než včera`,
      plena:n=> n===0?'Dnes je úplněk': n===1?'Úplněk zítra':`Úplněk za ${n} ${n<5?'dny':'dní'}`, nova:n=> n===0?'Dnes je nov': n===1?'Nov zítra':`Nov za ${n} ${n<5?'dny':'dní'}`,
      il:p=>`osvětleno ${p} %`, senseDades:'Momentálně bez dat',
      mesAnt:'Předchozí měsíc', mesSeg:'Další měsíc', dobleToc:'Dvojité klepnutí: zpět na tento měsíc',
      radio:'Rádio', podcasts:'Podcasty', noticies:'Zprávy', araSona:'Právě hraje', directe:'živě', carregant:'Načítání…',
      errNoticies:'Zprávy se nepodařilo načíst.', errProgrames:'Pořady se nepodařilo načíst.', obreWeb:'Otevřít web',
      actualitzat:h=>`aktualizováno v ${h}`, toastRadio:n=>`${n} teď neodpovídá. Klepněte znovu a otevře se web.`, toastPodcast:'Tento pořad teď nelze přehrát.',
      nom:'Čeština', veu:'cs-CZ', reserva:['sk'],
      mesos:['leden','únor','březen','duben','květen','červen','červenec','srpen','září','říjen','listopad','prosinec'],
      mesosGen:['ledna','února','března','dubna','května','června','července','srpna','září','října','listopadu','prosince'],
      dies:['neděle','pondělí','úterý','středa','čtvrtek','pátek','sobota'],
      curts:['Po','Út','St','Čt','Pá','So','Ne'],
      deMes: m => m,
      data: (ds, d, mes, a) => `${ds} ${d}. ${mes} ${a}`,
      altitud:'Nadmořská výška', coordenades:'Souřadnice', humitat:'Vlhkost', sensacio:'Pocitově', temperatura:'Teplota',
      elTemps:'Počasí', titolAvui:'Dnes', onSom:'Kde jsme', avisos:'Výstrahy', max:'Max', min:'Min',
      esperantDades:'Čekám na data…', avisosPeu:'Podle předpovědi na příští hodiny',
      diaAny:(n,s)=>`${n}. den v roce · ${s}. týden`,
      fases:['Nov','Dorůstající srpek','První čtvrť','Dorůstající měsíc','Úplněk','Couvající měsíc','Poslední čtvrť','Ubývající srpek'],
      cel:['Jasno','Skoro jasno','Polojasno','Zataženo','Mlha','Mrznoucí mlha','Slabé mrholení','Mrholení','Silné mrholení','Mrznoucí mrholení','Mrznoucí mrholení','Slabý déšť','Déšť','Silný déšť','Mrznoucí déšť','Mrznoucí déšť','Slabé sněžení','Sněžení','Silné sněžení','Sněhová zrna','Slabé přeháňky','Přeháňky','Silné přeháňky','Sněhové přeháňky','Sněhové přeháňky','Bouřka','Bouřka s kroupami','Bouřka s kroupami'],
      a:{ tempesta:'Riziko bouřek v příštích hodinách', pluja:p=>`Pravděpodobný déšť (${p} %) do 6 hodin`, ventFort:v=>`Silný vítr: nárazy až ${v} km/h`, ratxes:v=>`Nárazy větru až ${v} km/h`,
          calorInt:t=>`Velké horko: maximum ${t}`, calor:t=>`Horko: maximum ${t}`, glacada:t=>`Mráz: minimum ${t}`, fred:t=>`Chladno: minimum ${t}`,
          uvMolt:u=>`Velmi vysoký UV index (${u})`, uv:u=>`Vysoký UV index (${u})`, boira:'Mlha: snížená viditelnost',
          avuiFestiu:n=>`Dnes je svátek: ${n}`, demaFestiu:n=>`Zítra je svátek: ${n}` },
      x:{ tempesta:'Bouřka', pluja:'Silný déšť', vent:v=>`Vítr ${v} km/h`, neu:'Sníh', glac:'Náledí' },
      parla:'Řekni čas', idioma:'Jazyk', republica:'Den republiky',
      migdiaSolar:'Pravé poledne', diaAnyEtq:'Den v roce', diaAnyCurt:(n,s)=>`${n}. · ${s}. týden`, zodiac:'Zvěrokruh', zod:(s,g,d)=>`${s} · ${g} od ${d}.`,
      distancies:'Vzdálenosti', llumTriga:t=>`světlo letí ${t}`, milions:'mil. km', aC:'př. n. l.',
      mesosCurts:['LED','ÚNO','BŘE','DUB','KVĚ','ČVN','ČVC','SRP','ZÁŘ','ŘÍJ','LIS','PRO'],
      dataEv:(d,i,a,L)=>`${d}. ${L.mesosGen[i]} ${a}`, hora: horaCs
    }
  };
  // Noms dels festius en txec (la resta de llengües ja hi són)
  const FESTES_CS = { "Cap d'Any":'Nový rok', 'Reis':'Tři králové', 'Divendres Sant':'Velký pátek', 'Dilluns de Pasqua Florida':'Velikonoční pondělí',
    'Festa del Treball':'Svátek práce', 'Dilluns de Pasqua Granada':'Svatodušní pondělí', 'Sant Joan':'Svatý Jan', "L'Assumpció":'Nanebevzetí Panny Marie',
    'Diada Nacional de Catalunya':'Národní den Katalánska', 'La Mercè':'La Mercè', 'Dia de la República':'Den republiky',
    "Festa Nacional d'Espanya":'Národní svátek Španělska', 'Tots Sants':'Všech svatých', 'Dia de la Constituta':'Den Constituty',
    'La Immaculada':'Neposkvrněné početí Panny Marie', 'Nadal':'Boží hod vánoční', 'Sant Esteve':'Svatý Štěpán' };
  const AMBITS_CS = { 'Estatal':'Celostátní', 'Catalunya':'Katalánsko', 'Festa local de Barcelona':'Místní svátek v Barceloně', "Commemoració · 1 d'octubre de 2017":'Výročí · 1. října 2017' };

  // ===== Curiositats astronòmiques i astrològiques de la història =====
  // [mes, dia, any (negatiu = abans de Crist), {llengua: text}]. Es mostra la més propera a la data d'avui.
  const CURIOSITATS = [
    [1, 1, 1801, { ca:"Giuseppe Piazzi descobreix Ceres des de Palerm: el primer asteroide conegut, avui planeta nan.", oc:"Giuseppe Piazzi descubrís Ceres dempús Palèrm: eth prumèr asteroïde conegut, auei planeta nan.", gl:"Giuseppe Piazzi descobre Ceres desde Palermo: o primeiro asteroide coñecido, hoxe planeta anano.", fr:"Giuseppe Piazzi découvre Cérès depuis Palerme : le premier astéroïde connu, aujourd'hui planète naine.", en:"Giuseppe Piazzi discovers Ceres from Palermo: the first known asteroid, now a dwarf planet.", de:"Giuseppe Piazzi entdeckt in Palermo Ceres: den ersten bekannten Asteroiden, heute ein Zwergplanet.", it:"Giuseppe Piazzi scopre Cerere da Palermo: il primo asteroide conosciuto, oggi pianeta nano.", cs:"Giuseppe Piazzi objevuje v Palermu Ceres, první známou planetku, dnes trpasličí planetu." }],
    [1, 7, 1610, { ca:"Galileu apunta el telescopi a Júpiter i hi veu tres «estrelles» al costat: són les seves llunes.", oc:"Galilèu apunte eth telescòpi tà Jupitèr e i ve tres «estelas» ath costat: son es sues lues.", gl:"Galileo apunta o telescopio a Xúpiter e ve tres «estrelas» ao seu carón: son as súas lúas.", fr:"Galilée pointe sa lunette vers Jupiter et voit trois « étoiles » à côté : ce sont ses lunes.", en:"Galileo points his telescope at Jupiter and sees three 'stars' beside it: they are its moons.", de:"Galilei richtet sein Fernrohr auf Jupiter und sieht daneben drei „Sterne“: es sind seine Monde.", it:"Galileo punta il cannocchiale su Giove e vede tre «stelle» accanto: sono le sue lune.", cs:"Galileo míří dalekohledem na Jupiter a vidí vedle něj tři „hvězdy“: jsou to jeho měsíce." }],
    [1, 14, 2005, { ca:"La sonda europea Huygens aterra a Tità, la lluna gran de Saturn: el descens més llunyà mai fet.", oc:"Era sonda europèa Huygens aterrís en Titan, era gran lua de Saturne: eth descens mès lunhèc jamès hèt.", gl:"A sonda europea Huygens aterra en Titán, a gran lúa de Saturno: o descenso máis afastado nunca feito.", fr:"La sonde européenne Huygens se pose sur Titan, la grande lune de Saturne : l'atterrissage le plus lointain jamais réussi.", en:"The European probe Huygens lands on Titan, Saturn's largest moon: the most distant landing ever made.", de:"Die europäische Sonde Huygens landet auf Titan, dem größten Saturnmond: die fernste Landung aller Zeiten.", it:"La sonda europea Huygens atterra su Titano, la grande luna di Saturno: l'atterraggio più lontano mai compiuto.", cs:"Evropská sonda Huygens přistává na Titanu, největším měsíci Saturnu: nejvzdálenější přistání v historii." }],
    [1, 15, 1559, { ca:"Isabel I és coronada a Londres el dia que li va triar l'astròleg John Dee consultant els astres.", oc:"Isabèl I ei coronada en Londres eth dia que li causic er astròleg John Dee en tot consultar es astres.", gl:"Isabel I é coroada en Londres o día que lle escolleu o astrólogo John Dee consultando os astros.", fr:"Élisabeth Ire est couronnée à Londres le jour choisi par l'astrologue John Dee d'après les astres.", en:"Elizabeth I is crowned in London on the day chosen by the astrologer John Dee after consulting the stars.", de:"Elisabeth I. wird in London an dem Tag gekrönt, den der Astrologe John Dee nach den Sternen gewählt hat.", it:"Elisabetta I è incoronata a Londra nel giorno scelto dall'astrologo John Dee consultando gli astri.", cs:"Alžběta I. je korunována v Londýně v den, který podle hvězd vybral astrolog John Dee." }],
    [1, 31, 1958, { ca:"S'enlaira l'Explorer 1, el primer satèl·lit dels EUA, que descobreix els cinturons de radiació de Van Allen.", oc:"S'enlaire er Explorer 1, eth prumèr satellit des EUA, que descubrís es cintes de radiacion de Van Allen.", gl:"Despega o Explorer 1, o primeiro satélite dos EUA, que descobre os cintos de radiación de Van Allen.", fr:"Lancement d'Explorer 1, premier satellite américain, qui découvre les ceintures de radiation de Van Allen.", en:"Explorer 1, the first US satellite, is launched and discovers the Van Allen radiation belts.", de:"Explorer 1, der erste US-Satellit, startet und entdeckt die Van-Allen-Strahlungsgürtel.", it:"Parte Explorer 1, il primo satellite statunitense, che scopre le fasce di radiazione di Van Allen.", cs:"Startuje Explorer 1, první americká družice, která objevuje Van Allenovy radiační pásy." }],
    [2, 3, 1966, { ca:"La sonda soviètica Luna 9 fa el primer aterratge suau a la Lluna i n'envia les primeres fotos des de terra.", oc:"Era sonda sovietica Luna 9 hè eth prumèr aterratge doç ena Lua e n'envie es prumères fòtos dempús tèrra.", gl:"A sonda soviética Luna 9 fai a primeira alunaxe suave e envía as primeiras fotos desde o chan lunar.", fr:"La sonde soviétique Luna 9 réussit le premier atterrissage en douceur sur la Lune et envoie des photos du sol.", en:"The Soviet probe Luna 9 makes the first soft landing on the Moon and sends back photos from the surface.", de:"Die sowjetische Sonde Luna 9 landet als erste weich auf dem Mond und funkt Bilder von der Oberfläche.", it:"La sonda sovietica Luna 9 compie il primo atterraggio morbido sulla Luna e invia foto dal suolo.", cs:"Sovětská sonda Luna 9 jako první měkce přistává na Měsíci a posílá snímky z jeho povrchu." }],
    [2, 14, 1990, { ca:"La Voyager 1 es gira i fotografia la Terra des de 6.000 milions de km: el «punt blau pàl·lid».", oc:"Era Voyager 1 se vire e fotografie era Tèrra dempús 6.000 milions de km: eth «punt blau pallid».", gl:"A Voyager 1 vólvese e fotografa a Terra desde 6.000 millóns de km: o «punto azul pálido».", fr:"Voyager 1 se retourne et photographie la Terre à 6 milliards de km : le « point bleu pâle ».", en:"Voyager 1 turns around and photographs Earth from 6 billion km away: the 'Pale Blue Dot'.", de:"Voyager 1 dreht sich um und fotografiert die Erde aus 6 Milliarden km: der „blassblaue Punkt“.", it:"Voyager 1 si volta e fotografa la Terra da 6 miliardi di km: il «pallido puntino blu».", cs:"Voyager 1 se otáčí a fotografuje Zemi ze 6 miliard km: „bledě modrá tečka“." }],
    [2, 15, 1564, { ca:"Neix a Pisa Galileo Galilei, el primer a estudiar el cel amb un telescopi.", oc:"Neish en Pisa Galileo Galilei, eth prumèr a estudiar eth cèu damb un telescòpi.", gl:"Nace en Pisa Galileo Galilei, o primeiro en estudar o ceo cun telescopio.", fr:"Naissance à Pise de Galilée, le premier à étudier le ciel avec une lunette.", en:"Galileo Galilei is born in Pisa: the first to study the sky through a telescope.", de:"Galileo Galilei wird in Pisa geboren: der Erste, der den Himmel mit einem Fernrohr erforscht.", it:"Nasce a Pisa Galileo Galilei, il primo a studiare il cielo con un cannocchiale.", cs:"V Pise se narodil Galileo Galilei, první, kdo zkoumal oblohu dalekohledem." }],
    [2, 18, 1930, { ca:"Clyde Tombaugh, de 24 anys, descobreix Plutó comparant plaques fotogràfiques a l'observatori Lowell.", oc:"Clyde Tombaugh, de 24 ans, descubrís Pluton en tot comparar plaques fotografiques en observatòri Lowell.", gl:"Clyde Tombaugh, de 24 anos, descobre Plutón comparando placas fotográficas no observatorio Lowell.", fr:"Clyde Tombaugh, 24 ans, découvre Pluton en comparant des plaques photographiques à l'observatoire Lowell.", en:"Clyde Tombaugh, aged 24, discovers Pluto by comparing photographic plates at Lowell Observatory.", de:"Der 24-jährige Clyde Tombaugh entdeckt Pluto durch den Vergleich von Fotoplatten am Lowell-Observatorium.", it:"Clyde Tombaugh, 24 anni, scopre Plutone confrontando lastre fotografiche all'osservatorio Lowell.", cs:"Čtyřiadvacetiletý Clyde Tombaugh objevuje Pluto porovnáváním fotografických desek na Lowellově observatoři." }],
    [2, 19, 1473, { ca:"Neix a Toruń Nicolau Copèrnic, que posarà el Sol al centre del sistema planetari.", oc:"Neish en Toruń Nicolau Copernic, que botarà eth Solei en centre deth sistèma planetari.", gl:"Nace en Toruń Nicolás Copérnico, que porá o Sol no centro do sistema planetario.", fr:"Naissance à Toruń de Nicolas Copernic, qui placera le Soleil au centre du système planétaire.", en:"Nicolaus Copernicus is born in Toruń: he will put the Sun at the centre of the planetary system.", de:"In Thorn wird Nikolaus Kopernikus geboren, der die Sonne ins Zentrum des Planetensystems rücken wird.", it:"Nasce a Toruń Niccolò Copernico, che porrà il Sole al centro del sistema planetario.", cs:"V Toruni se narodil Mikuláš Koperník, který umístí Slunce do středu planetární soustavy." }],
    [2, 24, 1987, { ca:"Es descobreix la supernova 1987A al Gran Núvol de Magalhães, la més brillant des de la de Kepler (1604).", oc:"Se descubrís era supernòva 1987A en Gran Nuvol de Magalhães, era mès brilhanta dempús era de Kepler (1604).", gl:"Descóbrese a supernova 1987A na Gran Nube de Magalláns, a máis brillante desde a de Kepler (1604).", fr:"Découverte de la supernova 1987A dans le Grand Nuage de Magellan, la plus brillante depuis celle de Kepler (1604).", en:"Supernova 1987A is discovered in the Large Magellanic Cloud: the brightest since Kepler's in 1604.", de:"In der Großen Magellanschen Wolke wird die Supernova 1987A entdeckt, die hellste seit Keplers von 1604.", it:"Si scopre la supernova 1987A nella Grande Nube di Magellano, la più brillante dopo quella di Keplero (1604).", cs:"Ve Velkém Magellanově oblaku je objevena supernova 1987A, nejjasnější od Keplerovy z roku 1604." }],
    [3, 1, 1966, { ca:"La sonda Venera 3 s'estavella a Venus: és el primer objecte humà que toca un altre planeta.", oc:"Era sonda Venera 3 s'estavèle en Venus: ei eth prumèr objècte uman que tòque un aute planeta.", gl:"A sonda Venera 3 esnafra en Venus: é o primeiro obxecto humano que toca outro planeta.", fr:"La sonde Venera 3 s'écrase sur Vénus : premier objet humain à toucher une autre planète.", en:"The Venera 3 probe crashes on Venus: the first human-made object to reach another planet.", de:"Die Sonde Venera 3 schlägt auf der Venus auf: das erste menschliche Objekt auf einem anderen Planeten.", it:"La sonda Venera 3 si schianta su Venere: il primo oggetto umano a toccare un altro pianeta.", cs:"Sonda Veněra 3 dopadá na Venuši: první lidský výtvor, který dosáhl jiné planety." }],
    [3, 13, 1781, { ca:"William Herschel descobreix Urà amb un telescopi fet per ell: el primer planeta trobat des de l'antiguitat.", oc:"William Herschel descubrís Uranus damb un telescòpi hèt per eth: eth prumèr planeta trobat dempús era antiquitat.", gl:"William Herschel descobre Urano cun telescopio feito por el: o primeiro planeta achado desde a antigüidade.", fr:"William Herschel découvre Uranus avec un télescope de sa fabrication : première planète trouvée depuis l'Antiquité.", en:"William Herschel discovers Uranus with a home-made telescope: the first planet found since antiquity.", de:"William Herschel entdeckt mit einem selbstgebauten Teleskop Uranus, den ersten seit der Antike gefundenen Planeten.", it:"William Herschel scopre Urano con un telescopio costruito da lui: il primo pianeta trovato dall'antichità.", cs:"William Herschel objevuje vlastnoručně postaveným dalekohledem Uran, první planetu nalezenou od starověku." }],
    [3, 14, 1986, { ca:"La sonda europea Giotto passa a 600 km del nucli del cometa Halley i el fotografia per primer cop.", oc:"Era sonda europèa Giotto passe a 600 km deth nucli dera comèta Halley e lo fotografie peth prumèr còp.", gl:"A sonda europea Giotto pasa a 600 km do núcleo do cometa Halley e fotografao por vez primeira.", fr:"La sonde européenne Giotto passe à 600 km du noyau de la comète de Halley et le photographie pour la première fois.", en:"The European probe Giotto flies 600 km from the nucleus of Halley's Comet and photographs it for the first time.", de:"Die europäische Sonde Giotto fliegt 600 km am Kern des Halleyschen Kometen vorbei und fotografiert ihn erstmals.", it:"La sonda europea Giotto passa a 600 km dal nucleo della cometa di Halley e lo fotografa per la prima volta.", cs:"Evropská sonda Giotto prolétá 600 km od jádra Halleyovy komety a poprvé ho fotografuje." }],
    [3, 22, 1997, { ca:"El cometa Hale-Bopp passa al punt més proper a la Terra: es va veure a ull nu durant 18 mesos.", oc:"Era comèta Hale-Bopp passe peth punt mès pròche ara Tèrra: se veigue a uelh nud pendent 18 mesi.", gl:"O cometa Hale-Bopp pasa polo punto máis próximo á Terra: viuse a simple vista durante 18 meses.", fr:"La comète Hale-Bopp passe au plus près de la Terre : elle restera visible à l'œil nu pendant 18 mois.", en:"Comet Hale-Bopp makes its closest approach to Earth: it was visible to the naked eye for 18 months.", de:"Komet Hale-Bopp kommt der Erde am nächsten: Er war 18 Monate lang mit bloßem Auge zu sehen.", it:"La cometa Hale-Bopp passa alla minima distanza dalla Terra: fu visibile a occhio nudo per 18 mesi.", cs:"Kometa Hale-Bopp prolétá nejblíže Zemi: pouhým okem byla vidět 18 měsíců." }],
    [4, 10, 2019, { ca:"Es publica la primera imatge d'un forat negre, al centre de la galàxia M87, a 55 milions d'anys llum.", oc:"Se publique eth prumèr imatge d'un trauc nere, en centre dera galaxia M87, a 55 milions d'ans lutz.", gl:"Publícase a primeira imaxe dun burato negro, no centro da galaxia M87, a 55 millóns de anos luz.", fr:"Publication de la première image d'un trou noir, au centre de la galaxie M87, à 55 millions d'années-lumière.", en:"The first image of a black hole is released: at the centre of galaxy M87, 55 million light years away.", de:"Das erste Bild eines Schwarzen Lochs wird veröffentlicht: im Zentrum der Galaxie M87, 55 Millionen Lichtjahre entfernt.", it:"Viene pubblicata la prima immagine di un buco nero, al centro della galassia M87, a 55 milioni di anni luce.", cs:"Zveřejněn první snímek černé díry ve středu galaxie M87, vzdálené 55 milionů světelných let." }],
    [4, 12, 1961, { ca:"Iuri Gagarin fa una volta a la Terra a bord del Vostok 1: el primer ésser humà a l'espai.", oc:"Iuri Gagarin hè un torn ara Tèrra a bòrd deth Vostok 1: eth prumèr èsser uman en espaci.", gl:"Iuri Gagarin dá unha volta á Terra a bordo do Vostok 1: o primeiro ser humano no espazo.", fr:"Youri Gagarine fait le tour de la Terre à bord de Vostok 1 : premier être humain dans l'espace.", en:"Yuri Gagarin orbits the Earth aboard Vostok 1: the first human in space.", de:"Juri Gagarin umrundet an Bord von Wostok 1 die Erde: der erste Mensch im All.", it:"Jurij Gagarin compie un giro della Terra a bordo della Vostok 1: il primo essere umano nello spazio.", cs:"Jurij Gagarin obletí Zemi v lodi Vostok 1: první člověk ve vesmíru." }],
    [4, 24, 1990, { ca:"S'enlaira el telescopi espacial Hubble, que canviarà la nostra imatge de l'univers.", oc:"S'enlaire eth telescòpi espaciau Hubble, que cambiarà eth nòste imatge der univèrs.", gl:"Despega o telescopio espacial Hubble, que cambiará a nosa imaxe do universo.", fr:"Lancement du télescope spatial Hubble, qui changera notre vision de l'Univers.", en:"The Hubble Space Telescope is launched; it will change our picture of the universe.", de:"Das Weltraumteleskop Hubble startet und wird unser Bild vom Universum verändern.", it:"Parte il telescopio spaziale Hubble, che cambierà la nostra immagine dell'universo.", cs:"Startuje Hubbleův vesmírný dalekohled, který změní náš obraz vesmíru." }],
    [4, 26, 1920, { ca:"«Gran Debat» entre Shapley i Curtis: les nebuloses espirals són dins la Via Làctia o són altres galàxies?", oc:"«Gran Debat» entre Shapley e Curtis: es nebulosas espiraus son laguens dera Via Lactèa o son autes galaxias?", gl:"«Gran Debate» entre Shapley e Curtis: as nebulosas espirais están na Vía Láctea ou son outras galaxias?", fr:"« Grand Débat » entre Shapley et Curtis : les nébuleuses spirales sont-elles dans la Voie lactée ou d'autres galaxies ?", en:"The 'Great Debate' between Shapley and Curtis: are spiral nebulae inside the Milky Way or other galaxies?", de:"„Große Debatte“ zwischen Shapley und Curtis: Liegen die Spiralnebel in der Milchstraße oder sind es andere Galaxien?", it:"«Grande Dibattito» tra Shapley e Curtis: le nebulose a spirale sono nella Via Lattea o altre galassie?", cs:"„Velká debata“ Shapleyho a Curtise: leží spirální mlhoviny v Mléčné dráze, nebo jsou to jiné galaxie?" }],
    [5, 15, 1618, { ca:"Johannes Kepler troba la seva tercera llei: el quadrat del període d'un planeta és proporcional al cub de la distància.", oc:"Johannes Kepler tròbe era sua tresau lei: eth quadrat deth periòde d'un planeta ei proporcionau ath cub dera distància.", gl:"Johannes Kepler atopa a súa terceira lei: o cadrado do período dun planeta é proporcional ao cubo da distancia.", fr:"Johannes Kepler trouve sa troisième loi : le carré de la période d'une planète est proportionnel au cube de sa distance.", en:"Johannes Kepler finds his third law: the square of a planet's period is proportional to the cube of its distance.", de:"Johannes Kepler findet sein drittes Gesetz: Das Quadrat der Umlaufzeit ist proportional zum Kubus des Abstands.", it:"Giovanni Keplero trova la sua terza legge: il quadrato del periodo di un pianeta è proporzionale al cubo della distanza.", cs:"Johannes Kepler nachází svůj třetí zákon: druhá mocnina oběžné doby je úměrná třetí mocnině vzdálenosti." }],
    [5, 28, -585, { ca:"Un eclipsi total de Sol, predit segons la tradició per Tales de Milet, atura una batalla entre medes i lidis.", oc:"Un eclipsi totau de Solei, predit segon era tradicion per Tales de Milet, arrèste ua batalha entre mèdes e lidis.", gl:"Unha eclipse total de Sol, predita segundo a tradición por Tales de Mileto, detén unha batalla entre medos e lidios.", fr:"Une éclipse totale de Soleil, prédite selon la tradition par Thalès de Milet, arrête une bataille entre Mèdes et Lydiens.", en:"A total solar eclipse, said to have been predicted by Thales of Miletus, halts a battle between Medes and Lydians.", de:"Eine totale Sonnenfinsternis, angeblich von Thales von Milet vorhergesagt, beendet eine Schlacht zwischen Medern und Lydern.", it:"Un'eclissi totale di Sole, predetta secondo la tradizione da Talete di Mileto, ferma una battaglia tra Medi e Lidi.", cs:"Úplné zatmění Slunce, které prý předpověděl Thalés z Milétu, zastaví bitvu mezi Médy a Lýdy." }],
    [5, 29, 1919, { ca:"L'eclipsi observat per Eddington mostra que el Sol desvia la llum de les estrelles: Einstein tenia raó.", oc:"Er eclipsi observat per Eddington mòstre que eth Solei desvie era lutz des estelas: Einstein auie rason.", gl:"A eclipse observada por Eddington mostra que o Sol desvía a luz das estrelas: Einstein tiña razón.", fr:"L'éclipse observée par Eddington montre que le Soleil dévie la lumière des étoiles : Einstein avait raison.", en:"The eclipse observed by Eddington shows that the Sun bends starlight: Einstein was right.", de:"Die von Eddington beobachtete Finsternis zeigt, dass die Sonne Sternenlicht ablenkt: Einstein hatte recht.", it:"L'eclissi osservata da Eddington mostra che il Sole devia la luce delle stelle: Einstein aveva ragione.", cs:"Zatmění pozorované Eddingtonem ukazuje, že Slunce ohýbá světlo hvězd: Einstein měl pravdu." }],
    [6, 6, 1761, { ca:"Trànsit de Venus davant del Sol: Lomonóssov hi descobreix una atmosfera.", oc:"Transit de Venus deuant deth Solei: Lomonossov i descubrís ua atmosfèra.", gl:"Tránsito de Venus por diante do Sol: Lomonósov descobre que ten atmosfera.", fr:"Transit de Vénus devant le Soleil : Lomonossov y découvre une atmosphère.", en:"Transit of Venus across the Sun: Lomonosov discovers that Venus has an atmosphere.", de:"Venustransit vor der Sonne: Lomonossow entdeckt, dass die Venus eine Atmosphäre hat.", it:"Transito di Venere davanti al Sole: Lomonosov scopre che Venere ha un'atmosfera.", cs:"Přechod Venuše přes Slunce: Lomonosov zjišťuje, že Venuše má atmosféru." }],
    [6, 16, 1963, { ca:"Valentina Tereixkova, a bord del Vostok 6, es converteix en la primera dona a l'espai.", oc:"Valentina Tereixkova, a bòrd deth Vostok 6, se convertís ena prumèra hemna en espaci.", gl:"Valentina Tereshkova, a bordo do Vostok 6, convértese na primeira muller no espazo.", fr:"Valentina Terechkova, à bord de Vostok 6, devient la première femme dans l'espace.", en:"Valentina Tereshkova, aboard Vostok 6, becomes the first woman in space.", de:"Walentina Tereschkowa wird an Bord von Wostok 6 die erste Frau im All.", it:"Valentina Tereškova, a bordo della Vostok 6, diventa la prima donna nello spazio.", cs:"Valentina Těreškovová se na palubě Vostoku 6 stává první ženou ve vesmíru." }],
    [6, 22, 1633, { ca:"Galileu, jutjat per la Inquisició, és obligat a abjurar de la idea que la Terra gira al voltant del Sol.", oc:"Galilèu, jutjat pera Inquisicion, ei obligat a abjurar dera idèa que la Tèrra vire ath torn deth Solei.", gl:"Galileo, xulgado pola Inquisición, é obrigado a abxurar da idea de que a Terra xira arredor do Sol.", fr:"Galilée, jugé par l'Inquisition, est contraint d'abjurer l'idée que la Terre tourne autour du Soleil.", en:"Galileo, tried by the Inquisition, is forced to abjure the idea that the Earth moves around the Sun.", de:"Galilei muss vor der Inquisition der Lehre abschwören, dass sich die Erde um die Sonne dreht.", it:"Galileo, processato dall'Inquisizione, è costretto ad abiurare l'idea che la Terra giri intorno al Sole.", cs:"Galileo musí před inkvizicí odvolat učení, že Země obíhá kolem Slunce." }],
    [6, 30, 1908, { ca:"Una explosió sobre Tunguska (Sibèria), d'un asteroide o cometa, abat 80 milions d'arbres.", oc:"Ua explosion sus Tunguska (Siberia), d'un asteroïde o comèta, abat 80 milions d'arbes.", gl:"Unha explosión sobre Tunguska (Siberia), dun asteroide ou cometa, derruba 80 millóns de árbores.", fr:"Une explosion au-dessus de la Toungouska (Sibérie), due à un astéroïde ou une comète, abat 80 millions d'arbres.", en:"An explosion over Tunguska, Siberia, caused by an asteroid or comet, flattens 80 million trees.", de:"Eine Explosion über der Tunguska in Sibirien, ausgelöst durch einen Asteroiden oder Kometen, knickt 80 Millionen Bäume.", it:"Un'esplosione sopra Tunguska (Siberia), dovuta a un asteroide o a una cometa, abbatte 80 milioni di alberi.", cs:"Výbuch planetky či komety nad Tunguzkou na Sibiři vyvrátí 80 milionů stromů." }],
    [7, 2, 1566, { ca:"Mor a Salon-de-Provence Nostradamus, metge i astròleg, autor de les famoses «Profecies».", oc:"Morís en Salon de Provença Nostradamus, mètge e astròleg, autor des famoses «Profecias».", gl:"Morre en Salon-de-Provence Nostradamus, médico e astrólogo, autor das famosas «Profecías».", fr:"Mort à Salon-de-Provence de Nostradamus, médecin et astrologue, auteur des célèbres « Prophéties ».", en:"Nostradamus, physician and astrologer, author of the famous 'Prophecies', dies in Salon-de-Provence.", de:"In Salon-de-Provence stirbt Nostradamus, Arzt und Astrologe, Verfasser der berühmten „Prophezeiungen“.", it:"Muore a Salon-de-Provence Nostradamus, medico e astrologo, autore delle celebri «Profezie».", cs:"V Salon-de-Provence umírá Nostradamus, lékař a astrolog, autor slavných „Proroctví“." }],
    [7, 4, 1054, { ca:"Astrònoms xinesos anoten una «estrella convidada» visible de dia: l'explosió que va formar la nebulosa del Cranc.", oc:"Astrònoms chinesi anòten ua «estela convidada» visibla de dia: era explosion que formèc era nebulosa deth Cranc.", gl:"Astrónomos chineses anotan unha «estrela convidada» visible de día: a explosión que formou a nebulosa do Cangrexo.", fr:"Des astronomes chinois notent une « étoile invitée » visible de jour : l'explosion qui a formé la nébuleuse du Crabe.", en:"Chinese astronomers record a 'guest star' visible by day: the explosion that made the Crab Nebula.", de:"Chinesische Astronomen notieren einen „Gaststern“, der am Tag sichtbar ist: die Explosion, aus der der Krebsnebel entstand.", it:"Astronomi cinesi annotano una «stella ospite» visibile di giorno: l'esplosione che formò la nebulosa del Granchio.", cs:"Čínští astronomové zaznamenávají „hostující hvězdu“ viditelnou i ve dne: výbuch, z něhož vznikla Krabí mlhovina." }],
    [7, 5, 1687, { ca:"Es publiquen els «Principia» de Newton, amb la llei de la gravitació universal.", oc:"Se publiquen es «Principia» de Newton, damb era lei dera gravitacion universau.", gl:"Publícanse os «Principia» de Newton, coa lei da gravitación universal.", fr:"Publication des « Principia » de Newton et de la loi de la gravitation universelle.", en:"Newton's 'Principia' is published, with the law of universal gravitation.", de:"Newtons „Principia“ erscheinen, mit dem Gesetz der allgemeinen Gravitation.", it:"Escono i «Principia» di Newton, con la legge di gravitazione universale.", cs:"Vychází Newtonova „Principia“ se zákonem všeobecné gravitace." }],
    [7, 14, 2015, { ca:"La sonda New Horizons passa per Plutó i en mostra el gran «cor» de gel.", oc:"Era sonda New Horizons passe per Pluton e ne mòstre eth gran «còr» de glaç.", gl:"A sonda New Horizons pasa por Plutón e amosa o seu gran «corazón» de xeo.", fr:"La sonde New Horizons survole Pluton et révèle son grand « cœur » de glace.", en:"The New Horizons probe flies past Pluto and reveals its great icy 'heart'.", de:"Die Sonde New Horizons fliegt an Pluto vorbei und zeigt sein großes „Herz“ aus Eis.", it:"La sonda New Horizons sorvola Plutone e ne mostra il grande «cuore» di ghiaccio.", cs:"Sonda New Horizons prolétá kolem Pluta a ukazuje jeho velké ledové „srdce“." }],
    [7, 16, 1994, { ca:"Els fragments del cometa Shoemaker-Levy 9 comencen a xocar contra Júpiter durant sis dies.", oc:"Es tròces dera comèta Shoemaker-Levy 9 comencen a trucar contra Jupitèr pendent sheis dies.", gl:"Os fragmentos do cometa Shoemaker-Levy 9 comezan a chocar contra Xúpiter durante seis días.", fr:"Les fragments de la comète Shoemaker-Levy 9 commencent à percuter Jupiter pendant six jours.", en:"Fragments of comet Shoemaker-Levy 9 begin six days of impacts on Jupiter.", de:"Die Bruchstücke des Kometen Shoemaker-Levy 9 schlagen sechs Tage lang auf Jupiter ein.", it:"I frammenti della cometa Shoemaker-Levy 9 iniziano a colpire Giove per sei giorni.", cs:"Úlomky komety Shoemaker-Levy 9 začínají šest dní dopadat na Jupiter." }],
    [7, 20, 1969, { ca:"L'Apollo 11 es posa a la Lluna: Armstrong i Aldrin hi caminen per primer cop.", oc:"Er Apollo 11 se pause ena Lua: Armstrong e Aldrin i caminen peth prumèr còp.", gl:"O Apollo 11 pousa na Lúa: Armstrong e Aldrin camiñan nela por vez primeira.", fr:"Apollo 11 se pose sur la Lune : Armstrong et Aldrin y marchent pour la première fois.", en:"Apollo 11 lands on the Moon: Armstrong and Aldrin walk on it for the first time.", de:"Apollo 11 landet auf dem Mond: Armstrong und Aldrin betreten ihn als Erste.", it:"L'Apollo 11 si posa sulla Luna: Armstrong e Aldrin vi camminano per la prima volta.", cs:"Apollo 11 přistává na Měsíci: Armstrong a Aldrin po něm poprvé kráčejí." }],
    [8, 6, 2012, { ca:"El robot Curiosity aterra al cràter Gale de Mart penjat d'una «grua del cel».", oc:"Eth robòt Curiosity aterrís en cratèr Gale de Mart penjat d'ua «grua deth cèu».", gl:"O robot Curiosity aterra no cráter Gale de Marte colgado dun «guindastre do ceo».", fr:"Le robot Curiosity se pose dans le cratère Gale sur Mars, suspendu à une « grue céleste ».", en:"The Curiosity rover lands in Mars's Gale crater, lowered by a 'sky crane'.", de:"Der Rover Curiosity landet im Marskrater Gale, abgeseilt von einem „Himmelskran“.", it:"Il rover Curiosity atterra nel cratere Gale su Marte, calato da una «gru celeste».", cs:"Vozítko Curiosity přistává v kráteru Gale na Marsu, spuštěné z „nebeského jeřábu“." }],
    [8, 12, 1877, { ca:"Asaph Hall descobreix Deimos, la lluna petita de Mart; sis dies després trobarà Fobos.", oc:"Asaph Hall descubrís Deimos, era petita lua de Mart; sheis dies dempús trobarà Fobos.", gl:"Asaph Hall descobre Deimos, a lúa pequena de Marte; seis días despois atopará Fobos.", fr:"Asaph Hall découvre Déimos, la petite lune de Mars ; six jours plus tard il trouvera Phobos.", en:"Asaph Hall discovers Deimos, Mars's small moon; six days later he finds Phobos.", de:"Asaph Hall entdeckt Deimos, den kleinen Marsmond; sechs Tage später findet er Phobos.", it:"Asaph Hall scopre Deimos, la piccola luna di Marte; sei giorni dopo troverà Phobos.", cs:"Asaph Hall objevuje Deimos, malý měsíc Marsu; o šest dní později najde Phobos." }],
    [8, 24, 2006, { ca:"La Unió Astronòmica Internacional deixa Plutó fora dels planetes i el classifica com a planeta nan.", oc:"Era Union Astronomica Internacionau dèishe Pluton dehòra des planetes e lo classifique coma planeta nan.", gl:"A Unión Astronómica Internacional deixa Plutón fóra dos planetas e clasifícao como planeta anano.", fr:"L'Union astronomique internationale retire Pluton des planètes et la classe planète naine.", en:"The International Astronomical Union removes Pluto from the planets and calls it a dwarf planet.", de:"Die Internationale Astronomische Union streicht Pluto aus der Liste der Planeten: nun ein Zwergplanet.", it:"L'Unione Astronomica Internazionale toglie Plutone dai pianeti e lo classifica come pianeta nano.", cs:"Mezinárodní astronomická unie vyřazuje Pluto z planet a řadí ho mezi trpasličí planety." }],
    [8, 25, 1609, { ca:"Galileu presenta el seu telescopi al Senat de Venècia des del campanar de Sant Marc.", oc:"Galilèu presente eth sòn telescòpi ath Senat de Venècia dempús eth campanau de Sant Marc.", gl:"Galileo presenta o seu telescopio ao Senado de Venecia desde o campanario de San Marcos.", fr:"Galilée présente sa lunette au Sénat de Venise depuis le campanile de Saint-Marc.", en:"Galileo shows his telescope to the Venetian Senate from the bell tower of St Mark's.", de:"Galilei führt dem Senat von Venedig vom Markusturm aus sein Fernrohr vor.", it:"Galileo presenta il suo cannocchiale al Senato veneziano dal campanile di San Marco.", cs:"Galileo předvádí benátskému senátu svůj dalekohled z kampanily u svatého Marka." }],
    [9, 5, 1977, { ca:"S'enlaira la Voyager 1. Avui és l'objecte humà més llunyà, gairebé a un dia llum de la Terra.", oc:"S'enlaire era Voyager 1. Auei ei er objècte uman mès lunhèc, quasi a un dia lutz dera Tèrra.", gl:"Despega a Voyager 1. Hoxe é o obxecto humano máis afastado, case a un día luz da Terra.", fr:"Lancement de Voyager 1. C'est aujourd'hui l'objet humain le plus lointain, à près d'un jour-lumière.", en:"Voyager 1 is launched. Today it is the most distant human-made object, almost a light day away.", de:"Voyager 1 startet. Heute ist sie das fernste menschliche Objekt, fast einen Lichttag entfernt.", it:"Parte la Voyager 1. Oggi è l'oggetto umano più lontano, a quasi un giorno luce dalla Terra.", cs:"Startuje Voyager 1. Dnes je nejvzdálenějším lidským výtvorem, téměř světelný den od Země." }],
    [9, 14, 2015, { ca:"Els detectors LIGO capten per primer cop ones gravitacionals: dos forats negres que es fusionen.", oc:"Es detectors LIGO capten peth prumèr còp ondades gravitacionaus: dus traucs neri que se fusionen.", gl:"Os detectores LIGO captan por vez primeira ondas gravitacionais: dous buratos negros que se funden.", fr:"Les détecteurs LIGO captent pour la première fois des ondes gravitationnelles : deux trous noirs qui fusionnent.", en:"The LIGO detectors catch gravitational waves for the first time: two black holes merging.", de:"Die LIGO-Detektoren messen erstmals Gravitationswellen: zwei verschmelzende Schwarze Löcher.", it:"I rivelatori LIGO captano per la prima volta onde gravitazionali: due buchi neri che si fondono.", cs:"Detektory LIGO poprvé zachytily gravitační vlny: splynutí dvou černých děr." }],
    [9, 15, 2017, { ca:"La sonda Cassini acaba la missió capbussant-se a Saturn després de 13 anys estudiant-lo.", oc:"Era sonda Cassini acabe era mission en tot cabussar-se en Saturne dempús de 13 ans d'estudiar-lo.", gl:"A sonda Cassini remata a misión mergullándose en Saturno tras 13 anos estudándoo.", fr:"La sonde Cassini termine sa mission en plongeant dans Saturne après 13 ans d'étude.", en:"The Cassini probe ends its mission by diving into Saturn after 13 years studying it.", de:"Die Sonde Cassini beendet ihre Mission mit einem Sturz in den Saturn, nach 13 Jahren Forschung.", it:"La sonda Cassini conclude la missione tuffandosi in Saturno dopo 13 anni di studio.", cs:"Sonda Cassini končí misi ponořením do Saturnu po 13 letech jeho zkoumání." }],
    [9, 23, 1846, { ca:"Johann Galle troba Neptú a menys d'un grau d'on Le Verrier havia calculat que seria.", oc:"Johann Galle tròbe Neptun a mens d'un grad d'a on Le Verrier auie calculat que serie.", gl:"Johann Galle atopa Neptuno a menos dun grao de onde Le Verrier calculara que estaría.", fr:"Johann Galle trouve Neptune à moins d'un degré de la position calculée par Le Verrier.", en:"Johann Galle finds Neptune less than a degree from where Le Verrier had calculated it would be.", de:"Johann Galle findet Neptun weniger als ein Grad von der Stelle entfernt, die Le Verrier berechnet hatte.", it:"Johann Galle trova Nettuno a meno di un grado da dove Le Verrier aveva calcolato che fosse.", cs:"Johann Galle nachází Neptun necelý stupeň od místa, které vypočítal Le Verrier." }],
    [10, 4, 1957, { ca:"La Unió Soviètica llança l'Sputnik 1, el primer satèl·lit artificial: comença l'era espacial.", oc:"Era Union Sovietica lance er Sputnik 1, eth prumèr satellit artificiau: comence era epòca espaciau.", gl:"A Unión Soviética lanza o Sputnik 1, o primeiro satélite artificial: comeza a era espacial.", fr:"L'Union soviétique lance Spoutnik 1, premier satellite artificiel : l'ère spatiale commence.", en:"The Soviet Union launches Sputnik 1, the first artificial satellite: the space age begins.", de:"Die Sowjetunion startet Sputnik 1, den ersten künstlichen Satelliten: Das Raumfahrtzeitalter beginnt.", it:"L'Unione Sovietica lancia lo Sputnik 1, il primo satellite artificiale: inizia l'era spaziale.", cs:"Sovětský svaz vypouští Sputnik 1, první umělou družici: začíná kosmický věk." }],
    [10, 6, 1995, { ca:"Mayor i Queloz anuncien 51 Pegasi b, el primer planeta trobat al voltant d'una estrella com el Sol.", oc:"Mayor e Queloz anóncien 51 Pegasi b, eth prumèr planeta trobat ath torn d'ua estela coma eth Solei.", gl:"Mayor e Queloz anuncian 51 Pegasi b, o primeiro planeta achado arredor dunha estrela coma o Sol.", fr:"Mayor et Queloz annoncent 51 Pegasi b, première planète trouvée autour d'une étoile comme le Soleil.", en:"Mayor and Queloz announce 51 Pegasi b, the first planet found around a Sun-like star.", de:"Mayor und Queloz verkünden 51 Pegasi b, den ersten Planeten um einen sonnenähnlichen Stern.", it:"Mayor e Queloz annunciano 51 Pegasi b, il primo pianeta trovato attorno a una stella come il Sole.", cs:"Mayor a Queloz oznamují 51 Pegasi b, první planetu objevenou u hvězdy podobné Slunci." }],
    [10, 9, 1410, { ca:"Primera notícia escrita de l'Orloj de Praga, obra del rellotger Mikuláš de Kadaň i de l'astrònom Jan Šindel.", oc:"Prumèra notícia escrita der Orloj de Praga, òbra deth relotgèr Mikuláš de Kadaň e der astrònom Jan Šindel.", gl:"Primeira noticia escrita do Orloj de Praga, obra do reloxeiro Mikuláš de Kadaň e do astrónomo Jan Šindel.", fr:"Première mention écrite de l'Orloj de Prague, œuvre de l'horloger Mikuláš de Kadaň et de l'astronome Jan Šindel.", en:"First written record of Prague's Orloj, the work of clockmaker Mikuláš of Kadaň and astronomer Jan Šindel.", de:"Erste schriftliche Erwähnung der Prager Orloj, Werk des Uhrmachers Mikuláš von Kadaň und des Astronomen Jan Šindel.", it:"Prima notizia scritta dell'Orloj di Praga, opera dell'orologiaio Mikuláš di Kadaň e dell'astronomo Jan Šindel.", cs:"První písemná zmínka o pražském orloji, díle hodináře Mikuláše z Kadaně a astronoma Jana Šindela." }],
    [10, 13, 1773, { ca:"Charles Messier descobreix la galàxia del Remolí (M51): la primera on més tard es veurà forma d'espiral.", oc:"Charles Messier descubrís era galaxia deth Remolin (M51): era prumèra a on mès tard se veirà forma d'espirau.", gl:"Charles Messier descobre a galaxia do Remuíño (M51): a primeira na que despois se verá forma espiral.", fr:"Charles Messier découvre la galaxie du Tourbillon (M51), la première où l'on verra plus tard une spirale.", en:"Charles Messier discovers the Whirlpool Galaxy (M51), the first in which a spiral shape will later be seen.", de:"Charles Messier entdeckt die Whirlpool-Galaxie (M51), die erste, an der man später eine Spiralform erkennt.", it:"Charles Messier scopre la galassia Vortice (M51), la prima in cui si vedrà poi una forma a spirale.", cs:"Charles Messier objevuje galaxii Vír (M51), první, u níž bude později rozpoznán spirální tvar." }],
    [10, 15, 1582, { ca:"Entra en vigor el calendari gregorià: després del dijous 4 d'octubre ve directament el divendres 15.", oc:"Entre en vigor eth calendièr gregorian: dempús deth dijaus 4 d'octòbre ven dirèctament eth diuendres 15.", gl:"Entra en vigor o calendario gregoriano: despois do xoves 4 de outubro vén directamente o venres 15.", fr:"Entrée en vigueur du calendrier grégorien : le jeudi 4 octobre est suivi directement du vendredi 15.", en:"The Gregorian calendar comes into force: Thursday 4 October is followed directly by Friday 15 October.", de:"Der gregorianische Kalender tritt in Kraft: Auf Donnerstag, den 4. Oktober, folgt direkt Freitag, der 15.", it:"Entra in vigore il calendario gregoriano: dopo giovedì 4 ottobre viene direttamente venerdì 15.", cs:"Začíná platit gregoriánský kalendář: po čtvrtku 4. října následuje rovnou pátek 15. října." }],
    [10, 17, 1604, { ca:"Kepler comença a observar a Praga una «estrella nova» a Ofiüc: l'última supernova vista a la nostra galàxia.", oc:"Kepler comence a observar en Praga ua «estela nava» en Ofiucus: era darrèra supernòva vista ena nòsta galaxia.", gl:"Kepler comeza a observar en Praga unha «estrela nova» en Ofiuco: a última supernova vista na nosa galaxia.", fr:"Kepler commence à observer à Prague une « étoile nouvelle » dans Ophiuchus : la dernière supernova vue dans notre galaxie.", en:"In Prague, Kepler starts observing a 'new star' in Ophiuchus: the last supernova seen in our galaxy.", de:"Kepler beginnt in Prag einen „neuen Stern“ im Schlangenträger zu beobachten: die letzte Supernova in unserer Galaxis.", it:"A Praga Keplero inizia a osservare una «stella nuova» in Ofiuco: l'ultima supernova vista nella nostra galassia.", cs:"Kepler začíná v Praze pozorovat „novou hvězdu“ v Hadonoši: poslední supernovu spatřenou v naší Galaxii." }],
    [10, 24, 1601, { ca:"Mor a Praga Tycho Brahe, astrònom i astròleg de l'emperador Rodolf II. Kepler n'hereta les observacions.", oc:"Morís en Praga Tycho Brahe, astrònom e astròleg der emperador Rodolf II. Kepler n'eretè es observacions.", gl:"Morre en Praga Tycho Brahe, astrónomo e astrólogo do emperador Rodolfo II. Kepler herda as súas observacións.", fr:"Mort à Prague de Tycho Brahe, astronome et astrologue de l'empereur Rodolphe II. Kepler hérite de ses observations.", en:"Tycho Brahe, astronomer and astrologer to Emperor Rudolf II, dies in Prague. Kepler inherits his observations.", de:"In Prag stirbt Tycho Brahe, Astronom und Astrologe Kaiser Rudolfs II. Kepler erbt seine Beobachtungen.", it:"Muore a Praga Tycho Brahe, astronomo e astrologo dell'imperatore Rodolfo II. Keplero ne eredita le osservazioni.", cs:"V Praze umírá Tycho Brahe, astronom a astrolog císaře Rudolfa II. Jeho pozorování dědí Kepler." }],
    [11, 3, 1957, { ca:"La gossa Laika, a bord de l'Sputnik 2, és el primer animal que fa la volta a la Terra.", oc:"Era gossa Laika, a bòrd der Sputnik 2, ei eth prumèr animau que hè eth torn dera Tèrra.", gl:"A cadela Laika, a bordo do Sputnik 2, é o primeiro animal que dá a volta á Terra.", fr:"La chienne Laïka, à bord de Spoutnik 2, est le premier animal à faire le tour de la Terre.", en:"The dog Laika, aboard Sputnik 2, becomes the first animal to orbit the Earth.", de:"Die Hündin Laika umkreist an Bord von Sputnik 2 als erstes Tier die Erde.", it:"La cagnolina Laika, a bordo dello Sputnik 2, è il primo animale a fare il giro della Terra.", cs:"Fenka Lajka na palubě Sputniku 2 jako první zvíře obíhá Zemi." }],
    [11, 8, 1656, { ca:"Neix Edmond Halley, que predirà el retorn del cometa que porta el seu nom.", oc:"Neish Edmond Halley, que predirà eth retorn dera comèta que pòrte eth sòn nòm.", gl:"Nace Edmond Halley, que predirá o regreso do cometa que leva o seu nome.", fr:"Naissance d'Edmond Halley, qui prédira le retour de la comète qui porte son nom.", en:"Edmond Halley is born; he will predict the return of the comet that bears his name.", de:"Edmond Halley wird geboren; er wird die Wiederkehr des nach ihm benannten Kometen vorhersagen.", it:"Nasce Edmond Halley, che predirà il ritorno della cometa che porta il suo nome.", cs:"Narodil se Edmond Halley, který předpoví návrat komety nesoucí jeho jméno." }],
    [11, 11, 1572, { ca:"Tycho Brahe veu una estrella nova a Cassiopea i demostra que el cel de les estrelles també canvia.", oc:"Tycho Brahe ve ua estela nava en Cassiopèa e demòstre qu'eth cèu des estelas tanben cambie.", gl:"Tycho Brahe ve unha estrela nova en Casiopea e demostra que o ceo das estrelas tamén cambia.", fr:"Tycho Brahe voit une étoile nouvelle dans Cassiopée et montre que le ciel des étoiles change aussi.", en:"Tycho Brahe sees a new star in Cassiopeia and shows that the starry sky can change.", de:"Tycho Brahe sieht einen neuen Stern in der Kassiopeia und zeigt, dass sich auch der Fixsternhimmel ändert.", it:"Tycho Brahe vede una stella nuova in Cassiopea e dimostra che anche il cielo delle stelle cambia.", cs:"Tycho Brahe spatří novou hvězdu v Kasiopeji a dokazuje, že se mění i hvězdná obloha." }],
    [11, 12, 1833, { ca:"La pluja d'estels de les Leònides omple el cel d'Amèrica: neix l'estudi científic dels meteors.", oc:"Era ploja d'estelas des Leonidas omplís eth cèu d'America: neish er estudi scientific des meteors.", gl:"A choiva de estrelas das Leónidas enche o ceo de América: nace o estudo científico dos meteoros.", fr:"La pluie d'étoiles filantes des Léonides embrase le ciel d'Amérique : naissance de l'étude des météores.", en:"The Leonid meteor storm fills the American sky: the scientific study of meteors is born.", de:"Der Leoniden-Meteorsturm erfüllt den Himmel Amerikas: Die wissenschaftliche Meteorforschung beginnt.", it:"La pioggia di stelle delle Leonidi riempie il cielo d'America: nasce lo studio scientifico delle meteore.", cs:"Meteorický roj Leonid zaplní oblohu nad Amerikou: rodí se vědecké studium meteorů." }],
    [11, 20, 1889, { ca:"Neix Edwin Hubble, que demostrarà que hi ha altres galàxies i que l'univers s'expandeix.", oc:"Neish Edwin Hubble, que demostrarà que i a autes galaxias e qu'er univèrs s'espandís.", gl:"Nace Edwin Hubble, que demostrará que hai outras galaxias e que o universo se expande.", fr:"Naissance d'Edwin Hubble, qui montrera qu'il existe d'autres galaxies et que l'Univers est en expansion.", en:"Edwin Hubble is born; he will show that other galaxies exist and that the universe is expanding.", de:"Edwin Hubble wird geboren; er wird zeigen, dass es andere Galaxien gibt und das Universum sich ausdehnt.", it:"Nasce Edwin Hubble, che dimostrerà che esistono altre galassie e che l'universo si espande.", cs:"Narodil se Edwin Hubble, který dokáže, že existují jiné galaxie a že se vesmír rozpíná." }],
    [12, 14, 1546, { ca:"Neix Tycho Brahe, el millor observador del cel abans del telescopi; acabarà els seus dies a Praga.", oc:"Neish Tycho Brahe, eth melhor observador deth cèu abans deth telescòpi; acabarà es sòns dies en Praga.", gl:"Nace Tycho Brahe, o mellor observador do ceo antes do telescopio; rematará os seus días en Praga.", fr:"Naissance de Tycho Brahe, le meilleur observateur du ciel avant la lunette ; il finira ses jours à Prague.", en:"Tycho Brahe is born, the finest sky-watcher before the telescope; he will end his days in Prague.", de:"Tycho Brahe wird geboren, der beste Himmelsbeobachter vor dem Fernrohr; er wird in Prag sterben.", it:"Nasce Tycho Brahe, il miglior osservatore del cielo prima del cannocchiale; finirà i suoi giorni a Praga.", cs:"Narodil se Tycho Brahe, nejlepší pozorovatel oblohy před vynálezem dalekohledu; zemře v Praze." }],
    [12, 24, 1968, { ca:"Des de l'Apollo 8, en òrbita lunar, William Anders fotografia la Terra sortint per l'horitzó de la Lluna.", oc:"Dempús er Apollo 8, en orbita lunara, William Anders fotografie era Tèrra en tot gésser per orizon dera Lua.", gl:"Desde o Apollo 8, en órbita lunar, William Anders fotografa a Terra saíndo polo horizonte da Lúa.", fr:"Depuis Apollo 8, en orbite lunaire, William Anders photographie la Terre se levant à l'horizon de la Lune.", en:"From Apollo 8 in lunar orbit, William Anders photographs the Earth rising over the Moon's horizon.", de:"Von Apollo 8 im Mondorbit fotografiert William Anders die über dem Mondhorizont aufgehende Erde.", it:"Dall'Apollo 8, in orbita lunare, William Anders fotografa la Terra che sorge dall'orizzonte della Luna.", cs:"Z Apolla 8 na oběžné dráze Měsíce fotografuje William Anders Zemi vycházející nad měsíčním obzorem." }],
    [12, 25, 2021, { ca:"S'enlaira el telescopi espacial James Webb, que veu les primeres galàxies de l'univers.", oc:"S'enlaire eth telescòpi espaciau James Webb, que ve es prumères galaxias der univèrs.", gl:"Despega o telescopio espacial James Webb, que ve as primeiras galaxias do universo.", fr:"Lancement du télescope spatial James Webb, qui observe les premières galaxies de l'Univers.", en:"The James Webb Space Telescope is launched; it sees the universe's first galaxies.", de:"Das James-Webb-Weltraumteleskop startet; es sieht die ersten Galaxien des Universums.", it:"Parte il telescopio spaziale James Webb, che osserva le prime galassie dell'universo.", cs:"Startuje Vesmírný dalekohled Jamese Webba, který pozoruje první galaxie vesmíru." }],
    [12, 27, 1571, { ca:"Neix Johannes Kepler, que a Praga descobrirà que els planetes es mouen en el·lipses.", oc:"Neish Johannes Kepler, qu'en Praga descubrirà que es planetes se mòuen en ellipses.", gl:"Nace Johannes Kepler, que en Praga descubrirá que os planetas se moven en elipses.", fr:"Naissance de Johannes Kepler, qui découvrira à Prague que les planètes suivent des ellipses.", en:"Johannes Kepler is born; in Prague he will discover that the planets move in ellipses.", de:"Johannes Kepler wird geboren; in Prag wird er entdecken, dass sich die Planeten auf Ellipsen bewegen.", it:"Nasce Giovanni Keplero, che a Praga scoprirà che i pianeti si muovono su ellissi.", cs:"Narodil se Johannes Kepler, který v Praze objeví, že se planety pohybují po elipsách." }]
  ];

  const JMENINY = ["Nový rok", "Karina", "Radmila", "Diana", "Dalimil", "Kašpar, Melichar a Baltazar (Tři králové)", "Vilma", "Čestmír", "Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Ctirad", "Drahoslav", "Vladislav", "Doubravka", "Ilona a Sebastian", "Běla", "Slavomír", "Zdeněk", "Milena", "Miloš", "Zora", "Ingrid", "Otýlie", "Zdislava", "Robin", "Marika", "Hynek a Jasmína", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada", "Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Ljuba", "Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka a Eleonora", "Petr", "Svatopluk", "Matěj a Matyáš", "Liliana", "Dorota a Božetěch", "Alexandr", "Lumír", "Horymír", "Bedřich a Bedřiška", "Anežka", "Kamil", "Stela", "Kazimír", "Miroslav", "Tomáš", "Gabriela", "Františka", "Viktorie", "Anděla a Angelika", "Řehoř", "Růžena", "Matylda, Rút a Vlastibor", "Ida", "Elena a Herbert", "Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona a Lea", "Ivona", "Gabriel", "Marián", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido", "Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula a Venuše", "Hermína", "Ema", "Dušan a Dušana", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Irena", "Rudolf", "Valérie", "Rostislav", "Marcela", "Alexandra", "Evžénie", "Vojtěch", "Jiří", "Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav", "Pamela a Jeremiáš", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", "Zlatan", "Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie a Sofie", "Přemysl", "Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana a Vanesa", "Viola", "Filip", "Valdemar", "Vilém", "Maxim", "Ferdinand", "Kamila", "Laura", "Jarmil", "Tamara a Kevin", "Dalibor", "Dobroslav", "Norbert", "Iveta", "Medard", "Stanislava", "Gita a Margita", "Bruno", "Antonie a Táňa", "Antonín", "Roland", "Vít", "Zbyněk", "Adolf", "Milan", "Leoš a Leo", "Květa a Květuše", "Alois a Aloisie", "Pavla", "Zdeňka", "Jan", "Ivan", "Adriana a Adrian", "Ladislav", "Lubomír", "Petr a Pavel", "Šárka", "Jaroslava", "Patricie", "Radomír", "Prokop", "Cyril a Metoděj", "Spytihněv", "Bohuslava", "Nora", "Drahoslava a Drahuše", "Libuše a Amálie", "Olga a Helga", "Bořek", "Markéta", "Karolína", "Jindřich", "Luboš", "Martina", "Drahomíra", "Čeněk", "Eliáš a Ilja", "Vítězslav", "Magdaléna", "Libor", "Kristýna", "Jakub", "Anna a Anita", "Věroslav", "Viktor a Alina", "Marta", "Bořivoj", "Ignác a Elin", "Oskar", "Gustav", "Miluše", "Dominik a Dominika", "Kristián", "Oldřiška", "Lada", "Soběslav", "Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Hana", "Jáchym", "Petra", "Helena a Jelena", "Ludvík", "Bernard", "Johana a Jovana", "Bohuslav", "Sandra", "Bartoloměj", "Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína", "Linda a Samuel", "Adéla", "Bronislav a Bronislava", "Jindřiška a Rozálie", "Boris", "Boleslav", "Regína", "Mariana", "Daniela", "Irma", "Denisa a Denis", "Marie a Mia", "Lubor", "Radka", "Jolana", "Ludmila a Lola", "Naděžda", "Kryštof", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír a Jaromíra", "Zlata", "Andrea", "Jonáš", "Václav a Václava", "Michal a Michael", "Jeroným", "Igor", "Olívie a Oliver", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Věra", "Sára a Štefan", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Havel", "Hedvika", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina", "Beáta", "Erik", "Šarlota", "Alfréd", "Silvie", "Tadeáš", "Štěpánka", "Felix", "Tobiáš / ''Památka zesnulých''", "Hubert", "Karel a Karla", "Miriam", "Liběna", "Saskie", "Bohumír", "Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Otmar", "Mahulena", "Romana", "Alžběta", "Nikola a Nikolas", "Albert", "Cecílie", "Klement", "Emílie", "Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej", "Iva", "Blanka", "Svatoslav", "Barbora", "Jitka", "Mikuláš", "Ambrož", "Květoslava", "Vratislav a Vratislava", "Julie", "Dana a Danuše", "Simona", "Lucie", "Lýdie", "Radana", "Albína", "Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam a Eva", "Boží hod vánoční", "Štěpán", "Žaneta", "Bohumila", "Judita", "David", "Silvestr"];

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
    const f = fulls[pag];
    if (f && f.dataset.full === 'noticies' && window.__repaginaNoticies) window.__repaginaNoticies();
    if (f && typeof ajustaFull === 'function') requestAnimationFrame(() => ajustaFull(f));
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
    // En tàctil el dit ja és capturat per l'element tocat; quan el panell el pren, el
    // lostpointercapture d'aquell fill puja fins aquí i no s'ha de confondre amb una pèrdua real.
    arrel.addEventListener('lostpointercapture', e => { if (e.target !== arrel) return; if (ini && ini.h){ ini = null; posaL(0, true); } });
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
  const llTemps = lliscador($('llTemps')), llAvui = lliscador($('llAvui')), llDist = lliscador($('llDist')), llNot = lliscador($('llNot')),
        llRadio = lliscador($('llRadio')), llPod = lliscador($('llPod'));

  // ---------- Lletra tan gran com hi càpiga ----------
  // Cada panell comença a la mida plena (--k = 1) i només s'encongeix si el
  // contingut no hi cap, fins a un 72 % com a màxim.
  function kBase(el){ return Math.round(Math.min(1.6, Math.max(1, el.clientHeight / 290)) * 100) / 100; }
  // Hi ha res que no càpiga? (a) més alt que la finestra; (b) alguna caixa amb
  // contingut més ample que ella; (c) algun element que surt de l'espai útil
  // (dins dels marges, i sense trepitjar els puntets de pàgina).
  const EXCLOS = '.cal-finestra, .cal-finestra *, .cal-etiqueta, svg *';
  function desborda(el){
    if (el.scrollHeight > el.clientHeight + 1) return true;
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    const top = r.top + parseFloat(cs.paddingTop) - 1, bot = r.bottom - parseFloat(cs.paddingBottom) + 1,
          esq = r.left + parseFloat(cs.paddingLeft) - 2, dre = r.right - parseFloat(cs.paddingRight) + 2;
    for (const d of el.querySelectorAll('*')){
      if (d.matches(EXCLOS)) continue;
      if (!(d instanceof SVGElement) && d.clientWidth && d.scrollWidth > d.clientWidth + 1) return true;
      const q = d.getBoundingClientRect();
      if (!q.width || !q.height) continue;
      if (q.top < top || q.bottom > bot || q.left < esq || q.right > dre) return true;
    }
    return false;
  }
  function ajustaCaixa(el){
    if (!el.clientHeight) return;
    // en finestres grans (escriptori) la lletra creix amb la finestra, fins a 1,6 vegades
    let k = kBase(el);
    const prova = () => {
      el.querySelectorAll('[data-encongit]').forEach(t => { t.style.fontSize = ''; delete t.dataset.encongit; });
      el.style.setProperty('--k', k);
      // una paraula que no cap a la seva caixa (un nom de ràdio llarg, una paraula
      // alemanya...) s'encongeix ella sola, sense fer petita tota la finestra
      textosAmples(el).forEach(t => {
        const base = parseFloat(getComputedStyle(t).fontSize); let f = 1;
        while (t.scrollWidth > t.clientWidth + 1 && f > 0.6){ f -= 0.05; t.style.fontSize = (base * f).toFixed(2) + 'px'; }
        t.dataset.encongit = '1';
      });
      return desborda(el);
    };
    while (prova() && k > 0.6) k = +(k - 0.03).toFixed(2);
  }
  // Elements amb text propi que desborden d'amplada (una paraula més llarga que la seva caixa)
  function textosAmples(el){
    const r = [];
    el.querySelectorAll('*').forEach(t => {
      if (t instanceof SVGElement || !t.clientWidth || t.matches(EXCLOS)) return;
      if (![...t.childNodes].some(n => n.nodeType === 3 && n.textContent.trim())) return;
      if (t.scrollWidth > t.clientWidth + 1) r.push(t);
    });
    return r;
  }
  window.__orlojDesborda = desborda;
  function ajustaFull(full){
    if (!full) return;
    const panes = full.querySelectorAll('.ll-pane');
    if (panes.length) panes.forEach(ajustaCaixa); else full.querySelectorAll('.t-fons').forEach(ajustaCaixa);
  }
  const ajustaTot = () => requestAnimationFrame(() => document.querySelectorAll('.full:not(.full-esfera)').forEach(ajustaFull));
  window.addEventListener('resize', () => { clearTimeout(window.__tAjust); window.__tAjust = setTimeout(ajustaTot, 150); });

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
      g.style.gridTemplateRows = `auto repeat(${Math.ceil((offset + dies) / 7)}, 1fr)`;
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
    finestra.addEventListener('lostpointercapture', e => { if (e.target !== finestra) return; if (arr){ posaC(0, true); ini = null; arr = false; } });
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
    $('fH12a').innerHTML = ''; $('fH12b').innerHTML = '';
    (h.time || []).slice(0, 12).forEach((t, k) => {
      const el = document.createElement('div');
      el.innerHTML = `<span class="hh">${t.slice(11, 13)}h</span><svg viewBox="0 0 64 64" aria-hidden="true">${icona(h.weather_code ? h.weather_code[k] : 0, h.is_day ? h.is_day[k] !== 0 : true)}</svg><span class="tt">${h.temperature_2m ? Math.round(h.temperature_2m[k]) + '°' : '--'}</span>`;
      (k < 6 ? $('fH12a') : $('fH12b')).appendChild(el);
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
    ajustaFull(document.querySelector('.full[data-full="temps"]'));
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
    const gms = (v, p, n) => { const a = Math.abs(v), g = Math.floor(a), mi = Math.floor((a - g) * 60); return `${g}°${dosD(mi)}′${v >= 0 ? p : n}`; };
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
    $('fCurioEtq').textContent = (m === ara.getMonth() + 1 && d === ara.getDate()) ? String(anyTxt) : L.dataEv(d, m - 1, anyTxt, L);
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
      ajustaFull(document.querySelector('.full[data-full="avui"]'));
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
    const PER = 4, pistaD = $('dPista'), nPanells = Math.ceil(files.length / PER);
    while (pistaD.children.length > nPanells) pistaD.lastChild.remove();
    while (pistaD.children.length < nPanells){
      const p = document.createElement('div'); p.className = 'll-pane';
      p.innerHTML = '<div class="t-titol"></div><div class="ds-llista"></div>'; pistaD.appendChild(p);
    }
    [...pistaD.children].forEach((p, k) => {
      p.querySelector('.t-titol').textContent = L.distancies;
      const ff = files.slice(k * PER, k * PER + PER), box = p.querySelector('.ds-llista');
      box.innerHTML = ff.map(([nom, d]) => `<div class="ds-fila${nom === proper ? ' proper' : ''}"><span class="ds-nom"></span><span class="ds-km">${km(d)}</span><span class="ds-llum"></span></div>`).join('');
      [...box.children].forEach((el, i) => { el.querySelector('.ds-nom').textContent = ff[i][0]; el.querySelector('.ds-llum').textContent = L.llumTriga(tempsLlum(ff[i][1] / C_LLUM)); });
    });
    llDist.refresca();
    ajustaFull(document.querySelector('.full[data-full="distancies"]'));
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
      const pistaR = $('rPista'); pistaR.innerHTML = '';
      let caixa = null;
      (RADIOS[LLENGUA] || RADIOS.ca).forEach((r, k) => {
        if (k % 4 === 0){
          const p = document.createElement('div'); p.className = 'll-pane';
          const t = document.createElement('div'); t.className = 't-titol'; t.textContent = L.radio;
          caixa = document.createElement('div'); caixa.className = 'r-graella'; p.append(t, caixa); pistaR.appendChild(p);
        }
        const b = document.createElement('button'); b.type = 'button'; b.className = 'r-boto'; b.dataset.audioId = r.id;
        b.setAttribute('aria-label', `${r.nom} · ${L.directe}`);
        b.innerHTML = '<span class="r-punt"></span><span class="r-txt"><span class="r-nom"></span><span class="r-sub"></span></span>';
        b.querySelector('.r-nom').textContent = r.nom; b.querySelector('.r-sub').textContent = r.sub;
        b.addEventListener('click', () => { if (b.dataset.nomesWeb){ window.open(r.web, '_blank', 'noopener'); return; } reprodueix({ id: r.id, titol: r.nom, sub: L.directe, audio: r.audio, web: r.web, rb: r.rb, tipus: 'radio' }); });
        caixa.appendChild(b);
      });
      llRadio.refresca();
      pintaEstat();
      requestAnimationFrame(() => ajustaFull(document.querySelector('.full[data-full="radio"]')));
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
      requestAnimationFrame(() => ajustaFull(document.querySelector('.full[data-full="podcasts"]')));
    }
    function carregaProgrames(força){
      if (progOcupat || !LLENGUES_PODCAST.includes(LLENGUA)) return;
      if (!força && Date.now() - progCarregats < 10 * 60 * 1000) return;
      progOcupat = true;
      const p1 = clips(PROGRAMES.competencia).then(ll => { const l = darrerPerDia(ll, [1,2,3,4,5], null); if (!l.length) throw new Error('buit'); memoria.competencia = l; }).catch(() => { if (!Array.isArray(memoria.competencia)) memoria.competencia = 'error'; });
      const p2 = clips(PROGRAMES.via).then(ll => { const l = darrerPerDia(ll, [6, 0], null); if (!l.length) throw new Error('buit'); memoria.via = l; }).catch(() => { if (!Array.isArray(memoria.via)) memoria.via = 'error'; });
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
    // Reparteix els titulars en panells laterals: a cada panell, els que hi caben sencers
    function pintaNoticies(){
      const pistaN = $('nPista');
      if (!notDarrer || notDarrer.llengua !== LLENGUA) return;
      const nouPane = () => {
        const p = document.createElement('div'); p.className = 'll-pane n-pane';
        const t = document.createElement('div'); t.className = 't-titol'; t.textContent = L.noticies;
        const l = document.createElement('div'); l.className = 'n-llista'; p.append(t, l); pistaN.appendChild(p);
        p.style.setProperty('--k', kBase(p)); return l;
      };
      pistaN.innerHTML = '';
      let llista = nouPane();
      const mesurable = llista.getBoundingClientRect().height > 60;
      notDarrer.titulars.forEach((n, i) => {
        const a = document.createElement('a'); a.className = 'n-item'; a.draggable = false; a.href = n.url; a.target = '_blank'; a.rel = 'noopener';
        a.innerHTML = '<span class="n-num"></span><span class="n-txt"></span>';
        a.querySelector('.n-num').textContent = i + 1; a.querySelector('.n-txt').textContent = n.titol;
        llista.appendChild(a);
        const noHiCap = mesurable
          ? a.getBoundingClientRect().bottom > llista.getBoundingClientRect().bottom + 1
          : llista.children.length > 3;   // encara sense mides (full amagat): tres per panell
        if (noHiCap && llista.children.length > 1){
          if (pistaN.children.length >= 8){ a.remove(); return; }
          llista = nouPane(); llista.appendChild(a);
        }
      });
      [...pistaN.querySelectorAll('.n-llista')].forEach(l => { const v = [...l.children]; if (v.length) v[v.length - 1].classList.add('ultim'); });
      $('nPeu').textContent = `${notDarrer.font.peu} · ${L.actualitzat(notDarrer.hora)}`;
      llNot.refresca();
    }
    window.__repaginaNoticies = () => requestAnimationFrame(pintaNoticies);
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
    ajustaTot();
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
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (window.__orlojEsfera) window.__orlojEsfera.llengua(null, null); ajustaTot(); if (window.__repaginaNoticies) window.__repaginaNoticies(); });
})();

</script>
</body>
</html>
