var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea"),button:document.querySelector("button")};var n={},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(x,t),l?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function x(){var e=p();if(j(e))return T(e);u=setTimeout(x,function(e){var n=t-(e-f);return s?d(n,i-(e-c)):n}(e))}function T(e){return u=void 0,v&&r?y(e):(r=o=void 0,a)}function h(){var e=p(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:T(p())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}n=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};let y={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:n,message:r}=e;t.input.value=n,t.textarea.value=r,y.email=n,y.message=r}}(),t.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset(),y={email:"",message:""}})),t.form.addEventListener("input",n((function(e){e.preventDefault(),y[e.target.name]=e.target.value;const t=JSON.stringify(y);localStorage.setItem("feedback-form-state",t)}),500));
//# sourceMappingURL=03-feedback.48d00d8f.js.map