"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4193],{6590:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var r=a(7294),l=a(4076),n=a(7106),c=a(7349),s=a(5121);const o=[{name:"Download for Mac (M1/M2)",logo:a(6490).Z,fileFormat:"{appname}-mac-arm64-{tag}.dmg"},{name:"Download for Mac (Intel)",logo:a(6490).Z,fileFormat:"{appname}-mac-x64-{tag}.dmg"},{name:"Download for Windows",logo:a(9256).Z,fileFormat:"{appname}-win-x64-{tag}.exe"},{name:"Download for Linux",logo:a(841).Z,fileFormat:"{appname}-linux-amd64-{tag}.deb"}];function i(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function m(){const[e,t]=(0,r.useState)(o),[a,m]=(0,r.useState)(e[0]),d=async e=>{const t=navigator.userAgent,a=await(navigator?.userAgentData?.getHighEntropyValues(["architecture"]));t.includes("Windows")?m(e[2]):t.includes("Linux")?m(e[3]):t.includes("Mac OS")&&a&&"arm"===a.architecture?m(e[0]):m(e[1])};return(0,r.useEffect)((()=>{(async()=>{try{const a=await(async(e,t)=>{const a=`https://api.github.com/repos/${e}/${t}/releases/latest`;try{return(await s.default.get(a)).data}catch(r){return console.error(r),null}})("janhq","jan"),r=a.assets[0].name,l=(e=>{const t=e.match(/^(.*?)-(?:mac|win|linux)-(?:arm64|x64|amd64)-.*$/);return t?t[1]:null})(r);if(!l)return console.error("Failed to extract appname from file name:",r),void d(e);const n=a.tag_name.startsWith("v")?a.tag_name.substring(1):a.tag_name,c=e.map((e=>{const t=e.fileFormat.replace("{appname}",l).replace("{tag}",n);return{...e,href:`https://github.com/janhq/jan/releases/download/${a.tag_name}/${t}`}}));t(c),d(c)}catch(a){console.error("Failed to update download links:",a)}})()}),[]),r.createElement("div",{className:"inline-flex align-items-stretch"},r.createElement("a",{className:"cursor-pointer relative inline-flex items-center rounded-l-md border-0 px-3.5 py-2.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 hover:text-white",href:a.href},r.createElement("img",{src:a.logo,alt:"Logo",className:"h-5 mr-3 -mt-1"}),a.name),r.createElement(l.v,{as:"div",className:"relative -ml-px block"},r.createElement(l.v.Button,{className:"cursor-pointer relative inline-flex items-center rounded-r-md border-l border-blue-500 h-full text-white bg-blue-600 w-8 justify-center"},r.createElement("span",{className:"sr-only"},"Open OS options"),r.createElement(c.Z,{className:"h-6 w-6","aria-hidden":"true"})),r.createElement(n.u,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},r.createElement(l.v.Items,{className:"absolute right-0 z-10 mt-1 w-72 text-left origin-top-right rounded-md bg-blue-600 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden"},r.createElement("div",{className:"overflow-hidden"},e.map((e=>r.createElement(l.v.Item,{key:e.name,onClick:()=>m(e)},(t=>{let{active:a}=t;return r.createElement("a",{href:e.href,className:i(a?"bg-blue-500 hover:text-white":"text-white","flex px-4 py-3 items-center text-white hover:text-white")},r.createElement("img",{src:e.logo,alt:"Logo",className:"w-3 mr-3 -mt-1 flex-shrink-0"}),r.createElement("span",{className:"text-white"},e.name))})))))))))}var d=a(2263),g=a(4996),u=a(7348),p=a(9204);const h=()=>{const[e,t]=(0,r.useState)({count:0});return(0,r.useEffect)((()=>{(async()=>{try{const{data:e}=await s.default.get("https://api.github.com/repos/janhq/jan");t({count:e.stargazers_count})}catch(e){(0,p.IZ)(e)&&console.error("Failed to get stargazers:",e)}})()}),[]),{stargazers:e}},f=()=>{const[e,t]=(0,r.useState)({tagVersion:""});return(0,r.useEffect)((()=>{(async()=>{try{const{data:e}=await s.default.get("https://api.github.com/repos/janhq/jan/releases/latest");t({tagVersion:e.tag_name})}catch(e){(0,p.IZ)(e)&&console.error("Failed to get stargazers:",e)}})()}),[]),{release:e}};var x=a(8193),E=a(7516);const b=[{icon:r.createElement(x.h3E,{className:"text-xl text-white"}),href:"https://twitter.com/janhq_"},{icon:r.createElement(E.Wdm,{className:"text-xl text-white"}),href:"https://discord.com/invite/FTk2MvZwJH"},{icon:r.createElement(x.idJ,{className:"text-lg text-white"}),href:"https://github.com/janhq/jan"}];function v(){const{stargazers:e}=h(),{release:t}=f();return r.createElement("div",{className:"h-10 w-full flex-shrink-0 bg-blue-600"},r.createElement("div",{className:"container flex h-full items-center justify-between py-0.5"},r.createElement("div",{className:"flex h-6 items-center shadow-sm"},r.createElement("a",{href:"https://github.com/janhq/jan",target:"_blank",className:"flex h-full items-center gap-x-1 rounded-l-sm bg-indigo-50 px-1 py-0.5"},r.createElement(x.idJ,{className:"text-lg text-gray-800"}),r.createElement("span",{className:"text-xs font-bold tracking-tight text-gray-800"},"Stars")),r.createElement("a",{href:"https://github.com/janhq/jan/stargazers",target:"_blank",className:"flex h-full items-center rounded-r-sm border-l border-gray-100 bg-white px-1 py-0.5 font-medium"},r.createElement("span",{className:"text-xs font-bold text-gray-700"},e.count))),r.createElement("a",{href:"https://github.com/janhq/jan/releases",target:"_blank",className:"hidden items-center gap-x-2 lg:flex"},"\u2728",r.createElement("div",{className:"flex items-center rounded bg-white px-2"},r.createElement("span",{className:"font-bold uppercase text-blue-600"},"new")),r.createElement("p",{className:"text-white"},r.createElement("span",{className:"font-bold capitalize"},t.tagVersion),"\xa0is now live on GitHub. Check it out!")),r.createElement("div",{className:"flex items-center gap-x-3"},b.map(((e,t)=>r.createElement("a",{key:t,href:e.href,target:"_blank"},e.icon))))))}var w=a(941);const A=[{name:"Download for Mac (M1/M2)",logo:a(6490).Z,fileFormat:"{appname}-mac-arm64-{tag}.dmg"},{name:"Download for Mac (Intel)",logo:a(6490).Z,fileFormat:"{appname}-mac-x64-{tag}.dmg"},{name:"Download for Windows",logo:a(9256).Z,fileFormat:"{appname}-win-x64-{tag}.exe"},{name:"Download for Linux",logo:a(841).Z,fileFormat:"{appname}-linux-amd64-{tag}.deb"}];function N(){const[e,t]=(0,r.useState)(A),[a,l]=(0,r.useState)(e[0]),n=async e=>{const t=navigator.userAgent,a=await(navigator?.userAgentData?.getHighEntropyValues(["architecture"]));t.includes("Windows")?l(e[2]):t.includes("Linux")?l(e[3]):t.includes("Mac OS")&&a&&"arm"===a.architecture?l(e[0]):l(e[1])};return(0,r.useEffect)((()=>{(async()=>{try{const a=await(async(e,t)=>{const a=`https://api.github.com/repos/${e}/${t}/releases/latest`;try{return(await s.default.get(a)).data}catch(r){return console.error(r),null}})("janhq","jan"),r=a.assets[0].name,l=(e=>{const t=e.match(/^(.*?)-(?:mac|win|linux)-(?:arm64|x64|amd64)-.*$/);return t?t[1]:null})(r);if(!l)return console.error("Failed to extract appname from file name:",r),void n(e);const c=a.tag_name.startsWith("v")?a.tag_name.substring(1):a.tag_name,o=e.map((e=>{const t=e.fileFormat.replace("{appname}",l).replace("{tag}",c);return{...e,href:`https://github.com/janhq/jan/releases/download/${a.tag_name}/${t}`}}));t(o),n(o)}catch(a){console.error("Failed to update download links:",a)}})()}),[]),r.createElement("div",{className:"mt-2"},r.createElement("a",{href:a.href},r.createElement("span",{className:"text-blue-600 font-bold"},"Download Jan")))}function k(){const{siteConfig:e}=(0,d.Z)();return r.createElement(r.Fragment,null,r.createElement(v,null),r.createElement(u.Z,{title:`${e.tagline}`,description:"Jan runs Large Language Models locally on Windows, Mac and Linux. Available on Desktop and Cloud-Native."},r.createElement("main",{className:"bg-gray-50 dark:bg-gray-950/95 relative"},r.createElement("div",{className:"relative"},r.createElement(w.Z,{alt:"App screenshot",sources:{light:(0,g.Z)("/img/bg-hero-light.svg"),dark:(0,g.Z)("/img/bg-hero-dark.svg")},className:"absolute w-full h-full opacity-10 dark:opacity-20 top-0 object-cover blur-3xl"}),r.createElement("div",{className:"container py-16"},r.createElement("div",{className:"grid grid-cols-1 items-center gap-4"},r.createElement("div",{className:"relative z-10 text-center "},r.createElement("h1",{className:"bg-gradient-to-r dark:from-white from-black to-gray-500 dark:to-gray-400 bg-clip-text text-4xl lg:text-6xl font-bold leading-tight text-transparent dark:text-transparent lg:leading-tight"},"Own your AI"),r.createElement("p",{className:"text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-gray-500 dark:text-gray-400"},"A \xa0",r.createElement("span",{className:"dark:text-white text-black"},"free, open-source"),"\xa0alternative to OpenAI",r.createElement("br",null),"\xa0that runs on your\xa0",r.createElement("span",{className:"dark:text-white text-black"},"personal computer")),r.createElement("div",{className:"my-6 flex flex-col-reverse md:flex-row items-center justify-center gap-4 relative z-20"},r.createElement("button",{type:"button",className:"cursor-pointer relative hidden md:inline-flex items-center px-4 py-2.5  text-base font-semibold rounded-lg border border-gray-400 dark:border-gray-700 text-gray-600 dark:text-white",onClick:()=>window.open("https://github.com/janhq/jan","_blank","noreferrer")},"View Github"),r.createElement(m,null))),r.createElement("div",{className:"text-center relative "},r.createElement("div",{className:"p-3 border dark:border-gray-500 border-gray-400 inline-block rounded-lg"},r.createElement(w.Z,{alt:"App screenshot",sources:{light:(0,g.Z)("/img/desktop-llm-chat-light.png"),dark:(0,g.Z)("/img/desktop-llm-chat-dark.png")},width:1e3,className:"rounded-md mx-auto"})))))),r.createElement("div",{className:"container mt-10 mb-10 lg:mb-20 text-center"},r.createElement("h2",null,"AI that you control"),r.createElement("p",{className:"text-base mt-2 w-full lg:w-2/5 mx-auto leading-relaxed"},"Private. Local. Infinitely Customizable."),r.createElement("div",{className:"grid text-left lg:grid-cols-2 mt-16 gap-4"},r.createElement("div",{className:"card relative min-h-[380px] lg:min-h-[460px]"},r.createElement("img",{src:"/img/card-element.png",alt:"Element",className:"absolute w-full bottom-0 left-0"}),r.createElement("div",{class:"p-8 relative z-40"},r.createElement("h5",null,"Personal AI that runs on your computer"),r.createElement("p",{className:"mt-2"},"Jan runs directly on your local machine, offering privacy, convenience and customizability."),r.createElement(w.Z,{alt:"Group Chat",sources:{light:(0,g.Z)("/img/group-chat-light.png"),dark:(0,g.Z)("/img/group-chat-dark.png")},className:"mt-10"}))),r.createElement("div",{className:"card relative min-h-[380px] lg:min-h-[460px]"},r.createElement("div",{className:"p-8"},r.createElement("h5",null,"Extendable via App and Plugin framework"),r.createElement("p",{className:"mt-2"},"Jan has a versatile app and plugin framework, allowing you to customize it to your needs.")),r.createElement(w.Z,{alt:"Framework",sources:{light:(0,g.Z)("/img/card-framework-light.png"),dark:(0,g.Z)("/img/card-framework-dark.png")},className:"w-11/12 ml-auto mt-auto"})),r.createElement("div",{className:"card relative min-h-[380px] lg:min-h-[460px]"},r.createElement("div",{className:"p-8"},r.createElement("h5",null,"Private and offline, your data never leaves your machine"),r.createElement("p",{className:"mt-2"},"Your conversations and data are with an AI that runs on your computer, where only you have access.")),r.createElement(w.Z,{alt:"Group Chat",sources:{light:(0,g.Z)("/img/card-nitro-light.png"),dark:(0,g.Z)("/img/card-nitro-dark.png")},className:"w-3/4 mx-auto mt-auto"})),r.createElement("div",{className:"card relative min-h-[380px] lg:min-h-[460px]"},r.createElement("div",{className:"p-8"},r.createElement("h5",null,"No subscription fees, the AI runs on your computer"),r.createElement("p",{className:"mt-2"},"Say goodbye to monthly subscriptions or usage-based APIs. Jan runs 100% free on your own hardware.")),r.createElement(w.Z,{alt:"Group Chat",sources:{light:(0,g.Z)("/img/card-free-light.png"),dark:(0,g.Z)("/img/card-free-dark.png")},className:"w-full mt-auto mx-auto"})))),r.createElement("div",{class:"container lg:px-20 py-20 text-center lg:text-left"},r.createElement("div",{class:"flex  flex-col lg:flex-row space-y-20 lg:space-y-0"},r.createElement("div",null,r.createElement("h1",{className:"bg-gradient-to-r dark:from-white from-black to-gray-500 dark:to-gray-400 bg-clip-text text-4xl lg:text-6xl font-bold leading-tight text-transparent dark:text-transparent lg:leading-tight"},"Your AI, forever."),r.createElement("p",{className:"text-lg lg:text-2xl mt-2"},"Apps come and go, but your AI and data should last."," "),r.createElement("div",{class:"w-full lg:w-3/4 mt-8"},r.createElement("div",{class:"grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24"},r.createElement("div",null,r.createElement("img",{src:"/img/ic-park-solid-unlock.svg",alt:"Icon - Lock",className:"w-8 mb-4 mx-auto lg:mx-0"}),r.createElement("p",null,"Jan uses open, standard and non-proprietary files stored locally on your device.")),r.createElement("div",null,r.createElement("img",{src:"img/ic-baseline-control-camera.svg",alt:"Icon - Camera",className:"w-8 mb-4 mx-auto lg:mx-0"}),r.createElement("p",null,"You have total control over your AI, which means you can use Jan offline and switch to another app easily if you want."))))),r.createElement("div",{className:"w-full lg:w-80 text-center"},r.createElement(w.Z,{alt:"App screenshot",sources:{light:(0,g.Z)("/img/jan-icon-light.png"),dark:(0,g.Z)("/img/jan-icon-dark.png")},className:"w-40 lg:w-full mx-auto"}),r.createElement("p",{className:"mt-1 font-bold"},"100% free on your own hardware"),r.createElement(N,null)))),r.createElement("div",{class:"container pb-20 pt-10 text-center"},r.createElement("h2",null,"We are open-source. ",r.createElement("br",null)," Join Jan community."),r.createElement("div",{class:"mt-14"},r.createElement("div",{class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},r.createElement("a",{href:"https://discord.com/invite/FTk2MvZwJH",target:"_blank"},r.createElement("div",{class:"card h-52 relative flex items-center justify-center"},r.createElement("div",{class:"relative z-50"},r.createElement("img",{src:"/img/discord-logo.png",alt:"Discord logo",className:"w-28"})),r.createElement("div",{class:"card-link card-link-bg dark:card-link-bg-dark absolute right-4 top-5"},"Join our Discord"),r.createElement(w.Z,{alt:"Discord Element",sources:{light:(0,g.Z)("/img/discord-element-light.png"),dark:(0,g.Z)("/img/discord-element-dark.png")},className:"absolute"}))),r.createElement("a",{href:"https://github.com/janhq/jan",target:"_blank"},r.createElement("div",{class:"card h-52 relative flex items-center justify-center"},r.createElement("div",{class:"relative z-50"},r.createElement(x.idJ,{className:"text-8xl dark:text-white text-black"})),r.createElement("div",{class:"card-link card-link-bg dark:card-link-bg-dark absolute right-4 top-5"},"View Github"),r.createElement("img",{alt:"Github Element",src:"/img/github-element-dark.png",className:"absolute left-8"})))))))))}},6490:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},841:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/linux-logo-white-868a443f7b76b596597d871c759b59f1.png"},9256:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);