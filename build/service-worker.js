"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","245d94bae38d10278ab0e04d7f4b5a5a"],["/static/css/main.27676dfb.css","b834b12e43d5d20c184e722ebd625dfa"],["/static/js/main.4663b7ee.js","11f698112ba3c4b86b4aa5cf3fc8126b"],["/static/media/_Home.0b314c76.scss","0b314c7696f4bbafe89be19230a03a4d"],["/static/media/about.c4f5fce7.svg","c4f5fce78312b0cdd66ae8144ade7757"],["/static/media/aboutBGFullscreen.42c958bc.jpeg","42c958bcbcca785dd04a42bcc7b1cd08"],["/static/media/aboutBGMidsize.8a5aa8db.jpeg","8a5aa8dbf4f501ad1acec4434da6ad4c"],["/static/media/aboutBGMobile.33ad2b85.jpeg","33ad2b850f20f880c346549800bf60fa"],["/static/media/aboutFullscreen.6a78493a.svg","6a78493a141d37e04037ef6e9ace118f"],["/static/media/balletBack.6a4e1832.jpg","6a4e18320e5c933cce5782716a986a13"],["/static/media/balletSLC.f13be9ae.svg","f13be9ae1dc1c75035c34aaac5d6bc2f"],["/static/media/coppelia.4f038097.jpeg","4f038097e3f50df68e4621a0a2e6275f"],["/static/media/landingBGFullscreen.f88d921c.jpeg","f88d921c627ef73b0bbcb993b754e41d"],["/static/media/landingBGMidSize.4ccd3347.jpeg","4ccd3347b6bc535ca817cba8e2ae0c56"],["/static/media/landingBGMobile.142bdf83.jpeg","142bdf8366fc63cce477e3b53ca37a24"],["/static/media/removeIcon.883ac22c.svg","883ac22c8218e2620ed7cc0bb05bd753"],["/static/media/season.b6cad643.svg","b6cad643499307eae716d5ef70097926"],["/static/media/seasonBGFullscreen.896e0279.jpeg","896e0279fea17bed0596323bd0075e88"],["/static/media/seasonBGMidsize.306c11ad.jpeg","306c11ada6981c4fc242ea0adc1947b0"],["/static/media/seasonBGMobile.b4dfcb9f.jpeg","b4dfcb9f1152995c7a49e17b4f59f586"],["/static/media/seasonFullscreen.2286ce55.svg","2286ce55a76d503a7c2682e99568b3b7"],["/static/media/support.7ac9b0e8.svg","7ac9b0e8c8b1c6c4b3f48bd88f784f2c"],["/static/media/supportBGFullscreen.b797c7d4.jpeg","b797c7d46e433be499b86a4198d46cdc"],["/static/media/supportBGMidsize.8479694d.jpeg","8479694d88bd188ce66aa87d6fc0e55f"],["/static/media/supportBGMobile.e49e4b63.jpeg","e49e4b63e20ea06bb39e7672a17a8494"],["/static/media/supportFullscreen.21544d88.svg","21544d88e1e264f6f187d8298eed229e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});