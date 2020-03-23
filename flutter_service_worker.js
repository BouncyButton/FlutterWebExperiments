'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "e7baa41db8e0dd2999a63c37427e9fa1",
"/.git/config": "83c9df488238005a05aeda9bcd7e0120",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "81005745454846bb79cc3c7c0c57658d",
"/.git/hooks/prepare-commit-msg.sample": "7dfe15854212a30f346da5255c1d794b",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "4e7e7c5f9d4cdf66fee218008dbed90c",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "809e532b0cd262ff31b5f48e80301b56",
"/.git/logs/refs/heads/master": "809e532b0cd262ff31b5f48e80301b56",
"/.git/logs/refs/remotes/origin/HEAD": "c44438c8596f950afb2c85325cd6363b",
"/.git/logs/refs/remotes/origin/master": "5b8db4614f116f6084ad84422ac91af3",
"/.git/objects/1c/532d2e748e3a4a55f7d0975cec79832bf2380c": "d97448d61d213996155df460a4948263",
"/.git/objects/3f/7837874faa6786c78684ac0891c19dc175b933": "e4309aac302604b353e68cf02768b335",
"/.git/objects/6d/eabf1b314f22b822555aa3807dbd9c0f28d086": "574cf791358e15d154beb88d24df2d79",
"/.git/objects/7f/477fc231b43ec7ce0fd05de313421aba1e3cb4": "2fe44be64e397cc60523434af2d8f9a1",
"/.git/objects/ac/409c4e6a641cc054785fcfa2068ca16596155c": "335a9d379d578af6decc2dcb335aeeb6",
"/.git/objects/b6/4ec5fd53e0e690c62cbaa10080fbc5a799677e": "904edeeef5ebde875dd793fec154dce1",
"/.git/objects/d5/2985364778b665a6b4662506dbd50cc2069ff7": "60b63d046983c2056ccd4d3fc83a6924",
"/.git/objects/f6/5f10c6161e8fe7b5780f7be54397dc3f5133a7": "6528b7f404fcdabd89cc8997ff5e9890",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.idx": "f6f79ef5d09d12a621c4902dde7eedfe",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.pack": "740e2acc6f9da795fd8b46e7d342d20a",
"/.git/packed-refs": "a1aa4de22c0720240b557aa12225ed55",
"/.git/refs/heads/master": "b500575b6e65bc8cfe6424828517f39a",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "b500575b6e65bc8cfe6424828517f39a",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3c48ff0b5c17767ad01d74fe6022688b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "2c81c44839d33b1f119bd3ab97e64906",
"/icons/Icon-192.png": "71884fc53c409e9e426859c702c1abf3",
"/icons/Icon-512.png": "b1459c1fc264d26acb8532f222cdf1e7",
"/index.html": "07e34e858eb1ed8f46ffc125e297f9af",
"/main.dart.js": "a2ce8e409dd1a711e349149f2c1f25d7",
"/manifest.json": "22c181ed0d2bf81ae568c6806cb1dacd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
