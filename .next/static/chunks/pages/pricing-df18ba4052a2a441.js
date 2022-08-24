(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{3579:function(e,s,a){"use strict";var i=a(930);function l(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?l(Object(a),!0).forEach((function(s){i(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}s.default=function(e,s){var a=r.default,i={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?i.loader=function(){return e}:"function"===typeof e?i.loader=e:"object"===typeof e&&(i=c(c({},i),e));var l=i=c(c({},i),s);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return a(l);i.loadableGenerated&&delete(i=c(c({},i),i.loadableGenerated)).loadableGenerated;if("boolean"===typeof i.ssr){if(!i.ssr)return delete i.ssr,t(a,i);delete i.ssr}return a(i)};n(a(7294));var r=n(a(3668));function n(e){return e&&e.__esModule?e:{default:e}}function t(e,s){return delete s.webpack,delete s.modules,e(s)}},3982:function(e,s,a){"use strict";var i;Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var l=((i=a(7294))&&i.__esModule?i:{default:i}).default.createContext(null);s.LoadableContext=l},3668:function(e,s,a){"use strict";var i=a(3227),l=a(8361),c=a(930);function r(e,s){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);s&&(i=i.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?r(Object(a),!0).forEach((function(s){c(e,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))}))}return e}function t(e,s){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,s){if(!e)return;if("string"===typeof e)return d(e,s);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,s)}(e))||s&&e&&"number"===typeof e.length){a&&(e=a);var i=0,l=function(){};return{s:l,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,r=!0,n=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){n=!0,c=e},f:function(){try{r||null==a.return||a.return()}finally{if(n)throw c}}}}function d(e,s){(null==s||s>e.length)&&(s=e.length);for(var a=0,i=new Array(s);a<s;a++)i[a]=e[a];return i}Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o,h=(o=a(7294))&&o.__esModule?o:{default:o},m=a(7161),u=a(3982);var p=[],j=[],x=!1;function N(e){var s=e(),a={loading:!0,loaded:null,error:null};return a.promise=s.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}var g=function(){function e(s,a){i(this,e),this._loadFn=s,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return l(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var s=this._res,a=this._opts;s.loading&&("number"===typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),a.delay)),"number"===typeof a.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),a.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(s){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=n(n({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var s=this;return this._callbacks.add(e),function(){s._callbacks.delete(e)}}}]),e}();function b(e){return function(e,s){var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},s);a.suspense&&(a.lazy=h.default.lazy(a.loader));var i=null;function l(){if(!i){var s=new g(e,a);i={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return i.promise()}if(!x&&!a.suspense){var c=a.webpack?a.webpack():a.modules;c&&j.push((function(e){var s,a=t(c);try{for(a.s();!(s=a.n()).done;){var i=s.value;if(-1!==e.indexOf(i))return l()}}catch(r){a.e(r)}finally{a.f()}}))}var r=a.suspense?function(e,s){return h.default.createElement(a.lazy,n(n({},e),{},{ref:s}))}:function(e,s){l();var c=h.default.useContext(u.LoadableContext),r=m.useSubscription(i);return h.default.useImperativeHandle(s,(function(){return{retry:i.retry}}),[]),c&&Array.isArray(a.modules)&&a.modules.forEach((function(e){c(e)})),h.default.useMemo((function(){return r.loading||r.error?h.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:i.retry}):r.loaded?h.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return r.preload=function(){return!a.suspense&&l()},r.displayName="LoadableComponent",h.default.forwardRef(r)}(N,e)}function v(e,s){for(var a=[];e.length;){var i=e.pop();a.push(i(s))}return Promise.all(a).then((function(){if(e.length)return v(e,s)}))}b.preloadAll=function(){return new Promise((function(e,s){v(p).then(e,s)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(s){var a=function(){return x=!0,s()};v(j,e).then(a,a)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var f=b;s.default=f},9496:function(e,s,a){"use strict";a.r(s);var i=a(5152),l=a(4696),c=a(6128),r=a(5950),n=a(3578),t=a(5893),d=(0,i.default)((function(){return Promise.all([a.e(279),a.e(534)]).then(a.bind(a,8534))}),{ssr:!1,loadableGenerated:{webpack:function(){return[8534]}}});s.default=function(){return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)(r.Z,{pageName:"Pricing Plan"}),(0,t.jsx)("section",{className:"pricing-area pricing-style-two pt-130 pb-90",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)(l.Z.Container,{defaultActiveKey:"monthly",children:[(0,t.jsxs)("div",{className:"row align-items-end",children:[(0,t.jsx)("div",{className:"col-md-7",children:(0,t.jsxs)("div",{className:"section-title mb-50 wow fadeInLeft",children:[(0,t.jsx)("span",{className:"sub-title sub-title-bg blue-light-bg",children:"our pricing package"}),(0,t.jsx)("h2",{className:"text-underline",children:"We Provide an Smart Pricing Package For IT Solutions"})]})}),(0,t.jsx)("div",{className:"col-md-5",children:(0,t.jsx)("div",{className:"pricing-nav float-lg-right mb-65 wow fadeInRight",children:(0,t.jsxs)(c.Z,{as:"ul",className:"nav nav-tabs",children:[(0,t.jsx)(c.Z.Item,{as:"li",children:(0,t.jsx)(c.Z.Link,{as:"a",eventKey:"monthly",className:"nav-link","data-toggle":"tab",href:"#monthly",children:"Monthly"})}),(0,t.jsx)(c.Z.Item,{as:"li",children:(0,t.jsx)(c.Z.Link,{as:"a",eventKey:"yearly",className:"nav-link","data-toggle":"tab",href:"#yearly",children:"Yearly"})})]})})})]}),(0,t.jsxs)(l.Z.Content,{className:"tab-content wow fadeInUp",children:[(0,t.jsx)(l.Z.Pane,{eventKey:"monthly",className:"tab-pane fade",id:"monthly",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"19.99",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Basic Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"28.97",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Regular Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"63.92",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Standard Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"89.99",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Silver Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})})]})}),(0,t.jsx)(l.Z.Pane,{eventKey:"yearly",className:"tab-pane",id:"yearly",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"19.99",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Basic Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"28.97",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Regular Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"63.92",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Standard Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})}),(0,t.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40",children:[(0,t.jsxs)("div",{className:"pricing-title-price mb-25",children:[(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"89.99",(0,t.jsx)("span",{className:"sm-text",children:"Monthly"})]})}),(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Silver Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("a",{href:"#",className:"main-btn btn-purple",children:"Choose this pricing"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]})]})]})})]})})]})]})})}),(0,t.jsx)("section",{className:"pricing-area pricing-style-one bg_cover pt-110 pb-105",style:{backgroundImage:"url(assets/images/bg/pricing-bg-1.jpg)"},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("div",{className:"row justify-content-center",children:(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("div",{className:"section-title section-title-white text-center mb-65 wow fadeInUp",children:[(0,t.jsx)("span",{className:"sub-title sub-title-bg blue-light-bg",children:"Awesome pricing plan"}),(0,t.jsx)("h2",{className:"text-underline",children:"we provide an smart pricing package for it solutions"})]})})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40 wow fadeInUp","data-wow-delay":".2s",children:[(0,t.jsxs)("div",{className:"pricing-title-price",children:[(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Basic Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]}),(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"19.99",(0,t.jsx)("span",{className:"sm-text",children:"for Monthly"})]})})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("p",{children:"Take a trivial example which of us ever undertakes laborious physical exercise On the other hand"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Synced To Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"uncheck",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"uncheck",children:"Social Media Integration"}),(0,t.jsx)("li",{className:"uncheck",children:"Unlimited Features"})]}),(0,t.jsx)("a",{href:"#",className:"main-btn",children:"Choose this pricing"})]})]})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40 wow fadeInUp","data-wow-delay":".3s",children:[(0,t.jsxs)("div",{className:"pricing-title-price",children:[(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Regular Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]}),(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"39.99",(0,t.jsx)("span",{className:"sm-text",children:"for Monthly"})]})})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("p",{children:"Take a trivial example which of us ever undertakes laborious physical exercise On the other hand"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Synced To Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"check",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"check",children:"Social Media Integration"}),(0,t.jsx)("li",{className:"check",children:"Unlimited Features"})]}),(0,t.jsx)("a",{href:"#",className:"main-btn",children:"Choose this pricing"})]})]})}),(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-12",children:(0,t.jsxs)("div",{className:"pricing-item mb-40 wow fadeInUp","data-wow-delay":".4s",children:[(0,t.jsxs)("div",{className:"pricing-title-price",children:[(0,t.jsxs)("div",{className:"pricing-title",children:[(0,t.jsx)("h3",{className:"title",children:"Silver Plan"}),(0,t.jsx)("span",{className:"discount",children:"25% Save Package"})]}),(0,t.jsx)("div",{className:"pricing-price",children:(0,t.jsxs)("h3",{className:"price",children:[(0,t.jsx)("span",{className:"currency",children:"$"}),"99.99",(0,t.jsx)("span",{className:"sm-text",children:"for Monthly"})]})})]}),(0,t.jsxs)("div",{className:"pricing-body",children:[(0,t.jsx)("p",{children:"Take a trivial example which of us ever undertakes laborious physical exercise On the other hand"}),(0,t.jsxs)("ul",{className:"list",children:[(0,t.jsx)("li",{className:"check",children:"30 Days Trial Features"}),(0,t.jsx)("li",{className:"check",children:"Synced To Cloud Database"}),(0,t.jsx)("li",{className:"check",children:"Easy Website Builder"}),(0,t.jsx)("li",{className:"check",children:"10 Hours Of Support"}),(0,t.jsx)("li",{className:"check",children:"Social Media Integration"}),(0,t.jsx)("li",{className:"check",children:"Unlimited Features"})]}),(0,t.jsx)("a",{href:"#",className:"main-btn",children:"Choose this pricing"})]})]})})]})]})}),(0,t.jsxs)("section",{className:"skill-area skill-style-one pt-130 pb-70",children:[(0,t.jsxs)("div",{className:"objects",children:[(0,t.jsx)("img",{src:"assets/images/objects/object-5.png",className:"img-1",alt:"object image"}),(0,t.jsx)("img",{src:"assets/images/objects/object-6.png",className:"img-2",alt:"object image"})]}),(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row align-items-center",children:[(0,t.jsx)("div",{className:"col-lg-7",children:(0,t.jsxs)("div",{className:"skill-img-box mb-60",children:[(0,t.jsx)("div",{className:"shape",children:(0,t.jsx)("img",{src:"assets/images/objects/object-7.png",className:"img-1",alt:"object image"})}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-5",children:(0,t.jsx)("div",{className:"skill-img wow fadeInUp",children:(0,t.jsx)("img",{src:"assets/images/skill/img-1.jpg",alt:""})})}),(0,t.jsx)("div",{className:"col-md-7",children:(0,t.jsx)("div",{className:"skill-img mt-60 wow fadeInDown",children:(0,t.jsx)("img",{src:"assets/images/skill/img-2.jpg",alt:""})})})]})]})}),(0,t.jsx)("div",{className:"col-lg-5",children:(0,t.jsxs)("div",{className:"skill-content-box mb-60",children:[(0,t.jsxs)("div",{className:"section-title section-title-two mb-35 wow fadeInUp",children:[(0,t.jsx)("span",{className:"sub-title sub-title-bg blue-light-bg",children:"latest skills"}),(0,t.jsxs)("h2",{className:"text-underline",children:["We\u2019re Very Professional & Experience Agency"," "]})]}),(0,t.jsx)("p",{children:"Sed perspiciatis unde omnis natus voluptate accusantie doloremque laudantium totam rem aperiam eaque quaea vtore eritatis quasi architecto beatae vitae"}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"skill-item wow fadeInUp",children:[(0,t.jsxs)("div",{className:"skill-bar",children:[(0,t.jsx)(d,{value:89,color:"#43baff",background:"rgba(67, 186, 255, 0.1)"}),(0,t.jsxs)("h2",{className:"number",children:["89",(0,t.jsx)("span",{className:"sign",children:"%"})]})]}),(0,t.jsxs)("div",{className:"text",children:[(0,t.jsx)("h3",{children:"IT Consulting"}),(0,t.jsx)("p",{children:"Sed perspic unde omnise voluptate accusantie"})]})]})}),(0,t.jsx)("div",{className:"col-md-6",children:(0,t.jsxs)("div",{className:"skill-item wow fadeInUp",children:[(0,t.jsxs)("div",{className:"skill-bar",children:[(0,t.jsx)(d,{value:67,color:"#7141B1",background:"rgba(113, 65, 177, 0.1)"}),(0,t.jsxs)("h2",{className:"number",children:["67",(0,t.jsx)("span",{className:"sign",children:"%"})]})]}),(0,t.jsxs)("div",{className:"text",children:[(0,t.jsx)("h3",{children:"Management"}),(0,t.jsx)("p",{children:"Sed perspic unde omnise voluptate accusantie"})]})]})})]})]})})]})})]})]})}},5950:function(e,s,a){"use strict";var i=a(1664),l=a(5893);s.Z=function(e){var s=e.pageTitle,a=e.pageName;return(0,l.jsx)("section",{className:"hero-area",children:(0,l.jsx)("div",{className:"breadcrumbs-wrapper bg_cover",style:{backgroundImage:"url(assets/images/bg/breadcrumbs-bg-1.jpg)"},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsxs)("div",{className:"page-title-text text-center",children:[(0,l.jsx)("h1",{className:"title",children:s||a}),(0,l.jsxs)("ul",{className:"breadcrumbs-link",children:[(0,l.jsx)("li",{children:(0,l.jsx)(i.default,{href:"/",children:"Home"})}),(0,l.jsx)("li",{className:"active",children:a})]})]})})})})})})}},9650:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return a(9496)}])},5152:function(e,s,a){e.exports=a(3579)},8217:function(e,s,a){"use strict";var i=a(6086),l=a(7294);s.useSubscription=function(e){var s=e.getCurrentValue,a=e.subscribe,c=l.useState((function(){return{getCurrentValue:s,subscribe:a,value:s()}}));e=c[0];var r=c[1];return c=e.value,e.getCurrentValue===s&&e.subscribe===a||(c=s(),r({getCurrentValue:s,subscribe:a,value:c})),l.useDebugValue(c),l.useEffect((function(){function e(){if(!l){var e=s();r((function(l){return l.getCurrentValue!==s||l.subscribe!==a||l.value===e?l:i({},l,{value:e})}))}}var l=!1,c=a(e);return e(),function(){l=!0,c()}}),[s,a]),c}},7161:function(e,s,a){"use strict";e.exports=a(8217)}},function(e){e.O(0,[175,281,578,774,888,179],(function(){return s=9650,e(e.s=s);var s}));var s=e.O();_N_E=s}]);