'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1cdf982571dc89b128140020dcc0d9c5",
"assets/assets/fonts/IRANSans.ttf": "f7a653ffe7351c0ab47961031667da66",
"assets/assets/fonts/product_sans_bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/fonts/product_sans_italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/fonts/product_sans_regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/fonts/roboto_bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/roboto_italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/roboto_regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/agencies_header.jpg": "158eac4a6a19c0d49f80a752a3a587cb",
"assets/assets/images/bg_header.jpg": "71a5edbdb245b59c1b2a2de1ed08a3a3",
"assets/assets/images/companies_using_flutter.png": "bd93766fea0502d711ec59e1e6aa29b9",
"assets/assets/images/device_frame.png": "58e971455388b5c476887bf687a71d8a",
"assets/assets/images/flutter_logo_mono.png": "6261e07a1b1eb9cdd466b4879a41e361",
"assets/assets/images/flutter_logo_text.png": "d21f1eecaeaab081ba7efec1721c0712",
"assets/assets/images/footer-art.png": "dd67394b3bf9c85323de56a17edff1b2",
"assets/assets/images/google_logo.png": "22979cce8fc21c09b7f26e131045a400",
"assets/assets/images/gradient.png": "45170d61d6617b1db36b975716f2b17d",
"assets/assets/images/house.png": "d5253f34273f232aa0b88670230ec7db",
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
"assets/assets/lotties/error.json": "4213ffa8f81c7494356552c054360e81",
"assets/assets/lotties/house_loading.gif": "d49d5310fed1cbe559901856c9a8a2b6",
"assets/assets/lotties/house_loading.json": "823ee89855dbea35e5983dd215fb53e9",
"assets/assets/lotties/not_found.json": "9def6bb0ff88b68b3cb32349a9bf57c8",
"assets/assets/lotties/searching.json": "8eb6f0ac6614e38cf2cb8f66627ea08b",
"assets/assets/svgs/amenities/airConditioning.svg": "5ece96af104294c8c6dc9dc8e31b2333",
"assets/assets/svgs/amenities/alarm.svg": "7160047849b39669e7fa2091e7447ac5",
"assets/assets/svgs/amenities/auditorium.svg": "0eaceff29dca2f0ef77bdf604de4c323",
"assets/assets/svgs/amenities/balcony.svg": "0feb7163ddaf8ea69b5e761bd57243ca",
"assets/assets/svgs/amenities/bathroom.svg": "bfa1e6a4fb4e7205580406fb8d82e339",
"assets/assets/svgs/amenities/bathTub.svg": "1ff39ae17885409a52299a6519d83a49",
"assets/assets/svgs/amenities/cctv.svg": "df5457fb336a1480538186b8dd38b79a",
"assets/assets/svgs/amenities/chiller.svg": "af0b9d2f1da2518caf49aef2624f0017",
"assets/assets/svgs/amenities/coilFan.svg": "0f5515396b0e704fc03f2fef068a7693",
"assets/assets/svgs/amenities/elevator.svg": "f2c5d37c25603371a10c1fcc2cdc7e46",
"assets/assets/svgs/amenities/fireAlarm.svg": "2277c288e8d4ecbc8a8816c15a909170",
"assets/assets/svgs/amenities/fireplace.svg": "73b1a989ef8fb1d85c81a3a9124f099e",
"assets/assets/svgs/amenities/fittedCloset.svg": "7b12a0aa84c85a97ce9884f10f4a0b9c",
"assets/assets/svgs/amenities/floorHeating.svg": "1648464e28cc5b377a183e495070d177",
"assets/assets/svgs/amenities/foreignToilet.svg": "b8781d958857428a1b668ece63c5cbc4",
"assets/assets/svgs/amenities/gasCooler.svg": "359f8915f3319b32801758aa56a2af1b",
"assets/assets/svgs/amenities/guard.svg": "db669d4eee6c373840f302c49ea7c79f",
"assets/assets/svgs/amenities/gym.svg": "4c5144e119642a27bb1eba350c1ab3df",
"assets/assets/svgs/amenities/heater.svg": "702e0f35015289bb472f39c5fe74df2a",
"assets/assets/svgs/amenities/heating.svg": "546628f62c1ac24fd6c5511239acc819",
"assets/assets/svgs/amenities/hob.svg": "22e99342ba4708f9af969edd8c66a831",
"assets/assets/svgs/amenities/hood.svg": "d92635d86ef2495d2ed73d19d09264df",
"assets/assets/svgs/amenities/jacuzzi.svg": "710b13fcbc16f23b98121dde19503920",
"assets/assets/svgs/amenities/lobby.svg": "ea55f065947924edc6efec29bd57dd59",
"assets/assets/svgs/amenities/masterBathroom.svg": "7a2112dd8cf7dec715bc3e93258c1b82",
"assets/assets/svgs/amenities/matv.svg": "76507d1a99ca52c1a88a55a9c8d7702e",
"assets/assets/svgs/amenities/package.svg": "96ecf26d61b4a52262c956819cc5ba82",
"assets/assets/svgs/amenities/painting.svg": "22a52f8375ef1f226de4beb432d5c916",
"assets/assets/svgs/amenities/paneled.svg": "0880dcdc1da7993e421d31edb836cb28",
"assets/assets/svgs/amenities/pantry.svg": "b2d88b125a94797229859ec70a0076f5",
"assets/assets/svgs/amenities/parking.svg": "1a030e65a15db4757fe05ca0aa2d9ef8",
"assets/assets/svgs/amenities/protectiveShutters.svg": "edd0a0cd3b950acb222ea4391cba09dc",
"assets/assets/svgs/amenities/rack.svg": "82c1fd4632595e04ee8dafc13f01c436",
"assets/assets/svgs/amenities/radiator.svg": "546628f62c1ac24fd6c5511239acc819",
"assets/assets/svgs/amenities/remoteDoor.svg": "dd8e402347746346ddfc49bcf3dc4095",
"assets/assets/svgs/amenities/roofGarden.svg": "d4042220a8d41c2dfeceb6077c626811",
"assets/assets/svgs/amenities/sauna.svg": "fccccfe230ddf3ce48c6389a7aa2fea3",
"assets/assets/svgs/amenities/securityDoor.svg": "fff5a91ebdb9b2bda071f4bc53518dc3",
"assets/assets/svgs/amenities/showCase.svg": "6035ca8ac3c0f38854bccf62967423f3",
"assets/assets/svgs/amenities/storage.svg": "a9fd80c800198f0937c3b59f9011dac8",
"assets/assets/svgs/amenities/swimmingPool.svg": "ba8364fd3fa779eb82640cc511a6030a",
"assets/assets/svgs/amenities/terrace.svg": "9a6493b7e19c8ebf355d02a6ec048a4b",
"assets/assets/svgs/amenities/videoIntercom.svg": "a652c31ef912a92291e9a99d71f656ad",
"assets/assets/svgs/amenities/wallpaper.svg": "7c08f2238854b2489d915a55b4e00bb5",
"assets/assets/svgs/amenities/wallSurrounded.svg": "0d70562308a2961a18ba748a3f4a2e5e",
"assets/assets/svgs/amenities/waterCooler.svg": "d484fc0902db3b03f039bf7ce9359a93",
"assets/assets/svgs/amenities/waterHeater.svg": "49564959d94e62f28cb6f916a7b37edf",
"assets/assets/svgs/amenities/waterWell.svg": "c65f22947ac901cb501d46f00eafb986",
"assets/assets/svgs/chart.svg": "548d21baf173986bca6e9c3adb5b28a9",
"assets/assets/svgs/house.svg": "43911063b95a32c3c32185bcb6f88511",
"assets/assets/svgs/image_error.svg": "f654a6f9c1323c2ec2954e0543713582",
"assets/assets/svgs/location_pin.svg": "e4c0e51f4390e737cdb079db211387e9",
"assets/assets/svgs/shield_check.svg": "daf9fb89d408057fb36f14c7d269de27",
"assets/assets/videos/BeautifulUI.mp4": "354dcbace8259d15719a4ef4c9e46e8a",
"assets/assets/videos/FastDev.mp4": "c2488f978dae74ca3bd13c38f2ce30cb",
"assets/assets/videos/NativePerformance.mp4": "91e263a32e6220fc72a57b587e2a4591",
"assets/FontManifest.json": "d8a399e95b4805d18ba7278b861d5269",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f900ab4380cc35569e17bcc73c4a81f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_awesome_flutter/lib/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "e9f2f143310604845f8aa26c42ad5f55",
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
"index.html": "2de2d2e277209d704756c4325679b87b",
"/": "2de2d2e277209d704756c4325679b87b",
"main.dart.js": "658d5c65a465996b78f64622de13a5a7",
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
