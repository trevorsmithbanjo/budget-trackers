// install event handler
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './styles.css',
                './js/index.js',
                './js/indexedDb.js',
                './icons/icon-192x192.png',
                './icons/icon-512x512.png',
            ]);
        })
    );
    console.log('Install');
    self.skipWaiting();
});

// retrieve assets from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
