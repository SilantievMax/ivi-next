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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Reviews.module.scss */ \"./src/components/Reviews/Reviews.module.scss\");\n/* harmony import */ var _Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Rewiew/Review */ \"./src/components/Reviews/Rewiew/Review.tsx\");\n/* harmony import */ var _widthWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widthWindow */ \"./src/components/Reviews/widthWindow.ts\");\n/* harmony import */ var _src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/src/components/Button/Button */ \"./src/components/Button/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Reviews = (param)=>{\n    let { titleBtn , reviews , btn , aboutTheFilm  } = param;\n    _s();\n    // const [comment, setComment] = useState<IReviews[]>()\n    // const [comment2, setComment2] =useState()\n    const { back , query: { id =1  }  } = useRouter();\n    // console.log(comment)\n    // console.log(comment2)\n    // useEffect(() => {\n    //   if (items) {\n    //     setComment(items)\n    //   } else {\n    //     fetch(`http://localhost:3004/comments/${movieId}/tree`, {\n    //       method: 'GET',\n    //       headers: {\n    //         'Content-Type': 'application/json'\n    //       }\n    //     })\n    //       .then(res => res.json())\n    //       .then(json => setComment(json))\n    //       .catch(err => console.log(err))\n    //   }\n    // }, [])\n    // useEffect(() => {\n    //   fetch(`http://localhost:3004/comments/1/flat `, {\n    //     method: 'GET',\n    //     headers: {\n    //       'Content-Type': 'application/json'\n    //     }\n    //   })\n    //     .then(res => res.json())\n    //     .then(json => setComment2(json))\n    //     .catch(err => console.log(err))\n    // }, [])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().reviews),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().header_item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/comment/1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                    size: \"reviews\",\n                                    children: titleBtn,\n                                    quantity: 12\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined),\n                                aboutTheFilm && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: aboutTheFilm\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 30\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"#*\",\n                        className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().comments_btn),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                            size: \"border\",\n                            children: btn\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().gallery),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.Swiper, {\n                    navigation: true,\n                    modules: [\n                        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                    ],\n                    freeMode: true,\n                    spaceBetween: 20,\n                    slidesPerView: (0,_widthWindow__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(\"reviews\"),\n                    children: reviews ? reviews.map((feedback, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_6__.SwiperSlide, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                rewiew: feedback\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined)\n                        }, feedback.id, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rewiew_Review__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"#*\",\n                className: (_Reviews_module_scss__WEBPACK_IMPORTED_MODULE_10___default().comments_btn_mobile),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Button_Button__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                    size: \"border\",\n                    children: \"Оставить отзывы\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Reviews.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Reviews, \"BrNU4xbvZbRkL1BDX490EpZmrb4=\", true, function() {\n    return [\n        _widthWindow__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    ];\n});\n_c = Reviews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Reviews);\nvar _c;\n$RefreshReg$(_c, \"Reviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzBCO0FBQ25CO0FBQ2hCO0FBQ1c7QUFDb0I7QUFJUjtBQUNOO0FBQ0s7QUFDYztBQVl4RCxNQUFNUyxVQUE0QixTQUE4QztRQUE3QyxFQUFFQyxTQUFRLEVBQUVDLFFBQU8sRUFBRUMsSUFBRyxFQUFFQyxhQUFZLEVBQUU7O0lBQ3pFLHVEQUF1RDtJQUN2RCw0Q0FBNEM7SUFDN0MsTUFBTSxFQUNKQyxLQUFJLEVBQ0pDLE9BQU8sRUFBRUMsSUFBSyxFQUFDLEVBQUUsR0FDbEIsR0FBR0M7SUFDSCx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBRXhCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2Q0FBNkM7SUFDN0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsd0NBQXdDO0lBQ3hDLHdDQUF3QztJQUN4QyxNQUFNO0lBQ04sU0FBUztJQUNULG9CQUFvQjtJQUNwQixzREFBc0Q7SUFDdEQscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiwyQ0FBMkM7SUFDM0MsUUFBUTtJQUNSLE9BQU87SUFDUCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLHNDQUFzQztJQUN0QyxTQUFTO0lBRVQscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVdkLHNFQUFjOzswQkFDaEMsOERBQUNlO2dCQUFPRCxXQUFXZCxxRUFBYTs7a0NBQzlCLDhEQUFDZ0I7d0JBQUlGLFdBQVdkLDBFQUFrQjtrQ0FDaEMsNEVBQUNMLGtEQUFJQTs0QkFBQ3VCLE1BQUs7OzhDQUNULDhEQUFDZixpRUFBTUE7b0NBQUNnQixNQUFLO29DQUFVQyxVQUFVZjtvQ0FBVWdCLFVBQVU7Ozs7OztnQ0FDcERiLDhCQUFnQiw4REFBQ2M7OENBQUdkOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHekIsOERBQUNiLGtEQUFJQTt3QkFBQ3VCLE1BQUs7d0JBQUtKLFdBQVdkLDJFQUFtQjtrQ0FDNUMsNEVBQUNHLGlFQUFNQTs0QkFBQ2dCLE1BQUs7NEJBQVNDLFVBQVViOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHcEMsOERBQUNTO2dCQUFJRixXQUFXZCxzRUFBYzswQkFDNUIsNEVBQUNGLGdEQUFNQTtvQkFBQzJCLFVBQVU7b0JBQUNDLFNBQVM7d0JBQUM3Qiw4Q0FBVUE7cUJBQUM7b0JBQUU4QixVQUFVLElBQUk7b0JBQUVDLGNBQWM7b0JBQUlDLGVBQWUzQix3REFBYUEsQ0FBQzs4QkFDdEdJLFVBQ0NBLFFBQVF3QixHQUFHLENBQUMsQ0FBQ0MsVUFBZUMsa0JBQzFCLDhEQUFDakMscURBQVdBO3NDQUNWLDRFQUFDRSxzREFBTUE7Z0NBQUNnQyxRQUFRRjs7Ozs7OzJCQURBQSxTQUFTcEIsRUFBRTs7Ozt1REFLL0IsOERBQUNWLHNEQUFNQTs7OztpQ0FDUjs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNOLGtEQUFJQTtnQkFBQ3VCLE1BQUs7Z0JBQUtKLFdBQVdkLGtGQUEwQjswQkFDbkQsNEVBQUNHLGlFQUFNQTtvQkFBQ2dCLE1BQUs7b0JBQVNDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZDO0dBcEVNaEI7O1FBbUQ2RkYsb0RBQWFBOzs7S0FuRDFHRTtBQXNFTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jldmlld3MudHN4PzNlNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jldmlld3MubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vUmV3aWV3L1Jldmlldyc7XHJcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gJy4vd2lkdGhXaW5kb3cnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL3NyYy9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgeyBJUmV2aWV3cyB9IGZyb20gJ0Avc3JjL3R5cGVzL0NvbW1lbnRzVHlwZSc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFJldmlld3NQcm9wcyB7XHJcbiAgcmV2aWV3czogSVJldmlld3NbXVxyXG4gIGJ0bjogc3RyaW5nXHJcbiAgdGl0bGVCdG46IHN0cmluZ1xyXG4gIGFib3V0VGhlRmlsbT86IHN0cmluZ1xyXG4gIC8vIG1vdmllSWQ6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBSZXZpZXdzOiBGQzxSZXZpZXdzUHJvcHM+ID0gKHsgdGl0bGVCdG4sIHJldmlld3MsIGJ0biwgYWJvdXRUaGVGaWxtIH0pID0+IHtcclxuICAvLyBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZTxJUmV2aWV3c1tdPigpXHJcbiAgLy8gY29uc3QgW2NvbW1lbnQyLCBzZXRDb21tZW50Ml0gPXVzZVN0YXRlKClcclxuIGNvbnN0IHtcclxuICAgYmFjayxcclxuICAgcXVlcnk6IHsgaWQgPSAxIH1cclxuIH0gPSB1c2VSb3V0ZXIoKVxyXG4gIC8vIGNvbnNvbGUubG9nKGNvbW1lbnQpXHJcbiAgLy8gY29uc29sZS5sb2coY29tbWVudDIpXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoaXRlbXMpIHtcclxuICAvLyAgICAgc2V0Q29tbWVudChpdGVtcylcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvY29tbWVudHMvJHttb3ZpZUlkfS90cmVlYCwge1xyXG4gIC8vICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgLy8gICAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSlcclxuICAvLyAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgICAudGhlbihqc29uID0+IHNldENvbW1lbnQoanNvbikpXHJcbiAgLy8gICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtdKVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L2NvbW1lbnRzLzEvZmxhdCBgLCB7XHJcbiAgLy8gICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbihqc29uID0+IHNldENvbW1lbnQyKGpzb24pKVxyXG4gIC8vICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgLy8gfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5yZXZpZXdzfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX2l0ZW19PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nL2NvbW1lbnQvMSc+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0ncmV2aWV3cycgY2hpbGRyZW49e3RpdGxlQnRufSBxdWFudGl0eT17MTJ9IC8+XHJcbiAgICAgICAgICAgIHthYm91dFRoZUZpbG0gJiYgPHA+e2Fib3V0VGhlRmlsbX08L3A+fVxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9JyMqJyBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50c19idG59PlxyXG4gICAgICAgICAgPEJ1dHRvbiBzaXplPSdib3JkZXInIGNoaWxkcmVuPXtidG59IC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYWxsZXJ5fT5cclxuICAgICAgICA8U3dpcGVyIG5hdmlnYXRpb24gbW9kdWxlcz17W05hdmlnYXRpb25dfSBmcmVlTW9kZT17dHJ1ZX0gc3BhY2VCZXR3ZWVuPXsyMH0gc2xpZGVzUGVyVmlldz17dXNlV2luZG93U2l6ZSgncmV2aWV3cycpfT5cclxuICAgICAgICAgIHtyZXZpZXdzID8gKFxyXG4gICAgICAgICAgICByZXZpZXdzLm1hcCgoZmVlZGJhY2s6IGFueSwgaTogbnVtYmVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17ZmVlZGJhY2suaWR9PlxyXG4gICAgICAgICAgICAgICAgPFJldmlldyByZXdpZXc9e2ZlZWRiYWNrfSAvPlxyXG4gICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8UmV2aWV3IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvU3dpcGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPExpbmsgaHJlZj0nIyonIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzX2J0bl9tb2JpbGV9PlxyXG4gICAgICAgIDxCdXR0b24gc2l6ZT0nYm9yZGVyJyBjaGlsZHJlbj0n0J7RgdGC0LDQstC40YLRjCDQvtGC0LfRi9Cy0YsnIC8+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld3MiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiTmF2aWdhdGlvbiIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwic3R5bGVzIiwiUmV2aWV3IiwidXNlV2luZG93U2l6ZSIsIkJ1dHRvbiIsIlJldmlld3MiLCJ0aXRsZUJ0biIsInJldmlld3MiLCJidG4iLCJhYm91dFRoZUZpbG0iLCJiYWNrIiwicXVlcnkiLCJpZCIsInVzZVJvdXRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJkaXYiLCJoZWFkZXJfaXRlbSIsImhyZWYiLCJzaXplIiwiY2hpbGRyZW4iLCJxdWFudGl0eSIsInAiLCJjb21tZW50c19idG4iLCJnYWxsZXJ5IiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJmcmVlTW9kZSIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJtYXAiLCJmZWVkYmFjayIsImkiLCJyZXdpZXciLCJjb21tZW50c19idG5fbW9iaWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Reviews/Reviews.tsx\n"));

/***/ })

});