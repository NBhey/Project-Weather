(()=>{"use strict";var e,t,n,r,a={237:(e,t,n)=>{n.a(e,(async(e,t)=>{try{n(777);var r=n(641),a=n(661),o=n(771),c=n(482),i=n(39),s=n(192),p=e([r,i,s]);[r,i,s]=p.then?(await p)():p;const u=await(0,o.A)(await(0,a.A)());(0,c.A)(u),document.querySelector(".btn").addEventListener("click",(async e=>{e.preventDefault();let t=document.querySelector(".input").value.trim().toLowerCase();(0,i.A)(t),document.querySelector(".input").value=""})),t()}catch(e){t(e)}}),1)},106:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(601),a=n.n(r),o=n(314),c=n.n(o)()(a());c.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\na {\n  color: rgb(138, 124, 124);\n  text-decoration: none;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-image: url(https://github.com/NBhey/WeatherApp/blob/master/src/img/main.jpg?raw=true);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n}\n\n.main {\n  margin: 0 auto;\n  padding: 50px;\n  max-width: 100%;\n  backdrop-filter: blur(5px);\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(1, 500px);\n  grid-template-areas: "static router";\n}\n\n.main__city {\n  grid-area: static;\n  display: flex;\n\n  flex-direction: column;\n}\n\n.content__data-city {\n  align-self: center;\n  text-transform: capitalize;\n  width: 350px;\n}\n\n.content__request {\n  width: 305px;\n  padding: 12px 5px 12px 16px;\n  border-radius: 8px;\n  background-color: rgba(245, 244, 244, 0.4);\n}\n.content__request > input {\n  width: 200px;\n  height: 24px;\n  background-color: rgba(245, 244, 244, 0.4);\n  border: none;\n  border-radius: 3px;\n}\n.content__request > input:focus {\n  outline: 2px solid rgb(13, 44, 43);\n}\n.content__request > input::placeholder {\n  font-family: "Raleway";\n  font-size: 15px;\n  line-height: 24px;\n  color: rgba(112, 112, 112, 1);\n}\n.content__request > input::-webkit-search-cancel-button {\n  cursor: pointer;\n}\n.content__request > button {\n  border: none;\n  background-color: rgba(28, 28, 28, 0);\n  cursor: pointer;\n}\n\n#map {\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n  border: 2px solid #1cbcec;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 0px 10px 0px #000;\n  text-align: center;\n}\n',""]);const i=c},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&c[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},777:(e,t,n)=>{var r=n(72),a=n.n(r),o=n(825),c=n.n(o),i=n(659),s=n.n(i),p=n(56),u=n.n(p),d=n(540),l=n.n(d),m=n(113),h=n.n(m),f=n(106),y={};y.styleTagTransform=h(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=l(),a()(f.A,y),f.A&&f.A.locals&&f.A.locals},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],p=r.base?s[0]+r.base:s[0],u=o[p]||0,d="".concat(p," ").concat(u);o[p]=u+1;var l=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var h=a(m,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),p=0;p<o.length;p++){var u=n(o[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},39:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{A:()=>s});var a=n(771),o=n(192),c=e([o]);o=(c.then?(await c)():c)[0];let i=document.querySelector("img");async function s(e){const t=await(0,a.A)(e);document.querySelector(".city").textContent=`${t.name}`,document.querySelector(".temperature").textContent=`${t.main.temp} °C`,i=`http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,document.querySelector("#map").children[0].remove(),await(0,o.A)(t)}r()}catch(p){r(p)}}))},771:(e,t,n)=>{n.d(t,{A:()=>a});const r="fd185eec875c277bc16bccdb3629b6af";async function a(e){let t,n;if("object"==typeof e)t=e.latitude,n=e.longitude;else{const a=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=5&appid=${r}`),o=await a.json();t=o[0].lat,n=o[0].lon}const a=`https://ru.api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&lang=ru&appid=${r}&units=metric`,o=await fetch(a);return await o.json()}},661:(e,t,n)=>{async function r(){try{const e=await fetch("https://get.geojs.io/v1/ip/geo.json"),t=await e.json();return console.log(t),t}catch(e){console.log(err.message)}}n.d(t,{A:()=>r})},192:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{A:()=>i});var a=n(402),o=e([a]);let c;async function i(e){const{YMap:t,YMapDefaultSchemeLayer:n}=a;c=new t(document.getElementById("map"),{location:{center:[e.coord.lon,e.coord.lat],zoom:10}}),c.addChild(new n)}a=(o.then?(await o)():o)[0],r()}catch(s){r(s)}}))},641:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(981),a=e([r]);r=(a.then?(await a)():a)[0];const o={"#/":"home","#/map":"map"},c={home:e=>e.innerHTML="<h1>Contact us</h1>",map:r.Q};async function i(e){const t=o[e]||"home";await c[t](document.getElementById("root"))}window.addEventListener("hashchange",(()=>{i(window.location.hash)})),document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(async t=>{t.preventDefault();const n=e.getAttribute("href");history.pushState({},"",n),i(n)}))})),i(window.location.hash),t()}catch(s){t(s)}}))},981:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Q:()=>s});var a=n(192),o=n(771),c=n(661),i=e([a]);a=(i.then?(await i)():i)[0];const s=async e=>{e.innerHTML="<div id='map'></div>",await(0,a.A)(await(0,o.A)(await(0,c.A)()))};r()}catch(e){r(e)}}))},482:(e,t,n)=>{function r(e){const t=document.createElement("div");t.classList.add("content__data-city"),t.innerHTML=`\n    <h2 class="city">${e.name}</h2>\n    <p class="temperature">${Math.round(e.main.temp)} °C</p>\n    <img src="http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png">\n    `;const n=document.querySelector(".main__city"),r=document.querySelector(".content__request");n.insertBefore(t,r)}n.d(t,{A:()=>r})},402:e=>{e.exports=new Promise((e=>{if("undefined"!=typeof ymaps3)return ymaps3.ready.then((()=>e(ymaps3)));const t=document.createElement("script");t.src="https://api-maps.yandex.ru/v3/?apikey=fbf16afb-9832-4aeb-974c-6cb032ebaab5&lang=ru_RU",t.onload=()=>{ymaps3.ready.then((()=>e(ymaps3)))},document.head.appendChild(t)}))}},o={};function c(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return a[e](n,n.exports,c),n.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,o,c)=>{var i;c&&((i=[]).d=-1);var s,p,u,d=new Set,l=a.exports,m=new Promise(((e,t)=>{u=t,p=e}));m[t]=l,m[e]=e=>(i&&e(i),d.forEach(e),m.catch((e=>{}))),a.exports=m,o((a=>{var o;s=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var o=[];o.d=0,a.then((e=>{c[t]=e,r(o)}),(e=>{c[n]=e,r(o)}));var c={};return c[e]=e=>e(o),c}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var c=()=>s.map((e=>{if(e[n])throw e[n];return e[t]})),p=new Promise((t=>{(o=()=>t(c)).r=0;var n=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(o.r++,e.push(o)));s.map((t=>t[e](n)))}));return o.r?p:c()}),(e=>(e?u(m[n]=e):p(l),r(i)))),i&&i.d<0&&(i.d=0)},c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var n in t)c.o(t,n)&&!c.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.nc=void 0,c(237)})();