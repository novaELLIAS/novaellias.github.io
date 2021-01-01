/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0d13cc384e09def9f28bfae6c52c687f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","cb39023f0635d172aa51df07b63b2bd4"],["/CF749E-Inversions-After-Shuffle/index.html","2a113e8ea93d98f8e4f1f995e9b89718"],["/DSaAi/index.html","94b6f6450ea65e4d158eccef5d086b13"],["/GSS1/index.html","9703f24c2a2477fb16faec14fee4a078"],["/GSS3/index.html","91d613d153c17bd22be27e53b476e203"],["/GSS4/index.html","88c13aba79704df39930ec6ce9f4ced5"],["/GSS5/index.html","16c1139c32d65356b42f12d4d6806d26"],["/HongYanAsstHard/index.html","add45be5f1a1788f5f10ed628b4b4856"],["/Luogu-P1654-OSU/index.html","b3867d0ccd95dc86a73872e9359d48fe"],["/Luogu-P2899-Cell-Phone-Network/index.html","604d68a80cafb048c2721e75cf1608ba"],["/Luogu-P4289/index.html","c15f4663294348b8d18c04903789cb82"],["/Nescafe17-Defenders'-Challenge/index.html","ccf691f1d94b3e201d7bba1ce747475a"],["/OPTIMIZE/index.html","964f2d8d2e1d5896c40c8cf3455aa9b3"],["/SP2885-WORDRING-World-Rings/index.html","b6de79f9436dc85d63005361319e2ecb"],["/UVA1714-Keyboarding/index.html","cccf05902cf7c4b43c870aab755c9693"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","7df0fc4283460326f9dd490e956e9be0"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","80223c04669b1d1101ed7725a11fbf99"],["/archives/2017/12/index.html","9a312bc566e3c1ad660b6f894e069f43"],["/archives/2017/index.html","4e0439a8597712b021c159edbabacfb3"],["/archives/2018/06/index.html","d11d25f8efd5da4cf7f78e5993f8eeda"],["/archives/2018/07/index.html","4303214693c6dd500a50b51d76c2fee5"],["/archives/2018/08/index.html","b14d9a5f350a03088d8cc86937c6f006"],["/archives/2018/09/index.html","da227e09d41776a1188ec33e75fbf9ef"],["/archives/2018/10/index.html","700a5fc4b236e7a44f134163ad71ef35"],["/archives/2018/11/index.html","12ec814752bd30c602984a41e13ae3da"],["/archives/2018/index.html","61de6fb89b9e4800b6766f503c93bc2e"],["/archives/2018/page/2/index.html","a5a16f8c633d537bd8dd6d614b663c8b"],["/archives/2019/02/index.html","00a6b85eb74bd274617fc5a656deb1b6"],["/archives/2019/07/index.html","18a90bbab069e4a3f38ffe58256128e5"],["/archives/2019/index.html","4d110d016edd3966e464e6ada282b636"],["/archives/2020/01/index.html","27e3a0e1d8d54be40221a42d4f81680d"],["/archives/2020/03/index.html","b1df18964e8211da60746222078c38bf"],["/archives/2020/07/index.html","2ae4818da268ba424e3baee57585fbd4"],["/archives/2020/08/index.html","164a48fbaf2f6206d47e9ab84a2c7ecf"],["/archives/2020/11/index.html","2bb77d36e3011950a9f2f6353dffee36"],["/archives/2020/index.html","3eced81f20551b57dd772bbf2604816d"],["/archives/2021/01/index.html","96e15e26cdc6ec7653ddaa2a5cd2c5a8"],["/archives/2021/index.html","4220cc13796d1148a12e6c9c5510373b"],["/archives/index-1.html","2489276c03fef9176be6e4e0b9cd7393"],["/archives/index.html","66b67e93c4ced5ccbd6326c9e74e58a4"],["/archives/page/2/index.html","079355079150812c202efcc32f9d329b"],["/archives/page/3/index.html","079355079150812c202efcc32f9d329b"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","8061a1322b01618bf07c31bf94d50493"],["/buzzer-define/index.html","d6a24bb013bbfcd94c1df28e648e362b"],["/categories/HEXO/index.html","f7f75e00c15ff5b3a675aede149843fa"],["/categories/Olympiad-in-Informatics/index.html","9345205eb71192728d228e59556872d8"],["/categories/Olympiad-in-Informatics/page/2/index.html","ffa6e61ba39811e9f15b773c4a0aee00"],["/categories/Trick/index.html","2c452744135f66cef3a4b3f7ef870420"],["/categories/VPN/index.html","3df5decb5be909d51c197b15926c94c6"],["/categories/buzzer/index.html","729f4c432fe756fd3376d1e8ec410599"],["/categories/index.html","ad7509210db8eea0ef69e4ae0240493d"],["/categories/memory/index.html","20fd824c3efb097d673cd8b4682ec3d0"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","4fd3eb9de018e33662e53d829bddd601"],["/essay/A1/index.html","4c0690427e99d1cae1e8bdde5ab0f4f1"],["/essay/A2-letter-showing-thanks/index.html","c99d88baa356de5dd945914139c20577"],["/essay/A5/index.html","64b6f3e06ce2002111131fea5a687631"],["/essay/CH-wangke/index.html","7b447ac6fff1bb55c8eb6b91ecdc9b62"],["/essay/EN-after-class-activities/index.html","a23009a76c9c352e4634b356e9ec0cb4"],["/essay/FrenchRevolution/index.html","64bccba6b15a7a4e8257cc0605072402"],["/faioj0101-leftist-heap/index.html","b3549c13285a91d3fd896cb009532768"],["/faioj1499-qpow-fast/index.html","300216ad78ed1d38d533bce0c9b5dfd4"],["/friends/index.html","1c6fd88a4727e83e32db62b56bc26f47"],["/gallerypage/index.html","424fd8d9225c32dbb395f55cd125115c"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","416ed21dc109ac65b599c6bfd7408f0c"],["/hiddenlist/index-p.html","e5a4d3b4d8fd31055baf8e1073d96244"],["/hiddenlist/index.html","70d7bce1c67750325b94b61da34e16be"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","0bfc666fca14629857e645f20f484d36"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","6532a99c962488741063ac9fe6abb83e"],["/luogu-P1967-noip2018-day-1/index.html","41cf0de3a02d01f200194c49952c0682"],["/luogu-segment-tree/index.html","27b8c9a40b589149485f916c5496ef24"],["/ncm_unlock/index.html","8d6cd14c65a5cb7acdbdf8061ef11e30"],["/obs_internet_class_fishing/index.html","58f3b0851ff113b47a4b18e27c01c838"],["/oi_history/index.html","d9187a08e865ca31138b6af304f475cc"],["/page/2/index.html","0d68514fdcade45ef21a264b4ae4f0e9"],["/page/3/index.html","2c907c64244a3f1cedab7618a19478b0"],["/recall-oi-20200828/index.html","4f13b34afbb19313286cbcc65ba2a318"],["/seg-tree-namespace/index.html","d0bd025fb5cc01dfecf417abc192f805"],["/shortest-path/index.html","baa6b1dc9f49dbb14b060339fddcbbf9"],["/sw-register.js","dc6adab5335de4a39ceccf43ce72f1ff"],["/tags/DP/index.html","5ad59cea2c4d94fcc796e99773ebc198"],["/tags/GSS/index.html","41f17206426a7ef1728354fd71e42601"],["/tags/HEXO/index.html","b2fbba232f9fb81ef592d343b89ede5c"],["/tags/OBS/index.html","e0fcaed064af11dff89ac2e9cba0b770"],["/tags/STL/index.html","0c563daaaf33761e7f43430399a81e0c"],["/tags/Template/index.html","8bb9144b27324b88ed4eb472bdebc3fd"],["/tags/Trick/index.html","2ad700b22e9e73bb266edbb5248b4549"],["/tags/VPN/index.html","9eae170c6f4a4b2a99ead727a21bc45c"],["/tags/VPS/index.html","447c913ac1fe65445db9d3f7ff2dd753"],["/tags/buzzer/index.html","9111e12f8cbaf26bcb5789ba4e7dd385"],["/tags/contest/index.html","2426dcba4c4ad9b0ef761fb82030434d"],["/tags/index.html","04b6439c1e8c4d3b6117eaa61be8b266"],["/tags/segment-tree/index.html","9b7b1ab840e12a2d0428aef04217df01"],["/tags/倍增/index.html","f2dc2b7b869be7a51c77c880ed8cdf5d"],["/tags/并查集/index.html","b2be84fa36908e7dedc477d6945fbc24"],["/tags/最短路/index.html","4081918036ce504eae54cc3634885ef5"],["/tags/生成树/index.html","ab1214f3ba79dde027ddcfba18bf03b4"],["/tags/贪心/index.html","1096d130bc0bc9d1b342d97b7a30bb36"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","c6d5e72af3a1cdb5279e684d29548f1b"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","509699aa5dc0b7ac6becc5b0d2ebc487"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","9de7e0f820a0b64cff51b95ec8b18ec1"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","cb9479e2f684ff0d6c6ee9ecfca89fc5"],["/vultr_ssr_vpn_buildup/index.html","aa243ce2b647b41cfc8072e1351ba682"],["/webboard/index.html","f2780469718509484a118e543372ce19"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
