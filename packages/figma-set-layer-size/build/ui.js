(()=>{var le=Object.defineProperty,Zr=Object.defineProperties,Qr=Object.getOwnPropertyDescriptor,et=Object.getOwnPropertyDescriptors,ot=Object.getOwnPropertyNames,ce=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,oo=Object.prototype.propertyIsEnumerable;var eo=(e,o,r)=>o in e?le(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,v=(e,o)=>{for(var r in o||(o={}))Le.call(o,r)&&eo(e,r,o[r]);if(ce)for(var r of ce(o))oo.call(o,r)&&eo(e,r,o[r]);return e},I=(e,o)=>Zr(e,et(o));var w=(e,o)=>{var r={};for(var t in e)Le.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&ce)for(var t of ce(e))o.indexOf(t)<0&&oo.call(e,t)&&(r[t]=e[t]);return r};var p=(e,o)=>()=>(e&&(o=e(e=0)),o);var rt=(e,o)=>{for(var r in o)le(e,r,{get:o[r],enumerable:!0})},tt=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of ot(o))!Le.call(e,a)&&a!==r&&le(e,a,{get:()=>o[a],enumerable:!(t=Qr(o,a))||t.enumerable});return e};var nt=e=>tt(le({},"__esModule",{value:!0}),e);function W(e,o){for(var r in o)e[r]=o[r];return e}function fo(e){var o=e.parentNode;o&&o.removeChild(e)}function f(e,o,r){var t,a,n,_={};for(n in o)n=="key"?t=o[n]:n=="ref"?a=o[n]:_[n]=o[n];if(arguments.length>2&&(_.children=arguments.length>3?pe.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)_[n]===void 0&&(_[n]=e.defaultProps[n]);return _e(e,_,t,a,null)}function _e(e,o,r,t,a){var n={type:e,props:o,key:r,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:a==null?++co:a};return a==null&&x.vnode!=null&&x.vnode(n),n}function xe(e){return e.children}function fe(e,o){this.props=e,this.context=o}function oe(e,o){if(o==null)return e.__?oe(e.__,e.__.__k.indexOf(e)+1):null;for(var r;o<e.__k.length;o++)if((r=e.__k[o])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?oe(e):null}function so(e){var o,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,o=0;o<e.__k.length;o++)if((r=e.__k[o])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return so(e)}}function to(e){(!e.__d&&(e.__d=!0)&&X.push(e)&&!de.__r++||ro!==x.debounceRendering)&&((ro=x.debounceRendering)||lo)(de)}function de(){var e,o,r,t,a,n,_,s;for(X.sort(Te);e=X.shift();)e.__d&&(o=X.length,t=void 0,a=void 0,_=(n=(r=e).__v).__e,(s=r.__P)&&(t=[],(a=W({},n)).__v=n.__v+1,Ne(s,n,a,r.__n,s.ownerSVGElement!==void 0,n.__h!=null?[_]:null,t,_==null?oe(n):_,n.__h),go(t,n),n.__e!=_&&so(n)),X.length>o&&X.sort(Te));de.__r=0}function uo(e,o,r,t,a,n,_,s,d,m){var i,g,l,c,u,h,y,E=t&&t.__k||_o,L=E.length;for(r.__k=[],i=0;i<o.length;i++)if((c=r.__k[i]=(c=o[i])==null||typeof c=="boolean"||typeof c=="function"?null:typeof c=="string"||typeof c=="number"||typeof c=="bigint"?_e(null,c,null,null,c):me(c)?_e(xe,{children:c},null,null,null):c.__b>0?_e(c.type,c.props,c.key,c.ref?c.ref:null,c.__v):c)!=null){if(c.__=r,c.__b=r.__b+1,(l=E[i])===null||l&&c.key==l.key&&c.type===l.type)E[i]=void 0;else for(g=0;g<L;g++){if((l=E[g])&&c.key==l.key&&c.type===l.type){E[g]=void 0;break}l=null}Ne(e,c,l=l||se,a,n,_,s,d,m),u=c.__e,(g=c.ref)&&l.ref!=g&&(y||(y=[]),l.ref&&y.push(l.ref,null,c),y.push(g,c.__c||u,c)),u!=null?(h==null&&(h=u),typeof c.type=="function"&&c.__k===l.__k?c.__d=d=po(c,d,e):d=mo(e,c,l,E,u,d),typeof r.type=="function"&&(r.__d=d)):d&&l.__e==d&&d.parentNode!=e&&(d=oe(l))}for(r.__e=h,i=L;i--;)E[i]!=null&&(typeof r.type=="function"&&E[i].__e!=null&&E[i].__e==r.__d&&(r.__d=xo(t).nextSibling),bo(E[i],E[i]));if(y)for(i=0;i<y.length;i++)ho(y[i],y[++i],y[++i])}function po(e,o,r){for(var t,a=e.__k,n=0;a&&n<a.length;n++)(t=a[n])&&(t.__=e,o=typeof t.type=="function"?po(t,o,r):mo(r,t,t,a,t.__e,o));return o}function Ae(e,o){return o=o||[],e==null||typeof e=="boolean"||(me(e)?e.some(function(r){Ae(r,o)}):o.push(e)),o}function mo(e,o,r,t,a,n){var _,s,d;if(o.__d!==void 0)_=o.__d,o.__d=void 0;else if(r==null||a!=n||a.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(a),_=null;else{for(s=n,d=0;(s=s.nextSibling)&&d<t.length;d+=1)if(s==a)break e;e.insertBefore(a,n),_=n}return _!==void 0?_:a.nextSibling}function xo(e){var o,r,t;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(o=e.__k.length-1;o>=0;o--)if((r=e.__k[o])&&(t=xo(r)))return t}return null}function lt(e,o,r,t,a){var n;for(n in r)n==="children"||n==="key"||n in o||ue(e,n,null,r[n],t);for(n in o)a&&typeof o[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||r[n]===o[n]||ue(e,n,o[n],r[n],t)}function no(e,o,r){o[0]==="-"?e.setProperty(o,r==null?"":r):e[o]=r==null?"":typeof r!="number"||ct.test(o)?r:r+"px"}function ue(e,o,r,t,a){var n;e:if(o==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof t=="string"&&(e.style.cssText=t=""),t)for(o in t)r&&o in r||no(e.style,o,"");if(r)for(o in r)t&&r[o]===t[o]||no(e.style,o,r[o])}else if(o[0]==="o"&&o[1]==="n")n=o!==(o=o.replace(/Capture$/,"")),o=o.toLowerCase()in e?o.toLowerCase().slice(2):o.slice(2),e.l||(e.l={}),e.l[o+n]=r,r?t||e.addEventListener(o,n?ao:io,n):e.removeEventListener(o,n?ao:io,n);else if(o!=="dangerouslySetInnerHTML"){if(a)o=o.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(o!=="width"&&o!=="height"&&o!=="href"&&o!=="list"&&o!=="form"&&o!=="tabIndex"&&o!=="download"&&o!=="rowSpan"&&o!=="colSpan"&&o in e)try{e[o]=r==null?"":r;break e}catch(_){}typeof r=="function"||(r==null||r===!1&&o[4]!=="-"?e.removeAttribute(o):e.setAttribute(o,r))}}function io(e){return this.l[e.type+!1](x.event?x.event(e):e)}function ao(e){return this.l[e.type+!0](x.event?x.event(e):e)}function Ne(e,o,r,t,a,n,_,s,d){var m,i,g,l,c,u,h,y,E,L,G,B,P,D,M,T=o.type;if(o.constructor!==void 0)return null;r.__h!=null&&(d=r.__h,s=o.__e=r.__e,o.__h=null,n=[s]),(m=x.__b)&&m(o);try{e:if(typeof T=="function"){if(y=o.props,E=(m=T.contextType)&&t[m.__c],L=m?E?E.props.value:m.__:t,r.__c?h=(i=o.__c=r.__c).__=i.__E:("prototype"in T&&T.prototype.render?o.__c=i=new T(y,L):(o.__c=i=new fe(y,L),i.constructor=T,i.render=ft),E&&E.sub(i),i.props=y,i.state||(i.state={}),i.context=L,i.__n=t,g=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),T.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=W({},i.__s)),W(i.__s,T.getDerivedStateFromProps(y,i.__s))),l=i.props,c=i.state,i.__v=o,g)T.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(T.getDerivedStateFromProps==null&&y!==l&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,L),!i.__e&&i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,L)===!1||o.__v===r.__v){for(o.__v!==r.__v&&(i.props=y,i.state=i.__s,i.__d=!1),i.__e=!1,o.__e=r.__e,o.__k=r.__k,o.__k.forEach(function(J){J&&(J.__=o)}),G=0;G<i._sb.length;G++)i.__h.push(i._sb[G]);i._sb=[],i.__h.length&&_.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,L),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(l,c,u)})}if(i.context=L,i.props=y,i.__P=e,B=x.__r,P=0,"prototype"in T&&T.prototype.render){for(i.state=i.__s,i.__d=!1,B&&B(o),m=i.render(i.props,i.state,i.context),D=0;D<i._sb.length;D++)i.__h.push(i._sb[D]);i._sb=[]}else do i.__d=!1,B&&B(o),m=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++P<25);i.state=i.__s,i.getChildContext!=null&&(t=W(W({},t),i.getChildContext())),g||i.getSnapshotBeforeUpdate==null||(u=i.getSnapshotBeforeUpdate(l,c)),uo(e,me(M=m!=null&&m.type===xe&&m.key==null?m.props.children:m)?M:[M],o,r,t,a,n,_,s,d),i.base=o.__e,o.__h=null,i.__h.length&&_.push(i),h&&(i.__E=i.__=null),i.__e=!1}else n==null&&o.__v===r.__v?(o.__k=r.__k,o.__e=r.__e):o.__e=_t(r.__e,o,r,t,a,n,_,d);(m=x.diffed)&&m(o)}catch(J){o.__v=null,(d||n!=null)&&(o.__e=s,o.__h=!!d,n[n.indexOf(s)]=null),x.__e(J,o,r)}}function go(e,o){x.__c&&x.__c(o,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(t){t.call(r)})}catch(t){x.__e(t,r.__v)}})}function _t(e,o,r,t,a,n,_,s){var d,m,i,g=r.props,l=o.props,c=o.type,u=0;if(c==="svg"&&(a=!0),n!=null){for(;u<n.length;u++)if((d=n[u])&&"setAttribute"in d==!!c&&(c?d.localName===c:d.nodeType===3)){e=d,n[u]=null;break}}if(e==null){if(c===null)return document.createTextNode(l);e=a?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c,l.is&&l),n=null,s=!1}if(c===null)g===l||s&&e.data===l||(e.data=l);else{if(n=n&&pe.call(e.childNodes),m=(g=r.props||se).dangerouslySetInnerHTML,i=l.dangerouslySetInnerHTML,!s){if(n!=null)for(g={},u=0;u<e.attributes.length;u++)g[e.attributes[u].name]=e.attributes[u].value;(i||m)&&(i&&(m&&i.__html==m.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(lt(e,l,g,a,s),i)o.__k=[];else if(uo(e,me(u=o.props.children)?u:[u],o,r,t,a&&c!=="foreignObject",n,_,n?n[0]:r.__k&&oe(r,0),s),n!=null)for(u=n.length;u--;)n[u]!=null&&fo(n[u]);s||("value"in l&&(u=l.value)!==void 0&&(u!==e.value||c==="progress"&&!u||c==="option"&&u!==g.value)&&ue(e,"value",u,g.value,!1),"checked"in l&&(u=l.checked)!==void 0&&u!==e.checked&&ue(e,"checked",u,g.checked,!1))}return e}function ho(e,o,r){try{typeof e=="function"?e(o):e.current=o}catch(t){x.__e(t,r)}}function bo(e,o,r){var t,a;if(x.unmount&&x.unmount(e),(t=e.ref)&&(t.current&&t.current!==e.__e||ho(t,null,o)),(t=e.__c)!=null){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){x.__e(n,o)}t.base=t.__P=null,e.__c=void 0}if(t=e.__k)for(a=0;a<t.length;a++)t[a]&&bo(t[a],o,r||typeof e.type!="function");r||e.__e==null||fo(e.__e),e.__=e.__e=e.__d=void 0}function ft(e,o,r){return this.constructor(e,r)}function yo(e,o,r){var t,a,n;x.__&&x.__(e,o),a=(t=typeof r=="function")?null:r&&r.__k||o.__k,n=[],Ne(o,e=(!t&&r||o).__k=f(xe,null,[e]),a||se,se,o.ownerSVGElement!==void 0,!t&&r?[r]:a?null:o.firstChild?pe.call(o.childNodes):null,n,!t&&r?r:a?a.__e:o.firstChild,t),go(n,e)}var pe,x,co,it,X,ro,lo,Te,at,se,_o,ct,me,A=p(()=>{se={},_o=[],ct=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;pe=_o.slice,x={__e:function(e,o,r,t){for(var a,n,_;o=o.__;)if((a=o.__c)&&!a.__)try{if((n=a.constructor)&&n.getDerivedStateFromError!=null&&(a.setState(n.getDerivedStateFromError(e)),_=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,t||{}),_=a.__d),_)return a.__E=a}catch(s){e=s}throw e}},co=0,it=function(e){return e!=null&&e.constructor===void 0},fe.prototype.setState=function(e,o){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=W({},this.state),typeof e=="function"&&(e=e(W({},r),this.props)),e&&W(r,e),e!=null&&this.__v&&(o&&this._sb.push(o),to(this))},fe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),to(this))},fe.prototype.render=xe,X=[],lo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(e,o){return e.__v.__b-o.__v.__b},de.__r=0,at=0});function R(e){return e.filter(function(o){return o!==null}).join(" ")}var Z=p(()=>{});function Re(e,o){x.__h&&x.__h(k,e,te||o),te=0;var r=k.__H||(k.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:ge}),r.__[e]}function j(e){return te=1,st(No,e)}function st(e,o,r){var t=Re(re++,2);if(t.t=e,!t.__c&&(t.__=[r?r(o):No(void 0,o),function(s){var d=t.__N?t.__N[0]:t.__[0],m=t.t(d,s);d!==m&&(t.__N=[m,t.__[1]],t.__c.setState({}))}],t.__c=k,!k.u)){var a=function(s,d,m){if(!t.__c.__H)return!0;var i=t.__c.__H.__.filter(function(l){return l.__c});if(i.every(function(l){return!l.__N}))return!n||n.call(this,s,d,m);var g=!1;return i.forEach(function(l){if(l.__N){var c=l.__[0];l.__=l.__N,l.__N=void 0,c!==l.__[0]&&(g=!0)}}),!(!g&&t.__c.props===s)&&(!n||n.call(this,s,d,m))};k.u=!0;var n=k.shouldComponentUpdate,_=k.componentWillUpdate;k.componentWillUpdate=function(s,d,m){if(this.__e){var i=n;n=void 0,a(s,d,m),n=i}_&&_.call(this,s,d,m)},k.shouldComponentUpdate=a}return t.__N||t.__}function O(e,o){var r=Re(re++,3);!x.__s&&Ao(r.__H,o)&&(r.__=e,r.i=o,k.__H.__h.push(r))}function Fe(e){return te=5,To(function(){return{current:e}},[])}function To(e,o){var r=Re(re++,7);return Ao(r.__H,o)?(r.__V=e(),r.i=o,r.__h=e,r.__V):r.__}function S(e,o){return te=8,To(function(){return e},o)}function dt(){for(var e;e=Lo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(he),e.__H.__h.forEach(Me),e.__H.__h=[]}catch(o){e.__H.__h=[],x.__e(o,e.__v)}}function ut(e){var o,r=function(){clearTimeout(t),Eo&&cancelAnimationFrame(o),setTimeout(e)},t=setTimeout(r,100);Eo&&(o=requestAnimationFrame(r))}function he(e){var o=k,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),k=o}function Me(e){var o=k;e.__c=e.__(),k=o}function Ao(e,o){return!e||e.length!==o.length||o.some(function(r,t){return r!==e[t]})}function No(e,o){return typeof o=="function"?o(e):o}var re,k,De,vo,te,Lo,ge,Io,Co,ko,wo,So,Eo,U=p(()=>{A();te=0,Lo=[],ge=[],Io=x.__b,Co=x.__r,ko=x.diffed,wo=x.__c,So=x.unmount;x.__b=function(e){k=null,Io&&Io(e)},x.__r=function(e){Co&&Co(e),re=0;var o=(k=e.__c).__H;o&&(De===k?(o.__h=[],k.__h=[],o.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=ge,r.__N=r.i=void 0})):(o.__h.forEach(he),o.__h.forEach(Me),o.__h=[],re=0)),De=k},x.diffed=function(e){ko&&ko(e);var o=e.__c;o&&o.__H&&(o.__H.__h.length&&(Lo.push(o)!==1&&vo===x.requestAnimationFrame||((vo=x.requestAnimationFrame)||ut)(dt)),o.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==ge&&(r.__=r.__V),r.i=void 0,r.__V=ge})),De=k=null},x.__c=function(e,o){o.some(function(r){try{r.__h.forEach(he),r.__h=r.__h.filter(function(t){return!t.__||Me(t)})}catch(t){o.some(function(a){a.__h&&(a.__h=[])}),o=[],x.__e(t,r.__v)}}),wo&&wo(e,o)},x.unmount=function(e){So&&So(e);var o,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(t){try{he(t)}catch(a){o=a}}),r.__H=void 0,o&&x.__e(o,r.__v))};Eo=typeof requestAnimationFrame=="function"});var He,Do=p(()=>{if(document.getElementById("8d769924f1")===null){let e=document.createElement("style");e.id="8d769924f1",e.textContent="._loadingIndicator_pl5c3_1{height:16px;margin:0 auto;position:relative;width:16px}._svg_pl5c3_8{fill:currentColor;animation:_rotating_pl5c3_1 .5s linear infinite;height:16px;left:0;position:absolute;top:0;width:16px}@keyframes _rotating_pl5c3_1{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",document.head.append(e)}He={loadingIndicator:"_loadingIndicator_pl5c3_1",svg:"_svg_pl5c3_8",rotating:"_rotating_pl5c3_1"}});function Mo(r){var t=r,{color:e}=t,o=w(t,["color"]);return f("div",I(v({},o),{class:He.loadingIndicator}),f("svg",{class:He.svg,style:typeof e>"u"?void 0:{fill:`var(--figma-color-icon-${e})`}},f("path",{d:"M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z"})))}var Ro=p(()=>{A();Do()});var H,Fo=p(()=>{if(document.getElementById("b711d1401d")===null){let e=document.createElement("style");e.id="b711d1401d",e.textContent="._button_5fxgc_1{display:inline-block;position:relative;z-index:var(--z-index-1)}._fullWidth_5fxgc_7{display:block}._button_5fxgc_1 button{border-radius:var(--border-radius-6);display:inline-block;height:32px}._disabled_5fxgc_17 button{cursor:not-allowed}._fullWidth_5fxgc_7 button{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}._default_5fxgc_29 button{background-color:var(--figma-color-bg-brand);border:2px solid transparent;color:var(--figma-color-text-onbrand);line-height:28px;padding:0 14px}._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong)}._default_5fxgc_29._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 button{background-color:var(--figma-color-bg-danger);color:var(--figma-color-text-ondanger)}._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._secondary_5fxgc_56 button{background-color:transparent;border:1px solid var(--figma-color-border-strong);color:var(--figma-color-text);line-height:30px;padding:0 15px}._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong);border-width:2px;line-height:28px;padding:0 14px}._secondary_5fxgc_56._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 button{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44 button,._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._loadingIndicator_5fxgc_86{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}._default_5fxgc_29 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-onbrand)}._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondanger)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text)}._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._children_5fxgc_122{display:inline}._loading_5fxgc_86 ._children_5fxgc_122{visibility:hidden}",document.head.append(e)}H={button:"_button_5fxgc_1",fullWidth:"_fullWidth_5fxgc_7",disabled:"_disabled_5fxgc_17",default:"_default_5fxgc_29",danger:"_danger_5fxgc_44",secondary:"_secondary_5fxgc_56",loadingIndicator:"_loadingIndicator_5fxgc_86",children:"_children_5fxgc_122",loading:"_loading_5fxgc_86"}});function Ve(m){var i=m,{children:e,danger:o=!1,disabled:r=!1,fullWidth:t=!1,loading:a=!1,onClick:n,propagateEscapeKeyDown:_=!0,secondary:s=!1}=i,d=w(i,["children","danger","disabled","fullWidth","loading","onClick","propagateEscapeKeyDown","secondary"]);let g=S(function(l){l.key==="Escape"&&(_===!1&&l.stopPropagation(),l.currentTarget.blur())},[_]);return f("div",{class:R([H.button,s===!0?H.secondary:H.default,o===!0?H.danger:null,t===!0?H.fullWidth:null,r===!0?H.disabled:null,a===!0?H.loading:null])},a===!0?f("div",{class:H.loadingIndicator},f(Mo,null)):null,f("button",I(v({},d),{disabled:r===!0,onClick:r===!0||a===!0?void 0:n,onKeyDown:r===!0||a===!0?void 0:g,tabIndex:r===!0?-1:0}),f("div",{class:H.children},e)))}var Ho=p(()=>{A();U();Z();Ro();Fo()});var Vo,Bo=p(()=>{if(document.getElementById("5eec170d36")===null){let e=document.createElement("style");e.id="5eec170d36",e.textContent="._icon_13804_1{fill:currentColor}",document.head.append(e)}Vo={icon:"_icon_13804_1"}});function Uo(e,o){let{width:r,height:t}=o;return function(s){var d=s,{color:n}=d,_=w(d,["color"]);return f("svg",I(v({},_),{class:Vo.icon,height:t,style:typeof n>"u"?void 0:{fill:`var(--figma-color-icon-${n})`},width:r,xmlns:"http://www.w3.org/2000/svg"}),f("path",{"clip-rule":"evenodd",d:e,"fill-rule":"evenodd"}))}}var zo=p(()=>{A();Bo()});var Po,Wo=p(()=>{zo();Po=Uo("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z",{height:12,width:12})});var $,Oo=p(()=>{if(document.getElementById("73ba73131b")===null){let e=document.createElement("style");e.id="73ba73131b",e.textContent=`._checkbox_1a43f_1{position:relative;z-index:var(--z-index-1)}._input_1a43f_6{bottom:-8px;display:block;left:-16px;position:absolute;right:-16px;top:-8px;width:calc(100% + 32px);z-index:var(
    --z-index-1
  )}._disabled_1a43f_18 ._input_1a43f_6{cursor:not-allowed}._border_1a43f_23,._fill_1a43f_22{border-radius:var(--border-radius-2);height:12px;left:0;position:absolute;top:0;width:12px}._border_1a43f_23{border:1px solid var(--figma-color-border-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus~._border_1a43f_23{border-color:var(--figma-color-border-brand-strong);box-shadow:0 0 0 1px var(--figma-color-border-brand-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus~._border_1a43f_23{box-shadow:0 0 0 1px var(--figma-color-bg),0 0 0 2px var(--figma-color-border-brand-strong)}._disabled_1a43f_18 ._input_1a43f_6~._border_1a43f_23{border-color:var(--figma-color-border-disabled-strong)}._disabled_1a43f_18 ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-brand)}._disabled_1a43f_18 ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-disabled)}._checkIcon_1a43f_60{color:var(--figma-color-icon-onbrand)}._disabled_1a43f_18 ._checkIcon_1a43f_60{color:var(--figma-color-icon-ondisabled)}._children_1a43f_67{color:var(--figma-color-text);min-height:12px;padding:2px 0 0 20px}._disabled_1a43f_18 ._children_1a43f_67{opacity:var(--opacity-30)}`,document.head.append(e)}$={checkbox:"_checkbox_1a43f_1",input:"_input_1a43f_6",disabled:"_disabled_1a43f_18",fill:"_fill_1a43f_22",border:"_border_1a43f_23",checkIcon:"_checkIcon_1a43f_60",children:"_children_1a43f_67"}});function Be(d){var m=d,{children:e,disabled:o=!1,name:r,onChange:t=function(){},onValueChange:a=function(){},propagateEscapeKeyDown:n=!0,value:_=!1}=m,s=w(m,["children","disabled","name","onChange","onValueChange","propagateEscapeKeyDown","value"]);let i=S(function(l){let c=l.currentTarget.checked;a(c,r),t(l)},[r,t,a]),g=S(function(l){l.key==="Escape"&&(n===!1&&l.stopPropagation(),l.currentTarget.blur())},[n]);return f("label",{class:R([$.checkbox,o===!0?$.disabled:null])},f("input",I(v({},s),{checked:_===!0,class:$.input,disabled:o===!0,name:r,onChange:i,onKeyDown:g,tabIndex:o===!0?-1:0,type:"checkbox"})),f("div",{class:$.fill},_===!0?f("div",{class:$.checkIcon},f(Po,null)):null),f("div",{class:$.border}),f("div",{class:$.children},e))}var $o=p(()=>{A();U();Wo();Z();Oo()});function Go(e){if(e.current===null)throw new Error("`ref.current` is `undefined`");return e.current}var Ko=p(()=>{});function Xo(e){let o=(typeof e>"u"?document:e).querySelectorAll(':not([disabled])[tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(o)}var jo=p(()=>{});function qo(e){return function(o){if(o.key!=="Tab")return;o.preventDefault();let r=Xo(e);if(r.length===0)return;let t=pt(o.target,r);if(t===r.length-1&&o.shiftKey===!1){r[0].focus();return}if(t===0&&o.shiftKey===!0){r[r.length-1].focus();return}r[o.shiftKey===!0?t-1:t+1].focus()}}function pt(e,o){return o.reduce(function(r,t,a){return r===-1&&t.isSameNode(e)===!0?a:r},-1)}var Jo=p(()=>{jo()});var be,Yo=p(()=>{if(document.getElementById("5d5845ed91")===null){let e=document.createElement("style");e.id="5d5845ed91",e.textContent='._text_mh6mm_1{color:var(--figma-color-text);padding-top:1px;pointer-events:none;transform:translateY(4px)}._text_mh6mm_1:before{content:"";display:block;height:0;margin-top:-9px;pointer-events:none}._numeric_mh6mm_15{font-variant-numeric:tabular-nums}._left_mh6mm_19{text-align:left}._center_mh6mm_22{text-align:center}._right_mh6mm_25{text-align:right}',document.head.append(e)}be={text:"_text_mh6mm_1",numeric:"_numeric_mh6mm_15",left:"_left_mh6mm_19",center:"_center_mh6mm_22",right:"_right_mh6mm_25"}});function Ue(a){var n=a,{align:e="left",children:o,numeric:r=!1}=n,t=w(n,["align","children","numeric"]);return f("div",I(v({},t),{class:R([be.text,be[e],r===!0?be.numeric:null])}),o)}var Zo=p(()=>{A();Z();Yo()});function ze(e,o){let r=`${Qo}`;return Qo+=1,ne[r]={handler:o,name:e},function(){delete ne[r]}}function er(e,o){for(let r in ne)ne[r].name===e&&ne[r].handler.apply(null,o)}var ne,Qo,ye,or=p(()=>{ne={},Qo=0;ye=typeof window>"u"?function(e,...o){figma.ui.postMessage([e,...o])}:function(e,...o){window.parent.postMessage({pluginMessage:[e,...o]},"*")};typeof window>"u"?figma.ui.onmessage=function([e,...o]){er(e,o)}:window.onmessage=function(e){if(typeof e.data.pluginMessage>"u")return;let[o,...r]=e.data.pluginMessage;er(o,r)}});var V,rr=p(()=>{V="999999999999999"});var tr,nr,ve,ir,ar,cr,Pe=p(()=>{tr=/^-?\d*(?:\.\d*)?$/,nr=/^-?\d*$/,ve=/[+\-*/]/,ir=/[+\-*/]$/,ar=/\d/,cr=/[^\d.+\-*/]/});function Ie(value){return value===""||ar.test(value)===!1||cr.test(value)===!0?null:ve.test(value)===!0?ir.test(value)===!0?eval(value.substring(0,value.length-1)):eval(value):parseFloat(value)}var lr=p(()=>{Pe()});function Ce(e,o={integersOnly:!1}){let r=(e[0]==="-"?e.substring(1):e).split(ve),t=-1;for(;++t<r.length;){let a=r[t];if(a===""&&t!==r.length-1||(o.integersOnly===!0?nr:tr).test(a)===!1)return!1}return!0}var _r=p(()=>{Pe()});var ke=p(()=>{or();rr();lr();_r()});function fr(e){return e===32||e>=48&&e<=57||e>=65&&e<=90||e>=96&&e<=105||e>=186&&e<=192||e>=219&&e<=222}var sr=p(()=>{});function We(e,o){let r=e.value,t=e.selectionStart,a=e.selectionEnd;return`${r.substring(0,t===null?0:t)}${o}${r.substring(a===null?0:a)}`}var dr=p(()=>{});function ie(e,o,r){if(e===null)return Oe;let t=xt(mt.test(o)===!0?`${e}`:o);return ht(gt(e,t),r)}function xt(e){let o=ur.exec(e);return o===null?0:o[1].length}function gt(e,o){if(o===0)return`${e}`;let r=ur.exec(`${e}`);if(r===null)return`${e}.${"0".repeat(o)}`;let t=r[1],a=o-t.length;return`${e}${"0".repeat(a)}`}function ht(e,o){return typeof o>"u"?e:e===Oe?Oe:`${e}${o}`}var Oe,ur,mt,pr=p(()=>{Oe="",ur=/\.([^.]+)/,mt=/[^\d.]/});function gr(E){var L=E,{disabled:e=!1,incrementBig:o=10,incrementSmall:r=1,integer:t=!1,maximum:a,minimum:n,name:_,onInput:s=function(){},onNumericValueInput:d=function(){},onValueInput:m=function(){},placeholder:i,propagateEscapeKeyDown:g=!0,revertOnEscapeKeyDown:l=!1,suffix:c,validateOnBlur:u,value:h}=L,y=w(L,["disabled","incrementBig","incrementSmall","integer","maximum","minimum","name","onInput","onNumericValueInput","onValueInput","placeholder","propagateEscapeKeyDown","revertOnEscapeKeyDown","suffix","validateOnBlur","value"]);if(typeof n<"u"&&typeof a<"u"&&n>=a)throw new Error("`minimum` must be less than `maximum`");let G=Fe(null),B=Fe(!1),[P,D]=j(N),M=S(function(b){let C=Go(G);C.value=b;let F=document.createEvent("Event");F.initEvent("input",!0,!0),C.dispatchEvent(F)},[]),T=S(function(){if(B.current===!0){B.current=!1;return}if(typeof u<"u"){let b=we(h,c),C=u(b);if(typeof C=="number"){M(ie(C,h,c)),D(N);return}if(C===null){M(N),D(N);return}if(C===!1){h!==P&&M(P),D(N);return}}if(typeof c<"u"&&h===c){M(N),D(N);return}if(h!==N&&h!==V){let b=we(h,c),C=ie(b,h,c);h!==C&&M(C)}D(N)},[P,M,c,u,h]),J=S(function(b){D(h),b.currentTarget.select()},[h]),ae=S(function(b){s(b);let C=b.currentTarget.value;m(C,_);let F=we(C,c);d(F,_)},[_,s,d,m,c]),Gr=S(function(b){let C=b.key;if(C==="Escape"){g===!1&&b.stopPropagation(),l===!0&&(B.current=!0,M(P),D(N)),b.currentTarget.blur();return}if(C==="Enter"){b.currentTarget.blur();return}let F=b.currentTarget;if(C==="ArrowDown"||C==="ArrowUp"){let K=b.shiftKey===!0?o:r;if(h===N||h===V){b.preventDefault();let qr=function(){return typeof n<"u"&&n>0?n:typeof a<"u"&&a<0?a:0}(),Jr=mr(xr(qr,C==="ArrowDown"?-1*K:K),n,a),Yr=ie(Jr,h,c);F.value=Yr,F.select(),ae(b);return}let Y=we(h,c);if(Y===null)throw new Error("Invariant violation");b.preventDefault();let jr=mr(xr(Y,C==="ArrowDown"?-1*K:K),n,a),Qe=ie(jr,h,c);if(Qe===h)return;F.value=Qe,F.select(),ae(b);return}if(!(b.ctrlKey===!0||b.metaKey===!0)&&fr(b.keyCode)===!0){let K=$e(h===V?b.key:We(F,b.key),c);if(Ce(K,{integersOnly:t})===!1){b.preventDefault();return}if(typeof n>"u"&&typeof a>"u")return;let Y=Ie(K);if(Y===null)return;(typeof n<"u"&&Y<n||typeof a<"u"&&Y>a)&&b.preventDefault()}},[ae,o,r,t,a,n,P,g,l,M,c,h]),Kr=S(function(b){h===V&&b.preventDefault()},[h]),Xr=S(function(b){if(b.clipboardData===null)throw new Error("`event.clipboardData` is `null`");let C=$e(We(b.currentTarget,b.clipboardData.getData("Text")),c);Ce(C,{integersOnly:t})===!1&&b.preventDefault()},[t,c]);return f("input",I(v({},y),{ref:G,disabled:e===!0,name:_,onBlur:T,onFocus:J,onInput:ae,onKeyDown:Gr,onMouseUp:Kr,onPaste:Xr,placeholder:i,spellcheck:!1,tabIndex:e===!0?-1:0,type:"text",value:h===V?"Mixed":h}))}function mr(e,o,r){return typeof o<"u"?typeof r<"u"?Math.min(Math.max(e,o),r):Math.max(e,o):typeof r<"u"?Math.min(e,r):e}function we(e,o){return e===V?999999999999999:e===N?null:Ie($e(e,o))}function xr(e,o){return parseFloat((e+o).toFixed(bt))}function $e(e,o){return typeof o>"u"?e:e.replace(new RegExp(`${o}$`),N)}var bt,N,hr=p(()=>{ke();A();U();Ko();dr();sr();pr();bt=3,N=""});var z,br=p(()=>{if(document.getElementById("2fe9086382")===null){let e=document.createElement("style");e.id="2fe9086382",e.textContent="._textbox_sir3b_1{position:relative;z-index:var(--z-index-1)}._textbox_sir3b_1:focus-within{z-index:var(--z-index-2)}._input_sir3b_9{background-color:transparent;color:var(--figma-color-text);display:block;height:28px;padding:0 var(--space-extra-small);width:100%}._disabled_sir3b_17 ._input_sir3b_9{color:var(--figma-color-text-disabled);cursor:not-allowed}._hasIcon_sir3b_21 ._input_sir3b_9{padding-left:32px}._input_sir3b_9::placeholder{color:var(--figma-color-text-tertiary)}._icon_sir3b_29{color:var(--figma-color-icon-secondary);left:16px;pointer-events:none;position:absolute;text-align:center;top:14px;transform:translate(-50%,-50%)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._icon_sir3b_29{color:var(--figma-color-icon-brand)}._disabled_sir3b_17 ._icon_sir3b_29{color:var(--figma-color-icon-disabled)}._icon_sir3b_29 svg{fill:currentColor}._border_sir3b_49{border:1px solid transparent;border-radius:var(--border-radius-2);bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0}._hasBorder_sir3b_59 ._border_sir3b_49,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49{border-color:var(--figma-color-border)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._border_sir3b_49{border-color:var(--figma-color-border-brand-strong);border-width:2px;bottom:-1px;top:-1px}._underline_sir3b_70{background-color:var(--figma-color-border);bottom:0;height:1px;left:var(--space-extra-small);position:absolute;right:var(--space-extra-small)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._underline_sir3b_70,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70{background-color:transparent}",document.head.append(e)}z={textbox:"_textbox_sir3b_1",input:"_input_sir3b_9",disabled:"_disabled_sir3b_17",hasIcon:"_hasIcon_sir3b_21",icon:"_icon_sir3b_29",border:"_border_sir3b_49",hasBorder:"_hasBorder_sir3b_59",underline:"_underline_sir3b_70"}});var yr,vr=p(()=>{if(document.getElementById("9bfedb9966")===null){let e=document.createElement("style");e.id="9bfedb9966",e.textContent="._input_1byj7_1::-webkit-inner-spin-button,._input_1byj7_1::-webkit-outer-spin-button{-webkit-appearance:none}",document.head.append(e)}yr={input:"_input_1byj7_1"}});function Se(t){var a=t,{icon:e,variant:o}=a,r=w(a,["icon","variant"]);if(typeof e=="string"&&e.length!==1)throw new Error(`String \`icon\` must be a single character: ${e}`);return f("div",{class:R([z.textbox,typeof o>"u"?null:o==="border"?z.hasBorder:null,typeof e>"u"?null:z.hasIcon,r.disabled===!0?z.disabled:null])},f(gr,I(v({},r),{class:R([z.input,yr.input])})),typeof e>"u"?null:f("div",{class:z.icon},e),f("div",{class:z.border}),o==="underline"?f("div",{class:z.underline}):null)}var Ir=p(()=>{A();Z();br();hr();vr()});function Cr(e){O(function(){let o=qo(e);return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[e])}var kr=p(()=>{U();Jo()});function wr(){return O(function(){let e=document.querySelectorAll(`[${Ge}]:not([tabindex="-1"]`);if(e.length===0)throw new Error(`No element with attribute \`${Ge}\``);if(e.length>1){let o=Array.prototype.slice.call(e).find(function(r){let t=r;return t.type==="radio"&&t.checked===!0});if(typeof o<"u"){o.focus();return}}e[0].focus()},[]),{[Ge]:!0}}var Ge,Sr=p(()=>{U();Ge="data-initial-focus"});function Ke(e,o){let r=S(function(t){t.key===e&&o(t)},[e,o]);O(function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}},[r])}var Er=p(()=>{U()});function Xe(e,o){let{close:r,submit:t,transform:a,validate:n}=o,[_,s]=j(e),d=S(function(c,u){if(typeof u>"u")throw new Error("`name` is `undefined`");s(function(h){let y=I(v({},h),{[u]:c});return typeof a>"u"?y:a(y)})},[a]),m=S(function(){typeof n<"u"&&n(_)===!1||t(_)},[_,t,n]);Ke("Enter",m);let i=S(function(){r(_)},[r,_]);Ke("Escape",i),Cr();let g=typeof n<"u"?n(_)===!1:!1,l=wr();return{disabled:g,formState:_,handleSubmit:m,initialFocus:l,setFormState:d}}var Lr=p(()=>{U();kr();Sr();Er()});var Ee,Tr=p(()=>{if(document.getElementById("bd772ffc66")===null){let e=document.createElement("style");e.id="bd772ffc66",e.textContent="._columns_ybv3x_1{display:flex}._extraSmall_ybv3x_4{margin-left:calc(var(--space-extra-small)*-1)}._small_ybv3x_7{margin-left:calc(var(--space-small)*-1)}._medium_ybv3x_10{margin-left:calc(var(--space-medium)*-1)}._large_ybv3x_13{margin-left:calc(var(--space-large)*-1)}._extraLarge_ybv3x_16{margin-left:calc(var(--space-extra-large)*-1)}._child_ybv3x_20{flex-grow:1}._extraSmall_ybv3x_4>._child_ybv3x_20{padding-left:var(--space-extra-small)}._small_ybv3x_7>._child_ybv3x_20{padding-left:var(--space-small)}._medium_ybv3x_10>._child_ybv3x_20{padding-left:var(--space-medium)}._large_ybv3x_13>._child_ybv3x_20{padding-left:var(--space-large)}._extraLarge_ybv3x_16>._child_ybv3x_20{padding-left:var(--space-extra-large)}",document.head.append(e)}Ee={columns:"_columns_ybv3x_1",extraSmall:"_extraSmall_ybv3x_4",small:"_small_ybv3x_7",medium:"_medium_ybv3x_10",large:"_large_ybv3x_13",extraLarge:"_extraLarge_ybv3x_16",child:"_child_ybv3x_20"}});function je(t){var a=t,{children:e,space:o}=a,r=w(a,["children","space"]);return f("div",I(v({},r),{class:R([Ee.columns,typeof o>"u"?null:Ee[o]])}),Ae(e).map(function(n,_){return f("div",{key:_,class:Ee.child},n)}))}var Ar=p(()=>{A();Z();Tr()});var Nr,Dr=p(()=>{if(document.getElementById("7d8083f24b")===null){let e=document.createElement("style");e.id="7d8083f24b",e.textContent="._extraSmall_1oe77_1{padding:0 var(--space-extra-small)}._small_1oe77_4{padding:0 var(--space-small)}._medium_1oe77_7{padding:0 var(--space-medium)}._large_1oe77_10{padding:0 var(--space-large)}._extraLarge_1oe77_13{padding:0 var(--space-extra-large)}",document.head.append(e)}Nr={extraSmall:"_extraSmall_1oe77_1",small:"_small_1oe77_4",medium:"_medium_1oe77_7",large:"_large_1oe77_10",extraLarge:"_extraLarge_1oe77_13"}});function qe(r){var t=r,{space:e}=t,o=w(t,["space"]);return f("div",I(v({},o),{class:Nr[e]}))}var Mr=p(()=>{A();Dr()});var Rr,Fr=p(()=>{if(document.getElementById("89d2751efa")===null){let e=document.createElement("style");e.id="89d2751efa",e.textContent="._extraSmall_zc4n0_1{height:var(--space-extra-small)}._small_zc4n0_4{height:var(--space-small)}._medium_zc4n0_7{height:var(--space-medium)}._large_zc4n0_10{height:var(--space-large)}._extraLarge_zc4n0_13{height:var(--space-extra-large)}",document.head.append(e)}Rr={extraSmall:"_extraSmall_zc4n0_1",small:"_small_zc4n0_4",medium:"_medium_zc4n0_7",large:"_large_zc4n0_10",extraLarge:"_extraLarge_zc4n0_13"}});function Q(r){var t=r,{space:e}=t,o=w(t,["space"]);return f("div",I(v({},o),{class:Rr[e]}))}var Hr=p(()=>{A();Fr()});function ee(e){return e===null?"":e===999999999999999?V:`${e}`}var Vr=p(()=>{ke()});var Br=p(()=>{if(document.getElementById("7c137fcf3f")===null){let e=document.createElement("style");e.id="7c137fcf3f",e.textContent='@import url("https://fonts.googleapis.com/css?family=Inter:400,600&display=swap");:root{--border-radius-2:2px;--border-radius-6:6px;--box-shadow:var(--box-shadow-menu);--box-shadow-menu:0 5px 17px rgba(0,0,0,.2),0 2px 7px rgba(0,0,0,.15),inset 0 0 0 0.5px #000,0 0 0 0.5px rgba(0,0,0,.1);--box-shadow-modal:0 2px 14px rgba(0,0,0,.15),0 0 0 0.5px rgba(0,0,0,.2);--font-family:"Inter","Helvetica",sans-serif;--font-family-code:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--font-size-11:11px;--font-size-12:12px;--font-weight-regular:400;--font-weight-bold:600;--line-height-16:16px;--opacity-30:0.3;--space-extra-small:8px;--space-small:12px;--space-medium:16px;--space-large:20px;--space-extra-large:24px;--z-index-1:1;--z-index-2:2}.figma-dark{color-scheme:dark}*{border:0 solid;box-sizing:border-box}body{background-color:var(--figma-color-bg);color:var(--figma-color-text);font-family:var(--font-family);font-size:var(--font-size-11);font-weight:var(--font-weight-regular);line-height:var(--line-height-16);margin:0}div,span{cursor:default;user-select:none}h1,h2,h3{font-weight:inherit;margin:0}button{-webkit-appearance:none;background-color:transparent;border:0;font:inherit;outline:0;padding:0}hr{border:0;margin:0}label{display:block}input,textarea{-webkit-appearance:none;border:0;cursor:default;font:inherit;margin:0;outline:0;padding:0}svg{display:block}::selection{background-color:var(--figma-color-bg-onselected)}',document.head.prepend(e)}});function Je(e){return function(o,r){yo(f(e,v({},r)),o)}}var Ur=p(()=>{Br();A()});var Ye=p(()=>{Ho();$o();Zo();Ir();Lr();Ar();Mr();Hr();Vr();Ur()});function zr(e){let{disabled:o,formState:r,handleSubmit:t,initialFocus:a,setFormState:n}=Xe(e,{close:function(){ye("CLOSE_UI")},submit:function({width:c,height:u,resizeWithConstraints:h}){ye("SUBMIT",{height:u,resizeWithConstraints:h,width:c})},validate:function({width:c,height:u}){return c!==null&&c!==999999999999999&&c!==0||u!==null&&u!==999999999999999&&u!==0}}),[_,s]=j(ee(r.width)),[d,m]=j(ee(r.height));O(function(){return ze("SELECTION_CHANGED",function({width:c,height:u}){s(ee(c)),m(ee(u))})},[s,m]);let{width:i,height:g}=r,l=i!==null&&g!==null;return f(qe,{space:"medium"},f(Q,{space:"large"}),f(je,{space:"extraSmall"},f(Se,I(v({},a),{disabled:l===!1,icon:"W",minimum:0,name:"width",onNumericValueInput:n,onValueInput:s,value:_,variant:"border"})),f(Se,{disabled:l===!1,icon:"H",minimum:0,name:"height",onNumericValueInput:n,onValueInput:m,value:d,variant:"border"})),f(Q,{space:"medium"}),f(Be,{disabled:l===!1,name:"resizeWithConstraints",onValueChange:n,value:r.resizeWithConstraints===!0},f(Ue,null,"Resize with constraints")),f(Q,{space:"large"}),f(Ve,{disabled:o===!0,fullWidth:!0,onClick:t},"Set Layer Size"),f(Q,{space:"small"}))}var Pr=p(()=>{"use strict";Ye();ke();A();U()});var Wr={};rt(Wr,{default:()=>yt});var yt,Or=p(()=>{"use strict";Ye();Pr();yt=Je(zr)});var vt=document.getElementById("create-figma-plugin"),$r={"src/main.ts--default":(Or(),nt(Wr)).default},Ze=__FIGMA_COMMAND__===""?"src/main.ts--default":__FIGMA_COMMAND__;if(typeof $r[Ze]>"u")throw new Error("No UI defined for command `"+Ze+"`");$r[Ze](vt,__SHOW_UI_DATA__);})();
