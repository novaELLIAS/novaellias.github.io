/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b0ab4b15295eee5b44316da5981b109d"],["/CF372B-Counting-Rectangles-is-Fun/index.html","742e8770b021699b3b40fdea77b8c372"],["/CF749E-Inversions-After-Shuffle/index.html","a4d3eddd23785934fdd66be6f34a6fa1"],["/GSS1/index.html","06c4e5b114248542ccc957e16b756878"],["/GSS3/index.html","6b5e50a2a5c0bef0dc8db166df23ded4"],["/GSS4/index.html","7d84635c0e3e92cc708829a81e4e095f"],["/GSS5/index.html","133e6301647906e758e8b88598872360"],["/HongYanAsstHard/index.html","7188feac717e57117f0d6b427975aaa5"],["/Luogu-P1654-OSU/index.html","a0fa69b69b8480d975b91b56ef3a753c"],["/Luogu-P2899-Cell-Phone-Network/index.html","851b11eb4a5e52801ac106c6597726b1"],["/Luogu-P4289/index.html","d2d39bcc395b9c9e37f42db2d9cc51b8"],["/Nescafe17-Defenders'-Challenge/index.html","e80480f900b9ed397dc08c00f7f7d760"],["/OPTIMIZE/index.html","d3840a6d807857adf45157a0f3beea60"],["/SP2885-WORDRING-World-Rings/index.html","67d2fecf3673ebca2ede6a517bd76a03"],["/UVA1714-Keyboarding/index.html","e088574f9a601bac66d24f5ffd533183"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","d305848910de63d5f8819ca713e056fb"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","788366b5ef566f2afa5a18a0666c299f"],["/archives/2017/12/index.html","83546c2a50b3ed2b604544ffabf2735c"],["/archives/2017/index.html","8c18744ff453dbf54db01c29e0fefc7f"],["/archives/2018/06/index.html","3534192bf587581e55dfb2e3db4f6aba"],["/archives/2018/07/index.html","0e69bdebf1c73cc421462cc4a9888023"],["/archives/2018/08/index.html","82b0fb9dd7b62f93aaecaf37825920e2"],["/archives/2018/09/index.html","cee1b339b293669353f75c2e8554899d"],["/archives/2018/10/index.html","3d4fc0311926e1c35edca22f56a6dfe9"],["/archives/2018/11/index.html","8845b67736ad2888f43ce9561c007232"],["/archives/2018/index.html","75a07f7c3e60ebadd663e25c96fbd18a"],["/archives/2018/page/2/index.html","313dcaefc136d7181ed9bad8e8017cf6"],["/archives/2019/02/index.html","fa37c4271460e3baa85d4e800cba9cfd"],["/archives/2019/07/index.html","2c5ce50b9d31c11914dc03e823c69d32"],["/archives/2019/index.html","474da7bee5900097675d0c967f4ec813"],["/archives/2020/01/index.html","41a92cfecbac969571b29fa6518b9d54"],["/archives/2020/03/index.html","1a92534320580b02ae16810a7ec417c9"],["/archives/2020/07/index.html","a488e7b58e6a3d6ac1072a011ef531f5"],["/archives/2020/08/index.html","9ea7285a079459b1a1eec8a60459136e"],["/archives/2020/11/index.html","eb549db4ab6cc642d893e0f76564de65"],["/archives/2020/index.html","000b50c9ca3e954428394390b1f001ee"],["/archives/index-1.html","f3d40abd66b4208062728eca8e584626"],["/archives/index.html","9c718f96316a5990c0f547011cb1fabf"],["/archives/page/2/index.html","329c1333c9e56e35fc45b25b60459f6e"],["/archives/page/3/index.html","329c1333c9e56e35fc45b25b60459f6e"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","d283e74d991b462b09b23bee07fbc50c"],["/buzzer-define/index.html","0f157307a0d3a0d8cc6484d86e164017"],["/categories/HEXO/index.html","ef0fd3679c738f68c7e435b447a499f7"],["/categories/Olympiad-in-Informatics/index.html","62bf551e39e792e95aab6d36641731c2"],["/categories/Olympiad-in-Informatics/page/2/index.html","bc6ecac2ff0dbcd59a786fee0d319760"],["/categories/Trick/index.html","9f9c8086d4a146ed1a3ad2643cb7b5a0"],["/categories/VPN/index.html","83e55d545499e181b46c72589fdb88e3"],["/categories/buzzer/index.html","2cf58a7bdcf712e89d2cf5eaa14ab656"],["/categories/index.html","dfe9eef829eb1c8f84804c6853f0cd93"],["/categories/memory/index.html","7d861ca2ac9960be801c03ddbc4e29d7"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","7ff7569db469f6ecc137af2f6c772c6e"],["/essay/A1/index.html","7a45f351cade540f1e82cf31c97312d4"],["/essay/A2-letter-showing-thanks/index.html","048794c2d0f9d744b6f439a1cf66ede1"],["/essay/A5/index.html","4260e2227910d68baf69272ec1bca5eb"],["/essay/CH-wangke/index.html","93696a007b75c82b37ad171d515afb37"],["/essay/EN-after-class-activities/index.html","648c96a5e70dcce42c60a0d355a9bd57"],["/essay/FrenchRevolution/index.html","4e132c2a458d00d610ae81d62df78a96"],["/faioj0101-leftist-heap/index.html","05250001157f47d49240c882b13df53c"],["/faioj1499-qpow-fast/index.html","50a2904ec4b2a7cad2f97c1179489db2"],["/friends/index.html","02dbc14a5cfd9e98095cdf9e6eedf336"],["/gallerypage/index.html","19e3f2a02d30c84861d96056add57d1b"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","bde1da70634c9e7f273740bff53e1d3c"],["/hiddenlist/index-p.html","388db437fc2aa115a9a8ccf77248fffd"],["/hiddenlist/index.html","7a818da5baceffc58791e7bf3cc356e3"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","67622426a2d2aa02abbe9a933f5c011a"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","7bd814ae4db874f65a31e3bc6a3259c3"],["/luogu-P1967-noip2018-day-1/index.html","554ce9c246d813a5847ceb127cece9df"],["/luogu-segment-tree/index.html","18521e9c60cca28fca054f98089057a7"],["/ncm_unlock/index.html","13d5eb28e5ee232236d42f64fefb08f6"],["/obs_internet_class_fishing/index.html","92c0a2771d44801e6e0d1abb1bf07a23"],["/oi_history/index.html","d8113d7bada27607f41e5ebee70ac01d"],["/page/2/index.html","6f284b4e4ec7b122bdd60fbabf1adea3"],["/page/3/index.html","ccc811e2dc6f3a62df76057af0713745"],["/recall-oi-20200828/index.html","0c2ec5144e0e64169ac9fb46b00961ea"],["/seg-tree-namespace/index.html","a38aaa1db7b7379fc66a27db56298bff"],["/shortest-path/index.html","1c19339f37518bd0086c89fbb502f2de"],["/sw-register.js","d7a28c79ab715d4a45d1de63a27abd98"],["/tags/DP/index.html","9e9b1b7f7b1c78a5caa61fd30ce665c5"],["/tags/GSS/index.html","d591bd3f6f73d0a9cc1824366004d2cc"],["/tags/HEXO/index.html","42b2f74e688166c40c139c0a0b10d551"],["/tags/OBS/index.html","6a3af6123045fbd291824d5137c6fe31"],["/tags/STL/index.html","189ef4e56436ac6fa0893d5b5d5c140e"],["/tags/Template/index.html","560d486d0b2c1c32474147eb19ed15ba"],["/tags/Trick/index.html","f37cab68c6c5a0eca08a4e6a389fe6ec"],["/tags/VPN/index.html","a5e6b99ae98c4a65eb1c81038d4060b9"],["/tags/VPS/index.html","d356c61098c77df90a43f074b11cc770"],["/tags/buzzer/index.html","a4fc457ab88117f5bad8e84c7929326b"],["/tags/contest/index.html","4b07c8192e8728ce132466d504c4deef"],["/tags/index.html","535815b6367c5eb697e9b563c8101bf7"],["/tags/segment-tree/index.html","3ef239356a694aa82350b2f85fd4934f"],["/tags/倍增/index.html","c9e97857de205ff3c190d72293e06433"],["/tags/并查集/index.html","fd9075756bac51cc2eaf51bbf24713de"],["/tags/最短路/index.html","6333fcf2719eb63ec4d7ca2cff7080f4"],["/tags/生成树/index.html","8a50cfde24d37a0264c29091d02d4e9b"],["/tags/贪心/index.html","437352f20146c82ab01462e7c53637e0"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","40ee829d3259e77606cfb0a48034ebe5"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","74c3f3a593c25cc048c4b43f952287f2"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","a350c3e479138062447ff5607f4bc0ce"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","1d12613239f1c821a5567fb85b732e85"],["/vultr_ssr_vpn_buildup/index.html","bba8737b0ed451e64126014847cfd799"],["/webboard/index.html","7819f1c80a5ad860a7c3a6823d2d12db"]];
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
