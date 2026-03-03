// sw.js - Service Worker for Offline Functionality

// Install event listener
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
});

// Activate event listener
self.addEventListener('activate', (event) => {
    console.log('Service Worker activating...');
});

// Fetch event listener
self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});