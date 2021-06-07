/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fb38016febfbdc51e193b3367600ac95"],["/BeijingBikestores/brand/index.html","0e0e552739fd1c95f17b092ef2d76bed"],["/BeijingBikestores/location/index.html","74af1c3664dab49524bb92283dd1180a"],["/CF372B-Counting-Rectangles-is-Fun/index.html","49709abac2fb8f18bf849949b29c126b"],["/CF749E-Inversions-After-Shuffle/index.html","7a37a6c602ee917be5afc96efe7db7f1"],["/DSaAi/index.html","8830a24e88bb4c1bf0b837ad2f572946"],["/GSS1/index.html","311dc9a75b43343c512b890ce4fd8213"],["/GSS3/index.html","a6065134a64335113e6139d4f061341f"],["/GSS4/index.html","a58b204031a2470dc0955a409c7dc111"],["/GSS5/index.html","ea9b0cdaab68572dca0931341443739e"],["/HYAsstSTM32Progress/index.html","6fb841e236c92b70263cadc9eb444316"],["/HongYanAsstHard/index.html","decb858ba5384aab607b9a9803211666"],["/Luogu-P1654-OSU/index.html","0088400091e77b1a9ccb05c40129a93e"],["/Luogu-P2899-Cell-Phone-Network/index.html","271e5d48dfa58ad72748e1e139ecc21b"],["/Luogu-P4289/index.html","936791f89967072b1b43f1a2daead1b1"],["/Nescafe17-Defenders'-Challenge/index.html","55e7721e846c984a96ca314892682735"],["/OPTIMIZE/index.html","7caba5eb223f487e494e63b8f094658f"],["/SP2885-WORDRING-World-Rings/index.html","a5caf46559f36ff56f38f4fdd6181c00"],["/UVA1714-Keyboarding/index.html","71256788e8626636e50a7f273fb59d9f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","2c66cf16afe3dd56e5a3c835a970f0c8"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","a3102644cdda696c5c670879778ea9de"],["/archives/2017/12/index.html","6b354d74dbb78bdbea2391d0996774cc"],["/archives/2017/index.html","d4c29529c1d4a0ffd81e41786a702a70"],["/archives/2018/06/index.html","c88ea45c81bb464e64594a981b7b6f8c"],["/archives/2018/07/index.html","8caca83cff6908cdbdfacbf86c5e12c5"],["/archives/2018/08/index.html","b1d05ec4e1537a3ee487cdb997757cbe"],["/archives/2018/09/index.html","87b02d26899db9a5b97c0b95e746d452"],["/archives/2018/10/index.html","a46ad9af0ec1caf2795430d5d8d468a9"],["/archives/2018/11/index.html","8c03f5e02f1b13fc36aa8982b45c9102"],["/archives/2018/index.html","43745315e3d4bfbd063dd9b3895704cf"],["/archives/2018/page/2/index.html","ec6167ab9ef53e26b0c08440dbe28ccc"],["/archives/2019/02/index.html","b0e7dd0b31ca732820e2f26ae20d33de"],["/archives/2019/07/index.html","00754a00494ba4d932c00ea5e589e1f5"],["/archives/2019/index.html","f004e86875fb5715b7c3d7ffb10d1322"],["/archives/2020/01/index.html","a3ac834c7babe28218fb1186eb39944a"],["/archives/2020/03/index.html","d466c9d311f6257d2ca1a86965ada859"],["/archives/2020/07/index.html","36e90c3d67e9e10e962a86c08b89cd93"],["/archives/2020/08/index.html","5fb949b7d9c543d1d741c559a997235f"],["/archives/2020/11/index.html","ce0e5ccb55c1d77c588f84fe17edc50c"],["/archives/2020/index.html","c89823f72beb660a91c74e3e78268291"],["/archives/2021/01/index.html","f384c7e99337ebc7a49b56ff6467f55d"],["/archives/2021/02/index.html","787bddb41997db994547ed4c9639c57c"],["/archives/2021/index.html","2f6e7f8f985fa17eaa6fae86280aa1f2"],["/archives/index-1.html","48e201b46cc5f29d67f5a37e543c44e7"],["/archives/index.html","2f9bffec691203e4393f4d4a3e998612"],["/archives/page/2/index.html","263fc6f157ad645aa15897e4fb2a0cd1"],["/archives/page/3/index.html","263fc6f157ad645aa15897e4fb2a0cd1"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","dd75d6003e65d5ac02a6cee35a95b9ad"],["/buzzer-define/index.html","db37b975a94b822fe185607d50bcc507"],["/categories/HEXO/index.html","829aace8fa7d2724d1d6472190345694"],["/categories/Olympiad-in-Informatics/index.html","387c1dcac5f574fd1541ab18274aebb1"],["/categories/Olympiad-in-Informatics/page/2/index.html","2c3d8955d4458403aca06854a9f04dc1"],["/categories/Trick/index.html","5375e1b03cf36c65815c80478a96afe3"],["/categories/VPN/index.html","ddef1c5d68eb2b4383bc90a794f3c7ca"],["/categories/buzzer/index.html","fa81b877082c16244c5796c6a4d598f6"],["/categories/index.html","3287033fba1000419604e0bf8f37282b"],["/categories/memory/index.html","fb241182d9c21b43e8ce16c587168f09"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","b65af0cbdbdb262a8b71e9b5c9e140c4"],["/essay/A1/index.html","0fa253556505d78e7e96db89b39534f4"],["/essay/A2-letter-showing-thanks/index.html","b175e90a1f60597c02fa64182a19c72f"],["/essay/A5/index.html","0ca10aba90a2b15fae34c40738373cdf"],["/essay/CH-wangke/index.html","eb78a7fa91c509956f2a159a6e531d07"],["/essay/EN-after-class-activities/index.html","eade1dbad77be98b807852e0264930ee"],["/essay/FrenchRevolution/index.html","b05f5487502d98dbf1e00a7295e05dd9"],["/faioj0101-leftist-heap/index.html","c4398000c41bd3625270efdab67910fb"],["/faioj1499-qpow-fast/index.html","573ea01c1fab42663d6e133688ce09ed"],["/friends/index.html","3d1d95a50c56aa2dc1aa06859c1d426f"],["/gallerypage/index.html","ace82fadf7c3d675544879a2936dcdbd"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","5f9527e0e95b0f21957d9bbb05cbda9c"],["/hiddenlist/index-p.html","f8bc73c504ac5bde7aaacd0f55725375"],["/hiddenlist/index.html","3cc93da0777d2bacc68c1a3e721287dc"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","7eb798cd0d2ef17e249b621ac69b80a3"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","cb3c3b57e02e781db12dbe37594cb01a"],["/luogu-P1967-noip2018-day-1/index.html","7f672d26dca7509e1e2a0f241b095259"],["/luogu-segment-tree/index.html","642236ce98fd1cdd5358c5b1d5a67f40"],["/ncm_unlock/index.html","df6d1955119fd8dc732b2e83f0d02a2a"],["/obs_internet_class_fishing/index.html","1745cdca81c5e7e5540d4b9ec85f9156"],["/oi_history/index.html","474e0590ad46fdc9d2a68625baf30140"],["/page/2/index.html","16214854b085e336b913ce30d2e79a2d"],["/page/3/index.html","0d3b2302ac7e28108640d23e24a3e561"],["/recall-oi-20200828/index.html","2985e354894a45d7099968468641fb27"],["/seg-tree-namespace/index.html","d8906fe311d9d790f8c595218a359146"],["/shortest-path/index.html","e733bfaf57887adcd795010030e4de51"],["/sw-register.js","9219e12f65bcf75a1b7239ac95085a71"],["/tags/DP/index.html","a0861459e317ed383f62760cdd0f5bcb"],["/tags/GSS/index.html","63e2d6f8988e76638dacf591e212610c"],["/tags/HEXO/index.html","6790682654ff2d1735d81c434c132199"],["/tags/OBS/index.html","7c18c9c4970f429ca78bf8aa5f628eef"],["/tags/STL/index.html","330dfdec8ea499aff09546c3a695ae6c"],["/tags/Template/index.html","f77841259fbec529420d684e93b15159"],["/tags/Trick/index.html","f26df224f1c376a51d126f8cc6a16210"],["/tags/VPN/index.html","d8c9d26c2650d82faba5dc1173a5c05d"],["/tags/VPS/index.html","952b416278dc04c6748ce368a419d79f"],["/tags/buzzer/index.html","8d86ffb81d52cb973106563f2161490b"],["/tags/contest/index.html","0b39af0d054d182899b6350780a93ed7"],["/tags/index.html","3eb4d21d838cc9644fa37a2f0baacf2c"],["/tags/segment-tree/index.html","e9cec270fac988f977126b39fb87c63c"],["/tags/倍增/index.html","57c1cb588acc9aff430dedd0f797500b"],["/tags/并查集/index.html","9b1a31874ae3deba9ea6acacde3f3d96"],["/tags/最短路/index.html","20e452b8b162655a6608f9822d956cfa"],["/tags/生成树/index.html","aa91bdbe10802e4d746d5923d1dc5c69"],["/tags/贪心/index.html","fb60e93e681865a969f814d6e878782f"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","62d3e90972214d1a4247ca39c223cb47"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","beb1c463169fb66164ee960100896169"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","dc6409fe1e15023296ca5066ed8aa454"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","19c9ce4dcaeba8ac2bce65999caabe9a"],["/vultr_ssr_vpn_buildup/index.html","b0c7ca885eb776d582d0bceaabf4e561"],["/webboard/index.html","ad8e3fb54c60ccb9611e7ef25509d72f"]];
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
