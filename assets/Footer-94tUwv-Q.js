import{r as n,j as e}from"./index-D7aV7CR7.js";import{A as c}from"./Amina-BP0YOTDN.js";import{c as l}from"./createLucideIcon-D_wusFCl.js";/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],x=l("circle-alert",d);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],m=l("circle-check-big",u);/**
 * @license lucide-react v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],h=l("send",p);function b(){const[a,i]=n.useState(""),[t,r]=n.useState("idle"),o=s=>{if(s.preventDefault(),!a.includes("@"))return r("error");r("loading"),setTimeout(()=>{r("success"),i("")},1e3)};return n.useEffect(()=>{if(t==="success"||t==="error"){const s=setTimeout(()=>r("idle"),3e3);return()=>clearTimeout(s)}},[t]),e.jsx("footer",{id:"contact",className:"flex flex-col min-h-screen items-center justify-center px-4 py-20 text-center",children:e.jsxs("div",{className:"max-w-2xl w-full space-y-8",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("h2",{className:"text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-fuchsia-400 via-pink-500 to-purple-500 bg-clip-text text-transparent",children:"Get In Touch"}),e.jsx("span",{className:"text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto",children:e.jsx(c,{text:"Drop your email and let's create something amazing together"})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative group",children:[e.jsx("input",{type:"email",value:a,onChange:s=>i(s.target.value),onKeyDown:s=>s.key==="Enter"&&o(s),placeholder:"your.email@example.com",disabled:t==="loading",className:`w-full rounded-xl border-2 border-neutral-700 bg-neutral-900/50 backdrop-blur-sm px-6 py-5 text-lg text-white placeholder-neutral-500 \r
              focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-400/20 focus:outline-none\r
              transition-all duration-300 \r
              disabled:opacity-50 disabled:cursor-not-allowed\r
              group-hover:border-neutral-600`,id:"footer-email",name:"footer-email"}),e.jsx("div",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-fuchsia-400/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"})]}),e.jsx("button",{type:"button",onClick:o,disabled:t==="loading"||!a,className:`w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-5 text-lg font-semibold text-white \r
            shadow-lg shadow-fuchsia-500/30\r
            hover:shadow-xl hover:shadow-fuchsia-500/40 hover:scale-[1.02]\r
            active:scale-[0.98]\r
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100\r
            transition-all duration-300 \r
            flex items-center justify-center gap-2`,children:t==="loading"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Sending..."]}):e.jsxs(e.Fragment,{children:["Send Message",e.jsx(h,{className:"h-5 w-5"})]})})]}),e.jsxs("div",{className:"min-h-[60px] flex items-center justify-center",children:[t==="success"&&e.jsxs("div",{className:"flex items-center gap-3 py-4 px-6 rounded-lg bg-green-500/10 border border-green-500/30",children:[e.jsx(m,{className:"h-6 w-6 text-green-400"}),e.jsx("span",{className:"text-lg font-medium text-green-400",children:"Thanks! We'll be in touch soon"})]}),t==="error"&&e.jsxs("div",{className:"flex items-center gap-3 py-4 px-6 rounded-lg bg-red-500/10 border border-red-500/30",children:[e.jsx(x,{className:"h-6 w-6 text-red-400"}),e.jsx("span",{className:"text-lg font-medium text-red-400",children:"Please enter a valid email address"})]})]}),e.jsxs("div",{className:"pt-8 space-y-2",children:[e.jsx("p",{className:"text-neutral-600 dark:text-neutral-500 text-sm",children:"Built with 💖 using React & Tailwind CSS"}),e.jsxs("div",{className:"flex items-center justify-center gap-4 text-xs text-neutral-700 dark:text-neutral-600",children:[e.jsx("span",{children:"© 2025"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"All rights reserved"})]})]})]})})}export{b as default};
