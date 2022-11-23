"use strict";
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 7192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/logo_moon_64.png
/* harmony default export */ const logo_moon_64 = ({"src":"/_next/static/media/logo_moon_64.30a5a348.png","height":51,"width":50,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0UlEQVR42mNABm8OCTCC6PdnPKNeHzXRYkAHn84FMoHoz5eiFD+e8Tzzfj+3PIaij1dDWUD0tythR76est3O8Oe+CeObc0FMMAVfn+SyguifN+P2/zjn/AWu8/+3OJb/f8rAun9fD1P9eSfp/68zNk8Zft7xSnx0PEYWpvDD+TDNn49yLn+7FPT/xymj6Qz/Htia/rzjf+Hr9eiT324lnfhxO/n/p3NB/z8eNT/+86wNL8T4m6oK/686rft53u3F+6M211/v0+9+e8iGm4GBgQEAbkBlNt0j1r0AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/header.js



function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 w-full",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container flex flex-wrap items-center justify-between mx-auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "/home",
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo_moon_64,
                                    alt: "Flowbite Logo",
                                    height: 30
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "pl-2.5 self-center text-xl font-semibold whitespace-nowrap dark:text-white",
                                    children: "TABAM"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            "data-collapse-toggle": "navbar-default",
                            type: "button",
                            className: "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                            "aria-controls": "navbar-default",
                            "aria-expanded": "false",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "sr-only",
                                    children: "Open main menu"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    className: "w-6 h-6",
                                    "aria-hidden": "true",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        "fill-rule": "evenodd",
                                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                        "clip-rule": "evenodd"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hidden w-full md:block md:w-auto",
                            id: "navbar-default",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white",
                                            "aria-current": "page",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                            children: "Services"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                            children: "Pricing"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/layout.js


function Layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                        className: "flex"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "py-20",
                    children: children
                })
            ]
        })
    });
}


/***/ })

};
;