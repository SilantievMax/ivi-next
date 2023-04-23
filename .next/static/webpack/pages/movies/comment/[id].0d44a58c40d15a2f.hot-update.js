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

/***/ "./src/components/ReviewsOnFilm/FormReview/FormReview.tsx":
/*!****************************************************************!*\
  !*** ./src/components/ReviewsOnFilm/FormReview/FormReview.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Button/Button */ \"./src/components/Button/Button.tsx\");\n/* harmony import */ var _ElementsForm_NameInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ElementsForm/NameInput */ \"./src/components/ReviewsOnFilm/ElementsForm/NameInput.tsx\");\n/* harmony import */ var _ElementsForm_ReviewInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ElementsForm/ReviewInput */ \"./src/components/ReviewsOnFilm/ElementsForm/ReviewInput.tsx\");\n/* harmony import */ var _FormReview_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormReview.module.scss */ \"./src/components/ReviewsOnFilm/FormReview/FormReview.module.scss\");\n/* harmony import */ var _FormReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_FormReview_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst FormReview = (param)=>{\n    let { setShow , formName , idReview , movieId  } = param;\n    _s();\n    const [nameInput, setNameInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [nameReview, setReviewInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [placeholder, setPlaceholder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [disable, setDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // console.log(idReview)\n    const { register , formState: { errors  } , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();\n    const onSubmit = (data)=>{\n        const requestOptions = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                type: \"POSITIVE\",\n                title: \"\".concat(data.title ? data.title : \"\"),\n                description: \"\".concat(data.description),\n                repliedOnComment: Number(\"\".concat(idReview))\n            })\n        };\n        console.log(requestOptions);\n        fetch(\"http://localhost:3004/comments/\".concat(movieId), requestOptions).then((res)=>res.json()).then((json)=>console.log(json)).catch((err)=>console.log(err));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        switch(formName){\n            case \"Review\":\n                setNameInput(true);\n                setReviewInput(true);\n                setPlaceholder(\"Ваша рецензия\");\n                break;\n            case \"Comment\":\n                setReviewInput(true);\n                setPlaceholder(\"Ваш коментарий\");\n                break;\n            default:\n                setNameInput(true);\n                setReviewInput(true);\n                break;\n        }\n    // if (value.length > 10) {\n    //   setDisable(false)\n    // } else {\n    //   setDisable(true)\n    // }\n    }, [\n        formName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_FormReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form),\n        action: \"\",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            nameInput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ElementsForm_NameInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                register: register,\n                errors: errors\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                lineNumber: 78,\n                columnNumber: 21\n            }, undefined),\n            nameReview && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ElementsForm_ReviewInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                register: register,\n                errors: errors,\n                placeholder: placeholder\n            }, void 0, false, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                lineNumber: 79,\n                columnNumber: 22\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FormReview_module_scss__WEBPACK_IMPORTED_MODULE_6___default().form__buttons),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"border\",\n                            children: \"Отменить\",\n                            onClick: ()=>setShow(false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            color: \"red\",\n                            children: \"Отправить\",\n                            disable: disable\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Project\\\\ivi_next\\\\ivi-next\\\\src\\\\components\\\\ReviewsOnFilm\\\\FormReview\\\\FormReview.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FormReview, \"WXWFGTef8UaRxfJhMysJivkz5A4=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm\n    ];\n});\n_c = FormReview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormReview);\nvar _c;\n$RefreshReg$(_c, \"FormReview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL0Zvcm1SZXZpZXcvRm9ybVJldmlldy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNUO0FBSUc7QUFDSztBQUNJO0FBSVI7QUFXOUMsTUFBTVEsYUFBYSxTQUErRDtRQUE5RCxFQUFFQyxRQUFPLEVBQUVDLFNBQVEsRUFBRUMsU0FBUSxFQUFFQyxRQUFPLEVBQW1COztJQUMzRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNhLFlBQVlDLGVBQWUsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUNuRCxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUMsd0JBQXdCO0lBRXhCLE1BQU0sRUFDSm1CLFNBQVEsRUFDUkMsV0FBVyxFQUFFQyxPQUFNLEVBQUUsR0FDckJDLGFBQVksRUFDYixHQUFHckIsd0RBQU9BO0lBRVgsTUFBTXNCLFdBQVcsQ0FBQ0MsT0FBa0I7UUFFbEMsTUFBTUMsaUJBQWlCO1lBQ3JCQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE1BQU07Z0JBQVlDLE9BQU8sR0FBZ0MsT0FBN0JSLEtBQUtRLEtBQUssR0FBR1IsS0FBS1EsS0FBSyxHQUFHLEVBQUU7Z0JBQUlDLGFBQWEsR0FBb0IsT0FBakJULEtBQUtTLFdBQVc7Z0JBQUlDLGtCQUFrQkMsT0FBTyxHQUFZLE9BQVQxQjtZQUFZO1FBQ2pLO1FBQ0EyQixRQUFRQyxHQUFHLENBQUNaO1FBRVphLE1BQU0sa0NBQTBDLE9BQVI1QixVQUFXZSxnQkFDaERjLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSSxJQUNwQkYsSUFBSSxDQUFDRSxDQUFBQSxPQUFRTCxRQUFRQyxHQUFHLENBQUNJLE9BQ3pCQyxLQUFLLENBQUNDLENBQUFBLE1BQU9QLFFBQVFDLEdBQUcsQ0FBQ007SUFDOUI7SUFFQTVDLGdEQUFTQSxDQUFDLElBQU07UUFDZCxPQUFRUztZQUNOLEtBQUs7Z0JBQ0hJLGFBQWEsSUFBSTtnQkFDakJFLGVBQWUsSUFBSTtnQkFDbkJFLGVBQWU7Z0JBQ2YsS0FBSztZQUNQLEtBQUs7Z0JBQ0hGLGVBQWUsSUFBSTtnQkFDbkJFLGVBQWU7Z0JBQ2YsS0FBSztZQUNQO2dCQUNFSixhQUFhLElBQUk7Z0JBQ2pCRSxlQUFlLElBQUk7Z0JBQ25CLEtBQUs7UUFDVDtJQUNBLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixJQUFJO0lBQ04sR0FBRztRQUFDTjtLQUFTO0lBRWIscUJBQ0UsOERBQUNvQztRQUFLQyxXQUFXeEMscUVBQVc7UUFBRXlDLFFBQU87UUFBR3ZCLFVBQVVELGFBQWFDOztZQUU1RFosMkJBQWEsOERBQUNSLCtEQUFTQTtnQkFBQ2dCLFVBQVVBO2dCQUFVRSxRQUFRQTs7Ozs7O1lBQ3BEUiw0QkFBYyw4REFBQ1QsaUVBQVdBO2dCQUFDZSxVQUFVQTtnQkFBVUUsUUFBUUE7Z0JBQVFOLGFBQWFBOzs7Ozs7MEJBQzdFLDhEQUFDZ0M7Z0JBQUlGLFdBQVd4Qyw4RUFBb0I7O2tDQUNsQyw4REFBQzBDO2tDQUNDLDRFQUFDN0Msa0RBQU1BOzRCQUFDK0MsTUFBSzs0QkFBU0MsVUFBUzs0QkFBV0MsU0FBUyxJQUFNNUMsUUFBUSxLQUFLOzs7Ozs7Ozs7OztrQ0FFeEUsOERBQUN3QztrQ0FDQyw0RUFBQzdDLGtEQUFNQTs0QkFBQ2tELE9BQU07NEJBQU1GLFVBQVM7NEJBQVlqQyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUQ7R0FuRU1YOztRQVlBTCxvREFBT0E7OztLQVpQSztBQXFFTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzT25GaWxtL0Zvcm1SZXZpZXcvRm9ybVJldmlldy50c3g/NmMwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcblxyXG5cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL0J1dHRvbi9CdXR0b24nO1xyXG5pbXBvcnQgTmFtZUlucHV0IGZyb20gJy4uL0VsZW1lbnRzRm9ybS9OYW1lSW5wdXQnO1xyXG5pbXBvcnQgUmV2aWV3SW5wdXQgZnJvbSAnLi4vRWxlbWVudHNGb3JtL1Jldmlld0lucHV0JztcclxuXHJcblxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm1SZXZpZXcubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBJSW5wdXRzIH0gZnJvbSAnQC9zcmMvdHlwZXMvQ29tbWVudHNUeXBlJztcclxuXHJcblxyXG5pbnRlcmZhY2UgRm9ybVJldmlld1Byb3BzIHtcclxuICBzZXRTaG93OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj5cclxuICBmb3JtTmFtZTogJ1JldmlldycgfCAnQ29tbWVudCdcclxuICBpZFJldmlldzogbnVtYmVyIHwgbnVsbFxyXG4gIG1vdmllSWQ6IHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIHwgdW5cclxufVxyXG5cclxuY29uc3QgRm9ybVJldmlldyA9ICh7IHNldFNob3csIGZvcm1OYW1lLCBpZFJldmlldywgbW92aWVJZCB9OiBGb3JtUmV2aWV3UHJvcHMpID0+IHtcclxuICBjb25zdCBbbmFtZUlucHV0LCBzZXROYW1lSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW25hbWVSZXZpZXcsIHNldFJldmlld0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwbGFjZWhvbGRlciwgc2V0UGxhY2Vob2xkZXJdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IFtkaXNhYmxlLCBzZXREaXNhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIC8vIGNvbnNvbGUubG9nKGlkUmV2aWV3KVxyXG5cclxuICBjb25zdCB7XHJcbiAgICByZWdpc3RlcixcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICAgIGhhbmRsZVN1Ym1pdFxyXG4gIH0gPSB1c2VGb3JtPElJbnB1dHM+KClcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUlucHV0cykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHR5cGU6ICdQT1NJVElWRScsIHRpdGxlOiBgJHtkYXRhLnRpdGxlID8gZGF0YS50aXRsZSA6ICcnfWAsIGRlc2NyaXB0aW9uOiBgJHtkYXRhLmRlc2NyaXB0aW9ufWAsIHJlcGxpZWRPbkNvbW1lbnQ6IE51bWJlcihgJHtpZFJldmlld31gKSB9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocmVxdWVzdE9wdGlvbnMpXHJcblxyXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jb21tZW50cy8ke21vdmllSWR9YCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihqc29uID0+IGNvbnNvbGUubG9nKGpzb24pKVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoIChmb3JtTmFtZSkge1xyXG4gICAgICBjYXNlICdSZXZpZXcnOlxyXG4gICAgICAgIHNldE5hbWVJbnB1dCh0cnVlKVxyXG4gICAgICAgIHNldFJldmlld0lucHV0KHRydWUpXHJcbiAgICAgICAgc2V0UGxhY2Vob2xkZXIoJ9CS0LDRiNCwINGA0LXRhtC10L3Qt9C40Y8nKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICAgIGNhc2UgJ0NvbW1lbnQnOlxyXG4gICAgICAgIHNldFJldmlld0lucHV0KHRydWUpXHJcbiAgICAgICAgc2V0UGxhY2Vob2xkZXIoJ9CS0LDRiCDQutC+0LzQtdC90YLQsNGA0LjQuScpXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzZXROYW1lSW5wdXQodHJ1ZSlcclxuICAgICAgICBzZXRSZXZpZXdJbnB1dCh0cnVlKVxyXG4gICAgICAgIGJyZWFrXHJcbiAgICB9XHJcbiAgICAvLyBpZiAodmFsdWUubGVuZ3RoID4gMTApIHtcclxuICAgIC8vICAgc2V0RGlzYWJsZShmYWxzZSlcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIHNldERpc2FibGUodHJ1ZSlcclxuICAgIC8vIH1cclxuICB9LCBbZm9ybU5hbWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gYWN0aW9uPScnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgICAgey8qIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX190aXRsZX0+0JLRiNCwINC+0YbQtdC90LrQsDwvaDM+ICovfVxyXG4gICAgICB7bmFtZUlucHV0ICYmIDxOYW1lSW5wdXQgcmVnaXN0ZXI9e3JlZ2lzdGVyfSBlcnJvcnM9e2Vycm9yc30gLz59XHJcbiAgICAgIHtuYW1lUmV2aWV3ICYmIDxSZXZpZXdJbnB1dCByZWdpc3Rlcj17cmVnaXN0ZXJ9IGVycm9ycz17ZXJyb3JzfSBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fX2J1dHRvbnN9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9J2JvcmRlcicgY2hpbGRyZW49J9Ce0YLQvNC10L3QuNGC0YwnIG9uQ2xpY2s9eygpID0+IHNldFNob3coZmFsc2UpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdyZWQnIGNoaWxkcmVuPSfQntGC0L/RgNCw0LLQuNGC0YwnIGRpc2FibGU9e2Rpc2FibGV9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVJldmlldyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRm9ybSIsIkJ1dHRvbiIsIk5hbWVJbnB1dCIsIlJldmlld0lucHV0Iiwic3R5bGVzIiwiRm9ybVJldmlldyIsInNldFNob3ciLCJmb3JtTmFtZSIsImlkUmV2aWV3IiwibW92aWVJZCIsIm5hbWVJbnB1dCIsInNldE5hbWVJbnB1dCIsIm5hbWVSZXZpZXciLCJzZXRSZXZpZXdJbnB1dCIsInBsYWNlaG9sZGVyIiwic2V0UGxhY2Vob2xkZXIiLCJkaXNhYmxlIiwic2V0RGlzYWJsZSIsInJlZ2lzdGVyIiwiZm9ybVN0YXRlIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0Iiwib25TdWJtaXQiLCJkYXRhIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInJlcGxpZWRPbkNvbW1lbnQiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZm9ybSIsImNsYXNzTmFtZSIsImFjdGlvbiIsImRpdiIsImZvcm1fX2J1dHRvbnMiLCJzaXplIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ReviewsOnFilm/FormReview/FormReview.tsx\n"));

/***/ })

});