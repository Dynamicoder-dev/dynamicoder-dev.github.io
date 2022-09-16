'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3b5d8f8c1ae0d95262482d28444f9884",
"assets/assets/fonts/IRANSans.ttf": "f7a653ffe7351c0ab47961031667da66",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/300x300.png": "3afcb65db399ea637cd1b48861571176",
"assets/assets/images/agencies_header.jpg": "158eac4a6a19c0d49f80a752a3a587cb",
"assets/assets/images/amenities/airConditioning.png": "0f5fe34ade31797fc38118207ba3afd4",
"assets/assets/images/amenities/auditorium.png": "06ac40fe55b54175cd86147a209d4c33",
"assets/assets/images/amenities/balcony.png": "4f45237ac32aecc59921c93d2f581a0d",
"assets/assets/images/amenities/bathTub.png": "f2358c356fa79570cb5ddd5f64633c9b",
"assets/assets/images/amenities/elevator.png": "7e375027b9b12a3335be4f4e35b9e60e",
"assets/assets/images/amenities/fittedCloset.png": "18c31fcdb5ed64621c06dc1ee1fdc846",
"assets/assets/images/amenities/foreignToilet.png": "9da7b0288a96926f8ebb0eb9d0dd6aeb",
"assets/assets/images/amenities/guard.png": "8c26984986634d16dec804bceebbe778",
"assets/assets/images/amenities/gym.png": "6729619ca2f188b11b7c4908ad45bbe1",
"assets/assets/images/amenities/jacuzzi.png": "c3ad31c0f6ca69d70fdf17e53d9ab30c",
"assets/assets/images/amenities/lobby.png": "3025e277d413309b396882f13cda4a6a",
"assets/assets/images/amenities/masterBathroom.png": "22b47be876dca43c7be770a6718169c2",
"assets/assets/images/amenities/mATV.png": "032fc308c689d2f077c77fc64ec9b8ef",
"assets/assets/images/amenities/parking.png": "7f49e750dc61347e31839790e04fe332",
"assets/assets/images/amenities/remoteDoor.png": "c50b392cf268f43ba2ea065a8dd4c35d",
"assets/assets/images/amenities/roofGarden.png": "ca077ccef8f2c21b167acbb3ca00ad53",
"assets/assets/images/amenities/sauna.png": "dba5c157c609cef6b8e2297bf74d96aa",
"assets/assets/images/amenities/singleUnit.png": "f383efd700321b667accdc30e8145843",
"assets/assets/images/amenities/storage.png": "d1b8a9e837fb7e6091e3762291feae1d",
"assets/assets/images/amenities/swimmingPool.png": "4e73de7b2e2faad122f9cbab975b6f69",
"assets/assets/images/amenities/terrace.png": "ebeace7c884ee93dc2d8c0f902e94d89",
"assets/assets/images/bg_header.jpg": "71a5edbdb245b59c1b2a2de1ed08a3a3",
"assets/assets/images/companies_using_flutter.png": "bd93766fea0502d711ec59e1e6aa29b9",
"assets/assets/images/device_frame.png": "58e971455388b5c476887bf687a71d8a",
"assets/assets/images/flutter_logo_mono.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/flutter_logo_text.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/footer-art.png": "dd67394b3bf9c85323de56a17edff1b2",
"assets/assets/images/google_logo.png": "22979cce8fc21c09b7f26e131045a400",
"assets/assets/images/icon_development.png": "baebd28f59701e856c98c68e010fdeb2",
"assets/assets/images/icon_github_64x.png": "2d1e54d81bd7cb7daa09cea82dcb29e2",
"assets/assets/images/icon_performance.png": "49dcd794c0838072d8cd729f1cb85e61",
"assets/assets/images/icon_search_64x.png": "f55e992d786ef1822db8d1c038e201b5",
"assets/assets/images/icon_twitter_64x.png": "514d54a802579a10b988c12dc892e9cb",
"assets/assets/images/icon_ui.png": "09138184ad5cee139e01c3aba95924d4",
"assets/assets/images/icon_youtube_64x.png": "155d50c9f10c97fae27575ae7ee7b026",
"assets/assets/images/news_flutter_1.12.png": "1afef8f0d8e3ba20b49bc5625168b629",
"assets/assets/images/news_flutter_codepen.png": "bc607f3054d4ab94ec5866422eb7c9c5",
"assets/assets/images/news_flutter_ios_application_bundle.png": "c7d0eb7b38b5d44dabe759246f4fc376",
"assets/assets/images/pub_dev_logo.png": "e0f3812dab2087bcc847c2f2689028f2",
"assets/assets/images/slide_1-bg.jpg": "7a2356f8cc1bf7d33376fac73ec04c64",
"assets/assets/images/slide_1-layer_1.png": "9063147efb1e199ff5c150d2e6300aa7",
"assets/assets/images/slide_1-layer_2.png": "ddbf15fa920dae7a5a686ff7d10d4841",
"assets/assets/images/slide_2-bg.jpg": "05ce416b9516bbecb0b3fa90c593fc5e",
"assets/assets/images/slide_2-layer_1.png": "d74c30d69caf1be60b16532c70e5f9da",
"assets/assets/images/slide_2-layer_2.png": "9f38f12164b646341c610a77fd6c2e7a",
"assets/assets/images/slide_3-bg.jpg": "4eb412a5e5b66476b4b0ee84b51ce232",
"assets/assets/images/slide_3-layer_1.png": "0e3ed24ce06edf89fab5072c310d393d",
"assets/assets/images/slide_3-layer_2.png": "dcecc562f08c8e185fa50f23dec1c5e6",
"assets/assets/images/slide_4-bg.jpg": "acbecb9abe325a9564a8ab511343cda9",
"assets/assets/images/slide_4-layer_1.png": "819a00d7172b9dbfe753dd0e58b6543d",
"assets/assets/images/slide_4-layer_2.png": "bc967acf07078968e2cb2c06cbd8d1a1",
"assets/assets/images/video_thumbnail_learn_from_developers.png": "7818ad639493077ee21fbd29fccdc7cf",
"assets/assets/videos/BeautifulUI.mp4": "354dcbace8259d15719a4ef4c9e46e8a",
"assets/assets/videos/FastDev.mp4": "c2488f978dae74ca3bd13c38f2ce30cb",
"assets/assets/videos/NativePerformance.mp4": "91e263a32e6220fc72a57b587e2a4591",
"assets/FontManifest.json": "5af15ec3e69435634e72888e5a740488",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7212828d4f8cb0761c781fab8af68a39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cf27e2e3f1ed7e842ff892505702a5a6",
"/": "cf27e2e3f1ed7e842ff892505702a5a6",
"main.dart.js": "0a2c6ec760202cfb955d12d1fda24c8a",
"manifest.json": "3066810484f544539bc1cd4f8d23dd23",
"version.json": "a7c8c16d726467472e019fead389906e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
