/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a7073a36622b24d77a4e29f37db978f7"],["/CF372B-Counting-Rectangles-is-Fun/index.html","a422215f84b194ce977bf7ddd08b1b9c"],["/CF749E-Inversions-After-Shuffle/index.html","e361b85ee7beb35894bbbddf00af4c71"],["/GSS1/index.html","0e2aeed17d2bdf879eafb1f4281bc85c"],["/GSS3/index.html","3b77a2c59a816538e42f59163a6d8580"],["/GSS4/index.html","72bb8a293ccd8125bcd0c0377fa8e4e7"],["/GSS5/index.html","2f65e488f15e0596f533eabd62878da2"],["/Luogu-P1654-OSU/index.html","b6d828b902832c8995f752ffe5cfa840"],["/Luogu-P2899-Cell-Phone-Network/index.html","54cdde50d3896c7e8473d300df3a0ec3"],["/Luogu-P4289/index.html","966d57e458de36dcf7efc5a0704fbb95"],["/Nescafe17-Defenders'-Challenge/index.html","8324081e9acdc2a9927da236301f5d7a"],["/OPTIMIZE/index.html","ef9f8b1d2a51d10b268d01f632e78f0c"],["/SP2885-WORDRING-World-Rings/index.html","1da67419baa94a5510b9728311ec17c4"],["/UVA1714-Keyboarding/index.html","f70fdf235708592948f71e3fcc40fe3b"],["/about/index.html","5da53994a2fd95dc6d32077311c1870d"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","76e51a0ce280bcb6d86384714eda8314"],["/archives/2017/11/index.html","0a928d96459053ba43bb07559fb3d940"],["/archives/2017/12/index.html","711d682c4cc1f378df751eaf7040b000"],["/archives/2017/index.html","16a88527ab030e0438ccec701e68f7c0"],["/archives/2018/06/index.html","bafa921efe45dbe261135cb4daf5232d"],["/archives/2018/07/index.html","3ef912e6e29ac1fcb69ae21aa95be422"],["/archives/2018/08/index.html","ef3e16e62e55ae8835c677836770826a"],["/archives/2018/09/index.html","0fd8640e0789f4c9df5e84d125570106"],["/archives/2018/10/index.html","65eee09218766b743aa3b4511b8badf0"],["/archives/2018/11/index.html","5ed91a36b2ffe64eeab289630062613c"],["/archives/2018/index.html","4939f7a3845cd0c3c7a1d6847ab71986"],["/archives/2018/page/2/index.html","57007775cc471f47d9c3e50ee54decb8"],["/archives/2019/02/index.html","016b3a5180f5e39a623aa6f97d3b635b"],["/archives/2019/07/index.html","04905ac70e31cc82be61e7c6d3060722"],["/archives/2019/index.html","6e72bd24c0ec8242c5a32ec71270140f"],["/archives/2020/01/index.html","f1f52a3e51af9e2d02242eee02c1054c"],["/archives/2020/03/index.html","3e9960a8e0a79fd08b1c08d844cdcaf6"],["/archives/2020/07/index.html","abc35fc15f7b41bf34157a8d9a712a58"],["/archives/2020/08/index.html","75d8d507e39f2c8b2601ac2b218904f9"],["/archives/2020/index.html","58c6597d7f5b1226dc2f59b55e7c95e7"],["/archives/index-1.html","44fd62bb7eb76621a6d245e82b261d80"],["/archives/index.html","eee1691ffa0021e9bc6cba37c4677685"],["/archives/page/2/index.html","eee1691ffa0021e9bc6cba37c4677685"],["/archives/page/3/index.html","eee1691ffa0021e9bc6cba37c4677685"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","5bad0b5c926d3f03e79ebe299d6eb00c"],["/categories/HEXO/index.html","817de9f22e5853f972b810ad5b277b92"],["/categories/Olympiad-in-Informatics/index.html","f8b98b9804868fbfa6b3c6759a2154d4"],["/categories/Olympiad-in-Informatics/page/2/index.html","2dbd757fd412c88f2b39bb1e1958234e"],["/categories/Trick/index.html","b646fd9be72833500bee88689105b370"],["/categories/VPN/index.html","e271dece86b1b9da1ffb78b472249542"],["/categories/buzzer/index.html","c29db46c78ba41620dd2e5f11eac450f"],["/categories/index.html","319937a392ca5f448599e7ada6a8486a"],["/categories/memory/index.html","b14bd995d746ddda35ca5fdde4204951"],["/css/style.css","3ab3233a8d067eb9e1109da63e76fb94"],["/essay/A1/index.html","1fbd09fc8ba5d784df272f4fb5e2baca"],["/essay/A2-letter-showing-thanks/index.html","78f527298a72fa75dcd7e6fa313b6772"],["/essay/A5/index.html","0b1f4c0329adf8233fe127e7b0557097"],["/essay/CH-wangke/index.html","8653201f7da342eac83a4af00d45760d"],["/essay/EN-after-class-activities/index.html","58ff43775fb2be554f57b0609e6bc47b"],["/faioj0101-leftist-heap/index.html","bd20bf93f40f8f6eed181e91c6c750a0"],["/faioj1499-qpow-fast/index.html","903e37abfd8d331778bbaa95a7f6558b"],["/friends/index.html","b1cbe66c1ad40015c633dc450a1b64ba"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","0825780a07e8ef357f679c11bcff2cea"],["/hiddenlist/index-p.html","c25a6b4837d1e00581bf90ed896ec5f3"],["/hiddenlist/index.html","3ed7aa8c9dfe58a8c7c1623995372334"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","70fc9055b7a03c452f3cabb12dd98820"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","45923d74faf48f4b15246efc8e2d1d32"],["/luogu-P1967-noip2018-day-1/index.html","b76f6063d4d73981e4e24902ffb146e7"],["/luogu-segment-tree/index.html","cfb762c1c0c7bb9ba4ecb10907c4738f"],["/ncm_unlock/index.html","be6392ac764c5272dae0f84eb37593ba"],["/obs_internet_class_fishing/index.html","ca683ce37698bd081af4bcd8e3694834"],["/oi_history/index.html","5be06dd5022ae324771aaf6c2155a7a1"],["/page/2/index.html","287b517e5984d2f54cd2c57c1092a87a"],["/page/3/index.html","59be0ebe9a1072723bfa3f3efabc0fb8"],["/seg-tree-namespace/index.html","69ef2f5c1970cf5d887c15e71dc9137a"],["/shortest-path/index.html","a55eed7a432ec314117f699cc4f58050"],["/sw-register.js","73520be8519bede458fa3174ff9be6f7"],["/tags/DP/index.html","3510be6db4696f5a445430d21390fed1"],["/tags/GSS/index.html","b5ba76cbc58dd80e327d643c1a9764b1"],["/tags/HEXO/index.html","3577f6f607014cc7706bf660f8a1e394"],["/tags/OBS/index.html","dbffef811aa48d16e785b333377bc37e"],["/tags/STL/index.html","01289aea889d341bdc43f72c06f6d881"],["/tags/Template/index.html","d6f6b9b7cb69c12198a705eace65dd93"],["/tags/Trick/index.html","15e0e9c9de085c2dcddb775c9b069849"],["/tags/VPN/index.html","377a42bc88566697c8516bbb9a77c075"],["/tags/VPS/index.html","50ebd81dacfffcdaec848ffdcf7601ea"],["/tags/buzzer/index.html","7445759cc7f27f9917d4aff7420172fe"],["/tags/contest/index.html","157e460a13540c9c6889b7ea800d1b6e"],["/tags/index.html","a8075ce5f0c57262fcf1b3fd2a04b0d2"],["/tags/segment-tree/index.html","05ceee0f6f4321d08c06b8566a7ad3c5"],["/tags/倍增/index.html","a82afcc478b7cb2328fda27657297b11"],["/tags/并查集/index.html","f81c617682a68cd93260dda50d1ddfee"],["/tags/最短路/index.html","a23aa5ffd55665641cc6fed5ce0e85e3"],["/tags/生成树/index.html","a5448850781e600cb758e554465ad0ce"],["/tags/贪心/index.html","20aab8d87af23f1139fa32d67a1d66e0"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","463dac3f31916058093b9776a3986409"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","2fbbc35b5554021100dc7eca8a61fee1"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","e126331c788300d24f57d379a6d7e015"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","1d6e504bfa99e260410b4fc6d9798daf"],["/vultr_ssr_vpn_buildup/index.html","319f2b730322eacf73a4e613fff3e1ab"],["/webboard/index.html","90a993a7d12e442e869cd481406bd795"]];
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
