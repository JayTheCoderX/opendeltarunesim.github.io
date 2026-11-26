// The asset cache is the page's own now (js/netload.js): this worker cost a process and a copy of everything
// that passed through it. A page from before that registers it again gets one that takes itself away at once
// and leaves the cache (drsim-assets-1) to the page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.registration.unregister()));
