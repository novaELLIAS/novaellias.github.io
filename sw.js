/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8ef116e4ca0f06ea5e067f85eb2a9ad8"],["/CF372B-Counting-Rectangles-is-Fun/index.html","ecd038c5ac364eadcf2b3db009a3368a"],["/CF749E-Inversions-After-Shuffle/index.html","3af2b44052a2e2d334fdfaab8e678004"],["/GSS1/index.html","9e0fb97ea1b41de50c88716ee623334e"],["/GSS3/index.html","f7637b5908a34b2981c7d356d5c1011f"],["/GSS4/index.html","10ed424691bd04b5cec481479bf9c93e"],["/GSS5/index.html","a57c07edffb25cc8731f2134ea1a2f71"],["/Luogu-P1654-OSU/index.html","f2db4331db9d579fd4b9074cf2c321d7"],["/Luogu-P2899-Cell-Phone-Network/index.html","2b4e49d3d981fba84ca3896165118f6e"],["/Luogu-P4289/index.html","989ede9c850dd2201caa3bdb8e70e0dd"],["/Nescafe17-Defenders'-Challenge/index.html","87c1f410ddb6271f88749137cb144c43"],["/OPTIMIZE/index.html","130e4321dc0cd455e98956f3066f6fc2"],["/SP2885-WORDRING-World-Rings/index.html","19b59c6ecf83e701b3c638553a145508"],["/UVA1714-Keyboarding/index.html","e052a92ea5872de7027df44b2b40ff0f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","9a17391573cf36d5acde2688d8e0f947"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","52d5a44326defb311227a808c8b4334b"],["/archives/2017/12/index.html","f9a4e2332dbc3dd7a375d6058a570059"],["/archives/2017/index.html","78e8de4474ddc7b2bcdbcb34ccdd6c8c"],["/archives/2018/06/index.html","6c83d9d880bd3c0a0bf7504298d24d55"],["/archives/2018/07/index.html","339e2788ccfacf2b7db5fbe4b857b0e1"],["/archives/2018/08/index.html","bb3ddff38ed9052c9833ba4b65d33040"],["/archives/2018/09/index.html","ffd1afb11e8f038f739cf5ee997216ee"],["/archives/2018/10/index.html","9f230cd81f0ba8315013e20de64e37b7"],["/archives/2018/11/index.html","99cc53cbe4a870bdfb733817bb7989f2"],["/archives/2018/index.html","8abda1e082f129b450821e4b81385755"],["/archives/2018/page/2/index.html","6e9988b3f751098b9f48962f9355c59a"],["/archives/2019/02/index.html","f3d4e5c0776440e93ba3685bf48964f1"],["/archives/2019/07/index.html","17d4cc71af0f5fd25a8543ddf0d6633e"],["/archives/2019/index.html","772aba6453e96745c8a7b0760a381305"],["/archives/2020/01/index.html","da55e5a34bca1e23fb69a6e4b2cf9f06"],["/archives/2020/03/index.html","f90ca46fbb9b611a3e1e6c5887fa5cd9"],["/archives/2020/07/index.html","29984c42f692a3334dc087264025cbac"],["/archives/2020/08/index.html","458672925ed5eccc21a6ca3d18dbd986"],["/archives/2020/index.html","056dbd5968950e37d90176f06aa0b031"],["/archives/index-1.html","a03fb8d97cea3edc59b047f99de73c39"],["/archives/index.html","9899825c898c901b6e0777a0bbfa9c6b"],["/archives/page/2/index.html","e3d6112350567324e140db4c16f8a3dc"],["/archives/page/3/index.html","e3d6112350567324e140db4c16f8a3dc"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","cd267634378b30fe7c22319bd72c961b"],["/buzzer-define/index.html","947679efa910f001addb64ab61ad4276"],["/categories/HEXO/index.html","d95868490eb102f67134752e93115038"],["/categories/Olympiad-in-Informatics/index.html","e262db3ba8fe36045d98696daf6fa849"],["/categories/Olympiad-in-Informatics/page/2/index.html","83d6c4be4c7edc82adc23a91263087bd"],["/categories/Trick/index.html","9109675f0dacd73d035d1779140038c4"],["/categories/VPN/index.html","6705bee06a4a7a49ae30638aa54ee60b"],["/categories/buzzer/index.html","dc1aaaa994cc5044e1fceffb5a4bf593"],["/categories/index.html","d3887af8cbdab0dc3aade271d682139d"],["/categories/memory/index.html","6ba1c28bd4baebb6d27ca09f410725d2"],["/css/style.css","e834c077e985a43bde5c444c49831b29"],["/donatepage/index.html","d41974525086aea5a64eebfbc922ef7d"],["/essay/A1/index.html","91be2e4a4d966e01e3069c038ac6b9c6"],["/essay/A2-letter-showing-thanks/index.html","3ffc53550d267ab37d9961b352042b94"],["/essay/A5/index.html","0dbf52518ed538fddc7df2a86b761df6"],["/essay/CH-wangke/index.html","d943fe294c5cd6c45776a006abead886"],["/essay/EN-after-class-activities/index.html","cf304cd29cd84f1d2d0e892436303474"],["/faioj0101-leftist-heap/index.html","83a06689e12446e186cabad1207d1432"],["/faioj1499-qpow-fast/index.html","dd6584c25e71e753062666d7ba666437"],["/friends/index.html","ed7e2dd3ac1f2d0c1c7dada3c33d04ce"],["/gallerypage/index.html","4bad77f28f5621d5ad945fe81b360465"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","c2b57f66ca8e37dfc4dc71531848ef55"],["/hiddenlist/index-p.html","52d17078af07f72aca9ad561315a15e9"],["/hiddenlist/index.html","2f54300a0f1f1d15103c2d1bf0c0bd23"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","e54b416da1fe83576228031fb3552e92"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","38954306a50c0270bc2972f92b3e5b9a"],["/luogu-P1967-noip2018-day-1/index.html","fd1d5d15cff51badebe9c7b96233ea5b"],["/luogu-segment-tree/index.html","e8633369aad6e6540b625852961fcb96"],["/ncm_unlock/index.html","7fdd00c7cf508211c611fad755aea28f"],["/obs_internet_class_fishing/index.html","0b6029cc5e2c721cc7551f7909677ac4"],["/oi_history/index.html","b7b383ce7f1775f8ceb0a0cef3de3ce5"],["/page/2/index.html","95589694c496abca2ff378d4fe4f67d1"],["/page/3/index.html","7419e8a03029a520f872a5b9fc9f47f7"],["/seg-tree-namespace/index.html","6be136bff393d348fbc2ab8b59efcc9e"],["/shortest-path/index.html","6c178cf0dc76a3169ca55cec36d71ff4"],["/sw-register.js","1b49c82ef0f729bb01e436ac806e9bae"],["/tags/DP/index.html","fe5f3468d3cf48511cbecc025177c77c"],["/tags/GSS/index.html","aa7bcdcef6e82b65f0a92291b4dd6e34"],["/tags/HEXO/index.html","cee83b5ed5de6a5cbd737902a14d3038"],["/tags/OBS/index.html","d3da3b7b0a6cd6864f6ec8efce0b1a22"],["/tags/STL/index.html","af0fad5e8c382a0c48b6d84d85e520a6"],["/tags/Template/index.html","053ab080ddd843567f00a4470972088a"],["/tags/Trick/index.html","92b02a722b468c27bd920ab1412fbee1"],["/tags/VPN/index.html","0c89b82e4bd07061bc8027b93ce26df1"],["/tags/VPS/index.html","fcab316118cb1ff00d01398abbcabc57"],["/tags/buzzer/index.html","ed830768131de74303aa1013e1dbf856"],["/tags/contest/index.html","5d7cf6ed4302bc1c36cbbbef2a147dcd"],["/tags/index.html","c5dd457c0e6b94ef02d7de2b4685a5c9"],["/tags/segment-tree/index.html","a542cc2ac98887f2b58d0eae91cf5700"],["/tags/倍增/index.html","5aa374e0618faf3c89f47d95dda5c391"],["/tags/并查集/index.html","fd1ec37f8fe9b77196b02b17eec54b7f"],["/tags/最短路/index.html","cebb4814cbf78cd961700a1662f13fb7"],["/tags/生成树/index.html","d2a2660b1c95efbe9183cf984c64e4a5"],["/tags/贪心/index.html","a9b092eac15a76a542e66df5a8664cbc"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","03bcf1e1c32322ce945cfc99ff1befd9"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","41bec01d50dae2b21170bf71284dae44"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","91e91aa1922119b3ce1d5baf37b5b084"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","c6eb23cda09c494aa6180c15ca995cc6"],["/vultr_ssr_vpn_buildup/index.html","803daba7626c339f58a8e1589e322bd3"],["/webboard/index.html","458927af0f10a0840da1dedd5c83f09d"]];
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
