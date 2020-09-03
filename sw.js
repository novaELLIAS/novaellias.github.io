/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cdae0a43dda8b891ab5f8b9153c9c6ef"],["/CF372B-Counting-Rectangles-is-Fun/index.html","ad3fa4ae7985b84530fb9b6cc21c29e1"],["/CF749E-Inversions-After-Shuffle/index.html","bab569099946d2918c9776409ec7945b"],["/GSS1/index.html","25cb6f4ab37e64200710f9d874cd7ccb"],["/GSS3/index.html","e3e19f526285e860cb589f10cb5698e4"],["/GSS4/index.html","61f75a4190e66dd00c4c5fde368e1711"],["/GSS5/index.html","09788a25df20ccd2b2a2ee8b69896b36"],["/Luogu-P1654-OSU/index.html","ef8f6bbc2f156825113a0f1a33f7ce95"],["/Luogu-P2899-Cell-Phone-Network/index.html","efc48a44ce7dc086888a8e5216540e98"],["/Luogu-P4289/index.html","80abf4b3fea4efafd04dacff316f764b"],["/Nescafe17-Defenders'-Challenge/index.html","273a81b191f1be17559e90370b959c7c"],["/OPTIMIZE/index.html","2743676396db7cab7955063bd6d4c36a"],["/SP2885-WORDRING-World-Rings/index.html","6683b741e10575cba235c0b955a29bc8"],["/UVA1714-Keyboarding/index.html","94bf45fc4cc3d9b6abffb91839616dbd"],["/about/index.html","2914c975c538e8465362b83bfe3cd095"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","ec8005853066628246c1d1b6c40da3c8"],["/archives/2017/11/index.html","7428a5081cb588f50cd7f66f3f8328ab"],["/archives/2017/12/index.html","81194bd83efe7698efe229a72cb99784"],["/archives/2017/index.html","7b8ab460963f694b718a2d7cc6284b99"],["/archives/2018/06/index.html","1bbdff0062f5c6d7ebf1a22d7626ad40"],["/archives/2018/07/index.html","dcc7ddc68f95f3c65248bbe0233fb51f"],["/archives/2018/08/index.html","54ae82b678db2aa1a36542bdbe8a658c"],["/archives/2018/09/index.html","e5ddaaebb9cccc599f92b7335666435c"],["/archives/2018/10/index.html","13907b3d6accd0ff937e978dc1336381"],["/archives/2018/11/index.html","858b46cb165c238f965c8dee82e092f0"],["/archives/2018/index.html","41342df2fb3cca45f11c8d6a4d703e68"],["/archives/2018/page/2/index.html","7f2c7e7a74ebb727e67e30b5f12ac910"],["/archives/2019/02/index.html","5bf1c3bdf3429309dac54bb7c9ffcd6d"],["/archives/2019/07/index.html","dcaab59e5c61019e1ae0690a30e6458a"],["/archives/2019/index.html","1f91f4ed8abcaf17c772b4e7bc2a743e"],["/archives/2020/01/index.html","f86384949c451f6cf6dd28a7ce1c78b0"],["/archives/2020/03/index.html","baedbf8e7cd7c73f0fb3626fac22be0d"],["/archives/2020/07/index.html","16da1f0021d08611ed2970e068e69cfe"],["/archives/2020/08/index.html","a3843c64be9cc8385ccd86b3b557aee4"],["/archives/2020/index.html","03997d94aa3af0f1bf749df8ecd918cd"],["/archives/index-1.html","48ca41753f8cec0d50d611225f60ecf9"],["/archives/index.html","1a348c1a928c288a6ace756dd3e2fc33"],["/archives/page/2/index.html","5e20aab9204a1f7c84853b7616215031"],["/archives/page/3/index.html","5e20aab9204a1f7c84853b7616215031"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","0a46e75b0f7a3687ced369b9d20b1e62"],["/categories/HEXO/index.html","1b31876a69ce0a73d3126930f012972b"],["/categories/Olympiad-in-Informatics/index.html","ebae50d36cb9a93ba6164ab378d63536"],["/categories/Olympiad-in-Informatics/page/2/index.html","baf5e2839b5380489c42587f06574ede"],["/categories/Trick/index.html","3adee8014018cb206195e4b4d091e674"],["/categories/VPN/index.html","b2b4183344a91715f8bb9eeeb975d671"],["/categories/buzzer/index.html","ec61e1220658e5dbed94200a1acec976"],["/categories/index.html","f13cbebe973bb0d5ab5e8906d39bd5fa"],["/categories/memory/index.html","37866b7cf236ec1f22e30917130a74b0"],["/css/style.css","3ab3233a8d067eb9e1109da63e76fb94"],["/essay/A1/index.html","e514c8ce1b6f49f8bcd68d5f06a5d8c9"],["/essay/A2-letter-showing-thanks/index.html","f158b71c155a0bcf7af4ff03abcd5216"],["/essay/A5/index.html","11ecbba653aca702684e8df9bb78092a"],["/essay/CH-wangke/index.html","aca1434c06fc84805ad3e7e1479bbb20"],["/essay/EN-after-class-activities/index.html","766d662110ba784897999124acf595d1"],["/faioj0101-leftist-heap/index.html","db1b4c597b384de9798eaeb4830b7850"],["/faioj1499-qpow-fast/index.html","4c01eb587dad6dca060b8e712041a8d5"],["/friends/index.html","7b908519c7a43aa75592bee3d5241df3"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","40ee35b8c20a05a089c0cf2d3468a5bb"],["/hiddenlist/index-p.html","b7918f0a2c8888f8108c7d390e9cd8c8"],["/hiddenlist/index.html","91f66e806f58d8bad9ea2960eea404a8"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","2f610d1f597afb1f024ea793c2c9895a"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","99b8d57689b51f110e1d7e8523ab6081"],["/luogu-P1967-noip2018-day-1/index.html","4489d6f52ef8765e56a92051ff86ea7c"],["/luogu-segment-tree/index.html","88c3c27a8a5bb294f3a9499c557d44f6"],["/ncm_unlock/index.html","6600a618213864eb25072b2a667058a7"],["/obs_internet_class_fishing/index.html","0a09e97f2f432dc2cfca953e6ab71a88"],["/oi_history/index.html","f7341b17bdd009c64c605b7e10129076"],["/page/2/index.html","d8ab5917e4776b97512df9107b8c7e21"],["/page/3/index.html","adbf21a0dfcf005d990e609f7ff29ba1"],["/seg-tree-namespace/index.html","7524d52f454c363c273c58033914e088"],["/shortest-path/index.html","9ce42b3a87e077125b6efce93a255c95"],["/sw-register.js","11d1cf44b1574df3b307e5ea788734ec"],["/tags/DP/index.html","9a2d7e5f3ba32a88065e99031ab97355"],["/tags/GSS/index.html","cdc8af8d7f6c5fb4abbc2e09cf5f0e8d"],["/tags/HEXO/index.html","01466a028a23df0f73e90d3111d76ca9"],["/tags/OBS/index.html","0777e6998f58199323a12f3a51dff700"],["/tags/STL/index.html","90d5e7c1f6e13e316225f19a244b7f01"],["/tags/Template/index.html","2ef4e625dd62a61dcf965c0eb22c1fc9"],["/tags/Trick/index.html","d6bd0c9745e870f539d8625155a62ae3"],["/tags/VPN/index.html","8641fef69cbe2e948adefe2a5cedece4"],["/tags/VPS/index.html","84858bfd267a93576824afd0afa936e5"],["/tags/buzzer/index.html","9a998e67d5b57f65ea88673810c91543"],["/tags/contest/index.html","859a95424b5e2d1b0a127e427d395832"],["/tags/index.html","407d8d0392eb4869c1809ce1decb1313"],["/tags/segment-tree/index.html","0b8427c8bcab446be2c02c4f0866a1d0"],["/tags/倍增/index.html","d5955c53143f12d2c77e6e1fc368a034"],["/tags/并查集/index.html","1cd5efdcbf67e2cbe602c80b1fc5e08b"],["/tags/最短路/index.html","067ffdefbf3e64f1fc9060220bc9acf3"],["/tags/生成树/index.html","699894b686bedf20051ac18b56dc7f4d"],["/tags/贪心/index.html","52cc86b9ebc700069d0b209638e595cb"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","858dcfc5771fa02d1f083b9195709e48"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","0dc106335d8c4ef485ccc5d8ab922f97"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","682fa6168f2a4f748f37212dc7c864ac"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","fd09c7f3406729b3dbe37ce8bfa72f9a"],["/vultr_ssr_vpn_buildup/index.html","64b17ff30c0d228311b1f75a0498adb3"],["/webboard/index.html","261e230e9cc3854de26e60f0e5387248"]];
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
