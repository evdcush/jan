"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Troubleshooting",sidebar_position:5},i="Jan.ai Troubleshooting Guide",l={unversionedId:"guides/troubleshooting",id:"guides/troubleshooting",title:"Troubleshooting",description:'Please note that \ud83d\udc4bJan is in "development mode," and you might encounter issues. If you need to reset your installation, follow these steps:',source:"@site/docs/guides/troubleshooting.md",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/guides/troubleshooting",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/guides/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1699862019,formattedLastUpdatedAt:"Nov 13, 2023",sidebarPosition:5,frontMatter:{title:"Troubleshooting",sidebar_position:5},sidebar:"guidesSidebar",previous:{title:"Windows",permalink:"/guides/install/windows"}},s={},p=[{value:"Issue 1: Broken Build",id:"issue-1-broken-build",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"janai-troubleshooting-guide"},"Jan.ai Troubleshooting Guide"),(0,o.kt)("p",null,'Please note that \ud83d\udc4bJan is in "development mode," and you might encounter issues. If you need to reset your installation, follow these steps:'),(0,o.kt)("h2",{id:"issue-1-broken-build"},"Issue 1: Broken Build"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete the Jan Application from your computer.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clear the cache by running one of the following commands:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /Users/$(whoami)/Library/Application\\ Support/jan-electron\n")),(0,o.kt)("p",{parentName:"li"},"or"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf /Users/$(whoami)/Library/Application\\ Support/jan\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If the above steps fail, use the following commands to find and kill any problematic processes:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ps aux | grep nitro\n")),(0,o.kt)("p",{parentName:"li"},'Look for processes like "nitro" and "nitro_arm_64," and kill them one by one with:'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kill -9 <PID>\n")))))}d.isMDXComponent=!0}}]);