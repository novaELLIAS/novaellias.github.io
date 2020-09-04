/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e821be8b5a810439cd058891bbfe2351"],["/CF372B-Counting-Rectangles-is-Fun/index.html","7086bd97ff4287f1c2062c18dbff18d3"],["/CF749E-Inversions-After-Shuffle/index.html","d2e30b6bfa68de980db04b02ccf1703b"],["/GSS1/index.html","3bcda38813bed2377a61ea4084579d12"],["/GSS3/index.html","ef53b7804088f060938e3c47045150b2"],["/GSS4/index.html","b162cea683e2cce22481a50f4537d12d"],["/GSS5/index.html","edf315eaaf1b2d6dedb12b8269f985cc"],["/Luogu-P1654-OSU/index.html","7770044a0f56e5273c4cc545d1b1d846"],["/Luogu-P2899-Cell-Phone-Network/index.html","8bf0668f2c980fc2185d18b69bae97d8"],["/Luogu-P4289/index.html","b9a8e7dc5efa6c6e7540c474050abb85"],["/Nescafe17-Defenders'-Challenge/index.html","2a8bbef451d03e18aea552b6ec2277b6"],["/OPTIMIZE/index.html","b3b93b4996808831af11b8d3e07f00fb"],["/SP2885-WORDRING-World-Rings/index.html","07e12de2c60b0bc25371a070079c5e97"],["/UVA1714-Keyboarding/index.html","01b43238e336856becb1dd6961828c91"],["/about/index.html","879893f2eddd9c59a43da45eb545e993"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","db44e288a0bb7a75503dc288c88e6c9d"],["/archives/2017/11/index.html","7ccc00e30baa4ffb7651dd43a94a4218"],["/archives/2017/12/index.html","a90e6ebd949b08705c5bf83d3ba875fc"],["/archives/2017/index.html","246cc1ae5aa48e9f3273ad0984d1077e"],["/archives/2018/06/index.html","c8e2cfa8642e54375c6343973b3a7280"],["/archives/2018/07/index.html","d138d9bb754ed785920119696af819db"],["/archives/2018/08/index.html","d8f07296bb04e55a8110f954fbd45171"],["/archives/2018/09/index.html","44bdd721111876d62bf2a743f6d68970"],["/archives/2018/10/index.html","cea41b88bc2d07616cb665a846776388"],["/archives/2018/11/index.html","9416bfc7700fe0685b588890e02702c7"],["/archives/2018/index.html","e8afa1035837e17ffa67049fe1d3c9af"],["/archives/2018/page/2/index.html","67d38160bfce3dbeb7e7b343ddf8d4cf"],["/archives/2019/02/index.html","1fcf5944f52cb55e8a3eef469959973d"],["/archives/2019/07/index.html","9d62ef0ec86f14ae91a8f80aef534ead"],["/archives/2019/index.html","3906271dc28821624ca02dbc302fa001"],["/archives/2020/01/index.html","394a2a940f34b5224dba2c666102e628"],["/archives/2020/03/index.html","9fb96f6213f6c5eb091e8b7df06d4579"],["/archives/2020/07/index.html","4f4fa63931909e3eb4a7d296cea04949"],["/archives/2020/08/index.html","1e2439537d843c948cb45b98f5322a64"],["/archives/2020/index.html","a500bd3ac82d5615e8be7d24a5ccec17"],["/archives/index-1.html","aebed1a683cf801ef5c6705f36c6720a"],["/archives/index.html","5296d2aa2c349748db324d0cad54d2d8"],["/archives/page/2/index.html","5296d2aa2c349748db324d0cad54d2d8"],["/archives/page/3/index.html","5296d2aa2c349748db324d0cad54d2d8"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","24172be880f879810f8d61d5e6a5587a"],["/buzzer-define/index.html","5e944f3d2ad257d2ab64d188cdf086f6"],["/categories/HEXO/index.html","62ffe9399e329620e0166871dd0665b6"],["/categories/Olympiad-in-Informatics/index.html","27c73ee31d745f82053473a88cc59726"],["/categories/Olympiad-in-Informatics/page/2/index.html","4c4cebbe35c40d17b664c1f52fa2986f"],["/categories/Trick/index.html","efaa6d5dec68a807e16618126470e354"],["/categories/VPN/index.html","687c2a74f2543ac7059585550afdd442"],["/categories/buzzer/index.html","d831e3f5a6f3d844d8433327476db25d"],["/categories/index.html","3708967d564bc376114ec1c4eccf422b"],["/categories/memory/index.html","fef00cce91132197f73980ccd0a1d2d0"],["/css/style.css","e834c077e985a43bde5c444c49831b29"],["/essay/A1/index.html","36a4d090925eebb7c1bd143a9d7cda0a"],["/essay/A2-letter-showing-thanks/index.html","96f011a48e5caaa601eb79f23371c8d3"],["/essay/A5/index.html","7882dd503fd5525db7188f494c2340e1"],["/essay/CH-wangke/index.html","7fcb42a7e89d5c6d5b86c7c2804f2c22"],["/essay/EN-after-class-activities/index.html","f5b6f1afc1c7231296f3efbc16fac61c"],["/faioj0101-leftist-heap/index.html","bf56b17def3750843e29be8fd71d5734"],["/faioj1499-qpow-fast/index.html","9f1127f97fccb37b6e14e30c568d20ec"],["/friends/index.html","e1657fbf409de38e016e61d77178e018"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","d17b999a3421280da8ee9c47adb06bce"],["/hiddenlist/index-p.html","37ce16fce0e3bd72437230f148e72ec6"],["/hiddenlist/index.html","48ef2dd20c216f46201d995471c2eff5"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","9c46ddbcb76fc247fad45ff5a69cf38a"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","b5bfb94cbaab9841bd79ea0d9c3fd2d1"],["/luogu-P1967-noip2018-day-1/index.html","90334cc0bced4ea843d6996c1c207d20"],["/luogu-segment-tree/index.html","1d2110a0d6bf9f51baace8fc99eb2dde"],["/ncm_unlock/index.html","6626174d51bccbd6ba4d4472d9c7bab6"],["/obs_internet_class_fishing/index.html","8f7bdbeeaff52403a0d79cf660c81857"],["/oi_history/index.html","afa813997be25b8c8d862d69ba263d3d"],["/page/2/index.html","f82fd969f44d9bf21659ff2ba128a095"],["/page/3/index.html","3cfa2eee10e5791b64c682853442dad0"],["/seg-tree-namespace/index.html","0eb5701c65a5c476100cc5ba8918655d"],["/shortest-path/index.html","50e6fe7944de02d5fa433d2bc740ade4"],["/sw-register.js","a2580557998f92d3d9c3d9be9df8b29f"],["/tags/DP/index.html","2d77d1ccc54554f0fa936b43c505bbdb"],["/tags/GSS/index.html","b73fb1c42156eb5c06e89a6a62a5a942"],["/tags/HEXO/index.html","8f87a8021e8e795b816946dac4ade055"],["/tags/OBS/index.html","2bce0682796cb680fc491a6175112ec8"],["/tags/STL/index.html","d6bf3f572b432d37eebada551e5f5d50"],["/tags/Template/index.html","d99e49e4dd511e0c4869c3ae49ac9c75"],["/tags/Trick/index.html","67acebe5c08f92268da4485b4fc07302"],["/tags/VPN/index.html","2ed4cb6ff3a33b13b8d132c3c4d2b9d6"],["/tags/VPS/index.html","b6c7f82cec2734828a06f5739bc22d59"],["/tags/buzzer/index.html","2d343ff36eb89ee1615c18b011b716e3"],["/tags/contest/index.html","8c11de698561c76f9aea9867025fb01e"],["/tags/index.html","ed79a2ecbb7fe04db962c9c8cdab8d83"],["/tags/segment-tree/index.html","fd8da26888623a656e102576b25fb845"],["/tags/倍增/index.html","6389cad4a6ffd873032dcc581bcda725"],["/tags/并查集/index.html","1fc91cb923669ff5b110cfb01d6bc3a6"],["/tags/最短路/index.html","e164a43bc2f89ffa84b80ceb1845cadd"],["/tags/生成树/index.html","82f86889893c006a22c4c43bb9fe822a"],["/tags/贪心/index.html","056ff80a6375f81e280618561f34b685"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","b8dd6c7f0f40ed203950fc1f9743563d"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","2719ecbd46dff2b5375132df74343d9e"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","8234a750d3a691e4c27df794ab265324"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","f28cefb42fae5c74d16c8ea2ed6f84b2"],["/vultr_ssr_vpn_buildup/index.html","c088094fb972bffdce6225982f438bb6"],["/webboard/index.html","b7d0c478ecd47d9d64c69a6e2bb0f1fe"]];
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
