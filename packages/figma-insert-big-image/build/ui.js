(()=>{var Y=Object.defineProperty,_t=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,dt=Object.getOwnPropertyDescriptors,st=Object.getOwnPropertyNames,Z=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var Fe=(e,o,t)=>o in e?Y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,y=(e,o)=>{for(var t in o||(o={}))pe.call(o,t)&&Fe(e,t,o[t]);if(Z)for(var t of Z(o))ze.call(o,t)&&Fe(e,t,o[t]);return e},v=(e,o)=>_t(e,dt(o));var I=(e,o)=>{var t={};for(var r in e)pe.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))o.indexOf(r)<0&&ze.call(e,r)&&(t[r]=e[r]);return t};var g=(e,o)=>()=>(e&&(o=e(e=0)),o);var pt=(e,o)=>{for(var t in o)Y(e,t,{get:o[t],enumerable:!0})},mt=(e,o,t,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of st(o))!pe.call(e,i)&&i!==t&&Y(e,i,{get:()=>o[i],enumerable:!(r=ft(o,i))||r.enumerable});return e};var ut=e=>mt(Y({},"__esModule",{value:!0}),e);function B(e,o){for(var t in o)e[t]=o[t];return e}function Ke(e){var o=e.parentNode;o&&o.removeChild(e)}function l(e,o,t){var r,i,a,f={};for(a in o)a=="key"?r=o[a]:a=="ref"?i=o[a]:f[a]=o[a];if(arguments.length>2&&(f.children=arguments.length>3?ne.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)f[a]===void 0&&(f[a]=e.defaultProps[a]);return Q(e,f,r,i,null)}function Q(e,o,t,r,i){var a={type:e,props:o,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++Ge:i};return i==null&&x.vnode!=null&&x.vnode(a),a}function ae(e){return e.children}function ee(e,o){this.props=e,this.context=o}function O(e,o){if(o==null)return e.__?O(e.__,e.__.__k.indexOf(e)+1):null;for(var t;o<e.__k.length;o++)if((t=e.__k[o])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?O(e):null}function Xe(e){var o,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,o=0;o<e.__k.length;o++)if((t=e.__k[o])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Xe(e)}}function Ve(e){(!e.__d&&(e.__d=!0)&&U.push(e)&&!te.__r++||Re!==x.debounceRendering)&&((Re=x.debounceRendering)||$e)(te)}function te(){var e,o,t,r,i,a,f,d;for(U.sort(me);e=U.shift();)e.__d&&(o=U.length,r=void 0,i=void 0,f=(a=(t=e).__v).__e,(d=t.__P)&&(r=[],(i=B({},a)).__v=a.__v+1,xe(d,a,i,t.__n,d.ownerSVGElement!==void 0,a.__h!=null?[f]:null,r,f==null?O(a):f,a.__h),eo(r,a),a.__e!=f&&Xe(a)),U.length>o&&U.sort(me));te.__r=0}function Je(e,o,t,r,i,a,f,d,s,p){var n,m,_,c,u,E,h,k=r&&r.__k||qe,b=k.length;for(t.__k=[],n=0;n<o.length;n++)if((c=t.__k[n]=(c=o[n])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?Q(null,c,null,null,c):ue(c)?Q(ae,{children:c},null,null,null):c.__b>0?Q(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=t,c.__b=t.__b+1,(_=k[n])===null||_&&c.key==_.key&&c.type===_.type)k[n]=void 0;else for(m=0;m<b;m++){if((_=k[m])&&c.key==_.key&&c.type===_.type){k[m]=void 0;break}_=null}xe(e,c,_=_||oe,i,a,f,d,s,p),u=c.__e,(m=c.ref)&&_.ref!=m&&(h||(h=[]),_.ref&&h.push(_.ref,null,c),h.push(m,c.__c||u,c)),u!=null?(E==null&&(E=u),typeof c.type=="function"&&c.__k===_.__k?c.__d=s=Ze(c,s,e):s=Ye(e,c,_,k,u,s),typeof t.type=="function"&&(t.__d=s)):s&&_.__e==s&&s.parentNode!=e&&(s=O(_))}for(t.__e=E,n=b;n--;)k[n]!=null&&(typeof t.type=="function"&&k[n].__e!=null&&k[n].__e==t.__d&&(t.__d=Qe(r).nextSibling),to(k[n],k[n]));if(h)for(n=0;n<h.length;n++)oo(h[n],h[++n],h[++n])}function Ze(e,o,t){for(var r,i=e.__k,a=0;i&&a<i.length;a++)(r=i[a])&&(r.__=e,o=typeof r.type=="function"?Ze(r,o,t):Ye(t,r,r,i,r.__e,o));return o}function Ye(e,o,t,r,i,a){var f,d,s;if(o.__d!==void 0)f=o.__d,o.__d=void 0;else if(t==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(i),f=null;else{for(d=a,s=0;(d=d.nextSibling)&&s<r.length;s+=1)if(d==i)break e;e.insertBefore(i,a),f=a}return f!==void 0?f:i.nextSibling}function Qe(e){var o,t,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(o=e.__k.length-1;o>=0;o--)if((t=e.__k[o])&&(r=Qe(t)))return r}return null}function bt(e,o,t,r,i){var a;for(a in t)a==="children"||a==="key"||a in o||re(e,a,null,t[a],r);for(a in o)i&&typeof o[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||t[a]===o[a]||re(e,a,o[a],t[a],r)}function Oe(e,o,t){o[0]==="-"?e.setProperty(o,t==null?"":t):e[o]=t==null?"":typeof t!="number"||ht.test(o)?t:t+"px"}function re(e,o,t,r,i){var a;e:if(o==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(o in r)t&&o in t||Oe(e.style,o,"");if(t)for(o in t)r&&t[o]===r[o]||Oe(e.style,o,t[o])}else if(o[0]==="o"&&o[1]==="n")a=o!==(o=o.replace(/Capture$/,"")),o=o.toLowerCase()in e?o.toLowerCase().slice(2):o.slice(2),e.l||(e.l={}),e.l[o+a]=t,t?r||e.addEventListener(o,a?je:We,a):e.removeEventListener(o,a?je:We,a);else if(o!=="dangerouslySetInnerHTML"){if(i)o=o.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(o!=="width"&&o!=="height"&&o!=="href"&&o!=="list"&&o!=="form"&&o!=="tabIndex"&&o!=="download"&&o!=="rowSpan"&&o!=="colSpan"&&o in e)try{e[o]=t==null?"":t;break e}catch(f){}typeof t=="function"||(t==null||t===!1&&o[4]!=="-"?e.removeAttribute(o):e.setAttribute(o,t))}}function We(e){return this.l[e.type+!1](x.event?x.event(e):e)}function je(e){return this.l[e.type+!0](x.event?x.event(e):e)}function xe(e,o,t,r,i,a,f,d,s){var p,n,m,_,c,u,E,h,k,b,D,H,Pe,X,se,L=o.type;if(o.constructor!==void 0)return null;t.__h!=null&&(s=t.__h,d=o.__e=t.__e,o.__h=null,a=[d]),(p=x.__b)&&p(o);try{e:if(typeof L=="function"){if(h=o.props,k=(p=L.contextType)&&r[p.__c],b=p?k?k.props.value:p.__:r,t.__c?E=(n=o.__c=t.__c).__=n.__E:("prototype"in L&&L.prototype.render?o.__c=n=new L(h,b):(o.__c=n=new ee(h,b),n.constructor=L,n.render=vt),k&&k.sub(n),n.props=h,n.state||(n.state={}),n.context=b,n.__n=r,m=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),L.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=B({},n.__s)),B(n.__s,L.getDerivedStateFromProps(h,n.__s))),_=n.props,c=n.state,n.__v=o,m)L.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(L.getDerivedStateFromProps==null&&h!==_&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(h,b),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(h,n.__s,b)===!1||o.__v===t.__v){for(o.__v!==t.__v&&(n.props=h,n.state=n.__s,n.__d=!1),n.__e=!1,o.__e=t.__e,o.__k=t.__k,o.__k.forEach(function(J){J&&(J.__=o)}),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[],n.__h.length&&f.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(h,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(_,c,u)})}if(n.context=b,n.props=h,n.__P=e,H=x.__r,Pe=0,"prototype"in L&&L.prototype.render){for(n.state=n.__s,n.__d=!1,H&&H(o),p=n.render(n.props,n.state,n.context),X=0;X<n._sb.length;X++)n.__h.push(n._sb[X]);n._sb=[]}else do n.__d=!1,H&&H(o),p=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++Pe<25);n.state=n.__s,n.getChildContext!=null&&(r=B(B({},r),n.getChildContext())),m||n.getSnapshotBeforeUpdate==null||(u=n.getSnapshotBeforeUpdate(_,c)),Je(e,ue(se=p!=null&&p.type===ae&&p.key==null?p.props.children:p)?se:[se],o,t,r,i,a,f,d,s),n.base=o.__e,o.__h=null,n.__h.length&&f.push(n),E&&(n.__E=n.__=null),n.__e=!1}else a==null&&o.__v===t.__v?(o.__k=t.__k,o.__e=t.__e):o.__e=yt(t.__e,o,t,r,i,a,f,s);(p=x.diffed)&&p(o)}catch(J){o.__v=null,(s||a!=null)&&(o.__e=d,o.__h=!!s,a[a.indexOf(d)]=null),x.__e(J,o,t)}}function eo(e,o){x.__c&&x.__c(o,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){x.__e(r,t.__v)}})}function yt(e,o,t,r,i,a,f,d){var s,p,n,m=t.props,_=o.props,c=o.type,u=0;if(c==="svg"&&(i=!0),a!=null){for(;u<a.length;u++)if((s=a[u])&&"setAttribute"in s==!!c&&(c?s.localName===c:s.nodeType===3)){e=s,a[u]=null;break}}if(e==null){if(c===null)return document.createTextNode(_);e=i?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,_.is&&_),a=null,d=!1}if(c===null)m===_||d&&e.data===_||(e.data=_);else{if(a=a&&ne.call(e.childNodes),p=(m=t.props||oe).dangerouslySetInnerHTML,n=_.dangerouslySetInnerHTML,!d){if(a!=null)for(m={},u=0;u<e.attributes.length;u++)m[e.attributes[u].name]=e.attributes[u].value;(n||p)&&(n&&(p&&n.__html==p.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(bt(e,_,m,i,d),n)o.__k=[];else if(Je(e,ue(u=o.props.children)?u:[u],o,t,r,i&&c!=="foreignObject",a,f,a?a[0]:t.__k&&O(t,0),d),a!=null)for(u=a.length;u--;)a[u]!=null&&Ke(a[u]);d||("value"in _&&(u=_.value)!==void 0&&(u!==e.value||c==="progress"&&!u||c==="option"&&u!==m.value)&&re(e,"value",u,m.value,!1),"checked"in _&&(u=_.checked)!==void 0&&u!==e.checked&&re(e,"checked",u,m.checked,!1))}return e}function oo(e,o,t){try{typeof e=="function"?e(o):e.current=o}catch(r){x.__e(r,t)}}function to(e,o,t){var r,i;if(x.unmount&&x.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||oo(r,null,o)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(a){x.__e(a,o)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&to(r[i],o,t||typeof e.type!="function");t||e.__e==null||Ke(e.__e),e.__=e.__e=e.__d=void 0}function vt(e,o,t){return this.constructor(e,t)}function ro(e,o,t){var r,i,a;x.__&&x.__(e,o),i=(r=typeof t=="function")?null:t&&t.__k||o.__k,a=[],xe(o,e=(!r&&t||o).__k=l(ae,null,[e]),i||oe,oe,o.ownerSVGElement!==void 0,!r&&t?[t]:i?null:o.firstChild?ne.call(o.childNodes):null,a,!r&&t?t:i?i.__e:o.firstChild,r),eo(a,e)}var ne,x,Ge,xt,U,Re,$e,me,gt,oe,qe,ht,ue,A=g(()=>{oe={},qe=[],ht=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ue=Array.isArray;ne=qe.slice,x={__e:function(e,o,t,r){for(var i,a,f;o=o.__;)if((i=o.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),f=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),f=i.__d),f)return i.__E=i}catch(d){e=d}throw e}},Ge=0,xt=function(e){return e!=null&&e.constructor===void 0},ee.prototype.setState=function(e,o){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=B({},this.state),typeof e=="function"&&(e=e(B({},t),this.props)),e&&B(t,e),e!=null&&this.__v&&(o&&this._sb.push(o),Ve(this))},ee.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ve(this))},ee.prototype.render=ae,U=[],$e=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,me=function(e,o){return e.__v.__b-o.__v.__b},te.__r=0,gt=0});function M(e){return e.filter(function(o){return o!==null}).join(" ")}var W=g(()=>{});function be(e,o){x.__h&&x.__h(w,e,le||o),le=0;var t=w.__H||(w.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:ie}),t.__[e]}function R(e){return le=1,It(mo,e)}function It(e,o,t){var r=be(j++,2);if(r.t=e,!r.__c&&(r.__=[t?t(o):mo(void 0,o),function(d){var s=r.__N?r.__N[0]:r.__[0],p=r.t(s,d);s!==p&&(r.__N=[p,r.__[1]],r.__c.setState({}))}],r.__c=w,!w.u)){var i=function(d,s,p){if(!r.__c.__H)return!0;var n=r.__c.__H.__.filter(function(_){return _.__c});if(n.every(function(_){return!_.__N}))return!a||a.call(this,d,s,p);var m=!1;return n.forEach(function(_){if(_.__N){var c=_.__[0];_.__=_.__N,_.__N=void 0,c!==_.__[0]&&(m=!0)}}),!(!m&&r.__c.props===d)&&(!a||a.call(this,d,s,p))};w.u=!0;var a=w.shouldComponentUpdate,f=w.componentWillUpdate;w.componentWillUpdate=function(d,s,p){if(this.__e){var n=a;a=void 0,i(d,s,p),a=n}f&&f.call(this,d,s,p)},w.shouldComponentUpdate=i}return r.__N||r.__}function V(e,o){var t=be(j++,3);!x.__s&&po(t.__H,o)&&(t.__=e,t.i=o,w.__H.__h.push(t))}function Ct(e,o){var t=be(j++,7);return po(t.__H,o)?(t.__V=e(),t.i=o,t.__h=e,t.__V):t.__}function C(e,o){return le=8,Ct(function(){return e},o)}function kt(){for(var e;e=so.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ce),e.__H.__h.forEach(he),e.__H.__h=[]}catch(o){e.__H.__h=[],x.__e(o,e.__v)}}function wt(e){var o,t=function(){clearTimeout(r),fo&&cancelAnimationFrame(o),setTimeout(e)},r=setTimeout(t,100);fo&&(o=requestAnimationFrame(t))}function ce(e){var o=w,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),w=o}function he(e){var o=w;e.__c=e.__(),w=o}function po(e,o){return!e||e.length!==o.length||o.some(function(t,r){return t!==e[r]})}function mo(e,o){return typeof o=="function"?o(e):o}var j,w,ge,no,le,so,ie,ao,io,co,lo,_o,fo,P=g(()=>{A();le=0,so=[],ie=[],ao=x.__b,io=x.__r,co=x.diffed,lo=x.__c,_o=x.unmount;x.__b=function(e){w=null,ao&&ao(e)},x.__r=function(e){io&&io(e),j=0;var o=(w=e.__c).__H;o&&(ge===w?(o.__h=[],w.__h=[],o.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=ie,t.__N=t.i=void 0})):(o.__h.forEach(ce),o.__h.forEach(he),o.__h=[],j=0)),ge=w},x.diffed=function(e){co&&co(e);var o=e.__c;o&&o.__H&&(o.__H.__h.length&&(so.push(o)!==1&&no===x.requestAnimationFrame||((no=x.requestAnimationFrame)||wt)(kt)),o.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==ie&&(t.__=t.__V),t.i=void 0,t.__V=ie})),ge=w=null},x.__c=function(e,o){o.some(function(t){try{t.__h.forEach(ce),t.__h=t.__h.filter(function(r){return!r.__||he(r)})}catch(r){o.some(function(i){i.__h&&(i.__h=[])}),o=[],x.__e(r,t.__v)}}),lo&&lo(e,o)},x.unmount=function(e){_o&&_o(e);var o,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{ce(r)}catch(i){o=i}}),t.__H=void 0,o&&x.__e(o,t.__v))};fo=typeof requestAnimationFrame=="function"});var ye,uo=g(()=>{if(document.getElementById("8d769924f1")===null){let e=document.createElement("style");e.id="8d769924f1",e.textContent="._loadingIndicator_pl5c3_1{height:16px;margin:0 auto;position:relative;width:16px}._svg_pl5c3_8{fill:currentColor;animation:_rotating_pl5c3_1 .5s linear infinite;height:16px;left:0;position:absolute;top:0;width:16px}@keyframes _rotating_pl5c3_1{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",document.head.append(e)}ye={loadingIndicator:"_loadingIndicator_pl5c3_1",svg:"_svg_pl5c3_8",rotating:"_rotating_pl5c3_1"}});function G(t){var r=t,{color:e}=r,o=I(r,["color"]);return l("div",v(y({},o),{class:ye.loadingIndicator}),l("svg",{class:ye.svg,style:typeof e>"u"?void 0:{fill:`var(--figma-color-icon-${e})`}},l("path",{d:"M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z"})))}var ve=g(()=>{A();uo()});var xo,go=g(()=>{if(document.getElementById("5eec170d36")===null){let e=document.createElement("style");e.id="5eec170d36",e.textContent="._icon_13804_1{fill:currentColor}",document.head.append(e)}xo={icon:"_icon_13804_1"}});function ho(e,o){let{width:t,height:r}=o;return function(d){var s=d,{color:a}=s,f=I(s,["color"]);return l("svg",v(y({},f),{class:xo.icon,height:r,style:typeof a>"u"?void 0:{fill:`var(--figma-color-icon-${a})`},width:t,xmlns:"http://www.w3.org/2000/svg"}),l("path",{"clip-rule":"evenodd",d:e,"fill-rule":"evenodd"}))}}var bo=g(()=>{A();go()});var yo,vo=g(()=>{bo();yo=ho("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z",{height:12,width:12})});var N,Io=g(()=>{if(document.getElementById("73ba73131b")===null){let e=document.createElement("style");e.id="73ba73131b",e.textContent=`._checkbox_1a43f_1{position:relative;z-index:var(--z-index-1)}._input_1a43f_6{bottom:-8px;display:block;left:-16px;position:absolute;right:-16px;top:-8px;width:calc(100% + 32px);z-index:var(
    --z-index-1
  )}._disabled_1a43f_18 ._input_1a43f_6{cursor:not-allowed}._border_1a43f_23,._fill_1a43f_22{border-radius:var(--border-radius-2);height:12px;left:0;position:absolute;top:0;width:12px}._border_1a43f_23{border:1px solid var(--figma-color-border-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus~._border_1a43f_23{border-color:var(--figma-color-border-brand-strong);box-shadow:0 0 0 1px var(--figma-color-border-brand-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus~._border_1a43f_23{box-shadow:0 0 0 1px var(--figma-color-bg),0 0 0 2px var(--figma-color-border-brand-strong)}._disabled_1a43f_18 ._input_1a43f_6~._border_1a43f_23{border-color:var(--figma-color-border-disabled-strong)}._disabled_1a43f_18 ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-brand)}._disabled_1a43f_18 ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-disabled)}._checkIcon_1a43f_60{color:var(--figma-color-icon-onbrand)}._disabled_1a43f_18 ._checkIcon_1a43f_60{color:var(--figma-color-icon-ondisabled)}._children_1a43f_67{color:var(--figma-color-text);min-height:12px;padding:2px 0 0 20px}._disabled_1a43f_18 ._children_1a43f_67{opacity:var(--opacity-30)}`,document.head.append(e)}N={checkbox:"_checkbox_1a43f_1",input:"_input_1a43f_6",disabled:"_disabled_1a43f_18",fill:"_fill_1a43f_22",border:"_border_1a43f_23",checkIcon:"_checkIcon_1a43f_60",children:"_children_1a43f_67"}});function Ie(s){var p=s,{children:e,disabled:o=!1,name:t,onChange:r=function(){},onValueChange:i=function(){},propagateEscapeKeyDown:a=!0,value:f=!1}=p,d=I(p,["children","disabled","name","onChange","onValueChange","propagateEscapeKeyDown","value"]);let n=C(function(_){let c=_.currentTarget.checked;i(c,t),r(_)},[t,r,i]),m=C(function(_){_.key==="Escape"&&(a===!1&&_.stopPropagation(),_.currentTarget.blur())},[a]);return l("label",{class:M([N.checkbox,o===!0?N.disabled:null])},l("input",v(y({},d),{checked:f===!0,class:N.input,disabled:o===!0,name:t,onChange:n,onKeyDown:m,tabIndex:o===!0?-1:0,type:"checkbox"})),l("div",{class:N.fill},f===!0?l("div",{class:N.checkIcon},l(yo,null)):null),l("div",{class:N.border}),l("div",{class:N.children},e))}var Co=g(()=>{A();P();vo();W();Io()});var T,ko=g(()=>{if(document.getElementById("b711d1401d")===null){let e=document.createElement("style");e.id="b711d1401d",e.textContent="._button_5fxgc_1{display:inline-block;position:relative;z-index:var(--z-index-1)}._fullWidth_5fxgc_7{display:block}._button_5fxgc_1 button{border-radius:var(--border-radius-6);display:inline-block;height:32px}._disabled_5fxgc_17 button{cursor:not-allowed}._fullWidth_5fxgc_7 button{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}._default_5fxgc_29 button{background-color:var(--figma-color-bg-brand);border:2px solid transparent;color:var(--figma-color-text-onbrand);line-height:28px;padding:0 14px}._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong)}._default_5fxgc_29._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 button{background-color:var(--figma-color-bg-danger);color:var(--figma-color-text-ondanger)}._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._secondary_5fxgc_56 button{background-color:transparent;border:1px solid var(--figma-color-border-strong);color:var(--figma-color-text);line-height:30px;padding:0 15px}._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong);border-width:2px;line-height:28px;padding:0 14px}._secondary_5fxgc_56._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 button{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44 button,._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._loadingIndicator_5fxgc_86{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}._default_5fxgc_29 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-onbrand)}._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondanger)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text)}._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._children_5fxgc_122{display:inline}._loading_5fxgc_86 ._children_5fxgc_122{visibility:hidden}",document.head.append(e)}T={button:"_button_5fxgc_1",fullWidth:"_fullWidth_5fxgc_7",disabled:"_disabled_5fxgc_17",default:"_default_5fxgc_29",danger:"_danger_5fxgc_44",secondary:"_secondary_5fxgc_56",loadingIndicator:"_loadingIndicator_5fxgc_86",children:"_children_5fxgc_122",loading:"_loading_5fxgc_86"}});function _e(e,o){let t=e.name.toLowerCase(),r=o.name.toLowerCase();return t!==r?t.localeCompare(r):e.lastModified-o.lastModified}var Ce=g(()=>{});var $,wo=g(()=>{if(document.getElementById("e1f0590c3f")===null){let e=document.createElement("style");e.id="e1f0590c3f",e.textContent="._input_1hjkt_1{bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;width:100%}._default_1hjkt_11:not(._disabled_1hjkt_11) ._input_1hjkt_1:focus~button{border-color:var(--figma-color-border-brand-strong)}._secondary_1hjkt_15:not(._disabled_1hjkt_11) ._input_1hjkt_1:focus~button{border-color:var(--figma-color-border-brand-strong);border-width:2px;line-height:28px;padding:0 14px}",document.head.append(e)}$={input:"_input_1hjkt_1",default:"_default_1hjkt_11",disabled:"_disabled_1hjkt_11",secondary:"_secondary_1hjkt_15"}});function ke(n){var m=n,{acceptedFileTypes:e,children:o,disabled:t=!1,fullWidth:r=!1,loading:i=!1,multiple:a=!1,onSelectedFiles:f,propagateEscapeKeyDown:d=!0,secondary:s=!1}=m,p=I(m,["acceptedFileTypes","children","disabled","fullWidth","loading","multiple","onSelectedFiles","propagateEscapeKeyDown","secondary"]);let _=C(function(h){if(typeof f>"u")return;let k=Array.prototype.slice.call(h.currentTarget.files).sort(_e);f(k)},[f]),c=C(function(h){if(t===!0||i===!0){h.preventDefault();return}h.currentTarget.focus()},[t,i]),u=C(function(h){h.key==="Escape"&&(d===!1&&h.stopPropagation(),h.currentTarget.blur())},[d]),E=C(function(h){h.preventDefault(),h.currentTarget.focus()},[]);return l("div",{class:M([T.button,s===!0?T.secondary:T.default,s===!0?$.secondary:$.default,r===!0?T.fullWidth:null,t===!0?T.disabled:null,t===!0?$.disabled:null,i===!0?T.loading:null])},i===!0?l("div",{class:T.loadingIndicator},l(G,null)):null,l("input",v(y({},p),{accept:typeof e>"u"?void 0:e.join(","),class:$.input,disabled:t===!0,multiple:a,onChange:t===!0||i===!0?void 0:_,onClick:c,onKeyDown:t===!0||i===!0?void 0:u,onMouseDown:i===!0?E:void 0,tabIndex:t===!0?-1:0,title:"",type:"file"})),l("button",{disabled:t===!0,tabIndex:-1},l("div",{class:T.children},o)))}var Ao=g(()=>{A();P();W();ko();ve();Ce();wo()});var F,Eo=g(()=>{if(document.getElementById("4dfde08371")===null){let e=document.createElement("style");e.id="4dfde08371",e.textContent=`._fileUploadDropzone_111vt_1{padding:32px 0;position:relative;width:100%;z-index:var(--z-index-1)}._isDropActive_111vt_8{background-color:var(--figma-color-bg-selected-secondary)}._border_111vt_13,._input_111vt_12{bottom:0;left:0;position:absolute;right:0;top:0}._input_111vt_12{display:block;opacity:0;z-index:var(
    --z-index-1
  )}._border_111vt_13{border:1px dashed var(--figma-color-border)}._input_111vt_12:active~._border_111vt_13,._input_111vt_12:focus~._border_111vt_13,._isDropActive_111vt_8 ._border_111vt_13{border-color:var(--figma-color-border-brand-strong)}._children_111vt_38{text-align:center}`,document.head.append(e)}F={fileUploadDropzone:"_fileUploadDropzone_111vt_1",isDropActive:"_isDropActive_111vt_8",input:"_input_111vt_12",border:"_border_111vt_13",children:"_children_111vt_38"}});function we(f){var d=f,{acceptedFileTypes:e,children:o,multiple:t=!1,onSelectedFiles:r,propagateEscapeKeyDown:i=!0}=d,a=I(d,["acceptedFileTypes","children","multiple","onSelectedFiles","propagateEscapeKeyDown"]);let[s,p]=R(!1),n=C(function(b){let D=Array.prototype.slice.call(b).sort(_e);return typeof e>"u"?D:D.filter(function(H){return e.indexOf(H.type)!==-1})},[e]),m=C(function(){p(!1)},[]),_=C(function(b){if(typeof r>"u")return;let D=b.currentTarget.files;r(n(D))},[n,r]),c=C(function(b){b.preventDefault()},[]),u=C(function(b){b.preventDefault(),p(!0)},[]),E=C(function(b){b.preventDefault(),p(!1)},[]),h=C(function(b){if(typeof r>"u")return;if(b.preventDefault(),b.dataTransfer===null)throw new Error("`event.dataTransfer` is `null`");let D=n(b.dataTransfer.files);r(D),p(!1)},[n,r]),k=C(function(b){b.key==="Escape"&&(i===!1&&b.stopPropagation(),b.currentTarget.blur())},[i]);return l("div",{class:M([F.fileUploadDropzone,s===!0?F.isDropActive:null])},l("input",v(y({},a),{accept:typeof e>"u"?void 0:e.join(","),class:F.input,multiple:t,onBlur:m,onChange:_,onDragEnd:E,onDragEnter:c,onDragOver:u,onDrop:h,onKeyDown:k,tabIndex:0,title:"",type:"file"})),l("div",{class:F.fill}),l("div",{class:F.border}),l("div",{class:F.children},o))}var Lo=g(()=>{A();P();W();Ce();Eo()});var fe,Do=g(()=>{if(document.getElementById("5d5845ed91")===null){let e=document.createElement("style");e.id="5d5845ed91",e.textContent='._text_mh6mm_1{color:var(--figma-color-text);padding-top:1px;pointer-events:none;transform:translateY(4px)}._text_mh6mm_1:before{content:"";display:block;height:0;margin-top:-9px;pointer-events:none}._numeric_mh6mm_15{font-variant-numeric:tabular-nums}._left_mh6mm_19{text-align:left}._center_mh6mm_22{text-align:center}._right_mh6mm_25{text-align:right}',document.head.append(e)}fe={text:"_text_mh6mm_1",numeric:"_numeric_mh6mm_15",left:"_left_mh6mm_19",center:"_center_mh6mm_22",right:"_right_mh6mm_25"}});function z(i){var a=i,{align:e="left",children:o,numeric:t=!1}=a,r=I(a,["align","children","numeric"]);return l("div",v(y({},r),{class:M([fe.text,fe[e],t===!0?fe.numeric:null])}),o)}var So=g(()=>{A();W();Do()});function Ae(e,o){let t=`${To}`;return To+=1,q[t]={handler:o,name:e},function(){delete q[t]}}function Bo(e,o){for(let t in q)q[t].name===e&&q[t].handler.apply(null,o)}var q,To,K,Mo=g(()=>{q={},To=0;K=typeof window>"u"?function(e,...o){figma.ui.postMessage([e,...o])}:function(e,...o){window.parent.postMessage({pluginMessage:[e,...o]},"*")};typeof window>"u"?figma.ui.onmessage=function([e,...o]){Bo(e,o)}:window.onmessage=function(e){if(typeof e.data.pluginMessage>"u")return;let[o,...t]=e.data.pluginMessage;Bo(o,t)}});var No=g(()=>{Mo()});function Le(){return V(function(){let e=document.querySelectorAll(`[${Ee}]:not([tabindex="-1"]`);if(e.length===0)throw new Error(`No element with attribute \`${Ee}\``);if(e.length>1){let o=Array.prototype.slice.call(e).find(function(t){let r=t;return r.type==="radio"&&r.checked===!0});if(typeof o<"u"){o.focus();return}}e[0].focus()},[]),{[Ee]:!0}}var Ee,Ho=g(()=>{P();Ee="data-initial-focus"});function De(e,o){let t=C(function(r){r.key===e&&o(r)},[e,o]);V(function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}},[t])}var Uo=g(()=>{P()});var Po,Fo=g(()=>{if(document.getElementById("e845279316")===null){let e=document.createElement("style");e.id="e845279316",e.textContent="._bold_72210_1{font-weight:var(--font-weight-bold)}",document.head.append(e)}Po={bold:"_bold_72210_1"}});function Se(t){var r=t,{children:e}=r,o=I(r,["children"]);return l("strong",v(y({},o),{class:Po.bold}),e)}var zo=g(()=>{A();Fo()});var Ro,Vo=g(()=>{if(document.getElementById("faf1a8d9ee")===null){let e=document.createElement("style");e.id="faf1a8d9ee",e.textContent="._muted_139yx_1{color:var(--figma-color-text-secondary)}",document.head.append(e)}Ro={muted:"_muted_139yx_1"}});function de(t){var r=t,{children:e}=r,o=I(r,["children"]);return l("span",v(y({},o),{class:Ro.muted}),e)}var Oo=g(()=>{A();Vo()});var Wo,jo=g(()=>{if(document.getElementById("7d8083f24b")===null){let e=document.createElement("style");e.id="7d8083f24b",e.textContent="._extraSmall_1oe77_1{padding:0 var(--space-extra-small)}._small_1oe77_4{padding:0 var(--space-small)}._medium_1oe77_7{padding:0 var(--space-medium)}._large_1oe77_10{padding:0 var(--space-large)}._extraLarge_1oe77_13{padding:0 var(--space-extra-large)}",document.head.append(e)}Wo={extraSmall:"_extraSmall_1oe77_1",small:"_small_1oe77_4",medium:"_medium_1oe77_7",large:"_large_1oe77_10",extraLarge:"_extraLarge_1oe77_13"}});function Te(t){var r=t,{space:e}=r,o=I(r,["space"]);return l("div",v(y({},o),{class:Wo[e]}))}var Go=g(()=>{A();jo()});var Be,$o=g(()=>{if(document.getElementById("cf95c54722")===null){let e=document.createElement("style");e.id="cf95c54722",e.textContent="._middleAlign_294f9_1{align-items:center;display:flex;height:100%;justify-content:center}._children_294f9_8{display:block}",document.head.append(e)}Be={middleAlign:"_middleAlign_294f9_1",children:"_children_294f9_8"}});function Me(t){var r=t,{children:e}=r,o=I(r,["children"]);return l("div",v(y({},o),{class:Be.middleAlign}),l("div",{class:Be.children},e))}var qo=g(()=>{A();$o()});var Ko,Xo=g(()=>{if(document.getElementById("89d2751efa")===null){let e=document.createElement("style");e.id="89d2751efa",e.textContent="._extraSmall_zc4n0_1{height:var(--space-extra-small)}._small_zc4n0_4{height:var(--space-small)}._medium_zc4n0_7{height:var(--space-medium)}._large_zc4n0_10{height:var(--space-large)}._extraLarge_zc4n0_13{height:var(--space-extra-large)}",document.head.append(e)}Ko={extraSmall:"_extraSmall_zc4n0_1",small:"_small_zc4n0_4",medium:"_medium_zc4n0_7",large:"_large_zc4n0_10",extraLarge:"_extraLarge_zc4n0_13"}});function S(t){var r=t,{space:e}=r,o=I(r,["space"]);return l("div",v(y({},o),{class:Ko[e]}))}var Jo=g(()=>{A();Xo()});var Zo=g(()=>{if(document.getElementById("7c137fcf3f")===null){let e=document.createElement("style");e.id="7c137fcf3f",e.textContent='@import url("https://fonts.googleapis.com/css?family=Inter:400,600&display=swap");:root{--border-radius-2:2px;--border-radius-6:6px;--box-shadow:var(--box-shadow-menu);--box-shadow-menu:0 5px 17px rgba(0,0,0,.2),0 2px 7px rgba(0,0,0,.15),inset 0 0 0 0.5px #000,0 0 0 0.5px rgba(0,0,0,.1);--box-shadow-modal:0 2px 14px rgba(0,0,0,.15),0 0 0 0.5px rgba(0,0,0,.2);--font-family:"Inter","Helvetica",sans-serif;--font-family-code:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--font-size-11:11px;--font-size-12:12px;--font-weight-regular:400;--font-weight-bold:600;--line-height-16:16px;--opacity-30:0.3;--space-extra-small:8px;--space-small:12px;--space-medium:16px;--space-large:20px;--space-extra-large:24px;--z-index-1:1;--z-index-2:2}.figma-dark{color-scheme:dark}*{border:0 solid;box-sizing:border-box}body{background-color:var(--figma-color-bg);color:var(--figma-color-text);font-family:var(--font-family);font-size:var(--font-size-11);font-weight:var(--font-weight-regular);line-height:var(--line-height-16);margin:0}div,span{cursor:default;user-select:none}h1,h2,h3{font-weight:inherit;margin:0}button{-webkit-appearance:none;background-color:transparent;border:0;font:inherit;outline:0;padding:0}hr{border:0;margin:0}label{display:block}input,textarea{-webkit-appearance:none;border:0;cursor:default;font:inherit;margin:0;outline:0;padding:0}svg{display:block}::selection{background-color:var(--figma-color-bg-onselected)}',document.head.prepend(e)}});function Ne(e){return function(o,t){ro(l(e,y({},t)),o)}}var Yo=g(()=>{Zo();A()});var He=g(()=>{Co();Ao();Lo();ve();So();Ho();Uo();zo();Oo();Go();qo();Jo();Yo()});async function ot(e){let o=await At(e),t=et(o.width),r=et(o.height);return Et(o,t,r)}async function At(e){return new Promise(function(o,t){let r=new Image;r.onload=function(){o(r)},r.onerror=t,r.src=URL.createObjectURL(e)})}function et(e){if(e<=Qo)return[e];let o=1,t;do o++,t=Math.floor(e/o);while(t>=Qo);let r=e%t,i=Array(o-1).fill(t);return i.push(t+r),i}async function Et(e,o,t){let r=document.createElement("div");document.body.appendChild(r),r.style.cssText="position: absolute; pointer-events: none; visibility: hidden; overflow: hidden;";let a=tt(e.width,e.height,r).getContext("2d");a.drawImage(e,0,0);let f=[],d=0;for(let s of t){let p=0;for(let n of o){let m=a.getImageData(p,d,n,s);f.push(Lt(m,p,d,n,s,r)),p+=n}d+=s}return Promise.all(f.reverse())}async function Lt(e,o,t,r,i,a){let f=tt(r,i,a);f.getContext("2d").putImageData(e,0,0);let d=await new Promise(function(s,p){f.toBlob(function(n){let m=new FileReader;m.onload=function(){s({bytes:new Uint8Array(m.result),height:i,width:r,x:o,y:t})},m.onerror=p,m.readAsArrayBuffer(n)})});return a.removeChild(f),d}function tt(e,o,t){let r=document.createElement("canvas");return t.appendChild(r),r.width=e,r.height=o,r.style.cssText="position: absolute;",r}var Qo,rt=g(()=>{"use strict";Qo=4096});function nt(e){let[o,t]=R(e.insertAs2x),[r,i]=R(0),[a,f]=R(0);De("Escape",function(){a>0||K("CLOSE_UI")});let d=C(async function(m){let _=m.length;f(_);let c=0;for(let u of m){let E=await ot(u),h=Dt(u.name);K("INSERT_BIG_IMAGE",E,{done:c===_-1,name:h}),i(c),c+=1}},[i,f]);V(function(){return Ae("DROP_IMAGES",async function(m){let _=[];for(let c of m){let u=new Blob([c.bytes],{type:c.type}),E=new File([u],c.name);_.push(E)}await d(_)})},[d]);let s=C(async function(m){t(m),K("SAVE_SETTINGS",m)},[]),p=Le();if(a>0)return l(Me,null,l(G,{color:"brand"}),l(S,{space:"small"}),l(z,{align:"center",numeric:!0},a===1?"Inserting image\u2026":`Inserting image ${r+1} of ${a}\u2026`),l(S,{space:"extraLarge"}));let n=["image/jpeg","image/png"];return l(Te,{space:"medium"},l(S,{space:"medium"}),l(we,{acceptedFileTypes:n,multiple:!0,onSelectedFiles:d},l(z,{align:"center"},l(Se,null,"Drop images on the canvas")),l(S,{space:"small"}),l(z,{align:"center"},l(de,null,"or")),l(S,{space:"small"}),l(ke,v(y({},p),{acceptedFileTypes:n,multiple:!0,onSelectedFiles:d}),"Choose Image Files"),l(S,{space:"medium"}),l(z,{align:"center"},l(de,null,"Supported formats: JPEG, PNG"))),l(S,{space:"medium"}),l(Ie,{name:"insertAs2x",onValueChange:s,value:o},l(z,null,"Insert as a @2x image")),l(S,{space:"medium"}))}function Dt(e){return e.substring(0,e.lastIndexOf("."))}var at=g(()=>{"use strict";He();No();A();P();rt()});var it={};pt(it,{default:()=>St});var St,ct=g(()=>{"use strict";He();at();St=Ne(nt)});var Tt=document.getElementById("create-figma-plugin"),lt={"src/main.ts--default":(ct(),ut(it)).default},Ue=__FIGMA_COMMAND__===""?"src/main.ts--default":__FIGMA_COMMAND__;if(typeof lt[Ue]>"u")throw new Error("No UI defined for command `"+Ue+"`");lt[Ue](Tt,__SHOW_UI_DATA__);})();
