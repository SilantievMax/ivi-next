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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var _FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormReview/FormReview */ \"./src/components/ReviewsOnFilm/FormReview/FormReview.tsx\");\n/* harmony import */ var _ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReviewsList/ReviewsList */ \"./src/components/ReviewsOnFilm/ReviewsList/ReviewsList.tsx\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReviewsOnFilm.module.scss */ \"./src/components/ReviewsOnFilm/ReviewsOnFilm.module.scss\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/hooks/useOutside */ \"./src/hooks/useOutside.ts\");\n/* harmony import */ var _src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/store/reducers/dataBaseReducer */ \"./src/store/reducers/dataBaseReducer.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ReviewsOnFilm = ()=>{\n    _s();\n    const pickedFilm = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_8__.selectPickedMovie);\n    console.log(pickedFilm);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [disable, setDisable] = useState(true)\n    // const [value, setValue] = useState('')\n    // const [textarea, setTextarea] = useState('')\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const [movie, setMovie] = useState<IReviews[]>()\n    const { back , query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(comment);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (items) {\n        //   setComment(items)\n        // } else {\n        // fetch(`http://localhost:3004/movies/${id}`, {\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json'\n        //   }\n        // })\n        // .then(res => res.json())\n        //   .then(json => setMovie(json))\n        //   .catch(err => console.log(err))\n        fetch(\"http://localhost:3004/comments/\".concat(id, \"/tree\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>setComment(json)).catch((err)=>console.log(err));\n    // }\n    }, []);\n    const { ref , isShow , setIsShow  } = (0,_src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__.useOuside)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner__wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btnGoBack),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>back(),\n                        size: \"iconGoBack\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdArrowBackIosNew, {\n                            size: 25\n                        }, void 0, false, void 0, void 0),\n                        children: \"К фильму\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),\n                            children: pickedFilm.nameRu\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                size: \"reviews\",\n                                children: \"Рецензии\",\n                                quantity: comment === null || comment === void 0 ? void 0 : comment.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\" /// <reference path=\"\" />\n                        , {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments_btn),\n                            children: [\n                                isShow ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    idReview: null,\n                                    setShow: setIsShow,\n                                    formName: \"Review\",\n                                    movieId: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    size: \"border\",\n                                    children: \"Написать рецензию\",\n                                    onClick: ()=>setIsShow(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().commentList),\n                                    children: (comment === null || comment === void 0 ? void 0 : comment.length) && comment.map((comment, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            comment: comment\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 96\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().movie),\n                    children: \"Карточка фильма!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewsOnFilm, \"DOBxMQyYfR3LwkFDhvAHSMaZtps=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_7__.useOuside\n    ];\n});\n_c = ReviewsOnFilm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewsOnFilm);\nvar _c;\n$RefreshReg$(_c, \"ReviewsOnFilm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL1Jldmlld3NPbkZpbG0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUMrQjtBQUNwQjtBQUNUO0FBSUE7QUFJTztBQUVHO0FBQ0g7QUFFRTtBQUNzQjtBQUl6RSxNQUFNWSxnQkFBZ0IsSUFBTTs7SUFDMUIsTUFBTUMsYUFBYVIsd0RBQVdBLENBQUNNLGtGQUFpQkE7SUFDaERHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUN0QywrQ0FBK0M7SUFDL0MseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQTtJQUN0QyxtREFBbUQ7SUFDbkQsTUFBTSxFQUNKaUIsS0FBSSxFQUNKQyxPQUFPLEVBQUVDLEdBQUUsRUFBRSxHQUNkLEdBQUd0QixzREFBU0E7SUFDYix3QkFBd0I7SUFFeEJFLGdEQUFTQSxDQUFDLElBQU07UUFDZCxlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLFdBQVc7UUFFWCxnREFBZ0Q7UUFDaEQsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5Q0FBeUM7UUFDekMsTUFBTTtRQUNOLEtBQUs7UUFDTCwyQkFBMkI7UUFDM0Isa0NBQWtDO1FBQ2xDLG9DQUFvQztRQUVwQ3FCLE1BQU0sa0NBQXFDLE9BQUhELElBQUcsVUFBUTtZQUNqREUsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGLEdBQ0dDLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRVCxXQUFXUyxPQUN4QkMsS0FBSyxDQUFDQyxDQUFBQSxNQUFPaEIsUUFBUUMsR0FBRyxDQUFDZTtJQUM1QixJQUFJO0lBQ04sR0FBRyxFQUFFO0lBQ0wsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUd2QixnRUFBU0EsQ0FBQyxLQUFLO0lBQ2xELHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVzFCLDZFQUFnQjtrQkFDOUIsNEVBQUN5QjtZQUFJQyxXQUFXMUIsc0ZBQXlCOzs4QkFDdkMsOERBQUN5QjtvQkFBSUMsV0FBVzFCLDZFQUFnQjs4QkFDOUIsNEVBQUNILGtEQUFNQTt3QkFBQ2lDLFNBQVMsSUFBTW5CO3dCQUFRb0IsTUFBSzt3QkFBYUMsb0JBQU0sOERBQUNyQyw4REFBaUJBOzRCQUFDb0MsTUFBTTs7d0JBQVFFLFVBQVM7Ozs7Ozs7Ozs7OzhCQUVuRyw4REFBQ1I7b0JBQUlDLFdBQVcxQiwyRUFBYzs7c0NBQzVCLDhEQUFDbUM7NEJBQUdULFdBQVcxQix5RUFBWTtzQ0FBR0ksV0FBV2lDLE1BQU07Ozs7OztzQ0FDL0MsOERBQUNaO3NDQUNDLDRFQUFDNUIsa0RBQU1BO2dDQUFDa0MsTUFBSztnQ0FBVUUsVUFBUztnQ0FBV0ssVUFBVTdCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBUzhCLE1BQU07Ozs7Ozs7Ozs7O3NDQUV0RSw4REFBQ2QsTUFBSSx5QkFBeUI7OzRCQUM3QkMsV0FBVzFCLCtFQUFrQjs7Z0NBQzNCdUIsdUJBQ0MsOERBQUN6Qiw4REFBVUE7b0NBQUUyQyxVQUFVLElBQUk7b0NBQUVqQyxTQUFTZ0I7b0NBQVdrQixVQUFTO29DQUFTQyxTQUFTOUI7Ozs7OzhEQUU1RSw4REFBQ2hCLGtEQUFNQTtvQ0FBQ2tDLE1BQUs7b0NBQVNFLFVBQVM7b0NBQW9CSCxTQUFTLElBQU1OLFVBQVUsSUFBSTs7Ozs7NkNBQ2pGOzhDQUNELDhEQUFDb0I7b0NBQUdsQixXQUFXMUIsK0VBQWtCOzhDQUFHUyxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVM4QixNQUFNLEtBQUk5QixRQUFRcUMsR0FBRyxDQUFDLENBQUNyQyxTQUFTc0Msa0JBQU0sOERBQUNoRCxnRUFBV0E7NENBQVNVLFNBQVNBOzJDQUFac0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pHLDhEQUFDdEI7b0JBQUlDLFdBQVcxQix5RUFBWTs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0FwRU1HOztRQUNlUCxvREFBV0E7UUFZMUJMLGtEQUFTQTtRQTZCc0JVLDREQUFTQTs7O0tBMUN4Q0U7QUFzRU4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3c09uRmlsbS9SZXZpZXdzT25GaWxtLnRzeD9lZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWRBcnJvd0JhY2tJb3NOZXcgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuXHJcblxyXG5cclxuaW1wb3J0IEZvcm1SZXZpZXcgZnJvbSAnLi9Gb3JtUmV2aWV3L0Zvcm1SZXZpZXcnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL1Jldmlld3NMaXN0L1Jldmlld3NJdGVtJztcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vUmV2aWV3c0xpc3QvUmV2aWV3c0xpc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmV2aWV3c09uRmlsbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGNvbW1lbnRzUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcclxuaW1wb3J0IHsgdXNlT3VzaWRlIH0gZnJvbSAnQC9zcmMvaG9va3MvdXNlT3V0c2lkZSc7XHJcbmltcG9ydCB7IHNlbGVjdFBpY2tlZE1vdmllIH0gZnJvbSAnQC9zcmMvc3RvcmUvcmVkdWNlcnMvZGF0YUJhc2VSZWR1Y2VyJztcclxuaW1wb3J0IHsgSVJldmlld3MgfSBmcm9tICdAL3NyYy90eXBlcy9Db21tZW50c1R5cGUnO1xyXG5cclxuXHJcbmNvbnN0IFJldmlld3NPbkZpbG0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcGlja2VkRmlsbSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBpY2tlZE1vdmllKVxyXG4gIGNvbnNvbGUubG9nKHBpY2tlZEZpbG0pXHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgLy8gY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyBjb25zdCBbdGV4dGFyZWEsIHNldFRleHRhcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICAvLyBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICBjb25zdCB7XHJcbiAgICBiYWNrLFxyXG4gICAgcXVlcnk6IHsgaWQgfVxyXG4gIH0gPSB1c2VSb3V0ZXIoKVxyXG4gIC8vIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaWYgKGl0ZW1zKSB7XHJcbiAgICAvLyAgIHNldENvbW1lbnQoaXRlbXMpXHJcbiAgICAvLyB9IGVsc2Uge1xyXG5cclxuICAgIC8vIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvbW92aWVzLyR7aWR9YCwge1xyXG4gICAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgIC50aGVuKGpzb24gPT4gc2V0TW92aWUoanNvbikpXHJcbiAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L2NvbW1lbnRzLyR7aWR9L3RyZWVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihqc29uID0+IHNldENvbW1lbnQoanNvbikpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC8vIH1cclxuICB9LCBbXSlcclxuICBjb25zdCB7IHJlZiwgaXNTaG93LCBzZXRJc1Nob3cgfSA9IHVzZU91c2lkZShmYWxzZSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlaW5lcl9fd3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5Hb0JhY2t9PlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBiYWNrKCl9IHNpemU9J2ljb25Hb0JhY2snIGljb249ezxNZEFycm93QmFja0lvc05ldyBzaXplPXsyNX0gLz59IGNoaWxkcmVuPSfQmiDRhNC40LvRjNC80YMnIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21lbnRzfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3BpY2tlZEZpbG0ubmFtZVJ1fTwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J3Jldmlld3MnIGNoaWxkcmVuPSfQoNC10YbQtdC90LfQuNC4JyBxdWFudGl0eT17Y29tbWVudD8ubGVuZ3RofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IC8vLyA8cmVmZXJlbmNlIHBhdGg9XCJcIiAvPlxyXG4gICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHNfYnRufT5cclxuICAgICAgICAgICAge2lzU2hvdyA/IChcclxuICAgICAgICAgICAgICA8Rm9ybVJldmlldyAgaWRSZXZpZXc9e251bGx9IHNldFNob3c9e3NldElzU2hvd30gZm9ybU5hbWU9J1JldmlldycgbW92aWVJZD17aWR9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdib3JkZXInIGNoaWxkcmVuPSfQndCw0L/QuNGB0LDRgtGMINGA0LXRhtC10L3Qt9C40Y4nIG9uQ2xpY2s9eygpID0+IHNldElzU2hvdyh0cnVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRMaXN0fT57Y29tbWVudD8ubGVuZ3RoICYmIGNvbW1lbnQubWFwKChjb21tZW50LCBpKSA9PiA8Q29tbWVudExpc3Qga2V5PXtpfSBjb21tZW50PXtjb21tZW50fSAvPil9PC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW92aWV9PtCa0LDRgNGC0L7Rh9C60LAg0YTQuNC70YzQvNCwITwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3c09uRmlsbSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWRBcnJvd0JhY2tJb3NOZXciLCJ1c2VTZWxlY3RvciIsIkJ1dHRvbiIsIkZvcm1SZXZpZXciLCJDb21tZW50TGlzdCIsInN0eWxlcyIsInVzZU91c2lkZSIsInNlbGVjdFBpY2tlZE1vdmllIiwiUmV2aWV3c09uRmlsbSIsInBpY2tlZEZpbG0iLCJjb25zb2xlIiwibG9nIiwic2hvdyIsInNldFNob3ciLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImJhY2siLCJxdWVyeSIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsInJlZiIsImlzU2hvdyIsInNldElzU2hvdyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlaW5lciIsImNvbnRlaW5lcl9fd3JhcHBlciIsImJ0bkdvQmFjayIsIm9uQ2xpY2siLCJzaXplIiwiaWNvbiIsImNoaWxkcmVuIiwiY29tZW50cyIsImgyIiwidGl0bGUiLCJuYW1lUnUiLCJxdWFudGl0eSIsImxlbmd0aCIsImNvbWVudHNfYnRuIiwiaWRSZXZpZXciLCJmb3JtTmFtZSIsIm1vdmllSWQiLCJ1bCIsImNvbW1lbnRMaXN0IiwibWFwIiwiaSIsIm1vdmllIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx\n"));

/***/ })

});