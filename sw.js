/* Palco Musical — service worker: deixa o app abrir e funcionar sem internet.
   Coloque este arquivo na mesma pasta do index.html. */
const VERSAO='palco-v4';
const APP=['./','./index.html'];
const LIBS=[
  'https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js',
  'https://cdn.jsdelivr.net/npm/lamejs@1.2.1/lame.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.1/lame.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'
];
/* hosts estáticos que podem ser guardados (fontes e bibliotecas) */
const CDN=['fonts.googleapis.com','fonts.gstatic.com','cdn.jsdelivr.net','cdnjs.cloudflare.com'];

self.addEventListener('install',e=>{
  e.waitUntil((async()=>{
    const c=await caches.open(VERSAO);
    await c.addAll(APP).catch(()=>{});
    await Promise.all(LIBS.map(u=>fetch(u,{mode:'no-cors'}).then(r=>c.put(u,r)).catch(()=>{})));
  })());
  self.skipWaiting();
});
self.addEventListener('activate',e=>{
  e.waitUntil((async()=>{
    for(const k of await caches.keys())if(k!==VERSAO)await caches.delete(k);
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const u=new URL(req.url);
  /* páginas do app: tenta a rede (para receber atualizações) e cai para a cópia salva */
  if(req.mode==='navigate'||(u.origin===location.origin&&/(\/|\.html)$/.test(u.pathname))){
    e.respondWith((async()=>{
      try{const r=await fetch(req);if(r.ok){const c=await caches.open(VERSAO);c.put(req,r.clone()).catch(()=>{});if(u.origin===location.origin)c.put('./index.html',r.clone()).catch(()=>{})}return r}
      catch{return(await caches.match(req,{ignoreSearch:true}))||(await caches.match('./index.html'))||(await caches.match('./'))||Response.error()}
    })());
    return;
  }
  /* fontes e bibliotecas: usa a cópia salva; se não tiver, baixa e guarda */
  if(CDN.includes(u.hostname)||(u.origin===location.origin&&!u.pathname.endsWith('sw.js'))){
    e.respondWith((async()=>{
      const hit=await caches.match(req);if(hit)return hit;
      try{const r=await fetch(req);if(r.ok||r.type==='opaque'){const c=await caches.open(VERSAO);c.put(req,r.clone()).catch(()=>{})}return r}
      catch{return Response.error()}
    })());
  }
  /* o resto (GitHub, YouTube, Deezer…) passa direto pela rede */
});
