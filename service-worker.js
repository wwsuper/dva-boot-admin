"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/dva-boot-admin/index.html","153f4d589bec5c02065b3ece879ffbda"],["/dva-boot-admin/static/css/main.a32a91f0.css","b2a03b58ace81cd6c46010744fbc3baa"],["/dva-boot-admin/static/js/0.c459f8f2.chunk.js","de48e171f58b148ac8367e9113ec327e"],["/dva-boot-admin/static/js/1.2e629322.chunk.js","4ebb2ecd168c166c34e8c678836a3160"],["/dva-boot-admin/static/js/10.0696247e.chunk.js","4913d0a453d67b3e0c26afbdc2a71bf8"],["/dva-boot-admin/static/js/11.cc4ac078.chunk.js","c22777bad4c99b9db823b5041b72c96d"],["/dva-boot-admin/static/js/12.02ac0285.chunk.js","a84f3ca594df5454aec4c003283e1517"],["/dva-boot-admin/static/js/13.d19ab3f3.chunk.js","90a5115fda12c4e1598dc845f49e6515"],["/dva-boot-admin/static/js/14.cb3c2d83.chunk.js","e6e4347ca75b937fb8874b9233224078"],["/dva-boot-admin/static/js/15.6a783c76.chunk.js","cd274f64d24d76ff2b293a39d06f3709"],["/dva-boot-admin/static/js/16.7788a104.chunk.js","73a221a1fce2e8d39590ce5f92a3d137"],["/dva-boot-admin/static/js/17.0657ae2d.chunk.js","8c4b6b2ea0b521ef055851f134225a8b"],["/dva-boot-admin/static/js/18.f0e98f76.chunk.js","f933bf5455670059a5fbc3f617087dd7"],["/dva-boot-admin/static/js/19.54ee4a39.chunk.js","e927b4453a7431addcdfbc7e3a44a517"],["/dva-boot-admin/static/js/2.49b32f0d.chunk.js","043e61756bc0a3ace0ee20709d2647d6"],["/dva-boot-admin/static/js/20.2168fe82.chunk.js","aff7a0d4ab555790db28d05f53ab973e"],["/dva-boot-admin/static/js/21.b90a9f01.chunk.js","7caae872c3aa3b6d45a16d10fc99fd76"],["/dva-boot-admin/static/js/22.5814cc4b.chunk.js","2e166466b9f957947568ee65bca09b4a"],["/dva-boot-admin/static/js/23.b276f330.chunk.js","8b59add2eab7abad2a56ff93e42aa2f4"],["/dva-boot-admin/static/js/24.d0ca986a.chunk.js","6a7b81f49be1dc1e47bb8dc05a76e7d6"],["/dva-boot-admin/static/js/3.fe14e0c4.chunk.js","61f8ee80bbc7162cd3733d9a88132043"],["/dva-boot-admin/static/js/4.292c013c.chunk.js","388d4c8bf8e4fc008e1cde78394704a6"],["/dva-boot-admin/static/js/5.e72664c2.chunk.js","d7d621e767d3ff070b2f1590b383abe4"],["/dva-boot-admin/static/js/6.fc91c83e.chunk.js","1b67b7d4bc5f2001a77382521bf6c875"],["/dva-boot-admin/static/js/7.6614ea0e.chunk.js","f538c7423fdfa7a640701af517e57bff"],["/dva-boot-admin/static/js/8.a4bb4179.chunk.js","9d084872d255911109a6bf838a0daca9"],["/dva-boot-admin/static/js/9.49081853.chunk.js","6681f31771261cadc218f0b818582d39"],["/dva-boot-admin/static/js/main.fbd1dd62.js","9905653001c5027ba9e80fb191412eda"],["/dva-boot-admin/static/media/avatar.595f9bc9.jpg","595f9bc9380b1cad5f61fdec19cda60b"],["/dva-boot-admin/static/media/icomoon.11da4f19.svg","11da4f19f54465b5a8dcddebb2ac737a"],["/dva-boot-admin/static/media/icomoon.96d7f1f2.woff","96d7f1f20e056647d4b29728a8d7c39b"],["/dva-boot-admin/static/media/icomoon.d585b42c.eot","d585b42ceaee40e267916bf3371037f3"],["/dva-boot-admin/static/media/icomoon.ea141907.ttf","ea14190751ba8d966844526ec6088bb1"],["/dva-boot-admin/static/media/pattern.c4113510.png","c4113510cff7beeda3fb0f77f2919b63"],["/dva-boot-admin/static/media/topbar-bg.eef71d63.jpg","eef71d63d83b49c46d954e9f41e8ff5e"],["/dva-boot-admin/static/media/workers.3bb77abc.png","3bb77abcf801d53bbda8fe52e4c240b3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/dva-boot-admin/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});