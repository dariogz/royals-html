(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(e,n){return function(t){if(Array.isArray(t))return t}(e)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(e,n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}const o=function(){function t(){n(this,t),this.siteNav=document.getElementsByClassName("site-nav"),this.hamburguerButton=document.getElementsByClassName("button-hamburger"),this.listen()}return i(t,[{key:"listen",value:function(){var t=this;this.hamburguerButton[0].addEventListener("click",(function(){t.siteNav[0].classList.toggle("site-nav--opened")}))}}]),t}();new(function(){function t(e){n(this,t),this.moduleMap=e,this.initModules()}return i(t,[{key:"initModules",value:function(){var t=this;this.modules={},Object.entries(this.moduleMap).forEach((function(n){var r=e(n,2),i=r[0],o=r[1];return t.modules[i]=new o}))}}]),t}())({menu:o})})();