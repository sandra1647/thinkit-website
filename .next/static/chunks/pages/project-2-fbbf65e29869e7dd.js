(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{3579:function(e,t,r){"use strict";var n=r(930);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=o.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));var u=n=a(a({},n),t);if(u.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(u.suspense)return r(u);n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,s(r,n);delete n.ssr}return r(n)};i(r(7294));var o=i(r(3668));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}},3982:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var u=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=u},3668:function(e,t,r){"use strict";var n=r(3227),u=r(8361),a=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,u=function(){};return{s:u,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==r.return||r.return()}finally{if(i)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,f=(c=r(7294))&&c.__esModule?c:{default:c},d=r(7161),p=r(3982);var b=[],h=[],y=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var v=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i(i({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=f.default.lazy(r.loader));var n=null;function u(){if(!n){var t=new v(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!y&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&h.push((function(e){var t,r=s(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return u()}}catch(o){r.e(o)}finally{r.f()}}))}var o=r.suspense?function(e,t){return f.default.createElement(r.lazy,i(i({},e),{},{ref:t}))}:function(e,t){u();var a=f.default.useContext(p.LoadableContext),o=d.useSubscription(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return o.loading||o.error?f.default.createElement(r.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return o.preload=function(){return!r.suspense&&u()},o.displayName="LoadableComponent",f.default.forwardRef(o)}(m,e)}function g(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return g(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){g(b).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return y=!0,t()};g(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var j=_;t.default=j},6494:function(e,t,r){"use strict";r.r(t);var n=r(5152),u=r(5950),a=r(3578),o=r(5893),i=(0,n.default)((function(){return Promise.all([r.e(391),r.e(673)]).then(r.bind(r,6673))}),{ssr:!1,loadableGenerated:{webpack:function(){return[6673]}}});t.default=function(){return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(u.Z,{pageName:"Portfolio Masonry"}),(0,o.jsx)(i,{})]})}},5950:function(e,t,r){"use strict";var n=r(1664),u=r(5893);t.Z=function(e){var t=e.pageTitle,r=e.pageName;return(0,u.jsx)("section",{className:"hero-area",children:(0,u.jsx)("div",{className:"breadcrumbs-wrapper bg_cover",style:{backgroundImage:"url(assets/images/bg/breadcrumbs-bg-1.jpg)"},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row justify-content-center",children:(0,u.jsx)("div",{className:"col-lg-8",children:(0,u.jsxs)("div",{className:"page-title-text text-center",children:[(0,u.jsx)("h1",{className:"title",children:t||r}),(0,u.jsxs)("ul",{className:"breadcrumbs-link",children:[(0,u.jsx)("li",{children:(0,u.jsx)(n.default,{href:"/",children:"Home"})}),(0,u.jsx)("li",{className:"active",children:r})]})]})})})})})})}},1588:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project-2",function(){return r(6494)}])},5152:function(e,t,r){e.exports=r(3579)},8217:function(e,t,r){"use strict";var n=r(6086),u=r(7294);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,a=u.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=a[0];var o=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===r||(a=t(),o({getCurrentValue:t,subscribe:r,value:a})),u.useDebugValue(a),u.useEffect((function(){function e(){if(!u){var e=t();o((function(u){return u.getCurrentValue!==t||u.subscribe!==r||u.value===e?u:n({},u,{value:e})}))}}var u=!1,a=r(e);return e(),function(){u=!0,a()}}),[t,r]),a}},7161:function(e,t,r){"use strict";e.exports=r(8217)}},function(e){e.O(0,[175,578,774,888,179],(function(){return t=1588,e(e.s=t);var t}));var t=e.O();_N_E=t}]);