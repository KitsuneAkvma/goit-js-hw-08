// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"apBie":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d7f32204f5b1d392";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1F3pe":[function(require,module,exports) {
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */ /******/ (function() {
    /******/ var __webpack_modules__ = {
        /***/ "./node_modules/@vimeo/player/dist/player.es.js": /*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/ /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\n/**\n * @module lib/functions\n */\n\n/**\n * Check to see this is a node environment.\n * @type {Boolean}\n */\n\n/* global global */\nvar isNode = typeof __webpack_require__.g !== 'undefined' && {}.toString.call(__webpack_require__.g) === '[object global]';\n/**\n * Get the name of the method for a given getter or setter.\n *\n * @param {string} prop The name of the property.\n * @param {string} type Either “get” or “set”.\n * @return {string}\n */\n\nfunction getMethodName(prop, type) {\n  if (prop.indexOf(type.toLowerCase()) === 0) {\n    return prop;\n  }\n\n  return \"\".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));\n}\n/**\n * Check to see if the object is a DOM Element.\n *\n * @param {*} element The object to check.\n * @return {boolean}\n */\n\nfunction isDomElement(element) {\n  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);\n}\n/**\n * Check to see whether the value is a number.\n *\n * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html\n * @param {*} value The value to check.\n * @param {boolean} integer Check if the value is an integer.\n * @return {boolean}\n */\n\nfunction isInteger(value) {\n  // eslint-disable-next-line eqeqeq\n  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;\n}\n/**\n * Check to see if the URL is a Vimeo url.\n *\n * @param {string} url The url string.\n * @return {boolean}\n */\n\nfunction isVimeoUrl(url) {\n  return /^(https?:)?\\/\\/((player|www)\\.)?vimeo\\.com(?=$|\\/)/.test(url);\n}\n/**\n * Check to see if the URL is for a Vimeo embed.\n *\n * @param {string} url The url string.\n * @return {boolean}\n */\n\nfunction isVimeoEmbed(url) {\n  var expr = /^https:\\/\\/player\\.vimeo\\.com\\/video\\/\\d+/;\n  return expr.test(url);\n}\n/**\n * Get the Vimeo URL from an element.\n * The element must have either a data-vimeo-id or data-vimeo-url attribute.\n *\n * @param {object} oEmbedParameters The oEmbed parameters.\n * @return {string}\n */\n\nfunction getVimeoUrl() {\n  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var id = oEmbedParameters.id;\n  var url = oEmbedParameters.url;\n  var idOrUrl = id || url;\n\n  if (!idOrUrl) {\n    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');\n  }\n\n  if (isInteger(idOrUrl)) {\n    return \"https://vimeo.com/\".concat(idOrUrl);\n  }\n\n  if (isVimeoUrl(idOrUrl)) {\n    return idOrUrl.replace('http:', 'https:');\n  }\n\n  if (id) {\n    throw new TypeError(\"\\u201C\".concat(id, \"\\u201D is not a valid video id.\"));\n  }\n\n  throw new TypeError(\"\\u201C\".concat(idOrUrl, \"\\u201D is not a vimeo.com url.\"));\n}\n\nvar arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';\nvar postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';\n\nif (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {\n  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');\n}\n\nvar commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};\n\nfunction createCommonjsModule(fn, module) {\n	return module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\n/*!\n * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill\n * https://github.com/polygonplanet/weakmap-polyfill\n * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>\n * @license MIT\n */\n(function (self) {\n\n  if (self.WeakMap) {\n    return;\n  }\n\n  var hasOwnProperty = Object.prototype.hasOwnProperty;\n\n  var hasDefine = Object.defineProperty && function () {\n    try {\n      // Avoid IE8's broken Object.defineProperty\n      return Object.defineProperty({}, 'x', {\n        value: 1\n      }).x === 1;\n    } catch (e) {}\n  }();\n\n  var defineProperty = function (object, name, value) {\n    if (hasDefine) {\n      Object.defineProperty(object, name, {\n        configurable: true,\n        writable: true,\n        value: value\n      });\n    } else {\n      object[name] = value;\n    }\n  };\n\n  self.WeakMap = function () {\n    // ECMA-262 23.3 WeakMap Objects\n    function WeakMap() {\n      if (this === void 0) {\n        throw new TypeError(\"Constructor WeakMap requires 'new'\");\n      }\n\n      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])\n\n      if (arguments.length > 0) {\n        // Currently, WeakMap `iterable` argument is not supported\n        throw new TypeError('WeakMap iterable is not supported');\n      }\n    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)\n\n\n    defineProperty(WeakMap.prototype, 'delete', function (key) {\n      checkInstance(this, 'delete');\n\n      if (!isObject(key)) {\n        return false;\n      }\n\n      var entry = key[this._id];\n\n      if (entry && entry[0] === key) {\n        delete key[this._id];\n        return true;\n      }\n\n      return false;\n    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)\n\n    defineProperty(WeakMap.prototype, 'get', function (key) {\n      checkInstance(this, 'get');\n\n      if (!isObject(key)) {\n        return void 0;\n      }\n\n      var entry = key[this._id];\n\n      if (entry && entry[0] === key) {\n        return entry[1];\n      }\n\n      return void 0;\n    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)\n\n    defineProperty(WeakMap.prototype, 'has', function (key) {\n      checkInstance(this, 'has');\n\n      if (!isObject(key)) {\n        return false;\n      }\n\n      var entry = key[this._id];\n\n      if (entry && entry[0] === key) {\n        return true;\n      }\n\n      return false;\n    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)\n\n    defineProperty(WeakMap.prototype, 'set', function (key, value) {\n      checkInstance(this, 'set');\n\n      if (!isObject(key)) {\n        throw new TypeError('Invalid value used as weak map key');\n      }\n\n      var entry = key[this._id];\n\n      if (entry && entry[0] === key) {\n        entry[1] = value;\n        return this;\n      }\n\n      defineProperty(key, this._id, [key, value]);\n      return this;\n    });\n\n    function checkInstance(x, methodName) {\n      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {\n        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);\n      }\n    }\n\n    function genId(prefix) {\n      return prefix + '_' + rand() + '.' + rand();\n    }\n\n    function rand() {\n      return Math.random().toString().substring(2);\n    }\n\n    defineProperty(WeakMap, '_polyfill', true);\n    return WeakMap;\n  }();\n\n  function isObject(x) {\n    return Object(x) === x;\n  }\n})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);\n\nvar npo_src = createCommonjsModule(function (module) {\n/*! Native Promise Only\n    v0.8.1 (c) Kyle Simpson\n    MIT License: http://getify.mit-license.org\n*/\n(function UMD(name, context, definition) {\n  // special form of UMD for polyfilling across evironments\n  context[name] = context[name] || definition();\n\n  if ( module.exports) {\n    module.exports = context[name];\n  }\n})(\"Promise\", typeof commonjsGlobal != \"undefined\" ? commonjsGlobal : commonjsGlobal, function DEF() {\n\n  var builtInProp,\n      cycle,\n      scheduling_queue,\n      ToString = Object.prototype.toString,\n      timer = typeof setImmediate != \"undefined\" ? function timer(fn) {\n    return setImmediate(fn);\n  } : setTimeout; // dammit, IE8.\n\n  try {\n    Object.defineProperty({}, \"x\", {});\n\n    builtInProp = function builtInProp(obj, name, val, config) {\n      return Object.defineProperty(obj, name, {\n        value: val,\n        writable: true,\n        configurable: config !== false\n      });\n    };\n  } catch (err) {\n    builtInProp = function builtInProp(obj, name, val) {\n      obj[name] = val;\n      return obj;\n    };\n  } // Note: using a queue instead of array for efficiency\n\n\n  scheduling_queue = function Queue() {\n    var first, last, item;\n\n    function Item(fn, self) {\n      this.fn = fn;\n      this.self = self;\n      this.next = void 0;\n    }\n\n    return {\n      add: function add(fn, self) {\n        item = new Item(fn, self);\n\n        if (last) {\n          last.next = item;\n        } else {\n          first = item;\n        }\n\n        last = item;\n        item = void 0;\n      },\n      drain: function drain() {\n        var f = first;\n        first = last = cycle = void 0;\n\n        while (f) {\n          f.fn.call(f.self);\n          f = f.next;\n        }\n      }\n    };\n  }();\n\n  function schedule(fn, self) {\n    scheduling_queue.add(fn, self);\n\n    if (!cycle) {\n      cycle = timer(scheduling_queue.drain);\n    }\n  } // promise duck typing\n\n\n  function isThenable(o) {\n    var _then,\n        o_type = typeof o;\n\n    if (o != null && (o_type == \"object\" || o_type == \"function\")) {\n      _then = o.then;\n    }\n\n    return typeof _then == \"function\" ? _then : false;\n  }\n\n  function notify() {\n    for (var i = 0; i < this.chain.length; i++) {\n      notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);\n    }\n\n    this.chain.length = 0;\n  } // NOTE: This is a separate function to isolate\n  // the `try..catch` so that other code can be\n  // optimized better\n\n\n  function notifyIsolated(self, cb, chain) {\n    var ret, _then;\n\n    try {\n      if (cb === false) {\n        chain.reject(self.msg);\n      } else {\n        if (cb === true) {\n          ret = self.msg;\n        } else {\n          ret = cb.call(void 0, self.msg);\n        }\n\n        if (ret === chain.promise) {\n          chain.reject(TypeError(\"Promise-chain cycle\"));\n        } else if (_then = isThenable(ret)) {\n          _then.call(ret, chain.resolve, chain.reject);\n        } else {\n          chain.resolve(ret);\n        }\n      }\n    } catch (err) {\n      chain.reject(err);\n    }\n  }\n\n  function resolve(msg) {\n    var _then,\n        self = this; // already triggered?\n\n\n    if (self.triggered) {\n      return;\n    }\n\n    self.triggered = true; // unwrap\n\n    if (self.def) {\n      self = self.def;\n    }\n\n    try {\n      if (_then = isThenable(msg)) {\n        schedule(function () {\n          var def_wrapper = new MakeDefWrapper(self);\n\n          try {\n            _then.call(msg, function $resolve$() {\n              resolve.apply(def_wrapper, arguments);\n            }, function $reject$() {\n              reject.apply(def_wrapper, arguments);\n            });\n          } catch (err) {\n            reject.call(def_wrapper, err);\n          }\n        });\n      } else {\n        self.msg = msg;\n        self.state = 1;\n\n        if (self.chain.length > 0) {\n          schedule(notify, self);\n        }\n      }\n    } catch (err) {\n      reject.call(new MakeDefWrapper(self), err);\n    }\n  }\n\n  function reject(msg) {\n    var self = this; // already triggered?\n\n    if (self.triggered) {\n      return;\n    }\n\n    self.triggered = true; // unwrap\n\n    if (self.def) {\n      self = self.def;\n    }\n\n    self.msg = msg;\n    self.state = 2;\n\n    if (self.chain.length > 0) {\n      schedule(notify, self);\n    }\n  }\n\n  function iteratePromises(Constructor, arr, resolver, rejecter) {\n    for (var idx = 0; idx < arr.length; idx++) {\n      (function IIFE(idx) {\n        Constructor.resolve(arr[idx]).then(function $resolver$(msg) {\n          resolver(idx, msg);\n        }, rejecter);\n      })(idx);\n    }\n  }\n\n  function MakeDefWrapper(self) {\n    this.def = self;\n    this.triggered = false;\n  }\n\n  function MakeDef(self) {\n    this.promise = self;\n    this.state = 0;\n    this.triggered = false;\n    this.chain = [];\n    this.msg = void 0;\n  }\n\n  function Promise(executor) {\n    if (typeof executor != \"function\") {\n      throw TypeError(\"Not a function\");\n    }\n\n    if (this.__NPO__ !== 0) {\n      throw TypeError(\"Not a promise\");\n    } // instance shadowing the inherited \"brand\"\n    // to signal an already \"initialized\" promise\n\n\n    this.__NPO__ = 1;\n    var def = new MakeDef(this);\n\n    this[\"then\"] = function then(success, failure) {\n      var o = {\n        success: typeof success == \"function\" ? success : true,\n        failure: typeof failure == \"function\" ? failure : false\n      }; // Note: `then(..)` itself can be borrowed to be used against\n      // a different promise constructor for making the chained promise,\n      // by substituting a different `this` binding.\n\n      o.promise = new this.constructor(function extractChain(resolve, reject) {\n        if (typeof resolve != \"function\" || typeof reject != \"function\") {\n          throw TypeError(\"Not a function\");\n        }\n\n        o.resolve = resolve;\n        o.reject = reject;\n      });\n      def.chain.push(o);\n\n      if (def.state !== 0) {\n        schedule(notify, def);\n      }\n\n      return o.promise;\n    };\n\n    this[\"catch\"] = function $catch$(failure) {\n      return this.then(void 0, failure);\n    };\n\n    try {\n      executor.call(void 0, function publicResolve(msg) {\n        resolve.call(def, msg);\n      }, function publicReject(msg) {\n        reject.call(def, msg);\n      });\n    } catch (err) {\n      reject.call(def, err);\n    }\n  }\n\n  var PromisePrototype = builtInProp({}, \"constructor\", Promise,\n  /*configurable=*/\n  false); // Note: Android 4 cannot use `Object.defineProperty(..)` here\n\n  Promise.prototype = PromisePrototype; // built-in \"brand\" to signal an \"uninitialized\" promise\n\n  builtInProp(PromisePrototype, \"__NPO__\", 0,\n  /*configurable=*/\n  false);\n  builtInProp(Promise, \"resolve\", function Promise$resolve(msg) {\n    var Constructor = this; // spec mandated checks\n    // note: best \"isPromise\" check that's practical for now\n\n    if (msg && typeof msg == \"object\" && msg.__NPO__ === 1) {\n      return msg;\n    }\n\n    return new Constructor(function executor(resolve, reject) {\n      if (typeof resolve != \"function\" || typeof reject != \"function\") {\n        throw TypeError(\"Not a function\");\n      }\n\n      resolve(msg);\n    });\n  });\n  builtInProp(Promise, \"reject\", function Promise$reject(msg) {\n    return new this(function executor(resolve, reject) {\n      if (typeof resolve != \"function\" || typeof reject != \"function\") {\n        throw TypeError(\"Not a function\");\n      }\n\n      reject(msg);\n    });\n  });\n  builtInProp(Promise, \"all\", function Promise$all(arr) {\n    var Constructor = this; // spec mandated checks\n\n    if (ToString.call(arr) != \"[object Array]\") {\n      return Constructor.reject(TypeError(\"Not an array\"));\n    }\n\n    if (arr.length === 0) {\n      return Constructor.resolve([]);\n    }\n\n    return new Constructor(function executor(resolve, reject) {\n      if (typeof resolve != \"function\" || typeof reject != \"function\") {\n        throw TypeError(\"Not a function\");\n      }\n\n      var len = arr.length,\n          msgs = Array(len),\n          count = 0;\n      iteratePromises(Constructor, arr, function resolver(idx, msg) {\n        msgs[idx] = msg;\n\n        if (++count === len) {\n          resolve(msgs);\n        }\n      }, reject);\n    });\n  });\n  builtInProp(Promise, \"race\", function Promise$race(arr) {\n    var Constructor = this; // spec mandated checks\n\n    if (ToString.call(arr) != \"[object Array]\") {\n      return Constructor.reject(TypeError(\"Not an array\"));\n    }\n\n    return new Constructor(function executor(resolve, reject) {\n      if (typeof resolve != \"function\" || typeof reject != \"function\") {\n        throw TypeError(\"Not a function\");\n      }\n\n      iteratePromises(Constructor, arr, function resolver(idx, msg) {\n        resolve(msg);\n      }, reject);\n    });\n  });\n  return Promise;\n});\n});\n\n/**\n * @module lib/callbacks\n */\nvar callbackMap = new WeakMap();\n/**\n * Store a callback for a method or event for a player.\n *\n * @param {Player} player The player object.\n * @param {string} name The method or event name.\n * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback\n *        The callback to call or an object with resolve and reject functions for a promise.\n * @return {void}\n */\n\nfunction storeCallback(player, name, callback) {\n  var playerCallbacks = callbackMap.get(player.element) || {};\n\n  if (!(name in playerCallbacks)) {\n    playerCallbacks[name] = [];\n  }\n\n  playerCallbacks[name].push(callback);\n  callbackMap.set(player.element, playerCallbacks);\n}\n/**\n * Get the callbacks for a player and event or method.\n *\n * @param {Player} player The player object.\n * @param {string} name The method or event name\n * @return {function[]}\n */\n\nfunction getCallbacks(player, name) {\n  var playerCallbacks = callbackMap.get(player.element) || {};\n  return playerCallbacks[name] || [];\n}\n/**\n * Remove a stored callback for a method or event for a player.\n *\n * @param {Player} player The player object.\n * @param {string} name The method or event name\n * @param {function} [callback] The specific callback to remove.\n * @return {boolean} Was this the last callback?\n */\n\nfunction removeCallback(player, name, callback) {\n  var playerCallbacks = callbackMap.get(player.element) || {};\n\n  if (!playerCallbacks[name]) {\n    return true;\n  } // If no callback is passed, remove all callbacks for the event\n\n\n  if (!callback) {\n    playerCallbacks[name] = [];\n    callbackMap.set(player.element, playerCallbacks);\n    return true;\n  }\n\n  var index = playerCallbacks[name].indexOf(callback);\n\n  if (index !== -1) {\n    playerCallbacks[name].splice(index, 1);\n  }\n\n  callbackMap.set(player.element, playerCallbacks);\n  return playerCallbacks[name] && playerCallbacks[name].length === 0;\n}\n/**\n * Return the first stored callback for a player and event or method.\n *\n * @param {Player} player The player object.\n * @param {string} name The method or event name.\n * @return {function} The callback, or false if there were none\n */\n\nfunction shiftCallbacks(player, name) {\n  var playerCallbacks = getCallbacks(player, name);\n\n  if (playerCallbacks.length < 1) {\n    return false;\n  }\n\n  var callback = playerCallbacks.shift();\n  removeCallback(player, name, callback);\n  return callback;\n}\n/**\n * Move callbacks associated with an element to another element.\n *\n * @param {HTMLElement} oldElement The old element.\n * @param {HTMLElement} newElement The new element.\n * @return {void}\n */\n\nfunction swapCallbacks(oldElement, newElement) {\n  var playerCallbacks = callbackMap.get(oldElement);\n  callbackMap.set(newElement, playerCallbacks);\n  callbackMap.delete(oldElement);\n}\n\n/**\n * @module lib/postmessage\n */\n/**\n * Parse a message received from postMessage.\n *\n * @param {*} data The data received from postMessage.\n * @return {object}\n */\n\nfunction parseMessageData(data) {\n  if (typeof data === 'string') {\n    try {\n      data = JSON.parse(data);\n    } catch (error) {\n      // If the message cannot be parsed, throw the error as a warning\n      console.warn(error);\n      return {};\n    }\n  }\n\n  return data;\n}\n/**\n * Post a message to the specified target.\n *\n * @param {Player} player The player object to use.\n * @param {string} method The API method to call.\n * @param {object} params The parameters to send to the player.\n * @return {void}\n */\n\nfunction postMessage(player, method, params) {\n  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {\n    return;\n  }\n\n  var message = {\n    method: method\n  };\n\n  if (params !== undefined) {\n    message.value = params;\n  } // IE 8 and 9 do not support passing messages, so stringify them\n\n\n  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\\d+).*$/, '$1'));\n\n  if (ieVersion >= 8 && ieVersion < 10) {\n    message = JSON.stringify(message);\n  }\n\n  player.element.contentWindow.postMessage(message, player.origin);\n}\n/**\n * Parse the data received from a message event.\n *\n * @param {Player} player The player that received the message.\n * @param {(Object|string)} data The message data. Strings will be parsed into JSON.\n * @return {void}\n */\n\nfunction processData(player, data) {\n  data = parseMessageData(data);\n  var callbacks = [];\n  var param;\n\n  if (data.event) {\n    if (data.event === 'error') {\n      var promises = getCallbacks(player, data.data.method);\n      promises.forEach(function (promise) {\n        var error = new Error(data.data.message);\n        error.name = data.data.name;\n        promise.reject(error);\n        removeCallback(player, data.data.method, promise);\n      });\n    }\n\n    callbacks = getCallbacks(player, \"event:\".concat(data.event));\n    param = data.data;\n  } else if (data.method) {\n    var callback = shiftCallbacks(player, data.method);\n\n    if (callback) {\n      callbacks.push(callback);\n      param = data.value;\n    }\n  }\n\n  callbacks.forEach(function (callback) {\n    try {\n      if (typeof callback === 'function') {\n        callback.call(player, param);\n        return;\n      }\n\n      callback.resolve(param);\n    } catch (e) {// empty\n    }\n  });\n}\n\n/**\n * @module lib/embed\n */\nvar oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'controls', 'dnt', 'height', 'id', 'interactive_params', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];\n/**\n * Get the 'data-vimeo'-prefixed attributes from an element as an object.\n *\n * @param {HTMLElement} element The element.\n * @param {Object} [defaults={}] The default values to use.\n * @return {Object<string, string>}\n */\n\nfunction getOEmbedParameters(element) {\n  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return oEmbedParameters.reduce(function (params, param) {\n    var value = element.getAttribute(\"data-vimeo-\".concat(param));\n\n    if (value || value === '') {\n      params[param] = value === '' ? 1 : value;\n    }\n\n    return params;\n  }, defaults);\n}\n/**\n * Create an embed from oEmbed data inside an element.\n *\n * @param {object} data The oEmbed data.\n * @param {HTMLElement} element The element to put the iframe in.\n * @return {HTMLIFrameElement} The iframe embed.\n */\n\nfunction createEmbed(_ref, element) {\n  var html = _ref.html;\n\n  if (!element) {\n    throw new TypeError('An element must be provided');\n  }\n\n  if (element.getAttribute('data-vimeo-initialized') !== null) {\n    return element.querySelector('iframe');\n  }\n\n  var div = document.createElement('div');\n  div.innerHTML = html;\n  element.appendChild(div.firstChild);\n  element.setAttribute('data-vimeo-initialized', 'true');\n  return element.querySelector('iframe');\n}\n/**\n * Make an oEmbed call for the specified URL.\n *\n * @param {string} videoUrl The vimeo.com url for the video.\n * @param {Object} [params] Parameters to pass to oEmbed.\n * @param {HTMLElement} element The element.\n * @return {Promise}\n */\n\nfunction getOEmbedData(videoUrl) {\n  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var element = arguments.length > 2 ? arguments[2] : undefined;\n  return new Promise(function (resolve, reject) {\n    if (!isVimeoUrl(videoUrl)) {\n      throw new TypeError(\"\\u201C\".concat(videoUrl, \"\\u201D is not a vimeo.com url.\"));\n    }\n\n    var url = \"https://vimeo.com/api/oembed.json?url=\".concat(encodeURIComponent(videoUrl));\n\n    for (var param in params) {\n      if (params.hasOwnProperty(param)) {\n        url += \"&\".concat(param, \"=\").concat(encodeURIComponent(params[param]));\n      }\n    }\n\n    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();\n    xhr.open('GET', url, true);\n\n    xhr.onload = function () {\n      if (xhr.status === 404) {\n        reject(new Error(\"\\u201C\".concat(videoUrl, \"\\u201D was not found.\")));\n        return;\n      }\n\n      if (xhr.status === 403) {\n        reject(new Error(\"\\u201C\".concat(videoUrl, \"\\u201D is not embeddable.\")));\n        return;\n      }\n\n      try {\n        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed\n\n        if (json.domain_status_code === 403) {\n          // We still want to create the embed to give users visual feedback\n          createEmbed(json, element);\n          reject(new Error(\"\\u201C\".concat(videoUrl, \"\\u201D is not embeddable.\")));\n          return;\n        }\n\n        resolve(json);\n      } catch (error) {\n        reject(error);\n      }\n    };\n\n    xhr.onerror = function () {\n      var status = xhr.status ? \" (\".concat(xhr.status, \")\") : '';\n      reject(new Error(\"There was an error fetching the embed code from Vimeo\".concat(status, \".\")));\n    };\n\n    xhr.send();\n  });\n}\n/**\n * Initialize all embeds within a specific element\n *\n * @param {HTMLElement} [parent=document] The parent element.\n * @return {void}\n */\n\nfunction initializeEmbeds() {\n  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));\n\n  var handleError = function handleError(error) {\n    if ('console' in window && console.error) {\n      console.error(\"There was an error creating an embed: \".concat(error));\n    }\n  };\n\n  elements.forEach(function (element) {\n    try {\n      // Skip any that have data-vimeo-defer\n      if (element.getAttribute('data-vimeo-defer') !== null) {\n        return;\n      }\n\n      var params = getOEmbedParameters(element);\n      var url = getVimeoUrl(params);\n      getOEmbedData(url, params, element).then(function (data) {\n        return createEmbed(data, element);\n      }).catch(handleError);\n    } catch (error) {\n      handleError(error);\n    }\n  });\n}\n/**\n * Resize embeds when messaged by the player.\n *\n * @param {HTMLElement} [parent=document] The parent element.\n * @return {void}\n */\n\nfunction resizeEmbeds() {\n  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n\n  // Prevent execution if users include the player.js script multiple times.\n  if (window.VimeoPlayerResizeEmbeds_) {\n    return;\n  }\n\n  window.VimeoPlayerResizeEmbeds_ = true;\n\n  var onMessage = function onMessage(event) {\n    if (!isVimeoUrl(event.origin)) {\n      return;\n    } // 'spacechange' is fired only on embeds with cards\n\n\n    if (!event.data || event.data.event !== 'spacechange') {\n      return;\n    }\n\n    var iframes = parent.querySelectorAll('iframe');\n\n    for (var i = 0; i < iframes.length; i++) {\n      if (iframes[i].contentWindow !== event.source) {\n        continue;\n      } // Change padding-bottom of the enclosing div to accommodate\n      // card carousel without distorting aspect ratio\n\n\n      var space = iframes[i].parentElement;\n      space.style.paddingBottom = \"\".concat(event.data.data[0].bottom, \"px\");\n      break;\n    }\n  };\n\n  window.addEventListener('message', onMessage);\n}\n/**\n * Add chapters to existing metadata for Google SEO\n *\n * @param {HTMLElement} [parent=document] The parent element.\n * @return {void}\n */\n\nfunction initAppendVideoMetadata() {\n  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n\n  //  Prevent execution if users include the player.js script multiple times.\n  if (window.VimeoSeoMetadataAppended) {\n    return;\n  }\n\n  window.VimeoSeoMetadataAppended = true;\n\n  var onMessage = function onMessage(event) {\n    if (!isVimeoUrl(event.origin)) {\n      return;\n    }\n\n    var data = parseMessageData(event.data);\n\n    if (!data || data.event !== 'ready') {\n      return;\n    }\n\n    var iframes = parent.querySelectorAll('iframe');\n\n    for (var i = 0; i < iframes.length; i++) {\n      var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed\n\n      var isValidMessageSource = iframe.contentWindow === event.source;\n\n      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {\n        var player = new Player(iframe);\n        player.callMethod('appendVideoMetadata', window.location.href);\n      }\n    }\n  };\n\n  window.addEventListener('message', onMessage);\n}\n/**\n * Seek to time indicated by vimeo_t query parameter if present in URL\n *\n * @param {HTMLElement} [parent=document] The parent element.\n * @return {void}\n */\n\nfunction checkUrlTimeParam() {\n  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;\n\n  //  Prevent execution if users include the player.js script multiple times.\n  if (window.VimeoCheckedUrlTimeParam) {\n    return;\n  }\n\n  window.VimeoCheckedUrlTimeParam = true;\n\n  var handleError = function handleError(error) {\n    if ('console' in window && console.error) {\n      console.error(\"There was an error getting video Id: \".concat(error));\n    }\n  };\n\n  var onMessage = function onMessage(event) {\n    if (!isVimeoUrl(event.origin)) {\n      return;\n    }\n\n    var data = parseMessageData(event.data);\n\n    if (!data || data.event !== 'ready') {\n      return;\n    }\n\n    var iframes = parent.querySelectorAll('iframe');\n\n    for (var i = 0; i < iframes.length; i++) {\n      var iframe = iframes[i];\n      var isValidMessageSource = iframe.contentWindow === event.source;\n\n      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {\n        (function () {\n          var player = new Player(iframe);\n          player.getVideoId().then(function (videoId) {\n            var matches = new RegExp(\"[?&]vimeo_t_\".concat(videoId, \"=([^&#]*)\")).exec(window.location.href);\n\n            if (matches && matches[1]) {\n              var sec = decodeURI(matches[1]);\n              player.setCurrentTime(sec);\n            }\n\n            return;\n          }).catch(handleError);\n        })();\n      }\n    }\n  };\n\n  window.addEventListener('message', onMessage);\n}\n\n/* MIT License\n\nCopyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\nTerms */\nfunction initializeScreenfull() {\n  var fn = function () {\n    var val;\n    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit\n    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit\n    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];\n    var i = 0;\n    var l = fnMap.length;\n    var ret = {};\n\n    for (; i < l; i++) {\n      val = fnMap[i];\n\n      if (val && val[1] in document) {\n        for (i = 0; i < val.length; i++) {\n          ret[fnMap[0][i]] = val[i];\n        }\n\n        return ret;\n      }\n    }\n\n    return false;\n  }();\n\n  var eventNameMap = {\n    fullscreenchange: fn.fullscreenchange,\n    fullscreenerror: fn.fullscreenerror\n  };\n  var screenfull = {\n    request: function request(element) {\n      return new Promise(function (resolve, reject) {\n        var onFullScreenEntered = function onFullScreenEntered() {\n          screenfull.off('fullscreenchange', onFullScreenEntered);\n          resolve();\n        };\n\n        screenfull.on('fullscreenchange', onFullScreenEntered);\n        element = element || document.documentElement;\n        var returnPromise = element[fn.requestFullscreen]();\n\n        if (returnPromise instanceof Promise) {\n          returnPromise.then(onFullScreenEntered).catch(reject);\n        }\n      });\n    },\n    exit: function exit() {\n      return new Promise(function (resolve, reject) {\n        if (!screenfull.isFullscreen) {\n          resolve();\n          return;\n        }\n\n        var onFullScreenExit = function onFullScreenExit() {\n          screenfull.off('fullscreenchange', onFullScreenExit);\n          resolve();\n        };\n\n        screenfull.on('fullscreenchange', onFullScreenExit);\n        var returnPromise = document[fn.exitFullscreen]();\n\n        if (returnPromise instanceof Promise) {\n          returnPromise.then(onFullScreenExit).catch(reject);\n        }\n      });\n    },\n    on: function on(event, callback) {\n      var eventName = eventNameMap[event];\n\n      if (eventName) {\n        document.addEventListener(eventName, callback);\n      }\n    },\n    off: function off(event, callback) {\n      var eventName = eventNameMap[event];\n\n      if (eventName) {\n        document.removeEventListener(eventName, callback);\n      }\n    }\n  };\n  Object.defineProperties(screenfull, {\n    isFullscreen: {\n      get: function get() {\n        return Boolean(document[fn.fullscreenElement]);\n      }\n    },\n    element: {\n      enumerable: true,\n      get: function get() {\n        return document[fn.fullscreenElement];\n      }\n    },\n    isEnabled: {\n      enumerable: true,\n      get: function get() {\n        // Coerce to boolean in case of old WebKit\n        return Boolean(document[fn.fullscreenEnabled]);\n      }\n    }\n  });\n  return screenfull;\n}\n\nvar playerMap = new WeakMap();\nvar readyMap = new WeakMap();\nvar screenfull = {};\n\nvar Player = /*#__PURE__*/function () {\n  /**\n   * Create a Player.\n   *\n   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo\n   *        player iframe, and id, or a jQuery object.\n   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.\n   * @return {Player}\n   */\n  function Player(element) {\n    var _this = this;\n\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Player);\n\n    /* global jQuery */\n    if (window.jQuery && element instanceof jQuery) {\n      if (element.length > 1 && window.console && console.warn) {\n        console.warn('A jQuery object with multiple elements was passed, using the first element.');\n      }\n\n      element = element[0];\n    } // Find an element by ID\n\n\n    if (typeof document !== 'undefined' && typeof element === 'string') {\n      element = document.getElementById(element);\n    } // Not an element!\n\n\n    if (!isDomElement(element)) {\n      throw new TypeError('You must pass either a valid element or a valid id.');\n    } // Already initialized an embed in this div, so grab the iframe\n\n\n    if (element.nodeName !== 'IFRAME') {\n      var iframe = element.querySelector('iframe');\n\n      if (iframe) {\n        element = iframe;\n      }\n    } // iframe url is not a Vimeo url\n\n\n    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {\n      throw new Error('The player element passed isn’t a Vimeo embed.');\n    } // If there is already a player object in the map, return that\n\n\n    if (playerMap.has(element)) {\n      return playerMap.get(element);\n    }\n\n    this._window = element.ownerDocument.defaultView;\n    this.element = element;\n    this.origin = '*';\n    var readyPromise = new npo_src(function (resolve, reject) {\n      _this._onMessage = function (event) {\n        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {\n          return;\n        }\n\n        if (_this.origin === '*') {\n          _this.origin = event.origin;\n        }\n\n        var data = parseMessageData(event.data);\n        var isError = data && data.event === 'error';\n        var isReadyError = isError && data.data && data.data.method === 'ready';\n\n        if (isReadyError) {\n          var error = new Error(data.data.message);\n          error.name = data.data.name;\n          reject(error);\n          return;\n        }\n\n        var isReadyEvent = data && data.event === 'ready';\n        var isPingResponse = data && data.method === 'ping';\n\n        if (isReadyEvent || isPingResponse) {\n          _this.element.setAttribute('data-ready', 'true');\n\n          resolve();\n          return;\n        }\n\n        processData(_this, data);\n      };\n\n      _this._window.addEventListener('message', _this._onMessage);\n\n      if (_this.element.nodeName !== 'IFRAME') {\n        var params = getOEmbedParameters(element, options);\n        var url = getVimeoUrl(params);\n        getOEmbedData(url, params, element).then(function (data) {\n          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,\n          // but store reference to the original element\n\n          _this.element = iframe;\n          _this._originalElement = element;\n          swapCallbacks(element, iframe);\n          playerMap.set(_this.element, _this);\n          return data;\n        }).catch(reject);\n      }\n    }); // Store a copy of this Player in the map\n\n    readyMap.set(this, readyPromise);\n    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if\n    // the player is already ready.\n\n    if (this.element.nodeName === 'IFRAME') {\n      postMessage(this, 'ping');\n    }\n\n    if (screenfull.isEnabled) {\n      var exitFullscreen = function exitFullscreen() {\n        return screenfull.exit();\n      };\n\n      this.fullscreenchangeHandler = function () {\n        if (screenfull.isFullscreen) {\n          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);\n        } else {\n          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);\n        } // eslint-disable-next-line\n\n\n        _this.ready().then(function () {\n          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);\n        });\n      };\n\n      screenfull.on('fullscreenchange', this.fullscreenchangeHandler);\n    }\n\n    return this;\n  }\n  /**\n   * Get a promise for a method.\n   *\n   * @param {string} name The API method to call.\n   * @param {Object} [args={}] Arguments to send via postMessage.\n   * @return {Promise}\n   */\n\n\n  _createClass(Player, [{\n    key: \"callMethod\",\n    value: function callMethod(name) {\n      var _this2 = this;\n\n      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return new npo_src(function (resolve, reject) {\n        // We are storing the resolve/reject handlers to call later, so we\n        // can’t return here.\n        // eslint-disable-next-line promise/always-return\n        return _this2.ready().then(function () {\n          storeCallback(_this2, name, {\n            resolve: resolve,\n            reject: reject\n          });\n          postMessage(_this2, name, args);\n        }).catch(reject);\n      });\n    }\n    /**\n     * Get a promise for the value of a player property.\n     *\n     * @param {string} name The property name\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"get\",\n    value: function get(name) {\n      var _this3 = this;\n\n      return new npo_src(function (resolve, reject) {\n        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we\n        // can’t return here.\n        // eslint-disable-next-line promise/always-return\n\n        return _this3.ready().then(function () {\n          storeCallback(_this3, name, {\n            resolve: resolve,\n            reject: reject\n          });\n          postMessage(_this3, name);\n        }).catch(reject);\n      });\n    }\n    /**\n     * Get a promise for setting the value of a player property.\n     *\n     * @param {string} name The API method to call.\n     * @param {mixed} value The value to set.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"set\",\n    value: function set(name, value) {\n      var _this4 = this;\n\n      return new npo_src(function (resolve, reject) {\n        name = getMethodName(name, 'set');\n\n        if (value === undefined || value === null) {\n          throw new TypeError('There must be a value to set.');\n        } // We are storing the resolve/reject handlers to call later, so we\n        // can’t return here.\n        // eslint-disable-next-line promise/always-return\n\n\n        return _this4.ready().then(function () {\n          storeCallback(_this4, name, {\n            resolve: resolve,\n            reject: reject\n          });\n          postMessage(_this4, name, value);\n        }).catch(reject);\n      });\n    }\n    /**\n     * Add an event listener for the specified event. Will call the\n     * callback with a single parameter, `data`, that contains the data for\n     * that event.\n     *\n     * @param {string} eventName The name of the event.\n     * @param {function(*)} callback The function to call when the event fires.\n     * @return {void}\n     */\n\n  }, {\n    key: \"on\",\n    value: function on(eventName, callback) {\n      if (!eventName) {\n        throw new TypeError('You must pass an event name.');\n      }\n\n      if (!callback) {\n        throw new TypeError('You must pass a callback function.');\n      }\n\n      if (typeof callback !== 'function') {\n        throw new TypeError('The callback must be a function.');\n      }\n\n      var callbacks = getCallbacks(this, \"event:\".concat(eventName));\n\n      if (callbacks.length === 0) {\n        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that\n          // will trigger the error callback if they are listening.\n        });\n      }\n\n      storeCallback(this, \"event:\".concat(eventName), callback);\n    }\n    /**\n     * Remove an event listener for the specified event. Will remove all\n     * listeners for that event if a `callback` isn’t passed, or only that\n     * specific callback if it is passed.\n     *\n     * @param {string} eventName The name of the event.\n     * @param {function} [callback] The specific callback to remove.\n     * @return {void}\n     */\n\n  }, {\n    key: \"off\",\n    value: function off(eventName, callback) {\n      if (!eventName) {\n        throw new TypeError('You must pass an event name.');\n      }\n\n      if (callback && typeof callback !== 'function') {\n        throw new TypeError('The callback must be a function.');\n      }\n\n      var lastCallback = removeCallback(this, \"event:\".concat(eventName), callback); // If there are no callbacks left, remove the listener\n\n      if (lastCallback) {\n        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that\n          // will trigger the error callback if they are listening.\n        });\n      }\n    }\n    /**\n     * A promise to load a new video.\n     *\n     * @promise LoadVideoPromise\n     * @fulfill {number} The video with this id or url successfully loaded.\n     * @reject {TypeError} The id was not a number.\n     */\n\n    /**\n     * Load a new video into this embed. The promise will be resolved if\n     * the video is successfully loaded, or it will be rejected if it could\n     * not be loaded.\n     *\n     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.\n     * @return {LoadVideoPromise}\n     */\n\n  }, {\n    key: \"loadVideo\",\n    value: function loadVideo(options) {\n      return this.callMethod('loadVideo', options);\n    }\n    /**\n     * A promise to perform an action when the Player is ready.\n     *\n     * @todo document errors\n     * @promise LoadVideoPromise\n     * @fulfill {void}\n     */\n\n    /**\n     * Trigger a function when the player iframe has initialized. You do not\n     * need to wait for `ready` to trigger to begin adding event listeners\n     * or calling other methods.\n     *\n     * @return {ReadyPromise}\n     */\n\n  }, {\n    key: \"ready\",\n    value: function ready() {\n      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {\n        reject(new Error('Unknown player. Probably unloaded.'));\n      });\n      return npo_src.resolve(readyPromise);\n    }\n    /**\n     * A promise to add a cue point to the player.\n     *\n     * @promise AddCuePointPromise\n     * @fulfill {string} The id of the cue point to use for removeCuePoint.\n     * @reject {RangeError} the time was less than 0 or greater than the\n     *         video’s duration.\n     * @reject {UnsupportedError} Cue points are not supported with the current\n     *         player or browser.\n     */\n\n    /**\n     * Add a cue point to the player.\n     *\n     * @param {number} time The time for the cue point.\n     * @param {object} [data] Arbitrary data to be returned with the cue point.\n     * @return {AddCuePointPromise}\n     */\n\n  }, {\n    key: \"addCuePoint\",\n    value: function addCuePoint(time) {\n      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      return this.callMethod('addCuePoint', {\n        time: time,\n        data: data\n      });\n    }\n    /**\n     * A promise to remove a cue point from the player.\n     *\n     * @promise AddCuePointPromise\n     * @fulfill {string} The id of the cue point that was removed.\n     * @reject {InvalidCuePoint} The cue point with the specified id was not\n     *         found.\n     * @reject {UnsupportedError} Cue points are not supported with the current\n     *         player or browser.\n     */\n\n    /**\n     * Remove a cue point from the video.\n     *\n     * @param {string} id The id of the cue point to remove.\n     * @return {RemoveCuePointPromise}\n     */\n\n  }, {\n    key: \"removeCuePoint\",\n    value: function removeCuePoint(id) {\n      return this.callMethod('removeCuePoint', id);\n    }\n    /**\n     * A representation of a text track on a video.\n     *\n     * @typedef {Object} VimeoTextTrack\n     * @property {string} language The ISO language code.\n     * @property {string} kind The kind of track it is (captions or subtitles).\n     * @property {string} label The human‐readable label for the track.\n     */\n\n    /**\n     * A promise to enable a text track.\n     *\n     * @promise EnableTextTrackPromise\n     * @fulfill {VimeoTextTrack} The text track that was enabled.\n     * @reject {InvalidTrackLanguageError} No track was available with the\n     *         specified language.\n     * @reject {InvalidTrackError} No track was available with the specified\n     *         language and kind.\n     */\n\n    /**\n     * Enable the text track with the specified language, and optionally the\n     * specified kind (captions or subtitles).\n     *\n     * When set via the API, the track language will not change the viewer’s\n     * stored preference.\n     *\n     * @param {string} language The two‐letter language code.\n     * @param {string} [kind] The kind of track to enable (captions or subtitles).\n     * @return {EnableTextTrackPromise}\n     */\n\n  }, {\n    key: \"enableTextTrack\",\n    value: function enableTextTrack(language, kind) {\n      if (!language) {\n        throw new TypeError('You must pass a language.');\n      }\n\n      return this.callMethod('enableTextTrack', {\n        language: language,\n        kind: kind\n      });\n    }\n    /**\n     * A promise to disable the active text track.\n     *\n     * @promise DisableTextTrackPromise\n     * @fulfill {void} The track was disabled.\n     */\n\n    /**\n     * Disable the currently-active text track.\n     *\n     * @return {DisableTextTrackPromise}\n     */\n\n  }, {\n    key: \"disableTextTrack\",\n    value: function disableTextTrack() {\n      return this.callMethod('disableTextTrack');\n    }\n    /**\n     * A promise to pause the video.\n     *\n     * @promise PausePromise\n     * @fulfill {void} The video was paused.\n     */\n\n    /**\n     * Pause the video if it’s playing.\n     *\n     * @return {PausePromise}\n     */\n\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      return this.callMethod('pause');\n    }\n    /**\n     * A promise to play the video.\n     *\n     * @promise PlayPromise\n     * @fulfill {void} The video was played.\n     */\n\n    /**\n     * Play the video if it’s paused. **Note:** on iOS and some other\n     * mobile devices, you cannot programmatically trigger play. Once the\n     * viewer has tapped on the play button in the player, however, you\n     * will be able to use this function.\n     *\n     * @return {PlayPromise}\n     */\n\n  }, {\n    key: \"play\",\n    value: function play() {\n      return this.callMethod('play');\n    }\n    /**\n     * Request that the player enters fullscreen.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"requestFullscreen\",\n    value: function requestFullscreen() {\n      if (screenfull.isEnabled) {\n        return screenfull.request(this.element);\n      }\n\n      return this.callMethod('requestFullscreen');\n    }\n    /**\n     * Request that the player exits fullscreen.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"exitFullscreen\",\n    value: function exitFullscreen() {\n      if (screenfull.isEnabled) {\n        return screenfull.exit();\n      }\n\n      return this.callMethod('exitFullscreen');\n    }\n    /**\n     * Returns true if the player is currently fullscreen.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"getFullscreen\",\n    value: function getFullscreen() {\n      if (screenfull.isEnabled) {\n        return npo_src.resolve(screenfull.isFullscreen);\n      }\n\n      return this.get('fullscreen');\n    }\n    /**\n     * Request that the player enters picture-in-picture.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"requestPictureInPicture\",\n    value: function requestPictureInPicture() {\n      return this.callMethod('requestPictureInPicture');\n    }\n    /**\n     * Request that the player exits picture-in-picture.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"exitPictureInPicture\",\n    value: function exitPictureInPicture() {\n      return this.callMethod('exitPictureInPicture');\n    }\n    /**\n     * Returns true if the player is currently picture-in-picture.\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"getPictureInPicture\",\n    value: function getPictureInPicture() {\n      return this.get('pictureInPicture');\n    }\n    /**\n     * A promise to unload the video.\n     *\n     * @promise UnloadPromise\n     * @fulfill {void} The video was unloaded.\n     */\n\n    /**\n     * Return the player to its initial state.\n     *\n     * @return {UnloadPromise}\n     */\n\n  }, {\n    key: \"unload\",\n    value: function unload() {\n      return this.callMethod('unload');\n    }\n    /**\n     * Cleanup the player and remove it from the DOM\n     *\n     * It won't be usable and a new one should be constructed\n     *  in order to do any operations.\n     *\n     * @return {Promise}\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      var _this5 = this;\n\n      return new npo_src(function (resolve) {\n        readyMap.delete(_this5);\n        playerMap.delete(_this5.element);\n\n        if (_this5._originalElement) {\n          playerMap.delete(_this5._originalElement);\n\n          _this5._originalElement.removeAttribute('data-vimeo-initialized');\n        }\n\n        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {\n          // If we've added an additional wrapper div, remove that from the DOM.\n          // If not, just remove the iframe element.\n          if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {\n            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);\n          } else {\n            _this5.element.parentNode.removeChild(_this5.element);\n          }\n        } // If the clip is private there is a case where the element stays the\n        // div element. Destroy should reset the div and remove the iframe child.\n\n\n        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {\n          _this5.element.removeAttribute('data-vimeo-initialized');\n\n          var iframe = _this5.element.querySelector('iframe');\n\n          if (iframe && iframe.parentNode) {\n            // If we've added an additional wrapper div, remove that from the DOM.\n            // If not, just remove the iframe element.\n            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {\n              iframe.parentNode.parentNode.removeChild(iframe.parentNode);\n            } else {\n              iframe.parentNode.removeChild(iframe);\n            }\n          }\n        }\n\n        _this5._window.removeEventListener('message', _this5._onMessage);\n\n        if (screenfull.isEnabled) {\n          screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);\n        }\n\n        resolve();\n      });\n    }\n    /**\n     * A promise to get the autopause behavior of the video.\n     *\n     * @promise GetAutopausePromise\n     * @fulfill {boolean} Whether autopause is turned on or off.\n     * @reject {UnsupportedError} Autopause is not supported with the current\n     *         player or browser.\n     */\n\n    /**\n     * Get the autopause behavior for this player.\n     *\n     * @return {GetAutopausePromise}\n     */\n\n  }, {\n    key: \"getAutopause\",\n    value: function getAutopause() {\n      return this.get('autopause');\n    }\n    /**\n     * A promise to set the autopause behavior of the video.\n     *\n     * @promise SetAutopausePromise\n     * @fulfill {boolean} Whether autopause is turned on or off.\n     * @reject {UnsupportedError} Autopause is not supported with the current\n     *         player or browser.\n     */\n\n    /**\n     * Enable or disable the autopause behavior of this player.\n     *\n     * By default, when another video is played in the same browser, this\n     * player will automatically pause. Unless you have a specific reason\n     * for doing so, we recommend that you leave autopause set to the\n     * default (`true`).\n     *\n     * @param {boolean} autopause\n     * @return {SetAutopausePromise}\n     */\n\n  }, {\n    key: \"setAutopause\",\n    value: function setAutopause(autopause) {\n      return this.set('autopause', autopause);\n    }\n    /**\n     * A promise to get the buffered property of the video.\n     *\n     * @promise GetBufferedPromise\n     * @fulfill {Array} Buffered Timeranges converted to an Array.\n     */\n\n    /**\n     * Get the buffered property of the video.\n     *\n     * @return {GetBufferedPromise}\n     */\n\n  }, {\n    key: \"getBuffered\",\n    value: function getBuffered() {\n      return this.get('buffered');\n    }\n    /**\n     * @typedef {Object} CameraProperties\n     * @prop {number} props.yaw - Number between 0 and 360.\n     * @prop {number} props.pitch - Number between -90 and 90.\n     * @prop {number} props.roll - Number between -180 and 180.\n     * @prop {number} props.fov - The field of view in degrees.\n     */\n\n    /**\n     * A promise to get the camera properties of the player.\n     *\n     * @promise GetCameraPromise\n     * @fulfill {CameraProperties} The camera properties.\n     */\n\n    /**\n     * For 360\xb0 videos get the camera properties for this player.\n     *\n     * @return {GetCameraPromise}\n     */\n\n  }, {\n    key: \"getCameraProps\",\n    value: function getCameraProps() {\n      return this.get('cameraProps');\n    }\n    /**\n     * A promise to set the camera properties of the player.\n     *\n     * @promise SetCameraPromise\n     * @fulfill {Object} The camera was successfully set.\n     * @reject {RangeError} The range was out of bounds.\n     */\n\n    /**\n     * For 360\xb0 videos set the camera properties for this player.\n     *\n     * @param {CameraProperties} camera The camera properties\n     * @return {SetCameraPromise}\n     */\n\n  }, {\n    key: \"setCameraProps\",\n    value: function setCameraProps(camera) {\n      return this.set('cameraProps', camera);\n    }\n    /**\n     * A representation of a chapter.\n     *\n     * @typedef {Object} VimeoChapter\n     * @property {number} startTime The start time of the chapter.\n     * @property {object} title The title of the chapter.\n     * @property {number} index The place in the order of Chapters. Starts at 1.\n     */\n\n    /**\n     * A promise to get chapters for the video.\n     *\n     * @promise GetChaptersPromise\n     * @fulfill {VimeoChapter[]} The chapters for the video.\n     */\n\n    /**\n     * Get an array of all the chapters for the video.\n     *\n     * @return {GetChaptersPromise}\n     */\n\n  }, {\n    key: \"getChapters\",\n    value: function getChapters() {\n      return this.get('chapters');\n    }\n    /**\n     * A promise to get the currently active chapter.\n     *\n     * @promise GetCurrentChaptersPromise\n     * @fulfill {VimeoChapter|undefined} The current chapter for the video.\n     */\n\n    /**\n     * Get the currently active chapter for the video.\n     *\n     * @return {GetCurrentChaptersPromise}\n     */\n\n  }, {\n    key: \"getCurrentChapter\",\n    value: function getCurrentChapter() {\n      return this.get('currentChapter');\n    }\n    /**\n     * A promise to get the color of the player.\n     *\n     * @promise GetColorPromise\n     * @fulfill {string} The hex color of the player.\n     */\n\n    /**\n     * Get the color for this player.\n     *\n     * @return {GetColorPromise}\n     */\n\n  }, {\n    key: \"getColor\",\n    value: function getColor() {\n      return this.get('color');\n    }\n    /**\n     * A promise to set the color of the player.\n     *\n     * @promise SetColorPromise\n     * @fulfill {string} The color was successfully set.\n     * @reject {TypeError} The string was not a valid hex or rgb color.\n     * @reject {ContrastError} The color was set, but the contrast is\n     *         outside of the acceptable range.\n     * @reject {EmbedSettingsError} The owner of the player has chosen to\n     *         use a specific color.\n     */\n\n    /**\n     * Set the color of this player to a hex or rgb string. Setting the\n     * color may fail if the owner of the video has set their embed\n     * preferences to force a specific color.\n     *\n     * @param {string} color The hex or rgb color string to set.\n     * @return {SetColorPromise}\n     */\n\n  }, {\n    key: \"setColor\",\n    value: function setColor(color) {\n      return this.set('color', color);\n    }\n    /**\n     * A representation of a cue point.\n     *\n     * @typedef {Object} VimeoCuePoint\n     * @property {number} time The time of the cue point.\n     * @property {object} data The data passed when adding the cue point.\n     * @property {string} id The unique id for use with removeCuePoint.\n     */\n\n    /**\n     * A promise to get the cue points of a video.\n     *\n     * @promise GetCuePointsPromise\n     * @fulfill {VimeoCuePoint[]} The cue points added to the video.\n     * @reject {UnsupportedError} Cue points are not supported with the current\n     *         player or browser.\n     */\n\n    /**\n     * Get an array of the cue points added to the video.\n     *\n     * @return {GetCuePointsPromise}\n     */\n\n  }, {\n    key: \"getCuePoints\",\n    value: function getCuePoints() {\n      return this.get('cuePoints');\n    }\n    /**\n     * A promise to get the current time of the video.\n     *\n     * @promise GetCurrentTimePromise\n     * @fulfill {number} The current time in seconds.\n     */\n\n    /**\n     * Get the current playback position in seconds.\n     *\n     * @return {GetCurrentTimePromise}\n     */\n\n  }, {\n    key: \"getCurrentTime\",\n    value: function getCurrentTime() {\n      return this.get('currentTime');\n    }\n    /**\n     * A promise to set the current time of the video.\n     *\n     * @promise SetCurrentTimePromise\n     * @fulfill {number} The actual current time that was set.\n     * @reject {RangeError} the time was less than 0 or greater than the\n     *         video’s duration.\n     */\n\n    /**\n     * Set the current playback position in seconds. If the player was\n     * paused, it will remain paused. Likewise, if the player was playing,\n     * it will resume playing once the video has buffered.\n     *\n     * You can provide an accurate time and the player will attempt to seek\n     * to as close to that time as possible. The exact time will be the\n     * fulfilled value of the promise.\n     *\n     * @param {number} currentTime\n     * @return {SetCurrentTimePromise}\n     */\n\n  }, {\n    key: \"setCurrentTime\",\n    value: function setCurrentTime(currentTime) {\n      return this.set('currentTime', currentTime);\n    }\n    /**\n     * A promise to get the duration of the video.\n     *\n     * @promise GetDurationPromise\n     * @fulfill {number} The duration in seconds.\n     */\n\n    /**\n     * Get the duration of the video in seconds. It will be rounded to the\n     * nearest second before playback begins, and to the nearest thousandth\n     * of a second after playback begins.\n     *\n     * @return {GetDurationPromise}\n     */\n\n  }, {\n    key: \"getDuration\",\n    value: function getDuration() {\n      return this.get('duration');\n    }\n    /**\n     * A promise to get the ended state of the video.\n     *\n     * @promise GetEndedPromise\n     * @fulfill {boolean} Whether or not the video has ended.\n     */\n\n    /**\n     * Get the ended state of the video. The video has ended if\n     * `currentTime === duration`.\n     *\n     * @return {GetEndedPromise}\n     */\n\n  }, {\n    key: \"getEnded\",\n    value: function getEnded() {\n      return this.get('ended');\n    }\n    /**\n     * A promise to get the loop state of the player.\n     *\n     * @promise GetLoopPromise\n     * @fulfill {boolean} Whether or not the player is set to loop.\n     */\n\n    /**\n     * Get the loop state of the player.\n     *\n     * @return {GetLoopPromise}\n     */\n\n  }, {\n    key: \"getLoop\",\n    value: function getLoop() {\n      return this.get('loop');\n    }\n    /**\n     * A promise to set the loop state of the player.\n     *\n     * @promise SetLoopPromise\n     * @fulfill {boolean} The loop state that was set.\n     */\n\n    /**\n     * Set the loop state of the player. When set to `true`, the player\n     * will start over immediately once playback ends.\n     *\n     * @param {boolean} loop\n     * @return {SetLoopPromise}\n     */\n\n  }, {\n    key: \"setLoop\",\n    value: function setLoop(loop) {\n      return this.set('loop', loop);\n    }\n    /**\n     * A promise to set the muted state of the player.\n     *\n     * @promise SetMutedPromise\n     * @fulfill {boolean} The muted state that was set.\n     */\n\n    /**\n     * Set the muted state of the player. When set to `true`, the player\n     * volume will be muted.\n     *\n     * @param {boolean} muted\n     * @return {SetMutedPromise}\n     */\n\n  }, {\n    key: \"setMuted\",\n    value: function setMuted(muted) {\n      return this.set('muted', muted);\n    }\n    /**\n     * A promise to get the muted state of the player.\n     *\n     * @promise GetMutedPromise\n     * @fulfill {boolean} Whether or not the player is muted.\n     */\n\n    /**\n     * Get the muted state of the player.\n     *\n     * @return {GetMutedPromise}\n     */\n\n  }, {\n    key: \"getMuted\",\n    value: function getMuted() {\n      return this.get('muted');\n    }\n    /**\n     * A promise to get the paused state of the player.\n     *\n     * @promise GetLoopPromise\n     * @fulfill {boolean} Whether or not the video is paused.\n     */\n\n    /**\n     * Get the paused state of the player.\n     *\n     * @return {GetLoopPromise}\n     */\n\n  }, {\n    key: \"getPaused\",\n    value: function getPaused() {\n      return this.get('paused');\n    }\n    /**\n     * A promise to get the playback rate of the player.\n     *\n     * @promise GetPlaybackRatePromise\n     * @fulfill {number} The playback rate of the player on a scale from 0.5 to 2.\n     */\n\n    /**\n     * Get the playback rate of the player on a scale from `0.5` to `2`.\n     *\n     * @return {GetPlaybackRatePromise}\n     */\n\n  }, {\n    key: \"getPlaybackRate\",\n    value: function getPlaybackRate() {\n      return this.get('playbackRate');\n    }\n    /**\n     * A promise to set the playbackrate of the player.\n     *\n     * @promise SetPlaybackRatePromise\n     * @fulfill {number} The playback rate was set.\n     * @reject {RangeError} The playback rate was less than 0.5 or greater than 2.\n     */\n\n    /**\n     * Set the playback rate of the player on a scale from `0.5` to `2`. When set\n     * via the API, the playback rate will not be synchronized to other\n     * players or stored as the viewer's preference.\n     *\n     * @param {number} playbackRate\n     * @return {SetPlaybackRatePromise}\n     */\n\n  }, {\n    key: \"setPlaybackRate\",\n    value: function setPlaybackRate(playbackRate) {\n      return this.set('playbackRate', playbackRate);\n    }\n    /**\n     * A promise to get the played property of the video.\n     *\n     * @promise GetPlayedPromise\n     * @fulfill {Array} Played Timeranges converted to an Array.\n     */\n\n    /**\n     * Get the played property of the video.\n     *\n     * @return {GetPlayedPromise}\n     */\n\n  }, {\n    key: \"getPlayed\",\n    value: function getPlayed() {\n      return this.get('played');\n    }\n    /**\n     * A promise to get the qualities available of the current video.\n     *\n     * @promise GetQualitiesPromise\n     * @fulfill {Array} The qualities of the video.\n     */\n\n    /**\n     * Get the qualities of the current video.\n     *\n     * @return {GetQualitiesPromise}\n     */\n\n  }, {\n    key: \"getQualities\",\n    value: function getQualities() {\n      return this.get('qualities');\n    }\n    /**\n     * A promise to get the current set quality of the video.\n     *\n     * @promise GetQualityPromise\n     * @fulfill {string} The current set quality.\n     */\n\n    /**\n     * Get the current set quality of the video.\n     *\n     * @return {GetQualityPromise}\n     */\n\n  }, {\n    key: \"getQuality\",\n    value: function getQuality() {\n      return this.get('quality');\n    }\n    /**\n     * A promise to set the video quality.\n     *\n     * @promise SetQualityPromise\n     * @fulfill {number} The quality was set.\n     * @reject {RangeError} The quality is not available.\n     */\n\n    /**\n     * Set a video quality.\n     *\n     * @param {string} quality\n     * @return {SetQualityPromise}\n     */\n\n  }, {\n    key: \"setQuality\",\n    value: function setQuality(quality) {\n      return this.set('quality', quality);\n    }\n    /**\n     * A promise to get the seekable property of the video.\n     *\n     * @promise GetSeekablePromise\n     * @fulfill {Array} Seekable Timeranges converted to an Array.\n     */\n\n    /**\n     * Get the seekable property of the video.\n     *\n     * @return {GetSeekablePromise}\n     */\n\n  }, {\n    key: \"getSeekable\",\n    value: function getSeekable() {\n      return this.get('seekable');\n    }\n    /**\n     * A promise to get the seeking property of the player.\n     *\n     * @promise GetSeekingPromise\n     * @fulfill {boolean} Whether or not the player is currently seeking.\n     */\n\n    /**\n     * Get if the player is currently seeking.\n     *\n     * @return {GetSeekingPromise}\n     */\n\n  }, {\n    key: \"getSeeking\",\n    value: function getSeeking() {\n      return this.get('seeking');\n    }\n    /**\n     * A promise to get the text tracks of a video.\n     *\n     * @promise GetTextTracksPromise\n     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.\n     */\n\n    /**\n     * Get an array of the text tracks that exist for the video.\n     *\n     * @return {GetTextTracksPromise}\n     */\n\n  }, {\n    key: \"getTextTracks\",\n    value: function getTextTracks() {\n      return this.get('textTracks');\n    }\n    /**\n     * A promise to get the embed code for the video.\n     *\n     * @promise GetVideoEmbedCodePromise\n     * @fulfill {string} The `<iframe>` embed code for the video.\n     */\n\n    /**\n     * Get the `<iframe>` embed code for the video.\n     *\n     * @return {GetVideoEmbedCodePromise}\n     */\n\n  }, {\n    key: \"getVideoEmbedCode\",\n    value: function getVideoEmbedCode() {\n      return this.get('videoEmbedCode');\n    }\n    /**\n     * A promise to get the id of the video.\n     *\n     * @promise GetVideoIdPromise\n     * @fulfill {number} The id of the video.\n     */\n\n    /**\n     * Get the id of the video.\n     *\n     * @return {GetVideoIdPromise}\n     */\n\n  }, {\n    key: \"getVideoId\",\n    value: function getVideoId() {\n      return this.get('videoId');\n    }\n    /**\n     * A promise to get the title of the video.\n     *\n     * @promise GetVideoTitlePromise\n     * @fulfill {number} The title of the video.\n     */\n\n    /**\n     * Get the title of the video.\n     *\n     * @return {GetVideoTitlePromise}\n     */\n\n  }, {\n    key: \"getVideoTitle\",\n    value: function getVideoTitle() {\n      return this.get('videoTitle');\n    }\n    /**\n     * A promise to get the native width of the video.\n     *\n     * @promise GetVideoWidthPromise\n     * @fulfill {number} The native width of the video.\n     */\n\n    /**\n     * Get the native width of the currently‐playing video. The width of\n     * the highest‐resolution available will be used before playback begins.\n     *\n     * @return {GetVideoWidthPromise}\n     */\n\n  }, {\n    key: \"getVideoWidth\",\n    value: function getVideoWidth() {\n      return this.get('videoWidth');\n    }\n    /**\n     * A promise to get the native height of the video.\n     *\n     * @promise GetVideoHeightPromise\n     * @fulfill {number} The native height of the video.\n     */\n\n    /**\n     * Get the native height of the currently‐playing video. The height of\n     * the highest‐resolution available will be used before playback begins.\n     *\n     * @return {GetVideoHeightPromise}\n     */\n\n  }, {\n    key: \"getVideoHeight\",\n    value: function getVideoHeight() {\n      return this.get('videoHeight');\n    }\n    /**\n     * A promise to get the vimeo.com url for the video.\n     *\n     * @promise GetVideoUrlPromise\n     * @fulfill {number} The vimeo.com url for the video.\n     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.\n     */\n\n    /**\n     * Get the vimeo.com url for the video.\n     *\n     * @return {GetVideoUrlPromise}\n     */\n\n  }, {\n    key: \"getVideoUrl\",\n    value: function getVideoUrl() {\n      return this.get('videoUrl');\n    }\n    /**\n     * A promise to get the volume level of the player.\n     *\n     * @promise GetVolumePromise\n     * @fulfill {number} The volume level of the player on a scale from 0 to 1.\n     */\n\n    /**\n     * Get the current volume level of the player on a scale from `0` to `1`.\n     *\n     * Most mobile devices do not support an independent volume from the\n     * system volume. In those cases, this method will always return `1`.\n     *\n     * @return {GetVolumePromise}\n     */\n\n  }, {\n    key: \"getVolume\",\n    value: function getVolume() {\n      return this.get('volume');\n    }\n    /**\n     * A promise to set the volume level of the player.\n     *\n     * @promise SetVolumePromise\n     * @fulfill {number} The volume was set.\n     * @reject {RangeError} The volume was less than 0 or greater than 1.\n     */\n\n    /**\n     * Set the volume of the player on a scale from `0` to `1`. When set\n     * via the API, the volume level will not be synchronized to other\n     * players or stored as the viewer’s preference.\n     *\n     * Most mobile devices do not support setting the volume. An error will\n     * *not* be triggered in that situation.\n     *\n     * @param {number} volume\n     * @return {SetVolumePromise}\n     */\n\n  }, {\n    key: \"setVolume\",\n    value: function setVolume(volume) {\n      return this.set('volume', volume);\n    }\n  }]);\n\n  return Player;\n}(); // Setup embed only if this is not a node environment\n\n\nif (!isNode) {\n  screenfull = initializeScreenfull();\n  initializeEmbeds();\n  resizeEmbeds();\n  initAppendVideoMetadata();\n  checkUrlTimeParam();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/@vimeo/player/dist/player.es.js?");
        /***/ },
        /***/ "./node_modules/lodash.throttle/index.js": /*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/ /***/ function(module, __unused_webpack_exports, __webpack_require__) {
            eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        result = wait - timeSinceLastCall;\n\n    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\n/**\n * Creates a throttled function that only invokes `func` at most once per\n * every `wait` milliseconds. The throttled function comes with a `cancel`\n * method to cancel delayed `func` invocations and a `flush` method to\n * immediately invoke them. Provide `options` to indicate whether `func`\n * should be invoked on the leading and/or trailing edge of the `wait`\n * timeout. The `func` is invoked with the last arguments provided to the\n * throttled function. Subsequent calls to the throttled function return the\n * result of the last `func` invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the throttled function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.throttle` and `_.debounce`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to throttle.\n * @param {number} [wait=0] The number of milliseconds to throttle invocations to.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=true]\n *  Specify invoking on the leading edge of the timeout.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new throttled function.\n * @example\n *\n * // Avoid excessively updating the position while scrolling.\n * jQuery(window).on('scroll', _.throttle(updatePosition, 100));\n *\n * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.\n * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });\n * jQuery(element).on('click', throttled);\n *\n * // Cancel the trailing throttled invocation.\n * jQuery(window).on('popstate', throttled.cancel);\n */\nfunction throttle(func, wait, options) {\n  var leading = true,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  if (isObject(options)) {\n    leading = 'leading' in options ? !!options.leading : leading;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n  return debounce(func, wait, {\n    'leading': leading,\n    'maxWait': wait,\n    'trailing': trailing\n  });\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = throttle;\n\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/lodash.throttle/index.js?");
        /***/ },
        /***/ "./src/js/02-video.js": /*!****************************!*\
  !*** ./src/js/02-video.js ***!
  \****************************/ /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            "use strict";
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vimeo/player */ "./node_modules/@vimeo/player/dist/player.es.js");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);\n // module import\n\n\nconst iframe = document.querySelector("iframe"); //find video player in DOM\nconst player = new _vimeo_player__WEBPACK_IMPORTED_MODULE_0__["default"](iframe); //create vimeo player object\n\nlet secondsPlayed = Number(localStorage.getItem("videoplayer-current-time")); // convert localStorage player progress to number\n\n// Things done while video is playing\nconst onPlay = (data) => {\n  //show curent time in seconds\n  player.getCurrentTime().then((seconds) => {\n    console.log(seconds); //print actual time\n\n    //save current progress of video to local storage\n    localStorage.setItem("videoplayer-current-time", seconds);\n  });\n};\n\n//print last session video progress (in seconds) and set player progress to it\nwindow.addEventListener("load", (data) => {\n  //print last session seconds\n  console.log(`Video progress from last session: ${secondsPlayed} seconds`);\n\n  //load last player progress\n  player.setCurrentTime(secondsPlayed);\n});\n\n//get and print title of the currently played video\nplayer.getVideoTitle().then((title) => {\n  console.log(`Video title: ${title}`);\n});\n\n//when video is playing, update time and save it to local storage as "videoplayer-current-time" using throttle to delay updates by 1 second\nplayer.on("timeupdate", lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(onPlay, 1000));\n\n\n//# sourceURL=webpack://goit-js-hw-08/./src/js/02-video.js?');
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/ /******/ // Return the exports of the module
        /******/ return module.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module) {
            /******/ var getter = module && module.__esModule ? /******/ function() {
                return module["default"];
            } : /******/ function() {
                return module;
            };
            /******/ __webpack_require__.d(getter, {
                a: getter
            });
            /******/ return getter;
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
        /******/ // define getter functions for harmony exports
        /******/ __webpack_require__.d = function(exports, definition) {
            /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        /******/ };
    /******/ }();
    /******/ /******/ /* webpack/runtime/global */ /******/ !function() {
        /******/ __webpack_require__.g = function() {
            /******/ if (typeof globalThis === "object") return globalThis;
            /******/ try {
                /******/ return this || new Function("return this")();
            /******/ } catch (e) {
                /******/ if (typeof window === "object") return window;
            /******/ }
        /******/ }();
    /******/ }();
    /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
        /******/ __webpack_require__.o = function(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
        };
    /******/ }();
    /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
        /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
    /******/ }();
    /******/ /************************************************************************/ /******/ /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ var __webpack_exports__ = __webpack_require__("./src/js/02-video.js");
/******/ /******/ })();

},{}]},["apBie","1F3pe"], "1F3pe", "parcelRequire4c75")

//# sourceMappingURL=02-video.f5b1d392.js.map
