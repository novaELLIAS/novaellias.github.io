/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","95b4de6d3bf34c6629b1f3e8f301be2f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","9ff526b293ad61466b93c10fca60640e"],["/CF749E-Inversions-After-Shuffle/index.html","7025cbd99fd6c3b12e603eece718cb55"],["/DSaAi/index.html","1c2de963b6b59487273c582bf794a75b"],["/GSS1/index.html","c6413abf2760ffb97106ec17ebf7c5a3"],["/GSS3/index.html","7ec4ba1ac869eaea55c7f99974543581"],["/GSS4/index.html","5e72c41ada7d200e930f41e8880011ba"],["/GSS5/index.html","5aa3f7337dd97c134ddf745c30e1cb94"],["/HYAsstSTM32Progress/index.html","21f91f026c3d934f1509e5e7a7110a75"],["/HongYanAsstHard/index.html","bde0e242239453b8b74e607c416b341d"],["/Luogu-P1654-OSU/index.html","c4dc233c2b7fafe67f93cad933e8dc5f"],["/Luogu-P2899-Cell-Phone-Network/index.html","e5d3c57641966b3ab4bb51bd35d04cf4"],["/Luogu-P4289/index.html","f2b4dbdb714ed71c9265f0fabe442f28"],["/Nescafe17-Defenders'-Challenge/index.html","8db59fe015c33f6fd22ad9a1411a0660"],["/OPTIMIZE/index.html","39840c6c37c133ff3ee2595f552afa4a"],["/SP2885-WORDRING-World-Rings/index.html","c89f72b856a7b791eb5f3c97b8b0e7ce"],["/UVA1714-Keyboarding/index.html","c74500e8a280657d6eba33e747514703"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","3a7b56adbf5cc68ade49a2f0f6b9b295"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","c01d66ad268c35081ba9ef463fd37047"],["/archives/2017/12/index.html","446e6169e86d329d90b19bf4240e1e13"],["/archives/2017/index.html","41e12494c094d70a911e8b7e7e2be1ee"],["/archives/2018/06/index.html","854a5f6ab9b1967d3d2e6f79fc74b707"],["/archives/2018/07/index.html","3eca7d332bbfce950a51ca3bd3441e96"],["/archives/2018/08/index.html","cf9030248df24ede26a4dc25e080aa01"],["/archives/2018/09/index.html","2a18c9393b87497a70789c9df1732ee5"],["/archives/2018/10/index.html","3407b7420965f5902241f2292b58d548"],["/archives/2018/11/index.html","ee609e7de1477eb42a2b7a703d78498c"],["/archives/2018/index.html","b8390406c9b78bedf642290ad43bca17"],["/archives/2018/page/2/index.html","04a5d37d92685ca8b199ad6129a09e77"],["/archives/2019/02/index.html","bd838ba7c0cd05e78e47728b5c239b78"],["/archives/2019/07/index.html","1b5f0d1d2718237c62cb3cd3110401cd"],["/archives/2019/index.html","c6a88fe5c5a8174d0b454993ea057df0"],["/archives/2020/01/index.html","cf446749a76eea3c2f259105fcba51af"],["/archives/2020/03/index.html","01e03e9210490d2c0c097b39b911c98a"],["/archives/2020/07/index.html","ddc7ef8c06712df0b14d6bd5042f9814"],["/archives/2020/08/index.html","ef6c9e72ae01d1447d09dff1738ecd32"],["/archives/2020/11/index.html","543b0fee202af6748fd38668b4b4c3ad"],["/archives/2020/index.html","96cdbd832d357c9b16cc198506cc6f17"],["/archives/2021/01/index.html","efefcac989f1492390470bb94be89df1"],["/archives/2021/02/index.html","3545791c1c5e11ea85ded477dcfa9f4a"],["/archives/2021/index.html","8f954d5852a94b94d79a58fb014b2129"],["/archives/index-1.html","2b23fdadfac2733d5ff0635164569e11"],["/archives/index.html","a0510c2a321e78635d08d2502e9b429e"],["/archives/page/2/index.html","634e1fa4167c2a7719f0d9946689bdfe"],["/archives/page/3/index.html","634e1fa4167c2a7719f0d9946689bdfe"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","1a73914cabf0058e520ea356bf9656f0"],["/buzzer-define/index.html","e5ef358efc3068421f1b21c4f2a1758a"],["/categories/HEXO/index.html","8d2f0cfa245285ba825c77093eccbd3e"],["/categories/Olympiad-in-Informatics/index.html","20adaeb0f66ff7d27cc7d01bf1879822"],["/categories/Olympiad-in-Informatics/page/2/index.html","88e12c85f69016c473c9c19ce2ee73bc"],["/categories/Trick/index.html","6316c1a9842b83e7048426622350ad67"],["/categories/VPN/index.html","4f50d1998a3ab9c4bccf4febe6199bf1"],["/categories/buzzer/index.html","f879a64f5ba2c0fcd4c9c04236cb72c4"],["/categories/index.html","5b34de80496be96a61903b976e514ead"],["/categories/memory/index.html","2868ac3118181e648206673d5f806a52"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","17da3fc21c5511a9346cd10978d1cbbd"],["/essay/A1/index.html","44d933a88aeb150406b76c95563565d5"],["/essay/A2-letter-showing-thanks/index.html","81256e808d66ea6e4176427a44596bda"],["/essay/A5/index.html","c214fad96b925bc9ea0a0d7b8df69ea1"],["/essay/CH-wangke/index.html","64dec11cf71dab6657bd5690bfe7689a"],["/essay/EN-after-class-activities/index.html","fdc52a9db19e3013454749abe67691c5"],["/essay/FrenchRevolution/index.html","f4e32d0953f20861c48a01758c8cfbbb"],["/faioj0101-leftist-heap/index.html","23958ae0eba76941b510d224920e6003"],["/faioj1499-qpow-fast/index.html","c1a72e416333abde34fa589228e03eea"],["/friends/index.html","41acb6e4f75a4d24c7ad74818476e4b0"],["/gallerypage/index.html","1cbca2c3df0dab693c1d99409dee4235"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","6a6292ea7261c322ac1cea3dddbbc8d5"],["/hiddenlist/index-p.html","ced07534ffe9a862e64d427b1509696c"],["/hiddenlist/index.html","634ff09d1c361be519414fb94ce57ad3"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","b2cb6b0c75d7ca29e052e16196f42bac"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","fad2b8c2afacd1cc174e27490b05c1bf"],["/luogu-P1967-noip2018-day-1/index.html","03839366a42a146240568a98093f2ace"],["/luogu-segment-tree/index.html","229b647992b15c08ca78f04cd41e5880"],["/ncm_unlock/index.html","a4bf320c8d4dedc7acf71950f20b04f3"],["/obs_internet_class_fishing/index.html","a231edc6cd1fc23af95272d417835312"],["/oi_history/index.html","399831fb4199427746be3024d944dc06"],["/page/2/index.html","6d9b6b7cb79b788fba12011643ab13d0"],["/page/3/index.html","588168e370e8dd82307850dde7ce086f"],["/recall-oi-20200828/index.html","3932f550a76989b6d614debd78af3793"],["/seg-tree-namespace/index.html","2bb916ed0fd155bab665ee1872e2f10e"],["/shortest-path/index.html","e6379e6f117a1a88b886c545b18a1521"],["/sw-register.js","70b37dd60de34bda928a61821b28f0bf"],["/tags/DP/index.html","260341fe276c79f3885cf3eadeb2649a"],["/tags/GSS/index.html","2deeb5e610c3fc95808e1ee7570c357f"],["/tags/HEXO/index.html","005fa5d506215998b063e60b969ec518"],["/tags/OBS/index.html","c19a95421d8136fa90d18081742fa31b"],["/tags/STL/index.html","92e3f87b45efacb0f379e4ec6e142570"],["/tags/Template/index.html","cca58cd4eb894e0cf48e2ac7a2d96a73"],["/tags/Trick/index.html","41768e0e8631a35cb7098039c1f1a7e3"],["/tags/VPN/index.html","e269c87a9def3f8a6f41c72aecd4684d"],["/tags/VPS/index.html","692d447b420e32901b5919f26446ae58"],["/tags/buzzer/index.html","532c5e7f17ddb72279cfc99578f1d303"],["/tags/contest/index.html","5234962db2dbf4dc45224a3c037209b1"],["/tags/index.html","71478ea54500c01b0ab454c70bbda40a"],["/tags/segment-tree/index.html","d02196b537a4ab10baf85ff124e8d1c5"],["/tags/倍增/index.html","97bbb78cca70eacba00207cf5eba86fe"],["/tags/并查集/index.html","c08c0bf35dfbe349e82f28904aca3b60"],["/tags/最短路/index.html","9c836ab890e43e51b8f7c41c055c89f6"],["/tags/生成树/index.html","7f179431cd9e87871a98e8604c6a66b1"],["/tags/贪心/index.html","9318a1c943dff1968cb0b6cf85eae74f"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","a3c9b3a3be4a5fcf6aa9e0a1c5c1c6df"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","2cae45e35a95fa48d9fbec7535e483e4"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","fe959c0593ce6c0828d26f518986fc84"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","8439cbd09ab869c05d88d2dcda850596"],["/vultr_ssr_vpn_buildup/index.html","d42044c037af9e473cef9feee14ea0bd"],["/webboard/index.html","b96d1f2f45ab5558770370a46041a00c"]];
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
