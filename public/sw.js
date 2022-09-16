// import { precacheAndRoute } from 'workbox-precaching';
import { offlineFallback, staticResourceCache, imageCache } from 'workbox-recipes';
import { setDefaultHandler } from 'workbox-routing';
import { NetworkOnly } from 'workbox-strategies';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'

cleanupOutdatedCaches();


precacheAndRoute(self.__WB_MANIFEST);


setDefaultHandler(new NetworkOnly());


staticResourceCache();


imageCache();

offlineFallback();

// offlineFallback({
//     // pageFallback: '/offline.html'
// });

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING')
        self.skipWaiting()
})


// This code executes in its own worker or thread
self.addEventListener("install", event => {
    console.log("Service worker installed");
});
self.addEventListener("activate", event => {
    console.log("Service worker activated");
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
    })
}

// const updateSW = registerSW({
//     onNeedRefresh() {},
//     onOfflineReady() {},
// })