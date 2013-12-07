window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function i(e,t){return typeof e===t}var o,a,s,l="2.6.2",u={},c=!0,f=t.documentElement,p="modernizr",d=t.createElement(p),h=d.style,m={}.toString,g=" -webkit- -moz- -o- -ms- ".split(" "),y={svg:"http://www.w3.org/2000/svg"},v={},b=[],x=b.slice,w=function(e,n,r,i){var o,a,s,l,u=t.createElement("div"),c=t.body,d=c||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:p+(r+1),u.appendChild(s);return o=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),u.id=p,(c?u:d).innerHTML+=o,d.appendChild(u),c||(d.style.background="",d.style.overflow="hidden",l=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),a=n(u,e),c?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),f.style.overflow=l),!!a},T=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return w("@media "+t+" { #"+p+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},C={}.hasOwnProperty;s=i(C,"undefined")||i(C.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return C.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=x.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(x.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(x.call(arguments)))};return r}),v.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:w(["@media (",g.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},v.svg=function(){return!!t.createElementNS&&!!t.createElementNS(y.svg,"svg").createSVGRect},v.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==y.svg},v.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(m.call(t.createElementNS(y.svg,"clipPath")))};for(var E in v)s(v,E)&&(a=E.toLowerCase(),u[a]=v[E](),b.push((u[a]?"":"no-")+a));return u.addTest=function(e,t){if("object"==typeof e)for(var r in e)s(e,r)&&u.addTest(r,e[r]);else{if(e=e.toLowerCase(),u[e]!==n)return u;t="function"==typeof t?t():t,"undefined"!=typeof c&&c&&(f.className+=" "+(t?"":"no-")+e),u[e]=t}return u},r(""),d=o=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=g[e[h]];return t||(t={},m++,e[h]=m,g[m]=t),t}function o(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),o.canHaveChildren&&!p.test(e)?r.frag.appendChild(o):o}function a(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function l(e){e||(e=t);var r=i(e);return y.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),c||s(e,r),e}var u,c,f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,c=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:c,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:o,createDocumentFragment:a};e.html5=y,l(t)}(this,t),u._version=l,u._prefixes=g,u.mq=T,u.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(c?" js "+b.join(" "):""),u}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();v=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):v=0}function l(e,n,r,i,o,l,u){function c(t){if(!d&&a(f.readyState)&&(b.r=d=1,!v&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in S[n])S[n].hasOwnProperty(r)&&S[n][r].onload()}}var u=u||p.errorTimeout,f=t.createElement(e),d=0,g=0,b={t:r,s:n,e:o,a:l,x:u};1===S[n]&&(g=1,S[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){c.call(this,g)},y.splice(i,0,b),"img"!=e&&(g||2===S[n]?(w.insertBefore(f,x?null:m),h(c,u)):S[n].push(f))}function u(e,t,n,r,o){return v=0,t=t||"j",i(e)?l("c"==t?C:T,e,t,this.i++,n,r,o):(y.splice(this.i++,0,e),1==y.length&&s()),this}function c(){var e=p;return e.loader={load:u,i:0},e}var f,p,d=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,y=[],v=0,b="MozAppearance"in d.style,x=b&&!!t.createRange().compareNode,w=x?d:m.parentNode,d=e.opera&&"[object Opera]"==g.call(e.opera),d=!!t.attachEvent&&!d,T=b?"object":d?"script":"img",C=d?"script":T,E=Array.isArray||function(e){return"[object Array]"==g.call(e)},N=[],S={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),i=N.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=k[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=N[n](o);return o}function a(e,i,o,a,s){var l=t(e),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,i,o,a,s):(S[l.url]?l.noexec=!0:S[l.url]=1,o.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(i)||r(u))&&o.load(function(){c(),i&&i(l.origUrl,s,a),u&&u(l.origUrl,s,a),S[l.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}),a(e,f,t,0,u);else if(Object(e)===e)for(l in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);p.apply(this,e),d()}:f[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),d()}}(p[l])),a(e[l],f,t,l,u))}else!n&&d()}var s,l,u=!!e.test,c=e.load||e.both,f=e.callback||o,p=f,d=e.complete||o;n(u?e.yep:e.nope,!!c),c&&n(c)}var l,u,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(E(e))for(l=0;l<e.length;l++)u=e[l],i(u)?a(u,0,f,0):E(u)?p(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},p.addPrefix=function(e,t){k[e]=t},p.addFilter=function(e){N.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=c(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,l,u){var c,f,d=t.createElement("script"),i=i||p.errorTimeout;d.src=e;for(f in r)d.setAttribute(f,r[f]);n=u?s:n||o,d.onreadystatechange=d.onload=function(){!c&&a(d.readyState)&&(c=1,n(),d.onload=d.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),l?d.onload():m.parentNode.insertBefore(d,m)},e.yepnope.injectCss=function(e,n,r,i,a,l){var u,i=t.createElement("link"),n=l?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(u in r)i.setAttribute(u,r[u]);a||(m.parentNode.insertBefore(i,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});