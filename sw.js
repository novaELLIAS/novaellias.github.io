/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0b771474cdfe094da9c7f05b72727898"],["/BeijingBikestores/brand/index.html","0d4c3be4db2ded60ec5750a6c0b23c3a"],["/BeijingBikestores/location/index.html","e5d59d5dc93a77b63ef7b160e83912bf"],["/CF372B-Counting-Rectangles-is-Fun/index.html","930edeecd63e556c64eaaba3b097107c"],["/CF749E-Inversions-After-Shuffle/index.html","9f6e9e5605f8db28af937207ad9f2870"],["/DSaAi/index.html","0b3acaefa0fec2e90e6368c122064a36"],["/GSS1/index.html","67967d81e3f3cd1dad77a9bbb5399ba4"],["/GSS3/index.html","71be0740af17dbb48ac7cf3993349724"],["/GSS4/index.html","111b8ef6d77aadeb9a94d87bde3ad6f3"],["/GSS5/index.html","88fb04eca0fbddcebec05b5abfd3296c"],["/HYAsstSTM32Progress/index.html","eb7b61543636984697508d6ab67f75c3"],["/HongYanAsstHard/index.html","f21210c82a6767a122af55114f669f4d"],["/Luogu-P1654-OSU/index.html","e470342bfee6ed1510f79c934870df16"],["/Luogu-P2899-Cell-Phone-Network/index.html","08da4dd5c9fe4626509bda89c4b28ca6"],["/Luogu-P4289/index.html","fe22fc448eb5a477cf867e6a89c77bf2"],["/Nescafe17-Defenders'-Challenge/index.html","db9d32dcea4e03d0e623eb42c4a7704e"],["/OPTIMIZE/index.html","48c6b33704889ea7bea4ad527946deb1"],["/SP2885-WORDRING-World-Rings/index.html","2337942dd156274adc8398ae26ef195a"],["/UVA1714-Keyboarding/index.html","ad8524a6e014026f8257e84a6a609ae5"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","5986be27007cee5bb311e039554a1d7f"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","36bf6cba4857ec07bb002ba480fdb1a8"],["/archives/2017/12/index.html","19f21b0fa117a7c40fe83a089f4ef506"],["/archives/2017/index.html","414ce97506fde7ade05a03726883d278"],["/archives/2018/06/index.html","1f5d2230402525adfca8fb068513a0af"],["/archives/2018/07/index.html","b638c11fa1201cc3ca35dfd2ed17e8f3"],["/archives/2018/08/index.html","2d24bef572c123eb80d77a62d93d5690"],["/archives/2018/09/index.html","1c9a2b72f40d9c154fba5d74034cafec"],["/archives/2018/10/index.html","20afc80fff1a755c3c827030766a3654"],["/archives/2018/11/index.html","dc93765bd2c747845e3357bd2242983c"],["/archives/2018/index.html","2559b1147baad5dcbf0933302f3e8644"],["/archives/2018/page/2/index.html","d9f07d575cbc2e8ee7fb91b2b6d9d591"],["/archives/2019/02/index.html","7f1d0eaf7f2c7e2894f5daf6ea2deb48"],["/archives/2019/07/index.html","1cd8454a9c9f865dc7e418f99b461fdd"],["/archives/2019/index.html","59a4ebd96470f6a5b022c3be37401973"],["/archives/2020/01/index.html","4220e8dccc65105210e7cff9023d9596"],["/archives/2020/03/index.html","f6541169fc284af50f7d586d9c473daa"],["/archives/2020/07/index.html","edce91300b9f6eb7ca1309ef20d3abe7"],["/archives/2020/08/index.html","44edeaf42cad276a8ede10b5716b8629"],["/archives/2020/11/index.html","41989b54046d6ec5fc3115ed80d9e04a"],["/archives/2020/index.html","0f557f00b3248cdd24354f803dd05e3f"],["/archives/2021/01/index.html","e918c232568fe606e4d7e78f7db73991"],["/archives/2021/02/index.html","cb2c2fc7180b1640f3491f00d785c734"],["/archives/2021/index.html","209fd42f22a869745af090ab1382bc43"],["/archives/index-1.html","48bc522d3df32421f0e0b25b5390bb92"],["/archives/index.html","cfaf7c5ae9a5dacf1934fee4d70ef88e"],["/archives/page/2/index.html","cfaf7c5ae9a5dacf1934fee4d70ef88e"],["/archives/page/3/index.html","cfaf7c5ae9a5dacf1934fee4d70ef88e"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","3ce2ec62588951a4e0027b44ce6812df"],["/buzzer-define/index.html","decbe3bfb37d22c3259a8ac7bac919de"],["/categories/HEXO/index.html","d833455e070a62b68b5b2ab60c7ef9bb"],["/categories/Olympiad-in-Informatics/index.html","95d1b789b836cf7135c7ffca3bb74e8a"],["/categories/Olympiad-in-Informatics/page/2/index.html","d6d7a982af637912b96440436b3973f1"],["/categories/Trick/index.html","2e2fecb949cdf9270aee4100a92be758"],["/categories/VPN/index.html","9cc8f9822756249848e7b016b22379a8"],["/categories/buzzer/index.html","3317c37b4c7aee7bb09a9653f541eb22"],["/categories/index.html","cbd9050965fb2a466a67ae6f0f517cdf"],["/categories/memory/index.html","3356993ead0ef8f5d5922cf5ff4ea70b"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","ea256d230cff44ab418f7b7c29f225f2"],["/essay/A1/index.html","3f4adef7f0bb201c3c7dab37278ec483"],["/essay/A2-letter-showing-thanks/index.html","c45b6854952ebf6e1ed97feecbafe466"],["/essay/A5/index.html","46ca3ca3d84f438391df51d58db34b39"],["/essay/CH-wangke/index.html","36adba7c0700f163f1b53ae93126babd"],["/essay/EN-after-class-activities/index.html","30c47adae8733d0023af4b6f3c896052"],["/essay/FrenchRevolution/index.html","5cf19c9f73b1514d08f3932ba47851d0"],["/faioj0101-leftist-heap/index.html","1103d07347b18ef9e5dbe108a3e344aa"],["/faioj1499-qpow-fast/index.html","768065e4190f0adf49d33e4173288f52"],["/friends/index.html","26687da95a03f33ee11d635904ce7ff6"],["/gallerypage/index.html","60cdffdb3925f227722f61f10ea6d67d"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","632d4cc821ba69c918115cd87f855b3a"],["/hiddenlist/index-p.html","1f1c8988261730e98451d786911ef2af"],["/hiddenlist/index.html","43609b107d887da3df11cc96467ff567"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","78515c45982de10785d980c1e73cfc1f"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","0aa05d655f685a74e08787bd00228076"],["/luogu-P1967-noip2018-day-1/index.html","4ed4103cb0928460681c7c6e29449625"],["/luogu-segment-tree/index.html","097731251c0fc5e2dcc2fd1b18597f90"],["/ncm_unlock/index.html","74b1c76231df616b189e5f85f7f4fdc3"],["/obs_internet_class_fishing/index.html","c7674922b1fd01c10340bd0ae8e1569b"],["/oi_history/index.html","4aff00952b9eccd3be73724f661a4fe0"],["/page/2/index.html","785049b8caab08fc5af01e94880aec5d"],["/page/3/index.html","be90cf95b200e60436abcedf596d5126"],["/recall-oi-20200828/index.html","992c6191d9a86af4ce6e4d8639cb42d4"],["/seg-tree-namespace/index.html","fc1269025405c460f9ac7deec151783a"],["/shortest-path/index.html","b34ccd42a9d54744389ae1a969dbb6b4"],["/sw-register.js","6bf0f3ee4cf209d4e5e30e98ecd0d6b9"],["/tags/DP/index.html","4e743da6e72cbad9d4e2ff26346c7350"],["/tags/GSS/index.html","82095e2673db43c296a6f63550aca176"],["/tags/HEXO/index.html","a7db91885e525dceb8275d525697f7de"],["/tags/OBS/index.html","1d53aefa0f4deea3addc3a383effe8f6"],["/tags/STL/index.html","5553a77d777a9872122a27cae38a5578"],["/tags/Template/index.html","20eda707afd5debb16c7a44389de20f8"],["/tags/Trick/index.html","5aaf5e709fa0bfd4cb78a09d6ca78b2a"],["/tags/VPN/index.html","281dd77fbc94a9b65d34cd6a810ffbd3"],["/tags/VPS/index.html","621f5b6544cd152050c57776ee428838"],["/tags/buzzer/index.html","483f2ea6af69bdf77a58a6515872fa06"],["/tags/contest/index.html","fd4f109f9f36112237d2f68d52ebe3a2"],["/tags/index.html","fe2b216e80152c0f2394933c384b4409"],["/tags/segment-tree/index.html","9f9d779c5986a83516e6aa1e808e6c14"],["/tags/倍增/index.html","7207af80308a1f33db30927af71c8696"],["/tags/并查集/index.html","18d594d646602ce82a53e3a9947bfe3f"],["/tags/最短路/index.html","0838ecb523765d1b449a5d9acef46366"],["/tags/生成树/index.html","8bc878df00cf0d6ff2eedc602d032471"],["/tags/贪心/index.html","a15b05187b7b657ee74deccd64683422"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","389ea423a1ed0a47e6558c9516dc78ef"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","3d9d27376f3e545188d7b1cd75945550"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","30ac0b31b9bffc19db6fcea2ec209c9f"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","961906c0bf6eed6a0ff6470b78e53529"],["/vultr_ssr_vpn_buildup/index.html","07822ea7ea9635eb9bafac70cc3deb67"],["/webboard/index.html","8a6aa27c6848763e996729eba5a7dc67"]];
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
