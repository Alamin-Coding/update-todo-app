(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();function de(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var H={exports:{}},u={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=Symbol.for("react.element"),pe=Symbol.for("react.portal"),fe=Symbol.for("react.fragment"),me=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),ve=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),ge=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),F=Symbol.iterator;function we(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,G={};function C(e,t,o){this.props=e,this.context=t,this.refs=G,this.updater=o||X}C.prototype.isReactComponent={};C.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K(){}K.prototype=C.prototype;function A(e,t,o){this.props=e,this.context=t,this.refs=G,this.updater=o||X}var L=A.prototype=new K;L.constructor=A;Y(L,C.prototype);L.isPureReactComponent=!0;var z=Array.isArray,Q=Object.prototype.hasOwnProperty,M={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function ee(e,t,o){var r,n={},s=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(s=""+t.key),t)Q.call(t,r)&&!Z.hasOwnProperty(r)&&(n[r]=t[r]);var c=arguments.length-2;if(c===1)n.children=o;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];n.children=i}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)n[r]===void 0&&(n[r]=c[r]);return{$$typeof:x,type:e,key:s,ref:l,props:n,_owner:M.current}}function Ce(e,t){return{$$typeof:x,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function D(e){return typeof e=="object"&&e!==null&&e.$$typeof===x}function Pe(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var W=/\/+/g;function T(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Pe(""+e.key):t.toString(36)}function j(e,t,o,r,n){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case x:case pe:l=!0}}if(l)return l=e,n=n(l),e=r===""?"."+T(l,0):r,z(n)?(o="",e!=null&&(o=e.replace(W,"$&/")+"/"),j(n,t,o,"",function(f){return f})):n!=null&&(D(n)&&(n=Ce(n,o+(!n.key||l&&l.key===n.key?"":(""+n.key).replace(W,"$&/")+"/")+e)),t.push(n)),1;if(l=0,r=r===""?".":r+":",z(e))for(var c=0;c<e.length;c++){s=e[c];var i=r+T(s,c);l+=j(s,t,o,i,n)}else if(i=we(e),typeof i=="function")for(e=i.call(e),c=0;!(s=e.next()).done;)s=s.value,i=r+T(s,c++),l+=j(s,t,o,i,n);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function S(e,t,o){if(e==null)return e;var r=[],n=0;return j(e,r,"","",function(s){return t.call(o,s,n++)}),r}function xe(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var E={current:null},O={transition:null},Se={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:O,ReactCurrentOwner:M};function te(){throw Error("act(...) is not supported in production builds of React.")}u.Children={map:S,forEach:function(e,t,o){S(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return S(e,function(){t++}),t},toArray:function(e){return S(e,function(t){return t})||[]},only:function(e){if(!D(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};u.Component=C;u.Fragment=fe;u.Profiler=ye;u.PureComponent=A;u.StrictMode=me;u.Suspense=Ee;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Se;u.act=te;u.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Y({},e.props),n=e.key,s=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,l=M.current),t.key!==void 0&&(n=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(i in t)Q.call(t,i)&&!Z.hasOwnProperty(i)&&(r[i]=t[i]===void 0&&c!==void 0?c[i]:t[i])}var i=arguments.length-2;if(i===1)r.children=o;else if(1<i){c=Array(i);for(var f=0;f<i;f++)c[f]=arguments[f+2];r.children=c}return{$$typeof:x,type:e.type,key:n,ref:s,props:r,_owner:l}};u.createContext=function(e){return e={$$typeof:ve,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:he,_context:e},e.Consumer=e};u.createElement=ee;u.createFactory=function(e){var t=ee.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:be,render:e}};u.isValidElement=D;u.lazy=function(e){return{$$typeof:_e,_payload:{_status:-1,_result:e},_init:xe}};u.memo=function(e,t){return{$$typeof:ge,type:e,compare:t===void 0?null:t}};u.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}};u.unstable_act=te;u.useCallback=function(e,t){return E.current.useCallback(e,t)};u.useContext=function(e){return E.current.useContext(e)};u.useDebugValue=function(){};u.useDeferredValue=function(e){return E.current.useDeferredValue(e)};u.useEffect=function(e,t){return E.current.useEffect(e,t)};u.useId=function(){return E.current.useId()};u.useImperativeHandle=function(e,t,o){return E.current.useImperativeHandle(e,t,o)};u.useInsertionEffect=function(e,t){return E.current.useInsertionEffect(e,t)};u.useLayoutEffect=function(e,t){return E.current.useLayoutEffect(e,t)};u.useMemo=function(e,t){return E.current.useMemo(e,t)};u.useReducer=function(e,t,o){return E.current.useReducer(e,t,o)};u.useRef=function(e){return E.current.useRef(e)};u.useState=function(e){return E.current.useState(e)};u.useSyncExternalStore=function(e,t,o){return E.current.useSyncExternalStore(e,t,o)};u.useTransition=function(){return E.current.useTransition()};u.version="18.3.1";H.exports=u;var p=H.exports;const a=de(p);var je={},R;typeof process<"u"&&((R=je)===null||R===void 0||R.REACT_APP_IDE_DEVMODE);function g(e,t){t===void 0&&(t={});var o=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var Oe=`.table-header {
  border-color: #363636;
  border-width: 1px 0;
  border-style: solid;
  font-weight: 800;
  padding: 10px 20px 10px 10px;
  display: flex;
}
.table-header:after {
  content: "";
}
.table-header .table-header-item {
  flex-basis: 22%;
  color: #444;
}
.table-header .table-header-item-control {
  flex-basis: 78%;
  color: #444;
}`;g(Oe);const ke=()=>a.createElement("div",{className:"table-header"},a.createElement("div",{className:"table-header-item"},"Property name"),a.createElement("div",{className:"table-header-item-control"},"Edit"));var b;(function(e){e.Checkbox="checkbox",e.Input="input",e.Radio="radio",e.Select="select",e.Textarea="textarea",e.JsonEditor="jsonEditor"})(b||(b={}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function k(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]]);return o}const q=e=>{var{value:t}=e,o=k(e,["value"]);return a.createElement("input",Object.assign({},o,{value:t??"",type:"text"}))},Te=e=>{var{checked:t,className:o}=e,r=k(e,["checked","className"]);return a.createElement("div",{className:o},a.createElement("input",Object.assign({},r,{checked:t??!1,type:"checkbox"})))},Re=e=>{var{optionsData:t}=e,o=k(e,["optionsData"]);return a.createElement("select",Object.assign({},o),t==null?void 0:t.map(r=>a.createElement("option",{value:r,key:r},r)))};var Ne=`.radio-control {
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.radio-control label {
  margin-right: 5px;
}`;g(Ne);const $e=e=>{var{className:t,radioData:o,extValue:r}=e,n=k(e,["className","radioData","extValue"]);return o?a.createElement("div",{className:t},o.map(s=>a.createElement("div",{key:s,className:"radio-control"},a.createElement("label",{htmlFor:String(s)}," ",s),a.createElement("input",Object.assign({},n,{type:"radio",checked:r==s,id:String(s),value:s}))))):null},ne=e=>a.createElement("textarea",Object.assign({},e));var Ie=`.json-editor {
  flex-direction: column;
}
.json-editor .json-editor-textarea {
  align-self: start;
  width: 100%;
  min-height: 100px;
  margin: 0 0 10px 0;
}
.json-editor .json-editor-apply-button {
  align-self: start;
}`;g(Ie);const Ae=({className:e,propName:t,propValue:o,propUpdate:r})=>{const[n,s]=p.useState(),l=p.useCallback(f=>{const{currentTarget:{value:h}}=f;s(h)},[]),c=p.useMemo(()=>n==null,[n]),i=p.useCallback(()=>{r(t,n),s(void 0)},[t,n]);return a.createElement("div",{className:e+" json-editor"},a.createElement(ne,{className:"json-editor-textarea",onChange:l,id:t,value:n??o}),a.createElement("button",{className:"json-editor-apply-button",disabled:c,onClick:i},"Apply changes"))},Le=({controlType:e,data:t,propName:o,propValue:r,onPropChange:n})=>{switch(e){case b.Input:return a.createElement(q,{className:"table-item-control",id:o,value:r,onChange:n});case b.Textarea:return a.createElement(ne,{className:"table-item-control",id:o,value:r,onChange:n});case b.Select:return a.createElement(Re,{className:"table-item-control",id:o,onChange:n,optionsData:t});case b.Checkbox:return a.createElement(Te,{checked:r,id:o,onChange:n});case b.Radio:return a.createElement($e,{className:"table-item-control",extValue:r,name:o,onChange:n,radioData:t});case b.JsonEditor:return a.createElement(Ae,{className:"table-item-control",propValue:r,propName:o,propUpdate:n});default:return a.createElement(q,{className:"table-item-control",id:o,value:r,onChange:n})}};var Me=`.table-item-wrapper {
  border-color: #363636;
  border-width: 0 0 1px 0;
  border-style: solid;
  padding: 10px;
  display: flex;
}
.table-item-wrapper:after {
  content: "";
}
.table-item-wrapper .table-item,
.table-item-wrapper .table-item-control {
  display: flex;
  align-items: center;
  justify-content: start;
}
.table-item-wrapper .table-item {
  flex-basis: 22%;
}
.table-item-wrapper .table-item-control {
  flex-basis: 78%;
}`;g(Me);const B=({propName:e,propValue:t,onPropChange:o,controlType:r,data:n})=>a.createElement("div",{className:"table-item-wrapper"},a.createElement("div",{className:"table-item"},e),a.createElement(Le,{data:n,controlType:r,propName:e,propValue:t,onPropChange:o}));var De=`.table-items {
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.table-items:after {
  content: "";
}`;g(De);const Ve=({toolsPropsToEdit:e})=>{const{props:t=null,initialProps:o=null,propsEditInfo:r=null,updateProps:n}=Object.assign({},e);p.useEffect(()=>{let d={};r&&Object.entries(r).map(([v,y])=>{const m=Array.isArray(y.data)?y.data[0]:y.data;d=Object.assign(Object.assign({},d),{[v]:m})}),n==null||n(Object.assign(Object.assign({},t),d))},[r]);const s=p.useCallback(d=>{const{value:v,id:y}=d.currentTarget,m=Object.assign(Object.assign({},t),{[y]:v});n(m)},[t]),l=p.useCallback(d=>{const{checked:v,id:y}=d.currentTarget,m=Object.assign(Object.assign({},t),{[y]:v});n(m)},[t]),c=p.useCallback(d=>{const{value:v,id:y}=d.currentTarget,m=Object.assign(Object.assign({},t),{[y]:v});n(m)},[t]),i=p.useCallback(d=>{const{value:v,name:y}=d.currentTarget,m=Object.assign(Object.assign({},t),{[y]:v});n(m)},[t]),f=p.useCallback(d=>{const{value:v,id:y}=d.currentTarget,m=Object.assign(Object.assign({},t),{[y]:v});n(m)},[t]),h=p.useCallback((d,v)=>{let y;try{y=JSON.parse(v)}catch{alert(`Property ${d} has incorrect value to object parse`);return}const m=Object.assign(Object.assign({},t),{[d]:y});n(m)},[t]),w=p.useCallback(d=>{switch(d){case b.Input:return s;case b.Checkbox:return l;case b.Select:return c;case b.Radio:return i;case b.Textarea:return f;case b.JsonEditor:return h;default:return s}},[t]),P=p.useCallback(()=>{let d=[];const v=t&&Object.entries(t).filter(([m])=>!(r!=null&&r.hasOwnProperty(m))).map(([m,_])=>a.createElement(B,{key:m,propName:m,propValue:_,initialPropValue:o==null?void 0:o[m],onPropChange:w()}));d=v?[...d,...v]:d;const y=r&&Object.entries(r).map(([m,_])=>a.createElement(B,{key:m,data:_.data,controlType:_.controlType,propName:m,propValue:_.controlType===b.JsonEditor?JSON.stringify(t==null?void 0:t[m],null,2):t==null?void 0:t[m],initialPropValue:o==null?void 0:o[m],onPropChange:w(_.controlType)}));return d=y?[...d,...y]:d,d},[t,r]);return a.createElement("div",{className:"table-items"},P())};var Ue=`.props-edit-table {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}`;g(Ue);const Fe=({toolsPropsToEdit:e})=>a.createElement("div",{className:"props-edit-table"},a.createElement(ke,null),a.createElement(Ve,{toolsPropsToEdit:e}));var ze=`.tools-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.tools-panel .empty-props-message {
  color: red;
}`;g(ze);const We=({toolsPropsToEdit:e})=>{const{props:t=null,propsEditInfo:o=null}=Object.assign({},e),r=p.useCallback(()=>{let n;return n=t?Object.keys(t).length>0:!1,n=n||(o?Object.keys(o).length>0:!1),n?a.createElement(Fe,{toolsPropsToEdit:e}):a.createElement("div",{className:"empty-props-message"},"This component has no properties to edit")},[t,o]);return a.createElement("div",{className:"tools-panel"},r())};function qe(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const re="/REACT_BUDDY_PALETTE",I="urlchange",V=(e,t)=>{const[,o]=p.useState(!1),r=p.useCallback(()=>{o(n=>!n)},[]);return p.useEffect(()=>(window.addEventListener(I,r),window.addEventListener("popstate",r),()=>{window.removeEventListener(I,r),window.removeEventListener("popstate",r)}),[]),Be(e,t)};function Be(e,t=!1){const o=He(),r=new RegExp(Je(e)).exec(o);if(r){const[n]=r;return t?o===n:!0}return!1}function Je(e){return qe(encodeURI(e))}function He(){const{hash:e,pathname:t}=window.location;return e?e.replace("#",""):t}function Xe(e){window.history.replaceState({},"",e),Ye(e)}function Ye(e){const t=new CustomEvent(I,{bubbles:!0,detail:e});window.dispatchEvent(t)}var Ge=`.previews-module_previewsMain__31L3F {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.previews-module_previewsContent__1aMUf {
  flex-basis: 100%;
  flex-grow: 1;
  overflow-y: auto;
}

.previews-module_previewsToolsPanel__30jjI {
  flex-basis: 295px;
  min-height: 100px;
}`,N={previewsMain:"previews-module_previewsMain__31L3F",previewsContent:"previews-module_previewsContent__1aMUf",previewsToolsPanel:"previews-module_previewsToolsPanel__30jjI"};g(Ge);const dt=({children:e,palette:t=null})=>{const[o,r]=p.useState(null),[n,s]=p.useState(()=>{var i;return(i=window.__PROPERTIES_EDIT_PANEL_ENABLED__)!==null&&i!==void 0?i:!1}),l=V(re),c=p.useMemo(()=>e?a.Children.map(e,i=>a.cloneElement(i,{setToolsPropsToEdit:r})):null,[e]);return p.useEffect(()=>{var i;window.enableComponentsPropsPanelEditor=f=>{var h;(h=window.setPropertiesEditPanelStatus)===null||h===void 0||h.call(window,f),s(f)},window.reactBuddyHistoryPush=Xe,(i=window.cefQuery)===null||i===void 0||i.call(window,{request:"event:react-toolbox-initialized"})},[]),l?t:a.createElement("div",{className:N.previewsMain},a.createElement("div",{className:N.previewsContent},c),n&&a.createElement("div",{className:N.previewsToolsPanel},a.createElement(We,{toolsPropsToEdit:o})))},Ke=({children:e,path:t,exact:o,setPropsToEdit:r})=>{const[n,s]=p.useState(null),l=V(t,o);p.useEffect(()=>{if(l){const f={props:n??e.props,updateProps:s};r(f)}return()=>{l||s(null)}},[l]);const c=n?a.cloneElement(e,Object.assign({},n)):e;return l?a.createElement(a.Fragment,null,c):null};var Qe=`.react-buddy-error-boundary-module_errorMessageContainer__1L848 {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
}

.react-buddy-error-boundary-module_errorMessageTitle__r4YnX {
  color: #d32f2f;
}

.react-buddy-error-boundary-module_errorMessageStack__2XNRm {
  color: #a9a9a9;
  font-size: 0.8rem;
  width: 100%;
  overflow-x: scroll;
}`,$={errorMessageContainer:"react-buddy-error-boundary-module_errorMessageContainer__1L848",errorMessageTitle:"react-buddy-error-boundary-module_errorMessageTitle__r4YnX",errorMessageStack:"react-buddy-error-boundary-module_errorMessageStack__2XNRm"};g(Qe);class oe extends a.Component{constructor(){super(...arguments),this.state={error:null}}componentDidCatch(t){console.error(t),this.setState({error:t})}componentDidUpdate(t,o){o.error!=null&&this.setState({error:null})}render(){const{error:t}=this.state,{componentName:o,children:r}=this.props;return t!=null?a.createElement("div",{className:$.errorMessageContainer},a.createElement("h2",{className:$.errorMessageTitle},o?`Something went wrong while rendering ${o} component`:"Something went wrong"),a.createElement("p",null,t.message),a.createElement("pre",{className:$.errorMessageStack},t.stack)):r}}const pt=({path:e,children:t,setToolsPropsToEdit:o,exact:r=!0,propsEditInfo:n})=>{const s=p.useCallback(l=>{o(Object.assign(Object.assign({},l),{initialProps:t.props,propsEditInfo:n}))},[]);return a.createElement(Ke,{path:e,exact:r,setPropsToEdit:s},a.createElement(oe,null,t))},ft=({style:e,className:t,embeddable:o,children:r})=>o?a.createElement(a.Fragment,null,r):a.createElement("div",{style:e,className:t},r),ae=a.createContext({}),Ze=()=>p.useContext(ae),mt=({children:e,name:t,className:o,style:r})=>a.createElement(ae.Provider,{value:{categoryClassName:o,categoryStyle:r}},et({children:e,categoryName:t}));function et({children:e,categoryName:t}){return a.Children.map(e,o=>a.cloneElement(o,{categoryName:t}))}const se=a.createContext({}),tt=()=>p.useContext(se),yt=({children:e,categoryName:t,name:o,className:r,style:n})=>a.createElement(se.Provider,{value:{componentClassName:r,componentStyle:n}},nt({children:e,componentName:o,categoryName:t}));function nt({children:e,componentName:t,categoryName:o}){return a.Children.map(e,r=>a.cloneElement(r,{categoryName:o,componentName:t}))}function le(...e){const t=e.flatMap(r=>r?r.split(" "):[]);return[...new Set(t)].join(" ")}var rt=`.variant-module_fullWindow__1DkCI {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.variant-module_variantRouteCenter__ce423 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
}`,U={fullWindow:"variant-module_fullWindow__1DkCI",variantRouteCenter:"variant-module_variantRouteCenter__ce423"};g(rt);const ot="DEFAULT_VARIANT",at=({categoryName:e,componentName:t,variantName:o=ot,previewLayout:r="center",children:n})=>{const{categoryClassName:s,categoryStyle:l}=Ze(),{componentClassName:c,componentStyle:i}=tt(),{variantClassName:f,variantStyle:h}=lt(),w=p.useMemo(()=>st([e,t,o]),[e,t,o]),P=V(w,!0),[d,v]=p.useState(null);return p.useLayoutEffect(()=>(d!==null&&ce(d),()=>{d!==null&&ue(d)}),[d]),P?a.createElement("div",{className:s,style:l},a.createElement("div",{className:c,style:i,ref:v},a.createElement("div",{className:r==="center"?le(U.variantRouteCenter,f):f,style:h},n))):null};function st(e){return re+"/"+e.filter(t=>t!=null).join("/")}const ie=a.createContext({}),lt=()=>p.useContext(ie),ht=({children:e,categoryName:t,componentName:o,name:r,previewLayout:n,className:s,style:l})=>a.createElement(ie.Provider,{value:{variantClassName:s,variantStyle:l}},a.createElement(at,{previewLayout:n,variantName:r,categoryName:t,componentName:o},a.createElement(oe,{componentName:o},e)));function ce(e){e===null||e===document||(e.className=le(U.fullWindow,e.className),ce(e.parentElement))}function ue(e){e===null||e===document||(e.classList.remove(U.fullWindow),ue(e.parentElement))}const it="modulepreload",ct=function(e){return"/"+e},J={},ut=function(t,o,r){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(o.map(c=>{if(c=ct(c),c in J)return;J[c]=!0;const i=c.endsWith(".css"),f=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=i?"stylesheet":it,i||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),i)return new Promise((w,P)=>{h.addEventListener("load",w),h.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}return n.then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};a.lazy(()=>ut(()=>import("./previews-DM4ahfXb.js"),[]));export{mt as C,ft as P,ht as V,yt as a,dt as b,pt as c,p as r};
