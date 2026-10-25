var V="latte-v7",SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(SHELL)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);
if(u.origin===location.origin||u.hostname==="cdnjs.cloudflare.com"){e.respondWith(caches.match(r).then(function(m){var n=fetch(r).then(function(x){if(x&&x.ok){var c=x.clone();caches.open(V).then(function(h){h.put(r,c)})}return x}).catch(function(){return m});return m||n}))}});
