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
