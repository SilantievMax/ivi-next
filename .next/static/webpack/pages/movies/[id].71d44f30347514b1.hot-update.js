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

/***/ "./src/components/Reviews/Rewiew/Review.tsx":
/*!**************************************************!*\
  !*** ./src/components/Reviews/Rewiew/Review.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Review_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Review.module.scss */ \"./src/components/Reviews/Rewiew/Review.module.scss\");\n/* harmony import */ var _Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Review_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_components_VoteBtns_VoteBtns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/src/components/VoteBtns/VoteBtns */ \"./src/components/VoteBtns/VoteBtns.tsx\");\n/* harmony import */ var _widthWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widthWindow */ \"./src/components/Reviews/widthWindow.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Review = (param)=>{\n    let { rewiew  } = param;\n    _s();\n    const { author , createdAt , date , description , id , movieId , title , type , updatedAt , userId  } = rewiew || {};\n    // console.log(stringLength)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: rewiew ? // <div className={styles.review}>\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: {\n                pathname: \"./comment/\".concat(movieId)\n            },\n            className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().review),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),\n                    children: author\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined),\n                title ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: title.length >= (0,_widthWindow__WEBPACK_IMPORTED_MODULE_4__[\"default\"])() ? title.slice(0, 50) + \" ...\" : title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 20\n                }, undefined) : \"\",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),\n                    children: description.length >= 70 ? description.slice(0, 70) + \" ...\" : description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().date),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: date.slice(0, 10)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_VoteBtns_VoteBtns__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            votes: \"12\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined) : // </div>\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().notReview),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_Review_module_scss__WEBPACK_IMPORTED_MODULE_5___default().notText),\n                children: \"Ничего не написано\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n                lineNumber: 38,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\Reviews\\\\Rewiew\\\\Review.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Review, \"zJg5r8J1sBEP1FLST1FDfzCwa5M=\", false, function() {\n    return [\n        _widthWindow__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Review;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL1Jld2lldy9SZXZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSztBQUlRO0FBQ2dCO0FBRWY7QUFPM0MsTUFBTUssU0FBMkIsU0FBOEI7UUFBN0IsRUFBRUMsT0FBTSxFQUFnQjs7SUFDeEQsTUFBTSxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsS0FBSSxFQUFFQyxZQUFXLEVBQUVDLEdBQUUsRUFBRUMsUUFBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsVUFBUyxFQUFFQyxPQUFNLEVBQUUsR0FBR1YsVUFBVSxDQUFDO0lBQzNHLDRCQUE0QjtJQUUxQixxQkFDRTtrQkFDR0EsU0FDQyxrQ0FBa0M7c0JBQ2xDLDhEQUFDTixrREFBSUE7WUFBQ2lCLE1BQU07Z0JBQUVDLFVBQVUsYUFBcUIsT0FBUk47WUFBVTtZQUFHTyxXQUFXakIsbUVBQWE7OzhCQUN4RSw4REFBQ21CO29CQUFJRixXQUFXakIsaUVBQVc7OEJBQUdLOzs7Ozs7Z0JBQzdCTSxzQkFBUSw4REFBQ1U7b0JBQUdKLFdBQVdqQixrRUFBWTs4QkFBR1csTUFBTVcsTUFBTSxJQUFJcEIsd0RBQWFBLEtBQUtTLE1BQU1ZLEtBQUssQ0FBQyxHQUFHLE1BQU0sU0FBU1osS0FBSzs7Ozs7Z0NBQVMsRUFBRTs4QkFDdkgsOERBQUNhO29CQUFFUCxXQUFXakIsd0VBQWtCOzhCQUFHUSxZQUFhYyxNQUFNLElBQUksS0FBS2QsWUFBYWUsS0FBSyxDQUFDLEdBQUcsTUFBTSxTQUFTZixXQUFXOzs7Ozs7OEJBQy9HLDhEQUFDVztvQkFBSUYsV0FBV2pCLG1FQUFhOztzQ0FDM0IsOERBQUNtQjs0QkFBSUYsV0FBV2pCLGlFQUFXO3NDQUN6Qiw0RUFBQ3dCOzBDQUFHakIsS0FBTWdCLEtBQUssQ0FBQyxHQUFHOzs7Ozs7Ozs7OztzQ0FFckIsOERBQUN0Qix5RUFBUUE7NEJBQUN5QixPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFJcEIsU0FBUztzQkFDVCw4REFBQ1A7WUFBSUYsV0FBV2pCLHNFQUFnQjtzQkFDOUIsNEVBQUN3QjtnQkFBRVAsV0FBV2pCLG9FQUFjOzBCQUFFOzs7Ozs7Ozs7O3FCQUVqQzs7QUFHUDtHQTNCTUc7O1FBVTJERCxvREFBYUE7OztLQVZ4RUM7QUE2Qk4sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmV2aWV3cy9SZXdpZXcvUmV2aWV3LnRzeD8yNjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Jldmlldy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBWb3RlQnRucyBmcm9tICdAL3NyYy9jb21wb25lbnRzL1ZvdGVCdG5zL1ZvdGVCdG5zJztcclxuaW1wb3J0IHsgSVJldmlld3MgfSBmcm9tICdAL3NyYy90eXBlcy9Db21tZW50c1R5cGUnO1xyXG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICcuLi93aWR0aFdpbmRvdyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFJldmlld3NQcm9wcyB7XHJcbiAgcmV3aWV3PzogSVJldmlld3NcclxufVxyXG5cclxuY29uc3QgUmV2aWV3OiBGQzxSZXZpZXdzUHJvcHM+ID0gKHsgcmV3aWV3IH06IFJldmlld3NQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aG9yLCBjcmVhdGVkQXQsIGRhdGUsIGRlc2NyaXB0aW9uLCBpZCwgbW92aWVJZCwgdGl0bGUsIHR5cGUsIHVwZGF0ZWRBdCwgdXNlcklkIH0gPSByZXdpZXcgfHwge31cclxuLy8gY29uc29sZS5sb2coc3RyaW5nTGVuZ3RoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Jld2lldyA/IChcclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld30+XHJcbiAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC4vY29tbWVudC8ke21vdmllSWR9YCB9fSBjbGFzc05hbWU9e3N0eWxlcy5yZXZpZXd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57YXV0aG9yfTwvZGl2PlxyXG4gICAgICAgICAge3RpdGxlID8gPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGUubGVuZ3RoID49IHVzZVdpbmRvd1NpemUoKSA/IHRpdGxlLnNsaWNlKDAsIDUwKSArICcgLi4uJyA6IHRpdGxlfTwvaDM+IDogJyd9XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9uIS5sZW5ndGggPj0gNzAgPyBkZXNjcmlwdGlvbiEuc2xpY2UoMCwgNzApICsgJyAuLi4nIDogZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PlxyXG4gICAgICAgICAgICAgIDxwPntkYXRlIS5zbGljZSgwLCAxMCl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFZvdGVCdG5zIHZvdGVzPScxMicgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSA6IChcclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdFJldmlld30+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5ub3RUZXh0fT7QndC40YfQtdCz0L4g0L3QtSDQvdCw0L/QuNGB0LDQvdC+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXciXSwibmFtZXMiOlsiTGluayIsIlJlYWN0Iiwic3R5bGVzIiwiVm90ZUJ0bnMiLCJ1c2VXaW5kb3dTaXplIiwiUmV2aWV3IiwicmV3aWV3IiwiYXV0aG9yIiwiY3JlYXRlZEF0IiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJtb3ZpZUlkIiwidGl0bGUiLCJ0eXBlIiwidXBkYXRlZEF0IiwidXNlcklkIiwiaHJlZiIsInBhdGhuYW1lIiwiY2xhc3NOYW1lIiwicmV2aWV3IiwiZGl2IiwibmFtZSIsImgzIiwibGVuZ3RoIiwic2xpY2UiLCJwIiwiZm9vdGVyIiwidm90ZXMiLCJub3RSZXZpZXciLCJub3RUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Reviews/Rewiew/Review.tsx\n"));

/***/ })

});