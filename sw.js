/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b0ab4b15295eee5b44316da5981b109d"],["/CF372B-Counting-Rectangles-is-Fun/index.html","742e8770b021699b3b40fdea77b8c372"],["/CF749E-Inversions-After-Shuffle/index.html","a4d3eddd23785934fdd66be6f34a6fa1"],["/GSS1/index.html","06c4e5b114248542ccc957e16b756878"],["/GSS3/index.html","6b5e50a2a5c0bef0dc8db166df23ded4"],["/GSS4/index.html","7d84635c0e3e92cc708829a81e4e095f"],["/GSS5/index.html","133e6301647906e758e8b88598872360"],["/HongYanAsstHard/index.html","e5b33708bcacf5606c200b8af7a6d0e0"],["/Luogu-P1654-OSU/index.html","a0fa69b69b8480d975b91b56ef3a753c"],["/Luogu-P2899-Cell-Phone-Network/index.html","851b11eb4a5e52801ac106c6597726b1"],["/Luogu-P4289/index.html","d2d39bcc395b9c9e37f42db2d9cc51b8"],["/Nescafe17-Defenders'-Challenge/index.html","e80480f900b9ed397dc08c00f7f7d760"],["/OPTIMIZE/index.html","d3840a6d807857adf45157a0f3beea60"],["/SP2885-WORDRING-World-Rings/index.html","67d2fecf3673ebca2ede6a517bd76a03"],["/UVA1714-Keyboarding/index.html","e088574f9a601bac66d24f5ffd533183"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","d305848910de63d5f8819ca713e056fb"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","b6df800697969c7c1c981ffc9e4d2c1a"],["/archives/2017/12/index.html","2cea0757ce72be719ac44685917a6592"],["/archives/2017/index.html","5f71bd435928487930f24ebaac697db7"],["/archives/2018/06/index.html","02a82ce1ca0e18be40ec573501d49aa6"],["/archives/2018/07/index.html","597588ab30c6460780b7fc1500f7c5b5"],["/archives/2018/08/index.html","d49ad91ce1f263ef543713838f52a318"],["/archives/2018/09/index.html","9ef18bc6ef55f36f7e1bed438498748f"],["/archives/2018/10/index.html","2a454b9de14a4ddc10dd7d3a90fcbcf7"],["/archives/2018/11/index.html","6c40a2baea0f73c41dc70b8d8c559be1"],["/archives/2018/index.html","c3ad053fac5301642fa3b024e9fc621b"],["/archives/2018/page/2/index.html","f965e695b6bdfbbadedfe0cfd1016503"],["/archives/2019/02/index.html","fb22a09c11a67a08c2af79f6feec4f77"],["/archives/2019/07/index.html","aeec0da26e45554f2a1f89c51bee3558"],["/archives/2019/index.html","a8b0777842619a8f3244cfc3c6ea1061"],["/archives/2020/01/index.html","40406bb3d96253a53bffb86277f7f9c7"],["/archives/2020/03/index.html","619d61677d2078bd4f5b6256e2d9da68"],["/archives/2020/07/index.html","f77200d5814c32c6a6a374e763cf1199"],["/archives/2020/08/index.html","535e2b3f36c84c8ffa651c1dee250f64"],["/archives/2020/11/index.html","6ee5e3de8e871b48e380ea3696027885"],["/archives/2020/index.html","fe619bc71989bb48b3be6500948ca8c5"],["/archives/index-1.html","f3d40abd66b4208062728eca8e584626"],["/archives/index.html","62707a52dab25254b1c3909a10a42ab7"],["/archives/page/2/index.html","0241d1d827bf8b78ac1daebad1458662"],["/archives/page/3/index.html","0241d1d827bf8b78ac1daebad1458662"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","d283e74d991b462b09b23bee07fbc50c"],["/buzzer-define/index.html","0f157307a0d3a0d8cc6484d86e164017"],["/categories/HEXO/index.html","c69ac3ca401bec53ffc5a8627555b129"],["/categories/Olympiad-in-Informatics/index.html","cd61761078c8825bfa4bf92be7aa6688"],["/categories/Olympiad-in-Informatics/page/2/index.html","9ecd89dca35119a7dd9e83a4f2803b64"],["/categories/Trick/index.html","c6a5a2ff36fb5d261e5d9dcd8422f3d2"],["/categories/VPN/index.html","d34466c4be3916af860b39224bb1ca6b"],["/categories/buzzer/index.html","2382b57c1aa3c06b0fb5d505c8fcd15f"],["/categories/index.html","dfe9eef829eb1c8f84804c6853f0cd93"],["/categories/memory/index.html","9cf53218ea8ad81f00f4e38e1c815387"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","7ff7569db469f6ecc137af2f6c772c6e"],["/essay/A1/index.html","7a45f351cade540f1e82cf31c97312d4"],["/essay/A2-letter-showing-thanks/index.html","048794c2d0f9d744b6f439a1cf66ede1"],["/essay/A5/index.html","4260e2227910d68baf69272ec1bca5eb"],["/essay/CH-wangke/index.html","93696a007b75c82b37ad171d515afb37"],["/essay/EN-after-class-activities/index.html","648c96a5e70dcce42c60a0d355a9bd57"],["/essay/FrenchRevolution/index.html","864dcfab5221a16d7162e41246ae27ac"],["/faioj0101-leftist-heap/index.html","05250001157f47d49240c882b13df53c"],["/faioj1499-qpow-fast/index.html","50a2904ec4b2a7cad2f97c1179489db2"],["/friends/index.html","02dbc14a5cfd9e98095cdf9e6eedf336"],["/gallerypage/index.html","a3d27d13f2d6f73ddb34fa1e15e2ff36"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","bde1da70634c9e7f273740bff53e1d3c"],["/hiddenlist/index-p.html","388db437fc2aa115a9a8ccf77248fffd"],["/hiddenlist/index.html","7a818da5baceffc58791e7bf3cc356e3"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","2ab0c1fc540d4f78311c9f937f260959"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","7bd814ae4db874f65a31e3bc6a3259c3"],["/luogu-P1967-noip2018-day-1/index.html","554ce9c246d813a5847ceb127cece9df"],["/luogu-segment-tree/index.html","18521e9c60cca28fca054f98089057a7"],["/ncm_unlock/index.html","13d5eb28e5ee232236d42f64fefb08f6"],["/obs_internet_class_fishing/index.html","92c0a2771d44801e6e0d1abb1bf07a23"],["/oi_history/index.html","d8113d7bada27607f41e5ebee70ac01d"],["/page/2/index.html","824b6711205e0ef0e257d246f26c007a"],["/page/3/index.html","c82d08273348a4759d64bdeefa3a9ae2"],["/recall-oi-20200828/index.html","0c2ec5144e0e64169ac9fb46b00961ea"],["/seg-tree-namespace/index.html","a38aaa1db7b7379fc66a27db56298bff"],["/shortest-path/index.html","1c19339f37518bd0086c89fbb502f2de"],["/sw-register.js","c2f775ef799c065ee641a5c35f7fcac8"],["/tags/DP/index.html","8f5f191d234095a5f59be8764043b9fb"],["/tags/GSS/index.html","30c0539908194803aca19077e7031346"],["/tags/HEXO/index.html","fc5e0bd0e9456c8685be372af63801c3"],["/tags/OBS/index.html","feb3c12ac10e4baff18167ca4d48e2cf"],["/tags/STL/index.html","f86443ebf2e3337ad97436b77eddc452"],["/tags/Template/index.html","6859a6a52ae3c677c60de2e070114f8a"],["/tags/Trick/index.html","7760aaf797d89c76aaa59a03c3ce8e04"],["/tags/VPN/index.html","df480450b17c18c1b66581110d058a58"],["/tags/VPS/index.html","488642f531bb4df418dc92a15752f39b"],["/tags/buzzer/index.html","15ea7c423172a62065ddc63303007f55"],["/tags/contest/index.html","549723054444c3148557e01fb2f66270"],["/tags/index.html","535815b6367c5eb697e9b563c8101bf7"],["/tags/segment-tree/index.html","17dec1d649c15fe7c66594535f494724"],["/tags/倍增/index.html","e64515f942266a11386300a6e96a6cde"],["/tags/并查集/index.html","08c6fe6a5cd3d172153b58902136bd6f"],["/tags/最短路/index.html","2dccd5e1d3524a4f3e42d17d90c11010"],["/tags/生成树/index.html","2ac4092664e3a08bdfc83e321321b6d0"],["/tags/贪心/index.html","82e7cb7863dbdb8ce9ce50d354389939"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","40ee829d3259e77606cfb0a48034ebe5"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","74c3f3a593c25cc048c4b43f952287f2"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","a350c3e479138062447ff5607f4bc0ce"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","1d12613239f1c821a5567fb85b732e85"],["/vultr_ssr_vpn_buildup/index.html","bba8737b0ed451e64126014847cfd799"],["/webboard/index.html","7819f1c80a5ad860a7c3a6823d2d12db"]];
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
