import{r as s}from"./index-CcqloXzJ.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),y=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,r)=>r?r.toUpperCase():a.toLowerCase()),c=t=>{const e=y(t);return e.charAt(0).toUpperCase()+e.slice(1)},l=(...t)=>t.filter((e,a,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===a).join(" ").trim(),f=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:d,...n},p)=>s.createElement("svg",{ref:p,...C,width:e,height:e,stroke:t,strokeWidth:r?Number(a)*24/Number(e):a,className:l("lucide",i),...!o&&!f(n)&&{"aria-hidden":"true"},...n},[...d.map(([u,h])=>s.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(t,e)=>{const a=s.forwardRef(({className:r,...i},o)=>s.createElement(g,{ref:o,iconNode:e,className:l(`lucide-${m(c(t))}`,`lucide-${t}`,r),...i}));return a.displayName=c(t),a},v={hidden:{opacity:0,height:0,transition:{duration:.3}},visible:{opacity:1,height:"auto",transition:{duration:.3,staggerChildren:.1,delayChildren:.1}}},A={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0}},b={scale:[1,1.05,1],transition:{duration:2,repeat:1/0,ease:"easeInOut"}},k={hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.08,delayChildren:.2}}},L={hidden:{opacity:0,y:50,scale:.8},show:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:15}}},E="relative flex flex-col items-center justify-center px-4 py-16 overflow-hidden z-10 max-w-5xl mx-auto text-center space-y-10";export{E as S,k as a,x as c,A as i,v as m,b as p,L as s};
