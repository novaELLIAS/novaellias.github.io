/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","caa018b3fa9629b89da09159004d3ffa"],["/CF372B-Counting-Rectangles-is-Fun/index.html","282c3ca84427caa8341ed3ed4040e218"],["/CF749E-Inversions-After-Shuffle/index.html","e4042ddf94720a768fcd68d08aa7fb73"],["/GSS1/index.html","aadd5447c6603e3ddb01ed619ac58537"],["/GSS3/index.html","95f6a8c2ed2bdffebae1388b0b039eeb"],["/GSS4/index.html","e8ae03dbae9cd92b62a3f0117ed2ebb9"],["/GSS5/index.html","8f926096f16fab04d445ffc9f0659414"],["/Luogu-P1654-OSU/index.html","96d8fc48a72ad3f900301e693bc07bb5"],["/Luogu-P2899-Cell-Phone-Network/index.html","32c31acf5b69187a24ed3fdee2a0eba7"],["/Luogu-P4289/index.html","98bf2937c5878b4d66414645ee4cfae1"],["/Nescafe17-Defenders'-Challenge/index.html","65257921cce0b8744331c283653ee195"],["/OPTIMIZE/index.html","54b724821fd087bd80e1db72c601cde5"],["/SP2885-WORDRING-World-Rings/index.html","32c4b1a9e69b6c07c3687de7cf533446"],["/UVA1714-Keyboarding/index.html","42f07bd4a3c710ec01a95788b9ada4b8"],["/about/index.html","581ec1f839a966e889e4454a061cc979"],["/aboutme/assets/css/fontawesome-all.min.css","e2788bc029a8b2dcdb70e7845c67806e"],["/aboutme/assets/css/main.css","7630f938dd935252ddb443a5db5e6417"],["/aboutme/assets/css/noscript.css","4a6c7fa3df238a891f5f049399a488fd"],["/aboutme/assets/js/breakpoints.min.js","d2a44a985b34927fd6eaa6d2646bd0fa"],["/aboutme/assets/js/browser.min.js","10ce20feb3ee9e515d601b8ceb8aa3bb"],["/aboutme/assets/js/jquery.min.js","220afd743d9e9643852e31a135a9f3ae"],["/aboutme/assets/js/main.js","6b2395e829388abe6721560212550b76"],["/aboutme/assets/webfonts/fa-brands-400.eot","03783c5172ee1ad128c576bf88fac168"],["/aboutme/assets/webfonts/fa-brands-400.svg","073c2f3ce60eaf69cc2767ef3d989078"],["/aboutme/assets/webfonts/fa-brands-400.ttf","ed2b8bf117160466ba6220a8f1da54a4"],["/aboutme/assets/webfonts/fa-brands-400.woff","fe9d62e0d16a333a20e63c3e7595f82e"],["/aboutme/assets/webfonts/fa-brands-400.woff2","7559b3774a0625e8ca6c0160f8f6cfd8"],["/aboutme/assets/webfonts/fa-regular-400.eot","fc9c63c8224fb341fc933641cbdd12ef"],["/aboutme/assets/webfonts/fa-regular-400.svg","8fdea4e89ac405d9f8db327adb331d8d"],["/aboutme/assets/webfonts/fa-regular-400.ttf","59215032a4397507b80e5625dc323de3"],["/aboutme/assets/webfonts/fa-regular-400.woff","e5770f9863963fb576942e25214a226d"],["/aboutme/assets/webfonts/fa-regular-400.woff2","e07d9e40b26048d9abe2ef966cd6e263"],["/aboutme/assets/webfonts/fa-solid-900.eot","ef3df98419d143d9617fe163bf4edc0b"],["/aboutme/assets/webfonts/fa-solid-900.svg","b557f56e367e59344ca95f9d1fb44352"],["/aboutme/assets/webfonts/fa-solid-900.ttf","acf50f59802f20d8b45220eaae532a1c"],["/aboutme/assets/webfonts/fa-solid-900.woff","4bced7c4c0d61d4f988629bb8ae80b8b"],["/aboutme/assets/webfonts/fa-solid-900.woff2","b5cf8ae26748570d8fb95a47f46b69e1"],["/aboutme/images/bg.jpg","b7252cde93b54af29948d8473f1ef7ba"],["/aboutme/images/gallery/fulls/01.jpg","a040a7addb43b94d557c7a55462fc27b"],["/aboutme/images/gallery/fulls/02.jpg","0e1a3d21b8a021ab8b874ed1f19a134e"],["/aboutme/images/gallery/fulls/03.jpg","966106e102bf78135c1eb375a103a983"],["/aboutme/images/gallery/fulls/04.jpg","ee80b6a64a04fed9911011c8e42e9f61"],["/aboutme/images/gallery/fulls/05.jpg","15a3416a73a2a769c9bac1c38ec2e907"],["/aboutme/images/gallery/fulls/06.jpg","54eca40efb846d982a7293ee751383ea"],["/aboutme/images/gallery/fulls/07.jpg","c0b2e617e690ac23b424d134bd290217"],["/aboutme/images/gallery/fulls/08.jpg","4f52fdbe29d39092c8de949f4901c38a"],["/aboutme/images/gallery/fulls/09.jpg","44e38f5066cbf7dccddc6e7cf67cdd04"],["/aboutme/images/gallery/thumbs/01.jpg","bbb7ab004b57d0951702acde205dcfcd"],["/aboutme/images/gallery/thumbs/02.jpg","b3069b86c0637510d55d57b740494afd"],["/aboutme/images/gallery/thumbs/03.jpg","f0425f284da088a74d2db6faa85788c3"],["/aboutme/images/gallery/thumbs/04.jpg","d8f83a86a885c9e6d8847ded22fb1936"],["/aboutme/images/gallery/thumbs/05.jpg","40cdb82a161adbd6b870775c6ae854b2"],["/aboutme/images/gallery/thumbs/06.jpg","07d168628e834dd07bc55e5526074c8a"],["/aboutme/images/gallery/thumbs/07.jpg","4bde372f373f959927bc547e560785d7"],["/aboutme/images/gallery/thumbs/08.jpg","36f112c6bea6696dc11dc0193d0452ce"],["/aboutme/images/gallery/thumbs/09.jpg","9ad3b59367035ea50cd2396f7b7d503b"],["/aboutme/images/overlay.png","63ef37a479f43e2feaa9f9e7d0a46611"],["/aboutme/images/pic01.jpg","37c73596fbb78433fbc531c484fb32da"],["/aboutme/images/pic02.jpg","519f758cd90f8c2bdac68d0ec4b976d6"],["/aboutme/images/pic03.jpg","0a40445f759dd95c98b9d5039be0492d"],["/aboutme/index.html","42aebc1fac02b51dbde17d2bdb54d5ef"],["/archives/2017/11/index.html","43d8f5d5abe8e93910de6c628c83cb5d"],["/archives/2017/12/index.html","440c8ccc2aa853481e1d16c197eea06c"],["/archives/2017/index.html","575dbcac59c9e9397e10464d557b96ac"],["/archives/2018/06/index.html","2d6dae56a2ef0d994ab1fd4194b57b8f"],["/archives/2018/07/index.html","3deb42d8f709e26abc42133dc414d23c"],["/archives/2018/08/index.html","545983124cf966bb5801a3fbff14da50"],["/archives/2018/09/index.html","7f476f21f03ece2633e120a42104497b"],["/archives/2018/10/index.html","225b5c50006b43159d1b6fc71469b283"],["/archives/2018/11/index.html","955b06776e33244d54ae16ba92e68dde"],["/archives/2018/index.html","0f336970830c2a1b81ac0e314795bb3e"],["/archives/2018/page/2/index.html","a943ab2aaaff2dd2cc0dce5650a85f5f"],["/archives/2019/02/index.html","4097d67a71c121f2246943ec2147e7ec"],["/archives/2019/07/index.html","4cceeae1e0b7f174902d46539837e29c"],["/archives/2019/index.html","09f74a39f0e70ec5fbca6b97c6e112cd"],["/archives/2020/01/index.html","8e04416f40fc2e8495bbda89aef3f8fb"],["/archives/2020/03/index.html","2f4a41239a683472661d94b40f6e12d6"],["/archives/2020/07/index.html","54e04d1796bb0ff53d481b41b32b26db"],["/archives/2020/08/index.html","79e2cf7bc07fb909d121a29f54518933"],["/archives/2020/index.html","0dfc0b695e58e24d9cc682d5b2644234"],["/archives/index-1.html","7ed6e290c54398f176c36dcd1a0a0955"],["/archives/index.html","f26297891d7a79f4eeaaeeeb2df947e0"],["/archives/page/2/index.html","f26297891d7a79f4eeaaeeeb2df947e0"],["/archives/page/3/index.html","f26297891d7a79f4eeaaeeeb2df947e0"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/buzzer-define/index.html","aed99f6081d6adab6e8eb5b214c5d79a"],["/categories/HEXO/index.html","3577c53b26269f5ffca095a17583aa05"],["/categories/Olympiad-in-Informatics/index.html","25ca6f60e0f2dcbb9873b58c474a6e46"],["/categories/Olympiad-in-Informatics/page/2/index.html","4c965f7100b8f4b509e5af122cb68f0c"],["/categories/Trick/index.html","2cd470769be4857cf83434b91b0e2d00"],["/categories/VPN/index.html","c1dcb9fb8d1ca2497bfcd3c13d80e1d0"],["/categories/buzzer/index.html","9e5ffb8adb49bb689163c0bc8093864d"],["/categories/index.html","973ff877adbb21c59a88df808bea869e"],["/categories/memory/index.html","23140ed9f66274c6a8f02da773a40016"],["/css/style.css","3ab3233a8d067eb9e1109da63e76fb94"],["/essay/A1/index.html","c8f4ede24237d9e597dfa93420ed1f97"],["/essay/A2-letter-showing-thanks/index.html","99e77a23e7f2edc3f46ab01083c2ddd5"],["/essay/A5/index.html","d52908446e5b28b5d6d398eb6a809e4e"],["/essay/CH-wangke/index.html","ccde9b077d3aee616b821a91634487f6"],["/essay/EN-after-class-activities/index.html","80946d919f8135f7cf6c56b06184d82e"],["/faioj0101-leftist-heap/index.html","c5499a669c626d98251be8172dbb04ae"],["/faioj1499-qpow-fast/index.html","b3e90615f99f0bfcbcc55b515bf3efd1"],["/friends/index.html","9ed98239cde57a7f88f8f84f3fa91f36"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","368111eb5fd6ce960d78cb0776013dbc"],["/hiddenlist/index-p.html","63f8fbf7ee443c3216821fd149a3a4ce"],["/hiddenlist/index.html","a2c4e3e6e6c8090ed56cc8c425ff97d6"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","9fcb62f5c7f3c965c76e19be81c7bb04"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","76aae13311ada99019b6c5fb91ff375a"],["/luogu-P1967-noip2018-day-1/index.html","138fcef3c0fa929f3390ecd2ed7eb895"],["/luogu-segment-tree/index.html","c3f91ca3c1ebf34430eb05927c032613"],["/ncm_unlock/index.html","724af23d9f13c81b70508afc7268faac"],["/obs_internet_class_fishing/index.html","ae28206f563363bd9f93c37ca7e75b21"],["/oi_history/index.html","d5421c42995727514166d6ec8c8771f5"],["/page/2/index.html","0b6f3ae668e25f2bc13b786de0ec6fae"],["/page/3/index.html","af2f3b8fb6e203560460d7f3d44b8fce"],["/seg-tree-namespace/index.html","05fb080a3dd0a540a1418f0d8b9be5cb"],["/shortest-path/index.html","3246cfdf03d9cc0d18117e88cadda21a"],["/sw-register.js","d7db078c751386f9f3291ab1b1969555"],["/tags/DP/index.html","dd293c8e72925bd6a9f36c4503679adb"],["/tags/GSS/index.html","33c75d7beaa78e68977a2a2af2c3ddde"],["/tags/HEXO/index.html","18a1b5985793b95a1ccd332208840c66"],["/tags/OBS/index.html","138338dd76bae034882d73e5dc8d60ac"],["/tags/STL/index.html","c844e59c4100ce2b9a994f8207c5ae13"],["/tags/Template/index.html","508ed59a2bf8cd9ab2506ca5316f2fc6"],["/tags/Trick/index.html","4fc09aa2184b558a908bcb70dcbb4b48"],["/tags/VPN/index.html","603ca940d2d437f00fc66e29020b5026"],["/tags/VPS/index.html","5ba64caf648a0b7bf3c431c0b7e1d8cf"],["/tags/buzzer/index.html","4039bf0d1ba92884d5d224a3fe13304d"],["/tags/contest/index.html","ae84252d0f9f4d2fc436a2ab8de2c4db"],["/tags/index.html","2f0ee0660e51f4cbc70e0c76bb3375f3"],["/tags/segment-tree/index.html","777794e4ba8d141df8248734cb80b2ef"],["/tags/倍增/index.html","f152c89a279dbafe64233003e32edf3f"],["/tags/并查集/index.html","22cb34886d9fd88e59a74305fc1201e5"],["/tags/最短路/index.html","c68d5a24f1aa63499ee231e6b0a6a4cd"],["/tags/生成树/index.html","2697041bbddf6c877a09671fe40ecd84"],["/tags/贪心/index.html","d3760d9bc0f927429f918ba5624b85d1"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","15fc29b9fd52d2678cc6e0ccf0bf51a0"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","dbd1b1695ac80faa9849a9c494843d32"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","86b7a69342ff47025b64cc8f8695b93c"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","2a1191abe176dcbce43d239b08e0c6b7"],["/vultr_ssr_vpn_buildup/index.html","5327b75e39a95523fe2612e2b71fbeaf"],["/webboard/index.html","a8eebb0fbde4d9fea7e3d32834c6f329"]];
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
