function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var n=i("7Y9D8");const u=document.querySelector(".form");let{elements:{amount:l,delay:s,step:a}}=u;u.addEventListener("submit",(t=>{t.preventDefault();let o=Number(s.value),r=Number(a.value),i=Number(l.value),u=1;setTimeout((function t(){var d,f;(d=u,f=o,Math.random()>.3?Promise.resolve({position:d,delay:f}):Promise.reject({position:d,delay:f})).then((({position:t,delay:o})=>{e(n).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`,{timeout:3e3,useIcon:!1})})).catch((({position:t,delay:o})=>{e(n).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`,{timeout:3e3,useIcon:!1})})),u++,o+=r,u<=i?setTimeout(t,r):(o=Number(s.value),r=Number(a.value),i=Number(l.value),u=1)}),o)}));
//# sourceMappingURL=03-promises.b3e2591f.js.map
