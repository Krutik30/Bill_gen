/* eslint-disable @typescript-eslint/no-explicit-any */
// src/service-worker.ts

const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        // Add other static assets here
      ]);
    })
  );
});

// self.addEventListener('activate', (event: ExtendableEvent) => {
//   // Clean up old caches during activation if needed
// });

self.addEventListener('fetch', (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// self.addEventListener('message', (event: MessageEvent) => {
//   // Handle messages from the main thread (if needed)
// });

// @ts-ingore
self.skipWaiting();