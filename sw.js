/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fb38016febfbdc51e193b3367600ac95"],["/CF372B-Counting-Rectangles-is-Fun/index.html","49709abac2fb8f18bf849949b29c126b"],["/CF749E-Inversions-After-Shuffle/index.html","7a37a6c602ee917be5afc96efe7db7f1"],["/DSaAi/index.html","cb62ffb35b91e4c9c506d7f7b4240846"],["/GSS1/index.html","b84449068479d9c8b45f7fbbda07f237"],["/GSS3/index.html","d2f54ff194d30406a6645aff2f3778f4"],["/GSS4/index.html","6c9dce474744a0d8e2103eb8db6b504b"],["/GSS5/index.html","ea2a50a9c6f0eeb08f2fa55cc013e0cf"],["/HYAsstSTM32Progress/index.html","4b493b02ede194e5162ea8bce44f6ecd"],["/HongYanAsstHard/index.html","10fdbae51209c60563d57870f391fcbd"],["/Luogu-P1654-OSU/index.html","0088400091e77b1a9ccb05c40129a93e"],["/Luogu-P2899-Cell-Phone-Network/index.html","271e5d48dfa58ad72748e1e139ecc21b"],["/Luogu-P4289/index.html","936791f89967072b1b43f1a2daead1b1"],["/Nescafe17-Defenders'-Challenge/index.html","55e7721e846c984a96ca314892682735"],["/OPTIMIZE/index.html","7caba5eb223f487e494e63b8f094658f"],["/SP2885-WORDRING-World-Rings/index.html","a5caf46559f36ff56f38f4fdd6181c00"],["/UVA1714-Keyboarding/index.html","71256788e8626636e50a7f273fb59d9f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","2c66cf16afe3dd56e5a3c835a970f0c8"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","fe02fb5bd8c0f5df722398cefec38c9d"],["/archives/2017/12/index.html","02e799bbd33ca1dcb0e2458244b0a0ef"],["/archives/2017/index.html","0e001c3a293c042ced74568b18a5433e"],["/archives/2018/06/index.html","cc18819e72af9c15295577134c0e0b68"],["/archives/2018/07/index.html","6e06f82d39fa4690edb6a19cebd2ddfb"],["/archives/2018/08/index.html","b9244ce9cf196b3079b38d3b6fdf2439"],["/archives/2018/09/index.html","9e501b528714ad03eeb7f0586a19d66b"],["/archives/2018/10/index.html","3b8920b5c22c2831b2bd3fc2b164bdfb"],["/archives/2018/11/index.html","a30194e15a3ae2b8f348d652f44ae74b"],["/archives/2018/index.html","accb522ef1269957de64efc23bdcdf7d"],["/archives/2018/page/2/index.html","6a71cb6ceed9d26371a8e580f16d3482"],["/archives/2019/02/index.html","8f3adbf01386db90d64bacccc4f3aa63"],["/archives/2019/07/index.html","79001d838aaa45b259d53d350c15b536"],["/archives/2019/index.html","c392ca5e0b42becb025b1af224faf2b4"],["/archives/2020/01/index.html","e44716d258a801675929ac1a7b92923c"],["/archives/2020/03/index.html","d3a0e3f999ccf3e097045d116221c75c"],["/archives/2020/07/index.html","78b27d8cd5664d27c6c74f80c28294a7"],["/archives/2020/08/index.html","c223e66a916f94c8d91153320dedfa8f"],["/archives/2020/11/index.html","d08b2896b571904b0e586508bc41db2e"],["/archives/2020/index.html","8a88c993758ec11621809c5e2e3ee43f"],["/archives/2021/01/index.html","0797dd561c090de93cdba68ffc61d5cb"],["/archives/2021/02/index.html","37cbe12ef9246c4c5751ca94a2df2194"],["/archives/2021/index.html","80966d115ac6df2b70f8620923bda0b7"],["/archives/index-1.html","48e201b46cc5f29d67f5a37e543c44e7"],["/archives/index.html","36f740c92656b8da3e5022d2ca3317c2"],["/archives/page/2/index.html","e9d1b1c9d5a4a24185706051d99426fe"],["/archives/page/3/index.html","e9d1b1c9d5a4a24185706051d99426fe"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","dd75d6003e65d5ac02a6cee35a95b9ad"],["/buzzer-define/index.html","db37b975a94b822fe185607d50bcc507"],["/categories/HEXO/index.html","f9c4c1c454c55a7ccdee129bc1cddf89"],["/categories/Olympiad-in-Informatics/index.html","e9b49b1ef73d9fb3938db8c3320df0b2"],["/categories/Olympiad-in-Informatics/page/2/index.html","61a676c1453eec137d521e0b885dcb03"],["/categories/Trick/index.html","0db3a1d2e02b266601c973b9a2fa323a"],["/categories/VPN/index.html","0aa7265027a351274a04333b40e17c18"],["/categories/buzzer/index.html","3be557c860801b2fb166460d59e476de"],["/categories/index.html","3287033fba1000419604e0bf8f37282b"],["/categories/memory/index.html","3efbf24861a9d87056bec9057ec187ff"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","b65af0cbdbdb262a8b71e9b5c9e140c4"],["/essay/A1/index.html","0fa253556505d78e7e96db89b39534f4"],["/essay/A2-letter-showing-thanks/index.html","b175e90a1f60597c02fa64182a19c72f"],["/essay/A5/index.html","0ca10aba90a2b15fae34c40738373cdf"],["/essay/CH-wangke/index.html","eb78a7fa91c509956f2a159a6e531d07"],["/essay/EN-after-class-activities/index.html","eade1dbad77be98b807852e0264930ee"],["/essay/FrenchRevolution/index.html","b05f5487502d98dbf1e00a7295e05dd9"],["/faioj0101-leftist-heap/index.html","c4398000c41bd3625270efdab67910fb"],["/faioj1499-qpow-fast/index.html","573ea01c1fab42663d6e133688ce09ed"],["/friends/index.html","3d1d95a50c56aa2dc1aa06859c1d426f"],["/gallerypage/index.html","d91fcbefdb49b1d391add55606b5e16c"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","5f9527e0e95b0f21957d9bbb05cbda9c"],["/hiddenlist/index-p.html","f8bc73c504ac5bde7aaacd0f55725375"],["/hiddenlist/index.html","3cc93da0777d2bacc68c1a3e721287dc"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","5b8b51f4f381a4c519681f8b21422c13"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","cb3c3b57e02e781db12dbe37594cb01a"],["/luogu-P1967-noip2018-day-1/index.html","7f672d26dca7509e1e2a0f241b095259"],["/luogu-segment-tree/index.html","642236ce98fd1cdd5358c5b1d5a67f40"],["/ncm_unlock/index.html","df6d1955119fd8dc732b2e83f0d02a2a"],["/obs_internet_class_fishing/index.html","1745cdca81c5e7e5540d4b9ec85f9156"],["/oi_history/index.html","474e0590ad46fdc9d2a68625baf30140"],["/page/2/index.html","5bd395a537e0e7f8e72c15a7f163402b"],["/page/3/index.html","97498d4794aaaecf86042e3f63688d3f"],["/recall-oi-20200828/index.html","2985e354894a45d7099968468641fb27"],["/seg-tree-namespace/index.html","d8906fe311d9d790f8c595218a359146"],["/shortest-path/index.html","e733bfaf57887adcd795010030e4de51"],["/sw-register.js","7b5e649f683938def188262b2cf0b75e"],["/tags/DP/index.html","f4548ad861fb881bad900114df5ef458"],["/tags/GSS/index.html","369918862fa4e0a44008a46a816dbe79"],["/tags/HEXO/index.html","c36ab27158ab52a3b486c2af56393187"],["/tags/OBS/index.html","387284d356f09a10d85d1e61198b91a4"],["/tags/STL/index.html","e70b9500bc9403a0a067e24d97f04412"],["/tags/Template/index.html","bba0e790047cf665368d86176c043bc8"],["/tags/Trick/index.html","9015ea7850984bac748f1541e568dc50"],["/tags/VPN/index.html","5a52da22e367f6bd40f26ca24e59eacb"],["/tags/VPS/index.html","ddfdbfb6ab90c9b83026affa644cec3d"],["/tags/buzzer/index.html","8629d0566de91fef3431d7c5e9ec55fb"],["/tags/contest/index.html","388efb22f37da7ac0ed78c90f05b2e92"],["/tags/index.html","3eb4d21d838cc9644fa37a2f0baacf2c"],["/tags/segment-tree/index.html","b9b9739344717f542950d4a5e39166dc"],["/tags/倍增/index.html","99cb4bbe7b9c0b7aa9d3c79432f59759"],["/tags/并查集/index.html","bd4ff87ae6bc212c872e09d11bc1c394"],["/tags/最短路/index.html","e08e7eccaccd77cf312eaa2b41e33906"],["/tags/生成树/index.html","e6ce9433df0f137da84eb70b94e098f5"],["/tags/贪心/index.html","7a18e37b464ccbb825d2a206cb4c0bff"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","62d3e90972214d1a4247ca39c223cb47"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","beb1c463169fb66164ee960100896169"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","dc6409fe1e15023296ca5066ed8aa454"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","19c9ce4dcaeba8ac2bce65999caabe9a"],["/vultr_ssr_vpn_buildup/index.html","b0c7ca885eb776d582d0bceaabf4e561"],["/webboard/index.html","ad8e3fb54c60ccb9611e7ef25509d72f"]];
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
