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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var _FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormReview/FormReview */ \"./src/components/ReviewsOnFilm/FormReview/FormReview.tsx\");\n/* harmony import */ var _ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReviewsList/ReviewsList */ \"./src/components/ReviewsOnFilm/ReviewsList/ReviewsList.tsx\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ReviewsOnFilm.module.scss */ \"./src/components/ReviewsOnFilm/ReviewsOnFilm.module.scss\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/store/reducers/dataBaseReducer */ \"./src/store/reducers/dataBaseReducer.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ReviewsOnFilm = ()=>{\n    _s();\n    const pickedFilm = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_7__.selectPickedMovie);\n    console.log(pickedFilm);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [disable, setDisable] = useState(true)\n    // const [value, setValue] = useState('')\n    // const [textarea, setTextarea] = useState('')\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const [movie, setMovie] = useState<IReviews[]>()\n    const { back , query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(comment);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (items) {\n        //   setComment(items)\n        // } else {\n        // fetch(`http://localhost:3004/movies/${id}`, {\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json'\n        //   }\n        // })\n        // .then(res => res.json())\n        //   .then(json => setMovie(json))\n        //   .catch(err => console.log(err))\n        fetch(\"http://localhost:3004/comments/\".concat(id, \"/tree\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>setComment(json)).catch((err)=>console.log(err));\n    // }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().conteiner),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().conteiner__wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btnGoBack),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>back(),\n                        size: \"iconGoBack\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdArrowBackIosNew, {\n                            size: 25\n                        }, void 0, false, void 0, void 0),\n                        children: \"К фильму\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().coments),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),\n                            children: pickedFilm.nameRu\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                size: \"reviews\",\n                                children: \"Рецензии\",\n                                quantity: comment === null || comment === void 0 ? void 0 : comment.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().coments_btn),\n                            children: [\n                                show ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    idReview: null,\n                                    setShow: setShow,\n                                    formName: \"Review\",\n                                    movieId: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    size: \"border\",\n                                    children: \"Написать рецензию\",\n                                    onClick: ()=>setShow(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().commentList),\n                                    children: (comment === null || comment === void 0 ? void 0 : comment.length) && comment.map((comment, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            comment: comment\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 96\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_8___default().movie),\n                    children: \"Карточка фильма!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewsOnFilm, \"z9rJUSfCKClwCt1zMGAvtX2sYUg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ReviewsOnFilm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewsOnFilm);\nvar _c;\n$RefreshReg$(_c, \"ReviewsOnFilm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL1Jldmlld3NPbkZpbG0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQytCO0FBQ3BCO0FBQ1Q7QUFJQTtBQUlPO0FBRUc7QUFDSDtBQUV3QjtBQUl6RSxNQUFNVyxnQkFBZ0IsSUFBTTs7SUFDMUIsTUFBTUMsYUFBYVAsd0RBQVdBLENBQUNLLGtGQUFpQkE7SUFDaERHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUN0QywrQ0FBK0M7SUFDL0MseUNBQXlDO0lBQ3pDLCtDQUErQztJQUMvQyxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBO0lBQ3RDLG1EQUFtRDtJQUNuRCxNQUFNLEVBQ0pnQixLQUFJLEVBQ0pDLE9BQU8sRUFBRUMsR0FBRSxFQUFHLEdBQ2YsR0FBR3JCLHNEQUFTQTtJQUNiLHdCQUF3QjtJQUV4QkUsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsV0FBVztRQUVYLGdEQUFnRDtRQUNoRCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLHlDQUF5QztRQUN6QyxNQUFNO1FBQ04sS0FBSztRQUNMLDJCQUEyQjtRQUMzQixrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBRXBDb0IsTUFBTSxrQ0FBcUMsT0FBSEQsSUFBRyxVQUFRO1lBQ2pERSxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0YsR0FDR0MsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQ3BCRixJQUFJLENBQUNFLENBQUFBLE9BQVFULFdBQVdTLE9BQ3hCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9oQixRQUFRQyxHQUFHLENBQUNlO0lBQzVCLElBQUk7SUFDTixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV3RCLDZFQUFnQjtrQkFDOUIsNEVBQUNxQjtZQUFJQyxXQUFXdEIsc0ZBQXlCOzs4QkFDdkMsOERBQUNxQjtvQkFBSUMsV0FBV3RCLDZFQUFnQjs4QkFDOUIsNEVBQUNILGtEQUFNQTt3QkFBQzZCLFNBQVMsSUFBTWhCO3dCQUFRaUIsTUFBSzt3QkFBYUMsb0JBQU0sOERBQUNqQyw2REFBaUJBOzRCQUFDZ0MsTUFBTTs7d0JBQVFFLFVBQVM7Ozs7Ozs7Ozs7OzhCQUVuRyw4REFBQ1I7b0JBQUlDLFdBQVd0QiwyRUFBYzs7c0NBQzVCLDhEQUFDK0I7NEJBQUdULFdBQVd0Qix5RUFBWTtzQ0FBR0csV0FBVzhCLE1BQU07Ozs7OztzQ0FDL0MsOERBQUNaO3NDQUNDLDRFQUFDeEIsa0RBQU1BO2dDQUFDOEIsTUFBSztnQ0FBVUUsVUFBUztnQ0FBV0ssVUFBVTFCLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBUzJCLE1BQU07Ozs7Ozs7Ozs7O3NDQUV0RSw4REFBQ2Q7NEJBQUlDLFdBQVd0QiwrRUFBa0I7O2dDQUMvQk0scUJBQ0MsOERBQUNSLDhEQUFVQTtvQ0FBQ3VDLFVBQVUsSUFBSTtvQ0FBRTlCLFNBQVNBO29DQUFTK0IsVUFBUztvQ0FBU0MsU0FBUzNCOzs7Ozs4REFFekUsOERBQUNmLGtEQUFNQTtvQ0FBQzhCLE1BQUs7b0NBQVNFLFVBQVM7b0NBQW9CSCxTQUFTLElBQU1uQixRQUFRLElBQUk7Ozs7OzZDQUMvRTs4Q0FDRCw4REFBQ2lDO29DQUFHbEIsV0FBV3RCLCtFQUFrQjs4Q0FBR1EsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTMkIsTUFBTSxLQUFJM0IsUUFBUWtDLEdBQUcsQ0FBQyxDQUFDbEMsU0FBU21DLGtCQUFNLDhEQUFDNUMsZ0VBQVdBOzRDQUFTUyxTQUFTQTsyQ0FBWm1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd6Ryw4REFBQ3RCO29CQUFJQyxXQUFXdEIseUVBQVk7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBbkVNRTs7UUFDZU4sb0RBQVdBO1FBWTFCTCxrREFBU0E7OztLQWJUVztBQXFFTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL1Jldmlld3NPbkZpbG0udHN4P2VkYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNZEFycm93QmFja0lvc05ldyB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbi9CdXR0b24nO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgRm9ybVJldmlldyBmcm9tICcuL0Zvcm1SZXZpZXcvRm9ybVJldmlldyc7XHJcbmltcG9ydCBDb21tZW50IGZyb20gJy4vUmV2aWV3c0xpc3QvUmV2aWV3c0l0ZW0nO1xyXG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSAnLi9SZXZpZXdzTGlzdC9SZXZpZXdzTGlzdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SZXZpZXdzT25GaWxtLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgY29tbWVudHNQcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xyXG5pbXBvcnQgeyBzZWxlY3RQaWNrZWRNb3ZpZSB9IGZyb20gJ0Avc3JjL3N0b3JlL3JlZHVjZXJzL2RhdGFCYXNlUmVkdWNlcic7XHJcbmltcG9ydCB7IElSZXZpZXdzIH0gZnJvbSAnQC9zcmMvdHlwZXMvQ29tbWVudHNUeXBlJztcclxuXHJcblxyXG5jb25zdCBSZXZpZXdzT25GaWxtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBpY2tlZEZpbG0gPSB1c2VTZWxlY3RvcihzZWxlY3RQaWNrZWRNb3ZpZSlcclxuICBjb25zb2xlLmxvZyhwaWNrZWRGaWxtKVxyXG4gIFxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgLy8gY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyBjb25zdCBbdGV4dGFyZWEsIHNldFRleHRhcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICAvLyBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICBjb25zdCB7XHJcbiAgICBiYWNrLFxyXG4gICAgcXVlcnk6IHsgaWQgIH1cclxuICB9ID0gdXNlUm91dGVyKClcclxuICAvLyBjb25zb2xlLmxvZyhjb21tZW50KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGlmIChpdGVtcykge1xyXG4gICAgLy8gICBzZXRDb21tZW50KGl0ZW1zKVxyXG4gICAgLy8gfSBlbHNlIHtcclxuXHJcbiAgICAvLyBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L21vdmllcy8ke2lkfWAsIHtcclxuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAudGhlbihqc29uID0+IHNldE1vdmllKGpzb24pKVxyXG4gICAgLy8gICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcblxyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb21tZW50cy8ke2lkfS90cmVlYCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oanNvbiA9PiBzZXRDb21tZW50KGpzb24pKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAvLyB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVpbmVyX193cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bkdvQmFja30+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGJhY2soKX0gc2l6ZT0naWNvbkdvQmFjaycgaWNvbj17PE1kQXJyb3dCYWNrSW9zTmV3IHNpemU9ezI1fSAvPn0gY2hpbGRyZW49J9CaINGE0LjQu9GM0LzRgycgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHN9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cGlja2VkRmlsbS5uYW1lUnV9PC9oMj5cclxuICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9J3Jldmlld3MnIGNoaWxkcmVuPSfQoNC10YbQtdC90LfQuNC4JyBxdWFudGl0eT17Y29tbWVudD8ubGVuZ3RofSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHNfYnRufT5cclxuICAgICAgICAgICAge3Nob3cgPyAoXHJcbiAgICAgICAgICAgICAgPEZvcm1SZXZpZXcgaWRSZXZpZXc9e251bGx9IHNldFNob3c9e3NldFNob3d9IGZvcm1OYW1lPSdSZXZpZXcnIG1vdmllSWQ9e2lkfSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0nYm9yZGVyJyBjaGlsZHJlbj0n0J3QsNC/0LjRgdCw0YLRjCDRgNC10YbQtdC90LfQuNGOJyBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KHRydWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudExpc3R9Pntjb21tZW50Py5sZW5ndGggJiYgY29tbWVudC5tYXAoKGNvbW1lbnQsIGkpID0+IDxDb21tZW50TGlzdCBrZXk9e2l9IGNvbW1lbnQ9e2NvbW1lbnR9IC8+KX08L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3ZpZX0+0JrQsNGA0YLQvtGH0LrQsCDRhNC40LvRjNC80LAhPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdzT25GaWxtIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZEFycm93QmFja0lvc05ldyIsInVzZVNlbGVjdG9yIiwiQnV0dG9uIiwiRm9ybVJldmlldyIsIkNvbW1lbnRMaXN0Iiwic3R5bGVzIiwic2VsZWN0UGlja2VkTW92aWUiLCJSZXZpZXdzT25GaWxtIiwicGlja2VkRmlsbSIsImNvbnNvbGUiLCJsb2ciLCJzaG93Iiwic2V0U2hvdyIsImNvbW1lbnQiLCJzZXRDb21tZW50IiwiYmFjayIsInF1ZXJ5IiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVpbmVyIiwiY29udGVpbmVyX193cmFwcGVyIiwiYnRuR29CYWNrIiwib25DbGljayIsInNpemUiLCJpY29uIiwiY2hpbGRyZW4iLCJjb21lbnRzIiwiaDIiLCJ0aXRsZSIsIm5hbWVSdSIsInF1YW50aXR5IiwibGVuZ3RoIiwiY29tZW50c19idG4iLCJpZFJldmlldyIsImZvcm1OYW1lIiwibW92aWVJZCIsInVsIiwiY29tbWVudExpc3QiLCJtYXAiLCJpIiwibW92aWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx\n"));

/***/ })

});