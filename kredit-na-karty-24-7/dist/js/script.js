!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var s=()=>{const e=document.querySelector(".steps__wrapper"),t=e.querySelectorAll(".steps__item"),r=e.querySelectorAll(".item-wrapper"),s=e.querySelectorAll(".item-wrapper_sec");t.forEach((e,t)=>{e.addEventListener("click",e=>{r[t].classList.toggle("show"),s[t].classList.toggle("show")})})};var o=()=>{const e=document.querySelector(".progress__line"),t=document.querySelector("body");window.addEventListener("scroll",()=>{let r=window.pageYOffset/(t.scrollHeight-window.innerHeight)*100;e.style.width=r+"%"})};var n=()=>{const e=document.querySelectorAll(".questions__quest"),t=document.querySelectorAll(".questions__ans"),r=document.querySelectorAll(".questions__x");e.forEach((e,s)=>{e.addEventListener("click",e=>{t[s].classList.contains("question__ans_slide")?(t[s].classList.remove("question__ans_slide"),t[s].style.height=0,t[s].style.borderTop="none",r[s].classList.remove("hide")):(t[s].style.height=t[s].scrollHeight+"px",t[s].classList.add("question__ans_slide"),t[s].style.borderTop="1px solid black",r[s].classList.add("hide"))})})};var c=()=>{const e=document.querySelector(".hamburger"),t=e.querySelectorAll(".hamburger__item"),r=document.querySelector(".menu-mobile"),s=document.querySelector(".nav__wrapper");e.addEventListener("click",e=>{r.classList.contains("menu-mobile_active")?(document.body.style="overflow: auto;",r.classList.remove("menu-mobile_active"),s.classList.remove("nav__wrapper_active"),t[1].classList.remove("hide"),t[0].classList.remove("hamburger__item_left"),t[2].classList.remove("hamburger__item_right")):(r.classList.add("menu-mobile_active"),s.classList.add("nav__wrapper_active"),document.body.style="overflow: hidden;",t[1].classList.add("hide"),t[0].classList.add("hamburger__item_left"),t[2].classList.add("hamburger__item_right"))}),s.addEventListener("click",e=>{e.target.classList.contains("nav__wrapper_active")&&(document.body.style="overflow: auto;",r.classList.remove("menu-mobile_active"),s.classList.remove("nav__wrapper_active"),t[1].classList.remove("hide"),t[0].classList.remove("hamburger__item_left"),t[2].classList.remove("hamburger__item_right"))})};var l=()=>{const e=document.querySelector(".calculator__area_sum"),t=document.querySelectorAll(".btnEdit"),r=document.querySelector(".calculator__range"),s=document.querySelectorAll(".offer");function o(e,t){e.forEach(e=>{e.value=t}),n(t)}function n(e){s.forEach(t=>{Number(t.getAttribute("data-max"))<Number(e)&&!t.classList.contains("hide")?t.classList.add("hide"):Number(t.getAttribute("data-max"))>=Number(e)&&t.classList.contains("hide")&&t.classList.remove("hide")})}e.addEventListener("input",e=>{const t=e.target.value;e.target.value>500?(o([r],t),n(t)):(o(500),n(500))}),r.addEventListener("input",t=>{const r=t.target.value;e.value=r,n(r)}),t.forEach(t=>{t.addEventListener("click",t=>{let s=Number(e.value)+Number(t.target.value);s>0&&o([e,r],s)})})};var a=()=>{const e=document.querySelector(".btn_show-offers"),t=document.querySelectorAll("[data-hide]");t.forEach(e=>{e.classList.add("offer-hide")}),e.addEventListener("click",e=>{t.forEach(t=>{t.classList.add("animate__animated","animate__fadeIn"),t.classList.remove("offer-hide"),e.target.classList.add("hide")})})};var i=()=>{const e=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),t=document.documentElement,r=()=>{gtag("event","scroll",{event_category:"first_scroll",event_label:"first_scroll"}),document.removeEventListener("scroll",r)};document.addEventListener("scroll",r);let s=0,o=0,n=10;document.addEventListener("scroll",r=>{t.scrollTop>s&&(o=Math.round((t.scrollTop+t.clientHeight)/e*100),s=t.scrollTop,o>n&&(gtag("event","scroll",{event_category:"scroll_counter",event_label:n+"%"}),n+=10))});document.querySelector(".catalog").addEventListener("click",e=>{const t=e.target.classList;t.contains("btn_offer-request")&&gtag("event","click",{event_category:"click_offer",event_label:e.target.closest(".offer").getAttribute("data-name")}),t.contains("btn_show-offers")&&gtag("event","click",{event_category:"click_show_all",evenet_label:"show_all"})});const c=document.querySelector(".calculator");c.addEventListener("click",e=>{gtag("event","click",{event_category:"click_calculator",event_label:e.target.classList.value})});document.querySelector(".steps").addEventListener("click",e=>{const t=e.target;(t.classList.contains("steps__item")||t.closest(".steps__item"))&&gtag("event","click",{event_category:"click_steps",event_label:t.id||t.closest(".steps__item").id})});document.querySelector(".questions").addEventListener("click",e=>{const t=e.target.closest(".questions__wrapper");t&&document.querySelectorAll(".questions__wrapper").forEach((e,r)=>{t===e&&gtag("event","click",{event_category:"click_questions",event_label:++r})})}),c.addEventListener("mouseenter",e=>{gtag("event","mouse",{event_category:"calc_transform"})});document.querySelectorAll(".steps__item").forEach(e=>{e.addEventListener("mouseenter",e=>{gtag("event","mouse",{event_category:"steps_transform",event_label:e.target.id})})})};var d=()=>{const e=document.querySelector(".menu__item-lang"),t=document.querySelector(".choice-lang");e.addEventListener("mouseover",e=>{t.classList.remove("hide")}),e.addEventListener("mouseout",e=>{t.classList.add("hide")})};var u=()=>{document.querySelectorAll("a").forEach(e=>{e.href===document.location.href&&e.addEventListener("click",e=>{e.preventDefault()})})};(()=>{const e=document.querySelector(".header-wrapper");parseInt(getComputedStyle(e).getPropertyValue("height"),10);let t=0,r=0;function s(t,r,s){e.classList.add(t),e.classList.remove(r)}window.innerWidth<986&&window.addEventListener("scroll",o=>{let n=window.pageYOffset||document.documentElement.scrollTop;25==r&&(n>t?s("animate__slideOutUp","animate__slideInDown",n):e.classList.contains("animate__slideOutUp")&&s("animate__slideInDown","animate__slideOutUp",n),r=0),0==n&&e.classList.contains("animate__slideOutUp")&&(s("animate__slideInDown","animate__slideOutUp",n),console.log("scroll 0")),r++,t=n})})(),s(),o(),n(),c(),l(),a(),i(),d(),u()}]);