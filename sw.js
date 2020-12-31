/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0d13cc384e09def9f28bfae6c52c687f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","cb39023f0635d172aa51df07b63b2bd4"],["/CF749E-Inversions-After-Shuffle/index.html","2a113e8ea93d98f8e4f1f995e9b89718"],["/DSaAi/index.html","3043ca2168052ac534eb8602e67d8426"],["/GSS1/index.html","55fbd36108e240f76554356021f57a30"],["/GSS3/index.html","c99dc8b1640e8dab33cbe56998af7b77"],["/GSS4/index.html","a9f6cc3eb7195e4d95b1b96c3b25591b"],["/GSS5/index.html","716f4399940689395af68950016860f6"],["/HongYanAsstHard/index.html","add45be5f1a1788f5f10ed628b4b4856"],["/Luogu-P1654-OSU/index.html","b3867d0ccd95dc86a73872e9359d48fe"],["/Luogu-P2899-Cell-Phone-Network/index.html","604d68a80cafb048c2721e75cf1608ba"],["/Luogu-P4289/index.html","c15f4663294348b8d18c04903789cb82"],["/Nescafe17-Defenders'-Challenge/index.html","5233e49a409091a38a03c8d7eb542320"],["/OPTIMIZE/index.html","964f2d8d2e1d5896c40c8cf3455aa9b3"],["/SP2885-WORDRING-World-Rings/index.html","b6de79f9436dc85d63005361319e2ecb"],["/UVA1714-Keyboarding/index.html","cccf05902cf7c4b43c870aab755c9693"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","7df0fc4283460326f9dd490e956e9be0"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","a87dd1523f3661255fc5f5bd0cbe0bd2"],["/archives/2017/12/index.html","11f6476612c4961c9dab923c5bf10f03"],["/archives/2017/index.html","f5e74077780e9b20b1dc126419210678"],["/archives/2018/06/index.html","1c5d251bbf246734a26041ef8c444eb8"],["/archives/2018/07/index.html","629e1b3d456f04f11ced27ab662bd50c"],["/archives/2018/08/index.html","5c7432fee5a598a2cc76b92d5647e89b"],["/archives/2018/09/index.html","1f82d399777e1da709ec98dfabffac84"],["/archives/2018/10/index.html","c221230948127d0e2f7430d7868d14b9"],["/archives/2018/11/index.html","03c8bbd9457aa1f0add431d32c64b7a2"],["/archives/2018/index.html","ea4c0efd8daba61cabdc9aabc5290cf2"],["/archives/2018/page/2/index.html","a7f2acedd1d4ac9b6ad9c52370ec6746"],["/archives/2019/02/index.html","f72eb29cf774ff28770d705464ccdd41"],["/archives/2019/07/index.html","0d40a82f29bcc7c35e0ac3ac2e6f517d"],["/archives/2019/index.html","1c05f7b8a008841501a3d80ed95b14c4"],["/archives/2020/01/index.html","55464207cd8fa4e1ab96faab35e4377b"],["/archives/2020/03/index.html","27e5fa1f6a968fbed7161497f83b9830"],["/archives/2020/07/index.html","9e6f4d411ead312b1a4624f3d474ed8e"],["/archives/2020/08/index.html","04befa3ebd08db5adb59ed6de336c94a"],["/archives/2020/11/index.html","aae807b2f1ebd5702a86c955acb2dba3"],["/archives/2020/index.html","a585f1646414dbe94bbae538fcd3cc29"],["/archives/2021/01/index.html","c55de5a4bcfd0af46ac232281a6a92e6"],["/archives/2021/index.html","6e3c40752f7fd5fd13fa4dd593809b52"],["/archives/index-1.html","2489276c03fef9176be6e4e0b9cd7393"],["/archives/index.html","a795ebcbb16506ba98f8af65cc9afa21"],["/archives/page/2/index.html","4f4cf65685a873ca7d91c872e1f5b8c7"],["/archives/page/3/index.html","4f4cf65685a873ca7d91c872e1f5b8c7"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","8061a1322b01618bf07c31bf94d50493"],["/buzzer-define/index.html","d6a24bb013bbfcd94c1df28e648e362b"],["/categories/HEXO/index.html","3d8ea1859f1576686957aee91f7387bd"],["/categories/Olympiad-in-Informatics/index.html","54edc54c32c48f5cb54c2ed85308196f"],["/categories/Olympiad-in-Informatics/page/2/index.html","b0a068980e30158f24d196e48846cacf"],["/categories/Trick/index.html","0a0faf05563b814d014a0a3e8a391824"],["/categories/VPN/index.html","c256ac71ed783e9c7ad14c4d903faf2b"],["/categories/buzzer/index.html","d6b88c896a950abbb04cf6ccfc858013"],["/categories/index.html","ad7509210db8eea0ef69e4ae0240493d"],["/categories/memory/index.html","25966340429f895b55daa4043447e66d"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","4fd3eb9de018e33662e53d829bddd601"],["/essay/A1/index.html","4c0690427e99d1cae1e8bdde5ab0f4f1"],["/essay/A2-letter-showing-thanks/index.html","c99d88baa356de5dd945914139c20577"],["/essay/A5/index.html","64b6f3e06ce2002111131fea5a687631"],["/essay/CH-wangke/index.html","7b447ac6fff1bb55c8eb6b91ecdc9b62"],["/essay/EN-after-class-activities/index.html","a23009a76c9c352e4634b356e9ec0cb4"],["/essay/FrenchRevolution/index.html","64bccba6b15a7a4e8257cc0605072402"],["/faioj0101-leftist-heap/index.html","b3549c13285a91d3fd896cb009532768"],["/faioj1499-qpow-fast/index.html","300216ad78ed1d38d533bce0c9b5dfd4"],["/friends/index.html","1c6fd88a4727e83e32db62b56bc26f47"],["/gallerypage/index.html","db8ab9c03beee209dbd98c6845770f68"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","416ed21dc109ac65b599c6bfd7408f0c"],["/hiddenlist/index-p.html","e5a4d3b4d8fd31055baf8e1073d96244"],["/hiddenlist/index.html","70d7bce1c67750325b94b61da34e16be"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","f9d94067d219b7c6f2fe0e328e17c355"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","6532a99c962488741063ac9fe6abb83e"],["/luogu-P1967-noip2018-day-1/index.html","630d5734d66567fbb121267a5f98034a"],["/luogu-segment-tree/index.html","27b8c9a40b589149485f916c5496ef24"],["/ncm_unlock/index.html","8d6cd14c65a5cb7acdbdf8061ef11e30"],["/obs_internet_class_fishing/index.html","58f3b0851ff113b47a4b18e27c01c838"],["/oi_history/index.html","d9187a08e865ca31138b6af304f475cc"],["/page/2/index.html","0c9de40352f0fd3effd7afc5251d4531"],["/page/3/index.html","54e1a7db74c8fe32e2af5f200635bc72"],["/recall-oi-20200828/index.html","4f13b34afbb19313286cbcc65ba2a318"],["/seg-tree-namespace/index.html","d0bd025fb5cc01dfecf417abc192f805"],["/shortest-path/index.html","baa6b1dc9f49dbb14b060339fddcbbf9"],["/sw-register.js","c3efe5a3e1aec216053830202a5c49f8"],["/tags/DP/index.html","fa13d58c22d6136adce08839dd392b81"],["/tags/GSS/index.html","5c7aacdb9a6b2d1658ff52c7b18570e9"],["/tags/HEXO/index.html","1a7eb93d01c2fd1828f1572a47e2594b"],["/tags/OBS/index.html","df49c2e07d67203a665d27afbbfbaa6a"],["/tags/STL/index.html","f3d99650a0062b4bfa6e5dff087663e4"],["/tags/Template/index.html","80d80205bfa948554221ce35cfd4679c"],["/tags/Trick/index.html","bea0ba5c708af1431764b9338ed3a5aa"],["/tags/VPN/index.html","82550eb7ce88bd0411d6ab5f415f7237"],["/tags/VPS/index.html","875893e2cb5d2f29404e70b98ad649d2"],["/tags/buzzer/index.html","8daaf73b5e7963123b93ed943729485b"],["/tags/contest/index.html","05b83d9eb910f168226d38a0f63a55d4"],["/tags/index.html","04b6439c1e8c4d3b6117eaa61be8b266"],["/tags/segment-tree/index.html","b9c5bf32f8f745c64e5501e189a40d60"],["/tags/倍增/index.html","db9171a3283bdf9c1529efc7cc546972"],["/tags/并查集/index.html","4d8dbde68e9d76a1d7aa616fad3bda7b"],["/tags/最短路/index.html","3c639b12fdc1be7b45f69646944edd7b"],["/tags/生成树/index.html","f282ad609b46e3879e4c9845372b8143"],["/tags/贪心/index.html","6012df923e581a62bb5060d861ac34c3"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","c6d5e72af3a1cdb5279e684d29548f1b"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","509699aa5dc0b7ac6becc5b0d2ebc487"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","9de7e0f820a0b64cff51b95ec8b18ec1"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","cb9479e2f684ff0d6c6ee9ecfca89fc5"],["/vultr_ssr_vpn_buildup/index.html","aa243ce2b647b41cfc8072e1351ba682"],["/webboard/index.html","f2780469718509484a118e543372ce19"]];
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
