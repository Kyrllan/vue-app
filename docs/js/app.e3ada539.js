(function(e){function t(t){for(var r,i,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d32fc9b8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("navigation-drawer"),n("v-main",[n("v-container",{staticClass:"px-4 py-0 fill-height",attrs:{fluid:""}},[n("v-row",{staticClass:"fill-height"},[n("v-col",[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)],1)],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{"clipped-left":"",app:"",color:"primary",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.sidebarMenu=!e.sidebarMenu}}}),n("h2",[e._v("APP")])],1),n("v-navigation-drawer",{attrs:{app:"",floating:"",permanent:e.sidebarMenu,"mini-variant":e.mini,clipped:"",color:"nav"},on:{"update:miniVariant":function(t){e.mini=t},"update:mini-variant":function(t){e.mini=t}},model:{value:e.sidebarMenu,callback:function(t){e.sidebarMenu=t},expression:"sidebarMenu"}},[n("v-list",[n("v-list-item",{staticClass:"d-flex justify-center"},[n("v-list-item-content",[n("v-switch",{staticClass:"ml-5 pl-5",attrs:{inset:"","hide-details":"",color:"primary",label:e.dark?"Modo escuro":"Modo claro"},model:{value:e.dark,callback:function(t){e.dark=t},expression:"dark"}})],1)],1),n("v-divider"),e._l(e.items,(function(t,r){return n("v-list-item",{key:r,attrs:{link:"",to:t.route}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[e._v(e._s(t.icon))])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"primary--text"},[e._v(e._s(t.title))])],1)],1)}))],2)],1)],1)},s=[],l={data:function(){return{dark:!1,sidebarMenu:!0,toggleMini:!1,items:[{title:"Home",route:"/",icon:"mdi-home-outline"},{title:"About",route:"/about",icon:"mdi-shield-account"},{title:"Page 1",route:"/page-1",icon:"mdi-palette-swatch"},{title:"Page 2",route:"/page-2",icon:"mdi-account-search-outline"},{title:"Page 3",route:"/page-3",icon:"mdi-bus-clock"}]}},mounted:function(){this.dark="true"===localStorage.getItem("dark")},computed:{mini:function(){return this.$vuetify.breakpoint.smAndDown||this.toggleMini}},watch:{dark:function(){this.$vuetify.theme.dark=this.dark,localStorage.setItem("dark",this.dark)}}},c=l,u=n("2877"),d=n("6544"),f=n.n(d),p=n("40dc"),m=n("5bc1"),v=n("ce7e"),h=n("132d"),g=n("8860"),b=n("da13"),y=n("5d23"),w=n("34c3"),_=n("f774"),x=n("b73d"),k=Object(u["a"])(c,i,s,!1,null,null,null),j=k.exports;f()(k,{VAppBar:p["a"],VAppBarNavIcon:m["a"],VDivider:v["a"],VIcon:h["a"],VList:g["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemIcon:w["a"],VListItemTitle:y["b"],VNavigationDrawer:_["a"],VSwitch:x["a"]});var C={name:"App",components:{NavigationDrawer:j},data:function(){return{}}},V=C,P=n("7496"),M=n("62ad"),O=n("a523"),A=n("f6c4"),E=n("0fd9"),I=Object(u["a"])(V,a,o,!1,null,null,null),D=I.exports;f()(I,{VApp:P["a"],VCol:M["a"],VContainer:O["a"],VMain:A["a"],VRow:E["a"]});var F=n("9483");Object(F["a"])("".concat("/vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var L=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("hello-world")},S=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" Welcome to Vuetify ")]),r("p",{staticClass:"subheading font-weight-regular"},[e._v(" For help and collaboration with other Vuetify developers, "),r("br"),e._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[e._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.whatsNext,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.importantLinks,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[e._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},e._l(e.ecosystem,(function(t,n){return r("a",{key:n,staticClass:"subheading mx-3",attrs:{href:t.href,target:"_blank"}},[e._v(" "+e._s(t.text)+" ")])})),0)],1)],1)],1)},T=[],H={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},q=H,B=n("adda"),W=Object(u["a"])(q,N,T,!1,null,null,null),J=W.exports;f()(W,{VCol:M["a"],VContainer:O["a"],VImg:B["a"],VRow:E["a"]});var R={name:"Home",components:{HelloWorld:J}},K=R,z=Object(u["a"])(K,$,S,!1,null,null,null),G=z.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Page 1")])])}],U={mounted:function(){console.log("Montou pagina 1")},destroyed:function(){console.log("Destruiu pagina 1")}},X=U,Z=Object(u["a"])(X,Q,Y,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Page 2")]),n("v-row",{staticClass:"d-flex justify-center"},e._l(e.cards,(function(e,t){return n("v-card",{key:t,staticClass:"ma-2 pa-2",attrs:{width:"380",height:"200",color:e.color}})})),1)],1)},ne=[],re={data:function(){return{cards:[{color:"green"},{color:"purple"},{color:"blue"},{color:"yellow"},{color:"pink"},{color:"green"},{color:"purple"},{color:"blue"},{color:"yellow"},{color:"pink"},{color:"green"},{color:"purple"},{color:"blue"}]}},mounted:function(){console.log("Montou pagina 2")},destroyed:function(){console.log("Destruiu pagina 2")}},ae=re,oe=n("b0af"),ie=Object(u["a"])(ae,te,ne,!1,null,null,null),se=ie.exports;f()(ie,{VCard:oe["a"],VRow:E["a"]});var le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Page 3")]),n("v-card",[n("v-data-table",{attrs:{headers:e.headers,items:e.desserts}})],1)],1)},ce=[],ue={data:function(){return{headers:[{text:"Dessert (100g serving)",align:"start",filterable:!1,value:"name",divider:!0},{text:"Calories",value:"calories",divider:!0},{text:"Fat (g)",value:"fat",divider:!0},{text:"Carbs (g)",value:"carbs",divider:!0},{text:"Protein (g)",value:"protein",divider:!0},{text:"Iron (%)",value:"iron",divider:!0}],desserts:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%"}]}},mounted:function(){console.log("Montou pagina 3")},destroyed:function(){console.log("Destruiu pagina 3")}},de=ue,fe=n("8fea"),pe=Object(u["a"])(de,le,ce,!1,null,null,null),me=pe.exports;f()(pe,{VCard:oe["a"],VDataTable:fe["a"]}),r["a"].use(L["a"]);var ve=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/page-1",name:"Page 1",component:ee},{path:"/page-2",name:"Page 2",component:se},{path:"/page-3",name:"Page 3",component:me}],he=new L["a"]({mode:"history",base:"/vue-app/",routes:ve}),ge=he,be=n("f309");r["a"].use(be["a"]);var ye=new be["a"]({theme:{dark:!1,themes:{light:{primary:"#4AB403",nav:"#FFFFFF"},dark:{primary:"#006AE4",nav:"#303030"}}},icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({router:ge,vuetify:ye,render:function(e){return e(D)}}).$mount("#app")},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.e3ada539.js.map