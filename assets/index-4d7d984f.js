var Ec=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var rg=Ec((Bi,ki)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Ur,Ye,el,Bn,as,tl,Ca,zi={},nl=[],wc=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ha=Array.isArray;function Tn(i,e){for(var t in e)i[t]=e[t];return i}function il(i){var e=i.parentNode;e&&e.removeChild(i)}function Tc(i,e,t){var n,r,a,l={};for(a in e)a=="key"?n=e[a]:a=="ref"?r=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?Ur.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(a in i.defaultProps)l[a]===void 0&&(l[a]=i.defaultProps[a]);return br(i,l,n,r,null)}function br(i,e,t,n,r){var a={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++el,__i:-1,__u:0};return r==null&&Ye.vnode!=null&&Ye.vnode(a),a}function Hn(i){return i.children}function Mr(i,e){this.props=i,this.context=e}function xi(i,e){if(e==null)return i.__?xi(i.__,i.__i+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?xi(i):null}function rl(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return rl(i)}}function ss(i){(!i.__d&&(i.__d=!0)&&Bn.push(i)&&!Tr.__r++||as!==Ye.debounceRendering)&&((as=Ye.debounceRendering)||tl)(Tr)}function Tr(){var i,e,t,n,r,a,l,s,o;for(Bn.sort(Ca);i=Bn.shift();)i.__d&&(e=Bn.length,n=void 0,a=(r=(t=i).__v).__e,s=[],o=[],(l=t.__P)&&((n=Tn({},r)).__v=r.__v+1,Ye.vnode&&Ye.vnode(n),Va(l,n,r,t.__n,l.ownerSVGElement!==void 0,32&r.__u?[a]:null,s,a??xi(r),!!(32&r.__u),o),n.__.__k[n.__i]=n,ol(s,n,o),n.__e!=a&&rl(n)),Bn.length>e&&Bn.sort(Ca));Tr.__r=0}function al(i,e,t,n,r,a,l,s,o,f,u){var c,h,p,_,g,d=n&&n.__k||nl,m=e.length;for(t.__d=o,Ac(t,e,d),o=t.__d,c=0;c<m;c++)(p=t.__k[c])!=null&&typeof p!="boolean"&&typeof p!="function"&&(h=p.__i===-1?zi:d[p.__i]||zi,p.__i=c,Va(i,p,h,r,a,l,s,o,f,u),_=p.__e,p.ref&&h.ref!=p.ref&&(h.ref&&Wa(h.ref,null,p),u.push(p.ref,p.__c||_,p)),g==null&&_!=null&&(g=_),65536&p.__u||h.__k===p.__k?o=sl(p,o,i):typeof p.type=="function"&&p.__d!==void 0?o=p.__d:_&&(o=_.nextSibling),p.__d=void 0,p.__u&=-196609);t.__d=o,t.__e=g}function Ac(i,e,t){var n,r,a,l,s,o=e.length,f=t.length,u=f,c=0;for(i.__k=[],n=0;n<o;n++)(r=i.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?br(null,r,null,null,r):Ha(r)?br(Hn,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?br(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=i,r.__b=i.__b+1,s=Cc(r,t,l=n+c,u),r.__i=s,a=null,s!==-1&&(u--,(a=t[s])&&(a.__u|=131072)),a==null||a.__v===null?(s==-1&&c--,typeof r.type!="function"&&(r.__u|=65536)):s!==l&&(s===l+1?c++:s>l?u>o-l?c+=s-l:c--:c=s<l&&s==l-1?s-l:0,s!==n+c&&(r.__u|=65536))):(a=t[n])&&a.key==null&&a.__e&&(a.__e==i.__d&&(i.__d=xi(a)),Ra(a,a,!1),t[n]=null,u--);if(u)for(n=0;n<f;n++)(a=t[n])!=null&&!(131072&a.__u)&&(a.__e==i.__d&&(i.__d=xi(a)),Ra(a,a))}function sl(i,e,t){var n,r;if(typeof i.type=="function"){for(n=i.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=i,e=sl(n[r],e,t));return e}return i.__e!=e&&(t.insertBefore(i.__e,e||null),e=i.__e),e&&e.nextSibling}function Cc(i,e,t,n){var r=i.key,a=i.type,l=t-1,s=t+1,o=e[t];if(o===null||o&&r==o.key&&a===o.type)return t;if(n>(o!=null&&!(131072&o.__u)?1:0))for(;l>=0||s<e.length;){if(l>=0){if((o=e[l])&&!(131072&o.__u)&&r==o.key&&a===o.type)return l;l--}if(s<e.length){if((o=e[s])&&!(131072&o.__u)&&r==o.key&&a===o.type)return s;s++}}return-1}function os(i,e,t){e[0]==="-"?i.setProperty(e,t??""):i[e]=t==null?"":typeof t!="number"||wc.test(e)?t:t+"px"}function Ki(i,e,t,n,r){var a;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||os(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||os(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+a]=t,t?n?t.u=n.u:(t.u=Date.now(),i.addEventListener(e,a?cs:ls,a)):i.removeEventListener(e,a?cs:ls,a);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?i.removeAttribute(e):i.setAttribute(e,t))}}function ls(i){var e=this.l[i.type+!1];if(i.t){if(i.t<=e.u)return}else i.t=Date.now();return e(Ye.event?Ye.event(i):i)}function cs(i){return this.l[i.type+!0](Ye.event?Ye.event(i):i)}function Va(i,e,t,n,r,a,l,s,o,f){var u,c,h,p,_,g,d,m,x,y,T,w,b,S,U,O=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(o=!!(32&t.__u),a=[s=e.__e=t.__e]),(u=Ye.__b)&&u(e);e:if(typeof O=="function")try{if(m=e.props,x=(u=O.contextType)&&n[u.__c],y=u?x?x.props.value:u.__:n,t.__c?d=(c=e.__c=t.__c).__=c.__E:("prototype"in O&&O.prototype.render?e.__c=c=new O(m,y):(e.__c=c=new Mr(m,y),c.constructor=O,c.render=Pc),x&&x.sub(c),c.props=m,c.state||(c.state={}),c.context=y,c.__n=n,h=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Tn({},c.__s)),Tn(c.__s,O.getDerivedStateFromProps(m,c.__s))),p=c.props,_=c.state,c.__v=e,h)O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(O.getDerivedStateFromProps==null&&m!==p&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,y),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,y)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(c.props=m,c.state=c.__s,c.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(M){M&&(M.__=e)}),T=0;T<c._sb.length;T++)c.__h.push(c._sb[T]);c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,y),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(p,_,g)})}if(c.context=y,c.props=m,c.__P=i,c.__e=!1,w=Ye.__r,b=0,"prototype"in O&&O.prototype.render){for(c.state=c.__s,c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context),S=0;S<c._sb.length;S++)c.__h.push(c._sb[S]);c._sb=[]}else do c.__d=!1,w&&w(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++b<25);c.state=c.__s,c.getChildContext!=null&&(n=Tn(Tn({},n),c.getChildContext())),h||c.getSnapshotBeforeUpdate==null||(g=c.getSnapshotBeforeUpdate(p,_)),al(i,Ha(U=u!=null&&u.type===Hn&&u.key==null?u.props.children:u)?U:[U],e,t,n,r,a,l,s,o,f),c.base=e.__e,e.__u&=-161,c.__h.length&&l.push(c),d&&(c.__E=c.__=null)}catch(M){e.__v=null,o||a!=null?(e.__e=s,e.__u|=o?160:32,a[a.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),Ye.__e(M,e,t)}else a==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Rc(t.__e,e,t,n,r,a,l,o,f);(u=Ye.diffed)&&u(e)}function ol(i,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)Wa(t[n],t[++n],t[++n]);Ye.__c&&Ye.__c(e,i),i.some(function(r){try{i=r.__h,r.__h=[],i.some(function(a){a.call(r)})}catch(a){Ye.__e(a,r.__v)}})}function Rc(i,e,t,n,r,a,l,s,o){var f,u,c,h,p,_,g,d=t.props,m=e.props,x=e.type;if(x==="svg"&&(r=!0),a!=null){for(f=0;f<a.length;f++)if((p=a[f])&&"setAttribute"in p==!!x&&(x?p.localName===x:p.nodeType===3)){i=p,a[f]=null;break}}if(i==null){if(x===null)return document.createTextNode(m);i=r?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,m.is&&m),a=null,s=!1}if(x===null)d===m||s&&i.data===m||(i.data=m);else{if(a=a&&Ur.call(i.childNodes),d=t.props||zi,!s&&a!=null)for(d={},f=0;f<i.attributes.length;f++)d[(p=i.attributes[f]).name]=p.value;for(f in d)p=d[f],f=="children"||(f=="dangerouslySetInnerHTML"?c=p:f==="key"||f in m||Ki(i,f,null,p,r));for(f in m)p=m[f],f=="children"?h=p:f=="dangerouslySetInnerHTML"?u=p:f=="value"?_=p:f=="checked"?g=p:f==="key"||s&&typeof p!="function"||d[f]===p||Ki(i,f,p,d[f],r);if(u)s||c&&(u.__html===c.__html||u.__html===i.innerHTML)||(i.innerHTML=u.__html),e.__k=[];else if(c&&(i.innerHTML=""),al(i,Ha(h)?h:[h],e,t,n,r&&x!=="foreignObject",a,l,a?a[0]:t.__k&&xi(t,0),s,o),a!=null)for(f=a.length;f--;)a[f]!=null&&il(a[f]);s||(f="value",_!==void 0&&(_!==i[f]||x==="progress"&&!_||x==="option"&&_!==d[f])&&Ki(i,f,_,d[f],!1),f="checked",g!==void 0&&g!==i[f]&&Ki(i,f,g,d[f],!1))}return i}function Wa(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){Ye.__e(n,t)}}function Ra(i,e,t){var n,r;if(Ye.unmount&&Ye.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Wa(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){Ye.__e(a,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&Ra(n[r],e,t||typeof i.type!="function");t||i.__e==null||il(i.__e),i.__=i.__e=i.__d=void 0}function Pc(i,e,t){return this.constructor(i,t)}function Lc(i,e,t){var n,r,a,l;Ye.__&&Ye.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,a=[],l=[],Va(e,i=(!n&&t||e).__k=Tc(Hn,null,[i]),r||zi,zi,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?Ur.call(e.childNodes):null,a,!n&&t?t:r?r.__e:e.firstChild,n,l),ol(a,i,l)}Ur=nl.slice,Ye={__e:function(i,e,t,n){for(var r,a,l;e=e.__;)if((r=e.__c)&&!r.__)try{if((a=r.constructor)&&a.getDerivedStateFromError!=null&&(r.setState(a.getDerivedStateFromError(i)),l=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),l=r.__d),l)return r.__E=r}catch(s){i=s}throw i}},el=0,Mr.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Tn({},this.state),typeof i=="function"&&(i=i(Tn({},t),this.props)),i&&Tn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),ss(this))},Mr.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),ss(this))},Mr.prototype.render=Hn,Bn=[],tl=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ca=function(i,e){return i.__v.__b-e.__v.__b},Tr.__r=0;var yi,ft,Xr,us,Ar=0,ll=[],Sr=[],fs=Ye.__b,hs=Ye.__r,ds=Ye.diffed,ps=Ye.__c,ms=Ye.unmount;function Ir(i,e){Ye.__h&&Ye.__h(ft,i,Ar||e),Ar=0;var t=ft.__H||(ft.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:Sr}),t.__[i]}function di(i){return Ar=1,Dc(cl,i)}function Dc(i,e,t){var n=Ir(yi++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):cl(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],f=n.t(o,s);o!==f&&(n.__N=[f,n.__[1]],n.__c.setState({}))}],n.__c=ft,!ft.u)){var r=function(s,o,f){if(!n.__c.__H)return!0;var u=n.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!a||a.call(this,s,o,f);var c=!1;return u.forEach(function(h){if(h.__N){var p=h.__[0];h.__=h.__N,h.__N=void 0,p!==h.__[0]&&(c=!0)}}),!(!c&&n.__c.props===s)&&(!a||a.call(this,s,o,f))};ft.u=!0;var a=ft.shouldComponentUpdate,l=ft.componentWillUpdate;ft.componentWillUpdate=function(s,o,f){if(this.__e){var u=a;a=void 0,r(s,o,f),a=u}l&&l.call(this,s,o,f)},ft.shouldComponentUpdate=r}return n.__N||n.__}function _s(i,e){var t=Ir(yi++,3);!Ye.__s&&Xa(t.__H,e)&&(t.__=i,t.i=e,ft.__H.__h.push(t))}function gs(i,e){var t=Ir(yi++,4);!Ye.__s&&Xa(t.__H,e)&&(t.__=i,t.i=e,ft.__h.push(t))}function jr(i){return Ar=5,Uc(function(){return{current:i}},[])}function Uc(i,e){var t=Ir(yi++,7);return Xa(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Ic(){for(var i;i=ll.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(Er),i.__H.__h.forEach(Pa),i.__H.__h=[]}catch(e){i.__H.__h=[],Ye.__e(e,i.__v)}}Ye.__b=function(i){ft=null,fs&&fs(i)},Ye.__r=function(i){hs&&hs(i),yi=0;var e=(ft=i.__c).__H;e&&(Xr===ft?(e.__h=[],ft.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Sr,t.__N=t.i=void 0})):(e.__h.forEach(Er),e.__h.forEach(Pa),e.__h=[],yi=0)),Xr=ft},Ye.diffed=function(i){ds&&ds(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(ll.push(e)!==1&&us===Ye.requestAnimationFrame||((us=Ye.requestAnimationFrame)||Oc)(Ic)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Sr&&(t.__=t.__V),t.i=void 0,t.__V=Sr})),Xr=ft=null},Ye.__c=function(i,e){e.some(function(t){try{t.__h.forEach(Er),t.__h=t.__h.filter(function(n){return!n.__||Pa(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Ye.__e(n,t.__v)}}),ps&&ps(i,e)},Ye.unmount=function(i){ms&&ms(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{Er(n)}catch(r){e=r}}),t.__H=void 0,e&&Ye.__e(e,t.__v))};var vs=typeof requestAnimationFrame=="function";function Oc(i){var e,t=function(){clearTimeout(n),vs&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);vs&&(e=requestAnimationFrame(t))}function Er(i){var e=ft,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),ft=e}function Pa(i){var e=ft;i.__c=i.__(),ft=e}function Xa(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function cl(i,e){return typeof e=="function"?e(i):e}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ja="161",Nc=0,xs=1,Fc=2,ul=1,fl=2,un=3,Rn=0,Nt=1,fn=2,nn=0,_i=1,ys=2,bs=3,Ms=4,Bc=5,kn=100,kc=101,zc=102,Ss=103,Es=104,Gc=200,Hc=201,Vc=202,Wc=203,La=204,Da=205,Xc=206,jc=207,Yc=208,Zc=209,qc=210,Kc=211,$c=212,Jc=213,Qc=214,eu=0,tu=1,nu=2,Cr=3,iu=4,ru=5,au=6,su=7,hl=0,ou=1,lu=2,pn=0,dl=1,pl=2,ml=3,_l=4,cu=5,gl=6,vl=300,bi=301,Mi=302,Ua=303,Ia=304,Or=306,Oa=1e3,Kt=1001,Na=1002,Et=1003,ws=1004,Pi=1005,Pt=1006,Yr=1007,Gn=1008,Cn=1009,uu=1010,fu=1011,Ya=1012,xl=1013,An=1014,hn=1015,Yn=1016,yl=1017,bl=1018,Vn=1020,hu=1021,$t=1023,du=1024,pu=1025,Wn=1026,Si=1027,mu=1028,Ml=1029,_u=1030,Sl=1031,El=1033,Zr=33776,qr=33777,Kr=33778,$r=33779,Ts=35840,As=35841,Cs=35842,Rs=35843,wl=36196,Ps=37492,Ls=37496,Ds=37808,Us=37809,Is=37810,Os=37811,Ns=37812,Fs=37813,Bs=37814,ks=37815,zs=37816,Gs=37817,Hs=37818,Vs=37819,Ws=37820,Xs=37821,Jr=36492,js=36494,Ys=36495,gu=36283,Zs=36284,qs=36285,Ks=36286,Tl=3e3,Xn=3001,vu=3200,Al=3201,Cl=0,xu=1,Wt="",Mt="srgb",gn="srgb-linear",Za="display-p3",Nr="display-p3-linear",Rr="linear",st="srgb",Pr="rec709",Lr="p3",$n=7680,$s=519,yu=512,bu=513,Mu=514,Rl=515,Su=516,Eu=517,wu=518,Tu=519,Js=35044,Qs="300 es",Fa=1035,dn=2e3,Dr=2001;class Zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Ba=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function ea(i,e,t){return(1-t)*i+t*e}function eo(i){return(i&i-1)===0&&i!==0}function ka(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,n,r,a,l,s,o,f){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,o,f)}set(e,t,n,r,a,l,s,o,f){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=t,u[4]=a,u[5]=o,u[6]=n,u[7]=l,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[3],o=n[6],f=n[1],u=n[4],c=n[7],h=n[2],p=n[5],_=n[8],g=r[0],d=r[3],m=r[6],x=r[1],y=r[4],T=r[7],w=r[2],b=r[5],S=r[8];return a[0]=l*g+s*x+o*w,a[3]=l*d+s*y+o*b,a[6]=l*m+s*T+o*S,a[1]=f*g+u*x+c*w,a[4]=f*d+u*y+c*b,a[7]=f*m+u*T+c*S,a[2]=h*g+p*x+_*w,a[5]=h*d+p*y+_*b,a[8]=h*m+p*T+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],u=e[8];return t*l*u-t*s*f-n*a*u+n*s*o+r*a*f-r*l*o}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],u=e[8],c=u*l-s*f,h=s*o-u*a,p=f*a-l*o,_=t*c+n*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=c*g,e[1]=(r*f-u*n)*g,e[2]=(s*n-r*l)*g,e[3]=h*g,e[4]=(u*t-r*o)*g,e[5]=(r*a-s*t)*g,e[6]=p*g,e[7]=(n*o-f*t)*g,e[8]=(l*t-n*a)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,s){const o=Math.cos(a),f=Math.sin(a);return this.set(n*o,n*f,-n*(o*l+f*s)+l+e,-r*f,r*o,-r*(-f*l+o*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new tt;function Pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Gi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){const i=Gi("canvas");return i.style.display="block",i}const to={};function gi(i){i in to||(to[i]=!0,console.warn(i))}const no=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),io=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[gn]:{transfer:Rr,primaries:Pr,toReference:i=>i,fromReference:i=>i},[Mt]:{transfer:st,primaries:Pr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Nr]:{transfer:Rr,primaries:Lr,toReference:i=>i.applyMatrix3(io),fromReference:i=>i.applyMatrix3(no)},[Za]:{transfer:st,primaries:Lr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(io),fromReference:i=>i.applyMatrix3(no).convertLinearToSRGB()}},Ru=new Set([gn,Nr]),at={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ru.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=$i[e].toReference,r=$i[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $i[i].primaries},getTransfer:function(i){return i===Wt?Rr:$i[i].transfer}};function vi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=Gi("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=vi(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pu=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,s=r.length;l<s;l++)r[l].isDataTexture?a.push(ia(r[l].image)):a.push(ia(r[l]))}else a=ia(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lu=0;class wt extends Zn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Kt,r=Kt,a=Pt,l=Gn,s=$t,o=Cn,f=wt.DEFAULT_ANISOTROPY,u=Wt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Wi(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=s,this.internalFormat=null,this.type=o,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xn?Mt:Wt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oa:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oa:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Mt?Xn:Tl}set encoding(e){gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xn?Mt:Wt}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=vl;wt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const o=e.elements,f=o[0],u=o[4],c=o[8],h=o[1],p=o[5],_=o[9],g=o[2],d=o[6],m=o[10];if(Math.abs(u-h)<.01&&Math.abs(c-g)<.01&&Math.abs(_-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(c+g)<.1&&Math.abs(_+d)<.1&&Math.abs(f+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(f+1)/2,T=(p+1)/2,w=(m+1)/2,b=(u+h)/4,S=(c+g)/4,U=(_+d)/4;return y>T&&y>w?y<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(y),r=b/n,a=S/n):T>w?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=b/r,a=U/r):w<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(w),n=S/a,r=U/a),this.set(n,r,a,t),this}let x=Math.sqrt((d-_)*(d-_)+(c-g)*(c-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(d-_)/x,this.y=(c-g)/x,this.z=(h-u)/x,this.w=Math.acos((f+p+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Du extends Zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Xn?Mt:Wt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Du{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ul extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uu extends wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,s){let o=n[r+0],f=n[r+1],u=n[r+2],c=n[r+3];const h=a[l+0],p=a[l+1],_=a[l+2],g=a[l+3];if(s===0){e[t+0]=o,e[t+1]=f,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(c!==g||o!==h||f!==p||u!==_){let d=1-s;const m=o*h+f*p+u*_+c*g,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const w=Math.sqrt(y),b=Math.atan2(w,m*x);d=Math.sin(d*b)/w,s=Math.sin(s*b)/w}const T=s*x;if(o=o*d+h*T,f=f*d+p*T,u=u*d+_*T,c=c*d+g*T,d===1-s){const w=1/Math.sqrt(o*o+f*f+u*u+c*c);o*=w,f*=w,u*=w,c*=w}}e[t]=o,e[t+1]=f,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,n,r,a,l){const s=n[r],o=n[r+1],f=n[r+2],u=n[r+3],c=a[l],h=a[l+1],p=a[l+2],_=a[l+3];return e[t]=s*_+u*c+o*p-f*h,e[t+1]=o*_+u*h+f*c-s*p,e[t+2]=f*_+u*p+s*h-o*c,e[t+3]=u*_-s*c-o*h-f*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,s=Math.cos,o=Math.sin,f=s(n/2),u=s(r/2),c=s(a/2),h=o(n/2),p=o(r/2),_=o(a/2);switch(l){case"XYZ":this._x=h*u*c+f*p*_,this._y=f*p*c-h*u*_,this._z=f*u*_+h*p*c,this._w=f*u*c-h*p*_;break;case"YXZ":this._x=h*u*c+f*p*_,this._y=f*p*c-h*u*_,this._z=f*u*_-h*p*c,this._w=f*u*c+h*p*_;break;case"ZXY":this._x=h*u*c-f*p*_,this._y=f*p*c+h*u*_,this._z=f*u*_+h*p*c,this._w=f*u*c-h*p*_;break;case"ZYX":this._x=h*u*c-f*p*_,this._y=f*p*c+h*u*_,this._z=f*u*_-h*p*c,this._w=f*u*c+h*p*_;break;case"YZX":this._x=h*u*c+f*p*_,this._y=f*p*c+h*u*_,this._z=f*u*_-h*p*c,this._w=f*u*c-h*p*_;break;case"XZY":this._x=h*u*c-f*p*_,this._y=f*p*c-h*u*_,this._z=f*u*_+h*p*c,this._w=f*u*c+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],s=t[5],o=t[9],f=t[2],u=t[6],c=t[10],h=n+s+c;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-o)*p,this._y=(a-f)*p,this._z=(l-r)*p}else if(n>s&&n>c){const p=2*Math.sqrt(1+n-s-c);this._w=(u-o)/p,this._x=.25*p,this._y=(r+l)/p,this._z=(a+f)/p}else if(s>c){const p=2*Math.sqrt(1+s-n-c);this._w=(a-f)/p,this._x=(r+l)/p,this._y=.25*p,this._z=(o+u)/p}else{const p=2*Math.sqrt(1+c-n-s);this._w=(l-r)/p,this._x=(a+f)/p,this._y=(o+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,s=t._x,o=t._y,f=t._z,u=t._w;return this._x=n*u+l*s+r*f-a*o,this._y=r*u+l*o+a*s-n*f,this._z=a*u+l*f+n*o-r*s,this._w=l*u-n*s-r*o-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let s=l*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const o=1-s*s;if(o<=Number.EPSILON){const p=1-t;return this._w=p*l+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const f=Math.sqrt(o),u=Math.atan2(f,s),c=Math.sin((1-t)*u)/f,h=Math.sin(t*u)/f;return this._w=l*c+this._w*h,this._x=n*c+this._x*h,this._y=r*c+this._y*h,this._z=a*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,n=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,s=e.z,o=e.w,f=2*(l*r-s*n),u=2*(s*t-a*r),c=2*(a*n-l*t);return this.x=t+o*f+l*c-s*u,this.y=n+o*u+s*f-a*c,this.z=r+o*c+a*u-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,s=t.y,o=t.z;return this.x=r*o-a*s,this.y=a*l-n*o,this.z=n*s-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new ae,ro=new Xi;class ji{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,s=a.count;l<s;l++)e.isMesh===!0?e.getVertexPosition(l,jt):jt.fromBufferAttribute(a,l),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ji.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(e.matrixWorld),this.union(Ji)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),Qi.subVectors(this.max,Di),Qn.subVectors(e.a,Di),ei.subVectors(e.b,Di),ti.subVectors(e.c,Di),yn.subVectors(ei,Qn),bn.subVectors(ti,ei),Dn.subVectors(Qn,ti);let t=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,bn.z,0,-bn.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-Dn.y,Dn.x,0];return!aa(t,Qn,ei,ti,Qi)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,Qn,ei,ti,Qi))?!1:(er.crossVectors(yn,bn),t=[er.x,er.y,er.z],aa(t,Qn,ei,ti,Qi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],jt=new ae,Ji=new ji,Qn=new ae,ei=new ae,ti=new ae,yn=new ae,bn=new ae,Dn=new ae,Di=new ae,Qi=new ae,er=new ae,Un=new ae;function aa(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Un.fromArray(i,a);const s=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),o=e.dot(Un),f=t.dot(Un),u=n.dot(Un);if(Math.max(-Math.max(o,f,u),Math.min(o,f,u))>s)return!1}return!0}const Iu=new ji,Ui=new ae,sa=new ae;class qa{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Iu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ui,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(sa)),this.expandByPoint(Ui.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new ae,oa=new ae,tr=new ae,Mn=new ae,la=new ae,nr=new ae,ca=new ae;class Ou{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){oa.copy(e).add(t).multiplyScalar(.5),tr.copy(t).sub(e).normalize(),Mn.copy(this.origin).sub(oa);const a=e.distanceTo(t)*.5,l=-this.direction.dot(tr),s=Mn.dot(this.direction),o=-Mn.dot(tr),f=Mn.lengthSq(),u=Math.abs(1-l*l);let c,h,p,_;if(u>0)if(c=l*o-s,h=l*s-o,_=a*u,c>=0)if(h>=-_)if(h<=_){const g=1/u;c*=g,h*=g,p=c*(c+l*h+2*s)+h*(l*c+h+2*o)+f}else h=a,c=Math.max(0,-(l*h+s)),p=-c*c+h*(h+2*o)+f;else h=-a,c=Math.max(0,-(l*h+s)),p=-c*c+h*(h+2*o)+f;else h<=-_?(c=Math.max(0,-(-l*a+s)),h=c>0?-a:Math.min(Math.max(-a,-o),a),p=-c*c+h*(h+2*o)+f):h<=_?(c=0,h=Math.min(Math.max(-a,-o),a),p=h*(h+2*o)+f):(c=Math.max(0,-(l*a+s)),h=c>0?a:Math.min(Math.max(-a,-o),a),p=-c*c+h*(h+2*o)+f);else h=l>0?-a:a,c=Math.max(0,-(l*h+s)),p=-c*c+h*(h+2*o)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(oa).addScaledVector(tr,h),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),s=n-l,o=n+l;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,s,o;const f=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;return f>=0?(n=(e.min.x-h.x)*f,r=(e.max.x-h.x)*f):(n=(e.max.x-h.x)*f,r=(e.min.x-h.x)*f),u>=0?(a=(e.min.y-h.y)*u,l=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,l=(e.min.y-h.y)*u),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),c>=0?(s=(e.min.z-h.z)*c,o=(e.max.z-h.z)*c):(s=(e.max.z-h.z)*c,o=(e.min.z-h.z)*c),n>o||s>r)||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,a){la.subVectors(t,e),nr.subVectors(n,e),ca.crossVectors(la,nr);let l=this.direction.dot(ca),s;if(l>0){if(r)return null;s=1}else if(l<0)s=-1,l=-l;else return null;Mn.subVectors(this.origin,e);const o=s*this.direction.dot(nr.crossVectors(Mn,nr));if(o<0)return null;const f=s*this.direction.dot(la.cross(Mn));if(f<0||o+f>l)return null;const u=-s*Mn.dot(ca);return u<0?null:this.at(u/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,r,a,l,s,o,f,u,c,h,p,_,g,d){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,s,o,f,u,c,h,p,_,g,d)}set(e,t,n,r,a,l,s,o,f,u,c,h,p,_,g,d){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=s,m[13]=o,m[2]=f,m[6]=u,m[10]=c,m[14]=h,m[3]=p,m[7]=_,m[11]=g,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ni.setFromMatrixColumn(e,0).length(),a=1/ni.setFromMatrixColumn(e,1).length(),l=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),s=Math.sin(n),o=Math.cos(r),f=Math.sin(r),u=Math.cos(a),c=Math.sin(a);if(e.order==="XYZ"){const h=l*u,p=l*c,_=s*u,g=s*c;t[0]=o*u,t[4]=-o*c,t[8]=f,t[1]=p+_*f,t[5]=h-g*f,t[9]=-s*o,t[2]=g-h*f,t[6]=_+p*f,t[10]=l*o}else if(e.order==="YXZ"){const h=o*u,p=o*c,_=f*u,g=f*c;t[0]=h+g*s,t[4]=_*s-p,t[8]=l*f,t[1]=l*c,t[5]=l*u,t[9]=-s,t[2]=p*s-_,t[6]=g+h*s,t[10]=l*o}else if(e.order==="ZXY"){const h=o*u,p=o*c,_=f*u,g=f*c;t[0]=h-g*s,t[4]=-l*c,t[8]=_+p*s,t[1]=p+_*s,t[5]=l*u,t[9]=g-h*s,t[2]=-l*f,t[6]=s,t[10]=l*o}else if(e.order==="ZYX"){const h=l*u,p=l*c,_=s*u,g=s*c;t[0]=o*u,t[4]=_*f-p,t[8]=h*f+g,t[1]=o*c,t[5]=g*f+h,t[9]=p*f-_,t[2]=-f,t[6]=s*o,t[10]=l*o}else if(e.order==="YZX"){const h=l*o,p=l*f,_=s*o,g=s*f;t[0]=o*u,t[4]=g-h*c,t[8]=_*c+p,t[1]=c,t[5]=l*u,t[9]=-s*u,t[2]=-f*u,t[6]=p*c+_,t[10]=h-g*c}else if(e.order==="XZY"){const h=l*o,p=l*f,_=s*o,g=s*f;t[0]=o*u,t[4]=-c,t[8]=f*u,t[1]=h*c+g,t[5]=l*u,t[9]=p*c-_,t[2]=_*c-p,t[6]=s*u,t[10]=g*c+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nu,e,Fu)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Sn.crossVectors(n,Bt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Sn.crossVectors(n,Bt)),Sn.normalize(),ir.crossVectors(Bt,Sn),r[0]=Sn.x,r[4]=ir.x,r[8]=Bt.x,r[1]=Sn.y,r[5]=ir.y,r[9]=Bt.y,r[2]=Sn.z,r[6]=ir.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],s=n[4],o=n[8],f=n[12],u=n[1],c=n[5],h=n[9],p=n[13],_=n[2],g=n[6],d=n[10],m=n[14],x=n[3],y=n[7],T=n[11],w=n[15],b=r[0],S=r[4],U=r[8],O=r[12],M=r[1],C=r[5],N=r[9],G=r[13],F=r[2],H=r[6],z=r[10],Q=r[14],V=r[3],ie=r[7],se=r[11],ue=r[15];return a[0]=l*b+s*M+o*F+f*V,a[4]=l*S+s*C+o*H+f*ie,a[8]=l*U+s*N+o*z+f*se,a[12]=l*O+s*G+o*Q+f*ue,a[1]=u*b+c*M+h*F+p*V,a[5]=u*S+c*C+h*H+p*ie,a[9]=u*U+c*N+h*z+p*se,a[13]=u*O+c*G+h*Q+p*ue,a[2]=_*b+g*M+d*F+m*V,a[6]=_*S+g*C+d*H+m*ie,a[10]=_*U+g*N+d*z+m*se,a[14]=_*O+g*G+d*Q+m*ue,a[3]=x*b+y*M+T*F+w*V,a[7]=x*S+y*C+T*H+w*ie,a[11]=x*U+y*N+T*z+w*se,a[15]=x*O+y*G+T*Q+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],s=e[5],o=e[9],f=e[13],u=e[2],c=e[6],h=e[10],p=e[14],_=e[3],g=e[7],d=e[11],m=e[15];return _*(+a*o*c-r*f*c-a*s*h+n*f*h+r*s*p-n*o*p)+g*(+t*o*p-t*f*h+a*l*h-r*l*p+r*f*u-a*o*u)+d*(+t*f*c-t*s*p-a*l*c+n*l*p+a*s*u-n*f*u)+m*(-r*s*u-t*o*c+t*s*h+r*l*c-n*l*h+n*o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],s=e[5],o=e[6],f=e[7],u=e[8],c=e[9],h=e[10],p=e[11],_=e[12],g=e[13],d=e[14],m=e[15],x=c*d*f-g*h*f+g*o*p-s*d*p-c*o*m+s*h*m,y=_*h*f-u*d*f-_*o*p+l*d*p+u*o*m-l*h*m,T=u*g*f-_*c*f+_*s*p-l*g*p-u*s*m+l*c*m,w=_*c*o-u*g*o-_*s*h+l*g*h+u*s*d-l*c*d,b=t*x+n*y+r*T+a*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/b;return e[0]=x*S,e[1]=(g*h*a-c*d*a-g*r*p+n*d*p+c*r*m-n*h*m)*S,e[2]=(s*d*a-g*o*a+g*r*f-n*d*f-s*r*m+n*o*m)*S,e[3]=(c*o*a-s*h*a-c*r*f+n*h*f+s*r*p-n*o*p)*S,e[4]=y*S,e[5]=(u*d*a-_*h*a+_*r*p-t*d*p-u*r*m+t*h*m)*S,e[6]=(_*o*a-l*d*a-_*r*f+t*d*f+l*r*m-t*o*m)*S,e[7]=(l*h*a-u*o*a+u*r*f-t*h*f-l*r*p+t*o*p)*S,e[8]=T*S,e[9]=(_*c*a-u*g*a-_*n*p+t*g*p+u*n*m-t*c*m)*S,e[10]=(l*g*a-_*s*a+_*n*f-t*g*f-l*n*m+t*s*m)*S,e[11]=(u*s*a-l*c*a-u*n*f+t*c*f+l*n*p-t*s*p)*S,e[12]=w*S,e[13]=(u*g*r-_*c*r+_*n*h-t*g*h-u*n*d+t*c*d)*S,e[14]=(_*s*r-l*g*r-_*n*o+t*g*o+l*n*d-t*s*d)*S,e[15]=(l*c*r-u*s*r+u*n*o-t*c*o-l*n*h+t*s*h)*S,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,s=e.y,o=e.z,f=a*l,u=a*s;return this.set(f*l+n,f*s-r*o,f*o+r*s,0,f*s+r*o,u*s+n,u*o-r*l,0,f*o-r*s,u*o+r*l,a*o*o+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,s=t._z,o=t._w,f=a+a,u=l+l,c=s+s,h=a*f,p=a*u,_=a*c,g=l*u,d=l*c,m=s*c,x=o*f,y=o*u,T=o*c,w=n.x,b=n.y,S=n.z;return r[0]=(1-(g+m))*w,r[1]=(p+T)*w,r[2]=(_-y)*w,r[3]=0,r[4]=(p-T)*b,r[5]=(1-(h+m))*b,r[6]=(d+x)*b,r[7]=0,r[8]=(_+y)*S,r[9]=(d-x)*S,r[10]=(1-(h+g))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ni.set(r[0],r[1],r[2]).length();const l=ni.set(r[4],r[5],r[6]).length(),s=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const f=1/a,u=1/l,c=1/s;return Yt.elements[0]*=f,Yt.elements[1]*=f,Yt.elements[2]*=f,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=c,Yt.elements[9]*=c,Yt.elements[10]*=c,t.setFromRotationMatrix(Yt),n.x=a,n.y=l,n.z=s,this}makePerspective(e,t,n,r,a,l,s=dn){const o=this.elements,f=2*a/(t-e),u=2*a/(n-r),c=(t+e)/(t-e),h=(n+r)/(n-r);let p,_;if(s===dn)p=-(l+a)/(l-a),_=-2*l*a/(l-a);else if(s===Dr)p=-l/(l-a),_=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=f,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=u,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,a,l,s=dn){const o=this.elements,f=1/(t-e),u=1/(n-r),c=1/(l-a),h=(t+e)*f,p=(n+r)*u;let _,g;if(s===dn)_=(l+a)*c,g=-2*c;else if(s===Dr)_=a*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-p,o[2]=0,o[6]=0,o[10]=g,o[14]=-_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new ae,Yt=new gt,Nu=new ae(0,0,0),Fu=new ae(1,1,1),Sn=new ae,ir=new ae,Bt=new ae,ao=new gt,so=new Xi;class Fr{constructor(e=0,t=0,n=0,r=Fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],s=r[8],o=r[1],f=r[5],u=r[9],c=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(o,f)):(this._y=Math.atan2(-c,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(o,a));break;case"ZYX":this._y=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(o,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-c,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return so.setFromEuler(this),this.setFromQuaternion(so,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fr.DEFAULT_ORDER="XYZ";class Il{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bu=0;const oo=new ae,ii=new Xi,on=new gt,rr=new ae,Ii=new ae,ku=new ae,zu=new Xi,lo=new ae(1,0,0),co=new ae(0,1,0),uo=new ae(0,0,1),Gu={type:"added"},Hu={type:"removed"};class Lt extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new ae,t=new Fr,n=new Xi,r=new ae(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new tt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Il,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(lo,e)}rotateY(e){return this.rotateOnAxis(co,e)}rotateZ(e){return this.rotateOnAxis(uo,e)}translateOnAxis(e,t){return oo.copy(e).applyQuaternion(this.quaternion),this.position.add(oo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lo,e)}translateY(e){return this.translateOnAxis(co,e)}translateZ(e){return this.translateOnAxis(uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ii,rr,this.up):on.lookAt(rr,Ii,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(on),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(s,o){return s[o.uuid]===void 0&&(s[o.uuid]=o.toJSON(e)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const o=s.shapes;if(Array.isArray(o))for(let f=0,u=o.length;f<u;f++){const c=o[f];a(e.shapes,c)}else a(e.shapes,o)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let o=0,f=this.material.length;o<f;o++)s.push(a(e.materials,this.material[o]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const o=this.animations[s];r.animations.push(a(e.animations,o))}}if(t){const s=l(e.geometries),o=l(e.materials),f=l(e.textures),u=l(e.images),c=l(e.shapes),h=l(e.skeletons),p=l(e.animations),_=l(e.nodes);s.length>0&&(n.geometries=s),o.length>0&&(n.materials=o),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),c.length>0&&(n.shapes=c),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function l(s){const o=[];for(const f in s){const u=s[f];delete u.metadata,o.push(u)}return o}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new ae(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zt=new ae,ln=new ae,ua=new ae,cn=new ae,ri=new ae,ai=new ae,fo=new ae,fa=new ae,ha=new ae,da=new ae;class en{constructor(e=new ae,t=new ae,n=new ae){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Zt.subVectors(e,t),r.cross(Zt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Zt.subVectors(r,t),ln.subVectors(n,t),ua.subVectors(e,t);const l=Zt.dot(Zt),s=Zt.dot(ln),o=Zt.dot(ua),f=ln.dot(ln),u=ln.dot(ua),c=l*f-s*s;if(c===0)return a.set(0,0,0),null;const h=1/c,p=(f*o-s*u)*h,_=(l*u-s*o)*h;return a.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,a,l,s,o){return this.getBarycoord(e,t,n,r,cn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(a,cn.x),o.addScaledVector(l,cn.y),o.addScaledVector(s,cn.z),o)}static isFrontFacing(e,t,n,r){return Zt.subVectors(n,t),ln.subVectors(e,t),Zt.cross(ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Zt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,s;ri.subVectors(r,n),ai.subVectors(a,n),fa.subVectors(e,n);const o=ri.dot(fa),f=ai.dot(fa);if(o<=0&&f<=0)return t.copy(n);ha.subVectors(e,r);const u=ri.dot(ha),c=ai.dot(ha);if(u>=0&&c<=u)return t.copy(r);const h=o*c-u*f;if(h<=0&&o>=0&&u<=0)return l=o/(o-u),t.copy(n).addScaledVector(ri,l);da.subVectors(e,a);const p=ri.dot(da),_=ai.dot(da);if(_>=0&&p<=_)return t.copy(a);const g=p*f-o*_;if(g<=0&&f>=0&&_<=0)return s=f/(f-_),t.copy(n).addScaledVector(ai,s);const d=u*_-p*c;if(d<=0&&c-u>=0&&p-_>=0)return fo.subVectors(a,r),s=(c-u)/(c-u+(p-_)),t.copy(r).addScaledVector(fo,s);const m=1/(d+g+h);return l=g*m,s=h*m,t.copy(n).addScaledVector(ri,l).addScaledVector(ai,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},ar={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Au(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=pa(l,a,e+1/3),this.g=pa(l,a,e),this.b=pa(l,a,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Mt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],s=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){const n=Ol[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return at.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ot(Rt.r*255,0,255))*65536+Math.round(Ot(Rt.g*255,0,255))*256+Math.round(Ot(Rt.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,a=Rt.b,l=Math.max(n,r,a),s=Math.min(n,r,a);let o,f;const u=(s+l)/2;if(s===l)o=0,f=0;else{const c=l-s;switch(f=u<=.5?c/(l+s):c/(2-l-s),l){case n:o=(r-a)/c+(r<a?6:0);break;case r:o=(a-n)/c+2;break;case a:o=(n-r)/c+4;break}o/=6}return e.h=o,e.s=f,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Mt){at.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(En),this.setHSL(En.h+e,En.s+t,En.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(En),e.getHSL(ar);const n=ea(En.h,ar.h,t),r=ea(En.s,ar.s,t),a=ea(En.l,ar.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new rt;rt.NAMES=Ol;let Vu=0;class Ti extends Zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=_i,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$s,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Da&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$s&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const s in a){const o=a[s];delete o.metadata,l.push(o)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nl extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pt=new ae,sr=new nt;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Js,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXY(t,sr.x,sr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),r=It(r,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Js&&(e.usage=this.usage),e}}class Fl extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bl extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wu=0;const Ht=new gt,ma=new Lt,si=new ae,kt=new ji,Oi=new ji,bt=new ae;class xn extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Bl:Fl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new tt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];kt.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ae,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const s=t[a];Oi.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(kt.min,Oi.min),kt.expandByPoint(bt),bt.addVectors(kt.max,Oi.max),kt.expandByPoint(bt)):(kt.expandByPoint(Oi.min),kt.expandByPoint(Oi.max))}kt.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)bt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let a=0,l=t.length;a<l;a++){const s=t[a],o=this.morphTargetsRelative;for(let f=0,u=s.count;f<u;f++)bt.fromBufferAttribute(s,f),o&&(si.fromBufferAttribute(e,f),bt.add(si)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*s),4));const o=this.getAttribute("tangent").array,f=[],u=[];for(let M=0;M<s;M++)f[M]=new ae,u[M]=new ae;const c=new ae,h=new ae,p=new ae,_=new nt,g=new nt,d=new nt,m=new ae,x=new ae;function y(M,C,N){c.fromArray(r,M*3),h.fromArray(r,C*3),p.fromArray(r,N*3),_.fromArray(l,M*2),g.fromArray(l,C*2),d.fromArray(l,N*2),h.sub(c),p.sub(c),g.sub(_),d.sub(_);const G=1/(g.x*d.y-d.x*g.y);isFinite(G)&&(m.copy(h).multiplyScalar(d.y).addScaledVector(p,-g.y).multiplyScalar(G),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-d.x).multiplyScalar(G),f[M].add(m),f[C].add(m),f[N].add(m),u[M].add(x),u[C].add(x),u[N].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let M=0,C=T.length;M<C;++M){const N=T[M],G=N.start,F=N.count;for(let H=G,z=G+F;H<z;H+=3)y(n[H+0],n[H+1],n[H+2])}const w=new ae,b=new ae,S=new ae,U=new ae;function O(M){S.fromArray(a,M*3),U.copy(S);const C=f[M];w.copy(C),w.sub(S.multiplyScalar(S.dot(C))).normalize(),b.crossVectors(U,C);const G=b.dot(u[M])<0?-1:1;o[M*4]=w.x,o[M*4+1]=w.y,o[M*4+2]=w.z,o[M*4+3]=G}for(let M=0,C=T.length;M<C;++M){const N=T[M],G=N.start,F=N.count;for(let H=G,z=G+F;H<z;H+=3)O(n[H+0]),O(n[H+1]),O(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new ae,a=new ae,l=new ae,s=new ae,o=new ae,f=new ae,u=new ae,c=new ae;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),g=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),l.fromBufferAttribute(t,d),u.subVectors(l,a),c.subVectors(r,a),u.cross(c),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),f.fromBufferAttribute(n,d),s.add(u),o.add(u),f.add(u),n.setXYZ(_,s.x,s.y,s.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,f.x,f.y,f.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),l.fromBufferAttribute(t,h+2),u.subVectors(l,a),c.subVectors(r,a),u.cross(c),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(s,o){const f=s.array,u=s.itemSize,c=s.normalized,h=new f.constructor(o.length*u);let p=0,_=0;for(let g=0,d=o.length;g<d;g++){s.isInterleavedBufferAttribute?p=o[g]*s.data.stride+s.offset:p=o[g]*u;for(let m=0;m<u;m++)h[_++]=f[p++]}return new Jt(h,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,n=this.index.array,r=this.attributes;for(const s in r){const o=r[s],f=e(o,n);t.setAttribute(s,f)}const a=this.morphAttributes;for(const s in a){const o=[],f=a[s];for(let u=0,c=f.length;u<c;u++){const h=f[u],p=e(h,n);o.push(p)}t.morphAttributes[s]=o}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let s=0,o=l.length;s<o;s++){const f=l[s];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const f in o)o[f]!==void 0&&(e[f]=o[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const o in n){const f=n[o];e.data.attributes[o]=f.toJSON(e.data)}const r={};let a=!1;for(const o in this.morphAttributes){const f=this.morphAttributes[o],u=[];for(let c=0,h=f.length;c<h;c++){const p=f[c];u.push(p.toJSON(e.data))}u.length>0&&(r[o]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const u=r[f];this.setAttribute(f,u.clone(t))}const a=e.morphAttributes;for(const f in a){const u=[],c=a[f];for(let h=0,p=c.length;h<p;h++)u.push(c[h].clone(t));this.morphAttributes[f]=u}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,u=l.length;f<u;f++){const c=l[f];this.addGroup(c.start,c.count,c.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const o=e.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ho=new gt,In=new Ou,or=new qa,po=new ae,oi=new ae,li=new ae,ci=new ae,_a=new ae,lr=new ae,cr=new nt,ur=new nt,fr=new nt,mo=new ae,_o=new ae,go=new ae,hr=new ae,dr=new ae;class zt extends Lt{constructor(e=new xn,t=new Nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){lr.set(0,0,0);for(let o=0,f=a.length;o<f;o++){const u=s[o],c=a[o];u!==0&&(_a.fromBufferAttribute(c,e),l?lr.addScaledVector(_a,u):lr.addScaledVector(_a.sub(t),u))}t.add(lr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(a),In.copy(e.ray).recast(e.near),!(or.containsPoint(In.origin)===!1&&(In.intersectSphere(or,po)===null||In.origin.distanceToSquared(po)>(e.far-e.near)**2))&&(ho.copy(a).invert(),In.copy(e.ray).applyMatrix4(ho),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,s=a.index,o=a.attributes.position,f=a.attributes.uv,u=a.attributes.uv1,c=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(l))for(let _=0,g=h.length;_<g;_++){const d=h[_],m=l[d.materialIndex],x=Math.max(d.start,p.start),y=Math.min(s.count,Math.min(d.start+d.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const b=s.getX(T),S=s.getX(T+1),U=s.getX(T+2);r=pr(this,m,e,n,f,u,c,b,S,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(s.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const x=s.getX(d),y=s.getX(d+1),T=s.getX(d+2);r=pr(this,l,e,n,f,u,c,x,y,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(l))for(let _=0,g=h.length;_<g;_++){const d=h[_],m=l[d.materialIndex],x=Math.max(d.start,p.start),y=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let T=x,w=y;T<w;T+=3){const b=T,S=T+1,U=T+2;r=pr(this,m,e,n,f,u,c,b,S,U),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let d=_,m=g;d<m;d+=3){const x=d,y=d+1,T=d+2;r=pr(this,l,e,n,f,u,c,x,y,T),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function Xu(i,e,t,n,r,a,l,s){let o;if(e.side===Nt?o=n.intersectTriangle(l,a,r,!0,s):o=n.intersectTriangle(r,a,l,e.side===Rn,s),o===null)return null;dr.copy(s),dr.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(dr);return f<t.near||f>t.far?null:{distance:f,point:dr.clone(),object:i}}function pr(i,e,t,n,r,a,l,s,o,f){i.getVertexPosition(s,oi),i.getVertexPosition(o,li),i.getVertexPosition(f,ci);const u=Xu(i,e,t,n,oi,li,ci,hr);if(u){r&&(cr.fromBufferAttribute(r,s),ur.fromBufferAttribute(r,o),fr.fromBufferAttribute(r,f),u.uv=en.getInterpolation(hr,oi,li,ci,cr,ur,fr,new nt)),a&&(cr.fromBufferAttribute(a,s),ur.fromBufferAttribute(a,o),fr.fromBufferAttribute(a,f),u.uv1=en.getInterpolation(hr,oi,li,ci,cr,ur,fr,new nt),u.uv2=u.uv1),l&&(mo.fromBufferAttribute(l,s),_o.fromBufferAttribute(l,o),go.fromBufferAttribute(l,f),u.normal=en.getInterpolation(hr,oi,li,ci,mo,_o,go,new ae),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const c={a:s,b:o,c:f,normal:new ae,materialIndex:0};en.getNormal(oi,li,ci,c.normal),u.face=c}return u}class Yi extends xn{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const s=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const o=[],f=[],u=[],c=[];let h=0,p=0;_("z","y","x",-1,-1,n,t,e,l,a,0),_("z","y","x",1,-1,n,t,-e,l,a,1),_("x","z","y",1,1,e,n,t,r,l,2),_("x","z","y",1,-1,e,n,-t,r,l,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(o),this.setAttribute("position",new mn(f,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(c,2));function _(g,d,m,x,y,T,w,b,S,U,O){const M=T/S,C=w/U,N=T/2,G=w/2,F=b/2,H=S+1,z=U+1;let Q=0,V=0;const ie=new ae;for(let se=0;se<z;se++){const ue=se*C-G;for(let X=0;X<H;X++){const he=X*M-N;ie[g]=he*x,ie[d]=ue*y,ie[m]=F,f.push(ie.x,ie.y,ie.z),ie[g]=0,ie[d]=0,ie[m]=b>0?1:-1,u.push(ie.x,ie.y,ie.z),c.push(X/S),c.push(1-se/U),Q+=1}}for(let se=0;se<U;se++)for(let ue=0;ue<S;ue++){const X=h+ue+H*se,he=h+ue+H*(se+1),j=h+(ue+1)+H*(se+1),ce=h+(ue+1)+H*se;o.push(X,he,ce),o.push(he,j,ce),V+=6}s.addGroup(p,V,O),p+=V,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ei(i[t]);for(const r in n)e[r]=n[r]}return e}function ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){return i.getRenderTarget()===null?i.outputColorSpace:at.workingColorSpace}const Br={clone:Ei,merge:Dt};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=Zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class zl extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new ae,vo=new nt,xo=new nt;class Vt extends zl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wn.x,wn.y).multiplyScalar(-e/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-e/wn.z)}getViewSize(e,t){return this.getViewBounds(e,vo,xo),t.subVectors(xo,vo)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const o=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/o,t-=l.offsetY*n/f,r*=l.width/o,n*=l.height/f}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,fi=1;class qu extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vt(ui,fi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(ui,fi,e,t);a.layers=this.layers,this.add(a);const l=new Vt(ui,fi,e,t);l.layers=this.layers,this.add(l);const s=new Vt(ui,fi,e,t);s.layers=this.layers,this.add(s);const o=new Vt(ui,fi,e,t);o.layers=this.layers,this.add(o);const f=new Vt(ui,fi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,s,o]=t;for(const f of t)this.remove(f);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,s,o,f,u]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,o),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(c,h,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gl extends wt{constructor(e,t,n,r,a,l,s,o,f,u){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,r,a,l,s,o,f,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ku extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xn?Mt:Wt),this.texture=new Gl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yi(5,5,5),a=new Xt({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:nn});a.uniforms.tEquirect.value=t;const l=new zt(r,a),s=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Pt),new qu(1,10,this).update(e,l),t.minFilter=s,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const ga=new ae,$u=new ae,Ju=new tt;class Nn{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ga.subVectors(n,t).cross($u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ga),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ju.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new qa,mr=new ae;class Ka{constructor(e=new Nn,t=new Nn,n=new Nn,r=new Nn,a=new Nn,l=new Nn){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,r=e.elements,a=r[0],l=r[1],s=r[2],o=r[3],f=r[4],u=r[5],c=r[6],h=r[7],p=r[8],_=r[9],g=r[10],d=r[11],m=r[12],x=r[13],y=r[14],T=r[15];if(n[0].setComponents(o-a,h-f,d-p,T-m).normalize(),n[1].setComponents(o+a,h+f,d+p,T+m).normalize(),n[2].setComponents(o+l,h+u,d+_,T+x).normalize(),n[3].setComponents(o-l,h-u,d-_,T-x).normalize(),n[4].setComponents(o-s,h-c,d-g,T-y).normalize(),t===dn)n[5].setComponents(o+s,h+c,d+g,T+y).normalize();else if(t===Dr)n[5].setComponents(s,c,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(e){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(e.matrixWorld),this.intersectsSphere(On)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hl(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Qu(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,u){const c=f.array,h=f.usage,p=c.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,c,h),f.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:_,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:f.version,size:p}}function a(f,u,c){const h=u.array,p=u._updateRange,_=u.updateRanges;if(i.bindBuffer(c,f),p.count===-1&&_.length===0&&i.bufferSubData(c,0,h),_.length!==0){for(let g=0,d=_.length;g<d;g++){const m=_[g];t?i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):i.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(c,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function s(f){f.isInterleavedBufferAttribute&&(f=f.data);const u=n.get(f);u&&(i.deleteBuffer(u.buffer),n.delete(f))}function o(f,u){if(f.isGLBufferAttribute){const h=n.get(f);(!h||h.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const c=n.get(f);if(c===void 0)n.set(f,r(f,u));else if(c.version<f.version){if(c.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(c.buffer,f,u),c.version=f.version}}return{get:l,remove:s,update:o}}class wi extends xn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,s=Math.floor(n),o=Math.floor(r),f=s+1,u=o+1,c=e/s,h=t/o,p=[],_=[],g=[],d=[];for(let m=0;m<u;m++){const x=m*h-l;for(let y=0;y<f;y++){const T=y*c-a;_.push(T,-x,0),g.push(0,0,1),d.push(y/s),d.push(1-m/o)}}for(let m=0;m<o;m++)for(let x=0;x<s;x++){const y=x+f*m,T=x+f*(m+1),w=x+1+f*(m+1),b=x+1+f*m;p.push(y,T,b),p.push(T,w,b)}this.setIndex(p),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
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
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,df=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`
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
}`,Uf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Nf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
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
}`,Vf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,eh=`struct PhysicalMaterial {
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
}`,th=`
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
#endif`,nh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ih=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ah=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ch=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fh=`#if defined( USE_POINTS_UV )
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
#endif`,hh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ph=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
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
#endif`,_h=`#ifdef USE_MORPHTARGETS
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
#endif`,gh=`#ifdef USE_MORPHTARGETS
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
#endif`,vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
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
#endif`,Eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ih=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kh=`float getShadowMask() {
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
}`,zh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gh=`#ifdef USE_SKINNING
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
#endif`,Hh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vh=`#ifdef USE_SKINNING
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
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zh=`#ifdef USE_TRANSMISSION
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
#endif`,qh=`#ifdef USE_TRANSMISSION
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
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
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
}`,od=`#if DEPTH_PACKING == 3200
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
}`,ld=`#define DISTANCE
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
}`,cd=`#define DISTANCE
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
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,pd=`#include <common>
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
}`,md=`uniform vec3 diffuse;
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
}`,_d=`#define LAMBERT
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
}`,gd=`#define LAMBERT
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
}`,vd=`#define MATCAP
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
}`,xd=`#define MATCAP
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
}`,yd=`#define NORMAL
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
}`,bd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,Sd=`#define PHONG
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
}`,Ed=`#define STANDARD
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
}`,wd=`#define STANDARD
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
}`,Td=`#define TOON
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
}`,Ad=`#define TOON
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
}`,Cd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Pd=`#include <common>
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
}`,Ld=`uniform vec3 color;
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
}`,Dd=`uniform float rotation;
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
}`,Ud=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:rf,alphatest_fragment:af,alphatest_pars_fragment:sf,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:hf,bsdfs:df,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:xf,color_fragment:yf,color_pars_fragment:bf,color_pars_vertex:Mf,color_vertex:Sf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:Cf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:If,envmap_pars_fragment:Of,envmap_pars_vertex:Nf,envmap_physical_pars_fragment:Zf,envmap_vertex:Ff,fog_vertex:Bf,fog_pars_vertex:kf,fog_fragment:zf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Hf,lightmap_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:jf,lights_pars_begin:Yf,lights_toon_fragment:qf,lights_toon_pars_fragment:Kf,lights_phong_fragment:$f,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:eh,lights_fragment_begin:th,lights_fragment_maps:nh,lights_fragment_end:ih,logdepthbuf_fragment:rh,logdepthbuf_pars_fragment:ah,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:oh,map_fragment:lh,map_pars_fragment:ch,map_particle_fragment:uh,map_particle_pars_fragment:fh,metalnessmap_fragment:hh,metalnessmap_pars_fragment:dh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:_h,morphtarget_vertex:gh,normal_fragment_begin:vh,normal_fragment_maps:xh,normal_pars_fragment:yh,normal_pars_vertex:bh,normal_vertex:Mh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:Eh,clearcoat_normal_fragment_maps:wh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:Ah,opaque_fragment:Ch,packing:Rh,premultiplied_alpha_fragment:Ph,project_vertex:Lh,dithering_fragment:Dh,dithering_pars_fragment:Uh,roughnessmap_fragment:Ih,roughnessmap_pars_fragment:Oh,shadowmap_pars_fragment:Nh,shadowmap_pars_vertex:Fh,shadowmap_vertex:Bh,shadowmask_pars_fragment:kh,skinbase_vertex:zh,skinning_pars_vertex:Gh,skinning_vertex:Hh,skinnormal_vertex:Vh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:jh,tonemapping_pars_fragment:Yh,transmission_fragment:Zh,transmission_pars_fragment:qh,uv_pars_fragment:Kh,uv_pars_vertex:$h,uv_vertex:Jh,worldpos_vertex:Qh,background_vert:ed,background_frag:td,backgroundCube_vert:nd,backgroundCube_frag:id,cube_vert:rd,cube_frag:ad,depth_vert:sd,depth_frag:od,distanceRGBA_vert:ld,distanceRGBA_frag:cd,equirect_vert:ud,equirect_frag:fd,linedashed_vert:hd,linedashed_frag:dd,meshbasic_vert:pd,meshbasic_frag:md,meshlambert_vert:_d,meshlambert_frag:gd,meshmatcap_vert:vd,meshmatcap_frag:xd,meshnormal_vert:yd,meshnormal_frag:bd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:Ed,meshphysical_frag:wd,meshtoon_vert:Td,meshtoon_frag:Ad,points_vert:Cd,points_frag:Rd,shadow_vert:Pd,shadow_frag:Ld,sprite_vert:Dd,sprite_frag:Ud},Me={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Qt={basic:{uniforms:Dt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Dt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Dt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Dt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Dt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new rt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Dt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Dt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Dt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Dt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Dt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Dt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Dt([Me.common,Me.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Dt([Me.lights,Me.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Qt.physical={uniforms:Dt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const _r={r:0,b:0,g:0};function Id(i,e,t,n,r,a,l){const s=new rt(0);let o=a===!0?0:1,f,u,c=null,h=0,p=null;function _(d,m){let x=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?g(s,o):y&&y.isColor&&(g(y,1),x=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,l):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Or)?(u===void 0&&(u=new zt(new Yi(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Ei(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=at.getTransfer(y.colorSpace)!==st,(c!==y||h!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,c=y,h=y.version,p=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new zt(new wi(2,2),new Xt({name:"BackgroundMaterial",uniforms:Ei(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.toneMapped=at.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||h!==y.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,c=y,h=y.version,p=i.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null))}function g(d,m){d.getRGB(_r,kl(i)),n.buffers.color.setClear(_r.r,_r.g,_r.b,m,l)}return{getClearColor:function(){return s},setClearColor:function(d,m=1){s.set(d),o=m,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,g(s,o)},render:_}}function Od(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,s={},o=d(null);let f=o,u=!1;function c(F,H,z,Q,V){let ie=!1;if(l){const se=g(Q,z,H);f!==se&&(f=se,p(f.object)),ie=m(F,Q,z,V),ie&&x(F,Q,z,V)}else{const se=H.wireframe===!0;(f.geometry!==Q.id||f.program!==z.id||f.wireframe!==se)&&(f.geometry=Q.id,f.program=z.id,f.wireframe=se,ie=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(ie||u)&&(u=!1,U(F,H,z,Q),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function h(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):a.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?i.deleteVertexArray(F):a.deleteVertexArrayOES(F)}function g(F,H,z){const Q=z.wireframe===!0;let V=s[F.id];V===void 0&&(V={},s[F.id]=V);let ie=V[H.id];ie===void 0&&(ie={},V[H.id]=ie);let se=ie[Q];return se===void 0&&(se=d(h()),ie[Q]=se),se}function d(F){const H=[],z=[],Q=[];for(let V=0;V<r;V++)H[V]=0,z[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:Q,object:F,attributes:{},index:null}}function m(F,H,z,Q){const V=f.attributes,ie=H.attributes;let se=0;const ue=z.getAttributes();for(const X in ue)if(ue[X].location>=0){const j=V[X];let ce=ie[X];if(ce===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;se++}return f.attributesNum!==se||f.index!==Q}function x(F,H,z,Q){const V={},ie=H.attributes;let se=0;const ue=z.getAttributes();for(const X in ue)if(ue[X].location>=0){let j=ie[X];j===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),V[X]=ce,se++}f.attributes=V,f.attributesNum=se,f.index=Q}function y(){const F=f.newAttributes;for(let H=0,z=F.length;H<z;H++)F[H]=0}function T(F){w(F,0)}function w(F,H){const z=f.newAttributes,Q=f.enabledAttributes,V=f.attributeDivisors;z[F]=1,Q[F]===0&&(i.enableVertexAttribArray(F),Q[F]=1),V[F]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,H),V[F]=H)}function b(){const F=f.newAttributes,H=f.enabledAttributes;for(let z=0,Q=H.length;z<Q;z++)H[z]!==F[z]&&(i.disableVertexAttribArray(z),H[z]=0)}function S(F,H,z,Q,V,ie,se){se===!0?i.vertexAttribIPointer(F,H,z,V,ie):i.vertexAttribPointer(F,H,z,Q,V,ie)}function U(F,H,z,Q){if(n.isWebGL2===!1&&(F.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const V=Q.attributes,ie=z.getAttributes(),se=H.defaultAttributeValues;for(const ue in ie){const X=ie[ue];if(X.location>=0){let he=V[ue];if(he===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const j=he.normalized,ce=he.itemSize,xe=t.get(he);if(xe===void 0)continue;const we=xe.buffer,ve=xe.type,Se=xe.bytesPerElement,ze=n.isWebGL2===!0&&(ve===i.INT||ve===i.UNSIGNED_INT||he.gpuType===xl);if(he.isInterleavedBufferAttribute){const Ae=he.data,Y=Ae.stride,He=he.offset;if(Ae.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)w(X.location+Pe,Ae.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)T(X.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Pe=0;Pe<X.locationSize;Pe++)S(X.location+Pe,ce/X.locationSize,ve,j,Y*Se,(He+ce/X.locationSize*Pe)*Se,ze)}else{if(he.isInstancedBufferAttribute){for(let Ae=0;Ae<X.locationSize;Ae++)w(X.location+Ae,he.meshPerAttribute);F.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)T(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ae=0;Ae<X.locationSize;Ae++)S(X.location+Ae,ce/X.locationSize,ve,j,ce*Se,ce/X.locationSize*Ae*Se,ze)}}else if(se!==void 0){const j=se[ue];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(X.location,j);break;case 3:i.vertexAttrib3fv(X.location,j);break;case 4:i.vertexAttrib4fv(X.location,j);break;default:i.vertexAttrib1fv(X.location,j)}}}}b()}function O(){N();for(const F in s){const H=s[F];for(const z in H){const Q=H[z];for(const V in Q)_(Q[V].object),delete Q[V];delete H[z]}delete s[F]}}function M(F){if(s[F.id]===void 0)return;const H=s[F.id];for(const z in H){const Q=H[z];for(const V in Q)_(Q[V].object),delete Q[V];delete H[z]}delete s[F.id]}function C(F){for(const H in s){const z=s[H];if(z[F.id]===void 0)continue;const Q=z[F.id];for(const V in Q)_(Q[V].object),delete Q[V];delete z[F.id]}}function N(){G(),u=!0,f!==o&&(f=o,p(f.object))}function G(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:N,resetDefaultState:G,dispose:O,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:T,disableUnusedAttributes:b}}function Nd(i,e,t,n){const r=n.isWebGL2;let a;function l(u){a=u}function s(u,c){i.drawArrays(a,u,c),t.update(c,a,1)}function o(u,c,h){if(h===0)return;let p,_;if(r)p=i,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](a,u,c,h),t.update(c,a,h)}function f(u,c,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(u[_],c[_]);else{p.multiDrawArraysWEBGL(a,u,0,c,0,h);let _=0;for(let g=0;g<h;g++)_+=c[g];t.update(_,a,1)}}this.setMode=l,this.render=s,this.renderInstances=o,this.renderMultiDraw=f}function Fd(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const o=a(s);o!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",o,"instead."),s=o);const f=l||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,T=l||e.has("OES_texture_float"),w=y&&T,b=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:d,maxVaryings:m,maxFragmentUniforms:x,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:w,maxSamples:b}}function Bd(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Nn,s=new tt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){const p=c.length!==0||h||n!==0||r;return r=h,n=c.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,h){t=u(c,h,0)},this.setState=function(c,h,p){const _=c.clippingPlanes,g=c.clipIntersection,d=c.clipShadows,m=i.get(c);if(!r||_===null||_.length===0||a&&!d)a?u(null):f();else{const x=a?0:n,y=x*4;let T=m.clippingState||null;o.value=T,T=u(_,h,y,p);for(let w=0;w!==y;++w)T[w]=t[w];m.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function f(){o.value!==t&&(o.value=t,o.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(c,h,p,_){const g=c!==null?c.length:0;let d=null;if(g!==0){if(d=o.value,_!==!0||d===null){const m=p+g*4,x=h.matrixWorldInverse;s.getNormalMatrix(x),(d===null||d.length<m)&&(d=new Float32Array(m));for(let y=0,T=p;y!==g;++y,T+=4)l.copy(c[y]).applyMatrix4(x,s),l.normal.toArray(d,T),d[T+3]=l.constant}o.value=d,o.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function kd(i){let e=new WeakMap;function t(l,s){return s===Ua?l.mapping=bi:s===Ia&&(l.mapping=Mi),l}function n(l){if(l&&l.isTexture){const s=l.mapping;if(s===Ua||s===Ia)if(e.has(l)){const o=e.get(l).texture;return t(o,l.mapping)}else{const o=l.image;if(o&&o.height>0){const f=new Ku(o.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const s=l.target;s.removeEventListener("dispose",r);const o=e.get(s);o!==void 0&&(e.delete(s),o.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class $a extends zl{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,l,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,yo=[.125,.215,.35,.446,.526,.582],zn=20,va=new $a,bo=new rt;let xa=null,ya=0,ba=0;const Fn=(1+Math.sqrt(5))/2,hi=1/Fn,Mo=[new ae(1,1,1),new ae(-1,1,1),new ae(1,1,-1),new ae(-1,1,-1),new ae(0,Fn,hi),new ae(0,Fn,-hi),new ae(hi,0,Fn),new ae(-hi,0,Fn),new ae(Fn,hi,0),new ae(-Fn,hi,0)];class So{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=To(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,ya,ba),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Yn,format:$t,colorSpace:gn,depthBuffer:!1},r=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(a)),this._blurMaterial=Gd(a,e,t)}return r}_compileMaterial(e){const t=new zt(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,r){const s=new Vt(90,1,t,n),o=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,h=u.toneMapping;u.getClearColor(bo),u.toneMapping=pn,u.autoClear=!1;const p=new Nl({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),_=new zt(new Yi,p);let g=!1;const d=e.background;d?d.isColor&&(p.color.copy(d),e.background=null,g=!0):(p.color.copy(bo),g=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(s.up.set(0,o[m],0),s.lookAt(f[m],0,0)):x===1?(s.up.set(0,0,o[m]),s.lookAt(0,f[m],0)):(s.up.set(0,o[m],0),s.lookAt(0,0,f[m]));const y=this._cubeSize;gr(r,x*y,m>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=c,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bi||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=To()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new zt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const o=this._cubeSize;gr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(l,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Mo[(r-1)%Mo.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,s){const o=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new zt(this._lodPlanes[r],f),h=f.uniforms,p=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*zn-1),g=a/_,d=isFinite(a)?1+Math.floor(u*g):zn;d>zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zn}`);const m=[];let x=0;for(let S=0;S<zn;++S){const U=S/g,O=Math.exp(-U*U/2);m.push(O),S===0?x+=O:S<d&&(x+=2*O)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;h.envMap.value=e.texture,h.samples.value=d,h.weights.value=m,h.latitudinal.value=l==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const T=this._sizeLods[r],w=3*T*(r>y-pi?r-y+pi:0),b=4*(this._cubeSize-T);gr(t,w,b,3*T,2*T),o.setRenderTarget(t),o.render(c,va)}}function zd(i){const e=[],t=[],n=[];let r=i;const a=i-pi+1+yo.length;for(let l=0;l<a;l++){const s=Math.pow(2,r);t.push(s);let o=1/s;l>i-pi?o=yo[l-i+pi-1]:l===0&&(o=0),n.push(o);const f=1/(s-2),u=-f,c=1+f,h=[u,u,c,u,c,c,u,u,c,c,u,c],p=6,_=6,g=3,d=2,m=1,x=new Float32Array(g*_*p),y=new Float32Array(d*_*p),T=new Float32Array(m*_*p);for(let b=0;b<p;b++){const S=b%3*2/3-1,U=b>2?0:-1,O=[S,U,0,S+2/3,U,0,S+2/3,U+1,0,S,U,0,S+2/3,U+1,0,S,U+1,0];x.set(O,g*_*b),y.set(h,d*_*b);const M=[b,b,b,b,b,b];T.set(M,m*_*b)}const w=new xn;w.setAttribute("position",new Jt(x,g)),w.setAttribute("uv",new Jt(y,d)),w.setAttribute("faceIndex",new Jt(T,m)),e.push(w),r>pi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(i,e,t){const n=new vn(i,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Gd(i,e,t){const n=new Float32Array(zn),r=new ae(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function wo(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ja(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function To(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Ja(){return`

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
	`}function Hd(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const o=s.mapping,f=o===Ua||o===Ia,u=o===bi||o===Mi;if(f||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let c=e.get(s);return t===null&&(t=new So(i)),c=f?t.fromEquirectangular(s,c):t.fromCubemap(s,c),e.set(s,c),c.texture}else{if(e.has(s))return e.get(s).texture;{const c=s.image;if(f&&c&&c.height>0||u&&c&&r(c)){t===null&&(t=new So(i));const h=f?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function r(s){let o=0;const f=6;for(let u=0;u<f;u++)s[u]!==void 0&&o++;return o===f}function a(s){const o=s.target;o.removeEventListener("dispose",a);const f=e.get(o);f!==void 0&&(e.delete(o),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Vd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wd(i,e,t,n){const r={},a=new WeakMap;function l(c){const h=c.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let d=0,m=g.length;d<m;d++)e.remove(g[d])}h.removeEventListener("dispose",l),delete r[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(c,h){return r[h.id]===!0||(h.addEventListener("dispose",l),r[h.id]=!0,t.memory.geometries++),h}function o(c){const h=c.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const p=c.morphAttributes;for(const _ in p){const g=p[_];for(let d=0,m=g.length;d<m;d++)e.update(g[d],i.ARRAY_BUFFER)}}function f(c){const h=[],p=c.index,_=c.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let y=0,T=x.length;y<T;y+=3){const w=x[y+0],b=x[y+1],S=x[y+2];h.push(w,b,b,S,S,w)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,T=x.length/3-1;y<T;y+=3){const w=y+0,b=y+1,S=y+2;h.push(w,b,b,S,S,w)}}else return;const d=new(Pl(h)?Bl:Fl)(h,1);d.version=g;const m=a.get(c);m&&e.remove(m),a.set(c,d)}function u(c){const h=a.get(c);if(h){const p=c.index;p!==null&&h.version<p.version&&f(c)}else f(c);return a.get(c)}return{get:s,update:o,getWireframeAttribute:u}}function Xd(i,e,t,n){const r=n.isWebGL2;let a;function l(p){a=p}let s,o;function f(p){s=p.type,o=p.bytesPerElement}function u(p,_){i.drawElements(a,_,s,p*o),t.update(_,a,1)}function c(p,_,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](a,_,s,p*o,g),t.update(_,a,g)}function h(p,_,g){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<g;m++)this.render(p[m]/o,_[m]);else{d.multiDrawElementsWEBGL(a,_,0,s,p,0,g);let m=0;for(let x=0;x<g;x++)m+=_[x];t.update(m,a,1)}}this.setMode=l,this.setIndex=f,this.render=u,this.renderInstances=c,this.renderMultiDraw=h}function jd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,s){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Yd(i,e){return i[0]-e[0]}function Zd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qd(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new St,s=[];for(let f=0;f<8;f++)s[f]=[f,0];function o(f,u,c){const h=f.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let d=a.get(u);if(d===void 0||d.count!==g){let H=function(){G.dispose(),a.delete(u),u.removeEventListener("dispose",H)};var p=H;d!==void 0&&d.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],U=u.morphAttributes.color||[];let O=0;y===!0&&(O=1),T===!0&&(O=2),w===!0&&(O=3);let M=u.attributes.position.count*O,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const N=new Float32Array(M*C*4*g),G=new Ul(N,M,C,g);G.type=hn,G.needsUpdate=!0;const F=O*4;for(let z=0;z<g;z++){const Q=b[z],V=S[z],ie=U[z],se=M*C*4*z;for(let ue=0;ue<Q.count;ue++){const X=ue*F;y===!0&&(l.fromBufferAttribute(Q,ue),N[se+X+0]=l.x,N[se+X+1]=l.y,N[se+X+2]=l.z,N[se+X+3]=0),T===!0&&(l.fromBufferAttribute(V,ue),N[se+X+4]=l.x,N[se+X+5]=l.y,N[se+X+6]=l.z,N[se+X+7]=0),w===!0&&(l.fromBufferAttribute(ie,ue),N[se+X+8]=l.x,N[se+X+9]=l.y,N[se+X+10]=l.z,N[se+X+11]=ie.itemSize===4?l.w:1)}}d={count:g,texture:G,size:new nt(M,C)},a.set(u,d),u.addEventListener("dispose",H)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const x=u.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h),c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let T=0;T<_;T++)g[T]=[T,0];n[u.id]=g}for(let T=0;T<_;T++){const w=g[T];w[0]=T,w[1]=h[T]}g.sort(Zd);for(let T=0;T<8;T++)T<_&&g[T][1]?(s[T][0]=g[T][0],s[T][1]=g[T][1]):(s[T][0]=Number.MAX_SAFE_INTEGER,s[T][1]=0);s.sort(Yd);const d=u.morphAttributes.position,m=u.morphAttributes.normal;let x=0;for(let T=0;T<8;T++){const w=s[T],b=w[0],S=w[1];b!==Number.MAX_SAFE_INTEGER&&S?(d&&u.getAttribute("morphTarget"+T)!==d[b]&&u.setAttribute("morphTarget"+T,d[b]),m&&u.getAttribute("morphNormal"+T)!==m[b]&&u.setAttribute("morphNormal"+T,m[b]),r[T]=S,x+=S):(d&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),m&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const y=u.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:o}}function Kd(i,e,t,n){let r=new WeakMap;function a(o){const f=n.render.frame,u=o.geometry,c=e.get(o,u);if(r.get(c)!==f&&(e.update(c),r.set(c,f)),o.isInstancedMesh&&(o.hasEventListener("dispose",s)===!1&&o.addEventListener("dispose",s),r.get(o)!==f&&(t.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,i.ARRAY_BUFFER),r.set(o,f))),o.isSkinnedMesh){const h=o.skeleton;r.get(h)!==f&&(h.update(),r.set(h,f))}return c}function l(){r=new WeakMap}function s(o){const f=o.target;f.removeEventListener("dispose",s),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class Vl extends wt{constructor(e,t,n,r,a,l,s,o,f,u){if(u=u!==void 0?u:Wn,u!==Wn&&u!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Wn&&(n=An),n===void 0&&u===Si&&(n=Vn),super(null,r,a,l,s,o,u,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Et,this.minFilter=o!==void 0?o:Et,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wl=new wt,Xl=new Vl(1,1);Xl.compareFunction=Rl;const jl=new Ul,Yl=new Uu,Zl=new Gl,Ao=[],Co=[],Ro=new Float32Array(16),Po=new Float32Array(9),Lo=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Ao[r];if(a===void 0&&(a=new Float32Array(r),Ao[r]=a),e!==0){n.toArray(a,0);for(let l=1,s=0;l!==e;++l)s+=t,i[l].toArray(a,s)}return a}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kr(i,e){let t=Co[e];t===void 0&&(t=new Int32Array(e),Co[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $d(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Lo.set(n),i.uniformMatrix2fv(this.addr,!1,Lo),xt(t,n)}}function np(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Po.set(n),i.uniformMatrix3fv(this.addr,!1,Po),xt(t,n)}}function ip(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(vt(t,n))return;Ro.set(n),i.uniformMatrix4fv(this.addr,!1,Ro),xt(t,n)}}function rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function hp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?Xl:Wl;t.setTexture2D(e||a,r)}function dp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Yl,r)}function pp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Zl,r)}function mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||jl,r)}function _p(i){switch(i){case 5126:return $d;case 35664:return Jd;case 35665:return Qd;case 35666:return ep;case 35674:return tp;case 35675:return np;case 35676:return ip;case 5124:case 35670:return rp;case 35667:case 35671:return ap;case 35668:case 35672:return sp;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return hp;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function gp(i,e){i.uniform1fv(this.addr,e)}function vp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function xp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function yp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function bp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sp(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ep(i,e){i.uniform1iv(this.addr,e)}function wp(i,e){i.uniform2iv(this.addr,e)}function Tp(i,e){i.uniform3iv(this.addr,e)}function Ap(i,e){i.uniform4iv(this.addr,e)}function Cp(i,e){i.uniform1uiv(this.addr,e)}function Rp(i,e){i.uniform2uiv(this.addr,e)}function Pp(i,e){i.uniform3uiv(this.addr,e)}function Lp(i,e){i.uniform4uiv(this.addr,e)}function Dp(i,e,t){const n=this.cache,r=e.length,a=kr(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||Wl,a[l])}function Up(i,e,t){const n=this.cache,r=e.length,a=kr(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Yl,a[l])}function Ip(i,e,t){const n=this.cache,r=e.length,a=kr(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||Zl,a[l])}function Op(i,e,t){const n=this.cache,r=e.length,a=kr(t,r);vt(n,a)||(i.uniform1iv(this.addr,a),xt(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||jl,a[l])}function Np(i){switch(i){case 5126:return gp;case 35664:return vp;case 35665:return xp;case 35666:return yp;case 35674:return bp;case 35675:return Mp;case 35676:return Sp;case 5124:case 35670:return Ep;case 35667:case 35671:return wp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Rp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Ip;case 36289:case 36303:case 36311:case 36292:return Op}}class Fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_p(t.type)}}class Bp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Np(t.type)}}class kp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Do(i,e){i.seq.push(e),i.map[e.id]=e}function zp(i,e,t){const n=i.name,r=n.length;for(Ma.lastIndex=0;;){const a=Ma.exec(n),l=Ma.lastIndex;let s=a[1];const o=a[2]==="]",f=a[3];if(o&&(s=s|0),f===void 0||f==="["&&l+2===r){Do(t,f===void 0?new Fp(s,i,e):new Bp(s,i,e));break}else{let c=t.map[s];c===void 0&&(c=new kp(s),Do(t,c)),t=c}}}class wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);zp(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const s=t[a],o=n[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function Uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gp=37297;let Hp=0;function Vp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const s=l+1;n.push(`${s===e?">":" "} ${s}: ${t[l]}`)}return n.join(`
`)}function Wp(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===Lr&&t===Pr?n="LinearDisplayP3ToLinearSRGB":e===Pr&&t===Lr&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case Nr:return[n,"LinearTransferOETF"];case Mt:case Za:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Io(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Vp(i.getShaderSource(e),l)}else return r}function Xp(i,e){const t=Wp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jp(i,e){let t;switch(e){case dl:t="Linear";break;case pl:t="Reinhard";break;case ml:t="OptimizedCineon";break;case _l:t="ACESFilmic";break;case gl:t="AgX";break;case cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Yp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mi).join(`
`)}function Zp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mi).join(`
`)}function qp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:s}}return t}function mi(i){return i!==""}function Oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function No(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $p=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace($p,Qp)}const Jp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qp(i,e){let t=$e[e];if(t===void 0){const n=Jp.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fo(i){return i.replace(em,tm)}function tm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Bo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function nm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===un&&(e="SHADOWMAP_TYPE_VSM"),e}function im(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function am(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hl:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function sm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function om(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,s=t.fragmentShader;const o=nm(t),f=im(t),u=rm(t),c=am(t),h=sm(t),p=t.isWebGL2?"":Yp(t),_=Zp(t),g=qp(a),d=r.createProgram();let m,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mi).join(`
`),m.length>0&&(m+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mi).join(`
`),x.length>0&&(x+=`
`)):(m=[Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mi).join(`
`),x=[p,Bo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+o:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?$e.tonemapping_pars_fragment:"",t.toneMapping!==pn?jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Xp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mi).join(`
`)),l=za(l),l=Oo(l,t),l=No(l,t),s=za(s),s=Oo(s,t),s=No(s,t),l=Fo(l),s=Fo(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=y+m+l,w=y+x+s,b=Uo(r,r.VERTEX_SHADER,T),S=Uo(r,r.FRAGMENT_SHADER,w);r.attachShader(d,b),r.attachShader(d,S),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d);function U(N){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(d).trim(),F=r.getShaderInfoLog(b).trim(),H=r.getShaderInfoLog(S).trim();let z=!0,Q=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,d,b,S);else{const V=Io(r,b,"vertex"),ie=Io(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+V+`
`+ie)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||H==="")&&(Q=!1);Q&&(N.diagnostics={runnable:z,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:x}})}r.deleteShader(b),r.deleteShader(S),O=new wr(r,d),M=Kp(r,d)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let M;this.getAttributes=function(){return M===void 0&&U(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(d,Gp)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hp++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=S,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new um(e),t.set(e,n)),n}}class um{constructor(e){this.id=lm++,this.code=e,this.usedTimes=0}}function fm(i,e,t,n,r,a,l){const s=new Il,o=new cm,f=new Set,u=[],c=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(M){return f.add(M),M===0?"uv":`uv${M}`}function m(M,C,N,G,F){const H=G.fog,z=F.geometry,Q=M.isMeshStandardMaterial?G.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),ie=V&&V.mapping===Or?V.image.height:null,se=g[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const ue=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,X=ue!==void 0?ue.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let j,ce,xe,we;if(se){const $=Qt[se];j=$.vertexShader,ce=$.fragmentShader}else j=M.vertexShader,ce=M.fragmentShader,o.update(M),xe=o.getVertexShaderID(M),we=o.getFragmentShaderID(M);const ve=i.getRenderTarget(),Se=F.isInstancedMesh===!0,ze=F.isBatchedMesh===!0,Ae=!!M.map,Y=!!M.matcap,He=!!V,Pe=!!M.aoMap,Oe=!!M.lightMap,Le=!!M.bumpMap,Be=!!M.normalMap,Ne=!!M.displacementMap,I=!!M.emissiveMap,L=!!M.metalnessMap,J=!!M.roughnessMap,fe=M.anisotropy>0,oe=M.clearcoat>0,_e=M.iridescence>0,De=M.sheen>0,ye=M.transmission>0,Ee=fe&&!!M.anisotropyMap,Fe=oe&&!!M.clearcoatMap,Ge=oe&&!!M.clearcoatNormalMap,de=oe&&!!M.clearcoatRoughnessMap,Xe=_e&&!!M.iridescenceMap,Ve=_e&&!!M.iridescenceThicknessMap,Ie=De&&!!M.sheenColorMap,Ue=De&&!!M.sheenRoughnessMap,me=!!M.specularMap,A=!!M.specularColorMap,te=!!M.specularIntensityMap,le=ye&&!!M.transmissionMap,ge=ye&&!!M.thicknessMap,k=!!M.gradientMap,R=!!M.alphaMap,E=M.alphaTest>0,W=!!M.alphaHash,pe=!!M.extensions;let v=pn;M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(v=i.toneMapping);const K={isWebGL2:c,shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:j,fragmentShader:ce,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ze,instancing:Se,instancingColor:Se&&F.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:gn,alphaToCoverage:!!M.alphaToCoverage,map:Ae,matcap:Y,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:ie,aoMap:Pe,lightMap:Oe,bumpMap:Le,normalMap:Be,displacementMap:p&&Ne,emissiveMap:I,normalMapObjectSpace:Be&&M.normalMapType===xu,normalMapTangentSpace:Be&&M.normalMapType===Cl,metalnessMap:L,roughnessMap:J,anisotropy:fe,anisotropyMap:Ee,clearcoat:oe,clearcoatMap:Fe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:de,iridescence:_e,iridescenceMap:Xe,iridescenceThicknessMap:Ve,sheen:De,sheenColorMap:Ie,sheenRoughnessMap:Ue,specularMap:me,specularColorMap:A,specularIntensityMap:te,transmission:ye,transmissionMap:le,thicknessMap:ge,gradientMap:k,opaque:M.transparent===!1&&M.blending===_i&&M.alphaToCoverage===!1,alphaMap:R,alphaTest:E,alphaHash:W,combine:M.combine,mapUv:Ae&&d(M.map.channel),aoMapUv:Pe&&d(M.aoMap.channel),lightMapUv:Oe&&d(M.lightMap.channel),bumpMapUv:Le&&d(M.bumpMap.channel),normalMapUv:Be&&d(M.normalMap.channel),displacementMapUv:Ne&&d(M.displacementMap.channel),emissiveMapUv:I&&d(M.emissiveMap.channel),metalnessMapUv:L&&d(M.metalnessMap.channel),roughnessMapUv:J&&d(M.roughnessMap.channel),anisotropyMapUv:Ee&&d(M.anisotropyMap.channel),clearcoatMapUv:Fe&&d(M.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&d(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&d(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&d(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&d(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&d(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&d(M.sheenRoughnessMap.channel),specularMapUv:me&&d(M.specularMap.channel),specularColorMapUv:A&&d(M.specularColorMap.channel),specularIntensityMapUv:te&&d(M.specularIntensityMap.channel),transmissionMapUv:le&&d(M.transmissionMap.channel),thicknessMapUv:ge&&d(M.thicknessMap.channel),alphaMapUv:R&&d(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Be||fe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(Ae||R),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:v,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Nt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:pe&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return K.vertexUv1s=f.has(1),K.vertexUv2s=f.has(2),K.vertexUv3s=f.has(3),f.clear(),K}function x(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)C.push(N),C.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(y(C,M),T(C,M),C.push(i.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function y(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function T(M,C){s.disableAll(),C.isWebGL2&&s.enable(0),C.supportsVertexTextures&&s.enable(1),C.instancing&&s.enable(2),C.instancingColor&&s.enable(3),C.matcap&&s.enable(4),C.envMap&&s.enable(5),C.normalMapObjectSpace&&s.enable(6),C.normalMapTangentSpace&&s.enable(7),C.clearcoat&&s.enable(8),C.iridescence&&s.enable(9),C.alphaTest&&s.enable(10),C.vertexColors&&s.enable(11),C.vertexAlphas&&s.enable(12),C.vertexUv1s&&s.enable(13),C.vertexUv2s&&s.enable(14),C.vertexUv3s&&s.enable(15),C.vertexTangents&&s.enable(16),C.anisotropy&&s.enable(17),C.alphaHash&&s.enable(18),C.batching&&s.enable(19),M.push(s.mask),s.disableAll(),C.fog&&s.enable(0),C.useFog&&s.enable(1),C.flatShading&&s.enable(2),C.logarithmicDepthBuffer&&s.enable(3),C.skinning&&s.enable(4),C.morphTargets&&s.enable(5),C.morphNormals&&s.enable(6),C.morphColors&&s.enable(7),C.premultipliedAlpha&&s.enable(8),C.shadowMapEnabled&&s.enable(9),C.useLegacyLights&&s.enable(10),C.doubleSided&&s.enable(11),C.flipSided&&s.enable(12),C.useDepthPacking&&s.enable(13),C.dithering&&s.enable(14),C.transmission&&s.enable(15),C.sheen&&s.enable(16),C.opaque&&s.enable(17),C.pointsUvs&&s.enable(18),C.decodeVideoTexture&&s.enable(19),C.alphaToCoverage&&s.enable(20),M.push(s.mask)}function w(M){const C=g[M.type];let N;if(C){const G=Qt[C];N=Br.clone(G.uniforms)}else N=M.uniforms;return N}function b(M,C){let N;for(let G=0,F=u.length;G<F;G++){const H=u[G];if(H.cacheKey===C){N=H,++N.usedTimes;break}}return N===void 0&&(N=new om(i,C,M,a),u.push(N)),N}function S(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),M.destroy()}}function U(M){o.remove(M)}function O(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:w,acquireProgram:b,releaseProgram:S,releaseShaderCache:U,programs:u,dispose:O}}function hm(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,s){i.get(a)[l]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function dm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zo(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(c,h,p,_,g,d){let m=i[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:p,groupOrder:_,renderOrder:c.renderOrder,z:g,group:d},i[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=p,m.groupOrder=_,m.renderOrder=c.renderOrder,m.z=g,m.group=d),e++,m}function s(c,h,p,_,g,d){const m=l(c,h,p,_,g,d);p.transmission>0?n.push(m):p.transparent===!0?r.push(m):t.push(m)}function o(c,h,p,_,g,d){const m=l(c,h,p,_,g,d);p.transmission>0?n.unshift(m):p.transparent===!0?r.unshift(m):t.unshift(m)}function f(c,h){t.length>1&&t.sort(c||dm),n.length>1&&n.sort(h||ko),r.length>1&&r.sort(h||ko)}function u(){for(let c=e,h=i.length;c<h;c++){const p=i[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:o,finish:u,sort:f}}function pm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new zo,i.set(n,[l])):r>=a.length?(l=new zo,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new rt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return i[e.id]=t,t}}}function _m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gm=0;function vm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xm(i,e){const t=new mm,n=_m(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new ae);const a=new ae,l=new gt,s=new gt;function o(u,c){let h=0,p=0,_=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let g=0,d=0,m=0,x=0,y=0,T=0,w=0,b=0,S=0,U=0,O=0;u.sort(vm);const M=c===!0?Math.PI:1;for(let N=0,G=u.length;N<G;N++){const F=u[N],H=F.color,z=F.intensity,Q=F.distance,V=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=H.r*z*M,p+=H.g*z*M,_+=H.b*z*M;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(F.sh.coefficients[ie],z);O++}else if(F.isDirectionalLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*M),F.castShadow){const se=F.shadow,ue=n.get(F);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,r.directionalShadow[g]=ue,r.directionalShadowMap[g]=V,r.directionalShadowMatrix[g]=F.shadow.matrix,T++}r.directional[g]=ie,g++}else if(F.isSpotLight){const ie=t.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy(H).multiplyScalar(z*M),ie.distance=Q,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,r.spot[m]=ie;const se=F.shadow;if(F.map&&(r.spotLightMap[S]=F.map,S++,se.updateMatrices(F),F.castShadow&&U++),r.spotLightMatrix[m]=se.matrix,F.castShadow){const ue=n.get(F);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,r.spotShadow[m]=ue,r.spotShadowMap[m]=V,b++}m++}else if(F.isRectAreaLight){const ie=t.get(F);ie.color.copy(H).multiplyScalar(z),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),r.rectArea[x]=ie,x++}else if(F.isPointLight){const ie=t.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity*M),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const se=F.shadow,ue=n.get(F);ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,ue.shadowCameraNear=se.camera.near,ue.shadowCameraFar=se.camera.far,r.pointShadow[d]=ue,r.pointShadowMap[d]=V,r.pointShadowMatrix[d]=F.shadow.matrix,w++}r.point[d]=ie,d++}else if(F.isHemisphereLight){const ie=t.get(F);ie.skyColor.copy(F.color).multiplyScalar(z*M),ie.groundColor.copy(F.groundColor).multiplyScalar(z*M),r.hemi[y]=ie,y++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==g||C.pointLength!==d||C.spotLength!==m||C.rectAreaLength!==x||C.hemiLength!==y||C.numDirectionalShadows!==T||C.numPointShadows!==w||C.numSpotShadows!==b||C.numSpotMaps!==S||C.numLightProbes!==O)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=x,r.point.length=d,r.hemi.length=y,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+S-U,r.spotLightMap.length=S,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,C.directionalLength=g,C.pointLength=d,C.spotLength=m,C.rectAreaLength=x,C.hemiLength=y,C.numDirectionalShadows=T,C.numPointShadows=w,C.numSpotShadows=b,C.numSpotMaps=S,C.numLightProbes=O,r.version=gm++)}function f(u,c){let h=0,p=0,_=0,g=0,d=0;const m=c.matrixWorldInverse;for(let x=0,y=u.length;x<y;x++){const T=u[x];if(T.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),h++}else if(T.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),_++}else if(T.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),s.identity(),l.copy(T.matrixWorld),l.premultiply(m),s.extractRotation(l),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),g++}else if(T.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),p++}else if(T.isHemisphereLight){const w=r.hemi[d];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),d++}}}return{setup:o,setupView:f,state:r}}function Go(i,e){const t=new xm(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(c){n.push(c)}function s(c){r.push(c)}function o(c){t.setup(n,c)}function f(c){t.setupView(n,c)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:o,setupLightsView:f,pushLight:l,pushShadow:s}}function ym(i,e){let t=new WeakMap;function n(a,l=0){const s=t.get(a);let o;return s===void 0?(o=new Go(i,e),t.set(a,[o])):l>=s.length?(o=new Go(i,e),s.push(o)):o=s[l],o}function r(){t=new WeakMap}return{get:n,dispose:r}}class ql extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function Em(i,e,t){let n=new Ka;const r=new nt,a=new nt,l=new St,s=new ql({depthPacking:Al}),o=new bm,f={},u=t.maxTextureSize,c={[Rn]:Nt,[Nt]:Rn,[fn]:fn},h=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new xn;_.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new zt(_,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let m=this.type;this.render=function(b,S,U){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;const O=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=m!==un&&this.type===un,F=m===un&&this.type!==un;for(let H=0,z=b.length;H<z;H++){const Q=b[H],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ie=V.getFrameExtents();if(r.multiply(ie),a.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/ie.x),r.x=a.x*ie.x,V.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/ie.y),r.y=a.y*ie.y,V.mapSize.y=a.y)),V.map===null||G===!0||F===!0){const ue=this.type!==un?{minFilter:Et,magFilter:Et}:{};V.map!==null&&V.map.dispose(),V.map=new vn(r.x,r.y,ue),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const se=V.getViewportCount();for(let ue=0;ue<se;ue++){const X=V.getViewport(ue);l.set(a.x*X.x,a.y*X.y,a.x*X.z,a.y*X.w),N.viewport(l),V.updateMatrices(Q,ue),n=V.getFrustum(),T(S,U,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===un&&x(V,U),V.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(O,M,C)};function x(b,S){const U=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(S,null,U,h,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(S,null,U,p,g,null)}function y(b,S,U,O){let M=null;const C=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)M=C;else if(M=U.isPointLight===!0?o:s,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const N=M.uuid,G=S.uuid;let F=f[N];F===void 0&&(F={},f[N]=F);let H=F[G];H===void 0&&(H=M.clone(),F[G]=H,S.addEventListener("dispose",w)),M=H}if(M.visible=S.visible,M.wireframe=S.wireframe,O===un?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:c[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=U}return M}function T(b,S,U,O,M){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===un)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const G=e.update(b),F=b.material;if(Array.isArray(F)){const H=G.groups;for(let z=0,Q=H.length;z<Q;z++){const V=H[z],ie=F[V.materialIndex];if(ie&&ie.visible){const se=y(b,ie,O,M);b.onBeforeShadow(i,b,S,U,G,se,V),i.renderBufferDirect(U,null,G,se,b,V),b.onAfterShadow(i,b,S,U,G,se,V)}}}else if(F.visible){const H=y(b,F,O,M);b.onBeforeShadow(i,b,S,U,G,H,null),i.renderBufferDirect(U,null,G,H,b,null),b.onAfterShadow(i,b,S,U,G,H,null)}}const N=b.children;for(let G=0,F=N.length;G<F;G++)T(N[G],S,U,O,M)}function w(b){b.target.removeEventListener("dispose",w);for(const U in f){const O=f[U],M=b.target.uuid;M in O&&(O[M].dispose(),delete O[M])}}}function wm(i,e,t){const n=t.isWebGL2;function r(){let R=!1;const E=new St;let W=null;const pe=new St(0,0,0,0);return{setMask:function(v){W!==v&&!R&&(i.colorMask(v,v,v,v),W=v)},setLocked:function(v){R=v},setClear:function(v,K,$,P,B){B===!0&&(v*=P,K*=P,$*=P),E.set(v,K,$,P),pe.equals(E)===!1&&(i.clearColor(v,K,$,P),pe.copy(E))},reset:function(){R=!1,W=null,pe.set(-1,0,0,0)}}}function a(){let R=!1,E=null,W=null,pe=null;return{setTest:function(v){v?Se(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(v){E!==v&&!R&&(i.depthMask(v),E=v)},setFunc:function(v){if(W!==v){switch(v){case eu:i.depthFunc(i.NEVER);break;case tu:i.depthFunc(i.ALWAYS);break;case nu:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case iu:i.depthFunc(i.EQUAL);break;case ru:i.depthFunc(i.GEQUAL);break;case au:i.depthFunc(i.GREATER);break;case su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=v}},setLocked:function(v){R=v},setClear:function(v){pe!==v&&(i.clearDepth(v),pe=v)},reset:function(){R=!1,E=null,W=null,pe=null}}}function l(){let R=!1,E=null,W=null,pe=null,v=null,K=null,$=null,P=null,B=null;return{setTest:function(Z){R||(Z?Se(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Z){E!==Z&&!R&&(i.stencilMask(Z),E=Z)},setFunc:function(Z,Te,be){(W!==Z||pe!==Te||v!==be)&&(i.stencilFunc(Z,Te,be),W=Z,pe=Te,v=be)},setOp:function(Z,Te,be){(K!==Z||$!==Te||P!==be)&&(i.stencilOp(Z,Te,be),K=Z,$=Te,P=be)},setLocked:function(Z){R=Z},setClear:function(Z){B!==Z&&(i.clearStencil(Z),B=Z)},reset:function(){R=!1,E=null,W=null,pe=null,v=null,K=null,$=null,P=null,B=null}}}const s=new r,o=new a,f=new l,u=new WeakMap,c=new WeakMap;let h={},p={},_=new WeakMap,g=[],d=null,m=!1,x=null,y=null,T=null,w=null,b=null,S=null,U=null,O=new rt(0,0,0),M=0,C=!1,N=null,G=null,F=null,H=null,z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ie=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(se)[1]),V=ie>=1):se.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),V=ie>=2);let ue=null,X={};const he=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ce=new St().fromArray(he),xe=new St().fromArray(j);function we(R,E,W,pe){const v=new Uint8Array(4),K=i.createTexture();i.bindTexture(R,K),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $=0;$<W;$++)n&&(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)?i.texImage3D(E,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,v):i.texImage2D(E+$,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,v);return K}const ve={};ve[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),o.setClear(1),f.setClear(0),Se(i.DEPTH_TEST),o.setFunc(Cr),Ne(!1),I(xs),Se(i.CULL_FACE),Le(nn);function Se(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function ze(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Ae(R,E){return p[R]!==E?(i.bindFramebuffer(R,E),p[R]=E,n&&(R===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=E),R===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=E)),!0):!1}function Y(R,E){let W=g,pe=!1;if(R)if(W=_.get(E),W===void 0&&(W=[],_.set(E,W)),R.isWebGLMultipleRenderTargets){const v=R.texture;if(W.length!==v.length||W[0]!==i.COLOR_ATTACHMENT0){for(let K=0,$=v.length;K<$;K++)W[K]=i.COLOR_ATTACHMENT0+K;W.length=v.length,pe=!0}}else W[0]!==i.COLOR_ATTACHMENT0&&(W[0]=i.COLOR_ATTACHMENT0,pe=!0);else W[0]!==i.BACK&&(W[0]=i.BACK,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function He(R){return d!==R?(i.useProgram(R),d=R,!0):!1}const Pe={[kn]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};if(n)Pe[Ss]=i.MIN,Pe[Es]=i.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(Pe[Ss]=R.MIN_EXT,Pe[Es]=R.MAX_EXT)}const Oe={[Gc]:i.ZERO,[Hc]:i.ONE,[Vc]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Yc]:i.DST_COLOR,[Xc]:i.DST_ALPHA,[Wc]:i.ONE_MINUS_SRC_COLOR,[Da]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[Kc]:i.CONSTANT_COLOR,[$c]:i.ONE_MINUS_CONSTANT_COLOR,[Jc]:i.CONSTANT_ALPHA,[Qc]:i.ONE_MINUS_CONSTANT_ALPHA};function Le(R,E,W,pe,v,K,$,P,B,Z){if(R===nn){m===!0&&(ze(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),R!==Bc){if(R!==x||Z!==C){if((y!==kn||b!==kn)&&(i.blendEquation(i.FUNC_ADD),y=kn,b=kn),Z)switch(R){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ms:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}T=null,w=null,S=null,U=null,O.set(0,0,0),M=0,x=R,C=Z}return}v=v||E,K=K||W,$=$||pe,(E!==y||v!==b)&&(i.blendEquationSeparate(Pe[E],Pe[v]),y=E,b=v),(W!==T||pe!==w||K!==S||$!==U)&&(i.blendFuncSeparate(Oe[W],Oe[pe],Oe[K],Oe[$]),T=W,w=pe,S=K,U=$),(P.equals(O)===!1||B!==M)&&(i.blendColor(P.r,P.g,P.b,B),O.copy(P),M=B),x=R,C=!1}function Be(R,E){R.side===fn?ze(i.CULL_FACE):Se(i.CULL_FACE);let W=R.side===Nt;E&&(W=!W),Ne(W),R.blending===_i&&R.transparent===!1?Le(nn):Le(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const pe=R.stencilWrite;f.setTest(pe),pe&&(f.setMask(R.stencilWriteMask),f.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),f.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),J(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function I(R){R!==Nc?(Se(i.CULL_FACE),R!==G&&(R===xs?i.cullFace(i.BACK):R===Fc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),G=R}function L(R){R!==F&&(V&&i.lineWidth(R),F=R)}function J(R,E,W){R?(Se(i.POLYGON_OFFSET_FILL),(H!==E||z!==W)&&(i.polygonOffset(E,W),H=E,z=W)):ze(i.POLYGON_OFFSET_FILL)}function fe(R){R?Se(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function oe(R){R===void 0&&(R=i.TEXTURE0+Q-1),ue!==R&&(i.activeTexture(R),ue=R)}function _e(R,E,W){W===void 0&&(ue===null?W=i.TEXTURE0+Q-1:W=ue);let pe=X[W];pe===void 0&&(pe={type:void 0,texture:void 0},X[W]=pe),(pe.type!==R||pe.texture!==E)&&(ue!==W&&(i.activeTexture(W),ue=W),i.bindTexture(R,E||ve[R]),pe.type=R,pe.texture=E)}function De(){const R=X[ue];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Fe(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ge(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function de(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ie(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ue(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function A(R){ce.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ce.copy(R))}function te(R){xe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function le(R,E){let W=c.get(E);W===void 0&&(W=new WeakMap,c.set(E,W));let pe=W.get(R);pe===void 0&&(pe=i.getUniformBlockIndex(E,R.name),W.set(R,pe))}function ge(R,E){const pe=c.get(E).get(R);u.get(E)!==pe&&(i.uniformBlockBinding(E,pe,R.__bindingPointIndex),u.set(E,pe))}function k(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,X={},p={},_=new WeakMap,g=[],d=null,m=!1,x=null,y=null,T=null,w=null,b=null,S=null,U=null,O=new rt(0,0,0),M=0,C=!1,N=null,G=null,F=null,H=null,z=null,ce.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),f.reset()}return{buffers:{color:s,depth:o,stencil:f},enable:Se,disable:ze,bindFramebuffer:Ae,drawBuffers:Y,useProgram:He,setBlending:Le,setMaterial:Be,setFlipSided:Ne,setCullFace:I,setLineWidth:L,setPolygonOffset:J,setScissorTest:fe,activeTexture:oe,bindTexture:_e,unbindTexture:De,compressedTexImage2D:ye,compressedTexImage3D:Ee,texImage2D:Ue,texImage3D:me,updateUBOMapping:le,uniformBlockBinding:ge,texStorage2D:Ve,texStorage3D:Ie,texSubImage2D:Fe,texSubImage3D:Ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Xe,scissor:A,viewport:te,reset:k}}function Tm(i,e,t,n,r,a,l){const s=r.isWebGL2,o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let c;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,L){return p?new OffscreenCanvas(I,L):Gi("canvas")}function g(I,L,J,fe){let oe=1;if((I.width>fe||I.height>fe)&&(oe=fe/Math.max(I.width,I.height)),oe<1||L===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const _e=L?ka:Math.floor,De=_e(oe*I.width),ye=_e(oe*I.height);c===void 0&&(c=_(De,ye));const Ee=J?_(De,ye):c;return Ee.width=De,Ee.height=ye,Ee.getContext("2d").drawImage(I,0,0,De,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+De+"x"+ye+")."),Ee}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function d(I){return eo(I.width)&&eo(I.height)}function m(I){return s?!1:I.wrapS!==Kt||I.wrapT!==Kt||I.minFilter!==Et&&I.minFilter!==Pt}function x(I,L){return I.generateMipmaps&&L&&I.minFilter!==Et&&I.minFilter!==Pt}function y(I){i.generateMipmap(I)}function T(I,L,J,fe,oe=!1){if(s===!1)return L;if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e=L;if(L===i.RED&&(J===i.FLOAT&&(_e=i.R32F),J===i.HALF_FLOAT&&(_e=i.R16F),J===i.UNSIGNED_BYTE&&(_e=i.R8)),L===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(_e=i.R8UI),J===i.UNSIGNED_SHORT&&(_e=i.R16UI),J===i.UNSIGNED_INT&&(_e=i.R32UI),J===i.BYTE&&(_e=i.R8I),J===i.SHORT&&(_e=i.R16I),J===i.INT&&(_e=i.R32I)),L===i.RG&&(J===i.FLOAT&&(_e=i.RG32F),J===i.HALF_FLOAT&&(_e=i.RG16F),J===i.UNSIGNED_BYTE&&(_e=i.RG8)),L===i.RGBA){const De=oe?Rr:at.getTransfer(fe);J===i.FLOAT&&(_e=i.RGBA32F),J===i.HALF_FLOAT&&(_e=i.RGBA16F),J===i.UNSIGNED_BYTE&&(_e=De===st?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function w(I,L,J){return x(I,J)===!0||I.isFramebufferTexture&&I.minFilter!==Et&&I.minFilter!==Pt?Math.log2(Math.max(L.width,L.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?L.mipmaps.length:1}function b(I){return I===Et||I===ws||I===Pi?i.NEAREST:i.LINEAR}function S(I){const L=I.target;L.removeEventListener("dispose",S),O(L),L.isVideoTexture&&u.delete(L)}function U(I){const L=I.target;L.removeEventListener("dispose",U),C(L)}function O(I){const L=n.get(I);if(L.__webglInit===void 0)return;const J=I.source,fe=h.get(J);if(fe){const oe=fe[L.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&M(I),Object.keys(fe).length===0&&h.delete(J)}n.remove(I)}function M(I){const L=n.get(I);i.deleteTexture(L.__webglTexture);const J=I.source,fe=h.get(J);delete fe[L.__cacheKey],l.memory.textures--}function C(I){const L=I.texture,J=n.get(I),fe=n.get(L);if(fe.__webglTexture!==void 0&&(i.deleteTexture(fe.__webglTexture),l.memory.textures--),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(J.__webglFramebuffer[oe]))for(let _e=0;_e<J.__webglFramebuffer[oe].length;_e++)i.deleteFramebuffer(J.__webglFramebuffer[oe][_e]);else i.deleteFramebuffer(J.__webglFramebuffer[oe]);J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[oe])}else{if(Array.isArray(J.__webglFramebuffer))for(let oe=0;oe<J.__webglFramebuffer.length;oe++)i.deleteFramebuffer(J.__webglFramebuffer[oe]);else i.deleteFramebuffer(J.__webglFramebuffer);if(J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let oe=0;oe<J.__webglColorRenderbuffer.length;oe++)J.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[oe]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(I.isWebGLMultipleRenderTargets)for(let oe=0,_e=L.length;oe<_e;oe++){const De=n.get(L[oe]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),l.memory.textures--),n.remove(L[oe])}n.remove(L),n.remove(I)}let N=0;function G(){N=0}function F(){const I=N;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),N+=1,I}function H(I){const L=[];return L.push(I.wrapS),L.push(I.wrapT),L.push(I.wrapR||0),L.push(I.magFilter),L.push(I.minFilter),L.push(I.anisotropy),L.push(I.internalFormat),L.push(I.format),L.push(I.type),L.push(I.generateMipmaps),L.push(I.premultiplyAlpha),L.push(I.flipY),L.push(I.unpackAlignment),L.push(I.colorSpace),L.join()}function z(I,L){const J=n.get(I);if(I.isVideoTexture&&Be(I),I.isRenderTargetTexture===!1&&I.version>0&&J.__version!==I.version){const fe=I.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(J,I,L);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+L)}function Q(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){ce(J,I,L);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+L)}function V(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){ce(J,I,L);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+L)}function ie(I,L){const J=n.get(I);if(I.version>0&&J.__version!==I.version){xe(J,I,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+L)}const se={[Oa]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},ue={[Et]:i.NEAREST,[ws]:i.NEAREST_MIPMAP_NEAREST,[Pi]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},X={[yu]:i.NEVER,[Tu]:i.ALWAYS,[bu]:i.LESS,[Rl]:i.LEQUAL,[Mu]:i.EQUAL,[wu]:i.GEQUAL,[Su]:i.GREATER,[Eu]:i.NOTEQUAL};function he(I,L,J){if(L.type===hn&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Pt||L.magFilter===Yr||L.magFilter===Pi||L.magFilter===Gn||L.minFilter===Pt||L.minFilter===Yr||L.minFilter===Pi||L.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),J?(i.texParameteri(I,i.TEXTURE_WRAP_S,se[L.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,se[L.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,se[L.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ue[L.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ue[L.minFilter])):(i.texParameteri(I,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(I,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(L.wrapS!==Kt||L.wrapT!==Kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(I,i.TEXTURE_MAG_FILTER,b(L.magFilter)),i.texParameteri(I,i.TEXTURE_MIN_FILTER,b(L.minFilter)),L.minFilter!==Et&&L.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),L.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,X[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const fe=e.get("EXT_texture_filter_anisotropic");if(L.magFilter===Et||L.minFilter!==Pi&&L.minFilter!==Gn||L.type===hn&&e.has("OES_texture_float_linear")===!1||s===!1&&L.type===Yn&&e.has("OES_texture_half_float_linear")===!1)return;(L.anisotropy>1||n.get(L).__currentAnisotropy)&&(i.texParameterf(I,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,r.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy)}}function j(I,L){let J=!1;I.__webglInit===void 0&&(I.__webglInit=!0,L.addEventListener("dispose",S));const fe=L.source;let oe=h.get(fe);oe===void 0&&(oe={},h.set(fe,oe));const _e=H(L);if(_e!==I.__cacheKey){oe[_e]===void 0&&(oe[_e]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),oe[_e].usedTimes++;const De=oe[I.__cacheKey];De!==void 0&&(oe[I.__cacheKey].usedTimes--,De.usedTimes===0&&M(L)),I.__cacheKey=_e,I.__webglTexture=oe[_e].texture}return J}function ce(I,L,J){let fe=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(fe=i.TEXTURE_3D);const oe=j(I,L),_e=L.source;t.bindTexture(fe,I.__webglTexture,i.TEXTURE0+J);const De=n.get(_e);if(_e.version!==De.__version||oe===!0){t.activeTexture(i.TEXTURE0+J);const ye=at.getPrimaries(at.workingColorSpace),Ee=L.colorSpace===Wt?null:at.getPrimaries(L.colorSpace),Fe=L.colorSpace===Wt||ye===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ge=m(L)&&d(L.image)===!1;let de=g(L.image,Ge,!1,r.maxTextureSize);de=Ne(L,de);const Xe=d(de)||s,Ve=a.convert(L.format,L.colorSpace);let Ie=a.convert(L.type),Ue=T(L.internalFormat,Ve,Ie,L.colorSpace,L.isVideoTexture);he(fe,L,Xe);let me;const A=L.mipmaps,te=s&&L.isVideoTexture!==!0&&Ue!==wl,le=De.__version===void 0||oe===!0,ge=_e.dataReady,k=w(L,de,Xe);if(L.isDepthTexture)Ue=i.DEPTH_COMPONENT,s?L.type===hn?Ue=i.DEPTH_COMPONENT32F:L.type===An?Ue=i.DEPTH_COMPONENT24:L.type===Vn?Ue=i.DEPTH24_STENCIL8:Ue=i.DEPTH_COMPONENT16:L.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),L.format===Wn&&Ue===i.DEPTH_COMPONENT&&L.type!==Ya&&L.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),L.type=An,Ie=a.convert(L.type)),L.format===Si&&Ue===i.DEPTH_COMPONENT&&(Ue=i.DEPTH_STENCIL,L.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),L.type=Vn,Ie=a.convert(L.type))),le&&(te?t.texStorage2D(i.TEXTURE_2D,1,Ue,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,null));else if(L.isDataTexture)if(A.length>0&&Xe){te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let R=0,E=A.length;R<E;R++)me=A[R],te?ge&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,R,Ue,me.width,me.height,0,Ve,Ie,me.data);L.generateMipmaps=!1}else te?(le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de.width,de.height,Ve,Ie,de.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,de.width,de.height,0,Ve,Ie,de.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){te&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ue,A[0].width,A[0].height,de.depth);for(let R=0,E=A.length;R<E;R++)me=A[R],L.format!==$t?Ve!==null?te?ge&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,de.depth,Ve,me.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,R,Ue,me.width,me.height,de.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,R,0,0,0,me.width,me.height,de.depth,Ve,Ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,R,Ue,me.width,me.height,de.depth,0,Ve,Ie,me.data)}else{te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let R=0,E=A.length;R<E;R++)me=A[R],L.format!==$t?Ve!==null?te?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ve,me.data):t.compressedTexImage2D(i.TEXTURE_2D,R,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?ge&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,me.width,me.height,Ve,Ie,me.data):t.texImage2D(i.TEXTURE_2D,R,Ue,me.width,me.height,0,Ve,Ie,me.data)}else if(L.isDataArrayTexture)te?(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(L.isData3DTexture)te?(le&&t.texStorage3D(i.TEXTURE_3D,k,Ue,de.width,de.height,de.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ve,Ie,de.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,de.width,de.height,de.depth,0,Ve,Ie,de.data);else if(L.isFramebufferTexture){if(le)if(te)t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height);else{let R=de.width,E=de.height;for(let W=0;W<k;W++)t.texImage2D(i.TEXTURE_2D,W,Ue,R,E,0,Ve,Ie,null),R>>=1,E>>=1}}else if(A.length>0&&Xe){te&&le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,A[0].width,A[0].height);for(let R=0,E=A.length;R<E;R++)me=A[R],te?ge&&t.texSubImage2D(i.TEXTURE_2D,R,0,0,Ve,Ie,me):t.texImage2D(i.TEXTURE_2D,R,Ue,Ve,Ie,me);L.generateMipmaps=!1}else te?(le&&t.texStorage2D(i.TEXTURE_2D,k,Ue,de.width,de.height),ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Ie,de)):t.texImage2D(i.TEXTURE_2D,0,Ue,Ve,Ie,de);x(L,Xe)&&y(fe),De.__version=_e.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function xe(I,L,J){if(L.image.length!==6)return;const fe=j(I,L),oe=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+J);const _e=n.get(oe);if(oe.version!==_e.__version||fe===!0){t.activeTexture(i.TEXTURE0+J);const De=at.getPrimaries(at.workingColorSpace),ye=L.colorSpace===Wt?null:at.getPrimaries(L.colorSpace),Ee=L.colorSpace===Wt||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=L.isCompressedTexture||L.image[0].isCompressedTexture,Ge=L.image[0]&&L.image[0].isDataTexture,de=[];for(let R=0;R<6;R++)!Fe&&!Ge?de[R]=g(L.image[R],!1,!0,r.maxCubemapSize):de[R]=Ge?L.image[R].image:L.image[R],de[R]=Ne(L,de[R]);const Xe=de[0],Ve=d(Xe)||s,Ie=a.convert(L.format,L.colorSpace),Ue=a.convert(L.type),me=T(L.internalFormat,Ie,Ue,L.colorSpace),A=s&&L.isVideoTexture!==!0,te=_e.__version===void 0||fe===!0,le=oe.dataReady;let ge=w(L,Xe,Ve);he(i.TEXTURE_CUBE_MAP,L,Ve);let k;if(Fe){A&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,Xe.width,Xe.height);for(let R=0;R<6;R++){k=de[R].mipmaps;for(let E=0;E<k.length;E++){const W=k[E];L.format!==$t?Ie!==null?A?le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E,0,0,W.width,W.height,Ie,W.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E,me,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E,0,0,W.width,W.height,Ie,Ue,W.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E,me,W.width,W.height,0,Ie,Ue,W.data)}}}else{k=L.mipmaps,A&&te&&(k.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,me,de[0].width,de[0].height));for(let R=0;R<6;R++)if(Ge){A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,de[R].width,de[R].height,Ie,Ue,de[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,de[R].width,de[R].height,0,Ie,Ue,de[R].data);for(let E=0;E<k.length;E++){const pe=k[E].image[R].image;A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E+1,0,0,pe.width,pe.height,Ie,Ue,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E+1,me,pe.width,pe.height,0,Ie,Ue,pe.data)}}else{A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ie,Ue,de[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,me,Ie,Ue,de[R]);for(let E=0;E<k.length;E++){const W=k[E];A?le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E+1,0,0,Ie,Ue,W.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,E+1,me,Ie,Ue,W.image[R])}}}x(L,Ve)&&y(i.TEXTURE_CUBE_MAP),_e.__version=oe.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}function we(I,L,J,fe,oe,_e){const De=a.convert(J.format,J.colorSpace),ye=a.convert(J.type),Ee=T(J.internalFormat,De,ye,J.colorSpace);if(!n.get(L).__hasExternalTextures){const Ge=Math.max(1,L.width>>_e),de=Math.max(1,L.height>>_e);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,_e,Ee,Ge,de,L.depth,0,De,ye,null):t.texImage2D(oe,_e,Ee,Ge,de,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,oe,n.get(J).__webglTexture,0,Oe(L)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,oe,n.get(J).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(I,L,J){if(i.bindRenderbuffer(i.RENDERBUFFER,I),L.depthBuffer&&!L.stencilBuffer){let fe=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(J||Le(L)){const oe=L.depthTexture;oe&&oe.isDepthTexture&&(oe.type===hn?fe=i.DEPTH_COMPONENT32F:oe.type===An&&(fe=i.DEPTH_COMPONENT24));const _e=Oe(L);Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,fe,L.width,L.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,fe,L.width,L.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,L.width,L.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,I)}else if(L.depthBuffer&&L.stencilBuffer){const fe=Oe(L);J&&Le(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,L.width,L.height):Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,I)}else{const fe=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let oe=0;oe<fe.length;oe++){const _e=fe[oe],De=a.convert(_e.format,_e.colorSpace),ye=a.convert(_e.type),Ee=T(_e.internalFormat,De,ye,_e.colorSpace),Fe=Oe(L);J&&Le(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ee,L.width,L.height):Le(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ee,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(I,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(L.depthTexture).__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),z(L.depthTexture,0);const fe=n.get(L.depthTexture).__webglTexture,oe=Oe(L);if(L.depthTexture.format===Wn)Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(L.depthTexture.format===Si)Le(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ze(I){const L=n.get(I),J=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!L.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Se(L.__webglFramebuffer,I)}else if(J){L.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[fe]),L.__webglDepthbuffer[fe]=i.createRenderbuffer(),ve(L.__webglDepthbuffer[fe],I,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer=i.createRenderbuffer(),ve(L.__webglDepthbuffer,I,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(I,L,J){const fe=n.get(I);L!==void 0&&we(fe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&ze(I)}function Y(I){const L=I.texture,J=n.get(I),fe=n.get(L);I.addEventListener("dispose",U),I.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=L.version,l.memory.textures++);const oe=I.isWebGLCubeRenderTarget===!0,_e=I.isWebGLMultipleRenderTargets===!0,De=d(I)||s;if(oe){J.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(s&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer[ye]=[];for(let Ee=0;Ee<L.mipmaps.length;Ee++)J.__webglFramebuffer[ye][Ee]=i.createFramebuffer()}else J.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(s&&L.mipmaps&&L.mipmaps.length>0){J.__webglFramebuffer=[];for(let ye=0;ye<L.mipmaps.length;ye++)J.__webglFramebuffer[ye]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const ye=I.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=n.get(ye[Ee]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&I.samples>0&&Le(I)===!1){const ye=_e?L:[L];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ye.length;Ee++){const Fe=ye[Ee];J.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee]);const Ge=a.convert(Fe.format,Fe.colorSpace),de=a.convert(Fe.type),Xe=T(Fe.internalFormat,Ge,de,Fe.colorSpace,I.isXRRenderTarget===!0),Ve=Oe(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Xe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(J.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),he(i.TEXTURE_CUBE_MAP,L,De);for(let ye=0;ye<6;ye++)if(s&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(J.__webglFramebuffer[ye][Ee],I,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ee);else we(J.__webglFramebuffer[ye],I,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);x(L,De)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const ye=I.texture;for(let Ee=0,Fe=ye.length;Ee<Fe;Ee++){const Ge=ye[Ee],de=n.get(Ge);t.bindTexture(i.TEXTURE_2D,de.__webglTexture),he(i.TEXTURE_2D,Ge,De),we(J.__webglFramebuffer,I,Ge,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),x(Ge,De)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(s?ye=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,fe.__webglTexture),he(ye,L,De),s&&L.mipmaps&&L.mipmaps.length>0)for(let Ee=0;Ee<L.mipmaps.length;Ee++)we(J.__webglFramebuffer[Ee],I,L,i.COLOR_ATTACHMENT0,ye,Ee);else we(J.__webglFramebuffer,I,L,i.COLOR_ATTACHMENT0,ye,0);x(L,De)&&y(ye),t.unbindTexture()}I.depthBuffer&&ze(I)}function He(I){const L=d(I)||s,J=I.isWebGLMultipleRenderTargets===!0?I.texture:[I.texture];for(let fe=0,oe=J.length;fe<oe;fe++){const _e=J[fe];if(x(_e,L)){const De=I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(_e).__webglTexture;t.bindTexture(De,ye),y(De),t.unbindTexture()}}}function Pe(I){if(s&&I.samples>0&&Le(I)===!1){const L=I.isWebGLMultipleRenderTargets?I.texture:[I.texture],J=I.width,fe=I.height;let oe=i.COLOR_BUFFER_BIT;const _e=[],De=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(I),Ee=I.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Fe=0;Fe<L.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Fe=0;Fe<L.length;Fe++){_e.push(i.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&_e.push(De);const Ge=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Ge===!1&&(I.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]),Ge===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[De]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[De])),Ee){const de=n.get(L[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,J,fe,0,0,J,fe,oe,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Fe=0;Fe<L.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Fe]);const Ge=n.get(L[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Oe(I){return Math.min(r.maxSamples,I.samples)}function Le(I){const L=n.get(I);return s&&I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Be(I){const L=l.render.frame;u.get(I)!==L&&(u.set(I,L),I.update())}function Ne(I,L){const J=I.colorSpace,fe=I.format,oe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||I.format===Fa||J!==gn&&J!==Wt&&(at.getTransfer(J)===st?s===!1?e.has("EXT_sRGB")===!0&&fe===$t?(I.format=Fa,I.minFilter=Pt,I.generateMipmaps=!1):L=Ll.sRGBToLinear(L):(fe!==$t||oe!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),L}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=ie,this.rebindTextures=Ae,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Le}function Am(i,e,t){const n=t.isWebGL2;function r(a,l=Wt){let s;const o=at.getTransfer(l);if(a===Cn)return i.UNSIGNED_BYTE;if(a===yl)return i.UNSIGNED_SHORT_4_4_4_4;if(a===bl)return i.UNSIGNED_SHORT_5_5_5_1;if(a===uu)return i.BYTE;if(a===fu)return i.SHORT;if(a===Ya)return i.UNSIGNED_SHORT;if(a===xl)return i.INT;if(a===An)return i.UNSIGNED_INT;if(a===hn)return i.FLOAT;if(a===Yn)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===hu)return i.ALPHA;if(a===$t)return i.RGBA;if(a===du)return i.LUMINANCE;if(a===pu)return i.LUMINANCE_ALPHA;if(a===Wn)return i.DEPTH_COMPONENT;if(a===Si)return i.DEPTH_STENCIL;if(a===Fa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===mu)return i.RED;if(a===Ml)return i.RED_INTEGER;if(a===_u)return i.RG;if(a===Sl)return i.RG_INTEGER;if(a===El)return i.RGBA_INTEGER;if(a===Zr||a===qr||a===Kr||a===$r)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Zr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Zr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ts||a===As||a===Cs||a===Rs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Ts)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Cs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Rs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Ps||a===Ls)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===Ps)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Ls)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ds||a===Us||a===Is||a===Os||a===Ns||a===Fs||a===Bs||a===ks||a===zs||a===Gs||a===Hs||a===Vs||a===Ws||a===Xs)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ds)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Us)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Is)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Os)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ns)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Bs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ks)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===zs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Gs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Hs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Vs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ws)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Xs)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Jr||a===js||a===Ys)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Jr)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===js)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ys)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===gu||a===Zs||a===qs||a===Ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Jr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Zs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===qs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vn?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class Cm extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vr extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const s=this._targetRay,o=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const g of e.hand.values()){const d=t.getJointPose(g,n),m=this._getHandJoint(f,g);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const u=f.joints["index-finger-tip"],c=f.joints["thumb-tip"],h=u.position.distanceTo(c.position),p=.02,_=.005;f.inputState.pinching&&h>p+_?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=p-_&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new vr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Pm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lm=`
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

}`;class Dm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wt,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Xt({extensions:{fragDepth:!0},vertexShader:Pm,fragmentShader:Lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zt(new wi(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Um extends Zn{constructor(e,t){super();const n=this;let r=null,a=1,l=null,s="local-floor",o=1,f=null,u=null,c=null,h=null,p=null,_=null;const g=new Dm,d=t.getContextAttributes();let m=null,x=null;const y=[],T=[],w=new nt;let b=null;const S=new Vt;S.layers.enable(1),S.viewport=new St;const U=new Vt;U.layers.enable(2),U.viewport=new St;const O=[S,U],M=new Cm;M.layers.enable(1),M.layers.enable(2);let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=y[j];return ce===void 0&&(ce=new Sa,y[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=y[j];return ce===void 0&&(ce=new Sa,y[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=y[j];return ce===void 0&&(ce=new Sa,y[j]=ce),ce.getHandSpace()};function G(j){const ce=T.indexOf(j.inputSource);if(ce===-1)return;const xe=y[ce];xe!==void 0&&(xe.update(j.inputSource,j.frame,f||l),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",H);for(let j=0;j<y.length;j++){const ce=T[j];ce!==null&&(T[j]=null,y[j].disconnect(ce))}C=null,N=null,g.reset(),e.setRenderTarget(m),p=null,h=null,c=null,r=null,x=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(j){f=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",F),r.addEventListener("inputsourceschange",H),d.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new vn(p.framebufferWidth,p.framebufferHeight,{format:$t,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let ce=null,xe=null,we=null;d.depth&&(we=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=d.stencil?Si:Wn,xe=d.stencil?Vn:An);const ve={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};c=new XRWebGLBinding(r,t),h=c.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new vn(h.textureWidth,h.textureHeight,{format:$t,type:Cn,depthTexture:new Vl(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const Se=e.properties.get(x);Se.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(o),f=null,l=await r.requestReferenceSpace(s),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function H(j){for(let ce=0;ce<j.removed.length;ce++){const xe=j.removed[ce],we=T.indexOf(xe);we>=0&&(T[we]=null,y[we].disconnect(xe))}for(let ce=0;ce<j.added.length;ce++){const xe=j.added[ce];let we=T.indexOf(xe);if(we===-1){for(let Se=0;Se<y.length;Se++)if(Se>=T.length){T.push(xe),we=Se;break}else if(T[Se]===null){T[Se]=xe,we=Se;break}if(we===-1)break}const ve=y[we];ve&&ve.connect(xe)}}const z=new ae,Q=new ae;function V(j,ce,xe){z.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(xe.matrixWorld);const we=z.distanceTo(Q),ve=ce.projectionMatrix.elements,Se=xe.projectionMatrix.elements,ze=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),Y=(ve[9]+1)/ve[5],He=(ve[9]-1)/ve[5],Pe=(ve[8]-1)/ve[0],Oe=(Se[8]+1)/Se[0],Le=ze*Pe,Be=ze*Oe,Ne=we/(-Pe+Oe),I=Ne*-Pe;ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(I),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const L=ze+Ne,J=Ae+Ne,fe=Le-I,oe=Be+(we-I),_e=Y*Ae/J*L,De=He*Ae/J*L;j.projectionMatrix.makePerspective(fe,oe,_e,De,L,J),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function ie(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;g.texture!==null&&(j.near=g.depthNear,j.far=g.depthFar),M.near=U.near=S.near=j.near,M.far=U.far=S.far=j.far,(C!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,N=M.far,S.near=C,S.far=N,U.near=C,U.far=N,S.updateProjectionMatrix(),U.updateProjectionMatrix(),j.updateProjectionMatrix());const ce=j.parent,xe=M.cameras;ie(M,ce);for(let we=0;we<xe.length;we++)ie(xe[we],ce);xe.length===2?V(M,S,U):M.projectionMatrix.copy(S.projectionMatrix),se(j,M,ce)};function se(j,ce,xe){xe===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ba*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return o},this.setFoveation=function(j){o=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null};let ue=null;function X(j,ce){if(u=ce.getViewerPose(f||l),_=ce,u!==null){const xe=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let we=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let Se=0;Se<xe.length;Se++){const ze=xe[Se];let Ae=null;if(p!==null)Ae=p.getViewport(ze);else{const He=c.getViewSubImage(h,ze);Ae=He.viewport,Se===0&&(e.setRenderTargetTextures(x,He.colorTexture,h.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(x))}let Y=O[Se];Y===void 0&&(Y=new Vt,Y.layers.enable(Se),Y.viewport=new St,O[Se]=Y),Y.matrix.fromArray(ze.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(ze.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Se===0&&(M.matrix.copy(Y.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(Y)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){const Se=c.getDepthInformation(xe[0]);Se&&Se.isValid&&Se.texture&&g.init(e,Se,r.renderState)}}for(let xe=0;xe<y.length;xe++){const we=T[xe],ve=y[xe];we!==null&&ve!==void 0&&ve.update(we,ce,f||l)}g.render(e,M),ue&&ue(j,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const he=new Hl;he.setAnimationLoop(X),this.setAnimationLoop=function(j){ue=j},this.dispose=function(){}}}function Im(i,e){function t(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,kl(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function r(d,m,x,y,T){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(d,m):m.isMeshToonMaterial?(a(d,m),c(d,m)):m.isMeshPhongMaterial?(a(d,m),u(d,m)):m.isMeshStandardMaterial?(a(d,m),h(d,m),m.isMeshPhysicalMaterial&&p(d,m,T)):m.isMeshMatcapMaterial?(a(d,m),_(d,m)):m.isMeshDepthMaterial?a(d,m):m.isMeshDistanceMaterial?(a(d,m),g(d,m)):m.isMeshNormalMaterial?a(d,m):m.isLineBasicMaterial?(l(d,m),m.isLineDashedMaterial&&s(d,m)):m.isPointsMaterial?o(d,m,x,y):m.isSpriteMaterial?f(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,t(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===Nt&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,t(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===Nt&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,t(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,t(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const x=e.get(m).envMap;if(x&&(d.envMap.value=x,d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,d.lightMapTransform)}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,d.aoMapTransform))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform))}function s(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,x,y){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*x,d.scale.value=y*.5,m.map&&(d.map.value=m.map,t(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function f(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,t(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,t(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function c(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,d.roughnessMapTransform)),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,x){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){const x=e.get(m).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Om(i,e,t,n){let r={},a={},l=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function o(x,y){const T=y.program;n.uniformBlockBinding(x,T)}function f(x,y){let T=r[x.id];T===void 0&&(_(x),T=u(x),r[x.id]=T,x.addEventListener("dispose",d));const w=y.program;n.updateUBOMapping(x,w);const b=e.render.frame;a[x.id]!==b&&(h(x),a[x.id]=b)}function u(x){const y=c();x.__bindingPointIndex=y;const T=i.createBuffer(),w=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,T),T}function c(){for(let x=0;x<s;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=r[x.id],T=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,S=T.length;b<S;b++){const U=Array.isArray(T[b])?T[b]:[T[b]];for(let O=0,M=U.length;O<M;O++){const C=U[O];if(p(C,b,O,w)===!0){const N=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let H=0;H<G.length;H++){const z=G[H],Q=g(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+F,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,F),F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,y,T,w){const b=x.value,S=y+"_"+T;if(w[S]===void 0)return typeof b=="number"||typeof b=="boolean"?w[S]=b:w[S]=b.clone(),!0;{const U=w[S];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return w[S]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function _(x){const y=x.uniforms;let T=0;const w=16;for(let S=0,U=y.length;S<U;S++){const O=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,C=O.length;M<C;M++){const N=O[M],G=Array.isArray(N.value)?N.value:[N.value];for(let F=0,H=G.length;F<H;F++){const z=G[F],Q=g(z),V=T%w;V!==0&&w-V<Q.boundary&&(T+=w-V),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=Q.storage}}}const b=T%w;return b>0&&(T+=w-b),x.__size=T,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function d(x){const y=x.target;y.removeEventListener("dispose",d);const T=l.indexOf(y.__bindingPointIndex);l.splice(T,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function m(){for(const x in r)i.deleteBuffer(r[x]);l=[],r={},a={}}return{bind:o,update:f,dispose:m}}class Kl{constructor(e={}){const{canvas:t=Cu(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:f=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=l;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,d=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mt,this._useLegacyLights=!1,this.toneMapping=pn,this.toneMappingExposure=1;const y=this;let T=!1,w=0,b=0,S=null,U=-1,O=null;const M=new St,C=new St;let N=null;const G=new rt(0);let F=0,H=t.width,z=t.height,Q=1,V=null,ie=null;const se=new St(0,0,H,z),ue=new St(0,0,H,z);let X=!1;const he=new Ka;let j=!1,ce=!1,xe=null;const we=new gt,ve=new nt,Se=new ae,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return S===null?Q:1}let Y=n;function He(D,q){for(let ee=0;ee<D.length;ee++){const re=D[ee],ne=t.getContext(re,q);if(ne!==null)return ne}return null}try{const D={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:f,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",k,!1),t.addEventListener("webglcontextrestored",R,!1),t.addEventListener("webglcontextcreationerror",E,!1),Y===null){const q=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&q.shift(),Y=He(q,D),Y===null)throw He(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Pe,Oe,Le,Be,Ne,I,L,J,fe,oe,_e,De,ye,Ee,Fe,Ge,de,Xe,Ve,Ie,Ue,me,A,te;function le(){Pe=new Vd(Y),Oe=new Fd(Y,Pe,e),Pe.init(Oe),me=new Am(Y,Pe,Oe),Le=new wm(Y,Pe,Oe),Be=new jd(Y),Ne=new hm,I=new Tm(Y,Pe,Le,Ne,Oe,me,Be),L=new kd(y),J=new Hd(y),fe=new Qu(Y,Oe),A=new Od(Y,Pe,fe,Oe),oe=new Wd(Y,fe,Be,A),_e=new Kd(Y,oe,fe,Be),Ve=new qd(Y,Oe,I),Ge=new Bd(Ne),De=new fm(y,L,J,Pe,Oe,A,Ge),ye=new Im(y,Ne),Ee=new pm,Fe=new ym(Pe,Oe),Xe=new Id(y,L,J,Le,_e,h,o),de=new Em(y,_e,Oe),te=new Om(Y,Be,Oe,Le),Ie=new Nd(Y,Pe,Be,Oe),Ue=new Xd(Y,Pe,Be,Oe),Be.programs=De.programs,y.capabilities=Oe,y.extensions=Pe,y.properties=Ne,y.renderLists=Ee,y.shadowMap=de,y.state=Le,y.info=Be}le();const ge=new Um(y,Y);this.xr=ge,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const D=Pe.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Pe.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(D){D!==void 0&&(Q=D,this.setSize(H,z,!1))},this.getSize=function(D){return D.set(H,z)},this.setSize=function(D,q,ee=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=D,z=q,t.width=Math.floor(D*Q),t.height=Math.floor(q*Q),ee===!0&&(t.style.width=D+"px",t.style.height=q+"px"),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(H*Q,z*Q).floor()},this.setDrawingBufferSize=function(D,q,ee){H=D,z=q,Q=ee,t.width=Math.floor(D*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,D,q)},this.getCurrentViewport=function(D){return D.copy(M)},this.getViewport=function(D){return D.copy(se)},this.setViewport=function(D,q,ee,re){D.isVector4?se.set(D.x,D.y,D.z,D.w):se.set(D,q,ee,re),Le.viewport(M.copy(se).multiplyScalar(Q).floor())},this.getScissor=function(D){return D.copy(ue)},this.setScissor=function(D,q,ee,re){D.isVector4?ue.set(D.x,D.y,D.z,D.w):ue.set(D,q,ee,re),Le.scissor(C.copy(ue).multiplyScalar(Q).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(D){Le.setScissorTest(X=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){ie=D},this.getClearColor=function(D){return D.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(D=!0,q=!0,ee=!0){let re=0;if(D){let ne=!1;if(S!==null){const Re=S.texture.format;ne=Re===El||Re===Sl||Re===Ml}if(ne){const Re=S.texture.type,ke=Re===Cn||Re===An||Re===Ya||Re===Vn||Re===yl||Re===bl,We=Xe.getClearColor(),je=Xe.getClearAlpha(),Je=We.r,qe=We.g,Ke=We.b;ke?(p[0]=Je,p[1]=qe,p[2]=Ke,p[3]=je,Y.clearBufferuiv(Y.COLOR,0,p)):(_[0]=Je,_[1]=qe,_[2]=Ke,_[3]=je,Y.clearBufferiv(Y.COLOR,0,_))}else re|=Y.COLOR_BUFFER_BIT}q&&(re|=Y.DEPTH_BUFFER_BIT),ee&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",k,!1),t.removeEventListener("webglcontextrestored",R,!1),t.removeEventListener("webglcontextcreationerror",E,!1),Ee.dispose(),Fe.dispose(),Ne.dispose(),L.dispose(),J.dispose(),_e.dispose(),A.dispose(),te.dispose(),De.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",B),ge.removeEventListener("sessionend",Z),xe&&(xe.dispose(),xe=null),Te.stop()};function k(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function R(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=Be.autoReset,q=de.enabled,ee=de.autoUpdate,re=de.needsUpdate,ne=de.type;le(),Be.autoReset=D,de.enabled=q,de.autoUpdate=ee,de.needsUpdate=re,de.type=ne}function E(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function W(D){const q=D.target;q.removeEventListener("dispose",W),pe(q)}function pe(D){v(D),Ne.remove(D)}function v(D){const q=Ne.get(D).programs;q!==void 0&&(q.forEach(function(ee){De.releaseProgram(ee)}),D.isShaderMaterial&&De.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ee,re,ne,Re){q===null&&(q=ze);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,We=Tt(D,q,ee,re,ne);Le.setMaterial(re,ke);let je=ee.index,Je=1;if(re.wireframe===!0){if(je=oe.getWireframeAttribute(ee),je===void 0)return;Je=2}const qe=ee.drawRange,Ke=ee.attributes.position;let ht=qe.start*Je,Ft=(qe.start+qe.count)*Je;Re!==null&&(ht=Math.max(ht,Re.start*Je),Ft=Math.min(Ft,(Re.start+Re.count)*Je)),je!==null?(ht=Math.max(ht,0),Ft=Math.min(Ft,je.count)):Ke!=null&&(ht=Math.max(ht,0),Ft=Math.min(Ft,Ke.count));const yt=Ft-ht;if(yt<0||yt===1/0)return;A.setup(ne,re,We,ee,je);let rn,lt=Ie;if(je!==null&&(rn=fe.get(je),lt=Ue,lt.setIndex(rn)),ne.isMesh)re.wireframe===!0?(Le.setLineWidth(re.wireframeLinewidth*Ae()),lt.setMode(Y.LINES)):lt.setMode(Y.TRIANGLES);else if(ne.isLine){let et=re.linewidth;et===void 0&&(et=1),Le.setLineWidth(et*Ae()),ne.isLineSegments?lt.setMode(Y.LINES):ne.isLineLoop?lt.setMode(Y.LINE_LOOP):lt.setMode(Y.LINE_STRIP)}else ne.isPoints?lt.setMode(Y.POINTS):ne.isSprite&&lt.setMode(Y.TRIANGLES);if(ne.isBatchedMesh)lt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else if(ne.isInstancedMesh)lt.renderInstances(ht,yt,ne.count);else if(ee.isInstancedBufferGeometry){const et=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Gr=Math.min(ee.instanceCount,et);lt.renderInstances(ht,yt,Gr)}else lt.render(ht,yt)};function K(D,q,ee){D.transparent===!0&&D.side===fn&&D.forceSinglePass===!1?(D.side=Nt,D.needsUpdate=!0,Qe(D,q,ee),D.side=Rn,D.needsUpdate=!0,Qe(D,q,ee),D.side=fn):Qe(D,q,ee)}this.compile=function(D,q,ee=null){ee===null&&(ee=D),d=Fe.get(ee),d.init(),x.push(d),ee.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),D!==ee&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test(q.layers)&&(d.pushLight(ne),ne.castShadow&&d.pushShadow(ne))}),d.setupLights(y._useLegacyLights);const re=new Set;return D.traverse(function(ne){const Re=ne.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){const We=Re[ke];K(We,ee,ne),re.add(We)}else K(Re,ee,ne),re.add(Re)}),x.pop(),d=null,re},this.compileAsync=function(D,q,ee=null){const re=this.compile(D,q,ee);return new Promise(ne=>{function Re(){if(re.forEach(function(ke){Ne.get(ke).currentProgram.isReady()&&re.delete(ke)}),re.size===0){ne(D);return}setTimeout(Re,10)}Pe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let $=null;function P(D){$&&$(D)}function B(){Te.stop()}function Z(){Te.start()}const Te=new Hl;Te.setAnimationLoop(P),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(D){$=D,ge.setAnimationLoop(D),D===null?Te.stop():Te.start()},ge.addEventListener("sessionstart",B),ge.addEventListener("sessionend",Z),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(q),q=ge.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,q,S),d=Fe.get(D,x.length),d.init(),x.push(d),we.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),he.setFromProjectionMatrix(we),ce=this.localClippingEnabled,j=Ge.init(this.clippingPlanes,ce),g=Ee.get(D,m.length),g.init(),m.push(g),be(D,q,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(V,ie),this.info.render.frame++,j===!0&&Ge.beginShadows();const ee=d.state.shadowsArray;if(de.render(ee,D,q),j===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1)&&Xe.render(g,D),d.setupLights(y._useLegacyLights),q.isArrayCamera){const re=q.cameras;for(let ne=0,Re=re.length;ne<Re;ne++){const ke=re[ne];Ce(g,D,ke,ke.viewport)}}else Ce(g,D,q);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(y,D,q),A.resetDefaultState(),U=-1,O=null,x.pop(),x.length>0?d=x[x.length-1]:d=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function be(D,q,ee,re){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ee=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||he.intersectsSprite(D)){re&&Se.setFromMatrixPosition(D.matrixWorld).applyMatrix4(we);const ke=_e.update(D),We=D.material;We.visible&&g.push(D,ke,We,ee,Se.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||he.intersectsObject(D))){const ke=_e.update(D),We=D.material;if(re&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Se.copy(D.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),Se.copy(ke.boundingSphere.center)),Se.applyMatrix4(D.matrixWorld).applyMatrix4(we)),Array.isArray(We)){const je=ke.groups;for(let Je=0,qe=je.length;Je<qe;Je++){const Ke=je[Je],ht=We[Ke.materialIndex];ht&&ht.visible&&g.push(D,ke,ht,ee,Se.z,Ke)}}else We.visible&&g.push(D,ke,We,ee,Se.z,null)}}const Re=D.children;for(let ke=0,We=Re.length;ke<We;ke++)be(Re[ke],q,ee,re)}function Ce(D,q,ee,re){const ne=D.opaque,Re=D.transmissive,ke=D.transparent;d.setupLightsView(ee),j===!0&&Ge.setGlobalState(y.clippingPlanes,ee),Re.length>0&&it(ne,Re,q,ee),re&&Le.viewport(M.copy(re)),ne.length>0&&Ut(ne,q,ee),Re.length>0&&Ut(Re,q,ee),ke.length>0&&Ut(ke,q,ee),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function it(D,q,ee,re){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Re=Oe.isWebGL2;xe===null&&(xe=new vn(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Yn:Cn,minFilter:Gn,samples:Re?4:0})),y.getDrawingBufferSize(ve),Re?xe.setSize(ve.x,ve.y):xe.setSize(ka(ve.x),ka(ve.y));const ke=y.getRenderTarget();y.setRenderTarget(xe),y.getClearColor(G),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear();const We=y.toneMapping;y.toneMapping=pn,Ut(D,ee,re),I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe);let je=!1;for(let Je=0,qe=q.length;Je<qe;Je++){const Ke=q[Je],ht=Ke.object,Ft=Ke.geometry,yt=Ke.material,rn=Ke.group;if(yt.side===fn&&ht.layers.test(re.layers)){const lt=yt.side;yt.side=Nt,yt.needsUpdate=!0,ot(ht,ee,re,Ft,yt,rn),yt.side=lt,yt.needsUpdate=!0,je=!0}}je===!0&&(I.updateMultisampleRenderTarget(xe),I.updateRenderTargetMipmap(xe)),y.setRenderTarget(ke),y.setClearColor(G,F),y.toneMapping=We}function Ut(D,q,ee){const re=q.isScene===!0?q.overrideMaterial:null;for(let ne=0,Re=D.length;ne<Re;ne++){const ke=D[ne],We=ke.object,je=ke.geometry,Je=re===null?ke.material:re,qe=ke.group;We.layers.test(ee.layers)&&ot(We,q,ee,je,Je,qe)}}function ot(D,q,ee,re,ne,Re){D.onBeforeRender(y,q,ee,re,ne,Re),D.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(y,q,ee,re,D,Re),ne.transparent===!0&&ne.side===fn&&ne.forceSinglePass===!1?(ne.side=Nt,ne.needsUpdate=!0,y.renderBufferDirect(ee,q,re,ne,D,Re),ne.side=Rn,ne.needsUpdate=!0,y.renderBufferDirect(ee,q,re,ne,D,Re),ne.side=fn):y.renderBufferDirect(ee,q,re,ne,D,Re),D.onAfterRender(y,q,ee,re,ne,Re)}function Qe(D,q,ee){q.isScene!==!0&&(q=ze);const re=Ne.get(D),ne=d.state.lights,Re=d.state.shadowsArray,ke=ne.state.version,We=De.getParameters(D,ne.state,Re,q,ee),je=De.getProgramCacheKey(We);let Je=re.programs;re.environment=D.isMeshStandardMaterial?q.environment:null,re.fog=q.fog,re.envMap=(D.isMeshStandardMaterial?J:L).get(D.envMap||re.environment),Je===void 0&&(D.addEventListener("dispose",W),Je=new Map,re.programs=Je);let qe=Je.get(je);if(qe!==void 0){if(re.currentProgram===qe&&re.lightsStateVersion===ke)return mt(D,We),qe}else We.uniforms=De.getUniforms(D),D.onBuild(ee,We,y),D.onBeforeCompile(We,y),qe=De.acquireProgram(We,je),Je.set(je,qe),re.uniforms=We.uniforms;const Ke=re.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Ke.clippingPlanes=Ge.uniform),mt(D,We),re.needsLights=Kn(D),re.lightsStateVersion=ke,re.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMap.value=ne.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotShadowMap.value=ne.state.spotShadowMap,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMap.value=ne.state.pointShadowMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=qe,re.uniformsList=null,qe}function ct(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=wr.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function mt(D,q){const ee=Ne.get(D);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function Tt(D,q,ee,re,ne){q.isScene!==!0&&(q=ze),I.resetTextureUnits();const Re=q.fog,ke=re.isMeshStandardMaterial?q.environment:null,We=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:gn,je=(re.isMeshStandardMaterial?J:L).get(re.envMap||ke),Je=re.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,qe=!!ee.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!ee.morphAttributes.position,ht=!!ee.morphAttributes.normal,Ft=!!ee.morphAttributes.color;let yt=pn;re.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(yt=y.toneMapping);const rn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,lt=rn!==void 0?rn.length:0,et=Ne.get(re),Gr=d.state.lights;if(j===!0&&(ce===!0||D!==O)){const Gt=D===O&&re.id===U;Ge.setState(re,D,Gt)}let ut=!1;re.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Gr.state.version||et.outputColorSpace!==We||ne.isBatchedMesh&&et.batching===!1||!ne.isBatchedMesh&&et.batching===!0||ne.isInstancedMesh&&et.instancing===!1||!ne.isInstancedMesh&&et.instancing===!0||ne.isSkinnedMesh&&et.skinning===!1||!ne.isSkinnedMesh&&et.skinning===!0||ne.isInstancedMesh&&et.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&et.instancingColor===!1&&ne.instanceColor!==null||et.envMap!==je||re.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Ge.numPlanes||et.numIntersection!==Ge.numIntersection)||et.vertexAlphas!==Je||et.vertexTangents!==qe||et.morphTargets!==Ke||et.morphNormals!==ht||et.morphColors!==Ft||et.toneMapping!==yt||Oe.isWebGL2===!0&&et.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,et.__version=re.version);let Pn=et.currentProgram;ut===!0&&(Pn=Qe(re,q,ne));let is=!1,Ri=!1,Hr=!1;const At=Pn.getUniforms(),Ln=et.uniforms;if(Le.useProgram(Pn.program)&&(is=!0,Ri=!0,Hr=!0),re.id!==U&&(U=re.id,Ri=!0),is||O!==D){At.setValue(Y,"projectionMatrix",D.projectionMatrix),At.setValue(Y,"viewMatrix",D.matrixWorldInverse);const Gt=At.map.cameraPosition;Gt!==void 0&&Gt.setValue(Y,Se.setFromMatrixPosition(D.matrixWorld)),Oe.logarithmicDepthBuffer&&At.setValue(Y,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&At.setValue(Y,"isOrthographic",D.isOrthographicCamera===!0),O!==D&&(O=D,Ri=!0,Hr=!0)}if(ne.isSkinnedMesh){At.setOptional(Y,ne,"bindMatrix"),At.setOptional(Y,ne,"bindMatrixInverse");const Gt=ne.skeleton;Gt&&(Oe.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),At.setValue(Y,"boneTexture",Gt.boneTexture,I)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ne.isBatchedMesh&&(At.setOptional(Y,ne,"batchingTexture"),At.setValue(Y,"batchingTexture",ne._matricesTexture,I));const Vr=ee.morphAttributes;if((Vr.position!==void 0||Vr.normal!==void 0||Vr.color!==void 0&&Oe.isWebGL2===!0)&&Ve.update(ne,ee,Pn),(Ri||et.receiveShadow!==ne.receiveShadow)&&(et.receiveShadow=ne.receiveShadow,At.setValue(Y,"receiveShadow",ne.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ln.envMap.value=je,Ln.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Ri&&(At.setValue(Y,"toneMappingExposure",y.toneMappingExposure),et.needsLights&&qn(Ln,Hr),Re&&re.fog===!0&&ye.refreshFogUniforms(Ln,Re),ye.refreshMaterialUniforms(Ln,re,Q,z,xe),wr.upload(Y,ct(et),Ln,I)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(wr.upload(Y,ct(et),Ln,I),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&At.setValue(Y,"center",ne.center),At.setValue(Y,"modelViewMatrix",ne.modelViewMatrix),At.setValue(Y,"normalMatrix",ne.normalMatrix),At.setValue(Y,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Gt=re.uniformsGroups;for(let Wr=0,Sc=Gt.length;Wr<Sc;Wr++)if(Oe.isWebGL2){const rs=Gt[Wr];te.update(rs,Pn),te.bind(rs,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function qn(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function Kn(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,q,ee){Ne.get(D.texture).__webglTexture=q,Ne.get(D.depthTexture).__webglTexture=ee;const re=Ne.get(D);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=ee===void 0,re.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,q){const ee=Ne.get(D);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(D,q=0,ee=0){S=D,w=q,b=ee;let re=!0,ne=null,Re=!1,ke=!1;if(D){const je=Ne.get(D);je.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(Y.FRAMEBUFFER,null),re=!1):je.__webglFramebuffer===void 0?I.setupRenderTarget(D):je.__hasExternalTextures&&I.rebindTextures(D,Ne.get(D.texture).__webglTexture,Ne.get(D.depthTexture).__webglTexture);const Je=D.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(ke=!0);const qe=Ne.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ne=qe[q][ee]:ne=qe[q],Re=!0):Oe.isWebGL2&&D.samples>0&&I.useMultisampledRTT(D)===!1?ne=Ne.get(D).__webglMultisampledFramebuffer:Array.isArray(qe)?ne=qe[ee]:ne=qe,M.copy(D.viewport),C.copy(D.scissor),N=D.scissorTest}else M.copy(se).multiplyScalar(Q).floor(),C.copy(ue).multiplyScalar(Q).floor(),N=X;if(Le.bindFramebuffer(Y.FRAMEBUFFER,ne)&&Oe.drawBuffers&&re&&Le.drawBuffers(D,ne),Le.viewport(M),Le.scissor(C),Le.setScissorTest(N),Re){const je=Ne.get(D.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,je.__webglTexture,ee)}else if(ke){const je=Ne.get(D.texture),Je=q||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,je.__webglTexture,ee||0,Je)}U=-1},this.readRenderTargetPixels=function(D,q,ee,re,ne,Re,ke){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Ne.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Le.bindFramebuffer(Y.FRAMEBUFFER,We);try{const je=D.texture,Je=je.format,qe=je.type;if(Je!==$t&&me.convert(Je)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=qe===Yn&&(Pe.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(qe!==Cn&&me.convert(qe)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===hn&&(Oe.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-re&&ee>=0&&ee<=D.height-ne&&Y.readPixels(q,ee,re,ne,me.convert(Je),me.convert(qe),Re)}finally{const je=S!==null?Ne.get(S).__webglFramebuffer:null;Le.bindFramebuffer(Y.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(D,q,ee=0){const re=Math.pow(2,-ee),ne=Math.floor(q.image.width*re),Re=Math.floor(q.image.height*re);I.setTexture2D(q,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,ee,0,0,D.x,D.y,ne,Re),Le.unbindTexture()},this.copyTextureToTexture=function(D,q,ee,re=0){const ne=q.image.width,Re=q.image.height,ke=me.convert(ee.format),We=me.convert(ee.type);I.setTexture2D(ee,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,ee.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,ee.unpackAlignment),q.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,re,D.x,D.y,ne,Re,ke,We,q.image.data):q.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,re,D.x,D.y,q.mipmaps[0].width,q.mipmaps[0].height,ke,q.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,re,D.x,D.y,ke,We,q.image),re===0&&ee.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(D,q,ee,re,ne=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=D.max.x-D.min.x+1,ke=D.max.y-D.min.y+1,We=D.max.z-D.min.z+1,je=me.convert(re.format),Je=me.convert(re.type);let qe;if(re.isData3DTexture)I.setTexture3D(re,0),qe=Y.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)I.setTexture2DArray(re,0),qe=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,re.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,re.unpackAlignment);const Ke=Y.getParameter(Y.UNPACK_ROW_LENGTH),ht=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Ft=Y.getParameter(Y.UNPACK_SKIP_PIXELS),yt=Y.getParameter(Y.UNPACK_SKIP_ROWS),rn=Y.getParameter(Y.UNPACK_SKIP_IMAGES),lt=ee.isCompressedTexture?ee.mipmaps[ne]:ee.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,lt.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,lt.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,D.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,D.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,D.min.z),ee.isDataTexture||ee.isData3DTexture?Y.texSubImage3D(qe,ne,q.x,q.y,q.z,Re,ke,We,je,Je,lt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(qe,ne,q.x,q.y,q.z,Re,ke,We,je,lt.data)):Y.texSubImage3D(qe,ne,q.x,q.y,q.z,Re,ke,We,je,Je,lt),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ke),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ht),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ft),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,yt),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,rn),ne===0&&re.generateMipmaps&&Y.generateMipmap(qe),Le.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?I.setTextureCube(D,0):D.isData3DTexture?I.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?I.setTexture2DArray(D,0):I.setTexture2D(D,0),Le.unbindTexture()},this.resetState=function(){w=0,b=0,S=null,Le.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Za?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Nr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Mt?Xn:Tl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xn?Mt:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Nm extends Kl{}Nm.prototype.isWebGL1Renderer=!0;class Fm extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qa extends wt{constructor(e,t,n,r,a,l,s,o,f){super(e,t,n,r,a,l,s,o,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bm extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ga extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cl,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Ho={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class km{constructor(e,t,n){const r=this;let a=!1,l=0,s=0,o;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,l,s),a=!0},this.itemEnd=function(u){l++,r.onProgress!==void 0&&r.onProgress(u,l,s),l===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return f.push(u,c),this},this.removeHandler=function(u){const c=f.indexOf(u);return c!==-1&&f.splice(c,2),this},this.getHandler=function(u){for(let c=0,h=f.length;c<h;c+=2){const p=f[c],_=f[c+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const zm=new km;class es{constructor(e){this.manager=e!==void 0?e:zm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}es.DEFAULT_MATERIAL_NAME="__DEFAULT";class Gm extends es{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=Ho.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const s=Gi("img");function o(){u(),Ho.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(c){u(),r&&r(c),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",o,!1),s.removeEventListener("error",f,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class Hm extends es{constructor(e){super(e)}load(e,t,n,r){const a=new wt,l=new Gm(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class $l extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ea=new gt,Vo=new ae,Wo=new ae;class Vm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ka,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vo),Wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wo),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wm extends Vm{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xm extends $l{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Wm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jm extends $l{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xo(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);function Zi(i,e){for(var t=0;t<e.length;t++){const n=e[t];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in i)){const a=Object.getOwnPropertyDescriptor(n,r);a&&Object.defineProperty(i,r,a.get?a:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}function Ym(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function qi(i){if(i.__esModule)return i;var e=i.default;if(typeof e=="function"){var t=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var jn={},ts={},_n={};Object.defineProperty(_n,"__esModule",{value:!0});var Ql=_n.loop=tc=_n.conditional=ec=_n.parse=void 0,Zm=function i(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;if(Array.isArray(t))t.forEach(function(l){return i(e,l,n,r)});else if(typeof t=="function")t(e,n,r,i);else{var a=Object.keys(t)[0];Array.isArray(t[a])?(r[a]={},i(e,t[a],n,r[a])):r[a]=t[a](e,n,r,i)}return n},ec=_n.parse=Zm,qm=function(i,e){return function(t,n,r,a){e(t,n,r)&&a(t,i,n,r)}},tc=_n.conditional=qm,Km=function(i,e){return function(t,n,r,a){for(var l=[],s=t.pos;e(t,n,r);){var o={};if(a(t,i,n,o),t.pos===s)break;s=t.pos,l.push(o)}return l}};Ql=_n.loop=Km;const $m=Zi({__proto__:null,get conditional(){return tc},default:_n,get loop(){return Ql},get parse(){return ec}},[_n]),nc=qi($m);var dt={};Object.defineProperty(dt,"__esModule",{value:!0});var ic=dt.readBits=hc=dt.readArray=fc=dt.readUnsigned=uc=dt.readString=cc=dt.peekBytes=lc=dt.readBytes=oc=dt.peekByte=sc=dt.readByte=rc=dt.buildStream=void 0,Jm=function(i){return{data:i,pos:0}},rc=dt.buildStream=Jm,ac=function(){return function(i){return i.data[i.pos++]}},sc=dt.readByte=ac,Qm=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return function(e){return e.data[e.pos+i]}},oc=dt.peekByte=Qm,zr=function(i){return function(e){return e.data.subarray(e.pos,e.pos+=i)}},lc=dt.readBytes=zr,e_=function(i){return function(e){return e.data.subarray(e.pos,e.pos+i)}},cc=dt.peekBytes=e_,t_=function(i){return function(e){return Array.from(zr(i)(e)).map(function(t){return String.fromCharCode(t)}).join("")}},uc=dt.readString=t_,n_=function(i){return function(e){var t=zr(2)(e);return i?(t[1]<<8)+t[0]:(t[0]<<8)+t[1]}},fc=dt.readUnsigned=n_,i_=function(i,e){return function(t,n,r){for(var a=typeof e=="function"?e(t,n,r):e,l=zr(i),s=new Array(a),o=0;o<a;o++)s[o]=l(t);return s}},hc=dt.readArray=i_,r_=function(i,e,t){for(var n=0,r=0;r<t;r++)n+=i[e+r]&&Math.pow(2,t-r-1);return n},a_=function(i){return function(e){for(var t=ac()(e),n=new Array(8),r=0;r<8;r++)n[7-r]=!!(t&1<<r);return Object.keys(i).reduce(function(a,l){var s=i[l];return s.length?a[l]=r_(n,s.index,s.length):a[l]=n[s.index],a},{})}};ic=dt.readBits=a_;const s_=Zi({__proto__:null,get buildStream(){return rc},default:dt,get peekByte(){return oc},get peekBytes(){return cc},get readArray(){return hc},get readBits(){return ic},get readByte(){return sc},get readBytes(){return lc},get readString(){return uc},get readUnsigned(){return fc}},[dt]),dc=qi(s_);(function(i){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=nc,t=dc,n={blocks:function(c){for(var h=0,p=[],_=c.data.length,g=0,d=(0,t.readByte)()(c);d!==h&&d;d=(0,t.readByte)()(c)){if(c.pos+d>=_){var m=_-c.pos;p.push((0,t.readBytes)(m)(c)),g+=m;break}p.push((0,t.readBytes)(d)(c)),g+=d}for(var x=new Uint8Array(g),y=0,T=0;T<p.length;T++)x.set(p[T],y),y+=p[T].length;return x}},r=(0,e.conditional)({gce:[{codes:(0,t.readBytes)(2)},{byteSize:(0,t.readByte)()},{extras:(0,t.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,t.readUnsigned)(!0)},{transparentColorIndex:(0,t.readByte)()},{terminator:(0,t.readByte)()}]},function(c){var h=(0,t.peekBytes)(2)(c);return h[0]===33&&h[1]===249}),a=(0,e.conditional)({image:[{code:(0,t.readByte)()},{descriptor:[{left:(0,t.readUnsigned)(!0)},{top:(0,t.readUnsigned)(!0)},{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{lct:(0,t.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,e.conditional)({lct:(0,t.readArray)(3,function(c,h,p){return Math.pow(2,p.descriptor.lct.size+1)})},function(c,h,p){return p.descriptor.lct.exists}),{data:[{minCodeSize:(0,t.readByte)()},n]}]},function(c){return(0,t.peekByte)()(c)===44}),l=(0,e.conditional)({text:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{preData:function(c,h,p){return(0,t.readBytes)(p.text.blockSize)(c)}},n]},function(c){var h=(0,t.peekBytes)(2)(c);return h[0]===33&&h[1]===1}),s=(0,e.conditional)({application:[{codes:(0,t.readBytes)(2)},{blockSize:(0,t.readByte)()},{id:function(c,h,p){return(0,t.readString)(p.blockSize)(c)}},n]},function(c){var h=(0,t.peekBytes)(2)(c);return h[0]===33&&h[1]===255}),o=(0,e.conditional)({comment:[{codes:(0,t.readBytes)(2)},n]},function(c){var h=(0,t.peekBytes)(2)(c);return h[0]===33&&h[1]===254}),f=[{header:[{signature:(0,t.readString)(3)},{version:(0,t.readString)(3)}]},{lsd:[{width:(0,t.readUnsigned)(!0)},{height:(0,t.readUnsigned)(!0)},{gct:(0,t.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,t.readByte)()},{pixelAspectRatio:(0,t.readByte)()}]},(0,e.conditional)({gct:(0,t.readArray)(3,function(c,h){return Math.pow(2,h.lsd.gct.size+1)})},function(c,h){return h.lsd.gct.exists}),{frames:(0,e.loop)([r,s,o,a,l],function(c){var h=(0,t.peekByte)()(c);return h===33||h===44})}],u=f;i.default=u})(ts);const o_=Ym(ts),l_=Zi({__proto__:null,default:o_},[ts]),c_=qi(l_);var Hi={};Object.defineProperty(Hi,"__esModule",{value:!0});var pc=Hi.deinterlace=void 0,u_=function(i,e){for(var t=new Array(i.length),n=i.length/e,r=function(u,c){var h=i.slice(c*e,(c+1)*e);t.splice.apply(t,[u*e,e].concat(h))},a=[0,4,2,1],l=[8,8,4,2],s=0,o=0;o<4;o++)for(var f=a[o];f<n;f+=l[o])r(f,s),s++;return t};pc=Hi.deinterlace=u_;const f_=Zi({__proto__:null,default:Hi,get deinterlace(){return pc}},[Hi]),h_=qi(f_);var Vi={};Object.defineProperty(Vi,"__esModule",{value:!0});var mc=Vi.lzw=void 0,d_=function(i,e,t){var n=4096,r=-1,a=t,l,s,o,f,u,c,h,w,p,_,T,g,b,S,O,U,d=new Array(t),m=new Array(n),x=new Array(n),y=new Array(n+1);for(g=i,s=1<<g,u=s+1,l=s+2,h=r,f=g+1,o=(1<<f)-1,p=0;p<s;p++)m[p]=0,x[p]=p;var T,w,b,S,U,O;for(T=w=b=S=U=O=0,_=0;_<a;){if(S===0){if(w<f){T+=e[O]<<w,w+=8,O++;continue}if(p=T&o,T>>=f,w-=f,p>l||p==u)break;if(p==s){f=g+1,o=(1<<f)-1,l=s+2,h=r;continue}if(h==r){y[S++]=x[p],h=p,b=p;continue}for(c=p,p==l&&(y[S++]=b,p=h);p>s;)y[S++]=x[p],p=m[p];b=x[p]&255,y[S++]=b,l<n&&(m[l]=h,x[l]=b,l++,!(l&o)&&l<n&&(f++,o+=l)),h=c}S--,d[U++]=y[S],_++}for(_=U;_<a;_++)d[_]=0;return d};mc=Vi.lzw=d_;const p_=Zi({__proto__:null,default:Vi,get lzw(){return mc}},[Vi]),m_=qi(p_);Object.defineProperty(jn,"__esModule",{value:!0});var _c=jn.decompressFrames=jn.decompressFrame=vc=jn.parseGIF=void 0,__=b_(c_),g_=nc,v_=dc,x_=h_,y_=m_;function b_(i){return i&&i.__esModule?i:{default:i}}var M_=function(i){var e=new Uint8Array(i);return(0,g_.parse)((0,v_.buildStream)(e),__.default)},vc=jn.parseGIF=M_,S_=function(i){for(var e=i.pixels.length,t=new Uint8ClampedArray(e*4),n=0;n<e;n++){var r=n*4,a=i.pixels[n],l=i.colorTable[a]||[0,0,0];t[r]=l[0],t[r+1]=l[1],t[r+2]=l[2],t[r+3]=a!==i.transparentIndex?255:0}return t},xc=function(i,e,t){if(!i.image){console.warn("gif frame does not have associated image.");return}var n=i.image,r=n.descriptor.width*n.descriptor.height,a=(0,y_.lzw)(n.data.minCodeSize,n.data.blocks,r);n.descriptor.lct.interlaced&&(a=(0,x_.deinterlace)(a,n.descriptor.width));var l={pixels:a,dims:{top:i.image.descriptor.top,left:i.image.descriptor.left,width:i.image.descriptor.width,height:i.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?l.colorTable=n.lct:l.colorTable=e,i.gce&&(l.delay=(i.gce.delay||10)*10,l.disposalType=i.gce.extras.disposal,i.gce.extras.transparentColorGiven&&(l.transparentIndex=i.gce.transparentColorIndex)),t&&(l.patch=S_(l)),l};jn.decompressFrame=xc;var E_=function(i,e){return i.frames.filter(function(t){return t.image}).map(function(t){return xc(t,i.gct,e)})};_c=jn.decompressFrames=E_;const wa={},w_=i=>(wa[i]??(wa[i]=new T_(i)),wa[i]);class T_ extends Zn{constructor(e){super(),this.url=e,this.load()}get isLoading(){return this._isLoading}get hasFailed(){return this._failed}load(){this._isLoading=!0,this._failed=!1,this._promise=fetch(this.url).then(e=>e.arrayBuffer()).then(e=>{this._gif=vc(e),this._frames=_c(this._gif,!0),this._isLoading=!1,this.dispatchEvent({type:"loaded",target:this})}).catch(e=>{this._failed=!0,this._isLoading=!1,this.dispatchEvent({type:"error",target:this,message:e.toString()})})}frameAt(e){return this._frames[e]}get width(){return this._gif.lsd.width}get height(){return this._gif.lsd.height}get totalFrames(){return this._frames.length}get parsedGif(){return this._gif}}function A_(i){return new Promise((e,t)=>{const n=w_(i),r=()=>{n.removeEventListener("loaded",a),n.removeEventListener("error",a)},a=s=>{r();const o=document.createElement("canvas");o.width=n.width,o.height=n.height,e(new C_(o,n))},l=s=>{r(),t(s)};n.isLoading?(n.addEventListener("loaded",a),n.addEventListener("error",l)):n.hasFailed?l("Failed to load the gif"):a()})}class C_ extends Qa{constructor(e,t,n=!0){super(e),this.gif=t,this.play=n,this.tempCanvas=document.createElement("canvas"),this.tmpCtx=this.tempCanvas.getContext("2d"),this.ctx=this.canvas.getContext("2d"),this.frameIndex=0,this.renderLoop(),n||this.renderFrame()}get canvas(){return this.source.data}get frame(){return this.frameIndex+1}set frame(e){this.frameIndex=Math.min(Math.max(0,e-1),this.gif.totalFrames-1),this.renderFrame()}renderLoop(){if(!this.play){requestAnimationFrame(this.renderLoop.bind(this));return}var e=new Date().getTime(),t=this.renderFrame();this.frameIndex++,this.frameIndex>=this.gif.totalFrames&&(this.frameIndex=0);var n=new Date().getTime(),r=n-e;setTimeout(()=>{requestAnimationFrame(this.renderLoop.bind(this))},Math.max(0,Math.floor(t.delay-r)))}renderFrame(){const e=this.gif.frameAt(this.frameIndex);return e.disposalType===2&&this.ctx.clearRect(0,0,this.gif.width,this.gif.height),this.drawPatch(e),this.needsUpdate=!0,e}drawPatch(e){var t=e.dims;(!this.frameImageData||t.width!==this.frameImageData.width||t.height!==this.frameImageData.height)&&(this.tempCanvas.width=t.width,this.tempCanvas.height=t.height,this.frameImageData=this.tmpCtx.createImageData(t.width,t.height)),this.frameImageData.data.set(e.patch),this.tmpCtx.putImageData(this.frameImageData,0,0),this.ctx.drawImage(this.tempCanvas,t.left,t.top)}dispose(){this.play=!1,super.dispose()}}var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function R_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function xr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var yc={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(i,e){(function(t){i.exports=t()})(function(){return function t(n,r,a){function l(f,u){if(!r[f]){if(!n[f]){var c=typeof xr=="function"&&xr;if(!u&&c)return c(f,!0);if(s)return s(f,!0);var h=new Error("Cannot find module '"+f+"'");throw h.code="MODULE_NOT_FOUND",h}var p=r[f]={exports:{}};n[f][0].call(p.exports,function(_){var g=n[f][1][_];return l(g||_)},p,p.exports,t,n,r,a)}return r[f].exports}for(var s=typeof xr=="function"&&xr,o=0;o<a.length;o++)l(a[o]);return l}({1:[function(t,n,r){var a=t("./utils"),l=t("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(o){for(var f=[],u,c,h,p,_,g,d,m=0,x=o.length,y=x,T=a.getTypeOf(o)!=="string";m<o.length;)y=x-m,T?(u=o[m++],c=m<x?o[m++]:0,h=m<x?o[m++]:0):(u=o.charCodeAt(m++),c=m<x?o.charCodeAt(m++):0,h=m<x?o.charCodeAt(m++):0),p=u>>2,_=(u&3)<<4|c>>4,g=y>1?(c&15)<<2|h>>6:64,d=y>2?h&63:64,f.push(s.charAt(p)+s.charAt(_)+s.charAt(g)+s.charAt(d));return f.join("")},r.decode=function(o){var f,u,c,h,p,_,g,d=0,m=0,x="data:";if(o.substr(0,x.length)===x)throw new Error("Invalid base64 input, it looks like a data url.");o=o.replace(/[^A-Za-z0-9+/=]/g,"");var y=o.length*3/4;if(o.charAt(o.length-1)===s.charAt(64)&&y--,o.charAt(o.length-2)===s.charAt(64)&&y--,y%1!==0)throw new Error("Invalid base64 input, bad content length.");var T;for(l.uint8array?T=new Uint8Array(y|0):T=new Array(y|0);d<o.length;)h=s.indexOf(o.charAt(d++)),p=s.indexOf(o.charAt(d++)),_=s.indexOf(o.charAt(d++)),g=s.indexOf(o.charAt(d++)),f=h<<2|p>>4,u=(p&15)<<4|_>>2,c=(_&3)<<6|g,T[m++]=f,_!==64&&(T[m++]=u),g!==64&&(T[m++]=c);return T}},{"./support":30,"./utils":32}],2:[function(t,n,r){var a=t("./external"),l=t("./stream/DataWorker"),s=t("./stream/Crc32Probe"),o=t("./stream/DataLengthProbe");function f(u,c,h,p,_){this.compressedSize=u,this.uncompressedSize=c,this.crc32=h,this.compression=p,this.compressedContent=_}f.prototype={getContentWorker:function(){var u=new l(a.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")),c=this;return u.on("end",function(){if(this.streamInfo.data_length!==c.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new l(a.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},f.createWorkerFrom=function(u,c,h){return u.pipe(new s).pipe(new o("uncompressedSize")).pipe(c.compressWorker(h)).pipe(new o("compressedSize")).withStreamInfo("compression",c)},n.exports=f},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var a=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new a("STORE compression")},uncompressWorker:function(){return new a("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var a=t("./utils");function l(){for(var u,c=[],h=0;h<256;h++){u=h;for(var p=0;p<8;p++)u=u&1?3988292384^u>>>1:u>>>1;c[h]=u}return c}var s=l();function o(u,c,h,p){var _=s,g=p+h;u=u^-1;for(var d=p;d<g;d++)u=u>>>8^_[(u^c[d])&255];return u^-1}function f(u,c,h,p){var _=s,g=p+h;u=u^-1;for(var d=p;d<g;d++)u=u>>>8^_[(u^c.charCodeAt(d))&255];return u^-1}n.exports=function(c,h){if(typeof c>"u"||!c.length)return 0;var p=a.getTypeOf(c)!=="string";return p?o(h|0,c,c.length,0):f(h|0,c,c.length,0)}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var a=null;typeof Promise<"u"?a=Promise:a=t("lie"),n.exports={Promise:a}},{lie:37}],7:[function(t,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=t("pako"),s=t("./utils"),o=t("./stream/GenericWorker"),f=a?"uint8array":"array";r.magic="\b\0";function u(c,h){o.call(this,"FlateWorker/"+c),this._pako=null,this._pakoAction=c,this._pakoOptions=h,this.meta={}}s.inherits(u,o),u.prototype.processChunk=function(c){this.meta=c.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(f,c.data),!1)},u.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var c=this;this._pako.onData=function(h){c.push({data:h,meta:c.meta})}},r.compressWorker=function(c){return new u("Deflate",c)},r.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){var a=t("../utils"),l=t("../stream/GenericWorker"),s=t("../utf8"),o=t("../crc32"),f=t("../signature"),u=function(m,x){var y="",T;for(T=0;T<x;T++)y+=String.fromCharCode(m&255),m=m>>>8;return y},c=function(m,x){var y=m;return m||(y=x?16893:33204),(y&65535)<<16},h=function(m){return(m||0)&63},p=function(m,x,y,T,w,b){var S=m.file,U=m.compression,O=b!==s.utf8encode,M=a.transformTo("string",b(S.name)),C=a.transformTo("string",s.utf8encode(S.name)),N=S.comment,G=a.transformTo("string",b(N)),F=a.transformTo("string",s.utf8encode(N)),H=C.length!==S.name.length,z=F.length!==N.length,Q,V,ie="",se="",ue="",X=S.dir,he=S.date,j={crc32:0,compressedSize:0,uncompressedSize:0};(!x||y)&&(j.crc32=m.crc32,j.compressedSize=m.compressedSize,j.uncompressedSize=m.uncompressedSize);var ce=0;x&&(ce|=8),!O&&(H||z)&&(ce|=2048);var xe=0,we=0;X&&(xe|=16),w==="UNIX"?(we=798,xe|=c(S.unixPermissions,X)):(we=20,xe|=h(S.dosPermissions)),Q=he.getUTCHours(),Q=Q<<6,Q=Q|he.getUTCMinutes(),Q=Q<<5,Q=Q|he.getUTCSeconds()/2,V=he.getUTCFullYear()-1980,V=V<<4,V=V|he.getUTCMonth()+1,V=V<<5,V=V|he.getUTCDate(),H&&(se=u(1,1)+u(o(M),4)+C,ie+="up"+u(se.length,2)+se),z&&(ue=u(1,1)+u(o(G),4)+F,ie+="uc"+u(ue.length,2)+ue);var ve="";ve+=`
\0`,ve+=u(ce,2),ve+=U.magic,ve+=u(Q,2),ve+=u(V,2),ve+=u(j.crc32,4),ve+=u(j.compressedSize,4),ve+=u(j.uncompressedSize,4),ve+=u(M.length,2),ve+=u(ie.length,2);var Se=f.LOCAL_FILE_HEADER+ve+M+ie,ze=f.CENTRAL_FILE_HEADER+u(we,2)+ve+u(G.length,2)+"\0\0\0\0"+u(xe,4)+u(T,4)+M+ie+G;return{fileRecord:Se,dirRecord:ze}},_=function(m,x,y,T,w){var b="",S=a.transformTo("string",w(T));return b=f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+u(m,2)+u(m,2)+u(x,4)+u(y,4)+u(S.length,2)+S,b},g=function(m){var x="";return x=f.DATA_DESCRIPTOR+u(m.crc32,4)+u(m.compressedSize,4)+u(m.uncompressedSize,4),x};function d(m,x,y,T){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=x,this.zipPlatform=y,this.encodeFileName=T,this.streamFiles=m,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(d,l),d.prototype.push=function(m){var x=m.meta.percent||0,y=this.entriesCount,T=this._sources.length;this.accumulate?this.contentBuffer.push(m):(this.bytesWritten+=m.data.length,l.prototype.push.call(this,{data:m.data,meta:{currentFile:this.currentFile,percent:y?(x+100*(y-T-1))/y:100}}))},d.prototype.openedSource=function(m){this.currentSourceOffset=this.bytesWritten,this.currentFile=m.file.name;var x=this.streamFiles&&!m.file.dir;if(x){var y=p(m,x,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:y.fileRecord,meta:{percent:0}})}else this.accumulate=!0},d.prototype.closedSource=function(m){this.accumulate=!1;var x=this.streamFiles&&!m.file.dir,y=p(m,x,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(y.dirRecord),x)this.push({data:g(m),meta:{percent:100}});else for(this.push({data:y.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},d.prototype.flush=function(){for(var m=this.bytesWritten,x=0;x<this.dirRecords.length;x++)this.push({data:this.dirRecords[x],meta:{percent:100}});var y=this.bytesWritten-m,T=_(this.dirRecords.length,y,m,this.zipComment,this.encodeFileName);this.push({data:T,meta:{percent:100}})},d.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},d.prototype.registerPrevious=function(m){this._sources.push(m);var x=this;return m.on("data",function(y){x.processChunk(y)}),m.on("end",function(){x.closedSource(x.previous.streamInfo),x._sources.length?x.prepareNextSource():x.end()}),m.on("error",function(y){x.error(y)}),this},d.prototype.resume=function(){if(!l.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0},d.prototype.error=function(m){var x=this._sources;if(!l.prototype.error.call(this,m))return!1;for(var y=0;y<x.length;y++)try{x[y].error(m)}catch{}return!0},d.prototype.lock=function(){l.prototype.lock.call(this);for(var m=this._sources,x=0;x<m.length;x++)m[x].lock()},n.exports=d},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var a=t("../compressions"),l=t("./ZipFileWorker"),s=function(o,f){var u=o||f,c=a[u];if(!c)throw new Error(u+" is not a valid compression method !");return c};r.generateWorker=function(o,f,u){var c=new l(f.streamFiles,u,f.platform,f.encodeFileName),h=0;try{o.forEach(function(p,_){h++;var g=s(_.options.compression,f.compression),d=_.options.compressionOptions||f.compressionOptions||{},m=_.dir,x=_.date;_._compressWorker(g,d).withStreamInfo("file",{name:p,dir:m,date:x,comment:_.comment||"",unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions}).pipe(c)}),c.entriesCount=h}catch(p){c.error(p)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function a(){if(!(this instanceof a))return new a;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new a;for(var s in this)typeof this[s]!="function"&&(l[s]=this[s]);return l}}a.prototype=t("./object"),a.prototype.loadAsync=t("./load"),a.support=t("./support"),a.defaults=t("./defaults"),a.version="3.10.1",a.loadAsync=function(l,s){return new a().loadAsync(l,s)},a.external=t("./external"),n.exports=a},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var a=t("./utils"),l=t("./external"),s=t("./utf8"),o=t("./zipEntries"),f=t("./stream/Crc32Probe"),u=t("./nodejsUtils");function c(h){return new l.Promise(function(p,_){var g=h.decompressed.getContentWorker().pipe(new f);g.on("error",function(d){_(d)}).on("end",function(){g.streamInfo.crc32!==h.decompressed.crc32?_(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(h,p){var _=this;return p=a.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),u.isNode&&u.isStream(h)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):a.prepareContent("the loaded zip file",h,!0,p.optimizedBinaryString,p.base64).then(function(g){var d=new o(p);return d.load(g),d}).then(function(d){var m=[l.Promise.resolve(d)],x=d.files;if(p.checkCRC32)for(var y=0;y<x.length;y++)m.push(c(x[y]));return l.Promise.all(m)}).then(function(d){for(var m=d.shift(),x=m.files,y=0;y<x.length;y++){var T=x[y],w=T.fileNameStr,b=a.resolve(T.fileNameStr);_.file(b,T.decompressed,{binary:!0,optimizedBinaryString:!0,date:T.date,dir:T.dir,comment:T.fileCommentStr.length?T.fileCommentStr:null,unixPermissions:T.unixPermissions,dosPermissions:T.dosPermissions,createFolders:p.createFolders}),T.dir||(_.file(b).unsafeOriginalName=w)}return m.zipComment.length&&(_.comment=m.zipComment),_})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var a=t("../utils"),l=t("../stream/GenericWorker");function s(o,f){l.call(this,"Nodejs stream input adapter for "+o),this._upstreamEnded=!1,this._bindStream(f)}a.inherits(s,l),s.prototype._bindStream=function(o){var f=this;this._stream=o,o.pause(),o.on("data",function(u){f.push({data:u,meta:{percent:0}})}).on("error",function(u){f.isPaused?this.generatedError=u:f.error(u)}).on("end",function(){f.isPaused?f._upstreamEnded=!0:f.end()})},s.prototype.pause=function(){return l.prototype.pause.call(this)?(this._stream.pause(),!0):!1},s.prototype.resume=function(){return l.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1},n.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var a=t("readable-stream").Readable,l=t("../utils");l.inherits(s,a);function s(o,f,u){a.call(this,f),this._helper=o;var c=this;o.on("data",function(h,p){c.push(h)||c._helper.pause(),u&&u(p)}).on("error",function(h){c.emit("error",h)}).on("end",function(){c.push(null)})}s.prototype._read=function(){this._helper.resume()},n.exports=s},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(a,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(a,l);if(typeof a=="number")throw new Error('The "data" argument must not be a number');return new Buffer(a,l)},allocBuffer:function(a){if(Buffer.alloc)return Buffer.alloc(a);var l=new Buffer(a);return l.fill(0),l},isBuffer:function(a){return Buffer.isBuffer(a)},isStream:function(a){return a&&typeof a.on=="function"&&typeof a.pause=="function"&&typeof a.resume=="function"}}},{}],15:[function(t,n,r){var a=t("./utf8"),l=t("./utils"),s=t("./stream/GenericWorker"),o=t("./stream/StreamHelper"),f=t("./defaults"),u=t("./compressedObject"),c=t("./zipObject"),h=t("./generate"),p=t("./nodejsUtils"),_=t("./nodejs/NodejsStreamInputAdapter"),g=function(w,b,S){var U=l.getTypeOf(b),O,M=l.extend(S||{},f);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&M.unixPermissions&16384&&(M.dir=!0),M.dosPermissions&&M.dosPermissions&16&&(M.dir=!0),M.dir&&(w=m(w)),M.createFolders&&(O=d(w))&&x.call(this,O,!0);var C=U==="string"&&M.binary===!1&&M.base64===!1;(!S||typeof S.binary>"u")&&(M.binary=!C);var N=b instanceof u&&b.uncompressedSize===0;(N||M.dir||!b||b.length===0)&&(M.base64=!1,M.binary=!0,b="",M.compression="STORE",U="string");var G=null;b instanceof u||b instanceof s?G=b:p.isNode&&p.isStream(b)?G=new _(w,b):G=l.prepareContent(w,b,M.binary,M.optimizedBinaryString,M.base64);var F=new c(w,G,M);this.files[w]=F},d=function(w){w.slice(-1)==="/"&&(w=w.substring(0,w.length-1));var b=w.lastIndexOf("/");return b>0?w.substring(0,b):""},m=function(w){return w.slice(-1)!=="/"&&(w+="/"),w},x=function(w,b){return b=typeof b<"u"?b:f.createFolders,w=m(w),this.files[w]||g.call(this,w,null,{dir:!0,createFolders:b}),this.files[w]};function y(w){return Object.prototype.toString.call(w)==="[object RegExp]"}var T={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(w){var b,S,U;for(b in this.files)U=this.files[b],S=b.slice(this.root.length,b.length),S&&b.slice(0,this.root.length)===this.root&&w(S,U)},filter:function(w){var b=[];return this.forEach(function(S,U){w(S,U)&&b.push(U)}),b},file:function(w,b,S){if(arguments.length===1)if(y(w)){var U=w;return this.filter(function(M,C){return!C.dir&&U.test(M)})}else{var O=this.files[this.root+w];return O&&!O.dir?O:null}else w=this.root+w,g.call(this,w,b,S);return this},folder:function(w){if(!w)return this;if(y(w))return this.filter(function(O,M){return M.dir&&w.test(O)});var b=this.root+w,S=x.call(this,b),U=this.clone();return U.root=S.name,U},remove:function(w){w=this.root+w;var b=this.files[w];if(b||(w.slice(-1)!=="/"&&(w+="/"),b=this.files[w]),b&&!b.dir)delete this.files[w];else for(var S=this.filter(function(O,M){return M.name.slice(0,w.length)===w}),U=0;U<S.length;U++)delete this.files[S[U].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(w){var b,S={};try{if(S=l.extend(w||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode}),S.type=S.type.toLowerCase(),S.compression=S.compression.toUpperCase(),S.type==="binarystring"&&(S.type="string"),!S.type)throw new Error("No output type specified.");l.checkSupport(S.type),(S.platform==="darwin"||S.platform==="freebsd"||S.platform==="linux"||S.platform==="sunos")&&(S.platform="UNIX"),S.platform==="win32"&&(S.platform="DOS");var U=S.comment||this.comment||"";b=h.generateWorker(this,S,U)}catch(O){b=new s("error"),b.error(O)}return new o(b,S.type||"string",S.mimeType)},generateAsync:function(w,b){return this.generateInternalStream(w).accumulate(b)},generateNodeStream:function(w,b){return w=w||{},w.type||(w.type="nodebuffer"),this.generateInternalStream(w).toNodejsStream(b)}};n.exports=T},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var a=t("./DataReader"),l=t("../utils");function s(o){a.call(this,o);for(var f=0;f<this.data.length;f++)o[f]=o[f]&255}l.inherits(s,a),s.prototype.byteAt=function(o){return this.data[this.zero+o]},s.prototype.lastIndexOfSignature=function(o){for(var f=o.charCodeAt(0),u=o.charCodeAt(1),c=o.charCodeAt(2),h=o.charCodeAt(3),p=this.length-4;p>=0;--p)if(this.data[p]===f&&this.data[p+1]===u&&this.data[p+2]===c&&this.data[p+3]===h)return p-this.zero;return-1},s.prototype.readAndCheckSignature=function(o){var f=o.charCodeAt(0),u=o.charCodeAt(1),c=o.charCodeAt(2),h=o.charCodeAt(3),p=this.readData(4);return f===p[0]&&u===p[1]&&c===p[2]&&h===p[3]},s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var a=t("../utils");function l(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var o=0,f;for(this.checkOffset(s),f=this.index+s-1;f>=this.index;f--)o=(o<<8)+this.byteAt(f);return this.index+=s,o},readString:function(s){return a.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC((s>>25&127)+1980,(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(s&31)<<1))}},n.exports=l},{"../utils":32}],19:[function(t,n,r){var a=t("./Uint8ArrayReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var a=t("./DataReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},s.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},s.prototype.readAndCheckSignature=function(o){var f=this.readData(4);return o===f},s.prototype.readData=function(o){this.checkOffset(o);var f=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var a=t("./ArrayReader"),l=t("../utils");function s(o){a.call(this,o)}l.inherits(s,a),s.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var f=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,f},n.exports=s},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var a=t("../utils"),l=t("../support"),s=t("./ArrayReader"),o=t("./StringReader"),f=t("./NodeBufferReader"),u=t("./Uint8ArrayReader");n.exports=function(c){var h=a.getTypeOf(c);return a.checkSupport(h),h==="string"&&!l.uint8array?new o(c):h==="nodebuffer"?new f(c):l.uint8array?new u(a.transformTo("uint8array",c)):new s(a.transformTo("array",c))}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var a=t("./GenericWorker"),l=t("../utils");function s(o){a.call(this,"ConvertWorker to "+o),this.destType=o}l.inherits(s,a),s.prototype.processChunk=function(o){this.push({data:l.transformTo(this.destType,o.data),meta:o.meta})},n.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var a=t("./GenericWorker"),l=t("../crc32"),s=t("../utils");function o(){a.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}s.inherits(o,a),o.prototype.processChunk=function(f){this.streamInfo.crc32=l(f.data,this.streamInfo.crc32||0),this.push(f)},n.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var a=t("../utils"),l=t("./GenericWorker");function s(o){l.call(this,"DataLengthProbe for "+o),this.propName=o,this.withStreamInfo(o,0)}a.inherits(s,l),s.prototype.processChunk=function(o){if(o){var f=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=f+o.data.length}l.prototype.processChunk.call(this,o)},n.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var a=t("../utils"),l=t("./GenericWorker"),s=16*1024;function o(f){l.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,f.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=a.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}a.inherits(o,l),o.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return l.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,a.delay(this._tickAndRepeat,[],this)),!0):!1},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(a.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var f=s,u=null,c=Math.min(this.max,this.index+f);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,c);break;case"uint8array":u=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":u=this.data.slice(this.index,c);break}return this.index=c,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function a(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}a.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return this.isFinished?!1:(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,s){return this._listeners[l].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,s){if(this._listeners[l])for(var o=0;o<this._listeners[l].length;o++)this._listeners[l][o].call(this,s)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var s=this;return l.on("data",function(o){s.processChunk(o)}),l.on("end",function(){s.end()}),l.on("error",function(o){s.error(o)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var l=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,s){return this.extraStreamInfo[l]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},n.exports=a},{}],29:[function(t,n,r){var a=t("../utils"),l=t("./ConvertWorker"),s=t("./GenericWorker"),o=t("../base64"),f=t("../support"),u=t("../external"),c=null;if(f.nodestream)try{c=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function h(d,m,x){switch(d){case"blob":return a.newBlob(a.transformTo("arraybuffer",m),x);case"base64":return o.encode(m);default:return a.transformTo(d,m)}}function p(d,m){var x,y=0,T=null,w=0;for(x=0;x<m.length;x++)w+=m[x].length;switch(d){case"string":return m.join("");case"array":return Array.prototype.concat.apply([],m);case"uint8array":for(T=new Uint8Array(w),x=0;x<m.length;x++)T.set(m[x],y),y+=m[x].length;return T;case"nodebuffer":return Buffer.concat(m);default:throw new Error("concat : unsupported type '"+d+"'")}}function _(d,m){return new u.Promise(function(x,y){var T=[],w=d._internalType,b=d._outputType,S=d._mimeType;d.on("data",function(U,O){T.push(U),m&&m(O)}).on("error",function(U){T=[],y(U)}).on("end",function(){try{var U=h(b,p(w,T),S);x(U)}catch(O){y(O)}T=[]}).resume()})}function g(d,m,x){var y=m;switch(m){case"blob":case"arraybuffer":y="uint8array";break;case"base64":y="string";break}try{this._internalType=y,this._outputType=m,this._mimeType=x,a.checkSupport(y),this._worker=d.pipe(new l(y)),d.lock()}catch(T){this._worker=new s("error"),this._worker.error(T)}}g.prototype={accumulate:function(d){return _(this,d)},on:function(d,m){var x=this;return d==="data"?this._worker.on(d,function(y){m.call(x,y.data,y.meta)}):this._worker.on(d,function(){a.delay(m,arguments,x)}),this},resume:function(){return a.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(d){if(a.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new c(this,{objectMode:this._outputType!=="nodebuffer"},d)}},n.exports=g},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var a=new ArrayBuffer(0);try{r.blob=new Blob([a],{type:"application/zip"}).size===0}catch{try{var l=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,s=new l;s.append(a),r.blob=s.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var a=t("./utils"),l=t("./support"),s=t("./nodejsUtils"),o=t("./stream/GenericWorker"),f=new Array(256),u=0;u<256;u++)f[u]=u>=252?6:u>=248?5:u>=240?4:u>=224?3:u>=192?2:1;f[254]=f[254]=1;var c=function(d){var m,x,y,T,w,b=d.length,S=0;for(T=0;T<b;T++)x=d.charCodeAt(T),(x&64512)===55296&&T+1<b&&(y=d.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),S+=x<128?1:x<2048?2:x<65536?3:4;for(l.uint8array?m=new Uint8Array(S):m=new Array(S),w=0,T=0;w<S;T++)x=d.charCodeAt(T),(x&64512)===55296&&T+1<b&&(y=d.charCodeAt(T+1),(y&64512)===56320&&(x=65536+(x-55296<<10)+(y-56320),T++)),x<128?m[w++]=x:x<2048?(m[w++]=192|x>>>6,m[w++]=128|x&63):x<65536?(m[w++]=224|x>>>12,m[w++]=128|x>>>6&63,m[w++]=128|x&63):(m[w++]=240|x>>>18,m[w++]=128|x>>>12&63,m[w++]=128|x>>>6&63,m[w++]=128|x&63);return m},h=function(d,m){var x;for(m=m||d.length,m>d.length&&(m=d.length),x=m-1;x>=0&&(d[x]&192)===128;)x--;return x<0||x===0?m:x+f[d[x]]>m?x:m},p=function(d){var m,x,y,T,w=d.length,b=new Array(w*2);for(x=0,m=0;m<w;){if(y=d[m++],y<128){b[x++]=y;continue}if(T=f[y],T>4){b[x++]=65533,m+=T-1;continue}for(y&=T===2?31:T===3?15:7;T>1&&m<w;)y=y<<6|d[m++]&63,T--;if(T>1){b[x++]=65533;continue}y<65536?b[x++]=y:(y-=65536,b[x++]=55296|y>>10&1023,b[x++]=56320|y&1023)}return b.length!==x&&(b.subarray?b=b.subarray(0,x):b.length=x),a.applyFromCharCode(b)};r.utf8encode=function(m){return l.nodebuffer?s.newBufferFrom(m,"utf-8"):c(m)},r.utf8decode=function(m){return l.nodebuffer?a.transformTo("nodebuffer",m).toString("utf-8"):(m=a.transformTo(l.uint8array?"uint8array":"array",m),p(m))};function _(){o.call(this,"utf-8 decode"),this.leftOver=null}a.inherits(_,o),_.prototype.processChunk=function(d){var m=a.transformTo(l.uint8array?"uint8array":"array",d.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var x=m;m=new Uint8Array(x.length+this.leftOver.length),m.set(this.leftOver,0),m.set(x,this.leftOver.length)}else m=this.leftOver.concat(m);this.leftOver=null}var y=h(m),T=m;y!==m.length&&(l.uint8array?(T=m.subarray(0,y),this.leftOver=m.subarray(y,m.length)):(T=m.slice(0,y),this.leftOver=m.slice(y,m.length))),this.push({data:r.utf8decode(T),meta:d.meta})},_.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=_;function g(){o.call(this,"utf-8 encode")}a.inherits(g,o),g.prototype.processChunk=function(d){this.push({data:r.utf8encode(d.data),meta:d.meta})},r.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var a=t("./support"),l=t("./base64"),s=t("./nodejsUtils"),o=t("./external");t("setimmediate");function f(d){var m=null;return a.uint8array?m=new Uint8Array(d.length):m=new Array(d.length),c(d,m)}r.newBlob=function(d,m){r.checkSupport("blob");try{return new Blob([d],{type:m})}catch{try{var x=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,y=new x;return y.append(d),y.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};function u(d){return d}function c(d,m){for(var x=0;x<d.length;++x)m[x]=d.charCodeAt(x)&255;return m}var h={stringifyByChunk:function(d,m,x){var y=[],T=0,w=d.length;if(w<=x)return String.fromCharCode.apply(null,d);for(;T<w;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,d.slice(T,Math.min(T+x,w)))):y.push(String.fromCharCode.apply(null,d.subarray(T,Math.min(T+x,w)))),T+=x;return y.join("")},stringifyByChar:function(d){for(var m="",x=0;x<d.length;x++)m+=String.fromCharCode(d[x]);return m},applyCanBeUsed:{uint8array:function(){try{return a.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return a.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}}()}};function p(d){var m=65536,x=r.getTypeOf(d),y=!0;if(x==="uint8array"?y=h.applyCanBeUsed.uint8array:x==="nodebuffer"&&(y=h.applyCanBeUsed.nodebuffer),y)for(;m>1;)try{return h.stringifyByChunk(d,x,m)}catch{m=Math.floor(m/2)}return h.stringifyByChar(d)}r.applyFromCharCode=p;function _(d,m){for(var x=0;x<d.length;x++)m[x]=d[x];return m}var g={};g.string={string:u,array:function(d){return c(d,new Array(d.length))},arraybuffer:function(d){return g.string.uint8array(d).buffer},uint8array:function(d){return c(d,new Uint8Array(d.length))},nodebuffer:function(d){return c(d,s.allocBuffer(d.length))}},g.array={string:p,array:u,arraybuffer:function(d){return new Uint8Array(d).buffer},uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return s.newBufferFrom(d)}},g.arraybuffer={string:function(d){return p(new Uint8Array(d))},array:function(d){return _(new Uint8Array(d),new Array(d.byteLength))},arraybuffer:u,uint8array:function(d){return new Uint8Array(d)},nodebuffer:function(d){return s.newBufferFrom(new Uint8Array(d))}},g.uint8array={string:p,array:function(d){return _(d,new Array(d.length))},arraybuffer:function(d){return d.buffer},uint8array:u,nodebuffer:function(d){return s.newBufferFrom(d)}},g.nodebuffer={string:p,array:function(d){return _(d,new Array(d.length))},arraybuffer:function(d){return g.nodebuffer.uint8array(d).buffer},uint8array:function(d){return _(d,new Uint8Array(d.length))},nodebuffer:u},r.transformTo=function(d,m){if(m||(m=""),!d)return m;r.checkSupport(d);var x=r.getTypeOf(m),y=g[x][d](m);return y},r.resolve=function(d){for(var m=d.split("/"),x=[],y=0;y<m.length;y++){var T=m[y];T==="."||T===""&&y!==0&&y!==m.length-1||(T===".."?x.pop():x.push(T))}return x.join("/")},r.getTypeOf=function(d){if(typeof d=="string")return"string";if(Object.prototype.toString.call(d)==="[object Array]")return"array";if(a.nodebuffer&&s.isBuffer(d))return"nodebuffer";if(a.uint8array&&d instanceof Uint8Array)return"uint8array";if(a.arraybuffer&&d instanceof ArrayBuffer)return"arraybuffer"},r.checkSupport=function(d){var m=a[d.toLowerCase()];if(!m)throw new Error(d+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(d){var m="",x,y;for(y=0;y<(d||"").length;y++)x=d.charCodeAt(y),m+="\\x"+(x<16?"0":"")+x.toString(16).toUpperCase();return m},r.delay=function(d,m,x){setImmediate(function(){d.apply(x||null,m||[])})},r.inherits=function(d,m){var x=function(){};x.prototype=m.prototype,d.prototype=new x},r.extend=function(){var d={},m,x;for(m=0;m<arguments.length;m++)for(x in arguments[m])Object.prototype.hasOwnProperty.call(arguments[m],x)&&typeof d[x]>"u"&&(d[x]=arguments[m][x]);return d},r.prepareContent=function(d,m,x,y,T){var w=o.Promise.resolve(m).then(function(b){var S=a.blob&&(b instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(b))!==-1);return S&&typeof FileReader<"u"?new o.Promise(function(U,O){var M=new FileReader;M.onload=function(C){U(C.target.result)},M.onerror=function(C){O(C.target.error)},M.readAsArrayBuffer(b)}):b});return w.then(function(b){var S=r.getTypeOf(b);return S?(S==="arraybuffer"?b=r.transformTo("uint8array",b):S==="string"&&(T?b=l.decode(b):x&&y!==!0&&(b=f(b))),b):o.Promise.reject(new Error("Can't read the data of '"+d+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var a=t("./reader/readerFor"),l=t("./utils"),s=t("./signature"),o=t("./zipEntry"),f=t("./support");function u(c){this.files=[],this.loadOptions=c}u.prototype={checkSignature:function(c){if(!this.reader.readAndCheckSignature(c)){this.reader.index-=4;var h=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(h)+", expected "+l.pretty(c)+")")}},isSignature:function(c,h){var p=this.reader.index;this.reader.setIndex(c);var _=this.reader.readString(4),g=_===h;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var c=this.reader.readData(this.zipCommentLength),h=f.uint8array?"uint8array":"array",p=l.transformTo(h,c);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var c=this.zip64EndOfCentralSize-44,h=0,p,_,g;h<c;)p=this.reader.readInt(2),_=this.reader.readInt(4),g=this.reader.readData(_),this.zip64ExtensibleData[p]={id:p,length:_,value:g}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var c,h;for(c=0;c<this.files.length;c++)h=this.files[c],this.reader.setIndex(h.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),h.readLocalPart(this.reader),h.handleUTF8(),h.processAttributes()},readCentralDir:function(){var c;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)c=new o({zip64:this.zip64},this.loadOptions),c.readCentralPart(this.reader),this.files.push(c);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var c=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(c<0){var h=!this.isSignature(0,s.LOCAL_FILE_HEADER);throw h?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(c);var p=c;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,c=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),c<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(c),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var _=this.centralDirOffset+this.centralDirSize;this.zip64&&(_+=20,_+=12+this.zip64EndOfCentralSize);var g=p-_;if(g>0)this.isSignature(p,s.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(c){this.reader=a(c)},load:function(c){this.prepareReader(c),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var a=t("./reader/readerFor"),l=t("./utils"),s=t("./compressedObject"),o=t("./crc32"),f=t("./utf8"),u=t("./compressions"),c=t("./support"),h=0,p=3,_=function(d){for(var m in u)if(Object.prototype.hasOwnProperty.call(u,m)&&u[m].magic===d)return u[m];return null};function g(d,m){this.options=d,this.loadOptions=m}g.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(d){var m,x;if(d.skip(22),this.fileNameLength=d.readInt(2),x=d.readInt(2),this.fileName=d.readData(this.fileNameLength),d.skip(x),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(m=_(this.compressionMethod),m===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,m,d.readData(this.compressedSize))},readCentralPart:function(d){this.versionMadeBy=d.readInt(2),d.skip(2),this.bitFlag=d.readInt(2),this.compressionMethod=d.readString(2),this.date=d.readDate(),this.crc32=d.readInt(4),this.compressedSize=d.readInt(4),this.uncompressedSize=d.readInt(4);var m=d.readInt(2);if(this.extraFieldsLength=d.readInt(2),this.fileCommentLength=d.readInt(2),this.diskNumberStart=d.readInt(2),this.internalFileAttributes=d.readInt(2),this.externalFileAttributes=d.readInt(4),this.localHeaderOffset=d.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");d.skip(m),this.readExtraFields(d),this.parseZIP64ExtraField(d),this.fileComment=d.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var d=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),d===h&&(this.dosPermissions=this.externalFileAttributes&63),d===p&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var d=a(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=d.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=d.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=d.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=d.readInt(4))}},readExtraFields:function(d){var m=d.index+this.extraFieldsLength,x,y,T;for(this.extraFields||(this.extraFields={});d.index+4<m;)x=d.readInt(2),y=d.readInt(2),T=d.readData(y),this.extraFields[x]={id:x,length:y,value:T};d.setIndex(m)},handleUTF8:function(){var d=c.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=f.utf8decode(this.fileName),this.fileCommentStr=f.utf8decode(this.fileComment);else{var m=this.findExtraFieldUnicodePath();if(m!==null)this.fileNameStr=m;else{var x=l.transformTo(d,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(x)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var T=l.transformTo(d,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(T)}}},findExtraFieldUnicodePath:function(){var d=this.extraFields[28789];if(d){var m=a(d.value);return m.readInt(1)!==1||o(this.fileName)!==m.readInt(4)?null:f.utf8decode(m.readData(d.length-5))}return null},findExtraFieldUnicodeComment:function(){var d=this.extraFields[25461];if(d){var m=a(d.value);return m.readInt(1)!==1||o(this.fileComment)!==m.readInt(4)?null:f.utf8decode(m.readData(d.length-5))}return null}},n.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),s=t("./utf8"),o=t("./compressedObject"),f=t("./stream/GenericWorker"),u=function(_,g,d){this.name=_,this.dir=d.dir,this.date=d.date,this.comment=d.comment,this.unixPermissions=d.unixPermissions,this.dosPermissions=d.dosPermissions,this._data=g,this._dataBinary=d.binary,this.options={compression:d.compression,compressionOptions:d.compressionOptions}};u.prototype={internalStream:function(_){var g=null,d="string";try{if(!_)throw new Error("No output type specified.");d=_.toLowerCase();var m=d==="string"||d==="text";(d==="binarystring"||d==="text")&&(d="string"),g=this._decompressWorker();var x=!this._dataBinary;x&&!m&&(g=g.pipe(new s.Utf8EncodeWorker)),!x&&m&&(g=g.pipe(new s.Utf8DecodeWorker))}catch(y){g=new f("error"),g.error(y)}return new a(g,d,"")},async:function(_,g){return this.internalStream(_).accumulate(g)},nodeStream:function(_,g){return this.internalStream(_||"nodebuffer").toNodejsStream(g)},_compressWorker:function(_,g){if(this._data instanceof o&&this._data.compression.magic===_.magic)return this._data.getCompressedWorker();var d=this._decompressWorker();return this._dataBinary||(d=d.pipe(new s.Utf8EncodeWorker)),o.createWorkerFrom(d,_,g)},_decompressWorker:function(){return this._data instanceof o?this._data.getContentWorker():this._data instanceof f?this._data:new l(this._data)}};for(var c=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],h=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<c.length;p++)u.prototype[c[p]]=h;n.exports=u},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(a){var l=a.MutationObserver||a.WebKitMutationObserver,s;if(l){var o=0,f=new l(_),u=a.document.createTextNode("");f.observe(u,{characterData:!0}),s=function(){u.data=o=++o%2}}else if(!a.setImmediate&&typeof a.MessageChannel<"u"){var c=new a.MessageChannel;c.port1.onmessage=_,s=function(){c.port2.postMessage(0)}}else"document"in a&&"onreadystatechange"in a.document.createElement("script")?s=function(){var d=a.document.createElement("script");d.onreadystatechange=function(){_(),d.onreadystatechange=null,d.parentNode.removeChild(d),d=null},a.document.documentElement.appendChild(d)}:s=function(){setTimeout(_,0)};var h,p=[];function _(){h=!0;for(var d,m,x=p.length;x;){for(m=p,p=[],d=-1;++d<x;)m[d]();x=p.length}h=!1}n.exports=g;function g(d){p.push(d)===1&&!h&&s()}}).call(this,typeof tn<"u"?tn:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var a=t("immediate");function l(){}var s={},o=["REJECTED"],f=["FULFILLED"],u=["PENDING"];n.exports=c;function c(w){if(typeof w!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,w!==l&&g(this,w)}c.prototype.finally=function(w){if(typeof w!="function")return this;var b=this.constructor;return this.then(S,U);function S(O){function M(){return O}return b.resolve(w()).then(M)}function U(O){function M(){throw O}return b.resolve(w()).then(M)}},c.prototype.catch=function(w){return this.then(null,w)},c.prototype.then=function(w,b){if(typeof w!="function"&&this.state===f||typeof b!="function"&&this.state===o)return this;var S=new this.constructor(l);if(this.state!==u){var U=this.state===f?w:b;p(S,U,this.outcome)}else this.queue.push(new h(S,w,b));return S};function h(w,b,S){this.promise=w,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}h.prototype.callFulfilled=function(w){s.resolve(this.promise,w)},h.prototype.otherCallFulfilled=function(w){p(this.promise,this.onFulfilled,w)},h.prototype.callRejected=function(w){s.reject(this.promise,w)},h.prototype.otherCallRejected=function(w){p(this.promise,this.onRejected,w)};function p(w,b,S){a(function(){var U;try{U=b(S)}catch(O){return s.reject(w,O)}U===w?s.reject(w,new TypeError("Cannot resolve promise with itself")):s.resolve(w,U)})}s.resolve=function(w,b){var S=d(_,b);if(S.status==="error")return s.reject(w,S.value);var U=S.value;if(U)g(w,U);else{w.state=f,w.outcome=b;for(var O=-1,M=w.queue.length;++O<M;)w.queue[O].callFulfilled(b)}return w},s.reject=function(w,b){w.state=o,w.outcome=b;for(var S=-1,U=w.queue.length;++S<U;)w.queue[S].callRejected(b);return w};function _(w){var b=w&&w.then;if(w&&(typeof w=="object"||typeof w=="function")&&typeof b=="function")return function(){b.apply(w,arguments)}}function g(w,b){var S=!1;function U(N){S||(S=!0,s.reject(w,N))}function O(N){S||(S=!0,s.resolve(w,N))}function M(){b(O,U)}var C=d(M);C.status==="error"&&U(C.value)}function d(w,b){var S={};try{S.value=w(b),S.status="success"}catch(U){S.status="error",S.value=U}return S}c.resolve=m;function m(w){return w instanceof this?w:s.resolve(new this(l),w)}c.reject=x;function x(w){var b=new this(l);return s.reject(b,w)}c.all=y;function y(w){var b=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,U=!1;if(!S)return this.resolve([]);for(var O=new Array(S),M=0,C=-1,N=new this(l);++C<S;)G(w[C],C);return N;function G(F,H){b.resolve(F).then(z,function(Q){U||(U=!0,s.reject(N,Q))});function z(Q){O[H]=Q,++M===S&&!U&&(U=!0,s.resolve(N,O))}}}c.race=T;function T(w){var b=this;if(Object.prototype.toString.call(w)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=w.length,U=!1;if(!S)return this.resolve([]);for(var O=-1,M=new this(l);++O<S;)C(w[O]);return M;function C(N){b.resolve(N).then(function(G){U||(U=!0,s.resolve(M,G))},function(G){U||(U=!0,s.reject(M,G))})}}},{immediate:36}],38:[function(t,n,r){var a=t("./lib/utils/common").assign,l=t("./lib/deflate"),s=t("./lib/inflate"),o=t("./lib/zlib/constants"),f={};a(f,l,s,o),n.exports=f},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var a=t("./zlib/deflate"),l=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/messages"),f=t("./zlib/zstream"),u=Object.prototype.toString,c=0,h=4,p=0,_=1,g=2,d=-1,m=0,x=8;function y(S){if(!(this instanceof y))return new y(S);this.options=l.assign({level:d,method:x,chunkSize:16384,windowBits:15,memLevel:8,strategy:m,to:""},S||{});var U=this.options;U.raw&&U.windowBits>0?U.windowBits=-U.windowBits:U.gzip&&U.windowBits>0&&U.windowBits<16&&(U.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new f,this.strm.avail_out=0;var O=a.deflateInit2(this.strm,U.level,U.method,U.windowBits,U.memLevel,U.strategy);if(O!==p)throw new Error(o[O]);if(U.header&&a.deflateSetHeader(this.strm,U.header),U.dictionary){var M;if(typeof U.dictionary=="string"?M=s.string2buf(U.dictionary):u.call(U.dictionary)==="[object ArrayBuffer]"?M=new Uint8Array(U.dictionary):M=U.dictionary,O=a.deflateSetDictionary(this.strm,M),O!==p)throw new Error(o[O]);this._dict_set=!0}}y.prototype.push=function(S,U){var O=this.strm,M=this.options.chunkSize,C,N;if(this.ended)return!1;N=U===~~U?U:U===!0?h:c,typeof S=="string"?O.input=s.string2buf(S):u.call(S)==="[object ArrayBuffer]"?O.input=new Uint8Array(S):O.input=S,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new l.Buf8(M),O.next_out=0,O.avail_out=M),C=a.deflate(O,N),C!==_&&C!==p)return this.onEnd(C),this.ended=!0,!1;(O.avail_out===0||O.avail_in===0&&(N===h||N===g))&&(this.options.to==="string"?this.onData(s.buf2binstring(l.shrinkBuf(O.output,O.next_out))):this.onData(l.shrinkBuf(O.output,O.next_out)))}while((O.avail_in>0||O.avail_out===0)&&C!==_);return N===h?(C=a.deflateEnd(this.strm),this.onEnd(C),this.ended=!0,C===p):(N===g&&(this.onEnd(p),O.avail_out=0),!0)},y.prototype.onData=function(S){this.chunks.push(S)},y.prototype.onEnd=function(S){S===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=S,this.msg=this.strm.msg};function T(S,U){var O=new y(U);if(O.push(S,!0),O.err)throw O.msg||o[O.err];return O.result}function w(S,U){return U=U||{},U.raw=!0,T(S,U)}function b(S,U){return U=U||{},U.gzip=!0,T(S,U)}r.Deflate=y,r.deflate=T,r.deflateRaw=w,r.gzip=b},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var a=t("./zlib/inflate"),l=t("./utils/common"),s=t("./utils/strings"),o=t("./zlib/constants"),f=t("./zlib/messages"),u=t("./zlib/zstream"),c=t("./zlib/gzheader"),h=Object.prototype.toString;function p(d){if(!(this instanceof p))return new p(d);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},d||{});var m=this.options;m.raw&&m.windowBits>=0&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),m.windowBits>=0&&m.windowBits<16&&!(d&&d.windowBits)&&(m.windowBits+=32),m.windowBits>15&&m.windowBits<48&&(m.windowBits&15||(m.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var x=a.inflateInit2(this.strm,m.windowBits);if(x!==o.Z_OK)throw new Error(f[x]);this.header=new c,a.inflateGetHeader(this.strm,this.header)}p.prototype.push=function(d,m){var x=this.strm,y=this.options.chunkSize,T=this.options.dictionary,w,b,S,U,O,M,C=!1;if(this.ended)return!1;b=m===~~m?m:m===!0?o.Z_FINISH:o.Z_NO_FLUSH,typeof d=="string"?x.input=s.binstring2buf(d):h.call(d)==="[object ArrayBuffer]"?x.input=new Uint8Array(d):x.input=d,x.next_in=0,x.avail_in=x.input.length;do{if(x.avail_out===0&&(x.output=new l.Buf8(y),x.next_out=0,x.avail_out=y),w=a.inflate(x,o.Z_NO_FLUSH),w===o.Z_NEED_DICT&&T&&(typeof T=="string"?M=s.string2buf(T):h.call(T)==="[object ArrayBuffer]"?M=new Uint8Array(T):M=T,w=a.inflateSetDictionary(this.strm,M)),w===o.Z_BUF_ERROR&&C===!0&&(w=o.Z_OK,C=!1),w!==o.Z_STREAM_END&&w!==o.Z_OK)return this.onEnd(w),this.ended=!0,!1;x.next_out&&(x.avail_out===0||w===o.Z_STREAM_END||x.avail_in===0&&(b===o.Z_FINISH||b===o.Z_SYNC_FLUSH))&&(this.options.to==="string"?(S=s.utf8border(x.output,x.next_out),U=x.next_out-S,O=s.buf2string(x.output,S),x.next_out=U,x.avail_out=y-U,U&&l.arraySet(x.output,x.output,S,U,0),this.onData(O)):this.onData(l.shrinkBuf(x.output,x.next_out))),x.avail_in===0&&x.avail_out===0&&(C=!0)}while((x.avail_in>0||x.avail_out===0)&&w!==o.Z_STREAM_END);return w===o.Z_STREAM_END&&(b=o.Z_FINISH),b===o.Z_FINISH?(w=a.inflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===o.Z_OK):(b===o.Z_SYNC_FLUSH&&(this.onEnd(o.Z_OK),x.avail_out=0),!0)},p.prototype.onData=function(d){this.chunks.push(d)},p.prototype.onEnd=function(d){d===o.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg};function _(d,m){var x=new p(m);if(x.push(d,!0),x.err)throw x.msg||f[x.err];return x.result}function g(d,m){return m=m||{},m.raw=!0,_(d,m)}r.Inflate=p,r.inflate=_,r.inflateRaw=g,r.ungzip=_},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var a=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(o){for(var f=Array.prototype.slice.call(arguments,1);f.length;){var u=f.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var c in u)u.hasOwnProperty(c)&&(o[c]=u[c])}}return o},r.shrinkBuf=function(o,f){return o.length===f?o:o.subarray?o.subarray(0,f):(o.length=f,o)};var l={arraySet:function(o,f,u,c,h){if(f.subarray&&o.subarray){o.set(f.subarray(u,u+c),h);return}for(var p=0;p<c;p++)o[h+p]=f[u+p]},flattenChunks:function(o){var f,u,c,h,p,_;for(c=0,f=0,u=o.length;f<u;f++)c+=o[f].length;for(_=new Uint8Array(c),h=0,f=0,u=o.length;f<u;f++)p=o[f],_.set(p,h),h+=p.length;return _}},s={arraySet:function(o,f,u,c,h){for(var p=0;p<c;p++)o[h+p]=f[u+p]},flattenChunks:function(o){return[].concat.apply([],o)}};r.setTyped=function(o){o?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,l)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(a)},{}],42:[function(t,n,r){var a=t("./common"),l=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var o=new a.Buf8(256),f=0;f<256;f++)o[f]=f>=252?6:f>=248?5:f>=240?4:f>=224?3:f>=192?2:1;o[254]=o[254]=1,r.string2buf=function(c){var h,p,_,g,d,m=c.length,x=0;for(g=0;g<m;g++)p=c.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=c.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),x+=p<128?1:p<2048?2:p<65536?3:4;for(h=new a.Buf8(x),d=0,g=0;d<x;g++)p=c.charCodeAt(g),(p&64512)===55296&&g+1<m&&(_=c.charCodeAt(g+1),(_&64512)===56320&&(p=65536+(p-55296<<10)+(_-56320),g++)),p<128?h[d++]=p:p<2048?(h[d++]=192|p>>>6,h[d++]=128|p&63):p<65536?(h[d++]=224|p>>>12,h[d++]=128|p>>>6&63,h[d++]=128|p&63):(h[d++]=240|p>>>18,h[d++]=128|p>>>12&63,h[d++]=128|p>>>6&63,h[d++]=128|p&63);return h};function u(c,h){if(h<65537&&(c.subarray&&s||!c.subarray&&l))return String.fromCharCode.apply(null,a.shrinkBuf(c,h));for(var p="",_=0;_<h;_++)p+=String.fromCharCode(c[_]);return p}r.buf2binstring=function(c){return u(c,c.length)},r.binstring2buf=function(c){for(var h=new a.Buf8(c.length),p=0,_=h.length;p<_;p++)h[p]=c.charCodeAt(p);return h},r.buf2string=function(c,h){var p,_,g,d,m=h||c.length,x=new Array(m*2);for(_=0,p=0;p<m;){if(g=c[p++],g<128){x[_++]=g;continue}if(d=o[g],d>4){x[_++]=65533,p+=d-1;continue}for(g&=d===2?31:d===3?15:7;d>1&&p<m;)g=g<<6|c[p++]&63,d--;if(d>1){x[_++]=65533;continue}g<65536?x[_++]=g:(g-=65536,x[_++]=55296|g>>10&1023,x[_++]=56320|g&1023)}return u(x,_)},r.utf8border=function(c,h){var p;for(h=h||c.length,h>c.length&&(h=c.length),p=h-1;p>=0&&(c[p]&192)===128;)p--;return p<0||p===0?h:p+o[c[p]]>h?p:h}},{"./common":41}],43:[function(t,n,r){function a(l,s,o,f){for(var u=l&65535|0,c=l>>>16&65535|0,h=0;o!==0;){h=o>2e3?2e3:o,o-=h;do u=u+s[f++]|0,c=c+u|0;while(--h);u%=65521,c%=65521}return u|c<<16|0}n.exports=a},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){function a(){for(var o,f=[],u=0;u<256;u++){o=u;for(var c=0;c<8;c++)o=o&1?3988292384^o>>>1:o>>>1;f[u]=o}return f}var l=a();function s(o,f,u,c){var h=l,p=c+u;o^=-1;for(var _=c;_<p;_++)o=o>>>8^h[(o^f[_])&255];return o^-1}n.exports=s},{}],46:[function(t,n,r){var a=t("../utils/common"),l=t("./trees"),s=t("./adler32"),o=t("./crc32"),f=t("./messages"),u=0,c=1,h=3,p=4,_=5,g=0,d=1,m=-2,x=-3,y=-5,T=-1,w=1,b=2,S=3,U=4,O=0,M=2,C=8,N=9,G=15,F=8,H=29,z=256,Q=z+1+H,V=30,ie=19,se=2*Q+1,ue=15,X=3,he=258,j=he+X+1,ce=32,xe=42,we=69,ve=73,Se=91,ze=103,Ae=113,Y=666,He=1,Pe=2,Oe=3,Le=4,Be=3;function Ne(v,K){return v.msg=f[K],K}function I(v){return(v<<1)-(v>4?9:0)}function L(v){for(var K=v.length;--K>=0;)v[K]=0}function J(v){var K=v.state,$=K.pending;$>v.avail_out&&($=v.avail_out),$!==0&&(a.arraySet(v.output,K.pending_buf,K.pending_out,$,v.next_out),v.next_out+=$,K.pending_out+=$,v.total_out+=$,v.avail_out-=$,K.pending-=$,K.pending===0&&(K.pending_out=0))}function fe(v,K){l._tr_flush_block(v,v.block_start>=0?v.block_start:-1,v.strstart-v.block_start,K),v.block_start=v.strstart,J(v.strm)}function oe(v,K){v.pending_buf[v.pending++]=K}function _e(v,K){v.pending_buf[v.pending++]=K>>>8&255,v.pending_buf[v.pending++]=K&255}function De(v,K,$,P){var B=v.avail_in;return B>P&&(B=P),B===0?0:(v.avail_in-=B,a.arraySet(K,v.input,v.next_in,B,$),v.state.wrap===1?v.adler=s(v.adler,K,B,$):v.state.wrap===2&&(v.adler=o(v.adler,K,B,$)),v.next_in+=B,v.total_in+=B,B)}function ye(v,K){var $=v.max_chain_length,P=v.strstart,B,Z,Te=v.prev_length,be=v.nice_match,Ce=v.strstart>v.w_size-j?v.strstart-(v.w_size-j):0,it=v.window,Ut=v.w_mask,ot=v.prev,Qe=v.strstart+he,ct=it[P+Te-1],mt=it[P+Te];v.prev_length>=v.good_match&&($>>=2),be>v.lookahead&&(be=v.lookahead);do if(B=K,!(it[B+Te]!==mt||it[B+Te-1]!==ct||it[B]!==it[P]||it[++B]!==it[P+1])){P+=2,B++;do;while(it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&it[++P]===it[++B]&&P<Qe);if(Z=he-(Qe-P),P=Qe-he,Z>Te){if(v.match_start=K,Te=Z,Z>=be)break;ct=it[P+Te-1],mt=it[P+Te]}}while((K=ot[K&Ut])>Ce&&--$!==0);return Te<=v.lookahead?Te:v.lookahead}function Ee(v){var K=v.w_size,$,P,B,Z,Te;do{if(Z=v.window_size-v.lookahead-v.strstart,v.strstart>=K+(K-j)){a.arraySet(v.window,v.window,K,K,0),v.match_start-=K,v.strstart-=K,v.block_start-=K,P=v.hash_size,$=P;do B=v.head[--$],v.head[$]=B>=K?B-K:0;while(--P);P=K,$=P;do B=v.prev[--$],v.prev[$]=B>=K?B-K:0;while(--P);Z+=K}if(v.strm.avail_in===0)break;if(P=De(v.strm,v.window,v.strstart+v.lookahead,Z),v.lookahead+=P,v.lookahead+v.insert>=X)for(Te=v.strstart-v.insert,v.ins_h=v.window[Te],v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+1])&v.hash_mask;v.insert&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[Te+X-1])&v.hash_mask,v.prev[Te&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=Te,Te++,v.insert--,!(v.lookahead+v.insert<X)););}while(v.lookahead<j&&v.strm.avail_in!==0)}function Fe(v,K){var $=65535;for($>v.pending_buf_size-5&&($=v.pending_buf_size-5);;){if(v.lookahead<=1){if(Ee(v),v.lookahead===0&&K===u)return He;if(v.lookahead===0)break}v.strstart+=v.lookahead,v.lookahead=0;var P=v.block_start+$;if((v.strstart===0||v.strstart>=P)&&(v.lookahead=v.strstart-P,v.strstart=P,fe(v,!1),v.strm.avail_out===0)||v.strstart-v.block_start>=v.w_size-j&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):(v.strstart>v.block_start&&(fe(v,!1),v.strm.avail_out===0),He)}function Ge(v,K){for(var $,P;;){if(v.lookahead<j){if(Ee(v),v.lookahead<j&&K===u)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=X&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),$!==0&&v.strstart-$<=v.w_size-j&&(v.match_length=ye(v,$)),v.match_length>=X)if(P=l._tr_tally(v,v.strstart-v.match_start,v.match_length-X),v.lookahead-=v.match_length,v.match_length<=v.max_lazy_match&&v.lookahead>=X){v.match_length--;do v.strstart++,v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart;while(--v.match_length!==0);v.strstart++}else v.strstart+=v.match_length,v.match_length=0,v.ins_h=v.window[v.strstart],v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+1])&v.hash_mask;else P=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++;if(P&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=v.strstart<X-1?v.strstart:X-1,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function de(v,K){for(var $,P,B;;){if(v.lookahead<j){if(Ee(v),v.lookahead<j&&K===u)return He;if(v.lookahead===0)break}if($=0,v.lookahead>=X&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart),v.prev_length=v.match_length,v.prev_match=v.match_start,v.match_length=X-1,$!==0&&v.prev_length<v.max_lazy_match&&v.strstart-$<=v.w_size-j&&(v.match_length=ye(v,$),v.match_length<=5&&(v.strategy===w||v.match_length===X&&v.strstart-v.match_start>4096)&&(v.match_length=X-1)),v.prev_length>=X&&v.match_length<=v.prev_length){B=v.strstart+v.lookahead-X,P=l._tr_tally(v,v.strstart-1-v.prev_match,v.prev_length-X),v.lookahead-=v.prev_length-1,v.prev_length-=2;do++v.strstart<=B&&(v.ins_h=(v.ins_h<<v.hash_shift^v.window[v.strstart+X-1])&v.hash_mask,$=v.prev[v.strstart&v.w_mask]=v.head[v.ins_h],v.head[v.ins_h]=v.strstart);while(--v.prev_length!==0);if(v.match_available=0,v.match_length=X-1,v.strstart++,P&&(fe(v,!1),v.strm.avail_out===0))return He}else if(v.match_available){if(P=l._tr_tally(v,0,v.window[v.strstart-1]),P&&fe(v,!1),v.strstart++,v.lookahead--,v.strm.avail_out===0)return He}else v.match_available=1,v.strstart++,v.lookahead--}return v.match_available&&(P=l._tr_tally(v,0,v.window[v.strstart-1]),v.match_available=0),v.insert=v.strstart<X-1?v.strstart:X-1,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Xe(v,K){for(var $,P,B,Z,Te=v.window;;){if(v.lookahead<=he){if(Ee(v),v.lookahead<=he&&K===u)return He;if(v.lookahead===0)break}if(v.match_length=0,v.lookahead>=X&&v.strstart>0&&(B=v.strstart-1,P=Te[B],P===Te[++B]&&P===Te[++B]&&P===Te[++B])){Z=v.strstart+he;do;while(P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&P===Te[++B]&&B<Z);v.match_length=he-(Z-B),v.match_length>v.lookahead&&(v.match_length=v.lookahead)}if(v.match_length>=X?($=l._tr_tally(v,1,v.match_length-X),v.lookahead-=v.match_length,v.strstart+=v.match_length,v.match_length=0):($=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++),$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ve(v,K){for(var $;;){if(v.lookahead===0&&(Ee(v),v.lookahead===0)){if(K===u)return He;break}if(v.match_length=0,$=l._tr_tally(v,0,v.window[v.strstart]),v.lookahead--,v.strstart++,$&&(fe(v,!1),v.strm.avail_out===0))return He}return v.insert=0,K===p?(fe(v,!0),v.strm.avail_out===0?Oe:Le):v.last_lit&&(fe(v,!1),v.strm.avail_out===0)?He:Pe}function Ie(v,K,$,P,B){this.good_length=v,this.max_lazy=K,this.nice_length=$,this.max_chain=P,this.func=B}var Ue;Ue=[new Ie(0,0,0,0,Fe),new Ie(4,4,8,4,Ge),new Ie(4,5,16,8,Ge),new Ie(4,6,32,32,Ge),new Ie(4,4,16,16,de),new Ie(8,16,32,32,de),new Ie(8,16,128,128,de),new Ie(8,32,128,256,de),new Ie(32,128,258,1024,de),new Ie(32,258,258,4096,de)];function me(v){v.window_size=2*v.w_size,L(v.head),v.max_lazy_match=Ue[v.level].max_lazy,v.good_match=Ue[v.level].good_length,v.nice_match=Ue[v.level].nice_length,v.max_chain_length=Ue[v.level].max_chain,v.strstart=0,v.block_start=0,v.lookahead=0,v.insert=0,v.match_length=v.prev_length=X-1,v.match_available=0,v.ins_h=0}function A(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=C,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(se*2),this.dyn_dtree=new a.Buf16((2*V+1)*2),this.bl_tree=new a.Buf16((2*ie+1)*2),L(this.dyn_ltree),L(this.dyn_dtree),L(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(ue+1),this.heap=new a.Buf16(2*Q+1),L(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*Q+1),L(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function te(v){var K;return!v||!v.state?Ne(v,m):(v.total_in=v.total_out=0,v.data_type=M,K=v.state,K.pending=0,K.pending_out=0,K.wrap<0&&(K.wrap=-K.wrap),K.status=K.wrap?xe:Ae,v.adler=K.wrap===2?0:1,K.last_flush=u,l._tr_init(K),g)}function le(v){var K=te(v);return K===g&&me(v.state),K}function ge(v,K){return!v||!v.state||v.state.wrap!==2?m:(v.state.gzhead=K,g)}function k(v,K,$,P,B,Z){if(!v)return m;var Te=1;if(K===T&&(K=6),P<0?(Te=0,P=-P):P>15&&(Te=2,P-=16),B<1||B>N||$!==C||P<8||P>15||K<0||K>9||Z<0||Z>U)return Ne(v,m);P===8&&(P=9);var be=new A;return v.state=be,be.strm=v,be.wrap=Te,be.gzhead=null,be.w_bits=P,be.w_size=1<<be.w_bits,be.w_mask=be.w_size-1,be.hash_bits=B+7,be.hash_size=1<<be.hash_bits,be.hash_mask=be.hash_size-1,be.hash_shift=~~((be.hash_bits+X-1)/X),be.window=new a.Buf8(be.w_size*2),be.head=new a.Buf16(be.hash_size),be.prev=new a.Buf16(be.w_size),be.lit_bufsize=1<<B+6,be.pending_buf_size=be.lit_bufsize*4,be.pending_buf=new a.Buf8(be.pending_buf_size),be.d_buf=1*be.lit_bufsize,be.l_buf=(1+2)*be.lit_bufsize,be.level=K,be.strategy=Z,be.method=$,le(v)}function R(v,K){return k(v,K,C,G,F,O)}function E(v,K){var $,P,B,Z;if(!v||!v.state||K>_||K<0)return v?Ne(v,m):m;if(P=v.state,!v.output||!v.input&&v.avail_in!==0||P.status===Y&&K!==p)return Ne(v,v.avail_out===0?y:m);if(P.strm=v,$=P.last_flush,P.last_flush=K,P.status===xe)if(P.wrap===2)v.adler=0,oe(P,31),oe(P,139),oe(P,8),P.gzhead?(oe(P,(P.gzhead.text?1:0)+(P.gzhead.hcrc?2:0)+(P.gzhead.extra?4:0)+(P.gzhead.name?8:0)+(P.gzhead.comment?16:0)),oe(P,P.gzhead.time&255),oe(P,P.gzhead.time>>8&255),oe(P,P.gzhead.time>>16&255),oe(P,P.gzhead.time>>24&255),oe(P,P.level===9?2:P.strategy>=b||P.level<2?4:0),oe(P,P.gzhead.os&255),P.gzhead.extra&&P.gzhead.extra.length&&(oe(P,P.gzhead.extra.length&255),oe(P,P.gzhead.extra.length>>8&255)),P.gzhead.hcrc&&(v.adler=o(v.adler,P.pending_buf,P.pending,0)),P.gzindex=0,P.status=we):(oe(P,0),oe(P,0),oe(P,0),oe(P,0),oe(P,0),oe(P,P.level===9?2:P.strategy>=b||P.level<2?4:0),oe(P,Be),P.status=Ae);else{var Te=C+(P.w_bits-8<<4)<<8,be=-1;P.strategy>=b||P.level<2?be=0:P.level<6?be=1:P.level===6?be=2:be=3,Te|=be<<6,P.strstart!==0&&(Te|=ce),Te+=31-Te%31,P.status=Ae,_e(P,Te),P.strstart!==0&&(_e(P,v.adler>>>16),_e(P,v.adler&65535)),v.adler=1}if(P.status===we)if(P.gzhead.extra){for(B=P.pending;P.gzindex<(P.gzhead.extra.length&65535)&&!(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),J(v),B=P.pending,P.pending===P.pending_buf_size));)oe(P,P.gzhead.extra[P.gzindex]&255),P.gzindex++;P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),P.gzindex===P.gzhead.extra.length&&(P.gzindex=0,P.status=ve)}else P.status=ve;if(P.status===ve)if(P.gzhead.name){B=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),J(v),B=P.pending,P.pending===P.pending_buf_size)){Z=1;break}P.gzindex<P.gzhead.name.length?Z=P.gzhead.name.charCodeAt(P.gzindex++)&255:Z=0,oe(P,Z)}while(Z!==0);P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),Z===0&&(P.gzindex=0,P.status=Se)}else P.status=Se;if(P.status===Se)if(P.gzhead.comment){B=P.pending;do{if(P.pending===P.pending_buf_size&&(P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),J(v),B=P.pending,P.pending===P.pending_buf_size)){Z=1;break}P.gzindex<P.gzhead.comment.length?Z=P.gzhead.comment.charCodeAt(P.gzindex++)&255:Z=0,oe(P,Z)}while(Z!==0);P.gzhead.hcrc&&P.pending>B&&(v.adler=o(v.adler,P.pending_buf,P.pending-B,B)),Z===0&&(P.status=ze)}else P.status=ze;if(P.status===ze&&(P.gzhead.hcrc?(P.pending+2>P.pending_buf_size&&J(v),P.pending+2<=P.pending_buf_size&&(oe(P,v.adler&255),oe(P,v.adler>>8&255),v.adler=0,P.status=Ae)):P.status=Ae),P.pending!==0){if(J(v),v.avail_out===0)return P.last_flush=-1,g}else if(v.avail_in===0&&I(K)<=I($)&&K!==p)return Ne(v,y);if(P.status===Y&&v.avail_in!==0)return Ne(v,y);if(v.avail_in!==0||P.lookahead!==0||K!==u&&P.status!==Y){var Ce=P.strategy===b?Ve(P,K):P.strategy===S?Xe(P,K):Ue[P.level].func(P,K);if((Ce===Oe||Ce===Le)&&(P.status=Y),Ce===He||Ce===Oe)return v.avail_out===0&&(P.last_flush=-1),g;if(Ce===Pe&&(K===c?l._tr_align(P):K!==_&&(l._tr_stored_block(P,0,0,!1),K===h&&(L(P.head),P.lookahead===0&&(P.strstart=0,P.block_start=0,P.insert=0))),J(v),v.avail_out===0))return P.last_flush=-1,g}return K!==p?g:P.wrap<=0?d:(P.wrap===2?(oe(P,v.adler&255),oe(P,v.adler>>8&255),oe(P,v.adler>>16&255),oe(P,v.adler>>24&255),oe(P,v.total_in&255),oe(P,v.total_in>>8&255),oe(P,v.total_in>>16&255),oe(P,v.total_in>>24&255)):(_e(P,v.adler>>>16),_e(P,v.adler&65535)),J(v),P.wrap>0&&(P.wrap=-P.wrap),P.pending!==0?g:d)}function W(v){var K;return!v||!v.state?m:(K=v.state.status,K!==xe&&K!==we&&K!==ve&&K!==Se&&K!==ze&&K!==Ae&&K!==Y?Ne(v,m):(v.state=null,K===Ae?Ne(v,x):g))}function pe(v,K){var $=K.length,P,B,Z,Te,be,Ce,it,Ut;if(!v||!v.state||(P=v.state,Te=P.wrap,Te===2||Te===1&&P.status!==xe||P.lookahead))return m;for(Te===1&&(v.adler=s(v.adler,K,$,0)),P.wrap=0,$>=P.w_size&&(Te===0&&(L(P.head),P.strstart=0,P.block_start=0,P.insert=0),Ut=new a.Buf8(P.w_size),a.arraySet(Ut,K,$-P.w_size,P.w_size,0),K=Ut,$=P.w_size),be=v.avail_in,Ce=v.next_in,it=v.input,v.avail_in=$,v.next_in=0,v.input=K,Ee(P);P.lookahead>=X;){B=P.strstart,Z=P.lookahead-(X-1);do P.ins_h=(P.ins_h<<P.hash_shift^P.window[B+X-1])&P.hash_mask,P.prev[B&P.w_mask]=P.head[P.ins_h],P.head[P.ins_h]=B,B++;while(--Z);P.strstart=B,P.lookahead=X-1,Ee(P)}return P.strstart+=P.lookahead,P.block_start=P.strstart,P.insert=P.lookahead,P.lookahead=0,P.match_length=P.prev_length=X-1,P.match_available=0,v.next_in=Ce,v.input=it,v.avail_in=be,P.wrap=Te,g}r.deflateInit=R,r.deflateInit2=k,r.deflateReset=le,r.deflateResetKeep=te,r.deflateSetHeader=ge,r.deflate=E,r.deflateEnd=W,r.deflateSetDictionary=pe,r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){function a(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}n.exports=a},{}],48:[function(t,n,r){var a=30,l=12;n.exports=function(o,f){var u,c,h,p,_,g,d,m,x,y,T,w,b,S,U,O,M,C,N,G,F,H,z,Q,V;u=o.state,c=o.next_in,Q=o.input,h=c+(o.avail_in-5),p=o.next_out,V=o.output,_=p-(f-o.avail_out),g=p+(o.avail_out-257),d=u.dmax,m=u.wsize,x=u.whave,y=u.wnext,T=u.window,w=u.hold,b=u.bits,S=u.lencode,U=u.distcode,O=(1<<u.lenbits)-1,M=(1<<u.distbits)-1;e:do{b<15&&(w+=Q[c++]<<b,b+=8,w+=Q[c++]<<b,b+=8),C=S[w&O];t:for(;;){if(N=C>>>24,w>>>=N,b-=N,N=C>>>16&255,N===0)V[p++]=C&65535;else if(N&16){G=C&65535,N&=15,N&&(b<N&&(w+=Q[c++]<<b,b+=8),G+=w&(1<<N)-1,w>>>=N,b-=N),b<15&&(w+=Q[c++]<<b,b+=8,w+=Q[c++]<<b,b+=8),C=U[w&M];n:for(;;){if(N=C>>>24,w>>>=N,b-=N,N=C>>>16&255,N&16){if(F=C&65535,N&=15,b<N&&(w+=Q[c++]<<b,b+=8,b<N&&(w+=Q[c++]<<b,b+=8)),F+=w&(1<<N)-1,F>d){o.msg="invalid distance too far back",u.mode=a;break e}if(w>>>=N,b-=N,N=p-_,F>N){if(N=F-N,N>x&&u.sane){o.msg="invalid distance too far back",u.mode=a;break e}if(H=0,z=T,y===0){if(H+=m-N,N<G){G-=N;do V[p++]=T[H++];while(--N);H=p-F,z=V}}else if(y<N){if(H+=m+y-N,N-=y,N<G){G-=N;do V[p++]=T[H++];while(--N);if(H=0,y<G){N=y,G-=N;do V[p++]=T[H++];while(--N);H=p-F,z=V}}}else if(H+=y-N,N<G){G-=N;do V[p++]=T[H++];while(--N);H=p-F,z=V}for(;G>2;)V[p++]=z[H++],V[p++]=z[H++],V[p++]=z[H++],G-=3;G&&(V[p++]=z[H++],G>1&&(V[p++]=z[H++]))}else{H=p-F;do V[p++]=V[H++],V[p++]=V[H++],V[p++]=V[H++],G-=3;while(G>2);G&&(V[p++]=V[H++],G>1&&(V[p++]=V[H++]))}}else if(N&64){o.msg="invalid distance code",u.mode=a;break e}else{C=U[(C&65535)+(w&(1<<N)-1)];continue n}break}}else if(N&64)if(N&32){u.mode=l;break e}else{o.msg="invalid literal/length code",u.mode=a;break e}else{C=S[(C&65535)+(w&(1<<N)-1)];continue t}break}}while(c<h&&p<g);G=b>>3,c-=G,b-=G<<3,w&=(1<<b)-1,o.next_in=c,o.next_out=p,o.avail_in=c<h?5+(h-c):5-(c-h),o.avail_out=p<g?257+(g-p):257-(p-g),u.hold=w,u.bits=b}},{}],49:[function(t,n,r){var a=t("../utils/common"),l=t("./adler32"),s=t("./crc32"),o=t("./inffast"),f=t("./inftrees"),u=0,c=1,h=2,p=4,_=5,g=6,d=0,m=1,x=2,y=-2,T=-3,w=-4,b=-5,S=8,U=1,O=2,M=3,C=4,N=5,G=6,F=7,H=8,z=9,Q=10,V=11,ie=12,se=13,ue=14,X=15,he=16,j=17,ce=18,xe=19,we=20,ve=21,Se=22,ze=23,Ae=24,Y=25,He=26,Pe=27,Oe=28,Le=29,Be=30,Ne=31,I=32,L=852,J=592,fe=15,oe=fe;function _e(k){return(k>>>24&255)+(k>>>8&65280)+((k&65280)<<8)+((k&255)<<24)}function De(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new a.Buf16(320),this.work=new a.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ye(k){var R;return!k||!k.state?y:(R=k.state,k.total_in=k.total_out=R.total=0,k.msg="",R.wrap&&(k.adler=R.wrap&1),R.mode=U,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new a.Buf32(L),R.distcode=R.distdyn=new a.Buf32(J),R.sane=1,R.back=-1,d)}function Ee(k){var R;return!k||!k.state?y:(R=k.state,R.wsize=0,R.whave=0,R.wnext=0,ye(k))}function Fe(k,R){var E,W;return!k||!k.state||(W=k.state,R<0?(E=0,R=-R):(E=(R>>4)+1,R<48&&(R&=15)),R&&(R<8||R>15))?y:(W.window!==null&&W.wbits!==R&&(W.window=null),W.wrap=E,W.wbits=R,Ee(k))}function Ge(k,R){var E,W;return k?(W=new De,k.state=W,W.window=null,E=Fe(k,R),E!==d&&(k.state=null),E):y}function de(k){return Ge(k,oe)}var Xe=!0,Ve,Ie;function Ue(k){if(Xe){var R;for(Ve=new a.Buf32(512),Ie=new a.Buf32(32),R=0;R<144;)k.lens[R++]=8;for(;R<256;)k.lens[R++]=9;for(;R<280;)k.lens[R++]=7;for(;R<288;)k.lens[R++]=8;for(f(c,k.lens,0,288,Ve,0,k.work,{bits:9}),R=0;R<32;)k.lens[R++]=5;f(h,k.lens,0,32,Ie,0,k.work,{bits:5}),Xe=!1}k.lencode=Ve,k.lenbits=9,k.distcode=Ie,k.distbits=5}function me(k,R,E,W){var pe,v=k.state;return v.window===null&&(v.wsize=1<<v.wbits,v.wnext=0,v.whave=0,v.window=new a.Buf8(v.wsize)),W>=v.wsize?(a.arraySet(v.window,R,E-v.wsize,v.wsize,0),v.wnext=0,v.whave=v.wsize):(pe=v.wsize-v.wnext,pe>W&&(pe=W),a.arraySet(v.window,R,E-W,pe,v.wnext),W-=pe,W?(a.arraySet(v.window,R,E-W,W,0),v.wnext=W,v.whave=v.wsize):(v.wnext+=pe,v.wnext===v.wsize&&(v.wnext=0),v.whave<v.wsize&&(v.whave+=pe))),0}function A(k,R){var E,W,pe,v,K,$,P,B,Z,Te,be,Ce,it,Ut,ot=0,Qe,ct,mt,Tt,qn,Kn,D,q,ee=new a.Buf8(4),re,ne,Re=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!k||!k.state||!k.output||!k.input&&k.avail_in!==0)return y;E=k.state,E.mode===ie&&(E.mode=se),K=k.next_out,pe=k.output,P=k.avail_out,v=k.next_in,W=k.input,$=k.avail_in,B=E.hold,Z=E.bits,Te=$,be=P,q=d;e:for(;;)switch(E.mode){case U:if(E.wrap===0){E.mode=se;break}for(;Z<16;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(E.wrap&2&&B===35615){E.check=0,ee[0]=B&255,ee[1]=B>>>8&255,E.check=s(E.check,ee,2,0),B=0,Z=0,E.mode=O;break}if(E.flags=0,E.head&&(E.head.done=!1),!(E.wrap&1)||(((B&255)<<8)+(B>>8))%31){k.msg="incorrect header check",E.mode=Be;break}if((B&15)!==S){k.msg="unknown compression method",E.mode=Be;break}if(B>>>=4,Z-=4,D=(B&15)+8,E.wbits===0)E.wbits=D;else if(D>E.wbits){k.msg="invalid window size",E.mode=Be;break}E.dmax=1<<D,k.adler=E.check=1,E.mode=B&512?Q:ie,B=0,Z=0;break;case O:for(;Z<16;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(E.flags=B,(E.flags&255)!==S){k.msg="unknown compression method",E.mode=Be;break}if(E.flags&57344){k.msg="unknown header flags set",E.mode=Be;break}E.head&&(E.head.text=B>>8&1),E.flags&512&&(ee[0]=B&255,ee[1]=B>>>8&255,E.check=s(E.check,ee,2,0)),B=0,Z=0,E.mode=M;case M:for(;Z<32;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.head&&(E.head.time=B),E.flags&512&&(ee[0]=B&255,ee[1]=B>>>8&255,ee[2]=B>>>16&255,ee[3]=B>>>24&255,E.check=s(E.check,ee,4,0)),B=0,Z=0,E.mode=C;case C:for(;Z<16;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.head&&(E.head.xflags=B&255,E.head.os=B>>8),E.flags&512&&(ee[0]=B&255,ee[1]=B>>>8&255,E.check=s(E.check,ee,2,0)),B=0,Z=0,E.mode=N;case N:if(E.flags&1024){for(;Z<16;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.length=B,E.head&&(E.head.extra_len=B),E.flags&512&&(ee[0]=B&255,ee[1]=B>>>8&255,E.check=s(E.check,ee,2,0)),B=0,Z=0}else E.head&&(E.head.extra=null);E.mode=G;case G:if(E.flags&1024&&(Ce=E.length,Ce>$&&(Ce=$),Ce&&(E.head&&(D=E.head.extra_len-E.length,E.head.extra||(E.head.extra=new Array(E.head.extra_len)),a.arraySet(E.head.extra,W,v,Ce,D)),E.flags&512&&(E.check=s(E.check,W,Ce,v)),$-=Ce,v+=Ce,E.length-=Ce),E.length))break e;E.length=0,E.mode=F;case F:if(E.flags&2048){if($===0)break e;Ce=0;do D=W[v+Ce++],E.head&&D&&E.length<65536&&(E.head.name+=String.fromCharCode(D));while(D&&Ce<$);if(E.flags&512&&(E.check=s(E.check,W,Ce,v)),$-=Ce,v+=Ce,D)break e}else E.head&&(E.head.name=null);E.length=0,E.mode=H;case H:if(E.flags&4096){if($===0)break e;Ce=0;do D=W[v+Ce++],E.head&&D&&E.length<65536&&(E.head.comment+=String.fromCharCode(D));while(D&&Ce<$);if(E.flags&512&&(E.check=s(E.check,W,Ce,v)),$-=Ce,v+=Ce,D)break e}else E.head&&(E.head.comment=null);E.mode=z;case z:if(E.flags&512){for(;Z<16;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(B!==(E.check&65535)){k.msg="header crc mismatch",E.mode=Be;break}B=0,Z=0}E.head&&(E.head.hcrc=E.flags>>9&1,E.head.done=!0),k.adler=E.check=0,E.mode=ie;break;case Q:for(;Z<32;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}k.adler=E.check=_e(B),B=0,Z=0,E.mode=V;case V:if(E.havedict===0)return k.next_out=K,k.avail_out=P,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,x;k.adler=E.check=1,E.mode=ie;case ie:if(R===_||R===g)break e;case se:if(E.last){B>>>=Z&7,Z-=Z&7,E.mode=Pe;break}for(;Z<3;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}switch(E.last=B&1,B>>>=1,Z-=1,B&3){case 0:E.mode=ue;break;case 1:if(Ue(E),E.mode=we,R===g){B>>>=2,Z-=2;break e}break;case 2:E.mode=j;break;case 3:k.msg="invalid block type",E.mode=Be}B>>>=2,Z-=2;break;case ue:for(B>>>=Z&7,Z-=Z&7;Z<32;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if((B&65535)!==(B>>>16^65535)){k.msg="invalid stored block lengths",E.mode=Be;break}if(E.length=B&65535,B=0,Z=0,E.mode=X,R===g)break e;case X:E.mode=he;case he:if(Ce=E.length,Ce){if(Ce>$&&(Ce=$),Ce>P&&(Ce=P),Ce===0)break e;a.arraySet(pe,W,v,Ce,K),$-=Ce,v+=Ce,P-=Ce,K+=Ce,E.length-=Ce;break}E.mode=ie;break;case j:for(;Z<14;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(E.nlen=(B&31)+257,B>>>=5,Z-=5,E.ndist=(B&31)+1,B>>>=5,Z-=5,E.ncode=(B&15)+4,B>>>=4,Z-=4,E.nlen>286||E.ndist>30){k.msg="too many length or distance symbols",E.mode=Be;break}E.have=0,E.mode=ce;case ce:for(;E.have<E.ncode;){for(;Z<3;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.lens[Re[E.have++]]=B&7,B>>>=3,Z-=3}for(;E.have<19;)E.lens[Re[E.have++]]=0;if(E.lencode=E.lendyn,E.lenbits=7,re={bits:E.lenbits},q=f(u,E.lens,0,19,E.lencode,0,E.work,re),E.lenbits=re.bits,q){k.msg="invalid code lengths set",E.mode=Be;break}E.have=0,E.mode=xe;case xe:for(;E.have<E.nlen+E.ndist;){for(;ot=E.lencode[B&(1<<E.lenbits)-1],Qe=ot>>>24,ct=ot>>>16&255,mt=ot&65535,!(Qe<=Z);){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(mt<16)B>>>=Qe,Z-=Qe,E.lens[E.have++]=mt;else{if(mt===16){for(ne=Qe+2;Z<ne;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(B>>>=Qe,Z-=Qe,E.have===0){k.msg="invalid bit length repeat",E.mode=Be;break}D=E.lens[E.have-1],Ce=3+(B&3),B>>>=2,Z-=2}else if(mt===17){for(ne=Qe+3;Z<ne;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}B>>>=Qe,Z-=Qe,D=0,Ce=3+(B&7),B>>>=3,Z-=3}else{for(ne=Qe+7;Z<ne;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}B>>>=Qe,Z-=Qe,D=0,Ce=11+(B&127),B>>>=7,Z-=7}if(E.have+Ce>E.nlen+E.ndist){k.msg="invalid bit length repeat",E.mode=Be;break}for(;Ce--;)E.lens[E.have++]=D}}if(E.mode===Be)break;if(E.lens[256]===0){k.msg="invalid code -- missing end-of-block",E.mode=Be;break}if(E.lenbits=9,re={bits:E.lenbits},q=f(c,E.lens,0,E.nlen,E.lencode,0,E.work,re),E.lenbits=re.bits,q){k.msg="invalid literal/lengths set",E.mode=Be;break}if(E.distbits=6,E.distcode=E.distdyn,re={bits:E.distbits},q=f(h,E.lens,E.nlen,E.ndist,E.distcode,0,E.work,re),E.distbits=re.bits,q){k.msg="invalid distances set",E.mode=Be;break}if(E.mode=we,R===g)break e;case we:E.mode=ve;case ve:if($>=6&&P>=258){k.next_out=K,k.avail_out=P,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,o(k,be),K=k.next_out,pe=k.output,P=k.avail_out,v=k.next_in,W=k.input,$=k.avail_in,B=E.hold,Z=E.bits,E.mode===ie&&(E.back=-1);break}for(E.back=0;ot=E.lencode[B&(1<<E.lenbits)-1],Qe=ot>>>24,ct=ot>>>16&255,mt=ot&65535,!(Qe<=Z);){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(ct&&!(ct&240)){for(Tt=Qe,qn=ct,Kn=mt;ot=E.lencode[Kn+((B&(1<<Tt+qn)-1)>>Tt)],Qe=ot>>>24,ct=ot>>>16&255,mt=ot&65535,!(Tt+Qe<=Z);){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}B>>>=Tt,Z-=Tt,E.back+=Tt}if(B>>>=Qe,Z-=Qe,E.back+=Qe,E.length=mt,ct===0){E.mode=He;break}if(ct&32){E.back=-1,E.mode=ie;break}if(ct&64){k.msg="invalid literal/length code",E.mode=Be;break}E.extra=ct&15,E.mode=Se;case Se:if(E.extra){for(ne=E.extra;Z<ne;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.length+=B&(1<<E.extra)-1,B>>>=E.extra,Z-=E.extra,E.back+=E.extra}E.was=E.length,E.mode=ze;case ze:for(;ot=E.distcode[B&(1<<E.distbits)-1],Qe=ot>>>24,ct=ot>>>16&255,mt=ot&65535,!(Qe<=Z);){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(!(ct&240)){for(Tt=Qe,qn=ct,Kn=mt;ot=E.distcode[Kn+((B&(1<<Tt+qn)-1)>>Tt)],Qe=ot>>>24,ct=ot>>>16&255,mt=ot&65535,!(Tt+Qe<=Z);){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}B>>>=Tt,Z-=Tt,E.back+=Tt}if(B>>>=Qe,Z-=Qe,E.back+=Qe,ct&64){k.msg="invalid distance code",E.mode=Be;break}E.offset=mt,E.extra=ct&15,E.mode=Ae;case Ae:if(E.extra){for(ne=E.extra;Z<ne;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}E.offset+=B&(1<<E.extra)-1,B>>>=E.extra,Z-=E.extra,E.back+=E.extra}if(E.offset>E.dmax){k.msg="invalid distance too far back",E.mode=Be;break}E.mode=Y;case Y:if(P===0)break e;if(Ce=be-P,E.offset>Ce){if(Ce=E.offset-Ce,Ce>E.whave&&E.sane){k.msg="invalid distance too far back",E.mode=Be;break}Ce>E.wnext?(Ce-=E.wnext,it=E.wsize-Ce):it=E.wnext-Ce,Ce>E.length&&(Ce=E.length),Ut=E.window}else Ut=pe,it=K-E.offset,Ce=E.length;Ce>P&&(Ce=P),P-=Ce,E.length-=Ce;do pe[K++]=Ut[it++];while(--Ce);E.length===0&&(E.mode=ve);break;case He:if(P===0)break e;pe[K++]=E.length,P--,E.mode=ve;break;case Pe:if(E.wrap){for(;Z<32;){if($===0)break e;$--,B|=W[v++]<<Z,Z+=8}if(be-=P,k.total_out+=be,E.total+=be,be&&(k.adler=E.check=E.flags?s(E.check,pe,be,K-be):l(E.check,pe,be,K-be)),be=P,(E.flags?B:_e(B))!==E.check){k.msg="incorrect data check",E.mode=Be;break}B=0,Z=0}E.mode=Oe;case Oe:if(E.wrap&&E.flags){for(;Z<32;){if($===0)break e;$--,B+=W[v++]<<Z,Z+=8}if(B!==(E.total&4294967295)){k.msg="incorrect length check",E.mode=Be;break}B=0,Z=0}E.mode=Le;case Le:q=m;break e;case Be:q=T;break e;case Ne:return w;case I:default:return y}return k.next_out=K,k.avail_out=P,k.next_in=v,k.avail_in=$,E.hold=B,E.bits=Z,(E.wsize||be!==k.avail_out&&E.mode<Be&&(E.mode<Pe||R!==p))&&me(k,k.output,k.next_out,be-k.avail_out),Te-=k.avail_in,be-=k.avail_out,k.total_in+=Te,k.total_out+=be,E.total+=be,E.wrap&&be&&(k.adler=E.check=E.flags?s(E.check,pe,be,k.next_out-be):l(E.check,pe,be,k.next_out-be)),k.data_type=E.bits+(E.last?64:0)+(E.mode===ie?128:0)+(E.mode===we||E.mode===X?256:0),(Te===0&&be===0||R===p)&&q===d&&(q=b),q}function te(k){if(!k||!k.state)return y;var R=k.state;return R.window&&(R.window=null),k.state=null,d}function le(k,R){var E;return!k||!k.state||(E=k.state,!(E.wrap&2))?y:(E.head=R,R.done=!1,d)}function ge(k,R){var E=R.length,W,pe,v;return!k||!k.state||(W=k.state,W.wrap!==0&&W.mode!==V)?y:W.mode===V&&(pe=1,pe=l(pe,R,E,0),pe!==W.check)?T:(v=me(k,R,E,E),v?(W.mode=Ne,w):(W.havedict=1,d))}r.inflateReset=Ee,r.inflateReset2=Fe,r.inflateResetKeep=ye,r.inflateInit=de,r.inflateInit2=Ge,r.inflate=A,r.inflateEnd=te,r.inflateGetHeader=le,r.inflateSetDictionary=ge,r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var a=t("../utils/common"),l=15,s=852,o=592,f=0,u=1,c=2,h=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],p=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],_=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(m,x,y,T,w,b,S,U){var O=U.bits,M=0,C=0,N=0,G=0,F=0,H=0,z=0,Q=0,V=0,ie=0,se,ue,X,he,j,ce=null,xe=0,we,ve=new a.Buf16(l+1),Se=new a.Buf16(l+1),ze=null,Ae=0,Y,He,Pe;for(M=0;M<=l;M++)ve[M]=0;for(C=0;C<T;C++)ve[x[y+C]]++;for(F=O,G=l;G>=1&&ve[G]===0;G--);if(F>G&&(F=G),G===0)return w[b++]=1<<24|64<<16|0,w[b++]=1<<24|64<<16|0,U.bits=1,0;for(N=1;N<G&&ve[N]===0;N++);for(F<N&&(F=N),Q=1,M=1;M<=l;M++)if(Q<<=1,Q-=ve[M],Q<0)return-1;if(Q>0&&(m===f||G!==1))return-1;for(Se[1]=0,M=1;M<l;M++)Se[M+1]=Se[M]+ve[M];for(C=0;C<T;C++)x[y+C]!==0&&(S[Se[x[y+C]]++]=C);if(m===f?(ce=ze=S,we=19):m===u?(ce=h,xe-=257,ze=p,Ae-=257,we=256):(ce=_,ze=g,we=-1),ie=0,C=0,M=N,j=b,H=F,z=0,X=-1,V=1<<F,he=V-1,m===u&&V>s||m===c&&V>o)return 1;for(;;){Y=M-z,S[C]<we?(He=0,Pe=S[C]):S[C]>we?(He=ze[Ae+S[C]],Pe=ce[xe+S[C]]):(He=32+64,Pe=0),se=1<<M-z,ue=1<<H,N=ue;do ue-=se,w[j+(ie>>z)+ue]=Y<<24|He<<16|Pe|0;while(ue!==0);for(se=1<<M-1;ie&se;)se>>=1;if(se!==0?(ie&=se-1,ie+=se):ie=0,C++,--ve[M]===0){if(M===G)break;M=x[y+S[C]]}if(M>F&&(ie&he)!==X){for(z===0&&(z=F),j+=N,H=M-z,Q=1<<H;H+z<G&&(Q-=ve[H+z],!(Q<=0));)H++,Q<<=1;if(V+=1<<H,m===u&&V>s||m===c&&V>o)return 1;X=ie&he,w[X]=F<<24|H<<16|j-b|0}}return ie!==0&&(w[j+ie]=M-z<<24|64<<16|0),U.bits=F,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var a=t("../utils/common"),l=4,s=0,o=1,f=2;function u(A){for(var te=A.length;--te>=0;)A[te]=0}var c=0,h=1,p=2,_=3,g=258,d=29,m=256,x=m+1+d,y=30,T=19,w=2*x+1,b=15,S=16,U=7,O=256,M=16,C=17,N=18,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],H=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=512,V=new Array((x+2)*2);u(V);var ie=new Array(y*2);u(ie);var se=new Array(Q);u(se);var ue=new Array(g-_+1);u(ue);var X=new Array(d);u(X);var he=new Array(y);u(he);function j(A,te,le,ge,k){this.static_tree=A,this.extra_bits=te,this.extra_base=le,this.elems=ge,this.max_length=k,this.has_stree=A&&A.length}var ce,xe,we;function ve(A,te){this.dyn_tree=A,this.max_code=0,this.stat_desc=te}function Se(A){return A<256?se[A]:se[256+(A>>>7)]}function ze(A,te){A.pending_buf[A.pending++]=te&255,A.pending_buf[A.pending++]=te>>>8&255}function Ae(A,te,le){A.bi_valid>S-le?(A.bi_buf|=te<<A.bi_valid&65535,ze(A,A.bi_buf),A.bi_buf=te>>S-A.bi_valid,A.bi_valid+=le-S):(A.bi_buf|=te<<A.bi_valid&65535,A.bi_valid+=le)}function Y(A,te,le){Ae(A,le[te*2],le[te*2+1])}function He(A,te){var le=0;do le|=A&1,A>>>=1,le<<=1;while(--te>0);return le>>>1}function Pe(A){A.bi_valid===16?(ze(A,A.bi_buf),A.bi_buf=0,A.bi_valid=0):A.bi_valid>=8&&(A.pending_buf[A.pending++]=A.bi_buf&255,A.bi_buf>>=8,A.bi_valid-=8)}function Oe(A,te){var le=te.dyn_tree,ge=te.max_code,k=te.stat_desc.static_tree,R=te.stat_desc.has_stree,E=te.stat_desc.extra_bits,W=te.stat_desc.extra_base,pe=te.stat_desc.max_length,v,K,$,P,B,Z,Te=0;for(P=0;P<=b;P++)A.bl_count[P]=0;for(le[A.heap[A.heap_max]*2+1]=0,v=A.heap_max+1;v<w;v++)K=A.heap[v],P=le[le[K*2+1]*2+1]+1,P>pe&&(P=pe,Te++),le[K*2+1]=P,!(K>ge)&&(A.bl_count[P]++,B=0,K>=W&&(B=E[K-W]),Z=le[K*2],A.opt_len+=Z*(P+B),R&&(A.static_len+=Z*(k[K*2+1]+B)));if(Te!==0){do{for(P=pe-1;A.bl_count[P]===0;)P--;A.bl_count[P]--,A.bl_count[P+1]+=2,A.bl_count[pe]--,Te-=2}while(Te>0);for(P=pe;P!==0;P--)for(K=A.bl_count[P];K!==0;)$=A.heap[--v],!($>ge)&&(le[$*2+1]!==P&&(A.opt_len+=(P-le[$*2+1])*le[$*2],le[$*2+1]=P),K--)}}function Le(A,te,le){var ge=new Array(b+1),k=0,R,E;for(R=1;R<=b;R++)ge[R]=k=k+le[R-1]<<1;for(E=0;E<=te;E++){var W=A[E*2+1];W!==0&&(A[E*2]=He(ge[W]++,W))}}function Be(){var A,te,le,ge,k,R=new Array(b+1);for(le=0,ge=0;ge<d-1;ge++)for(X[ge]=le,A=0;A<1<<G[ge];A++)ue[le++]=ge;for(ue[le-1]=ge,k=0,ge=0;ge<16;ge++)for(he[ge]=k,A=0;A<1<<F[ge];A++)se[k++]=ge;for(k>>=7;ge<y;ge++)for(he[ge]=k<<7,A=0;A<1<<F[ge]-7;A++)se[256+k++]=ge;for(te=0;te<=b;te++)R[te]=0;for(A=0;A<=143;)V[A*2+1]=8,A++,R[8]++;for(;A<=255;)V[A*2+1]=9,A++,R[9]++;for(;A<=279;)V[A*2+1]=7,A++,R[7]++;for(;A<=287;)V[A*2+1]=8,A++,R[8]++;for(Le(V,x+1,R),A=0;A<y;A++)ie[A*2+1]=5,ie[A*2]=He(A,5);ce=new j(V,G,m+1,x,b),xe=new j(ie,F,0,y,b),we=new j(new Array(0),H,0,T,U)}function Ne(A){var te;for(te=0;te<x;te++)A.dyn_ltree[te*2]=0;for(te=0;te<y;te++)A.dyn_dtree[te*2]=0;for(te=0;te<T;te++)A.bl_tree[te*2]=0;A.dyn_ltree[O*2]=1,A.opt_len=A.static_len=0,A.last_lit=A.matches=0}function I(A){A.bi_valid>8?ze(A,A.bi_buf):A.bi_valid>0&&(A.pending_buf[A.pending++]=A.bi_buf),A.bi_buf=0,A.bi_valid=0}function L(A,te,le,ge){I(A),ge&&(ze(A,le),ze(A,~le)),a.arraySet(A.pending_buf,A.window,te,le,A.pending),A.pending+=le}function J(A,te,le,ge){var k=te*2,R=le*2;return A[k]<A[R]||A[k]===A[R]&&ge[te]<=ge[le]}function fe(A,te,le){for(var ge=A.heap[le],k=le<<1;k<=A.heap_len&&(k<A.heap_len&&J(te,A.heap[k+1],A.heap[k],A.depth)&&k++,!J(te,ge,A.heap[k],A.depth));)A.heap[le]=A.heap[k],le=k,k<<=1;A.heap[le]=ge}function oe(A,te,le){var ge,k,R=0,E,W;if(A.last_lit!==0)do ge=A.pending_buf[A.d_buf+R*2]<<8|A.pending_buf[A.d_buf+R*2+1],k=A.pending_buf[A.l_buf+R],R++,ge===0?Y(A,k,te):(E=ue[k],Y(A,E+m+1,te),W=G[E],W!==0&&(k-=X[E],Ae(A,k,W)),ge--,E=Se(ge),Y(A,E,le),W=F[E],W!==0&&(ge-=he[E],Ae(A,ge,W)));while(R<A.last_lit);Y(A,O,te)}function _e(A,te){var le=te.dyn_tree,ge=te.stat_desc.static_tree,k=te.stat_desc.has_stree,R=te.stat_desc.elems,E,W,pe=-1,v;for(A.heap_len=0,A.heap_max=w,E=0;E<R;E++)le[E*2]!==0?(A.heap[++A.heap_len]=pe=E,A.depth[E]=0):le[E*2+1]=0;for(;A.heap_len<2;)v=A.heap[++A.heap_len]=pe<2?++pe:0,le[v*2]=1,A.depth[v]=0,A.opt_len--,k&&(A.static_len-=ge[v*2+1]);for(te.max_code=pe,E=A.heap_len>>1;E>=1;E--)fe(A,le,E);v=R;do E=A.heap[1],A.heap[1]=A.heap[A.heap_len--],fe(A,le,1),W=A.heap[1],A.heap[--A.heap_max]=E,A.heap[--A.heap_max]=W,le[v*2]=le[E*2]+le[W*2],A.depth[v]=(A.depth[E]>=A.depth[W]?A.depth[E]:A.depth[W])+1,le[E*2+1]=le[W*2+1]=v,A.heap[1]=v++,fe(A,le,1);while(A.heap_len>=2);A.heap[--A.heap_max]=A.heap[1],Oe(A,te),Le(le,pe,A.bl_count)}function De(A,te,le){var ge,k=-1,R,E=te[0*2+1],W=0,pe=7,v=4;for(E===0&&(pe=138,v=3),te[(le+1)*2+1]=65535,ge=0;ge<=le;ge++)R=E,E=te[(ge+1)*2+1],!(++W<pe&&R===E)&&(W<v?A.bl_tree[R*2]+=W:R!==0?(R!==k&&A.bl_tree[R*2]++,A.bl_tree[M*2]++):W<=10?A.bl_tree[C*2]++:A.bl_tree[N*2]++,W=0,k=R,E===0?(pe=138,v=3):R===E?(pe=6,v=3):(pe=7,v=4))}function ye(A,te,le){var ge,k=-1,R,E=te[0*2+1],W=0,pe=7,v=4;for(E===0&&(pe=138,v=3),ge=0;ge<=le;ge++)if(R=E,E=te[(ge+1)*2+1],!(++W<pe&&R===E)){if(W<v)do Y(A,R,A.bl_tree);while(--W!==0);else R!==0?(R!==k&&(Y(A,R,A.bl_tree),W--),Y(A,M,A.bl_tree),Ae(A,W-3,2)):W<=10?(Y(A,C,A.bl_tree),Ae(A,W-3,3)):(Y(A,N,A.bl_tree),Ae(A,W-11,7));W=0,k=R,E===0?(pe=138,v=3):R===E?(pe=6,v=3):(pe=7,v=4)}}function Ee(A){var te;for(De(A,A.dyn_ltree,A.l_desc.max_code),De(A,A.dyn_dtree,A.d_desc.max_code),_e(A,A.bl_desc),te=T-1;te>=3&&A.bl_tree[z[te]*2+1]===0;te--);return A.opt_len+=3*(te+1)+5+5+4,te}function Fe(A,te,le,ge){var k;for(Ae(A,te-257,5),Ae(A,le-1,5),Ae(A,ge-4,4),k=0;k<ge;k++)Ae(A,A.bl_tree[z[k]*2+1],3);ye(A,A.dyn_ltree,te-1),ye(A,A.dyn_dtree,le-1)}function Ge(A){var te=4093624447,le;for(le=0;le<=31;le++,te>>>=1)if(te&1&&A.dyn_ltree[le*2]!==0)return s;if(A.dyn_ltree[9*2]!==0||A.dyn_ltree[10*2]!==0||A.dyn_ltree[13*2]!==0)return o;for(le=32;le<m;le++)if(A.dyn_ltree[le*2]!==0)return o;return s}var de=!1;function Xe(A){de||(Be(),de=!0),A.l_desc=new ve(A.dyn_ltree,ce),A.d_desc=new ve(A.dyn_dtree,xe),A.bl_desc=new ve(A.bl_tree,we),A.bi_buf=0,A.bi_valid=0,Ne(A)}function Ve(A,te,le,ge){Ae(A,(c<<1)+(ge?1:0),3),L(A,te,le,!0)}function Ie(A){Ae(A,h<<1,3),Y(A,O,V),Pe(A)}function Ue(A,te,le,ge){var k,R,E=0;A.level>0?(A.strm.data_type===f&&(A.strm.data_type=Ge(A)),_e(A,A.l_desc),_e(A,A.d_desc),E=Ee(A),k=A.opt_len+3+7>>>3,R=A.static_len+3+7>>>3,R<=k&&(k=R)):k=R=le+5,le+4<=k&&te!==-1?Ve(A,te,le,ge):A.strategy===l||R===k?(Ae(A,(h<<1)+(ge?1:0),3),oe(A,V,ie)):(Ae(A,(p<<1)+(ge?1:0),3),Fe(A,A.l_desc.max_code+1,A.d_desc.max_code+1,E+1),oe(A,A.dyn_ltree,A.dyn_dtree)),Ne(A),ge&&I(A)}function me(A,te,le){return A.pending_buf[A.d_buf+A.last_lit*2]=te>>>8&255,A.pending_buf[A.d_buf+A.last_lit*2+1]=te&255,A.pending_buf[A.l_buf+A.last_lit]=le&255,A.last_lit++,te===0?A.dyn_ltree[le*2]++:(A.matches++,te--,A.dyn_ltree[(ue[le]+m+1)*2]++,A.dyn_dtree[Se(te)*2]++),A.last_lit===A.lit_bufsize-1}r._tr_init=Xe,r._tr_stored_block=Ve,r._tr_flush_block=Ue,r._tr_tally=me,r._tr_align=Ie},{"../utils/common":41}],53:[function(t,n,r){function a(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}n.exports=a},{}],54:[function(t,n,r){(function(a){(function(l,s){if(l.setImmediate)return;var o=1,f={},u=!1,c=l.document,h;function p(U){typeof U!="function"&&(U=new Function(""+U));for(var O=new Array(arguments.length-1),M=0;M<O.length;M++)O[M]=arguments[M+1];var C={callback:U,args:O};return f[o]=C,h(o),o++}function _(U){delete f[U]}function g(U){var O=U.callback,M=U.args;switch(M.length){case 0:O();break;case 1:O(M[0]);break;case 2:O(M[0],M[1]);break;case 3:O(M[0],M[1],M[2]);break;default:O.apply(s,M);break}}function d(U){if(u)setTimeout(d,0,U);else{var O=f[U];if(O){u=!0;try{g(O)}finally{_(U),u=!1}}}}function m(){h=function(U){process.nextTick(function(){d(U)})}}function x(){if(l.postMessage&&!l.importScripts){var U=!0,O=l.onmessage;return l.onmessage=function(){U=!1},l.postMessage("","*"),l.onmessage=O,U}}function y(){var U="setImmediate$"+Math.random()+"$",O=function(M){M.source===l&&typeof M.data=="string"&&M.data.indexOf(U)===0&&d(+M.data.slice(U.length))};l.addEventListener?l.addEventListener("message",O,!1):l.attachEvent("onmessage",O),h=function(M){l.postMessage(U+M,"*")}}function T(){var U=new MessageChannel;U.port1.onmessage=function(O){var M=O.data;d(M)},h=function(O){U.port2.postMessage(O)}}function w(){var U=c.documentElement;h=function(O){var M=c.createElement("script");M.onreadystatechange=function(){d(O),M.onreadystatechange=null,U.removeChild(M),M=null},U.appendChild(M)}}function b(){h=function(U){setTimeout(d,0,U)}}var S=Object.getPrototypeOf&&Object.getPrototypeOf(l);S=S&&S.setTimeout?S:l,{}.toString.call(l.process)==="[object process]"?m():x()?y():l.MessageChannel?T():c&&"onreadystatechange"in c.createElement("script")?w():b(),S.setImmediate=p,S.clearImmediate=_})(typeof self>"u"?typeof a>"u"?this:a:self)}).call(this,typeof tn<"u"?tn:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(yc);var P_=yc.exports;const jo=R_(P_);var bc={exports:{}};(function(i,e){(function(t,n){n()})(tn,function(){function t(f,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}function n(f,u,c){var h=new XMLHttpRequest;h.open("GET",f),h.responseType="blob",h.onload=function(){o(h.response,u,c)},h.onerror=function(){console.error("could not download file")},h.send()}function r(f){var u=new XMLHttpRequest;u.open("HEAD",f,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(u)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof tn=="object"&&tn.global===tn?tn:void 0,s=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),o=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(f,u,c){var h=l.URL||l.webkitURL,p=document.createElement("a");u=u||f.name||"download",p.download=u,p.rel="noopener",typeof f=="string"?(p.href=f,p.origin===location.origin?a(p):r(p.href)?n(f,u,c):a(p,p.target="_blank")):(p.href=h.createObjectURL(f),setTimeout(function(){h.revokeObjectURL(p.href)},4e4),setTimeout(function(){a(p)},0))}:"msSaveOrOpenBlob"in navigator?function(f,u,c){if(u=u||f.name||"download",typeof f!="string")navigator.msSaveOrOpenBlob(t(f,c),u);else if(r(f))n(f,u,c);else{var h=document.createElement("a");h.href=f,h.target="_blank",setTimeout(function(){a(h)})}}:function(f,u,c,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof f=="string")return n(f,u,c);var p=f.type==="application/octet-stream",_=/constructor/i.test(l.HTMLElement)||l.safari,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||p&&_||s)&&typeof FileReader<"u"){var d=new FileReader;d.onloadend=function(){var y=d.result;y=g?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=y:location=y,h=null},d.readAsDataURL(f)}else{var m=l.URL||l.webkitURL,x=m.createObjectURL(f);h?h.location=x:location.href=x,h=null,setTimeout(function(){m.revokeObjectURL(x)},4e4)}});l.saveAs=o.saveAs=o,i.exports=o})})(bc);var L_=bc.exports;const D_={es:{btnOpenLabel:"Abrir",btnSaveLabel:"Guardar",btnAddPage:"Nueva página",btnStartRecordingLabel:"Grabar",btnDeletePageLabel:"Quitar página",btnStopRecordingLabel:"Finalizar grabación",btnNewLabel:"Nuevo libro",btnCloseLabel:"Salir",controls:`
        <b><u>Controles</u></b><br/>
        Utiliza el <b>botón de scroll del ratón</b> para hacer zoom.<br/>
        Presiona <b>Barra Espaciadora</b> para reestablecer el zoom.<br/>
        Presiona la tecla <b>ENTER</b> para Iniciar y/o Detener la grabación.
        `,emptyZipError:"El zip no contiene ninguna imagen .png",setToBlank:"Poner en blanco",nothingToSave:"No hay nada que guardar. Agregá algunas páginas!",deletePrompt:"¿Quitar la página seleccionada?",setBlankPrompt:"Poner página en blanco? (Se quitará la textura de la página)",invalidZipFile:"El archivo zip que cargaste no es válido (no contiene un flipbook)",missingPageError:`PÁGINA ROTA: 

Una página hace referencia a una imagen que no está en el zip: Página [$pag] Imagen [$img]

Se utilizará una imagen en blanco.`,setImageIntoBlank:"Cargar imagen a esta página",btnAddPageAFTER:"Agregar página nueva luego de la página actual",btnAddPageBEFORE:"Agregar página nueva adelante de la página actual",btnSeeInstructions:"Ver instrucciones"},en:{btnOpenLabel:"Open",btnSaveLabel:"Save",btnAddPage:"New page",btnStartRecordingLabel:"Start Recording",btnDeletePageLabel:"Remove page",btnStopRecordingLabel:"End Recording",btnNewLabel:"New Book",btnCloseLabel:"Exit",controls:`
        <b><u>Controls</u></b><br/>
        Use the <b>mouse's wheel</b> to zoom.<br/>
        Press <b>Space bar</b> to restore zoom.<br/>
        Press <b>ENTER</b> to start or stop the recording.
        `,emptyZipError:"The zip has no .png image file",setToBlank:"Set to blank page",nothingToSave:"Nothing to save... try adding some pages!",deletePrompt:"Delete currently selected page?",setBlankPrompt:"Turn into a blank page (texture will be removed)",invalidZipFile:"The zip you selected doesn't contain a flipbook in it.",missingPageError:`MISSING PAGE!

A page is referencing an image that is not in the zip: Page [$pag] Image [$img]

A blank page will be used.`,setImageIntoBlank:"Set image for this blank page",btnAddPageAFTER:"Add a new page AFTER the current page",btnAddPageBEFORE:"Add a new page BEFORE the current page",btnSeeInstructions:"See instructions"}},_t=D_[navigator.language.toLowerCase().includes("es")?"es":"en"];var U_=0;function Ze(i,e,t,n,r,a){var l,s,o={};for(s in e)s=="ref"?l=e[s]:o[s]=e[s];var f={type:i,props:o,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--U_,__i:-1,__u:0,__source:r,__self:a};if(typeof i=="function"&&(l=i.defaultProps))for(s in l)o[s]===void 0&&(o[s]=l[s]);return Ye.vnode&&Ye.vnode(f),f}const Yo="1.0.0";class Ta{constructor(e,t){this.blob=e,this.fileName=t,this.url=URL.createObjectURL(e)}}const yr={},Zo={},I_=`
<br/><br/><b><u>WEBM --&gt; MP4</u></b><br/>
${["https://cloudconvert.com/webm-to-mp4","https://www.freeconvert.com/webm-to-mp4","https://convertio.co/es/webm-mp4/"].map(i=>`<a href="${i}" target="_blank">${i}</a>`).join("<br/>")}
`,O_="flipbook-config.json",qo=".png, .jpg, .jpeg, .gif",N_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";function F_(){const[i,e]=di([]),[t,n]=di([]),[r,a]=di(-1),[l,s]=di(!1),[o,f]=di(!1),u=jr(null),c=jr(null),h=jr(null),p=r==-1,_=t.length!=i.length||t.some((C,N)=>i[N]!=C);_s(()=>(window.ccaptureDisplayListener=C=>{c.current&&(c.current.innerHTML=C)},()=>{window.ccaptureDisplayListener=null}),[]),_s(()=>{const C=N=>{var G;N.code==="Enter"&&((G=h.current)==null||G.click())};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)}),gs(()=>{if(!l)return;const C=()=>s(!1);return window.addEventListener("mouseup",C),()=>window.removeEventListener("mouseup",C)},[l]),gs(()=>{g();const C=i.filter(N=>N==null?void 0:N.fileName.endsWith(".gif"));C.length&&Promise.allSettled(C.map(N=>d(N))).then(N=>g())},[i]);const g=()=>{const C=i.map(G=>{const F=Zo[G.fileName];return F||(G==null?void 0:G.url)||""});C.length%2!=0&&C.push("");const N=new CustomEvent("on:pages",{detail:C});document.body.dispatchEvent(N)},d=C=>{var N;return yr[N=C.fileName]??(yr[N]=A_(C.url)),yr[C.fileName].then(G=>{Zo[C.fileName]=G})},m=(C=!1,N=0)=>{const G=document.createElement("input");G.type="file",G.multiple=!C,G.accept=qo,G.style.display="none",document.body.appendChild(G),G.addEventListener("change",F=>{const H=G.files;if(C){const z=H[0],Q=new Ta(z,z.name);N==0?i[r]=Q:i.splice(r+Math.max(0,N),0,Q)}else for(const z of H)i.push(new Ta(z,z.name));e([...i]),G.remove()}),G.addEventListener("cancel",F=>{G.remove(),i.length||T()}),G.click()},x=()=>{a(0),e([]),n([]),m()},y=async()=>{var F;if(!i.length){alert(_t.nothingToSave);return}const C=new jo,N=[];for(let H=0;H<i.length;H++)if(!i[H]||((F=i[H])==null?void 0:F.url)=="")N.push("");else{let z=`${H+1}.${i[H].fileName}`;C.file(z,i[H].blob),N.push(z)}C.file(O_,JSON.stringify({flipbookPages:N,version:Yo}));const G=await C.generateAsync({type:"blob"});L_.saveAs(G,"my-flipbook.zip")},T=()=>{a(-1),e([]),n([])},w=()=>{const C=document.createElement("input");C.type="file",C.multiple=!1,C.accept=".zip",C.style.display="none",document.body.appendChild(C),C.addEventListener("change",async N=>{C.remove();const G=C.files[0],F=new jo;await F.loadAsync(G);let H=[],z;try{await new Promise((V,ie)=>{let se=Promise.resolve(0);F.forEach((ue,X)=>{qo.indexOf(X.name.split(".").pop())>-1?se=se.then(()=>X.async("blob").then(he=>H.push(new Ta(he,X.name)))):X.name.endsWith(".json")&&(se=se.then(()=>X.async("text").then(he=>{z=JSON.parse(he)})))}),se.then(()=>{if(!z||!Array.isArray(z.flipbookPages)||z.version!=Yo){ie(_t.invalidZipFile);return}V(!0)})})}catch(V){alert(V.message??V);return}let Q=[];for(let V=0;V<z.flipbookPages.length;V++){const ie=z.flipbookPages[V];if(ie=="")Q.push(null);else{let se=H.find(ue=>ue.fileName==ie);se?Q.push(se):(alert(_t.missingPageError.replace("$pag",(V+1).toString()).replace("$img",ie)),Q.push(null))}}Q.length?(n([...Q]),e(Q),a(0)):alert(_t.emptyZipError)}),C.addEventListener("cancel",()=>C.remove()),C.click()},b=(C,N)=>{N.preventDefault(),a(C),s(!0);const G=new CustomEvent("book:goto",{detail:C});document.body.dispatchEvent(G)},S=(C,N)=>{if(C==r||!l)return;let G=i[C];i[C]=i[r],i[r]=G,e([...i]),a(C)},U=()=>{o?(f(!1),document.body.dispatchEvent(new Event("record:stop"))):(f(!0),document.body.dispatchEvent(new Event("record:start")))},O=C=>{C.preventDefault(),confirm(_t.deletePrompt)&&(r==i.length-1&&a(i.length-2),e(i.filter((N,G)=>G!=r)))},M=C=>{if(confirm(_t.setBlankPrompt)){let N=i.slice(0);N[r]=null,e(N)}};return Ze("header",{ref:u,className:o?"recording":"",children:[Ze("div",{class:"numbered-children thumbnails",children:i.map((C,N)=>Ze("div",{children:Ze("img",{onMouseOver:S.bind(null,N),onMouseDown:b.bind(null,N),src:(C==null?void 0:C.url)||N_,height:100,width:100,style:{touchAction:"pan-x",borderColor:N==r?"red":"transparent",animation:N==r?"pulseSelection 0.5s ease-in-out infinite":"none"}})},N))}),Ze("div",{class:"menu",children:[!p&&Ze("div",{className:"rightTopMenu",children:[Ze(B_,{}),Ze("a",{href:"#",onClick:()=>T(),class:"open",title:_t.btnCloseLabel,children:Ze("i",{class:"gg-close"})}),_&&Ze("a",{href:"#",onClick:()=>y(),class:"save",children:[Ze("i",{class:"gg-software-download"})," ",_t.btnSaveLabel]})]}),p&&Ze("div",{className:"centeredMenu",children:[Ze("a",{href:"#",onClick:()=>x(),children:[Ze("i",{class:"gg-file"})," ",_t.btnNewLabel]}),Ze("a",{href:"#",onClick:()=>w(),children:[Ze("i",{class:"gg-software-upload"}),"  ",_t.btnOpenLabel]})]}),i.length>0&&Ze(Hn,{children:Ze("a",{href:"#",class:"record-button",onClick:U,ref:h,children:[!o&&Ze(Hn,{children:[Ze("i",{class:"gg-record"}),"  ",_t.btnStartRecordingLabel]}),o&&Ze(Hn,{children:[Ze("i",{class:"gg-play-stop-o"}),"  ",_t.btnStopRecordingLabel," [",Ze("span",{ref:c}),"]"]})]})}),i.length>0&&r>-1&&Ze("div",{className:"contextualPageMenu",children:[Ze("a",{href:"#",class:"delete",onClick:O,title:_t.btnDeletePageLabel,children:[Ze("i",{class:"gg-trash"})," "]}),i[r]&&Ze("a",{href:"#",class:"setblank",onClick:M,title:_t.setToBlank,children:[Ze("i",{class:"gg-erase"})," "]}),Ze("a",{href:"#",class:"setImg",onClick:()=>m(!0),title:_t.setImageIntoBlank,children:[Ze("i",{class:"gg-image"})," "]}),Ze("a",{href:"#",onClick:()=>m(!0,1),title:_t.btnAddPageAFTER,children:[Ze("i",{class:"gg-file"})," ",Ze("i",{class:"gg-math-plus"})]}),Ze("a",{href:"#",onClick:()=>m(!0,-1),title:_t.btnAddPageBEFORE,children:[Ze("i",{class:"gg-math-plus"})," ",Ze("i",{class:"gg-file"})]})]})]})]})}const B_=()=>{const[i,e]=di(!1);return i?Ze("div",{class:"leyenda",children:[Ze("a",{href:"#",onClick:()=>e(!1),children:"[x] Cerrar"}),Ze("hr",{}),Ze("div",{dangerouslySetInnerHTML:{__html:_t.controls+I_}})]}):Ze("a",{href:"#",onClick:()=>e(!0),title:_t.btnSeeInstructions,children:Ze("i",{class:"gg-info"})})},k_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ci{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const z_=new $a(-1,1,1,-1,0,1);class G_ extends xn{constructor(){super(),this.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mn([0,2,0,0,2,0],2))}}const H_=new G_;class ns{constructor(e){this._mesh=new zt(H_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class V_ extends Ci{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Br.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ns(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ko extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let l,s;this.inverse?(l=0,s=1):(l=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class W_ extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class X_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new nt);this._width=n.width,this._height=n.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V_(k_),this.copyPass.material.blending=nn,this.clock=new Jl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),l.needsSwap){if(n){const s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Ko!==void 0&&(l instanceof Ko?n=!0:l instanceof W_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class j_ extends Ci{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),e.autoClear=r}}const Y_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Z_ extends Ci{constructor(){super();const e=Y_;this.uniforms=Br.clone(e.uniforms),this.material=new Bm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ns(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const q_={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class K_ extends Ci{constructor(e,t,n){super(),this.scene=e,this.camera=t;const r=n.focus!==void 0?n.focus:1,a=n.aperture!==void 0?n.aperture:.025,l=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new vn(1,1,{minFilter:Et,magFilter:Et,type:Yn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new ql,this.materialDepth.depthPacking=Al,this.materialDepth.blending=nn;const s=q_,o=Br.clone(s.uniforms);o.tDepth.value=this.renderTargetDepth.texture,o.focus.value=r,o.aspect.value=t.aspect,o.aperture.value=a,o.maxblur.value=l,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new Xt({defines:Object.assign({},s.defines),uniforms:o,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.uniforms=o,this.fsQuad=new ns(this.materialBokeh),this._oldClearColor=new rt}render(e,t,n){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=a}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}function $_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),a={},l={},s=i[0].morphTargetsRelative,o=new xn;let f=0;for(let u=0;u<i.length;++u){const c=i[u];let h=0;if(t!==(c.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in c.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(c.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(s!==c.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in c.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;l[p]===void 0&&(l[p]=[]),l[p].push(c.morphAttributes[p])}if(e){let p;if(t)p=c.index.count;else if(c.attributes.position!==void 0)p=c.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;o.addGroup(f,p,u),f+=p}}if(t){let u=0;const c=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let _=0;_<p.count;++_)c.push(p.getX(_)+u);u+=i[h].attributes.position.count}o.setIndex(c)}for(const u in a){const c=$o(a[u]);if(!c)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;o.setAttribute(u,c)}for(const u in l){const c=l[u][0].length;if(c===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[u]=[];for(let h=0;h<c;++h){const p=[];for(let g=0;g<l[u].length;++g)p.push(l[u][g][h]);const _=$o(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;o.morphAttributes[u].push(_)}}return o}function $o(i){let e,t,n,r=-1,a=0;for(let f=0;f<i.length;++f){const u=i[f];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}const l=new e(a),s=new Jt(l,t,n);let o=0;for(let f=0;f<i.length;++f){const u=i[f];if(u.isInterleavedBufferAttribute){const c=o/t;for(let h=0,p=u.count;h<p;h++)for(let _=0;_<t;_++){const g=u.getComponent(h,_);s.setComponent(h+c,_,g)}}else l.set(u.array,o);o+=u.count*t}return r!==void 0&&(s.gpuType=r),s}var Mc={exports:{}};/*! three.modifiers-v2.5.7 */(function(i,e){(function(t,n){i.exports=n()})(typeof self<"u"?self:tn,function(){return function(t){function n(a){if(r[a])return r[a].exports;var l=r[a]={i:a,l:!1,exports:{}};return t[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}var r={};return n.m=t,n.c=r,n.d=function(a,l,s){n.o(a,l)||Object.defineProperty(a,l,{configurable:!1,enumerable:!0,get:s})},n.n=function(a){var l=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(l,"a",l),l},n.o=function(a,l){return Object.prototype.hasOwnProperty.call(a,l)},n.p="",n(n.s=7)}([function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Modifier=void 0;var a=function(){function l(){}return l.prototype.setModifiable=function(s){this.mod=s},l.prototype.getVertices=function(){return this.mod.getVertices()},l.prototype.destroy=function(){this.mod=null},l}();n.Modifier=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector3=void 0;var a=function(){function l(s,o,f){s===void 0&&(s=0),o===void 0&&(o=0),f===void 0&&(f=0),this.x=s,this.y=o,this.z=f}return l.prototype.clone=function(){return new l(this.x,this.y,this.z)},l.prototype.equals=function(s){return this.x==s.x&&this.y==s.y&&this.z==s.z},l.prototype.zero=function(){this.x=this.y=this.z=0},l.prototype.negate=function(){return new l(-this.x,-this.y,-this.z)},l.prototype.add=function(s){return new l(this.x+s.x,this.y+s.y,this.z+s.z)},l.prototype.subtract=function(s){return new l(this.x-s.x,this.y-s.y,this.z-s.z)},l.prototype.multiplyScalar=function(s){return new l(this.x*s,this.y*s,this.z*s)},l.prototype.multiply=function(s){return new l(this.x*s.x,this.y*s.y,this.z*s.z)},l.prototype.divide=function(s){var o=1/s;return new l(this.x*o,this.y*o,this.z*o)},l.prototype.normalize=function(){var s=this.x*this.x+this.y*this.y+this.z*this.z;if(s>0){var o=1/Math.sqrt(s);this.x*=o,this.y*=o,this.z*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},set:function(s){this.normalize(),this.x*=s,this.y*=s,this.z*=s},enumerable:!1,configurable:!0}),l.prototype.fromBufferAttribute=function(s,o){return this.x=s.getX(o),this.y=s.getY(o),this.z=s.getZ(o),this},l.prototype.toString=function(){return"["+this.x+" , "+this.y+" , "+this.z+"]"},l.sum=function(s,o){return s.add(o)},l.dot=function(s,o){return s.x*o.x+s.y*o.y+s.z*o.z},l.cross=function(s,o){return new l(s.y*o.z-s.z*o.y,s.z*o.x-s.x*o.z,s.x*o.y-s.y*o.x)},l.distance=function(s,o){var f=s.x-o.x,u=s.y-o.y,c=s.z-o.z;return Math.sqrt(f*f+u*u+c*c)},l.ZERO=new l(0,0,0),l}();n.Vector3=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModConstant=void 0;var a=function(){function l(){}return l.NONE=0,l.X=1,l.Y=2,l.Z=4,l.LEFT=-1,l.RIGHT=1,l}();n.ModConstant=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMath=void 0;var a=function(){function l(){}return l.normalize=function(s,o,f){var u=o-s;return u==0?1:l.trim(0,1,(f-s)/o)},l.toRange=function(s,o,f){var u=o-s;return u==0?0:s+(o-s)*f},l.inInRange=function(s,o,f,u){return u===void 0&&(u=!1),u?f>=s&&f<=o:f>s&&f<o},l.sign=function(s,o){return o===void 0&&(o=0),s==0?o:s>0?1:-1},l.trim=function(s,o,f){return Math.min(o,Math.max(s,f))},l.wrap=function(s,o,f){return f<s?f+(o-s):f>=o?f-(o-s):f},l.degToRad=function(s){return s/180*Math.PI},l.radToDeg=function(s){return s/Math.PI*180},l.presicion=function(s,o){var f=Math.pow(10,o);return Math.round(s*f)/f},l.uceil=function(s){return s<0?Math.floor(s):Math.ceil(s)},l.mappedKey=function(s){var o=Math.pow(10,4);return Math.round(s.x*o)+"_"+Math.round(s.y*o)+"_"+Math.round(s.z*o)},l.PI=3.1415,l}();n.TMath=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix4=void 0;var a=function(){function l(s,o,f,u,c,h,p,_,g,d,m,x,y,T,w,b){s===void 0&&(s=1),o===void 0&&(o=0),f===void 0&&(f=0),u===void 0&&(u=0),c===void 0&&(c=0),h===void 0&&(h=1),p===void 0&&(p=0),_===void 0&&(_=0),g===void 0&&(g=0),d===void 0&&(d=0),m===void 0&&(m=1),x===void 0&&(x=0),y===void 0&&(y=0),T===void 0&&(T=0),w===void 0&&(w=0),b===void 0&&(b=1),this.n11=s,this.n12=o,this.n13=f,this.n14=u,this.n21=c,this.n22=h,this.n23=p,this.n24=_,this.n31=g,this.n32=d,this.n33=m,this.n34=x,this.n41=y,this.n42=T,this.n43=w,this.n44=b}return l.translationMatrix=function(s,o,f){var u=new l;return u.n14=s,u.n24=o,u.n34=f,u},l.scaleMatrix=function(s,o,f){var u=new l;return u.n11=s,u.n22=o,u.n33=f,u},l.rotationMatrix=function(s,o,f,u,c){c===void 0&&(c=null);var h;h=c||new l;var p=Math.cos(u),_=Math.sin(u),g=1-p,d=s*o*g,m=o*f*g,x=s*f*g,y=_*f,T=_*o,w=_*s;return h.n11=p+s*s*g,h.n12=-y+d,h.n13=T+x,h.n14=0,h.n21=y+d,h.n22=p+o*o*g,h.n23=-w+m,h.n24=0,h.n31=-T+x,h.n32=w+m,h.n33=p+f*f*g,h.n34=0,h},l.prototype.calculateMultiply=function(s,o){var f=s.n11,u=o.n11,c=s.n21,h=o.n21,p=s.n31,_=o.n31,g=s.n12,d=o.n12,m=s.n22,x=o.n22,y=s.n32,T=o.n32,w=s.n13,b=o.n13,S=s.n23,U=o.n23,O=s.n33,M=o.n33,C=s.n14,N=o.n14,G=s.n24,F=o.n24,H=s.n34,z=o.n34;this.n11=f*u+g*h+w*_,this.n12=f*d+g*x+w*T,this.n13=f*b+g*U+w*M,this.n14=f*N+g*F+w*z+C,this.n21=c*u+m*h+S*_,this.n22=c*d+m*x+S*T,this.n23=c*b+m*U+S*M,this.n24=c*N+m*F+S*z+G,this.n31=p*u+y*h+O*_,this.n32=p*d+y*x+O*T,this.n33=p*b+y*U+O*M,this.n34=p*N+y*F+O*z+H},l.multiply=function(s,o){var f=new l;return f.calculateMultiply(s,o),f},l.multiplyVector=function(s,o){var f=o.x,u=o.y,c=o.z;o.x=f*s.n11+u*s.n12+c*s.n13+s.n14,o.y=f*s.n21+u*s.n22+c*s.n23+s.n24,o.z=f*s.n31+u*s.n32+c*s.n33+s.n34},l}();n.Matrix4=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Vector2=void 0;var a=function(){function l(s,o){this.x=s,this.y=o}return l.prototype.clone=function(){return new l(this.x,this.y)},l.prototype.equals=function(s){return this.x==s.x&&this.y==s.y},l.prototype.zero=function(){this.x=this.y},l.prototype.negate=function(){return new l(-this.x,-this.y)},l.prototype.add=function(s){return new l(this.x+s.x,this.y+s.y)},l.prototype.subtract=function(s){return new l(this.x-s.x,this.y-s.y)},l.prototype.multiplyScalar=function(s){return new l(this.x*s,this.y*s)},l.prototype.multiply=function(s){return new l(this.x*s.x,this.y*s.y)},l.prototype.divide=function(s){var o=1/s;return new l(this.x*o,this.y*o)},l.prototype.normalize=function(){var s=this.x*this.x+this.y*this.y;if(s>0){var o=1/Math.sqrt(s);this.x*=o,this.y*=o}},Object.defineProperty(l.prototype,"magnitude",{get:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},set:function(s){this.normalize(),this.x*=s,this.y*=s},enumerable:!1,configurable:!0}),l.prototype.toString=function(){return"["+this.x+" , "+this.y+"]"},l.sum=function(s,o){return s.add(o)},l.dot=function(s,o){return s.x*o.x+s.y*o.y},l.distance=function(s,o){var f=s.x-o.x,u=s.y-o.y;return Math.sqrt(f*f+u*u)},l.ZERO=new l(0,0),l}();n.Vector2=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Range=void 0;var a=r(3),l=function(){function s(o,f){o===void 0&&(o=0),f===void 0&&(f=1),this._start=o,this._end=f}return Object.defineProperty(s.prototype,"start",{get:function(){return this._start},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"end",{get:function(){return this._end},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"size",{get:function(){return this._end-this._start},enumerable:!1,configurable:!0}),s.prototype.move=function(o){this._start+=o,this._end+=o},s.prototype.isIn=function(o){return o>=this._start&&o<=this._end},s.prototype.normalize=function(o){return a.TMath.normalize(this._start,this._end,o)},s.prototype.toRange=function(o){return a.TMath.toRange(this._start,this._end,o)},s.prototype.trim=function(o){return a.TMath.trim(this._start,this._end,o)},s.prototype.interpolate=function(o,f){return this.toRange(f.normalize(o))},s.prototype.toString=function(){return"["+this.start+" - "+this.end+"]"},s}();n.Range=l},function(t,n,r){t.exports=r(8)},function(t,n,r){var a=this&&this.__createBinding||(Object.create?function(s,o,f,u){u===void 0&&(u=f),Object.defineProperty(s,u,{enumerable:!0,get:function(){return o[f]}})}:function(s,o,f,u){u===void 0&&(u=f),s[u]=o[f]}),l=this&&this.__exportStar||function(s,o){for(var f in s)f==="default"||Object.prototype.hasOwnProperty.call(o,f)||a(o,s,f)};Object.defineProperty(n,"__esModule",{value:!0}),l(r(9),n),l(r(16),n),l(r(6),n),l(r(5),n),l(r(1),n),l(r(3),n),l(r(2),n),l(r(17),n),l(r(19),n),l(r(20),n),l(r(21),n),l(r(25),n),l(r(26),n),l(r(27),n),l(r(28),n),l(r(29),n),l(r(30),n),l(r(31),n)},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.ModifierStack=void 0;var a=r(10),l=function(){function s(o){this.baseMesh=new a.ThreeMesh,this.baseMesh.setMesh(o),this.baseMesh.analyzeGeometry(),this.stack=[]}return Object.defineProperty(s.prototype,"indexUpdate",{set:function(o){this.baseMesh.indexUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"boundUpdate",{set:function(o){this.baseMesh.boundUpdate=o},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"uvsAndColorUpdate",{set:function(o){this.baseMesh.uvsAndColorUpdate=o},enumerable:!1,configurable:!0}),s.prototype.addModifier=function(o){o.setModifiable(this.baseMesh),this.stack.push(o)},s.prototype.removeModifier=function(o){var f=this.stack.indexOf(o);f>-1&&this.stack.splice(f,1)},s.prototype.apply=function(){this.baseMesh.resetGeometry();for(var o=0;o<this.stack.length;o++)this.stack[o].apply();this.baseMesh.postApply()},s.prototype.collapse=function(){this.apply(),this.baseMesh.collapseGeometry(),this.stack.length=0},s.prototype.reset=function(){this.baseMesh.resetGeometry()},s.prototype.clear=function(){this.stack.length=0},s.prototype.destroy=function(){this.baseMesh.destroy();for(var o=0;o<this.stack.length;o++)this.stack[o].destroy();this.clear()},s}();n.ModifierStack=l},function(t,n,r){var a=this&&this.__extends||function(){var p=function(_,g){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,m){d.__proto__=m}||function(d,m){for(var x in m)Object.prototype.hasOwnProperty.call(m,x)&&(d[x]=m[x])})(_,g)};return function(_,g){function d(){this.constructor=_}if(typeof g!="function"&&g!==null)throw new TypeError("Class extends value "+String(g)+" is not a constructor or null");p(_,g),_.prototype=g===null?Object.create(g):(d.prototype=g.prototype,new d)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeMesh=void 0;var l=r(11),s=r(13),o=r(14),f=r(3),u=r(1),c=r(15),h=function(p){function _(){var g=p!==null&&p.apply(this,arguments)||this;return g.verticesMap=new c.TMap,g.uvsAndColorUpdate=!1,g}return a(_,p),_.prototype.setMesh=function(g){this.mesh=g,this.setVertices(),this.setFaces(),this.mergeVertices(),this.mergeFaces()},_.prototype.setVertices=function(){for(var g=this.getAttr("position"),d=0;d<g.count;d++){var m=new l.ThreeVertex,x=new u.Vector3().fromBufferAttribute(g,d);m.setVertex(x),this.vertices.push(m)}},_.prototype.setFaces=function(){var g=this.getAttr("index"),d=this.getAttr("position");if(g!==null)for(var m=0;m<g.count;m+=3){var x=new o.FaceProxy,y=g.getX(m),T=g.getX(m+1),w=g.getX(m+2),b=this.vertices[y],S=this.vertices[T],U=this.vertices[w];x.addVertices(b,S,U),this.faces.push(x)}else for(var m=0;m<d.count;m+=3){var x=new o.FaceProxy,y=m,T=m+1,w=m+2,b=this.vertices[y],S=this.vertices[T],U=this.vertices[w];x.addVertices(b,S,U),this.faces.push(x)}},_.prototype.mergeVertices=function(){for(var g=[],d=this.verticesMap,m=0;m<this.vertices.length;m++){var x=this.vertices[m],y=f.TMath.mappedKey(x);if(d.includeByValue(y)){var T=d.getToByValue(y);d.add(T,m,y)}else{var T=g.length;x.only=!0,g.push(x),d.add(T,m,y)}}this.vertices=g},_.prototype.mergeFaces=function(){for(var g=[],d=0,m=this.faces.length;d<m;d++){var x=this.faces[d],y=f.TMath.mappedKey(x.a),T=f.TMath.mappedKey(x.b),w=f.TMath.mappedKey(x.c),b=this.verticesMap.getToByValue(y),S=this.verticesMap.getToByValue(T),U=this.verticesMap.getToByValue(w);x.a=this.vertices[b],x.b=this.vertices[S],x.c=this.vertices[U];for(var O=[b,S,U],M=0;M<3;M++)if(O[M]===O[(M+1)%3]){g.push(d);break}}for(var d=g.length-1;d>=0;d--){var C=g[d];this.faces.splice(C,1)}},_.prototype.postApply=function(){this.updatePosition(),this.updateIndex(),this.computeBounding(),this.updateUvsAndColor()},_.prototype.updateUvsAndColor=function(){if(this.uvsAndColorUpdate){var g=this.getAttr("color");g&&(g.needsUpdate=!0);var d=this.getAttr("uv");d&&(d.needsUpdate=!0)}},_.prototype.computeBounding=function(){if(this.boundUpdate){var g=this.mesh.geometry;g.computeBoundingBox(),g.computeBoundingSphere()}},_.prototype.updatePosition=function(){var g,d,m,x,y,T=this.getAttr("position"),w=this.vertices.length;for(m=0;m<w;m++)for(d=this.vertices[m],g=this.verticesMap.getFromByTo(m),x=0;x<g.length;x++)y=g[x],T.setX(y,d.x),T.setY(y,d.y),T.setZ(y,d.z);T.needsUpdate=!0},_.prototype.updateIndex=function(){if(this.indexUpdate){var g=this.getAttr("index");g&&(g.needsUpdate=!0)}},_.prototype.getAttr=function(g){var d=this.mesh.geometry;return g==="index"?d.getIndex():d.getAttribute(g)},_.prototype.updateMeshPosition=function(g){this.mesh.position.x+=g.x,this.mesh.position.y+=g.y,this.mesh.position.z+=g.z},_.prototype.destroy=function(){p.prototype.destroy.call(this),this.verticesMap.destroy(),this.verticesMap=null,this.mesh=null},_}(s.MeshProxy);n.ThreeMesh=h},function(t,n,r){var a=this&&this.__extends||function(){var o=function(f,u){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,h){c.__proto__=h}||function(c,h){for(var p in h)Object.prototype.hasOwnProperty.call(h,p)&&(c[p]=h[p])})(f,u)};return function(f,u){function c(){this.constructor=f}if(typeof u!="function"&&u!==null)throw new TypeError("Class extends value "+String(u)+" is not a constructor or null");o(f,u),f.prototype=u===null?Object.create(u):(c.prototype=u.prototype,new c)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.ThreeVertex=void 0;var l=r(12),s=function(o){function f(){var u=o.call(this)||this;return u.only=!1,u}return a(f,o),f.prototype.setVertex=function(u){this.vertor=u,this.ox=this.vertor.x,this.oy=this.vertor.y,this.oz=this.vertor.z},Object.defineProperty(f.prototype,"x",{get:function(){return this.vertor.x},set:function(u){this.vertor.x=u},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"y",{get:function(){return this.vertor.y},set:function(u){this.vertor.y=u},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"z",{get:function(){return this.vertor.z},set:function(u){this.vertor.z=u},enumerable:!1,configurable:!0}),f.prototype.toString=function(){return o.prototype.toString.call(this)+" only:"+this.only},f}(l.VertexProxy);n.ThreeVertex=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VertexProxy=void 0;var a=r(1),l=r(2),s=function(){function o(){this.id=""}return o.prototype.setVertex=function(f){},o.prototype.setRatios=function(f,u,c){this._ratioX=f,this._ratioY=u,this._ratioZ=c},o.prototype.setOriginalPosition=function(f,u,c){this.ox=f,this.oy=u,this.oz=c},Object.defineProperty(o.prototype,"x",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"y",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"z",{get:function(){return 0},set:function(f){},enumerable:!1,configurable:!0}),o.prototype.getValue=function(f){switch(f){case l.ModConstant.X:return this.x;case l.ModConstant.Y:return this.y;case l.ModConstant.Z:return this.z}return 0},o.prototype.setValue=function(f,u){switch(f){case l.ModConstant.X:this.x=u;break;case l.ModConstant.Y:this.y=u;break;case l.ModConstant.Z:this.z=u}},Object.defineProperty(o.prototype,"ratioX",{get:function(){return this._ratioX},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioY",{get:function(){return this._ratioY},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioZ",{get:function(){return this._ratioZ},enumerable:!1,configurable:!0}),o.prototype.getRatio=function(f){switch(f){case l.ModConstant.X:return this._ratioX;case l.ModConstant.Y:return this._ratioY;case l.ModConstant.Z:return this._ratioZ}return-1},Object.defineProperty(o.prototype,"originalX",{get:function(){return this.ox},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalY",{get:function(){return this.oy},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"originalZ",{get:function(){return this.oz},enumerable:!1,configurable:!0}),o.prototype.getOriginalValue=function(f){switch(f){case l.ModConstant.X:return this.ox;case l.ModConstant.Y:return this.oy;case l.ModConstant.Z:return this.oz}return 0},o.prototype.reset=function(){this.x=this.ox,this.y=this.oy,this.z=this.oz},o.prototype.collapse=function(){this.ox=this.x,this.oy=this.y,this.oz=this.z},Object.defineProperty(o.prototype,"vector",{get:function(){return new a.Vector3(this.x,this.y,this.z)},set:function(f){this.x=f.x,this.y=f.y,this.z=f.z},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"ratioVector",{get:function(){return new a.Vector3(this.ratioX,this.ratioY,this.ratioZ)},enumerable:!1,configurable:!0}),o.prototype.toString=function(){return"Vertex id:"+this.id+" xyz:"+this.x+" "+this.y+" "+this.z},o}();n.VertexProxy=s},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.MeshProxy=void 0;var a=r(2),l=function(){function s(){this.boundUpdate=!1,this.indexUpdate=!1,this.uvsAndColorUpdate=!1,this.vertices=[],this.faces=[]}return s.prototype.setMesh=function(o){},s.prototype.updateMeshPosition=function(o){},s.prototype.getVertices=function(){return this.vertices},s.prototype.getFaces=function(){return this.faces},s.prototype.analyzeGeometry=function(){for(var o,f=this.getVertices().length,u=0;u<f;u++)o=this.getVertices()[u],u==0?(this._minX=this._maxX=o.x,this._minY=this._maxY=o.y,this._minZ=this._maxZ=o.z):(this._minX=Math.min(this._minX,o.x),this._minY=Math.min(this._minY,o.y),this._minZ=Math.min(this._minZ,o.z),this._maxX=Math.max(this._maxX,o.x),this._maxY=Math.max(this._maxY,o.y),this._maxZ=Math.max(this._maxZ,o.z)),o.setOriginalPosition(o.x,o.y,o.z);this._width=this._maxX-this._minX,this._height=this._maxY-this._minY,this._depth=this._maxZ-this._minZ;var c=Math.max(this._width,Math.max(this._height,this._depth)),h=Math.min(this._width,Math.min(this._height,this._depth));c==this._width&&h==this._height?(this._minAxis=a.ModConstant.Y,this._midAxis=a.ModConstant.Z,this._maxAxis=a.ModConstant.X):c==this._width&&h==this._depth?(this._minAxis=a.ModConstant.Z,this._midAxis=a.ModConstant.Y,this._maxAxis=a.ModConstant.X):c==this._height&&h==this._width?(this._minAxis=a.ModConstant.X,this._midAxis=a.ModConstant.Z,this._maxAxis=a.ModConstant.Y):c==this._height&&h==this._depth?(this._minAxis=a.ModConstant.Z,this._midAxis=a.ModConstant.X,this._maxAxis=a.ModConstant.Y):c==this._depth&&h==this._width?(this._minAxis=a.ModConstant.X,this._midAxis=a.ModConstant.Y,this._maxAxis=a.ModConstant.Z):c==this._depth&&h==this._height&&(this._minAxis=a.ModConstant.Y,this._midAxis=a.ModConstant.X,this._maxAxis=a.ModConstant.Z);for(var u=0;u<f;u++)o=this.getVertices()[u],o.setRatios((o.x-this._minX)/this._width,(o.y-this._minY)/this._height,(o.z-this._minZ)/this._depth)},s.prototype.resetGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].reset()},s.prototype.collapseGeometry=function(){for(var o=this.getVertices().length,f=0;f<o;f++)this.getVertices()[f].collapse();this.analyzeGeometry()},Object.defineProperty(s.prototype,"minX",{get:function(){return this._minX},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minY",{get:function(){return this._minY},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minZ",{get:function(){return this._minZ},enumerable:!1,configurable:!0}),s.prototype.getMin=function(o){switch(o){case a.ModConstant.X:return this._minX;case a.ModConstant.Y:return this._minY;case a.ModConstant.Z:return this._minZ}return-1},Object.defineProperty(s.prototype,"maxX",{get:function(){return this._maxX},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"maxY",{get:function(){return this._maxY},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"maxZ",{get:function(){return this._maxZ},enumerable:!1,configurable:!0}),s.prototype.getMax=function(o){switch(o){case a.ModConstant.X:return this._maxX;case a.ModConstant.Y:return this._maxY;case a.ModConstant.Z:return this._maxZ}return-1},Object.defineProperty(s.prototype,"maxAxis",{get:function(){return this._maxAxis},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"midAxis",{get:function(){return this._midAxis},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"minAxis",{get:function(){return this._minAxis},enumerable:!1,configurable:!0}),s.prototype.getSize=function(o){switch(o){case a.ModConstant.X:return this._width;case a.ModConstant.Y:return this._height;case a.ModConstant.Z:return this._depth}return-1},Object.defineProperty(s.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"depth",{get:function(){return this._depth},enumerable:!1,configurable:!0}),s.prototype.postApply=function(){},s.prototype.destroy=function(){this.vertices.length=0,this.faces.length=0},s}();n.MeshProxy=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.FaceProxy=void 0;var a=function(){function l(){this._vertices=[]}return Object.defineProperty(l.prototype,"a",{get:function(){return this._vertices[0]},set:function(s){this._vertices[0]=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"b",{get:function(){return this._vertices[1]},set:function(s){this._vertices[1]=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"c",{get:function(){return this._vertices[2]},set:function(s){this._vertices[2]=s},enumerable:!1,configurable:!0}),l.prototype.addVertex=function(s){this._vertices.push(s)},l.prototype.addVertices=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];for(var f=0;f<s.length;f++)this.addVertex(s[f])},l.prototype.addABC=function(){for(var s=[],o=0;o<arguments.length;o++)s[o]=arguments[o];for(var f=0;f<s.length;f++)this.addVertex(s[f])},Object.defineProperty(l.prototype,"vertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),l.prototype.toString=function(){for(var s="",o=0;o<this._vertices.length;o++)s+=o+":"+this._vertices[o]+" ";return s},l}();n.FaceProxy=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.TMap=void 0;var a=function(){function s(){this.from=[]}return s.prototype.push=function(o){this.from.push(o)},s}(),l=function(){function s(){this._map={}}return s.prototype.add=function(o,f,u){var c="t_"+o;this._map[c]||(this._map[c]=new a),this._map[c].push(f),this._map[c].to=o,this._map[c].value=u},s.prototype.getToByValue=function(o){var f=this.getItemByValue(o);return f?f.to:-1},s.prototype.getFromByTo=function(o){var f=this.getItemByTo(o);return f?f.from:null},s.prototype.includeByValue=function(o){return!!this.getItemByValue(o)},s.prototype.getItemByValue=function(o){for(var f in this._map){var u=this._map[f];if(u.value===o)return u}return null},s.prototype.getItemByTo=function(o){var f="t_"+o;return this._map[f]},s.prototype.destroy=function(){for(var o in this._map)delete this._map[o]},s}();n.TMap=l},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Phase=void 0;var a=function(){function l(s){s===void 0&&(s=0),this.v=s}return Object.defineProperty(l.prototype,"value",{get:function(){return this.v},set:function(s){this.v=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"phasedValue",{get:function(){return Math.sin(this.v)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"absPhasedValue",{get:function(){return Math.abs(this.phasedValue)},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"normValue",{get:function(){return(this.phasedValue+1)/2},enumerable:!1,configurable:!0}),l}();n.Phase=a},function(t,n,r){var a=this&&this.__extends||function(){var c=function(h,p){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&(_[d]=g[d])})(h,p)};return function(h,p){function _(){this.constructor=h}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");c(h,p),h.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bend=void 0;var l=r(2),s=r(0),o=r(5),f=r(18),u=function(c){function h(p,_,g){p===void 0&&(p=0),_===void 0&&(_=.5),g===void 0&&(g=0);var d=c.call(this)||this;return d._constraint=l.ModConstant.NONE,d.switchAxes=!1,d._force=p,d._offset=_,d.angle=g,d}return a(h,c),h.prototype.setModifiable=function(p){c.prototype.setModifiable.call(this,p),this.max=this.switchAxes?p.midAxis:p.maxAxis,this.min=p.minAxis,this.mid=this.switchAxes?p.maxAxis:p.midAxis,this.width=p.getSize(this.max),this.height=p.getSize(this.mid),this.origin=p.getMin(this.max),this._diagAngle=Math.atan(this.width/this.height)},Object.defineProperty(h.prototype,"force",{get:function(){return this._force},set:function(p){this._force=p},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"constraint",{get:function(){return this._constraint},set:function(p){this._constraint=p},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"diagAngle",{get:function(){return this._diagAngle},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"angle",{get:function(){return this._angle},set:function(p){this._angle=p,this.m1=new f.Matrix(1,0,0,1),this.m1.rotate(this._angle),this.m2=new f.Matrix(1,0,0,1),this.m2.rotate(-this._angle)},enumerable:!1,configurable:!0}),h.prototype.apply=function(){if(this.force!=0)for(var p=this.mod.getVertices(),_=p.length,g=this.origin+this.width*this.offset,d=this.width/Math.PI/this.force,m=2*Math.PI*(this.width/(d*Math.PI*2)),x=0;x<_;x++){var y=p[x],T=y.getValue(this.max),w=y.getValue(this.mid),b=y.getValue(this.min),S=this.m1.transformPoint(new o.Vector2(T,w));T=S.x,w=S.y;var U=(T-this.origin)/this.width;if(!(this.constraint==l.ModConstant.LEFT&&U<=this.offset||this.constraint==l.ModConstant.RIGHT&&U>=this.offset)){var O=Math.PI/2-m*this.offset+m*U,M=Math.sin(O)*(d+b),C=Math.cos(O)*(d+b);b=M-d,T=g-C}var N=this.m2.transformPoint(new o.Vector2(T,w));T=N.x,w=N.y,y.setValue(this.max,T),y.setValue(this.mid,w),y.setValue(this.min,b)}},h}(s.Modifier);n.Bend=u},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix=void 0;var a=r(5),l=function(){function s(o,f,u,c){this.m=[o,f,u,c]}return s.prototype.dispose=function(){return this.m.length=0,this},s.prototype.reset=function(){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,this},s.prototype.rotate=function(o){var f=Math.cos(o),u=Math.sin(o);return this.m[0]=f,this.m[1]=-u,this.m[2]=u,this.m[3]=f,this},s.prototype.scale=function(o,f){return this.m[0]=1,this.m[1]=0,this.m[2]=0,this.m[3]=1,o!==void 0&&(this.m[0]=o,this.m[3]=o),f!==void 0&&(this.m[3]=f),this},s.prototype.multiply=function(o){return s.mult(this,o)},s.prototype.transformPoint=function(o){var f=s.transform(this,[o.x,o.y]);return new a.Vector2(f[0],f[1])},s.prototype.transformPointSelf=function(o){var f=s.transform(this,[o.x,o.y]);return o.x=f[0],o.y=f[1],o},s.prototype.clone=function(){var o=this.m;return new s(o[0],o[1],o[2],o[3])},s.transform=function(o,f){var u=o.m,c=f[0],h=f[1];return f[0]=u[0]*c+u[1]*h,f[1]=u[2]*c+u[3]*h,f},s.mult=function(o,f){var u=o.m,c=f.m,h=u[0],p=u[1],_=u[2],g=u[3];return u[0]=h*c[0]+p*c[2],u[1]=h*c[1]+p*c[3],u[2]=_*c[0]+g*c[2],u[3]=_*c[1]+g*c[3],o},s}();n.Matrix=l},function(t,n,r){var a=this&&this.__extends||function(){var f=function(u,c){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,p){h.__proto__=p}||function(h,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(h[_]=p[_])})(u,c)};return function(u,c){function h(){this.constructor=u}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");f(u,c),u.prototype=c===null?Object.create(c):(h.prototype=c.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Bloat=void 0;var l=r(1),s=r(0),o=function(f){function u(){var c=f!==null&&f.apply(this,arguments)||this;return c._center=l.Vector3.ZERO,c._r=0,c._a=.01,c._u=l.Vector3.ZERO,c}return a(u,f),Object.defineProperty(u.prototype,"center",{get:function(){return this._center},set:function(c){this._center=c},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"radius",{get:function(){return this._r},set:function(c){this._r=Math.max(0,c)},enumerable:!1,configurable:!0}),Object.defineProperty(u.prototype,"a",{get:function(){return this._a},set:function(c){this._a=Math.max(0,c)},enumerable:!1,configurable:!0}),u.prototype.apply=function(){for(var c=this.mod.getVertices(),h=0,p=c;h<p.length;h++){var _=p[h],g=_;this._u.x=g.x-this._center.x,this._u.y=g.y-this._center.y,this._u.z=g.z-this._center.z,this._u.magnitude+=this._r*Math.exp(-this._u.magnitude*this._a),g.x=this._u.x+this._center.x,g.y=this._u.y+this._center.y,g.z=this._u.z+this._center.z}},u}(s.Modifier);n.Bloat=o},function(t,n,r){var a=this&&this.__extends||function(){var c=function(h,p){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(_,g){_.__proto__=g}||function(_,g){for(var d in g)Object.prototype.hasOwnProperty.call(g,d)&&(_[d]=g[d])})(h,p)};return function(h,p){function _(){this.constructor=h}if(typeof p!="function"&&p!==null)throw new TypeError("Class extends value "+String(p)+" is not a constructor or null");c(h,p),h.prototype=p===null?Object.create(p):(_.prototype=p.prototype,new _)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Break=void 0;var l=r(6),s=r(1),o=r(4),f=r(0),u=function(c){function h(p,_){p===void 0&&(p=0),_===void 0&&(_=0);var g=c.call(this)||this;return g.bv=new s.Vector3(0,1,0),g.range=new l.Range(0,1),g.angle=_,g._offset=p,g}return a(h,c),h.prototype.apply=function(){for(var p=this.mod.getVertices(),_=p.length,g=new s.Vector3(0,0,-(this.mod.minZ+this.mod.depth*this.offset)),d=0;d<_;d++){var m=p[d],x=m.vector;if(x=x.add(g),x.z>=0&&this.range.isIn(m.ratioY)){var y=this.angle,T=o.Matrix4.rotationMatrix(this.bv.x,this.bv.y,this.bv.z,y);o.Matrix4.multiplyVector(T,x)}var w=g.negate();x=x.add(w),m.x=x.x,m.y=x.y,m.z=x.z}},Object.defineProperty(h.prototype,"offset",{get:function(){return this._offset},set:function(p){this._offset=p},enumerable:!1,configurable:!0}),h}(f.Modifier);n.Break=u},function(t,n,r){var a=this&&this.__extends||function(){var h=function(p,_){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,d){g.__proto__=d}||function(g,d){for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(g[m]=d[m])})(p,_)};return function(p,_){function g(){this.constructor=p}if(typeof _!="function"&&_!==null)throw new TypeError("Class extends value "+String(_)+" is not a constructor or null");h(p,_),p.prototype=_===null?Object.create(_):(g.prototype=_.prototype,new g)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Cloth=void 0;var l=r(2),s=r(22),o=r(0),f=r(23),u=r(24),c=function(h){function p(_,g){_===void 0&&(_=1),g===void 0&&(g=0);var d=h.call(this)||this;return d._forceX=0,d._forceY=0,d._forceZ=0,d._dic=new s.Dictionary,d._rigidity=_,d.friction=g,d}return a(p,h),p.prototype.setBounds=function(_,g,d,m,x,y){_===void 0&&(_=Number.NEGATIVE_INFINITY),g===void 0&&(g=Number.POSITIVE_INFINITY),d===void 0&&(d=Number.NEGATIVE_INFINITY),m===void 0&&(m=Number.POSITIVE_INFINITY),x===void 0&&(x=Number.NEGATIVE_INFINITY),y===void 0&&(y=Number.POSITIVE_INFINITY),this._useBounds=!0,this._boundsMinX=_,this._boundsMaxX=g,this._boundsMinY=d,this._boundsMaxY=m,this._boundsMinZ=x,this._boundsMaxZ=y},p.prototype.clearBounds=function(){this._useBounds=!1},Object.defineProperty(p.prototype,"verletVertices",{get:function(){return this._vertices},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"friction",{get:function(){return 100*(this._friction-1)},set:function(_){_<0&&(_=0),this._friction=_/100+1},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"rigidity",{get:function(){return this._rigidity},set:function(_){var g,d,m=this._connections.length;for(_>1?_=1:_<0&&(_=0),this._rigidity=_,g=.5*_;d=this._connections[--m];)d.rigidity=g},enumerable:!1,configurable:!0}),p.prototype.setForce=function(_,g,d){this._forceX=_,this._forceY=g,this._forceZ=d},Object.defineProperty(p.prototype,"forceX",{get:function(){return this._forceX},set:function(_){this._forceX=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceY",{get:function(){return this._forceY},set:function(_){this._forceY=_},enumerable:!1,configurable:!0}),Object.defineProperty(p.prototype,"forceZ",{get:function(){return this._forceZ},set:function(_){this._forceZ=_},enumerable:!1,configurable:!0}),p.prototype.unlockAll=function(){for(var _,g=this._vertices.length;_=this._vertices[--g];)_.mobileX=!0,_.mobileY=!0,_.mobileZ=!0},p.prototype.lockXMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minX,"x",_,g)},p.prototype.lockXMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxX,"x",_,g)},p.prototype.lockYMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minY,"y",_,g)},p.prototype.lockYMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxY,"y",_,g)},p.prototype.lockZMin=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.minZ,"z",_,g)},p.prototype.lockZMax=function(_,g){_===void 0&&(_=0),g===void 0&&(g=7),this.lockSet(this.mod.maxZ,"z",_,g)},p.prototype.lockSet=function(_,g,d,m){d===void 0&&(d=0),m===void 0&&(m=7);for(var x,y=this._vertices.length;x=this._vertices[--y];)Math.abs(x[g]-_)<=d&&(m&l.ModConstant.X&&(x.mobileX=!1),m&l.ModConstant.Y&&(x.mobileY=!1),m&l.ModConstant.Z&&(x.mobileZ=!1))},p.prototype.setModifiable=function(_){h.prototype.setModifiable.call(this,_),this.initVerletVertices(),this.initVerletConnections(),this.rigidity=this._rigidity},p.prototype.apply=function(){var _,g,d;for(_=this._connections.length;g=this._connections[--_];)g.update();for(_=this._vertices.length;d=this._vertices[--_];)d.mobileX&&(d.x+=this._forceX),d.mobileY&&(d.y+=this._forceY),d.mobileZ&&(d.z+=this._forceZ),d.velocityX/=this._friction,d.velocityY/=this._friction,d.velocityZ/=this._friction,this._useBounds&&(d.x<this._boundsMinX?d.x=this._boundsMinX:d.x>this._boundsMaxX&&(d.x=this._boundsMaxX),d.y<this._boundsMinY?d.y=this._boundsMinY:d.y>this._boundsMaxY&&(d.y=this._boundsMaxY),d.z<this._boundsMinZ?d.z=this._boundsMinZ:d.z>this._boundsMaxZ&&(d.z=this._boundsMaxZ)),d.update()},p.prototype.initVerletVertices=function(){var _,g=this.mod.getVertices(),d=g.length;for(this._vertices=[];_=g[--d];){var m=new u.VerletVertex(_);this._vertices.push(m),this._dic.setVal(_,m)}},p.prototype.initVerletConnections=function(){var _,g,d,m=this.mod.getFaces(),x=m.length;this._connections=[];for(var y=0;y<x;y++){_=m[y],g=_.vertices,d=g.length;for(var T=0;T<d-1;T++)this.createConnection(this._dic.getVal(g[T]),this._dic.getVal(g[T+1])),T>1&&this.createConnection(this._dic.getVal(g[0]),this._dic.getVal(g[T]));this.createConnection(this._dic.getVal(g[d-1]),this._dic.getVal(g[0]))}},p.prototype.createConnection=function(_,g){if(_&&g){var d=_.distanceTo(g),m=new f.VerletConnection(_,g,d,this._rigidity);this._connections.push(m)}},p}(o.Modifier);n.Cloth=c},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.Dictionary=void 0;var a=function(){function l(){this.dic={}}return l.prototype.setVal=function(s,o){var f=this.getKey(s);this.dic[f]=o},l.prototype.getVal=function(s){var o=this.getKey(s);return this.dic[o]},l.prototype.getKey=function(s){if(typeof s=="object"){if(s.id)return s.id;var o="d_"+Math.floor(Math.random()*Math.pow(10,10));return s.id=o,o}return s+""},l}();n.Dictionary=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletConnection=void 0;var a=function(){function l(s,o,f,u){u===void 0&&(u=.5),this._rigidity=.5,this._v1=s,this._v2=o,this._strictDistance=f,this._rigidity=u}return Object.defineProperty(l.prototype,"rigidity",{get:function(){return this._rigidity},set:function(s){this._rigidity=s},enumerable:!1,configurable:!0}),l.prototype.update=function(){var s,o,f,u,c=this._v1.x,h=this._v2.x,p=this._v1.y,_=this._v2.y,g=this._v1.z,d=this._v2.z,m=h-c,x=_-p,y=d-g,T=Math.sqrt(m*m+x*x+y*y);T!=this._strictDistance&&(s=(this._strictDistance-T)/T*this._rigidity,o=s*m,f=s*x,u=s*y,this._v1.mobileX&&this._v2.mobileX||(o*=2),this._v1.mobileY&&this._v2.mobileY||(f*=2),this._v1.mobileZ&&this._v2.mobileZ||(u*=2),this._v1.mobileX&&(this._v1.x-=o),this._v1.mobileY&&(this._v1.y-=f),this._v1.mobileZ&&(this._v1.z-=u),this._v2.mobileX&&(this._v2.x+=o),this._v2.mobileY&&(this._v2.y+=f),this._v2.mobileZ&&(this._v2.z+=u))},l}();n.VerletConnection=a},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.VerletVertex=void 0;var a=function(){function l(s){this.mobileX=!0,this.mobileY=!0,this.mobileZ=!0,this._v=s,this.setPosition(this._v.x,this._v.y,this._v.z)}return l.prototype.setPosition=function(s,o,f){this._x=this._oldX=s,this._y=this._oldY=o,this._z=this._oldZ=f,this._v.x=s,this._v.y=o,this._v.z=f},l.prototype.update=function(){var s,o,f;this.mobileX&&(s=this.x,this.x+=this.velocityX,this._oldX=s),this.mobileY&&(o=this.y,this.y+=this.velocityY,this._oldY=o),this.mobileZ&&(f=this.z,this.z+=this.velocityZ,this._oldZ=f)},Object.defineProperty(l.prototype,"x",{get:function(){return this._x},set:function(s){this._x=s,this.mobileX||(this._oldX=s),this._v.x=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"y",{get:function(){return this._y},set:function(s){this._y=s,this.mobileY||(this._oldY=s),this._v.y=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"z",{get:function(){return this._z},set:function(s){this._z=s,this.mobileZ||(this._oldZ=s),this._v.z=s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityX",{get:function(){return this._x-this._oldX},set:function(s){this._oldX=this._x-s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityY",{get:function(){return this._y-this._oldY},set:function(s){this._oldY=this._y-s},enumerable:!1,configurable:!0}),Object.defineProperty(l.prototype,"velocityZ",{get:function(){return this._z-this._oldZ},set:function(s){this._oldZ=this._z-s},enumerable:!1,configurable:!0}),l.prototype.distanceTo=function(s){return Math.sqrt((this.x-s.x)*(this.x-s.x)+(this.y-s.y)*(this.y-s.y)+(this.z-s.z)*(this.z-s.z))},l}();n.VerletVertex=a},function(t,n,r){var a=this&&this.__extends||function(){var f=function(u,c){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,p){h.__proto__=p}||function(h,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(h[_]=p[_])})(u,c)};return function(u,c){function h(){this.constructor=u}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");f(u,c),u.prototype=c===null?Object.create(c):(h.prototype=c.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Noise=void 0;var l=r(2),s=r(0),o=function(f){function u(c){c===void 0&&(c=0);var h=f.call(this)||this;return h.axc=l.ModConstant.NONE,h.start=0,h.end=0,h.frc=c,h}return a(u,f),Object.defineProperty(u.prototype,"force",{get:function(){return this.frc},set:function(c){this.frc=c},enumerable:!1,configurable:!0}),u.prototype.constraintAxes=function(c){this.axc=c},u.prototype.setFalloff=function(c,h){c===void 0&&(c=0),h===void 0&&(h=1),this.start=c,this.end=h},u.prototype.apply=function(){for(var c=this.mod.getVertices(),h=c.length,p=0;p<h;p++){var _=c[p],g=Math.random()*this.force-this.force/2,d=_.getRatio(this.mod.maxAxis);this.start<this.end?(d<this.start&&(d=0),d>this.end&&(d=1)):this.start>this.end?(d=1-d,d>this.start&&(d=0),d<this.end&&(d=1)):d=1,1&this.axc||(_.x+=g*d),this.axc>>1&1||(_.y+=g*d),this.axc>>2&1||(_.z+=g*d)}},u}(s.Modifier);n.Noise=o},function(t,n,r){var a=this&&this.__extends||function(){var f=function(u,c){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,p){h.__proto__=p}||function(h,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(h[_]=p[_])})(u,c)};return function(u,c){function h(){this.constructor=u}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");f(u,c),u.prototype=c===null?Object.create(c):(h.prototype=c.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Pivot=void 0;var l=r(1),s=r(0),o=function(f){function u(c,h,p){c===void 0&&(c=0),h===void 0&&(h=0),p===void 0&&(p=0);var _=f.call(this)||this;return _.pivot=new l.Vector3(c,h,p),_}return a(u,f),u.prototype.setMeshCenter=function(){var c=-(this.mod.minX+this.mod.width/2),h=-(this.mod.minY+this.mod.height/2),p=-(this.mod.minZ+this.mod.depth/2);this.pivot=new l.Vector3(c,h,p)},u.prototype.apply=function(){for(var c=this.mod.getVertices(),h=c.length,p=0;p<h;p++){var _=c[p];_.vector=_.vector.add(this.pivot)}var g=this.pivot.clone();this.mod.updateMeshPosition(g.negate())},u}(s.Modifier);n.Pivot=o},function(t,n,r){var a=this&&this.__extends||function(){var u=function(c,h){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(c,h)};return function(c,h){function p(){this.constructor=c}if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");u(c,h),c.prototype=h===null?Object.create(h):(p.prototype=h.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Skew=void 0;var l=r(3),s=r(2),o=r(0),f=function(u){function c(h){h===void 0&&(h=0);var p=u.call(this)||this;return p._offset=.5,p._constraint=s.ModConstant.NONE,p._power=1,p._falloff=1,p._inverseFalloff=!1,p._oneSide=!1,p._swapAxes=!1,p._force=h,p}return a(c,u),c.prototype.setModifiable=function(h){u.prototype.setModifiable.call(this,h),this._skewAxis=this._skewAxis||h.maxAxis},c.prototype.apply=function(){for(var h=this.mod.getVertices(),p=h.length,_=0;_<p;_++){var g=h[_];if(!(this._constraint==s.ModConstant.LEFT&&g.getRatio(this._skewAxis)<=this._offset)&&!(this._constraint==s.ModConstant.RIGHT&&g.getRatio(this._skewAxis)>this._offset)){var d=g.getRatio(this._skewAxis)-this._offset;this._oneSide&&(d=Math.abs(d));var m=g.getRatio(this.displaceAxis);this._inverseFalloff&&(m=1-m);var x=this._falloff+m*(1-this._falloff),y=Math.pow(Math.abs(d),this._power)*l.TMath.sign(d,1),T=g.getValue(this.displaceAxis)+this.force*y*x;g.setValue(this.displaceAxis,T)}}},Object.defineProperty(c.prototype,"displaceAxis",{get:function(){switch(this._skewAxis){case s.ModConstant.X:return this._swapAxes?s.ModConstant.Z:s.ModConstant.Y;case s.ModConstant.Y:return this._swapAxes?s.ModConstant.Z:s.ModConstant.X;case s.ModConstant.Z:return this._swapAxes?s.ModConstant.Y:s.ModConstant.X;default:return 0}},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"force",{get:function(){return this._force},set:function(h){this._force=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"constraint",{get:function(){return this._constraint},set:function(h){this._constraint=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"offset",{get:function(){return this._offset},set:function(h){this._offset=l.TMath.trim(0,1,h)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"power",{get:function(){return this._power},set:function(h){this._power=Math.max(1,h)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"falloff",{get:function(){return this._falloff},set:function(h){this._falloff=l.TMath.trim(0,1,h)},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"oneSide",{get:function(){return this._oneSide},set:function(h){this._oneSide=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"skewAxis",{get:function(){return this._skewAxis},set:function(h){this._skewAxis=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"swapAxes",{get:function(){return this._swapAxes},set:function(h){this._swapAxes=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"inverseFalloff",{get:function(){return this._inverseFalloff},set:function(h){this._inverseFalloff=h},enumerable:!1,configurable:!0}),c}(o.Modifier);n.Skew=f},function(t,n,r){var a=this&&this.__extends||function(){var u=function(c,h){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(c,h)};return function(c,h){function p(){this.constructor=c}if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");u(c,h),c.prototype=h===null?Object.create(h):(p.prototype=h.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Taper=void 0;var l=r(4),s=r(1),o=r(0),f=function(u){function c(h){var p=u.call(this)||this;return p.start=0,p.end=1,p._vector=new s.Vector3(1,0,1),p._vector2=new s.Vector3(0,1,0),p.frc=h,p.pow=1,p}return a(c,u),c.prototype.setFalloff=function(h,p){h===void 0&&(h=0),p===void 0&&(p=1),this.start=h,this.end=p},Object.defineProperty(c.prototype,"force",{get:function(){return this.frc},set:function(h){this.frc=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"power",{get:function(){return this.pow},set:function(h){this.pow=h},enumerable:!1,configurable:!0}),c.prototype.apply=function(){for(var h=this.mod.getVertices(),p=h.length,_=0;_<p;_++){var g=h[_],d=g.ratioVector.multiply(this._vector2),m=this.frc*Math.pow(d.magnitude,this.pow),x=l.Matrix4.scaleMatrix(1+m*this._vector.x,1+m*this._vector.y,1+m*this._vector.z),y=g.vector;l.Matrix4.multiplyVector(x,y),g.vector=y}},c}(o.Modifier);n.Taper=f},function(t,n,r){var a=this&&this.__extends||function(){var u=function(c,h){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(c,h)};return function(c,h){function p(){this.constructor=c}if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");u(c,h),c.prototype=h===null?Object.create(h):(p.prototype=h.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Twist=void 0;var l=r(4),s=r(1),o=r(0),f=function(u){function c(h){h===void 0&&(h=0);var p=u.call(this)||this;return p._vector=new s.Vector3(0,1,0),p.center=s.Vector3.ZERO,p._angle=h,p}return a(c,u),Object.defineProperty(c.prototype,"angle",{get:function(){return this._angle},set:function(h){this._angle=h},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"vector",{get:function(){return this._vector},set:function(h){this._vector=h},enumerable:!1,configurable:!0}),c.prototype.apply=function(){this._vector.normalize();for(var h=new s.Vector3(this.mod.maxX/2,this.mod.maxY/2,this.mod.maxZ/2),p=-s.Vector3.dot(this._vector,this.center),_=0;_<this.mod.getVertices().length;_++){var g=this.mod.getVertices()[_],d=s.Vector3.dot(new s.Vector3(g.x,g.y,g.z),this._vector)+p;this.twistPoint(g,d/h.magnitude*this._angle)}},c.prototype.twistPoint=function(h,p){var _=l.Matrix4.translationMatrix(h.x,h.y,h.z);_=l.Matrix4.multiply(l.Matrix4.rotationMatrix(this._vector.x,this._vector.y,this._vector.z,p),_),h.x=_.n14,h.y=_.n24,h.z=_.n34},c}(o.Modifier);n.Twist=f},function(t,n,r){var a=this&&this.__extends||function(){var u=function(c,h){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(p,_){p.__proto__=_}||function(p,_){for(var g in _)Object.prototype.hasOwnProperty.call(_,g)&&(p[g]=_[g])})(c,h)};return function(c,h){function p(){this.constructor=c}if(typeof h!="function"&&h!==null)throw new TypeError("Class extends value "+String(h)+" is not a constructor or null");u(c,h),c.prototype=h===null?Object.create(h):(p.prototype=h.prototype,new p)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.Wheel=void 0;var l=r(4),s=r(1),o=r(0),f=function(u){function c(){var h=u.call(this)||this;return h.steerVector=new s.Vector3(0,1,0),h.rollVector=new s.Vector3(0,0,1),h.speed=0,h.turn=0,h.roll=0,h}return a(c,u),c.prototype.setModifiable=function(h){u.prototype.setModifiable.call(this,h),this._radius=h.width/2},c.prototype.apply=function(){this.roll+=this.speed;var h,p,_=this.mod.getVertices(),g=_.length;if(this.turn!=0){p=l.Matrix4.rotationMatrix(this.steerVector.x,this.steerVector.y,this.steerVector.z,this.turn);var d=this.rollVector.clone();l.Matrix4.multiplyVector(p,d),h=l.Matrix4.rotationMatrix(d.x,d.y,d.z,this.roll)}else h=l.Matrix4.rotationMatrix(this.rollVector.x,this.rollVector.y,this.rollVector.z,this.roll);for(var m=0;m<g;m++){var x=_[m],y=x.vector.clone();this.turn!=0&&l.Matrix4.multiplyVector(p,y),l.Matrix4.multiplyVector(h,y),x.x=y.x,x.y=y.y,x.z=y.z}},Object.defineProperty(c.prototype,"step",{get:function(){return this._radius*this.speed/Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"perimeter",{get:function(){return 2*this._radius*Math.PI},enumerable:!1,configurable:!0}),Object.defineProperty(c.prototype,"radius",{get:function(){return this._radius},enumerable:!1,configurable:!0}),c}(o.Modifier);n.Wheel=f},function(t,n,r){var a=this&&this.__extends||function(){var f=function(u,c){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,p){h.__proto__=p}||function(h,p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(h[_]=p[_])})(u,c)};return function(u,c){function h(){this.constructor=u}if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");f(u,c),u.prototype=c===null?Object.create(c):(h.prototype=c.prototype,new h)}}();Object.defineProperty(n,"__esModule",{value:!0}),n.UserDefined=void 0;var l=r(0),s=r(32),o=function(f){function u(){var c=f.call(this)||this;return c.eventEmitter=new s.EventEmitter,c}return a(u,f),u.prototype.apply=function(){for(var c=this.mod.getVertices(),h=c.length,p=0;p<h;p++){var _=c[p];this.renderVector&&this.renderVector(_,p,h)}this.dispatchEvent("CHANGE")},u.prototype.addEventListener=function(c,h){this.eventEmitter.on(c,h)},u.prototype.dispatchEvent=function(c){return this.eventEmitter.emit(c)},u.prototype.hasEventListener=function(c){return this.eventEmitter.has(c)},u.prototype.removeEventListener=function(c,h){this.eventEmitter.off(c,h)},u}(l.Modifier);n.UserDefined=o},function(t,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.EventEmitter=void 0;var a=function(){function s(){}return s.prototype.on=function(o,f){return l||(l={}),l[o]||(l[o]=[]),l[o].push(f),f},s.prototype.emit=function(o){for(var f=[],u=1;u<arguments.length;u++)f[u-1]=arguments[u];var c=!1;if(o&&l){var h=l[o];if(!h)return c;h=h.slice();var p=h.length,_=Array.prototype.slice.call(arguments);for(_.shift();p--;){var g=h[p];c=c||g.apply(null,_)}}return!!c},s.prototype.one=function(o,f){var u=this,c=Array.prototype.slice.call(arguments,2),h=function(){u.off(o,h),f.apply(null,c)};this.on(o,h)},s.prototype.has=function(o){return!(!l||!l[o])},s.prototype.off=function(o,f){if(l&&l[o]){for(var u=l[o],c=0,h=u.length;c<h;c++)if(u[c].toString()==f.toString()){h==1?delete l[o]:u.splice(c,1);break}}},s.prototype.offAll=function(o){o?l&&delete l[o]:l=null},s}();n.EventEmitter=a;var l}])})})(Mc);var qt=Mc.exports;class J_ extends qt.UserDefined{constructor(e=qt.ModConstant.Y,t=qt.ModConstant.X,n=.5,r=.5,a=.5){super(),this.elevationAxis=e,this.alongAxis=t,this.effectRange=n,this.effectMid=r,this.elevationHeight=a,this.intensity=1,this.renderVector=this._renderVector}_renderVector(e,t,n){let r=e.getRatio(this.alongAxis),a=e.getValue(this.elevationAxis);if(r<=this.effectRange){r/=this.effectRange;let l=0;r<this.effectMid?(r=r/this.effectMid,l=Math.sqrt(1-Math.pow(r,2)+r*2-1)):(r=(r-this.effectMid)/(1-this.effectMid),l=(Math.cos(r*Math.PI)- -1)/2),e.setValue(this.elevationAxis,a+l*this.elevationHeight*this.intensity)}}}const Jo=i=>{for(var e=i.attributes.uv,t=0;t<e.count;t++){var n=e.getX(t),r=e.getY(t);e.setXY(t,1-n,r)}return i},Ni=new Ga({color:"#ffffff"});class Q_ extends zt{constructor(e=10){super();let t=new zt($_([Jo(new wi(1,1,e,e)),Jo(new wi(1,1,e,e).rotateY(Math.PI))],!0),[Ni,Ni]);t.castShadow=!0,t.receiveShadow=!0,t.rotateX(Math.PI/2),t.position.x=.5,this.scale.z=-1,this.add(t),this.page=t,this.modifiers=new qt.ModifierStack(t),this.bend=new qt.Bend(0,0,0),this.bend.constraint=qt.ModConstant.LEFT,this.twist=new qt.Twist(0),this.twist.vector=new qt.Vector3(2,0,0),this.twist.center=new qt.Vector3(-.5,0,0),this.pageCurve=new J_(qt.ModConstant.Z,qt.ModConstant.X,.812,.325,.054),this.modifiers.addModifier(this.pageCurve),this.modifiers.addModifier(this.bend),this.modifiers.addModifier(this.twist)}setPageMaterial(e,t){this.page.material[t]=e}flip(e,t,n=1){this.rotation.z=Math.PI*e,this.bend.force=Math.min(-Math.sin(this.rotation.z)/2,-1e-4)*t,this.twist.angle=Math.sin(this.rotation.z)/10,this.pageCurve.intensity=(-1+2*e)*(-Math.sin(this.rotation.z)+1)*n,this.modifiers.apply()}disposeMaterial(e){const t=this.page.material[e];t!==Ni&&t.dispose()}reset(){this.setPageMaterial(Ni,0),this.setPageMaterial(Ni,1)}dispose(e=!1){e&&(this.disposeMaterial(0),this.disposeMaterial(1)),this.page.geometry.dispose(),this.modifiers.destroy()}}const Qo=function(){var i;return()=>{if(!i){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d"),n=t.createLinearGradient(0,0,e.width,0);n.addColorStop(0,"black"),n.addColorStop(.1,"white"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),i=new Qa(e),e.remove()}return i}}();class eg extends zt{constructor(e){super(),this.pages=[],this.pool=[],this._url2Loader=new Map,this._currentProgress=0,this._flipDuration=(e==null?void 0:e.flipDuration)||1,this._ySpacing=(e==null?void 0:e.yBetweenPages)||.001,this._pageSubdivisions=(e==null?void 0:e.pageSubdivisions)||20,this.currentPage=0}[Symbol.iterator](){let e=0;return{next:()=>e<this.pages.length?{value:this.pages[e++],done:!1}:{value:null,done:!0}}}setPages(e){for(e.length%2!==0&&e.push("");this.pages.length;){let n=this.pages.pop();n.reset(),this.pool.push(n),this.remove(n)}let t=Promise.resolve();for(let n=0;n<e.length;n+=2){const r=e[n],a=e[n+1];let l=this.pool.pop();l||(l=new Q_(this._pageSubdivisions)),this.add(l),l.position.y=-this._ySpacing*this.pages.length,this.pages.push(l),l.name=`Page#${this.pages.length}`,t=t.then(this.loadPages(r,a,l))}this.currentPage>this.pages.length*2-1&&(this._currentPage=this.pages.length*2-1,this._currentProgress=this.pages.length),this.flipPages()}get totalPages(){return this.pages.length*2}loadPages(e,t,n){return()=>Promise.all([this.loadPage(e,1,n),this.loadPage(t,0,n)])}loadPage(e,t,n){if(!e||e===""){const a=new Ga({color:"white",roughness:.2,aoMapIntensity:.7,aoMap:t==1?Qo():null});return n.setPageMaterial(a,t),Promise.resolve()}if(e instanceof Ti)return n.setPageMaterial(e,t),Promise.resolve();if(e instanceof wt)return n.setPageMaterial(this.textureToMaterial(e,t),t),Promise.resolve();const r=e;return this._url2Loader.has(r)||this._url2Loader.set(r,new Promise((a,l)=>{new Hm().load(e,s=>{a(this.textureToMaterial(s,t))},void 0,s=>{a(null)})})),this._url2Loader.get(r).then(a=>{n.setPageMaterial(a,t)})}textureToMaterial(e,t){return e.magFilter=Pt,e.minFilter=Pt,e.generateMipmaps=!1,e.colorSpace=Mt,new Ga({color:"white",map:e,roughness:.2,aoMapIntensity:.7,aoMap:t==1?Qo():null,toneMapped:!1})}get currentPage(){return this._currentPage}set currentPage(e){let t=Math.ceil(e/2),n=t-this._currentProgress;this._stepSize=n/this._flipDuration,this._flipDirection=this._stepSize>0?1:-1,this._currentPage=Math.ceil(e),this._goalProgress=t,this.flipPages()}get progress(){return this._currentProgress}set progress(e){let t=this._currentProgress;this._currentProgress=Math.max(0,Math.min(e,this.pages.length)),this._currentPage=Math.floor(this._currentProgress*2),this._stepSize=0,this._flipDirection=this._currentProgress>t?1:-1,this.flipPages()}animate(e){this._stepSize!=0&&(this._currentProgress+=this._stepSize*e,(this._stepSize>0&&this._currentProgress>this._goalProgress||this._stepSize<0&&this._currentProgress<this._goalProgress)&&(this._currentProgress=this._goalProgress,this._stepSize=0),this.flipPages())}flipPage(e){var t=this.pages.indexOf(e);if(t<0)throw new ReferenceError("I don't own that page! Not mine!");const n=t*2,r=n+1;this.currentPage=this._currentPage<=n?r:n}nextPage(){this.currentPage=Math.min(Math.ceil(this.currentPage/2)+1,this.pages.length)*2}previousPage(){this.currentPage=Math.max(Math.ceil(this.currentPage/2)-1,0)*2}flipPages(){const e=this.pages.length;let t=this._currentProgress%1,n=Math.floor(this._currentProgress);for(let a=0;a<e;a++){const l=this.pages[a],s=n<a?0:n>a?1:t,o=s<.5?0:(s-.5)/.5,f=-this._ySpacing*(e-a),u=-this._ySpacing*a,c=this._currentProgress<1?t:this._currentProgress>=e?0:this._currentProgress>=e-1?1-t:1;l.flip(s,this._flipDirection,c),l.position.y=u+o*(f-u)}const r=n==0?-.5+.5*t:n==e-1?.5*t:n==e?.5:0;this.position.x=r*this.scale.x}dispose(){for(;this.pages.length;){let e=this.pages.pop();this.remove(e)}for(;this.pool.length;)this.pool.pop().dispose(!0);this._url2Loader.forEach(e=>e.then(t=>t.dispose())),this._url2Loader.clear()}}window.download=function(i,e,t){var n=window,r="application/octet-stream",a=t||r,l=i,s=document,o=s.createElement("a"),f=function(x){return String(x)},u=n.Blob||n.MozBlob||n.WebKitBlob||f,c=n.MSBlobBuilder||n.WebKitBlobBuilder||n.BlobBuilder,h=e||"download",p,_,g;if(String(this)==="true"&&(l=[l,a],a=l[0],l=l[1]),String(l).match(/^data\:[\w+\-]+\/[\w+\-]+[,;]/))return navigator.msSaveBlob?navigator.msSaveBlob(d(l),h):m(l);try{p=l instanceof u?l:new u([l],{type:a})}catch{c&&(_=new c,_.append([l]),p=_.getBlob(a))}function d(x){var y=x.split(/[:;,]/),T=y[1],w=y[2]=="base64"?atob:decodeURIComponent,b=w(y.pop()),S=b.length,U=0,O=new Uint8Array(S);for(U;U<S;++U)O[U]=b.charCodeAt(U);return new u([O],{type:T})}function m(x,y){if("download"in o)return o.href=x,o.setAttribute("download",h),o.innerHTML="downloading...",o.style.display="none",s.body.appendChild(o),setTimeout(function(){o.click(),s.body.removeChild(o),y===!0&&setTimeout(function(){n.URL.revokeObjectURL(o.href)},250)},66),!0;var T=s.createElement("iframe");s.body.appendChild(T),y||(x="data:"+x.replace(/^data:([\w\/\-\+]+)/,r)),T.src=x,setTimeout(function(){s.body.removeChild(T)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(p,h);if(n.URL)m(n.URL.createObjectURL(p),!0);else{if(typeof p=="string"||p.constructor===f)try{return m("data:"+a+";base64,"+n.btoa(p))}catch{return m("data:"+a+","+encodeURIComponent(p))}g=new FileReader,g.onload=function(x){m(this.result)},g.readAsDataURL(p)}return!0};(function(){var i=function(e){this.data=new Uint8Array(e),this.pos=0};i.prototype.seek=function(e){this.pos=e},i.prototype.writeBytes=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e[t]},i.prototype.writeByte=function(e){this.data[this.pos++]=e},i.prototype.writeU8=i.prototype.writeByte,i.prototype.writeU16BE=function(e){this.data[this.pos++]=e>>8,this.data[this.pos++]=e},i.prototype.writeDoubleBE=function(e){for(var t=new Uint8Array(new Float64Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeFloatBE=function(e){for(var t=new Uint8Array(new Float32Array([e]).buffer),n=t.length-1;n>=0;n--)this.writeByte(t[n])},i.prototype.writeString=function(e){for(var t=0;t<e.length;t++)this.data[this.pos++]=e.charCodeAt(t)},i.prototype.writeEBMLVarIntWidth=function(e,t){switch(t){case 1:this.writeU8(128|e);break;case 2:this.writeU8(64|e>>8),this.writeU8(e);break;case 3:this.writeU8(32|e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 4:this.writeU8(16|e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;case 5:this.writeU8(8|e/4294967296&7),this.writeU8(e>>24),this.writeU8(e>>16),this.writeU8(e>>8),this.writeU8(e);break;default:throw new RuntimeException("Bad EBML VINT size "+t)}},i.prototype.measureEBMLVarInt=function(e){if(e<128-1)return 1;if(e<16384-1)return 2;if(e<(1<<21)-1)return 3;if(e<(1<<28)-1)return 4;if(e<34359738367)return 5;throw new RuntimeException("EBML VINT size not supported "+e)},i.prototype.writeEBMLVarInt=function(e){this.writeEBMLVarIntWidth(e,this.measureEBMLVarInt(e))},i.prototype.writeUnsignedIntBE=function(e,t){switch(t===void 0&&(t=this.measureUnsignedInt(e)),t){case 5:this.writeU8(Math.floor(e/4294967296));case 4:this.writeU8(e>>24);case 3:this.writeU8(e>>16);case 2:this.writeU8(e>>8);case 1:this.writeU8(e);break;default:throw new RuntimeException("Bad UINT size "+t)}},i.prototype.measureUnsignedInt=function(e){return e<256?1:e<65536?2:e<1<<24?3:e<4294967296?4:5},i.prototype.getAsDataArray=function(){if(this.pos<this.data.byteLength)return this.data.subarray(0,this.pos);if(this.pos==this.data.byteLength)return this.data;throw"ArrayBufferDataStream's pos lies beyond end of buffer"},window.ArrayBufferDataStream=i})();(function(){var i=function(e){return function(t){var n=[],r=Promise.resolve(),a=null,l=null;typeof FileWriter<"u"&&t instanceof FileWriter?a=t:e&&t&&(l=t),this.pos=0,this.length=0;function s(u){return new Promise(function(c,h){var p=new FileReader;p.addEventListener("loadend",function(){c(p.result)}),p.readAsArrayBuffer(u)})}function o(u){return new Promise(function(c,h){u instanceof Uint8Array?c(u):u instanceof ArrayBuffer||ArrayBuffer.isView(u)?c(new Uint8Array(u)):u instanceof Blob?c(s(u).then(function(p){return new Uint8Array(p)})):c(s(new Blob([u])).then(function(p){return new Uint8Array(p)}))})}function f(u){var c=u.byteLength||u.length||u.size;if(!Number.isInteger(c))throw"Failed to determine size of element";return c}this.seek=function(u){if(u<0)throw"Offset may not be negative";if(isNaN(u))throw"Offset may not be NaN";if(u>this.length)throw"Seeking beyond the end of file is not allowed";this.pos=u},this.write=function(u){var c={offset:this.pos,data:u,length:f(u)},h=c.offset>=this.length;this.pos+=c.length,this.length=Math.max(this.length,this.pos),r=r.then(function(){if(l)return new Promise(function(g,d){o(c.data).then(function(m){var x=0,y=Buffer.from(m.buffer),T=function(w,b,S){x+=b,x>=S.length?g():e.write(l,S,x,S.length-x,c.offset+x,T)};e.write(l,y,0,y.length,c.offset,T)})});if(a)return new Promise(function(g,d){a.onwriteend=g,a.seek(c.offset),a.write(new Blob([c.data]))});if(!h)for(var p=0;p<n.length;p++){var _=n[p];if(!(c.offset+c.length<=_.offset||c.offset>=_.offset+_.length)){if(c.offset<_.offset||c.offset+c.length>_.offset+_.length)throw new Error("Overwrite crosses blob boundaries");if(c.offset==_.offset&&c.length==_.length){_.data=c.data;return}else return o(_.data).then(function(g){return _.data=g,o(c.data)}).then(function(g){c.data=g,_.data.set(c.data,c.offset-_.offset)})}}n.push(c)})},this.complete=function(u){return l||a?r=r.then(function(){return null}):r=r.then(function(){for(var c=[],h=0;h<n.length;h++)c.push(n[h].data);return new Blob(c,{mimeType:u})}),r}}};window.BlobBuffer=i(null)})();(function(){var i=function(e,t){function n(u,c){var h={};return[u,c].forEach(function(p){for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(h[_]=p[_])}),h}function r(u){return typeof u!="string"||!u.match(/^data:image\/webp;base64,/i)?!1:window.atob(u.substring(23))}function a(u,c){var h=u.toDataURL("image/webp",{quality:c});return r(h)}function l(u){var c=u.indexOf("VP8 ");if(c==-1)throw"Failed to identify beginning of keyframe in WebP image";return c+=8,u.substring(c)}function s(u){this.value=u}function o(u){this.value=u}function f(u,c,h){if(Array.isArray(h))for(var p=0;p<h.length;p++)f(u,c,h[p]);else if(typeof h=="string")u.writeString(h);else if(h instanceof Uint8Array)u.writeBytes(h);else if(h.id)if(h.offset=u.pos+c,u.writeUnsignedIntBE(h.id),Array.isArray(h.data)){var _,g,d;h.size===-1?u.writeByte(255):(_=u.pos,u.writeBytes([0,0,0,0])),g=u.pos,h.dataOffset=g+c,f(u,c,h.data),h.size!==-1&&(d=u.pos,h.size=d-g,u.seek(_),u.writeEBMLVarIntWidth(h.size,4),u.seek(d))}else if(typeof h.data=="string")u.writeEBMLVarInt(h.data.length),h.dataOffset=u.pos+c,u.writeString(h.data);else if(typeof h.data=="number")h.size||(h.size=u.measureUnsignedInt(h.data)),u.writeEBMLVarInt(h.size),h.dataOffset=u.pos+c,u.writeUnsignedIntBE(h.data,h.size);else if(h.data instanceof o)u.writeEBMLVarInt(8),h.dataOffset=u.pos+c,u.writeDoubleBE(h.data.value);else if(h.data instanceof s)u.writeEBMLVarInt(4),h.dataOffset=u.pos+c,u.writeFloatBE(h.data.value);else if(h.data instanceof Uint8Array)u.writeEBMLVarInt(h.data.byteLength),h.dataOffset=u.pos+c,u.writeBytes(h.data);else throw"Bad EBML datatype "+typeof h.data;else throw"Bad EBML datatype "+typeof h.data}return function(u){var c=5e3,h=1,p=!1,_,g,d=[],m=0,x=0,y={quality:.95,fileWriter:null,fd:null,frameDuration:null,frameRate:null},T={Cues:{id:new Uint8Array([28,83,187,107]),positionEBML:null},SegmentInfo:{id:new Uint8Array([21,73,169,102]),positionEBML:null},Tracks:{id:new Uint8Array([22,84,174,107]),positionEBML:null}},w,b={id:17545,data:new o(0)},S,U=[],O=new t(u.fileWriter||u.fd);function M(X){return X-w.dataOffset}function C(){var X={id:21420,size:5,data:0},he={id:290298740,data:[]};for(var j in T){var ce=T[j];ce.positionEBML=Object.create(X),he.data.push({id:19899,data:[{id:21419,data:ce.id},ce.positionEBML]})}return he}function N(){S=C();var X={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:"webm"},{id:17031,data:2},{id:17029,data:2}]},he={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:"webm-writer-js"},{id:22337,data:"webm-writer-js"},b]},j={id:374648427,data:[{id:174,data:[{id:215,data:h},{id:29637,data:h},{id:156,data:0},{id:2274716,data:"und"},{id:134,data:"V_VP8"},{id:2459272,data:"VP8"},{id:131,data:1},{id:224,data:[{id:176,data:_},{id:186,data:g}]}]}]};w={id:408125543,size:-1,data:[S,he,j]};var ce=new e(256);f(ce,O.pos,[X,w]),O.write(ce.getAsDataArray()),T.SegmentInfo.positionEBML.data=M(he.offset),T.Tracks.positionEBML.data=M(j.offset)}function G(X){var he=new e(4);if(!(X.trackNumber>0&&X.trackNumber<127))throw"TrackNumber must be > 0 and < 127";return he.writeEBMLVarInt(X.trackNumber),he.writeU16BE(X.timecode),he.writeByte(128),{id:163,data:[he.getAsDataArray(),X.frame]}}function F(X){return{id:524531317,data:[{id:231,data:Math.round(X.timecode)}]}}function H(X,he,j){U.push({id:187,data:[{id:179,data:he},{id:183,data:[{id:247,data:X},{id:241,data:M(j)}]}]})}function z(){var X={id:475249515,data:U},he=new e(16+U.length*32);f(he,O.pos,X),O.write(he.getAsDataArray()),T.Cues.positionEBML.data=M(X.offset)}function Q(){if(d.length!=0){for(var X=0,he=0;he<d.length;he++)X+=d[he].frame.length;for(var j=new e(X+d.length*32),ce=F({timecode:Math.round(m)}),he=0;he<d.length;he++)ce.data.push(G(d[he]));f(j,O.pos,ce),O.write(j.getAsDataArray()),H(h,Math.round(m),ce.offset),d=[],m+=x,x=0}}function V(){if(!u.frameDuration)if(u.frameRate)u.frameDuration=1e3/u.frameRate;else throw"Missing required frameDuration or frameRate setting"}function ie(X){X.trackNumber=h,X.timecode=Math.round(x),d.push(X),x+=X.duration,x>=c&&Q()}function se(){var X=new e(S.size),he=O.pos;f(X,S.dataOffset,S.data),O.seek(S.dataOffset),O.write(X.getAsDataArray()),O.seek(he)}function ue(){var X=new e(8),he=O.pos;X.writeDoubleBE(m),O.seek(b.dataOffset),O.write(X.getAsDataArray()),O.seek(he)}this.addFrame=function(X){if(p){if(X.width!=_||X.height!=g)throw"Frame size differs from previous frames"}else _=X.width,g=X.height,N(),p=!0;var he=a(X,{quality:u.quality});if(!he)throw"Couldn't decode WebP frame, does the browser support WebP?";ie({frame:l(he),duration:u.frameDuration})},this.complete=function(){return Q(),z(),se(),ue(),O.complete("video/webm")},this.getWrittenSize=function(){return O.length},u=n(y,u||{}),V()}};window.WebMWriter=i(ArrayBufferDataStream,BlobBuffer)})();(function(){var i={function:!0,object:!0};function e(b){return b&&b.Object===Object?b:null}var t=i[typeof Bi]&&Bi&&!Bi.nodeType?Bi:void 0,n=i[typeof ki]&&ki&&!ki.nodeType?ki:void 0,r=n&&n.exports===t?t:void 0,a=e(t&&n&&typeof global=="object"&&global),l=e(i[typeof self]&&self),s=e(i[typeof window]&&window),o=e(i[typeof this]&&this),f=a||s!==(o&&o.window)&&s||l||o||Function("return this")();"gc"in window||(window.gc=function(){}),HTMLCanvasElement.prototype.toBlob||Object.defineProperty(HTMLCanvasElement.prototype,"toBlob",{value:function(b,S,U){for(var O=atob(this.toDataURL(S,U).split(",")[1]),M=O.length,C=new Uint8Array(M),N=0;N<M;N++)C[N]=O.charCodeAt(N);b(new Blob([C],{type:S||"image/png"}))}});// @license http://opensource.org/licenses/MIT
(function(){if("performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-b}}})();function u(b){return("0000000"+b).slice(-7)}var c=window.Date.now();function h(){function b(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b()}function p(b){var S={};this.settings=b,this.on=function(U,O){S[U]=O},this.emit=function(U){var O=S[U];O&&O.apply(null,Array.prototype.slice.call(arguments,1))},this.filename=b.name||h(),this.extension="",this.mimeType=""}p.prototype.start=function(){},p.prototype.stop=function(){},p.prototype.add=function(){},p.prototype.save=function(){},p.prototype.dispose=function(){},p.prototype.safeToProceed=function(){return!0},p.prototype.step=function(){console.log("Step not set!")};function _(b){p.call(this,b),this.extension=".tar",this.mimeType="application/x-tar",this.fileExtension="",this.tape=null,this.count=0}_.prototype=Object.create(p.prototype),_.prototype.start=function(){this.dispose()},_.prototype.add=function(b){var S=new FileReader;S.onload=(function(){this.tape.append(u(this.count)+this.fileExtension,new Uint8Array(S.result)),this.count++,this.step()}).bind(this),S.readAsArrayBuffer(b)},_.prototype.save=function(b){b(this.tape.save())},_.prototype.dispose=function(){this.tape=new Tar,this.count=0};function g(b){_.call(this,b),this.type="image/png",this.fileExtension=".png"}g.prototype=Object.create(_.prototype),g.prototype.add=function(b){b.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type)};function d(b){_.call(this,b),this.type="image/jpeg",this.fileExtension=".jpg",this.quality=b.quality/100||.8}d.prototype=Object.create(_.prototype),d.prototype.add=function(b){b.toBlob((function(S){_.prototype.add.call(this,S)}).bind(this),this.type,this.quality)};function m(b){var S=document.createElement("canvas");S.toDataURL("image/webp").substr(5,10)!=="image/webp"&&console.log("WebP not supported - try another export format"),p.call(this,b),this.quality=b.quality/100||.8,this.extension=".webm",this.mimeType="video/webm",this.baseFilename=this.filename,this.frames=[],this.part=1,this.videoWriter=new WebMWriter({quality:this.quality,fileWriter:null,fd:null,frameRate:b.framerate})}m.prototype=Object.create(p.prototype),m.prototype.start=function(b){this.dispose()},m.prototype.add=function(b){this.videoWriter.addFrame(b),this.settings.autoSaveTime>0&&this.frames.length/this.settings.framerate>=this.settings.autoSaveTime?this.save((function(S){this.filename=this.baseFilename+"-part-"+u(this.part),download(S,this.filename+this.extension,this.mimeType),this.dispose(),this.part++,this.filename=this.baseFilename+"-part-"+u(this.part),this.step()}).bind(this)):this.step()},m.prototype.save=function(b){this.videoWriter.complete().then(b)},m.prototype.dispose=function(b){this.frames=[]};function x(b){p.call(this,b),b.quality=b.quality/100||.8,this.encoder=new FFMpegServer.Video(b),this.encoder.on("process",(function(){this.emit("process")}).bind(this)),this.encoder.on("finished",(function(S,U){var O=this.callback;O&&(this.callback=void 0,O(S,U))}).bind(this)),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("error",(function(S){alert(JSON.stringify(S,null,2))}).bind(this))}x.prototype=Object.create(p.prototype),x.prototype.start=function(){this.encoder.start(this.settings)},x.prototype.add=function(b){this.encoder.add(b)},x.prototype.save=function(b){this.callback=b,this.encoder.end()},x.prototype.safeToProceed=function(){return this.encoder.safeToProceed()};function y(b){p.call(this,b),this.framerate=this.settings.framerate,this.type="video/webm",this.extension=".webm",this.stream=null,this.mediaRecorder=null,this.chunks=[]}y.prototype=Object.create(p.prototype),y.prototype.add=function(b){this.stream||(this.stream=b.captureStream(this.framerate),this.mediaRecorder=new MediaRecorder(this.stream),this.mediaRecorder.start(),this.mediaRecorder.ondataavailable=(function(S){this.chunks.push(S.data)}).bind(this)),this.step()},y.prototype.save=function(b){this.mediaRecorder.onstop=(function(S){var U=new Blob(this.chunks,{type:"video/webm"});this.chunks=[],b(U)}).bind(this),this.mediaRecorder.stop()};function T(b){p.call(this,b),b.quality=31-(b.quality*30/100||10),b.workers=b.workers||4,this.extension=".gif",this.mimeType="image/gif",this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.sizeSet=!1,this.encoder=new GIF({workers:b.workers,quality:b.quality,workerScript:b.workersPath+"gif.worker.js"}),this.encoder.on("progress",(function(S){this.settings.onProgress&&this.settings.onProgress(S)}).bind(this)),this.encoder.on("finished",(function(S){var U=this.callback;U&&(this.callback=void 0,U(S))}).bind(this))}T.prototype=Object.create(p.prototype),T.prototype.add=function(b){this.sizeSet||(this.encoder.setOption("width",b.width),this.encoder.setOption("height",b.height),this.sizeSet=!0),this.canvas.width=b.width,this.canvas.height=b.height,this.ctx.drawImage(b,0,0),this.encoder.addFrame(this.ctx,{copy:!0,delay:this.settings.step}),this.step()},T.prototype.save=function(b){this.callback=b,this.encoder.render()};function w(b){var S=b||{},U,O,M,C,N,fe,G,F=[],H=[],z=0,Q=0,V=[],ie=!1,se={};S.framerate=S.framerate||60,S.motionBlurFrames=2*(S.motionBlurFrames||1),U=S.verbose||!1,S.display,S.step=1e3/S.framerate,S.timeLimit=S.timeLimit||0,S.frameLimit=S.frameLimit||0,S.startTime=S.startTime||0;var ue=document.createElement("div");ue.style.position="absolute",ue.style.left=ue.style.top=0,ue.style.backgroundColor="black",ue.style.fontFamily="monospace",ue.style.fontSize="11px",ue.style.padding="5px",ue.style.color="red",ue.style.zIndex=1e5,S.display&&document.body.appendChild(ue);var X=document.createElement("canvas"),he=X.getContext("2d"),j,ce;Xe("Step is set to "+S.step+"ms");var xe={gif:T,webm:m,ffmpegserver:x,png:g,jpg:d,"webm-mediarecorder":y},we=xe[S.format];if(!we)throw"Error: Incorrect or missing format: Valid formats are "+Object.keys(xe).join(", ");if(G=new we(S),G.step=fe,G.on("process",Ge),G.on("progress",Ue),"performance"in window||(window.performance={}),Date.now=Date.now||function(){return new Date().getTime()},!("now"in window.performance)){var ve=Date.now();performance.timing&&performance.timing.navigationStart&&(ve=performance.timing.navigationStart),window.performance.now=function(){return Date.now()-ve}}var Se=window.setTimeout,ze=window.setInterval,Ae=window.clearInterval,Y=window.clearTimeout,He=window.requestAnimationFrame,Pe=window.Date.now,Oe=window.performance.now,Le=window.Date.prototype.getTime,Be=[];function Ne(){Xe("Capturer start"),M=window.Date.now(),z=0,O=M+S.startTime,N=window.performance.now(),C=N+S.startTime,window.Date.prototype.getTime=function(){return O},window.Date.now=function(){return O},window.setTimeout=function(A,te){var le={callback:A,time:te,triggerTime:O+te};return F.push(le),Xe("Timeout set to "+le.time),le},window.clearTimeout=function(A){for(var te=0;te<F.length;te++)if(F[te]==A){F.splice(te,1),Xe("Timeout cleared");continue}},window.setInterval=function(A,te){var le={callback:A,time:te,triggerTime:O+te};return H.push(le),Xe("Interval set to "+le.time),le},window.clearInterval=function(A){return Xe("clear Interval"),null},window.requestAnimationFrame=function(A){V.push(A)},window.performance.now=function(){return C};function me(){return this._hooked||(this._hooked=!0,this._hookedTime=this.currentTime||0,this.pause(),Be.push(this)),this._hookedTime+S.startTime}try{Object.defineProperty(HTMLVideoElement.prototype,"currentTime",{get:me}),Object.defineProperty(HTMLAudioElement.prototype,"currentTime",{get:me})}catch(A){Xe(A)}}function I(){Ne(),G.start(),ie=!0}function L(){ie=!1,G.stop(),oe()}function J(me,A){Se(me,0,A)}function fe(){J(Ge)}function oe(){Xe("Capturer stop"),window.setTimeout=Se,window.setInterval=ze,window.clearInterval=Ae,window.clearTimeout=Y,window.requestAnimationFrame=He,window.Date.prototype.getTime=Le,window.Date.now=Pe,window.performance.now=Oe}function _e(){var me=z/S.framerate;(S.frameLimit&&z>=S.frameLimit||S.timeLimit&&me>=S.timeLimit)&&(L(),de());var A=new Date(null);A.setSeconds(me),S.motionBlurFrames>2?ue.textContent="CCapture "+S.format+" | "+z+" frames ("+Q+" inter) | "+A.toISOString().substr(11,8):ue.textContent="CCapture "+S.format+" | "+z+" frames | "+A.toISOString().substr(11,8),window.ccaptureDisplayListener&&window.ccaptureDisplayListener(me.toFixed(2)+" seconds")}function De(me){(X.width!==me.width||X.height!==me.height)&&(X.width=me.width,X.height=me.height,j=new Uint16Array(X.height*X.width*4),he.fillStyle="#0",he.fillRect(0,0,X.width,X.height))}function ye(me){he.drawImage(me,0,0),ce=he.getImageData(0,0,X.width,X.height);for(var A=0;A<j.length;A+=4)j[A]+=ce.data[A],j[A+1]+=ce.data[A+1],j[A+2]+=ce.data[A+2];Q++}function Ee(){for(var me=ce.data,A=0;A<j.length;A+=4)me[A]=j[A]*2/S.motionBlurFrames,me[A+1]=j[A+1]*2/S.motionBlurFrames,me[A+2]=j[A+2]*2/S.motionBlurFrames;he.putImageData(ce,0,0),G.add(X),z++,Q=0,Xe("Full MB Frame! "+z+" "+O);for(var A=0;A<j.length;A+=4)j[A]=0,j[A+1]=0,j[A+2]=0;gc()}function Fe(me){ie&&(S.motionBlurFrames>2?(De(me),ye(me),Q>=.5*S.motionBlurFrames?Ee():fe()):(G.add(me),z++,Xe("Full Frame! "+z)))}function Ge(){var me=1e3/S.framerate,A=(z+Q/S.motionBlurFrames)*me;O=M+A,C=N+A,Be.forEach(function(le){le._hookedTime=A/1e3}),_e(),Xe("Frame: "+z+" "+Q);for(var te=0;te<F.length;te++)if(O>=F[te].triggerTime){J(F[te].callback),F.splice(te,1);continue}for(var te=0;te<H.length;te++)if(O>=H[te].triggerTime){J(H[te].callback),H[te].triggerTime+=H[te].time;continue}V.forEach(function(le){J(le,O-c)}),V=[]}function de(me){me||(me=function(A){return download(A,G.filename+G.extension,G.mimeType),!1}),G.save(me)}function Xe(me){U&&console.log(me)}function Ve(me,A){se[me]=A}function Ie(me){var A=se[me];A&&A.apply(null,Array.prototype.slice.call(arguments,1))}function Ue(me){Ie("progress",me)}return{start:I,capture:Fe,stop:L,save:de,on:Ve}}(s||l||{}).CCapture=w,typeof define=="function"&&typeof define.amd=="object"&&define.amd?define(function(){return w}):t&&n?(r&&((n.exports=w).CCapture=w),t.CCapture=w):f.CCapture=w})();function tg(i,e,t){const n=document.createElement("canvas"),r=n.getContext("2d"),a=256;if(n.width=a,n.height=a,!r)throw new Error("2D context not supported");const l=r.createRadialGradient(a/2,a/2,a*.2,a/2,a/2,a*.5);l.addColorStop(0,i),l.addColorStop(t,e),r.fillStyle=l,r.fillRect(0,0,a,a);const s=new Qa(n);return n.remove(),s}var Aa=!1,Fi;function ng(i){const e=window.innerWidth,t=window.innerHeight,n=new Jl;let r,a=0;const l=new Fm;l.background=tg("#666","#555",1);const s=new Xm(16777215,1);s.position.set(.2,1,0),s.castShadow=!0,s.shadow.mapSize.width=512*4,s.shadow.mapSize.height=512*4,s.shadow.camera.near=.5,s.shadow.camera.far=3,s.shadow.bias=-.02,l.add(s),l.add(new jm(16777215,2));const o=40,f=new Vt(0,e/t,.1,1e3);f.setFocalLength(o),f.position.set(0,3,1),f.lookAt(0,0,0),r=f.position.clone();const u=new Kl;u.shadowMap.enabled=!0,u.shadowMap.type=fl,u.setSize(e,t),u.toneMapping=pn,i.appendChild(u.domElement);const c=new j_(l,f),h=new X_(u),p=new K_(l,f,{focus:10,aperture:10*1e-5,maxblur:.008}),_=new Z_;h.addPass(c),h.addPass(p),h.addPass(_);const g=new eg({flipDuration:.5,yBetweenPages:.001,pageSubdivisions:20});g.scale.x=.8,l.add(g);function d(){requestAnimationFrame(d);let w=n.getDelta();g.animate(w),f.position.add(r.clone().sub(f.position).multiplyScalar(w*2)),h.render(),Aa&&Fi.capture(u.domElement)}d();function m(){const w=window.innerWidth,b=window.innerHeight;f.aspect=w/b,f.updateProjectionMatrix(),u.setSize(w,b),h.setSize(w,b)}function x(w){const b=new nt;b.x=w.clientX/window.innerWidth*2-1,b.y=-(w.clientY/window.innerHeight)*2+1,b.x<0&&g.currentPage>0||g.currentPage==g.totalPages?g.previousPage():g.nextPage(),console.log(g.currentPage,g.totalPages)}function y(w){a+=w.deltaY<0?1:-1,a<=0&&(r.x=0,r.z=1),f.setFocalLength(o+a)}function T(w){const b=new nt;b.x=w.clientX/window.innerWidth*2-1,b.y=-(w.clientY/window.innerHeight)*2+1,a>0&&(r.x=b.x/3,r.z=1+-b.y/3)}window.addEventListener("resize",m),u.domElement.addEventListener("click",x),u.domElement.addEventListener("mousemove",T),u.domElement.addEventListener("mousewheel",y),document.body.addEventListener("on:pages",w=>{console.log("PAGES EVENT:",w.detail),g.setPages(w.detail)}),document.body.addEventListener("book:goto",w=>{g.currentPage=w.detail}),document.body.addEventListener("record:start",w=>{Aa=!0,document.body.classList.add("recording"),Fi=new CCapture({framerate:24,format:"webm",motionBlurFrames:1,quality:100}),Fi.start()}),document.body.addEventListener("record:stop",w=>{Aa=!1,Fi.stop(),Fi.save(),document.body.classList.remove("recording")}),window.addEventListener("keydown",w=>{w.code==="Space"&&(f.setFocalLength(o),r.x=0,r.z=1,a=0)})}function ig(){return Ze(F_,{})}Lc(Ze(ig,{}),document.getElementById("app"));ng(document.getElementById("scene"))});export default rg();
