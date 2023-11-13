"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={title:"User Interface"},i=void 0,o={unversionedId:"docs/user-interface",id:"docs/user-interface",title:"User Interface",description:"Jan provides a UI Kit for customize the UI for your use case. This means you can personalize the entire application according to your own brand and visual styles.",source:"@site/docs/docs/user-interface.md",sourceDirName:"docs",slug:"/docs/user-interface",permalink:"/docs/user-interface",draft:!1,editUrl:"https://github.com/janhq/jan/tree/main/docs/docs/docs/user-interface.md",tags:[],version:"current",lastUpdatedBy:"0xSage",lastUpdatedAt:1699862019,formattedLastUpdatedAt:"Nov 13, 2023",frontMatter:{title:"User Interface"},sidebar:"docsSidebar",previous:{title:"Files",permalink:"/docs/modules/files"}},l={},c=[{value:"Views",id:"views",level:2},{value:"Ribbon",id:"ribbon",level:3},{value:"LeftSidebar",id:"leftsidebar",level:3},{value:"Main",id:"main",level:3},{value:"RightSidebar",id:"rightsidebar",level:3},{value:"StatusBar",id:"statusbar",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...s}=e;return(0,n.kt)(p,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Jan provides a UI Kit for customize the UI for your use case. This means you can personalize the entire application according to your own brand and visual styles."),(0,n.kt)("p",null,"This page gives you an overview of how to customize the UI."),(0,n.kt)("p",null,"You can see some of the user interface components when you first open Jan."),(0,n.kt)("p",null,"To Link:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ribbon"),(0,n.kt)("li",{parentName:"ul"},"LeftSidebar"),(0,n.kt)("li",{parentName:"ul"},"Main"),(0,n.kt)("li",{parentName:"ul"},"RightSidebar"),(0,n.kt)("li",{parentName:"ul"},"StatusBar")),(0,n.kt)("h2",{id:"views"},"Views"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Jan Views",src:r(8645).Z,width:"1396",height:"766"}),"\nTODO: add a better image."),(0,n.kt)("h3",{id:"ribbon"},"Ribbon"),(0,n.kt)("p",null,"Assistants shortcuts and Modules settings show up here."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import .. from "@jan"\nsample code here\n')),(0,n.kt)("h3",{id:"leftsidebar"},"LeftSidebar"),(0,n.kt)("p",null,"Conversation threads show up here. This is customizable, so custom assistants can add additional menu items here."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import .. from "@jan"\nsample code here\n')),(0,n.kt)("h3",{id:"main"},"Main"),(0,n.kt)("p",null,"The main view for interacting with assistants. This is customizable, so custom assistants can add in additional UI components. By default, this is a chat thread with assistants."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import .. from "@jan"\nsample code here\n')),(0,n.kt)("h3",{id:"rightsidebar"},"RightSidebar"),(0,n.kt)("p",null,'A "settings" view for each thread. Users should be able to edit settings or other configs to customize the assistant experience within each thread.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import .. from "@jan"\nsample code here\n')),(0,n.kt)("h3",{id:"statusbar"},"StatusBar"),(0,n.kt)("p",null,"A global status bar that shows processes, hardware/disk utilization and more."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'import .. from "@jan"\nsample code here\n')))}d.isMDXComponent=!0},8645:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/jan-views-8a6b71fb089ec16a059f4f0f49814ce0.png"}}]);