const CACHE='amit-pa-v3';
const ASSETS=['/amit-pa/','/amit-pa/index.html','/amit-pa/manifest.json','/amit-pa/icons/icon-192.png','/amit-pa/icons/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).catch(()=>caches.match('/amit-pa/index.html'))));});
