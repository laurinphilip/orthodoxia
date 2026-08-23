const CACHE_NAME = "orthodoxia-v1.1.0-heiligenbibliothek";
const APP_SHELL = [
  "./",
  "./index.html",
  "./offline.html",
  "./og.png",
  "./manifest.webmanifest",
  "./css/style.css",
  "./css/library.css",
  "./js/content.js",
  "./js/prayers.js",
  "./js/saints.js",
  "./js/calendar.js",
  "./js/app-core.js",
  "./js/views.js",
  "./js/library.js",
  "./js/app.js",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(APP_SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (key) { return key !== CACHE_NAME; }).map(function (key) { return caches.delete(key); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;

  const requestUrl = new URL(event.request.url);
  const isPdfDocument = /\.pdf$/i.test(requestUrl.pathname);

  if (event.request.mode === "navigate" && !isPdfDocument) {
    event.respondWith(
      caches.match("./index.html").then(function (cached) {
        return cached || fetch(event.request).catch(function () { return caches.match("./offline.html"); });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      const network = fetch(event.request).then(function (response) {
        if (response && (response.ok || response.type === "opaque")) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () { return cached; });
      return cached || network;
    })
  );
});
