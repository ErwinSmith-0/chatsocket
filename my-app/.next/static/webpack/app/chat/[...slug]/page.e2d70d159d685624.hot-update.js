"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/[...slug]/page",{

/***/ "(app-pages-browser)/./src/app/chat/[...slug]/page.jsx":
/*!*****************************************!*\
  !*** ./src/app/chat/[...slug]/page.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Messages */ \"(app-pages-browser)/./src/app/chat/[...slug]/Messages.jsx\");\n/* harmony import */ var _components_Chats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Chats */ \"(app-pages-browser)/./src/components/Chats.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nconst page = async (param)=>{\n    let { params } = param;\n    const getroom = async ()=>{\n        const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                sender: params.slug[0],\n                receiver: params.slug[1]\n            })\n        });\n        return res.json();\n    };\n    // console.log(params.slug[0], params.slug[1], \"res\");\n    const res = await getroom();\n    // console.log(res);\n    const createroom = async ()=>{\n        _lib_socket__WEBPACK_IMPORTED_MODULE_3__.socket.emit(\"join_room\", res.data._id);\n    };\n    createroom();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chats__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2hhdC9bLi4uc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUNZO0FBQ087QUFDZDtBQUNLO0FBQ3ZDLE1BQU1NLE9BQU87UUFBTyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIsTUFBTUMsVUFBVTtRQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7WUFDM0RDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsUUFBUVQsT0FBT1UsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCQyxVQUFVWCxPQUFPVSxJQUFJLENBQUMsRUFBRTtZQUMxQjtRQUNGO1FBQ0EsT0FBT1IsSUFBSVUsSUFBSTtJQUNqQjtJQUVBLHNEQUFzRDtJQUN0RCxNQUFNVixNQUFNLE1BQU1EO0lBQ2xCLG9CQUFvQjtJQUNwQixNQUFNWSxhQUFhO1FBQ2pCakIsK0NBQU1BLENBQUNrQixJQUFJLENBQUMsYUFBYVosSUFBSWEsSUFBSSxDQUFDQyxHQUFHO0lBQ3ZDO0lBQ0FIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNmLHlEQUFLQTs7Ozs7O0FBZ0JaO0FBRUEsK0RBQWVDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jaGF0L1suLi5zbHVnXS9wYWdlLmpzeD9hNmFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zb2NrZXRcIjtcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBDaGF0cyBmcm9tIFwiQC9jb21wb25lbnRzL0NoYXRzXCI7XHJcbmNvbnN0IHBhZ2UgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IGdldHJvb20gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzA1MC9hcGkvdjEvcm9vbVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHNlbmRlcjogcGFyYW1zLnNsdWdbMF0sXHJcbiAgICAgICAgcmVjZWl2ZXI6IHBhcmFtcy5zbHVnWzFdLFxyXG4gICAgICB9KSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2cocGFyYW1zLnNsdWdbMF0sIHBhcmFtcy5zbHVnWzFdLCBcInJlc1wiKTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRyb29tKCk7XHJcbiAgLy8gY29uc29sZS5sb2cocmVzKTtcclxuICBjb25zdCBjcmVhdGVyb29tID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc29ja2V0LmVtaXQoXCJqb2luX3Jvb21cIiwgcmVzLmRhdGEuX2lkKTtcclxuICB9O1xyXG4gIGNyZWF0ZXJvb20oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDaGF0cyAvPlxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1sZyBteC1hdXRvIG10LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgPGgxPlVzZXJOYW1lOiB7cGFyYW1zLnNsdWdbMF19PC9oMT5cclxuICAgICAgICAgIDxoMT5TZW5kIFRvOiB7cGFyYW1zLnNsdWdbMV19PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgPE1lc3NhZ2VzXHJcbiAgICAgICAgICBjdXJyZW50Um9vbUlkPXtyZXMuZGF0YS5faWR9XHJcbiAgICAgICAgICBzZW5kZXJJZD17cGFyYW1zLnNsdWdbMF19XHJcbiAgICAgICAgICByZWNlaXZlcklkPXtwYXJhbXMuc2x1Z1sxXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInNvY2tldCIsIk1lc3NhZ2VzIiwiQ2hhdHMiLCJwYWdlIiwicGFyYW1zIiwiZ2V0cm9vbSIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VuZGVyIiwic2x1ZyIsInJlY2VpdmVyIiwianNvbiIsImNyZWF0ZXJvb20iLCJlbWl0IiwiZGF0YSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/chat/[...slug]/page.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Chats.js":
/*!*********************************!*\
  !*** ./src/components/Chats.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Chats = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Chats\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\components\\\\Chats.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Chats;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Chats);\nvar _c;\n$RefreshReg$(_c, \"Chats\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NoYXRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLFFBQVE7SUFDWixxQkFBTyw4REFBQ0M7a0JBQUk7Ozs7OztBQUNkO0tBRk1EO0FBSU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdHMuanM/M2M3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDaGF0cyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5DaGF0czwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGF0cyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Chats.js\n"));

/***/ })

});