/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.a11y=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=492)}({1:function(t,e){!function(){t.exports=this.wp.i18n}()},275:function(t,e){!function(){t.exports=this.wp.domReady}()},492:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return p})),n.d(e,"speak",(function(){return d}));var r=n(275),i=n.n(r),o=n(1);function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");e.id="a11y-speak-".concat(t),e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");var n=document,r=n.body;return r&&r.appendChild(e),e}var u="";function p(){var t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){var t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=Object(o.__)("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");var e=document.body;e&&e.appendChild(t)}(),null===e&&a("assertive"),null===n&&a("polite")}function d(t,e){!function(){for(var t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text"),n=0;n<t.length;n++)t[n].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),u===t&&(t+=" "),u=t,t}(t);var n=document.getElementById("a11y-speak-intro-text"),r=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");r&&"assertive"===e?r.textContent=t:i&&(i.textContent=t),n&&n.removeAttribute("hidden")}i()(p)}});