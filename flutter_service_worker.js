'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "36a3e296c9b6c3278032c1425b718fcd",
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
"/.git/index": "43bf304ed8deec84bd1f40b48d5fa5c5",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "f708c22283b8a40f243491443f57a4ce",
"/.git/logs/refs/heads/master": "f708c22283b8a40f243491443f57a4ce",
"/.git/logs/refs/remotes/origin/HEAD": "c44438c8596f950afb2c85325cd6363b",
"/.git/logs/refs/remotes/origin/master": "884cc4711ad80f8272acd50ec49b9383",
"/.git/objects/00/44cd9fc418d4265ab5748294e3642795b2a9a3": "310b4a04e4f12ff004a0a35e03e742db",
"/.git/objects/06/7231de8ea16b23dd29161e5abec8d7959e3ae6": "5c523a1f670f1b04c252e5ddec2e35c3",
"/.git/objects/0b/2ad6d0272444b99acd702ff7ae7a5959238b19": "a6f09cfca339b8daf7d95e6838e3b691",
"/.git/objects/0c/a3b7c3aad66291c198b251c5b07acf431ae710": "8ccacdc46076fa22ee334c73540aac38",
"/.git/objects/13/697b569baad9de3d52a215b607f62fe7dfaa39": "5d867e02a56215ba5e70576b0283ecef",
"/.git/objects/18/c8c174a747184cb336414d31739490969c47f8": "8b4ce4f31dae40ac67e5afb5bb74a712",
"/.git/objects/1c/532d2e748e3a4a55f7d0975cec79832bf2380c": "d97448d61d213996155df460a4948263",
"/.git/objects/1e/cd21c45f422dc1f1411970e99c967654268730": "3f3d981702e7959f9d6a7324f7c87430",
"/.git/objects/21/dcc5a2b2abc32e7ad611795ea48ab47f5cf920": "43cdc333cb7958352ecc660b6c42dbea",
"/.git/objects/21/eab21930801749491274068a06a941dab4cda5": "647c95aa6485b72f13c19c0e11622705",
"/.git/objects/22/096ee3d3fad6c3a3ee9daf8f8ae045d7787e8f": "1f35d75807a141c771273f58cae4734a",
"/.git/objects/26/21420919c933ebb39c5dc926f284d29aa9918a": "733afc6a4692584be85e53fefe418a6a",
"/.git/objects/28/e676a2bbb4fb2cda6443fc4c7b10270f861cf5": "b805fb44fe3d7d6d7373c9abf6092ae9",
"/.git/objects/31/c331fa5593ed3b5b80bc2a663c835655500ec0": "11347fb6e2ac7696b2be771a12c0ba56",
"/.git/objects/32/c597bd1449282a425339a81941f01dfe06cfb8": "16a74e94b575faf7abbe6a05fc1b055c",
"/.git/objects/38/b28c9722d2aa24154111be3483a37371b8113f": "98ed2d25e64fbb6e2d164c4051cd9861",
"/.git/objects/39/a9af75985dec448b3b397f9beca0948467b66e": "3ad5796562d2f548b934287979060f01",
"/.git/objects/3c/143fe8a3436dacb96f34a521288768ccbf2305": "d4e17c50bc8f4f8fd34226b5f81d57ee",
"/.git/objects/3e/f91458c899394289618f5a5871299c758d0c25": "36db8a2d123f2ffbc838c14287ef2a94",
"/.git/objects/3f/7837874faa6786c78684ac0891c19dc175b933": "e4309aac302604b353e68cf02768b335",
"/.git/objects/40/efc52bd3156a095cd585a325f80c6cc27fa886": "8a11c250e97230bab9a3be241543ba68",
"/.git/objects/43/b6770fbae6ae01898e8f6df63a7b5d2fc1b9ee": "21551666d9622ac8e6b7baab0fc53ef7",
"/.git/objects/50/7f41336c34cc55f8e4cefd992834cabec3ada6": "bc47ec4d19c37f42d767d8901aa6214d",
"/.git/objects/51/f0cbec77f7b3af448c5f84a1695369a4a5178f": "e90bd1aae0d3b2d74904a080e71e4759",
"/.git/objects/5f/363b4c3b62314fd75f9c1908b35df8e4da0dcc": "b436904200785046bfe8bca040097b55",
"/.git/objects/6d/eabf1b314f22b822555aa3807dbd9c0f28d086": "574cf791358e15d154beb88d24df2d79",
"/.git/objects/73/68020996fe5bd56bc24be4d81f2bf4a55d5469": "59a964ae4e79e4ddc981329e43900bbe",
"/.git/objects/7b/cc522a2ca3edf6c252e37c6154a532ddd94bed": "36859525dec5cdef4dc10000620c24d3",
"/.git/objects/7f/477fc231b43ec7ce0fd05de313421aba1e3cb4": "2fe44be64e397cc60523434af2d8f9a1",
"/.git/objects/81/9031b7c41683cd7286f556b8faf3db7bae1983": "39d09dc82539d1cc472c71454f838543",
"/.git/objects/82/087755fedfac33d1b2d8f9268758217c9b795a": "e04f1391ab058479939b189e3212aa81",
"/.git/objects/83/75d778a3e37787658b97bcff148ca426d4dba0": "3b62033176b6a562b51a9eebc8943620",
"/.git/objects/8a/32de41a857a3c9d915f2a7be832d35f1c60a67": "9f1878535f717dda65611f4dd18a8328",
"/.git/objects/8d/ae4e5b83d404bf240ea69d014cad915f96a29c": "8d4fb31483efe9c7d76507e79f06c170",
"/.git/objects/8f/26e2bd1733d04766d3e1190b09757c874aafa6": "02f68a6a3d5fcb9aba43b1e9519f566b",
"/.git/objects/9a/75f8863d8d5644d661bb56dc33c83dceb3d114": "1bfddc9107a6277dec500c4ade0817d0",
"/.git/objects/9f/0e7e31d03abe03b5c90ce5007f870121f55818": "77e45d4c8bb8cc3845dd1a8f680d5d30",
"/.git/objects/a2/2f10f21d460689e236cca6ff51820e0164dde8": "32a3bf25002d5c771b7a3ecf607bb4aa",
"/.git/objects/a2/7e47f0a6d54accf4e504320b6f655901a67c16": "bb365617185be859cee562be7d012631",
"/.git/objects/a6/dc8870b3173e7f2b243eb359fcf96f76799ec1": "9218e444ea3270204c812aacb50b90fb",
"/.git/objects/ac/409c4e6a641cc054785fcfa2068ca16596155c": "335a9d379d578af6decc2dcb335aeeb6",
"/.git/objects/ae/a60d78e41705d8767594b737851acdf33e790a": "b5f82d06e8ba43f7498c60c5b2ca1892",
"/.git/objects/b1/d3bf9ca1c63f31feb4cc649f0ef5f46b2f7999": "496a2cf5f75ea4d974671ef822486007",
"/.git/objects/b6/4ec5fd53e0e690c62cbaa10080fbc5a799677e": "904edeeef5ebde875dd793fec154dce1",
"/.git/objects/c1/05cb45500c89967fb6f289b046e6b5a9d696c6": "5c465295e5cc35a9b82dec4147b2c960",
"/.git/objects/cb/981f6427018358ae7361bbd797bcc443e72399": "ba5944de6557c70d07a8ceb9c68ef589",
"/.git/objects/cb/e97127f3407f321e3dd30a95b35fb533fd0966": "81a1230f4c673706b371ad28500f3c69",
"/.git/objects/d5/2985364778b665a6b4662506dbd50cc2069ff7": "60b63d046983c2056ccd4d3fc83a6924",
"/.git/objects/d8/a7ad500b2f838fda66f28601b5ec6d878dfc69": "856553f51c1880554e99d34b247cb807",
"/.git/objects/db/39e6febc39785dc2934a5cdd3458efdb5a95e7": "f73fc30d4a7bb2cd0530e49fe601a314",
"/.git/objects/db/631d4ae2ea11111897c5f4bce44960437c6725": "54b393820d79f9cc343e2763cd07e9b0",
"/.git/objects/e7/c97a551f95ab85efab2ebf9c90632dcdbbad03": "49fb92b6541941fb92dd34430a8b01b3",
"/.git/objects/f1/12666179f1e992216a22e67728a504bc509a92": "c1a6cedda24f469cdabdf4f83118cd65",
"/.git/objects/f2/a524cef241280c373d7a49b122fcb0fba938b4": "6388567e26a8e0cbdd28e41d55143f64",
"/.git/objects/f6/0fd26766bd2e59000a8202893f93fe5e06f237": "4950298ef598b3aabaa15418a40db8ae",
"/.git/objects/f6/5f10c6161e8fe7b5780f7be54397dc3f5133a7": "6528b7f404fcdabd89cc8997ff5e9890",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.idx": "f6f79ef5d09d12a621c4902dde7eedfe",
"/.git/objects/pack/pack-51b9697899712b2f1092d46f459bab63190b131a.pack": "740e2acc6f9da795fd8b46e7d342d20a",
"/.git/packed-refs": "a1aa4de22c0720240b557aa12225ed55",
"/.git/refs/heads/master": "c9807904dbc1be803210bdd0a5168e55",
"/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"/.git/refs/remotes/origin/master": "c9807904dbc1be803210bdd0a5168e55",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "3c48ff0b5c17767ad01d74fe6022688b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "2c81c44839d33b1f119bd3ab97e64906",
"/icons/Icon-192.png": "71884fc53c409e9e426859c702c1abf3",
"/icons/Icon-512.png": "b1459c1fc264d26acb8532f222cdf1e7",
"/index.html": "d12f08958c25ae765833217a386139b2",
"/main.dart.js": "1e8cb42ac7540a0fe6bfdcce90cb54a4",
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
