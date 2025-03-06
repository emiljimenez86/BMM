self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open("global-importaciones-cache").then((cache) => {
            return cache.addAll([
                "./ventas.html",
                "./styles.css",
                "./img/RedesSocialesImg/logo-correo.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
