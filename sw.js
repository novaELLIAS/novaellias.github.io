/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9c9592a18ca5d76b263f3d70fee0fb2f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","439cc225e27f423d99eb7100174bad56"],["/CF749E-Inversions-After-Shuffle/index.html","1ecf16f96aadfed62ca308abd0802cff"],["/GSS1/index.html","579187a2d9876de73a36544e6b60ab6c"],["/GSS3/index.html","1be9ef3e014e1b3266a280612ea8f4d5"],["/GSS4/index.html","4e578fdc414369db450530c0c78fb684"],["/GSS5/index.html","e3329ae8574c5b2df1aa306a08baafd2"],["/Luogu-P1654-OSU/index.html","969df44943a27483a2b561fe3096f727"],["/Luogu-P2899-Cell-Phone-Network/index.html","bd9ac31ce24f092fb10c6464b141cd6e"],["/Luogu-P4289/index.html","6fe203728a290a06c41ba849f5ba6471"],["/Nescafe17-Defenders'-Challenge/index.html","70e5219e0c1563e02fccdb245fbbc174"],["/OPTIMIZE/index.html","143c916f49554e2556b678f294acccb4"],["/SP2885-WORDRING-World-Rings/index.html","b785d0cf986fd55450fb1770e8c8dccf"],["/UVA1714-Keyboarding/index.html","04597a7f4e28a733bd9fa4c0e936f761"],["/about/index.html","d3d2a91848f7c663807fef57c08b66df"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","101496ba143edb9c432e7edfddef6b45"],["/archives/2017/11/index.html","20bb5dd40c932470a388023336f0189f"],["/archives/2017/12/index.html","40e6abb627dbc9b607bad99563d32aa1"],["/archives/2017/index.html","8dd3557e07ac78a4463f5ac8c226d8e7"],["/archives/2018/06/index.html","f9cf1fd5b6f3a0c2c8e0412a7662ba03"],["/archives/2018/07/index.html","5771ca5f1eb0fc661931e78b6ae3b46c"],["/archives/2018/08/index.html","01e9022a700d5e282ddd1fa2c68dfb3b"],["/archives/2018/09/index.html","950a29f1ae1755fbd737f01784645482"],["/archives/2018/10/index.html","931c8ba9fab493fb25761610e31997a3"],["/archives/2018/11/index.html","b58f58f7b4ddc944de5148bf37762bc5"],["/archives/2018/index.html","419a10203bef92d7fb712aadb5aac5b9"],["/archives/2018/page/2/index.html","79ad73ab14c048e6a2356d6f0c529974"],["/archives/2019/02/index.html","1dcf7abeed4a977fda7fb7935758f03b"],["/archives/2019/07/index.html","c1fccf9db368fea49e85e6e99f2a15b0"],["/archives/2019/index.html","4e9cdc11017f0b8ded6c81953571fe0e"],["/archives/2020/01/index.html","571c8faf34aa6ccd1023d7e6dd35efd3"],["/archives/2020/03/index.html","cfb43e4c4f0b2add1087e54e40e87cbf"],["/archives/2020/07/index.html","8a3aba282eb2e7327e398638b32493bd"],["/archives/2020/08/index.html","37522be06a406f2d1be717d533ea2fb6"],["/archives/2020/index.html","02cc26c3f8def09e76eb88e40c73ffc2"],["/archives/index-1.html","aaadf5da4839ccab534cfb39bfe4c344"],["/archives/index.html","5d7094ecfac2647fa4b1cf112325bb7c"],["/archives/page/2/index.html","4d7e7affe2ed88da05602d44fb665cc0"],["/archives/page/3/index.html","4d7e7affe2ed88da05602d44fb665cc0"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","89ff95450da3868fde22a40d2b3470a8"],["/buzzer-define/index.html","3565d32d5b42a7c0c5a14b78a4c61b5b"],["/categories/HEXO/index.html","3e8040d284764d757874061fede30a3c"],["/categories/Olympiad-in-Informatics/index.html","d9ce656601975fdc142a496a9113f320"],["/categories/Olympiad-in-Informatics/page/2/index.html","e182b37089aad7096d11202aef50b4c3"],["/categories/Trick/index.html","297348a7b2f7b845675e019504c60092"],["/categories/VPN/index.html","f2f72a5bab5c64f994c0ac3dbffb7a40"],["/categories/buzzer/index.html","8fe242dbf09fa44322137c0a7fe7c460"],["/categories/index.html","1b6a7ee549e319b164cb38a2fdf4bff2"],["/categories/memory/index.html","9d36b1b04f6a7354355ee3528bf5896f"],["/css/style.css","e834c077e985a43bde5c444c49831b29"],["/essay/A1/index.html","a521de21e638812a556ba289764d0f11"],["/essay/A2-letter-showing-thanks/index.html","1f5dcfddcf279f90e76f0d08a384447e"],["/essay/A5/index.html","20c3973365f82b323784d0ae7ba9da66"],["/essay/CH-wangke/index.html","62366c2096a18f9051fbd7c323fef527"],["/essay/EN-after-class-activities/index.html","d042ae1576528102fe350a51f1dbcf71"],["/faioj0101-leftist-heap/index.html","86dac52905f68622be6f7d2abcc37a8d"],["/faioj1499-qpow-fast/index.html","bf0de05aaad9cf325e2d1bb52eb93910"],["/friends/index.html","3d3dd1e4f3f3de568598c1b682988f46"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","2ed4d10fbdc02e406e5d7faf475a2f82"],["/hiddenlist/index-p.html","d7fd1a7f1ed6955332b880901045ef43"],["/hiddenlist/index.html","ff784c839a9d3cdbbd46d5609e35d836"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","8ac48e8889fc419f230fe3f597df3c16"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","dde71e8df50b198a2de09189885eb9c0"],["/luogu-P1967-noip2018-day-1/index.html","35996aaf0dafc6ffaefff6d776fe006a"],["/luogu-segment-tree/index.html","9ac1db383b4f2b2d7dc81d94369efdb6"],["/ncm_unlock/index.html","27e47cc9368554eaaa09ba209ed81b1c"],["/obs_internet_class_fishing/index.html","34a3a22e32eceaf27109d8f59aaf3fd8"],["/oi_history/index.html","7e384af697131efa5db3371e606ccc36"],["/page/2/index.html","6ee1e4b53a844e5a1139a43e2b8f0864"],["/page/3/index.html","703f3c85fd42759a20ef1a2131408aff"],["/seg-tree-namespace/index.html","954898a8013787634ceab5e9c00b0b14"],["/shortest-path/index.html","1b66d6a1cf25962f336c3f82aeb80ec2"],["/sw-register.js","188c71ec3ad925bee5fac45ec708adb8"],["/tags/DP/index.html","d7731456a653a430c53b783bd1734852"],["/tags/GSS/index.html","2a7e56559a2f6973b15f100f692228bb"],["/tags/HEXO/index.html","f55f2a0b1a4744f8d211cf0e1b365c1a"],["/tags/OBS/index.html","f84dc26ec9ad8ab7bbc23bf6bda643bc"],["/tags/STL/index.html","5b99dff07886b139dcf0f8e36596d0f5"],["/tags/Template/index.html","0e24641126ebc89d5f53ac1386683212"],["/tags/Trick/index.html","d3548fdd6685747f1181b218f4af9fb0"],["/tags/VPN/index.html","f6efb16abd712dd92f8de44f6b6e3959"],["/tags/VPS/index.html","4638b0509c69f47a143061b088c4b0f4"],["/tags/buzzer/index.html","3117fd0a3deeb89b1a0bb1a7027ad01e"],["/tags/contest/index.html","7b7863fe64fa9c44feaf7b24d6da5e00"],["/tags/index.html","7d32bb53b99ddcea40903e9f193779ac"],["/tags/segment-tree/index.html","b64554485d504408047759c198f80697"],["/tags/倍增/index.html","40baad55eee5462155b6eaa3c85a4f2c"],["/tags/并查集/index.html","1e7c52d7eb43b2cc552e267b7d505103"],["/tags/最短路/index.html","d45b35808be3531765f82ac9d42a43a0"],["/tags/生成树/index.html","76cfe3ed081ed56f89e6c55c6cc92766"],["/tags/贪心/index.html","3a5b974f16f397d27bdd2dc7e6c58a32"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","201d7358918aea5a9e6c91868b1e5bb4"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","1732431a913110456b0a89e1a9e3485b"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","a7b97eaead965f02fd86cd876a736ae8"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","b7022c31eab5f39d421666df0aa34f6f"],["/vultr_ssr_vpn_buildup/index.html","270599f0ac97c210cdf3f2d43e010e8b"],["/webboard/index.html","257ead1420bdd79abfe4be8f2c66ed19"]];
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
