(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/8/S":function(i,e,s){"use strict";s.r(e),s.d(e,"AppOwnership",(function(){return r})),s.d(e,"UserInterfaceIdiom",(function(){return n}));var r,n,o=s("lSNA"),t=s.n(o),a=s("QILm"),d=s.n(a);!function(i){i.Standalone="standalone",i.Expo="expo",i.Guest="guest"}(r||(r={})),function(i){i.Handset="handset",i.Tablet="tablet",i.Unsupported="unsupported"}(n||(n={}));var l=s("o0o1"),u=s.n(l),c=s("xLLm"),w=s("K4CH"),p=s.n(w),b=s("xk4V"),m=s.n(b),f=new p.a,g="EXPO_CONSTANTS_INSTALLATION_ID",h=m()(),v={get name(){return"ExponentConstants"},get appOwnership(){return"expo"},get installationId(){var i;try{null!=(i=localStorage.getItem(g))&&"string"===typeof i||(i=m()(),localStorage.setItem(g,i))}catch(e){i=h}finally{return i}},get sessionId(){return h},get platform(){return{web:c.canUseDOM?p()(navigator.userAgent):void 0}},get isHeadless(){return!1},get isDevice(){return!0},get isDetached(){return!1},get expoVersion(){return this.manifest.sdkVersion||null},get linkingUri(){return c.canUseDOM?location.origin+location.pathname:""},get expoRuntimeVersion(){return this.expoVersion},get deviceName(){var i=f.getResult(),e=i.browser,s=i.engine,r=i.os;return e.name||s.name||r.name||void 0},get nativeAppVersion(){return null},get nativeBuildVersion(){return null},get systemFonts(){return[]},get statusBarHeight(){return 0},get deviceYearClass(){return null},get manifest(){return{name:"Techintel",slug:"techintel",description:"All about technology including a developer portfolio, stories, products and services, analysis and facts for your awareness.",extra:{PUBLIC_URL:"https://techintel.github.io",SPACE_ID:"gdquurxkfsex",ACCESS_TOKEN:"FhCAZchv43ZBtGQGMZhma-PTaVYEwb2yymp0kHIS2pE",CONTENT_TYPES:{BLOG:"techintelBlog",INFO:"techintelInfo",FORTFOLIO:"techintelFortfolio"}},privacy:"public",sdkVersion:"36.0.0",platforms:["ios","android","web"],version:"1.0.0",orientation:"portrait",icon:"./assets/images/icon.png",scheme:"myapp",splash:{image:"./assets/images/splash.png",resizeMode:"contain",backgroundColor:"#ffffff"},updates:{fallbackToCacheTimeout:0},assetBundlePatterns:["**/*"],web:{}}||{}},get experienceUrl(){return c.canUseDOM?location.origin+location.pathname:""},get debugMode(){return!1},getWebViewUserAgentAsync:function(){return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!c.canUseDOM){i.next=4;break}return i.abrupt("return",navigator.userAgent);case 4:return i.abrupt("return",null);case 5:case"end":return i.stop()}}),null,null,null,Promise)}};function x(i,e){var s=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),s.push.apply(s,r)}return s}v||console.warn("No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?");var y=null;v&&v.manifest&&"string"===typeof(y=v.manifest)&&(y=JSON.parse(y));var k=v||{},T=(k.name,d()(k,["name"]));e.default=function(i){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?x(Object(s),!0).forEach((function(e){t()(i,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(s,e))}))}return i}({},T,{manifest:y,deviceId:T.installationId,linkingUrl:T.linkingUri})},"4fRq":function(i,e){var s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(s){var r=new Uint8Array(16);i.exports=function(){return s(r),r}}else{var n=new Array(16);i.exports=function(){for(var i,e=0;e<16;e++)0===(3&e)&&(i=4294967296*Math.random()),n[e]=i>>>((3&e)<<3)&255;return n}}},"7Qib":function(i,e,s){"use strict";function r(i){return function(i,e){var s=i.replace(/(\r\n|\n|\r)/gm," ").replace(/ +(?= )/g,"").trim();return s.length>e&&(s=(s=s.substr(0,e)).substr(0,Math.min(s.length,s.lastIndexOf(" ")))),s}(i,300)+"."}function n(i){return'<html>\n            <head>\n              <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n            </head>\n            <body>\n              '.concat(i,"\n            </body>\n          </html>")}function o(i){var e=function(i){return i.content.find((function(i){return"embedded-asset-block"===i.nodeType}))}(i);return!!e&&e.data.target.fields}function t(i){var e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(i))return 3==(e=i.substring(1).split("")).length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),"rgba("+[(e="0x"+e.join(""))>>16&255,e>>8&255,255&e].join(",")+","+s+")";throw new Error("Bad Hex")}s.d(e,"c",(function(){return r})),s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return o})),s.d(e,"b",(function(){return t}))},I2ZF:function(i,e){for(var s=[],r=0;r<256;++r)s[r]=(r+256).toString(16).substr(1);i.exports=function(i,e){var r=e||0,n=s;return[n[i[r++]],n[i[r++]],n[i[r++]],n[i[r++]],"-",n[i[r++]],n[i[r++]],"-",n[i[r++]],n[i[r++]],"-",n[i[r++]],n[i[r++]],"-",n[i[r++]],n[i[r++]],n[i[r++]],n[i[r++]],n[i[r++]],n[i[r++]]].join("")}},K4CH:function(i,e,s){var r;!function(n,o){"use strict";var t="model",a="name",d="type",l="vendor",u="version",c="mobile",w="tablet",p="smarttv",b={extend:function(i,e){var s={};for(var r in i)e[r]&&e[r].length%2===0?s[r]=e[r].concat(i[r]):s[r]=i[r];return s},has:function(i,e){return"string"===typeof i&&-1!==e.toLowerCase().indexOf(i.toLowerCase())},lowerize:function(i){return i.toLowerCase()},major:function(i){return"string"===typeof i?i.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(i){return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},m={rgx:function(i,e){for(var s,r,n,o,t,a,d=0;d<e.length&&!t;){var l=e[d],u=e[d+1];for(s=r=0;s<l.length&&!t;)if(t=l[s++].exec(i))for(n=0;n<u.length;n++)a=t[++r],"object"===typeof(o=u[n])&&o.length>0?2==o.length?"function"==typeof o[1]?this[o[0]]=o[1].call(this,a):this[o[0]]=o[1]:3==o.length?"function"!==typeof o[1]||o[1].exec&&o[1].test?this[o[0]]=a?a.replace(o[1],o[2]):void 0:this[o[0]]=a?o[1].call(this,a,o[2]):void 0:4==o.length&&(this[o[0]]=a?o[3].call(this,a.replace(o[1],o[2])):void 0):this[o]=a||void 0;d+=2}},str:function(i,e){for(var s in e)if("object"===typeof e[s]&&e[s].length>0){for(var r=0;r<e[s].length;r++)if(b.has(e[s][r],i))return"?"===s?void 0:s}else if(b.has(e[s],i))return"?"===s?void 0:s;return i}},f={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},g={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[a,u],[/(opios)[\/\s]+([\w\.]+)/i],[[a,"Opera Mini"],u],[/\s(opr)\/([\w\.]+)/i],[[a,"Opera"],u],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[a,u],[/(konqueror)\/([\w\.]+)/i],[[a,"Konqueror"],u],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[a,"IE"],u],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[a,"Edge"],u],[/(yabrowser)\/([\w\.]+)/i],[[a,"Yandex"],u],[/(Avast)\/([\w\.]+)/i],[[a,"Avast Secure Browser"],u],[/(AVG)\/([\w\.]+)/i],[[a,"AVG Secure Browser"],u],[/(puffin)\/([\w\.]+)/i],[[a,"Puffin"],u],[/(focus)\/([\w\.]+)/i],[[a,"Firefox Focus"],u],[/(opt)\/([\w\.]+)/i],[[a,"Opera Touch"],u],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[a,"UCBrowser"],u],[/(comodo_dragon)\/([\w\.]+)/i],[[a,/_/g," "],u],[/(windowswechat qbcore)\/([\w\.]+)/i],[[a,"WeChat(Win) Desktop"],u],[/(micromessenger)\/([\w\.]+)/i],[[a,"WeChat"],u],[/(brave)\/([\w\.]+)/i],[[a,"Brave"],u],[/(qqbrowserlite)\/([\w\.]+)/i],[a,u],[/(QQ)\/([\d\.]+)/i],[a,u],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[a,u],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[a,u],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[a,u],[/(MetaSr)[\/\s]?([\w\.]+)/i],[a],[/(LBBROWSER)/i],[a],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[u,[a,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[u,[a,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[a,u],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[u,[a,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[a,/(.+)/,"$1 WebView"],u],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[a,/(.+(?:g|us))(.+)/,"$1 $2"],u],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[u,[a,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[a,"Sailfish Browser"],u],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[a,u],[/(dolfin)\/([\w\.]+)/i],[[a,"Dolphin"],u],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[a,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[a,"Chrome"],u],[/(coast)\/([\w\.]+)/i],[[a,"Opera Coast"],u],[/fxios\/([\w\.-]+)/i],[u,[a,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[u,[a,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[u,a],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[a,"GSA"],u],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[a,[u,m.str,f.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[a,u],[/(navigator|netscape)\/([\w\.-]+)/i],[[a,"Netscape"],u],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[a,u]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[t,l,[d,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[t,[l,"Apple"],[d,w]],[/(apple\s{0,1}tv)/i],[[t,"Apple TV"],[l,"Apple"],[d,p]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[l,t,[d,w]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[t,[l,"Amazon"],[d,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[t,m.str,f.device.amazon.model],[l,"Amazon"],[d,c]],[/android.+aft([bms])\sbuild/i],[t,[l,"Amazon"],[d,p]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[t,l,[d,c]],[/\((ip[honed|\s\w*]+);/i],[t,[l,"Apple"],[d,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[l,t,[d,c]],[/\(bb10;\s(\w+)/i],[t,[l,"BlackBerry"],[d,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[t,[l,"Asus"],[d,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[l,"Sony"],[t,"Xperia Tablet"],[d,w]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[t,[l,"Sony"],[d,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[l,t,[d,"console"]],[/android.+;\s(shield)\sbuild/i],[t,[l,"Nvidia"],[d,"console"]],[/(playstation\s[34portablevi]+)/i],[t,[l,"Sony"],[d,"console"]],[/(sprint\s(\w+))/i],[[l,m.str,f.device.sprint.vendor],[t,m.str,f.device.sprint.model],[d,c]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[l,[t,/_/g," "],[d,c]],[/(nexus\s9)/i],[t,[l,"HTC"],[d,w]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],[t,[l,"Huawei"],[d,c]],[/android.+(bah2?-a?[lw]\d{2})/i],[t,[l,"Huawei"],[d,w]],[/(microsoft);\s(lumia[\s\w]+)/i],[l,t,[d,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[t,[l,"Microsoft"],[d,"console"]],[/(kin\.[onetw]{3})/i],[[t,/\./g," "],[l,"Microsoft"],[d,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[t,[l,"Motorola"],[d,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[t,[l,"Motorola"],[d,w]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[l,b.trim],[t,b.trim],[d,p]],[/hbbtv.+maple;(\d+)/i],[[t,/^/,"SmartTV"],[l,"Samsung"],[d,p]],[/\(dtv[\);].+(aquos)/i],[t,[l,"Sharp"],[d,p]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[l,"Samsung"],t,[d,w]],[/smart-tv.+(samsung)/i],[l,[d,p],t],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[l,"Samsung"],t,[d,c]],[/sie-(\w*)/i],[t,[l,"Siemens"],[d,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[l,"Nokia"],t,[d,c]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[t,[l,"Acer"],[d,w]],[/android.+([vl]k\-?\d{3})\s+build/i],[t,[l,"LG"],[d,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[l,"LG"],t,[d,w]],[/(lg) netcast\.tv/i],[l,t,[d,p]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[t,[l,"LG"],[d,c]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[l,t,[d,w]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[t,[l,"Lenovo"],[d,w]],[/(lenovo)[_\s-]?([\w-]+)/i],[l,t,[d,c]],[/linux;.+((jolla));/i],[l,t,[d,c]],[/((pebble))app\/[\d\.]+\s/i],[l,t,[d,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[l,t,[d,c]],[/crkey/i],[[t,"Chromecast"],[l,"Google"],[d,p]],[/android.+;\s(glass)\s\d/i],[t,[l,"Google"],[d,"wearable"]],[/android.+;\s(pixel c)[\s)]/i],[t,[l,"Google"],[d,w]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[t,[l,"Google"],[d,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[t,/_/g," "],[l,"Xiaomi"],[d,w]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[t,[l,"Meizu"],[d,c]],[/(mz)-([\w-]{2,})/i],[[l,"Meizu"],t,[d,c]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[t,[l,"OnePlus"],[d,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[t,[l,"RCA"],[d,w]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[t,[l,"Dell"],[d,w]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[t,[l,"Verizon"],[d,w]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[l,"Barnes & Noble"],t,[d,w]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[t,[l,"NuVision"],[d,w]],[/android.+;\s(k88)\sbuild/i],[t,[l,"ZTE"],[d,w]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[t,[l,"Swiss"],[d,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[t,[l,"Swiss"],[d,w]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[t,[l,"Zeki"],[d,w]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[l,"Dragon Touch"],t,[d,w]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[t,[l,"Insignia"],[d,w]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[t,[l,"NextBook"],[d,w]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[l,"Voice"],t,[d,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[l,"LvTel"],t,[d,c]],[/android.+;\s(PH-1)\s/i],[t,[l,"Essential"],[d,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[t,[l,"Envizen"],[d,w]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[l,t,[d,w]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[t,[l,"MachSpeed"],[d,w]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[l,t,[d,w]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[t,[l,"Rotor"],[d,w]],[/android.+(KS(.+))\s+build/i],[t,[l,"Amazon"],[d,w]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[l,t,[d,w]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[d,b.lowerize],l,t],[/[\s\/\(](smart-?tv)[;\)]/i],[[d,p]],[/(android[\w\.\s\-]{0,9});.+build/i],[t,[l,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[u,[a,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[u,[a,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[a,u],[/rv\:([\w\.]{1,9}).+(gecko)/i],[u,a]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[a,u],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[a,[u,m.str,f.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[a,"Windows"],[u,m.str,f.os.windows.version]],[/\((bb)(10);/i],[[a,"BlackBerry"],u],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[a,u],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[a,"Symbian"],u],[/\((series40);/i],[a],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[a,"Firefox OS"],u],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[a,u],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[a,"Chromium OS"],u],[/(sunos)\s?([\w\.\d]*)/i],[[a,"Solaris"],u],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[a,u],[/(haiku)\s(\w+)/i],[a,u],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[u,/_/g,"."],[a,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[a,"Mac OS"],[u,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[a,u]]},h=function(i,e){if("object"===typeof i&&(e=i,i=void 0),!(this instanceof h))return new h(i,e).getResult();var s=i||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),r=e?b.extend(g,e):g;return this.getBrowser=function(){var i={name:void 0,version:void 0};return m.rgx.call(i,s,r.browser),i.major=b.major(i.version),i},this.getCPU=function(){var i={architecture:void 0};return m.rgx.call(i,s,r.cpu),i},this.getDevice=function(){var i={vendor:void 0,model:void 0,type:void 0};return m.rgx.call(i,s,r.device),i},this.getEngine=function(){var i={name:void 0,version:void 0};return m.rgx.call(i,s,r.engine),i},this.getOS=function(){var i={name:void 0,version:void 0};return m.rgx.call(i,s,r.os),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return s},this.setUA=function(i){return s=i,this},this};h.VERSION="0.7.21",h.BROWSER={NAME:a,MAJOR:"major",VERSION:u},h.CPU={ARCHITECTURE:"architecture"},h.DEVICE={MODEL:t,VENDOR:l,TYPE:d,CONSOLE:"console",MOBILE:c,SMARTTV:p,TABLET:w,WEARABLE:"wearable",EMBEDDED:"embedded"},h.ENGINE={NAME:a,VERSION:u},h.OS={NAME:a,VERSION:u},"undefined"!==typeof e?("undefined"!==typeof i&&i.exports&&(e=i.exports=h),e.UAParser=h):void 0===(r=function(){return h}.call(e,s,e,i))||(i.exports=r);var v=n&&(n.jQuery||n.Zepto);if(v&&!v.ua){var x=new h;v.ua=x.getResult(),v.ua.get=function(){return x.getUA()},v.ua.set=function(i){x.setUA(i);var e=x.getResult();for(var s in e)v.ua[s]=e[s]}}}("object"===typeof window?window:this)},xk4V:function(i,e,s){var r=s("4fRq"),n=s("I2ZF");i.exports=function(i,e,s){var o=e&&s||0;"string"==typeof i&&(e="binary"===i?new Array(16):null,i=null);var t=(i=i||{}).random||(i.rng||r)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,e)for(var a=0;a<16;++a)e[o+a]=t[a];return e||n(t)}}}]);