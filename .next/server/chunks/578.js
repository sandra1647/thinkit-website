"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Newsletter = ({
  btnColor,
  bg,
  noBg,
  bgColor
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
    className: "newsletter-area newsletter-style-one",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `newsletter-wrapper bg_cover wow fadeInDown ${bgColor ? bgColor : ""}`,
        style: !noBg ? {
          backgroundImage: `url(assets/images/bg/newsletter-bg-${bg ? bg : 2}.jpg)`
        } : {},
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "newsletter-content-box",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "icon",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                  className: "flaticon-email-1"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "content",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  children: "Get Special Rewards"
                })
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "newsletter-form",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: e => e.preventDefault(),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "form_group",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "email",
                    className: "form_control",
                    placeholder: "Enter Address",
                    name: "email",
                    required: ""
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                    className: "far fa-map-marker-alt"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: `main-btn btn-${btnColor ? btnColor : "purple"}`,
                    children: "Subscribe"
                  })]
                })
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Newsletter);

/***/ }),

/***/ 1855:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const SearchModal = ({
  show,
  setShow
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    show: show,
    onHide: setShow,
    centered: true,
    className: "search-modal",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("form", {
      onSubmit: e => {
        e.preventDefault();
        setShow();
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "form_group",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("input", {
          type: "text",
          className: "form_control",
          placeholder: "Unesi tekst ovde..."
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
          className: "search_btn",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
            className: "fa fa-search"
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchModal);

/***/ }),

/***/ 3578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Layout)
});

// EXTERNAL MODULE: external "niceselectwithsabuj"
var external_niceselectwithsabuj_ = __webpack_require__(421);
var external_niceselectwithsabuj_default = /*#__PURE__*/__webpack_require__.n(external_niceselectwithsabuj_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/BackToTop.js



const BackToTop = () => {
  (0,external_react_.useEffect)(() => {
    let scrollUp = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
      let st = window.scrollY;

      if (st > 110) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: "#",
    className: "back-to-top",
    id: "scroll-top",
    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: "far fa-angle-up"
    })
  });
};

/* harmony default export */ const components_BackToTop = (BackToTop);
;// CONCATENATED MODULE: ./src/components/ImageView.js

/* eslint-disable */




let useClickOutside = handler => {
  let domNode = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const ImgViews = ({
  close,
  src
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "mfp-img",
              src: src
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const ImageView = () => {
  const {
    0: img,
    1: setImg
  } = (0,external_react_.useState)(false);
  const {
    0: imgValue,
    1: setImgValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("assets/")) {
          a.addEventListener("click", e => {
            e.preventDefault();
            setImgValue(a.href);
            setImg(true);
          });
        }
      });
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: img && /*#__PURE__*/jsx_runtime_.jsx(ImgViews, {
      close: () => setImg(false),
      src: imgValue
    })
  });
};

/* harmony default export */ const components_ImageView = (ImageView);
// EXTERNAL MODULE: ./src/components/Newsletter.js
var Newsletter = __webpack_require__(8288);
;// CONCATENATED MODULE: ./src/components/VideoPopup.js




