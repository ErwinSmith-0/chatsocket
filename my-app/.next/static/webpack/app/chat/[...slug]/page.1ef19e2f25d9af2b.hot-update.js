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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../lib/socket */ \"(app-pages-browser)/./lib/socket.js\");\n/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Messages */ \"(app-pages-browser)/./src/app/chat/[...slug]/Messages.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n// import { useEffect } from \"react\";\n// import { socket } from \"../../../../lib/socket\";\n// export default function Page({ params }) {\n//   useEffect(() => {\n//     const fun = async () => {\n//       const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n//         method: \"POST\",\n//         body: JSON.stringify({\n//           sender: params.slug[0],\n//           sender: params.slug[1],\n//         }),\n//       });\n//     };\n//     // fun();\n//     // console.log(\"useeee\");\n//     // const createroom = async () => {\n//     //   socket.emit(\"join_room\");\n//     // };\n//     // createroom();\n//   }, []);\n//   return (\n//     <>\n//       <div className=\"max-w-lg mx-auto mt-10\">\n//         <div className=\"flex justify-between\">\n//           <h1>UserName: {params.slug[0]}</h1>\n//           <h1>Send To: {params.slug[1]}</h1>\n//         </div>\n//         <hr />\n//         <div className=\"flex justify-between\">\n//           <div className=\"mt-5\">user A init</div>\n//           <div className=\"mt-10\">user B init</div>\n//         </div>\n//         <div className=\"flex justify-between\">\n//           <div className=\"mt-5\">user A init</div>\n//           <div className=\"mt-10\">user B init</div>\n//         </div>\n//       </div>\n//       <div className=\"flex justify-center\">\n//         <div className=\"absolute bottom-10\">\n//           <div className=\"space-x-4\">\n//             <input className=\"text-black rounded-md\" />\n//             <label className=\"bg-blue-500 rounded-md pl-4 pr-4 p-1.5\">\n//               +\n//               <input\n//                 className=\"w-full hidden h-full rounded text-gray-950\"\n//                 type=\"file\"\n//                 name=\"attachment\"\n//                 placeholder=\"Attachment\"\n//               />\n//             </label>\n//             {/* <button className=\"bg-blue-500 rounded-md pl-4 pr-4\">+</button> */}\n//             <button className=\"bg-blue-500 rounded-md pl-4 pr-4 p-0.5\">\n//               send\n//             </button>\n//           </div>\n//         </div>\n//       </div>\n//     </>\n//   );\n// }\n\n\n\n\nconst page = async (param)=>{\n    let { params } = param;\n    const getroom = async ()=>{\n        const res = await fetch(\"http://localhost:3050/api/v1/room\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                sender: params.slug[0],\n                receiver: params.slug[1]\n            })\n        });\n        return res.json();\n    };\n    // console.log(params.slug[0], params.slug[1], \"res\");\n    const res = await getroom();\n    // console.log(res);\n    const createroom = async ()=>{\n        _lib_socket__WEBPACK_IMPORTED_MODULE_3__.socket.emit(\"join_room\", res.data._id);\n    };\n    createroom();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-lg mx-auto mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"UserName: \",\n                                params.slug[0]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: [\n                                \"Send To: \",\n                                params.slug[1]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    currentRoomId: res.data._id,\n                    senderId: params.slug[0],\n                    receiverId: params.slug[1]\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\shayan.ahmed\\\\Desktop\\\\New folder\\\\scoketnext\\\\my-app\\\\src\\\\app\\\\chat\\\\[...slug]\\\\page.jsx\",\n            lineNumber: 96,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY2hhdC9bLi4uc2x1Z10vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUVuRCw2Q0FBNkM7QUFDN0Msc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyx1RUFBdUU7QUFDdkUsMEJBQTBCO0FBQzFCLGlDQUFpQztBQUNqQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDLGNBQWM7QUFDZCxZQUFZO0FBQ1osU0FBUztBQUVULGdCQUFnQjtBQUNoQixnQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixhQUFhO0FBQ2IsU0FBUztBQUNULGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsZ0RBQWdEO0FBQ2hELCtDQUErQztBQUMvQyxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQscURBQXFEO0FBQ3JELGlCQUFpQjtBQUVqQixpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELHFEQUFxRDtBQUNyRCxpQkFBaUI7QUFDakIsZUFBZTtBQUVmLDhDQUE4QztBQUM5QywrQ0FBK0M7QUFDL0Msd0NBQXdDO0FBQ3hDLDBEQUEwRDtBQUMxRCx5RUFBeUU7QUFDekUsa0JBQWtCO0FBQ2xCLHVCQUF1QjtBQUN2Qix5RUFBeUU7QUFDekUsOEJBQThCO0FBQzlCLG9DQUFvQztBQUNwQywyQ0FBMkM7QUFDM0MsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2QixzRkFBc0Y7QUFDdEYsMEVBQTBFO0FBQzFFLHFCQUFxQjtBQUNyQix3QkFBd0I7QUFDeEIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2YsVUFBVTtBQUNWLE9BQU87QUFDUCxJQUFJO0FBRXlCO0FBQ1k7QUFDTztBQUNkO0FBQ2xDLE1BQU1LLE9BQU87UUFBTyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIsTUFBTUMsVUFBVTtRQUNkLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxxQ0FBcUM7WUFDM0RDLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQkMsUUFBUVQsT0FBT1UsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCQyxVQUFVWCxPQUFPVSxJQUFJLENBQUMsRUFBRTtZQUMxQjtRQUNGO1FBQ0EsT0FBT1IsSUFBSVUsSUFBSTtJQUNqQjtJQUVBLHNEQUFzRDtJQUN0RCxNQUFNVixNQUFNLE1BQU1EO0lBQ2xCLG9CQUFvQjtJQUNwQixNQUFNWSxhQUFhO1FBQ2pCaEIsK0NBQU1BLENBQUNpQixJQUFJLENBQUMsYUFBYVosSUFBSWEsSUFBSSxDQUFDQyxHQUFHO0lBQ3ZDO0lBQ0FIO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNJO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOztnQ0FBRztnQ0FBV25CLE9BQU9VLElBQUksQ0FBQyxFQUFFOzs7Ozs7O3NDQUM3Qiw4REFBQ1M7O2dDQUFHO2dDQUFVbkIsT0FBT1UsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7OEJBRTlCLDhEQUFDVTs7Ozs7OEJBRUQsOERBQUN0QixpREFBUUE7b0JBQ1B1QixlQUFlbkIsSUFBSWEsSUFBSSxDQUFDQyxHQUFHO29CQUMzQk0sVUFBVXRCLE9BQU9VLElBQUksQ0FBQyxFQUFFO29CQUN4QmEsWUFBWXZCLE9BQU9VLElBQUksQ0FBQyxFQUFFOzs7Ozs7Ozs7Ozs7O0FBS3BDO0FBRUEsK0RBQWVYLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jaGF0L1suLi5zbHVnXS9wYWdlLmpzeD9hNmFjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgc29ja2V0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9zb2NrZXRcIjtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBwYXJhbXMgfSkge1xyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBjb25zdCBmdW4gPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDUwL2FwaS92MS9yb29tXCIsIHtcclxuLy8gICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuLy8gICAgICAgICAgIHNlbmRlcjogcGFyYW1zLnNsdWdbMF0sXHJcbi8vICAgICAgICAgICBzZW5kZXI6IHBhcmFtcy5zbHVnWzFdLFxyXG4vLyAgICAgICAgIH0pLFxyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH07XHJcblxyXG4vLyAgICAgLy8gZnVuKCk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcInVzZWVlZVwiKTtcclxuLy8gICAgIC8vIGNvbnN0IGNyZWF0ZXJvb20gPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAvLyAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIpO1xyXG4vLyAgICAgLy8gfTtcclxuLy8gICAgIC8vIGNyZWF0ZXJvb20oKTtcclxuLy8gICB9LCBbXSk7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDw+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbGcgbXgtYXV0byBtdC0xMFwiPlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuLy8gICAgICAgICAgIDxoMT5Vc2VyTmFtZToge3BhcmFtcy5zbHVnWzBdfTwvaDE+XHJcbi8vICAgICAgICAgICA8aDE+U2VuZCBUbzoge3BhcmFtcy5zbHVnWzFdfTwvaDE+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPGhyIC8+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+dXNlciBBIGluaXQ8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj51c2VyIEIgaW5pdDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj51c2VyIEEgaW5pdDwvZGl2PlxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPnVzZXIgQiBpbml0PC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMTBcIj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00XCI+XHJcbi8vICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIHJvdW5kZWQtbWRcIiAvPlxyXG4vLyAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0xLjVcIj5cclxuLy8gICAgICAgICAgICAgICArXHJcbi8vICAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaGlkZGVuIGgtZnVsbCByb3VuZGVkIHRleHQtZ3JheS05NTBcIlxyXG4vLyAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4vLyAgICAgICAgICAgICAgICAgbmFtZT1cImF0dGFjaG1lbnRcIlxyXG4vLyAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBdHRhY2htZW50XCJcclxuLy8gICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICA8L2xhYmVsPlxyXG4vLyAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCByb3VuZGVkLW1kIHBsLTQgcHItNFwiPis8L2J1dHRvbj4gKi99XHJcbi8vICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcm91bmRlZC1tZCBwbC00IHByLTQgcC0wLjVcIj5cclxuLy8gICAgICAgICAgICAgICBzZW5kXHJcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgPC8+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHNvY2tldCB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvc29ja2V0XCI7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYWdlc1wiO1xyXG5jb25zdCBwYWdlID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcclxuICBjb25zdCBnZXRyb29tID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwNTAvYXBpL3YxL3Jvb21cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBzZW5kZXI6IHBhcmFtcy5zbHVnWzBdLFxyXG4gICAgICAgIHJlY2VpdmVyOiBwYXJhbXMuc2x1Z1sxXSxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHBhcmFtcy5zbHVnWzBdLCBwYXJhbXMuc2x1Z1sxXSwgXCJyZXNcIik7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0cm9vbSgpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgY29uc3QgY3JlYXRlcm9vbSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNvY2tldC5lbWl0KFwiam9pbl9yb29tXCIsIHJlcy5kYXRhLl9pZCk7XHJcbiAgfTtcclxuICBjcmVhdGVyb29tKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWxnIG14LWF1dG8gbXQtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8aDE+VXNlck5hbWU6IHtwYXJhbXMuc2x1Z1swXX08L2gxPlxyXG4gICAgICAgICAgPGgxPlNlbmQgVG86IHtwYXJhbXMuc2x1Z1sxXX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICA8TWVzc2FnZXNcclxuICAgICAgICAgIGN1cnJlbnRSb29tSWQ9e3Jlcy5kYXRhLl9pZH1cclxuICAgICAgICAgIHNlbmRlcklkPXtwYXJhbXMuc2x1Z1swXX1cclxuICAgICAgICAgIHJlY2VpdmVySWQ9e3BhcmFtcy5zbHVnWzFdfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJNZXNzYWdlcyIsInBhZ2UiLCJwYXJhbXMiLCJnZXRyb29tIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZW5kZXIiLCJzbHVnIiwicmVjZWl2ZXIiLCJqc29uIiwiY3JlYXRlcm9vbSIsImVtaXQiLCJkYXRhIiwiX2lkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJociIsImN1cnJlbnRSb29tSWQiLCJzZW5kZXJJZCIsInJlY2VpdmVySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/chat/[...slug]/page.jsx\n"));

/***/ })

});