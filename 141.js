(window.wpSpeechstreamToolbar=window.wpSpeechstreamToolbar||[]).push([[141],{172:function(t,e,o){"use strict";o.r(e),function(t){var i=o(173),n=o.n(i);e.default=function(){return t.createElement("div",{style:{top:"-99999px",left:"-99999px",position:"absolute",zIndex:"-99999"},dangerouslySetInnerHTML:{__html:n.a}})}}.call(this,o(2))},174:function(t,e,o){"use strict";(function(t){o(175)}).call(this,o(2))},176:function(t,e,o){"use strict";(function(t){var i=o(177),n=o.n(i);e.a=function(){return t.createElement("div",{style:{top:"-99999px",left:"-99999px",position:"absolute",zIndex:"-99999"},dangerouslySetInnerHTML:{__html:n.a}})}}).call(this,o(2))},178:function(t,e,o){"use strict";o.r(e),function(t){var i=o(179),n=o.n(i);e.default=function(){return t.createElement("div",{style:{top:"-99999px",left:"-99999px",position:"absolute",zIndex:"-99999"},dangerouslySetInnerHTML:{__html:n.a}})}}.call(this,o(2))},256:function(t,e,o){"use strict";o.r(e),o.d(e,"ToolbarLoader",(function(){return v}));var i=o(2),n=o.n(i),a=o(18),l=o.n(a);"localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/);var s=o(169),r=o(7),c=o(172),d=(o(174),o(176)),u=o(178);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e,o,i,n,a,l){try{var s=t[a](l),r=s.value}catch(t){return void o(t)}s.done?e(r):Promise.resolve(r).then(i,n)}function h(t){return function(){var e=this,o=arguments;return new Promise((function(i,n){function a(t){g(s,i,n,a,l,"next",t)}function l(t){g(s,i,n,a,l,"throw",t)}var s=t.apply(e,o);a(void 0)}))}}function b(t,e){for(var o,i=0;i<e.length;i++)(o=e[i]).enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}function y(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var v=function(){function t(e){var o=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),y(this,"toggleOnCallback",(function(t){"function"==typeof t&&(o.toggleOn=t)})),y(this,"toggleOffCallback",(function(t){"function"==typeof t&&(o.toggleOff=t)})),y(this,"toggleToolbar",function(){var t=h((function*(){o.config.isMobile=!!(800>=window.innerWidth);var t=!r.a.getLocalStorage("toolbarOpenV2");(r.a.setLocalStorage("toolbarOpenV2",t),document.getElementById("__ba_floatingLaunch"))&&(document.getElementById("__ba_floatingLaunch").style.display=t&&o.config.hideonload?"none":"");if(r.a.getLocalStorage("toolbarOpenV2")&&!document.getElementById("__bs_entryDiv"))o._load();else if(!r.a.getLocalStorage("toolbarOpenV2")&&document.getElementById("__bs_entryDiv")){o.config.translate.translatePage&&o.config.toolbarButtons.includes("translate")&&void 0!==o.Api.translateApi&&o.Api.resetTranslate();try{o.Api.stop()}catch(t){}if(o.Api.logAnalytics({event:"Toolbar",action:"Unload"}),document.getElementById("__bs_entryDiv").style.display="none",o.config.isMobile)document.body.style.position="",document.body.style.marginBottom="";else if(o.config.toolbarConfig.docked&&(document.body.style.position="",document.body.style.top="",document.body.style.width="",0<o.config.fixedNavId.length))for(var e=0;e<o.config.fixedNavId.length;e++)try{document.getElementById(o.config.fixedNavId[e]).style.top=""}catch(t){}"function"==typeof o.toggleOff&&o.toggleOff()}else if(document.getElementById("__bs_entryDiv")){if(document.getElementById("__bs_entryDiv").style.display="block",o.config.isMobile){var i=parseInt(document.body.style.marginTop)||0;document.body.style.marginBottom=i+60+"px"}else if(o.config.toolbarConfig.docked){if(0<o.config.fixedNavId.length)for(var n=0;n<o.config.fixedNavId.length;n++)try{document.getElementById(o.config.fixedNavId[n]).style.setProperty("top","40px","important")}catch(t){}document.body.style.setProperty("position","absolute","important"),document.body.style.setProperty("top","40px","important"),document.body.style.setProperty("width","100%","important")}"function"==typeof o.toggleOn&&o.toggleOn()}}));return function(){return t.apply(this,arguments)}}()),y(this,"updateDimensions",(function(){var t=!!(800>=window.innerWidth),e=document.getElementById("__ba_floatingLaunch");t&&!o.config.availablemobile&&e?document.getElementById("__ba_panel").style.display="none":!t&&!o.config.availablemobile&&e&&(document.getElementById("__ba_panel").style.display="")})),this.config=e,this.setConfigDefaults(),this.toggleCallback=null,r.a.init(e),this.disableAnalytics=!1,this.disableCookies=!1,this.apiObject,this.apiObject={panel:{toggleBar:this.toggleToolbar},isToolbarActive:this.isToolbarActive,disableBrowsealoudAnalytics:this.disableBrowsealoudAnalytics.bind(this),enableBrowsealoudAnalytics:this.enableBrowsealoudAnalytics.bind(this),disableBrowsealoudCookies:this.disableBrowsealoudCookies.bind(this),enableBrowsealoudCookies:this.enableBrowsealoudCookies.bind(this),clearBrowsealoudData:this.clearBrowsealoudData.bind(this)};var i={panel:{toggleBar:this.toggleToolbar},isToolbarActive:this.isToolbarActive,disableReachDeckAnalytics:this.disableBrowsealoudAnalytics.bind(this),enableReachDeckAnalytics:this.enableBrowsealoudAnalytics.bind(this),disableReachDeckCookies:this.disableBrowsealoudCookies.bind(this),enableReachDeckCookies:this.enableBrowsealoudCookies.bind(this),clearReachDeckData:this.clearBrowsealoudData.bind(this)};void 0!==this.config.globalFunctions&&void 0!==this.config.globalFunctions.windowsScope&&""!=this.config.globalFunctions.windowsScope&&(window[this.config.globalFunctions.windowsScope]=i,window.BrowseAloud=this.apiObject)}return function(t,e,o){e&&b(t.prototype,e),o&&b(t,o)}(t,[{key:"isToolbarActive",value:function(){try{var t,e,o=(null===(t=document.getElementById("__bs_entryDiv"))||void 0===t||null===(e=t.lastElementChild)||void 0===e?void 0:e.shadowRoot)||null,i=!1;if(null!==o)for(var n=0;n<o.childNodes.length;n++)"th_toolbar"==o.childNodes[n].id&&(i=!0);return i}catch(t){return!1}}},{key:"setConfigDefaults",value:function(){var t;void 0===this.config.saveButtonState&&(this.config.saveButtonState=!1),void 0===this.config.voiceList&&(this.config.voiceList=[]),void 0===this.config.translateList&&(this.config.translateList=[]),void 0===this.config.defaultTranslateVoices&&(this.config.defaultTranslateVoices=null),void 0===this.config.langId&&(this.config.langId=0),void 0===this.config.isPdf&&(this.config.isPdf=!1),void 0===this.config.isPAC&&(this.config.isPAC=!1),void 0===this.config.isBabm&&(this.config.isBabm=!1),void 0===this.config.fixedNavId&&(this.config.fixedNavId="object"==("undefined"==typeof _baFixedNav?"undefined":f(_baFixedNav))?_baFixedNav:[]),void 0===this.config.toolbarConfig.showCloseButton&&(this.config.toolbarConfig.showCloseButton=!1),"string"==typeof _baPlayStartPoint&&(this.config.htmlParser.playStartPoint=_baPlayStartPoint),"undefined"!=typeof _removeFromTranslate&&null!==(t=this.config)&&void 0!==t&&t.translate&&(this.config.translate.removeList=_removeFromTranslate)}},{key:"disableBrowsealoudAnalytics",value:function(){this.disableAnalytics=!0,r.a.TurnOffSave()}},{key:"enableBrowsealoudAnalytics",value:function(){this.disableAnalytics=!1,r.a.TurnOnSave()}},{key:"disableBrowsealoudCookies",value:function(){this.disableCookies=!0,void 0!==BrowseAloud.Api&&BrowseAloud.Api.disableSaveSettings(this.disableCookies)}},{key:"enableBrowsealoudCookies",value:function(){this.disableCookies=!1,void 0!==BrowseAloud.Api&&BrowseAloud.Api.disableSaveSettings(this.disableCookies)}},{key:"clearBrowsealoudData",value:function(){localStorage.removeItem("TH_TOOLBAR_SETTINGS"),localStorage.removeItem("API_SETTINGS_V2"),localStorage.removeItem("audioalert")}},{key:"loadApi",value:function(){var t=h((function*(){var t,e=yield Promise.all([o.e(3),o.e(2)]).then(o.bind(null,4));this.disableAnalytics&&(this.config.disable_ga=!0),this.disableCookies&&(this.config.disable_cookies=!0),this.Api=e.Api;var i=!(null!==(t=this.config.toolbarConfig)&&void 0!==t&&t.hideUI);this.Api.init(this.config,i,this.apiObject)}));return function(){return t.apply(this,arguments)}}()},{key:"_load",value:function(){var t=h((function*(){var t=(yield Promise.all([o.e(3),o.e(4),o.e(134),o.e(2),o.e(131)]).then(o.bind(null,319))).default,e=document.createElement("div");if(e.setAttribute("id","__bs_entryDiv"),e.setAttribute("dir","ltr"),"string"==typeof this.config.toolbarConfig.injectDOM&&""!=this.config.toolbarConfig.injectDOM)try{document.getElementById(this.config.toolbarConfig.injectDOM).appendChild(e)}catch(t){document.body.appendChild(e)}else document.body.appendChild(e);document.getElementById("__bs_entryDiv").style.cssText="z-index: 2147483647; position: absolute;";var i=this.config;yield this.loadApi(),this.Api.logAnalytics({event:"Toolbar",action:"Load"});var a=null,r=null;a=n.a.createElement(u.default,null),r=n.a.createElement(d.a,null),l.a.render(n.a.createElement(s.a.div,null,n.a.createElement(c.default,null),a,null,r,n.a.createElement(t,{toggleToolbar:this.toggleToolbar,toggleOnCallback:this.toggleOnCallback,toggleOffCallback:this.toggleOffCallback,config:i})),document.getElementById("__bs_entryDiv")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}));return function(){return t.apply(this,arguments)}}()},{key:"loadToolbar",value:function(){var t=h((function*(){var t=this,e=!1;this.config.isPdf||this.config.isBabm||this.config.isPAC||(e=(yield Promise.all([o.e(3),o.e(2),o.e(153)]).then(o.bind(null,320))).checkLaunchpad(this.config,this.toggleToolbar));void 0===this.config.toolbarConfig.autoLaunch||this.config.toolbarConfig.autoLaunch;e?document.getElementById("__ba_floatingLaunch")&&(document.getElementById("__ba_floatingLaunch").style.display=r.a.getLocalStorage("toolbarOpenV2")&&this.config.hideonload?"none":""):r.a.setLocalStorage("toolbarOpenV2",!0);if(e){window.addEventListener("resize",this.updateDimensions.bind(this));var i=setInterval((function(){var e=document.getElementById("__ba_floatingLaunch");t.config.isMobile&&!t.config.availablemobile&&e&&(e.style.display="none",clearInterval(i))}),50)}r.a.getLocalStorage("toolbarOpenV2")&&this._load()}));return function(){return t.apply(this,arguments)}}()}]),t}()}}]);