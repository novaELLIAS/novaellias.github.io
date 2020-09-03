/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cdae0a43dda8b891ab5f8b9153c9c6ef"],["/CF372B-Counting-Rectangles-is-Fun/index.html","ad3fa4ae7985b84530fb9b6cc21c29e1"],["/CF749E-Inversions-After-Shuffle/index.html","bab569099946d2918c9776409ec7945b"],["/GSS1/index.html","25cb6f4ab37e64200710f9d874cd7ccb"],["/GSS3/index.html","e3e19f526285e860cb589f10cb5698e4"],["/GSS4/index.html","61f75a4190e66dd00c4c5fde368e1711"],["/GSS5/index.html","09788a25df20ccd2b2a2ee8b69896b36"],["/Luogu-P1654-OSU/index.html","ef8f6bbc2f156825113a0f1a33f7ce95"],["/Luogu-P2899-Cell-Phone-Network/index.html","efc48a44ce7dc086888a8e5216540e98"],["/Luogu-P4289/index.html","80abf4b3fea4efafd04dacff316f764b"],["/Nescafe17-Defenders'-Challenge/index.html","273a81b191f1be17559e90370b959c7c"],["/OPTIMIZE/index.html","2743676396db7cab7955063bd6d4c36a"],["/SP2885-WORDRING-World-Rings/index.html","6683b741e10575cba235c0b955a29bc8"],["/UVA1714-Keyboarding/index.html","94bf45fc4cc3d9b6abffb91839616dbd"],["/about/index.html","2914c975c538e8465362b83bfe3cd095"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","ec8005853066628246c1d1b6c40da3c8"],["/archives/2017/11/index.html","2e81ce1d0005b3177828dbfba4106fef"],["/archives/2017/12/index.html","a31e2481bb82d50584c9e0ccb69126a3"],["/archives/2017/index.html","855e3d102384ee18eceffdc8edd03b7c"],["/archives/2018/06/index.html","7eef3c7d10e097087926297f7c084919"],["/archives/2018/07/index.html","eb2b154b52fb5fef14bd3acbf10371d8"],["/archives/2018/08/index.html","f2dfbfa0a142d8651ec87eefe5155649"],["/archives/2018/09/index.html","ae5a3ea4178661a03331702fd7e5cf70"],["/archives/2018/10/index.html","96fdda10f24943f6f5687731c49df147"],["/archives/2018/11/index.html","dd2a29e074f39dc1868e2d2a7804350a"],["/archives/2018/index.html","a8441f55cb0b3d6a26486a50bc6dd13e"],["/archives/2018/page/2/index.html","7f1951cecb578191bd679a981c3f3c2d"],["/archives/2019/02/index.html","0cc965e9dab40ade948edf14ad06d800"],["/archives/2019/07/index.html","f4212325bbc92055ef2d0ddbf8457b75"],["/archives/2019/index.html","d2cbec86e86cfe7c55463f98bdaea602"],["/archives/2020/01/index.html","775af183e600ccc561107a99bfccb8a7"],["/archives/2020/03/index.html","88b9e590108551b8af0001029fcb0a9d"],["/archives/2020/07/index.html","b03845afb2dda280534d6be5ef1d1876"],["/archives/2020/08/index.html","61ab00b352f348c1f0ac0c42f4614690"],["/archives/2020/index.html","0932d84df91fa5352f7ee8288b6270b8"],["/archives/index-1.html","48ca41753f8cec0d50d611225f60ecf9"],["/archives/index.html","d5a68da53b5b22fddee116c77c6ef0c2"],["/archives/page/2/index.html","d5a68da53b5b22fddee116c77c6ef0c2"],["/archives/page/3/index.html","d5a68da53b5b22fddee116c77c6ef0c2"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","0a46e75b0f7a3687ced369b9d20b1e62"],["/categories/HEXO/index.html","e7bba1e3b69593f91600d2682ea7a930"],["/categories/Olympiad-in-Informatics/index.html","ab9984021b6f32aa52a04b4650018ddc"],["/categories/Olympiad-in-Informatics/page/2/index.html","94c9544f780ba6c5c83f5e2836b84098"],["/categories/Trick/index.html","0360b1947f3bec59a098a73523f7b860"],["/categories/VPN/index.html","eff1c075fa7178b0b8c1d758ba114f23"],["/categories/buzzer/index.html","6c7db2c4b69af4086d7acae5438c491b"],["/categories/index.html","f13cbebe973bb0d5ab5e8906d39bd5fa"],["/categories/memory/index.html","19f51a78b1b96f3ef78996871332073c"],["/css/style.css","22dc3c8a61070b9efb73548e81c5b7f3"],["/essay/A1/index.html","e514c8ce1b6f49f8bcd68d5f06a5d8c9"],["/essay/A2-letter-showing-thanks/index.html","f158b71c155a0bcf7af4ff03abcd5216"],["/essay/A5/index.html","11ecbba653aca702684e8df9bb78092a"],["/essay/CH-wangke/index.html","aca1434c06fc84805ad3e7e1479bbb20"],["/essay/EN-after-class-activities/index.html","766d662110ba784897999124acf595d1"],["/faioj0101-leftist-heap/index.html","db1b4c597b384de9798eaeb4830b7850"],["/faioj1499-qpow-fast/index.html","4c01eb587dad6dca060b8e712041a8d5"],["/friends/index.html","7b908519c7a43aa75592bee3d5241df3"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","40ee35b8c20a05a089c0cf2d3468a5bb"],["/hiddenlist/index-p.html","b7918f0a2c8888f8108c7d390e9cd8c8"],["/hiddenlist/index.html","91f66e806f58d8bad9ea2960eea404a8"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","41c0b3e3f8bdea7471ddf41ff90ecc61"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","99b8d57689b51f110e1d7e8523ab6081"],["/luogu-P1967-noip2018-day-1/index.html","4489d6f52ef8765e56a92051ff86ea7c"],["/luogu-segment-tree/index.html","88c3c27a8a5bb294f3a9499c557d44f6"],["/ncm_unlock/index.html","6600a618213864eb25072b2a667058a7"],["/obs_internet_class_fishing/index.html","0a09e97f2f432dc2cfca953e6ab71a88"],["/oi_history/index.html","f7341b17bdd009c64c605b7e10129076"],["/page/2/index.html","67d53eec91d8275a44a1c5451cd2b0ef"],["/page/3/index.html","21460b17f6095bdfaf7881967d62d5ce"],["/seg-tree-namespace/index.html","7524d52f454c363c273c58033914e088"],["/shortest-path/index.html","9ce42b3a87e077125b6efce93a255c95"],["/sw-register.js","d0d705898db1b2a0bc00678ae8cae138"],["/tags/DP/index.html","4aeff88d36a18eafb0b76928a01c8831"],["/tags/GSS/index.html","926bbbede5ca84bee8e601b6376e5da4"],["/tags/HEXO/index.html","22c5decf4c78f066f0a09e098e34e2d3"],["/tags/OBS/index.html","20ac6dd72856e3f3c24076c087b22e98"],["/tags/STL/index.html","9b3ff8a07b7ea02c7cdf6b3b8dcc1397"],["/tags/Template/index.html","5b7a49b8d71c752031c2e15bdc706d7d"],["/tags/Trick/index.html","7452025ff5994407ed288aed9f455d27"],["/tags/VPN/index.html","d82424a4df831fda50327acbd364b3b1"],["/tags/VPS/index.html","8ac52baad666f515d72bc3817a2d5d54"],["/tags/buzzer/index.html","ed53088df26a9fd9a8e834f43bc22969"],["/tags/contest/index.html","a7fff0e6b930548ca5473a000a7417bd"],["/tags/index.html","407d8d0392eb4869c1809ce1decb1313"],["/tags/segment-tree/index.html","791cd97e2735d7553c74dbd8791a220f"],["/tags/倍增/index.html","89fbc3a59a139155766ce8bd5660e8c1"],["/tags/并查集/index.html","ab1cd7e2743b0c36cb2f4a75d2a44b01"],["/tags/最短路/index.html","4e27378e1754fc5b37f8b683bb198c35"],["/tags/生成树/index.html","f51f91ace925bc4c99b91487879066fe"],["/tags/贪心/index.html","436ba2a628e936f6ba92031c78c3069a"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","858dcfc5771fa02d1f083b9195709e48"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","0dc106335d8c4ef485ccc5d8ab922f97"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","682fa6168f2a4f748f37212dc7c864ac"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","fd09c7f3406729b3dbe37ce8bfa72f9a"],["/vultr_ssr_vpn_buildup/index.html","64b17ff30c0d228311b1f75a0498adb3"],["/webboard/index.html","261e230e9cc3854de26e60f0e5387248"]];
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
