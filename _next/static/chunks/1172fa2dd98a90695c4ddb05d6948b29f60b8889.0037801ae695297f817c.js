(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/a9y":function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),u=n("tCBg"),s=n("T0f4");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var a=n("AroE");t.__esModule=!0,t.default=void 0;var l=a(n("q1tI")),f=a(n("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var h=function(e){i(n,e);var t=c(n);function n(){return r(this,n),t.apply(this,arguments)}return o(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return l.default.createElement("div",{style:y.error},l.default.createElement(f.default,null,l.default.createElement("title",null,e,": ",t)),l.default.createElement("div",null,l.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?l.default.createElement("h1",{style:y.h1},e):null,l.default.createElement("div",{style:y.desc},l.default.createElement("h2",{style:y.h2},t,"."))))}}]),n}(l.default.Component);t.default=h,h.displayName="ErrorPage",h.getInitialProps=p,h.origGetInitialProps=p;var y={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),u=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=u},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},MX0m:function(e,t,n){e.exports=n("3niX")},R8uD:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r,u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};var c,a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof s?s:"undefined"!==typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,i,u,c="object",a=function(e){return e&&e.Math==Math&&e},l=a(typeof globalThis==c&&globalThis)||a(typeof window==c&&window)||a(typeof self==c&&self)||a(typeof n==c&&n)||Function("return this")(),f=function(e){try{return!!e()}catch(t){return!0}},d=!f((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),p={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,y={f:h&&!p.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:p},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},v={}.toString,g="".split,_=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return v.call(e).slice(8,-1)}(e)?g.call(e,""):Object(e)}:Object,E=function(e){return _(function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}(e))},S=function(e){return"object"===typeof e?null!==e:"function"===typeof e},b=function(e,t){if(!S(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!S(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!S(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!S(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},T={}.hasOwnProperty,O=function(e,t){return T.call(e,t)},I=l.document,w=S(I)&&S(I.createElement),A=function(e){return w?I.createElement(e):{}},D=!d&&!f((function(){return 7!=Object.defineProperty(A("div"),"a",{get:function(){return 7}}).a})),R=Object.getOwnPropertyDescriptor,j={f:d?R:function(e,t){if(e=E(e),t=b(t,!0),D)try{return R(e,t)}catch(n){}if(O(e,t))return m(!y.f.call(e,t),e[t])}},N=function(e){if(!S(e))throw TypeError(String(e)+" is not an object");return e},x=Object.defineProperty,L={f:d?x:function(e,t,n){if(N(e),t=b(t,!0),N(n),D)try{return x(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=d?function(e,t,n){return L.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},C=function(e,t){try{P(l,e,t)}catch(n){l[e]=t}return t},M=r((function(e){var t="__core-js_shared__",n=l[t]||C(t,{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})})),k=M("native-function-to-string",Function.toString),H=l.WeakMap,B="function"===typeof H&&/native code/.test(k.call(H)),F=0,z=Math.random(),G=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++F+z).toString(36)},K=M("keys"),Y=function(e){return K[e]||(K[e]=G(e))},q={},U=l.WeakMap;if(B){var V=new U,W=V.get,Q=V.has,X=V.set;o=function(e,t){return X.call(V,e,t),t},i=function(e){return W.call(V,e)||{}},u=function(e){return Q.call(V,e)}}else{var Z=Y("state");q[Z]=!0,o=function(e,t){return P(e,Z,t),t},i=function(e){return O(e,Z)?e[Z]:{}},u=function(e){return O(e,Z)}}var J={set:o,get:i,has:u,enforce:function(e){return u(e)?i(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!S(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=J.get,n=J.enforce,r=String(k).split("toString");M("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||P(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==l?(u?!c&&e[t]&&(s=!0):delete e[t],s?e[t]=o:P(e,t,o)):s?e[t]=o:C(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k.call(this)}))})),ee=l,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(l[e]):ee[e]&&ee[e][t]||l[e]&&l[e][t]},re=Math.ceil,oe=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ue=Math.min,se=Math.max,ce=Math.min,ae=function(e){return function(t,n,r){var o,i,u=E(t),s=(o=u.length)>0?ue(ie(o),9007199254740991):0,c=function(e,t){var n=ie(e);return n<0?se(n+t,0):ce(n,t)}(r,s);if(e&&n!=n){for(;s>c;)if((i=u[c++])!=i)return!0}else for(;s>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}},le={includes:ae(!0),indexOf:ae(!1)},fe=le.indexOf,de=function(e,t){var n,r=E(e),o=0,i=[];for(n in r)!O(q,n)&&O(r,n)&&i.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~fe(i,n)||i.push(n));return i},pe=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=pe.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return de(e,he)}},me={f:Object.getOwnPropertySymbols},ve=ne("Reflect","ownKeys")||function(e){var t=ye.f(N(e)),n=me.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=ve(t),r=L.f,o=j.f,i=0;i<n.length;i++){var u=n[i];O(e,u)||r(e,u,o(t,u))}},_e=/#|\.prototype\./,Ee=function(e,t){var n=be[Se(e)];return n==Oe||n!=Te&&("function"==typeof t?f(t):!!t)},Se=Ee.normalize=function(e){return String(e).replace(_e,".").toLowerCase()},be=Ee.data={},Te=Ee.NATIVE="N",Oe=Ee.POLYFILL="P",Ie=Ee,we=j.f,Ae=function(e,t){var n,r,o,i,u,s=e.target,c=e.global,a=e.stat;if(n=c?l:a?l[s]||C(s,{}):(l[s]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=we(n,r))&&u.value:n[r],!Ie(c?r:s+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof i===typeof o)continue;ge(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),$(n,r,i,e)}},De=Object.keys||function(e){return de(e,pe)},Re=y.f,je=function(e){return function(t){for(var n,r=E(t),o=De(r),i=o.length,u=0,s=[];i>u;)n=o[u++],d&&!Re.call(r,n)||s.push(e?[n,r[n]]:r[n]);return s}},Ne={entries:je(!0),values:je(!1)}.values;Ae({target:"Object",stat:!0},{values:function(e){return Ne(e)}});ee.Object.values;var xe=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Le=l.Symbol,Pe=M("wks"),Ce=d?Object.defineProperties:function(e,t){N(e);for(var n,r=De(t),o=r.length,i=0;o>i;)L.f(e,n=r[i++],t[n]);return e},Me=ne("document","documentElement"),ke=Y("IE_PROTO"),He=function(){},Be=function(){var e,t=A("iframe"),n=pe.length;for(t.style.display="none",Me.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Be=e.F;n--;)delete Be.prototype[pe[n]];return Be()},Fe=Object.create||function(e,t){var n;return null!==e?(He.prototype=N(e),n=new He,He.prototype=null,n[ke]=e):n=Be(),void 0===t?n:Ce(n,t)};q[ke]=!0;var ze,Ge=Pe[ze="unscopables"]||(Pe[ze]=xe&&Le[ze]||(xe?Le:G)("Symbol."+ze)),Ke=Array.prototype;void 0==Ke[Ge]&&P(Ke,Ge,Fe(null));var Ye,qe=le.includes;Ae({target:"Array",proto:!0},{includes:function(e){return qe(this,e,arguments.length>1?arguments[1]:void 0)}}),Ye="includes",Ke[Ge][Ye]=!0;var Ue,Ve,We,Qe=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Xe=Function.call;Ue="includes",Qe(Xe,l["Array"].prototype[Ue],Ve);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(We||(We={}));var Ze,Je=We;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Ze||(Ze={}));var $e,et=Ze,tt=[Je.PARAGRAPH,Je.HEADING_1,Je.HEADING_2,Je.HEADING_3,Je.HEADING_4,Je.HEADING_5,Je.HEADING_6,Je.OL_LIST,Je.UL_LIST,Je.HR,Je.QUOTE,Je.EMBEDDED_ENTRY,Je.EMBEDDED_ASSET],nt=[Je.HR,Je.EMBEDDED_ENTRY,Je.EMBEDDED_ASSET],rt=(($e={})[Je.OL_LIST]=[Je.LIST_ITEM],$e[Je.UL_LIST]=[Je.LIST_ITEM],$e[Je.LIST_ITEM]=tt.slice(),$e[Je.QUOTE]=[Je.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Je).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Je,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(c=a)&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")&&c.default;var l,f,d=a.BLOCKS,p=(a.CONTAINERS,a.INLINES),h=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function m(e,t){return e.map((function(e,n){return r=v(e,t),i=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:i}):r;var r,i}))}function v(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var u=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):i.createElement(i.Fragment,null,u)}var g=((l={})[d.DOCUMENT]=function(e,t){return t},l[d.PARAGRAPH]=function(e,t){return i.createElement("p",null,t)},l[d.HEADING_1]=function(e,t){return i.createElement("h1",null,t)},l[d.HEADING_2]=function(e,t){return i.createElement("h2",null,t)},l[d.HEADING_3]=function(e,t){return i.createElement("h3",null,t)},l[d.HEADING_4]=function(e,t){return i.createElement("h4",null,t)},l[d.HEADING_5]=function(e,t){return i.createElement("h5",null,t)},l[d.HEADING_6]=function(e,t){return i.createElement("h6",null,t)},l[d.EMBEDDED_ENTRY]=function(e,t){return i.createElement("div",null,t)},l[d.UL_LIST]=function(e,t){return i.createElement("ul",null,t)},l[d.OL_LIST]=function(e,t){return i.createElement("ol",null,t)},l[d.LIST_ITEM]=function(e,t){return i.createElement("li",null,t)},l[d.QUOTE]=function(e,t){return i.createElement("blockquote",null,t)},l[d.HR]=function(){return i.createElement("hr",null)},l[p.ASSET_HYPERLINK]=function(e){return E(p.ASSET_HYPERLINK,e)},l[p.ENTRY_HYPERLINK]=function(e){return E(p.ENTRY_HYPERLINK,e)},l[p.EMBEDDED_ENTRY]=function(e){return E(p.EMBEDDED_ENTRY,e)},l[p.HYPERLINK]=function(e,t){return i.createElement("a",{href:e.data.uri},t)},l),_=((f={})[h.BOLD]=function(e){return i.createElement("b",null,e)},f[h.ITALIC]=function(e){return i.createElement("i",null,e)},f[h.UNDERLINE]=function(e){return i.createElement("u",null,e)},f[h.CODE]=function(e){return i.createElement("code",null,e)},f);function E(e,t){return i.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?v(e,{renderNode:u({},g,t.renderNode),renderMark:u({},_,t.renderMark),renderText:t.renderText}):null}}).call(this,n("ntbh"))},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,u=void 0!==i&&i,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:u}),this._sheet.inject(),r&&"boolean"===typeof u&&(this._sheet.setOptimizeForSpeed(u),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=u},TWYl:function(e,t,n){"use strict";var r,o=n("o0o1"),i=n.n(o),u=n("yXPU"),s=n.n(u),c=n("lSNA"),a=n.n(c),l=n("MX0m"),f=n.n(l),d=n("q1tI"),p=n.n(d),h=n("g4pe"),y=n.n(h),m=n("eomm"),v=n.n(m),g=n("20a2"),_=n("ckSu"),E=n("jzUF"),S=n("HBqk"),b=n("9Koi"),T=n("R/WZ"),O=n("/iMr"),I=n("tpqs"),w=n.n(I),A=n("4W79"),D=n("7Qib"),R=n("vbKG"),j=n("R8uD"),N=p.a.createElement,x=function(e){var t=e.quoteText,n=e.quoter;return N("blockquote",null,t,N("footer",null,N("cite",null,n)))},L=p.a.createElement,P={renderNode:(r={},a()(r,R.BLOCKS.EMBEDDED_ASSET,(function(e){var t=e.data.target.fields,n=t.title,r=t.description,o=t.file,i=o.contentType;switch(i.split("/")[0]){case"image":return L(p.a.Fragment,null,L("img",{title:n||null,alt:r||null,src:"https:"+o.url,className:"jsx-3061564172"}),L(f.a,{id:"3061564172"},["img.jsx-3061564172{max-width:100%;margin:5px auto;display:block;}","@media (min-width:960px){img.jsx-3061564172{max-width:70%;margin-top:12px;margin-bottom:12px;}}"]));case"application":return L("a",{alt:r||null,href:o.url},n||o.details.fileName);default:return L("span",{style:{backgroundColor:"red",color:"white"}}," ",i," embedded asset"," ")}})),a()(r,R.BLOCKS.EMBEDDED_ENTRY,(function(e){var t=e.data.target.fields;switch(e.data.target.sys.contentType.sys.id){case"blockquote":return L("div",null,L(x,{quoteText:t.quoteText,quoter:t.quoter}));default:return L("div",null,"??????????????? ",title," ")}})),r)},C=function(e){return Object(j.documentToReactComponents)(e,P)},M=n("9rse"),k=p.a.createElement;var H=function(e){var t=e.label;return p.a.useEffect((function(){try{addthis.layers.refresh&&addthis.layers.refresh()}catch(e){console.log(e)}}),[]),k("div",{className:"jsx-204323243 share-buttons"},k("p",{className:"jsx-204323243"},t),k("div",{className:"jsx-204323243 addthis_inline_share_toolbox"}),k(f.a,{id:"204323243"},[".share-buttons.jsx-204323243{font-family:'Arial',sans-serif;background-color:white;padding:40px 0;text-align:center;}",".share-buttons.jsx-204323243>p.jsx-204323243{text-transform:uppercase;font-weight:bold;font-size:17px;}"]))},B=n("cFdL"),F=n("dnIz"),z=p.a.createElement,G=Object(T.a)((function(e){return{marginHorizontal:a()({},e.breakpoints.up("md"),{margin:"0 40px"})}})),K=function(e){var t=e.item;if(!t)return z(v.a,{statusCode:404});var n=G(),r=Object(b.a)(["post","app"]).t,o=new Date(t.sys.createdAt).toDateString(),i=new Date(t.sys.updatedAt).toDateString(),u=t.fields,s=u.title,c=u.body;return z(M.a.Layout,null,z(E.a,{style:B.a.container},z(y.a,null,z("title",null,s," - ",r("app:name")),z("meta",{name:"description",content:Object(D.e)(Object(O.documentToPlainTextString)(c))})),z(S.b,{title:z(E.a,{style:Y.titleView},z(S.g,{h1:!0,style:Y.title},s),z(E.a,{style:Y.dates},z(S.g,{style:Y.date},r("post:created"),o),z(S.g,{style:Y.dateSeparator},"|"),z(S.g,{style:Y.date},r("post:updated"),i)),z(S.c,null)),containerStyle:Y.cardContainer},z(E.a,{style:Y.bodyView},z("div",{className:"jsx-3872865712 "+(n.marginHorizontal||"")},C(c),z(f.a,{id:"3872865712"},["@media (max-width:600px){ul,ol{padding-inline-start:15px;}}"])),z(H,{label:r("post:pleaseShare")})))))};K.getInitialProps=function(){var e=s()(i.a.mark((function e(t){var n,r,o,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.pathname,o=n.slug,u=w.a.basename(w.a.dirname(r)),e.next=5,A.a.getEntries({content_type:Object(D.b)(u),"fields.slug[in]":o});case 5:return s=e.sent,e.abrupt("return",{item:s.items[0]});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=Object(g.withRouter)(K);var Y=_.a.create({cardContainer:{margin:0},titleView:{paddingVertical:10,paddingHorizontal:10},title:{fontWeight:"700",lineHeight:35,paddingBottom:15},dates:{flexDirection:"row",paddingBottom:20},date:{color:F.a.secondaryText},dateSeparator:{paddingHorizontal:8},bodyView:{marginTop:10,marginBottom:100}})},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?r:s,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;u(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",u("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(u(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];u(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&u(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},eomm:function(e,t,n){e.exports=n("/a9y")},tpqs:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:e.cwd();if("string"!==typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,o="/"===u.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),u="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&u&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),u=Math.min(o.length,i.length),s=u,c=0;c<u;c++)if(o[c]!==i[c]){s=c;break}var a=[];for(c=s;c<o.length;c++)a.push("..");return(a=a.concat(i.slice(s))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,u=e.length-1;u>=0;--u){var s=e.charCodeAt(u);if(47!==s)-1===r&&(o=!1,r=u+1),46===s?-1===t?t=u:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=u+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},vbKG:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,i,u,s="object",c=function(e){return e&&e.Math==Math&&e},a=c(typeof globalThis==s&&globalThis)||c(typeof window==s&&window)||c(typeof self==s&&self)||c(typeof n==s&&n)||Function("return this")(),l=function(e){try{return!!e()}catch(t){return!0}},f=!l((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h={f:p&&!d.call({1:2},1)?function(e){var t=p(this,e);return!!t&&t.enumerable}:d},y=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},m={}.toString,v="".split,g=l((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return m.call(e).slice(8,-1)}(e)?v.call(e,""):Object(e)}:Object,_=function(e){return g(function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}(e))},E=function(e){return"object"===typeof e?null!==e:"function"===typeof e},S=function(e,t){if(!E(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!E(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!E(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,T=function(e,t){return b.call(e,t)},O=a.document,I=E(O)&&E(O.createElement),w=function(e){return I?O.createElement(e):{}},A=!f&&!l((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),D=Object.getOwnPropertyDescriptor,R={f:f?D:function(e,t){if(e=_(e),t=S(t,!0),A)try{return D(e,t)}catch(n){}if(T(e,t))return y(!h.f.call(e,t),e[t])}},j=function(e){if(!E(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,x={f:f?N:function(e,t,n){if(j(e),t=S(t,!0),j(n),A)try{return N(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},L=f?function(e,t,n){return x.f(e,t,y(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{L(a,e,t)}catch(n){a[e]=t}return t},C=r((function(e){var t="__core-js_shared__",n=a[t]||P(t,{});(e.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"\xa9 2019 Denis Pushkarev (zloirock.ru)"})})),M=C("native-function-to-string",Function.toString),k=a.WeakMap,H="function"===typeof k&&/native code/.test(M.call(k)),B=0,F=Math.random(),z=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+F).toString(36)},G=C("keys"),K=function(e){return G[e]||(G[e]=z(e))},Y={},q=a.WeakMap;if(H){var U=new q,V=U.get,W=U.has,Q=U.set;o=function(e,t){return Q.call(U,e,t),t},i=function(e){return V.call(U,e)||{}},u=function(e){return W.call(U,e)}}else{var X=K("state");Y[X]=!0,o=function(e,t){return L(e,X,t),t},i=function(e){return T(e,X)?e[X]:{}},u=function(e){return T(e,X)}}var Z={set:o,get:i,has:u,enforce:function(e){return u(e)?i(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!E(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},J=r((function(e){var t=Z.get,n=Z.enforce,r=String(M).split("toString");C("inspectSource",(function(e){return M.call(e)})),(e.exports=function(e,t,o,i){var u=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,c=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||T(o,"name")||L(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==a?(u?!c&&e[t]&&(s=!0):delete e[t],s?e[t]=o:L(e,t,o)):s?e[t]=o:P(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||M.call(this)}))})),$=a,ee=function(e){return"function"==typeof e?e:void 0},te=function(e,t){return arguments.length<2?ee($[e])||ee(a[e]):$[e]&&$[e][t]||a[e]&&a[e][t]},ne=Math.ceil,re=Math.floor,oe=function(e){return isNaN(e=+e)?0:(e>0?re:ne)(e)},ie=Math.min,ue=Math.max,se=Math.min,ce=function(e){return function(t,n,r){var o,i,u=_(t),s=(o=u.length)>0?ie(oe(o),9007199254740991):0,c=function(e,t){var n=oe(e);return n<0?ue(n+t,0):se(n,t)}(r,s);if(e&&n!=n){for(;s>c;)if((i=u[c++])!=i)return!0}else for(;s>c;c++)if((e||c in u)&&u[c]===n)return e||c||0;return!e&&-1}},ae={includes:ce(!0),indexOf:ce(!1)},le=ae.indexOf,fe=function(e,t){var n,r=_(e),o=0,i=[];for(n in r)!T(Y,n)&&T(r,n)&&i.push(n);for(;t.length>o;)T(r,n=t[o++])&&(~le(i,n)||i.push(n));return i},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],pe=de.concat("length","prototype"),he={f:Object.getOwnPropertyNames||function(e){return fe(e,pe)}},ye={f:Object.getOwnPropertySymbols},me=te("Reflect","ownKeys")||function(e){var t=he.f(j(e)),n=ye.f;return n?t.concat(n(e)):t},ve=function(e,t){for(var n=me(t),r=x.f,o=R.f,i=0;i<n.length;i++){var u=n[i];T(e,u)||r(e,u,o(t,u))}},ge=/#|\.prototype\./,_e=function(e,t){var n=Se[Ee(e)];return n==Te||n!=be&&("function"==typeof t?l(t):!!t)},Ee=_e.normalize=function(e){return String(e).replace(ge,".").toLowerCase()},Se=_e.data={},be=_e.NATIVE="N",Te=_e.POLYFILL="P",Oe=_e,Ie=R.f,we=function(e,t){var n,r,o,i,u,s=e.target,c=e.global,l=e.stat;if(n=c?a:l?a[s]||P(s,{}):(a[s]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(u=Ie(n,r))&&u.value:n[r],!Oe(c?r:s+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i===typeof o)continue;ve(i,o)}(e.sham||o&&o.sham)&&L(i,"sham",!0),J(n,r,i,e)}},Ae=Object.keys||function(e){return fe(e,de)},De=h.f,Re=function(e){return function(t){for(var n,r=_(t),o=Ae(r),i=o.length,u=0,s=[];i>u;)n=o[u++],f&&!De.call(r,n)||s.push(e?[n,r[n]]:r[n]);return s}},je={entries:Re(!0),values:Re(!1)}.values;we({target:"Object",stat:!0},{values:function(e){return je(e)}});$.Object.values;var Ne=!!Object.getOwnPropertySymbols&&!l((function(){return!String(Symbol())})),xe=a.Symbol,Le=C("wks"),Pe=f?Object.defineProperties:function(e,t){j(e);for(var n,r=Ae(t),o=r.length,i=0;o>i;)x.f(e,n=r[i++],t[n]);return e},Ce=te("document","documentElement"),Me=K("IE_PROTO"),ke=function(){},He=function(){var e,t=w("iframe"),n=de.length;for(t.style.display="none",Ce.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),He=e.F;n--;)delete He.prototype[de[n]];return He()},Be=Object.create||function(e,t){var n;return null!==e?(ke.prototype=j(e),n=new ke,ke.prototype=null,n[Me]=e):n=He(),void 0===t?n:Pe(n,t)};Y[Me]=!0;var Fe,ze=Le[Fe="unscopables"]||(Le[Fe]=Ne&&xe[Fe]||(Ne?xe:z)("Symbol."+Fe)),Ge=Array.prototype;void 0==Ge[ze]&&L(Ge,ze,Be(null));var Ke,Ye=ae.includes;we({target:"Array",proto:!0},{includes:function(e){return Ye(this,e,arguments.length>1?arguments[1]:void 0)}}),Ke="includes",Ge[ze][Ke]=!0;var qe,Ue,Ve,We=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Qe=Function.call;qe="includes",We(Qe,a["Array"].prototype[qe],Ue);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Ve||(Ve={}));var Xe,Ze=Ve;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var Je,$e=Xe,et=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],tt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=((Je={})[Ze.OL_LIST]=[Ze.LIST_ITEM],Je[Ze.UL_LIST]=[Ze.LIST_ITEM],Je[Ze.LIST_ITEM]=et.slice(),Je[Ze.QUOTE]=[Ze.PARAGRAPH],Je);var rt=Object.freeze({isInline:function(e){return Object.values($e).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=nt,t.INLINES=$e,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=et,t.VOID_BLOCKS=tt,t.helpers=rt}).call(this,n("ntbh"))}}]);