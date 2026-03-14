(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["@uiw/react-layout"] = factory(require("react"));
	else
		root["@uiw/react-layout"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__442__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 192
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(442),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ },

/***/ 540
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(192);
} else // removed by dead control flow
{}


/***/ },

/***/ 442
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__442__;

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BackToUp)
});

;// ../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ../node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectSpread2.js

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}

;// ../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}

;// ../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

;// ../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

;// ../node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

;// ../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_ = __webpack_require__(442);
// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(540);
;// ./src/index.tsx
var _excluded=["className","prefixCls","element","top","size","strokeWidth","smooth","hideProgress","children"];var warpperStyle={position:'sticky',bottom:15,right:15,visibility:'visible',opacity:0,transition:'visibility 0.3s linear 0s, opacity 0.3s linear 0s',cursor:'pointer',userSelect:'none'};var svgStyle={display:'block',transform:'rotate(-90deg)'};var circleStyle={transition:'stroke-dashoffset 0.3s linear 0s'};var childStyle={position:'absolute',top:0,display:'flex',height:'100%',width:'100%',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:12};var documentElement=document.documentElement;function BackToUp(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var className=props.className,_props$prefixCls=props.prefixCls,prefixCls=_props$prefixCls===void 0?'w-back-to-up':_props$prefixCls,_props$element=props.element,element=_props$element===void 0?documentElement:_props$element,_props$top=props.top,top=_props$top===void 0?120:_props$top,_props$size=props.size,size=_props$size===void 0?35:_props$size,_props$strokeWidth=props.strokeWidth,strokeWidth=_props$strokeWidth===void 0?3:_props$strokeWidth,_props$smooth=props.smooth,smooth=_props$smooth===void 0?true:_props$smooth,_props$hideProgress=props.hideProgress,hideProgress=_props$hideProgress===void 0?false:_props$hideProgress,children=props.children,others=_objectWithoutProperties(props,_excluded);var $dom=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useRef)(null);var cls=[className,prefixCls].filter(Boolean).join(' ');var style=Object.assign({},warpperStyle,{position:element===documentElement?'fixed':'sticky'},others.style,{width:size,height:size,opacity:top===0?1:0});var center=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function(){return size/2;},[size]);var radius=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function(){return size/2-strokeWidth/2;},[size,strokeWidth]);var dasharray=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useMemo)(function(){return Math.PI*radius*2;},[radius]);var _useState=(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useState)(dasharray||0),_useState2=_slicedToArray(_useState,2),progress=_useState2[0],setProgress=_useState2[1];var handleScroll=function handleScroll(ev){var _ref=element||documentElement,clientHeight=_ref.clientHeight,scrollHeight=_ref.scrollHeight,scrollTop=_ref.scrollTop;var percentage=scrollTop/(scrollHeight-clientHeight);setProgress(dasharray-dasharray*percentage||0);if($dom.current&&top>0){$dom.current.style.opacity=scrollTop>top?'1':'0';}};(0,external_root_React_commonjs2_react_commonjs_react_amd_react_.useEffect)(function(){var scrollElement=element===documentElement?document:element;if(scrollElement){scrollElement.addEventListener('scroll',handleScroll,{passive:true});}return function(){if(scrollElement){scrollElement.removeEventListener('scroll',handleScroll);}};},[element]);var goToUp=function goToUp(ev){element.scrollTo({top:0,behavior:smooth?'smooth':'auto'});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",_objectSpread2(_objectSpread2({className:cls,ref:$dom},others),{},{onClick:goToUp,style:style,children:[!hideProgress&&/*#__PURE__*/(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 ".concat(size," ").concat(size),width:size,height:size,focusable:"false",style:svgStyle,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("circle",{fill:"rgb(0 0 0 / 75%)",stroke:"rgb(200 200 200 / 85%)",strokeWidth:strokeWidth,r:radius,cx:center,cy:center}),/*#__PURE__*/(0,jsx_runtime.jsx)("circle",{fill:"none",stroke:"rgb(0 0 0 / 50%)",strokeWidth:strokeWidth,r:radius,cx:center,cy:center,strokeDasharray:dasharray,strokeDashoffset:progress||0,style:circleStyle})]}),children&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:childStyle,children:children})]}));}
/******/ 	return __webpack_exports__;
/******/ })()
;
});