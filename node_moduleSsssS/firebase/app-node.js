/*! @license Firebase v3.2.1
    Build: 3.2.1-rc.3
    Terms: https://developers.google.com/terms */
var firebase = (function() { for(var k="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,m={},n=function(a,b){(m[a]=m[a]||[]).push(b);var c=k;a=a.split(".");for(var d=0;d<a.length-1&&c;d++)c=c[a[d]];a=a[a.length-1];c&&c[a]instanceof Function&&(c[a]=b(c[a]))},p=function(){p=function(){};if(!k.Symbol){k.Symbol=q;var a=[],b=function(b){return function(d){a=[];d=b(d);for(var e=[],g=0,h=d.length;g<h;g++){var f;a:if(f=d[g],14>f.length)f=!1;else{for(var l=0;14>l;l++)if(f[l]!="jscomp_symbol_"[l]){f=
!1;break a}f=!0}f?a.push(d[g]):e.push(d[g])}return e}};n("Object.keys",b);n("Object.getOwnPropertyNames",b);n("Object.getOwnPropertySymbols",function(c){return function(d){b.C=Object.getOwnPropertyNames(d);a.push.apply(c(d));return a}})}},r=0,q=function(a){return"jscomp_symbol_"+a+r++},t=function(){p();k.Symbol.iterator||(k.Symbol.iterator=k.Symbol("iterator"));t=function(){}},u=function(){var a=["next","error","complete"];t();var b=a[Symbol.iterator];if(b)return b.call(a);var c=0;return{next:function(){return c<
a.length?{done:!1,value:a[c++]}:{done:!0}}}},v=function(a,b){t();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d},w="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=
c.value)},x=k,y=["Array","prototype","keys"],z=0;z<y.length-1;z++){var A=y[z];A in x||(x[A]={});x=x[A]}var B=y[y.length-1],C=x[B],D=C?C:function(){return v(this,function(a){return a})};if(D!=C){for(var E=m["Array.prototype.keys"]||[],z=0;z<E.length;z++)D=E[z](D);w(x,B,{configurable:!0,writable:!0,value:D})};function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,g=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,h;h=(window||global).Reflect;if("object"===typeof h&&"function"===typeof h.decorate)g=h.decorate(a,b,c,d);else for(var f=a.length-1;0<=f;f--)if(h=a[f])g=(3>e?h(g):3<e?h(b,c,g):h(b,c))||g;return 3<e&&g&&Object.defineProperty(b,c,g),g}function __metadata(a,b){var c=(window||global).Reflect;if("object"===typeof c&&"function"===typeof c.metadata)return c.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,g){function h(a){try{l(d.next(a))}catch(b){g(b)}}function f(a){try{l(d.throw(a))}catch(b){g(b)}}function l(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(h,f)}l((d=d.apply(a,b)).next())})};function F(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=F(a[c],b[c]));return a};var G=Error.captureStackTrace,I=function(a,b){this.code=a;this.message=b;if(G)G(this,H.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};I.prototype=Object.create(Error.prototype);I.prototype.constructor=I;I.prototype.name="FirebaseError";var H=function(a,b,c){this.w=a;this.A=b;this.m=c;this.pattern=/\{\$([^}]+)}/g};
H.prototype.create=function(a,b){void 0===b&&(b={});var c=this.m[a];a=this.w+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){return void 0!==b[c]?b[c].toString():"<"+c+"?>"}),c=this.A+": "+c+" ("+a+").",c=new I(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var J="undefined"!==typeof Promise?Promise:require("rsvp").Promise;function K(a,b){a=new L(a,b);return a.subscribe.bind(a)}var L=function(a,b){var c=this;this.a=[];this.l=0;this.task=J.resolve();this.c=!1;this.g=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};L.prototype.next=function(a){M(this,function(b){b.next(a)})};L.prototype.error=function(a){M(this,function(b){b.error(a)});this.close(a)};L.prototype.complete=function(){M(this,function(a){a.complete()});this.close()};
L.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=N(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=O);void 0===e.error&&(e.error=O);void 0===e.complete&&(e.complete=O);a=this.B.bind(this,this.a.length);this.c&&this.task.then(function(){try{d.h?e.error(d.h):e.complete()}catch(a){}});this.a.push(e);return a};
L.prototype.B=function(a){void 0!==this.a&&void 0!==this.a[a]&&(this.a[a]=void 0,--this.l,0===this.l&&void 0!==this.g&&this.g(this))};var M=function(a,b){if(!a.c)for(var c=0;c<a.a.length;c++)P(a,c,b)},P=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};L.prototype.close=function(a){var b=this;this.c||(this.c=!0,void 0!==a&&(this.h=a),this.task.then(function(){b.a=void 0;b.g=void 0}))};
function N(a){if("object"!==typeof a||null===a)return!1;for(var b=u(),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function O(){};var Q=function(a,b,c){var d=this;this.i=c;this.j=!1;this.b={};this.s={};this.f=b;this.v=F(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){d[a]=d.u.bind(d,a)})};Q.prototype.delete=function(){var a=this;return(new J(function(b){R(a);b()})).then(function(){a.i.INTERNAL.removeApp(a.f);return J.all(Object.keys(a.b).map(function(b){return a.b[b].INTERNAL.delete()}))}).then(function(){a.j=!0;a.b=null;a.s=null})};
Q.prototype.u=function(a){R(this);void 0===this.b[a]&&(this.b[a]=this.i.INTERNAL.factories[a](this,this.o.bind(this)));return this.b[a]};Q.prototype.o=function(a){F(this,a)};var R=function(a){a.j&&S(T("deleted",{name:a.f}))};Object.defineProperties(Q.prototype,{name:{configurable:!0,enumerable:!0,get:function(){R(this);return this.f}},options:{configurable:!0,enumerable:!0,get:function(){R(this);return this.v}}});Q.prototype.name&&Q.prototype.options||Q.prototype.delete||console.log("dc");
function U(){function a(a){a=a||"[DEFAULT]";var c=b[a];void 0===c&&S("noApp",{name:a});return c}var b={},c={},d=[],e={__esModule:!0,initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||S("bad-app-name",{name:c+""});void 0!==b[c]&&S("dupApp",{name:c});var f=new Q(a,c,e);b[c]=f;d.forEach(function(a){return a("create",f)});void 0!=f.INTERNAL&&void 0!=f.INTERNAL.getToken||F(f,{INTERNAL:{getToken:function(){return J.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});
return f},app:a,apps:null,Promise:J,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,d,f){c[b]&&S("dupService",{name:b});c[b]=d;d=function(c){void 0===c&&(c=a());return c[b]()};void 0!==f&&F(d,f);return e[b]=d},createFirebaseNamespace:U,extendNamespace:function(a){F(e,a)},createSubscribe:K,ErrorFactory:H,registerAppHook:function(a){d.push(a)},removeApp:function(a){d.forEach(function(c){return c("delete",b[a])});delete b[a]},factories:c,Promise:void 0,deepExtend:F}};e["default"]=e;Object.defineProperty(e,
"apps",{get:function(){return Object.keys(b).map(function(a){return b[a]})}});a.App=Q;return e}function S(a,b){throw Error(T(a,b));}
function T(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};var V=U(),W=["$__firebase"],X=this;W[0]in X||!X.execScript||X.execScript("var "+W[0]);for(var Y;W.length&&(Y=W.shift());){var Z;if(Z=!W.length)Z=void 0!==V;Z?X[Y]=V:X=X[Y]?X[Y]:X[Y]={}};; return $__firebase; })(); module.exports = firebase;
firebase.SDK_VERSION = "3.2.1";
