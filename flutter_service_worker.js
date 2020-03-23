'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "aecb1b1ff8f5707373ee2a283ff2f509",
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
"/.git/index": "6f1b797a98dc9490163e20e2ccdd0d34",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "90df6a5220c8b2db8a8114be15da8d57",
"/.git/logs/refs/heads/master": "90df6a5220c8b2db8a8114be15da8d57",
"/.git/logs/refs/remotes/origin/HEAD": "c44438c8596f950afb2c85325cd6363b",
"/.git/logs/refs/remotes/origin/master": "e47c931ad621bbe2b17be2678d6dfbed",
"/.git/objects/00/44cd9fc418d4265ab5748294e3642795b2a9a3": "310b4a04e4f12ff004a0a35e03e742db",
"/.git/objects/0c/a3b7c3aad66291c198b251c5b07acf431ae710": "8ccacdc46076fa22ee334c73540aac38",
"/.git/objects/18/c8c174a747184cb336414d31739490969c47f8": "8b4ce4f31dae40ac67e5afb5bb74a712",
"/.git/objects/1c/532d2e748e3a4a55f7d0975cec79832bf2380c": "d97448d61d213996155df460a4948263",
"/.git/objects/21/eab21930801749491274068a06a941dab4cda5": "647c95aa6485b72f13c19c0e11622705",
"/.git/objects/31/c331fa5593ed3b5b80bc2a663c835655500ec0": "11347fb6e2ac7696b2be771a12c0ba56",
"/.git/objects/32/c597bd1449282a425339a81941f01dfe06cfb8": "16a74e94b575faf7abbe6a05fc1b055c",
"/.git/objects/3f/7837874faa6786c78684ac0891c19dc175b933": "e4309aac302604b353e68cf02768b335",
"/.git/objects/40/efc52bd3156a095cd585a325f80c6cc27fa886": "8a11c250e97230bab9a3be241543ba68",
"/.git/objects/51/f0cbec77f7b3af448c5f84a1695369a4a5178f": "e90bd1aae0d3b2d74904a080e71e4759",
"/.git/objects/5f/363b4c3b62314fd75f9c1908b35df8e4da0dcc": "b436904200785046bfe8bca040097b55",
"/.git/objects/6d/eabf1b314f22b822555aa3807dbd9c0f28d086": "574cf791358e15d154beb88d24df2d79",
"/.git/objects/7f/477fc231b43ec7ce0fd05de313421aba1e3cb4": "2fe44be64e397cc60523434af2d8f9a1",
"/.git/objects/81/9031b7c41683cd7286f556b8faf3db7bae1983": "39d09dc82539d1cc472c71454f838543",
"/.git/objects/82/087755fedfac33d1b2d8f9268758217c9b795a": "e04f1391ab058479939b189e3212aa81",
"/.git/objects/83/75d778a3e37787658b97bcff148ca426d4dba0": "3b62033176b6a562b51a9eebc8943620",
"/.git/objects/8a/32de41a857a3c9d915f2a7be832d35f1c60a67": "9f1878535f717dda65611f4dd18a8328",
"/.git/objects/8d/ae4e5b83d404bf240ea69d014cad915f96a29c": "8d4fb31483efe9c7d76507e79f06c170",
"/.git/objects/9f/0e7e31d03abe03b5c90ce5007f870121f55818": "77e45d4c8bb8cc3845dd1a8f680d5d30",
"/.git/objects/ac/409c4e6a641cc054785fcfa2068ca16596155c": "335a9d379d578af6decc2dcb335aeeb6",
"/.git/objects/ae/a60d78e41705d8767594b737851acdf33e790a": "b5f82d06e8ba43f7498c60c5b2ca1892",
"/.git/objects/b6/4ec5fd53e0e690c62cbaa10080fbc5a799677e": "904edeeef5ebde875dd793fec154dce1",
"/.git/objects/c1/05cb45500c89967fb6f289b046e6b5a9d696c6": "5c465295e5cc35a9b82dec4147b2c960",
"/.git/objects/d5/2985364778b665a6b4662506dbd50cc2069ff7": "60b63d046983c2056ccd4d3fc83a6924",
"/.git/objects/d8/a7ad500b2f838fda66f28601b5ec6d878dfc69": "856553f51c1880554e99d34b247cb807",
"/.git/objects/db/631d4ae2ea11111897c5f4bce44960437c6725": "54b393820d79f9cc343e2763cd07e9b0",
"/.git/objects/f6/0fd26766bd2e59000a8202893f93fe5e06f237": "4950298ef598b3aabaa15418a40db8ae",
"/.git/objects/f6/5f10c6161e8fe7b5780f7be54397dc3f5133a7": "6528b7f404fcdabd89cc8997ff5e9890",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.idx": "f6f79ef5d09d12a621c4902dde7eedfe",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.pack": "740e2acc6f9da795fd8b46e7d342d20a",
"/.git/packed-refs": "a1aa4de22c0720240b557aa12225ed55",
"/.git/refs/heads/master": "ee55d5b801c5cdc7d434e00cdb33eef8",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "ee55d5b801c5cdc7d434e00cdb33eef8",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3c48ff0b5c17767ad01d74fe6022688b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "2c81c44839d33b1f119bd3ab97e64906",
"/icons/Icon-192.png": "71884fc53c409e9e426859c702c1abf3",
"/icons/Icon-512.png": "b1459c1fc264d26acb8532f222cdf1e7",
"/index.html": "d12f08958c25ae765833217a386139b2",
"/main.dart.js": "3c61e28ffe63a7c33c5a6a29c62d1bea",
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
