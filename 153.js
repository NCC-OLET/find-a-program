(window.wpSpeechstreamToolbar=window.wpSpeechstreamToolbar||[]).push([[153],{11:function(t,n,e){"use strict";n.a=function(t){return t.children}},204:function(t,n){t.exports="https://www.browsealoud.com/modules/3.5.0/images/bacdbe93b384864615146369280b55f3.png"},320:function(t,n,e){"use strict";e.r(n),e.d(n,"checkLaunchpad",(function(){return it}));var o=e(2),r=e.n(o),c=e(18),i=e.n(c),a=e(11);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function p(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=h(t);if(n){var r=h(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return s(this,e)}}function s(t,n){if(n&&("object"===u(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),e.call(this)}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(n,t);var e=p(n);return function(t,n,e){n&&l(t.prototype,n),e&&l(t,e)}(n,[{key:"render",value:function(){var t=this.props.config.config.launchpadtheme,n=0===t?" gw-launchpad-button--orange":1===t?" gw-launchpad-button--secondary":2===t?" gw-launchpad-button":3===t?" gw-launchpad-button--blue":" gw-launchpad-button--orange";return r.a.createElement("button",{"aria-label":this.props.config.config.locale.launchpad_title,onMouseDown:function(t){return t.preventDefault()},title:this.props.config.config.locale.launchpad_title,id:"browsealoud-button--launchpad",onClick:this.props.onToggle,className:"gw-launchpad-button gw-launchpad-button--double-icon "+n,ignore:"true",lang:"en",type:"button"},r.a.createElement("span",{className:"gw-launchpad-button__icon gw-launchpad-button__icon--left gw-launchpad-button__icon--accessibility-man"+(2===t?"":"-white")}),this.props.config.config.locale.speak,r.a.createElement("span",{className:"gw-launchpad-button__icon gw-launchpad-button__icon--right gw-launchpad-button__icon--play-outline"+(2===t?"":"-white")}))}}]),n}(o.Component),y=e(7),b=e(4);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function _(t,n){return(_=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function w(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=E(t);if(n){var r=E(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return v(this,e)}}function v(t,n){if(n&&("object"===g(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var j=0,S=2,R=3,P=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),T(O(t=e.call(this)),"componentDidMount",(function(){var n,e=t.props.config.isMobile?3:24,o=15,r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;(t.props.config.launchpadposition===S||t.props.config.launchpadposition===R)&&(o=r-(72+e)+20),n=t.props.config.launchpadposition===j||t.props.config.launchpadposition===R?c-(72+e-17):e,t.floatingLaunch.current.style.top=o+"px",t.floatingLaunch.current.style.left=n+"px",t.floatingLaunch.current.style.display=y.a.getLocalStorage("toolbarOpenV2")?"none":"",window.addEventListener("resize",t.handleResize)})),T(O(t),"componentWillUnmount",(function(){window.removeEventListener("resize",t.handleResize)})),T(O(t),"handleResize",(function(){var n,e=t.props.config.isMobile?3:24,o=15,r=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,c=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;(t.props.config.launchpadposition===S||t.props.config.launchpadposition===R)&&(o=r-(72+e)+20),n=t.props.config.launchpadposition===j||t.props.config.launchpadposition===R?c-(72+e-17):e,t.floatingLaunch.current.style.top=o+"px",t.floatingLaunch.current.style.left=n+"px",t.floatingLaunch.current.style.display=y.a.getLocalStorage("toolbarOpenV2")?"none":""})),t.floatingLaunch=r.a.createRef(),t}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_(t,n)}(n,t);var e=w(n);return function(t,n,e){n&&m(t.prototype,n),e&&m(t,e)}(n,[{key:"onToggle",value:function(){b.Api.playAudioAlert(),this.props.onToggle()}},{key:"render",value:function(){var t=this,n=this.props.config.launchpadimage,e=this.props.config.launchpadtheme,o=0==n?" gw-launchpad-icon-button__icon--launchpad-s1 gw-launchpad-button__icon--accessibility-man":1==n?" gw-launchpad-icon-button__icon--launchpad-s2 gw-launchpad-button__icon--speaker":2==n?" gw-launchpad-icon-button__icon--launchpad-s1 gw-launchpad-button__icon--ear":3==n?" gw-launchpad-icon-button__icon--launchpad-s2 gw-launchpad-button__icon--headphones":4==n?" gw-launchpad-icon-button__icon--launchpad-s1b gw-launchpad-button__icon--play":5==n?" gw-launchpad-icon-button__icon--launchpad-s1 gw-launchpad-button__icon--translate":" gw-launchpad-icon-button__icon--launchpad-s1 gw-launchpad-button__icon--accessibility-man",c=0===e?" gw-launchpad-icon-button--orange":1===e?" gw-launchpad-icon-button--dark":2===e?" gw-launchpad-icon-button--light":3===e?" gw-launchpad-icon-button--primary-blue":" gw-launchpad-icon-button--orange";return r.a.createElement("div",{id:"__ba_floatingLaunch",className:"positionStyle",ref:this.floatingLaunch},r.a.createElement("button",{"aria-label":this.props.config.config.locale.launchpad_title,onMouseDown:function(t){return t.preventDefault()},title:this.props.config.config.locale.launchpad_title,className:"gw-launchpad-icon-button gw-launchpad-icon-button--s3"+c,onClick:function(){return t.onToggle()},type:"button"},r.a.createElement("span",{className:"gw-launchpad-icon-button__icon"+o+(2===e?"":"-white"),alt:this.props.config.config.locale.launchpad_title})))}}]),n}(o.Component);function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function C(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function k(t,n){return(k=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function D(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=L(t);if(n){var r=L(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return M(this,e)}}function M(t,n){if(n&&("object"===x(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var N=function(t){function n(){return B(this,n),e.apply(this,arguments)}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&k(t,n)}(n,t);var e=D(n);return function(t,n,e){n&&C(t.prototype,n),e&&C(t,e)}(n,[{key:"render",value:function(){return r.a.createElement("button",{"aria-label":this.props.config.config.locale.launchpad_title,onMouseDown:function(t){return t.preventDefault()},title:this.props.config.config.locale.launchpad_title,onClick:this.props.onToggle,className:"imgOnlyDiv",type:"button"},r.a.createElement("img",{className:"customImg",alt:this.props.config.config.locale.launchpad_title,src:this.props.config.imgSrc}))}}]),n}(o.Component);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function z(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function W(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function H(t,n){return(H=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function A(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=U(t);if(n){var r=U(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return V(this,e)}}function V(t,n){if(n&&("object"===I(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function U(t){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var q=function(t){function n(){return z(this,n),e.apply(this,arguments)}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&H(t,n)}(n,t);var e=A(n);return function(t,n,e){n&&W(t.prototype,n),e&&W(t,e)}(n,[{key:"render",value:function(){return r.a.createElement("button",{"aria-label":this.props.config.config.locale.launchpad_title,onMouseDown:function(t){return t.preventDefault()},title:this.props.config.config.locale.launchpad_title,onClick:this.props.onToggle,className:"textDiv",type:"button"},r.a.createElement("span",{className:"customText"},this.props.config.text))}}]),n}(o.Component);e(204);function F(t){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function G(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function J(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function K(t,n){return(K=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function Q(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Y(t);if(n){var r=Y(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return X(this,e)}}function X(t,n){if(n&&("object"===F(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Y(t){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Z=function(t){function n(){return G(this,n),e.apply(this,arguments)}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&K(t,n)}(n,t);var e=Q(n);return function(t,n,e){n&&J(t.prototype,n),e&&J(t,e)}(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"imgDiv"},r.a.createElement("button",{"aria-label":this.props.config.config.locale.launchpad_title,onMouseDown:function(t){return t.preventDefault()},title:this.props.config.config.locale.launchpad_title,onClick:this.props.onToggle,className:"gw-launchpad-icon-button gw-launchpad-icon-button--orange gw-launchpad-icon-button--s3",type:"button"},r.a.createElement("span",{className:"gw-launchpad-icon-button__icon gw-launchpad-icon-button__icon--launchpad-s1 gw-launchpad-button__icon--accessibility-man-white",alt:this.props.config.config.locale.launchpad_title})))}}]),n}(o.Component);function $(t){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tt(t,n){for(var e,o=0;o<n.length;o++)(e=n[o]).enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}function nt(t,n){return(nt=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function et(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=rt(t);if(n){var r=rt(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return ot(this,e)}}function ot(t,n){if(n&&("object"===$(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var ct=function(t){function n(){var t;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=o.call(this)).state={loading:!0},e.e(136).then(e.t.bind(null,318,7)).then((function(){t.setState((function(){return{loading:!1}}))})),t}!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&nt(t,n)}(n,t);var o=et(n);return function(t,n,e){n&&tt(t.prototype,n),e&&tt(t,e)}(n,[{key:"render",value:function(){if(this.state.loading)return null;var t=null,n=this.props.config.launchType;return"launchpad"===n?t=r.a.createElement(d,{config:this.props.config,onToggle:this.props.onToggle}):"panel_img"===n?t=r.a.createElement(N,{config:this.props.config,onToggle:this.props.onToggle}):"panel_text"===n?t=r.a.createElement(q,{config:this.props.config,onToggle:this.props.onToggle}):"panel_default"===n?t=r.a.createElement(Z,{config:this.props.config,onToggle:this.props.onToggle}):"config"===n&&(t=r.a.createElement(P,{config:this.props.config,onToggle:this.props.onToggle})),r.a.createElement(a.a,null,t)}}]),n}(o.Component),it=function(t,n){var e={};if(document.getElementById("__ba_launchpad"))e={launchType:"launchpad",config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_launchpad"));else if(t.panelwizardused){var o=document.createElement("div");o.setAttribute("id","__ba_panel"),document.body.insertBefore(o,document.body.firstChild),document.getElementById("__ba_panel").style.cssText="z-index: 2147483640; position: fixed;",e={launchType:"config",launchpadposition:t.launchpadposition,launchpadtheme:t.launchpadtheme,launchpadimage:t.launchpadimage,isMobile:t.isMobile,config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel"))}else if(document.getElementById("__ba_panel"))0<=t._baMode.toLowerCase().indexOf("http")?(e={launchType:"panel_img",imgSrc:t._baMode,config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel"))):"logo"===t._baMode.toLowerCase()||""===t._baMode?(e={launchType:"panel_default",config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel"))):(e={launchType:"panel_text",text:t._baMode,config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel")));else{var c=document.createElement("div");c.setAttribute("id","__ba_panel"),document.body.appendChild(c),0<=t._baMode.toLowerCase().indexOf("http")?(e={launchType:"panel_img",imgSrc:t._baMode,config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel"))):"logo"===t._baMode.toLowerCase()||""===t._baMode?(e={launchType:"panel_default",config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel"))):(e={launchType:"panel_text",text:t._baMode,config:t},i.a.render(r.a.createElement(ct,{config:e,onToggle:n}),document.getElementById("__ba_panel")))}return!0}}}]);