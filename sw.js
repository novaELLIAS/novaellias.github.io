/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e821be8b5a810439cd058891bbfe2351"],["/CF372B-Counting-Rectangles-is-Fun/index.html","7086bd97ff4287f1c2062c18dbff18d3"],["/CF749E-Inversions-After-Shuffle/index.html","d2e30b6bfa68de980db04b02ccf1703b"],["/GSS1/index.html","3bcda38813bed2377a61ea4084579d12"],["/GSS3/index.html","ef53b7804088f060938e3c47045150b2"],["/GSS4/index.html","b162cea683e2cce22481a50f4537d12d"],["/GSS5/index.html","edf315eaaf1b2d6dedb12b8269f985cc"],["/Luogu-P1654-OSU/index.html","7770044a0f56e5273c4cc545d1b1d846"],["/Luogu-P2899-Cell-Phone-Network/index.html","8bf0668f2c980fc2185d18b69bae97d8"],["/Luogu-P4289/index.html","b9a8e7dc5efa6c6e7540c474050abb85"],["/Nescafe17-Defenders'-Challenge/index.html","2a8bbef451d03e18aea552b6ec2277b6"],["/OPTIMIZE/index.html","b3b93b4996808831af11b8d3e07f00fb"],["/SP2885-WORDRING-World-Rings/index.html","07e12de2c60b0bc25371a070079c5e97"],["/UVA1714-Keyboarding/index.html","01b43238e336856becb1dd6961828c91"],["/about/index.html","879893f2eddd9c59a43da45eb545e993"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","db44e288a0bb7a75503dc288c88e6c9d"],["/archives/2017/11/index.html","9a68ad0fc72b572edb31806de54876c6"],["/archives/2017/12/index.html","dbd6191cf4531924a38e482698d37401"],["/archives/2017/index.html","5081df34bc5114c4b158f8b1e09a481e"],["/archives/2018/06/index.html","4ae1a9e225a842a16d6b056f288f2e0d"],["/archives/2018/07/index.html","ac8059563f1c53b631dbf4a727ecedf6"],["/archives/2018/08/index.html","be9f2e44ad91050a87d2093b76e57a43"],["/archives/2018/09/index.html","d17a387eb790c1f100be15e9a2601872"],["/archives/2018/10/index.html","5580cd3e8467cef85d551addd5a1e0c9"],["/archives/2018/11/index.html","4d30170bc50b80789633baf2a2536d7b"],["/archives/2018/index.html","6794182abf67bd151f61ca92849f26fb"],["/archives/2018/page/2/index.html","d35ee9060eaa2619441a8cf48f12b848"],["/archives/2019/02/index.html","dcd67938be478e68e362988697236733"],["/archives/2019/07/index.html","b54d330bbff9b4ba2fda63ecd5a7a96d"],["/archives/2019/index.html","bc7311af336008e030222b06898b364e"],["/archives/2020/01/index.html","02f888fff268fa97f257c9103bb20923"],["/archives/2020/03/index.html","b42b0ab660723c5a08d33c4e34415754"],["/archives/2020/07/index.html","62cb5d9a8fd9fe4d568282dba5f39280"],["/archives/2020/08/index.html","16f48f9041b38a51ceb9a4c377c13d00"],["/archives/2020/index.html","3cd25de840ddad6f30347d55577c9843"],["/archives/index-1.html","aebed1a683cf801ef5c6705f36c6720a"],["/archives/index.html","bf54d5e6466609bda2ec1725941acad0"],["/archives/page/2/index.html","52ce760ced8dcf9d12b8289a48330c6e"],["/archives/page/3/index.html","52ce760ced8dcf9d12b8289a48330c6e"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","56fa2713bc7466d91226a1e32cd0f94f"],["/buzzer-define/index.html","5e944f3d2ad257d2ab64d188cdf086f6"],["/categories/HEXO/index.html","6372b3c6c6a27a0785cf6f6a64af02fd"],["/categories/Olympiad-in-Informatics/index.html","4b06675df3da8824bc232ce43bc04be1"],["/categories/Olympiad-in-Informatics/page/2/index.html","bdd84db3e6d342797b8fb0d3dadea574"],["/categories/Trick/index.html","dceee443dd9f5c74e57e2a14f18fa519"],["/categories/VPN/index.html","990b204f68acac4a1ca1203ba048a964"],["/categories/buzzer/index.html","fa9ed2547acc024c71cb74e90b23c471"],["/categories/index.html","3708967d564bc376114ec1c4eccf422b"],["/categories/memory/index.html","8277a946dea9a3c510368542a303fa0b"],["/css/style.css","e834c077e985a43bde5c444c49831b29"],["/essay/A1/index.html","36a4d090925eebb7c1bd143a9d7cda0a"],["/essay/A2-letter-showing-thanks/index.html","96f011a48e5caaa601eb79f23371c8d3"],["/essay/A5/index.html","7882dd503fd5525db7188f494c2340e1"],["/essay/CH-wangke/index.html","7fcb42a7e89d5c6d5b86c7c2804f2c22"],["/essay/EN-after-class-activities/index.html","f5b6f1afc1c7231296f3efbc16fac61c"],["/faioj0101-leftist-heap/index.html","bf56b17def3750843e29be8fd71d5734"],["/faioj1499-qpow-fast/index.html","9f1127f97fccb37b6e14e30c568d20ec"],["/friends/index.html","e1657fbf409de38e016e61d77178e018"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","d17b999a3421280da8ee9c47adb06bce"],["/hiddenlist/index-p.html","37ce16fce0e3bd72437230f148e72ec6"],["/hiddenlist/index.html","48ef2dd20c216f46201d995471c2eff5"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","7dc4610ad0e8b9ba2eb28ccd96b71790"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","b5bfb94cbaab9841bd79ea0d9c3fd2d1"],["/luogu-P1967-noip2018-day-1/index.html","90334cc0bced4ea843d6996c1c207d20"],["/luogu-segment-tree/index.html","1d2110a0d6bf9f51baace8fc99eb2dde"],["/ncm_unlock/index.html","6626174d51bccbd6ba4d4472d9c7bab6"],["/obs_internet_class_fishing/index.html","8f7bdbeeaff52403a0d79cf660c81857"],["/oi_history/index.html","afa813997be25b8c8d862d69ba263d3d"],["/page/2/index.html","f8024a6b56e5dca8a595ac36d5f3a31e"],["/page/3/index.html","79ad3c596493d547d8fd50796ab10b53"],["/seg-tree-namespace/index.html","0eb5701c65a5c476100cc5ba8918655d"],["/shortest-path/index.html","50e6fe7944de02d5fa433d2bc740ade4"],["/sw-register.js","0cf7dc061914cada119c4b2fdc2a20d6"],["/tags/DP/index.html","e7f7a95a81f338b4c9478f7a2930d310"],["/tags/GSS/index.html","5304a58f22522a83c007b38e874ba7da"],["/tags/HEXO/index.html","a3cf92df7cf2d0c83ecfa08910d320fe"],["/tags/OBS/index.html","99241bc6500f311f4939a3a9dc36294e"],["/tags/STL/index.html","dad7b304d6fb98ac609bd4c6e877b9f1"],["/tags/Template/index.html","c292cd63759dbfa034ebc244f9963a8a"],["/tags/Trick/index.html","063cdbaed4f59850b9521c5c42e731d5"],["/tags/VPN/index.html","82bf99628d8ecd3433744b67424ee493"],["/tags/VPS/index.html","98aa15697f8351c50ef0afca7628b39d"],["/tags/buzzer/index.html","ce3f5dd6e4d56430da1e6b504da4e8e9"],["/tags/contest/index.html","36a010684b478758cf60ffe71af4bd6b"],["/tags/index.html","ed79a2ecbb7fe04db962c9c8cdab8d83"],["/tags/segment-tree/index.html","7fbe78e621ab3e849f3fc5d67d8a7289"],["/tags/倍增/index.html","ca5ea2b6cc41a34f0e47cc85fd041ad5"],["/tags/并查集/index.html","b237bb8b4bb70a3f1271ba04920b0352"],["/tags/最短路/index.html","c6bd6a99ce6c95d33716fe2d8db71fed"],["/tags/生成树/index.html","ba227772a50652be9aae623b8ef06181"],["/tags/贪心/index.html","110c3682f5f84c545ebb05639bc576c2"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","b8dd6c7f0f40ed203950fc1f9743563d"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","2719ecbd46dff2b5375132df74343d9e"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","8234a750d3a691e4c27df794ab265324"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","f28cefb42fae5c74d16c8ea2ed6f84b2"],["/vultr_ssr_vpn_buildup/index.html","c088094fb972bffdce6225982f438bb6"],["/webboard/index.html","b7d0c478ecd47d9d64c69a6e2bb0f1fe"]];
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
