(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],d=0,l=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({DayBook:"DayBook","DayBook-entry-view~Login~Register":"DayBook-entry-view~Login~Register","DayBook-entry-view":"DayBook-entry-view",Login:"Login",Register:"Register","DayBook-no-entry":"DayBook-no-entry",auth:"auth",NavBar:"NavBar"}[e]||e)+"."+{DayBook:"16bf56cf","DayBook-entry-view~Login~Register":"42ae6b88","DayBook-entry-view":"3e346cd3",Login:"6ca69df3",Register:"683484e2","DayBook-no-entry":"e8320d40",auth:"eea13e1f",NavBar:"b23f8597","chunk-2d1671b2":"86ea6d58","chunk-11ace5c8":"47937d7c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"DayBook-entry-view":1,"DayBook-no-entry":1,auth:1,NavBar:1,"chunk-2d1671b2":1,"chunk-11ace5c8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({DayBook:"DayBook","DayBook-entry-view~Login~Register":"DayBook-entry-view~Login~Register","DayBook-entry-view":"DayBook-entry-view",Login:"Login",Register:"Register","DayBook-no-entry":"DayBook-no-entry",auth:"auth",NavBar:"NavBar"}[e]||e)+"."+{DayBook:"31d6cfe0","DayBook-entry-view~Login~Register":"31d6cfe0","DayBook-entry-view":"0a9b35e3",Login:"31d6cfe0",Register:"31d6cfe0","DayBook-no-entry":"6115f3f2",auth:"a41ad80b",NavBar:"8d927064","chunk-2d1671b2":"eb266812","chunk-11ace5c8":"13a9e484"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-journal-vuex/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3c61":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"loadingEntries",(function(){return D})),n.d(r,"updateEntry",(function(){return x})),n.d(r,"createEntry",(function(){return L})),n.d(r,"deleteEntry",(function(){return E}));var o={};n.r(o),n.d(o,"getEntriesByTerm",(function(){return S})),n.d(o,"getEntryById",(function(){return N}));var a={};n.r(a),n.d(a,"setEntries",(function(){return I})),n.d(a,"updateEntry",(function(){return U})),n.d(a,"createEntry",(function(){return A})),n.d(a,"deleteEntry",(function(){return _})),n.d(a,"clearEntries",(function(){return C}));var u={};n.r(u),n.d(u,"createUser",(function(){return z})),n.d(u,"singInUser",(function(){return F})),n.d(u,"checkAuth",(function(){return G}));var i={};n.r(i),n.d(i,"currentState",(function(){return W})),n.d(i,"userName",(function(){return X}));var c={};n.r(c),n.d(c,"loginUser",(function(){return Q})),n.d(c,"logout",(function(){return V}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23");function d(e,t){var n=Object(s["A"])("router-view");return Object(s["t"])(),Object(s["d"])(n)}var l=n("6b0d"),f=n.n(l);const p={},h=f()(p,[["render",d]]);var m=h,g=n("5530"),y=n("6c02"),v=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"daybook",component:function(){return n.e("DayBook").then(n.bind(null,"171c"))},children:[{path:"",name:"no-entry",component:function(){return n.e("DayBook-no-entry").then(n.bind(null,"aafc"))}},{path:":id",name:"entry",component:function(){return Promise.all([n.e("DayBook-entry-view~Login~Register"),n.e("DayBook-entry-view")]).then(n.bind(null,"d36b"))},props:function(e){return{id:e.params.id}}},{path:"pathMatch(/*)*",redirect:""}]}),k={name:"auth",component:function(){return n.e("auth").then(n.bind(null,"c045"))},children:[{path:"",name:"login",component:function(){return Promise.all([n.e("DayBook-entry-view~Login~Register"),n.e("Login")]).then(n.bind(null,"8f17"))}},{path:"/register",name:"register",component:function(){return Promise.all([n.e("DayBook-entry-view~Login~Register"),n.e("Register")]).then(n.bind(null,"0783"))}}]},b=n("1da1"),w=(n("96cf"),n("5502")),B=function(){return{isLoading:!0,entries:[]}},j=(n("b64b"),n("b0c0"),n("bc3a")),O=n.n(j),T=O.a.create({baseURL:"https://vue-demos-6114b-default-rtdb.firebaseio.com"});T.interceptors.request.use((function(e){return e.params={auth:localStorage.getItem("idToken")},e}));var R=T,D=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,u,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,R.get("/entries.json");case 3:if(r=e.sent,o=r.data,o){e.next=8;break}return n("setEntries",[]),e.abrupt("return");case 8:for(a=[],u=0,i=Object.keys(o);u<i.length;u++)c=i[u],a.push(Object(g["a"])({id:c},o[c]));n("setEntries",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.id,a=Object(g["a"])({},n),delete a.id,e.next=6,R.put("/entries/".concat(o,".json"),a);case 6:r("updateEntry",Object(g["a"])({},n));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=Object(g["a"])({},n),e.next=4,R.post("/entries.json",o);case 4:return a=e.sent,u=a.data,n=Object(g["a"])(Object(g["a"])({},n),{},{id:u.name}),r("createEntry",n),e.abrupt("return",u.name);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,R.delete("/entries/".concat(n,".json"));case 3:return r("deleteEntry",n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=(n("4de4"),n("caad"),n("2532"),n("7db0"),function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 0===t.length?e.entries:e.entries.filter((function(e){return e.text.toLowerCase().includes(t.toLocaleLowerCase())}))}}),N=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=e.entries.find((function(e){return e.id===t}));if(n)return Object(g["a"])({},n)}},P=n("2909"),I=(n("99af"),n("d81d"),function(e,t){e.entries=[].concat(Object(P["a"])(e.entries),Object(P["a"])(t)),e.isLoading=!1}),U=function(e,t){var n=e.entries.map((function(e){return e.id})).indexOf(t.id);e.entries[n]=t},A=function(e,t){e.entries.unshift(t)},_=function(e,t){e.entries=e.entries.filter((function(e){return e.id!==t}))},C=function(e){e.entries=[]},M={namespaced:!0,actions:r,getters:o,mutations:a,state:B},q=M,J=function(){return{status:"authenticating",user:null,idToken:null,refreshToken:null}},H=O.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/accounts",params:{key:"AIzaSyBmuOJSUn8T3BbKbGXiJIN_PxjRTHc7Iqk"}}),K=H,z=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,u,i,c,s,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.name,a=n.email,u=n.password,e.prev=2,e.next=5,K.post(":signUp",{email:a,password:u,returnSecureToken:!0});case 5:return i=e.sent,c=i.data,s=c.idToken,d=c.refreshToken,e.next=10,K.post(":update",{displayName:o,idToken:s});case 10:return delete n.password,r("loginUser",{user:n,idToken:s,refreshToken:d}),e.abrupt("return",{ok:!0});case 15:return e.prev=15,e.t0=e["catch"](2),e.abrupt("return",{ok:!1,message:e.t0.response.data.error.message});case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,u,i,c,s,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=n.email,a=n.password,e.prev=2,e.next=5,K.post(":signInWithPassword",{email:o,password:a,returnSecureToken:!0});case 5:return u=e.sent,i=u.data,c=i.displayName,s=i.idToken,d=i.refreshToken,n.name=c,r("loginUser",{user:n,idToken:s,refreshToken:d}),e.abrupt("return",{ok:!0});case 13:return e.prev=13,e.t0=e["catch"](2),e.abrupt("return",{ok:!1,message:e.t0.response.data.error.message});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}(),G=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t){var n,r,o,a,u,i,c,s,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.commit,r=localStorage.getItem("idToken"),o=localStorage.getItem("refreshToken"),r){e.next=6;break}return n("logout"),e.abrupt("return",{ok:!1,message:"No hay token"});case 6:return e.prev=6,e.next=9,K.post(":lookup",{idToken:r});case 9:return a=e.sent,u=a.data,i=u.users[0],c=i.displayName,s=i.email,d={name:c,email:s},n("loginUser",{user:d,idToken:r,refreshToken:o}),e.abrupt("return",{ok:!0});case 17:return e.prev=17,e.t0=e["catch"](6),n("logout"),e.abrupt("return",{ok:!1,message:e.t0.response.data.error.message});case 21:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e){return e.status},X=function(e){var t;return(null===(t=e.user)||void 0===t?void 0:t.name)||""},Q=function(e,t){var n=t.user,r=t.idToken,o=t.refreshToken;r&&(localStorage.setItem("idToken",r),e.idToken=r),o&&(localStorage.setItem("refreshToken",o),e.refreshToken=o),e.user=n,e.status="authenticated"},V=function(e){e.user=null,e.idToken=null,e.refreshToken=null,e.status="not-authenticated",localStorage.removeItem("idToken"),localStorage.removeItem("refreshToken")},Y={namespaced:!0,actions:u,getters:i,mutations:c,state:J},Z=Y,$=Object(w["a"])({modules:{auth:Z,journal:q}}),ee=$,te=function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(t,n,r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee.dispatch("auth/checkAuth");case 2:o=e.sent,a=o.ok,a?r():r({name:"login"});case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),ne=te,re=[Object(g["a"])({path:"/daybook",beforeEnter:[ne]},v),Object(g["a"])({path:"/auth"},k),{path:"/:pathMatch(.*)*",redirect:{name:"login"}}],oe=Object(y["a"])({history:Object(y["b"])(),routes:re}),ae=oe;n("3c61");Object(s["c"])(m).use(ee).use(ae).mount("#app")}});
//# sourceMappingURL=app.8bc00f72.js.map