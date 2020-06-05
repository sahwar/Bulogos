(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function oa(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function pa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=pa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,k=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&k<e;)if(d[k++]!=b[g++])return!1;return g>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||qa});
t("WeakMap",function(a){function b(h){this.f=(g+=Math.random()+1).toString();if(h){h=u(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!w(h,k)){var l=new c;ba(h,k,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),n=new a([[h,2],[l,3]]);if(2!=n.get(h)||3!=n.get(l))return!1;n["delete"](h);n.set(l,4);return!n.has(h)&&4==n.get(l)}catch(m){return!1}}())return a;
var k="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!w(h,k))throw Error("WeakMap key fail: "+h);h[k][this.f]=l;return this};
b.prototype.get=function(h){return d(h)&&w(h,k)?h[k][this.f]:void 0};
b.prototype.has=function(h){return d(h)&&w(h,k)&&w(h[k],this.f)};
b.prototype["delete"]=function(h){return d(h)&&w(h,k)&&w(h[k],this.f)?delete h[k][this.f]:!1};
return b});
t("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,h){var l=g.f;return fa(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(g,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?l=f.get(h):(l=""+ ++k,f.set(h,l)):l="p_"+h;var n=g.g[l];if(n&&w(g.g,l))for(var m=0;m<n.length;m++){var r=n[m];if(h!==h&&r.key!==r.key||h===r.key)return{id:l,list:n,index:m,j:r}}return{id:l,list:n,index:-1,j:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=u(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),h=new a(u([[g,"s"]]));if("s"!=h.get(g)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),n=l.next();if(n.done||n.value[0]!=g||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(m){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(g,h){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.j?l.j.value=h:(l.j={next:this.f,previous:this.f.previous,head:this.f,key:g,value:h},l.list.push(l.j),this.f.previous.next=l.j,this.f.previous=l.j,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.j&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.j.previous.next=g.j.next,g.j.next.previous=g.j.previous,g.j.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).j};
e.prototype.get=function(g){return(g=d(this,g).j)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,h){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,g.call(h,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var k=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==pa(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(k){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var x=this||self;function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ra(){}
function sa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function ta(a){var b=sa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ua(a){return"function"==sa(a)}
function va(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function wa(a){return Object.prototype.hasOwnProperty.call(a,xa)&&a[xa]||(a[xa]=++ya)}
var xa="closure_uid_"+(1E9*Math.random()>>>0),ya=0;function za(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=za:A=Ba;return A.apply(null,arguments)}
var B=Date.now||function(){return+new Date};
function D(a,b){var c=a.split("."),d=x;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var Ca=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Da=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ea(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Fa(a){return Array.prototype.concat.apply([],arguments)}
function Ga(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ha(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ta(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var k=0;k<f;k++)a[e+k]=d[k]}else a.push(d)}}
;function Ia(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ja(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ka(a){var b=G,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function La(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Ma(a){var b=sa(a);if("object"==b||"array"==b){if(ua(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Ma(a[c]);return b}return a}
var Na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Na.length;f++)c=Na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Pa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Qa=/&/g,Ra=/</g,Sa=/>/g,Ta=/"/g,Ua=/'/g,Va=/\x00/g,Wa=/[\x00&<>"']/;var Xa;a:{var Ya=x.navigator;if(Ya){var Za=Ya.userAgent;if(Za){Xa=Za;break a}}Xa=""}function H(a){return-1!=Xa.indexOf(a)}
;function $a(){}
;var ab=H("Opera"),bb=H("Trident")||H("MSIE"),cb=H("Edge"),db=H("Gecko")&&!(-1!=Xa.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),eb=-1!=Xa.toLowerCase().indexOf("webkit")&&!H("Edge");function fb(){var a=x.document;return a?a.documentMode:void 0}
var gb;a:{var hb="",ib=function(){var a=Xa;if(db)return/rv:([^\);]+)(\)|;)/.exec(a);if(cb)return/Edge\/([\d\.]+)/.exec(a);if(bb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(eb)return/WebKit\/(\S+)/.exec(a);if(ab)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ib&&(hb=ib?ib[1]:"");if(bb){var jb=fb();if(null!=jb&&jb>parseFloat(hb)){gb=String(jb);break a}}gb=hb}var kb=gb,lb;if(x.document&&bb){var mb=fb();lb=mb?mb:parseInt(kb,10)||void 0}else lb=void 0;var nb=lb;var ob={},pb=null;var I=window;function qb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,rb[b]?b=rb[b]:(b=String(b),rb[b]||(c=/function\s+([^\(]+)/m.exec(b),rb[b]=c?c[1]:"[Anonymous]"),b=rb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var rb={};function sb(a){this.f=a||{cookie:""}}
q=sb.prototype;q.isEnabled=function(){return navigator.cookieEnabled};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.za;d=c.secure||!1;var f=c.domain||void 0;var k=c.path||void 0;var g=c.N}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===g&&(g=-1);c=f?";domain="+f:"";k=k?";path="+k:"";d=d?";secure":"";g=0>g?"":0==g?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(B()+1E3*g)).toUTCString();this.f.cookie=a+"="+b+c+k+g+d+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Pa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{N:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.f.cookie};
q.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Pa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var tb=new sb("undefined"==typeof document?null:document);function ub(a,b){this.width=a;this.height=b}
q=ub.prototype;q.clone=function(){return new ub(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function vb(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var k={};for(c=d=0;e=f[c];c++){var g=e.className,h;if(h="function"==typeof g.split)h=0<=Ca(g.split(/\s+/),a);h&&(k[d++]=e)}k.length=d;return k}return f}
function wb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function xb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var yb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(yb)}
function K(a){return a?decodeURI(a):a}
function zb(a){var b=J(a);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Ab(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ab(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Bb(a){var b=[],c;for(c in a)Ab(c,a[c],b);return b.join("&")}
var Cb=/#|$/;function Db(a){var b=Eb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Fb(){var a=[];Db(function(b){a.push(b)});
return a}
var Eb={ga:"allow-forms",ha:"allow-modals",ia:"allow-orientation-lock",ja:"allow-pointer-lock",ka:"allow-popups",la:"allow-popups-to-escape-sandbox",ma:"allow-presentation",na:"allow-same-origin",oa:"allow-scripts",pa:"allow-top-navigation",qa:"allow-top-navigation-by-user-activation"},Gb=Ia(function(){return Fb()});
function Hb(){var a=wb(),b={};F(Gb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ib(){this.h=this.h;this.i=this.i}
Ib.prototype.h=!1;Ib.prototype.dispose=function(){this.h||(this.h=!0,this.I())};
Ib.prototype.I=function(){if(this.i)for(;this.i.length;)this.i.shift()()};var Jb=(new Date).getTime();function Kb(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Lb(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(m){for(var r=k,p=0;64>p;p+=4)r[p/4]=m[p]<<24|m[p+1]<<16|m[p+2]<<8|m[p+3];for(p=16;80>p;p++)m=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(m<<1|m>>>31)&4294967295;m=e[0];var v=e[1],y=e[2],C=e[3],L=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var ea=C^v&(y^C);var Aa=1518500249}else ea=v^y^C,Aa=1859775393;else 60>p?(ea=v&y|C&(v|y),Aa=2400959708):(ea=v^y^C,Aa=3395469782);ea=((m<<5|m>>>27)&4294967295)+ea+L+Aa+r[p]&4294967295;L=C;C=y;y=(v<<30|v>>>2)&4294967295;v=m;m=ea}e[0]=e[0]+m&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+y&4294967295;e[3]=e[3]+C&4294967295;e[4]=e[4]+L&4294967295}
function c(m,r){if("string"===typeof m){m=unescape(encodeURIComponent(m));for(var p=[],v=0,y=m.length;v<y;++v)p.push(m.charCodeAt(v));m=p}r||(r=m.length);p=0;if(0==l)for(;p+64<r;)b(m.slice(p,p+64)),p+=64,n+=64;for(;p<r;)if(f[l++]=m[p++],n++,64==l)for(l=0,b(f);p+64<r;)b(m.slice(p,p+64)),p+=64,n+=64}
function d(){var m=[],r=8*n;56>l?c(g,56-l):c(g,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)m[r++]=e[p]>>v&255;return m}
for(var e=[],f=[],k=[],g=[128],h=1;64>h;++h)g[h]=0;var l,n;a();return{reset:a,update:c,digest:d,X:function(){for(var m=d(),r="",p=0;p<m.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(m[p]/16))+"0123456789ABCDEF".charAt(m[p]%16);return r}}}
;function Mb(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(g){e.push(g)}),Nb(e.join(" "));
var f=[],k=[];F(c,function(g){k.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(g){e.push(g)});
a=Nb(e.join(" "));a=[c,a];0==k.length||a.push(k.join(""));return a.join("_")}
function Nb(a){var b=Lb();b.update(a);return b.X().toLowerCase()}
;function Ob(a){var b=Kb(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new sb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new sb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Mb(Kb(d),c,a||null)].join(" "):null}return null}
;function Pb(){this.g=[];this.f=-1}
Pb.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Pb.prototype.get=function(a){return!!this.g[a]};
function Qb(a){-1==a.f&&(a.f=Da(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Rb(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rb.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function Sb(a){x.setTimeout(function(){throw a;},0)}
var Tb;function Ub(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=wb();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var k="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(h){if(("*"==g||h.origin==g)&&h.data==k)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(k,g)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.M;c.M=null;e()}};
return function(e){d.next={M:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Vb(){this.g=this.f=null}
var Xb=new Rb(function(){return new Wb},function(a){a.reset()});
Vb.prototype.add=function(a,b){var c=Xb.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Vb.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Wb(){this.next=this.scope=this.f=null}
Wb.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Wb.prototype.reset=function(){this.next=this.scope=this.f=null};function Yb(a){Zb||$b();ac||(Zb(),ac=!0);bc.add(a,void 0)}
var Zb;function $b(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Zb=function(){a.then(cc)}}else Zb=function(){var b=cc;
!ua(x.setImmediate)||x.Window&&x.Window.prototype&&!H("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Tb||(Tb=Ub()),Tb(b)):x.setImmediate(b)}}
var ac=!1,bc=new Vb;function cc(){for(var a;a=bc.remove();){try{a.f.call(a.scope)}catch(c){Sb(c)}var b=Xb;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}ac=!1}
;function dc(){this.g=-1}
;function ec(){this.g=64;this.f=[];this.m=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
E(ec,dc);ec.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.h=0};
function fc(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var k=a.f[2],g=a.f[3],h=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(k^g);var l=1518500249}else f=c^k^g,l=1859775393;else 60>e?(f=c&k|g&(c|k),l=2400959708):
(f=c^k^g,l=3395469782);f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295;h=g;g=k;k=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+k&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+h&4294967295}
ec.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)fc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){fc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){fc(this,e);f=0;break}}this.h=f;this.l+=b}};
ec.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.m[c]=b&255,b/=256;fc(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var M="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function N(){}
N.prototype.next=function(){throw M;};
N.prototype.s=function(){return this};
function gc(a){if(a instanceof N)return a;if("function"==typeof a.s)return a.s(!1);if(ta(a)){var b=0,c=new N;c.next=function(){for(;;){if(b>=a.length)throw M;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function hc(a,b){if(ta(a))try{F(a,b,void 0)}catch(c){if(c!==M)throw c;}else{a=gc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==M)throw c;}}}
function ic(a){if(ta(a))return Ga(a);a=gc(a);var b=[];hc(a,function(c){b.push(c)});
return b}
;function jc(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof jc)for(c=kc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function kc(a){lc(a);return a.f.concat()}
q=jc.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||mc;lc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function mc(a,b){return a===b}
q.isEmpty=function(){return 0==this.g};
q.clear=function(){this.h={};this.i=this.g=this.f.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&lc(this),!0):!1};
function lc(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=kc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new jc(this)};
q.s=function(a){lc(this);var b=0,c=this.i,d=this,e=new N;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw M;var f=d.f[b++];return a?f:d.h[f]};
return e};var nc=x.JSON.stringify;function O(a){Ib.call(this);this.u=1;this.l=[];this.m=0;this.f=[];this.g={};this.B=!!a}
E(O,Ib);q=O.prototype;q.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.u;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.u=e+3;d.push(e);return e};
function oc(a,b,c){var d=pc;if(a=d.g[a]){var e=d.f;(a=Ea(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.F(a)}}
q.F=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.m)this.l.push(a),this.f[a+1]=ra;else{if(c){var d=Ca(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
q.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var k=c[e];qc(this.f[k+1],this.f[k+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)k=c[e],this.f[k+1].apply(this.f[k+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.F(c)}}return 0!=e}return!1};
function qc(a,b,c){Yb(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.F,this),delete this.g[a])}else this.f.length=0,this.g={}};
q.I=function(){O.A.I.call(this);this.clear();this.l.length=0};function rc(a){this.f=a}
rc.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,nc(b))};
rc.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
rc.prototype.remove=function(a){this.f.remove(a)};function P(a){this.f=a}
E(P,rc);function sc(a){this.data=a}
function tc(a){return void 0===a||a instanceof sc?a:new sc(a)}
P.prototype.set=function(a,b){P.A.set.call(this,a,tc(b))};
P.prototype.g=function(a){a=P.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
P.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Q(a){this.f=a}
E(Q,P);Q.prototype.set=function(a,b,c){if(b=tc(b)){if(c){if(c<B()){Q.prototype.remove.call(this,a);return}b.expiration=c}b.creation=B()}Q.A.set.call(this,a,b)};
Q.prototype.g=function(a){var b=Q.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<B()||c&&c>B())Q.prototype.remove.call(this,a);else return b}};function uc(){}
;function vc(){}
E(vc,uc);vc.prototype.clear=function(){var a=ic(this.s(!0)),b=this;F(a,function(c){b.remove(c)})};function wc(a){this.f=a}
E(wc,vc);q=wc.prototype;q.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeItem(a)};
q.s=function(a){var b=0,c=this.f,d=new N;d.next=function(){if(b>=c.length)throw M;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.f.clear()};
q.key=function(a){return this.f.key(a)};function xc(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(xc,wc);function yc(a,b){this.g=a;this.f=null;var c;if(c=bb)c=!(9<=Number(nb));if(c){zc||(zc=new jc);this.f=zc.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),zc.set(a,this.f));try{this.f.load(this.g)}catch(d){this.f=null}}}
E(yc,vc);var Ac={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},zc=null;function Bc(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ac[b]})}
q=yc.prototype;q.isAvailable=function(){return!!this.f};
q.set=function(a,b){this.f.setAttribute(Bc(a),b);Cc(this)};
q.get=function(a){a=this.f.getAttribute(Bc(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeAttribute(Bc(a));Cc(this)};
q.s=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new N;d.next=function(){if(b>=c.length)throw M;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Cc(this)};
function Cc(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Dc(a,b){this.g=a;this.f=b+"::"}
E(Dc,vc);Dc.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Dc.prototype.get=function(a){return this.g.get(this.f+a)};
Dc.prototype.remove=function(a){this.g.remove(this.f+a)};
Dc.prototype.s=function(a){var b=this.g.s(!0),c=this,d=new N;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Ec=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",Ec);function Fc(a){var b=arguments;1<b.length?Ec[b[0]]=b[1]:1===b.length&&Object.assign(Ec,b[0])}
function R(a,b){return a in Ec?Ec[a]:b}
;var Gc=[];function Hc(a){Gc.forEach(function(b){return b(a)})}
function Ic(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Jc(b),Hc(b)}}:a}
function Jc(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Fc("ERRORS",b))}
function Kc(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Fc("ERRORS",b))}
;var Lc=0;D("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Lc});var Mc={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Nc(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Mc||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Nc.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Nc.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Nc.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var G=z("ytEventsEventsListeners")||{};D("ytEventsEventsListeners",G);var Oc=z("ytEventsEventsCounter")||{count:0};D("ytEventsEventsCounter",Oc);
function Pc(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ka(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,k=va(e[4])&&va(d)&&La(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||k)})}
function Qc(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in G){var c=G[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Rc()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete G[b]}}))}
var Rc=Ia(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Sc(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Pc(a,b,c,d);if(!e){e=++Oc.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var k=f?function(g){g=new Nc(g);if(!xb(g.relatedTarget,function(h){return h==a}))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new Nc(g);
g.currentTarget=a;return c.call(a,g)};
k=Ic(k);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Rc()||"boolean"===typeof d?a.addEventListener(b,k,d):a.addEventListener(b,k,!!d.capture)):a.attachEvent("on"+b,k);G[e]=[a,b,c,k,d]}}}
;function Tc(a,b){ua(a)&&(a=Ic(a));return window.setTimeout(a,b)}
function Uc(a){ua(a)&&(a=Ic(a));return window.setInterval(a,250)}
;function Vc(a){var b=[];Ja(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(k){""==k?b.push(e):b.push(e+"="+encodeURIComponent(String(k)))})});
return b.join("&")}
function Wc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),k=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?Ha(b[f],k):b[f]=[b[f],k]:b[f]=k}catch(h){if("q"!=e[0]){var g=Error("Error decoding URL component");g.params={key:e[0],value:e[1]};Jc(g)}}}return b}
function Xc(a,b){return Yc(a,b||{},!0)}
function Yc(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Wc(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Bb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var Zc={};function $c(a){return Zc[a]||(Zc[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ad={},bd=[],pc=new O,cd={};function dd(){for(var a=u(bd),b=a.next();!b.done;b=a.next())b=b.value,b()}
function ed(a,b){b||(b=document);var c=Ga(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):vb(d,b);d=Ga(d);return Fa(c,d)}
function S(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[$c(b)]:a.getAttribute("data-"+b):null;return c}
function fd(a,b){pc.K.apply(pc,arguments)}
;function gd(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function T(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function hd(a,b,c){id||(id={},Sc(window,"message",A(a.i,a)));id[c]=b}
gd.prototype.i=function(a){if(a.origin==T(this,"host")||a.origin==T(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=id[b.id])a.B=!0,a.B&&(F(a.u,a.L,a),a.u.length=0),a.T(b)}};
var id=null;function U(a){a=jd(a);return"string"===typeof a&&"false"===a?!1:!!a}
function kd(a,b){var c=jd(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function jd(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;function ld(){}
function md(a){var b=5E3;isNaN(b)&&(b=void 0);var c=z("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():Tc(a,b||0)}
;function V(){}
oa(V,ld);V.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
V.f=void 0;V.g=function(){V.f||(V.f=new V)};
V.g();var nd=z("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.F;O.prototype.publish=O.prototype.K;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",nd);D("ytPubsubPubsubSubscribedKeys",z("ytPubsubPubsubSubscribedKeys")||{});D("ytPubsubPubsubTopicToKeys",z("ytPubsubPubsubTopicToKeys")||{});D("ytPubsubPubsubIsSynchronous",z("ytPubsubPubsubIsSynchronous")||{});var W=window,od=W.ytcsi&&W.ytcsi.now?W.ytcsi.now:W.performance&&W.performance.timing&&W.performance.now&&W.performance.timing.navigationStart?function(){return W.performance.timing.navigationStart+W.performance.now()}:function(){return(new Date).getTime()};var pd=kd("initial_gel_batch_timeout",1E3),qd=Math.pow(2,16)-1,rd=null,sd=0,td=void 0,ud=0,vd=0,wd=0,xd=!0,yd=z("ytLoggingTransportLogPayloadsQueue_")||{};D("ytLoggingTransportLogPayloadsQueue_",yd);var zd=z("ytLoggingTransportGELQueue_")||new Map;D("ytLoggingTransportGELQueue_",zd);var Ad=z("ytLoggingTransportTokensToCttTargetIds_")||{};D("ytLoggingTransportTokensToCttTargetIds_",Ad);
function Bd(){window.clearTimeout(ud);window.clearTimeout(vd);vd=0;td&&td.isReady()?(Cd(zd),"log_event"in yd&&Cd(Object.entries(yd.log_event)),zd.clear(),delete yd.log_event):Dd()}
function Dd(){U("web_gel_timeout_cap")&&!vd&&(vd=Tc(Bd,6E4));window.clearTimeout(ud);var a=R("LOGGING_BATCH_TIMEOUT",kd("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&xd&&(a=pd);ud=Tc(Bd,a)}
function Cd(a){var b=td,c=Math.round(od());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=Ma({context:Ed(b.f||Fd())});e.events=f;(f=Ad[d])&&Gd(e,d,f);delete Ad[d];Hd(e,c);Id(b,"log_event",e,{retry:!0,onSuccess:function(){sd=Math.round(od()-c)}});
xd=!1}}
function Hd(a,b){a.requestTimeMs=String(b);U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&U("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*qd/2));d++;d>qd&&(d=1);Fc("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;rd&&sd&&U("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:rd,roundtripMs:String(sd)});rd=c;sd=0}}
function Gd(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Jd=z("ytLoggingGelSequenceIdObj_")||{};D("ytLoggingGelSequenceIdObj_",Jd);function Kd(a){var b=Ld;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Md(b),Nd(b));b.ca_type="image";a&&(b.bid=a);return b}
function Md(a){var b={};b.dt=Jb;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function Nd(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(m){}try{var e=b.outerWidth;var f=b.outerHeight}catch(m){}try{var k=b.innerWidth;var g=b.innerHeight}catch(m){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,k,g];c=a.f.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var n=(new ub(l.clientWidth,l.clientHeight)).round()}catch(m){n=new ub(-12245933,-12245933)}h=n;n={};l=new Pb;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=Hb();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Qb(l);n.bc=l;n.bih=h.height;n.biw=h.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!I.WebGLRenderingContext,n}
var Ld=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Vc(Kd(a))});B();var Od=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Pd(){if(!Od)return null;var a=Od();return"open"in a?a:null}
;var Qd={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Rd="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Sd=!1;
function Td(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=K(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;d=U("web_ajax_ignore_global_headers_if_set");for(var f in Qd)e=R(Qd[f]),!e||!c&&!Ud(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ud(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Ud(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Ud(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=Vc(Kd(void 0));return b}
function Vd(a){var b=window.location.search,c=K(J(a)[3]||null),d=K(J(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Wc(b),f={};F(Rd,function(k){e[k]&&(f[k]=e[k])});
return Yc(a,f||{},!1)}
function Ud(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=K(J(a)[3]||null);return d?(c=c[d])?0<=Ca(c,b):!1:!0}
function Wd(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Xd(a,b);var d=Yd(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(k){if(!e){e=!0;f&&window.clearTimeout(f);var g=k.ok,h=function(l){l=l||{};var n=b.context||x;g?b.onSuccess&&b.onSuccess.call(n,l,k):b.onError&&b.onError.call(n,l,k);b.J&&b.J.call(n,l,k)};
"JSON"==(b.format||"JSON")&&(g||400<=k.status&&500>k.status)?k.json().then(h,function(){h(null)}):h(null)}});
b.P&&0<b.timeout&&(f=Tc(function(){e||(e=!0,window.clearTimeout(f),b.P.call(b.context||x))},b.timeout))}else Zd(a,b)}
function Zd(a,b){var c=b.format||"JSON";a=Xd(a,b);var d=Yd(a,b),e=!1,f=$d(a,function(h){if(!e){e=!0;g&&window.clearTimeout(g);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,m=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(l||m||r)n=ae(c,h,b.ta);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};
m=b.context||x;l?b.onSuccess&&b.onSuccess.call(m,h,n):b.onError&&b.onError.call(m,h,n);b.J&&b.J.call(m,h,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.C&&0<b.timeout){var k=b.C;var g=Tc(function(){e||(e=!0,f.abort(),window.clearTimeout(g),k.call(b.context||x,f))},b.timeout)}}
function Xd(a,b){b.xa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.fa;d&&(d[c]&&delete d[c],a=Xc(a,d));return a}
function Yd(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.o,k=R("XSRF_FIELD_NAME",void 0),g;b.headers&&(g=b.headers["Content-Type"]);b.wa||K(J(a)[3]||null)&&!b.withCredentials&&K(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.o&&b.o[k]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Wc(e),Oa(e,f),e=b.S&&"JSON"==b.S?JSON.stringify(e):Bb(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!Sd&&
c&&"POST"!=b.method&&(Sd=!0,Jc(Error("AJAX request with postData should use POST")));return e}
function ae(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?be(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=ce(e)})}c&&de(d);
return d}
function de(a){if(va(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new $a:de(a[b])}}
function be(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ce(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function $d(a,b,c,d,e,f,k){function g(){4==(h&&"readyState"in h?h.readyState:0)&&b&&Ic(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=Pd();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",g,!1):h.onreadystatechange=g;U("debug_forward_web_query_parameters")&&(a=Vd(a));h.open(c,a,!0);f&&(h.responseType=f);k&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Td(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function ee(){for(var a={},b=u(Object.entries(Wc(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function fe(){return"INNERTUBE_API_KEY"in Ec&&"INNERTUBE_API_VERSION"in Ec}
function Fd(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Y:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Z:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ba:R("INNERTUBE_CONTEXT_HL",void 0),aa:R("INNERTUBE_CONTEXT_GL",void 0),ca:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",da:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Ed(a){a={client:{hl:a.ba,gl:a.aa,clientName:a.Z,clientVersion:a.innertubeContextClientVersion,configInfo:a.Y}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,ee());return a}
function ge(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sa||R("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ra:b=Ob([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),U("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function he(a){a=Object.assign({},a);delete a.Authorization;var b=Ob();if(b){var c=new ec;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;ta(b);void 0===c&&(c=0);if(!pb){pb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var k=d.concat(e[f].split(""));ob[f]=k;for(var g=0;g<k.length;g++){var h=k[g];void 0===pb[h]&&(pb[h]=g)}}}c=ob[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;h=(k=e+2<b.length)?b[e+2]:0;g=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|h>>6;h&=63;k||(h=64,f||(n=64));d.push(c[g],c[l],c[n]||"",c[h]||"")}a.hash=d.join("")}return a}
;function ie(){var a=new xc;(a=a.isAvailable()?new Dc(a,"yt.innertube"):null)||(a=new yc("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Q(a):null;this.g=document.domain||window.location.hostname}
ie.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,B()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(nc(b))}catch(f){return}else e=escape(b);b=this.g;tb.set(""+a,e,{N:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
ie.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=tb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ie.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;tb.remove(""+a,"/",void 0===b?"youtube.com":b)};var X=new ie;function je(a,b,c,d){if(d)return null;d=X.get("nextId",!0)||1;var e=X.get("requests",!0)||{};e[d]={method:a,request:b,authState:he(c),requestTime:Math.round(od())};X.set("nextId",d+1,86400,!0);X.set("requests",e,86400,!0);return d}
function ke(a){var b=X.get("requests",!0)||{};delete b[a];X.set("requests",b,86400,!0)}
function le(a){var b=X.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(od())-d.requestTime)){var e=d.authState,f=he(ge(!1));La(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(od())),Id(a,d.method,e,{}));delete b[c]}}X.set("requests",b,86400,!0)}}
;function me(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ha(u(c)))}
oa(me,Error);function ne(a){var b=this;this.f=null;a?this.f=a:fe()&&(this.f=Fd());md(function(){le(b)})}
ne.prototype.isReady=function(){!this.f&&fe()&&(this.f=Fd());return!!this.f};
function Id(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Kc(new me("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady())throw b=new me("innertube xhrclient not ready",b,c,d),Jc(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",o:c,S:"JSON",C:function(){d.C()},
P:d.C,onSuccess:function(r,p){if(d.onSuccess)d.onSuccess(p)},
O:function(r){if(d.onSuccess)d.onSuccess(r)},
onError:function(r,p){if(d.onError)d.onError(p)},
ya:function(r){if(d.onError)d.onError(r)},
timeout:d.timeout,withCredentials:!0},f="",k=a.f.ca;k&&(f=k);k=a.f.da||!1;var g=ge(k,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var h=Xc(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&U("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=je(b,c,g,k))){var n=e.onSuccess,m=e.O;e.onSuccess=function(r,p){ke(l);n(r,p)};
c.O=function(r,p){ke(l);m(r,p)}}try{U("use_fetch_for_op_xhr")?Wd(h,e):(e.method="POST",e.o||(e.o={}),Zd(h,e))}catch(r){if("InvalidAccessError"==r.name)l&&(ke(l),l=0),Kc(Error("An extension is blocking network request."));
else throw r;}l&&md(function(){le(a)})}
;var oe=new Set,pe=0;function qe(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.m=this.f=this.g=null;this.l=wa(this);this.h=0;this.B=!1;this.u=[];this.i=null;this.U=c;this.W={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?zb(a.src):"https://www.youtube.com"),this.g=new gd(b),c||(b=re(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+wa(this.f)),ad[this.f.id]=this,window.postMessage){this.i=new O;se(this);b=T(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in cd)te(this,e)}}
q=Y.prototype;q.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
q.ea=function(){return this.f};
q.T=function(a){this.D(a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);ue(this,a);return this};
function te(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.U==c[0]&&ue(a,d)}}
q.destroy=function(){this.f.id&&(ad[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);id&&(id[this.l]=null);this.g=null;a=this.f;for(var c in G)G[c][0]==a&&Qc(c);this.m=this.f=null};
q.G=function(){return{}};
function ve(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.L(b):a.u.push(b)}
q.D=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.K(a,c);fd(this.U+"."+a,c)}};
function re(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var k=d[e].value;null!=k&&""!=k&&"null"!=k&&c.setAttribute(d[e].name,k)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+T(a.g,"title"));(d=T(a.g,"width"))&&c.setAttribute("width",d);(d=T(a.g,"height"))&&c.setAttribute("height",d);var g=a.G();g.enablejsapi=
window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.l;window.location.href&&F(["debugjs","debugcss"],function(h){var l=window.location.href;var n=l.search(Cb);b:{var m=0;for(var r=h.length;0<=(m=l.indexOf(h,m))&&m<n;){var p=l.charCodeAt(m-1);if(38==p||63==p)if(p=l.charCodeAt(m+r),!p||61==p||38==p||35==p)break b;m+=r+1}m=-1}if(0>m)l=null;else{r=l.indexOf("&",m);if(0>r||r>n)r=n;m+=h.length+1;l=decodeURIComponent(l.substr(m,r-m).replace(/\+/g,
" "))}null!==l&&(g[h]=l)});
c.src=T(a.g,"host")+a.H()+"?"+Bb(g);return c}
q.R=function(){this.f&&this.f.contentWindow?this.L({event:"listening"}):window.clearInterval(this.h)};
function se(a){hd(a.g,a,a.l);a.h=Uc(A(a.R,a));Sc(a.f,"load",A(function(){window.clearInterval(this.h);this.h=Uc(A(this.R,this))},a))}
function ue(a,b){a.W[b]||(a.W[b]=!0,ve(a,"addEventListener",[b]))}
q.L=function(a){a.id=this.l;a.channel="widget";a=nc(a);var b=this.g;var c=zb(this.f.src||"");b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.h?[c]:[c,c.replace("http:","https:")];if(this.f.contentWindow)for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(L){if(L.name&&"SyntaxError"==L.name){if(!(L.message&&0<L.message.indexOf("target origin ''"))){var d=void 0,e=void 0,f=L;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var k=e||{};e="WARNING";e=void 0===e?"ERROR":e;d=void 0===d?!1:d;if(f){if(U("console_log_js_exceptions")){var g=f,h=[];h.push("Name: "+g.name);h.push("Message: "+g.message);g.hasOwnProperty("params")&&h.push("Error Params: "+JSON.stringify(g.params));h.push("File name: "+g.fileName);h.push("Stacktrace: "+g.stack);window.console.log(h.join("\n"),g)}if((window&&window.yterr||d)&&!(5<=pe)&&0!==f.f){var l=void 0,n=qb(f);d=n.message||"Unknown Error";g=n.name||"UnknownError";h=n.lineNumber||"Not available";
var m=n.fileName||"Not available";n=n.stack||f.g||"Not available";if(f.hasOwnProperty("args")&&f.args&&f.args.length){var r=0;for(l=0;l<f.args.length;l++){var p=f.args[l],v="params."+l;r+=v.length;if(p)if(Array.isArray(p))for(var y=k,C=0;C<p.length&&!(p[C]&&(r+=qe(C,p[C],v,y),500<r));C++);else if("object"===typeof p)for(y in y=void 0,C=k,p){if(p[y]&&(r+=qe(y,p[y],v,C),500<r))break}else k[v]=String(JSON.stringify(p)).substring(0,500),r+=k[v].length;else k[v]=String(JSON.stringify(p)).substring(0,500),
r+=k[v].length;if(500<=r)break}}else if(f.hasOwnProperty("params")&&f.params)if(p=f.params,"object"===typeof f.params)for(l in v=0,p){if(p[l]&&(r="params."+l,y=String(JSON.stringify(p[l])).substr(0,500),k[r]=y,v+=r.length+y.length,500<v))break}else k.params=String(JSON.stringify(p)).substr(0,500);k={message:d,name:g,lineNumber:h,fileName:m,stack:n,params:k};f=Number(f.columnNumber);isNaN(f)||(k.lineNumber=k.lineNumber+":"+f);f=k;window.yterr&&ua(window.yterr)&&window.yterr(f);if(!(oe.has(f.message)||
0<=f.stack.indexOf("/YouTubeCenter.js")||0<=f.stack.indexOf("/mytube.js"))){if(U("kevlar_gel_error_routing")){k=void 0;g=e;m=f;h={stackTrace:m.stack};m.fileName&&(h.filename=m.fileName);d=m.lineNumber.split(":");0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(h.lineNumber=Number(d[0]),h.columnNumber=Number(d[1])):h.lineNumber=Number(d[0]));d={level:"ERROR_LEVEL_UNKNOWN",message:m.message};"ERROR"===g?d.level="ERROR_LEVEL_ERROR":"WARNING"===
g&&(d.level="ERROR_LEVEL_WARNNING");g={isObfuscated:!0,browserStackInfo:h};h={pageUrl:window.location.href,kvPairs:[]};if(m=m.params)for(n=u(Object.keys(m)),l=n.next();!l.done;l=n.next())l=l.value,h.kvPairs.push({key:"client."+l,value:String(m[l])});h={errorMetadata:h,stackTrace:g,logMessage:d};k=void 0===k?{}:k;d=ne;R("ytLoggingEventsDefaultDisabled",!1)&&ne==ne&&(d=null);k=void 0===k?{}:k;g={};g.eventTimeMs=Math.round(k.timestamp||od());g.clientError=h;h=String;k.timestamp?m=-1:(m=z("_lact",window),
null==m?m=-1:m=Math.max(B()-m,0));g.context={lastActivityMs:h(m)};U("log_sequence_info_on_gel_web")&&k.V&&(h=g.context,m=k.V,Jd[m]=m in Jd?Jd[m]+1:0,h.sequence={index:Jd[m],groupKey:m},k.va&&delete Jd[k.V]);k=k.ua;h="";k&&(h=k,m={},h.videoId?m.videoId=h.videoId:h.playlistId&&(m.playlistId=h.playlistId),Ad[k.token]=m,h=k.token);k=zd.get(h)||[];zd.set(h,k);k.push(g);d&&(td=new d);d=kd("web_logging_max_batch")||100;g=od();k.length>=d?Bd():10<=g-wd&&(Dd(),wd=g);Bd()}d=f;k=d.params||{};e={fa:{a:"logerror",
t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:e,"client.name":k.name},o:{url:R("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};k.version&&(e["client.version"]=k.version);if(e.o){d.stack&&(e.o.stack=d.stack);d=u(Object.keys(k));for(g=d.next();!g.done;g=d.next())g=g.value,e.o["client."+g]=k[g];if(k=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(k)),g=d.next();!g.done;g=d.next())g=g.value,e.o[g]=k[g];k=R("SERVER_NAME",void 0);d=
R("SERVER_VERSION",void 0);k&&d&&(e.o["server.name"]=k,e.o["server.version"]=d)}Zd(R("ECATCHER_REPORT_HOST","")+"/error_204",e);oe.add(f.message);pe++}}}}}else throw L;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function we(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function xe(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.v={};this.playerInfo={}}
oa(Z,Y);q=Z.prototype;q.H=function(){return"/embed/"+T(this.g,"videoId")};
q.G=function(){var a=T(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=T(this.g,"embedConfig")){if(va(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.T=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(va(a))for(var c in a)this.v[c]=a[c];break;case "infoDelivery":ye(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.v={};ze(this,a.apiInterface);ye(this,a);break;default:this.D(b,a)}};
function ye(a,b){if(va(b))for(var c in b)a.playerInfo[c]=b[c]}
function ze(a,b){F(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(B()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:we(c)?this[c]=function(){this.playerInfo={};
this.v={};ve(this,c,arguments);return this}:xe(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){ve(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=parseInt(T(this.g,"width"),10),b=parseInt(T(this.g,"height"),10),c=T(this.g,"host")+this.H();Wa.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(Qa,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(Ra,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(Sa,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Ta,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Ua,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Va,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.v.namespaces?a?this.v[a].options||[]:this.v.namespaces||[]:[]};
q.getOption=function(a,b){if(this.v.namespaces&&a&&b)return this.v[a][b]};
function Ae(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");b&&(b={videoId:b,width:S(a,"width"),height:S(a,"height")},new Z(a,b))}}
;function Be(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
oa(Be,Y);Be.prototype.H=function(){return"/embed/"+T(this.g,"videoId")};
Be.prototype.G=function(){return{player:0,thumb_width:T(this.g,"thumbWidth"),thumb_height:T(this.g,"thumbHeight"),thumb_align:T(this.g,"thumbAlign")}};
Be.prototype.D=function(a,b){Y.prototype.D.call(this,a,b?b.info:void 0)};
function Ce(a){if("iframe"!=a.tagName.toLowerCase()){var b=S(a,"videoid");if(b){b={videoId:b,events:{},width:S(a,"width"),height:S(a,"height"),thumbWidth:S(a,"thumb-width"),thumbHeight:S(a,"thumb-height"),thumbAlign:S(a,"thumb-align")};var c=S(a,"onclick");c&&(b.events.onClick=c);new Be(a,b)}}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return ad[a]});
D("YT.scan",dd);D("YT.subscribe",function(a,b,c){pc.subscribe(a,b,c);cd[a]=!0;for(var d in ad)te(ad[d],a)});
D("YT.unsubscribe",function(a,b,c){oc(a,b,c)});
D("YT.Player",Z);D("YT.Thumbnail",Be);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ea;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;bd.push(function(a){a=ed("player",a);F(a,Ae)});
bd.push(function(){var a=ed("thumbnail");F(a,Ce)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||dd();var De=z("onYTReady");De&&De();var Ee=z("onYouTubeIframeAPIReady");Ee&&Ee();var Fe=z("onYouTubePlayerAPIReady");Fe&&Fe();}).call(this);
