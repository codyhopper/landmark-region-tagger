(()=>{var _e=Object.defineProperty,Cr=Object.defineProperties,kr=Object.getOwnPropertyDescriptor,Sr=Object.getOwnPropertyDescriptors,wr=Object.getOwnPropertyNames,le=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var ze=(e,o,r)=>o in e?_e(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,y=(e,o)=>{for(var r in o||(o={}))Ce.call(o,r)&&ze(e,r,o[r]);if(le)for(var r of le(o))We.call(o,r)&&ze(e,r,o[r]);return e},v=(e,o)=>Cr(e,Sr(o));var C=(e,o)=>{var r={};for(var t in e)Ce.call(e,t)&&o.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&le)for(var t of le(e))o.indexOf(t)<0&&We.call(e,t)&&(r[t]=e[t]);return r};var p=(e,o)=>()=>(e&&(o=e(e=0)),o);var Ge=(e,o)=>{for(var r in o)_e(e,r,{get:o[r],enumerable:!0})},Lr=(e,o,r,t)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of wr(o))!Ce.call(e,i)&&i!==r&&_e(e,i,{get:()=>o[i],enumerable:!(t=kr(o,i))||t.enumerable});return e};var ke=e=>Lr(_e({},"__esModule",{value:!0}),e);function V(e,o){for(var r in o)e[r]=o[r];return e}function Ze(e){var o=e.parentNode;o&&o.removeChild(e)}function c(e,o,r){var t,i,a,f={};for(a in o)a=="key"?t=o[a]:a=="ref"?i=o[a]:f[a]=o[a];if(arguments.length>2&&(f.children=arguments.length>3?me.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)f[a]===void 0&&(f[a]=e.defaultProps[a]);return fe(e,f,t,i,null)}function fe(e,o,r,t,i){var a={type:e,props:o,key:r,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i==null?++je:i};return i==null&&x.vnode!=null&&x.vnode(a),a}function ge(e){return e.children}function se(e,o){this.props=e,this.context=o}function X(e,o){if(o==null)return e.__?X(e.__,e.__.__k.indexOf(e)+1):null;for(var r;o<e.__k.length;o++)if((r=e.__k[o])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?X(e):null}function Qe(e){var o,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,o=0;o<e.__k.length;o++)if((r=e.__k[o])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Qe(e)}}function Ke(e){(!e.__d&&(e.__d=!0)&&O.push(e)&&!ue.__r++||Oe!==x.debounceRendering)&&((Oe=x.debounceRendering)||Je)(ue)}function ue(){var e,o,r,t,i,a,f,d;for(O.sort(Se);e=O.shift();)e.__d&&(o=O.length,t=void 0,i=void 0,f=(a=(r=e).__v).__e,(d=r.__P)&&(t=[],(i=V({},a)).__v=a.__v+1,Le(d,a,i,r.__n,d.ownerSVGElement!==void 0,a.__h!=null?[f]:null,t,f==null?X(a):f,a.__h),no(t,a),a.__e!=f&&Qe(a)),O.length>o&&O.sort(Se));ue.__r=0}function eo(e,o,r,t,i,a,f,d,s,u){var n,g,_,l,m,w,h,I=t&&t.__k||Ye,k=I.length;for(r.__k=[],n=0;n<o.length;n++)if((l=r.__k[n]=(l=o[n])==null||typeof l=="boolean"||typeof l=="function"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?fe(null,l,null,null,l):xe(l)?fe(ge,{children:l},null,null,null):l.__b>0?fe(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=r,l.__b=r.__b+1,(_=I[n])===null||_&&l.key==_.key&&l.type===_.type)I[n]=void 0;else for(g=0;g<k;g++){if((_=I[g])&&l.key==_.key&&l.type===_.type){I[g]=void 0;break}_=null}Le(e,l,_=_||de,i,a,f,d,s,u),m=l.__e,(g=l.ref)&&_.ref!=g&&(h||(h=[]),_.ref&&h.push(_.ref,null,l),h.push(g,l.__c||m,l)),m!=null?(w==null&&(w=m),typeof l.type=="function"&&l.__k===_.__k?l.__d=s=oo(l,s,e):s=ro(e,l,_,I,m,s),typeof r.type=="function"&&(r.__d=s)):s&&_.__e==s&&s.parentNode!=e&&(s=X(_))}for(r.__e=w,n=k;n--;)I[n]!=null&&(typeof r.type=="function"&&I[n].__e!=null&&I[n].__e==r.__d&&(r.__d=to(t).nextSibling),io(I[n],I[n]));if(h)for(n=0;n<h.length;n++)ao(h[n],h[++n],h[++n])}function oo(e,o,r){for(var t,i=e.__k,a=0;i&&a<i.length;a++)(t=i[a])&&(t.__=e,o=typeof t.type=="function"?oo(t,o,r):ro(r,t,t,i,t.__e,o));return o}function we(e,o){return o=o||[],e==null||typeof e=="boolean"||(xe(e)?e.some(function(r){we(r,o)}):o.push(e)),o}function ro(e,o,r,t,i,a){var f,d,s;if(o.__d!==void 0)f=o.__d,o.__d=void 0;else if(r==null||i!=a||i.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(i),f=null;else{for(d=a,s=0;(d=d.nextSibling)&&s<t.length;s+=1)if(d==i)break e;e.insertBefore(i,a),f=a}return f!==void 0?f:i.nextSibling}function to(e){var o,r,t;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(o=e.__k.length-1;o>=0;o--)if((r=e.__k[o])&&(t=to(r)))return t}return null}function Nr(e,o,r,t,i){var a;for(a in r)a==="children"||a==="key"||a in o||pe(e,a,null,r[a],t);for(a in o)i&&typeof o[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===o[a]||pe(e,a,o[a],r[a],t)}function qe(e,o,r){o[0]==="-"?e.setProperty(o,r==null?"":r):e[o]=r==null?"":typeof r!="number"||Ar.test(o)?r:r+"px"}function pe(e,o,r,t,i){var a;e:if(o==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof t=="string"&&(e.style.cssText=t=""),t)for(o in t)r&&o in r||qe(e.style,o,"");if(r)for(o in r)t&&r[o]===t[o]||qe(e.style,o,r[o])}else if(o[0]==="o"&&o[1]==="n")a=o!==(o=o.replace(/Capture$/,"")),o=o.toLowerCase()in e?o.toLowerCase().slice(2):o.slice(2),e.l||(e.l={}),e.l[o+a]=r,r?t||e.addEventListener(o,a?Xe:$e,a):e.removeEventListener(o,a?Xe:$e,a);else if(o!=="dangerouslySetInnerHTML"){if(i)o=o.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(o!=="width"&&o!=="height"&&o!=="href"&&o!=="list"&&o!=="form"&&o!=="tabIndex"&&o!=="download"&&o!=="rowSpan"&&o!=="colSpan"&&o in e)try{e[o]=r==null?"":r;break e}catch(f){}typeof r=="function"||(r==null||r===!1&&o[4]!=="-"?e.removeAttribute(o):e.setAttribute(o,r))}}function $e(e){return this.l[e.type+!1](x.event?x.event(e):e)}function Xe(e){return this.l[e.type+!0](x.event?x.event(e):e)}function Le(e,o,r,t,i,a,f,d,s){var u,n,g,_,l,m,w,h,I,k,N,B,q,U,$,b=o.type;if(o.constructor!==void 0)return null;r.__h!=null&&(s=r.__h,d=o.__e=r.__e,o.__h=null,a=[d]),(u=x.__b)&&u(o);try{e:if(typeof b=="function"){if(h=o.props,I=(u=b.contextType)&&t[u.__c],k=u?I?I.props.value:u.__:t,r.__c?w=(n=o.__c=r.__c).__=n.__E:("prototype"in b&&b.prototype.render?o.__c=n=new b(h,k):(o.__c=n=new se(h,k),n.constructor=b,n.render=Mr),I&&I.sub(n),n.props=h,n.state||(n.state={}),n.context=k,n.__n=t,g=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),b.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=V({},n.__s)),V(n.__s,b.getDerivedStateFromProps(h,n.__s))),_=n.props,l=n.state,n.__v=o,g)b.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(b.getDerivedStateFromProps==null&&h!==_&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(h,k),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(h,n.__s,k)===!1||o.__v===r.__v){for(o.__v!==r.__v&&(n.props=h,n.state=n.__s,n.__d=!1),n.__e=!1,o.__e=r.__e,o.__k=r.__k,o.__k.forEach(function(H){H&&(H.__=o)}),N=0;N<n._sb.length;N++)n.__h.push(n._sb[N]);n._sb=[],n.__h.length&&f.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(h,n.__s,k),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(_,l,m)})}if(n.context=k,n.props=h,n.__P=e,B=x.__r,q=0,"prototype"in b&&b.prototype.render){for(n.state=n.__s,n.__d=!1,B&&B(o),u=n.render(n.props,n.state,n.context),U=0;U<n._sb.length;U++)n.__h.push(n._sb[U]);n._sb=[]}else do n.__d=!1,B&&B(o),u=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++q<25);n.state=n.__s,n.getChildContext!=null&&(t=V(V({},t),n.getChildContext())),g||n.getSnapshotBeforeUpdate==null||(m=n.getSnapshotBeforeUpdate(_,l)),eo(e,xe($=u!=null&&u.type===ge&&u.key==null?u.props.children:u)?$:[$],o,r,t,i,a,f,d,s),n.base=o.__e,o.__h=null,n.__h.length&&f.push(n),w&&(n.__E=n.__=null),n.__e=!1}else a==null&&o.__v===r.__v?(o.__k=r.__k,o.__e=r.__e):o.__e=Hr(r.__e,o,r,t,i,a,f,s);(u=x.diffed)&&u(o)}catch(H){o.__v=null,(s||a!=null)&&(o.__e=d,o.__h=!!s,a[a.indexOf(d)]=null),x.__e(H,o,r)}}function no(e,o){x.__c&&x.__c(o,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(t){t.call(r)})}catch(t){x.__e(t,r.__v)}})}function Hr(e,o,r,t,i,a,f,d){var s,u,n,g=r.props,_=o.props,l=o.type,m=0;if(l==="svg"&&(i=!0),a!=null){for(;m<a.length;m++)if((s=a[m])&&"setAttribute"in s==!!l&&(l?s.localName===l:s.nodeType===3)){e=s,a[m]=null;break}}if(e==null){if(l===null)return document.createTextNode(_);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,_.is&&_),a=null,d=!1}if(l===null)g===_||d&&e.data===_||(e.data=_);else{if(a=a&&me.call(e.childNodes),u=(g=r.props||de).dangerouslySetInnerHTML,n=_.dangerouslySetInnerHTML,!d){if(a!=null)for(g={},m=0;m<e.attributes.length;m++)g[e.attributes[m].name]=e.attributes[m].value;(n||u)&&(n&&(u&&n.__html==u.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(Nr(e,_,g,i,d),n)o.__k=[];else if(eo(e,xe(m=o.props.children)?m:[m],o,r,t,i&&l!=="foreignObject",a,f,a?a[0]:r.__k&&X(r,0),d),a!=null)for(m=a.length;m--;)a[m]!=null&&Ze(a[m]);d||("value"in _&&(m=_.value)!==void 0&&(m!==e.value||l==="progress"&&!m||l==="option"&&m!==g.value)&&pe(e,"value",m,g.value,!1),"checked"in _&&(m=_.checked)!==void 0&&m!==e.checked&&pe(e,"checked",m,g.checked,!1))}return e}function ao(e,o,r){try{typeof e=="function"?e(o):e.current=o}catch(t){x.__e(t,r)}}function io(e,o,r){var t,i;if(x.unmount&&x.unmount(e),(t=e.ref)&&(t.current&&t.current!==e.__e||ao(t,null,o)),(t=e.__c)!=null){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(a){x.__e(a,o)}t.base=t.__P=null,e.__c=void 0}if(t=e.__k)for(i=0;i<t.length;i++)t[i]&&io(t[i],o,r||typeof e.type!="function");r||e.__e==null||Ze(e.__e),e.__=e.__e=e.__d=void 0}function Mr(e,o,r){return this.constructor(e,r)}function co(e,o,r){var t,i,a;x.__&&x.__(e,o),i=(t=typeof r=="function")?null:r&&r.__k||o.__k,a=[],Le(o,e=(!t&&r||o).__k=c(ge,null,[e]),i||de,de,o.ownerSVGElement!==void 0,!t&&r?[r]:i?null:o.firstChild?me.call(o.childNodes):null,a,!t&&r?r:i?i.__e:o.firstChild,t),no(a,e)}var me,x,je,Er,O,Oe,Je,Se,Tr,de,Ye,Ar,xe,E=p(()=>{de={},Ye=[],Ar=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,xe=Array.isArray;me=Ye.slice,x={__e:function(e,o,r,t){for(var i,a,f;o=o.__;)if((i=o.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),f=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,t||{}),f=i.__d),f)return i.__E=i}catch(d){e=d}throw e}},je=0,Er=function(e){return e!=null&&e.constructor===void 0},se.prototype.setState=function(e,o){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=V({},this.state),typeof e=="function"&&(e=e(V({},r),this.props)),e&&V(r,e),e!=null&&this.__v&&(o&&this._sb.push(o),Ke(this))},se.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ke(this))},se.prototype.render=ge,O=[],Je=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Se=function(e,o){return e.__v.__b-o.__v.__b},ue.__r=0,Tr=0});function P(e){return e.filter(function(o){return o!==null}).join(" ")}var j=p(()=>{});function Ae(e,o){x.__h&&x.__h(S,e,Y||o),Y=0;var r=S.__H||(S.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({__V:he}),r.__[e]}function ye(e){return Y=1,Fr(bo,e)}function Fr(e,o,r){var t=Ae(J++,2);if(t.t=e,!t.__c&&(t.__=[r?r(o):bo(void 0,o),function(d){var s=t.__N?t.__N[0]:t.__[0],u=t.t(s,d);s!==u&&(t.__N=[u,t.__[1]],t.__c.setState({}))}],t.__c=S,!S.u)){var i=function(d,s,u){if(!t.__c.__H)return!0;var n=t.__c.__H.__.filter(function(_){return _.__c});if(n.every(function(_){return!_.__N}))return!a||a.call(this,d,s,u);var g=!1;return n.forEach(function(_){if(_.__N){var l=_.__[0];_.__=_.__N,_.__N=void 0,l!==_.__[0]&&(g=!0)}}),!(!g&&t.__c.props===d)&&(!a||a.call(this,d,s,u))};S.u=!0;var a=S.shouldComponentUpdate,f=S.componentWillUpdate;S.componentWillUpdate=function(d,s,u){if(this.__e){var n=a;a=void 0,i(d,s,u),a=n}f&&f.call(this,d,s,u)},S.shouldComponentUpdate=i}return t.__N||t.__}function M(e,o){var r=Ae(J++,3);!x.__s&&ho(r.__H,o)&&(r.__=e,r.i=o,S.__H.__h.push(r))}function Ne(e){return Y=5,go(function(){return{current:e}},[])}function go(e,o){var r=Ae(J++,7);return ho(r.__H,o)?(r.__V=e(),r.i=o,r.__h=e,r.__V):r.__}function L(e,o){return Y=8,go(function(){return e},o)}function Dr(){for(var e;e=xo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(be),e.__H.__h.forEach(Te),e.__H.__h=[]}catch(o){e.__H.__h=[],x.__e(o,e.__v)}}function Br(e){var o,r=function(){clearTimeout(t),mo&&cancelAnimationFrame(o),setTimeout(e)},t=setTimeout(r,100);mo&&(o=requestAnimationFrame(r))}function be(e){var o=S,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),S=o}function Te(e){var o=S;e.__c=e.__(),S=o}function ho(e,o){return!e||e.length!==o.length||o.some(function(r,t){return r!==e[t]})}function bo(e,o){return typeof o=="function"?o(e):o}var J,S,Ee,lo,Y,xo,he,_o,fo,so,uo,po,mo,F=p(()=>{E();Y=0,xo=[],he=[],_o=x.__b,fo=x.__r,so=x.diffed,uo=x.__c,po=x.unmount;x.__b=function(e){S=null,_o&&_o(e)},x.__r=function(e){fo&&fo(e),J=0;var o=(S=e.__c).__H;o&&(Ee===S?(o.__h=[],S.__h=[],o.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=he,r.__N=r.i=void 0})):(o.__h.forEach(be),o.__h.forEach(Te),o.__h=[],J=0)),Ee=S},x.diffed=function(e){so&&so(e);var o=e.__c;o&&o.__H&&(o.__H.__h.length&&(xo.push(o)!==1&&lo===x.requestAnimationFrame||((lo=x.requestAnimationFrame)||Br)(Dr)),o.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==he&&(r.__=r.__V),r.i=void 0,r.__V=he})),Ee=S=null},x.__c=function(e,o){o.some(function(r){try{r.__h.forEach(be),r.__h=r.__h.filter(function(t){return!t.__||Te(t)})}catch(t){o.some(function(i){i.__h&&(i.__h=[])}),o=[],x.__e(t,r.__v)}}),uo&&uo(e,o)},x.unmount=function(e){po&&po(e);var o,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(t){try{be(t)}catch(i){o=i}}),r.__H=void 0,o&&x.__e(o,r.__v))};mo=typeof requestAnimationFrame=="function"});var He,yo=p(()=>{if(document.getElementById("8d769924f1")===null){let e=document.createElement("style");e.id="8d769924f1",e.textContent="._loadingIndicator_pl5c3_1{height:16px;margin:0 auto;position:relative;width:16px}._svg_pl5c3_8{fill:currentColor;animation:_rotating_pl5c3_1 .5s linear infinite;height:16px;left:0;position:absolute;top:0;width:16px}@keyframes _rotating_pl5c3_1{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}",document.head.append(e)}He={loadingIndicator:"_loadingIndicator_pl5c3_1",svg:"_svg_pl5c3_8",rotating:"_rotating_pl5c3_1"}});function vo(r){var t=r,{color:e}=t,o=C(t,["color"]);return c("div",v(y({},o),{class:He.loadingIndicator}),c("svg",{class:He.svg,style:typeof e>"u"?void 0:{fill:`var(--figma-color-icon-${e})`}},c("path",{d:"M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z"})))}var Io=p(()=>{E();yo()});var D,Co=p(()=>{if(document.getElementById("b711d1401d")===null){let e=document.createElement("style");e.id="b711d1401d",e.textContent="._button_5fxgc_1{display:inline-block;position:relative;z-index:var(--z-index-1)}._fullWidth_5fxgc_7{display:block}._button_5fxgc_1 button{border-radius:var(--border-radius-6);display:inline-block;height:32px}._disabled_5fxgc_17 button{cursor:not-allowed}._fullWidth_5fxgc_7 button{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}._default_5fxgc_29 button{background-color:var(--figma-color-bg-brand);border:2px solid transparent;color:var(--figma-color-text-onbrand);line-height:28px;padding:0 14px}._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong)}._default_5fxgc_29._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 button{background-color:var(--figma-color-bg-danger);color:var(--figma-color-text-ondanger)}._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button{background-color:var(--figma-color-bg-disabled);color:var(--figma-color-text-ondisabled)}._secondary_5fxgc_56 button{background-color:transparent;border:1px solid var(--figma-color-border-strong);color:var(--figma-color-text);line-height:30px;padding:0 15px}._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-brand-strong);border-width:2px;line-height:28px;padding:0 14px}._secondary_5fxgc_56._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 button{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44 button,._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus{border-color:var(--figma-color-border-danger-strong)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button{border-color:var(--figma-color-border-disabled-strong);color:var(--figma-color-text-disabled)}._loadingIndicator_5fxgc_86{left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%)}._default_5fxgc_29 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-onbrand)}._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondanger)}._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-icon-ondisabled)}._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text)}._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-danger)}._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86{color:var(--figma-color-text-disabled)}._children_5fxgc_122{display:inline}._loading_5fxgc_86 ._children_5fxgc_122{visibility:hidden}",document.head.append(e)}D={button:"_button_5fxgc_1",fullWidth:"_fullWidth_5fxgc_7",disabled:"_disabled_5fxgc_17",default:"_default_5fxgc_29",danger:"_danger_5fxgc_44",secondary:"_secondary_5fxgc_56",loadingIndicator:"_loadingIndicator_5fxgc_86",children:"_children_5fxgc_122",loading:"_loading_5fxgc_86"}});function Z(u){var n=u,{children:e,danger:o=!1,disabled:r=!1,fullWidth:t=!1,loading:i=!1,onClick:a,propagateEscapeKeyDown:f=!0,secondary:d=!1}=n,s=C(n,["children","danger","disabled","fullWidth","loading","onClick","propagateEscapeKeyDown","secondary"]);let g=L(function(_){_.key==="Escape"&&(f===!1&&_.stopPropagation(),_.currentTarget.blur())},[f]);return c("div",{class:P([D.button,d===!0?D.secondary:D.default,o===!0?D.danger:null,t===!0?D.fullWidth:null,r===!0?D.disabled:null,i===!0?D.loading:null])},i===!0?c("div",{class:D.loadingIndicator},c(vo,null)):null,c("button",v(y({},s),{disabled:r===!0,onClick:r===!0||i===!0?void 0:a,onKeyDown:r===!0||i===!0?void 0:g,tabIndex:r===!0?-1:0}),c("div",{class:D.children},e)))}var ko=p(()=>{E();F();j();Io();Co()});var So,wo=p(()=>{if(document.getElementById("5eec170d36")===null){let e=document.createElement("style");e.id="5eec170d36",e.textContent="._icon_13804_1{fill:currentColor}",document.head.append(e)}So={icon:"_icon_13804_1"}});function Lo(e,o){let{width:r,height:t}=o;return function(d){var s=d,{color:a}=s,f=C(s,["color"]);return c("svg",v(y({},f),{class:So.icon,height:t,style:typeof a>"u"?void 0:{fill:`var(--figma-color-icon-${a})`},width:r,xmlns:"http://www.w3.org/2000/svg"}),c("path",{"clip-rule":"evenodd",d:e,"fill-rule":"evenodd"}))}}var Eo=p(()=>{E();wo()});var To,Ao=p(()=>{Eo();To=Lo("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024l1.17647-1.17647Z",{height:12,width:12})});var z,No=p(()=>{if(document.getElementById("73ba73131b")===null){let e=document.createElement("style");e.id="73ba73131b",e.textContent=`._checkbox_1a43f_1{position:relative;z-index:var(--z-index-1)}._input_1a43f_6{bottom:-8px;display:block;left:-16px;position:absolute;right:-16px;top:-8px;width:calc(100% + 32px);z-index:var(
    --z-index-1
  )}._disabled_1a43f_18 ._input_1a43f_6{cursor:not-allowed}._border_1a43f_23,._fill_1a43f_22{border-radius:var(--border-radius-2);height:12px;left:0;position:absolute;top:0;width:12px}._border_1a43f_23{border:1px solid var(--figma-color-border-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:focus~._border_1a43f_23{border-color:var(--figma-color-border-brand-strong);box-shadow:0 0 0 1px var(--figma-color-border-brand-strong)}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked:focus~._border_1a43f_23{box-shadow:0 0 0 1px var(--figma-color-bg),0 0 0 2px var(--figma-color-border-brand-strong)}._disabled_1a43f_18 ._input_1a43f_6~._border_1a43f_23{border-color:var(--figma-color-border-disabled-strong)}._disabled_1a43f_18 ._input_1a43f_6:checked~._border_1a43f_23{border:0}._checkbox_1a43f_1:not(._disabled_1a43f_18) ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-brand)}._disabled_1a43f_18 ._input_1a43f_6:checked~._fill_1a43f_22{background-color:var(--figma-color-bg-disabled)}._checkIcon_1a43f_60{color:var(--figma-color-icon-onbrand)}._disabled_1a43f_18 ._checkIcon_1a43f_60{color:var(--figma-color-icon-ondisabled)}._children_1a43f_67{color:var(--figma-color-text);min-height:12px;padding:2px 0 0 20px}._disabled_1a43f_18 ._children_1a43f_67{opacity:var(--opacity-30)}`,document.head.append(e)}z={checkbox:"_checkbox_1a43f_1",input:"_input_1a43f_6",disabled:"_disabled_1a43f_18",fill:"_fill_1a43f_22",border:"_border_1a43f_23",checkIcon:"_checkIcon_1a43f_60",children:"_children_1a43f_67"}});function W(s){var u=s,{children:e,disabled:o=!1,name:r,onChange:t=function(){},onValueChange:i=function(){},propagateEscapeKeyDown:a=!0,value:f=!1}=u,d=C(u,["children","disabled","name","onChange","onValueChange","propagateEscapeKeyDown","value"]);let n=L(function(_){let l=_.currentTarget.checked;i(l,r),t(_)},[r,t,i]),g=L(function(_){_.key==="Escape"&&(a===!1&&_.stopPropagation(),_.currentTarget.blur())},[a]);return c("label",{class:P([z.checkbox,o===!0?z.disabled:null])},c("input",v(y({},d),{checked:f===!0,class:z.input,disabled:o===!0,name:r,onChange:n,onKeyDown:g,tabIndex:o===!0?-1:0,type:"checkbox"})),c("div",{class:z.fill},f===!0?c("div",{class:z.checkIcon},c(To,null)):null),c("div",{class:z.border}),c("div",{class:z.children},e))}var Ho=p(()=>{E();F();Ao();j();No()});function Mo(e){if(e.current===null)throw new Error("`ref.current` is `undefined`");return e.current}var Fo=p(()=>{});function Do(e){let o=(typeof e>"u"?document:e).querySelectorAll(':not([disabled])[tabindex]:not([tabindex="-1"])');return Array.prototype.slice.call(o)}var Bo=p(()=>{});function Ro(e){return function(o){if(o.key!=="Tab")return;o.preventDefault();let r=Do(e);if(r.length===0)return;let t=Rr(o.target,r);if(t===r.length-1&&o.shiftKey===!1){r[0].focus();return}if(t===0&&o.shiftKey===!0){r[r.length-1].focus();return}r[o.shiftKey===!0?t-1:t+1].focus()}}function Rr(e,o){return o.reduce(function(r,t,i){return r===-1&&t.isSameNode(e)===!0?i:r},-1)}var Uo=p(()=>{Bo()});var ve,Vo=p(()=>{if(document.getElementById("5d5845ed91")===null){let e=document.createElement("style");e.id="5d5845ed91",e.textContent='._text_mh6mm_1{color:var(--figma-color-text);padding-top:1px;pointer-events:none;transform:translateY(4px)}._text_mh6mm_1:before{content:"";display:block;height:0;margin-top:-9px;pointer-events:none}._numeric_mh6mm_15{font-variant-numeric:tabular-nums}._left_mh6mm_19{text-align:left}._center_mh6mm_22{text-align:center}._right_mh6mm_25{text-align:right}',document.head.append(e)}ve={text:"_text_mh6mm_1",numeric:"_numeric_mh6mm_15",left:"_left_mh6mm_19",center:"_center_mh6mm_22",right:"_right_mh6mm_25"}});function A(i){var a=i,{align:e="left",children:o,numeric:r=!1}=a,t=C(a,["align","children","numeric"]);return c("div",v(y({},t),{class:P([ve.text,ve[e],r===!0?ve.numeric:null])}),o)}var Po=p(()=>{E();j();Vo()});var Me,zo=p(()=>{if(document.getElementById("84db1b498e")===null){let e=document.createElement("style");e.id="84db1b498e",e.textContent="._extraSmall_dpsd3_1>._child_dpsd3_1:not(:first-child){margin-top:var(--space-extra-small)}._small_dpsd3_4>._child_dpsd3_1:not(:first-child){margin-top:var(--space-small)}._medium_dpsd3_7>._child_dpsd3_1:not(:first-child){margin-top:var(--space-medium)}._large_dpsd3_10>._child_dpsd3_1:not(:first-child){margin-top:var(--space-large)}._extraLarge_dpsd3_13>._child_dpsd3_1:not(:first-child){margin-top:var(--space-extra-large)}",document.head.append(e)}Me={extraSmall:"_extraSmall_dpsd3_1",child:"_child_dpsd3_1",small:"_small_dpsd3_4",medium:"_medium_dpsd3_7",large:"_large_dpsd3_10",extraLarge:"_extraLarge_dpsd3_13"}});function Fe(t){var i=t,{children:e,space:o}=i,r=C(i,["children","space"]);return c("div",v(y({},r),{class:Me[o]}),we(e).map(function(a,f){return c("div",{key:f,class:Me.child},a)}))}var Wo=p(()=>{E();zo()});function ee(e,o){let r=`${Go}`;return Go+=1,Q[r]={handler:o,name:e},function(){delete Q[r]}}function Oo(e,o){for(let r in Q)Q[r].name===e&&Q[r].handler.apply(null,o)}var Q,Go,K,Ko=p(()=>{Q={},Go=0;K=typeof window>"u"?function(e,...o){figma.ui.postMessage([e,...o])}:function(e,...o){window.parent.postMessage({pluginMessage:[e,...o]},"*")};typeof window>"u"?figma.ui.onmessage=function([e,...o]){Oo(e,o)}:window.onmessage=function(e){if(typeof e.data.pluginMessage>"u")return;let[o,...r]=e.data.pluginMessage;Oo(o,r)}});var oe,qo=p(()=>{oe="999999999999999"});var Ie=p(()=>{Ko();qo()});function $o(e){return e===32||e>=48&&e<=57||e>=65&&e<=90||e>=96&&e<=105||e>=186&&e<=192||e>=219&&e<=222}var Xo=p(()=>{});function jo(_){var l=_,{disabled:e=!1,name:o,onInput:r=function(){},onValueInput:t=function(){},password:i=!1,placeholder:a,propagateEscapeKeyDown:f=!0,revertOnEscapeKeyDown:d=!1,spellCheck:s=!1,validateOnBlur:u,value:n}=l,g=C(l,["disabled","name","onInput","onValueInput","password","placeholder","propagateEscapeKeyDown","revertOnEscapeKeyDown","spellCheck","validateOnBlur","value"]);let m=Ne(null),w=Ne(!1),[h,I]=ye(re),k=L(function(b){let H=Mo(m);H.value=b;let Pe=document.createEvent("Event");Pe.initEvent("input",!0,!0),H.dispatchEvent(Pe)},[]),N=L(function(){if(w.current===!0){w.current=!1;return}if(typeof u<"u"){let b=u(n);if(typeof b=="string"){k(b),I(re);return}if(b===!1){n!==h&&k(h),I(re);return}}I(re)},[h,k,u,n]),B=L(function(b){I(n),b.currentTarget.select()},[n]),q=L(function(b){t(b.currentTarget.value,o),r(b)},[o,r,t]),U=L(function(b){let H=b.key;if(H==="Escape"){f===!1&&b.stopPropagation(),d===!0&&(w.current=!0,k(h),I(re)),b.currentTarget.blur();return}if(H==="Enter"){b.currentTarget.blur();return}n===oe&&$o(b.keyCode)===!1&&(b.preventDefault(),b.currentTarget.select())},[h,f,d,k,n]),$=L(function(b){n===oe&&b.preventDefault()},[n]);return c("input",v(y({},g),{ref:m,disabled:e===!0,name:o,onBlur:N,onFocus:B,onInput:q,onKeyDown:U,onMouseUp:$,placeholder:a,spellcheck:s,tabIndex:e===!0?-1:0,type:i===!0?"password":"text",value:n===oe?"Mixed":n}))}var re,Jo=p(()=>{Ie();E();F();Fo();Xo();re=""});var R,Yo=p(()=>{if(document.getElementById("2fe9086382")===null){let e=document.createElement("style");e.id="2fe9086382",e.textContent="._textbox_sir3b_1{position:relative;z-index:var(--z-index-1)}._textbox_sir3b_1:focus-within{z-index:var(--z-index-2)}._input_sir3b_9{background-color:transparent;color:var(--figma-color-text);display:block;height:28px;padding:0 var(--space-extra-small);width:100%}._disabled_sir3b_17 ._input_sir3b_9{color:var(--figma-color-text-disabled);cursor:not-allowed}._hasIcon_sir3b_21 ._input_sir3b_9{padding-left:32px}._input_sir3b_9::placeholder{color:var(--figma-color-text-tertiary)}._icon_sir3b_29{color:var(--figma-color-icon-secondary);left:16px;pointer-events:none;position:absolute;text-align:center;top:14px;transform:translate(-50%,-50%)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._icon_sir3b_29{color:var(--figma-color-icon-brand)}._disabled_sir3b_17 ._icon_sir3b_29{color:var(--figma-color-icon-disabled)}._icon_sir3b_29 svg{fill:currentColor}._border_sir3b_49{border:1px solid transparent;border-radius:var(--border-radius-2);bottom:0;left:0;pointer-events:none;position:absolute;right:0;top:0}._hasBorder_sir3b_59 ._border_sir3b_49,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49{border-color:var(--figma-color-border)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._border_sir3b_49{border-color:var(--figma-color-border-brand-strong);border-width:2px;bottom:-1px;top:-1px}._underline_sir3b_70{background-color:var(--figma-color-border);bottom:0;height:1px;left:var(--space-extra-small);position:absolute;right:var(--space-extra-small)}._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus~._underline_sir3b_70,._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70{background-color:transparent}",document.head.append(e)}R={textbox:"_textbox_sir3b_1",input:"_input_sir3b_9",disabled:"_disabled_sir3b_17",hasIcon:"_hasIcon_sir3b_21",icon:"_icon_sir3b_29",border:"_border_sir3b_49",hasBorder:"_hasBorder_sir3b_59",underline:"_underline_sir3b_70"}});function te(t){var i=t,{icon:e,variant:o}=i,r=C(i,["icon","variant"]);if(typeof e=="string"&&e.length!==1)throw new Error(`String \`icon\` must be a single character: ${e}`);return c("div",{class:P([R.textbox,typeof o>"u"?null:o==="border"?R.hasBorder:null,typeof e>"u"?null:R.hasIcon,r.disabled===!0?R.disabled:null])},c(jo,v(y({},r),{class:R.input})),typeof e>"u"?null:c("div",{class:R.icon},e),c("div",{class:R.border}),o==="underline"?c("div",{class:R.underline}):null)}var Zo=p(()=>{E();j();Jo();Yo()});function Qo(e){M(function(){let o=Ro(e);return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}},[e])}var er=p(()=>{F();Uo()});function or(){return M(function(){let e=document.querySelectorAll(`[${De}]:not([tabindex="-1"]`);if(e.length===0)throw new Error(`No element with attribute \`${De}\``);if(e.length>1){let o=Array.prototype.slice.call(e).find(function(r){let t=r;return t.type==="radio"&&t.checked===!0});if(typeof o<"u"){o.focus();return}}e[0].focus()},[]),{[De]:!0}}var De,rr=p(()=>{F();De="data-initial-focus"});function Be(e,o){let r=L(function(t){t.key===e&&o(t)},[e,o]);M(function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}},[r])}var tr=p(()=>{F()});function ne(e,o){let{close:r,submit:t,transform:i,validate:a}=o,[f,d]=ye(e),s=L(function(l,m){if(typeof m>"u")throw new Error("`name` is `undefined`");d(function(w){let h=v(y({},w),{[m]:l});return typeof i>"u"?h:i(h)})},[i]),u=L(function(){typeof a<"u"&&a(f)===!1||t(f)},[f,t,a]);Be("Enter",u);let n=L(function(){r(f)},[r,f]);Be("Escape",n),Qo();let g=typeof a<"u"?a(f)===!1:!1,_=or();return{disabled:g,formState:f,handleSubmit:u,initialFocus:_,setFormState:s}}var nr=p(()=>{F();er();rr();tr()});var ar,ir=p(()=>{if(document.getElementById("faf1a8d9ee")===null){let e=document.createElement("style");e.id="faf1a8d9ee",e.textContent="._muted_139yx_1{color:var(--figma-color-text-secondary)}",document.head.append(e)}ar={muted:"_muted_139yx_1"}});function G(r){var t=r,{children:e}=t,o=C(t,["children"]);return c("span",v(y({},o),{class:ar.muted}),e)}var cr=p(()=>{E();ir()});var lr,_r=p(()=>{if(document.getElementById("7d8083f24b")===null){let e=document.createElement("style");e.id="7d8083f24b",e.textContent="._extraSmall_1oe77_1{padding:0 var(--space-extra-small)}._small_1oe77_4{padding:0 var(--space-small)}._medium_1oe77_7{padding:0 var(--space-medium)}._large_1oe77_10{padding:0 var(--space-large)}._extraLarge_1oe77_13{padding:0 var(--space-extra-large)}",document.head.append(e)}lr={extraSmall:"_extraSmall_1oe77_1",small:"_small_1oe77_4",medium:"_medium_1oe77_7",large:"_large_1oe77_10",extraLarge:"_extraLarge_1oe77_13"}});function ae(r){var t=r,{space:e}=t,o=C(t,["space"]);return c("div",v(y({},o),{class:lr[e]}))}var fr=p(()=>{E();_r()});var sr,dr=p(()=>{if(document.getElementById("89d2751efa")===null){let e=document.createElement("style");e.id="89d2751efa",e.textContent="._extraSmall_zc4n0_1{height:var(--space-extra-small)}._small_zc4n0_4{height:var(--space-small)}._medium_zc4n0_7{height:var(--space-medium)}._large_zc4n0_10{height:var(--space-large)}._extraLarge_zc4n0_13{height:var(--space-extra-large)}",document.head.append(e)}sr={extraSmall:"_extraSmall_zc4n0_1",small:"_small_zc4n0_4",medium:"_medium_zc4n0_7",large:"_large_zc4n0_10",extraLarge:"_extraLarge_zc4n0_13"}});function T(r){var t=r,{space:e}=t,o=C(t,["space"]);return c("div",v(y({},o),{class:sr[e]}))}var ur=p(()=>{E();dr()});var pr=p(()=>{if(document.getElementById("7c137fcf3f")===null){let e=document.createElement("style");e.id="7c137fcf3f",e.textContent='@import url("https://fonts.googleapis.com/css?family=Inter:400,600&display=swap");:root{--border-radius-2:2px;--border-radius-6:6px;--box-shadow:var(--box-shadow-menu);--box-shadow-menu:0 5px 17px rgba(0,0,0,.2),0 2px 7px rgba(0,0,0,.15),inset 0 0 0 0.5px #000,0 0 0 0.5px rgba(0,0,0,.1);--box-shadow-modal:0 2px 14px rgba(0,0,0,.15),0 0 0 0.5px rgba(0,0,0,.2);--font-family:"Inter","Helvetica",sans-serif;--font-family-code:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--font-size-11:11px;--font-size-12:12px;--font-weight-regular:400;--font-weight-bold:600;--line-height-16:16px;--opacity-30:0.3;--space-extra-small:8px;--space-small:12px;--space-medium:16px;--space-large:20px;--space-extra-large:24px;--z-index-1:1;--z-index-2:2}.figma-dark{color-scheme:dark}*{border:0 solid;box-sizing:border-box}body{background-color:var(--figma-color-bg);color:var(--figma-color-text);font-family:var(--font-family);font-size:var(--font-size-11);font-weight:var(--font-weight-regular);line-height:var(--line-height-16);margin:0}div,span{cursor:default;user-select:none}h1,h2,h3{font-weight:inherit;margin:0}button{-webkit-appearance:none;background-color:transparent;border:0;font:inherit;outline:0;padding:0}hr{border:0;margin:0}label{display:block}input,textarea{-webkit-appearance:none;border:0;cursor:default;font:inherit;margin:0;outline:0;padding:0}svg{display:block}::selection{background-color:var(--figma-color-bg-onselected)}',document.head.prepend(e)}});function ie(e){return function(o,r){co(c(e,y({},r)),o)}}var mr=p(()=>{pr();E()});var ce=p(()=>{ko();Ho();Po();Zo();nr();cr();fr();Wo();ur();mr()});function xr(e){let{disabled:o,formState:r,handleSubmit:t,initialFocus:i,setFormState:a}=ne(v(y({},e),{loading:!1}),{close:function(){K("CLOSE_UI")},submit:function({deleteHiddenLayers:w,loading:h,pixelPerfect:I,skipLockedLayers:k,smartRenameLayers:N,smartRenameLayersWhitelist:B,smartSortLayers:q,ungroupSingleLayerGroups:U}){a(h,"loading"),K("SUBMIT",{deleteHiddenLayers:w,pixelPerfect:I,skipLockedLayers:k,smartRenameLayers:N,smartRenameLayersWhitelist:B,smartSortLayers:q,ungroupSingleLayerGroups:U})},validate:function({deleteHiddenLayers:w,pixelPerfect:h,smartRenameLayers:I,smartSortLayers:k,ungroupSingleLayerGroups:N}){return w===!0||h===!0||I===!0||k===!0||N===!0}});M(function(){return ee("SELECTION_CHANGED",function(w){a(w,"hasSelection")})},[a]);let{deleteHiddenLayers:f,hasSelection:d,loading:s,pixelPerfect:u,skipLockedLayers:n,smartRenameLayers:g,smartRenameLayersWhitelist:_,smartSortLayers:l,ungroupSingleLayerGroups:m}=r;return c(ae,{space:"medium"},c(T,{space:"extraLarge"}),c(Fe,{space:"large"},c(W,{disabled:s===!0,name:"deleteHiddenLayers",onValueChange:a,value:f},c(A,null,"Delete hidden layers")),c(W,{disabled:s===!0,name:"ungroupSingleLayerGroups",onValueChange:a,value:m},c(A,null,"Ungroup single-layer groups")),c(W,{disabled:s===!0,name:"pixelPerfect",onValueChange:a,value:u},c(A,null,"Make pixel-perfect")),c(W,{disabled:s===!0,name:"smartRenameLayers",onValueChange:a,value:g},c(A,null,"Smart rename layers"),c(T,{space:"medium"}),c(A,null,c(G,null,"Ignore layers named")),c(T,{space:"small"}),c(te,{disabled:g===!1||s===!0,name:"smartRenameLayersWhitelist",onValueInput:a,value:_,variant:"border"})),c(W,{disabled:s===!0,name:"smartSortLayers",onValueChange:a,value:l},c(A,null,"Smart sort layers"),c(T,{space:"medium"}),c(A,null,c(G,null,"Sort layers by their X and Y position while maintaining their relative stacking order on the page"))),c(W,{disabled:s===!0,name:"skipLockedLayers",onValueChange:a,value:n},c(A,null,"Skip locked layers"))),c(T,{space:"extraLarge"}),c(Z,v(y({},i),{disabled:o||s===!0,fullWidth:!0,loading:s===!0,onClick:t}),"Clean Layers"),c(T,{space:"medium"}),c(A,{align:"center"},c(G,null,d===!0?"Cleaning layers in selection":"Cleaning all layers on page")),c(T,{space:"extraLarge"}))}var gr=p(()=>{"use strict";ce();Ie();E();F()});var Re={};Ge(Re,{default:()=>Ur});var Ur,Ue=p(()=>{"use strict";ce();gr();Ur=ie(xr)});function hr(e){let{formState:o,handleSubmit:r,initialFocus:t,setFormState:i}=ne(v(y({},e),{loading:!1}),{close:function(){K("CLOSE_UI")},submit:function({loading:s,smartRenameLayersWhitelist:u}){i(s,"loading"),K("SUBMIT",u)}});M(function(){return ee("SELECTION_CHANGED",function(s){i(s,"hasSelection")})},[i]);let{hasSelection:a,loading:f,smartRenameLayersWhitelist:d}=o;return c(ae,{space:"medium"},c(T,{space:"large"}),c(A,null,c(G,null,"Ignore layers named")),c(T,{space:"small"}),c(te,v(y({},t),{disabled:f===!0,name:"smartRenameLayersWhitelist",onValueInput:i,value:d,variant:"border"})),c(T,{space:"extraLarge"}),c(Z,{disabled:f===!0,fullWidth:!0,loading:f===!0,onClick:r},"Smart Rename Layers"),c(T,{space:"small"}),c(A,{align:"center"},c(G,null,a===!0?"Renaming layers in selection":"Renaming all layers on page")),c(T,{space:"extraLarge"}))}var br=p(()=>{"use strict";ce();Ie();E();F()});var yr={};Ge(yr,{default:()=>Vr});var Vr,vr=p(()=>{"use strict";ce();br();Vr=ie(hr)});var Pr=document.getElementById("create-figma-plugin"),Ir={"src/clean-nodes/main.ts--default":(Ue(),ke(Re)).default,"src/smart-rename-nodes/main.ts--default":(vr(),ke(yr)).default,cleanLayers:(Ue(),ke(Re)).default},Ve=__FIGMA_COMMAND__===""?"src/clean-nodes/main.ts--default":__FIGMA_COMMAND__;if(typeof Ir[Ve]>"u")throw new Error("No UI defined for command `"+Ve+"`");Ir[Ve](Pr,__SHOW_UI_DATA__);})();
