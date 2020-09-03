/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9b7ff19a6ea6aedce93ad5f57d6a17ba"],["/CF372B-Counting-Rectangles-is-Fun/index.html","b154b2a5feeeb9b4311b9405f05b20a9"],["/CF749E-Inversions-After-Shuffle/index.html","3a586ed24c5de03cd6cbe6fdfa31ff95"],["/GSS1/index.html","6079787b966715419d088e9cf496cc44"],["/GSS3/index.html","338303f1bf2549668f6052753a9a56f7"],["/GSS4/index.html","52c66b8b52d788d597447143168b8e95"],["/GSS5/index.html","f27cefae6ec8469c99768704f4370a9d"],["/Luogu-P1654-OSU/index.html","3e28e8096a5b3f9cf4782f4eec6b6995"],["/Luogu-P2899-Cell-Phone-Network/index.html","657d6bb1a3af6951596a2130f22b7273"],["/Luogu-P4289/index.html","72a7edda1e729bf271d06fb7a6820bf8"],["/Nescafe17-Defenders'-Challenge/index.html","1e2cf0314f3469ec3532a08be1fb72e3"],["/OPTIMIZE/index.html","a8f6c9aa09b0015311c67e34619ce1ad"],["/SP2885-WORDRING-World-Rings/index.html","14ee81f71c56fdaa6921cac1f904bc8a"],["/UVA1714-Keyboarding/index.html","e1b526599c1a2507603ceb4f737726e3"],["/about/index.html","e0df8f44fb8fd8e2b5811d8134047db7"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","611434f88c54a74bace5292b9c3bd40f"],["/archives/2017/11/index.html","ef1da84959614e556b874fcd51fc9b21"],["/archives/2017/12/index.html","129d0fef00b01ba6f7c22dcdeab6ae8f"],["/archives/2017/index.html","510ffc7cb7896e2dc6811c3a89aefee5"],["/archives/2018/06/index.html","6d455d920caeb0e0644f1f833aa01262"],["/archives/2018/07/index.html","f39f2bffc6b2b576882ccdd8042c5148"],["/archives/2018/08/index.html","de03b557aa9047a0d8504b60e7d421fe"],["/archives/2018/09/index.html","0dcd1c8da25e45215bd65c97ccfe3535"],["/archives/2018/10/index.html","e217d629771148d5d31a58dbb30602d4"],["/archives/2018/11/index.html","9355c2d4b15d39fbdc34001ed55f78bd"],["/archives/2018/index.html","c68f042d3ad9e433b3a4ca8234229237"],["/archives/2018/page/2/index.html","24cee33761cf8b04d8c99781c4cfb60c"],["/archives/2019/02/index.html","dd883dc7f22359cd93da064a9642526d"],["/archives/2019/07/index.html","629ecebb8afc07e0f93a945178004442"],["/archives/2019/index.html","765f76fce6812d10b1365831e85dc620"],["/archives/2020/01/index.html","a1e86ccaa7b3c40b2596c160bb62e648"],["/archives/2020/03/index.html","460a789b3c92d7b6823201039c0634f6"],["/archives/2020/07/index.html","49822259e90dc8cfaf53395d395d98d3"],["/archives/2020/08/index.html","2c2915c4f1bd0134dfc040c6fb77fd26"],["/archives/2020/index.html","1c73b10039d5b042d2d755a83c8d07d1"],["/archives/index-1.html","830e4979e854fc90b9db476d0e2cac13"],["/archives/index.html","eea614174d945ff7d8c13d59e0161568"],["/archives/page/2/index.html","25fac4307dd5038ac8a5ed935a7e984c"],["/archives/page/3/index.html","25fac4307dd5038ac8a5ed935a7e984c"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","a514e2a0f31ac559fb9134867bec013e"],["/categories/HEXO/index.html","397c76fe69a2c8240217a1f01adbee36"],["/categories/Olympiad-in-Informatics/index.html","c771b8f21095552444ffaa50b88ea5f0"],["/categories/Olympiad-in-Informatics/page/2/index.html","44362e8e4cabb4d90ec9bb0c2a92bdac"],["/categories/Trick/index.html","4d2144fb61666d75fce3df0f692b5460"],["/categories/VPN/index.html","1b86dd8c726794aa101ce2fd9a3ac98a"],["/categories/buzzer/index.html","16f784ecc221a9cb527900027c4c7935"],["/categories/index.html","06af8abda3396c5f02827e5861acc240"],["/categories/memory/index.html","22622ddfefb6bb12ceef0d51985e06e8"],["/css/style.css","22dc3c8a61070b9efb73548e81c5b7f3"],["/essay/A1/index.html","67b187a2258517d72e98ab7b5aa95ff8"],["/essay/A2-letter-showing-thanks/index.html","6b62fb23d84ccc46b1c73c0eabe25984"],["/essay/A5/index.html","861959afddf4e983369d07a8af4e1727"],["/essay/CH-wangke/index.html","ddc695b035e59feee50674fe9caf95e5"],["/essay/EN-after-class-activities/index.html","37b5d0a182451e22badab2574cac0c8e"],["/faioj0101-leftist-heap/index.html","ba75ea347e53e85ff1a36ba625ac45a1"],["/faioj1499-qpow-fast/index.html","769f832aaf15679ba397d7ef20c958b8"],["/friends/index.html","7e467890b53c5ea7da4d1ee9c55051d4"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","70353fc74b77dc08d0847c94c1609b2e"],["/hiddenlist/index-p.html","e9db5bba8cb139ed8009fc69b2e8d432"],["/hiddenlist/index.html","4976e98d3544ebd20ce9dccd22fbe9e7"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","4ba26d19e9a4d5ab292db91ec765112a"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","b16d03d1d30fdeca478a709eabf29bd8"],["/luogu-P1967-noip2018-day-1/index.html","80da4460871b37c2bddd7caaa4e14b0b"],["/luogu-segment-tree/index.html","6802a682cf05def86cb4995e01ed73a7"],["/ncm_unlock/index.html","40b08c0ad66a758c6851cc3ed36955ff"],["/obs_internet_class_fishing/index.html","013b2fd790abd120f19ea3848b4087b0"],["/oi_history/index.html","8dafa0455ecac966d6a519aaadca142e"],["/page/2/index.html","0a81a1e1d8b7a00c35933966296b1430"],["/page/3/index.html","95ea951f21a0bf50c38fd51fb34a7919"],["/seg-tree-namespace/index.html","cbef43b666130c266dd138707c976f2d"],["/shortest-path/index.html","6422ce42524271c3f146d0e20460b6ac"],["/sw-register.js","729ee453468e590c73302adb3558c6df"],["/tags/DP/index.html","eea3ddbb81bcf33b8a7aa43a71691b40"],["/tags/GSS/index.html","2a5af89ba5387d1288ee4507e18b3541"],["/tags/HEXO/index.html","8d84e88e72c7ace2165ad75ee3d11305"],["/tags/OBS/index.html","2a2bff5a73ab039daf9a3b14343d67dd"],["/tags/STL/index.html","4f3a45fbe12e2c86b756cccadc7d7fa6"],["/tags/Template/index.html","ed51945056bc63116bb0363d640731a3"],["/tags/Trick/index.html","0bd8860b09ec6bcb81a409468a55b27d"],["/tags/VPN/index.html","7135c8d30d79c3a79f577841880a5515"],["/tags/VPS/index.html","ec25de8eaf546a47b8cfe28065c00db6"],["/tags/buzzer/index.html","629c3f8f9538e501dd5358fa7df454b2"],["/tags/contest/index.html","8f788ecd04f54ceaf938e7f36496d37c"],["/tags/index.html","a7d89e7ef5249cc8a467d36f648e5bfd"],["/tags/segment-tree/index.html","8e2d5c454da50d36e273f5a623b7a242"],["/tags/倍增/index.html","a7aa47bc0344d247b965b8b09502c7c3"],["/tags/并查集/index.html","4f1f2990a87cb85aed217fa04848c661"],["/tags/最短路/index.html","d9dcdbb2109c216045852df19e268fca"],["/tags/生成树/index.html","28dbd36562a03d5ddf200f6096cc197d"],["/tags/贪心/index.html","30f6aac2b367c6239b44f04a6e86fd53"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","76a638482d28fd3a7e9c1670d79b9a67"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","bc23a0d1e06e4ca2963bcc575c208374"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","e8df9342566e3717bbba936c272608f3"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","14870842e1d9a6d69173110055845c1b"],["/vultr_ssr_vpn_buildup/index.html","b9e0e89fcc20e967156049aa8bc2be14"],["/webboard/index.html","7e79b1c6041715eddb0b6a749659e2c2"]];
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
