/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b0ab4b15295eee5b44316da5981b109d"],["/CF372B-Counting-Rectangles-is-Fun/index.html","742e8770b021699b3b40fdea77b8c372"],["/CF749E-Inversions-After-Shuffle/index.html","a4d3eddd23785934fdd66be6f34a6fa1"],["/GSS1/index.html","06c4e5b114248542ccc957e16b756878"],["/GSS3/index.html","6b5e50a2a5c0bef0dc8db166df23ded4"],["/GSS4/index.html","7d84635c0e3e92cc708829a81e4e095f"],["/GSS5/index.html","133e6301647906e758e8b88598872360"],["/HongYanAsstHard/index.html","b30594c77426fe94f45a4b5902e40076"],["/Luogu-P1654-OSU/index.html","a0fa69b69b8480d975b91b56ef3a753c"],["/Luogu-P2899-Cell-Phone-Network/index.html","851b11eb4a5e52801ac106c6597726b1"],["/Luogu-P4289/index.html","d2d39bcc395b9c9e37f42db2d9cc51b8"],["/Nescafe17-Defenders'-Challenge/index.html","e80480f900b9ed397dc08c00f7f7d760"],["/OPTIMIZE/index.html","d3840a6d807857adf45157a0f3beea60"],["/SP2885-WORDRING-World-Rings/index.html","67d2fecf3673ebca2ede6a517bd76a03"],["/UVA1714-Keyboarding/index.html","e088574f9a601bac66d24f5ffd533183"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","d305848910de63d5f8819ca713e056fb"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","c39e89878ac5585ccfb5f1a93d10f98b"],["/archives/2017/12/index.html","22b9f160e1a102ea8c1699875dc1ae9c"],["/archives/2017/index.html","96924f29a32ce60101cba9b2c78c08f7"],["/archives/2018/06/index.html","aa805651134da2def081bdff6ef2f912"],["/archives/2018/07/index.html","6d412b8ac62d1307e4c793e7ce63e735"],["/archives/2018/08/index.html","cbf13bfa6562feae8a082372e8dd808e"],["/archives/2018/09/index.html","a50e458e0f283d9b2df2e6a77ec94d57"],["/archives/2018/10/index.html","5b686dac1adbf193cd276b8713288838"],["/archives/2018/11/index.html","da65bb4bf3aadcc909c76b4f4eb657fa"],["/archives/2018/index.html","669d8e2b743afc17e6dbf44eb2e01b8c"],["/archives/2018/page/2/index.html","1aebab657b0efa5eeb361006647b52bb"],["/archives/2019/02/index.html","fc671484fe0291bc048998c09bac1b95"],["/archives/2019/07/index.html","543484df2d49b40fb3184a3da4b08a82"],["/archives/2019/index.html","d7ce1044962ef581450ee6b4fd19b67f"],["/archives/2020/01/index.html","ba462ab3ba23f66965e29c83c118d9eb"],["/archives/2020/03/index.html","980a109bb3f06367fd6468ff6bed1aa4"],["/archives/2020/07/index.html","93d597218f1785226652939ce65eea35"],["/archives/2020/08/index.html","5cc9b7a30c0019bc7f706faf3a343584"],["/archives/2020/11/index.html","df2db3cf4cb1107bad6c88ca40943e51"],["/archives/2020/index.html","fabaa68a4e3ec2e6cd85b815997048de"],["/archives/index-1.html","f3d40abd66b4208062728eca8e584626"],["/archives/index.html","6d2a393833c88c854b9e1f9565d0608e"],["/archives/page/2/index.html","6d2a393833c88c854b9e1f9565d0608e"],["/archives/page/3/index.html","6d2a393833c88c854b9e1f9565d0608e"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","d283e74d991b462b09b23bee07fbc50c"],["/buzzer-define/index.html","0f157307a0d3a0d8cc6484d86e164017"],["/categories/HEXO/index.html","ea0733a99e39881e6cbf1f25f9861f73"],["/categories/Olympiad-in-Informatics/index.html","c006f822e57d3ac14edae4b0876e99cc"],["/categories/Olympiad-in-Informatics/page/2/index.html","a08d752aac4939c9e5a87fe90334eadf"],["/categories/Trick/index.html","ca10e8495f3dd0bcaaf2494caffcf402"],["/categories/VPN/index.html","df12323f1d66b520b4241cbcd98de79e"],["/categories/buzzer/index.html","585d40c7644ef4bae249977fc1364f8c"],["/categories/index.html","dfe9eef829eb1c8f84804c6853f0cd93"],["/categories/memory/index.html","3b27afd90deecd4de6b201bfaba57fa0"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","7ff7569db469f6ecc137af2f6c772c6e"],["/essay/A1/index.html","7a45f351cade540f1e82cf31c97312d4"],["/essay/A2-letter-showing-thanks/index.html","048794c2d0f9d744b6f439a1cf66ede1"],["/essay/A5/index.html","4260e2227910d68baf69272ec1bca5eb"],["/essay/CH-wangke/index.html","93696a007b75c82b37ad171d515afb37"],["/essay/EN-after-class-activities/index.html","648c96a5e70dcce42c60a0d355a9bd57"],["/essay/FrenchRevolution/index.html","01155c7d7e487655b8ea20935138190d"],["/faioj0101-leftist-heap/index.html","05250001157f47d49240c882b13df53c"],["/faioj1499-qpow-fast/index.html","50a2904ec4b2a7cad2f97c1179489db2"],["/friends/index.html","02dbc14a5cfd9e98095cdf9e6eedf336"],["/gallerypage/index.html","2b599270063a885be2c26adf05d718fb"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","bde1da70634c9e7f273740bff53e1d3c"],["/hiddenlist/index-p.html","388db437fc2aa115a9a8ccf77248fffd"],["/hiddenlist/index.html","7a818da5baceffc58791e7bf3cc356e3"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","8aa3e79e0ce0828828e2be0eab7d8da7"],["/jigokutsushin/full/index.html","3d3e327a8b1c66c1d5de0ffc69d7e948"],["/jigokutsushin/mid/index.html","4004095056490acade7dcb7d2a0977f0"],["/jigokutsushin/night/index.html","be88b94c85adc42a71d971a1f645e99c"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","7bd814ae4db874f65a31e3bc6a3259c3"],["/luogu-P1967-noip2018-day-1/index.html","554ce9c246d813a5847ceb127cece9df"],["/luogu-segment-tree/index.html","18521e9c60cca28fca054f98089057a7"],["/ncm_unlock/index.html","13d5eb28e5ee232236d42f64fefb08f6"],["/obs_internet_class_fishing/index.html","92c0a2771d44801e6e0d1abb1bf07a23"],["/oi_history/index.html","d8113d7bada27607f41e5ebee70ac01d"],["/page/2/index.html","12587a21a700d82d7fab5ef2ebfee15c"],["/page/3/index.html","96eb4682aefd497269d631c0704e5121"],["/recall-oi-20200828/index.html","311fc6dfb47ad22bc806453fd43f10aa"],["/seg-tree-namespace/index.html","a38aaa1db7b7379fc66a27db56298bff"],["/shortest-path/index.html","1c19339f37518bd0086c89fbb502f2de"],["/sw-register.js","23eee5f2ad8a19c24969effa123bf16e"],["/tags/DP/index.html","6e9c2ee9856765c10919d44c63a8c4de"],["/tags/GSS/index.html","345005c5a79f9599169bd2ba6451e47d"],["/tags/HEXO/index.html","87d4cbef4c3415d0e593468c30f51c1d"],["/tags/OBS/index.html","e4dcd6f9eeb9fc6ce15c50978d6bfb18"],["/tags/STL/index.html","78ac5c9542b1128d3d712397b35166bb"],["/tags/Template/index.html","94936c3163daabb68403d589ec3bf670"],["/tags/Trick/index.html","887ac383fe512c9f4411f3b86d82d1f0"],["/tags/VPN/index.html","e17301744b8962223dedb8deff94f284"],["/tags/VPS/index.html","f44497a9cd59b63f668740b3a0f1acb6"],["/tags/buzzer/index.html","6901cdfe19aecd086f4428e657a6c421"],["/tags/contest/index.html","761b42a02b00d815093b0bf7265b5631"],["/tags/index.html","535815b6367c5eb697e9b563c8101bf7"],["/tags/segment-tree/index.html","64c93d0be7ac581af832fc1c7398115c"],["/tags/倍增/index.html","ea40f26ba9ab4e8c6fbdc120786659cd"],["/tags/并查集/index.html","90f609fb208dcf590e7b528634b559ef"],["/tags/最短路/index.html","dee4a073b534ca0382f1f56797d566cb"],["/tags/生成树/index.html","923d339fafca83e804f1206eb9fb0e24"],["/tags/贪心/index.html","867b080a0efe03dea0b1da93f6cb0823"],["/tools/2048/index.html","30b9f1aa99733e6adcffd58faf7c8908"],["/tools/arcaea/index.html","40ee829d3259e77606cfb0a48034ebe5"],["/tools/calc/calc-adv1/index.html","226c0ce1d2e5340fbe9eeedeb54a349f"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","74c3f3a593c25cc048c4b43f952287f2"],["/tools/minesweeper/minesweeper-pri/index.html","39d9083b549614600e41624ab9e64cca"],["/tools/niconi/index.html","a350c3e479138062447ff5607f4bc0ce"],["/tools/pac-man/index.html","4d8f82f8aa5a1bcb1e710e9bf2dacfb4"],["/tools/sudoku/index.html","23842db4e53ba1f5f91b8f4b3b71d51c"],["/tools/tetris/tetris3d/index.html","1d12613239f1c821a5567fb85b732e85"],["/vultr_ssr_vpn_buildup/index.html","bba8737b0ed451e64126014847cfd799"],["/webboard/index.html","7819f1c80a5ad860a7c3a6823d2d12db"]];
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
