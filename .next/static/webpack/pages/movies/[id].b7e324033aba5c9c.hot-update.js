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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Reviews.module.scss */ \"./src/components/Reviews/Reviews.module.scss\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rewiew/Review */ \"./src/components/Reviews/Rewiew/Review.tsx\");\n/* harmony import */ var _widthWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widthWindow */ \"./src/components/Reviews/widthWindow.ts\");\n/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/src/components/Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Reviews = (param)=>{\n    let { titleBtn , reviews , btn , aboutTheFilm  } = param;\n    _s();\n    // const [comment, setComment] = useState<IReviews[]>()\n    // const [comment2, setComment2] =useState()\n    const { query: { id =1  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();\n    // console.log(comment)\n    // console.log(comment2)\n    // useEffect(() => {\n    //   if (items) {\n    //     setComment(items)\n    //   } else {\n    //     fetch(`http://localhost:3004/comments/${movieId}/tree`, {\n    //       method: 'GET',\n    //       headers: {\n    //         'Content-Type': 'application/json'\n    //       }\n    //     })\n    //       .then(res => res.json())\n    //       .then(json => setComment(json))\n    //       .catch(err => console.log(err))\n    //   }\n    // }, [])\n    // useEffect(() => {\n    //   fetch(`http://localhost:3004/comments/1/flat `, {\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json'\n    //     }\n    //   })\n    //     .then(res => res.json())\n    //     .then(json => setComment2(json))\n    //     .catch(err => console.log(err))\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().reviews),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().header_item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/comment/1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                    size: \"reviews\",\n                                    children: titleBtn,\n                                    quantity: 12\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, undefined),\n                                aboutTheFilm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: aboutTheFilm\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 30\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#*\",\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().comments_btn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                            size: \"border\",\n                            children: btn\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().gallery),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {\n                    navigation: true,\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                    ],\n                    freeMode: true,\n                    spaceBetween: 20,\n                    slidesPerView: (0,_widthWindow__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"reviews\"),\n                    children: reviews ? reviews.map((feedback, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                rewiew: feedback\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, undefined)\n                        }, feedback.id, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"#*\",\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_11___default().comments_btn_mobile),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    size: \"border\",\n                    children: \"Оставить отзывы\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Reviews, \"OEFtHhIGAy0O/EeTXxhSEP8/FLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter,\n        _widthWindow__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Reviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reviews);\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDMEI7QUFDbkI7QUFDaEI7QUFDVztBQUNvQjtBQUlSO0FBQ047QUFDSztBQUNjO0FBRWhCO0FBV3hDLE1BQU1VLFVBQTRCLFNBQThDO1FBQTdDLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFFQyxJQUFHLEVBQUVDLGFBQVksRUFBRTs7SUFDekUsdURBQXVEO0lBQ3ZELDRDQUE0QztJQUM3QyxNQUFNLEVBRUpDLE9BQU8sRUFBRUMsSUFBSyxFQUFDLEVBQUUsR0FDbEIsR0FBR1AsdURBQVNBO0lBQ1osdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUV4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0VBQWdFO0lBQ2hFLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLFVBQVU7SUFDVixTQUFTO0lBQ1QsaUNBQWlDO0lBQ2pDLHdDQUF3QztJQUN4Qyx3Q0FBd0M7SUFDeEMsTUFBTTtJQUNOLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsc0RBQXNEO0lBQ3RELHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLFFBQVE7SUFDUixPQUFPO0lBQ1AsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2QyxzQ0FBc0M7SUFDdEMsU0FBUztJQUVULHFCQUNFLDhEQUFDUTtRQUFRQyxXQUFXYixzRUFBYzs7MEJBQ2hDLDhEQUFDYztnQkFBT0QsV0FBV2IscUVBQWE7O2tDQUM5Qiw4REFBQ2U7d0JBQUlGLFdBQVdiLDBFQUFrQjtrQ0FDaEMsNEVBQUNMLGtEQUFJQTs0QkFBQ3NCLE1BQU07OzhDQUNWLDhEQUFDZCxpRUFBTUE7b0NBQUNlLE1BQUs7b0NBQVVDLFVBQVViO29DQUFVYyxVQUFVOzs7Ozs7Z0NBQ3BEWCw4QkFBZ0IsOERBQUNZOzhDQUFHWjs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3pCLDhEQUFDZCxrREFBSUE7d0JBQUNzQixNQUFLO3dCQUFLSixXQUFXYiwyRUFBbUI7a0NBQzVDLDRFQUFDRyxpRUFBTUE7NEJBQUNlLE1BQUs7NEJBQVNDLFVBQVVYOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEMsOERBQUNPO2dCQUFJRixXQUFXYixzRUFBYzswQkFDNUIsNEVBQUNGLGdEQUFNQTtvQkFBQzBCLFVBQVU7b0JBQUNDLFNBQVM7d0JBQUM1Qiw4Q0FBVUE7cUJBQUM7b0JBQUU2QixVQUFVLElBQUk7b0JBQUVDLGNBQWM7b0JBQUlDLGVBQWUxQix3REFBYUEsQ0FBQzs4QkFDdEdLLFVBQ0NBLFFBQVFzQixHQUFHLENBQUMsQ0FBQ0MsVUFBZUMsa0JBQzFCLDhEQUFDaEMscURBQVdBO3NDQUNWLDRFQUFDRSxzREFBTUE7Z0NBQUMrQixRQUFRRjs7Ozs7OzJCQURBQSxTQUFTbkIsRUFBRTs7Ozt1REFLL0IsOERBQUNWLHNEQUFNQTs7OztpQ0FDUjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNOLGtEQUFJQTtnQkFBQ3NCLE1BQUs7Z0JBQUtKLFdBQVdiLGtGQUEwQjswQkFDbkQsNEVBQUNHLGlFQUFNQTtvQkFBQ2UsTUFBSztvQkFBU0MsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7R0FwRU1kOztRQU1ERCxtREFBU0E7UUE2Q3FGRixvREFBYUE7OztLQW5EMUdHO0FBc0VOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jldmlld3MvUmV2aWV3cy50c3g/M2U3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvbmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmV2aWV3cy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXdpZXcvUmV2aWV3JztcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnLi93aWR0aFdpbmRvdyc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0Avc3JjL2NvbXBvbmVudHMvQnV0dG9uL0J1dHRvbic7XHJcbmltcG9ydCB7IElSZXZpZXdzIH0gZnJvbSAnQC9zcmMvdHlwZXMvQ29tbWVudHNUeXBlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcbmludGVyZmFjZSBSZXZpZXdzUHJvcHMge1xyXG4gIHJldmlld3M6IElSZXZpZXdzW11cclxuICBidG46IHN0cmluZ1xyXG4gIHRpdGxlQnRuOiBzdHJpbmdcclxuICBhYm91dFRoZUZpbG0/OiBzdHJpbmdcclxuICAvLyBtb3ZpZUlkOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgUmV2aWV3czogRkM8UmV2aWV3c1Byb3BzPiA9ICh7IHRpdGxlQnRuLCByZXZpZXdzLCBidG4sIGFib3V0VGhlRmlsbSB9KSA9PiB7XHJcbiAgLy8gY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGU8SVJldmlld3NbXT4oKVxyXG4gIC8vIGNvbnN0IFtjb21tZW50Miwgc2V0Q29tbWVudDJdID11c2VTdGF0ZSgpXHJcbiBjb25zdCB7XHJcblxyXG4gICBxdWVyeTogeyBpZCA9IDEgfVxyXG4gfSA9IHVzZVJvdXRlcigpXHJcbiAgLy8gY29uc29sZS5sb2coY29tbWVudClcclxuICAvLyBjb25zb2xlLmxvZyhjb21tZW50MilcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChpdGVtcykge1xyXG4gIC8vICAgICBzZXRDb21tZW50KGl0ZW1zKVxyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb21tZW50cy8ke21vdmllSWR9L3RyZWVgLCB7XHJcbiAgLy8gICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAvLyAgICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICAgICAgfVxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAgIC50aGVuKGpzb24gPT4gc2V0Q29tbWVudChqc29uKSlcclxuICAvLyAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW10pXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvY29tbWVudHMvMS9mbGF0IGAsIHtcclxuICAvLyAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAvLyAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSlcclxuICAvLyAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKGpzb24gPT4gc2V0Q29tbWVudDIoanNvbikpXHJcbiAgLy8gICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAvLyB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnJldmlld3N9PlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJfaXRlbX0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnL2NvbW1lbnQvMSd9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J3Jldmlld3MnIGNoaWxkcmVuPXt0aXRsZUJ0bn0gcXVhbnRpdHk9ezEyfSAvPlxyXG4gICAgICAgICAgICB7YWJvdXRUaGVGaWxtICYmIDxwPnthYm91dFRoZUZpbG19PC9wPn1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TGluayBocmVmPScjKicgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudHNfYnRufT5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT0nYm9yZGVyJyBjaGlsZHJlbj17YnRufSAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2FsbGVyeX0+XHJcbiAgICAgICAgPFN3aXBlciBuYXZpZ2F0aW9uIG1vZHVsZXM9e1tOYXZpZ2F0aW9uXX0gZnJlZU1vZGU9e3RydWV9IHNwYWNlQmV0d2Vlbj17MjB9IHNsaWRlc1BlclZpZXc9e3VzZVdpbmRvd1NpemUoJ3Jldmlld3MnKX0+XHJcbiAgICAgICAgICB7cmV2aWV3cyA/IChcclxuICAgICAgICAgICAgcmV2aWV3cy5tYXAoKGZlZWRiYWNrOiBhbnksIGk6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2ZlZWRiYWNrLmlkfT5cclxuICAgICAgICAgICAgICAgIDxSZXZpZXcgcmV3aWV3PXtmZWVkYmFja30gLz5cclxuICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFJldmlldyAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9JyMqJyBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19idG5fbW9iaWxlfT5cclxuICAgICAgICA8QnV0dG9uIHNpemU9J2JvcmRlcicgY2hpbGRyZW49J9Ce0YHRgtCw0LLQuNGC0Ywg0L7RgtC30YvQstGLJyAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIk5hdmlnYXRpb24iLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsInN0eWxlcyIsIlJldmlldyIsInVzZVdpbmRvd1NpemUiLCJCdXR0b24iLCJ1c2VSb3V0ZXIiLCJSZXZpZXdzIiwidGl0bGVCdG4iLCJyZXZpZXdzIiwiYnRuIiwiYWJvdXRUaGVGaWxtIiwicXVlcnkiLCJpZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJkaXYiLCJoZWFkZXJfaXRlbSIsImhyZWYiLCJzaXplIiwiY2hpbGRyZW4iLCJxdWFudGl0eSIsInAiLCJjb21tZW50c19idG4iLCJnYWxsZXJ5IiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJmcmVlTW9kZSIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJmZWVkYmFjayIsImkiLCJyZXdpZXciLCJjb21tZW50c19idG5fbW9iaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Reviews/Reviews.tsx\n"));

/***/ })

});