/** 
 * undefined v0.1.0
 * Copyright 2019 Mardix mcx2082@gmail.com
 * License: MIT
 * https://github.com/mardix/restated#readme
 * Build date: 4/29/2019, 12:01:18 AM
 * 
 */
const e=(e,t)=>e&&"function"==typeof e[t],t=(e,t)=>{let r=null,n=void 0,o=void 0;return c=>{const l=c.___target___?{...c.___target___}:{...c};r&&((e,t)=>JSON.stringify(e)===JSON.stringify(t))(r,l)||(o=t(r=l)),n!==o&&(n=o,c[e]=o)}},r=(e,t)=>(t&&t.toString&&(e&&(e+="."),e+=t.toString()),e),n=Symbol("ProxyTarget");var o=(e,t)=>{let o=!1,c=!1;const l=new WeakMap,f=new WeakMap,i=(e,n,l,f)=>{o?c||(c=!0):t.call(u,r(e,n),f,l)},s=(e,t)=>{const r=l.get(e);r&&r.delete(t)},_={get(e,t,o){if("___target___"===t)return e;if(t===n)return e;const c=Reflect.get(e,t,o);if((e=>null===e||"object"!=typeof e&&"function"!=typeof e)(c)||"constructor"===t)return c;const i=((e,t)=>{let r=l.get(e);if(r)return r;r=new Map,l.set(e,r);let n=r.get(t);return n||(n=Reflect.getOwnPropertyDescriptor(e,t),r.set(t,n)),n})(e,t);if(i&&!i.configurable){if(i.set&&!i.get)return;if(!1===i.writable)return c}return f.set(c,r(f.get(e),t)),new Proxy(c,_)},set(e,t,r,o){r&&void 0!==r[n]&&(r=r[n]);const c=Reflect.get(e,t,o),l=Reflect.set(e,t,r);return c!==r&&i(f.get(e),t,c,r),l},defineProperty(e,t,r){const n=Reflect.defineProperty(e,t,r);return s(e,t),i(f.get(e),t,void 0,r.value),n},deleteProperty(e,t){const r=Reflect.get(e,t),n=Reflect.deleteProperty(e,t);return s(e,t),i(f.get(e),t,r),n},apply(e,r,n){if(!o){o=!0;const l=Reflect.apply(e,r,n);return c&&t(),o=!1,c=!1,l}return Reflect.apply(e,r,n)}};f.set(e,"");const u=new Proxy(e,_);return u};export default function(r={},n={}){const c=[],l=Object.keys(r).filter(t=>!e(r,t)).reduce((e,t)=>({...e,[t]:r[t]}),{}),f=Object.keys(r).filter(t=>e(r,t)).map(e=>t(e,r[e])),i=Object.keys(n).filter(t=>e(n,t)).reduce((e,t)=>({...e,[t]:(...e)=>(n[t].call(this,s,...e),i)}),{});let s=o(l,()=>{f.forEach(e=>e(s)),c.forEach(e=>e(s.___target___))});return f.forEach(e=>e(s)),{...i,getState:()=>s.___target___,subscribe:e=>(c.push(e),()=>c.splice(c.indexOf(e),1))}}
