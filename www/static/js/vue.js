From: =?utf-8?Q?=E5=B7=B2=E7=94=B1_Internet_Explorer_11_=E4=BF=9D=E5=AD=98?=
Subject: 
Date: Wed, 14 Oct 2015 17:05:59 +0800
MIME-Version: 1.0
Content-Type: text/html;
	charset="utf-8"
Content-Transfer-Encoding: quoted-printable
Content-Location: https://raw.githubusercontent.com/yyx990803/vue/0.12.16/dist/vue.js
X-MimeOLE: Produced By Microsoft MimeOLE V6.1.7601.17609

=EF=BB=BF<!DOCTYPE HTML>
<!DOCTYPE html PUBLIC "" ""><HTML><HEAD><META content=3D"IE=3D11.0000"=20
http-equiv=3D"X-UA-Compatible">

<META http-equiv=3D"Content-Type" content=3D"text/html; =
charset=3Dutf-8">
<META name=3D"GENERATOR" content=3D"MSHTML 11.00.9600.18015"></HEAD>
<BODY>
<PRE>/*!=0A=
 * Vue.js v0.12.16=0A=
 * (c) 2015 Evan You=0A=
 * Released under the MIT License.=0A=
 */=0A=
(function webpackUniversalModuleDefinition(root, factory) {=0A=
	if(typeof exports =3D=3D=3D 'object' &amp;&amp; typeof module =3D=3D=3D =
'object')=0A=
		module.exports =3D factory();=0A=
	else if(typeof define =3D=3D=3D 'function' &amp;&amp; define.amd)=0A=
		define([], factory);=0A=
	else if(typeof exports =3D=3D=3D 'object')=0A=
		exports["Vue"] =3D factory();=0A=
	else=0A=
		root["Vue"] =3D factory();=0A=
})(this, function() {=0A=
return /******/ (function(modules) { // webpackBootstrap=0A=
/******/ 	// The module cache=0A=
/******/ 	var installedModules =3D {};=0A=
=0A=
/******/ 	// The require function=0A=
/******/ 	function __webpack_require__(moduleId) {=0A=
=0A=
/******/ 		// Check if module is in cache=0A=
/******/ 		if(installedModules[moduleId])=0A=
/******/ 			return installedModules[moduleId].exports;=0A=
=0A=
/******/ 		// Create a new module (and put it into the cache)=0A=
/******/ 		var module =3D installedModules[moduleId] =3D {=0A=
/******/ 			exports: {},=0A=
/******/ 			id: moduleId,=0A=
/******/ 			loaded: false=0A=
/******/ 		};=0A=
=0A=
/******/ 		// Execute the module function=0A=
/******/ 		modules[moduleId].call(module.exports, module, =
module.exports, __webpack_require__);=0A=
=0A=
/******/ 		// Flag the module as loaded=0A=
/******/ 		module.loaded =3D true;=0A=
=0A=
/******/ 		// Return the exports of the module=0A=
/******/ 		return module.exports;=0A=
/******/ 	}=0A=
=0A=
=0A=
/******/ 	// expose the modules object (__webpack_modules__)=0A=
/******/ 	__webpack_require__.m =3D modules;=0A=
=0A=
/******/ 	// expose the module cache=0A=
/******/ 	__webpack_require__.c =3D installedModules;=0A=
=0A=
/******/ 	// __webpack_public_path__=0A=
/******/ 	__webpack_require__.p =3D "";=0A=
=0A=
/******/ 	// Load entry module and return exports=0A=
/******/ 	return __webpack_require__(0);=0A=
/******/ })=0A=
/************************************************************************=
/=0A=
/******/ ([=0A=
/* 0 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var extend =3D _.extend=0A=
=0A=
	/**=0A=
	 * The exposed Vue constructor.=0A=
	 *=0A=
	 * API conventions:=0A=
	 * - public API methods/properties are prefiexed with `$`=0A=
	 * - internal methods/properties are prefixed with `_`=0A=
	 * - non-prefixed properties are assumed to be proxied user=0A=
	 *   data.=0A=
	 *=0A=
	 * @constructor=0A=
	 * @param {Object} [options]=0A=
	 * @public=0A=
	 */=0A=
=0A=
	function Vue (options) {=0A=
	  this._init(options)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Mixin global API=0A=
	 */=0A=
=0A=
	extend(Vue, __webpack_require__(9))=0A=
=0A=
	/**=0A=
	 * Vue and every constructor that extends Vue has an=0A=
	 * associated options object, which can be accessed during=0A=
	 * compilation steps as `this.constructor.options`.=0A=
	 *=0A=
	 * These can be seen as the default options of every=0A=
	 * Vue instance.=0A=
	 */=0A=
=0A=
	Vue.options =3D {=0A=
	  replace: true,=0A=
	  directives: __webpack_require__(25),=0A=
	  elementDirectives: __webpack_require__(47),=0A=
	  filters: __webpack_require__(50),=0A=
	  transitions: {},=0A=
	  components: {},=0A=
	  partials: {}=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build up the prototype=0A=
	 */=0A=
=0A=
	var p =3D Vue.prototype=0A=
=0A=
	/**=0A=
	 * $data has a setter which does a bunch of=0A=
	 * teardown/setup work=0A=
	 */=0A=
=0A=
	Object.defineProperty(p, '$data', {=0A=
	  get: function () {=0A=
	    return this._data=0A=
	  },=0A=
	  set: function (newData) {=0A=
	    if (newData !=3D=3D this._data) {=0A=
	      this._setData(newData)=0A=
	    }=0A=
	  }=0A=
	})=0A=
=0A=
	/**=0A=
	 * Mixin internal instance methods=0A=
	 */=0A=
=0A=
	extend(p, __webpack_require__(52))=0A=
	extend(p, __webpack_require__(53))=0A=
	extend(p, __webpack_require__(54))=0A=
	extend(p, __webpack_require__(58))=0A=
	extend(p, __webpack_require__(60))=0A=
=0A=
	/**=0A=
	 * Mixin public API methods=0A=
	 */=0A=
=0A=
	extend(p, __webpack_require__(61))=0A=
	extend(p, __webpack_require__(62))=0A=
	extend(p, __webpack_require__(63))=0A=
	extend(p, __webpack_require__(64))=0A=
	extend(p, __webpack_require__(65))=0A=
=0A=
	module.exports =3D _.Vue =3D Vue=0A=
=0A=
=0A=
/***/ },=0A=
/* 1 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var lang =3D __webpack_require__(2)=0A=
	var extend =3D lang.extend=0A=
=0A=
	extend(exports, lang)=0A=
	extend(exports, __webpack_require__(3))=0A=
	extend(exports, __webpack_require__(4))=0A=
	extend(exports, __webpack_require__(6))=0A=
	extend(exports, __webpack_require__(7))=0A=
	extend(exports, __webpack_require__(8))=0A=
=0A=
=0A=
/***/ },=0A=
/* 2 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	/**=0A=
	 * Check if a string starts with $ or _=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.isReserved =3D function (str) {=0A=
	  var c =3D (str + '').charCodeAt(0)=0A=
	  return c =3D=3D=3D 0x24 || c =3D=3D=3D 0x5F=0A=
	}=0A=
=0A=
	/**=0A=
	 * Guard text output, make sure undefined outputs=0A=
	 * empty string=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.toString =3D function (value) {=0A=
	  return value =3D=3D null=0A=
	    ? ''=0A=
	    : value.toString()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check and convert possible numeric strings to numbers=0A=
	 * before setting back to data=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @return {*|Number}=0A=
	 */=0A=
=0A=
	exports.toNumber =3D function (value) {=0A=
	  if (typeof value !=3D=3D 'string') {=0A=
	    return value=0A=
	  } else {=0A=
	    var parsed =3D Number(value)=0A=
	    return isNaN(parsed)=0A=
	      ? value=0A=
	      : parsed=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convert string boolean literals into real booleans.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @return {*|Boolean}=0A=
	 */=0A=
=0A=
	exports.toBoolean =3D function (value) {=0A=
	  return value =3D=3D=3D 'true'=0A=
	    ? true=0A=
	    : value =3D=3D=3D 'false'=0A=
	      ? false=0A=
	      : value=0A=
	}=0A=
=0A=
	/**=0A=
	 * Strip quotes from a string=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {String | false}=0A=
	 */=0A=
=0A=
	exports.stripQuotes =3D function (str) {=0A=
	  var a =3D str.charCodeAt(0)=0A=
	  var b =3D str.charCodeAt(str.length - 1)=0A=
	  return a =3D=3D=3D b &amp;&amp; (a =3D=3D=3D 0x22 || a =3D=3D=3D 0x27)=0A=
	    ? str.slice(1, -1)=0A=
	    : false=0A=
	}=0A=
=0A=
	/**=0A=
	 * Camelize a hyphen-delmited string.=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.camelize =3D function (str) {=0A=
	  return str.replace(/-(\w)/g, toUpper)=0A=
	}=0A=
=0A=
	function toUpper (_, c) {=0A=
	  return c ? c.toUpperCase() : ''=0A=
	}=0A=
=0A=
	/**=0A=
	 * Hyphenate a camelCase string.=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.hyphenate =3D function (str) {=0A=
	  return str=0A=
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')=0A=
	    .toLowerCase()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Converts hyphen/underscore/slash delimitered names into=0A=
	 * camelized classNames.=0A=
	 *=0A=
	 * e.g. my-component =3D&gt; MyComponent=0A=
	 *      some_else    =3D&gt; SomeElse=0A=
	 *      some/comp    =3D&gt; SomeComp=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	var classifyRE =3D /(?:^|[-_\/])(\w)/g=0A=
	exports.classify =3D function (str) {=0A=
	  return str.replace(classifyRE, toUpper)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Simple bind, faster than native=0A=
	 *=0A=
	 * @param {Function} fn=0A=
	 * @param {Object} ctx=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.bind =3D function (fn, ctx) {=0A=
	  return function (a) {=0A=
	    var l =3D arguments.length=0A=
	    return l=0A=
	      ? l &gt; 1=0A=
	        ? fn.apply(ctx, arguments)=0A=
	        : fn.call(ctx, a)=0A=
	      : fn.call(ctx)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convert an Array-like object to a real Array.=0A=
	 *=0A=
	 * @param {Array-like} list=0A=
	 * @param {Number} [start] - start index=0A=
	 * @return {Array}=0A=
	 */=0A=
=0A=
	exports.toArray =3D function (list, start) {=0A=
	  start =3D start || 0=0A=
	  var i =3D list.length - start=0A=
	  var ret =3D new Array(i)=0A=
	  while (i--) {=0A=
	    ret[i] =3D list[i + start]=0A=
	  }=0A=
	  return ret=0A=
	}=0A=
=0A=
	/**=0A=
	 * Mix properties into target object.=0A=
	 *=0A=
	 * @param {Object} to=0A=
	 * @param {Object} from=0A=
	 */=0A=
=0A=
	exports.extend =3D function (to, from) {=0A=
	  for (var key in from) {=0A=
	    to[key] =3D from[key]=0A=
	  }=0A=
	  return to=0A=
	}=0A=
=0A=
	/**=0A=
	 * Quick object check - this is primarily used to tell=0A=
	 * Objects from primitive values when we know the value=0A=
	 * is a JSON-compliant type.=0A=
	 *=0A=
	 * @param {*} obj=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.isObject =3D function (obj) {=0A=
	  return obj !=3D=3D null &amp;&amp; typeof obj =3D=3D=3D 'object'=0A=
	}=0A=
=0A=
	/**=0A=
	 * Strict object type check. Only returns true=0A=
	 * for plain JavaScript objects.=0A=
	 *=0A=
	 * @param {*} obj=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	var toString =3D Object.prototype.toString=0A=
	var OBJECT_STRING =3D '[object Object]'=0A=
	exports.isPlainObject =3D function (obj) {=0A=
	  return toString.call(obj) =3D=3D=3D OBJECT_STRING=0A=
	}=0A=
=0A=
	/**=0A=
	 * Array type check.=0A=
	 *=0A=
	 * @param {*} obj=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.isArray =3D Array.isArray=0A=
=0A=
	/**=0A=
	 * Define a non-enumerable property=0A=
	 *=0A=
	 * @param {Object} obj=0A=
	 * @param {String} key=0A=
	 * @param {*} val=0A=
	 * @param {Boolean} [enumerable]=0A=
	 */=0A=
=0A=
	exports.define =3D function (obj, key, val, enumerable) {=0A=
	  Object.defineProperty(obj, key, {=0A=
	    value: val,=0A=
	    enumerable: !!enumerable,=0A=
	    writable: true,=0A=
	    configurable: true=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * Debounce a function so it only gets called after the=0A=
	 * input stops arriving after the given wait period.=0A=
	 *=0A=
	 * @param {Function} func=0A=
	 * @param {Number} wait=0A=
	 * @return {Function} - the debounced function=0A=
	 */=0A=
=0A=
	exports.debounce =3D function (func, wait) {=0A=
	  var timeout, args, context, timestamp, result=0A=
	  var later =3D function () {=0A=
	    var last =3D Date.now() - timestamp=0A=
	    if (last &lt; wait &amp;&amp; last &gt;=3D 0) {=0A=
	      timeout =3D setTimeout(later, wait - last)=0A=
	    } else {=0A=
	      timeout =3D null=0A=
	      result =3D func.apply(context, args)=0A=
	      if (!timeout) context =3D args =3D null=0A=
	    }=0A=
	  }=0A=
	  return function () {=0A=
	    context =3D this=0A=
	    args =3D arguments=0A=
	    timestamp =3D Date.now()=0A=
	    if (!timeout) {=0A=
	      timeout =3D setTimeout(later, wait)=0A=
	    }=0A=
	    return result=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Manual indexOf because it's slightly faster than=0A=
	 * native.=0A=
	 *=0A=
	 * @param {Array} arr=0A=
	 * @param {*} obj=0A=
	 */=0A=
=0A=
	exports.indexOf =3D function (arr, obj) {=0A=
	  var i =3D arr.length=0A=
	  while (i--) {=0A=
	    if (arr[i] =3D=3D=3D obj) return i=0A=
	  }=0A=
	  return -1=0A=
	}=0A=
=0A=
	/**=0A=
	 * Make a cancellable version of an async callback.=0A=
	 *=0A=
	 * @param {Function} fn=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.cancellable =3D function (fn) {=0A=
	  var cb =3D function () {=0A=
	    if (!cb.cancelled) {=0A=
	      return fn.apply(this, arguments)=0A=
	    }=0A=
	  }=0A=
	  cb.cancel =3D function () {=0A=
	    cb.cancelled =3D true=0A=
	  }=0A=
	  return cb=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if two values are loosely equal - that is,=0A=
	 * if they are plain objects, do they have the same shape?=0A=
	 *=0A=
	 * @param {*} a=0A=
	 * @param {*} b=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.looseEqual =3D function (a, b) {=0A=
	  /* eslint-disable eqeqeq */=0A=
	  return a =3D=3D b || (=0A=
	    exports.isObject(a) &amp;&amp; exports.isObject(b)=0A=
	      ? JSON.stringify(a) =3D=3D=3D JSON.stringify(b)=0A=
	      : false=0A=
	  )=0A=
	  /* eslint-enable eqeqeq */=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 3 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	// can we use __proto__?=0A=
	exports.hasProto =3D '__proto__' in {}=0A=
=0A=
	// Browser environment sniffing=0A=
	var inBrowser =3D exports.inBrowser =3D=0A=
	  typeof window !=3D=3D 'undefined' &amp;&amp;=0A=
	  Object.prototype.toString.call(window) !=3D=3D '[object Object]'=0A=
=0A=
	exports.isIE9 =3D=0A=
	  inBrowser &amp;&amp;=0A=
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') &gt; 0=0A=
=0A=
	exports.isAndroid =3D=0A=
	  inBrowser &amp;&amp;=0A=
	  navigator.userAgent.toLowerCase().indexOf('android') &gt; 0=0A=
=0A=
	// Transition property/event sniffing=0A=
	if (inBrowser &amp;&amp; !exports.isIE9) {=0A=
	  var isWebkitTrans =3D=0A=
	    window.ontransitionend =3D=3D=3D undefined &amp;&amp;=0A=
	    window.onwebkittransitionend !=3D=3D undefined=0A=
	  var isWebkitAnim =3D=0A=
	    window.onanimationend =3D=3D=3D undefined &amp;&amp;=0A=
	    window.onwebkitanimationend !=3D=3D undefined=0A=
	  exports.transitionProp =3D isWebkitTrans=0A=
	    ? 'WebkitTransition'=0A=
	    : 'transition'=0A=
	  exports.transitionEndEvent =3D isWebkitTrans=0A=
	    ? 'webkitTransitionEnd'=0A=
	    : 'transitionend'=0A=
	  exports.animationProp =3D isWebkitAnim=0A=
	    ? 'WebkitAnimation'=0A=
	    : 'animation'=0A=
	  exports.animationEndEvent =3D isWebkitAnim=0A=
	    ? 'webkitAnimationEnd'=0A=
	    : 'animationend'=0A=
	}=0A=
=0A=
	/**=0A=
	 * Defer a task to execute it asynchronously. Ideally this=0A=
	 * should be executed as a microtask, so we leverage=0A=
	 * MutationObserver if it's available, and fallback to=0A=
	 * setTimeout(0).=0A=
	 *=0A=
	 * @param {Function} cb=0A=
	 * @param {Object} ctx=0A=
	 */=0A=
=0A=
	exports.nextTick =3D (function () {=0A=
	  var callbacks =3D []=0A=
	  var pending =3D false=0A=
	  var timerFunc=0A=
	  function nextTickHandler () {=0A=
	    pending =3D false=0A=
	    var copies =3D callbacks.slice(0)=0A=
	    callbacks =3D []=0A=
	    for (var i =3D 0; i &lt; copies.length; i++) {=0A=
	      copies[i]()=0A=
	    }=0A=
	  }=0A=
	  /* istanbul ignore if */=0A=
	  if (typeof MutationObserver !=3D=3D 'undefined') {=0A=
	    var counter =3D 1=0A=
	    var observer =3D new MutationObserver(nextTickHandler)=0A=
	    var textNode =3D document.createTextNode(counter)=0A=
	    observer.observe(textNode, {=0A=
	      characterData: true=0A=
	    })=0A=
	    timerFunc =3D function () {=0A=
	      counter =3D (counter + 1) % 2=0A=
	      textNode.data =3D counter=0A=
	    }=0A=
	  } else {=0A=
	    timerFunc =3D setTimeout=0A=
	  }=0A=
	  return function (cb, ctx) {=0A=
	    var func =3D ctx=0A=
	      ? function () { cb.call(ctx) }=0A=
	      : cb=0A=
	    callbacks.push(func)=0A=
	    if (pending) return=0A=
	    pending =3D true=0A=
	    timerFunc(nextTickHandler, 0)=0A=
	  }=0A=
	})()=0A=
=0A=
=0A=
/***/ },=0A=
/* 4 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
=0A=
	/**=0A=
	 * Query an element selector if it's not an element already.=0A=
	 *=0A=
	 * @param {String|Element} el=0A=
	 * @return {Element}=0A=
	 */=0A=
=0A=
	exports.query =3D function (el) {=0A=
	  if (typeof el =3D=3D=3D 'string') {=0A=
	    var selector =3D el=0A=
	    el =3D document.querySelector(el)=0A=
	    if (!el) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Cannot find element: ' + selector=0A=
	      )=0A=
	    }=0A=
	  }=0A=
	  return el=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if a node is in the document.=0A=
	 * Note: document.documentElement.contains should work here=0A=
	 * but always returns false for comment nodes in phantomjs,=0A=
	 * making unit tests difficult. This is fixed byy doing the=0A=
	 * contains() check on the node's parentNode instead of=0A=
	 * the node itself.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.inDoc =3D function (node) {=0A=
	  var doc =3D document.documentElement=0A=
	  var parent =3D node &amp;&amp; node.parentNode=0A=
	  return doc =3D=3D=3D node ||=0A=
	    doc =3D=3D=3D parent ||=0A=
	    !!(parent &amp;&amp; parent.nodeType =3D=3D=3D 1 &amp;&amp; =
(doc.contains(parent)))=0A=
	}=0A=
=0A=
	/**=0A=
	 * Extract an attribute from a node.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 * @param {String} attr=0A=
	 */=0A=
=0A=
	exports.attr =3D function (node, attr) {=0A=
	  attr =3D config.prefix + attr=0A=
	  var val =3D node.getAttribute(attr)=0A=
	  if (val !=3D=3D null) {=0A=
	    node.removeAttribute(attr)=0A=
	  }=0A=
	  return val=0A=
	}=0A=
=0A=
	/**=0A=
	 * Insert el before target=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 */=0A=
=0A=
	exports.before =3D function (el, target) {=0A=
	  target.parentNode.insertBefore(el, target)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Insert el after target=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 */=0A=
=0A=
	exports.after =3D function (el, target) {=0A=
	  if (target.nextSibling) {=0A=
	    exports.before(el, target.nextSibling)=0A=
	  } else {=0A=
	    target.parentNode.appendChild(el)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove el from DOM=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 */=0A=
=0A=
	exports.remove =3D function (el) {=0A=
	  el.parentNode.removeChild(el)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Prepend el to target=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 */=0A=
=0A=
	exports.prepend =3D function (el, target) {=0A=
	  if (target.firstChild) {=0A=
	    exports.before(el, target.firstChild)=0A=
	  } else {=0A=
	    target.appendChild(el)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Replace target with el=0A=
	 *=0A=
	 * @param {Element} target=0A=
	 * @param {Element} el=0A=
	 */=0A=
=0A=
	exports.replace =3D function (target, el) {=0A=
	  var parent =3D target.parentNode=0A=
	  if (parent) {=0A=
	    parent.replaceChild(el, target)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add event listener shorthand.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {String} event=0A=
	 * @param {Function} cb=0A=
	 */=0A=
=0A=
	exports.on =3D function (el, event, cb) {=0A=
	  el.addEventListener(event, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove event listener shorthand.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {String} event=0A=
	 * @param {Function} cb=0A=
	 */=0A=
=0A=
	exports.off =3D function (el, event, cb) {=0A=
	  el.removeEventListener(event, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add class with compatibility for IE &amp; SVG=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Strong} cls=0A=
	 */=0A=
=0A=
	exports.addClass =3D function (el, cls) {=0A=
	  if (el.classList) {=0A=
	    el.classList.add(cls)=0A=
	  } else {=0A=
	    var cur =3D ' ' + (el.getAttribute('class') || '') + ' '=0A=
	    if (cur.indexOf(' ' + cls + ' ') &lt; 0) {=0A=
	      el.setAttribute('class', (cur + cls).trim())=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove class with compatibility for IE &amp; SVG=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Strong} cls=0A=
	 */=0A=
=0A=
	exports.removeClass =3D function (el, cls) {=0A=
	  if (el.classList) {=0A=
	    el.classList.remove(cls)=0A=
	  } else {=0A=
	    var cur =3D ' ' + (el.getAttribute('class') || '') + ' '=0A=
	    var tar =3D ' ' + cls + ' '=0A=
	    while (cur.indexOf(tar) &gt;=3D 0) {=0A=
	      cur =3D cur.replace(tar, ' ')=0A=
	    }=0A=
	    el.setAttribute('class', cur.trim())=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Extract raw content inside an element into a temporary=0A=
	 * container div=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Boolean} asFragment=0A=
	 * @return {Element}=0A=
	 */=0A=
=0A=
	exports.extractContent =3D function (el, asFragment) {=0A=
	  var child=0A=
	  var rawContent=0A=
	  /* istanbul ignore if */=0A=
	  if (=0A=
	    exports.isTemplate(el) &amp;&amp;=0A=
	    el.content instanceof DocumentFragment=0A=
	  ) {=0A=
	    el =3D el.content=0A=
	  }=0A=
	  if (el.hasChildNodes()) {=0A=
	    exports.trimNode(el)=0A=
	    rawContent =3D asFragment=0A=
	      ? document.createDocumentFragment()=0A=
	      : document.createElement('div')=0A=
	    /* eslint-disable no-cond-assign */=0A=
	    while (child =3D el.firstChild) {=0A=
	    /* eslint-enable no-cond-assign */=0A=
	      rawContent.appendChild(child)=0A=
	    }=0A=
	  }=0A=
	  return rawContent=0A=
	}=0A=
=0A=
	/**=0A=
	 * Trim possible empty head/tail textNodes inside a parent.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 */=0A=
=0A=
	exports.trimNode =3D function (node) {=0A=
	  trim(node, node.firstChild)=0A=
	  trim(node, node.lastChild)=0A=
	}=0A=
=0A=
	function trim (parent, node) {=0A=
	  if (node &amp;&amp; node.nodeType =3D=3D=3D 3 &amp;&amp; =
!node.data.trim()) {=0A=
	    parent.removeChild(node)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if an element is a template tag.=0A=
	 * Note if the template appears inside an SVG its tagName=0A=
	 * will be in lowercase.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 */=0A=
=0A=
	exports.isTemplate =3D function (el) {=0A=
	  return el.tagName &amp;&amp;=0A=
	    el.tagName.toLowerCase() =3D=3D=3D 'template'=0A=
	}=0A=
=0A=
	/**=0A=
	 * Create an "anchor" for performing dom insertion/removals.=0A=
	 * This is used in a number of scenarios:=0A=
	 * - fragment instance=0A=
	 * - v-html=0A=
	 * - v-if=0A=
	 * - component=0A=
	 * - repeat=0A=
	 *=0A=
	 * @param {String} content=0A=
	 * @param {Boolean} persist - IE trashes empty textNodes on=0A=
	 *                            cloneNode(true), so in certain=0A=
	 *                            cases the anchor needs to be=0A=
	 *                            non-empty to be persisted in=0A=
	 *                            templates.=0A=
	 * @return {Comment|Text}=0A=
	 */=0A=
=0A=
	exports.createAnchor =3D function (content, persist) {=0A=
	  return config.debug=0A=
	    ? document.createComment(content)=0A=
	    : document.createTextNode(persist ? ' ' : '')=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 5 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  /**=0A=
	   * The prefix to look for when parsing directives.=0A=
	   *=0A=
	   * @type {String}=0A=
	   */=0A=
=0A=
	  prefix: 'v-',=0A=
=0A=
	  /**=0A=
	   * Whether to print debug messages.=0A=
	   * Also enables stack trace for warnings.=0A=
	   *=0A=
	   * @type {Boolean}=0A=
	   */=0A=
=0A=
	  debug: false,=0A=
=0A=
	  /**=0A=
	   * Strict mode.=0A=
	   * Disables asset lookup in the view parent chain.=0A=
	   */=0A=
=0A=
	  strict: false,=0A=
=0A=
	  /**=0A=
	   * Whether to suppress warnings.=0A=
	   *=0A=
	   * @type {Boolean}=0A=
	   */=0A=
=0A=
	  silent: false,=0A=
=0A=
	  /**=0A=
	   * Whether allow observer to alter data objects'=0A=
	   * __proto__.=0A=
	   *=0A=
	   * @type {Boolean}=0A=
	   */=0A=
=0A=
	  proto: true,=0A=
=0A=
	  /**=0A=
	   * Whether to parse mustache tags in templates.=0A=
	   *=0A=
	   * @type {Boolean}=0A=
	   */=0A=
=0A=
	  interpolate: true,=0A=
=0A=
	  /**=0A=
	   * Whether to use async rendering.=0A=
	   */=0A=
=0A=
	  async: true,=0A=
=0A=
	  /**=0A=
	   * Whether to warn against errors caught when evaluating=0A=
	   * expressions.=0A=
	   */=0A=
=0A=
	  warnExpressionErrors: true,=0A=
=0A=
	  /**=0A=
	   * Internal flag to indicate the delimiters have been=0A=
	   * changed.=0A=
	   *=0A=
	   * @type {Boolean}=0A=
	   */=0A=
=0A=
	  _delimitersChanged: true,=0A=
=0A=
	  /**=0A=
	   * List of asset types that a component can own.=0A=
	   *=0A=
	   * @type {Array}=0A=
	   */=0A=
=0A=
	  _assetTypes: [=0A=
	    'component',=0A=
	    'directive',=0A=
	    'elementDirective',=0A=
	    'filter',=0A=
	    'transition',=0A=
	    'partial'=0A=
	  ],=0A=
=0A=
	  /**=0A=
	   * prop binding modes=0A=
	   */=0A=
=0A=
	  _propBindingModes: {=0A=
	    ONE_WAY: 0,=0A=
	    TWO_WAY: 1,=0A=
	    ONE_TIME: 2=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Max circular updates allowed in a batcher flush cycle.=0A=
	   */=0A=
=0A=
	  _maxUpdateCount: 100=0A=
=0A=
	}=0A=
=0A=
	/**=0A=
	 * Interpolation delimiters.=0A=
	 * We need to mark the changed flag so that the text parser=0A=
	 * knows it needs to recompile the regex.=0A=
	 *=0A=
	 * @type {Array&lt;String&gt;}=0A=
	 */=0A=
=0A=
	var delimiters =3D ['{{', '}}']=0A=
	Object.defineProperty(module.exports, 'delimiters', {=0A=
	  get: function () {=0A=
	    return delimiters=0A=
	  },=0A=
	  set: function (val) {=0A=
	    delimiters =3D val=0A=
	    this._delimitersChanged =3D true=0A=
	  }=0A=
	})=0A=
=0A=
=0A=
/***/ },=0A=
/* 6 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var extend =3D _.extend=0A=
=0A=
	/**=0A=
	 * Option overwriting strategies are functions that handle=0A=
	 * how to merge a parent option value and a child option=0A=
	 * value into the final value.=0A=
	 *=0A=
	 * All strategy functions follow the same signature:=0A=
	 *=0A=
	 * @param {*} parentVal=0A=
	 * @param {*} childVal=0A=
	 * @param {Vue} [vm]=0A=
	 */=0A=
=0A=
	var strats =3D config.optionMergeStrategies =3D Object.create(null)=0A=
=0A=
	/**=0A=
	 * Helper that recursively merges two data objects together.=0A=
	 */=0A=
=0A=
	function mergeData (to, from) {=0A=
	  var key, toVal, fromVal=0A=
	  for (key in from) {=0A=
	    toVal =3D to[key]=0A=
	    fromVal =3D from[key]=0A=
	    if (!to.hasOwnProperty(key)) {=0A=
	      to.$add(key, fromVal)=0A=
	    } else if (_.isObject(toVal) &amp;&amp; _.isObject(fromVal)) {=0A=
	      mergeData(toVal, fromVal)=0A=
	    }=0A=
	  }=0A=
	  return to=0A=
	}=0A=
=0A=
	/**=0A=
	 * Data=0A=
	 */=0A=
=0A=
	strats.data =3D function (parentVal, childVal, vm) {=0A=
	  if (!vm) {=0A=
	    // in a Vue.extend merge, both should be functions=0A=
	    if (!childVal) {=0A=
	      return parentVal=0A=
	    }=0A=
	    if (typeof childVal !=3D=3D 'function') {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'The "data" option should be a function ' +=0A=
	        'that returns a per-instance value in component ' +=0A=
	        'definitions.'=0A=
	      )=0A=
	      return parentVal=0A=
	    }=0A=
	    if (!parentVal) {=0A=
	      return childVal=0A=
	    }=0A=
	    // when parentVal &amp; childVal are both present,=0A=
	    // we need to return a function that returns the=0A=
	    // merged result of both functions... no need to=0A=
	    // check if parentVal is a function here because=0A=
	    // it has to be a function to pass previous merges.=0A=
	    return function mergedDataFn () {=0A=
	      return mergeData(=0A=
	        childVal.call(this),=0A=
	        parentVal.call(this)=0A=
	      )=0A=
	    }=0A=
	  } else if (parentVal || childVal) {=0A=
	    return function mergedInstanceDataFn () {=0A=
	      // instance merge=0A=
	      var instanceData =3D typeof childVal =3D=3D=3D 'function'=0A=
	        ? childVal.call(vm)=0A=
	        : childVal=0A=
	      var defaultData =3D typeof parentVal =3D=3D=3D 'function'=0A=
	        ? parentVal.call(vm)=0A=
	        : undefined=0A=
	      if (instanceData) {=0A=
	        return mergeData(instanceData, defaultData)=0A=
	      } else {=0A=
	        return defaultData=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * El=0A=
	 */=0A=
=0A=
	strats.el =3D function (parentVal, childVal, vm) {=0A=
	  if (!vm &amp;&amp; childVal &amp;&amp; typeof childVal !=3D=3D =
'function') {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'The "el" option should be a function ' +=0A=
	      'that returns a per-instance value in component ' +=0A=
	      'definitions.'=0A=
	    )=0A=
	    return=0A=
	  }=0A=
	  var ret =3D childVal || parentVal=0A=
	  // invoke the element factory if this is instance merge=0A=
	  return vm &amp;&amp; typeof ret =3D=3D=3D 'function'=0A=
	    ? ret.call(vm)=0A=
	    : ret=0A=
	}=0A=
=0A=
	/**=0A=
	 * Hooks and param attributes are merged as arrays.=0A=
	 */=0A=
=0A=
	strats.created =3D=0A=
	strats.ready =3D=0A=
	strats.attached =3D=0A=
	strats.detached =3D=0A=
	strats.beforeCompile =3D=0A=
	strats.compiled =3D=0A=
	strats.beforeDestroy =3D=0A=
	strats.destroyed =3D=0A=
	strats.props =3D function (parentVal, childVal) {=0A=
	  return childVal=0A=
	    ? parentVal=0A=
	      ? parentVal.concat(childVal)=0A=
	      : _.isArray(childVal)=0A=
	        ? childVal=0A=
	        : [childVal]=0A=
	    : parentVal=0A=
	}=0A=
=0A=
	/**=0A=
	 * 0.11 deprecation warning=0A=
	 */=0A=
=0A=
	strats.paramAttributes =3D function () {=0A=
	  /* istanbul ignore next */=0A=
	  ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	    '"paramAttributes" option has been deprecated in 0.12. ' +=0A=
	    'Use "props" instead.'=0A=
	  )=0A=
	}=0A=
=0A=
	/**=0A=
	 * Assets=0A=
	 *=0A=
	 * When a vm is present (instance creation), we need to do=0A=
	 * a three-way merge between constructor options, instance=0A=
	 * options and parent options.=0A=
	 */=0A=
=0A=
	function mergeAssets (parentVal, childVal) {=0A=
	  var res =3D Object.create(parentVal)=0A=
	  return childVal=0A=
	    ? extend(res, guardArrayAssets(childVal))=0A=
	    : res=0A=
	}=0A=
=0A=
	config._assetTypes.forEach(function (type) {=0A=
	  strats[type + 's'] =3D mergeAssets=0A=
	})=0A=
=0A=
	/**=0A=
	 * Events &amp; Watchers.=0A=
	 *=0A=
	 * Events &amp; watchers hashes should not overwrite one=0A=
	 * another, so we merge them as arrays.=0A=
	 */=0A=
=0A=
	strats.watch =3D=0A=
	strats.events =3D function (parentVal, childVal) {=0A=
	  if (!childVal) return parentVal=0A=
	  if (!parentVal) return childVal=0A=
	  var ret =3D {}=0A=
	  extend(ret, parentVal)=0A=
	  for (var key in childVal) {=0A=
	    var parent =3D ret[key]=0A=
	    var child =3D childVal[key]=0A=
	    if (parent &amp;&amp; !_.isArray(parent)) {=0A=
	      parent =3D [parent]=0A=
	    }=0A=
	    ret[key] =3D parent=0A=
	      ? parent.concat(child)=0A=
	      : [child]=0A=
	  }=0A=
	  return ret=0A=
	}=0A=
=0A=
	/**=0A=
	 * Other object hashes.=0A=
	 */=0A=
=0A=
	strats.methods =3D=0A=
	strats.computed =3D function (parentVal, childVal) {=0A=
	  if (!childVal) return parentVal=0A=
	  if (!parentVal) return childVal=0A=
	  var ret =3D Object.create(parentVal)=0A=
	  extend(ret, childVal)=0A=
	  return ret=0A=
	}=0A=
=0A=
	/**=0A=
	 * Default strategy.=0A=
	 */=0A=
=0A=
	var defaultStrat =3D function (parentVal, childVal) {=0A=
	  return childVal =3D=3D=3D undefined=0A=
	    ? parentVal=0A=
	    : childVal=0A=
	}=0A=
=0A=
	/**=0A=
	 * Make sure component options get converted to actual=0A=
	 * constructors.=0A=
	 *=0A=
	 * @param {Object} options=0A=
	 */=0A=
=0A=
	function guardComponents (options) {=0A=
	  if (options.components) {=0A=
	    var components =3D options.components =3D=0A=
	      guardArrayAssets(options.components)=0A=
	    var def=0A=
	    var ids =3D Object.keys(components)=0A=
	    for (var i =3D 0, l =3D ids.length; i &lt; l; i++) {=0A=
	      var key =3D ids[i]=0A=
	      if (_.commonTagRE.test(key)) {=0A=
	        ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	          'Do not use built-in HTML elements as component ' +=0A=
	          'id: ' + key=0A=
	        )=0A=
	        continue=0A=
	      }=0A=
	      def =3D components[key]=0A=
	      if (_.isPlainObject(def)) {=0A=
	        def.id =3D def.id || key=0A=
	        components[key] =3D def._Ctor || (def._Ctor =3D =
_.Vue.extend(def))=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Ensure all props option syntax are normalized into the=0A=
	 * Object-based format.=0A=
	 *=0A=
	 * @param {Object} options=0A=
	 */=0A=
=0A=
	function guardProps (options) {=0A=
	  var props =3D options.props=0A=
	  if (_.isPlainObject(props)) {=0A=
	    options.props =3D Object.keys(props).map(function (key) {=0A=
	      var val =3D props[key]=0A=
	      if (!_.isPlainObject(val)) {=0A=
	        val =3D { type: val }=0A=
	      }=0A=
	      val.name =3D key=0A=
	      return val=0A=
	    })=0A=
	  } else if (_.isArray(props)) {=0A=
	    options.props =3D props.map(function (prop) {=0A=
	      return typeof prop =3D=3D=3D 'string'=0A=
	        ? { name: prop }=0A=
	        : prop=0A=
	    })=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Guard an Array-format assets option and converted it=0A=
	 * into the key-value Object format.=0A=
	 *=0A=
	 * @param {Object|Array} assets=0A=
	 * @return {Object}=0A=
	 */=0A=
=0A=
	function guardArrayAssets (assets) {=0A=
	  if (_.isArray(assets)) {=0A=
	    var res =3D {}=0A=
	    var i =3D assets.length=0A=
	    var asset=0A=
	    while (i--) {=0A=
	      asset =3D assets[i]=0A=
	      var id =3D asset.id || (asset.options &amp;&amp; asset.options.id)=0A=
	      if (!id) {=0A=
	        ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	          'Array-syntax assets must provide an id field.'=0A=
	        )=0A=
	      } else {=0A=
	        res[id] =3D asset=0A=
	      }=0A=
	    }=0A=
	    return res=0A=
	  }=0A=
	  return assets=0A=
	}=0A=
=0A=
	/**=0A=
	 * Merge two option objects into a new one.=0A=
	 * Core utility used in both instantiation and inheritance.=0A=
	 *=0A=
	 * @param {Object} parent=0A=
	 * @param {Object} child=0A=
	 * @param {Vue} [vm] - if vm is present, indicates this is=0A=
	 *                     an instantiation merge.=0A=
	 */=0A=
=0A=
	exports.mergeOptions =3D function merge (parent, child, vm) {=0A=
	  guardComponents(child)=0A=
	  guardProps(child)=0A=
	  var options =3D {}=0A=
	  var key=0A=
	  if (child.mixins) {=0A=
	    for (var i =3D 0, l =3D child.mixins.length; i &lt; l; i++) {=0A=
	      parent =3D merge(parent, child.mixins[i], vm)=0A=
	    }=0A=
	  }=0A=
	  for (key in parent) {=0A=
	    mergeField(key)=0A=
	  }=0A=
	  for (key in child) {=0A=
	    if (!(parent.hasOwnProperty(key))) {=0A=
	      mergeField(key)=0A=
	    }=0A=
	  }=0A=
	  function mergeField (key) {=0A=
	    var strat =3D strats[key] || defaultStrat=0A=
	    options[key] =3D strat(parent[key], child[key], vm, key)=0A=
	  }=0A=
	  return options=0A=
	}=0A=
=0A=
	/**=0A=
	 * Resolve an asset.=0A=
	 * This function is used because child instances need access=0A=
	 * to assets defined in its ancestor chain.=0A=
	 *=0A=
	 * @param {Object} options=0A=
	 * @param {String} type=0A=
	 * @param {String} id=0A=
	 * @return {Object|Function}=0A=
	 */=0A=
=0A=
	exports.resolveAsset =3D function resolve (options, type, id) {=0A=
	  var camelizedId =3D _.camelize(id)=0A=
	  var pascalizedId =3D camelizedId.charAt(0).toUpperCase() + =
camelizedId.slice(1)=0A=
	  var assets =3D options[type]=0A=
	  var asset =3D assets[id] || assets[camelizedId] || =
assets[pascalizedId]=0A=
	  while (=0A=
	    !asset &amp;&amp;=0A=
	    options._parent &amp;&amp;=0A=
	    (!config.strict || options._repeat)=0A=
	  ) {=0A=
	    options =3D (options._context || options._parent).$options=0A=
	    assets =3D options[type]=0A=
	    asset =3D assets[id] || assets[camelizedId] || assets[pascalizedId]=0A=
	  }=0A=
	  return asset=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 7 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Check if an element is a component, if yes return its=0A=
	 * component id.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {String|undefined}=0A=
	 */=0A=
=0A=
	exports.commonTagRE =3D =
/^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/=0A=
	exports.checkComponent =3D function (el, options) {=0A=
	  var tag =3D el.tagName.toLowerCase()=0A=
	  if (tag =3D=3D=3D 'component') {=0A=
	    // dynamic syntax=0A=
	    var exp =3D el.getAttribute('is')=0A=
	    el.removeAttribute('is')=0A=
	    return exp=0A=
	  } else if (=0A=
	    !exports.commonTagRE.test(tag) &amp;&amp;=0A=
	    _.resolveAsset(options, 'components', tag)=0A=
	  ) {=0A=
	    return tag=0A=
	  /* eslint-disable no-cond-assign */=0A=
	  } else if (tag =3D _.attr(el, 'component')) {=0A=
	  /* eslint-enable no-cond-assign */=0A=
	    return tag=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Set a prop's initial value on a vm and its data object.=0A=
	 * The vm may have inherit:true so we need to make sure=0A=
	 * we don't accidentally overwrite parent value.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Object} prop=0A=
	 * @param {*} value=0A=
	 */=0A=
=0A=
	exports.initProp =3D function (vm, prop, value) {=0A=
	  if (exports.assertProp(prop, value)) {=0A=
	    var key =3D prop.path=0A=
	    if (key in vm) {=0A=
	      _.define(vm, key, value, true)=0A=
	    } else {=0A=
	      vm[key] =3D value=0A=
	    }=0A=
	    vm._data[key] =3D value=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Assert whether a prop is valid.=0A=
	 *=0A=
	 * @param {Object} prop=0A=
	 * @param {*} value=0A=
	 */=0A=
=0A=
	exports.assertProp =3D function (prop, value) {=0A=
	  // if a prop is not provided and is not required,=0A=
	  // skip the check.=0A=
	  if (prop.raw =3D=3D=3D null &amp;&amp; !prop.required) {=0A=
	    return true=0A=
	  }=0A=
	  var options =3D prop.options=0A=
	  var type =3D options.type=0A=
	  var valid =3D true=0A=
	  var expectedType=0A=
	  if (type) {=0A=
	    if (type =3D=3D=3D String) {=0A=
	      expectedType =3D 'string'=0A=
	      valid =3D typeof value =3D=3D=3D expectedType=0A=
	    } else if (type =3D=3D=3D Number) {=0A=
	      expectedType =3D 'number'=0A=
	      valid =3D typeof value =3D=3D=3D 'number'=0A=
	    } else if (type =3D=3D=3D Boolean) {=0A=
	      expectedType =3D 'boolean'=0A=
	      valid =3D typeof value =3D=3D=3D 'boolean'=0A=
	    } else if (type =3D=3D=3D Function) {=0A=
	      expectedType =3D 'function'=0A=
	      valid =3D typeof value =3D=3D=3D 'function'=0A=
	    } else if (type =3D=3D=3D Object) {=0A=
	      expectedType =3D 'object'=0A=
	      valid =3D _.isPlainObject(value)=0A=
	    } else if (type =3D=3D=3D Array) {=0A=
	      expectedType =3D 'array'=0A=
	      valid =3D _.isArray(value)=0A=
	    } else {=0A=
	      valid =3D value instanceof type=0A=
	    }=0A=
	  }=0A=
	  if (!valid) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Invalid prop: type check failed for ' +=0A=
	      prop.path + '=3D"' + prop.raw + '".' +=0A=
	      ' Expected ' + formatType(expectedType) +=0A=
	      ', got ' + formatValue(value) + '.'=0A=
	    )=0A=
	    return false=0A=
	  }=0A=
	  var validator =3D options.validator=0A=
	  if (validator) {=0A=
	    if (!validator.call(null, value)) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Invalid prop: custom validator check failed for ' +=0A=
	        prop.path + '=3D"' + prop.raw + '"'=0A=
	      )=0A=
	      return false=0A=
	    }=0A=
	  }=0A=
	  return true=0A=
	}=0A=
=0A=
	function formatType (val) {=0A=
	  return val=0A=
	    ? val.charAt(0).toUpperCase() + val.slice(1)=0A=
	    : 'custom type'=0A=
	}=0A=
=0A=
	function formatValue (val) {=0A=
	  return Object.prototype.toString.call(val).slice(8, -1)=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 8 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	/**=0A=
	 * Enable debug utilities.=0A=
	 */=0A=
=0A=
	if (true) {=0A=
=0A=
	  var config =3D __webpack_require__(5)=0A=
	  var hasConsole =3D typeof console !=3D=3D 'undefined'=0A=
=0A=
	  /**=0A=
	   * Log a message.=0A=
	   *=0A=
	   * @param {String} msg=0A=
	   */=0A=
=0A=
	  exports.log =3D function (msg) {=0A=
	    if (hasConsole &amp;&amp; config.debug) {=0A=
	      console.log('[Vue info]: ' + msg)=0A=
	    }=0A=
	  }=0A=
=0A=
	  /**=0A=
	   * We've got a problem here.=0A=
	   *=0A=
	   * @param {String} msg=0A=
	   */=0A=
=0A=
	  exports.warn =3D function (msg, e) {=0A=
	    if (hasConsole &amp;&amp; (!config.silent || config.debug)) {=0A=
	      console.warn('[Vue warn]: ' + msg)=0A=
	      /* istanbul ignore if */=0A=
	      if (config.debug) {=0A=
	        console.warn((e || new Error('Warning Stack Trace')).stack)=0A=
	      }=0A=
	    }=0A=
	  }=0A=
=0A=
	  /**=0A=
	   * Assert asset exists=0A=
	   */=0A=
=0A=
	  exports.assertAsset =3D function (val, type, id) {=0A=
	    /* istanbul ignore if */=0A=
	    if (type =3D=3D=3D 'directive') {=0A=
	      if (id =3D=3D=3D 'with') {=0A=
	        exports.warn(=0A=
	          'v-with has been deprecated in ^0.12.0. ' +=0A=
	          'Use props instead.'=0A=
	        )=0A=
	        return=0A=
	      }=0A=
	      if (id =3D=3D=3D 'events') {=0A=
	        exports.warn(=0A=
	          'v-events has been deprecated in ^0.12.0. ' +=0A=
	          'Pass down methods as callback props instead.'=0A=
	        )=0A=
	        return=0A=
	      }=0A=
	    }=0A=
	    if (!val) {=0A=
	      exports.warn('Failed to resolve ' + type + ': ' + id)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 9 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
=0A=
	/**=0A=
	 * Expose useful internals=0A=
	 */=0A=
=0A=
	exports.util =3D _=0A=
	exports.config =3D config=0A=
	exports.nextTick =3D _.nextTick=0A=
	exports.compiler =3D __webpack_require__(10)=0A=
=0A=
	exports.parsers =3D {=0A=
	  path: __webpack_require__(20),=0A=
	  text: __webpack_require__(13),=0A=
	  template: __webpack_require__(22),=0A=
	  directive: __webpack_require__(15),=0A=
	  expression: __webpack_require__(19)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Each instance constructor, including Vue, has a unique=0A=
	 * cid. This enables us to create wrapped "child=0A=
	 * constructors" for prototypal inheritance and cache them.=0A=
	 */=0A=
=0A=
	exports.cid =3D 0=0A=
	var cid =3D 1=0A=
=0A=
	/**=0A=
	 * Class inheritance=0A=
	 *=0A=
	 * @param {Object} extendOptions=0A=
	 */=0A=
=0A=
	exports.extend =3D function (extendOptions) {=0A=
	  extendOptions =3D extendOptions || {}=0A=
	  var Super =3D this=0A=
	  var Sub =3D createClass(=0A=
	    extendOptions.name ||=0A=
	    Super.options.name ||=0A=
	    'VueComponent'=0A=
	  )=0A=
	  Sub.prototype =3D Object.create(Super.prototype)=0A=
	  Sub.prototype.constructor =3D Sub=0A=
	  Sub.cid =3D cid++=0A=
	  Sub.options =3D _.mergeOptions(=0A=
	    Super.options,=0A=
	    extendOptions=0A=
	  )=0A=
	  Sub['super'] =3D Super=0A=
	  // allow further extension=0A=
	  Sub.extend =3D Super.extend=0A=
	  // create asset registers, so extended classes=0A=
	  // can have their private assets too.=0A=
	  config._assetTypes.forEach(function (type) {=0A=
	    Sub[type] =3D Super[type]=0A=
	  })=0A=
	  return Sub=0A=
	}=0A=
=0A=
	/**=0A=
	 * A function that returns a sub-class constructor with the=0A=
	 * given name. This gives us much nicer output when=0A=
	 * logging instances in the console.=0A=
	 *=0A=
	 * @param {String} name=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	function createClass (name) {=0A=
	  return new Function(=0A=
	    'return function ' + _.classify(name) +=0A=
	    ' (options) { this._init(options) }'=0A=
	  )()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Plugin system=0A=
	 *=0A=
	 * @param {Object} plugin=0A=
	 */=0A=
=0A=
	exports.use =3D function (plugin) {=0A=
	  // additional parameters=0A=
	  var args =3D _.toArray(arguments, 1)=0A=
	  args.unshift(this)=0A=
	  if (typeof plugin.install =3D=3D=3D 'function') {=0A=
	    plugin.install.apply(plugin, args)=0A=
	  } else {=0A=
	    plugin.apply(null, args)=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Apply a global mixin by merging it into the default=0A=
	 * options.=0A=
	 */=0A=
=0A=
	exports.mixin =3D function (mixin) {=0A=
	  var Vue =3D _.Vue=0A=
	  Vue.options =3D _.mergeOptions(Vue.options, mixin)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Create asset registration methods with the following=0A=
	 * signature:=0A=
	 *=0A=
	 * @param {String} id=0A=
	 * @param {*} definition=0A=
	 */=0A=
=0A=
	config._assetTypes.forEach(function (type) {=0A=
	  exports[type] =3D function (id, definition) {=0A=
	    if (!definition) {=0A=
	      return this.options[type + 's'][id]=0A=
	    } else {=0A=
	      if (=0A=
	        type =3D=3D=3D 'component' &amp;&amp;=0A=
	        _.isPlainObject(definition)=0A=
	      ) {=0A=
	        definition.name =3D id=0A=
	        definition =3D _.Vue.extend(definition)=0A=
	      }=0A=
	      this.options[type + 's'][id] =3D definition=0A=
	    }=0A=
	  }=0A=
	})=0A=
=0A=
=0A=
/***/ },=0A=
/* 10 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	_.extend(exports, __webpack_require__(11))=0A=
	_.extend(exports, __webpack_require__(24))=0A=
=0A=
=0A=
/***/ },=0A=
/* 11 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var compileProps =3D __webpack_require__(12)=0A=
	var config =3D __webpack_require__(5)=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var dirParser =3D __webpack_require__(15)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
	var resolveAsset =3D _.resolveAsset=0A=
	var componentDef =3D __webpack_require__(23)=0A=
=0A=
	// terminal directives=0A=
	var terminalDirectives =3D [=0A=
	  'repeat',=0A=
	  'if'=0A=
	]=0A=
=0A=
	/**=0A=
	 * Compile a template and return a reusable composite link=0A=
	 * function, which recursively contains more link functions=0A=
	 * inside. This top level compile function would normally=0A=
	 * be called on instance root nodes, but can also be used=0A=
	 * for partial compilation if the partial argument is true.=0A=
	 *=0A=
	 * The returned composite link function, when called, will=0A=
	 * return an unlink function that tearsdown all directives=0A=
	 * created during the linking phase.=0A=
	 *=0A=
	 * @param {Element|DocumentFragment} el=0A=
	 * @param {Object} options=0A=
	 * @param {Boolean} partial=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.compile =3D function (el, options, partial) {=0A=
	  // link function for the node itself.=0A=
	  var nodeLinkFn =3D partial || !options._asComponent=0A=
	    ? compileNode(el, options)=0A=
	    : null=0A=
	  // link function for the childNodes=0A=
	  var childLinkFn =3D=0A=
	    !(nodeLinkFn &amp;&amp; nodeLinkFn.terminal) &amp;&amp;=0A=
	    el.tagName !=3D=3D 'SCRIPT' &amp;&amp;=0A=
	    el.hasChildNodes()=0A=
	      ? compileNodeList(el.childNodes, options)=0A=
	      : null=0A=
=0A=
	  /**=0A=
	   * A composite linker function to be called on a already=0A=
	   * compiled piece of DOM, which instantiates all directive=0A=
	   * instances.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   * @param {Element|DocumentFragment} el=0A=
	   * @param {Vue} [host] - host vm of transcluded content=0A=
	   * @return {Function|undefined}=0A=
	   */=0A=
=0A=
	  return function compositeLinkFn (vm, el, host) {=0A=
	    // cache childNodes before linking parent, fix #657=0A=
	    var childNodes =3D _.toArray(el.childNodes)=0A=
	    // link=0A=
	    var dirs =3D linkAndCapture(function () {=0A=
	      if (nodeLinkFn) nodeLinkFn(vm, el, host)=0A=
	      if (childLinkFn) childLinkFn(vm, childNodes, host)=0A=
	    }, vm)=0A=
	    return makeUnlinkFn(vm, dirs)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Apply a linker to a vm/element pair and capture the=0A=
	 * directives created during the process.=0A=
	 *=0A=
	 * @param {Function} linker=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	function linkAndCapture (linker, vm) {=0A=
	  var originalDirCount =3D vm._directives.length=0A=
	  linker()=0A=
	  return vm._directives.slice(originalDirCount)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Linker functions return an unlink function that=0A=
	 * tearsdown all directives instances generated during=0A=
	 * the process.=0A=
	 *=0A=
	 * We create unlink functions with only the necessary=0A=
	 * information to avoid retaining additional closures.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Array} dirs=0A=
	 * @param {Vue} [context]=0A=
	 * @param {Array} [contextDirs]=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	function makeUnlinkFn (vm, dirs, context, contextDirs) {=0A=
	  return function unlink (destroying) {=0A=
	    teardownDirs(vm, dirs, destroying)=0A=
	    if (context &amp;&amp; contextDirs) {=0A=
	      teardownDirs(context, contextDirs)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Teardown partial linked directives.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Array} dirs=0A=
	 * @param {Boolean} destroying=0A=
	 */=0A=
=0A=
	function teardownDirs (vm, dirs, destroying) {=0A=
	  var i =3D dirs.length=0A=
	  while (i--) {=0A=
	    dirs[i]._teardown()=0A=
	    if (!destroying) {=0A=
	      vm._directives.$remove(dirs[i])=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile link props on an instance.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.compileAndLinkProps =3D function (vm, el, props) {=0A=
	  var propsLinkFn =3D compileProps(el, props)=0A=
	  var propDirs =3D linkAndCapture(function () {=0A=
	    propsLinkFn(vm, null)=0A=
	  }, vm)=0A=
	  return makeUnlinkFn(vm, propDirs)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile the root element of an instance.=0A=
	 *=0A=
	 * 1. attrs on context container (context scope)=0A=
	 * 2. attrs on the component template root node, if=0A=
	 *    replace:true (child scope)=0A=
	 *=0A=
	 * If this is a fragment instance, we only need to compile 1.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.compileRoot =3D function (el, options) {=0A=
	  var containerAttrs =3D options._containerAttrs=0A=
	  var replacerAttrs =3D options._replacerAttrs=0A=
	  var contextLinkFn, replacerLinkFn=0A=
=0A=
	  // only need to compile other attributes for=0A=
	  // non-fragment instances=0A=
	  if (el.nodeType !=3D=3D 11) {=0A=
	    // for components, container and replacer need to be=0A=
	    // compiled separately and linked in different scopes.=0A=
	    if (options._asComponent) {=0A=
	      // 2. container attributes=0A=
	      if (containerAttrs) {=0A=
	        contextLinkFn =3D compileDirectives(containerAttrs, options)=0A=
	      }=0A=
	      if (replacerAttrs) {=0A=
	        // 3. replacer attributes=0A=
	        replacerLinkFn =3D compileDirectives(replacerAttrs, options)=0A=
	      }=0A=
	    } else {=0A=
	      // non-component, just compile as a normal element.=0A=
	      replacerLinkFn =3D compileDirectives(el.attributes, options)=0A=
	    }=0A=
	  }=0A=
=0A=
	  return function rootLinkFn (vm, el) {=0A=
	    // link context scope dirs=0A=
	    var context =3D vm._context=0A=
	    var contextDirs=0A=
	    if (context &amp;&amp; contextLinkFn) {=0A=
	      contextDirs =3D linkAndCapture(function () {=0A=
	        contextLinkFn(context, el)=0A=
	      }, context)=0A=
	    }=0A=
=0A=
	    // link self=0A=
	    var selfDirs =3D linkAndCapture(function () {=0A=
	      if (replacerLinkFn) replacerLinkFn(vm, el)=0A=
	    }, vm)=0A=
=0A=
	    // return the unlink function that tearsdown context=0A=
	    // container directives.=0A=
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile a node and return a nodeLinkFn based on the=0A=
	 * node type.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 * @param {Object} options=0A=
	 * @return {Function|null}=0A=
	 */=0A=
=0A=
	function compileNode (node, options) {=0A=
	  var type =3D node.nodeType=0A=
	  if (type =3D=3D=3D 1 &amp;&amp; node.tagName !=3D=3D 'SCRIPT') {=0A=
	    return compileElement(node, options)=0A=
	  } else if (type =3D=3D=3D 3 &amp;&amp; config.interpolate &amp;&amp; =
node.data.trim()) {=0A=
	    return compileTextNode(node, options)=0A=
	  } else {=0A=
	    return null=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile an element and return a nodeLinkFn.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Function|null}=0A=
	 */=0A=
=0A=
	function compileElement (el, options) {=0A=
	  // preprocess textareas.=0A=
	  // textarea treats its text content as the initial value.=0A=
	  // just bind it as a v-attr directive for value.=0A=
	  if (el.tagName =3D=3D=3D 'TEXTAREA') {=0A=
	    if (textParser.parse(el.value)) {=0A=
	      el.setAttribute('value', el.value)=0A=
	    }=0A=
	  }=0A=
	  var linkFn=0A=
	  var hasAttrs =3D el.hasAttributes()=0A=
	  // check terminal directives (repeat &amp; if)=0A=
	  if (hasAttrs) {=0A=
	    linkFn =3D checkTerminalDirectives(el, options)=0A=
	  }=0A=
	  // check element directives=0A=
	  if (!linkFn) {=0A=
	    linkFn =3D checkElementDirectives(el, options)=0A=
	  }=0A=
	  // check component=0A=
	  if (!linkFn) {=0A=
	    linkFn =3D checkComponent(el, options)=0A=
	  }=0A=
	  // normal directives=0A=
	  if (!linkFn &amp;&amp; hasAttrs) {=0A=
	    linkFn =3D compileDirectives(el.attributes, options)=0A=
	  }=0A=
	  return linkFn=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile a textNode and return a nodeLinkFn.=0A=
	 *=0A=
	 * @param {TextNode} node=0A=
	 * @param {Object} options=0A=
	 * @return {Function|null} textNodeLinkFn=0A=
	 */=0A=
=0A=
	function compileTextNode (node, options) {=0A=
	  var tokens =3D textParser.parse(node.data)=0A=
	  if (!tokens) {=0A=
	    return null=0A=
	  }=0A=
	  var frag =3D document.createDocumentFragment()=0A=
	  var el, token=0A=
	  for (var i =3D 0, l =3D tokens.length; i &lt; l; i++) {=0A=
	    token =3D tokens[i]=0A=
	    el =3D token.tag=0A=
	      ? processTextToken(token, options)=0A=
	      : document.createTextNode(token.value)=0A=
	    frag.appendChild(el)=0A=
	  }=0A=
	  return makeTextNodeLinkFn(tokens, frag, options)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Process a single text token.=0A=
	 *=0A=
	 * @param {Object} token=0A=
	 * @param {Object} options=0A=
	 * @return {Node}=0A=
	 */=0A=
=0A=
	function processTextToken (token, options) {=0A=
	  var el=0A=
	  if (token.oneTime) {=0A=
	    el =3D document.createTextNode(token.value)=0A=
	  } else {=0A=
	    if (token.html) {=0A=
	      el =3D document.createComment('v-html')=0A=
	      setTokenType('html')=0A=
	    } else {=0A=
	      // IE will clean up empty textNodes during=0A=
	      // frag.cloneNode(true), so we have to give it=0A=
	      // something here...=0A=
	      el =3D document.createTextNode(' ')=0A=
	      setTokenType('text')=0A=
	    }=0A=
	  }=0A=
	  function setTokenType (type) {=0A=
	    token.type =3D type=0A=
	    token.def =3D resolveAsset(options, 'directives', type)=0A=
	    token.descriptor =3D dirParser.parse(token.value)[0]=0A=
	  }=0A=
	  return el=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build a function that processes a textNode.=0A=
	 *=0A=
	 * @param {Array&lt;Object&gt;} tokens=0A=
	 * @param {DocumentFragment} frag=0A=
	 */=0A=
=0A=
	function makeTextNodeLinkFn (tokens, frag) {=0A=
	  return function textNodeLinkFn (vm, el) {=0A=
	    var fragClone =3D frag.cloneNode(true)=0A=
	    var childNodes =3D _.toArray(fragClone.childNodes)=0A=
	    var token, value, node=0A=
	    for (var i =3D 0, l =3D tokens.length; i &lt; l; i++) {=0A=
	      token =3D tokens[i]=0A=
	      value =3D token.value=0A=
	      if (token.tag) {=0A=
	        node =3D childNodes[i]=0A=
	        if (token.oneTime) {=0A=
	          value =3D vm.$eval(value)=0A=
	          if (token.html) {=0A=
	            _.replace(node, templateParser.parse(value, true))=0A=
	          } else {=0A=
	            node.data =3D value=0A=
	          }=0A=
	        } else {=0A=
	          vm._bindDir(token.type, node,=0A=
	                      token.descriptor, token.def)=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	    _.replace(el, fragClone)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile a node list and return a childLinkFn.=0A=
	 *=0A=
	 * @param {NodeList} nodeList=0A=
	 * @param {Object} options=0A=
	 * @return {Function|undefined}=0A=
	 */=0A=
=0A=
	function compileNodeList (nodeList, options) {=0A=
	  var linkFns =3D []=0A=
	  var nodeLinkFn, childLinkFn, node=0A=
	  for (var i =3D 0, l =3D nodeList.length; i &lt; l; i++) {=0A=
	    node =3D nodeList[i]=0A=
	    nodeLinkFn =3D compileNode(node, options)=0A=
	    childLinkFn =3D=0A=
	      !(nodeLinkFn &amp;&amp; nodeLinkFn.terminal) &amp;&amp;=0A=
	      node.tagName !=3D=3D 'SCRIPT' &amp;&amp;=0A=
	      node.hasChildNodes()=0A=
	        ? compileNodeList(node.childNodes, options)=0A=
	        : null=0A=
	    linkFns.push(nodeLinkFn, childLinkFn)=0A=
	  }=0A=
	  return linkFns.length=0A=
	    ? makeChildLinkFn(linkFns)=0A=
	    : null=0A=
	}=0A=
=0A=
	/**=0A=
	 * Make a child link function for a node's childNodes.=0A=
	 *=0A=
	 * @param {Array&lt;Function&gt;} linkFns=0A=
	 * @return {Function} childLinkFn=0A=
	 */=0A=
=0A=
	function makeChildLinkFn (linkFns) {=0A=
	  return function childLinkFn (vm, nodes, host) {=0A=
	    var node, nodeLinkFn, childrenLinkFn=0A=
	    for (var i =3D 0, n =3D 0, l =3D linkFns.length; i &lt; l; n++) {=0A=
	      node =3D nodes[n]=0A=
	      nodeLinkFn =3D linkFns[i++]=0A=
	      childrenLinkFn =3D linkFns[i++]=0A=
	      // cache childNodes before linking parent, fix #657=0A=
	      var childNodes =3D _.toArray(node.childNodes)=0A=
	      if (nodeLinkFn) {=0A=
	        nodeLinkFn(vm, node, host)=0A=
	      }=0A=
	      if (childrenLinkFn) {=0A=
	        childrenLinkFn(vm, childNodes, host)=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check for element directives (custom elements that should=0A=
	 * be resovled as terminal directives).=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 */=0A=
=0A=
	function checkElementDirectives (el, options) {=0A=
	  var tag =3D el.tagName.toLowerCase()=0A=
	  if (_.commonTagRE.test(tag)) return=0A=
	  var def =3D resolveAsset(options, 'elementDirectives', tag)=0A=
	  if (def) {=0A=
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if an element is a component. If yes, return=0A=
	 * a component link function.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @param {Boolean} hasAttrs=0A=
	 * @return {Function|undefined}=0A=
	 */=0A=
=0A=
	function checkComponent (el, options, hasAttrs) {=0A=
	  var componentId =3D _.checkComponent(el, options, hasAttrs)=0A=
	  if (componentId) {=0A=
	    var componentLinkFn =3D function (vm, el, host) {=0A=
	      vm._bindDir('component', el, {=0A=
	        expression: componentId=0A=
	      }, componentDef, host)=0A=
	    }=0A=
	    componentLinkFn.terminal =3D true=0A=
	    return componentLinkFn=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check an element for terminal directives in fixed order.=0A=
	 * If it finds one, return a terminal link function.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Function} terminalLinkFn=0A=
	 */=0A=
=0A=
	function checkTerminalDirectives (el, options) {=0A=
	  if (_.attr(el, 'pre') !=3D=3D null) {=0A=
	    return skip=0A=
	  }=0A=
	  var value, dirName=0A=
	  for (var i =3D 0, l =3D terminalDirectives.length; i &lt; l; i++) {=0A=
	    dirName =3D terminalDirectives[i]=0A=
	    if ((value =3D _.attr(el, dirName)) !=3D=3D null) {=0A=
	      return makeTerminalNodeLinkFn(el, dirName, value, options)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	function skip () {}=0A=
	skip.terminal =3D true=0A=
=0A=
	/**=0A=
	 * Build a node link function for a terminal directive.=0A=
	 * A terminal link function terminates the current=0A=
	 * compilation recursion and handles compilation of the=0A=
	 * subtree in the directive.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {String} dirName=0A=
	 * @param {String} value=0A=
	 * @param {Object} options=0A=
	 * @param {Object} [def]=0A=
	 * @return {Function} terminalLinkFn=0A=
	 */=0A=
=0A=
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {=0A=
	  var descriptor =3D dirParser.parse(value)[0]=0A=
	  // no need to call resolveAsset since terminal directives=0A=
	  // are always internal=0A=
	  def =3D def || options.directives[dirName]=0A=
	  var fn =3D function terminalNodeLinkFn (vm, el, host) {=0A=
	    vm._bindDir(dirName, el, descriptor, def, host)=0A=
	  }=0A=
	  fn.terminal =3D true=0A=
	  return fn=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile the directives on an element and return a linker.=0A=
	 *=0A=
	 * @param {Array|NamedNodeMap} attrs=0A=
	 * @param {Object} options=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	function compileDirectives (attrs, options) {=0A=
	  var i =3D attrs.length=0A=
	  var dirs =3D []=0A=
	  var attr, name, value, dir, dirName, dirDef=0A=
	  while (i--) {=0A=
	    attr =3D attrs[i]=0A=
	    name =3D attr.name=0A=
	    value =3D attr.value=0A=
	    if (name.indexOf(config.prefix) =3D=3D=3D 0) {=0A=
	      dirName =3D name.slice(config.prefix.length)=0A=
	      dirDef =3D resolveAsset(options, 'directives', dirName)=0A=
	      if (true) {=0A=
	        _.assertAsset(dirDef, 'directive', dirName)=0A=
	      }=0A=
	      if (dirDef) {=0A=
	        dirs.push({=0A=
	          name: dirName,=0A=
	          descriptors: dirParser.parse(value),=0A=
	          def: dirDef=0A=
	        })=0A=
	      }=0A=
	    } else if (config.interpolate) {=0A=
	      dir =3D collectAttrDirective(name, value, options)=0A=
	      if (dir) {=0A=
	        dirs.push(dir)=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  // sort by priority, LOW to HIGH=0A=
	  if (dirs.length) {=0A=
	    dirs.sort(directiveComparator)=0A=
	    return makeNodeLinkFn(dirs)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build a link function for all directives on a single node.=0A=
	 *=0A=
	 * @param {Array} directives=0A=
	 * @return {Function} directivesLinkFn=0A=
	 */=0A=
=0A=
	function makeNodeLinkFn (directives) {=0A=
	  return function nodeLinkFn (vm, el, host) {=0A=
	    // reverse apply because it's sorted low to high=0A=
	    var i =3D directives.length=0A=
	    var dir, j, k=0A=
	    while (i--) {=0A=
	      dir =3D directives[i]=0A=
	      if (dir._link) {=0A=
	        // custom link fn=0A=
	        dir._link(vm, el)=0A=
	      } else {=0A=
	        k =3D dir.descriptors.length=0A=
	        for (j =3D 0; j &lt; k; j++) {=0A=
	          vm._bindDir(dir.name, el,=0A=
	            dir.descriptors[j], dir.def, host)=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check an attribute for potential dynamic bindings,=0A=
	 * and return a directive object.=0A=
	 *=0A=
	 * Special case: class interpolations are translated into=0A=
	 * v-class instead v-attr, so that it can work with user=0A=
	 * provided v-class bindings.=0A=
	 *=0A=
	 * @param {String} name=0A=
	 * @param {String} value=0A=
	 * @param {Object} options=0A=
	 * @return {Object}=0A=
	 */=0A=
=0A=
	function collectAttrDirective (name, value, options) {=0A=
	  var tokens =3D textParser.parse(value)=0A=
	  var isClass =3D name =3D=3D=3D 'class'=0A=
	  if (tokens) {=0A=
	    var dirName =3D isClass ? 'class' : 'attr'=0A=
	    var def =3D options.directives[dirName]=0A=
	    var i =3D tokens.length=0A=
	    var allOneTime =3D true=0A=
	    while (i--) {=0A=
	      var token =3D tokens[i]=0A=
	      if (token.tag &amp;&amp; !token.oneTime) {=0A=
	        allOneTime =3D false=0A=
	      }=0A=
	    }=0A=
	    var linker=0A=
	    if (allOneTime) {=0A=
	      linker =3D function (vm, el) {=0A=
	        el.setAttribute(name, vm.$interpolate(value))=0A=
	      }=0A=
	    } else {=0A=
	      linker =3D function (vm, el) {=0A=
	        var exp =3D textParser.tokensToExp(tokens, vm)=0A=
	        var desc =3D isClass=0A=
	          ? dirParser.parse(exp)[0]=0A=
	          : dirParser.parse(name + ':' + exp)[0]=0A=
	        if (isClass) {=0A=
	          desc._rawClass =3D value=0A=
	        }=0A=
	        vm._bindDir(dirName, el, desc, def)=0A=
	      }=0A=
	    }=0A=
	    return {=0A=
	      def: def,=0A=
	      _link: linker=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Directive priority sort comparator=0A=
	 *=0A=
	 * @param {Object} a=0A=
	 * @param {Object} b=0A=
	 */=0A=
=0A=
	function directiveComparator (a, b) {=0A=
	  a =3D a.def.priority || 0=0A=
	  b =3D b.def.priority || 0=0A=
	  return a &gt; b ? 1 : -1=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 12 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var propDef =3D __webpack_require__(16)=0A=
	var propBindingModes =3D __webpack_require__(5)._propBindingModes=0A=
=0A=
	// regexes=0A=
	var identRE =3D __webpack_require__(20).identRE=0A=
	var dataAttrRE =3D /^data-/=0A=
	var settablePathRE =3D =
/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/=0A=
	var literalValueRE =3D /^(true|false)$|^\d.*/=0A=
=0A=
	/**=0A=
	 * Compile param attributes on a root element and return=0A=
	 * a props link function.=0A=
	 *=0A=
	 * @param {Element|DocumentFragment} el=0A=
	 * @param {Array} propOptions=0A=
	 * @return {Function} propsLinkFn=0A=
	 */=0A=
=0A=
	module.exports =3D function compileProps (el, propOptions) {=0A=
	  var props =3D []=0A=
	  var i =3D propOptions.length=0A=
	  var options, name, attr, value, path, prop, literal, single=0A=
	  while (i--) {=0A=
	    options =3D propOptions[i]=0A=
	    name =3D options.name=0A=
	    // props could contain dashes, which will be=0A=
	    // interpreted as minus calculations by the parser=0A=
	    // so we need to camelize the path here=0A=
	    path =3D _.camelize(name.replace(dataAttrRE, ''))=0A=
	    if (!identRE.test(path)) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Invalid prop key: "' + name + '". Prop keys ' +=0A=
	        'must be valid identifiers.'=0A=
	      )=0A=
	      continue=0A=
	    }=0A=
	    attr =3D _.hyphenate(name)=0A=
	    value =3D el.getAttribute(attr)=0A=
	    if (value =3D=3D=3D null) {=0A=
	      attr =3D 'data-' + attr=0A=
	      value =3D el.getAttribute(attr)=0A=
	    }=0A=
	    // create a prop descriptor=0A=
	    prop =3D {=0A=
	      name: name,=0A=
	      raw: value,=0A=
	      path: path,=0A=
	      options: options,=0A=
	      mode: propBindingModes.ONE_WAY=0A=
	    }=0A=
	    if (value !=3D=3D null) {=0A=
	      // important so that this doesn't get compiled=0A=
	      // again as a normal attribute binding=0A=
	      el.removeAttribute(attr)=0A=
	      var tokens =3D textParser.parse(value)=0A=
	      if (tokens) {=0A=
	        prop.dynamic =3D true=0A=
	        prop.parentPath =3D textParser.tokensToExp(tokens)=0A=
	        // check prop binding type.=0A=
	        single =3D tokens.length =3D=3D=3D 1=0A=
	        literal =3D literalValueRE.test(prop.parentPath)=0A=
	        // one time: {{* prop}}=0A=
	        if (literal || (single &amp;&amp; tokens[0].oneTime)) {=0A=
	          prop.mode =3D propBindingModes.ONE_TIME=0A=
	        } else if (=0A=
	          !literal &amp;&amp;=0A=
	          (single &amp;&amp; tokens[0].twoWay)=0A=
	        ) {=0A=
	          if (settablePathRE.test(prop.parentPath)) {=0A=
	            prop.mode =3D propBindingModes.TWO_WAY=0A=
	          } else {=0A=
	            ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	              'Cannot bind two-way prop with non-settable ' +=0A=
	              'parent path: ' + prop.parentPath=0A=
	            )=0A=
	          }=0A=
	        }=0A=
	        if (=0A=
	          ("development") !=3D=3D 'production' &amp;&amp;=0A=
	          options.twoWay &amp;&amp;=0A=
	          prop.mode !=3D=3D propBindingModes.TWO_WAY=0A=
	        ) {=0A=
	          _.warn(=0A=
	            'Prop "' + name + '" expects a two-way binding type.'=0A=
	          )=0A=
	        }=0A=
	      }=0A=
	    } else if (options &amp;&amp; options.required) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Missing required prop: ' + name=0A=
	      )=0A=
	    }=0A=
	    props.push(prop)=0A=
	  }=0A=
	  return makePropsLinkFn(props)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build a function that applies props to a vm.=0A=
	 *=0A=
	 * @param {Array} props=0A=
	 * @return {Function} propsLinkFn=0A=
	 */=0A=
=0A=
	function makePropsLinkFn (props) {=0A=
	  return function propsLinkFn (vm, el) {=0A=
	    // store resolved props info=0A=
	    vm._props =3D {}=0A=
	    var i =3D props.length=0A=
	    var prop, path, options, value=0A=
	    while (i--) {=0A=
	      prop =3D props[i]=0A=
	      path =3D prop.path=0A=
	      vm._props[path] =3D prop=0A=
	      options =3D prop.options=0A=
	      if (prop.raw =3D=3D=3D null) {=0A=
	        // initialize absent prop=0A=
	        _.initProp(vm, prop, getDefault(options))=0A=
	      } else if (prop.dynamic) {=0A=
	        // dynamic prop=0A=
	        if (vm._context) {=0A=
	          if (prop.mode =3D=3D=3D propBindingModes.ONE_TIME) {=0A=
	            // one time binding=0A=
	            value =3D vm._context.$get(prop.parentPath)=0A=
	            _.initProp(vm, prop, value)=0A=
	          } else {=0A=
	            // dynamic binding=0A=
	            vm._bindDir('prop', el, prop, propDef)=0A=
	          }=0A=
	        } else {=0A=
	          ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	            'Cannot bind dynamic prop on a root instance' +=0A=
	            ' with no parent: ' + prop.name + '=3D"' +=0A=
	            prop.raw + '"'=0A=
	          )=0A=
	        }=0A=
	      } else {=0A=
	        // literal, cast it and just set once=0A=
	        var raw =3D prop.raw=0A=
	        value =3D options.type =3D=3D=3D Boolean &amp;&amp; raw =
=3D=3D=3D ''=0A=
	          ? true=0A=
	          // do not cast emptry string.=0A=
	          // _.toNumber casts empty string to 0.=0A=
	          : raw.trim()=0A=
	            ? _.toBoolean(_.toNumber(raw))=0A=
	            : raw=0A=
	        _.initProp(vm, prop, value)=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Get the default value of a prop.=0A=
	 *=0A=
	 * @param {Object} options=0A=
	 * @return {*}=0A=
	 */=0A=
=0A=
	function getDefault (options) {=0A=
	  // no default, return undefined=0A=
	  if (!options.hasOwnProperty('default')) {=0A=
	    // absent boolean value defaults to false=0A=
	    return options.type =3D=3D=3D Boolean=0A=
	      ? false=0A=
	      : undefined=0A=
	  }=0A=
	  var def =3D options.default=0A=
	  // warn against non-factory defaults for Object &amp; Array=0A=
	  if (_.isObject(def)) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Object/Array as default prop values will be shared ' +=0A=
	      'across multiple instances. Use a factory function ' +=0A=
	      'to return the default value instead.'=0A=
	    )=0A=
	  }=0A=
	  // call factory function for non-Function types=0A=
	  return typeof def =3D=3D=3D 'function' &amp;&amp; options.type =
!=3D=3D Function=0A=
	    ? def()=0A=
	    : def=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 13 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var config =3D __webpack_require__(5)=0A=
	var dirParser =3D __webpack_require__(15)=0A=
	var regexEscapeRE =3D /[-.*+?^${}()|[\]\/\\]/g=0A=
	var cache, tagRE, htmlRE, firstChar, lastChar=0A=
=0A=
	/**=0A=
	 * Escape a string so it can be used in a RegExp=0A=
	 * constructor.=0A=
	 *=0A=
	 * @param {String} str=0A=
	 */=0A=
=0A=
	function escapeRegex (str) {=0A=
	  return str.replace(regexEscapeRE, '\\$&amp;')=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile the interpolation tag regex.=0A=
	 *=0A=
	 * @return {RegExp}=0A=
	 */=0A=
=0A=
	function compileRegex () {=0A=
	  config._delimitersChanged =3D false=0A=
	  var open =3D config.delimiters[0]=0A=
	  var close =3D config.delimiters[1]=0A=
	  firstChar =3D open.charAt(0)=0A=
	  lastChar =3D close.charAt(close.length - 1)=0A=
	  var firstCharRE =3D escapeRegex(firstChar)=0A=
	  var lastCharRE =3D escapeRegex(lastChar)=0A=
	  var openRE =3D escapeRegex(open)=0A=
	  var closeRE =3D escapeRegex(close)=0A=
	  tagRE =3D new RegExp(=0A=
	    firstCharRE + '?' + openRE +=0A=
	    '(.+?)' +=0A=
	    closeRE + lastCharRE + '?',=0A=
	    'g'=0A=
	  )=0A=
	  htmlRE =3D new RegExp(=0A=
	    '^' + firstCharRE + openRE +=0A=
	    '.*' +=0A=
	    closeRE + lastCharRE + '$'=0A=
	  )=0A=
	  // reset cache=0A=
	  cache =3D new Cache(1000)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Parse a template text string into an array of tokens.=0A=
	 *=0A=
	 * @param {String} text=0A=
	 * @return {Array&lt;Object&gt; | null}=0A=
	 *               - {String} type=0A=
	 *               - {String} value=0A=
	 *               - {Boolean} [html]=0A=
	 *               - {Boolean} [oneTime]=0A=
	 */=0A=
=0A=
	exports.parse =3D function (text) {=0A=
	  if (config._delimitersChanged) {=0A=
	    compileRegex()=0A=
	  }=0A=
	  var hit =3D cache.get(text)=0A=
	  if (hit) {=0A=
	    return hit=0A=
	  }=0A=
	  text =3D text.replace(/\n/g, '')=0A=
	  if (!tagRE.test(text)) {=0A=
	    return null=0A=
	  }=0A=
	  var tokens =3D []=0A=
	  var lastIndex =3D tagRE.lastIndex =3D 0=0A=
	  var match, index, value, first, oneTime, twoWay=0A=
	  /* eslint-disable no-cond-assign */=0A=
	  while (match =3D tagRE.exec(text)) {=0A=
	  /* eslint-enable no-cond-assign */=0A=
	    index =3D match.index=0A=
	    // push text token=0A=
	    if (index &gt; lastIndex) {=0A=
	      tokens.push({=0A=
	        value: text.slice(lastIndex, index)=0A=
	      })=0A=
	    }=0A=
	    // tag token=0A=
	    first =3D match[1].charCodeAt(0)=0A=
	    oneTime =3D first =3D=3D=3D 42 // *=0A=
	    twoWay =3D first =3D=3D=3D 64  // @=0A=
	    value =3D oneTime || twoWay=0A=
	      ? match[1].slice(1)=0A=
	      : match[1]=0A=
	    tokens.push({=0A=
	      tag: true,=0A=
	      value: value.trim(),=0A=
	      html: htmlRE.test(match[0]),=0A=
	      oneTime: oneTime,=0A=
	      twoWay: twoWay=0A=
	    })=0A=
	    lastIndex =3D index + match[0].length=0A=
	  }=0A=
	  if (lastIndex &lt; text.length) {=0A=
	    tokens.push({=0A=
	      value: text.slice(lastIndex)=0A=
	    })=0A=
	  }=0A=
	  cache.put(text, tokens)=0A=
	  return tokens=0A=
	}=0A=
=0A=
	/**=0A=
	 * Format a list of tokens into an expression.=0A=
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized=0A=
	 * into one single expression as '"a " + b + " c"'.=0A=
	 *=0A=
	 * @param {Array} tokens=0A=
	 * @param {Vue} [vm]=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.tokensToExp =3D function (tokens, vm) {=0A=
	  if (tokens.length &gt; 1) {=0A=
	    return tokens.map(function (token) {=0A=
	      return formatToken(token, vm)=0A=
	    }).join('+')=0A=
	  } else {=0A=
	    return formatToken(tokens[0], vm, true)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Format a single token.=0A=
	 *=0A=
	 * @param {Object} token=0A=
	 * @param {Vue} [vm]=0A=
	 * @param {Boolean} single=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	function formatToken (token, vm, single) {=0A=
	  return token.tag=0A=
	    ? vm &amp;&amp; token.oneTime=0A=
	      ? '"' + vm.$eval(token.value) + '"'=0A=
	      : inlineFilters(token.value, single)=0A=
	    : '"' + token.value + '"'=0A=
	}=0A=
=0A=
	/**=0A=
	 * For an attribute with multiple interpolation tags,=0A=
	 * e.g. attr=3D"some-{{thing | filter}}", in order to combine=0A=
	 * the whole thing into a single watchable expression, we=0A=
	 * have to inline those filters. This function does exactly=0A=
	 * that. This is a bit hacky but it avoids heavy changes=0A=
	 * to directive parser and watcher mechanism.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @param {Boolean} single=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	var filterRE =3D /[^|]\|[^|]/=0A=
	function inlineFilters (exp, single) {=0A=
	  if (!filterRE.test(exp)) {=0A=
	    return single=0A=
	      ? exp=0A=
	      : '(' + exp + ')'=0A=
	  } else {=0A=
	    var dir =3D dirParser.parse(exp)[0]=0A=
	    if (!dir.filters) {=0A=
	      return '(' + exp + ')'=0A=
	    } else {=0A=
	      return 'this._applyFilters(' +=0A=
	        dir.expression + // value=0A=
	        ',null,' +       // oldValue (null for read)=0A=
	        JSON.stringify(dir.filters) + // filter descriptors=0A=
	        ',false)'        // write?=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 14 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	/**=0A=
	 * A doubly linked list-based Least Recently Used (LRU)=0A=
	 * cache. Will keep most recently used items while=0A=
	 * discarding least recently used items when its limit is=0A=
	 * reached. This is a bare-bone version of=0A=
	 * Rasmus Andersson's js-lru:=0A=
	 *=0A=
	 *   https://github.com/rsms/js-lru=0A=
	 *=0A=
	 * @param {Number} limit=0A=
	 * @constructor=0A=
	 */=0A=
=0A=
	function Cache (limit) {=0A=
	  this.size =3D 0=0A=
	  this.limit =3D limit=0A=
	  this.head =3D this.tail =3D undefined=0A=
	  this._keymap =3D Object.create(null)=0A=
	}=0A=
=0A=
	var p =3D Cache.prototype=0A=
=0A=
	/**=0A=
	 * Put &lt;value&gt; into the cache associated with &lt;key&gt;.=0A=
	 * Returns the entry which was removed to make room for=0A=
	 * the new entry. Otherwise undefined is returned.=0A=
	 * (i.e. if there was enough room already).=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} value=0A=
	 * @return {Entry|undefined}=0A=
	 */=0A=
=0A=
	p.put =3D function (key, value) {=0A=
	  var entry =3D {=0A=
	    key: key,=0A=
	    value: value=0A=
	  }=0A=
	  this._keymap[key] =3D entry=0A=
	  if (this.tail) {=0A=
	    this.tail.newer =3D entry=0A=
	    entry.older =3D this.tail=0A=
	  } else {=0A=
	    this.head =3D entry=0A=
	  }=0A=
	  this.tail =3D entry=0A=
	  if (this.size =3D=3D=3D this.limit) {=0A=
	    return this.shift()=0A=
	  } else {=0A=
	    this.size++=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Purge the least recently used (oldest) entry from the=0A=
	 * cache. Returns the removed entry or undefined if the=0A=
	 * cache was empty.=0A=
	 */=0A=
=0A=
	p.shift =3D function () {=0A=
	  var entry =3D this.head=0A=
	  if (entry) {=0A=
	    this.head =3D this.head.newer=0A=
	    this.head.older =3D undefined=0A=
	    entry.newer =3D entry.older =3D undefined=0A=
	    this._keymap[entry.key] =3D undefined=0A=
	  }=0A=
	  return entry=0A=
	}=0A=
=0A=
	/**=0A=
	 * Get and register recent use of &lt;key&gt;. Returns the value=0A=
	 * associated with &lt;key&gt; or undefined if not in cache.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {Boolean} returnEntry=0A=
	 * @return {Entry|*}=0A=
	 */=0A=
=0A=
	p.get =3D function (key, returnEntry) {=0A=
	  var entry =3D this._keymap[key]=0A=
	  if (entry =3D=3D=3D undefined) return=0A=
	  if (entry =3D=3D=3D this.tail) {=0A=
	    return returnEntry=0A=
	      ? entry=0A=
	      : entry.value=0A=
	  }=0A=
	  // HEAD--------------TAIL=0A=
	  //   &lt;.older   .newer&gt;=0A=
	  //  &lt;--- add direction --=0A=
	  //   A  B  C  &lt;D&gt;  E=0A=
	  if (entry.newer) {=0A=
	    if (entry =3D=3D=3D this.head) {=0A=
	      this.head =3D entry.newer=0A=
	    }=0A=
	    entry.newer.older =3D entry.older // C &lt;-- E.=0A=
	  }=0A=
	  if (entry.older) {=0A=
	    entry.older.newer =3D entry.newer // C. --&gt; E=0A=
	  }=0A=
	  entry.newer =3D undefined // D --x=0A=
	  entry.older =3D this.tail // D. --&gt; E=0A=
	  if (this.tail) {=0A=
	    this.tail.newer =3D entry // E. &lt;-- D=0A=
	  }=0A=
	  this.tail =3D entry=0A=
	  return returnEntry=0A=
	    ? entry=0A=
	    : entry.value=0A=
	}=0A=
=0A=
	module.exports =3D Cache=0A=
=0A=
=0A=
/***/ },=0A=
/* 15 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var cache =3D new Cache(1000)=0A=
	var argRE =3D /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/=0A=
	var filterTokenRE =3D /[^\s'"]+|'[^']*'|"[^"]*"/g=0A=
	var reservedArgRE =3D /^in$|^-?\d+/=0A=
=0A=
	/**=0A=
	 * Parser state=0A=
	 */=0A=
=0A=
	var str=0A=
	var c, i, l=0A=
	var inSingle=0A=
	var inDouble=0A=
	var curly=0A=
	var square=0A=
	var paren=0A=
	var begin=0A=
	var argIndex=0A=
	var dirs=0A=
	var dir=0A=
	var lastFilterIndex=0A=
	var arg=0A=
=0A=
	/**=0A=
	 * Push a directive object into the result Array=0A=
	 */=0A=
=0A=
	function pushDir () {=0A=
	  dir.raw =3D str.slice(begin, i).trim()=0A=
	  if (dir.expression =3D=3D=3D undefined) {=0A=
	    dir.expression =3D str.slice(argIndex, i).trim()=0A=
	  } else if (lastFilterIndex !=3D=3D begin) {=0A=
	    pushFilter()=0A=
	  }=0A=
	  if (i =3D=3D=3D 0 || dir.expression) {=0A=
	    dirs.push(dir)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Push a filter to the current directive object=0A=
	 */=0A=
=0A=
	function pushFilter () {=0A=
	  var exp =3D str.slice(lastFilterIndex, i).trim()=0A=
	  var filter=0A=
	  if (exp) {=0A=
	    filter =3D {}=0A=
	    var tokens =3D exp.match(filterTokenRE)=0A=
	    filter.name =3D tokens[0]=0A=
	    if (tokens.length &gt; 1) {=0A=
	      filter.args =3D tokens.slice(1).map(processFilterArg)=0A=
	    }=0A=
	  }=0A=
	  if (filter) {=0A=
	    (dir.filters =3D dir.filters || []).push(filter)=0A=
	  }=0A=
	  lastFilterIndex =3D i + 1=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if an argument is dynamic and strip quotes.=0A=
	 *=0A=
	 * @param {String} arg=0A=
	 * @return {Object}=0A=
	 */=0A=
=0A=
	function processFilterArg (arg) {=0A=
	  var stripped =3D reservedArgRE.test(arg)=0A=
	    ? arg=0A=
	    : _.stripQuotes(arg)=0A=
	  var dynamic =3D stripped =3D=3D=3D false=0A=
	  return {=0A=
	    value: dynamic ? arg : stripped,=0A=
	    dynamic: dynamic=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Parse a directive string into an Array of AST-like=0A=
	 * objects representing directives.=0A=
	 *=0A=
	 * Example:=0A=
	 *=0A=
	 * "click: a =3D a + 1 | uppercase" will yield:=0A=
	 * {=0A=
	 *   arg: 'click',=0A=
	 *   expression: 'a =3D a + 1',=0A=
	 *   filters: [=0A=
	 *     { name: 'uppercase', args: null }=0A=
	 *   ]=0A=
	 * }=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @return {Array&lt;Object&gt;}=0A=
	 */=0A=
=0A=
	exports.parse =3D function (s) {=0A=
=0A=
	  var hit =3D cache.get(s)=0A=
	  if (hit) {=0A=
	    return hit=0A=
	  }=0A=
=0A=
	  // reset parser state=0A=
	  str =3D s=0A=
	  inSingle =3D inDouble =3D false=0A=
	  curly =3D square =3D paren =3D begin =3D argIndex =3D 0=0A=
	  lastFilterIndex =3D 0=0A=
	  dirs =3D []=0A=
	  dir =3D {}=0A=
	  arg =3D null=0A=
=0A=
	  for (i =3D 0, l =3D str.length; i &lt; l; i++) {=0A=
	    c =3D str.charCodeAt(i)=0A=
	    if (inSingle) {=0A=
	      // check single quote=0A=
	      if (c =3D=3D=3D 0x27) inSingle =3D !inSingle=0A=
	    } else if (inDouble) {=0A=
	      // check double quote=0A=
	      if (c =3D=3D=3D 0x22) inDouble =3D !inDouble=0A=
	    } else if (=0A=
	      c =3D=3D=3D 0x2C &amp;&amp; // comma=0A=
	      !paren &amp;&amp; !curly &amp;&amp; !square=0A=
	    ) {=0A=
	      // reached the end of a directive=0A=
	      pushDir()=0A=
	      // reset &amp; skip the comma=0A=
	      dir =3D {}=0A=
	      begin =3D argIndex =3D lastFilterIndex =3D i + 1=0A=
	    } else if (=0A=
	      c =3D=3D=3D 0x3A &amp;&amp; // colon=0A=
	      !dir.expression &amp;&amp;=0A=
	      !dir.arg=0A=
	    ) {=0A=
	      // argument=0A=
	      arg =3D str.slice(begin, i).trim()=0A=
	      // test for valid argument here=0A=
	      // since we may have caught stuff like first half of=0A=
	      // an object literal or a ternary expression.=0A=
	      if (argRE.test(arg)) {=0A=
	        argIndex =3D i + 1=0A=
	        dir.arg =3D _.stripQuotes(arg) || arg=0A=
	      }=0A=
	    } else if (=0A=
	      c =3D=3D=3D 0x7C &amp;&amp; // pipe=0A=
	      str.charCodeAt(i + 1) !=3D=3D 0x7C &amp;&amp;=0A=
	      str.charCodeAt(i - 1) !=3D=3D 0x7C=0A=
	    ) {=0A=
	      if (dir.expression =3D=3D=3D undefined) {=0A=
	        // first filter, end of expression=0A=
	        lastFilterIndex =3D i + 1=0A=
	        dir.expression =3D str.slice(argIndex, i).trim()=0A=
	      } else {=0A=
	        // already has filter=0A=
	        pushFilter()=0A=
	      }=0A=
	    } else {=0A=
	      switch (c) {=0A=
	        case 0x22: inDouble =3D true; break // "=0A=
	        case 0x27: inSingle =3D true; break // '=0A=
	        case 0x28: paren++; break         // (=0A=
	        case 0x29: paren--; break         // )=0A=
	        case 0x5B: square++; break        // [=0A=
	        case 0x5D: square--; break        // ]=0A=
	        case 0x7B: curly++; break         // {=0A=
	        case 0x7D: curly--; break         // }=0A=
	      }=0A=
	    }=0A=
	  }=0A=
=0A=
	  if (i =3D=3D=3D 0 || begin !=3D=3D i) {=0A=
	    pushDir()=0A=
	  }=0A=
=0A=
	  cache.put(s, dirs)=0A=
	  return dirs=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 16 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	// NOTE: the prop internal directive is compiled and linked=0A=
	// during _initScope(), before the created hook is called.=0A=
	// The purpose is to make the initial prop values available=0A=
	// inside `created` hooks and `data` functions.=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Watcher =3D __webpack_require__(17)=0A=
	var bindingModes =3D __webpack_require__(5)._propBindingModes=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
=0A=
	    var child =3D this.vm=0A=
	    var parent =3D child._context=0A=
	    // passed in from compiler directly=0A=
	    var prop =3D this._descriptor=0A=
	    var childKey =3D prop.path=0A=
	    var parentKey =3D prop.parentPath=0A=
=0A=
	    this.parentWatcher =3D new Watcher(=0A=
	      parent,=0A=
	      parentKey,=0A=
	      function (val) {=0A=
	        if (_.assertProp(prop, val)) {=0A=
	          child[childKey] =3D val=0A=
	        }=0A=
	      }, { sync: true }=0A=
	    )=0A=
=0A=
	    // set the child initial value.=0A=
	    var value =3D this.parentWatcher.value=0A=
	    if (childKey =3D=3D=3D '$data') {=0A=
	      child._data =3D value=0A=
	    } else {=0A=
	      _.initProp(child, prop, value)=0A=
	    }=0A=
=0A=
	    // setup two-way binding=0A=
	    if (prop.mode =3D=3D=3D bindingModes.TWO_WAY) {=0A=
	      // important: defer the child watcher creation until=0A=
	      // the created hook (after data observation)=0A=
	      var self =3D this=0A=
	      child.$once('hook:created', function () {=0A=
	        self.childWatcher =3D new Watcher(=0A=
	          child,=0A=
	          childKey,=0A=
	          function (val) {=0A=
	            parent.$set(parentKey, val)=0A=
	          }, { sync: true }=0A=
	        )=0A=
	      })=0A=
	    }=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    this.parentWatcher.teardown()=0A=
	    if (this.childWatcher) {=0A=
	      this.childWatcher.teardown()=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 17 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var Dep =3D __webpack_require__(18)=0A=
	var expParser =3D __webpack_require__(19)=0A=
	var batcher =3D __webpack_require__(21)=0A=
	var uid =3D 0=0A=
=0A=
	/**=0A=
	 * A watcher parses an expression, collects dependencies,=0A=
	 * and fires callback when the expression value changes.=0A=
	 * This is used for both the $watch() api and directives.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {String} expression=0A=
	 * @param {Function} cb=0A=
	 * @param {Object} options=0A=
	 *                 - {Array} filters=0A=
	 *                 - {Boolean} twoWay=0A=
	 *                 - {Boolean} deep=0A=
	 *                 - {Boolean} user=0A=
	 *                 - {Boolean} sync=0A=
	 *                 - {Boolean} lazy=0A=
	 *                 - {Function} [preProcess]=0A=
	 * @constructor=0A=
	 */=0A=
=0A=
	function Watcher (vm, expOrFn, cb, options) {=0A=
	  // mix in options=0A=
	  if (options) {=0A=
	    _.extend(this, options)=0A=
	  }=0A=
	  var isFn =3D typeof expOrFn =3D=3D=3D 'function'=0A=
	  this.vm =3D vm=0A=
	  vm._watchers.push(this)=0A=
	  this.expression =3D isFn ? expOrFn.toString() : expOrFn=0A=
	  this.cb =3D cb=0A=
	  this.id =3D ++uid // uid for batching=0A=
	  this.active =3D true=0A=
	  this.dirty =3D this.lazy // for lazy watchers=0A=
	  this.deps =3D Object.create(null)=0A=
	  this.newDeps =3D null=0A=
	  this.prevError =3D null // for async error stacks=0A=
	  // parse expression for getter/setter=0A=
	  if (isFn) {=0A=
	    this.getter =3D expOrFn=0A=
	    this.setter =3D undefined=0A=
	  } else {=0A=
	    var res =3D expParser.parse(expOrFn, this.twoWay)=0A=
	    this.getter =3D res.get=0A=
	    this.setter =3D res.set=0A=
	  }=0A=
	  this.value =3D this.lazy=0A=
	    ? undefined=0A=
	    : this.get()=0A=
	  // state for avoiding false triggers for deep and Array=0A=
	  // watchers during vm._digest()=0A=
	  this.queued =3D this.shallow =3D false=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add a dependency to this directive.=0A=
	 *=0A=
	 * @param {Dep} dep=0A=
	 */=0A=
=0A=
	Watcher.prototype.addDep =3D function (dep) {=0A=
	  var id =3D dep.id=0A=
	  if (!this.newDeps[id]) {=0A=
	    this.newDeps[id] =3D dep=0A=
	    if (!this.deps[id]) {=0A=
	      this.deps[id] =3D dep=0A=
	      dep.addSub(this)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Evaluate the getter, and re-collect dependencies.=0A=
	 */=0A=
=0A=
	Watcher.prototype.get =3D function () {=0A=
	  this.beforeGet()=0A=
	  var vm =3D this.vm=0A=
	  var value=0A=
	  try {=0A=
	    value =3D this.getter.call(vm, vm)=0A=
	  } catch (e) {=0A=
	    if (=0A=
	      ("development") !=3D=3D 'production' &amp;&amp;=0A=
	      config.warnExpressionErrors=0A=
	    ) {=0A=
	      _.warn(=0A=
	        'Error when evaluating expression "' +=0A=
	        this.expression + '". ' +=0A=
	        (config.debug=0A=
	          ? ''=0A=
	          : 'Turn on debug mode to see stack trace.'=0A=
	        ), e=0A=
	      )=0A=
	    }=0A=
	  }=0A=
	  // "touch" every property so they are all tracked as=0A=
	  // dependencies for deep watching=0A=
	  if (this.deep) {=0A=
	    traverse(value)=0A=
	  }=0A=
	  if (this.preProcess) {=0A=
	    value =3D this.preProcess(value)=0A=
	  }=0A=
	  if (this.filters) {=0A=
	    value =3D vm._applyFilters(value, null, this.filters, false)=0A=
	  }=0A=
	  this.afterGet()=0A=
	  return value=0A=
	}=0A=
=0A=
	/**=0A=
	 * Set the corresponding value with the setter.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 */=0A=
=0A=
	Watcher.prototype.set =3D function (value) {=0A=
	  var vm =3D this.vm=0A=
	  if (this.filters) {=0A=
	    value =3D vm._applyFilters(=0A=
	      value, this.value, this.filters, true)=0A=
	  }=0A=
	  try {=0A=
	    this.setter.call(vm, vm, value)=0A=
	  } catch (e) {=0A=
	    if (=0A=
	      ("development") !=3D=3D 'production' &amp;&amp;=0A=
	      config.warnExpressionErrors=0A=
	    ) {=0A=
	      _.warn(=0A=
	        'Error when evaluating setter "' +=0A=
	        this.expression + '"', e=0A=
	      )=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Prepare for dependency collection.=0A=
	 */=0A=
=0A=
	Watcher.prototype.beforeGet =3D function () {=0A=
	  Dep.target =3D this=0A=
	  this.newDeps =3D Object.create(null)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Clean up for dependency collection.=0A=
	 */=0A=
=0A=
	Watcher.prototype.afterGet =3D function () {=0A=
	  Dep.target =3D null=0A=
	  var ids =3D Object.keys(this.deps)=0A=
	  var i =3D ids.length=0A=
	  while (i--) {=0A=
	    var id =3D ids[i]=0A=
	    if (!this.newDeps[id]) {=0A=
	      this.deps[id].removeSub(this)=0A=
	    }=0A=
	  }=0A=
	  this.deps =3D this.newDeps=0A=
	}=0A=
=0A=
	/**=0A=
	 * Subscriber interface.=0A=
	 * Will be called when a dependency changes.=0A=
	 *=0A=
	 * @param {Boolean} shallow=0A=
	 */=0A=
=0A=
	Watcher.prototype.update =3D function (shallow) {=0A=
	  if (this.lazy) {=0A=
	    this.dirty =3D true=0A=
	  } else if (this.sync || !config.async) {=0A=
	    this.run()=0A=
	  } else {=0A=
	    // if queued, only overwrite shallow with non-shallow,=0A=
	    // but not the other way around.=0A=
	    this.shallow =3D this.queued=0A=
	      ? shallow=0A=
	        ? this.shallow=0A=
	        : false=0A=
	      : !!shallow=0A=
	    this.queued =3D true=0A=
	    // record before-push error stack in debug mode=0A=
	    /* istanbul ignore if */=0A=
	    if (("development") !=3D=3D 'production' &amp;&amp; config.debug) {=0A=
	      this.prevError =3D new Error('[vue] async stack trace')=0A=
	    }=0A=
	    batcher.push(this)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Batcher job interface.=0A=
	 * Will be called by the batcher.=0A=
	 */=0A=
=0A=
	Watcher.prototype.run =3D function () {=0A=
	  if (this.active) {=0A=
	    var value =3D this.get()=0A=
	    if (=0A=
	      value !=3D=3D this.value ||=0A=
	      // Deep watchers and Array watchers should fire even=0A=
	      // when the value is the same, because the value may=0A=
	      // have mutated; but only do so if this is a=0A=
	      // non-shallow update (caused by a vm digest).=0A=
	      ((_.isArray(value) || this.deep) &amp;&amp; !this.shallow)=0A=
	    ) {=0A=
	      // set new value=0A=
	      var oldValue =3D this.value=0A=
	      this.value =3D value=0A=
	      // in debug + async mode, when a watcher callbacks=0A=
	      // throws, we also throw the saved before-push error=0A=
	      // so the full cross-tick stack trace is available.=0A=
	      var prevError =3D this.prevError=0A=
	      /* istanbul ignore if */=0A=
	      if (("development") !=3D=3D 'production' &amp;&amp;=0A=
	          config.debug &amp;&amp; prevError) {=0A=
	        this.prevError =3D null=0A=
	        try {=0A=
	          this.cb.call(this.vm, value, oldValue)=0A=
	        } catch (e) {=0A=
	          _.nextTick(function () {=0A=
	            throw prevError=0A=
	          }, 0)=0A=
	          throw e=0A=
	        }=0A=
	      } else {=0A=
	        this.cb.call(this.vm, value, oldValue)=0A=
	      }=0A=
	    }=0A=
	    this.queued =3D this.shallow =3D false=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Evaluate the value of the watcher.=0A=
	 * This only gets called for lazy watchers.=0A=
	 */=0A=
=0A=
	Watcher.prototype.evaluate =3D function () {=0A=
	  // avoid overwriting another watcher that is being=0A=
	  // collected.=0A=
	  var current =3D Dep.target=0A=
	  this.value =3D this.get()=0A=
	  this.dirty =3D false=0A=
	  Dep.target =3D current=0A=
	}=0A=
=0A=
	/**=0A=
	 * Depend on all deps collected by this watcher.=0A=
	 */=0A=
=0A=
	Watcher.prototype.depend =3D function () {=0A=
	  var depIds =3D Object.keys(this.deps)=0A=
	  var i =3D depIds.length=0A=
	  while (i--) {=0A=
	    this.deps[depIds[i]].depend()=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove self from all dependencies' subcriber list.=0A=
	 */=0A=
=0A=
	Watcher.prototype.teardown =3D function () {=0A=
	  if (this.active) {=0A=
	    // remove self from vm's watcher list=0A=
	    // we can skip this if the vm if being destroyed=0A=
	    // which can improve teardown performance.=0A=
	    if (!this.vm._isBeingDestroyed) {=0A=
	      this.vm._watchers.$remove(this)=0A=
	    }=0A=
	    var depIds =3D Object.keys(this.deps)=0A=
	    var i =3D depIds.length=0A=
	    while (i--) {=0A=
	      this.deps[depIds[i]].removeSub(this)=0A=
	    }=0A=
	    this.active =3D false=0A=
	    this.vm =3D this.cb =3D this.value =3D null=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Recrusively traverse an object to evoke all converted=0A=
	 * getters, so that every nested property inside the object=0A=
	 * is collected as a "deep" dependency.=0A=
	 *=0A=
	 * @param {Object} obj=0A=
	 */=0A=
=0A=
	function traverse (obj) {=0A=
	  var key, val, i=0A=
	  for (key in obj) {=0A=
	    val =3D obj[key]=0A=
	    if (_.isArray(val)) {=0A=
	      i =3D val.length=0A=
	      while (i--) traverse(val[i])=0A=
	    } else if (_.isObject(val)) {=0A=
	      traverse(val)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	module.exports =3D Watcher=0A=
=0A=
=0A=
/***/ },=0A=
/* 18 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var uid =3D 0=0A=
=0A=
	/**=0A=
	 * A dep is an observable that can have multiple=0A=
	 * directives subscribing to it.=0A=
	 *=0A=
	 * @constructor=0A=
	 */=0A=
=0A=
	function Dep () {=0A=
	  this.id =3D uid++=0A=
	  this.subs =3D []=0A=
	}=0A=
=0A=
	// the current target watcher being evaluated.=0A=
	// this is globally unique because there could be only one=0A=
	// watcher being evaluated at any time.=0A=
	Dep.target =3D null=0A=
=0A=
	/**=0A=
	 * Add a directive subscriber.=0A=
	 *=0A=
	 * @param {Directive} sub=0A=
	 */=0A=
=0A=
	Dep.prototype.addSub =3D function (sub) {=0A=
	  this.subs.push(sub)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove a directive subscriber.=0A=
	 *=0A=
	 * @param {Directive} sub=0A=
	 */=0A=
=0A=
	Dep.prototype.removeSub =3D function (sub) {=0A=
	  this.subs.$remove(sub)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add self as a dependency to the target watcher.=0A=
	 */=0A=
=0A=
	Dep.prototype.depend =3D function () {=0A=
	  Dep.target.addDep(this)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Notify all subscribers of a new value.=0A=
	 */=0A=
=0A=
	Dep.prototype.notify =3D function () {=0A=
	  // stablize the subscriber list first=0A=
	  var subs =3D _.toArray(this.subs)=0A=
	  for (var i =3D 0, l =3D subs.length; i &lt; l; i++) {=0A=
	    subs[i].update()=0A=
	  }=0A=
	}=0A=
=0A=
	module.exports =3D Dep=0A=
=0A=
=0A=
/***/ },=0A=
/* 19 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Path =3D __webpack_require__(20)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var expressionCache =3D new Cache(1000)=0A=
=0A=
	var allowedKeywords =3D=0A=
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +=0A=
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +=0A=
	  'encodeURIComponent,parseInt,parseFloat'=0A=
	var allowedKeywordsRE =3D=0A=
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')=0A=
=0A=
	// keywords that don't make sense inside expressions=0A=
	var improperKeywords =3D=0A=
	  'break,case,class,catch,const,continue,debugger,default,' +=0A=
	  'delete,do,else,export,extends,finally,for,function,if,' +=0A=
	  'import,in,instanceof,let,return,super,switch,throw,try,' +=0A=
	  'var,while,with,yield,enum,await,implements,package,' +=0A=
	  'proctected,static,interface,private,public'=0A=
	var improperKeywordsRE =3D=0A=
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')=0A=
=0A=
	var wsRE =3D /\s/g=0A=
	var newlineRE =3D /\n/g=0A=
	var saveRE =3D /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof =
|void /g=0A=
	var restoreRE =3D /"(\d+)"/g=0A=
	var pathTestRE =3D =
/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za=
-z_$][\w$]*\])*$/=0A=
	var pathReplaceRE =3D =
/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g=0A=
	var booleanLiteralRE =3D /^(true|false)$/=0A=
=0A=
	/**=0A=
	 * Save / Rewrite / Restore=0A=
	 *=0A=
	 * When rewriting paths found in an expression, it is=0A=
	 * possible for the same letter sequences to be found in=0A=
	 * strings and Object literal property keys. Therefore we=0A=
	 * remove and store these parts in a temporary array, and=0A=
	 * restore them after the path rewrite.=0A=
	 */=0A=
=0A=
	var saved =3D []=0A=
=0A=
	/**=0A=
	 * Save replacer=0A=
	 *=0A=
	 * The save regex can match two possible cases:=0A=
	 * 1. An opening object literal=0A=
	 * 2. A string=0A=
	 * If matched as a plain string, we need to escape its=0A=
	 * newlines, since the string needs to be preserved when=0A=
	 * generating the function body.=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @param {String} isString - str if matched as a string=0A=
	 * @return {String} - placeholder with index=0A=
	 */=0A=
=0A=
	function save (str, isString) {=0A=
	  var i =3D saved.length=0A=
	  saved[i] =3D isString=0A=
	    ? str.replace(newlineRE, '\\n')=0A=
	    : str=0A=
	  return '"' + i + '"'=0A=
	}=0A=
=0A=
	/**=0A=
	 * Path rewrite replacer=0A=
	 *=0A=
	 * @param {String} raw=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	function rewrite (raw) {=0A=
	  var c =3D raw.charAt(0)=0A=
	  var path =3D raw.slice(1)=0A=
	  if (allowedKeywordsRE.test(path)) {=0A=
	    return raw=0A=
	  } else {=0A=
	    path =3D path.indexOf('"') &gt; -1=0A=
	      ? path.replace(restoreRE, restore)=0A=
	      : path=0A=
	    return c + 'scope.' + path=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Restore replacer=0A=
	 *=0A=
	 * @param {String} str=0A=
	 * @param {String} i - matched save index=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	function restore (str, i) {=0A=
	  return saved[i]=0A=
	}=0A=
=0A=
	/**=0A=
	 * Rewrite an expression, prefixing all path accessors with=0A=
	 * `scope.` and generate getter/setter functions.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @param {Boolean} needSet=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	function compileExpFns (exp, needSet) {=0A=
	  if (improperKeywordsRE.test(exp)) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Avoid using reserved keywords in expression: ' + exp=0A=
	    )=0A=
	  }=0A=
	  // reset state=0A=
	  saved.length =3D 0=0A=
	  // save strings and object literal keys=0A=
	  var body =3D exp=0A=
	    .replace(saveRE, save)=0A=
	    .replace(wsRE, '')=0A=
	  // rewrite all paths=0A=
	  // pad 1 space here becaue the regex matches 1 extra char=0A=
	  body =3D (' ' + body)=0A=
	    .replace(pathReplaceRE, rewrite)=0A=
	    .replace(restoreRE, restore)=0A=
	  var getter =3D makeGetter(body)=0A=
	  if (getter) {=0A=
	    return {=0A=
	      get: getter,=0A=
	      body: body,=0A=
	      set: needSet=0A=
	        ? makeSetter(body)=0A=
	        : null=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compile getter setters for a simple path.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	function compilePathFns (exp) {=0A=
	  var getter, path=0A=
	  if (exp.indexOf('[') &lt; 0) {=0A=
	    // really simple path=0A=
	    path =3D exp.split('.')=0A=
	    path.raw =3D exp=0A=
	    getter =3D Path.compileGetter(path)=0A=
	  } else {=0A=
	    // do the real parsing=0A=
	    path =3D Path.parse(exp)=0A=
	    getter =3D path.get=0A=
	  }=0A=
	  return {=0A=
	    get: getter,=0A=
	    // always generate setter for simple paths=0A=
	    set: function (obj, val) {=0A=
	      Path.set(obj, path, val)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build a getter function. Requires eval.=0A=
	 *=0A=
	 * We isolate the try/catch so it doesn't affect the=0A=
	 * optimization of the parse function when it is not called.=0A=
	 *=0A=
	 * @param {String} body=0A=
	 * @return {Function|undefined}=0A=
	 */=0A=
=0A=
	function makeGetter (body) {=0A=
	  try {=0A=
	    return new Function('scope', 'return ' + body + ';')=0A=
	  } catch (e) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Invalid expression. ' +=0A=
	      'Generated function body: ' + body=0A=
	    )=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build a setter function.=0A=
	 *=0A=
	 * This is only needed in rare situations like "a[b]" where=0A=
	 * a settable path requires dynamic evaluation.=0A=
	 *=0A=
	 * This setter function may throw error when called if the=0A=
	 * expression body is not a valid left-hand expression in=0A=
	 * assignment.=0A=
	 *=0A=
	 * @param {String} body=0A=
	 * @return {Function|undefined}=0A=
	 */=0A=
=0A=
	function makeSetter (body) {=0A=
	  try {=0A=
	    return new Function('scope', 'value', body + '=3Dvalue;')=0A=
	  } catch (e) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Invalid setter function body: ' + body=0A=
	    )=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check for setter existence on a cache hit.=0A=
	 *=0A=
	 * @param {Function} hit=0A=
	 */=0A=
=0A=
	function checkSetter (hit) {=0A=
	  if (!hit.set) {=0A=
	    hit.set =3D makeSetter(hit.body)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Parse an expression into re-written getter/setters.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @param {Boolean} needSet=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.parse =3D function (exp, needSet) {=0A=
	  exp =3D exp.trim()=0A=
	  // try cache=0A=
	  var hit =3D expressionCache.get(exp)=0A=
	  if (hit) {=0A=
	    if (needSet) {=0A=
	      checkSetter(hit)=0A=
	    }=0A=
	    return hit=0A=
	  }=0A=
	  // we do a simple path check to optimize for them.=0A=
	  // the check fails valid paths with unusal whitespaces,=0A=
	  // but that's too rare and we don't care.=0A=
	  // also skip boolean literals and paths that start with=0A=
	  // global "Math"=0A=
	  var res =3D exports.isSimplePath(exp)=0A=
	    ? compilePathFns(exp)=0A=
	    : compileExpFns(exp, needSet)=0A=
	  expressionCache.put(exp, res)=0A=
	  return res=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if an expression is a simple path.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	exports.isSimplePath =3D function (exp) {=0A=
	  return pathTestRE.test(exp) &amp;&amp;=0A=
	    // don't treat true/false as paths=0A=
	    !booleanLiteralRE.test(exp) &amp;&amp;=0A=
	    // Math constants e.g. Math.PI, Math.E etc.=0A=
	    exp.slice(0, 5) !=3D=3D 'Math.'=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 20 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var pathCache =3D new Cache(1000)=0A=
	var identRE =3D exports.identRE =3D /^[$_a-zA-Z]+[\w$]*$/=0A=
=0A=
	// actions=0A=
	var APPEND =3D 0=0A=
	var PUSH =3D 1=0A=
=0A=
	// states=0A=
	var BEFORE_PATH =3D 0=0A=
	var IN_PATH =3D 1=0A=
	var BEFORE_IDENT =3D 2=0A=
	var IN_IDENT =3D 3=0A=
	var BEFORE_ELEMENT =3D 4=0A=
	var AFTER_ZERO =3D 5=0A=
	var IN_INDEX =3D 6=0A=
	var IN_SINGLE_QUOTE =3D 7=0A=
	var IN_DOUBLE_QUOTE =3D 8=0A=
	var IN_SUB_PATH =3D 9=0A=
	var AFTER_ELEMENT =3D 10=0A=
	var AFTER_PATH =3D 11=0A=
	var ERROR =3D 12=0A=
=0A=
	var pathStateMachine =3D []=0A=
=0A=
	pathStateMachine[BEFORE_PATH] =3D {=0A=
	  'ws': [BEFORE_PATH],=0A=
	  'ident': [IN_IDENT, APPEND],=0A=
	  '[': [BEFORE_ELEMENT],=0A=
	  'eof': [AFTER_PATH]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_PATH] =3D {=0A=
	  'ws': [IN_PATH],=0A=
	  '.': [BEFORE_IDENT],=0A=
	  '[': [BEFORE_ELEMENT],=0A=
	  'eof': [AFTER_PATH]=0A=
	}=0A=
=0A=
	pathStateMachine[BEFORE_IDENT] =3D {=0A=
	  'ws': [BEFORE_IDENT],=0A=
	  'ident': [IN_IDENT, APPEND]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_IDENT] =3D {=0A=
	  'ident': [IN_IDENT, APPEND],=0A=
	  '0': [IN_IDENT, APPEND],=0A=
	  'number': [IN_IDENT, APPEND],=0A=
	  'ws': [IN_PATH, PUSH],=0A=
	  '.': [BEFORE_IDENT, PUSH],=0A=
	  '[': [BEFORE_ELEMENT, PUSH],=0A=
	  'eof': [AFTER_PATH, PUSH]=0A=
	}=0A=
=0A=
	pathStateMachine[BEFORE_ELEMENT] =3D {=0A=
	  'ws': [BEFORE_ELEMENT],=0A=
	  '0': [AFTER_ZERO, APPEND],=0A=
	  'number': [IN_INDEX, APPEND],=0A=
	  "'": [IN_SINGLE_QUOTE, APPEND, ''],=0A=
	  '"': [IN_DOUBLE_QUOTE, APPEND, ''],=0A=
	  'ident': [IN_SUB_PATH, APPEND, '*']=0A=
	}=0A=
=0A=
	pathStateMachine[AFTER_ZERO] =3D {=0A=
	  'ws': [AFTER_ELEMENT, PUSH],=0A=
	  ']': [IN_PATH, PUSH]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_INDEX] =3D {=0A=
	  '0': [IN_INDEX, APPEND],=0A=
	  'number': [IN_INDEX, APPEND],=0A=
	  'ws': [AFTER_ELEMENT],=0A=
	  ']': [IN_PATH, PUSH]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_SINGLE_QUOTE] =3D {=0A=
	  "'": [AFTER_ELEMENT],=0A=
	  'eof': ERROR,=0A=
	  'else': [IN_SINGLE_QUOTE, APPEND]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_DOUBLE_QUOTE] =3D {=0A=
	  '"': [AFTER_ELEMENT],=0A=
	  'eof': ERROR,=0A=
	  'else': [IN_DOUBLE_QUOTE, APPEND]=0A=
	}=0A=
=0A=
	pathStateMachine[IN_SUB_PATH] =3D {=0A=
	  'ident': [IN_SUB_PATH, APPEND],=0A=
	  '0': [IN_SUB_PATH, APPEND],=0A=
	  'number': [IN_SUB_PATH, APPEND],=0A=
	  'ws': [AFTER_ELEMENT],=0A=
	  ']': [IN_PATH, PUSH]=0A=
	}=0A=
=0A=
	pathStateMachine[AFTER_ELEMENT] =3D {=0A=
	  'ws': [AFTER_ELEMENT],=0A=
	  ']': [IN_PATH, PUSH]=0A=
	}=0A=
=0A=
	/**=0A=
	 * Determine the type of a character in a keypath.=0A=
	 *=0A=
	 * @param {Char} ch=0A=
	 * @return {String} type=0A=
	 */=0A=
=0A=
	function getPathCharType (ch) {=0A=
	  if (ch =3D=3D=3D undefined) {=0A=
	    return 'eof'=0A=
	  }=0A=
=0A=
	  var code =3D ch.charCodeAt(0)=0A=
=0A=
	  switch (code) {=0A=
	    case 0x5B: // [=0A=
	    case 0x5D: // ]=0A=
	    case 0x2E: // .=0A=
	    case 0x22: // "=0A=
	    case 0x27: // '=0A=
	    case 0x30: // 0=0A=
	      return ch=0A=
=0A=
	    case 0x5F: // _=0A=
	    case 0x24: // $=0A=
	      return 'ident'=0A=
=0A=
	    case 0x20: // Space=0A=
	    case 0x09: // Tab=0A=
	    case 0x0A: // Newline=0A=
	    case 0x0D: // Return=0A=
	    case 0xA0:  // No-break space=0A=
	    case 0xFEFF:  // Byte Order Mark=0A=
	    case 0x2028:  // Line Separator=0A=
	    case 0x2029:  // Paragraph Separator=0A=
	      return 'ws'=0A=
	  }=0A=
=0A=
	  // a-z, A-Z=0A=
	  if (=0A=
	    (code &gt;=3D 0x61 &amp;&amp; code &lt;=3D 0x7A) ||=0A=
	    (code &gt;=3D 0x41 &amp;&amp; code &lt;=3D 0x5A)=0A=
	  ) {=0A=
	    return 'ident'=0A=
	  }=0A=
=0A=
	  // 1-9=0A=
	  if (code &gt;=3D 0x31 &amp;&amp; code &lt;=3D 0x39) {=0A=
	    return 'number'=0A=
	  }=0A=
=0A=
	  return 'else'=0A=
	}=0A=
=0A=
	/**=0A=
	 * Parse a string path into an array of segments=0A=
	 * Todo implement cache=0A=
	 *=0A=
	 * @param {String} path=0A=
	 * @return {Array|undefined}=0A=
	 */=0A=
=0A=
	function parsePath (path) {=0A=
	  var keys =3D []=0A=
	  var index =3D -1=0A=
	  var mode =3D BEFORE_PATH=0A=
	  var c, newChar, key, type, transition, action, typeMap=0A=
=0A=
	  var actions =3D []=0A=
	  actions[PUSH] =3D function () {=0A=
	    if (key =3D=3D=3D undefined) {=0A=
	      return=0A=
	    }=0A=
	    keys.push(key)=0A=
	    key =3D undefined=0A=
	  }=0A=
	  actions[APPEND] =3D function () {=0A=
	    if (key =3D=3D=3D undefined) {=0A=
	      key =3D newChar=0A=
	    } else {=0A=
	      key +=3D newChar=0A=
	    }=0A=
	  }=0A=
=0A=
	  function maybeUnescapeQuote () {=0A=
	    var nextChar =3D path[index + 1]=0A=
	    if ((mode =3D=3D=3D IN_SINGLE_QUOTE &amp;&amp; nextChar =3D=3D=3D =
"'") ||=0A=
	        (mode =3D=3D=3D IN_DOUBLE_QUOTE &amp;&amp; nextChar =3D=3D=3D =
'"')) {=0A=
	      index++=0A=
	      newChar =3D nextChar=0A=
	      actions[APPEND]()=0A=
	      return true=0A=
	    }=0A=
	  }=0A=
=0A=
	  while (mode !=3D null) {=0A=
	    index++=0A=
	    c =3D path[index]=0A=
=0A=
	    if (c =3D=3D=3D '\\' &amp;&amp; maybeUnescapeQuote()) {=0A=
	      continue=0A=
	    }=0A=
=0A=
	    type =3D getPathCharType(c)=0A=
	    typeMap =3D pathStateMachine[mode]=0A=
	    transition =3D typeMap[type] || typeMap['else'] || ERROR=0A=
=0A=
	    if (transition =3D=3D=3D ERROR) {=0A=
	      return // parse error=0A=
	    }=0A=
=0A=
	    mode =3D transition[0]=0A=
	    action =3D actions[transition[1]]=0A=
	    if (action) {=0A=
	      newChar =3D transition[2]=0A=
	      newChar =3D newChar =3D=3D=3D undefined=0A=
	        ? c=0A=
	        : newChar =3D=3D=3D '*'=0A=
	          ? newChar + c=0A=
	          : newChar=0A=
	      action()=0A=
	    }=0A=
=0A=
	    if (mode =3D=3D=3D AFTER_PATH) {=0A=
	      keys.raw =3D path=0A=
	      return keys=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Format a accessor segment based on its type.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	function formatAccessor (key) {=0A=
	  if (identRE.test(key)) { // identifier=0A=
	    return '.' + key=0A=
	  } else if (+key =3D=3D=3D key &gt;&gt;&gt; 0) { // bracket index=0A=
	    return '[' + key + ']'=0A=
	  } else if (key.charAt(0) =3D=3D=3D '*') {=0A=
	    return '[o' + formatAccessor(key.slice(1)) + ']'=0A=
	  } else { // bracket string=0A=
	    return '["' + key.replace(/"/g, '\\"') + '"]'=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Compiles a getter function with a fixed path.=0A=
	 * The fixed path getter supresses errors.=0A=
	 *=0A=
	 * @param {Array} path=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.compileGetter =3D function (path) {=0A=
	  var body =3D 'return o' + path.map(formatAccessor).join('')=0A=
	  return new Function('o', body)=0A=
	}=0A=
=0A=
	/**=0A=
	 * External parse that check for a cache hit first=0A=
	 *=0A=
	 * @param {String} path=0A=
	 * @return {Array|undefined}=0A=
	 */=0A=
=0A=
	exports.parse =3D function (path) {=0A=
	  var hit =3D pathCache.get(path)=0A=
	  if (!hit) {=0A=
	    hit =3D parsePath(path)=0A=
	    if (hit) {=0A=
	      hit.get =3D exports.compileGetter(hit)=0A=
	      pathCache.put(path, hit)=0A=
	    }=0A=
	  }=0A=
	  return hit=0A=
	}=0A=
=0A=
	/**=0A=
	 * Get from an object from a path string=0A=
	 *=0A=
	 * @param {Object} obj=0A=
	 * @param {String} path=0A=
	 */=0A=
=0A=
	exports.get =3D function (obj, path) {=0A=
	  path =3D exports.parse(path)=0A=
	  if (path) {=0A=
	    return path.get(obj)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Set on an object from a path=0A=
	 *=0A=
	 * @param {Object} obj=0A=
	 * @param {String | Array} path=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	exports.set =3D function (obj, path, val) {=0A=
	  var original =3D obj=0A=
	  if (typeof path =3D=3D=3D 'string') {=0A=
	    path =3D exports.parse(path)=0A=
	  }=0A=
	  if (!path || !_.isObject(obj)) {=0A=
	    return false=0A=
	  }=0A=
	  var last, key=0A=
	  for (var i =3D 0, l =3D path.length; i &lt; l; i++) {=0A=
	    last =3D obj=0A=
	    key =3D path[i]=0A=
	    if (key.charAt(0) =3D=3D=3D '*') {=0A=
	      key =3D original[key.slice(1)]=0A=
	    }=0A=
	    if (i &lt; l - 1) {=0A=
	      obj =3D obj[key]=0A=
	      if (!_.isObject(obj)) {=0A=
	        warnNonExistent(path)=0A=
	        obj =3D {}=0A=
	        last.$add(key, obj)=0A=
	      }=0A=
	    } else {=0A=
	      if (_.isArray(obj)) {=0A=
	        obj.$set(key, val)=0A=
	      } else if (key in obj) {=0A=
	        obj[key] =3D val=0A=
	      } else {=0A=
	        warnNonExistent(path)=0A=
	        obj.$add(key, val)=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  return true=0A=
	}=0A=
=0A=
	function warnNonExistent (path) {=0A=
	  ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	    'You are setting a non-existent path "' + path.raw + '" ' +=0A=
	    'on a vm instance. Consider pre-initializing the property ' +=0A=
	    'with the "data" option for more reliable reactivity ' +=0A=
	    'and better performance.'=0A=
	  )=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 21 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
=0A=
	// we have two separate queues: one for directive updates=0A=
	// and one for user watcher registered via $watch().=0A=
	// we want to guarantee directive updates to be called=0A=
	// before user watchers so that when user watchers are=0A=
	// triggered, the DOM would have already been in updated=0A=
	// state.=0A=
	var queue =3D []=0A=
	var userQueue =3D []=0A=
	var has =3D {}=0A=
	var circular =3D {}=0A=
	var waiting =3D false=0A=
	var internalQueueDepleted =3D false=0A=
=0A=
	/**=0A=
	 * Reset the batcher's state.=0A=
	 */=0A=
=0A=
	function resetBatcherState () {=0A=
	  queue =3D []=0A=
	  userQueue =3D []=0A=
	  has =3D {}=0A=
	  circular =3D {}=0A=
	  waiting =3D internalQueueDepleted =3D false=0A=
	}=0A=
=0A=
	/**=0A=
	 * Flush both queues and run the watchers.=0A=
	 */=0A=
=0A=
	function flushBatcherQueue () {=0A=
	  runBatcherQueue(queue)=0A=
	  internalQueueDepleted =3D true=0A=
	  runBatcherQueue(userQueue)=0A=
	  resetBatcherState()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Run the watchers in a single queue.=0A=
	 *=0A=
	 * @param {Array} queue=0A=
	 */=0A=
=0A=
	function runBatcherQueue (queue) {=0A=
	  // do not cache length because more watchers might be pushed=0A=
	  // as we run existing watchers=0A=
	  for (var i =3D 0; i &lt; queue.length; i++) {=0A=
	    var watcher =3D queue[i]=0A=
	    var id =3D watcher.id=0A=
	    has[id] =3D null=0A=
	    watcher.run()=0A=
	    // in dev build, check and stop circular updates.=0A=
	    if (("development") !=3D=3D 'production' &amp;&amp; has[id] !=3D =
null) {=0A=
	      circular[id] =3D (circular[id] || 0) + 1=0A=
	      if (circular[id] &gt; config._maxUpdateCount) {=0A=
	        queue.splice(has[id], 1)=0A=
	        _.warn(=0A=
	          'You may have an infinite update loop for watcher ' +=0A=
	          'with expression: ' + watcher.expression=0A=
	        )=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Push a watcher into the watcher queue.=0A=
	 * Jobs with duplicate IDs will be skipped unless it's=0A=
	 * pushed when the queue is being flushed.=0A=
	 *=0A=
	 * @param {Watcher} watcher=0A=
	 *   properties:=0A=
	 *   - {Number} id=0A=
	 *   - {Function} run=0A=
	 */=0A=
=0A=
	exports.push =3D function (watcher) {=0A=
	  var id =3D watcher.id=0A=
	  if (has[id] =3D=3D null) {=0A=
	    // if an internal watcher is pushed, but the internal=0A=
	    // queue is already depleted, we run it immediately.=0A=
	    if (internalQueueDepleted &amp;&amp; !watcher.user) {=0A=
	      watcher.run()=0A=
	      return=0A=
	    }=0A=
	    // push watcher into appropriate queue=0A=
	    var q =3D watcher.user ? userQueue : queue=0A=
	    has[id] =3D q.length=0A=
	    q.push(watcher)=0A=
	    // queue the flush=0A=
	    if (!waiting) {=0A=
	      waiting =3D true=0A=
	      _.nextTick(flushBatcherQueue)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 22 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var templateCache =3D new Cache(1000)=0A=
	var idSelectorCache =3D new Cache(1000)=0A=
=0A=
	var map =3D {=0A=
	  _default: [0, '', ''],=0A=
	  legend: [1, '&lt;fieldset&gt;', '&lt;/fieldset&gt;'],=0A=
	  tr: [2, '&lt;table&gt;&lt;tbody&gt;', '&lt;/tbody&gt;&lt;/table&gt;'],=0A=
	  col: [=0A=
	    2,=0A=
	    '&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;',=0A=
	    '&lt;/colgroup&gt;&lt;/table&gt;'=0A=
	  ]=0A=
	}=0A=
=0A=
	map.td =3D=0A=
	map.th =3D [=0A=
	  3,=0A=
	  '&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;',=0A=
	  '&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;'=0A=
	]=0A=
=0A=
	map.option =3D=0A=
	map.optgroup =3D [=0A=
	  1,=0A=
	  '&lt;select multiple=3D"multiple"&gt;',=0A=
	  '&lt;/select&gt;'=0A=
	]=0A=
=0A=
	map.thead =3D=0A=
	map.tbody =3D=0A=
	map.colgroup =3D=0A=
	map.caption =3D=0A=
	map.tfoot =3D [1, '&lt;table&gt;', '&lt;/table&gt;']=0A=
=0A=
	map.g =3D=0A=
	map.defs =3D=0A=
	map.symbol =3D=0A=
	map.use =3D=0A=
	map.image =3D=0A=
	map.text =3D=0A=
	map.circle =3D=0A=
	map.ellipse =3D=0A=
	map.line =3D=0A=
	map.path =3D=0A=
	map.polygon =3D=0A=
	map.polyline =3D=0A=
	map.rect =3D [=0A=
	  1,=0A=
	  '&lt;svg ' +=0A=
	    'xmlns=3D"http://www.w3.org/2000/svg" ' +=0A=
	    'xmlns:xlink=3D"http://www.w3.org/1999/xlink" ' +=0A=
	    'xmlns:ev=3D"http://www.w3.org/2001/xml-events"' +=0A=
	    'version=3D"1.1"&gt;',=0A=
	  '&lt;/svg&gt;'=0A=
	]=0A=
=0A=
	/**=0A=
	 * Check if a node is a supported template node with a=0A=
	 * DocumentFragment content.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	function isRealTemplate (node) {=0A=
	  return _.isTemplate(node) &amp;&amp;=0A=
	    node.content instanceof DocumentFragment=0A=
	}=0A=
=0A=
	var tagRE =3D /&lt;([\w:]+)/=0A=
	var entityRE =3D /&amp;\w+;|&amp;#\d+;|&amp;#x[\dA-F]+;/=0A=
=0A=
	/**=0A=
	 * Convert a string template to a DocumentFragment.=0A=
	 * Determines correct wrapping by tag types. Wrapping=0A=
	 * strategy found in jQuery &amp; component/domify.=0A=
	 *=0A=
	 * @param {String} templateString=0A=
	 * @return {DocumentFragment}=0A=
	 */=0A=
=0A=
	function stringToFragment (templateString) {=0A=
	  // try a cache hit first=0A=
	  var hit =3D templateCache.get(templateString)=0A=
	  if (hit) {=0A=
	    return hit=0A=
	  }=0A=
=0A=
	  var frag =3D document.createDocumentFragment()=0A=
	  var tagMatch =3D templateString.match(tagRE)=0A=
	  var entityMatch =3D entityRE.test(templateString)=0A=
=0A=
	  if (!tagMatch &amp;&amp; !entityMatch) {=0A=
	    // text only, return a single text node.=0A=
	    frag.appendChild(=0A=
	      document.createTextNode(templateString)=0A=
	    )=0A=
	  } else {=0A=
=0A=
	    var tag =3D tagMatch &amp;&amp; tagMatch[1]=0A=
	    var wrap =3D map[tag] || map._default=0A=
	    var depth =3D wrap[0]=0A=
	    var prefix =3D wrap[1]=0A=
	    var suffix =3D wrap[2]=0A=
	    var node =3D document.createElement('div')=0A=
=0A=
	    node.innerHTML =3D prefix + templateString.trim() + suffix=0A=
	    while (depth--) {=0A=
	      node =3D node.lastChild=0A=
	    }=0A=
=0A=
	    var child=0A=
	    /* eslint-disable no-cond-assign */=0A=
	    while (child =3D node.firstChild) {=0A=
	    /* eslint-enable no-cond-assign */=0A=
	      frag.appendChild(child)=0A=
	    }=0A=
	  }=0A=
=0A=
	  templateCache.put(templateString, frag)=0A=
	  return frag=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convert a template node to a DocumentFragment.=0A=
	 *=0A=
	 * @param {Node} node=0A=
	 * @return {DocumentFragment}=0A=
	 */=0A=
=0A=
	function nodeToFragment (node) {=0A=
	  // if its a template tag and the browser supports it,=0A=
	  // its content is already a document fragment.=0A=
	  if (isRealTemplate(node)) {=0A=
	    _.trimNode(node.content)=0A=
	    return node.content=0A=
	  }=0A=
	  // script template=0A=
	  if (node.tagName =3D=3D=3D 'SCRIPT') {=0A=
	    return stringToFragment(node.textContent)=0A=
	  }=0A=
	  // normal node, clone it to avoid mutating the original=0A=
	  var clone =3D exports.clone(node)=0A=
	  var frag =3D document.createDocumentFragment()=0A=
	  var child=0A=
	  /* eslint-disable no-cond-assign */=0A=
	  while (child =3D clone.firstChild) {=0A=
	  /* eslint-enable no-cond-assign */=0A=
	    frag.appendChild(child)=0A=
	  }=0A=
	  _.trimNode(frag)=0A=
	  return frag=0A=
	}=0A=
=0A=
	// Test for the presence of the Safari template cloning bug=0A=
	// https://bugs.webkit.org/show_bug.cgi?id=3D137755=0A=
	var hasBrokenTemplate =3D (function () {=0A=
	  /* istanbul ignore else */=0A=
	  if (_.inBrowser) {=0A=
	    var a =3D document.createElement('div')=0A=
	    a.innerHTML =3D '&lt;template&gt;1&lt;/template&gt;'=0A=
	    return !a.cloneNode(true).firstChild.innerHTML=0A=
	  } else {=0A=
	    return false=0A=
	  }=0A=
	})()=0A=
=0A=
	// Test for IE10/11 textarea placeholder clone bug=0A=
	var hasTextareaCloneBug =3D (function () {=0A=
	  /* istanbul ignore else */=0A=
	  if (_.inBrowser) {=0A=
	    var t =3D document.createElement('textarea')=0A=
	    t.placeholder =3D 't'=0A=
	    return t.cloneNode(true).value =3D=3D=3D 't'=0A=
	  } else {=0A=
	    return false=0A=
	  }=0A=
	})()=0A=
=0A=
	/**=0A=
	 * 1. Deal with Safari cloning nested &lt;template&gt; bug by=0A=
	 *    manually cloning all template instances.=0A=
	 * 2. Deal with IE10/11 textarea placeholder bug by setting=0A=
	 *    the correct value after cloning.=0A=
	 *=0A=
	 * @param {Element|DocumentFragment} node=0A=
	 * @return {Element|DocumentFragment}=0A=
	 */=0A=
=0A=
	exports.clone =3D function (node) {=0A=
	  if (!node.querySelectorAll) {=0A=
	    return node.cloneNode()=0A=
	  }=0A=
	  var res =3D node.cloneNode(true)=0A=
	  var i, original, cloned=0A=
	  /* istanbul ignore if */=0A=
	  if (hasBrokenTemplate) {=0A=
	    var clone =3D res=0A=
	    if (isRealTemplate(node)) {=0A=
	      node =3D node.content=0A=
	      clone =3D res.content=0A=
	    }=0A=
	    original =3D node.querySelectorAll('template')=0A=
	    if (original.length) {=0A=
	      cloned =3D clone.querySelectorAll('template')=0A=
	      i =3D cloned.length=0A=
	      while (i--) {=0A=
	        cloned[i].parentNode.replaceChild(=0A=
	          exports.clone(original[i]),=0A=
	          cloned[i]=0A=
	        )=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  /* istanbul ignore if */=0A=
	  if (hasTextareaCloneBug) {=0A=
	    if (node.tagName =3D=3D=3D 'TEXTAREA') {=0A=
	      res.value =3D node.value=0A=
	    } else {=0A=
	      original =3D node.querySelectorAll('textarea')=0A=
	      if (original.length) {=0A=
	        cloned =3D res.querySelectorAll('textarea')=0A=
	        i =3D cloned.length=0A=
	        while (i--) {=0A=
	          cloned[i].value =3D original[i].value=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  return res=0A=
	}=0A=
=0A=
	/**=0A=
	 * Process the template option and normalizes it into a=0A=
	 * a DocumentFragment that can be used as a partial or a=0A=
	 * instance template.=0A=
	 *=0A=
	 * @param {*} template=0A=
	 *    Possible values include:=0A=
	 *    - DocumentFragment object=0A=
	 *    - Node object of type Template=0A=
	 *    - id selector: '#some-template-id'=0A=
	 *    - template string: =
'&lt;div&gt;&lt;span&gt;{{msg}}&lt;/span&gt;&lt;/div&gt;'=0A=
	 * @param {Boolean} clone=0A=
	 * @param {Boolean} noSelector=0A=
	 * @return {DocumentFragment|undefined}=0A=
	 */=0A=
=0A=
	exports.parse =3D function (template, clone, noSelector) {=0A=
	  var node, frag=0A=
=0A=
	  // if the template is already a document fragment,=0A=
	  // do nothing=0A=
	  if (template instanceof DocumentFragment) {=0A=
	    _.trimNode(template)=0A=
	    return clone=0A=
	      ? exports.clone(template)=0A=
	      : template=0A=
	  }=0A=
=0A=
	  if (typeof template =3D=3D=3D 'string') {=0A=
	    // id selector=0A=
	    if (!noSelector &amp;&amp; template.charAt(0) =3D=3D=3D '#') {=0A=
	      // id selector can be cached too=0A=
	      frag =3D idSelectorCache.get(template)=0A=
	      if (!frag) {=0A=
	        node =3D document.getElementById(template.slice(1))=0A=
	        if (node) {=0A=
	          frag =3D nodeToFragment(node)=0A=
	          // save selector to cache=0A=
	          idSelectorCache.put(template, frag)=0A=
	        }=0A=
	      }=0A=
	    } else {=0A=
	      // normal string template=0A=
	      frag =3D stringToFragment(template)=0A=
	    }=0A=
	  } else if (template.nodeType) {=0A=
	    // a direct node=0A=
	    frag =3D nodeToFragment(template)=0A=
	  }=0A=
=0A=
	  return frag &amp;&amp; clone=0A=
	    ? exports.clone(frag)=0A=
	    : frag=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 23 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  isLiteral: true,=0A=
=0A=
	  /**=0A=
	   * Setup. Two possible usages:=0A=
	   *=0A=
	   * - static:=0A=
	   *   v-component=3D"comp"=0A=
	   *=0A=
	   * - dynamic:=0A=
	   *   v-component=3D"{{currentView}}"=0A=
	   */=0A=
=0A=
	  bind: function () {=0A=
	    if (!this.el.__vue__) {=0A=
	      // create a ref anchor=0A=
	      this.anchor =3D _.createAnchor('v-component')=0A=
	      _.replace(this.el, this.anchor)=0A=
	      // check keep-alive options.=0A=
	      // If yes, instead of destroying the active vm when=0A=
	      // hiding (v-if) or switching (dynamic literal) it,=0A=
	      // we simply remove it from the DOM and save it in a=0A=
	      // cache object, with its constructor id as the key.=0A=
	      this.keepAlive =3D this._checkParam('keep-alive') !=3D null=0A=
	      // wait for event before insertion=0A=
	      this.waitForEvent =3D this._checkParam('wait-for')=0A=
	      // check ref=0A=
	      this.refID =3D this._checkParam(config.prefix + 'ref')=0A=
	      if (this.keepAlive) {=0A=
	        this.cache =3D {}=0A=
	      }=0A=
	      // check inline-template=0A=
	      if (this._checkParam('inline-template') !=3D=3D null) {=0A=
	        // extract inline template as a DocumentFragment=0A=
	        this.template =3D _.extractContent(this.el, true)=0A=
	      }=0A=
	      // component resolution related state=0A=
	      this.pendingComponentCb =3D=0A=
	      this.Component =3D null=0A=
	      // transition related state=0A=
	      this.pendingRemovals =3D 0=0A=
	      this.pendingRemovalCb =3D null=0A=
	      // if static, build right now.=0A=
	      if (!this._isDynamicLiteral) {=0A=
	        this.resolveComponent(this.expression, _.bind(this.initStatic, =
this))=0A=
	      } else {=0A=
	        // check dynamic component params=0A=
	        this.transMode =3D this._checkParam('transition-mode')=0A=
	      }=0A=
	    } else {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'cannot mount component "' + this.expression + '" ' +=0A=
	        'on already mounted element: ' + this.el=0A=
	      )=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Initialize a static component.=0A=
	   */=0A=
=0A=
	  initStatic: function () {=0A=
	    // wait-for=0A=
	    var anchor =3D this.anchor=0A=
	    var options=0A=
	    var waitFor =3D this.waitForEvent=0A=
	    if (waitFor) {=0A=
	      options =3D {=0A=
	        created: function () {=0A=
	          this.$once(waitFor, function () {=0A=
	            this.$before(anchor)=0A=
	          })=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	    var child =3D this.build(options)=0A=
	    this.setCurrent(child)=0A=
	    if (!this.waitForEvent) {=0A=
	      child.$before(anchor)=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Public update, called by the watcher in the dynamic=0A=
	   * literal scenario, e.g. v-component=3D"{{view}}"=0A=
	   */=0A=
=0A=
	  update: function (value) {=0A=
	    this.setComponent(value)=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Switch dynamic components. May resolve the component=0A=
	   * asynchronously, and perform transition based on=0A=
	   * specified transition mode. Accepts a few additional=0A=
	   * arguments specifically for vue-router.=0A=
	   *=0A=
	   * The callback is called when the full transition is=0A=
	   * finished.=0A=
	   *=0A=
	   * @param {String} value=0A=
	   * @param {Function} [cb]=0A=
	   */=0A=
=0A=
	  setComponent: function (value, cb) {=0A=
	    this.invalidatePending()=0A=
	    if (!value) {=0A=
	      // just remove current=0A=
	      this.unbuild(true)=0A=
	      this.remove(this.childVM, cb)=0A=
	      this.unsetCurrent()=0A=
	    } else {=0A=
	      this.resolveComponent(value, _.bind(function () {=0A=
	        this.unbuild(true)=0A=
	        var options=0A=
	        var self =3D this=0A=
	        var waitFor =3D this.waitForEvent=0A=
	        if (waitFor) {=0A=
	          options =3D {=0A=
	            created: function () {=0A=
	              this.$once(waitFor, function () {=0A=
	                self.waitingFor =3D null=0A=
	                self.transition(this, cb)=0A=
	              })=0A=
	            }=0A=
	          }=0A=
	        }=0A=
	        var cached =3D this.getCached()=0A=
	        var newComponent =3D this.build(options)=0A=
	        if (!waitFor || cached) {=0A=
	          this.transition(newComponent, cb)=0A=
	        } else {=0A=
	          this.waitingFor =3D newComponent=0A=
	        }=0A=
	      }, this))=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Resolve the component constructor to use when creating=0A=
	   * the child vm.=0A=
	   */=0A=
=0A=
	  resolveComponent: function (id, cb) {=0A=
	    var self =3D this=0A=
	    this.pendingComponentCb =3D _.cancellable(function (Component) {=0A=
	      self.Component =3D Component=0A=
	      cb()=0A=
	    })=0A=
	    this.vm._resolveComponent(id, this.pendingComponentCb)=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * When the component changes or unbinds before an async=0A=
	   * constructor is resolved, we need to invalidate its=0A=
	   * pending callback.=0A=
	   */=0A=
=0A=
	  invalidatePending: function () {=0A=
	    if (this.pendingComponentCb) {=0A=
	      this.pendingComponentCb.cancel()=0A=
	      this.pendingComponentCb =3D null=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Instantiate/insert a new child vm.=0A=
	   * If keep alive and has cached instance, insert that=0A=
	   * instance; otherwise build a new one and cache it.=0A=
	   *=0A=
	   * @param {Object} [extraOptions]=0A=
	   * @return {Vue} - the created instance=0A=
	   */=0A=
=0A=
	  build: function (extraOptions) {=0A=
	    var cached =3D this.getCached()=0A=
	    if (cached) {=0A=
	      return cached=0A=
	    }=0A=
	    if (this.Component) {=0A=
	      // default options=0A=
	      var options =3D {=0A=
	        el: templateParser.clone(this.el),=0A=
	        template: this.template,=0A=
	        // if no inline-template, then the compiled=0A=
	        // linker can be cached for better performance.=0A=
	        _linkerCachable: !this.template,=0A=
	        _asComponent: true,=0A=
	        _isRouterView: this._isRouterView,=0A=
	        _context: this.vm=0A=
	      }=0A=
	      // extra options=0A=
	      if (extraOptions) {=0A=
	        _.extend(options, extraOptions)=0A=
	      }=0A=
	      var parent =3D this._host || this.vm=0A=
	      var child =3D parent.$addChild(options, this.Component)=0A=
	      if (this.keepAlive) {=0A=
	        this.cache[this.Component.cid] =3D child=0A=
	      }=0A=
	      return child=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Try to get a cached instance of the current component.=0A=
	   *=0A=
	   * @return {Vue|undefined}=0A=
	   */=0A=
=0A=
	  getCached: function () {=0A=
	    return this.keepAlive &amp;&amp; this.cache[this.Component.cid]=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Teardown the current child, but defers cleanup so=0A=
	   * that we can separate the destroy and removal steps.=0A=
	   *=0A=
	   * @param {Boolean} defer=0A=
	   */=0A=
=0A=
	  unbuild: function (defer) {=0A=
	    if (this.waitingFor) {=0A=
	      this.waitingFor.$destroy()=0A=
	      this.waitingFor =3D null=0A=
	    }=0A=
	    var child =3D this.childVM=0A=
	    if (!child || this.keepAlive) {=0A=
	      return=0A=
	    }=0A=
	    // the sole purpose of `deferCleanup` is so that we can=0A=
	    // "deactivate" the vm right now and perform DOM removal=0A=
	    // later.=0A=
	    child.$destroy(false, defer)=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Remove current destroyed child and manually do=0A=
	   * the cleanup after removal.=0A=
	   *=0A=
	   * @param {Function} cb=0A=
	   */=0A=
=0A=
	  remove: function (child, cb) {=0A=
	    var keepAlive =3D this.keepAlive=0A=
	    if (child) {=0A=
	      // we may have a component switch when a previous=0A=
	      // component is still being transitioned out.=0A=
	      // we want to trigger only one lastest insertion cb=0A=
	      // when the existing transition finishes. (#1119)=0A=
	      this.pendingRemovals++=0A=
	      this.pendingRemovalCb =3D cb=0A=
	      var self =3D this=0A=
	      child.$remove(function () {=0A=
	        self.pendingRemovals--=0A=
	        if (!keepAlive) child._cleanup()=0A=
	        if (!self.pendingRemovals &amp;&amp; self.pendingRemovalCb) {=0A=
	          self.pendingRemovalCb()=0A=
	          self.pendingRemovalCb =3D null=0A=
	        }=0A=
	      })=0A=
	    } else if (cb) {=0A=
	      cb()=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Actually swap the components, depending on the=0A=
	   * transition mode. Defaults to simultaneous.=0A=
	   *=0A=
	   * @param {Vue} target=0A=
	   * @param {Function} [cb]=0A=
	   */=0A=
=0A=
	  transition: function (target, cb) {=0A=
	    var self =3D this=0A=
	    var current =3D this.childVM=0A=
	    this.setCurrent(target)=0A=
	    switch (self.transMode) {=0A=
	      case 'in-out':=0A=
	        target.$before(self.anchor, function () {=0A=
	          self.remove(current, cb)=0A=
	        })=0A=
	        break=0A=
	      case 'out-in':=0A=
	        self.remove(current, function () {=0A=
	          target.$before(self.anchor, cb)=0A=
	        })=0A=
	        break=0A=
	      default:=0A=
	        self.remove(current)=0A=
	        target.$before(self.anchor, cb)=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Set childVM and parent ref=0A=
	   */=0A=
=0A=
	  setCurrent: function (child) {=0A=
	    this.unsetCurrent()=0A=
	    this.childVM =3D child=0A=
	    var refID =3D child._refID || this.refID=0A=
	    if (refID) {=0A=
	      this.vm.$[refID] =3D child=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Unset childVM and parent ref=0A=
	   */=0A=
=0A=
	  unsetCurrent: function () {=0A=
	    var child =3D this.childVM=0A=
	    this.childVM =3D null=0A=
	    var refID =3D (child &amp;&amp; child._refID) || this.refID=0A=
	    if (refID) {=0A=
	      this.vm.$[refID] =3D null=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Unbind.=0A=
	   */=0A=
=0A=
	  unbind: function () {=0A=
	    this.invalidatePending()=0A=
	    // Do not defer cleanup when unbinding=0A=
	    this.unbuild()=0A=
	    this.unsetCurrent()=0A=
	    // destroy all keep-alive cached instances=0A=
	    if (this.cache) {=0A=
	      for (var key in this.cache) {=0A=
	        this.cache[key].$destroy()=0A=
	      }=0A=
	      this.cache =3D null=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 24 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
=0A=
	/**=0A=
	 * Process an element or a DocumentFragment based on a=0A=
	 * instance option object. This allows us to transclude=0A=
	 * a template node/fragment before the instance is created,=0A=
	 * so the processed fragment can then be cloned and reused=0A=
	 * in v-repeat.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Element|DocumentFragment}=0A=
	 */=0A=
=0A=
	exports.transclude =3D function (el, options) {=0A=
	  // extract container attributes to pass them down=0A=
	  // to compiler, because they need to be compiled in=0A=
	  // parent scope. we are mutating the options object here=0A=
	  // assuming the same object will be used for compile=0A=
	  // right after this.=0A=
	  if (options) {=0A=
	    options._containerAttrs =3D extractAttrs(el)=0A=
	  }=0A=
	  // for template tags, what we want is its content as=0A=
	  // a documentFragment (for fragment instances)=0A=
	  if (_.isTemplate(el)) {=0A=
	    el =3D templateParser.parse(el)=0A=
	  }=0A=
	  if (options) {=0A=
	    if (options._asComponent &amp;&amp; !options.template) {=0A=
	      options.template =3D '&lt;content&gt;&lt;/content&gt;'=0A=
	    }=0A=
	    if (options.template) {=0A=
	      options._content =3D _.extractContent(el)=0A=
	      el =3D transcludeTemplate(el, options)=0A=
	    }=0A=
	  }=0A=
	  if (el instanceof DocumentFragment) {=0A=
	    // anchors for fragment instance=0A=
	    // passing in `persist: true` to avoid them being=0A=
	    // discarded by IE during template cloning=0A=
	    _.prepend(_.createAnchor('v-start', true), el)=0A=
	    el.appendChild(_.createAnchor('v-end', true))=0A=
	  }=0A=
	  return el=0A=
	}=0A=
=0A=
	/**=0A=
	 * Process the template option.=0A=
	 * If the replace option is true this will swap the $el.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Object} options=0A=
	 * @return {Element|DocumentFragment}=0A=
	 */=0A=
=0A=
	function transcludeTemplate (el, options) {=0A=
	  var template =3D options.template=0A=
	  var frag =3D templateParser.parse(template, true)=0A=
	  if (frag) {=0A=
	    var replacer =3D frag.firstChild=0A=
	    var tag =3D replacer.tagName &amp;&amp; =
replacer.tagName.toLowerCase()=0A=
	    if (options.replace) {=0A=
	      /* istanbul ignore if */=0A=
	      if (el =3D=3D=3D document.body) {=0A=
	        ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	          'You are mounting an instance with a template to ' +=0A=
	          '&lt;body&gt;. This will replace &lt;body&gt; entirely. You ' =
+=0A=
	          'should probably use `replace: false` here.'=0A=
	        )=0A=
	      }=0A=
	      // there are many cases where the instance must=0A=
	      // become a fragment instance: basically anything that=0A=
	      // can create more than 1 root nodes.=0A=
	      if (=0A=
	        // multi-children template=0A=
	        frag.childNodes.length &gt; 1 ||=0A=
	        // non-element template=0A=
	        replacer.nodeType !=3D=3D 1 ||=0A=
	        // single nested component=0A=
	        tag =3D=3D=3D 'component' ||=0A=
	        _.resolveAsset(options, 'components', tag) ||=0A=
	        replacer.hasAttribute(config.prefix + 'component') ||=0A=
	        // element directive=0A=
	        _.resolveAsset(options, 'elementDirectives', tag) ||=0A=
	        // repeat block=0A=
	        replacer.hasAttribute(config.prefix + 'repeat')=0A=
	      ) {=0A=
	        return frag=0A=
	      } else {=0A=
	        options._replacerAttrs =3D extractAttrs(replacer)=0A=
	        mergeAttrs(el, replacer)=0A=
	        return replacer=0A=
	      }=0A=
	    } else {=0A=
	      el.appendChild(frag)=0A=
	      return el=0A=
	    }=0A=
	  } else {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Invalid template option: ' + template=0A=
	    )=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Helper to extract a component container's attributes=0A=
	 * into a plain object array.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @return {Array}=0A=
	 */=0A=
=0A=
	function extractAttrs (el) {=0A=
	  if (el.nodeType =3D=3D=3D 1 &amp;&amp; el.hasAttributes()) {=0A=
	    return _.toArray(el.attributes)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Merge the attributes of two elements, and make sure=0A=
	 * the class names are merged properly.=0A=
	 *=0A=
	 * @param {Element} from=0A=
	 * @param {Element} to=0A=
	 */=0A=
=0A=
	function mergeAttrs (from, to) {=0A=
	  var attrs =3D from.attributes=0A=
	  var i =3D attrs.length=0A=
	  var name, value=0A=
	  while (i--) {=0A=
	    name =3D attrs[i].name=0A=
	    value =3D attrs[i].value=0A=
	    if (!to.hasAttribute(name)) {=0A=
	      to.setAttribute(name, value)=0A=
	    } else if (name =3D=3D=3D 'class') {=0A=
	      value =3D to.getAttribute(name) + ' ' + value=0A=
	      to.setAttribute(name, value)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 25 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	// manipulation directives=0A=
	exports.text =3D __webpack_require__(26)=0A=
	exports.html =3D __webpack_require__(27)=0A=
	exports.attr =3D __webpack_require__(28)=0A=
	exports.show =3D __webpack_require__(29)=0A=
	exports['class'] =3D __webpack_require__(31)=0A=
	exports.el =3D __webpack_require__(32)=0A=
	exports.ref =3D __webpack_require__(33)=0A=
	exports.cloak =3D __webpack_require__(34)=0A=
	exports.style =3D __webpack_require__(35)=0A=
	exports.transition =3D __webpack_require__(36)=0A=
=0A=
	// event listener directives=0A=
	exports.on =3D __webpack_require__(39)=0A=
	exports.model =3D __webpack_require__(40)=0A=
=0A=
	// logic control directives=0A=
	exports.repeat =3D __webpack_require__(45)=0A=
	exports['if'] =3D __webpack_require__(46)=0A=
=0A=
	// internal directives that should not be used directly=0A=
	// but we still want to expose them for advanced usage.=0A=
	exports._component =3D __webpack_require__(23)=0A=
	exports._prop =3D __webpack_require__(16)=0A=
=0A=
=0A=
/***/ },=0A=
/* 26 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    this.attr =3D this.el.nodeType =3D=3D=3D 3=0A=
	      ? 'data'=0A=
	      : 'textContent'=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    this.el[this.attr] =3D _.toString(value)=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 27 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    // a comment node means this is a binding for=0A=
	    // {{{ inline unescaped html }}}=0A=
	    if (this.el.nodeType =3D=3D=3D 8) {=0A=
	      // hold nodes=0A=
	      this.nodes =3D []=0A=
	      // replace the placeholder with proper anchor=0A=
	      this.anchor =3D _.createAnchor('v-html')=0A=
	      _.replace(this.el, this.anchor)=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    value =3D _.toString(value)=0A=
	    if (this.nodes) {=0A=
	      this.swap(value)=0A=
	    } else {=0A=
	      this.el.innerHTML =3D value=0A=
	    }=0A=
	  },=0A=
=0A=
	  swap: function (value) {=0A=
	    // remove old nodes=0A=
	    var i =3D this.nodes.length=0A=
	    while (i--) {=0A=
	      _.remove(this.nodes[i])=0A=
	    }=0A=
	    // convert new value to a fragment=0A=
	    // do not attempt to retrieve from id selector=0A=
	    var frag =3D templateParser.parse(value, true, true)=0A=
	    // save a reference to these nodes so we can remove later=0A=
	    this.nodes =3D _.toArray(frag.childNodes)=0A=
	    _.before(frag, this.anchor)=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 28 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	// xlink=0A=
	var xlinkNS =3D 'http://www.w3.org/1999/xlink'=0A=
	var xlinkRE =3D /^xlink:/=0A=
	var inputProps =3D {=0A=
	  value: 1,=0A=
	  checked: 1,=0A=
	  selected: 1=0A=
	}=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  priority: 850,=0A=
=0A=
	  update: function (value) {=0A=
	    if (this.arg) {=0A=
	      this.setAttr(this.arg, value)=0A=
	    } else if (typeof value =3D=3D=3D 'object') {=0A=
	      this.objectHandler(value)=0A=
	    }=0A=
	  },=0A=
=0A=
	  objectHandler: function (value) {=0A=
	    // cache object attrs so that only changed attrs=0A=
	    // are actually updated.=0A=
	    var cache =3D this.cache || (this.cache =3D {})=0A=
	    var attr, val=0A=
	    for (attr in cache) {=0A=
	      if (!(attr in value)) {=0A=
	        this.setAttr(attr, null)=0A=
	        delete cache[attr]=0A=
	      }=0A=
	    }=0A=
	    for (attr in value) {=0A=
	      val =3D value[attr]=0A=
	      if (val !=3D=3D cache[attr]) {=0A=
	        cache[attr] =3D val=0A=
	        this.setAttr(attr, val)=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  setAttr: function (attr, value) {=0A=
	    if (inputProps[attr] &amp;&amp; attr in this.el) {=0A=
	      if (!this.valueRemoved) {=0A=
	        this.el.removeAttribute(attr)=0A=
	        this.valueRemoved =3D true=0A=
	      }=0A=
	      this.el[attr] =3D value=0A=
	    } else if (value !=3D null &amp;&amp; value !=3D=3D false) {=0A=
	      if (xlinkRE.test(attr)) {=0A=
	        this.el.setAttributeNS(xlinkNS, attr, value)=0A=
	      } else {=0A=
	        this.el.setAttribute(attr, value)=0A=
	      }=0A=
	    } else {=0A=
	      this.el.removeAttribute(attr)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 29 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var transition =3D __webpack_require__(30)=0A=
=0A=
	module.exports =3D function (value) {=0A=
	  var el =3D this.el=0A=
	  transition.apply(el, value ? 1 : -1, function () {=0A=
	    el.style.display =3D value ? '' : 'none'=0A=
	  }, this.vm)=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 30 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Append with transition.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 * @param {Vue} vm=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	exports.append =3D function (el, target, vm, cb) {=0A=
	  apply(el, 1, function () {=0A=
	    target.appendChild(el)=0A=
	  }, vm, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * InsertBefore with transition.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 * @param {Vue} vm=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	exports.before =3D function (el, target, vm, cb) {=0A=
	  apply(el, 1, function () {=0A=
	    _.before(el, target)=0A=
	  }, vm, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove with transition.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Vue} vm=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	exports.remove =3D function (el, vm, cb) {=0A=
	  apply(el, -1, function () {=0A=
	    _.remove(el)=0A=
	  }, vm, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove by appending to another parent with transition.=0A=
	 * This is only used in block operations.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Element} target=0A=
	 * @param {Vue} vm=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	exports.removeThenAppend =3D function (el, target, vm, cb) {=0A=
	  apply(el, -1, function () {=0A=
	    target.appendChild(el)=0A=
	  }, vm, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Append the childNodes of a fragment to target.=0A=
	 *=0A=
	 * @param {DocumentFragment} block=0A=
	 * @param {Node} target=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	exports.blockAppend =3D function (block, target, vm) {=0A=
	  var nodes =3D _.toArray(block.childNodes)=0A=
	  for (var i =3D 0, l =3D nodes.length; i &lt; l; i++) {=0A=
	    exports.before(nodes[i], target, vm)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove a block of nodes between two edge nodes.=0A=
	 *=0A=
	 * @param {Node} start=0A=
	 * @param {Node} end=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	exports.blockRemove =3D function (start, end, vm) {=0A=
	  var node =3D start.nextSibling=0A=
	  var next=0A=
	  while (node !=3D=3D end) {=0A=
	    next =3D node.nextSibling=0A=
	    exports.remove(node, vm)=0A=
	    node =3D next=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Apply transitions with an operation callback.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {Number} direction=0A=
	 *                  1: enter=0A=
	 *                 -1: leave=0A=
	 * @param {Function} op - the actual DOM operation=0A=
	 * @param {Vue} vm=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	var apply =3D exports.apply =3D function (el, direction, op, vm, cb) {=0A=
	  var transition =3D el.__v_trans=0A=
	  if (=0A=
	    !transition ||=0A=
	    // skip if there are no js hooks and CSS transition is=0A=
	    // not supported=0A=
	    (!transition.hooks &amp;&amp; !_.transitionEndEvent) ||=0A=
	    // skip transitions for initial compile=0A=
	    !vm._isCompiled ||=0A=
	    // if the vm is being manipulated by a parent directive=0A=
	    // during the parent's compilation phase, skip the=0A=
	    // animation.=0A=
	    (vm.$parent &amp;&amp; !vm.$parent._isCompiled)=0A=
	  ) {=0A=
	    op()=0A=
	    if (cb) cb()=0A=
	    return=0A=
	  }=0A=
	  var action =3D direction &gt; 0 ? 'enter' : 'leave'=0A=
	  transition[action](op, cb)=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 31 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var addClass =3D _.addClass=0A=
	var removeClass =3D _.removeClass=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    // interpolations like class=3D"{{abc}}" are converted=0A=
	    // to v-class, and we need to remove the raw,=0A=
	    // uninterpolated className at binding time.=0A=
	    var raw =3D this._descriptor._rawClass=0A=
	    if (raw) {=0A=
	      this.prevKeys =3D raw.trim().split(/\s+/)=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    if (this.arg) {=0A=
	      // single toggle=0A=
	      if (value) {=0A=
	        addClass(this.el, this.arg)=0A=
	      } else {=0A=
	        removeClass(this.el, this.arg)=0A=
	      }=0A=
	    } else {=0A=
	      if (value &amp;&amp; typeof value =3D=3D=3D 'string') {=0A=
	        this.handleObject(stringToObject(value))=0A=
	      } else if (_.isPlainObject(value)) {=0A=
	        this.handleObject(value)=0A=
	      } else {=0A=
	        this.cleanup()=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  handleObject: function (value) {=0A=
	    this.cleanup(value)=0A=
	    var keys =3D this.prevKeys =3D Object.keys(value)=0A=
	    for (var i =3D 0, l =3D keys.length; i &lt; l; i++) {=0A=
	      var key =3D keys[i]=0A=
	      if (value[key]) {=0A=
	        addClass(this.el, key)=0A=
	      } else {=0A=
	        removeClass(this.el, key)=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  cleanup: function (value) {=0A=
	    if (this.prevKeys) {=0A=
	      var i =3D this.prevKeys.length=0A=
	      while (i--) {=0A=
	        var key =3D this.prevKeys[i]=0A=
	        if (!value || !value.hasOwnProperty(key)) {=0A=
	          removeClass(this.el, key)=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	function stringToObject (value) {=0A=
	  var res =3D {}=0A=
	  var keys =3D value.trim().split(/\s+/)=0A=
	  var i =3D keys.length=0A=
	  while (i--) {=0A=
	    res[keys[i]] =3D true=0A=
	  }=0A=
	  return res=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 32 */=0A=
/***/ function(module, exports) {=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  isLiteral: true,=0A=
=0A=
	  bind: function () {=0A=
	    this.vm.$$[this.expression] =3D this.el=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    delete this.vm.$$[this.expression]=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 33 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  isLiteral: true,=0A=
=0A=
	  bind: function () {=0A=
	    var vm =3D this.el.__vue__=0A=
	    if (!vm) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'v-ref should only be used on a component root element.'=0A=
	      )=0A=
	      return=0A=
	    }=0A=
	    // If we get here, it means this is a `v-ref` on a=0A=
	    // child, because parent scope `v-ref` is stripped in=0A=
	    // `v-component` already. So we just record our own ref=0A=
	    // here - it will overwrite parent ref in `v-component`,=0A=
	    // if any.=0A=
	    vm._refID =3D this.expression=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 34 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var config =3D __webpack_require__(5)=0A=
=0A=
	module.exports =3D {=0A=
	  bind: function () {=0A=
	    var el =3D this.el=0A=
	    this.vm.$once('hook:compiled', function () {=0A=
	      el.removeAttribute(config.prefix + 'cloak')=0A=
	    })=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 35 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var prefixes =3D ['-webkit-', '-moz-', '-ms-']=0A=
	var camelPrefixes =3D ['Webkit', 'Moz', 'ms']=0A=
	var importantRE =3D /!important;?$/=0A=
	var camelRE =3D /([a-z])([A-Z])/g=0A=
	var testEl =3D null=0A=
	var propCache =3D {}=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  deep: true,=0A=
=0A=
	  update: function (value) {=0A=
	    if (this.arg) {=0A=
	      this.setProp(this.arg, value)=0A=
	    } else {=0A=
	      if (typeof value =3D=3D=3D 'object') {=0A=
	        this.objectHandler(value)=0A=
	      } else {=0A=
	        this.el.style.cssText =3D value=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  objectHandler: function (value) {=0A=
	    // cache object styles so that only changed props=0A=
	    // are actually updated.=0A=
	    var cache =3D this.cache || (this.cache =3D {})=0A=
	    var prop, val=0A=
	    for (prop in cache) {=0A=
	      if (!(prop in value)) {=0A=
	        this.setProp(prop, null)=0A=
	        delete cache[prop]=0A=
	      }=0A=
	    }=0A=
	    for (prop in value) {=0A=
	      val =3D value[prop]=0A=
	      if (val !=3D=3D cache[prop]) {=0A=
	        cache[prop] =3D val=0A=
	        this.setProp(prop, val)=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  setProp: function (prop, value) {=0A=
	    prop =3D normalize(prop)=0A=
	    if (!prop) return // unsupported prop=0A=
	    // cast possible numbers/booleans into strings=0A=
	    if (value !=3D null) value +=3D ''=0A=
	    if (value) {=0A=
	      var isImportant =3D importantRE.test(value)=0A=
	        ? 'important'=0A=
	        : ''=0A=
	      if (isImportant) {=0A=
	        value =3D value.replace(importantRE, '').trim()=0A=
	      }=0A=
	      this.el.style.setProperty(prop, value, isImportant)=0A=
	    } else {=0A=
	      this.el.style.removeProperty(prop)=0A=
	    }=0A=
	  }=0A=
=0A=
	}=0A=
=0A=
	/**=0A=
	 * Normalize a CSS property name.=0A=
	 * - cache result=0A=
	 * - auto prefix=0A=
	 * - camelCase -&gt; dash-case=0A=
	 *=0A=
	 * @param {String} prop=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	function normalize (prop) {=0A=
	  if (propCache[prop]) {=0A=
	    return propCache[prop]=0A=
	  }=0A=
	  var res =3D prefix(prop)=0A=
	  propCache[prop] =3D propCache[res] =3D res=0A=
	  return res=0A=
	}=0A=
=0A=
	/**=0A=
	 * Auto detect the appropriate prefix for a CSS property.=0A=
	 * https://gist.github.com/paulirish/523692=0A=
	 *=0A=
	 * @param {String} prop=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	function prefix (prop) {=0A=
	  prop =3D prop.replace(camelRE, '$1-$2').toLowerCase()=0A=
	  var camel =3D _.camelize(prop)=0A=
	  var upper =3D camel.charAt(0).toUpperCase() + camel.slice(1)=0A=
	  if (!testEl) {=0A=
	    testEl =3D document.createElement('div')=0A=
	  }=0A=
	  if (camel in testEl.style) {=0A=
	    return prop=0A=
	  }=0A=
	  var i =3D prefixes.length=0A=
	  var prefixed=0A=
	  while (i--) {=0A=
	    prefixed =3D camelPrefixes[i] + upper=0A=
	    if (prefixed in testEl.style) {=0A=
	      return prefixes[i] + prop=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 36 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Transition =3D __webpack_require__(37)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  priority: 1000,=0A=
	  isLiteral: true,=0A=
=0A=
	  bind: function () {=0A=
	    if (!this._isDynamicLiteral) {=0A=
	      this.update(this.expression)=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (id, oldId) {=0A=
	    var el =3D this.el=0A=
	    var vm =3D this.el.__vue__ || this.vm=0A=
	    var hooks =3D _.resolveAsset(vm.$options, 'transitions', id)=0A=
	    id =3D id || 'v'=0A=
	    el.__v_trans =3D new Transition(el, id, hooks, vm)=0A=
	    if (oldId) {=0A=
	      _.removeClass(el, oldId + '-transition')=0A=
	    }=0A=
	    _.addClass(el, id + '-transition')=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 37 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var queue =3D __webpack_require__(38)=0A=
	var addClass =3D _.addClass=0A=
	var removeClass =3D _.removeClass=0A=
	var transitionEndEvent =3D _.transitionEndEvent=0A=
	var animationEndEvent =3D _.animationEndEvent=0A=
	var transDurationProp =3D _.transitionProp + 'Duration'=0A=
	var animDurationProp =3D _.animationProp + 'Duration'=0A=
=0A=
	var TYPE_TRANSITION =3D 1=0A=
	var TYPE_ANIMATION =3D 2=0A=
=0A=
	var uid =3D 0=0A=
=0A=
	/**=0A=
	 * A Transition object that encapsulates the state and logic=0A=
	 * of the transition.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @param {String} id=0A=
	 * @param {Object} hooks=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	function Transition (el, id, hooks, vm) {=0A=
	  this.id =3D uid++=0A=
	  this.el =3D el=0A=
	  this.enterClass =3D id + '-enter'=0A=
	  this.leaveClass =3D id + '-leave'=0A=
	  this.hooks =3D hooks=0A=
	  this.vm =3D vm=0A=
	  // async state=0A=
	  this.pendingCssEvent =3D=0A=
	  this.pendingCssCb =3D=0A=
	  this.cancel =3D=0A=
	  this.pendingJsCb =3D=0A=
	  this.op =3D=0A=
	  this.cb =3D null=0A=
	  this.justEntered =3D false=0A=
	  this.entered =3D this.left =3D false=0A=
	  this.typeCache =3D {}=0A=
	  // bind=0A=
	  var self =3D this=0A=
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']=0A=
	    .forEach(function (m) {=0A=
	      self[m] =3D _.bind(self[m], self)=0A=
	    })=0A=
	}=0A=
=0A=
	var p =3D Transition.prototype=0A=
=0A=
	/**=0A=
	 * Start an entering transition.=0A=
	 *=0A=
	 * 1. enter transition triggered=0A=
	 * 2. call beforeEnter hook=0A=
	 * 3. add enter class=0A=
	 * 4. insert/show element=0A=
	 * 5. call enter hook (with possible explicit js callback)=0A=
	 * 6. reflow=0A=
	 * 7. based on transition type:=0A=
	 *    - transition:=0A=
	 *        remove class now, wait for transitionend,=0A=
	 *        then done if there's no explicit js callback.=0A=
	 *    - animation:=0A=
	 *        wait for animationend, remove class,=0A=
	 *        then done if there's no explicit js callback.=0A=
	 *    - no css transition:=0A=
	 *        done now if there's no explicit js callback.=0A=
	 * 8. wait for either done or js callback, then call=0A=
	 *    afterEnter hook.=0A=
	 *=0A=
	 * @param {Function} op - insert/show the element=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	p.enter =3D function (op, cb) {=0A=
	  this.cancelPending()=0A=
	  this.callHook('beforeEnter')=0A=
	  this.cb =3D cb=0A=
	  addClass(this.el, this.enterClass)=0A=
	  op()=0A=
	  this.entered =3D false=0A=
	  this.callHookWithCb('enter')=0A=
	  if (this.entered) {=0A=
	    return // user called done synchronously.=0A=
	  }=0A=
	  this.cancel =3D this.hooks &amp;&amp; this.hooks.enterCancelled=0A=
	  queue.push(this.enterNextTick)=0A=
	}=0A=
=0A=
	/**=0A=
	 * The "nextTick" phase of an entering transition, which is=0A=
	 * to be pushed into a queue and executed after a reflow so=0A=
	 * that removing the class can trigger a CSS transition.=0A=
	 */=0A=
=0A=
	p.enterNextTick =3D function () {=0A=
	  this.justEntered =3D true=0A=
	  _.nextTick(function () {=0A=
	    this.justEntered =3D false=0A=
	  }, this)=0A=
	  var enterDone =3D this.enterDone=0A=
	  var type =3D this.getCssTransitionType(this.enterClass)=0A=
	  if (!this.pendingJsCb) {=0A=
	    if (type =3D=3D=3D TYPE_TRANSITION) {=0A=
	      // trigger transition by removing enter class now=0A=
	      removeClass(this.el, this.enterClass)=0A=
	      this.setupCssCb(transitionEndEvent, enterDone)=0A=
	    } else if (type =3D=3D=3D TYPE_ANIMATION) {=0A=
	      this.setupCssCb(animationEndEvent, enterDone)=0A=
	    } else {=0A=
	      enterDone()=0A=
	    }=0A=
	  } else if (type =3D=3D=3D TYPE_TRANSITION) {=0A=
	    removeClass(this.el, this.enterClass)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * The "cleanup" phase of an entering transition.=0A=
	 */=0A=
=0A=
	p.enterDone =3D function () {=0A=
	  this.entered =3D true=0A=
	  this.cancel =3D this.pendingJsCb =3D null=0A=
	  removeClass(this.el, this.enterClass)=0A=
	  this.callHook('afterEnter')=0A=
	  if (this.cb) this.cb()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Start a leaving transition.=0A=
	 *=0A=
	 * 1. leave transition triggered.=0A=
	 * 2. call beforeLeave hook=0A=
	 * 3. add leave class (trigger css transition)=0A=
	 * 4. call leave hook (with possible explicit js callback)=0A=
	 * 5. reflow if no explicit js callback is provided=0A=
	 * 6. based on transition type:=0A=
	 *    - transition or animation:=0A=
	 *        wait for end event, remove class, then done if=0A=
	 *        there's no explicit js callback.=0A=
	 *    - no css transition:=0A=
	 *        done if there's no explicit js callback.=0A=
	 * 7. wait for either done or js callback, then call=0A=
	 *    afterLeave hook.=0A=
	 *=0A=
	 * @param {Function} op - remove/hide the element=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	p.leave =3D function (op, cb) {=0A=
	  this.cancelPending()=0A=
	  this.callHook('beforeLeave')=0A=
	  this.op =3D op=0A=
	  this.cb =3D cb=0A=
	  addClass(this.el, this.leaveClass)=0A=
	  this.left =3D false=0A=
	  this.callHookWithCb('leave')=0A=
	  if (this.left) {=0A=
	    return // user called done synchronously.=0A=
	  }=0A=
	  this.cancel =3D this.hooks &amp;&amp; this.hooks.leaveCancelled=0A=
	  // only need to handle leaveDone if=0A=
	  // 1. the transition is already done (synchronously called=0A=
	  //    by the user, which causes this.op set to null)=0A=
	  // 2. there's no explicit js callback=0A=
	  if (this.op &amp;&amp; !this.pendingJsCb) {=0A=
	    // if a CSS transition leaves immediately after enter,=0A=
	    // the transitionend event never fires. therefore we=0A=
	    // detect such cases and end the leave immediately.=0A=
	    if (this.justEntered) {=0A=
	      this.leaveDone()=0A=
	    } else {=0A=
	      queue.push(this.leaveNextTick)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * The "nextTick" phase of a leaving transition.=0A=
	 */=0A=
=0A=
	p.leaveNextTick =3D function () {=0A=
	  var type =3D this.getCssTransitionType(this.leaveClass)=0A=
	  if (type) {=0A=
	    var event =3D type =3D=3D=3D TYPE_TRANSITION=0A=
	      ? transitionEndEvent=0A=
	      : animationEndEvent=0A=
	    this.setupCssCb(event, this.leaveDone)=0A=
	  } else {=0A=
	    this.leaveDone()=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * The "cleanup" phase of a leaving transition.=0A=
	 */=0A=
=0A=
	p.leaveDone =3D function () {=0A=
	  this.left =3D true=0A=
	  this.cancel =3D this.pendingJsCb =3D null=0A=
	  this.op()=0A=
	  removeClass(this.el, this.leaveClass)=0A=
	  this.callHook('afterLeave')=0A=
	  if (this.cb) this.cb()=0A=
	  this.op =3D null=0A=
	}=0A=
=0A=
	/**=0A=
	 * Cancel any pending callbacks from a previously running=0A=
	 * but not finished transition.=0A=
	 */=0A=
=0A=
	p.cancelPending =3D function () {=0A=
	  this.op =3D this.cb =3D null=0A=
	  var hasPending =3D false=0A=
	  if (this.pendingCssCb) {=0A=
	    hasPending =3D true=0A=
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)=0A=
	    this.pendingCssEvent =3D this.pendingCssCb =3D null=0A=
	  }=0A=
	  if (this.pendingJsCb) {=0A=
	    hasPending =3D true=0A=
	    this.pendingJsCb.cancel()=0A=
	    this.pendingJsCb =3D null=0A=
	  }=0A=
	  if (hasPending) {=0A=
	    removeClass(this.el, this.enterClass)=0A=
	    removeClass(this.el, this.leaveClass)=0A=
	  }=0A=
	  if (this.cancel) {=0A=
	    this.cancel.call(this.vm, this.el)=0A=
	    this.cancel =3D null=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Call a user-provided synchronous hook function.=0A=
	 *=0A=
	 * @param {String} type=0A=
	 */=0A=
=0A=
	p.callHook =3D function (type) {=0A=
	  if (this.hooks &amp;&amp; this.hooks[type]) {=0A=
	    this.hooks[type].call(this.vm, this.el)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Call a user-provided, potentially-async hook function.=0A=
	 * We check for the length of arguments to see if the hook=0A=
	 * expects a `done` callback. If true, the transition's end=0A=
	 * will be determined by when the user calls that callback;=0A=
	 * otherwise, the end is determined by the CSS transition or=0A=
	 * animation.=0A=
	 *=0A=
	 * @param {String} type=0A=
	 */=0A=
=0A=
	p.callHookWithCb =3D function (type) {=0A=
	  var hook =3D this.hooks &amp;&amp; this.hooks[type]=0A=
	  if (hook) {=0A=
	    if (hook.length &gt; 1) {=0A=
	      this.pendingJsCb =3D _.cancellable(this[type + 'Done'])=0A=
	    }=0A=
	    hook.call(this.vm, this.el, this.pendingJsCb)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Get an element's transition type based on the=0A=
	 * calculated styles.=0A=
	 *=0A=
	 * @param {String} className=0A=
	 * @return {Number}=0A=
	 */=0A=
=0A=
	p.getCssTransitionType =3D function (className) {=0A=
	  /* istanbul ignore if */=0A=
	  if (=0A=
	    !transitionEndEvent ||=0A=
	    // skip CSS transitions if page is not visible -=0A=
	    // this solves the issue of transitionend events not=0A=
	    // firing until the page is visible again.=0A=
	    // pageVisibility API is supported in IE10+, same as=0A=
	    // CSS transitions.=0A=
	    document.hidden ||=0A=
	    // explicit js-only transition=0A=
	    (this.hooks &amp;&amp; this.hooks.css =3D=3D=3D false) ||=0A=
	    // element is hidden=0A=
	    isHidden(this.el)=0A=
	  ) {=0A=
	    return=0A=
	  }=0A=
	  var type =3D this.typeCache[className]=0A=
	  if (type) return type=0A=
	  var inlineStyles =3D this.el.style=0A=
	  var computedStyles =3D window.getComputedStyle(this.el)=0A=
	  var transDuration =3D=0A=
	    inlineStyles[transDurationProp] ||=0A=
	    computedStyles[transDurationProp]=0A=
	  if (transDuration &amp;&amp; transDuration !=3D=3D '0s') {=0A=
	    type =3D TYPE_TRANSITION=0A=
	  } else {=0A=
	    var animDuration =3D=0A=
	      inlineStyles[animDurationProp] ||=0A=
	      computedStyles[animDurationProp]=0A=
	    if (animDuration &amp;&amp; animDuration !=3D=3D '0s') {=0A=
	      type =3D TYPE_ANIMATION=0A=
	    }=0A=
	  }=0A=
	  if (type) {=0A=
	    this.typeCache[className] =3D type=0A=
	  }=0A=
	  return type=0A=
	}=0A=
=0A=
	/**=0A=
	 * Setup a CSS transitionend/animationend callback.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {Function} cb=0A=
	 */=0A=
=0A=
	p.setupCssCb =3D function (event, cb) {=0A=
	  this.pendingCssEvent =3D event=0A=
	  var self =3D this=0A=
	  var el =3D this.el=0A=
	  var onEnd =3D this.pendingCssCb =3D function (e) {=0A=
	    if (e.target =3D=3D=3D el) {=0A=
	      _.off(el, event, onEnd)=0A=
	      self.pendingCssEvent =3D self.pendingCssCb =3D null=0A=
	      if (!self.pendingJsCb &amp;&amp; cb) {=0A=
	        cb()=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  _.on(el, event, onEnd)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if an element is hidden - in that case we can just=0A=
	 * skip the transition alltogether.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	function isHidden (el) {=0A=
	  return el.style.display =3D=3D=3D 'none' ||=0A=
	    el.style.visibility =3D=3D=3D 'hidden' ||=0A=
	    el.hidden=0A=
	}=0A=
=0A=
	module.exports =3D Transition=0A=
=0A=
=0A=
/***/ },=0A=
/* 38 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var queue =3D []=0A=
	var queued =3D false=0A=
=0A=
	/**=0A=
	 * Push a job into the queue.=0A=
	 *=0A=
	 * @param {Function} job=0A=
	 */=0A=
=0A=
	exports.push =3D function (job) {=0A=
	  queue.push(job)=0A=
	  if (!queued) {=0A=
	    queued =3D true=0A=
	    _.nextTick(flush)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Flush the queue, and do one forced reflow before=0A=
	 * triggering transitions.=0A=
	 */=0A=
=0A=
	function flush () {=0A=
	  // Force layout=0A=
	  var f =3D document.documentElement.offsetHeight=0A=
	  for (var i =3D 0; i &lt; queue.length; i++) {=0A=
	    queue[i]()=0A=
	  }=0A=
	  queue =3D []=0A=
	  queued =3D false=0A=
	  // dummy return, so js linters don't complain about=0A=
	  // unused variable f=0A=
	  return f=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 39 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  acceptStatement: true,=0A=
	  priority: 700,=0A=
=0A=
	  bind: function () {=0A=
	    // deal with iframes=0A=
	    if (=0A=
	      this.el.tagName =3D=3D=3D 'IFRAME' &amp;&amp;=0A=
	      this.arg !=3D=3D 'load'=0A=
	    ) {=0A=
	      var self =3D this=0A=
	      this.iframeBind =3D function () {=0A=
	        _.on(self.el.contentWindow, self.arg, self.handler)=0A=
	      }=0A=
	      this.on('load', this.iframeBind)=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (handler) {=0A=
	    if (typeof handler !=3D=3D 'function') {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Directive v-on=3D"' + this.arg + ': ' +=0A=
	        this.expression + '" expects a function value, ' +=0A=
	        'got ' + handler=0A=
	      )=0A=
	      return=0A=
	    }=0A=
	    this.reset()=0A=
	    var vm =3D this.vm=0A=
	    this.handler =3D function (e) {=0A=
	      e.targetVM =3D vm=0A=
	      vm.$event =3D e=0A=
	      var res =3D handler(e)=0A=
	      vm.$event =3D null=0A=
	      return res=0A=
	    }=0A=
	    if (this.iframeBind) {=0A=
	      this.iframeBind()=0A=
	    } else {=0A=
	      _.on(this.el, this.arg, this.handler)=0A=
	    }=0A=
	  },=0A=
=0A=
	  reset: function () {=0A=
	    var el =3D this.iframeBind=0A=
	      ? this.el.contentWindow=0A=
	      : this.el=0A=
	    if (this.handler) {=0A=
	      _.off(el, this.arg, this.handler)=0A=
	    }=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    this.reset()=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 40 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	var handlers =3D {=0A=
	  text: __webpack_require__(41),=0A=
	  radio: __webpack_require__(42),=0A=
	  select: __webpack_require__(43),=0A=
	  checkbox: __webpack_require__(44)=0A=
	}=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  priority: 800,=0A=
	  twoWay: true,=0A=
	  handlers: handlers,=0A=
=0A=
	  /**=0A=
	   * Possible elements:=0A=
	   *   &lt;select&gt;=0A=
	   *   &lt;textarea&gt;=0A=
	   *   &lt;input type=3D"*"&gt;=0A=
	   *     - text=0A=
	   *     - checkbox=0A=
	   *     - radio=0A=
	   *     - number=0A=
	   *     - TODO: more types may be supplied as a plugin=0A=
	   */=0A=
=0A=
	  bind: function () {=0A=
	    // friendly warning...=0A=
	    this.checkFilters()=0A=
	    if (this.hasRead &amp;&amp; !this.hasWrite) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'It seems you are using a read-only filter with ' +=0A=
	        'v-model. You might want to use a two-way filter ' +=0A=
	        'to ensure correct behavior.'=0A=
	      )=0A=
	    }=0A=
	    var el =3D this.el=0A=
	    var tag =3D el.tagName=0A=
	    var handler=0A=
	    if (tag =3D=3D=3D 'INPUT') {=0A=
	      handler =3D handlers[el.type] || handlers.text=0A=
	    } else if (tag =3D=3D=3D 'SELECT') {=0A=
	      handler =3D handlers.select=0A=
	    } else if (tag =3D=3D=3D 'TEXTAREA') {=0A=
	      handler =3D handlers.text=0A=
	    } else {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'v-model does not support element type: ' + tag=0A=
	      )=0A=
	      return=0A=
	    }=0A=
	    el.__v_model =3D this=0A=
	    handler.bind.call(this)=0A=
	    this.update =3D handler.update=0A=
	    this._unbind =3D handler.unbind=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Check read/write filter stats.=0A=
	   */=0A=
=0A=
	  checkFilters: function () {=0A=
	    var filters =3D this.filters=0A=
	    if (!filters) return=0A=
	    var i =3D filters.length=0A=
	    while (i--) {=0A=
	      var filter =3D _.resolveAsset(this.vm.$options, 'filters', =
filters[i].name)=0A=
	      if (typeof filter =3D=3D=3D 'function' || filter.read) {=0A=
	        this.hasRead =3D true=0A=
	      }=0A=
	      if (filter.write) {=0A=
	        this.hasWrite =3D true=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    this.el.__v_model =3D null=0A=
	    this._unbind &amp;&amp; this._unbind()=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 41 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var self =3D this=0A=
	    var el =3D this.el=0A=
	    var isRange =3D el.type =3D=3D=3D 'range'=0A=
=0A=
	    // check params=0A=
	    // - lazy: update model on "change" instead of "input"=0A=
	    var lazy =3D this._checkParam('lazy') !=3D null=0A=
	    // - number: cast value into number when updating model.=0A=
	    var number =3D this._checkParam('number') !=3D null=0A=
	    // - debounce: debounce the input listener=0A=
	    var debounce =3D parseInt(this._checkParam('debounce'), 10)=0A=
=0A=
	    // handle composition events.=0A=
	    //   http://blog.evanyou.me/2014/01/03/composition-event/=0A=
	    // skip this for Android because it handles composition=0A=
	    // events quite differently. Android doesn't trigger=0A=
	    // composition events for language input methods e.g.=0A=
	    // Chinese, but instead triggers them for spelling=0A=
	    // suggestions... (see Discussion/#162)=0A=
	    var composing =3D false=0A=
	    if (!_.isAndroid &amp;&amp; !isRange) {=0A=
	      this.on('compositionstart', function () {=0A=
	        composing =3D true=0A=
	      })=0A=
	      this.on('compositionend', function () {=0A=
	        composing =3D false=0A=
	        // in IE11 the "compositionend" event fires AFTER=0A=
	        // the "input" event, so the input handler is blocked=0A=
	        // at the end... have to call it here.=0A=
	        //=0A=
	        // #1327: in lazy mode this is unecessary.=0A=
	        if (!lazy) {=0A=
	          self.listener()=0A=
	        }=0A=
	      })=0A=
	    }=0A=
=0A=
	    // prevent messing with the input when user is typing,=0A=
	    // and force update on blur.=0A=
	    this.focused =3D false=0A=
	    if (!isRange) {=0A=
	      this.on('focus', function () {=0A=
	        self.focused =3D true=0A=
	      })=0A=
	      this.on('blur', function () {=0A=
	        self.focused =3D false=0A=
	        self.listener()=0A=
	      })=0A=
	    }=0A=
=0A=
	    // Now attach the main listener=0A=
	    this.listener =3D function () {=0A=
	      if (composing) return=0A=
	      var val =3D number || isRange=0A=
	        ? _.toNumber(el.value)=0A=
	        : el.value=0A=
	      self.set(val)=0A=
	      // force update on next tick to avoid lock &amp; same value=0A=
	      // also only update when user is not typing=0A=
	      _.nextTick(function () {=0A=
	        if (self._bound &amp;&amp; !self.focused) {=0A=
	          self.update(self._watcher.value)=0A=
	        }=0A=
	      })=0A=
	    }=0A=
	    if (debounce) {=0A=
	      this.listener =3D _.debounce(this.listener, debounce)=0A=
	    }=0A=
=0A=
	    // Support jQuery events, since jQuery.trigger() doesn't=0A=
	    // trigger native events in some cases and some plugins=0A=
	    // rely on $.trigger()=0A=
	    //=0A=
	    // We want to make sure if a listener is attached using=0A=
	    // jQuery, it is also removed with jQuery, that's why=0A=
	    // we do the check for each directive instance and=0A=
	    // store that check result on itself. This also allows=0A=
	    // easier test coverage control by unsetting the global=0A=
	    // jQuery variable in tests.=0A=
	    this.hasjQuery =3D typeof jQuery =3D=3D=3D 'function'=0A=
	    if (this.hasjQuery) {=0A=
	      jQuery(el).on('change', this.listener)=0A=
	      if (!lazy) {=0A=
	        jQuery(el).on('input', this.listener)=0A=
	      }=0A=
	    } else {=0A=
	      this.on('change', this.listener)=0A=
	      if (!lazy) {=0A=
	        this.on('input', this.listener)=0A=
	      }=0A=
	    }=0A=
=0A=
	    // IE9 doesn't fire input event on backspace/del/cut=0A=
	    if (!lazy &amp;&amp; _.isIE9) {=0A=
	      this.on('cut', function () {=0A=
	        _.nextTick(self.listener)=0A=
	      })=0A=
	      this.on('keyup', function (e) {=0A=
	        if (e.keyCode =3D=3D=3D 46 || e.keyCode =3D=3D=3D 8) {=0A=
	          self.listener()=0A=
	        }=0A=
	      })=0A=
	    }=0A=
=0A=
	    // set initial value if present=0A=
	    if (=0A=
	      el.hasAttribute('value') ||=0A=
	      (el.tagName =3D=3D=3D 'TEXTAREA' &amp;&amp; el.value.trim())=0A=
	    ) {=0A=
	      this._initValue =3D number=0A=
	        ? _.toNumber(el.value)=0A=
	        : el.value=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    this.el.value =3D _.toString(value)=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    var el =3D this.el=0A=
	    if (this.hasjQuery) {=0A=
	      jQuery(el).off('change', this.listener)=0A=
	      jQuery(el).off('input', this.listener)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 42 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var self =3D this=0A=
	    var el =3D this.el=0A=
	    var number =3D this._checkParam('number') !=3D null=0A=
	    var expression =3D this._checkParam('exp')=0A=
=0A=
	    this.getValue =3D function () {=0A=
	      var val =3D el.value=0A=
	      if (number) {=0A=
	        val =3D _.toNumber(val)=0A=
	      } else if (expression !=3D=3D null) {=0A=
	        val =3D self.vm.$eval(expression)=0A=
	      }=0A=
	      return val=0A=
	    }=0A=
=0A=
	    this.on('change', function () {=0A=
	      self.set(self.getValue())=0A=
	    })=0A=
=0A=
	    if (el.checked) {=0A=
	      this._initValue =3D this.getValue()=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    this.el.checked =3D _.looseEqual(value, this.getValue())=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 43 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Watcher =3D __webpack_require__(17)=0A=
	var dirParser =3D __webpack_require__(15)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var self =3D this=0A=
	    var el =3D this.el=0A=
=0A=
	    // method to force update DOM using latest value.=0A=
	    this.forceUpdate =3D function () {=0A=
	      if (self._watcher) {=0A=
	        self.update(self._watcher.get())=0A=
	      }=0A=
	    }=0A=
=0A=
	    // check options param=0A=
	    var optionsParam =3D this._checkParam('options')=0A=
	    if (optionsParam) {=0A=
	      initOptions.call(this, optionsParam)=0A=
	    }=0A=
	    this.number =3D this._checkParam('number') !=3D null=0A=
	    this.multiple =3D el.hasAttribute('multiple')=0A=
=0A=
	    // attach listener=0A=
	    this.on('change', function () {=0A=
	      var value =3D getValue(el, self.multiple)=0A=
	      value =3D self.number=0A=
	        ? _.isArray(value)=0A=
	          ? value.map(_.toNumber)=0A=
	          : _.toNumber(value)=0A=
	        : value=0A=
	      self.set(value)=0A=
	    })=0A=
=0A=
	    // check initial value (inline selected attribute)=0A=
	    checkInitialValue.call(this)=0A=
=0A=
	    // All major browsers except Firefox resets=0A=
	    // selectedIndex with value -1 to 0 when the element=0A=
	    // is appended to a new parent, therefore we have to=0A=
	    // force a DOM update whenever that happens...=0A=
	    this.vm.$on('hook:attached', this.forceUpdate)=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    var el =3D this.el=0A=
	    el.selectedIndex =3D -1=0A=
	    if (value =3D=3D null) {=0A=
	      if (this.defaultOption) {=0A=
	        this.defaultOption.selected =3D true=0A=
	      }=0A=
	      return=0A=
	    }=0A=
	    var multi =3D this.multiple &amp;&amp; _.isArray(value)=0A=
	    var options =3D el.options=0A=
	    var i =3D options.length=0A=
	    var op, val=0A=
	    while (i--) {=0A=
	      op =3D options[i]=0A=
	      val =3D op.hasOwnProperty('_value')=0A=
	        ? op._value=0A=
	        : op.value=0A=
	      /* eslint-disable eqeqeq */=0A=
	      op.selected =3D multi=0A=
	        ? indexOf(value, val) &gt; -1=0A=
	        : _.looseEqual(value, val)=0A=
	      /* eslint-enable eqeqeq */=0A=
	    }=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    this.vm.$off('hook:attached', this.forceUpdate)=0A=
	    if (this.optionWatcher) {=0A=
	      this.optionWatcher.teardown()=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize the option list from the param.=0A=
	 *=0A=
	 * @param {String} expression=0A=
	 */=0A=
=0A=
	function initOptions (expression) {=0A=
	  var self =3D this=0A=
	  var el =3D self.el=0A=
	  var defaultOption =3D self.defaultOption =3D self.el.options[0]=0A=
	  var descriptor =3D dirParser.parse(expression)[0]=0A=
	  function optionUpdateWatcher (value) {=0A=
	    if (_.isArray(value)) {=0A=
	      // clear old options.=0A=
	      // cannot reset innerHTML here because IE family get=0A=
	      // confused during compilation.=0A=
	      var i =3D el.options.length=0A=
	      while (i--) {=0A=
	        var option =3D el.options[i]=0A=
	        if (option !=3D=3D defaultOption) {=0A=
	          var parentNode =3D option.parentNode=0A=
	          if (parentNode =3D=3D=3D el) {=0A=
	            parentNode.removeChild(option)=0A=
	          } else {=0A=
	            el.removeChild(parentNode)=0A=
	            i =3D el.options.length=0A=
	          }=0A=
	        }=0A=
	      }=0A=
	      buildOptions(el, value)=0A=
	      self.forceUpdate()=0A=
	    } else {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Invalid options value for v-model: ' + value=0A=
	      )=0A=
	    }=0A=
	  }=0A=
	  this.optionWatcher =3D new Watcher(=0A=
	    this.vm,=0A=
	    descriptor.expression,=0A=
	    optionUpdateWatcher,=0A=
	    {=0A=
	      deep: true,=0A=
	      filters: descriptor.filters=0A=
	    }=0A=
	  )=0A=
	  // update with initial value=0A=
	  optionUpdateWatcher(this.optionWatcher.value)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Build up option elements. IE9 doesn't create options=0A=
	 * when setting innerHTML on &lt;select&gt; elements, so we have=0A=
	 * to use DOM API here.=0A=
	 *=0A=
	 * @param {Element} parent - a &lt;select&gt; or an &lt;optgroup&gt;=0A=
	 * @param {Array} options=0A=
	 */=0A=
=0A=
	function buildOptions (parent, options) {=0A=
	  var op, el=0A=
	  for (var i =3D 0, l =3D options.length; i &lt; l; i++) {=0A=
	    op =3D options[i]=0A=
	    if (!op.options) {=0A=
	      el =3D document.createElement('option')=0A=
	      if (typeof op =3D=3D=3D 'string' || typeof op =3D=3D=3D 'number') =
{=0A=
	        el.text =3D el.value =3D op=0A=
	      } else {=0A=
	        if (op.value !=3D null &amp;&amp; !_.isObject(op.value)) {=0A=
	          el.value =3D op.value=0A=
	        }=0A=
	        // object values gets serialized when set as value,=0A=
	        // so we store the raw value as a different property=0A=
	        el._value =3D op.value=0A=
	        el.text =3D op.text || ''=0A=
	        if (op.disabled) {=0A=
	          el.disabled =3D true=0A=
	        }=0A=
	      }=0A=
	    } else {=0A=
	      el =3D document.createElement('optgroup')=0A=
	      el.label =3D op.label=0A=
	      buildOptions(el, op.options)=0A=
	    }=0A=
	    parent.appendChild(el)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check the initial value for selected options.=0A=
	 */=0A=
=0A=
	function checkInitialValue () {=0A=
	  var initValue=0A=
	  var options =3D this.el.options=0A=
	  for (var i =3D 0, l =3D options.length; i &lt; l; i++) {=0A=
	    if (options[i].hasAttribute('selected')) {=0A=
	      if (this.multiple) {=0A=
	        (initValue || (initValue =3D []))=0A=
	          .push(options[i].value)=0A=
	      } else {=0A=
	        initValue =3D options[i].value=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  if (typeof initValue !=3D=3D 'undefined') {=0A=
	    this._initValue =3D this.number=0A=
	      ? _.toNumber(initValue)=0A=
	      : initValue=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Get select value=0A=
	 *=0A=
	 * @param {SelectElement} el=0A=
	 * @param {Boolean} multi=0A=
	 * @return {Array|*}=0A=
	 */=0A=
=0A=
	function getValue (el, multi) {=0A=
	  var res =3D multi ? [] : null=0A=
	  var op, val=0A=
	  for (var i =3D 0, l =3D el.options.length; i &lt; l; i++) {=0A=
	    op =3D el.options[i]=0A=
	    if (op.selected) {=0A=
	      val =3D op.hasOwnProperty('_value')=0A=
	        ? op._value=0A=
	        : op.value=0A=
	      if (multi) {=0A=
	        res.push(val)=0A=
	      } else {=0A=
	        return val=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  return res=0A=
	}=0A=
=0A=
	/**=0A=
	 * Native Array.indexOf uses strict equal, but in this=0A=
	 * case we need to match string/numbers with custom equal.=0A=
	 *=0A=
	 * @param {Array} arr=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	function indexOf (arr, val) {=0A=
	  var i =3D arr.length=0A=
	  while (i--) {=0A=
	    if (_.looseEqual(arr[i], val)) {=0A=
	      return i=0A=
	    }=0A=
	  }=0A=
	  return -1=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 44 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var self =3D this=0A=
	    var el =3D this.el=0A=
	    var trueExp =3D this._checkParam('true-exp')=0A=
	    var falseExp =3D this._checkParam('false-exp')=0A=
=0A=
	    this._matchValue =3D function (value) {=0A=
	      if (trueExp !=3D=3D null) {=0A=
	        return _.looseEqual(value, self.vm.$eval(trueExp))=0A=
	      } else {=0A=
	        return !!value=0A=
	      }=0A=
	    }=0A=
=0A=
	    function getValue () {=0A=
	      var val =3D el.checked=0A=
	      if (val &amp;&amp; trueExp !=3D=3D null) {=0A=
	        val =3D self.vm.$eval(trueExp)=0A=
	      }=0A=
	      if (!val &amp;&amp; falseExp !=3D=3D null) {=0A=
	        val =3D self.vm.$eval(falseExp)=0A=
	      }=0A=
	      return val=0A=
	    }=0A=
=0A=
	    this.on('change', function () {=0A=
	      self.set(getValue())=0A=
	    })=0A=
=0A=
	    if (el.checked) {=0A=
	      this._initValue =3D getValue()=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    this.el.checked =3D this._matchValue(value)=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 45 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var isObject =3D _.isObject=0A=
	var isPlainObject =3D _.isPlainObject=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var expParser =3D __webpack_require__(19)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
	var compiler =3D __webpack_require__(10)=0A=
	var uid =3D 0=0A=
=0A=
	// async component resolution states=0A=
	var UNRESOLVED =3D 0=0A=
	var PENDING =3D 1=0A=
	var RESOLVED =3D 2=0A=
	var ABORTED =3D 3=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  /**=0A=
	   * Setup.=0A=
	   */=0A=
=0A=
	  bind: function () {=0A=
=0A=
	    // some helpful tips...=0A=
	    /* istanbul ignore if */=0A=
	    if (=0A=
	      ("development") !=3D=3D 'production' &amp;&amp;=0A=
	      this.el.tagName =3D=3D=3D 'OPTION' &amp;&amp;=0A=
	      this.el.parentNode &amp;&amp; this.el.parentNode.__v_model=0A=
	    ) {=0A=
	      _.warn(=0A=
	        'Don\'t use v-repeat for v-model options; ' +=0A=
	        'use the `options` param instead: ' +=0A=
	        'http://vuejs.org/guide/forms.html#Dynamic_Select_Options'=0A=
	      )=0A=
	    }=0A=
=0A=
	    // support for item in array syntax=0A=
	    var inMatch =3D this.expression.match(/(.*) in (.*)/)=0A=
	    if (inMatch) {=0A=
	      this.arg =3D inMatch[1]=0A=
	      this._watcherExp =3D inMatch[2]=0A=
	    }=0A=
	    // uid as a cache identifier=0A=
	    this.id =3D '__v_repeat_' + (++uid)=0A=
=0A=
	    // setup anchor nodes=0A=
	    this.start =3D _.createAnchor('v-repeat-start')=0A=
	    this.end =3D _.createAnchor('v-repeat-end')=0A=
	    _.replace(this.el, this.end)=0A=
	    _.before(this.start, this.end)=0A=
=0A=
	    // check if this is a block repeat=0A=
	    this.template =3D _.isTemplate(this.el)=0A=
	      ? templateParser.parse(this.el, true)=0A=
	      : this.el=0A=
=0A=
	    // check for trackby param=0A=
	    this.idKey =3D this._checkParam('track-by')=0A=
	    // check for transition stagger=0A=
	    var stagger =3D +this._checkParam('stagger')=0A=
	    this.enterStagger =3D +this._checkParam('enter-stagger') || stagger=0A=
	    this.leaveStagger =3D +this._checkParam('leave-stagger') || stagger=0A=
=0A=
	    // check for v-ref/v-el=0A=
	    this.refID =3D this._checkParam(config.prefix + 'ref')=0A=
	    this.elID =3D this._checkParam(config.prefix + 'el')=0A=
=0A=
	    // check other directives that need to be handled=0A=
	    // at v-repeat level=0A=
	    this.checkIf()=0A=
	    this.checkComponent()=0A=
=0A=
	    // create cache object=0A=
	    this.cache =3D Object.create(null)=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Warn against v-if usage.=0A=
	   */=0A=
=0A=
	  checkIf: function () {=0A=
	    if (_.attr(this.el, 'if') !=3D=3D null) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Don\'t use v-if with v-repeat. ' +=0A=
	        'Use v-show or the "filterBy" filter instead.'=0A=
	      )=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Check the component constructor to use for repeated=0A=
	   * instances. If static we resolve it now, otherwise it=0A=
	   * needs to be resolved at build time with actual data.=0A=
	   */=0A=
=0A=
	  checkComponent: function () {=0A=
	    this.componentState =3D UNRESOLVED=0A=
	    var options =3D this.vm.$options=0A=
	    var id =3D _.checkComponent(this.el, options)=0A=
	    if (!id) {=0A=
	      // default constructor=0A=
	      this.Component =3D _.Vue=0A=
	      // inline repeats should inherit=0A=
	      this.inline =3D true=0A=
	      // important: transclude with no options, just=0A=
	      // to ensure block start and block end=0A=
	      this.template =3D compiler.transclude(this.template)=0A=
	      var copy =3D _.extend({}, options)=0A=
	      copy._asComponent =3D false=0A=
	      this._linkFn =3D compiler.compile(this.template, copy)=0A=
	    } else {=0A=
	      this.Component =3D null=0A=
	      this.asComponent =3D true=0A=
	      // check inline-template=0A=
	      if (this._checkParam('inline-template') !=3D=3D null) {=0A=
	        // extract inline template as a DocumentFragment=0A=
	        this.inlineTemplate =3D _.extractContent(this.el, true)=0A=
	      }=0A=
	      var tokens =3D textParser.parse(id)=0A=
	      if (tokens) {=0A=
	        // dynamic component to be resolved later=0A=
	        var componentExp =3D textParser.tokensToExp(tokens)=0A=
	        this.componentGetter =3D expParser.parse(componentExp).get=0A=
	      } else {=0A=
	        // static=0A=
	        this.componentId =3D id=0A=
	        this.pendingData =3D null=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  resolveComponent: function () {=0A=
	    this.componentState =3D PENDING=0A=
	    this.vm._resolveComponent(this.componentId, _.bind(function =
(Component) {=0A=
	      if (this.componentState =3D=3D=3D ABORTED) {=0A=
	        return=0A=
	      }=0A=
	      this.Component =3D Component=0A=
	      this.componentState =3D RESOLVED=0A=
	      this.realUpdate(this.pendingData)=0A=
	      this.pendingData =3D null=0A=
	    }, this))=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Resolve a dynamic component to use for an instance.=0A=
	   * The tricky part here is that there could be dynamic=0A=
	   * components depending on instance data.=0A=
	   *=0A=
	   * @param {Object} data=0A=
	   * @param {Object} meta=0A=
	   * @return {Function}=0A=
	   */=0A=
=0A=
	  resolveDynamicComponent: function (data, meta) {=0A=
	    // create a temporary context object and copy data=0A=
	    // and meta properties onto it.=0A=
	    // use _.define to avoid accidentally overwriting scope=0A=
	    // properties.=0A=
	    var context =3D Object.create(this.vm)=0A=
	    var key=0A=
	    for (key in data) {=0A=
	      _.define(context, key, data[key])=0A=
	    }=0A=
	    for (key in meta) {=0A=
	      _.define(context, key, meta[key])=0A=
	    }=0A=
	    var id =3D this.componentGetter.call(context, context)=0A=
	    var Component =3D _.resolveAsset(this.vm.$options, 'components', id)=0A=
	    if (true) {=0A=
	      _.assertAsset(Component, 'component', id)=0A=
	    }=0A=
	    if (!Component.options) {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Async resolution is not supported for v-repeat ' +=0A=
	        '+ dynamic component. (component: ' + id + ')'=0A=
	      )=0A=
	      return _.Vue=0A=
	    }=0A=
	    return Component=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Update.=0A=
	   * This is called whenever the Array mutates. If we have=0A=
	   * a component, we might need to wait for it to resolve=0A=
	   * asynchronously.=0A=
	   *=0A=
	   * @param {Array|Number|String} data=0A=
	   */=0A=
=0A=
	  update: function (data) {=0A=
	    if (("development") !=3D=3D 'production' &amp;&amp; =
!_.isArray(data)) {=0A=
	      _.warn(=0A=
	        'v-repeat pre-converts Objects into Arrays, and ' +=0A=
	        'v-repeat filters should always return Arrays.'=0A=
	      )=0A=
	    }=0A=
	    if (this.componentId) {=0A=
	      var state =3D this.componentState=0A=
	      if (state =3D=3D=3D UNRESOLVED) {=0A=
	        this.pendingData =3D data=0A=
	        // once resolved, it will call realUpdate=0A=
	        this.resolveComponent()=0A=
	      } else if (state =3D=3D=3D PENDING) {=0A=
	        this.pendingData =3D data=0A=
	      } else if (state =3D=3D=3D RESOLVED) {=0A=
	        this.realUpdate(data)=0A=
	      }=0A=
	    } else {=0A=
	      this.realUpdate(data)=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * The real update that actually modifies the DOM.=0A=
	   *=0A=
	   * @param {Array|Number|String} data=0A=
	   */=0A=
=0A=
	  realUpdate: function (data) {=0A=
	    this.vms =3D this.diff(data, this.vms)=0A=
	    // update v-ref=0A=
	    if (this.refID) {=0A=
	      this.vm.$[this.refID] =3D this.converted=0A=
	        ? toRefObject(this.vms)=0A=
	        : this.vms=0A=
	    }=0A=
	    if (this.elID) {=0A=
	      this.vm.$$[this.elID] =3D this.vms.map(function (vm) {=0A=
	        return vm.$el=0A=
	      })=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Diff, based on new data and old data, determine the=0A=
	   * minimum amount of DOM manipulations needed to make the=0A=
	   * DOM reflect the new data Array.=0A=
	   *=0A=
	   * The algorithm diffs the new data Array by storing a=0A=
	   * hidden reference to an owner vm instance on previously=0A=
	   * seen data. This allows us to achieve O(n) which is=0A=
	   * better than a levenshtein distance based algorithm,=0A=
	   * which is O(m * n).=0A=
	   *=0A=
	   * @param {Array} data=0A=
	   * @param {Array} oldVms=0A=
	   * @return {Array}=0A=
	   */=0A=
=0A=
	  diff: function (data, oldVms) {=0A=
	    var idKey =3D this.idKey=0A=
	    var converted =3D this.converted=0A=
	    var start =3D this.start=0A=
	    var end =3D this.end=0A=
	    var inDoc =3D _.inDoc(start)=0A=
	    var alias =3D this.arg=0A=
	    var init =3D !oldVms=0A=
	    var vms =3D new Array(data.length)=0A=
	    var obj, raw, vm, i, l, primitive=0A=
	    // First pass, go through the new Array and fill up=0A=
	    // the new vms array. If a piece of data has a cached=0A=
	    // instance for it, we reuse it. Otherwise build a new=0A=
	    // instance.=0A=
	    for (i =3D 0, l =3D data.length; i &lt; l; i++) {=0A=
	      obj =3D data[i]=0A=
	      raw =3D converted ? obj.$value : obj=0A=
	      primitive =3D !isObject(raw)=0A=
	      vm =3D !init &amp;&amp; this.getVm(raw, i, converted ? obj.$key : =
null)=0A=
	      if (vm) { // reusable instance=0A=
=0A=
	        if (("development") !=3D=3D 'production' &amp;&amp; vm._reused) =
{=0A=
	          _.warn(=0A=
	            'Duplicate objects found in v-repeat=3D"' + this.expression =
+ '": ' +=0A=
	            JSON.stringify(raw)=0A=
	          )=0A=
	        }=0A=
=0A=
	        vm._reused =3D true=0A=
	        vm.$index =3D i // update $index=0A=
	        // update data for track-by or object repeat,=0A=
	        // since in these two cases the data is replaced=0A=
	        // rather than mutated.=0A=
	        if (idKey || converted || primitive) {=0A=
	          if (alias) {=0A=
	            vm[alias] =3D raw=0A=
	          } else if (_.isPlainObject(raw)) {=0A=
	            vm.$data =3D raw=0A=
	          } else {=0A=
	            vm.$value =3D raw=0A=
	          }=0A=
	        }=0A=
	      } else { // new instance=0A=
	        vm =3D this.build(obj, i, true)=0A=
	        vm._reused =3D false=0A=
	      }=0A=
	      vms[i] =3D vm=0A=
	      // insert if this is first run=0A=
	      if (init) {=0A=
	        vm.$before(end)=0A=
	      }=0A=
	    }=0A=
	    // if this is the first run, we're done.=0A=
	    if (init) {=0A=
	      return vms=0A=
	    }=0A=
	    // Second pass, go through the old vm instances and=0A=
	    // destroy those who are not reused (and remove them=0A=
	    // from cache)=0A=
	    var removalIndex =3D 0=0A=
	    var totalRemoved =3D oldVms.length - vms.length=0A=
	    for (i =3D 0, l =3D oldVms.length; i &lt; l; i++) {=0A=
	      vm =3D oldVms[i]=0A=
	      if (!vm._reused) {=0A=
	        this.uncacheVm(vm)=0A=
	        vm.$destroy(false, true) // defer cleanup until removal=0A=
	        this.remove(vm, removalIndex++, totalRemoved, inDoc)=0A=
	      }=0A=
	    }=0A=
	    // final pass, move/insert new instances into the=0A=
	    // right place.=0A=
	    var targetPrev, prevEl, currentPrev=0A=
	    var insertionIndex =3D 0=0A=
	    for (i =3D 0, l =3D vms.length; i &lt; l; i++) {=0A=
	      vm =3D vms[i]=0A=
	      // this is the vm that we should be after=0A=
	      targetPrev =3D vms[i - 1]=0A=
	      prevEl =3D targetPrev=0A=
	        ? targetPrev._staggerCb=0A=
	          ? targetPrev._staggerAnchor=0A=
	          : targetPrev._fragmentEnd || targetPrev.$el=0A=
	        : start=0A=
	      if (vm._reused &amp;&amp; !vm._staggerCb) {=0A=
	        currentPrev =3D findPrevVm(vm, start, this.id)=0A=
	        if (currentPrev !=3D=3D targetPrev) {=0A=
	          this.move(vm, prevEl)=0A=
	        }=0A=
	      } else {=0A=
	        // new instance, or still in stagger.=0A=
	        // insert with updated stagger index.=0A=
	        this.insert(vm, insertionIndex++, prevEl, inDoc)=0A=
	      }=0A=
	      vm._reused =3D false=0A=
	    }=0A=
	    return vms=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Build a new instance and cache it.=0A=
	   *=0A=
	   * @param {Object} data=0A=
	   * @param {Number} index=0A=
	   * @param {Boolean} needCache=0A=
	   */=0A=
=0A=
	  build: function (data, index, needCache) {=0A=
	    var meta =3D { $index: index }=0A=
	    if (this.converted) {=0A=
	      meta.$key =3D data.$key=0A=
	    }=0A=
	    var raw =3D this.converted ? data.$value : data=0A=
	    var alias =3D this.arg=0A=
	    if (alias) {=0A=
	      data =3D {}=0A=
	      data[alias] =3D raw=0A=
	    } else if (!isPlainObject(raw)) {=0A=
	      // non-object values=0A=
	      data =3D {}=0A=
	      meta.$value =3D raw=0A=
	    } else {=0A=
	      // default=0A=
	      data =3D raw=0A=
	    }=0A=
	    // resolve constructor=0A=
	    var Component =3D this.Component || =
this.resolveDynamicComponent(data, meta)=0A=
	    var parent =3D this._host || this.vm=0A=
	    var vm =3D parent.$addChild({=0A=
	      el: templateParser.clone(this.template),=0A=
	      data: data,=0A=
	      inherit: this.inline,=0A=
	      template: this.inlineTemplate,=0A=
	      // repeater meta, e.g. $index, $key=0A=
	      _meta: meta,=0A=
	      // mark this as an inline-repeat instance=0A=
	      _repeat: this.inline,=0A=
	      // is this a component?=0A=
	      _asComponent: this.asComponent,=0A=
	      // linker cachable if no inline-template=0A=
	      _linkerCachable: !this.inlineTemplate &amp;&amp; Component =
!=3D=3D _.Vue,=0A=
	      // pre-compiled linker for simple repeats=0A=
	      _linkFn: this._linkFn,=0A=
	      // identifier, shows that this vm belongs to this collection=0A=
	      _repeatId: this.id,=0A=
	      // transclusion content owner=0A=
	      _context: this.vm=0A=
	    }, Component)=0A=
	    // cache instance=0A=
	    if (needCache) {=0A=
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)=0A=
	    }=0A=
	    // sync back changes for two-way bindings of primitive values=0A=
	    var dir =3D this=0A=
	    if (this.rawType =3D=3D=3D 'object' &amp;&amp; isPrimitive(raw)) {=0A=
	      vm.$watch(alias || '$value', function (val) {=0A=
	        if (dir.filters) {=0A=
	          ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	            'You seem to be mutating the $value reference of ' +=0A=
	            'a v-repeat instance (likely through v-model) ' +=0A=
	            'and filtering the v-repeat at the same time. ' +=0A=
	            'This will not work properly with an Array of ' +=0A=
	            'primitive values. Please use an Array of ' +=0A=
	            'Objects instead.'=0A=
	          )=0A=
	        }=0A=
	        dir._withLock(function () {=0A=
	          if (dir.converted) {=0A=
	            dir.rawValue[vm.$key] =3D val=0A=
	          } else {=0A=
	            dir.rawValue.$set(vm.$index, val)=0A=
	          }=0A=
	        })=0A=
	      })=0A=
	    }=0A=
	    return vm=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Unbind, teardown everything=0A=
	   */=0A=
=0A=
	  unbind: function () {=0A=
	    this.componentState =3D ABORTED=0A=
	    if (this.refID) {=0A=
	      this.vm.$[this.refID] =3D null=0A=
	    }=0A=
	    if (this.vms) {=0A=
	      var i =3D this.vms.length=0A=
	      var vm=0A=
	      while (i--) {=0A=
	        vm =3D this.vms[i]=0A=
	        this.uncacheVm(vm)=0A=
	        vm.$destroy()=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Cache a vm instance based on its data.=0A=
	   *=0A=
	   * If the data is an object, we save the vm's reference on=0A=
	   * the data object as a hidden property. Otherwise we=0A=
	   * cache them in an object and for each primitive value=0A=
	   * there is an array in case there are duplicates.=0A=
	   *=0A=
	   * @param {Object} data=0A=
	   * @param {Vue} vm=0A=
	   * @param {Number} index=0A=
	   * @param {String} [key]=0A=
	   */=0A=
=0A=
	  cacheVm: function (data, vm, index, key) {=0A=
	    var idKey =3D this.idKey=0A=
	    var cache =3D this.cache=0A=
	    var primitive =3D !isObject(data)=0A=
	    var id=0A=
	    if (key || idKey || primitive) {=0A=
	      id =3D idKey=0A=
	        ? idKey =3D=3D=3D '$index'=0A=
	          ? index=0A=
	          : data[idKey]=0A=
	        : (key || index)=0A=
	      if (!cache[id]) {=0A=
	        cache[id] =3D vm=0A=
	      } else if (!primitive &amp;&amp; idKey !=3D=3D '$index') {=0A=
	        ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	          'Duplicate objects with the same track-by key in v-repeat: ' =
+ id=0A=
	        )=0A=
	      }=0A=
	    } else {=0A=
	      id =3D this.id=0A=
	      if (data.hasOwnProperty(id)) {=0A=
	        if (data[id] =3D=3D=3D null) {=0A=
	          data[id] =3D vm=0A=
	        } else {=0A=
	          ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	            'Duplicate objects found in v-repeat=3D"' + this.expression =
+ '": ' +=0A=
	            JSON.stringify(data)=0A=
	          )=0A=
	        }=0A=
	      } else {=0A=
	        _.define(data, id, vm)=0A=
	      }=0A=
	    }=0A=
	    vm._raw =3D data=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Try to get a cached instance from a piece of data.=0A=
	   *=0A=
	   * @param {Object} data=0A=
	   * @param {Number} index=0A=
	   * @param {String} [key]=0A=
	   * @return {Vue|undefined}=0A=
	   */=0A=
=0A=
	  getVm: function (data, index, key) {=0A=
	    var idKey =3D this.idKey=0A=
	    var primitive =3D !isObject(data)=0A=
	    if (key || idKey || primitive) {=0A=
	      var id =3D idKey=0A=
	        ? idKey =3D=3D=3D '$index'=0A=
	          ? index=0A=
	          : data[idKey]=0A=
	        : (key || index)=0A=
	      return this.cache[id]=0A=
	    } else {=0A=
	      return data[this.id]=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Delete a cached vm instance.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   */=0A=
=0A=
	  uncacheVm: function (vm) {=0A=
	    var data =3D vm._raw=0A=
	    var idKey =3D this.idKey=0A=
	    var index =3D vm.$index=0A=
	    // fix #948: avoid accidentally fall through to=0A=
	    // a parent repeater which happens to have $key.=0A=
	    var key =3D vm.hasOwnProperty('$key') &amp;&amp; vm.$key=0A=
	    var primitive =3D !isObject(data)=0A=
	    if (idKey || key || primitive) {=0A=
	      var id =3D idKey=0A=
	        ? idKey =3D=3D=3D '$index'=0A=
	          ? index=0A=
	          : data[idKey]=0A=
	        : (key || index)=0A=
	      this.cache[id] =3D null=0A=
	    } else {=0A=
	      data[this.id] =3D null=0A=
	      vm._raw =3D null=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Insert an instance.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   * @param {Number} index=0A=
	   * @param {Node} prevEl=0A=
	   * @param {Boolean} inDoc=0A=
	   */=0A=
=0A=
	  insert: function (vm, index, prevEl, inDoc) {=0A=
	    if (vm._staggerCb) {=0A=
	      vm._staggerCb.cancel()=0A=
	      vm._staggerCb =3D null=0A=
	    }=0A=
	    var staggerAmount =3D this.getStagger(vm, index, null, 'enter')=0A=
	    if (inDoc &amp;&amp; staggerAmount) {=0A=
	      // create an anchor and insert it synchronously,=0A=
	      // so that we can resolve the correct order without=0A=
	      // worrying about some elements not inserted yet=0A=
	      var anchor =3D vm._staggerAnchor=0A=
	      if (!anchor) {=0A=
	        anchor =3D vm._staggerAnchor =3D =
_.createAnchor('stagger-anchor')=0A=
	        anchor.__vue__ =3D vm=0A=
	      }=0A=
	      _.after(anchor, prevEl)=0A=
	      var op =3D vm._staggerCb =3D _.cancellable(function () {=0A=
	        vm._staggerCb =3D null=0A=
	        vm.$before(anchor)=0A=
	        _.remove(anchor)=0A=
	      })=0A=
	      setTimeout(op, staggerAmount)=0A=
	    } else {=0A=
	      vm.$after(prevEl)=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Move an already inserted instance.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   * @param {Node} prevEl=0A=
	   */=0A=
=0A=
	  move: function (vm, prevEl) {=0A=
	    vm.$after(prevEl, null, false)=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Remove an instance.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   * @param {Number} index=0A=
	   * @param {Boolean} inDoc=0A=
	   */=0A=
=0A=
	  remove: function (vm, index, total, inDoc) {=0A=
	    if (vm._staggerCb) {=0A=
	      vm._staggerCb.cancel()=0A=
	      vm._staggerCb =3D null=0A=
	      // it's not possible for the same vm to be removed=0A=
	      // twice, so if we have a pending stagger callback,=0A=
	      // it means this vm is queued for enter but removed=0A=
	      // before its transition started. Since it is already=0A=
	      // destroyed, we can just leave it in detached state.=0A=
	      return=0A=
	    }=0A=
	    var staggerAmount =3D this.getStagger(vm, index, total, 'leave')=0A=
	    if (inDoc &amp;&amp; staggerAmount) {=0A=
	      var op =3D vm._staggerCb =3D _.cancellable(function () {=0A=
	        vm._staggerCb =3D null=0A=
	        remove()=0A=
	      })=0A=
	      setTimeout(op, staggerAmount)=0A=
	    } else {=0A=
	      remove()=0A=
	    }=0A=
	    function remove () {=0A=
	      vm.$remove(function () {=0A=
	        vm._cleanup()=0A=
	      })=0A=
	    }=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Get the stagger amount for an insertion/removal.=0A=
	   *=0A=
	   * @param {Vue} vm=0A=
	   * @param {Number} index=0A=
	   * @param {String} type=0A=
	   * @param {Number} total=0A=
	   */=0A=
=0A=
	  getStagger: function (vm, index, total, type) {=0A=
	    type =3D type + 'Stagger'=0A=
	    var transition =3D vm.$el.__v_trans=0A=
	    var hooks =3D transition &amp;&amp; transition.hooks=0A=
	    var hook =3D hooks &amp;&amp; (hooks[type] || hooks.stagger)=0A=
	    return hook=0A=
	      ? hook.call(vm, index, total)=0A=
	      : index * this[type]=0A=
	  },=0A=
=0A=
	  /**=0A=
	   * Pre-process the value before piping it through the=0A=
	   * filters, and convert non-Array objects to arrays.=0A=
	   *=0A=
	   * This function will be bound to this directive instance=0A=
	   * and passed into the watcher.=0A=
	   *=0A=
	   * @param {*} value=0A=
	   * @return {Array}=0A=
	   * @private=0A=
	   */=0A=
=0A=
	  _preProcess: function (value) {=0A=
	    // regardless of type, store the un-filtered raw value.=0A=
	    this.rawValue =3D value=0A=
	    var type =3D this.rawType =3D typeof value=0A=
	    if (!isPlainObject(value)) {=0A=
	      this.converted =3D false=0A=
	      if (type =3D=3D=3D 'number') {=0A=
	        value =3D range(value)=0A=
	      } else if (type =3D=3D=3D 'string') {=0A=
	        value =3D _.toArray(value)=0A=
	      }=0A=
	      return value || []=0A=
	    } else {=0A=
	      // convert plain object to array.=0A=
	      var keys =3D Object.keys(value)=0A=
	      var i =3D keys.length=0A=
	      var res =3D new Array(i)=0A=
	      var key=0A=
	      while (i--) {=0A=
	        key =3D keys[i]=0A=
	        res[i] =3D {=0A=
	          $key: key,=0A=
	          $value: value[key]=0A=
	        }=0A=
	      }=0A=
	      this.converted =3D true=0A=
	      return res=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Helper to find the previous element that is an instance=0A=
	 * root node. This is necessary because a destroyed vm's=0A=
	 * element could still be lingering in the DOM before its=0A=
	 * leaving transition finishes, but its __vue__ reference=0A=
	 * should have been removed so we can skip them.=0A=
	 *=0A=
	 * If this is a block repeat, we want to make sure we only=0A=
	 * return vm that is bound to this v-repeat. (see #929)=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Comment|Text} anchor=0A=
	 * @return {Vue}=0A=
	 */=0A=
=0A=
	function findPrevVm (vm, anchor, id) {=0A=
	  var el =3D vm.$el.previousSibling=0A=
	  /* istanbul ignore if */=0A=
	  if (!el) return=0A=
	  while (=0A=
	    (!el.__vue__ || el.__vue__.$options._repeatId !=3D=3D id) &amp;&amp;=0A=
	    el !=3D=3D anchor=0A=
	  ) {=0A=
	    el =3D el.previousSibling=0A=
	  }=0A=
	  return el.__vue__=0A=
	}=0A=
=0A=
	/**=0A=
	 * Create a range array from given number.=0A=
	 *=0A=
	 * @param {Number} n=0A=
	 * @return {Array}=0A=
	 */=0A=
=0A=
	function range (n) {=0A=
	  var i =3D -1=0A=
	  var ret =3D new Array(n)=0A=
	  while (++i &lt; n) {=0A=
	    ret[i] =3D i=0A=
	  }=0A=
	  return ret=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convert a vms array to an object ref for v-ref on an=0A=
	 * Object value.=0A=
	 *=0A=
	 * @param {Array} vms=0A=
	 * @return {Object}=0A=
	 */=0A=
=0A=
	function toRefObject (vms) {=0A=
	  var ref =3D {}=0A=
	  for (var i =3D 0, l =3D vms.length; i &lt; l; i++) {=0A=
	    ref[vms[i].$key] =3D vms[i]=0A=
	  }=0A=
	  return ref=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if a value is a primitive one:=0A=
	 * String, Number, Boolean, null or undefined.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	function isPrimitive (value) {=0A=
	  var type =3D typeof value=0A=
	  return value =3D=3D null ||=0A=
	    type =3D=3D=3D 'string' ||=0A=
	    type =3D=3D=3D 'number' ||=0A=
	    type =3D=3D=3D 'boolean'=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 46 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var compiler =3D __webpack_require__(10)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
	var transition =3D __webpack_require__(30)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var cache =3D new Cache(1000)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var el =3D this.el=0A=
	    if (!el.__vue__) {=0A=
	      this.start =3D _.createAnchor('v-if-start')=0A=
	      this.end =3D _.createAnchor('v-if-end')=0A=
	      _.replace(el, this.end)=0A=
	      _.before(this.start, this.end)=0A=
	      if (_.isTemplate(el)) {=0A=
	        this.template =3D templateParser.parse(el, true)=0A=
	      } else {=0A=
	        this.template =3D document.createDocumentFragment()=0A=
	        this.template.appendChild(templateParser.clone(el))=0A=
	      }=0A=
	      // compile the nested partial=0A=
	      var cacheId =3D (this.vm.constructor.cid || '') + el.outerHTML=0A=
	      this.linker =3D cache.get(cacheId)=0A=
	      if (!this.linker) {=0A=
	        this.linker =3D compiler.compile(=0A=
	          this.template,=0A=
	          this.vm.$options,=0A=
	          true // partial=0A=
	        )=0A=
	        cache.put(cacheId, this.linker)=0A=
	      }=0A=
	    } else {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'v-if=3D"' + this.expression + '" cannot be ' +=0A=
	        'used on an instance root element.'=0A=
	      )=0A=
	      this.invalid =3D true=0A=
	    }=0A=
	  },=0A=
=0A=
	  update: function (value) {=0A=
	    if (this.invalid) return=0A=
	    if (value) {=0A=
	      // avoid duplicate compiles, since update() can be=0A=
	      // called with different truthy values=0A=
	      if (!this.unlink) {=0A=
	        this.link(=0A=
	          templateParser.clone(this.template),=0A=
	          this.linker=0A=
	        )=0A=
	      }=0A=
	    } else {=0A=
	      this.teardown()=0A=
	    }=0A=
	  },=0A=
=0A=
	  link: function (frag, linker) {=0A=
	    var vm =3D this.vm=0A=
	    this.unlink =3D linker(vm, frag, this._host /* important */)=0A=
	    transition.blockAppend(frag, this.end, vm)=0A=
	    // call attached for all the child components created=0A=
	    // during the compilation=0A=
	    if (_.inDoc(vm.$el)) {=0A=
	      var children =3D this.getContainedComponents()=0A=
	      if (children) children.forEach(callAttach)=0A=
	    }=0A=
	  },=0A=
=0A=
	  teardown: function () {=0A=
	    if (!this.unlink) return=0A=
	    // collect children beforehand=0A=
	    var children=0A=
	    if (_.inDoc(this.vm.$el)) {=0A=
	      children =3D this.getContainedComponents()=0A=
	    }=0A=
	    transition.blockRemove(this.start, this.end, this.vm)=0A=
	    if (children) children.forEach(callDetach)=0A=
	    this.unlink()=0A=
	    this.unlink =3D null=0A=
	  },=0A=
=0A=
	  getContainedComponents: function () {=0A=
	    var vm =3D this._host || this.vm=0A=
	    var start =3D this.start.nextSibling=0A=
	    var end =3D this.end=0A=
=0A=
	    function contains (c) {=0A=
	      var cur =3D start=0A=
	      var next=0A=
	      while (next !=3D=3D end) {=0A=
	        next =3D cur.nextSibling=0A=
	        if (=0A=
	          cur =3D=3D=3D c.$el ||=0A=
	          cur.contains &amp;&amp; cur.contains(c.$el)=0A=
	        ) {=0A=
	          return true=0A=
	        }=0A=
	        cur =3D next=0A=
	      }=0A=
	      return false=0A=
	    }=0A=
=0A=
	    return vm.$children.length &amp;&amp;=0A=
	      vm.$children.filter(contains)=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    if (this.unlink) this.unlink()=0A=
	  }=0A=
=0A=
	}=0A=
=0A=
	function callAttach (child) {=0A=
	  if (!child._isAttached) {=0A=
	    child._callHook('attached')=0A=
	  }=0A=
	}=0A=
=0A=
	function callDetach (child) {=0A=
	  if (child._isAttached) {=0A=
	    child._callHook('detached')=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 47 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	exports.content =3D __webpack_require__(48)=0A=
	exports.partial =3D __webpack_require__(49)=0A=
=0A=
=0A=
/***/ },=0A=
/* 48 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var clone =3D __webpack_require__(22).clone=0A=
=0A=
	// This is the elementDirective that handles &lt;content&gt;=0A=
	// transclusions. It relies on the raw content of an=0A=
	// instance being stored as `$options._content` during=0A=
	// the transclude phase.=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  bind: function () {=0A=
	    var vm =3D this.vm=0A=
	    var host =3D vm=0A=
	    // we need find the content context, which is the=0A=
	    // closest non-inline-repeater instance.=0A=
	    while (host.$options._repeat) {=0A=
	      host =3D host.$parent=0A=
	    }=0A=
	    var raw =3D host.$options._content=0A=
	    var content=0A=
	    if (!raw) {=0A=
	      this.fallback()=0A=
	      return=0A=
	    }=0A=
	    var context =3D host._context=0A=
	    var selector =3D this._checkParam('select')=0A=
	    if (!selector) {=0A=
	      // Default content=0A=
	      var self =3D this=0A=
	      var compileDefaultContent =3D function () {=0A=
	        self.compile(=0A=
	          extractFragment(raw.childNodes, raw, true),=0A=
	          context,=0A=
	          vm=0A=
	        )=0A=
	      }=0A=
	      if (!host._isCompiled) {=0A=
	        // defer until the end of instance compilation,=0A=
	        // because the default outlet must wait until all=0A=
	        // other possible outlets with selectors have picked=0A=
	        // out their contents.=0A=
	        host.$once('hook:compiled', compileDefaultContent)=0A=
	      } else {=0A=
	        compileDefaultContent()=0A=
	      }=0A=
	    } else {=0A=
	      // select content=0A=
	      var nodes =3D raw.querySelectorAll(selector)=0A=
	      if (nodes.length) {=0A=
	        content =3D extractFragment(nodes, raw)=0A=
	        if (content.hasChildNodes()) {=0A=
	          this.compile(content, context, vm)=0A=
	        } else {=0A=
	          this.fallback()=0A=
	        }=0A=
	      } else {=0A=
	        this.fallback()=0A=
	      }=0A=
	    }=0A=
	  },=0A=
=0A=
	  fallback: function () {=0A=
	    this.compile(_.extractContent(this.el, true), this.vm)=0A=
	  },=0A=
=0A=
	  compile: function (content, context, host) {=0A=
	    if (content &amp;&amp; context) {=0A=
	      this.unlink =3D context.$compile(content, host)=0A=
	    }=0A=
	    if (content) {=0A=
	      _.replace(this.el, content)=0A=
	    } else {=0A=
	      _.remove(this.el)=0A=
	    }=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    if (this.unlink) {=0A=
	      this.unlink()=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Extract qualified content nodes from a node list.=0A=
	 *=0A=
	 * @param {NodeList} nodes=0A=
	 * @param {Element} parent=0A=
	 * @param {Boolean} main=0A=
	 * @return {DocumentFragment}=0A=
	 */=0A=
=0A=
	function extractFragment (nodes, parent, main) {=0A=
	  var frag =3D document.createDocumentFragment()=0A=
	  for (var i =3D 0, l =3D nodes.length; i &lt; l; i++) {=0A=
	    var node =3D nodes[i]=0A=
	    // if this is the main outlet, we want to skip all=0A=
	    // previously selected nodes;=0A=
	    // otherwise, we want to mark the node as selected.=0A=
	    // clone the node so the original raw content remains=0A=
	    // intact. this ensures proper re-compilation in cases=0A=
	    // where the outlet is inside a conditional block=0A=
	    if (main &amp;&amp; !node.__v_selected) {=0A=
	      frag.appendChild(clone(node))=0A=
	    } else if (!main &amp;&amp; node.parentNode =3D=3D=3D parent) {=0A=
	      node.__v_selected =3D true=0A=
	      frag.appendChild(clone(node))=0A=
	    }=0A=
	  }=0A=
	  return frag=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 49 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var templateParser =3D __webpack_require__(22)=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var compiler =3D __webpack_require__(10)=0A=
	var Cache =3D __webpack_require__(14)=0A=
	var cache =3D new Cache(1000)=0A=
=0A=
	// v-partial reuses logic from v-if=0A=
	var vIf =3D __webpack_require__(46)=0A=
=0A=
	module.exports =3D {=0A=
=0A=
	  link: vIf.link,=0A=
	  teardown: vIf.teardown,=0A=
	  getContainedComponents: vIf.getContainedComponents,=0A=
=0A=
	  bind: function () {=0A=
	    var el =3D this.el=0A=
	    this.start =3D _.createAnchor('v-partial-start')=0A=
	    this.end =3D _.createAnchor('v-partial-end')=0A=
	    _.replace(el, this.end)=0A=
	    _.before(this.start, this.end)=0A=
	    var id =3D el.getAttribute('name')=0A=
	    var tokens =3D textParser.parse(id)=0A=
	    if (tokens) {=0A=
	      // dynamic partial=0A=
	      this.setupDynamic(tokens)=0A=
	    } else {=0A=
	      // static partial=0A=
	      this.insert(id)=0A=
	    }=0A=
	  },=0A=
=0A=
	  setupDynamic: function (tokens) {=0A=
	    var self =3D this=0A=
	    var exp =3D textParser.tokensToExp(tokens)=0A=
	    this.unwatch =3D this.vm.$watch(exp, function (value) {=0A=
	      self.teardown()=0A=
	      self.insert(value)=0A=
	    }, {=0A=
	      immediate: true,=0A=
	      user: false=0A=
	    })=0A=
	  },=0A=
=0A=
	  insert: function (id) {=0A=
	    var partial =3D _.resolveAsset(this.vm.$options, 'partials', id)=0A=
	    if (true) {=0A=
	      _.assertAsset(partial, 'partial', id)=0A=
	    }=0A=
	    if (partial) {=0A=
	      var frag =3D templateParser.parse(partial, true)=0A=
	      // cache partials based on constructor id.=0A=
	      var cacheId =3D (this.vm.constructor.cid || '') + partial=0A=
	      var linker =3D this.compile(frag, cacheId)=0A=
	      // this is provided by v-if=0A=
	      this.link(frag, linker)=0A=
	    }=0A=
	  },=0A=
=0A=
	  compile: function (frag, cacheId) {=0A=
	    var hit =3D cache.get(cacheId)=0A=
	    if (hit) return hit=0A=
	    var linker =3D compiler.compile(frag, this.vm.$options, true)=0A=
	    cache.put(cacheId, linker)=0A=
	    return linker=0A=
	  },=0A=
=0A=
	  unbind: function () {=0A=
	    if (this.unlink) this.unlink()=0A=
	    if (this.unwatch) this.unwatch()=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 50 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Stringify value.=0A=
	 *=0A=
	 * @param {Number} indent=0A=
	 */=0A=
=0A=
	exports.json =3D {=0A=
	  read: function (value, indent) {=0A=
	    return typeof value =3D=3D=3D 'string'=0A=
	      ? value=0A=
	      : JSON.stringify(value, null, Number(indent) || 2)=0A=
	  },=0A=
	  write: function (value) {=0A=
	    try {=0A=
	      return JSON.parse(value)=0A=
	    } catch (e) {=0A=
	      return value=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * 'abc' =3D&gt; 'Abc'=0A=
	 */=0A=
=0A=
	exports.capitalize =3D function (value) {=0A=
	  if (!value &amp;&amp; value !=3D=3D 0) return ''=0A=
	  value =3D value.toString()=0A=
	  return value.charAt(0).toUpperCase() + value.slice(1)=0A=
	}=0A=
=0A=
	/**=0A=
	 * 'abc' =3D&gt; 'ABC'=0A=
	 */=0A=
=0A=
	exports.uppercase =3D function (value) {=0A=
	  return (value || value =3D=3D=3D 0)=0A=
	    ? value.toString().toUpperCase()=0A=
	    : ''=0A=
	}=0A=
=0A=
	/**=0A=
	 * 'AbC' =3D&gt; 'abc'=0A=
	 */=0A=
=0A=
	exports.lowercase =3D function (value) {=0A=
	  return (value || value =3D=3D=3D 0)=0A=
	    ? value.toString().toLowerCase()=0A=
	    : ''=0A=
	}=0A=
=0A=
	/**=0A=
	 * 12345 =3D&gt; $12,345.00=0A=
	 *=0A=
	 * @param {String} sign=0A=
	 */=0A=
=0A=
	var digitsRE =3D /(\d{3})(?=3D\d)/g=0A=
	exports.currency =3D function (value, currency) {=0A=
	  value =3D parseFloat(value)=0A=
	  if (!isFinite(value) || (!value &amp;&amp; value !=3D=3D 0)) return ''=0A=
	  currency =3D currency !=3D null ? currency : '$'=0A=
	  var stringified =3D Math.abs(value).toFixed(2)=0A=
	  var _int =3D stringified.slice(0, -3)=0A=
	  var i =3D _int.length % 3=0A=
	  var head =3D i &gt; 0=0A=
	    ? (_int.slice(0, i) + (_int.length &gt; 3 ? ',' : ''))=0A=
	    : ''=0A=
	  var _float =3D stringified.slice(-3)=0A=
	  var sign =3D value &lt; 0 ? '-' : ''=0A=
	  return currency + sign + head +=0A=
	    _int.slice(i).replace(digitsRE, '$1,') +=0A=
	    _float=0A=
	}=0A=
=0A=
	/**=0A=
	 * 'item' =3D&gt; 'items'=0A=
	 *=0A=
	 * @params=0A=
	 *  an array of strings corresponding to=0A=
	 *  the single, double, triple ... forms of the word to=0A=
	 *  be pluralized. When the number to be pluralized=0A=
	 *  exceeds the length of the args, it will use the last=0A=
	 *  entry in the array.=0A=
	 *=0A=
	 *  e.g. ['single', 'double', 'triple', 'multiple']=0A=
	 */=0A=
=0A=
	exports.pluralize =3D function (value) {=0A=
	  var args =3D _.toArray(arguments, 1)=0A=
	  return args.length &gt; 1=0A=
	    ? (args[value % 10 - 1] || args[args.length - 1])=0A=
	    : (args[0] + (value =3D=3D=3D 1 ? '' : 's'))=0A=
	}=0A=
=0A=
	/**=0A=
	 * A special filter that takes a handler function,=0A=
	 * wraps it so it only gets triggered on specific=0A=
	 * keypresses. v-on only.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 */=0A=
=0A=
	var keyCodes =3D {=0A=
	  esc: 27,=0A=
	  tab: 9,=0A=
	  enter: 13,=0A=
	  space: 32,=0A=
	  'delete': 46,=0A=
	  up: 38,=0A=
	  left: 37,=0A=
	  right: 39,=0A=
	  down: 40=0A=
	}=0A=
=0A=
	exports.key =3D function (handler, key) {=0A=
	  if (!handler) return=0A=
	  var code =3D keyCodes[key]=0A=
	  if (!code) {=0A=
	    code =3D parseInt(key, 10)=0A=
	  }=0A=
	  return function (e) {=0A=
	    if (e.keyCode =3D=3D=3D code) {=0A=
	      return handler.call(this, e)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	// expose keycode hash=0A=
	exports.key.keyCodes =3D keyCodes=0A=
=0A=
	exports.debounce =3D function (handler, delay) {=0A=
	  if (!handler) return=0A=
	  if (!delay) {=0A=
	    delay =3D 300=0A=
	  }=0A=
	  return _.debounce(handler, delay)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Install special array filters=0A=
	 */=0A=
=0A=
	_.extend(exports, __webpack_require__(51))=0A=
=0A=
=0A=
/***/ },=0A=
/* 51 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Path =3D __webpack_require__(20)=0A=
=0A=
	/**=0A=
	 * Filter filter for v-repeat=0A=
	 *=0A=
	 * @param {String} searchKey=0A=
	 * @param {String} [delimiter]=0A=
	 * @param {String} dataKey=0A=
	 */=0A=
=0A=
	exports.filterBy =3D function (arr, search, delimiter /* ...dataKeys =
*/) {=0A=
	  if (search =3D=3D null) {=0A=
	    return arr=0A=
	  }=0A=
	  if (typeof search =3D=3D=3D 'function') {=0A=
	    return arr.filter(search)=0A=
	  }=0A=
	  // cast to lowercase string=0A=
	  search =3D ('' + search).toLowerCase()=0A=
	  // allow optional `in` delimiter=0A=
	  // because why not=0A=
	  var n =3D delimiter =3D=3D=3D 'in' ? 3 : 2=0A=
	  // extract and flatten keys=0A=
	  var keys =3D _.toArray(arguments, n).reduce(function (prev, cur) {=0A=
	    return prev.concat(cur)=0A=
	  }, [])=0A=
	  return arr.filter(function (item) {=0A=
	    if (keys.length) {=0A=
	      return keys.some(function (key) {=0A=
	        return contains(Path.get(item, key), search)=0A=
	      })=0A=
	    } else {=0A=
	      return contains(item, search)=0A=
	    }=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * Filter filter for v-repeat=0A=
	 *=0A=
	 * @param {String} sortKey=0A=
	 * @param {String} reverse=0A=
	 */=0A=
=0A=
	exports.orderBy =3D function (arr, sortKey, reverse) {=0A=
	  if (!sortKey) {=0A=
	    return arr=0A=
	  }=0A=
	  var order =3D 1=0A=
	  if (arguments.length &gt; 2) {=0A=
	    if (reverse =3D=3D=3D '-1') {=0A=
	      order =3D -1=0A=
	    } else {=0A=
	      order =3D reverse ? -1 : 1=0A=
	    }=0A=
	  }=0A=
	  // sort on a copy to avoid mutating original array=0A=
	  return arr.slice().sort(function (a, b) {=0A=
	    if (sortKey !=3D=3D '$key' &amp;&amp; sortKey !=3D=3D '$value') {=0A=
	      if (a &amp;&amp; '$value' in a) a =3D a.$value=0A=
	      if (b &amp;&amp; '$value' in b) b =3D b.$value=0A=
	    }=0A=
	    a =3D _.isObject(a) ? Path.get(a, sortKey) : a=0A=
	    b =3D _.isObject(b) ? Path.get(b, sortKey) : b=0A=
	    return a =3D=3D=3D b ? 0 : a &gt; b ? order : -order=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * String contain helper=0A=
	 *=0A=
	 * @param {*} val=0A=
	 * @param {String} search=0A=
	 */=0A=
=0A=
	function contains (val, search) {=0A=
	  var i=0A=
	  if (_.isPlainObject(val)) {=0A=
	    var keys =3D Object.keys(val)=0A=
	    i =3D keys.length=0A=
	    while (i--) {=0A=
	      if (contains(val[keys[i]], search)) {=0A=
	        return true=0A=
	      }=0A=
	    }=0A=
	  } else if (_.isArray(val)) {=0A=
	    i =3D val.length=0A=
	    while (i--) {=0A=
	      if (contains(val[i], search)) {=0A=
	        return true=0A=
	      }=0A=
	    }=0A=
	  } else if (val !=3D null) {=0A=
	    return val.toString().toLowerCase().indexOf(search) &gt; -1=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 52 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var mergeOptions =3D __webpack_require__(1).mergeOptions=0A=
=0A=
	/**=0A=
	 * The main init sequence. This is called for every=0A=
	 * instance, including ones that are created from extended=0A=
	 * constructors.=0A=
	 *=0A=
	 * @param {Object} options - this options object should be=0A=
	 *                           the result of merging class=0A=
	 *                           options and the options passed=0A=
	 *                           in to the constructor.=0A=
	 */=0A=
=0A=
	exports._init =3D function (options) {=0A=
=0A=
	  options =3D options || {}=0A=
=0A=
	  this.$el =3D null=0A=
	  this.$parent =3D options._parent=0A=
	  this.$root =3D options._root || this=0A=
	  this.$children =3D []=0A=
	  this.$ =3D {}           // child vm references=0A=
	  this.$$ =3D {}          // element references=0A=
	  this._watchers =3D []   // all watchers as an array=0A=
	  this._directives =3D [] // all directives=0A=
	  this._childCtors =3D {} // inherit:true constructors=0A=
=0A=
	  // a flag to avoid this being observed=0A=
	  this._isVue =3D true=0A=
=0A=
	  // events bookkeeping=0A=
	  this._events =3D {}            // registered callbacks=0A=
	  this._eventsCount =3D {}       // for $broadcast optimization=0A=
	  this._eventCancelled =3D false // for event cancellation=0A=
=0A=
	  // fragment instance properties=0A=
	  this._isFragment =3D false=0A=
	  this._fragmentStart =3D    // @type {CommentNode}=0A=
	  this._fragmentEnd =3D null // @type {CommentNode}=0A=
=0A=
	  // lifecycle state=0A=
	  this._isCompiled =3D=0A=
	  this._isDestroyed =3D=0A=
	  this._isReady =3D=0A=
	  this._isAttached =3D=0A=
	  this._isBeingDestroyed =3D false=0A=
	  this._unlinkFn =3D null=0A=
=0A=
	  // context: the scope in which the component was used,=0A=
	  // and the scope in which props and contents of this=0A=
	  // instance should be compiled in.=0A=
	  this._context =3D=0A=
	    options._context ||=0A=
	    options._parent=0A=
=0A=
	  // push self into parent / transclusion host=0A=
	  if (this.$parent) {=0A=
	    this.$parent.$children.push(this)=0A=
	  }=0A=
=0A=
	  // props used in v-repeat diffing=0A=
	  this._reused =3D false=0A=
	  this._staggerOp =3D null=0A=
=0A=
	  // merge options.=0A=
	  options =3D this.$options =3D mergeOptions(=0A=
	    this.constructor.options,=0A=
	    options,=0A=
	    this=0A=
	  )=0A=
=0A=
	  // initialize data as empty object.=0A=
	  // it will be filled up in _initScope().=0A=
	  this._data =3D {}=0A=
=0A=
	  // initialize data observation and scope inheritance.=0A=
	  this._initScope()=0A=
=0A=
	  // setup event system and option events.=0A=
	  this._initEvents()=0A=
=0A=
	  // call created hook=0A=
	  this._callHook('created')=0A=
=0A=
	  // if `el` option is passed, start compilation.=0A=
	  if (options.el) {=0A=
	    this.$mount(options.el)=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 53 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var inDoc =3D _.inDoc=0A=
=0A=
	/**=0A=
	 * Setup the instance's option events &amp; watchers.=0A=
	 * If the value is a string, we pull it from the=0A=
	 * instance's methods by name.=0A=
	 */=0A=
=0A=
	exports._initEvents =3D function () {=0A=
	  var options =3D this.$options=0A=
	  registerCallbacks(this, '$on', options.events)=0A=
	  registerCallbacks(this, '$watch', options.watch)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Register callbacks for option events and watchers.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {String} action=0A=
	 * @param {Object} hash=0A=
	 */=0A=
=0A=
	function registerCallbacks (vm, action, hash) {=0A=
	  if (!hash) return=0A=
	  var handlers, key, i, j=0A=
	  for (key in hash) {=0A=
	    handlers =3D hash[key]=0A=
	    if (_.isArray(handlers)) {=0A=
	      for (i =3D 0, j =3D handlers.length; i &lt; j; i++) {=0A=
	        register(vm, action, key, handlers[i])=0A=
	      }=0A=
	    } else {=0A=
	      register(vm, action, key, handlers)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Helper to register an event/watch callback.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {String} action=0A=
	 * @param {String} key=0A=
	 * @param {Function|String|Object} handler=0A=
	 * @param {Object} [options]=0A=
	 */=0A=
=0A=
	function register (vm, action, key, handler, options) {=0A=
	  var type =3D typeof handler=0A=
	  if (type =3D=3D=3D 'function') {=0A=
	    vm[action](key, handler, options)=0A=
	  } else if (type =3D=3D=3D 'string') {=0A=
	    var methods =3D vm.$options.methods=0A=
	    var method =3D methods &amp;&amp; methods[handler]=0A=
	    if (method) {=0A=
	      vm[action](key, method, options)=0A=
	    } else {=0A=
	      ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	        'Unknown method: "' + handler + '" when ' +=0A=
	        'registering callback for ' + action +=0A=
	        ': "' + key + '".'=0A=
	      )=0A=
	    }=0A=
	  } else if (handler &amp;&amp; type =3D=3D=3D 'object') {=0A=
	    register(vm, action, key, handler.handler, handler)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Setup recursive attached/detached calls=0A=
	 */=0A=
=0A=
	exports._initDOMHooks =3D function () {=0A=
	  this.$on('hook:attached', onAttached)=0A=
	  this.$on('hook:detached', onDetached)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Callback to recursively call attached hook on children=0A=
	 */=0A=
=0A=
	function onAttached () {=0A=
	  if (!this._isAttached) {=0A=
	    this._isAttached =3D true=0A=
	    this.$children.forEach(callAttach)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Iterator to call attached hook=0A=
	 *=0A=
	 * @param {Vue} child=0A=
	 */=0A=
=0A=
	function callAttach (child) {=0A=
	  if (!child._isAttached &amp;&amp; inDoc(child.$el)) {=0A=
	    child._callHook('attached')=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Callback to recursively call detached hook on children=0A=
	 */=0A=
=0A=
	function onDetached () {=0A=
	  if (this._isAttached) {=0A=
	    this._isAttached =3D false=0A=
	    this.$children.forEach(callDetach)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Iterator to call detached hook=0A=
	 *=0A=
	 * @param {Vue} child=0A=
	 */=0A=
=0A=
	function callDetach (child) {=0A=
	  if (child._isAttached &amp;&amp; !inDoc(child.$el)) {=0A=
	    child._callHook('detached')=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Trigger all handlers for a hook=0A=
	 *=0A=
	 * @param {String} hook=0A=
	 */=0A=
=0A=
	exports._callHook =3D function (hook) {=0A=
	  var handlers =3D this.$options[hook]=0A=
	  if (handlers) {=0A=
	    for (var i =3D 0, j =3D handlers.length; i &lt; j; i++) {=0A=
	      handlers[i].call(this)=0A=
	    }=0A=
	  }=0A=
	  this.$emit('hook:' + hook)=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 54 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var compiler =3D __webpack_require__(10)=0A=
	var Observer =3D __webpack_require__(55)=0A=
	var Dep =3D __webpack_require__(18)=0A=
	var Watcher =3D __webpack_require__(17)=0A=
=0A=
	/**=0A=
	 * Setup the scope of an instance, which contains:=0A=
	 * - observed data=0A=
	 * - computed properties=0A=
	 * - user methods=0A=
	 * - meta properties=0A=
	 */=0A=
=0A=
	exports._initScope =3D function () {=0A=
	  this._initProps()=0A=
	  this._initMeta()=0A=
	  this._initMethods()=0A=
	  this._initData()=0A=
	  this._initComputed()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize props.=0A=
	 */=0A=
=0A=
	exports._initProps =3D function () {=0A=
	  var options =3D this.$options=0A=
	  var el =3D options.el=0A=
	  var props =3D options.props=0A=
	  if (props &amp;&amp; !el) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      'Props will not be compiled if no `el` option is ' +=0A=
	      'provided at instantiation.'=0A=
	    )=0A=
	  }=0A=
	  // make sure to convert string selectors into element now=0A=
	  el =3D options.el =3D _.query(el)=0A=
	  this._propsUnlinkFn =3D el &amp;&amp; el.nodeType =3D=3D=3D 1 =
&amp;&amp; props=0A=
	    ? compiler.compileAndLinkProps(=0A=
	        this, el, props=0A=
	      )=0A=
	    : null=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize the data.=0A=
	 */=0A=
=0A=
	exports._initData =3D function () {=0A=
	  var propsData =3D this._data=0A=
	  var optionsDataFn =3D this.$options.data=0A=
	  var optionsData =3D optionsDataFn &amp;&amp; optionsDataFn()=0A=
	  if (optionsData) {=0A=
	    this._data =3D optionsData=0A=
	    for (var prop in propsData) {=0A=
	      if (=0A=
	        this._props[prop].raw !=3D=3D null ||=0A=
	        !optionsData.hasOwnProperty(prop)=0A=
	      ) {=0A=
	        optionsData.$set(prop, propsData[prop])=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  var data =3D this._data=0A=
	  // proxy data on instance=0A=
	  var keys =3D Object.keys(data)=0A=
	  var i, key=0A=
	  i =3D keys.length=0A=
	  while (i--) {=0A=
	    key =3D keys[i]=0A=
	    if (!_.isReserved(key)) {=0A=
	      this._proxy(key)=0A=
	    }=0A=
	  }=0A=
	  // observe data=0A=
	  Observer.create(data, this)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Swap the isntance's $data. Called in $data's setter.=0A=
	 *=0A=
	 * @param {Object} newData=0A=
	 */=0A=
=0A=
	exports._setData =3D function (newData) {=0A=
	  newData =3D newData || {}=0A=
	  var oldData =3D this._data=0A=
	  this._data =3D newData=0A=
	  var keys, key, i=0A=
	  // copy props.=0A=
	  // this should only happen during a v-repeat of component=0A=
	  // that also happens to have compiled props.=0A=
	  var props =3D this.$options.props=0A=
	  if (props) {=0A=
	    i =3D props.length=0A=
	    while (i--) {=0A=
	      key =3D props[i].name=0A=
	      if (key !=3D=3D '$data' &amp;&amp; !newData.hasOwnProperty(key)) {=0A=
	        newData.$set(key, oldData[key])=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  // unproxy keys not present in new data=0A=
	  keys =3D Object.keys(oldData)=0A=
	  i =3D keys.length=0A=
	  while (i--) {=0A=
	    key =3D keys[i]=0A=
	    if (!_.isReserved(key) &amp;&amp; !(key in newData)) {=0A=
	      this._unproxy(key)=0A=
	    }=0A=
	  }=0A=
	  // proxy keys not already proxied,=0A=
	  // and trigger change for changed values=0A=
	  keys =3D Object.keys(newData)=0A=
	  i =3D keys.length=0A=
	  while (i--) {=0A=
	    key =3D keys[i]=0A=
	    if (!this.hasOwnProperty(key) &amp;&amp; !_.isReserved(key)) {=0A=
	      // new property=0A=
	      this._proxy(key)=0A=
	    }=0A=
	  }=0A=
	  oldData.__ob__.removeVm(this)=0A=
	  Observer.create(newData, this)=0A=
	  this._digest()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Proxy a property, so that=0A=
	 * vm.prop =3D=3D=3D vm._data.prop=0A=
	 *=0A=
	 * @param {String} key=0A=
	 */=0A=
=0A=
	exports._proxy =3D function (key) {=0A=
	  // need to store ref to self here=0A=
	  // because these getter/setters might=0A=
	  // be called by child instances!=0A=
	  var self =3D this=0A=
	  Object.defineProperty(self, key, {=0A=
	    configurable: true,=0A=
	    enumerable: true,=0A=
	    get: function proxyGetter () {=0A=
	      return self._data[key]=0A=
	    },=0A=
	    set: function proxySetter (val) {=0A=
	      self._data[key] =3D val=0A=
	    }=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * Unproxy a property.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 */=0A=
=0A=
	exports._unproxy =3D function (key) {=0A=
	  delete this[key]=0A=
	}=0A=
=0A=
	/**=0A=
	 * Force update on every watcher in scope.=0A=
	 */=0A=
=0A=
	exports._digest =3D function () {=0A=
	  var i =3D this._watchers.length=0A=
	  while (i--) {=0A=
	    this._watchers[i].update(true) // shallow updates=0A=
	  }=0A=
	  var children =3D this.$children=0A=
	  i =3D children.length=0A=
	  while (i--) {=0A=
	    var child =3D children[i]=0A=
	    if (child.$options.inherit) {=0A=
	      child._digest()=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Setup computed properties. They are essentially=0A=
	 * special getter/setters=0A=
	 */=0A=
=0A=
	function noop () {}=0A=
	exports._initComputed =3D function () {=0A=
	  var computed =3D this.$options.computed=0A=
	  if (computed) {=0A=
	    for (var key in computed) {=0A=
	      var userDef =3D computed[key]=0A=
	      var def =3D {=0A=
	        enumerable: true,=0A=
	        configurable: true=0A=
	      }=0A=
	      if (typeof userDef =3D=3D=3D 'function') {=0A=
	        def.get =3D makeComputedGetter(userDef, this)=0A=
	        def.set =3D noop=0A=
	      } else {=0A=
	        def.get =3D userDef.get=0A=
	          ? userDef.cache !=3D=3D false=0A=
	            ? makeComputedGetter(userDef.get, this)=0A=
	            : _.bind(userDef.get, this)=0A=
	          : noop=0A=
	        def.set =3D userDef.set=0A=
	          ? _.bind(userDef.set, this)=0A=
	          : noop=0A=
	      }=0A=
	      Object.defineProperty(this, key, def)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	function makeComputedGetter (getter, owner) {=0A=
	  var watcher =3D new Watcher(owner, getter, null, {=0A=
	    lazy: true=0A=
	  })=0A=
	  return function computedGetter () {=0A=
	    if (watcher.dirty) {=0A=
	      watcher.evaluate()=0A=
	    }=0A=
	    if (Dep.target) {=0A=
	      watcher.depend()=0A=
	    }=0A=
	    return watcher.value=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Setup instance methods. Methods must be bound to the=0A=
	 * instance since they might be called by children=0A=
	 * inheriting them.=0A=
	 */=0A=
=0A=
	exports._initMethods =3D function () {=0A=
	  var methods =3D this.$options.methods=0A=
	  if (methods) {=0A=
	    for (var key in methods) {=0A=
	      this[key] =3D _.bind(methods[key], this)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize meta information like $index, $key &amp; $value.=0A=
	 */=0A=
=0A=
	exports._initMeta =3D function () {=0A=
	  var metas =3D this.$options._meta=0A=
	  if (metas) {=0A=
	    for (var key in metas) {=0A=
	      this._defineMeta(key, metas[key])=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Define a meta property, e.g $index, $key, $value=0A=
	 * which only exists on the vm instance but not in $data.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} value=0A=
	 */=0A=
=0A=
	exports._defineMeta =3D function (key, value) {=0A=
	  var dep =3D new Dep()=0A=
	  Object.defineProperty(this, key, {=0A=
	    get: function metaGetter () {=0A=
	      if (Dep.target) {=0A=
	        dep.depend()=0A=
	      }=0A=
	      return value=0A=
	    },=0A=
	    set: function metaSetter (val) {=0A=
	      if (val !=3D=3D value) {=0A=
	        value =3D val=0A=
	        dep.notify()=0A=
	      }=0A=
	    }=0A=
	  })=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 55 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var Dep =3D __webpack_require__(18)=0A=
	var arrayMethods =3D __webpack_require__(56)=0A=
	var arrayKeys =3D Object.getOwnPropertyNames(arrayMethods)=0A=
	__webpack_require__(57)=0A=
=0A=
	/**=0A=
	 * Observer class that are attached to each observed=0A=
	 * object. Once attached, the observer converts target=0A=
	 * object's property keys into getter/setters that=0A=
	 * collect dependencies and dispatches updates.=0A=
	 *=0A=
	 * @param {Array|Object} value=0A=
	 * @constructor=0A=
	 */=0A=
=0A=
	function Observer (value) {=0A=
	  this.value =3D value=0A=
	  this.dep =3D new Dep()=0A=
	  _.define(value, '__ob__', this)=0A=
	  if (_.isArray(value)) {=0A=
	    var augment =3D config.proto &amp;&amp; _.hasProto=0A=
	      ? protoAugment=0A=
	      : copyAugment=0A=
	    augment(value, arrayMethods, arrayKeys)=0A=
	    this.observeArray(value)=0A=
	  } else {=0A=
	    this.walk(value)=0A=
	  }=0A=
	}=0A=
=0A=
	// Static methods=0A=
=0A=
	/**=0A=
	 * Attempt to create an observer instance for a value,=0A=
	 * returns the new observer if successfully observed,=0A=
	 * or the existing observer if the value already has one.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @param {Vue} [vm]=0A=
	 * @return {Observer|undefined}=0A=
	 * @static=0A=
	 */=0A=
=0A=
	Observer.create =3D function (value, vm) {=0A=
	  var ob=0A=
	  if (=0A=
	    value &amp;&amp;=0A=
	    value.hasOwnProperty('__ob__') &amp;&amp;=0A=
	    value.__ob__ instanceof Observer=0A=
	  ) {=0A=
	    ob =3D value.__ob__=0A=
	  } else if (=0A=
	    (_.isArray(value) || _.isPlainObject(value)) &amp;&amp;=0A=
	    !Object.isFrozen(value) &amp;&amp;=0A=
	    !value._isVue=0A=
	  ) {=0A=
	    ob =3D new Observer(value)=0A=
	  }=0A=
	  if (ob &amp;&amp; vm) {=0A=
	    ob.addVm(vm)=0A=
	  }=0A=
	  return ob=0A=
	}=0A=
=0A=
	// Instance methods=0A=
=0A=
	/**=0A=
	 * Walk through each property and convert them into=0A=
	 * getter/setters. This method should only be called when=0A=
	 * value type is Object. Properties prefixed with `$` or `_`=0A=
	 * and accessor properties are ignored.=0A=
	 *=0A=
	 * @param {Object} obj=0A=
	 */=0A=
=0A=
	Observer.prototype.walk =3D function (obj) {=0A=
	  var keys =3D Object.keys(obj)=0A=
	  var i =3D keys.length=0A=
	  while (i--) {=0A=
	    this.convert(keys[i], obj[keys[i]])=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Try to carete an observer for a child value,=0A=
	 * and if value is array, link dep to the array.=0A=
	 *=0A=
	 * @param {*} val=0A=
	 * @return {Dep|undefined}=0A=
	 */=0A=
=0A=
	Observer.prototype.observe =3D function (val) {=0A=
	  return Observer.create(val)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Observe a list of Array items.=0A=
	 *=0A=
	 * @param {Array} items=0A=
	 */=0A=
=0A=
	Observer.prototype.observeArray =3D function (items) {=0A=
	  var i =3D items.length=0A=
	  while (i--) {=0A=
	    var ob =3D this.observe(items[i])=0A=
	    if (ob) {=0A=
	      (ob.parents || (ob.parents =3D [])).push(this)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove self from the parent list of removed objects.=0A=
	 *=0A=
	 * @param {Array} items=0A=
	 */=0A=
=0A=
	Observer.prototype.unobserveArray =3D function (items) {=0A=
	  var i =3D items.length=0A=
	  while (i--) {=0A=
	    var ob =3D items[i] &amp;&amp; items[i].__ob__=0A=
	    if (ob) {=0A=
	      ob.parents.$remove(this)=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Notify self dependency, and also parent Array dependency=0A=
	 * if any.=0A=
	 */=0A=
=0A=
	Observer.prototype.notify =3D function () {=0A=
	  this.dep.notify()=0A=
	  var parents =3D this.parents=0A=
	  if (parents) {=0A=
	    var i =3D parents.length=0A=
	    while (i--) {=0A=
	      parents[i].notify()=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convert a property into getter/setter so we can emit=0A=
	 * the events when the property is accessed/changed.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	Observer.prototype.convert =3D function (key, val) {=0A=
	  var ob =3D this=0A=
	  var childOb =3D ob.observe(val)=0A=
	  var dep =3D new Dep()=0A=
	  Object.defineProperty(ob.value, key, {=0A=
	    enumerable: true,=0A=
	    configurable: true,=0A=
	    get: function () {=0A=
	      if (Dep.target) {=0A=
	        dep.depend()=0A=
	        if (childOb) {=0A=
	          childOb.dep.depend()=0A=
	        }=0A=
	      }=0A=
	      return val=0A=
	    },=0A=
	    set: function (newVal) {=0A=
	      if (newVal =3D=3D=3D val) return=0A=
	      val =3D newVal=0A=
	      childOb =3D ob.observe(newVal)=0A=
	      dep.notify()=0A=
	    }=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add an owner vm, so that when $add/$delete mutations=0A=
	 * happen we can notify owner vms to proxy the keys and=0A=
	 * digest the watchers. This is only called when the object=0A=
	 * is observed as an instance's root $data.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	Observer.prototype.addVm =3D function (vm) {=0A=
	  (this.vms || (this.vms =3D [])).push(vm)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove an owner vm. This is called when the object is=0A=
	 * swapped out as an instance's $data object.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 */=0A=
=0A=
	Observer.prototype.removeVm =3D function (vm) {=0A=
	  this.vms.$remove(vm)=0A=
	}=0A=
=0A=
	// helpers=0A=
=0A=
	/**=0A=
	 * Augment an target Object or Array by intercepting=0A=
	 * the prototype chain using __proto__=0A=
	 *=0A=
	 * @param {Object|Array} target=0A=
	 * @param {Object} proto=0A=
	 */=0A=
=0A=
	function protoAugment (target, src) {=0A=
	  target.__proto__ =3D src=0A=
	}=0A=
=0A=
	/**=0A=
	 * Augment an target Object or Array by defining=0A=
	 * hidden properties.=0A=
	 *=0A=
	 * @param {Object|Array} target=0A=
	 * @param {Object} proto=0A=
	 */=0A=
=0A=
	function copyAugment (target, src, keys) {=0A=
	  var i =3D keys.length=0A=
	  var key=0A=
	  while (i--) {=0A=
	    key =3D keys[i]=0A=
	    _.define(target, key, src[key])=0A=
	  }=0A=
	}=0A=
=0A=
	module.exports =3D Observer=0A=
=0A=
=0A=
/***/ },=0A=
/* 56 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var arrayProto =3D Array.prototype=0A=
	var arrayMethods =3D Object.create(arrayProto)=0A=
=0A=
	/**=0A=
	 * Intercept mutating methods and emit events=0A=
	 */=0A=
=0A=
	;[=0A=
	  'push',=0A=
	  'pop',=0A=
	  'shift',=0A=
	  'unshift',=0A=
	  'splice',=0A=
	  'sort',=0A=
	  'reverse'=0A=
	]=0A=
	.forEach(function (method) {=0A=
	  // cache original method=0A=
	  var original =3D arrayProto[method]=0A=
	  _.define(arrayMethods, method, function mutator () {=0A=
	    // avoid leaking arguments:=0A=
	    // http://jsperf.com/closure-with-arguments=0A=
	    var i =3D arguments.length=0A=
	    var args =3D new Array(i)=0A=
	    while (i--) {=0A=
	      args[i] =3D arguments[i]=0A=
	    }=0A=
	    var result =3D original.apply(this, args)=0A=
	    var ob =3D this.__ob__=0A=
	    var inserted, removed=0A=
	    switch (method) {=0A=
	      case 'push':=0A=
	        inserted =3D args=0A=
	        break=0A=
	      case 'unshift':=0A=
	        inserted =3D args=0A=
	        break=0A=
	      case 'splice':=0A=
	        inserted =3D args.slice(2)=0A=
	        removed =3D result=0A=
	        break=0A=
	      case 'pop':=0A=
	      case 'shift':=0A=
	        removed =3D [result]=0A=
	        break=0A=
	    }=0A=
	    if (inserted) ob.observeArray(inserted)=0A=
	    if (removed) ob.unobserveArray(removed)=0A=
	    // notify change=0A=
	    ob.notify()=0A=
	    return result=0A=
	  })=0A=
	})=0A=
=0A=
	/**=0A=
	 * Swap the element at the given index with a new value=0A=
	 * and emits corresponding event.=0A=
	 *=0A=
	 * @param {Number} index=0A=
	 * @param {*} val=0A=
	 * @return {*} - replaced element=0A=
	 */=0A=
=0A=
	_.define(=0A=
	  arrayProto,=0A=
	  '$set',=0A=
	  function $set (index, val) {=0A=
	    if (index &gt;=3D this.length) {=0A=
	      this.length =3D index + 1=0A=
	    }=0A=
	    return this.splice(index, 1, val)[0]=0A=
	  }=0A=
	)=0A=
=0A=
	/**=0A=
	 * Convenience method to remove the element at given index.=0A=
	 *=0A=
	 * @param {Number} index=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	_.define(=0A=
	  arrayProto,=0A=
	  '$remove',=0A=
	  function $remove (index) {=0A=
	    /* istanbul ignore if */=0A=
	    if (!this.length) return=0A=
	    if (typeof index !=3D=3D 'number') {=0A=
	      index =3D _.indexOf(this, index)=0A=
	    }=0A=
	    if (index &gt; -1) {=0A=
	      return this.splice(index, 1)=0A=
	    }=0A=
	  }=0A=
	)=0A=
=0A=
	module.exports =3D arrayMethods=0A=
=0A=
=0A=
/***/ },=0A=
/* 57 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var objProto =3D Object.prototype=0A=
=0A=
	/**=0A=
	 * Add a new property to an observed object=0A=
	 * and emits corresponding event=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} val=0A=
	 * @public=0A=
	 */=0A=
=0A=
	_.define(=0A=
	  objProto,=0A=
	  '$add',=0A=
	  function $add (key, val) {=0A=
	    if (this.hasOwnProperty(key)) return=0A=
	    var ob =3D this.__ob__=0A=
	    if (!ob || _.isReserved(key)) {=0A=
	      this[key] =3D val=0A=
	      return=0A=
	    }=0A=
	    ob.convert(key, val)=0A=
	    ob.notify()=0A=
	    if (ob.vms) {=0A=
	      var i =3D ob.vms.length=0A=
	      while (i--) {=0A=
	        var vm =3D ob.vms[i]=0A=
	        vm._proxy(key)=0A=
	        vm._digest()=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	)=0A=
=0A=
	/**=0A=
	 * Set a property on an observed object, calling add to=0A=
	 * ensure the property is observed.=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} val=0A=
	 * @public=0A=
	 */=0A=
=0A=
	_.define(=0A=
	  objProto,=0A=
	  '$set',=0A=
	  function $set (key, val) {=0A=
	    this.$add(key, val)=0A=
	    this[key] =3D val=0A=
	  }=0A=
	)=0A=
=0A=
	/**=0A=
	 * Deletes a property from an observed object=0A=
	 * and emits corresponding event=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @public=0A=
	 */=0A=
=0A=
	_.define(=0A=
	  objProto,=0A=
	  '$delete',=0A=
	  function $delete (key) {=0A=
	    if (!this.hasOwnProperty(key)) return=0A=
	    delete this[key]=0A=
	    var ob =3D this.__ob__=0A=
	    if (!ob || _.isReserved(key)) {=0A=
	      return=0A=
	    }=0A=
	    ob.notify()=0A=
	    if (ob.vms) {=0A=
	      var i =3D ob.vms.length=0A=
	      while (i--) {=0A=
	        var vm =3D ob.vms[i]=0A=
	        vm._unproxy(key)=0A=
	        vm._digest()=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	)=0A=
=0A=
=0A=
/***/ },=0A=
/* 58 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var Directive =3D __webpack_require__(59)=0A=
	var compiler =3D __webpack_require__(10)=0A=
=0A=
	/**=0A=
	 * Transclude, compile and link element.=0A=
	 *=0A=
	 * If a pre-compiled linker is available, that means the=0A=
	 * passed in element will be pre-transcluded and compiled=0A=
	 * as well - all we need to do is to call the linker.=0A=
	 *=0A=
	 * Otherwise we need to call transclude/compile/link here.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 * @return {Element}=0A=
	 */=0A=
=0A=
	exports._compile =3D function (el) {=0A=
	  var options =3D this.$options=0A=
	  var host =3D this._host=0A=
	  if (options._linkFn) {=0A=
	    // pre-transcluded with linker, just use it=0A=
	    this._initElement(el)=0A=
	    this._unlinkFn =3D options._linkFn(this, el, host)=0A=
	  } else {=0A=
	    // transclude and init element=0A=
	    // transclude can potentially replace original=0A=
	    // so we need to keep reference; this step also injects=0A=
	    // the template and caches the original attributes=0A=
	    // on the container node and replacer node.=0A=
	    var original =3D el=0A=
	    el =3D compiler.transclude(el, options)=0A=
	    this._initElement(el)=0A=
=0A=
	    // root is always compiled per-instance, because=0A=
	    // container attrs and props can be different every time.=0A=
	    var rootLinker =3D compiler.compileRoot(el, options)=0A=
=0A=
	    // compile and link the rest=0A=
	    var contentLinkFn=0A=
	    var ctor =3D this.constructor=0A=
	    // component compilation can be cached=0A=
	    // as long as it's not using inline-template=0A=
	    if (options._linkerCachable) {=0A=
	      contentLinkFn =3D ctor.linker=0A=
	      if (!contentLinkFn) {=0A=
	        contentLinkFn =3D ctor.linker =3D compiler.compile(el, options)=0A=
	      }=0A=
	    }=0A=
=0A=
	    // link phase=0A=
	    var rootUnlinkFn =3D rootLinker(this, el)=0A=
	    var contentUnlinkFn =3D contentLinkFn=0A=
	      ? contentLinkFn(this, el)=0A=
	      : compiler.compile(el, options)(this, el, host)=0A=
=0A=
	    // register composite unlink function=0A=
	    // to be called during instance destruction=0A=
	    this._unlinkFn =3D function () {=0A=
	      rootUnlinkFn()=0A=
	      // passing destroying: true to avoid searching and=0A=
	      // splicing the directives=0A=
	      contentUnlinkFn(true)=0A=
	    }=0A=
=0A=
	    // finally replace original=0A=
	    if (options.replace) {=0A=
	      _.replace(original, el)=0A=
	    }=0A=
	  }=0A=
	  return el=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize instance element. Called in the public=0A=
	 * $mount() method.=0A=
	 *=0A=
	 * @param {Element} el=0A=
	 */=0A=
=0A=
	exports._initElement =3D function (el) {=0A=
	  if (el instanceof DocumentFragment) {=0A=
	    this._isFragment =3D true=0A=
	    this.$el =3D this._fragmentStart =3D el.firstChild=0A=
	    this._fragmentEnd =3D el.lastChild=0A=
	    // set persisted text anchors to empty=0A=
	    if (this._fragmentStart.nodeType =3D=3D=3D 3) {=0A=
	      this._fragmentStart.data =3D this._fragmentEnd.data =3D ''=0A=
	    }=0A=
	    this._blockFragment =3D el=0A=
	  } else {=0A=
	    this.$el =3D el=0A=
	  }=0A=
	  this.$el.__vue__ =3D this=0A=
	  this._callHook('beforeCompile')=0A=
	}=0A=
=0A=
	/**=0A=
	 * Create and bind a directive to an element.=0A=
	 *=0A=
	 * @param {String} name - directive name=0A=
	 * @param {Node} node   - target node=0A=
	 * @param {Object} desc - parsed directive descriptor=0A=
	 * @param {Object} def  - directive definition object=0A=
	 * @param {Vue|undefined} host - transclusion host component=0A=
	 */=0A=
=0A=
	exports._bindDir =3D function (name, node, desc, def, host) {=0A=
	  this._directives.push(=0A=
	    new Directive(name, node, this, desc, def, host)=0A=
	  )=0A=
	}=0A=
=0A=
	/**=0A=
	 * Teardown an instance, unobserves the data, unbind all the=0A=
	 * directives, turn off all the event listeners, etc.=0A=
	 *=0A=
	 * @param {Boolean} remove - whether to remove the DOM node.=0A=
	 * @param {Boolean} deferCleanup - if true, defer cleanup to=0A=
	 *                                 be called later=0A=
	 */=0A=
=0A=
	exports._destroy =3D function (remove, deferCleanup) {=0A=
	  if (this._isBeingDestroyed) {=0A=
	    return=0A=
	  }=0A=
	  this._callHook('beforeDestroy')=0A=
	  this._isBeingDestroyed =3D true=0A=
	  var i=0A=
	  // remove self from parent. only necessary=0A=
	  // if parent is not being destroyed as well.=0A=
	  var parent =3D this.$parent=0A=
	  if (parent &amp;&amp; !parent._isBeingDestroyed) {=0A=
	    parent.$children.$remove(this)=0A=
	  }=0A=
	  // destroy all children.=0A=
	  i =3D this.$children.length=0A=
	  while (i--) {=0A=
	    this.$children[i].$destroy()=0A=
	  }=0A=
	  // teardown props=0A=
	  if (this._propsUnlinkFn) {=0A=
	    this._propsUnlinkFn()=0A=
	  }=0A=
	  // teardown all directives. this also tearsdown all=0A=
	  // directive-owned watchers.=0A=
	  if (this._unlinkFn) {=0A=
	    this._unlinkFn()=0A=
	  }=0A=
	  i =3D this._watchers.length=0A=
	  while (i--) {=0A=
	    this._watchers[i].teardown()=0A=
	  }=0A=
	  // remove reference to self on $el=0A=
	  if (this.$el) {=0A=
	    this.$el.__vue__ =3D null=0A=
	  }=0A=
	  // remove DOM element=0A=
	  var self =3D this=0A=
	  if (remove &amp;&amp; this.$el) {=0A=
	    this.$remove(function () {=0A=
	      self._cleanup()=0A=
	    })=0A=
	  } else if (!deferCleanup) {=0A=
	    this._cleanup()=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Clean up to ensure garbage collection.=0A=
	 * This is called after the leave transition if there=0A=
	 * is any.=0A=
	 */=0A=
=0A=
	exports._cleanup =3D function () {=0A=
	  // remove reference from data ob=0A=
	  // frozen object may not have observer.=0A=
	  if (this._data.__ob__) {=0A=
	    this._data.__ob__.removeVm(this)=0A=
	  }=0A=
	  // Clean up references to private properties and other=0A=
	  // instances. preserve reference to _data so that proxy=0A=
	  // accessors still work. The only potential side effect=0A=
	  // here is that mutating the instance after it's destroyed=0A=
	  // may affect the state of other components that are still=0A=
	  // observing the same object, but that seems to be a=0A=
	  // reasonable responsibility for the user rather than=0A=
	  // always throwing an error on them.=0A=
	  this.$el =3D=0A=
	  this.$parent =3D=0A=
	  this.$root =3D=0A=
	  this.$children =3D=0A=
	  this._watchers =3D=0A=
	  this._directives =3D null=0A=
	  // call the last hook...=0A=
	  this._isDestroyed =3D true=0A=
	  this._callHook('destroyed')=0A=
	  // turn off all instance listeners.=0A=
	  this.$off()=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 59 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var config =3D __webpack_require__(5)=0A=
	var Watcher =3D __webpack_require__(17)=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var expParser =3D __webpack_require__(19)=0A=
	function noop () {}=0A=
=0A=
	/**=0A=
	 * A directive links a DOM element with a piece of data,=0A=
	 * which is the result of evaluating an expression.=0A=
	 * It registers a watcher with the expression and calls=0A=
	 * the DOM update function when a change is triggered.=0A=
	 *=0A=
	 * @param {String} name=0A=
	 * @param {Node} el=0A=
	 * @param {Vue} vm=0A=
	 * @param {Object} descriptor=0A=
	 *                 - {String} expression=0A=
	 *                 - {String} [arg]=0A=
	 *                 - {Array&lt;Object&gt;} [filters]=0A=
	 * @param {Object} def - directive definition object=0A=
	 * @param {Vue|undefined} host - transclusion host target=0A=
	 * @constructor=0A=
	 */=0A=
=0A=
	function Directive (name, el, vm, descriptor, def, host) {=0A=
	  // public=0A=
	  this.name =3D name=0A=
	  this.el =3D el=0A=
	  this.vm =3D vm=0A=
	  // copy descriptor props=0A=
	  this.raw =3D descriptor.raw=0A=
	  this.expression =3D descriptor.expression=0A=
	  this.arg =3D descriptor.arg=0A=
	  this.filters =3D descriptor.filters=0A=
	  // private=0A=
	  this._descriptor =3D descriptor=0A=
	  this._host =3D host=0A=
	  this._locked =3D false=0A=
	  this._bound =3D false=0A=
	  this._listeners =3D null=0A=
	  // init=0A=
	  this._bind(def)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Initialize the directive, mixin definition properties,=0A=
	 * setup the watcher, call definition bind() and update()=0A=
	 * if present.=0A=
	 *=0A=
	 * @param {Object} def=0A=
	 */=0A=
=0A=
	Directive.prototype._bind =3D function (def) {=0A=
	  if (=0A=
	    (this.name !=3D=3D 'cloak' || this.vm._isCompiled) &amp;&amp;=0A=
	    this.el &amp;&amp; this.el.removeAttribute=0A=
	  ) {=0A=
	    this.el.removeAttribute(config.prefix + this.name)=0A=
	  }=0A=
	  if (typeof def =3D=3D=3D 'function') {=0A=
	    this.update =3D def=0A=
	  } else {=0A=
	    _.extend(this, def)=0A=
	  }=0A=
	  this._watcherExp =3D this.expression=0A=
	  this._checkDynamicLiteral()=0A=
	  if (this.bind) {=0A=
	    this.bind()=0A=
	  }=0A=
	  if (this._watcherExp &amp;&amp;=0A=
	      (this.update || this.twoWay) &amp;&amp;=0A=
	      (!this.isLiteral || this._isDynamicLiteral) &amp;&amp;=0A=
	      !this._checkStatement()) {=0A=
	    // wrapped updater for context=0A=
	    var dir =3D this=0A=
	    if (this.update) {=0A=
	      this._update =3D function (val, oldVal) {=0A=
	        if (!dir._locked) {=0A=
	          dir.update(val, oldVal)=0A=
	        }=0A=
	      }=0A=
	    } else {=0A=
	      this._update =3D noop=0A=
	    }=0A=
	    // pre-process hook called before the value is piped=0A=
	    // through the filters. used in v-repeat.=0A=
	    var preProcess =3D this._preProcess=0A=
	      ? _.bind(this._preProcess, this)=0A=
	      : null=0A=
	    var watcher =3D this._watcher =3D new Watcher(=0A=
	      this.vm,=0A=
	      this._watcherExp,=0A=
	      this._update, // callback=0A=
	      {=0A=
	        filters: this.filters,=0A=
	        twoWay: this.twoWay,=0A=
	        deep: this.deep,=0A=
	        preProcess: preProcess=0A=
	      }=0A=
	    )=0A=
	    if (this._initValue !=3D null) {=0A=
	      watcher.set(this._initValue)=0A=
	    } else if (this.update) {=0A=
	      this.update(watcher.value)=0A=
	    }=0A=
	  }=0A=
	  this._bound =3D true=0A=
	}=0A=
=0A=
	/**=0A=
	 * check if this is a dynamic literal binding.=0A=
	 *=0A=
	 * e.g. v-component=3D"{{currentView}}"=0A=
	 */=0A=
=0A=
	Directive.prototype._checkDynamicLiteral =3D function () {=0A=
	  var expression =3D this.expression=0A=
	  if (expression &amp;&amp; this.isLiteral) {=0A=
	    var tokens =3D textParser.parse(expression)=0A=
	    if (tokens) {=0A=
	      var exp =3D textParser.tokensToExp(tokens)=0A=
	      this.expression =3D this.vm.$get(exp)=0A=
	      this._watcherExp =3D exp=0A=
	      this._isDynamicLiteral =3D true=0A=
	    }=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check if the directive is a function caller=0A=
	 * and if the expression is a callable one. If both true,=0A=
	 * we wrap up the expression and use it as the event=0A=
	 * handler.=0A=
	 *=0A=
	 * e.g. v-on=3D"click: a++"=0A=
	 *=0A=
	 * @return {Boolean}=0A=
	 */=0A=
=0A=
	Directive.prototype._checkStatement =3D function () {=0A=
	  var expression =3D this.expression=0A=
	  if (=0A=
	    expression &amp;&amp; this.acceptStatement &amp;&amp;=0A=
	    !expParser.isSimplePath(expression)=0A=
	  ) {=0A=
	    var fn =3D expParser.parse(expression).get=0A=
	    var vm =3D this.vm=0A=
	    var handler =3D function () {=0A=
	      fn.call(vm, vm)=0A=
	    }=0A=
	    if (this.filters) {=0A=
	      handler =3D vm._applyFilters(handler, null, this.filters)=0A=
	    }=0A=
	    this.update(handler)=0A=
	    return true=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check for an attribute directive param, e.g. lazy=0A=
	 *=0A=
	 * @param {String} name=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	Directive.prototype._checkParam =3D function (name) {=0A=
	  var param =3D this.el.getAttribute(name)=0A=
	  if (param !=3D=3D null) {=0A=
	    this.el.removeAttribute(name)=0A=
	    param =3D this.vm.$interpolate(param)=0A=
	  }=0A=
	  return param=0A=
	}=0A=
=0A=
	/**=0A=
	 * Set the corresponding value with the setter.=0A=
	 * This should only be used in two-way directives=0A=
	 * e.g. v-model.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @public=0A=
	 */=0A=
=0A=
	Directive.prototype.set =3D function (value) {=0A=
	  /* istanbul ignore else */=0A=
	  if (this.twoWay) {=0A=
	    this._withLock(function () {=0A=
	      this._watcher.set(value)=0A=
	    })=0A=
	  } else if (true) {=0A=
	    _.warn(=0A=
	      'Directive.set() can only be used inside twoWay' +=0A=
	      'directives.'=0A=
	    )=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Execute a function while preventing that function from=0A=
	 * triggering updates on this directive instance.=0A=
	 *=0A=
	 * @param {Function} fn=0A=
	 */=0A=
=0A=
	Directive.prototype._withLock =3D function (fn) {=0A=
	  var self =3D this=0A=
	  self._locked =3D true=0A=
	  fn.call(self)=0A=
	  _.nextTick(function () {=0A=
	    self._locked =3D false=0A=
	  })=0A=
	}=0A=
=0A=
	/**=0A=
	 * Convenience method that attaches a DOM event listener=0A=
	 * to the directive element and autometically tears it down=0A=
	 * during unbind.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {Function} handler=0A=
	 */=0A=
=0A=
	Directive.prototype.on =3D function (event, handler) {=0A=
	  _.on(this.el, event, handler)=0A=
	  ;(this._listeners || (this._listeners =3D []))=0A=
	    .push([event, handler])=0A=
	}=0A=
=0A=
	/**=0A=
	 * Teardown the watcher and call unbind.=0A=
	 */=0A=
=0A=
	Directive.prototype._teardown =3D function () {=0A=
	  if (this._bound) {=0A=
	    this._bound =3D false=0A=
	    if (this.unbind) {=0A=
	      this.unbind()=0A=
	    }=0A=
	    if (this._watcher) {=0A=
	      this._watcher.teardown()=0A=
	    }=0A=
	    var listeners =3D this._listeners=0A=
	    if (listeners) {=0A=
	      for (var i =3D 0; i &lt; listeners.length; i++) {=0A=
	        _.off(this.el, listeners[i][0], listeners[i][1])=0A=
	      }=0A=
	    }=0A=
	    this.vm =3D this.el =3D=0A=
	    this._watcher =3D this._listeners =3D null=0A=
	  }=0A=
	}=0A=
=0A=
	module.exports =3D Directive=0A=
=0A=
=0A=
/***/ },=0A=
/* 60 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Apply a list of filter (descriptors) to a value.=0A=
	 * Using plain for loops here because this will be called in=0A=
	 * the getter of any watcher with filters so it is very=0A=
	 * performance sensitive.=0A=
	 *=0A=
	 * @param {*} value=0A=
	 * @param {*} [oldValue]=0A=
	 * @param {Array} filters=0A=
	 * @param {Boolean} write=0A=
	 * @return {*}=0A=
	 */=0A=
=0A=
	exports._applyFilters =3D function (value, oldValue, filters, write) {=0A=
	  var filter, fn, args, arg, offset, i, l, j, k=0A=
	  for (i =3D 0, l =3D filters.length; i &lt; l; i++) {=0A=
	    filter =3D filters[i]=0A=
	    fn =3D _.resolveAsset(this.$options, 'filters', filter.name)=0A=
	    if (true) {=0A=
	      _.assertAsset(fn, 'filter', filter.name)=0A=
	    }=0A=
	    if (!fn) continue=0A=
	    fn =3D write ? fn.write : (fn.read || fn)=0A=
	    if (typeof fn !=3D=3D 'function') continue=0A=
	    args =3D write ? [value, oldValue] : [value]=0A=
	    offset =3D write ? 2 : 1=0A=
	    if (filter.args) {=0A=
	      for (j =3D 0, k =3D filter.args.length; j &lt; k; j++) {=0A=
	        arg =3D filter.args[j]=0A=
	        args[j + offset] =3D arg.dynamic=0A=
	          ? this.$get(arg.value)=0A=
	          : arg.value=0A=
	      }=0A=
	    }=0A=
	    value =3D fn.apply(this, args)=0A=
	  }=0A=
	  return value=0A=
	}=0A=
=0A=
	/**=0A=
	 * Resolve a component, depending on whether the component=0A=
	 * is defined normally or using an async factory function.=0A=
	 * Resolves synchronously if already resolved, otherwise=0A=
	 * resolves asynchronously and caches the resolved=0A=
	 * constructor on the factory.=0A=
	 *=0A=
	 * @param {String} id=0A=
	 * @param {Function} cb=0A=
	 */=0A=
=0A=
	exports._resolveComponent =3D function (id, cb) {=0A=
	  var factory =3D _.resolveAsset(this.$options, 'components', id)=0A=
	  if (true) {=0A=
	    _.assertAsset(factory, 'component', id)=0A=
	  }=0A=
	  if (!factory) {=0A=
	    return=0A=
	  }=0A=
	  // async component factory=0A=
	  if (!factory.options) {=0A=
	    if (factory.resolved) {=0A=
	      // cached=0A=
	      cb(factory.resolved)=0A=
	    } else if (factory.requested) {=0A=
	      // pool callbacks=0A=
	      factory.pendingCallbacks.push(cb)=0A=
	    } else {=0A=
	      factory.requested =3D true=0A=
	      var cbs =3D factory.pendingCallbacks =3D [cb]=0A=
	      factory(function resolve (res) {=0A=
	        if (_.isPlainObject(res)) {=0A=
	          res =3D _.Vue.extend(res)=0A=
	        }=0A=
	        // cache resolved=0A=
	        factory.resolved =3D res=0A=
	        // invoke callbacks=0A=
	        for (var i =3D 0, l =3D cbs.length; i &lt; l; i++) {=0A=
	          cbs[i](res)=0A=
	        }=0A=
	      }, function reject (reason) {=0A=
	        ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	          'Failed to resolve async component: ' + id + '. ' +=0A=
	          (reason ? '\nReason: ' + reason : '')=0A=
	        )=0A=
	      })=0A=
	    }=0A=
	  } else {=0A=
	    // normal component=0A=
	    cb(factory)=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 61 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var Watcher =3D __webpack_require__(17)=0A=
	var Path =3D __webpack_require__(20)=0A=
	var textParser =3D __webpack_require__(13)=0A=
	var dirParser =3D __webpack_require__(15)=0A=
	var expParser =3D __webpack_require__(19)=0A=
	var filterRE =3D /[^|]\|[^|]/=0A=
=0A=
	/**=0A=
	 * Get the value from an expression on this vm.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @return {*}=0A=
	 */=0A=
=0A=
	exports.$get =3D function (exp) {=0A=
	  var res =3D expParser.parse(exp)=0A=
	  if (res) {=0A=
	    try {=0A=
	      return res.get.call(this, this)=0A=
	    } catch (e) {}=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Set the value from an expression on this vm.=0A=
	 * The expression must be a valid left-hand=0A=
	 * expression in an assignment.=0A=
	 *=0A=
	 * @param {String} exp=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	exports.$set =3D function (exp, val) {=0A=
	  var res =3D expParser.parse(exp, true)=0A=
	  if (res &amp;&amp; res.set) {=0A=
	    res.set.call(this, this, val)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Add a property on the VM=0A=
	 *=0A=
	 * @param {String} key=0A=
	 * @param {*} val=0A=
	 */=0A=
=0A=
	exports.$add =3D function (key, val) {=0A=
	  this._data.$add(key, val)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Delete a property on the VM=0A=
	 *=0A=
	 * @param {String} key=0A=
	 */=0A=
=0A=
	exports.$delete =3D function (key) {=0A=
	  this._data.$delete(key)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Watch an expression, trigger callback when its=0A=
	 * value changes.=0A=
	 *=0A=
	 * @param {String|Function} expOrFn=0A=
	 * @param {Function} cb=0A=
	 * @param {Object} [options]=0A=
	 *                 - {Boolean} deep=0A=
	 *                 - {Boolean} immediate=0A=
	 *                 - {Boolean} user=0A=
	 * @return {Function} - unwatchFn=0A=
	 */=0A=
=0A=
	exports.$watch =3D function (expOrFn, cb, options) {=0A=
	  var vm =3D this=0A=
	  var parsed=0A=
	  if (typeof expOrFn =3D=3D=3D 'string') {=0A=
	    parsed =3D dirParser.parse(expOrFn)[0]=0A=
	    expOrFn =3D parsed.expression=0A=
	  }=0A=
	  var watcher =3D new Watcher(vm, expOrFn, cb, {=0A=
	    deep: options &amp;&amp; options.deep,=0A=
	    user: !options || options.user !=3D=3D false,=0A=
	    filters: parsed &amp;&amp; parsed.filters=0A=
	  })=0A=
	  if (options &amp;&amp; options.immediate) {=0A=
	    cb.call(vm, watcher.value)=0A=
	  }=0A=
	  return function unwatchFn () {=0A=
	    watcher.teardown()=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Evaluate a text directive, including filters.=0A=
	 *=0A=
	 * @param {String} text=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.$eval =3D function (text) {=0A=
	  // check for filters.=0A=
	  if (filterRE.test(text)) {=0A=
	    var dir =3D dirParser.parse(text)[0]=0A=
	    // the filter regex check might give false positive=0A=
	    // for pipes inside strings, so it's possible that=0A=
	    // we don't get any filters here=0A=
	    var val =3D this.$get(dir.expression)=0A=
	    return dir.filters=0A=
	      ? this._applyFilters(val, null, dir.filters)=0A=
	      : val=0A=
	  } else {=0A=
	    // no filter=0A=
	    return this.$get(text)=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Interpolate a piece of template text.=0A=
	 *=0A=
	 * @param {String} text=0A=
	 * @return {String}=0A=
	 */=0A=
=0A=
	exports.$interpolate =3D function (text) {=0A=
	  var tokens =3D textParser.parse(text)=0A=
	  var vm =3D this=0A=
	  if (tokens) {=0A=
	    if (tokens.length =3D=3D=3D 1) {=0A=
	      return vm.$eval(tokens[0].value) + ''=0A=
	    } else {=0A=
	      return tokens.map(function (token) {=0A=
	        return token.tag=0A=
	          ? vm.$eval(token.value)=0A=
	          : token.value=0A=
	      }).join('')=0A=
	    }=0A=
	  } else {=0A=
	    return text=0A=
	  }=0A=
	}=0A=
=0A=
	/**=0A=
	 * Log instance data as a plain JS object=0A=
	 * so that it is easier to inspect in console.=0A=
	 * This method assumes console is available.=0A=
	 *=0A=
	 * @param {String} [path]=0A=
	 */=0A=
=0A=
	exports.$log =3D function (path) {=0A=
	  var data =3D path=0A=
	    ? Path.get(this._data, path)=0A=
	    : this._data=0A=
	  if (data) {=0A=
	    data =3D JSON.parse(JSON.stringify(data))=0A=
	  }=0A=
	  console.log(data)=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 62 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var transition =3D __webpack_require__(30)=0A=
=0A=
	/**=0A=
	 * Convenience on-instance nextTick. The callback is=0A=
	 * auto-bound to the instance, and this avoids component=0A=
	 * modules having to rely on the global Vue.=0A=
	 *=0A=
	 * @param {Function} fn=0A=
	 */=0A=
=0A=
	exports.$nextTick =3D function (fn) {=0A=
	  _.nextTick(fn, this)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Append instance to target=0A=
	 *=0A=
	 * @param {Node} target=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition] - defaults to true=0A=
	 */=0A=
=0A=
	exports.$appendTo =3D function (target, cb, withTransition) {=0A=
	  return insert(=0A=
	    this, target, cb, withTransition,=0A=
	    append, transition.append=0A=
	  )=0A=
	}=0A=
=0A=
	/**=0A=
	 * Prepend instance to target=0A=
	 *=0A=
	 * @param {Node} target=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition] - defaults to true=0A=
	 */=0A=
=0A=
	exports.$prependTo =3D function (target, cb, withTransition) {=0A=
	  target =3D query(target)=0A=
	  if (target.hasChildNodes()) {=0A=
	    this.$before(target.firstChild, cb, withTransition)=0A=
	  } else {=0A=
	    this.$appendTo(target, cb, withTransition)=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Insert instance before target=0A=
	 *=0A=
	 * @param {Node} target=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition] - defaults to true=0A=
	 */=0A=
=0A=
	exports.$before =3D function (target, cb, withTransition) {=0A=
	  return insert(=0A=
	    this, target, cb, withTransition,=0A=
	    before, transition.before=0A=
	  )=0A=
	}=0A=
=0A=
	/**=0A=
	 * Insert instance after target=0A=
	 *=0A=
	 * @param {Node} target=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition] - defaults to true=0A=
	 */=0A=
=0A=
	exports.$after =3D function (target, cb, withTransition) {=0A=
	  target =3D query(target)=0A=
	  if (target.nextSibling) {=0A=
	    this.$before(target.nextSibling, cb, withTransition)=0A=
	  } else {=0A=
	    this.$appendTo(target.parentNode, cb, withTransition)=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove instance from DOM=0A=
	 *=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition] - defaults to true=0A=
	 */=0A=
=0A=
	exports.$remove =3D function (cb, withTransition) {=0A=
	  if (!this.$el.parentNode) {=0A=
	    return cb &amp;&amp; cb()=0A=
	  }=0A=
	  var inDoc =3D this._isAttached &amp;&amp; _.inDoc(this.$el)=0A=
	  // if we are not in document, no need to check=0A=
	  // for transitions=0A=
	  if (!inDoc) withTransition =3D false=0A=
	  var op=0A=
	  var self =3D this=0A=
	  var realCb =3D function () {=0A=
	    if (inDoc) self._callHook('detached')=0A=
	    if (cb) cb()=0A=
	  }=0A=
	  if (=0A=
	    this._isFragment &amp;&amp;=0A=
	    !this._blockFragment.hasChildNodes()=0A=
	  ) {=0A=
	    op =3D withTransition =3D=3D=3D false=0A=
	      ? append=0A=
	      : transition.removeThenAppend=0A=
	    blockOp(this, this._blockFragment, op, realCb)=0A=
	  } else {=0A=
	    op =3D withTransition =3D=3D=3D false=0A=
	      ? remove=0A=
	      : transition.remove=0A=
	    op(this.$el, this, realCb)=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Shared DOM insertion function.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Element} target=0A=
	 * @param {Function} [cb]=0A=
	 * @param {Boolean} [withTransition]=0A=
	 * @param {Function} op1 - op for non-transition insert=0A=
	 * @param {Function} op2 - op for transition insert=0A=
	 * @return vm=0A=
	 */=0A=
=0A=
	function insert (vm, target, cb, withTransition, op1, op2) {=0A=
	  target =3D query(target)=0A=
	  var targetIsDetached =3D !_.inDoc(target)=0A=
	  var op =3D withTransition =3D=3D=3D false || targetIsDetached=0A=
	    ? op1=0A=
	    : op2=0A=
	  var shouldCallHook =3D=0A=
	    !targetIsDetached &amp;&amp;=0A=
	    !vm._isAttached &amp;&amp;=0A=
	    !_.inDoc(vm.$el)=0A=
	  if (vm._isFragment) {=0A=
	    blockOp(vm, target, op, cb)=0A=
	  } else {=0A=
	    op(vm.$el, target, vm, cb)=0A=
	  }=0A=
	  if (shouldCallHook) {=0A=
	    vm._callHook('attached')=0A=
	  }=0A=
	  return vm=0A=
	}=0A=
=0A=
	/**=0A=
	 * Execute a transition operation on a fragment instance,=0A=
	 * iterating through all its block nodes.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {Node} target=0A=
	 * @param {Function} op=0A=
	 * @param {Function} cb=0A=
	 */=0A=
=0A=
	function blockOp (vm, target, op, cb) {=0A=
	  var current =3D vm._fragmentStart=0A=
	  var end =3D vm._fragmentEnd=0A=
	  var next=0A=
	  while (next !=3D=3D end) {=0A=
	    next =3D current.nextSibling=0A=
	    op(current, target, vm)=0A=
	    current =3D next=0A=
	  }=0A=
	  op(end, target, vm, cb)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Check for selectors=0A=
	 *=0A=
	 * @param {String|Element} el=0A=
	 */=0A=
=0A=
	function query (el) {=0A=
	  return typeof el =3D=3D=3D 'string'=0A=
	    ? document.querySelector(el)=0A=
	    : el=0A=
	}=0A=
=0A=
	/**=0A=
	 * Append operation that takes a callback.=0A=
	 *=0A=
	 * @param {Node} el=0A=
	 * @param {Node} target=0A=
	 * @param {Vue} vm - unused=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	function append (el, target, vm, cb) {=0A=
	  target.appendChild(el)=0A=
	  if (cb) cb()=0A=
	}=0A=
=0A=
	/**=0A=
	 * InsertBefore operation that takes a callback.=0A=
	 *=0A=
	 * @param {Node} el=0A=
	 * @param {Node} target=0A=
	 * @param {Vue} vm - unused=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	function before (el, target, vm, cb) {=0A=
	  _.before(el, target)=0A=
	  if (cb) cb()=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove operation that takes a callback.=0A=
	 *=0A=
	 * @param {Node} el=0A=
	 * @param {Vue} vm - unused=0A=
	 * @param {Function} [cb]=0A=
	 */=0A=
=0A=
	function remove (el, vm, cb) {=0A=
	  _.remove(el)=0A=
	  if (cb) cb()=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 63 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Listen on the given `event` with `fn`.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {Function} fn=0A=
	 */=0A=
=0A=
	exports.$on =3D function (event, fn) {=0A=
	  (this._events[event] || (this._events[event] =3D []))=0A=
	    .push(fn)=0A=
	  modifyListenerCount(this, event, 1)=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Adds an `event` listener that will be invoked a single=0A=
	 * time then automatically removed.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {Function} fn=0A=
	 */=0A=
=0A=
	exports.$once =3D function (event, fn) {=0A=
	  var self =3D this=0A=
	  function on () {=0A=
	    self.$off(event, on)=0A=
	    fn.apply(this, arguments)=0A=
	  }=0A=
	  on.fn =3D fn=0A=
	  this.$on(event, on)=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Remove the given callback for `event` or all=0A=
	 * registered callbacks.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {Function} fn=0A=
	 */=0A=
=0A=
	exports.$off =3D function (event, fn) {=0A=
	  var cbs=0A=
	  // all=0A=
	  if (!arguments.length) {=0A=
	    if (this.$parent) {=0A=
	      for (event in this._events) {=0A=
	        cbs =3D this._events[event]=0A=
	        if (cbs) {=0A=
	          modifyListenerCount(this, event, -cbs.length)=0A=
	        }=0A=
	      }=0A=
	    }=0A=
	    this._events =3D {}=0A=
	    return this=0A=
	  }=0A=
	  // specific event=0A=
	  cbs =3D this._events[event]=0A=
	  if (!cbs) {=0A=
	    return this=0A=
	  }=0A=
	  if (arguments.length =3D=3D=3D 1) {=0A=
	    modifyListenerCount(this, event, -cbs.length)=0A=
	    this._events[event] =3D null=0A=
	    return this=0A=
	  }=0A=
	  // specific handler=0A=
	  var cb=0A=
	  var i =3D cbs.length=0A=
	  while (i--) {=0A=
	    cb =3D cbs[i]=0A=
	    if (cb =3D=3D=3D fn || cb.fn =3D=3D=3D fn) {=0A=
	      modifyListenerCount(this, event, -1)=0A=
	      cbs.splice(i, 1)=0A=
	      break=0A=
	    }=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Trigger an event on self.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 */=0A=
=0A=
	exports.$emit =3D function (event) {=0A=
	  this._eventCancelled =3D false=0A=
	  var cbs =3D this._events[event]=0A=
	  if (cbs) {=0A=
	    // avoid leaking arguments:=0A=
	    // http://jsperf.com/closure-with-arguments=0A=
	    var i =3D arguments.length - 1=0A=
	    var args =3D new Array(i)=0A=
	    while (i--) {=0A=
	      args[i] =3D arguments[i + 1]=0A=
	    }=0A=
	    i =3D 0=0A=
	    cbs =3D cbs.length &gt; 1=0A=
	      ? _.toArray(cbs)=0A=
	      : cbs=0A=
	    for (var l =3D cbs.length; i &lt; l; i++) {=0A=
	      if (cbs[i].apply(this, args) =3D=3D=3D false) {=0A=
	        this._eventCancelled =3D true=0A=
	      }=0A=
	    }=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Recursively broadcast an event to all children instances.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {...*} additional arguments=0A=
	 */=0A=
=0A=
	exports.$broadcast =3D function (event) {=0A=
	  // if no child has registered for this event,=0A=
	  // then there's no need to broadcast.=0A=
	  if (!this._eventsCount[event]) return=0A=
	  var children =3D this.$children=0A=
	  for (var i =3D 0, l =3D children.length; i &lt; l; i++) {=0A=
	    var child =3D children[i]=0A=
	    child.$emit.apply(child, arguments)=0A=
	    if (!child._eventCancelled) {=0A=
	      child.$broadcast.apply(child, arguments)=0A=
	    }=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Recursively propagate an event up the parent chain.=0A=
	 *=0A=
	 * @param {String} event=0A=
	 * @param {...*} additional arguments=0A=
	 */=0A=
=0A=
	exports.$dispatch =3D function () {=0A=
	  var parent =3D this.$parent=0A=
	  while (parent) {=0A=
	    parent.$emit.apply(parent, arguments)=0A=
	    parent =3D parent._eventCancelled=0A=
	      ? null=0A=
	      : parent.$parent=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Modify the listener counts on all parents.=0A=
	 * This bookkeeping allows $broadcast to return early when=0A=
	 * no child has listened to a certain event.=0A=
	 *=0A=
	 * @param {Vue} vm=0A=
	 * @param {String} event=0A=
	 * @param {Number} count=0A=
	 */=0A=
=0A=
	var hookRE =3D /^hook:/=0A=
	function modifyListenerCount (vm, event, count) {=0A=
	  var parent =3D vm.$parent=0A=
	  // hooks do not get broadcasted so no need=0A=
	  // to do bookkeeping for them=0A=
	  if (!parent || !count || hookRE.test(event)) return=0A=
	  while (parent) {=0A=
	    parent._eventsCount[event] =3D=0A=
	      (parent._eventsCount[event] || 0) + count=0A=
	    parent =3D parent.$parent=0A=
	  }=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 64 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
=0A=
	/**=0A=
	 * Create a child instance that prototypally inherits=0A=
	 * data on parent. To achieve that we create an intermediate=0A=
	 * constructor with its prototype pointing to parent.=0A=
	 *=0A=
	 * @param {Object} opts=0A=
	 * @param {Function} [BaseCtor]=0A=
	 * @return {Vue}=0A=
	 * @public=0A=
	 */=0A=
=0A=
	exports.$addChild =3D function (opts, BaseCtor) {=0A=
	  BaseCtor =3D BaseCtor || _.Vue=0A=
	  opts =3D opts || {}=0A=
	  var ChildVue=0A=
	  var parent =3D this=0A=
	  // transclusion context=0A=
	  var context =3D opts._context || parent=0A=
	  var inherit =3D opts.inherit !=3D=3D undefined=0A=
	    ? opts.inherit=0A=
	    : BaseCtor.options.inherit=0A=
	  if (inherit) {=0A=
	    var ctors =3D context._childCtors=0A=
	    ChildVue =3D ctors[BaseCtor.cid]=0A=
	    if (!ChildVue) {=0A=
	      var optionName =3D BaseCtor.options.name=0A=
	      var className =3D optionName=0A=
	        ? _.classify(optionName)=0A=
	        : 'VueComponent'=0A=
	      ChildVue =3D new Function(=0A=
	        'return function ' + className + ' (options) {' +=0A=
	        'this.constructor =3D ' + className + ';' +=0A=
	        'this._init(options) }'=0A=
	      )()=0A=
	      ChildVue.options =3D BaseCtor.options=0A=
	      ChildVue.linker =3D BaseCtor.linker=0A=
	      ChildVue.prototype =3D context=0A=
	      ctors[BaseCtor.cid] =3D ChildVue=0A=
	    }=0A=
	  } else {=0A=
	    ChildVue =3D BaseCtor=0A=
	  }=0A=
	  opts._parent =3D parent=0A=
	  opts._root =3D parent.$root=0A=
	  var child =3D new ChildVue(opts)=0A=
	  return child=0A=
	}=0A=
=0A=
=0A=
/***/ },=0A=
/* 65 */=0A=
/***/ function(module, exports, __webpack_require__) {=0A=
=0A=
	var _ =3D __webpack_require__(1)=0A=
	var compiler =3D __webpack_require__(10)=0A=
=0A=
	/**=0A=
	 * Set instance target element and kick off the compilation=0A=
	 * process. The passed in `el` can be a selector string, an=0A=
	 * existing Element, or a DocumentFragment (for block=0A=
	 * instances).=0A=
	 *=0A=
	 * @param {Element|DocumentFragment|string} el=0A=
	 * @public=0A=
	 */=0A=
=0A=
	exports.$mount =3D function (el) {=0A=
	  if (this._isCompiled) {=0A=
	    ("development") !=3D=3D 'production' &amp;&amp; _.warn(=0A=
	      '$mount() should be called only once.'=0A=
	    )=0A=
	    return=0A=
	  }=0A=
	  el =3D _.query(el)=0A=
	  if (!el) {=0A=
	    el =3D document.createElement('div')=0A=
	  }=0A=
	  this._compile(el)=0A=
	  this._isCompiled =3D true=0A=
	  this._callHook('compiled')=0A=
	  this._initDOMHooks()=0A=
	  if (_.inDoc(this.$el)) {=0A=
	    this._callHook('attached')=0A=
	    ready.call(this)=0A=
	  } else {=0A=
	    this.$once('hook:attached', ready)=0A=
	  }=0A=
	  return this=0A=
	}=0A=
=0A=
	/**=0A=
	 * Mark an instance as ready.=0A=
	 */=0A=
=0A=
	function ready () {=0A=
	  this._isAttached =3D true=0A=
	  this._isReady =3D true=0A=
	  this._callHook('ready')=0A=
	}=0A=
=0A=
	/**=0A=
	 * Teardown the instance, simply delegate to the internal=0A=
	 * _destroy.=0A=
	 */=0A=
=0A=
	exports.$destroy =3D function (remove, deferCleanup) {=0A=
	  this._destroy(remove, deferCleanup)=0A=
	}=0A=
=0A=
	/**=0A=
	 * Partially compile a piece of DOM and return a=0A=
	 * decompile function.=0A=
	 *=0A=
	 * @param {Element|DocumentFragment} el=0A=
	 * @param {Vue} [host]=0A=
	 * @return {Function}=0A=
	 */=0A=
=0A=
	exports.$compile =3D function (el, host) {=0A=
	  return compiler.compile(el, this.$options, true)(this, el, host)=0A=
	}=0A=
=0A=
=0A=
/***/ }=0A=
/******/ ])=0A=
});=0A=
;</PRE></BODY></HTML>
