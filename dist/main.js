(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){var c="function"==typeof Map?new Map:void 0;return e=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==c){if(c.has(t))return c.get(t);c.set(t,e)}function e(){return function(t,e,o){if(n())return Reflect.construct.apply(null,arguments);var c=[null];c.push.apply(c,e);var u=new(t.bind.apply(t,c));return o&&r(u,o.prototype),u}(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r(e,t)},e(t)}function n(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(n=function(){return!!t})()}function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}var c=function(e){function c(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c);var r=(e=function(e,r,c){return r=o(r),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(e,n()?Reflect.construct(r,c||[],o(e).constructor):r.apply(e,c))}(this,c)).attachShadow({mode:"closed"}),u=document.createElement("div");return u.innerHTML='<style>h1{color:#00f}</style> <div id="app"> <h1>¡Hola, Webpack!</h1> </div> ',r.appendChild(u),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}(c,e),u=c,Object.defineProperty(u,"prototype",{writable:!1}),u;var u}(e(HTMLElement));customElements.define("wc-prueba",c)})();