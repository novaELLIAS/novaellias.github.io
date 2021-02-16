/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","fb38016febfbdc51e193b3367600ac95"],["/CF372B-Counting-Rectangles-is-Fun/index.html","49709abac2fb8f18bf849949b29c126b"],["/CF749E-Inversions-After-Shuffle/index.html","7a37a6c602ee917be5afc96efe7db7f1"],["/DSaAi/index.html","f5c6aea99918b0901684c9f9f9d9b755"],["/GSS1/index.html","311dc9a75b43343c512b890ce4fd8213"],["/GSS3/index.html","a6065134a64335113e6139d4f061341f"],["/GSS4/index.html","a58b204031a2470dc0955a409c7dc111"],["/GSS5/index.html","ea9b0cdaab68572dca0931341443739e"],["/HYAsstSTM32Progress/index.html","3b9d617abd3357f19a8af8a2c18ac0dc"],["/HongYanAsstHard/index.html","10fdbae51209c60563d57870f391fcbd"],["/Luogu-P1654-OSU/index.html","0088400091e77b1a9ccb05c40129a93e"],["/Luogu-P2899-Cell-Phone-Network/index.html","271e5d48dfa58ad72748e1e139ecc21b"],["/Luogu-P4289/index.html","936791f89967072b1b43f1a2daead1b1"],["/Nescafe17-Defenders'-Challenge/index.html","55e7721e846c984a96ca314892682735"],["/OPTIMIZE/index.html","7caba5eb223f487e494e63b8f094658f"],["/SP2885-WORDRING-World-Rings/index.html","a5caf46559f36ff56f38f4fdd6181c00"],["/UVA1714-Keyboarding/index.html","71256788e8626636e50a7f273fb59d9f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","d1c36e96014d430bd22ad59aa9a0c473"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","111d32bebf3eeb5442925374ef126b90"],["/archives/2017/12/index.html","92350dc68a05680c4970b1d7daa3703d"],["/archives/2017/index.html","7acba867ba48eb1c7b4ac357bac7d7a0"],["/archives/2018/06/index.html","ed262262ca52b0590eb291ed9be5690b"],["/archives/2018/07/index.html","6d9c1731b55c8111601ca9a841238dd6"],["/archives/2018/08/index.html","0fe78ceaeab5a8764489e36f03b55766"],["/archives/2018/09/index.html","94796fa234e955738cf7bb0292612b79"],["/archives/2018/10/index.html","ca2b35ebd6d15a15123b0f45c2122ee1"],["/archives/2018/11/index.html","7cac0c7cbcaee1359a76c9b4ead8e487"],["/archives/2018/index.html","78aee369fb5864345b144e44a41c06d2"],["/archives/2018/page/2/index.html","b835a031469df209f876131735d5f84e"],["/archives/2019/02/index.html","460d556e7a8c9f31bef8fd1816a62a5b"],["/archives/2019/07/index.html","b89e8bbdede68fb890fc8f9f42137d8f"],["/archives/2019/index.html","abe5cc580d1afaf62615fbc1726a0771"],["/archives/2020/01/index.html","8f9e0ad7329ea11e8490e26c3d4ea974"],["/archives/2020/03/index.html","1c931a3076f1591eca67c612525b3560"],["/archives/2020/07/index.html","2f0f37938e34342bbd0780fa79ede116"],["/archives/2020/08/index.html","a5da40a0885fb2e38897a79752002b99"],["/archives/2020/11/index.html","72d446c818ef7dc3f9207dc941cef713"],["/archives/2020/index.html","08598832bb0e00973f408c17fb5be6fe"],["/archives/2021/01/index.html","8dfbf016010948f385614226fba71c87"],["/archives/2021/02/index.html","2f7e2a593baf06514fe345380ac21b7a"],["/archives/2021/index.html","44c7470ab50fb1740b67dff089c17932"],["/archives/index-1.html","48e201b46cc5f29d67f5a37e543c44e7"],["/archives/index.html","38c575bc8e5f1e4f04b3083b414c1230"],["/archives/page/2/index.html","9569a601e5e5b7c8250317aefcae0812"],["/archives/page/3/index.html","9569a601e5e5b7c8250317aefcae0812"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","dd75d6003e65d5ac02a6cee35a95b9ad"],["/buzzer-define/index.html","db37b975a94b822fe185607d50bcc507"],["/categories/HEXO/index.html","e512faf283c34ba97c411ebcedf9e822"],["/categories/Olympiad-in-Informatics/index.html","574a660cc8f40d76b35a1bfd61f910a1"],["/categories/Olympiad-in-Informatics/page/2/index.html","09f91fcd0cfe9271b3e11bc8f8d8128a"],["/categories/Trick/index.html","73b322a674bf0e17666b10f98f380e18"],["/categories/VPN/index.html","5a2cdb06534a8fddb71ce0e60684afc2"],["/categories/buzzer/index.html","2ee66138585dfdde6d47953fdfd98eee"],["/categories/index.html","3287033fba1000419604e0bf8f37282b"],["/categories/memory/index.html","2c112a544d32c8a9a8e346b8f409b706"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","b65af0cbdbdb262a8b71e9b5c9e140c4"],["/essay/A1/index.html","0fa253556505d78e7e96db89b39534f4"],["/essay/A2-letter-showing-thanks/index.html","b175e90a1f60597c02fa64182a19c72f"],["/essay/A5/index.html","0ca10aba90a2b15fae34c40738373cdf"],["/essay/CH-wangke/index.html","eb78a7fa91c509956f2a159a6e531d07"],["/essay/EN-after-class-activities/index.html","eade1dbad77be98b807852e0264930ee"],["/essay/FrenchRevolution/index.html","b05f5487502d98dbf1e00a7295e05dd9"],["/faioj0101-leftist-heap/index.html","c4398000c41bd3625270efdab67910fb"],["/faioj1499-qpow-fast/index.html","573ea01c1fab42663d6e133688ce09ed"],["/friends/index.html","3d1d95a50c56aa2dc1aa06859c1d426f"],["/gallerypage/index.html","ae9d9c88c8895617b2842fffdc22f3b2"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","5f9527e0e95b0f21957d9bbb05cbda9c"],["/hiddenlist/index-p.html","f8bc73c504ac5bde7aaacd0f55725375"],["/hiddenlist/index.html","3cc93da0777d2bacc68c1a3e721287dc"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","c1bb4a95364e845832435e7dc249b3db"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","cb3c3b57e02e781db12dbe37594cb01a"],["/luogu-P1967-noip2018-day-1/index.html","7f672d26dca7509e1e2a0f241b095259"],["/luogu-segment-tree/index.html","642236ce98fd1cdd5358c5b1d5a67f40"],["/ncm_unlock/index.html","df6d1955119fd8dc732b2e83f0d02a2a"],["/obs_internet_class_fishing/index.html","1745cdca81c5e7e5540d4b9ec85f9156"],["/oi_history/index.html","474e0590ad46fdc9d2a68625baf30140"],["/page/2/index.html","005225850c63ccd531c96f9e916770ec"],["/page/3/index.html","aa481cba06e0fe9327849d6b41252328"],["/recall-oi-20200828/index.html","2985e354894a45d7099968468641fb27"],["/seg-tree-namespace/index.html","d8906fe311d9d790f8c595218a359146"],["/shortest-path/index.html","e733bfaf57887adcd795010030e4de51"],["/sw-register.js","ad34100a9d9b4aef00d9e82dd78b6005"],["/tags/DP/index.html","03f070a72adde2921ae95b0ab82e24ca"],["/tags/GSS/index.html","ec5ab81c8805263dc5eb5078863ac581"],["/tags/HEXO/index.html","ec0bd6ba43ef0e7e04e9aa38977cf70a"],["/tags/OBS/index.html","d9f313b50f28ed650d9481ac50891f8e"],["/tags/STL/index.html","6063fc965638b40a73d6f53540c5ee73"],["/tags/Template/index.html","7bb071fbc5865f64aa893f736b329eed"],["/tags/Trick/index.html","85a0e23a61cf9f2284f7b1d29420da6f"],["/tags/VPN/index.html","51d17f63ec6c17eea4d23660e842cf04"],["/tags/VPS/index.html","9c96daa73f4cb37217a690753c44a08d"],["/tags/buzzer/index.html","37f4ad6b2d4db9236620f172fd50ddb7"],["/tags/contest/index.html","745495ca26085e42f2bf4ee1d44a1e6a"],["/tags/index.html","3eb4d21d838cc9644fa37a2f0baacf2c"],["/tags/segment-tree/index.html","25e97cb8fb46f6fe010969a966f08b9e"],["/tags/倍增/index.html","8019a9c562a744c49222ed2ce7386abb"],["/tags/并查集/index.html","5625be5a5809a5f1e5b01a9f26dd58fa"],["/tags/最短路/index.html","6b6e1b3ba759403c83b72e9cb577b79c"],["/tags/生成树/index.html","072081737a0d33d84785481a5d0c1fbb"],["/tags/贪心/index.html","1cde9aaa1548caed067f8a4c3edfb9aa"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","62d3e90972214d1a4247ca39c223cb47"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","beb1c463169fb66164ee960100896169"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","dc6409fe1e15023296ca5066ed8aa454"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","19c9ce4dcaeba8ac2bce65999caabe9a"],["/vultr_ssr_vpn_buildup/index.html","b0c7ca885eb776d582d0bceaabf4e561"],["/webboard/index.html","ad8e3fb54c60ccb9611e7ef25509d72f"]];
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
