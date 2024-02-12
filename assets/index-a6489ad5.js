var Gl=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Om=Gl((Ni,It)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Tr,Ye,Bo,Fn,js,zo,vs,Fi={},ko=[],Hl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ps=Array.isArray;function En(i,e){for(var t in e)i[t]=e[t];return i}function Go(i){var e=i.parentNode;e&&e.removeChild(i)}function Vl(i,e,t){var n,r,a,l={};for(a in e)a=="key"?n=e[a]:a=="ref"?r=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?Tr.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(a in i.defaultProps)l[a]===void 0&&(l[a]=i.defaultProps[a]);return dr(i,l,n,r,null)}function dr(i,e,t,n,r){var a={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Bo,__i:-1,__u:0};return r==null&&Ye.vnode!=null&&Ye.vnode(a),a}function un(i){return i.children}function pr(i,e){this.props=i,this.context=e}function mi(i,e){if(e==null)return i.__?mi(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?mi(i):null}function Ho(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Ho(i)}}function Ys(i){(!i.__d&&(i.__d=!0)&&Fn.push(i)&&!vr.__r++||js!==Ye.debounceRendering)&&((js=Ye.debounceRendering)||zo)(vr)}function vr(){var i,e,t,n,r,a,l,s,o;for(Fn.sort(vs);i=Fn.shift();)i.__d&&(e=Fn.length,n=void 0,a=(r=(t=i).__v).__e,s=[],o=[],(l=t.__P)&&((n=En({},r)).__v=r.__v+1,Ye.vnode&&Ye.vnode(n),Ls(l,n,r,t.__n,l.ownerSVGElement!==void 0,32&r.__u?[a]:null,s,a??mi(r),!!(32&r.__u),o),n.__.__k[n.__i]=n,Xo(s,n,o),n.__e!=a&&Ho(n)),Fn.length>e&&Fn.sort(vs));vr.__r=0}function Vo(i,e,t,n,r,a,l,s,o,f,c){var u,d,p,_,g,h=n&&n.__k||ko,m=e.length;for(t.__d=o,Wl(t,e,h),o=t.__d,u=0;u<m;u++)(p=t.__k[u])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?Fi:h[p.__i]||Fi,p.__i=u,Ls(i,p,d,r,a,l,s,o,f,c),_=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Ds(d.ref,null,p),c.push(p.ref,p.__c||_,p)),g==null&&_!=null&&(g=_),65536&p.__u||d.__k===p.__k?o=Wo(p,o,i):typeof p.type=="function"&&p.__d!==void 0?o=p.__d:_&&(o=_.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=o,t.__e=g}function Wl(i,e,t){var n,r,a,l,s,o=e.length,f=t.length,c=f,u=0;for(i.__k=[],n=0;n<o;n++)(r=i.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?dr(null,r,null,null,r):Ps(r)?dr(un,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?dr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=i,r.__b=i.__b+1,s=Xl(r,t,l=n+u,c),r.__i=s,a=null,s!==-1&&(c--,(a=t[s])&&(a.__u|=131072)),a==null||a.__v===null?(s==-1&&u--,typeof r.type!="function"&&(r.__u|=65536)):s!==l&&(s===l+1?u++:s>l?c>o-l?u+=s-l:u--:u=s<l&&s==l-1?s-l:0,s!==n+u&&(r.__u|=65536))):(a=t[n])&&a.key==null&&a.__e&&(a.__e==i.__d&&(i.__d=mi(a)),xs(a,a,!1),t[n]=null,c--);if(c)for(n=0;n<f;n++)(a=t[n])!=null&&!(131072&a.__u)&&(a.__e==i.__d&&(i.__d=mi(a)),xs(a,a))}function Wo(i,e,t){var n,r;if(typeof i.type=="function"){for(n=i.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=i,e=Wo(n[r],e,t));return e}return i.__e!=e&&(t.insertBefore(i.__e,e||null),e=i.__e),e&&e.nextSibling}function Xl(i,e,t,n){var r=i.key,a=i.type,l=t-1,s=t+1,o=e[t];if(o===null||o&&r==o.key&&a===o.type)return t;if(n>(o!=null&&!(131072&o.__u)?1:0))for(;l>=0||s<e.length;){if(l>=0){if((o=e[l])&&!(131072&o.__u)&&r==o.key&&a===o.type)return l;l--}if(s<e.length){if((o=e[s])&&!(131072&o.__u)&&r==o.key&&a===o.type)return s;s++}}return-1}function Zs(i,e,t){e[0]==="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||Hl.test(e)?t:t+"px"}function Vi(i,e,t,n,r){var a;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Zs(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Zs(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+a]=t,t?n?t.u=n.u:(t.u=Date.now(),i.addEventListener(e,a?Ks:qs,a)):i.removeEventListener(e,a?Ks:qs,a);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?i.removeAttribute(e):i.setAttribute(e,t))}}function qs(i){var e=this.l[i.type+!1];if(i.t){if(i.t<=e.u)return}else i.t=Date.now();return e(Ye.event?Ye.event(i):i)}function Ks(i){return this.l[i.type+!0](Ye.event?Ye.event(i):i)}function Ls(i,e,t,n,r,a,l,s,o,f){var c,u,d,p,_,g,h,m,x,y,T,w,M,S,P,O=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(o=!!(32&t.__u),a=[s=e.__e=t.__e]),(c=Ye.__b)&&c(e);e:if(typeof O=="function")try{if(m=e.props,x=(c=O.contextType)&&n[c.__c],y=c?x?x.props.value:c.__:n,t.__c?h=(u=e.__c=t.__c).__=u.__E:("prototype"in O&&O.prototype.render?e.__c=u=new O(m,y):(e.__c=u=new pr(m,y),u.constructor=O,u.render=Yl),x&&x.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=n,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),O.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=En({},u.__s)),En(u.__s,O.getDerivedStateFromProps(m,u.__s))),p=u.props,_=u.state,u.__v=e,d)O.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(O.getDerivedStateFromProps==null&&m!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(u.props=m,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(b){b&&(b.__=e)}),T=0;T<u._sb.length;T++)u.__h.push(u._sb[T]);u._sb=[],u.__h.length&&l.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,_,g)})}if(u.context=y,u.props=m,u.__P=i,u.__e=!1,w=Ye.__r,M=0,"prototype"in O&&O.prototype.render){for(u.state=u.__s,u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),S=0;S<u._sb.length;S++)u.__h.push(u._sb[S]);u._sb=[]}else do u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++M<25);u.state=u.__s,u.getChildContext!=null&&(n=En(En({},n),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(p,_)),Vo(i,Ps(P=c!=null&&c.type===un&&c.key==null?c.props.children:c)?P:[P],e,t,n,r,a,l,s,o,f),u.base=e.__e,e.__u&=-161,u.__h.length&&l.push(u),h&&(u.__E=u.__=null)}catch(b){e.__v=null,o||a!=null?(e.__e=s,e.__u|=o?160:32,a[a.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),Ye.__e(b,e,t)}else a==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=jl(t.__e,e,t,n,r,a,l,o,f);(c=Ye.diffed)&&c(e)}function Xo(i,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)Ds(t[n],t[++n],t[++n]);Ye.__c&&Ye.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(a){a.call(r)})}catch(a){Ye.__e(a,r.__v)}})}function jl(i,e,t,n,r,a,l,s,o){var f,c,u,d,p,_,g,h=t.props,m=e.props,x=e.type;if(x==="svg"&&(r=!0),a!=null){for(f=0;f<a.length;f++)if((p=a[f])&&"setAttribute"in p==!!x&&(x?p.localName===x:p.nodeType===3)){i=p,a[f]=null;break}}if(i==null){if(x===null)return document.createTextNode(m);i=r?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,m.is&&m),a=null,s=!1}if(x===null)h===m||s&&i.data===m||(i.data=m);else{if(a=a&&Tr.call(i.childNodes),h=t.props||Fi,!s&&a!=null)for(h={},f=0;f<i.attributes.length;f++)h[(p=i.attributes[f]).name]=p.value;for(f in h)p=h[f],f=="children"||(f=="dangerouslySetInnerHTML"?u=p:f==="key"||f in m||Vi(i,f,null,p,r));for(f in m)p=m[f],f=="children"?d=p:f=="dangerouslySetInnerHTML"?c=p:f=="value"?_=p:f=="checked"?g=p:f==="key"||s&&typeof p!="function"||h[f]===p||Vi(i,f,p,h[f],r);if(c)s||u&&(c.__html===u.__html||c.__html===i.innerHTML)||(i.innerHTML=c.__html),e.__k=[];else if(u&&(i.innerHTML=""),Vo(i,Ps(d)?d:[d],e,t,n,r&&x!=="foreignObject",a,l,a?a[0]:t.__k&&mi(t,0),s,o),a!=null)for(f=a.length;f--;)a[f]!=null&&Go(a[f]);s||(f="value",_!==void 0&&(_!==i[f]||x==="progress"&&!_||x==="option"&&_!==h[f])&&Vi(i,f,_,h[f],!1),f="checked",g!==void 0&&g!==i[f]&&Vi(i,f,g,h[f],!1))}return i}function Ds(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){Ye.__e(n,t)}}function xs(i,e,t){var n,r;if(Ye.unmount&&Ye.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Ds(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){Ye.__e(a,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&xs(n[r],e,t||typeof i.type!="function");t||i.__e==null||Go(i.__e),i.__=i.__e=i.__d=void 0}function Yl(i,e,t){return this.constructor(i,t)}function Zl(i,e,t){var n,r,a,l;Ye.__&&Ye.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,a=[],l=[],Ls(e,i=(!n&&t||e).__k=Vl(un,null,[i]),r||Fi,Fi,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?Tr.call(e.childNodes):null,a,!n&&t?t:r?r.__e:e.firstChild,n,l),Xo(a,i,l)}Tr=ko.slice,Ye={__e:function(i,e,t,n){for(var r,a,l;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(i)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),l=r.__d),l)return r.__E=r}catch(s){i=s}throw i}},Bo=0,pr.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=En({},this.state),typeof i=="function"&&(i=i(En({},t),this.props)),i&&En(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Ys(this))},pr.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Ys(this))},pr.prototype.render=un,Fn=[],zo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vs=function(i,e){return i.__v.__b-e.__v.__b},vr.__r=0;var _i,ft,Fr,$s,xr=0,jo=[],mr=[],Js=Ye.__b,Qs=Ye.__r,ea=Ye.diffed,ta=Ye.__c,na=Ye.unmount;function Ar(i,e){Ye.__h&&Ye.__h(ft,i,xr||e),xr=0;var t=ft.__H||(ft.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:mr}),t.__[i]}function Ai(i){return xr=1,ql(Yo,i)}function ql(i,e,t){var n=Ar(_i++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Yo(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],f=n.t(o,s);o!==f&&(n.__N=[f,n.__[1]],n.__c.setState({}))}],n.__c=ft,!ft.u)){var r=function(s,o,f){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(d){return d.__c});if(c.every(function(d){return!d.__N}))return!a||a.call(this,s,o,f);var u=!1;return c.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(u=!0)}}),!(!u&&n.__c.props===s)&&(!a||a.call(this,s,o,f))};ft.u=!0;var a=ft.shouldComponentUpdate,l=ft.componentWillUpdate;ft.componentWillUpdate=function(s,o,f){if(this.__e){var c=a;a=void 0,r(s,o,f),a=c}l&&l.call(this,s,o,f)},ft.shouldComponentUpdate=r}return n.__N||n.__}function ia(i,e){var t=Ar(_i++,3);!Ye.__s&&Us(t.__H,e)&&(t.__=i,t.i=e,ft.__H.__h.push(t))}function ra(i,e){var t=Ar(_i++,4);!Ye.__s&&Us(t.__H,e)&&(t.__=i,t.i=e,ft.__h.push(t))}function Br(i){return xr=5,Kl(function(){return{current:i}},[])}function Kl(i,e){var t=Ar(_i++,7);return Us(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function $l(){for(var i;i=jo.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(_r),i.__H.__h.forEach(ys),i.__H.__h=[]}catch(e){i.__H.__h=[],Ye.__e(e,i.__v)}}Ye.__b=function(i){ft=null,Js&&Js(i)},Ye.__r=function(i){Qs&&Qs(i),_i=0;var e=(ft=i.__c).__H;e&&(Fr===ft?(e.__h=[],ft.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=mr,t.__N=t.i=void 0})):(e.__h.forEach(_r),e.__h.forEach(ys),e.__h=[],_i=0)),Fr=ft},Ye.diffed=function(i){ea&&ea(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(jo.push(e)!==1&&$s===Ye.requestAnimationFrame||(($s=Ye.requestAnimationFrame)||Jl)($l)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==mr&&(t.__=t.__V),t.i=void 0,t.__V=mr})),Fr=ft=null},Ye.__c=function(i,e){e.some(function(t){try{t.__h.forEach(_r),t.__h=t.__h.filter(function(n){return!n.__||ys(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Ye.__e(n,t.__v)}}),ta&&ta(i,e)},Ye.unmount=function(i){na&&na(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{_r(n)}catch(r){e=r}}),t.__H=void 0,e&&Ye.__e(e,t.__v))};var sa=typeof requestAnimationFrame=="function";function Jl(i){var e,t=function(){clearTimeout(n),sa&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);sa&&(e=requestAnimationFrame(t))}function _r(i){var e=ft,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),ft=e}function ys(i){var e=ft;i.__c=i.__(),ft=e}function Us(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Yo(i,e){return typeof e=="function"?e(i):e}var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ql(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Wi(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zo={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,a){function l(f,c){if(!r[f]){if(!n[f]){var u=typeof Wi=="function"&&Wi;if(!c&&u)return u(f,!0);if(s)return s(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[f]={exports:{}};n[f][0].call(p.exports,function(_){var g=n[f][1][_];return l(g||_)},p,p.exports,t,n,r,a)}return r[f].exports}for(var s=typeof Wi=="function"&&Wi,o=0;o<a.length;o++)l(a[o]);return l}({1:[function(t,n,r){var a=t("./utils"),l=t("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(o){for(var f=[],c,u,d,p,_,g,h,m=0,x=o.length,y=x,T=a.getTypeOf(o)!=="string";m<o.length;)y=x-m,T?(c=o[m++],u=m<x?o[m++]:0,d=m<x?o[m++]:0):(c=o.charCodeAt(m++),u=m<x?o.charCodeAt(m++):0,d=m<x?o.charCodeAt(m++):0),p=c>>2,_=(c&3)<<4|u>>4,g=y>1?(u&15)<<2|d>>6:64,h=y>2?d&63:64,f.push(s.charAt(p)+s.charAt(_)+s.charAt(g)+s.charAt(h));return f.join("")},r.decode=function(o){var f,c,u,d,p,_,g,h=0,m=0,x="data:";if(o.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");o=o.replace(/[^A-Za-z0-9+/=]/g,"");var y=o.length*3/4;if(o.charAt(o.length-1)===s.charAt(64)&&y--,o.charAt(o.length-2)===s.charAt(64)&&y--,y%1!==0)throw new Error("Invalid base64 input, bad content length.");var T;for(l.uint8array?T=new Uint8Array(y|0):T=new Array(y|0);h<o.length;)d=s.indexOf(o.charAt(h++)),p=s.indexOf(o.charAt(h++)),_=s.indexOf(o.charAt(h++)),g=s.indexOf(o.charAt(h++)),f=d<<2|p>>4,c=(p&15)<<4|_>>2,u=(_&3)<<6|g,T[m++]=f,_!==64&&(T[m++]=c),g!==64&&(T[m++]=u);return T}},{"./support":30,"./utils":32}],2:[function(t,n,r){var a=t("./external"),l=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),o=t("./stream/DataLengthProbe");function f(c,u,d,p,_){this.compressedSize=c,this.uncompressedSize=u,this.crc32=d,this.compression=p,this.compressedContent=_}f.prototype={getContentWorker:function(){var c=new l(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),u=this;return c.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new l(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(c,u,d){return c.pipe(new s).pipe(new o("uncompressedSize")).pipe(u.compressWorker(d)).pipe(new o("compressedSize")).withStreamInfo("compression",u)},n.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var a=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var a=t("./utils");function l(){for(var c,u=[],d=0;d<256;d++){c=d;for(var p=0;p<8;p++)c=c&1?3988292384^c>>>1:c>>>1;u[d]=c}return u}var s=l();function o(c,u,d,p){var _=s,g=p+d;c=c^-1;for(var h=p;h<g;h++)c=c>>>8^_[(c^u[h])&255];return c^-1}function f(c,u,d,p){var _=s,g=p+d;c=c^-1;for(var h=p;h<g;h++)c=c>>>8^_[(c^u.charCodeAt(h))&255];return c^-1}n.exports=function(u,d){if(typeof u>"u"||!u.length)return 0;var p=a.getTypeOf(u)!=="string";return p?o(d|0,u,u.length,0):f(d|0,u,u.length,0)}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var a=null;typeof Promise<"u"?a=Promise:a=t("lie"),n.exports={Promise:a}},{lie:37}],7:[function(t,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=t("pako"),s=t("./utils"),o=t("./stream/GenericWorker"),f=a?"uint8array":"array";r.magic="\b\0";function c(u,d){o.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=d,this.meta={}}s.inherits(c,o),c.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(f,u.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(d){u.push({data:d,meta:u.meta})}},r.compressWorker=function(u){return new c("Deflate",u)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){var a=t("../utils"),l=t("../stream/GenericWorker"),s=t("../utf8"),o=t("../crc32"),f=t("../signature"),c=function(m,x){var y="",T;for(T=0;T<x;T++)y+=String.fromCharCode(m&255),m=m>>>8;return y},u=function(m,x){var y=m;return m||(y=x?16893:33204),(y&65535)<<16},d=function(m){return(m||0)&63},p=function(m,x,y,T,w,M){var S=m.file,P=m.compression,O=M!==s.utf8encode,b=a.transformTo("string",M(S.name)),D=a.transformTo("string",s.utf8encode(S.name)),F=S.comment,K=a.transformTo("string",M(F)),N=a.transformTo("string",s.utf8encode(F)),G=D.length!==S.name.length,W=N.length!==F.length,te,j,re="",le="",ue="",X=S.dir,he=S.date,H={crc32:0,compressedSize:0,uncompressedSize:0};(!x||y)&&(H.crc32=m.crc32,H.compressedSize=m.compressedSize,H.uncompressedSize=m.uncompressedSize);var ce=0;x&&(ce|=8),!O&&(G||W)&&(ce|=2048);var xe=0,we=0;X&&(xe|=16),w==="UNIX"?(we=798,xe|=u(S.unixPermissions,X)):(we=20,xe|=d(S.dosPermissions)),te=he.getUTCHours(),te=te<<6,te=te|he.getUTCMinutes(),te=te<<5,te=te|he.getUTCSeconds()/2,j=he.getUTCFullYear()-1980,j=j<<4,j=j|he.getUTCMonth()+1,j=j<<5,j=j|he.getUTCDate(),G&&(le=c(1,1)+c(o(b),4)+D,re+="up"+c(le.length,2)+le),W&&(ue=c(1,1)+c(o(K),4)+N,re+="uc"+c(ue.length,2)+ue);var ve="";ve+=`
\0`,ve+=c(ce,2),ve+=P.magic,ve+=c(te,2),ve+=c(j,2),ve+=c(H.crc32,4),ve+=c(H.compressedSize,4),ve+=c(H.uncompressedSize,4),ve+=c(b.length,2),ve+=c(re.length,2);var Se=f.LOCAL_FILE_HEADER+ve+b+re,ke=f.CENTRAL_FILE_HEADER+c(we,2)+ve+c(K.length,2)+"\0\0\0\0"+c(xe,4)+c(T,4)+b+re+K;return{fileRecord:Se,dirRecord:ke}},_=function(m,x,y,T,w){var M="",S=a.transformTo("string",w(T));return M=f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(m,2)+c(m,2)+c(x,4)+c(y,4)+c(S.length,2)+S,M},g=function(m){var x="";return x=f.DATA_DESCRIPTOR+c(m.crc32,4)+c(m.compressedSize,4)+c(m.uncompressedSize,4),x};function h(m,x,y,T){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=y,this.encodeFileName=T,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(h,l),h.prototype.push=function(m){var x=m.meta.percent||0,y=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,l.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:y?(x+100*(y-T-1))/y:100}}))},h.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var x=this.streamFiles&&!m.file.dir;if(x){var y=p(m,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(m){this.accumulate=!1;var x=this.streamFiles&&!m.file.dir,y=p(m,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),x)this.push({data:g(m),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var m=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var y=this.bytesWritten-m,T=_(this.dirRecords.length,y,m,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(m){this._sources.push(m);var x=this;return m.on("data",function(y){x.processChunk(y)}),m.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),m.on("error",function(y){x.error(y)}),this},h.prototype.resume=function(){if(!l.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0},h.prototype.error=function(m){var x=this._sources;if(!l.prototype.error.call(this,m))return!1;for(var y=0;y<x.length;y++)try{x[y].error(m)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var m=this._sources,x=0;x<m.length;x++)m[x].lock()},n.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var a=t("../compressions"),l=t("./ZipFileWorker"),s=function(o,f){var c=o||f,u=a[c];if(!u)throw new Error(c+" is not a valid compression method !");return u};r.generateWorker=function(o,f,c){var u=new l(f.streamFiles,c,f.platform,f.encodeFileName),d=0;try{o.forEach(function(p,_){d++;var g=s(_.options.compression,f.compression),h=_.options.compressionOptions||f.compressionOptions||{},m=_.dir,x=_.date;_._compressWorker(g,h).withStreamInfo("file",{name:p,dir:m,date:x,comment:_.comment||"",unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(p){u.error(p)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new a;for(var s in this)typeof this[s]!="function"&&(l[s]=this[s]);return l}}a.prototype=t("./object"),a.prototype.loadAsync=t("./load"),a.support=t("./support"),a.defaults=t("./defaults"),a.version="3.10.1",a.loadAsync=function(l,s){return new a().loadAsync(l,s)},a.external=t("./external"),n.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var a=t("./utils"),l=t("./external"),s=t("./utf8"),o=t("./zipEntries"),f=t("./stream/Crc32Probe"),c=t("./nodejsUtils");function u(d){return new l.Promise(function(p,_){var g=d.decompressed.getContentWorker().pipe(new f);g.on("error",function(h){_(h)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(d,p){var _=this;return p=a.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),c.isNode&&c.isStream(d)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",d,!0,p.optimizedBinaryString,p.base64).then(function(g){var h=new o(p);return h.load(g),h}).then(function(h){var m=[l.Promise.resolve(h)],x=h.files;if(p.checkCRC32)for(var y=0;y<x.length;y++)m.push(u(x[y]));return l.Promise.all(m)}).then(function(h){for(var m=h.shift(),x=m.files,y=0;y<x.length;y++){var T=x[y],w=T.fileNameStr,M=a.resolve(T.fileNameStr);_.file(M,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:p.createFolders}),T.dir||(_.file(M).unsafeOriginalName=w)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var a=t("../utils"),l=t("../stream/GenericWorker");function s(o,f){l.call(this,"Nodejs stream input adapter for "+o),this._upstreamEnded=!1,this._bindStream(f)}a.inherits(s,l),s.prototype._bindStream=function(o){var f=this;this._stream=o,o.pause(),o.on("data",function(c){f.push({data:c,meta:{percent:0}})}).on("error",function(c){f.isPaused?this.generatedError=c:f.error(c)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},s.prototype.pause=function(){return l.prototype.pause.call(this)?(this._stream.pause(),!0):!1},s.prototype.resume=function(){return l.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1},n.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var a=t("readable-stream").Readable,l=t("../utils");l.inherits(s,a);function s(o,f,c){a.call(this,f),this._helper=o;var u=this;o.on("data",function(d,p){u.push(d)||u._helper.pause(),c&&c(p)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}s.prototype._read=function(){this._helper.resume()},n.exports=s},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,l);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,l)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var l=new Buffer(a);return l.fill(0),l},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(t,n,r){var a=t("./utf8"),l=t("./utils"),s=t("./stream/GenericWorker"),o=t("./stream/StreamHelper"),f=t("./defaults"),c=t("./compressedObject"),u=t("./zipObject"),d=t("./generate"),p=t("./nodejsUtils"),_=t("./nodejs/NodejsStreamInputAdapter"),g=function(w,M,S){var P=l.getTypeOf(M),O,b=l.extend(S||{},f);b.date=b.date||new Date,b.compression!==null&&(b.compression=b.compression.toUpperCase()),typeof b.unixPermissions=="string"&&(b.unixPermissions=parseInt(b.unixPermissions,8)),b.unixPermissions&&b.unixPermissions&16384&&(b.dir=!0),b.dosPermissions&&b.dosPermissions&16&&(b.dir=!0),b.dir&&(w=m(w)),b.createFolders&&(O=h(w))&&x.call(this,O,!0);var D=P==="string"&&b.binary===!1&&b.base64===!1;(!S||typeof S.binary>"u")&&(b.binary=!D);var F=M instanceof c&&M.uncompressedSize===0;(F||b.dir||!M||M.length===0)&&(b.base64=!1,b.binary=!0,M="",b.compression="STORE",P="string");var K=null;M instanceof c||M instanceof s?K=M:p.isNode&&p.isStream(M)?K=new _(w,M):K=l.prepareContent(w,M,b.binary,b.optimizedBinaryString,b.base64);var N=new u(w,K,b);this.files[w]=N},h=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var M=w.lastIndexOf("/");return M>0?w.substring(0,M):""},m=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},x=function(w,M){return M=typeof M<"u"?M:f.createFolders,w=m(w),this.files[w]||g.call(this,w,null,{dir:!0,createFolders:M}),this.files[w]};function y(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var M,S,P;for(M in this.files)P=this.files[M],S=M.slice(this.root.length,M.length),S&&M.slice(0,this.root.length)===this.root&&w(S,P)},filter:function(w){var M=[];return this.forEach(function(S,P){w(S,P)&&M.push(P)}),M},file:function(w,M,S){if(arguments.length===1)if(y(w)){var P=w;return this.filter(function(b,D){return!D.dir&&P.test(b)})}else{var O=this.files[this.root+w];return O&&!O.dir?O:null}else w=this.root+w,g.call(this,w,M,S);return this},folder:function(w){if(!w)return this;if(y(w))return this.filter(function(O,b){return b.dir&&w.test(O)});var M=this.root+w,S=x.call(this,M),P=this.clone();return P.root=S.name,P},remove:function(w){w=this.root+w;var M=this.files[w];if(M||(w.slice(-1)!=="/"&&(w+="/"),M=this.files[w]),M&&!M.dir)delete this.files[w];else for(var S=this.filter(function(O,b){return b.name.slice(0,w.length)===w}),P=0;P<S.length;P++)delete this.files[S[P].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var M,S={};try{if(S=l.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode}),S.type=S.type.toLowerCase(),S.compression=S.compression.toUpperCase(),S.type==="binarystring"&&(S.type="string"),!S.type)throw new Error("No output type specified.");l.checkSupport(S.type),(S.platform==="darwin"||S.platform==="freebsd"||S.platform==="linux"||S.platform==="sunos")&&(S.platform="UNIX"),S.platform==="win32"&&(S.platform="DOS");var P=S.comment||this.comment||"";M=d.generateWorker(this,S,P)}catch(O){M=new s("error"),M.error(O)}return new o(M,S.type||"string",S.mimeType)},generateAsync:function(w,M){return this.generateInternalStream(w).accumulate(M)},generateNodeStream:function(w,M){return w=w||{},w.type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(M)}};n.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var a=t("./DataReader"),l=t("../utils");function s(o){a.call(this,o);for(var f=0;f<this.data.length;f++)o[f]=o[f]&255}l.inherits(s,a),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var f=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),d=o.charCodeAt(3),p=this.length-4;p>=0;--p)if(this.data[p]===f&&this.data[p+1]===c&&this.data[p+2]===u&&this.data[p+3]===d)return p-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var f=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),d=o.charCodeAt(3),p=this.readData(4);return f===p[0]&&c===p[1]&&u===p[2]&&d===p[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var a=t("../utils");function l(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var o=0,f;for(this.checkOffset(s),f=this.index+s-1;f>=this.index;f--)o=(o<<8)+this.byteAt(f);return this.index+=s,o},readString:function(s){return a.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC((s>>25&127)+1980,(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(s&31)<<1))}},n.exports=l},{"../utils":32}],19:[function(t,n,r){var a=t("./Uint8ArrayReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var a=t("./DataReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){var f=this.readData(4);return o===f},s.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var a=t("./ArrayReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var f=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var a=t("../utils"),l=t("../support"),s=t("./ArrayReader"),o=t("./StringReader"),f=t("./NodeBufferReader"),c=t("./Uint8ArrayReader");n.exports=function(u){var d=a.getTypeOf(u);return a.checkSupport(d),d==="string"&&!l.uint8array?new o(u):d==="nodebuffer"?new f(u):l.uint8array?new c(a.transformTo("uint8array",u)):new s(a.transformTo("array",u))}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var a=t("./GenericWorker"),l=t("../utils");function s(o){a.call(this,"ConvertWorker to "+o),this.destType=o}l.inherits(s,a),s.prototype.processChunk=function(o){this.push({data:l.transformTo(this.destType,o.data),meta:o.meta})},n.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var a=t("./GenericWorker"),l=t("../crc32"),s=t("../utils");function o(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s.inherits(o,a),o.prototype.processChunk=function(f){this.streamInfo.crc32=l(f.data,this.streamInfo.crc32||0),this.push(f)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var a=t("../utils"),l=t("./GenericWorker");function s(o){l.call(this,"DataLengthProbe for "+o),this.propName=o,this.withStreamInfo(o,0)}a.inherits(s,l),s.prototype.processChunk=function(o){if(o){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+o.data.length}l.prototype.processChunk.call(this,o)},n.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var a=t("../utils"),l=t("./GenericWorker"),s=16*1024;function o(f){l.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,f.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=a.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}a.inherits(o,l),o.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return l.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0):!1},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var f=s,c=null,u=Math.min(this.max,this.index+f);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,u);break;case"uint8array":c=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":c=this.data.slice(this.index,u);break}return this.index=u,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function a(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return this.isFinished?!1:(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,s){return this._listeners[l].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,s){if(this._listeners[l])for(var o=0;o<this._listeners[l].length;o++)this._listeners[l][o].call(this,s)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var s=this;return l.on("data",function(o){s.processChunk(o)}),l.on("end",function(){s.end()}),l.on("error",function(o){s.error(o)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var l=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,s){return this.extraStreamInfo[l]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},n.exports=a},{}],29:[function(t,n,r){var a=t("../utils"),l=t("./ConvertWorker"),s=t("./GenericWorker"),o=t("../base64"),f=t("../support"),c=t("../external"),u=null;if(f.nodestream)try{u=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(h,m,x){switch(h){case"blob":return a.newBlob(a.transformTo("arraybuffer",m),x);case"base64":return o.encode(m);default:return a.transformTo(h,m)}}function p(h,m){var x,y=0,T=null,w=0;for(x=0;x<m.length;x++)w+=m[x].length;switch(h){case"string":return m.join("");case"array":return Array.prototype.concat.apply([],m);case"uint8array":for(T=new Uint8Array(w),x=0;x<m.length;x++)T.set(m[x],y),y+=m[x].length;return T;case"nodebuffer":return Buffer.concat(m);default:throw new Error("concat : unsupported type '"+h+"'")}}function _(h,m){return new c.Promise(function(x,y){var T=[],w=h._internalType,M=h._outputType,S=h._mimeType;h.on("data",function(P,O){T.push(P),m&&m(O)}).on("error",function(P){T=[],y(P)}).on("end",function(){try{var P=d(M,p(w,T),S);x(P)}catch(O){y(O)}T=[]}).resume()})}function g(h,m,x){var y=m;switch(m){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string";break}try{this._internalType=y,this._outputType=m,this._mimeType=x,a.checkSupport(y),this._worker=h.pipe(new l(y)),h.lock()}catch(T){this._worker=new s("error"),this._worker.error(T)}}g.prototype={accumulate:function(h){return _(this,h)},on:function(h,m){var x=this;return h==="data"?this._worker.on(h,function(y){m.call(x,y.data,y.meta)}):this._worker.on(h,function(){a.delay(m,arguments,x)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(h){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},h)}},n.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var a=new ArrayBuffer(0);try{r.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var l=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,s=new l;s.append(a),r.blob=s.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var a=t("./utils"),l=t("./support"),s=t("./nodejsUtils"),o=t("./stream/GenericWorker"),f=new Array(256),c=0;c<256;c++)f[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;f[254]=f[254]=1;var u=function(h){var m,x,y,T,w,M=h.length,S=0;for(T=0;T<M;T++)x=h.charCodeAt(T),(x&64512)===55296&&T+1<M&&(y=h.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),S+=x<128?1:x<2048?2:x<65536?3:4;for(l.uint8array?m=new Uint8Array(S):m=new Array(S),w=0,T=0;w<S;T++)x=h.charCodeAt(T),(x&64512)===55296&&T+1<M&&(y=h.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),x<128?m[w++]=x:x<2048?(m[w++]=192|x>>>6,m[w++]=128|x&63):x<65536?(m[w++]=224|x>>>12,m[w++]=128|x>>>6&63,m[w++]=128|x&63):(m[w++]=240|x>>>18,m[w++]=128|x>>>12&63,m[w++]=128|x>>>6&63,m[w++]=128|x&63);return m},d=function(h,m){var x;for(m=m||h.length,m>h.length&&(m=h.length),x=m-1;x>=0&&(h[x]&192)===128;)x--;return x<0||x===0?m:x+f[h[x]]>m?x:m},p=function(h){var m,x,y,T,w=h.length,M=new Array(w*2);for(x=0,m=0;m<w;){if(y=h[m++],y<128){M[x++]=y;continue}if(T=f[y],T>4){M[x++]=65533,m+=T-1;continue}for(y&=T===2?31:T===3?15:7;T>1&&m<w;)y=y<<6|h[m++]&63,T--;if(T>1){M[x++]=65533;continue}y<65536?M[x++]=y:(y-=65536,M[x++]=55296|y>>10&1023,M[x++]=56320|y&1023)}return M.length!==x&&(M.subarray?M=M.subarray(0,x):M.length=x),a.applyFromCharCode(M)};r.utf8encode=function(m){return l.nodebuffer?s.newBufferFrom(m,"utf-8"):u(m)},r.utf8decode=function(m){return l.nodebuffer?a.transformTo("nodebuffer",m).toString("utf-8"):(m=a.transformTo(l.uint8array?"uint8array":"array",m),p(m))};function _(){o.call(this,"utf-8 decode"),this.leftOver=null}a.inherits(_,o),_.prototype.processChunk=function(h){var m=a.transformTo(l.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var x=m;m=new Uint8Array(x.length+this.leftOver.length),m.set(this.leftOver,0),m.set(x,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var y=d(m),T=m;y!==m.length&&(l.uint8array?(T=m.subarray(0,y),this.leftOver=m.subarray(y,m.length)):(T=m.slice(0,y),this.leftOver=m.slice(y,m.length))),this.push({data:r.utf8decode(T),meta:h.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=_;function g(){o.call(this,"utf-8 encode")}a.inherits(g,o),g.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var a=t("./support"),l=t("./base64"),s=t("./nodejsUtils"),o=t("./external");t("setimmediate");function f(h){var m=null;return a.uint8array?m=new Uint8Array(h.length):m=new Array(h.length),u(h,m)}r.newBlob=function(h,m){r.checkSupport("blob");try{return new Blob([h],{type:m})}catch{try{var x=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,y=new x;return y.append(h),y.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};function c(h){return h}function u(h,m){for(var x=0;x<h.length;++x)m[x]=h.charCodeAt(x)&255;return m}var d={stringifyByChunk:function(h,m,x){var y=[],T=0,w=h.length;if(w<=x)return String.fromCharCode.apply(null,h);for(;T<w;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,h.slice(T,Math.min(T+x,w)))):y.push(String.fromCharCode.apply(null,h.subarray(T,Math.min(T+x,w)))),T+=x;return y.join("")},stringifyByChar:function(h){for(var m="",x=0;x<h.length;x++)m+=String.fromCharCode(h[x]);return m},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}}()}};function p(h){var m=65536,x=r.getTypeOf(h),y=!0;if(x==="uint8array"?y=d.applyCanBeUsed.uint8array:x==="nodebuffer"&&(y=d.applyCanBeUsed.nodebuffer),y)for(;m>1;)try{return d.stringifyByChunk(h,x,m)}catch{m=Math.floor(m/2)}return d.stringifyByChar(h)}r.applyFromCharCode=p;function _(h,m){for(var x=0;x<h.length;x++)m[x]=h[x];return m}var g={};g.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return g.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,s.allocBuffer(h.length))}},g.array={string:p,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(h)}},g.arraybuffer={string:function(h){return p(new Uint8Array(h))},array:function(h){return _(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(new Uint8Array(h))}},g.uint8array={string:p,array:function(h){return _(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return s.newBufferFrom(h)}},g.nodebuffer={string:p,array:function(h){return _(h,new Array(h.length))},arraybuffer:function(h){return g.nodebuffer.uint8array(h).buffer},uint8array:function(h){return _(h,new Uint8Array(h.length))},nodebuffer:c},r.transformTo=function(h,m){if(m||(m=""),!h)return m;r.checkSupport(h);var x=r.getTypeOf(m),y=g[x][h](m);return y},r.resolve=function(h){for(var m=h.split("/"),x=[],y=0;y<m.length;y++){var T=m[y];T==="."||T===""&&y!==0&&y!==m.length-1||(T===".."?x.pop():x.push(T))}return x.join("/")},r.getTypeOf=function(h){if(typeof h=="string")return"string";if(Object.prototype.toString.call(h)==="[object Array]")return"array";if(a.nodebuffer&&s.isBuffer(h))return"nodebuffer";if(a.uint8array&&h instanceof Uint8Array)return"uint8array";if(a.arraybuffer&&h instanceof ArrayBuffer)return"arraybuffer"},r.checkSupport=function(h){var m=a[h.toLowerCase()];if(!m)throw new Error(h+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(h){var m="",x,y;for(y=0;y<(h||"").length;y++)x=h.charCodeAt(y),m+="\\x"+(x<16?"0":"")+x.toString(16).toUpperCase();return m},r.delay=function(h,m,x){setImmediate(function(){h.apply(x||null,m||[])})},r.inherits=function(h,m){var x=function(){};x.prototype=m.prototype,h.prototype=new x},r.extend=function(){var h={},m,x;for(m=0;m<arguments.length;m++)for(x in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],x)&&typeof h[x]>"u"&&(h[x]=arguments[m][x]);return h},r.prepareContent=function(h,m,x,y,T){var w=o.Promise.resolve(m).then(function(M){var S=a.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1);return S&&typeof FileReader<"u"?new o.Promise(function(P,O){var b=new FileReader;b.onload=function(D){P(D.target.result)},b.onerror=function(D){O(D.target.error)},b.readAsArrayBuffer(M)}):M});return w.then(function(M){var S=r.getTypeOf(M);return S?(S==="arraybuffer"?M=r.transformTo("uint8array",M):S==="string"&&(T?M=l.decode(M):x&&y!==!0&&(M=f(M))),M):o.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var a=t("./reader/readerFor"),l=t("./utils"),s=t("./signature"),o=t("./zipEntry"),f=t("./support");function c(u){this.files=[],this.loadOptions=u}c.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(d)+", expected "+l.pretty(u)+")")}},isSignature:function(u,d){var p=this.reader.index;this.reader.setIndex(u);var _=this.reader.readString(4),g=_===d;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),d=f.uint8array?"uint8array":"array",p=l.transformTo(d,u);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u=this.zip64EndOfCentralSize-44,d=0,p,_,g;d<u;)p=this.reader.readInt(2),_=this.reader.readInt(4),g=this.reader.readData(_),this.zip64ExtensibleData[p]={id:p,length:_,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,d;for(u=0;u<this.files.length;u++)d=this.files[u],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)u=new o({zip64:this.zip64},this.loadOptions),u.readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(u<0){var d=!this.isSignature(0,s.LOCAL_FILE_HEADER);throw d?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(u);var p=u;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,u=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),u<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var _=this.centralDirOffset+this.centralDirSize;this.zip64&&(_+=20,_+=12+this.zip64EndOfCentralSize);var g=p-_;if(g>0)this.isSignature(p,s.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=a(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var a=t("./reader/readerFor"),l=t("./utils"),s=t("./compressedObject"),o=t("./crc32"),f=t("./utf8"),c=t("./compressions"),u=t("./support"),d=0,p=3,_=function(h){for(var m in c)if(Object.prototype.hasOwnProperty.call(c,m)&&c[m].magic===h)return c[m];return null};function g(h,m){this.options=h,this.loadOptions=m}g.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(h){var m,x;if(h.skip(22),this.fileNameLength=h.readInt(2),x=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(x),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(m=_(this.compressionMethod),m===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,m,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var m=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(m),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),h===d&&(this.dosPermissions=this.externalFileAttributes&63),h===p&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=a(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var m=h.index+this.extraFieldsLength,x,y,T;for(this.extraFields||(this.extraFields={});h.index+4<m;)x=h.readInt(2),y=h.readInt(2),T=h.readData(y),this.extraFields[x]={id:x,length:y,value:T};h.setIndex(m)},handleUTF8:function(){var h=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var x=l.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(x)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var T=l.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(T)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var m=a(h.value);return m.readInt(1)!==1||o(this.fileName)!==m.readInt(4)?null:f.utf8decode(m.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var m=a(h.value);return m.readInt(1)!==1||o(this.fileComment)!==m.readInt(4)?null:f.utf8decode(m.readData(h.length-5))}return null}},n.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),s=t("./utf8"),o=t("./compressedObject"),f=t("./stream/GenericWorker"),c=function(_,g,h){this.name=_,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=g,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}};c.prototype={internalStream:function(_){var g=null,h="string";try{if(!_)throw new Error("No output type specified.");h=_.toLowerCase();var m=h==="string"||h==="text";(h==="binarystring"||h==="text")&&(h="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!m&&(g=g.pipe(new s.Utf8EncodeWorker)),!x&&m&&(g=g.pipe(new s.Utf8DecodeWorker))}catch(y){g=new f("error"),g.error(y)}return new a(g,h,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof o&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new s.Utf8EncodeWorker)),o.createWorkerFrom(h,_,g)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof f?this._data:new l(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<u.length;p++)c.prototype[u[p]]=d;n.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(a){var l=a.MutationObserver||a.WebKitMutationObserver,s;if(l){var o=0,f=new l(_),c=a.document.createTextNode("");f.observe(c,{characterData:!0}),s=function(){c.data=o=++o%2}}else if(!a.setImmediate&&typeof a.MessageChannel<"u"){var u=new a.MessageChannel;u.port1.onmessage=_,s=function(){u.port2.postMessage(0)}}else"document"in a&&"onreadystatechange"in a.document.createElement("script")?s=function(){var h=a.document.createElement("script");h.onreadystatechange=function(){_(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},a.document.documentElement.appendChild(h)}:s=function(){setTimeout(_,0)};var d,p=[];function _(){d=!0;for(var h,m,x=p.length;x;){for(m=p,p=[],h=-1;++h<x;)m[h]();x=p.length}d=!1}n.exports=g;function g(h){p.push(h)===1&&!d&&s()}}).call(this,typeof Qt<"u"?Qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var a=t("immediate");function l(){}var s={},o=["REJECTED"],f=["FULFILLED"],c=["PENDING"];n.exports=u;function u(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,w!==l&&g(this,w)}u.prototype.finally=function(w){if(typeof w!="function")return this;var M=this.constructor;return this.then(S,P);function S(O){function b(){return O}return M.resolve(w()).then(b)}function P(O){function b(){throw O}return M.resolve(w()).then(b)}},u.prototype.catch=function(w){return this.then(null,w)},u.prototype.then=function(w,M){if(typeof w!="function"&&this.state===f||typeof M!="function"&&this.state===o)return this;var S=new this.constructor(l);if(this.state!==c){var P=this.state===f?w:M;p(S,P,this.outcome)}else this.queue.push(new d(S,w,M));return S};function d(w,M,S){this.promise=w,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}d.prototype.callFulfilled=function(w){s.resolve(this.promise,w)},d.prototype.otherCallFulfilled=function(w){p(this.promise,this.onFulfilled,w)},d.prototype.callRejected=function(w){s.reject(this.promise,w)},d.prototype.otherCallRejected=function(w){p(this.promise,this.onRejected,w)};function p(w,M,S){a(function(){var P;try{P=M(S)}catch(O){return s.reject(w,O)}P===w?s.reject(w,new TypeError("Cannot resolve promise with itself")):s.resolve(w,P)})}s.resolve=function(w,M){var S=h(_,M);if(S.status==="error")return s.reject(w,S.value);var P=S.value;if(P)g(w,P);else{w.state=f,w.outcome=M;for(var O=-1,b=w.queue.length;++O<b;)w.queue[O].callFulfilled(M)}return w},s.reject=function(w,M){w.state=o,w.outcome=M;for(var S=-1,P=w.queue.length;++S<P;)w.queue[S].callRejected(M);return w};function _(w){var M=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof M=="function")return function(){M.apply(w,arguments)}}function g(w,M){var S=!1;function P(F){S||(S=!0,s.reject(w,F))}function O(F){S||(S=!0,s.resolve(w,F))}function b(){M(O,P)}var D=h(b);D.status==="error"&&P(D.value)}function h(w,M){var S={};try{S.value=w(M),S.status="success"}catch(P){S.status="error",S.value=P}return S}u.resolve=m;function m(w){return w instanceof this?w:s.resolve(new this(l),w)}u.reject=x;function x(w){var M=new this(l);return s.reject(M,w)}u.all=y;function y(w){var M=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,P=!1;if(!S)return this.resolve([]);for(var O=new Array(S),b=0,D=-1,F=new this(l);++D<S;)K(w[D],D);return F;function K(N,G){M.resolve(N).then(W,function(te){P||(P=!0,s.reject(F,te))});function W(te){O[G]=te,++b===S&&!P&&(P=!0,s.resolve(F,O))}}}u.race=T;function T(w){var M=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,P=!1;if(!S)return this.resolve([]);for(var O=-1,b=new this(l);++O<S;)D(w[O]);return b;function D(F){M.resolve(F).then(function(K){P||(P=!0,s.resolve(b,K))},function(K){P||(P=!0,s.reject(b,K))})}}},{immediate:36}],38:[function(t,n,r){var a=t("./lib/utils/common").assign,l=t("./lib/deflate"),s=t("./lib/inflate"),o=t("./lib/zlib/constants"),f={};a(f,l,s,o),n.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var a=t("./zlib/deflate"),l=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/messages"),f=t("./zlib/zstream"),c=Object.prototype.toString,u=0,d=4,p=0,_=1,g=2,h=-1,m=0,x=8;function y(S){if(!(this instanceof y))return new y(S);this.options=l.assign({level:h,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var P=this.options;P.raw&&P.windowBits>0?P.windowBits=-P.windowBits:P.gzip&&P.windowBits>0&&P.windowBits<16&&(P.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var O=a.deflateInit2(this.strm,P.level,P.method,P.windowBits,P.memLevel,P.strategy);if(O!==p)throw new Error(o[O]);if(P.header&&a.deflateSetHeader(this.strm,P.header),P.dictionary){var b;if(typeof P.dictionary=="string"?b=s.string2buf(P.dictionary):c.call(P.dictionary)==="[object ArrayBuffer]"?b=new Uint8Array(P.dictionary):b=P.dictionary,O=a.deflateSetDictionary(this.strm,b),O!==p)throw new Error(o[O]);this._dict_set=!0}}y.prototype.push=function(S,P){var O=this.strm,b=this.options.chunkSize,D,F;if(this.ended)return!1;F=P===~~P?P:P===!0?d:u,typeof S=="string"?O.input=s.string2buf(S):c.call(S)==="[object ArrayBuffer]"?O.input=new Uint8Array(S):O.input=S,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new l.Buf8(b),O.next_out=0,O.avail_out=b),D=a.deflate(O,F),D!==_&&D!==p)return this.onEnd(D),this.ended=!0,!1;(O.avail_out===0||O.avail_in===0&&(F===d||F===g))&&(this.options.to==="string"?this.onData(s.buf2binstring(l.shrinkBuf(O.output,O.next_out))):this.onData(l.shrinkBuf(O.output,O.next_out)))}while((O.avail_in>0||O.avail_out===0)&&D!==_);return F===d?(D=a.deflateEnd(this.strm),this.onEnd(D),this.ended=!0,D===p):(F===g&&(this.onEnd(p),O.avail_out=0),!0)},y.prototype.onData=function(S){this.chunks.push(S)},y.prototype.onEnd=function(S){S===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg};function T(S,P){var O=new y(P);if(O.push(S,!0),O.err)throw O.msg||o[O.err];return O.result}function w(S,P){return P=P||{},P.raw=!0,T(S,P)}function M(S,P){return P=P||{},P.gzip=!0,T(S,P)}r.Deflate=y,r.deflate=T,r.deflateRaw=w,r.gzip=M},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var a=t("./zlib/inflate"),l=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/constants"),f=t("./zlib/messages"),c=t("./zlib/zstream"),u=t("./zlib/gzheader"),d=Object.prototype.toString;function p(h){if(!(this instanceof p))return new p(h);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},h||{});var m=this.options;m.raw&&m.windowBits>=0&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),m.windowBits>=0&&m.windowBits<16&&!(h&&h.windowBits)&&(m.windowBits+=32),m.windowBits>15&&m.windowBits<48&&(m.windowBits&15||(m.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var x=a.inflateInit2(this.strm,m.windowBits);if(x!==o.Z_OK)throw new Error(f[x]);this.header=new u,a.inflateGetHeader(this.strm,this.header)}p.prototype.push=function(h,m){var x=this.strm,y=this.options.chunkSize,T=this.options.dictionary,w,M,S,P,O,b,D=!1;if(this.ended)return!1;M=m===~~m?m:m===!0?o.Z_FINISH:o.Z_NO_FLUSH,typeof h=="string"?x.input=s.binstring2buf(h):d.call(h)==="[object ArrayBuffer]"?x.input=new Uint8Array(h):x.input=h,x.next_in=0,x.avail_in=x.input.length;do{if(x.avail_out===0&&(x.output=new l.Buf8(y),x.next_out=0,x.avail_out=y),w=a.inflate(x,o.Z_NO_FLUSH),w===o.Z_NEED_DICT&&T&&(typeof T=="string"?b=s.string2buf(T):d.call(T)==="[object ArrayBuffer]"?b=new Uint8Array(T):b=T,w=a.inflateSetDictionary(this.strm,b)),w===o.Z_BUF_ERROR&&D===!0&&(w=o.Z_OK,D=!1),w!==o.Z_STREAM_END&&w!==o.Z_OK)return this.onEnd(w),this.ended=!0,!1;x.next_out&&(x.avail_out===0||w===o.Z_STREAM_END||x.avail_in===0&&(M===o.Z_FINISH||M===o.Z_SYNC_FLUSH))&&(this.options.to==="string"?(S=s.utf8border(x.output,x.next_out),P=x.next_out-S,O=s.buf2string(x.output,S),x.next_out=P,x.avail_out=y-P,P&&l.arraySet(x.output,x.output,S,P,0),this.onData(O)):this.onData(l.shrinkBuf(x.output,x.next_out))),x.avail_in===0&&x.avail_out===0&&(D=!0)}while((x.avail_in>0||x.avail_out===0)&&w!==o.Z_STREAM_END);return w===o.Z_STREAM_END&&(M=o.Z_FINISH),M===o.Z_FINISH?(w=a.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===o.Z_OK):(M===o.Z_SYNC_FLUSH&&(this.onEnd(o.Z_OK),x.avail_out=0),!0)},p.prototype.onData=function(h){this.chunks.push(h)},p.prototype.onEnd=function(h){h===o.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg};function _(h,m){var x=new p(m);if(x.push(h,!0),x.err)throw x.msg||f[x.err];return x.result}function g(h,m){return m=m||{},m.raw=!0,_(h,m)}r.Inflate=p,r.inflate=_,r.inflateRaw=g,r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(o){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var c=f.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var u in c)c.hasOwnProperty(u)&&(o[u]=c[u])}}return o},r.shrinkBuf=function(o,f){return o.length===f?o:o.subarray?o.subarray(0,f):(o.length=f,o)};var l={arraySet:function(o,f,c,u,d){if(f.subarray&&o.subarray){o.set(f.subarray(c,c+u),d);return}for(var p=0;p<u;p++)o[d+p]=f[c+p]},flattenChunks:function(o){var f,c,u,d,p,_;for(u=0,f=0,c=o.length;f<c;f++)u+=o[f].length;for(_=new Uint8Array(u),d=0,f=0,c=o.length;f<c;f++)p=o[f],_.set(p,d),d+=p.length;return _}},s={arraySet:function(o,f,c,u,d){for(var p=0;p<u;p++)o[d+p]=f[c+p]},flattenChunks:function(o){return[].concat.apply([],o)}};r.setTyped=function(o){o?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,l)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(a)},{}],42:[function(t,n,r){var a=t("./common"),l=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var o=new a.Buf8(256),f=0;f<256;f++)o[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;o[254]=o[254]=1,r.string2buf=function(u){var d,p,_,g,h,m=u.length,x=0;for(g=0;g<m;g++)p=u.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=u.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),x+=p<128?1:p<2048?2:p<65536?3:4;for(d=new a.Buf8(x),h=0,g=0;h<x;g++)p=u.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=u.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),p<128?d[h++]=p:p<2048?(d[h++]=192|p>>>6,d[h++]=128|p&63):p<65536?(d[h++]=224|p>>>12,d[h++]=128|p>>>6&63,d[h++]=128|p&63):(d[h++]=240|p>>>18,d[h++]=128|p>>>12&63,d[h++]=128|p>>>6&63,d[h++]=128|p&63);return d};function c(u,d){if(d<65537&&(u.subarray&&s||!u.subarray&&l))return String.fromCharCode.apply(null,a.shrinkBuf(u,d));for(var p="",_=0;_<d;_++)p+=String.fromCharCode(u[_]);return p}r.buf2binstring=function(u){return c(u,u.length)},r.binstring2buf=function(u){for(var d=new a.Buf8(u.length),p=0,_=d.length;p<_;p++)d[p]=u.charCodeAt(p);return d},r.buf2string=function(u,d){var p,_,g,h,m=d||u.length,x=new Array(m*2);for(_=0,p=0;p<m;){if(g=u[p++],g<128){x[_++]=g;continue}if(h=o[g],h>4){x[_++]=65533,p+=h-1;continue}for(g&=h===2?31:h===3?15:7;h>1&&p<m;)g=g<<6|u[p++]&63,h--;if(h>1){x[_++]=65533;continue}g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|g&1023)}return c(x,_)},r.utf8border=function(u,d){var p;for(d=d||u.length,d>u.length&&(d=u.length),p=d-1;p>=0&&(u[p]&192)===128;)p--;return p<0||p===0?d:p+o[u[p]]>d?p:d}},{"./common":41}],43:[function(t,n,r){function a(l,s,o,f){for(var c=l&65535|0,u=l>>>16&65535|0,d=0;o!==0;){d=o>2e3?2e3:o,o-=d;do c=c+s[f++]|0,u=u+c|0;while(--d);c%=65521,u%=65521}return c|u<<16|0}n.exports=a},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){function a(){for(var o,f=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=o&1?3988292384^o>>>1:o>>>1;f[c]=o}return f}var l=a();function s(o,f,c,u){var d=l,p=u+c;o^=-1;for(var _=u;_<p;_++)o=o>>>8^d[(o^f[_])&255];return o^-1}n.exports=s},{}],46:[function(t,n,r){var a=t("../utils/common"),l=t("./trees"),s=t("./adler32"),o=t("./crc32"),f=t("./messages"),c=0,u=1,d=3,p=4,_=5,g=0,h=1,m=-2,x=-3,y=-5,T=-1,w=1,M=2,S=3,P=4,O=0,b=2,D=8,F=9,K=15,N=8,G=29,W=256,te=W+1+G,j=30,re=19,le=2*te+1,ue=15,X=3,he=258,H=he+X+1,ce=32,xe=42,we=69,ve=73,Se=91,ke=103,Ae=113,V=666,He=1,Pe=2,Oe=3,Le=4,Be=3;function Ne(v,q){return v.msg=f[q],q}function I(v){return(v<<1)-(v>4?9:0)}function L(v){for(var q=v.length;--q>=0;)v[q]=0}function J(v){var q=v.state,$=q.pending;$>v.avail_out&&($=v.avail_out),$!==0&&(a.arraySet(v.output,q.pending_buf,q.pending_out,$,v.next_out),v.next_out+=$,q.pending_out+=$,v.total_out+=$,v.avail_out-=$,q.pending-=$,q.pending===0&&(q.pending_out=0))}function fe(v,q){l._tr_flush_block(v,v.block_start>=0?v.block_start:-1,v.strstart-v.block_start,q),v.block_start=v.strstart,J(v.strm)}function ae(v,q){v.pending_buf[v.pending++]=q}function _e(v,q){v.pending_buf[v.pending++]=q>>>8&255,v.pending_buf[v.pending++]=q&255}function De(v,q,$,R){var B=v.avail_in;return B>R&&(B=R),B===0?0:(v.avail_in-=B,a.arraySet(q,v.input,v.next_in,B,$),v.state.wrap===1?v.adler=s(v.adler,q,B,$):v.state.wrap===2&&(v.adler=o(v.adler,q,B,$)),v.next_in+=B,v.total_in+=B,B)}function ye(v,q){var $=v.max_chain_length,R=v.strstart,B,Y,Te=v.prev_length,be=v.nice_match,Ce=v.strstart>v.w_size-H?v.strstart-(v.w_size-H):0,nt=v.window,Pt=v.w_mask,ot=v.prev,Je=v.strstart+he,ct=nt[R+Te-1],pt=nt[R+Te];v.prev_length>=v.good_match&&($>>=2),be>v.lookahead&&(be=v.lookahead);do if(B=q,!(nt[B+Te]!==pt||nt[B+Te-1]!==ct||nt[B]!==nt[R]||nt[++B]!==nt[R+1])){R+=2,B++;do;while(nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&nt[++R]===nt[++B]&&R<Je);if(Y=he-(Je-R),R=Je-he,Y>Te){if(v.match_start=q,Te=Y,Y>=be)break;ct=nt[R+Te-1],pt=nt[R+Te]}}while((q=ot[q&Pt])>Ce&&--$!==0);return Te<=v.lookahead?Te:v.lookahead}function Ee(v){var q=v.w_size,$,R,B,Y,Te;do{if(Y=v.window_size-v.lookahead-v.strstart,v.strstart>=q+(q-H)){a.arraySet(v.window,v.window,q,q,0),v.match_start-=q,v.strstart-=q,v.block_start-=q,R=v.hash_size,$=R;do B=v.head[--$],v.head[$]=B>=q?B-q:0;while(--R);R=q,$=R;do B=v.prev[--$],v.prev[$]=B>=q?B-q:0;while(--R);Y+=q}if(v.strm.avail_in===0)break;if(R=De(v.strm,v.window,v.strstart+v.lookahead,Y),v.lookahead+=R,v.lookahead+v.insert>=X)for(Te=v.strstart-v.insert,v.ins_h=v.window[Te],v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+X-1])&v.hash_mask,v.prev[Te&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=Te,Te++,v.insert--,!(v.lookahead+v.insert<X)););}while(v.lookahead<H&&v.strm.avail_in!==0)}function Fe(v,q){var $=65535;for($>v.pending_buf_size-5&&($=v.pending_buf_size-5);;){if(v.lookahead<=1){if(Ee(v),v.lookahead===0&&q===c)return He;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var R=v.block_start+$;if((v.strstart===0||v.strstart>=R)&&(v.lookahead=v.strstart-R,v.strstart=R,fe(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-H&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,q===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):(v.strstart>v.block_start&&(fe(v,!1),v.strm.avail_out===0),He)}function Ge(v,q){for(var $,R;;){if(v.lookahead<H){if(Ee(v),v.lookahead<H&&q===c)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=X&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),$!==0&&v.strstart-$<=v.w_size-H&&(v.match_length=ye(v,$)),v.match_length>=X)if(R=l._tr_tally(v,v.strstart-v.match_start,v.match_length-X),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=X){v.match_length--;do v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart;while(--v.match_length!==0);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else R=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(R&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=v.strstart<X-1?v.strstart:X-1,q===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function de(v,q){for(var $,R,B;;){if(v.lookahead<H){if(Ee(v),v.lookahead<H&&q===c)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=X&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=X-1,$!==0&&v.prev_length<v.max_lazy_match&&v.strstart-$<=v.w_size-H&&(v.match_length=ye(v,$),v.match_length<=5&&(v.strategy===w||v.match_length===X&&v.strstart-v.match_start>4096)&&(v.match_length=X-1)),v.prev_length>=X&&v.match_length<=v.prev_length){B=v.strstart+v.lookahead-X,R=l._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-X),v.lookahead-=v.prev_length-1,v.prev_length-=2;do++v.strstart<=B&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart);while(--v.prev_length!==0);if(v.match_available=0,v.match_length=X-1,v.strstart++,R&&(fe(v,!1),v.strm.avail_out===0))return He}else if(v.match_available){if(R=l._tr_tally(v,0,v.window[v.strstart-1]),R&&fe(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return He}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(R=l._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<X-1?v.strstart:X-1,q===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Xe(v,q){for(var $,R,B,Y,Te=v.window;;){if(v.lookahead<=he){if(Ee(v),v.lookahead<=he&&q===c)return He;if(v.lookahead===0)break}if(v.match_length=0,v.lookahead>=X&&v.strstart>0&&(B=v.strstart-1,R=Te[B],R===Te[++B]&&R===Te[++B]&&R===Te[++B])){Y=v.strstart+he;do;while(R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&B<Y);v.match_length=he-(Y-B),v.match_length>v.lookahead&&(v.match_length=v.lookahead)}if(v.match_length>=X?($=l._tr_tally(v,1,v.match_length-X),v.lookahead-=v.match_length,v.strstart+=v.match_length,v.match_length=0):($=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++),$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,q===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ve(v,q){for(var $;;){if(v.lookahead===0&&(Ee(v),v.lookahead===0)){if(q===c)return He;break}if(v.match_length=0,$=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++,$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,q===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ie(v,q,$,R,B){this.good_length=v,this.max_lazy=q,this.nice_length=$,this.max_chain=R,this.func=B}var Ue;Ue=[new Ie(0,0,0,0,Fe),new Ie(4,4,8,4,Ge),new Ie(4,5,16,8,Ge),new Ie(4,6,32,32,Ge),new Ie(4,4,16,16,de),new Ie(8,16,32,32,de),new Ie(8,16,128,128,de),new Ie(8,32,128,256,de),new Ie(32,128,258,1024,de),new Ie(32,258,258,4096,de)];function me(v){v.window_size=2*v.w_size,L(v.head),v.max_lazy_match=Ue[v.level].max_lazy,v.good_match=Ue[v.level].good_length,v.nice_match=Ue[v.level].nice_length,v.max_chain_length=Ue[v.level].max_chain,v.strstart=0,v.block_start=0,v.lookahead=0,v.insert=0,v.match_length=v.prev_length=X-1,v.match_available=0,v.ins_h=0}function A(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=D,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(le*2),this.dyn_dtree=new a.Buf16((2*j+1)*2),this.bl_tree=new a.Buf16((2*re+1)*2),L(this.dyn_ltree),L(this.dyn_dtree),L(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(ue+1),this.heap=new a.Buf16(2*te+1),L(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*te+1),L(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ee(v){var q;return!v||!v.state?Ne(v,m):(v.total_in=v.total_out=0,v.data_type=b,q=v.state,q.pending=0,q.pending_out=0,q.wrap<0&&(q.wrap=-q.wrap),q.status=q.wrap?xe:Ae,v.adler=q.wrap===2?0:1,q.last_flush=c,l._tr_init(q),g)}function oe(v){var q=ee(v);return q===g&&me(v.state),q}function ge(v,q){return!v||!v.state||v.state.wrap!==2?m:(v.state.gzhead=q,g)}function z(v,q,$,R,B,Y){if(!v)return m;var Te=1;if(q===T&&(q=6),R<0?(Te=0,R=-R):R>15&&(Te=2,R-=16),B<1||B>F||$!==D||R<8||R>15||q<0||q>9||Y<0||Y>P)return Ne(v,m);R===8&&(R=9);var be=new A;return v.state=be,be.strm=v,be.wrap=Te,be.gzhead=null,be.w_bits=R,be.w_size=1<<be.w_bits,be.w_mask=be.w_size-1,be.hash_bits=B+7,be.hash_size=1<<be.hash_bits,be.hash_mask=be.hash_size-1,be.hash_shift=~~((be.hash_bits+X-1)/X),be.window=new a.Buf8(be.w_size*2),be.head=new a.Buf16(be.hash_size),be.prev=new a.Buf16(be.w_size),be.lit_bufsize=1<<B+6,be.pending_buf_size=be.lit_bufsize*4,be.pending_buf=new a.Buf8(be.pending_buf_size),be.d_buf=1*be.lit_bufsize,be.l_buf=(1+2)*be.lit_bufsize,be.level=q,be.strategy=Y,be.method=$,oe(v)}function C(v,q){return z(v,q,D,K,N,O)}function E(v,q){var $,R,B,Y;if(!v||!v.state||q>_||q<0)return v?Ne(v,m):m;if(R=v.state,!v.output||!v.input&&v.avail_in!==0||R.status===V&&q!==p)return Ne(v,v.avail_out===0?y:m);if(R.strm=v,$=R.last_flush,R.last_flush=q,R.status===xe)if(R.wrap===2)v.adler=0,ae(R,31),ae(R,139),ae(R,8),R.gzhead?(ae(R,(R.gzhead.text?1:0)+(R.gzhead.hcrc?2:0)+(R.gzhead.extra?4:0)+(R.gzhead.name?8:0)+(R.gzhead.comment?16:0)),ae(R,R.gzhead.time&255),ae(R,R.gzhead.time>>8&255),ae(R,R.gzhead.time>>16&255),ae(R,R.gzhead.time>>24&255),ae(R,R.level===9?2:R.strategy>=M||R.level<2?4:0),ae(R,R.gzhead.os&255),R.gzhead.extra&&R.gzhead.extra.length&&(ae(R,R.gzhead.extra.length&255),ae(R,R.gzhead.extra.length>>8&255)),R.gzhead.hcrc&&(v.adler=o(v.adler,R.pending_buf,R.pending,0)),R.gzindex=0,R.status=we):(ae(R,0),ae(R,0),ae(R,0),ae(R,0),ae(R,0),ae(R,R.level===9?2:R.strategy>=M||R.level<2?4:0),ae(R,Be),R.status=Ae);else{var Te=D+(R.w_bits-8<<4)<<8,be=-1;R.strategy>=M||R.level<2?be=0:R.level<6?be=1:R.level===6?be=2:be=3,Te|=be<<6,R.strstart!==0&&(Te|=ce),Te+=31-Te%31,R.status=Ae,_e(R,Te),R.strstart!==0&&(_e(R,v.adler>>>16),_e(R,v.adler&65535)),v.adler=1}if(R.status===we)if(R.gzhead.extra){for(B=R.pending;R.gzindex<(R.gzhead.extra.length&65535)&&!(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size));)ae(R,R.gzhead.extra[R.gzindex]&255),R.gzindex++;R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),R.gzindex===R.gzhead.extra.length&&(R.gzindex=0,R.status=ve)}else R.status=ve;if(R.status===ve)if(R.gzhead.name){B=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size)){Y=1;break}R.gzindex<R.gzhead.name.length?Y=R.gzhead.name.charCodeAt(R.gzindex++)&255:Y=0,ae(R,Y)}while(Y!==0);R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),Y===0&&(R.gzindex=0,R.status=Se)}else R.status=Se;if(R.status===Se)if(R.gzhead.comment){B=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size)){Y=1;break}R.gzindex<R.gzhead.comment.length?Y=R.gzhead.comment.charCodeAt(R.gzindex++)&255:Y=0,ae(R,Y)}while(Y!==0);R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),Y===0&&(R.status=ke)}else R.status=ke;if(R.status===ke&&(R.gzhead.hcrc?(R.pending+2>R.pending_buf_size&&J(v),R.pending+2<=R.pending_buf_size&&(ae(R,v.adler&255),ae(R,v.adler>>8&255),v.adler=0,R.status=Ae)):R.status=Ae),R.pending!==0){if(J(v),v.avail_out===0)return R.last_flush=-1,g}else if(v.avail_in===0&&I(q)<=I($)&&q!==p)return Ne(v,y);if(R.status===V&&v.avail_in!==0)return Ne(v,y);if(v.avail_in!==0||R.lookahead!==0||q!==c&&R.status!==V){var Ce=R.strategy===M?Ve(R,q):R.strategy===S?Xe(R,q):Ue[R.level].func(R,q);if((Ce===Oe||Ce===Le)&&(R.status=V),Ce===He||Ce===Oe)return v.avail_out===0&&(R.last_flush=-1),g;if(Ce===Pe&&(q===u?l._tr_align(R):q!==_&&(l._tr_stored_block(R,0,0,!1),q===d&&(L(R.head),R.lookahead===0&&(R.strstart=0,R.block_start=0,R.insert=0))),J(v),v.avail_out===0))return R.last_flush=-1,g}return q!==p?g:R.wrap<=0?h:(R.wrap===2?(ae(R,v.adler&255),ae(R,v.adler>>8&255),ae(R,v.adler>>16&255),ae(R,v.adler>>24&255),ae(R,v.total_in&255),ae(R,v.total_in>>8&255),ae(R,v.total_in>>16&255),ae(R,v.total_in>>24&255)):(_e(R,v.adler>>>16),_e(R,v.adler&65535)),J(v),R.wrap>0&&(R.wrap=-R.wrap),R.pending!==0?g:h)}function k(v){var q;return!v||!v.state?m:(q=v.state.status,q!==xe&&q!==we&&q!==ve&&q!==Se&&q!==ke&&q!==Ae&&q!==V?Ne(v,m):(v.state=null,q===Ae?Ne(v,x):g))}function pe(v,q){var $=q.length,R,B,Y,Te,be,Ce,nt,Pt;if(!v||!v.state||(R=v.state,Te=R.wrap,Te===2||Te===1&&R.status!==xe||R.lookahead))return m;for(Te===1&&(v.adler=s(v.adler,q,$,0)),R.wrap=0,$>=R.w_size&&(Te===0&&(L(R.head),R.strstart=0,R.block_start=0,R.insert=0),Pt=new a.Buf8(R.w_size),a.arraySet(Pt,q,$-R.w_size,R.w_size,0),q=Pt,$=R.w_size),be=v.avail_in,Ce=v.next_in,nt=v.input,v.avail_in=$,v.next_in=0,v.input=q,Ee(R);R.lookahead>=X;){B=R.strstart,Y=R.lookahead-(X-1);do R.ins_h=(R.ins_h<<R.hash_shift^R.window[B+X-1])&R.hash_mask,R.prev[B&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=B,B++;while(--Y);R.strstart=B,R.lookahead=X-1,Ee(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=X-1,R.match_available=0,v.next_in=Ce,v.input=nt,v.avail_in=be,R.wrap=Te,g}r.deflateInit=C,r.deflateInit2=z,r.deflateReset=oe,r.deflateResetKeep=ee,r.deflateSetHeader=ge,r.deflate=E,r.deflateEnd=k,r.deflateSetDictionary=pe,r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){function a(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}n.exports=a},{}],48:[function(t,n,r){var a=30,l=12;n.exports=function(o,f){var c,u,d,p,_,g,h,m,x,y,T,w,M,S,P,O,b,D,F,K,N,G,W,te,j;c=o.state,u=o.next_in,te=o.input,d=u+(o.avail_in-5),p=o.next_out,j=o.output,_=p-(f-o.avail_out),g=p+(o.avail_out-257),h=c.dmax,m=c.wsize,x=c.whave,y=c.wnext,T=c.window,w=c.hold,M=c.bits,S=c.lencode,P=c.distcode,O=(1<<c.lenbits)-1,b=(1<<c.distbits)-1;e:do{M<15&&(w+=te[u++]<<M,M+=8,w+=te[u++]<<M,M+=8),D=S[w&O];t:for(;;){if(F=D>>>24,w>>>=F,M-=F,F=D>>>16&255,F===0)j[p++]=D&65535;else if(F&16){K=D&65535,F&=15,F&&(M<F&&(w+=te[u++]<<M,M+=8),K+=w&(1<<F)-1,w>>>=F,M-=F),M<15&&(w+=te[u++]<<M,M+=8,w+=te[u++]<<M,M+=8),D=P[w&b];n:for(;;){if(F=D>>>24,w>>>=F,M-=F,F=D>>>16&255,F&16){if(N=D&65535,F&=15,M<F&&(w+=te[u++]<<M,M+=8,M<F&&(w+=te[u++]<<M,M+=8)),N+=w&(1<<F)-1,N>h){o.msg="invalid distance too far back",c.mode=a;break e}if(w>>>=F,M-=F,F=p-_,N>F){if(F=N-F,F>x&&c.sane){o.msg="invalid distance too far back",c.mode=a;break e}if(G=0,W=T,y===0){if(G+=m-F,F<K){K-=F;do j[p++]=T[G++];while(--F);G=p-N,W=j}}else if(y<F){if(G+=m+y-F,F-=y,F<K){K-=F;do j[p++]=T[G++];while(--F);if(G=0,y<K){F=y,K-=F;do j[p++]=T[G++];while(--F);G=p-N,W=j}}}else if(G+=y-F,F<K){K-=F;do j[p++]=T[G++];while(--F);G=p-N,W=j}for(;K>2;)j[p++]=W[G++],j[p++]=W[G++],j[p++]=W[G++],K-=3;K&&(j[p++]=W[G++],K>1&&(j[p++]=W[G++]))}else{G=p-N;do j[p++]=j[G++],j[p++]=j[G++],j[p++]=j[G++],K-=3;while(K>2);K&&(j[p++]=j[G++],K>1&&(j[p++]=j[G++]))}}else if(F&64){o.msg="invalid distance code",c.mode=a;break e}else{D=P[(D&65535)+(w&(1<<F)-1)];continue n}break}}else if(F&64)if(F&32){c.mode=l;break e}else{o.msg="invalid literal/length code",c.mode=a;break e}else{D=S[(D&65535)+(w&(1<<F)-1)];continue t}break}}while(u<d&&p<g);K=M>>3,u-=K,M-=K<<3,w&=(1<<M)-1,o.next_in=u,o.next_out=p,o.avail_in=u<d?5+(d-u):5-(u-d),o.avail_out=p<g?257+(g-p):257-(p-g),c.hold=w,c.bits=M}},{}],49:[function(t,n,r){var a=t("../utils/common"),l=t("./adler32"),s=t("./crc32"),o=t("./inffast"),f=t("./inftrees"),c=0,u=1,d=2,p=4,_=5,g=6,h=0,m=1,x=2,y=-2,T=-3,w=-4,M=-5,S=8,P=1,O=2,b=3,D=4,F=5,K=6,N=7,G=8,W=9,te=10,j=11,re=12,le=13,ue=14,X=15,he=16,H=17,ce=18,xe=19,we=20,ve=21,Se=22,ke=23,Ae=24,V=25,He=26,Pe=27,Oe=28,Le=29,Be=30,Ne=31,I=32,L=852,J=592,fe=15,ae=fe;function _e(z){return(z>>>24&255)+(z>>>8&65280)+((z&65280)<<8)+((z&255)<<24)}function De(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ye(z){var C;return!z||!z.state?y:(C=z.state,z.total_in=z.total_out=C.total=0,z.msg="",C.wrap&&(z.adler=C.wrap&1),C.mode=P,C.last=0,C.havedict=0,C.dmax=32768,C.head=null,C.hold=0,C.bits=0,C.lencode=C.lendyn=new a.Buf32(L),C.distcode=C.distdyn=new a.Buf32(J),C.sane=1,C.back=-1,h)}function Ee(z){var C;return!z||!z.state?y:(C=z.state,C.wsize=0,C.whave=0,C.wnext=0,ye(z))}function Fe(z,C){var E,k;return!z||!z.state||(k=z.state,C<0?(E=0,C=-C):(E=(C>>4)+1,C<48&&(C&=15)),C&&(C<8||C>15))?y:(k.window!==null&&k.wbits!==C&&(k.window=null),k.wrap=E,k.wbits=C,Ee(z))}function Ge(z,C){var E,k;return z?(k=new De,z.state=k,k.window=null,E=Fe(z,C),E!==h&&(z.state=null),E):y}function de(z){return Ge(z,ae)}var Xe=!0,Ve,Ie;function Ue(z){if(Xe){var C;for(Ve=new a.Buf32(512),Ie=new a.Buf32(32),C=0;C<144;)z.lens[C++]=8;for(;C<256;)z.lens[C++]=9;for(;C<280;)z.lens[C++]=7;for(;C<288;)z.lens[C++]=8;for(f(u,z.lens,0,288,Ve,0,z.work,{bits:9}),C=0;C<32;)z.lens[C++]=5;f(d,z.lens,0,32,Ie,0,z.work,{bits:5}),Xe=!1}z.lencode=Ve,z.lenbits=9,z.distcode=Ie,z.distbits=5}function me(z,C,E,k){var pe,v=z.state;return v.window===null&&(v.wsize=1<<v.wbits,v.wnext=0,v.whave=0,v.window=new a.Buf8(v.wsize)),k>=v.wsize?(a.arraySet(v.window,C,E-v.wsize,v.wsize,0),v.wnext=0,v.whave=v.wsize):(pe=v.wsize-v.wnext,pe>k&&(pe=k),a.arraySet(v.window,C,E-k,pe,v.wnext),k-=pe,k?(a.arraySet(v.window,C,E-k,k,0),v.wnext=k,v.whave=v.wsize):(v.wnext+=pe,v.wnext===v.wsize&&(v.wnext=0),v.whave<v.wsize&&(v.whave+=pe))),0}function A(z,C){var E,k,pe,v,q,$,R,B,Y,Te,be,Ce,nt,Pt,ot=0,Je,ct,pt,St,Xn,jn,U,Z,Q=new a.Buf8(4),ie,ne,Re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!z||!z.state||!z.output||!z.input&&z.avail_in!==0)return y;E=z.state,E.mode===re&&(E.mode=le),q=z.next_out,pe=z.output,R=z.avail_out,v=z.next_in,k=z.input,$=z.avail_in,B=E.hold,Y=E.bits,Te=$,be=R,Z=h;e:for(;;)switch(E.mode){case P:if(E.wrap===0){E.mode=le;break}for(;Y<16;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(E.wrap&2&&B===35615){E.check=0,Q[0]=B&255,Q[1]=B>>>8&255,E.check=s(E.check,Q,2,0),B=0,Y=0,E.mode=O;break}if(E.flags=0,E.head&&(E.head.done=!1),!(E.wrap&1)||(((B&255)<<8)+(B>>8))%31){z.msg="incorrect header check",E.mode=Be;break}if((B&15)!==S){z.msg="unknown compression method",E.mode=Be;break}if(B>>>=4,Y-=4,U=(B&15)+8,E.wbits===0)E.wbits=U;else if(U>E.wbits){z.msg="invalid window size",E.mode=Be;break}E.dmax=1<<U,z.adler=E.check=1,E.mode=B&512?te:re,B=0,Y=0;break;case O:for(;Y<16;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(E.flags=B,(E.flags&255)!==S){z.msg="unknown compression method",E.mode=Be;break}if(E.flags&57344){z.msg="unknown header flags set",E.mode=Be;break}E.head&&(E.head.text=B>>8&1),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=s(E.check,Q,2,0)),B=0,Y=0,E.mode=b;case b:for(;Y<32;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.head&&(E.head.time=B),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,Q[2]=B>>>16&255,Q[3]=B>>>24&255,E.check=s(E.check,Q,4,0)),B=0,Y=0,E.mode=D;case D:for(;Y<16;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.head&&(E.head.xflags=B&255,E.head.os=B>>8),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=s(E.check,Q,2,0)),B=0,Y=0,E.mode=F;case F:if(E.flags&1024){for(;Y<16;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.length=B,E.head&&(E.head.extra_len=B),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=s(E.check,Q,2,0)),B=0,Y=0}else E.head&&(E.head.extra=null);E.mode=K;case K:if(E.flags&1024&&(Ce=E.length,Ce>$&&(Ce=$),Ce&&(E.head&&(U=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),a.arraySet(E.head.extra,k,v,Ce,U)),E.flags&512&&(E.check=s(E.check,k,Ce,v)),$-=Ce,v+=Ce,E.length-=Ce),E.length))break e;E.length=0,E.mode=N;case N:if(E.flags&2048){if($===0)break e;Ce=0;do U=k[v+Ce++],E.head&&U&&E.length<65536&&(E.head.name+=String.fromCharCode(U));while(U&&Ce<$);if(E.flags&512&&(E.check=s(E.check,k,Ce,v)),$-=Ce,v+=Ce,U)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=G;case G:if(E.flags&4096){if($===0)break e;Ce=0;do U=k[v+Ce++],E.head&&U&&E.length<65536&&(E.head.comment+=String.fromCharCode(U));while(U&&Ce<$);if(E.flags&512&&(E.check=s(E.check,k,Ce,v)),$-=Ce,v+=Ce,U)break e}else E.head&&(E.head.comment=null);E.mode=W;case W:if(E.flags&512){for(;Y<16;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(B!==(E.check&65535)){z.msg="header crc mismatch",E.mode=Be;break}B=0,Y=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),z.adler=E.check=0,E.mode=re;break;case te:for(;Y<32;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}z.adler=E.check=_e(B),B=0,Y=0,E.mode=j;case j:if(E.havedict===0)return z.next_out=q,z.avail_out=R,z.next_in=v,z.avail_in=$,E.hold=B,E.bits=Y,x;z.adler=E.check=1,E.mode=re;case re:if(C===_||C===g)break e;case le:if(E.last){B>>>=Y&7,Y-=Y&7,E.mode=Pe;break}for(;Y<3;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}switch(E.last=B&1,B>>>=1,Y-=1,B&3){case 0:E.mode=ue;break;case 1:if(Ue(E),E.mode=we,C===g){B>>>=2,Y-=2;break e}break;case 2:E.mode=H;break;case 3:z.msg="invalid block type",E.mode=Be}B>>>=2,Y-=2;break;case ue:for(B>>>=Y&7,Y-=Y&7;Y<32;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if((B&65535)!==(B>>>16^65535)){z.msg="invalid stored block lengths",E.mode=Be;break}if(E.length=B&65535,B=0,Y=0,E.mode=X,C===g)break e;case X:E.mode=he;case he:if(Ce=E.length,Ce){if(Ce>$&&(Ce=$),Ce>R&&(Ce=R),Ce===0)break e;a.arraySet(pe,k,v,Ce,q),$-=Ce,v+=Ce,R-=Ce,q+=Ce,E.length-=Ce;break}E.mode=re;break;case H:for(;Y<14;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(E.nlen=(B&31)+257,B>>>=5,Y-=5,E.ndist=(B&31)+1,B>>>=5,Y-=5,E.ncode=(B&15)+4,B>>>=4,Y-=4,E.nlen>286||E.ndist>30){z.msg="too many length or distance symbols",E.mode=Be;break}E.have=0,E.mode=ce;case ce:for(;E.have<E.ncode;){for(;Y<3;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.lens[Re[E.have++]]=B&7,B>>>=3,Y-=3}for(;E.have<19;)E.lens[Re[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,ie={bits:E.lenbits},Z=f(c,E.lens,0,19,E.lencode,0,E.work,ie),E.lenbits=ie.bits,Z){z.msg="invalid code lengths set",E.mode=Be;break}E.have=0,E.mode=xe;case xe:for(;E.have<E.nlen+E.ndist;){for(;ot=E.lencode[B&(1<<E.lenbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Y);){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(pt<16)B>>>=Je,Y-=Je,E.lens[E.have++]=pt;else{if(pt===16){for(ne=Je+2;Y<ne;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(B>>>=Je,Y-=Je,E.have===0){z.msg="invalid bit length repeat",E.mode=Be;break}U=E.lens[E.have-1],Ce=3+(B&3),B>>>=2,Y-=2}else if(pt===17){for(ne=Je+3;Y<ne;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}B>>>=Je,Y-=Je,U=0,Ce=3+(B&7),B>>>=3,Y-=3}else{for(ne=Je+7;Y<ne;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}B>>>=Je,Y-=Je,U=0,Ce=11+(B&127),B>>>=7,Y-=7}if(E.have+Ce>E.nlen+E.ndist){z.msg="invalid bit length repeat",E.mode=Be;break}for(;Ce--;)E.lens[E.have++]=U}}if(E.mode===Be)break;if(E.lens[256]===0){z.msg="invalid code -- missing end-of-block",E.mode=Be;break}if(E.lenbits=9,ie={bits:E.lenbits},Z=f(u,E.lens,0,E.nlen,E.lencode,0,E.work,ie),E.lenbits=ie.bits,Z){z.msg="invalid literal/lengths set",E.mode=Be;break}if(E.distbits=6,E.distcode=E.distdyn,ie={bits:E.distbits},Z=f(d,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,ie),E.distbits=ie.bits,Z){z.msg="invalid distances set",E.mode=Be;break}if(E.mode=we,C===g)break e;case we:E.mode=ve;case ve:if($>=6&&R>=258){z.next_out=q,z.avail_out=R,z.next_in=v,z.avail_in=$,E.hold=B,E.bits=Y,o(z,be),q=z.next_out,pe=z.output,R=z.avail_out,v=z.next_in,k=z.input,$=z.avail_in,B=E.hold,Y=E.bits,E.mode===re&&(E.back=-1);break}for(E.back=0;ot=E.lencode[B&(1<<E.lenbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Y);){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(ct&&!(ct&240)){for(St=Je,Xn=ct,jn=pt;ot=E.lencode[jn+((B&(1<<St+Xn)-1)>>St)],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(St+Je<=Y);){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}B>>>=St,Y-=St,E.back+=St}if(B>>>=Je,Y-=Je,E.back+=Je,E.length=pt,ct===0){E.mode=He;break}if(ct&32){E.back=-1,E.mode=re;break}if(ct&64){z.msg="invalid literal/length code",E.mode=Be;break}E.extra=ct&15,E.mode=Se;case Se:if(E.extra){for(ne=E.extra;Y<ne;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.length+=B&(1<<E.extra)-1,B>>>=E.extra,Y-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=ke;case ke:for(;ot=E.distcode[B&(1<<E.distbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Y);){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(!(ct&240)){for(St=Je,Xn=ct,jn=pt;ot=E.distcode[jn+((B&(1<<St+Xn)-1)>>St)],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(St+Je<=Y);){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}B>>>=St,Y-=St,E.back+=St}if(B>>>=Je,Y-=Je,E.back+=Je,ct&64){z.msg="invalid distance code",E.mode=Be;break}E.offset=pt,E.extra=ct&15,E.mode=Ae;case Ae:if(E.extra){for(ne=E.extra;Y<ne;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}E.offset+=B&(1<<E.extra)-1,B>>>=E.extra,Y-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){z.msg="invalid distance too far back",E.mode=Be;break}E.mode=V;case V:if(R===0)break e;if(Ce=be-R,E.offset>Ce){if(Ce=E.offset-Ce,Ce>E.whave&&E.sane){z.msg="invalid distance too far back",E.mode=Be;break}Ce>E.wnext?(Ce-=E.wnext,nt=E.wsize-Ce):nt=E.wnext-Ce,Ce>E.length&&(Ce=E.length),Pt=E.window}else Pt=pe,nt=q-E.offset,Ce=E.length;Ce>R&&(Ce=R),R-=Ce,E.length-=Ce;do pe[q++]=Pt[nt++];while(--Ce);E.length===0&&(E.mode=ve);break;case He:if(R===0)break e;pe[q++]=E.length,R--,E.mode=ve;break;case Pe:if(E.wrap){for(;Y<32;){if($===0)break e;$--,B|=k[v++]<<Y,Y+=8}if(be-=R,z.total_out+=be,E.total+=be,be&&(z.adler=E.check=E.flags?s(E.check,pe,be,q-be):l(E.check,pe,be,q-be)),be=R,(E.flags?B:_e(B))!==E.check){z.msg="incorrect data check",E.mode=Be;break}B=0,Y=0}E.mode=Oe;case Oe:if(E.wrap&&E.flags){for(;Y<32;){if($===0)break e;$--,B+=k[v++]<<Y,Y+=8}if(B!==(E.total&4294967295)){z.msg="incorrect length check",E.mode=Be;break}B=0,Y=0}E.mode=Le;case Le:Z=m;break e;case Be:Z=T;break e;case Ne:return w;case I:default:return y}return z.next_out=q,z.avail_out=R,z.next_in=v,z.avail_in=$,E.hold=B,E.bits=Y,(E.wsize||be!==z.avail_out&&E.mode<Be&&(E.mode<Pe||C!==p))&&me(z,z.output,z.next_out,be-z.avail_out),Te-=z.avail_in,be-=z.avail_out,z.total_in+=Te,z.total_out+=be,E.total+=be,E.wrap&&be&&(z.adler=E.check=E.flags?s(E.check,pe,be,z.next_out-be):l(E.check,pe,be,z.next_out-be)),z.data_type=E.bits+(E.last?64:0)+(E.mode===re?128:0)+(E.mode===we||E.mode===X?256:0),(Te===0&&be===0||C===p)&&Z===h&&(Z=M),Z}function ee(z){if(!z||!z.state)return y;var C=z.state;return C.window&&(C.window=null),z.state=null,h}function oe(z,C){var E;return!z||!z.state||(E=z.state,!(E.wrap&2))?y:(E.head=C,C.done=!1,h)}function ge(z,C){var E=C.length,k,pe,v;return!z||!z.state||(k=z.state,k.wrap!==0&&k.mode!==j)?y:k.mode===j&&(pe=1,pe=l(pe,C,E,0),pe!==k.check)?T:(v=me(z,C,E,E),v?(k.mode=Ne,w):(k.havedict=1,h))}r.inflateReset=Ee,r.inflateReset2=Fe,r.inflateResetKeep=ye,r.inflateInit=de,r.inflateInit2=Ge,r.inflate=A,r.inflateEnd=ee,r.inflateGetHeader=oe,r.inflateSetDictionary=ge,r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var a=t("../utils/common"),l=15,s=852,o=592,f=0,c=1,u=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(m,x,y,T,w,M,S,P){var O=P.bits,b=0,D=0,F=0,K=0,N=0,G=0,W=0,te=0,j=0,re=0,le,ue,X,he,H,ce=null,xe=0,we,ve=new a.Buf16(l+1),Se=new a.Buf16(l+1),ke=null,Ae=0,V,He,Pe;for(b=0;b<=l;b++)ve[b]=0;for(D=0;D<T;D++)ve[x[y+D]]++;for(N=O,K=l;K>=1&&ve[K]===0;K--);if(N>K&&(N=K),K===0)return w[M++]=1<<24|64<<16|0,w[M++]=1<<24|64<<16|0,P.bits=1,0;for(F=1;F<K&&ve[F]===0;F++);for(N<F&&(N=F),te=1,b=1;b<=l;b++)if(te<<=1,te-=ve[b],te<0)return-1;if(te>0&&(m===f||K!==1))return-1;for(Se[1]=0,b=1;b<l;b++)Se[b+1]=Se[b]+ve[b];for(D=0;D<T;D++)x[y+D]!==0&&(S[Se[x[y+D]]++]=D);if(m===f?(ce=ke=S,we=19):m===c?(ce=d,xe-=257,ke=p,Ae-=257,we=256):(ce=_,ke=g,we=-1),re=0,D=0,b=F,H=M,G=N,W=0,X=-1,j=1<<N,he=j-1,m===c&&j>s||m===u&&j>o)return 1;for(;;){V=b-W,S[D]<we?(He=0,Pe=S[D]):S[D]>we?(He=ke[Ae+S[D]],Pe=ce[xe+S[D]]):(He=32+64,Pe=0),le=1<<b-W,ue=1<<G,F=ue;do ue-=le,w[H+(re>>W)+ue]=V<<24|He<<16|Pe|0;while(ue!==0);for(le=1<<b-1;re&le;)le>>=1;if(le!==0?(re&=le-1,re+=le):re=0,D++,--ve[b]===0){if(b===K)break;b=x[y+S[D]]}if(b>N&&(re&he)!==X){for(W===0&&(W=N),H+=F,G=b-W,te=1<<G;G+W<K&&(te-=ve[G+W],!(te<=0));)G++,te<<=1;if(j+=1<<G,m===c&&j>s||m===u&&j>o)return 1;X=re&he,w[X]=N<<24|G<<16|H-M|0}}return re!==0&&(w[H+re]=b-W<<24|64<<16|0),P.bits=N,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var a=t("../utils/common"),l=4,s=0,o=1,f=2;function c(A){for(var ee=A.length;--ee>=0;)A[ee]=0}var u=0,d=1,p=2,_=3,g=258,h=29,m=256,x=m+1+h,y=30,T=19,w=2*x+1,M=15,S=16,P=7,O=256,b=16,D=17,F=18,K=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],te=512,j=new Array((x+2)*2);c(j);var re=new Array(y*2);c(re);var le=new Array(te);c(le);var ue=new Array(g-_+1);c(ue);var X=new Array(h);c(X);var he=new Array(y);c(he);function H(A,ee,oe,ge,z){this.static_tree=A,this.extra_bits=ee,this.extra_base=oe,this.elems=ge,this.max_length=z,this.has_stree=A&&A.length}var ce,xe,we;function ve(A,ee){this.dyn_tree=A,this.max_code=0,this.stat_desc=ee}function Se(A){return A<256?le[A]:le[256+(A>>>7)]}function ke(A,ee){A.pending_buf[A.pending++]=ee&255,A.pending_buf[A.pending++]=ee>>>8&255}function Ae(A,ee,oe){A.bi_valid>S-oe?(A.bi_buf|=ee<<A.bi_valid&65535,ke(A,A.bi_buf),A.bi_buf=ee>>S-A.bi_valid,A.bi_valid+=oe-S):(A.bi_buf|=ee<<A.bi_valid&65535,A.bi_valid+=oe)}function V(A,ee,oe){Ae(A,oe[ee*2],oe[ee*2+1])}function He(A,ee){var oe=0;do oe|=A&1,A>>>=1,oe<<=1;while(--ee>0);return oe>>>1}function Pe(A){A.bi_valid===16?(ke(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)}function Oe(A,ee){var oe=ee.dyn_tree,ge=ee.max_code,z=ee.stat_desc.static_tree,C=ee.stat_desc.has_stree,E=ee.stat_desc.extra_bits,k=ee.stat_desc.extra_base,pe=ee.stat_desc.max_length,v,q,$,R,B,Y,Te=0;for(R=0;R<=M;R++)A.bl_count[R]=0;for(oe[A.heap[A.heap_max]*2+1]=0,v=A.heap_max+1;v<w;v++)q=A.heap[v],R=oe[oe[q*2+1]*2+1]+1,R>pe&&(R=pe,Te++),oe[q*2+1]=R,!(q>ge)&&(A.bl_count[R]++,B=0,q>=k&&(B=E[q-k]),Y=oe[q*2],A.opt_len+=Y*(R+B),C&&(A.static_len+=Y*(z[q*2+1]+B)));if(Te!==0){do{for(R=pe-1;A.bl_count[R]===0;)R--;A.bl_count[R]--,A.bl_count[R+1]+=2,A.bl_count[pe]--,Te-=2}while(Te>0);for(R=pe;R!==0;R--)for(q=A.bl_count[R];q!==0;)$=A.heap[--v],!($>ge)&&(oe[$*2+1]!==R&&(A.opt_len+=(R-oe[$*2+1])*oe[$*2],oe[$*2+1]=R),q--)}}function Le(A,ee,oe){var ge=new Array(M+1),z=0,C,E;for(C=1;C<=M;C++)ge[C]=z=z+oe[C-1]<<1;for(E=0;E<=ee;E++){var k=A[E*2+1];k!==0&&(A[E*2]=He(ge[k]++,k))}}function Be(){var A,ee,oe,ge,z,C=new Array(M+1);for(oe=0,ge=0;ge<h-1;ge++)for(X[ge]=oe,A=0;A<1<<K[ge];A++)ue[oe++]=ge;for(ue[oe-1]=ge,z=0,ge=0;ge<16;ge++)for(he[ge]=z,A=0;A<1<<N[ge];A++)le[z++]=ge;for(z>>=7;ge<y;ge++)for(he[ge]=z<<7,A=0;A<1<<N[ge]-7;A++)le[256+z++]=ge;for(ee=0;ee<=M;ee++)C[ee]=0;for(A=0;A<=143;)j[A*2+1]=8,A++,C[8]++;for(;A<=255;)j[A*2+1]=9,A++,C[9]++;for(;A<=279;)j[A*2+1]=7,A++,C[7]++;for(;A<=287;)j[A*2+1]=8,A++,C[8]++;for(Le(j,x+1,C),A=0;A<y;A++)re[A*2+1]=5,re[A*2]=He(A,5);ce=new H(j,K,m+1,x,M),xe=new H(re,N,0,y,M),we=new H(new Array(0),G,0,T,P)}function Ne(A){var ee;for(ee=0;ee<x;ee++)A.dyn_ltree[ee*2]=0;for(ee=0;ee<y;ee++)A.dyn_dtree[ee*2]=0;for(ee=0;ee<T;ee++)A.bl_tree[ee*2]=0;A.dyn_ltree[O*2]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function I(A){A.bi_valid>8?ke(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function L(A,ee,oe,ge){I(A),ge&&(ke(A,oe),ke(A,~oe)),a.arraySet(A.pending_buf,A.window,ee,oe,A.pending),A.pending+=oe}function J(A,ee,oe,ge){var z=ee*2,C=oe*2;return A[z]<A[C]||A[z]===A[C]&&ge[ee]<=ge[oe]}function fe(A,ee,oe){for(var ge=A.heap[oe],z=oe<<1;z<=A.heap_len&&(z<A.heap_len&&J(ee,A.heap[z+1],A.heap[z],A.depth)&&z++,!J(ee,ge,A.heap[z],A.depth));)A.heap[oe]=A.heap[z],oe=z,z<<=1;A.heap[oe]=ge}function ae(A,ee,oe){var ge,z,C=0,E,k;if(A.last_lit!==0)do ge=A.pending_buf[A.d_buf+C*2]<<8|A.pending_buf[A.d_buf+C*2+1],z=A.pending_buf[A.l_buf+C],C++,ge===0?V(A,z,ee):(E=ue[z],V(A,E+m+1,ee),k=K[E],k!==0&&(z-=X[E],Ae(A,z,k)),ge--,E=Se(ge),V(A,E,oe),k=N[E],k!==0&&(ge-=he[E],Ae(A,ge,k)));while(C<A.last_lit);V(A,O,ee)}function _e(A,ee){var oe=ee.dyn_tree,ge=ee.stat_desc.static_tree,z=ee.stat_desc.has_stree,C=ee.stat_desc.elems,E,k,pe=-1,v;for(A.heap_len=0,A.heap_max=w,E=0;E<C;E++)oe[E*2]!==0?(A.heap[++A.heap_len]=pe=E,A.depth[E]=0):oe[E*2+1]=0;for(;A.heap_len<2;)v=A.heap[++A.heap_len]=pe<2?++pe:0,oe[v*2]=1,A.depth[v]=0,A.opt_len--,z&&(A.static_len-=ge[v*2+1]);for(ee.max_code=pe,E=A.heap_len>>1;E>=1;E--)fe(A,oe,E);v=C;do E=A.heap[1],A.heap[1]=A.heap[A.heap_len--],fe(A,oe,1),k=A.heap[1],A.heap[--A.heap_max]=E,A.heap[--A.heap_max]=k,oe[v*2]=oe[E*2]+oe[k*2],A.depth[v]=(A.depth[E]>=A.depth[k]?A.depth[E]:A.depth[k])+1,oe[E*2+1]=oe[k*2+1]=v,A.heap[1]=v++,fe(A,oe,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],Oe(A,ee),Le(oe,pe,A.bl_count)}function De(A,ee,oe){var ge,z=-1,C,E=ee[0*2+1],k=0,pe=7,v=4;for(E===0&&(pe=138,v=3),ee[(oe+1)*2+1]=65535,ge=0;ge<=oe;ge++)C=E,E=ee[(ge+1)*2+1],!(++k<pe&&C===E)&&(k<v?A.bl_tree[C*2]+=k:C!==0?(C!==z&&A.bl_tree[C*2]++,A.bl_tree[b*2]++):k<=10?A.bl_tree[D*2]++:A.bl_tree[F*2]++,k=0,z=C,E===0?(pe=138,v=3):C===E?(pe=6,v=3):(pe=7,v=4))}function ye(A,ee,oe){var ge,z=-1,C,E=ee[0*2+1],k=0,pe=7,v=4;for(E===0&&(pe=138,v=3),ge=0;ge<=oe;ge++)if(C=E,E=ee[(ge+1)*2+1],!(++k<pe&&C===E)){if(k<v)do V(A,C,A.bl_tree);while(--k!==0);else C!==0?(C!==z&&(V(A,C,A.bl_tree),k--),V(A,b,A.bl_tree),Ae(A,k-3,2)):k<=10?(V(A,D,A.bl_tree),Ae(A,k-3,3)):(V(A,F,A.bl_tree),Ae(A,k-11,7));k=0,z=C,E===0?(pe=138,v=3):C===E?(pe=6,v=3):(pe=7,v=4)}}function Ee(A){var ee;for(De(A,A.dyn_ltree,A.l_desc.max_code),De(A,A.dyn_dtree,A.d_desc.max_code),_e(A,A.bl_desc),ee=T-1;ee>=3&&A.bl_tree[W[ee]*2+1]===0;ee--);return A.opt_len+=3*(ee+1)+5+5+4,ee}function Fe(A,ee,oe,ge){var z;for(Ae(A,ee-257,5),Ae(A,oe-1,5),Ae(A,ge-4,4),z=0;z<ge;z++)Ae(A,A.bl_tree[W[z]*2+1],3);ye(A,A.dyn_ltree,ee-1),ye(A,A.dyn_dtree,oe-1)}function Ge(A){var ee=4093624447,oe;for(oe=0;oe<=31;oe++,ee>>>=1)if(ee&1&&A.dyn_ltree[oe*2]!==0)return s;if(A.dyn_ltree[9*2]!==0||A.dyn_ltree[10*2]!==0||A.dyn_ltree[13*2]!==0)return o;for(oe=32;oe<m;oe++)if(A.dyn_ltree[oe*2]!==0)return o;return s}var de=!1;function Xe(A){de||(Be(),de=!0),A.l_desc=new ve(A.dyn_ltree,ce),A.d_desc=new ve(A.dyn_dtree,xe),A.bl_desc=new ve(A.bl_tree,we),A.bi_buf=0,A.bi_valid=0,Ne(A)}function Ve(A,ee,oe,ge){Ae(A,(u<<1)+(ge?1:0),3),L(A,ee,oe,!0)}function Ie(A){Ae(A,d<<1,3),V(A,O,j),Pe(A)}function Ue(A,ee,oe,ge){var z,C,E=0;A.level>0?(A.strm.data_type===f&&(A.strm.data_type=Ge(A)),_e(A,A.l_desc),_e(A,A.d_desc),E=Ee(A),z=A.opt_len+3+7>>>3,C=A.static_len+3+7>>>3,C<=z&&(z=C)):z=C=oe+5,oe+4<=z&&ee!==-1?Ve(A,ee,oe,ge):A.strategy===l||C===z?(Ae(A,(d<<1)+(ge?1:0),3),ae(A,j,re)):(Ae(A,(p<<1)+(ge?1:0),3),Fe(A,A.l_desc.max_code+1,A.d_desc.max_code+1,E+1),ae(A,A.dyn_ltree,A.dyn_dtree)),Ne(A),ge&&I(A)}function me(A,ee,oe){return A.pending_buf[A.d_buf+A.last_lit*2]=ee>>>8&255,A.pending_buf[A.d_buf+A.last_lit*2+1]=ee&255,A.pending_buf[A.l_buf+A.last_lit]=oe&255,A.last_lit++,ee===0?A.dyn_ltree[oe*2]++:(A.matches++,ee--,A.dyn_ltree[(ue[oe]+m+1)*2]++,A.dyn_dtree[Se(ee)*2]++),A.last_lit===A.lit_bufsize-1}r._tr_init=Xe,r._tr_stored_block=Ve,r._tr_flush_block=Ue,r._tr_tally=me,r._tr_align=Ie},{"../utils/common":41}],53:[function(t,n,r){function a(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}n.exports=a},{}],54:[function(t,n,r){(function(a){(function(l,s){if(l.setImmediate)return;var o=1,f={},c=!1,u=l.document,d;function p(P){typeof P!="function"&&(P=new Function(""+P));for(var O=new Array(arguments.length-1),b=0;b<O.length;b++)O[b]=arguments[b+1];var D={callback:P,args:O};return f[o]=D,d(o),o++}function _(P){delete f[P]}function g(P){var O=P.callback,b=P.args;switch(b.length){case 0:O();break;case 1:O(b[0]);break;case 2:O(b[0],b[1]);break;case 3:O(b[0],b[1],b[2]);break;default:O.apply(s,b);break}}function h(P){if(c)setTimeout(h,0,P);else{var O=f[P];if(O){c=!0;try{g(O)}finally{_(P),c=!1}}}}function m(){d=function(P){process.nextTick(function(){h(P)})}}function x(){if(l.postMessage&&!l.importScripts){var P=!0,O=l.onmessage;return l.onmessage=function(){P=!1},l.postMessage("","*"),l.onmessage=O,P}}function y(){var P="setImmediate$"+Math.random()+"$",O=function(b){b.source===l&&typeof b.data=="string"&&b.data.indexOf(P)===0&&h(+b.data.slice(P.length))};l.addEventListener?l.addEventListener("message",O,!1):l.attachEvent("onmessage",O),d=function(b){l.postMessage(P+b,"*")}}function T(){var P=new MessageChannel;P.port1.onmessage=function(O){var b=O.data;h(b)},d=function(O){P.port2.postMessage(O)}}function w(){var P=u.documentElement;d=function(O){var b=u.createElement("script");b.onreadystatechange=function(){h(O),b.onreadystatechange=null,P.removeChild(b),b=null},P.appendChild(b)}}function M(){d=function(P){setTimeout(h,0,P)}}var S=Object.getPrototypeOf&&Object.getPrototypeOf(l);S=S&&S.setTimeout?S:l,{}.toString.call(l.process)==="[object process]"?m():x()?y():l.MessageChannel?T():u&&"onreadystatechange"in u.createElement("script")?w():M(),S.setImmediate=p,S.clearImmediate=_})(typeof self>"u"?typeof a>"u"?this:a:self)}).call(this,typeof Qt<"u"?Qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Zo);var ec=Zo.exports;const aa=Ql(ec);var qo={exports:{}};(function(i,e){(function(t,n){n()})(Qt,function(){function t(f,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function n(f,c,u){var d=new XMLHttpRequest;d.open("GET",f),d.responseType="blob",d.onload=function(){o(d.response,c,u)},d.onerror=function(){console.error("could not download file")},d.send()}function r(f){var c=new XMLHttpRequest;c.open("HEAD",f,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function a(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(c)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Qt=="object"&&Qt.global===Qt?Qt:void 0,s=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(f,c,u){var d=l.URL||l.webkitURL,p=document.createElement("a");c=c||f.name||"download",p.download=c,p.rel="noopener",typeof f=="string"?(p.href=f,p.origin===location.origin?a(p):r(p.href)?n(f,c,u):a(p,p.target="_blank")):(p.href=d.createObjectURL(f),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){a(p)},0))}:"msSaveOrOpenBlob"in navigator?function(f,c,u){if(c=c||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(t(f,u),c);else if(r(f))n(f,c,u);else{var d=document.createElement("a");d.href=f,d.target="_blank",setTimeout(function(){a(d)})}}:function(f,c,u,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof f=="string")return n(f,c,u);var p=f.type==="application/octet-stream",_=/constructor/i.test(l.HTMLElement)||l.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||p&&_||s)&&typeof FileReader<"u"){var h=new FileReader;h.onloadend=function(){var y=h.result;y=g?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=y:location=y,d=null},h.readAsDataURL(f)}else{var m=l.URL||l.webkitURL,x=m.createObjectURL(f);d?d.location=x:location.href=x,d=null,setTimeout(function(){m.revokeObjectURL(x)},4e4)}});l.saveAs=o.saveAs=o,i.exports=o})})(qo);var tc=qo.exports;const nc={es:{btnOpenLabel:"Abrir",btnSaveLabel:"Guardar",btnAddPage:"Agregar nueva página",btnStartRecordingLabel:"Iniciar grabación",btnDeletePageLabel:"Borrar esta página",btnStopRecordingLabel:"Finalizar grabación",btnNewLabel:"Nuevo libro",btnCloseLabel:"Salir",controls:`
        <b><u>Controles</u></b><br/>
        Utiliza el <b>botón de scroll del ratón</b> para hacer zoom.<br/>
        Presiona <b>Barra Espaciadora</b> para reestablecer el zoom.<br/>
        Presiona la tecla <b>ENTER</b> para Iniciar y/o Detener la grabación.
        `,emptyZipError:"El zip no contiene ninguna imagen .png"},en:{btnOpenLabel:"Open",btnSaveLabel:"Save",btnAddPage:"Add new page",btnStartRecordingLabel:"Start Recording",btnDeletePageLabel:"Delete this page",btnStopRecordingLabel:"End Recording",btnNewLabel:"New Book",btnCloseLabel:"Exit",controls:`
        <b><u>Controls</u></b><br/>
        Use the <b>mouse's wheel</b> to zoom.<br/>
        Press <b>Space bar</b> to restore zoom.<br/>
        Press <b>ENTER</b> to start or stop the recording.
        `,emptyZipError:"The zip has no .png image file"}},$t=nc[navigator.language.toLowerCase().includes("es")?"es":"en"];var ic=0;function rt(i,e,t,n,r,a){var l,s,o={};for(s in e)s=="ref"?l=e[s]:o[s]=e[s];var f={type:i,props:o,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ic,__i:-1,__u:0,__source:r,__self:a};if(typeof i=="function"&&(l=i.defaultProps))for(s in l)o[s]===void 0&&(o[s]=l[s]);return Ye.vnode&&Ye.vnode(f),f}class oa{constructor(e){this.blob=e,this.url=URL.createObjectURL(e)}}const rc=`
<br/><br/><b><u>WEBM --&gt; MP4</u></b><br/>
${["https://cloudconvert.com/webm-to-mp4","https://www.freeconvert.com/webm-to-mp4","https://convertio.co/es/webm-mp4/"].map(i=>`<a href="${i}" target="_blank">${i}</a>`).join("<br/>")}
`;function sc(){const[i,e]=Ai([]),[t,n]=Ai([]),[r,a]=Ai(-1),[l,s]=Ai(!1),[o,f]=Ai(!1),c=Br(null),u=Br(null),d=Br(null),p=r==-1,_=t.some((P,O)=>i[O]!=P);ia(()=>(window.ccaptureDisplayListener=P=>{u.current&&(u.current.innerHTML=P)},()=>{window.ccaptureDisplayListener=null}),[]),ia(()=>{const P=O=>{var b;O.code==="Enter"&&((b=d.current)==null||b.click())};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)}),ra(()=>{if(!l)return;const P=()=>s(!1);return window.addEventListener("mouseup",P),()=>window.removeEventListener("mouseup",P)},[l]),ra(()=>{const P=i.map(b=>b.url);P.length%2!=0&&P.push("");const O=new CustomEvent("on:pages",{detail:P});document.body.dispatchEvent(O)},[i]);const g=()=>{const P=document.createElement("input");P.type="file",P.multiple=!0,P.accept=".png, .jpg, .jpeg",P.style.display="none",document.body.appendChild(P),P.addEventListener("change",O=>{const b=P.files;for(const D of b)i.push(new oa(D));e([...i]),P.remove()}),P.addEventListener("cancel",O=>P.remove()),P.click()},h=()=>{a(0),e([]),n([])},m=async()=>{if(!i.length){alert("Nothing to save... try adding some pages!");return}const P=new aa;for(let b=0;b<i.length;b++)P.file(`${b+1}.png`,i[b].blob,{comment:"Un comentario loco"});const O=await P.generateAsync({type:"blob"});tc.saveAs(O,"example.zip")},x=()=>{console.log("CLOSE ",i),a(-1),e([]),n([])},y=()=>{const P=document.createElement("input");P.type="file",P.multiple=!1,P.accept=".zip",P.style.display="none",document.body.appendChild(P),P.addEventListener("change",async O=>{P.remove();const b=P.files[0],D=new aa;await D.loadAsync(b);let F=[];await new Promise((K,N)=>{let G=Promise.resolve(0);D.forEach((W,te)=>{console.log("OPEN ",te),te.name.endsWith(".png")&&(G=G.then(()=>te.async("blob").then(j=>F.push(new oa(j)))))}),G.then(K)}),console.log("OPENED ZIP",F),F.length?(n([...F]),e(F),a(0)):alert($t.emptyZipError)}),P.addEventListener("cancel",()=>P.remove()),P.click()},T=(P,O)=>{O.preventDefault(),a(P),s(!0);const b=new CustomEvent("book:goto",{detail:P});document.body.dispatchEvent(b)},w=(P,O)=>{if(P==r||!l)return;let b=i[P];i[P]=i[r],i[r]=b,e([...i]),a(P)},M=()=>{o?(f(!1),document.body.dispatchEvent(new Event("record:stop"))):(f(!0),document.body.dispatchEvent(new Event("record:start")))},S=P=>{P.preventDefault(),confirm("Delete currently selected page?")&&(r==i.length-1&&a(i.length-2),e(i.filter((O,b)=>b!=r)))};return rt("header",{ref:c,children:[rt("div",{class:"leyenda",dangerouslySetInnerHTML:{__html:$t.controls+rc}}),rt("div",{class:"numbered-children thumbnails",children:i.map((P,O)=>rt("div",{children:rt("img",{onMouseOver:w.bind(null,O),onMouseDown:T.bind(null,O),src:P.url,height:100,width:100,style:{touchAction:"pan-x",borderColor:O==r?"red":"transparent",animation:O==r?"pulseSelection 0.5s ease-in-out infinite":"none"}})},O))}),rt("div",{class:"menu",children:[!p&&rt(un,{children:[rt("a",{href:"#",onClick:()=>g(),class:"add",children:[rt("i",{class:"gg-image"})," ",$t.btnAddPage]}),rt("a",{href:"#",onClick:()=>x(),class:"open",children:[rt("i",{class:"gg-close"})," ",$t.btnCloseLabel]}),_&&rt("a",{href:"#",onClick:()=>m(),class:"save",children:[rt("i",{class:"gg-software-download"})," ",$t.btnSaveLabel]})]}),p&&rt(un,{children:[rt("a",{href:"#",onClick:()=>h(),class:"save",children:[rt("i",{class:"gg-software-download"})," ",$t.btnNewLabel]}),rt("a",{href:"#",onClick:()=>y(),class:"open",children:[rt("i",{class:"gg-software-upload"}),"  ",$t.btnOpenLabel]})]}),i.length>0&&rt(un,{children:rt("a",{href:"#",class:"record-button",onClick:M,ref:d,children:[!o&&rt(un,{children:[rt("i",{class:"gg-camera"}),"  ",$t.btnStartRecordingLabel]}),o&&rt(un,{children:[rt("i",{class:"gg-play-stop-o"}),"  ",$t.btnStopRecordingLabel," [",rt("span",{ref:u}),"]"]})]})}),!!i[r]&&rt("div",{class:"context",children:rt("a",{href:"#",class:"delete",onClick:S,children:["[x] ",$t.btnDeletePageLabel]})})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Is="161",ac=0,la=1,oc=2,Ko=1,$o=2,cn=3,Cn=0,Ot=1,fn=2,tn=0,hi=1,ca=2,ua=3,fa=4,lc=5,Bn=100,cc=101,uc=102,ha=103,da=104,fc=200,hc=201,dc=202,pc=203,bs=204,Ms=205,mc=206,_c=207,vc=208,xc=209,yc=210,bc=211,Mc=212,Sc=213,Ec=214,wc=0,Tc=1,Ac=2,yr=3,Cc=4,Rc=5,Pc=6,Lc=7,Jo=0,Dc=1,Uc=2,Tn=0,Qo=1,el=2,tl=3,Os=4,Ic=5,nl=6,il=300,gi=301,vi=302,Ss=303,Es=304,Cr=306,br=1e3,Zt=1001,ws=1002,Mt=1003,pa=1004,Ci=1005,Dt=1006,zr=1007,kn=1008,An=1009,Oc=1010,Nc=1011,Ns=1012,rl=1013,wn=1014,hn=1015,Wn=1016,sl=1017,al=1018,Gn=1020,Fc=1021,qt=1023,Bc=1024,zc=1025,Hn=1026,xi=1027,kc=1028,ol=1029,Gc=1030,ll=1031,cl=1033,kr=33776,Gr=33777,Hr=33778,Vr=33779,ma=35840,_a=35841,ga=35842,va=35843,ul=36196,xa=37492,ya=37496,ba=37808,Ma=37809,Sa=37810,Ea=37811,wa=37812,Ta=37813,Aa=37814,Ca=37815,Ra=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Ia=37821,Wr=36492,Oa=36494,Na=36495,Hc=36283,Fa=36284,Ba=36285,za=36286,fl=3e3,Vn=3001,Vc=3200,hl=3201,dl=0,Wc=1,Vt="",yt="srgb",mn="srgb-linear",Fs="display-p3",Rr="display-p3-linear",Mr="linear",at="srgb",Sr="rec709",Er="p3",Yn=7680,ka=519,Xc=512,jc=513,Yc=514,pl=515,Zc=516,qc=517,Kc=518,$c=519,Ga=35044,Ha="300 es",Ts=1035,dn=2e3,wr=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,As=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function Jc(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function Va(i){return(i&i-1)===0&&i!==0}function Cs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,r,a,l,s,o,f){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,o,f)}set(e,t,n,r,a,l,s,o,f){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=t,c[4]=a,c[5]=o,c[6]=n,c[7]=l,c[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[3],o=n[6],f=n[1],c=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=r[0],h=r[3],m=r[6],x=r[1],y=r[4],T=r[7],w=r[2],M=r[5],S=r[8];return a[0]=l*g+s*x+o*w,a[3]=l*h+s*y+o*M,a[6]=l*m+s*T+o*S,a[1]=f*g+c*x+u*w,a[4]=f*h+c*y+u*M,a[7]=f*m+c*T+u*S,a[2]=d*g+p*x+_*w,a[5]=d*h+p*y+_*M,a[8]=d*m+p*T+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],c=e[8];return t*l*c-t*s*f-n*a*c+n*s*o+r*a*f-r*l*o}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],c=e[8],u=c*l-s*f,d=s*o-c*a,p=f*a-l*o,_=t*u+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*f-c*n)*g,e[2]=(s*n-r*l)*g,e[3]=d*g,e[4]=(c*t-r*o)*g,e[5]=(r*a-s*t)*g,e[6]=p*g,e[7]=(n*o-f*t)*g,e[8]=(l*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,s){const o=Math.cos(a),f=Math.sin(a);return this.set(n*o,n*f,-n*(o*l+f*s)+l+e,-r*f,r*o,-r*(-f*l+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new et;function ml(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qc(){const i=Bi("canvas");return i.style.display="block",i}const Wa={};function di(i){i in Wa||(Wa[i]=!0,console.warn(i))}const Xa=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ja=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xi={[mn]:{transfer:Mr,primaries:Sr,toReference:i=>i,fromReference:i=>i},[yt]:{transfer:at,primaries:Sr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Rr]:{transfer:Mr,primaries:Er,toReference:i=>i.applyMatrix3(ja),fromReference:i=>i.applyMatrix3(Xa)},[Fs]:{transfer:at,primaries:Er,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ja),fromReference:i=>i.applyMatrix3(Xa).convertLinearToSRGB()}},eu=new Set([mn,Rr]),st={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!eu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Xi[e].toReference,r=Xi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xi[i].primaries},getTransfer:function(i){return i===Vt?Mr:Xi[i].transfer}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class _l{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Bi("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=pi(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tu=0;class gl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,s=r.length;l<s;l++)r[l].isDataTexture?a.push(qr(r[l].image)):a.push(qr(r[l]))}else a=qr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_l.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nu=0;class Rt extends Mi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Zt,r=Zt,a=Dt,l=kn,s=qt,o=An,f=Rt.DEFAULT_ANISOTROPY,c=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=zi(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=s,this.internalFormat=null,this.type=o,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Vn?yt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Vn:fl}set encoding(e){di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?yt:Vt}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=il;Rt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const o=e.elements,f=o[0],c=o[4],u=o[8],d=o[1],p=o[5],_=o[9],g=o[2],h=o[6],m=o[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+h)<.1&&Math.abs(f+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(f+1)/2,T=(p+1)/2,w=(m+1)/2,M=(c+d)/4,S=(u+g)/4,P=(_+h)/4;return y>T&&y>w?y<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(y),r=M/n,a=S/n):T>w?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=M/r,a=P/r):w<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),n=S/a,r=P/a),this.set(n,r,a,t),this}let x=Math.sqrt((h-_)*(h-_)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(h-_)/x,this.y=(u-g)/x,this.z=(d-c)/x,this.w=Math.acos((f+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iu extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?yt:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends iu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vl extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ru extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,s){let o=n[r+0],f=n[r+1],c=n[r+2],u=n[r+3];const d=a[l+0],p=a[l+1],_=a[l+2],g=a[l+3];if(s===0){e[t+0]=o,e[t+1]=f,e[t+2]=c,e[t+3]=u;return}if(s===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||o!==d||f!==p||c!==_){let h=1-s;const m=o*d+f*p+c*_+u*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),M=Math.atan2(w,m*x);h=Math.sin(h*M)/w,s=Math.sin(s*M)/w}const T=s*x;if(o=o*h+d*T,f=f*h+p*T,c=c*h+_*T,u=u*h+g*T,h===1-s){const w=1/Math.sqrt(o*o+f*f+c*c+u*u);o*=w,f*=w,c*=w,u*=w}}e[t]=o,e[t+1]=f,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,a,l){const s=n[r],o=n[r+1],f=n[r+2],c=n[r+3],u=a[l],d=a[l+1],p=a[l+2],_=a[l+3];return e[t]=s*_+c*u+o*p-f*d,e[t+1]=o*_+c*d+f*u-s*p,e[t+2]=f*_+c*p+s*d-o*u,e[t+3]=c*_-s*u-o*d-f*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,s=Math.cos,o=Math.sin,f=s(n/2),c=s(r/2),u=s(a/2),d=o(n/2),p=o(r/2),_=o(a/2);switch(l){case"XYZ":this._x=d*c*u+f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u-d*p*_;break;case"YXZ":this._x=d*c*u+f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u+d*p*_;break;case"ZXY":this._x=d*c*u-f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u-d*p*_;break;case"ZYX":this._x=d*c*u-f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u+d*p*_;break;case"YZX":this._x=d*c*u+f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u-d*p*_;break;case"XZY":this._x=d*c*u-f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],s=t[5],o=t[9],f=t[2],c=t[6],u=t[10],d=n+s+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(a-f)*p,this._z=(l-r)*p}else if(n>s&&n>u){const p=2*Math.sqrt(1+n-s-u);this._w=(c-o)/p,this._x=.25*p,this._y=(r+l)/p,this._z=(a+f)/p}else if(s>u){const p=2*Math.sqrt(1+s-n-u);this._w=(a-f)/p,this._x=(r+l)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-n-s);this._w=(l-r)/p,this._x=(a+f)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,s=t._x,o=t._y,f=t._z,c=t._w;return this._x=n*c+l*s+r*f-a*o,this._y=r*c+l*o+a*s-n*f,this._z=a*c+l*f+n*o-r*s,this._w=l*c-n*s-r*o-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let s=l*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const o=1-s*s;if(o<=Number.EPSILON){const p=1-t;return this._w=p*l+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const f=Math.sqrt(o),c=Math.atan2(f,s),u=Math.sin((1-t)*c)/f,d=Math.sin(t*c)/f;return this._w=l*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,s=e.z,o=e.w,f=2*(l*r-s*n),c=2*(s*t-a*r),u=2*(a*n-l*t);return this.x=t+o*f+l*u-s*c,this.y=n+o*c+s*f-a*u,this.z=r+o*u+a*c-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,s=t.y,o=t.z;return this.x=r*o-a*s,this.y=a*l-n*o,this.z=n*s-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new se,Ya=new ki;class Gi{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,s=a.count;l<s;l++)e.isMesh===!0?e.getVertexPosition(l,Xt):Xt.fromBufferAttribute(a,l),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),Yi.subVectors(this.max,Pi),qn.subVectors(e.a,Pi),Kn.subVectors(e.b,Pi),$n.subVectors(e.c,Pi),vn.subVectors(Kn,qn),xn.subVectors($n,Kn),Ln.subVectors(qn,$n);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Ln.z,Ln.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Ln.z,0,-Ln.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Ln.y,Ln.x,0];return!$r(t,qn,Kn,$n,Yi)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,qn,Kn,$n,Yi))?!1:(Zi.crossVectors(vn,xn),t=[Zi.x,Zi.y,Zi.z],$r(t,qn,Kn,$n,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new se,new se,new se,new se,new se,new se,new se,new se],Xt=new se,ji=new Gi,qn=new se,Kn=new se,$n=new se,vn=new se,xn=new se,Ln=new se,Pi=new se,Yi=new se,Zi=new se,Dn=new se;function $r(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Dn.fromArray(i,a);const s=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),o=e.dot(Dn),f=t.dot(Dn),c=n.dot(Dn);if(Math.max(-Math.max(o,f,c),Math.min(o,f,c))>s)return!1}return!0}const su=new Gi,Li=new se,Jr=new se;class Bs{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):su.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Li,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(Jr)),this.expandByPoint(Li.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new se,Qr=new se,qi=new se,yn=new se,es=new se,Ki=new se,ts=new se;class au{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Qr);const a=e.distanceTo(t)*.5,l=-this.direction.dot(qi),s=yn.dot(this.direction),o=-yn.dot(qi),f=yn.lengthSq(),c=Math.abs(1-l*l);let u,d,p,_;if(c>0)if(u=l*o-s,d=l*s-o,_=a*c,u>=0)if(d>=-_)if(d<=_){const g=1/c;u*=g,d*=g,p=u*(u+l*d+2*s)+d*(l*u+d+2*o)+f}else d=a,u=Math.max(0,-(l*d+s)),p=-u*u+d*(d+2*o)+f;else d=-a,u=Math.max(0,-(l*d+s)),p=-u*u+d*(d+2*o)+f;else d<=-_?(u=Math.max(0,-(-l*a+s)),d=u>0?-a:Math.min(Math.max(-a,-o),a),p=-u*u+d*(d+2*o)+f):d<=_?(u=0,d=Math.min(Math.max(-a,-o),a),p=d*(d+2*o)+f):(u=Math.max(0,-(l*a+s)),d=u>0?a:Math.min(Math.max(-a,-o),a),p=-u*u+d*(d+2*o)+f);else d=l>0?-a:a,u=Math.max(0,-(l*d+s)),p=-u*u+d*(d+2*o)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qr).addScaledVector(qi,d),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),s=n-l,o=n+l;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,s,o;const f=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return f>=0?(n=(e.min.x-d.x)*f,r=(e.max.x-d.x)*f):(n=(e.max.x-d.x)*f,r=(e.min.x-d.x)*f),c>=0?(a=(e.min.y-d.y)*c,l=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,l=(e.min.y-d.y)*c),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),u>=0?(s=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(s=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),n>o||s>r)||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,a){es.subVectors(t,e),Ki.subVectors(n,e),ts.crossVectors(es,Ki);let l=this.direction.dot(ts),s;if(l>0){if(r)return null;s=1}else if(l<0)s=-1,l=-l;else return null;yn.subVectors(this.origin,e);const o=s*this.direction.dot(Ki.crossVectors(yn,Ki));if(o<0)return null;const f=s*this.direction.dot(es.cross(yn));if(f<0||o+f>l)return null;const c=-s*yn.dot(ts);return c<0?null:this.at(c/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,r,a,l,s,o,f,c,u,d,p,_,g,h){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,o,f,c,u,d,p,_,g,h)}set(e,t,n,r,a,l,s,o,f,c,u,d,p,_,g,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=s,m[13]=o,m[2]=f,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=_,m[11]=g,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),a=1/Jn.setFromMatrixColumn(e,1).length(),l=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),s=Math.sin(n),o=Math.cos(r),f=Math.sin(r),c=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=l*c,p=l*u,_=s*c,g=s*u;t[0]=o*c,t[4]=-o*u,t[8]=f,t[1]=p+_*f,t[5]=d-g*f,t[9]=-s*o,t[2]=g-d*f,t[6]=_+p*f,t[10]=l*o}else if(e.order==="YXZ"){const d=o*c,p=o*u,_=f*c,g=f*u;t[0]=d+g*s,t[4]=_*s-p,t[8]=l*f,t[1]=l*u,t[5]=l*c,t[9]=-s,t[2]=p*s-_,t[6]=g+d*s,t[10]=l*o}else if(e.order==="ZXY"){const d=o*c,p=o*u,_=f*c,g=f*u;t[0]=d-g*s,t[4]=-l*u,t[8]=_+p*s,t[1]=p+_*s,t[5]=l*c,t[9]=g-d*s,t[2]=-l*f,t[6]=s,t[10]=l*o}else if(e.order==="ZYX"){const d=l*c,p=l*u,_=s*c,g=s*u;t[0]=o*c,t[4]=_*f-p,t[8]=d*f+g,t[1]=o*u,t[5]=g*f+d,t[9]=p*f-_,t[2]=-f,t[6]=s*o,t[10]=l*o}else if(e.order==="YZX"){const d=l*o,p=l*f,_=s*o,g=s*f;t[0]=o*c,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=l*c,t[9]=-s*c,t[2]=-f*c,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=l*o,p=l*f,_=s*o,g=s*f;t[0]=o*c,t[4]=-u,t[8]=f*c,t[1]=d*u+g,t[5]=l*c,t[9]=p*u-_,t[2]=_*u-p,t[6]=s*c,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ou,e,lu)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),bn.crossVectors(n,Ft),bn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),bn.crossVectors(n,Ft)),bn.normalize(),$i.crossVectors(Ft,bn),r[0]=bn.x,r[4]=$i.x,r[8]=Ft.x,r[1]=bn.y,r[5]=$i.y,r[9]=Ft.y,r[2]=bn.z,r[6]=$i.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[4],o=n[8],f=n[12],c=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],h=n[10],m=n[14],x=n[3],y=n[7],T=n[11],w=n[15],M=r[0],S=r[4],P=r[8],O=r[12],b=r[1],D=r[5],F=r[9],K=r[13],N=r[2],G=r[6],W=r[10],te=r[14],j=r[3],re=r[7],le=r[11],ue=r[15];return a[0]=l*M+s*b+o*N+f*j,a[4]=l*S+s*D+o*G+f*re,a[8]=l*P+s*F+o*W+f*le,a[12]=l*O+s*K+o*te+f*ue,a[1]=c*M+u*b+d*N+p*j,a[5]=c*S+u*D+d*G+p*re,a[9]=c*P+u*F+d*W+p*le,a[13]=c*O+u*K+d*te+p*ue,a[2]=_*M+g*b+h*N+m*j,a[6]=_*S+g*D+h*G+m*re,a[10]=_*P+g*F+h*W+m*le,a[14]=_*O+g*K+h*te+m*ue,a[3]=x*M+y*b+T*N+w*j,a[7]=x*S+y*D+T*G+w*re,a[11]=x*P+y*F+T*W+w*le,a[15]=x*O+y*K+T*te+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],s=e[5],o=e[9],f=e[13],c=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],h=e[11],m=e[15];return _*(+a*o*u-r*f*u-a*s*d+n*f*d+r*s*p-n*o*p)+g*(+t*o*p-t*f*d+a*l*d-r*l*p+r*f*c-a*o*c)+h*(+t*f*u-t*s*p-a*l*u+n*l*p+a*s*c-n*f*c)+m*(-r*s*c-t*o*u+t*s*d+r*l*u-n*l*d+n*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],c=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],h=e[14],m=e[15],x=u*h*f-g*d*f+g*o*p-s*h*p-u*o*m+s*d*m,y=_*d*f-c*h*f-_*o*p+l*h*p+c*o*m-l*d*m,T=c*g*f-_*u*f+_*s*p-l*g*p-c*s*m+l*u*m,w=_*u*o-c*g*o-_*s*d+l*g*d+c*s*h-l*u*h,M=t*x+n*y+r*T+a*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=x*S,e[1]=(g*d*a-u*h*a-g*r*p+n*h*p+u*r*m-n*d*m)*S,e[2]=(s*h*a-g*o*a+g*r*f-n*h*f-s*r*m+n*o*m)*S,e[3]=(u*o*a-s*d*a-u*r*f+n*d*f+s*r*p-n*o*p)*S,e[4]=y*S,e[5]=(c*h*a-_*d*a+_*r*p-t*h*p-c*r*m+t*d*m)*S,e[6]=(_*o*a-l*h*a-_*r*f+t*h*f+l*r*m-t*o*m)*S,e[7]=(l*d*a-c*o*a+c*r*f-t*d*f-l*r*p+t*o*p)*S,e[8]=T*S,e[9]=(_*u*a-c*g*a-_*n*p+t*g*p+c*n*m-t*u*m)*S,e[10]=(l*g*a-_*s*a+_*n*f-t*g*f-l*n*m+t*s*m)*S,e[11]=(c*s*a-l*u*a-c*n*f+t*u*f+l*n*p-t*s*p)*S,e[12]=w*S,e[13]=(c*g*r-_*u*r+_*n*d-t*g*d-c*n*h+t*u*h)*S,e[14]=(_*s*r-l*g*r-_*n*o+t*g*o+l*n*h-t*s*h)*S,e[15]=(l*u*r-c*s*r+c*n*o-t*u*o-l*n*d+t*s*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,s=e.y,o=e.z,f=a*l,c=a*s;return this.set(f*l+n,f*s-r*o,f*o+r*s,0,f*s+r*o,c*s+n,c*o-r*l,0,f*o-r*s,c*o+r*l,a*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,s=t._z,o=t._w,f=a+a,c=l+l,u=s+s,d=a*f,p=a*c,_=a*u,g=l*c,h=l*u,m=s*u,x=o*f,y=o*c,T=o*u,w=n.x,M=n.y,S=n.z;return r[0]=(1-(g+m))*w,r[1]=(p+T)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(p-T)*M,r[5]=(1-(d+m))*M,r[6]=(h+x)*M,r[7]=0,r[8]=(_+y)*S,r[9]=(h-x)*S,r[10]=(1-(d+g))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Jn.set(r[0],r[1],r[2]).length();const l=Jn.set(r[4],r[5],r[6]).length(),s=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const f=1/a,c=1/l,u=1/s;return jt.elements[0]*=f,jt.elements[1]*=f,jt.elements[2]*=f,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),n.x=a,n.y=l,n.z=s,this}makePerspective(e,t,n,r,a,l,s=dn){const o=this.elements,f=2*a/(t-e),c=2*a/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let p,_;if(s===dn)p=-(l+a)/(l-a),_=-2*l*a/(l-a);else if(s===wr)p=-l/(l-a),_=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=f,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,a,l,s=dn){const o=this.elements,f=1/(t-e),c=1/(n-r),u=1/(l-a),d=(t+e)*f,p=(n+r)*c;let _,g;if(s===dn)_=(l+a)*u,g=-2*u;else if(s===wr)_=a*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=g,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new se,jt=new mt,ou=new se(0,0,0),lu=new se(1,1,1),bn=new se,$i=new se,Ft=new se,Za=new mt,qa=new ki;class Pr{constructor(e=0,t=0,n=0,r=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],s=r[8],o=r[1],f=r[5],c=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(o,f)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qa.setFromEuler(this),this.setFromQuaternion(qa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cu=0;const Ka=new se,Qn=new ki,an=new mt,Ji=new se,Di=new se,uu=new se,fu=new ki,$a=new se(1,0,0),Ja=new se(0,1,0),Qa=new se(0,0,1),hu={type:"added"},du={type:"removed"};class At extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new se,t=new Pr,n=new ki,r=new se(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new et}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis($a,e)}rotateY(e){return this.rotateOnAxis(Ja,e)}rotateZ(e){return this.rotateOnAxis(Qa,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($a,e)}translateY(e){return this.translateOnAxis(Ja,e)}translateZ(e){return this.translateOnAxis(Qa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Di,Ji,this.up):an.lookAt(Ji,Di,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(an),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(du)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,uu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,fu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const o=s.shapes;if(Array.isArray(o))for(let f=0,c=o.length;f<c;f++){const u=o[f];a(e.shapes,u)}else a(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let o=0,f=this.material.length;o<f;o++)s.push(a(e.materials,this.material[o]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const o=this.animations[s];r.animations.push(a(e.animations,o))}}if(t){const s=l(e.geometries),o=l(e.materials),f=l(e.textures),c=l(e.images),u=l(e.shapes),d=l(e.skeletons),p=l(e.animations),_=l(e.nodes);s.length>0&&(n.geometries=s),o.length>0&&(n.materials=o),f.length>0&&(n.textures=f),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function l(s){const o=[];for(const f in s){const c=s[f];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}At.DEFAULT_UP=new se(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new se,on=new se,ns=new se,ln=new se,ei=new se,ti=new se,eo=new se,is=new se,rs=new se,ss=new se;class en{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Yt.subVectors(r,t),on.subVectors(n,t),ns.subVectors(e,t);const l=Yt.dot(Yt),s=Yt.dot(on),o=Yt.dot(ns),f=on.dot(on),c=on.dot(ns),u=l*f-s*s;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(f*o-s*c)*d,_=(l*c-s*o)*d;return a.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,a,l,s,o){return this.getBarycoord(e,t,n,r,ln)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,ln.x),o.addScaledVector(l,ln.y),o.addScaledVector(s,ln.z),o)}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),on.subVectors(e,t),Yt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Yt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,s;ei.subVectors(r,n),ti.subVectors(a,n),is.subVectors(e,n);const o=ei.dot(is),f=ti.dot(is);if(o<=0&&f<=0)return t.copy(n);rs.subVectors(e,r);const c=ei.dot(rs),u=ti.dot(rs);if(c>=0&&u<=c)return t.copy(r);const d=o*u-c*f;if(d<=0&&o>=0&&c<=0)return l=o/(o-c),t.copy(n).addScaledVector(ei,l);ss.subVectors(e,a);const p=ei.dot(ss),_=ti.dot(ss);if(_>=0&&p<=_)return t.copy(a);const g=p*f-o*_;if(g<=0&&f>=0&&_<=0)return s=f/(f-_),t.copy(n).addScaledVector(ti,s);const h=c*_-p*u;if(h<=0&&u-c>=0&&p-_>=0)return eo.subVectors(a,r),s=(u-c)/(u-c+(p-_)),t.copy(r).addScaledVector(eo,s);const m=1/(h+g+d);return l=g*m,s=d*m,t.copy(n).addScaledVector(ei,l).addScaledVector(ti,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function as(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=st.workingColorSpace){if(e=Jc(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=as(l,a,e+1/3),this.g=as(l,a,e),this.b=as(l,a,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],s=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=yl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return st.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Ut(Tt.r*255,0,255))*65536+Math.round(Ut(Tt.g*255,0,255))*256+Math.round(Ut(Tt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,a=Tt.b,l=Math.max(n,r,a),s=Math.min(n,r,a);let o,f;const c=(s+l)/2;if(s===l)o=0,f=0;else{const u=l-s;switch(f=c<=.5?u/(l+s):u/(2-l-s),l){case n:o=(r-a)/u+(r<a?6:0);break;case r:o=(a-n)/u+2;break;case a:o=(n-r)/u+4;break}o/=6}return e.h=o,e.s=f,e.l=c,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=yt){st.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Qi);const n=jr(Mn.h,Qi.h,t),r=jr(Mn.s,Qi.s,t),a=jr(Mn.l,Qi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new it;it.NAMES=yl;let pu=0;class Si extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=hi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bs,this.blendDst=Ms,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ms&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const s in a){const o=a[s];delete o.metadata,l.push(o)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bl extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new se,er=new tt;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return di("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class Ml extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sl extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pn extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mu=0;const Gt=new mt,os=new At,ni=new se,Bt=new Gi,Ui=new Gi,xt=new se;class gn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?Sl:Ml)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return os.lookAt(e),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Bt.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const s=t[a];Ui.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(Bt.min,Ui.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Ui.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Ui.min),Bt.expandByPoint(Ui.max))}Bt.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)xt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let a=0,l=t.length;a<l;a++){const s=t[a],o=this.morphTargetsRelative;for(let f=0,c=s.count;f<c;f++)xt.fromBufferAttribute(s,f),o&&(ni.fromBufferAttribute(e,f),xt.add(ni)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*s),4));const o=this.getAttribute("tangent").array,f=[],c=[];for(let b=0;b<s;b++)f[b]=new se,c[b]=new se;const u=new se,d=new se,p=new se,_=new tt,g=new tt,h=new tt,m=new se,x=new se;function y(b,D,F){u.fromArray(r,b*3),d.fromArray(r,D*3),p.fromArray(r,F*3),_.fromArray(l,b*2),g.fromArray(l,D*2),h.fromArray(l,F*2),d.sub(u),p.sub(u),g.sub(_),h.sub(_);const K=1/(g.x*h.y-h.x*g.y);isFinite(K)&&(m.copy(d).multiplyScalar(h.y).addScaledVector(p,-g.y).multiplyScalar(K),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-h.x).multiplyScalar(K),f[b].add(m),f[D].add(m),f[F].add(m),c[b].add(x),c[D].add(x),c[F].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,D=T.length;b<D;++b){const F=T[b],K=F.start,N=F.count;for(let G=K,W=K+N;G<W;G+=3)y(n[G+0],n[G+1],n[G+2])}const w=new se,M=new se,S=new se,P=new se;function O(b){S.fromArray(a,b*3),P.copy(S);const D=f[b];w.copy(D),w.sub(S.multiplyScalar(S.dot(D))).normalize(),M.crossVectors(P,D);const K=M.dot(c[b])<0?-1:1;o[b*4]=w.x,o[b*4+1]=w.y,o[b*4+2]=w.z,o[b*4+3]=K}for(let b=0,D=T.length;b<D;++b){const F=T[b],K=F.start,N=F.count;for(let G=K,W=K+N;G<W;G+=3)O(n[G+0]),O(n[G+1]),O(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new se,a=new se,l=new se,s=new se,o=new se,f=new se,c=new se,u=new se;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),l.fromBufferAttribute(t,h),c.subVectors(l,a),u.subVectors(r,a),c.cross(u),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),f.fromBufferAttribute(n,h),s.add(c),o.add(c),f.add(c),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(h,f.x,f.y,f.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),l.fromBufferAttribute(t,d+2),c.subVectors(l,a),u.subVectors(r,a),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(s,o){const f=s.array,c=s.itemSize,u=s.normalized,d=new f.constructor(o.length*c);let p=0,_=0;for(let g=0,h=o.length;g<h;g++){s.isInterleavedBufferAttribute?p=o[g]*s.data.stride+s.offset:p=o[g]*c;for(let m=0;m<c;m++)d[_++]=f[p++]}return new Kt(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,r=this.attributes;for(const s in r){const o=r[s],f=e(o,n);t.setAttribute(s,f)}const a=this.morphAttributes;for(const s in a){const o=[],f=a[s];for(let c=0,u=f.length;c<u;c++){const d=f[c],p=e(d,n);o.push(p)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,o=l.length;s<o;s++){const f=l[s];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const f in o)o[f]!==void 0&&(e[f]=o[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const f=n[o];e.data.attributes[o]=f.toJSON(e.data)}const r={};let a=!1;for(const o in this.morphAttributes){const f=this.morphAttributes[o],c=[];for(let u=0,d=f.length;u<d;u++){const p=f[u];c.push(p.toJSON(e.data))}c.length>0&&(r[o]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const c=r[f];this.setAttribute(f,c.clone(t))}const a=e.morphAttributes;for(const f in a){const c=[],u=a[f];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[f]=c}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,c=l.length;f<c;f++){const u=l[f];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const to=new mt,Un=new au,tr=new Bs,no=new se,ii=new se,ri=new se,si=new se,ls=new se,nr=new se,ir=new tt,rr=new tt,sr=new tt,io=new se,ro=new se,so=new se,ar=new se,or=new se;class zt extends At{constructor(e=new gn,t=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){nr.set(0,0,0);for(let o=0,f=a.length;o<f;o++){const c=s[o],u=a[o];c!==0&&(ls.fromBufferAttribute(u,e),l?nr.addScaledVector(ls,c):nr.addScaledVector(ls.sub(t),c))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(a),Un.copy(e.ray).recast(e.near),!(tr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(tr,no)===null||Un.origin.distanceToSquared(no)>(e.far-e.near)**2))&&(to.copy(a).invert(),Un.copy(e.ray).applyMatrix4(to),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,s=a.index,o=a.attributes.position,f=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(l))for(let _=0,g=d.length;_<g;_++){const h=d[_],m=l[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(s.count,Math.min(h.start+h.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const M=s.getX(T),S=s.getX(T+1),P=s.getX(T+2);r=lr(this,m,e,n,f,c,u,M,S,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(s.count,p.start+p.count);for(let h=_,m=g;h<m;h+=3){const x=s.getX(h),y=s.getX(h+1),T=s.getX(h+2);r=lr(this,l,e,n,f,c,u,x,y,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(l))for(let _=0,g=d.length;_<g;_++){const h=d[_],m=l[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const M=T,S=T+1,P=T+2;r=lr(this,m,e,n,f,c,u,M,S,P),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let h=_,m=g;h<m;h+=3){const x=h,y=h+1,T=h+2;r=lr(this,l,e,n,f,c,u,x,y,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function _u(i,e,t,n,r,a,l,s){let o;if(e.side===Ot?o=n.intersectTriangle(l,a,r,!0,s):o=n.intersectTriangle(r,a,l,e.side===Cn,s),o===null)return null;or.copy(s),or.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(or);return f<t.near||f>t.far?null:{distance:f,point:or.clone(),object:i}}function lr(i,e,t,n,r,a,l,s,o,f){i.getVertexPosition(s,ii),i.getVertexPosition(o,ri),i.getVertexPosition(f,si);const c=_u(i,e,t,n,ii,ri,si,ar);if(c){r&&(ir.fromBufferAttribute(r,s),rr.fromBufferAttribute(r,o),sr.fromBufferAttribute(r,f),c.uv=en.getInterpolation(ar,ii,ri,si,ir,rr,sr,new tt)),a&&(ir.fromBufferAttribute(a,s),rr.fromBufferAttribute(a,o),sr.fromBufferAttribute(a,f),c.uv1=en.getInterpolation(ar,ii,ri,si,ir,rr,sr,new tt),c.uv2=c.uv1),l&&(io.fromBufferAttribute(l,s),ro.fromBufferAttribute(l,o),so.fromBufferAttribute(l,f),c.normal=en.getInterpolation(ar,ii,ri,si,io,ro,so,new se),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:s,b:o,c:f,normal:new se,materialIndex:0};en.getNormal(ii,ri,si,u.normal),c.face=u}return c}class Hi extends gn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const s=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const o=[],f=[],c=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,l,a,0),_("z","y","x",1,-1,n,t,-e,l,a,1),_("x","z","y",1,1,e,n,t,r,l,2),_("x","z","y",1,-1,e,n,-t,r,l,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(o),this.setAttribute("position",new pn(f,3)),this.setAttribute("normal",new pn(c,3)),this.setAttribute("uv",new pn(u,2));function _(g,h,m,x,y,T,w,M,S,P,O){const b=T/S,D=w/P,F=T/2,K=w/2,N=M/2,G=S+1,W=P+1;let te=0,j=0;const re=new se;for(let le=0;le<W;le++){const ue=le*D-K;for(let X=0;X<G;X++){const he=X*b-F;re[g]=he*x,re[h]=ue*y,re[m]=N,f.push(re.x,re.y,re.z),re[g]=0,re[h]=0,re[m]=M>0?1:-1,c.push(re.x,re.y,re.z),u.push(X/S),u.push(1-le/P),te+=1}}for(let le=0;le<P;le++)for(let ue=0;ue<S;ue++){const X=d+ue+G*le,he=d+ue+G*(le+1),H=d+(ue+1)+G*(le+1),ce=d+(ue+1)+G*le;o.push(X,he,ce),o.push(he,H,ce),j+=6}s.addGroup(p,j,O),p+=j,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function gu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function El(i){return i.getRenderTarget()===null?i.outputColorSpace:st.workingColorSpace}const Lr={clone:yi,merge:Ct};var vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vu,this.fragmentShader=xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=gu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wl extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new se,ao=new tt,oo=new tt;class Ht extends wl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const o=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/o,t-=l.offsetY*n/f,r*=l.width/o,n*=l.height/f}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ai=-90,oi=1;class yu extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(ai,oi,e,t);r.layers=this.layers,this.add(r);const a=new Ht(ai,oi,e,t);a.layers=this.layers,this.add(a);const l=new Ht(ai,oi,e,t);l.layers=this.layers,this.add(l);const s=new Ht(ai,oi,e,t);s.layers=this.layers,this.add(s);const o=new Ht(ai,oi,e,t);o.layers=this.layers,this.add(o);const f=new Ht(ai,oi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,s,o]=t;for(const f of t)this.remove(f);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,s,o,f,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,o),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Tl extends Rt{constructor(e,t,n,r,a,l,s,o,f,c){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,r,a,l,s,o,f,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bu extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?yt:Vt),this.texture=new Tl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Hi(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:tn});a.uniforms.tEquirect.value=t;const l=new zt(r,a),s=t.minFilter;return t.minFilter===kn&&(t.minFilter=Dt),new yu(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const cs=new se,Mu=new se,Su=new et;class On{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=cs.subVectors(n,t).cross(Mu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(cs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Su.getNormalMatrix(e),r=this.coplanarPoint(cs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Bs,cr=new se;class zs{constructor(e=new On,t=new On,n=new On,r=new On,a=new On,l=new On){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,a=r[0],l=r[1],s=r[2],o=r[3],f=r[4],c=r[5],u=r[6],d=r[7],p=r[8],_=r[9],g=r[10],h=r[11],m=r[12],x=r[13],y=r[14],T=r[15];if(n[0].setComponents(o-a,d-f,h-p,T-m).normalize(),n[1].setComponents(o+a,d+f,h+p,T+m).normalize(),n[2].setComponents(o+l,d+c,h+_,T+x).normalize(),n[3].setComponents(o-l,d-c,h-_,T-x).normalize(),n[4].setComponents(o-s,d-u,h-g,T-y).normalize(),t===dn)n[5].setComponents(o+s,d+u,h+g,T+y).normalize();else if(t===wr)n[5].setComponents(s,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Al(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Eu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,c){const u=f.array,d=f.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(c,_),i.bufferData(c,u,d),f.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version,size:p}}function a(f,c,u){const d=c.array,p=c._updateRange,_=c.updateRanges;if(i.bindBuffer(u,f),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,h=_.length;g<h;g++){const m=_[g];t?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}c.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function s(f){f.isInterleavedBufferAttribute&&(f=f.data);const c=n.get(f);c&&(i.deleteBuffer(c.buffer),n.delete(f))}function o(f,c){if(f.isGLBufferAttribute){const d=n.get(f);(!d||d.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const u=n.get(f);if(u===void 0)n.set(f,r(f,c));else if(u.version<f.version){if(u.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(u.buffer,f,c),u.version=f.version}}return{get:l,remove:s,update:o}}class bi extends gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,s=Math.floor(n),o=Math.floor(r),f=s+1,c=o+1,u=e/s,d=t/o,p=[],_=[],g=[],h=[];for(let m=0;m<c;m++){const x=m*d-l;for(let y=0;y<f;y++){const T=y*u-a;_.push(T,-x,0),g.push(0,0,1),h.push(y/s),h.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<s;x++){const y=x+f*m,T=x+f*(m+1),w=x+1+f*(m+1),M=x+1+f*m;p.push(y,T,M),p.push(T,w,M)}this.setIndex(p),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Au=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ku=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ih=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ah=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ch=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ph=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_h=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Eh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Th=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ch=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ih=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ed=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,td=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,id=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:wu,alphahash_pars_fragment:Tu,alphamap_fragment:Au,alphamap_pars_fragment:Cu,alphatest_fragment:Ru,alphatest_pars_fragment:Pu,aomap_fragment:Lu,aomap_pars_fragment:Du,batching_pars_vertex:Uu,batching_vertex:Iu,begin_vertex:Ou,beginnormal_vertex:Nu,bsdfs:Fu,iridescence_fragment:Bu,bumpmap_pars_fragment:zu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Vu,color_fragment:Wu,color_pars_fragment:Xu,color_pars_vertex:ju,color_vertex:Yu,common:Zu,cube_uv_reflection_fragment:qu,defaultnormal_vertex:Ku,displacementmap_pars_vertex:$u,displacementmap_vertex:Ju,emissivemap_fragment:Qu,emissivemap_pars_fragment:ef,colorspace_fragment:tf,colorspace_pars_fragment:nf,envmap_fragment:rf,envmap_common_pars_fragment:sf,envmap_pars_fragment:af,envmap_pars_vertex:of,envmap_physical_pars_fragment:xf,envmap_vertex:lf,fog_vertex:cf,fog_pars_vertex:uf,fog_fragment:ff,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_fragment:pf,lightmap_pars_fragment:mf,lights_lambert_fragment:_f,lights_lambert_pars_fragment:gf,lights_pars_begin:vf,lights_toon_fragment:yf,lights_toon_pars_fragment:bf,lights_phong_fragment:Mf,lights_phong_pars_fragment:Sf,lights_physical_fragment:Ef,lights_physical_pars_fragment:wf,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:Cf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Pf,logdepthbuf_pars_vertex:Lf,logdepthbuf_vertex:Df,map_fragment:Uf,map_pars_fragment:If,map_particle_fragment:Of,map_particle_pars_fragment:Nf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Bf,morphcolor_vertex:zf,morphnormal_vertex:kf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Hf,normal_fragment_begin:Vf,normal_fragment_maps:Wf,normal_pars_fragment:Xf,normal_pars_vertex:jf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:qf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:$f,iridescence_pars_fragment:Jf,opaque_fragment:Qf,packing:eh,premultiplied_alpha_fragment:th,project_vertex:nh,dithering_fragment:ih,dithering_pars_fragment:rh,roughnessmap_fragment:sh,roughnessmap_pars_fragment:ah,shadowmap_pars_fragment:oh,shadowmap_pars_vertex:lh,shadowmap_vertex:ch,shadowmask_pars_fragment:uh,skinbase_vertex:fh,skinning_pars_vertex:hh,skinning_vertex:dh,skinnormal_vertex:ph,specularmap_fragment:mh,specularmap_pars_fragment:_h,tonemapping_fragment:gh,tonemapping_pars_fragment:vh,transmission_fragment:xh,transmission_pars_fragment:yh,uv_pars_fragment:bh,uv_pars_vertex:Mh,uv_vertex:Sh,worldpos_vertex:Eh,background_vert:wh,background_frag:Th,backgroundCube_vert:Ah,backgroundCube_frag:Ch,cube_vert:Rh,cube_frag:Ph,depth_vert:Lh,depth_frag:Dh,distanceRGBA_vert:Uh,distanceRGBA_frag:Ih,equirect_vert:Oh,equirect_frag:Nh,linedashed_vert:Fh,linedashed_frag:Bh,meshbasic_vert:zh,meshbasic_frag:kh,meshlambert_vert:Gh,meshlambert_frag:Hh,meshmatcap_vert:Vh,meshmatcap_frag:Wh,meshnormal_vert:Xh,meshnormal_frag:jh,meshphong_vert:Yh,meshphong_frag:Zh,meshphysical_vert:qh,meshphysical_frag:Kh,meshtoon_vert:$h,meshtoon_frag:Jh,points_vert:Qh,points_frag:ed,shadow_vert:td,shadow_frag:nd,sprite_vert:id,sprite_frag:rd},Me={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Jt={basic:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Ct([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Ct([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Ct([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new it(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Ct([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Ct([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Ct([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Ct([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Ct([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Ct([Me.common,Me.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Ct([Me.lights,Me.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Jt.physical={uniforms:Ct([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ur={r:0,b:0,g:0};function sd(i,e,t,n,r,a,l){const s=new it(0);let o=a===!0?0:1,f,c,u=null,d=0,p=null;function _(h,m){let x=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?g(s,o):y&&y.isColor&&(g(y,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Cr)?(c===void 0&&(c=new zt(new Hi(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:yi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=st.getTransfer(y.colorSpace)!==at,(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new zt(new bi(2,2),new Wt({name:"BackgroundMaterial",uniforms:yi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=st.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null))}function g(h,m){h.getRGB(ur,El(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,m,l)}return{getClearColor:function(){return s},setClearColor:function(h,m=1){s.set(h),o=m,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,g(s,o)},render:_}}function ad(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,s={},o=h(null);let f=o,c=!1;function u(N,G,W,te,j){let re=!1;if(l){const le=g(te,W,G);f!==le&&(f=le,p(f.object)),re=m(N,te,W,j),re&&x(N,te,W,j)}else{const le=G.wireframe===!0;(f.geometry!==te.id||f.program!==W.id||f.wireframe!==le)&&(f.geometry=te.id,f.program=W.id,f.wireframe=le,re=!0)}j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,P(N,G,W,te),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):a.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function g(N,G,W){const te=W.wireframe===!0;let j=s[N.id];j===void 0&&(j={},s[N.id]=j);let re=j[G.id];re===void 0&&(re={},j[G.id]=re);let le=re[te];return le===void 0&&(le=h(d()),re[te]=le),le}function h(N){const G=[],W=[],te=[];for(let j=0;j<r;j++)G[j]=0,W[j]=0,te[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:te,object:N,attributes:{},index:null}}function m(N,G,W,te){const j=f.attributes,re=G.attributes;let le=0;const ue=W.getAttributes();for(const X in ue)if(ue[X].location>=0){const H=j[X];let ce=re[X];if(ce===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),H===void 0||H.attribute!==ce||ce&&H.data!==ce.data)return!0;le++}return f.attributesNum!==le||f.index!==te}function x(N,G,W,te){const j={},re=G.attributes;let le=0;const ue=W.getAttributes();for(const X in ue)if(ue[X].location>=0){let H=re[X];H===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const ce={};ce.attribute=H,H&&H.data&&(ce.data=H.data),j[X]=ce,le++}f.attributes=j,f.attributesNum=le,f.index=te}function y(){const N=f.newAttributes;for(let G=0,W=N.length;G<W;G++)N[G]=0}function T(N){w(N,0)}function w(N,G){const W=f.newAttributes,te=f.enabledAttributes,j=f.attributeDivisors;W[N]=1,te[N]===0&&(i.enableVertexAttribArray(N),te[N]=1),j[N]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),j[N]=G)}function M(){const N=f.newAttributes,G=f.enabledAttributes;for(let W=0,te=G.length;W<te;W++)G[W]!==N[W]&&(i.disableVertexAttribArray(W),G[W]=0)}function S(N,G,W,te,j,re,le){le===!0?i.vertexAttribIPointer(N,G,W,j,re):i.vertexAttribPointer(N,G,W,te,j,re)}function P(N,G,W,te){if(n.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const j=te.attributes,re=W.getAttributes(),le=G.defaultAttributeValues;for(const ue in re){const X=re[ue];if(X.location>=0){let he=j[ue];if(he===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const H=he.normalized,ce=he.itemSize,xe=t.get(he);if(xe===void 0)continue;const we=xe.buffer,ve=xe.type,Se=xe.bytesPerElement,ke=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||he.gpuType===rl);if(he.isInterleavedBufferAttribute){const Ae=he.data,V=Ae.stride,He=he.offset;if(Ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)w(X.location+Pe,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)T(X.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Pe=0;Pe<X.locationSize;Pe++)S(X.location+Pe,ce/X.locationSize,ve,H,V*Se,(He+ce/X.locationSize*Pe)*Se,ke)}else{if(he.isInstancedBufferAttribute){for(let Ae=0;Ae<X.locationSize;Ae++)w(X.location+Ae,he.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)T(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ae=0;Ae<X.locationSize;Ae++)S(X.location+Ae,ce/X.locationSize,ve,H,ce*Se,ce/X.locationSize*Ae*Se,ke)}}else if(le!==void 0){const H=le[ue];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(X.location,H);break;case 3:i.vertexAttrib3fv(X.location,H);break;case 4:i.vertexAttrib4fv(X.location,H);break;default:i.vertexAttrib1fv(X.location,H)}}}}M()}function O(){F();for(const N in s){const G=s[N];for(const W in G){const te=G[W];for(const j in te)_(te[j].object),delete te[j];delete G[W]}delete s[N]}}function b(N){if(s[N.id]===void 0)return;const G=s[N.id];for(const W in G){const te=G[W];for(const j in te)_(te[j].object),delete te[j];delete G[W]}delete s[N.id]}function D(N){for(const G in s){const W=s[G];if(W[N.id]===void 0)continue;const te=W[N.id];for(const j in te)_(te[j].object),delete te[j];delete W[N.id]}}function F(){K(),c=!0,f!==o&&(f=o,p(f.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:F,resetDefaultState:K,dispose:O,releaseStatesOfGeometry:b,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:T,disableUnusedAttributes:M}}function od(i,e,t,n){const r=n.isWebGL2;let a;function l(c){a=c}function s(c,u){i.drawArrays(a,c,u),t.update(u,a,1)}function o(c,u,d){if(d===0)return;let p,_;if(r)p=i,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,c,u,d),t.update(u,a,d)}function f(c,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(c[_],u[_]);else{p.multiDrawArraysWEBGL(a,c,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,a,1)}}this.setMode=l,this.render=s,this.renderInstances=o,this.renderMultiDraw=f}function ld(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const f=l||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=l||e.has("OES_texture_float"),w=y&&T,M=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:M}}function cd(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new On,s=new et,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,h=u.clipShadows,m=i.get(u);if(!r||_===null||_.length===0||a&&!h)a?c(null):f();else{const x=a?0:n,y=x*4;let T=m.clippingState||null;o.value=T,T=c(_,d,y,p);for(let w=0;w!==y;++w)T[w]=t[w];m.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function f(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,p,_){const g=u!==null?u.length:0;let h=null;if(g!==0){if(h=o.value,_!==!0||h===null){const m=p+g*4,x=d.matrixWorldInverse;s.getNormalMatrix(x),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,T=p;y!==g;++y,T+=4)l.copy(u[y]).applyMatrix4(x,s),l.normal.toArray(h,T),h[T+3]=l.constant}o.value=h,o.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function ud(i){let e=new WeakMap;function t(l,s){return s===Ss?l.mapping=gi:s===Es&&(l.mapping=vi),l}function n(l){if(l&&l.isTexture){const s=l.mapping;if(s===Ss||s===Es)if(e.has(l)){const o=e.get(l).texture;return t(o,l.mapping)}else{const o=l.image;if(o&&o.height>0){const f=new bu(o.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const s=l.target;s.removeEventListener("dispose",r);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ks extends wl{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,l,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,lo=[.125,.215,.35,.446,.526,.582],zn=20,us=new ks,co=new it;let fs=null,hs=0,ds=0;const Nn=(1+Math.sqrt(5))/2,li=1/Nn,uo=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Nn,li),new se(0,Nn,-li),new se(li,0,Nn),new se(-li,0,Nn),new se(Nn,li,0),new se(-Nn,li,0)];class fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){fs=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fs,hs,ds),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fs=this._renderer.getRenderTarget(),hs=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Wn,format:qt,colorSpace:mn,depthBuffer:!1},r=ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fd(a)),this._blurMaterial=hd(a,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,us)}_sceneToCubeUV(e,t,n,r){const s=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(co),c.toneMapping=Tn,c.autoClear=!1;const p=new bl({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new zt(new Hi,p);let g=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,g=!0):(p.color.copy(co),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(s.up.set(0,o[m],0),s.lookAt(f[m],0,0)):x===1?(s.up.set(0,0,o[m]),s.lookAt(0,f[m],0)):(s.up.set(0,o[m],0),s.lookAt(0,0,f[m]));const y=this._cubeSize;fr(r,x*y,m>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(_,s),c.render(e,s)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gi||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new zt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const o=this._cubeSize;fr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(l,us)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=uo[(r-1)%uo.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,s){const o=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new zt(this._lodPlanes[r],f),d=f.uniforms,p=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*zn-1),g=a/_,h=isFinite(a)?1+Math.floor(c*g):zn;h>zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${zn}`);const m=[];let x=0;for(let S=0;S<zn;++S){const P=S/g,O=Math.exp(-P*P/2);m.push(O),S===0?x+=O:S<h&&(x+=2*O)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=l==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const T=this._sizeLods[r],w=3*T*(r>y-ui?r-y+ui:0),M=4*(this._cubeSize-T);fr(t,w,M,3*T,2*T),o.setRenderTarget(t),o.render(u,us)}}function fd(i){const e=[],t=[],n=[];let r=i;const a=i-ui+1+lo.length;for(let l=0;l<a;l++){const s=Math.pow(2,r);t.push(s);let o=1/s;l>i-ui?o=lo[l-i+ui-1]:l===0&&(o=0),n.push(o);const f=1/(s-2),c=-f,u=1+f,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,_=6,g=3,h=2,m=1,x=new Float32Array(g*_*p),y=new Float32Array(h*_*p),T=new Float32Array(m*_*p);for(let M=0;M<p;M++){const S=M%3*2/3-1,P=M>2?0:-1,O=[S,P,0,S+2/3,P,0,S+2/3,P+1,0,S,P,0,S+2/3,P+1,0,S,P+1,0];x.set(O,g*_*M),y.set(d,h*_*M);const b=[M,M,M,M,M,M];T.set(b,m*_*M)}const w=new gn;w.setAttribute("position",new Kt(x,g)),w.setAttribute("uv",new Kt(y,h)),w.setAttribute("faceIndex",new Kt(T,m)),e.push(w),r>ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ho(i,e,t){const n=new _n(i,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function hd(i,e,t){const n=new Float32Array(zn),r=new se(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function po(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function mo(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Gs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dd(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const o=s.mapping,f=o===Ss||o===Es,c=o===gi||o===vi;if(f||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let u=e.get(s);return t===null&&(t=new fo(i)),u=f?t.fromEquirectangular(s,u):t.fromCubemap(s,u),e.set(s,u),u.texture}else{if(e.has(s))return e.get(s).texture;{const u=s.image;if(f&&u&&u.height>0||c&&u&&r(u)){t===null&&(t=new fo(i));const d=f?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let o=0;const f=6;for(let c=0;c<f;c++)s[c]!==void 0&&o++;return o===f}function a(s){const o=s.target;o.removeEventListener("dispose",a);const f=e.get(o);f!==void 0&&(e.delete(o),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function pd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function md(i,e,t,n){const r={},a=new WeakMap;function l(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let h=0,m=g.length;h<m;h++)e.remove(g[h])}d.removeEventListener("dispose",l),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(u,d){return r[d.id]===!0||(d.addEventListener("dispose",l),r[d.id]=!0,t.memory.geometries++),d}function o(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let h=0,m=g.length;h<m;h++)e.update(g[h],i.ARRAY_BUFFER)}}function f(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,T=x.length;y<T;y+=3){const w=x[y+0],M=x[y+1],S=x[y+2];d.push(w,M,M,S,S,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,T=x.length/3-1;y<T;y+=3){const w=y+0,M=y+1,S=y+2;d.push(w,M,M,S,S,w)}}else return;const h=new(ml(d)?Sl:Ml)(d,1);h.version=g;const m=a.get(u);m&&e.remove(m),a.set(u,h)}function c(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&f(u)}else f(u);return a.get(u)}return{get:s,update:o,getWireframeAttribute:c}}function _d(i,e,t,n){const r=n.isWebGL2;let a;function l(p){a=p}let s,o;function f(p){s=p.type,o=p.bytesPerElement}function c(p,_){i.drawElements(a,_,s,p*o),t.update(_,a,1)}function u(p,_,g){if(g===0)return;let h,m;if(r)h=i,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](a,_,s,p*o,g),t.update(_,a,g)}function d(p,_,g){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<g;m++)this.render(p[m]/o,_[m]);else{h.multiDrawElementsWEBGL(a,_,0,s,p,0,g);let m=0;for(let x=0;x<g;x++)m+=_[x];t.update(m,a,1)}}this.setMode=l,this.setIndex=f,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function gd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,s){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vd(i,e){return i[0]-e[0]}function xd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function yd(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new bt,s=[];for(let f=0;f<8;f++)s[f]=[f,0];function o(f,c,u){const d=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let h=a.get(c);if(h===void 0||h.count!==g){let G=function(){K.dispose(),a.delete(c),c.removeEventListener("dispose",G)};var p=G;h!==void 0&&h.texture.dispose();const y=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let O=0;y===!0&&(O=1),T===!0&&(O=2),w===!0&&(O=3);let b=c.attributes.position.count*O,D=1;b>e.maxTextureSize&&(D=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*D*4*g),K=new vl(F,b,D,g);K.type=hn,K.needsUpdate=!0;const N=O*4;for(let W=0;W<g;W++){const te=M[W],j=S[W],re=P[W],le=b*D*4*W;for(let ue=0;ue<te.count;ue++){const X=ue*N;y===!0&&(l.fromBufferAttribute(te,ue),F[le+X+0]=l.x,F[le+X+1]=l.y,F[le+X+2]=l.z,F[le+X+3]=0),T===!0&&(l.fromBufferAttribute(j,ue),F[le+X+4]=l.x,F[le+X+5]=l.y,F[le+X+6]=l.z,F[le+X+7]=0),w===!0&&(l.fromBufferAttribute(re,ue),F[le+X+8]=l.x,F[le+X+9]=l.y,F[le+X+10]=l.z,F[le+X+11]=re.itemSize===4?l.w:1)}}h={count:g,texture:K,size:new tt(b,D)},a.set(c,h),c.addEventListener("dispose",G)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const x=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const _=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[c.id]=g}for(let T=0;T<_;T++){const w=g[T];w[0]=T,w[1]=d[T]}g.sort(xd);for(let T=0;T<8;T++)T<_&&g[T][1]?(s[T][0]=g[T][0],s[T][1]=g[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(vd);const h=c.morphAttributes.position,m=c.morphAttributes.normal;let x=0;for(let T=0;T<8;T++){const w=s[T],M=w[0],S=w[1];M!==Number.MAX_SAFE_INTEGER&&S?(h&&c.getAttribute("morphTarget"+T)!==h[M]&&c.setAttribute("morphTarget"+T,h[M]),m&&c.getAttribute("morphNormal"+T)!==m[M]&&c.setAttribute("morphNormal"+T,m[M]),r[T]=S,x+=S):(h&&c.hasAttribute("morphTarget"+T)===!0&&c.deleteAttribute("morphTarget"+T),m&&c.hasAttribute("morphNormal"+T)===!0&&c.deleteAttribute("morphNormal"+T),r[T]=0)}const y=c.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:o}}function bd(i,e,t,n){let r=new WeakMap;function a(o){const f=n.render.frame,c=o.geometry,u=e.get(o,c);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),r.get(o)!==f&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,f))),o.isSkinnedMesh){const d=o.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function l(){r=new WeakMap}function s(o){const f=o.target;f.removeEventListener("dispose",s),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class Cl extends Rt{constructor(e,t,n,r,a,l,s,o,f,c){if(c=c!==void 0?c:Hn,c!==Hn&&c!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Hn&&(n=wn),n===void 0&&c===xi&&(n=Gn),super(null,r,a,l,s,o,c,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Mt,this.minFilter=o!==void 0?o:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rl=new Rt,Pl=new Cl(1,1);Pl.compareFunction=pl;const Ll=new vl,Dl=new ru,Ul=new Tl,_o=[],go=[],vo=new Float32Array(16),xo=new Float32Array(9),yo=new Float32Array(4);function Ei(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=_o[r];if(a===void 0&&(a=new Float32Array(r),_o[r]=a),e!==0){n.toArray(a,0);for(let l=1,s=0;l!==e;++l)s+=t,i[l].toArray(a,s)}return a}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dr(i,e){let t=go[e];t===void 0&&(t=new Int32Array(e),go[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Md(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Ed(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Td(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;yo.set(n),i.uniformMatrix2fv(this.addr,!1,yo),gt(t,n)}}function Ad(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;xo.set(n),i.uniformMatrix3fv(this.addr,!1,xo),gt(t,n)}}function Cd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;vo.set(n),i.uniformMatrix4fv(this.addr,!1,vo),gt(t,n)}}function Rd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Ld(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Ud(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Id(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Fd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Pl:Rl;t.setTexture2D(e||a,r)}function Bd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dl,r)}function zd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ul,r)}function kd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ll,r)}function Gd(i){switch(i){case 5126:return Md;case 35664:return Sd;case 35665:return Ed;case 35666:return wd;case 35674:return Td;case 35675:return Ad;case 35676:return Cd;case 5124:case 35670:return Rd;case 35667:case 35671:return Pd;case 35668:case 35672:return Ld;case 35669:case 35673:return Dd;case 5125:return Ud;case 36294:return Id;case 36295:return Od;case 36296:return Nd;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Bd;case 35680:case 36300:case 36308:case 36293:return zd;case 36289:case 36303:case 36311:case 36292:return kd}}function Hd(i,e){i.uniform1fv(this.addr,e)}function Vd(i,e){const t=Ei(e,this.size,2);i.uniform2fv(this.addr,t)}function Wd(i,e){const t=Ei(e,this.size,3);i.uniform3fv(this.addr,t)}function Xd(i,e){const t=Ei(e,this.size,4);i.uniform4fv(this.addr,t)}function jd(i,e){const t=Ei(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Yd(i,e){const t=Ei(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zd(i,e){const t=Ei(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qd(i,e){i.uniform1iv(this.addr,e)}function Kd(i,e){i.uniform2iv(this.addr,e)}function $d(i,e){i.uniform3iv(this.addr,e)}function Jd(i,e){i.uniform4iv(this.addr,e)}function Qd(i,e){i.uniform1uiv(this.addr,e)}function ep(i,e){i.uniform2uiv(this.addr,e)}function tp(i,e){i.uniform3uiv(this.addr,e)}function np(i,e){i.uniform4uiv(this.addr,e)}function ip(i,e,t){const n=this.cache,r=e.length,a=Dr(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Rl,a[l])}function rp(i,e,t){const n=this.cache,r=e.length,a=Dr(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Dl,a[l])}function sp(i,e,t){const n=this.cache,r=e.length,a=Dr(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Ul,a[l])}function ap(i,e,t){const n=this.cache,r=e.length,a=Dr(t,r);_t(n,a)||(i.uniform1iv(this.addr,a),gt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Ll,a[l])}function op(i){switch(i){case 5126:return Hd;case 35664:return Vd;case 35665:return Wd;case 35666:return Xd;case 35674:return jd;case 35675:return Yd;case 35676:return Zd;case 5124:case 35670:return qd;case 35667:case 35671:return Kd;case 35668:case 35672:return $d;case 35669:case 35673:return Jd;case 5125:return Qd;case 36294:return ep;case 36295:return tp;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return ap}}class lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gd(t.type)}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=op(t.type)}}class up{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function bo(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,r=n.length;for(ps.lastIndex=0;;){const a=ps.exec(n),l=ps.lastIndex;let s=a[1];const o=a[2]==="]",f=a[3];if(o&&(s=s|0),f===void 0||f==="["&&l+2===r){bo(t,f===void 0?new lp(s,i,e):new cp(s,i,e));break}else{let u=t.map[s];u===void 0&&(u=new up(s),bo(t,u)),t=u}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);fp(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const s=t[a],o=n[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Mo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hp=37297;let dp=0;function pp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const s=l+1;n.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return n.join(`
`)}function mp(i){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i);let n;switch(e===t?n="":e===Er&&t===Sr?n="LinearDisplayP3ToLinearSRGB":e===Sr&&t===Er&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case Rr:return[n,"LinearTransferOETF"];case yt:case Fs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function So(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pp(i.getShaderSource(e),l)}else return r}function _p(i,e){const t=mp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gp(i,e){let t;switch(e){case Qo:t="Linear";break;case el:t="Reinhard";break;case tl:t="OptimizedCineon";break;case Os:t="ACESFilmic";break;case nl:t="AgX";break;case Ic:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join(`
`)}function xp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fi).join(`
`)}function yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:s}}return t}function fi(i){return i!==""}function Eo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rs(i){return i.replace(Mp,Ep)}const Sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ep(i,e){let t=Ke[e];if(t===void 0){const n=Sp.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Rs(t)}const wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(i){return i.replace(wp,Tp)}function Tp(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Ao(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ap(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case vi:e="ENVMAP_TYPE_CUBE";break;case Cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Pp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Lp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Dp(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,s=t.fragmentShader;const o=Ap(t),f=Cp(t),c=Rp(t),u=Pp(t),d=Lp(t),p=t.isWebGL2?"":vp(t),_=xp(t),g=yp(a),h=r.createProgram();let m,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fi).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fi).join(`
`),x.length>0&&(x+=`
`)):(m=[Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fi).join(`
`),x=[p,Ao(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Tn?gp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,_p("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fi).join(`
`)),l=Rs(l),l=Eo(l,t),l=wo(l,t),s=Rs(s),s=Eo(s,t),s=wo(s,t),l=To(l),s=To(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=y+m+l,w=y+x+s,M=Mo(r,r.VERTEX_SHADER,T),S=Mo(r,r.FRAGMENT_SHADER,w);r.attachShader(h,M),r.attachShader(h,S),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function P(F){if(i.debug.checkShaderErrors){const K=r.getProgramInfoLog(h).trim(),N=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(S).trim();let W=!0,te=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,h,M,S);else{const j=So(r,M,"vertex"),re=So(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+K+`
`+j+`
`+re)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(N===""||G==="")&&(te=!1);te&&(F.diagnostics={runnable:W,programLog:K,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:x}})}r.deleteShader(M),r.deleteShader(S),O=new gr(r,h),b=bp(r,h)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(h,hp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dp++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=S,this}let Up=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Op(e),t.set(e,n)),n}}class Op{constructor(e){this.id=Up++,this.code=e,this.usedTimes=0}}function Np(i,e,t,n,r,a,l){const s=new xl,o=new Ip,f=new Set,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b){return f.add(b),b===0?"uv":`uv${b}`}function m(b,D,F,K,N){const G=K.fog,W=N.geometry,te=b.isMeshStandardMaterial?K.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||te),re=j&&j.mapping===Cr?j.image.height:null,le=g[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,X=ue!==void 0?ue.length:0;let he=0;W.morphAttributes.position!==void 0&&(he=1),W.morphAttributes.normal!==void 0&&(he=2),W.morphAttributes.color!==void 0&&(he=3);let H,ce,xe,we;if(le){const $=Jt[le];H=$.vertexShader,ce=$.fragmentShader}else H=b.vertexShader,ce=b.fragmentShader,o.update(b),xe=o.getVertexShaderID(b),we=o.getFragmentShaderID(b);const ve=i.getRenderTarget(),Se=N.isInstancedMesh===!0,ke=N.isBatchedMesh===!0,Ae=!!b.map,V=!!b.matcap,He=!!j,Pe=!!b.aoMap,Oe=!!b.lightMap,Le=!!b.bumpMap,Be=!!b.normalMap,Ne=!!b.displacementMap,I=!!b.emissiveMap,L=!!b.metalnessMap,J=!!b.roughnessMap,fe=b.anisotropy>0,ae=b.clearcoat>0,_e=b.iridescence>0,De=b.sheen>0,ye=b.transmission>0,Ee=fe&&!!b.anisotropyMap,Fe=ae&&!!b.clearcoatMap,Ge=ae&&!!b.clearcoatNormalMap,de=ae&&!!b.clearcoatRoughnessMap,Xe=_e&&!!b.iridescenceMap,Ve=_e&&!!b.iridescenceThicknessMap,Ie=De&&!!b.sheenColorMap,Ue=De&&!!b.sheenRoughnessMap,me=!!b.specularMap,A=!!b.specularColorMap,ee=!!b.specularIntensityMap,oe=ye&&!!b.transmissionMap,ge=ye&&!!b.thicknessMap,z=!!b.gradientMap,C=!!b.alphaMap,E=b.alphaTest>0,k=!!b.alphaHash,pe=!!b.extensions;let v=Tn;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(v=i.toneMapping);const q={isWebGL2:u,shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:H,fragmentShader:ce,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:ke,instancing:Se,instancingColor:Se&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:mn,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:V,envMap:He,envMapMode:He&&j.mapping,envMapCubeUVHeight:re,aoMap:Pe,lightMap:Oe,bumpMap:Le,normalMap:Be,displacementMap:p&&Ne,emissiveMap:I,normalMapObjectSpace:Be&&b.normalMapType===Wc,normalMapTangentSpace:Be&&b.normalMapType===dl,metalnessMap:L,roughnessMap:J,anisotropy:fe,anisotropyMap:Ee,clearcoat:ae,clearcoatMap:Fe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:de,iridescence:_e,iridescenceMap:Xe,iridescenceThicknessMap:Ve,sheen:De,sheenColorMap:Ie,sheenRoughnessMap:Ue,specularMap:me,specularColorMap:A,specularIntensityMap:ee,transmission:ye,transmissionMap:oe,thicknessMap:ge,gradientMap:z,opaque:b.transparent===!1&&b.blending===hi&&b.alphaToCoverage===!1,alphaMap:C,alphaTest:E,alphaHash:k,combine:b.combine,mapUv:Ae&&h(b.map.channel),aoMapUv:Pe&&h(b.aoMap.channel),lightMapUv:Oe&&h(b.lightMap.channel),bumpMapUv:Le&&h(b.bumpMap.channel),normalMapUv:Be&&h(b.normalMap.channel),displacementMapUv:Ne&&h(b.displacementMap.channel),emissiveMapUv:I&&h(b.emissiveMap.channel),metalnessMapUv:L&&h(b.metalnessMap.channel),roughnessMapUv:J&&h(b.roughnessMap.channel),anisotropyMapUv:Ee&&h(b.anisotropyMap.channel),clearcoatMapUv:Fe&&h(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&h(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&h(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&h(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&h(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&h(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&h(b.sheenRoughnessMap.channel),specularMapUv:me&&h(b.specularMap.channel),specularColorMapUv:A&&h(b.specularColorMap.channel),specularIntensityMapUv:ee&&h(b.specularIntensityMap.channel),transmissionMapUv:oe&&h(b.transmissionMap.channel),thicknessMapUv:ge&&h(b.thicknessMap.channel),alphaMapUv:C&&h(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Be||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Ae||C),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:v,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pe&&b.extensions.derivatives===!0,extensionFragDepth:pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return q.vertexUv1s=f.has(1),q.vertexUv2s=f.has(2),q.vertexUv3s=f.has(3),f.clear(),q}function x(b){const D=[];if(b.shaderID?D.push(b.shaderID):(D.push(b.customVertexShaderID),D.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)D.push(F),D.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(y(D,b),T(D,b),D.push(i.outputColorSpace)),D.push(b.customProgramCacheKey),D.join()}function y(b,D){b.push(D.precision),b.push(D.outputColorSpace),b.push(D.envMapMode),b.push(D.envMapCubeUVHeight),b.push(D.mapUv),b.push(D.alphaMapUv),b.push(D.lightMapUv),b.push(D.aoMapUv),b.push(D.bumpMapUv),b.push(D.normalMapUv),b.push(D.displacementMapUv),b.push(D.emissiveMapUv),b.push(D.metalnessMapUv),b.push(D.roughnessMapUv),b.push(D.anisotropyMapUv),b.push(D.clearcoatMapUv),b.push(D.clearcoatNormalMapUv),b.push(D.clearcoatRoughnessMapUv),b.push(D.iridescenceMapUv),b.push(D.iridescenceThicknessMapUv),b.push(D.sheenColorMapUv),b.push(D.sheenRoughnessMapUv),b.push(D.specularMapUv),b.push(D.specularColorMapUv),b.push(D.specularIntensityMapUv),b.push(D.transmissionMapUv),b.push(D.thicknessMapUv),b.push(D.combine),b.push(D.fogExp2),b.push(D.sizeAttenuation),b.push(D.morphTargetsCount),b.push(D.morphAttributeCount),b.push(D.numDirLights),b.push(D.numPointLights),b.push(D.numSpotLights),b.push(D.numSpotLightMaps),b.push(D.numHemiLights),b.push(D.numRectAreaLights),b.push(D.numDirLightShadows),b.push(D.numPointLightShadows),b.push(D.numSpotLightShadows),b.push(D.numSpotLightShadowsWithMaps),b.push(D.numLightProbes),b.push(D.shadowMapType),b.push(D.toneMapping),b.push(D.numClippingPlanes),b.push(D.numClipIntersection),b.push(D.depthPacking)}function T(b,D){s.disableAll(),D.isWebGL2&&s.enable(0),D.supportsVertexTextures&&s.enable(1),D.instancing&&s.enable(2),D.instancingColor&&s.enable(3),D.matcap&&s.enable(4),D.envMap&&s.enable(5),D.normalMapObjectSpace&&s.enable(6),D.normalMapTangentSpace&&s.enable(7),D.clearcoat&&s.enable(8),D.iridescence&&s.enable(9),D.alphaTest&&s.enable(10),D.vertexColors&&s.enable(11),D.vertexAlphas&&s.enable(12),D.vertexUv1s&&s.enable(13),D.vertexUv2s&&s.enable(14),D.vertexUv3s&&s.enable(15),D.vertexTangents&&s.enable(16),D.anisotropy&&s.enable(17),D.alphaHash&&s.enable(18),D.batching&&s.enable(19),b.push(s.mask),s.disableAll(),D.fog&&s.enable(0),D.useFog&&s.enable(1),D.flatShading&&s.enable(2),D.logarithmicDepthBuffer&&s.enable(3),D.skinning&&s.enable(4),D.morphTargets&&s.enable(5),D.morphNormals&&s.enable(6),D.morphColors&&s.enable(7),D.premultipliedAlpha&&s.enable(8),D.shadowMapEnabled&&s.enable(9),D.useLegacyLights&&s.enable(10),D.doubleSided&&s.enable(11),D.flipSided&&s.enable(12),D.useDepthPacking&&s.enable(13),D.dithering&&s.enable(14),D.transmission&&s.enable(15),D.sheen&&s.enable(16),D.opaque&&s.enable(17),D.pointsUvs&&s.enable(18),D.decodeVideoTexture&&s.enable(19),D.alphaToCoverage&&s.enable(20),b.push(s.mask)}function w(b){const D=g[b.type];let F;if(D){const K=Jt[D];F=Lr.clone(K.uniforms)}else F=b.uniforms;return F}function M(b,D){let F;for(let K=0,N=c.length;K<N;K++){const G=c[K];if(G.cacheKey===D){F=G,++F.usedTimes;break}}return F===void 0&&(F=new Dp(i,D,b,a),c.push(F)),F}function S(b){if(--b.usedTimes===0){const D=c.indexOf(b);c[D]=c[c.length-1],c.pop(),b.destroy()}}function P(b){o.remove(b)}function O(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:M,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:O}}function Fp(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,s){i.get(a)[l]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Co(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ro(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(u,d,p,_,g,h){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:h},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=h),e++,m}function s(u,d,p,_,g,h){const m=l(u,d,p,_,g,h);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):t.push(m)}function o(u,d,p,_,g,h){const m=l(u,d,p,_,g,h);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function f(u,d){t.length>1&&t.sort(u||Bp),n.length>1&&n.sort(d||Co),r.length>1&&r.sort(d||Co)}function c(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:o,finish:c,sort:f}}function zp(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new Ro,i.set(n,[l])):r>=a.length?(l=new Ro,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function kp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new it};break;case"SpotLight":t={position:new se,direction:new se,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function Gp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hp=0;function Vp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Wp(i,e){const t=new kp,n=Gp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new se);const a=new se,l=new mt,s=new mt;function o(c,u){let d=0,p=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,h=0,m=0,x=0,y=0,T=0,w=0,M=0,S=0,P=0,O=0;c.sort(Vp);const b=u===!0?Math.PI:1;for(let F=0,K=c.length;F<K;F++){const N=c[F],G=N.color,W=N.intensity,te=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=G.r*W*b,p+=G.g*W*b,_+=G.b*W*b;else if(N.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(N.sh.coefficients[re],W);O++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const le=N.shadow,ue=n.get(N);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,r.directionalShadow[g]=ue,r.directionalShadowMap[g]=j,r.directionalShadowMatrix[g]=N.shadow.matrix,T++}r.directional[g]=re,g++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(G).multiplyScalar(W*b),re.distance=te,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,r.spot[m]=re;const le=N.shadow;if(N.map&&(r.spotLightMap[S]=N.map,S++,le.updateMatrices(N),N.castShadow&&P++),r.spotLightMatrix[m]=le.matrix,N.castShadow){const ue=n.get(N);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,r.spotShadow[m]=ue,r.spotShadowMap[m]=j,M++}m++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(G).multiplyScalar(W),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=re,x++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*b),re.distance=N.distance,re.decay=N.decay,N.castShadow){const le=N.shadow,ue=n.get(N);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,r.pointShadow[h]=ue,r.pointShadowMap[h]=j,r.pointShadowMatrix[h]=N.shadow.matrix,w++}r.point[h]=re,h++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(W*b),re.groundColor.copy(N.groundColor).multiplyScalar(W*b),r.hemi[y]=re,y++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const D=r.hash;(D.directionalLength!==g||D.pointLength!==h||D.spotLength!==m||D.rectAreaLength!==x||D.hemiLength!==y||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==M||D.numSpotMaps!==S||D.numLightProbes!==O)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=x,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=M+S-P,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,D.directionalLength=g,D.pointLength=h,D.spotLength=m,D.rectAreaLength=x,D.hemiLength=y,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=M,D.numSpotMaps=S,D.numLightProbes=O,r.version=Hp++)}function f(c,u){let d=0,p=0,_=0,g=0,h=0;const m=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const T=c[x];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),d++}else if(T.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),s.identity(),l.copy(T.matrixWorld),l.premultiply(m),s.extractRotation(l),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:o,setupView:f,state:r}}function Po(i,e){const t=new Wp(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(u){n.push(u)}function s(u){r.push(u)}function o(u){t.setup(n,u)}function f(u){t.setupView(n,u)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:o,setupLightsView:f,pushLight:l,pushShadow:s}}function Xp(i,e){let t=new WeakMap;function n(a,l=0){const s=t.get(a);let o;return s===void 0?(o=new Po(i,e),t.set(a,[o])):l>=s.length?(o=new Po(i,e),s.push(o)):o=s[l],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class Il extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jp extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(i,e,t){let n=new zs;const r=new tt,a=new tt,l=new bt,s=new Il({depthPacking:hl}),o=new jp,f={},c=t.maxTextureSize,u={[Cn]:Ot,[Ot]:Cn,[fn]:fn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Yp,fragmentShader:Zp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let m=this.type;this.render=function(M,S,P){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const O=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(tn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const K=m!==cn&&this.type===cn,N=m===cn&&this.type!==cn;for(let G=0,W=M.length;G<W;G++){const te=M[G],j=te.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const re=j.getFrameExtents();if(r.multiply(re),a.copy(j.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/re.x),r.x=a.x*re.x,j.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/re.y),r.y=a.y*re.y,j.mapSize.y=a.y)),j.map===null||K===!0||N===!0){const ue=this.type!==cn?{minFilter:Mt,magFilter:Mt}:{};j.map!==null&&j.map.dispose(),j.map=new _n(r.x,r.y,ue),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const le=j.getViewportCount();for(let ue=0;ue<le;ue++){const X=j.getViewport(ue);l.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),F.viewport(l),j.updateMatrices(te,ue),n=j.getFrustum(),T(S,P,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===cn&&x(j,P),j.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(O,b,D)};function x(M,S){const P=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _n(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,P,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,P,p,g,null)}function y(M,S,P,O){let b=null;const D=P.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(D!==void 0)b=D;else if(b=P.isPointLight===!0?o:s,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=b.uuid,K=S.uuid;let N=f[F];N===void 0&&(N={},f[F]=N);let G=N[K];G===void 0&&(G=b.clone(),N[K]=G,S.addEventListener("dispose",w)),b=G}if(b.visible=S.visible,b.wireframe=S.wireframe,O===cn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=P}return b}function T(M,S,P,O,b){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===cn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,M.matrixWorld);const K=e.update(M),N=M.material;if(Array.isArray(N)){const G=K.groups;for(let W=0,te=G.length;W<te;W++){const j=G[W],re=N[j.materialIndex];if(re&&re.visible){const le=y(M,re,O,b);M.onBeforeShadow(i,M,S,P,K,le,j),i.renderBufferDirect(P,null,K,le,M,j),M.onAfterShadow(i,M,S,P,K,le,j)}}}else if(N.visible){const G=y(M,N,O,b);M.onBeforeShadow(i,M,S,P,K,G,null),i.renderBufferDirect(P,null,K,G,M,null),M.onAfterShadow(i,M,S,P,K,G,null)}}const F=M.children;for(let K=0,N=F.length;K<N;K++)T(F[K],S,P,O,b)}function w(M){M.target.removeEventListener("dispose",w);for(const P in f){const O=f[P],b=M.target.uuid;b in O&&(O[b].dispose(),delete O[b])}}}function Kp(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const E=new bt;let k=null;const pe=new bt(0,0,0,0);return{setMask:function(v){k!==v&&!C&&(i.colorMask(v,v,v,v),k=v)},setLocked:function(v){C=v},setClear:function(v,q,$,R,B){B===!0&&(v*=R,q*=R,$*=R),E.set(v,q,$,R),pe.equals(E)===!1&&(i.clearColor(v,q,$,R),pe.copy(E))},reset:function(){C=!1,k=null,pe.set(-1,0,0,0)}}}function a(){let C=!1,E=null,k=null,pe=null;return{setTest:function(v){v?Se(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(v){E!==v&&!C&&(i.depthMask(v),E=v)},setFunc:function(v){if(k!==v){switch(v){case wc:i.depthFunc(i.NEVER);break;case Tc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Cc:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Lc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=v}},setLocked:function(v){C=v},setClear:function(v){pe!==v&&(i.clearDepth(v),pe=v)},reset:function(){C=!1,E=null,k=null,pe=null}}}function l(){let C=!1,E=null,k=null,pe=null,v=null,q=null,$=null,R=null,B=null;return{setTest:function(Y){C||(Y?Se(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Y){E!==Y&&!C&&(i.stencilMask(Y),E=Y)},setFunc:function(Y,Te,be){(k!==Y||pe!==Te||v!==be)&&(i.stencilFunc(Y,Te,be),k=Y,pe=Te,v=be)},setOp:function(Y,Te,be){(q!==Y||$!==Te||R!==be)&&(i.stencilOp(Y,Te,be),q=Y,$=Te,R=be)},setLocked:function(Y){C=Y},setClear:function(Y){B!==Y&&(i.clearStencil(Y),B=Y)},reset:function(){C=!1,E=null,k=null,pe=null,v=null,q=null,$=null,R=null,B=null}}}const s=new r,o=new a,f=new l,c=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,g=[],h=null,m=!1,x=null,y=null,T=null,w=null,M=null,S=null,P=null,O=new it(0,0,0),b=0,D=!1,F=null,K=null,N=null,G=null,W=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,re=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=re>=1):le.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=re>=2);let ue=null,X={};const he=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),ce=new bt().fromArray(he),xe=new bt().fromArray(H);function we(C,E,k,pe){const v=new Uint8Array(4),q=i.createTexture();i.bindTexture(C,q),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<k;$++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(E,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,v):i.texImage2D(E+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,v);return q}const ve={};ve[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),o.setClear(1),f.setClear(0),Se(i.DEPTH_TEST),o.setFunc(yr),Ne(!1),I(la),Se(i.CULL_FACE),Le(tn);function Se(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function ke(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Ae(C,E){return p[C]!==E?(i.bindFramebuffer(C,E),p[C]=E,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=E),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=E)),!0):!1}function V(C,E){let k=g,pe=!1;if(C)if(k=_.get(E),k===void 0&&(k=[],_.set(E,k)),C.isWebGLMultipleRenderTargets){const v=C.texture;if(k.length!==v.length||k[0]!==i.COLOR_ATTACHMENT0){for(let q=0,$=v.length;q<$;q++)k[q]=i.COLOR_ATTACHMENT0+q;k.length=v.length,pe=!0}}else k[0]!==i.COLOR_ATTACHMENT0&&(k[0]=i.COLOR_ATTACHMENT0,pe=!0);else k[0]!==i.BACK&&(k[0]=i.BACK,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function He(C){return h!==C?(i.useProgram(C),h=C,!0):!1}const Pe={[Bn]:i.FUNC_ADD,[cc]:i.FUNC_SUBTRACT,[uc]:i.FUNC_REVERSE_SUBTRACT};if(n)Pe[ha]=i.MIN,Pe[da]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Pe[ha]=C.MIN_EXT,Pe[da]=C.MAX_EXT)}const Oe={[fc]:i.ZERO,[hc]:i.ONE,[dc]:i.SRC_COLOR,[bs]:i.SRC_ALPHA,[yc]:i.SRC_ALPHA_SATURATE,[vc]:i.DST_COLOR,[mc]:i.DST_ALPHA,[pc]:i.ONE_MINUS_SRC_COLOR,[Ms]:i.ONE_MINUS_SRC_ALPHA,[xc]:i.ONE_MINUS_DST_COLOR,[_c]:i.ONE_MINUS_DST_ALPHA,[bc]:i.CONSTANT_COLOR,[Mc]:i.ONE_MINUS_CONSTANT_COLOR,[Sc]:i.CONSTANT_ALPHA,[Ec]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(C,E,k,pe,v,q,$,R,B,Y){if(C===tn){m===!0&&(ke(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),C!==lc){if(C!==x||Y!==D){if((y!==Bn||M!==Bn)&&(i.blendEquation(i.FUNC_ADD),y=Bn,M=Bn),Y)switch(C){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,S=null,P=null,O.set(0,0,0),b=0,x=C,D=Y}return}v=v||E,q=q||k,$=$||pe,(E!==y||v!==M)&&(i.blendEquationSeparate(Pe[E],Pe[v]),y=E,M=v),(k!==T||pe!==w||q!==S||$!==P)&&(i.blendFuncSeparate(Oe[k],Oe[pe],Oe[q],Oe[$]),T=k,w=pe,S=q,P=$),(R.equals(O)===!1||B!==b)&&(i.blendColor(R.r,R.g,R.b,B),O.copy(R),b=B),x=C,D=!1}function Be(C,E){C.side===fn?ke(i.CULL_FACE):Se(i.CULL_FACE);let k=C.side===Ot;E&&(k=!k),Ne(k),C.blending===hi&&C.transparent===!1?Le(tn):Le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const pe=C.stencilWrite;f.setTest(pe),pe&&(f.setMask(C.stencilWriteMask),f.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),f.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),J(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function I(C){C!==ac?(Se(i.CULL_FACE),C!==K&&(C===la?i.cullFace(i.BACK):C===oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),K=C}function L(C){C!==N&&(j&&i.lineWidth(C),N=C)}function J(C,E,k){C?(Se(i.POLYGON_OFFSET_FILL),(G!==E||W!==k)&&(i.polygonOffset(E,k),G=E,W=k)):ke(i.POLYGON_OFFSET_FILL)}function fe(C){C?Se(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function ae(C){C===void 0&&(C=i.TEXTURE0+te-1),ue!==C&&(i.activeTexture(C),ue=C)}function _e(C,E,k){k===void 0&&(ue===null?k=i.TEXTURE0+te-1:k=ue);let pe=X[k];pe===void 0&&(pe={type:void 0,texture:void 0},X[k]=pe),(pe.type!==C||pe.texture!==E)&&(ue!==k&&(i.activeTexture(k),ue=k),i.bindTexture(C,E||ve[C]),pe.type=C,pe.texture=E)}function De(){const C=X[ue];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function A(C){ce.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function ee(C){xe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function oe(C,E){let k=u.get(E);k===void 0&&(k=new WeakMap,u.set(E,k));let pe=k.get(C);pe===void 0&&(pe=i.getUniformBlockIndex(E,C.name),k.set(C,pe))}function ge(C,E){const pe=u.get(E).get(C);c.get(E)!==pe&&(i.uniformBlockBinding(E,pe,C.__bindingPointIndex),c.set(E,pe))}function z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,X={},p={},_=new WeakMap,g=[],h=null,m=!1,x=null,y=null,T=null,w=null,M=null,S=null,P=null,O=new it(0,0,0),b=0,D=!1,F=null,K=null,N=null,G=null,W=null,ce.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),f.reset()}return{buffers:{color:s,depth:o,stencil:f},enable:Se,disable:ke,bindFramebuffer:Ae,drawBuffers:V,useProgram:He,setBlending:Le,setMaterial:Be,setFlipSided:Ne,setCullFace:I,setLineWidth:L,setPolygonOffset:J,setScissorTest:fe,activeTexture:ae,bindTexture:_e,unbindTexture:De,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:Ue,texImage3D:me,updateUBOMapping:oe,uniformBlockBinding:ge,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Fe,texSubImage3D:Ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Xe,scissor:A,viewport:ee,reset:z}}function $p(i,e,t,n,r,a,l){const s=r.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,L){return p?new OffscreenCanvas(I,L):Bi("canvas")}function g(I,L,J,fe){let ae=1;if((I.width>fe||I.height>fe)&&(ae=fe/Math.max(I.width,I.height)),ae<1||L===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const _e=L?Cs:Math.floor,De=_e(ae*I.width),ye=_e(ae*I.height);u===void 0&&(u=_(De,ye));const Ee=J?_(De,ye):u;return Ee.width=De,Ee.height=ye,Ee.getContext("2d").drawImage(I,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+De+"x"+ye+")."),Ee}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function h(I){return Va(I.width)&&Va(I.height)}function m(I){return s?!1:I.wrapS!==Zt||I.wrapT!==Zt||I.minFilter!==Mt&&I.minFilter!==Dt}function x(I,L){return I.generateMipmaps&&L&&I.minFilter!==Mt&&I.minFilter!==Dt}function y(I){i.generateMipmap(I)}function T(I,L,J,fe,ae=!1){if(s===!1)return L;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e=L;if(L===i.RED&&(J===i.FLOAT&&(_e=i.R32F),J===i.HALF_FLOAT&&(_e=i.R16F),J===i.UNSIGNED_BYTE&&(_e=i.R8)),L===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(_e=i.R8UI),J===i.UNSIGNED_SHORT&&(_e=i.R16UI),J===i.UNSIGNED_INT&&(_e=i.R32UI),J===i.BYTE&&(_e=i.R8I),J===i.SHORT&&(_e=i.R16I),J===i.INT&&(_e=i.R32I)),L===i.RG&&(J===i.FLOAT&&(_e=i.RG32F),J===i.HALF_FLOAT&&(_e=i.RG16F),J===i.UNSIGNED_BYTE&&(_e=i.RG8)),L===i.RGBA){const De=ae?Mr:st.getTransfer(fe);J===i.FLOAT&&(_e=i.RGBA32F),J===i.HALF_FLOAT&&(_e=i.RGBA16F),J===i.UNSIGNED_BYTE&&(_e=De===at?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function w(I,L,J){return x(I,J)===!0||I.isFramebufferTexture&&I.minFilter!==Mt&&I.minFilter!==Dt?Math.log2(Math.max(L.width,L.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?L.mipmaps.length:1}function M(I){return I===Mt||I===pa||I===Ci?i.NEAREST:i.LINEAR}function S(I){const L=I.target;L.removeEventListener("dispose",S),O(L),L.isVideoTexture&&c.delete(L)}function P(I){const L=I.target;L.removeEventListener("dispose",P),D(L)}function O(I){const L=n.get(I);if(L.__webglInit===void 0)return;const J=I.source,fe=d.get(J);if(fe){const ae=fe[L.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(I),Object.keys(fe).length===0&&d.delete(J)}n.remove(I)}function b(I){const L=n.get(I);i.deleteTexture(L.__webglTexture);const J=I.source,fe=d.get(J);delete fe[L.__cacheKey],l.memory.textures--}function D(I){const L=I.texture,J=n.get(I),fe=n.get(L);if(fe.__webglTexture!==void 0&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(J.__webglFramebuffer[ae]))for(let _e=0;_e<J.__webglFramebuffer[ae].length;_e++)i.deleteFramebuffer(J.__webglFramebuffer[ae][_e]);else i.deleteFramebuffer(J.__webglFramebuffer[ae]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[ae])}else{if(Array.isArray(J.__webglFramebuffer))for(let ae=0;ae<J.__webglFramebuffer.length;ae++)i.deleteFramebuffer(J.__webglFramebuffer[ae]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let ae=0;ae<J.__webglColorRenderbuffer.length;ae++)J.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[ae]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let ae=0,_e=L.length;ae<_e;ae++){const De=n.get(L[ae]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),l.memory.textures--),n.remove(L[ae])}n.remove(L),n.remove(I)}let F=0;function K(){F=0}function N(){const I=F;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function G(I){const L=[];return L.push(I.wrapS),L.push(I.wrapT),L.push(I.wrapR||0),L.push(I.magFilter),L.push(I.minFilter),L.push(I.anisotropy),L.push(I.internalFormat),L.push(I.format),L.push(I.type),L.push(I.generateMipmaps),L.push(I.premultiplyAlpha),L.push(I.flipY),L.push(I.unpackAlignment),L.push(I.colorSpace),L.join()}function W(I,L){const J=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(J,I,L);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+L)}function te(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){ce(J,I,L);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+L)}function j(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){ce(J,I,L);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+L)}function re(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){xe(J,I,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+L)}const le={[br]:i.REPEAT,[Zt]:i.CLAMP_TO_EDGE,[ws]:i.MIRRORED_REPEAT},ue={[Mt]:i.NEAREST,[pa]:i.NEAREST_MIPMAP_NEAREST,[Ci]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},X={[Xc]:i.NEVER,[$c]:i.ALWAYS,[jc]:i.LESS,[pl]:i.LEQUAL,[Yc]:i.EQUAL,[Kc]:i.GEQUAL,[Zc]:i.GREATER,[qc]:i.NOTEQUAL};function he(I,L,J){if(L.type===hn&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Dt||L.magFilter===zr||L.magFilter===Ci||L.magFilter===kn||L.minFilter===Dt||L.minFilter===zr||L.minFilter===Ci||L.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),J?(i.texParameteri(I,i.TEXTURE_WRAP_S,le[L.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,le[L.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,le[L.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ue[L.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ue[L.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==Zt||L.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,M(L.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,M(L.minFilter)),L.minFilter!==Mt&&L.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,X[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Mt||L.minFilter!==Ci&&L.minFilter!==kn||L.type===hn&&e.has("OES_texture_float_linear")===!1||s===!1&&L.type===Wn&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(I,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function H(I,L){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,L.addEventListener("dispose",S));const fe=L.source;let ae=d.get(fe);ae===void 0&&(ae={},d.set(fe,ae));const _e=G(L);if(_e!==I.__cacheKey){ae[_e]===void 0&&(ae[_e]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),ae[_e].usedTimes++;const De=ae[I.__cacheKey];De!==void 0&&(ae[I.__cacheKey].usedTimes--,De.usedTimes===0&&b(L)),I.__cacheKey=_e,I.__webglTexture=ae[_e].texture}return J}function ce(I,L,J){let fe=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(fe=i.TEXTURE_3D);const ae=H(I,L),_e=L.source;t.bindTexture(fe,I.__webglTexture,i.TEXTURE0+J);const De=n.get(_e);if(_e.version!==De.__version||ae===!0){t.activeTexture(i.TEXTURE0+J);const ye=st.getPrimaries(st.workingColorSpace),Ee=L.colorSpace===Vt?null:st.getPrimaries(L.colorSpace),Fe=L.colorSpace===Vt||ye===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ge=m(L)&&h(L.image)===!1;let de=g(L.image,Ge,!1,r.maxTextureSize);de=Ne(L,de);const Xe=h(de)||s,Ve=a.convert(L.format,L.colorSpace);let Ie=a.convert(L.type),Ue=T(L.internalFormat,Ve,Ie,L.colorSpace,L.isVideoTexture);he(fe,L,Xe);let me;const A=L.mipmaps,ee=s&&L.isVideoTexture!==!0&&Ue!==ul,oe=De.__version===void 0||ae===!0,ge=_e.dataReady,z=w(L,de,Xe);if(L.isDepthTexture)Ue=i.DEPTH_COMPONENT,s?L.type===hn?Ue=i.DEPTH_COMPONENT32F:L.type===wn?Ue=i.DEPTH_COMPONENT24:L.type===Gn?Ue=i.DEPTH24_STENCIL8:Ue=i.DEPTH_COMPONENT16:L.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Hn&&Ue===i.DEPTH_COMPONENT&&L.type!==Ns&&L.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=wn,Ie=a.convert(L.type)),L.format===xi&&Ue===i.DEPTH_COMPONENT&&(Ue=i.DEPTH_STENCIL,L.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Gn,Ie=a.convert(L.type))),oe&&(ee?t.texStorage2D(i.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,null));else if(L.isDataTexture)if(A.length>0&&Xe){ee&&oe&&t.texStorage2D(i.TEXTURE_2D,z,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],ee?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,Ve,Ie,me.data);L.generateMipmaps=!1}else ee?(oe&&t.texStorage2D(i.TEXTURE_2D,z,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ve,Ie,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,de.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){ee&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Ue,A[0].width,A[0].height,de.depth);for(let C=0,E=A.length;C<E;C++)me=A[C],L.format!==qt?Ve!==null?ee?ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,me.width,me.height,de.depth,Ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,Ue,me.width,me.height,de.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,me.width,me.height,de.depth,Ve,Ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,C,Ue,me.width,me.height,de.depth,0,Ve,Ie,me.data)}else{ee&&oe&&t.texStorage2D(i.TEXTURE_2D,z,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],L.format!==qt?Ve!==null?ee?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,Ve,Ie,me.data)}else if(L.isDataArrayTexture)ee?(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,z,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(L.isData3DTexture)ee?(oe&&t.texStorage3D(i.TEXTURE_3D,z,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(L.isFramebufferTexture){if(oe)if(ee)t.texStorage2D(i.TEXTURE_2D,z,Ue,de.width,de.height);else{let C=de.width,E=de.height;for(let k=0;k<z;k++)t.texImage2D(i.TEXTURE_2D,k,Ue,C,E,0,Ve,Ie,null),C>>=1,E>>=1}}else if(A.length>0&&Xe){ee&&oe&&t.texStorage2D(i.TEXTURE_2D,z,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],ee?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Ve,Ie,me):t.texImage2D(i.TEXTURE_2D,C,Ue,Ve,Ie,me);L.generateMipmaps=!1}else ee?(oe&&t.texStorage2D(i.TEXTURE_2D,z,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Ie,de)):t.texImage2D(i.TEXTURE_2D,0,Ue,Ve,Ie,de);x(L,Xe)&&y(fe),De.__version=_e.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function xe(I,L,J){if(L.image.length!==6)return;const fe=H(I,L),ae=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const _e=n.get(ae);if(ae.version!==_e.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);const De=st.getPrimaries(st.workingColorSpace),ye=L.colorSpace===Vt?null:st.getPrimaries(L.colorSpace),Ee=L.colorSpace===Vt||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=L.isCompressedTexture||L.image[0].isCompressedTexture,Ge=L.image[0]&&L.image[0].isDataTexture,de=[];for(let C=0;C<6;C++)!Fe&&!Ge?de[C]=g(L.image[C],!1,!0,r.maxCubemapSize):de[C]=Ge?L.image[C].image:L.image[C],de[C]=Ne(L,de[C]);const Xe=de[0],Ve=h(Xe)||s,Ie=a.convert(L.format,L.colorSpace),Ue=a.convert(L.type),me=T(L.internalFormat,Ie,Ue,L.colorSpace),A=s&&L.isVideoTexture!==!0,ee=_e.__version===void 0||fe===!0,oe=ae.dataReady;let ge=w(L,Xe,Ve);he(i.TEXTURE_CUBE_MAP,L,Ve);let z;if(Fe){A&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,Xe.width,Xe.height);for(let C=0;C<6;C++){z=de[C].mipmaps;for(let E=0;E<z.length;E++){const k=z[E];L.format!==qt?Ie!==null?A?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,0,0,k.width,k.height,Ie,k.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,me,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,0,0,k.width,k.height,Ie,Ue,k.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,me,k.width,k.height,0,Ie,Ue,k.data)}}}else{z=L.mipmaps,A&&ee&&(z.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,de[0].width,de[0].height));for(let C=0;C<6;C++)if(Ge){A?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,de[C].width,de[C].height,Ie,Ue,de[C].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,me,de[C].width,de[C].height,0,Ie,Ue,de[C].data);for(let E=0;E<z.length;E++){const pe=z[E].image[C].image;A?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,0,0,pe.width,pe.height,Ie,Ue,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,me,pe.width,pe.height,0,Ie,Ue,pe.data)}}else{A?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ie,Ue,de[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,me,Ie,Ue,de[C]);for(let E=0;E<z.length;E++){const k=z[E];A?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,0,0,Ie,Ue,k.image[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,me,Ie,Ue,k.image[C])}}}x(L,Ve)&&y(i.TEXTURE_CUBE_MAP),_e.__version=ae.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function we(I,L,J,fe,ae,_e){const De=a.convert(J.format,J.colorSpace),ye=a.convert(J.type),Ee=T(J.internalFormat,De,ye,J.colorSpace);if(!n.get(L).__hasExternalTextures){const Ge=Math.max(1,L.width>>_e),de=Math.max(1,L.height>>_e);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,_e,Ee,Ge,de,L.depth,0,De,ye,null):t.texImage2D(ae,_e,Ee,Ge,de,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,ae,n.get(J).__webglTexture,0,Oe(L)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,ae,n.get(J).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(I,L,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),L.depthBuffer&&!L.stencilBuffer){let fe=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Le(L)){const ae=L.depthTexture;ae&&ae.isDepthTexture&&(ae.type===hn?fe=i.DEPTH_COMPONENT32F:ae.type===wn&&(fe=i.DEPTH_COMPONENT24));const _e=Oe(L);Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,fe,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,fe,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(L.depthBuffer&&L.stencilBuffer){const fe=Oe(L);J&&Le(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,L.width,L.height):Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const fe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ae=0;ae<fe.length;ae++){const _e=fe[ae],De=a.convert(_e.format,_e.colorSpace),ye=a.convert(_e.type),Ee=T(_e.internalFormat,De,ye,_e.colorSpace),Fe=Oe(L);J&&Le(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ee,L.width,L.height):Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ee,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(I,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),W(L.depthTexture,0);const fe=n.get(L.depthTexture).__webglTexture,ae=Oe(L);if(L.depthTexture.format===Hn)Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(L.depthTexture.format===xi)Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ke(I){const L=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!L.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Se(L.__webglFramebuffer,I)}else if(J){L.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[fe]),L.__webglDepthbuffer[fe]=i.createRenderbuffer(),ve(L.__webglDepthbuffer[fe],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),ve(L.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,L,J){const fe=n.get(I);L!==void 0&&we(fe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ke(I)}function V(I){const L=I.texture,J=n.get(I),fe=n.get(L);I.addEventListener("dispose",P),I.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=L.version,l.memory.textures++);const ae=I.isWebGLCubeRenderTarget===!0,_e=I.isWebGLMultipleRenderTargets===!0,De=h(I)||s;if(ae){J.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(s&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<L.mipmaps.length;Ee++)J.__webglFramebuffer[ye][Ee]=i.createFramebuffer()}else J.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(s&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer=[];for(let ye=0;ye<L.mipmaps.length;ye++)J.__webglFramebuffer[ye]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const ye=I.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=n.get(ye[Ee]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&Le(I)===!1){const ye=_e?L:[L];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){const Fe=ye[Ee];J.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee]);const Ge=a.convert(Fe.format,Fe.colorSpace),de=a.convert(Fe.type),Xe=T(Fe.internalFormat,Ge,de,Fe.colorSpace,I.isXRRenderTarget===!0),Ve=Oe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Xe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),he(i.TEXTURE_CUBE_MAP,L,De);for(let ye=0;ye<6;ye++)if(s&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(J.__webglFramebuffer[ye][Ee],I,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else we(J.__webglFramebuffer[ye],I,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(L,De)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const ye=I.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=ye[Ee],de=n.get(Ge);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),he(i.TEXTURE_2D,Ge,De),we(J.__webglFramebuffer,I,Ge,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),x(Ge,De)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,fe.__webglTexture),he(ye,L,De),s&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(J.__webglFramebuffer[Ee],I,L,i.COLOR_ATTACHMENT0,ye,Ee);else we(J.__webglFramebuffer,I,L,i.COLOR_ATTACHMENT0,ye,0);x(L,De)&&y(ye),t.unbindTexture()}I.depthBuffer&&ke(I)}function He(I){const L=h(I)||s,J=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let fe=0,ae=J.length;fe<ae;fe++){const _e=J[fe];if(x(_e,L)){const De=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(_e).__webglTexture;t.bindTexture(De,ye),y(De),t.unbindTexture()}}}function Pe(I){if(s&&I.samples>0&&Le(I)===!1){const L=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],J=I.width,fe=I.height;let ae=i.COLOR_BUFFER_BIT;const _e=[],De=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(I),Ee=I.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Fe=0;Fe<L.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<L.length;Fe++){_e.push(i.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&_e.push(De);const Ge=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ge===!1&&(I.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[De]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[De])),Ee){const de=n.get(L[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,J,fe,0,0,J,fe,ae,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Fe=0;Fe<L.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const Ge=n.get(L[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Oe(I){return Math.min(r.maxSamples,I.samples)}function Le(I){const L=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Be(I){const L=l.render.frame;c.get(I)!==L&&(c.set(I,L),I.update())}function Ne(I,L){const J=I.colorSpace,fe=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Ts||J!==mn&&J!==Vt&&(st.getTransfer(J)===at?s===!1?e.has("EXT_sRGB")===!0&&fe===qt?(I.format=Ts,I.minFilter=Dt,I.generateMipmaps=!1):L=_l.sRGBToLinear(L):(fe!==qt||ae!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),L}this.allocateTextureUnit=N,this.resetTextureUnits=K,this.setTexture2D=W,this.setTexture2DArray=te,this.setTexture3D=j,this.setTextureCube=re,this.rebindTextures=Ae,this.setupRenderTarget=V,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Le}function Jp(i,e,t){const n=t.isWebGL2;function r(a,l=Vt){let s;const o=st.getTransfer(l);if(a===An)return i.UNSIGNED_BYTE;if(a===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===al)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Oc)return i.BYTE;if(a===Nc)return i.SHORT;if(a===Ns)return i.UNSIGNED_SHORT;if(a===rl)return i.INT;if(a===wn)return i.UNSIGNED_INT;if(a===hn)return i.FLOAT;if(a===Wn)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Fc)return i.ALPHA;if(a===qt)return i.RGBA;if(a===Bc)return i.LUMINANCE;if(a===zc)return i.LUMINANCE_ALPHA;if(a===Hn)return i.DEPTH_COMPONENT;if(a===xi)return i.DEPTH_STENCIL;if(a===Ts)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===kc)return i.RED;if(a===ol)return i.RED_INTEGER;if(a===Gc)return i.RG;if(a===ll)return i.RG_INTEGER;if(a===cl)return i.RGBA_INTEGER;if(a===kr||a===Gr||a===Hr||a===Vr)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Vr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ma||a===_a||a===ga||a===va)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===_a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ga)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===va)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ul)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===xa||a===ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===xa)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===ya)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ba||a===Ma||a===Sa||a===Ea||a===wa||a===Ta||a===Aa||a===Ca||a===Ra||a===Pa||a===La||a===Da||a===Ua||a===Ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===ba)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ma)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Ea)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===wa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ta)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Aa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ca)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ra)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Pa)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===La)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Da)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ua)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ia)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Wr||a===Oa||a===Na)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Wr)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Oa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Na)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Hc||a===Fa||a===Ba||a===za)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Wr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===za)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gn?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class Qp extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const em={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const s=this._targetRay,o=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,n),m=this._getHandJoint(f,g);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const c=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,_=.005;f.inputState.pinching&&d>p+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=p-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(em)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Wt({extensions:{fragDepth:!0},vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new bi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class rm extends Mi{constructor(e,t){super();const n=this;let r=null,a=1,l=null,s="local-floor",o=1,f=null,c=null,u=null,d=null,p=null,_=null;const g=new im,h=t.getContextAttributes();let m=null,x=null;const y=[],T=[],w=new tt;let M=null;const S=new Ht;S.layers.enable(1),S.viewport=new bt;const P=new Ht;P.layers.enable(2),P.viewport=new bt;const O=[S,P],b=new Qp;b.layers.enable(1),b.layers.enable(2);let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ce=y[H];return ce===void 0&&(ce=new ms,y[H]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(H){let ce=y[H];return ce===void 0&&(ce=new ms,y[H]=ce),ce.getGripSpace()},this.getHand=function(H){let ce=y[H];return ce===void 0&&(ce=new ms,y[H]=ce),ce.getHandSpace()};function K(H){const ce=T.indexOf(H.inputSource);if(ce===-1)return;const xe=y[ce];xe!==void 0&&(xe.update(H.inputSource,H.frame,f||l),xe.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",G);for(let H=0;H<y.length;H++){const ce=T[H];ce!==null&&(T[H]=null,y[H].disconnect(ce))}D=null,F=null,g.reset(),e.setRenderTarget(m),p=null,d=null,u=null,r=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(H){f=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",N),r.addEventListener("inputsourceschange",G),h.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new _n(p.framebufferWidth,p.framebufferHeight,{format:qt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let ce=null,xe=null,we=null;h.depth&&(we=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=h.stencil?xi:Hn,xe=h.stencil?Gn:wn);const ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _n(d.textureWidth,d.textureHeight,{format:qt,type:An,depthTexture:new Cl(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(o),f=null,l=await r.requestReferenceSpace(s),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(H){for(let ce=0;ce<H.removed.length;ce++){const xe=H.removed[ce],we=T.indexOf(xe);we>=0&&(T[we]=null,y[we].disconnect(xe))}for(let ce=0;ce<H.added.length;ce++){const xe=H.added[ce];let we=T.indexOf(xe);if(we===-1){for(let Se=0;Se<y.length;Se++)if(Se>=T.length){T.push(xe),we=Se;break}else if(T[Se]===null){T[Se]=xe,we=Se;break}if(we===-1)break}const ve=y[we];ve&&ve.connect(xe)}}const W=new se,te=new se;function j(H,ce,xe){W.setFromMatrixPosition(ce.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const we=W.distanceTo(te),ve=ce.projectionMatrix.elements,Se=xe.projectionMatrix.elements,ke=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),V=(ve[9]+1)/ve[5],He=(ve[9]-1)/ve[5],Pe=(ve[8]-1)/ve[0],Oe=(Se[8]+1)/Se[0],Le=ke*Pe,Be=ke*Oe,Ne=we/(-Pe+Oe),I=Ne*-Pe;ce.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(I),H.translateZ(Ne),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const L=ke+Ne,J=Ae+Ne,fe=Le-I,ae=Be+(we-I),_e=V*Ae/J*L,De=He*Ae/J*L;H.projectionMatrix.makePerspective(fe,ae,_e,De,L,J),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function re(H,ce){ce===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ce.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;g.texture!==null&&(H.near=g.depthNear,H.far=g.depthFar),b.near=P.near=S.near=H.near,b.far=P.far=S.far=H.far,(D!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,F=b.far,S.near=D,S.far=F,P.near=D,P.far=F,S.updateProjectionMatrix(),P.updateProjectionMatrix(),H.updateProjectionMatrix());const ce=H.parent,xe=b.cameras;re(b,ce);for(let we=0;we<xe.length;we++)re(xe[we],ce);xe.length===2?j(b,S,P):b.projectionMatrix.copy(S.projectionMatrix),le(H,b,ce)};function le(H,ce,xe){xe===null?H.matrix.copy(ce.matrixWorld):(H.matrix.copy(xe.matrixWorld),H.matrix.invert(),H.matrix.multiply(ce.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ce.projectionMatrix),H.projectionMatrixInverse.copy(ce.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=As*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(H){o=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null};let ue=null;function X(H,ce){if(c=ce.getViewerPose(f||l),_=ce,c!==null){const xe=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let we=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let Se=0;Se<xe.length;Se++){const ke=xe[Se];let Ae=null;if(p!==null)Ae=p.getViewport(ke);else{const He=u.getViewSubImage(d,ke);Ae=He.viewport,Se===0&&(e.setRenderTargetTextures(x,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(x))}let V=O[Se];V===void 0&&(V=new Ht,V.layers.enable(Se),V.viewport=new bt,O[Se]=V),V.matrix.fromArray(ke.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(ke.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Se===0&&(b.matrix.copy(V.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(V)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Se=u.getDepthInformation(xe[0]);Se&&Se.isValid&&Se.texture&&g.init(e,Se,r.renderState)}}for(let xe=0;xe<y.length;xe++){const we=T[xe],ve=y[xe];we!==null&&ve!==void 0&&ve.update(we,ce,f||l)}g.render(e,b),ue&&ue(H,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const he=new Al;he.setAnimationLoop(X),this.setAnimationLoop=function(H){ue=H},this.dispose=function(){}}}function sm(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,El(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function r(h,m,x,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(h,m):m.isMeshToonMaterial?(a(h,m),u(h,m)):m.isMeshPhongMaterial?(a(h,m),c(h,m)):m.isMeshStandardMaterial?(a(h,m),d(h,m),m.isMeshPhysicalMaterial&&p(h,m,T)):m.isMeshMatcapMaterial?(a(h,m),_(h,m)):m.isMeshDepthMaterial?a(h,m):m.isMeshDistanceMaterial?(a(h,m),g(h,m)):m.isMeshNormalMaterial?a(h,m):m.isLineBasicMaterial?(l(h,m),m.isLineDashedMaterial&&s(h,m)):m.isPointsMaterial?o(h,m,x,y):m.isSpriteMaterial?f(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===Ot&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===Ot&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(h.envMap.value=x,h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,h.lightMapTransform)}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function s(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function o(h,m,x,y){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*x,h.scale.value=y*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function f(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function u(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,x){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,m){m.matcap&&(h.matcap.value=m.matcap)}function g(h,m){const x=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function am(i,e,t,n){let r={},a={},l=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(x,y){const T=y.program;n.uniformBlockBinding(x,T)}function f(x,y){let T=r[x.id];T===void 0&&(_(x),T=c(x),r[x.id]=T,x.addEventListener("dispose",h));const w=y.program;n.updateUBOMapping(x,w);const M=e.render.frame;a[x.id]!==M&&(d(x),a[x.id]=M)}function c(x){const y=u();x.__bindingPointIndex=y;const T=i.createBuffer(),w=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function u(){for(let x=0;x<s;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=r[x.id],T=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,S=T.length;M<S;M++){const P=Array.isArray(T[M])?T[M]:[T[M]];for(let O=0,b=P.length;O<b;O++){const D=P[O];if(p(D,M,O,w)===!0){const F=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let N=0;for(let G=0;G<K.length;G++){const W=K[G],te=g(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+N,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,N),N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,T,w){const M=x.value,S=y+"_"+T;if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:w[S]=M.clone(),!0;{const P=w[S];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return w[S]=M,!0}else if(P.equals(M)===!1)return P.copy(M),!0}return!1}function _(x){const y=x.uniforms;let T=0;const w=16;for(let S=0,P=y.length;S<P;S++){const O=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,D=O.length;b<D;b++){const F=O[b],K=Array.isArray(F.value)?F.value:[F.value];for(let N=0,G=K.length;N<G;N++){const W=K[N],te=g(W),j=T%w;j!==0&&w-j<te.boundary&&(T+=w-j),F.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=te.storage}}}const M=T%w;return M>0&&(T+=w-M),x.__size=T,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function h(x){const y=x.target;y.removeEventListener("dispose",h);const T=l.indexOf(y.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);l=[],r={},a={}}return{bind:o,update:f,dispose:m}}class Ol{constructor(e={}){const{canvas:t=Qc(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:f=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=l;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const y=this;let T=!1,w=0,M=0,S=null,P=-1,O=null;const b=new bt,D=new bt;let F=null;const K=new it(0);let N=0,G=t.width,W=t.height,te=1,j=null,re=null;const le=new bt(0,0,G,W),ue=new bt(0,0,G,W);let X=!1;const he=new zs;let H=!1,ce=!1,xe=null;const we=new mt,ve=new tt,Se=new se,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return S===null?te:1}let V=n;function He(U,Z){for(let Q=0;Q<U.length;Q++){const ie=U[Q],ne=t.getContext(ie,Z);if(ne!==null)return ne}return null}try{const U={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:f,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Is}`),t.addEventListener("webglcontextlost",z,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",E,!1),V===null){const Z=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Z.shift(),V=He(Z,U),V===null)throw He(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let Pe,Oe,Le,Be,Ne,I,L,J,fe,ae,_e,De,ye,Ee,Fe,Ge,de,Xe,Ve,Ie,Ue,me,A,ee;function oe(){Pe=new pd(V),Oe=new ld(V,Pe,e),Pe.init(Oe),me=new Jp(V,Pe,Oe),Le=new Kp(V,Pe,Oe),Be=new gd(V),Ne=new Fp,I=new $p(V,Pe,Le,Ne,Oe,me,Be),L=new ud(y),J=new dd(y),fe=new Eu(V,Oe),A=new ad(V,Pe,fe,Oe),ae=new md(V,fe,Be,A),_e=new bd(V,ae,fe,Be),Ve=new yd(V,Oe,I),Ge=new cd(Ne),De=new Np(y,L,J,Pe,Oe,A,Ge),ye=new sm(y,Ne),Ee=new zp,Fe=new Xp(Pe,Oe),Xe=new sd(y,L,J,Le,_e,d,o),de=new qp(y,_e,Oe),ee=new am(V,Be,Oe,Le),Ie=new od(V,Pe,Be,Oe),Ue=new _d(V,Pe,Be,Oe),Be.programs=De.programs,y.capabilities=Oe,y.extensions=Pe,y.properties=Ne,y.renderLists=Ee,y.shadowMap=de,y.state=Le,y.info=Be}oe();const ge=new rm(y,V);this.xr=ge,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const U=Pe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Pe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(U){U!==void 0&&(te=U,this.setSize(G,W,!1))},this.getSize=function(U){return U.set(G,W)},this.setSize=function(U,Z,Q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=U,W=Z,t.width=Math.floor(U*te),t.height=Math.floor(Z*te),Q===!0&&(t.style.width=U+"px",t.style.height=Z+"px"),this.setViewport(0,0,U,Z)},this.getDrawingBufferSize=function(U){return U.set(G*te,W*te).floor()},this.setDrawingBufferSize=function(U,Z,Q){G=U,W=Z,te=Q,t.width=Math.floor(U*Q),t.height=Math.floor(Z*Q),this.setViewport(0,0,U,Z)},this.getCurrentViewport=function(U){return U.copy(b)},this.getViewport=function(U){return U.copy(le)},this.setViewport=function(U,Z,Q,ie){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,Z,Q,ie),Le.viewport(b.copy(le).multiplyScalar(te).floor())},this.getScissor=function(U){return U.copy(ue)},this.setScissor=function(U,Z,Q,ie){U.isVector4?ue.set(U.x,U.y,U.z,U.w):ue.set(U,Z,Q,ie),Le.scissor(D.copy(ue).multiplyScalar(te).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(U){Le.setScissorTest(X=U)},this.setOpaqueSort=function(U){j=U},this.setTransparentSort=function(U){re=U},this.getClearColor=function(U){return U.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(U=!0,Z=!0,Q=!0){let ie=0;if(U){let ne=!1;if(S!==null){const Re=S.texture.format;ne=Re===cl||Re===ll||Re===ol}if(ne){const Re=S.texture.type,ze=Re===An||Re===wn||Re===Ns||Re===Gn||Re===sl||Re===al,We=Xe.getClearColor(),je=Xe.getClearAlpha(),$e=We.r,Ze=We.g,qe=We.b;ze?(p[0]=$e,p[1]=Ze,p[2]=qe,p[3]=je,V.clearBufferuiv(V.COLOR,0,p)):(_[0]=$e,_[1]=Ze,_[2]=qe,_[3]=je,V.clearBufferiv(V.COLOR,0,_))}else ie|=V.COLOR_BUFFER_BIT}Z&&(ie|=V.DEPTH_BUFFER_BIT),Q&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",z,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",E,!1),Ee.dispose(),Fe.dispose(),Ne.dispose(),L.dispose(),J.dispose(),_e.dispose(),A.dispose(),ee.dispose(),De.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",B),ge.removeEventListener("sessionend",Y),xe&&(xe.dispose(),xe=null),Te.stop()};function z(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const U=Be.autoReset,Z=de.enabled,Q=de.autoUpdate,ie=de.needsUpdate,ne=de.type;oe(),Be.autoReset=U,de.enabled=Z,de.autoUpdate=Q,de.needsUpdate=ie,de.type=ne}function E(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function k(U){const Z=U.target;Z.removeEventListener("dispose",k),pe(Z)}function pe(U){v(U),Ne.remove(U)}function v(U){const Z=Ne.get(U).programs;Z!==void 0&&(Z.forEach(function(Q){De.releaseProgram(Q)}),U.isShaderMaterial&&De.releaseShaderCache(U))}this.renderBufferDirect=function(U,Z,Q,ie,ne,Re){Z===null&&(Z=ke);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,We=St(U,Z,Q,ie,ne);Le.setMaterial(ie,ze);let je=Q.index,$e=1;if(ie.wireframe===!0){if(je=ae.getWireframeAttribute(Q),je===void 0)return;$e=2}const Ze=Q.drawRange,qe=Q.attributes.position;let ht=Ze.start*$e,Nt=(Ze.start+Ze.count)*$e;Re!==null&&(ht=Math.max(ht,Re.start*$e),Nt=Math.min(Nt,(Re.start+Re.count)*$e)),je!==null?(ht=Math.max(ht,0),Nt=Math.min(Nt,je.count)):qe!=null&&(ht=Math.max(ht,0),Nt=Math.min(Nt,qe.count));const vt=Nt-ht;if(vt<0||vt===1/0)return;A.setup(ne,ie,We,Q,je);let nn,lt=Ie;if(je!==null&&(nn=fe.get(je),lt=Ue,lt.setIndex(nn)),ne.isMesh)ie.wireframe===!0?(Le.setLineWidth(ie.wireframeLinewidth*Ae()),lt.setMode(V.LINES)):lt.setMode(V.TRIANGLES);else if(ne.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Le.setLineWidth(Qe*Ae()),ne.isLineSegments?lt.setMode(V.LINES):ne.isLineLoop?lt.setMode(V.LINE_LOOP):lt.setMode(V.LINE_STRIP)}else ne.isPoints?lt.setMode(V.POINTS):ne.isSprite&&lt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)lt.renderInstances(ht,vt,ne.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ur=Math.min(Q.instanceCount,Qe);lt.renderInstances(ht,vt,Ur)}else lt.render(ht,vt)};function q(U,Z,Q){U.transparent===!0&&U.side===fn&&U.forceSinglePass===!1?(U.side=Ot,U.needsUpdate=!0,Je(U,Z,Q),U.side=Cn,U.needsUpdate=!0,Je(U,Z,Q),U.side=fn):Je(U,Z,Q)}this.compile=function(U,Z,Q=null){Q===null&&(Q=U),h=Fe.get(Q),h.init(),x.push(h),Q.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),U!==Q&&U.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Z.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),h.setupLights(y._useLegacyLights);const ie=new Set;return U.traverse(function(ne){const Re=ne.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){const We=Re[ze];q(We,Q,ne),ie.add(We)}else q(Re,Q,ne),ie.add(Re)}),x.pop(),h=null,ie},this.compileAsync=function(U,Z,Q=null){const ie=this.compile(U,Z,Q);return new Promise(ne=>{function Re(){if(ie.forEach(function(ze){Ne.get(ze).currentProgram.isReady()&&ie.delete(ze)}),ie.size===0){ne(U);return}setTimeout(Re,10)}Pe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let $=null;function R(U){$&&$(U)}function B(){Te.stop()}function Y(){Te.start()}const Te=new Al;Te.setAnimationLoop(R),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(U){$=U,ge.setAnimationLoop(U),U===null?Te.stop():Te.start()},ge.addEventListener("sessionstart",B),ge.addEventListener("sessionend",Y),this.render=function(U,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(Z),Z=ge.getCamera()),U.isScene===!0&&U.onBeforeRender(y,U,Z,S),h=Fe.get(U,x.length),h.init(),x.push(h),we.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),he.setFromProjectionMatrix(we),ce=this.localClippingEnabled,H=Ge.init(this.clippingPlanes,ce),g=Ee.get(U,m.length),g.init(),m.push(g),be(U,Z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(j,re),this.info.render.frame++,H===!0&&Ge.beginShadows();const Q=h.state.shadowsArray;if(de.render(Q,U,Z),H===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&Xe.render(g,U),h.setupLights(y._useLegacyLights),Z.isArrayCamera){const ie=Z.cameras;for(let ne=0,Re=ie.length;ne<Re;ne++){const ze=ie[ne];Ce(g,U,ze,ze.viewport)}}else Ce(g,U,Z);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),U.isScene===!0&&U.onAfterRender(y,U,Z),A.resetDefaultState(),P=-1,O=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function be(U,Z,Q,ie){if(U.visible===!1)return;if(U.layers.test(Z.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(Z);else if(U.isLight)h.pushLight(U),U.castShadow&&h.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||he.intersectsSprite(U)){ie&&Se.setFromMatrixPosition(U.matrixWorld).applyMatrix4(we);const ze=_e.update(U),We=U.material;We.visible&&g.push(U,ze,We,Q,Se.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||he.intersectsObject(U))){const ze=_e.update(U),We=U.material;if(ie&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Se.copy(U.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Se.copy(ze.boundingSphere.center)),Se.applyMatrix4(U.matrixWorld).applyMatrix4(we)),Array.isArray(We)){const je=ze.groups;for(let $e=0,Ze=je.length;$e<Ze;$e++){const qe=je[$e],ht=We[qe.materialIndex];ht&&ht.visible&&g.push(U,ze,ht,Q,Se.z,qe)}}else We.visible&&g.push(U,ze,We,Q,Se.z,null)}}const Re=U.children;for(let ze=0,We=Re.length;ze<We;ze++)be(Re[ze],Z,Q,ie)}function Ce(U,Z,Q,ie){const ne=U.opaque,Re=U.transmissive,ze=U.transparent;h.setupLightsView(Q),H===!0&&Ge.setGlobalState(y.clippingPlanes,Q),Re.length>0&&nt(ne,Re,Z,Q),ie&&Le.viewport(b.copy(ie)),ne.length>0&&Pt(ne,Z,Q),Re.length>0&&Pt(Re,Z,Q),ze.length>0&&Pt(ze,Z,Q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function nt(U,Z,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Re=Oe.isWebGL2;xe===null&&(xe=new _n(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Wn:An,minFilter:kn,samples:Re?4:0})),y.getDrawingBufferSize(ve),Re?xe.setSize(ve.x,ve.y):xe.setSize(Cs(ve.x),Cs(ve.y));const ze=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(K),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const We=y.toneMapping;y.toneMapping=Tn,Pt(U,Q,ie),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe);let je=!1;for(let $e=0,Ze=Z.length;$e<Ze;$e++){const qe=Z[$e],ht=qe.object,Nt=qe.geometry,vt=qe.material,nn=qe.group;if(vt.side===fn&&ht.layers.test(ie.layers)){const lt=vt.side;vt.side=Ot,vt.needsUpdate=!0,ot(ht,Q,ie,Nt,vt,nn),vt.side=lt,vt.needsUpdate=!0,je=!0}}je===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe)),y.setRenderTarget(ze),y.setClearColor(K,N),y.toneMapping=We}function Pt(U,Z,Q){const ie=Z.isScene===!0?Z.overrideMaterial:null;for(let ne=0,Re=U.length;ne<Re;ne++){const ze=U[ne],We=ze.object,je=ze.geometry,$e=ie===null?ze.material:ie,Ze=ze.group;We.layers.test(Q.layers)&&ot(We,Z,Q,je,$e,Ze)}}function ot(U,Z,Q,ie,ne,Re){U.onBeforeRender(y,Z,Q,ie,ne,Re),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ne.onBeforeRender(y,Z,Q,ie,U,Re),ne.transparent===!0&&ne.side===fn&&ne.forceSinglePass===!1?(ne.side=Ot,ne.needsUpdate=!0,y.renderBufferDirect(Q,Z,ie,ne,U,Re),ne.side=Cn,ne.needsUpdate=!0,y.renderBufferDirect(Q,Z,ie,ne,U,Re),ne.side=fn):y.renderBufferDirect(Q,Z,ie,ne,U,Re),U.onAfterRender(y,Z,Q,ie,ne,Re)}function Je(U,Z,Q){Z.isScene!==!0&&(Z=ke);const ie=Ne.get(U),ne=h.state.lights,Re=h.state.shadowsArray,ze=ne.state.version,We=De.getParameters(U,ne.state,Re,Z,Q),je=De.getProgramCacheKey(We);let $e=ie.programs;ie.environment=U.isMeshStandardMaterial?Z.environment:null,ie.fog=Z.fog,ie.envMap=(U.isMeshStandardMaterial?J:L).get(U.envMap||ie.environment),$e===void 0&&(U.addEventListener("dispose",k),$e=new Map,ie.programs=$e);let Ze=$e.get(je);if(Ze!==void 0){if(ie.currentProgram===Ze&&ie.lightsStateVersion===ze)return pt(U,We),Ze}else We.uniforms=De.getUniforms(U),U.onBuild(Q,We,y),U.onBeforeCompile(We,y),Ze=De.acquireProgram(We,je),$e.set(je,Ze),ie.uniforms=We.uniforms;const qe=ie.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qe.clippingPlanes=Ge.uniform),pt(U,We),ie.needsLights=jn(U),ie.lightsStateVersion=ze,ie.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.currentProgram=Ze,ie.uniformsList=null,Ze}function ct(U){if(U.uniformsList===null){const Z=U.currentProgram.getUniforms();U.uniformsList=gr.seqWithValue(Z.seq,U.uniforms)}return U.uniformsList}function pt(U,Z){const Q=Ne.get(U);Q.outputColorSpace=Z.outputColorSpace,Q.batching=Z.batching,Q.instancing=Z.instancing,Q.instancingColor=Z.instancingColor,Q.skinning=Z.skinning,Q.morphTargets=Z.morphTargets,Q.morphNormals=Z.morphNormals,Q.morphColors=Z.morphColors,Q.morphTargetsCount=Z.morphTargetsCount,Q.numClippingPlanes=Z.numClippingPlanes,Q.numIntersection=Z.numClipIntersection,Q.vertexAlphas=Z.vertexAlphas,Q.vertexTangents=Z.vertexTangents,Q.toneMapping=Z.toneMapping}function St(U,Z,Q,ie,ne){Z.isScene!==!0&&(Z=ke),I.resetTextureUnits();const Re=Z.fog,ze=ie.isMeshStandardMaterial?Z.environment:null,We=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:mn,je=(ie.isMeshStandardMaterial?J:L).get(ie.envMap||ze),$e=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let vt=Tn;ie.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(vt=y.toneMapping);const nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=nn!==void 0?nn.length:0,Qe=Ne.get(ie),Ur=h.state.lights;if(H===!0&&(ce===!0||U!==O)){const kt=U===O&&ie.id===P;Ge.setState(ie,U,kt)}let ut=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ur.state.version||Qe.outputColorSpace!==We||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||Qe.envMap!==je||ie.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ge.numPlanes||Qe.numIntersection!==Ge.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==Ze||Qe.morphTargets!==qe||Qe.morphNormals!==ht||Qe.morphColors!==Nt||Qe.toneMapping!==vt||Oe.isWebGL2===!0&&Qe.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,Qe.__version=ie.version);let Rn=Qe.currentProgram;ut===!0&&(Rn=Je(ie,Z,ne));let Ws=!1,Ti=!1,Ir=!1;const Et=Rn.getUniforms(),Pn=Qe.uniforms;if(Le.useProgram(Rn.program)&&(Ws=!0,Ti=!0,Ir=!0),ie.id!==P&&(P=ie.id,Ti=!0),Ws||O!==U){Et.setValue(V,"projectionMatrix",U.projectionMatrix),Et.setValue(V,"viewMatrix",U.matrixWorldInverse);const kt=Et.map.cameraPosition;kt!==void 0&&kt.setValue(V,Se.setFromMatrixPosition(U.matrixWorld)),Oe.logarithmicDepthBuffer&&Et.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Et.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),O!==U&&(O=U,Ti=!0,Ir=!0)}if(ne.isSkinnedMesh){Et.setOptional(V,ne,"bindMatrix"),Et.setOptional(V,ne,"bindMatrixInverse");const kt=ne.skeleton;kt&&(Oe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),Et.setValue(V,"boneTexture",kt.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(Et.setOptional(V,ne,"batchingTexture"),Et.setValue(V,"batchingTexture",ne._matricesTexture,I));const Or=Q.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&Oe.isWebGL2===!0)&&Ve.update(ne,Q,Rn),(Ti||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Et.setValue(V,"receiveShadow",ne.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Pn.envMap.value=je,Pn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ti&&(Et.setValue(V,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Xn(Pn,Ir),Re&&ie.fog===!0&&ye.refreshFogUniforms(Pn,Re),ye.refreshMaterialUniforms(Pn,ie,te,W,xe),gr.upload(V,ct(Qe),Pn,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gr.upload(V,ct(Qe),Pn,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Et.setValue(V,"center",ne.center),Et.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Et.setValue(V,"normalMatrix",ne.normalMatrix),Et.setValue(V,"modelMatrix",ne.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const kt=ie.uniformsGroups;for(let Nr=0,kl=kt.length;Nr<kl;Nr++)if(Oe.isWebGL2){const Xs=kt[Nr];ee.update(Xs,Rn),ee.bind(Xs,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Xn(U,Z){U.ambientLightColor.needsUpdate=Z,U.lightProbe.needsUpdate=Z,U.directionalLights.needsUpdate=Z,U.directionalLightShadows.needsUpdate=Z,U.pointLights.needsUpdate=Z,U.pointLightShadows.needsUpdate=Z,U.spotLights.needsUpdate=Z,U.spotLightShadows.needsUpdate=Z,U.rectAreaLights.needsUpdate=Z,U.hemisphereLights.needsUpdate=Z}function jn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(U,Z,Q){Ne.get(U.texture).__webglTexture=Z,Ne.get(U.depthTexture).__webglTexture=Q;const ie=Ne.get(U);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,Z){const Q=Ne.get(U);Q.__webglFramebuffer=Z,Q.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(U,Z=0,Q=0){S=U,w=Z,M=Q;let ie=!0,ne=null,Re=!1,ze=!1;if(U){const je=Ne.get(U);je.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(V.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?I.setupRenderTarget(U):je.__hasExternalTextures&&I.rebindTextures(U,Ne.get(U.texture).__webglTexture,Ne.get(U.depthTexture).__webglTexture);const $e=U.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ze=!0);const Ze=Ne.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ze[Z])?ne=Ze[Z][Q]:ne=Ze[Z],Re=!0):Oe.isWebGL2&&U.samples>0&&I.useMultisampledRTT(U)===!1?ne=Ne.get(U).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[Q]:ne=Ze,b.copy(U.viewport),D.copy(U.scissor),F=U.scissorTest}else b.copy(le).multiplyScalar(te).floor(),D.copy(ue).multiplyScalar(te).floor(),F=X;if(Le.bindFramebuffer(V.FRAMEBUFFER,ne)&&Oe.drawBuffers&&ie&&Le.drawBuffers(U,ne),Le.viewport(b),Le.scissor(D),Le.setScissorTest(F),Re){const je=Ne.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,je.__webglTexture,Q)}else if(ze){const je=Ne.get(U.texture),$e=Z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,je.__webglTexture,Q||0,$e)}P=-1},this.readRenderTargetPixels=function(U,Z,Q,ie,ne,Re,ze){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ne.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&ze!==void 0&&(We=We[ze]),We){Le.bindFramebuffer(V.FRAMEBUFFER,We);try{const je=U.texture,$e=je.format,Ze=je.type;if($e!==qt&&me.convert($e)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ze===Wn&&(Pe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ze!==An&&me.convert(Ze)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===hn&&(Oe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=U.width-ie&&Q>=0&&Q<=U.height-ne&&V.readPixels(Z,Q,ie,ne,me.convert($e),me.convert(Ze),Re)}finally{const je=S!==null?Ne.get(S).__webglFramebuffer:null;Le.bindFramebuffer(V.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(U,Z,Q=0){const ie=Math.pow(2,-Q),ne=Math.floor(Z.image.width*ie),Re=Math.floor(Z.image.height*ie);I.setTexture2D(Z,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,U.x,U.y,ne,Re),Le.unbindTexture()},this.copyTextureToTexture=function(U,Z,Q,ie=0){const ne=Z.image.width,Re=Z.image.height,ze=me.convert(Q.format),We=me.convert(Q.type);I.setTexture2D(Q,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment),Z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ie,U.x,U.y,ne,Re,ze,We,Z.image.data):Z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ie,U.x,U.y,Z.mipmaps[0].width,Z.mipmaps[0].height,ze,Z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,ie,U.x,U.y,ze,We,Z.image),ie===0&&Q.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(U,Z,Q,ie,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=U.max.x-U.min.x+1,ze=U.max.y-U.min.y+1,We=U.max.z-U.min.z+1,je=me.convert(ie.format),$e=me.convert(ie.type);let Ze;if(ie.isData3DTexture)I.setTexture3D(ie,0),Ze=V.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)I.setTexture2DArray(ie,0),Ze=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ie.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ie.unpackAlignment);const qe=V.getParameter(V.UNPACK_ROW_LENGTH),ht=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Nt=V.getParameter(V.UNPACK_SKIP_PIXELS),vt=V.getParameter(V.UNPACK_SKIP_ROWS),nn=V.getParameter(V.UNPACK_SKIP_IMAGES),lt=Q.isCompressedTexture?Q.mipmaps[ne]:Q.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,lt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,lt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,U.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,U.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,U.min.z),Q.isDataTexture||Q.isData3DTexture?V.texSubImage3D(Ze,ne,Z.x,Z.y,Z.z,Re,ze,We,je,$e,lt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Ze,ne,Z.x,Z.y,Z.z,Re,ze,We,je,lt.data)):V.texSubImage3D(Ze,ne,Z.x,Z.y,Z.z,Re,ze,We,je,$e,lt),V.pixelStorei(V.UNPACK_ROW_LENGTH,qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ht),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,vt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nn),ne===0&&ie.generateMipmaps&&V.generateMipmap(Ze),Le.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?I.setTextureCube(U,0):U.isData3DTexture?I.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?I.setTexture2DArray(U,0):I.setTexture2D(U,0),Le.unbindTexture()},this.resetState=function(){w=0,M=0,S=null,Le.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fs?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Vn:fl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?yt:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class om extends Ol{}om.prototype.isWebGL1Renderer=!0;class lm extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cm extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nl extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dl,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Lo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class um{constructor(e,t,n){const r=this;let a=!1,l=0,s=0,o;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,l,s),a=!0},this.itemEnd=function(c){l++,r.onProgress!==void 0&&r.onProgress(c,l,s),l===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return f.push(c,u),this},this.removeHandler=function(c){const u=f.indexOf(c);return u!==-1&&f.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=f.length;u<d;u+=2){const p=f[u],_=f[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const fm=new um;class Hs{constructor(e){this.manager=e!==void 0?e:fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hs.DEFAULT_MATERIAL_NAME="__DEFAULT";class hm extends Hs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Lo.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const s=Bi("img");function o(){c(),Lo.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(u){c(),r&&r(u),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",f,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class dm extends Hs{constructor(e){super(e)}load(e,t,n,r){const a=new Rt,l=new hm(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Fl extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _s=new mt,Do=new se,Uo=new se;class pm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Do.setFromMatrixPosition(e.matrixWorld),t.position.copy(Do),Uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uo),t.updateMatrixWorld(),_s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_s),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mm extends pm{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends Fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new mm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gm extends Fl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Io(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Io();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Io(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Is);const vm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xm=new ks(-1,1,1,-1,0,1);class ym extends gn{constructor(){super(),this.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pn([0,2,0,0,2,0],2))}}const bm=new ym;class Vs{constructor(e){this._mesh=new zt(bm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,xm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mm extends wi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Lr.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Vs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Oo extends wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,s;this.inverse?(l=0,s=1):(l=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Sm extends wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Em{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new tt);this._width=n.width,this._height=n.height,t=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mm(vm),this.copyPass.material.blending=tn,this.clock=new Bl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Oo!==void 0&&(l instanceof Oo?n=!0:l instanceof Sm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class wm extends wi{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new it}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Tm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Am extends wi{constructor(){super();const e=Tm;this.uniforms=Lr.clone(e.uniforms),this.material=new cm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Cm={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Rm extends wi{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,a=n.aperture!==void 0?n.aperture:.025,l=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new _n(1,1,{minFilter:Mt,magFilter:Mt,type:Wn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Il,this.materialDepth.depthPacking=hl,this.materialDepth.blending=tn;const s=Cm,o=Lr.clone(s.uniforms);o.tDepth.value=this.renderTargetDepth.texture,o.focus.value=r,o.aspect.value=t.aspect,o.aperture.value=a,o.maxblur.value=l,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Wt({defines:Object.assign({},s.defines),uniforms:o,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.uniforms=o,this.fsQuad=new Vs(this.materialBokeh),this._oldClearColor=new it}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=a}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}function Pm(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},l={},s=i[0].morphTargetsRelative,o=new gn;let f=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(s!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;l[p]===void 0&&(l[p]=[]),l[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(f,p,c),f+=p}}if(t){let c=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+c);c+=i[d].attributes.position.count}o.setIndex(u)}for(const c in a){const u=No(a[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,u)}for(const c in l){const u=l[c][0].length;if(u===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let d=0;d<u;++d){const p=[];for(let g=0;g<l[c].length;++g)p.push(l[c][g][d]);const _=No(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(_)}}return o}function No(i){let e,t,n,r=-1,a=0;for(let f=0;f<i.length;++f){const c=i[f];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=c.count*t}const l=new e(a),s=new Kt(l,t,n);let o=0;for(let f=0;f<i.length;++f){const c=i[f];if(c.isInterleavedBufferAttribute){const u=o/t;for(let d=0,p=c.count;d<p;d++)for(let _=0;_<t;_++){const g=c.getComponent(d,_);s.setComponent(d+u,_,g)}}else l.set(c.array,o);o+=c.count*t}return r!==void 0&&(s.gpuType=r),s}var zl={exports:{}};/*! three.modifiers-v2.5.7 */(function(i,e){(function(t,n){i.exports=n()})(typeof self<"u"?self:Qt,function(){return function(t){function n(a){if(r[a])return r[a].exports;var l=r[a]={i:a,l:!1,exports:{}};return t[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var r={};return n.m=t,n.c=r,n.d=function(a,l,s){n.o(a,l)||Object.defineProperty(a,l,{configurable:!1,enumerable:!0,get:s})},n.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(l,"a",l),l},n.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},n.p="",n(n.s=7)}([function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Modifier=void 0;var a=function(){function l(){}return l.prototype.setModifiable=function(s){this.mod=s},l.prototype.getVertices=function(){return this.mod.getVertices()},l.prototype.destroy=function(){this.mod=null},l}();n.Modifier=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector3=void 0;var a=function(){function l(s,o,f){s===void 0&&(s=0),o===void 0&&(o=0),f===void 0&&(f=0),this.x=s,this.y=o,this.z=f}return l.prototype.clone=function(){return new l(this.x,this.y,this.z)},l.prototype.equals=function(s){return this.x==s.x&&this.y==s.y&&this.z==s.z},l.prototype.zero=function(){this.x=this.y=this.z=0},l.prototype.negate=function(){return new l(-this.x,-this.y,-this.z)},l.prototype.add=function(s){return new l(this.x+s.x,this.y+s.y,this.z+s.z)},l.prototype.subtract=function(s){return new l(this.x-s.x,this.y-s.y,this.z-s.z)},l.prototype.multiplyScalar=function(s){return new l(this.x*s,this.y*s,this.z*s)},l.prototype.multiply=function(s){return new l(this.x*s.x,this.y*s.y,this.z*s.z)},l.prototype.divide=function(s){var o=1/s;return new l(this.x*o,this.y*o,this.z*o)},l.prototype.normalize=function(){var s=this.x*this.x+this.y*this.y+this.z*this.z;if(s>0){var o=1/Math.sqrt(s);this.x*=o,this.y*=o,this.z*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},set:function(s){this.normalize(),this.x*=s,this.y*=s,this.z*=s},enumerable:!1,configurable:!0}),l.prototype.fromBufferAttribute=function(s,o){return this.x=s.getX(o),this.y=s.getY(o),this.z=s.getZ(o),this},l.prototype.toString=function(){return"["+this.x+" , "+this.y+" , "+this.z+"]"},l.sum=function(s,o){return s.add(o)},l.dot=function(s,o){return s.x*o.x+s.y*o.y+s.z*o.z},l.cross=function(s,o){return new l(s.y*o.z-s.z*o.y,s.z*o.x-s.x*o.z,s.x*o.y-s.y*o.x)},l.distance=function(s,o){var f=s.x-o.x,c=s.y-o.y,u=s.z-o.z;return Math.sqrt(f*f+c*c+u*u)},l.ZERO=new l(0,0,0),l}();n.Vector3=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModConstant=void 0;var a=function(){function l(){}return l.NONE=0,l.X=1,l.Y=2,l.Z=4,l.LEFT=-1,l.RIGHT=1,l}();n.ModConstant=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMath=void 0;var a=function(){function l(){}return l.normalize=function(s,o,f){var c=o-s;return c==0?1:l.trim(0,1,(f-s)/o)},l.toRange=function(s,o,f){var c=o-s;return c==0?0:s+(o-s)*f},l.inInRange=function(s,o,f,c){return c===void 0&&(c=!1),c?f>=s&&f<=o:f>s&&f<o},l.sign=function(s,o){return o===void 0&&(o=0),s==0?o:s>0?1:-1},l.trim=function(s,o,f){return Math.min(o,Math.max(s,f))},l.wrap=function(s,o,f){return f<s?f+(o-s):f>=o?f-(o-s):f},l.degToRad=function(s){return s/180*Math.PI},l.radToDeg=function(s){return s/Math.PI*180},l.presicion=function(s,o){var f=Math.pow(10,o);return Math.round(s*f)/f},l.uceil=function(s){return s<0?Math.floor(s):Math.ceil(s)},l.mappedKey=function(s){var o=Math.pow(10,4);return Math.round(s.x*o)+"_"+Math.round(s.y*o)+"_"+Math.round(s.z*o)},l.PI=3.1415,l}();n.TMath=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix4=void 0;var a=function(){function l(s,o,f,c,u,d,p,_,g,h,m,x,y,T,w,M){s===void 0&&(s=1),o===void 0&&(o=0),f===void 0&&(f=0),c===void 0&&(c=0),u===void 0&&(u=0),d===void 0&&(d=1),p===void 0&&(p=0),_===void 0&&(_=0),g===void 0&&(g=0),h===void 0&&(h=0),m===void 0&&(m=1),x===void 0&&(x=0),y===void 0&&(y=0),T===void 0&&(T=0),w===void 0&&(w=0),M===void 0&&(M=1),this.n11=s,this.n12=o,this.n13=f,this.n14=c,this.n21=u,this.n22=d,this.n23=p,this.n24=_,this.n31=g,this.n32=h,this.n33=m,this.n34=x,this.n41=y,this.n42=T,this.n43=w,this.n44=M}return l.translationMatrix=function(s,o,f){var c=new l;return c.n14=s,c.n24=o,c.n34=f,c},l.scaleMatrix=function(s,o,f){var c=new l;return c.n11=s,c.n22=o,c.n33=f,c},l.rotationMatrix=function(s,o,f,c,u){u===void 0&&(u=null);var d;d=u||new l;var p=Math.cos(c),_=Math.sin(c),g=1-p,h=s*o*g,m=o*f*g,x=s*f*g,y=_*f,T=_*o,w=_*s;return d.n11=p+s*s*g,d.n12=-y+h,d.n13=T+x,d.n14=0,d.n21=y+h,d.n22=p+o*o*g,d.n23=-w+m,d.n24=0,d.n31=-T+x,d.n32=w+m,d.n33=p+f*f*g,d.n34=0,d},l.prototype.calculateMultiply=function(s,o){var f=s.n11,c=o.n11,u=s.n21,d=o.n21,p=s.n31,_=o.n31,g=s.n12,h=o.n12,m=s.n22,x=o.n22,y=s.n32,T=o.n32,w=s.n13,M=o.n13,S=s.n23,P=o.n23,O=s.n33,b=o.n33,D=s.n14,F=o.n14,K=s.n24,N=o.n24,G=s.n34,W=o.n34;this.n11=f*c+g*d+w*_,this.n12=f*h+g*x+w*T,this.n13=f*M+g*P+w*b,this.n14=f*F+g*N+w*W+D,this.n21=u*c+m*d+S*_,this.n22=u*h+m*x+S*T,this.n23=u*M+m*P+S*b,this.n24=u*F+m*N+S*W+K,this.n31=p*c+y*d+O*_,this.n32=p*h+y*x+O*T,this.n33=p*M+y*P+O*b,this.n34=p*F+y*N+O*W+G},l.multiply=function(s,o){var f=new l;return f.calculateMultiply(s,o),f},l.multiplyVector=function(s,o){var f=o.x,c=o.y,u=o.z;o.x=f*s.n11+c*s.n12+u*s.n13+s.n14,o.y=f*s.n21+c*s.n22+u*s.n23+s.n24,o.z=f*s.n31+c*s.n32+u*s.n33+s.n34},l}();n.Matrix4=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector2=void 0;var a=function(){function l(s,o){this.x=s,this.y=o}return l.prototype.clone=function(){return new l(this.x,this.y)},l.prototype.equals=function(s){return this.x==s.x&&this.y==s.y},l.prototype.zero=function(){this.x=this.y},l.prototype.negate=function(){return new l(-this.x,-this.y)},l.prototype.add=function(s){return new l(this.x+s.x,this.y+s.y)},l.prototype.subtract=function(s){return new l(this.x-s.x,this.y-s.y)},l.prototype.multiplyScalar=function(s){return new l(this.x*s,this.y*s)},l.prototype.multiply=function(s){return new l(this.x*s.x,this.y*s.y)},l.prototype.divide=function(s){var o=1/s;return new l(this.x*o,this.y*o)},l.prototype.normalize=function(){var s=this.x*this.x+this.y*this.y;if(s>0){var o=1/Math.sqrt(s);this.x*=o,this.y*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},set:function(s){this.normalize(),this.x*=s,this.y*=s},enumerable:!1,configurable:!0}),l.prototype.toString=function(){return"["+this.x+" , "+this.y+"]"},l.sum=function(s,o){return s.add(o)},l.dot=function(s,o){return s.x*o.x+s.y*o.y},l.distance=function(s,o){var f=s.x-o.x,c=s.y-o.y;return Math.sqrt(f*f+c*c)},l.ZERO=new l(0,0),l}();n.Vector2=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Range=void 0;var a=r(3),l=function(){function s(o,f){o===void 0&&(o=0),f===void 0&&(f=1),this._start=o,this._end=f}return Object.defineProperty(s.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"size",{get:function(){return this._end-this._start},enumerable:!1,configurable:!0}),s.prototype.move=function(o){this._start+=o,this._end+=o},s.prototype.isIn=function(o){return o>=this._start&&o<=this._end},s.prototype.normalize=function(o){return a.TMath.normalize(this._start,this._end,o)},s.prototype.toRange=function(o){return a.TMath.toRange(this._start,this._end,o)},s.prototype.trim=function(o){return a.TMath.trim(this._start,this._end,o)},s.prototype.interpolate=function(o,f){return this.toRange(f.normalize(o))},s.prototype.toString=function(){return"["+this.start+" - "+this.end+"]"},s}();n.Range=l},function(t,n,r){t.exports=r(8)},function(t,n,r){var a=this&&this.__createBinding||(Object.create?function(s,o,f,c){c===void 0&&(c=f),Object.defineProperty(s,c,{enumerable:!0,get:function(){return o[f]}})}:function(s,o,f,c){c===void 0&&(c=f),s[c]=o[f]}),l=this&&this.__exportStar||function(s,o){for(var f in s)f==="default"||Object.prototype.hasOwnProperty.call(o,f)||a(o,s,f)};Object.defineProperty(n,"__esModule",{value:!0}),l(r(9),n),l(r(16),n),l(r(6),n),l(r(5),n),l(r(1),n),l(r(3),n),l(r(2),n),l(r(17),n),l(r(19),n),l(r(20),n),l(r(21),n),l(r(25),n),l(r(26),n),l(r(27),n),l(r(28),n),l(r(29),n),l(r(30),n),l(r(31),n)},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModifierStack=void 0;var a=r(10),l=function(){function s(o){this.baseMesh=new a.ThreeMesh,this.baseMesh.setMesh(o),this.baseMesh.analyzeGeometry(),this.stack=[]}return Object.defineProperty(s.prototype,"indexUpdate",{set:function(o){this.baseMesh.indexUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"boundUpdate",{set:function(o){this.baseMesh.boundUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"uvsAndColorUpdate",{set:function(o){this.baseMesh.uvsAndColorUpdate=o},enumerable:!1,configurable:!0}),s.prototype.addModifier=function(o){o.setModifiable(this.baseMesh),this.stack.push(o)},s.prototype.removeModifier=function(o){var f=this.stack.indexOf(o);f>-1&&this.stack.splice(f,1)},s.prototype.apply=function(){this.baseMesh.resetGeometry();for(var o=0;o<this.stack.length;o++)this.stack[o].apply();this.baseMesh.postApply()},s.prototype.collapse=function(){this.apply(),this.baseMesh.collapseGeometry(),this.stack.length=0},s.prototype.reset=function(){this.baseMesh.resetGeometry()},s.prototype.clear=function(){this.stack.length=0},s.prototype.destroy=function(){this.baseMesh.destroy();for(var o=0;o<this.stack.length;o++)this.stack[o].destroy();this.clear()},s}();n.ModifierStack=l},function(t,n,r){var a=this&&this.__extends||function(){var p=function(_,g){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,m){h.__proto__=m}||function(h,m){for(var x in m)Object.prototype.hasOwnProperty.call(m,x)&&(h[x]=m[x])})(_,g)};return function(_,g){function h(){this.constructor=_}if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(_,g),_.prototype=g===null?Object.create(g):(h.prototype=g.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeMesh=void 0;var l=r(11),s=r(13),o=r(14),f=r(3),c=r(1),u=r(15),d=function(p){function _(){var g=p!==null&&p.apply(this,arguments)||this;return g.verticesMap=new u.TMap,g.uvsAndColorUpdate=!1,g}return a(_,p),_.prototype.setMesh=function(g){this.mesh=g,this.setVertices(),this.setFaces(),this.mergeVertices(),this.mergeFaces()},_.prototype.setVertices=function(){for(var g=this.getAttr("position"),h=0;h<g.count;h++){var m=new l.ThreeVertex,x=new c.Vector3().fromBufferAttribute(g,h);m.setVertex(x),this.vertices.push(m)}},_.prototype.setFaces=function(){var g=this.getAttr("index"),h=this.getAttr("position");if(g!==null)for(var m=0;m<g.count;m+=3){var x=new o.FaceProxy,y=g.getX(m),T=g.getX(m+1),w=g.getX(m+2),M=this.vertices[y],S=this.vertices[T],P=this.vertices[w];x.addVertices(M,S,P),this.faces.push(x)}else for(var m=0;m<h.count;m+=3){var x=new o.FaceProxy,y=m,T=m+1,w=m+2,M=this.vertices[y],S=this.vertices[T],P=this.vertices[w];x.addVertices(M,S,P),this.faces.push(x)}},_.prototype.mergeVertices=function(){for(var g=[],h=this.verticesMap,m=0;m<this.vertices.length;m++){var x=this.vertices[m],y=f.TMath.mappedKey(x);if(h.includeByValue(y)){var T=h.getToByValue(y);h.add(T,m,y)}else{var T=g.length;x.only=!0,g.push(x),h.add(T,m,y)}}this.vertices=g},_.prototype.mergeFaces=function(){for(var g=[],h=0,m=this.faces.length;h<m;h++){var x=this.faces[h],y=f.TMath.mappedKey(x.a),T=f.TMath.mappedKey(x.b),w=f.TMath.mappedKey(x.c),M=this.verticesMap.getToByValue(y),S=this.verticesMap.getToByValue(T),P=this.verticesMap.getToByValue(w);x.a=this.vertices[M],x.b=this.vertices[S],x.c=this.vertices[P];for(var O=[M,S,P],b=0;b<3;b++)if(O[b]===O[(b+1)%3]){g.push(h);break}}for(var h=g.length-1;h>=0;h--){var D=g[h];this.faces.splice(D,1)}},_.prototype.postApply=function(){this.updatePosition(),this.updateIndex(),this.computeBounding(),this.updateUvsAndColor()},_.prototype.updateUvsAndColor=function(){if(this.uvsAndColorUpdate){var g=this.getAttr("color");g&&(g.needsUpdate=!0);var h=this.getAttr("uv");h&&(h.needsUpdate=!0)}},_.prototype.computeBounding=function(){if(this.boundUpdate){var g=this.mesh.geometry;g.computeBoundingBox(),g.computeBoundingSphere()}},_.prototype.updatePosition=function(){var g,h,m,x,y,T=this.getAttr("position"),w=this.vertices.length;for(m=0;m<w;m++)for(h=this.vertices[m],g=this.verticesMap.getFromByTo(m),x=0;x<g.length;x++)y=g[x],T.setX(y,h.x),T.setY(y,h.y),T.setZ(y,h.z);T.needsUpdate=!0},_.prototype.updateIndex=function(){if(this.indexUpdate){var g=this.getAttr("index");g&&(g.needsUpdate=!0)}},_.prototype.getAttr=function(g){var h=this.mesh.geometry;return g==="index"?h.getIndex():h.getAttribute(g)},_.prototype.updateMeshPosition=function(g){this.mesh.position.x+=g.x,this.mesh.position.y+=g.y,this.mesh.position.z+=g.z},_.prototype.destroy=function(){p.prototype.destroy.call(this),this.verticesMap.destroy(),this.verticesMap=null,this.mesh=null},_}(s.MeshProxy);n.ThreeMesh=d},function(t,n,r){var a=this&&this.__extends||function(){var o=function(f,c){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])})(f,c)};return function(f,c){function u(){this.constructor=f}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");o(f,c),f.prototype=c===null?Object.create(c):(u.prototype=c.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeVertex=void 0;var l=r(12),s=function(o){function f(){var c=o.call(this)||this;return c.only=!1,c}return a(f,o),f.prototype.setVertex=function(c){this.vertor=c,this.ox=this.vertor.x,this.oy=this.vertor.y,this.oz=this.vertor.z},Object.defineProperty(f.prototype,"x",{get:function(){return this.vertor.x},set:function(c){this.vertor.x=c},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"y",{get:function(){return this.vertor.y},set:function(c){this.vertor.y=c},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"z",{get:function(){return this.vertor.z},set:function(c){this.vertor.z=c},enumerable:!1,configurable:!0}),f.prototype.toString=function(){return o.prototype.toString.call(this)+" only:"+this.only},f}(l.VertexProxy);n.ThreeVertex=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VertexProxy=void 0;var a=r(1),l=r(2),s=function(){function o(){this.id=""}return o.prototype.setVertex=function(f){},o.prototype.setRatios=function(f,c,u){this._ratioX=f,this._ratioY=c,this._ratioZ=u},o.prototype.setOriginalPosition=function(f,c,u){this.ox=f,this.oy=c,this.oz=u},Object.defineProperty(o.prototype,"x",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"y",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"z",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),o.prototype.getValue=function(f){switch(f){case l.ModConstant.X:return this.x;case l.ModConstant.Y:return this.y;case l.ModConstant.Z:return this.z}return 0},o.prototype.setValue=function(f,c){switch(f){case l.ModConstant.X:this.x=c;break;case l.ModConstant.Y:this.y=c;break;case l.ModConstant.Z:this.z=c}},Object.defineProperty(o.prototype,"ratioX",{get:function(){return this._ratioX},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioY",{get:function(){return this._ratioY},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioZ",{get:function(){return this._ratioZ},enumerable:!1,configurable:!0}),o.prototype.getRatio=function(f){switch(f){case l.ModConstant.X:return this._ratioX;case l.ModConstant.Y:return this._ratioY;case l.ModConstant.Z:return this._ratioZ}return-1},Object.defineProperty(o.prototype,"originalX",{get:function(){return this.ox},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalY",{get:function(){return this.oy},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalZ",{get:function(){return this.oz},enumerable:!1,configurable:!0}),o.prototype.getOriginalValue=function(f){switch(f){case l.ModConstant.X:return this.ox;case l.ModConstant.Y:return this.oy;case l.ModConstant.Z:return this.oz}return 0},o.prototype.reset=function(){this.x=this.ox,this.y=this.oy,this.z=this.oz},o.prototype.collapse=function(){this.ox=this.x,this.oy=this.y,this.oz=this.z},Object.defineProperty(o.prototype,"vector",{get:function(){return new a.Vector3(this.x,this.y,this.z)},set:function(f){this.x=f.x,this.y=f.y,this.z=f.z},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioVector",{get:function(){return new a.Vector3(this.ratioX,this.ratioY,this.ratioZ)},enumerable:!1,configurable:!0}),o.prototype.toString=function(){return"Vertex id:"+this.id+" xyz:"+this.x+" "+this.y+" "+this.z},o}();n.VertexProxy=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MeshProxy=void 0;var a=r(2),l=function(){function s(){this.boundUpdate=!1,this.indexUpdate=!1,this.uvsAndColorUpdate=!1,this.vertices=[],this.faces=[]}return s.prototype.setMesh=function(o){},s.prototype.updateMeshPosition=function(o){},s.prototype.getVertices=function(){return this.vertices},s.prototype.getFaces=function(){return this.faces},s.prototype.analyzeGeometry=function(){for(var o,f=this.getVertices().length,c=0;c<f;c++)o=this.getVertices()[c],c==0?(this._minX=this._maxX=o.x,this._minY=this._maxY=o.y,this._minZ=this._maxZ=o.z):(this._minX=Math.min(this._minX,o.x),this._minY=Math.min(this._minY,o.y),this._minZ=Math.min(this._minZ,o.z),this._maxX=Math.max(this._maxX,o.x),this._maxY=Math.max(this._maxY,o.y),this._maxZ=Math.max(this._maxZ,o.z)),o.setOriginalPosition(o.x,o.y,o.z);this._width=this._maxX-this._minX,this._height=this._maxY-this._minY,this._depth=this._maxZ-this._minZ;var u=Math.max(this._width,Math.max(this._height,this._depth)),d=Math.min(this._width,Math.min(this._height,this._depth));u==this._width&&d==this._height?(this._minAxis=a.ModConstant.Y,this._midAxis=a.ModConstant.Z,this._maxAxis=a.ModConstant.X):u==this._width&&d==this._depth?(this._minAxis=a.ModConstant.Z,this._midAxis=a.ModConstant.Y,this._maxAxis=a.ModConstant.X):u==this._height&&d==this._width?(this._minAxis=a.ModConstant.X,this._midAxis=a.ModConstant.Z,this._maxAxis=a.ModConstant.Y):u==this._height&&d==this._depth?(this._minAxis=a.ModConstant.Z,this._midAxis=a.ModConstant.X,this._maxAxis=a.ModConstant.Y):u==this._depth&&d==this._width?(this._minAxis=a.ModConstant.X,this._midAxis=a.ModConstant.Y,this._maxAxis=a.ModConstant.Z):u==this._depth&&d==this._height&&(this._minAxis=a.ModConstant.Y,this._midAxis=a.ModConstant.X,this._maxAxis=a.ModConstant.Z);for(var c=0;c<f;c++)o=this.getVertices()[c],o.setRatios((o.x-this._minX)/this._width,(o.y-this._minY)/this._height,(o.z-this._minZ)/this._depth)},s.prototype.resetGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].reset()},s.prototype.collapseGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].collapse();this.analyzeGeometry()},Object.defineProperty(s.prototype,"minX",{get:function(){return this._minX},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minY",{get:function(){return this._minY},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minZ",{get:function(){return this._minZ},enumerable:!1,configurable:!0}),s.prototype.getMin=function(o){switch(o){case a.ModConstant.X:return this._minX;case a.ModConstant.Y:return this._minY;case a.ModConstant.Z:return this._minZ}return-1},Object.defineProperty(s.prototype,"maxX",{get:function(){return this._maxX},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"maxY",{get:function(){return this._maxY},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"maxZ",{get:function(){return this._maxZ},enumerable:!1,configurable:!0}),s.prototype.getMax=function(o){switch(o){case a.ModConstant.X:return this._maxX;case a.ModConstant.Y:return this._maxY;case a.ModConstant.Z:return this._maxZ}return-1},Object.defineProperty(s.prototype,"maxAxis",{get:function(){return this._maxAxis},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"midAxis",{get:function(){return this._midAxis},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minAxis",{get:function(){return this._minAxis},enumerable:!1,configurable:!0}),s.prototype.getSize=function(o){switch(o){case a.ModConstant.X:return this._width;case a.ModConstant.Y:return this._height;case a.ModConstant.Z:return this._depth}return-1},Object.defineProperty(s.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"depth",{get:function(){return this._depth},enumerable:!1,configurable:!0}),s.prototype.postApply=function(){},s.prototype.destroy=function(){this.vertices.length=0,this.faces.length=0},s}();n.MeshProxy=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FaceProxy=void 0;var a=function(){function l(){this._vertices=[]}return Object.defineProperty(l.prototype,"a",{get:function(){return this._vertices[0]},set:function(s){this._vertices[0]=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"b",{get:function(){return this._vertices[1]},set:function(s){this._vertices[1]=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"c",{get:function(){return this._vertices[2]},set:function(s){this._vertices[2]=s},enumerable:!1,configurable:!0}),l.prototype.addVertex=function(s){this._vertices.push(s)},l.prototype.addVertices=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];for(var f=0;f<s.length;f++)this.addVertex(s[f])},l.prototype.addABC=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];for(var f=0;f<s.length;f++)this.addVertex(s[f])},Object.defineProperty(l.prototype,"vertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),l.prototype.toString=function(){for(var s="",o=0;o<this._vertices.length;o++)s+=o+":"+this._vertices[o]+" ";return s},l}();n.FaceProxy=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMap=void 0;var a=function(){function s(){this.from=[]}return s.prototype.push=function(o){this.from.push(o)},s}(),l=function(){function s(){this._map={}}return s.prototype.add=function(o,f,c){var u="t_"+o;this._map[u]||(this._map[u]=new a),this._map[u].push(f),this._map[u].to=o,this._map[u].value=c},s.prototype.getToByValue=function(o){var f=this.getItemByValue(o);return f?f.to:-1},s.prototype.getFromByTo=function(o){var f=this.getItemByTo(o);return f?f.from:null},s.prototype.includeByValue=function(o){return!!this.getItemByValue(o)},s.prototype.getItemByValue=function(o){for(var f in this._map){var c=this._map[f];if(c.value===o)return c}return null},s.prototype.getItemByTo=function(o){var f="t_"+o;return this._map[f]},s.prototype.destroy=function(){for(var o in this._map)delete this._map[o]},s}();n.TMap=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Phase=void 0;var a=function(){function l(s){s===void 0&&(s=0),this.v=s}return Object.defineProperty(l.prototype,"value",{get:function(){return this.v},set:function(s){this.v=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"phasedValue",{get:function(){return Math.sin(this.v)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"absPhasedValue",{get:function(){return Math.abs(this.phasedValue)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"normValue",{get:function(){return(this.phasedValue+1)/2},enumerable:!1,configurable:!0}),l}();n.Phase=a},function(t,n,r){var a=this&&this.__extends||function(){var u=function(d,p){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(_[h]=g[h])})(d,p)};return function(d,p){function _(){this.constructor=d}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");u(d,p),d.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bend=void 0;var l=r(2),s=r(0),o=r(5),f=r(18),c=function(u){function d(p,_,g){p===void 0&&(p=0),_===void 0&&(_=.5),g===void 0&&(g=0);var h=u.call(this)||this;return h._constraint=l.ModConstant.NONE,h.switchAxes=!1,h._force=p,h._offset=_,h.angle=g,h}return a(d,u),d.prototype.setModifiable=function(p){u.prototype.setModifiable.call(this,p),this.max=this.switchAxes?p.midAxis:p.maxAxis,this.min=p.minAxis,this.mid=this.switchAxes?p.maxAxis:p.midAxis,this.width=p.getSize(this.max),this.height=p.getSize(this.mid),this.origin=p.getMin(this.max),this._diagAngle=Math.atan(this.width/this.height)},Object.defineProperty(d.prototype,"force",{get:function(){return this._force},set:function(p){this._force=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"constraint",{get:function(){return this._constraint},set:function(p){this._constraint=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"diagAngle",{get:function(){return this._diagAngle},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"angle",{get:function(){return this._angle},set:function(p){this._angle=p,this.m1=new f.Matrix(1,0,0,1),this.m1.rotate(this._angle),this.m2=new f.Matrix(1,0,0,1),this.m2.rotate(-this._angle)},enumerable:!1,configurable:!0}),d.prototype.apply=function(){if(this.force!=0)for(var p=this.mod.getVertices(),_=p.length,g=this.origin+this.width*this.offset,h=this.width/Math.PI/this.force,m=2*Math.PI*(this.width/(h*Math.PI*2)),x=0;x<_;x++){var y=p[x],T=y.getValue(this.max),w=y.getValue(this.mid),M=y.getValue(this.min),S=this.m1.transformPoint(new o.Vector2(T,w));T=S.x,w=S.y;var P=(T-this.origin)/this.width;if(!(this.constraint==l.ModConstant.LEFT&&P<=this.offset||this.constraint==l.ModConstant.RIGHT&&P>=this.offset)){var O=Math.PI/2-m*this.offset+m*P,b=Math.sin(O)*(h+M),D=Math.cos(O)*(h+M);M=b-h,T=g-D}var F=this.m2.transformPoint(new o.Vector2(T,w));T=F.x,w=F.y,y.setValue(this.max,T),y.setValue(this.mid,w),y.setValue(this.min,M)}},d}(s.Modifier);n.Bend=c},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix=void 0;var a=r(5),l=function(){function s(o,f,c,u){this.m=[o,f,c,u]}return s.prototype.dispose=function(){return this.m.length=0,this},s.prototype.reset=function(){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this},s.prototype.rotate=function(o){var f=Math.cos(o),c=Math.sin(o);return this.m[0]=f,this.m[1]=-c,this.m[2]=c,this.m[3]=f,this},s.prototype.scale=function(o,f){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,o!==void 0&&(this.m[0]=o,this.m[3]=o),f!==void 0&&(this.m[3]=f),this},s.prototype.multiply=function(o){return s.mult(this,o)},s.prototype.transformPoint=function(o){var f=s.transform(this,[o.x,o.y]);return new a.Vector2(f[0],f[1])},s.prototype.transformPointSelf=function(o){var f=s.transform(this,[o.x,o.y]);return o.x=f[0],o.y=f[1],o},s.prototype.clone=function(){var o=this.m;return new s(o[0],o[1],o[2],o[3])},s.transform=function(o,f){var c=o.m,u=f[0],d=f[1];return f[0]=c[0]*u+c[1]*d,f[1]=c[2]*u+c[3]*d,f},s.mult=function(o,f){var c=o.m,u=f.m,d=c[0],p=c[1],_=c[2],g=c[3];return c[0]=d*u[0]+p*u[2],c[1]=d*u[1]+p*u[3],c[2]=_*u[0]+g*u[2],c[3]=_*u[1]+g*u[3],o},s}();n.Matrix=l},function(t,n,r){var a=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bloat=void 0;var l=r(1),s=r(0),o=function(f){function c(){var u=f!==null&&f.apply(this,arguments)||this;return u._center=l.Vector3.ZERO,u._r=0,u._a=.01,u._u=l.Vector3.ZERO,u}return a(c,f),Object.defineProperty(c.prototype,"center",{get:function(){return this._center},set:function(u){this._center=u},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"radius",{get:function(){return this._r},set:function(u){this._r=Math.max(0,u)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"a",{get:function(){return this._a},set:function(u){this._a=Math.max(0,u)},enumerable:!1,configurable:!0}),c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=0,p=u;d<p.length;d++){var _=p[d],g=_;this._u.x=g.x-this._center.x,this._u.y=g.y-this._center.y,this._u.z=g.z-this._center.z,this._u.magnitude+=this._r*Math.exp(-this._u.magnitude*this._a),g.x=this._u.x+this._center.x,g.y=this._u.y+this._center.y,g.z=this._u.z+this._center.z}},c}(s.Modifier);n.Bloat=o},function(t,n,r){var a=this&&this.__extends||function(){var u=function(d,p){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(_[h]=g[h])})(d,p)};return function(d,p){function _(){this.constructor=d}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");u(d,p),d.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Break=void 0;var l=r(6),s=r(1),o=r(4),f=r(0),c=function(u){function d(p,_){p===void 0&&(p=0),_===void 0&&(_=0);var g=u.call(this)||this;return g.bv=new s.Vector3(0,1,0),g.range=new l.Range(0,1),g.angle=_,g._offset=p,g}return a(d,u),d.prototype.apply=function(){for(var p=this.mod.getVertices(),_=p.length,g=new s.Vector3(0,0,-(this.mod.minZ+this.mod.depth*this.offset)),h=0;h<_;h++){var m=p[h],x=m.vector;if(x=x.add(g),x.z>=0&&this.range.isIn(m.ratioY)){var y=this.angle,T=o.Matrix4.rotationMatrix(this.bv.x,this.bv.y,this.bv.z,y);o.Matrix4.multiplyVector(T,x)}var w=g.negate();x=x.add(w),m.x=x.x,m.y=x.y,m.z=x.z}},Object.defineProperty(d.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),d}(f.Modifier);n.Break=c},function(t,n,r){var a=this&&this.__extends||function(){var d=function(p,_){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,h){g.__proto__=h}||function(g,h){for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&(g[m]=h[m])})(p,_)};return function(p,_){function g(){this.constructor=p}if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");d(p,_),p.prototype=_===null?Object.create(_):(g.prototype=_.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Cloth=void 0;var l=r(2),s=r(22),o=r(0),f=r(23),c=r(24),u=function(d){function p(_,g){_===void 0&&(_=1),g===void 0&&(g=0);var h=d.call(this)||this;return h._forceX=0,h._forceY=0,h._forceZ=0,h._dic=new s.Dictionary,h._rigidity=_,h.friction=g,h}return a(p,d),p.prototype.setBounds=function(_,g,h,m,x,y){_===void 0&&(_=Number.NEGATIVE_INFINITY),g===void 0&&(g=Number.POSITIVE_INFINITY),h===void 0&&(h=Number.NEGATIVE_INFINITY),m===void 0&&(m=Number.POSITIVE_INFINITY),x===void 0&&(x=Number.NEGATIVE_INFINITY),y===void 0&&(y=Number.POSITIVE_INFINITY),this._useBounds=!0,this._boundsMinX=_,this._boundsMaxX=g,this._boundsMinY=h,this._boundsMaxY=m,this._boundsMinZ=x,this._boundsMaxZ=y},p.prototype.clearBounds=function(){this._useBounds=!1},Object.defineProperty(p.prototype,"verletVertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"friction",{get:function(){return 100*(this._friction-1)},set:function(_){_<0&&(_=0),this._friction=_/100+1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"rigidity",{get:function(){return this._rigidity},set:function(_){var g,h,m=this._connections.length;for(_>1?_=1:_<0&&(_=0),this._rigidity=_,g=.5*_;h=this._connections[--m];)h.rigidity=g},enumerable:!1,configurable:!0}),p.prototype.setForce=function(_,g,h){this._forceX=_,this._forceY=g,this._forceZ=h},Object.defineProperty(p.prototype,"forceX",{get:function(){return this._forceX},set:function(_){this._forceX=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceY",{get:function(){return this._forceY},set:function(_){this._forceY=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceZ",{get:function(){return this._forceZ},set:function(_){this._forceZ=_},enumerable:!1,configurable:!0}),p.prototype.unlockAll=function(){for(var _,g=this._vertices.length;_=this._vertices[--g];)_.mobileX=!0,_.mobileY=!0,_.mobileZ=!0},p.prototype.lockXMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minX,"x",_,g)},p.prototype.lockXMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxX,"x",_,g)},p.prototype.lockYMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minY,"y",_,g)},p.prototype.lockYMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxY,"y",_,g)},p.prototype.lockZMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minZ,"z",_,g)},p.prototype.lockZMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxZ,"z",_,g)},p.prototype.lockSet=function(_,g,h,m){h===void 0&&(h=0),m===void 0&&(m=7);for(var x,y=this._vertices.length;x=this._vertices[--y];)Math.abs(x[g]-_)<=h&&(m&l.ModConstant.X&&(x.mobileX=!1),m&l.ModConstant.Y&&(x.mobileY=!1),m&l.ModConstant.Z&&(x.mobileZ=!1))},p.prototype.setModifiable=function(_){d.prototype.setModifiable.call(this,_),this.initVerletVertices(),this.initVerletConnections(),this.rigidity=this._rigidity},p.prototype.apply=function(){var _,g,h;for(_=this._connections.length;g=this._connections[--_];)g.update();for(_=this._vertices.length;h=this._vertices[--_];)h.mobileX&&(h.x+=this._forceX),h.mobileY&&(h.y+=this._forceY),h.mobileZ&&(h.z+=this._forceZ),h.velocityX/=this._friction,h.velocityY/=this._friction,h.velocityZ/=this._friction,this._useBounds&&(h.x<this._boundsMinX?h.x=this._boundsMinX:h.x>this._boundsMaxX&&(h.x=this._boundsMaxX),h.y<this._boundsMinY?h.y=this._boundsMinY:h.y>this._boundsMaxY&&(h.y=this._boundsMaxY),h.z<this._boundsMinZ?h.z=this._boundsMinZ:h.z>this._boundsMaxZ&&(h.z=this._boundsMaxZ)),h.update()},p.prototype.initVerletVertices=function(){var _,g=this.mod.getVertices(),h=g.length;for(this._vertices=[];_=g[--h];){var m=new c.VerletVertex(_);this._vertices.push(m),this._dic.setVal(_,m)}},p.prototype.initVerletConnections=function(){var _,g,h,m=this.mod.getFaces(),x=m.length;this._connections=[];for(var y=0;y<x;y++){_=m[y],g=_.vertices,h=g.length;for(var T=0;T<h-1;T++)this.createConnection(this._dic.getVal(g[T]),this._dic.getVal(g[T+1])),T>1&&this.createConnection(this._dic.getVal(g[0]),this._dic.getVal(g[T]));this.createConnection(this._dic.getVal(g[h-1]),this._dic.getVal(g[0]))}},p.prototype.createConnection=function(_,g){if(_&&g){var h=_.distanceTo(g),m=new f.VerletConnection(_,g,h,this._rigidity);this._connections.push(m)}},p}(o.Modifier);n.Cloth=u},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Dictionary=void 0;var a=function(){function l(){this.dic={}}return l.prototype.setVal=function(s,o){var f=this.getKey(s);this.dic[f]=o},l.prototype.getVal=function(s){var o=this.getKey(s);return this.dic[o]},l.prototype.getKey=function(s){if(typeof s=="object"){if(s.id)return s.id;var o="d_"+Math.floor(Math.random()*Math.pow(10,10));return s.id=o,o}return s+""},l}();n.Dictionary=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletConnection=void 0;var a=function(){function l(s,o,f,c){c===void 0&&(c=.5),this._rigidity=.5,this._v1=s,this._v2=o,this._strictDistance=f,this._rigidity=c}return Object.defineProperty(l.prototype,"rigidity",{get:function(){return this._rigidity},set:function(s){this._rigidity=s},enumerable:!1,configurable:!0}),l.prototype.update=function(){var s,o,f,c,u=this._v1.x,d=this._v2.x,p=this._v1.y,_=this._v2.y,g=this._v1.z,h=this._v2.z,m=d-u,x=_-p,y=h-g,T=Math.sqrt(m*m+x*x+y*y);T!=this._strictDistance&&(s=(this._strictDistance-T)/T*this._rigidity,o=s*m,f=s*x,c=s*y,this._v1.mobileX&&this._v2.mobileX||(o*=2),this._v1.mobileY&&this._v2.mobileY||(f*=2),this._v1.mobileZ&&this._v2.mobileZ||(c*=2),this._v1.mobileX&&(this._v1.x-=o),this._v1.mobileY&&(this._v1.y-=f),this._v1.mobileZ&&(this._v1.z-=c),this._v2.mobileX&&(this._v2.x+=o),this._v2.mobileY&&(this._v2.y+=f),this._v2.mobileZ&&(this._v2.z+=c))},l}();n.VerletConnection=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletVertex=void 0;var a=function(){function l(s){this.mobileX=!0,this.mobileY=!0,this.mobileZ=!0,this._v=s,this.setPosition(this._v.x,this._v.y,this._v.z)}return l.prototype.setPosition=function(s,o,f){this._x=this._oldX=s,this._y=this._oldY=o,this._z=this._oldZ=f,this._v.x=s,this._v.y=o,this._v.z=f},l.prototype.update=function(){var s,o,f;this.mobileX&&(s=this.x,this.x+=this.velocityX,this._oldX=s),this.mobileY&&(o=this.y,this.y+=this.velocityY,this._oldY=o),this.mobileZ&&(f=this.z,this.z+=this.velocityZ,this._oldZ=f)},Object.defineProperty(l.prototype,"x",{get:function(){return this._x},set:function(s){this._x=s,this.mobileX||(this._oldX=s),this._v.x=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"y",{get:function(){return this._y},set:function(s){this._y=s,this.mobileY||(this._oldY=s),this._v.y=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"z",{get:function(){return this._z},set:function(s){this._z=s,this.mobileZ||(this._oldZ=s),this._v.z=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityX",{get:function(){return this._x-this._oldX},set:function(s){this._oldX=this._x-s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityY",{get:function(){return this._y-this._oldY},set:function(s){this._oldY=this._y-s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityZ",{get:function(){return this._z-this._oldZ},set:function(s){this._oldZ=this._z-s},enumerable:!1,configurable:!0}),l.prototype.distanceTo=function(s){return Math.sqrt((this.x-s.x)*(this.x-s.x)+(this.y-s.y)*(this.y-s.y)+(this.z-s.z)*(this.z-s.z))},l}();n.VerletVertex=a},function(t,n,r){var a=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Noise=void 0;var l=r(2),s=r(0),o=function(f){function c(u){u===void 0&&(u=0);var d=f.call(this)||this;return d.axc=l.ModConstant.NONE,d.start=0,d.end=0,d.frc=u,d}return a(c,f),Object.defineProperty(c.prototype,"force",{get:function(){return this.frc},set:function(u){this.frc=u},enumerable:!1,configurable:!0}),c.prototype.constraintAxes=function(u){this.axc=u},c.prototype.setFalloff=function(u,d){u===void 0&&(u=0),d===void 0&&(d=1),this.start=u,this.end=d},c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p],g=Math.random()*this.force-this.force/2,h=_.getRatio(this.mod.maxAxis);this.start<this.end?(h<this.start&&(h=0),h>this.end&&(h=1)):this.start>this.end?(h=1-h,h>this.start&&(h=0),h<this.end&&(h=1)):h=1,1&this.axc||(_.x+=g*h),this.axc>>1&1||(_.y+=g*h),this.axc>>2&1||(_.z+=g*h)}},c}(s.Modifier);n.Noise=o},function(t,n,r){var a=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Pivot=void 0;var l=r(1),s=r(0),o=function(f){function c(u,d,p){u===void 0&&(u=0),d===void 0&&(d=0),p===void 0&&(p=0);var _=f.call(this)||this;return _.pivot=new l.Vector3(u,d,p),_}return a(c,f),c.prototype.setMeshCenter=function(){var u=-(this.mod.minX+this.mod.width/2),d=-(this.mod.minY+this.mod.height/2),p=-(this.mod.minZ+this.mod.depth/2);this.pivot=new l.Vector3(u,d,p)},c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p];_.vector=_.vector.add(this.pivot)}var g=this.pivot.clone();this.mod.updateMeshPosition(g.negate())},c}(s.Modifier);n.Pivot=o},function(t,n,r){var a=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Skew=void 0;var l=r(3),s=r(2),o=r(0),f=function(c){function u(d){d===void 0&&(d=0);var p=c.call(this)||this;return p._offset=.5,p._constraint=s.ModConstant.NONE,p._power=1,p._falloff=1,p._inverseFalloff=!1,p._oneSide=!1,p._swapAxes=!1,p._force=d,p}return a(u,c),u.prototype.setModifiable=function(d){c.prototype.setModifiable.call(this,d),this._skewAxis=this._skewAxis||d.maxAxis},u.prototype.apply=function(){for(var d=this.mod.getVertices(),p=d.length,_=0;_<p;_++){var g=d[_];if(!(this._constraint==s.ModConstant.LEFT&&g.getRatio(this._skewAxis)<=this._offset)&&!(this._constraint==s.ModConstant.RIGHT&&g.getRatio(this._skewAxis)>this._offset)){var h=g.getRatio(this._skewAxis)-this._offset;this._oneSide&&(h=Math.abs(h));var m=g.getRatio(this.displaceAxis);this._inverseFalloff&&(m=1-m);var x=this._falloff+m*(1-this._falloff),y=Math.pow(Math.abs(h),this._power)*l.TMath.sign(h,1),T=g.getValue(this.displaceAxis)+this.force*y*x;g.setValue(this.displaceAxis,T)}}},Object.defineProperty(u.prototype,"displaceAxis",{get:function(){switch(this._skewAxis){case s.ModConstant.X:return this._swapAxes?s.ModConstant.Z:s.ModConstant.Y;case s.ModConstant.Y:return this._swapAxes?s.ModConstant.Z:s.ModConstant.X;case s.ModConstant.Z:return this._swapAxes?s.ModConstant.Y:s.ModConstant.X;default:return 0}},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"force",{get:function(){return this._force},set:function(d){this._force=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"constraint",{get:function(){return this._constraint},set:function(d){this._constraint=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"offset",{get:function(){return this._offset},set:function(d){this._offset=l.TMath.trim(0,1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"power",{get:function(){return this._power},set:function(d){this._power=Math.max(1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"falloff",{get:function(){return this._falloff},set:function(d){this._falloff=l.TMath.trim(0,1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"oneSide",{get:function(){return this._oneSide},set:function(d){this._oneSide=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"skewAxis",{get:function(){return this._skewAxis},set:function(d){this._skewAxis=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"swapAxes",{get:function(){return this._swapAxes},set:function(d){this._swapAxes=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"inverseFalloff",{get:function(){return this._inverseFalloff},set:function(d){this._inverseFalloff=d},enumerable:!1,configurable:!0}),u}(o.Modifier);n.Skew=f},function(t,n,r){var a=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Taper=void 0;var l=r(4),s=r(1),o=r(0),f=function(c){function u(d){var p=c.call(this)||this;return p.start=0,p.end=1,p._vector=new s.Vector3(1,0,1),p._vector2=new s.Vector3(0,1,0),p.frc=d,p.pow=1,p}return a(u,c),u.prototype.setFalloff=function(d,p){d===void 0&&(d=0),p===void 0&&(p=1),this.start=d,this.end=p},Object.defineProperty(u.prototype,"force",{get:function(){return this.frc},set:function(d){this.frc=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"power",{get:function(){return this.pow},set:function(d){this.pow=d},enumerable:!1,configurable:!0}),u.prototype.apply=function(){for(var d=this.mod.getVertices(),p=d.length,_=0;_<p;_++){var g=d[_],h=g.ratioVector.multiply(this._vector2),m=this.frc*Math.pow(h.magnitude,this.pow),x=l.Matrix4.scaleMatrix(1+m*this._vector.x,1+m*this._vector.y,1+m*this._vector.z),y=g.vector;l.Matrix4.multiplyVector(x,y),g.vector=y}},u}(o.Modifier);n.Taper=f},function(t,n,r){var a=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Twist=void 0;var l=r(4),s=r(1),o=r(0),f=function(c){function u(d){d===void 0&&(d=0);var p=c.call(this)||this;return p._vector=new s.Vector3(0,1,0),p.center=s.Vector3.ZERO,p._angle=d,p}return a(u,c),Object.defineProperty(u.prototype,"angle",{get:function(){return this._angle},set:function(d){this._angle=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"vector",{get:function(){return this._vector},set:function(d){this._vector=d},enumerable:!1,configurable:!0}),u.prototype.apply=function(){this._vector.normalize();for(var d=new s.Vector3(this.mod.maxX/2,this.mod.maxY/2,this.mod.maxZ/2),p=-s.Vector3.dot(this._vector,this.center),_=0;_<this.mod.getVertices().length;_++){var g=this.mod.getVertices()[_],h=s.Vector3.dot(new s.Vector3(g.x,g.y,g.z),this._vector)+p;this.twistPoint(g,h/d.magnitude*this._angle)}},u.prototype.twistPoint=function(d,p){var _=l.Matrix4.translationMatrix(d.x,d.y,d.z);_=l.Matrix4.multiply(l.Matrix4.rotationMatrix(this._vector.x,this._vector.y,this._vector.z,p),_),d.x=_.n14,d.y=_.n24,d.z=_.n34},u}(o.Modifier);n.Twist=f},function(t,n,r){var a=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Wheel=void 0;var l=r(4),s=r(1),o=r(0),f=function(c){function u(){var d=c.call(this)||this;return d.steerVector=new s.Vector3(0,1,0),d.rollVector=new s.Vector3(0,0,1),d.speed=0,d.turn=0,d.roll=0,d}return a(u,c),u.prototype.setModifiable=function(d){c.prototype.setModifiable.call(this,d),this._radius=d.width/2},u.prototype.apply=function(){this.roll+=this.speed;var d,p,_=this.mod.getVertices(),g=_.length;if(this.turn!=0){p=l.Matrix4.rotationMatrix(this.steerVector.x,this.steerVector.y,this.steerVector.z,this.turn);var h=this.rollVector.clone();l.Matrix4.multiplyVector(p,h),d=l.Matrix4.rotationMatrix(h.x,h.y,h.z,this.roll)}else d=l.Matrix4.rotationMatrix(this.rollVector.x,this.rollVector.y,this.rollVector.z,this.roll);for(var m=0;m<g;m++){var x=_[m],y=x.vector.clone();this.turn!=0&&l.Matrix4.multiplyVector(p,y),l.Matrix4.multiplyVector(d,y),x.x=y.x,x.y=y.y,x.z=y.z}},Object.defineProperty(u.prototype,"step",{get:function(){return this._radius*this.speed/Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"perimeter",{get:function(){return 2*this._radius*Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),u}(o.Modifier);n.Wheel=f},function(t,n,r){var a=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.UserDefined=void 0;var l=r(0),s=r(32),o=function(f){function c(){var u=f.call(this)||this;return u.eventEmitter=new s.EventEmitter,u}return a(c,f),c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p];this.renderVector&&this.renderVector(_,p,d)}this.dispatchEvent("CHANGE")},c.prototype.addEventListener=function(u,d){this.eventEmitter.on(u,d)},c.prototype.dispatchEvent=function(u){return this.eventEmitter.emit(u)},c.prototype.hasEventListener=function(u){return this.eventEmitter.has(u)},c.prototype.removeEventListener=function(u,d){this.eventEmitter.off(u,d)},c}(l.Modifier);n.UserDefined=o},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.EventEmitter=void 0;var a=function(){function s(){}return s.prototype.on=function(o,f){return l||(l={}),l[o]||(l[o]=[]),l[o].push(f),f},s.prototype.emit=function(o){for(var f=[],c=1;c<arguments.length;c++)f[c-1]=arguments[c];var u=!1;if(o&&l){var d=l[o];if(!d)return u;d=d.slice();var p=d.length,_=Array.prototype.slice.call(arguments);for(_.shift();p--;){var g=d[p];u=u||g.apply(null,_)}}return!!u},s.prototype.one=function(o,f){var c=this,u=Array.prototype.slice.call(arguments,2),d=function(){c.off(o,d),f.apply(null,u)};this.on(o,d)},s.prototype.has=function(o){return!(!l||!l[o])},s.prototype.off=function(o,f){if(l&&l[o]){for(var c=l[o],u=0,d=c.length;u<d;u++)if(c[u].toString()==f.toString()){d==1?delete l[o]:c.splice(u,1);break}}},s.prototype.offAll=function(o){o?l&&delete l[o]:l=null},s}();n.EventEmitter=a;var l}])})})(zl);var ci=zl.exports;const Fo=i=>{for(var e=i.attributes.uv,t=0;t<e.count;t++){var n=e.getX(t),r=e.getY(t);e.setXY(t,1-n,r)}return i},Ii=new Nl({color:"#ffffff"});class Lm extends zt{constructor(e=10){super();let t=new zt(Pm([Fo(new bi(1,1,e,e)),Fo(new bi(1,1,e,e).rotateY(Math.PI))],!0),[Ii,Ii]);t.castShadow=!0,t.receiveShadow=!0,t.rotateX(Math.PI/2),t.position.x=.5,this.scale.z=-1,this.add(t),this.page=t,this.modifiers=new ci.ModifierStack(t),this.bend=new ci.Bend(0,0,0),this.bend.constraint=ci.ModConstant.LEFT,this.twist=new ci.Twist(0),this.twist.vector=new ci.Vector3(1,0,0),this.twist.center=new ci.Vector3(-.5,0,0),this.modifiers.addModifier(this.bend),this.modifiers.addModifier(this.twist)}setPageMaterial(e,t){this.page.material[t]=e}flip(e,t){this.rotation.z=Math.PI*e,this.bend.force=Math.min(-Math.sin(this.rotation.z)/2,-1e-4)*t,this.twist.angle=Math.sin(this.rotation.z)/10,this.modifiers.apply()}disposeMaterial(e){const t=this.page.material[e];t!==Ii&&t.dispose()}reset(){this.setPageMaterial(Ii,0),this.setPageMaterial(Ii,1)}dispose(e=!1){e&&(this.disposeMaterial(0),this.disposeMaterial(1)),this.page.geometry.dispose(),this.modifiers.destroy()}}class Dm extends zt{constructor(e){super(),this.pages=[],this.pool=[],this._url2Loader=new Map,this._currentProgress=0,this._flipDuration=(e==null?void 0:e.flipDuration)||1,this._ySpacing=(e==null?void 0:e.yBetweenPages)||.001,this._pageSubdivisions=(e==null?void 0:e.pageSubdivisions)||20,this.currentPage=0}setPages(e){if(e.length%2!==0)throw new RangeError(`The number of pages should be divisible by 2 (because one page has 2 faces). You called setPages with ${e.length} sources.`);for(;this.pages.length;){let n=this.pages.pop();n.reset(),this.pool.push(n),this.remove(n)}let t=Promise.resolve();for(let n=0;n<e.length;n+=2){const r=e[n],a=e[n+1];let l=this.pool.pop();l||(l=new Lm(this._pageSubdivisions)),this.add(l),l.position.y=-this._ySpacing*this.pages.length,this.pages.push(l),l.name=`Page#${this.pages.length}`,t=t.then(this.loadPages(r,a,l))}this.currentPage>this.pages.length*2-1&&(this._currentPage=this.pages.length*2-1,this._currentProgress=this.pages.length),this.flipPages()}get totalPages(){return this.pages.length*2}loadPages(e,t,n){return()=>Promise.all([this.loadPage(e,1,n),this.loadPage(t,0,n)])}loadPage(e,t,n){if(!e||e==="")return Promise.resolve();if(e instanceof Si)return n.setPageMaterial(e,t),Promise.resolve();const r=e;return this._url2Loader.has(r)||this._url2Loader.set(r,new Promise((a,l)=>{new dm().load(e,function(s){s.wrapS=s.wrapT=br,s.colorSpace=yt;const o=new Nl({map:s,roughness:.2,emissive:0});a(o)},void 0,s=>{a(null)})})),this._url2Loader.get(r).then(a=>{n.setPageMaterial(a,t)})}get currentPage(){return this._currentPage}set currentPage(e){let t=Math.ceil(e/2),n=t-this._currentProgress;this._stepSize=n/this._flipDuration,this._flipDirection=this._stepSize>0?1:-1,this._currentPage=Math.ceil(e),this._goalProgress=t,this.flipPages()}get progress(){return this._currentProgress}set progress(e){let t=this._currentProgress;this._currentProgress=Math.max(0,Math.min(e,this.pages.length)),this._currentPage=Math.floor(this._currentProgress*2),this._stepSize=0,this._flipDirection=this._currentProgress>t?1:-1,this.flipPages()}animate(e){this._stepSize!=0&&(this._currentProgress+=this._stepSize*e,(this._stepSize>0&&this._currentProgress>this._goalProgress||this._stepSize<0&&this._currentProgress<this._goalProgress)&&(this._currentProgress=this._goalProgress,this._stepSize=0),this.flipPages())}flipPage(e){var t=this.pages.indexOf(e);if(t<0)throw new ReferenceError("I don't own that page! Not mine!");const n=t*2,r=n+1;this.currentPage=this._currentPage<=n?r:n}nextPage(){this.currentPage=Math.min(Math.ceil(this.currentPage/2)+1,this.pages.length)*2}previousPage(){this.currentPage=Math.max(Math.ceil(this.currentPage/2)-1,0)*2}flipPages(){const e=this.pages.length;let t=this._currentProgress%1,n=Math.floor(this._currentProgress);for(let a=0;a<e;a++){const l=this.pages[a],s=n<a?0:n>a?1:t,o=s<.5?0:(s-.5)/.5,f=-this._ySpacing*(e-a),c=-this._ySpacing*a;l.flip(s,this._flipDirection),l.position.y=c+o*(f-c)}const r=n==0?-.5+.5*t:n==e-1?.5*t:n==e?.5:0;this.position.x=r*this.scale.x}dispose(){for(;this.pages.length;){let e=this.pages.pop();this.remove(e)}for(;this.pool.length;)this.pool.pop().dispose(!0);this._url2Loader.forEach(e=>e.then(t=>t.dispose())),this._url2Loader.clear()}}window.download=function(i,e,t){var n=window,r="application/octet-stream",a=t||r,l=i,s=document,o=s.createElement("a"),f=function(x){return String(x)},c=n.Blob||n.MozBlob||n.WebKitBlob||f,u=n.MSBlobBuilder||n.WebKitBlobBuilder||n.BlobBuilder,d=e||"download",p,_,g;if(String(this)==="true"&&(l=[l,a],a=l[0],l=l[1]),String(l).match(/^data\:[\w+\-]+\/[\w+\-]+[,;]/))return navigator.msSaveBlob?navigator.msSaveBlob(h(l),d):m(l);try{p=l instanceof c?l:new c([l],{type:a})}catch{u&&(_=new u,_.append([l]),p=_.getBlob(a))}function h(x){var y=x.split(/[:;,]/),T=y[1],w=y[2]=="base64"?atob:decodeURIComponent,M=w(y.pop()),S=M.length,P=0,O=new Uint8Array(S);for(P;P<S;++P)O[P]=M.charCodeAt(P);return new c([O],{type:T})}function m(x,y){if("download"in o)return o.href=x,o.setAttribute("download",d),o.innerHTML="downloading...",o.style.display="none",s.body.appendChild(o),setTimeout(function(){o.click(),s.body.removeChild(o),y===!0&&setTimeout(function(){n.URL.revokeObjectURL(o.href)},250)},66),!0;var T=s.createElement("iframe");s.body.appendChild(T),y||(x="data:"+x.replace(/^data:([\w\/\-\+]+)/,r)),T.src=x,setTimeout(function(){s.body.removeChild(T)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(p,d);if(n.URL)m(n.URL.createObjectURL(p),!0);else{if(typeof p=="string"||p.constructor===f)try{return m("data:"+a+";base64,"+n.btoa(p))}catch{return m("data:"+a+","+encodeURIComponent(p))}g=new FileReader,g.onload=function(x){m(this.result)},g.readAsDataURL(p)}return!0};(function(){var i=function(e){this.data=new Uint8Array(e),this.pos=0};i.prototype.seek=function(e){this.pos=e},i.prototype.writeBytes=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e[t]},i.prototype.writeByte=function(e){this.data[this.pos++]=e},i.prototype.writeU8=i.prototype.writeByte,i.prototype.writeU16BE=function(e){this.data[this.pos++]=e>>8,this.data[this.pos++]=e},i.prototype.writeDoubleBE=function(e){for(var t=new Uint8Array(new Float64Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeFloatBE=function(e){for(var t=new Uint8Array(new Float32Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeString=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e.charCodeAt(t)},i.prototype.writeEBMLVarIntWidth=function(e,t){switch(t){case 1:this.writeU8(128|e);break;case 2:this.writeU8(64|e>>8),this.writeU8(e);break;case 3:this.writeU8(32|e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 4:this.writeU8(16|e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 5:this.writeU8(8|e/4294967296&7),this.writeU8(e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;default:throw new RuntimeException("Bad EBML VINT size "+t)}},i.prototype.measureEBMLVarInt=function(e){if(e<128-1)return 1;if(e<16384-1)return 2;if(e<(1<<21)-1)return 3;if(e<(1<<28)-1)return 4;if(e<34359738367)return 5;throw new RuntimeException("EBML VINT size not supported "+e)},i.prototype.writeEBMLVarInt=function(e){this.writeEBMLVarIntWidth(e,this.measureEBMLVarInt(e))},i.prototype.writeUnsignedIntBE=function(e,t){switch(t===void 0&&(t=this.measureUnsignedInt(e)),t){case 5:this.writeU8(Math.floor(e/4294967296));case 4:this.writeU8(e>>24);case 3:this.writeU8(e>>16);case 2:this.writeU8(e>>8);case 1:this.writeU8(e);break;default:throw new RuntimeException("Bad UINT size "+t)}},i.prototype.measureUnsignedInt=function(e){return e<256?1:e<65536?2:e<1<<24?3:e<4294967296?4:5},i.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw"ArrayBufferDataStream's pos lies beyond end of buffer"},typeof It<"u"&&typeof It.exports<"u"?It.exports=i:window.ArrayBufferDataStream=i})();(function(){var i=function(e){return function(t){var n=[],r=Promise.resolve(),a=null,l=null;typeof FileWriter<"u"&&t instanceof FileWriter?a=t:e&&t&&(l=t),this.pos=0,this.length=0;function s(c){return new Promise(function(u,d){var p=new FileReader;p.addEventListener("loadend",function(){u(p.result)}),p.readAsArrayBuffer(c)})}function o(c){return new Promise(function(u,d){c instanceof Uint8Array?u(c):c instanceof ArrayBuffer||ArrayBuffer.isView(c)?u(new Uint8Array(c)):c instanceof Blob?u(s(c).then(function(p){return new Uint8Array(p)})):u(s(new Blob([c])).then(function(p){return new Uint8Array(p)}))})}function f(c){var u=c.byteLength||c.length||c.size;if(!Number.isInteger(u))throw"Failed to determine size of element";return u}this.seek=function(c){if(c<0)throw"Offset may not be negative";if(isNaN(c))throw"Offset may not be NaN";if(c>this.length)throw"Seeking beyond the end of file is not allowed";this.pos=c},this.write=function(c){var u={offset:this.pos,data:c,length:f(c)},d=u.offset>=this.length;this.pos+=u.length,this.length=Math.max(this.length,this.pos),r=r.then(function(){if(l)return new Promise(function(g,h){o(u.data).then(function(m){var x=0,y=Buffer.from(m.buffer),T=function(w,M,S){x+=M,x>=S.length?g():e.write(l,S,x,S.length-x,u.offset+x,T)};e.write(l,y,0,y.length,u.offset,T)})});if(a)return new Promise(function(g,h){a.onwriteend=g,a.seek(u.offset),a.write(new Blob([u.data]))});if(!d)for(var p=0;p<n.length;p++){var _=n[p];if(!(u.offset+u.length<=_.offset||u.offset>=_.offset+_.length)){if(u.offset<_.offset||u.offset+u.length>_.offset+_.length)throw new Error("Overwrite crosses blob boundaries");if(u.offset==_.offset&&u.length==_.length){_.data=u.data;return}else return o(_.data).then(function(g){return _.data=g,o(u.data)}).then(function(g){u.data=g,_.data.set(u.data,u.offset-_.offset)})}}n.push(u)})},this.complete=function(c){return l||a?r=r.then(function(){return null}):r=r.then(function(){for(var u=[],d=0;d<n.length;d++)u.push(n[d].data);return new Blob(u,{mimeType:c})}),r}}};typeof It<"u"&&typeof It.exports<"u"?It.exports=i(require("fs")):window.BlobBuffer=i(null)})();(function(){var i=function(e,t){function n(c,u){var d={};return[c,u].forEach(function(p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])}),d}function r(c){return typeof c!="string"||!c.match(/^data:image\/webp;base64,/i)?!1:window.atob(c.substring(23))}function a(c,u){var d=c.toDataURL("image/webp",{quality:u});return r(d)}function l(c){var u=c.indexOf("VP8 ");if(u==-1)throw"Failed to identify beginning of keyframe in WebP image";return u+=8,c.substring(u)}function s(c){this.value=c}function o(c){this.value=c}function f(c,u,d){if(Array.isArray(d))for(var p=0;p<d.length;p++)f(c,u,d[p]);else if(typeof d=="string")c.writeString(d);else if(d instanceof Uint8Array)c.writeBytes(d);else if(d.id)if(d.offset=c.pos+u,c.writeUnsignedIntBE(d.id),Array.isArray(d.data)){var _,g,h;d.size===-1?c.writeByte(255):(_=c.pos,c.writeBytes([0,0,0,0])),g=c.pos,d.dataOffset=g+u,f(c,u,d.data),d.size!==-1&&(h=c.pos,d.size=h-g,c.seek(_),c.writeEBMLVarIntWidth(d.size,4),c.seek(h))}else if(typeof d.data=="string")c.writeEBMLVarInt(d.data.length),d.dataOffset=c.pos+u,c.writeString(d.data);else if(typeof d.data=="number")d.size||(d.size=c.measureUnsignedInt(d.data)),c.writeEBMLVarInt(d.size),d.dataOffset=c.pos+u,c.writeUnsignedIntBE(d.data,d.size);else if(d.data instanceof o)c.writeEBMLVarInt(8),d.dataOffset=c.pos+u,c.writeDoubleBE(d.data.value);else if(d.data instanceof s)c.writeEBMLVarInt(4),d.dataOffset=c.pos+u,c.writeFloatBE(d.data.value);else if(d.data instanceof Uint8Array)c.writeEBMLVarInt(d.data.byteLength),d.dataOffset=c.pos+u,c.writeBytes(d.data);else throw"Bad EBML datatype "+typeof d.data;else throw"Bad EBML datatype "+typeof d.data}return function(c){var u=5e3,d=1,p=!1,_,g,h=[],m=0,x=0,y={quality:.95,fileWriter:null,fd:null,frameDuration:null,frameRate:null},T={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},w,M={id:17545,data:new o(0)},S,P=[],O=new t(c.fileWriter||c.fd);function b(X){return X-w.dataOffset}function D(){var X={id:21420,size:5,data:0},he={id:290298740,data:[]};for(var H in T){var ce=T[H];ce.positionEBML=Object.create(X),he.data.push({id:19899,data:[{id:21419,data:ce.id},ce.positionEBML]})}return he}function F(){S=D();var X={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},he={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},M]},H={id:374648427,data:[{id:174,data:[{id:215,data:d},{id:29637,data:d},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:[{id:176,data:_},{id:186,data:g}]}]}]};w={id:408125543,size:-1,data:[S,he,H]};var ce=new e(256);f(ce,O.pos,[X,w]),O.write(ce.getAsDataArray()),T.SegmentInfo.positionEBML.data=b(he.offset),T.Tracks.positionEBML.data=b(H.offset)}function K(X){var he=new e(4);if(!(X.trackNumber>0&&X.trackNumber<127))throw"TrackNumber must be > 0 and < 127";return he.writeEBMLVarInt(X.trackNumber),he.writeU16BE(X.timecode),he.writeByte(128),{id:163,data:[he.getAsDataArray(),X.frame]}}function N(X){return{id:524531317,data:[{id:231,data:Math.round(X.timecode)}]}}function G(X,he,H){P.push({id:187,data:[{id:179,data:he},{id:183,data:[{id:247,data:X},{id:241,data:b(H)}]}]})}function W(){var X={id:475249515,data:P},he=new e(16+P.length*32);f(he,O.pos,X),O.write(he.getAsDataArray()),T.Cues.positionEBML.data=b(X.offset)}function te(){if(h.length!=0){for(var X=0,he=0;he<h.length;he++)X+=h[he].frame.length;for(var H=new e(X+h.length*32),ce=N({timecode:Math.round(m)}),he=0;he<h.length;he++)ce.data.push(K(h[he]));f(H,O.pos,ce),O.write(H.getAsDataArray()),G(d,Math.round(m),ce.offset),h=[],m+=x,x=0}}function j(){if(!c.frameDuration)if(c.frameRate)c.frameDuration=1e3/c.frameRate;else throw"Missing required frameDuration or frameRate setting"}function re(X){X.trackNumber=d,X.timecode=Math.round(x),h.push(X),x+=X.duration,x>=u&&te()}function le(){var X=new e(S.size),he=O.pos;f(X,S.dataOffset,S.data),O.seek(S.dataOffset),O.write(X.getAsDataArray()),O.seek(he)}function ue(){var X=new e(8),he=O.pos;X.writeDoubleBE(m),O.seek(M.dataOffset),O.write(X.getAsDataArray()),O.seek(he)}this.addFrame=function(X){if(p){if(X.width!=_||X.height!=g)throw"Frame size differs from previous frames"}else _=X.width,g=X.height,F(),p=!0;var he=a(X,{quality:c.quality});if(!he)throw"Couldn't decode WebP frame, does the browser support WebP?";re({frame:l(he),duration:c.frameDuration})},this.complete=function(){return te(),W(),le(),ue(),O.complete("video/webm")},this.getWrittenSize=function(){return O.length},c=n(y,c||{}),j()}};typeof It<"u"&&typeof It.exports<"u"?It.exports=i(require("./ArrayBufferDataStream"),require("./BlobBuffer")):window.WebMWriter=i(ArrayBufferDataStream,BlobBuffer)})();(function(){var i={function:!0,object:!0};function e(M){return M&&M.Object===Object?M:null}var t=i[typeof Ni]&&Ni&&!Ni.nodeType?Ni:void 0,n=i[typeof It]&&It&&!It.nodeType?It:void 0,r=n&&n.exports===t?t:void 0,a=e(t&&n&&typeof global=="object"&&global),l=e(i[typeof self]&&self),s=e(i[typeof window]&&window),o=e(i[typeof this]&&this),f=a||s!==(o&&o.window)&&s||l||o||Function("return this")();"gc"in window||(window.gc=function(){}),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(M,S,P){for(var O=atob(this.toDataURL(S,P).split(",")[1]),b=O.length,D=new Uint8Array(b),F=0;F<b;F++)D[F]=O.charCodeAt(F);M(new Blob([D],{type:S||"image/png"}))}});// @license http://opensource.org/licenses/MIT
(function(){if("performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var M=Date.now();performance.timing&&performance.timing.navigationStart&&(M=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-M}}})();function c(M){return("0000000"+M).slice(-7)}var u=window.Date.now();function d(){function M(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return M()+M()+"-"+M()+"-"+M()+"-"+M()+"-"+M()+M()+M()}function p(M){var S={};this.settings=M,this.on=function(P,O){S[P]=O},this.emit=function(P){var O=S[P];O&&O.apply(null,Array.prototype.slice.call(arguments,1))},this.filename=M.name||d(),this.extension="",this.mimeType=""}p.prototype.start=function(){},p.prototype.stop=function(){},p.prototype.add=function(){},p.prototype.save=function(){},p.prototype.dispose=function(){},p.prototype.safeToProceed=function(){return!0},p.prototype.step=function(){console.log("Step not set!")};function _(M){p.call(this,M),this.extension=".tar",this.mimeType="application/x-tar",this.fileExtension="",this.tape=null,this.count=0}_.prototype=Object.create(p.prototype),_.prototype.start=function(){this.dispose()},_.prototype.add=function(M){var S=new FileReader;S.onload=(function(){this.tape.append(c(this.count)+this.fileExtension,new Uint8Array(S.result)),this.count++,this.step()}).bind(this),S.readAsArrayBuffer(M)},_.prototype.save=function(M){M(this.tape.save())},_.prototype.dispose=function(){this.tape=new Tar,this.count=0};function g(M){_.call(this,M),this.type="image/png",this.fileExtension=".png"}g.prototype=Object.create(_.prototype),g.prototype.add=function(M){M.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type)};function h(M){_.call(this,M),this.type="image/jpeg",this.fileExtension=".jpg",this.quality=M.quality/100||.8}h.prototype=Object.create(_.prototype),h.prototype.add=function(M){M.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type,this.quality)};function m(M){var S=document.createElement("canvas");S.toDataURL("image/webp").substr(5,10)!=="image/webp"&&console.log("WebP not supported - try another export format"),p.call(this,M),this.quality=M.quality/100||.8,this.extension=".webm",this.mimeType="video/webm",this.baseFilename=this.filename,this.frames=[],this.part=1,this.videoWriter=new WebMWriter({quality:this.quality,fileWriter:null,fd:null,frameRate:M.framerate})}m.prototype=Object.create(p.prototype),m.prototype.start=function(M){this.dispose()},m.prototype.add=function(M){this.videoWriter.addFrame(M),this.settings.autoSaveTime>0&&this.frames.length/this.settings.framerate>=this.settings.autoSaveTime?this.save((function(S){this.filename=this.baseFilename+"-part-"+c(this.part),download(S,this.filename+this.extension,this.mimeType),this.dispose(),this.part++,this.filename=this.baseFilename+"-part-"+c(this.part),this.step()}).bind(this)):this.step()},m.prototype.save=function(M){this.videoWriter.complete().then(M)},m.prototype.dispose=function(M){this.frames=[]};function x(M){p.call(this,M),M.quality=M.quality/100||.8,this.encoder=new FFMpegServer.Video(M),this.encoder.on("process",(function(){this.emit("process")}).bind(this)),this.encoder.on("finished",(function(S,P){var O=this.callback;O&&(this.callback=void 0,O(S,P))}).bind(this)),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("error",(function(S){alert(JSON.stringify(S,null,2))}).bind(this))}x.prototype=Object.create(p.prototype),x.prototype.start=function(){this.encoder.start(this.settings)},x.prototype.add=function(M){this.encoder.add(M)},x.prototype.save=function(M){this.callback=M,this.encoder.end()},x.prototype.safeToProceed=function(){return this.encoder.safeToProceed()};function y(M){p.call(this,M),this.framerate=this.settings.framerate,this.type="video/webm",this.extension=".webm",this.stream=null,this.mediaRecorder=null,this.chunks=[]}y.prototype=Object.create(p.prototype),y.prototype.add=function(M){this.stream||(this.stream=M.captureStream(this.framerate),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.start(),this.mediaRecorder.ondataavailable=(function(S){this.chunks.push(S.data)}).bind(this)),this.step()},y.prototype.save=function(M){this.mediaRecorder.onstop=(function(S){var P=new Blob(this.chunks,{type:"video/webm"});this.chunks=[],M(P)}).bind(this),this.mediaRecorder.stop()};function T(M){p.call(this,M),M.quality=31-(M.quality*30/100||10),M.workers=M.workers||4,this.extension=".gif",this.mimeType="image/gif",this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sizeSet=!1,this.encoder=new GIF({workers:M.workers,quality:M.quality,workerScript:M.workersPath+"gif.worker.js"}),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("finished",(function(S){var P=this.callback;P&&(this.callback=void 0,P(S))}).bind(this))}T.prototype=Object.create(p.prototype),T.prototype.add=function(M){this.sizeSet||(this.encoder.setOption("width",M.width),this.encoder.setOption("height",M.height),this.sizeSet=!0),this.canvas.width=M.width,this.canvas.height=M.height,this.ctx.drawImage(M,0,0),this.encoder.addFrame(this.ctx,{copy:!0,delay:this.settings.step}),this.step()},T.prototype.save=function(M){this.callback=M,this.encoder.render()};function w(M){var S=M||{},P,O,b,D,F,fe,K,N=[],G=[],W=0,te=0,j=[],re=!1,le={};S.framerate=S.framerate||60,S.motionBlurFrames=2*(S.motionBlurFrames||1),P=S.verbose||!1,S.display,S.step=1e3/S.framerate,S.timeLimit=S.timeLimit||0,S.frameLimit=S.frameLimit||0,S.startTime=S.startTime||0;var ue=document.createElement("div");ue.style.position="absolute",ue.style.left=ue.style.top=0,ue.style.backgroundColor="black",ue.style.fontFamily="monospace",ue.style.fontSize="11px",ue.style.padding="5px",ue.style.color="red",ue.style.zIndex=1e5,S.display&&document.body.appendChild(ue);var X=document.createElement("canvas"),he=X.getContext("2d"),H,ce;Xe("Step is set to "+S.step+"ms");var xe={gif:T,webm:m,ffmpegserver:x,png:g,jpg:h,"webm-mediarecorder":y},we=xe[S.format];if(!we)throw"Error: Incorrect or missing format: Valid formats are "+Object.keys(xe).join(", ");if(K=new we(S),K.step=fe,K.on("process",Ge),K.on("progress",Ue),"performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var ve=Date.now();performance.timing&&performance.timing.navigationStart&&(ve=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-ve}}var Se=window.setTimeout,ke=window.setInterval,Ae=window.clearInterval,V=window.clearTimeout,He=window.requestAnimationFrame,Pe=window.Date.now,Oe=window.performance.now,Le=window.Date.prototype.getTime,Be=[];function Ne(){Xe("Capturer start"),b=window.Date.now(),W=0,O=b+S.startTime,F=window.performance.now(),D=F+S.startTime,window.Date.prototype.getTime=function(){return O},window.Date.now=function(){return O},window.setTimeout=function(A,ee){var oe={callback:A,time:ee,triggerTime:O+ee};return N.push(oe),Xe("Timeout set to "+oe.time),oe},window.clearTimeout=function(A){for(var ee=0;ee<N.length;ee++)if(N[ee]==A){N.splice(ee,1),Xe("Timeout cleared");continue}},window.setInterval=function(A,ee){var oe={callback:A,time:ee,triggerTime:O+ee};return G.push(oe),Xe("Interval set to "+oe.time),oe},window.clearInterval=function(A){return Xe("clear Interval"),null},window.requestAnimationFrame=function(A){j.push(A)},window.performance.now=function(){return D};function me(){return this._hooked||(this._hooked=!0,this._hookedTime=this.currentTime||0,this.pause(),Be.push(this)),this._hookedTime+S.startTime}try{Object.defineProperty(HTMLVideoElement.prototype,"currentTime",{get:me}),Object.defineProperty(HTMLAudioElement.prototype,"currentTime",{get:me})}catch(A){Xe(A)}}function I(){Ne(),K.start(),re=!0}function L(){re=!1,K.stop(),ae()}function J(me,A){Se(me,0,A)}function fe(){J(Ge)}function ae(){Xe("Capturer stop"),window.setTimeout=Se,window.setInterval=ke,window.clearInterval=Ae,window.clearTimeout=V,window.requestAnimationFrame=He,window.Date.prototype.getTime=Le,window.Date.now=Pe,window.performance.now=Oe}function _e(){var me=W/S.framerate;(S.frameLimit&&W>=S.frameLimit||S.timeLimit&&me>=S.timeLimit)&&(L(),de());var A=new Date(null);A.setSeconds(me),S.motionBlurFrames>2?ue.textContent="CCapture "+S.format+" | "+W+" frames ("+te+" inter) | "+A.toISOString().substr(11,8):ue.textContent="CCapture "+S.format+" | "+W+" frames | "+A.toISOString().substr(11,8),window.ccaptureDisplayListener&&window.ccaptureDisplayListener(me.toFixed(2)+" seconds")}function De(me){(X.width!==me.width||X.height!==me.height)&&(X.width=me.width,X.height=me.height,H=new Uint16Array(X.height*X.width*4),he.fillStyle="#0",he.fillRect(0,0,X.width,X.height))}function ye(me){he.drawImage(me,0,0),ce=he.getImageData(0,0,X.width,X.height);for(var A=0;A<H.length;A+=4)H[A]+=ce.data[A],H[A+1]+=ce.data[A+1],H[A+2]+=ce.data[A+2];te++}function Ee(){for(var me=ce.data,A=0;A<H.length;A+=4)me[A]=H[A]*2/S.motionBlurFrames,me[A+1]=H[A+1]*2/S.motionBlurFrames,me[A+2]=H[A+2]*2/S.motionBlurFrames;he.putImageData(ce,0,0),K.add(X),W++,te=0,Xe("Full MB Frame! "+W+" "+O);for(var A=0;A<H.length;A+=4)H[A]=0,H[A+1]=0,H[A+2]=0;gc()}function Fe(me){re&&(S.motionBlurFrames>2?(De(me),ye(me),te>=.5*S.motionBlurFrames?Ee():fe()):(K.add(me),W++,Xe("Full Frame! "+W)))}function Ge(){var me=1e3/S.framerate,A=(W+te/S.motionBlurFrames)*me;O=b+A,D=F+A,Be.forEach(function(oe){oe._hookedTime=A/1e3}),_e(),Xe("Frame: "+W+" "+te);for(var ee=0;ee<N.length;ee++)if(O>=N[ee].triggerTime){J(N[ee].callback),N.splice(ee,1);continue}for(var ee=0;ee<G.length;ee++)if(O>=G[ee].triggerTime){J(G[ee].callback),G[ee].triggerTime+=G[ee].time;continue}j.forEach(function(oe){J(oe,O-u)}),j=[]}function de(me){me||(me=function(A){return download(A,K.filename+K.extension,K.mimeType),!1}),K.save(me)}function Xe(me){P&&console.log(me)}function Ve(me,A){le[me]=A}function Ie(me){var A=le[me];A&&A.apply(null,Array.prototype.slice.call(arguments,1))}function Ue(me){Ie("progress",me)}return{start:I,capture:Fe,stop:L,save:de,on:Ve}}(s||l||{}).CCapture=w,typeof define=="function"&&typeof define.amd=="object"&&define.amd?define(function(){return w}):t&&n?(r&&((n.exports=w).CCapture=w),t.CCapture=w):f.CCapture=w})();var gs=!1,Oi;function Um(i){const e=window.innerWidth,t=window.innerHeight,n=new Bl;let r,a=0;const l=new lm;l.background=new it(14737632);const s=new _m(16777215,4);s.position.set(.2,1,0),s.castShadow=!0,s.shadow.mapSize.width=512*4,s.shadow.mapSize.height=512*4,s.shadow.camera.near=.5,s.shadow.camera.far=3,s.shadow.bias=-.02,l.add(s),l.add(new gm(16777215));const o=40,f=new Ht(0,e/t,.1,1e3);f.setFocalLength(o),f.position.set(0,3,1),f.lookAt(0,0,0),r=f.position.clone();const c=new Ol;c.shadowMap.enabled=!0,c.shadowMap.type=$o,c.setSize(e,t),c.toneMapping=Os,i.appendChild(c.domElement);const u=new wm(l,f),d=new Em(c),p=new Rm(l,f,{focus:10,aperture:10*1e-5,maxblur:.008}),_=new Am;d.addPass(u),d.addPass(p),d.addPass(_);const g=new Dm({flipDuration:.5,yBetweenPages:.001,pageSubdivisions:20});g.scale.x=.8,l.add(g);function h(){requestAnimationFrame(h);let w=n.getDelta();g.animate(w),f.position.add(r.clone().sub(f.position).multiplyScalar(w*2)),d.render(),gs&&Oi.capture(c.domElement)}h();function m(){const w=window.innerWidth,M=window.innerHeight;f.aspect=w/M,f.updateProjectionMatrix(),c.setSize(w,M),d.setSize(w,M)}function x(w){const M=new tt;M.x=w.clientX/window.innerWidth*2-1,M.y=-(w.clientY/window.innerHeight)*2+1,M.x<0&&g.currentPage>0||g.currentPage==g.totalPages?g.previousPage():g.nextPage(),console.log(g.currentPage,g.totalPages)}function y(w){a+=w.deltaY<0?1:-1,a<=0&&(r.x=0,r.z=1),f.setFocalLength(o+a)}function T(w){const M=new tt;M.x=w.clientX/window.innerWidth*2-1,M.y=-(w.clientY/window.innerHeight)*2+1,a>0&&(r.x=M.x/3,r.z=1+-M.y/3)}window.addEventListener("resize",m),c.domElement.addEventListener("click",x),c.domElement.addEventListener("mousemove",T),c.domElement.addEventListener("mousewheel",y),document.body.addEventListener("on:pages",w=>{console.log("PAGES EVENT:",w.detail),g.setPages(w.detail)}),document.body.addEventListener("book:goto",w=>{g.currentPage=w.detail}),document.body.addEventListener("record:start",w=>{gs=!0,document.body.classList.add("recording"),Oi=new CCapture({framerate:24,format:"webm",motionBlurFrames:1,quality:100}),Oi.start()}),document.body.addEventListener("record:stop",w=>{gs=!1,Oi.stop(),Oi.save(),document.body.classList.remove("recording")}),window.addEventListener("keydown",w=>{w.code==="Space"&&(f.setFocalLength(o),r.x=0,r.z=1,a=0)})}function Im(){return rt(sc,{})}Zl(rt(Im,{}),document.getElementById("app"));Um(document.getElementById("scene"))});export default Om();
