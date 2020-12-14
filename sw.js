/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","70d52e281581bd015bfbb8bea857aee9"],["/CF372B-Counting-Rectangles-is-Fun/index.html","f66c84bc1dde0c11c27d9a58bc5fbffb"],["/CF749E-Inversions-After-Shuffle/index.html","e5c89affcc95dd23a124b89791e6d0b5"],["/GSS1/index.html","1b9ec2f35a601bc16e781ac36164d961"],["/GSS3/index.html","f2789ecd0e6544a1d5ca75cc867093d2"],["/GSS4/index.html","8ea1e47c1826f4f9012e07b429f0f397"],["/GSS5/index.html","1d19260259b29b4b384b93c622be54ec"],["/HongYanAsstHard/index.html","53367e9cc7f91ca8cb5028be7dd936f9"],["/Luogu-P1654-OSU/index.html","7bb811cb4af4a1472ad495bc99193954"],["/Luogu-P2899-Cell-Phone-Network/index.html","15c2f9e57f9fc012680a5b7c55eb295a"],["/Luogu-P4289/index.html","95fe9279743d2dc540960cfb554cde2b"],["/Nescafe17-Defenders'-Challenge/index.html","c3eed75f3fcf8f73f9d9f2eaeb6a6c0f"],["/OPTIMIZE/index.html","cf9b149fcdff258c570dca0ff428af7b"],["/SP2885-WORDRING-World-Rings/index.html","4b4003221dc7a2f53d289872b8cef6fd"],["/UVA1714-Keyboarding/index.html","81f35be92c6f953b28e21b90adb10579"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","40b6ca6d462367e41d238dc8440ce9ce"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","af2905b6fee18ee9c84e4c46924e0f7b"],["/archives/2017/12/index.html","b735666f4c0c379530267349e3a98582"],["/archives/2017/index.html","227674e5f8580780a3f22a68003f9294"],["/archives/2018/06/index.html","5d97fd3755445aa84bdb30a38116efa6"],["/archives/2018/07/index.html","ad8a06193a2c12b2903526eaae7cc101"],["/archives/2018/08/index.html","a038324f5afd5007aad4c496c1bb8c07"],["/archives/2018/09/index.html","a104c832e4a36938f87fc1e8417d3101"],["/archives/2018/10/index.html","69b90de9918a9097c0abd4364f0732cc"],["/archives/2018/11/index.html","e16b68b4aa4d4cf0942a367ef4795ffb"],["/archives/2018/index.html","0d210a38d5bd5d6729ca166b247cbc73"],["/archives/2018/page/2/index.html","3227c3605472f67b3221e36b5d929a37"],["/archives/2019/02/index.html","1d6267474b2b4684cd0cfbda2417fb70"],["/archives/2019/07/index.html","65fd101ae33a13522879b4a00272501a"],["/archives/2019/index.html","1bd94cd2030fbdec8e973ca407391eba"],["/archives/2020/01/index.html","20bd2f078186ad42cfac64453a1ec6b9"],["/archives/2020/03/index.html","37df409348909b8dbb165aae19db5bfd"],["/archives/2020/07/index.html","86868c574784b087b40fda2a3a52c14b"],["/archives/2020/08/index.html","c30c392d2b89f9b29e47c3a02ac40fae"],["/archives/2020/11/index.html","624e66d29af7c3464f02a1e071128ae3"],["/archives/2020/index.html","0f78039b93f25f02cf3f5b318f881f82"],["/archives/index-1.html","f5997a8e675a699430e5f0a4edf02a45"],["/archives/index.html","db43058f1688c46b2495a92285e80e8b"],["/archives/page/2/index.html","db43058f1688c46b2495a92285e80e8b"],["/archives/page/3/index.html","db43058f1688c46b2495a92285e80e8b"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","8f19c5079260a5f60956c25d1dfcd12b"],["/buzzer-define/index.html","a0d3f0d5603cf5954ad8a19bb27f65e4"],["/categories/HEXO/index.html","09d5fce1ef7b3ff0d9f566d623605ddb"],["/categories/Olympiad-in-Informatics/index.html","13cb6de0609fa1fa81dd8e87ffa16f56"],["/categories/Olympiad-in-Informatics/page/2/index.html","7a821082b34dfdf6ab4ac8168a673f65"],["/categories/Trick/index.html","98259b46e7bc1cc0c62afc193c6a6a59"],["/categories/VPN/index.html","78e52ed5e77261e42544ecf4cd57a699"],["/categories/buzzer/index.html","7106981955732de5967c8f91f671a3c3"],["/categories/index.html","84eb42ff4e5a13c1374a1944afca2684"],["/categories/memory/index.html","9dcbbf2f93c7fba70b6f06c0e933d4aa"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","b80e84c4c8ceee5bba7c0734ff2d02bb"],["/essay/A1/index.html","20f1d64882223f6df1097c42d3fa33b0"],["/essay/A2-letter-showing-thanks/index.html","04e86097020f4119d9118cb58dc62a83"],["/essay/A5/index.html","e2c9eeb2f3dfb5d12bdc6d073ef0bdeb"],["/essay/CH-wangke/index.html","4e89c5c10783d8c8ac17e2edd50f5fdf"],["/essay/EN-after-class-activities/index.html","3129c2975b7412d79ce66c9d2af3b565"],["/essay/FrenchRevolution/index.html","5cf22c7cb19914b05089b159eba3a94b"],["/faioj0101-leftist-heap/index.html","81807133bacbcef14cf85d65644502cf"],["/faioj1499-qpow-fast/index.html","7faa845826a59db4adfba54200c9cbbe"],["/friends/index.html","fcbb37ec816497c4f941ec8ca8430f78"],["/gallerypage/index.html","08e5e2d8a0c57ae5cf9c3ac6e7a10a04"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","55e29bd9740964ebd484b4377d92a888"],["/hiddenlist/index-p.html","0a4bdd67bfee98c488dd97f53cd5e26a"],["/hiddenlist/index.html","20ad4c980fff2748041543dd54252fa0"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","bc27345058db3192f713542101e793c3"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","b8beb00b32edd70685ff22537f810133"],["/luogu-P1967-noip2018-day-1/index.html","a69017df686b567b2f1e32078df88b6f"],["/luogu-segment-tree/index.html","14e6bf0f8c01e2b231db2196cd57d2fd"],["/ncm_unlock/index.html","28c408b2b3afa7c78f9844dbf3a1d8c0"],["/obs_internet_class_fishing/index.html","7d9930a1b35ac130db499298d388af97"],["/oi_history/index.html","8b39e6983232839aeb4071246d331224"],["/page/2/index.html","fe45ece223937bc47f92da2563a4b64c"],["/page/3/index.html","22e777c898fc39bb6e6c580a4d1a6e13"],["/recall-oi-20200828/index.html","39022d2feff9ba622db73a787af6fdee"],["/seg-tree-namespace/index.html","219ae3ce84ea3837ce31a8520f982e91"],["/shortest-path/index.html","9343170dded0bde1379c1d118e9fdb13"],["/sw-register.js","ddcb211b83bfda12df9e7d8d02acee0b"],["/tags/DP/index.html","befcd85cf21e32d2e029d171e18548a5"],["/tags/GSS/index.html","b601a4e499d2f1517b1eaac664bb94b6"],["/tags/HEXO/index.html","2f8aecfbaf38e6323c166920d53d1ef0"],["/tags/OBS/index.html","e9c77088fb5031ca73d807cf240bbe90"],["/tags/STL/index.html","edd18d39b7f6e608c64f70af793dac9f"],["/tags/Template/index.html","dbd5e9ab548a8ea90d45ea3b72e60753"],["/tags/Trick/index.html","3fc792cda60a3c33d80f66bcb76a2066"],["/tags/VPN/index.html","ed91c957d4c0ca473e7dda0aeb3be214"],["/tags/VPS/index.html","a44e6a65115d524dad6487fa5e0a2a15"],["/tags/buzzer/index.html","16dd8758e04e728208b15273349c636b"],["/tags/contest/index.html","cfbfa3a760ba3490b2a528313d29eb0a"],["/tags/index.html","924ec44ba60f4044278790de7b52ddc3"],["/tags/segment-tree/index.html","fb0b0feea300e186436c107efff4a5bb"],["/tags/倍增/index.html","dca9f032621d4801ed07fa6c380dc56a"],["/tags/并查集/index.html","298165b01849c34380947387024b2590"],["/tags/最短路/index.html","416de714e477b0bad94f5568edd3eb5a"],["/tags/生成树/index.html","cc6d4e78125e211f208502898836252a"],["/tags/贪心/index.html","a904a7ebd90f10aa7a09b83fccbccf30"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","a1ff2a56b577904f79dc2628c808cc27"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","ef11b8ec65985cc5dd306a3a6cb68ae5"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","02bc48192ee6ab5d4762870d3ac1b13b"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","a6d47053cfdf3d2c9b9ebceb794f74e5"],["/vultr_ssr_vpn_buildup/index.html","07f3c0545de7d39e8af01ee5fe8198ea"],["/webboard/index.html","67652062ee68f919c35e82c06951d951"]];
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
