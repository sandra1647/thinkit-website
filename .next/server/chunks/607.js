"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 1607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const HomeDev = ({
  extraFaq
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("collapseOne");

  const setToggleValue = value => setToggle(value === toggle ? "" : value),
        activeToggle = value => value === toggle ? "collapsed" : "",
        expanded = value => value === toggle ? true : false;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion, {
    className: "faq-accordian faq-accordian-one wow fadeInUp",
    defaultActiveKey: "collapseOne",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "card-header",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Toggle, {
          as: "a",
          eventKey: "collapseOne",
          href: "#collapseOne",
          onClick: () => setToggleValue("collapseOne"),
          "aria-expanded": expanded("collapseOne"),
          className: activeToggle("collapseOne"),
          children: "Create An Engaging And Useful Chatbot"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Collapse, {
        eventKey: "collapseOne",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "card-body",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quase"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "card-header",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Toggle, {
          as: "a",
          eventKey: "collapseTwo",
          href: "#collapseTwo",
          onClick: () => setToggleValue("collapseTwo"),
          "aria-expanded": expanded("collapseTwo"),
          className: activeToggle("collapseTwo"),
          children: "Design To Developer-Friendly React Code"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Collapse, {
        eventKey: "collapseTwo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "card-body",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quase"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "card-header",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Toggle, {
          as: "a",
          eventKey: "collapse4",
          href: "#collapse4",
          onClick: () => setToggleValue("collapse4"),
          "aria-expanded": expanded("collapse4"),
          className: activeToggle("collapse4"),
          children: "Obscure Mobile Design Techniques That Boost UX"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Collapse, {
        eventKey: "collapse4",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "card-body",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quase"
          })
        })
      })]
    }), extraFaq && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "card",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: "card-header",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Toggle, {
          as: "a",
          eventKey: "collapse3",
          href: "#collapse3",
          onClick: () => setToggleValue("collapse3"),
          "aria-expanded": expanded("collapse3"),
          className: activeToggle("collapse3"),
          children: "Making Remote Work Work Useful"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Accordion.Collapse, {
        eventKey: "collapse3",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "card-body",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus antium doloremque laudantium totam rem aperiam, eaque ipsa quae abillo inventore veritatis et quase"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeDev);

/***/ })

};
;