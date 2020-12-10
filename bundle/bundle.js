var supertokens=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";(function(e){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=n(7),c=n(8),l=n(2),f=function(){function e(){}return e.getToken=function(t){if(void 0!==t){if(void 0===e.tokenInfo){var n=g(v.sessionScope);if(null===n)return;e.tokenInfo={antiCsrf:n,associatedIdRefreshToken:t}}else if(e.tokenInfo.associatedIdRefreshToken!==t)return e.tokenInfo=void 0,e.getToken(t);return e.tokenInfo.antiCsrf}e.tokenInfo=void 0},e.removeToken=function(){e.tokenInfo=void 0,T(void 0,v.sessionScope)},e.setItem=function(t,n){void 0!==t?(T(n,v.sessionScope),e.tokenInfo={antiCsrf:n,associatedIdRefreshToken:t}):e.tokenInfo=void 0},e}();t.AntiCsrfToken=f;var d=function(){function e(){}return e.getTokenInfo=function(){var e=y();if(null!==e)return JSON.parse(atob(e))},e.removeToken=function(){k(void 0,v.sessionScope)},e.setItem=function(e){k(e,v.sessionScope)},e}();function h(e,t,n,r,s){return o(this,void 0,void 0,(function(){var o;return i(this,(function(i){switch(i.label){case 0:return void 0===t?[2,void 0!==w()]:[4,p(e,t,n,r,s)];case 1:if("SESSION_EXPIRED"===(o=i.sent()).result)return[2,!1];if("API_ERROR"===o.result)throw o.error;return[2,!0]}}))}))}t.FrontToken=d,t.handleUnauthorised=h;var v=function(){function t(){}return t.setAuth0API=function(e){t.auth0Path=l.normaliseURLPathOrThrowError(e)},t.init=function(n){var r=l.validateAndNormaliseInputOrThrowError(n),o=r.apiDomain,i=r.apiBasePath,s=r.sessionScope,a=r.refreshAPICustomHeaders,u=r.sessionExpiredStatusCode,c=r.autoAddCredentials;t.autoAddCredentials=c,t.refreshTokenUrl=o+i+"/session/refresh",t.refreshAPICustomHeaders=a,t.sessionScope=s,t.sessionExpiredStatusCode=u,t.apiDomain=o;var f=void 0===l.getWindowOrThrow().fetch?e:l.getWindowOrThrow();void 0===t.originalFetch&&(t.originalFetch=f.fetch.bind(f)),t.addedFetchInterceptor||(t.addedFetchInterceptor=!0,f.fetch=function(e,n){return t.fetch(e,n)}),t.initCalled=!0},t.getUserId=function(){var e=d.getTokenInfo();if(void 0===e)throw new Error("No session exists");return e.uid},t.getJWTPayloadSecurely=function(){return o(this,void 0,void 0,(function(){var e,n;return i(this,(function(r){switch(r.label){case 0:if(void 0===(e=d.getTokenInfo()))throw new Error("No session exists");return e.ate<Date.now()?(n=w(),[4,h(t.refreshTokenUrl,n,t.sessionScope,t.refreshAPICustomHeaders,t.sessionExpiredStatusCode)]):[3,4];case 1:return r.sent()?[4,t.getJWTPayloadSecurely()]:[3,3];case 2:return[2,r.sent()];case 3:throw new Error("Could not refresh session");case 4:return[2,e.up]}}))}))},t.initCalled=!1,t.apiDomain="",t.addedFetchInterceptor=!1,t.getAuth0API=function(){return{apiPath:t.auth0Path}},t.getRefreshURLDomain=function(){return l.normaliseURLDomainOrThrowError(t.refreshTokenUrl)},t.doRequest=function(e,n,u){return o(s,void 0,void 0,(function(){var o,s,c,v,p,g,T;return i(this,(function(i){switch(i.label){case 0:if(!t.initCalled)throw Error("init function not called");return"string"==typeof u&&l.normaliseURLDomainOrThrowError(u)!==t.apiDomain&&t.addedFetchInterceptor?[4,e(n)]:[3,2];case 1:return[2,i.sent()];case 2:t.addedFetchInterceptor&&a.ProcessState.getInstance().addState(a.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST),i.label=3;case 3:i.trys.push([3,,16,17]),o=!1,s=void 0,i.label=4;case 4:0,c=w(),v=f.getToken(c),p=n,void 0!==v&&(p=r({},p,{headers:void 0===p?{"anti-csrf":v}:r({},p.headers,{"anti-csrf":v})})),t.autoAddCredentials&&(void 0===p?p={credentials:"include"}:void 0===p.credentials&&(p=r({},p,{credentials:"include"}))),i.label=5;case 5:return i.trys.push([5,10,,14]),[4,e(p)];case 6:return(g=i.sent()).headers.forEach((function(e,n){"id-refresh-token"===n.toString()&&m(e,t.sessionScope)})),g.status!==t.sessionExpiredStatusCode?[3,8]:[4,h(t.refreshTokenUrl,c,t.sessionScope,t.refreshAPICustomHeaders,t.sessionExpiredStatusCode)];case 7:return i.sent()?[3,9]:(s=g,[3,15]);case 8:return g.headers.forEach((function(e,t){"anti-csrf"===t.toString()?f.setItem(w(),e):"front-token"===t.toString()&&d.setItem(e)})),[2,g];case 9:return[3,14];case 10:return(T=i.sent()).status!==t.sessionExpiredStatusCode?[3,12]:[4,h(t.refreshTokenUrl,c,t.sessionScope,t.refreshAPICustomHeaders,t.sessionExpiredStatusCode)];case 11:return i.sent()?[3,13]:(o=!0,s=T,[3,15]);case 12:throw T;case 13:return[3,14];case 14:return[3,4];case 15:if(o)throw s;return[2,s];case 16:return void 0===w()&&(f.removeToken(),d.removeToken()),[7];case 17:return[2]}}))}))},t.attemptRefreshingSession=function(){return o(s,void 0,void 0,(function(){var e;return i(this,(function(n){switch(n.label){case 0:if(!t.initCalled)throw Error("init function not called");n.label=1;case 1:return n.trys.push([1,,3,4]),e=w(),[4,h(t.refreshTokenUrl,e,t.sessionScope,t.refreshAPICustomHeaders,t.sessionExpiredStatusCode)];case 2:return[2,n.sent()];case 3:return void 0===w()&&(f.removeToken(),d.removeToken()),[7];case 4:return[2]}}))}))},t.fetch=function(e,n){return o(s,void 0,void 0,(function(){return i(this,(function(o){switch(o.label){case 0:return[4,t.doRequest((function(n){return t.originalFetch(e,r({},n))}),n,e)];case 1:return[2,o.sent()]}}))}))},t.doesSessionExist=function(){return void 0!==w()},t}();t.default=v;function p(e,t,n,s,a){return o(this,void 0,void 0,(function(){var o,l,h;return i(this,(function(p){switch(p.label){case 0:o=new c.default,l=function(){var c,l,h,p,g,T,y;return i(this,(function(i){switch(i.label){case 0:return[4,o.acquireLock("REFRESH_TOKEN_USE",1e3)];case 1:if(!i.sent())return[3,6];i.label=2;case 2:return i.trys.push([2,4,5,6]),void 0===(c=w())?[2,{value:{result:"SESSION_EXPIRED"}}]:c!==t?[2,{value:{result:"RETRY"}}]:(l=f.getToken(t),h=r({},s),void 0!==l&&(h=r({},h,{"anti-csrf":l})),h=r({},h,{"fdi-version":u.supported_fdi.join(",")}),[4,v.originalFetch(e,{method:"post",credentials:"include",headers:h})]);case 3:if(p=i.sent(),g=!0,p.headers.forEach((function(e,t){"id-refresh-token"===t.toString()&&(m(e,n),g=!1)})),p.status===a&&g&&m("remove",n),p.status>=300)throw p;return void 0===w()?[2,{value:{result:"SESSION_EXPIRED"}}]:(p.headers.forEach((function(e,t){"anti-csrf"===t.toString()?f.setItem(w(),e):"front-token"===t.toString()&&d.setItem(e)})),[2,{value:{result:"RETRY"}}]);case 4:return T=i.sent(),void 0===w()?[2,{value:{result:"SESSION_EXPIRED"}}]:[2,{value:{result:"API_ERROR",error:T}}];case 5:return o.releaseLock("REFRESH_TOKEN_USE"),[7];case 6:return void 0===(y=w())?[2,{value:{result:"SESSION_EXPIRED"}}]:y!==t?[2,{value:{result:"RETRY"}}]:[2]}}))},p.label=1;case 1:return[5,l()];case 2:return"object"==typeof(h=p.sent())?[2,h.value]:[3,1];case 3:return[2]}}))}))}function w(){var e=("; "+l.getWindowOrThrow().document.cookie).split("; sIRTFrontend=");if(e.length>=2){var t=e.pop();if(void 0!==t)return t.split(";").shift()}}function m(e,t){var n="Thu, 01 Jan 1970 00:00:01 GMT",r="";if("remove"!==e){var o=e.split(";");r=o[0],n=new Date(Number(o[1])).toUTCString()}"localhost"===t||t===window.location.hostname?l.getWindowOrThrow().document.cookie="sIRTFrontend="+r+";expires="+n+";path=/":l.getWindowOrThrow().document.cookie="sIRTFrontend="+r+";expires="+n+";domain="+t+";path=/"}function g(e){var t=("; "+l.getWindowOrThrow().document.cookie).split("; sAntiCsrf=");if(t.length>=2){var n=t.pop();if(void 0!==n){var r=n.split(";").shift();return void 0===r?null:r}}var o=l.getWindowOrThrow().localStorage.getItem("anti-csrf-localstorage");return null!==o?(T(o,e),l.getWindowOrThrow().localStorage.removeItem("anti-csrf-localstorage"),o):null}function T(e,t){var n="Thu, 01 Jan 1970 00:00:01 GMT",r="";void 0!==e&&(r=e,n=void 0),"localhost"===t||t===window.location.hostname?l.getWindowOrThrow().document.cookie=void 0!==n?"sAntiCsrf="+r+";expires="+n+";path=/":"sAntiCsrf="+r+";path=/":l.getWindowOrThrow().document.cookie=void 0!==n?"sAntiCsrf="+r+";expires="+n+";domain="+t+";path=/":"sAntiCsrf="+r+";domain="+t+";path=/",void 0===e&&l.getWindowOrThrow().localStorage.removeItem("anti-csrf-localstorage")}function y(){var e=("; "+l.getWindowOrThrow().document.cookie).split("; sFrontToken=");if(e.length>=2){var t=e.pop();if(void 0!==t){var n=t.split(";").shift();return void 0===n?null:n}}return null}function k(e,t){var n="Thu, 01 Jan 1970 00:00:01 GMT",r="";void 0!==e&&(r=e,n=void 0),"localhost"===t||t===window.location.hostname?l.getWindowOrThrow().document.cookie=void 0!==n?"sFrontToken="+r+";expires="+n+";path=/":"sFrontToken="+r+";path=/":l.getWindowOrThrow().document.cookie=void 0!==n?"sFrontToken="+r+";expires="+n+";domain="+t+";path=/":"sFrontToken="+r+";domain="+t+";path=/"}t.onUnauthorisedResponse=p,t.getIDFromCookie=w,t.setIDToCookie=m,t.getAntiCSRFromCookie=g,t.setAntiCSRFToCookie=T,t.getFrontTokenFromCookie=y,t.setFrontTokenToCookie=k}).call(this,n(5))},function(e,t,n){"use strict";(function(e){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.CALLING_INTERCEPTION_REQUEST=0]="CALLING_INTERCEPTION_REQUEST",e[e.CALLING_INTERCEPTION_RESPONSE=1]="CALLING_INTERCEPTION_RESPONSE"}(t.PROCESS_STATE||(t.PROCESS_STATE={}));var o=function(){function t(){var t=this;this.history=[],this.addState=function(n){void 0!==e&&void 0!==e.env&&"testing"===e.env.TEST_MODE&&t.history.push(n)},this.getEventByLastEventByName=function(e){for(var n=t.history.length-1;n>=0;n--)if(t.history[n]==e)return t.history[n]},this.reset=function(){t.history=[]},this.waitForEvent=function(e,o){return void 0===o&&(o=7e3),n(t,void 0,void 0,(function(){var t,n=this;return r(this,(function(r){return t=Date.now(),[2,new Promise((function(r){var i=n;!function n(){var s=i.getEventByLastEventByName(e);void 0===s?Date.now()-t>o?r(void 0):setTimeout(n,1e3):r(s)}()}))]}))}))}}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t}();t.ProcessState=o}).call(this,n(6))},function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=!1),e=e.trim().toLowerCase();try{if(!e.startsWith("http://")&&!e.startsWith("https://")&&!e.startsWith("supertokens://"))throw new Error("converting to proper URL");var n=new URL(e);return e=t?n.hostname.startsWith("localhost")||(o=n.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+n.host:"https://"+n.host:n.protocol+"//"+n.host}catch(e){}var o;if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),r(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}function o(e){e=e.trim().toLowerCase();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return o(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),o("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}function i(e){var t=function(e){(e=e.trim().toLowerCase()).startsWith(".")&&(e=e.substr(1)),e.startsWith("http://")||e.startsWith("https://")||(e="http://"+e);try{return(e=new URL(e).hostname).startsWith(".")&&(e=e.substr(1)),e}catch(e){throw new Error("Please provide a valid sessionScope")}}(e);return"localhost"===t||/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)?t:e.startsWith(".")?"."+t:t}function s(){if("undefined"==typeof window)throw Error("If you are using this package with server-side rendering, please make sure that you are checking if the window object is defined.");return window}Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseURLDomainOrThrowError=r,t.normaliseURLPathOrThrowError=o,t.normaliseSessionScopeOrThrowError=i,t.validateAndNormaliseInputOrThrowError=function(e){var t=r(e.apiDomain),n=o("/auth");void 0!==e.apiBasePath&&(n=o(e.apiBasePath));var a=i(s().location.hostname);void 0!==e.sessionScope&&(a=i(e.sessionScope));var u={};void 0!==e.refreshAPICustomHeaders&&(u=e.refreshAPICustomHeaders);var c=401;void 0!==e.sessionExpiredStatusCode&&(c=e.sessionExpiredStatusCode);var l=!0;return void 0!==e.autoAddCredentials&&(l=e.autoAddCredentials),{apiDomain:t,apiBasePath:n,sessionScope:a,refreshAPICustomHeaders:u,sessionExpiredStatusCode:c,autoAddCredentials:l}},t.getWindowOrThrow=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(4))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this;Object.defineProperty(t,"__esModule",{value:!0});var s=n(0),a=n(10),u=function(){function e(){}return e.init=function(e){s.default.init(e)},e.setAuth0API=function(e){return s.default.setAuth0API(e)},e.getUserId=function(){return s.default.getUserId()},e.getJWTPayloadSecurely=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){return[2,s.default.getJWTPayloadSecurely()]}))}))},e.getAuth0API=function(){return s.default.getAuth0API()},e.getRefreshURLDomain=function(){return s.default.getRefreshURLDomain()},e.attemptRefreshingSession=function(){return r(i,void 0,void 0,(function(){return o(this,(function(e){return[2,s.default.attemptRefreshingSession()]}))}))},e.doesSessionExist=function(){return s.default.doesSessionExist()},e.addAxiosInterceptors=function(e){return a.default.addAxiosInterceptors(e)},e}();t.default=u,t.init=u.init,t.setAuth0API=u.setAuth0API,t.getAuth0API=u.getAuth0API,t.getRefreshURLDomain=u.getRefreshURLDomain,t.getUserId=u.getUserId,t.getJWTPayloadSecurely=u.getJWTPayloadSecurely,t.attemptRefreshingSession=u.attemptRefreshingSession,t.doesSessionExist=u.doesSessionExist,t.addAxiosInterceptors=u.addAxiosInterceptors},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=a(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new v(e,t)),1!==c.length||l||a(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.package_version="5.0.3",t.supported_fdi=["1.3","1.4"]},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9);function s(e){return new Promise((function(t){return setTimeout(t,e)}))}function a(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",r=0;r<e;r++){n+=t[Math.floor(Math.random()*t.length)]}return n}var u=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+a(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,n){return void 0===n&&(n=5e3),r(this,void 0,void 0,(function(){var r,i,u,c,l,f;return o(this,(function(o){switch(o.label){case 0:r=Date.now()+a(4),i=Date.now()+n,u="browser-tabs-lock-key-"+t,c=window.localStorage,o.label=1;case 1:return Date.now()<i?[4,s(30)]:[3,8];case 2:return o.sent(),null!==c.getItem(u)?[3,5]:(l=this.id+"-"+t+"-"+r,[4,s(Math.floor(25*Math.random()))]);case 3:return o.sent(),c.setItem(u,JSON.stringify({id:this.id,iat:r,timeoutKey:l,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,s(30)];case 4:return o.sent(),null!==(f=c.getItem(u))&&(f=JSON.parse(f)).id===this.id&&f.iat===r?(this.acquiredIatSet.add(r),this.refreshLockWhileAcquired(u,r),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(i)];case 6:o.sent(),o.label=7;case 7:return r=Date.now()+a(4),[3,1];case 8:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return r(this,void 0,void 0,(function(){var n=this;return o(this,(function(s){return setTimeout((function(){return r(n,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return[4,i.default().lock(t)];case 1:return o.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(r=n.getItem(e))?(i.default().unlock(t),[2]):((r=JSON.parse(r)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(r)),i.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(i.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var r=!1,o=Date.now(),i=!1;function s(){if(i||(window.removeEventListener("storage",s),e.removeFromWaiting(s),clearTimeout(a),i=!0),!r){r=!0;var t=50-(Date.now()-o);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",s),e.addToWaiting(s);var a=setTimeout(s,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}))},e.prototype.releaseLock=function(e){return r(this,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return r(this,void 0,void 0,(function(){var n,r,s;return o(this,(function(o){switch(o.label){case 0:return n=window.localStorage,r="browser-tabs-lock-key-"+t,null===(s=n.getItem(r))?[2]:(s=JSON.parse(s)).id!==this.id?[3,2]:[4,i.default().lock(s.iat)];case 1:o.sent(),this.acquiredIatSet.delete(s.iat),n.removeItem(r),i.default().unlock(s.iat),e.notifyWaiters(),o.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,r=Object.keys(n),o=!1,i=0;i<r.length;i++){var s=r[i];if(s.includes("browser-tabs-lock-key")){var a=n.getItem(s);null!==a&&(void 0===(a=JSON.parse(a)).timeRefreshed&&a.timeAcquired<t||void 0!==a.timeRefreshed&&a.timeRefreshed<t)&&(n.removeItem(s),o=!0)}}o&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var r=e.locked.get(t);void 0===r?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(r.unshift(n),e.locked.set(t,r))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,r){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var r=n.pop();e.locked.set(t,n),void 0!==r&&setTimeout(r,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return r.getInstance()}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this;Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n(1),c=n(2);function l(e){var t=void 0===e.url?"":e.url,n=e.baseURL;return void 0!==n&&(t="/"===t.charAt(0)&&"/"===n.charAt(n.length-1)?n+t.substr(1):"/"!==t.charAt(0)&&"/"!==n.charAt(n.length-1)?n+"/"+t:n+t),t}function f(e){return o(this,void 0,void 0,(function(){var t,n,o,s;return i(this,(function(i){return"string"==typeof(t=l(e))&&c.normaliseURLDomainOrThrowError(t)!==a.default.apiDomain?[2,e]:(u.ProcessState.getInstance().addState(u.PROCESS_STATE.CALLING_INTERCEPTION_REQUEST),n=a.getIDFromCookie(),o=a.AntiCsrfToken.getToken(n),s=e,void 0!==o&&(s=r({},s,{headers:void 0===s?{"anti-csrf":o}:r({},s.headers,{"anti-csrf":o})})),a.default.autoAddCredentials&&void 0===s.withCredentials&&(s=r({},s,{withCredentials:!0})),[2,s])}))}))}function d(e){var t=this;return function(n){return o(t,void 0,void 0,(function(){var t,r,o,s,f;return i(this,(function(i){try{if(!a.default.initCalled)throw new Error("init function not called");return"string"==typeof(t=l(n.config))&&c.normaliseURLDomainOrThrowError(t)!==a.default.apiDomain?[2,n]:(u.ProcessState.getInstance().addState(u.PROCESS_STATE.CALLING_INTERCEPTION_RESPONSE),void 0!==(r=n.headers["id-refresh-token"])&&a.setIDToCookie(r,a.default.sessionScope),n.status===a.default.sessionExpiredStatusCode?(o=n.config,[2,h.doRequest((function(t){return e(t)}),o,t,n,!0)]):(void 0!==(s=n.headers["anti-csrf"])&&a.AntiCsrfToken.setItem(a.getIDFromCookie(),s),void 0!==(f=n.headers["front-token"])&&a.FrontToken.setItem(f),[2,n]))}finally{void 0===a.getIDFromCookie()&&(a.AntiCsrfToken.removeToken(),a.FrontToken.removeToken())}return[2]}))}))}}t.interceptorFunctionRequestFulfilled=f,t.responseInterceptor=d;var h=function(){function e(){}return e.doRequest=function(e,t,n,u,l,f){return void 0===f&&(f=!1),o(s,void 0,void 0,(function(){var o,s,d,h,v,p,w,m,g,T,y,k,S;return i(this,(function(i){switch(i.label){case 0:if(!a.default.initCalled)throw Error("init function not called");if("string"!=typeof n||c.normaliseURLDomainOrThrowError(n)===a.default.apiDomain||!f)return[3,2];if(void 0!==l)throw l;return void 0!==u?[2,u]:[4,e(t)];case 1:return[2,i.sent()];case 2:i.trys.push([2,,17,18]),o=!1,s=void 0,i.label=3;case 3:0,d=a.getIDFromCookie(),h=a.AntiCsrfToken.getToken(d),v=t,void 0!==h&&(v=r({},v,{headers:void 0===v?{"anti-csrf":h}:r({},v.headers,{"anti-csrf":h})})),a.default.autoAddCredentials&&void 0===v.withCredentials&&(v=r({},v,{withCredentials:!0})),i.label=4;case 4:if(i.trys.push([4,11,,15]),p=l,w=u,l=void 0,u=void 0,void 0!==p)throw p;return void 0!==w?[3,6]:[4,e(v)];case 5:return g=i.sent(),[3,7];case 6:g=w,i.label=7;case 7:return void 0!==(T=(m=g).headers["id-refresh-token"])&&a.setIDToCookie(T,a.default.sessionScope),m.status!==a.default.sessionExpiredStatusCode?[3,9]:[4,a.handleUnauthorised(a.default.refreshTokenUrl,d,a.default.sessionScope,a.default.refreshAPICustomHeaders,a.default.sessionExpiredStatusCode)];case 8:return i.sent()?[3,10]:(s=m,[3,16]);case 9:return void 0!==(y=m.headers["anti-csrf"])&&a.AntiCsrfToken.setItem(a.getIDFromCookie(),y),void 0!==(k=m.headers["front-token"])&&a.FrontToken.setItem(k),[2,m];case 10:return[3,15];case 11:return void 0===(S=i.sent()).response||S.response.status!==a.default.sessionExpiredStatusCode?[3,13]:[4,a.handleUnauthorised(a.default.refreshTokenUrl,d,a.default.sessionScope,a.default.refreshAPICustomHeaders,a.default.sessionExpiredStatusCode)];case 12:return i.sent()?[3,14]:(o=!0,s=S,[3,16]);case 13:throw S;case 14:return[3,15];case 15:return[3,3];case 16:if(o)throw s;return[2,s];case 17:return void 0===a.getIDFromCookie()&&(a.AntiCsrfToken.removeToken(),a.FrontToken.removeToken()),[7];case 18:return[2]}}))}))},e.addAxiosInterceptors=function(t){for(var n=t.interceptors.request,r=0;r<n.handlers.length;r++)if(n.handlers[r].fulfilled===f)return;t.interceptors.request.use(f,(function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){throw e}))}))})),t.interceptors.response.use(d(t),(function(n){return o(this,void 0,void 0,(function(){var r;return i(this,(function(o){if(!a.default.initCalled)throw new Error("init function not called");try{if(void 0!==n.response&&n.response.status===a.default.sessionExpiredStatusCode)return r=n.config,[2,e.doRequest((function(e){return t(e)}),r,l(r),void 0,n,!0)];throw n}finally{void 0===a.getIDFromCookie()&&(a.AntiCsrfToken.removeToken(),a.FrontToken.removeToken())}return[2]}))}))}))},e}();t.default=h}]);