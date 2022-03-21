'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bdbcd68f255b986bb003240fe1ebf6ae",
".git/config": "e742608196e8885733ba56a146964688",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d3ed1df868701000bca3a29598a8ad21",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c8b7a656e09469c4f9253c3d0f44edb6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51df8642d8d06eedea051de1050c46c7",
".git/logs/refs/heads/main": "24984e0fab241cb1961b964c64eefe11",
".git/logs/refs/remotes/origin/main": "ab713b5e2eb54f70891129b0c623fd76",
".git/objects/07/ad8b5d3d7e8d13b9216a53051ae79510378ba7": "4166bd4d547ea21760ed4d4b3a5d5af1",
".git/objects/08/c34c81f57db7667ce4892e84c900b00581f292": "dc60eef517de1ea05871b2fa5bdce39f",
".git/objects/0c/d1ac514563111a6bdbbe13cd53750fa0f413f0": "22891fc15f144606a85f35f8bdc31bde",
".git/objects/0e/123417d8c421ed6925db5906043ce9cebe8ac4": "7a9414e156fa98dd461c2ad70e6d25ec",
".git/objects/10/8f3eb25449524b04e6bd0bef7a3a5a96f3c67b": "e09c4d699057aa9d9aa59a76f0a8e21d",
".git/objects/11/bd0943bfa21ff3e66448f7a16778ae651adfb4": "a4407c570199ea49a2bde92f40d5b721",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1c/8366211d128a0e8e1d7297e94bcbee41be4b17": "1c822b895ae472e7bafe4c4af6bd6dac",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/20/1ffb2a06f1b9dc37fa2735ffaed17b20eb5b9d": "6c71c80f865f37e452658e0c532851d6",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/b409be04b5b94bcf6992f3421423d3d30bb65e": "99bbb9fd0f75d9f9ddbe4dcdd86df8a3",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/42/2f1e13a6a935e23e2541f7c47e146138d4a6ce": "a98b25348c19165494210247fc747405",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/59/8e76d790bfe663cd67bb481555323bf1e6f1eb": "7e0c438c14e02aa7e372b90e7007423f",
".git/objects/5e/54eed0d70314a571c0c3dd4f0eb140bdb7dad6": "b0863fe8fb1b74ce75454e447b843c79",
".git/objects/60/c9dbd283d36a0e12a1af5ab59934af31cac017": "2c6cde33da2a544020a35f2e108e50c1",
".git/objects/62/ec3fd5b82134c9974805526388e28d6ed70e83": "7f7e8f75d16d4ea82831dd2e9189c334",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6d/612e587a183409ce181cd8f8e9b0e85c46a20a": "28eb91363b477bac20b6c7ed1d3427b0",
".git/objects/73/7b9101e5541018b51bf6b2d26ff0c4e8c4225b": "7ac77d03ad6d589f2e5a6fbe46d92a15",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/6e1b133c2222dd3bb462a72c1ef859b1a2a453": "b404486aba1a4e1bbd123e68d5007c31",
".git/objects/81/cc27182cee90004e19fc7e988fca910633a8a1": "277e59e9ff283b9d61e2ceff08434339",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/95/4a2cab8a6d661e5333785771aaf425c76caf83": "da80ddc8e7bcc0bb341b726442172aa9",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/482034babc20564c2c4fd16d8111cf88dd83f0": "f816c23466c3d82ac27cb7eb13bcd16b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b565c9699a95360ba707605b5c2fcc1bf37dbf": "fdc67c76aa3889be167c3e634fa3b1af",
".git/objects/a3/f99402bbc6eef1d0cbbe2fd6da35e7dcf7652a": "5e75019489e82d5a8d9827fe8e651d0b",
".git/objects/a5/c12614941d3343837a4baf2da592e3d01e5d0c": "fdb813edfe200256b19c897cabdb4654",
".git/objects/a8/0bb7d95da66b99bd27fab806bbb2c3c7fee3da": "365d6c089a08366a89cbc7c76d249f55",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/619e571539078f8ef7771e58d1aa9d159d204d": "3bcd0ec55293d656dadd0bd312486131",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/b1/5187b5b1a27bcccd86196e0322beff07d359ea": "b1c9b2c73113aa59bc11e739dd5949ed",
".git/objects/b2/da0cd7ac5e74639ca7770d419890911ff216ec": "9a99bf24290dd9156ffb0c7e4a9ec510",
".git/objects/b5/63a3d2bf8543d761fdadc8ea96fa9050f4c738": "cb1fbdcf4ee7b647c8b1c9ee8bec57bb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6d6b98c11fbc89259543551b417426bb679c1a": "9e64856d8b760eabba343acc1bf46439",
".git/objects/b8/afdbb9429dcae469e2554cb2c1d57899439798": "2d31bdef18fe7290cafaf01359562d6d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/89ff70f932494a234ba8d9e6e8afee3e74f61b": "0266f6b56536b126c44b7f68118cc42c",
".git/objects/be/c6db1f115db47504783e5d71b4f5565a13b8a9": "74f1978bcaa4ea2c1cf955078d2235ae",
".git/objects/c0/0f90d05134f8facf66b2a88620342ffd40149d": "b46c43e5dc1ebcf332101b22007f4318",
".git/objects/c3/a7bcdf2f48627a6a8da60c06d3da99f6e00c46": "a4969155e7a81fbfd425976c3ade2640",
".git/objects/c3/f114135463207a073fddbaa12b0410194d2bf5": "e058babc2d2b406a6a9fe045d905873c",
".git/objects/c6/58160d5eab714951ccb931e8a8b4bfe6e0c669": "85e8812886f0b703d1b42090f0141c2a",
".git/objects/c9/a326ae11dfdcb6465a9eb3662b817ee6145dda": "1a317011b772a72238400b2db2bc8c43",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/499a8c634324fbfe7f9726990bae7d864f50a0": "afce32d64145ff7584d2a7f35c2db341",
".git/objects/d9/73f7bcc3ef42c79f9bc00f54687d2c58d2ab92": "0af6a1b602a98e0521eb7872c1be5393",
".git/objects/e3/808b2d3b8ad206792ef9f0c3a5871960024575": "a5a0cd63a22431bc5ebdcfcb6df33709",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a89d6a3bca50192f52e1da212cbe7181de119f": "021e58a4bb8d6f278d3592475d6d4884",
".git/objects/f1/25d90e22296e0c36520317786b0d1b0761aa09": "62921ce26ec9665e2facd24b935d7544",
".git/objects/f2/6484a9a791a6ff6a19e1ecf721ae6441064e93": "4a409896b9c3add0e49b22ccf2270f70",
".git/objects/fc/ddd4463b99a8df561ad5f1fb98c0de045a8713": "00551c0a16b4b577bf8a5c4c29b21c23",
".git/objects/fe/ad06ac355a1f07600e46efecf00cc4dddabcf5": "f8fbab3a8731512dc4b54820bc407cbc",
".git/refs/heads/main": "4524420b06c3a5f6ff134baaef339285",
".git/refs/remotes/origin/main": "5bcd228c55e4a5b496396b8861db3d80",
"assets/AssetManifest.json": "e285f7ac9defe58f391d906ae009b828",
"assets/assets/FiraSans-SemiBold.ttf": "934104ff7f5dde5e3a31ddd7967f1601",
"assets/FontManifest.json": "283f4c9bb4544fe79cd747a634e814e8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/Arduino.png": "1a3fd808c50b606dc8965984d4527bdb",
"assets/images/flutter.png": "782250f16e2949c7ab40b673db1056af",
"assets/images/Logo.png": "2caa580ec2f5c9a24e66a97301e05cd9",
"assets/images/profile.jpg": "67344e2766a692945d3922e95deec604",
"assets/images/profile.png": "7c206ea9152bcaff8dee40987a10436d",
"assets/images/python.png": "124f145c92c68b84a52c08322927f016",
"assets/NOTICES": "8b0db08d0831b0016c6f5d3938ffd86c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e3f9abbad08d5426dcdaf1ba5491df75",
"/": "e3f9abbad08d5426dcdaf1ba5491df75",
"main.dart.js": "51901c2323c1ccb85ef5c3b614128085",
"manifest.json": "46d1d2c6060281245f47eafde139b92d",
"version.json": "7804eb643eb875d188221832d4ff86c5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
