"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/[id]",{

/***/ "./src/components/Reviews/Reviews.tsx":
/*!********************************************!*\
  !*** ./src/components/Reviews/Reviews.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reviews.module.scss */ \"./src/components/Reviews/Reviews.module.scss\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Rewiew_Review__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rewiew/Review */ \"./src/components/Reviews/Rewiew/Review.tsx\");\n/* harmony import */ var _widthWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widthWindow */ \"./src/components/Reviews/widthWindow.ts\");\n/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/src/components/Button/Button */ \"./src/components/Button/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Reviews = (param)=>{\n    let { titleBtn , reviews , btn , aboutTheFilm  } = param;\n    _s();\n    // const [comment, setComment] = useState<IReviews[]>()\n    // const [comment2, setComment2] =useState()\n    const { query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(id);\n    // console.log(comment)\n    // console.log(comment2)\n    // useEffect(() => {\n    //   if (items) {\n    //     setComment(items)\n    //   } else {\n    //     fetch(`http://localhost:3004/comments/${movieId}/tree`, {\n    //       method: 'GET',\n    //       headers: {\n    //         'Content-Type': 'application/json'\n    //       }\n    //     })\n    //       .then(res => res.json())\n    //       .then(json => setComment(json))\n    //       .catch(err => console.log(err))\n    //   }\n    // }, [])\n    // useEffect(() => {\n    //   fetch(`http://localhost:3004/comments/1/flat `, {\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json'\n    //     }\n    //   })\n    //     .then(res => res.json())\n    //     .then(json => setComment2(json))\n    //     .catch(err => console.log(err))\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviews),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header_item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/movies/comment/\".concat(id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                size: \"reviews\",\n                                children: titleBtn,\n                                quantity: 12\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined),\n                    aboutTheFilm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: aboutTheFilm\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 30\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#*\",\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().comments_btn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                            size: \"border\",\n                            children: btn\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().gallery),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.Swiper, {\n                    navigation: true,\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation\n                    ],\n                    freeMode: true,\n                    spaceBetween: 20,\n                    slidesPerView: (0,_widthWindow__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"reviews\"),\n                    children: reviews ? reviews.map((feedback, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_7__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                rewiew: feedback\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined)\n                        }, feedback.id, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 15\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"#*\",\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().comments_btn_mobile),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                    size: \"border\",\n                    children: \"Оставить отзывы\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Reviews, \"cOqdzvjTB5N0CGToKnoPkCdieWk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _widthWindow__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c = Reviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reviews);\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVztBQUNlO0FBQ25CO0FBQ2hCO0FBQ1c7QUFDb0I7QUFJUjtBQUNOO0FBQ0s7QUFDYztBQVl4RCxNQUFNVSxVQUE0QixTQUE4QztRQUE3QyxFQUFFQyxTQUFRLEVBQUVDLFFBQU8sRUFBRUMsSUFBRyxFQUFFQyxhQUFZLEVBQUU7O0lBQ3pFLHVEQUF1RDtJQUN2RCw0Q0FBNEM7SUFDNUMsTUFBTSxFQUNKQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUdmLHNEQUFTQTtJQUNiZ0IsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFFeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGdFQUFnRTtJQUNoRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDZDQUE2QztJQUM3QyxVQUFVO0lBQ1YsU0FBUztJQUNULGlDQUFpQztJQUNqQyx3Q0FBd0M7SUFDeEMsd0NBQXdDO0lBQ3hDLE1BQU07SUFDTixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLHNEQUFzRDtJQUN0RCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLDJDQUEyQztJQUMzQyxRQUFRO0lBQ1IsT0FBTztJQUNQLCtCQUErQjtJQUMvQix1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLFNBQVM7SUFFVCxxQkFDRSw4REFBQ0c7UUFBUUMsV0FBV2Qsc0VBQWM7OzBCQUNoQyw4REFBQ2U7Z0JBQU9ELFdBQVdkLHFFQUFhOztrQ0FDOUIsOERBQUNnQjt3QkFBSUYsV0FBV2QsMEVBQWtCO2tDQUNoQyw0RUFBQ04sa0RBQUlBOzRCQUFDd0IsTUFBTSxtQkFBc0IsT0FBSFI7c0NBQzdCLDRFQUFDUCxrRUFBTUE7Z0NBQUNnQixNQUFLO2dDQUFVQyxVQUFVZjtnQ0FBVWdCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR3BEYiw4QkFBZ0IsOERBQUNjO2tDQUFHZDs7Ozs7O2tDQUN2Qiw4REFBQ1E7Ozs7O2tDQUNILDhEQUFDdEIsa0RBQUlBO3dCQUFDd0IsTUFBSzt3QkFBS0osV0FBV2QsMkVBQW1CO2tDQUM1Qyw0RUFBQ0csa0VBQU1BOzRCQUFDZ0IsTUFBSzs0QkFBU0MsVUFBVWI7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUdwQyw4REFBQ1M7Z0JBQUlGLFdBQVdkLHNFQUFjOzBCQUM1Qiw0RUFBQ0YsZ0RBQU1BO29CQUFDMkIsVUFBVTtvQkFBQ0MsU0FBUzt3QkFBQzdCLDhDQUFVQTtxQkFBQztvQkFBRThCLFVBQVUsSUFBSTtvQkFBRUMsY0FBYztvQkFBSUMsZUFBZTNCLHdEQUFhQSxDQUFDOzhCQUN0R0ksVUFDQ0EsUUFBUXdCLEdBQUcsQ0FBQyxDQUFDQyxVQUFlQyxrQkFDMUIsOERBQUNqQyxxREFBV0E7c0NBQ1YsNEVBQUNFLHNEQUFNQTtnQ0FBQ2dDLFFBQVFGOzs7Ozs7MkJBREFBLFNBQVNyQixFQUFFOzs7O3VEQUsvQiw4REFBQ1Qsc0RBQU1BOzs7O2lDQUNSOzs7Ozs7Ozs7OzswQkFHTCw4REFBQ1Asa0RBQUlBO2dCQUFDd0IsTUFBSztnQkFBS0osV0FBV2Qsa0ZBQTBCOzBCQUNuRCw0RUFBQ0csa0VBQU1BO29CQUFDZ0IsTUFBSztvQkFBU0MsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7R0F0RU1oQjs7UUFLQVQsa0RBQVNBO1FBZ0RvRk8sb0RBQWFBOzs7S0FyRDFHRTtBQXdFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MudHN4PzNlNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmV2aWV3cy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXdpZXcvUmV2aWV3JztcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi93aWR0aFdpbmRvdyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Avc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IElSZXZpZXdzIH0gZnJvbSAnQC9zcmMvdHlwZXMvQ29tbWVudHNUeXBlJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUmV2aWV3c1Byb3BzIHtcclxuICByZXZpZXdzOiBJUmV2aWV3c1tdXHJcbiAgYnRuOiBzdHJpbmdcclxuICB0aXRsZUJ0bjogc3RyaW5nXHJcbiAgYWJvdXRUaGVGaWxtPzogc3RyaW5nXHJcbiAgLy8gbW92aWVJZDogbnVtYmVyXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld3M6IEZDPFJldmlld3NQcm9wcz4gPSAoeyB0aXRsZUJ0biwgcmV2aWV3cywgYnRuLCBhYm91dFRoZUZpbG0gfSkgPT4ge1xyXG4gIC8vIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICAvLyBjb25zdCBbY29tbWVudDIsIHNldENvbW1lbnQyXSA9dXNlU3RhdGUoKVxyXG4gIGNvbnN0IHtcclxuICAgIHF1ZXJ5OiB7IGlkIH1cclxuICB9ID0gdXNlUm91dGVyKClcclxuICBjb25zb2xlLmxvZyhpZClcclxuICBcclxuICAvLyBjb25zb2xlLmxvZyhjb21tZW50KVxyXG4gIC8vIGNvbnNvbGUubG9nKGNvbW1lbnQyKVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKGl0ZW1zKSB7XHJcbiAgLy8gICAgIHNldENvbW1lbnQoaXRlbXMpXHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L2NvbW1lbnRzLyR7bW92aWVJZH0vdHJlZWAsIHtcclxuICAvLyAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gIC8vICAgICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAvLyAgICAgICB9XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgICAgLnRoZW4oanNvbiA9PiBzZXRDb21tZW50KGpzb24pKVxyXG4gIC8vICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAvLyAgIH1cclxuICAvLyB9LCBbXSlcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb21tZW50cy8xL2ZsYXQgYCwge1xyXG4gIC8vICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oanNvbiA9PiBzZXRDb21tZW50Mihqc29uKSlcclxuICAvLyAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIC8vIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3c30+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9pdGVtfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWVzL2NvbW1lbnQvJHtpZH1gfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdyZXZpZXdzJyBjaGlsZHJlbj17dGl0bGVCdG59IHF1YW50aXR5PXsxMn0gLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2Fib3V0VGhlRmlsbSAmJiA8cD57YWJvdXRUaGVGaWxtfTwvcD59XHJcbiAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9JyMqJyBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19idG59PlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdib3JkZXInIGNoaWxkcmVuPXtidG59IC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5fT5cclxuICAgICAgICA8U3dpcGVyIG5hdmlnYXRpb24gbW9kdWxlcz17W05hdmlnYXRpb25dfSBmcmVlTW9kZT17dHJ1ZX0gc3BhY2VCZXR3ZWVuPXsyMH0gc2xpZGVzUGVyVmlldz17dXNlV2luZG93U2l6ZSgncmV2aWV3cycpfT5cclxuICAgICAgICAgIHtyZXZpZXdzID8gKFxyXG4gICAgICAgICAgICByZXZpZXdzLm1hcCgoZmVlZGJhY2s6IGFueSwgaTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZmVlZGJhY2suaWR9PlxyXG4gICAgICAgICAgICAgICAgPFJldmlldyByZXdpZXc9e2ZlZWRiYWNrfSAvPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UmV2aWV3IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj0nIyonIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX2J0bl9tb2JpbGV9PlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT0nYm9yZGVyJyBjaGlsZHJlbj0n0J7RgdGC0LDQstC40YLRjCDQvtGC0LfRi9Cy0YsnIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld3MiXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiTmF2aWdhdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwic3R5bGVzIiwiUmV2aWV3IiwidXNlV2luZG93U2l6ZSIsIkJ1dHRvbiIsIlJldmlld3MiLCJ0aXRsZUJ0biIsInJldmlld3MiLCJidG4iLCJhYm91dFRoZUZpbG0iLCJxdWVyeSIsImlkIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJkaXYiLCJoZWFkZXJfaXRlbSIsImhyZWYiLCJzaXplIiwiY2hpbGRyZW4iLCJxdWFudGl0eSIsInAiLCJjb21tZW50c19idG4iLCJnYWxsZXJ5IiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJmcmVlTW9kZSIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJmZWVkYmFjayIsImkiLCJyZXdpZXciLCJjb21tZW50c19idG5fbW9iaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Reviews/Reviews.tsx\n"));

/***/ })

});