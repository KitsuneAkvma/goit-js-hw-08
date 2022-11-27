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
})({"1sQTh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26b637ed28b43046";
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

},{}],"1S0LG":[function(require,module,exports) {
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */ /******/ (function() {
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/simplelightbox/dist/simple-lightbox.css": /*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/simplelightbox/dist/simple-lightbox.css ***!
  \****************************************************************************************************/ /***/ function(module, __webpack_exports__, __webpack_require__) {
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/*!\\r\\n\\tBy Andr\xe9 Rinas, www.andrerinas.de\\r\\n\\tDocumentation, www.simplelightbox.de\\r\\n\\tAvailable for use under the MIT License\\r\\n\\tVersion 2.10.4\\r\\n*/\\nbody.hidden-scroll {\\n  overflow: hidden; }\\n\\n.sl-overlay {\\n  position: fixed;\\n  left: 0;\\n  right: 0;\\n  top: 0;\\n  bottom: 0;\\n  background: #fff;\\n  display: none;\\n  z-index: 1035; }\\n\\n.sl-wrapper {\\n  z-index: 1040;\\n  width: 100%;\\n  height: 100%;\\n  left: 0;\\n  top: 0;\\n  position: fixed; }\\n  .sl-wrapper * {\\n    box-sizing: border-box; }\\n  .sl-wrapper button {\\n    border: 0 none;\\n    background: transparent;\\n    font-size: 28px;\\n    padding: 0;\\n    cursor: pointer; }\\n    .sl-wrapper button:hover {\\n      opacity: 0.7; }\\n  .sl-wrapper .sl-close {\\n    display: none;\\n    position: fixed;\\n    right: 30px;\\n    top: 30px;\\n    z-index: 10060;\\n    margin-top: -14px;\\n    margin-right: -14px;\\n    height: 44px;\\n    width: 44px;\\n    line-height: 44px;\\n    font-family: Arial, Baskerville, monospace;\\n    color: #000;\\n    font-size: 3rem; }\\n  .sl-wrapper .sl-counter {\\n    display: none;\\n    position: fixed;\\n    top: 30px;\\n    left: 30px;\\n    z-index: 10060;\\n    color: #000;\\n    font-size: 1rem; }\\n  .sl-wrapper .sl-navigation {\\n    width: 100%;\\n    display: none; }\\n    .sl-wrapper .sl-navigation button {\\n      position: fixed;\\n      top: 50%;\\n      margin-top: -22px;\\n      height: 44px;\\n      width: 22px;\\n      line-height: 44px;\\n      text-align: center;\\n      display: block;\\n      z-index: 10060;\\n      font-family: Arial, Baskerville, monospace;\\n      color: #000; }\\n      .sl-wrapper .sl-navigation button.sl-next {\\n        right: 5px;\\n        font-size: 2rem; }\\n      .sl-wrapper .sl-navigation button.sl-prev {\\n        left: 5px;\\n        font-size: 2rem; }\\n      @media (min-width: 35.5em) {\\n        .sl-wrapper .sl-navigation button {\\n          width: 44px; }\\n          .sl-wrapper .sl-navigation button.sl-next {\\n            right: 10px;\\n            font-size: 3rem; }\\n          .sl-wrapper .sl-navigation button.sl-prev {\\n            left: 10px;\\n            font-size: 3rem; } }\\n      @media (min-width: 50em) {\\n        .sl-wrapper .sl-navigation button {\\n          width: 44px; }\\n          .sl-wrapper .sl-navigation button.sl-next {\\n            right: 20px;\\n            font-size: 3rem; }\\n          .sl-wrapper .sl-navigation button.sl-prev {\\n            left: 20px;\\n            font-size: 3rem; } }\\n  .sl-wrapper.sl-dir-rtl .sl-navigation {\\n    direction: ltr; }\\n  .sl-wrapper .sl-image {\\n    position: fixed;\\n    -ms-touch-action: none;\\n    touch-action: none;\\n    z-index: 10000; }\\n    .sl-wrapper .sl-image img {\\n      margin: 0;\\n      padding: 0;\\n      display: block;\\n      border: 0 none;\\n      width: 100%;\\n      height: auto; }\\n      @media (min-width: 35.5em) {\\n        .sl-wrapper .sl-image img {\\n          border: 0 none; } }\\n      @media (min-width: 50em) {\\n        .sl-wrapper .sl-image img {\\n          border: 0 none; } }\\n    .sl-wrapper .sl-image iframe {\\n      background: #000;\\n      border: 0 none; }\\n      @media (min-width: 35.5em) {\\n        .sl-wrapper .sl-image iframe {\\n          border: 0 none; } }\\n      @media (min-width: 50em) {\\n        .sl-wrapper .sl-image iframe {\\n          border: 0 none; } }\\n    .sl-wrapper .sl-image .sl-caption {\\n      display: none;\\n      padding: 10px;\\n      color: #fff;\\n      background: rgba(0, 0, 0, 0.8);\\n      font-size: 1rem;\\n      position: absolute;\\n      bottom: 0;\\n      left: 0;\\n      right: 0; }\\n      .sl-wrapper .sl-image .sl-caption.pos-top {\\n        bottom: auto;\\n        top: 0; }\\n      .sl-wrapper .sl-image .sl-caption.pos-outside {\\n        bottom: auto; }\\n    .sl-wrapper .sl-image .sl-download {\\n      display: none;\\n      position: absolute;\\n      bottom: 5px;\\n      right: 5px;\\n      color: #000;\\n      z-index: 1060; }\\n\\n.sl-spinner {\\n  display: none;\\n  border: 5px solid #333;\\n  border-radius: 40px;\\n  height: 40px;\\n  left: 50%;\\n  margin: -20px 0 0 -20px;\\n  opacity: 0;\\n  position: fixed;\\n  top: 50%;\\n  width: 40px;\\n  z-index: 1007;\\n  -webkit-animation: pulsate 1s ease-out infinite;\\n  -moz-animation: pulsate 1s ease-out infinite;\\n  -ms-animation: pulsate 1s ease-out infinite;\\n  -o-animation: pulsate 1s ease-out infinite;\\n  animation: pulsate 1s ease-out infinite; }\\n\\n.sl-scrollbar-measure {\\n  position: absolute;\\n  top: -9999px;\\n  width: 50px;\\n  height: 50px;\\n  overflow: scroll; }\\n\\n.sl-transition {\\n  transition: -moz-transform ease 200ms;\\n  transition: -ms-transform ease 200ms;\\n  transition: -o-transform ease 200ms;\\n  transition: -webkit-transform ease 200ms;\\n  transition: transform ease 200ms; }\\n\\n@-webkit-keyframes pulsate {\\n  0% {\\n    transform: scale(0.1);\\n    opacity: 0.0; }\\n  50% {\\n    opacity: 1; }\\n  100% {\\n    transform: scale(1.2);\\n    opacity: 0; } }\\n\\n@keyframes pulsate {\\n  0% {\\n    transform: scale(0.1);\\n    opacity: 0.0; }\\n  50% {\\n    opacity: 1; }\\n  100% {\\n    transform: scale(1.2);\\n    opacity: 0; } }\\n\\n@-moz-keyframes pulsate {\\n  0% {\\n    transform: scale(0.1);\\n    opacity: 0.0; }\\n  50% {\\n    opacity: 1; }\\n  100% {\\n    transform: scale(1.2);\\n    opacity: 0; } }\\n\\n@-o-keyframes pulsate {\\n  0% {\\n    transform: scale(0.1);\\n    opacity: 0.0; }\\n  50% {\\n    opacity: 1; }\\n  100% {\\n    transform: scale(1.2);\\n    opacity: 0; } }\\n\\n@-ms-keyframes pulsate {\\n  0% {\\n    transform: scale(0.1);\\n    opacity: 0.0; }\\n  50% {\\n    opacity: 1; }\\n  100% {\\n    transform: scale(1.2);\\n    opacity: 0; } }\\n", ""]);\n// Exports\n/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/simplelightbox/dist/simple-lightbox.css?./node_modules/css-loader/dist/cjs.js');
        /***/ },
        /***/ "./node_modules/css-loader/dist/runtime/api.js": /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/ /***/ function(module) {
            eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/css-loader/dist/runtime/api.js?');
        /***/ },
        /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js": /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/ /***/ function(module) {
            eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
        /***/ },
        /***/ "./node_modules/simplelightbox/dist/simple-lightbox.modules.js": /*!*********************************************************************!*\
  !*** ./node_modules/simplelightbox/dist/simple-lightbox.modules.js ***!
  \*********************************************************************/ /***/ function(__unused_webpack_module, exports, __webpack_require__) {
            eval("/*!\r\n	By Andr\xe9 Rinas, www.andrerinas.de\r\n	Documentation, www.simplelightbox.de\r\n	Available for use under the MIT License\r\n	Version 2.10.4\r\n*/\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nvar SimpleLightbox = /*#__PURE__*/function () {\n  function SimpleLightbox(elements, options) {\n    var _this = this;\n    _classCallCheck(this, SimpleLightbox);\n    _defineProperty(this, \"defaultOptions\", {\n      sourceAttr: 'href',\n      overlay: true,\n      overlayOpacity: 0.7,\n      spinner: true,\n      nav: true,\n      navText: ['&lsaquo;', '&rsaquo;'],\n      captions: true,\n      captionDelay: 0,\n      captionSelector: 'img',\n      captionType: 'attr',\n      captionsData: 'title',\n      captionPosition: 'bottom',\n      captionClass: '',\n      close: true,\n      closeText: '&times;',\n      swipeClose: true,\n      showCounter: true,\n      fileExt: 'png|jpg|jpeg|gif|webp',\n      animationSlide: true,\n      animationSpeed: 250,\n      preloading: true,\n      enableKeyboard: true,\n      loop: true,\n      rel: false,\n      docClose: true,\n      swipeTolerance: 50,\n      className: 'simple-lightbox',\n      widthRatio: 0.8,\n      heightRatio: 0.9,\n      scaleImageToRatio: false,\n      disableRightClick: false,\n      disableScroll: true,\n      alertError: true,\n      alertErrorMessage: 'Image not found, next image will be loaded',\n      additionalHtml: false,\n      history: true,\n      throttleInterval: 0,\n      doubleTapZoom: 2,\n      maxZoom: 10,\n      htmlClass: 'has-lightbox',\n      rtl: false,\n      fixedClass: 'sl-fixed',\n      fadeSpeed: 300,\n      uniqueImages: true,\n      focus: true,\n      scrollZoom: true,\n      scrollZoomFactor: 0.5\n    });\n    _defineProperty(this, \"transitionPrefix\", void 0);\n    _defineProperty(this, \"isPassiveEventsSupported\", void 0);\n    _defineProperty(this, \"transitionCapable\", false);\n    _defineProperty(this, \"isTouchDevice\", 'ontouchstart' in window);\n    _defineProperty(this, \"isAppleDevice\", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));\n    _defineProperty(this, \"initialLocationHash\", void 0);\n    _defineProperty(this, \"pushStateSupport\", 'pushState' in history);\n    _defineProperty(this, \"isOpen\", false);\n    _defineProperty(this, \"isAnimating\", false);\n    _defineProperty(this, \"isClosing\", false);\n    _defineProperty(this, \"isFadeIn\", false);\n    _defineProperty(this, \"urlChangedOnce\", false);\n    _defineProperty(this, \"hashReseted\", false);\n    _defineProperty(this, \"historyHasChanges\", false);\n    _defineProperty(this, \"historyUpdateTimeout\", null);\n    _defineProperty(this, \"currentImage\", void 0);\n    _defineProperty(this, \"eventNamespace\", 'simplelightbox');\n    _defineProperty(this, \"domNodes\", {});\n    _defineProperty(this, \"loadedImages\", []);\n    _defineProperty(this, \"initialImageIndex\", 0);\n    _defineProperty(this, \"currentImageIndex\", 0);\n    _defineProperty(this, \"initialSelector\", null);\n    _defineProperty(this, \"globalScrollbarWidth\", 0);\n    _defineProperty(this, \"controlCoordinates\", {\n      swipeDiff: 0,\n      swipeYDiff: 0,\n      swipeStart: 0,\n      swipeEnd: 0,\n      swipeYStart: 0,\n      swipeYEnd: 0,\n      mousedown: false,\n      imageLeft: 0,\n      zoomed: false,\n      containerHeight: 0,\n      containerWidth: 0,\n      containerOffsetX: 0,\n      containerOffsetY: 0,\n      imgHeight: 0,\n      imgWidth: 0,\n      capture: false,\n      initialOffsetX: 0,\n      initialOffsetY: 0,\n      initialPointerOffsetX: 0,\n      initialPointerOffsetY: 0,\n      initialPointerOffsetX2: 0,\n      initialPointerOffsetY2: 0,\n      initialScale: 1,\n      initialPinchDistance: 0,\n      pointerOffsetX: 0,\n      pointerOffsetY: 0,\n      pointerOffsetX2: 0,\n      pointerOffsetY2: 0,\n      targetOffsetX: 0,\n      targetOffsetY: 0,\n      targetScale: 0,\n      pinchOffsetX: 0,\n      pinchOffsetY: 0,\n      limitOffsetX: 0,\n      limitOffsetY: 0,\n      scaleDifference: 0,\n      targetPinchDistance: 0,\n      touchCount: 0,\n      doubleTapped: false,\n      touchmoveCount: 0\n    });\n    this.options = Object.assign(this.defaultOptions, options);\n    this.isPassiveEventsSupported = this.checkPassiveEventsSupport();\n    if (typeof elements === 'string') {\n      this.initialSelector = elements;\n      this.elements = Array.from(document.querySelectorAll(elements));\n    } else {\n      this.elements = typeof elements.length !== 'undefined' && elements.length > 0 ? Array.from(elements) : [elements];\n    }\n    this.relatedElements = [];\n    this.transitionPrefix = this.calculateTransitionPrefix();\n    this.transitionCapable = this.transitionPrefix !== false;\n    this.initialLocationHash = this.hash;\n\n    // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...\n    if (this.options.rel) {\n      this.elements = this.getRelated(this.options.rel);\n    }\n    if (this.options.uniqueImages) {\n      var imgArr = [];\n      this.elements = Array.from(this.elements).filter(function (element) {\n        var src = element.getAttribute(_this.options.sourceAttr);\n        if (imgArr.indexOf(src) === -1) {\n          imgArr.push(src);\n          return true;\n        }\n        return false;\n      });\n    }\n    this.createDomNodes();\n    if (this.options.close) {\n      this.domNodes.wrapper.appendChild(this.domNodes.closeButton);\n    }\n    if (this.options.nav) {\n      this.domNodes.wrapper.appendChild(this.domNodes.navigation);\n    }\n    if (this.options.spinner) {\n      this.domNodes.wrapper.appendChild(this.domNodes.spinner);\n    }\n    this.addEventListener(this.elements, 'click.' + this.eventNamespace, function (event) {\n      if (_this.isValidLink(event.currentTarget)) {\n        event.preventDefault();\n        if (_this.isAnimating) {\n          return false;\n        }\n        _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);\n        _this.openImage(event.currentTarget);\n      }\n    });\n\n    // close addEventListener click addEventListener doc\n    if (this.options.docClose) {\n      this.addEventListener(this.domNodes.wrapper, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], function (event) {\n        if (_this.isOpen && event.target === event.currentTarget) {\n          _this.close();\n        }\n      });\n    }\n\n    // disable rightclick\n    if (this.options.disableRightClick) {\n      this.addEventListener(document.body, 'contextmenu.' + this.eventNamespace, function (event) {\n        if (event.target.parentElement.classList.contains(\"sl-image\")) {\n          event.preventDefault();\n        }\n      });\n    }\n\n    // keyboard-control\n    if (this.options.enableKeyboard) {\n      this.addEventListener(document.body, 'keyup.' + this.eventNamespace, this.throttle(function (event) {\n        _this.controlCoordinates.swipeDiff = 0;\n        // keyboard control only if lightbox is open\n\n        if (_this.isAnimating && event.key === 'Escape') {\n          _this.currentImage.setAttribute('src', '');\n          _this.isAnimating = false;\n          return _this.close();\n        }\n        if (_this.isOpen) {\n          event.preventDefault();\n          if (event.key === 'Escape') {\n            _this.close();\n          }\n          if (!_this.isAnimating && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) > -1) {\n            _this.loadImage(event.key === 'ArrowRight' ? 1 : -1);\n          }\n        }\n      }, this.options.throttleInterval));\n    }\n    this.addEvents();\n  }\n  _createClass(SimpleLightbox, [{\n    key: \"checkPassiveEventsSupport\",\n    value: function checkPassiveEventsSupport() {\n      // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection\n      // Test via a getter in the options object to see if the passive property is accessed\n      var supportsPassive = false;\n      try {\n        var opts = Object.defineProperty({}, 'passive', {\n          get: function get() {\n            supportsPassive = true;\n          }\n        });\n        window.addEventListener(\"testPassive\", null, opts);\n        window.removeEventListener(\"testPassive\", null, opts);\n      } catch (e) {}\n      return supportsPassive;\n    }\n  }, {\n    key: \"createDomNodes\",\n    value: function createDomNodes() {\n      this.domNodes.overlay = document.createElement('div');\n      this.domNodes.overlay.classList.add('sl-overlay');\n      this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;\n      this.domNodes.closeButton = document.createElement('button');\n      this.domNodes.closeButton.classList.add('sl-close');\n      this.domNodes.closeButton.innerHTML = this.options.closeText;\n      this.domNodes.spinner = document.createElement('div');\n      this.domNodes.spinner.classList.add('sl-spinner');\n      this.domNodes.spinner.innerHTML = '<div></div>';\n      this.domNodes.navigation = document.createElement('div');\n      this.domNodes.navigation.classList.add('sl-navigation');\n      this.domNodes.navigation.innerHTML = \"<button class=\\\"sl-prev\\\">\".concat(this.options.navText[0], \"</button><button class=\\\"sl-next\\\">\").concat(this.options.navText[1], \"</button>\");\n      this.domNodes.counter = document.createElement('div');\n      this.domNodes.counter.classList.add('sl-counter');\n      this.domNodes.counter.innerHTML = '<span class=\"sl-current\"></span>/<span class=\"sl-total\"></span>';\n      this.domNodes.caption = document.createElement('div');\n      this.domNodes.caption.classList.add('sl-caption', 'pos-' + this.options.captionPosition);\n      if (this.options.captionClass) {\n        this.domNodes.caption.classList.add(this.options.captionClass);\n      }\n      this.domNodes.image = document.createElement('div');\n      this.domNodes.image.classList.add('sl-image');\n      this.domNodes.wrapper = document.createElement('div');\n      this.domNodes.wrapper.classList.add('sl-wrapper');\n      this.domNodes.wrapper.setAttribute('tabindex', -1);\n      this.domNodes.wrapper.setAttribute('role', 'dialog');\n      this.domNodes.wrapper.setAttribute('aria-hidden', false);\n      if (this.options.className) {\n        this.domNodes.wrapper.classList.add(this.options.className);\n      }\n      if (this.options.rtl) {\n        this.domNodes.wrapper.classList.add('sl-dir-rtl');\n      }\n    }\n  }, {\n    key: \"throttle\",\n    value: function throttle(func, limit) {\n      var inThrottle;\n      return function () {\n        if (!inThrottle) {\n          func.apply(this, arguments);\n          inThrottle = true;\n          setTimeout(function () {\n            return inThrottle = false;\n          }, limit);\n        }\n      };\n    }\n  }, {\n    key: \"isValidLink\",\n    value: function isValidLink(element) {\n      return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp('(' + this.options.fileExt + ')$', 'i').test(element.getAttribute(this.options.sourceAttr));\n    }\n  }, {\n    key: \"calculateTransitionPrefix\",\n    value: function calculateTransitionPrefix() {\n      var s = (document.body || document.documentElement).style;\n      return 'transition' in s ? '' : 'WebkitTransition' in s ? '-webkit-' : 'MozTransition' in s ? '-moz-' : 'OTransition' in s ? '-o' : false;\n    }\n  }, {\n    key: \"toggleScrollbar\",\n    value: function toggleScrollbar(type) {\n      var scrollbarWidth = 0;\n      var fixedElements = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));\n      if (type === 'hide') {\n        var fullWindowWidth = window.innerWidth;\n        if (!fullWindowWidth) {\n          var documentElementRect = document.documentElement.getBoundingClientRect();\n          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);\n        }\n        if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {\n          var scrollDiv = document.createElement('div'),\n            paddingRight = parseInt(document.body.style.paddingRight || 0, 10);\n          scrollDiv.classList.add('sl-scrollbar-measure');\n          document.body.appendChild(scrollDiv);\n          scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;\n          document.body.removeChild(scrollDiv);\n          document.body.dataset.originalPaddingRight = paddingRight;\n          if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {\n            document.body.classList.add('hidden-scroll');\n            document.body.style.paddingRight = paddingRight + scrollbarWidth + 'px';\n            fixedElements.forEach(function (element) {\n              var actualPadding = element.style.paddingRight;\n              var calculatedPadding = window.getComputedStyle(element)['padding-right'];\n              element.dataset.originalPaddingRight = actualPadding;\n              element.style.paddingRight = \"\".concat(parseFloat(calculatedPadding) + scrollbarWidth, \"px\");\n            });\n          }\n        }\n      } else {\n        document.body.classList.remove('hidden-scroll');\n        document.body.style.paddingRight = document.body.dataset.originalPaddingRight;\n        fixedElements.forEach(function (element) {\n          var padding = element.dataset.originalPaddingRight;\n          if (typeof padding !== 'undefined') {\n            element.style.paddingRight = padding;\n          }\n        });\n      }\n      return scrollbarWidth;\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      var _this2 = this;\n      if (!this.isOpen || this.isAnimating || this.isClosing) {\n        return false;\n      }\n      this.isClosing = true;\n      var element = this.relatedElements[this.currentImageIndex];\n      element.dispatchEvent(new Event('close.simplelightbox'));\n      if (this.options.history) {\n        this.historyHasChanges = false;\n        if (!this.hashReseted) {\n          this.resetHash();\n        }\n      }\n      this.removeEventListener(document, 'focusin.' + this.eventNamespace);\n      this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);\n      this.fadeOut(document.querySelectorAll('.sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter'), this.options.fadeSpeed, function () {\n        if (_this2.options.disableScroll) {\n          _this2.toggleScrollbar('show');\n        }\n        if (_this2.options.htmlClass && _this2.options.htmlClass !== '') {\n          document.querySelector('html').classList.remove(_this2.options.htmlClass);\n        }\n        document.body.removeChild(_this2.domNodes.wrapper);\n        document.body.removeChild(_this2.domNodes.overlay);\n        _this2.domNodes.additionalHtml = null;\n        element.dispatchEvent(new Event('closed.simplelightbox'));\n        _this2.isClosing = false;\n      });\n      this.currentImage = null;\n      this.isOpen = false;\n      this.isAnimating = false;\n\n      // reset touchcontrol coordinates\n      for (var key in this.controlCoordinates) {\n        this.controlCoordinates[key] = 0;\n      }\n      this.controlCoordinates.mousedown = false;\n      this.controlCoordinates.zoomed = false;\n      this.controlCoordinates.capture = false;\n      this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);\n      this.controlCoordinates.doubleTapped = false;\n    }\n  }, {\n    key: \"hash\",\n    get: function get() {\n      return window.location.hash.substring(1);\n    }\n  }, {\n    key: \"preload\",\n    value: function preload() {\n      var _this3 = this;\n      var index = this.currentImageIndex,\n        length = this.relatedElements.length,\n        next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1,\n        prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1,\n        nextImage = new Image(),\n        prevImage = new Image();\n      nextImage.addEventListener('load', function (event) {\n        var src = event.target.getAttribute('src');\n        if (_this3.loadedImages.indexOf(src) === -1) {\n          //is this condition even required... setting multiple times will not change usage...\n          _this3.loadedImages.push(src);\n        }\n        _this3.relatedElements[index].dispatchEvent(new Event('nextImageLoaded.' + _this3.eventNamespace));\n      });\n      nextImage.setAttribute('src', this.relatedElements[next].getAttribute(this.options.sourceAttr));\n      prevImage.addEventListener('load', function (event) {\n        var src = event.target.getAttribute('src');\n        if (_this3.loadedImages.indexOf(src) === -1) {\n          _this3.loadedImages.push(src);\n        }\n        _this3.relatedElements[index].dispatchEvent(new Event('prevImageLoaded.' + _this3.eventNamespace));\n      });\n      prevImage.setAttribute('src', this.relatedElements[prev].getAttribute(this.options.sourceAttr));\n    }\n  }, {\n    key: \"loadImage\",\n    value: function loadImage(direction) {\n      var _this4 = this;\n      var slideDirection = direction;\n      if (this.options.rtl) {\n        direction = -direction;\n      }\n      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event('change.' + this.eventNamespace));\n      this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'next' : 'prev') + '.' + this.eventNamespace));\n      var newIndex = this.currentImageIndex + direction;\n      if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) {\n        return false;\n      }\n      this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;\n      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;\n      if (this.options.animationSlide) {\n        this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + 'px');\n      }\n      this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function () {\n        _this4.isAnimating = true;\n        if (!_this4.isClosing) {\n          setTimeout(function () {\n            var element = _this4.relatedElements[_this4.currentImageIndex];\n            _this4.currentImage.setAttribute('src', element.getAttribute(_this4.options.sourceAttr));\n            if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) {\n              _this4.show(_this4.domNodes.spinner);\n            }\n            if (_this4.domNodes.image.contains(_this4.domNodes.caption)) {\n              _this4.domNodes.image.removeChild(_this4.domNodes.caption);\n            }\n            _this4.adjustImage(slideDirection);\n            if (_this4.options.preloading) _this4.preload();\n          }, 100);\n        } else {\n          _this4.isAnimating = false;\n        }\n      });\n    }\n  }, {\n    key: \"adjustImage\",\n    value: function adjustImage(direction) {\n      var _this5 = this;\n      if (!this.currentImage) {\n        return false;\n      }\n      var tmpImage = new Image(),\n        windowWidth = window.innerWidth * this.options.widthRatio,\n        windowHeight = window.innerHeight * this.options.heightRatio;\n      tmpImage.setAttribute('src', this.currentImage.getAttribute('src'));\n      this.currentImage.dataset.scale = 1;\n      this.currentImage.dataset.translateX = 0;\n      this.currentImage.dataset.translateY = 0;\n      this.zoomPanElement(0, 0, 1);\n      tmpImage.addEventListener('error', function (event) {\n        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('error.' + _this5.eventNamespace));\n        _this5.isAnimating = false;\n        _this5.isOpen = true;\n        _this5.domNodes.spinner.style.display = 'none';\n        var dirIsDefined = direction === 1 || direction === -1;\n        if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) {\n          return _this5.close();\n        }\n        if (_this5.options.alertError) {\n          alert(_this5.options.alertErrorMessage);\n        }\n        _this5.loadImage(dirIsDefined ? direction : 1);\n      });\n      tmpImage.addEventListener('load', function (event) {\n        if (typeof direction !== 'undefined') {\n          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('changed.' + _this5.eventNamespace));\n          _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'nextDone' : 'prevDone') + '.' + _this5.eventNamespace));\n        }\n\n        // history\n        if (_this5.options.history) {\n          _this5.updateURL();\n        }\n        if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute('src')) === -1) {\n          _this5.loadedImages.push(_this5.currentImage.getAttribute('src'));\n        }\n        var imageWidth = event.target.width,\n          imageHeight = event.target.height;\n        if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {\n          var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;\n          imageWidth /= ratio;\n          imageHeight /= ratio;\n        }\n        _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + 'px';\n        _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + 'px';\n        _this5.domNodes.image.style.width = imageWidth + 'px';\n        _this5.domNodes.image.style.height = imageHeight + 'px';\n        _this5.domNodes.spinner.style.display = 'none';\n        if (_this5.options.focus) {\n          _this5.forceFocus();\n        }\n        _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function () {\n          if (_this5.options.focus) {\n            _this5.domNodes.wrapper.focus();\n          }\n        });\n        _this5.isOpen = true;\n        var captionContainer, captionText;\n        if (typeof _this5.options.captionSelector === 'string') {\n          captionContainer = _this5.options.captionSelector === 'self' ? _this5.relatedElements[_this5.currentImageIndex] : _this5.relatedElements[_this5.currentImageIndex].querySelector(_this5.options.captionSelector);\n        } else if (typeof _this5.options.captionSelector === 'function') {\n          captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);\n        }\n        if (_this5.options.captions && captionContainer) {\n          if (_this5.options.captionType === 'data') {\n            captionText = captionContainer.dataset[_this5.options.captionsData];\n          } else if (_this5.options.captionType === 'text') {\n            captionText = captionContainer.innerHTML;\n          } else {\n            captionText = captionContainer.getAttribute(_this5.options.captionsData);\n          }\n        }\n        if (!_this5.options.loop) {\n          if (_this5.currentImageIndex === 0) {\n            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-prev'));\n          }\n          if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) {\n            _this5.hide(_this5.domNodes.navigation.querySelector('.sl-next'));\n          }\n          if (_this5.currentImageIndex > 0) {\n            _this5.show(_this5.domNodes.navigation.querySelector('.sl-prev'));\n          }\n          if (_this5.currentImageIndex < _this5.relatedElements.length - 1) {\n            _this5.show(_this5.domNodes.navigation.querySelector('.sl-next'));\n          }\n        } else {\n          if (_this5.relatedElements.length === 1) {\n            _this5.hide(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));\n          } else {\n            _this5.show(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));\n          }\n        }\n        if (direction === 1 || direction === -1) {\n          if (_this5.options.animationSlide) {\n            _this5.slide(0, 100 * direction + 'px');\n            setTimeout(function () {\n              _this5.slide(_this5.options.animationSpeed / 1000, 0 + 'px');\n            }, 50);\n          }\n          _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function () {\n            _this5.isAnimating = false;\n            _this5.setCaption(captionText, imageWidth);\n          });\n        } else {\n          _this5.isAnimating = false;\n          _this5.setCaption(captionText, imageWidth);\n        }\n        if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {\n          _this5.domNodes.additionalHtml = document.createElement('div');\n          _this5.domNodes.additionalHtml.classList.add('sl-additional-html');\n          _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;\n          _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);\n        }\n      });\n    }\n  }, {\n    key: \"zoomPanElement\",\n    value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {\n      this.currentImage.style[this.transitionPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';\n    }\n  }, {\n    key: \"minMax\",\n    value: function minMax(value, min, max) {\n      return value < min ? min : value > max ? max : value;\n    }\n  }, {\n    key: \"setZoomData\",\n    value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {\n      this.currentImage.dataset.scale = initialScale;\n      this.currentImage.dataset.translateX = targetOffsetX;\n      this.currentImage.dataset.translateY = targetOffsetY;\n    }\n  }, {\n    key: \"hashchangeHandler\",\n    value: function hashchangeHandler() {\n      if (this.isOpen && this.hash === this.initialLocationHash) {\n        this.hashReseted = true;\n        this.close();\n      }\n    }\n  }, {\n    key: \"addEvents\",\n    value: function addEvents() {\n      var _this6 = this;\n      // resize/responsive\n      this.addEventListener(window, 'resize.' + this.eventNamespace, function (event) {\n        //this.adjustImage.bind(this)\n        if (_this6.isOpen) {\n          _this6.adjustImage();\n        }\n      });\n      this.addEventListener(this.domNodes.closeButton, ['click.' + this.eventNamespace, 'touchstart.' + this.eventNamespace], this.close.bind(this));\n      if (this.options.history) {\n        setTimeout(function () {\n          _this6.addEventListener(window, 'hashchange.' + _this6.eventNamespace, function (event) {\n            if (_this6.isOpen) {\n              _this6.hashchangeHandler();\n            }\n          });\n        }, 40);\n      }\n      this.addEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace, function (event) {\n        if (!event.currentTarget.tagName.match(/button/i)) {\n          return true;\n        }\n        event.preventDefault();\n        _this6.controlCoordinates.swipeDiff = 0;\n        _this6.loadImage(event.currentTarget.classList.contains('sl-next') ? 1 : -1);\n      });\n      if (this.options.scrollZoom) {\n        var scale = 1;\n        this.addEventListener(this.domNodes.image, ['mousewheel', 'DOMMouseScroll'], function (event) {\n          if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) {\n            return true;\n          }\n          if (_this6.controlCoordinates.containerHeight == 0) {\n            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;\n            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;\n            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;\n            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;\n            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;\n            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;\n            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);\n            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);\n          }\n          event.preventDefault();\n          var delta = event.delta || event.wheelDelta;\n          if (delta === undefined) {\n            //we are on firefox\n            delta = event.detail;\n          }\n          delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency\n\n          // apply zoom\n          scale += delta * _this6.options.scrollZoomFactor * scale;\n          scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));\n          _this6.controlCoordinates.targetScale = scale;\n          var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;\n          _this6.controlCoordinates.pinchOffsetX = event.pageX;\n          _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position\n\n          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;\n          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;\n          _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;\n          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);\n          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);\n          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + \"px\", _this6.controlCoordinates.targetOffsetY + \"px\", _this6.controlCoordinates.targetScale);\n          if (_this6.controlCoordinates.targetScale > 1) {\n            _this6.controlCoordinates.zoomed = true;\n            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {\n              _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);\n            }\n          } else {\n            if (_this6.controlCoordinates.initialScale === 1) {\n              _this6.controlCoordinates.zoomed = false;\n              if (_this6.domNodes.caption.style.display === 'none') {\n                _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);\n              }\n            }\n            _this6.controlCoordinates.initialPinchDistance = null;\n            _this6.controlCoordinates.capture = false;\n          }\n          _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;\n          _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;\n          _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;\n          _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;\n          _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);\n          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + \"px\", _this6.controlCoordinates.targetOffsetY + \"px\", _this6.controlCoordinates.targetScale);\n        });\n      }\n      this.addEventListener(this.domNodes.image, ['touchstart.' + this.eventNamespace, 'mousedown.' + this.eventNamespace], function (event) {\n        if (event.target.tagName === 'A' && event.type === 'touchstart') {\n          return true;\n        }\n        if (event.type === 'mousedown') {\n          event.preventDefault();\n          _this6.controlCoordinates.initialPointerOffsetX = event.clientX;\n          _this6.controlCoordinates.initialPointerOffsetY = event.clientY;\n          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;\n          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;\n          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;\n          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;\n          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;\n          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;\n          _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);\n          _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);\n          _this6.controlCoordinates.capture = true;\n        } else {\n          _this6.controlCoordinates.touchCount = event.touches.length;\n          _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;\n          _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;\n          _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;\n          _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;\n          _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;\n          _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;\n          _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;\n          _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;\n          if (_this6.controlCoordinates.touchCount === 1) /* Single touch */{\n              if (!_this6.controlCoordinates.doubleTapped) {\n                _this6.controlCoordinates.doubleTapped = true;\n                setTimeout(function () {\n                  _this6.controlCoordinates.doubleTapped = false;\n                }, 300);\n              } else {\n                _this6.currentImage.classList.add('sl-transition');\n                if (!_this6.controlCoordinates.zoomed) {\n                  _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;\n                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);\n                  _this6.zoomPanElement(0 + \"px\", 0 + \"px\", _this6.controlCoordinates.initialScale);\n                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {\n                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);\n                  }\n                  _this6.controlCoordinates.zoomed = true;\n                } else {\n                  _this6.controlCoordinates.initialScale = 1;\n                  _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);\n                  _this6.zoomPanElement(0 + \"px\", 0 + \"px\", _this6.controlCoordinates.initialScale);\n                  _this6.controlCoordinates.zoomed = false;\n                }\n                setTimeout(function () {\n                  if (_this6.currentImage) {\n                    _this6.currentImage.classList.remove('sl-transition');\n                  }\n                }, 200);\n                return false;\n              }\n              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);\n              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);\n            } else if (_this6.controlCoordinates.touchCount === 2) /* Pinch */{\n              _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;\n              _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;\n              _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);\n              _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);\n              _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;\n              _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;\n              _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));\n            }\n          _this6.controlCoordinates.capture = true;\n        }\n        if (_this6.controlCoordinates.mousedown) return true;\n        if (_this6.transitionCapable) {\n          _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);\n        }\n        _this6.controlCoordinates.mousedown = true;\n        _this6.controlCoordinates.swipeDiff = 0;\n        _this6.controlCoordinates.swipeYDiff = 0;\n        _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;\n        _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;\n        return false;\n      });\n      this.addEventListener(this.domNodes.image, ['touchmove.' + this.eventNamespace, 'mousemove.' + this.eventNamespace, 'MSPointerMove'], function (event) {\n        if (!_this6.controlCoordinates.mousedown) {\n          return true;\n        }\n        if (event.type === 'touchmove') {\n          if (_this6.controlCoordinates.capture === false) {\n            return false;\n          }\n          _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;\n          _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;\n          _this6.controlCoordinates.touchCount = event.touches.length;\n          _this6.controlCoordinates.touchmoveCount++;\n          if (_this6.controlCoordinates.touchCount > 1) /* Pinch */{\n              _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;\n              _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;\n              _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));\n              if (_this6.controlCoordinates.initialPinchDistance === null) {\n                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;\n              }\n              if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {\n                /* Initialize helpers */\n                _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);\n                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;\n                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;\n                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;\n                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);\n                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);\n                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + \"px\", _this6.controlCoordinates.targetOffsetY + \"px\", _this6.controlCoordinates.targetScale);\n                if (_this6.controlCoordinates.targetScale > 1) {\n                  _this6.controlCoordinates.zoomed = true;\n                  if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {\n                    _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);\n                  }\n                }\n                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;\n                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;\n                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;\n                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;\n              }\n            } else {\n            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;\n            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;\n            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;\n            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);\n            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);\n            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {\n              _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;\n              _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;\n            }\n            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {\n              _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;\n              _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;\n            }\n            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);\n            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + \"px\", _this6.controlCoordinates.targetOffsetY + \"px\", _this6.controlCoordinates.targetScale);\n          }\n        }\n\n        /* Mouse Move implementation */\n        if (event.type === 'mousemove' && _this6.controlCoordinates.mousedown) {\n          if (event.type == 'touchmove') return true;\n          event.preventDefault();\n          if (_this6.controlCoordinates.capture === false) return false;\n          _this6.controlCoordinates.pointerOffsetX = event.clientX;\n          _this6.controlCoordinates.pointerOffsetY = event.clientY;\n          _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;\n          _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;\n          _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;\n          _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);\n          _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);\n          if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {\n            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;\n            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;\n          }\n          if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {\n            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;\n            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;\n          }\n          _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);\n          _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + \"px\", _this6.controlCoordinates.targetOffsetY + \"px\", _this6.controlCoordinates.targetScale);\n        }\n        if (!_this6.controlCoordinates.zoomed) {\n          _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;\n          _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;\n          _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;\n          _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;\n          if (_this6.options.animationSlide) {\n            _this6.slide(0, -_this6.controlCoordinates.swipeDiff + 'px');\n          }\n        }\n      });\n      this.addEventListener(this.domNodes.image, ['touchend.' + this.eventNamespace, 'mouseup.' + this.eventNamespace, 'touchcancel.' + this.eventNamespace, 'mouseleave.' + this.eventNamespace, 'pointerup', 'pointercancel', 'MSPointerUp', 'MSPointerCancel'], function (event) {\n        if (_this6.isTouchDevice && event.type === 'touchend') {\n          _this6.controlCoordinates.touchCount = event.touches.length;\n          if (_this6.controlCoordinates.touchCount === 0) /* No touch */{\n              /* Set attributes */\n              if (_this6.currentImage) {\n                _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);\n              }\n              if (_this6.controlCoordinates.initialScale === 1) {\n                _this6.controlCoordinates.zoomed = false;\n                if (_this6.domNodes.caption.style.display === 'none') {\n                  _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);\n                }\n              }\n              _this6.controlCoordinates.initialPinchDistance = null;\n              _this6.controlCoordinates.capture = false;\n            } else if (_this6.controlCoordinates.touchCount === 1) /* Single touch */{\n              _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;\n              _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;\n            } else if (_this6.controlCoordinates.touchCount > 1) /* Pinch */{\n              _this6.controlCoordinates.initialPinchDistance = null;\n            }\n        }\n        if (_this6.controlCoordinates.mousedown) {\n          _this6.controlCoordinates.mousedown = false;\n          var possibleDir = true;\n          if (!_this6.options.loop) {\n            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) {\n              possibleDir = false;\n            }\n            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) {\n              possibleDir = false;\n            }\n          }\n          if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) {\n            _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);\n          } else if (_this6.options.animationSlide) {\n            _this6.slide(_this6.options.animationSpeed / 1000, 0 + 'px');\n          }\n          if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) {\n            _this6.close();\n          }\n        }\n      });\n      this.addEventListener(this.domNodes.image, ['dblclick'], function (event) {\n        if (_this6.isTouchDevice) return;\n        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;\n        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;\n        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;\n        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;\n        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;\n        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;\n        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;\n        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;\n        _this6.currentImage.classList.add('sl-transition');\n        if (!_this6.controlCoordinates.zoomed) {\n          _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;\n          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);\n          _this6.zoomPanElement(0 + \"px\", 0 + \"px\", _this6.controlCoordinates.initialScale);\n          if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') {\n            _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);\n          }\n          _this6.controlCoordinates.zoomed = true;\n        } else {\n          _this6.controlCoordinates.initialScale = 1;\n          _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);\n          _this6.zoomPanElement(0 + \"px\", 0 + \"px\", _this6.controlCoordinates.initialScale);\n          _this6.controlCoordinates.zoomed = false;\n          if (_this6.domNodes.caption.style.display === 'none') {\n            _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);\n          }\n        }\n        setTimeout(function () {\n          if (_this6.currentImage) {\n            _this6.currentImage.classList.remove('sl-transition');\n            _this6.currentImage.style[_this6.transitionPrefix + 'transform-origin'] = null;\n          }\n        }, 200);\n        _this6.controlCoordinates.capture = true;\n        return false;\n      });\n    }\n  }, {\n    key: \"getDimensions\",\n    value: function getDimensions(element) {\n      var styles = window.getComputedStyle(element),\n        height = element.offsetHeight,\n        width = element.offsetWidth,\n        borderTopWidth = parseFloat(styles.borderTopWidth),\n        borderBottomWidth = parseFloat(styles.borderBottomWidth),\n        paddingTop = parseFloat(styles.paddingTop),\n        paddingBottom = parseFloat(styles.paddingBottom),\n        borderLeftWidth = parseFloat(styles.borderLeftWidth),\n        borderRightWidth = parseFloat(styles.borderRightWidth),\n        paddingLeft = parseFloat(styles.paddingLeft),\n        paddingRight = parseFloat(styles.paddingRight);\n      return {\n        height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,\n        width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight\n      };\n    }\n  }, {\n    key: \"updateHash\",\n    value: function updateHash() {\n      var newHash = 'pid=' + (this.currentImageIndex + 1),\n        newURL = window.location.href.split('#')[0] + '#' + newHash;\n      this.hashReseted = false;\n      if (this.pushStateSupport) {\n        window.history[this.historyHasChanges ? 'replaceState' : 'pushState']('', document.title, newURL);\n      } else {\n        // what is the browser target of this?\n        if (this.historyHasChanges) {\n          window.location.replace(newURL);\n        } else {\n          window.location.hash = newHash;\n        }\n      }\n      if (!this.historyHasChanges) {\n        this.urlChangedOnce = true;\n      }\n      this.historyHasChanges = true;\n    }\n  }, {\n    key: \"resetHash\",\n    value: function resetHash() {\n      this.hashReseted = true;\n      if (this.urlChangedOnce) {\n        history.back();\n      } else {\n        if (this.pushStateSupport) {\n          history.pushState('', document.title, window.location.pathname + window.location.search);\n        } else {\n          window.location.hash = '';\n        }\n      }\n      //\n      //in case an history operation is still pending\n      clearTimeout(this.historyUpdateTimeout);\n    }\n  }, {\n    key: \"updateURL\",\n    value: function updateURL() {\n      clearTimeout(this.historyUpdateTimeout);\n      if (!this.historyHasChanges) {\n        this.updateHash(); // first time\n      } else {\n        this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);\n      }\n    }\n  }, {\n    key: \"setCaption\",\n    value: function setCaption(captionText, imageWidth) {\n      var _this7 = this;\n      if (this.options.captions && captionText && captionText !== '' && typeof captionText !== \"undefined\") {\n        this.hide(this.domNodes.caption);\n        this.domNodes.caption.style.width = imageWidth + 'px';\n        this.domNodes.caption.innerHTML = captionText;\n        this.domNodes.image.appendChild(this.domNodes.caption);\n        setTimeout(function () {\n          _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);\n        }, this.options.captionDelay);\n      }\n    }\n  }, {\n    key: \"slide\",\n    value: function slide(speed, pos) {\n      if (!this.transitionCapable) {\n        return this.domNodes.image.style.left = pos;\n      }\n      this.domNodes.image.style[this.transitionPrefix + 'transform'] = 'translateX(' + pos + ')';\n      this.domNodes.image.style[this.transitionPrefix + 'transition'] = this.transitionPrefix + 'transform ' + speed + 's linear';\n    }\n  }, {\n    key: \"getRelated\",\n    value: function getRelated(rel) {\n      var elems;\n      if (rel && rel !== false && rel !== 'nofollow') {\n        elems = Array.from(this.elements).filter(function (element) {\n          return element.getAttribute('rel') === rel;\n        });\n      } else {\n        elems = this.elements;\n      }\n      return elems;\n    }\n  }, {\n    key: \"openImage\",\n    value: function openImage(element) {\n      var _this8 = this;\n      element.dispatchEvent(new Event('show.' + this.eventNamespace));\n      if (this.options.disableScroll) {\n        this.globalScrollbarWidth = this.toggleScrollbar('hide');\n      }\n      if (this.options.htmlClass && this.options.htmlClass !== '') {\n        document.querySelector('html').classList.add(this.options.htmlClass);\n      }\n      document.body.appendChild(this.domNodes.wrapper);\n      this.domNodes.wrapper.appendChild(this.domNodes.image);\n      if (this.options.overlay) {\n        document.body.appendChild(this.domNodes.overlay);\n      }\n      this.relatedElements = this.getRelated(element.rel);\n      if (this.options.showCounter) {\n        if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) {\n          this.domNodes.wrapper.removeChild(this.domNodes.counter);\n        } else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) {\n          this.domNodes.wrapper.appendChild(this.domNodes.counter);\n        }\n      }\n      this.isAnimating = true;\n      this.currentImageIndex = this.relatedElements.indexOf(element);\n      var targetURL = element.getAttribute(this.options.sourceAttr);\n      this.currentImage = document.createElement('img');\n      this.currentImage.style.display = 'none';\n      this.currentImage.setAttribute('src', targetURL);\n      this.currentImage.dataset.scale = 1;\n      this.currentImage.dataset.translateX = 0;\n      this.currentImage.dataset.translateY = 0;\n      if (this.loadedImages.indexOf(targetURL) === -1) {\n        this.loadedImages.push(targetURL);\n      }\n      this.domNodes.image.innerHTML = '';\n      this.domNodes.image.setAttribute('style', '');\n      this.domNodes.image.appendChild(this.currentImage);\n      this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);\n      this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed);\n      this.show(this.domNodes.spinner);\n      this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;\n      this.domNodes.counter.querySelector('.sl-total').innerHTML = this.relatedElements.length;\n      this.adjustImage();\n      if (this.options.preloading) {\n        this.preload();\n      }\n      setTimeout(function () {\n        element.dispatchEvent(new Event('shown.' + _this8.eventNamespace));\n      }, this.options.animationSpeed);\n    }\n  }, {\n    key: \"forceFocus\",\n    value: function forceFocus() {\n      var _this9 = this;\n      this.removeEventListener(document, 'focusin.' + this.eventNamespace);\n      this.addEventListener(document, 'focusin.' + this.eventNamespace, function (event) {\n        if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) {\n          _this9.domNodes.wrapper.focus();\n        }\n      });\n    }\n\n    // utility\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(elements, events, callback, opts) {\n      elements = this.wrap(elements);\n      events = this.wrap(events);\n      var _iterator = _createForOfIteratorHelper(elements),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var element = _step.value;\n          if (!element.namespaces) {\n            element.namespaces = {};\n          } // save the namespaces addEventListener the DOM element itself\n          var _iterator2 = _createForOfIteratorHelper(events),\n            _step2;\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              var event = _step2.value;\n              var options = opts || false;\n              var needsPassiveFix = ['touchstart', 'touchmove', 'mousewheel', 'DOMMouseScroll'].indexOf(event.split('.')[0]) >= 0;\n              if (needsPassiveFix && this.isPassiveEventsSupported) {\n                if (_typeof(options) === 'object') {\n                  options.passive = true;\n                } else {\n                  options = {\n                    passive: true\n                  };\n                }\n              }\n              element.namespaces[event] = callback;\n              element.addEventListener(event.split('.')[0], callback, options);\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(elements, events) {\n      elements = this.wrap(elements);\n      events = this.wrap(events);\n      var _iterator3 = _createForOfIteratorHelper(elements),\n        _step3;\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var element = _step3.value;\n          var _iterator4 = _createForOfIteratorHelper(events),\n            _step4;\n          try {\n            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n              var event = _step4.value;\n              if (element.namespaces && element.namespaces[event]) {\n                element.removeEventListener(event.split('.')[0], element.namespaces[event]);\n                delete element.namespaces[event];\n              }\n            }\n          } catch (err) {\n            _iterator4.e(err);\n          } finally {\n            _iterator4.f();\n          }\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n    }\n  }, {\n    key: \"fadeOut\",\n    value: function fadeOut(elements, duration, callback) {\n      var _this10 = this;\n      elements = this.wrap(elements);\n      var _iterator5 = _createForOfIteratorHelper(elements),\n        _step5;\n      try {\n        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n          var element = _step5.value;\n          element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue(\"opacity\");\n        }\n      } catch (err) {\n        _iterator5.e(err);\n      } finally {\n        _iterator5.f();\n      }\n      this.isFadeIn = false;\n      var step = 16.66666 / (duration || this.options.fadeSpeed),\n        fade = function fade() {\n          var currentOpacity = parseFloat(elements[0].style.opacity);\n          if ((currentOpacity -= step) < 0) {\n            var _iterator6 = _createForOfIteratorHelper(elements),\n              _step6;\n            try {\n              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n                var element = _step6.value;\n                element.style.display = \"none\";\n                // element.style.opacity = '';\n                element.style.opacity = 1;\n              }\n            } catch (err) {\n              _iterator6.e(err);\n            } finally {\n              _iterator6.f();\n            }\n            callback && callback.call(_this10, elements);\n          } else {\n            var _iterator7 = _createForOfIteratorHelper(elements),\n              _step7;\n            try {\n              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n                var _element = _step7.value;\n                _element.style.opacity = currentOpacity;\n              }\n            } catch (err) {\n              _iterator7.e(err);\n            } finally {\n              _iterator7.f();\n            }\n            requestAnimationFrame(fade);\n          }\n        };\n      fade();\n    }\n  }, {\n    key: \"fadeIn\",\n    value: function fadeIn(elements, duration, callback, display) {\n      var _this11 = this;\n      elements = this.wrap(elements);\n      var _iterator8 = _createForOfIteratorHelper(elements),\n        _step8;\n      try {\n        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n          var element = _step8.value;\n          element.style.opacity = 0;\n          element.style.display = display || \"block\";\n        }\n      } catch (err) {\n        _iterator8.e(err);\n      } finally {\n        _iterator8.f();\n      }\n      this.isFadeIn = true;\n      var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1),\n        step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed),\n        fade = function fade() {\n          var currentOpacity = parseFloat(elements[0].style.opacity);\n          if (!((currentOpacity += step) > opacityTarget)) {\n            var _iterator9 = _createForOfIteratorHelper(elements),\n              _step9;\n            try {\n              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {\n                var element = _step9.value;\n                element.style.opacity = currentOpacity;\n              }\n            } catch (err) {\n              _iterator9.e(err);\n            } finally {\n              _iterator9.f();\n            }\n            if (!_this11.isFadeIn) return;\n            requestAnimationFrame(fade);\n          } else {\n            var _iterator10 = _createForOfIteratorHelper(elements),\n              _step10;\n            try {\n              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {\n                var _element2 = _step10.value;\n                _element2.style.opacity = opacityTarget;\n              }\n            } catch (err) {\n              _iterator10.e(err);\n            } finally {\n              _iterator10.f();\n            }\n            callback && callback.call(_this11, elements);\n          }\n        };\n      fade();\n    }\n  }, {\n    key: \"hide\",\n    value: function hide(elements) {\n      elements = this.wrap(elements);\n      var _iterator11 = _createForOfIteratorHelper(elements),\n        _step11;\n      try {\n        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {\n          var element = _step11.value;\n          if (element.style.display != 'none') {\n            element.dataset.initialDisplay = element.style.display;\n          }\n          element.style.display = 'none';\n        }\n      } catch (err) {\n        _iterator11.e(err);\n      } finally {\n        _iterator11.f();\n      }\n    }\n  }, {\n    key: \"show\",\n    value: function show(elements, display) {\n      elements = this.wrap(elements);\n      var _iterator12 = _createForOfIteratorHelper(elements),\n        _step12;\n      try {\n        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {\n          var element = _step12.value;\n          element.style.display = element.dataset.initialDisplay || display || 'block';\n        }\n      } catch (err) {\n        _iterator12.e(err);\n      } finally {\n        _iterator12.f();\n      }\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap(input) {\n      return typeof input[Symbol.iterator] === 'function' && typeof input !== 'string' ? input : [input];\n    }\n  }, {\n    key: \"on\",\n    value: function on(events, callback) {\n      events = this.wrap(events);\n      var _iterator13 = _createForOfIteratorHelper(this.elements),\n        _step13;\n      try {\n        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {\n          var element = _step13.value;\n          if (!element.fullyNamespacedEvents) {\n            element.fullyNamespacedEvents = {};\n          }\n          var _iterator14 = _createForOfIteratorHelper(events),\n            _step14;\n          try {\n            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {\n              var event = _step14.value;\n              element.fullyNamespacedEvents[event] = callback;\n              element.addEventListener(event, callback);\n            }\n          } catch (err) {\n            _iterator14.e(err);\n          } finally {\n            _iterator14.f();\n          }\n        }\n      } catch (err) {\n        _iterator13.e(err);\n      } finally {\n        _iterator13.f();\n      }\n      return this;\n    }\n  }, {\n    key: \"off\",\n    value: function off(events) {\n      events = this.wrap(events);\n      var _iterator15 = _createForOfIteratorHelper(this.elements),\n        _step15;\n      try {\n        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {\n          var element = _step15.value;\n          var _iterator16 = _createForOfIteratorHelper(events),\n            _step16;\n          try {\n            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {\n              var event = _step16.value;\n              if (typeof element.fullyNamespacedEvents !== 'undefined' && event in element.fullyNamespacedEvents) {\n                element.removeEventListener(event, element.fullyNamespacedEvents[event]);\n              }\n            }\n          } catch (err) {\n            _iterator16.e(err);\n          } finally {\n            _iterator16.f();\n          }\n        }\n      } catch (err) {\n        _iterator15.e(err);\n      } finally {\n        _iterator15.f();\n      }\n      return this;\n    }\n\n    // api\n  }, {\n    key: \"open\",\n    value: function open(elem) {\n      elem = elem || this.elements[0];\n      if (typeof jQuery !== \"undefined\" && elem instanceof jQuery) {\n        elem = elem.get(0);\n      }\n      this.initialImageIndex = this.elements.indexOf(elem);\n      if (this.initialImageIndex > -1) {\n        this.openImage(elem);\n      }\n    }\n  }, {\n    key: \"next\",\n    value: function next() {\n      this.loadImage(1);\n    }\n  }, {\n    key: \"prev\",\n    value: function prev() {\n      this.loadImage(-1);\n    }\n\n    // get some useful data\n  }, {\n    key: \"getLighboxData\",\n    value: function getLighboxData() {\n      return {\n        currentImageIndex: this.currentImageIndex,\n        currentImage: this.currentImage,\n        globalScrollbarWidth: this.globalScrollbarWidth\n      };\n    }\n\n    //close is exposed anyways..\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      //remove all custom event listeners from elements\n      this.off(['close.' + this.eventNamespace, 'closed.' + this.eventNamespace, 'nextImageLoaded.' + this.eventNamespace, 'prevImageLoaded.' + this.eventNamespace, 'change.' + this.eventNamespace, 'nextDone.' + this.eventNamespace, 'prevDone.' + this.eventNamespace, 'error.' + this.eventNamespace, 'changed.' + this.eventNamespace, 'next.' + this.eventNamespace, 'prev.' + this.eventNamespace, 'show.' + this.eventNamespace, 'shown.' + this.eventNamespace]);\n      this.removeEventListener(this.elements, 'click.' + this.eventNamespace);\n      this.removeEventListener(document, 'focusin.' + this.eventNamespace);\n      this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace);\n      this.removeEventListener(document.body, 'keyup.' + this.eventNamespace);\n      this.removeEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace);\n      this.removeEventListener(this.domNodes.closeButton, 'click.' + this.eventNamespace);\n      this.removeEventListener(window, 'resize.' + this.eventNamespace);\n      this.removeEventListener(window, 'hashchange.' + this.eventNamespace);\n      this.close();\n      if (this.isOpen) {\n        document.body.removeChild(this.domNodes.wrapper);\n        document.body.removeChild(this.domNodes.overlay);\n      }\n      this.elements = null;\n    }\n  }, {\n    key: \"refresh\",\n    value: function refresh() {\n      if (!this.initialSelector) {\n        throw 'refreshing only works when you initialize using a selector!';\n      }\n      var options = this.options,\n        selector = this.initialSelector;\n      this.destroy();\n      this.constructor(selector, options);\n      return this;\n    }\n  }]);\n  return SimpleLightbox;\n}();\nvar _default = SimpleLightbox;\nexports[\"default\"] = _default;\n__webpack_require__.g.SimpleLightbox = SimpleLightbox;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/simplelightbox/dist/simple-lightbox.modules.js?");
        /***/ },
        /***/ "./node_modules/simplelightbox/dist/simple-lightbox.css": /*!**************************************************************!*\
  !*** ./node_modules/simplelightbox/dist/simple-lightbox.css ***!
  \**************************************************************/ /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_loader_dist_cjs_js_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js!./simple-lightbox.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/simplelightbox/dist/simple-lightbox.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/simplelightbox/dist/simple-lightbox.css?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/ /***/ function(module) {
            eval('\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js": /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/ /***/ function(module) {
            eval('\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/insertBySelector.js?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js": /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/ /***/ function(module) {
            eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/insertStyleElement.js?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js": /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/ /***/ function(module, __unused_webpack_exports, __webpack_require__) {
            eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js": /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/ /***/ function(module) {
            eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/styleDomAPI.js?');
        /***/ },
        /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js": /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/ /***/ function(module) {
            eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://goit-js-hw-08/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
        /***/ },
        /***/ "./src/js/01-gallery.js": /*!******************************!*\
  !*** ./src/js/01-gallery.js ***!
  \******************************/ /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-items.js */ "./src/js/gallery-items.js");\n/* harmony import */ var simplelightbox_dist_simple_lightbox_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplelightbox/dist/simple-lightbox.css */ "./node_modules/simplelightbox/dist/simple-lightbox.css");\n/* harmony import */ var simplelightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simplelightbox */ "./node_modules/simplelightbox/dist/simple-lightbox.modules.js");\n\r\nconsole.log(_gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.galleryItems);\r\n\r\n\r\n\r\n\r\nconsole.log(simplelightbox__WEBPACK_IMPORTED_MODULE_2__["default"]);\r\n// Change code below this line\r\n\r\n// Defining DOM elements\r\n\r\nconst gallery = document.querySelector(".gallery");\r\n\r\n// creating gallery items and images\r\nfunction createGallery() {\r\n  for (const image in _gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.galleryItems) {\r\n    // creating gallery elements\r\n    const photo = document.createElement("img");\r\n    const galleryItem = document.createElement("a");\r\n\r\n    galleryItem.classList.add("gallery__item");\r\n\r\n    // appending galleryItem to gallery and galleryImage to galleryItem\r\n    gallery.appendChild(galleryItem);\r\n    galleryItem.appendChild(photo);\r\n\r\n    // setting classes and attributes to each photo\r\n    photo.classList.add("gallery__image");\r\n    photo.setAttribute(`src`, `${_gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.galleryItems[image].preview}`);\r\n    photo.setAttribute("alt", `${_gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.galleryItems[image].description}`);\r\n    galleryItem.setAttribute(`href`, `${_gallery_items_js__WEBPACK_IMPORTED_MODULE_0__.galleryItems[image].original}`);\r\n  }\r\n}\r\n\r\n// calling functions\r\ncreateGallery();\r\n\r\n// creating slideshow form gallery\'s elements\r\nvar lightbox = new simplelightbox__WEBPACK_IMPORTED_MODULE_2__["default"](".gallery a", {});\r\n\r\n// calling modal with original image\'s size\r\ngallery.addEventListener(`click`, (event) => {\r\n  if (event.target.tagName.toLowerCase() !== "a") {\r\n    return;\r\n  }\r\n  // find object in \'galleryItems\' array by preview\'s src, then get that object\'s \'original\' value\r\n  const originalImage = event.target.getAttribute("href");\r\n\r\n  // show modal\r\n  lightbox.open();\r\n});\r\n\n\n//# sourceURL=webpack://goit-js-hw-08/./src/js/01-gallery.js?');
        /***/ },
        /***/ "./src/js/gallery-items.js": /*!*********************************!*\
  !*** ./src/js/gallery-items.js ***!
  \*********************************/ /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"galleryItems\": function() { return /* binding */ galleryItems; }\n/* harmony export */ });\nconst galleryItems = [\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',\n    description: 'Hokkaido Flower',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',\n    description: 'Container Haulage Freight',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',\n    description: 'Aerial Beach View',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',\n    description: 'Flower Blooms',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',\n    description: 'Alpine Mountains',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',\n    description: 'Mountain Lake Sailing',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',\n    description: 'Alpine Spring Meadows',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',\n    description: 'Nature Landscape',\n  },\n  {\n    preview:\n      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',\n    original:\n      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',\n    description: 'Lighthouse Coast Sea',\n  },\n];\n\n\n//# sourceURL=webpack://goit-js-hw-08/./src/js/gallery-items.js?");
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
            /******/ id: moduleId,
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
    /******/ /******/ /* webpack/runtime/nonce */ /******/ !function() {
        /******/ __webpack_require__.nc = undefined;
    /******/ }();
    /******/ /************************************************************************/ /******/ /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module can't be inlined because the eval devtool is used.
    /******/ __webpack_require__("./src/js/01-gallery.js");
    /******/ var __webpack_exports__ = __webpack_require__("./node_modules/simplelightbox/dist/simple-lightbox.css");
/******/ /******/ })();

},{}]},["1sQTh","1S0LG"], "1S0LG", "parcelRequire4c75")

//# sourceMappingURL=01-gallery.28b43046.js.map
