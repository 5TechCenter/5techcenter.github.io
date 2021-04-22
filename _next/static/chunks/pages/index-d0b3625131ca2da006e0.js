_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return g})),n.d(t,"bindActionCreators",(function(){return f})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return c}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var u=e,s=t,l=[],f=l,d=!1;function p(){f===l&&(f=l.slice())}function b(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return p(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,p();var n=f.indexOf(e);f.splice(n,1),l=null}}}function g(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,s=u(s,e)}finally{d=!1}for(var t=l=f,n=0;n<t.length;n++){(0,t[n])()}return e}function y(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");u=e,g({type:i.REPLACE})}function v(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return g({type:i.INIT}),(o={dispatch:g,subscribe:h,getState:b,replaceReducer:y})[r.a]=v,o}function u(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<c.length;i++){var s=c[i],l=n[s],f=e[s],d=l(f,t);if("undefined"===typeof d){var p=u(s,t);throw new Error(p)}o[s]=d,r=r||d!==f}return(r=r||c.length!==Object.keys(e).length)?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"===typeof e)return l(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=l(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return b({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},B5Ud:function(e,t,n){"use strict";var r=n("vJKn"),o=n("1ccW"),i=n("/GRZ"),a=n("i2R6"),c=n("48fX"),u=n("tCBg"),s=n("T0f4"),l=n("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var d=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var p=d(n("q1tI")),b=n("g/15");function h(e){return g.apply(this,arguments)}function g(){return(g=l(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,b.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=b.AppInitialProps,t.NextWebVitalsMetric=b.NextWebVitalsMetric;var y=function(e){c(n,e);var t=f(n);function n(){return i(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,i=e.__N_SSG,a=e.__N_SSP;return p.default.createElement(n,o({},r,i||a?{}:{url:v(t)}))}}]),n}(p.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),o=n.n(r),i=n("yXPU"),a=n.n(i),c=n("q1tI"),u=n.n(c),s=n("lSNA"),l=n.n(s),f=n("QILm"),d=n.n(f),p=(n("17x9"),u.a.createContext(null));var b=function(e){e()},h={notify:function(){}};function g(){var e=b,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var y=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=h,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=g())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=h)},e}();var v=function(e){var t=e.store,n=e.context,r=e.children,o=Object(c.useMemo)((function(){var e=new y(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),i=Object(c.useMemo)((function(){return t.getState()}),[t]);Object(c.useEffect)((function(){var e=o.subscription;return e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,i]);var a=n||p;return u.a.createElement(a.Provider,{value:o},r)},m=(n("wx14"),n("zLVn"),n("2mql"),n("TOwV"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?c.useLayoutEffect:c.useEffect);var w=n("ANjH");function O(){return Object(c.useContext)(p)}function S(e){void 0===e&&(e=p);var t=e===p?O:function(){return Object(c.useContext)(e)};return function(){return t().store}}var j=S();function x(e){void 0===e&&(e=p);var t=e===p?j:S(e);return function(){return t().dispatch}}var P=x(),E=function(e,t){return e===t};function C(e){void 0===e&&(e=p);var t=e===p?O:function(){return Object(c.useContext)(e)};return function(e,n){void 0===n&&(n=E);var r=t(),o=function(e,t,n,r){var o,i=Object(c.useReducer)((function(e){return e+1}),0)[1],a=Object(c.useMemo)((function(){return new y(n,r)}),[n,r]),u=Object(c.useRef)(),s=Object(c.useRef)(),l=Object(c.useRef)(),f=Object(c.useRef)(),d=n.getState();try{o=e!==s.current||d!==l.current||u.current?e(d):f.current}catch(p){throw u.current&&(p.message+="\nThe error may be correlated with this previous error:\n"+u.current.stack+"\n\n"),p}return m((function(){s.current=e,l.current=d,f.current=o,u.current=void 0})),m((function(){function e(){try{var e=s.current(n.getState());if(t(e,f.current))return;f.current=e}catch(p){u.current=p}i()}return a.onStateChange=e,a.trySubscribe(),e(),function(){return a.tryUnsubscribe()}}),[n,a]),o}(e,n,r.store,r.subscription);return Object(c.useDebugValue)(o),o}}var T,_=C(),k=n("i8i4");T=k.unstable_batchedUpdates,b=T;var I=n("5HXA"),D=n("LvDl"),R="fetch_blogs",N="fetch_blog",L="set_blogs",B="fetch_infos",A="fetch_info",z="set_infos";function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=Object(w.combineReducers)({blogs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case R:case L:return W(W({},e),Object(D.keyBy)(n,"fields.slug"));case N:return W(W({},e),{},l()({},n.fields.slug,n));default:return e}},infos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case B:case z:return H(H({},e),Object(D.keyBy)(n,"fields.slug"));case A:return H(H({},e),{},l()({},n.fields.slug,n));default:return e}}}),X=(Object(w.createStore)(M),n("8Bbg"),u.a.createElement);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K,G=function(e){return K||(K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(w.createStore)(M,e,Object(I.composeWithDevTools)(Object(w.applyMiddleware)()))}(e)),K},J=n("7Qib"),Y=n("4W79");function Q(e){return Z.apply(this,arguments)}function Z(){return(Z=a()(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.getEntries({content_type:t});case 2:if(!(n=e.sent).items){e.next=5;break}return e.abrupt("return",n.items);case 5:console.log("Error getting Entries with the content type ID ".concat(t,"."));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(Object(J.b)(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee={getPosts:function(e){return $.apply(this,arguments)}},te=function(e){var t,n,r=e+"s",o="set"+r[0].toUpperCase()+r.slice(1);switch(e){case"info":n=z;break;default:n=L}var i=_((function(e){return e[r]})),a=P();return t={},l()(t,r,i),l()(t,o,(function(e){a({type:n,payload:e})})),t},ne=n("9rse"),re=n("uXPr"),oe=n("XwJz"),ie=n("ckSu"),ae=n("IIls"),ce=n("jzUF"),ue=n("9Koi"),se=n("dkpl"),le=n("/8/S"),fe=n("XMQk"),de=n("4YbZ"),pe=u.a.createElement;function be(e){var t=e.children,n=e.onPress,r=e.style;return"web"===oe.a.OS?pe(ae.a,{onPress:n,style:r},t):pe(de.a,{onPress:n,style:r},t)}var he=n("pVnL"),ge=n.n(he),ye=c.createElement;function ve(e){return ye(ae.a,ge()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}var me=n("kipq"),we=n("xLLm");function Oe(){return(Oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Se=u.a.forwardRef((function(e,t){var n=e.style,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["style"]);return u.a.createElement(ce.a,Oe({},r,{ref:t,style:ie.a.compose(xe.root,n)}))}));Se.displayName="SafeAreaView";var je=we.canUseDOM&&window.CSS&&window.CSS.supports&&window.CSS.supports("top: constant(safe-area-inset-top)")?"constant":"env",xe=ie.a.create({root:{paddingTop:je+"(safe-area-inset-top)",paddingRight:je+"(safe-area-inset-right)",paddingBottom:je+"(safe-area-inset-bottom)",paddingLeft:je+"(safe-area-inset-left)"}}),Pe=Se,Ee=n("EqL9");var Ce=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.ignoreWarnings=function(){},r.prototype.render=function(){return u.a.createElement(Ee.a,this.props)},r}(u.a.Component),Te=n("SOH5"),_e=u.a.createElement;function ke(e){var t=e.data,n=Object(ue.a)("post").t;return t?0===t.length&&_e(ce.a,{style:Ie.view},_e(ae.a,{style:Ie.text},n("noPost"))):_e(ce.a,{style:Ie.view},_e(Te.a,{size:"large"}))}var Ie=ie.a.create({view:{height:200,alignItems:"center",justifyContent:"center"},text:{fontSize:24}}),De=n("HBqk"),Re=n("/iMr"),Ne=n("R/WZ"),Le=n("tKL9"),Be=u.a.createElement,Ae=Object(Ne.a)({link:{textDecoration:"none !important"}});function ze(e){var t=e.children,n=e.href,r=e.as,o=e.onPress,i=d()(e,["children","href","as","onPress"]),a=Ae();return"web"===oe.a.OS?Be(Le.a,ge()({href:n,as:r,className:a.link},i),t):Be(de.a,ge()({onPress:o},i),t)}var Ve=u.a.createElement,We="blog";function Ue(e){var t=e.sys,n=e.fields,r=e.navigation,o=Object(ue.a)("post").t,i=new Date(t.createdAt).toDateString(),a=n.title,c=n.slug,u=n.body,s="".concat(o("created")," ").concat(i),l="/".concat(We,"/").concat(c),f=Object(J.a)(u);return Ve(ze,{href:"/".concat(We,"/[slug]"),as:l,onPress:function(){return r.navigate("Blog",{slug:c})}},Ve(De.f,{title:f?Ve(De.e,{source:{uri:"https:"+f.file.url},style:He.titleImage}):null,subtitle:Ve(ce.a,null,Ve(ce.a,{style:He.subtitleTitleView},Ve(De.g,{h4:!0,style:He.subtitleTitle},a),Ve(De.g,{style:He.subtitleCreated},s),Ve(De.d,{name:"chevron-right",containerStyle:He.subtitleChevronContainer})),Ve(De.c,null),Ve(ce.a,null,Ve(De.g,{style:He.subtitleDesc},Object(J.d)(Object(Re.documentToPlainTextString)(u),500),".."),Ve(De.d,{name:"signal-cellular-4-bar",containerStyle:He.subtitleBar,size:30}))),bottomDivider:!0,style:He.listItem,containerStyle:He.listItemContainer}))}var He=ie.a.create({listItem:{marginBottom:20},listItemContainer:{padding:0},titleImage:{width:"100%",height:300},subtitleTitleView:{marginVertical:12,marginHorizontal:16},subtitleTitle:{fontWeight:"bold",paddingHorizontal:12,paddingBottom:4},subtitleCreated:{fontSize:12},subtitleChevronContainer:{position:"absolute",right:0,top:"50%",marginTop:-12},subtitleDesc:{marginVertical:18,marginHorizontal:24},subtitleBar:{transform:[{rotate:"180deg"}],position:"absolute",top:0,left:0,opacity:.2}}),Me=u.a.createElement;function Xe(e){var t=e.data,n=e.navigation;return Me(Pe,{style:qe.container},t&&0!==t.length?Me(me.a,{data:t,renderItem:function(e){var t=e.item;return Me(Ue,ge()({},t,{navigation:n}))},keyExtractor:function(e){return e.sys.id}}):Me(ke,{data:t}))}Ce.ignoreWarnings(["VirtualizedLists should never be nested"]);var qe=ie.a.create({container:{flex:1,marginBottom:80}}),Fe=n("B+M5"),Ke=n("J4zp"),Ge=n.n(Ke),Je=n("dnIz"),Ye=u.a.createElement,Qe="info";function Ze(e){var t=e.sys,n=e.fields,r=e.navigation,o=u.a.useState(!1),i=Ge()(o,2),a=i[0],c=i[1],s=Object(ue.a)("post").t,l=new Date(t.createdAt).toDateString(),f=n.title,d=n.slug,p=n.body,b="".concat(s("created")," ").concat(l),h="/".concat(Qe,"/").concat(d),g=Object(J.a)(p),y={backgroundColor:"rgba(0, 0, 0, ".concat(a?.5:.25,")")};return"web"===oe.a.OS&&(y.transitionDuration="0.5s"),Ye(ze,{href:"/".concat(Qe,"/[slug]"),as:h,onPress:function(){return r.navigate("Info",{slug:d})},onMouseEnter:function(){return c(!0)},onMouseLeave:function(){return c(!1)},style:{marginLeft:15,marginRight:15,marginBottom:5}},Ye(De.b,ge()({title:g?null:Ye(ce.a,{style:$e.view},Ye(De.g,{style:$e.viewTitle},f),Ye(De.g,{style:$e.viewCreated},b)),featuredTitle:f,featuredTitleStyle:$e.cardFeaturedTitle,featuredSubtitle:b},g?{image:{uri:"https:"+g.file.url}}:{},{imageStyle:y,containerStyle:$e.cardContainer}),Ye(De.g,{style:$e.description},Object(J.d)(Object(Re.documentToPlainTextString)(p),g?100:200),"..."),Ye(De.a,{icon:Ye(De.d,{name:"chevron-right",color:Je.a.secondaryText,containerStyle:$e.iconContainer}),buttonStyle:$e.button,titleStyle:$e.buttonTitle,title:s("readThis"),type:"outline"})))}var $e=ie.a.create({cardContainer:{width:300,margin:0},cardFeaturedTitle:{marginHorizontal:15},view:{paddingBottom:15},viewTitle:{fontSize:14,fontWeight:"bold",paddingBottom:4},viewCreated:{fontSize:10},description:{fontSize:12,marginBottom:10},button:{borderRadius:0,borderColor:Je.a.secondaryText},buttonTitle:{color:Je.a.secondaryText},iconContainer:{marginLeft:-20,marginRight:8}}),et=u.a.createElement;function tt(e){var t=e.data,n=e.navigation;return et(Pe,{style:nt.container},et(Fe.a,{horizontal:!0},t&&0!==t.length?et(ce.a,{style:nt.flatList},t.sort((function(e,t){return new Date(t.sys.createdAt)-new Date(e.sys.createdAt)})).map((function(e){return et(Ze,ge()({key:e.sys.id},e,{navigation:n}))}))):et(ke,{data:t})))}Ce.ignoreWarnings(["VirtualizedLists should never be nested"]);var nt=ie.a.create({container:{flex:1},flatList:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}),rt=n("KAy6"),ot=n.n(rt),it=Ee.a,at=u.a.createElement,ct=[{uri:"https://img.shields.io/badge/Runs%20with%20Expo-000.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000",alt:"Runs with Expo"},{uri:"https://img.shields.io/badge/Powered%20by%20Next.js-000?style=flat-square&logo=Next.js&labelColor=f3f3f3&logoColor=000",alt:"Powered by Next.js"}],ut={div:{display:"flex",justifyContent:"space-between"}};function st(){return at(ce.a,{style:ft.container},"web"===oe.a.OS?at("div",{style:ut.div},ct.map((function(e,t){return at("img",{key:t,src:e.uri,alt:e.alt})}))):at(it,{source:{html:Object(J.f)(ot.a.renderToStaticMarkup(at("div",{style:ut.div},ct.map((function(e,t){return at("img",{key:t,src:e.uri,alt:e.alt})})))))},startInLoadingState:!0}))}var lt,ft=ie.a.create({container:{height:35,width:295,marginVertical:10,alignSelf:"center"}}),dt=n("lARI"),pt=n("cFdL"),bt=function(){function e(){}return e.alert=function(){},e}(),ht=function(){function e(){}return e.isAvailable=function(){return void 0===lt&&(lt="function"===typeof document.queryCommandSupported&&document.queryCommandSupported("copy")),lt},e.getString=function(){return Promise.resolve("")},e.setString=function(e){var t=!1,n=document.body;if(n){var r=document.createElement("span");r.textContent=e,r.style.opacity="0",r.style.position="absolute",r.style.whiteSpace="pre-wrap",n.appendChild(r);var o=window.getSelection();o.removeAllRanges();var i=document.createRange();i.selectNodeContents(r),o.addRange(i);try{document.execCommand("copy"),t=!0}catch(a){}o.removeAllRanges(),n.removeChild(r)}return t},e}(),gt=n("Ckk/"),yt=n("epw2"),vt=n("FdVu"),mt=n("gUAv"),wt=n("C7Rh"),Ot=wt.a.get("window").width,St={window:{width:Ot,height:wt.a.get("window").height},isSmallDevice:Ot<375},jt=u.a.createElement;function xt(){se.a(dt["your-item-here"].link)}var Pt=ie.a.create({parent:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:20,marginBottom:70},child:{width:400,marginBottom:20,flexShrink:1},text:{fontWeight:"bold",marginBottom:5},textInput:{borderWidth:1,borderColor:Je.a.highlightBackground},buttonTitle:{fontSize:16}}),Et=function(){var e=le.default.manifest.extra.PUBLIC_URL+"/item-displays",t=Object(ue.a)("itemDisplays").t,n=u.a.useState('<div style="text-align: center;">\n  <iframe src="'.concat(e,'" style="height: 500px; width: 1000px;"></iframe>\n</div>')),r=Ge()(n,2),o=r[0],i=r[1];return jt(u.a.Fragment,null,"web"===oe.a.OS?jt(mt.a,{noHead:!0}):jt(it,{source:{uri:e},style:{height:St.window.height}}),jt(ce.a,{style:Pt.parent},jt(ce.a,{style:Pt.child},jt(De.g,{style:Pt.text},t("wantToEmbed")),jt(yt.a,{multiline:!0,numberOfLines:4,onChangeText:function(e){return i({text:e})},onFocus:function(){ht.setString(o),gt.a.dismiss(),"web"===oe.a.OS?alert(t("copied")):bt.alert(t("copied"))},value:o,style:Pt.textInput})),jt(ce.a,{style:Pt.child},jt(De.a,{title:t("placeModel"),type:"outline",onPress:xt,titleStyle:Pt.buttonTitle,disabled:vt.a.disabledListing}))))},Ct=c.createElement;function Tt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tt(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function kt(e){var t=e.images,n=e.blogs,r=e.infos,o=e.navigation,i=e.headerHeight,a=Object(ue.a)(["translation","app","itemDisplays"]).t;return Ct(ce.a,{style:pt.a.container},Ct(fe.a,{style:pt.a.container,contentContainerStyle:Object(pt.b)(i)},Ct(ce.a,{style:Lt.welcomeContainer},Ct(ae.a,{style:Lt.welcomeText},Ct(re.a,{source:t.welcome.src,style:Lt.welcomeImage}),Ct(It,{t:a}))),Ct(tt,{data:r,navigation:o}),Ct(Et,null),Ct(Xe,{data:n,navigation:o}),Ct(be,{onPress:Nt,style:Lt.getStartedContainerTouchable},Ct(ce.a,{style:Lt.getStartedContainer},Ct(ce.a,{style:[Lt.codeHighlightContainer,Lt.homeScreenFilename]},Ct(ve,null,a("itemDisplays:title"))),Ct(ae.a,{style:Lt.getStartedText},a("itemDisplays:getStarted")))),Ct(st,null),Ct(ce.a,{style:Lt.helpContainer},Ct(be,{onPress:Rt,style:Lt.helpLink},Ct(ae.a,{style:Lt.helpLinkText},a("didNotReload"))))),Ct(ce.a,{style:Lt.tabBarInfoContainer},Ct(ae.a,{style:Lt.tabBarInfoText,numberOfLines:1},a("app:description")),Ct(ce.a,{style:[Lt.codeHighlightContainer,Lt.navigationFilename]},Ct(ve,{style:Lt.codeHighlightText},le.default.manifest.extra.PUBLIC_URL))))}function It(e){var t=e.t,n=Ct(ae.a,{onPress:Dt,style:Lt.helpLinkText},t("social"));return Ct(ae.a,{style:Lt.developmentModeText},t("pubStatus")," ",n)}function Dt(){se.a("/social-links")}function Rt(){se.a("https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change")}function Nt(){se.a(dt["your-item-here"].link)}var Lt=ie.a.create({developmentModeText:{color:"rgba(0,0,0,0.4)",fontSize:12,lineHeight:14},welcomeContainer:{marginBottom:12,marginTop:"web"===oe.a.OS?-15:0},welcomeText:{display:"flex"},welcomeImage:{width:30,height:24,resizeMode:"contain",marginVertical:-5,marginRight:10},getStartedContainerTouchable:{marginBottom:120,maxWidth:500,alignSelf:"center"},getStartedContainer:{alignItems:"center",marginHorizontal:10},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{backgroundColor:Je.a.highlightBackground,borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,color:Je.a.secondaryText,lineHeight:24,textAlign:"center"},tabBarInfoContainer:_t(_t({position:"absolute",bottom:0,left:0,right:0},oe.a.select({ios:{shadowColor:"black",shadowOffset:{width:0,height:-3},shadowOpacity:.1,shadowRadius:3},android:{elevation:20}})),{},{alignItems:"center",backgroundColor:"#fbfbfb",paddingVertical:10,paddingHorizontal:12,borderColor:Je.a.highlightBackground,borderWidth:1}),tabBarInfoText:{fontSize:17,color:Je.a.secondaryText,textAlign:"center"},navigationFilename:{marginTop:5},helpContainer:{marginTop:15,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{fontSize:12,color:"#2e78b7"}}),Bt=u.a.createElement;function At(e){var t=e.blogPosts,n=e.infoPosts,r=te("blog").setBlogs,o=te("info").setInfos;return u.a.useEffect((function(){r(t),o(n)}),[]),Bt(ne.a.Layout,null,Bt(kt,{images:{welcome:{src:"/images/robot-prod.png"}},blogs:t,infos:n}))}At.getInitialProps=a()(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.getPosts("blog");case 2:return t=e.sent,e.next=5,ee.getPosts("info");case 5:return n=e.sent,e.abrupt("return",{blogPosts:t,infoPosts:n});case 7:case"end":return e.stop()}}),e)})));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.ssr,r=void 0===n||n,i=function(t){var n=t.initialReduxState,r=d()(t,["initialReduxState"]),o=G(n);return X(v,{store:o},X(e,r))};return(r||e.getInitialProps)&&(i.getInitialProps=function(){var t=a()(o.a.mark((function t(n){var r,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=G(),n.reduxStore=r,"function"!==typeof e.getInitialProps){t.next=8;break}return t.next=5,e.getInitialProps(n);case 5:t.t0=t.sent,t.next=9;break;case 8:t.t0={};case 9:return i=t.t0,t.abrupt("return",F(F({},i),{},{initialReduxState:r.getState()}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i}(At)},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("ntbh"),n("Az8m")(e))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,6,12,2,4,3,5,7,8,11,10]]]);