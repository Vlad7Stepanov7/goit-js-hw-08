!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),button:document.querySelector("button")},r={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=d||s||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function y(e){return l=e,f=setTimeout(T,t),d?v(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,m&&r?v(e):(r=o=void 0,u)}function w(){var e=b(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return y(c);if(s)return f=setTimeout(T,t),v(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,S(n)&&(d=!!n.leading,a=(s="maxWait"in n)?p(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function S(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}r=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var O={email:"",message:""};!function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){var t=e.email,r=e.message;n.input.value=t,n.textarea.value=r,O.email=t,O.message=r}}(),n.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),O={email:"",message:""}})),n.form.addEventListener("input",r((function(e){e.preventDefault(),O[e.target.name]=e.target.value;var t=JSON.stringify(O);localStorage.setItem("feedback-form-state",t)}),500))}();
//# sourceMappingURL=03-feedback.67bb2422.js.map