let VideoPopup_useClickOutside = handler => {
  let domNode = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const VideoPopup_ = ({
  close,
  videoID
}) => {
  let domNode = VideoPopup_useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const VideoPopup = () => {
  const {
    0: video,
    1: setVideo
  } = (0,external_react_.useState)(false);
  const {
    0: videoValue,
    1: setVideoValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("https://www.youtube.com")) {
          a.addEventListener("click", e => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 1000);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: video && /*#__PURE__*/jsx_runtime_.jsx(VideoPopup_, {
      close: () => setVideo(false),
      videoID: videoValue
    })
  });
};

/* harmony default export */ const components_VideoPopup = (VideoPopup);
// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(1939);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/layouts/footers/Footer.js




const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "footer-area footer-style-two bg_cover",
    style: {
      backgroundImage: "url(assets/images/bg/footer-bg-2.jpg)"
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-widget pt-165 pb-35",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-6 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "widget about-widget mb-40 wow fadeInUp",
              "data-wow-delay": ".2s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "logo mb-35",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: "assets/images/logo/logo-6.png",
                      alt: "Theme Logo"
                    })
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "about-content",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: " text-underline",
                  children: "Don\u2019t Hesited to Conatct With Our Experites"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-envelope"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "mailto:hotline@gmail.com",
                        children: "hotline@gmail.com"
                      })
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-map-marker-alt"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "55 Main Street, 2nd Block, USA"
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "far fa-phone"
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "tel:+012(345)67899",
                        children: "+012 (345) 67 899"
                      })
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-6 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "widget footer-nav-widget mb-40 wow fadeInUp",
              "data-wow-delay": ".3s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "widget-title text-underline",
                children: "Best Services"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "footer-nav list-style-dot",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Web & IT Consulting"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Cyber Security Solutions"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Software Development"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Product Enginering"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Project Management"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Security Solutions"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-6 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "widget recent-post-widget mb-40 wow fadeInUp",
              "data-wow-delay": ".4s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "widget-title text-underline",
                children: "Recent News"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "post-widget-list",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "post-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/widget/footer-thumb-1.jpg",
                    alt: "Post Image"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "post-title-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "title",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog-details",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "text-underline",
                          children: "Ethical Scraping Of Dyna Website With Node"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "posted-on",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: ["25 nov ", new Date().getFullYear()]
                      })
                    })]
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "post-item",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/widget/footer-thumb-2.jpg",
                    alt: "Post Image"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "post-title-date",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                      className: "title",
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/blog-details",
                        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                          className: "text-underline",
                          children: "Ethical Scraping Of Dyna Website With Node"
                        })
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "posted-on",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        href: "#",
                        children: ["25 nov ", new Date().getFullYear()]
                      })
                    })]
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-6 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "widget footer-nav-widget mb-40 wow fadeInUp",
              "data-wow-delay": ".5s",
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "widget-title text-underline",
                children: "Our Support"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "footer-nav list-style-dot",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Premium Support"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Need a Career ?"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Help & FAQ"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Pricing and plans"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Cookies Policy"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: "Privacy Policy"
                  })
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "footer-copyright",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["Copyright \xA9 ", new Date().getFullYear(), " MunTech. All Right Reserved"]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "social-link float-md-right float-sm-none",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fab fa-facebook-f"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fab fa-twitter"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fab fa-linkedin"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "fab fa-youtube"
                  })
                })
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const footers_Footer = (Footer);
// EXTERNAL MODULE: ./src/components/SearchModal.js
var SearchModal = __webpack_require__(1855);
// EXTERNAL MODULE: ./src/layouts/MobileHeader.js
var MobileHeader = __webpack_require__(9250);
// EXTERNAL MODULE: ./src/layouts/headers/MainMenu.js
var MainMenu = __webpack_require__(247);
;// CONCATENATED MODULE: ./src/layouts/headers/Header.js








const Header = () => {
  const {
    0: showSearchModal,
    1: setShowSearchModal
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SearchModal/* default */.Z, {
      show: showSearchModal,
      setShow: () => setShowSearchModal(false)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "theme-header d-xl-block d-none",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-top-bar header-top-bar-three",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "top-left",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-envelope"
                      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "tel:+0123456789",
                        children: "+012 (345) 67 89"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-envelope"
                      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "mailto:hotline@gmail.com",
                        children: "hotline@gmail.com"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "far fa-map-marker-alt"
                      }), "55 Main Street, 2nd Block, USA"]
                    })
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-4",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "top-right d-flex justify-content-lg-end justify-content-md-center",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "social-link",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fab fa-facebook-f"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fab fa-twitter"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fab fa-linkedin"
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      href: "#",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fab fa-youtube"
                      })
                    })
                  })]
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-navigation navigation-blue-light",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-fluid",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "primary-menu",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "site-branding",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "brand-logo",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/logo/logo-5.png",
                    alt: "Site Logo"
                  })
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "nav-menu",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "navbar-close",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-times"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "nav-search",
                children: /*#__PURE__*/jsx_runtime_.jsx("form", {
                  onSubmit: e => e.preventDefault(),
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form_group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "email",
                      className: "form_control",
                      placeholder: "Unesi tekst ovde...",
                      name: "email",
                      required: ""
                    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "search-btn",
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fas fa-search"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(MainMenu/* default */.Z, {
                show: showSearchModal,
                setShow: () => setShowSearchModal(true)
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "header-right-nav",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "cart-item",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "fas fa-shopping-basket"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "lang-dropdown",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                    className: "wide",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: 1,
                      children: "English"
                    }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                      value: 2,
                      children: "Russian"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "nav-button",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                    href: "/contact",
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "main-btn btn-blue-light",
                      children: "get free quote"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "navbar-toggle-btn",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-toggler",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
                  })
                })]
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(MobileHeader/* default */.Z, {})]
  });
};

