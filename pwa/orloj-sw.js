// Service worker de l'Orloj: permet obrir el rellotge sense connexió.
// - Pàgines del mateix lloc: primer la xarxa (per tenir sempre l'última
//   versió) i, si no n'hi ha, la còpia desada.
// - Tipografies de Google: primer la còpia desada (no canvien mai).
// - Dades meteorològiques i de població: sempre de la xarxa, mai desades.
const VERSIO = 'orloj-v1';

// En instal·lar-se, desa els recursos fixos. Les pàgines es desen quan la
// mateixa pàgina ho demana (vegeu el missatge 'desa' més avall), així no cal
// saber amb quin nom s'ha publicat cada versió.
const RECURSOS_FIXOS = ['orloj.webmanifest', 'orloj-icona-180.png', 'orloj-icona-192.png', 'orloj-icona-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSIO);
    await Promise.allSettled(RECURSOS_FIXOS.map(r => cache.add(r)));
    await self.skipWaiting();
  })());
});

self.addEventListener('message', (e) => {
  const dades = e.data || {};
  if (dades.tipus !== 'desa' || !Array.isArray(dades.urls)) return;
  e.waitUntil((async () => {
    const cache = await caches.open(VERSIO);
    await Promise.allSettled(dades.urls.map(async (u) => {
      const resp = await fetch(u);
      if (resp.ok || resp.type === 'opaque') await cache.put(u, resp);
    }));
  })());
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const claus = await caches.keys();
    await Promise.all(claus.filter(c => c !== VERSIO).map(c => caches.delete(c)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    e.respondWith((async () => {
      const cache = await caches.open(VERSIO);
      const desat = await cache.match(req);
      if (desat) return desat;
      const resp = await fetch(req);
      if (resp.ok || resp.type === 'opaque') cache.put(req, resp.clone());
      return resp;
    })());
    return;
  }

  if (url.origin === self.location.origin){
    e.respondWith((async () => {
      const cache = await caches.open(VERSIO);
      try {
        const resp = await fetch(req);
        if (resp.ok) cache.put(req, resp.clone());
        return resp;
      } catch (err){
        const desat = await cache.match(req, { ignoreSearch: true });
        if (desat) return desat;
        throw err;
      }
    })());
  }
});
