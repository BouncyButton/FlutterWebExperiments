'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "a37f7d6347d95293291dee120c0b9f8e",
"/.git/config": "670644ec2074faaa179b45c070bacf53",
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
"/.git/index": "4cf9c03ea33266df6fc9f9e9a30946d5",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "2c31bdf84d6d3755732627ca0a3bf97f",
"/.git/logs/refs/heads/master": "2c31bdf84d6d3755732627ca0a3bf97f",
"/.git/logs/refs/remotes/origin/master": "0e2f326b48beeed4bd00f910a53f03f6",
"/.git/objects/01/b0e64d89f8f523a0708cf1abbba68d5320c9e1": "410f25d8459b73f92dde8ba7d52f3ce6",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/06/dc39676023a170ae187233bcea80b672152ea2": "3cdf02a2b546513022037380b9198483",
"/.git/objects/0c/dfcffac19540fada78a0d98380bba5a436f452": "dd00e117f2e28a51cce0524ba3717633",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/24/ea61daf856979ef13df8bcd5ca25b4e5a03ace": "932219ef035d67721ef9d4b36b3224e0",
"/.git/objects/26/117eb0074bb0f792402bb48e695b73778c86d7": "c3a99036d497170bb9ff57051a8dacf3",
"/.git/objects/32/b5795bce42c904305912932ce9cb4407612fd5": "bcc4f8a2b1a3e571c0face479facc2af",
"/.git/objects/38/7cee3b0e91f00bf6b1355d5d0958398e9c80b7": "0394ae9bdb426dd001ef4de14c30f608",
"/.git/objects/40/dbdb05f3888bd8c8b0a35f12116a606013a926": "d004274df1f06e395c0c22d208ccc539",
"/.git/objects/42/3a993e021f691020075ca5259b8843335d6192": "82c46cebdef361d822d7b647f18c14c1",
"/.git/objects/51/ddbde8a5eaca962b598abe3ee0f23b1a0f125c": "32494f3fa0b139b963eb881ec5cbf07c",
"/.git/objects/58/8f982cbccd5b8bf4bf975e4fd5044121e7b3c9": "739b1acc54451c5e8fe08fdda42a1941",
"/.git/objects/63/de757e90cc904ed80c09b57586d95d0d6909b3": "8bceb513ccc7b59abb94f7aeb1e6e87a",
"/.git/objects/6e/bc08f87a3e764c3af8a1f883ab9e5eb888f9df": "6f82776cf019f9fd48478ebd91b56107",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/8c/439b5f6c272fa9d7e16ea0454fa43c03c6e6af": "c4c9c96968a43e211d15ac24d25e23bd",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/9d/9dc43cb81dd034cb684639c480d17f0ec7751f": "719b9627e40f4da8976ca624c7ee2306",
"/.git/objects/9e/cccf1182fbb073c672c370a05941ce82e120f0": "bd8366114e876d155a6f200e042203da",
"/.git/objects/a7/9a4571cddc81680260f725e1cd3476ad966c7a": "b36e200b419ea3e27849fe5fe25a5490",
"/.git/objects/b1/5d3fcdda0894cb79a8de2c0f71adf228a81b6c": "79b0e94d0aff5ea4127c941eff716a83",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/bc/8112d31e544beba809a6426d41d485ecbbc2f7": "e9c0f773dc93b9e98a9bc669cca8ee22",
"/.git/objects/bd/d539c7b15510141dde31ce44fd7ab809cfe091": "06e51db5579ff2b612e036b96792c9e2",
"/.git/objects/cf/0847754d36ef07d3e8b6a9cf06abe134b9af8c": "b131d860903c6eed70f0b843d7c232c1",
"/.git/objects/d4/f4f075757e83978c1f25e7c9c0f90653b504a6": "25d32b664bf24efcd42423f8fdd688a3",
"/.git/objects/d4/faac3ee688497fc16d7931fc55710177c81480": "8c6db7c84a7d4caacaef84a7804f15a4",
"/.git/objects/d8/eae1763bbb9f70d16607449a26a151e8cbc08d": "4226294a158086fff9abfeb4fcb85c3c",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e1/0f89aae7bdb0fa28bdac6096aa71c906537bfa": "58a7b4389c65ecae8f8ce1b4c42512a1",
"/.git/objects/f2/c1c2a9c52aa62a1a6f47b688c7c586add55be6": "374485221134602a51bc730b44393283",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fc/875edd47167493c2562f9624e107607d01e1b5": "46dd60969a76ff32c0ebbcaa23a37076",
"/.git/refs/heads/master": "a265b27ba1f7fce920bd6dfa04e04787",
"/.git/refs/remotes/origin/master": "a265b27ba1f7fce920bd6dfa04e04787",
"/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "d8c4b97b53a68509e5b7ede15623edaf",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "c586bb5176fe71b29346b38cb17f7e29",
"/main.dart.js": "ecc382bf45148c11cbbd731fcc3fdc76",
"/manifest.json": "ae87853f8262fa0e0f5f05487c8924f6"
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
