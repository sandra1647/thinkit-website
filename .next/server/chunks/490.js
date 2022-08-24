"use strict";
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 8490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var nouislider_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(989);
/* harmony import */ var nouislider_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class RangeSlider extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      textValue: null,
      percent: null,
      start: 20,
      end: 800
    });

    _defineProperty(this, "onSlide", (render, handle, value, un, percent) => {
      this.setState({
        textValue: value[0].toFixed(2),
        percent: percent[0].toFixed(2)
      });
    });

    _defineProperty(this, "updateValues", value => {
      this.setState({
        start: value[0],
        end: value[1]
      });
    });
  }

  render() {
    const {
      start,
      end
    } = this.state;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((nouislider_react__WEBPACK_IMPORTED_MODULE_0___default()), {
        connect: true,
        range: {
          min: 0,
          max: 1000
        },
        start: [20, 800],
        onSlide: this.onSlide,
        onUpdate: value => this.updateValues(value)
      }), start && end && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "price-number mt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
          className: "amount",
          children: ["$", start, " - $", end]
        })
      })]
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSlider);

/***/ })

};
;