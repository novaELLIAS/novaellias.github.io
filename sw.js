/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8ef116e4ca0f06ea5e067f85eb2a9ad8"],["/CF372B-Counting-Rectangles-is-Fun/index.html","ecd038c5ac364eadcf2b3db009a3368a"],["/CF749E-Inversions-After-Shuffle/index.html","3af2b44052a2e2d334fdfaab8e678004"],["/GSS1/index.html","9e0fb97ea1b41de50c88716ee623334e"],["/GSS3/index.html","f7637b5908a34b2981c7d356d5c1011f"],["/GSS4/index.html","10ed424691bd04b5cec481479bf9c93e"],["/GSS5/index.html","a57c07edffb25cc8731f2134ea1a2f71"],["/Luogu-P1654-OSU/index.html","f2db4331db9d579fd4b9074cf2c321d7"],["/Luogu-P2899-Cell-Phone-Network/index.html","2b4e49d3d981fba84ca3896165118f6e"],["/Luogu-P4289/index.html","989ede9c850dd2201caa3bdb8e70e0dd"],["/Nescafe17-Defenders'-Challenge/index.html","87c1f410ddb6271f88749137cb144c43"],["/OPTIMIZE/index.html","130e4321dc0cd455e98956f3066f6fc2"],["/SP2885-WORDRING-World-Rings/index.html","19b59c6ecf83e701b3c638553a145508"],["/UVA1714-Keyboarding/index.html","e052a92ea5872de7027df44b2b40ff0f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","92ef4041478d8ef563c518a6bfe1552e"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","6643b0615fbe2c026b4b18e549ab5621"],["/archives/2017/12/index.html","089f3e19225011d0c97a342d31a60625"],["/archives/2017/index.html","1bfe24ffa069c46f65f99d6ecd13fb06"],["/archives/2018/06/index.html","530a14e7aabaa043a8e86a8e5860b314"],["/archives/2018/07/index.html","3200acba9e07f0b42cd247c379e00a49"],["/archives/2018/08/index.html","5600bf252ebb60c1454b02906da72e88"],["/archives/2018/09/index.html","9ec2a9004078055441145741cc4a8d3b"],["/archives/2018/10/index.html","d231d68d73cdf3a29d366ce0f9b66d66"],["/archives/2018/11/index.html","b5eac193dcb9662af4622e1653eb9325"],["/archives/2018/index.html","30d6c9e653685ddf6b1cb2dbd6b10dce"],["/archives/2018/page/2/index.html","8c08a95625181b72da6c15dd28a5c473"],["/archives/2019/02/index.html","54a1fa80050f87dfa5a1c7130cc88bf0"],["/archives/2019/07/index.html","9ed165d9a9755a0d4ce0219b5416958a"],["/archives/2019/index.html","2dd07f9360798ca380c647a5bf372e72"],["/archives/2020/01/index.html","c021839ce3928c5a663b32ebdc800c55"],["/archives/2020/03/index.html","b2925aabd6f963b3ad96c0648b8c972f"],["/archives/2020/07/index.html","beb60f67ef0b45c3ca36b2067dc6d5b3"],["/archives/2020/08/index.html","79ac48da2350c6f2f0e8f6096107daf4"],["/archives/2020/index.html","1de33d8e067a41bad6f48a33020270e2"],["/archives/index-1.html","a03fb8d97cea3edc59b047f99de73c39"],["/archives/index.html","65b54a27ac9682fe9374182c9a71f93d"],["/archives/page/2/index.html","65b54a27ac9682fe9374182c9a71f93d"],["/archives/page/3/index.html","65b54a27ac9682fe9374182c9a71f93d"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","cd267634378b30fe7c22319bd72c961b"],["/buzzer-define/index.html","947679efa910f001addb64ab61ad4276"],["/categories/HEXO/index.html","12171b015b602a44e7c614b0dde9548f"],["/categories/Olympiad-in-Informatics/index.html","d7b9782248955b8965c6296bf2f9afff"],["/categories/Olympiad-in-Informatics/page/2/index.html","9df74b7fd904a8861bd0161fbf24fd60"],["/categories/Trick/index.html","b00fd134692a82dd2dac4e59f88528d3"],["/categories/VPN/index.html","7cfeb77d87889410f5744c57d03a71af"],["/categories/buzzer/index.html","345c4142d70557549bf434844747ad5d"],["/categories/index.html","d3887af8cbdab0dc3aade271d682139d"],["/categories/memory/index.html","dd6ab79f1df60bfce1a9306a3d4d2822"],["/css/style.css","05f7f87ffaa1716d872136da70785e74"],["/donatepage/index.html","d41974525086aea5a64eebfbc922ef7d"],["/essay/A1/index.html","91be2e4a4d966e01e3069c038ac6b9c6"],["/essay/A2-letter-showing-thanks/index.html","3ffc53550d267ab37d9961b352042b94"],["/essay/A5/index.html","0dbf52518ed538fddc7df2a86b761df6"],["/essay/CH-wangke/index.html","d943fe294c5cd6c45776a006abead886"],["/essay/EN-after-class-activities/index.html","cf304cd29cd84f1d2d0e892436303474"],["/faioj0101-leftist-heap/index.html","83a06689e12446e186cabad1207d1432"],["/faioj1499-qpow-fast/index.html","dd6584c25e71e753062666d7ba666437"],["/friends/index.html","ed7e2dd3ac1f2d0c1c7dada3c33d04ce"],["/gallerypage/index.html","b2885e074087fc197ba37101ea6b8688"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","c2b57f66ca8e37dfc4dc71531848ef55"],["/hiddenlist/index-p.html","52d17078af07f72aca9ad561315a15e9"],["/hiddenlist/index.html","8e84eccaee3201e748963faa14302af6"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","65f38449fd12cb701ac8e30d5708ba1e"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","38954306a50c0270bc2972f92b3e5b9a"],["/luogu-P1967-noip2018-day-1/index.html","fd1d5d15cff51badebe9c7b96233ea5b"],["/luogu-segment-tree/index.html","e8633369aad6e6540b625852961fcb96"],["/ncm_unlock/index.html","7fdd00c7cf508211c611fad755aea28f"],["/obs_internet_class_fishing/index.html","0b6029cc5e2c721cc7551f7909677ac4"],["/oi_history/index.html","b7b383ce7f1775f8ceb0a0cef3de3ce5"],["/page/2/index.html","71b348e5d79ba282636f5f155fabe246"],["/page/3/index.html","36a416b74561236c5e4f9ba0cf6093c8"],["/seg-tree-namespace/index.html","6be136bff393d348fbc2ab8b59efcc9e"],["/shortest-path/index.html","6c178cf0dc76a3169ca55cec36d71ff4"],["/sw-register.js","a8c0e5537e708fed2a72e47e0545447f"],["/tags/DP/index.html","044c122fd37d52236c386ee2a89c5d7a"],["/tags/GSS/index.html","c30b05f3869c88f165e7fb47a84d9f51"],["/tags/HEXO/index.html","d2ff3ef99078a1d08c1b97ebee6a429d"],["/tags/OBS/index.html","ca4f97ef4bdaa472f8e6926626fa4183"],["/tags/STL/index.html","79550da997ebc6b4dc9cc7074b2b32df"],["/tags/Template/index.html","5d40eaed53820eaca6d5acad997a45d8"],["/tags/Trick/index.html","001403b079ed84bee2bfa42fd27319b6"],["/tags/VPN/index.html","4f8ee1d36b07e8d31367a2c873b189c1"],["/tags/VPS/index.html","3f32617171c3260dbb2b11b2a0bb19cb"],["/tags/buzzer/index.html","11ba2bfd808f2ef2fc5c3ad66fef29c8"],["/tags/contest/index.html","d228defd816f89318abe6d372b8ce0d6"],["/tags/index.html","c5dd457c0e6b94ef02d7de2b4685a5c9"],["/tags/segment-tree/index.html","1d6777b54e520ce69df4b2693eea75f4"],["/tags/倍增/index.html","d127c6fef3fc83ab7d0234c27ff32dc7"],["/tags/并查集/index.html","aa74c43d5a5c7bb5b089b41aeceeb109"],["/tags/最短路/index.html","9759f384acb9573de7d24fa4613050dc"],["/tags/生成树/index.html","eda7a2dbd19f508fc934bcb85494a1df"],["/tags/贪心/index.html","f78850009d33050bfc66845e234ffbac"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","03bcf1e1c32322ce945cfc99ff1befd9"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","41bec01d50dae2b21170bf71284dae44"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","91e91aa1922119b3ce1d5baf37b5b084"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","c6eb23cda09c494aa6180c15ca995cc6"],["/vultr_ssr_vpn_buildup/index.html","803daba7626c339f58a8e1589e322bd3"],["/webboard/index.html","458927af0f10a0840da1dedd5c83f09d"]];
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
