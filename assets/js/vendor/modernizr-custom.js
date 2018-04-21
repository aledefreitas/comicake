/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-canvas-cookies-history-localstorage-serviceworker-sessionstorage-websockets-webworkers-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,r,l;for(var f in c)if(c.hasOwnProperty(f)){if(e=[],n=c[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)r=e[a],l=r.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),i.push((s?"":"no-")+l.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(m&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),m?u.className.baseVal=n:u.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):m?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}var i=[],c=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr,Modernizr.addTest("cookies",function(){try{n.cookie="cookietest=1";var e=-1!=n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}}),Modernizr.addTest("history",function(){var n=navigator.userAgent;return-1===n.indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone")||"file:"===location.protocol?e.history&&"pushState"in e.history:!1});var f=!1;try{f="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(d){}Modernizr.addTest("websockets",f),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(n){return!1}}),Modernizr.addTest("webworkers","Worker"in e);var u=n.documentElement,m="svg"===u.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("serviceworker","serviceWorker"in navigator),s(),a(i),delete l.addTest,delete l.addAsyncTest;for(var g=0;g<Modernizr._q.length;g++)Modernizr._q[g]();e.Modernizr=Modernizr}(window,document);