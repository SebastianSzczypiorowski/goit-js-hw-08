!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire4c75;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire4c75=a);var o=a("1WSnx"),l=document.querySelector(".feedback-form"),i="feedback-form-state";window.addEventListener("load",(function(){Array.from(l.elements).forEach((function(e){var t=JSON.parse(localStorage.getItem(i));"email"===e.name?e.value=t.email||"":"message"===e.name&&(e.value=t.message||"")}))}));var f={};l.addEventListener("input",e(o).throttle((function(e){e.preventDefault(),Array.from(l.elements).forEach((function(e){var t=l.elements,n=t.email,r=t.message;f={email:n.value,message:r.value},localStorage.setItem(i,JSON.stringify(f))}))})),500),l.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(i));console.log(t),localStorage.clear(),l.reset()}))}();
//# sourceMappingURL=03-feedback.3f4a66b0.js.map
