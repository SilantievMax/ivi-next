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

/***/ "./src/components/Reviews/widthWindow.ts":
/*!***********************************************!*\
  !*** ./src/components/Reviews/widthWindow.ts ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useWindowSize; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useWindowSize(item) {\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        function handleResize() {\n            switch(item){\n                case \"reviews\":\n                    setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 2 : window.innerWidth >= 1500 ? 2 : 1);\n                    break;\n                case \"movie\":\n            }\n            if (item === \"reviews\") {\n                setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 2 : window.innerWidth >= 1500 ? 2 : 1);\n            } else if (item === \"movie\") {\n                setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 3 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 4 : window.innerWidth >= 1500 ? 6 : 2);\n            } else {\n                setWindowSize(window.innerWidth > 600 && window.innerWidth <= 900 ? 2 : window.innerWidth > 900 && window.innerWidth <= 1500 ? 3 : window.innerWidth >= 1500 ? 4 : 1);\n            }\n        }\n        window.addEventListener(\"resize\", handleResize);\n        handleResize();\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return windowSize;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL3dpZHRoV2luZG93LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QztBQUc3QixTQUFTRSxjQUFjQyxJQUFXLEVBQUU7SUFDakQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDO0lBRTdDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsU0FBU00sZUFBZTtZQUN0QixPQUFRSDtnQkFDTixLQUFLO29CQUNIRSxjQUFjRSxPQUFPQyxVQUFVLEdBQUcsT0FBT0QsT0FBT0MsVUFBVSxJQUFJLE1BQU0sSUFBSUQsT0FBT0MsVUFBVSxHQUFHLE9BQU9ELE9BQU9DLFVBQVUsSUFBSSxPQUFPLElBQUlELE9BQU9DLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQztvQkFDcEssS0FBSztnQkFDUCxLQUFLO1lBRVA7WUFDQSxJQUFJTCxTQUFTLFdBQVc7Z0JBQ3RCRSxjQUFjRSxPQUFPQyxVQUFVLEdBQUcsT0FBT0QsT0FBT0MsVUFBVSxJQUFJLE1BQU0sSUFBSUQsT0FBT0MsVUFBVSxHQUFHLE9BQU9ELE9BQU9DLFVBQVUsSUFBSSxPQUFPLElBQUlELE9BQU9DLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQztZQUN0SyxPQUFPLElBQUlMLFNBQVMsU0FBUztnQkFDM0JFLGNBQWNFLE9BQU9DLFVBQVUsR0FBRyxPQUFPRCxPQUFPQyxVQUFVLElBQUksTUFBTSxJQUFJRCxPQUFPQyxVQUFVLEdBQUcsT0FBT0QsT0FBT0MsVUFBVSxJQUFJLE9BQU8sSUFBSUQsT0FBT0MsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDO1lBQ3RLLE9BQU87Z0JBQ0xILGNBQWNFLE9BQU9DLFVBQVUsR0FBRyxPQUFPRCxPQUFPQyxVQUFVLElBQUksTUFBTSxJQUFJRCxPQUFPQyxVQUFVLEdBQUcsT0FBT0QsT0FBT0MsVUFBVSxJQUFJLE9BQU8sSUFBSUQsT0FBT0MsVUFBVSxJQUFJLE9BQU8sSUFBSSxDQUFDO1lBQ3RLLENBQUM7UUFDSDtRQUNBRCxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQ0E7UUFFQSxPQUFPLElBQU1DLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO0lBQ3BELEdBQUcsRUFBRTtJQUNMLE9BQU9GO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdzL3dpZHRoV2luZG93LnRzP2YzZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXaW5kb3dTaXplKGl0ZW06c3RyaW5nKSB7XHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoMClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgc3dpdGNoIChpdGVtKSB7XHJcbiAgICAgICAgY2FzZSAncmV2aWV3cyc6XHJcbiAgICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDkwMCA/IDIgOiB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxNTAwID8gMiA6IHdpbmRvdy5pbm5lcldpZHRoID49IDE1MDAgPyAyIDogMSlcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgY2FzZSAnbW92aWUnOlxyXG4gICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0gPT09ICdyZXZpZXdzJykge1xyXG4gICAgICAgIHNldFdpbmRvd1NpemUod2luZG93LmlubmVyV2lkdGggPiA2MDAgJiYgd2luZG93LmlubmVyV2lkdGggPD0gOTAwID8gMiA6IHdpbmRvdy5pbm5lcldpZHRoID4gOTAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDE1MDAgPyAyIDogd2luZG93LmlubmVyV2lkdGggPj0gMTUwMCA/IDIgOiAxKVxyXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICdtb3ZpZScpIHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDkwMCA/IDMgOiB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxNTAwID8gNCA6IHdpbmRvdy5pbm5lcldpZHRoID49IDE1MDAgPyA2IDogMilcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRXaW5kb3dTaXplKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDkwMCA/IDIgOiB3aW5kb3cuaW5uZXJXaWR0aCA+IDkwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSAxNTAwID8gMyA6IHdpbmRvdy5pbm5lcldpZHRoID49IDE1MDAgPyA0IDogMSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcclxuICAgIGhhbmRsZVJlc2l6ZSgpXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIHdpbmRvd1NpemVcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVdpbmRvd1NpemUiLCJpdGVtIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Reviews/widthWindow.ts\n"));

/***/ })

});