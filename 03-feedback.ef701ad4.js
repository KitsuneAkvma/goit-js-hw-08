var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,f,u,l=0,c=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(j,t),c?b(e):a}function w(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=r}function j(){var e=m();if(w(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return g?d(n,r-(e-l)):n}(e))}function O(e){return f=void 0,y&&o?b(e):(o=i=void 0,a)}function h(){var e=m(),n=w(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(j,t),b(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,r=(g="maxWait"in n)?s(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=i=f=void 0},h.flush=function(){return void 0===f?a:O(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector("[name = email]"),b=document.querySelector("[name = message]"),S=document.querySelector("[type = submit]");let w={email:"",message:""};window.addEventListener("load",(()=>{localStorage.getItem("fefeedback-form-state")&&(w=JSON.parse(localStorage["feedback-form-state"]),y.value=w.email,b.value=w.message)})),y.addEventListener("input",t((()=>{w.email=y.value,localStorage.setItem("feedback-form-state",JSON.stringify(w)),console.log(w)}),500)),b.addEventListener("input",t((()=>{w.message=b.value,localStorage.setItem("feedback-form-state",JSON.stringify(w)),console.log(w)}),500)),S.addEventListener("click",(()=>{w={email:"",message:""},localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.ef701ad4.js.map
