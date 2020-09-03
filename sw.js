/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","6ece641b693bd51eadc424c8ab9783f4"],["/CF372B-Counting-Rectangles-is-Fun/index.html","61b6a92cc7f069059f66cac4b610ed3f"],["/CF749E-Inversions-After-Shuffle/index.html","2e297d0b1c7318d88fc3999ba92c15de"],["/GSS1/index.html","3647a1684971fbf03ff5846a70a200c4"],["/GSS3/index.html","3b26326c05e86600b24dc6f490524947"],["/GSS4/index.html","c85f40dd62d32e9bce9f4a9e536b833f"],["/GSS5/index.html","1453c1711d5b83b8d047f0b655ecbebb"],["/Luogu-P1654-OSU/index.html","7db3490e5e942aff047b527144aacb37"],["/Luogu-P2899-Cell-Phone-Network/index.html","293d23a903e6c61efb5aed596cedf094"],["/Luogu-P4289/index.html","a3ba984d9d22e0048b2244ccc795c697"],["/Nescafe17-Defenders'-Challenge/index.html","ed3a9584c19b902afec57ce397903ba0"],["/OPTIMIZE/index.html","d69b7fbd0c51a3036e9eb9a57a063b83"],["/SP2885-WORDRING-World-Rings/index.html","88d6ee0ff3bdc9bd9838b2a4aa598afe"],["/UVA1714-Keyboarding/index.html","730c8cd4043881b325663dfe2853408b"],["/about/index.html","5e0ffb790e6fb5157650d8e64c60211a"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","992522de09159ae8164c2e6be3cdff96"],["/archives/2017/11/index.html","00efbd301363ee0b5218c4a232c35908"],["/archives/2017/12/index.html","043f5670e27fef88d1d203d34ff58806"],["/archives/2017/index.html","942e621af8b25161140adcab1b19b09e"],["/archives/2018/06/index.html","c6d752785ef5d8f72f0bbe35a2c81c05"],["/archives/2018/07/index.html","6e1de148893d5c83f5989df86e4740cb"],["/archives/2018/08/index.html","92f66d77786934b06abc8419eeae5001"],["/archives/2018/09/index.html","d4fa15f5f591fa07fa368269a4f018bb"],["/archives/2018/10/index.html","70296f10c5347553583e070e1cc24e09"],["/archives/2018/11/index.html","2d25259721f0357ee69eb31fcaffc48e"],["/archives/2018/index.html","60e1054025545579da0581a506b75b01"],["/archives/2018/page/2/index.html","d4ce1471f0487b4cecc055590ed85dc4"],["/archives/2019/02/index.html","77b728b56ed8bb70fd58c883b26ea349"],["/archives/2019/07/index.html","f6a6db4f2499b251df233fd250df9c96"],["/archives/2019/index.html","abdb89e31323ad01cd555f7537f39e26"],["/archives/2020/01/index.html","63a680d97da059441ea3a9f36e897435"],["/archives/2020/03/index.html","3a3de233fa76ff6658aa4b90b2df10f8"],["/archives/2020/07/index.html","dc424bf9e79a5a7e5916a0baf5a7d7f0"],["/archives/2020/08/index.html","a98b10b6c42e044f8ca2f02173a81664"],["/archives/2020/index.html","62098bc6d2db2542952abd502bbc98b4"],["/archives/index-1.html","c2fd6dcd80ca1fe5442a80cdc80b283f"],["/archives/index.html","ec071633e82686345262236baa1e7384"],["/archives/page/2/index.html","ec071633e82686345262236baa1e7384"],["/archives/page/3/index.html","ec071633e82686345262236baa1e7384"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","acefde615501bcadd3ae526397c6af0e"],["/categories/HEXO/index.html","e306ca78f9cbbf2e7e5d96ceac5f04ab"],["/categories/Olympiad-in-Informatics/index.html","2c02bc6f0b1e0256fc41141a19c78f05"],["/categories/Olympiad-in-Informatics/page/2/index.html","7a20e85367bb9fac837f1950901335c2"],["/categories/Trick/index.html","ff65e1795d85e35f14e199e69a35e822"],["/categories/VPN/index.html","145db3ed3499335c8a023bb1761d1a31"],["/categories/buzzer/index.html","7d6fed01bc158d4789b461edc9ea374a"],["/categories/index.html","0c0ee393f645edbe5eca06f6d3a154a3"],["/categories/memory/index.html","d95765e9cb99fc9387c539ea4c57692d"],["/css/style.css","3ab3233a8d067eb9e1109da63e76fb94"],["/essay/A1/index.html","6c118bce0f95ecc8224a89d954a9059f"],["/essay/A2-letter-showing-thanks/index.html","da22423b311b4dc098d72f95a3336eed"],["/essay/A5/index.html","48ceaff95d5e9d5eb793393cf1b47551"],["/essay/CH-wangke/index.html","27b7e5893ecd26a99964b9353fdda305"],["/essay/EN-after-class-activities/index.html","fa62464bc5a7b2dd9dbcd95044b35ac5"],["/faioj0101-leftist-heap/index.html","4cc4cac0d35783076c1669ca89070574"],["/faioj1499-qpow-fast/index.html","af1202ad8898de0b3abfca5759bf8e44"],["/friends/index.html","3605f8522a6664d32911f70ca9e091b9"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","bae93dc1b96e1a6328842f13d3151611"],["/hiddenlist/index-p.html","12aa628342936b8d13544140c4def2f3"],["/hiddenlist/index.html","63ed9eccd2cf7064202196f97c2dd21e"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","377fc15d880634f6e9d25c7c8b1eef98"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","a838bd95c8d71661ba8a8f609bf562d6"],["/luogu-P1967-noip2018-day-1/index.html","63915bfa3ddf76a7febb85c5f3621b5e"],["/luogu-segment-tree/index.html","e8ec53ceec36d1f8a94839f59d04f22d"],["/ncm_unlock/index.html","ee18a1bf7dc8a1ed0e7b75de64a9ea56"],["/obs_internet_class_fishing/index.html","cc3dc341026e1804b4bf7d698563a489"],["/oi_history/index.html","a41d5f56988bbec8aa7fc779af1337b1"],["/page/2/index.html","f0d35e7d7bcb81b4615e8b2db426a33a"],["/page/3/index.html","17e3fd28e883112096eaec0f415665cc"],["/seg-tree-namespace/index.html","ee8052603a09bf5198940be22442c181"],["/shortest-path/index.html","156e2ef787d1c1bb16f6c2a474a6a674"],["/sw-register.js","665220b2d654914984c623779e01f492"],["/tags/DP/index.html","4a64bd8bb29a80c7fcfc3667025450c9"],["/tags/GSS/index.html","354bfd79d31475307332f8a9c310a496"],["/tags/HEXO/index.html","467ddaaebdef41dd343f98fd5b65e2b5"],["/tags/OBS/index.html","a88a7d8bc442ab079decd5aac6ad436d"],["/tags/STL/index.html","a751e9ab915017fee025d830d2eb6dbe"],["/tags/Template/index.html","5cd70edb96aafe94d6d059d9c2ca5f5f"],["/tags/Trick/index.html","e4397f3731dd8fb251430f5638bade43"],["/tags/VPN/index.html","5e30c375a7d6074e704fa5dd04b19688"],["/tags/VPS/index.html","468b38e50349ab00461d590b824c6a63"],["/tags/buzzer/index.html","16e385958fd5f0fcfd8eee864c7cde29"],["/tags/contest/index.html","94b384a6fb8f8299c6779bf6bf6cef6f"],["/tags/index.html","69d757409f0d28ced177e4515f136bb3"],["/tags/segment-tree/index.html","ae1e224011a923bd144f12250446676e"],["/tags/倍增/index.html","b49ec0207b272636962ae9b59f0ef487"],["/tags/并查集/index.html","7db2eb6a42b93e63621bf75174f6e96e"],["/tags/最短路/index.html","f2b83f4a9fc9b8786010508d5f334289"],["/tags/生成树/index.html","8ee257a65bbc5beae1a4c3f6bc4c29c6"],["/tags/贪心/index.html","a73e96da6dfc20827d78a35658ee9ab4"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","5e565cff347889580e7c7c5f91efd353"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","a31bb5198faf2ac00f227a741f937640"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","3a0a1db574809fff6f0ef99132e8e914"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","1e5123a523684bc4313019174ad73869"],["/vultr_ssr_vpn_buildup/index.html","4b9158a14d79cf3009393e3719f1d852"],["/webboard/index.html","c9b38a7c8395171b12cd56fb8a4787a3"]];
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
