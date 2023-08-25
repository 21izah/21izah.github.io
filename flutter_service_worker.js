'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "bd2b76e50392bccc2f59d602ed8842c9",
"assets/AssetManifest.smcbin": "1a810d75fe78aa72efe4d9a5b8dfcf35",
"assets/FontManifest.json": "767d273021b86ac6e4cd07f18936c09a",
"assets/fonts/MaterialIcons-Regular.otf": "7870443c170f2ade28277bf96cc0bfed",
"assets/lib/assets/100440-monero.json": "5a7f4c92dc5916126027c972d2029173",
"assets/lib/assets/100695-dogecoin.json": "f093a3745618c7b427f0e83e09f06a98",
"assets/lib/assets/110046-transaction-success.json": "910c389016ead556d5c78762aae2c773",
"assets/lib/assets/114272-security.json": "5827ed6ba8fbdcb795508232bb489b72",
"assets/lib/assets/115452-bitcoin-dollar-exchange.json": "e62500dc8c5d564cf48ad0b99e62e271",
"assets/lib/assets/125112-coins-and-devices.json": "19510fed023a78be4e178f8af7ad7d15",
"assets/lib/assets/24hrs_customer_care_and_transaction.png": "2053d610c7f0e486647a15357533730e",
"assets/lib/assets/68435-busd.json": "1969cf04a721d2476841271baf588ebb",
"assets/lib/assets/77096-service.json": "19f030f7806baa5c0013f27e58e6ebbd",
"assets/lib/assets/86719-cryptocurrency.json": "d3eaf8c530150fb455db0f6a97e4fa88",
"assets/lib/assets/92445-crypto-bitcoin.json": "2584bc893eb7330f6b38d44820046690",
"assets/lib/assets/best_rates.png": "a499d3e8dbcf12df2db8269a453c8bfc",
"assets/lib/assets/bitcoin.json": "6fc7cd83b9d4cdec6b78c3a852334096",
"assets/lib/assets/bitcoin_cash.png": "6640f6c94a3ed9df59b31bb881a91415",
"assets/lib/assets/busd-unscreen.gif": "8024c7ced9ae6cd8e8ad85ff5a332258",
"assets/lib/assets/busd.json": "1969cf04a721d2476841271baf588ebb",
"assets/lib/assets/busd1_.png": "f0c0069f560e29836c65167bae69563c",
"assets/lib/assets/busd_trading.png": "d2fccf6507c3df5964175e77646079ae",
"assets/lib/assets/buy-button.png": "9aafdae22434bd58e884c0fe68d422c3",
"assets/lib/assets/b_btc_address.jpg": "43979e4e81663b9c32fe83e50845ced0",
"assets/lib/assets/cardano-ada-animation.json": "90d0b8826f97d6d1ef580ae53f250e69",
"assets/lib/assets/cardano.png": "d56d83f87c0a6e6a0fd5f7eb47db3028",
"assets/lib/assets/china_flag.png": "0caad02ca7eb06e14ef998ca65395963",
"assets/lib/assets/comfortHome-unscreen.gif": "6f0ee322efb135a270d88117865fe383",
"assets/lib/assets/comfortHome.gif": "060436a48c21a92940eddbbdf6b95a2e",
"assets/lib/assets/Cza.jpg": "178077a712f74eee0535d29007b707b5",
"assets/lib/assets/cza1.png": "c631d6ddc3279c5a186a4afe7f39a9de",
"assets/lib/assets/Cza_background.png": "8f7f23395d9a664038cf944dee4102f3",
"assets/lib/assets/Cza_new_prev_ui.png": "425f8c88200e8eb59c325cc758859b22",
"assets/lib/assets/dash.json": "b92dcff5fe2ce91ed772c892382b66ea",
"assets/lib/assets/dash.png": "0accf70bc0fe30547aefe2feacfb05aa",
"assets/lib/assets/Data_security.png": "392f605edee298ca39090cf90e2ae8b2",
"assets/lib/assets/digibite.png": "7585355152694e90a062128db44f0f5a",
"assets/lib/assets/disappointment.png": "82ca40f0b414cef619ba374b7f617b2d",
"assets/lib/assets/dogecoin.png": "06a0f012c0819e10ac42c984fe17da87",
"assets/lib/assets/ethereum.json": "e684fb159289246db288291825dd4da1",
"assets/lib/assets/Ethereum_.png": "f34c9698eb77ecf950398a87a5060b5a",
"assets/lib/assets/exchange_.png": "10b36350cc0b0a809fc4945ba99b2c2e",
"assets/lib/assets/facebook-logo-effect.json": "26c8ddd4a8b30130487da6a63692b75e",
"assets/lib/assets/fast_payment.png": "1d76ecc6670e5d3e358cdfc320366c92",
"assets/lib/assets/germany_flag.jpeg": "638cb6b43b48e919af6783f41f4a27b8",
"assets/lib/assets/good_rate.png": "a01b921c4951593c7f50208caf50972e",
"assets/lib/assets/instagram-logo-effect.json": "a48aab6508efa89cc998074bd5bd7e05",
"assets/lib/assets/italy_flag.jpeg": "141a9e4549b20ceca1a0a35577ebba0a",
"assets/lib/assets/Izah_homes_prev_ui.png": "9fab42695881fa4e205620f8325dabc6",
"assets/lib/assets/litcoin_.png": "ba8417e6f26e14b3a5e5d09f64fe2d37",
"assets/lib/assets/litecoin.json": "38be6fb4f011159f7e46faefb4ac9470",
"assets/lib/assets/monero.png": "d769acfd6172e9a60670398d899406dc",
"assets/lib/assets/nano_.png": "bc298ccd32774eb82546fd571458005a",
"assets/lib/assets/otherCrypto.json": "ef0a0320c7a3c229efe96a5f6d51a82b",
"assets/lib/assets/qr-code(1).png": "45ac96ec37795c45df0cd4367114af28",
"assets/lib/assets/sell.png": "936361bb277220328430e36cda3f94b3",
"assets/lib/assets/spain_flag.jpeg": "1137e8bbe87ac23a646c4cc8d90bc6be",
"assets/lib/assets/success.png": "2d1ca6db06297c167a206d40d4d20b45",
"assets/lib/assets/telegram-logo.png": "082c6b46bd8efd61ebca8d2d9b928dda",
"assets/lib/assets/tether-usdt-animation.json": "dc464a43a68d93b865e12985dc67c87b",
"assets/lib/assets/tiktok-icon.json": "bcaa5b3b2251798b933ba132e054ac29",
"assets/lib/assets/transaction_succesful.png": "9441b0d830b6ae22a2297fd7b12be5ea",
"assets/lib/assets/tron_.png": "f286ffbe462019edb9763b1bb6e72175",
"assets/lib/assets/united_kingdom.jpeg": "98f83095e28a1f245ccb0a6e778d2b0d",
"assets/lib/assets/usdt_.png": "301c554ae83f9c50fbe0c01c03df5b46",
"assets/lib/assets/usdt_trading.png": "bafe40e87a4c803eab54a5ec65053df0",
"assets/lib/assets/vietnam_flag.jpeg": "5c03edc754cdd7f69eb11143fc261039",
"assets/lib/assets/warning.png": "015fc84638dd106948d59a54361c19b0",
"assets/lib/assets/whatsapp-button-call-attention-and-pause.json": "fa3016aedecae1d55c6ecf0c74ccb493",
"assets/lib/assets/whatsapp-logo.png": "ccb3702f58490c3812be341ca4c8852e",
"assets/lib/assets/xrp.png": "496b529f61eb26de5ec632c50b66bfc2",
"assets/NOTICES": "65848b178dee244c8dfab0a46dc41482",
"assets/packages/animated_snack_bar/assets/monochrome/check-circle.svg": "f6d9dd67711da5b6d4d965f66c10cd07",
"assets/packages/animated_snack_bar/assets/monochrome/comment-dots.svg": "44311bf381ea1155bfe38c40d44c577a",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-circle.svg": "63ffc503c8e024f9752866e021afb744",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-octagon.svg": "ab5fb6de2478b95f911cebb5cf6af9c3",
"assets/packages/animated_snack_bar/assets/monochrome/exclamation-triangle.svg": "10427de487dc532646c4a11f6be3fe84",
"assets/packages/animated_snack_bar/assets/regular/check-circle.svg": "0936541fbbf9ebf325169373c2d2439a",
"assets/packages/animated_snack_bar/assets/regular/exclamation-circle.svg": "69c777fe5b9ffd2f8286ca47f98d1a31",
"assets/packages/animated_snack_bar/assets/regular/exclamation-triangle.svg": "57a895d149648e4b69c7681d4efb2052",
"assets/packages/animated_snack_bar/assets/regular/info-circle.svg": "e733e8ecda8758e6b69d20cc1ca1c6c4",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/packages/unicons/icons/UniconsLine.ttf": "8924ce5cafaa7c12e593a2ef8478122f",
"assets/packages/unicons/icons/UniconsSolid.ttf": "580e5390f4d0c77fa9e8115af69e41c7",
"assets/packages/unicons/icons/UniconsThinline.ttf": "b9ac88a304738945c1b1fa4c168a14b9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7225da837279fb7d300101fcaeffb467",
"/": "7225da837279fb7d300101fcaeffb467",
"main.dart.js": "8398b54a43a1c5351e45a95d836f5b9e",
"manifest.json": "16415c02888977f367fd4618e4e77fa7",
"splash/img/dark-1x.png": "d71bab5cf00826bd62fdea99a9d3f085",
"splash/img/dark-2x.png": "a0160e08fe2a70298b769b19ef8fc09b",
"splash/img/dark-3x.png": "08ac87ed29f73c467b826d465ef61512",
"splash/img/dark-4x.png": "f5221f52e1aa33ecb739945a56b1a41f",
"splash/img/light-1x.png": "d71bab5cf00826bd62fdea99a9d3f085",
"splash/img/light-2x.png": "a0160e08fe2a70298b769b19ef8fc09b",
"splash/img/light-3x.png": "08ac87ed29f73c467b826d465ef61512",
"splash/img/light-4x.png": "f5221f52e1aa33ecb739945a56b1a41f",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"version.json": "9d81ea0a9b04cf843646a7541d2cfc7f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
