/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8ef116e4ca0f06ea5e067f85eb2a9ad8"],["/CF372B-Counting-Rectangles-is-Fun/index.html","ecd038c5ac364eadcf2b3db009a3368a"],["/CF749E-Inversions-After-Shuffle/index.html","3af2b44052a2e2d334fdfaab8e678004"],["/GSS1/index.html","9e0fb97ea1b41de50c88716ee623334e"],["/GSS3/index.html","f7637b5908a34b2981c7d356d5c1011f"],["/GSS4/index.html","10ed424691bd04b5cec481479bf9c93e"],["/GSS5/index.html","a57c07edffb25cc8731f2134ea1a2f71"],["/Luogu-P1654-OSU/index.html","f2db4331db9d579fd4b9074cf2c321d7"],["/Luogu-P2899-Cell-Phone-Network/index.html","2b4e49d3d981fba84ca3896165118f6e"],["/Luogu-P4289/index.html","989ede9c850dd2201caa3bdb8e70e0dd"],["/Nescafe17-Defenders'-Challenge/index.html","87c1f410ddb6271f88749137cb144c43"],["/OPTIMIZE/index.html","130e4321dc0cd455e98956f3066f6fc2"],["/SP2885-WORDRING-World-Rings/index.html","19b59c6ecf83e701b3c638553a145508"],["/UVA1714-Keyboarding/index.html","e052a92ea5872de7027df44b2b40ff0f"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","6f22b7c2ae0d558321ba1d739587e55c"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","a685c3298c6080bccd7f43e37c541b4b"],["/archives/2017/12/index.html","28540121f1693316bcb0d9d3be61e3e1"],["/archives/2017/index.html","7f8226247556be9679e60b31e1838d21"],["/archives/2018/06/index.html","8f9277000d9d0cead951d8ec7683f09e"],["/archives/2018/07/index.html","3d997e6a1dc218b989fc756c9596a86d"],["/archives/2018/08/index.html","8d05ff3de26abc49a34427b0bfda8dc2"],["/archives/2018/09/index.html","99fb9ee20a45ff7d840e6e1f39b1d79f"],["/archives/2018/10/index.html","42e5ca190ffec39b604ca543162b2020"],["/archives/2018/11/index.html","c4cf708a9008993a18edf0a33cc8c4b4"],["/archives/2018/index.html","1c3e1e1ede77725710ae699642d3c7d5"],["/archives/2018/page/2/index.html","f5b1dddf37a0365705c0d6653e634a55"],["/archives/2019/02/index.html","eb8c50696ed09b9515fd822df621387d"],["/archives/2019/07/index.html","a271df123cd7b3ef3987bbb93888712f"],["/archives/2019/index.html","65bd8fd5824b868ac249c698203dafc2"],["/archives/2020/01/index.html","9810806b36f9725f1c70184826199bd5"],["/archives/2020/03/index.html","7cb4359a2483a92e037b5e3da7a59781"],["/archives/2020/07/index.html","ef668a8e2b36d7d8c8d7c5c0d5875948"],["/archives/2020/08/index.html","ac58023c4854bb5d1ea3742c043895d0"],["/archives/2020/index.html","c182e24731cee7ef03bc4b04a8004546"],["/archives/index-1.html","a03fb8d97cea3edc59b047f99de73c39"],["/archives/index.html","d38511546d272599ced839d9a7cf6204"],["/archives/page/2/index.html","78e93ba4c403d6ab4c2dd08173d2cf00"],["/archives/page/3/index.html","78e93ba4c403d6ab4c2dd08173d2cf00"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","72aa50acfdd64c9498394b52f3c02643"],["/buzzer-define/index.html","947679efa910f001addb64ab61ad4276"],["/categories/HEXO/index.html","e0f5f26f0a6a0f56b17245d4324e1930"],["/categories/Olympiad-in-Informatics/index.html","4a85425631f5db682660f15761a8fe58"],["/categories/Olympiad-in-Informatics/page/2/index.html","1804e7cadc6a3307fcc899eaecfe7e49"],["/categories/Trick/index.html","1df8bf30827f09d8cb1c4ec2ac033240"],["/categories/VPN/index.html","7ae8f882325ffb485f2d759b5af4af8f"],["/categories/buzzer/index.html","2fb6d7a13dbf07b145347c21076ef1f5"],["/categories/index.html","faefc4a9c1cc84a6cf131b10d2370853"],["/categories/memory/index.html","72965d0821a53460ee832d4eb1a4d32a"],["/css/style.css","05f7f87ffaa1716d872136da70785e74"],["/donatepage/index.html","e887263acd1e8926ef302c6dfaafb5de"],["/essay/A1/index.html","91be2e4a4d966e01e3069c038ac6b9c6"],["/essay/A2-letter-showing-thanks/index.html","3ffc53550d267ab37d9961b352042b94"],["/essay/A5/index.html","0dbf52518ed538fddc7df2a86b761df6"],["/essay/CH-wangke/index.html","d943fe294c5cd6c45776a006abead886"],["/essay/EN-after-class-activities/index.html","cf304cd29cd84f1d2d0e892436303474"],["/faioj0101-leftist-heap/index.html","1d882501db59b9bdea3a19157510cfc6"],["/faioj1499-qpow-fast/index.html","dd6584c25e71e753062666d7ba666437"],["/friends/index.html","ed7e2dd3ac1f2d0c1c7dada3c33d04ce"],["/gallerypage/index.html","52b91e0c9ce407623ac1319575a98bf9"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","c2b57f66ca8e37dfc4dc71531848ef55"],["/hiddenlist/index-p.html","52d17078af07f72aca9ad561315a15e9"],["/hiddenlist/index.html","693fa684851e2fcf52280c704744ddde"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","0689d19c15bf842dcdcb6165cc77f079"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","e3e35d78c3a24837363d7600843ff22f"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","38954306a50c0270bc2972f92b3e5b9a"],["/luogu-P1967-noip2018-day-1/index.html","fd1d5d15cff51badebe9c7b96233ea5b"],["/luogu-segment-tree/index.html","e8633369aad6e6540b625852961fcb96"],["/ncm_unlock/index.html","7fdd00c7cf508211c611fad755aea28f"],["/obs_internet_class_fishing/index.html","0b6029cc5e2c721cc7551f7909677ac4"],["/oi_history/index.html","9632f5edc8db7fa2d99dbdaf1f3d5b77"],["/page/2/index.html","503dad4818acb08091aad66de3849e13"],["/page/3/index.html","36dd0924fc71c224913156f88a1cd850"],["/recall-oi-20200828/index.html","2875d4d9bcab2b6801579a8fb8f8bf96"],["/seg-tree-namespace/index.html","6be136bff393d348fbc2ab8b59efcc9e"],["/shortest-path/index.html","6c178cf0dc76a3169ca55cec36d71ff4"],["/sw-register.js","0a4e2e0ad4aeec601f1420f233d8bd94"],["/tags/DP/index.html","8d354577bc163ca57203af1770e9658a"],["/tags/GSS/index.html","a014198e2971dfcf6487c6e501c7f8c5"],["/tags/HEXO/index.html","0ce4dceab8d2fa4618331f29863759f6"],["/tags/OBS/index.html","4deea4ec01116514c8fe7924bf4576f8"],["/tags/STL/index.html","6c1f8086c493db3f90058e25f8dede19"],["/tags/Template/index.html","20f1cf93b34c7f40f8f559b8367c7473"],["/tags/Trick/index.html","ec5424493eaf0901b5be54b4b8a25f97"],["/tags/VPN/index.html","8cd8b5b667ddb098c2c927a07f682f43"],["/tags/VPS/index.html","4fb6853c567cf947b5f532e9fcd1802d"],["/tags/buzzer/index.html","e0eabd798dabd2a45c772d1411d0cda1"],["/tags/contest/index.html","c19d8488bdf54fe1139bb12f22e30334"],["/tags/index.html","c5dd457c0e6b94ef02d7de2b4685a5c9"],["/tags/segment-tree/index.html","5fe0ba6c82ed688395312560b2af4fe9"],["/tags/倍增/index.html","39ff7dfae2bb1e818059dd0e20250b3a"],["/tags/并查集/index.html","4654e1935e6d0caef6ba6029570ae58c"],["/tags/最短路/index.html","f9b42d230c9d3407b129949b7cbade73"],["/tags/生成树/index.html","4468e9bf0426c0b0a01eb0c447f4f87b"],["/tags/贪心/index.html","611013f9829e8d31c5fc4a9e8f8050bd"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","03bcf1e1c32322ce945cfc99ff1befd9"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","41bec01d50dae2b21170bf71284dae44"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","91e91aa1922119b3ce1d5baf37b5b084"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","c6eb23cda09c494aa6180c15ca995cc6"],["/vultr_ssr_vpn_buildup/index.html","803daba7626c339f58a8e1589e322bd3"],["/webboard/index.html","458927af0f10a0840da1dedd5c83f09d"]];
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
