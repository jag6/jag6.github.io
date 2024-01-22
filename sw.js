const swVersion = 'v1';
const cacheName = `oft-app-${swVersion}`;

const appStaticResources = [
    '/',
    '/index.html',
    '/css/style.css',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com',
    'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap',
    '/screens/',
    '/components/',
    '/helpers/',
    '/utils.js',
    '/app.js',
    '/manifest/',
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://catfact.ninja/fact',
    'https://www.boredapi.com/api/activity',
    'https://uselessfacts.jsph.pl/api/v2/facts/random',
    'https://geek-jokes.sameerkumar.website/api?format=json',
    'https://v2.jokeapi.dev/joke/Dark?type=single',
    'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            cache.addAll(appStaticResources);
        })()
    );
});

// delete old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if(name !== cacheName) {
                        return caches.delete(name);
                    }
                })
            );
            await clients.claim();
        })()
    );
});

// intercept server requests and respond with cached responses instead of going to network
self.addEventListener('fetch', (e) => {
    // direct app to always go to homepage
    if(e.request.mode === 'navigate') {
        e.respondWith(caches.match('/'));
        return;
    }

    // for all other requests, go to the cache first, then the network
    e.respondWith(
        (async () => {
            const cache = await caches.open(cacheName);
            const cachedResponse = await cache.match(e.request.url);
            if(cachedResponse) {
                return cachedResponse;
            }
            return new Response(null, {status: 404});
        })(),
    );
});