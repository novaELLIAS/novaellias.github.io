/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","95b4de6d3bf34c6629b1f3e8f301be2f"],["/CF372B-Counting-Rectangles-is-Fun/index.html","9ff526b293ad61466b93c10fca60640e"],["/CF749E-Inversions-After-Shuffle/index.html","7025cbd99fd6c3b12e603eece718cb55"],["/DSaAi/index.html","1c2de963b6b59487273c582bf794a75b"],["/GSS1/index.html","c6413abf2760ffb97106ec17ebf7c5a3"],["/GSS3/index.html","7ec4ba1ac869eaea55c7f99974543581"],["/GSS4/index.html","5e72c41ada7d200e930f41e8880011ba"],["/GSS5/index.html","5aa3f7337dd97c134ddf745c30e1cb94"],["/HYAsstSTM32Progress/index.html","3b65c26c5033a6e5a5a7dd2597687b7d"],["/HongYanAsstHard/index.html","bde0e242239453b8b74e607c416b341d"],["/Luogu-P1654-OSU/index.html","c4dc233c2b7fafe67f93cad933e8dc5f"],["/Luogu-P2899-Cell-Phone-Network/index.html","e5d3c57641966b3ab4bb51bd35d04cf4"],["/Luogu-P4289/index.html","f2b4dbdb714ed71c9265f0fabe442f28"],["/Nescafe17-Defenders'-Challenge/index.html","8db59fe015c33f6fd22ad9a1411a0660"],["/OPTIMIZE/index.html","39840c6c37c133ff3ee2595f552afa4a"],["/SP2885-WORDRING-World-Rings/index.html","c89f72b856a7b791eb5f3c97b8b0e7ce"],["/UVA1714-Keyboarding/index.html","c74500e8a280657d6eba33e747514703"],["/aboutme/css/fontawesome.css","318f3c716bfec4300513deaf04536068"],["/aboutme/css/solid.css","6f1639de362d903d390eab64bda74cfa"],["/aboutme/css/style.css","35251e4e2c01f633b32cb8d9e8a2f982"],["/aboutme/index.html","3a7b56adbf5cc68ade49a2f0f6b9b295"],["/aboutme/js/index.js","a151d6cf2abbab65f87e380c544ff53e"],["/aboutme/js/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/aboutme/webfonts/fa-solid-900.eot","70e65a7d34902f2c350816ecfe2f6492"],["/aboutme/webfonts/fa-solid-900.svg","38508b2e7fac045869a86a15936433f7"],["/aboutme/webfonts/fa-solid-900.ttf","0079a0ab6bec4da7d6e16f2a2e87cd71"],["/aboutme/webfonts/fa-solid-900.woff","815694de1120d6c1e9d1f0895ee81056"],["/aboutme/webfonts/fa-solid-900.woff2","14a08198ec7d1eb96d515362293fed36"],["/archives/2017/11/index.html","2d6be2788203a5e867adc954d2cfee62"],["/archives/2017/12/index.html","f1af038035d055a7497fa9e1fcb416cc"],["/archives/2017/index.html","019e97683bfed7be0a5d79cb880d0ac9"],["/archives/2018/06/index.html","6ec103a04c5b7b26fac9e276600afeb1"],["/archives/2018/07/index.html","aabd4031427649ce8743f35a91172494"],["/archives/2018/08/index.html","b4415cd75a8a120c06cfdc64e9fcd608"],["/archives/2018/09/index.html","158db82139dfa893c589449b432b655e"],["/archives/2018/10/index.html","ffd8ff7ce5092c4921ee39729743231b"],["/archives/2018/11/index.html","e185fbff7cac3c40a3cdac42c5a5ab3f"],["/archives/2018/index.html","d56fc2356c57734ad40bd7cf66422a86"],["/archives/2018/page/2/index.html","8da0e1917b61e6d73f12b6b681939ce2"],["/archives/2019/02/index.html","634b56cd1c545a5e432c4b92425f2cd5"],["/archives/2019/07/index.html","0894d31c516ec0fa39ea72526eff6295"],["/archives/2019/index.html","ea9878b619010919c7f9341f1e479eab"],["/archives/2020/01/index.html","d12f374b619ff1136c4c840779ad7a43"],["/archives/2020/03/index.html","e94eeb638b266465e380e2d5ff9c7f3c"],["/archives/2020/07/index.html","ec7307933ad85f7e6c3aab3787a5bf07"],["/archives/2020/08/index.html","eb75efb5a95bd8d8640473d02ada6ffd"],["/archives/2020/11/index.html","e28b8b1b547cf4e2d01c9bd0dc4b34d9"],["/archives/2020/index.html","ef71caa184df69a6bdecc160900563ba"],["/archives/2021/01/index.html","d6c25346d3215a6729ec89d31c61fc59"],["/archives/2021/02/index.html","2b97122715ff67af1cc945689336327b"],["/archives/2021/index.html","7e521ae458683b5d24e6f969748f81b6"],["/archives/index-1.html","2b23fdadfac2733d5ff0635164569e11"],["/archives/index.html","1fec4a5c657d952182f9908581ec4486"],["/archives/page/2/index.html","1fec4a5c657d952182f9908581ec4486"],["/archives/page/3/index.html","1fec4a5c657d952182f9908581ec4486"],["/baidu_verify_oFoINJ957S.html","ce40e33bdc51c29dafa76a18869b9960"],["/bloghistory/index.html","1a73914cabf0058e520ea356bf9656f0"],["/buzzer-define/index.html","e5ef358efc3068421f1b21c4f2a1758a"],["/categories/HEXO/index.html","55a0eced81c5127641bb13c677f5bcf9"],["/categories/Olympiad-in-Informatics/index.html","f0fb7c83242c6792371fe45c8a08b029"],["/categories/Olympiad-in-Informatics/page/2/index.html","81680f980d19906ce670adc5ecadf10a"],["/categories/Trick/index.html","f27ce761bd7c62446747a61caeaff031"],["/categories/VPN/index.html","4d581a4937a6d6af9e46defd44432318"],["/categories/buzzer/index.html","2b9f0c282efac6bce9851a4dba82fb1f"],["/categories/index.html","5b34de80496be96a61903b976e514ead"],["/categories/memory/index.html","747675f522066778df4560381334ec76"],["/css/style.css","2887ee0f6419b4677413f7ba141a38ed"],["/donatepage/index.html","17da3fc21c5511a9346cd10978d1cbbd"],["/essay/A1/index.html","44d933a88aeb150406b76c95563565d5"],["/essay/A2-letter-showing-thanks/index.html","81256e808d66ea6e4176427a44596bda"],["/essay/A5/index.html","c214fad96b925bc9ea0a0d7b8df69ea1"],["/essay/CH-wangke/index.html","64dec11cf71dab6657bd5690bfe7689a"],["/essay/EN-after-class-activities/index.html","fdc52a9db19e3013454749abe67691c5"],["/essay/FrenchRevolution/index.html","f4e32d0953f20861c48a01758c8cfbbb"],["/faioj0101-leftist-heap/index.html","23958ae0eba76941b510d224920e6003"],["/faioj1499-qpow-fast/index.html","c1a72e416333abde34fa589228e03eea"],["/friends/index.html","41acb6e4f75a4d24c7ad74818476e4b0"],["/gallerypage/index.html","b020916b2711a1faf615fce8326f89a3"],["/googleee23d67b90dfc2e5.html","b25ed5412bc31b68561a8f409cf1c9f2"],["/hexo-buildup/index.html","6a6292ea7261c322ac1cea3dddbbc8d5"],["/hiddenlist/index-p.html","ced07534ffe9a862e64d427b1509696c"],["/hiddenlist/index.html","634ff09d1c361be519414fb94ce57ad3"],["/images/YuzukiY.jpg","b1f00232afff8441a5c92e75e404086f"],["/images/avater_sayaka_1.jpg","49f3b5b4ce681441f514f8817f44114d"],["/images/fracture_ray.jpg","c532815f296e1f573fdb8092eed2c494"],["/images/lmd.jpg","e5b94dee9f88a923bcd0ba34d4f0d7a4"],["/images/sk.jpg","66e6dce5c1acb0bb13479dff9950c9db"],["/index.html","8c78245748aa161526f0786edd7f3dbf"],["/jigokutsushin/full/index.html","30d1e0a9f095fa216dcec7af6befd906"],["/jigokutsushin/mid/index.html","374817d1211757287e6c5f7f7773cf45"],["/jigokutsushin/night/index.html","943bee40001e268b4b88a3b744414a08"],["/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["/js/app.js","57c08e5f69f243de123ef338d3b7b3f1"],["/js/issues.js","a0ce26866925172809874d5ba27fccfd"],["/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/lg-P3369-STL/index.html","fad2b8c2afacd1cc174e27490b05c1bf"],["/luogu-P1967-noip2018-day-1/index.html","03839366a42a146240568a98093f2ace"],["/luogu-segment-tree/index.html","229b647992b15c08ca78f04cd41e5880"],["/ncm_unlock/index.html","a4bf320c8d4dedc7acf71950f20b04f3"],["/obs_internet_class_fishing/index.html","a231edc6cd1fc23af95272d417835312"],["/oi_history/index.html","399831fb4199427746be3024d944dc06"],["/page/2/index.html","da28aea37fad5e3619972fbab8815518"],["/page/3/index.html","bc3c05d4288d626e73739c73baf6d582"],["/recall-oi-20200828/index.html","3932f550a76989b6d614debd78af3793"],["/seg-tree-namespace/index.html","2bb916ed0fd155bab665ee1872e2f10e"],["/shortest-path/index.html","e6379e6f117a1a88b886c545b18a1521"],["/sw-register.js","8b067b589e05bca4b0d8b52282fa2a18"],["/tags/DP/index.html","6deb41d85943be07dd267d141656284c"],["/tags/GSS/index.html","b706f3407bde99fee5bfc9ced90fec30"],["/tags/HEXO/index.html","dd1b7b86b934587301cd149704a7486e"],["/tags/OBS/index.html","3f1ad5f894f7998303bbbd73d8e3032d"],["/tags/STL/index.html","02a479809052e2d747a0659b503c99a4"],["/tags/Template/index.html","db9dfa531839663d977eee87e3e799dd"],["/tags/Trick/index.html","433c9049a782169abab71574f19ba183"],["/tags/VPN/index.html","fbfd4ae2f006189422d66d1761159cb8"],["/tags/VPS/index.html","3d80ba7265ee5c0dea4e6270fff42264"],["/tags/buzzer/index.html","e39e152427f4e99f64076014b47570aa"],["/tags/contest/index.html","bdd73e68fffba3f6b426a83853a35e0d"],["/tags/index.html","71478ea54500c01b0ab454c70bbda40a"],["/tags/segment-tree/index.html","1eddbe2e40a5734c544f3bfce7b33e7d"],["/tags/倍增/index.html","70a6bc82d84e12075fc44938471989a0"],["/tags/并查集/index.html","66f7c11acba66fa091a5043cdf4ad05e"],["/tags/最短路/index.html","e6631e9c231ab818a4ccf8ca24036a93"],["/tags/生成树/index.html","4e781631f936a37dff353cf1b9c273dd"],["/tags/贪心/index.html","7647d308a521f0f13c1e5d62c67e3904"],["/tools/2048/index.html","1cbaceefd57c36f9acb194c93604ca34"],["/tools/arcaea/index.html","a3c9b3a3be4a5fcf6aa9e0a1c5c1c6df"],["/tools/calc/calc-adv1/index.html","bf7bed80cf45981a6461085b6529ece0"],["/tools/element/index.html","5fe3568d31b805cf8ce24fcdd77d8b04"],["/tools/minesweeper/minesweeper-adv/index.html","871aedf331244960d23118dc1de127a2"],["/tools/minesweeper/minesweeper-adv/test.html","2cae45e35a95fa48d9fbec7535e483e4"],["/tools/minesweeper/minesweeper-pri/index.html","724c9e81bd624a8d810ab3837e30056a"],["/tools/niconi/index.html","fe959c0593ce6c0828d26f518986fc84"],["/tools/pac-man/index.html","f3a17ee9ffcdb9ec9bcda96f2990fd33"],["/tools/sudoku/index.html","3e37925ccfe745de8bb0cdd57aa87c82"],["/tools/tetris/tetris3d/index.html","8439cbd09ab869c05d88d2dcda850596"],["/vultr_ssr_vpn_buildup/index.html","d42044c037af9e473cef9feee14ea0bd"],["/webboard/index.html","b96d1f2f45ab5558770370a46041a00c"]];
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
