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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var _FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormReview/FormReview */ \"./src/components/ReviewsOnFilm/FormReview/FormReview.tsx\");\n/* harmony import */ var _ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReviewsList/ReviewsList */ \"./src/components/ReviewsOnFilm/ReviewsList/ReviewsList.tsx\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ReviewsOnFilm.module.scss */ \"./src/components/ReviewsOnFilm/ReviewsOnFilm.module.scss\");\n/* harmony import */ var _ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/src/store/reducers/dataBaseReducer */ \"./src/store/reducers/dataBaseReducer.ts\");\n/* harmony import */ var _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/hooks/useOutside */ \"./src/hooks/useOutside.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst ReviewsOnFilm = ()=>{\n    _s();\n    const pickedFilm = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_src_store_reducers_dataBaseReducer__WEBPACK_IMPORTED_MODULE_7__.selectPickedMovie);\n    console.log(pickedFilm);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    // const [disable, setDisable] = useState(true)\n    // const [value, setValue] = useState('')\n    // const [textarea, setTextarea] = useState('')\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const [movie, setMovie] = useState<IReviews[]>()\n    const { back , query: { id  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // console.log(comment);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // if (items) {\n        //   setComment(items)\n        // } else {\n        // fetch(`http://localhost:3004/movies/${id}`, {\n        //   method: 'GET',\n        //   headers: {\n        //     'Content-Type': 'application/json'\n        //   }\n        // })\n        // .then(res => res.json())\n        //   .then(json => setMovie(json))\n        //   .catch(err => console.log(err))\n        fetch(\"http://localhost:3004/comments/\".concat(id, \"/tree\"), {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((res)=>res.json()).then((json)=>setComment(json)).catch((err)=>console.log(err));\n    // }\n    }, []);\n    const { ref  } = (0,_src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_8__.useOuside)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().conteiner__wrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btnGoBack),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        onClick: ()=>back(),\n                        size: \"iconGoBack\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_10__.MdArrowBackIosNew, {\n                            size: 25\n                        }, void 0, false, void 0, void 0),\n                        children: \"К фильму\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().title),\n                            children: pickedFilm.nameRu\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                size: \"reviews\",\n                                children: \"Рецензии\",\n                                quantity: comment === null || comment === void 0 ? void 0 : comment.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().coments_btn),\n                            children: [\n                                show ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FormReview_FormReview__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    idReview: null,\n                                    setShow: setShow,\n                                    formName: \"Review\",\n                                    movieId: id\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                    size: \"border\",\n                                    children: \"Написать рецензию\",\n                                    onClick: ()=>setShow(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().commentList),\n                                    children: (comment === null || comment === void 0 ? void 0 : comment.length) && comment.map((comment, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ReviewsList_ReviewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            comment: comment\n                                        }, i, false, {\n                                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 96\n                                        }, undefined))\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ReviewsOnFilm_module_scss__WEBPACK_IMPORTED_MODULE_9___default().movie),\n                    children: \"Карточка фильма!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\ReviewsOnFilm.tsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ReviewsOnFilm, \"6fGMaFFeY8c11vZQnsIh2VAzmtM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _src_hooks_useOutside__WEBPACK_IMPORTED_MODULE_8__.useOuside\n    ];\n});\n_c = ReviewsOnFilm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewsOnFilm);\nvar _c;\n$RefreshReg$(_c, \"ReviewsOnFilm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL1Jldmlld3NPbkZpbG0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQUMrQjtBQUNwQjtBQUNUO0FBSUE7QUFJTztBQUVHO0FBQ0g7QUFFd0I7QUFFdEI7QUFHbkQsTUFBTVksZ0JBQWdCLElBQU07O0lBQzFCLE1BQU1DLGFBQWFSLHdEQUFXQSxDQUFDSyxrRkFBaUJBO0lBQ2hESSxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEMsK0NBQStDO0lBQy9DLHlDQUF5QztJQUN6QywrQ0FBK0M7SUFDL0MsTUFBTSxDQUFDZSxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUE7SUFDdEMsbURBQW1EO0lBQ25ELE1BQU0sRUFDSmlCLEtBQUksRUFDSkMsT0FBTyxFQUFFQyxHQUFFLEVBQUUsR0FDZCxHQUFHdEIsc0RBQVNBO0lBQ2Isd0JBQXdCO0lBRXhCRSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixXQUFXO1FBRVgsZ0RBQWdEO1FBQ2hELG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YseUNBQXlDO1FBQ3pDLE1BQU07UUFDTixLQUFLO1FBQ0wsMkJBQTJCO1FBQzNCLGtDQUFrQztRQUNsQyxvQ0FBb0M7UUFFcENxQixNQUFNLGtDQUFxQyxPQUFIRCxJQUFHLFVBQVE7WUFDakRFLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRixHQUNHQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0UsQ0FBQUEsT0FBUVQsV0FBV1MsT0FDeEJDLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT2hCLFFBQVFDLEdBQUcsQ0FBQ2U7SUFDNUIsSUFBSTtJQUNOLEdBQUcsRUFBRTtJQUNMLE1BQU0sRUFBQ0MsSUFBRyxFQUFFLEdBQUdwQixnRUFBU0E7SUFDeEIscUJBQ0UsOERBQUNxQjtRQUFJQyxXQUFXeEIsNkVBQWdCO2tCQUM5Qiw0RUFBQ3VCO1lBQUlDLFdBQVd4QixzRkFBeUI7OzhCQUN2Qyw4REFBQ3VCO29CQUFJQyxXQUFXeEIsNkVBQWdCOzhCQUM5Qiw0RUFBQ0gsa0RBQU1BO3dCQUFDK0IsU0FBUyxJQUFNakI7d0JBQVFrQixNQUFLO3dCQUFhQyxvQkFBTSw4REFBQ25DLDhEQUFpQkE7NEJBQUNrQyxNQUFNOzt3QkFBUUUsVUFBUzs7Ozs7Ozs7Ozs7OEJBRW5HLDhEQUFDUjtvQkFBSUMsV0FBV3hCLDJFQUFjOztzQ0FDNUIsOERBQUNpQzs0QkFBR1QsV0FBV3hCLHlFQUFZO3NDQUFHSSxXQUFXK0IsTUFBTTs7Ozs7O3NDQUMvQyw4REFBQ1o7c0NBQ0MsNEVBQUMxQixrREFBTUE7Z0NBQUNnQyxNQUFLO2dDQUFVRSxVQUFTO2dDQUFXSyxVQUFVM0Isb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTNEIsTUFBTTs7Ozs7Ozs7Ozs7c0NBRXRFLDhEQUFDZDs0QkFBSUMsV0FBV3hCLCtFQUFrQjs7Z0NBQy9CTyxxQkFDQyw4REFBQ1QsOERBQVVBO29DQUFDeUMsVUFBVSxJQUFJO29DQUFFL0IsU0FBU0E7b0NBQVNnQyxVQUFTO29DQUFTQyxTQUFTNUI7Ozs7OzhEQUV6RSw4REFBQ2hCLGtEQUFNQTtvQ0FBQ2dDLE1BQUs7b0NBQVNFLFVBQVM7b0NBQW9CSCxTQUFTLElBQU1wQixRQUFRLElBQUk7Ozs7OzZDQUMvRTs4Q0FDRCw4REFBQ2tDO29DQUFHbEIsV0FBV3hCLCtFQUFrQjs4Q0FBR1MsQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTNEIsTUFBTSxLQUFJNUIsUUFBUW1DLEdBQUcsQ0FBQyxDQUFDbkMsU0FBU29DLGtCQUFNLDhEQUFDOUMsZ0VBQVdBOzRDQUFTVSxTQUFTQTsyQ0FBWm9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUd6Ryw4REFBQ3RCO29CQUFJQyxXQUFXeEIseUVBQVk7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRDO0dBbkVNRzs7UUFDZVAsb0RBQVdBO1FBWTFCTCxrREFBU0E7UUE2QkVXLDREQUFTQTs7O0tBMUNwQkM7QUFxRU4sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3c09uRmlsbS9SZXZpZXdzT25GaWxtLnRzeD9lZGMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWRBcnJvd0JhY2tJb3NOZXcgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9CdXR0b24vQnV0dG9uJztcclxuXHJcblxyXG5cclxuaW1wb3J0IEZvcm1SZXZpZXcgZnJvbSAnLi9Gb3JtUmV2aWV3L0Zvcm1SZXZpZXcnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL1Jldmlld3NMaXN0L1Jldmlld3NJdGVtJztcclxuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gJy4vUmV2aWV3c0xpc3QvUmV2aWV3c0xpc3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmV2aWV3c09uRmlsbS5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGNvbW1lbnRzUHJvcHMgfSBmcm9tICcuL3Byb3BzJztcclxuaW1wb3J0IHsgc2VsZWN0UGlja2VkTW92aWUgfSBmcm9tICdAL3NyYy9zdG9yZS9yZWR1Y2Vycy9kYXRhQmFzZVJlZHVjZXInO1xyXG5pbXBvcnQgeyBJUmV2aWV3cyB9IGZyb20gJ0Avc3JjL3R5cGVzL0NvbW1lbnRzVHlwZSc7XHJcbmltcG9ydCB7IHVzZU91c2lkZSB9IGZyb20gJ0Avc3JjL2hvb2tzL3VzZU91dHNpZGUnO1xyXG5cclxuXHJcbmNvbnN0IFJldmlld3NPbkZpbG0gPSAoKSA9PiB7XHJcbiAgY29uc3QgcGlja2VkRmlsbSA9IHVzZVNlbGVjdG9yKHNlbGVjdFBpY2tlZE1vdmllKVxyXG4gIGNvbnNvbGUubG9nKHBpY2tlZEZpbG0pXHJcblxyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgLy8gY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyBjb25zdCBbdGV4dGFyZWEsIHNldFRleHRhcmVhXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICAvLyBjb25zdCBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlPElSZXZpZXdzW10+KClcclxuICBjb25zdCB7XHJcbiAgICBiYWNrLFxyXG4gICAgcXVlcnk6IHsgaWQgfVxyXG4gIH0gPSB1c2VSb3V0ZXIoKVxyXG4gIC8vIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gaWYgKGl0ZW1zKSB7XHJcbiAgICAvLyAgIHNldENvbW1lbnQoaXRlbXMpXHJcbiAgICAvLyB9IGVsc2Uge1xyXG5cclxuICAgIC8vIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDQvbW92aWVzLyR7aWR9YCwge1xyXG4gICAgLy8gICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgIC50aGVuKGpzb24gPT4gc2V0TW92aWUoanNvbikpXHJcbiAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuXHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA0L2NvbW1lbnRzLyR7aWR9L3RyZWVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihqc29uID0+IHNldENvbW1lbnQoanNvbikpXHJcbiAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC8vIH1cclxuICB9LCBbXSlcclxuICBjb25zdCB7cmVmIH0gPSB1c2VPdXNpZGUoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVpbmVyX193cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ0bkdvQmFja30+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGJhY2soKX0gc2l6ZT0naWNvbkdvQmFjaycgaWNvbj17PE1kQXJyb3dCYWNrSW9zTmV3IHNpemU9ezI1fSAvPn0gY2hpbGRyZW49J9CaINGE0LjQu9GM0LzRgycgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbWVudHN9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57cGlja2VkRmlsbS5uYW1lUnV9PC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT0ncmV2aWV3cycgY2hpbGRyZW49J9Cg0LXRhtC10L3Qt9C40LgnIHF1YW50aXR5PXtjb21tZW50Py5sZW5ndGh9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tZW50c19idG59PlxyXG4gICAgICAgICAgICB7c2hvdyA/IChcclxuICAgICAgICAgICAgICA8Rm9ybVJldmlldyBpZFJldmlldz17bnVsbH0gc2V0U2hvdz17c2V0U2hvd30gZm9ybU5hbWU9J1JldmlldycgbW92aWVJZD17aWR9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPSdib3JkZXInIGNoaWxkcmVuPSfQndCw0L/QuNGB0LDRgtGMINGA0LXRhtC10L3Qt9C40Y4nIG9uQ2xpY2s9eygpID0+IHNldFNob3codHJ1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50TGlzdH0+e2NvbW1lbnQ/Lmxlbmd0aCAmJiBjb21tZW50Lm1hcCgoY29tbWVudCwgaSkgPT4gPENvbW1lbnRMaXN0IGtleT17aX0gY29tbWVudD17Y29tbWVudH0gLz4pfTwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdmllfT7QmtCw0YDRgtC+0YfQutCwINGE0LjQu9GM0LzQsCE8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJldmlld3NPbkZpbG0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1kQXJyb3dCYWNrSW9zTmV3IiwidXNlU2VsZWN0b3IiLCJCdXR0b24iLCJGb3JtUmV2aWV3IiwiQ29tbWVudExpc3QiLCJzdHlsZXMiLCJzZWxlY3RQaWNrZWRNb3ZpZSIsInVzZU91c2lkZSIsIlJldmlld3NPbkZpbG0iLCJwaWNrZWRGaWxtIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJzZXRTaG93IiwiY29tbWVudCIsInNldENvbW1lbnQiLCJiYWNrIiwicXVlcnkiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZWluZXIiLCJjb250ZWluZXJfX3dyYXBwZXIiLCJidG5Hb0JhY2siLCJvbkNsaWNrIiwic2l6ZSIsImljb24iLCJjaGlsZHJlbiIsImNvbWVudHMiLCJoMiIsInRpdGxlIiwibmFtZVJ1IiwicXVhbnRpdHkiLCJsZW5ndGgiLCJjb21lbnRzX2J0biIsImlkUmV2aWV3IiwiZm9ybU5hbWUiLCJtb3ZpZUlkIiwidWwiLCJjb21tZW50TGlzdCIsIm1hcCIsImkiLCJtb3ZpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ReviewsOnFilm/ReviewsOnFilm.tsx\n"));

/***/ })

});