"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies/comment/[id]",{

/***/ "./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx":
/*!********************************************************!*\
  !*** ./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var _FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormReview/FormReview */ \"./src/components/ReviewsOnFilm/FormReview/FormReview.tsx\");\n/* harmony import */ var _ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReviewsList/ReviewsList */ \"./src/components/ReviewsOnFilm/ReviewsList/ReviewsList.tsx\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReviewsOnFilm.module.scss */ \"./src/components/ReviewsOnFilm/ReviewsOnFilm.module.scss\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/hooks/useOutside */ \"./src/hooks/useOutside.ts\");\n/* harmony import */ var _src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/store/reducers/dataBaseReducer */ \"./src/store/reducers/dataBaseReducer.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ReviewsOnFilm = ()=>{\n    _s();\n    const pickedFilm = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_8__.selectPickedMovie);\n    console.log(pickedFilm);\n    const { ref , isShow , setIsShow  } = (0,_src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__.useOuside)(false);\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const [movie, setMovie] = useState<IReviews[]>()\n    const { back , query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(comment);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (items) {\n        //   setComment(items)\n        // } else {\n        // fetch(`http://localhost:3004/movies/${id}`, {\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json'\n        //   }\n        // })\n        // .then(res => res.json())\n        //   .then(json => setMovie(json))\n        //   .catch(err => console.log(err))\n        fetch(\"http://localhost:3004/comments/\".concat(id, \"/tree\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>setComment(json)).catch((err)=>console.log(err));\n    // }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner__wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btnGoBack),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>back(),\n                        size: \"iconGoBack\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdArrowBackIosNew, {\n                            size: 25\n                        }, void 0, false, void 0, void 0),\n                        children: \"К фильму\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),\n                            children: pickedFilm.nameRu\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                size: \"reviews\",\n                                children: \"Рецензии\",\n                                quantity: comment === null || comment === void 0 ? void 0 : comment.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: ref,\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments_btn),\n                            children: [\n                                isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    idReview: null,\n                                    setShow: setIsShow,\n                                    formName: \"Review\",\n                                    movieId: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    size: \"border\",\n                                    children: \"Написать рецензию\",\n                                    onClick: ()=>setIsShow(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().commentList),\n                                    children: (comment === null || comment === void 0 ? void 0 : comment.length) && comment.map((comment, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            comment: comment\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 96\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().movie),\n                    children: \"Карточка фильма!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewsOnFilm, \"aMXepVbniVbvlrgf38R3nh6h1i0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__.useOuside,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ReviewsOnFilm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewsOnFilm);\nvar _c;\n$RefreshReg$(_c, \"ReviewsOnFilm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL1Jldmlld3NPbkZpbG0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUMrQjtBQUNwQjtBQUNUO0FBRUE7QUFFTztBQUVHO0FBQ0g7QUFFRTtBQUNzQjtBQUd4RSxNQUFNWSxnQkFBZ0IsSUFBTTs7SUFDMUIsTUFBTUMsYUFBYVIsd0RBQVdBLENBQUNNLGtGQUFpQkE7SUFDaERHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLEVBQUVHLElBQUcsRUFBRUMsT0FBTSxFQUFFQyxVQUFTLEVBQUUsR0FBR1IsZ0VBQVNBLENBQUMsS0FBSztJQUNsRCxNQUFNLENBQUNTLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQTtJQUN0QyxtREFBbUQ7SUFDbkQsTUFBTSxFQUNKa0IsS0FBSSxFQUNKQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUd2QixzREFBU0E7SUFDYix3QkFBd0I7SUFFeEJFLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLFdBQVc7UUFFWCxnREFBZ0Q7UUFDaEQsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5Q0FBeUM7UUFDekMsTUFBTTtRQUNOLEtBQUs7UUFDTCwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLG9DQUFvQztRQUVwQ3NCLE1BQU0sa0NBQXFDLE9BQUhELElBQUcsVUFBUTtZQUNqREUsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0dDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRVCxXQUFXUyxPQUN4QkMsS0FBSyxDQUFDQyxDQUFBQSxNQUFPakIsUUFBUUMsR0FBRyxDQUFDZ0I7SUFDNUIsSUFBSTtJQUNOLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXeEIsNkVBQWdCO2tCQUM5Qiw0RUFBQ3VCO1lBQUlDLFdBQVd4QixzRkFBeUI7OzhCQUN2Qyw4REFBQ3VCO29CQUFJQyxXQUFXeEIsNkVBQWdCOzhCQUM5Qiw0RUFBQ0gsa0RBQU1BO3dCQUFDK0IsU0FBUyxJQUFNaEI7d0JBQVFpQixNQUFLO3dCQUFhQyxvQkFBTSw4REFBQ25DLDhEQUFpQkE7NEJBQUNrQyxNQUFNOzt3QkFBUUUsVUFBUzs7Ozs7Ozs7Ozs7OEJBRW5HLDhEQUFDUjtvQkFBSUMsV0FBV3hCLDJFQUFjOztzQ0FDNUIsOERBQUNpQzs0QkFBR1QsV0FBV3hCLHlFQUFZO3NDQUFHSSxXQUFXK0IsTUFBTTs7Ozs7O3NDQUMvQyw4REFBQ1o7c0NBQ0MsNEVBQUMxQixrREFBTUE7Z0NBQUNnQyxNQUFLO2dDQUFVRSxVQUFTO2dDQUFXSyxVQUFVMUIsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTMkIsTUFBTTs7Ozs7Ozs7Ozs7c0NBRXRFLDhEQUFDZDs0QkFBSWhCLEtBQUtBOzRCQUFLaUIsV0FBV3hCLCtFQUFrQjs7Z0NBQ3pDUSx1QkFDQyw4REFBQ1YsOERBQVVBO29DQUFDeUMsVUFBVSxJQUFJO29DQUFFQyxTQUFTL0I7b0NBQVdnQyxVQUFTO29DQUFTQyxTQUFTNUI7Ozs7OzhEQUUzRSw4REFBQ2pCLGtEQUFNQTtvQ0FBQ2dDLE1BQUs7b0NBQVNFLFVBQVM7b0NBQW9CSCxTQUFTLElBQU1uQixVQUFVLElBQUk7Ozs7OzZDQUNqRjs4Q0FDRCw4REFBQ2tDO29DQUFHbkIsV0FBV3hCLCtFQUFrQjs4Q0FBR1UsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTMkIsTUFBTSxLQUFJM0IsUUFBUW1DLEdBQUcsQ0FBQyxDQUFDbkMsU0FBU29DLGtCQUFNLDhEQUFDL0MsZ0VBQVdBOzRDQUFTVyxTQUFTQTsyQ0FBWm9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd6Ryw4REFBQ3ZCO29CQUFJQyxXQUFXeEIseUVBQVk7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBL0RNRzs7UUFDZVAsb0RBQVdBO1FBRUtLLDREQUFTQTtRQU14Q1Ysa0RBQVNBOzs7S0FUVFk7QUFpRU4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3c09uRmlsbS9SZXZpZXdzT25GaWxtLnRzeD9lZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWRBcnJvd0JhY2tJb3NOZXcgfSBmcm9tICdyZWFjdC1pY29ucy9tZCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbi9CdXR0b24nXHJcblxyXG5pbXBvcnQgRm9ybVJldmlldyBmcm9tICcuL0Zvcm1SZXZpZXcvRm9ybVJldmlldydcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9SZXZpZXdzTGlzdC9SZXZpZXdzSXRlbSdcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vUmV2aWV3c0xpc3QvUmV2aWV3c0xpc3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SZXZpZXdzT25GaWxtLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgeyBjb21tZW50c1Byb3BzIH0gZnJvbSAnLi9wcm9wcydcclxuaW1wb3J0IHsgdXNlT3VzaWRlIH0gZnJvbSAnQC9zcmMvaG9va3MvdXNlT3V0c2lkZSdcclxuaW1wb3J0IHsgc2VsZWN0UGlja2VkTW92aWUgfSBmcm9tICdAL3NyYy9zdG9yZS9yZWR1Y2Vycy9kYXRhQmFzZVJlZHVjZXInXHJcbmltcG9ydCB7IElSZXZpZXdzIH0gZnJvbSAnQC9zcmMvdHlwZXMvQ29tbWVudHNUeXBlJ1xyXG5cclxuY29uc3QgUmV2aWV3c09uRmlsbSA9ICgpID0+IHtcclxuICBjb25zdCBwaWNrZWRGaWxtID0gdXNlU2VsZWN0b3Ioc2VsZWN0UGlja2VkTW92aWUpXHJcbiAgY29uc29sZS5sb2cocGlja2VkRmlsbSlcclxuICBjb25zdCB7IHJlZiwgaXNTaG93LCBzZXRJc1Nob3cgfSA9IHVzZU91c2lkZShmYWxzZSlcclxuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZTxJUmV2aWV3c1tdPigpXHJcbiAgLy8gY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZTxJUmV2aWV3c1tdPigpXHJcbiAgY29uc3Qge1xyXG4gICAgYmFjayxcclxuICAgIHF1ZXJ5OiB7IGlkIH1cclxuICB9ID0gdXNlUm91dGVyKClcclxuICAvLyBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGlmIChpdGVtcykge1xyXG4gICAgLy8gICBzZXRDb21tZW50KGl0ZW1zKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAvLyBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L21vdmllcy8ke2lkfWAsIHtcclxuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAudGhlbihqc29uID0+IHNldE1vdmllKGpzb24pKVxyXG4gICAgLy8gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb21tZW50cy8ke2lkfS90cmVlYCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oanNvbiA9PiBzZXRDb21tZW50KGpzb24pKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAvLyB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVpbmVyX193cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bkdvQmFja30+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGJhY2soKX0gc2l6ZT0naWNvbkdvQmFjaycgaWNvbj17PE1kQXJyb3dCYWNrSW9zTmV3IHNpemU9ezI1fSAvPn0gY2hpbGRyZW49J9CaINGE0LjQu9GM0LzRgycgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHN9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cGlja2VkRmlsbS5uYW1lUnV9PC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0ncmV2aWV3cycgY2hpbGRyZW49J9Cg0LXRhtC10L3Qt9C40LgnIHF1YW50aXR5PXtjb21tZW50Py5sZW5ndGh9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHNfYnRufT5cclxuICAgICAgICAgICAge2lzU2hvdyA/IChcclxuICAgICAgICAgICAgICA8Rm9ybVJldmlldyBpZFJldmlldz17bnVsbH0gc2V0U2hvdz17c2V0SXNTaG93fSBmb3JtTmFtZT0nUmV2aWV3JyBtb3ZpZUlkPXtpZH0gLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9J2JvcmRlcicgY2hpbGRyZW49J9Cd0LDQv9C40YHQsNGC0Ywg0YDQtdGG0LXQvdC30LjRjicgb25DbGljaz17KCkgPT4gc2V0SXNTaG93KHRydWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudExpc3R9Pntjb21tZW50Py5sZW5ndGggJiYgY29tbWVudC5tYXAoKGNvbW1lbnQsIGkpID0+IDxDb21tZW50TGlzdCBrZXk9e2l9IGNvbW1lbnQ9e2NvbW1lbnR9IC8+KX08L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZX0+0JrQsNGA0YLQvtGH0LrQsCDRhNC40LvRjNC80LAhPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzT25GaWxtXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWRBcnJvd0JhY2tJb3NOZXciLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIkZvcm1SZXZpZXciLCJDb21tZW50TGlzdCIsInN0eWxlcyIsInVzZU91c2lkZSIsInNlbGVjdFBpY2tlZE1vdmllIiwiUmV2aWV3c09uRmlsbSIsInBpY2tlZEZpbG0iLCJjb25zb2xlIiwibG9nIiwicmVmIiwiaXNTaG93Iiwic2V0SXNTaG93IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJiYWNrIiwicXVlcnkiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZWluZXIiLCJjb250ZWluZXJfX3dyYXBwZXIiLCJidG5Hb0JhY2siLCJvbkNsaWNrIiwic2l6ZSIsImljb24iLCJjaGlsZHJlbiIsImNvbWVudHMiLCJoMiIsInRpdGxlIiwibmFtZVJ1IiwicXVhbnRpdHkiLCJsZW5ndGgiLCJjb21lbnRzX2J0biIsImlkUmV2aWV3Iiwic2V0U2hvdyIsImZvcm1OYW1lIiwibW92aWVJZCIsInVsIiwiY29tbWVudExpc3QiLCJtYXAiLCJpIiwibW92aWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx\n"));

/***/ })

});