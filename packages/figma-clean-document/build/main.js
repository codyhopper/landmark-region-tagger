(()=>{var kt=Object.create;var R=Object.defineProperty,Bt=Object.defineProperties,Ut=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertyNames,Pe=Object.getOwnPropertySymbols,Ft=Object.getPrototypeOf,Ee=Object.prototype.hasOwnProperty,Gt=Object.prototype.propertyIsEnumerable;var Oe=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))Ee.call(t,r)&&Oe(e,r,t[r]);if(Pe)for(var r of Pe(t))Gt.call(t,r)&&Oe(e,r,t[r]);return e},g=(e,t)=>Bt(e,$t(t));var s=(e,t)=>()=>(e&&(t=e(e=0)),t);var te=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),b=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},Ie=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ht(t))!Ee.call(e,o)&&o!==r&&R(e,o,{get:()=>t[o],enumerable:!(n=Ut(t,o))||n.enumerable});return e};var we=(e,t,r)=>(r=e!=null?kt(Ft(e)):{},Ie(t||!e||!e.__esModule?R(r,"default",{value:e,enumerable:!0}):r,e)),N=e=>Ie(R({},"__esModule",{value:!0}),e);function Te(e,t){let r=`${Le}`;return Le+=1,v[r]={handler:t,name:e},function(){delete v[r]}}function O(e,t){let r=!1;return Te(e,function(...n){r!==!0&&(r=!0,t(...n))})}function Me(e,t){for(let r in v)v[r].name===e&&v[r].handler.apply(null,t)}var v,Le,_,Re=s(()=>{v={},Le=0;_=typeof window=="undefined"?function(e,...t){figma.ui.postMessage([e,...t])}:function(e,...t){window.parent.postMessage({pluginMessage:[e,...t]},"*")};typeof window=="undefined"?figma.ui.onmessage=function([e,...t]){Me(e,t)}:window.onmessage=function(e){if(typeof e.data.pluginMessage=="undefined")return;let[t,...r]=e.data.pluginMessage;Me(t,r)}});function re(e){return{x:e.absoluteTransform[0][2],y:e.absoluteTransform[1][2]}}var ve=s(()=>{});function A(e,t,r){if(e.removed!==!0){if("children"in e&&(typeof r!="function"||r(e)===!1))for(let n of e.children)A(n,t,r);t(e)}}var ne=s(()=>{});function oe(e){let t=!1;return A(e,function(r){"expanded"in r&&r.expanded===!0&&(r.expanded=!1,t=!0)}),t}var _e=s(()=>{ne()});function y(e){let t=e.parent;if(t===null)throw new Error("`node.parent` is `null`");return t}var k=s(()=>{});function ie(e){if("rotation"in e&&e.rotation===0){let m=re(e),{width:f,height:u}=e;return g(p({},m),{height:u,width:f})}let t=y(e),r=t.children.indexOf(e),n=figma.group([e],t,r),o=re(n),{width:i,height:a}=n;return t.insertChild(r,e),g(p({},o),{height:a,width:i})}var ke=s(()=>{ve();k()});function B(){let e=figma.currentPage.selection;return e.length>0?e.slice():figma.currentPage.children.slice()}var Be=s(()=>{});function h(e){let t=e.parent;return t===null||t.type==="DOCUMENT"||t.type==="PAGE"?!1:t.type==="INSTANCE"?!0:h(t)}var Ue=s(()=>{});function $e(e){let t=e.getPluginData(se);return t===""?{}:JSON.parse(t)}function He(e,t){if(Object.keys(t).length===0){e.setPluginData(se,"");return}e.setPluginData(se,JSON.stringify(t))}var se,Fe=s(()=>{se="relaunchButtons"});function ae(e,t,r={description:""}){let n=g(p({},$e(e)),{[t]:r.description});He(e,n),e.setRelaunchData(n)}var Ge=s(()=>{Fe()});function De(e){if(e.length<2)return!0;let[t,...r]=e,n=y(t);for(let o of r)if(o.parent===null||o.parent.id!==n.id)return!1;return!0}var We=s(()=>{k()});function V(e){let t=Dt(e),r=[];for(let n of t){let o=y(n[0]),i=n.map(function(a){return{index:o.children.indexOf(a),node:a}}).sort(function(a,m){return a.index-m.index}).map(function({node:a}){return a});r.push(i)}return r}function Dt(e){let t={};for(let r of e){let o=y(r).id;o in t||(t[o]=[]),t[o].push(r)}return Object.values(t)}var je=s(()=>{k()});var qe=te(($r,Ve)=>{var ze=function(e,t){var r,n,o=1,i=0,a=0,m=String.alphabet;function f(u,l,c){if(c){for(r=l;c=f(u,r),c<76&&c>65;)++r;return+u.slice(l-1,r)}return c=m&&m.indexOf(u.charAt(l)),c>-1?c+76:(c=u.charCodeAt(l)||0,c<45||c>127?c:c<46?65:c<48?c-1:c<58?c+18:c<65?c-11:c<91?c+11:c<97?c-37:c<123?c+5:c-63)}if((e+="")!=(t+="")){for(;o;)if(n=f(e,i++),o=f(t,a++),n<76&&o<76&&n>66&&o>66&&(n=f(e,i,i),o=f(t,a,i=r),a=r),n!=o)return n<o?-1:1}return 0};try{Ve.exports=ze}catch(e){String.naturalCompare=ze}});function U(e,t){if(e.length!==t.length)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}var ce=s(()=>{});function $(e){let t=y(e[0]);if(De(e)===!1)throw new Error("Nodes in `siblingNodes` do not have the same parent");let r=e.slice(),n=t.children.map(function({id:a}){return a}),o=Wt(r,n);for(let a of r)t.insertChild(o,a);let i=t.children.map(function({id:a}){return a});return U(n,i)===!1}function Wt(e,t){let r=-1;for(let n of e){let o=t.indexOf(n.id);o>r&&(r=o)}return r+1}var Ke=s(()=>{ce();k();We()});async function H(e,t=Ye){let r=await figma.clientStorage.getAsync(t);return typeof r=="undefined"?e:Object.assign({},e,r)}async function E(e,t=Ye){await figma.clientStorage.setAsync(t,e)}var Ye,Xe=s(()=>{Ye="settings"});function x(e){return`${jt} ${Je} ${e}`}function I(e){return`${zt} ${Je} ${e}`}var jt,zt,Je,Ze=s(()=>{jt="\u2714",zt="\u2718",Je="\xA0"});function S(e,t,r){return e===1?t:typeof r=="undefined"?`${t}s`:r}var Qe=s(()=>{});function F(e,t){if(typeof __html__=="undefined")throw new Error("No UI defined");let r=`<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command=="undefined"?"":figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof t=="undefined"?{}:t)};${__html__}<\/script>`;figma.showUI(r,g(p({},e),{themeColors:typeof e.themeColors=="undefined"?!0:e.themeColors}))}var et=s(()=>{});var d=s(()=>{Re();_e();ke();Be();Ue();Ge();je();Ke();ne();ce();Xe();Ze();Qe();et()});function q(e){if(e.visible===!0||h(e)===!0)return!1;e.remove();let t=figma.currentPage.selection;return t.indexOf(e)!==-1&&(figma.currentPage.selection=t.filter(function({id:r}){return r!==e.id})),!0}var ue=s(()=>{"use strict";d()});function K(e){if(e.type==="GROUP"||e.type==="VECTOR"||e.type==="BOOLEAN_OPERATION"||h(e)===!0)return!1;let t=!1;return Number.isInteger(e.x)===!1&&(t=!0,e.x=Math.round(e.x)),Number.isInteger(e.y)===!1&&(t=!0,e.y=Math.round(e.y)),(Number.isInteger(e.width)===!1||Number.isInteger(e.height)===!1)&&(t=!0,e.type==="LINE"?(e.width===0&&e.resize(0,Math.round(e.height)),e.height===0&&e.resize(Math.round(e.width),0)):"resize"in e&&e.resize(Math.round(e.width),Math.round(e.height))),t}var fe=s(()=>{"use strict";d()});function G(e,t){if(e.type!=="WIDGET"&&e.exportSettings.length!==0||t!==null&&t.test(e.name)===!0)return!1;let r=e.name;switch(e.type){case"BOOLEAN_OPERATION":{switch(e.booleanOperation){case"UNION":{e.name="Union";break}case"INTERSECT":{e.name="Intersect";break}case"SUBTRACT":{e.name="Subtract";break}case"EXCLUDE":{e.name="Exclude";break}}break}case"ELLIPSE":{e.name="Ellipse";break}case"FRAME":{if(e.parent!==null&&e.parent.type!=="PAGE"){if(e.layoutMode==="HORIZONTAL"){e.name="Auto Layout Horizontal";break}if(e.layoutMode==="VERTICAL"){e.name="Auto Layout Vertical";break}e.name="Frame"}break}case"GROUP":{if("isMask"in e.children[0]&&e.children[0].isMask===!0){e.name="Mask Group";break}e.name="Group";break}case"INSTANCE":{e.mainComponent!==null&&(e.name=e.mainComponent.name);break}case"LINE":{e.name="Line";break}case"POLYGON":{e.name="Polygon";break}case"RECTANGLE":{if(e.isMask===!0){e.name="Mask";break}let n=e.fills;if(n.length===1&&n[0].type==="IMAGE"){e.name="Image";break}e.name="Rectangle";break}case"STAR":{e.name="Star";break}case"TEXT":{e.characters.length>0&&(e.autoRename=!0);break}case"VECTOR":{let n=e.vectorNetwork.segments;if(n.length===1){let{tangentStart:o,tangentEnd:i}=n[0];if(typeof o!="undefined"&&o.x===0&&o.y===0&&typeof i!="undefined"&&i.x===0&&i.y===0){e.name="Line";break}}e.name="Vector";break}}return e.name!==r}var le=s(()=>{"use strict"});function D(e){if(Vt(e)===!1||h(e)===!0)return!1;let t=e.parent;if(t===null)return!1;let r=t.children.indexOf(e);if("children"in e){let n=e.children[0],o=figma.currentPage.selection;if(o.indexOf(e)!==-1){let i=o.filter(function({id:a}){return a!==e.id});i.push(n),figma.currentPage.selection=i}return t.insertChild(r,n),!0}return!1}function Vt(e){return e.type==="GROUP"&&e.children.length===1&&e.backgrounds.length===0&&e.blendMode==="PASS_THROUGH"&&!("constraints"in e)&&e.effects.length===0&&e.exportSettings.length===0}var me=s(()=>{"use strict";d()});function Y(e,t){let{deleteHiddenLayers:r,pixelPerfect:n,skipLockedLayers:o,smartRenameLayers:i,smartRenameLayersWhitelistRegex:a,ungroupSingleLayerGroups:m}=t;if(o===!0&&e.locked===!0||e.removed===!0)return!1;if(r===!0&&q(e)===!0)return!0;let f=e.parent;if(f===null)return!1;let u=f.children.indexOf(e);if(m===!0&&D(e)===!0)return Y(f.children[u],t);let l=!1;if("children"in e)if(e.type==="INSTANCE"){if(i===!0)for(let c of e.children)l=G(c,a)||l}else for(let c of e.children)l=Y(c,t)||l;return l===!0&&m===!0&&D(e)&&(e=f.children[u]),n===!0&&(l=K(e)||l),i===!0&&(l=G(e,a)||l),l}var tt=s(()=>{"use strict";ue();fe();le();me()});function L(){return figma.currentPage.selection.length===0?"on page":"in selection"}var X=s(()=>{"use strict"});function J(){let e=figma.currentPage.selection;return e.length===0?[figma.currentPage.children.slice()]:e.length===1&&"children"in e[0]?V([e[0],...e[0].children]):V(e.slice())}var de=s(()=>{"use strict";d()});var C,M,Z=s(()=>{"use strict";C="2021-05-01",M={deleteHiddenLayers:!0,pixelPerfect:!0,skipLockedLayers:!1,smartRenameLayers:!0,smartRenameLayersWhitelist:"^@",smartSortLayers:!0,ungroupSingleLayerGroups:!0}});function T(e){let t=figma.notify(e,{timeout:6e4});return function(){t.cancel()}}var Q=s(()=>{"use strict"});function pe(e,t,{ignoreNonConfigurable:r=!1}={}){let{name:n}=e;for(let o of Reflect.ownKeys(t))qt(e,t,o,r);return Yt(e,t),Qt(e,t,n),e}var qt,Kt,Yt,Xt,Jt,Zt,Qt,rt=s(()=>{qt=(e,t,r,n)=>{if(r==="length"||r==="prototype"||r==="arguments"||r==="caller")return;let o=Object.getOwnPropertyDescriptor(e,r),i=Object.getOwnPropertyDescriptor(t,r);!Kt(o,i)&&n||Object.defineProperty(e,r,i)},Kt=function(e,t){return e===void 0||e.configurable||e.writable===t.writable&&e.enumerable===t.enumerable&&e.configurable===t.configurable&&(e.writable||e.value===t.value)},Yt=(e,t)=>{let r=Object.getPrototypeOf(t);r!==Object.getPrototypeOf(e)&&Object.setPrototypeOf(e,r)},Xt=(e,t)=>`/* Wrapped ${e}*/
${t}`,Jt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),Zt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),Qt=(e,t,r)=>{let n=r===""?"":`with ${r.trim()}() `,o=Xt.bind(null,n,t.toString());Object.defineProperty(o,"name",Zt),Object.defineProperty(e,"toString",g(p({},Jt),{value:o}))}});var ot=te((Tn,nt)=>{"use strict";nt.exports=()=>{let e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}});var st=te((w,he)=>{"use strict";var it=w&&w.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,i){function a(u){try{f(n.next(u))}catch(l){i(l)}}function m(u){try{f(n.throw(u))}catch(l){i(l)}}function f(u){u.done?o(u.value):new r(function(l){l(u.value)}).then(a,m)}f((n=n.apply(e,t||[])).next())})},er=w&&w.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(w,"__esModule",{value:!0});var tr=er(ot());function ge(e,t="maxAge"){let r,n,o,i=()=>it(this,void 0,void 0,function*(){if(r!==void 0)return;let f=u=>it(this,void 0,void 0,function*(){o=tr.default();let l=u[1][t]-Date.now();if(l<=0){e.delete(u[0]),o.resolve();return}return r=u[0],n=setTimeout(()=>{e.delete(u[0]),o&&o.resolve()},l),typeof n.unref=="function"&&n.unref(),o.promise});try{for(let u of e)yield f(u)}catch(u){}r=void 0}),a=()=>{r=void 0,n!==void 0&&(clearTimeout(n),n=void 0),o!==void 0&&(o.reject(void 0),o=void 0)},m=e.set.bind(e);return e.set=(f,u)=>{e.has(f)&&e.delete(f);let l=m(f,u);return r&&r===f&&a(),i(),l},i(),e}w.default=ge;he.exports=ge;he.exports.default=ge});function Ne(e,{cacheKey:t,cache:r=new Map,maxAge:n}={}){typeof n=="number"&&(0,at.default)(r);let o=function(...i){let a=t?t(i):i[0],m=r.get(a);if(m)return m.data;let f=e.apply(this,i);return r.set(a,{data:f,maxAge:n?Date.now()+n:Number.POSITIVE_INFINITY}),f};return pe(o,e,{ignoreNonConfigurable:!0}),rr.set(o,r),o}var at,rr,ct=s(()=>{rt();at=we(st(),1),rr=new WeakMap});function W(e){return nr(e.id,e)}var nr,ut=s(()=>{"use strict";d();ct();nr=Ne(function(e,t){return ie(t)})});function ft(e,t){if("children"in e){let r=e.children;if(r.length<2||e.type==="INSTANCE")return null;if("numberOfFixedChildren"in e&&e.numberOfFixedChildren>0){let o=e.children.length-e.numberOfFixedChildren,i=-1,a=[],m=[];for(;++i<r.length;){let f=r[i];t.indexOf(f.id)!==-1&&(i<o?a.push(f):m.push(f))}return{fixedNodes:ye(m),scrollingNodes:ye(a)}}let n=r.slice().filter(function(o){return t.indexOf(o.id)!==-1});return ye(n)}throw new Error("Node has no children")}function ye(e){let[t,...r]=e,n=[t];for(let o of r){let i=0,a=!1;for(;i<n.length;){let m=n[i];if(or(o,m)===!0||ir(o,m)===!0){n.splice(i,0,o),a=!0;break}i++}a===!1&&n.splice(n.length,0,o)}return n.reverse()}function or(e,t){let r=W(e),n=W(t);return!(r.x+r.width<=n.x||r.x>=n.x+n.width||r.y+r.height<=n.y||r.y>=n.y+n.height)}function ir(e,t){let r=W(e),n=W(t),o=r.y-n.y;return o!==0?o<0:r.x-n.x<0}var lt=s(()=>{ut()});function mt(e){if(e.type!=="FRAME"&&e.type!=="GROUP"||typeof e.children=="undefined")return!1;let t=0;for(let r of e.children)if(r.type==="BOOLEAN_OPERATION"||r.type==="FRAME"||r.type==="GROUP"||r.type==="RECTANGLE"||r.type==="VECTOR"){if(t++,t===50)break}else return!1;return!0}var dt=s(()=>{"use strict"});function ee(e,t){if(e.length<2||h(e[0])===!0)return!1;let r=e[0].parent;if(gt(r)===!0)return!1;let n=!1;n=pt(r,e)||n;for(let o of e)A(o,function(i){gt(i)!==!0&&(t===!0&&i.locked===!0||"children"in i&&(n=pt(i,i.children.slice())||n))},function(i){return i.type==="INSTANCE"||mt(i)===!0});return n}function pt(e,t){let r=sr(t),n=ft(e,r);if(n===null)return!1;if(Array.isArray(n))return $(n);let o=$(n.fixedNodes),i=$(n.scrollingNodes);return o||i}function sr(e){let t=[];for(let r of e)t.push(r.id);return t}function gt(e){return"layoutMode"in e&&(e.layoutMode==="HORIZONTAL"||e.layoutMode==="VERTICAL")}var xe=s(()=>{"use strict";d();lt();dt()});var Se={};b(Se,{default:()=>ar});async function ar(){if(figma.currentPage.children.length===0){figma.closePlugin(I("No layers on page"));return}let e=await H(M,C);O("CLOSE_UI",function(){figma.closePlugin()}),O("SUBMIT",async function(t){await E(t,C);let{deleteHiddenLayers:r,pixelPerfect:n,skipLockedLayers:o,smartRenameLayers:i,smartRenameLayersWhitelist:a,ungroupSingleLayerGroups:m}=t,f=a===""?null:new RegExp(a),u=L(),l=T(`Cleaning layers ${u}\u2026`),c=!1;for(let z of B())c=Y(z,{deleteHiddenLayers:r,pixelPerfect:n,skipLockedLayers:o,smartRenameLayers:i,smartRenameLayersWhitelistRegex:f,ungroupSingleLayerGroups:m})||c,oe(z);if(t.smartSortLayers===!0)for(let z of J())c=ee(z,o)||c;l(),ae(figma.currentPage,"cleanLayers"),figma.closePlugin(c===!0?x(`Cleaned layers ${u}`):`No change to layers ${u}`)}),figma.on("selectionchange",function(){_("SELECTION_CHANGED",figma.currentPage.selection.length>0)}),F({height:416,title:"Clean Layers",width:240},g(p({},e),{hasSelection:figma.currentPage.selection.length>0}))}var be=s(()=>{"use strict";d();tt();X();de();Z();Q();xe()});function P(e){let{processNode:t,stopTraversal:r,createLoadingMessage:n,createSuccessMessage:o,createFailureMessage:i}=e;return function(){if(figma.currentPage.children.length===0){figma.closePlugin(I("No layers on page"));return}let a=B(),m=L(),f=T(n(m)),u=0;for(let l of a)A(l,function(c){t(c)===!0&&u++},r);f(),figma.closePlugin(`${u>0?x(o(m,u)):i(m)}`)}}var j=s(()=>{"use strict";d();X();Q()});var ht={};b(ht,{default:()=>cr});var cr,Nt=s(()=>{"use strict";d();ue();j();cr=P({createFailureMessage:function(e){return`No hidden layers ${e}`},createLoadingMessage:function(e){return`Deleting hidden layers ${e}\u2026`},createSuccessMessage:function(e,t){return`Deleted ${t} hidden ${S(t,"layer")} ${e}`},processNode:q,stopTraversal:function(e){return e.type==="INSTANCE"}})});var yt={};b(yt,{default:()=>ur});var ur,xt=s(()=>{"use strict";d();j();me();ur=P({createFailureMessage:function(e){return`No single-layer groups ${e}`},createLoadingMessage:function(e){return`Ungrouping single-layer groups ${e}\u2026`},createSuccessMessage:function(e,t){return`Ungrouped ${t} single-layer ${S(t,"group")} ${e}`},processNode:D,stopTraversal:function(e){return e.type==="INSTANCE"}})});var St={};b(St,{default:()=>fr});var fr,bt=s(()=>{"use strict";d();j();fe();fr=P({createFailureMessage:function(e){return`No change to layers ${e}`},createLoadingMessage:function(e){return`Making layers ${e} pixel-perfect\u2026`},createSuccessMessage:function(e,t){return`Made ${t} ${S(t,"layer")} ${e} pixel-perfect`},processNode:K,stopTraversal:function(e){return e.type==="INSTANCE"||e.type==="BOOLEAN_OPERATION"}})});var At={};b(At,{default:()=>lr});async function lr(){let e=await H(M,C);O("CLOSE_UI",function(){figma.closePlugin()}),O("SUBMIT",async function(r){await E(g(p({},e),{smartRenameLayersWhitelist:r}),C);let n=r===""?null:new RegExp(r);P({createFailureMessage:function(o){return`No layers renamed ${o}`},createLoadingMessage:function(o){return`Renaming layers ${o}\u2026`},createSuccessMessage:function(o,i){return`Renamed ${i} ${S(i,"layer")} ${o}`},processNode:function(o){return G(o,n)},stopTraversal:function(o){return n!==null&&n.test(o.name)===!0}})()}),figma.on("selectionchange",function(){_("SELECTION_CHANGED",figma.currentPage.selection.length>0)});let{smartRenameLayersWhitelist:t}=e;F({height:169,title:"Smart Rename Layers",width:240},{hasSelection:figma.currentPage.selection.length>0,smartRenameLayersWhitelist:t})}var Ct=s(()=>{"use strict";d();j();Z();le()});var Pt={};b(Pt,{default:()=>mr});function mr(){if(figma.currentPage.children.length===0){figma.closePlugin(I("No layers on page"));return}let e=J(),t=L(),r=T(`Sorting layers ${t}\u2026`),n=!1;for(let o of e)n=ee(o,!1)||n;r(),figma.closePlugin(n===!0?x(`Smart sorted layers ${t}`):"No change to sort order")}var Ot=s(()=>{"use strict";d();X();de();Q();xe()});function Et(){return figma.root.children.slice().sort(function(e,t){let r=e.name.toLowerCase(),n=t.name.toLowerCase();return r!==n?(0,Ae.default)(r,n):(0,Ae.default)(e.id,t.id)})}var Ae,It=s(()=>{Ae=we(qe(),1)});function Ce(e){return e.map(function(t){return t.id})}var wt=s(()=>{"use strict"});function Lt(e){let t=figma.root,r=Ce(t.children.slice()),n=t.children.length;e.forEach(function(i){t.insertChild(n,i)});let o=Ce(t.children.slice());return U(r,o)===!1}var Mt=s(()=>{d();wt()});var Tt={};b(Tt,{default:()=>dr});function dr(){let e=Et(),t=Lt(e);figma.closePlugin(t===!0?x("Sorted pages by name"):"No change to page sort order")}var Rt=s(()=>{"use strict";d();It();Mt()});var vt={};b(vt,{default:()=>pr});async function pr(){await E(M,C),figma.closePlugin("Reset plugin")}var _t=s(()=>{"use strict";d();Z()});var gr={"src/clean-nodes/main.ts--default":(be(),N(Se)).default,"src/delete-hidden-nodes/main.ts--default":(Nt(),N(ht)).default,"src/ungroup-single-node-groups/main.ts--default":(xt(),N(yt)).default,"src/make-pixel-perfect/main.ts--default":(bt(),N(St)).default,"src/smart-rename-nodes/main.ts--default":(Ct(),N(At)).default,"src/smart-sort-nodes/main.ts--default":(Ot(),N(Pt)).default,"src/sort-pages-by-name/main.ts--default":(Rt(),N(Tt)).default,"src/reset-plugin/main.ts--default":(_t(),N(vt)).default,cleanLayers:(be(),N(Se)).default},hr=typeof figma.command=="undefined"||figma.command===""?"src/clean-nodes/main.ts--default":figma.command;gr[hr]();})();
/*! Bundled license information:

natural-compare-lite/index.js:
  (*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   *)
*/
