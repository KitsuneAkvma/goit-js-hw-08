function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=void 0!==t&&"[object global]"==={}.toString.call(t);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function u(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function c(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function l(e){return/^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e)}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(u(r))return"https://vimeo.com/".concat(r);if(c(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var f=void 0!==Array.prototype.indexOf,d="undefined"!=typeof window&&void 0!==window.postMessage;if(!(o||f&&d))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(r(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),r(e.prototype,"get",(function(e){if(n(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:h);var v,m,g=(v=function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,n,r;r=function(){var e,t,n,r=Object.prototype.toString,o="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function i(e,r){n.add(e,r),t||(t=o(n.drain))}function a(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)c(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function c(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=a(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function l(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=a(e))?i((function(){var r=new d(n);try{t.call(e,(function(){l.apply(r,arguments)}),(function(){s.apply(r,arguments)}))}catch(e){s.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&i(u,n))}catch(e){s.call(new d(n),e)}}}function s(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&i(u,t))}function f(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function v(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&i(u,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){l.call(t,e)}),(function(e){s.call(t,e)}))}catch(e){s.call(t,e)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var m=e({},"constructor",v,!1);return v.prototype=m,e(m,"__NPO__",0,!1),e(v,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(v,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(v,"all",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;f(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(v,"race",(function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");f(t,e,(function(e,t){n(t)}),r)}))})),v},(n=h)[t="Promise"]=n[t]||r(),e.exports&&(e.exports=n[t])},v(m={exports:{}},m.exports),m.exports),p=new WeakMap;function y(e,t,n){var r=p.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),p.set(e.element,r)}function w(e,t){return(p.get(e.element)||{})[t]||[]}function b(e,t,n){var r=p.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],p.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),p.set(e.element,r),r[t]&&0===r[t].length}function k(e,t){var n=p.get(e);p.set(t,n),p.delete(e)}function E(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){return console.warn(e),{}}return e}function T(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function C(e,t){var n,r=[];if((t=E(t)).event){if("error"===t.event)w(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),b(e,t.data.method,n)}));r=w(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=w(e,t);if(n.length<1)return!1;var r=n.shift();return b(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}}))}var x=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return x.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function P(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!c(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return P(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}var M=new WeakMap,N=new WeakMap,j={},F=function(){function e(t){var r=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!a(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var i=t.querySelector("iframe");i&&(t=i)}if("IFRAME"===t.nodeName&&!c(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(M.has(t))return M.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var u=new g((function(e,n){if(r._onMessage=function(t){if(c(t.origin)&&r.element.contentWindow===t.source){"*"===r.origin&&(r.origin=t.origin);var o=E(t.data);if(o&&"error"===o.event&&o.data&&"ready"===o.data.method){var i=new Error(o.data.message);return i.name=o.data.name,void n(i)}var a=o&&"ready"===o.event,u=o&&"ping"===o.method;if(a||u)return r.element.setAttribute("data-ready","true"),void e();C(r,o)}},r._window.addEventListener("message",r._onMessage),"IFRAME"!==r.element.nodeName){var i=A(t,o);_(s(i),i,t).then((function(e){var n=P(e,t);return r.element=n,r._originalElement=t,k(t,n),M.set(r.element,r),e})).catch(n)}}));if(N.set(this,u),M.set(this.element,this),"IFRAME"===this.element.nodeName&&T(this,"ping"),j.isEnabled){var l=function(){return j.exit()};this.fullscreenchangeHandler=function(){j.isFullscreen?y(r,"event:exitFullscreen",l):b(r,"event:exitFullscreen",l),r.ready().then((function(){T(r,"fullscreenchange",j.isFullscreen)}))},j.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,o,u;return t=e,o=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new g((function(r,o){return t.ready().then((function(){y(t,e,{resolve:r,reject:o}),T(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new g((function(n,r){return e=i(e,"get"),t.ready().then((function(){y(t,e,{resolve:n,reject:r}),T(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new g((function(r,o){if(e=i(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){y(n,e,{resolve:r,reject:o}),T(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===w(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),y(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");b(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=N.get(this)||new g((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return g.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return j.isEnabled?j.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return j.isEnabled?j.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return j.isEnabled?g.resolve(j.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new g((function(t){if(N.delete(e),M.delete(e.element),e._originalElement&&(M.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),j.isEnabled&&j.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],o&&r(t.prototype,o),u&&r(t,u),e}();o||(j=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=A(e);_(s(t),t,e).then((function(t){return P(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(c(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoSeoMetadataAppended){window.VimeoSeoMetadataAppended=!0;var t=function(t){if(c(t.origin)){var n=E(t.data);if(n&&"ready"===n.event)for(var r=e.querySelectorAll("iframe"),o=0;o<r.length;o++){var i=r[o],a=i.contentWindow===t.source;l(i.src)&&a&&new F(i).callMethod("appendVideoMetadata",window.location.href)}}};window.addEventListener("message",t)}}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoCheckedUrlTimeParam){window.VimeoCheckedUrlTimeParam=!0;var t=function(e){"console"in window&&console.error&&console.error("There was an error getting video Id: ".concat(e))},n=function(n){if(c(n.origin)){var r=E(n.data);if(r&&"ready"===r.event)for(var o=e.querySelectorAll("iframe"),i=0;i<o.length;i++){var a=o[i],u=a.contentWindow===n.source;l(a.src)&&u&&function(){var e=new F(a);e.getVideoId().then((function(t){var n=new RegExp("[?&]vimeo_t_".concat(t,"=([^&#]*)")).exec(window.location.href);if(n&&n[1]){var r=decodeURI(n[1]);e.setCurrentTime(r)}})).catch(t)}()}}};window.addEventListener("message",n)}}());var S,O=F,I=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,R=/^0o[0-7]+$/i,L=parseInt,W="object"==typeof t&&t&&t.Object===Object&&t,z="object"==typeof self&&self&&self.Object===Object&&self,U=W||z||Function("return this")(),$=Object.prototype.toString,D=Math.max,H=Math.min,B=function(){return U.Date.now()};function Q(e,t,n){var r,o,i,a,u,c,l=0,s=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function v(e){return l=e,u=setTimeout(g,t),s?h(e):a}function m(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=i}function g(){var e=B();if(m(e))return p(e);u=setTimeout(g,function(e){var n=t-(e-c);return f?H(n,i-(e-l)):n}(e))}function p(e){return u=void 0,d&&r?h(e):(r=o=void 0,a)}function y(){var e=B(),n=m(e);if(r=arguments,o=this,c=e,n){if(void 0===u)return v(c);if(f)return u=setTimeout(g,t),h(c)}return void 0===u&&(u=setTimeout(g,t)),a}return t=J(t)||0,Y(n)&&(s=!!n.leading,i=(f="maxWait"in n)?D(J(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=c=o=u=void 0},y.flush=function(){return void 0===u?a:p(B())},y}function Y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function J(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==$.call(e)}(e))return NaN;if(Y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(I,"");var n=V.test(e);return n||R.test(e)?L(e.slice(2),n?2:8):q.test(e)?NaN:+e}S=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Q(e,t,{leading:r,maxWait:t,trailing:o})};var X,G,K={},Z=K={};function ee(){throw new Error("setTimeout has not been defined")}function te(){throw new Error("clearTimeout has not been defined")}function ne(e){if(X===setTimeout)return setTimeout(e,0);if((X===ee||!X)&&setTimeout)return X=setTimeout,setTimeout(e,0);try{return X(e,0)}catch(t){try{return X.call(null,e,0)}catch(t){return X.call(this,e,0)}}}!function(){try{X="function"==typeof setTimeout?setTimeout:ee}catch(e){X=ee}try{G="function"==typeof clearTimeout?clearTimeout:te}catch(e){G=te}}();var re,oe=[],ie=!1,ae=-1;function ue(){ie&&re&&(ie=!1,re.length?oe=re.concat(oe):ae=-1,oe.length&&ce())}function ce(){if(!ie){var e=ne(ue);ie=!0;for(var t=oe.length;t;){for(re=oe,oe=[];++ae<t;)re&&re[ae].run();ae=-1,t=oe.length}re=null,ie=!1,function(e){if(G===clearTimeout)return clearTimeout(e);if((G===te||!G)&&clearTimeout)return G=clearTimeout,clearTimeout(e);try{G(e)}catch(t){try{return G.call(null,e)}catch(t){return G.call(this,e)}}}(e)}}function le(e,t){this.fun=e,this.array=t}function se(){}function fe(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function de(e,t){for(var n,r="",o=0,i=-1,a=0,u=0;u<=e.length;++u){if(u<e.length)n=e.charCodeAt(u);else{if(47===n)break;n=47}if(47===n){if(i===u-1||1===a);else if(i!==u-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var c=r.lastIndexOf("/");if(c!==r.length-1){-1===c?(r="",o=0):o=(r=r.slice(0,c)).length-1-r.lastIndexOf("/"),i=u,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=u,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,u):r=e.slice(i+1,u),o=u-i-1;i=u,a=0}else 46===n&&-1!==a?++a:a=-1}return r}Z.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];oe.push(new le(e,t)),1!==oe.length||ie||ne(ce)},le.prototype.run=function(){this.fun.apply(null,this.array)},Z.title="browser",Z.browser=!0,Z.env={},Z.argv=[],Z.version="",Z.versions={},Z.on=se,Z.addListener=se,Z.once=se,Z.off=se,Z.removeListener=se,Z.removeAllListeners=se,Z.emit=se,Z.prependListener=se,Z.prependOnceListener=se,Z.listeners=function(e){return[]},Z.binding=function(e){throw new Error("process.binding is not supported")},Z.cwd=function(){return"/"},Z.chdir=function(e){throw new Error("process.chdir is not supported")},Z.umask=function(){return 0};var he={resolve:function(){for(var e,t="",n=!1,r=arguments.length-1;r>=-1&&!n;r--){var o;r>=0?o=arguments[r]:(void 0===e&&(e=K.cwd()),o=e),fe(o),0!==o.length&&(t=o+"/"+t,n=47===o.charCodeAt(0))}return t=de(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(fe(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=de(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return fe(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];fe(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":he.normalize(e)},relative:function(e,t){if(fe(e),fe(t),e===t)return"";if((e=he.resolve(e))===(t=he.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,o=r-n,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var a=t.length-i,u=o<a?o:a,c=-1,l=0;l<=u;++l){if(l===u){if(a>u){if(47===t.charCodeAt(i+l))return t.slice(i+l+1);if(0===l)return t.slice(i+l)}else o>u&&(47===e.charCodeAt(n+l)?c=l:0===l&&(c=0));break}var s=e.charCodeAt(n+l);if(s!==t.charCodeAt(i+l))break;47===s&&(c=l)}var f="";for(l=n+c+1;l<=r;++l)l!==r&&47!==e.charCodeAt(l)||(0===f.length?f+="..":f+="/..");return f.length>0?f+t.slice(i+c):(i+=c,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(fe(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');fe(e);var n,r=0,o=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,u=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!i){r=n+1;break}}else-1===u&&(i=!1,u=n+1),a>=0&&(c===t.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=u))}return r===o?o=u:-1===o&&(o=e.length),e.slice(r,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===o&&(i=!1,o=n+1);return-1===o?"":e.slice(r,o)},extname:function(e){fe(e);for(var t=-1,n=0,r=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var u=e.charCodeAt(a);if(47!==u)-1===r&&(o=!1,r=a+1),46===u?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){fe(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),o=47===r;o?(t.root="/",n=1):n=0;for(var i=-1,a=0,u=-1,c=!0,l=e.length-1,s=0;l>=n;--l)if(47!==(r=e.charCodeAt(l)))-1===u&&(c=!1,u=l+1),46===r?-1===i?i=l:1!==s&&(s=1):-1!==i&&(s=-1);else if(!c){a=l+1;break}return-1===i||-1===u||0===s||1===s&&i===u-1&&i===a+1?-1!==u&&(t.base=t.name=0===a&&o?e.slice(1,u):e.slice(a,u)):(0===a&&o?(t.name=e.slice(1,i),t.base=e.slice(1,u)):(t.name=e.slice(a,i),t.base=e.slice(a,u)),t.ext=e.slice(i,u)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};he.posix=he;const ve=new O(document.querySelector("iframe"));let me=Number(localStorage.getItem("videoplayer-current-time"));window.addEventListener("load",(e=>{localStorage.getItem("videoplayer-current-time")&&(console.log(`Video progress from last session: ${me} seconds`),ve.setCurrentTime(me))})),ve.getVideoTitle().then((e=>{console.log(`Video title: ${e}`)})),ve.on("timeupdate",e(S)((e=>{ve.getCurrentTime().then((e=>{e<=571&&(console.log(e),localStorage.setItem("videoplayer-current-time",e))}))}),1e3)),ve.on("ended",(e=>{localStorage.setItem("videoplayer-current-time",0),console.log("video has ended")}));
//# sourceMappingURL=02-video.cd48b733.js.map