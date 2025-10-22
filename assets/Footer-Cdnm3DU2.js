import{r as l,j as e,S as c}from"./index-DVSG1JA_.js";import{H as d}from"./Head-D_EZpdkP.js";import{c as o}from"./createLucideIcon-CVC4rLzw.js";import"./AnimatedText-BNevf3L6.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],x=o("circle-alert",u);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],p=o("circle-check-big",m);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],g=o("send",h);function f(){const[t,a]=l.useState(""),[r,s]=l.useState("idle"),n=i=>{if(i.preventDefault(),!t.includes("@"))return s("error");s("loading"),setTimeout(()=>{s("success"),a("")},1e3)};return l.useEffect(()=>{if(r==="success"||r==="error"){const i=setTimeout(()=>s("idle"),3e3);return()=>clearTimeout(i)}},[r]),{email:t,setEmail:a,status:r,handleSubmit:n}}const y=()=>e.jsxs("div",{className:"pt-8 space-y-2",children:[e.jsx("p",{className:"text-neutral-600 dark:text-neutral-500 text-sm",children:"Built with 💖 using React & Tailwind CSS"}),e.jsxs("div",{className:"flex items-center justify-center gap-4 text-xs text-neutral-700 dark:text-neutral-600",children:[e.jsx("span",{children:"© 2025"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"All rights reserved"})]})]}),j=({status:t})=>e.jsxs("div",{className:"min-h-[60px] flex items-center justify-center",children:[t==="success"&&e.jsxs("div",{className:"flex items-center gap-3 py-4 px-6 rounded-lg bg-green-500/10 border border-green-500/30",children:[e.jsx(p,{className:"h-6 w-6 text-green-400"}),e.jsx("span",{className:"text-lg font-medium text-green-400",children:"Thanks! We'll be in touch soon"})]}),t==="error"&&e.jsxs("div",{className:"flex items-center gap-3 py-4 px-6 rounded-lg bg-red-500/10 border border-red-500/30",children:[e.jsx(x,{className:"h-6 w-6 text-red-400"}),e.jsx("span",{className:"text-lg font-medium text-red-400",children:"Please enter a valid email address"})]})]}),b=({status:t,setEmail:a,handleSubmit:r,email:s})=>e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"space-y-4 relative group",children:[e.jsx("input",{type:"email",value:s,onChange:n=>a(n.target.value),onKeyDown:n=>n.key==="Enter"&&r(n),placeholder:"your.email@example.com",disabled:t==="loading",className:`w-full rounded-xl border-2 border-neutral-700 bg-neutral-900/50 backdrop-blur-sm px-6 py-5 text-lg text-white placeholder-neutral-500 \r
              focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-400/20 focus:outline-none\r
              transition-all duration-300 \r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              group-hover:border-neutral-600`,id:"footer-email",name:"footer-email"}),e.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"})]}),e.jsx("button",{type:"button",onClick:r,disabled:t==="loading"||!s,className:`w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-5 text-lg font-semibold text-white \r
            shadow-lg shadow-fuchsia-500/30\r
            hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02]\r
            active:scale-[0.98]\r
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100\r
            transition-all duration-300 \r
            flex items-center justify-center gap-2`,children:t==="loading"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):e.jsxs(e.Fragment,{children:["Send Message",e.jsx(g,{className:"h-5 w-5"})]})})]});function S(){const{email:t,setEmail:a,status:r,handleSubmit:s}=f();return e.jsxs("footer",{id:"contact",className:c,children:[e.jsx(d,{Tittle:"Get In Touch",Pragaphic:"Drop your email and let's create something amazing together"}),e.jsx(b,{status:r,setEmail:a,handleSubmit:s,email:t}),e.jsx(j,{status:r}),e.jsx(y,{})]})}export{S as default};
