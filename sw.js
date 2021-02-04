/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","0d13cc384e09def9f28bfae6c52c687f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","cb39023f0635d172aa51df07b63b2bd4"],["/CF749E-Inversions-After-Shuffle/index.html","2a113e8ea93d98f8e4f1f995e9b89718"],["/DSaAi/index.html","ef7b41b4916bb89849315e4b028664e9"],["/GSS1/index.html","9703f24c2a2477fb16faec14fee4a078"],["/GSS3/index.html","0f7985008bf8794b148cf5dc2fbc05b5"],["/GSS4/index.html","c481b9a5aaa56e8b91564fb0075d6b0c"],["/GSS5/index.html","4461791e5f50a672d5d6b3be2763da82"],["/HYAsstSTM32Progress/index.html","571d4bd5a954a0cc7bf9646fd68bcddb"],["/HongYanAsstHard/index.html","add45be5f1a1788f5f10ed628b4b4856"],["/Luogu-P1654-OSU/index.html","b3867d0ccd95dc86a73872e9359d48fe"],["/Luogu-P2899-Cell-Phone-Network/index.html","604d68a80cafb048c2721e75cf1608ba"],["/Luogu-P4289/index.html","c15f4663294348b8d18c04903789cb82"],["/Nescafe17-Defenders'-Challenge/index.html","59e9332aaaf9710453103914463546f6"],["/OPTIMIZE/index.html","964f2d8d2e1d5896c40c8cf3455aa9b3"],["/SP2885-WORDRING-World-Rings/index.html","b6de79f9436dc85d63005361319e2ecb"],["/UVA1714-Keyboarding/index.html","cccf05902cf7c4b43c870aab755c9693"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","7df0fc4283460326f9dd490e956e9be0"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","37fca596ba0066a898eaf25eb8bb8db8"],["/archives/2017/12/index.html","22da8ff08456ad800b6ff929835b18d7"],["/archives/2017/index.html","c11a93bdd054b7a877b9a1d67df826b6"],["/archives/2018/06/index.html","080146da1ed5bec18286222e1124bec8"],["/archives/2018/07/index.html","f161f290311ce88571c560b7cfb509c6"],["/archives/2018/08/index.html","4f7a5ac8c0fbc51b8bed0138dd180c24"],["/archives/2018/09/index.html","c7f73cef0442d2af58924f7f78b103cb"],["/archives/2018/10/index.html","8114096c2e69adca60f96b2040fdcc7d"],["/archives/2018/11/index.html","c403c77ef39de9326486b9ba3253861f"],["/archives/2018/index.html","9808697beb086ea77e33be7815e78e90"],["/archives/2018/page/2/index.html","1c4a7517467d3831ff179b9e877fa83c"],["/archives/2019/02/index.html","1529bff235f7d9591bac62cab8caeeb2"],["/archives/2019/07/index.html","cd04e4820e71949b8a903da506893691"],["/archives/2019/index.html","b9dec4bd8035b44a07111738a741a0c0"],["/archives/2020/01/index.html","489150639307a43450a7c742ea0b4e9d"],["/archives/2020/03/index.html","5a3c4ff3f7d7ecbe52807c15434e1c5d"],["/archives/2020/07/index.html","2230b335af2780b66df443b4671989b0"],["/archives/2020/08/index.html","af8f909ba1cbc91bc4f997a42f4b02c8"],["/archives/2020/11/index.html","12298501bd89d7f63ba616f427a8b8c6"],["/archives/2020/index.html","5ce344f60fab6e00f991debe69c0a4ca"],["/archives/2021/01/index.html","6cf02f3d562f06f7e4c79c91e68d6dee"],["/archives/2021/02/index.html","4948a9c9a2ed5aba4b0ad51545eec2a3"],["/archives/2021/index.html","19eea91e9607a3573793f061ef2e1b7c"],["/archives/index-1.html","2489276c03fef9176be6e4e0b9cd7393"],["/archives/index.html","4e1b426e4826e0892bf695aa84cb7c35"],["/archives/page/2/index.html","f2262aae98f4b5d0074167969fd8fc88"],["/archives/page/3/index.html","f2262aae98f4b5d0074167969fd8fc88"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","8061a1322b01618bf07c31bf94d50493"],["/buzzer-define/index.html","d6a24bb013bbfcd94c1df28e648e362b"],["/categories/HEXO/index.html","9c6c156e41ed29106fd044e81ec53c0a"],["/categories/Olympiad-in-Informatics/index.html","933eb14d108e5c1680a6b6d07ab5b323"],["/categories/Olympiad-in-Informatics/page/2/index.html","928297a7b0664373ede1e3e58f5eb993"],["/categories/Trick/index.html","0577ccf3291e026ae7c89cb7a547c612"],["/categories/VPN/index.html","9abfb434229e94e04527c83c332b6c82"],["/categories/buzzer/index.html","0cff0b10441d5f802b15cb8b381f47f4"],["/categories/index.html","ad7509210db8eea0ef69e4ae0240493d"],["/categories/memory/index.html","46eacf7c3361d92277a194a5855afa6e"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","4fd3eb9de018e33662e53d829bddd601"],["/essay/A1/index.html","4c0690427e99d1cae1e8bdde5ab0f4f1"],["/essay/A2-letter-showing-thanks/index.html","c99d88baa356de5dd945914139c20577"],["/essay/A5/index.html","64b6f3e06ce2002111131fea5a687631"],["/essay/CH-wangke/index.html","7b447ac6fff1bb55c8eb6b91ecdc9b62"],["/essay/EN-after-class-activities/index.html","a23009a76c9c352e4634b356e9ec0cb4"],["/essay/FrenchRevolution/index.html","64bccba6b15a7a4e8257cc0605072402"],["/faioj0101-leftist-heap/index.html","b3549c13285a91d3fd896cb009532768"],["/faioj1499-qpow-fast/index.html","300216ad78ed1d38d533bce0c9b5dfd4"],["/friends/index.html","1c6fd88a4727e83e32db62b56bc26f47"],["/gallerypage/index.html","209b9ef94502eff1778d1d173285be1a"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","416ed21dc109ac65b599c6bfd7408f0c"],["/hiddenlist/index-p.html","e5a4d3b4d8fd31055baf8e1073d96244"],["/hiddenlist/index.html","70d7bce1c67750325b94b61da34e16be"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","589d516b91aabcbae4c2fddc09e721e3"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","6532a99c962488741063ac9fe6abb83e"],["/luogu-P1967-noip2018-day-1/index.html","41cf0de3a02d01f200194c49952c0682"],["/luogu-segment-tree/index.html","27b8c9a40b589149485f916c5496ef24"],["/ncm_unlock/index.html","8d6cd14c65a5cb7acdbdf8061ef11e30"],["/obs_internet_class_fishing/index.html","58f3b0851ff113b47a4b18e27c01c838"],["/oi_history/index.html","d9187a08e865ca31138b6af304f475cc"],["/page/2/index.html","cafa32b1d56a616517020025f50a7da6"],["/page/3/index.html","9890f20b81d518314424b164b47dda74"],["/recall-oi-20200828/index.html","4f13b34afbb19313286cbcc65ba2a318"],["/seg-tree-namespace/index.html","d0bd025fb5cc01dfecf417abc192f805"],["/shortest-path/index.html","baa6b1dc9f49dbb14b060339fddcbbf9"],["/sw-register.js","258adaf94573a269d938731a6c71a10e"],["/tags/DP/index.html","f15854c5947192e639a9e64011776efc"],["/tags/GSS/index.html","d761162da2a10f6d31dc779b6ab4c415"],["/tags/HEXO/index.html","b64db822c6003af651e703ae44c33d71"],["/tags/OBS/index.html","427e3ca4f03832c931ccf5776228c424"],["/tags/STL/index.html","6df15af8ad017e9c59d8e423731dbac3"],["/tags/Template/index.html","fef58f308b69dd1bb7f06e423cba6861"],["/tags/Trick/index.html","859236ecfcc4aed1fbf7ed5fe0b47113"],["/tags/VPN/index.html","bfbbaea495c90b4ee96c015f0f2ab3c9"],["/tags/VPS/index.html","dc7ea5e101176613bed9b4fbc0f0222f"],["/tags/buzzer/index.html","df0b7e9da484982b2c4d3385de089287"],["/tags/contest/index.html","9e6ef7f11566d9e9262582ab22fc05fe"],["/tags/index.html","04b6439c1e8c4d3b6117eaa61be8b266"],["/tags/segment-tree/index.html","f1e5eb6c679cc3c5c3d53ca100fb2a37"],["/tags/倍增/index.html","94859ca3c6edb757808b93a4c6d82a27"],["/tags/并查集/index.html","56d275eb20e1336c6ccc83c6bc23f7ba"],["/tags/最短路/index.html","978e456f780f73902a1d7f8c6b913481"],["/tags/生成树/index.html","c2f88198306c812c26e5c6c01afe1c1b"],["/tags/贪心/index.html","98332887d21ae539dca25ebb0b3428ff"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","c6d5e72af3a1cdb5279e684d29548f1b"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","509699aa5dc0b7ac6becc5b0d2ebc487"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","9de7e0f820a0b64cff51b95ec8b18ec1"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","cb9479e2f684ff0d6c6ee9ecfca89fc5"],["/vultr_ssr_vpn_buildup/index.html","aa243ce2b647b41cfc8072e1351ba682"],["/webboard/index.html","f2780469718509484a118e543372ce19"]];
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
