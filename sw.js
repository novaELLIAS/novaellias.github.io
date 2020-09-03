/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ccc99e636fe4d996bd770f8892f09e06"],["/CF372B-Counting-Rectangles-is-Fun/index.html","347dc27ecf21a01d4c614a6c32caa3e3"],["/CF749E-Inversions-After-Shuffle/index.html","98a0a9925c62cda82ea476678906493c"],["/GSS1/index.html","d4d0a8d1d849372248a1dce251f25045"],["/GSS3/index.html","69acd269c03bd70e0c694c41d716209b"],["/GSS4/index.html","75c18ec0ce61dc86adfbada3d7c571cc"],["/GSS5/index.html","6aee9cbe3c0ae2792f83227fc916ed24"],["/Luogu-P1654-OSU/index.html","2c9ffbc33f2923e63d30d70edcfa12f6"],["/Luogu-P2899-Cell-Phone-Network/index.html","6ccc2ed3bc8a6054440ab8bc2bf47514"],["/Luogu-P4289/index.html","034cd944492fd61877b2cbf0cbec3562"],["/Nescafe17-Defenders'-Challenge/index.html","c8f84072afc09b7dd9c782d211636c2b"],["/OPTIMIZE/index.html","9a5c7515efb45525ff8b8a98cc494204"],["/SP2885-WORDRING-World-Rings/index.html","ba5eb7d30931f13ccd6680cde2f407ce"],["/UVA1714-Keyboarding/index.html","21ee7b8ca98eb3e2a6c20b60b055b8a8"],["/about/index.html","4e92eaff0e478e1744937f1d8ae20725"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","517b025a20f4df515906c44796dd35ef"],["/archives/2017/11/index.html","f381f29ea98bff656386ec7c9dc92192"],["/archives/2017/12/index.html","8b1a0eb426796f54aefdcae39b5c3cc9"],["/archives/2017/index.html","a5352507f294336103de3fd392f9c2fd"],["/archives/2018/06/index.html","4127e154f64f78c83eaec7060da490c4"],["/archives/2018/07/index.html","65a3374b95e9e77d30b67ce80736578c"],["/archives/2018/08/index.html","ddf589dc0d45fc139516e0273f21fcd7"],["/archives/2018/09/index.html","12061e15ffa1017e98c7f2c2a1582663"],["/archives/2018/10/index.html","4a10941b97ff6fe192394a4b57dfb942"],["/archives/2018/11/index.html","0850fedae601f20ca74deb0058176efb"],["/archives/2018/index.html","6c5c04083e84dbdd2e7c9b90db4f14d6"],["/archives/2018/page/2/index.html","c55192a31aa6524be2ea11fcfbe04675"],["/archives/2019/02/index.html","f7fccd7927d15c9261da752161e3e2b2"],["/archives/2019/07/index.html","07c1331eb09d687524b5393475ce0c54"],["/archives/2019/index.html","ff5d8c7f298cce5c6d1465c62e873117"],["/archives/2020/01/index.html","83d0341e5c2ff9b17cd16d1454f94b65"],["/archives/2020/03/index.html","bda95ee65ee95293089033565158ea5f"],["/archives/2020/07/index.html","f78fb4239dfe751167a5470ad745cf83"],["/archives/2020/08/index.html","9a4c1bbfa1ddf8ae546cf735776a5091"],["/archives/2020/index.html","8e06349787a7e5c6c8c6924c48d42a05"],["/archives/index-1.html","866075efb768ff970181675300f93187"],["/archives/index.html","9d397a8521000f22f1e003c83f16f4aa"],["/archives/page/2/index.html","ea118a762b7208c1ccd05b056c1eeec0"],["/archives/page/3/index.html","ea118a762b7208c1ccd05b056c1eeec0"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","a7c7c8ab3baf8b7fc61e5278685c00a5"],["/categories/HEXO/index.html","d6845269e3fffd69001dced0d40fd786"],["/categories/Olympiad-in-Informatics/index.html","a1d5f290a2a5aaff9043f57e256aa907"],["/categories/Olympiad-in-Informatics/page/2/index.html","2a1b96f5bede383d9768c322f7e1e999"],["/categories/Trick/index.html","88ac4f12b593247211e5f49db3302dac"],["/categories/VPN/index.html","c31e08bf0228c7614b89518cb9b9c173"],["/categories/buzzer/index.html","3a75837d4d6c241771b1ea9419bbc355"],["/categories/index.html","3f85bc63262996487fdd825692f0e75f"],["/categories/memory/index.html","753a3191ab8b84427f7f7f8dc5dbca8a"],["/css/style.css","22dc3c8a61070b9efb73548e81c5b7f3"],["/essay/A1/index.html","b67b764cdbc3eef565e86784bfcda299"],["/essay/A2-letter-showing-thanks/index.html","9f6520812e08b4175eeb4fb4935a3343"],["/essay/A5/index.html","861b555292683c015f96f48a2d1888dc"],["/essay/CH-wangke/index.html","5ce15af00b7b7d19e90dcd31a0c73c74"],["/essay/EN-after-class-activities/index.html","f8b77b25e3805c0f72f8bb950379ba55"],["/faioj0101-leftist-heap/index.html","f79916b833a6b4c0c7534708f5b2cfb3"],["/faioj1499-qpow-fast/index.html","d6d8851a35773558d092e5f065ed629f"],["/friends/index.html","65108e655109ea7ac3213b4555221cb0"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","d426017be15e94060f33fbba1bf52539"],["/hiddenlist/index-p.html","2611b31467256b7cba049ded1f05d352"],["/hiddenlist/index.html","cf229ca38fa477cbb59fc1fe2706f7be"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","b29cb57c22a9971c488518f123aba46d"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","0bd3615e86966e54ce461f6c237dcf7b"],["/luogu-P1967-noip2018-day-1/index.html","2f1209035c4504aa5a27a9bc0cb3fd46"],["/luogu-segment-tree/index.html","2642c55b9ab1ab5f071a94946a397b87"],["/ncm_unlock/index.html","15a9fb4756263a4383c5b9240d0e4612"],["/obs_internet_class_fishing/index.html","245ac319efee622e7e733c2730d57060"],["/oi_history/index.html","c075e39a7153bb54bf86fb9652d56381"],["/page/2/index.html","05980cee1cb73752acf648022572b086"],["/page/3/index.html","7f03bd7e6243d2494df102a0e158e19c"],["/seg-tree-namespace/index.html","8f79c9978b0cc28f0cbac078f9daebac"],["/shortest-path/index.html","6ce02648871b36a6783598ec73de1ee0"],["/sw-register.js","82892bc0efbbd67498e2e617754822b8"],["/tags/DP/index.html","cca344e8cdb6f718e6b7d4be0cc4f098"],["/tags/GSS/index.html","4d483d353446d694878ac014d8be13eb"],["/tags/HEXO/index.html","c68b7f44b003139ad0b35af0e49e829d"],["/tags/OBS/index.html","d134613b965d17e34256d512786eeec8"],["/tags/STL/index.html","f1acda94384dc1659c5c8fe6cd4cd4ae"],["/tags/Template/index.html","4fa1d5f03497942cb16c519f575dd0ef"],["/tags/Trick/index.html","854fbd77d6c7820ec33748fa576572af"],["/tags/VPN/index.html","9874427fb73aca7ab003648564279bae"],["/tags/VPS/index.html","fe0d089c93e05bf960ee242a1082f7e9"],["/tags/buzzer/index.html","21783604c6f9e8b0889178d451af7b59"],["/tags/contest/index.html","e67a3da1b1cf4a5d16f25364dc932acf"],["/tags/index.html","62f554e4360512354d201e2efbdf1e92"],["/tags/segment-tree/index.html","43b07ed5d22e3f2240d176a72a584a74"],["/tags/倍增/index.html","4809e45dab388b93ffac124da7ecfa56"],["/tags/并查集/index.html","ccb0f7a4a1976f9eaeb970db366b52dc"],["/tags/最短路/index.html","f7b20d898b4fff0e90fdf9d7d23184b6"],["/tags/生成树/index.html","fb16007b0852a0262ade4fe9e6d92fd4"],["/tags/贪心/index.html","555256669b792a7f7db6d51da67b8a21"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","b5bea86996d1bf5f92a3aa97236a9764"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","12bcfa7a7d8386333b092150e296853c"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","5c12444952fb8fb088c3da301c4cffcf"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","6f2956c699deb9b325a1c874bd01dd0f"],["/vultr_ssr_vpn_buildup/index.html","390c4e303b9fe70db94bc046e5ae21e4"],["/webboard/index.html","e27405d30e7f1cc6ea5eb3e0591b4ea1"]];
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
