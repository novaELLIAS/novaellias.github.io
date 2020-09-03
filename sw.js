/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8199feb2f39ea78d3dce879a92fce768"],["/CF372B-Counting-Rectangles-is-Fun/index.html","cf23ed0e23b8e25cd41281b84dd2b468"],["/CF749E-Inversions-After-Shuffle/index.html","a45a8125f47184698cacd63eb52d2d8e"],["/GSS1/index.html","22006ea516f45b8986595969f69f6f23"],["/GSS3/index.html","8b31efe8f0615378f078c4582b4474ef"],["/GSS4/index.html","3ee2d5fad4626b88f2b1a83b84c4820d"],["/GSS5/index.html","d1e901a364a9656061fb9be34caf865c"],["/Luogu-P1654-OSU/index.html","939b1c7e90012cfb6332ff6cfb5aa277"],["/Luogu-P2899-Cell-Phone-Network/index.html","30453c983d949bf9d81d7fd25538fb84"],["/Luogu-P4289/index.html","36e473a3d38e17965e6ff3ae7aac9081"],["/Nescafe17-Defenders'-Challenge/index.html","c7ecae1807e740cc891d74699e41cb33"],["/OPTIMIZE/index.html","391b19d9e74bd3dd2e959fa764c98a0f"],["/SP2885-WORDRING-World-Rings/index.html","8c64f7873d3b084eed1febe07748c33f"],["/UVA1714-Keyboarding/index.html","499b20f48350b378b6168873745ef09a"],["/about/index.html","748336c60ce4ee2b031055fa57498d75"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","0c6e40635af698a1b38e6344af8e2a86"],["/archives/2017/11/index.html","9b89f715537ca9d5e9cda1c2a62051ae"],["/archives/2017/12/index.html","df31bc3a40d0fa5c361465abec02f7d7"],["/archives/2017/index.html","7f33bb157279a54461c60906150c481f"],["/archives/2018/06/index.html","0eef515a98ce9d847a80bde408101788"],["/archives/2018/07/index.html","b1a6199218ce7281eb01b647832cf83c"],["/archives/2018/08/index.html","6da881ee5ace8d28d3239c982f5f9463"],["/archives/2018/09/index.html","be502b6e239ae3a1cd757cf215f6f80b"],["/archives/2018/10/index.html","17b44e0489971e3b56dd773cf766bb51"],["/archives/2018/11/index.html","fcaaf8c86064e7fea774d1c90a65ea9e"],["/archives/2018/index.html","9c97edc4089480d754d50166d09589ad"],["/archives/2018/page/2/index.html","531f20d746f35db832fd1af8d2210c7d"],["/archives/2019/02/index.html","33c883304b8dd35e774b8bbabc87792f"],["/archives/2019/07/index.html","397e28a6539ddb938e5100b7744494d7"],["/archives/2019/index.html","327f06b57d53f3c0b87d18783856afdc"],["/archives/2020/01/index.html","faad4e1cccfcf9ca7454777524e047bc"],["/archives/2020/03/index.html","d0377ba10f3c028a8a41ffb83c2da19f"],["/archives/2020/07/index.html","2f147b4bf052c5a31d0be17a8f338dff"],["/archives/2020/08/index.html","bacf3d7c11cce86d22e5f948ab225563"],["/archives/2020/index.html","7c9c5c1fb989bd5cd7254959dec93f2b"],["/archives/index-1.html","7f5dca092b78f26c7c6c74bbf8b0762b"],["/archives/index.html","8b0f7011162eba28c05b0fe3033575b9"],["/archives/page/2/index.html","c5804b8306fd1124ac941ec01370cee2"],["/archives/page/3/index.html","c5804b8306fd1124ac941ec01370cee2"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","645bc0eb98d1431eaf6642f93827e223"],["/categories/HEXO/index.html","5cb6208ac3bc6f8c124e0a179fde2637"],["/categories/Olympiad-in-Informatics/index.html","b0959f7c2a066e13377645c79e8f9658"],["/categories/Olympiad-in-Informatics/page/2/index.html","ab5e5cf95aceccc1dfc71cb3288a59bc"],["/categories/Trick/index.html","89fb1d84f66d130791876ab81a543846"],["/categories/VPN/index.html","4c8793988aa1cdb74306f201bf21abbb"],["/categories/buzzer/index.html","c36c7e89f4b97eee87cfb38f148a6000"],["/categories/index.html","92449f05100bb53a8c697b4d129e8be3"],["/categories/memory/index.html","988f5bdb7e5854da1c7f02faee7019a4"],["/css/style.css","22dc3c8a61070b9efb73548e81c5b7f3"],["/essay/A1/index.html","fa6efce48b09dbb4c6543f370affcc23"],["/essay/A2-letter-showing-thanks/index.html","0d2cd86ba69f717459b174f02e72907b"],["/essay/A5/index.html","6920f251023fe967ff68577eecda1783"],["/essay/CH-wangke/index.html","93faa058c159401c8e625bb50c9d226c"],["/essay/EN-after-class-activities/index.html","b046cde1e782730ab2e9bbd51c5a04b6"],["/faioj0101-leftist-heap/index.html","6bb9bdbee2993d8816540ac56da16f7b"],["/faioj1499-qpow-fast/index.html","4992a3957bf2ea68cf633483f6cc9148"],["/friends/index.html","6a6b6d2e5279c4f1cf9d92aa0122ac6c"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","26a5cb83a673fcafb973e9068321c93f"],["/hiddenlist/index-p.html","c5ce4aabf421e2e155315bdb1ad70a1c"],["/hiddenlist/index.html","e77f9a2545280242ac19b4b0ff570507"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","2fb379a09cf0a34b2d345a9b939aa88d"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","91fa7707d6d50470fab9a84834b62331"],["/luogu-P1967-noip2018-day-1/index.html","9758e15f9986b3009fa6311d4ffae23e"],["/luogu-segment-tree/index.html","26c89aafa4812ce4b5f0aa6ca7508f09"],["/ncm_unlock/index.html","c52edef3cb10095390b4e0aff3594ef7"],["/obs_internet_class_fishing/index.html","416fce4c495d9d570f352f7c573e8b1d"],["/oi_history/index.html","167eedb5490911c3958fa8cb069fbc4f"],["/page/2/index.html","bdcdb297b75b9739e8d94898cf4fa902"],["/page/3/index.html","4670d8f2fe7b3875576ccc0471affbdb"],["/seg-tree-namespace/index.html","330c213f81654b4ae11f4502450c39af"],["/shortest-path/index.html","190cd8040c21bf6515c30f511ca951f6"],["/sw-register.js","2b4ac2dbc557a9f6b8a72adb0bc8a8bf"],["/tags/DP/index.html","9b441d5cd7a9d79db9aa85d94f52b01e"],["/tags/GSS/index.html","931317f45c114584ef11bec768c8c4e0"],["/tags/HEXO/index.html","ed0340a59499ca31b04dd561cb7b1d0a"],["/tags/OBS/index.html","2058f3771276b9dcf57d735bc69c5416"],["/tags/STL/index.html","8b9d46d28610e3018030f8ea821e1863"],["/tags/Template/index.html","bca055e7059397e26911b117a8819a6c"],["/tags/Trick/index.html","d082e72d989c8ccd8e63bfe92087a7a1"],["/tags/VPN/index.html","27779792359b07e7925759e9c4320dec"],["/tags/VPS/index.html","b2337bb02293f0beca0e724987ea1eee"],["/tags/buzzer/index.html","61a60b28d38e7c949f407eb7bf967e3a"],["/tags/contest/index.html","694af7e649e6ded0e81a77e6bb3a3506"],["/tags/index.html","5f674d28503d34a9f338696baeb2e248"],["/tags/segment-tree/index.html","a727723aa193470e12ab83c1c74b2a10"],["/tags/倍增/index.html","62fe18529e838195b1cd5fcafbb6e1d5"],["/tags/并查集/index.html","84b3e8b2521cda30e422b247361ccf27"],["/tags/最短路/index.html","a41822c734cf69fab93dfdf1ac1d6068"],["/tags/生成树/index.html","8eac95ec28674d61be68b38000fe027f"],["/tags/贪心/index.html","c94bfd7153b914e3b17bf1b5d1710728"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","3ae6864c684d5cd17e12caace4ac716d"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","9bb035b0bd483574d483be4a85fadd46"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","c8f68e99ed61fad286130b475ca9267b"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","b54448f295fe74ec1fe47934f3560a11"],["/vultr_ssr_vpn_buildup/index.html","27003765b06886e536bae3f1c8af23fb"],["/webboard/index.html","2c408b10ec9ebf0b61cdca38f7fa3ad7"]];
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
