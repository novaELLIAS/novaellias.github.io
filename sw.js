/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0b771474cdfe094da9c7f05b72727898"],["/CF372B-Counting-Rectangles-is-Fun/index.html","930edeecd63e556c64eaaba3b097107c"],["/CF749E-Inversions-After-Shuffle/index.html","9f6e9e5605f8db28af937207ad9f2870"],["/DSaAi/index.html","5dd0442913f2e7d961829228b1496e5c"],["/GSS1/index.html","67967d81e3f3cd1dad77a9bbb5399ba4"],["/GSS3/index.html","71be0740af17dbb48ac7cf3993349724"],["/GSS4/index.html","111b8ef6d77aadeb9a94d87bde3ad6f3"],["/GSS5/index.html","88fb04eca0fbddcebec05b5abfd3296c"],["/HYAsstSTM32Progress/index.html","0f887cf700399b25edb2e3828e04143d"],["/HongYanAsstHard/index.html","536fdc48bb6ba7e9392cc321fd358888"],["/Luogu-P1654-OSU/index.html","e470342bfee6ed1510f79c934870df16"],["/Luogu-P2899-Cell-Phone-Network/index.html","08da4dd5c9fe4626509bda89c4b28ca6"],["/Luogu-P4289/index.html","fe22fc448eb5a477cf867e6a89c77bf2"],["/Nescafe17-Defenders'-Challenge/index.html","db9d32dcea4e03d0e623eb42c4a7704e"],["/OPTIMIZE/index.html","48c6b33704889ea7bea4ad527946deb1"],["/SP2885-WORDRING-World-Rings/index.html","2337942dd156274adc8398ae26ef195a"],["/UVA1714-Keyboarding/index.html","ad8524a6e014026f8257e84a6a609ae5"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","5986be27007cee5bb311e039554a1d7f"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","672c2a01124061b9fef36cc2c9fbfe30"],["/archives/2017/12/index.html","46459db215f4495cfd728f751a845190"],["/archives/2017/index.html","4a22fc4f6928608a72ff6c00298ca56d"],["/archives/2018/06/index.html","0d375e9a66aa874a2f7721614b8ac160"],["/archives/2018/07/index.html","b4dd993b5dca0afbbe1b37fd8b5213b2"],["/archives/2018/08/index.html","b207d4e38c1b0865a75e73846185c410"],["/archives/2018/09/index.html","dd27cb213eac9def57e2e7818040f667"],["/archives/2018/10/index.html","37d77be43d60a5ecdca279410567d698"],["/archives/2018/11/index.html","7950e5fc4d4a054a1ec00e7c91360069"],["/archives/2018/index.html","f584613f6baba5d01a9f6c46fb1e2d08"],["/archives/2018/page/2/index.html","771e34d912e1141fad6438a93c4e38e7"],["/archives/2019/02/index.html","16ac54c9367773eb7f8a48fc9e6b6531"],["/archives/2019/07/index.html","c343aaf97832bebcaf5b3bf7d02d2f1b"],["/archives/2019/index.html","b252eefd2658cab3bad65afb3f301fd2"],["/archives/2020/01/index.html","18ff59c6d10f28f914655719ec0ed6d6"],["/archives/2020/03/index.html","41b00c484fbd4c343e1c3790d8588e23"],["/archives/2020/07/index.html","c56038caab9e6a156ad08bdbdad058f5"],["/archives/2020/08/index.html","679346f81fb9c383b4c13a412a9cd9a1"],["/archives/2020/11/index.html","47c29ad0f253e158a23b294ebccc8c48"],["/archives/2020/index.html","cc3a8a6752f1c331d716e89c7538120b"],["/archives/2021/01/index.html","8aa8c89ad27596e6300aeefb23494d8d"],["/archives/2021/02/index.html","7578b237e916ae19ff8c9399dff8ca2c"],["/archives/2021/index.html","fc411a74411a58b4e80556a8a619a290"],["/archives/index-1.html","48bc522d3df32421f0e0b25b5390bb92"],["/archives/index.html","20b1557b8ce566258ec5c2ae0590b48c"],["/archives/page/2/index.html","09f57997e5337dee472a46d62b92a289"],["/archives/page/3/index.html","09f57997e5337dee472a46d62b92a289"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","3ce2ec62588951a4e0027b44ce6812df"],["/buzzer-define/index.html","decbe3bfb37d22c3259a8ac7bac919de"],["/categories/HEXO/index.html","0c7d4fafb43835a2ac55d0d05012cb7f"],["/categories/Olympiad-in-Informatics/index.html","963e6a6532ef1d48d02059387bcb9722"],["/categories/Olympiad-in-Informatics/page/2/index.html","9667e2c33aea628d74bc6c28021ca791"],["/categories/Trick/index.html","b1d2f7288bc332b40d58819c9a5f494a"],["/categories/VPN/index.html","1fb299e1e8bcc03cd2a5faeb0141b72c"],["/categories/buzzer/index.html","60d1920e6713fde5bcb7ab1562ac0f62"],["/categories/index.html","cbd9050965fb2a466a67ae6f0f517cdf"],["/categories/memory/index.html","162d1b635b3d3ec8738d47d16b29957b"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","ea256d230cff44ab418f7b7c29f225f2"],["/essay/A1/index.html","3f4adef7f0bb201c3c7dab37278ec483"],["/essay/A2-letter-showing-thanks/index.html","c45b6854952ebf6e1ed97feecbafe466"],["/essay/A5/index.html","46ca3ca3d84f438391df51d58db34b39"],["/essay/CH-wangke/index.html","36adba7c0700f163f1b53ae93126babd"],["/essay/EN-after-class-activities/index.html","30c47adae8733d0023af4b6f3c896052"],["/essay/FrenchRevolution/index.html","5cf19c9f73b1514d08f3932ba47851d0"],["/faioj0101-leftist-heap/index.html","1103d07347b18ef9e5dbe108a3e344aa"],["/faioj1499-qpow-fast/index.html","768065e4190f0adf49d33e4173288f52"],["/friends/index.html","26687da95a03f33ee11d635904ce7ff6"],["/gallerypage/index.html","ef1b208be438e557c50c06592d16fd2b"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","632d4cc821ba69c918115cd87f855b3a"],["/hiddenlist/index-p.html","1f1c8988261730e98451d786911ef2af"],["/hiddenlist/index.html","43609b107d887da3df11cc96467ff567"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","ca3a8d1547b4364fddb7409372be7fb7"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","0aa05d655f685a74e08787bd00228076"],["/luogu-P1967-noip2018-day-1/index.html","4ed4103cb0928460681c7c6e29449625"],["/luogu-segment-tree/index.html","097731251c0fc5e2dcc2fd1b18597f90"],["/ncm_unlock/index.html","74b1c76231df616b189e5f85f7f4fdc3"],["/obs_internet_class_fishing/index.html","c7674922b1fd01c10340bd0ae8e1569b"],["/oi_history/index.html","4aff00952b9eccd3be73724f661a4fe0"],["/page/2/index.html","7f5b968989ef706363e308aed84207ff"],["/page/3/index.html","122205f491b0b46d3efcee95e829c63b"],["/recall-oi-20200828/index.html","992c6191d9a86af4ce6e4d8639cb42d4"],["/seg-tree-namespace/index.html","fc1269025405c460f9ac7deec151783a"],["/shortest-path/index.html","b34ccd42a9d54744389ae1a969dbb6b4"],["/sw-register.js","885cee903fdbd525a05b61c7f0246bb0"],["/tags/DP/index.html","991e6be90682bca2a9f76bd744f41a86"],["/tags/GSS/index.html","a5962c35fe03c43167582f6d02f9b3a0"],["/tags/HEXO/index.html","5a411a53f3359daf533098c837bcef1e"],["/tags/OBS/index.html","bf65f52492d2d5a9a004dfc24d36bad3"],["/tags/STL/index.html","8727994e11cf8375db1ae3319ead799e"],["/tags/Template/index.html","de3606f3a5844711c60a2cdd1949b487"],["/tags/Trick/index.html","b25865c50e79c96db9d69c1ba8680121"],["/tags/VPN/index.html","887b92c41a795ad649d7f8448843c438"],["/tags/VPS/index.html","bbaf3eb87567cc42f21a4e74ec409be9"],["/tags/buzzer/index.html","27a5e2d228e0785b43b9e7aa914b4ef9"],["/tags/contest/index.html","b22cbed5a458be9670518252082ef635"],["/tags/index.html","fe2b216e80152c0f2394933c384b4409"],["/tags/segment-tree/index.html","5755b12a13c92bf350613eb7a48127bb"],["/tags/倍增/index.html","cead986fa811a53b674d1157d20cbbe3"],["/tags/并查集/index.html","7870f426ff0afaf8a0a04c2d839de5a8"],["/tags/最短路/index.html","8d12617c19f1322b2ea3f4f2fd2d12ba"],["/tags/生成树/index.html","21f15f113a6897b5c587372257585872"],["/tags/贪心/index.html","9b8a3b69a78654f505283e22064b0c76"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","389ea423a1ed0a47e6558c9516dc78ef"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","3d9d27376f3e545188d7b1cd75945550"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","30ac0b31b9bffc19db6fcea2ec209c9f"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","961906c0bf6eed6a0ff6470b78e53529"],["/vultr_ssr_vpn_buildup/index.html","07822ea7ea9635eb9bafac70cc3deb67"],["/webboard/index.html","8a6aa27c6848763e996729eba5a7dc67"]];
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