/* harmony default export */ const headers_Header = (Header);
;// CONCATENATED MODULE: ./src/layouts/Layout.js












const Layout = ({
  children,
  noHeader,
  noFooter
}) => {
  (0,external_react_.useEffect)(() => {
    external_niceselectwithsabuj_default()();
    (0,utils/* animation */.oQ)();
    window.addEventListener("scroll", utils/* stickyNav */.h4);

    if (window.location.href.includes("dark-e-wallet")) {
      document.querySelector("body").classList.add("dark-e-wallet");
    } else {
      document.querySelector("body").classList.remove("dark-e-wallet");
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_ImageView, {}), /*#__PURE__*/jsx_runtime_.jsx(components_VideoPopup, {}), !noHeader && /*#__PURE__*/jsx_runtime_.jsx(headers_Header, {}), children, !noFooter && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Newsletter/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(footers_Footer, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_BackToTop, {})]
  });
};

/* harmony default export */ const layouts_Layout = (Layout);

/***/ }),

/***/ 9250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headers_Menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MobileHeader = ({
  logo,
  className,
  headerClass
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: activeMenu,
    1: setActiveMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const activeMenuSet = value => setActiveMenu(activeMenu === value ? "" : value),
        activeLi = value => value === activeMenu ? {
    display: "block"
  } : {
    display: "none"
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: `${headerClass ? headerClass : "header-navigation navigation-blue-light"} breakpoint-on d-block d-xl-none`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "primary-menu",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "site-branding",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
              className: "brand-logo",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: `assets/images/logo/logo-${logo ? logo : 5}.png`,
                alt: "Site Logo"
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: `nav-menu ${toggle ? "menu-on" : ""}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: `navbar-close ${className ? className : ""}`,
            onClick: () => setToggle(false),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
              className: "far fa-times"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "nav-search",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("form", {
              onSubmit: e => e.preventDefault(),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "form_group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
                  type: "email",
                  className: "form_control",
                  placeholder: "Unesi tekst ovde...",
                  name: "email",
                  required: ""
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
                  className: "search-btn",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "fas fa-search"
                  })
                })]
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("nav", {
            className: "main-menu",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "menu-item has-children",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  children: "Home"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                  className: "sub-menu",
                  style: activeLi("home"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headers_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Home */ .SK, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "dd-trigger",
                  onClick: () => activeMenuSet("home"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "far fa-angle-down"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "menu-item has-children",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  children: "About"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                  className: "sub-menu",
                  style: activeLi("About"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headers_Menus__WEBPACK_IMPORTED_MODULE_2__/* .About */ .CL, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "dd-trigger",
                  onClick: () => activeMenuSet("About"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "far fa-angle-down"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "menu-item has-children",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  children: "Cases"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                  className: "sub-menu",
                  style: activeLi("Cases"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headers_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Usluge */ .e7, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "dd-trigger",
                  onClick: () => activeMenuSet("Cases"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "far fa-angle-down"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                className: "menu-item has-children",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  children: "Pages"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                  className: "sub-menu",
                  style: activeLi("Pages"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_headers_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Pages */ .iY, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "dd-trigger",
                  onClick: () => activeMenuSet("Pages"),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "far fa-angle-down"
                  })
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                  href: "/project-1",
                  children: "Potfolio"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                  href: "/blog-standard",
                  children: "Blog"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "menu-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                  href: "/contact",
                  children: "Contact"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                className: "search-item",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  href: "#",
                  "data-toggle": "modal",
                  "data-target": "#search-modal",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "fas fa-search"
                  })
                })
              })]
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "header-right-nav",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "cart-item",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "#",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                  className: "fas fa-shopping-basket"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "lang-dropdown",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                className: "wide",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: 1,
                  children: "English"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
                  value: 2,
                  children: "Russian"
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "nav-button",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "/contact",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  className: "main-btn btn-blue-light",
                  children: "get free quote"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              className: "navbar-toggle-btn",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: `navbar-toggler ${toggle ? "active" : ""}`,
                onClick: () => setToggle(!toggle),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {})]
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);

/***/ }),

/***/ 247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8603);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MainMenu = ({
  search,
  setShow
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("nav", {
    className: "main-menu",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "menu-item has-children",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "/",
          children: "Po\u010Detna"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
          className: "sub-menu",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Home */ .SK, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "menu-item has-children",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "#",
          children: "O nama"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
          className: "sub-menu",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menus__WEBPACK_IMPORTED_MODULE_2__/* .About */ .CL, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "menu-item has-children",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "#",
          children: "Usluge"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
          className: "sub-menu",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Usluge */ .e7, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "menu-item has-children",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "#",
          children: "Proizvodi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
          className: "sub-menu",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Proizvodi */ .zu, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "menu-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "#",
          children: "Outstaffing"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "menu-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "/project-1",
          children: "Portfolio"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "menu-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "/blog-standard",
          children: "Blog"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
        className: "menu-item has-children",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
          href: "/contact",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            children: "Kontakt"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
          className: "sub-menu",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menus__WEBPACK_IMPORTED_MODULE_2__/* .Pages */ .iY, {})
        })]
      }), !search && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        className: "search-item",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
          href: "#",
          "data-toggle": "modal",
          "data-target": "#search-modal",
          onClick: () => setShow(),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: "fas fa-search"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);

/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "CL": () => (/* binding */ About),
/* harmony export */   "e7": () => (/* binding */ Usluge),
/* harmony export */   "zu": () => (/* binding */ Proizvodi),
/* harmony export */   "iY": () => (/* binding */ Pages)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Home = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/",
      children: "It Company"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/it-agency",
      children: "It Agency"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/it-company",
      children: "Software Company"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/help-desk",
      children: "Help Desk"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/home-development",
      children: "Home Development"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/data-science",
      children: "Data Science"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/dark-e-wallet",
      children: "Dark E-Wallet"
    })
  })]
});
const About = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/about",
      children: "Za\u0161to ThinkIT?"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/team",
      children: "Na\u0161 tim"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/nasi-klijenti",
      children: "Klijenti"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/career",
      children: "Karijera"
    })
  })]
});
const Usluge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-1",
      children: "Softverska re\u0161enja"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-2",
      children: "Grafi\u010Dki dizajn"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-2",
      children: "Digitalni marketing"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-2",
      children: "Izrada web sajtova"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-2",
      children: "Odr\u017Eavanje web sajtova"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/service-2",
      children: "Izrada internet prodavnica"
    })
  })]
});
const Proizvodi = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "#0",
      children: "GoKinder"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "#0",
      children: "GoFitness"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "#0",
      children: "Firmica"
    })
  })]
});
const Pages = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/pricing",
      children: "Pricing"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/faq",
      children: "FAQ"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/404",
      children: "404"
    })
  })]
});

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination),
/* harmony export */   "Tk": () => (/* binding */ parallax)
/* harmony export */ });
const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".header-navigation");

  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];

    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("sticky");
      } else {
        sticky.classList.remove("sticky");
      }
    }
  }
};
const animation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};
const parallax = Parallax => {
  let scene = document.querySelectorAll(".scene");
  scene.forEach(element => {
    new Parallax(element, {
      relativeInput: true
    });
  });
};

/***/ })

};
;