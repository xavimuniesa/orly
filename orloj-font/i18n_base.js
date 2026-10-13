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
