!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t,n){"use strict";document.body;var o=document.getElementById("btnTellMeMore"),s=document.getElementById("btnAboutme"),a=document.getElementById("btnServices"),i=document.getElementById("btnBadges"),c=document.getElementById("btnContactMe"),r=document.getElementById("btnScrollToTop");function l(e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"})}o.addEventListener("click",(function(e){l("about-section"),e.stopPropagation()})),s.addEventListener("click",(function(e){l("about-section"),e.stopPropagation()})),a.addEventListener("click",(function(e){l("services-section"),e.stopPropagation()})),i.addEventListener("click",(function(e){l("badges-section"),e.stopPropagation()})),c.addEventListener("click",(function(e){l("contact-section"),e.stopPropagation()})),r.addEventListener("click",(function(e){l("body")})),r.addEventListener("touchend",(function(e){l("body")}))},function(e,t,n){"use strict";var o=document.getElementById("main-nav"),s=document.getElementById("nav-list"),a=document.createElement("div");a.classList.add("nav-mobile"),o.querySelector(".container").appendChild(a),window.addEventListener("scroll",(function(e){window.pageYOffset>40?(o.classList.remove("navbar-custom"),o.classList.contains("transToWhiteBg")||o.classList.add("transToWhiteBg"),o.classList.remove("whiteToTransBg")):(o.classList.add("navbar-custom"),o.classList.contains("transToWhiteBg")&&!o.classList.contains("whiteToTransBg")&&o.classList.add("whiteToTransBg"),o.classList.remove("transToWhiteBg"))})),a.addEventListener("click",(function(e){s.classList.contains("nav-mobile-open")?s.classList.remove("nav-mobile-open"):s.classList.add("nav-mobile-open")}))},function(e,t,n){"use strict";var o,s,a,i,c;document.getElementById("proYears").innerText=(o=2011,s=5,a=new Date,i=s+a.getMonth(),c=12*(a.getFullYear()-o),Math.floor((c-i)/12)).toString()},function(e,t,n){"use strict";var o=document.getElementById("contactForm"),s=document.getElementById("btnContactForm"),a=document.getElementById("formSubmitResponse");s.addEventListener("click",(function(e){if(o.checkValidity()){var t=new FormData(o);t.append("submit","true"),fetch("contact.php",{method:"POST",body:t,headers:{Accept:"text/html"}}).then((function(e){200===e.status?e.text().then((function(e){o.reset(),a.classList.remove("alert","alert-danger"),a.classList.add("my-3","alert","alert-success"),a.innerText="Message successfully sent. Thank you!"})):(a.classList.remove("alert","alert-success"),a.classList.add("my-3","alert","alert-danger"),a.innerText="Something when wrong while sending the message!")}))}else a.classList.remove("alert","alert-success"),a.classList.add("my-3","alert","alert-danger"),a.innerText="Please fill in all fields and a valid email address."}))}]);