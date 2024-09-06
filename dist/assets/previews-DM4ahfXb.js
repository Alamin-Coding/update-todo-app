import{r as p,P as d,C as m,a as u,V as f,b as j,c as _}from"./index-CXEqy-VV.js";var x={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=p,y=Symbol.for("react.element"),v=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,P=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function c(n,r,i){var t,o={},a=null,l=null;i!==void 0&&(a=""+i),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(l=r.ref);for(t in r)E.call(r,t)&&!C.hasOwnProperty(t)&&(o[t]=r[t]);if(n&&n.defaultProps)for(t in r=n.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:y,type:n,key:a,ref:l,props:o,_owner:P.current}}s.Fragment=v;s.jsx=c;s.jsxs=c;x.exports=s;var e=x.exports;const b=()=>e.jsx(d,{children:e.jsx(m,{name:"App",children:e.jsx(u,{name:"Loader",children:e.jsx(f,{children:e.jsx(O,{})})})})});function O(){return e.jsx(p.Fragment,{children:"Loading..."})}const R=({text:n,onComplete:r})=>e.jsxs("li",{children:[e.jsx("input",{onChange:r(0),type:"checkbox"}),n,e.jsx("button",{children:"Edit"}),e.jsx("button",{children:"Delete"})]}),k=()=>e.jsx(j,{palette:e.jsx(b,{}),children:e.jsx(_,{path:"/TodoItem",children:e.jsx(R,{})})});export{k as default};
