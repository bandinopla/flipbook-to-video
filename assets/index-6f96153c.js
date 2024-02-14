var Wl=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var Hm=Wl((Oi,Ni)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var wr,Ye,Go,Fn,Ya,Ho,va,Fi={},Vo=[],Xl=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Da=Array.isArray;function wn(i,e){for(var t in e)i[t]=e[t];return i}function Wo(i){var e=i.parentNode;e&&e.removeChild(i)}function jl(i,e,t){var n,r,s,l={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:l[s]=e[s];if(arguments.length>2&&(l.children=arguments.length>3?wr.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)l[s]===void 0&&(l[s]=i.defaultProps[s]);return dr(i,l,n,r,null)}function dr(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Go,__i:-1,__u:0};return r==null&&Ye.vnode!=null&&Ye.vnode(s),s}function un(i){return i.children}function pr(i,e){this.props=i,this.context=e}function mi(i,e){if(e==null)return i.__?mi(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?mi(i):null}function Xo(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Xo(i)}}function Za(i){(!i.__d&&(i.__d=!0)&&Fn.push(i)&&!vr.__r++||Ya!==Ye.debounceRendering)&&((Ya=Ye.debounceRendering)||Ho)(vr)}function vr(){var i,e,t,n,r,s,l,a,o;for(Fn.sort(va);i=Fn.shift();)i.__d&&(e=Fn.length,n=void 0,s=(r=(t=i).__v).__e,a=[],o=[],(l=t.__P)&&((n=wn({},r)).__v=r.__v+1,Ye.vnode&&Ye.vnode(n),Ua(l,n,r,t.__n,l.ownerSVGElement!==void 0,32&r.__u?[s]:null,a,s??mi(r),!!(32&r.__u),o),n.__.__k[n.__i]=n,Zo(a,n,o),n.__e!=s&&Xo(n)),Fn.length>e&&Fn.sort(va));vr.__r=0}function jo(i,e,t,n,r,s,l,a,o,f,c){var u,d,p,_,g,h=n&&n.__k||Vo,m=e.length;for(t.__d=o,Yl(t,e,h),o=t.__d,u=0;u<m;u++)(p=t.__k[u])!=null&&typeof p!="boolean"&&typeof p!="function"&&(d=p.__i===-1?Fi:h[p.__i]||Fi,p.__i=u,Ua(i,p,d,r,s,l,a,o,f,c),_=p.__e,p.ref&&d.ref!=p.ref&&(d.ref&&Ia(d.ref,null,p),c.push(p.ref,p.__c||_,p)),g==null&&_!=null&&(g=_),65536&p.__u||d.__k===p.__k?o=Yo(p,o,i):typeof p.type=="function"&&p.__d!==void 0?o=p.__d:_&&(o=_.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=o,t.__e=g}function Yl(i,e,t){var n,r,s,l,a,o=e.length,f=t.length,c=f,u=0;for(i.__k=[],n=0;n<o;n++)(r=i.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?dr(null,r,null,null,r):Da(r)?dr(un,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?dr(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=i,r.__b=i.__b+1,a=Zl(r,t,l=n+u,c),r.__i=a,s=null,a!==-1&&(c--,(s=t[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&u--,typeof r.type!="function"&&(r.__u|=65536)):a!==l&&(a===l+1?u++:a>l?c>o-l?u+=a-l:u--:u=a<l&&a==l-1?a-l:0,a!==n+u&&(r.__u|=65536))):(s=t[n])&&s.key==null&&s.__e&&(s.__e==i.__d&&(i.__d=mi(s)),xa(s,s,!1),t[n]=null,c--);if(c)for(n=0;n<f;n++)(s=t[n])!=null&&!(131072&s.__u)&&(s.__e==i.__d&&(i.__d=mi(s)),xa(s,s))}function Yo(i,e,t){var n,r;if(typeof i.type=="function"){for(n=i.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=i,e=Yo(n[r],e,t));return e}return i.__e!=e&&(t.insertBefore(i.__e,e||null),e=i.__e),e&&e.nextSibling}function Zl(i,e,t,n){var r=i.key,s=i.type,l=t-1,a=t+1,o=e[t];if(o===null||o&&r==o.key&&s===o.type)return t;if(n>(o!=null&&!(131072&o.__u)?1:0))for(;l>=0||a<e.length;){if(l>=0){if((o=e[l])&&!(131072&o.__u)&&r==o.key&&s===o.type)return l;l--}if(a<e.length){if((o=e[a])&&!(131072&o.__u)&&r==o.key&&s===o.type)return a;a++}}return-1}function qa(i,e,t){e[0]==="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||Xl.test(e)?t:t+"px"}function Vi(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||qa(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||qa(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n?t.u=n.u:(t.u=Date.now(),i.addEventListener(e,s?$a:Ka,s)):i.removeEventListener(e,s?$a:Ka,s);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?i.removeAttribute(e):i.setAttribute(e,t))}}function Ka(i){var e=this.l[i.type+!1];if(i.t){if(i.t<=e.u)return}else i.t=Date.now();return e(Ye.event?Ye.event(i):i)}function $a(i){return this.l[i.type+!0](Ye.event?Ye.event(i):i)}function Ua(i,e,t,n,r,s,l,a,o,f){var c,u,d,p,_,g,h,m,x,y,T,w,M,S,I,U=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(o=!!(32&t.__u),s=[a=e.__e=t.__e]),(c=Ye.__b)&&c(e);e:if(typeof U=="function")try{if(m=e.props,x=(c=U.contextType)&&n[c.__c],y=c?x?x.props.value:c.__:n,t.__c?h=(u=e.__c=t.__c).__=u.__E:("prototype"in U&&U.prototype.render?e.__c=u=new U(m,y):(e.__c=u=new pr(m,y),u.constructor=U,u.render=Kl),x&&x.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=n,d=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),U.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=wn({},u.__s)),wn(u.__s,U.getDerivedStateFromProps(m,u.__s))),p=u.props,_=u.state,u.__v=e,d)U.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(U.getDerivedStateFromProps==null&&m!==p&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(u.props=m,u.state=u.__s,u.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(b){b&&(b.__=e)}),T=0;T<u._sb.length;T++)u.__h.push(u._sb[T]);u._sb=[],u.__h.length&&l.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(p,_,g)})}if(u.context=y,u.props=m,u.__P=i,u.__e=!1,w=Ye.__r,M=0,"prototype"in U&&U.prototype.render){for(u.state=u.__s,u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),S=0;S<u._sb.length;S++)u.__h.push(u._sb[S]);u._sb=[]}else do u.__d=!1,w&&w(e),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++M<25);u.state=u.__s,u.getChildContext!=null&&(n=wn(wn({},n),u.getChildContext())),d||u.getSnapshotBeforeUpdate==null||(g=u.getSnapshotBeforeUpdate(p,_)),jo(i,Da(I=c!=null&&c.type===un&&c.key==null?c.props.children:c)?I:[I],e,t,n,r,s,l,a,o,f),u.base=e.__e,e.__u&=-161,u.__h.length&&l.push(u),h&&(u.__E=u.__=null)}catch(b){e.__v=null,o||s!=null?(e.__e=a,e.__u|=o?160:32,s[s.indexOf(a)]=null):(e.__e=t.__e,e.__k=t.__k),Ye.__e(b,e,t)}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ql(t.__e,e,t,n,r,s,l,o,f);(c=Ye.diffed)&&c(e)}function Zo(i,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)Ia(t[n],t[++n],t[++n]);Ye.__c&&Ye.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(s){s.call(r)})}catch(s){Ye.__e(s,r.__v)}})}function ql(i,e,t,n,r,s,l,a,o){var f,c,u,d,p,_,g,h=t.props,m=e.props,x=e.type;if(x==="svg"&&(r=!0),s!=null){for(f=0;f<s.length;f++)if((p=s[f])&&"setAttribute"in p==!!x&&(x?p.localName===x:p.nodeType===3)){i=p,s[f]=null;break}}if(i==null){if(x===null)return document.createTextNode(m);i=r?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,m.is&&m),s=null,a=!1}if(x===null)h===m||a&&i.data===m||(i.data=m);else{if(s=s&&wr.call(i.childNodes),h=t.props||Fi,!a&&s!=null)for(h={},f=0;f<i.attributes.length;f++)h[(p=i.attributes[f]).name]=p.value;for(f in h)p=h[f],f=="children"||(f=="dangerouslySetInnerHTML"?u=p:f==="key"||f in m||Vi(i,f,null,p,r));for(f in m)p=m[f],f=="children"?d=p:f=="dangerouslySetInnerHTML"?c=p:f=="value"?_=p:f=="checked"?g=p:f==="key"||a&&typeof p!="function"||h[f]===p||Vi(i,f,p,h[f],r);if(c)a||u&&(c.__html===u.__html||c.__html===i.innerHTML)||(i.innerHTML=c.__html),e.__k=[];else if(u&&(i.innerHTML=""),jo(i,Da(d)?d:[d],e,t,n,r&&x!=="foreignObject",s,l,s?s[0]:t.__k&&mi(t,0),a,o),s!=null)for(f=s.length;f--;)s[f]!=null&&Wo(s[f]);a||(f="value",_!==void 0&&(_!==i[f]||x==="progress"&&!_||x==="option"&&_!==h[f])&&Vi(i,f,_,h[f],!1),f="checked",g!==void 0&&g!==i[f]&&Vi(i,f,g,h[f],!1))}return i}function Ia(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){Ye.__e(n,t)}}function xa(i,e,t){var n,r;if(Ye.unmount&&Ye.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Ia(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){Ye.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&xa(n[r],e,t||typeof i.type!="function");t||i.__e==null||Wo(i.__e),i.__=i.__e=i.__d=void 0}function Kl(i,e,t){return this.constructor(i,t)}function $l(i,e,t){var n,r,s,l;Ye.__&&Ye.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],l=[],Ua(e,i=(!n&&t||e).__k=jl(un,null,[i]),r||Fi,Fi,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?wr.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n,l),Zo(s,i,l)}wr=Vo.slice,Ye={__e:function(i,e,t,n){for(var r,s,l;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),l=r.__d),l)return r.__E=r}catch(a){i=a}throw i}},Go=0,pr.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=wn({},this.state),typeof i=="function"&&(i=i(wn({},t),this.props)),i&&wn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),Za(this))},pr.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),Za(this))},pr.prototype.render=un,Fn=[],Ho=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,va=function(i,e){return i.__v.__b-e.__v.__b},vr.__r=0;var _i,ft,Nr,Ja,xr=0,qo=[],mr=[],Qa=Ye.__b,es=Ye.__r,ts=Ye.diffed,ns=Ye.__c,is=Ye.unmount;function Tr(i,e){Ye.__h&&Ye.__h(ft,i,xr||e),xr=0;var t=ft.__H||(ft.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:mr}),t.__[i]}function ci(i){return xr=1,Jl(Ko,i)}function Jl(i,e,t){var n=Tr(_i++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Ko(void 0,e),function(a){var o=n.__N?n.__N[0]:n.__[0],f=n.t(o,a);o!==f&&(n.__N=[f,n.__[1]],n.__c.setState({}))}],n.__c=ft,!ft.u)){var r=function(a,o,f){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(d){return d.__c});if(c.every(function(d){return!d.__N}))return!s||s.call(this,a,o,f);var u=!1;return c.forEach(function(d){if(d.__N){var p=d.__[0];d.__=d.__N,d.__N=void 0,p!==d.__[0]&&(u=!0)}}),!(!u&&n.__c.props===a)&&(!s||s.call(this,a,o,f))};ft.u=!0;var s=ft.shouldComponentUpdate,l=ft.componentWillUpdate;ft.componentWillUpdate=function(a,o,f){if(this.__e){var c=s;s=void 0,r(a,o,f),s=c}l&&l.call(this,a,o,f)},ft.shouldComponentUpdate=r}return n.__N||n.__}function rs(i,e){var t=Tr(_i++,3);!Ye.__s&&Oa(t.__H,e)&&(t.__=i,t.i=e,ft.__H.__h.push(t))}function as(i,e){var t=Tr(_i++,4);!Ye.__s&&Oa(t.__H,e)&&(t.__=i,t.i=e,ft.__h.push(t))}function Fr(i){return xr=5,Ql(function(){return{current:i}},[])}function Ql(i,e){var t=Tr(_i++,7);return Oa(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function ec(){for(var i;i=qo.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(_r),i.__H.__h.forEach(ya),i.__H.__h=[]}catch(e){i.__H.__h=[],Ye.__e(e,i.__v)}}Ye.__b=function(i){ft=null,Qa&&Qa(i)},Ye.__r=function(i){es&&es(i),_i=0;var e=(ft=i.__c).__H;e&&(Nr===ft?(e.__h=[],ft.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=mr,t.__N=t.i=void 0})):(e.__h.forEach(_r),e.__h.forEach(ya),e.__h=[],_i=0)),Nr=ft},Ye.diffed=function(i){ts&&ts(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(qo.push(e)!==1&&Ja===Ye.requestAnimationFrame||((Ja=Ye.requestAnimationFrame)||tc)(ec)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==mr&&(t.__=t.__V),t.i=void 0,t.__V=mr})),Nr=ft=null},Ye.__c=function(i,e){e.some(function(t){try{t.__h.forEach(_r),t.__h=t.__h.filter(function(n){return!n.__||ya(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Ye.__e(n,t.__v)}}),ns&&ns(i,e)},Ye.unmount=function(i){is&&is(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{_r(n)}catch(r){e=r}}),t.__H=void 0,e&&Ye.__e(e,t.__v))};var ss=typeof requestAnimationFrame=="function";function tc(i){var e,t=function(){clearTimeout(n),ss&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);ss&&(e=requestAnimationFrame(t))}function _r(i){var e=ft,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),ft=e}function ya(i){var e=ft;i.__c=i.__(),ft=e}function Oa(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Ko(i,e){return typeof e=="function"?e(i):e}var Qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Wi(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var $o={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,s){function l(f,c){if(!r[f]){if(!n[f]){var u=typeof Wi=="function"&&Wi;if(!c&&u)return u(f,!0);if(a)return a(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var p=r[f]={exports:{}};n[f][0].call(p.exports,function(_){var g=n[f][1][_];return l(g||_)},p,p.exports,t,n,r,s)}return r[f].exports}for(var a=typeof Wi=="function"&&Wi,o=0;o<s.length;o++)l(s[o]);return l}({1:[function(t,n,r){var s=t("./utils"),l=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(o){for(var f=[],c,u,d,p,_,g,h,m=0,x=o.length,y=x,T=s.getTypeOf(o)!=="string";m<o.length;)y=x-m,T?(c=o[m++],u=m<x?o[m++]:0,d=m<x?o[m++]:0):(c=o.charCodeAt(m++),u=m<x?o.charCodeAt(m++):0,d=m<x?o.charCodeAt(m++):0),p=c>>2,_=(c&3)<<4|u>>4,g=y>1?(u&15)<<2|d>>6:64,h=y>2?d&63:64,f.push(a.charAt(p)+a.charAt(_)+a.charAt(g)+a.charAt(h));return f.join("")},r.decode=function(o){var f,c,u,d,p,_,g,h=0,m=0,x="data:";if(o.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");o=o.replace(/[^A-Za-z0-9+/=]/g,"");var y=o.length*3/4;if(o.charAt(o.length-1)===a.charAt(64)&&y--,o.charAt(o.length-2)===a.charAt(64)&&y--,y%1!==0)throw new Error("Invalid base64 input, bad content length.");var T;for(l.uint8array?T=new Uint8Array(y|0):T=new Array(y|0);h<o.length;)d=a.indexOf(o.charAt(h++)),p=a.indexOf(o.charAt(h++)),_=a.indexOf(o.charAt(h++)),g=a.indexOf(o.charAt(h++)),f=d<<2|p>>4,c=(p&15)<<4|_>>2,u=(_&3)<<6|g,T[m++]=f,_!==64&&(T[m++]=c),g!==64&&(T[m++]=u);return T}},{"./support":30,"./utils":32}],2:[function(t,n,r){var s=t("./external"),l=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),o=t("./stream/DataLengthProbe");function f(c,u,d,p,_){this.compressedSize=c,this.uncompressedSize=u,this.crc32=d,this.compression=p,this.compressedContent=_}f.prototype={getContentWorker:function(){var c=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),u=this;return c.on("end",function(){if(this.streamInfo.data_length!==u.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(c,u,d){return c.pipe(new a).pipe(new o("uncompressedSize")).pipe(u.compressWorker(d)).pipe(new o("compressedSize")).withStreamInfo("compression",u)},n.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var s=t("./utils");function l(){for(var c,u=[],d=0;d<256;d++){c=d;for(var p=0;p<8;p++)c=c&1?3988292384^c>>>1:c>>>1;u[d]=c}return u}var a=l();function o(c,u,d,p){var _=a,g=p+d;c=c^-1;for(var h=p;h<g;h++)c=c>>>8^_[(c^u[h])&255];return c^-1}function f(c,u,d,p){var _=a,g=p+d;c=c^-1;for(var h=p;h<g;h++)c=c>>>8^_[(c^u.charCodeAt(h))&255];return c^-1}n.exports=function(u,d){if(typeof u>"u"||!u.length)return 0;var p=s.getTypeOf(u)!=="string";return p?o(d|0,u,u.length,0):f(d|0,u,u.length,0)}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var s=null;typeof Promise<"u"?s=Promise:s=t("lie"),n.exports={Promise:s}},{lie:37}],7:[function(t,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=t("pako"),a=t("./utils"),o=t("./stream/GenericWorker"),f=s?"uint8array":"array";r.magic="\b\0";function c(u,d){o.call(this,"FlateWorker/"+u),this._pako=null,this._pakoAction=u,this._pakoOptions=d,this.meta={}}a.inherits(c,o),c.prototype.processChunk=function(u){this.meta=u.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(f,u.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var u=this;this._pako.onData=function(d){u.push({data:d,meta:u.meta})}},r.compressWorker=function(u){return new c("Deflate",u)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){var s=t("../utils"),l=t("../stream/GenericWorker"),a=t("../utf8"),o=t("../crc32"),f=t("../signature"),c=function(m,x){var y="",T;for(T=0;T<x;T++)y+=String.fromCharCode(m&255),m=m>>>8;return y},u=function(m,x){var y=m;return m||(y=x?16893:33204),(y&65535)<<16},d=function(m){return(m||0)&63},p=function(m,x,y,T,w,M){var S=m.file,I=m.compression,U=M!==a.utf8encode,b=s.transformTo("string",M(S.name)),L=s.transformTo("string",a.utf8encode(S.name)),F=S.comment,j=s.transformTo("string",M(F)),N=s.transformTo("string",a.utf8encode(F)),G=L.length!==S.name.length,z=N.length!==F.length,ee,V,re="",oe="",ue="",Y=S.dir,he=S.date,W={crc32:0,compressedSize:0,uncompressedSize:0};(!x||y)&&(W.crc32=m.crc32,W.compressedSize=m.compressedSize,W.uncompressedSize=m.uncompressedSize);var ce=0;x&&(ce|=8),!U&&(G||z)&&(ce|=2048);var xe=0,we=0;Y&&(xe|=16),w==="UNIX"?(we=798,xe|=u(S.unixPermissions,Y)):(we=20,xe|=d(S.dosPermissions)),ee=he.getUTCHours(),ee=ee<<6,ee=ee|he.getUTCMinutes(),ee=ee<<5,ee=ee|he.getUTCSeconds()/2,V=he.getUTCFullYear()-1980,V=V<<4,V=V|he.getUTCMonth()+1,V=V<<5,V=V|he.getUTCDate(),G&&(oe=c(1,1)+c(o(b),4)+L,re+="up"+c(oe.length,2)+oe),z&&(ue=c(1,1)+c(o(j),4)+N,re+="uc"+c(ue.length,2)+ue);var ve="";ve+=`
\0`,ve+=c(ce,2),ve+=I.magic,ve+=c(ee,2),ve+=c(V,2),ve+=c(W.crc32,4),ve+=c(W.compressedSize,4),ve+=c(W.uncompressedSize,4),ve+=c(b.length,2),ve+=c(re.length,2);var Se=f.LOCAL_FILE_HEADER+ve+b+re,ze=f.CENTRAL_FILE_HEADER+c(we,2)+ve+c(j.length,2)+"\0\0\0\0"+c(xe,4)+c(T,4)+b+re+j;return{fileRecord:Se,dirRecord:ze}},_=function(m,x,y,T,w){var M="",S=s.transformTo("string",w(T));return M=f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+c(m,2)+c(m,2)+c(x,4)+c(y,4)+c(S.length,2)+S,M},g=function(m){var x="";return x=f.DATA_DESCRIPTOR+c(m.crc32,4)+c(m.compressedSize,4)+c(m.uncompressedSize,4),x};function h(m,x,y,T){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=y,this.encodeFileName=T,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(h,l),h.prototype.push=function(m){var x=m.meta.percent||0,y=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,l.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:y?(x+100*(y-T-1))/y:100}}))},h.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var x=this.streamFiles&&!m.file.dir;if(x){var y=p(m,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},h.prototype.closedSource=function(m){this.accumulate=!1;var x=this.streamFiles&&!m.file.dir,y=p(m,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),x)this.push({data:g(m),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},h.prototype.flush=function(){for(var m=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var y=this.bytesWritten-m,T=_(this.dirRecords.length,y,m,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},h.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},h.prototype.registerPrevious=function(m){this._sources.push(m);var x=this;return m.on("data",function(y){x.processChunk(y)}),m.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),m.on("error",function(y){x.error(y)}),this},h.prototype.resume=function(){if(!l.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0},h.prototype.error=function(m){var x=this._sources;if(!l.prototype.error.call(this,m))return!1;for(var y=0;y<x.length;y++)try{x[y].error(m)}catch{}return!0},h.prototype.lock=function(){l.prototype.lock.call(this);for(var m=this._sources,x=0;x<m.length;x++)m[x].lock()},n.exports=h},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var s=t("../compressions"),l=t("./ZipFileWorker"),a=function(o,f){var c=o||f,u=s[c];if(!u)throw new Error(c+" is not a valid compression method !");return u};r.generateWorker=function(o,f,c){var u=new l(f.streamFiles,c,f.platform,f.encodeFileName),d=0;try{o.forEach(function(p,_){d++;var g=a(_.options.compression,f.compression),h=_.options.compressionOptions||f.compressionOptions||{},m=_.dir,x=_.date;_._compressWorker(g,h).withStreamInfo("file",{name:p,dir:m,date:x,comment:_.comment||"",unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(p){u.error(p)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var a in this)typeof this[a]!="function"&&(l[a]=this[a]);return l}}s.prototype=t("./object"),s.prototype.loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(l,a){return new s().loadAsync(l,a)},s.external=t("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var s=t("./utils"),l=t("./external"),a=t("./utf8"),o=t("./zipEntries"),f=t("./stream/Crc32Probe"),c=t("./nodejsUtils");function u(d){return new l.Promise(function(p,_){var g=d.decompressed.getContentWorker().pipe(new f);g.on("error",function(h){_(h)}).on("end",function(){g.streamInfo.crc32!==d.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(d,p){var _=this;return p=s.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(d)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",d,!0,p.optimizedBinaryString,p.base64).then(function(g){var h=new o(p);return h.load(g),h}).then(function(h){var m=[l.Promise.resolve(h)],x=h.files;if(p.checkCRC32)for(var y=0;y<x.length;y++)m.push(u(x[y]));return l.Promise.all(m)}).then(function(h){for(var m=h.shift(),x=m.files,y=0;y<x.length;y++){var T=x[y],w=T.fileNameStr,M=s.resolve(T.fileNameStr);_.file(M,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:p.createFolders}),T.dir||(_.file(M).unsafeOriginalName=w)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var s=t("../utils"),l=t("../stream/GenericWorker");function a(o,f){l.call(this,"Nodejs stream input adapter for "+o),this._upstreamEnded=!1,this._bindStream(f)}s.inherits(a,l),a.prototype._bindStream=function(o){var f=this;this._stream=o,o.pause(),o.on("data",function(c){f.push({data:c,meta:{percent:0}})}).on("error",function(c){f.isPaused?this.generatedError=c:f.error(c)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},a.prototype.pause=function(){return l.prototype.pause.call(this)?(this._stream.pause(),!0):!1},a.prototype.resume=function(){return l.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var s=t("readable-stream").Readable,l=t("../utils");l.inherits(a,s);function a(o,f,c){s.call(this,f),this._helper=o;var u=this;o.on("data",function(d,p){u.push(d)||u._helper.pause(),c&&c(p)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,n,r){var s=t("./utf8"),l=t("./utils"),a=t("./stream/GenericWorker"),o=t("./stream/StreamHelper"),f=t("./defaults"),c=t("./compressedObject"),u=t("./zipObject"),d=t("./generate"),p=t("./nodejsUtils"),_=t("./nodejs/NodejsStreamInputAdapter"),g=function(w,M,S){var I=l.getTypeOf(M),U,b=l.extend(S||{},f);b.date=b.date||new Date,b.compression!==null&&(b.compression=b.compression.toUpperCase()),typeof b.unixPermissions=="string"&&(b.unixPermissions=parseInt(b.unixPermissions,8)),b.unixPermissions&&b.unixPermissions&16384&&(b.dir=!0),b.dosPermissions&&b.dosPermissions&16&&(b.dir=!0),b.dir&&(w=m(w)),b.createFolders&&(U=h(w))&&x.call(this,U,!0);var L=I==="string"&&b.binary===!1&&b.base64===!1;(!S||typeof S.binary>"u")&&(b.binary=!L);var F=M instanceof c&&M.uncompressedSize===0;(F||b.dir||!M||M.length===0)&&(b.base64=!1,b.binary=!0,M="",b.compression="STORE",I="string");var j=null;M instanceof c||M instanceof a?j=M:p.isNode&&p.isStream(M)?j=new _(w,M):j=l.prepareContent(w,M,b.binary,b.optimizedBinaryString,b.base64);var N=new u(w,j,b);this.files[w]=N},h=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var M=w.lastIndexOf("/");return M>0?w.substring(0,M):""},m=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},x=function(w,M){return M=typeof M<"u"?M:f.createFolders,w=m(w),this.files[w]||g.call(this,w,null,{dir:!0,createFolders:M}),this.files[w]};function y(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var M,S,I;for(M in this.files)I=this.files[M],S=M.slice(this.root.length,M.length),S&&M.slice(0,this.root.length)===this.root&&w(S,I)},filter:function(w){var M=[];return this.forEach(function(S,I){w(S,I)&&M.push(I)}),M},file:function(w,M,S){if(arguments.length===1)if(y(w)){var I=w;return this.filter(function(b,L){return!L.dir&&I.test(b)})}else{var U=this.files[this.root+w];return U&&!U.dir?U:null}else w=this.root+w,g.call(this,w,M,S);return this},folder:function(w){if(!w)return this;if(y(w))return this.filter(function(U,b){return b.dir&&w.test(U)});var M=this.root+w,S=x.call(this,M),I=this.clone();return I.root=S.name,I},remove:function(w){w=this.root+w;var M=this.files[w];if(M||(w.slice(-1)!=="/"&&(w+="/"),M=this.files[w]),M&&!M.dir)delete this.files[w];else for(var S=this.filter(function(U,b){return b.name.slice(0,w.length)===w}),I=0;I<S.length;I++)delete this.files[S[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var M,S={};try{if(S=l.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:s.utf8encode}),S.type=S.type.toLowerCase(),S.compression=S.compression.toUpperCase(),S.type==="binarystring"&&(S.type="string"),!S.type)throw new Error("No output type specified.");l.checkSupport(S.type),(S.platform==="darwin"||S.platform==="freebsd"||S.platform==="linux"||S.platform==="sunos")&&(S.platform="UNIX"),S.platform==="win32"&&(S.platform="DOS");var I=S.comment||this.comment||"";M=d.generateWorker(this,S,I)}catch(U){M=new a("error"),M.error(U)}return new o(M,S.type||"string",S.mimeType)},generateAsync:function(w,M){return this.generateInternalStream(w).accumulate(M)},generateNodeStream:function(w,M){return w=w||{},w.type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(M)}};n.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var s=t("./DataReader"),l=t("../utils");function a(o){s.call(this,o);for(var f=0;f<this.data.length;f++)o[f]=o[f]&255}l.inherits(a,s),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var f=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),d=o.charCodeAt(3),p=this.length-4;p>=0;--p)if(this.data[p]===f&&this.data[p+1]===c&&this.data[p+2]===u&&this.data[p+3]===d)return p-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var f=o.charCodeAt(0),c=o.charCodeAt(1),u=o.charCodeAt(2),d=o.charCodeAt(3),p=this.readData(4);return f===p[0]&&c===p[1]&&u===p[2]&&d===p[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var s=t("../utils");function l(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var o=0,f;for(this.checkOffset(a),f=this.index+a-1;f>=this.index;f--)o=(o<<8)+this.byteAt(f);return this.index+=a,o},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(a&31)<<1))}},n.exports=l},{"../utils":32}],19:[function(t,n,r){var s=t("./Uint8ArrayReader"),l=t("../utils");function a(o){s.call(this,o)}l.inherits(a,s),a.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var s=t("./DataReader"),l=t("../utils");function a(o){s.call(this,o)}l.inherits(a,s),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){var f=this.readData(4);return o===f},a.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var s=t("./ArrayReader"),l=t("../utils");function a(o){s.call(this,o)}l.inherits(a,s),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var f=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var s=t("../utils"),l=t("../support"),a=t("./ArrayReader"),o=t("./StringReader"),f=t("./NodeBufferReader"),c=t("./Uint8ArrayReader");n.exports=function(u){var d=s.getTypeOf(u);return s.checkSupport(d),d==="string"&&!l.uint8array?new o(u):d==="nodebuffer"?new f(u):l.uint8array?new c(s.transformTo("uint8array",u)):new a(s.transformTo("array",u))}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var s=t("./GenericWorker"),l=t("../utils");function a(o){s.call(this,"ConvertWorker to "+o),this.destType=o}l.inherits(a,s),a.prototype.processChunk=function(o){this.push({data:l.transformTo(this.destType,o.data),meta:o.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var s=t("./GenericWorker"),l=t("../crc32"),a=t("../utils");function o(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}a.inherits(o,s),o.prototype.processChunk=function(f){this.streamInfo.crc32=l(f.data,this.streamInfo.crc32||0),this.push(f)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var s=t("../utils"),l=t("./GenericWorker");function a(o){l.call(this,"DataLengthProbe for "+o),this.propName=o,this.withStreamInfo(o,0)}s.inherits(a,l),a.prototype.processChunk=function(o){if(o){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+o.data.length}l.prototype.processChunk.call(this,o)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var s=t("../utils"),l=t("./GenericWorker"),a=16*1024;function o(f){l.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,f.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=s.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}s.inherits(o,l),o.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return l.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0):!1},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var f=a,c=null,u=Math.min(this.max,this.index+f);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,u);break;case"uint8array":c=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":c=this.data.slice(this.index,u);break}return this.index=u,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return this.isFinished?!1:(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,a){return this._listeners[l].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,a){if(this._listeners[l])for(var o=0;o<this._listeners[l].length;o++)this._listeners[l][o].call(this,a)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var a=this;return l.on("data",function(o){a.processChunk(o)}),l.on("end",function(){a.end()}),l.on("error",function(o){a.error(o)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var l=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,a){return this.extraStreamInfo[l]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},n.exports=s},{}],29:[function(t,n,r){var s=t("../utils"),l=t("./ConvertWorker"),a=t("./GenericWorker"),o=t("../base64"),f=t("../support"),c=t("../external"),u=null;if(f.nodestream)try{u=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function d(h,m,x){switch(h){case"blob":return s.newBlob(s.transformTo("arraybuffer",m),x);case"base64":return o.encode(m);default:return s.transformTo(h,m)}}function p(h,m){var x,y=0,T=null,w=0;for(x=0;x<m.length;x++)w+=m[x].length;switch(h){case"string":return m.join("");case"array":return Array.prototype.concat.apply([],m);case"uint8array":for(T=new Uint8Array(w),x=0;x<m.length;x++)T.set(m[x],y),y+=m[x].length;return T;case"nodebuffer":return Buffer.concat(m);default:throw new Error("concat : unsupported type '"+h+"'")}}function _(h,m){return new c.Promise(function(x,y){var T=[],w=h._internalType,M=h._outputType,S=h._mimeType;h.on("data",function(I,U){T.push(I),m&&m(U)}).on("error",function(I){T=[],y(I)}).on("end",function(){try{var I=d(M,p(w,T),S);x(I)}catch(U){y(U)}T=[]}).resume()})}function g(h,m,x){var y=m;switch(m){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string";break}try{this._internalType=y,this._outputType=m,this._mimeType=x,s.checkSupport(y),this._worker=h.pipe(new l(y)),h.lock()}catch(T){this._worker=new a("error"),this._worker.error(T)}}g.prototype={accumulate:function(h){return _(this,h)},on:function(h,m){var x=this;return h==="data"?this._worker.on(h,function(y){m.call(x,y.data,y.meta)}):this._worker.on(h,function(){s.delay(m,arguments,x)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(h){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new u(this,{objectMode:this._outputType!=="nodebuffer"},h)}},n.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,a=new l;a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var s=t("./utils"),l=t("./support"),a=t("./nodejsUtils"),o=t("./stream/GenericWorker"),f=new Array(256),c=0;c<256;c++)f[c]=c>=252?6:c>=248?5:c>=240?4:c>=224?3:c>=192?2:1;f[254]=f[254]=1;var u=function(h){var m,x,y,T,w,M=h.length,S=0;for(T=0;T<M;T++)x=h.charCodeAt(T),(x&64512)===55296&&T+1<M&&(y=h.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),S+=x<128?1:x<2048?2:x<65536?3:4;for(l.uint8array?m=new Uint8Array(S):m=new Array(S),w=0,T=0;w<S;T++)x=h.charCodeAt(T),(x&64512)===55296&&T+1<M&&(y=h.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),x<128?m[w++]=x:x<2048?(m[w++]=192|x>>>6,m[w++]=128|x&63):x<65536?(m[w++]=224|x>>>12,m[w++]=128|x>>>6&63,m[w++]=128|x&63):(m[w++]=240|x>>>18,m[w++]=128|x>>>12&63,m[w++]=128|x>>>6&63,m[w++]=128|x&63);return m},d=function(h,m){var x;for(m=m||h.length,m>h.length&&(m=h.length),x=m-1;x>=0&&(h[x]&192)===128;)x--;return x<0||x===0?m:x+f[h[x]]>m?x:m},p=function(h){var m,x,y,T,w=h.length,M=new Array(w*2);for(x=0,m=0;m<w;){if(y=h[m++],y<128){M[x++]=y;continue}if(T=f[y],T>4){M[x++]=65533,m+=T-1;continue}for(y&=T===2?31:T===3?15:7;T>1&&m<w;)y=y<<6|h[m++]&63,T--;if(T>1){M[x++]=65533;continue}y<65536?M[x++]=y:(y-=65536,M[x++]=55296|y>>10&1023,M[x++]=56320|y&1023)}return M.length!==x&&(M.subarray?M=M.subarray(0,x):M.length=x),s.applyFromCharCode(M)};r.utf8encode=function(m){return l.nodebuffer?a.newBufferFrom(m,"utf-8"):u(m)},r.utf8decode=function(m){return l.nodebuffer?s.transformTo("nodebuffer",m).toString("utf-8"):(m=s.transformTo(l.uint8array?"uint8array":"array",m),p(m))};function _(){o.call(this,"utf-8 decode"),this.leftOver=null}s.inherits(_,o),_.prototype.processChunk=function(h){var m=s.transformTo(l.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var x=m;m=new Uint8Array(x.length+this.leftOver.length),m.set(this.leftOver,0),m.set(x,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var y=d(m),T=m;y!==m.length&&(l.uint8array?(T=m.subarray(0,y),this.leftOver=m.subarray(y,m.length)):(T=m.slice(0,y),this.leftOver=m.slice(y,m.length))),this.push({data:r.utf8decode(T),meta:h.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=_;function g(){o.call(this,"utf-8 encode")}s.inherits(g,o),g.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var s=t("./support"),l=t("./base64"),a=t("./nodejsUtils"),o=t("./external");t("setimmediate");function f(h){var m=null;return s.uint8array?m=new Uint8Array(h.length):m=new Array(h.length),u(h,m)}r.newBlob=function(h,m){r.checkSupport("blob");try{return new Blob([h],{type:m})}catch{try{var x=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,y=new x;return y.append(h),y.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};function c(h){return h}function u(h,m){for(var x=0;x<h.length;++x)m[x]=h.charCodeAt(x)&255;return m}var d={stringifyByChunk:function(h,m,x){var y=[],T=0,w=h.length;if(w<=x)return String.fromCharCode.apply(null,h);for(;T<w;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,h.slice(T,Math.min(T+x,w)))):y.push(String.fromCharCode.apply(null,h.subarray(T,Math.min(T+x,w)))),T+=x;return y.join("")},stringifyByChar:function(h){for(var m="",x=0;x<h.length;x++)m+=String.fromCharCode(h[x]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function p(h){var m=65536,x=r.getTypeOf(h),y=!0;if(x==="uint8array"?y=d.applyCanBeUsed.uint8array:x==="nodebuffer"&&(y=d.applyCanBeUsed.nodebuffer),y)for(;m>1;)try{return d.stringifyByChunk(h,x,m)}catch{m=Math.floor(m/2)}return d.stringifyByChar(h)}r.applyFromCharCode=p;function _(h,m){for(var x=0;x<h.length;x++)m[x]=h[x];return m}var g={};g.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return g.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,a.allocBuffer(h.length))}},g.array={string:p,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(h)}},g.arraybuffer={string:function(h){return p(new Uint8Array(h))},array:function(h){return _(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(new Uint8Array(h))}},g.uint8array={string:p,array:function(h){return _(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return a.newBufferFrom(h)}},g.nodebuffer={string:p,array:function(h){return _(h,new Array(h.length))},arraybuffer:function(h){return g.nodebuffer.uint8array(h).buffer},uint8array:function(h){return _(h,new Uint8Array(h.length))},nodebuffer:c},r.transformTo=function(h,m){if(m||(m=""),!h)return m;r.checkSupport(h);var x=r.getTypeOf(m),y=g[x][h](m);return y},r.resolve=function(h){for(var m=h.split("/"),x=[],y=0;y<m.length;y++){var T=m[y];T==="."||T===""&&y!==0&&y!==m.length-1||(T===".."?x.pop():x.push(T))}return x.join("/")},r.getTypeOf=function(h){if(typeof h=="string")return"string";if(Object.prototype.toString.call(h)==="[object Array]")return"array";if(s.nodebuffer&&a.isBuffer(h))return"nodebuffer";if(s.uint8array&&h instanceof Uint8Array)return"uint8array";if(s.arraybuffer&&h instanceof ArrayBuffer)return"arraybuffer"},r.checkSupport=function(h){var m=s[h.toLowerCase()];if(!m)throw new Error(h+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(h){var m="",x,y;for(y=0;y<(h||"").length;y++)x=h.charCodeAt(y),m+="\\x"+(x<16?"0":"")+x.toString(16).toUpperCase();return m},r.delay=function(h,m,x){setImmediate(function(){h.apply(x||null,m||[])})},r.inherits=function(h,m){var x=function(){};x.prototype=m.prototype,h.prototype=new x},r.extend=function(){var h={},m,x;for(m=0;m<arguments.length;m++)for(x in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],x)&&typeof h[x]>"u"&&(h[x]=arguments[m][x]);return h},r.prepareContent=function(h,m,x,y,T){var w=o.Promise.resolve(m).then(function(M){var S=s.blob&&(M instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(M))!==-1);return S&&typeof FileReader<"u"?new o.Promise(function(I,U){var b=new FileReader;b.onload=function(L){I(L.target.result)},b.onerror=function(L){U(L.target.error)},b.readAsArrayBuffer(M)}):M});return w.then(function(M){var S=r.getTypeOf(M);return S?(S==="arraybuffer"?M=r.transformTo("uint8array",M):S==="string"&&(T?M=l.decode(M):x&&y!==!0&&(M=f(M))),M):o.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var s=t("./reader/readerFor"),l=t("./utils"),a=t("./signature"),o=t("./zipEntry"),f=t("./support");function c(u){this.files=[],this.loadOptions=u}c.prototype={checkSignature:function(u){if(!this.reader.readAndCheckSignature(u)){this.reader.index-=4;var d=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(d)+", expected "+l.pretty(u)+")")}},isSignature:function(u,d){var p=this.reader.index;this.reader.setIndex(u);var _=this.reader.readString(4),g=_===d;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var u=this.reader.readData(this.zipCommentLength),d=f.uint8array?"uint8array":"array",p=l.transformTo(d,u);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var u=this.zip64EndOfCentralSize-44,d=0,p,_,g;d<u;)p=this.reader.readInt(2),_=this.reader.readInt(4),g=this.reader.readData(_),this.zip64ExtensibleData[p]={id:p,length:_,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var u,d;for(u=0;u<this.files.length;u++)d=this.files[u],this.reader.setIndex(d.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),d.readLocalPart(this.reader),d.handleUTF8(),d.processAttributes()},readCentralDir:function(){var u;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)u=new o({zip64:this.zip64},this.loadOptions),u.readCentralPart(this.reader),this.files.push(u);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var u=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(u<0){var d=!this.isSignature(0,a.LOCAL_FILE_HEADER);throw d?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(u);var p=u;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,u=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),u<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(u),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var _=this.centralDirOffset+this.centralDirSize;this.zip64&&(_+=20,_+=12+this.zip64EndOfCentralSize);var g=p-_;if(g>0)this.isSignature(p,a.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(u){this.reader=s(u)},load:function(u){this.prepareReader(u),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var s=t("./reader/readerFor"),l=t("./utils"),a=t("./compressedObject"),o=t("./crc32"),f=t("./utf8"),c=t("./compressions"),u=t("./support"),d=0,p=3,_=function(h){for(var m in c)if(Object.prototype.hasOwnProperty.call(c,m)&&c[m].magic===h)return c[m];return null};function g(h,m){this.options=h,this.loadOptions=m}g.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(h){var m,x;if(h.skip(22),this.fileNameLength=h.readInt(2),x=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(x),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(m=_(this.compressionMethod),m===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,m,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var m=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(m),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),h===d&&(this.dosPermissions=this.externalFileAttributes&63),h===p&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var m=h.index+this.extraFieldsLength,x,y,T;for(this.extraFields||(this.extraFields={});h.index+4<m;)x=h.readInt(2),y=h.readInt(2),T=h.readData(y),this.extraFields[x]={id:x,length:y,value:T};h.setIndex(m)},handleUTF8:function(){var h=u.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var x=l.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(x)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var T=l.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(T)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var m=s(h.value);return m.readInt(1)!==1||o(this.fileName)!==m.readInt(4)?null:f.utf8decode(m.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var m=s(h.value);return m.readInt(1)!==1||o(this.fileComment)!==m.readInt(4)?null:f.utf8decode(m.readData(h.length-5))}return null}},n.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){var s=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),a=t("./utf8"),o=t("./compressedObject"),f=t("./stream/GenericWorker"),c=function(_,g,h){this.name=_,this.dir=h.dir,this.date=h.date,this.comment=h.comment,this.unixPermissions=h.unixPermissions,this.dosPermissions=h.dosPermissions,this._data=g,this._dataBinary=h.binary,this.options={compression:h.compression,compressionOptions:h.compressionOptions}};c.prototype={internalStream:function(_){var g=null,h="string";try{if(!_)throw new Error("No output type specified.");h=_.toLowerCase();var m=h==="string"||h==="text";(h==="binarystring"||h==="text")&&(h="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!m&&(g=g.pipe(new a.Utf8EncodeWorker)),!x&&m&&(g=g.pipe(new a.Utf8DecodeWorker))}catch(y){g=new f("error"),g.error(y)}return new s(g,h,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof o&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var h=this._decompressWorker();return this._dataBinary||(h=h.pipe(new a.Utf8EncodeWorker)),o.createWorkerFrom(h,_,g)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof f?this._data:new l(this._data)}};for(var u=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],d=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<u.length;p++)c.prototype[u[p]]=d;n.exports=c},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(s){var l=s.MutationObserver||s.WebKitMutationObserver,a;if(l){var o=0,f=new l(_),c=s.document.createTextNode("");f.observe(c,{characterData:!0}),a=function(){c.data=o=++o%2}}else if(!s.setImmediate&&typeof s.MessageChannel<"u"){var u=new s.MessageChannel;u.port1.onmessage=_,a=function(){u.port2.postMessage(0)}}else"document"in s&&"onreadystatechange"in s.document.createElement("script")?a=function(){var h=s.document.createElement("script");h.onreadystatechange=function(){_(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},s.document.documentElement.appendChild(h)}:a=function(){setTimeout(_,0)};var d,p=[];function _(){d=!0;for(var h,m,x=p.length;x;){for(m=p,p=[],h=-1;++h<x;)m[h]();x=p.length}d=!1}n.exports=g;function g(h){p.push(h)===1&&!d&&a()}}).call(this,typeof Qt<"u"?Qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var s=t("immediate");function l(){}var a={},o=["REJECTED"],f=["FULFILLED"],c=["PENDING"];n.exports=u;function u(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,w!==l&&g(this,w)}u.prototype.finally=function(w){if(typeof w!="function")return this;var M=this.constructor;return this.then(S,I);function S(U){function b(){return U}return M.resolve(w()).then(b)}function I(U){function b(){throw U}return M.resolve(w()).then(b)}},u.prototype.catch=function(w){return this.then(null,w)},u.prototype.then=function(w,M){if(typeof w!="function"&&this.state===f||typeof M!="function"&&this.state===o)return this;var S=new this.constructor(l);if(this.state!==c){var I=this.state===f?w:M;p(S,I,this.outcome)}else this.queue.push(new d(S,w,M));return S};function d(w,M,S){this.promise=w,typeof M=="function"&&(this.onFulfilled=M,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}d.prototype.callFulfilled=function(w){a.resolve(this.promise,w)},d.prototype.otherCallFulfilled=function(w){p(this.promise,this.onFulfilled,w)},d.prototype.callRejected=function(w){a.reject(this.promise,w)},d.prototype.otherCallRejected=function(w){p(this.promise,this.onRejected,w)};function p(w,M,S){s(function(){var I;try{I=M(S)}catch(U){return a.reject(w,U)}I===w?a.reject(w,new TypeError("Cannot resolve promise with itself")):a.resolve(w,I)})}a.resolve=function(w,M){var S=h(_,M);if(S.status==="error")return a.reject(w,S.value);var I=S.value;if(I)g(w,I);else{w.state=f,w.outcome=M;for(var U=-1,b=w.queue.length;++U<b;)w.queue[U].callFulfilled(M)}return w},a.reject=function(w,M){w.state=o,w.outcome=M;for(var S=-1,I=w.queue.length;++S<I;)w.queue[S].callRejected(M);return w};function _(w){var M=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof M=="function")return function(){M.apply(w,arguments)}}function g(w,M){var S=!1;function I(F){S||(S=!0,a.reject(w,F))}function U(F){S||(S=!0,a.resolve(w,F))}function b(){M(U,I)}var L=h(b);L.status==="error"&&I(L.value)}function h(w,M){var S={};try{S.value=w(M),S.status="success"}catch(I){S.status="error",S.value=I}return S}u.resolve=m;function m(w){return w instanceof this?w:a.resolve(new this(l),w)}u.reject=x;function x(w){var M=new this(l);return a.reject(M,w)}u.all=y;function y(w){var M=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,I=!1;if(!S)return this.resolve([]);for(var U=new Array(S),b=0,L=-1,F=new this(l);++L<S;)j(w[L],L);return F;function j(N,G){M.resolve(N).then(z,function(ee){I||(I=!0,a.reject(F,ee))});function z(ee){U[G]=ee,++b===S&&!I&&(I=!0,a.resolve(F,U))}}}u.race=T;function T(w){var M=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,I=!1;if(!S)return this.resolve([]);for(var U=-1,b=new this(l);++U<S;)L(w[U]);return b;function L(F){M.resolve(F).then(function(j){I||(I=!0,a.resolve(b,j))},function(j){I||(I=!0,a.reject(b,j))})}}},{immediate:36}],38:[function(t,n,r){var s=t("./lib/utils/common").assign,l=t("./lib/deflate"),a=t("./lib/inflate"),o=t("./lib/zlib/constants"),f={};s(f,l,a,o),n.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var s=t("./zlib/deflate"),l=t("./utils/common"),a=t("./utils/strings"),o=t("./zlib/messages"),f=t("./zlib/zstream"),c=Object.prototype.toString,u=0,d=4,p=0,_=1,g=2,h=-1,m=0,x=8;function y(S){if(!(this instanceof y))return new y(S);this.options=l.assign({level:h,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var I=this.options;I.raw&&I.windowBits>0?I.windowBits=-I.windowBits:I.gzip&&I.windowBits>0&&I.windowBits<16&&(I.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var U=s.deflateInit2(this.strm,I.level,I.method,I.windowBits,I.memLevel,I.strategy);if(U!==p)throw new Error(o[U]);if(I.header&&s.deflateSetHeader(this.strm,I.header),I.dictionary){var b;if(typeof I.dictionary=="string"?b=a.string2buf(I.dictionary):c.call(I.dictionary)==="[object ArrayBuffer]"?b=new Uint8Array(I.dictionary):b=I.dictionary,U=s.deflateSetDictionary(this.strm,b),U!==p)throw new Error(o[U]);this._dict_set=!0}}y.prototype.push=function(S,I){var U=this.strm,b=this.options.chunkSize,L,F;if(this.ended)return!1;F=I===~~I?I:I===!0?d:u,typeof S=="string"?U.input=a.string2buf(S):c.call(S)==="[object ArrayBuffer]"?U.input=new Uint8Array(S):U.input=S,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new l.Buf8(b),U.next_out=0,U.avail_out=b),L=s.deflate(U,F),L!==_&&L!==p)return this.onEnd(L),this.ended=!0,!1;(U.avail_out===0||U.avail_in===0&&(F===d||F===g))&&(this.options.to==="string"?this.onData(a.buf2binstring(l.shrinkBuf(U.output,U.next_out))):this.onData(l.shrinkBuf(U.output,U.next_out)))}while((U.avail_in>0||U.avail_out===0)&&L!==_);return F===d?(L=s.deflateEnd(this.strm),this.onEnd(L),this.ended=!0,L===p):(F===g&&(this.onEnd(p),U.avail_out=0),!0)},y.prototype.onData=function(S){this.chunks.push(S)},y.prototype.onEnd=function(S){S===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg};function T(S,I){var U=new y(I);if(U.push(S,!0),U.err)throw U.msg||o[U.err];return U.result}function w(S,I){return I=I||{},I.raw=!0,T(S,I)}function M(S,I){return I=I||{},I.gzip=!0,T(S,I)}r.Deflate=y,r.deflate=T,r.deflateRaw=w,r.gzip=M},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var s=t("./zlib/inflate"),l=t("./utils/common"),a=t("./utils/strings"),o=t("./zlib/constants"),f=t("./zlib/messages"),c=t("./zlib/zstream"),u=t("./zlib/gzheader"),d=Object.prototype.toString;function p(h){if(!(this instanceof p))return new p(h);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},h||{});var m=this.options;m.raw&&m.windowBits>=0&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),m.windowBits>=0&&m.windowBits<16&&!(h&&h.windowBits)&&(m.windowBits+=32),m.windowBits>15&&m.windowBits<48&&(m.windowBits&15||(m.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var x=s.inflateInit2(this.strm,m.windowBits);if(x!==o.Z_OK)throw new Error(f[x]);this.header=new u,s.inflateGetHeader(this.strm,this.header)}p.prototype.push=function(h,m){var x=this.strm,y=this.options.chunkSize,T=this.options.dictionary,w,M,S,I,U,b,L=!1;if(this.ended)return!1;M=m===~~m?m:m===!0?o.Z_FINISH:o.Z_NO_FLUSH,typeof h=="string"?x.input=a.binstring2buf(h):d.call(h)==="[object ArrayBuffer]"?x.input=new Uint8Array(h):x.input=h,x.next_in=0,x.avail_in=x.input.length;do{if(x.avail_out===0&&(x.output=new l.Buf8(y),x.next_out=0,x.avail_out=y),w=s.inflate(x,o.Z_NO_FLUSH),w===o.Z_NEED_DICT&&T&&(typeof T=="string"?b=a.string2buf(T):d.call(T)==="[object ArrayBuffer]"?b=new Uint8Array(T):b=T,w=s.inflateSetDictionary(this.strm,b)),w===o.Z_BUF_ERROR&&L===!0&&(w=o.Z_OK,L=!1),w!==o.Z_STREAM_END&&w!==o.Z_OK)return this.onEnd(w),this.ended=!0,!1;x.next_out&&(x.avail_out===0||w===o.Z_STREAM_END||x.avail_in===0&&(M===o.Z_FINISH||M===o.Z_SYNC_FLUSH))&&(this.options.to==="string"?(S=a.utf8border(x.output,x.next_out),I=x.next_out-S,U=a.buf2string(x.output,S),x.next_out=I,x.avail_out=y-I,I&&l.arraySet(x.output,x.output,S,I,0),this.onData(U)):this.onData(l.shrinkBuf(x.output,x.next_out))),x.avail_in===0&&x.avail_out===0&&(L=!0)}while((x.avail_in>0||x.avail_out===0)&&w!==o.Z_STREAM_END);return w===o.Z_STREAM_END&&(M=o.Z_FINISH),M===o.Z_FINISH?(w=s.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===o.Z_OK):(M===o.Z_SYNC_FLUSH&&(this.onEnd(o.Z_OK),x.avail_out=0),!0)},p.prototype.onData=function(h){this.chunks.push(h)},p.prototype.onEnd=function(h){h===o.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg};function _(h,m){var x=new p(m);if(x.push(h,!0),x.err)throw x.msg||f[x.err];return x.result}function g(h,m){return m=m||{},m.raw=!0,_(h,m)}r.Inflate=p,r.inflate=_,r.inflateRaw=g,r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(o){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var c=f.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var u in c)c.hasOwnProperty(u)&&(o[u]=c[u])}}return o},r.shrinkBuf=function(o,f){return o.length===f?o:o.subarray?o.subarray(0,f):(o.length=f,o)};var l={arraySet:function(o,f,c,u,d){if(f.subarray&&o.subarray){o.set(f.subarray(c,c+u),d);return}for(var p=0;p<u;p++)o[d+p]=f[c+p]},flattenChunks:function(o){var f,c,u,d,p,_;for(u=0,f=0,c=o.length;f<c;f++)u+=o[f].length;for(_=new Uint8Array(u),d=0,f=0,c=o.length;f<c;f++)p=o[f],_.set(p,d),d+=p.length;return _}},a={arraySet:function(o,f,c,u,d){for(var p=0;p<u;p++)o[d+p]=f[c+p]},flattenChunks:function(o){return[].concat.apply([],o)}};r.setTyped=function(o){o?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,l)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(t,n,r){var s=t("./common"),l=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new s.Buf8(256),f=0;f<256;f++)o[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;o[254]=o[254]=1,r.string2buf=function(u){var d,p,_,g,h,m=u.length,x=0;for(g=0;g<m;g++)p=u.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=u.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),x+=p<128?1:p<2048?2:p<65536?3:4;for(d=new s.Buf8(x),h=0,g=0;h<x;g++)p=u.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=u.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),p<128?d[h++]=p:p<2048?(d[h++]=192|p>>>6,d[h++]=128|p&63):p<65536?(d[h++]=224|p>>>12,d[h++]=128|p>>>6&63,d[h++]=128|p&63):(d[h++]=240|p>>>18,d[h++]=128|p>>>12&63,d[h++]=128|p>>>6&63,d[h++]=128|p&63);return d};function c(u,d){if(d<65537&&(u.subarray&&a||!u.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(u,d));for(var p="",_=0;_<d;_++)p+=String.fromCharCode(u[_]);return p}r.buf2binstring=function(u){return c(u,u.length)},r.binstring2buf=function(u){for(var d=new s.Buf8(u.length),p=0,_=d.length;p<_;p++)d[p]=u.charCodeAt(p);return d},r.buf2string=function(u,d){var p,_,g,h,m=d||u.length,x=new Array(m*2);for(_=0,p=0;p<m;){if(g=u[p++],g<128){x[_++]=g;continue}if(h=o[g],h>4){x[_++]=65533,p+=h-1;continue}for(g&=h===2?31:h===3?15:7;h>1&&p<m;)g=g<<6|u[p++]&63,h--;if(h>1){x[_++]=65533;continue}g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|g&1023)}return c(x,_)},r.utf8border=function(u,d){var p;for(d=d||u.length,d>u.length&&(d=u.length),p=d-1;p>=0&&(u[p]&192)===128;)p--;return p<0||p===0?d:p+o[u[p]]>d?p:d}},{"./common":41}],43:[function(t,n,r){function s(l,a,o,f){for(var c=l&65535|0,u=l>>>16&65535|0,d=0;o!==0;){d=o>2e3?2e3:o,o-=d;do c=c+a[f++]|0,u=u+c|0;while(--d);c%=65521,u%=65521}return c|u<<16|0}n.exports=s},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){function s(){for(var o,f=[],c=0;c<256;c++){o=c;for(var u=0;u<8;u++)o=o&1?3988292384^o>>>1:o>>>1;f[c]=o}return f}var l=s();function a(o,f,c,u){var d=l,p=u+c;o^=-1;for(var _=u;_<p;_++)o=o>>>8^d[(o^f[_])&255];return o^-1}n.exports=a},{}],46:[function(t,n,r){var s=t("../utils/common"),l=t("./trees"),a=t("./adler32"),o=t("./crc32"),f=t("./messages"),c=0,u=1,d=3,p=4,_=5,g=0,h=1,m=-2,x=-3,y=-5,T=-1,w=1,M=2,S=3,I=4,U=0,b=2,L=8,F=9,j=15,N=8,G=29,z=256,ee=z+1+G,V=30,re=19,oe=2*ee+1,ue=15,Y=3,he=258,W=he+Y+1,ce=32,xe=42,we=69,ve=73,Se=91,ze=103,Ae=113,X=666,He=1,Pe=2,Oe=3,Le=4,Be=3;function Ne(v,K){return v.msg=f[K],K}function O(v){return(v<<1)-(v>4?9:0)}function P(v){for(var K=v.length;--K>=0;)v[K]=0}function J(v){var K=v.state,$=K.pending;$>v.avail_out&&($=v.avail_out),$!==0&&(s.arraySet(v.output,K.pending_buf,K.pending_out,$,v.next_out),v.next_out+=$,K.pending_out+=$,v.total_out+=$,v.avail_out-=$,K.pending-=$,K.pending===0&&(K.pending_out=0))}function fe(v,K){l._tr_flush_block(v,v.block_start>=0?v.block_start:-1,v.strstart-v.block_start,K),v.block_start=v.strstart,J(v.strm)}function se(v,K){v.pending_buf[v.pending++]=K}function _e(v,K){v.pending_buf[v.pending++]=K>>>8&255,v.pending_buf[v.pending++]=K&255}function De(v,K,$,R){var B=v.avail_in;return B>R&&(B=R),B===0?0:(v.avail_in-=B,s.arraySet(K,v.input,v.next_in,B,$),v.state.wrap===1?v.adler=a(v.adler,K,B,$):v.state.wrap===2&&(v.adler=o(v.adler,K,B,$)),v.next_in+=B,v.total_in+=B,B)}function ye(v,K){var $=v.max_chain_length,R=v.strstart,B,Z,Te=v.prev_length,be=v.nice_match,Ce=v.strstart>v.w_size-W?v.strstart-(v.w_size-W):0,it=v.window,Dt=v.w_mask,ot=v.prev,Je=v.strstart+he,ct=it[R+Te-1],pt=it[R+Te];v.prev_length>=v.good_match&&($>>=2),be>v.lookahead&&(be=v.lookahead);do if(B=K,!(it[B+Te]!==pt||it[B+Te-1]!==ct||it[B]!==it[R]||it[++B]!==it[R+1])){R+=2,B++;do;while(it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&it[++R]===it[++B]&&R<Je);if(Z=he-(Je-R),R=Je-he,Z>Te){if(v.match_start=K,Te=Z,Z>=be)break;ct=it[R+Te-1],pt=it[R+Te]}}while((K=ot[K&Dt])>Ce&&--$!==0);return Te<=v.lookahead?Te:v.lookahead}function Ee(v){var K=v.w_size,$,R,B,Z,Te;do{if(Z=v.window_size-v.lookahead-v.strstart,v.strstart>=K+(K-W)){s.arraySet(v.window,v.window,K,K,0),v.match_start-=K,v.strstart-=K,v.block_start-=K,R=v.hash_size,$=R;do B=v.head[--$],v.head[$]=B>=K?B-K:0;while(--R);R=K,$=R;do B=v.prev[--$],v.prev[$]=B>=K?B-K:0;while(--R);Z+=K}if(v.strm.avail_in===0)break;if(R=De(v.strm,v.window,v.strstart+v.lookahead,Z),v.lookahead+=R,v.lookahead+v.insert>=Y)for(Te=v.strstart-v.insert,v.ins_h=v.window[Te],v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+Y-1])&v.hash_mask,v.prev[Te&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=Te,Te++,v.insert--,!(v.lookahead+v.insert<Y)););}while(v.lookahead<W&&v.strm.avail_in!==0)}function Fe(v,K){var $=65535;for($>v.pending_buf_size-5&&($=v.pending_buf_size-5);;){if(v.lookahead<=1){if(Ee(v),v.lookahead===0&&K===c)return He;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var R=v.block_start+$;if((v.strstart===0||v.strstart>=R)&&(v.lookahead=v.strstart-R,v.strstart=R,fe(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-W&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):(v.strstart>v.block_start&&(fe(v,!1),v.strm.avail_out===0),He)}function Ge(v,K){for(var $,R;;){if(v.lookahead<W){if(Ee(v),v.lookahead<W&&K===c)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=Y&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+Y-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),$!==0&&v.strstart-$<=v.w_size-W&&(v.match_length=ye(v,$)),v.match_length>=Y)if(R=l._tr_tally(v,v.strstart-v.match_start,v.match_length-Y),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=Y){v.match_length--;do v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+Y-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart;while(--v.match_length!==0);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else R=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(R&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=v.strstart<Y-1?v.strstart:Y-1,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function de(v,K){for(var $,R,B;;){if(v.lookahead<W){if(Ee(v),v.lookahead<W&&K===c)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=Y&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+Y-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=Y-1,$!==0&&v.prev_length<v.max_lazy_match&&v.strstart-$<=v.w_size-W&&(v.match_length=ye(v,$),v.match_length<=5&&(v.strategy===w||v.match_length===Y&&v.strstart-v.match_start>4096)&&(v.match_length=Y-1)),v.prev_length>=Y&&v.match_length<=v.prev_length){B=v.strstart+v.lookahead-Y,R=l._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-Y),v.lookahead-=v.prev_length-1,v.prev_length-=2;do++v.strstart<=B&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+Y-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart);while(--v.prev_length!==0);if(v.match_available=0,v.match_length=Y-1,v.strstart++,R&&(fe(v,!1),v.strm.avail_out===0))return He}else if(v.match_available){if(R=l._tr_tally(v,0,v.window[v.strstart-1]),R&&fe(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return He}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(R=l._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<Y-1?v.strstart:Y-1,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Xe(v,K){for(var $,R,B,Z,Te=v.window;;){if(v.lookahead<=he){if(Ee(v),v.lookahead<=he&&K===c)return He;if(v.lookahead===0)break}if(v.match_length=0,v.lookahead>=Y&&v.strstart>0&&(B=v.strstart-1,R=Te[B],R===Te[++B]&&R===Te[++B]&&R===Te[++B])){Z=v.strstart+he;do;while(R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&R===Te[++B]&&B<Z);v.match_length=he-(Z-B),v.match_length>v.lookahead&&(v.match_length=v.lookahead)}if(v.match_length>=Y?($=l._tr_tally(v,1,v.match_length-Y),v.lookahead-=v.match_length,v.strstart+=v.match_length,v.match_length=0):($=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++),$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ve(v,K){for(var $;;){if(v.lookahead===0&&(Ee(v),v.lookahead===0)){if(K===c)return He;break}if(v.match_length=0,$=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++,$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ie(v,K,$,R,B){this.good_length=v,this.max_lazy=K,this.nice_length=$,this.max_chain=R,this.func=B}var Ue;Ue=[new Ie(0,0,0,0,Fe),new Ie(4,4,8,4,Ge),new Ie(4,5,16,8,Ge),new Ie(4,6,32,32,Ge),new Ie(4,4,16,16,de),new Ie(8,16,32,32,de),new Ie(8,16,128,128,de),new Ie(8,32,128,256,de),new Ie(32,128,258,1024,de),new Ie(32,258,258,4096,de)];function me(v){v.window_size=2*v.w_size,P(v.head),v.max_lazy_match=Ue[v.level].max_lazy,v.good_match=Ue[v.level].good_length,v.nice_match=Ue[v.level].nice_length,v.max_chain_length=Ue[v.level].max_chain,v.strstart=0,v.block_start=0,v.lookahead=0,v.insert=0,v.match_length=v.prev_length=Y-1,v.match_available=0,v.ins_h=0}function A(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=L,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new s.Buf16(oe*2),this.dyn_dtree=new s.Buf16((2*V+1)*2),this.bl_tree=new s.Buf16((2*re+1)*2),P(this.dyn_ltree),P(this.dyn_dtree),P(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new s.Buf16(ue+1),this.heap=new s.Buf16(2*ee+1),P(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new s.Buf16(2*ee+1),P(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function te(v){var K;return!v||!v.state?Ne(v,m):(v.total_in=v.total_out=0,v.data_type=b,K=v.state,K.pending=0,K.pending_out=0,K.wrap<0&&(K.wrap=-K.wrap),K.status=K.wrap?xe:Ae,v.adler=K.wrap===2?0:1,K.last_flush=c,l._tr_init(K),g)}function le(v){var K=te(v);return K===g&&me(v.state),K}function ge(v,K){return!v||!v.state||v.state.wrap!==2?m:(v.state.gzhead=K,g)}function k(v,K,$,R,B,Z){if(!v)return m;var Te=1;if(K===T&&(K=6),R<0?(Te=0,R=-R):R>15&&(Te=2,R-=16),B<1||B>F||$!==L||R<8||R>15||K<0||K>9||Z<0||Z>I)return Ne(v,m);R===8&&(R=9);var be=new A;return v.state=be,be.strm=v,be.wrap=Te,be.gzhead=null,be.w_bits=R,be.w_size=1<<be.w_bits,be.w_mask=be.w_size-1,be.hash_bits=B+7,be.hash_size=1<<be.hash_bits,be.hash_mask=be.hash_size-1,be.hash_shift=~~((be.hash_bits+Y-1)/Y),be.window=new s.Buf8(be.w_size*2),be.head=new s.Buf16(be.hash_size),be.prev=new s.Buf16(be.w_size),be.lit_bufsize=1<<B+6,be.pending_buf_size=be.lit_bufsize*4,be.pending_buf=new s.Buf8(be.pending_buf_size),be.d_buf=1*be.lit_bufsize,be.l_buf=(1+2)*be.lit_bufsize,be.level=K,be.strategy=Z,be.method=$,le(v)}function C(v,K){return k(v,K,L,j,N,U)}function E(v,K){var $,R,B,Z;if(!v||!v.state||K>_||K<0)return v?Ne(v,m):m;if(R=v.state,!v.output||!v.input&&v.avail_in!==0||R.status===X&&K!==p)return Ne(v,v.avail_out===0?y:m);if(R.strm=v,$=R.last_flush,R.last_flush=K,R.status===xe)if(R.wrap===2)v.adler=0,se(R,31),se(R,139),se(R,8),R.gzhead?(se(R,(R.gzhead.text?1:0)+(R.gzhead.hcrc?2:0)+(R.gzhead.extra?4:0)+(R.gzhead.name?8:0)+(R.gzhead.comment?16:0)),se(R,R.gzhead.time&255),se(R,R.gzhead.time>>8&255),se(R,R.gzhead.time>>16&255),se(R,R.gzhead.time>>24&255),se(R,R.level===9?2:R.strategy>=M||R.level<2?4:0),se(R,R.gzhead.os&255),R.gzhead.extra&&R.gzhead.extra.length&&(se(R,R.gzhead.extra.length&255),se(R,R.gzhead.extra.length>>8&255)),R.gzhead.hcrc&&(v.adler=o(v.adler,R.pending_buf,R.pending,0)),R.gzindex=0,R.status=we):(se(R,0),se(R,0),se(R,0),se(R,0),se(R,0),se(R,R.level===9?2:R.strategy>=M||R.level<2?4:0),se(R,Be),R.status=Ae);else{var Te=L+(R.w_bits-8<<4)<<8,be=-1;R.strategy>=M||R.level<2?be=0:R.level<6?be=1:R.level===6?be=2:be=3,Te|=be<<6,R.strstart!==0&&(Te|=ce),Te+=31-Te%31,R.status=Ae,_e(R,Te),R.strstart!==0&&(_e(R,v.adler>>>16),_e(R,v.adler&65535)),v.adler=1}if(R.status===we)if(R.gzhead.extra){for(B=R.pending;R.gzindex<(R.gzhead.extra.length&65535)&&!(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size));)se(R,R.gzhead.extra[R.gzindex]&255),R.gzindex++;R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),R.gzindex===R.gzhead.extra.length&&(R.gzindex=0,R.status=ve)}else R.status=ve;if(R.status===ve)if(R.gzhead.name){B=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size)){Z=1;break}R.gzindex<R.gzhead.name.length?Z=R.gzhead.name.charCodeAt(R.gzindex++)&255:Z=0,se(R,Z)}while(Z!==0);R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),Z===0&&(R.gzindex=0,R.status=Se)}else R.status=Se;if(R.status===Se)if(R.gzhead.comment){B=R.pending;do{if(R.pending===R.pending_buf_size&&(R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),J(v),B=R.pending,R.pending===R.pending_buf_size)){Z=1;break}R.gzindex<R.gzhead.comment.length?Z=R.gzhead.comment.charCodeAt(R.gzindex++)&255:Z=0,se(R,Z)}while(Z!==0);R.gzhead.hcrc&&R.pending>B&&(v.adler=o(v.adler,R.pending_buf,R.pending-B,B)),Z===0&&(R.status=ze)}else R.status=ze;if(R.status===ze&&(R.gzhead.hcrc?(R.pending+2>R.pending_buf_size&&J(v),R.pending+2<=R.pending_buf_size&&(se(R,v.adler&255),se(R,v.adler>>8&255),v.adler=0,R.status=Ae)):R.status=Ae),R.pending!==0){if(J(v),v.avail_out===0)return R.last_flush=-1,g}else if(v.avail_in===0&&O(K)<=O($)&&K!==p)return Ne(v,y);if(R.status===X&&v.avail_in!==0)return Ne(v,y);if(v.avail_in!==0||R.lookahead!==0||K!==c&&R.status!==X){var Ce=R.strategy===M?Ve(R,K):R.strategy===S?Xe(R,K):Ue[R.level].func(R,K);if((Ce===Oe||Ce===Le)&&(R.status=X),Ce===He||Ce===Oe)return v.avail_out===0&&(R.last_flush=-1),g;if(Ce===Pe&&(K===u?l._tr_align(R):K!==_&&(l._tr_stored_block(R,0,0,!1),K===d&&(P(R.head),R.lookahead===0&&(R.strstart=0,R.block_start=0,R.insert=0))),J(v),v.avail_out===0))return R.last_flush=-1,g}return K!==p?g:R.wrap<=0?h:(R.wrap===2?(se(R,v.adler&255),se(R,v.adler>>8&255),se(R,v.adler>>16&255),se(R,v.adler>>24&255),se(R,v.total_in&255),se(R,v.total_in>>8&255),se(R,v.total_in>>16&255),se(R,v.total_in>>24&255)):(_e(R,v.adler>>>16),_e(R,v.adler&65535)),J(v),R.wrap>0&&(R.wrap=-R.wrap),R.pending!==0?g:h)}function H(v){var K;return!v||!v.state?m:(K=v.state.status,K!==xe&&K!==we&&K!==ve&&K!==Se&&K!==ze&&K!==Ae&&K!==X?Ne(v,m):(v.state=null,K===Ae?Ne(v,x):g))}function pe(v,K){var $=K.length,R,B,Z,Te,be,Ce,it,Dt;if(!v||!v.state||(R=v.state,Te=R.wrap,Te===2||Te===1&&R.status!==xe||R.lookahead))return m;for(Te===1&&(v.adler=a(v.adler,K,$,0)),R.wrap=0,$>=R.w_size&&(Te===0&&(P(R.head),R.strstart=0,R.block_start=0,R.insert=0),Dt=new s.Buf8(R.w_size),s.arraySet(Dt,K,$-R.w_size,R.w_size,0),K=Dt,$=R.w_size),be=v.avail_in,Ce=v.next_in,it=v.input,v.avail_in=$,v.next_in=0,v.input=K,Ee(R);R.lookahead>=Y;){B=R.strstart,Z=R.lookahead-(Y-1);do R.ins_h=(R.ins_h<<R.hash_shift^R.window[B+Y-1])&R.hash_mask,R.prev[B&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=B,B++;while(--Z);R.strstart=B,R.lookahead=Y-1,Ee(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=Y-1,R.match_available=0,v.next_in=Ce,v.input=it,v.avail_in=be,R.wrap=Te,g}r.deflateInit=C,r.deflateInit2=k,r.deflateReset=le,r.deflateResetKeep=te,r.deflateSetHeader=ge,r.deflate=E,r.deflateEnd=H,r.deflateSetDictionary=pe,r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){function s(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}n.exports=s},{}],48:[function(t,n,r){var s=30,l=12;n.exports=function(o,f){var c,u,d,p,_,g,h,m,x,y,T,w,M,S,I,U,b,L,F,j,N,G,z,ee,V;c=o.state,u=o.next_in,ee=o.input,d=u+(o.avail_in-5),p=o.next_out,V=o.output,_=p-(f-o.avail_out),g=p+(o.avail_out-257),h=c.dmax,m=c.wsize,x=c.whave,y=c.wnext,T=c.window,w=c.hold,M=c.bits,S=c.lencode,I=c.distcode,U=(1<<c.lenbits)-1,b=(1<<c.distbits)-1;e:do{M<15&&(w+=ee[u++]<<M,M+=8,w+=ee[u++]<<M,M+=8),L=S[w&U];t:for(;;){if(F=L>>>24,w>>>=F,M-=F,F=L>>>16&255,F===0)V[p++]=L&65535;else if(F&16){j=L&65535,F&=15,F&&(M<F&&(w+=ee[u++]<<M,M+=8),j+=w&(1<<F)-1,w>>>=F,M-=F),M<15&&(w+=ee[u++]<<M,M+=8,w+=ee[u++]<<M,M+=8),L=I[w&b];n:for(;;){if(F=L>>>24,w>>>=F,M-=F,F=L>>>16&255,F&16){if(N=L&65535,F&=15,M<F&&(w+=ee[u++]<<M,M+=8,M<F&&(w+=ee[u++]<<M,M+=8)),N+=w&(1<<F)-1,N>h){o.msg="invalid distance too far back",c.mode=s;break e}if(w>>>=F,M-=F,F=p-_,N>F){if(F=N-F,F>x&&c.sane){o.msg="invalid distance too far back",c.mode=s;break e}if(G=0,z=T,y===0){if(G+=m-F,F<j){j-=F;do V[p++]=T[G++];while(--F);G=p-N,z=V}}else if(y<F){if(G+=m+y-F,F-=y,F<j){j-=F;do V[p++]=T[G++];while(--F);if(G=0,y<j){F=y,j-=F;do V[p++]=T[G++];while(--F);G=p-N,z=V}}}else if(G+=y-F,F<j){j-=F;do V[p++]=T[G++];while(--F);G=p-N,z=V}for(;j>2;)V[p++]=z[G++],V[p++]=z[G++],V[p++]=z[G++],j-=3;j&&(V[p++]=z[G++],j>1&&(V[p++]=z[G++]))}else{G=p-N;do V[p++]=V[G++],V[p++]=V[G++],V[p++]=V[G++],j-=3;while(j>2);j&&(V[p++]=V[G++],j>1&&(V[p++]=V[G++]))}}else if(F&64){o.msg="invalid distance code",c.mode=s;break e}else{L=I[(L&65535)+(w&(1<<F)-1)];continue n}break}}else if(F&64)if(F&32){c.mode=l;break e}else{o.msg="invalid literal/length code",c.mode=s;break e}else{L=S[(L&65535)+(w&(1<<F)-1)];continue t}break}}while(u<d&&p<g);j=M>>3,u-=j,M-=j<<3,w&=(1<<M)-1,o.next_in=u,o.next_out=p,o.avail_in=u<d?5+(d-u):5-(u-d),o.avail_out=p<g?257+(g-p):257-(p-g),c.hold=w,c.bits=M}},{}],49:[function(t,n,r){var s=t("../utils/common"),l=t("./adler32"),a=t("./crc32"),o=t("./inffast"),f=t("./inftrees"),c=0,u=1,d=2,p=4,_=5,g=6,h=0,m=1,x=2,y=-2,T=-3,w=-4,M=-5,S=8,I=1,U=2,b=3,L=4,F=5,j=6,N=7,G=8,z=9,ee=10,V=11,re=12,oe=13,ue=14,Y=15,he=16,W=17,ce=18,xe=19,we=20,ve=21,Se=22,ze=23,Ae=24,X=25,He=26,Pe=27,Oe=28,Le=29,Be=30,Ne=31,O=32,P=852,J=592,fe=15,se=fe;function _e(k){return(k>>>24&255)+(k>>>8&65280)+((k&65280)<<8)+((k&255)<<24)}function De(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ye(k){var C;return!k||!k.state?y:(C=k.state,k.total_in=k.total_out=C.total=0,k.msg="",C.wrap&&(k.adler=C.wrap&1),C.mode=I,C.last=0,C.havedict=0,C.dmax=32768,C.head=null,C.hold=0,C.bits=0,C.lencode=C.lendyn=new s.Buf32(P),C.distcode=C.distdyn=new s.Buf32(J),C.sane=1,C.back=-1,h)}function Ee(k){var C;return!k||!k.state?y:(C=k.state,C.wsize=0,C.whave=0,C.wnext=0,ye(k))}function Fe(k,C){var E,H;return!k||!k.state||(H=k.state,C<0?(E=0,C=-C):(E=(C>>4)+1,C<48&&(C&=15)),C&&(C<8||C>15))?y:(H.window!==null&&H.wbits!==C&&(H.window=null),H.wrap=E,H.wbits=C,Ee(k))}function Ge(k,C){var E,H;return k?(H=new De,k.state=H,H.window=null,E=Fe(k,C),E!==h&&(k.state=null),E):y}function de(k){return Ge(k,se)}var Xe=!0,Ve,Ie;function Ue(k){if(Xe){var C;for(Ve=new s.Buf32(512),Ie=new s.Buf32(32),C=0;C<144;)k.lens[C++]=8;for(;C<256;)k.lens[C++]=9;for(;C<280;)k.lens[C++]=7;for(;C<288;)k.lens[C++]=8;for(f(u,k.lens,0,288,Ve,0,k.work,{bits:9}),C=0;C<32;)k.lens[C++]=5;f(d,k.lens,0,32,Ie,0,k.work,{bits:5}),Xe=!1}k.lencode=Ve,k.lenbits=9,k.distcode=Ie,k.distbits=5}function me(k,C,E,H){var pe,v=k.state;return v.window===null&&(v.wsize=1<<v.wbits,v.wnext=0,v.whave=0,v.window=new s.Buf8(v.wsize)),H>=v.wsize?(s.arraySet(v.window,C,E-v.wsize,v.wsize,0),v.wnext=0,v.whave=v.wsize):(pe=v.wsize-v.wnext,pe>H&&(pe=H),s.arraySet(v.window,C,E-H,pe,v.wnext),H-=pe,H?(s.arraySet(v.window,C,E-H,H,0),v.wnext=H,v.whave=v.wsize):(v.wnext+=pe,v.wnext===v.wsize&&(v.wnext=0),v.whave<v.wsize&&(v.whave+=pe))),0}function A(k,C){var E,H,pe,v,K,$,R,B,Z,Te,be,Ce,it,Dt,ot=0,Je,ct,pt,Et,Xn,jn,D,q,Q=new s.Buf8(4),ie,ne,Re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return y;E=k.state,E.mode===re&&(E.mode=oe),K=k.next_out,pe=k.output,R=k.avail_out,v=k.next_in,H=k.input,$=k.avail_in,B=E.hold,Z=E.bits,Te=$,be=R,q=h;e:for(;;)switch(E.mode){case I:if(E.wrap===0){E.mode=oe;break}for(;Z<16;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(E.wrap&2&&B===35615){E.check=0,Q[0]=B&255,Q[1]=B>>>8&255,E.check=a(E.check,Q,2,0),B=0,Z=0,E.mode=U;break}if(E.flags=0,E.head&&(E.head.done=!1),!(E.wrap&1)||(((B&255)<<8)+(B>>8))%31){k.msg="incorrect header check",E.mode=Be;break}if((B&15)!==S){k.msg="unknown compression method",E.mode=Be;break}if(B>>>=4,Z-=4,D=(B&15)+8,E.wbits===0)E.wbits=D;else if(D>E.wbits){k.msg="invalid window size",E.mode=Be;break}E.dmax=1<<D,k.adler=E.check=1,E.mode=B&512?ee:re,B=0,Z=0;break;case U:for(;Z<16;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(E.flags=B,(E.flags&255)!==S){k.msg="unknown compression method",E.mode=Be;break}if(E.flags&57344){k.msg="unknown header flags set",E.mode=Be;break}E.head&&(E.head.text=B>>8&1),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=a(E.check,Q,2,0)),B=0,Z=0,E.mode=b;case b:for(;Z<32;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.head&&(E.head.time=B),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,Q[2]=B>>>16&255,Q[3]=B>>>24&255,E.check=a(E.check,Q,4,0)),B=0,Z=0,E.mode=L;case L:for(;Z<16;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.head&&(E.head.xflags=B&255,E.head.os=B>>8),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=a(E.check,Q,2,0)),B=0,Z=0,E.mode=F;case F:if(E.flags&1024){for(;Z<16;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.length=B,E.head&&(E.head.extra_len=B),E.flags&512&&(Q[0]=B&255,Q[1]=B>>>8&255,E.check=a(E.check,Q,2,0)),B=0,Z=0}else E.head&&(E.head.extra=null);E.mode=j;case j:if(E.flags&1024&&(Ce=E.length,Ce>$&&(Ce=$),Ce&&(E.head&&(D=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),s.arraySet(E.head.extra,H,v,Ce,D)),E.flags&512&&(E.check=a(E.check,H,Ce,v)),$-=Ce,v+=Ce,E.length-=Ce),E.length))break e;E.length=0,E.mode=N;case N:if(E.flags&2048){if($===0)break e;Ce=0;do D=H[v+Ce++],E.head&&D&&E.length<65536&&(E.head.name+=String.fromCharCode(D));while(D&&Ce<$);if(E.flags&512&&(E.check=a(E.check,H,Ce,v)),$-=Ce,v+=Ce,D)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=G;case G:if(E.flags&4096){if($===0)break e;Ce=0;do D=H[v+Ce++],E.head&&D&&E.length<65536&&(E.head.comment+=String.fromCharCode(D));while(D&&Ce<$);if(E.flags&512&&(E.check=a(E.check,H,Ce,v)),$-=Ce,v+=Ce,D)break e}else E.head&&(E.head.comment=null);E.mode=z;case z:if(E.flags&512){for(;Z<16;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(B!==(E.check&65535)){k.msg="header crc mismatch",E.mode=Be;break}B=0,Z=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),k.adler=E.check=0,E.mode=re;break;case ee:for(;Z<32;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}k.adler=E.check=_e(B),B=0,Z=0,E.mode=V;case V:if(E.havedict===0)return k.next_out=K,k.avail_out=R,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,x;k.adler=E.check=1,E.mode=re;case re:if(C===_||C===g)break e;case oe:if(E.last){B>>>=Z&7,Z-=Z&7,E.mode=Pe;break}for(;Z<3;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}switch(E.last=B&1,B>>>=1,Z-=1,B&3){case 0:E.mode=ue;break;case 1:if(Ue(E),E.mode=we,C===g){B>>>=2,Z-=2;break e}break;case 2:E.mode=W;break;case 3:k.msg="invalid block type",E.mode=Be}B>>>=2,Z-=2;break;case ue:for(B>>>=Z&7,Z-=Z&7;Z<32;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if((B&65535)!==(B>>>16^65535)){k.msg="invalid stored block lengths",E.mode=Be;break}if(E.length=B&65535,B=0,Z=0,E.mode=Y,C===g)break e;case Y:E.mode=he;case he:if(Ce=E.length,Ce){if(Ce>$&&(Ce=$),Ce>R&&(Ce=R),Ce===0)break e;s.arraySet(pe,H,v,Ce,K),$-=Ce,v+=Ce,R-=Ce,K+=Ce,E.length-=Ce;break}E.mode=re;break;case W:for(;Z<14;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(E.nlen=(B&31)+257,B>>>=5,Z-=5,E.ndist=(B&31)+1,B>>>=5,Z-=5,E.ncode=(B&15)+4,B>>>=4,Z-=4,E.nlen>286||E.ndist>30){k.msg="too many length or distance symbols",E.mode=Be;break}E.have=0,E.mode=ce;case ce:for(;E.have<E.ncode;){for(;Z<3;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.lens[Re[E.have++]]=B&7,B>>>=3,Z-=3}for(;E.have<19;)E.lens[Re[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,ie={bits:E.lenbits},q=f(c,E.lens,0,19,E.lencode,0,E.work,ie),E.lenbits=ie.bits,q){k.msg="invalid code lengths set",E.mode=Be;break}E.have=0,E.mode=xe;case xe:for(;E.have<E.nlen+E.ndist;){for(;ot=E.lencode[B&(1<<E.lenbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Z);){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(pt<16)B>>>=Je,Z-=Je,E.lens[E.have++]=pt;else{if(pt===16){for(ne=Je+2;Z<ne;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(B>>>=Je,Z-=Je,E.have===0){k.msg="invalid bit length repeat",E.mode=Be;break}D=E.lens[E.have-1],Ce=3+(B&3),B>>>=2,Z-=2}else if(pt===17){for(ne=Je+3;Z<ne;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}B>>>=Je,Z-=Je,D=0,Ce=3+(B&7),B>>>=3,Z-=3}else{for(ne=Je+7;Z<ne;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}B>>>=Je,Z-=Je,D=0,Ce=11+(B&127),B>>>=7,Z-=7}if(E.have+Ce>E.nlen+E.ndist){k.msg="invalid bit length repeat",E.mode=Be;break}for(;Ce--;)E.lens[E.have++]=D}}if(E.mode===Be)break;if(E.lens[256]===0){k.msg="invalid code -- missing end-of-block",E.mode=Be;break}if(E.lenbits=9,ie={bits:E.lenbits},q=f(u,E.lens,0,E.nlen,E.lencode,0,E.work,ie),E.lenbits=ie.bits,q){k.msg="invalid literal/lengths set",E.mode=Be;break}if(E.distbits=6,E.distcode=E.distdyn,ie={bits:E.distbits},q=f(d,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,ie),E.distbits=ie.bits,q){k.msg="invalid distances set",E.mode=Be;break}if(E.mode=we,C===g)break e;case we:E.mode=ve;case ve:if($>=6&&R>=258){k.next_out=K,k.avail_out=R,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,o(k,be),K=k.next_out,pe=k.output,R=k.avail_out,v=k.next_in,H=k.input,$=k.avail_in,B=E.hold,Z=E.bits,E.mode===re&&(E.back=-1);break}for(E.back=0;ot=E.lencode[B&(1<<E.lenbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Z);){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(ct&&!(ct&240)){for(Et=Je,Xn=ct,jn=pt;ot=E.lencode[jn+((B&(1<<Et+Xn)-1)>>Et)],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Et+Je<=Z);){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}B>>>=Et,Z-=Et,E.back+=Et}if(B>>>=Je,Z-=Je,E.back+=Je,E.length=pt,ct===0){E.mode=He;break}if(ct&32){E.back=-1,E.mode=re;break}if(ct&64){k.msg="invalid literal/length code",E.mode=Be;break}E.extra=ct&15,E.mode=Se;case Se:if(E.extra){for(ne=E.extra;Z<ne;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.length+=B&(1<<E.extra)-1,B>>>=E.extra,Z-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=ze;case ze:for(;ot=E.distcode[B&(1<<E.distbits)-1],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Je<=Z);){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(!(ct&240)){for(Et=Je,Xn=ct,jn=pt;ot=E.distcode[jn+((B&(1<<Et+Xn)-1)>>Et)],Je=ot>>>24,ct=ot>>>16&255,pt=ot&65535,!(Et+Je<=Z);){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}B>>>=Et,Z-=Et,E.back+=Et}if(B>>>=Je,Z-=Je,E.back+=Je,ct&64){k.msg="invalid distance code",E.mode=Be;break}E.offset=pt,E.extra=ct&15,E.mode=Ae;case Ae:if(E.extra){for(ne=E.extra;Z<ne;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}E.offset+=B&(1<<E.extra)-1,B>>>=E.extra,Z-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){k.msg="invalid distance too far back",E.mode=Be;break}E.mode=X;case X:if(R===0)break e;if(Ce=be-R,E.offset>Ce){if(Ce=E.offset-Ce,Ce>E.whave&&E.sane){k.msg="invalid distance too far back",E.mode=Be;break}Ce>E.wnext?(Ce-=E.wnext,it=E.wsize-Ce):it=E.wnext-Ce,Ce>E.length&&(Ce=E.length),Dt=E.window}else Dt=pe,it=K-E.offset,Ce=E.length;Ce>R&&(Ce=R),R-=Ce,E.length-=Ce;do pe[K++]=Dt[it++];while(--Ce);E.length===0&&(E.mode=ve);break;case He:if(R===0)break e;pe[K++]=E.length,R--,E.mode=ve;break;case Pe:if(E.wrap){for(;Z<32;){if($===0)break e;$--,B|=H[v++]<<Z,Z+=8}if(be-=R,k.total_out+=be,E.total+=be,be&&(k.adler=E.check=E.flags?a(E.check,pe,be,K-be):l(E.check,pe,be,K-be)),be=R,(E.flags?B:_e(B))!==E.check){k.msg="incorrect data check",E.mode=Be;break}B=0,Z=0}E.mode=Oe;case Oe:if(E.wrap&&E.flags){for(;Z<32;){if($===0)break e;$--,B+=H[v++]<<Z,Z+=8}if(B!==(E.total&4294967295)){k.msg="incorrect length check",E.mode=Be;break}B=0,Z=0}E.mode=Le;case Le:q=m;break e;case Be:q=T;break e;case Ne:return w;case O:default:return y}return k.next_out=K,k.avail_out=R,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,(E.wsize||be!==k.avail_out&&E.mode<Be&&(E.mode<Pe||C!==p))&&me(k,k.output,k.next_out,be-k.avail_out),Te-=k.avail_in,be-=k.avail_out,k.total_in+=Te,k.total_out+=be,E.total+=be,E.wrap&&be&&(k.adler=E.check=E.flags?a(E.check,pe,be,k.next_out-be):l(E.check,pe,be,k.next_out-be)),k.data_type=E.bits+(E.last?64:0)+(E.mode===re?128:0)+(E.mode===we||E.mode===Y?256:0),(Te===0&&be===0||C===p)&&q===h&&(q=M),q}function te(k){if(!k||!k.state)return y;var C=k.state;return C.window&&(C.window=null),k.state=null,h}function le(k,C){var E;return!k||!k.state||(E=k.state,!(E.wrap&2))?y:(E.head=C,C.done=!1,h)}function ge(k,C){var E=C.length,H,pe,v;return!k||!k.state||(H=k.state,H.wrap!==0&&H.mode!==V)?y:H.mode===V&&(pe=1,pe=l(pe,C,E,0),pe!==H.check)?T:(v=me(k,C,E,E),v?(H.mode=Ne,w):(H.havedict=1,h))}r.inflateReset=Ee,r.inflateReset2=Fe,r.inflateResetKeep=ye,r.inflateInit=de,r.inflateInit2=Ge,r.inflate=A,r.inflateEnd=te,r.inflateGetHeader=le,r.inflateSetDictionary=ge,r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var s=t("../utils/common"),l=15,a=852,o=592,f=0,c=1,u=2,d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(m,x,y,T,w,M,S,I){var U=I.bits,b=0,L=0,F=0,j=0,N=0,G=0,z=0,ee=0,V=0,re=0,oe,ue,Y,he,W,ce=null,xe=0,we,ve=new s.Buf16(l+1),Se=new s.Buf16(l+1),ze=null,Ae=0,X,He,Pe;for(b=0;b<=l;b++)ve[b]=0;for(L=0;L<T;L++)ve[x[y+L]]++;for(N=U,j=l;j>=1&&ve[j]===0;j--);if(N>j&&(N=j),j===0)return w[M++]=1<<24|64<<16|0,w[M++]=1<<24|64<<16|0,I.bits=1,0;for(F=1;F<j&&ve[F]===0;F++);for(N<F&&(N=F),ee=1,b=1;b<=l;b++)if(ee<<=1,ee-=ve[b],ee<0)return-1;if(ee>0&&(m===f||j!==1))return-1;for(Se[1]=0,b=1;b<l;b++)Se[b+1]=Se[b]+ve[b];for(L=0;L<T;L++)x[y+L]!==0&&(S[Se[x[y+L]]++]=L);if(m===f?(ce=ze=S,we=19):m===c?(ce=d,xe-=257,ze=p,Ae-=257,we=256):(ce=_,ze=g,we=-1),re=0,L=0,b=F,W=M,G=N,z=0,Y=-1,V=1<<N,he=V-1,m===c&&V>a||m===u&&V>o)return 1;for(;;){X=b-z,S[L]<we?(He=0,Pe=S[L]):S[L]>we?(He=ze[Ae+S[L]],Pe=ce[xe+S[L]]):(He=32+64,Pe=0),oe=1<<b-z,ue=1<<G,F=ue;do ue-=oe,w[W+(re>>z)+ue]=X<<24|He<<16|Pe|0;while(ue!==0);for(oe=1<<b-1;re&oe;)oe>>=1;if(oe!==0?(re&=oe-1,re+=oe):re=0,L++,--ve[b]===0){if(b===j)break;b=x[y+S[L]]}if(b>N&&(re&he)!==Y){for(z===0&&(z=N),W+=F,G=b-z,ee=1<<G;G+z<j&&(ee-=ve[G+z],!(ee<=0));)G++,ee<<=1;if(V+=1<<G,m===c&&V>a||m===u&&V>o)return 1;Y=re&he,w[Y]=N<<24|G<<16|W-M|0}}return re!==0&&(w[W+re]=b-z<<24|64<<16|0),I.bits=N,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var s=t("../utils/common"),l=4,a=0,o=1,f=2;function c(A){for(var te=A.length;--te>=0;)A[te]=0}var u=0,d=1,p=2,_=3,g=258,h=29,m=256,x=m+1+h,y=30,T=19,w=2*x+1,M=15,S=16,I=7,U=256,b=16,L=17,F=18,j=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],G=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=512,V=new Array((x+2)*2);c(V);var re=new Array(y*2);c(re);var oe=new Array(ee);c(oe);var ue=new Array(g-_+1);c(ue);var Y=new Array(h);c(Y);var he=new Array(y);c(he);function W(A,te,le,ge,k){this.static_tree=A,this.extra_bits=te,this.extra_base=le,this.elems=ge,this.max_length=k,this.has_stree=A&&A.length}var ce,xe,we;function ve(A,te){this.dyn_tree=A,this.max_code=0,this.stat_desc=te}function Se(A){return A<256?oe[A]:oe[256+(A>>>7)]}function ze(A,te){A.pending_buf[A.pending++]=te&255,A.pending_buf[A.pending++]=te>>>8&255}function Ae(A,te,le){A.bi_valid>S-le?(A.bi_buf|=te<<A.bi_valid&65535,ze(A,A.bi_buf),A.bi_buf=te>>S-A.bi_valid,A.bi_valid+=le-S):(A.bi_buf|=te<<A.bi_valid&65535,A.bi_valid+=le)}function X(A,te,le){Ae(A,le[te*2],le[te*2+1])}function He(A,te){var le=0;do le|=A&1,A>>>=1,le<<=1;while(--te>0);return le>>>1}function Pe(A){A.bi_valid===16?(ze(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)}function Oe(A,te){var le=te.dyn_tree,ge=te.max_code,k=te.stat_desc.static_tree,C=te.stat_desc.has_stree,E=te.stat_desc.extra_bits,H=te.stat_desc.extra_base,pe=te.stat_desc.max_length,v,K,$,R,B,Z,Te=0;for(R=0;R<=M;R++)A.bl_count[R]=0;for(le[A.heap[A.heap_max]*2+1]=0,v=A.heap_max+1;v<w;v++)K=A.heap[v],R=le[le[K*2+1]*2+1]+1,R>pe&&(R=pe,Te++),le[K*2+1]=R,!(K>ge)&&(A.bl_count[R]++,B=0,K>=H&&(B=E[K-H]),Z=le[K*2],A.opt_len+=Z*(R+B),C&&(A.static_len+=Z*(k[K*2+1]+B)));if(Te!==0){do{for(R=pe-1;A.bl_count[R]===0;)R--;A.bl_count[R]--,A.bl_count[R+1]+=2,A.bl_count[pe]--,Te-=2}while(Te>0);for(R=pe;R!==0;R--)for(K=A.bl_count[R];K!==0;)$=A.heap[--v],!($>ge)&&(le[$*2+1]!==R&&(A.opt_len+=(R-le[$*2+1])*le[$*2],le[$*2+1]=R),K--)}}function Le(A,te,le){var ge=new Array(M+1),k=0,C,E;for(C=1;C<=M;C++)ge[C]=k=k+le[C-1]<<1;for(E=0;E<=te;E++){var H=A[E*2+1];H!==0&&(A[E*2]=He(ge[H]++,H))}}function Be(){var A,te,le,ge,k,C=new Array(M+1);for(le=0,ge=0;ge<h-1;ge++)for(Y[ge]=le,A=0;A<1<<j[ge];A++)ue[le++]=ge;for(ue[le-1]=ge,k=0,ge=0;ge<16;ge++)for(he[ge]=k,A=0;A<1<<N[ge];A++)oe[k++]=ge;for(k>>=7;ge<y;ge++)for(he[ge]=k<<7,A=0;A<1<<N[ge]-7;A++)oe[256+k++]=ge;for(te=0;te<=M;te++)C[te]=0;for(A=0;A<=143;)V[A*2+1]=8,A++,C[8]++;for(;A<=255;)V[A*2+1]=9,A++,C[9]++;for(;A<=279;)V[A*2+1]=7,A++,C[7]++;for(;A<=287;)V[A*2+1]=8,A++,C[8]++;for(Le(V,x+1,C),A=0;A<y;A++)re[A*2+1]=5,re[A*2]=He(A,5);ce=new W(V,j,m+1,x,M),xe=new W(re,N,0,y,M),we=new W(new Array(0),G,0,T,I)}function Ne(A){var te;for(te=0;te<x;te++)A.dyn_ltree[te*2]=0;for(te=0;te<y;te++)A.dyn_dtree[te*2]=0;for(te=0;te<T;te++)A.bl_tree[te*2]=0;A.dyn_ltree[U*2]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function O(A){A.bi_valid>8?ze(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function P(A,te,le,ge){O(A),ge&&(ze(A,le),ze(A,~le)),s.arraySet(A.pending_buf,A.window,te,le,A.pending),A.pending+=le}function J(A,te,le,ge){var k=te*2,C=le*2;return A[k]<A[C]||A[k]===A[C]&&ge[te]<=ge[le]}function fe(A,te,le){for(var ge=A.heap[le],k=le<<1;k<=A.heap_len&&(k<A.heap_len&&J(te,A.heap[k+1],A.heap[k],A.depth)&&k++,!J(te,ge,A.heap[k],A.depth));)A.heap[le]=A.heap[k],le=k,k<<=1;A.heap[le]=ge}function se(A,te,le){var ge,k,C=0,E,H;if(A.last_lit!==0)do ge=A.pending_buf[A.d_buf+C*2]<<8|A.pending_buf[A.d_buf+C*2+1],k=A.pending_buf[A.l_buf+C],C++,ge===0?X(A,k,te):(E=ue[k],X(A,E+m+1,te),H=j[E],H!==0&&(k-=Y[E],Ae(A,k,H)),ge--,E=Se(ge),X(A,E,le),H=N[E],H!==0&&(ge-=he[E],Ae(A,ge,H)));while(C<A.last_lit);X(A,U,te)}function _e(A,te){var le=te.dyn_tree,ge=te.stat_desc.static_tree,k=te.stat_desc.has_stree,C=te.stat_desc.elems,E,H,pe=-1,v;for(A.heap_len=0,A.heap_max=w,E=0;E<C;E++)le[E*2]!==0?(A.heap[++A.heap_len]=pe=E,A.depth[E]=0):le[E*2+1]=0;for(;A.heap_len<2;)v=A.heap[++A.heap_len]=pe<2?++pe:0,le[v*2]=1,A.depth[v]=0,A.opt_len--,k&&(A.static_len-=ge[v*2+1]);for(te.max_code=pe,E=A.heap_len>>1;E>=1;E--)fe(A,le,E);v=C;do E=A.heap[1],A.heap[1]=A.heap[A.heap_len--],fe(A,le,1),H=A.heap[1],A.heap[--A.heap_max]=E,A.heap[--A.heap_max]=H,le[v*2]=le[E*2]+le[H*2],A.depth[v]=(A.depth[E]>=A.depth[H]?A.depth[E]:A.depth[H])+1,le[E*2+1]=le[H*2+1]=v,A.heap[1]=v++,fe(A,le,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],Oe(A,te),Le(le,pe,A.bl_count)}function De(A,te,le){var ge,k=-1,C,E=te[0*2+1],H=0,pe=7,v=4;for(E===0&&(pe=138,v=3),te[(le+1)*2+1]=65535,ge=0;ge<=le;ge++)C=E,E=te[(ge+1)*2+1],!(++H<pe&&C===E)&&(H<v?A.bl_tree[C*2]+=H:C!==0?(C!==k&&A.bl_tree[C*2]++,A.bl_tree[b*2]++):H<=10?A.bl_tree[L*2]++:A.bl_tree[F*2]++,H=0,k=C,E===0?(pe=138,v=3):C===E?(pe=6,v=3):(pe=7,v=4))}function ye(A,te,le){var ge,k=-1,C,E=te[0*2+1],H=0,pe=7,v=4;for(E===0&&(pe=138,v=3),ge=0;ge<=le;ge++)if(C=E,E=te[(ge+1)*2+1],!(++H<pe&&C===E)){if(H<v)do X(A,C,A.bl_tree);while(--H!==0);else C!==0?(C!==k&&(X(A,C,A.bl_tree),H--),X(A,b,A.bl_tree),Ae(A,H-3,2)):H<=10?(X(A,L,A.bl_tree),Ae(A,H-3,3)):(X(A,F,A.bl_tree),Ae(A,H-11,7));H=0,k=C,E===0?(pe=138,v=3):C===E?(pe=6,v=3):(pe=7,v=4)}}function Ee(A){var te;for(De(A,A.dyn_ltree,A.l_desc.max_code),De(A,A.dyn_dtree,A.d_desc.max_code),_e(A,A.bl_desc),te=T-1;te>=3&&A.bl_tree[z[te]*2+1]===0;te--);return A.opt_len+=3*(te+1)+5+5+4,te}function Fe(A,te,le,ge){var k;for(Ae(A,te-257,5),Ae(A,le-1,5),Ae(A,ge-4,4),k=0;k<ge;k++)Ae(A,A.bl_tree[z[k]*2+1],3);ye(A,A.dyn_ltree,te-1),ye(A,A.dyn_dtree,le-1)}function Ge(A){var te=4093624447,le;for(le=0;le<=31;le++,te>>>=1)if(te&1&&A.dyn_ltree[le*2]!==0)return a;if(A.dyn_ltree[9*2]!==0||A.dyn_ltree[10*2]!==0||A.dyn_ltree[13*2]!==0)return o;for(le=32;le<m;le++)if(A.dyn_ltree[le*2]!==0)return o;return a}var de=!1;function Xe(A){de||(Be(),de=!0),A.l_desc=new ve(A.dyn_ltree,ce),A.d_desc=new ve(A.dyn_dtree,xe),A.bl_desc=new ve(A.bl_tree,we),A.bi_buf=0,A.bi_valid=0,Ne(A)}function Ve(A,te,le,ge){Ae(A,(u<<1)+(ge?1:0),3),P(A,te,le,!0)}function Ie(A){Ae(A,d<<1,3),X(A,U,V),Pe(A)}function Ue(A,te,le,ge){var k,C,E=0;A.level>0?(A.strm.data_type===f&&(A.strm.data_type=Ge(A)),_e(A,A.l_desc),_e(A,A.d_desc),E=Ee(A),k=A.opt_len+3+7>>>3,C=A.static_len+3+7>>>3,C<=k&&(k=C)):k=C=le+5,le+4<=k&&te!==-1?Ve(A,te,le,ge):A.strategy===l||C===k?(Ae(A,(d<<1)+(ge?1:0),3),se(A,V,re)):(Ae(A,(p<<1)+(ge?1:0),3),Fe(A,A.l_desc.max_code+1,A.d_desc.max_code+1,E+1),se(A,A.dyn_ltree,A.dyn_dtree)),Ne(A),ge&&O(A)}function me(A,te,le){return A.pending_buf[A.d_buf+A.last_lit*2]=te>>>8&255,A.pending_buf[A.d_buf+A.last_lit*2+1]=te&255,A.pending_buf[A.l_buf+A.last_lit]=le&255,A.last_lit++,te===0?A.dyn_ltree[le*2]++:(A.matches++,te--,A.dyn_ltree[(ue[le]+m+1)*2]++,A.dyn_dtree[Se(te)*2]++),A.last_lit===A.lit_bufsize-1}r._tr_init=Xe,r._tr_stored_block=Ve,r._tr_flush_block=Ue,r._tr_tally=me,r._tr_align=Ie},{"../utils/common":41}],53:[function(t,n,r){function s(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}n.exports=s},{}],54:[function(t,n,r){(function(s){(function(l,a){if(l.setImmediate)return;var o=1,f={},c=!1,u=l.document,d;function p(I){typeof I!="function"&&(I=new Function(""+I));for(var U=new Array(arguments.length-1),b=0;b<U.length;b++)U[b]=arguments[b+1];var L={callback:I,args:U};return f[o]=L,d(o),o++}function _(I){delete f[I]}function g(I){var U=I.callback,b=I.args;switch(b.length){case 0:U();break;case 1:U(b[0]);break;case 2:U(b[0],b[1]);break;case 3:U(b[0],b[1],b[2]);break;default:U.apply(a,b);break}}function h(I){if(c)setTimeout(h,0,I);else{var U=f[I];if(U){c=!0;try{g(U)}finally{_(I),c=!1}}}}function m(){d=function(I){process.nextTick(function(){h(I)})}}function x(){if(l.postMessage&&!l.importScripts){var I=!0,U=l.onmessage;return l.onmessage=function(){I=!1},l.postMessage("","*"),l.onmessage=U,I}}function y(){var I="setImmediate$"+Math.random()+"$",U=function(b){b.source===l&&typeof b.data=="string"&&b.data.indexOf(I)===0&&h(+b.data.slice(I.length))};l.addEventListener?l.addEventListener("message",U,!1):l.attachEvent("onmessage",U),d=function(b){l.postMessage(I+b,"*")}}function T(){var I=new MessageChannel;I.port1.onmessage=function(U){var b=U.data;h(b)},d=function(U){I.port2.postMessage(U)}}function w(){var I=u.documentElement;d=function(U){var b=u.createElement("script");b.onreadystatechange=function(){h(U),b.onreadystatechange=null,I.removeChild(b),b=null},I.appendChild(b)}}function M(){d=function(I){setTimeout(h,0,I)}}var S=Object.getPrototypeOf&&Object.getPrototypeOf(l);S=S&&S.setTimeout?S:l,{}.toString.call(l.process)==="[object process]"?m():x()?y():l.MessageChannel?T():u&&"onreadystatechange"in u.createElement("script")?w():M(),S.setImmediate=p,S.clearImmediate=_})(typeof self>"u"?typeof s>"u"?this:s:self)}).call(this,typeof Qt<"u"?Qt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})($o);var ic=$o.exports;const os=nc(ic);var Jo={exports:{}};(function(i,e){(function(t,n){n()})(Qt,function(){function t(f,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function n(f,c,u){var d=new XMLHttpRequest;d.open("GET",f),d.responseType="blob",d.onload=function(){o(d.response,c,u)},d.onerror=function(){console.error("could not download file")},d.send()}function r(f){var c=new XMLHttpRequest;c.open("HEAD",f,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function s(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(c)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Qt=="object"&&Qt.global===Qt?Qt:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(f,c,u){var d=l.URL||l.webkitURL,p=document.createElement("a");c=c||f.name||"download",p.download=c,p.rel="noopener",typeof f=="string"?(p.href=f,p.origin===location.origin?s(p):r(p.href)?n(f,c,u):s(p,p.target="_blank")):(p.href=d.createObjectURL(f),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){s(p)},0))}:"msSaveOrOpenBlob"in navigator?function(f,c,u){if(c=c||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(t(f,u),c);else if(r(f))n(f,c,u);else{var d=document.createElement("a");d.href=f,d.target="_blank",setTimeout(function(){s(d)})}}:function(f,c,u,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof f=="string")return n(f,c,u);var p=f.type==="application/octet-stream",_=/constructor/i.test(l.HTMLElement)||l.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||p&&_||a)&&typeof FileReader<"u"){var h=new FileReader;h.onloadend=function(){var y=h.result;y=g?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=y:location=y,d=null},h.readAsDataURL(f)}else{var m=l.URL||l.webkitURL,x=m.createObjectURL(f);d?d.location=x:location.href=x,d=null,setTimeout(function(){m.revokeObjectURL(x)},4e4)}});l.saveAs=o.saveAs=o,i.exports=o})})(Jo);var rc=Jo.exports;const ac={es:{btnOpenLabel:"Abrir",btnSaveLabel:"Guardar",btnAddPage:"Nueva página",btnStartRecordingLabel:"Iniciar grabación",btnDeletePageLabel:"Quitar página",btnStopRecordingLabel:"Finalizar grabación",btnNewLabel:"Nuevo libro",btnCloseLabel:"Salir",controls:`
        <b><u>Controles</u></b><br/>
        Utiliza el <b>botón de scroll del ratón</b> para hacer zoom.<br/>
        Presiona <b>Barra Espaciadora</b> para reestablecer el zoom.<br/>
        Presiona la tecla <b>ENTER</b> para Iniciar y/o Detener la grabación.
        `,emptyZipError:"El zip no contiene ninguna imagen .png",setToBlank:"Poner en blanco",nothingToSave:"No hay nada que guardar. Agregá algunas páginas!",deletePrompt:"¿Quitar la página seleccionada?",setBlankPrompt:"Poner página en blanco? (Se quitará la textura de la página)",invalidZipFile:"El archivo zip que cargaste no es válido (no contiene un flipbook)",missingPageError:`PÁGINA ROTA: 

Una página hace referencia a una imagen que no está en el zip: Página [$pag] Imagen [$img]

Se utilizará una imagen en blanco.`,setImageIntoBlank:"Cargar imagen a esta página"},en:{btnOpenLabel:"Open",btnSaveLabel:"Save",btnAddPage:"New page",btnStartRecordingLabel:"Start Recording",btnDeletePageLabel:"Remove page",btnStopRecordingLabel:"End Recording",btnNewLabel:"New Book",btnCloseLabel:"Exit",controls:`
        <b><u>Controls</u></b><br/>
        Use the <b>mouse's wheel</b> to zoom.<br/>
        Press <b>Space bar</b> to restore zoom.<br/>
        Press <b>ENTER</b> to start or stop the recording.
        `,emptyZipError:"The zip has no .png image file",setToBlank:"Set to blank page",nothingToSave:"Nothing to save... try adding some pages!",deletePrompt:"Delete currently selected page?",setBlankPrompt:"Turn into a blank page (texture will be removed)",invalidZipFile:"The zip you selected doesn't contain a flipbook in it.",missingPageError:`MISSING PAGE!

A page is referencing an image that is not in the zip: Page [$pag] Image [$img]

A blank page will be used.`,setImageIntoBlank:"Set image for this blank page"}},Mt=ac[navigator.language.toLowerCase().includes("es")?"es":"en"];var sc=0;function tt(i,e,t,n,r,s){var l,a,o={};for(a in e)a=="ref"?l=e[a]:o[a]=e[a];var f={type:i,props:o,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--sc,__i:-1,__u:0,__source:r,__self:s};if(typeof i=="function"&&(l=i.defaultProps))for(a in l)o[a]===void 0&&(o[a]=l[a]);return Ye.vnode&&Ye.vnode(f),f}const ls="1.0.0";class Br{constructor(e,t){this.blob=e,this.fileName=t,this.url=URL.createObjectURL(e)}}const oc=`
<br/><br/><b><u>WEBM --&gt; MP4</u></b><br/>
${["https://cloudconvert.com/webm-to-mp4","https://www.freeconvert.com/webm-to-mp4","https://convertio.co/es/webm-mp4/"].map(i=>`<a href="${i}" target="_blank">${i}</a>`).join("<br/>")}
`,lc="flipbook-config.json",cs=".png, .jpg, .jpeg";function cc(){const[i,e]=ci([]),[t,n]=ci([]),[r,s]=ci(-1),[l,a]=ci(!1),[o,f]=ci(!1),c=Fr(null),u=Fr(null),d=Fr(null),p=r==-1,_=t.length!=i.length||t.some((U,b)=>i[b]!=U);rs(()=>(window.ccaptureDisplayListener=U=>{u.current&&(u.current.innerHTML=U)},()=>{window.ccaptureDisplayListener=null}),[]),rs(()=>{const U=b=>{var L;b.code==="Enter"&&((L=d.current)==null||L.click())};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)}),as(()=>{if(!l)return;const U=()=>a(!1);return window.addEventListener("mouseup",U),()=>window.removeEventListener("mouseup",U)},[l]),as(()=>{const U=i.map(L=>(L==null?void 0:L.url)||"");U.length%2!=0&&U.push("");const b=new CustomEvent("on:pages",{detail:U});document.body.dispatchEvent(b)},[i]);const g=(U=!1)=>{const b=document.createElement("input");b.type="file",b.multiple=!U,b.accept=cs,b.style.display="none",document.body.appendChild(b),b.addEventListener("change",L=>{const F=b.files;if(U){const j=F[0];i[r]=new Br(j,j.name)}else for(const j of F)i.push(new Br(j,j.name));e([...i]),b.remove()}),b.addEventListener("cancel",L=>b.remove()),b.click()},h=()=>{s(0),e([]),n([])},m=async()=>{var F;if(!i.length){alert(Mt.nothingToSave);return}const U=new os,b=[];for(let j=0;j<i.length;j++)if(!i[j]||((F=i[j])==null?void 0:F.url)=="")b.push("");else{let N=`${j+1}.png`;U.file(N,i[j].blob),b.push(N)}U.file(lc,JSON.stringify({flipbookPages:b,version:ls}));const L=await U.generateAsync({type:"blob"});rc.saveAs(L,"my-flipbook.zip")},x=()=>{s(-1),e([]),n([])},y=()=>{const U=document.createElement("input");U.type="file",U.multiple=!1,U.accept=".zip",U.style.display="none",document.body.appendChild(U),U.addEventListener("change",async b=>{U.remove();const L=U.files[0],F=new os;await F.loadAsync(L);let j=[],N;try{await new Promise((z,ee)=>{let V=Promise.resolve(0);F.forEach((re,oe)=>{cs.indexOf(oe.name.split(".").pop())>-1?V=V.then(()=>oe.async("blob").then(ue=>j.push(new Br(ue,oe.name)))):oe.name.endsWith(".json")&&(V=V.then(()=>oe.async("text").then(ue=>{N=JSON.parse(ue)})))}),V.then(()=>{if(!N||!Array.isArray(N.flipbookPages)||N.version!=ls){ee(Mt.invalidZipFile);return}z(!0)})})}catch(z){alert(z.message??z);return}let G=[];for(let z=0;z<N.flipbookPages.length;z++){const ee=N.flipbookPages[z];if(ee=="")G.push(null);else{let V=j.find(re=>re.fileName==ee);V?G.push(V):(alert(Mt.missingPageError.replace("$pag",(z+1).toString()).replace("$img",ee)),G.push(null))}}G.length?(n([...G]),e(G),s(0)):alert(Mt.emptyZipError)}),U.addEventListener("cancel",()=>U.remove()),U.click()},T=(U,b)=>{b.preventDefault(),s(U),a(!0);const L=new CustomEvent("book:goto",{detail:U});document.body.dispatchEvent(L)},w=(U,b)=>{if(U==r||!l)return;let L=i[U];i[U]=i[r],i[r]=L,e([...i]),s(U)},M=()=>{o?(f(!1),document.body.dispatchEvent(new Event("record:stop"))):(f(!0),document.body.dispatchEvent(new Event("record:start")))},S=U=>{U.preventDefault(),confirm(Mt.deletePrompt)&&(r==i.length-1&&s(i.length-2),e(i.filter((b,L)=>L!=r)))},I=U=>{if(confirm(Mt.setBlankPrompt)){let b=i.slice(0);b[r]=null,e(b)}};return tt("header",{ref:c,children:[tt(uc,{}),tt("div",{class:"numbered-children thumbnails",children:i.map((U,b)=>tt("div",{children:tt("img",{onMouseOver:w.bind(null,b),onMouseDown:T.bind(null,b),src:(U==null?void 0:U.url)||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAFUlEQVR42mP4DwABDQEB/xlG6wAAAABJRU5ErkJggg==",height:100,width:100,style:{touchAction:"pan-x",borderColor:b==r?"red":"transparent",animation:b==r?"pulseSelection 0.5s ease-in-out infinite":"none"}})},b))}),tt("div",{class:"menu",children:[!p&&tt(un,{children:[tt("a",{href:"#",onClick:()=>g(),class:"add",children:[tt("i",{class:"gg-math-plus"})," ",Mt.btnAddPage]}),tt("a",{href:"#",onClick:()=>x(),class:"open",children:[tt("i",{class:"gg-close"})," ",Mt.btnCloseLabel]}),_&&tt("a",{href:"#",onClick:()=>m(),class:"save",children:[tt("i",{class:"gg-software-download"})," ",Mt.btnSaveLabel]})]}),p&&tt(un,{children:[tt("a",{href:"#",onClick:()=>h(),class:"save",children:[tt("i",{class:"gg-software-download"})," ",Mt.btnNewLabel]}),tt("a",{href:"#",onClick:()=>y(),class:"open",children:[tt("i",{class:"gg-software-upload"}),"  ",Mt.btnOpenLabel]})]}),i.length>0&&tt(un,{children:tt("a",{href:"#",class:"record-button",onClick:M,ref:d,children:[!o&&tt(un,{children:[tt("i",{class:"gg-camera"}),"  ",Mt.btnStartRecordingLabel]}),o&&tt(un,{children:[tt("i",{class:"gg-play-stop-o"}),"  ",Mt.btnStopRecordingLabel," [",tt("span",{ref:u}),"]"]})]})}),i.length>0&&r>-1&&tt("div",{class:"context",children:[tt("a",{href:"#",class:"delete",onClick:S,children:["[x] ",Mt.btnDeletePageLabel]}),i[r]&&tt("a",{href:"#",class:"setblank",onClick:I,children:["[ ] ",Mt.setToBlank]}),!i[r]&&tt("a",{href:"#",class:"setImg",onClick:()=>g(!0),children:Mt.setImageIntoBlank})]})]})]})}const uc=()=>{const[i,e]=ci(!1);return i?tt("div",{class:"leyenda",children:[tt("a",{href:"#",onClick:()=>e(!1),children:"[x] Cerrar"}),tt("hr",{}),tt("div",{dangerouslySetInnerHTML:{__html:Mt.controls+oc}})]}):tt("div",{class:"leyenda",children:tt("a",{href:"#",onClick:()=>e(!0),children:"Ver Instrucciones"})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Na="161",fc=0,us=1,hc=2,Qo=1,el=2,cn=3,Cn=0,Ot=1,fn=2,tn=0,hi=1,fs=2,hs=3,ds=4,dc=5,Bn=100,pc=101,mc=102,ps=103,ms=104,_c=200,vc=201,xc=202,yc=203,ba=204,Ma=205,bc=206,Mc=207,Sc=208,Ec=209,wc=210,Tc=211,Ac=212,Cc=213,Rc=214,Pc=0,Lc=1,Dc=2,yr=3,Uc=4,Ic=5,Oc=6,Nc=7,tl=0,Fc=1,Bc=2,pn=0,nl=1,il=2,rl=3,al=4,kc=5,sl=6,ol=300,gi=301,vi=302,Sa=303,Ea=304,Ar=306,wa=1e3,qt=1001,Ta=1002,St=1003,_s=1004,Ai=1005,Ct=1006,kr=1007,zn=1008,An=1009,zc=1010,Gc=1011,Fa=1012,ll=1013,Tn=1014,hn=1015,Wn=1016,cl=1017,ul=1018,Gn=1020,Hc=1021,Kt=1023,Vc=1024,Wc=1025,Hn=1026,xi=1027,Xc=1028,fl=1029,jc=1030,hl=1031,dl=1033,zr=33776,Gr=33777,Hr=33778,Vr=33779,gs=35840,vs=35841,xs=35842,ys=35843,pl=36196,bs=37492,Ms=37496,Ss=37808,Es=37809,ws=37810,Ts=37811,As=37812,Cs=37813,Rs=37814,Ps=37815,Ls=37816,Ds=37817,Us=37818,Is=37819,Os=37820,Ns=37821,Wr=36492,Fs=36494,Bs=36495,Yc=36283,ks=36284,zs=36285,Gs=36286,ml=3e3,Vn=3001,Zc=3200,_l=3201,gl=0,qc=1,Vt="",yt="srgb",_n="srgb-linear",Ba="display-p3",Cr="display-p3-linear",br="linear",st="srgb",Mr="rec709",Sr="p3",Yn=7680,Hs=519,Kc=512,$c=513,Jc=514,vl=515,Qc=516,eu=517,tu=518,nu=519,Vs=35044,Ws="300 es",Aa=1035,dn=2e3,Er=2001;class Mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,l=r.length;s<l;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,Ca=180/Math.PI;function ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function It(i,e,t){return Math.max(e,Math.min(t,i))}function iu(i,e){return(i%e+e)%e}function jr(i,e,t){return(1-t)*i+t*e}function Xs(i){return(i&i-1)===0&&i!==0}function Ra(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,l=this.y-e.y;return this.x=s*n-l*r+e.x,this.y=s*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,r,s,l,a,o,f){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,a,o,f)}set(e,t,n,r,s,l,a,o,f){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=o,c[6]=n,c[7]=l,c[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],a=n[3],o=n[6],f=n[1],c=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=r[0],h=r[3],m=r[6],x=r[1],y=r[4],T=r[7],w=r[2],M=r[5],S=r[8];return s[0]=l*g+a*x+o*w,s[3]=l*h+a*y+o*M,s[6]=l*m+a*T+o*S,s[1]=f*g+c*x+u*w,s[4]=f*h+c*y+u*M,s[7]=f*m+c*T+u*S,s[2]=d*g+p*x+_*w,s[5]=d*h+p*y+_*M,s[8]=d*m+p*T+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],o=e[6],f=e[7],c=e[8];return t*l*c-t*a*f-n*s*c+n*a*o+r*s*f-r*l*o}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],o=e[6],f=e[7],c=e[8],u=c*l-a*f,d=a*o-c*s,p=f*s-l*o,_=t*u+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(r*f-c*n)*g,e[2]=(a*n-r*l)*g,e[3]=d*g,e[4]=(c*t-r*o)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*o-f*t)*g,e[8]=(l*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,l,a){const o=Math.cos(s),f=Math.sin(s);return this.set(n*o,n*f,-n*(o*l+f*a)+l+e,-r*f,r*o,-r*(-f*l+o*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yr.makeScale(e,t)),this}rotate(e){return this.premultiply(Yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new et;function xl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=Bi("canvas");return i.style.display="block",i}const js={};function di(i){i in js||(js[i]=!0,console.warn(i))}const Ys=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zs=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xi={[_n]:{transfer:br,primaries:Mr,toReference:i=>i,fromReference:i=>i},[yt]:{transfer:st,primaries:Mr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Cr]:{transfer:br,primaries:Sr,toReference:i=>i.applyMatrix3(Zs),fromReference:i=>i.applyMatrix3(Ys)},[Ba]:{transfer:st,primaries:Sr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zs),fromReference:i=>i.applyMatrix3(Ys).convertLinearToSRGB()}},au=new Set([_n,Cr]),at={enabled:!0,_workingColorSpace:_n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!au.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Xi[e].toReference,r=Xi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Xi[i].primaries},getTransfer:function(i){return i===Vt?br:Xi[i].transfer}};function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class yl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Bi("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let l=0;l<s.length;l++)s[l]=pi(s[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let su=0;class bl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let l=0,a=r.length;l<a;l++)r[l].isDataTexture?s.push(qr(r[l].image)):s.push(qr(r[l]))}else s=qr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ou=0;class Rt extends Mi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=qt,r=qt,s=Ct,l=zn,a=Kt,o=An,f=Rt.DEFAULT_ANISOTROPY,c=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ki(),this.name="",this.source=new bl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=l,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=o,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Vn?yt:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Vn:ml}set encoding(e){di("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?yt:Vt}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=ol;Rt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*s,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*s,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*s,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const o=e.elements,f=o[0],c=o[4],u=o[8],d=o[1],p=o[5],_=o[9],g=o[2],h=o[6],m=o[10];if(Math.abs(c-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+h)<.1&&Math.abs(f+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(f+1)/2,T=(p+1)/2,w=(m+1)/2,M=(c+d)/4,S=(u+g)/4,I=(_+h)/4;return y>T&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=S/n):T>w?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=M/r,s=I/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=S/s,r=I/s),this.set(n,r,s,t),this}let x=Math.sqrt((h-_)*(h-_)+(u-g)*(u-g)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(h-_)/x,this.y=(u-g)/x,this.z=(d-c)/x,this.w=Math.acos((f+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lu extends Mi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(di("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?yt:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends lu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ml extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cu extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,l,a){let o=n[r+0],f=n[r+1],c=n[r+2],u=n[r+3];const d=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3];if(a===0){e[t+0]=o,e[t+1]=f,e[t+2]=c,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(u!==g||o!==d||f!==p||c!==_){let h=1-a;const m=o*d+f*p+c*_+u*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),M=Math.atan2(w,m*x);h=Math.sin(h*M)/w,a=Math.sin(a*M)/w}const T=a*x;if(o=o*h+d*T,f=f*h+p*T,c=c*h+_*T,u=u*h+g*T,h===1-a){const w=1/Math.sqrt(o*o+f*f+c*c+u*u);o*=w,f*=w,c*=w,u*=w}}e[t]=o,e[t+1]=f,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,l){const a=n[r],o=n[r+1],f=n[r+2],c=n[r+3],u=s[l],d=s[l+1],p=s[l+2],_=s[l+3];return e[t]=a*_+c*u+o*p-f*d,e[t+1]=o*_+c*d+f*u-a*p,e[t+2]=f*_+c*p+a*d-o*u,e[t+3]=c*_-a*u-o*d-f*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,l=e._order,a=Math.cos,o=Math.sin,f=a(n/2),c=a(r/2),u=a(s/2),d=o(n/2),p=o(r/2),_=o(s/2);switch(l){case"XYZ":this._x=d*c*u+f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u-d*p*_;break;case"YXZ":this._x=d*c*u+f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u+d*p*_;break;case"ZXY":this._x=d*c*u-f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u-d*p*_;break;case"ZYX":this._x=d*c*u-f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u+d*p*_;break;case"YZX":this._x=d*c*u+f*p*_,this._y=f*p*u+d*c*_,this._z=f*c*_-d*p*u,this._w=f*c*u-d*p*_;break;case"XZY":this._x=d*c*u-f*p*_,this._y=f*p*u-d*c*_,this._z=f*c*_+d*p*u,this._w=f*c*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],l=t[1],a=t[5],o=t[9],f=t[2],c=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-o)*p,this._y=(s-f)*p,this._z=(l-r)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(c-o)/p,this._x=.25*p,this._y=(r+l)/p,this._z=(s+f)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-f)/p,this._x=(r+l)/p,this._y=.25*p,this._z=(o+c)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(l-r)/p,this._x=(s+f)/p,this._y=(o+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,l=e._w,a=t._x,o=t._y,f=t._z,c=t._w;return this._x=n*c+l*a+r*f-s*o,this._y=r*c+l*o+s*a-n*f,this._z=s*c+l*f+n*o-r*a,this._w=l*c-n*a-r*o-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,l=this._w;let a=l*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=n,this._y=r,this._z=s,this;const o=1-a*a;if(o<=Number.EPSILON){const p=1-t;return this._w=p*l+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const f=Math.sqrt(o),c=Math.atan2(f,a),u=Math.sin((1-t)*c)/f,d=Math.sin(t*c)/f;return this._w=l*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,n=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qs.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,l=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*l,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*l,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,l=e.y,a=e.z,o=e.w,f=2*(l*r-a*n),c=2*(a*t-s*r),u=2*(s*n-l*t);return this.x=t+o*f+l*u-a*c,this.y=n+o*c+a*f-s*u,this.z=r+o*u+s*c-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,l=t.x,a=t.y,o=t.z;return this.x=r*o-s*a,this.y=s*l-n*o,this.z=n*a-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kr.copy(this).projectOnVector(e),this.sub(Kr)}reflect(e){return this.sub(Kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kr=new ae,qs=new zi;class Gi{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let l=0,a=s.count;l<a;l++)e.isMesh===!0?e.getVertexPosition(l,Xt):Xt.fromBufferAttribute(s,l),Xt.applyMatrix4(e.matrixWorld),this.expandByPoint(Xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(e.matrixWorld),this.union(ji)}const r=e.children;for(let s=0,l=r.length;s<l;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xt),Xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),Yi.subVectors(this.max,Ri),qn.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),$n.subVectors(e.c,Ri),xn.subVectors(Kn,qn),yn.subVectors($n,Kn),Ln.subVectors(qn,$n);let t=[0,-xn.z,xn.y,0,-yn.z,yn.y,0,-Ln.z,Ln.y,xn.z,0,-xn.x,yn.z,0,-yn.x,Ln.z,0,-Ln.x,-xn.y,xn.x,0,-yn.y,yn.x,0,-Ln.y,Ln.x,0];return!$r(t,qn,Kn,$n,Yi)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,qn,Kn,$n,Yi))?!1:(Zi.crossVectors(xn,yn),t=[Zi.x,Zi.y,Zi.z],$r(t,qn,Kn,$n,Yi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Xt=new ae,ji=new Gi,qn=new ae,Kn=new ae,$n=new ae,xn=new ae,yn=new ae,Ln=new ae,Ri=new ae,Yi=new ae,Zi=new ae,Dn=new ae;function $r(i,e,t,n,r){for(let s=0,l=i.length-3;s<=l;s+=3){Dn.fromArray(i,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),o=e.dot(Dn),f=t.dot(Dn),c=n.dot(Dn);if(Math.max(-Math.max(o,f,c),Math.min(o,f,c))>a)return!1}return!0}const uu=new Gi,Pi=new ae,Jr=new ae;class ka{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,l=e.length;s<l;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(Jr)),this.expandByPoint(Pi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new ae,Qr=new ae,qi=new ae,bn=new ae,ea=new ae,Ki=new ae,ta=new ae;class fu{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,l=-this.direction.dot(qi),a=bn.dot(this.direction),o=-bn.dot(qi),f=bn.lengthSq(),c=Math.abs(1-l*l);let u,d,p,_;if(c>0)if(u=l*o-a,d=l*a-o,_=s*c,u>=0)if(d>=-_)if(d<=_){const g=1/c;u*=g,d*=g,p=u*(u+l*d+2*a)+d*(l*u+d+2*o)+f}else d=s,u=Math.max(0,-(l*d+a)),p=-u*u+d*(d+2*o)+f;else d=-s,u=Math.max(0,-(l*d+a)),p=-u*u+d*(d+2*o)+f;else d<=-_?(u=Math.max(0,-(-l*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),p=-u*u+d*(d+2*o)+f):d<=_?(u=0,d=Math.min(Math.max(-s,-o),s),p=d*(d+2*o)+f):(u=Math.max(0,-(l*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),p=-u*u+d*(d+2*o)+f);else d=l>0?-s:s,u=Math.max(0,-(l*d+a)),p=-u*u+d*(d+2*o)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qr).addScaledVector(qi,d),p}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),r=an.dot(an)-n*n,s=e.radius*e.radius;if(r>s)return null;const l=Math.sqrt(s-r),a=n-l,o=n+l;return o<0?null:a<0?this.at(o,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,l,a,o;const f=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return f>=0?(n=(e.min.x-d.x)*f,r=(e.max.x-d.x)*f):(n=(e.max.x-d.x)*f,r=(e.min.x-d.x)*f),c>=0?(s=(e.min.y-d.y)*c,l=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,l=(e.min.y-d.y)*c),n>l||s>r||((s>n||isNaN(n))&&(n=s),(l<r||isNaN(r))&&(r=l),u>=0?(a=(e.min.z-d.z)*u,o=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,o=(e.min.z-d.z)*u),n>o||a>r)||((a>n||n!==n)&&(n=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,r,s){ea.subVectors(t,e),Ki.subVectors(n,e),ta.crossVectors(ea,Ki);let l=this.direction.dot(ta),a;if(l>0){if(r)return null;a=1}else if(l<0)a=-1,l=-l;else return null;bn.subVectors(this.origin,e);const o=a*this.direction.dot(Ki.crossVectors(bn,Ki));if(o<0)return null;const f=a*this.direction.dot(ea.cross(bn));if(f<0||o+f>l)return null;const c=-a*bn.dot(ta);return c<0?null:this.at(c/l,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,r,s,l,a,o,f,c,u,d,p,_,g,h){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,l,a,o,f,c,u,d,p,_,g,h)}set(e,t,n,r,s,l,a,o,f,c,u,d,p,_,g,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=l,m[9]=a,m[13]=o,m[2]=f,m[6]=c,m[10]=u,m[14]=d,m[3]=p,m[7]=_,m[11]=g,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),l=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,l=Math.cos(n),a=Math.sin(n),o=Math.cos(r),f=Math.sin(r),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=l*c,p=l*u,_=a*c,g=a*u;t[0]=o*c,t[4]=-o*u,t[8]=f,t[1]=p+_*f,t[5]=d-g*f,t[9]=-a*o,t[2]=g-d*f,t[6]=_+p*f,t[10]=l*o}else if(e.order==="YXZ"){const d=o*c,p=o*u,_=f*c,g=f*u;t[0]=d+g*a,t[4]=_*a-p,t[8]=l*f,t[1]=l*u,t[5]=l*c,t[9]=-a,t[2]=p*a-_,t[6]=g+d*a,t[10]=l*o}else if(e.order==="ZXY"){const d=o*c,p=o*u,_=f*c,g=f*u;t[0]=d-g*a,t[4]=-l*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=l*c,t[9]=g-d*a,t[2]=-l*f,t[6]=a,t[10]=l*o}else if(e.order==="ZYX"){const d=l*c,p=l*u,_=a*c,g=a*u;t[0]=o*c,t[4]=_*f-p,t[8]=d*f+g,t[1]=o*u,t[5]=g*f+d,t[9]=p*f-_,t[2]=-f,t[6]=a*o,t[10]=l*o}else if(e.order==="YZX"){const d=l*o,p=l*f,_=a*o,g=a*f;t[0]=o*c,t[4]=g-d*u,t[8]=_*u+p,t[1]=u,t[5]=l*c,t[9]=-a*c,t[2]=-f*c,t[6]=p*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=l*o,p=l*f,_=a*o,g=a*f;t[0]=o*c,t[4]=-u,t[8]=f*c,t[1]=d*u+g,t[5]=l*c,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*c,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,du)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Mn.crossVectors(n,Ft),Mn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Mn.crossVectors(n,Ft)),Mn.normalize(),$i.crossVectors(Ft,Mn),r[0]=Mn.x,r[4]=$i.x,r[8]=Ft.x,r[1]=Mn.y,r[5]=$i.y,r[9]=Ft.y,r[2]=Mn.z,r[6]=$i.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,l=n[0],a=n[4],o=n[8],f=n[12],c=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],h=n[10],m=n[14],x=n[3],y=n[7],T=n[11],w=n[15],M=r[0],S=r[4],I=r[8],U=r[12],b=r[1],L=r[5],F=r[9],j=r[13],N=r[2],G=r[6],z=r[10],ee=r[14],V=r[3],re=r[7],oe=r[11],ue=r[15];return s[0]=l*M+a*b+o*N+f*V,s[4]=l*S+a*L+o*G+f*re,s[8]=l*I+a*F+o*z+f*oe,s[12]=l*U+a*j+o*ee+f*ue,s[1]=c*M+u*b+d*N+p*V,s[5]=c*S+u*L+d*G+p*re,s[9]=c*I+u*F+d*z+p*oe,s[13]=c*U+u*j+d*ee+p*ue,s[2]=_*M+g*b+h*N+m*V,s[6]=_*S+g*L+h*G+m*re,s[10]=_*I+g*F+h*z+m*oe,s[14]=_*U+g*j+h*ee+m*ue,s[3]=x*M+y*b+T*N+w*V,s[7]=x*S+y*L+T*G+w*re,s[11]=x*I+y*F+T*z+w*oe,s[15]=x*U+y*j+T*ee+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],l=e[1],a=e[5],o=e[9],f=e[13],c=e[2],u=e[6],d=e[10],p=e[14],_=e[3],g=e[7],h=e[11],m=e[15];return _*(+s*o*u-r*f*u-s*a*d+n*f*d+r*a*p-n*o*p)+g*(+t*o*p-t*f*d+s*l*d-r*l*p+r*f*c-s*o*c)+h*(+t*f*u-t*a*p-s*l*u+n*l*p+s*a*c-n*f*c)+m*(-r*a*c-t*o*u+t*a*d+r*l*u-n*l*d+n*o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],l=e[4],a=e[5],o=e[6],f=e[7],c=e[8],u=e[9],d=e[10],p=e[11],_=e[12],g=e[13],h=e[14],m=e[15],x=u*h*f-g*d*f+g*o*p-a*h*p-u*o*m+a*d*m,y=_*d*f-c*h*f-_*o*p+l*h*p+c*o*m-l*d*m,T=c*g*f-_*u*f+_*a*p-l*g*p-c*a*m+l*u*m,w=_*u*o-c*g*o-_*a*d+l*g*d+c*a*h-l*u*h,M=t*x+n*y+r*T+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return e[0]=x*S,e[1]=(g*d*s-u*h*s-g*r*p+n*h*p+u*r*m-n*d*m)*S,e[2]=(a*h*s-g*o*s+g*r*f-n*h*f-a*r*m+n*o*m)*S,e[3]=(u*o*s-a*d*s-u*r*f+n*d*f+a*r*p-n*o*p)*S,e[4]=y*S,e[5]=(c*h*s-_*d*s+_*r*p-t*h*p-c*r*m+t*d*m)*S,e[6]=(_*o*s-l*h*s-_*r*f+t*h*f+l*r*m-t*o*m)*S,e[7]=(l*d*s-c*o*s+c*r*f-t*d*f-l*r*p+t*o*p)*S,e[8]=T*S,e[9]=(_*u*s-c*g*s-_*n*p+t*g*p+c*n*m-t*u*m)*S,e[10]=(l*g*s-_*a*s+_*n*f-t*g*f-l*n*m+t*a*m)*S,e[11]=(c*a*s-l*u*s-c*n*f+t*u*f+l*n*p-t*a*p)*S,e[12]=w*S,e[13]=(c*g*r-_*u*r+_*n*d-t*g*d-c*n*h+t*u*h)*S,e[14]=(_*a*r-l*g*r-_*n*o+t*g*o+l*n*h-t*a*h)*S,e[15]=(l*u*r-c*a*r+c*n*o-t*u*o-l*n*d+t*a*d)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,l=e.x,a=e.y,o=e.z,f=s*l,c=s*a;return this.set(f*l+n,f*a-r*o,f*o+r*a,0,f*a+r*o,c*a+n,c*o-r*l,0,f*o-r*a,c*o+r*l,s*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,l){return this.set(1,n,s,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,l=t._y,a=t._z,o=t._w,f=s+s,c=l+l,u=a+a,d=s*f,p=s*c,_=s*u,g=l*c,h=l*u,m=a*u,x=o*f,y=o*c,T=o*u,w=n.x,M=n.y,S=n.z;return r[0]=(1-(g+m))*w,r[1]=(p+T)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(p-T)*M,r[5]=(1-(d+m))*M,r[6]=(h+x)*M,r[7]=0,r[8]=(_+y)*S,r[9]=(h-x)*S,r[10]=(1-(d+g))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Jn.set(r[0],r[1],r[2]).length();const l=Jn.set(r[4],r[5],r[6]).length(),a=Jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jt.copy(this);const f=1/s,c=1/l,u=1/a;return jt.elements[0]*=f,jt.elements[1]*=f,jt.elements[2]*=f,jt.elements[4]*=c,jt.elements[5]*=c,jt.elements[6]*=c,jt.elements[8]*=u,jt.elements[9]*=u,jt.elements[10]*=u,t.setFromRotationMatrix(jt),n.x=s,n.y=l,n.z=a,this}makePerspective(e,t,n,r,s,l,a=dn){const o=this.elements,f=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r);let p,_;if(a===dn)p=-(l+s)/(l-s),_=-2*l*s/(l-s);else if(a===Er)p=-l/(l-s),_=-l*s/(l-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=f,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,l,a=dn){const o=this.elements,f=1/(t-e),c=1/(n-r),u=1/(l-s),d=(t+e)*f,p=(n+r)*c;let _,g;if(a===dn)_=(l+s)*u,g=-2*u;else if(a===Er)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=g,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new ae,jt=new mt,hu=new ae(0,0,0),du=new ae(1,1,1),Mn=new ae,$i=new ae,Ft=new ae,Ks=new mt,$s=new zi;class Rr{constructor(e=0,t=0,n=0,r=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],l=r[4],a=r[8],o=r[1],f=r[5],c=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-l,s)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(o,f)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-It(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ks.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ks,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $s.setFromEuler(this),this.setFromQuaternion($s,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pu=0;const Js=new ae,Qn=new zi,sn=new mt,Ji=new ae,Li=new ae,mu=new ae,_u=new zi,Qs=new ae(1,0,0),eo=new ae(0,1,0),to=new ae(0,0,1),gu={type:"added"},vu={type:"removed"};class Pt extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new ae,t=new Rr,n=new zi,r=new ae(1,1,1);function s(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new et}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Qs,e)}rotateY(e){return this.rotateOnAxis(eo,e)}rotateZ(e){return this.rotateOnAxis(to,e)}translateOnAxis(e,t){return Js.copy(e).applyQuaternion(this.quaternion),this.position.add(Js.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qs,e)}translateY(e){return this.translateOnAxis(eo,e)}translateZ(e){return this.translateOnAxis(to,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ji.copy(e):Ji.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Li.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Li,Ji,this.up):sn.lookAt(Ji,Li,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),Qn.setFromRotationMatrix(sn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,l=r.length;s<l;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,e,mu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Li,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,l=r.length;s<l;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let f=0,c=o.length;f<c;f++){const u=o[f];s(e.shapes,u)}else s(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,f=this.material.length;o<f;o++)a.push(s(e.materials,this.material[o]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];r.animations.push(s(e.animations,o))}}if(t){const a=l(e.geometries),o=l(e.materials),f=l(e.textures),c=l(e.images),u=l(e.shapes),d=l(e.skeletons),p=l(e.animations),_=l(e.nodes);a.length>0&&(n.geometries=a),o.length>0&&(n.materials=o),f.length>0&&(n.textures=f),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function l(a){const o=[];for(const f in a){const c=a[f];delete c.metadata,o.push(c)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new ae(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new ae,on=new ae,na=new ae,ln=new ae,ei=new ae,ti=new ae,no=new ae,ia=new ae,ra=new ae,aa=new ae;class en{constructor(e=new ae,t=new ae,n=new ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Yt.subVectors(e,t),r.cross(Yt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Yt.subVectors(r,t),on.subVectors(n,t),na.subVectors(e,t);const l=Yt.dot(Yt),a=Yt.dot(on),o=Yt.dot(na),f=on.dot(on),c=on.dot(na),u=l*f-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,p=(f*o-a*c)*d,_=(l*c-a*o)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,s,l,a,o){return this.getBarycoord(e,t,n,r,ln)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,ln.x),o.addScaledVector(l,ln.y),o.addScaledVector(a,ln.z),o)}static isFrontFacing(e,t,n,r){return Yt.subVectors(n,t),on.subVectors(e,t),Yt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Yt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let l,a;ei.subVectors(r,n),ti.subVectors(s,n),ia.subVectors(e,n);const o=ei.dot(ia),f=ti.dot(ia);if(o<=0&&f<=0)return t.copy(n);ra.subVectors(e,r);const c=ei.dot(ra),u=ti.dot(ra);if(c>=0&&u<=c)return t.copy(r);const d=o*u-c*f;if(d<=0&&o>=0&&c<=0)return l=o/(o-c),t.copy(n).addScaledVector(ei,l);aa.subVectors(e,s);const p=ei.dot(aa),_=ti.dot(aa);if(_>=0&&p<=_)return t.copy(s);const g=p*f-o*_;if(g<=0&&f>=0&&_<=0)return a=f/(f-_),t.copy(n).addScaledVector(ti,a);const h=c*_-p*u;if(h<=0&&u-c>=0&&p-_>=0)return no.subVectors(s,r),a=(u-c)/(u-c+(p-_)),t.copy(r).addScaledVector(no,a);const m=1/(h+g+d);return l=g*m,a=d*m,t.copy(n).addScaledVector(ei,l).addScaledVector(ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const El={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=iu(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,l=2*n-s;this.r=sa(l,s,e+1/3),this.g=sa(l,s,e),this.b=sa(l,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const l=r[1],a=r[2];switch(l){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],l=s.length;if(l===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=El[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return at.fromWorkingColorSpace(At.copy(this),e),Math.round(It(At.r*255,0,255))*65536+Math.round(It(At.g*255,0,255))*256+Math.round(It(At.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(At.copy(this),t);const n=At.r,r=At.g,s=At.b,l=Math.max(n,r,s),a=Math.min(n,r,s);let o,f;const c=(a+l)/2;if(a===l)o=0,f=0;else{const u=l-a;switch(f=c<=.5?u/(l+a):u/(2-l-a),l){case n:o=(r-s)/u+(r<s?6:0);break;case r:o=(s-n)/u+2;break;case s:o=(n-r)/u+4;break}o/=6}return e.h=o,e.s=f,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=yt){at.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,r=At.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(Qi);const n=jr(Sn.h,Qi.h,t),r=jr(Sn.s,Qi.s,t),s=jr(Sn.l,Qi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new rt;rt.NAMES=El;let xu=0;class Si extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=hi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ma,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const l=[];for(const a in s){const o=s[a];delete o.metadata,l.push(o)}return l}if(t){const s=r(e.textures),l=r(e.images);s.length>0&&(n.textures=s),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wl extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new ae,er=new nt;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vs,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return di("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vs&&(e.usage=this.usage),e}}class Tl extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Al extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const Gt=new mt,oa=new Pt,ni=new ae,Bt=new Gi,Di=new Gi,xt=new ae;class vn extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xl(e)?Al:Tl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ae,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,l=t.length;s<l;s++){const a=t[s];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Bt.min,Di.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Di.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Di.min),Bt.expandByPoint(Di.max))}Bt.getCenter(n);let r=0;for(let s=0,l=e.count;s<l;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,l=t.length;s<l;s++){const a=t[s],o=this.morphTargetsRelative;for(let f=0,c=a.count;f<c;f++)xt.fromBufferAttribute(a,f),o&&(ni.fromBufferAttribute(e,f),xt.add(ni)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,l=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const o=this.getAttribute("tangent").array,f=[],c=[];for(let b=0;b<a;b++)f[b]=new ae,c[b]=new ae;const u=new ae,d=new ae,p=new ae,_=new nt,g=new nt,h=new nt,m=new ae,x=new ae;function y(b,L,F){u.fromArray(r,b*3),d.fromArray(r,L*3),p.fromArray(r,F*3),_.fromArray(l,b*2),g.fromArray(l,L*2),h.fromArray(l,F*2),d.sub(u),p.sub(u),g.sub(_),h.sub(_);const j=1/(g.x*h.y-h.x*g.y);isFinite(j)&&(m.copy(d).multiplyScalar(h.y).addScaledVector(p,-g.y).multiplyScalar(j),x.copy(p).multiplyScalar(g.x).addScaledVector(d,-h.x).multiplyScalar(j),f[b].add(m),f[L].add(m),f[F].add(m),c[b].add(x),c[L].add(x),c[F].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let b=0,L=T.length;b<L;++b){const F=T[b],j=F.start,N=F.count;for(let G=j,z=j+N;G<z;G+=3)y(n[G+0],n[G+1],n[G+2])}const w=new ae,M=new ae,S=new ae,I=new ae;function U(b){S.fromArray(s,b*3),I.copy(S);const L=f[b];w.copy(L),w.sub(S.multiplyScalar(S.dot(L))).normalize(),M.crossVectors(I,L);const j=M.dot(c[b])<0?-1:1;o[b*4]=w.x,o[b*4+1]=w.y,o[b*4+2]=w.z,o[b*4+3]=j}for(let b=0,L=T.length;b<L;++b){const F=T[b],j=F.start,N=F.count;for(let G=j,z=j+N;G<z;G+=3)U(n[G+0]),U(n[G+1]),U(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new ae,s=new ae,l=new ae,a=new ae,o=new ae,f=new ae,c=new ae,u=new ae;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),g=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),l.fromBufferAttribute(t,h),c.subVectors(l,s),u.subVectors(r,s),c.cross(u),a.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),f.fromBufferAttribute(n,h),a.add(c),o.add(c),f.add(c),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(h,f.x,f.y,f.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),l.fromBufferAttribute(t,d+2),c.subVectors(l,s),u.subVectors(r,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,o){const f=a.array,c=a.itemSize,u=a.normalized,d=new f.constructor(o.length*c);let p=0,_=0;for(let g=0,h=o.length;g<h;g++){a.isInterleavedBufferAttribute?p=o[g]*a.data.stride+a.offset:p=o[g]*c;for(let m=0;m<c;m++)d[_++]=f[p++]}return new $t(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,r=this.attributes;for(const a in r){const o=r[a],f=e(o,n);t.setAttribute(a,f)}const s=this.morphAttributes;for(const a in s){const o=[],f=s[a];for(let c=0,u=f.length;c<u;c++){const d=f[c],p=e(d,n);o.push(p)}t.morphAttributes[a]=o}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,o=l.length;a<o;a++){const f=l[a];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const f in o)o[f]!==void 0&&(e[f]=o[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const f=n[o];e.data.attributes[o]=f.toJSON(e.data)}const r={};let s=!1;for(const o in this.morphAttributes){const f=this.morphAttributes[o],c=[];for(let u=0,d=f.length;u<d;u++){const p=f[u];c.push(p.toJSON(e.data))}c.length>0&&(r[o]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const c=r[f];this.setAttribute(f,c.clone(t))}const s=e.morphAttributes;for(const f in s){const c=[],u=s[f];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[f]=c}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,c=l.length;f<c;f++){const u=l[f];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new mt,Un=new fu,tr=new ka,ro=new ae,ii=new ae,ri=new ae,ai=new ae,la=new ae,nr=new ae,ir=new nt,rr=new nt,ar=new nt,ao=new ae,so=new ae,oo=new ae,sr=new ae,or=new ae;class kt extends Pt{constructor(e=new vn,t=new wl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,l=r.length;s<l;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){nr.set(0,0,0);for(let o=0,f=s.length;o<f;o++){const c=a[o],u=s[o];c!==0&&(la.fromBufferAttribute(u,e),l?nr.addScaledVector(la,c):nr.addScaledVector(la.sub(t),c))}t.add(nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(tr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(tr,ro)===null||Un.origin.distanceToSquared(ro)>(e.far-e.near)**2))&&(io.copy(s).invert(),Un.copy(e.ray).applyMatrix4(io),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,l=this.material,a=s.index,o=s.attributes.position,f=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(l))for(let _=0,g=d.length;_<g;_++){const h=d[_],m=l[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(a.count,Math.min(h.start+h.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const M=a.getX(T),S=a.getX(T+1),I=a.getX(T+2);r=lr(this,m,e,n,f,c,u,M,S,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let h=_,m=g;h<m;h+=3){const x=a.getX(h),y=a.getX(h+1),T=a.getX(h+2);r=lr(this,l,e,n,f,c,u,x,y,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(l))for(let _=0,g=d.length;_<g;_++){const h=d[_],m=l[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const M=T,S=T+1,I=T+2;r=lr(this,m,e,n,f,c,u,M,S,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let h=_,m=g;h<m;h+=3){const x=h,y=h+1,T=h+2;r=lr(this,l,e,n,f,c,u,x,y,T),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function bu(i,e,t,n,r,s,l,a){let o;if(e.side===Ot?o=n.intersectTriangle(l,s,r,!0,a):o=n.intersectTriangle(r,s,l,e.side===Cn,a),o===null)return null;or.copy(a),or.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(or);return f<t.near||f>t.far?null:{distance:f,point:or.clone(),object:i}}function lr(i,e,t,n,r,s,l,a,o,f){i.getVertexPosition(a,ii),i.getVertexPosition(o,ri),i.getVertexPosition(f,ai);const c=bu(i,e,t,n,ii,ri,ai,sr);if(c){r&&(ir.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,o),ar.fromBufferAttribute(r,f),c.uv=en.getInterpolation(sr,ii,ri,ai,ir,rr,ar,new nt)),s&&(ir.fromBufferAttribute(s,a),rr.fromBufferAttribute(s,o),ar.fromBufferAttribute(s,f),c.uv1=en.getInterpolation(sr,ii,ri,ai,ir,rr,ar,new nt),c.uv2=c.uv1),l&&(ao.fromBufferAttribute(l,a),so.fromBufferAttribute(l,o),oo.fromBufferAttribute(l,f),c.normal=en.getInterpolation(sr,ii,ri,ai,ao,so,oo,new ae),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:o,c:f,normal:new ae,materialIndex:0};en.getNormal(ii,ri,ai,u.normal),c.face=u}return c}class Hi extends vn{constructor(e=1,t=1,n=1,r=1,s=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:l};const a=this;r=Math.floor(r),s=Math.floor(s),l=Math.floor(l);const o=[],f=[],c=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,l,s,0),_("z","y","x",1,-1,n,t,-e,l,s,1),_("x","z","y",1,1,e,n,t,r,l,2),_("x","z","y",1,-1,e,n,-t,r,l,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(o),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(c,3)),this.setAttribute("uv",new mn(u,2));function _(g,h,m,x,y,T,w,M,S,I,U){const b=T/S,L=w/I,F=T/2,j=w/2,N=M/2,G=S+1,z=I+1;let ee=0,V=0;const re=new ae;for(let oe=0;oe<z;oe++){const ue=oe*L-j;for(let Y=0;Y<G;Y++){const he=Y*b-F;re[g]=he*x,re[h]=ue*y,re[m]=N,f.push(re.x,re.y,re.z),re[g]=0,re[h]=0,re[m]=M>0?1:-1,c.push(re.x,re.y,re.z),u.push(Y/S),u.push(1-oe/I),ee+=1}}for(let oe=0;oe<I;oe++)for(let ue=0;ue<S;ue++){const Y=d+ue+G*oe,he=d+ue+G*(oe+1),W=d+(ue+1)+G*(oe+1),ce=d+(ue+1)+G*oe;o.push(Y,he,ce),o.push(he,W,ce),V+=6}a.addGroup(p,V,U),p+=V,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function Mu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cl(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}const Pr={clone:yi,merge:Lt};var Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rl extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new ae,lo=new nt,co=new nt;class Ht extends Rl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,lo,co),t.subVectors(co,lo)}setViewOffset(e,t,n,r,s,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const o=l.fullWidth,f=l.fullHeight;s+=l.offsetX*r/o,t-=l.offsetY*n/f,r*=l.width/o,n*=l.height/f}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,oi=1;class wu extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(si,oi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(si,oi,e,t);s.layers=this.layers,this.add(s);const l=new Ht(si,oi,e,t);l.layers=this.layers,this.add(l);const a=new Ht(si,oi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(si,oi,e,t);o.layers=this.layers,this.add(o);const f=new Ht(si,oi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,l,a,o]=t;for(const f of t)this.remove(f);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,l,a,o,f,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,o),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Pl extends Rt{constructor(e,t,n,r,s,l,a,o,f,c){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,r,s,l,a,o,f,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tu extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(di("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?yt:Vt),this.texture=new Pl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hi(5,5,5),s=new Wt({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:tn});s.uniforms.tEquirect.value=t;const l=new kt(r,s),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=Ct),new wu(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(s)}}const ca=new ae,Au=new ae,Cu=new et;class On{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ca.subVectors(n,t).cross(Au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cu.getNormalMatrix(e),r=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new ka,cr=new ae;class za{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,l=new On){this.planes=[e,t,n,r,s,l]}set(e,t,n,r,s,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,s=r[0],l=r[1],a=r[2],o=r[3],f=r[4],c=r[5],u=r[6],d=r[7],p=r[8],_=r[9],g=r[10],h=r[11],m=r[12],x=r[13],y=r[14],T=r[15];if(n[0].setComponents(o-s,d-f,h-p,T-m).normalize(),n[1].setComponents(o+s,d+f,h+p,T+m).normalize(),n[2].setComponents(o+l,d+c,h+_,T+x).normalize(),n[3].setComponents(o-l,d-c,h-_,T-x).normalize(),n[4].setComponents(o-a,d-u,h-g,T-y).normalize(),t===dn)n[5].setComponents(o+a,d+u,h+g,T+y).normalize();else if(t===Er)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(cr.x=r.normal.x>0?e.max.x:e.min.x,cr.y=r.normal.y>0?e.max.y:e.min.y,cr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ll(){let i=null,e=!1,t=null,n=null;function r(s,l){t(s,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ru(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,c){const u=f.array,d=f.usage,p=u.byteLength,_=i.createBuffer();i.bindBuffer(c,_),i.bufferData(c,u,d),f.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(u instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version,size:p}}function s(f,c,u){const d=c.array,p=c._updateRange,_=c.updateRanges;if(i.bindBuffer(u,f),p.count===-1&&_.length===0&&i.bufferSubData(u,0,d),_.length!==0){for(let g=0,h=_.length;g<h;g++){const m=_[g];t?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}c.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const c=n.get(f);c&&(i.deleteBuffer(c.buffer),n.delete(f))}function o(f,c){if(f.isGLBufferAttribute){const d=n.get(f);(!d||d.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const u=n.get(f);if(u===void 0)n.set(f,r(f,c));else if(u.version<f.version){if(u.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,f,c),u.version=f.version}}return{get:l,remove:a,update:o}}class bi extends vn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,l=t/2,a=Math.floor(n),o=Math.floor(r),f=a+1,c=o+1,u=e/a,d=t/o,p=[],_=[],g=[],h=[];for(let m=0;m<c;m++){const x=m*d-l;for(let y=0;y<f;y++){const T=y*u-s;_.push(T,-x,0),g.push(0,0,1),h.push(y/a),h.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<a;x++){const y=x+f*m,T=x+f*(m+1),w=x+1+f*(m+1),M=x+1+f*m;p.push(y,T,M),p.push(T,w,M)}this.setIndex(p),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lu=`#ifdef USE_ALPHAHASH
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
#endif`,Du=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
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
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bu=`#ifdef USE_BATCHING
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
#endif`,ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
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
#endif`,Wu=`#ifdef USE_BUMPMAP
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
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qu=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tf=`vec3 transformedNormal = objectNormal;
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
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",lf=`
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
}`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
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
}`,xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
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
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Pf=`struct PhysicalMaterial {
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
}`,Lf=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,If=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xf=`#ifdef USE_MORPHNORMALS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Yf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qf=`#ifdef USE_NORMALMAP
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
#endif`,eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ah=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ch=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ph=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mh=`float getShadowMask() {
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
}`,_h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gh=`#ifdef USE_SKINNING
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
#endif`,vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xh=`#ifdef USE_SKINNING
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
#endif`,yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eh=`#ifdef USE_TRANSMISSION
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
#endif`,wh=`#ifdef USE_TRANSMISSION
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
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ah=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ph=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
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
}`,Dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`#include <common>
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
}`,Fh=`#if DEPTH_PACKING == 3200
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
}`,Bh=`#define DISTANCE
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
}`,kh=`#define DISTANCE
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
}`,zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hh=`uniform float scale;
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
}`,Vh=`uniform vec3 diffuse;
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
}`,Wh=`#include <common>
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
}`,Xh=`uniform vec3 diffuse;
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
}`,jh=`#define LAMBERT
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
}`,Yh=`#define LAMBERT
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
}`,Zh=`#define MATCAP
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
}`,qh=`#define MATCAP
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
}`,Kh=`#define NORMAL
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
}`,$h=`#define NORMAL
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
}`,Jh=`#define PHONG
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
}`,Qh=`#define PHONG
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
}`,ed=`#define STANDARD
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
}`,td=`#define STANDARD
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
}`,nd=`#define TOON
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
}`,id=`#define TOON
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
}`,rd=`uniform float size;
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
}`,ad=`uniform vec3 diffuse;
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
}`,sd=`#include <common>
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
}`,od=`uniform vec3 color;
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
}`,ld=`uniform float rotation;
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
}`,cd=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Pu,alphahash_pars_fragment:Lu,alphamap_fragment:Du,alphamap_pars_fragment:Uu,alphatest_fragment:Iu,alphatest_pars_fragment:Ou,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Bu,batching_vertex:ku,begin_vertex:zu,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:Yu,clipping_planes_vertex:Zu,color_fragment:qu,color_pars_fragment:Ku,color_pars_vertex:$u,color_vertex:Ju,common:Qu,cube_uv_reflection_fragment:ef,defaultnormal_vertex:tf,displacementmap_pars_vertex:nf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:sf,colorspace_fragment:of,colorspace_pars_fragment:lf,envmap_fragment:cf,envmap_common_pars_fragment:uf,envmap_pars_fragment:ff,envmap_pars_vertex:hf,envmap_physical_pars_fragment:Ef,envmap_vertex:df,fog_vertex:pf,fog_pars_vertex:mf,fog_fragment:_f,fog_pars_fragment:gf,gradientmap_pars_fragment:vf,lightmap_fragment:xf,lightmap_pars_fragment:yf,lights_lambert_fragment:bf,lights_lambert_pars_fragment:Mf,lights_pars_begin:Sf,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:Lf,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:If,logdepthbuf_pars_fragment:Of,logdepthbuf_pars_vertex:Nf,logdepthbuf_vertex:Ff,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:zf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Vf,morphcolor_vertex:Wf,morphnormal_vertex:Xf,morphtarget_pars_vertex:jf,morphtarget_vertex:Yf,normal_fragment_begin:Zf,normal_fragment_maps:qf,normal_pars_fragment:Kf,normal_pars_vertex:$f,normal_vertex:Jf,normalmap_pars_fragment:Qf,clearcoat_normal_fragment_begin:eh,clearcoat_normal_fragment_maps:th,clearcoat_pars_fragment:nh,iridescence_pars_fragment:ih,opaque_fragment:rh,packing:ah,premultiplied_alpha_fragment:sh,project_vertex:oh,dithering_fragment:lh,dithering_pars_fragment:ch,roughnessmap_fragment:uh,roughnessmap_pars_fragment:fh,shadowmap_pars_fragment:hh,shadowmap_pars_vertex:dh,shadowmap_vertex:ph,shadowmask_pars_fragment:mh,skinbase_vertex:_h,skinning_pars_vertex:gh,skinning_vertex:vh,skinnormal_vertex:xh,specularmap_fragment:yh,specularmap_pars_fragment:bh,tonemapping_fragment:Mh,tonemapping_pars_fragment:Sh,transmission_fragment:Eh,transmission_pars_fragment:wh,uv_pars_fragment:Th,uv_pars_vertex:Ah,uv_vertex:Ch,worldpos_vertex:Rh,background_vert:Ph,background_frag:Lh,backgroundCube_vert:Dh,backgroundCube_frag:Uh,cube_vert:Ih,cube_frag:Oh,depth_vert:Nh,depth_frag:Fh,distanceRGBA_vert:Bh,distanceRGBA_frag:kh,equirect_vert:zh,equirect_frag:Gh,linedashed_vert:Hh,linedashed_frag:Vh,meshbasic_vert:Wh,meshbasic_frag:Xh,meshlambert_vert:jh,meshlambert_frag:Yh,meshmatcap_vert:Zh,meshmatcap_frag:qh,meshnormal_vert:Kh,meshnormal_frag:$h,meshphong_vert:Jh,meshphong_frag:Qh,meshphysical_vert:ed,meshphysical_frag:td,meshtoon_vert:nd,meshtoon_frag:id,points_vert:rd,points_frag:ad,shadow_vert:sd,shadow_frag:od,sprite_vert:ld,sprite_frag:cd},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Jt={basic:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Lt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Lt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Lt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Lt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Lt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Lt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Lt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Lt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Lt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Lt([Me.common,Me.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Lt([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Jt.physical={uniforms:Lt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const ur={r:0,b:0,g:0};function ud(i,e,t,n,r,s,l){const a=new rt(0);let o=s===!0?0:1,f,c,u=null,d=0,p=null;function _(h,m){let x=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?g(a,o):y&&y.isColor&&(g(y,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ar)?(c===void 0&&(c=new kt(new Hi(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:yi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=at.getTransfer(y.colorSpace)!==st,(u!==y||d!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new kt(new bi(2,2),new Wt({name:"BackgroundMaterial",uniforms:yi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=at.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,u=y,d=y.version,p=i.toneMapping),f.layers.enableAll(),h.unshift(f,f.geometry,f.material,0,0,null))}function g(h,m){h.getRGB(ur,Cl(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,m,l)}return{getClearColor:function(){return a},setClearColor:function(h,m=1){a.set(h),o=m,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,g(a,o)},render:_}}function fd(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||s!==null,a={},o=h(null);let f=o,c=!1;function u(N,G,z,ee,V){let re=!1;if(l){const oe=g(ee,z,G);f!==oe&&(f=oe,p(f.object)),re=m(N,ee,z,V),re&&x(N,ee,z,V)}else{const oe=G.wireframe===!0;(f.geometry!==ee.id||f.program!==z.id||f.wireframe!==oe)&&(f.geometry=ee.id,f.program=z.id,f.wireframe=oe,re=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,I(N,G,z,ee),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,G,z){const ee=z.wireframe===!0;let V=a[N.id];V===void 0&&(V={},a[N.id]=V);let re=V[G.id];re===void 0&&(re={},V[G.id]=re);let oe=re[ee];return oe===void 0&&(oe=h(d()),re[ee]=oe),oe}function h(N){const G=[],z=[],ee=[];for(let V=0;V<r;V++)G[V]=0,z[V]=0,ee[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:ee,object:N,attributes:{},index:null}}function m(N,G,z,ee){const V=f.attributes,re=G.attributes;let oe=0;const ue=z.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const W=V[Y];let ce=re[Y];if(ce===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),W===void 0||W.attribute!==ce||ce&&W.data!==ce.data)return!0;oe++}return f.attributesNum!==oe||f.index!==ee}function x(N,G,z,ee){const V={},re=G.attributes;let oe=0;const ue=z.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let W=re[Y];W===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(W=N.instanceColor));const ce={};ce.attribute=W,W&&W.data&&(ce.data=W.data),V[Y]=ce,oe++}f.attributes=V,f.attributesNum=oe,f.index=ee}function y(){const N=f.newAttributes;for(let G=0,z=N.length;G<z;G++)N[G]=0}function T(N){w(N,0)}function w(N,G){const z=f.newAttributes,ee=f.enabledAttributes,V=f.attributeDivisors;z[N]=1,ee[N]===0&&(i.enableVertexAttribArray(N),ee[N]=1),V[N]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),V[N]=G)}function M(){const N=f.newAttributes,G=f.enabledAttributes;for(let z=0,ee=G.length;z<ee;z++)G[z]!==N[z]&&(i.disableVertexAttribArray(z),G[z]=0)}function S(N,G,z,ee,V,re,oe){oe===!0?i.vertexAttribIPointer(N,G,z,V,re):i.vertexAttribPointer(N,G,z,ee,V,re)}function I(N,G,z,ee){if(n.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=ee.attributes,re=z.getAttributes(),oe=G.defaultAttributeValues;for(const ue in re){const Y=re[ue];if(Y.location>=0){let he=V[ue];if(he===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const W=he.normalized,ce=he.itemSize,xe=t.get(he);if(xe===void 0)continue;const we=xe.buffer,ve=xe.type,Se=xe.bytesPerElement,ze=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||he.gpuType===ll);if(he.isInterleavedBufferAttribute){const Ae=he.data,X=Ae.stride,He=he.offset;if(Ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<Y.locationSize;Pe++)w(Y.location+Pe,Ae.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<Y.locationSize;Pe++)T(Y.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Pe=0;Pe<Y.locationSize;Pe++)S(Y.location+Pe,ce/Y.locationSize,ve,W,X*Se,(He+ce/Y.locationSize*Pe)*Se,ze)}else{if(he.isInstancedBufferAttribute){for(let Ae=0;Ae<Y.locationSize;Ae++)w(Y.location+Ae,he.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<Y.locationSize;Ae++)T(Y.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ae=0;Ae<Y.locationSize;Ae++)S(Y.location+Ae,ce/Y.locationSize,ve,W,ce*Se,ce/Y.locationSize*Ae*Se,ze)}}else if(oe!==void 0){const W=oe[ue];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(Y.location,W);break;case 3:i.vertexAttrib3fv(Y.location,W);break;case 4:i.vertexAttrib4fv(Y.location,W);break;default:i.vertexAttrib1fv(Y.location,W)}}}}M()}function U(){F();for(const N in a){const G=a[N];for(const z in G){const ee=G[z];for(const V in ee)_(ee[V].object),delete ee[V];delete G[z]}delete a[N]}}function b(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const z in G){const ee=G[z];for(const V in ee)_(ee[V].object),delete ee[V];delete G[z]}delete a[N.id]}function L(N){for(const G in a){const z=a[G];if(z[N.id]===void 0)continue;const ee=z[N.id];for(const V in ee)_(ee[V].object),delete ee[V];delete z[N.id]}}function F(){j(),c=!0,f!==o&&(f=o,p(f.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:F,resetDefaultState:j,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:T,disableUnusedAttributes:M}}function hd(i,e,t,n){const r=n.isWebGL2;let s;function l(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function o(c,u,d){if(d===0)return;let p,_;if(r)p=i,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,u,d),t.update(u,s,d)}function f(c,u,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<d;_++)this.render(c[_],u[_]);else{p.multiDrawArraysWEBGL(s,c,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];t.update(_,s,1)}}this.setMode=l,this.render=a,this.renderInstances=o,this.renderMultiDraw=f}function dd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const f=l||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),h=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,T=l||e.has("OES_texture_float"),w=y&&T,M=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:M}}function pd(i){const e=this;let t=null,n=0,r=!1,s=!1;const l=new On,a=new et,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||r;return r=d,n=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=c(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,g=u.clipIntersection,h=u.clipShadows,m=i.get(u);if(!r||_===null||_.length===0||s&&!h)s?c(null):f();else{const x=s?0:n,y=x*4;let T=m.clippingState||null;o.value=T,T=c(_,d,y,p);for(let w=0;w!==y;++w)T[w]=t[w];m.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function f(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(u,d,p,_){const g=u!==null?u.length:0;let h=null;if(g!==0){if(h=o.value,_!==!0||h===null){const m=p+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,T=p;y!==g;++y,T+=4)l.copy(u[y]).applyMatrix4(x,a),l.normal.toArray(h,T),h[T+3]=l.constant}o.value=h,o.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,h}}function md(i){let e=new WeakMap;function t(l,a){return a===Sa?l.mapping=gi:a===Ea&&(l.mapping=vi),l}function n(l){if(l&&l.isTexture){const a=l.mapping;if(a===Sa||a===Ea)if(e.has(l)){const o=e.get(l).texture;return t(o,l.mapping)}else{const o=l.image;if(o&&o.height>0){const f=new Tu(o.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const a=l.target;a.removeEventListener("dispose",r);const o=e.get(a);o!==void 0&&(e.delete(a),o.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ga extends Rl{constructor(e=-1,t=1,n=1,r=-1,s=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,l=n+e,a=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,l=s+f*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,l,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,uo=[.125,.215,.35,.446,.526,.582],kn=20,ua=new Ga,fo=new rt;let fa=null,ha=0,da=0;const Nn=(1+Math.sqrt(5))/2,li=1/Nn,ho=[new ae(1,1,1),new ae(-1,1,1),new ae(1,1,-1),new ae(-1,1,-1),new ae(0,Nn,li),new ae(0,Nn,-li),new ae(li,0,Nn),new ae(-li,0,Nn),new ae(Nn,li,0),new ae(-Nn,li,0)];class po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fa,ha,da),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fa=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Wn,format:Kt,colorSpace:_n,depthBuffer:!1},r=mo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_d(s)),this._blurMaterial=gd(s,e,t)}return r}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,ua)}_sceneToCubeUV(e,t,n,r){const a=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,d=c.toneMapping;c.getClearColor(fo),c.toneMapping=pn,c.autoClear=!1;const p=new wl({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),_=new kt(new Hi,p);let g=!1;const h=e.background;h?h.isColor&&(p.color.copy(h),e.background=null,g=!0):(p.color.copy(fo),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,o[m],0),a.lookAt(f[m],0,0)):x===1?(a.up.set(0,0,o[m]),a.lookAt(0,f[m],0)):(a.up.set(0,o[m],0),a.lookAt(0,0,f[m]));const y=this._cubeSize;fr(r,x*y,m>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=u,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===gi||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_o());const s=r?this._cubemapMaterial:this._equirectMaterial,l=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const o=this._cubeSize;fr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(l,ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=ho[(r-1)%ho.length];this._blur(e,r-1,r,s,l)}t.autoClear=n}_blur(e,t,n,r,s){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",s),this._halfBlur(l,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,l,a){const o=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new kt(this._lodPlanes[r],f),d=f.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kn-1),g=s/_,h=isFinite(s)?1+Math.floor(c*g):kn;h>kn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${kn}`);const m=[];let x=0;for(let S=0;S<kn;++S){const I=S/g,U=Math.exp(-I*I/2);m.push(U),S===0?x+=U:S<h&&(x+=2*U)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=m,d.latitudinal.value=l==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const T=this._sizeLods[r],w=3*T*(r>y-ui?r-y+ui:0),M=4*(this._cubeSize-T);fr(t,w,M,3*T,2*T),o.setRenderTarget(t),o.render(u,ua)}}function _d(i){const e=[],t=[],n=[];let r=i;const s=i-ui+1+uo.length;for(let l=0;l<s;l++){const a=Math.pow(2,r);t.push(a);let o=1/a;l>i-ui?o=uo[l-i+ui-1]:l===0&&(o=0),n.push(o);const f=1/(a-2),c=-f,u=1+f,d=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,_=6,g=3,h=2,m=1,x=new Float32Array(g*_*p),y=new Float32Array(h*_*p),T=new Float32Array(m*_*p);for(let M=0;M<p;M++){const S=M%3*2/3-1,I=M>2?0:-1,U=[S,I,0,S+2/3,I,0,S+2/3,I+1,0,S,I,0,S+2/3,I+1,0,S,I+1,0];x.set(U,g*_*M),y.set(d,h*_*M);const b=[M,M,M,M,M,M];T.set(b,m*_*M)}const w=new vn;w.setAttribute("position",new $t(x,g)),w.setAttribute("uv",new $t(y,h)),w.setAttribute("faceIndex",new $t(T,m)),e.push(w),r>ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mo(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gd(i,e,t){const n=new Float32Array(kn),r=new ae(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function _o(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function go(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Ha(){return`

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
	`}function vd(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const o=a.mapping,f=o===Sa||o===Ea,c=o===gi||o===vi;if(f||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new po(i)),u=f?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(f&&u&&u.height>0||c&&u&&r(u)){t===null&&(t=new po(i));const d=f?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let o=0;const f=6;for(let c=0;c<f;c++)a[c]!==void 0&&o++;return o===f}function s(a){const o=a.target;o.removeEventListener("dispose",s);const f=e.get(o);f!==void 0&&(e.delete(o),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function xd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yd(i,e,t,n){const r={},s=new WeakMap;function l(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let h=0,m=g.length;h<m;h++)e.remove(g[h])}d.removeEventListener("dispose",l),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return r[d.id]===!0||(d.addEventListener("dispose",l),r[d.id]=!0,t.memory.geometries++),d}function o(u){const d=u.attributes;for(const _ in d)e.update(d[_],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const _ in p){const g=p[_];for(let h=0,m=g.length;h<m;h++)e.update(g[h],i.ARRAY_BUFFER)}}function f(u){const d=[],p=u.index,_=u.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,T=x.length;y<T;y+=3){const w=x[y+0],M=x[y+1],S=x[y+2];d.push(w,M,M,S,S,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,T=x.length/3-1;y<T;y+=3){const w=y+0,M=y+1,S=y+2;d.push(w,M,M,S,S,w)}}else return;const h=new(xl(d)?Al:Tl)(d,1);h.version=g;const m=s.get(u);m&&e.remove(m),s.set(u,h)}function c(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&f(u)}else f(u);return s.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function bd(i,e,t,n){const r=n.isWebGL2;let s;function l(p){s=p}let a,o;function f(p){a=p.type,o=p.bytesPerElement}function c(p,_){i.drawElements(s,_,a,p*o),t.update(_,s,1)}function u(p,_,g){if(g===0)return;let h,m;if(r)h=i,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,_,a,p*o,g),t.update(_,s,g)}function d(p,_,g){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<g;m++)this.render(p[m]/o,_[m]);else{h.multiDrawElementsWEBGL(s,_,0,a,p,0,g);let m=0;for(let x=0;x<g;x++)m+=_[x];t.update(m,s,1)}}this.setMode=l,this.setIndex=f,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function Md(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,l,a){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Sd(i,e){return i[0]-e[0]}function Ed(i,e){return Math.abs(e[1])-Math.abs(i[1])}function wd(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,l=new bt,a=[];for(let f=0;f<8;f++)a[f]=[f,0];function o(f,c,u){const d=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=_!==void 0?_.length:0;let h=s.get(c);if(h===void 0||h.count!==g){let G=function(){j.dispose(),s.delete(c),c.removeEventListener("dispose",G)};var p=G;h!==void 0&&h.texture.dispose();const y=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let U=0;y===!0&&(U=1),T===!0&&(U=2),w===!0&&(U=3);let b=c.attributes.position.count*U,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const F=new Float32Array(b*L*4*g),j=new Ml(F,b,L,g);j.type=hn,j.needsUpdate=!0;const N=U*4;for(let z=0;z<g;z++){const ee=M[z],V=S[z],re=I[z],oe=b*L*4*z;for(let ue=0;ue<ee.count;ue++){const Y=ue*N;y===!0&&(l.fromBufferAttribute(ee,ue),F[oe+Y+0]=l.x,F[oe+Y+1]=l.y,F[oe+Y+2]=l.z,F[oe+Y+3]=0),T===!0&&(l.fromBufferAttribute(V,ue),F[oe+Y+4]=l.x,F[oe+Y+5]=l.y,F[oe+Y+6]=l.z,F[oe+Y+7]=0),w===!0&&(l.fromBufferAttribute(re,ue),F[oe+Y+8]=l.x,F[oe+Y+9]=l.y,F[oe+Y+10]=l.z,F[oe+Y+11]=re.itemSize===4?l.w:1)}}h={count:g,texture:j,size:new nt(b,L)},s.set(c,h),c.addEventListener("dispose",G)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];const x=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}else{const _=d===void 0?0:d.length;let g=n[c.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[c.id]=g}for(let T=0;T<_;T++){const w=g[T];w[0]=T,w[1]=d[T]}g.sort(Ed);for(let T=0;T<8;T++)T<_&&g[T][1]?(a[T][0]=g[T][0],a[T][1]=g[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Sd);const h=c.morphAttributes.position,m=c.morphAttributes.normal;let x=0;for(let T=0;T<8;T++){const w=a[T],M=w[0],S=w[1];M!==Number.MAX_SAFE_INTEGER&&S?(h&&c.getAttribute("morphTarget"+T)!==h[M]&&c.setAttribute("morphTarget"+T,h[M]),m&&c.getAttribute("morphNormal"+T)!==m[M]&&c.setAttribute("morphNormal"+T,m[M]),r[T]=S,x+=S):(h&&c.hasAttribute("morphTarget"+T)===!0&&c.deleteAttribute("morphTarget"+T),m&&c.hasAttribute("morphNormal"+T)===!0&&c.deleteAttribute("morphNormal"+T),r[T]=0)}const y=c.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:o}}function Td(i,e,t,n){let r=new WeakMap;function s(o){const f=n.render.frame,c=o.geometry,u=e.get(o,c);if(r.get(u)!==f&&(e.update(u),r.set(u,f)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),r.get(o)!==f&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,f))),o.isSkinnedMesh){const d=o.skeleton;r.get(d)!==f&&(d.update(),r.set(d,f))}return u}function l(){r=new WeakMap}function a(o){const f=o.target;f.removeEventListener("dispose",a),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:l}}class Dl extends Rt{constructor(e,t,n,r,s,l,a,o,f,c){if(c=c!==void 0?c:Hn,c!==Hn&&c!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===Hn&&(n=Tn),n===void 0&&c===xi&&(n=Gn),super(null,r,s,l,a,o,c,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=o!==void 0?o:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ul=new Rt,Il=new Dl(1,1);Il.compareFunction=vl;const Ol=new Ml,Nl=new cu,Fl=new Pl,vo=[],xo=[],yo=new Float32Array(16),bo=new Float32Array(9),Mo=new Float32Array(4);function Ei(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=vo[r];if(s===void 0&&(s=new Float32Array(r),vo[r]=s),e!==0){n.toArray(s,0);for(let l=1,a=0;l!==e;++l)a+=t,i[l].toArray(s,a)}return s}function _t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lr(i,e){let t=xo[e];t===void 0&&(t=new Int32Array(e),xo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ad(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Rd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function Ld(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;Mo.set(n),i.uniformMatrix2fv(this.addr,!1,Mo),gt(t,n)}}function Dd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),gt(t,n)}}function Ud(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(_t(t,n))return;yo.set(n),i.uniformMatrix4fv(this.addr,!1,yo),gt(t,n)}}function Id(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Od(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function Nd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Fd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Bd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Hd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Il:Ul;t.setTexture2D(e||s,r)}function Vd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nl,r)}function Wd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fl,r)}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ol,r)}function jd(i){switch(i){case 5126:return Ad;case 35664:return Cd;case 35665:return Rd;case 35666:return Pd;case 35674:return Ld;case 35675:return Dd;case 35676:return Ud;case 5124:case 35670:return Id;case 35667:case 35671:return Od;case 35668:case 35672:return Nd;case 35669:case 35673:return Fd;case 5125:return Bd;case 36294:return kd;case 36295:return zd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Hd;case 35679:case 36299:case 36307:return Vd;case 35680:case 36300:case 36308:case 36293:return Wd;case 36289:case 36303:case 36311:case 36292:return Xd}}function Yd(i,e){i.uniform1fv(this.addr,e)}function Zd(i,e){const t=Ei(e,this.size,2);i.uniform2fv(this.addr,t)}function qd(i,e){const t=Ei(e,this.size,3);i.uniform3fv(this.addr,t)}function Kd(i,e){const t=Ei(e,this.size,4);i.uniform4fv(this.addr,t)}function $d(i,e){const t=Ei(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jd(i,e){const t=Ei(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qd(i,e){const t=Ei(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ep(i,e){i.uniform1iv(this.addr,e)}function tp(i,e){i.uniform2iv(this.addr,e)}function np(i,e){i.uniform3iv(this.addr,e)}function ip(i,e){i.uniform4iv(this.addr,e)}function rp(i,e){i.uniform1uiv(this.addr,e)}function ap(i,e){i.uniform2uiv(this.addr,e)}function sp(i,e){i.uniform3uiv(this.addr,e)}function op(i,e){i.uniform4uiv(this.addr,e)}function lp(i,e,t){const n=this.cache,r=e.length,s=Lr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Ul,s[l])}function cp(i,e,t){const n=this.cache,r=e.length,s=Lr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Nl,s[l])}function up(i,e,t){const n=this.cache,r=e.length,s=Lr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Fl,s[l])}function fp(i,e,t){const n=this.cache,r=e.length,s=Lr(t,r);_t(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Ol,s[l])}function hp(i){switch(i){case 5126:return Yd;case 35664:return Zd;case 35665:return qd;case 35666:return Kd;case 35674:return $d;case 35675:return Jd;case 35676:return Qd;case 5124:case 35670:return ep;case 35667:case 35671:return tp;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return rp;case 36294:return ap;case 36295:return sp;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return up;case 36289:case 36303:case 36311:case 36292:return fp}}class dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jd(t.type)}}class pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hp(t.type)}}class mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,l=r.length;s!==l;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function So(i,e){i.seq.push(e),i.map[e.id]=e}function _p(i,e,t){const n=i.name,r=n.length;for(pa.lastIndex=0;;){const s=pa.exec(n),l=pa.lastIndex;let a=s[1];const o=s[2]==="]",f=s[3];if(o&&(a=a|0),f===void 0||f==="["&&l+2===r){So(t,f===void 0?new dp(a,i,e):new pp(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new mp(a),So(t,u)),t=u}}}class gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),l=e.getUniformLocation(t,s.name);_p(s,l,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,l=t.length;s!==l;++s){const a=t[s],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gp=37297;let vp=0;function xp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let l=r;l<s;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}function yp(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===Sr&&t===Mr?n="LinearDisplayP3ToLinearSRGB":e===Mr&&t===Sr&&(n="LinearSRGBToLinearDisplayP3"),i){case _n:case Cr:return[n,"LinearTransferOETF"];case yt:case Ba:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xp(i.getShaderSource(e),l)}else return r}function bp(i,e){const t=yp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mp(i,e){let t;switch(e){case nl:t="Linear";break;case il:t="Reinhard";break;case rl:t="OptimizedCineon";break;case al:t="ACESFilmic";break;case sl:t="AgX";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fi).join(`
`)}function Ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fi).join(`
`)}function wp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),l=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[l]={type:s.type,location:i.getAttribLocation(e,l),locationSize:a}}return t}function fi(i){return i!==""}function To(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ao(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(Ap,Rp)}const Cp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rp(i,e){let t=Ke[e];if(t===void 0){const n=Cp.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Pa(t)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Co(i){return i.replace(Pp,Lp)}function Lp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ro(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Dp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===el?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case vi:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ip(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Op(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case Fc:e="ENVMAP_BLENDING_MIX";break;case Bc:e="ENVMAP_BLENDING_ADD";break}return e}function Np(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fp(i,e,t,n){const r=i.getContext(),s=t.defines;let l=t.vertexShader,a=t.fragmentShader;const o=Dp(t),f=Up(t),c=Ip(t),u=Op(t),d=Np(t),p=t.isWebGL2?"":Sp(t),_=Ep(t),g=wp(s),h=r.createProgram();let m,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fi).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fi).join(`
`),x.length>0&&(x+=`
`)):(m=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fi).join(`
`),x=[p,Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==pn?Mp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,bp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fi).join(`
`)),l=Pa(l),l=To(l,t),l=Ao(l,t),a=Pa(a),a=To(a,t),a=Ao(a,t),l=Co(l),a=Co(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ws?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ws?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=y+m+l,w=y+x+a,M=Eo(r,r.VERTEX_SHADER,T),S=Eo(r,r.FRAGMENT_SHADER,w);r.attachShader(h,M),r.attachShader(h,S),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h);function I(F){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(h).trim(),N=r.getShaderInfoLog(M).trim(),G=r.getShaderInfoLog(S).trim();let z=!0,ee=!0;if(r.getProgramParameter(h,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,h,M,S);else{const V=wo(r,M,"vertex"),re=wo(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+j+`
`+V+`
`+re)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(N===""||G==="")&&(ee=!1);ee&&(F.diagnostics={runnable:z,programLog:j,vertexShader:{log:N,prefix:m},fragmentShader:{log:G,prefix:x}})}r.deleteShader(M),r.deleteShader(S),U=new gr(r,h),b=Tp(r,h)}let U;this.getUniforms=function(){return U===void 0&&I(this),U};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(h,gp)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vp++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=S,this}let Bp=0;class kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zp(e),t.set(e,n)),n}}class zp{constructor(e){this.id=Bp++,this.code=e,this.usedTimes=0}}function Gp(i,e,t,n,r,s,l){const a=new Sl,o=new kp,f=new Set,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(b){return f.add(b),b===0?"uv":`uv${b}`}function m(b,L,F,j,N){const G=j.fog,z=N.geometry,ee=b.isMeshStandardMaterial?j.environment:null,V=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),re=V&&V.mapping===Ar?V.image.height:null,oe=g[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Y=ue!==void 0?ue.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let W,ce,xe,we;if(oe){const $=Jt[oe];W=$.vertexShader,ce=$.fragmentShader}else W=b.vertexShader,ce=b.fragmentShader,o.update(b),xe=o.getVertexShaderID(b),we=o.getFragmentShaderID(b);const ve=i.getRenderTarget(),Se=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Ae=!!b.map,X=!!b.matcap,He=!!V,Pe=!!b.aoMap,Oe=!!b.lightMap,Le=!!b.bumpMap,Be=!!b.normalMap,Ne=!!b.displacementMap,O=!!b.emissiveMap,P=!!b.metalnessMap,J=!!b.roughnessMap,fe=b.anisotropy>0,se=b.clearcoat>0,_e=b.iridescence>0,De=b.sheen>0,ye=b.transmission>0,Ee=fe&&!!b.anisotropyMap,Fe=se&&!!b.clearcoatMap,Ge=se&&!!b.clearcoatNormalMap,de=se&&!!b.clearcoatRoughnessMap,Xe=_e&&!!b.iridescenceMap,Ve=_e&&!!b.iridescenceThicknessMap,Ie=De&&!!b.sheenColorMap,Ue=De&&!!b.sheenRoughnessMap,me=!!b.specularMap,A=!!b.specularColorMap,te=!!b.specularIntensityMap,le=ye&&!!b.transmissionMap,ge=ye&&!!b.thicknessMap,k=!!b.gradientMap,C=!!b.alphaMap,E=b.alphaTest>0,H=!!b.alphaHash,pe=!!b.extensions;let v=pn;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(v=i.toneMapping);const K={isWebGL2:u,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:ce,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:ze,instancing:Se,instancingColor:Se&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:_n,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:X,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:re,aoMap:Pe,lightMap:Oe,bumpMap:Le,normalMap:Be,displacementMap:p&&Ne,emissiveMap:O,normalMapObjectSpace:Be&&b.normalMapType===qc,normalMapTangentSpace:Be&&b.normalMapType===gl,metalnessMap:P,roughnessMap:J,anisotropy:fe,anisotropyMap:Ee,clearcoat:se,clearcoatMap:Fe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:de,iridescence:_e,iridescenceMap:Xe,iridescenceThicknessMap:Ve,sheen:De,sheenColorMap:Ie,sheenRoughnessMap:Ue,specularMap:me,specularColorMap:A,specularIntensityMap:te,transmission:ye,transmissionMap:le,thicknessMap:ge,gradientMap:k,opaque:b.transparent===!1&&b.blending===hi&&b.alphaToCoverage===!1,alphaMap:C,alphaTest:E,alphaHash:H,combine:b.combine,mapUv:Ae&&h(b.map.channel),aoMapUv:Pe&&h(b.aoMap.channel),lightMapUv:Oe&&h(b.lightMap.channel),bumpMapUv:Le&&h(b.bumpMap.channel),normalMapUv:Be&&h(b.normalMap.channel),displacementMapUv:Ne&&h(b.displacementMap.channel),emissiveMapUv:O&&h(b.emissiveMap.channel),metalnessMapUv:P&&h(b.metalnessMap.channel),roughnessMapUv:J&&h(b.roughnessMap.channel),anisotropyMapUv:Ee&&h(b.anisotropyMap.channel),clearcoatMapUv:Fe&&h(b.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&h(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&h(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&h(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&h(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&h(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&h(b.sheenRoughnessMap.channel),specularMapUv:me&&h(b.specularMap.channel),specularColorMapUv:A&&h(b.specularColorMap.channel),specularIntensityMapUv:te&&h(b.specularIntensityMap.channel),transmissionMapUv:le&&h(b.transmissionMap.channel),thicknessMapUv:ge&&h(b.thicknessMap.channel),alphaMapUv:C&&h(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Be||fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ae||C),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:he,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:v,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fn,flipSided:b.side===Ot,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:pe&&b.extensions.derivatives===!0,extensionFragDepth:pe&&b.extensions.fragDepth===!0,extensionDrawBuffers:pe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return K.vertexUv1s=f.has(1),K.vertexUv2s=f.has(2),K.vertexUv3s=f.has(3),f.clear(),K}function x(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)L.push(F),L.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(y(L,b),T(L,b),L.push(i.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function T(b,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),b.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.alphaToCoverage&&a.enable(20),b.push(a.mask)}function w(b){const L=g[b.type];let F;if(L){const j=Jt[L];F=Pr.clone(j.uniforms)}else F=b.uniforms;return F}function M(b,L){let F;for(let j=0,N=c.length;j<N;j++){const G=c[j];if(G.cacheKey===L){F=G,++F.usedTimes;break}}return F===void 0&&(F=new Fp(i,L,b,s),c.push(F)),F}function S(b){if(--b.usedTimes===0){const L=c.indexOf(b);c[L]=c[c.length-1],c.pop(),b.destroy()}}function I(b){o.remove(b)}function U(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:M,releaseProgram:S,releaseShaderCache:I,programs:c,dispose:U}}function Hp(){let i=new WeakMap;function e(s){let l=i.get(s);return l===void 0&&(l={},i.set(s,l)),l}function t(s){i.delete(s)}function n(s,l,a){i.get(s)[l]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Vp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Po(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Lo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function l(u,d,p,_,g,h){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:h},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=g,m.group=h),e++,m}function a(u,d,p,_,g,h){const m=l(u,d,p,_,g,h);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):t.push(m)}function o(u,d,p,_,g,h){const m=l(u,d,p,_,g,h);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function f(u,d){t.length>1&&t.sort(u||Vp),n.length>1&&n.sort(d||Po),r.length>1&&r.sort(d||Po)}function c(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:o,finish:c,sort:f}}function Wp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let l;return s===void 0?(l=new Lo,i.set(n,[l])):r>=s.length?(l=new Lo,s.push(l)):l=s[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new rt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return i[e.id]=t,t}}}function jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yp=0;function Zp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qp(i,e){const t=new Xp,n=jp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ae);const s=new ae,l=new mt,a=new mt;function o(c,u){let d=0,p=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,h=0,m=0,x=0,y=0,T=0,w=0,M=0,S=0,I=0,U=0;c.sort(Zp);const b=u===!0?Math.PI:1;for(let F=0,j=c.length;F<j;F++){const N=c[F],G=N.color,z=N.intensity,ee=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=G.r*z*b,p+=G.g*z*b,_+=G.b*z*b;else if(N.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(N.sh.coefficients[re],z);U++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*b),N.castShadow){const oe=N.shadow,ue=n.get(N);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.directionalShadow[g]=ue,r.directionalShadowMap[g]=V,r.directionalShadowMatrix[g]=N.shadow.matrix,T++}r.directional[g]=re,g++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(G).multiplyScalar(z*b),re.distance=ee,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,r.spot[m]=re;const oe=N.shadow;if(N.map&&(r.spotLightMap[S]=N.map,S++,oe.updateMatrices(N),N.castShadow&&I++),r.spotLightMatrix[m]=oe.matrix,N.castShadow){const ue=n.get(N);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.spotShadow[m]=ue,r.spotShadowMap[m]=V,M++}m++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(G).multiplyScalar(z),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=re,x++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*b),re.distance=N.distance,re.decay=N.decay,N.castShadow){const oe=N.shadow,ue=n.get(N);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,r.pointShadow[h]=ue,r.pointShadowMap[h]=V,r.pointShadowMatrix[h]=N.shadow.matrix,w++}r.point[h]=re,h++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(z*b),re.groundColor.copy(N.groundColor).multiplyScalar(z*b),r.hemi[y]=re,y++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==g||L.pointLength!==h||L.spotLength!==m||L.rectAreaLength!==x||L.hemiLength!==y||L.numDirectionalShadows!==T||L.numPointShadows!==w||L.numSpotShadows!==M||L.numSpotMaps!==S||L.numLightProbes!==U)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=x,r.point.length=h,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=M+S-I,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=U,L.directionalLength=g,L.pointLength=h,L.spotLength=m,L.rectAreaLength=x,L.hemiLength=y,L.numDirectionalShadows=T,L.numPointShadows=w,L.numSpotShadows=M,L.numSpotMaps=S,L.numLightProbes=U,r.version=Yp++)}function f(c,u){let d=0,p=0,_=0,g=0,h=0;const m=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const T=c[x];if(T.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(T.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),a.identity(),l.copy(T.matrixWorld),l.premultiply(m),a.extractRotation(l),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),h++}}}return{setup:o,setupView:f,state:r}}function Do(i,e){const t=new qp(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function l(u){n.push(u)}function a(u){r.push(u)}function o(u){t.setup(n,u)}function f(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:o,setupLightsView:f,pushLight:l,pushShadow:a}}function Kp(i,e){let t=new WeakMap;function n(s,l=0){const a=t.get(s);let o;return a===void 0?(o=new Do(i,e),t.set(s,[o])):l>=a.length?(o=new Do(i,e),a.push(o)):o=a[l],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class Bl extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $p extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qp=`uniform sampler2D shadow_pass;
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
}`;function em(i,e,t){let n=new za;const r=new nt,s=new nt,l=new bt,a=new Bl({depthPacking:_l}),o=new $p,f={},c=t.maxTextureSize,u={[Cn]:Ot,[Ot]:Cn,[fn]:fn},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Jp,fragmentShader:Qp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new vn;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kt(_,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qo;let m=this.type;this.render=function(M,S,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const U=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(tn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=m!==cn&&this.type===cn,N=m===cn&&this.type!==cn;for(let G=0,z=M.length;G<z;G++){const ee=M[G],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const re=V.getFrameExtents();if(r.multiply(re),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/re.x),r.x=s.x*re.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/re.y),r.y=s.y*re.y,V.mapSize.y=s.y)),V.map===null||j===!0||N===!0){const ue=this.type!==cn?{minFilter:St,magFilter:St}:{};V.map!==null&&V.map.dispose(),V.map=new gn(r.x,r.y,ue),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const oe=V.getViewportCount();for(let ue=0;ue<oe;ue++){const Y=V.getViewport(ue);l.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),F.viewport(l),V.updateMatrices(ee,ue),n=V.getFrustum(),T(S,I,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===cn&&x(V,I),V.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(U,b,L)};function x(M,S){const I=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gn(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,I,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,I,p,g,null)}function y(M,S,I,U){let b=null;const L=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)b=L;else if(b=I.isPointLight===!0?o:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const F=b.uuid,j=S.uuid;let N=f[F];N===void 0&&(N={},f[F]=N);let G=N[j];G===void 0&&(G=b.clone(),N[j]=G,S.addEventListener("dispose",w)),b=G}if(b.visible=S.visible,b.wireframe=S.wireframe,U===cn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const F=i.properties.get(b);F.light=I}return b}function T(M,S,I,U,b){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===cn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const j=e.update(M),N=M.material;if(Array.isArray(N)){const G=j.groups;for(let z=0,ee=G.length;z<ee;z++){const V=G[z],re=N[V.materialIndex];if(re&&re.visible){const oe=y(M,re,U,b);M.onBeforeShadow(i,M,S,I,j,oe,V),i.renderBufferDirect(I,null,j,oe,M,V),M.onAfterShadow(i,M,S,I,j,oe,V)}}}else if(N.visible){const G=y(M,N,U,b);M.onBeforeShadow(i,M,S,I,j,G,null),i.renderBufferDirect(I,null,j,G,M,null),M.onAfterShadow(i,M,S,I,j,G,null)}}const F=M.children;for(let j=0,N=F.length;j<N;j++)T(F[j],S,I,U,b)}function w(M){M.target.removeEventListener("dispose",w);for(const I in f){const U=f[I],b=M.target.uuid;b in U&&(U[b].dispose(),delete U[b])}}}function tm(i,e,t){const n=t.isWebGL2;function r(){let C=!1;const E=new bt;let H=null;const pe=new bt(0,0,0,0);return{setMask:function(v){H!==v&&!C&&(i.colorMask(v,v,v,v),H=v)},setLocked:function(v){C=v},setClear:function(v,K,$,R,B){B===!0&&(v*=R,K*=R,$*=R),E.set(v,K,$,R),pe.equals(E)===!1&&(i.clearColor(v,K,$,R),pe.copy(E))},reset:function(){C=!1,H=null,pe.set(-1,0,0,0)}}}function s(){let C=!1,E=null,H=null,pe=null;return{setTest:function(v){v?Se(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(v){E!==v&&!C&&(i.depthMask(v),E=v)},setFunc:function(v){if(H!==v){switch(v){case Pc:i.depthFunc(i.NEVER);break;case Lc:i.depthFunc(i.ALWAYS);break;case Dc:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Uc:i.depthFunc(i.EQUAL);break;case Ic:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=v}},setLocked:function(v){C=v},setClear:function(v){pe!==v&&(i.clearDepth(v),pe=v)},reset:function(){C=!1,E=null,H=null,pe=null}}}function l(){let C=!1,E=null,H=null,pe=null,v=null,K=null,$=null,R=null,B=null;return{setTest:function(Z){C||(Z?Se(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Z){E!==Z&&!C&&(i.stencilMask(Z),E=Z)},setFunc:function(Z,Te,be){(H!==Z||pe!==Te||v!==be)&&(i.stencilFunc(Z,Te,be),H=Z,pe=Te,v=be)},setOp:function(Z,Te,be){(K!==Z||$!==Te||R!==be)&&(i.stencilOp(Z,Te,be),K=Z,$=Te,R=be)},setLocked:function(Z){C=Z},setClear:function(Z){B!==Z&&(i.clearStencil(Z),B=Z)},reset:function(){C=!1,E=null,H=null,pe=null,v=null,K=null,$=null,R=null,B=null}}}const a=new r,o=new s,f=new l,c=new WeakMap,u=new WeakMap;let d={},p={},_=new WeakMap,g=[],h=null,m=!1,x=null,y=null,T=null,w=null,M=null,S=null,I=null,U=new rt(0,0,0),b=0,L=!1,F=null,j=null,N=null,G=null,z=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,re=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(oe)[1]),V=re>=1):oe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),V=re>=2);let ue=null,Y={};const he=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ce=new bt().fromArray(he),xe=new bt().fromArray(W);function we(C,E,H,pe){const v=new Uint8Array(4),K=i.createTexture();i.bindTexture(C,K),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<H;$++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(E,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,v):i.texImage2D(E+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,v);return K}const ve={};ve[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),o.setClear(1),f.setClear(0),Se(i.DEPTH_TEST),o.setFunc(yr),Ne(!1),O(us),Se(i.CULL_FACE),Le(tn);function Se(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function ze(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function Ae(C,E){return p[C]!==E?(i.bindFramebuffer(C,E),p[C]=E,n&&(C===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=E),C===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=E)),!0):!1}function X(C,E){let H=g,pe=!1;if(C)if(H=_.get(E),H===void 0&&(H=[],_.set(E,H)),C.isWebGLMultipleRenderTargets){const v=C.texture;if(H.length!==v.length||H[0]!==i.COLOR_ATTACHMENT0){for(let K=0,$=v.length;K<$;K++)H[K]=i.COLOR_ATTACHMENT0+K;H.length=v.length,pe=!0}}else H[0]!==i.COLOR_ATTACHMENT0&&(H[0]=i.COLOR_ATTACHMENT0,pe=!0);else H[0]!==i.BACK&&(H[0]=i.BACK,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function He(C){return h!==C?(i.useProgram(C),h=C,!0):!1}const Pe={[Bn]:i.FUNC_ADD,[pc]:i.FUNC_SUBTRACT,[mc]:i.FUNC_REVERSE_SUBTRACT};if(n)Pe[ps]=i.MIN,Pe[ms]=i.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(Pe[ps]=C.MIN_EXT,Pe[ms]=C.MAX_EXT)}const Oe={[_c]:i.ZERO,[vc]:i.ONE,[xc]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[wc]:i.SRC_ALPHA_SATURATE,[Sc]:i.DST_COLOR,[bc]:i.DST_ALPHA,[yc]:i.ONE_MINUS_SRC_COLOR,[Ma]:i.ONE_MINUS_SRC_ALPHA,[Ec]:i.ONE_MINUS_DST_COLOR,[Mc]:i.ONE_MINUS_DST_ALPHA,[Tc]:i.CONSTANT_COLOR,[Ac]:i.ONE_MINUS_CONSTANT_COLOR,[Cc]:i.CONSTANT_ALPHA,[Rc]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(C,E,H,pe,v,K,$,R,B,Z){if(C===tn){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),C!==dc){if(C!==x||Z!==L){if((y!==Bn||M!==Bn)&&(i.blendEquation(i.FUNC_ADD),y=Bn,M=Bn),Z)switch(C){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ds:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ds:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,w=null,S=null,I=null,U.set(0,0,0),b=0,x=C,L=Z}return}v=v||E,K=K||H,$=$||pe,(E!==y||v!==M)&&(i.blendEquationSeparate(Pe[E],Pe[v]),y=E,M=v),(H!==T||pe!==w||K!==S||$!==I)&&(i.blendFuncSeparate(Oe[H],Oe[pe],Oe[K],Oe[$]),T=H,w=pe,S=K,I=$),(R.equals(U)===!1||B!==b)&&(i.blendColor(R.r,R.g,R.b,B),U.copy(R),b=B),x=C,L=!1}function Be(C,E){C.side===fn?ze(i.CULL_FACE):Se(i.CULL_FACE);let H=C.side===Ot;E&&(H=!H),Ne(H),C.blending===hi&&C.transparent===!1?Le(tn):Le(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),a.setMask(C.colorWrite);const pe=C.stencilWrite;f.setTest(pe),pe&&(f.setMask(C.stencilWriteMask),f.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),f.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),J(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function O(C){C!==fc?(Se(i.CULL_FACE),C!==j&&(C===us?i.cullFace(i.BACK):C===hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),j=C}function P(C){C!==N&&(V&&i.lineWidth(C),N=C)}function J(C,E,H){C?(Se(i.POLYGON_OFFSET_FILL),(G!==E||z!==H)&&(i.polygonOffset(E,H),G=E,z=H)):ze(i.POLYGON_OFFSET_FILL)}function fe(C){C?Se(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function se(C){C===void 0&&(C=i.TEXTURE0+ee-1),ue!==C&&(i.activeTexture(C),ue=C)}function _e(C,E,H){H===void 0&&(ue===null?H=i.TEXTURE0+ee-1:H=ue);let pe=Y[H];pe===void 0&&(pe={type:void 0,texture:void 0},Y[H]=pe),(pe.type!==C||pe.texture!==E)&&(ue!==H&&(i.activeTexture(H),ue=H),i.bindTexture(C,E||ve[C]),pe.type=C,pe.texture=E)}function De(){const C=Y[ue];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function A(C){ce.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function te(C){xe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function le(C,E){let H=u.get(E);H===void 0&&(H=new WeakMap,u.set(E,H));let pe=H.get(C);pe===void 0&&(pe=i.getUniformBlockIndex(E,C.name),H.set(C,pe))}function ge(C,E){const pe=u.get(E).get(C);c.get(E)!==pe&&(i.uniformBlockBinding(E,pe,C.__bindingPointIndex),c.set(E,pe))}function k(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,Y={},p={},_=new WeakMap,g=[],h=null,m=!1,x=null,y=null,T=null,w=null,M=null,S=null,I=null,U=new rt(0,0,0),b=0,L=!1,F=null,j=null,N=null,G=null,z=null,ce.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),f.reset()}return{buffers:{color:a,depth:o,stencil:f},enable:Se,disable:ze,bindFramebuffer:Ae,drawBuffers:X,useProgram:He,setBlending:Le,setMaterial:Be,setFlipSided:Ne,setCullFace:O,setLineWidth:P,setPolygonOffset:J,setScissorTest:fe,activeTexture:se,bindTexture:_e,unbindTexture:De,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:Ue,texImage3D:me,updateUBOMapping:le,uniformBlockBinding:ge,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Fe,texSubImage3D:Ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Xe,scissor:A,viewport:te,reset:k}}function nm(i,e,t,n,r,s,l){const a=r.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,P){return p?new OffscreenCanvas(O,P):Bi("canvas")}function g(O,P,J,fe){let se=1;if((O.width>fe||O.height>fe)&&(se=fe/Math.max(O.width,O.height)),se<1||P===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _e=P?Ra:Math.floor,De=_e(se*O.width),ye=_e(se*O.height);u===void 0&&(u=_(De,ye));const Ee=J?_(De,ye):u;return Ee.width=De,Ee.height=ye,Ee.getContext("2d").drawImage(O,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+De+"x"+ye+")."),Ee}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function h(O){return Xs(O.width)&&Xs(O.height)}function m(O){return a?!1:O.wrapS!==qt||O.wrapT!==qt||O.minFilter!==St&&O.minFilter!==Ct}function x(O,P){return O.generateMipmaps&&P&&O.minFilter!==St&&O.minFilter!==Ct}function y(O){i.generateMipmap(O)}function T(O,P,J,fe,se=!1){if(a===!1)return P;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e=P;if(P===i.RED&&(J===i.FLOAT&&(_e=i.R32F),J===i.HALF_FLOAT&&(_e=i.R16F),J===i.UNSIGNED_BYTE&&(_e=i.R8)),P===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(_e=i.R8UI),J===i.UNSIGNED_SHORT&&(_e=i.R16UI),J===i.UNSIGNED_INT&&(_e=i.R32UI),J===i.BYTE&&(_e=i.R8I),J===i.SHORT&&(_e=i.R16I),J===i.INT&&(_e=i.R32I)),P===i.RG&&(J===i.FLOAT&&(_e=i.RG32F),J===i.HALF_FLOAT&&(_e=i.RG16F),J===i.UNSIGNED_BYTE&&(_e=i.RG8)),P===i.RGBA){const De=se?br:at.getTransfer(fe);J===i.FLOAT&&(_e=i.RGBA32F),J===i.HALF_FLOAT&&(_e=i.RGBA16F),J===i.UNSIGNED_BYTE&&(_e=De===st?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function w(O,P,J){return x(O,J)===!0||O.isFramebufferTexture&&O.minFilter!==St&&O.minFilter!==Ct?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function M(O){return O===St||O===_s||O===Ai?i.NEAREST:i.LINEAR}function S(O){const P=O.target;P.removeEventListener("dispose",S),U(P),P.isVideoTexture&&c.delete(P)}function I(O){const P=O.target;P.removeEventListener("dispose",I),L(P)}function U(O){const P=n.get(O);if(P.__webglInit===void 0)return;const J=O.source,fe=d.get(J);if(fe){const se=fe[P.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(O),Object.keys(fe).length===0&&d.delete(J)}n.remove(O)}function b(O){const P=n.get(O);i.deleteTexture(P.__webglTexture);const J=O.source,fe=d.get(J);delete fe[P.__cacheKey],l.memory.textures--}function L(O){const P=O.texture,J=n.get(O),fe=n.get(P);if(fe.__webglTexture!==void 0&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(J.__webglFramebuffer[se]))for(let _e=0;_e<J.__webglFramebuffer[se].length;_e++)i.deleteFramebuffer(J.__webglFramebuffer[se][_e]);else i.deleteFramebuffer(J.__webglFramebuffer[se]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[se])}else{if(Array.isArray(J.__webglFramebuffer))for(let se=0;se<J.__webglFramebuffer.length;se++)i.deleteFramebuffer(J.__webglFramebuffer[se]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let se=0;se<J.__webglColorRenderbuffer.length;se++)J.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[se]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let se=0,_e=P.length;se<_e;se++){const De=n.get(P[se]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),l.memory.textures--),n.remove(P[se])}n.remove(P),n.remove(O)}let F=0;function j(){F=0}function N(){const O=F;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),F+=1,O}function G(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function z(O,P){const J=n.get(O);if(O.isVideoTexture&&Be(O),O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){const fe=O.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(J,O,P);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+P)}function ee(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){ce(J,O,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+P)}function V(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){ce(J,O,P);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+P)}function re(O,P){const J=n.get(O);if(O.version>0&&J.__version!==O.version){xe(J,O,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+P)}const oe={[wa]:i.REPEAT,[qt]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},ue={[St]:i.NEAREST,[_s]:i.NEAREST_MIPMAP_NEAREST,[Ai]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},Y={[Kc]:i.NEVER,[nu]:i.ALWAYS,[$c]:i.LESS,[vl]:i.LEQUAL,[Jc]:i.EQUAL,[tu]:i.GEQUAL,[Qc]:i.GREATER,[eu]:i.NOTEQUAL};function he(O,P,J){if(P.type===hn&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Ct||P.magFilter===kr||P.magFilter===Ai||P.magFilter===zn||P.minFilter===Ct||P.minFilter===kr||P.minFilter===Ai||P.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),J?(i.texParameteri(O,i.TEXTURE_WRAP_S,oe[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,oe[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,oe[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ue[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ue[P.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==qt||P.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,M(P.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,M(P.minFilter)),P.minFilter!==St&&P.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Y[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===St||P.minFilter!==Ai&&P.minFilter!==zn||P.type===hn&&e.has("OES_texture_float_linear")===!1||a===!1&&P.type===Wn&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(O,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function W(O,P){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",S));const fe=P.source;let se=d.get(fe);se===void 0&&(se={},d.set(fe,se));const _e=G(P);if(_e!==O.__cacheKey){se[_e]===void 0&&(se[_e]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),se[_e].usedTimes++;const De=se[O.__cacheKey];De!==void 0&&(se[O.__cacheKey].usedTimes--,De.usedTimes===0&&b(P)),O.__cacheKey=_e,O.__webglTexture=se[_e].texture}return J}function ce(O,P,J){let fe=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(fe=i.TEXTURE_3D);const se=W(O,P),_e=P.source;t.bindTexture(fe,O.__webglTexture,i.TEXTURE0+J);const De=n.get(_e);if(_e.version!==De.__version||se===!0){t.activeTexture(i.TEXTURE0+J);const ye=at.getPrimaries(at.workingColorSpace),Ee=P.colorSpace===Vt?null:at.getPrimaries(P.colorSpace),Fe=P.colorSpace===Vt||ye===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ge=m(P)&&h(P.image)===!1;let de=g(P.image,Ge,!1,r.maxTextureSize);de=Ne(P,de);const Xe=h(de)||a,Ve=s.convert(P.format,P.colorSpace);let Ie=s.convert(P.type),Ue=T(P.internalFormat,Ve,Ie,P.colorSpace,P.isVideoTexture);he(fe,P,Xe);let me;const A=P.mipmaps,te=a&&P.isVideoTexture!==!0&&Ue!==pl,le=De.__version===void 0||se===!0,ge=_e.dataReady,k=w(P,de,Xe);if(P.isDepthTexture)Ue=i.DEPTH_COMPONENT,a?P.type===hn?Ue=i.DEPTH_COMPONENT32F:P.type===Tn?Ue=i.DEPTH_COMPONENT24:P.type===Gn?Ue=i.DEPTH24_STENCIL8:Ue=i.DEPTH_COMPONENT16:P.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Hn&&Ue===i.DEPTH_COMPONENT&&P.type!==Fa&&P.type!==Tn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=Tn,Ie=s.convert(P.type)),P.format===xi&&Ue===i.DEPTH_COMPONENT&&(Ue=i.DEPTH_STENCIL,P.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Gn,Ie=s.convert(P.type))),le&&(te?t.texStorage2D(i.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,null));else if(P.isDataTexture)if(A.length>0&&Xe){te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],te?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,Ve,Ie,me.data);P.generateMipmaps=!1}else te?(le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ve,Ie,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,de.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){te&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ue,A[0].width,A[0].height,de.depth);for(let C=0,E=A.length;C<E;C++)me=A[C],P.format!==Kt?Ve!==null?te?ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,me.width,me.height,de.depth,Ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,C,Ue,me.width,me.height,de.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,C,0,0,0,me.width,me.height,de.depth,Ve,Ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,C,Ue,me.width,me.height,de.depth,0,Ve,Ie,me.data)}else{te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],P.format!==Kt?Ve!==null?te?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,C,Ue,me.width,me.height,0,Ve,Ie,me.data)}else if(P.isDataArrayTexture)te?(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(P.isData3DTexture)te?(le&&t.texStorage3D(i.TEXTURE_3D,k,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(P.isFramebufferTexture){if(le)if(te)t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height);else{let C=de.width,E=de.height;for(let H=0;H<k;H++)t.texImage2D(i.TEXTURE_2D,H,Ue,C,E,0,Ve,Ie,null),C>>=1,E>>=1}}else if(A.length>0&&Xe){te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let C=0,E=A.length;C<E;C++)me=A[C],te?ge&&t.texSubImage2D(i.TEXTURE_2D,C,0,0,Ve,Ie,me):t.texImage2D(i.TEXTURE_2D,C,Ue,Ve,Ie,me);P.generateMipmaps=!1}else te?(le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Ie,de)):t.texImage2D(i.TEXTURE_2D,0,Ue,Ve,Ie,de);x(P,Xe)&&y(fe),De.__version=_e.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function xe(O,P,J){if(P.image.length!==6)return;const fe=W(O,P),se=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+J);const _e=n.get(se);if(se.version!==_e.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);const De=at.getPrimaries(at.workingColorSpace),ye=P.colorSpace===Vt?null:at.getPrimaries(P.colorSpace),Ee=P.colorSpace===Vt||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=P.isCompressedTexture||P.image[0].isCompressedTexture,Ge=P.image[0]&&P.image[0].isDataTexture,de=[];for(let C=0;C<6;C++)!Fe&&!Ge?de[C]=g(P.image[C],!1,!0,r.maxCubemapSize):de[C]=Ge?P.image[C].image:P.image[C],de[C]=Ne(P,de[C]);const Xe=de[0],Ve=h(Xe)||a,Ie=s.convert(P.format,P.colorSpace),Ue=s.convert(P.type),me=T(P.internalFormat,Ie,Ue,P.colorSpace),A=a&&P.isVideoTexture!==!0,te=_e.__version===void 0||fe===!0,le=se.dataReady;let ge=w(P,Xe,Ve);he(i.TEXTURE_CUBE_MAP,P,Ve);let k;if(Fe){A&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,Xe.width,Xe.height);for(let C=0;C<6;C++){k=de[C].mipmaps;for(let E=0;E<k.length;E++){const H=k[E];P.format!==Kt?Ie!==null?A?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,0,0,H.width,H.height,Ie,H.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,me,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,0,0,H.width,H.height,Ie,Ue,H.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E,me,H.width,H.height,0,Ie,Ue,H.data)}}}else{k=P.mipmaps,A&&te&&(k.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,de[0].width,de[0].height));for(let C=0;C<6;C++)if(Ge){A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,de[C].width,de[C].height,Ie,Ue,de[C].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,me,de[C].width,de[C].height,0,Ie,Ue,de[C].data);for(let E=0;E<k.length;E++){const pe=k[E].image[C].image;A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,0,0,pe.width,pe.height,Ie,Ue,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,me,pe.width,pe.height,0,Ie,Ue,pe.data)}}else{A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Ie,Ue,de[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,me,Ie,Ue,de[C]);for(let E=0;E<k.length;E++){const H=k[E];A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,0,0,Ie,Ue,H.image[C]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,E+1,me,Ie,Ue,H.image[C])}}}x(P,Ve)&&y(i.TEXTURE_CUBE_MAP),_e.__version=se.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function we(O,P,J,fe,se,_e){const De=s.convert(J.format,J.colorSpace),ye=s.convert(J.type),Ee=T(J.internalFormat,De,ye,J.colorSpace);if(!n.get(P).__hasExternalTextures){const Ge=Math.max(1,P.width>>_e),de=Math.max(1,P.height>>_e);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,_e,Ee,Ge,de,P.depth,0,De,ye,null):t.texImage2D(se,_e,Ee,Ge,de,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Le(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,se,n.get(J).__webglTexture,0,Oe(P)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,se,n.get(J).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(O,P,J){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let fe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Le(P)){const se=P.depthTexture;se&&se.isDepthTexture&&(se.type===hn?fe=i.DEPTH_COMPONENT32F:se.type===Tn&&(fe=i.DEPTH_COMPONENT24));const _e=Oe(P);Le(P)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,fe,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,fe,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const fe=Oe(P);J&&Le(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,P.width,P.height):Le(P)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const fe=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0;se<fe.length;se++){const _e=fe[se],De=s.convert(_e.format,_e.colorSpace),ye=s.convert(_e.type),Ee=T(_e.internalFormat,De,ye,_e.colorSpace),Fe=Oe(P);J&&Le(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ee,P.width,P.height):Le(P)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ee,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),z(P.depthTexture,0);const fe=n.get(P.depthTexture).__webglTexture,se=Oe(P);if(P.depthTexture.format===Hn)Le(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(P.depthTexture.format===xi)Le(P)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ze(O){const P=n.get(O),J=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Se(P.__webglFramebuffer,O)}else if(J){P.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[fe]),P.__webglDepthbuffer[fe]=i.createRenderbuffer(),ve(P.__webglDepthbuffer[fe],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),ve(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(O,P,J){const fe=n.get(O);P!==void 0&&we(fe.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ze(O)}function X(O){const P=O.texture,J=n.get(O),fe=n.get(P);O.addEventListener("dispose",I),O.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=P.version,l.memory.textures++);const se=O.isWebGLCubeRenderTarget===!0,_e=O.isWebGLMultipleRenderTargets===!0,De=h(O)||a;if(se){J.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<P.mipmaps.length;Ee++)J.__webglFramebuffer[ye][Ee]=i.createFramebuffer()}else J.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(a&&P.mipmaps&&P.mipmaps.length>0){J.__webglFramebuffer=[];for(let ye=0;ye<P.mipmaps.length;ye++)J.__webglFramebuffer[ye]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const ye=O.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=n.get(ye[Ee]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&O.samples>0&&Le(O)===!1){const ye=_e?P:[P];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){const Fe=ye[Ee];J.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee]);const Ge=s.convert(Fe.format,Fe.colorSpace),de=s.convert(Fe.type),Xe=T(Fe.internalFormat,Ge,de,Fe.colorSpace,O.isXRRenderTarget===!0),Ve=Oe(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Xe,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),he(i.TEXTURE_CUBE_MAP,P,De);for(let ye=0;ye<6;ye++)if(a&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)we(J.__webglFramebuffer[ye][Ee],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else we(J.__webglFramebuffer[ye],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(P,De)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const ye=O.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=ye[Ee],de=n.get(Ge);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),he(i.TEXTURE_2D,Ge,De),we(J.__webglFramebuffer,O,Ge,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),x(Ge,De)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(a?ye=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,fe.__webglTexture),he(ye,P,De),a&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)we(J.__webglFramebuffer[Ee],O,P,i.COLOR_ATTACHMENT0,ye,Ee);else we(J.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,ye,0);x(P,De)&&y(ye),t.unbindTexture()}O.depthBuffer&&ze(O)}function He(O){const P=h(O)||a,J=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let fe=0,se=J.length;fe<se;fe++){const _e=J[fe];if(x(_e,P)){const De=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(_e).__webglTexture;t.bindTexture(De,ye),y(De),t.unbindTexture()}}}function Pe(O){if(a&&O.samples>0&&Le(O)===!1){const P=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],J=O.width,fe=O.height;let se=i.COLOR_BUFFER_BIT;const _e=[],De=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(O),Ee=O.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Fe=0;Fe<P.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<P.length;Fe++){_e.push(i.COLOR_ATTACHMENT0+Fe),O.depthBuffer&&_e.push(De);const Ge=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ge===!1&&(O.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[De]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[De])),Ee){const de=n.get(P[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,J,fe,0,0,J,fe,se,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Fe=0;Fe<P.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const Ge=n.get(P[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Oe(O){return Math.min(r.maxSamples,O.samples)}function Le(O){const P=n.get(O);return a&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Be(O){const P=l.render.frame;c.get(O)!==P&&(c.set(O,P),O.update())}function Ne(O,P){const J=O.colorSpace,fe=O.format,se=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Aa||J!==_n&&J!==Vt&&(at.getTransfer(J)===st?a===!1?e.has("EXT_sRGB")===!0&&fe===Kt?(O.format=Aa,O.minFilter=Ct,O.generateMipmaps=!1):P=yl.sRGBToLinear(P):(fe!==Kt||se!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),P}this.allocateTextureUnit=N,this.resetTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=ee,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=Ae,this.setupRenderTarget=X,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Le}function im(i,e,t){const n=t.isWebGL2;function r(s,l=Vt){let a;const o=at.getTransfer(l);if(s===An)return i.UNSIGNED_BYTE;if(s===cl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===ul)return i.UNSIGNED_SHORT_5_5_5_1;if(s===zc)return i.BYTE;if(s===Gc)return i.SHORT;if(s===Fa)return i.UNSIGNED_SHORT;if(s===ll)return i.INT;if(s===Tn)return i.UNSIGNED_INT;if(s===hn)return i.FLOAT;if(s===Wn)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Hc)return i.ALPHA;if(s===Kt)return i.RGBA;if(s===Vc)return i.LUMINANCE;if(s===Wc)return i.LUMINANCE_ALPHA;if(s===Hn)return i.DEPTH_COMPONENT;if(s===xi)return i.DEPTH_STENCIL;if(s===Aa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Xc)return i.RED;if(s===fl)return i.RED_INTEGER;if(s===jc)return i.RG;if(s===hl)return i.RG_INTEGER;if(s===dl)return i.RGBA_INTEGER;if(s===zr||s===Gr||s===Hr||s===Vr)if(o===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gs||s===vs||s===xs||s===ys)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===gs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ys)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===bs||s===Ms)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===bs)return o===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ms)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ss||s===Es||s===ws||s===Ts||s===As||s===Cs||s===Rs||s===Ps||s===Ls||s===Ds||s===Us||s===Is||s===Os||s===Ns)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Ss)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Es)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ws)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ts)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===As)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cs)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rs)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ps)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ls)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ds)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Us)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Is)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Os)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ns)return o===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Wr||s===Fs||s===Bs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Wr)return o===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bs)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Yc||s===ks||s===zs||s===Gs)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Wr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ks)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gs)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class rm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hr extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,l=null;const a=this._targetRay,o=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const g of e.hand.values()){const h=t.getJointPose(g,n),m=this._getHandJoint(f,g);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const c=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,_=.005;f.inputState.pinching&&d>p+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=p-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=s!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new hr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,om=`
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

}`;class lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Wt({extensions:{fragDepth:!0},vertexShader:sm,fragmentShader:om,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new bi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cm extends Mi{constructor(e,t){super();const n=this;let r=null,s=1,l=null,a="local-floor",o=1,f=null,c=null,u=null,d=null,p=null,_=null;const g=new lm,h=t.getContextAttributes();let m=null,x=null;const y=[],T=[],w=new nt;let M=null;const S=new Ht;S.layers.enable(1),S.viewport=new bt;const I=new Ht;I.layers.enable(2),I.viewport=new bt;const U=[S,I],b=new rm;b.layers.enable(1),b.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ce=y[W];return ce===void 0&&(ce=new ma,y[W]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(W){let ce=y[W];return ce===void 0&&(ce=new ma,y[W]=ce),ce.getGripSpace()},this.getHand=function(W){let ce=y[W];return ce===void 0&&(ce=new ma,y[W]=ce),ce.getHandSpace()};function j(W){const ce=T.indexOf(W.inputSource);if(ce===-1)return;const xe=y[ce];xe!==void 0&&(xe.update(W.inputSource,W.frame,f||l),xe.dispatchEvent({type:W.type,data:W.inputSource}))}function N(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",G);for(let W=0;W<y.length;W++){const ce=T[W];ce!==null&&(T[W]=null,y[W].disconnect(ce))}L=null,F=null,g.reset(),e.setRenderTarget(m),p=null,d=null,u=null,r=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",N),r.addEventListener("inputsourceschange",G),h.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new gn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let ce=null,xe=null,we=null;h.depth&&(we=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=h.stencil?xi:Hn,xe=h.stencil?Gn:Tn);const ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(ve),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new gn(d.textureWidth,d.textureHeight,{format:Kt,type:An,depthTexture:new Dl(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(o),f=null,l=await r.requestReferenceSpace(a),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(W){for(let ce=0;ce<W.removed.length;ce++){const xe=W.removed[ce],we=T.indexOf(xe);we>=0&&(T[we]=null,y[we].disconnect(xe))}for(let ce=0;ce<W.added.length;ce++){const xe=W.added[ce];let we=T.indexOf(xe);if(we===-1){for(let Se=0;Se<y.length;Se++)if(Se>=T.length){T.push(xe),we=Se;break}else if(T[Se]===null){T[Se]=xe,we=Se;break}if(we===-1)break}const ve=y[we];ve&&ve.connect(xe)}}const z=new ae,ee=new ae;function V(W,ce,xe){z.setFromMatrixPosition(ce.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);const we=z.distanceTo(ee),ve=ce.projectionMatrix.elements,Se=xe.projectionMatrix.elements,ze=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),X=(ve[9]+1)/ve[5],He=(ve[9]-1)/ve[5],Pe=(ve[8]-1)/ve[0],Oe=(Se[8]+1)/Se[0],Le=ze*Pe,Be=ze*Oe,Ne=we/(-Pe+Oe),O=Ne*-Pe;ce.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(O),W.translateZ(Ne),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const P=ze+Ne,J=Ae+Ne,fe=Le-O,se=Be+(we-O),_e=X*Ae/J*P,De=He*Ae/J*P;W.projectionMatrix.makePerspective(fe,se,_e,De,P,J),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function re(W,ce){ce===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ce.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;g.texture!==null&&(W.near=g.depthNear,W.far=g.depthFar),b.near=I.near=S.near=W.near,b.far=I.far=S.far=W.far,(L!==b.near||F!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),L=b.near,F=b.far,S.near=L,S.far=F,I.near=L,I.far=F,S.updateProjectionMatrix(),I.updateProjectionMatrix(),W.updateProjectionMatrix());const ce=W.parent,xe=b.cameras;re(b,ce);for(let we=0;we<xe.length;we++)re(xe[we],ce);xe.length===2?V(b,S,I):b.projectionMatrix.copy(S.projectionMatrix),oe(W,b,ce)};function oe(W,ce,xe){xe===null?W.matrix.copy(ce.matrixWorld):(W.matrix.copy(xe.matrixWorld),W.matrix.invert(),W.matrix.multiply(ce.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ce.projectionMatrix),W.projectionMatrixInverse.copy(ce.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ca*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return o},this.setFoveation=function(W){o=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null};let ue=null;function Y(W,ce){if(c=ce.getViewerPose(f||l),_=ce,c!==null){const xe=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let we=!1;xe.length!==b.cameras.length&&(b.cameras.length=0,we=!0);for(let Se=0;Se<xe.length;Se++){const ze=xe[Se];let Ae=null;if(p!==null)Ae=p.getViewport(ze);else{const He=u.getViewSubImage(d,ze);Ae=He.viewport,Se===0&&(e.setRenderTargetTextures(x,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(x))}let X=U[Se];X===void 0&&(X=new Ht,X.layers.enable(Se),X.viewport=new bt,U[Se]=X),X.matrix.fromArray(ze.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ze.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Se===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),we===!0&&b.cameras.push(X)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Se=u.getDepthInformation(xe[0]);Se&&Se.isValid&&Se.texture&&g.init(e,Se,r.renderState)}}for(let xe=0;xe<y.length;xe++){const we=T[xe],ve=y[xe];we!==null&&ve!==void 0&&ve.update(we,ce,f||l)}g.render(e,b),ue&&ue(W,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const he=new Ll;he.setAnimationLoop(Y),this.setAnimationLoop=function(W){ue=W},this.dispose=function(){}}}function um(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,Cl(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function r(h,m,x,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(h,m):m.isMeshToonMaterial?(s(h,m),u(h,m)):m.isMeshPhongMaterial?(s(h,m),c(h,m)):m.isMeshStandardMaterial?(s(h,m),d(h,m),m.isMeshPhysicalMaterial&&p(h,m,T)):m.isMeshMatcapMaterial?(s(h,m),_(h,m)):m.isMeshDepthMaterial?s(h,m):m.isMeshDistanceMaterial?(s(h,m),g(h,m)):m.isMeshNormalMaterial?s(h,m):m.isLineBasicMaterial?(l(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?o(h,m,x,y):m.isSpriteMaterial?f(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===Ot&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===Ot&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(h.envMap.value=x,h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,h.lightMapTransform)}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function o(h,m,x,y){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*x,h.scale.value=y*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function f(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function u(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,x){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function _(h,m){m.matcap&&(h.matcap.value=m.matcap)}function g(h,m){const x=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fm(i,e,t,n){let r={},s={},l=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(x,y){const T=y.program;n.uniformBlockBinding(x,T)}function f(x,y){let T=r[x.id];T===void 0&&(_(x),T=c(x),r[x.id]=T,x.addEventListener("dispose",h));const w=y.program;n.updateUBOMapping(x,w);const M=e.render.frame;s[x.id]!==M&&(d(x),s[x.id]=M)}function c(x){const y=u();x.__bindingPointIndex=y;const T=i.createBuffer(),w=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function u(){for(let x=0;x<a;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=r[x.id],T=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,S=T.length;M<S;M++){const I=Array.isArray(T[M])?T[M]:[T[M]];for(let U=0,b=I.length;U<b;U++){const L=I[U];if(p(L,M,U,w)===!0){const F=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let N=0;for(let G=0;G<j.length;G++){const z=j[G],ee=g(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+N,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,T,w){const M=x.value,S=y+"_"+T;if(w[S]===void 0)return typeof M=="number"||typeof M=="boolean"?w[S]=M:w[S]=M.clone(),!0;{const I=w[S];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return w[S]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function _(x){const y=x.uniforms;let T=0;const w=16;for(let S=0,I=y.length;S<I;S++){const U=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,L=U.length;b<L;b++){const F=U[b],j=Array.isArray(F.value)?F.value:[F.value];for(let N=0,G=j.length;N<G;N++){const z=j[N],ee=g(z),V=T%w;V!==0&&w-V<ee.boundary&&(T+=w-V),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=T,T+=ee.storage}}}const M=T%w;return M>0&&(T+=w-M),x.__size=T,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function h(x){const y=x.target;y.removeEventListener("dispose",h);const T=l.indexOf(y.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);l=[],r={},s={}}return{bind:o,update:f,dispose:m}}class kl{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:r=!0,stencil:s=!0,alpha:l=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:f=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=l;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const y=this;let T=!1,w=0,M=0,S=null,I=-1,U=null;const b=new bt,L=new bt;let F=null;const j=new rt(0);let N=0,G=t.width,z=t.height,ee=1,V=null,re=null;const oe=new bt(0,0,G,z),ue=new bt(0,0,G,z);let Y=!1;const he=new za;let W=!1,ce=!1,xe=null;const we=new mt,ve=new nt,Se=new ae,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return S===null?ee:1}let X=n;function He(D,q){for(let Q=0;Q<D.length;Q++){const ie=D[Q],ne=t.getContext(ie,q);if(ne!==null)return ne}return null}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:f,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Na}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",E,!1),X===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),X=He(q,D),X===null)throw He(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Pe,Oe,Le,Be,Ne,O,P,J,fe,se,_e,De,ye,Ee,Fe,Ge,de,Xe,Ve,Ie,Ue,me,A,te;function le(){Pe=new xd(X),Oe=new dd(X,Pe,e),Pe.init(Oe),me=new im(X,Pe,Oe),Le=new tm(X,Pe,Oe),Be=new Md(X),Ne=new Hp,O=new nm(X,Pe,Le,Ne,Oe,me,Be),P=new md(y),J=new vd(y),fe=new Ru(X,Oe),A=new fd(X,Pe,fe,Oe),se=new yd(X,fe,Be,A),_e=new Td(X,se,fe,Be),Ve=new wd(X,Oe,O),Ge=new pd(Ne),De=new Gp(y,P,J,Pe,Oe,A,Ge),ye=new um(y,Ne),Ee=new Wp,Fe=new Kp(Pe,Oe),Xe=new ud(y,P,J,Le,_e,d,o),de=new em(y,_e,Oe),te=new fm(X,Be,Oe,Le),Ie=new hd(X,Pe,Be,Oe),Ue=new bd(X,Pe,Be,Oe),Be.programs=De.programs,y.capabilities=Oe,y.extensions=Pe,y.properties=Ne,y.renderLists=Ee,y.shadowMap=de,y.state=Le,y.info=Be}le();const ge=new cm(y,X);this.xr=ge,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=Pe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Pe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(D){D!==void 0&&(ee=D,this.setSize(G,z,!1))},this.getSize=function(D){return D.set(G,z)},this.setSize=function(D,q,Q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=D,z=q,t.width=Math.floor(D*ee),t.height=Math.floor(q*ee),Q===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(G*ee,z*ee).floor()},this.setDrawingBufferSize=function(D,q,Q){G=D,z=q,ee=Q,t.width=Math.floor(D*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(b)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,q,Q,ie){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,q,Q,ie),Le.viewport(b.copy(oe).multiplyScalar(ee).floor())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,q,Q,ie){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,q,Q,ie),Le.scissor(L.copy(ue).multiplyScalar(ee).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(D){Le.setScissorTest(Y=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){re=D},this.getClearColor=function(D){return D.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(D=!0,q=!0,Q=!0){let ie=0;if(D){let ne=!1;if(S!==null){const Re=S.texture.format;ne=Re===dl||Re===hl||Re===fl}if(ne){const Re=S.texture.type,ke=Re===An||Re===Tn||Re===Fa||Re===Gn||Re===cl||Re===ul,We=Xe.getClearColor(),je=Xe.getClearAlpha(),$e=We.r,Ze=We.g,qe=We.b;ke?(p[0]=$e,p[1]=Ze,p[2]=qe,p[3]=je,X.clearBufferuiv(X.COLOR,0,p)):(_[0]=$e,_[1]=Ze,_[2]=qe,_[3]=je,X.clearBufferiv(X.COLOR,0,_))}else ie|=X.COLOR_BUFFER_BIT}q&&(ie|=X.DEPTH_BUFFER_BIT),Q&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",E,!1),Ee.dispose(),Fe.dispose(),Ne.dispose(),P.dispose(),J.dispose(),_e.dispose(),A.dispose(),te.dispose(),De.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",B),ge.removeEventListener("sessionend",Z),xe&&(xe.dispose(),xe=null),Te.stop()};function k(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=Be.autoReset,q=de.enabled,Q=de.autoUpdate,ie=de.needsUpdate,ne=de.type;le(),Be.autoReset=D,de.enabled=q,de.autoUpdate=Q,de.needsUpdate=ie,de.type=ne}function E(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function H(D){const q=D.target;q.removeEventListener("dispose",H),pe(q)}function pe(D){v(D),Ne.remove(D)}function v(D){const q=Ne.get(D).programs;q!==void 0&&(q.forEach(function(Q){De.releaseProgram(Q)}),D.isShaderMaterial&&De.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,Q,ie,ne,Re){q===null&&(q=ze);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,We=Et(D,q,Q,ie,ne);Le.setMaterial(ie,ke);let je=Q.index,$e=1;if(ie.wireframe===!0){if(je=se.getWireframeAttribute(Q),je===void 0)return;$e=2}const Ze=Q.drawRange,qe=Q.attributes.position;let ht=Ze.start*$e,Nt=(Ze.start+Ze.count)*$e;Re!==null&&(ht=Math.max(ht,Re.start*$e),Nt=Math.min(Nt,(Re.start+Re.count)*$e)),je!==null?(ht=Math.max(ht,0),Nt=Math.min(Nt,je.count)):qe!=null&&(ht=Math.max(ht,0),Nt=Math.min(Nt,qe.count));const vt=Nt-ht;if(vt<0||vt===1/0)return;A.setup(ne,ie,We,Q,je);let nn,lt=Ie;if(je!==null&&(nn=fe.get(je),lt=Ue,lt.setIndex(nn)),ne.isMesh)ie.wireframe===!0?(Le.setLineWidth(ie.wireframeLinewidth*Ae()),lt.setMode(X.LINES)):lt.setMode(X.TRIANGLES);else if(ne.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Le.setLineWidth(Qe*Ae()),ne.isLineSegments?lt.setMode(X.LINES):ne.isLineLoop?lt.setMode(X.LINE_LOOP):lt.setMode(X.LINE_STRIP)}else ne.isPoints?lt.setMode(X.POINTS):ne.isSprite&&lt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)lt.renderInstances(ht,vt,ne.count);else if(Q.isInstancedBufferGeometry){const Qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Dr=Math.min(Q.instanceCount,Qe);lt.renderInstances(ht,vt,Dr)}else lt.render(ht,vt)};function K(D,q,Q){D.transparent===!0&&D.side===fn&&D.forceSinglePass===!1?(D.side=Ot,D.needsUpdate=!0,Je(D,q,Q),D.side=Cn,D.needsUpdate=!0,Je(D,q,Q),D.side=fn):Je(D,q,Q)}this.compile=function(D,q,Q=null){Q===null&&(Q=D),h=Fe.get(Q),h.init(),x.push(h),Q.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),D!==Q&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),h.setupLights(y._useLegacyLights);const ie=new Set;return D.traverse(function(ne){const Re=ne.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){const We=Re[ke];K(We,Q,ne),ie.add(We)}else K(Re,Q,ne),ie.add(Re)}),x.pop(),h=null,ie},this.compileAsync=function(D,q,Q=null){const ie=this.compile(D,q,Q);return new Promise(ne=>{function Re(){if(ie.forEach(function(ke){Ne.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){ne(D);return}setTimeout(Re,10)}Pe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let $=null;function R(D){$&&$(D)}function B(){Te.stop()}function Z(){Te.start()}const Te=new Ll;Te.setAnimationLoop(R),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(D){$=D,ge.setAnimationLoop(D),D===null?Te.stop():Te.start()},ge.addEventListener("sessionstart",B),ge.addEventListener("sessionend",Z),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(q),q=ge.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,q,S),h=Fe.get(D,x.length),h.init(),x.push(h),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),he.setFromProjectionMatrix(we),ce=this.localClippingEnabled,W=Ge.init(this.clippingPlanes,ce),g=Ee.get(D,m.length),g.init(),m.push(g),be(D,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,re),this.info.render.frame++,W===!0&&Ge.beginShadows();const Q=h.state.shadowsArray;if(de.render(Q,D,q),W===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&Xe.render(g,D),h.setupLights(y._useLegacyLights),q.isArrayCamera){const ie=q.cameras;for(let ne=0,Re=ie.length;ne<Re;ne++){const ke=ie[ne];Ce(g,D,ke,ke.viewport)}}else Ce(g,D,q);S!==null&&(O.updateMultisampleRenderTarget(S),O.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(y,D,q),A.resetDefaultState(),I=-1,U=null,x.pop(),x.length>0?h=x[x.length-1]:h=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function be(D,q,Q,ie){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)h.pushLight(D),D.castShadow&&h.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||he.intersectsSprite(D)){ie&&Se.setFromMatrixPosition(D.matrixWorld).applyMatrix4(we);const ke=_e.update(D),We=D.material;We.visible&&g.push(D,ke,We,Q,Se.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||he.intersectsObject(D))){const ke=_e.update(D),We=D.material;if(ie&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Se.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Se.copy(ke.boundingSphere.center)),Se.applyMatrix4(D.matrixWorld).applyMatrix4(we)),Array.isArray(We)){const je=ke.groups;for(let $e=0,Ze=je.length;$e<Ze;$e++){const qe=je[$e],ht=We[qe.materialIndex];ht&&ht.visible&&g.push(D,ke,ht,Q,Se.z,qe)}}else We.visible&&g.push(D,ke,We,Q,Se.z,null)}}const Re=D.children;for(let ke=0,We=Re.length;ke<We;ke++)be(Re[ke],q,Q,ie)}function Ce(D,q,Q,ie){const ne=D.opaque,Re=D.transmissive,ke=D.transparent;h.setupLightsView(Q),W===!0&&Ge.setGlobalState(y.clippingPlanes,Q),Re.length>0&&it(ne,Re,q,Q),ie&&Le.viewport(b.copy(ie)),ne.length>0&&Dt(ne,q,Q),Re.length>0&&Dt(Re,q,Q),ke.length>0&&Dt(ke,q,Q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function it(D,q,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;const Re=Oe.isWebGL2;xe===null&&(xe=new gn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Wn:An,minFilter:zn,samples:Re?4:0})),y.getDrawingBufferSize(ve),Re?xe.setSize(ve.x,ve.y):xe.setSize(Ra(ve.x),Ra(ve.y));const ke=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(j),N=y.getClearAlpha(),N<1&&y.setClearColor(16777215,.5),y.clear();const We=y.toneMapping;y.toneMapping=pn,Dt(D,Q,ie),O.updateMultisampleRenderTarget(xe),O.updateRenderTargetMipmap(xe);let je=!1;for(let $e=0,Ze=q.length;$e<Ze;$e++){const qe=q[$e],ht=qe.object,Nt=qe.geometry,vt=qe.material,nn=qe.group;if(vt.side===fn&&ht.layers.test(ie.layers)){const lt=vt.side;vt.side=Ot,vt.needsUpdate=!0,ot(ht,Q,ie,Nt,vt,nn),vt.side=lt,vt.needsUpdate=!0,je=!0}}je===!0&&(O.updateMultisampleRenderTarget(xe),O.updateRenderTargetMipmap(xe)),y.setRenderTarget(ke),y.setClearColor(j,N),y.toneMapping=We}function Dt(D,q,Q){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Re=D.length;ne<Re;ne++){const ke=D[ne],We=ke.object,je=ke.geometry,$e=ie===null?ke.material:ie,Ze=ke.group;We.layers.test(Q.layers)&&ot(We,q,Q,je,$e,Ze)}}function ot(D,q,Q,ie,ne,Re){D.onBeforeRender(y,q,Q,ie,ne,Re),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(y,q,Q,ie,D,Re),ne.transparent===!0&&ne.side===fn&&ne.forceSinglePass===!1?(ne.side=Ot,ne.needsUpdate=!0,y.renderBufferDirect(Q,q,ie,ne,D,Re),ne.side=Cn,ne.needsUpdate=!0,y.renderBufferDirect(Q,q,ie,ne,D,Re),ne.side=fn):y.renderBufferDirect(Q,q,ie,ne,D,Re),D.onAfterRender(y,q,Q,ie,ne,Re)}function Je(D,q,Q){q.isScene!==!0&&(q=ze);const ie=Ne.get(D),ne=h.state.lights,Re=h.state.shadowsArray,ke=ne.state.version,We=De.getParameters(D,ne.state,Re,q,Q),je=De.getProgramCacheKey(We);let $e=ie.programs;ie.environment=D.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(D.isMeshStandardMaterial?J:P).get(D.envMap||ie.environment),$e===void 0&&(D.addEventListener("dispose",H),$e=new Map,ie.programs=$e);let Ze=$e.get(je);if(Ze!==void 0){if(ie.currentProgram===Ze&&ie.lightsStateVersion===ke)return pt(D,We),Ze}else We.uniforms=De.getUniforms(D),D.onBuild(Q,We,y),D.onBeforeCompile(We,y),Ze=De.acquireProgram(We,je),$e.set(je,Ze),ie.uniforms=We.uniforms;const qe=ie.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(qe.clippingPlanes=Ge.uniform),pt(D,We),ie.needsLights=jn(D),ie.lightsStateVersion=ke,ie.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.currentProgram=Ze,ie.uniformsList=null,Ze}function ct(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=gr.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function pt(D,q){const Q=Ne.get(D);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Et(D,q,Q,ie,ne){q.isScene!==!0&&(q=ze),O.resetTextureUnits();const Re=q.fog,ke=ie.isMeshStandardMaterial?q.environment:null,We=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:_n,je=(ie.isMeshStandardMaterial?J:P).get(ie.envMap||ke),$e=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,Nt=!!Q.morphAttributes.color;let vt=pn;ie.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(vt=y.toneMapping);const nn=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=nn!==void 0?nn.length:0,Qe=Ne.get(ie),Dr=h.state.lights;if(W===!0&&(ce===!0||D!==U)){const zt=D===U&&ie.id===I;Ge.setState(ie,D,zt)}let ut=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dr.state.version||Qe.outputColorSpace!==We||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||Qe.envMap!==je||ie.fog===!0&&Qe.fog!==Re||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ge.numPlanes||Qe.numIntersection!==Ge.numIntersection)||Qe.vertexAlphas!==$e||Qe.vertexTangents!==Ze||Qe.morphTargets!==qe||Qe.morphNormals!==ht||Qe.morphColors!==Nt||Qe.toneMapping!==vt||Oe.isWebGL2===!0&&Qe.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,Qe.__version=ie.version);let Rn=Qe.currentProgram;ut===!0&&(Rn=Je(ie,q,ne));let Xa=!1,Ti=!1,Ur=!1;const wt=Rn.getUniforms(),Pn=Qe.uniforms;if(Le.useProgram(Rn.program)&&(Xa=!0,Ti=!0,Ur=!0),ie.id!==I&&(I=ie.id,Ti=!0),Xa||U!==D){wt.setValue(X,"projectionMatrix",D.projectionMatrix),wt.setValue(X,"viewMatrix",D.matrixWorldInverse);const zt=wt.map.cameraPosition;zt!==void 0&&zt.setValue(X,Se.setFromMatrixPosition(D.matrixWorld)),Oe.logarithmicDepthBuffer&&wt.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&wt.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),U!==D&&(U=D,Ti=!0,Ur=!0)}if(ne.isSkinnedMesh){wt.setOptional(X,ne,"bindMatrix"),wt.setOptional(X,ne,"bindMatrixInverse");const zt=ne.skeleton;zt&&(Oe.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),wt.setValue(X,"boneTexture",zt.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(wt.setOptional(X,ne,"batchingTexture"),wt.setValue(X,"batchingTexture",ne._matricesTexture,O));const Ir=Q.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0&&Oe.isWebGL2===!0)&&Ve.update(ne,Q,Rn),(Ti||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,wt.setValue(X,"receiveShadow",ne.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Pn.envMap.value=je,Pn.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ti&&(wt.setValue(X,"toneMappingExposure",y.toneMappingExposure),Qe.needsLights&&Xn(Pn,Ur),Re&&ie.fog===!0&&ye.refreshFogUniforms(Pn,Re),ye.refreshMaterialUniforms(Pn,ie,ee,z,xe),gr.upload(X,ct(Qe),Pn,O)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gr.upload(X,ct(Qe),Pn,O),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&wt.setValue(X,"center",ne.center),wt.setValue(X,"modelViewMatrix",ne.modelViewMatrix),wt.setValue(X,"normalMatrix",ne.normalMatrix),wt.setValue(X,"modelMatrix",ne.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const zt=ie.uniformsGroups;for(let Or=0,Vl=zt.length;Or<Vl;Or++)if(Oe.isWebGL2){const ja=zt[Or];te.update(ja,Rn),te.bind(ja,Rn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rn}function Xn(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function jn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,q,Q){Ne.get(D.texture).__webglTexture=q,Ne.get(D.depthTexture).__webglTexture=Q;const ie=Ne.get(D);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,q){const Q=Ne.get(D);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,Q=0){S=D,w=q,M=Q;let ie=!0,ne=null,Re=!1,ke=!1;if(D){const je=Ne.get(D);je.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(X.FRAMEBUFFER,null),ie=!1):je.__webglFramebuffer===void 0?O.setupRenderTarget(D):je.__hasExternalTextures&&O.rebindTextures(D,Ne.get(D.texture).__webglTexture,Ne.get(D.depthTexture).__webglTexture);const $e=D.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(ke=!0);const Ze=Ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[q])?ne=Ze[q][Q]:ne=Ze[q],Re=!0):Oe.isWebGL2&&D.samples>0&&O.useMultisampledRTT(D)===!1?ne=Ne.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?ne=Ze[Q]:ne=Ze,b.copy(D.viewport),L.copy(D.scissor),F=D.scissorTest}else b.copy(oe).multiplyScalar(ee).floor(),L.copy(ue).multiplyScalar(ee).floor(),F=Y;if(Le.bindFramebuffer(X.FRAMEBUFFER,ne)&&Oe.drawBuffers&&ie&&Le.drawBuffers(D,ne),Le.viewport(b),Le.scissor(L),Le.setScissorTest(F),Re){const je=Ne.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,je.__webglTexture,Q)}else if(ke){const je=Ne.get(D.texture),$e=q||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,je.__webglTexture,Q||0,$e)}I=-1},this.readRenderTargetPixels=function(D,q,Q,ie,ne,Re,ke){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Le.bindFramebuffer(X.FRAMEBUFFER,We);try{const je=D.texture,$e=je.format,Ze=je.type;if($e!==Kt&&me.convert($e)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ze===Wn&&(Pe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Ze!==An&&me.convert(Ze)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===hn&&(Oe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-ie&&Q>=0&&Q<=D.height-ne&&X.readPixels(q,Q,ie,ne,me.convert($e),me.convert(Ze),Re)}finally{const je=S!==null?Ne.get(S).__webglFramebuffer:null;Le.bindFramebuffer(X.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(D,q,Q=0){const ie=Math.pow(2,-Q),ne=Math.floor(q.image.width*ie),Re=Math.floor(q.image.height*ie);O.setTexture2D(q,0),X.copyTexSubImage2D(X.TEXTURE_2D,Q,0,0,D.x,D.y,ne,Re),Le.unbindTexture()},this.copyTextureToTexture=function(D,q,Q,ie=0){const ne=q.image.width,Re=q.image.height,ke=me.convert(Q.format),We=me.convert(Q.type);O.setTexture2D(Q,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment),q.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ie,D.x,D.y,ne,Re,ke,We,q.image.data):q.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ie,D.x,D.y,q.mipmaps[0].width,q.mipmaps[0].height,ke,q.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,ie,D.x,D.y,ke,We,q.image),ie===0&&Q.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(D,q,Q,ie,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=D.max.x-D.min.x+1,ke=D.max.y-D.min.y+1,We=D.max.z-D.min.z+1,je=me.convert(ie.format),$e=me.convert(ie.type);let Ze;if(ie.isData3DTexture)O.setTexture3D(ie,0),Ze=X.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)O.setTexture2DArray(ie,0),Ze=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ie.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ie.unpackAlignment);const qe=X.getParameter(X.UNPACK_ROW_LENGTH),ht=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Nt=X.getParameter(X.UNPACK_SKIP_PIXELS),vt=X.getParameter(X.UNPACK_SKIP_ROWS),nn=X.getParameter(X.UNPACK_SKIP_IMAGES),lt=Q.isCompressedTexture?Q.mipmaps[ne]:Q.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,lt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,lt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,D.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,D.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?X.texSubImage3D(Ze,ne,q.x,q.y,q.z,Re,ke,We,je,$e,lt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(Ze,ne,q.x,q.y,q.z,Re,ke,We,je,lt.data)):X.texSubImage3D(Ze,ne,q.x,q.y,q.z,Re,ke,We,je,$e,lt),X.pixelStorei(X.UNPACK_ROW_LENGTH,qe),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ht),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Nt),X.pixelStorei(X.UNPACK_SKIP_ROWS,vt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,nn),ne===0&&ie.generateMipmaps&&X.generateMipmap(Ze),Le.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?O.setTextureCube(D,0):D.isData3DTexture?O.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?O.setTexture2DArray(D,0):O.setTexture2D(D,0),Le.unbindTexture()},this.resetState=function(){w=0,M=0,S=null,Le.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ba?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Cr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Vn:ml}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?yt:_n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class hm extends kl{}hm.prototype.isWebGL1Renderer=!0;class dm extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pm extends Rt{constructor(e,t,n,r,s,l,a,o,f){super(e,t,n,r,s,l,a,o,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mm extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class La extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Uo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class _m{constructor(e,t,n){const r=this;let s=!1,l=0,a=0,o;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,l,a),s=!0},this.itemEnd=function(c){l++,r.onProgress!==void 0&&r.onProgress(c,l,a),l===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return f.push(c,u),this},this.removeHandler=function(c){const u=f.indexOf(c);return u!==-1&&f.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=f.length;u<d;u+=2){const p=f[u],_=f[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const gm=new _m;class Va{constructor(e){this.manager=e!==void 0?e:gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";class vm extends Va{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,l=Uo.get(e);if(l!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(l),s.manager.itemEnd(e)},0),l;const a=Bi("img");function o(){c(),Uo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(u){c(),r&&r(u),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",f,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xm extends Va{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,l=new vm(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class zl extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _a=new mt,Io=new ae,Oo=new ae;class ym{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Io.setFromMatrixPosition(e.matrixWorld),t.position.copy(Io),Oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oo),t.updateMatrixWorld(),_a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bm extends ym{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new bm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sm extends zl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=No(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=No();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function No(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Na);const Em={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const wm=new Ga(-1,1,1,-1,0,1);class Tm extends vn{constructor(){super(),this.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mn([0,2,0,0,2,0],2))}}const Am=new Tm;class Wa{constructor(e){this._mesh=new kt(Am,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Cm extends wi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pr.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fo extends wi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let l,a;this.inverse?(l=0,a=1):(l=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Rm extends wi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new nt);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cm(Em),this.copyPass.material.blending=tn,this.clock=new Gl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const a=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fo!==void 0&&(l instanceof Fo?n=!0:l instanceof Rm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lm extends wi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Dm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Um extends wi{constructor(){super();const e=Dm;this.uniforms=Pr.clone(e.uniforms),this.material=new mm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===al?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Im={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class Om extends wi{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,s=n.aperture!==void 0?n.aperture:.025,l=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new gn(1,1,{minFilter:St,magFilter:St,type:Wn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Bl,this.materialDepth.depthPacking=_l,this.materialDepth.blending=tn;const a=Im,o=Pr.clone(a.uniforms);o.tDepth.value=this.renderTargetDepth.texture,o.focus.value=r,o.aspect.value=t.aspect,o.aperture.value=s,o.maxblur.value=l,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Wt({defines:Object.assign({},a.defines),uniforms:o,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.uniforms=o,this.fsQuad=new Wa(this.materialBokeh),this._oldClearColor=new rt}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}function Nm(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},l={},a=i[0].morphTargetsRelative,o=new vn;let f=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;l[p]===void 0&&(l[p]=[]),l[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;o.addGroup(f,p,c),f+=p}}if(t){let c=0;const u=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let _=0;_<p.count;++_)u.push(p.getX(_)+c);c+=i[d].attributes.position.count}o.setIndex(u)}for(const c in s){const u=Bo(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;o.setAttribute(c,u)}for(const c in l){const u=l[c][0].length;if(u===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[c]=[];for(let d=0;d<u;++d){const p=[];for(let g=0;g<l[c].length;++g)p.push(l[c][g][d]);const _=Bo(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;o.morphAttributes[c].push(_)}}return o}function Bo(i){let e,t,n,r=-1,s=0;for(let f=0;f<i.length;++f){const c=i[f];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const l=new e(s),a=new $t(l,t,n);let o=0;for(let f=0;f<i.length;++f){const c=i[f];if(c.isInterleavedBufferAttribute){const u=o/t;for(let d=0,p=c.count;d<p;d++)for(let _=0;_<t;_++){const g=c.getComponent(d,_);a.setComponent(d+u,_,g)}}else l.set(c.array,o);o+=c.count*t}return r!==void 0&&(a.gpuType=r),a}var Hl={exports:{}};/*! three.modifiers-v2.5.7 */(function(i,e){(function(t,n){i.exports=n()})(typeof self<"u"?self:Qt,function(){return function(t){function n(s){if(r[s])return r[s].exports;var l=r[s]={i:s,l:!1,exports:{}};return t[s].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var r={};return n.m=t,n.c=r,n.d=function(s,l,a){n.o(s,l)||Object.defineProperty(s,l,{configurable:!1,enumerable:!0,get:a})},n.n=function(s){var l=s&&s.__esModule?function(){return s.default}:function(){return s};return n.d(l,"a",l),l},n.o=function(s,l){return Object.prototype.hasOwnProperty.call(s,l)},n.p="",n(n.s=7)}([function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Modifier=void 0;var s=function(){function l(){}return l.prototype.setModifiable=function(a){this.mod=a},l.prototype.getVertices=function(){return this.mod.getVertices()},l.prototype.destroy=function(){this.mod=null},l}();n.Modifier=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector3=void 0;var s=function(){function l(a,o,f){a===void 0&&(a=0),o===void 0&&(o=0),f===void 0&&(f=0),this.x=a,this.y=o,this.z=f}return l.prototype.clone=function(){return new l(this.x,this.y,this.z)},l.prototype.equals=function(a){return this.x==a.x&&this.y==a.y&&this.z==a.z},l.prototype.zero=function(){this.x=this.y=this.z=0},l.prototype.negate=function(){return new l(-this.x,-this.y,-this.z)},l.prototype.add=function(a){return new l(this.x+a.x,this.y+a.y,this.z+a.z)},l.prototype.subtract=function(a){return new l(this.x-a.x,this.y-a.y,this.z-a.z)},l.prototype.multiplyScalar=function(a){return new l(this.x*a,this.y*a,this.z*a)},l.prototype.multiply=function(a){return new l(this.x*a.x,this.y*a.y,this.z*a.z)},l.prototype.divide=function(a){var o=1/a;return new l(this.x*o,this.y*o,this.z*o)},l.prototype.normalize=function(){var a=this.x*this.x+this.y*this.y+this.z*this.z;if(a>0){var o=1/Math.sqrt(a);this.x*=o,this.y*=o,this.z*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},set:function(a){this.normalize(),this.x*=a,this.y*=a,this.z*=a},enumerable:!1,configurable:!0}),l.prototype.fromBufferAttribute=function(a,o){return this.x=a.getX(o),this.y=a.getY(o),this.z=a.getZ(o),this},l.prototype.toString=function(){return"["+this.x+" , "+this.y+" , "+this.z+"]"},l.sum=function(a,o){return a.add(o)},l.dot=function(a,o){return a.x*o.x+a.y*o.y+a.z*o.z},l.cross=function(a,o){return new l(a.y*o.z-a.z*o.y,a.z*o.x-a.x*o.z,a.x*o.y-a.y*o.x)},l.distance=function(a,o){var f=a.x-o.x,c=a.y-o.y,u=a.z-o.z;return Math.sqrt(f*f+c*c+u*u)},l.ZERO=new l(0,0,0),l}();n.Vector3=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModConstant=void 0;var s=function(){function l(){}return l.NONE=0,l.X=1,l.Y=2,l.Z=4,l.LEFT=-1,l.RIGHT=1,l}();n.ModConstant=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMath=void 0;var s=function(){function l(){}return l.normalize=function(a,o,f){var c=o-a;return c==0?1:l.trim(0,1,(f-a)/o)},l.toRange=function(a,o,f){var c=o-a;return c==0?0:a+(o-a)*f},l.inInRange=function(a,o,f,c){return c===void 0&&(c=!1),c?f>=a&&f<=o:f>a&&f<o},l.sign=function(a,o){return o===void 0&&(o=0),a==0?o:a>0?1:-1},l.trim=function(a,o,f){return Math.min(o,Math.max(a,f))},l.wrap=function(a,o,f){return f<a?f+(o-a):f>=o?f-(o-a):f},l.degToRad=function(a){return a/180*Math.PI},l.radToDeg=function(a){return a/Math.PI*180},l.presicion=function(a,o){var f=Math.pow(10,o);return Math.round(a*f)/f},l.uceil=function(a){return a<0?Math.floor(a):Math.ceil(a)},l.mappedKey=function(a){var o=Math.pow(10,4);return Math.round(a.x*o)+"_"+Math.round(a.y*o)+"_"+Math.round(a.z*o)},l.PI=3.1415,l}();n.TMath=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix4=void 0;var s=function(){function l(a,o,f,c,u,d,p,_,g,h,m,x,y,T,w,M){a===void 0&&(a=1),o===void 0&&(o=0),f===void 0&&(f=0),c===void 0&&(c=0),u===void 0&&(u=0),d===void 0&&(d=1),p===void 0&&(p=0),_===void 0&&(_=0),g===void 0&&(g=0),h===void 0&&(h=0),m===void 0&&(m=1),x===void 0&&(x=0),y===void 0&&(y=0),T===void 0&&(T=0),w===void 0&&(w=0),M===void 0&&(M=1),this.n11=a,this.n12=o,this.n13=f,this.n14=c,this.n21=u,this.n22=d,this.n23=p,this.n24=_,this.n31=g,this.n32=h,this.n33=m,this.n34=x,this.n41=y,this.n42=T,this.n43=w,this.n44=M}return l.translationMatrix=function(a,o,f){var c=new l;return c.n14=a,c.n24=o,c.n34=f,c},l.scaleMatrix=function(a,o,f){var c=new l;return c.n11=a,c.n22=o,c.n33=f,c},l.rotationMatrix=function(a,o,f,c,u){u===void 0&&(u=null);var d;d=u||new l;var p=Math.cos(c),_=Math.sin(c),g=1-p,h=a*o*g,m=o*f*g,x=a*f*g,y=_*f,T=_*o,w=_*a;return d.n11=p+a*a*g,d.n12=-y+h,d.n13=T+x,d.n14=0,d.n21=y+h,d.n22=p+o*o*g,d.n23=-w+m,d.n24=0,d.n31=-T+x,d.n32=w+m,d.n33=p+f*f*g,d.n34=0,d},l.prototype.calculateMultiply=function(a,o){var f=a.n11,c=o.n11,u=a.n21,d=o.n21,p=a.n31,_=o.n31,g=a.n12,h=o.n12,m=a.n22,x=o.n22,y=a.n32,T=o.n32,w=a.n13,M=o.n13,S=a.n23,I=o.n23,U=a.n33,b=o.n33,L=a.n14,F=o.n14,j=a.n24,N=o.n24,G=a.n34,z=o.n34;this.n11=f*c+g*d+w*_,this.n12=f*h+g*x+w*T,this.n13=f*M+g*I+w*b,this.n14=f*F+g*N+w*z+L,this.n21=u*c+m*d+S*_,this.n22=u*h+m*x+S*T,this.n23=u*M+m*I+S*b,this.n24=u*F+m*N+S*z+j,this.n31=p*c+y*d+U*_,this.n32=p*h+y*x+U*T,this.n33=p*M+y*I+U*b,this.n34=p*F+y*N+U*z+G},l.multiply=function(a,o){var f=new l;return f.calculateMultiply(a,o),f},l.multiplyVector=function(a,o){var f=o.x,c=o.y,u=o.z;o.x=f*a.n11+c*a.n12+u*a.n13+a.n14,o.y=f*a.n21+c*a.n22+u*a.n23+a.n24,o.z=f*a.n31+c*a.n32+u*a.n33+a.n34},l}();n.Matrix4=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector2=void 0;var s=function(){function l(a,o){this.x=a,this.y=o}return l.prototype.clone=function(){return new l(this.x,this.y)},l.prototype.equals=function(a){return this.x==a.x&&this.y==a.y},l.prototype.zero=function(){this.x=this.y},l.prototype.negate=function(){return new l(-this.x,-this.y)},l.prototype.add=function(a){return new l(this.x+a.x,this.y+a.y)},l.prototype.subtract=function(a){return new l(this.x-a.x,this.y-a.y)},l.prototype.multiplyScalar=function(a){return new l(this.x*a,this.y*a)},l.prototype.multiply=function(a){return new l(this.x*a.x,this.y*a.y)},l.prototype.divide=function(a){var o=1/a;return new l(this.x*o,this.y*o)},l.prototype.normalize=function(){var a=this.x*this.x+this.y*this.y;if(a>0){var o=1/Math.sqrt(a);this.x*=o,this.y*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},set:function(a){this.normalize(),this.x*=a,this.y*=a},enumerable:!1,configurable:!0}),l.prototype.toString=function(){return"["+this.x+" , "+this.y+"]"},l.sum=function(a,o){return a.add(o)},l.dot=function(a,o){return a.x*o.x+a.y*o.y},l.distance=function(a,o){var f=a.x-o.x,c=a.y-o.y;return Math.sqrt(f*f+c*c)},l.ZERO=new l(0,0),l}();n.Vector2=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Range=void 0;var s=r(3),l=function(){function a(o,f){o===void 0&&(o=0),f===void 0&&(f=1),this._start=o,this._end=f}return Object.defineProperty(a.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"size",{get:function(){return this._end-this._start},enumerable:!1,configurable:!0}),a.prototype.move=function(o){this._start+=o,this._end+=o},a.prototype.isIn=function(o){return o>=this._start&&o<=this._end},a.prototype.normalize=function(o){return s.TMath.normalize(this._start,this._end,o)},a.prototype.toRange=function(o){return s.TMath.toRange(this._start,this._end,o)},a.prototype.trim=function(o){return s.TMath.trim(this._start,this._end,o)},a.prototype.interpolate=function(o,f){return this.toRange(f.normalize(o))},a.prototype.toString=function(){return"["+this.start+" - "+this.end+"]"},a}();n.Range=l},function(t,n,r){t.exports=r(8)},function(t,n,r){var s=this&&this.__createBinding||(Object.create?function(a,o,f,c){c===void 0&&(c=f),Object.defineProperty(a,c,{enumerable:!0,get:function(){return o[f]}})}:function(a,o,f,c){c===void 0&&(c=f),a[c]=o[f]}),l=this&&this.__exportStar||function(a,o){for(var f in a)f==="default"||Object.prototype.hasOwnProperty.call(o,f)||s(o,a,f)};Object.defineProperty(n,"__esModule",{value:!0}),l(r(9),n),l(r(16),n),l(r(6),n),l(r(5),n),l(r(1),n),l(r(3),n),l(r(2),n),l(r(17),n),l(r(19),n),l(r(20),n),l(r(21),n),l(r(25),n),l(r(26),n),l(r(27),n),l(r(28),n),l(r(29),n),l(r(30),n),l(r(31),n)},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModifierStack=void 0;var s=r(10),l=function(){function a(o){this.baseMesh=new s.ThreeMesh,this.baseMesh.setMesh(o),this.baseMesh.analyzeGeometry(),this.stack=[]}return Object.defineProperty(a.prototype,"indexUpdate",{set:function(o){this.baseMesh.indexUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"boundUpdate",{set:function(o){this.baseMesh.boundUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"uvsAndColorUpdate",{set:function(o){this.baseMesh.uvsAndColorUpdate=o},enumerable:!1,configurable:!0}),a.prototype.addModifier=function(o){o.setModifiable(this.baseMesh),this.stack.push(o)},a.prototype.removeModifier=function(o){var f=this.stack.indexOf(o);f>-1&&this.stack.splice(f,1)},a.prototype.apply=function(){this.baseMesh.resetGeometry();for(var o=0;o<this.stack.length;o++)this.stack[o].apply();this.baseMesh.postApply()},a.prototype.collapse=function(){this.apply(),this.baseMesh.collapseGeometry(),this.stack.length=0},a.prototype.reset=function(){this.baseMesh.resetGeometry()},a.prototype.clear=function(){this.stack.length=0},a.prototype.destroy=function(){this.baseMesh.destroy();for(var o=0;o<this.stack.length;o++)this.stack[o].destroy();this.clear()},a}();n.ModifierStack=l},function(t,n,r){var s=this&&this.__extends||function(){var p=function(_,g){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,m){h.__proto__=m}||function(h,m){for(var x in m)Object.prototype.hasOwnProperty.call(m,x)&&(h[x]=m[x])})(_,g)};return function(_,g){function h(){this.constructor=_}if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(_,g),_.prototype=g===null?Object.create(g):(h.prototype=g.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeMesh=void 0;var l=r(11),a=r(13),o=r(14),f=r(3),c=r(1),u=r(15),d=function(p){function _(){var g=p!==null&&p.apply(this,arguments)||this;return g.verticesMap=new u.TMap,g.uvsAndColorUpdate=!1,g}return s(_,p),_.prototype.setMesh=function(g){this.mesh=g,this.setVertices(),this.setFaces(),this.mergeVertices(),this.mergeFaces()},_.prototype.setVertices=function(){for(var g=this.getAttr("position"),h=0;h<g.count;h++){var m=new l.ThreeVertex,x=new c.Vector3().fromBufferAttribute(g,h);m.setVertex(x),this.vertices.push(m)}},_.prototype.setFaces=function(){var g=this.getAttr("index"),h=this.getAttr("position");if(g!==null)for(var m=0;m<g.count;m+=3){var x=new o.FaceProxy,y=g.getX(m),T=g.getX(m+1),w=g.getX(m+2),M=this.vertices[y],S=this.vertices[T],I=this.vertices[w];x.addVertices(M,S,I),this.faces.push(x)}else for(var m=0;m<h.count;m+=3){var x=new o.FaceProxy,y=m,T=m+1,w=m+2,M=this.vertices[y],S=this.vertices[T],I=this.vertices[w];x.addVertices(M,S,I),this.faces.push(x)}},_.prototype.mergeVertices=function(){for(var g=[],h=this.verticesMap,m=0;m<this.vertices.length;m++){var x=this.vertices[m],y=f.TMath.mappedKey(x);if(h.includeByValue(y)){var T=h.getToByValue(y);h.add(T,m,y)}else{var T=g.length;x.only=!0,g.push(x),h.add(T,m,y)}}this.vertices=g},_.prototype.mergeFaces=function(){for(var g=[],h=0,m=this.faces.length;h<m;h++){var x=this.faces[h],y=f.TMath.mappedKey(x.a),T=f.TMath.mappedKey(x.b),w=f.TMath.mappedKey(x.c),M=this.verticesMap.getToByValue(y),S=this.verticesMap.getToByValue(T),I=this.verticesMap.getToByValue(w);x.a=this.vertices[M],x.b=this.vertices[S],x.c=this.vertices[I];for(var U=[M,S,I],b=0;b<3;b++)if(U[b]===U[(b+1)%3]){g.push(h);break}}for(var h=g.length-1;h>=0;h--){var L=g[h];this.faces.splice(L,1)}},_.prototype.postApply=function(){this.updatePosition(),this.updateIndex(),this.computeBounding(),this.updateUvsAndColor()},_.prototype.updateUvsAndColor=function(){if(this.uvsAndColorUpdate){var g=this.getAttr("color");g&&(g.needsUpdate=!0);var h=this.getAttr("uv");h&&(h.needsUpdate=!0)}},_.prototype.computeBounding=function(){if(this.boundUpdate){var g=this.mesh.geometry;g.computeBoundingBox(),g.computeBoundingSphere()}},_.prototype.updatePosition=function(){var g,h,m,x,y,T=this.getAttr("position"),w=this.vertices.length;for(m=0;m<w;m++)for(h=this.vertices[m],g=this.verticesMap.getFromByTo(m),x=0;x<g.length;x++)y=g[x],T.setX(y,h.x),T.setY(y,h.y),T.setZ(y,h.z);T.needsUpdate=!0},_.prototype.updateIndex=function(){if(this.indexUpdate){var g=this.getAttr("index");g&&(g.needsUpdate=!0)}},_.prototype.getAttr=function(g){var h=this.mesh.geometry;return g==="index"?h.getIndex():h.getAttribute(g)},_.prototype.updateMeshPosition=function(g){this.mesh.position.x+=g.x,this.mesh.position.y+=g.y,this.mesh.position.z+=g.z},_.prototype.destroy=function(){p.prototype.destroy.call(this),this.verticesMap.destroy(),this.verticesMap=null,this.mesh=null},_}(a.MeshProxy);n.ThreeMesh=d},function(t,n,r){var s=this&&this.__extends||function(){var o=function(f,c){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,d){u.__proto__=d}||function(u,d){for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])})(f,c)};return function(f,c){function u(){this.constructor=f}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");o(f,c),f.prototype=c===null?Object.create(c):(u.prototype=c.prototype,new u)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeVertex=void 0;var l=r(12),a=function(o){function f(){var c=o.call(this)||this;return c.only=!1,c}return s(f,o),f.prototype.setVertex=function(c){this.vertor=c,this.ox=this.vertor.x,this.oy=this.vertor.y,this.oz=this.vertor.z},Object.defineProperty(f.prototype,"x",{get:function(){return this.vertor.x},set:function(c){this.vertor.x=c},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"y",{get:function(){return this.vertor.y},set:function(c){this.vertor.y=c},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"z",{get:function(){return this.vertor.z},set:function(c){this.vertor.z=c},enumerable:!1,configurable:!0}),f.prototype.toString=function(){return o.prototype.toString.call(this)+" only:"+this.only},f}(l.VertexProxy);n.ThreeVertex=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VertexProxy=void 0;var s=r(1),l=r(2),a=function(){function o(){this.id=""}return o.prototype.setVertex=function(f){},o.prototype.setRatios=function(f,c,u){this._ratioX=f,this._ratioY=c,this._ratioZ=u},o.prototype.setOriginalPosition=function(f,c,u){this.ox=f,this.oy=c,this.oz=u},Object.defineProperty(o.prototype,"x",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"y",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"z",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),o.prototype.getValue=function(f){switch(f){case l.ModConstant.X:return this.x;case l.ModConstant.Y:return this.y;case l.ModConstant.Z:return this.z}return 0},o.prototype.setValue=function(f,c){switch(f){case l.ModConstant.X:this.x=c;break;case l.ModConstant.Y:this.y=c;break;case l.ModConstant.Z:this.z=c}},Object.defineProperty(o.prototype,"ratioX",{get:function(){return this._ratioX},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioY",{get:function(){return this._ratioY},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioZ",{get:function(){return this._ratioZ},enumerable:!1,configurable:!0}),o.prototype.getRatio=function(f){switch(f){case l.ModConstant.X:return this._ratioX;case l.ModConstant.Y:return this._ratioY;case l.ModConstant.Z:return this._ratioZ}return-1},Object.defineProperty(o.prototype,"originalX",{get:function(){return this.ox},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalY",{get:function(){return this.oy},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalZ",{get:function(){return this.oz},enumerable:!1,configurable:!0}),o.prototype.getOriginalValue=function(f){switch(f){case l.ModConstant.X:return this.ox;case l.ModConstant.Y:return this.oy;case l.ModConstant.Z:return this.oz}return 0},o.prototype.reset=function(){this.x=this.ox,this.y=this.oy,this.z=this.oz},o.prototype.collapse=function(){this.ox=this.x,this.oy=this.y,this.oz=this.z},Object.defineProperty(o.prototype,"vector",{get:function(){return new s.Vector3(this.x,this.y,this.z)},set:function(f){this.x=f.x,this.y=f.y,this.z=f.z},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioVector",{get:function(){return new s.Vector3(this.ratioX,this.ratioY,this.ratioZ)},enumerable:!1,configurable:!0}),o.prototype.toString=function(){return"Vertex id:"+this.id+" xyz:"+this.x+" "+this.y+" "+this.z},o}();n.VertexProxy=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MeshProxy=void 0;var s=r(2),l=function(){function a(){this.boundUpdate=!1,this.indexUpdate=!1,this.uvsAndColorUpdate=!1,this.vertices=[],this.faces=[]}return a.prototype.setMesh=function(o){},a.prototype.updateMeshPosition=function(o){},a.prototype.getVertices=function(){return this.vertices},a.prototype.getFaces=function(){return this.faces},a.prototype.analyzeGeometry=function(){for(var o,f=this.getVertices().length,c=0;c<f;c++)o=this.getVertices()[c],c==0?(this._minX=this._maxX=o.x,this._minY=this._maxY=o.y,this._minZ=this._maxZ=o.z):(this._minX=Math.min(this._minX,o.x),this._minY=Math.min(this._minY,o.y),this._minZ=Math.min(this._minZ,o.z),this._maxX=Math.max(this._maxX,o.x),this._maxY=Math.max(this._maxY,o.y),this._maxZ=Math.max(this._maxZ,o.z)),o.setOriginalPosition(o.x,o.y,o.z);this._width=this._maxX-this._minX,this._height=this._maxY-this._minY,this._depth=this._maxZ-this._minZ;var u=Math.max(this._width,Math.max(this._height,this._depth)),d=Math.min(this._width,Math.min(this._height,this._depth));u==this._width&&d==this._height?(this._minAxis=s.ModConstant.Y,this._midAxis=s.ModConstant.Z,this._maxAxis=s.ModConstant.X):u==this._width&&d==this._depth?(this._minAxis=s.ModConstant.Z,this._midAxis=s.ModConstant.Y,this._maxAxis=s.ModConstant.X):u==this._height&&d==this._width?(this._minAxis=s.ModConstant.X,this._midAxis=s.ModConstant.Z,this._maxAxis=s.ModConstant.Y):u==this._height&&d==this._depth?(this._minAxis=s.ModConstant.Z,this._midAxis=s.ModConstant.X,this._maxAxis=s.ModConstant.Y):u==this._depth&&d==this._width?(this._minAxis=s.ModConstant.X,this._midAxis=s.ModConstant.Y,this._maxAxis=s.ModConstant.Z):u==this._depth&&d==this._height&&(this._minAxis=s.ModConstant.Y,this._midAxis=s.ModConstant.X,this._maxAxis=s.ModConstant.Z);for(var c=0;c<f;c++)o=this.getVertices()[c],o.setRatios((o.x-this._minX)/this._width,(o.y-this._minY)/this._height,(o.z-this._minZ)/this._depth)},a.prototype.resetGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].reset()},a.prototype.collapseGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].collapse();this.analyzeGeometry()},Object.defineProperty(a.prototype,"minX",{get:function(){return this._minX},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"minY",{get:function(){return this._minY},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"minZ",{get:function(){return this._minZ},enumerable:!1,configurable:!0}),a.prototype.getMin=function(o){switch(o){case s.ModConstant.X:return this._minX;case s.ModConstant.Y:return this._minY;case s.ModConstant.Z:return this._minZ}return-1},Object.defineProperty(a.prototype,"maxX",{get:function(){return this._maxX},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"maxY",{get:function(){return this._maxY},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"maxZ",{get:function(){return this._maxZ},enumerable:!1,configurable:!0}),a.prototype.getMax=function(o){switch(o){case s.ModConstant.X:return this._maxX;case s.ModConstant.Y:return this._maxY;case s.ModConstant.Z:return this._maxZ}return-1},Object.defineProperty(a.prototype,"maxAxis",{get:function(){return this._maxAxis},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"midAxis",{get:function(){return this._midAxis},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"minAxis",{get:function(){return this._minAxis},enumerable:!1,configurable:!0}),a.prototype.getSize=function(o){switch(o){case s.ModConstant.X:return this._width;case s.ModConstant.Y:return this._height;case s.ModConstant.Z:return this._depth}return-1},Object.defineProperty(a.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"depth",{get:function(){return this._depth},enumerable:!1,configurable:!0}),a.prototype.postApply=function(){},a.prototype.destroy=function(){this.vertices.length=0,this.faces.length=0},a}();n.MeshProxy=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FaceProxy=void 0;var s=function(){function l(){this._vertices=[]}return Object.defineProperty(l.prototype,"a",{get:function(){return this._vertices[0]},set:function(a){this._vertices[0]=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"b",{get:function(){return this._vertices[1]},set:function(a){this._vertices[1]=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"c",{get:function(){return this._vertices[2]},set:function(a){this._vertices[2]=a},enumerable:!1,configurable:!0}),l.prototype.addVertex=function(a){this._vertices.push(a)},l.prototype.addVertices=function(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];for(var f=0;f<a.length;f++)this.addVertex(a[f])},l.prototype.addABC=function(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];for(var f=0;f<a.length;f++)this.addVertex(a[f])},Object.defineProperty(l.prototype,"vertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),l.prototype.toString=function(){for(var a="",o=0;o<this._vertices.length;o++)a+=o+":"+this._vertices[o]+" ";return a},l}();n.FaceProxy=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMap=void 0;var s=function(){function a(){this.from=[]}return a.prototype.push=function(o){this.from.push(o)},a}(),l=function(){function a(){this._map={}}return a.prototype.add=function(o,f,c){var u="t_"+o;this._map[u]||(this._map[u]=new s),this._map[u].push(f),this._map[u].to=o,this._map[u].value=c},a.prototype.getToByValue=function(o){var f=this.getItemByValue(o);return f?f.to:-1},a.prototype.getFromByTo=function(o){var f=this.getItemByTo(o);return f?f.from:null},a.prototype.includeByValue=function(o){return!!this.getItemByValue(o)},a.prototype.getItemByValue=function(o){for(var f in this._map){var c=this._map[f];if(c.value===o)return c}return null},a.prototype.getItemByTo=function(o){var f="t_"+o;return this._map[f]},a.prototype.destroy=function(){for(var o in this._map)delete this._map[o]},a}();n.TMap=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Phase=void 0;var s=function(){function l(a){a===void 0&&(a=0),this.v=a}return Object.defineProperty(l.prototype,"value",{get:function(){return this.v},set:function(a){this.v=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"phasedValue",{get:function(){return Math.sin(this.v)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"absPhasedValue",{get:function(){return Math.abs(this.phasedValue)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"normValue",{get:function(){return(this.phasedValue+1)/2},enumerable:!1,configurable:!0}),l}();n.Phase=s},function(t,n,r){var s=this&&this.__extends||function(){var u=function(d,p){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(_[h]=g[h])})(d,p)};return function(d,p){function _(){this.constructor=d}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");u(d,p),d.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bend=void 0;var l=r(2),a=r(0),o=r(5),f=r(18),c=function(u){function d(p,_,g){p===void 0&&(p=0),_===void 0&&(_=.5),g===void 0&&(g=0);var h=u.call(this)||this;return h._constraint=l.ModConstant.NONE,h.switchAxes=!1,h._force=p,h._offset=_,h.angle=g,h}return s(d,u),d.prototype.setModifiable=function(p){u.prototype.setModifiable.call(this,p),this.max=this.switchAxes?p.midAxis:p.maxAxis,this.min=p.minAxis,this.mid=this.switchAxes?p.maxAxis:p.midAxis,this.width=p.getSize(this.max),this.height=p.getSize(this.mid),this.origin=p.getMin(this.max),this._diagAngle=Math.atan(this.width/this.height)},Object.defineProperty(d.prototype,"force",{get:function(){return this._force},set:function(p){this._force=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"constraint",{get:function(){return this._constraint},set:function(p){this._constraint=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"diagAngle",{get:function(){return this._diagAngle},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"angle",{get:function(){return this._angle},set:function(p){this._angle=p,this.m1=new f.Matrix(1,0,0,1),this.m1.rotate(this._angle),this.m2=new f.Matrix(1,0,0,1),this.m2.rotate(-this._angle)},enumerable:!1,configurable:!0}),d.prototype.apply=function(){if(this.force!=0)for(var p=this.mod.getVertices(),_=p.length,g=this.origin+this.width*this.offset,h=this.width/Math.PI/this.force,m=2*Math.PI*(this.width/(h*Math.PI*2)),x=0;x<_;x++){var y=p[x],T=y.getValue(this.max),w=y.getValue(this.mid),M=y.getValue(this.min),S=this.m1.transformPoint(new o.Vector2(T,w));T=S.x,w=S.y;var I=(T-this.origin)/this.width;if(!(this.constraint==l.ModConstant.LEFT&&I<=this.offset||this.constraint==l.ModConstant.RIGHT&&I>=this.offset)){var U=Math.PI/2-m*this.offset+m*I,b=Math.sin(U)*(h+M),L=Math.cos(U)*(h+M);M=b-h,T=g-L}var F=this.m2.transformPoint(new o.Vector2(T,w));T=F.x,w=F.y,y.setValue(this.max,T),y.setValue(this.mid,w),y.setValue(this.min,M)}},d}(a.Modifier);n.Bend=c},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix=void 0;var s=r(5),l=function(){function a(o,f,c,u){this.m=[o,f,c,u]}return a.prototype.dispose=function(){return this.m.length=0,this},a.prototype.reset=function(){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this},a.prototype.rotate=function(o){var f=Math.cos(o),c=Math.sin(o);return this.m[0]=f,this.m[1]=-c,this.m[2]=c,this.m[3]=f,this},a.prototype.scale=function(o,f){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,o!==void 0&&(this.m[0]=o,this.m[3]=o),f!==void 0&&(this.m[3]=f),this},a.prototype.multiply=function(o){return a.mult(this,o)},a.prototype.transformPoint=function(o){var f=a.transform(this,[o.x,o.y]);return new s.Vector2(f[0],f[1])},a.prototype.transformPointSelf=function(o){var f=a.transform(this,[o.x,o.y]);return o.x=f[0],o.y=f[1],o},a.prototype.clone=function(){var o=this.m;return new a(o[0],o[1],o[2],o[3])},a.transform=function(o,f){var c=o.m,u=f[0],d=f[1];return f[0]=c[0]*u+c[1]*d,f[1]=c[2]*u+c[3]*d,f},a.mult=function(o,f){var c=o.m,u=f.m,d=c[0],p=c[1],_=c[2],g=c[3];return c[0]=d*u[0]+p*u[2],c[1]=d*u[1]+p*u[3],c[2]=_*u[0]+g*u[2],c[3]=_*u[1]+g*u[3],o},a}();n.Matrix=l},function(t,n,r){var s=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bloat=void 0;var l=r(1),a=r(0),o=function(f){function c(){var u=f!==null&&f.apply(this,arguments)||this;return u._center=l.Vector3.ZERO,u._r=0,u._a=.01,u._u=l.Vector3.ZERO,u}return s(c,f),Object.defineProperty(c.prototype,"center",{get:function(){return this._center},set:function(u){this._center=u},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"radius",{get:function(){return this._r},set:function(u){this._r=Math.max(0,u)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"a",{get:function(){return this._a},set:function(u){this._a=Math.max(0,u)},enumerable:!1,configurable:!0}),c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=0,p=u;d<p.length;d++){var _=p[d],g=_;this._u.x=g.x-this._center.x,this._u.y=g.y-this._center.y,this._u.z=g.z-this._center.z,this._u.magnitude+=this._r*Math.exp(-this._u.magnitude*this._a),g.x=this._u.x+this._center.x,g.y=this._u.y+this._center.y,g.z=this._u.z+this._center.z}},c}(a.Modifier);n.Bloat=o},function(t,n,r){var s=this&&this.__extends||function(){var u=function(d,p){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var h in g)Object.prototype.hasOwnProperty.call(g,h)&&(_[h]=g[h])})(d,p)};return function(d,p){function _(){this.constructor=d}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");u(d,p),d.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Break=void 0;var l=r(6),a=r(1),o=r(4),f=r(0),c=function(u){function d(p,_){p===void 0&&(p=0),_===void 0&&(_=0);var g=u.call(this)||this;return g.bv=new a.Vector3(0,1,0),g.range=new l.Range(0,1),g.angle=_,g._offset=p,g}return s(d,u),d.prototype.apply=function(){for(var p=this.mod.getVertices(),_=p.length,g=new a.Vector3(0,0,-(this.mod.minZ+this.mod.depth*this.offset)),h=0;h<_;h++){var m=p[h],x=m.vector;if(x=x.add(g),x.z>=0&&this.range.isIn(m.ratioY)){var y=this.angle,T=o.Matrix4.rotationMatrix(this.bv.x,this.bv.y,this.bv.z,y);o.Matrix4.multiplyVector(T,x)}var w=g.negate();x=x.add(w),m.x=x.x,m.y=x.y,m.z=x.z}},Object.defineProperty(d.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),d}(f.Modifier);n.Break=c},function(t,n,r){var s=this&&this.__extends||function(){var d=function(p,_){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,h){g.__proto__=h}||function(g,h){for(var m in h)Object.prototype.hasOwnProperty.call(h,m)&&(g[m]=h[m])})(p,_)};return function(p,_){function g(){this.constructor=p}if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");d(p,_),p.prototype=_===null?Object.create(_):(g.prototype=_.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Cloth=void 0;var l=r(2),a=r(22),o=r(0),f=r(23),c=r(24),u=function(d){function p(_,g){_===void 0&&(_=1),g===void 0&&(g=0);var h=d.call(this)||this;return h._forceX=0,h._forceY=0,h._forceZ=0,h._dic=new a.Dictionary,h._rigidity=_,h.friction=g,h}return s(p,d),p.prototype.setBounds=function(_,g,h,m,x,y){_===void 0&&(_=Number.NEGATIVE_INFINITY),g===void 0&&(g=Number.POSITIVE_INFINITY),h===void 0&&(h=Number.NEGATIVE_INFINITY),m===void 0&&(m=Number.POSITIVE_INFINITY),x===void 0&&(x=Number.NEGATIVE_INFINITY),y===void 0&&(y=Number.POSITIVE_INFINITY),this._useBounds=!0,this._boundsMinX=_,this._boundsMaxX=g,this._boundsMinY=h,this._boundsMaxY=m,this._boundsMinZ=x,this._boundsMaxZ=y},p.prototype.clearBounds=function(){this._useBounds=!1},Object.defineProperty(p.prototype,"verletVertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"friction",{get:function(){return 100*(this._friction-1)},set:function(_){_<0&&(_=0),this._friction=_/100+1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"rigidity",{get:function(){return this._rigidity},set:function(_){var g,h,m=this._connections.length;for(_>1?_=1:_<0&&(_=0),this._rigidity=_,g=.5*_;h=this._connections[--m];)h.rigidity=g},enumerable:!1,configurable:!0}),p.prototype.setForce=function(_,g,h){this._forceX=_,this._forceY=g,this._forceZ=h},Object.defineProperty(p.prototype,"forceX",{get:function(){return this._forceX},set:function(_){this._forceX=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceY",{get:function(){return this._forceY},set:function(_){this._forceY=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceZ",{get:function(){return this._forceZ},set:function(_){this._forceZ=_},enumerable:!1,configurable:!0}),p.prototype.unlockAll=function(){for(var _,g=this._vertices.length;_=this._vertices[--g];)_.mobileX=!0,_.mobileY=!0,_.mobileZ=!0},p.prototype.lockXMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minX,"x",_,g)},p.prototype.lockXMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxX,"x",_,g)},p.prototype.lockYMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minY,"y",_,g)},p.prototype.lockYMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxY,"y",_,g)},p.prototype.lockZMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minZ,"z",_,g)},p.prototype.lockZMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxZ,"z",_,g)},p.prototype.lockSet=function(_,g,h,m){h===void 0&&(h=0),m===void 0&&(m=7);for(var x,y=this._vertices.length;x=this._vertices[--y];)Math.abs(x[g]-_)<=h&&(m&l.ModConstant.X&&(x.mobileX=!1),m&l.ModConstant.Y&&(x.mobileY=!1),m&l.ModConstant.Z&&(x.mobileZ=!1))},p.prototype.setModifiable=function(_){d.prototype.setModifiable.call(this,_),this.initVerletVertices(),this.initVerletConnections(),this.rigidity=this._rigidity},p.prototype.apply=function(){var _,g,h;for(_=this._connections.length;g=this._connections[--_];)g.update();for(_=this._vertices.length;h=this._vertices[--_];)h.mobileX&&(h.x+=this._forceX),h.mobileY&&(h.y+=this._forceY),h.mobileZ&&(h.z+=this._forceZ),h.velocityX/=this._friction,h.velocityY/=this._friction,h.velocityZ/=this._friction,this._useBounds&&(h.x<this._boundsMinX?h.x=this._boundsMinX:h.x>this._boundsMaxX&&(h.x=this._boundsMaxX),h.y<this._boundsMinY?h.y=this._boundsMinY:h.y>this._boundsMaxY&&(h.y=this._boundsMaxY),h.z<this._boundsMinZ?h.z=this._boundsMinZ:h.z>this._boundsMaxZ&&(h.z=this._boundsMaxZ)),h.update()},p.prototype.initVerletVertices=function(){var _,g=this.mod.getVertices(),h=g.length;for(this._vertices=[];_=g[--h];){var m=new c.VerletVertex(_);this._vertices.push(m),this._dic.setVal(_,m)}},p.prototype.initVerletConnections=function(){var _,g,h,m=this.mod.getFaces(),x=m.length;this._connections=[];for(var y=0;y<x;y++){_=m[y],g=_.vertices,h=g.length;for(var T=0;T<h-1;T++)this.createConnection(this._dic.getVal(g[T]),this._dic.getVal(g[T+1])),T>1&&this.createConnection(this._dic.getVal(g[0]),this._dic.getVal(g[T]));this.createConnection(this._dic.getVal(g[h-1]),this._dic.getVal(g[0]))}},p.prototype.createConnection=function(_,g){if(_&&g){var h=_.distanceTo(g),m=new f.VerletConnection(_,g,h,this._rigidity);this._connections.push(m)}},p}(o.Modifier);n.Cloth=u},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Dictionary=void 0;var s=function(){function l(){this.dic={}}return l.prototype.setVal=function(a,o){var f=this.getKey(a);this.dic[f]=o},l.prototype.getVal=function(a){var o=this.getKey(a);return this.dic[o]},l.prototype.getKey=function(a){if(typeof a=="object"){if(a.id)return a.id;var o="d_"+Math.floor(Math.random()*Math.pow(10,10));return a.id=o,o}return a+""},l}();n.Dictionary=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletConnection=void 0;var s=function(){function l(a,o,f,c){c===void 0&&(c=.5),this._rigidity=.5,this._v1=a,this._v2=o,this._strictDistance=f,this._rigidity=c}return Object.defineProperty(l.prototype,"rigidity",{get:function(){return this._rigidity},set:function(a){this._rigidity=a},enumerable:!1,configurable:!0}),l.prototype.update=function(){var a,o,f,c,u=this._v1.x,d=this._v2.x,p=this._v1.y,_=this._v2.y,g=this._v1.z,h=this._v2.z,m=d-u,x=_-p,y=h-g,T=Math.sqrt(m*m+x*x+y*y);T!=this._strictDistance&&(a=(this._strictDistance-T)/T*this._rigidity,o=a*m,f=a*x,c=a*y,this._v1.mobileX&&this._v2.mobileX||(o*=2),this._v1.mobileY&&this._v2.mobileY||(f*=2),this._v1.mobileZ&&this._v2.mobileZ||(c*=2),this._v1.mobileX&&(this._v1.x-=o),this._v1.mobileY&&(this._v1.y-=f),this._v1.mobileZ&&(this._v1.z-=c),this._v2.mobileX&&(this._v2.x+=o),this._v2.mobileY&&(this._v2.y+=f),this._v2.mobileZ&&(this._v2.z+=c))},l}();n.VerletConnection=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletVertex=void 0;var s=function(){function l(a){this.mobileX=!0,this.mobileY=!0,this.mobileZ=!0,this._v=a,this.setPosition(this._v.x,this._v.y,this._v.z)}return l.prototype.setPosition=function(a,o,f){this._x=this._oldX=a,this._y=this._oldY=o,this._z=this._oldZ=f,this._v.x=a,this._v.y=o,this._v.z=f},l.prototype.update=function(){var a,o,f;this.mobileX&&(a=this.x,this.x+=this.velocityX,this._oldX=a),this.mobileY&&(o=this.y,this.y+=this.velocityY,this._oldY=o),this.mobileZ&&(f=this.z,this.z+=this.velocityZ,this._oldZ=f)},Object.defineProperty(l.prototype,"x",{get:function(){return this._x},set:function(a){this._x=a,this.mobileX||(this._oldX=a),this._v.x=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"y",{get:function(){return this._y},set:function(a){this._y=a,this.mobileY||(this._oldY=a),this._v.y=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"z",{get:function(){return this._z},set:function(a){this._z=a,this.mobileZ||(this._oldZ=a),this._v.z=a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityX",{get:function(){return this._x-this._oldX},set:function(a){this._oldX=this._x-a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityY",{get:function(){return this._y-this._oldY},set:function(a){this._oldY=this._y-a},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityZ",{get:function(){return this._z-this._oldZ},set:function(a){this._oldZ=this._z-a},enumerable:!1,configurable:!0}),l.prototype.distanceTo=function(a){return Math.sqrt((this.x-a.x)*(this.x-a.x)+(this.y-a.y)*(this.y-a.y)+(this.z-a.z)*(this.z-a.z))},l}();n.VerletVertex=s},function(t,n,r){var s=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Noise=void 0;var l=r(2),a=r(0),o=function(f){function c(u){u===void 0&&(u=0);var d=f.call(this)||this;return d.axc=l.ModConstant.NONE,d.start=0,d.end=0,d.frc=u,d}return s(c,f),Object.defineProperty(c.prototype,"force",{get:function(){return this.frc},set:function(u){this.frc=u},enumerable:!1,configurable:!0}),c.prototype.constraintAxes=function(u){this.axc=u},c.prototype.setFalloff=function(u,d){u===void 0&&(u=0),d===void 0&&(d=1),this.start=u,this.end=d},c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p],g=Math.random()*this.force-this.force/2,h=_.getRatio(this.mod.maxAxis);this.start<this.end?(h<this.start&&(h=0),h>this.end&&(h=1)):this.start>this.end?(h=1-h,h>this.start&&(h=0),h<this.end&&(h=1)):h=1,1&this.axc||(_.x+=g*h),this.axc>>1&1||(_.y+=g*h),this.axc>>2&1||(_.z+=g*h)}},c}(a.Modifier);n.Noise=o},function(t,n,r){var s=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Pivot=void 0;var l=r(1),a=r(0),o=function(f){function c(u,d,p){u===void 0&&(u=0),d===void 0&&(d=0),p===void 0&&(p=0);var _=f.call(this)||this;return _.pivot=new l.Vector3(u,d,p),_}return s(c,f),c.prototype.setMeshCenter=function(){var u=-(this.mod.minX+this.mod.width/2),d=-(this.mod.minY+this.mod.height/2),p=-(this.mod.minZ+this.mod.depth/2);this.pivot=new l.Vector3(u,d,p)},c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p];_.vector=_.vector.add(this.pivot)}var g=this.pivot.clone();this.mod.updateMeshPosition(g.negate())},c}(a.Modifier);n.Pivot=o},function(t,n,r){var s=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Skew=void 0;var l=r(3),a=r(2),o=r(0),f=function(c){function u(d){d===void 0&&(d=0);var p=c.call(this)||this;return p._offset=.5,p._constraint=a.ModConstant.NONE,p._power=1,p._falloff=1,p._inverseFalloff=!1,p._oneSide=!1,p._swapAxes=!1,p._force=d,p}return s(u,c),u.prototype.setModifiable=function(d){c.prototype.setModifiable.call(this,d),this._skewAxis=this._skewAxis||d.maxAxis},u.prototype.apply=function(){for(var d=this.mod.getVertices(),p=d.length,_=0;_<p;_++){var g=d[_];if(!(this._constraint==a.ModConstant.LEFT&&g.getRatio(this._skewAxis)<=this._offset)&&!(this._constraint==a.ModConstant.RIGHT&&g.getRatio(this._skewAxis)>this._offset)){var h=g.getRatio(this._skewAxis)-this._offset;this._oneSide&&(h=Math.abs(h));var m=g.getRatio(this.displaceAxis);this._inverseFalloff&&(m=1-m);var x=this._falloff+m*(1-this._falloff),y=Math.pow(Math.abs(h),this._power)*l.TMath.sign(h,1),T=g.getValue(this.displaceAxis)+this.force*y*x;g.setValue(this.displaceAxis,T)}}},Object.defineProperty(u.prototype,"displaceAxis",{get:function(){switch(this._skewAxis){case a.ModConstant.X:return this._swapAxes?a.ModConstant.Z:a.ModConstant.Y;case a.ModConstant.Y:return this._swapAxes?a.ModConstant.Z:a.ModConstant.X;case a.ModConstant.Z:return this._swapAxes?a.ModConstant.Y:a.ModConstant.X;default:return 0}},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"force",{get:function(){return this._force},set:function(d){this._force=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"constraint",{get:function(){return this._constraint},set:function(d){this._constraint=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"offset",{get:function(){return this._offset},set:function(d){this._offset=l.TMath.trim(0,1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"power",{get:function(){return this._power},set:function(d){this._power=Math.max(1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"falloff",{get:function(){return this._falloff},set:function(d){this._falloff=l.TMath.trim(0,1,d)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"oneSide",{get:function(){return this._oneSide},set:function(d){this._oneSide=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"skewAxis",{get:function(){return this._skewAxis},set:function(d){this._skewAxis=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"swapAxes",{get:function(){return this._swapAxes},set:function(d){this._swapAxes=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"inverseFalloff",{get:function(){return this._inverseFalloff},set:function(d){this._inverseFalloff=d},enumerable:!1,configurable:!0}),u}(o.Modifier);n.Skew=f},function(t,n,r){var s=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Taper=void 0;var l=r(4),a=r(1),o=r(0),f=function(c){function u(d){var p=c.call(this)||this;return p.start=0,p.end=1,p._vector=new a.Vector3(1,0,1),p._vector2=new a.Vector3(0,1,0),p.frc=d,p.pow=1,p}return s(u,c),u.prototype.setFalloff=function(d,p){d===void 0&&(d=0),p===void 0&&(p=1),this.start=d,this.end=p},Object.defineProperty(u.prototype,"force",{get:function(){return this.frc},set:function(d){this.frc=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"power",{get:function(){return this.pow},set:function(d){this.pow=d},enumerable:!1,configurable:!0}),u.prototype.apply=function(){for(var d=this.mod.getVertices(),p=d.length,_=0;_<p;_++){var g=d[_],h=g.ratioVector.multiply(this._vector2),m=this.frc*Math.pow(h.magnitude,this.pow),x=l.Matrix4.scaleMatrix(1+m*this._vector.x,1+m*this._vector.y,1+m*this._vector.z),y=g.vector;l.Matrix4.multiplyVector(x,y),g.vector=y}},u}(o.Modifier);n.Taper=f},function(t,n,r){var s=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Twist=void 0;var l=r(4),a=r(1),o=r(0),f=function(c){function u(d){d===void 0&&(d=0);var p=c.call(this)||this;return p._vector=new a.Vector3(0,1,0),p.center=a.Vector3.ZERO,p._angle=d,p}return s(u,c),Object.defineProperty(u.prototype,"angle",{get:function(){return this._angle},set:function(d){this._angle=d},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"vector",{get:function(){return this._vector},set:function(d){this._vector=d},enumerable:!1,configurable:!0}),u.prototype.apply=function(){this._vector.normalize();for(var d=new a.Vector3(this.mod.maxX/2,this.mod.maxY/2,this.mod.maxZ/2),p=-a.Vector3.dot(this._vector,this.center),_=0;_<this.mod.getVertices().length;_++){var g=this.mod.getVertices()[_],h=a.Vector3.dot(new a.Vector3(g.x,g.y,g.z),this._vector)+p;this.twistPoint(g,h/d.magnitude*this._angle)}},u.prototype.twistPoint=function(d,p){var _=l.Matrix4.translationMatrix(d.x,d.y,d.z);_=l.Matrix4.multiply(l.Matrix4.rotationMatrix(this._vector.x,this._vector.y,this._vector.z,p),_),d.x=_.n14,d.y=_.n24,d.z=_.n34},u}(o.Modifier);n.Twist=f},function(t,n,r){var s=this&&this.__extends||function(){var c=function(u,d){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(u,d)};return function(u,d){function p(){this.constructor=u}if(typeof d!="function"&&d!==null)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");c(u,d),u.prototype=d===null?Object.create(d):(p.prototype=d.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Wheel=void 0;var l=r(4),a=r(1),o=r(0),f=function(c){function u(){var d=c.call(this)||this;return d.steerVector=new a.Vector3(0,1,0),d.rollVector=new a.Vector3(0,0,1),d.speed=0,d.turn=0,d.roll=0,d}return s(u,c),u.prototype.setModifiable=function(d){c.prototype.setModifiable.call(this,d),this._radius=d.width/2},u.prototype.apply=function(){this.roll+=this.speed;var d,p,_=this.mod.getVertices(),g=_.length;if(this.turn!=0){p=l.Matrix4.rotationMatrix(this.steerVector.x,this.steerVector.y,this.steerVector.z,this.turn);var h=this.rollVector.clone();l.Matrix4.multiplyVector(p,h),d=l.Matrix4.rotationMatrix(h.x,h.y,h.z,this.roll)}else d=l.Matrix4.rotationMatrix(this.rollVector.x,this.rollVector.y,this.rollVector.z,this.roll);for(var m=0;m<g;m++){var x=_[m],y=x.vector.clone();this.turn!=0&&l.Matrix4.multiplyVector(p,y),l.Matrix4.multiplyVector(d,y),x.x=y.x,x.y=y.y,x.z=y.z}},Object.defineProperty(u.prototype,"step",{get:function(){return this._radius*this.speed/Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"perimeter",{get:function(){return 2*this._radius*Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),u}(o.Modifier);n.Wheel=f},function(t,n,r){var s=this&&this.__extends||function(){var f=function(c,u){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,p){d.__proto__=p}||function(d,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])})(c,u)};return function(c,u){function d(){this.constructor=c}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");f(c,u),c.prototype=u===null?Object.create(u):(d.prototype=u.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.UserDefined=void 0;var l=r(0),a=r(32),o=function(f){function c(){var u=f.call(this)||this;return u.eventEmitter=new a.EventEmitter,u}return s(c,f),c.prototype.apply=function(){for(var u=this.mod.getVertices(),d=u.length,p=0;p<d;p++){var _=u[p];this.renderVector&&this.renderVector(_,p,d)}this.dispatchEvent("CHANGE")},c.prototype.addEventListener=function(u,d){this.eventEmitter.on(u,d)},c.prototype.dispatchEvent=function(u){return this.eventEmitter.emit(u)},c.prototype.hasEventListener=function(u){return this.eventEmitter.has(u)},c.prototype.removeEventListener=function(u,d){this.eventEmitter.off(u,d)},c}(l.Modifier);n.UserDefined=o},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.EventEmitter=void 0;var s=function(){function a(){}return a.prototype.on=function(o,f){return l||(l={}),l[o]||(l[o]=[]),l[o].push(f),f},a.prototype.emit=function(o){for(var f=[],c=1;c<arguments.length;c++)f[c-1]=arguments[c];var u=!1;if(o&&l){var d=l[o];if(!d)return u;d=d.slice();var p=d.length,_=Array.prototype.slice.call(arguments);for(_.shift();p--;){var g=d[p];u=u||g.apply(null,_)}}return!!u},a.prototype.one=function(o,f){var c=this,u=Array.prototype.slice.call(arguments,2),d=function(){c.off(o,d),f.apply(null,u)};this.on(o,d)},a.prototype.has=function(o){return!(!l||!l[o])},a.prototype.off=function(o,f){if(l&&l[o]){for(var c=l[o],u=0,d=c.length;u<d;u++)if(c[u].toString()==f.toString()){d==1?delete l[o]:c.splice(u,1);break}}},a.prototype.offAll=function(o){o?l&&delete l[o]:l=null},a}();n.EventEmitter=s;var l}])})})(Hl);var Zt=Hl.exports;class Fm extends Zt.UserDefined{constructor(e=Zt.ModConstant.Y,t=Zt.ModConstant.X,n=.5,r=.5,s=.5){super(),this.elevationAxis=e,this.alongAxis=t,this.effectRange=n,this.effectMid=r,this.elevationHeight=s,this.intensity=1,this.renderVector=this._renderVector}_renderVector(e,t,n){let r=e.getRatio(this.alongAxis),s=e.getValue(this.elevationAxis);if(r<=this.effectRange){r/=this.effectRange;let l=0;r<this.effectMid?(r=r/this.effectMid,l=Math.sqrt(1-Math.pow(r,2)+r*2-1)):(r=(r-this.effectMid)/(1-this.effectMid),l=(Math.cos(r*Math.PI)- -1)/2),e.setValue(this.elevationAxis,s+l*this.elevationHeight*this.intensity)}}}const ko=i=>{for(var e=i.attributes.uv,t=0;t<e.count;t++){var n=e.getX(t),r=e.getY(t);e.setXY(t,1-n,r)}return i},Ui=new La({color:"#ffffff"});class Bm extends kt{constructor(e=10){super();let t=new kt(Nm([ko(new bi(1,1,e,e)),ko(new bi(1,1,e,e).rotateY(Math.PI))],!0),[Ui,Ui]);t.castShadow=!0,t.receiveShadow=!0,t.rotateX(Math.PI/2),t.position.x=.5,this.scale.z=-1,this.add(t),this.page=t,this.modifiers=new Zt.ModifierStack(t),this.bend=new Zt.Bend(0,0,0),this.bend.constraint=Zt.ModConstant.LEFT,this.twist=new Zt.Twist(0),this.twist.vector=new Zt.Vector3(2,0,0),this.twist.center=new Zt.Vector3(-.5,0,0),this.pageCurve=new Fm(Zt.ModConstant.Z,Zt.ModConstant.X,.812,.325,.054),this.modifiers.addModifier(this.pageCurve),this.modifiers.addModifier(this.bend),this.modifiers.addModifier(this.twist)}setPageMaterial(e,t){this.page.material[t]=e}flip(e,t,n=1){this.rotation.z=Math.PI*e,this.bend.force=Math.min(-Math.sin(this.rotation.z)/2,-1e-4)*t,this.twist.angle=Math.sin(this.rotation.z)/10,this.pageCurve.intensity=(-1+2*e)*(-Math.sin(this.rotation.z)+1)*n,this.modifiers.apply()}disposeMaterial(e){const t=this.page.material[e];t!==Ui&&t.dispose()}reset(){this.setPageMaterial(Ui,0),this.setPageMaterial(Ui,1)}dispose(e=!1){e&&(this.disposeMaterial(0),this.disposeMaterial(1)),this.page.geometry.dispose(),this.modifiers.destroy()}}const zo=function(){var i;return()=>{if(!i){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,e.width,0);n.addColorStop(0,"black"),n.addColorStop(.1,"white"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),i=new pm(e),e.remove()}return i}}();class km extends kt{constructor(e){super(),this.pages=[],this.pool=[],this._url2Loader=new Map,this._currentProgress=0,this._flipDuration=(e==null?void 0:e.flipDuration)||1,this._ySpacing=(e==null?void 0:e.yBetweenPages)||.001,this._pageSubdivisions=(e==null?void 0:e.pageSubdivisions)||20,this.currentPage=0}[Symbol.iterator](){let e=0;return{next:()=>e<this.pages.length?{value:this.pages[e++],done:!1}:{value:null,done:!0}}}setPages(e){for(e.length%2!==0&&e.push("");this.pages.length;){let n=this.pages.pop();n.reset(),this.pool.push(n),this.remove(n)}let t=Promise.resolve();for(let n=0;n<e.length;n+=2){const r=e[n],s=e[n+1];let l=this.pool.pop();l||(l=new Bm(this._pageSubdivisions)),this.add(l),l.position.y=-this._ySpacing*this.pages.length,this.pages.push(l),l.name=`Page#${this.pages.length}`,t=t.then(this.loadPages(r,s,l))}this.currentPage>this.pages.length*2-1&&(this._currentPage=this.pages.length*2-1,this._currentProgress=this.pages.length),this.flipPages()}get totalPages(){return this.pages.length*2}loadPages(e,t,n){return()=>Promise.all([this.loadPage(e,1,n),this.loadPage(t,0,n)])}loadPage(e,t,n){if(!e||e===""){const s=new La({color:"white",roughness:.2,aoMapIntensity:.7,aoMap:t==1?zo():null});return n.setPageMaterial(s,t),Promise.resolve()}if(e instanceof Si)return n.setPageMaterial(e,t),Promise.resolve();const r=e;return this._url2Loader.has(r)||this._url2Loader.set(r,new Promise((s,l)=>{new xm().load(e,function(a){a.magFilter=Ct,a.minFilter=Ct,a.generateMipmaps=!1,a.colorSpace=yt;const o=new La({color:"white",map:a,roughness:.2,aoMapIntensity:.7,aoMap:t==1?zo():null,toneMapped:!1});s(o)},void 0,a=>{s(null)})})),this._url2Loader.get(r).then(s=>{n.setPageMaterial(s,t)})}get currentPage(){return this._currentPage}set currentPage(e){let t=Math.ceil(e/2),n=t-this._currentProgress;this._stepSize=n/this._flipDuration,this._flipDirection=this._stepSize>0?1:-1,this._currentPage=Math.ceil(e),this._goalProgress=t,this.flipPages()}get progress(){return this._currentProgress}set progress(e){let t=this._currentProgress;this._currentProgress=Math.max(0,Math.min(e,this.pages.length)),this._currentPage=Math.floor(this._currentProgress*2),this._stepSize=0,this._flipDirection=this._currentProgress>t?1:-1,this.flipPages()}animate(e){this._stepSize!=0&&(this._currentProgress+=this._stepSize*e,(this._stepSize>0&&this._currentProgress>this._goalProgress||this._stepSize<0&&this._currentProgress<this._goalProgress)&&(this._currentProgress=this._goalProgress,this._stepSize=0),this.flipPages())}flipPage(e){var t=this.pages.indexOf(e);if(t<0)throw new ReferenceError("I don't own that page! Not mine!");const n=t*2,r=n+1;this.currentPage=this._currentPage<=n?r:n}nextPage(){this.currentPage=Math.min(Math.ceil(this.currentPage/2)+1,this.pages.length)*2}previousPage(){this.currentPage=Math.max(Math.ceil(this.currentPage/2)-1,0)*2}flipPages(){const e=this.pages.length;let t=this._currentProgress%1,n=Math.floor(this._currentProgress);for(let s=0;s<e;s++){const l=this.pages[s],a=n<s?0:n>s?1:t,o=a<.5?0:(a-.5)/.5,f=-this._ySpacing*(e-s),c=-this._ySpacing*s,u=this._currentProgress<1?t:this._currentProgress>=e?0:this._currentProgress>=e-1?1-t:1;l.flip(a,this._flipDirection,u),l.position.y=c+o*(f-c)}const r=n==0?-.5+.5*t:n==e-1?.5*t:n==e?.5:0;this.position.x=r*this.scale.x}dispose(){for(;this.pages.length;){let e=this.pages.pop();this.remove(e)}for(;this.pool.length;)this.pool.pop().dispose(!0);this._url2Loader.forEach(e=>e.then(t=>t.dispose())),this._url2Loader.clear()}}window.download=function(i,e,t){var n=window,r="application/octet-stream",s=t||r,l=i,a=document,o=a.createElement("a"),f=function(x){return String(x)},c=n.Blob||n.MozBlob||n.WebKitBlob||f,u=n.MSBlobBuilder||n.WebKitBlobBuilder||n.BlobBuilder,d=e||"download",p,_,g;if(String(this)==="true"&&(l=[l,s],s=l[0],l=l[1]),String(l).match(/^data\:[\w+\-]+\/[\w+\-]+[,;]/))return navigator.msSaveBlob?navigator.msSaveBlob(h(l),d):m(l);try{p=l instanceof c?l:new c([l],{type:s})}catch{u&&(_=new u,_.append([l]),p=_.getBlob(s))}function h(x){var y=x.split(/[:;,]/),T=y[1],w=y[2]=="base64"?atob:decodeURIComponent,M=w(y.pop()),S=M.length,I=0,U=new Uint8Array(S);for(I;I<S;++I)U[I]=M.charCodeAt(I);return new c([U],{type:T})}function m(x,y){if("download"in o)return o.href=x,o.setAttribute("download",d),o.innerHTML="downloading...",o.style.display="none",a.body.appendChild(o),setTimeout(function(){o.click(),a.body.removeChild(o),y===!0&&setTimeout(function(){n.URL.revokeObjectURL(o.href)},250)},66),!0;var T=a.createElement("iframe");a.body.appendChild(T),y||(x="data:"+x.replace(/^data:([\w\/\-\+]+)/,r)),T.src=x,setTimeout(function(){a.body.removeChild(T)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(p,d);if(n.URL)m(n.URL.createObjectURL(p),!0);else{if(typeof p=="string"||p.constructor===f)try{return m("data:"+s+";base64,"+n.btoa(p))}catch{return m("data:"+s+","+encodeURIComponent(p))}g=new FileReader,g.onload=function(x){m(this.result)},g.readAsDataURL(p)}return!0};(function(){var i=function(e){this.data=new Uint8Array(e),this.pos=0};i.prototype.seek=function(e){this.pos=e},i.prototype.writeBytes=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e[t]},i.prototype.writeByte=function(e){this.data[this.pos++]=e},i.prototype.writeU8=i.prototype.writeByte,i.prototype.writeU16BE=function(e){this.data[this.pos++]=e>>8,this.data[this.pos++]=e},i.prototype.writeDoubleBE=function(e){for(var t=new Uint8Array(new Float64Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeFloatBE=function(e){for(var t=new Uint8Array(new Float32Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeString=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e.charCodeAt(t)},i.prototype.writeEBMLVarIntWidth=function(e,t){switch(t){case 1:this.writeU8(128|e);break;case 2:this.writeU8(64|e>>8),this.writeU8(e);break;case 3:this.writeU8(32|e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 4:this.writeU8(16|e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 5:this.writeU8(8|e/4294967296&7),this.writeU8(e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;default:throw new RuntimeException("Bad EBML VINT size "+t)}},i.prototype.measureEBMLVarInt=function(e){if(e<128-1)return 1;if(e<16384-1)return 2;if(e<(1<<21)-1)return 3;if(e<(1<<28)-1)return 4;if(e<34359738367)return 5;throw new RuntimeException("EBML VINT size not supported "+e)},i.prototype.writeEBMLVarInt=function(e){this.writeEBMLVarIntWidth(e,this.measureEBMLVarInt(e))},i.prototype.writeUnsignedIntBE=function(e,t){switch(t===void 0&&(t=this.measureUnsignedInt(e)),t){case 5:this.writeU8(Math.floor(e/4294967296));case 4:this.writeU8(e>>24);case 3:this.writeU8(e>>16);case 2:this.writeU8(e>>8);case 1:this.writeU8(e);break;default:throw new RuntimeException("Bad UINT size "+t)}},i.prototype.measureUnsignedInt=function(e){return e<256?1:e<65536?2:e<1<<24?3:e<4294967296?4:5},i.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw"ArrayBufferDataStream's pos lies beyond end of buffer"},window.ArrayBufferDataStream=i})();(function(){var i=function(e){return function(t){var n=[],r=Promise.resolve(),s=null,l=null;typeof FileWriter<"u"&&t instanceof FileWriter?s=t:e&&t&&(l=t),this.pos=0,this.length=0;function a(c){return new Promise(function(u,d){var p=new FileReader;p.addEventListener("loadend",function(){u(p.result)}),p.readAsArrayBuffer(c)})}function o(c){return new Promise(function(u,d){c instanceof Uint8Array?u(c):c instanceof ArrayBuffer||ArrayBuffer.isView(c)?u(new Uint8Array(c)):c instanceof Blob?u(a(c).then(function(p){return new Uint8Array(p)})):u(a(new Blob([c])).then(function(p){return new Uint8Array(p)}))})}function f(c){var u=c.byteLength||c.length||c.size;if(!Number.isInteger(u))throw"Failed to determine size of element";return u}this.seek=function(c){if(c<0)throw"Offset may not be negative";if(isNaN(c))throw"Offset may not be NaN";if(c>this.length)throw"Seeking beyond the end of file is not allowed";this.pos=c},this.write=function(c){var u={offset:this.pos,data:c,length:f(c)},d=u.offset>=this.length;this.pos+=u.length,this.length=Math.max(this.length,this.pos),r=r.then(function(){if(l)return new Promise(function(g,h){o(u.data).then(function(m){var x=0,y=Buffer.from(m.buffer),T=function(w,M,S){x+=M,x>=S.length?g():e.write(l,S,x,S.length-x,u.offset+x,T)};e.write(l,y,0,y.length,u.offset,T)})});if(s)return new Promise(function(g,h){s.onwriteend=g,s.seek(u.offset),s.write(new Blob([u.data]))});if(!d)for(var p=0;p<n.length;p++){var _=n[p];if(!(u.offset+u.length<=_.offset||u.offset>=_.offset+_.length)){if(u.offset<_.offset||u.offset+u.length>_.offset+_.length)throw new Error("Overwrite crosses blob boundaries");if(u.offset==_.offset&&u.length==_.length){_.data=u.data;return}else return o(_.data).then(function(g){return _.data=g,o(u.data)}).then(function(g){u.data=g,_.data.set(u.data,u.offset-_.offset)})}}n.push(u)})},this.complete=function(c){return l||s?r=r.then(function(){return null}):r=r.then(function(){for(var u=[],d=0;d<n.length;d++)u.push(n[d].data);return new Blob(u,{mimeType:c})}),r}}};window.BlobBuffer=i(null)})();(function(){var i=function(e,t){function n(c,u){var d={};return[c,u].forEach(function(p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(d[_]=p[_])}),d}function r(c){return typeof c!="string"||!c.match(/^data:image\/webp;base64,/i)?!1:window.atob(c.substring(23))}function s(c,u){var d=c.toDataURL("image/webp",{quality:u});return r(d)}function l(c){var u=c.indexOf("VP8 ");if(u==-1)throw"Failed to identify beginning of keyframe in WebP image";return u+=8,c.substring(u)}function a(c){this.value=c}function o(c){this.value=c}function f(c,u,d){if(Array.isArray(d))for(var p=0;p<d.length;p++)f(c,u,d[p]);else if(typeof d=="string")c.writeString(d);else if(d instanceof Uint8Array)c.writeBytes(d);else if(d.id)if(d.offset=c.pos+u,c.writeUnsignedIntBE(d.id),Array.isArray(d.data)){var _,g,h;d.size===-1?c.writeByte(255):(_=c.pos,c.writeBytes([0,0,0,0])),g=c.pos,d.dataOffset=g+u,f(c,u,d.data),d.size!==-1&&(h=c.pos,d.size=h-g,c.seek(_),c.writeEBMLVarIntWidth(d.size,4),c.seek(h))}else if(typeof d.data=="string")c.writeEBMLVarInt(d.data.length),d.dataOffset=c.pos+u,c.writeString(d.data);else if(typeof d.data=="number")d.size||(d.size=c.measureUnsignedInt(d.data)),c.writeEBMLVarInt(d.size),d.dataOffset=c.pos+u,c.writeUnsignedIntBE(d.data,d.size);else if(d.data instanceof o)c.writeEBMLVarInt(8),d.dataOffset=c.pos+u,c.writeDoubleBE(d.data.value);else if(d.data instanceof a)c.writeEBMLVarInt(4),d.dataOffset=c.pos+u,c.writeFloatBE(d.data.value);else if(d.data instanceof Uint8Array)c.writeEBMLVarInt(d.data.byteLength),d.dataOffset=c.pos+u,c.writeBytes(d.data);else throw"Bad EBML datatype "+typeof d.data;else throw"Bad EBML datatype "+typeof d.data}return function(c){var u=5e3,d=1,p=!1,_,g,h=[],m=0,x=0,y={quality:.95,fileWriter:null,fd:null,frameDuration:null,frameRate:null},T={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},w,M={id:17545,data:new o(0)},S,I=[],U=new t(c.fileWriter||c.fd);function b(Y){return Y-w.dataOffset}function L(){var Y={id:21420,size:5,data:0},he={id:290298740,data:[]};for(var W in T){var ce=T[W];ce.positionEBML=Object.create(Y),he.data.push({id:19899,data:[{id:21419,data:ce.id},ce.positionEBML]})}return he}function F(){S=L();var Y={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},he={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},M]},W={id:374648427,data:[{id:174,data:[{id:215,data:d},{id:29637,data:d},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:[{id:176,data:_},{id:186,data:g}]}]}]};w={id:408125543,size:-1,data:[S,he,W]};var ce=new e(256);f(ce,U.pos,[Y,w]),U.write(ce.getAsDataArray()),T.SegmentInfo.positionEBML.data=b(he.offset),T.Tracks.positionEBML.data=b(W.offset)}function j(Y){var he=new e(4);if(!(Y.trackNumber>0&&Y.trackNumber<127))throw"TrackNumber must be > 0 and < 127";return he.writeEBMLVarInt(Y.trackNumber),he.writeU16BE(Y.timecode),he.writeByte(128),{id:163,data:[he.getAsDataArray(),Y.frame]}}function N(Y){return{id:524531317,data:[{id:231,data:Math.round(Y.timecode)}]}}function G(Y,he,W){I.push({id:187,data:[{id:179,data:he},{id:183,data:[{id:247,data:Y},{id:241,data:b(W)}]}]})}function z(){var Y={id:475249515,data:I},he=new e(16+I.length*32);f(he,U.pos,Y),U.write(he.getAsDataArray()),T.Cues.positionEBML.data=b(Y.offset)}function ee(){if(h.length!=0){for(var Y=0,he=0;he<h.length;he++)Y+=h[he].frame.length;for(var W=new e(Y+h.length*32),ce=N({timecode:Math.round(m)}),he=0;he<h.length;he++)ce.data.push(j(h[he]));f(W,U.pos,ce),U.write(W.getAsDataArray()),G(d,Math.round(m),ce.offset),h=[],m+=x,x=0}}function V(){if(!c.frameDuration)if(c.frameRate)c.frameDuration=1e3/c.frameRate;else throw"Missing required frameDuration or frameRate setting"}function re(Y){Y.trackNumber=d,Y.timecode=Math.round(x),h.push(Y),x+=Y.duration,x>=u&&ee()}function oe(){var Y=new e(S.size),he=U.pos;f(Y,S.dataOffset,S.data),U.seek(S.dataOffset),U.write(Y.getAsDataArray()),U.seek(he)}function ue(){var Y=new e(8),he=U.pos;Y.writeDoubleBE(m),U.seek(M.dataOffset),U.write(Y.getAsDataArray()),U.seek(he)}this.addFrame=function(Y){if(p){if(Y.width!=_||Y.height!=g)throw"Frame size differs from previous frames"}else _=Y.width,g=Y.height,F(),p=!0;var he=s(Y,{quality:c.quality});if(!he)throw"Couldn't decode WebP frame, does the browser support WebP?";re({frame:l(he),duration:c.frameDuration})},this.complete=function(){return ee(),z(),oe(),ue(),U.complete("video/webm")},this.getWrittenSize=function(){return U.length},c=n(y,c||{}),V()}};window.WebMWriter=i(ArrayBufferDataStream,BlobBuffer)})();(function(){var i={function:!0,object:!0};function e(M){return M&&M.Object===Object?M:null}var t=i[typeof Oi]&&Oi&&!Oi.nodeType?Oi:void 0,n=i[typeof Ni]&&Ni&&!Ni.nodeType?Ni:void 0,r=n&&n.exports===t?t:void 0,s=e(t&&n&&typeof global=="object"&&global),l=e(i[typeof self]&&self),a=e(i[typeof window]&&window),o=e(i[typeof this]&&this),f=s||a!==(o&&o.window)&&a||l||o||Function("return this")();"gc"in window||(window.gc=function(){}),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(M,S,I){for(var U=atob(this.toDataURL(S,I).split(",")[1]),b=U.length,L=new Uint8Array(b),F=0;F<b;F++)L[F]=U.charCodeAt(F);M(new Blob([L],{type:S||"image/png"}))}});// @license http://opensource.org/licenses/MIT
(function(){if("performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var M=Date.now();performance.timing&&performance.timing.navigationStart&&(M=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-M}}})();function c(M){return("0000000"+M).slice(-7)}var u=window.Date.now();function d(){function M(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return M()+M()+"-"+M()+"-"+M()+"-"+M()+"-"+M()+M()+M()}function p(M){var S={};this.settings=M,this.on=function(I,U){S[I]=U},this.emit=function(I){var U=S[I];U&&U.apply(null,Array.prototype.slice.call(arguments,1))},this.filename=M.name||d(),this.extension="",this.mimeType=""}p.prototype.start=function(){},p.prototype.stop=function(){},p.prototype.add=function(){},p.prototype.save=function(){},p.prototype.dispose=function(){},p.prototype.safeToProceed=function(){return!0},p.prototype.step=function(){console.log("Step not set!")};function _(M){p.call(this,M),this.extension=".tar",this.mimeType="application/x-tar",this.fileExtension="",this.tape=null,this.count=0}_.prototype=Object.create(p.prototype),_.prototype.start=function(){this.dispose()},_.prototype.add=function(M){var S=new FileReader;S.onload=(function(){this.tape.append(c(this.count)+this.fileExtension,new Uint8Array(S.result)),this.count++,this.step()}).bind(this),S.readAsArrayBuffer(M)},_.prototype.save=function(M){M(this.tape.save())},_.prototype.dispose=function(){this.tape=new Tar,this.count=0};function g(M){_.call(this,M),this.type="image/png",this.fileExtension=".png"}g.prototype=Object.create(_.prototype),g.prototype.add=function(M){M.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type)};function h(M){_.call(this,M),this.type="image/jpeg",this.fileExtension=".jpg",this.quality=M.quality/100||.8}h.prototype=Object.create(_.prototype),h.prototype.add=function(M){M.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type,this.quality)};function m(M){var S=document.createElement("canvas");S.toDataURL("image/webp").substr(5,10)!=="image/webp"&&console.log("WebP not supported - try another export format"),p.call(this,M),this.quality=M.quality/100||.8,this.extension=".webm",this.mimeType="video/webm",this.baseFilename=this.filename,this.frames=[],this.part=1,this.videoWriter=new WebMWriter({quality:this.quality,fileWriter:null,fd:null,frameRate:M.framerate})}m.prototype=Object.create(p.prototype),m.prototype.start=function(M){this.dispose()},m.prototype.add=function(M){this.videoWriter.addFrame(M),this.settings.autoSaveTime>0&&this.frames.length/this.settings.framerate>=this.settings.autoSaveTime?this.save((function(S){this.filename=this.baseFilename+"-part-"+c(this.part),download(S,this.filename+this.extension,this.mimeType),this.dispose(),this.part++,this.filename=this.baseFilename+"-part-"+c(this.part),this.step()}).bind(this)):this.step()},m.prototype.save=function(M){this.videoWriter.complete().then(M)},m.prototype.dispose=function(M){this.frames=[]};function x(M){p.call(this,M),M.quality=M.quality/100||.8,this.encoder=new FFMpegServer.Video(M),this.encoder.on("process",(function(){this.emit("process")}).bind(this)),this.encoder.on("finished",(function(S,I){var U=this.callback;U&&(this.callback=void 0,U(S,I))}).bind(this)),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("error",(function(S){alert(JSON.stringify(S,null,2))}).bind(this))}x.prototype=Object.create(p.prototype),x.prototype.start=function(){this.encoder.start(this.settings)},x.prototype.add=function(M){this.encoder.add(M)},x.prototype.save=function(M){this.callback=M,this.encoder.end()},x.prototype.safeToProceed=function(){return this.encoder.safeToProceed()};function y(M){p.call(this,M),this.framerate=this.settings.framerate,this.type="video/webm",this.extension=".webm",this.stream=null,this.mediaRecorder=null,this.chunks=[]}y.prototype=Object.create(p.prototype),y.prototype.add=function(M){this.stream||(this.stream=M.captureStream(this.framerate),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.start(),this.mediaRecorder.ondataavailable=(function(S){this.chunks.push(S.data)}).bind(this)),this.step()},y.prototype.save=function(M){this.mediaRecorder.onstop=(function(S){var I=new Blob(this.chunks,{type:"video/webm"});this.chunks=[],M(I)}).bind(this),this.mediaRecorder.stop()};function T(M){p.call(this,M),M.quality=31-(M.quality*30/100||10),M.workers=M.workers||4,this.extension=".gif",this.mimeType="image/gif",this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sizeSet=!1,this.encoder=new GIF({workers:M.workers,quality:M.quality,workerScript:M.workersPath+"gif.worker.js"}),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("finished",(function(S){var I=this.callback;I&&(this.callback=void 0,I(S))}).bind(this))}T.prototype=Object.create(p.prototype),T.prototype.add=function(M){this.sizeSet||(this.encoder.setOption("width",M.width),this.encoder.setOption("height",M.height),this.sizeSet=!0),this.canvas.width=M.width,this.canvas.height=M.height,this.ctx.drawImage(M,0,0),this.encoder.addFrame(this.ctx,{copy:!0,delay:this.settings.step}),this.step()},T.prototype.save=function(M){this.callback=M,this.encoder.render()};function w(M){var S=M||{},I,U,b,L,F,fe,j,N=[],G=[],z=0,ee=0,V=[],re=!1,oe={};S.framerate=S.framerate||60,S.motionBlurFrames=2*(S.motionBlurFrames||1),I=S.verbose||!1,S.display,S.step=1e3/S.framerate,S.timeLimit=S.timeLimit||0,S.frameLimit=S.frameLimit||0,S.startTime=S.startTime||0;var ue=document.createElement("div");ue.style.position="absolute",ue.style.left=ue.style.top=0,ue.style.backgroundColor="black",ue.style.fontFamily="monospace",ue.style.fontSize="11px",ue.style.padding="5px",ue.style.color="red",ue.style.zIndex=1e5,S.display&&document.body.appendChild(ue);var Y=document.createElement("canvas"),he=Y.getContext("2d"),W,ce;Xe("Step is set to "+S.step+"ms");var xe={gif:T,webm:m,ffmpegserver:x,png:g,jpg:h,"webm-mediarecorder":y},we=xe[S.format];if(!we)throw"Error: Incorrect or missing format: Valid formats are "+Object.keys(xe).join(", ");if(j=new we(S),j.step=fe,j.on("process",Ge),j.on("progress",Ue),"performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var ve=Date.now();performance.timing&&performance.timing.navigationStart&&(ve=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-ve}}var Se=window.setTimeout,ze=window.setInterval,Ae=window.clearInterval,X=window.clearTimeout,He=window.requestAnimationFrame,Pe=window.Date.now,Oe=window.performance.now,Le=window.Date.prototype.getTime,Be=[];function Ne(){Xe("Capturer start"),b=window.Date.now(),z=0,U=b+S.startTime,F=window.performance.now(),L=F+S.startTime,window.Date.prototype.getTime=function(){return U},window.Date.now=function(){return U},window.setTimeout=function(A,te){var le={callback:A,time:te,triggerTime:U+te};return N.push(le),Xe("Timeout set to "+le.time),le},window.clearTimeout=function(A){for(var te=0;te<N.length;te++)if(N[te]==A){N.splice(te,1),Xe("Timeout cleared");continue}},window.setInterval=function(A,te){var le={callback:A,time:te,triggerTime:U+te};return G.push(le),Xe("Interval set to "+le.time),le},window.clearInterval=function(A){return Xe("clear Interval"),null},window.requestAnimationFrame=function(A){V.push(A)},window.performance.now=function(){return L};function me(){return this._hooked||(this._hooked=!0,this._hookedTime=this.currentTime||0,this.pause(),Be.push(this)),this._hookedTime+S.startTime}try{Object.defineProperty(HTMLVideoElement.prototype,"currentTime",{get:me}),Object.defineProperty(HTMLAudioElement.prototype,"currentTime",{get:me})}catch(A){Xe(A)}}function O(){Ne(),j.start(),re=!0}function P(){re=!1,j.stop(),se()}function J(me,A){Se(me,0,A)}function fe(){J(Ge)}function se(){Xe("Capturer stop"),window.setTimeout=Se,window.setInterval=ze,window.clearInterval=Ae,window.clearTimeout=X,window.requestAnimationFrame=He,window.Date.prototype.getTime=Le,window.Date.now=Pe,window.performance.now=Oe}function _e(){var me=z/S.framerate;(S.frameLimit&&z>=S.frameLimit||S.timeLimit&&me>=S.timeLimit)&&(P(),de());var A=new Date(null);A.setSeconds(me),S.motionBlurFrames>2?ue.textContent="CCapture "+S.format+" | "+z+" frames ("+ee+" inter) | "+A.toISOString().substr(11,8):ue.textContent="CCapture "+S.format+" | "+z+" frames | "+A.toISOString().substr(11,8),window.ccaptureDisplayListener&&window.ccaptureDisplayListener(me.toFixed(2)+" seconds")}function De(me){(Y.width!==me.width||Y.height!==me.height)&&(Y.width=me.width,Y.height=me.height,W=new Uint16Array(Y.height*Y.width*4),he.fillStyle="#0",he.fillRect(0,0,Y.width,Y.height))}function ye(me){he.drawImage(me,0,0),ce=he.getImageData(0,0,Y.width,Y.height);for(var A=0;A<W.length;A+=4)W[A]+=ce.data[A],W[A+1]+=ce.data[A+1],W[A+2]+=ce.data[A+2];ee++}function Ee(){for(var me=ce.data,A=0;A<W.length;A+=4)me[A]=W[A]*2/S.motionBlurFrames,me[A+1]=W[A+1]*2/S.motionBlurFrames,me[A+2]=W[A+2]*2/S.motionBlurFrames;he.putImageData(ce,0,0),j.add(Y),z++,ee=0,Xe("Full MB Frame! "+z+" "+U);for(var A=0;A<W.length;A+=4)W[A]=0,W[A+1]=0,W[A+2]=0;gc()}function Fe(me){re&&(S.motionBlurFrames>2?(De(me),ye(me),ee>=.5*S.motionBlurFrames?Ee():fe()):(j.add(me),z++,Xe("Full Frame! "+z)))}function Ge(){var me=1e3/S.framerate,A=(z+ee/S.motionBlurFrames)*me;U=b+A,L=F+A,Be.forEach(function(le){le._hookedTime=A/1e3}),_e(),Xe("Frame: "+z+" "+ee);for(var te=0;te<N.length;te++)if(U>=N[te].triggerTime){J(N[te].callback),N.splice(te,1);continue}for(var te=0;te<G.length;te++)if(U>=G[te].triggerTime){J(G[te].callback),G[te].triggerTime+=G[te].time;continue}V.forEach(function(le){J(le,U-u)}),V=[]}function de(me){me||(me=function(A){return download(A,j.filename+j.extension,j.mimeType),!1}),j.save(me)}function Xe(me){I&&console.log(me)}function Ve(me,A){oe[me]=A}function Ie(me){var A=oe[me];A&&A.apply(null,Array.prototype.slice.call(arguments,1))}function Ue(me){Ie("progress",me)}return{start:O,capture:Fe,stop:P,save:de,on:Ve}}(a||l||{}).CCapture=w,typeof define=="function"&&typeof define.amd=="object"&&define.amd?define(function(){return w}):t&&n?(r&&((n.exports=w).CCapture=w),t.CCapture=w):f.CCapture=w})();var ga=!1,Ii;function zm(i){const e=window.innerWidth,t=window.innerHeight,n=new Gl;let r,s=0;const l=new dm;l.background=new rt(10066329);const a=new Mm(16777215,4);a.position.set(.2,1,0),a.castShadow=!0,a.shadow.mapSize.width=512*4,a.shadow.mapSize.height=512*4,a.shadow.camera.near=.5,a.shadow.camera.far=3,a.shadow.bias=-.02,l.add(a),l.add(new Sm(16777215,2));const o=40,f=new Ht(0,e/t,.1,1e3);f.setFocalLength(o),f.position.set(0,3,1),f.lookAt(0,0,0),r=f.position.clone();const c=new kl;c.shadowMap.enabled=!0,c.shadowMap.type=el,c.setSize(e,t),c.toneMapping=pn,i.appendChild(c.domElement);const u=new Lm(l,f),d=new Pm(c),p=new Om(l,f,{focus:10,aperture:10*1e-5,maxblur:.008}),_=new Um;d.addPass(u),d.addPass(p),d.addPass(_);const g=new km({flipDuration:.5,yBetweenPages:.001,pageSubdivisions:20});g.scale.x=.8,l.add(g);function h(){requestAnimationFrame(h);let w=n.getDelta();g.animate(w),f.position.add(r.clone().sub(f.position).multiplyScalar(w*2)),d.render(),ga&&Ii.capture(c.domElement)}h();function m(){const w=window.innerWidth,M=window.innerHeight;f.aspect=w/M,f.updateProjectionMatrix(),c.setSize(w,M),d.setSize(w,M)}function x(w){const M=new nt;M.x=w.clientX/window.innerWidth*2-1,M.y=-(w.clientY/window.innerHeight)*2+1,M.x<0&&g.currentPage>0||g.currentPage==g.totalPages?g.previousPage():g.nextPage(),console.log(g.currentPage,g.totalPages)}function y(w){s+=w.deltaY<0?1:-1,s<=0&&(r.x=0,r.z=1),f.setFocalLength(o+s)}function T(w){const M=new nt;M.x=w.clientX/window.innerWidth*2-1,M.y=-(w.clientY/window.innerHeight)*2+1,s>0&&(r.x=M.x/3,r.z=1+-M.y/3)}window.addEventListener("resize",m),c.domElement.addEventListener("click",x),c.domElement.addEventListener("mousemove",T),c.domElement.addEventListener("mousewheel",y),document.body.addEventListener("on:pages",w=>{console.log("PAGES EVENT:",w.detail),g.setPages(w.detail)}),document.body.addEventListener("book:goto",w=>{g.currentPage=w.detail}),document.body.addEventListener("record:start",w=>{ga=!0,document.body.classList.add("recording"),Ii=new CCapture({framerate:24,format:"webm",motionBlurFrames:1,quality:100}),Ii.start()}),document.body.addEventListener("record:stop",w=>{ga=!1,Ii.stop(),Ii.save(),document.body.classList.remove("recording")}),window.addEventListener("keydown",w=>{w.code==="Space"&&(f.setFocalLength(o),r.x=0,r.z=1,s=0)})}function Gm(){return tt(cc,{})}$l(tt(Gm,{}),document.getElementById("app"));zm(document.getElementById("scene"))});export default Hm();
