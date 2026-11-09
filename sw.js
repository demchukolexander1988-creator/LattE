var V="latte-v29";
self.addEventListener("install",function(e){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);
if(u.origin===location.origin||u.hostname==="cdnjs.cloudflare.com"||u.hostname==="fonts.googleapis.com"||u.hostname==="fonts.gstatic.com"){e.respondWith(fetch(r).then(function(x){if(x&&x.ok){var c=x.clone();caches.open(V).then(function(h){h.put(r,c)})}return x}).catch(function(){return caches.match(r)}))}});
