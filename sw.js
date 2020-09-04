/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","aa15a4563f327b5dcf7a5d1c8c135adf"],["/CF372B-Counting-Rectangles-is-Fun/index.html","493442323bf8af308ee9600458490fc6"],["/CF749E-Inversions-After-Shuffle/index.html","e36516362edc0be8eeef2d14263e0b6a"],["/GSS1/index.html","78d46dca030466d4930072ce02f2d09f"],["/GSS3/index.html","cad63134d9561c6267429f88e9fd7a3e"],["/GSS4/index.html","4ac9b52cc5a60adc7c41c230af54858d"],["/GSS5/index.html","4c219bdb9a7c4cfd98b6db2961f9a2ad"],["/Luogu-P1654-OSU/index.html","b38912dd2b0c7244d66dfe1f65bd3908"],["/Luogu-P2899-Cell-Phone-Network/index.html","71604bb2256e2c03835e505d2a955210"],["/Luogu-P4289/index.html","17b8d0b6a7316c86fc4ed0298a0d5879"],["/Nescafe17-Defenders'-Challenge/index.html","9695dc6a6c1c7ebaf25b3858c33f5f30"],["/OPTIMIZE/index.html","e29613d79f253ce58c3c2f557a4e98ac"],["/SP2885-WORDRING-World-Rings/index.html","01f2d218195ece34686a4939724e4630"],["/UVA1714-Keyboarding/index.html","3f909dcced54282fd04ea7f45a4dd27c"],["/about/index.html","26c57c2be864aceb640f97c0a256ef9e"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","fa6d9920ac0abb636ecaea07105968e4"],["/archives/2017/11/index.html","968f0be552a0032db7806e2c88a22e88"],["/archives/2017/12/index.html","fef7d286de8d0fc5bb5c2047e29eaf19"],["/archives/2017/index.html","7c018dca94e38c541b59a01be4230b5a"],["/archives/2018/06/index.html","1be38a4675bbb040899f7323e571c25b"],["/archives/2018/07/index.html","0a6910d908a332697d10ddb7577623db"],["/archives/2018/08/index.html","ec8341058ae2b9a174ee1e8509d2acd2"],["/archives/2018/09/index.html","31e3ae4bdac8e10b919f9cb46984504a"],["/archives/2018/10/index.html","0f1f3be561732c1c048e208e413fc86f"],["/archives/2018/11/index.html","d3552894d7e2b12204527634b3294b65"],["/archives/2018/index.html","87f329af1403cfdea05070cf711f3216"],["/archives/2018/page/2/index.html","512cf9dbdec271cfada9e763644e8c22"],["/archives/2019/02/index.html","c1f4231ab5a9003dd257c71b79c0b477"],["/archives/2019/07/index.html","f5aa0c0385180f885d3f831333ce6b48"],["/archives/2019/index.html","30a2a6be96f8b769c3074f8a916e415b"],["/archives/2020/01/index.html","2b1febe0cad98e715a2a2f7bfb4241ca"],["/archives/2020/03/index.html","53556ee59f39e9ff9621f11acf264cd7"],["/archives/2020/07/index.html","9fccb6bff96f32861a23dc0b6fa02b86"],["/archives/2020/08/index.html","8b2bdd02f0b1aa59c768978cca41bfce"],["/archives/2020/index.html","aba5a3dba0988635044dbcf55561606e"],["/archives/index-1.html","8eb4cd7ac08af1f932a82c5a8d88be08"],["/archives/index.html","f8356b06fafff833c16387965ffd6682"],["/archives/page/2/index.html","f8356b06fafff833c16387965ffd6682"],["/archives/page/3/index.html","f8356b06fafff833c16387965ffd6682"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","66d1f73d435ffc8e2d11322a4cb0e453"],["/buzzer-define/index.html","73e8e4d3776d313ebad2187e45549c74"],["/categories/HEXO/index.html","3b69504f1061b18d1bd73ff1b85b1a53"],["/categories/Olympiad-in-Informatics/index.html","6ce7695c56630748fd7cf159e7978f8e"],["/categories/Olympiad-in-Informatics/page/2/index.html","f103e90a03592b9a3d00fd48f6136a21"],["/categories/Trick/index.html","2cf7fae0ec0a028116b761825311d5ee"],["/categories/VPN/index.html","ae5d0446ade690c965e3b018de151531"],["/categories/buzzer/index.html","f7bd846a752e328ddef3f3934665d6f1"],["/categories/index.html","6f442851d361b4dbb71791969bd01134"],["/categories/memory/index.html","96a49bc4cbeee2ca8fc732adad07bb37"],["/css/style.css","e834c077e985a43bde5c444c49831b29"],["/donatepage/index.html","228a2fa9b010620f263ef5c214d08bd2"],["/essay/A1/index.html","088b6e3e1eb3d6a7d5ac9012ea42cfed"],["/essay/A2-letter-showing-thanks/index.html","3d9b526a3c17d8a567b4ade019348182"],["/essay/A5/index.html","f3623dc1baf4a58b0dff0a7559f808d5"],["/essay/CH-wangke/index.html","2ab72bc61ab68b5dfd20af776def107a"],["/essay/EN-after-class-activities/index.html","ed4622e1b2c2db864b1e3dce2e32e30c"],["/faioj0101-leftist-heap/index.html","79020c7946ae06c68851637fadb74c5f"],["/faioj1499-qpow-fast/index.html","f98a846db900bc0a5c7c91ae45225436"],["/friends/index.html","e238d4a1e4094632dbc8db539bdd1760"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","78ee617bad9ffd8a7034746a5318ac34"],["/hiddenlist/index-p.html","4d2d63b8e637c51f47ea6fc1f66c74dc"],["/hiddenlist/index.html","27107f7cf31e00c04ea7ffb1717810cf"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","e2bb52ef958fa6645d75062fdd1d6f73"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","e337adfbe8b42f3d5d6bc06d3f9f0b57"],["/luogu-P1967-noip2018-day-1/index.html","c31bfbd560f61ee93981ac6d01f92274"],["/luogu-segment-tree/index.html","87b3f5f5c5f05b620107349f726b64b4"],["/ncm_unlock/index.html","6e0380b82f19d750d1ff97a863320ad8"],["/obs_internet_class_fishing/index.html","de3ed4968d1f3bc6118c0bf7e5eb69c8"],["/oi_history/index.html","00679ef41831db8ad094c0a543292e77"],["/page/2/index.html","dd0867636d55cbf8c308b2141fbe0a8f"],["/page/3/index.html","522ae24ac2ebb77bb1e66399205f8739"],["/seg-tree-namespace/index.html","e882387d98f68ba95ea240f6fa3af4a9"],["/shortest-path/index.html","4efac557634aa9d69019e27d9159a9d0"],["/sw-register.js","01dc6b82438cfa43f1e345085d3b3ac6"],["/tags/DP/index.html","fdcced3dc1922dd5cc7ec78a6cbc6d47"],["/tags/GSS/index.html","5a8ae6808289be7726a687c887225acb"],["/tags/HEXO/index.html","085631ac5300f8d1a0ce2345378c6efe"],["/tags/OBS/index.html","a926a5e4686280597c4fb52e408698e0"],["/tags/STL/index.html","5165e7b2657acf241356dfcc2aff60bd"],["/tags/Template/index.html","7cd85d7ed4e0592c51abfcca93f7bf38"],["/tags/Trick/index.html","81588ca612ea6d08314668aa7ad1a196"],["/tags/VPN/index.html","48946122e91a7037a3ddadc5137a37b7"],["/tags/VPS/index.html","4aae8e4cab6afa650df3ca8ae2362f6b"],["/tags/buzzer/index.html","b75e2c7a73bc50de1941e2b9dee671e5"],["/tags/contest/index.html","7bbc9a2639786ef69c1eacedb629c6eb"],["/tags/index.html","b89a1fb194675867e0318ccefb6e0b84"],["/tags/segment-tree/index.html","a115b2a0bb30ec4aa5fcdeaee03e21d0"],["/tags/倍增/index.html","8cd1ca20d30ad47ef7c7927f2222512b"],["/tags/并查集/index.html","33e6920213031e930ef1e91d8891548e"],["/tags/最短路/index.html","b0600759e96d4eab2c3548872f6cfbb8"],["/tags/生成树/index.html","fb1cc111c78a4d9ecc50f96dbf80c11d"],["/tags/贪心/index.html","467eb5a2b68eb596db319972a0e0cb41"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","3784cf311e2f44901ed4141cf60178cd"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","8141b39c92aa4f3382d14fb8539e44c3"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","ab2187004872ca764f60cba25cb90cf9"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","ebbba5ec74b17442dcfb06aa5525c62d"],["/vultr_ssr_vpn_buildup/index.html","dc28973f0bb8c4750162c95ac285c558"],["/webboard/index.html","4a3bc13002c47ebcfe5d458ce7523fcc"]];
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
