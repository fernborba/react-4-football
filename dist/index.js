var React4Football=function(l,_,R){"use strict";var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=_,y=Symbol.for("react.element"),x=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,O=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,m){var r,a={},s=null,p=null;m!==void 0&&(s=""+m),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)h.call(e,r)&&!S.hasOwnProperty(r)&&(a[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)a[r]===void 0&&(a[r]=e[r]);return{$$typeof:y,type:t,key:s,ref:p,props:a,_owner:O.current}}n.Fragment=x,n.jsx=c,n.jsxs=c,i.exports=n;var o=i.exports;function b(){return o.jsxs("div",{className:"AppLayout",children:[o.jsx("aside",{className:"Sidebar",children:"Sidebar"}),o.jsxs("main",{className:"Content",children:[o.jsx("h1",{children:"Hello CodeSandbox"}),o.jsx("h2",{children:"Start editing to see some magic happen!"})]})]})}var u,d=R;u=d.createRoot,d.hydrateRoot,console.log("R4F_VERSION_999");function f(t){if(console.log("React4Football: MOUNT VERSION v999"),!t||!(t instanceof HTMLElement))throw new Error("mount() got invalid container");u(t).render(o.jsx(b,{}))}return window.React4Football={mount:f},l.mount=f,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),l}({},React,ReactDOM);
