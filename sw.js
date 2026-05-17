// Minimaler Service Worker für PWA-Konformität
self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  // Lässt alle Netzwerkanfragen normal durch, reicht aber für die App-Erkennung aus
});


