(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):l({},t,{},e)),n},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,d=h["".concat(i,".").concat(p)]||h[p]||m[p]||a;return n?o.a.createElement(d,l({ref:t},c,{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"===typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},M20V:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n("zDLl"),a=r.createElement;function i(e){return function(e){var t=e.children,n=e.meta||{},r=n.title,i=n.desc;return a(o.a,{title:r||"",desc:i||""},a("div",{className:"md-content"},t))}}},naEJ:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"default",(function(){return m}));var r=n("kOwS"),o=n("qNsG"),a=n("q1tI"),i=n.n(a),l=n("7ljp"),s=n("M20V"),c=(i.a.createElement,{title:"Mining FAQs",desc:""}),u={meta:c},h=Object(s.a)();function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.a)(h,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Mining FAQs"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Are AR wallets/addresses created automatically for miners, and if so, how do I access them?")),Object(l.a)("p",null,"Yes, if you do not provide a wallet address on the command line when starting the miner, a new wallet will be created for you and stored in the \u2018wallets\u2019 directory. When you run the miner again, you will want to pass the generated wallet address on the command line. Any valid Arweave wallet address will work for mining. For example, you can use a wallet that was generated in the Arweave web extension for mining purposes -- you just need the wallet address. If you want to install the web extension you can do that here: ",Object(l.a)("a",{href:"https://chrome.google.com/webstore/detail/arweave/iplppiggblloelhoglpmkmbinggcaaoc",target:"_blank"},"Chrome"),", ",Object(l.a)("a",{href:"https://addons.mozilla.org/en-US/firefox/addon/arweave/",target:"_blank"},"Firefox"),", or ",Object(l.a)("a",{href:"https://chrome.google.com/webstore/detail/arweave/iplppiggblloelhoglpmkmbinggcaaoc",target:"_blank"},"Brave"),"."),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Do I have to download & store the whole blockweave to begin mining?")),Object(l.a)("p",null,"Nope! You don\u2019t have to store the whole weave to mine, there\u2019s no set minimum requirement. However, the more blocks of the blockweave that you store, the more likely you are to receive mining rewards from the network"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"How do I measure my mining performance?")),Object(l.a)("p",null,"You can run ",Object(l.a)("strong",{parentName:"p"},"./arweave-server")," benchmark to calculate your per core hashing rate. By default, the Arweave server will start one less than the number of cores you have in your machine ","(","in order for it to stay responsive during mining",")"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"How do I see if i\u2019ve mined a block?")),Object(l.a)("p",null,"Luckily for you, we\u2019ve created a neat infographic to show you how the mining process works. You can find that on the 'Mining Reward Factors' page. There are three key phases to mining on the Arweave: First you need to store the recall block. Once you have this, you can begin hashing. The second phase is mining the candidate block. The third and final phase: the mined block will be submitted to the network and the network will then decide whether or not to accept this"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Can I use multiple hard drives/external auxiliary hard drives to provide more data storage on the network?")),Object(l.a)("p",null,"Yes, this is possible. In order to build this kind of setup, you will need to set up a cross-disk file system and mount this in the \u2018blocks\u2019 subdirectory of your Arweave installation. You will be able to find tutorials for how to achieve this with your specific OS online"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Can I mine on Windows/MacOS?")),Object(l.a)("p",null,"At the moment we have a Linux client available, but we will be making mining more accessible on other operating systems in the future. Note that for Windows, it is possible to run the miner inside a Windows Subsystem for Linux environment"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Is there a specific recommendation for Ubuntu version?")),Object(l.a)("p",null,"We recommend ",Object(l.a)("a",{href:"http://releases.ubuntu.com/18.04/",target:"_blank"},"Ubuntu version 18.04+")),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"I don\u2019t seem to be receiving new blocks from peers - why is this?")),Object(l.a)("p",null,"The most likely cause of this issue is that your router is not forwarding messages for port 1984 to your machine. You can address this by configuring port forwarding on your router and ensuring that port 1984 is not blocked by your firewall"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"How do I keep the miner running after closing my terminal window?")),Object(l.a)("p",null,"We recommend starting the miner in a screen session, you can then safely disconnect from the screen session and close your terminal with the miner still running"),Object(l.a)("h2",null,Object(l.a)("strong",{parentName:"h2"},"Can I mine on the Arweave network with a dynamic IP?")),Object(l.a)("p",null,"Though it\u2019s possible to do so with a dynamic IP, this is very inefficient, so we strongly recommend a static IP. However if you are using a dynamic IP, make sure you\u2019re operating in \u2018polling mode\u2019"))}m.isMDXComponent=!0},ow3s:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mine/learn-more",function(){return n("naEJ")}])},qNsG:function(e,t,n){"use strict";var r=n("4mXO"),o=n.n(r),a=n("pLtp"),i=n.n(a);function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,o={},a=i()(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(o.a){var l=o()(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return l}))}},[["ow3s",1,2,0,32]]]);